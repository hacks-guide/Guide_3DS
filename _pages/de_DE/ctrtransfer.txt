---
title: "CTRTransfer"
---

{% include toc title="Inhalt" %}

### Lesen erforderlich

This is an add-on section for installing an 11.15.0 CTRTransfer image to your console.

This page assumes that you have already installed Luma3DS and boot9strap. If you followed this website to the end (Finalizing Setup), you have Luma3DS and boot9strap.
{: .notice--info}

As a part of this process, your system settings will be reset to its defaults. This includes things such as your username, country, and language. **Installed games and their save data will not be affected.**
{: .notice--warning}

### Was du brauchst

* Die neuste Version von GodMode9 (siehe https://github.com/d0k3/GodMode9/releases/latest) (die GodMode9.`zip` Datei)
* The latest release of [FBI](https://github.com/lifehackerhansol/FBI/releases/download/2.6.1/FBI.3dsx) (direct download)
* The latest release of [faketik](https://github.com/ihaveamac/faketik/releases/latest) *(the `.3dsx` file)*
* A torrent client like [qBittorrent](https://www.qbittorrent.org/download.php) or [Deluge](http://dev.deluge-torrent.org/wiki/Download)
    * If you already have a torrent client, you do not need to download a new one
* The 11.15.0 CTRTransfer image for your console and region:
{% include_relative include/ctrtransfer-images.txt %}

### Anleitung

#### Abschnitt I - Vorbereitungen

{% include_relative include/ctrtransfer-prep.txt %}

#### Section II - NAND Backup

1. Drücke und halte (Start), und während du (Start) hältst, schaltest du deine Konsole ein. Dies wird GodMode9 starten
{% include_relative include/nand-backup.txt %}

#### Section III - CTRTransfer

{% include_relative include/ctrtransfer-main.txt %}

#### Section IV - Launching FBI

{% include_relative include/launch-hbl-dlp.txt %}

#### Section V - Reinstalling Tickets

{% include_relative include/ctrtransfer-ticket-copy.txt %}

#### Section VI - Fixing locale-related issues

{% include_relative include/ctrnand-datayeet.txt %}

___

### Fortfahren mit [Setup fertigstellen](finalizing-setup)
{: .notice--primary}
