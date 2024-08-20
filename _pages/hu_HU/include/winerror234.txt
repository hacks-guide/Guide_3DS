
Az MSET9 ID1 létrehozásakor Windows 10-en vagy későbbin a szkript hibára futhat a következővel:

![Error 18](/images/screenshots/troubleshooting/234.png)

Ez a béta UTF-8 támogatás miatt van Windows-on. Le kell tiltanod az MSET9 futtatásához:

1. Nyomd meg a **Windows + R** gombot a Futtatás párbeszédablakhoz és írd be, hogy `intl.cpl`, majd kattints az "OK"-ra

![Futtatás](/images/screenshots/troubleshooting/234run.png)
{: .notice--info}

1. Kattints a `Felügyelet`-re majd a `Rendszer nyelvének módosítása` opcióra

![Régió](/images/screenshots/troubleshooting/234region.png)
{: .notice--info}
![Felügyelet](/images/screenshots/troubleshooting/234administrative.png)
{: .notice--info}

1. Vedd ki a pipát a következő opció elől: `Béta: Unicode UTF-8 használata a világszintű nyelvi támogatásért` majd kattints az "OK"-ra

![Nyelv](/images/screenshots/troubleshooting/234locale.png)
{: .notice--info}

1. Kattints az "Újraindítás most"-ra

![Újraindítás](/images/screenshots/troubleshooting/234restart.png)
{: .notice--info}

A számítógéped újraindítását követően próbáld meg az MSET9 ID1 létrehozását újra.
