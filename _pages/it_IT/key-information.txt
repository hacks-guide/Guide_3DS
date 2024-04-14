---
title: "Informazioni importanti"
---

{% include toc title="Indice" %}

{% capture update-notice %}
{% include_relative include/3ds-online.txt %}
{% endcapture %}
<div class="notice--danger">{{ update-notice | markdownify }}</div>

Se è la prima volta che modifichi un Nintendo 3DS (o non hai esperienza con la tecnologia), continua a leggere! Altrimenti, se hai già qualche esperienza e sai cosa tu stia facendo, prosegui con [Cominciamo!](get-started).
{: .notice--info}

Questa pagina contiene alcune terminologie informatiche di base e informazioni specifiche dei 3DS che dovresti conoscere prima di seguire questa guida.

Ogni sezione è collassata. Fai clic o tocca il nome della sezione per aprirla.

## Cose che dovresti sapere sul 3DS

{% capture compat %}
<summary><strong>Compatibilità con 3DS/2DS</strong></summary>
![]({{ "/images/screenshots/onboarding/compatible.png" | absolute_url }})
{: .notice--info}

Questa guida funziona su tutte le versioni retail della famiglia di console Nintendo 3DS (compresi 3DS, 3DS XL/LL, 2DS, New 3DS, New 3DS XL/LL, e New 2DS XL/LL), indipendentemente dalla regione o dal firmware.
{% endcapture %}

<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>Compatibilità con il computer</strong></summary>
![]({{ "/images/screenshots/onboarding/os.jpg" | absolute_url }})
{: .notice--info}
Nella maggior parte dei casi, puoi seguire questa guida a patto che tu possa scaricare file tramite Internet e copiarli sulla tua scheda SD. A seconda del tuo computer/cellulare/dispositivo elettronico, potresti aver bisogno di acquistare un adattatore da scheda SD a USB, per far sì che il tuo computer possa leggere la scheda SD.
{% endcapture %}

<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>Posizione, tipo e capienza della scheda SD</strong></summary>
![]({{ "/images/screenshots/onboarding/sdcard.jpg" | absolute_url }})
{: .notice--info}

