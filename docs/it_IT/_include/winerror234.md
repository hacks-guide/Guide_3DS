Creando l'ID1 MSET9 con Windows 10 e superiori, lo script potrebbe fallire con il seguente errore:

![](/images/screenshots/troubleshooting/234.png)

Succede a causa del supporto beta UTF-8 in Windows. È necessario disattivarlo per eseguire MSET9:

1. Premi **Tasto Windows + R** per aprire il la finestra di dialogo Esegui, digita `intl.cpl` e fai clic su "OK"
    ::: info

    ![](/images/screenshots/troubleshooting/234run.png)

    :::

2. Clicca su `Opzioni di amministrazione`, poi `Cambia impostazioni locali del sistema...`

    ::: info

    ![](/images/screenshots/troubleshooting/234region.png)

    :::

    ::: info

    ![](/images/screenshots/troubleshooting/234administrative.png)

    :::

3. Deseleziona la casella accanto a `Beta: utilizzare Unicode UTF-8 per il supporto della lingua a livello mondiale` e clicca su "OK"

    ::: info

    ![](/images/screenshots/troubleshooting/234locale.png)

    :::

4. Clicca su "Riavvia ora"

    ::: info

    ![](/images/screenshots/troubleshooting/234restart.png)

    :::

Dopo il riavvio del PC, prova a creare nuovamente l'ID1 MSET9.
