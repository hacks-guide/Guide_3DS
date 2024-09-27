# Cambiare regione

## Required Reading

In questa sezione aggiuntiva verrà spiegato come cambiare regionalità sulla tua console. Per questo scopo, verrà eseguito un CTRTransfer alla versione 11.15.0 della regione alla quale si desidera passare. Dopo aver installato l'immagine, potrai aggiornare normalmente la console al firmware più recente (11.17.0).

Tuttavia, il cambio della regione è quasi completamente inutile in quanto Luma3DS supporta l'avvio di giochi di altre regioni e l'[Emulazione Regionale](https://github.com/LumaTeam/Luma3DS/wiki/Optional-features) su titoli individuali. Inoltre, è possibile avviare giochi NDS con lingue alternative [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases). Dovresti eseguire un cambio di regionalità solo se desideri che l'interfaccia utente del tuo sistema sia in una lingua non disponibile nella regione corrente della tua console.

::: info

Questa pagina presuppone che tu abbia già installato Luma3DS e boot9strap. Se hai seguito questo sito web fino alla fine (Completamento dell'installazione), hai Luma3DS e boot9strap.

:::

::: warning

Come parte di questo processo, la configurazione di sistema verrà ripristinata ai valori predefiniti. Questo include dati come il tuo nome utente, il paese e la lingua. **I giochi installati e i loro dati di salvataggio non verranno toccati.**

:::

::: danger

Se cambi la regione della tua console:

- You will not be able to use your NNID (if you have one). I NNID sono assegnati alla regione in cui sono stati creati.
- You may not be able to access the eShop, even if you [delete your eShop account](https://en-americas-support.nintendo.com/app/answers/detail/a_id/74/~/how-to-delete-a-nintendo-eshop-account) beforehand. Questo accade perché alcuni titoli rimangono collegati al 3DS, anche dopo la cancellazione dell'account (specialmente su New 3DS).
  - This is still relevant because, while purchases can no longer be made on eShop, game updates are still being provided. Gli aggiornamenti possono fornire contenuti aggiuntivi o correggere i bug.
  - This logic extends to system transfers, meaning you would not be able to perform a system transfer from a USA 3DS to a region-changed JPN-to-USA 3DS.
  - Pokémon Bank also requires working eShop access.
  - That being said, system transfer and game updates are region locked anyway (e.g. Japanese eShop only has Japanese game updates).
- **You will not be able to uninstall custom firmware without bricking the console!** If you intend to uninstall custom firmware in the future, you **MUST** restore your NAND backup that was created before the region change.

:::

## What You Need

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)
- The latest release of [FBI](https://github.com/lifehackerhansol/FBI/releases/download/2.6.1/FBI.3dsx) (direct download)
- The latest release of [faketik](https://github.com/ihaveamac/faketik/releases/latest) _(the `.3dsx` file)_
- A torrent client like [qBittorrent](https://www.qbittorrent.org/download.php) or [Deluge](http://dev.deluge-torrent.org/wiki/Download)
  - If you already have a torrent client, you do not need to download a new one
- The 11.15.0 CTRTransfer image for your console type of the region that you want to change to (e.g. Download "New 3DS or 2DS - USA" if you have a New 3DS and want to change your region to USA)

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

La regionalità del tuo 3DS è stata cambiata con successo!

:::
