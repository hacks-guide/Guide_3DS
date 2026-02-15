---
head:
  [
    [ 'script', { src: '/assets/js/common.js' } ],
    [ 'script', { src: '/assets/js/soundhax-link.js' } ],
    [ 'script', { src: '/assets/js/link-common.js' } ]
  ]
---

# Installation de boot9strap (Soundhax)

:::details Détails techniques (optionnel)

Pour des détails techniques sur les exploits que vous utiliserez sur cette page, voir [ici](https://github.com/nedwill/soundhax) (Soundhax) et [ici](https://github.com/TuxSH/universal-otherapp) (universal-otherapp).

:::

## Notes de compatibilité

Soundhax (quand combiné avec universal-otherapp) est compatible avec les versions 1.0.0 jusqu'a 11.3.0 dans toutes les régions.

## Ce dont vous avez besoin

- La dernière version de [Soundhax](http://soundhax.com) _(en fonction de la région, modèle et version de votre console)_
  - Si Soundhax apparait dans votre navigateur comme une vidéo injouable, appuyez sur Ctrl + S ou Cmd + S pour la sauvegarder dans votre ordinateur
- La dernière version de [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (téléchargement direct)
- La dernière version de [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (téléchargement direct)
- La dernière version de [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (le fichier `.zip` de Luma3DS)
- La dernière version de [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

## Instructions

### Section I - Préparatifs

Dans cette section, vous allez copier les fichiers requis pour déclencher Soundhax et universal-otherapp.

1. Éteignez votre console
2. Insérez votre carte SD dans votre ordinateur
3. Copiez le Soundhax `.m4a` vers la racine de votre carte SD
   - La racine de la carte SD représente le répertoire initial de la carte SD où vous pouvez voir le dossier Nintendo 3DS, mais ce n'est pas à l'intérieur de ce dernier
4. Copiez `otherapp.bin` vers la racine de votre carte SD
5. Copiez tout depuis le `.zip` de Luma3DS à la racine de votre carte SD
6. Créez un dossier nommé `boot9strap` à la racine de votre carte SD
7. Copiez `boot9strap.firm` et `boot9strap.firm.sha` depuis le fichier ".zip" de boot9strap vers le dossier `/boot9strap/` sur votre carte SD
8. Copiez `'SafeB9SInstaller.bin` depuis le `zip` SafeB9SInstaller vers la racine de votre carte SD
9. Réinsérez votre carte SD dans votre console
10. Allumez votre console

::: info

![](/images/screenshots/soundhax/soundhax-root-layout.png)

:::

::: info

![](/images/screenshots/boot9strap-folder.png)

:::

### Section II - Lancement de SafeB9SInstaller

Dans cette section, vous lancerez Soundhax au travers de l'application Studio son Nintendo 3DS qui utilisera universal-otherapp pour lancer l'installateur de boot9strap (custom firmware).

1. Lancez l'application Studio son Nintendo 3DS

   ::: info

   ![](/images/screenshots/soundhax/soundhax-welcome.png)

   :::

2. Si vous n'aviez jamais ouvert le Studio son Nintendo 3DS auparavant et obtenez des conseils d'un oiseau, passez toutes ses explications, puis fermez l'application normalement et relancez-la
   - Lancer SoundHax immédiatement ferait réapparaitre le tutoriel à chaque lancement de Studio son Nintendo 3DS jusqu'à ce qu'il soit correctement complété

3. Naviguez vers `/Carte SD`, puis lisez le fichier "<3 nedwill 2016"

   - Il se peut que cela nécessite plusieurs tentatives (jusqu'à 10)
   - Si vous voyez le message "Lecture impossible", vous êtes soit sur une version du système incompatible avec Soundhax ou vous avez téléchargé la mauvaise version de Soundhax
   - Si la console ne répond plus, forcez-la simplement à s'éteindre en maintenant le bouton POWER, puis réessayez
   - Si vous obtenez une erreur différente, [suivez ce guide de dépannage](troubleshooting-soundhax)

   ::: info

   ![](/images/screenshots/soundhax/soundhax-launch.png)

   :::

4. Si l'exploit a réussi, vous aurez démarré sur SafeB9SInstaller

### Section III - Installer boot9strap

Dans cette section, vous installerez un custom firmware sur votre console.

1. Lorsque vous y êtes invité, entrez la combinaison de touches indiquée sur l'écran supérieur pour installer boot9strap
   - Dans le cas où un message en rouge apparaîtrait lors d'une étape sur l'écran du bas et que vous n'êtes pas sollicité pour saisir une combinaison de boutons, [suivez ce guide de dépannage](troubleshooting-soundhax)
2. Une fois l'opération terminée, appuyez sur (A) pour redémarrer votre console

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

Continuer vers [Finalisation de l'installation](finalizing-setup)

:::
