Cette section réinitialisera les paramètres de votre console à leurs valeurs par défaut. **Les jeux installés et leurs données de sauvegarde ne seront pas affectés.**

::: danger

NE PAS sauter cette section ! Ceci est **nécessaire** pour éviter les problèmes connus liés au mode mémoire étendue et aux applets sur certaines consoles.

:::

::: warning

Cette opération réinitialisera vos données de Mii. Si vous souhaitez sauvegarder des Miis que vous avez créés, soit [générez un code QR](https://fr-americas-support.nintendo.com/app/answers/detail/a_id/24208/~/comment-g%C3%A9n%C3%A9rer-un-code%C2%A0qrmc-pour-un-mii) pour chaque Mii que vous voulez sauvegarder, soit faites une sauvegarde de `SYSNAND CTRNAND:/data/<ID0>/extdata/00048000/f000000b` avant de suivre ces instructions. Vous pouvez restaurer ce fichier vers le même répertoire _après_ que la console ait fini la configuration initiale.

:::

1. Éteignez votre console
2. Appuyez sur et maintenez (Start), et tout en maintenant (Start), allumez votre console. Ceci lancera GodMode9
3. Naviguez vers `[1:] SYSNAND CTRNAND` -> `data` -> `<ID0>` -> `sysdata`
   - Le dossier `<ID0>` sera un dossier avec un nom de 32 caractères de long
4. Utilisez la croix directionnelle pour mettre en surbrillance `00010017`
5. Appuyez sur (R) + (A) pour afficher les options du dossier
6. Sélectionnez "Copy to 0:/gm9/out"
7. Appuyez sur (A) pour continuer
8. Tout en mettant en surbrillance `00010017`, appuyez sur (X) pour le supprimer
9. Appuyez sur (A) pour confirmer
10. Appuyez sur (A) pour autoriser l'écriture sur votre SysNAND (lvl1), puis entrez la combinaison de boutons donnée
11. Une fois le fichier effacé, appuyez sur (A) pour continuer
12. Appuyez sur (A) pour reverrouiller l'autorisation en écriture si vous y êtes invité
13. Appuyez sur (Start) pour redémarrer votre console
14. Votre console démarrera sur le menu de configuration initial
    - Ce comportement est attendu. Vous n'avez perdu aucune de vos données de jeu
15. Complétez la configuration initiale en suivant les instructions à l'écran de votre console
