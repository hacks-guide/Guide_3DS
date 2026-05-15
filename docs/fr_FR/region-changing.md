# Changement de région

## Lecture requise

Ceci est une section complémentaire sur comment changer la région de votre console. Ceci est réalisé en installant l'image CTRTransfer 11.15.0 de la région à laquelle vous souhaitez basculer. Après avoir installé l'image, vous pouvez mettre à jour votre console normalement vers le dernier firmware (11.17.0).

Notez que le changement de région est presque totalement inutile puisque Luma3DS prend en charge les jeux hors région ainsi que la "[Locale Emulation](https://github.com/LumaTeam/Luma3DS/wiki/Optional-features)" des titres. De plus, l'exécution de jeux NDS avec d'autres langues hors région est prise en charge par [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases). Vous ne devriez effectuer un changement de région que si vous souhaitez que l'interface utilisateur de votre système soit dans une langue qui n'est pas disponible dans la région actuelle de votre console.

::: info

Cette page suppose que vous avez déjà installé Luma3DS et boot9strap. Si vous avez suivi le guide de ce site web jusqu'à la fin (Finalisation de l'installation), vous avez Luma3DS et boot9strap.

:::

::: warning

Dans le cadre de ce processus, les paramètres de la console seront réinitialisés à leurs valeurs par défaut. Cela inclut des éléments tels que votre nom d'utilisateur, votre pays et votre langue. **Les jeux installés et leurs données de sauvegarde ne seront pas affectés.**

:::

::: danger

Si vous changez la région de votre console :

- Vous ne pourrez plus utiliser votre Identifiant Nintendo Network (NNID) (si vous en possédez un). Les Identifiants Nintendo Network (NNID) sont verrouillés sur la région dans laquelle ils ont été créés.
- Vous ne pourrez peut-être pas accéder à l'eShop, même si vous [supprimez votre compte eShop](https://en-americas-support.nintendo.com/app/answers/detail/a_id/74/~/how-to-delete-a-nintendo-eshop-account) au préalable. En effet, certains titres ont tendance à rester liés à la 3DS, même après la suppression du compte (surtout sur New 3DS).
  - Cette partie est toujours d'actualité, car même si les achats ne peuvent plus être effectués sur la boutique en ligne, des mises à jour de jeu sont toujours fournies. Les mises à jour peuvent fournir du contenu supplémentaire ou corriger des bugs.
  - Cette logique s'étend aux Transferts de données, ce qui signifie que vous ne serez pas en mesure d'effectuer un Transfert de données d'une 3DS USA vers une 3DS avec région modifiée de JPN vers USA.
  - La Banque Pokémon nécessite également un accès eShop fonctionnel.
  - Cela étant dit, le transfert de données et les mises à jour de jeu sont de toute façon verrouillées (par ex. l'eShop japonais ne possède que des mises à jour japonaises des jeux).
- **Vous ne pourrez pas désinstaller le custom firmware sans bricker votre console !** Si vous avez l'intention de désinstaller le custom firmware à l'avenir, vous **DEVEZ** restaurer votre sauvegarde de la NAND créée avant le changement de région.

:::

## Ce dont vous avez besoin

- La dernière version de [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (le fichier `.zip` de GodMode9)
- La dernière version de [FBI](https://github.com/nh-server/FBI-NH/releases/download/2.6.1/FBI.3dsx) (téléchargement direct)
- La dernière version de [faketik](https://github.com/ihaveamac/faketik/releases/latest) _(le fichier `.3dsx`)_
- La dernière version de [ctrtransfer.gm9](https://raw.githubusercontent.com/nh-server/scripts/refs/heads/main/3DS/ctrtransfer.gm9) (clic droit, enregistrer sous)
- L'image CTRTransfer 11.15.0 correspondant au modèle de votre console et à la région vers laquelle vous souhaitez basculer (par ex. Téléchargez "New 3DS ou 2DS - USA" si vous avez une New 3DS et que vous souhaitez basculer vers la région USA)

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

La région de votre 3DS a été modifiée avec succès !

:::
