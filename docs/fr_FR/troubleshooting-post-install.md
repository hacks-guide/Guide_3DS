# Dépannage (Post-installation)

Cette page offre des conseils de dépannage pour les problèmes rencontrés couramment après avoir installé le custom firmware. Si les conseils donnés sur cette page ne vous permettent pas de résoudre votre problème, nous vous invitons à rejoindre [le Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp) et à y décrire votre problème ainsi que ce que vous avez déjà essayé.

## Problèmes de démarrage

::: info

Les étapes détaillées ici supposent généralement que votre console dispose d'un custom firmware moderne (boot9strap + Luma3DS 8.0 ou supérieur). Si votre console exécute une ancienne installation homebrew (par exemple, quelque chose basé sur arm9loaderhax ou menuhax), vous devriez mettre à jour votre configuration avant d'essayer ces instructions.

:::

### Indicateurs lumineux d'alimentation/de notification

:::details Ma console s'éteint lorsque j'essaie de l'allumer et/ou la DEL de notification affiche une couleur au démarrage

Il y a un problème avec votre fichier `boot.firm`. Si vous utilisez [boot9strap 1.4](https://github.com/SciresM/boot9strap/releases/tag/1.4), votre DEL de notification pourrait briller d'une certaine couleur. Cette couleur est utilisée pour diagnostiquer des problèmes concernant votre fichier `boot.firm` sur la carte SD ou la mémoire interne. Sur des versions plus anciennes de boot9strap, la lumière bleue s'éteindra presque immédiatement quand vous essaierez d'allumer votre console.

Si la DEL de notification brille:

- **Blanc** : Votre 3DS n'a pas pu trouver le fichier `boot.firm` sur votre carte SD ou sur la mémoire interne.
- **Magenta** : Votre 3DS n'a pas pu trouver le fichier `boot.firm` sur votre carte SD. Elle a pu trouver le fichier `boot.firm` sur la mémoire interne, mais le fichier est corrompu.
- **Rouge** : Votre 3DS a trouvé le fichier `boot.firm` sur votre carte SD et sur la mémoire interne, mais les deux fichiers sont corrompus.

Vous pouvez obtenir un nouveau fichier `boot.firm` en téléchargeant la [dernière version de Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest), extrayez l'archive et placez le fichier `boot.firm` à la racine de votre carte SD. Si votre fichier `boot.firm` est constamment détecté comme corrompu, vous pouvez vérifier si votre carte SD comporte des erreurs ([Windows](h2testw-(windows)), [Linux](f3-(linux)), ou [macOS](f3xswift-(mac))). Notez également que la 3DS a tendance à avoir des problèmes avec les fichiers extraits à l'aide de WinRAR.

Si vous entendez un "bruit de claquement", éventuellement accompagné d'un rétroéclairage allumé pendant une fraction de seconde, il y a un problème matériel avec votre appareil (tel qu'un câble de rétroéclairage déconnecté). Vous pourrez peut-être faire démarrer votre console en la tenant à certains angles.

:::

:::details Ma console est bloquée sur un écran noir avec la lumière d'alimentation allumée en bleu fixe

Les étapes ci-dessous peuvent être tentées dans n'importe quel ordre, mais sont répertoriées de la moins longue à la plus longue.

1. Éteignez votre console, retirez la carte SD, réinsérez-la, puis allumez votre console.
2. Éteignez votre console, éjectez la carte de jeu si elle est insérée, allumez votre console, puis attendez jusqu'à dix minutes. Si votre console démarre dans les dix minutes, le problème a été résolu et il est peu probable qu'il se reproduise
3. Renommez le dossier `Nintendo 3DS` sur votre carte SD en `Nintendo 3DS_BACKUP`, puis essayez de démarrer. Si votre console démarre normalement, il y a un problème dans votre dossier `Nintendo 3DS`. Essayez d'effacer les données "extdata" du menu HOME :
   - Naviguez vers `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/`
   - Supprimez le dossier correspondant à la région de votre 3DS :
     - **Région EUR** : `00000098`
     - **Région JPN** : `00000082`
     - **Région USA** : `0000008f`
     - **Région CHN** : `000000A1`
     - **Région KOR** : `000000A9`
     - **Région TWN** : `000000B1`
4. Essayez de démarrer en mode de récupération et de mettre à jour votre console :
   - Éteignez votre console
   - Maintenez (Gâchette Gauche) + (Gâchette Droite) + (Haut sur la croix directionnelle) + (A)
   - Allumez votre console
   - Si vous avez réussi, la console démarrera sur un écran de "Mise à jour"
5. Suivez le guide [CTRTransfer](ctrtransfer)
6. Pour plus d'assistance, demandez de l'aide sur [le Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp)

:::

### Message d'erreur au démarrage

