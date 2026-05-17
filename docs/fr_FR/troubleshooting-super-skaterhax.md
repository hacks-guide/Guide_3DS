# Dépannage (super-skaterhax)

Cette page offre des conseils de dépannage pour les problèmes rencontrés couramment avec la page "Installation de boot9strap (super-skaterhax)". Si les conseils donnés sur cette page ne vous permettent pas de résoudre votre problème, nous vous invitons à rejoindre [le Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp) et à y décrire votre problème ainsi que ce que vous avez déjà essayé.

::: warning

Ces instructions ne sont valides que pour la page "Installation de boot9strap (super-skaterhax)". Si vous utilisez **autre chose** qu'une **New 3DS** entre la version **11.15.0 et 11.17.0**, vous devriez suivre [les instructions de dépannage pour Installation de boot9strap (SSLoth-Browser)](troubleshooting-ssloth-browser) à la place.

:::

## Problèmes avec super-skaterhax

:::details "Une erreur est survenue. Veuillez sauvegarder les données de tout logiciel en cours d'utilisation et redémarrer la console."

Si aucune couleur ne brille après avoir appuyé sur "GO GO!":

- Assurez-vous que vous avez correctement défini la date de votre système et [region](/images/screenshots/skaterhax/skater-lang.png)
- Assurez-vous qu'aucun autre onglet du navigateur n'est ouvert, puis redémarrez le navigateur et réessayez l'exploit

Si l'écran brille en couleur puis se fige/plante:

- Assurez-vous que vous avez une copie correcte de `arm11code.bin` et `browserhax_hblauncher_ropbin_payload.bin` pour la version et la région de votre console
- Essayez de réinitialiser les données de votre navigateur :
  1. Lancez le navigateur, puis accédez aux paramètres du navigateur
  2. Faites défiler vers le bas et sélectionnez "Effacer données de sauvegarde" (il peut aussi être nommé "Initialiser les données enregistrées" ou "Vider toutes les données enregistrées")
  3. Retentez l'exploit
- Essayez de changer la langue du système par une autre langue

:::

:::: details "Une erreur est survenue. Maintenez le bouton POWER enfoncé pour éteindre la console..." (écran noir avec texte)

Le fichier `arm11code.bin` est absent ou mal placé. Assurez-vous de copier les fichiers de la [dernière version de super-skaterhax](https://skater.nintendohomebrew.com/) pour votre région et version vers la racine de votre carte SD (pas à l'intérieur d'un dossier).

::: info

![](/images/screenshots/skaterhax/skater-root-layout.png)

:::



:::details Une exception est survenue ou "DLL_HEAP_INFORMATION" en appuyant sur GO! GO!

Cela indique que vous avez probablement déjà un custom firmware. Vous devriez [vérifier la présence d'un CFW](checking-for-cfw).

:::

:::details Erreur 032-1035 en essayant de voir la page web de skaterhax

Votre connexion Internet bloque l'accès à la page web de skaterhax. Si possible, essayez un point d'accès mobile. Si vous n'avez pas d'autre connexion Internet disponible, suivez [MSET9](installing-boot9strap-(mset9)) à la place.

:::

<!--@include: ./_include/troubleshooting-khc-common.md -->

## Problèmes avec SafeB9SInstaller

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Retourner à [Installation de boot9strap (super-skaterhax)](installing-boot9strap-(super-skaterhax))

:::

<!--@include: ./_include/troubleshooting-return.md -->
