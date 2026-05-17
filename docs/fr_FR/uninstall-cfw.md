# Désinstallation du CFW

## Lecture requise

Ceci supprimera complètement le CFW de votre console, y compris boot9strap et Luma3DS, dans le but de restaurer la console vers une non modifiée.

Tous les jeux non signés (illégitimes) seront rendus inutilisables et seront supprimés pendant ce processus. Utilisez un [gestionnaire de sauvegardes](https://github.com/FlagBrew/Checkpoint/releases/latest) pour conserver toutes les sauvegardes des jeux qui vous tiennent à cœur.

::: danger

Si vous supprimez le CFW parce que :

- Vous voulez le réinstaller
- Vous voulez changer de carte SD
- Votre carte SD a été perdue ou corrompue
- L'un de vos jeux est cassé
- L'une de vos applications système est cassée
- Votre console ne peut pas démarrer sur le menu HOME
- Votre système plante aléatoirement
- Vous voulez mettre à jour votre firmware système/installation CFW

<u>**STOP!!!**</u> Désinstaller le custom firmware est un risque inutile qui va, au mieux, faire perdre votre temps et au pire <u>**BRICKER**</u> votre console. Une meilleure idée serait de demander de l'aide sur [le Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp).

:::

::: danger

Si vous avez effectué N'IMPORTE LAQUELLE des actions qui suivent :

- [Changé la région](region-changing) de la console
- Installé un clavier personnalisé
- Installé un menu HOME personnalisé (_pas_ un thème personnalisé)
- Modifié manuellement la clé de chiffrement (`movable.sed`) de la console
- Débanni la console

alors désinstaller le CFW <u>**BRICKERA VOTRE CONSOLE**</u>. Si cela est votre cas, [restaurez une sauvegarde propre de la NAND](godmode9-usage#restoring-a-nand-backup) avant de continuer.

:::

::: warning

Ces instructions ne fonctionneront que sur les consoles avec une version de Luma3DS de 8.0 ou ultérieur. Si vous avez une ancienne version de Luma, vous devez mettre à jour votre configuration avant de suivre ces instructions. Suivez [cette page](checking-for-cfw) pour trouver vos instructions de mise à jour.

:::

## Ce dont vous avez besoin

- La dernière version de [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (le fichier `.zip` de Luma3DS)
- La dernière version de [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (le fichier `.zip` de GodMode9)
- La dernière version de [DSiWare Uninstaller](https://github.com/MechanicalDragon0687/DSiWare-Uninstaller/releases/latest)
- [safety_test.gm9](/gm9_scripts/safety_test.gm9)
- [uninstall_cfw.gm9](/gm9_scripts/uninstall_cfw.gm9)

## Instructions

### Section I - Préparatifs

1. Éteignez votre console
2. Insérez votre carte SD dans votre ordinateur
3. Copiez tout depuis le `.zip` de Luma3DS à la racine de votre carte SD
4. Copiez `GodMode9.firm` depuis l'archive de GodMode9 `.zip vers le dossier `/luma/payloads/\` sur votre carte SD
5. Copiez le dossier `gm9` depuis l'archive de GodMode9 `.zip` vers la racine de votre carte SD
6. Copiez `DSiWareUninstaller.3dsx` vers le dossier `/3ds/` sur votre carte SD
7. Copiez `safety_test.gm9` et `uninstall_cfw.gm9` vers le dossier `/gm9/scripts/` sur votre carte SD
8. Réinsérez votre carte SD dans votre console

### Section II - Tests du mode DS

Le but de cette section est de vérifier si les applications intégrées en mode DS continueront de fonctionner une fois le CFW désinstallé. Si vous sautez cette section, le mode DS ou ses fonctions peuvent être inaccessibles jusqu'à ce que le CFW soit réinstallé.

#### Test des Paramètres de connexion DS

1. Allumez votre console
2. Lancez les Paramètres de la console
3. Naviguez vers `Paramètres Internet` -> `Connexions Nintendo DS`, puis sélectionnez "OK
4. Vous devriez démarrer dans le menu de configuration des Connexions Nintendo DS
   - Si votre console affiche la version japonaise de Flipnote Studio, un écran noir, ou un message d'erreur, le test a échoué
5. Éteignez votre console

#### Test du Mode Téléchargement DS

1. Allumez votre console
2. Lancez l'application Mode Téléchargement (![](/images/download-play-icon.png){height="24px" width="24px"})
3. Sélectionnez "Nintendo DS"
4. Si votre console charge le menu "Télécharger un logiciel via le téléchargement DS", le test a réussi
   - Si votre console affiche la version japonaise de Flipnote Studio, un écran noir, ou un message d'erreur, le test a échoué
5. Éteignez votre console

::: warning

Si l'un de ces tests a échoué, le mode DS, le Téléchargement DS, et/ou les Paramètres de connexions Nintendo DS peuvent être inaccessibles une fois le CFW désinstallé ! Vous devriez [réparer le mode DS](troubleshooting-post-install) avant de continuer.

:::

### Section III - Test de sécurité

L'objectif de cette section est de vérifier que la console démarrera et que les fonctions systèmes critiques, comme les Paramètres de la console et le clavier fonctionneront une fois que le CFW sera désinstallé. **Si vous sautez cette section, vous pouvez BRICKER votre console !**

1. Appuyez sur et maintenez (Start), et tout en maintenant (Start), allumez votre console. Ceci lancera GodMode9
2. Si vous êtes invité à créer une sauvegarde des fichiers essentiels, appuyez sur (A) pour le faire, puis appuyez sur (A) pour continuer une fois qu'elle est terminée
3. Si vous êtes invité à corriger la date et l’heure RTC, appuyez sur (A) pour le faire, puis réglez la date et l’heure, puis appuyez sur (A) pour continuer
   - Notez que, si vous avez dû corriger la date et l'heure RTC, vous devrez corriger l'heure dans les Paramètres de la console aussi après ce guide
4. Appuyez sur (Home) pour faire apparaître le menu d’actions
5. Sélectionnez "Scripts..."
6. Sélectionnez "safety_test"
7. Lisez le texte à l'écran et appuyez sur (A) pour continuer
8. Votre console devrait démarrer dans le menu HOME 3DS habituel (la présence d'un thème personnalisé n'a aucune importance). Si c'est le cas, suivez ces instructions
   - Si votre console ne démarre pas dans le menu HOME habituel de la 3DS (écran noir, écran d'erreur, etc.), la désinstallation du CFW **BRICKERA VOTRE CONSOLE !**
9. Lancez les Paramètres de la console
   - Si la console plante à ce stade, le test a échoué
10. Sélectionnez "Autres paramètres"
11. Sélectionnez "Profil"
12. Sélectionnez "Pseudo"
13. Si vous êtes en mesure de saisir un nouveau pseudo, le test a réussi
    - Si le clavier n'apparaît pas, l'écran se fige, ou la console plante, le test a échoué
14. Éteignez votre console

::: danger

Si votre console ne démarre PAS dans le menu HOME habituel de la 3DS, ou si les Paramètres de la console et/ou votre clavier sont inaccessibles, **ARRÊTEZ de suivre ces instructions** ! Rejoignez [le Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp) et demandez (en anglais) que quelqu'un vous aide.

:::

### Section IV - Sauvegarde de la NAND

1. Appuyez sur et maintenez (Start), et tout en maintenant (Start), allumez votre console. Ceci lancera GodMode9
2. Appuyez sur (Home) pour faire apparaître le menu d’actions
3. Sélectionnez "Scripts..."
4. Sélectionnez "GM9Megascript"
5. Sélectionnez "Backup Options"
6. Sélectionnez "SysNAND Backup"
7. Appuyez sur (A) pour confirmer
   - Ce processus prendra un certain temps
   - Si vous avez une erreur, assurez-vous d'avoir au moins 1,3 Go d'espace libre sur votre carte SD
8. Appuyez sur (B) pour revenir au menu principal
9. Sélectionnez “Exit”
10. Appuyez sur (Home) pour faire apparaître le menu d’actions
11. Sélectionnez "Poweroff system" pour éteindre votre console

### Section V - Suppression du contenu illégitime

::: warning

Cette section supprimera le contenu illégitime, comme les homebrew et les cartouches extraites. Si vous avez des données de sauvegarde qui vous intéressent, sauvegardez-les avec un gestionnaire de sauvegardes avant de continuer !

:::

1. Allumez votre console
2. Lancez les Paramètres de la console
3. Naviguez dans Gestion des données > Nintendo 3DS > Logiciels
4. Dans cette liste de logiciels, supprimez tout contenu non-Nintendo que vous avez installé lors de l'utilisation du CFW
   - Cela inclut des applications systèmes communes telles que FBI, Anemone3DS, Luma Updater, Homebrew Launcher, Checkpoint et d'autres, ainsi que tous les jeux que vous n'avez _pas_ installé depuis l'eShop
5. Naviguez vers `Gestion des données` -> `DSiWare`
6. Dans cette liste de logiciels, supprimez tout contenu non-Nintendo que vous avez installé lors de l'utilisation du CFW
   - Cela inclut des logiciels tels que TWiLightMenu++, ainsi que tous les jeux et titres que vous n'avez _pas_ installé depuis l'eShop
   - Ne pas supprimer tous les logiciels CFW des sections 3DS et DSiWare avant de désinstaller le CFW peut empêcher ou désactiver l'accès au menu de Gestion des données après la désinstallation du CFW, ce qui rendra difficile la réinstallation future d'un CFW
7. Quittez l'application Paramètres de la console
8. Lancez l'application Mode téléchargement (![](/images/download-play-icon.png){height="24px" width="24px"})
9. Attendez jusqu'à ce que vous voyiez les deux boutons
10. Appuyez simultanément sur (L) + (Bas sur la croix directionnelle) + (Select) pour ouvrir le menu Rosalina
11. Sélectionnez "Miscellaneous options"
12. Sélectionnez "Switch the hb. title to the current app."
13. Appuyez sur (B) pour continuer
14. Appuyez sur (B) pour revenir au menu principal de Rosalina
15. Appuyez sur (B) pour quitter le menu Rosalina
16. Appuyez sur (Home), puis fermez Mode téléchargement
17. Lancez l'application Mode téléchargement (![](/images/download-play-icon.png){height="24px" width="24px"})
18. Votre console devrait charger le Homebrew Launcher
19. Lancez DSiWare Uninstaller depuis la liste de homebrew
20. Suivez les instructions et autorisez le programme à désinstaller
21. Une fois le processus réussi, quittez le Homebrew Launcher et éteignez votre console

### Section VI - Formatage de la console

Cette section vous assurera que tous les tickets illégitimes sont supprimés, ce qui permettra à l'eShop de fonctionner normalement. Cela supprimera tout le contenu de la 3DS et vous déconnectera de votre identifiant Nintendo Network (NNID). Gardez à l'esprit qu'une nouvelle clé de chiffrement de votre console sera générée, ce qui signifie que toutes les anciennes données deviendront inutilisables, même si vous avez une sauvegarde du contenu de votre carte SD.

1. Allumez votre console
2. Lancez les Paramètres de la console
3. Naviguez vers Autres paramètres -> Page suivante (jusqu'à la dernière page) -> Formater la console
4. Suivez les instructions pour formater votre 3DS

### Section VII - Exécution du script de désinstallation

::: warning

C'est votre dernière occasion de vérifier que toutes les étapes de sécurité ci-dessus ont été suivies ! Veuillez vous assurer que vous avez suivi toutes les sections sur cette page, **en particulier** `Section III - Test de sécurité`, avant de continuer.

:::

::: danger

Si vous supprimez le CFW parce que :

- Vous voulez le réinstaller
- Vous voulez changer de carte SD
- Votre carte SD a été perdue ou corrompue
- L'un de vos jeux est cassé
- L'une de vos applications système est cassée
- Votre console ne peut pas démarrer vers le menu HOME
- Votre système plante aléatoirement
- Vous voulez mettre à jour votre firmware système/installation CFW

<u>**STOP!!!**</u> Désinstaller le custom firmware est un risque inutile qui va, au mieux, faire perdre votre temps et au pire <u>**BRICKER**</u> votre console. Une meilleure idée serait de demander de l'aide sur [le Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp).

:::

1. Appuyez sur et maintenez (Start), et tout en maintenant (Start), allumez votre console. Ceci lancera GodMode9
   - Si vous voyez plutôt le chainloader de Luma3DS, utilisez la croix directionnelle et le bouton (A) pour sélectionner GodMode9
2. Appuyez sur (Home) pour faire apparaître le menu d’actions
3. Sélectionnez "Scripts..."
4. Sélectionnez "uninstall_cfw"
5. Lorsque vous y êtes invité, appuyez sur (A)
6. Appuyez sur (A) pour continuer
7. Appuyez sur (A) pour autoriser l'écriture sur votre SysNAND (lvl3), puis entrez la combinaison de boutons donnée
8. Appuyez sur (A) pour continuer
9. Appuyez (A) pour reverrouiller l'autorisation en écriture si vous y êtes invité
10. Appuyez sur (Start) pour redémarrer votre console

___

::: tip

Tous les custom firmwares ont été supprimés de votre console.

:::

::: info

Vous pouvez maintenant supprimer tous les fichiers et dossiers supplémentaires de la racine de votre carte SD qui ne sont _pas_ les dossiers "Nintendo 3DS", "DCIM" ou "private".

:::
