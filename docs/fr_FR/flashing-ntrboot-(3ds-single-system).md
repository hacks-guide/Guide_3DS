# Flasher ntrboot (Une seule 3DS)

## Lecture requise

Avant de continuer, assurez-vous d'avoir lu toutes les informations sur [ntrboot](ntrboot)

Cette méthode ne nécessite que votre 3DS non hackée et non modifiée et un linker compatible. Cette méthode utilise le linker pour exécuter le fichier flasheur ntrboot `.nds` sur votre 3DS. Ça signifie que votre linker doit pouvoir lancer des fichiers `.nds` sur la version de votre 3DS. Consultez le tableau des linkers sur [ntrboot](ntrboot) pour en savoir plus.

::: danger

Notez que dans de rares circonstances, il est possible que le processus de flash **bricke** un linker contrefait et le rende inutilisable de manière permanente. C'est peu probable, mais néanmoins, seuls les linkers originaux listés sont pris en charge. Pour réduire les chances de recevoir un linker contrefait, il est recommandé d'utiliser un site réputé pour acheter votre linker (comme [NDS Card](https://www.nds-card.com/)).

:::

## Ce dont vous avez besoin

- Votre linker compatible avec ntrboot
- La version v1.3 de [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (téléchargement direct)
- La dernière version de [ntrboot_flasher_nds](https://github.com/jason0597/ntrboot_flasher_nds/releases/latest) (`ntrboot_flasher_nds.nds`)

## Instructions

### Section I - Préparatifs

1. Éteignez votre console
2. Insérez la carte SD de votre linker dans votre ordinateur
3. Créez un dossier nommé `ntrboot` à la racine de la carte SD de votre linker
4. Copiez `boot9strap_ntr.firm` depuis l'archive boot9strap ntr `.zip` vers le dossier `/ntrboot/` sur la carte SD de votre linker
5. Copiez `ntrboot_flasher_nds.nds` vers la carte SD de votre linker
6. Réinsérez la carte SD de votre linker dans votre linker
7. Insérez votre linker DS/DSi compatible ntrboot dans votre console

### Section II - Flasher ntrboot

1. Lancez `ntrboot_flasher_nds.nds` sur votre console en utilisant votre linker
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
13. Éteignez votre console

___

::: tip

Continuez vers [Installation de boot9strap (ntrboot)](installing-boot9strap-(ntrboot))

:::
