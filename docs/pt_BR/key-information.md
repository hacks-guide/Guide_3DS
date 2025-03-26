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

Na maioria dos casos você pode seguir este guia desde que você consiga baixar arquivos da internet e copiá-los para seu cartão SD. This includes most consumer electronic devices, such as computers running Windows, macOS, Linux, and chromeOS (Chromebooks), as well as Android phones. Depending on your electronic device, you may need to purchase a USB to SD card adapter to allow it to read your SD card.

::::

:::: details Que tipo de cartão SD meu console usa/precisa?

::: info

![](/images/screenshots/onboarding/sdcard.jpg)

:::

O local de inserção do cartão SD e tipo de cartão SD aceito dependem do modelo de seu 3DS. Mais informações podem ser encontradas na [página oficial de suporte da Nintendo](https://en-americas-support.nintendo.com/app/answers/detail/a_id/271/~/how-to-insert-an-sd-card-or-microsd-card).

O 3DS pode ler cartões SD de qualquer capacidade (mesmo os maiores que 32GB), mas o cartão precisa estar formatado como FAT32 (**não** como exFAT ou NTFS). Você pode usar uma das ferramentas a seguir para formatar seu cartão SD, dependendo do seu sistema operacional: [Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)). Cartões SD maiores que **128GB** não são recomendados devido a problemas conhecidos com temas personalizados e gráficos de GBA/DS.

::: info

It is highly recommended to **only use one SD card** with a console at any given time, as you cannot merge the contents of two SD cards later on. So, if your console already has an SD card, you should use that SD card to mod your console, or copy everything to a larger SD card before or after you mod it.

:::

::: warning

Para seguir este guia, você precisará de um cartão SD com capacidade de pelo menos **2GB**.

:::

::: info

If you want, you can check your SD card for errors before following this guide using [H2testw (Windows)](h2testw-\(windows\)), [F3 (Linux)](f3-\(linux\)), or [F3XSwift (Mac)](f3xswift-\(mac\)).

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

Na maioria dos sistemas operacionais, você pode extrair arquivos clicando duas vezes no arquivo. Se isso não funcionar, você pode instalar uma ferramenta de extração confiável de terceiros como o [7-zip](https://7-zip.org/).

::::

:::: details O que são extensões de arquivos?

::: info

![](/images/screenshots/onboarding/fileext.png)

:::

Se seu computador for Windows, as extensões do arquivo podem estar ocultas por padrão, o que pode dificultar para achar os arquivos. Para exibir as extensões de arquivos, siga [estas instruções](file-extensions-\(windows\)).

::::

## Obtendo ajuda

Se você experienciar algum problema enquanto segue este guia, existem muitas maneiras de obter ajuda!

- Se você possuir qualquer dúvida não respondida nesta página, as respostas podem estar no [FAQ de Pré-Instalação](faq#pre-installation-faq).
- Se você estiver experienciando um problema ao seguir este guia, você pode verificar a página de [Troubleshooting](troubleshooting).
- Se os recursos que providenciamos aqui não estiverem ajudando, você pode obter suporte individual no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp).

::: tip

Continue em [Começando](get-started)

:::
