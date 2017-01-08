* * *

title: "Updating A9LH" permalink: /updating-a9lh.html lang: en_US ref: updating-a9lh

* * *

### Letztes Update: 3. Nov. 2016

Die tatsächliche Installation des arm9loaderhax besteht aus payload Dateien die in die NFIRM Partitionen auf dem NAND Chip deiner Konsole installiert werden. Dieser ist auf der Hauptplatine verlötet. Diese payloads werden selten geupdated und dienen wirklich nur zum starten der `arm9loaderhax.bin` Datei von der SD-Karte. In unserem Fall handelt es sich dabei um Luma3DS. {: .notice}

Wenn du nicht weißt welche Version des arm9loaderhax du verwendest, installiere einfach die aktuellste mit Hilfe dieser Schritte. Das Installieren der aktuellsten Version, wenn diese bereits vorhanden ist, hat keinerlei Auswirkungen. {: .notice--info}

Wenn du in Luma einen PIN festgelegt hast, musst du ihn für die folgenden Schritte deaktivieren. Du kannst ihn nach dem Update erneut einrichten.{: .notice--info}

Wenn du eine payload benutzt die das Display nicht selber starten kann (wie Bootanim9), musst du sie umbenennen in `arm9loaderhax_si.bin` statt `arm9loaderhax.bin` {: .notice--info}

Die Versionen der data_input Datei beziehen sich nur auf Änderungen an der `.zip` Datei selbst um mit den unterschiedlichen Versionen des Installers kompatibel zu sein. Sie haben *nichts* mit dem Update des A9LH an sich zutun ( die payload Dateien). Sie machen über den Installationsprozess hinaus keinen Unterschied. {: .notice--info}

Die folgenden Schritte werden zudem einige payloads und die AES Key Database aktualisieren.{: .notice--success}

#### Was du brauchst

* [`aeskeydb.bin`](magnet:?xt=urn:btih:18b3a17f78e2376e05feaa150749d9fd689b25dc&dn=aeskeydb.bin&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* [`data_input_v4.zip`](magnet:?xt=urn:btih:00f03ff69b5961307303d5e4778a2f65a528bf2d&dn=data%5Finput%5Fv4.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* Die aktuellste Version von [Luma3DS](https://github.com/AuroraWright/Luma3DS/releases/latest) *(die `.7z` Datei)*
* Die aktuellste Version von [arm9loaderhax](https://github.com/AuroraWright/arm9loaderhax/releases/latest) *(die `.7z` Datei)*
* Die aktuellste Version von [SafeA9LHINstaller](https://github.com/AuroraWright/SafeA9LHInstaller/releases/latest) *(die `.7z` Datei)*
* Die aktuellste Version von [Hourglass9](https://github.com/d0k3/Hourglass9/releases/latest)

#### Anleitung

**ÜBERSCHREIBE für die folgenden Schritte alle vorhandenen Dateien auf deiner SD-Karte.**

##### Abschnitt 1 - Vorbereitung

  1. Lösche `aeskeydb.bin` aus dem Hauptverzeichnis deiner SD-Karte
  2. Lösche den `a9lh` Ordner aus dem Hauptverzeichnis deiner SD-Karte, wenn vorhanden
  3. Kopiere `aeskeydb.bin` in den `/files9/` Ordner auf deiner SD-Karte
  4. Kopiere `Hourglass9.bin` aus der Hourglass9 `.zip` in den `/luma/payloads/` Ordner auf deiner SD-Karte und benenne `Hourglass9.bin` um in `start_Hourglass9.bin`
  5. Kopiere `arm9loaderhax.bin` aus der SafeA9LHInstaller `.zip` in den `/luma/payloads/`Ordner auf deiner SD-Karte
  6. Benenne `arm9loaderhax.bin` aus `/luma/payloads/` um in `down_safea9lhinstaller.bin`
  7. Copy the `a9lh` folder from `data_input_v4.zip` to the root of your SD Card
  8. Copy *the contents of* the arm9loaderhax `.zip` to `a9lh` folder on your SD card
  9. Copy `arm9loaderhax.bin` from the Luma3DS `.zip` to the root of your SD card, overwrite existing files
 10. Reinsert your SD card into your 3DS

##### Section II - Payload update

  1. Boot the device while holding D-Pad down
  2. Press (Select) to update arm9loaderhax
  3. Power off the device and put your SD card back in your computer
  4. Delete the `a9lh` folder from the root of your SD card
  5. Delete `down_safea9lhinstaller.bin` from `/luma/payloads/`

##### Section III - Configuring Luma3DS

  1. Reinsert your SD card into your 3DS and boot holding (Select)
  2. Use the (A) button and the D-Pad to turn on the following:  
    * **"Autoboot SysNAND"**
    * **"Use SysNAND FIRM if booting with R"**
    * **"Show NAND or user string in System Settings"**
  3. If you are using a **New 3DS**, you should *also* enable the following: 
    * **"New 3DS CPU" to "Clock+L2(x)"**
    * This will increase the framerate of many games, but may cause instability in others
    * If some games do not work properly, disable this option and try again
  4. Press Start to save and reboot

##### Section IV - CTRNAND Luma3DS

  1. Open FBI
  2. Select "SD"
  3. Navigate to `arm9loaderhax.bin`, then press (A) on it and select the "Copy" option
  4. Return to the FBI main menu with (B)
  5. Select "CTR NAND"
  6. Select "\<current directory>"
  7. Select the "Paste" option, then press (A) to confirm
  8. Exit with the home button
  9. Power off your 3DS and remove the SD card
 10. Boot with the SD card removed while holding (Select) 
    * Booting the device at least once with the SD card removed will allow you to configure the CTRNAND based luma installation
 11. Use the (A) button and the D-Pad to turn on the following:  
    * **"Show NAND or user string in System Settings"**
 12. If you are using a **New 3DS**, you should *also* enable the following: 
    * **"New 3DS CPU" to "Clock+L2(x)"**
    * This will increase the framerate of many games, but may cause instability in others
    * If some games do not work properly, disable this option and try again
 13. Reinsert your SD card, then press Start to save and reboot!