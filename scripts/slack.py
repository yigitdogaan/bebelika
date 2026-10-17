#!/usr/bin/env python3
"""Bebelika Slack yardımcısı. Kullanım:
  slack.py post <kanal> <rol> "<metin>" [--thread ts]   (metin '-' ise stdin) -> ts yazdırır
  slack.py read <kanal> [saat=3] [--insan] [--ad <İsim>]
  slack.py replies <kanal> <ts>
  slack.py durum <rol> <aktif|bosta> ["yaptığı iş"]   -> ofis panosunu günceller (sadece CEO)
"""
import json, os, sys, time, urllib.parse, urllib.request

TOKEN = os.environ.get("SLACK_BOT_TOKEN") or sys.exit("SLACK_BOT_TOKEN yok")
EKIP = "state/ekip.json"
PANO_TS = "state/pano_ts.txt"

def ekip():
    return json.load(open(EKIP, encoding="utf-8"))

def api(method, params, post=False, kesin=True):
    url = "https://slack.com/api/" + method
    head = {"Authorization": "Bearer " + TOKEN}
    if post:
        head["Content-Type"] = "application/json; charset=utf-8"
        req = urllib.request.Request(url, data=json.dumps(params).encode(), headers=head)
    else:
        req = urllib.request.Request(url + "?" + urllib.parse.urlencode(params), headers=head)
    r = json.load(urllib.request.urlopen(req, timeout=30))
    if not r.get("ok") and kesin:
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

def saat(ts):
    return time.strftime("%d.%m %H:%M", time.gmtime(float(ts) + 3 * 3600))

def satir(m):
    insan = "user" in m and not m.get("bot_id")
    kim = "KURUCU" if insan else (m.get("username") or "bot")
    metin = m.get("text", "").replace("\n", " / ")[:600]
    return insan, metin, "[%s] %s %s: %s" % (m["ts"], saat(m["ts"]), kim, metin)

def persona(rol):
    e = ekip().get(rol)
    if not e:
        return rol, ":robot_face:"
    return "%s (%s)" % (e["ad"], e["unvan"]), e.get("ikon", ":robot_face:")

def pano_metni():
    e = ekip()
    cocuk = {}
    for rol, k in e.items():
        cocuk.setdefault(k.get("ust", "kurucu"), []).append(rol)
    aktif = sum(1 for k in e.values() if k.get("durum") == "aktif")
    sat = ["🏢 *BEBELİKA OFİS PANOSU*  ·  🟢 çalışıyor  ⚪ boşta",
           "_Son güncelleme: %s · Şu an %d kişi çalışıyor_" % (saat(time.time()), aktif), "", "👑 *Kurucu*"]
    def ciz(ust, girinti):
        liste = cocuk.get(ust, [])
        for i, rol in enumerate(liste):
            k = e[rol]
            son = i == len(liste) - 1
            nokta = "🟢" if k.get("durum") == "aktif" else "⚪"
            is_ = "  →  _%s_" % k["is"] if k.get("durum") == "aktif" and k.get("is") else ""
            sat.append("%s%s %s %s *%s* (%s)%s" % (girinti, "└─" if son else "├─", nokta,
                                                    k.get("emoji", ""), k["ad"], k["unvan"], is_))
            ciz(rol, girinti + ("\u2007" * 6 if son else "│" + "\u2007" * 5))
    ciz("kurucu", "")
    return "\n".join(sat)

def pano_guncelle():
    kanal, metin = kanal_id("genel"), pano_metni()
    ts = open(PANO_TS).read().strip() if os.path.exists(PANO_TS) else ""
    if ts:
        r = api("chat.update", {"channel": kanal, "ts": ts, "text": metin}, post=True, kesin=False)
        if r.get("ok"):
            return
    isim, ikon = persona("ceo")
    r = api("chat.postMessage", {"channel": kanal, "text": metin,
                                 "username": "Ofis Panosu", "icon_emoji": ":office:"}, post=True)
    open(PANO_TS, "w").write(r["ts"])

def main(a):
    if len(a) < 2:
        sys.exit(__doc__)
    cmd = a[0]
    if cmd == "durum":
        e = ekip()
        if a[1] not in e:
            sys.exit("Bilinmeyen rol: " + a[1])
        e[a[1]]["durum"] = a[2] if len(a) > 2 else "bosta"
        e[a[1]]["is"] = a[3] if len(a) > 3 else ""
        json.dump(e, open(EKIP, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
        pano_guncelle()
        print("pano güncellendi")
        return
    kanal = kanal_id(a[1])
    if cmd == "post":
        isim, ikon = persona(a[2])
        metin = sys.stdin.read() if a[3] == "-" else a[3]
        p = {"channel": kanal, "text": metin, "username": isim, "icon_emoji": ikon}
        if "--thread" in a:
            p["thread_ts"] = a[a.index("--thread") + 1]
        print(api("chat.postMessage", p, post=True)["ts"])
    elif cmd == "read":
        sa = float(a[2]) if len(a) > 2 and not a[2].startswith("--") else 3
        ad = a[a.index("--ad") + 1].lower() if "--ad" in a else None
        r = api("conversations.history", {"channel": kanal, "limit": 100,
                                          "oldest": str(time.time() - sa * 3600)})
        out = []
        for m in reversed(r["messages"]):
            insan, metin, s = satir(m)
            if "--insan" in a and not insan:
                continue
            if ad and ad not in metin.lower():
                continue
            out.append(s)
        print("\n".join(out) or "(yeni mesaj yok)")
    elif cmd == "replies":
        r = api("conversations.replies", {"channel": kanal, "ts": a[2], "limit": 50})
        print("\n".join(s for _, _, s in map(satir, r["messages"][1:])) or "(cevap yok)")
    else:
        sys.exit(__doc__)

if __name__ == "__main__":
    main(sys.argv[1:])
