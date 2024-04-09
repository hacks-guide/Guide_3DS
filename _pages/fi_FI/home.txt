---
layout: splash
title: "3DS-hakkerointiopas" #
header:
  overlay_color: "#5e616c" #
  overlay_image: /images/home-page-feature.jpg
  overlay_filter: 0.5
  cta_label: "Get Started"
  cta_url: "key-information"
  caption:
excerpt: "A complete guide to 3DS (and 2DS) custom firmware, <br /> from stock to boot9strap.<br />"
---

Lue huolellisesti kaikki johdantosivut (mukaan lukien tämä!) ennen aloittamista.
{: .notice--info}

{% capture update-notice %}
{% include_relative include/3ds-online.txt %}
{% endcapture %}
<div class="notice--danger">{{ update-notice | markdownify }}</div>

## What is custom firmware?

**Custom firmware** ("CFW") is a full software modification to your 3DS, comparable to "administrator access" on a computer. It allows you to do anything that the 3DS is physically capable of doing, rather than being limited by whatever Nintendo allows you to do.

Popular uses for custom firmware include:

* Running homebrew software and games made for or ported to the Nintendo 3DS
* Bypassing the region lock, allowing you to play games from other regions
* HOME Menu customization, using community-created [themes and badges](https://themeplaza.art)
* Modification of games ("ROM hacks") through [LayeredFS](https://github.com/knight-ryu12/godmode9-layeredfs-usage/wiki/Using-Luma3DS'-layeredfs-(Only-version-8.0-and-higher))
* Save data editing, backup, and restore
* Emulation of older consoles, as well as native playback of DS and GBA games
* Installing your physical cartridges for digital use

## Mitä tässä oppaassa asennetaan?

This guide will:
+ Install **boot9strap** and **Luma3DS custom firmware** on unmodified retail 3DS/2DS consoles
    + Luma3DS will automatically remove the region lock and allow you to run unsigned software
+ Install various pieces of homebrew software, such as a package installer, save file manager, and a homebrew app store
+ Make critical system file backups that can help avoid bricks (and recover data in the event of one)

___

### Continue to [Key Information](key-information)
{: .notice--primary}