:::details "An error has occurred: Failed to apply 1 FIRM patch(es)" ou "An exception has occurred -- Current process: pm"

Votre version de Luma3DS est obsolète. Téléchargez la dernière version de [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) et placez le fichier `boot.firm` à la racine de votre carte SD, en remplaçant tout fichier existant. Assurez-vous d'extraire le fichier ZIP avec un outil autre que WinRAR, car il est connu pour causer des problèmes avec les fichiers liés à 3DS.

:::

:::details "Unable to mount CTRNAND or load the CTRNAND FIRM. Please use an external one."

Plusieurs raisons peuvent expliquer pourquoi cela se produit. Dans tous les cas, cette erreur peut généralement être corrigée en suivant le guide [CTRTransfer](ctrtransfer).

:::

:::details "Une erreur est survenue. Maintenez le bouton POWER enfoncé pour éteindre la console..."

Les gestionnaires d'exceptions ARM11 sont désactivés ou le custom firmware n'est pas installé. Essayez d'activer les gestionnaires d'exception ARM11 :

- Éteignez votre console
- Maintenez (Select)
- Allumez votre console, toujours en maintenant (Select)
- Si la case "Disable ARM11 exception handlers" est cochée, décochez-la

:::

:::details Le menu HOME ne contient pas les applications installées

Cela peut être causé par diverses raisons, mais probablement parce que votre carte SD n'est pas lue par le système.
Vous pouvez vérifier si votre carte SD est lue en maintenant SELECT au démarrage et en vérifiant le texte jaune sur l'écran du bas ; s'il dit « Booted from CTRNAND via B9S », alors votre console démarre à partir de la mémoire interne et non à partir de la carte SD.
Si c'est le cas, essayez les étapes ci-dessous, qui sont listées du plus simple au plus difficile :

1. Éteignez votre console, retirez la carte SD, réinsérez-la, puis allumez votre console
2. Éteignez votre console, retirez la carte SD, insérez-la dans votre PC, téléchargez la dernière version de [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest), extrayez le fichier `boot.firm` de l'archive `Luma3DS.zip` et placez-le à la racine de votre carte SD (en remplaçant n'importe quel fichier existant)
3. Éteignez votre console, retirez la carte SD, insérez-la dans votre PC et reformatez votre carte SD en suivant le guide correspondant au système d'exploitation de votre ordinateur : [Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux)) _(cela effacera les données de votre carte SD)_
4. Vérifiez si votre carte SD comporte des erreurs en suivant le guide suivant le système d'exploitation de votre ordinateur : [Windows](h2testw-(windows)), [Linux](f3-(linux)), [macOS](f3xswift-(mac)). Si votre carte SD est marquée comme défectueuse, vous devrez remplacer votre carte SD
5. Il est possible que votre port carte SD soit cassé. Rejoignez [le Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp) pour obtenir une aide approfondie

:::

:::details Écran bleu "BOOTROM ERROR"

Votre console est probablement brickée matériellement. Vous devrez acheter un linker ntrboot pour réinstaller boot9strap afin de tenter de réparer votre console. Cela peut également indiquer un problème matériel qui ne peut pas être résolu. Dans tous les cas, rejoignez [le Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp) pour obtenir de l'aide.

- Il est également possible que quelqu'un ait défini un écran de démarrage qui ressemble juste à un brick. Essayez de laisser votre console allumée, en attente sur l'écran bleu, pendant cinq minutes.

:::

:::details Une autre erreur

Veuillez prendre une photo de l'erreur et rejoignez [le Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp) pour obtenir de l'aide.

:::

## Problèmes logiciels sur les consoles avec un custom firmware

:::details La fonctionnalité DSi / DS est cassée ou a été remplacée par Flipnote Studio

