#!/usr/bin/env python3
"""Python Script for generating an rss.xml for the Guide. Requires bencodepy from pypy."""

import os
import hashlib
import urllib.parse
import datetime

import bencodepy


dir = os.path.join(os.getcwd(), "torrents")
rss = os.path.join(os.getcwd(), "rss.xml")


items = []


with open(rss, "w") as xml:
    xml.write("<?xml version=\"1.0\" encoding=\"utf-8\"?>\n")
    xml.write("<rss version=\"2.0\">\n")
    xml.write("\t<channel>\n")
    xml.write("\t\t<title>Plailect Guide Feed</title>\n")
    xml.write("\t\t<lastBuildDate>{0}</lastBuildDate>\n".format(datetime.datetime.utcnow().strftime("%a, %d %b %Y %X +0000")))
    xml.write("\t\t<link>https://github.com/Plailect/Guide_3DS/</link>\n")

    for filename in os.listdir(dir):
        if filename.endswith(".torrent"):
            filepath = os.path.join(dir, filename)

            with open(filepath, "rb") as a:
                raw = a.read()
                tor = bencodepy.decode(raw)
                trackers = []
                infohash = hashlib.sha1(bencodepy.encode(tor[b"info"])).hexdigest().upper()
                magp = {"xt": "urn:btih:{0}".format(infohash), "dn": tor[b"info"][b"name"], "xl": tor[b"info"][b"length"]}
                magstr = urllib.parse.urlencode(magp)
                if b'announce-list' in tor:
                    for anncl in tor[b'announce-list']:
                        if isinstance(anncl, list):
                            for annc in anncl:
                                trackers.append(annc.decode("utf-8"))
                        else:
                            trackers.append(anncl.decode("utf-8"))
                length = tor[b"info"][b"length"]
                name = tor[b"info"][b"name"].decode("utf-8")
                ts = tor[b"creation date"]
                items.append({"name": name, "infohash": infohash, "length": length, "ts": ts, "trackers": trackers})

    items = sorted(items, key=lambda d: d['ts'], reverse=True)

    for i in items:
        pubdate = datetime.datetime.utcfromtimestamp(int(i["ts"]))
        xml.write("\t\t<item>\n")
        xml.write("\t\t\t<title>{0}</title>\n".format(i["name"]))
        xml.write("\t\t\t<description>{0}</description>\n".format(i["name"]))
        xml.write("\t\t\t<guid>{0}</guid>\n".format(i["infohash"]))
        xml.write("\t\t\t<link>magnet:?xt=urn:btih:{0}</link>\n".format(i["infohash"]))
        xml.write("\t\t\t<pubDate>{0}</pubDate>\n".format(pubdate.strftime("%a, %d %b %Y %X +0000")))
        xml.write("\t\t\t<contentLength>{0}</contentLength>\n".format(i["length"]))
        xml.write("\t\t\t<infoHash>{0}</infoHash>\n".format(i["infohash"]))
        xml.write("\t\t\t<magnetURI>magnet:?xt=urn:btih:{0}</magnetURI>\n".format(i["infohash"]))
        #xml.write("\t\t\t<fileName>{0}</fileName><fileName>\n".format(name))
        xml.write("\t\t\t<enclosure url=\"magnet:?xt=urn:btih:{0}\" type=\"application/x-bittorrent\" />\n".format(i["infohash"]))

        if i["trackers"]:
            xml.write("\t\t\t<trackers>\n")
            xml.write("\t\t\t\t<group order=\"random\">\n")

            for tracker in i["trackers"]:
                xml.write("\t\t\t\t\t<tracker>\n")
                xml.write("\t\t\t\t\t\t{0}\n".format(tracker))
                xml.write("\t\t\t\t\t</tracker>\n")

            xml.write("\t\t\t\t</group>\n")
            xml.write("\t\t\t</trackers>\n")

        xml.write("\t\t</item>\n")
    xml.write("\t</channel>\n")
    xml.write("</rss>")
