# CTRTransfer

## Lecture requise

Ceci est une section complémentaire pour installer une image CTRTransfer 11.15.0 sur votre console.

::: info

Cette page suppose que vous avez déjà installé Luma3DS et boot9strap. Si vous avez suivi le guide de ce site web jusqu'à la fin (Finalisation de l'installation), vous avez Luma3DS et boot9strap.

:::

::: warning

Dans le cadre de ce processus, les paramètres de votre console seront réinitialisés à leurs valeurs par défaut. Cela inclut des éléments tels que votre nom d'utilisateur, votre pays et votre langue. **Les jeux installés et leurs données de sauvegarde ne seront pas affectés.**

:::

## Ce dont vous avez besoin

- La dernière version de [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (le fichier `.zip` de GodMode9)
- La dernière version de [FBI](https://github.com/nh-server/FBI-NH/releases/download/2.6.1/FBI.3dsx) (téléchargement direct)
- La dernière version de [faketik](https://github.com/ihaveamac/faketik/releases/latest) _(le fichier `.3dsx`)_
- La dernière version de [ctrtransfer.gm9](https://raw.githubusercontent.com/nh-server/scripts/refs/heads/main/3DS/ctrtransfer.gm9) (clic droit, enregistrer sous)
- L'image CTRTransfer 11.15.0 pour votre console et région

  ::: warning

  Vous devez utiliser un client torrent pour télécharger les images CTRTransfer, tel que [qBitTorrent](https://www.qbittorrent.org/download) ou [Deluge](https://deluge-torrent.org/download/).

  :::

<!--@include: ./_include/ctrtransfer-images.md -->

## Instructions

### Section I - Préparatifs

<!--@include: ./_include/ctrtransfer-prep.md -->

### Section II - Sauvegarde de la NAND

1. Appuyez sur et maintenez (Start), et tout en maintenant (Start), allumez votre console. Ceci lancera GodMode9

<!--@include: ./_include/nand-backup.md -->

### Section III - CTRTransfer

<!--@include: ./_include/ctrtransfer-main.md -->

### Section IV - Lancement de FBI

<!--@include: ./_include/launch-hbl-dlp.md -->

### Section V - Réinstallation des Tickets

<!--@include: ./_include/ctrtransfer-ticket-copy.md -->

### Section VI - Corriger les problèmes liés aux paramètres régionaux

<!--@include: ./_include/ctrnand-datayeet.md -->

___

::: tip

Continuer vers [Finalisation de l'installation](finalizing-setup)

:::