1. Téléchargez la dernière version de [TWLFix-CFW](https://github.com/MechanicalDragon0687/TWLFix-CFW/releases/latest) (le fichier `.3dsx`)
2. Éteignez votre console
3. Créez un dossier nommé `3ds` à la racine de votre carte SD si celui-ci n'existe pas
4. Copiez `TWLFix-CFW.3dsx` vers le dossier `/3ds/` sur votre carte SD
5. Réinsérez votre carte SD dans votre console
6. Ouvrez le Homebrew Launcher
7. Lancez TWLFix-CFW que vous trouverez dans la liste de homebrew
8. Appuyez sur (A) pour désinstaller les titres TWL corrompus
9. Appuyez sur (Start) pour redémarrer la console
10. Mettez à jour votre console en vous rendant dans les Paramètres de la console, puis "Autres paramètres", puis tout à droite sur l'option "Mise à jour"
    - Le processus de mise à jour verra que les titres TWL essentiels ont été désinstallés, et va les retélécharger et les réinstaller
11. Une fois la mise à jour terminée, appuyez sur "OK" pour redémarrer la console

:::

:::details La fonctionnalité Console Virtuelle GBA et/ou mode sans échec est cassée

Votre console exécute Luma3DS 6.6 ou une version antérieure, probablement via arm9loaderhax. Vous devriez suivre [A9LH vers B9S](a9lh-to-b9s) pour mettre à jour votre console vers un environnement de custom firmware moderne.

:::

:::details Les jeux en mode mémoire étendue (Pokémon Soleil/Lune, Smash, etc.) ne fonctionnent pas

Cela peut se produire après un CTRTransfer ou un changement de région sur Old 3DS / 2DS. Suivez les instructions [ici](region-changing#section-vi-fixing-locale-related-issues) pour résoudre ce problème.

:::

:::details Écran d'exception lors du démarrage/chargement d'une application

Recherchez votre écran d'exception sur [cette page](https://wiki.hacks.guide/wiki/3DS:Error_screens/Luma3DS_exception_screen).
Si vous n'avez pas pu trouver votre message erreur ou si les instructions n'ont pas fonctionné, rejoignez [le Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp) pour obtenir de l'aide.

:::

:::details Ouvrir les paramètres du menu HOME fait planter la console ou lance le Homebrew Launcher

Il est probable que menuhax67 soit encore installé sur votre console. Pour désinstaller menuhax67, téléchargez la dernière version de [menuhax67](https://github.com/zoogie/menuhax67/releases/latest) (le `.zip`), puis suivez la [section "Désinstaller menuhax67"](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits/menuhax67#Uninstall_menuhax67) ici.

:::

:::details Autre chose

Rejoignez [le Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp) pour obtenir de l'aide, et décrivez le problème que vous voyez.

:::

## Autres dépannages

:::details Effacer les données "extdata" du menu HOME

1. Éteignez votre console
2. Insérez votre carte SD dans votre ordinateur
3. Naviguez vers le dossier `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` sur votre carte SD
4. Supprimez le dossier correspondant à la région de votre 3DS :
   - **Région EUR** : `00000098`
   - **Région JPN** : `00000082`
   - **Région USA** : `0000008f`
   - **Région CHN** : `000000A1`
   - **Région KOR** : `000000A9`
   - **Région TWN** : `000000B1`
5. Réinsérez votre carte SD dans votre console

:::

:::details Effacer les données de thème du menu HOME

1. Éteignez votre console
2. Insérez votre carte SD dans votre ordinateur
3. Naviguez vers le dossier `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` sur votre carte SD
4. Supprimez le dossier correspondant à la région de votre 3DS :
   - **Région EUR** : `000002ce`
   - **Région JPN** : `000002cc`
   - **Région USA** : `000002cd`
   - **Région KOR** : `000002cf`
5. Réinsérez votre carte SD dans votre console

:::

:::details Entrer manuellement dans le Homebrew Launcher

Si vous manquez l'application Homebrew Launcher depuis votre menu HOME, vous pouvez suivre ces instructions pour entrer manuellement dans le Homebrew Launcher. (Vous aurez besoin de [boot.3dsx et boot.firm](https://github.com/LumaTeam/Luma3DS/releases/latest) à la racine de votre carte SD.)

<!--@include: ./_include/launch-hbl-dlp.md -->

:::

:::details Désactiver le contrôle parental

Vous pouvez désactiver la fonction Contrôle parental en allant dans Paramètres de la console -> Contrôle parental et en insérant le PIN, puis appuyez sur "Effacer les paramètres", puis "Effacer" pour le désactiver.
Cependant, si vous ne connaissez pas le code PIN et ne pouvez donc pas accéder aux Paramètres de la console, vous devrez le désactiver. Pour cela, vous devez obtenir le code général de votre console (mkey) :

1. Allez sur [ce site web](https://mkey.eiphax.tech/)
2. Remplissez les champs avec les informations suivantes :
   - Device Type : Sélectionnez "3DS" (la même chose s'applique si vous utilisez une 2DS, une New 3DS (XL/LL) ou une New 2DS (XL/LL))
   - System Date : Le jour et le mois de l'horloge sur laquelle votre console est réglée
   - Inquiry Number : (Code d'assistance) Peut être obtenu en appuyant sur "Code PIN oublié" puis "J'ai oublié" dans l'écran du Contrôle parental
3. Une fois que vous avez obtenu votre mkey (code passe-partout), appuyez sur OK sur l'écran sur lequel vous avez obtenu votre code d'assistance, puis saisissez le code passe-partout
4. Appuyez sur "Effacer les paramètres", puis "Effacer" pour supprimer toutes les données du Contrôle parental

:::

---

<!--@include: ./_include/troubleshooting-return.md -->

