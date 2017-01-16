* * *

title: "F3 (Linux)" permalink: /f3-(linux).html lang: en_US ref: f3-(linux)

* * *

Denne siden vil gå gjennom prosessen for å sjekke SD-kortet etter feil ved hjelp av F3. {: .notice}

Avhengig av størrelsen på SD-kortet og hastigheten på datamaskinen din, kan denne prosessen ta opptil flere timer! {: .notice--info}

Denne siden er for Linux-brukere. Hvis du ikke bruker Linux, sjekk ut disse sidene [H2testw (windows)](h2testw-(windows)) eller [F3X (mac)](f3x-(mac)). {: .notice--info}

#### Det du trenger

* Siste utgave av [F3](https://github.com/AltraMayor/f3/archive/v6.0.zip)

#### Instruksjoner

  1. Unzip f3 `zip`-filen
  2. `cd` til f3 mappen
  3. Kjør `make` for å kompilere F3
  4. Sett inn SD-kortet i datamaskinen din
  5. Mount SD-kortet
  6. Kjør `./f3write <ditt Sd-kort monteringspunkt>`
  7. Vent til prosessen er ferdig. Se eksempel under.
    
        $ ./f3write /media/michel/6135-3363/
        Free space: 29.71 GB
        Creating file 1.h2w ... OK!
        ...
        Creating file 30.h2w ... OK!
        Free space: 0.00 Byte
        Average Writing speed: 4.90 MB/s
        

  8. Kjør `./f3read <ditt Sd-kort monteringspunkt>`

  9. Vent til prosessen er ferdig. Se eksempel under.
    
        $ ./f3read /media/michel/6135-3363/
                          SECTORS      ok/corrupted/changed/overwritten
        Validating file 1.h2w ... 2097152/        0/      0/      0
        ...
        Validating file 30.h2w ... 1491904/        0/      0/      0
        
          Data OK: 29.71 GB (62309312 sectors)
        Data LOST: 0.00 Byte (0 sectors)
                   Corrupted: 0.00 Byte (0 sectors)
            Slightly changed: 0.00 Byte (0 sectors)
                 Overwritten: 0.00 Byte (0 sectors)
        Average Reading speed: 9.42 MB/s
        

Hvis testen viser resultatet `DATA LOST: 0.00 Byte (0 sectors)` er SD-kortet klart og du kan så slette alle `.h2w` filene på SD kortet {: .notice--success}

Hvis testen viser noe annet resultat kan det hende SD-kortet er korrupt eller skadet og du må kanskje bytte det!{: .notice--danger}

Gå tilbake til [Kom i Gang](get-started) {: .notice--primary}