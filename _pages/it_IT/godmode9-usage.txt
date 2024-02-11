---
title: "Usare GodMode9"
---

{% include toc title="Indice" %}

Per informazioni su come estrarre cartucce o il contenuto della scheda SD, guarda [Dump di titoli e schede di gioco](dumping-titles-and-game-cartridges).
{: .notice--info}

Per ricevere supporto su GodMode9, aiuto per gli script e informazioni sugli ultimi aggiornamenti, entra nel [server Discord di GodMode9](https://discord.gg/BRcbvtFxX4) (in Inglese).
{: .notice--primary}

### Lettura necessaria

GodMode9 è un file browser per il Nintendo 3DS che dà pieno accesso ai file sulla tua scheda SD, ai file delle partizioni FAT della SysNAND e della EmuNAND, e a molto altro ancora. Tra le varie funzioni, puoi anche copiare, cancellare, rinominare file e creare cartelle.

Tieni presente che se hai altri file payload oltre a `GodMode9.firm` nella cartella `/luma/payloads/` della tua scheda SD, per seguire le istruzioni riportate dovrai avviare la console tenendo (Start); apparirà un "menu chainloader" dove dovrai selezionare "GodMode9" tramite il D-Pad e il pulsante (A).

GodMode9 è un software potente che rende possibile la modifica di qualunque aspetto riguardante la tua console. Anche se la maggior parte delle modifiche sono bloccate da un sistema di permessi, ed è impossibile eseguire accidentalmente azioni pericolose senza sbloccare volutamente i permessi di scrittura, faresti meglio a seguire queste istruzioni con cautela e ad avere dei backup utilizzabili.

## Aggiornare GodMode9

Alcune delle istruzioni qui sotto riportate sono valide solo sull'ultima versione di GodMode9, perciò, prima di continuare, faresti meglio a seguire questa sezione per aggiornare GodMode9. Sovrascrivi qualunque file preesistente.
{: .notice--info}

### Cosa serve

* L'ultima versione di [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (il file `.zip` di GodMode9)

### Istruzioni

1. Spegni la tua console
1. Inserisci la scheda SD nel tuo computer
1. Copia il file `GodMode9.firm` dall'archivio `.zip` di GodMode9 dentro la cartella `/luma/payloads/` della tua scheda SD
1. Copia la cartella `gm9` presente nell'archivio `.zip` di GodMode9 nella directory principale della tua scheda SD
1. Reinserisci la scheda SD nella tua console

GodMode9 è ora aggiornato.
{: .notice--success}

## Creare un backup della NAND

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
{% include_relative include/nand-backup.txt %}

Il tuo backup NAND è stato creato con successo.
{: .notice--success}

## Ripristinare un backup della NAND

1. Spegni la tua console
1. Inserisci la scheda SD nel tuo computer
1. Copia il file `<data>_<codiceseriale>_sysnand_##.bin` dal tuo computer alla cartella `/gm9/out/` della scheda SD
1. Reinserisci la scheda SD nella tua console
1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
1. Premi il pulsante HOME per far apparire il menu delle azioni
1. Seleziona "Scripts..."
1. Seleziona "GM9Megascript"
1. Seleziona "Restore Options"
1. Seleziona "SysNAND Restore (safe)"
1. Seleziona il tuo backup della NAND
1. Premi il pulsante (A) per sbloccare i permessi di scrittura di terzo livello su SysNAND, quindi inserisci la combinazione di tasti richiesta a schermo
    + Questo processo **non** eliminerà boot9strap
    + Questo processo durerà un po'
1. Premi il pulsante (A) per continuare
1. Premi (B) per ritornare al menu principale
1. Seleziona "Exit"
1. Se richiesto, premi (A) per ritirare le autorizzazioni di scrittura

Il tuo backup NAND è stato ripristinato con successo. Ora puoi eliminare `<data>_<numeroseriale>_sysnand_###.bin` dalla tua scheda SD.
{: .notice--success}

## Iniettare un'app .CIA dentro "Informazioni per la salute e la sicurezza"

Tieni presente che non possibile iniettare dentro "Informazioni per la salute e la sicurezza" file che siano più grandi di quest'ultima (come giochi o altre applicazioni pesanti)
{: .notice--info}

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
1. Entra nella cartella `[0:] SDCARD` -> `cias`
1. Premi (A) sul tua `.cia` per selezionarlo
1. Seleziona "CIA image options..."
1. Seleziona "Mount image to drive"
1. Premi (A) sul file `.app`
1. Seleziona "NCCH image options"
1. Seleziona "Inject to H&S"
1. Premi il pulsante (A) per sbloccare i permessi di scrittura di primo livello su SysNAND, quindi inserisci la combinazione di tasti richiesta a schermo
1. Premi il pulsante (A) per continuare
1. Se richiesto, premi (A) per ritirare le autorizzazioni di scrittura

L'applicazione desiderata è stata ora iniettata in Informazioni per la salute e la sicurezza.
{: .notice--success}

## Ripristinare "Informazioni per la salute e la sicurezza" dopo aver iniettato un'app .CIA

Questo metodo funzionerà solo se l'inject di "Informazioni per la salute e la sicurezza" è stato eseguito con GodMode9 (e non con Decrypt9 o con Hourglass9).
{: .notice--info}

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
1. Premi il pulsante HOME per far apparire il menu delle azioni
1. Seleziona "More..."
1. Seleziona "Restore H&S"
1. Premi il pulsante (A) per sbloccare i permessi di scrittura di primo livello su SysNAND, quindi inserisci la combinazione di tasti richiesta a schermo
1. Se richiesto, premi (A) per ritirare le autorizzazioni di scrittura

Informazioni per la salute e la sicurezza è stato ripristinata alla normalità.
{: .notice--success}

## Formattare una scheda SD

**Questo procedimento cancellerà tutti i dati della tua scheda SD!**
{: .notice--danger}

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
1. Premi (R) + (B) per poter rimuovere la scheda SD e inserire quella che si desidera formattare
    + Se GodMode9 mostra un errore di inizializzazione all'inserimento della scheda SD da formattare, si può ignorare tranquillamente
{% include_relative include/format-sd-gm9.txt %}

La scheda SD è stata formattata con successo per essere utilizzata con la console.
{: .notice--success}

## Rimuovere un NNID senza formattare la console

Questo processo ti disconnetterà solo dal tuo NNID. Non sarà comunque possibile utilizzare il NNID su un'altra console, in quanto il NNID rimane collegato alla console.
{: .notice--info}

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
1. Premi il pulsante HOME per far apparire il menu delle azioni
1. Seleziona "Scripts..."
1. Seleziona "GM9Megascript"
1. Seleziona "Scripts from Plailect's Guide"
1. Seleziona "Remove NNID"
1. Premi il pulsante (A) per continuare
1. Premi il pulsante (A) per sbloccare i permessi di scrittura di primo livello su SysNAND, quindi inserisci la combinazione di tasti richiesta a schermo
1. Premi il pulsante (A) per continuare
1. Premi (B) per ritornare al menu principale
1. Seleziona "Exit"
1. Se richiesto, premi (A) per ritirare le autorizzazioni di scrittura
1. Premi (Start) per riavviare la tua console

Ora sei disconnesso dal tuo NNID.
{: .notice--success}
