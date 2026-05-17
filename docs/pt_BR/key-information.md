# Informação Importante

::: info

Se esta for a sua primeira vez aplicando mods em um 3DS (ou se você não for familiarizado com tecnologia), continue lendo! Caso contrário, se você possuir experiência prévia e souber o que está fazendo, vá para [Começando](get-started).

:::

Esta página cobre algumas terminologias básicas de computador e informações específicas do 3DS que você deve saber antes de seguir este guia.

Cada seção é recolhida por padrão. Clique ou toque no nome da seção para abri-la.

## Compatibilidade

:::: details Com quais consoles este guia é compatível?

::: info

![](/images/screenshots/onboarding/compatible.png)

:::

Este guia funciona com todos os consoles de varejo da família de consoles do Nintendo 3DS (incluindo o 3DS, 3DS XL/LL, 2DS, New 3DS, New 3DS XL/LL e New 2DS XL/LL), independentemente da região ou firmware. NÃO é compatível com a família de consoles DSi (DSi, DSi XL/L). Para consoles da família DSi, consulte [este guia](https://dsi.cfw.guide) em vez disso.

::::

:::: details Que tipo de computador / hardware preciso ter para seguir este guia?

::: info

![](/images/screenshots/onboarding/os.jpg)

:::

Na maioria dos casos você pode seguir este guia desde que você consiga baixar arquivos da internet e copiá-los para seu cartão SD. Isso inclui a maioria dos dispositivos eletrônicos de consumidor, como computadores executando Windows, macOS, Linux e chromeOS (Chromebooks), bem como telefones e tablets executando Android e iOS. Dependendo do seu dispositivo eletrônico, talvez seja necessário comprar um adaptador de cartão SD para permitir que ele leia seu cartão SD.

::::

:::: details Que tipo de cartão SD meu console usa/precisa?

::: info

![](/images/screenshots/onboarding/sdcard.jpg)

:::

O local de inserção do cartão SD e tipo de cartão SD aceito dependem do modelo de seu 3DS. Mais informações podem ser encontradas na [página oficial de suporte da Nintendo](https://en-americas-support.nintendo.com/app/answers/detail/a_id/271/~/how-to-insert-an-sd-card-or-microsd-card). Note that on New 3DS and New 3DS XL consoles, you will need a screwdriver (JIS 00) to access the microSD card, which is located under the backplate.

Your (micro)SD card should conform to the following requirements:

- **Brand**: Any name brand (SanDisk, Samsung, Kingston, Lexar, PNY, etc.)
  - Beware of fake or illegitimate SD cards (e.g. Memory SD, PRO PLUS, SanDian, Extreme Pro), particularly those purchased from online marketplaces like AliExpress. See [here](https://www.flashcarts.net/microsd-fakes) for a guide on spotting fake SD cards. Using a fake or illegitimate SD card is very likely to result in things not working, or even **data loss**!
- **Capacity**: Between 2GB and 128GB (inclusive)
  - These cards will be labelled SD (<=2GB), SDHC (4GB-32GB), or SDXC (64GB+)
  - Cards smaller than 2GB are insufficient due to the minimum size of a NAND dump (around 1GB), which is made at the end of this guide as a safety measure
  - Cards 200GB or larger will still work, but are not recommended due to possible issues with DS/GBA graphics and custom themes
- **Speed**: Any
  - Currently, the cheapest cards on the market are **Class 10** (e.g. SanDisk Ultra). Faster cards are acceptable, but the 3DS cannot take advantage of their speed
- **Format**: FAT32 with MBR
  - Cards that are 32GB or smaller should already be formatted in this way, while larger SD cards will have to be manually formatted: [Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux))

For consoles that use a full-size SD card, a microSD card in an SD card adapter will work identically.

::: info

É altamente recomendado que **use apenas um cartão SD** com um console em determinado momento, já que você não pode unir os conteúdos de dois cartões SD mais tarde. Então, se o seu console já possui um cartão SD, você deve usar esse cartão SD para aplicar mods em seu console, ou copie tudo para um cartão SD maior antes ou depois de realizar os mods.

:::

::: info

If you want, you can check your SD card for errors/legitimacy before following this guide using [H2testw](h2testw-(windows))/[ValiDrive](https://www.grc.com/validrive.htm) (Windows), [F3 (Linux)](f3-(linux)), or [F3XSwift (Mac)](f3xswift-(mac)).

:::

::::

:::: warning

:::details Riscos em potencial (Aviso)

Ao modificar seu console, você o sujeita a possibilidade remota (mas não zero) de que o console possa ter um brick (renderizado como não-funcional). _**Colocar arquivos em locais incorretos NÃO irá causar um brick em seu console**_, mas pular as instruções de forma proposital talvez o faça.

Resumindo: Aplicar mods seu console é seguro, mas é _**sua responsabilidade**_ se algo der errado.

:::

::::

## Terminologia importante

::: warning

Apenas seguir este guia não deve resultar em perda de dados, mas a corrupção do cartão SD é sempre uma possibilidade. Você deve fazer um backup do seu cartão SD (especialmente da pasta `Nintendo 3DS`) se você possuir dados importantes.

:::

:::: details O que "raíz do SD" ou "/luma/" significam?

::: info

![](/images/screenshots/onboarding/sdroot.png)

:::

Ao copiar arquivos para o cartão SD, é importante copiá-los para o local correto - caso contrário o console não detectará o arquivo e o exploit ou software que você estiver tentando utilizar não funcionará. Um termo que você verá frequentemente neste guia é **raíz do cartão SD**, que significa que você não está dentro de nenhuma pasta no seu cartão SD. O diretório que aparece quando você abre seu cartão SD pela primeira vez no computador é chamado de 'raíz'.

Você também poderá ver nomes de pastas indicados assim: `/pasta/`. As barras são usadas para indicar diretórios e não fazem parte do nome da pasta. Por exemplo, `/pasta1/pasta2/` se refere à `pasta2` dentro da `pasta1`:

::: info

![](/images/screenshots/onboarding/folders.png)

:::

**Sinais de Maior Que e Menor Que** (\< e \>) também são usados ocasionalmente para se referir a identificadores específicos do sistema. Por exemplo, se o guia diz `<ID0>`, ele está se referindo ao identificador específico do sistema dentro da pasta `Nintendo 3DS` e não uma pasta literalmente chamada "ID0":

::: info

![](/images/screenshots/onboarding/anglebrackets.png)

:::

::::

:::: details Como baixo arquivos do GitHub?

::: info

![](/images/screenshots/onboarding/github.png)

:::

Neste guia, você copiará os arquivos baixados no seu computador/telefone para o cartão SD do seu console. Vários destes arquivos vêm do GitHub, que é um site utilizado por desenvolvedores para publicar seus trabalhos de código aberto. Ao baixar arquivos do GitHub, você deverá baixar o arquivo que _não_ é o código-fonte.

::::

:::: details Como eu extraio/abro um arquivo ZIP?

::: info

![](/images/screenshots/onboarding/zipfiles.png)

:::

Alguns dos arquivos que você deverá baixar vêm no formato de arquivo `.zip`, utilizado para comprimir vários arquivos em um único arquivo.

Quando dizem para "copiar (arquivo) de (arquivo).zip" significa que você precisa abrir (ou "extrair") o arquivo ZIP. Dentro do arquivo ZIP estará o arquivo que você precisará e poderá copiá-lo para o local especificado do seu cartão SD.

Na maioria dos sistemas operacionais, você pode extrair arquivos clicando duas vezes no arquivo. If this doesn't work, you can install a reputable third-party extraction tool like [7-Zip](https://7-zip.org/) instead.

::: warning

O aplicativo para Windows "WinRAR" é conhecido especificamente por causar problemas de compatibilidade com o 3DS, particularmente com a instalação de custom firmware. If you are on a Windows computer, you should use either the default File Explorer or 7-Zip to extract files.

:::

::::

:::: details O que são extensões de arquivos?

::: info

![](/images/screenshots/onboarding/fileext.png)

:::

Se seu computador for Windows, as extensões do arquivo podem estar ocultas por padrão, o que pode dificultar para achar os arquivos. Para exibir as extensões de arquivos, siga [estas instruções](file-extensions-(windows)).

::::

:::: details What does it mean to "eject" an SD card?

::: info

![](/images/screenshots/onboarding/eject-windows.png)

:::

On most devices, your file manager will have an Eject (⏏️) button for your SD card. Using this option safely stops all activity and unmounts the card so it can be removed.

This is **very** important because removing the SD card while it is in use can cause corruption and may negatively affect the outcome of exploits when modding your 3DS.

::::

## Obtendo ajuda

Se você experienciar algum problema enquanto segue este guia, existem muitas maneiras de obter ajuda!

- Se você possuir qualquer dúvida não respondida nesta página, as respostas podem estar no [FAQ de Pré-Instalação](faq#pre-installation-faq).
- Se você estiver experienciando um problema ao seguir este guia, você pode verificar a página de [Troubleshooting](troubleshooting).
- Se os recursos que fornecemos aqui não forem úteis, você pode obter suporte individual em [Nintendo Homebrew no Discord](https://discord.gg/MWxPgEp).

::: tip

Continue em [Começando](get-started)

:::
