* * *

title: "Troubleshooting" permalink: /troubleshooting.html lang: en_US ref: troubleshooting

* * *

Если Ваша приставка не загружается, то просмотрите варианты, перечисленные ниже, и воспользуйтесь советом, который там дан. После этого можете дальше следовать основной инструкции (гайд весьма обширен, рекомендуем пользовать поиск браузера - Ctrl+F). {: .notice--primary}

**Если решения Вашей проблемы здесь не оказалось, то соберите в одну кучу все *,log файлы, что найдете в корне карты памяти девайса и киньте их на [Gist](https://gist.github.com/), а затем уже просите о помощи. И не забудьте как можно детальнее описать свою проблему.** {: .notice--info}

## <a name="twl_broken" />Я закончил гайд, но DSi / DS игры не работают

#### Что нужно:

* TWL_FIRM `.cia` , соответствующие вашему устройству 
    * [`New_3DS TWL_FIRM - v9936.cia`](magnet:?xt=urn:btih:eab8558c97b18b1f329a2bfcc3c899b84c082a27&dn=New%5F3DS%20TWL%5FFIRM%20-%20v9936.cia&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
    * [`Old_3DS TWL_FIRM - v8817.cia`](magnet:?xt=urn:btih:17511eadb6e6f3ff22d04f90644e37bd2d96ca43&dn=Old%5F3DS%20TWL%5FFIRM%20-%20v8817.cia&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* [`TWL Version Data - v0.cia`](magnet:?xt=urn:btih:4a106681407fede5de95cc8bda635432481f6b5d&dn=TWL%20Version%20Data%20-%20v0.cia&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* [`DS Internet - v2048.cia`](magnet:?xt=urn:btih:2b9df8496922f2546dfb0b01220068ce53c19d3d&dn=DS%20Internet%20-%20v2048.cia&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* [`DS Download Play - v1024.cia`](magnet:?xt=urn:btih:b581d3c5d98f5e621fddfc1ce5704bb45bf05a8c&dn=DS%20Download%20Play%20-%20v1024.cia&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* [`Nintendo DS Cart Whitelist - v11264.cia`](magnet:?xt=urn:btih:7b90d506ad032a581a00035616eaa17a68c48eff&dn=Nintendo%20DS%20Cart%20Whitelist%20-%20v11264.cia&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)

#### Что делать:

##### Часть I - Подготовка

  1. Создайте папку `cias` в корне карты памяти.
  2. Скопируйте `TWL Version Data - v0.cia` в папку `/cias/` вашей карты памяти.
  3. Скопируйте `DS Download Play - v1024.cia` в папку `/cias/` вашей карты памяти.
  4. Скопируйте `DS Internet - v2048.cia` в папку `/cias/` вашей карты памяти.
  5. Скопируйте `Nintendo DS Cart Whitelist - v11264.cia` в папку `/cias/` вашей карты памяти.
  6. Скопируйте `New_3DS TWL_FIRM - v9936.cia` или `Old_3DS TWL_FIRM - v8817.cia` в папку `/cias/` вашей карты памяти.

##### Часть II - Установка

  1. Запустите FBI.
  2. Перейдите в папку "SD".
  3. Перейдите в папку "cias".
  4. Выберите "\<current directory>"
  5. Выберите "Install and delete all CIAs".
  6. Выйдите из FBI нажатием кнопки (HOME).

## <a name="rm_nnid" />Удаление NNID без форматирования устройства

#### Что нужно:

* Свежая версия [GodMode9](https://github.com/d0k3/GodMode9/releases/)

#### Что делать:

  1. Скопируйте `GodMode9.bin` из `.zip`-архива GodMode9 в папку `/luma/payloads/` в корне SD-карты и переименуйте `GodMode9.bin` в папке `/luma/payloads/` в `up_GodMode9.bin`.
  2. Перезагрузите приставку, удерживая (ВВЕРХ), чтобы запустить GodMode9.
  3. Перейдите в `SYSNAND CTRNAND` -> `data` -> (32-х-значный ID) -> `sysdata` -> `00010038`.
  4. Нажмите (X), удерживая (R) на файле `00000000`, чтобы переименовать его.
  5. Нажмите (ВВЕРХ), чтобы переименовать файл в `10000000`.
  6. Нажмите (A), чтобы сохранить изменения.
  7. Нажмите (A), чтобы разрешить запись в SysNAND и введите указанную комбинацию кнопок.
  8. Вернитесь в главное меню.
  9. Нажмите (START) для перезагрузки.

## <a name="gw_fbi" />Не выходит сделать инжект в Health & Safety после даунгрейда с помощью Gateway. 

Проблема часто встречается у тех, кто даунгрейдил при помощи Gateway. Суть в том, что метод даунгрейда гейта очень несовершенен. В ходе этой процедуры все системные приложения дублируются. Хоть они и не мешают работе, Decrypt9 спотыкается и не может понять в какой из H&S ему делать инжект, а в какой нет.

#### Что нужно:

* Свежая версия [GodMode9](https://github.com/d0k3/GodMode9/releases/)

#### Что делать:

  1. Скопируйте `GodMode9.bin` из `.zip`-архива GodMode9 в папку `/luma/payloads/` в корне SD-карты и переименуйте `GodMode9.bin` в папке `/luma/payloads/` в `up_GodMode9.bin`.
  2. Вставьте карту памяти в 3DS.
  3. Запустите GodMode9 из под arm9loaderhax, удерживая (ВВЕРХ) во время загрузки. 
  4. Перейдите в `SYSNAND CTRNAND` -> `title` -> `00040010`.
  5. Перейдите в папку, соответствующую вашей приставке и региону: 
    * **Old 3DS EUR**: `00022300` -> `content`
    * **Old 3DS JPN**: `00020300` -> `content`
    * **Old 3DS USA**: `00021300` -> `content`
    * **New 3DS EUR**: `20022300` -> `content`
    * **New 3DS JPN**: `20020300` -> `content`
    * **New 3DS USA**: `20021300` -> `content`
  6. Видите, здесь два типа *.app и *.tmd файлов? Первые написаны в капсе (`.TMD` и `.APP`), а вторые - нет (`.tmd` и ``app`).
  7. Удерживая (R), нажмите (Y), чтобы создать новую папку.
  8. Нажмите (А), чтобы подтвердить название новой папки - `newdir` (нам без разницы как она будет называться). 
  9. Нажмите (A), чтобы разрешить запись в SysNAND и введите указанную комбинацию кнопок.
 10. На каждом файле, разрешение которого написано в капсе (`.TMD` и `.APP`), нажмите (L), чтобы отметить его.
 11. Нажмите (Y), чтобы скопировать эти файлы.
 12. Перейдите в `newdir`.
 13. Нажмите (Y), чтобы переместить выбранные ранее файлы.
 14. Select "Move path(s)"
 15. The uppercase extension files will have been moved to the `newdir` directory
 16. Press (Start) to reboot
 17. Return to [Installing arm9loaderhax](installing-arm9loaderhax) and retry the FBI injection
 18. If this still doesn't work, move the uppercase extension files back to the `content` folder, then move the lowercase extension files to the `newdir` folder, then return to [Installing arm9loaderhax](installing-arm9loaderhax) and retry the FBI injection

## <a name="ts_browser" />A browser based exploit is not working

Browser based exploits (such as browserhax or 2xrsa) are often unstable and crash frequently, but they can sometimes be fixed by doing the following steps

  1. Open the browser, then open the browser settings 
      1. Scroll to the bottom and Initialize Savedata (it also may be called Clear All Save Data)
      2. Try the exploit again

## <a name="ts_safe_a9lh" />System boots directly SafeA9LHInstaller

You copied the wrong `arm9loaderhax.bin` file to your SD card (you were only supposed to copy the `3ds` folder and `SafeA9LHInstaller.dat` file from the SafeA9LHInstaller zip)

  1. Use the correct `arm9loaderhax.bin` 
      1. Copy `arm9loaderhax.bin` from the Luma3DS `.zip` to the root of your SD card
      2. Reboot holding select and continue

## <a name="ts_safe_a9lh_screen" />SafeA9LHInstaller shows a glitched screen

This happens occasionally, but the reason is unknown. The buttons will still work, but the screen will be glitched looking

  1. Follow instructions as normal 
      1. Press (Select) and arm9loaderhax will be installed
      2. The console will reboot 
        * If the console does not reboot, wait 10 seconds, then power off your 3DS by holding down the power button

## <a name="ts_steelhax" />After System Transfering steelhax, it crashes to a black screen on *the target 3DS*

This is because you selected the wrong version in the steelhax installer.

  1. Download the [otherapp payload](https://smealum.github.io/3ds/#otherapp) corresponding to **the target 3DS's** version 
    * Ignore the NFIRM being downgraded
    * Use the version displayed in settings
  2. Rename the otherapp payload to `steelhax_payload.bin`
  3. Copy it `steelhax_payload.bin` to the root of **the target 3DS's** SD Card 
    * Overwrite any existing files
  4. Hold (B) while launching **Steel Diver: Sub Wars**

## <a name="ts_dsiware" />After doing the DSiWare Downgrade, my hacked DSiWare does not work

  1. Reboot **the source 3DS** while holding Start to launch Hourglass9
  2. Go to SysNAND Backup/Restore and restore SysNAND from `NANDmin.bin` (the one made before the system transfer)
  3. If you don't see the game at all on **the target 3DS**, link the NNID you bought the game with to **the target 3DS** and redownload it 
    * You may have to delete the game from "Data Management" in the "System Settings" first
    * If **the target 3DS** is not the latest version, you may have to run ctr-httpwn to access the eShop
  4. On **the source 3DS**, do the the save (and `.app` if you are using the `.app` page) injection steps
  5. On **the source 3DS**, go to System Settings, "Data Management", "DSiWare", then copy your DSiWare game to your SD card
  6. Either put **the source 3DS**'s SD card in **the target 3DS**, or rename the `Nintendo 3DS` on **the target 3DS**'s SD card and copy the `Nintendo 3DS` folder from **the source 3DS**'s SD card to **the target 3DS**'s SD card
  7. On **the target 3DS**, go to System Settings, "Data Management", "DSiWare", then copy your DSiWare game to the system
  8. Return your SD cards to normal, then continue with the DSiWare Downgrade

## <a name="ts_d9_backup" />Decrypt9 or Hourglass9 won't restore / can't find my NAND backup

  1. Make sure you do not have any folder named "Decrypt9" on **the root** of your SD card
  2. Try checking your SD card for errors using [H2testw (Windows)](h2testw-(windows)), [F3 (Linux)](f3-(linux)), or [F3X (Mac)](f3x-(mac))
  3. Try backing up your SD card files, then formatting it and copying them back
  4. Try a different SD card

## <a name="ts_sys_down" />Black screen on SysNAND boot

  1. Try booting with your SD card out, and then reinserting it after booting. 
      1. Power off your 3DS by holding down the power button.
      2. Take out the SD card.
      3. Power on the 3DS.
      4. When the home menu appears, reinsert your SD card.
      5. If this worked, you should Clear Home Menu's extdata by navigating to the following folder on your SD card: `/Nintendo 3DS/(32 Character ID)/(32 Character ID)/extdata/00000000/` 
        * EUR Region: Delete `00000098`
        * JPN Region: Delete `00000082`
        * USA Region: Delete `0000008f`
        * KOR Region: Delete `000000A9`
  2. Try booting without any cartridges inserted (including flashcarts)
  3. If you have a hardmod and a NAND backup, flash the backup back to SysNAND.
  4. Try booting into recovery mode and updating your system.  
    *This probably will not work for an Old 3DS downgraded to 2.1.0*  
    **This will BRICK a New 3DS downgraded to 2.1.0** 
      1. Power off your 3DS by holding down the power button.
      2. Hold L+R+A+Up.
      3. Power on the 3DS.
      4. If you enter safe mode, update your 3DS *only if you have an entrypoint for the latest FW version and it is possible to downgrade from it* and attempt the downgrade again.
  5. Your 3DS may be bricked. For support, ask for help at [#3dshacks on Rizon IRC](https://www.reddit.com/r/3dshacks/wiki/irc) or [3DS Hacking on Discord](https://discord.gg/MWxPgEp).

## <a name="ts_sys_a9lh" />Black screen on SysNAND boot after installing arm9loaderhax

  1. Ensure you have a working payload. 
      1. Check for the existence of `arm9loaderhax.bin` in the root of your SD card.
  2. Try resetting Luma's config and fix options 
      1. Delete `/luma/config.bin` from your SD card
      2. Set your options when it boots
  3. Test booting Hourglass9 
      1. On Luma3DS, hold (Start) on boot
  4. Try deleting home menu's extdata 
      1. Clear Home Menu's extdata by navigating to the following folder on your SD card: `/Nintendo 3DS/(32 Character ID)/(32 Character ID)/extdata/00000000/` 
        * EUR Region: Delete `00000098`
        * JPN Region: Delete `00000082`
        * USA Region: Delete `0000008f`
        * KOR Region: Delete `000000A9`
  5. Try booting without any cartridges inserted (including flashcarts)
  6. If you previously downgraded with Gateway, ensure that you are using the latest Luma3DS version (v6.2.3 or higher, at the least)
  7. If your NAND is of a version between 3.0.0 and 4.5.0, do the following: 
    * Ensure that you are using the latest Luma3DS version (v6.6 or higher, at the least)
    * Download [this file](http://nus.cdn.c.shop.nintendowifi.net/ccs/download/0004013800000002/00000056) and rename it to `firmware.bin`
    * Download [this file](http://nus.cdn.c.shop.nintendowifi.net/ccs/download/0004013800000002/cetk)
    * Copy `firmware.bin` and `cetk` to the `/luma/` folder on your SD card
    * Delete both of these files after updating your 3DS
  8. Try following [9.2.0 ctrtransfer](9.2.0-ctrtransfer)
  9. Ask for help at [#3dshacks on Rizon IRC](https://www.reddit.com/r/3dshacks/wiki/irc) or [3DS Hacking on Discord](https://discord.gg/MWxPgEp).

## <a name="ts_sys_blue" />Blue screen on boot (bootrom error)

  1. Your 3DS is bricked
  2. You will need to get a [hardmod](https://gbatemp.net/threads/414498/) or repair / replace the device