---
title: "Informação Importante"
---

{% include toc title="Tabela de Conteúdo" %}

{% capture update-notice %}
{% include_relative include/3ds-online.txt %}
{% endcapture %}
<div class="notice--danger">{{ update-notice | markdownify }}</div>

Se esta for sua primeira vez modificando um 3DS (ou você não é familiarizado com tecnologia), continue lendo! Caso contrário, se você tiver experiência prévia e souber o que está fazendo, volte para [Começando](get-started).
{: .notice--info}

Esta página cobre algumas das terminologias de computador e informações específicas do 3DS que você deve saber antes de seguir este guia.

Cada seção é recolhida por padrão. Clique ou toque no nome da seção para abri-lo.

## Coisas que você deve saber sobre o 3DS

{% capture compat %}
<summary><strong>Compatibilidade com 3DS/2DS</strong></summary>
![]({{ "/images/screenshots/onboarding/compatible.png" | absolute_url }})
{: .notice--info}

Este guia funciona com todos os consoles de varejo da família de consoles do Nintendo 3DS (incluindo o 3DS, 3DS XL/LL, 2DS, New 3DS, New 3DS XL/LL e New 2DS XL/LL), independentemente da região ou firmware.
{% endcapture %}

<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>Compatibilidade com um computador</strong></summary>
![]({{ "/images/screenshots/onboarding/os.jpg" | absolute_url }})
{: .notice--info}
Na maioria dos casos você pode seguir este guia, contanto que possa baixar arquivos da Internet e copiá-los para o seu cartão SD. Dependendo de seu dispositivo computador/celular/eletrônico, talvez seja necessário comprar um adaptador USB para cartão SD para permitir que o computador leia seu cartão SD.
{% endcapture %}

<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>Local do cartão SD, tipo e capacidade</strong></summary>
![]({{ "/images/screenshots/onboarding/sdcard.jpg" | absolute_url }})
{: .notice--info}

O local do cartão SD e o tipo de cartão SD que é aceito dependem do modelo do seu 3DS. Mais informações podem ser encontradas na [página de suporte oficial da Nintendo](https://en-americas-support.nintendo.com/app/answers/detail/a_id/271/~/how-to-insert-an-sd-card-or-microsd-card) (disponível apenas em Inglês).

O 3DS pode ler cartões SD de qualquer capacidade (mesmo aqueles maiores que 32GB), mas o cartão deve ser formatado como FAT32 (**não** exFAT ou NTFS). Se o seu cartão SD ainda não estiver formatado corretamente, use uma dessas páginas para formatá-lo, dependendo do seu sistema operacional: [Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux)). Cartões SD maiores que **128GB** não são recomendados devido a problemas conhecidos com temas personalizados e gráficos do GBA/DS.

Para seguir este guia, você precisará de um cartão SD com capacidade de pelo menos **2GB**.
{: .notice--warning}

Se você quiser, você pode verificar se há erros no seu cartão SD antes de seguir este guia usando [H2testw (Windows)](h2testw-(windows)), [F3 (Linux)](f3-(linux)), ou [F3XSwift (Mac)](f3xquickt-(mac))
{: .notice--info}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>Possíveis riscos</strong></summary>

Ao aplicar modding em seu console, você o sujeita a possibilidade remota (mas não impossível) de o console ter um brick (renderizado sem funcionamento). ___O posicionamento de arquivos incorreto NÃO irá causar um brick em seu console___, mas pular as instruções propositalmente talvez o cause.

Resumindo: Modificar o seu console é seguro, mas é ___sua responsabilidade___ se algo der errado.

{% endcapture %}
<details>{{ compat | markdownify }}</details>
{: .notice--warning}

## Coisas que você precisa fazer no seu computador

Seguir sozinho este guia não deve resultar em perda de dados, mas a corrupção do cartão SD é sempre uma possibilidade. Você deve fazer um backup do conteúdo do seu cartão SD (especialmente a pasta `Nintendo 3DS`) se você tiver dados importantes.
{: .notice--warning}

