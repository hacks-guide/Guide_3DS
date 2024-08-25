---
title: "CTRTransfer"
---

{% include toc title="Inhoudsopgave" %}

### Verplicht te lezen

Dit is een extra gedeelte voor het installeren van een 11.15.0 CTRTransfer bestand op je apparaat.

Deze pagina gaat ervan uit dat je Luma3DS en boot9strap al hebt geïnstalleerd. Als je deze website tot het einde hebt gevolgd (Installatie voltooien), dan heb je nu Luma3DS en boot9strap.
{: .notice--info}

As a part of this process, your system settings will be reset to its defaults. Dit omvat zaken als je gebruikersnaam, land en taal. **Installed games and their save data will not be affected.**
{: .notice--warning}

### Wat je nodig hebt

* De nieuwste versie van [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (het GodMode9 `.zip` bestand)
* The latest release of [FBI](https://github.com/lifehackerhansol/FBI/releases/download/2.6.1/FBI.3dsx) (direct download)
* De laatste uitgave van [faketik](https://github.com/ihaveamac/faketik/releases/latest) *(het`.3dsx` bestand)*
* A torrent client like [qBittorrent](https://www.qbittorrent.org/download.php) or [Deluge](http://dev.deluge-torrent.org/wiki/Download)
    * If you already have a torrent client, you do not need to download a new one
* Het 11.15.0 CTRTransfer bestand voor jouw console en regio:
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

### Doorgaan naar [Installatie voltooien](finalizing-setup)
{: .notice--primary}
