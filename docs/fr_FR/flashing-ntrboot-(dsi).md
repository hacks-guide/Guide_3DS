# Flasher ntrboot (DSi)

## Lecture requise

Avant de continuer, assurez-vous d'avoir lu toutes les informations sur [ntrboot](ntrboot)

Cette méthode nécessite l'accès temporaire à une Nintendo DSi qui est compatible avec votre linker. Cette méthode utilise le linker pour exécuter le fichier flasheur ntrboot `.nds` sur votre DSi. Ça signifie que votre linker doit pouvoir lancer des fichiers `.nds` sur la version de votre DSi. Consultez le tableau [ntrboot](ntrboot) pour plus d'informations.

::: danger

Notez que dans de rares circonstances, il est possible que le processus de flash **bricke** un linker contrefait et le rende inutilisable de manière permanente. C'est peu probable, mais néanmoins, seuls les linkers originaux listés sont pris en charge. Pour réduire les chances de recevoir un linker contrefait, il est recommandé d'utiliser un site réputé pour acheter votre linker (comme [NDS Card](https://www.nds-card.com/)).

:::

## Ce dont vous avez besoin

- Votre linker compatible avec ntrboot
- Deux consoles
  - **La DSi source** : la Nintendo DSi qui est compatible avec votre linker
  - **La 3DS cible** : la console de la famille 3DS sur un firmware non modifié
- La dernière version de [ds_ntrboot_flasher](https://github.com/ntrteam/ds_ntrboot_flasher/releases/latest) (`ds_ntrboot_flasher_dsi.nds`)

## Instructions

### Section I - Préparatifs

1. Éteignez **la DSi source**
2. Insérez la carte SD de votre linker dans votre ordinateur
3. Copiez `ds_ntrboot_flasher_dsi.nds` vers la carte SD de votre linker
4. Réinsérez la carte SD de votre linker dans votre linker
5. Insérez votre linker DS / DSi compatible avec ntrboot dans **la DSi source**

### Section II - Flasher ntrboot

1. Lancez `ds_ntrboot_flasher_dsi.nds` sur **la DSi source** en utilisant votre linker
2. Appuyez sur (A) pour continuer
3. Utilisez (Haut) et (Bas) pour sélectionner votre linker
4. Appuyez sur (A) pour continuer
5. Appuyez sur (A) pour "inject ntrboothax"
6. Appuyez sur (A) pour sélectionner "RETAIL"
7. Appuyez sur (A) pour continuer
8. Sélectionnez "EXIT"

___

::: tip

Continuez vers [Installation de boot9strap (ntrboot)](installing-boot9strap-(ntrboot))

:::
