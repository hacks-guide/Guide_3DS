Lors de la création de l'ID1 MSET9 sur Windows 10 et supérieur, le script peut échouer avec cette erreur :

![](/images/screenshots/troubleshooting/234.png)

Cela se produit à cause du support bêta de l'UTF-8 dans Windows. Vous devez le désactiver pour exécuter MSET9 :

1. Appuyez sur **Windows + R** pour ouvrir la boîte de dialogue Exécuter, tapez `intl.cpl` puis cliquez sur "OK"

   ::: info

   ![](/images/screenshots/troubleshooting/234run.png)

   :::

2. Cliquez sur `Administration`, puis sur `Modifier les paramètres régionaux...`

   ::: info

   ![](/images/screenshots/troubleshooting/234region.png)

   :::

   ::: info

   ![](/images/screenshots/troubleshooting/234administrative.png)

   :::

3. Décochez la case à côté de `Bêta: Utiliser le format Unicode UTF-8 pour une prise en charge des langues à l'échelle mondiale` puis cliquez sur "Ok"

   ::: info

   ![](/images/screenshots/troubleshooting/234locale.png)

   :::

4. Cliquez sur "Redémarrer maintenant"

   ::: info

   ![](/images/screenshots/troubleshooting/234restart.png)

   :::

Une fois que votre PC a redémarré, essayez de créer à nouveau l'ID1 MSET9.
