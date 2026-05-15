# Restauration / Mise à jour du CFW

## Lecture requise

Cette page prépare les consoles avec une installation moderne de boot9strap existante pour la réinstallation et/ou la mise à jour des applications du custom firmware. Elle peut également être utilisée en cas de perte ou de corruption de la carte SD.

Votre carte SD doit être formatée en FAT32 pour suivre ce guide, sinon la 3DS ne pourra pas la reconnaître. Si votre carte SD n'est pas encore correctement formatée, utilisez l'une de ces pages pour la formater, en fonction de votre système d'exploitation : [Windows](formatting-sd-(windows)), [Mac](formatting-sd-(mac)), [Linux](formatting-sd-(linux)).

## Ce dont vous avez besoin

- La dernière version de [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (le fichier \`.zip' de Luma3DS)

## Instructions

1. Insérez votre carte SD dans votre ordinateur
2. Copiez tout depuis l'archive Luma3DS `.zip` (`boot.firm`, `boot.3dsx`, et `config`) vers la racine de votre carte SD. S'il y a déjà des fichiers existants, remplacez-les par les nouveaux fichiers.
   - La racine de la carte SD représente le répertoire initial sur votre carte SD où vous pouvez voir le dossier Nintendo 3DS, mais n'êtes pas à l'intérieur de celui-ci
3. Réinsérez votre carte SD dans votre console
4. Allumez votre console
   - Si vous voyez le menu de configuration de Luma3DS, appuyez sur (Start) pour enregistrer et redémarrer

::: info

![](/images/screenshots/restoringcfw-root-layout.png)

:::

::: info

La dernière version de Luma3DS est maintenant installée sur votre carte SD et sur la mémoire interne.

:::

::: tip

Continuez vers [Finalisation de l'installation](finalizing-setup) pour installer ou mettre à jour des applications homebrew (par ex. FBI, Homebrew Launcher).

:::
