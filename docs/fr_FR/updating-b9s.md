# Mise à jour de B9S

## Lecture requise

Cette page s'adresse aux utilisateurs existants de boot9strap afin de mettre à jour leur installation de boot9strap vers la dernière version.

## Ce dont vous avez besoin

- La dernière version de [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (téléchargement direct)
- La dernière version de [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (téléchargement direct)
- La dernière version de [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (le fichier \`.zip' de Luma3DS)

## Instructions

### Section I - Préparatifs

::: info

Pour toutes les étapes de cette section, remplacez tous les fichiers existants sur votre carte SD.

:::

1. Insérez votre carte SD dans votre ordinateur
2. Créez un dossier nommé `boot9strap` à la racine de votre carte SD
3. Copiez `boot9strap.firm` et `boot9strap.firm.sha` depuis l'archive boot9strap `.zip` vers le dossier `/boot9strap/` sur votre carte SD
4. Copiez `SafeB9SInstaller.firm` depuis l'archive SafeB9SInstaller`.zip` vers la racine de votre carte SD et renommez-le en `boot.firm`
5. Réinsérez votre carte SD dans votre console

   ::: info

   ![](/images/screenshots/updateb9s-root-layout.png)

   :::

### Section II - Installation de boot9strap

1. Allumez votre console
   - Cela devrait automatiquement lancer SafeB9SInstaller
2. Lorsque vous y êtes invité, entrez la combinaison de boutons donnée sur l'écran du haut pour installer boot9strap
   - Dans le cas où un message en rouge apparaîtrait lors d'une étape sur l'écran du bas et que vous n'êtes pas sollicité pour saisir une combinaison de boutons, [suivez ce guide de dépannage](troubleshooting-updating-b9s)
3. Une fois terminé, forcez votre console à s'éteindre en maintenant le bouton Power enfoncé
   - Votre console ne démarrera que sur l'écran SafeB9SInstaller jusqu'à ce que la section suivante soit complétée

### Section III - Mise à jour de Luma3DS

1. Insérez votre carte SD dans votre ordinateur
2. Copiez tout depuis l'archive Luma3DS `.zip` vers la racine de votre carte SD, en remplaçant les fichiers existants
3. Réinsérez votre carte SD dans votre console
4. Allumez votre console
5. Si votre console a démarré dans le menu de configuration de Luma3DS, appuyez sur (Start) pour enregistrer et redémarrer
   - Le menu de configuration de Luma3DS sont les paramètres du custom firmware Luma3DS. Beaucoup de ces paramètres peuvent être utiles pour la personnalisation ou le débogage
   - Pour les besoins de ce guide, ces paramètres seront laissés par défaut

___

::: tip

Continuer vers [Finalisation de l'installation](finalizing-setup)

:::
