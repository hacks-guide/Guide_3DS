---
title: "FAQ"
---
{% include toc title="Indice"%}

{% capture update-notice %}
{% include_relative include/3ds-online.txt %}
{% endcapture %}
<div class="notice--danger">{{ update-notice | markdownify }}</div>

**Sì**, puoi ancora installare un custom firmware sul tuo 3DS, anche dopo la chiusura dell'eShop.
{: .notice--info}

## FAQ Pre-Installazione

{% capture compat %}
<summary><u>Ho installato l'ultima versione di sistema. Posso modificare la mia console senza hardware esterno o altro?</u></summary>

**Sì!** New 3DS / New 3DS XL / New 2DS XL possono utilizzare [super-skaterhax](installing-boot9strap-(super-skaterhax)), mentre 3DS / 3DS XL / 2DS possono usare [MSET9](installing-boot9strap-(mset9)).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Con quali console è compatibile questa guida?</u></summary>

Questa guida è compatibile con tutte le console della famiglia 3DS (3DS, 3DS XL, 2DS, New 3DS, New 3DS XL, New 2DS XL). Se il codice della tua versione di sistema è "0.0.0-0", potresti avere una console per sviluppatori.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Quanto è rischioso modificare la mia console?</u></summary>

Ora è essenzialmente impossibile brickare la console, a meno che tu non lo voglia fare di proposito.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Potrò avviare emulatori ed homebrew fantastici al termine della guida?</u></summary>

Sì! Questa guida installerà alcune applicazioni homebrew utili, tra cui [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases/latest), che funge da app store per homebrew.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Potrò giocare a giochi comprati all'estero?</u></summary>

