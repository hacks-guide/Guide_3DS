# FAQ

::: danger

<!--@include: ./_include/3ds-online.md -->

:::

::: info

**Sì**, puoi ancora installare un custom firmware sul tuo 3DS, anche dopo la chiusura dell'eShop.

:::

## Pre-Installation FAQ

:::details I am on the latest system version. Is my console hackable without any external hardware/prerequisites?

**Sì!** New 3DS / New 3DS XL / New 2DS XL possono utilizzare [super-skaterhax](installing-boot9strap-\(super-skaterhax\)), mentre 3DS / 3DS XL / 2DS possono usare [MSET9](installing-boot9strap-\(mset9\)).

:::

:::details What consoles is this guide compatible with?

Questa guida è compatibile con tutte le console della famiglia 3DS (3DS, 3DS XL, 2DS, New 3DS, New 3DS XL, New 2DS XL). Se il codice della tua versione di sistema è "0.0.0-0", potresti avere una console per sviluppatori.

:::

:::details How risky is hacking my console?

Ora è essenzialmente impossibile brickare la console, a meno che tu non lo voglia fare di proposito.

:::

:::details Can I run awesome homebrew and emulators with this?

Sì! Questa guida installerà alcune applicazioni homebrew utili, tra cui [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases/latest), che funge da app store per homebrew.

:::

:::details Can I use this to play games from other regions?

