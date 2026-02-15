# Installation de boot9strap (MSET9 Play Store)

:::details Détails techniques (optionnel)

[MSET9](https://github.com/zoogie/MSET9) est un exploit pour l'application Paramètres de la Console développé par [zoogie](https://github.com/zoogie). Il exploite une faille où l'ID1 (le deuxième nom de dossier à 32 caractères dans le dossier Nintendo 3DS, à l'intérieur de l'ID0) peut être _n'importe quel_ nom tant qu'il est de 32 caractères. L'exécution d'une séquence d'actions spécifique entraîne l'exécution par la console des instructions encodées dans le nom du dossier ID1, ce qui permet d'obtenir un contrôle total sur la console.

:::

## Notes de compatibilité

::: warning

Cette page nécessite un téléphone/une tablette Android ou un Chromebook. Si vous avez un iPhone ou un iPad, suivez plutôt [Installation de boot9strap (MSET9 CLI iOS)](installing-boot9strap-\(mset9-cli-ios\)). Si vous avez un ordinateur sous Windows, macOS, or Linux, suivez plutôt [Installation de boot9strap (MSET9 CLI)](installing-boot9strap-\(mset9-cli\)). Si vous n'avez accès à aucun de ces appareils, vous devrez utiliser un [exploit alternatif](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits).

:::

::: warning

Sur téléphones/tablettes Android, la version minimum d'Android requise est 6.0 (Marshmallow).

:::

## Ce dont vous avez besoin

- La dernière version de [MSET9](https://github.com/hacks-guide/MSET9/releases/latest) (le fichier `.zip` de MSET9)
- Les applications suivantes installées depuis le Google Play Store :
  - [MSET9 Installer](https://play.google.com/store/apps/details?id=moe.saru.homebrew.console3ds.mset9_installer_android)
  - [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver)
  - Si vous le souhaitez, vous pouvez installer leur fichier `apk` à la place

## Instructions

### Section I - Préparatifs

Dans cette section, vous préparerez l'exploit MSET9 en créant **temporairement** un nouveau profil de Menu HOME avec presque aucune donnée utilisateur, puis en configurant ce profil avec uniquement les données minimales requises pour que MSET9 se déclenche. Vos données utilisateur existantes disparaîtront, mais reviendront une fois que vous aurez terminé avec cette page.

1. Insérez votre carte SD dans votre téléphone/tablette/ordinateur

2. Copiez tout depuis le `.zip` de MSET9 à la racine de votre carte SD. S'il y a déjà des fichiers existants, remplacez-les par les nouveaux fichiers :

   - Ouvrez ZArchiver
   - Si vous y êtes invité, [autoriser ZArchiver à accéder aux fichiers sur votre carte SD](/images/screenshots/mset9/zarchiver-allow.png)
   - Naviguez vers l'endroit où se trouve le fichier .zip de MSET9 ([probablement dans le dossier Téléchargements](/images/screenshots/mset9/zarchiver-zip-location.png))
   - Sélectionnez le fichier `.zip` de MSET9, puis sélectionnez "Extraire..." ([image](/images/screenshots/mset9/zarchiver-extract-1.png))
   - Naviguez vers votre carte SD, puis appuyez sur l'icône bleue « flèche vers le bas » pour extraire les fichiers à la racine de votre carte SD ([image](/images/screenshots/mset9/zarchiver-extract-2.png))

   ::: info

   ![](/images/screenshots/mset9/mset9-root-layout-android.png)

   :::

3. Exécutez l'application [MSET9 Installer](/images/screenshots/mset9/mset9-setup-android.png)

4. Appuyez sur `Select "Nintendo 3DS" Folder`, puis naviguez vers votre dossier `Nintendo 3DS` sur votre carte SD ([image](/images/screenshots/mset9/select-mset9-folder-1.png))

5. Dès que vous êtes dans le dossier `Nintendo 3DS`, appuyez sur "Use this folder", puis, "Allow" si demandé ([image](/images/screenshots/mset9/select-mset9-folder-2.png))

6. Si "Setup MSET9" est [surligné](/images/screenshots/mset9/setup-mset9-highlighted.png), passez à l'étape suivante
   - Si une erreur est survenue, vous devez la résoudre avant de pouvoir utiliser MSET9. Référez-vous à [Problèmes et Dépannage](troubleshooting-mset9)

7. Appuyez sur `Setup MSET9` pour commencer le processus de configuration de MSET9

8. Après avoir lu l'avertissement, appuyez sur "Confirm" pour l'accepter

9. Appuyez sur la photo correspondant à votre modèle de console, puis sur le bouton correspondant à votre version actuelle du firmware

10. Si vous voyez `Hax ID1 Created`, appuyez sur OK pour continuer
    - Si une erreur est survenue, consultez la page de [dépannage](troubleshooting-mset9), puis réessayez
    - Votre 3DS paraîtra vide / sans aucune application installée par l'utilisateur sur le Menu HOME. **Cela est attendu.** Vos données reviendront à une étape ultérieure

11. Réinsérez votre carte SD dans votre console

12. Allumez votre console

13. Ouvrez l'Éditeur Mii

14. Attendez que votre console atteigne l'écran [Bienvenue dans l'éditeur Mii](/images/screenshots/mset9/mii-welcome.png), puis quittez l'Éditeur Mii et retournez au Menu HOME
    - Vous verrez peut-être [cet écran](/images/screenshots/mset9/mii-extdata.png), ce qui indique que les données nécessaires ont été créées
    - Si vous atteignez l'écran de l'Éditeur Mii [normal](/images/screenshots/mset9/mii-existing.png), alors les données existent déjà. Quittez l'Éditeur Mii et retournez au Menu HOME

15. Lancez les paramètres du système et accédez à `Gestion des données` -> `Nintendo 3DS` -> `Logiciel` -> Réinitialiser ([image](/images/screenshots/database-reset.jpg))
    - Cela n'effacera aucune de vos données

16. Éteignez votre console en appuyant sur le bouton POWER puis appuyez sur Éteindre sur l'écran tactile

17. Insérez votre carte SD dans votre téléphone/tablette/ordinateur

18. L'application MSET9 Installer devrait automatiquement vérifier si vous avez correctement effectué les étapes précédentes
    - L'application peut prendre quelques secondes pour détecter la carte SD et réagir
    - Si la vérification ne se fait pas automatiquement, appuyez sur `Check MSET9 status` pour effectuer une vérification manuelle
    - Si une erreur est survenue, consultez la page de [dépannage](troubleshooting-mset9), puis réessayez

19. Si la vérification a réussi, vous devriez voir `Inject trigger file` être [surligné](/images/screenshots/mset9/inject-trigger-highlighted.png) et vous pouvez passer à l'étape suivante. **N'injectez pas encore le déclencheur.** Mettez votre Téléphone/tablette/ordinateur de côté pour le moment

20. Réinsérez votre carte SD dans votre console

### Section II - MSET9

Dans cette section, vous allez déclencher MSET9 pour lancer SafeB9SInstaller (l'installateur de custom firmware).

::: danger

Ces instructions doivent être suivies **À LA LETTRE**, donc revérifiez TOUT ce que vous faites pour éviter les erreurs !

:::

1. Allumez votre console en veillant à ce que l'application Paramètres de la Console soit sélectionnée
   - Si l'application Paramètres de la Console n'est pas sélectionnée **[déplacez votre curseur](/images/screenshots/mset9/hover-settings.png)** sur l'icône de Paramètres de la Console à l'aide de la croix directionnelle, éteignez votre console, puis rallumez-la
2. Appuyez sur (A) pour lancer les Paramètres de la Console
3. Naviguez vers `Gestion des données` -> `Nintendo 3DS` -> `Données additionnelles` ([image](/images/screenshots/mset9/settings-extdata.png))
4. **N'appuyez sur aucun bouton et ne touchez pas l'écran**
5. **Avec la console TOUJOURS ALLUMÉE, et sans appuyer sur aucun bouton ni sur l'écran**, retirez votre carte SD de votre console
   - Le menu va s'actualiser et dire qu'aucune carte SD n'est détectée, ce qui est attendu
6. Insérez votre carte SD dans votre téléphone/tablette/ordinateur
7. Ouvrez l'application MSET9 Installer
8. Appuyez sur `Inject trigger file`
   - Le bouton devrait se griser et `Remove trigger file` devenir [surligné](/images/screenshots/mset9/remove-trigger-highlighted.png)
9. Réinsérez votre carte SD dans votre console **sans appuyer sur aucun bouton ni sur l'écran**
10. Si l'exploit a réussi, vous aurez démarré sur SafeB9SInstaller
    - Si vous voyez un écran rouge ou si la console reste bloquée sur un écran de chargement pendant plus de 10 secondes, suivez le [guide de dépannage](troubleshooting-mset9)

### Section III - Installer boot9strap

Dans cette section, vous installerez un custom firmware sur votre console.

1. Lorsque vous y êtes invité, entrez la combinaison de touches indiquée sur l'écran supérieur pour installer boot9strap
   - Dans le cas où un message en rouge apparaîtrait lors d'une étape sur l'écran du bas et que vous n'êtes pas sollicité pour saisir une combinaison de boutons, [suivez ce guide de dépannage](troubleshooting-mset9#sighaxed-firm-was-not-installed-check-lower-screen-for-more-info)
   - Si l'écran du haut est vide **et** que vous voyez "Crypto status - all checks passed" sur l'écran du bas, vous devrez entrer la combinaison de boutons à l'aveugle. Appuyez sur les boutons suivants de votre console dans cet ordre :
     - Gauche sur la croix directionnelle, bas sur la croix directionnelle, Droite sur la croix directionnelle, Haut sur la croix directionnelle, A
2. Une fois terminé (les sept étapes sur l'écran du bas sont vertes), appuyez sur (A) pour redémarrer votre console

<!--@include: ./_include/configure-luma3ds.md -->

### Section IV - Suppression de MSET9

Dans cette section, vous supprimerez MSET9 pour éviter d'autres problèmes et pour restaurer vos données utilisateur (jeux, thèmes, etc.). (Cela ne supprimera pas le custom firmware que vous venez d'installer.)

::: danger

NE PAS sauter cette section ! Si vous la sautez, les applications risquent de planter de façon inattendue et vous rencontrerez des erreurs sur la page suivante !

:::

1. Éteignez votre console
2. Insérez votre carte SD dans votre téléphone/tablette/ordinateur
3. Ouvrez l'application MSET9 Installer
4. Appuyez sur `Remove MSET9`
5. Fermez l'application MSET9 Installer

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

Avez-vous suivi la Section IV (Suppression de MSET9) ? Cette section est OBLIGATOIRE !

:::

::: tip

Continuer vers [Finalisation de l'installation](finalizing-setup)

:::
