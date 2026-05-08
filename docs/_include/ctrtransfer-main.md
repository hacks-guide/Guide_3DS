1. Press and hold <kbd>START</kbd>, and while holding <kbd>START</kbd>, power on your console. This will launch GodMode9
1. If you are prompted to create an essential files backup, press <kbd>A</kbd> to do so, then press <kbd>A</kbd> to continue once it is completed
1. If you are prompted to fix the RTC date&time, press <kbd>A</kbd> to do so, then set the date and time, then press <kbd>A</kbd> to continue
    + Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after this guide
1. Press (Home) to bring up the action menu
1. Select "Scripts..."
1. Select "ctrtransfer"
1. Select your downloaded CTRTransfer image
    + The script will calculate the hash of your image to make sure it's valid
1. Once the checks are completed, press <kbd>A</kbd> to continue
1. Press <kbd>A</kbd> to unlock SysNAND (lvl2) writing, then input the key combo given
1. Once the transfer is completed, press <kbd>A</kbd> to continue
1. Press <kbd>A</kbd> to relock write permissions if prompted
1. Press <kbd>START</kbd> to reboot your console
1. Update your console by going to System Settings, then "Other Settings", then going all the way to the right and using "System Update"
    + Updates while using B9S + Luma (what you have) are safe
    + If this gives you an error, set your DNS settings to "Auto"
        + Pretendo users: Switch to Nintendo Network in Nimbus

::: info

At this point, you may remove the CTRTransfer `.bin` and `.bin.sha` files  from the `/gm9/in/` folder to reclaim space on your SD card.

:::
