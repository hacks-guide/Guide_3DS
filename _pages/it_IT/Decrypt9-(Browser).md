* * *

title: "Decrypt9 (Browser)" permalink: /decrypt9-(browser).html lang: en_US ref: decrypt9-(browser)

* * *

La prima cosa che questa guida ti permetterà di fare è avviare Decrypt9, un programma multifunzione che ci permetterà di installare la versione 2.1.0, che contiene una vulnerabilità che è necessaria per modificare ulteriormente il dispositivo. {: .notice}

Se hai già modificato il tuo 3DS in passato e hai un CFW basato su una EmuNAND, questa guida si svolge interamente sulla SysNAND e quindi dovresti svolgere tutto il procedimento su di essa. I termini EmuNAND e RedNAND si riferiscono ad un'interpretazione leggermente diversa dello [stesso concetto](http://3dbrew.org/wiki/NAND_Redirection). {: .notice--info}

#### Requisiti

* L'ultima release di [Decrypt9WIP](https://github.com/d0k3/Decrypt9WIP/releases/)

#### Istruzioni

  1. Se non esiste, crea una cartella chiamata `files9` nella root della tua scheda SD
  2. Copia il file `Launcher.dat` e il file `Decrypt9WIP.dat` dall'archivio `.zip` di Decrypt9WIP nella root della scheda SD
  3. Reinserisci la tua scheda SD nel tuo 3DS
  4. Apri il browser e apri uno dei seguenti URL sul tuo 3DS 
    * `https://dukesrg.github.io/?Decrypt9WIP.dat`
    * `http://go.gateway-3ds.com/`
    * `http://www.reboot.ms/3ds/load.html?Launcher.dat`
    * `http://dukesrg.dynu.net/3ds/rop?GW17567.dat&Launcher.dat`
    * Assicurati di provare ogni URL se il primo non ha funzionato (alcune versioni non riescono a caricare il primo, altre versioni non riescono a caricare i tre restanti)
    * Se ottieni un errore, [segui questa guida per risolvere il problema](troubleshooting#ts_browser)
  5. Se l'exploit viene eseguito correttamente, verrà avviato Decrypt9

Prosegui con il [ctrtransfer 2.1.0](2.1.0-ctrtransfer)  
{: .notice--primary}