---
title: "Changement de Région"
---

{% include toc title="Table of Contents" %}

### Lecture requise

This is an add-on section for region changing your console. Cette opération peut être effectuée en installant l'image CTRTransfer 11.15.0 de la région à laquelle vous souhaitez passer. After installing the image, you can update your console normally to the latest firmware (11.17.0).

Notez que le changement de région est presque totalement inutile puisque Luma3DS prend en charge les jeux hors région et la prise en charge des langues de ces jeux via l'option [Locale Emulation](https://github.com/LumaTeam/Luma3DS/wiki/Optional-features). De plus, l'exécution de jeux NDS avec d'autres langues hors région est prise en charge par [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases). Vous ne devriez effectuer un changement de région que si vous souhaitez que l'interface utilisateur de votre console soit dans une langue qui n'est pas disponible dans la région actuelle de votre console.

Cette page suppose que vous avez déjà installé Luma3DS et boot9strap. Si vous avez suivi le guide de ce site web jusqu'à la fin (Finalisation de l'installation), vous avez Luma3DS et boot9strap.
{: .notice--info}

As a part of this process, your system settings will be reset to its defaults. Cela inclut des éléments tels que votre nom d'utilisateur, votre pays et votre langue. **Installed games and their save data will not be affected.**
{: .notice--warning}

{% capture notice-6 %}
If you change the region of your console:

+ Vous ne pourrez plus utiliser votre Identifiant Nintendo Network (NNID) (si vous en possédez un). Les Identifiants Nintendo Network (NNID) sont verrouillés sur la région dans laquelle ils ont été créés.
+ Vous ne pourrez peut-être pas accéder à l'eShop, même si vous [supprimez votre compte eShop](https://en-americas-support.nintendo.com/app/answers/detail/a_id/74/~/how-to-delete-a-nintendo-eshop-account) au préalable. En effet, certains titres ont tendance à rester liés à la 3DS, même après la suppression du compte (surtout sur New 3DS).
    + This is still relevant because, while purchases can no longer be made on eShop, game updates are still being provided. Updates may provide extra content or fix bugs.
    + Cette logique s'étend aux Transferts de données, ce qui signifie que vous ne serez pas en mesure d'effectuer un Transfert de données d'une 3DS USA vers une 3DS avec région modifiée de JPN vers USA.
    + Pokémon Bank also requires working eShop access.
    + Cela étant dit, le Transfert de données et les mises à jour de jeu sont de toute façon verrouillées (par exemple, l'eShop japonais ne possède que des mises à jour de jeux japonais).
+ **You will not be able to uninstall custom firmware without bricking the console!** If you intend to uninstall custom firmware in the future, you **MUST** restore your NAND backup that was created before the region change.
{% endcapture %}

<div class="notice--danger">{{ notice-6 | markdownify }}</div>

## Ce dont vous avez besoin

* La dernière version de [GodMode9]
(https://github.com/d0k3/GodMode9/releases/latest) (le fichier GodMode9 `.zip`)
* The latest release of [FBI](https://github.com/lifehackerhansol/FBI/releases/download/2.6.1/FBI.3dsx) (direct download)
* The latest release of [faketik](https://github.com/ihaveamac/faketik/releases/latest) *(the `.3dsx` file)*
* A torrent client like [qBittorrent](https://www.qbittorrent.org/download.php) or [Deluge](http://dev.deluge-torrent.org/wiki/Download)
    * If you already have a torrent client, you do not need to download a new one
* The 11.15.0 CTRTransfer image for your console type of the region that you want to change to (e.g. Download "New 3DS or 2DS - USA" if you have a New 3DS and want to change your region to USA)
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

La région de votre 3DS a été modifiée avec succès !
{: .notice--success}
