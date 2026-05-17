# Utilisation de GodMode9

::: info

Pour plus d'informations sur l'extraction d'une carte de jeu ou du contenu de la carte SD, consultez [Extraction des titres et des cartes de jeu](dumping-titles-and-game-cartridges).

:::

::: info

Pour de l'aide (en anglais) sur GodMode9 ainsi que sur le scripting, et pour être tenu à jour et informé, rejoignez [le Discord de GodMode9](https://discord.gg/BRcbvtFxX4).

:::

## Lecture requise

GodMode9 est un navigateur de fichiers avec un accès complet pour la console Nintendo 3DS, vous donnant accès à votre carte SD, les partitions FAT à l’intérieur de votre SysNAND et EmuNAND et foncièrement n'importe quoi d’autre. Parmi les autres fonctionnalités, vous pouvez copier, supprimer, renommer des fichiers et créer des dossiers.

Notez que si vous avez n’importe quel autre payload que `GodMode9.firm` dans le dossier `/luma/payloads/` sur votre carte SD, appuyer sur (Start) au démarrage affichera un "chainloader menu" où vous devrez utiliser le D-Pad et le bouton (A) pour sélectionner "GodMode9".

GodMode9 est un logiciel puissant qui a la capacité de modifier dans l'absolu n'importe quoi sur votre console. Bien que beaucoup de ces modifications soient verrouillées derrière un système de permissions, et qu'il est impossible d'effectuer accidentellement des actions dangereuses sans déverrouiller délibérément les permissions, vous devriez quand même suivre attentivement les instructions et conserver les sauvegardes au cas où.

## Mise à jour de GodMode9

::: info

Certaines des instructions ci-dessous ne s'appliquent qu'à la dernière version de GodMode9, et par conséquent vous devriez suivre cette section pour mettre à jour votre copie avant de continuer. Si l'un des fichiers existe, remplacez-les par les nouveaux fichiers.

:::

### Ce dont vous avez besoin

