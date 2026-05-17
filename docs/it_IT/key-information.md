# Informazioni importanti

::: info

Se è la prima volta che modifichi un Nintendo 3DS (o non hai esperienza con la tecnologia), continua a leggere! Altrimenti, se hai già qualche esperienza e sai cosa tu stia facendo, prosegui con [Cominciamo!](get-started).

:::

Questa pagina contiene alcune terminologie informatiche di base e informazioni specifiche dei 3DS che dovresti conoscere prima di seguire questa guida.

Ogni sezione è inizialmente collassata. Fai clic o tocca il nome della sezione per aprirla.

## Compatibilità

:::: details Con quali console è compatibile questa guida?

::: info

![](/images/screenshots/onboarding/compatible.png)

:::

Questa guida funziona su tutte le versioni retail della famiglia di console Nintendo 3DS (compresi 3DS, 3DS XL/LL, 2DS, New 3DS, New 3DS XL/LL, e New 2DS XL/LL), indipendentemente dalla regione o dal firmware. NON è compatibile con la famiglia di console DSi (DSi, DSi XL/LL). Per queste, consulta invece [questa guida](https://dsi.cfw.guide).

::::

:::: details Di che tipo di computer / hardware ho bisogno per seguire questa guida?

::: info

![](/images/screenshots/onboarding/os.jpg)

:::

Nella maggior parte dei casi, puoi seguire questa guida a patto che tu possa scaricare file tramite Internet e copiarli sulla tua scheda SD. Questo include la maggior parte dei dispositivi elettronici di consumo, come i computer che eseguono Windows, macOS, Linux e chromeOS (Chromebook), come anche telefoni o tablet con Android o iOS. A seconda del tuo dispositivo elettronico, potresti aver bisogno di acquistare un adattatore per schede SD, per leggere la tua scheda SD.

::::

:::: details Di che tipo di scheda SD ha bisogno/usa la mia console?

::: info

![](/images/screenshots/onboarding/sdcard.jpg)

:::

La posizione dello slot della scheda SD e il tipo di scheda SD da usare dipendono dal modello del tuo 3DS. Ulteriori informazioni sono disponibili alla [pagina ufficiale di supporto Nintendo](https://www.nintendo.com/it-it/Assistenza/Nintendo-3DS-e-Nintendo-2DS/Uso/Schede-SD/Usare-le-schede-SD/Usare-le-schede-SD-826532.html). Ricorda che su console New 3DS e New 3DS XL avrai bisogno di un cacciavite (JIS 00) per accedere alla scheda microSD, posizionata sotto la placca posteriore.

La tua scheda (micro)SD deve avere i seguenti requisiti:

- **Marca**: Qualunque marca conosciuta (SanDisk, Samsung, Kingston, Lexar, PNY, ecc.)
  - Fai attenzione alle schede SD fasulle o illegittime (es: Memory SD, PRO PLUS, SanDian, Extreme Pro), in particolar modo a quelle comprate in negozi online come AliExpress. Guarda [qui](https://www.flashcarts.net/microsd-fakes) per una guida su come identificare le schede SD fasulle. Usare una scheda SD finta o illegittima causerà molto probabilmente problemi di funzionamento, o anche la **perdita di dati**!
- **Capienza**: Fra i 2GB e i 128GB (inclusi)
  - Queste schede sono definite SD (<=2GB), SDHC (4GB-32GB), o SDXC (64GB+)
  - Schede con una capienza minore di 2GB sono insufficienti a causa della grandezza minima di un dump della NAND (circa 1GB), che viene fatto alla fine di questa guida per ragioni di sicurezza
  - Schede con capienza maggiore o uguale a 200GB funzionano comunque, ma non sono consigliate per i frequenti errori su grafiche DS/GBA e i temi personalizzati
- **Velocità**: Qualsiasi
  - Attualmente, le schede più economiche nel mercato sono quelle di **Classe 10** (es. SanDisk Ultra). Schede più veloci vanno bene comunque, ma il 3DS non può sfruttarne la velocità
- **Formattazione**: FAT32 con partizionamento MBR
  - Le schede di 32GB o inferiori dovrebbero essere già formattate in questo modo, mentre quelle più grandi dovranno essere formattate manualmente: [Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux))

Per le console che utilizzano una scheda SD di dimensione standard, una scheda microSD in un adattatore per schede SD funzionerà alla stessa maniera.

::: info

Si consiglia vivamente di **utilizzare solo una scheda SD** con una console in qualsiasi momento, poiché non è possibile unire successivamente il contenuto di due schede SD. Quindi, se la console ha già una scheda SD, è necessario utilizzare quella scheda SD per modificare la console, o dovrai copiare tutto su una scheda SD più grande prima o dopo la modifica.

:::

::: info

Se vuoi, puoi verificare che la tua scheda SD sia legittima e priva di errori prima di seguire questa guida usando [H2testw](h2testw-(windows))/[ValiDrive](https://www.grc.com/validrive.htm) (Windows), [F3 (Linux)](f3-(linux)), o [F3XSwift (Mac)](f3xswift-(mac)).

:::

::::

:::: warning

:::details Potenziali rischi (disclaimer)

Effettuando la modifica alla tua console, la sottoponi ad un remoto (ma possibile) rischio di brick (che la renderebbe inutilizzabile). _**Se sbagli a posizionare dei file NON brickerai la console**_, potresti invece brickarla saltando alcuni passaggi.

Riassumendo: Modificare la tua console è sicuro, ma _**è una tua responsabilità**_ se qualcosa dovesse andare storto.

:::

::::

## Terminologia importante

::: warning

Seguendo questa guida non dovrebbero verificarsi perdite di dati, ma è sempre possibile che capiti una corruzione della scheda SD. Se hai dati importanti, dovresti fare un backup dei contenuti della tua scheda SD (soprattutto della cartella `Nintendo 3DS`).

:::

:::: details Cosa significano "directory principale della scheda SD" o "/luma/"?

::: info

![](/images/screenshots/onboarding/sdroot.png)

:::

Quando si copiano i file nella scheda SD, è importante copiarli nella giusta posizione - altrimenti, la console non rileverà il file e l'exploit o il software che stai cercando di utilizzare non funzionerà. Un termine che vedrai frequentemente su questa guida è **directory principale della scheda SD**, il che significa che non si è all'interno di alcuna cartella sulla scheda SD. La cartella che appare immediatamente quando si apre la scheda SD sul computer è chiamata 'directory principale'.

Potresti anche vedere i nomi delle cartelle indicati in questa maniera: `/cartella/`. Gli slash sono usati per indicare le cartelle e non fanno parte del loro nome. Per esempio, `/cartella1/cartella2/` fa riferimento a `cartella2` all'interno di `cartella1`:

::: info

![](/images/screenshots/onboarding/folders.png)

:::

**Le parentesi angolari** (\< e \>) sono usate anche occasionalmente per fare riferimento a identificatori specifici del sistema. Ad esempio, se la guida dice `<ID0>`, si fa riferimento all'identificatore specifico di sistema all'interno della cartella `Nintendo 3DS`, piuttosto che ad una cartella chiamata letteralmente "ID0":

::: info

![](/images/screenshots/onboarding/anglebrackets.png)

:::

::::

:::: details Come scarico file da GitHub?

::: info

![](/images/screenshots/onboarding/github.png)

:::

In questa guida copierai i file scaricati dal tuo computer o cellulare nella scheda SD della tua console. Molti di questi file provengono da GitHub, un sito web utilizzato da sviluppatori per pubblicare le proprie applicazioni open-source. Quando scarichi file da GitHub, dovresti scaricare il file che _non è_ il codice sorgente.

::::

:::: details Come estraggo/apro un file ZIP?

::: info

![](/images/screenshots/onboarding/zipfiles.png)

:::

Alcuni dei file che ti verrà richiesto di scaricare saranno in formato `.zip`, utilizzato per comprimere più file in uno unico.

Quando ti verrà chiesto di "copiare il file (tizio) dall'archivio (caio).zip", significa che dovrai aprire (o meglio, "estrarre") il file ZIP. Dentro il file ZIP ci saranno i file che cerchi, che potrai copiare nella posizione richiesta sulla tua scheda SD.

Nella maggior parte dei sistemi operativi, per estrarre i file basta farci un doppio clic sopra. Se non ci riesci o non funziona, puoi installare invece un tool di terze parti affidabile come [7-Zip](https://7-zip.org/).

::: warning

L'applicazione "WinRAR" per Windows è nota per causare problemi di compatibilità con il 3DS, in particolare con gli exploit di installazione dei custom firmware. Se sei su Windows è necessario utilizzare l'Esplora Risorse predefinito o 7-Zip per estrarre i file.

:::

::::

:::: details Cosa sono le estensioni dei file?

::: info

![](/images/screenshots/onboarding/fileext.png)

:::

Se hai un computer con Windows, le estensioni dopo il nome del file potrebbero essere nascoste per impostazione predefinita, rendendo più complicato trovare il file che stai cercando. Per abilitare le estensioni dopo il nome del file, segui [queste istruzioni](file-extensions-(windows)).

::::

:::: details Cosa significa "espellere" una scheda SD?

::: info

![](/images/screenshots/onboarding/eject-windows.png)

:::

Sulla maggior parte dei dispositivi, il gestore file avrà un pulsante Espelli (⏏️) per rimuovere la scheda SD. Questa opzione termina in modo sicuro tutti i processi attivi e smonta la scheda per poterla poi rimuovere.

È **molto** importante in quanto rimuovere una scheda SD durante l'uso potrebbe corromperne i file e influenzare negativamente il comportamento degli exploit durante la modifica del tuo 3DS.

::::

## Supporto

Se riscontri dei problemi seguendo questa guida, ci sono tanti modi per ricevere aiuto!

- Se hai delle domande a cui non hai ricevuto risposta in questa pagina, le loro risposte potrebbero essere nelle [FAQ Pre-Installazione](faq#pre-installation-faq).
- Se si verifica un problema mentre stai seguendo questa guida, puoi consultare la pagina [Risoluzione dei problemi](troubleshooting) per trovare una soluzione.
- Se ciò di cui abbiamo parlato qui non fosse di aiuto, puoi ricevere supporto diretto sul [canale Discord Nintendo Homebrew (solo in inglese)](https://discord.gg/MWxPgEp).

::: tip

Prosegui con [Cominciamo!](get-started)

:::
