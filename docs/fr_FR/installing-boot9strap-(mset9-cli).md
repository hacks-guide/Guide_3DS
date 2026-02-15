# Installation de boot9strap (MSET9 CLI)

:::details Détails techniques (optionnel)

[MSET9](https://github.com/zoogie/MSET9) est un exploit de l'application Paramètres de la Console développé par [zoogie](https://github.com/zoogie). Il exploite une faille où l'ID1 (le deuxième nom de dossier à 32 caractères dans le dossier Nintendo 3DS, à l'intérieur de l'ID0) peut être _n'importe quel_ nom tant qu'il est de 32 caractères. L'exécution d'une séquence d'actions spécifique entraîne l'exécution par la console des instructions encodées dans le nom du dossier ID1, ce qui permet d'obtenir un contrôle total sur la console.

:::

## Notes de compatibilité

::: warning

Cette page nécessite un ordinateur fonctionnant sous Windows, Linux ou macOS. Si vous avez un téléphone/une tablette Android ou un Chromebook, suivez plutôt [Installation de boot9strap (MSET9 Play Store)](installing-boot9strap-\(mset9-play-store\)). Si vous avez un iPhone ou un iPad, suivez plutôt [Installation de boot9strap (MSET9 CLI iOS)](installing-boot9strap-\(mset9-cli-ios\)). Si vous n'avez accès à aucun de ces appareils, vous devrez utiliser un [exploit alternatif](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits).

:::

::: info

Si vous utilisez un appareil Android comme adaptateur de carte SD pour votre ordinateur, vous ne serez pas en mesure de suivre cette page en raison d'incompatibilités avec le protocole de transfert de fichiers d'Android (MTP). Si c'est le cas, suivez plutôt [Installer boot9strap (MSET9 Play Store)](installing-boot9strap-\(mset9-play-store\)).

:::

## Ce dont vous avez besoin

- La dernière version de [MSET9](https://github.com/hacks-guide/MSET9/releases/latest) (le fichier `.zip` de MSET9)
- N'importe quelle version 3,x de [Python](https://www.python.org/downloads/) **installée sur votre ordinateur**
  - Si votre ordinateur est sous Windows, il est impossible d'utiliser Python s'il a été installé depuis le Microsoft Store. Veuillez installer une version provenant de python.org.
  - Si votre ordinateur est sous Linux ou macOS, vous avez probablement déjà Python 3. Vérifiez en ouvrant une fenêtre de Terminal et en entrant `python3 -V`. Si cette fonction renvoie un numéro de version, elle fonctionnera pour ce guide.

## Instructions

::: info

Sur cette page, vous utiliserez le script MSET9, qui est utilisé pour déclencher MSET9. Pendant que le script est en cours, les données de l'utilisateur disparaîtront temporairement mais reviendront à la fin de cette page. Si une erreur est survenue lors de l'exécution du script, la solution à cette erreur peut très probablement être trouvée sur la page de [dépannage](troubleshooting-mset9).

:::

### Section I - Préparatifs

Dans cette section, vous préparerez l'exploit MSET9 en créant **temporairement** un nouveau profil de Menu HOME avec presque aucune donnée utilisateur, puis en configurant ce profil avec uniquement les données minimales requises pour que MSET9 se déclenche. Vos données utilisateur existantes disparaîtront, mais reviendront une fois que vous aurez terminé avec cette page.

1. Insérez votre carte SD dans votre ordinateur
2. Copiez tout depuis le `.zip` de MSET9 à la racine de votre carte SD. S'il y a déjà des fichiers existants, remplacez-les par les nouveaux fichiers.

   ::: info

   ![](/images/screenshots/mset9/mset9-root-layout.png)

   :::

<!--@include: ./_include/mset9-chorus.md -->

```
::: info

![](/images/screenshots/mset9/mset9-select.png)

:::
```

1. Saisissez le numéro correspondant au modèle et à la version de votre console, puis appuyez sur Entrée

   - La fenêtre devrait être comme ceci :

   ::: info

   ![](/images/screenshots/mset9/mset9-setup-notcreated.png)

   :::

   - Assurez-vous que le modèle et la version corrects de la console sont affichés
2. Tapez `1`, puis appuyez sur Entrée pour commencer le processus de création du MSET9 ID1
3. Après avoir examiné l'avertissement, tapez `1` à nouveau et appuyez sur Entrée pour l'accepter
   - Si une erreur est survenue, consultez la page de [dépannage](troubleshooting-mset9), puis réessayez
4. Si vous voyez le message "Created hacked ID1.", appuyez sur Entrée pour fermer le script MSET9
   - Votre 3DS paraîtra vide / sans aucune application installée par l'utilisateur sur le Menu HOME. **Cela est attendu.** Vos données reviendront à une étape ultérieure
5. Réinsérez votre carte SD dans votre console
6. Allumez votre console
7. Ouvrez l'Éditeur Mii
8. Attendez que votre console atteigne l'écran [Bienvenue dans l'éditeur Mii](/images/screenshots/mset9/mii-welcome.png), puis quittez l'Éditeur Mii et retournez au Menu HOME
   - Vous verrez peut-être [cet écran](/images/screenshots/mset9/mii-extdata.png), ce qui indique que les données nécessaires ont été créées
   - Si vous atteignez l'écran de l'Éditeur Mii [normal](/images/screenshots/mset9/mii-existing.png), alors les données existent déjà. Quittez l'Éditeur Mii et retournez au Menu HOME
9. Lancez les paramètres du système et accédez à `Gestion des données` -> `Nintendo 3DS` -> `Logiciel` -> Réinitialiser ([image](/images/screenshots/database-reset.jpg))
   - Cela n'effacera aucune de vos données
10. Éteignez votre console en appuyant sur le bouton POWER puis appuyez sur Éteindre sur l'écran tactile
11. Insérez votre carte SD dans votre ordinateur

<!--@include: ./_include/mset9-chorus.md -->

1. Saisissez le numéro correspondant au modèle et à la version de votre console, puis appuyez sur Entrée

   - La fenêtre devrait changer en conséquence et afficher `Ready` :

   ::: info

   ![](/images/screenshots/mset9/mset9-ready.png)

   :::

   - Si la fenêtre affiche [Not ready - check MSET9 status for more details](/images/screenshots/mset9/mset9-not-ready.png) :
     - Tapez `2`, puis appuyez sur Entrée pour vérifier l'état de MSET9 et suivez les instructions indiquées
     - Une fois que vous avez résolu le problème, retournez à l'Étape 14 de la Section I
     - Pour en savoir plus, consultez la page de [dépannage](troubleshooting-mset9)
2. Tapez `0`, puis appuyez sur Entrée pour fermer le script
3. Réinsérez votre carte SD dans votre console

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
6. Insérez votre carte SD dans votre ordinateur

<!--@include: ./_include/mset9-chorus.md -->

1. Saisissez le numéro correspondant au modèle et à la version de votre console, puis appuyez sur Entrée
2. Dans la fenêtre MSET9, tapez `3`, puis appuyez sur Entrée pour injecter MSET9
   - Vous devriez voir "MSET9 successfully injected!"
3. Appuyez sur Entrée pour fermer le script MSET9
4. Réinsérez votre carte SD dans votre console **sans appuyer sur aucun bouton ni sur l'écran**
5. Si l'exploit a réussi, vous aurez démarré sur SafeB9SInstaller
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
2. Insérez votre carte SD dans votre ordinateur

<!--@include: ./_include/mset9-chorus.md -->

1. Saisissez le numéro correspondant au modèle et à la version de votre console, puis appuyez sur Entrée
   - L'état actuel (Current MSET9 state) devrait afficher [Injected](/images/screenshots/mset9/mset9-injected.png)
   - Si vous avez déjà effacé le fichier déclencheur (ou vous n'avez jamais rien injecté), l'état actuel affichera [Ready](/images/screenshots/mset9/mset9-ready.png), passez à l'étape 6
2. Tapez `4`, puis appuyez sur Entrée pour supprimer le fichier de déclenchement
   - Vous devriez voir "Removed trigger file."
3. Tapez `5`, puis appuyez sur Entrée pour supprimer MSET9
   - Vous devriez voir "Successfully removed MSET9!"
   - Si vous voyez "FileNotFoundError: [Errno 2] No such file or directory:" suivi d'un long chemin de fichier contenant "Nintendo 3DS", veuillez [suivre la section correspondante de ce guide de dépannage](troubleshooting-mset9#mset9-application-script)
4. Appuyez sur Entrée pour fermer le script MSET9

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

Avez-vous suivi la Section IV (Suppression de MSET9) ? Cette section est OBLIGATOIRE !

:::

::: tip

Continuer vers [Finalisation de l'installation](finalizing-setup)

:::
