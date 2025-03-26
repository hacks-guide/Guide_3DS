# Flash di ntrboot (Con più 3DS)

## Lettura necessaria

Prima di procedere, assicurati di aver letto tutte le informazioni su [ntrboot](ntrboot).

Questo metodo richiede l'accesso temporaneo ad una seconda console su cui è installato boot9strap. Non è necessario che la tua flashcart supporti la versione di sistema di uno dei 3DS.

::: danger

Tieni presente che in rare circostanze è possibile **brickare** una flashcart contraffatta durante il flashing, e renderla permanentemente inutilizzabile. È improbabile, tuttavia sono supportate soltanto le flashcart originali qui indicate. Per ridurre il rischio di ottenere una flashcart contraffatta, si raccomanda di comprarne una solo da siti affidabili (come [NDS Card](https://www.nds-card.com/)).

:::

## Cosa serve

- La tua flashcart compatibile con ntrboot
- Due console della famiglia 3DS
    - **Il 3DS di partenza**: la console della famiglia 3DS che ha già installato boot9strap
    - **Il 3DS di destinazione**: la console della famiglia 3DS con versione del software originale
- La versione v1.3 di [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (download diretto)
- L'ultima versione di [ntrboot_flasher](https://github.com/ntrteam/ntrboot_flasher/releases/latest) (`ntrboot_flasher.firm`)

## Istruzioni

### Sezione I - Preparazione

1. Spegni il **3DS di partenza**
2. Inserisci la scheda SD del **3DS di partenza** nel tuo computer
3. Crea una cartella chiamata `ntrboot` nella directory principale della tua scheda SD
4. Copia i file `boot9strap_ntr.firm` e `boot9strap_ntr.firm.sha` dall'archivio `.zip` di boot9strap ntr nella cartella `/ntrboot/` della tua scheda SD
5. Copia il file `ntrboot_flasher.firm` nella cartella `/luma/payloads` della scheda SD del **3DS di partenza**
6. Reinserisci la scheda SD del **3DS di partenza** nel **3DS di partenza**
7. Inserisci la flashcart DS / DSi compatibile con ntrboot nel **3DS di partenza**

### Sezione II - Installare ntrboot

1. Avvia il chainloader Luma3DS tenendo premuto (Start) all'accensione del **3DS di partenza**
2. Seleziona "ntrboot_flasher"
3. Leggi l'avviso sulla schermata rossa
4. Premi il pulsante (A) per continuare
5. Seleziona la tua flashcart
    - Se non vedi la tua flashcart sulla lista in cima, consulta lo schermo inferiore per avere maggiori informazioni su ogni opzione
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

Prosegui con l'[Installazione di boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
