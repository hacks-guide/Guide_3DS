# Flash di ntrboot (DSi)

## Lettura necessaria

Prima di procedere, assicurati di aver letto tutte le informazioni presenti alla pagina [ntrboot](ntrboot)

Questo metodo richiede momentaneamente l'utilizzo di un Nintendo DSi compatibile con la tua flashcart. La flashcart verrà utilizzata per avviare il file `.nds` del flasher di ntrboot sul tuo DSi. Ciò significa che la tua flashcart deve supportare l'avvio di file `.nds` sulla versione di sistema del tuo DSi. Leggi la tabella delle flashcart sulla pagina di [ntrboot](ntrboot) per maggiori informazioni.

::: danger

Tieni presente che in rare circostanze è possibile **brickare** una flashcart contraffatta durante il flashing, e renderla permanentemente inutilizzabile. È improbabile, tuttavia sono supportate soltanto le flashcart originali qui indicate. Per ridurre il rischio di ottenere una flashcart contraffatta, si raccomanda di comprarne una solo da siti affidabili (come [NDS Card](https://www.nds-card.com/)).

:::

## Cosa serve

- La tua flashcart compatibile con ntrboot
- Due console
    - **Il DSi di partenza**: il Nintendo DSi compatibile con la tua flashcart
    - **Il 3DS di destinazione**: la console della famiglia 3DS con versione del software originale
- L'ultima versione di [ds_ntrboot_flasher](https://github.com/ntrteam/ds_ntrboot_flasher/releases/latest) (`ds_ntrboot_flasher_dsi.nds`)

## Istruzioni

### Sezione I - Preparazione

1. Spegni il **DSi di partenza**
2. Inserisci la scheda SD della flashcart nel tuo computer
3. Copia il file `ds_ntrboot_flasher_dsi.nds` nella scheda SD della tua flashcart
4. Reinserisci la scheda SD nella flashcart
5. Inserisci la flashcart DS / DSi compatibile con ntrboot nel **DSi di partenza**

### Sezione II - Installare ntrboot

1. Avvia il file `ds_ntrboot_flasher_dsi.nds` sul **DSi di partenza** tramite la flashcart
2. Premi il pulsante (A) per continuare
3. Usa i pulsanti (Su) e (Giù) per selezionare la tua flashcart
4. Premi il pulsante (A) per continuare
5. Premi (A) a "inject ntrboothax"
6. Premi (A) per selezionare "RETAIL"
7. Premi il pulsante (A) per continuare
8. Seleziona "EXIT"

___

::: tip

Prosegui con l'[Installazione di boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
