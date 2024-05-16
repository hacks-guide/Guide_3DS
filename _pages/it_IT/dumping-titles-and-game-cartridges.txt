---
title: "Dump di titoli e schede di gioco"
---

{% include toc title="Indice" %}

Per ricevere supporto su GodMode9, aiuto per gli script e informazioni sugli ultimi aggiornamenti, entra nel [server Discord di GodMode9](https://discord.gg/BRcbvtFxX4) (in Inglese).
{: .notice--primary}

### Lettura necessaria

Oltre a creare e ripristinare backup NAND, GodMode9 ha la funzionalità di trasformare i titoli installati in un file `.cia` installabile, convertire i dati di una cartuccia di gioco in un file ROM `.3ds`, e installare direttamente una cartuccia di gioco nel sistema.

## Aggiornare GodMode9

Queste istruzioni fanno riferimento a GodMode9 v2.0.0 o successivi. Se hai una versione più vecchia di GodMode9, segui queste istruzioni per aggiornarla.
{: .notice--info}

### Cosa serve

* L'ultima versione di [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (il file `.zip` di GodMode9)

### Istruzioni

1. Spegni la tua console
1. Inserisci la scheda SD nel tuo computer
1. Copia il file `GodMode9.firm` dall'archivio `.zip` di GodMode9 dentro la cartella `/luma/payloads/` della tua scheda SD
1. Copia la cartella `gm9` presente nell'archivio `.zip` di GodMode9 nella directory principale della tua scheda SD
1. Reinserisci la scheda SD nella tua console

## Creare un backup di una Scheda di Gioco

{% capture notice %}
Inserisci nella console la scheda di gioco del quale vuoi creare un backup
+ Le schede di gioco 3DS verranno salvate nel formato `.3ds`
+ Le schede di gioco NDS verranno salvate nel formato `.nds`
{% endcapture %}

<div class="notice--info">{{ notice | markdownify }}</div>

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
1. Entra in `[C:] GAMECART`
1. Segui i passaggi corretti per la tua scheda di gioco:
    + **Scheda di gioco 3DS:** Premi (A) su `[TitleID].trim.3ds` per selezionarlo
    + **Scheda di gioco NDS:** Premi (A) su `[TitleID].nds` per selezionarlo
        + I dump trimmati non sono consigliati per i giochi NDS in generale, in quanto possono causare problemi durante l'esecuzione
1. Seleziona "Copy to 0:/gm9/out"
1. Il file non-installabile `.3ds` o `.nds` verrà salvato nella cartella `/gm9/out/` della tua scheda SD

## Installare una cartuccia di gioco direttamente nel sistema

Questo funzionerà solo per i giochi 3DS; non è possibile installare una scheda di gioco NDS nel sistema come se fosse un titolo.
{: .notice--info}

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
1. Entra in `[C:] GAMECART`
1. Premi (A) su `[TitleID].trim.3ds` per selezionarlo, quindi seleziona "NCSD image options...", ed infine seleziona "Install game image"
1. Premi il pulsante (A) per sbloccare i permessi di scrittura di primo livello su SysNAND, quindi inserisci la combinazione di tasti richiesta a schermo
1. Al termine del processo, il gioco verrà visualizzato nel menu HOME come se fosse un titolo installato.

## Backup di una Scheda di Gioco 3DS in .CIA

Dovrebbe essere eseguito solo se [Installare una cartuccia di gioco direttamente nel sistema](#installing-a-game-cartridge-directly-to-the-system) non funziona.
{: .notice--info}

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
1. Entra in `[C:] GAMECART`
1. Premi (A) su `[TitleID].trim.3ds` per selezionarlo, quindi seleziona "NCSD image options...", ed infine seleziona "Build CIA from file"
1. Il file installabile `.cia` verrà salvato nella cartella `/gm9/out/` della tua scheda SD

## Backup di un Titolo Installato

Permette il backup di titoli digitali installati sia dal sistema sia dall'utente, come quelli scaricati dall'eShop.
{: .notice--info}

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
1. Premi il pulsante HOME per far apparire il menu delle azioni
1. Seleziona "Title manager"
1. Seleziona una delle seguenti opzioni a seconda del titolo di cui vuoi creare un backup
    + **Titolo installato dall'utente**: `[A:] SD CARD`
    + **Titolo di Sistema / DSiWare**: `[1:] NAND / TWL`
1. Seleziona il titolo di cui vuoi creare il backup
1. Seleziona "Manage Title..."
1. Seleziona "Build CIA (standard)"
1. Il file installabile `.cia` verrà salvato nella cartella `/gm9/out/` della tua scheda SD

## Creare un backup dei salvataggi dei giochi GBA della Virtual Console

Il salvataggio verrà creato nella cartella `/gm9/out/` della tua scheda SD, con nome `<TitleID>.gbavc.sav`.
{: .notice--info}

Per identificare il Title ID di un file `<TitleID>.gbavc.sav`, puoi controllare la lista di tutti i giochi presenti sulla tua console e i rispettivi Title ID premendo il pulsante (Home) per far apparire il menu delle azioni, dopodiché seleziona `Title manager`, quindi`[A:] SD CARD`.
{: .notice--info}

1. Esegui i seguenti passaggi per ogni gioco GBA della Virtual Console del quale vuoi mantenere i salvataggi:
    + Avvia il gioco GBA
    + Esci dal gioco GBA
    + Spegni la tua console
    + Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
    + Entra in `[S:] SYSNAND VIRTUAL`
    + Premi (A) su `agbsave.bin` per selezionarlo
    + Seleziona "AGBSAVE options..."
    + Seleziona "Dump GBA VC save"
    + Premi il pulsante (A) per continuare
    + Premi (Start) per riavviare la tua console

## Ripristinare i salvataggi dei giochi GBA della Virtual Console

Per identificare il Title ID di un file `<TitleID>.gbavc.sav`, puoi controllare la lista di tutti i giochi presenti sulla tua console e i rispettivi Title ID premendo il pulsante (Home) per far apparire il menu delle azioni, dopodiché seleziona `Title manager`, quindi`[A:] SD CARD`.
{: .notice--info}

1. Esegui i seguenti passaggi per ogni gioco GBA della Virtual Console del quale vuoi ripristinare i salvataggi:
    + Avvia il gioco GBA
    + Esci dal gioco GBA
    + Spegni la tua console
    + Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
    + Entra nella cartella `[0:] SDCARD` -> `gm9` -> `out`
    + Premi (Y) sul file `<TitleID>.gbavc.sav` che vuoi ripristinare per copiarlo
    + Premi (B) per ritornare al menu principale
    + Entra in `[S:] SYSNAND VIRTUAL`
    + Premi (A) su `agbsave.bin` per selezionarlo
    + Seleziona "AGBSAVE options..."
    + Seleziona "Inject GBA VC save"
    + Premi il pulsante (A) per continuare
    + Premi (Start) per riavviare la tua console
    + Avvia il gioco GBA
    + Esci dal gioco GBA

## Criptare / Decriptare un file .CIA

Per motivi pratici, copia i file `.cia` che desideri criptare/decriptare dentro la cartella `/cias/` della tua scheda SD
{: .notice--info}

1. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
1. Entra nella cartella `[0:] SDCARD` -> `cias`
1. Premi (A) sul file `.cia` per selezionarlo, quindi seleziona "CIA image options..."
1. Seleziona l'opzione appropriata per la funzione desiderata:
    + **Encrypt to 0:/gm9/out:** Crea una copia criptata del file `.cia` selezionato nella cartella `/gm9/out/` della tua scheda SD
    + **Decrypt to 0:/gm9/out:** Crea una copia decriptata del file `.cia` selezionato nella cartella `/gm9/out/` della tua scheda SD
    + **Encrypt inplace:** Sostituisce il file `.cia` con una versione criptata dello stesso
    + **Decrypt inplace:** Sostituisce il file `.cia` con una versione decriptata dello stesso
1. Il tuo file criptato/decriptato in formato `.cia` verrà salvato nella posizione desiderata