Sì; Luma3DS ignorerà automaticamente il controllo regione per le cartucce e i titoli installati. Alcuni giochi potrebbero aver bisogno di utilizzare la [funzione di emulazione regionale](https://wiki.hacks.guide/wiki/3DS:Setting_game_locales) per funzionare correttamente su console fuori regione.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Perderò alcune funzionalità se installo un CFW?</u></summary>

No. Le console con custom firmware possono ancora scaricare aggiornamenti e avviare le schede di gioco come qualunque altro 3DS.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Posso mantenere il mio NNID, i salvataggi, giochi digitali (ecc.)?</u></summary>

Il tuo NNID (se ne hai uno) non sarà influenzato da questa guida. Console di regione KOR, CHN, o TWN non hanno funzionalità NNID integrate, per cui non ne verranno influenzate.

Seguendo questa guida non dovrebbero verificarsi perdite di dati (salvataggi, giochi digitali, ecc.), ma è sempre possibile che si verifichi una corruzione della scheda SD. Dovresti fare un backup della tua scheda SD in caso tu abbia dati importanti.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Il mio 3DS sarà bandito avendo un CFW?</u></summary>

I ban non sono più possibili perché i servizi Nintendo Network sono terminati (per tutti).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Posso seguire questa guida senza un computer a disposizione (ad esempio, un telefono Android)?</u></summary>

Sì! A patto che tu abbia modo di trasferire file su una scheda SD compatibile.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Quali dimensioni di scheda SD posso usare?</u></summary>

Avrai bisogno di almeno 1,5 GB di spazio libero nella scheda SD per seguire questa guida nella sua interezza. Anche se il 3DS è ufficialmente compatibile con schede SD fino a 32GB, schede SD più grandi possono essere usate una volta ri-formattate manualmente come FAT32. Non è consigliabile utilizzare schede SD superiori a 128GB a causa di problemi noti con grafica GBA e con temi personalizzati.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Ho sentito di questa cosa per cui dovrei pagare (Gateway, Sky3DS, ntrboot, R4, ecc). È qualcosa di cui ho bisogno?</u></summary>

No. Anche se una flashcart DS può essere usata per modificare un 3DS tramite [ntrboot](ntrboot), ora c'è un metodo gratuito disponibile per la maggior parte delle console.

Le flashcart in modalità 3DS come Gateway e Sky3DS non sono consigliate perché obsolete e possono comportare il rischio di brickare la console.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Qual è la differenza tra custom firmware e accesso agli homebrew?</u></summary>

Generalmente, con custom firmware si intende una modifica al sistema del 3DS per fare cose che normalmente non potrebbe fare. Con "homebrew" si intende generalmente un software creato al di fuori dei canali ufficiali (es. non distribuito tramite l'eShop o con schede di gioco).

In passato era possibile utilizzare homebrew in modalità userland, chiamati generalmente "homebrew", tramite vecchi exploit come ninjhax. Il livello di privilegi di sistema concesso in modalità userland permetteva di eseguire homebrew ed emulatori di base, ma non di modificare giochi o scaricare cartucce (facilmente). Era anche molto meno stabile, gli homebrew spesso crashavano e occorreva riavviare la console. Il custom firmware permette un livello di privilegi di sistema maggiore, oltre che ad essere più stabile di entrypoint esclusivi ad homebrew.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

## FAQ Post-Installazione

{% capture compat %}
<summary><u>È sicuro aggiornare all'ultima versione il mio 3DS con un CFW?</u></summary>

Se stai usando Luma3DS, il loader del tuo custom firmware (boot9strap) non verrà *mai* rimosso con un aggiornamento di sistema. Ci sono stati aggiornamenti in passato che hanno portato al crash di Luma3DS all'avvio, quindi sarebbe meglio aspettare qualche ora per assicurarsi che l'ultimo aggiornamento non renderà temporaneamente inutilizzabile la console fino all'aggiornamento di Luma3DS. Gli aggiornamenti di sistema possono essere eseguiti con le stesse modalità di un normale 3DS: tramite le Impostazioni della console, via Modalità Provvisoria o accettando la richiesta allo scaricamento automatico di un aggiornamento.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Come faccio ad aggiornare la mia scheda SD?</u></summary>

Copia e incolla il contenuto della tua scheda SD in una nuova scheda SD formattata come FAT32. Per le SD da 128 GB, si raccomanda una dimensione di allocazione di 65536. SD più grandi di 128GB non sono consigliate a causa di problemi noti con la grafica GBA e con i temi personalizzati.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Posso eseguire un Trasferimento dati avendo un CFW?</u></summary>

Sì, i trasferimenti dati possono essere effettuati tramite la relativa funzione verso altre console con CFW (possono verificarsi inconsistenze se la console di destinazione è invece senza CFW). I ticket di titoli non legittimi (homebrew) non saranno trasferiti, ma possono venire fatti riapparire con [faketik](https://github.com/ihaveamac/faketik/releases/latest). Assicurati di non eseguire un trasferimento via wireless, altrimenti tutti i titoli non legittimi verranno eliminati. Il CFW rimarrà su entrambe le console.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Come faccio a cambiare la lingua di sistema di un 3DS giapponese?</u></summary>

L'unico modo per cambiare la lingua di sistema di un 3DS giapponese in una lingua diversa dal giapponese è tramite un [cambio di regione](region-changing). Presta attenzione al fatto che molto probabilmente questo corromperà il Nintendo eShop della tua console, per cui non potrai aggiornare i tuoi giochi, sia che siano interni sia esterni alla tua regione.
 {% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Come aggiorno le applicazioni homebrew?</u></summary>

Dipende dal formato dell'applicazione homebrew. Generalmente:

* Gli homebrew in **formato CIA** possono venire aggiornati installando il nuovo CIA, che di solito sovrascriverà quello vecchio. Se il vecchio CIA non viene sovrascritto, potrai eliminare quello precedente da Gestione dati, come con qualunque altro titolo 3DS.
* Gli homebrew in **formato 3DSX** possono venire aggiornati sostituendo il file 3DSX dentro `/3ds/` con la nuova versione. Se l'applicazione include risorse aggiuntive, potresti dover trasferire la relativa cartella da qualche altra parte. Consulta la documentazione dell'homebrew stesso.
* Per aggiornare Luma3DS, consulta [questa pagina](restoring-updating-cfw). Per aggiornare GodMode9, consulta [questa pagina](godmode9-usage#updating-godmode9).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Come faccio ad aggiornare i miei giochi?</u></summary>

Puoi continuare scaricare gli aggiornamenti dei giochi dal Nintendo eShop, anche se è stato chiuso.

Se il gioco non è della stessa regione della console, dovrai [scaricare gli aggiornamenti](dumping-titles-and-game-cartridges) da un 3DS con gli aggiornamenti installati. Il Nintendo eShop contiene gli aggiornamenti relativi alla regione della console (ad esempio, un 3DS giapponese avrà solo gli aggiornamenti per i giochi giapponesi).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Aiuto! È successo qualcosa di brutto e il mio 3DS non avvia il nel menu HOME...</u></summary>

Consulta la [guida per risolvere i problemi](troubleshooting#boot-issues-on-consoles-with-custom-firmware). **Non è consigliato disinstallare il CFW se la console non è in grado di avviarsi normalmente, poiché è molto probabile che questo causerà un brick**.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## FAQ menuhax / A9LH / Gateway

{% capture compat %}
<summary><u>Ho modificato la mia console (x) anni fa, quindi ha già degli homebrew. Cosa dovrei fare?</u></summary>

Si consiglia di aggiornare la tua installazione ad una più moderna, basata su boot9strap. Segui la guida [Verifica del CFW](checking-for-cfw) per vedere come aggiornare la tua installazione.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>La mia installazione funziona. Perché dovrei aggiornarla?</u></summary>

La stragrande maggioranza degli homebrew moderni (come Checkpoint e BootNTR Selector) è stata testata solo su installazioni moderne, basate su boot9strap, e potrebbero non funzionare completamente (o affatto) su installazioni più vecchie basate su menuhax, A9LH o Gateway. Inoltre, a seconda della tua installazione, potrebbe non essere sicuro aggiornare alla versione del software più recente. Installazioni moderne basate su boot9strap consentono un livello di accesso al sistema maggiore rispetto agli hack precedenti, inclusa la possibilità di scaricare il bootrom della tua console.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Perderò qualcosa se aggiornerò la mia installazione?</u></summary>

La tua vecchia installazione (inclusa la tua EmuNAND, se ne hai una) di solito può essere trasferita direttamente verso boot9strap senza perdite di dati. Se ci sono dati particolarmente importanti, sarebbe meglio prima fare un backup decriptato dei tuoi dati di salvataggio prima di aggiornare la tua installazione usando applicazioni come [JKSM](https://github.com/J-D-K/JKSM/releases/tag/12%2F20%2F2018).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Come faccio a spostare i salvataggi da un'installazione Gateway esistente a un'installazione più moderna?</u></summary>

**R:** Guarda [questo thread](https://gbatemp.net/threads/425743/).
{% endcapture %}
<details>{{ compat | markdownify }}</details>
