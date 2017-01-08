* * *

title: "Installing arm9loaderhax" permalink: /installing-arm9loaderhax.html lang: en_US lang: en_US ref: installing-arm9loaderhax

* * *

На последнем этапе гайда устанавливаем arm9loaderhax и настраиваем Luma3DS, после чего загрузка будет занимать значительно меньше времени. За эту возможность благодарим [AuroraWright](https://github.com/AuroraWright/) и его программу SafeA9LHInstaller. {: .notice}

Для установки arm9loaderhax будем использовать [форк AuroraWright](https://github.com/AuroraWright/arm9loaderhax).

Так же настроим запуск пейлоадеров (загрузчиков) из под arm9loaderhax, благодаря чему будем иметь возможность восстановить SysNAND консоли из бекапа практически в любой момент. {: .notice--info}

**НЕЛЬЗЯ использовать чужой OTP. Брик гарантирован!** {: .notice--danger}

#### Что будем делать?

В этом разделе мы будем шаг за шагом продвигаться к цели - установке arm9loaderhax.

Можно уверенно заявить, что arm9loaderhax - наилучший из возможных типов эксплойтов. Все потому, что он устанавливается непосредственно в раздел NAND firm и запускается ДО запуска операционной системы приставки. Кроме прочего, a9lh работает с *любой* прошивкой и, благодаря тому, что запускается до ОС, в большинстве ситуаций, удалить его случайно не выйдет. А еще этот эксплойт позволяет запускать различного рода загрузчики, которые помогут восстановить консоль даже из тех состояний, которые в обычном случае привели бы вас в сервисный центр. 

Файл под названием `arm9loaderhax.bin` - исполняемый файл, написанный под arm9, который запускает arm9loaderhax до загрузки системы. Заменив этот файл любым корректным arm9-приложением, мы инициализируем запуск этого приложения. К слову, luma3DS делает запуск загрузчиков гораздо удобнее. Ничего не нужно заменять или переименовывать. Достаточно зажать кнопку при старте системы, присвоенную выбранному загрузчику.

arm9loaderhax.bin, используемый в этом гайде - исполняемый файл самой Luma3DS от [AuroraWright](https://github.com/AuroraWright/), после того как он загружается, он патчит SysNAND напрямую. Таким образом мы загружаем систему сразу в кастомную прошивку без необходимости EmuNAND. 

После того, как мы установим arm9loaderhax и настроем Luma3DS, мы восстановим бекап прошивки, сделанный ранее. У нас будет консоль с arm9loaderhax и прошивкой, софтом и сейвами, с которыми приставка была ДО взлома.

В процессе мы установим и настроем следующие программы:

* **FBI** *(устанавливает игры и программы в формате CIA)*
* **Luma3DS Updater** *(программа для упрощения обновления нашей кастомной прошивки)*
* **Hourglass9** *(многоцелевая утилита, выполняющие различные функции, связанные с NAND и картриджами)*

#### Что нужно:

* [`aeskeydb.bin`](magnet:?xt=urn:btih:18b3a17f78e2376e05feaa150749d9fd689b25dc&dn=aeskeydb.bin&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* [`fbi-2.4.2-injectable.zip`](magnet:?xt=urn:btih:f978b4cf5eda72823240b9c649f3fd2940a9f525&dn=fbi-2.4.2-injectable.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* [`data_input_v3.zip`](magnet:?xt=urn:btih:a1195c9f7ab650fa7c7bf020b51fc19ea8d9440c&dn=data%5Finput%5Fv3.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* Свежий форк [SafeA9LHInstaller](https://github.com/Plailect/SafeA9LHInstaller/releases/latest) *(`.7z`-файл)*
* Свежая версия [arm9loaderhax](https://github.com/AuroraWright/arm9loaderhax/releases/latest) *(`.7z`-файл)*
* Свежая версия [Luma3DS](https://github.com/AuroraWright/Luma3DS/releases/latest) *(`.7z`-файл)*
* Свежая версия [hblauncher_loader](https://github.com/yellows8/hblauncher_loader/releases/latest)
* Свежая версия [Hourglass9](https://github.com/d0k3/Hourglass9/releases/latest)
* Свежая версия [Luma3DS Updater](https://github.com/Hamcha/lumaupdate/releases/latest)
* Свежая версия [DspDump](https://github.com/Cruel/DspDump/releases/latest)
* Свежая версия [FBI](https://github.com/Steveice10/FBI/releases/)
* Свежая версия [GodMode9](https://github.com/d0k3/GodMode9/releases/latest)
* The Homebrew [Starter Kit](http://smealum.github.io/ninjhax2/starter.zip)

#### Что делать:

##### Часть I - Подготовка

{% capture notice-5 %} **Убедитесь в том, что ваша карта памяти исправна!**

**Использование испорченной карты может привести к БРИКУ!**

**Если вы не уверены, что карта работает правильно, проверьте КП на ошибки, используя [H2testw (Windows)](h2testw-(windows)), [F3 (Linux)](f3-(linux)), or [F3X (Mac)](f3x-(mac))!** {% endcapture %}

<div class="notice--danger">{ notice-5 | markdownify }</div>

  1. **Если на карте памяти есть папка `/files9/`, скопируйте ее в надежное место (лучше сделать не одну копию и на разных носителях, а так же в облаке); файлы, находящиеся в этой папке файлы могут вернуть приставку к жизни, в случае проблем.**
  2. Создайте папку `cias` в корне карты памяти.
  3. **Удалите папку `a9lh` из корня КП, если таковая там есть.** 
    * **If you accidentally install arm9loaderhax using another device's `OTP.bin`, you will BRICK!**
  4. Delete the `3ds` folder from the root of your SD card if it exists
  5. **Copy *the contents of* the `starter.zip` to the root of your SD card** 
    * This will include a brand new `3ds` folder to replace the one you just deleted
  6. Copy *the contents of* the SafeA9LHInstaller `.7z` to the root of your SD card
  7. **Copy the `a9lh` folder from the data_input `.zip` to the root of your SD Card**
  8. **Copy *the contents of* the arm9loaderhax release `.7z` to `a9lh` folder on your SD card**
  9. Copy `hblauncher_loader.cia` from the hblauncher_loader `.zip` to the `/cias/` folder on your SD card
 10. Copy `lumaupdater.cia` from the Luma3DS Updater `.zip` to the `/cias/` folder on your SD card
 11. Copy `FBI.cia` from the FBI `.zip` to the `/cias/` folder on your SD card
 12. **Copy `arm9loaderhax.bin` from the Luma3DS `.7z` to the root of your SD card, overwrite existing files**
 13. Create a folder named `luma` on the root of your SD card
 14. Create a folder named `payloads` in the `luma` folder on your SD card
 15. Copy `Hourglass9.bin` from the Hourglass9 `.zip` to the `/luma/payloads/` folder on your SD card and rename `Hourglass9.bin` to `start_Hourglass9.bin`
 16. Copy `GodMode9.bin` from the GodMode9 `.zip` to the `/luma/payloads/` folder on your SD card and rename `GodMode9.bin` to `up_GodMode9.bin`
 17. Copy `aeskeydb.bin` to the `/files9/` folder on your SD card
 18. Copy `DspDump.3dsx` to the `/3ds/` folder on your SD card
 19. Copy *the contents of* `fbi-2.4.2-injectable.zip` to the `/files9/` folder on your SD card

##### Section II - Installing arm9loaderhax

  1. Reinsert your SD card into your 3DS
  2. Do the steps for installing arm9loaderhax on your device: 
    * You should be on 2.1.0
    * Go to `http://dukesrg.github.io/2xrsa.html?arm11.bin` on your 3DS
    * If you get the error "This service is not available in your region", use the System Settings to set your device's country to match the NAND region you installed with 2.1.0 ctrtransfer
    * If you get another error, [follow this troubleshooting guide](troubleshooting#ts_browser)
    * If you get a glitched screen, [follow this troubleshooting guide](troubleshooting#ts_safe_a9lh_screen)
    * Press (Select) to Full Install
    * The installer will now install arm9loaderhax on your device (this is very fast)
    * Shut down your console, hold the power button until it turns off if necessary
    * Copy your console specific `OTP.bin` from the `/a9lh/` folder on your SD card to a safe location on your computer and back it up to multiple locations (such as online file storage), then reinsert your SD card into your 3DS

##### Section III - Configuring Luma3DS

  1. Hold select on boot to enter the Luma3DS menu 
    * Make sure to start holding the button before pressing power
    * If you get a black screen, [follow this troubleshooting guide](troubleshooting#ts_sys_a9lh) 
    * If you boot to SafeA9LHInstaller, [follow this troubleshooting guide](troubleshooting#ts_safe_a9lh)
  2. Use the (A) button and the D-Pad to turn on the following:  
    * **"Autoboot SysNAND"**
    * **"Use SysNAND FIRM if booting with R"**
    * **"Show NAND or user string in System Settings"**
  3. If you are using a **New 3DS**, you should *also* enable the following: 
    * **"New 3DS CPU" to "Clock+L2(x)"**
    * This will increase the framerate of many games, but may cause instability in others
    * If some games do not work properly, disable this option and try again
  4. Press Start to save and reboot 
    * If you get a black screen, just continue to the next section 
    * If you get a "Failed to mount CTRNAND" error, just continue to the next section 

##### Section IV - Restoring the System

If, before following this guide, you already had an EmuNAND setup and would like to move the contents of your previous EmuNAND to your new SysNAND CFW, now is the time to [follow Move EmuNAND](move-emunand) instead of doing the first four steps in this section. {: .notice--info}

  1. Open Hourglass9 from arm9loaderhax by holding (Start) on boot
  2. Go to "SysNAND Backup/Restore"
  3. Restore from `NANDmin.bin`
  4. Press (Start) to reboot 
    * If you get a black screen, [follow 9.2.0 ctrtransfer](9.2.0-ctrtransfer)
  5. If your backup was of a version between 3.0.0 and 4.5.0, your console will not boot until you manually download the required firmware: 
    * Download [this file](http://nus.cdn.c.shop.nintendowifi.net/ccs/download/0004013800000002/00000056) and rename it to `firmware.bin`
    * Download [this file](http://nus.cdn.c.shop.nintendowifi.net/ccs/download/0004013800000002/cetk)
    * Copy `firmware.bin` and `cetk` to the `/luma/` folder on your SD card
    * Delete both of these files after updating your 3DS
  6. Update your 3DS by going to System Settings, then "Other Settings", then going all the way to the right and using "System Update" 
    * Updates while using A9LH + Luma (what you have) are safe, stop asking about it
    * The warning about never updating a New 3DS from 2.1.0 does not apply after restoring your NAND backup.
    * If this gives you an error, set your DNS settings to "auto"
    * If this still gives you an error and your NAND is below 9.2.0, [follow 9.2.0 ctrtransfer](9.2.0-ctrtransfer)

##### Section V - Injecting FBI

  1. Open Hourglass9 from arm9loaderhax by holding (Start) on boot
  2. Go to "SysNAND Backup/Restore", then select the "Health&Safety Dump" option to dump Health & Safety to `hs.app` **(you can use Up and Down / Left and Right to change the name)**
  3. Press (B), then select the "Health&Safety Inject" option
  4. Select the FBI injectable `.app` for your region
  5. Press (A) and confirm to inject
  6. Press (Start) to reboot
  7. If you still launch to the stock Health & Safety app and have downgraded with Gateway in the past, [follow this troubleshooting guide](troubleshooting#gw_fbi)

##### Section VI - Finalizing setup

  1. Open Health and Safety (which is now FBI)
  2. Select "SD"
  3. Select "cias"
  4. Navigate to `FBI.cia` and press (A) to install
  5. Navigate to `hblauncher_loader.cia` and press (A) to install
  6. Navigate to `lumaupdater.cia` and press (A) to install
  7. Return to the SD directory with (B)
  8. Navigate to `arm9loaderhax.bin`, then press (A) on it and select the "Copy" option
  9. Return to the FBI main menu with (B)
 10. Select "CTR NAND"
 11. Select "\<current directory>"
 12. Select the "Paste" option, then press (A) to confirm
 13. Exit with the home button
 14. Launch the Homebrew Launcher from the home menu
 15. Select "DSP Dump"
 16. Press (Start) when prompted to exit
 17. Reboot while holding Start to launch Hourglass9
 18. Go to "SysNAND Backup/Restore", then select "Health&Safety Inject"
 19. Select `hs.app` (the original one that doesn't contain FBI), then press (A) and confirm to inject
 20. Press (Select) on the main menu to eject your SD card
 21. Press (Start) to reboot with the SD card removed 
    * Booting the device at least once with the SD card removed will allow you to configure the CTRNAND based luma installation
 22. Use the (A) button and the D-Pad to turn on the following:  
    * **"Show NAND or user string in System Settings"**
 23. If you are using a **New 3DS**, you should *also* enable the following: 
    * **"New 3DS CPU" to "Clock+L2(x)"**
    * This will increase the framerate of many games, but may cause instability in others
    * If some games do not work properly, disable this option and try again
 24. Reinsert your SD card, then press Start to save and reboot!

* * *

If DSi / DS functionality has broken (such as DS carts or DSiWare no longer working), [follow this troubleshooting guide](troubleshooting#twl_broken) {: .notice--warning}

{% capture notice-10 %} You can now use Luma3DS Updater to update your Luma3DS to the latest version just by opening it and pressing (A).  
This is not the same thing as a System Update; it just downloads and extracts the newest Luma3DS files. Luma3DS Updater only updates the files located on the SD card.  
This will only update the Luma3DS files on the SD Card. If you boot the device without an SD card, it will use whatever version you placed in CTR NAND.  
{% endcapture %}

<div class="notice--info">{{ notice-10 | markdownify }}</div>

{% capture notice-6 %}  
You will now boot a Custom Firmware based SysNAND by default.  
You can now hold (Select) on boot to launch the Luma3DS configuration menu.  
You can now hold (Start) on boot to launch Hourglass9, an arm9loaderhax safe multipurpose NAND and cartridge tool.  
{% endcapture %}

<div class="notice--info">{{ notice-6 | markdownify }}</div>

You can update your arm9loaderhax installation in the future by following the instructions on the [Updating A9LH](updating-a9lh) page. {: .notice--info}

To use [NTR CFW](https://github.com/44670/BootNTR/), get `ntr.bin` from the appropriate `.zip` on [this](https://github.com/44670/BootNTR/releases) page and copy it to the root of your SD card, then install `BootNTR.cia` from [this](https://github.com/astronautlevel2/BootNTR/releases/latest) page. {: .notice--info}

Keep your `NANDmin.bin` file, it can be restored by Hourglass9 to save you from a brick in the future. {: .notice--info}

You can remove your NAND backups from `/files9/` as long as you still have them backed up to a safe location. {: .notice--info}

{% capture notice-7 %} **You can remove any extra files and folders from the root of the SD card that are *not* in the following list:**

    + 3ds
    + files9
    + hblauncherloader
    + luma
    + Nintendo 3DS
    + arm9loaderhax.bin
    + boot.3dsx
    

{% endcapture %}

<div class="notice--info">{{ notice-7 | markdownify }}</div>

For information on changing your device to another region, check out the [Region Changing](region-changing) page. {: .notice--success}

For information on keeping your A9LH installation up to date, check out the [Updating A9LH](updating-a9lh) page. {: .notice--success}

For information on using Luma3DS's various features, check out [its wiki](https://github.com/AuroraWright/Luma3DS/wiki/Options-and-usage). {: .notice--success}