# Installation de boot9strap (safecerthax)

:::details Détails techniques (optionnel)

:::

## Notes de compatibilité

safecerthax is compatible with all Old 3DS and Old 2DS consoles in all regions on system versions 1.0.0 through 11.14.0.

::: info

Cette méthode ne fonctionnera pas sur la New 3DS, la New 3DS XL, ou la New 2DS XL. Veuillez vous assurer que la console que vous hackez est une Old 3DS, Old 3DS XL ou Old 2DS avant de continuer.

:::

## Ce dont vous avez besoin

- La dernière version de [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (téléchargement direct)
- La dernière version de [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (téléchargement direct)
- La dernière version de [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (le fichier \`.zip' de Luma3DS)

## Instructions

### Section I - Contrôle matériel des boutons

Dans cette section, vous verrez si les boutons (L) et (R) de votre console fonctionnent correctement. Ceci déterminera si votre console est compatible avec cette méthode.

1. Allumez votre console
2. Une fois arrivé sur le Menu HOME, appuyez sur les boutons (L) et (R) en même temps
   - L'applet de l'appareil photo devrait apparaître
3. Éteignez votre console

::: warning

Si la caméra n'est PAS apparue, vous ne pouvez pas suivre cette méthode. Si c'est le cas, suivez [Installer boot9strap (MSET9)](installing-boot9strap-\(mset9\)) à la place.

:::

### Section II - Préparatifs

Dans cette section, vous allez copier les fichiers requis pour déclencher l'exploit safecerthax.

1. Insérez votre carte SD dans votre ordinateur
2. Copiez tout depuis le `.zip` de Luma3DS à la racine de votre carte SD
   - La racine de la carte SD représente le répertoire initial de la carte SD où vous pouvez voir le dossier Nintendo 3DS, mais ce n'est pas à l'intérieur de ce dernier
3. Créez un dossier nommé `boot9strap` à la racine de votre carte SD
4. Copiez `boot9strap.firm` et `boot9strap.firm.sha` depuis le fichier ".zip" de boot9strap vers le dossier `/boot9strap/` sur votre carte SD
5. Copiez `'SafeB9SInstaller.bin` depuis le `zip` SafeB9SInstaller vers la racine de votre carte SD
6. Réinsérez votre carte SD dans votre console
7. Allumez votre console

::: info

![](/images/screenshots/safecerthax-root-layout.png)

:::

::: info

![](/images/screenshots/boot9strap-folder.png)

:::

### Section III - proxy safecerthax

::: warning

Cette section est OBLIGATOIRE ! Failure to setup the proxy may cause you to update your console to a newer firmware by mistake.

:::

Dans cette section, vous allez modifier vos paramètres de connexion Internet pour utiliser un réseau proxy conçu pour exploiter la fonctionnalité de Mise à jour de la console.

<!--@include: ./_include/addproxy.md -->

1. Éteignez votre console

### Section IV - safecerthax

In this section, you will enter Safe Mode (a feature available on all 3DS family consoles) where safecerthax will be triggered, which will launch you into the boot9strap (custom firmware) installer.

1. With your console still powered off, hold the following buttons: (Left Shoulder) + (Right Shoulder) + (D-Pad Up) + (A), and while holding these buttons together, power on your console
   - Keep holding the buttons until the console boots into Safe Mode (a "system update" menu)
2. Press "OK" to accept the update
   - There is no update. This is part of the exploit
3. Press "I accept" to accept the terms and conditions
4. The update will eventually fail, with the error code `003-1099`. Ne vous inquiétez pas, c'est normal.
5. Press "OK" to close the error message
6. Si l'exploit a réussi, vous aurez démarré sur SafeB9SInstaller
   - If the console freezes or crashes, force power off the console, then retry this section

### Section V - Installation de boot9strap

Dans cette section, vous installerez un custom firmware sur votre console.

1. Lorsque vous y êtes invité, entrez la combinaison de touches indiquée sur l'écran supérieur pour installer boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-safecerthax)
2. Une fois l'opération terminée, appuyez sur (A) pour redémarrer votre console

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

### Section VI - Restoring default proxy

<!--@include: ./_include/rmproxy.md -->

___

::: tip

Continuer vers [Finalisation de l'installation](finalizing-setup)

:::
