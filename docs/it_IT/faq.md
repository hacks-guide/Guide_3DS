# FAQ

::: danger

<!--@include: ./_include/3ds-online.md -->

:::

::: info

**Sì**, puoi ancora installare un custom firmware sul tuo 3DS, anche dopo la chiusura dell'eShop.

:::

## FAQ Pre-Installazione

:::details Ho installato l'ultima versione di sistema. Posso modificare la mia console senza hardware esterno o altro?

**Sì!** New 3DS / New 3DS XL / New 2DS XL possono utilizzare [super-skaterhax](installing-boot9strap-\(super-skaterhax\)), mentre 3DS / 3DS XL / 2DS possono usare [MSET9](installing-boot9strap-\(mset9\)).

:::

:::details Con quali console è compatibile questa guida?

Questa guida è compatibile con tutte le console della famiglia 3DS (3DS, 3DS XL, 2DS, New 3DS, New 3DS XL, New 2DS XL). Se il codice della tua versione di sistema è "0.0.0-0", potresti avere una console per sviluppatori.

:::

:::details Quanto è rischioso modificare la mia console?

Ora è essenzialmente impossibile brickare la console, a meno che tu non lo voglia fare di proposito.

:::

:::details Potrò avviare emulatori ed homebrew fantastici al termine della guida?

Sì! Questa guida installerà alcune applicazioni homebrew utili, tra cui [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases/latest), che funge da app store per homebrew.

:::

:::details Potrò giocare a giochi comprati all'estero?

