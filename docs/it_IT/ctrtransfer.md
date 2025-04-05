# CTRTransfer

## Lettura necessaria

In questa sezione aggiuntiva verrà spiegato come installare un'immagine CTRTransfer 11.15.0 sulla tua console.

::: info

Questa pagina presuppone che tu abbia già installato Luma3DS e boot9strap. Se hai seguito questo sito web fino alla fine (Completamento dell'installazione), hai Luma3DS e boot9strap.

:::

::: warning

Come parte di questo processo, la configurazione di sistema verrà ripristinata ai valori predefiniti. Questo include dati come il tuo nome utente, il paese e la lingua. **I giochi installati e i loro dati di salvataggio non verranno toccati.**

:::

## Cosa serve

- L'ultima versione di [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (il file `.zip` di GodMode9)
- L'ultima versione di [FBI](https://github.com/nh-server/FBI-NH/releases/download/2.6.1/FBI.3dsx) (download diretto)
- L'ultima versione di [faketik](https://github.com/ihaveamac/faketik/releases/latest) _(il file `.3dsx`)_
- L'ultima versione di [ctrtransfer.gm9](https://raw.githubusercontent.com/nh-server/scripts/refs/heads/main/3DS/ctrtransfer.gm9) (clicca con il tasto destro del mouse, salva il link come)
- L'immagine CTRTransfer 11.15.0 relativa alla tua console e alla sua regione

    ::: warning

    Per scaricare le immagini CTRTransfer è necessario utilizzare un client torrent come [qBitTorrent](https://www.qbittorrent.org/download) o [Deluge](https://deluge-torrent.org/download/).

    :::

<!--@include: ./_include/ctrtransfer-images.md -->

## Istruzioni

### Sezione I - Preparazione

<!--@include: ./_include/ctrtransfer-prep.md -->

### Sezione II - Backup della NAND

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9

<!--@include: ./_include/nand-backup.md -->

### Sezione III - CTRTransfer

<!--@include: ./_include/ctrtransfer-main.md -->

### Sezione IV - Avviare FBI

<!--@include: ./_include/launch-hbl-dlp.md -->

### Sezione V - Ripristino dei ticket

<!--@include: ./_include/ctrtransfer-ticket-copy.md -->

### Sezione VI - Risoluzione dei problemi di regionalità

<!--@include: ./_include/ctrnand-datayeet.md -->

___

::: tip

Prosegui con il [Completamento dell'installazione](finalizing-setup)

:::
