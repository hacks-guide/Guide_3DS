---
title: "Homebrew Launcher (Browser)"
permalink: /homebrew-launcher-(browser).html
---

The Homebrew Launcher has many different entrypoints, or methods of launching. The most common is browserhax, which launches the Homebrew Launcher using nothing more than the included browser.
{: .notice--info}

**Browserhax will work for EUR / JPN / USA / KOR regions ONLY!**
{: .notice--warning}

#### What you need

+ The Homebrew [Starter Kit](http://smealum.github.io/ninjhax2/starter.zip)
+ An internet connection setup on your 3DS

{::comment}
+ [`config.zip`](images/config.zip)
+ The [ropbin](https://smealum.github.io/3ds/#otherapp) matching your 3DS's version
{:/comment}

#### Instructions

##### Section I -  Prep work

1. Copy the contents of `starter.zip` to the root of your SD card
4. Reinsert your SD card into your 3DS

{::comment}
2. Copy the contents of `config.zip` to the `/3ds/menuhax_manager/` folder on your SD card
3. Create a folder named `menuhax` on the root of your SD card if it does not already exist
4. Rename the ropbin to `menuhaxmanager_input_payload.bin`
5. Copy `menuhaxmanager_input_payload.bin` to the `/menuhax/` folder on your SD card
{:/comment}

##### Section II -  Version check bypass

**This section is only needed for versions from 9.9.0 to 10.6.0**

2. Open the theme menu, change your theme to any other theme, then switch back. This will initialize the theme data and is required
3. Launch the Settings application
4. Change the date to `January 1, 2000`
5. Change the time to `00:00`
6. Launch the browser, then open the browser settings as fast as possible
7. Scroll to the bottom and Initialize Savedata (it also may be called Clear All Save Data) as fast as possible

##### Section III -  Block conntest.nintendowifi.net

**This section is only needed for New 3DS on version 10.7.0 and 11.0.0**

**This section does not work for JPN regions**

See [this](https://github.com/Plailect/Guide/issues/684)
{: .notice--info}

1. If you haven't already, set up an internet connection in the 3DS first without blocking the site.
2. Shut down your 3DS.
3. Download the [ropbin](https://smealum.github.io/3ds/#otherapp) matching your 3DS's version.
4. Rename the file to `browserhax_hblauncher_ropbin_payload.bin` and copy it to the root of your SD card.
4. Add firewall rule **to your router**:
    + The exact steps to block or blacklist a website depend on your router manufacturer.
    + Please keep in mind that you must block **from the router**. Using Windows Firewall (or any other local firewall) will not work.
    + Block this website `conntest.nintendowifi.net` or block all TCP and UDP request from this IP adress `69.25.139.140`
5. Boot 3DS
6. Continue at Section IV

##### Section IV -  browserhax

8. Navigate to `http://yls8.mtheall.com/3dsbrowserhax_auto.php`
    + You can also load the page by scanning the following QR code (press (L + R) on the home menu, then tap the QR icon on the bottom screen)     
![browserhax_auto](http://yls8.mtheall.com/3dsbrowserhax_auto_qrcode.png)
    + If you get an error, [follow this troubleshooting guide](troubleshooting#ts_browser)
9. Your console should load the homebrew menu
    + If you had blocked conntest.nintendowifi.net (or the IP adress) in Section III, unblock it after loading into the homebrew menu.

##### Section V -  menuhax

10. Open the menuhax_manager application
11. Press (A) to install, it may show some errors but that's fine as long as it shows "Install finished successfully" towards the end
    + If you are prompted to "override the detected system version," press (B) to decline
12. Go back to the main menuhax_manager menu, then select "Configure menuhax"
13. Press (A) to continue, then select "Type1"
14. Hold (Down) on the D-Pad, then tap the touch screen; this is the recommended button to use for launching menuhax in this guide because it does not interfere with any other functions of tools we will be using
15. Go back to the main menuhax_manager menu, press (B), then press (Start) to exit back into the Homebrew Launcher
16. Press the (Start) button then press (A) to reboot
17. You can now hold D-Pad (Down) while the system is booting to launch the Homebrew Launcher

You can now launch the Homebrew Launcher by holding D-Pad (Down) while the system is booting
{: .notice--info}

If you are above the version 9.2.0, continue to [9.2.0 Downgrade](9.2.0-downgrade)
{: .notice--primary}

If you are on the version 9.2.0 or below, continue to [Decrypt9 (Homebrew Launcher)](decrypt9-(homebrew-launcher))
{: .notice--primary}
