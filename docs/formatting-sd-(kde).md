# Formatting SD (KDE Partition Manager)

## Required Reading

::: info

If you are using a SteamOS device (e.g. Steam Deck or Steam Machine), you should enter [Desktop Mode](https://help.steampowered.com/en/faqs/view/671A-4453-E8D2-323C) to follow the instructions on this page.

:::

::: warning

This page is for Linux users that have access to KDE Partition Manager only. If you are not on Linux, check out the [Formatting SD (Windows)](formatting-sd-(windows)) or [Formatting SD (Mac)](formatting-sd-(mac)) pages.

:::

## Instructions


1. Insert your SD card into your computer
1. If the SD card has any files and folders on it, copy everything to a folder on your computer
1. Eject your SD card from your computer
1. Open KDE Partition Manager, inputting your password as needed
1. Insert your SD card and click `Refresh Devices`
    + The new device that shows up in the left pane is your SD card
1. Click your SD card, then click the `New Partition Table` button at the top of the window
    ::: danger

    Make sure you choose the correct device, otherwise you might accidentally erase the wrong drive!

    :::
1. When asked, choose `MS-Dos`. Do **NOT** use GPT.

    ::: info
    
    ![](/images/screenshots/kde/mbr.png)
    
    :::

1. Right click the `unallocated` space in the right pane and select `New`
1. When selecting your filesystem, choose `FAT32` from the drop-down menu. The window should look like this:

    ::: info
    
    ![](/images/screenshots/kde/new-partition.png)
    
    :::

1. Click `OK`, then click `Apply`, then `Apply Pending Operations`
1. Eject and reinsert your SD card
1. If the SD card had any files and folders on it before the format, copy everything back from your computer