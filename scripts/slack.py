#!/usr/bin/env python3
"""Bebelika Slack yardımcısı. Kullanım:
  slack.py post <kanal> <persona> "<metin>"      (metin '-' ise stdin'den okunur) -> ts yazdırır
  slack.py read <kanal> [saat=3] [--insan]
  slack.py replies <kanal> <ts>
"""
import json, os, sys, time, urllib.parse, urllib.request

TOKEN = os.environ.get("SLACK_BOT_TOKEN") or sys.exit("SLACK_BOT_TOKEN yok")
PERSONAS = {
    "ceo": ("Defne (CEO)", ":briefcase:"),
    "urun": ("Kerem (Ürün)", ":package:"),
    "cto": ("Ece (CTO)", ":computer:"),
    "tasarim": ("Selin (Tasarım)", ":art:"),
    "hukuk": ("Murat (Hukuk)", ":scales:"),
    "ik": ("Zeynep (İK)", ":handshake:"),
    "pazarlama": ("Can (Pazarlama)", ":mega:"),
}

def api(method, params, post=False):
    url = "https://slack.com/api/" + method
    head = {"Authorization": "Bearer " + TOKEN}
    if post:
        head["Content-Type"] = "application/json; charset=utf-8"
        req = urllib.request.Request(url, data=json.dumps(params).encode(), headers=head)
    else:
        req = urllib.request.Request(url + "?" + urllib.parse.urlencode(params), headers=head)
    r = json.load(urllib.request.urlopen(req, timeout=30))
    if not r.get("ok"):
        sys.exit("Slack hatası (%s): %s" % (method, r.get("error")))
    return r

def kanal_id(ad):
    ad, cursor = ad.lstrip("#"), ""
    while True:
        r = api("conversations.list", {"limit": 200, "exclude_archived": "true",
                                       "types": "public_channel", "cursor": cursor})
        for c in r["channels"]:
            if c["name"] == ad:
                return c["id"]
        cursor = r.get("response_metadata", {}).get("next_cursor", "")
        if not cursor:
            sys.exit("Kanal bulunamadı: " + ad)

def satir(m):
    insan = "user" in m and not m.get("bot_id")
    kim = "KURUCU" if insan else (m.get("username") or "bot")
    zaman = time.strftime("%d.%m %H:%M", time.gmtime(float(m["ts"]) + 3 * 3600))
    metin = m.get("text", "").replace("\n", " / ")[:600]
    return insan, "[%s] %s %s: %s" % (m["ts"], zaman, kim, metin)

def main(a):
    if len(a) < 2:
        sys.exit(__doc__)
    cmd, kanal = a[0], kanal_id(a[1])
    if cmd == "post":
        isim, ikon = PERSONAS.get(a[2], (a[2], ":robot_face:"))
        metin = sys.stdin.read() if a[3] == "-" else a[3]
        p = {"channel": kanal, "text": metin, "username": isim, "icon_emoji": ikon}
        if "--thread" in a:
            p["thread_ts"] = a[a.index("--thread") + 1]
        print(api("chat.postMessage", p, post=True)["ts"])
    elif cmd == "read":
        saat = float(a[2]) if len(a) > 2 and not a[2].startswith("--") else 3
        r = api("conversations.history", {"channel": kanal, "limit": 50,
                                          "oldest": str(time.time() - saat * 3600)})
        out = [s for i, s in map(satir, reversed(r["messages"])) if i or "--insan" not in a]
        print("\n".join(out) or "(yeni mesaj yok)")
    elif cmd == "replies":
        r = api("conversations.replies", {"channel": kanal, "ts": a[2], "limit": 50})
        print("\n".join(s for _, s in map(satir, r["messages"][1:])) or "(cevap yok)")
    else:
        sys.exit(__doc__)

if __name__ == "__main__":
    main(sys.argv[1:])
