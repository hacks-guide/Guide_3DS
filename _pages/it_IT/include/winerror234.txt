
Creando l'ID1 MSET9 con Windows 10 e superiori, lo script potrebbe fallire con il seguente errore:

![Error 18](/images/screenshots/troubleshooting/234.png)

Succede a causa del supporto beta UTF-8 in Windows. È necessario disattivarlo per eseguire MSET9:

1. Premi **Tasto Windows + R** per aprire il la finestra di dialogo Esegui, digita `intl.cpl` e fai clic su "OK"

    ![Run](/images/screenshots/troubleshooting/234run.png)
    {: .notice--info}

1. Clicca su `Opzioni di amministrazione`, poi `Cambia impostazioni locali del sistema...`

    ![Region](/images/screenshots/troubleshooting/234region.png)
    {: .notice--info}
    ![Administrative](/images/screenshots/troubleshooting/234administrative.png)
    {: .notice--info}

1. Deseleziona la casella accanto a `Beta: utilizzare Unicode UTF-8 per il supporto della lingua a livello mondiale` e clicca su "OK"

    ![Locale](/images/screenshots/troubleshooting/234locale.png)
    {: .notice--info}

1. Clicca su "Riavvia ora"

    ![Restart](/images/screenshots/troubleshooting/234restart.png)
    {: .notice--info}

Dopo il riavvio del PC, prova a creare nuovamente l'ID1 MSET9.
