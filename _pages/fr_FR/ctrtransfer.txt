---
title : "CTRTransfer"
---

{% include toc title="Table des matières" %}

### Lecture requise

This is an add-on section for installing an 11.15.0 CTRTransfer image to your console.

Cette page suppose que vous avez déjà installé Luma3DS et boot9strap. Si vous avez suivi ce guide jusqu'à la fin (Finalisation de l'installation), vous avez Luma3DS et boot9strap.
{: .notice--info}

As a part of this process, your system settings will be reset to its defaults. Cela inclut des éléments tels que votre nom d'utilisateur, votre pays et votre langue. **Installed games and their save data will not be affected.**
{: .notice--warning}

## Ce dont vous avez besoin

* La dernière version de [GodMode9]
(https://github.com/d0k3/GodMode9/releases/latest) (le fichier GodMode9 `.zip`)
* The latest release of [FBI](https://github.com/lifehackerhansol/FBI/releases/download/2.6.1/FBI.3dsx) (direct download)
* The latest release of [faketik](https://github.com/ihaveamac/faketik/releases/latest) *(the `.3dsx` file)*
* A torrent client like [qBittorrent](https://www.qbittorrent.org/download.php) or [Deluge](http://dev.deluge-torrent.org/wiki/Download)
    * If you already have a torrent client, you do not need to download a new one
* The 11.15.0 CTRTransfer image for your console and region:
{% include_relative include/ctrtransfer-images.txt %}

### Instructions

#### Section I - Préparatifs

{% include_relative include/ctrtransfer-prep.txt %}

#### Section II - Sauvegarde de la NAND

1. Press and hold (Start), and while holding (Start), power on your console. Ceci lancera GodMode9
{% include_relative include/nand-backup.txt %}

#### Section III - CTRTransfer

{% include_relative include/ctrtransfer-main.txt %}

#### Section IV - Lancement de FBI

{% include_relative include/launch-hbl-dlp.txt %}

#### Section V - Réinstallation des Tickets

{% include_relative include/ctrtransfer-ticket-copy.txt %}

#### Section VI - Fixing locale-related issues

{% include_relative include/ctrnand-datayeet.txt %}

___

### Continuer vers [Finalisation de l'installation](finalizing-setup)
{: .notice--primary}
