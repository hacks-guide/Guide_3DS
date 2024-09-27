# Informação Importante

::: danger

<!--@include: ./_include/3ds-online.md -->

:::

::: info

Se esta for sua primeira vez modificando um 3DS (ou você não é familiarizado com tecnologia), continue lendo! Caso contrário, se você tiver experiência prévia e souber o que está fazendo, volte para [Começando](get-started).

:::

Esta página cobre algumas das terminologias de computador e informações específicas do 3DS que você deve saber antes de seguir este guia.

Cada seção é recolhida por padrão. Clique ou toque no nome da seção para abri-lo.

## Things you should know about the 3DS

:::: details 3DS/2DS compatibility

::: info

![](/images/screenshots/onboarding/compatible.png)

:::

Este guia funciona com todos os consoles de varejo da família de consoles do Nintendo 3DS (incluindo o 3DS, 3DS XL/LL, 2DS, New 3DS, New 3DS XL/LL e New 2DS XL/LL), independentemente da região ou firmware.

::::

:::: details Computer compatibility

::: info

![](/images/screenshots/onboarding/os.jpg)

:::

Na maioria dos casos você pode seguir este guia, contanto que possa baixar arquivos da Internet e copiá-los para o seu cartão SD. Dependendo de seu dispositivo computador/celular/eletrônico, talvez seja necessário comprar um adaptador USB para cartão SD para permitir que o computador leia seu cartão SD.

::::

:::: details SD card location, type, and capacity

::: info

![](/images/screenshots/onboarding/sdcard.jpg)

:::

O local do cartão SD e o tipo de cartão SD que é aceito dependem do modelo do seu 3DS. Mais informações podem ser encontradas na [página de suporte oficial da Nintendo](https://en-americas-support.nintendo.com/app/answers/detail/a_id/271/~/how-to-insert-an-sd-card-or-microsd-card) (disponível apenas em Inglês).

O 3DS pode ler cartões SD de qualquer capacidade (mesmo aqueles maiores que 32GB), mas o cartão deve ser formatado como FAT32 (**não** exFAT ou NTFS). Se o seu cartão SD ainda não estiver formatado corretamente, use uma dessas páginas para formatá-lo, dependendo do seu sistema operacional: [Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)). Cartões SD maiores que **128GB** não são recomendados devido a problemas conhecidos com temas personalizados e gráficos do GBA/DS.

::: warning

Para seguir este guia, você precisará de um cartão SD com capacidade de pelo menos **2GB**.

:::

::: info

Se você quiser, você pode verificar se há erros no seu cartão SD antes de seguir este guia usando [H2testw (Windows)](h2testw-\(windows\)), [F3 (Linux)](f3-\(linux\)), ou [F3XSwift (Mac)](f3xquickt-\(mac\))

:::

::::

:::: warning
::: details Potential risks (Disclaimer)

Ao aplicar modding em seu console, você o sujeita a possibilidade remota (mas não impossível) de o console ter um brick (renderizado sem funcionamento). _**O posicionamento de arquivos incorreto NÃO irá causar um brick em seu console**_, mas pular as instruções propositalmente talvez o cause.

Resumindo: Modificar o seu console é seguro, mas é _**sua responsabilidade**_ se algo der errado.

:::
::::

## Things you need to do on your computer

::: warning

Seguir sozinho este guia não deve resultar em perda de dados, mas a corrupção do cartão SD é sempre uma possibilidade. Você deve fazer um backup do conteúdo do seu cartão SD (especialmente a pasta `Nintendo 3DS`) se você tiver dados importantes.

:::

:::: details File placement terminology (e.g. "root of SD", "/luma/")

::: info

![](/images/screenshots/onboarding/sdroot.png)

:::

Ao copiar arquivos para o cartão SD, é importante copiá-los para o local certo - caso contrário, o console não detecta o arquivo e o exploit ou o software que você está tentando usar não funcionará. Um termo que você verá com frequência neste guia é **raiz do cartão SD**, o que significa que você não está dentro de nenhuma pasta no seu cartão SD. O diretório que aparece quando você abre o cartão SD pela primeira vez em seu computador é chamado de 'raíz'.

Você também pode ver os nomes das pastas indicados assim: `/pasta/`. As barras são usadas para indicar diretórios e não fazem parte do nome da pasta. Por exemplo, `/pasta1/pasta2/` iria se referir a `pasta2` dentro da `pasta1`:

::: info

![](/images/screenshots/onboarding/folders.png)

:::

**Sinais de Maior que e Menor que** (\< and \>) também são ocasionalmente usados para se referir a identificadores específicos do sistema. Por exemplo, se o guia diz `<ID0>`, ele está se referindo ao identificador específico do sistema dentro da pasta `Nintendo 3DS`, em vez de uma pasta literalmente chamada "ID0":

::: info

![](/images/screenshots/onboarding/anglebrackets.png)

:::

::::

:::: details Downloading files from GitHub

::: info

![](/images/screenshots/onboarding/github.png)

:::

Neste guia, você irá copiar arquivos que são baixados em seu computador/celular para o cartão SD do seu console. Muitos desses arquivos vêm do GitHub, que é um site usado pelos desenvolvedores para publicar seus aplicativos de código aberto. Ao baixar arquivos do GitHub, você deve baixar o arquivo que _não é_ o source code.

::::

:::: details Opening/extracting files

::: info

![](/images/screenshots/onboarding/zipfiles.png)

:::

Alguns dos arquivos que você será solicitado a baixar vêm no formato de arquivo `.zip`, que é usado para empacotar vários arquivos em um só arquivo.

Quando lhe dizem para "copiar (arquivo) de (arquivo).zip", isso significa que você precisa abrir (ou "extrair") o arquivo ZIP. Dentro do arquivo ZIP terá o arquivo que você está procurando, no qual você poderá copiar para o local especificado no seu cartão SD.

Na maioria dos sistemas operacionais, você pode extrair arquivos clicando duas vezes no arquivo. Se isso não funcionar, você pode instalar uma ferramenta de extração de terceiros de boa reputação como [7-zip](https://7-zip.org/).

::::

:::: details (Windows only) File extensions

::: info

![](/images/screenshots/onboarding/fileext.png)

:::

Se o seu computador estiver executando o Windows, extensões de arquivos podem estar ocultadas por padrão, o que pode dificultar a busca de arquivos. Para habilitar extensões de arquivo, siga [estas instruções](file-extensions-\(windows\)).

::::

## Getting help

Se você tiver um problema ao seguir este guia, há muitas maneiras de obter ajuda!

- If you have any questions that haven't been answered on this page, their answers might be in the [Pre-Installation FAQ](faq#pre-installation-faq).
- If you experience an issue while following this guide, you can check the [Troubleshooting](troubleshooting) page for a solution.
- If the resources we've provided here aren't helping, you can get one-on-one support over at [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp).

::: tip

Continue em [Começando](get-started)

:::
