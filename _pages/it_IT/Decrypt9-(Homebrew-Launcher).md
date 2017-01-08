* * *

title: "Decrypt9 (Homebrew Launcher)" permalink: /decrypt9-(homebrew-launcher).html lang: en_US ref: decrypt9-(homebrew-launcher)

* * *

A causa di un bug, safehax richiede la presenza di una cartuccia avviabile (3ds, nds, flashcart, ecc) per poter essere eseguito con successo. Come workaround temporaneo, gli utenti con versione minore o uguale a 9.2.0 che non posseggono alcuna cartuccia possono copiare il file `Decrypt9WIP.3dsx` nella cartella `/3ds/` e avviarlo direttamente senza alcun hax di supporto. {: .notice--info}

#### Requisiti

* L'ultima release di [Decrypt9WIP](https://github.com/d0k3/Decrypt9WIP/releases/latest/)
* L'ultima fork di [safehax+fasthax](https://gbatemp.net/attachments/safehax-fasthax-cb6a1bc-zip.73592/)

#### Istruzioni

  1. Se non esiste, crea una cartella chiamata `files9` nella root della tua scheda SD
  2. Copia il contenuto del file safehax+fasthax `.zip` nella root della tua scheda SD, sovrascrivendo eventuali file preesistenti
  3. Copia il file `Decrypt9WIP.bin` dal file Decrypt9WIP `.zip` nella root della tua scheda SD e rinomina `Decrypt9WIP.bin` in `arm9.bin`
  4. Reinserisci la tua scheda SD nel tuo 3DS
  5. Avvia l'homebrew launcher
  6. Avvia safehax
  7. Se l'exploit viene eseguito correttamente, verrà avviato Decrypt9

Prosegui con il [ctrtransfer 2.1.0](2.1.0-ctrtransfer)  
{: .notice--primary}