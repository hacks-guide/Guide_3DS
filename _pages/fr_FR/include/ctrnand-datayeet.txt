This section will reset your system settings to its defaults. **Installed games and their save data will not be affected.** This is **required** to prevent known issues relating to extended memory mode and applets on some consoles.

1. Éteignez votre console
1. Press and hold (Start), and while holding (Start), power on your console. Ceci lancera GodMode9
1. Naviguez vers `[0:] SDCARD` -> `gm9`
1. Appuyez sur (X) sur le `.bin` de l'image CTRTransfer pour le supprimer
1. Appuyez sur (A) pour confirmer
1. Appuyez sur (B) plusieurs fois pour revenir au menu principal
1. Naviguez vers `[1:] SYSNAND CTRNAND` -> `data` -> `<ID0>` -> `sysdata`
    + The `<ID0>` will be a folder with a 32-character long name
1. Utilisez la croix directionnelle pour mettre en surbrillance `00010017`
1. Appuyez sur (R) + (A) pour afficher les options du dossier
1. Sélectionnez "Copy to 0:/gm9/out"
1. Appuyez sur (A) pour continuer
1. Tout en mettant en surbrillance `00010017`, appuyez sur (X) pour le supprimer
1. Appuyez sur (A) pour confirmer
1. Appuyez sur (A) pour autoriser l'écriture sur votre SysNAND, puis entrez la combinaison de touches demandée
1. Une fois le fichier supprimé, appuyez sur (A) pour continuer
1. Appuyez (A) pour reverrouiller autorisations en écriture si vous êtes invité
1. Press (Start) to reboot your console
1. Your console will load into the initial setup menu
    + Ne vous inquiétez pas, c'est normal. Vous n'avez pas perdu de données de jeu
1. Complete the initial setup menu by following the prompts on your console's screen
