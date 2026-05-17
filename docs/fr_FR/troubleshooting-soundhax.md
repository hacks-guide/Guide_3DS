---
head: [ [ 'script', { src: '/assets/js/common.js' } ], [ 'script', { src: '/assets/js/soundhax-frankenfirm-link.js' } ], [ 'script', { src: '/assets/js/link-common.js' } ] ]
---

# Dépannage (Soundhax)

Cette page offre des conseils de dépannage pour les problèmes couramment rencontrés avec la page "Installation de boot9strap (Soundhax)", qui est utilisée sur les versions du système entre 1.0.0 et 11.3.0. Si les conseils donnés sur cette page ne vous permettent pas de résoudre votre problème, nous vous invitons à rejoindre [le Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp) et à y décrire votre problème ainsi que ce que vous avez déjà essayé.

## Problèmes avec Soundhax

:::details Écran rouge/violet/rose et blanc après avoir exécuté Soundhax

Si votre console est sur la version 9.4.0, 9.5.0 ou 9.6.0 du système, vous pourriez rencontrer un bug avec une ancienne version de universal-otherapp. Téléchargez la dernière version [ici](https://github.com/TuxSH/universal-otherapp/releases/latest).

Si votre console n'est pas sur l'un de ces firmwares, cela veut probablement dire que vous avez déjà un custom firmware. Vous devriez [vérifier la présence d'un CFW](checking-for-cfw).

:::

:::details "Le logiciel a été arrêté car une erreur est survenue..." (boîte de message blanche)

Il y a un problème avec votre fichier `otherapp.bin` (il est absent, mal placé ou corrompu). Téléchargez la dernière version de [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) et placez le fichier à la racine de votre carte SD.

Vous pourriez aussi avoir le mauvais fichier Soundhax pour votre console, région et version. Vérifiez que les détails de votre console sont corrects et retéléchargez votre fichier Soundhax à partir d'[ici](http://soundhax.com), puis placez-le à la racine de votre carte SD, en remplaçant celui existant.

Si ce qui précède ne résout pas votre problème, et que vous utilisez une Old 3DS / Old 3DS XL / Old 2DS, vous pourriez rencontrer un problème concernant les mises à jour des cartouches. Jetez un œil à la version du système. Si le nombre avant la lettre est de 4 ou moins (par ex. 11.3.0-**4**U), remplacez le fichier Soundhax à la racine de votre carte SD par celui-[ci](http://soundhax.686178.xyz/frankenfirm.html?crash).

Si aucune de ces solutions ne résout votre problème, rejoignez [le Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp) pour obtenir de l'aide.

:::

:::details "Lecture impossible."

Vous avez le mauvais fichier Soundhax pour votre console, région et version. Vérifiez que les détails de votre console sont corrects et retéléchargez votre fichier Soundhax à partir d'[ici](http://soundhax.com), puis placez-le à la racine de votre carte SD, en remplaçant celui existant.

Si ce qui précède ne résout pas votre problème, et que vous utilisez une Old 3DS / Old 3DS XL / Old 2DS, vous pourriez rencontrer un problème concernant les mises à jour des cartouches. Jetez un œil à la version du système. Si le nombre avant la lettre est de 3 ou moins (par ex. 11.3.0-**0**U), remplacez le fichier Soundhax à la racine de votre carte SD par celui de [here](http://soundhax.686178.xyz/frankenfirm.html?unplayable).

Si aucune de ces solutions ne résout votre problème, rejoignez [le Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp) pour obtenir de l'aide.

:::

:::details Failed to mount the SD card!

Si cela échoue, essayez d'utiliser une autre carte SD.

:::

## Problèmes avec SafeB9SInstaller

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Retourner à [Installation de boot9strap (Soundhax)](installing-boot9strap-(soundhax))

:::

<!--@include: ./_include/troubleshooting-return.md -->
