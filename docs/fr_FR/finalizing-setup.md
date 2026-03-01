# Finalisation de la configuration

## Lecture obligatoire

Sur la page précédente, vous avez installé boot9strap, un chargeur de firmware personnalisé qui charge le fichier `boot.firm` depuis la carte SD ou la NAND (mémoire interne). Dans ce cas, nous utilisons Luma3DS de [LumaTeam](https://github.com/LumaTeam/) pour patcher la console, lui permettant d'exécuter des homebrew.

Sur cette page, nous ferons des sauvegardes des fichiers système critiques et installerons certains homebrews. La plupart de ces étapes seront automatisées en utilisant un script que vous exécuterez sur votre console.

::: info

Le script installera les applications suivantes :

- - **FBI** de Steveice10 _(installe les applications au format CIA)_
- **Homebrew Launcher Loader** de PabloMK7 _(lance l'Homebrew Launcher, pour les homebrews au format 3DSX)_
- **Anemone3DS** par astronautlevel2 _(installe des thèmes personnalisés, des écrans de démarrage et des badges)_
- **Checkpoint** par BernardoGiordano/FlagBrew _(gère les données de sauvegarde de jeux 3DS/DS)_
- **ftpd** par mtheall _(permet l'accès de la carte SD 3DS via sans fil via FTP)_
- **Universal-Updater** par Universal-Team _(magasin d'application sur la console pour télécharger des homebrew via Wi-Fi)_
- **GodMode9** par d0k3 _(outil pour extraire des données de la mémoire interne ou des cartouches)_

Si vous ne voulez pas une de ces applications, vous pouvez les supprimer une fois que vous avez terminé cette page en allant dans Paramètres de la console -> Gestion des données -> Nintendo 3DS -> Logiciels. (GodMode9 ne peut pas être supprimé de cette manière et est généralement requis pour d'autres fonctions.)

::: details Liens du code source (facultatif)

Toutes les applications installées sur ce guide sont open source. Si vous êtes intéressé à voir comment ils fonctionnent, ou aimeriez laisser une étoile pour montrer votre appréciation, leur code source est lié ici :

- [FBI](https://github.com/lifehackerhansol/FBI)
- [Homebrew Launcher Loader](https://github.com/PabloMK7/homebrew_launcher_dummy)
- [Anemone3DS](https://github.com/astronautlevel2/Anemone3DS)
- [Checkpoint](https://github.com/bernardogiordano/checkpoint/releases)
- [ftpd](https://github.com/mtheall/ftpd)
- [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/)
- [GodMode9](https://github.com/d0k3/GodMode9)

:::

## Notes de compatibilité

::: info

Si votre configuration CFW précédente était basée sur EmuNAND et que vous souhaitez déplacer le contenu de votre EmuNAND/RedNAND vers SysNAND, suivez [Transférer votre EmuNAND](move-emunand) avant de suivre cette page. Si vous ne savez pas ce qu’est une EmuNAND, cela ne s’applique pas à vous.

:::

## Ce dont vous avez besoin

- [x_finalize_helper.firm](https://github.com/hacks-guide/finalize/releases/latest/download/x_finalize_helper.firm) (téléchargement direct)
- [finalize.romfs](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) (téléchargement direct)

## Instructions

### Section I - Préparatifs

Dans cette section, vous allez copier les fichiers nécessaires pour suivre le reste des instructions sur cette page.

1. Éteignez votre console
2. Insérez votre carte SD dans votre ordinateur
3. Copiez `finalize.romfs` à la racine de votre carte SD
4. Ouvrez le dossier `luma` sur votre carte SD et créez un dossier nommé `payloads` à l'intérieur s'il n'existe pas déjà
5. Copiez `x_finalize_helper.firm` dans le dossier `payloads`
6. Réinsérez votre carte SD dans votre console

La capture d'écran ci-dessous indique la disposition minimale de la carte SD requise pour suivre cette page. Il est possible que vous ayez des fichiers ou des dossiers supplémentaires sur votre carte SD, selon votre configuration précédente ou la méthode que vous avez suivie.

::: info

![](/images/screenshots/finalizing-root-layout.png)

:::

::: info

![](/images/screenshots/finalizing-luma-payloads.png)

:::

### Section II - Mise à jour du système

Dans cette section, vous allez mettre à jour votre console vers la dernière version, ce qui est sans danger avec le custom firmware.

<!--@include: ./_include/sysupdate.md -->

### Section III - Configuration RTC et DSP

Dans cette section, vous synchroniserez l'horloge interne de votre 3DS avec l'heure réelle et allez dumper le firmware du son (ce qui est nécessaire pour que certains logiciels homebrew utilisent correctement le son).

1. Appuyez simultanément sur (L) + (Bas sur la croix directionnelle) + (Select) pour ouvrir le menu Rosalina
   - Si l'un de ces boutons est cassé, téléchargez [config.ini](/assets/config.ini) et mettez-le dans votre dossier `luma` en remplaçant le fichier existant. Ceci changera la combinaison de touches du menu Rosalina en (X) + (Y)
2. Sélectionnez "Miscellaneous options"
3. Sélectionnez "Dump DSP firmware"
4. Appuyez sur (B) pour continuer
5. Sélectionnez "Nullify user time offset"
6. Appuyez sur (B) pour continuer
7. Appuyez sur (B) pour revenir au menu principal de Rosalina
8. Appuyez sur (B) pour quitter le menu Rosalina

### Section IV - Script d’installation

Dans cette section, vous utiliserez une série de scripts pour automatiser l'installation des homebrew, le nettoyage de la carte SD et la sauvegarde des fichiers système.

1. Éteignez votre console
2. Allumez votre console tout en maintenant le bouton (X). Ceci lancera l'assistant de finalisation de l'installation (Finalizing Setup Helper)
   - Si vous démarrez dans le menu HOME, votre dossier `payloads` est peut-être mal orthographié ou `x_finalize_helper.firm` se trouve au mauvais endroit
   - Si vous rencontrez une erreur, consultez la page de [dépannage](troubleshooting-finalizing-setup)
3. After a few seconds, your console should automatically boot into GodMode9
   - À partir de ce moment, vous pouvez accéder GodMode9 en allumant votre console tout en maintenant le bouton (Start)
   - Maintenir (X) au démarrage ne fera plus rien
4. Si nécessaire, configurez GodMode9:
   - If you are prompted to select a language, use the D-Pad and press (A) to select English
     - This language choice only affects GodMode9's menu options
     - You can set it to your language of choice after completing this guide
   - S'il vous est demandé de créer une sauvegarde de fichiers essentiels ("essential files backup"), appuyez sur (A) pour la faire, puis appuyez sur (A) pour continuer
   - Si vous êtes invité à corriger la date et l’heure RTC, appuyez sur (A) pour le faire, puis réglez la date et l’heure, puis appuyez sur (A) pour continuer
5. Quand vous voyez [root] et une liste de lecteurs, appuyez sur (Home) pour aller dans le menu d'actions
6. Sélectionnez "Scripts..." (_pas_ l'option "Lua scripts")
7. Sélectionnez "finalize"
8. Suivez les instructions du script, en répondant aux questions qui vous sont posées
   - Si vous voyez "Information #05: No title database", appuyez sur (A) pour importer et entrez la combinaison de touches indiquée sur l'écran du bas pour continuer
   - Si vous rencontrez une erreur, suivez les instructions dans le message d'erreur ou consultez le guide de [dépannage](troubleshooting-finalizing-setup) puis ouvrez GodMode9 en maintenant (Start) au démarrage pour relancer le script
9. Une fois que le script dit "Setup complete!", appuyez sur (A) pour éteindre la console
   - Si vous ne voyez PAS le message "Setup complete!", le script a eut un problème et vous devrez refaire cette section à partir de l’étape 3
10. Insérez votre carte SD dans votre ordinateur
11. Copiez le dossier `/gm9/backups/` vers un endroit sûr sur votre ordinateur
    - Ce dossier contient des sauvegardes de fichiers critiques et doit être sauvegardé à plusieurs endroits (c’est-à-dire un stockage en cloud) si possible
    - Les deux fichiers SysNAND constituent votre sauvegarde NAND et peuvent être utilisés pour rétablir le fonctionnement de votre console si elle est brickée (rendu inutilisable) par un problème logiciel
    - Le fichier `essential.exefs` contient les fichiers uniques au système de votre console et peut être utilisé pour récupérer vos données en cas de défaillance matérielle
12. Si vous les avez toujours, supprimez les deux fichiers `SysNAND` du dossier `/gm9/backups/` de votre carte SD
    - Le fichier `essential.exefs` est petit et peut être conservé sur votre carte SD pour faciliter l’accès

___

::: tip

Vous avez terminé ! Le custom firmware est maintenant entièrement installé et configuré sur votre console.

:::

::: info

Vous vous demandez ce que vous pouvez faire avec votre nouvelle console moddée ? Visitez [notre wiki](https://wiki.hacks.guide/wiki/3DS:Things_to_do) (en anglais)!

:::

### Informations et notes

::: info

Voici quelques combinaisons de touches que vous devriez connaître :

- Maintenir (Select) au démarrage lancera le menu de configuration de Luma3DS.
- Maintenir (Start) au démarrage lancera GodMode9, ou si vous avez plusieurs payloads dans `/luma/payloads/`, le chainloader Luma3DS.
- Par défaut, appuyer sur (L) + (Bas sur la croix directionnelle) + (Select) en mode 3DS lancera le menu Rosalina, où vous pouvez vérifier les informations de la console, prendre des captures d'écran, activer des codes de triche, etc. Cela peut être modifié à partir du menu Rosalina.
- Maintenir (Start) + (Select) + (X) au  démarrage fera afficher une couleur à la LED de notification à des fins de débogage. Voir le journal des [modifications](https://github.com/SciresM/boot9strap/releases/tag/1.4) pour une liste.

:::

### Pretendo

Pretendo est un service qui remplace les services en ligne du Nintendo Network, maintenant fermés. Il ressuscite aussi la Miiverse, via Juxtaposition. Le guide officiel se trouve [ici](https://pretendo.network/docs/install/3ds).

**Note : Pretendo ne prend pas en charge chaque service en ligne, mais des travaux sont en cours pour y parvenir.**

Une liste de jeux supportés par Pretendo se trouve [ici](https://wiki.pretendo.zip/game-support-status).

::: info

For information on using GodMode9's various features, check out the [GodMode9 Usage](godmode9-usage) and [Dumping Titles and Game Cartridges](dumping-titles-and-game-cartridges) pages.

:::
