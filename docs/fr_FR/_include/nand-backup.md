1. Appuyez sur (Home) pour faire apparaître le menu d’actions
2. Sélectionnez "Scripts..."
3. Sélectionnez "GM9Megascript"
4. Sélectionnez "Backup Options"
5. Sélectionnez "SysNAND Backup"
6. Appuyez sur (A) pour confirmer
   - Ce processus prendra un certain temps
   - Si vous avez une erreur, recherchez votre problème dans le [guide de dépannage](troubleshooting-finalizing-setup.html)
7. Appuyez sur (A) pour continuer
8. Appuyez sur (B) pour revenir au menu principal
9. Sélectionnez "Exit"
10. Appuyez (A) pour reverrouiller l'autorisation en écriture si vous y êtes invité
11. Naviguez vers `[S:] SYSNAND VIRTUAL`
12. Appuyez sur (A) sur `essential.exefs` pour le sélectionner
13. Sélectionnez "Copy to 0:/gm9/out"
    - Si vous voyez "Destination already exists", appuyez sur (A) sur "Overwrite file(s)"
14. Appuyez sur (A) pour continuer
15. Maintenez (R) appuyé et appuyez sur (Start) en même temps pour éteindre votre console
16. Insérez votre carte SD dans votre ordinateur
17. Copiez `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha`, et `essentiel.exefs` depuis le dossier `/gm9/out/` sur votre carte SD vers un emplacement en sûreté sur votre ordinateur
    - Copiez ces sauvegardes vers plusieurs emplacements (comme un stockage en ligne, un disque dur externe, etc.)
    - Ces sauvegardes vous sauveront d'un brick et/ou vous aideront à récupérer des fichiers de l'image de la NAND si quelque chose se passe mal plus tard
18. Supprimez `<date>_<serialnumber>_sysnand_##.bin` et `<date>_<serialnumber>_sysnand_##.bin.sha` du dossier `/gm9/out/` sur votre carte SD après l'avoir copié
    - Les autres fichiers de sauvegarde sont négligeables en taille et peuvent être conservés sur votre carte SD pour la facilité d'accès
19. Réinsérez votre carte SD dans votre console
