---
title: "CTRTransfer"
---

{% include toc title="Indice" %}

### Lettura necessaria

In questa sezione aggiuntiva verrà spiegato come installare un'immagine CTRTransfer 11.15.0 sulla tua console.

Questa pagina presuppone che tu abbia già installato Luma3DS e boot9strap. Se hai seguito questo sito web fino alla fine (Completamento dell'installazione), hai Luma3DS e boot9strap.
{: .notice--info}

Come parte di questo processo, la configurazione di sistema verrà ripristinata ai valori predefiniti. Questo include dati come il tuo nome utente, il paese e la lingua. **I giochi installati e i loro dati di salvataggio non verranno toccati.**
{: .notice--warning}

### Cosa serve

* L'ultima versione di [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (il file `.zip` di GodMode9)
* L'ultima versione di [FBI](https://github.com/lifehackerhansol/FBI/releases/download/2.6.1/FBI.3dsx) (direct download)
* L'ultima versione di [faketik](https://github.com/ihaveamac/faketik/releases/latest) *(il file `.3dsx`)*
* Un client torrent come [qBittorrent](https://www.qbittorrent.org/download.php) o [Deluge](http://dev.deluge-torrent.org/wiki/Download)
    * Se hai già un client torrent, non occorre scaricarne uno nuovo
* L'immagine CTRTransfer 11.15.0 relativa alla tua console e alla sua regione:
{% include_relative include/ctrtransfer-images.txt %}

### Istruzioni

#### Sezione I - Preparazione

{% include_relative include/ctrtransfer-prep.txt %}

#### Sezione II - Backup della NAND

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
{% include_relative include/nand-backup.txt %}

#### Sezione III - CTRTransfer

{% include_relative include/ctrtransfer-main.txt %}

#### Sezione IV - Avviare FBI

{% include_relative include/launch-hbl-dlp.txt %}

#### Sezione V - Ripristino dei Ticket

{% include_relative include/ctrtransfer-ticket-copy.txt %}

#### Sezione VI - Risoluzione dei problemi di regionalità

{% include_relative include/ctrnand-datayeet.txt %}

___

### Prosegui con il [Completamento dell'installazione](finalizing-setup)
{: .notice--primary}
