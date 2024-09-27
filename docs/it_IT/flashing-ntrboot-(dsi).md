# Flash di ntrboot (DSi)

## Required Reading

Prima di procedere, assicurati di aver letto tutte le informazioni presenti alla pagina [ntrboot](ntrboot)

Questo metodo richiede momentaneamente l'utilizzo di un Nintendo DSi compatibile con la tua flashcart. La flashcart verrà utilizzata per avviare il file `.nds` del flasher di ntrboot sul tuo DSi. Ciò significa che la tua flashcart deve supportare l'avvio di file `.nds` sulla versione di sistema del tuo DSi. Leggi la tabella delle flashcart sulla pagina di [ntrboot](ntrboot) per maggiori informazioni.

::: danger

Tieni presente che in rare circostanze è possibile **brickare** una flashcart contraffatta durante il flashing, e renderla permanentemente inutilizzabile. È improbabile, tuttavia sono supportate soltanto le flashcart originali qui indicate. Per ridurre il rischio di ottenere una flashcart contraffatta, si raccomanda di comprarne una solo da siti affidabili (come [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two consoles
  - **The source DSi**: the Nintendo DSi which is compatible with your flashcart
  - **The target 3DS**: the 3DS family console on stock firmware
- The latest release of [ds_ntrboot_flasher](https://github.com/ntrteam/ds_ntrboot_flasher/releases/latest) (`ds_ntrboot_flasher_dsi.nds`)

## Instructions

### Section I - Prep Work

1. Spegni il **DSi di partenza**
2. Inserisci la scheda SD della flashcart nel tuo computer
3. Copia il file `ds_ntrboot_flasher_dsi.nds` nella scheda SD della tua flashcart
4. Reinserisci la scheda SD nella flashcart
5. Inserisci la flashcart DS / DSi compatibile con ntrboot nel **DSi di partenza**

### Section II - Flashing ntrboot

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

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