{% capture compat %}
<summary><strong>Terminologia de colocação de arquivos (por exemplo, "raiz do SD", "/luma/")</strong></summary>
![]({{ "/images/screenshots/onboarding/sdroot.png" | absolute_url }})
{: .notice--info}

Ao copiar arquivos para o cartão SD, é importante copiá-los para o local certo - caso contrário, o console não detecta o arquivo e o exploit ou o software que você está tentando usar não funcionará. Um termo que você verá com frequência neste guia é **raiz do cartão SD**, o que significa que você não está dentro de nenhuma pasta no seu cartão SD. O diretório que aparece quando você abre o cartão SD pela primeira vez em seu computador é chamado de 'raíz'.

Você também pode ver os nomes das pastas indicados assim: `/pasta/`. As barras são usadas para indicar diretórios e não fazem parte do nome da pasta. Por exemplo, `/pasta1/pasta2/` iria se referir a `pasta2` dentro da `pasta1`:

![]({{ "/images/screenshots/onboarding/folders.png" | absolute_url }})
{: .notice--info}

**Sinais de Maior que e Menor que** (\< and \>) também são ocasionalmente usados para se referir a identificadores específicos do sistema. Por exemplo, se o guia diz `<ID0>`, ele está se referindo ao identificador específico do sistema dentro da pasta `Nintendo 3DS`, em vez de uma pasta literalmente chamada "ID0":

![]({{ "/images/screenshots/onboarding/anglebrackets.png" | absolute_url }})
{: .notice--info}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>Baixando arquivos do GitHub</strong></summary>
![]({{ "/images/screenshots/onboarding/github.png" | absolute_url }})
{: .notice--info}

Neste guia, você irá copiar arquivos que são baixados em seu computador/celular para o cartão SD do seu console. Muitos desses arquivos vêm do GitHub, que é um site usado pelos desenvolvedores para publicar seus aplicativos de código aberto. Ao baixar arquivos do GitHub, você deve baixar o arquivo que *não é* o source code.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>Abrindo/extraindo arquivos</strong></summary>
![]({{ "/images/screenshots/onboarding/zipfiles.png" | absolute_url }})
{: .notice--info}

Alguns dos arquivos que você será solicitado a baixar vêm no formato de arquivo `.zip`, que é usado para empacotar vários arquivos em um só arquivo.

Quando lhe dizem para "copiar (arquivo) de (arquivo).zip", isso significa que você precisa abrir (ou "extrair") o arquivo ZIP. Dentro do arquivo ZIP terá o arquivo que você está procurando, no qual você poderá copiar para o local especificado no seu cartão SD.

Na maioria dos sistemas operacionais, você pode extrair arquivos clicando duas vezes no arquivo. Se isso não funcionar, você pode instalar uma ferramenta de extração de terceiros de boa reputação como [7-zip](https://7-zip.org/).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>(apenas Windows) Extensões de arquivo</strong></summary>
![]({{ "/images/screenshots/onboarding/fileext.png" | absolute_url }})
{: .notice--info}

Se o seu computador estiver executando o Windows, extensões de arquivos podem estar ocultadas por padrão, o que pode dificultar a busca de arquivos. Para habilitar extensões de arquivo, siga [estas instruções](file-extensions-(windows)).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Obtendo ajuda

Se você tiver um problema ao seguir este guia, há muitas maneiras de obter ajuda!

+ Se você tiver alguma pergunta que não tenha sido respondida nesta página, as respostas podem estar no [FAQ de pré-instalação](faq#pre-installation-faq).
- Se você tiver um problema ao seguir este guia, você pode verificar a página de [Troubleshooting](solução de problemas).
+ Se os recursos que fornecemos aqui não estiverem ajudando, você pode obter suporte passo-a-passo no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp).

Continue em [Começando](get-started)
{: .notice--primary}
