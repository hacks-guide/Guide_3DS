
When creating the MSET9 ID1 on Windows 10 and above, the script may fail with this error:

![Error 18](/images/screenshots/troubleshooting/234.png)

This occurs because of the beta UTF-8 support in Windows. You must disable it to run MSET9:

1. Hit **Windows Key + R** to open up the Run dialogue, type `intl.cpl` then click "OK"

    ![Run](/images/screenshots/troubleshooting/234run.png)
    {: .notice--info}

1. Click on `Administrative`, then `Change System Locale`

    ![Region](/images/screenshots/troubleshooting/234region.png)
    {: .notice--info}
    ![Administrative](/images/screenshots/troubleshooting/234administrative.png)
    {: .notice--info}

1. Uncheck the box next to `Beta: Use Unicode UTF-8 for worldwide language support` then click "OK"

    ![Locale](/images/screenshots/troubleshooting/234locale.png)
    {: .notice--info}

1. Click "Restart Now"

    ![Restart](/images/screenshots/troubleshooting/234restart.png)
    {: .notice--info}

After your PC has rebooted, try creating the MSET9 ID1 again.