Sì; Luma3DS ignorerà automaticamente il controllo regione per le cartucce e i titoli installati. Alcuni giochi potrebbero aver bisogno di utilizzare la [funzione di emulazione regionale](https://wiki.hacks.guide/wiki/3DS:Setting_game_locales) per funzionare correttamente su console fuori regione.

:::

:::details Perderò alcune funzionalità se installo un CFW?

No. Le console con custom firmware possono ancora scaricare aggiornamenti e avviare le schede di gioco come qualunque altro 3DS.

:::

:::details Posso mantenere il mio NNID, i salvataggi, giochi digitali (ecc.)?

Il tuo NNID (se ne hai uno) non sarà influenzato da questa guida. Console di regione KOR, CHN, o TWN non hanno funzionalità NNID integrate, per cui non ne verranno influenzate.

Seguendo questa guida non dovrebbero verificarsi perdite di dati (salvataggi, giochi digitali, ecc.), ma è sempre possibile che si verifichi una corruzione della scheda SD. Dovresti fare un backup della tua scheda SD in caso tu abbia dati importanti.

:::

:::details Il mio 3DS sarà bandito avendo un CFW?

I ban non sono più possibili perché i servizi Nintendo Network sono terminati (per tutti).

:::

:::details Posso farlo senza un computer (ad esempio con un telefono Android)?

Sì! A patto che tu abbia modo di trasferire file su una scheda SD compatibile.

:::

:::details Quali dimensioni di scheda SD posso usare?

Avrai bisogno di almeno 1,5 GB di spazio libero nella scheda SD per seguire questa guida nella sua interezza. Anche se il 3DS è ufficialmente compatibile con schede SD fino a 32GB, schede SD più grandi possono essere usate una volta ri-formattate manualmente come FAT32. Non è consigliabile utilizzare schede SD superiori a 128GB a causa di problemi noti con grafica GBA e con temi personalizzati.

:::

:::details Ho sentito di questa cosa per cui dovrei pagare (Gateway, Sky3DS, ntrboot, R4, ecc). È qualcosa che mi serve?

No. Anche se una flashcart DS può essere usata per modificare un 3DS tramite [ntrboot](ntrboot), ora c'è un metodo gratuito disponibile per la maggior parte delle console.

Le flashcart in modalità 3DS come Gateway e Sky3DS non sono consigliate perché obsolete e possono comportare il rischio di brickare la console.

:::

:::details Qual è la differenza tra custom firmware e accesso agli homebrew?

Generalmente, con custom firmware si intende una modifica al sistema del 3DS per fare cose che normalmente non potrebbe fare. Homebrew si riferisce generalmente al software creato al di fuori delle fonti ufficiali (cioè non distribuito da eShop o con schede di gioco).

In passato era possibile utilizzare homebrew in modalità userland, chiamati generalmente "homebrew", tramite vecchi exploit come ninjhax. Il livello di privilegi di sistema concesso in modalità userland permetteva di eseguire homebrew ed emulatori di base, ma non di modificare giochi o scaricare cartucce (facilmente). Era anche molto meno stabile, gli homebrew spesso crashavano e occorreva riavviare la console. Il custom firmware permette un livello di privilegi di sistema maggiore, oltre che ad essere più stabile di entrypoint esclusivi ad homebrew.

:::

## FAQ Post-Installazione

:::details È sicuro aggiornare all'ultima versione il mio 3DS con un CFW?

Se stai usando Luma3DS, il loader del tuo custom firmware (boot9strap) non verrà _mai_ rimosso con un aggiornamento di sistema. Ci sono stati aggiornamenti in passato che hanno portato al crash di Luma3DS all'avvio, quindi sarebbe meglio aspettare qualche ora per assicurarsi che l'ultimo aggiornamento non renderà temporaneamente inutilizzabile la console fino all'aggiornamento di Luma3DS. Gli aggiornamenti di sistema possono essere eseguiti con le stesse modalità di un normale 3DS: tramite le Impostazioni della console, via Modalità Provvisoria o accettando la richiesta allo scaricamento automatico di un aggiornamento.

:::

:::details Come faccio a sostituire la mia scheda SD?

Copia e incolla il contenuto della tua scheda SD in una nuova scheda SD formattata come FAT32. Per le SD da 128 GB, si raccomanda una dimensione di allocazione di 65536. SD più grandi di 128GB non sono consigliate a causa di problemi noti con la grafica GBA e con i temi personalizzati.

:::

:::details Posso eseguire un Trasferimento dati con un CFW?

Sì, i trasferimenti dati possono essere effettuati tramite la relativa funzione verso altre console con CFW (possono verificarsi inconsistenze se la console di destinazione è invece senza CFW). I ticket di titoli non legittimi (homebrew) non saranno trasferiti, ma possono venire fatti riapparire con [faketik](https://github.com/ihaveamac/faketik/releases/latest). Assicurati di non eseguire un trasferimento via wireless, altrimenti tutti i titoli non legittimi verranno eliminati. Il CFW rimarrà su entrambe le console.

:::

:::details Come faccio a cambiare la lingua di sistema di un 3DS giapponese?

L'unico modo per cambiare la lingua di sistema di un 3DS giapponese in una lingua diversa dal giapponese è tramite un [cambio di regione](region-changing). Presta attenzione al fatto che molto probabilmente questo corromperà il Nintendo eShop della tua console, per cui non potrai aggiornare i tuoi giochi, sia che siano interni sia esterni alla tua regione.

:::

:::details Come aggiorno le applicazioni homebrew?

Dipende dal formato dell'applicazione homebrew. Generalmente:

- Gli homebrew in **formato CIA** possono venire aggiornati installando il nuovo CIA, che di solito sovrascriverà quello vecchio. Se il vecchio CIA non viene sovrascritto, potrai eliminare quello precedente da Gestione dati, come con qualunque altro titolo 3DS.
- Gli homebrew in **formato 3DSX** possono venire aggiornati sostituendo il file 3DSX dentro `/3ds/` con la nuova versione. Se l'applicazione include risorse aggiuntive, potresti dover trasferire la relativa cartella da qualche altra parte. Consulta la documentazione dell'homebrew stesso.
- Per aggiornare Luma3DS, consulta [questa pagina](restoring-updating-cfw). Per aggiornare GodMode9, consulta [questa pagina](godmode9-usage#updating-godmode9).

:::

:::details Come faccio ad aggiornare i miei giochi?

Puoi continuare scaricare gli aggiornamenti dei giochi dal Nintendo eShop, anche se è stato chiuso.

Se il gioco non è della stessa regione della console, dovrai [scaricare gli aggiornamenti](dumping-titles-and-game-cartridges) da un 3DS con gli aggiornamenti installati. Il Nintendo eShop contiene gli aggiornamenti relativi alla regione della console (ad esempio, un 3DS giapponese avrà solo gli aggiornamenti per i giochi giapponesi).

:::

:::details Aiuto! È successo qualcosa di brutto e il mio 3DS non avvia il menu HOME...

Consulta la [guida per risolvere i problemi](troubleshooting#boot-issues-on-consoles-with-custom-firmware). **Non è consigliato disinstallare il CFW se la console non è in grado di avviarsi normalmente, poiché è molto probabile che questo causerà un brick**.

:::

## FAQ menuhax / A9LH / Gateway

:::details Ho modificato la mia console (x) anni fa, quindi ha già degli homebrew. Cosa dovrei fare?

Si consiglia di aggiornare la tua installazione ad una più moderna, basata su boot9strap. Segui la guida [Verifica del CFW](checking-for-cfw) per vedere come aggiornare la tua installazione.

:::

:::details La mia vecchia installazione funziona. Perché dovrei aggiornarla?

La stragrande maggioranza degli homebrew moderni (come Checkpoint e BootNTR Selector) è stata testata solo su installazioni moderne, basate su boot9strap, e potrebbero non funzionare completamente (o affatto) su installazioni più vecchie basate su menuhax, A9LH o Gateway. Inoltre, a seconda della tua installazione, potrebbe non essere sicuro aggiornare alla versione del software più recente. Installazioni moderne basate su boot9strap consentono un livello di accesso al sistema maggiore rispetto agli hack precedenti, inclusa la possibilità di scaricare il bootrom della tua console.

:::

:::details Perderò qualcosa se aggiornerò la mia installazione?

La tua vecchia installazione (inclusa la tua EmuNAND, se ne hai una) di solito può essere trasferita direttamente verso boot9strap senza perdite di dati. Se ci sono dati particolarmente importanti, sarebbe meglio prima fare un backup decriptato dei tuoi dati di salvataggio prima di aggiornare la tua installazione usando applicazioni come [JKSM](https://github.com/J-D-K/JKSM/releases/tag/12%2F20%2F2018).

:::

:::details Come faccio a spostare i salvataggi da un'installazione Gateway esistente a un'installazione più moderna?

Consulta [questo thread](https://gbatemp.net/threads/425743/).

:::
