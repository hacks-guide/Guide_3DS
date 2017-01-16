* * *

title: "Decrypt9 (MSET)" permalink: /decrypt9-(mset).html lang: en_US ref: decrypt9-(mset)

* * *

La prima cosa che questa guida ti permetterà di fare è avviare Decrypt9, un programma multifunzione che ci permetterà di installare la versione 2.1.0, che contiene una vulnerabilità che è necessaria per modificare ulteriormente il dispositivo. {: .notice}

Se hai già modificato il tuo 3DS in passato e hai un CFW basato su una EmuNAND, questa guida si svolge interamente sulla SysNAND e quindi dovresti svolgere tutto il procedimento su di essa. I termini EmuNAND e RedNAND si riferiscono ad un'interpretazione leggermente diversa dello [stesso concetto](http://3dbrew.org/wiki/NAND_Redirection). {: .notice--info}

#### Requisiti

* Una flashcard per il Nintendo DS che funziona sulla tua versione del 3DS
* L'ultima release di [Decrypt9WIP](https://github.com/d0k3/Decrypt9WIP/releases/)

#### Istruzioni

  1. Se non esiste, crea una cartella chiamata `files9` nella root della tua scheda SD
  2. Copia il file `Launcher.dat` e il file `Decrypt9WIP.dat` dall'archivio `.zip` di Decrypt9WIP nella root della scheda SD
  3. Reinserisci la tua scheda SD nel tuo 3DS
  4. Metti il file `Decrypt9.nds` dall'archivio `.zip` di Decrypt9WIP sulla tua flashcard DS
  5. Avvia la flashcard DS dal tuo 3DS
  6. Avvia `Decrypt9.nds` dalla flashcard
  7. Seleziona l'opzione corretta per la tua versione di sistema 
    * 4.X.X -> "4.x Decrypt9WIP"
    * 6.X.X -> "6.x Decrypt9WIP"
  8. Riavvia il sistema, poi vai alle "Impostazioni della console", quindi in "Impostazioni Generali", poi in "Profilo" ed infine in "Profilo Nintendo DS"
  9. Se l'exploit viene eseguito correttamente, verrà avviato Decrypt9

Prosegui con il [ctrtransfer 2.1.0](2.1.0-ctrtransfer) {: .notice--primary}