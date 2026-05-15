# Dépannage (MSET9)

Cette page offre des conseils de dépannage pour les problèmes couramment rencontrés avec les pages "Installation de boot9strap (MSET9)", "Installation de boot9strap (MSET9 CLI)" et "Installation de boot9strap (MSET9 Play Store)". Si les conseils donnés sur cette page ne vous permettent pas de résoudre votre problème, nous vous invitons à rejoindre [le Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp) et à y décrire votre problème ainsi que ce que vous avez déjà essayé.

## MSET9 (application / script)

:::details Python 3 is not installed

Python n'est pas installé sur l'ordinateur que vous utilisez. Téléchargez-le depuis le [site web de Python](https://www.python.org/downloads/), double-cliquez sur l'installateur et suivez les instructions pour installer Python. Une fois que Python est installé, essayez à nouveau.

:::

:::details HOME Menu extdata: Missing!

Veuillez allumer votre console avec votre carte SD insérée, puis vérifiez à nouveau le statut de MSET9.

Si cela ne fonctionne pas, votre carte SD doit être formatée :

1. Copiez tout le contenu de la carte SD vers votre PC
2. Formatez la carte SD ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
3. Recopiez tout dans l'autre sens
4. Recommencez à partir de la [Section I Étape 7](installing-boot9strap-(mset9-cli)#section-i---prep-work)

:::

:::details Mii Maker extdata: Missing!

Les données de l'Éditeur Mii n'ont pas été trouvées sur la carte SD. Veuillez allumer votre console avec votre carte SD insérée, puis lancez l'Éditeur Mii, puis vérifiez à nouveau le statut de MSET9.

Si cela ne fonctionne pas, votre carte SD doit être formatée :

1. Copiez tout le contenu de la carte SD vers votre PC
2. Formatez la carte SD ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
3. Recopiez tout dans l'autre sens
4. Recommencez à partir de la [Section I Étape 8](installing-boot9strap-(mset9-cli)#section-i---prep-work).

:::

:::details Title database: Not initialized!

Assurez-vous que vous avez réinitialisé la base de données de titres.

- Veuillez allumer votre console avec votre carte SD insérée
- Lancez les paramètres du système et accédez à `Gestion des données` -> `Nintendo 3DS` -> `Logiciels` -> Réinitialiser ([image](/images/screenshots/database-reset.jpg))
  - Cela n'effacera aucune de vos données
- Si vous obtenez une invite de réinitialisation, après avoir réinitialisé, éteignez votre console et recommencez à partir de la [Section I Étape 14](installing-boot9strap-(mset9-cli)#section-i---prep-work)

Si vous n'obtenez _pas_ une invite de réinitialisation, votre carte SD doit être formatée :

1. Copiez tout le contenu de la carte SD vers votre PC
2. Formatez la carte SD ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
3. Recopiez tout dans l'autre sens

<!--@include: ./_include/mset9-chorus.md -->

1. Saisissez le numéro correspondant au modèle et à la version de votre console, puis appuyez sur Entrée
2. Tapez `2` puis appuyez sur Entrée pour vérifier le statut MSET9
   - Cela créera à nouveau les bases de données factices
3. Fermez la fenêtre du script MSET9
4. Recommencez à partir de la [Section I Étape 12](installing-boot9strap-(mset9-cli)#section-i---prep-work).

:::

Error 01: Couldn't find Nintendo 3DS folder

Vous n'exécutez pas MSET9 depuis la racine de la carte SD, ou le dossier Nintendo 3DS n'est pas sur la carte SD.

Rappelez-vous, votre carte SD devrait ressembler à ceci :

::: info

![](/images/screenshots/mset9/mset9-root-layout.png)

:::

Si la disposition de votre carte SD est correcte, alors votre carte SD n'est probablement pas lue par votre console et doit être formatée :

1. Copiez tout le contenu de la carte SD vers votre PC
2. Formatez la carte SD ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
3. Recopiez tout dans l'autre sens
4. Recommencez depuis le début de [Section I](installing-boot9strap-(mset9-cli)#section-i---prep-work)



:::details Error 02: Your SD is write protected

La protection en écriture est activée sur cette carte SD. Si vous utilisez une carte SD grand-format, assurez-vous que le verrou est positionné [vers le haut](/images/sdlock.png). Sinon, essayez d'éjecter et de réinsérer votre carte SD.

:::

:::details Error 04: You don't have 1 ID0, you have (#)!

Vous avez plusieurs dossiers ID0. Pour déterminer le bon dossier, suivez ces instructions :

1. Renommez le dossier `Nintendo 3DS` en `BACKUP_Nintendo 3DS`
2. Réinsérez votre carte SD dans votre console
3. Allumez votre console
4. Attendez que la console génère les données sur la carte SD
   - Vos applications auront disparu. Ceci est normal et sera résolu sous peu
5. Éteignez votre console
6. Insérez votre carte SD dans votre ordinateur
7. Naviguez vers le dossier `Nintendo 3DS` sur votre carte SD
8. Notez les premiers caractères du dossier que vous voyez
   - Ceci est votre vrai ID0, que l'on gardera dans le vrai dossier Nintendo 3DS
9. Supprimez l'ID0 du dossier `Nintendo 3DS` actuel
10. Déplacez le vrai dossier ID0 du dossier `BACKUP_Nintendo 3DS` vers le dossier `Nintendo 3DS`
11. S'il existe, déplacez le dossier `Private` du dossier `BACKUP_Nintendo 3DS` vers le dossier `Nintendo 3DS`

Une fois que vous avez fait cela, continuez depuis la [Section I Étape 3](installing-boot9strap-(mset9-cli)#section-i---prep-work).

:::

:::: details Error 05: You don't have 1 ID1, you have (#)!

<!--@include: ./_include/id1-check.md -->



:::details Error 06: You need at least 16MB free

Votre carte SD n'a pas assez d'espace pour déclencher MSET9. Libérez de l'espace et réessayez.

A la fin de ce guide, vous aurez besoin d'au moins 1,3 Go pour faire une sauvegarde NAND, donc il est préférable de libérer au moins autant.

:::

:::details Error 07: One or more files are missing or malformed!

Un ou plusieurs fichiers dont MSET9 a besoin pour s'exécuter est manquant ou corrompu. Retéléchargez le `.zip` de [MSET9](https://github.com/hacks-guide/MSET9/releases/latest) et décompressez-le à la racine de vote carte SD, en remplaçant tous les fichiers existants, puis réessayez.

:::

:::: Error 18: Windows Locale Settings are broken!

<!--@include: ./_include/winerror234.md -->



:::details FileNotFoundError: [Errno 2] No such file or directory

Pour enlever manuellement MSET9, suivez ces directions:

1. Naviguez vers le dossier `Nintendo 3DS` sur votre carte SD
2. Ouvrez le dossier avec un nom de 32 caractères de long que vous voyez
3. Vous devriez voir deux dossiers, supprimez celui contenant du texte brouillé
4. Si le dossier qui reste se termine par "_user-id1", retirez "_user-id1" en le renommant
5. MSET9 est maintenant supprimé, considérez la Section IV comme complétée

:::

## MSET9 (exploit)

:::details Écran rouge après avoir réinséré la carte SD (Section II Étape 11)

Il se peut que `SafeB9S.bin` est manquant sur la racine de votre carte SD, ou que le fichier soit corrompu. Copiez-le depuis le `.zip` de MSET9, en remplaçant tous les fichiers existants, puis suivez ces instructions pour supprimer le fichier de déclenchement :

1. Forcez l’arrêt de votre console en maintenant le bouton Marche/Arrêt enfoncé pendant 20 secondes
2. Insérez votre carte SD dans votre ordinateur

<!--@include: ./_include/mset9-chorus.md -->

1. Saisissez le numéro correspondant au modèle et à la version de votre console, puis appuyez sur Entrée
   - L'état actuel (Current MSET9 state) devrait afficher [Injected](/images/screenshots/mset9/mset9-injected.png)
   - Si vous avez déjà supprimé le fichier de déclenchement (ou jamais injecté en premier lieu), l'état actuel affichera [Ready](/images/screenshots/mset9/mset9-ready.png), et vous pourrez [réessayer la Section II](installing-boot9strap-(mset9-cli)#section-ii---mset9)
2. Tapez `4`, puis appuyez sur Entrée
3. Une fois que la fenêtre dit "Removed trigger file", tapez `0` puis appuyez sur Entrée
4. Réinsérez votre carte SD dans votre console
5. Allumez votre console
6. Retournez à la [Section II Étape 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

Alternativement, votre carte SD pourrait être mal formatée ou partitionnée. Après la suppression du fichier de déclenchement, formatez la :

1. Copiez tout le contenu de la carte SD vers votre PC
2. Formatez la carte SD ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
3. Recopiez tout dans l'autre sens
4. Recommencez à partir de la [Section II Étape 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

:::

:::details Les Paramètres de la console chargent indéfiniment après avoir réinséré la carte SD

Vous avez probablement fait quelque chose de différent des instructions MSET9, sélectionné le mauvais modèle/version, ou votre carte SD doit être formatée. Assurez-vous que vous choisissez le bon [modèle](/images/3dsmodels.png) et la bonne version du firmware lors de l'ouverture du script.

Suivez ces instructions pour supprimer le fichier de déclenchement et pour réessayer la Section II :

1. Forcez l’arrêt de votre console en maintenant le bouton Marche/Arrêt enfoncé pendant 20 secondes
2. Insérez votre carte SD dans votre ordinateur

<!--@include: ./_include/mset9-chorus.md -->

1. Saisissez le numéro correspondant au modèle et à la version de votre console, puis appuyez sur Entrée
   - L'état actuel (Current MSET9 state) devrait afficher [Injected](/images/screenshots/mset9/mset9-injected.png)
   - Si vous avez déjà supprimé le fichier de déclenchement (ou jamais injecté en premier lieu), l'état actuel affichera [Ready](/images/screenshots/mset9/mset9-ready.png), et vous êtes prêts à réessayer la Section II
2. Tapez `4`, puis appuyez sur Entrée
3. Une fois que la fenêtre dit "Removed trigger file", tapez `0` puis appuyez sur Entrée
4. Réinsérez votre carte SD dans votre console
5. Allumez votre console
6. Retournez à la [Section II Étape 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

Si vous continuez à avoir ce problème et êtes sûr d'avoir tout fait correctement, assurez-vous que le fichier de déclenchement est supprimé et formatez votre carte SD :

1. Copiez tout le contenu de la carte SD vers votre PC
2. Formatez la carte SD ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
3. Recopiez tout dans l'autre sens
4. Recommencez à partir de la [Section II Étape 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

:::

:::details An exception occurred after triggering MSET9

Ceci indique que vous avez probablement déjà un custom firmware. Vous devriez [vérifier la présence d'un CFW](checking-for-cfw).

:::

## Problèmes avec SafeB9SInstaller

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Retourner à [Installation de boot9strap (MSET9 CLI)](installing-boot9strap-(mset9-cli))

:::

::: tip

Retourner à [Installation de boot9strap (MSET9 Play Store)](installing-boot9strap-(mset9-play-store))

:::

<!--@include: ./_include/troubleshooting-return.md -->


