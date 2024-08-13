---
title: "A9LH אל B9S"
---

{% include toc title="תוכן העניינים" %}

### קריאה דרושה

This page is for existing arm9loaderhax users to update their consoles to boot9strap.

כל המהדורות הבאות של Luma3DS יוצרו בתוך פורמט ה'firm' בלבד, שיתמוך רק בboot9strap ובsighax. זה אומר שכדי להמשיך לקבל את העדכונים האחרונים של Luma3DS עליכם להשתמש בדף הזה כדי לעדכן את ההתקנה שלכם.

To extract the `.7z` files linked on this page, you will need a file archiver like [7-Zip](http://www.7-zip.org/) or [The Unarchiver](https://theunarchiver.com/).

### What You Need

To use the [magnet](https://wikipedia.org/wiki/Magnet_URI_scheme) links on this page, you will need a torrent client like [qBittorrent](https://www.qbittorrent.org/download.php) or [Deluge](http://dev.deluge-torrent.org/wiki/Download).
{: .notice--warning}

שימו לב, שרק על New 3DS, הקובץ 'secret_sector.bin' נדרש כדי למחוק את פריצת arm9loaderhax ולכן הוא לא נחוץ עבור ההתקנה של boot9strap על קונסולה לא פרוצה. אם אין לכם New 3DS, אתם לא צריכים להוריד את `secret_sector.bin`.
{: .notice--info}

* <i class="fa fa-magnet" aria-hidden="true" title="זה לינק מגנטי. Use a torrent client to download the file."></i> - **New 3DS Users Only:** [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) (magnet link)
* The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
* The v7.0.5 release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/download/v7.0.5/Luma3DSv7.0.5.zip) (direct download)
* The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
* The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)

### הנחיות

#### חלק I - הכנות

לכל השלבים בחלק הזה, תשכתבו כל קובץ קיים בכרטיס SD שלכם אם יש.
{: .notice--info}

1. Power off your console
1. תכניסו את ה-SD שלכם למחשב
1. Copy `boot.firm` and `boot.3dsx` from the latest version Luma3DS `.zip` to the root of your SD card
    + The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
1. Copy `arm9loaderhax.bin` from the v7.0.5 Luma3DS `.7z` to the root of your SD card
1. Copy `SafeB9SInstaller.bin` from the SafeB9SInstaller `.zip` to the `/luma/payloads/` folder on your SD card
    + If the `luma` or `payloads` folder doesn't exist, create them
    + Delete any other existing `.bin` payloads (`GodMode9.bin`, `Decrypt9WIP.bin`, `Hourglass9.bin`, etc.) in the `/luma/payloads/` folder on your SD card as they will not be compatible with boot9strap compatible Luma3DS versions
1. תצרו ב-SD שלכם תיקייה חדשה בשם `boot9strap`
1. תעתיקו את`boot9strap.firm` ואת `boot9strap.firm.sha` מה `.zip` של boot9strap אל תיקיית `/boot9strap/`על כרטיס הSD שלכם
1. **משתמשי New 3DS בלבד:** העתיקו את הקובץ `secret_sector.bin` לתיקייה `/boot9strap/` שב- SD שלכם

    ![]({{ "/images/screenshots/a9lh-to-b9s-root-layout.png" | absolute_url }})
    {: .notice--info}

1. Reinsert your SD card into your console

#### חלק II - התקנת boot9strap

1. Boot your console while holding (Start) to launch SafeB9SInstaller
    + If you see the luma configuration screen instead of SafeB9SInstaller, simply press (Start), then shut down your 3DS and try again
    + If this gives you an error, try either using a new SD card or formatting your current SD card (backup existing files first)
1. תחכו שכל בדיקות הבטיחות יסתיימו
    + אם אתם מקבלים את השגיאה "OTP Crypto Fail", תורידו את <i class="fa fa-magnet" aria-hidden="true" title="זהו לינק מגנטי. Use a torrent client to download the file."></i> - [aeskeydb.bin](magnet:?xt=urn:btih:d25dab06a7e127922d70ddaa4fe896709dc99a1e&dn=aeskeydb.bin&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce), then put it in the `/boot9strap/` folder on your SD card and try again
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt inline="true" -%}
1. Your console should have rebooted into the Luma3DS configuration menu
    + Luma3DS configuration menu are settings for the Luma3DS custom firmware. Many of these settings may be useful for customization or debugging
    + For the purpose of this guide, these settings will be left on default settings
    + If you get a black screen, [follow this troubleshooting guide](troubleshooting#boot-issues-on-consoles-with-custom-firmware)
1. לחצו על (Start) על מנת לשמור ולהפעיל מחדש

___

### Continue to [Finalizing Setup](finalizing-setup)
{: .notice--primary}
