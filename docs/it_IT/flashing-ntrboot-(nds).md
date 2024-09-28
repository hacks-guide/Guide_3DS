# Flash di ntrboot (NDS)

## Lettura necessaria

Prima di procedere, assicurati di aver letto tutte le informazioni presenti alla pagina [ntrboot](ntrboot)

Questo metodo richiede momentaneamente l'utilizzo di un Nintendo DS o DS Lite compatibile con la tua flashcart. La flashcart verrà utilizzata per avviare il file `.nds` del flasher di ntrboot sul tuo NDS.

::: danger

Tieni presente che in rare circostanze è possibile **brickare** una flashcart contraffatta durante il flashing, e renderla permanentemente inutilizzabile. È improbabile, tuttavia sono supportate soltanto le flashcart originali qui indicate. Per ridurre il rischio di ottenere una flashcart contraffatta, si raccomanda di comprarne una solo da siti affidabili (come [NDS Card](https://www.nds-card.com/)).

:::

## Cosa serve

- La tua flashcart compatibile con ntrboot
- Due console
  - **Il NDS / NDSL di partenza**: il Nintendo DS o Nintendo DS Lite compatibile con la tua flashcart
  - **Il 3DS di destinazione**: la console della famiglia 3DS con versione del software originale
- La versione v1.3 di [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (download diretto)
- L'ultima versione di [ntrboot_flasher_nds](https://github.com/jason0597/ntrboot_flasher_nds/releases/latest) (`ntrboot_flasher_nds.nds`)

## Istruzioni

### Sezione I - Preparazione

1. Spegni il **NDS / NDSL di partenza**
2. Inserisci la scheda SD della flashcart nel tuo computer
3. Crea una cartella chiamata `ntrboot` nella directory principale della scheda SD della tua flashcart
4. Copia il file `bootstrap_ntr.firm` dall'archivio `.zip` di boot9strap ntr nella cartella `/ntrboot/` della scheda SD della tua flashcart
5. Copia il file `ntrboot_flasher_nds.nds` nella scheda SD della tua flashcart
6. Reinserisci la scheda SD nella flashcart
7. Inserisci la flashcart DS / DSi compatibile con ntrboot nel **NDS / NDSL di partenza**

### Sezione II - Installare ntrboot

1. Avvia il file `ntrboot_flasher_nds.nds` sul **NDS / NDSL di partenza** tramite la flashcart
2. Premi il pulsante (A) per continuare
3. Usa i pulsanti (Su) e (Giù) per selezionare la tua flashcart
4. Premi il pulsante (A) per continuare
5. Seleziona "Dump flash" per creare un backup della memoria interna della tua flashcart
6. Inserisci la combinazione di tasti richiesta a schermo per confermare l'operazione
7. Premi il pulsante (A) per continuare
8. Usa i pulsanti (Su) e (Giù) per selezionare la tua flashcart
9. Premi il pulsante (A) per continuare
10. Seleziona "Inject FIRM" per installare boot9strap sulla tua flashcart
11. Inserisci la combinazione di tasti richiesta a schermo per confermare l'operazione
12. Premi il pulsante (A) per continuare
13. Spegni il **NDS / NDSL di partenza**
14. Rimuovi la flashcart dal **NDS / NDSL di partenza**

___

::: tip

Prosegui con l'[Installazione di boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
