# Dépannage (Finalisation de l'installation)

Cette page offre des conseils de dépannage pour les problèmes rencontrés couramment avec la page "Finalisation de l'installation". Si les conseils donnés sur cette page ne vous permettent pas de résoudre votre problème, nous vous invitons à rejoindre [le Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp) et à décrire votre problème ainsi que ce que vous avez déjà essayé.

## Problèmes avec la Finalisation de l'installation

:::details Impossible de mettre à jour la console

Les étapes ci-dessous peuvent être tentées dans n'importe quel ordre, mais sont listées de la plus facile à la plus difficile à réaliser.

1. Si vous utilisez Pretendo, revenez à Nintendo avec Nimbus et réessayez
2. Réglez le paramètre "Obtention automatique d'un DNS" sur "Oui"
3. Rapprochez-vous de votre point d'accès Wi-Fi
4. Effectuez une mise à jour depuis le mode sans échec (Safe Mode) en éteignant la console puis en maintenant (L) + (R) + (Haut sur la croix directionnelle) + (A) pendant le démarrage de la console et suivez les instructions à l'écran
5. Supprimez votre connexion Wi-Fi, puis connectez-vous à nouveau à votre point d'accès Wi-Fi
6. Redémarrez votre point d'accès Wi-Fi
7. Connectez-vous à un point d'accès Wi-Fi différent, comme un point d'accès mobile
8. Les serveurs de Nintendo sont peut-être en panne ; Réessayez plus tard
9. Si vous avez toujours une erreur, [suivez CTRTransfer](ctrtransfer), puis réessayez
10. Pour plus d'assistance (en anglais), rejoignez [le Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp)

:::

:::details Error #22: finalize.romfs is invalid

Le fichier “finalize.romfs” est corrompu ou illisible. [Retéléchargez-le](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) et copiez-le vers la racine de la carte SD, en remplaçant toute copie existante, puis réessayez.

:::

:::details Information #23: finalize.romfs in wrong location

Le fichier `finalize.romfs` a été placé dans le mauvais emplacement au lieu de la racine de la carte SD. Le script tentera de résoudre ce problème, mais vous aurez besoin de votre permission pour le faire. Appuyez sur (A) sur les instructions suivantes pour continuer.

:::

:::details Error #24: SD is write-protected

Assurez-vous que votre carte SD n'est pas verrouillée(/images/sdlock.png). Si la carte SD n'est pas verrouillée et que vous continuez à avoir cette erreur, rejoignez [le Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp) pour obtenir de l'aide.

:::

:::details Error #02: Missing essential.exefs

Vous avez dit "Non" a "Make essential files backup?" dans GodMode9. Eteignez votre console, rallumez-la en maintenant le bouton (Start) pour entrer dans GodMode9, dites "oui" a l'invite, puis réessayez.

:::

:::details Error #04: No space

Vous avez besoin d'au moins 1,3 Go d'espace libre pour effectuer la sauvegarde de la NAND, qui fait partie du script. Si vous n'avez pas assez d'espace, suivez ces étapes :

1. Éteignez votre console
2. Insérez votre carte SD dans votre ordinateur
3. Copiez le dossier `Nintendo 3DS` depuis la racine de votre carte SD vers votre ordinateur
4. Supprimez le dossier Nintendo 3DS de votre carte SD
5. Réinsérez votre carte SD dans votre console
6. Appuyez sur et maintenez (Start), et tout en maintenant (Start), allumez votre console. Ceci lancera GodMode9
7. Appuyez sur le bouton (Home)
8. Sélectionnez "Scripts..."
9. Sélectionnez "finalize"
10. Appuyez sur (A) pour sauvegarder la NAND
    - Cela peut prendre environ 15 minutes
11. Appuyez de nouveau sur (A)
    - La console devrait automatiquement s'éteindre
12. Insérez votre carte SD dans votre ordinateur
13. Copiez les fichiers dans `/gm9/backups/` dans votre carte SD vers un endroit en sûreté sur votre ordinateur
14. Supprimez les fichiers `<date>_<serialnumber>_sysnand_##.bin` et `<date>_<serialnumber>_sysnand_##.bin.sha` de votre carte SD
15. Copiez le dossier `Nintendo 3DS` de votre ordinateur vers la racine de votre carte SD
16. Supprimez le dossier `Nintendo 3DS` de votre ordinateur

