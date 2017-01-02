#!/usr/bin/env python3
"""Python Script for generating a rss.xml for the A9LH Guide Plailect wrote. Requires bencodepy from pypy."""

import os
import hashlib
import urllib.parse
import datetime

import bencodepy

dir = os.path.join(os.getcwd(), "torrents")
rss = os.path.join(os.getcwd(), "rss.xml")

with open(rss, "w") as xml:
    xml.write("<?xml version=\"1.0\" encoding=\"utf-8\"?>\n")
    xml.write("<rss version=\"2.0\">\n")
    xml.write("\t<channel>\n")
    xml.write("\t\t<title>Plailect Guide Feed</title>\n")
    xml.write("\t\t<lastBuildDate>{0}</lastBuildDate>\n".format(datetime.datetime.utcnow().strftime("%a, %d %b %Y %X +0000")))
    xml.write("\t\t<link>https://github.com/Plailect/Guide/</link>\n")

    for filename in os.listdir(dir):
        if filename.endswith(".torrent"):
            filepath = os.path.join(dir, filename)

            with open(filepath, "rb") as a:
                raw = a.read()
                tor = bencodepy.decode(raw)
                magnet = ""
                infohash = hashlib.sha1(bencodepy.encode(tor[b"info"])).hexdigest().upper()
                magp = {"xt": "urn:btih:{0}".format(infohash), "dn": tor[b"info"][b"name"], "xl": tor[b"info"][b"length"]}
                magstr = urllib.parse.urlencode(magp)
                magnet = "magnet:?{0}".format(magstr)
                for anncl in tor[b"announce-list"]:
                    if isinstance(anncl, list):
                        for annc in anncl:
                            magnet = "{0}{1}".format(magnet, "&tr={0}".format(annc.decode("utf-8")))
                    else:
                        magnet = "{0}{1}".format(magnet, "&tr={0}".format(anncl.decode("utf-8")))
                length = tor[b"info"][b"length"]
                name = tor[b"info"][b"name"].decode("utf-8")
                ts = tor[b"creation date"]

            magnet = urllib.parse.quote(magnet)
            pubdate = datetime.datetime.utcfromtimestamp(int(ts))
            xml.write("\t\t<item>\n")
            xml.write("\t\t\t<title>{0}</title>\n".format(name))
            xml.write("\t\t\t<description>{0}</description>\n".format(name))
            xml.write("\t\t\t<guid>{0}</guid>\n".format(infohash))
            xml.write("\t\t\t<link>magnet:?xt=urn:btih:{0}</link>\n".format(infohash))
            xml.write("\t\t\t<pubDate>{0}</pubDate>\n".format(pubdate.strftime("%a, %d %b %Y %X +0000")))
            #xml.write("\t\t\t<torrent:contentLength>{0}</torrent:contentLength>\n".format(length))
            #xml.write("\t\t\t<torrent:infoHash>{0}</torrent:infoHash>\n".format(infohash))
            #xml.write("\t\t\t<torrent:magnetURI><![CDATA[{0}]]></torrent:magnetURI>\n".format(magnet))
            #xml.write("\t\t\t<torrent:fileName>{0}</torrent:fileName><torrent:fileName>\n".format(name))
            xml.write("\t\t\t<enclosure url=\"magnet:?xt=urn:btih:{0}\" type=\"application/x-bittorent\" />\n".format(infohash))
            xml.write("\t\t</item>\n")
    xml.write("\t</channel>\n")
    xml.write("</rss>")
