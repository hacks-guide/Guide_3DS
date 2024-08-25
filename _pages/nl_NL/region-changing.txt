---
title: "Regio veranderen"
---

{% include toc title="Inhoudsopgave" %}

### Verplicht te lezen

This is an add-on section for region changing your console. Dit wordt gedaan door het installeren van de 11.15.0 CTRTransfer image voor de regio waarnaar je wilt overschakelen. After installing the image, you can update your console normally to the latest firmware (11.17.0).

Merk wel op dat je regio veranderen bijna altijd compleet onnodig zal zijn omdat Luma3DS ook spellen uit een andere regio kan spelen, en ook individuele [Lokale emulatie](https://github.com/LumaTeam/Luma3DS/wiki/Optional-features). Daarnaast worden ook NDS spellen uit andere regio's ondersteund door [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases). You should only perform a region change if you wish to have your system UI is in a language that is not available on your console's current region.

This page assumes that you have already installed Luma3DS and boot9strap. Als je deze website naar het einde hebt gevolgd (Installatie voltooien), dan heb je nu Luma3DS en boot9strap.
{: .notice--info}

As a part of this process, your system settings will be reset to its defaults. This includes things such as your username, country, and language. **Installed games and their save data will not be affected.**
{: .notice--warning}

{% capture notice-6 %}
If you change the region of your console:

+ Je zult je NNID niet kunnen gebruiken (als je er een hebt). NNID's zijn vergrendeld aan de regio waarin ze gemaakt zijn.
+ Je hebt mogelijk geen toegang tot de eShop, zelfs niet als je [je eShop account verwijdert](https://en-americas-support.nintendo.com/app/answers/detail/a_id/74/~/how-to-delete-a-nintendo-account) vooraf. Dit komt doordat bepaalde titels vaak gekoppeld blijven aan de 3DS, zelfs na het verwijderen van de account (met name op New 3DS).
    + Dit is nog steeds relevant omdat hoewel aankopen niet meer via eShop gedaan kunnen worden, er nog steeds spelupdates gegeven worden. Updates may provide extra content or fix bugs.
    + This logic extends to system transfers, meaning you would not be able to perform a system transfer from a USA 3DS to a region-changed JPN-to-USA 3DS.
    + Pokémon Bank vereist ook een werkende toegang tot eShop.
    + That being said, system transfer and game updates are region locked anyway (e.g. Japanese eShop only has Japanese game updates).
+ **You will not be able to uninstall custom firmware without bricking the console!** If you intend to uninstall custom firmware in the future, you **MUST** restore your NAND backup that was created before the region change.
{% endcapture %}

<div class="notice--danger">{{ notice-6 | markdownify }}</div>

### Wat je nodig hebt

* De nieuwste versie van [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (het GodMode9 `.zip` bestand)
* The latest release of [FBI](https://github.com/lifehackerhansol/FBI/releases/download/2.6.1/FBI.3dsx) (direct download)
* De laatste uitgave van [faketik](https://github.com/ihaveamac/faketik/releases/latest) *(het`.3dsx` bestand)*
* A torrent client like [qBittorrent](https://www.qbittorrent.org/download.php) or [Deluge](http://dev.deluge-torrent.org/wiki/Download)
    * If you already have a torrent client, you do not need to download a new one
* The 11.15.0 CTRTransfer image for your console type of the region that you want to change to (e.g. Download "New 3DS or 2DS - USA" if you have a New 3DS and want to change your region to USA)
{% include_relative include/ctrtransfer-images.txt %}

### Instructies

#### Deel I - Voorbereiding

{% include_relative include/ctrtransfer-prep.txt %}

#### Deel II - NAND back-up

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
{% include_relative include/nand-backup.txt %}

#### Deel III - CTRTransfer

{% include_relative include/ctrtransfer-main.txt %}

#### Deel IV - FBI starten

{% include_relative include/launch-hbl-dlp.txt %}

#### Deel V - Tickets opnieuw installeren

{% include_relative include/ctrtransfer-ticket-copy.txt %}

#### Section VI - Fixing locale-related issues

{% include_relative include/ctrnand-datayeet.txt %}

___

Your 3DS has successfully been region changed!
{: .notice--success}
