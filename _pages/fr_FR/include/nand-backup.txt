1. Appuyez sur (Home) pour faire apparaître le menu d’actions (action menu)
1. Sélectionnez "Scripts"
1. Sélectionnez "GM9Megascript"
1. Sélectionnez "Backup Options"
1. Sélectionnez "SysNAND Backup"
1. Appuyez sur (A) pour confirmer
    + Ce processus prendra un certain temps
    + En cas d'erreur, recherchez votre problème dans le [guide de dépannage](troubleshooting#finalizing-setup)
1. Appuyez sur (A) pour continuer
1. Appuyez sur (B) pour revenir au menu principal
1. Sélectionnez "Exit"
1. Appuyez (A) pour reverrouiller autorisations en écriture si vous êtes invité
1. Navigate to `[S:] SYSNAND VIRTUAL`
1. Press (A) on `essential.exefs` to select it
1. Sélectionnez "Copy to 0:/gm9/out"
    + If you see "Destination already exists", press (A) on "Overwrite file(s)"
1. Appuyez sur (A) pour continuer
1. Hold (R) and press (Start) at the same time to power off your console
1. Insérez votre carte SD dans votre ordinateur
1. Copy `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha`, and `essential.exefs` from the `/gm9/out/` folder on your SD card to a safe location on your computer
    + Copy these backups to multiple locations (such as online file storage, an external hard drive, etc.)
    Ces sauvegardes vous sauveront d'un brick et/ou vous aideront à récupérer des fichiers de l'image de la NAND si quelque chose se passe mal plus tard
1. Supprimez `<date>_<serialnumber>_sysnand_##.bin` et `<date>_<serialnumber>_sysnand_##.bin.sha` du dossier `/gm9/out/` de votre carte SD après l'avoir copié
    + The other backup files are negligible in size and may be kept on your SD card for ease of access
1. Réinsérez votre carte SD dans votre console
