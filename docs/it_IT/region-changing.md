# Cambiare regione

## Lettura necessaria

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

- Non potrai utilizzare il tuo NNID (se ne hai uno). I NNID sono assegnati alla regione in cui sono stati creati.
- Potresti non essere in grado di accedere all'eShop, anche se [elimini il tuo account eShop](https://en-americas-support.nintendo.com/app/answers/detail/a_id/74/~/how-to-delete-a-nintendo-eshop-account). Questo accade perché alcuni titoli rimangono collegati al 3DS, anche dopo la cancellazione dell'account (specialmente su New 3DS).
    - È ancora rilevante perché, nonostante non si possano più fare acquisti nell'eShop, vengono ancora ancora forniti gli aggiornamenti dei giochi. Gli aggiornamenti possono fornire contenuti aggiuntivi o correggere i bug.
    - Questa logica si estende ai Trasferimenti dati, il che vuol dire che non puoi eseguire un Trasferimento dati da un 3DS USA ad un 3DS JPN la cui regionalità è stata cambiata in USA.
    - Anche Pokémon Bank richiede accesso all'eShop.
    - Detto questo, i Trasferimenti dati e gli aggiornamenti dei giochi sono comunque limitati dalla regionalità (es. l'eShop giapponese ha solo aggiornamenti per giochi giapponesi).
- **Non sarai in grado di disinstallare un custom firmware senza brickare la console!** Se hai intenzione di disinstallare il custom firmware in futuro, **DEVI** ripristinare il backup della NAND creato prima del cambiamento di regione.

:::

## Cosa serve

- L'ultima versione di [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (il file `.zip` di GodMode9)
- L'ultima versione di [FBI](https://github.com/nh-server/FBI-NH/releases/download/2.6.1/FBI.3dsx) (download diretto)
- L'ultima versione di [faketik](https://github.com/ihaveamac/faketik/releases/latest) _(il file `.3dsx`)_
- L'ultima versione di [ctrtransfer.gm9](https://raw.githubusercontent.com/nh-server/scripts/refs/heads/main/3DS/ctrtransfer.gm9) (clicca con il tasto destro del mouse, salva il link come)
- L'immagine CTRTransfer 11.15.0 per il tipo di console della regione a cui si desidera cambiare (ad esempio scarica "New 3DS or 2DS - USA" se hai un New 3DS e vuoi cambiare la tua regione in USA)

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

La regionalità del tuo 3DS è stata cambiata con successo!

:::