Sì; Luma3DS ignorerà automaticamente il controllo regione per le cartucce e i titoli installati. Alcuni giochi potrebbero aver bisogno di utilizzare la [funzione di emulazione regionale](https://wiki.hacks.guide/wiki/3DS:Setting_game_locales) per funzionare correttamente su console fuori regione.

:::

:::details Will I lose any features if I install CFW?

No. Le console con custom firmware possono ancora scaricare aggiornamenti e avviare le schede di gioco come qualunque altro 3DS.

:::

:::details Can I keep my NNID, saves, digital games (etc.)?

Il tuo NNID (se ne hai uno) non sarà influenzato da questa guida. Console di regione KOR, CHN, o TWN non hanno funzionalità NNID integrate, per cui non ne verranno influenzate.

Seguendo questa guida non dovrebbero verificarsi perdite di dati (salvataggi, giochi digitali, ecc.), ma è sempre possibile che si verifichi una corruzione della scheda SD. Dovresti fare un backup della tua scheda SD in caso tu abbia dati importanti.

:::

:::details Will my 3DS be banned for having CFW?

I ban non sono più possibili perché i servizi Nintendo Network sono terminati (per tutti).

:::

:::details Can I do this without a computer (e.g. an Android phone)?

Sì! A patto che tu abbia modo di trasferire file su una scheda SD compatibile.

:::

:::details What size SD card can I use?<

Avrai bisogno di almeno 1,5 GB di spazio libero nella scheda SD per seguire questa guida nella sua interezza. Anche se il 3DS è ufficialmente compatibile con schede SD fino a 32GB, schede SD più grandi possono essere usate una volta ri-formattate manualmente come FAT32. Non è consigliabile utilizzare schede SD superiori a 128GB a causa di problemi noti con grafica GBA e con temi personalizzati.

:::

:::details I heard about this thing I have to pay for (Gateway, Sky3DS, ntrboot, R4, etc). Is that something I need?

No. Anche se una flashcart DS può essere usata per modificare un 3DS tramite [ntrboot](ntrboot), ora c'è un metodo gratuito disponibile per la maggior parte delle console.

Le flashcart in modalità 3DS come Gateway e Sky3DS non sono consigliate perché obsolete e possono comportare il rischio di brickare la console.

:::

:::details What's the difference between custom firmware and homebrew?

Generalmente, con custom firmware si intende una modifica al sistema del 3DS per fare cose che normalmente non potrebbe fare. Homebrew generally refers to software created outside of official sources (i.e. not distributed by eShop or cartridges).

In passato era possibile utilizzare homebrew in modalità userland, chiamati generalmente "homebrew", tramite vecchi exploit come ninjhax. Il livello di privilegi di sistema concesso in modalità userland permetteva di eseguire homebrew ed emulatori di base, ma non di modificare giochi o scaricare cartucce (facilmente). Era anche molto meno stabile, gli homebrew spesso crashavano e occorreva riavviare la console. Il custom firmware permette un livello di privilegi di sistema maggiore, oltre che ad essere più stabile di entrypoint esclusivi ad homebrew.

:::

## Post-Installation FAQ

:::details Is it safe to update my 3DS to the latest version with CFW?

Se stai usando Luma3DS, il loader del tuo custom firmware (boot9strap) non verrà _mai_ rimosso con un aggiornamento di sistema. Ci sono stati aggiornamenti in passato che hanno portato al crash di Luma3DS all'avvio, quindi sarebbe meglio aspettare qualche ora per assicurarsi che l'ultimo aggiornamento non renderà temporaneamente inutilizzabile la console fino all'aggiornamento di Luma3DS. Gli aggiornamenti di sistema possono essere eseguiti con le stesse modalità di un normale 3DS: tramite le Impostazioni della console, via Modalità Provvisoria o accettando la richiesta allo scaricamento automatico di un aggiornamento.

:::

:::details How do I upgrade my SD card?

Copia e incolla il contenuto della tua scheda SD in una nuova scheda SD formattata come FAT32. Per le SD da 128 GB, si raccomanda una dimensione di allocazione di 65536. SD più grandi di 128GB non sono consigliate a causa di problemi noti con la grafica GBA e con i temi personalizzati.

:::

:::details Can I system transfer with CFW?

Sì, i trasferimenti dati possono essere effettuati tramite la relativa funzione verso altre console con CFW (possono verificarsi inconsistenze se la console di destinazione è invece senza CFW). I ticket di titoli non legittimi (homebrew) non saranno trasferiti, ma possono venire fatti riapparire con [faketik](https://github.com/ihaveamac/faketik/releases/latest). Assicurati di non eseguire un trasferimento via wireless, altrimenti tutti i titoli non legittimi verranno eliminati. Il CFW rimarrà su entrambe le console.

:::

:::details How do I change the system language of a Japanese 3DS?

L'unico modo per cambiare la lingua di sistema di un 3DS giapponese in una lingua diversa dal giapponese è tramite un [cambio di regione](region-changing). Presta attenzione al fatto che molto probabilmente questo corromperà il Nintendo eShop della tua console, per cui non potrai aggiornare i tuoi giochi, sia che siano interni sia esterni alla tua regione.

:::

:::details How do I update homebrew applications?

Dipende dal formato dell'applicazione homebrew. Generalmente:

- Homebrew in **CIA format** can be updated by installing the new CIA, which will usually overwrite the old one. Se il vecchio CIA non viene sovrascritto, potrai eliminare quello precedente da Gestione dati, come con qualunque altro titolo 3DS.
- Homebrew in **3DSX format** can be updated by replacing the 3DSX file in `/3ds/` with a fresh copy. Se l'applicazione include risorse aggiuntive, potresti dover trasferire la relativa cartella da qualche altra parte. Consulta la documentazione dell'homebrew stesso.
- For updating Luma3DS, see [this page](restoring-updating-cfw). Per aggiornare GodMode9, consulta [questa pagina](godmode9-usage#updating-godmode9).

:::

:::details How do I update my games?

Puoi continuare scaricare gli aggiornamenti dei giochi dal Nintendo eShop, anche se è stato chiuso.

Se il gioco non è della stessa regione della console, dovrai [scaricare gli aggiornamenti](dumping-titles-and-game-cartridges) da un 3DS con gli aggiornamenti installati. Il Nintendo eShop contiene gli aggiornamenti relativi alla regione della console (ad esempio, un 3DS giapponese avrà solo gli aggiornamenti per i giochi giapponesi).

:::

:::details Help! Something bad happened and my 3DS won't boot to HOME Menu...

Consulta la [guida per risolvere i problemi](troubleshooting#boot-issues-on-consoles-with-custom-firmware). **Non è consigliato disinstallare il CFW se la console non è in grado di avviarsi normalmente, poiché è molto probabile che questo causerà un brick**.

:::

## menuhax / A9LH / Gateway FAQ

:::details I modded my console (x) years ago, so it already has some sort of homebrew. What should I do?

Si consiglia di aggiornare la tua installazione ad una più moderna, basata su boot9strap. Segui la guida [Verifica del CFW](checking-for-cfw) per vedere come aggiornare la tua installazione.

:::

:::details My setup works for me. Why should I upgrade it?

La stragrande maggioranza degli homebrew moderni (come Checkpoint e BootNTR Selector) è stata testata solo su installazioni moderne, basate su boot9strap, e potrebbero non funzionare completamente (o affatto) su installazioni più vecchie basate su menuhax, A9LH o Gateway. Inoltre, a seconda della tua installazione, potrebbe non essere sicuro aggiornare alla versione del software più recente. Installazioni moderne basate su boot9strap consentono un livello di accesso al sistema maggiore rispetto agli hack precedenti, inclusa la possibilità di scaricare il bootrom della tua console.

:::

:::details Will I lose anything if I upgrade my setup?

La tua vecchia installazione (inclusa la tua EmuNAND, se ne hai una) di solito può essere trasferita direttamente verso boot9strap senza perdite di dati. Se ci sono dati particolarmente importanti, sarebbe meglio prima fare un backup decriptato dei tuoi dati di salvataggio prima di aggiornare la tua installazione usando applicazioni come [JKSM](https://github.com/J-D-K/JKSM/releases/tag/12%2F20%2F2018).

:::

:::details How do I move saves from an existing Gateway setup to a more modern setup?

**R:** Guarda [questo thread](https://gbatemp.net/threads/425743/).

:::
