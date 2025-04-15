This section will reset your system settings to its defaults. **Installed games and their save data will not be affected.** This is **required** to prevent known issues relating to extended memory mode and applets on some consoles.

::: warning

This process will reset your Mii data. If you wish to save any Miis that you have created, either [generate a QR code](https://en-americas-support.nintendo.com/app/answers/detail/a_id/298/~/how-to-generate-a-qr-code%E2%84%A2-for-a-mii) for each Mii that you want to save, or make a backup of `SYSNAND CTRNAND:/data/<ID0>/extdata/00048000/f000000b` before following these instructions. You can restore this file to the same directory _after_ your console has gone through initial setup.

:::

1. Power off your console
2. Press and hold (Start), and while holding (Start), power on your console. Ceci lancera GodMode9
3. Appuyez sur (B) plusieurs fois pour revenir au menu principal
4. Naviguez vers `[1:] SYSNAND CTRNAND` -> `data` -> `<ID0>` -> `sysdata`
    - The `<ID0>` will be a folder with a 32-character long name
5. Utilisez la croix directionnelle pour mettre en surbrillance `00010017`
6. Appuyez sur (R) + (A) pour afficher les options du dossier
7. Select "Copy to 0:/gm9/out"
8. Press (A) to continue
9. Tout en mettant en surbrillance `00010017`, appuyez sur (X) pour le supprimer
10. Press (A) to confirm
11. Press (A) to unlock SysNAND (lvl1) writing, then input the key combo given
12. Une fois le fichier supprimé, appuyez sur (A) pour continuer
13. Press (A) to relock write permissions if prompted
14. Press (Start) to reboot your console
15. Your console will load into the initial setup menu
    - This is expected behaviour. Vous n'avez pas perdu de données de jeu
16. Complete the initial setup menu by following the prompts on your console's screen