- La dernière version de [GodMode9]
  (https://github.com/d0k3/GodMode9/releases/latest) (le fichier GodMode9 `.zip`)

### Instructions

1. Éteignez votre console
2. Insérez votre carte SD dans votre ordinateur
3. Copiez le fichier `GodMode9.firm` depuis l'archive GodMode9 `.zip` vers le dossier `/luma/payloads/` sur votre carte SD
4. Copiez le dossier `gm9` depuis l'archive GodMode9 `.zip` vers la racine de votre carte SD
5. Réinsérez votre carte SD dans votre console

::: tip

GodMode9 est maintenant à jour.

:::

## Création d'une sauvegarde de la NAND

1. Appuyez sur et maintenez (Start), et tout en maintenant (Start), allumez votre console. Ceci lancera GodMode9

<!--@include: ./_include/nand-backup.md -->

::: tip

Votre sauvegarde NAND a été créée avec succès.

:::

## Restauration d'une sauvegarde de la NAND

1. Éteignez votre console
2. Insérez votre carte SD dans votre ordinateur
3. Copiez `<date>_<serialnumber>_sysnand_##.bin` de votre ordinateur vers le dossier `/gm9/out/` sur votre carte SD
4. Réinsérez votre carte SD dans votre console
5. Appuyez sur et maintenez (Start), et tout en maintenant (Start), allumez votre console. Ceci lancera GodMode9
6. Appuyez sur (Home) pour faire apparaître le menu d’actions
7. Sélectionnez "Scripts..."
8. Sélectionnez "GM9Megascript"
9. Sélectionnez "Restore Options"
10. Sélectionnez "SysNAND Restore (safe)"
11. Sélectionnez votre sauvegarde NAND
12. Appuyez sur (A) pour autoriser l'écriture sur votre SysNAND (lvl3), puis entrez la combinaison de boutons donnée
    - Ceci **n'effacera pas** votre installation boot9strap
    - Ce processus prendra un certain temps
13. Appuyez sur (A) pour continuer
14. Appuyez sur (B) pour revenir au menu principal
15. Sélectionnez "Exit"
16. Appuyez (A) pour reverrouiller l'autorisation en écriture si vous y êtes invité

::: tip

Votre sauvegarde NAND a été restaurée avec succès. Vous pouvez maintenant supprimer `<date>_<serialnumber>_sysnand_###.bin` de votre carte SD.

:::

## Injection de n'importe quelle app .CIA dans Santé et sécurité

::: info

Notez qu’il n’est pas possible d’injecter des fichiers dans Santé et sécurité qui sont plus lourds que l'application elle même (y compris des jeux et autres applications lourdes)

:::

1. Appuyez sur et maintenez (Start), et tout en maintenant (Start), allumez votre console. Ceci lancera GodMode9
2. Naviguez vers `[0:] SDCARD` -> `cias`
3. Appuyez sur (A) sur votre `.cia` pour le sélectionner
4. Sélectionnez "CIA image options..."
5. Sélectionnez "Mount image to drive"
6. Appuyez sur (A) sur le fichier `.app`
7. Sélectionnez "NCCH image options"
8. Selectionnez "Inject to H&S"
9. Appuyez sur (A) pour autoriser l'écriture sur votre SysNAND (lvl1), puis entrez la combinaison de boutons donnée
10. Appuyez sur (A) pour continuer
11. Appuyez (A) pour reverrouiller l'autorisation en écriture si vous y êtes invité

::: tip

L’application souhaitée a maintenant été injectée dans Santé et sécurité.

:::

## Restauration de Santé et sécurité après avoir injecté une app .cia

::: info

Cela ne fonctionnera que si l’injection dans Santé et sécurité a été réalisée par GodMode9 (pas Decrypt9 ou Hourglass9).

:::

1. Appuyez sur et maintenez (Start), et tout en maintenant (Start), allumez votre console. Ceci lancera GodMode9
2. Appuyez sur (Home) pour faire apparaître le menu d’actions
3. Sélectionnez "More..."
4. Sélectionnez "Restore H&S"
5. Appuyez sur (A) pour autoriser l'écriture sur votre SysNAND (lvl1), puis entrez la combinaison de boutons donnée
6. Appuyez (A) pour reverrouiller l'autorisation en écriture si vous y êtes invité

::: tip

Santé et sécurité a été rétablie à la normale.

:::

## Formater une carte SD

::: danger

**Notez que cela effacera tout le contenu de votre carte SD !**

:::

1. Appuyez sur et maintenez (Start), et tout en maintenant (Start), allumez votre console. Ceci lancera GodMode9
2. Appuyez sur (R) + (B) pour démonter la carte SD actuelle et insérez celle que vous voulez formater
   - Si GodMode9 affiche une erreur d'initialisation lors de l'insertion de la carte SD à formater, elle peut être ignorée en toute sécurité

<!--@include: ./_include/format-sd-gm9.md -->

::: tip

Votre carte SD a été formatée avec succès pour être utilisée avec la console.

:::

## Supprimer un NNID sans formater votre console

::: info

Ce processus ne vous déconnectera que de votre NNID. Vous ne pourrez toujours pas utiliser le NNID sur une autre console, car le NNID reste lié à la console.

:::

1. Appuyez sur et maintenez (Start), et tout en maintenant (Start), allumez votre console. Ceci lancera GodMode9
2. Appuyez sur (Home) pour faire apparaître le menu d’actions
3. Sélectionnez "Scripts..."
4. Sélectionnez "GM9Megascript"
5. Sélectionnez "Scripts from Plailect's Guide"
6. Sélectionnez "Remove NNID"
7. Appuyez sur (A) pour continuer
8. Appuyez sur (A) pour autoriser l'écriture sur votre SysNAND (lvl1), puis entrez la combinaison de boutons donnée
9. Appuyez sur (A) pour continuer
10. Appuyez sur (B) pour revenir au menu principal
11. Sélectionnez "Exit"
12. Appuyez (A) pour reverrouiller l'autorisation en écriture si vous y êtes invité
13. Appuyez sur (Start) pour redémarrer votre console

::: tip

Vous avez maintenant été déconnecté de votre NNID.

:::
