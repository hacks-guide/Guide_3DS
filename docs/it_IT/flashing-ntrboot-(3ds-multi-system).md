# Flash di ntrboot (Con più 3DS)

## Required Reading

Prima di procedere, assicurati di aver letto tutte le informazioni su [ntrboot](ntrboot).

Questo metodo richiede l'accesso temporaneo ad una seconda console su cui è installato boot9strap. Non è necessario che la tua flashcart supporti la versione di sistema di uno dei 3DS.

::: danger

Tieni presente che in rare circostanze è possibile **brickare** una flashcart contraffatta durante il flashing, e renderla permanentemente inutilizzabile. È improbabile, tuttavia sono supportate soltanto le flashcart originali qui indicate. Per ridurre il rischio di ottenere una flashcart contraffatta, si raccomanda di comprarne una solo da siti affidabili (come [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two 3DS family consoles
  - **The source 3DS**: the 3DS family console that is already running boot9strap
  - **The target 3DS**: the 3DS family console on stock firmware
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher](https://github.com/ntrteam/ntrboot_flasher/releases/latest) (`ntrboot_flasher.firm`)

## Instructions

### Section I - Prep Work

1. Spegni il **3DS di partenza**
2. Inserisci la scheda SD del **3DS di partenza** nel tuo computer
3. Crea una cartella chiamata `ntrboot` nella directory principale della tua scheda SD
4. Copia i file `boot9strap_ntr.firm` e `boot9strap_ntr.firm.sha` dall'archivio `.zip` di boot9strap ntr nella cartella `/ntrboot/` della tua scheda SD
5. Copia il file `ntrboot_flasher.firm` nella cartella `/luma/payloads` della scheda SD del **3DS di partenza**
6. Reinserisci la scheda SD del **3DS di partenza** nel **3DS di partenza**
7. Inserisci la flashcart DS / DSi compatibile con ntrboot nel **3DS di partenza**

### Section II - Flashing ntrboot

1. Avvia il chainloader Luma3DS tenendo premuto (Start) all'accensione del **3DS di partenza**
2. Seleziona "ntrboot_flasher"
3. Leggi l'avviso sulla schermata rossa
4. Premi il pulsante (A) per continuare
5. Seleziona la tua flashcart
   - If you do not see your flashcart in the list at the top, read the bottom screen for more info on each option
6. Seleziona "Dump Flash"
7. Attendi il termine del processo
8. Premi il pulsante (A) per continuare
9. Premi (A) per ritornare al menu principale
10. Seleziona "Inject Ntrboot"
11. Premi (A) per retail unit ntrboot
12. Attendi il termine del processo
13. Premi (A) per ritornare al menu principale
14. Premi (B) per spegnere il **3DS di partenza**

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
