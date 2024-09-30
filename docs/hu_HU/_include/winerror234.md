Az MSET9 ID1 létrehozásakor Windows 10-en vagy későbbin a szkript hibára futhat a következővel:

![](/images/screenshots/troubleshooting/234.png)

Ez a béta UTF-8 támogatás miatt van Windows-on. Le kell tiltanod az MSET9 futtatásához:

1. Hit **Windows Key + R** to open up the Run dialogue, type `intl.cpl` then click "OK"
   ::: info

   ![](/images/screenshots/troubleshooting/234run.png)

   :::

2. Kattints a `Felügyelet`-re majd a `Rendszer nyelvének módosítása` opcióra

   ::: info

   ![](/images/screenshots/troubleshooting/234region.png)

   :::

   ::: info

   ![](/images/screenshots/troubleshooting/234administrative.png)

   :::

3. Vedd ki a pipát a következő opció elől: `Béta: Unicode UTF-8 használata a világszintű nyelvi támogatásért` majd kattints az "OK"-ra

   ::: info

   ![](/images/screenshots/troubleshooting/234locale.png)

   :::

4. Kattints az "Újraindítás most"-ra

   ::: info

   ![](/images/screenshots/troubleshooting/234restart.png)

   :::

A számítógéped újraindítását követően próbáld meg az MSET9 ID1 létrehozását újra.
