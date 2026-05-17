# Déplacer une EmuNAND

## Lecture requise

Ceci est une section complémentaire pour déplacer le contenu d'une EmuNAND antérieure vers votre nouvelle SysNAND CFW, puis supprimer l'ancienne partition EmuNAND. Veuillez noter que les termes EmuNAND et RedNAND désignent deux implémentations différentes du [même concept](http://3dbrew.org/wiki/NAND_Redirection).

Notez que si vous avez n’importe quel autre payload que `GodMode9.firm` dans le dossier `/luma/payloads/` sur votre carte SD, appuyer sur (Start) au démarrage affiche un "chainloader menu" où vous devrez utiliser la croix directionnelle et le bouton (A) pour sélectionner "GodMode9" .

::: danger

Vous DEVEZ avoir déjà installé Luma3DS et boot9stsrap pour utiliser ceci.

:::

## Ce dont vous avez besoin

- Une EmuNAND existante
- La dernière version de [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (le fichier `.zip` de GodMode9)

## Instructions

### Section I - Préparatifs

1. Éteignez votre console
2. Insérez votre carte SD dans votre ordinateur
3. Copiez le fichier `GodMode9.firm` depuis l'archive GodMode9 `.zip` vers le dossier `/luma/payloads/` sur votre carte SD
4. Copiez le dossier `gm9` depuis l'archive GodMode9 `.zip` vers la racine de votre carte SD
5. Réinsérez votre carte SD dans votre console

### Section II - Enregistrer les sauvegardes DSIWare de la SysNAND

::: info

Si vous n'avez pas de jeux ou de sauvegardes de DSiWare auxquels vous tenez, vous pouvez ignorer cette section.

:::

1. Appuyez sur et maintenez (Start), et tout en maintenant (Start), allumez votre console. Ceci lancera GodMode9
2. Si vous êtes demandé de créer une sauvegarde de fichiers essentiels ("essential files backup"), appuyez sur (A) pour la faire, puis appuyez sur (A) pour continuer quand elle est terminée
3. Si vous êtes invité à corriger la date et l’heure RTC, appuyez sur (A) pour le faire, puis réglez la date et l’heure, puis appuyez sur (A) pour continuer
   - Notez que, si vous avez dû corriger la date et l'heure RTC, vous devrez corriger l'heure dans les Paramètres de la console aussi après ce guide
4. Naviguez vers `[2:] SYSNAND TWLN` -> `title`
5. Maintenez (R) appuyé et appuyez sur (A) en même temps sur le dossier `00030004`pour le sélectionner, puis choisissez "Copy to 0:/gm9/out"
   - Ce processus peut prendre un certain temps si vous avez beaucoup de jeux DSiWare
6. Appuyez deux fois sur (B) pour revenir au menu principal

### Section III - Enregistrer les sauvegardes GBA de la Console Virtuelle (VC)

::: info

SI vous n'avez pas de jeux ou de sauvegardes GBA VC auxquels vous tenez, vous pouvez ignorer cette section.

:::

::: info

Notez que ce n’est pas nécessaire pour tout autre type de jeux Console Virtuelle (GBC, NES, etc.)

:::

::: info

Le jeu sera exporté vers le dossier `/gm9/out/` sur votre carte SD sous le nom `<TitleID>.gbavc.sav`.

:::

::: info

Pour identifier le Title ID d'un fichier `<TitleID>.gbavc.sav`, vous pouvez obtenir une liste de tous les jeux installés sur la console et leurs Title IDs en appuyant sur (Home) pour faire apparaître le menu d'actions, en sélectionnant `Title manager` puis `[A:] SD CARD`.

:::

1. Effectuez le processus suivant pour chaque jeu GBA VC pour lequel vous souhaitez copier le fichier de sauvegarde :
   - Lancez le jeu GBA VC
   - Quittez le jeu GBA VC
   - Démarrez votre console tout en maintenant le bouton (Start) pour lancer le menu de chainloader de Luma3DS
   - Lancez GodMode9 en appuyant sur (A)
   - Naviguez vers `[S:] SYSNAND VIRTUAL`
   - Appuyez sur (A) sur `agbsave.bin` pour le sélectionner
   - Sélectionnez "AGBSAVE options..."
   - Sélectionnez "Dump GBA VC save"
   - Appuyez sur (A) pour continuer
   - Appuyez sur (Start) pour redémarrer votre console

### Section IV - Copier l'EmuNAND vers la SysNAND

1. Appuyez sur et maintenez (Start), et tout en maintenant (Start), allumez votre console. Ceci lancera GodMode9
2. Naviguez vers `[E:] EMUNAND VIRTUAL`
3. Appuyez sur (A) sur `nand.bin` pour le sélectionner, puis choisissez "NAND image options...", puis "Restore SysNAND (safe)"
4. Appuyez sur (A) pour autoriser l'écriture sur votre SysNAND, puis entrez la combinaison de boutons donnée
   - Ceci n'effacera pas votre installation boot9strap
5. Entrez la combinaison de boutons donnée pour débloquer l'écriture sur votre SysNAND (lvl1)
   - Ce processus prendra un certain temps
6. Une fois terminé, appuyez sur (A) pour continuer
7. Appuyez sur (B) pour décliner le reverrouillage des autorisations en écriture si vous y êtes invité
8. Appuyez sur (B) pour revenir au menu principal

### Section V - Restaurer des sauvegardes DSiWare

::: info

Si vous n'avez pas fait de copies de sauvegardes DSiWare auparavant, passez cette section.

:::

1. Naviguez vers `[0:] SDCARD` -> `gm9` -> `out`
2. Appuyez sur (Y) sur le dossier `00030004` pour le copier
3. Appuyez deux fois sur (B) pour revenir au menu principal
4. Naviguez vers `[2:] SYSNAND TWLN` -> `title`
5. Appuyez sur (Y) pour coller le dossier `00030004`
6. Sélectionnez "Copy path(s)"
7. Appuyez sur (A) pour autoriser l'écriture sur votre SysNAND (lvl1), puis entrez la combinaison de boutons donnée
8. Sélectionnez "Overwrite file(s)"
   - Ce processus peut prendre un certain temps si vous avez beaucoup de jeux DSiWare
9. Appuyez sur (B) pour décliner le reverrouillage des autorisations en écriture si vous y êtes invité
10. Appuyez deux fois sur (B) pour revenir au menu principal

### Section VI - Restaurer des sauvegardes GBA de la Console Virtuelle

::: info

Si vous n'avez pas fait de copies de sauvegardes GBA de la Console Virtuelle auparavant, ignorez cette section.

:::

::: info

Pour identifier le Title ID d'un fichier `<TitleID>.gbavc.sav`, vous pouvez obtenir une liste de tous les jeux installés sur la console et leurs Title IDs en appuyant sur (Home) pour faire apparaître le menu d'actions, en sélectionnant `Title manager` puis `[A:] SD CARD`.

:::

1. Maintenez (R) appuyé et appuyez sur (Start) en même temps pour éteindre votre console
2. Démarrez votre console en bootant sur la SysNAND
3. Effectuez le processus suivant pour chaque jeu GBA VC dont vous souhaitez restorer la sauvegarde :
   - Lancez le jeu GBA VC
   - Quittez le jeu GBA VC
   - Démarrez votre console tout en maintenant le bouton (Start) pour lancer le menu de chainloader de Luma3DS
   - Lancez GodMode9 en appuyant sur (A)
   - Naviguez vers `[0:] SDCARD` -> `gm9`
   - Appuyez sur (Y) sur le fichier `<TitleID>.gbavc.sav` que vous souhaitez restaurer pour le copier
   - Appuyez sur (B) pour revenir au menu principal
   - Naviguez vers `[S:] SYSNAND VIRTUAL`
   - Appuyez sur (A) sur `agbsave.bin` pour le sélectionner
   - Sélectionnez "AGBSAVE options..."
   - Sélectionnez "Inject GBA VC save"
   - Appuyez sur (A) pour continuer
   - Appuyez sur (Start) pour redémarrer votre console
   - Lancez le jeu GBA VC
   - Quittez le jeu GBA VC

### Section VII - Sauvegarder la SysNAND

1. Appuyez sur et maintenez (Start), et tout en maintenant (Start), allumez votre console. Ceci lancera GodMode9

<!--@include: ./_include/nand-backup.md -->

1. **Faites une copie de tous les fichiers présents sur votre carte SD dans un dossier sur votre ordinateur ; tous les fichiers seront effacés dans les étapes suivantes**

### Section VIII - Formater la carte SD

1. Appuyez sur et maintenez (Start), et tout en maintenant (Start), allumez votre console. Ceci lancera GodMode9

<!--@include: ./_include/format-sd-gm9.md -->

1. Maintenez (R) et appuyez sur (B) en même temps pour éjecter votre carte SD
2. Insérez votre carte SD dans votre ordinateur
3. Copiez tous vos fichiers vers votre carte SD
   - Assurez-vous de remplacer le fichier `boot.firm` sur votre carte SD avec le 'boot.firm' de votre sauvegarde
4. Réinsérez votre carte SD dans votre console
5. Appuyez sur (A) pour remonter votre carte SD
6. Appuyez sur (Start) pour redémarrer la console

___

::: tip

Retournez à [Finalisation de l'installation](finalizing-setup)

:::
