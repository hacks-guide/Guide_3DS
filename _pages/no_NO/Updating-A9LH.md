* * *

title: "Updating A9LH" permalink: /updating-a9lh.html lang: en_US ref: updating-a9lh

* * *

### Siste oppdatering: 3. Nov 2016

Selve installasjonen av arm9loaderhax består av nyttelast filer som blir installert på NFIRM partisjonen av konsollens NAND brikke, som er loddet på selve hovedkortet. Disse nyttelastene oppdateres sjeldent å brukes bare til å starte `arm9loaderhax.bin` fra SD-kortet, som i vårt tilfelle er Luma3DS. {: .notice}

Hvis du ikke vet hvilke versjon av arm9loaderhax du kjører kan du bare laste ned den nyeste versjonen med disse trinnene. Å installere nyeste versjon mens du allerede bruker nyeste versjon har ingen innvirkninger. {: .notice--info}

Hvis du har satt en PIN-kode på Luma må du midlertidig deaktivere den for å følge disse trinnene. Du kan aktivere PIN-koden igjen etter oppdateringen. {: .notice--info}

Hvis du bruker en nyttelast som ikke slår på skjermen av seg selv (som f.eks. Bootanim9) er det anbefales det på det sterkeste at du endrer navn til `arm9loaderhax_si.bin` i stedet for `arm9loaderhax.bin` {: .notice--info}

Versjonen av data_input refereres bare til revisjonen av `.zip`-filen for å være kompatibel med andre installasjonversjoner og er *ikke* det samme som å oppdatere a9lh i og for seg selv (nyttelast filene). Utenfor installasjonprosessen spiller det praktisk talt ingen rolle. {: .notice--info}

Disse trinnene vil også oppdatere dine ulike nyttelastene og AES nøkkel databasen. {: .notice--success}

#### Det du trenger

* [`aeskeydb.bin`](magnet:?xt=urn:btih:18b3a17f78e2376e05feaa150749d9fd689b25dc&dn=aeskeydb.bin&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* [`data_input_v4.zip`](magnet:?xt=urn:btih:00f03ff69b5961307303d5e4778a2f65a528bf2d&dn=data%5Finput%5Fv4.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* Siste utgave av [Luma3DS](https://github.com/AuroraWright/Luma3DS/releases/latest) *(`.7z` filen)*
* Siste utgave av [arm9loaderhax](https://github.com/AuroraWright/arm9loaderhax/releases/latest) *(`.7z` filen)*
* Siste utgave av[SafeA9LHInstaller](https://github.com/AuroraWright/SafeA9LHInstaller/releases/latest) *(`.7z` filen)*
* Siste utgave av [Hourglass9](https://github.com/d0k3/Hourglass9/releases/latest)

#### Instruksjoner

**For alle disse instruksjonene OVERSKRIV alle eksisterende filer på SD-kortet.**

##### Seksjon I - Forarbeid

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

##### Seksjon II - Oppdatering av nyttelast "Payload"

  1. Hold (Ned)-knappen og start konsollen
  2. Trykk (Select) for å oppdatere arm9loaderhax
  3. Slå av enheten, og sett inn SD-kortet i datamaskinen
  4. Slett `a9lh` mappen i fra roten av SD-kortet
  5. Slett `down_safea9lhinstaller.bin` fra `/luma/payloads/`

##### Seksjon III - Konfigurering av Luma3DS

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

##### Seksjon IV - CTRNAND Luma3DS

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