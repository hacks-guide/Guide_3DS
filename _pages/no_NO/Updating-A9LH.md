* * *

title: "Updating A9LH" permalink: /updating-a9lh.html lang: en_US ref: updating-a9lh

* * *

### Siste oppdatering: 3. Nov 2016

The actual installation of arm9loaderhax itself consists of payload files installed into the NFIRM partitions on your device's NAND chip, which is soldered to the motherboard itself. These payloads are updated rarely and only really serve the purpose of launching `arm9loaderhax.bin` from the SD Card, which is, in our case, Luma3DS. {: .notice}

If you do not know what version of arm9loaderhax you are running, just install the latest version with these steps. Installing the latest version while already on the latest version will have no effect. {: .notice--info}

If you have a PIN set on Luma, you must temporarily turn it off to do these steps. You can re-enable the PIN after the update. {: .notice--info}

If you are using a payload that does not init the screen on its own (such as Bootanim9), you will need to rename it to `arm9loaderhax_si.bin` instead of `arm9loaderhax.bin` {: .notice--info}

The versions of data_input only refer to revisions of the `.zip` to be compatible with different installer versions, and are *not* the same thing as updating a9lh itself (the payload files). They make no practical difference beyond the installation process. {: .notice--info}

These steps will also update your various payloads and the AES key database. {: .notice--success}

#### Det du trenger

* [`aeskeydb.bin`](magnet:?xt=urn:btih:18b3a17f78e2376e05feaa150749d9fd689b25dc&dn=aeskeydb.bin&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* [`data_input_v4.zip`](magnet:?xt=urn:btih:00f03ff69b5961307303d5e4778a2f65a528bf2d&dn=data%5Finput%5Fv4.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* Siste utgave av [Luma3DS](https://github.com/AuroraWright/Luma3DS/releases/latest) *(`.7z` filen)*
* Siste utgave av [arm9loaderhax](https://github.com/AuroraWright/arm9loaderhax/releases/latest) *(`.7z` filen)*
* Siste utgave av[SafeA9LHInstaller](https://github.com/AuroraWright/SafeA9LHInstaller/releases/latest) *(`.7z` filen)*
* Siste utgave av [Hourglass9](https://github.com/d0k3/Hourglass9/releases/latest)

#### Instruksjoner

**For all of these instructions, OVERWRITE any existing files on your SD card.**

##### Section I - Prep work

  1. Slett alle eksisterende `aeskeydb.bin` fra roten av SD-kortet
  2. Slett `a9lh` mappen fra roten av SD-kortet
  3. Kopier `aeskeydb.bin` til `/files9/` mappen på SD-kortet
  4. Kopier `Hourglass9.bin` fra Hourglass9 `.zip` til `/luma/payloads/` mappen på SD-kortet, og endre navnet på `Hourglass9.bin` til `start_Hourglass9.bin`
  5. Kopier `arm9loaderhax.bin` fra SafeA9LHInstaller `.zip` til `/luma/payloads/` mappen på SD-kortet
  6. Endre navnet på filen `arm9loaderhax.bin` i `/luma/payloads/` til `down_safea9lhinstaller.bin`
  7. Kopier `a9lh` mappen fra `data_input_v4.zip` til roten av SD-kortet
  8. Kopier *innholdet av* arm9loaderhax `.zip` til `a9lh` mappen på SD-kortet
  9. Kopier `arm9loaderhax.bin` fra Luma3DS `.zip` til roten av SD-kortet, og erstatter eksisterende filer
 10. Sett inn SD-kortet i konsollen

##### Section II - Payload update

  1. Hold (Ned)-knappen og start konsollen
  2. Trykk (Select) for å oppdatere arm9loaderhax
  3. Slå av enheten, og sett inn SD-kortet i datamaskinen
  4. Slett `a9lh` mappen i fra roten av SD-kortet
  5. Slett `down_safea9lhinstaller.bin` fra `/luma/payloads/`

##### Section III - Configuring Luma3DS

  1. Sett SD-kortet inn i konsollen, hold (Select) og slå konsollen på
  2. Bruk (A)-knappen og piltastene for å aktivere følgende:  
    * **"Autoboot SysNAND"**
    * **"Use SysNAND FIRM if booting with R"**
    * **"Show NAND or user string in System Settings"**
  3. Hvis du bruker en **New 3DS**, bør du *også* aktivere følgende: 
    * **"New 3DS CPU" til "Clock+L2(x)"**
    * Dette vil øke ytelsen i mange spill, men kan også skape ustabilitet i andre
    * Hvis noen spill ikke fungerer som de skal, deaktiver dette alternativet å prøv igjen
  4. Trykk (Start) for å lagre og starte på nytt

##### Section IV - CTRNAND Luma3DS

  1. Åpne FBI
  2. Velg "SD"
  3. Gå til `arm9loaderhax.bin`, deretter trykk (A) og velg "Copy"
  4. Gå tilbake til hovedmenyen for FBI med (B)
  5. Velg "CTR NAND"
  6. Velg "\<current directory>"
  7. Velg alternativet "Paste", for å lime inn, og trykk (A) for å bekrefte
  8. Avslutt med hjem-knappen
  9. Skru av konsollen, og ta ut SD-kortet
 10. Hold (Select), og start konsollen uten SD-kortet 
    * Å starte konsollen minst en gang uten SD-kortet, lar deg konfigurere den CTRNAND-baserte Luma installasjonen
 11. Bruk (A)-knappen og piltastene for å aktivere følgende:  
    * **"Show NAND or user string in System Settings"**
 12. Hvis du bruker en **New 3DS**, bør du *også* aktivere følgende: 
    * **"New 3DS CPU" til "Clock+L2(x)"**
    * Dette vil øke ytelsen i mange spill, men kan også skape ustabilitet i andre
    * Hvis noen spill ikke fungerer som de skal, deaktiver dette alternativet å prøv igjen
 13. Sett inn SD-kortet, og trykk (Start) for å lagre og starte på nytt!