La posizione dello slot della scheda SD e il tipo di scheda SD da usare dipendono dal modello del tuo 3DS. Ulteriori informazioni sono disponibili alla [pagina ufficiale di supporto Nintendo](https://www.nintendo.it/Servizio-al-consumatore/Nintendo-3DS-e-Nintendo-2DS/Uso/Schede-SD/Usare-le-schede-SD/Usare-le-schede-SD-826532.html).

Il 3DS può leggere schede SD di qualunque capienza (anche più grandi di 32GB), tuttavia la scheda dev'essere formattata con filesystem FAT32 (**non** exFAT né NTFS). Puoi usare una delle seguenti applicazioni per formattare la tua scheda SD, a seconda del tuo sistema operativo: [Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux)). SD più grandi di **128GB** non sono consigliate a causa di problemi noti con i temi personalizzati e con la grafica GBA/DS.

Per seguire questa guida, ti servirà una scheda SD di almeno **2GB**.
{: .notice--warning}

È consigliabile verificare che la tua scheda SD sia priva di errori prima di seguire questa guida usando [H2testw (Windows)](h2testw-(windows)), [F3 (Linux)](f3-(linux)), o [F3XSwift (Mac)](f3xswift-(mac))
{: .notice--info}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>Eventuali rischi (Disclaimer)</strong></summary>

Effettuando la modifica alla tua console, la sottoponi ad un remoto (ma possibile) rischio di brick (che la renderebbe inutilizzabile). ___Se sbagli a posizionare dei file NON brickerai la console___, potresti invece brickarla saltando alcuni passaggi.

Riassumendo: Modificare la tua console è sicuro, ma ___è una tua responsabilità___ se qualcosa dovesse andare storto.

{% endcapture %}
<details>{{ compat | markdownify }}</details>
{: .notice--warning}

## Cose che devi fare sul tuo computer

Seguendo questa guida non dovrebbero verificarsi perdite di dati, ma è sempre possibile che capiti una corruzione della scheda SD. Se hai dati importanti, dovresti fare un backup dei contenuti della tua scheda SD (soprattutto della cartella `Nintendo 3DS`).
{: .notice--warning}

{% capture compat %}
<summary><strong>Terminologia di posizionamento file (es. "directory principale della scheda SD", "/luma/")</strong></summary>
![]({{ "/images/screenshots/onboarding/sdroot.png" | absolute_url }})
{: .notice--info}

Quando si copiano i file nella scheda SD, è importante copiarli nella giusta posizione - altrimenti, la console non rileverà il file e l'exploit o il software che stai cercando di utilizzare non funzionerà. Un termine che vedrai frequentemente su questa guida è **directory principale della scheda SD**, il che significa che non si è all'interno di alcuna cartella sulla scheda SD. La cartella che appare immediatamente quando si apre la scheda SD sul computer è chiamata 'directory principale'.

Potresti anche vedere i nomi delle cartelle indicati in questa maniera: `/cartella/`. Gli slash sono usati per indicare le cartelle e non fanno parte del loro nome. Per esempio, `/cartella1/cartella2/` fa riferimento a `cartella2` all'interno di `cartella1`:

![]({{ "/images/screenshots/onboarding/folders.png" | absolute_url }})
{: .notice--info}

**Le parentesi angolari** (\< e \>) sono usate anche occasionalmente per fare riferimento a identificatori specifici del sistema. Ad esempio, se la guida dice `<ID0>`, si fa riferimento all'identificatore specifico di sistema all'interno della cartella `Nintendo 3DS`, piuttosto che ad una cartella chiamata letteralmente "ID0":

![]({{ "/images/screenshots/onboarding/anglebrackets.png" | absolute_url }})
{: .notice--info}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>Scaricare i file da GitHub</strong></summary>
![]({{ "/images/screenshots/onboarding/github.png" | absolute_url }})
{: .notice--info}

In questa guida copierai i file scaricati dal tuo computer o cellulare nella scheda SD della tua console. Molti di questi file provengono da GitHub, un sito web utilizzato da sviluppatori per pubblicare le proprie applicazioni open-source. Quando scarichi file da GitHub, dovresti scaricare il file che *non è* il codice sorgente.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>Aprire/estrarre i file</strong></summary>
![]({{ "/images/screenshots/onboarding/zipfiles.png" | absolute_url }})
{: .notice--info}

Alcuni dei file che ti verrà richiesto di scaricare saranno in formato `.zip`, utilizzato per comprimere più file in uno unico.

Quando ti verrà chiesto di "copiare il file (tizio) dall'archivio (caio).zip", significa che dovrai aprire (o meglio, "estrarre") il file ZIP. Dentro il file ZIP ci saranno i file che cerchi, che potrai copiare nella posizione richiesta sulla tua scheda SD.

Nella maggior parte dei sistemi operativi, per estrarre i file basta farci un doppio clic sopra. Se non ci riesci o non funziona, puoi installare invece un tool di terze parti affidabile come [7-Zip](https://7-zip.org/).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>Estensioni nomi file (solo per Windows)</strong></summary>
![]({{ "/images/screenshots/onboarding/fileext.png" | absolute_url }})
{: .notice--info}

Se hai un computer con Windows, le estensioni dopo il nome del file potrebbero essere nascoste per impostazione predefinita, rendendo più complicato trovare il file che stai cercando. Per abilitare le estensioni dopo il nome del file, segui [queste istruzioni](file-extensions-(windows)).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Supporto

Se riscontri dei problemi seguendo questa guida, ci sono tanti modi per ricevere aiuto!

+ Se hai delle domande a cui non hai ricevuto risposta in questa pagina, le loro risposte potrebbero essere nelle [FAQ Pre-Installazione](faq#pre-installation-faq).
+ Se si verifica un problema mentre stai seguendo questa guida, puoi consultare la pagina di [Risoluzione dei problemi](troubleshooting) per trovare una soluzione.
+ Se ciò di cui abbiamo parlato qui non fosse di aiuto, puoi ricevere supporto diretto sul [canale Discord Nintendo Homebrew (solo in inglese)](https://discord.gg/MWxPgEp).

Prosegui con [Cominciamo!](get-started)
{: .notice--primary}
