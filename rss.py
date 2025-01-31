#!/usr/bin/env python3

#
# Copyright (C) 2016 James Elliott
# Copyright (C) 2016-2018 Plailect              
# Copyright (C) 2022-2023 Nintendo Homebrew
#
# SPDX-License-Identifier: MIT
#

#
# Python Script for generating an rss.xml for the Guide. Requires bencodepy from pypy.
# Usage:
# - place all torrent files in a `torrents` folder, including all that already exist
# - run the script
#

import os
import hashlib
import urllib.parse
import datetime

import bencodepy


dir = os.path.join(os.getcwd(), "torrents")
rss = os.path.join(os.getcwd(), "docs/public/rss.xml")


items = []


with open(rss, "w") as xml:
    xml.write("<?xml version=\"1.0\" encoding=\"utf-8\"?>\n")
    xml.write("<rss version=\"2.0\">\n")
    xml.write("\t<channel>\n")
    xml.write("\t\t<title>Plailect Guide Feed</title>\n")
    xml.write(f"\t\t<lastBuildDate>{datetime.datetime.utcnow().strftime("%a, %d %b %Y %X +0000")}</lastBuildDate>\n")
    xml.write("\t\t<link>https://github.com/hacks-guide/Guide_3DS/</link>\n")

    for filename in os.listdir(dir):
        if filename.endswith(".torrent"):
            filepath = os.path.join(dir, filename)

            with open(filepath, "rb") as a:
                raw = a.read()
                tor = bencodepy.decode(raw)
                trackers = []
                infohash = hashlib.sha1(bencodepy.encode(tor[b"info"])).hexdigest().upper()
                magp = {"xt": f"urn:btih:{infohash}", "dn": tor[b"info"][b"name"], "xl": tor[b"info"][b"length"]}
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
        xml.write(f"\t\t\t<title>{i['name']}</title>\n")
        xml.write(f"\t\t\t<description>{i['name']}</description>\n".format(i["name"]))
        xml.write(f"\t\t\t<guid>{i['infohash']}</guid>\n")
        xml.write(f"\t\t\t<link>magnet:?xt=urn:btih:{i['infohash']}</link>\n")
        xml.write(f"\t\t\t<pubDate>{pubdate.strftime("%a, %d %b %Y %X +0000")}</pubDate>\n")
        xml.write(f"\t\t\t<contentLength>{i['lenght']}</contentLength>\n")
        xml.write(f"\t\t\t<infoHash>{i['infohash']}</infoHash>\n")
        xml.write(f"\t\t\t<magnetURI>magnet:?xt=urn:btih:{i['infohash']}</magnetURI>\n")
        #xml.write("\t\t\t<fileName>{0}</fileName><fileName>\n".format(name))
        xml.write("\t\t\t<enclosure url=\"magnet:?xt=urn:btih:{i[infohash]}\" type=\"application/x-bittorrent\" />\n")

        if i["trackers"]:
            xml.write("\t\t\t<trackers>\n")
            xml.write("\t\t\t\t<group order=\"random\">\n")

            for tracker in i["trackers"]:
                xml.write("\t\t\t\t\t<tracker>\n")
                xml.write(f"\t\t\t\t\t\t{tracker}\n")
                xml.write("\t\t\t\t\t</tracker>\n")

            xml.write("\t\t\t\t</group>\n")
            xml.write("\t\t\t</trackers>\n")

        xml.write("\t\t</item>\n")
    xml.write("\t</channel>\n")
    xml.write("</rss>")
