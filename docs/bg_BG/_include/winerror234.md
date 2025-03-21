When creating the MSET9 ID1 on Windows 10 and above, the script may fail with this error:

![](/images/screenshots/troubleshooting/234.png)

This occurs because of the beta UTF-8 support in Windows. You must disable it to run MSET9:

1. Hit **Windows Key + R** to open up the Run dialogue, type `intl.cpl` then click "OK"
    ::: info

    ![](/images/screenshots/troubleshooting/234run.png)

    :::

2. Click on `Administrative`, then `Change System Locale`

    ::: info

    ![](/images/screenshots/troubleshooting/234region.png)

    :::

    ::: info

    ![](/images/screenshots/troubleshooting/234administrative.png)

    :::

3. Uncheck the box next to `Beta: Use Unicode UTF-8 for worldwide language support` then click "OK"

    ::: info

    ![](/images/screenshots/troubleshooting/234locale.png)

    :::

4. Click "Restart Now"

    ::: info

    ![](/images/screenshots/troubleshooting/234restart.png)

    :::

After your PC has rebooted, try creating the MSET9 ID1 again.
