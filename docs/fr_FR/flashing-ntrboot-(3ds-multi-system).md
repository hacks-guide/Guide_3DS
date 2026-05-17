# Flasher ntrboot (plusieurs 3DS)

## Lecture requise

Avant de commencer, assurez-vous d'avoir lu toutes les informations sur [ntrboot](ntrboot).

Cette méthode nécessite un accès temporaire à un second périphérique de la famille 3DS qui utilise déjà boot9strap. Votre linker n'a pas besoin de fonctionner sur aucune des deux 3DS.

::: danger

Notez que dans de rares circonstances, il est possible que le processus de flash **bricke** un linker contrefait et le rende inutilisable de manière permanente. C'est peu probable, mais néanmoins, seuls les linkers originaux listés sont pris en charge. Pour réduire les chances de recevoir un linker contrefait, il est recommandé d'utiliser un site réputé pour acheter votre linker (comme [NDS Card](https://www.nds-card.com/)).

:::

## Ce dont vous avez besoin

- Votre linker compatible avec ntrboot
- Deux consoles de la famille 3DS
  - **La 3DS source** : La console de la famille 3DS sur laquelle boot9strap est déjà installé
  - **La 3DS cible** : la console de la famille 3DS sur un firmware non modifié
- La version v1.3 de [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (téléchargement direct)
- La dernière version de [ntrboot_flasher](https://github.com/ntrteam/ntrboot_flasher/releases/latest) (`ntrboot_flasher.firm`)

## Instructions

### Section I - Préparatifs

1. Éteignez **la 3DS source**
2. Insérez la carte SD de **la 3DS source** dans votre ordinateur
3. Créez un dossier nommé `ntrboot` à la racine de votre carte SD
4. Copiez `boot9strap_ntr.firm` et `boot9strap_ntr.firm.sha` depuis l'archive boot9strap ntr `.zip` vers le dossier `/ntrboot/` sur votre carte SD
5. Copiez `ntrboot_flasher.firm` vers le dossier `/luma/payloads/` sur la carte SD de **la 3DS source**
6. Réinsérez la carte SD de **la 3DS source** dans **la 3DS source**
7. Insérez votre linker DS / DSi compatible avec ntrboot dans **la 3DS source**

### Section II - Flasher ntrboot

1. Lancez le chainloader Luma3DS en maintenant (Start) pendant le démarrage de **la 3DS source**
2. Sélectionnez "ntrboot_flasher"
3. Lisez l'avertissement de l'écran rouge
4. Appuyez sur (A) pour continuer
5. Sélectionnez votre linker
   - Si vous ne pouvez pas voir votre linker dans la liste en haut, lisez l'écran du bas pour en savoir plus sur chaque option
6. Sélectionnez "Dump Flash"
7. Attendez que le processus soit terminé
8. Appuyez sur (A) pour continuer
9. Appuyez sur (A) pour retourner au menu principal
10. Sélectionnez "Inject Ntrboot"
11. Appuyez sur (A) pour ntrboot pour une console du commerce
12. Attendez que le processus soit terminé
13. Appuyez sur (A) pour revenir au menu principal
14. Appuyez sur (B) pour éteindre **la 3DS source**

___

::: tip

Continuer vers [Installation de boot9strap (ntrboot)](installing-boot9strap-(ntrboot))

:::
