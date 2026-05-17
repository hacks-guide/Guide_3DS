# Dépannage (SSLoth-Browser)

Cette page offre des conseils de dépannage pour les problèmes couramment rencontrés avec la page "Installation de boot9strap (SSLoth-Browser)", qui est utilisée sur les versions du système entre 11.4.0 et 11.13.0. Si les conseils donnés sur cette page ne vous permettent pas de résoudre votre problème, nous vous invitons à rejoindre [le Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp) et à y décrire votre problème ainsi que ce que vous avez déjà essayé.

::: warning

Ces instructions ne sont valides que pour la page "Installation de boot9strap (SSLoth-Browser)". Si vous utilisez une **New 3DS** en version **11.15.0 à 11.17.0**, vous devriez suivre [les instructions de dépannage pour l'installation de boot9strap (super-skaterhax)](troubleshooting-super-skaterhax) à la place.

:::

## SSLoth-Browser

:::details Écran rouge/violet/rose et blanc après avoir exécuté Browserhax

Cela indique que vous avez probablement déjà un custom firmware. Vous devriez [vérifier la présence d'un CFW](checking-for-cfw).

:::

:::details Écran vert après avoir exécuté Browserhax

Les exploits basés sur le navigateur (comme celui-ci) sont souvent instables et plantent fréquemment, mais ils peuvent parfois être corrigés en effectuant les étapes suivantes.

1. Lancez le navigateur, puis accédez aux paramètres du navigateur
2. Faites défiler vers le bas et sélectionnez "Effacer données de sauvegarde" (il peut aussi être nommé "Initialiser les données enregistrées" ou "Vider toutes les données enregistrées")
3. Retentez l'exploit

:::

:::details "Une erreur est survenue. Maintenez le bouton POWER enfoncé pour éteindre la console..." (écran noir avec texte)

Le fichier `arm11code.bin` est absent ou mal placé. Téléchargez la dernière version de [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), placez `otherapp.bin` à la racine de votre carte SD et renommez-le en `arm11code.bin`. N'ajoutez pas l'extension `.bin` si vous ne la voyez pas déjà.

:::

:::details "Le logiciel a été arrêté car une erreur est survenue..." (boîte de message blanche)

Il y a peut-être un problème avec votre fichier `arm11code.bin`. Téléchargez la dernière version de [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), placez `otherapp.bin` à la racine de votre carte SD et renommez-le en `arm11code.bin`. N'ajoutez pas l'extension `.bin` si vous ne la voyez pas déjà.

Vous pouvez également essayer de réinitialiser les données de votre navigateur :

1. Lancez le navigateur, puis accédez aux paramètres du navigateur
2. Faites défiler vers le bas et sélectionnez "Effacer données de sauvegarde" (il peut aussi être nommé "Initialiser les données enregistrées" ou "Vider toutes les données enregistrées")
3. Retentez l'exploit

:::

:::details L'ouverture du QR code ou de l'URL de browserhax plante

Les exploits basés sur le navigateur (comme celui-ci) sont souvent instables et plantent fréquemment, mais ils peuvent parfois être corrigés en effectuant les étapes suivantes.

1. Lancez le navigateur, puis accédez aux paramètres du navigateur
2. Faites défiler vers le bas et sélectionnez "Effacer données de sauvegarde" (il peut aussi être nommé "Initialiser les données enregistrées" ou "Vider toutes les données enregistrées")
3. Retentez l'exploit

:::

:::details Demande de mise à jour de la console lors de l'ouverture du navigateur

Le proxy SSLoth a été mal configuré. Refaites la section SSLoth de la page.

:::

:::details Erreur 032-0420 lors de l'ouverture du navigateur

Suivez ces étapes dans l'ordre :

1. Lancez les Paramètres de la console
2. Naviguez vers `Paramètres Internet` -> `Paramètres de connexion`
3. Cliquez sur votre emplacement de connexion réseau et naviguez vers `Modifier` -> `Page suivante (flèche à droite)` -> \`Serveur proxy"
4. Réglez "Serveur proxy" sur "Non"
5. Cliquez sur OK, puis sur Sauvegarder
6. Lorsque vous y êtes invité, cliquez sur "Tester" pour effectuer le test de connexion
   - Le test devrait réussir
7. Cliquez sur "OK" pour continuer
8. Appuyez deux fois sur « Retour », puis « Fermer » pour retourner au menu HOME
9. Ouvrez le Navigateur Internet une fois
10. Si vous êtes invité à mettre à jour votre console, appuyez sur OK
    - Cela ne mettra pas à jour la console
11. Recommencez à partir de la [Section II](installing-boot9strap-(ssloth-browser).html#section-ii---ssloth)

:::

:::details Figé sur "Doing agbhax..."

Il y a peut-être un problème avec votre fichier `arm11code.bin`. Retéléchargez la dernière version de [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), placez le fichier à la racine de votre carte SD et renommez-le en `arm11code.bin`. N'ajoutez pas l'extension `.bin` si vous ne la voyez pas déjà.

:::

:::details Failed to mount the SD card!

Sauvegardez vos données et reformatez votre carte SD en FAT32 avec l'outil recommandé selon votre système d'exploitation ([Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux))). MiniTool Partition Wizard et l'outil de formatage d'HP (HPUSBDisk) sont connus pour causer des problèmes avec les cartes SD des 3DS.

Si cela échoue, essayez d'utiliser une autre carte SD.

:::

<!--@include: ./_include/troubleshooting-khc-common.md -->

## Problèmes avec SafeB9SInstaller

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Retourner à [Installation de boot9strap (SSLoth-Browser)](installing-boot9strap-(ssloth-browser))

:::

<!--@include: ./_include/troubleshooting-return.md -->