Maintenant que vous avez votre sauvegarde de la NAND dans un endroit sûr:

1. Réinsérez votre carte SD dans votre console
2. Appuyez sur et maintenez (Start), et tout en maintenant (Start), allumez votre console. Ceci lancera GodMode9
3. Appuyez sur le bouton (Home)
4. Sélectionnez "Scripts..."
5. Sélectionnez "finalize"
6. Continuez le script normalement
   - La sauvegarde de la NAND sera automatiquement ignorée

:::

:::details Information #05: No title database

Appuyez sur (A) pour importer une base de données de titre, déverrouiller l'écriture de la SysNAND en entrant les boutons à l'écran, puis continuez le script normalement.

:::

:::details Error #06 ou "Error: Could not open directory" lors d'une tentative de sauvegarde de la NAND

Assurez-vous d'avoir au moins 1,3 Go d'espace disponible sur votre carte SD. Si vous n'avez pas assez d'espace, suivez ces étapes :

1. Éteignez votre console
2. Insérez votre carte SD dans votre ordinateur
3. Copiez le dossier `Nintendo 3DS` depuis la racine de votre carte SD vers votre ordinateur
4. Supprimez le dossier Nintendo 3DS de votre carte SD
5. Réinsérez votre carte SD dans votre console
6. Appuyez sur et maintenez (Start), et tout en maintenant (Start), allumez votre console. Ceci lancera GodMode9
7. Effectuez une [sauvegarde de la NAND](godmode9-usage#creating-a-nand-backup)
8. Copiez les fichiers depuis le dossier `gm9/out` de votre carte SD vers un endroit sûr sur votre ordinateur
9. Supprimez les fichiers `<date>_<serialnumber>_sysnand_##.bin` et `<date>_<serialnumber>_sysnand_##.bin.sha` de votre carte SD, en gardant essential.exefs dans `/gm9/out/`
10. Copiez le dossier `Nintendo 3DS` de votre ordinateur vers la racine de votre carte SD
11. Supprimez le dossier `Nintendo 3DS` de votre ordinateur

Si vous avez assez d'espace sur votre carte SD, votre carte SD pourrait être corrompue ou défectueuse. Vérifiez si votre carte SD comporte des erreurs en suivant le guide suivant le système d'exploitation de votre ordinateur : [Windows](h2testw-(windows)), [Linux](f3-(linux)), [macOS](f3xswift-(mac)).

:::

:::details Error #12: Copy (file).db fail

Assurez-vous que votre carte SD n'est pas verrouillée(/images/sdlock.png). Si la carte SD n'est pas verrouillée et que vous continuez à avoir cette erreur, rejoignez [le Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp) pour obtenir de l'aide.

:::

:::details Information #17: Duplicate NAND backup

Le script a détecté que le dossier Nintendo 3DS est manquant ET que vous avez déjà fait une sauvegarde de la NAND auparavant. Si vous avez l'intention d'installer des homebrew, vous devriez faire ce qui suit :

1. Appuyez sur (B) pour annuler la création d'une autre sauvegarde de la NAND
2. Maintenez (R) appuyé et appuyez sur (Start) en même temps pour éteindre votre console
3. Copiez le contenu de `/gm9/backups/` vers un endroit en sûreté sur votre ordinateur
4. Supprimez `/gm9/backups/` de votre carte SD
5. Si vous avez déplacé votre dossier Nintendo 3DS de votre carte SD pour y arriver, copiez-le vers votre carte SD
   - Si vous n'avez pas de dossier Nintendo 3DS, démarrez dans le menu HOME au moins une fois avec la carte SD insérée pour le générer automatiquement
6. Appuyez sur et maintenez (Start), et tout en maintenant (Start), allumez votre console. Ceci lancera GodMode9
7. Appuyez sur (Home) pour faire apparaître le menu d’actions
8. Sélectionnez "Scripts..."
9. Sélectionnez "finalize"
10. Suivez les instructions du script, en répondant aux questions qui vous sont posées

:::

:::details Error #18a/18b: MSET9 detected

Vous n'avez pas supprimé MSET9 sur la page précédente. Le script tentera de supprimer MSET9 pour vous ; suivez les instructions données par le script.

:::

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Retourner à [Finalisation de l'installation](finalizing-setup)

:::

<!--@include: ./_include/troubleshooting-return.md -->
