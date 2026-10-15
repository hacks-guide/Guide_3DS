# Formater la SD (Gestionnaire de partitions de KDE)

## Lecture requise

::: info

Si vous utilisez un appareil SteamOS (par ex. Steam Deck ou Steam Machine), vous devriez passer en [Mode Bureau] (https://help.steampowered.com/fr/faqs/view/671A-4453-E8D2-323C) et suivre les instructions Linux sur cette page.

:::

::: warning

Cette page est seulement pour les utilisateurs de Linux qui ont accès au Gestionnaire de partitions de KDE. Si vous n'êtes pas sous Linux, consultez les pages [Formater la SD (Windows)](formatting-sd-(windows)) ou [Formater la SD (Mac)](formatting-sd-(mac)). Si vous êtes sous Linux mais que vous n'avez pas accès au Gestionnaire de partitions de KDE, suivez les instructions sur la page [Formater la SD (Linux)](formatting-sd-(linux)).

:::

## Instructions

1. Insérez votre carte SD dans votre ordinateur

2. Si la carte SD contient quelconques fichiers ou dossiers, copiez-les tous vers un dossier sur votre ordinateur

3. Éjectez la carte SD de votre ordinateur

4. Ouvrez le Gestionnaire de partitions de KDE, en saisissant votre mot de passe si nécessaire

5. Insérez votre carte SD et cliquez sur `Rafraichir la liste des périphériques`
   - Le nouvel appareil qui apparaît dans le volet de gauche est votre carte SD

6. Cliquez sur votre carte SD, puis cliquez sur le bouton `Nouvelle table de partitions` en haut de la fenêtre
   ::: danger

   Assurez-vous d'avoir choisi le bon périphérique, sinon vous pourriez effacer accidentellement le mauvais lecteur !

   :::

7. Quand demandé, choisissez `MS-Dos`. N'utilisez **PAS** le GPT.

   ::: info

   ![](/images/screenshots/kde/mbr.png)

   :::

8. Faites un clic droit sur l'espace `non alloué` dans le volet de droite et sélectionnez `Nouveau`

9. Lorsque vous sélectionnez votre système de fichiers, choisissez `FAT32` dans le menu déroulant. La fenêtre devrait ressembler à ceci :

   ::: info

   ![](/images/screenshots/kde/new-partition.png)

   :::

10. Cliquez sur `OK`, puis cliquez sur `Appliquer`, puis `	Applique les opérations en attente`

11. Éjectez et réinsérez votre carte SD

12. Si la carte SD contenait des fichiers et dossiers avant le formatage, recopiez-les sur la carte SD depuis votre ordinateur
