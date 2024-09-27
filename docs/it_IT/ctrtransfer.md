# CTRTransfer

## Required Reading

In questa sezione aggiuntiva verrà spiegato come installare un'immagine CTRTransfer 11.15.0 sulla tua console.

::: info

Questa pagina presuppone che tu abbia già installato Luma3DS e boot9strap. Se hai seguito questo sito web fino alla fine (Completamento dell'installazione), hai Luma3DS e boot9strap.

:::

::: warning

Come parte di questo processo, la configurazione di sistema verrà ripristinata ai valori predefiniti. Questo include dati come il tuo nome utente, il paese e la lingua. **I giochi installati e i loro dati di salvataggio non verranno toccati.**

:::

## What You Need

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)
- The latest release of [FBI](https://github.com/lifehackerhansol/FBI/releases/download/2.6.1/FBI.3dsx) (direct download)
- The latest release of [faketik](https://github.com/ihaveamac/faketik/releases/latest) _(the `.3dsx` file)_
- A torrent client like [qBittorrent](https://www.qbittorrent.org/download.php) or [Deluge](http://dev.deluge-torrent.org/wiki/Download)
  - If you already have a torrent client, you do not need to download a new one
- The 11.15.0 CTRTransfer image for your console and region:

<!--@include: ./_include/ctrtransfer-images.md -->

## Instructions

### Section I - Prep Work

<!--@include: ./_include/ctrtransfer-prep.md -->

### Section II - NAND Backup

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9

<!--@include: ./_include/nand-backup.md -->

### Section III - CTRTransfer

<!--@include: ./_include/ctrtransfer-main.md -->

### Section IV - Launching FBI

<!--@include: ./_include/launch-hbl-dlp.md -->

### Section V - Reinstalling Tickets

<!--@include: ./_include/ctrtransfer-ticket-copy.md -->

### Section VI - Fixing locale-related issues

<!--@include: ./_include/ctrnand-datayeet.md -->

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
