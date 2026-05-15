# Flasher ntrboot (NDS)

## Lecture requise

Avant de continuer, assurez-vous d'avoir lu toutes les informations sur [ntrboot](ntrboot)

Cette méthode nécessite l'accès temporaire à une Nintendo DS ou une Nintendo DS Lite qui est compatible avec votre linker. Cette méthode utilise l'aide du linker pour exécuter le fichier flasheur ntrboot `.nds` sur votre NDS.

::: danger

Notez que dans de rares circonstances, il est possible que le processus de flash **bricke** un linker contrefait et le rende inutilisable de manière permanente. C'est peu probable, mais néanmoins, seuls les linkers originaux listés sont pris en charge. Pour réduire les chances de recevoir un linker contrefait, il est recommandé d'utiliser un site réputé pour acheter votre linker (comme [NDS Card](https://www.nds-card.com/)).

:::

## Ce dont vous avez besoin

- Votre linker compatible avec ntrboot
- Deux consoles
  - **La NDS / NDSL source** : La Nintendo DS ou Nintendo DS Lite qui est compatible avec votre linker
  - **La 3DS cible** : La console de la famille 3DS sur un firmware non modifié
- La version 1.3 de [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (télechargement direct)
- La dernière version de [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip)

## Instructions

### Section I - Préparatifs

1. Éteignez **la NDS / NDSL source**
2. Insérez la carte SD de votre linker dans votre ordinateur
3. Créez un dossier nommé `ntrboot` à la racine de la carte SD de votre linker
4. Copiez `boot9strap_ntr.firm` depuis l'archive boot9strap ntr `.zip` vers le dossier `/ntrboot/` sur la carte SD de votre linker
5. Copiez `ntrboot_flasher_nds.nds` vers la carte SD de votre linker
6. Réinsérez la carte SD de votre linker dans votre linker
7. Insérez votre linker DS / DSi compatible avec ntrboot dans **la NDS ou NDSL source**

### Section II - Flasher ntrboot

1. Lancez `ntrboot_flasher_nds.nds` sur **la NDS / NDSL source** en utilisant votre linker
2. Appuyez sur (A) pour continuer
3. Utilisez (Haut) et (Bas) pour sélectionner votre linker
4. Appuyez sur (A) pour continuer
5. Sélectionnez "Dump flash" pour créer une sauvegarde de la mémoire de votre linker
6. Entrez la combinaison de boutons donnée pour confirmer
7. Appuyez sur (A) pour continuer
8. Utilisez (Haut) et (Bas) pour sélectionner votre linker
9. Appuyez sur (A) pour continuer
10. Sélectionnez "Inject FIRM" pour installer boot9strap sur votre linker
11. Entrez la combinaison de boutons donnée pour confirmer
12. Appuyez sur (A) pour continuer
13. Éteignez **la NDS / NDSL source**
14. Éjectez votre linker de **la NDS / NDSL source**

___

::: tip

Continuer vers [Installation de boot9strap (ntrboot)](installing-boot9strap-(ntrboot))

:::
