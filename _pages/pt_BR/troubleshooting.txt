---
title: "Troubleshooting"
---

Esta página oferece troubleshooting para problemas comuns. Se você não consegue resolver seu problema com o conselho nesta página, por favor entre no [Nintendo Homebrew no Discord](https://discord.gg/MWxPgEp) e descreva o seu problema, incluindo o que você já tentou.

{% capture compat %}
<summary>Tabela de Conteúdo</summary>

Usado em múltiplas páginas:
* [SafeB9SInstaller](#problemas-com-o-safeb9sinstaller)

Páginas do guia:
* [Instalando boot9strap (Soundhax)](#installing-boot9strap-soundhax)
* [Instalando boot9strap (MSET9)](#installing-boot9strap-mset9)
* [Instalando boot9strap (SSLoth-Browser)](#installing-boot9strap-ssloth-browser)
* [Instalando boot9strap (super-skaterhax)](#installing-boot9strap-super-skaterhax)
* [Finalizando a instalação](#finalizando-a-instalação)

Erros após a instalação:
* [Problemas na inicialização](#boot-issues-on-consoles-with-custom-firmware)
* [Problemas de software](#software-issues-on-consoles-with-custom-firmware)

{% endcapture %}
<details>{{ compat | markdownify }}</details>
{: .notice--info}

## Problemas com o SafeB9SInstaller

### Antes de abrir o SafeB9SInstaller

{% capture compat %}
<summary><u>Failed to open SafeB9SInstaller.bin</u></summary>

O arquivo `SafeB9SInstaller.bin` está ausente ou fora do lugar apropriado. Baixe a última versão do [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip), extraia e coloque `SafeB9SInstaller.bin` na raiz do seu cartão SD. Não adicione a extensão `.bin` se você não a vê.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

### SigHaxed FIRM was not installed! Check lower screen for more info.

{% capture compat %}
<summary><u>MicroSD Card - init failed</u></summary>

O cartão SD está provavelmente agindo estranho. Tente reformatar o seu cartão SD ([Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux))). Se isso não funcionar, tente outro cartão SD.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>SigHaxed FIRM - File not found</u></summary>

Você não tem o `boot9strap.firm` e o `boot9strap.firm.sha` da pasta `boot9strap`, ou a pasta `boot9strap` está com o nome errado. Baixe a versão mais recente do [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip), e coloque `boot9strap.firm` e `boot9strap.firm.sha` na pasta `boot9strap`.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>SigHaxed FIRM - invalid FIRM</u></summary>

Há um problema com seus arquivos `boot9strap.firm` e `boot9strap.firm.sha`. Baixe novamente a versão mais recente do [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip), e coloque o `boot9strap.firm` e `boot9strap.firm.sha` na pasta `boot9strap`.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Secret Sector - File not found</u></summary>

Você não tem o `secret_sector.bin` da pasta `boot9strap`, ou a pasta `boot9strap` está com um nome incorreto. Baixe o [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a51%2fannouncce&tr=udp%3a%2f%2ftracker.lelux. i%3a969%2fanunciou&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fanúncio&tr=udp%3a%2f%2frastreador. oeking.me%3a6969%2fanunciando&tr=udp%3a%2f%2frastreador. onitorit4.me%3a6969%2fanunciou&tr=udp%3a%2f%2ftracker.olosh.space%3a6969%2fanunciou&tr=udp%3a%2f%2ftracker.pomf. e%3a80%2fanúncio &tr=udp%3a%2f%2frastreador.srv00.com%3a6969%2fanunciou&tr=udp%3a%2f%2frastreador. heoks.net %3a 6969%2fanunciando&tr=udp%3a%2f%2frastreador.tiny-vps. om%3a6969%2fanunciando&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fanúncio&tr=udp%3a%2f%2frastreador. erobytes.xyz%3a1337%2fanuncia &tr=udp%3a%2f%2ftracker1.bt.moack. o.kr%3a80%2fanunciando&tr=udp%3a%2f%2fvibe.sleepyinternetfun. yz%3a1738%2fanuncia &tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fanunciando&tr=udp%3a%2f%2frastreador. penbittorrent.com%3a6969%2fanunciando&tr=udp%3a%2f%2f9.rarbg. om%3a2810%2fanunciou&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fanunciou&tr=udp%3a%2f%2fexodus. esync.com%3a6969%2fanuncia &tr=http %3a%2f%2fopenbittorrent. om%3a80%2fanunciado) usando um cliente torrent, e coloque-o na pasta `boot9strap`.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Outra coisa</u></summary>

Entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp) para obter ajuda, e descreva a mensagem que você vê.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Instalando boot9strap (Soundhax)

{% capture compat %}
<summary><u>Tela vermelha/roxa/rosa e branca após executar o Soundhax</u></summary>

Se o seu console está na versão de sistema 9.4.0, 9.5.0, ou 9.6.0, você pode estar encontrando um bug com uma versão antiga do universal-otherapp. Baixe a versão mais recente [aqui](https://github.com/TuxSH/universal-otherapp/releases/latest).

Se seu console não está nesses firmware, isso provavelmente indica que você já tem custom firmware. Você deve [checar por CFW](checking-for-cfw).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"Um erro ocorreu, forçando o fechamento do software..." (caixa de mensagens branca)</u></summary>

Há um problema com seu arquivo `otherapp.bin` (ele está faltando, colocado no lugar errado ou corrompido). Baixe a última versão do [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) e coloque-a na raiz do seu cartão SD.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"Não foi possível tocar"</u></summary>

Você tem o arquivo Soundhax errado para o seu console e região, ou seu console é incompatível com o Soundhax. No último caso, seu curso de ação irá determinar em qual versão o seu 3DS está no momento. Entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp) para obter ajuda.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Failed to mount the SD card!</u></summary>
Faça o backup de seus dados e formate novamente seu cartão SD como FAT32 com a ferramenta recomendada dependendo do seu sistema operacional ([Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux))). MiniTool Partition Wizard e a ferramenta de formatação da HP (HPUSBDisk) são conhecidas por causar problemas com cartões SD para 3DS.

Se isso falhar, tente usar outro cartão SD.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Instalando boot9strap (MSET9)

{% capture mset9-chorus %}
    + **Windows**: Clique duas vezes em `MSET9-Windows.bat`
    + **macOS**: clique duas vezes em `MSET9-macOS.command` e digite sua senha, se solicitado
    + **Linux**: Abra uma janela do Terminal, use `cd` até o root do seu cartão SD, então digite `python3 mset9.py` e pressione Enter
{% endcapture %}

{% capture compat %}
<summary><u>Python 3 não está instalado</u></summary>

O Python não está instalado no computador que você está usando. Baixe-o do [site do Python](https://www.python.org/downloads/), clique duas vezes no instalador e siga as instruções para instalar o Python. Quando o Python estiver instalado, tente novamente.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>HOME Menu extdata: Missing!</u></summary>

Por favor, ligue seu console com o seu cartão SD inserido e, em seguida, verifique o status de MSET9 novamente.

Se isso não funcionar, seu cartão SD precisa ser formatado:

1. Copie tudo do cartão SD para seu PC
1. Formate o cartão SD ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Copie tudo de volta
1. Comece novamente da [Seção I Passo 7](installing-boot9strap-(mset9-cli)#section-i---prep-work)

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Mii Maker extdata: Missing!</u></summary>

Dados do Mii Maker não foram encontrados no cartão SD. Por favor, ligue seu console com o seu cartão SD inserido, inicie o Mii Maker, então verifique o status de MSET9 novamente.

Se isso não funcionar, seu cartão SD precisa ser formatado:

1. Copie tudo do cartão SD para seu PC
1. Formate o cartão SD ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Copie tudo de volta
1. Comece novamente da [Seção I Passo 8](installing-boot9strap-(mset9-cli)#section-i---prep-work).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Title database: Not initialized!</u></summary>

Certifique-se de que você redefiniu a title database.
    + Ligue o seu console com o cartão SD inserido 
    + Inicie as Configurações do Sistema e navegue para `Gerenciador de Dados` -> `Nintendo 3DS` -> `Software` -> Apagar ([imagem](/images/screenshots/database-reset.jpg))
        + Isso não irá apagar nenhum dos seus dados
    + Se você receber uma mensagem de redefinição, depois de reiniciar, desligue seu console e comece novamente da [Seção I Passo 14](installing-boot9strap-(mset9-cli)#section-i---prep-work)

Se você *não* receber uma mensagem de redefinição, seu cartão SD precisa ser formatado:

1. Copie tudo do cartão SD para seu PC
1. Formate o cartão SD ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Copie tudo de volta
1. Execute o script MSET9:
    {{ mset9-chorus }}
1. Digite o número correspondente ao modelo do seu console e a versão, então pressione Enter
1. Digite `2` e pressione enter para verificar o status do MSET9
    + Isto irá criar dummy databases novamente
1. Feche a janela de script do MSET9
1. Comece novamente da [Seção I Etapa 12](installing-boot9strap-(mset9-cli)#section-i---prep-work).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 01: Couldn't find Nintendo 3DS folder</u></summary>

Você não está executando o MSET9 na raiz do cartão SD, ou o cartão SD está sem a pasta Nintendo 3DS.

Lembre-se, seu cartão SD deve ficar assim:

![MSET9 root layout](/images/screenshots/mset9/mset9-root-layout.png)
{: .notice--info}

Se o layout do seu cartão SD estiver correto, então o cartão SD provavelmente não está sendo lido pelo seu console e precisa ser formatado:

1. Copie tudo do cartão SD para seu PC
1. Formate o cartão SD ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Copie tudo de volta
1. Comece novamente do início da [Seção I](installing-boot9strap-(mset9-cli)#section-i---prep-work)

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 02: Your SD is write protected</u></summary>

A proteção contra gravação está ativada neste cartão SD. Se você está usando um cartão SD completo, certifique-se de que a alavanca está [para cima](/images/sdlock.png). Caso contrário, tente ejetar e reinserir seu cartão SD.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 04: You don't have 1 ID0, you have (#)!</u></summary>

Você tem múltiplas pastas ID0. Para determinar a pasta correta, siga estas instruções:

1. Renomeie a pasta `Nintendo 3DS` para `BACKUP_Nintendo 3DS`
1. Reinsira o cartão SD no seu console
1. Ligue o seu console
1. Espere o console gerar os dados do cartão SD
    + Seus aplicativos terão desaparecido. Isto é normal e será resolvido em breve
1. Desligue seu console
1. Insira o cartão SD no seu computador
1. Vá até a pasta `Nintendo 3DS` no seu cartão SD
1. Anote os primeiros caractéres da pasta que você ver
    + Este é seu ID0 real, no qual nós iremos manter na pasta Nintendo 3DS real
1. Remova o ID0 da pasta `Nintendo 3DS` atual
1. Mova a pasta do verdadeiro ID0 da pasta `BACKUP_Nintendo 3DS` para a pasta `Nintendo 3DS`
1. Se existir, mova a pasta `Private` da pasta `BACKUP_Nintendo 3DS` para a pasta `Nintendo 3DS`

Assim que você tiver feito isso, continue da [Seção I Passo 3](installing-boot9strap-(mset9-cli)#section-i---prep-work).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 05: You don't have 1 ID1, you have (#)!</u></summary>

{% include_relative include/id1-check.txt %}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 06: You need at least 16MB free</u></summary>

Seu cartão SD não possui espaço suficiente para acionar o MSET9. Libere um pouco de espaço e tente novamente.

No final deste guia, você precisará de pelo menos 1,3GB para fazer um backup da NAND, então é melhor liberar pelo menos isso.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 07: One or more files are missing or malformed!</u></summary>

Um ou mais arquivos que o MSET9 precisa executar estão ausentes ou corrompidos. Baixe novamente o [Release `.zip` do MSET9](https://github.com/hacks-guide/MSET9/releases/latest) e extraia-o para a raiz do seu cartão SD, substituindo todos os arquivos existentes, então tente novamente.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error 18: Windows Locale Settings are broken!</u></summary>

{% include_relative include/winerror234.txt %}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Tela vermelha após reinserir cartão SD (Seção II Passo 11)</u></summary>

Talvez você esteja sem o `SafeB9S.bin` na raiz do seu cartão SD, ou o arquivo pode estar corrompido. Copie-o do `.zip` do MSET9, substituindo quaisquer arquivos existentes, depois siga essas instruções para remover o arquivo de ativação:

1. Força o desligamento do seu console segurando o botão POWER por 20 segundos
1. Insira o cartão SD no seu computador
1. Execute o script MSET9:
    {{ mset9-chorus }}
1. Digite o número correspondente ao modelo do seu console e a versão, então pressione Enter
    + O estado atual deve exibir [Injected](/images/screenshots/mset9/mset9-injected.png)
    + Se você já removeu o arquivo de ativação (ou nunca foi injetado), o estado atual irá mostrar [Ready](/images/screenshots/mset9/mset9-ready. ng), e você pode [tentar novamente a Seção II](installing-boot9strap-(mset9-cli)#section-ii---mset9)
1. Digite `4` e pressione Enter
1. Assim que a janela disser "Removed trigger file", digite `0` e depois pressione Enter
1. Reinsira o cartão SD no seu console
1. Ligue o seu console
1. Retorne à [Seção II Passo 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

Alternativamente, seu cartão SD pode estar sem a formatação apropriada ou mal particionado. Depois de remover o arquivo de ativação, formate-o:

1. Copie tudo do cartão SD para seu PC
1. Formate o cartão SD ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Copie tudo de volta
1. Comece novamente da [Seção II Etapa 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Configurações do Sistema carregando infinitamente após reinserir o cartão SD</u></summary>

Você provavelmente fez algo diferente das instruções do MSET9, selecionou o modelo/versão errado, ou seu cartão SD precisa ser formatado. Certifique-se de estar escolhendo o [modelo](/images/3dsmodels.png) e a versão de firmware corretos ao abrir o script.

Siga estas instruções para remover o arquivo de ativação e tentar novamente a Seção II:

1. Força o desligamento do seu console segurando o botão POWER por 20 segundos
1. Insira o cartão SD no seu computador
1. 1. Execute o script MSET9:
    {{ mset9-chorus }}
1. Digite o número correspondente ao modelo do seu console e a versão, então pressione Enter
    + O estado atual deve exibir [Injected](/images/screenshots/mset9/mset9-injected.png)
    + Se você já removeu o arquivo de ativação (ou nunca foi injetado), o estado atual irá mostrar [Ready](/images/screenshots/mset9/mset9-ready.png), e você está pronto para tentar novamente a Seção II
1. Digite `4` e pressione Enter
1. Assim que a janela disser "Removed trigger file", digite `0` e depois pressione Enter
1. Reinsira o cartão SD no seu console
1. Ligue o seu console
1. Retorne à [Seção II Passo 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

Se você continua tendo este problema e tem certeza de que fez tudo corretamente, certifique-se de que o arquivo de ativação foi removido e formate seu cartão SD:

1. Copie tudo do cartão SD para seu PC
1. Formate o cartão SD ([Windows](formatting-sd-(windows)), [Linux](formatting-sd-(linux)), [macOS](formatting-sd-(mac)))
1. Copie tudo de volta
1. Comece novamente da [Seção II Etapa 1](installing-boot9strap-(mset9-cli)#section-ii---mset9)

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Erro "An exception occured" após acionar MSET9</u></summary>

Isso provavelmente indica que você já possui custom firmware. Você deve [checar por CFW](checking-for-cfw).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Installing boot9strap (super-skaterhax)

{% capture compat %}
<summary><u>"Ocorreu um erro. Salve seus dados em qualquer software atualmente em uso e reinicie o sistema."</u></summary>

A data está definida incorretamente. Para defini-la corretamente, siga estas etapas:

1. Selecione o ícone de Configuração do Sistema no Menu HOME, e toque em Abrir.
1. Toque em Outras Configurações.
1. Toque em Data e Hora.
1. Toque na data de hoje.
1. Use as setas para cima/baixo para definir o dia, mês e ano correto.
1. Selecione OK para confirmar.

Se o problema persistir:

+ Certifique-se de que o `arm11code.bin`, `browserhax_hblauncher_ropbin_payload.bin`, e `boot.3dsx` estão na raiz do cartão SD (não dentro de nenhuma pasta)
+ Certifique-se de que você selecionou o payload correto para a sua região E versão do sistema
+ Certifique-se de que suas configurações de região se pareçam [com isso](/images/screenshots/skater_lang.png)
+ Tente redefinir os dados do seu navegador:
    1. Inicie o navegador, e então abra as configurações do navegador
    1. Role até a parte inferior e selecione "Redefinir os dados salvos" (também pode ser chamado de "Inicializar Dados Salvos" ou "Limpar todos os dados salvos")
    1. Tente o exploit novamente
+ Tente alterar o idioma do sistema para algo diferente do idioma atual

{% endcapture %}
<details>{{ compat | markdownify }}</details>


{% capture compat %}
<summary><u>"Ocorreu um erro. Segure o botão POWER para desligar..." (tela preta com texto)</u></summary>

O arquivo `arm11code.bin` está faltando ou está deslocado. Certifique-se de copiar os arquivos da [versão mais recente do super-skaterhax](https://github. om/zoogie/super-skaterhax/releases/latest) para sua região e versão para a raiz do seu cartão SD (não dentro de uma pasta).

![]({{ "/images/screenshots/skater-root-layout.png" | absolute_url }})
{: .notice--info}

{% endcapture %}
<details>{{ compat | markdownify }}</details>


{% capture compat %}
<summary><u>An exception occured ou "DLL_HEAP_INFORMATION" após pressionar GO! GO!</u></summary>

Isso provavelmente indica que você já possui custom firmware. Você deve [checar por CFW](checking-for-cfw).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Instalando boot9strap (SSLoth-Browser)

{% capture compat %}
<summary><u>Tela vermelha/roxa/roxa e branca após executar o Browserhax</u></summary>

Isso provavelmente indica que você já possui custom firmware. Você deve [checar por CFW](checking-for-cfw).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"Ocorreu um erro. Segure o botão POWER para desligar..." (tela preta com texto)</u></summary>

O arquivo `arm11code.bin` está faltando ou está deslocado. Baixe a última versão do [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), coloque `otherapp.bin` na raiz do seu cartão SD e renomeie-o para `arm11code.bin`. Não adicione a extensão `.bin` se você não a vê.
{% endcapture %}
<details>{{ compat | markdownify }}</details>


{% capture compat %}
<summary><u>"Um erro ocorreu, forçando o fechamento do software..." (caixa de mensagens branca)</u></summary>

Pode haver um problema com o seu arquivo `arm11code.bin`. Baixe a última versão do [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), coloque `otherapp.bin` na raiz do seu cartão SD e renomeie-o para `arm11code.bin`. Não adicione a extensão `.bin` se você não a vê.

Você também pode tentar redefinir seus dados salvos do navegador:

1. Inicie o navegador, e então abra as configurações do navegador
1. Role até a parte inferior e selecione "Redefinir Dados Salvos" (também pode ser chamado de "Inicializar Dados Salvos" ou "Limpar Todos os Dados Salvos")
1. Tente o exploit novamente

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Abrindo o código QR ou URL do browserhax causa um crash</u></summary>

Exploits de navegador (como este) são muitas vezes instáveis e caem com frequência, mas em alguns casos eles podem ser consertados seguindo as seguintes etapas.

1. Inicie o navegador, e então abra as configurações do navegador
1. Role até a parte inferior e selecione "Redefinir Dados Salvos" (também pode ser chamado de "Inicializar Dados Salvos" ou "Limpar Todos os Dados Salvos")
1. Tente o exploit novamente
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Pedido para atualizar o sistema ao abrir o navegador</u></summary>

O proxy SSLoth está configurado incorretamente. Refaça a seção SSLoth na página.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Erro 032-0420 ao abrir o navegador</u></summary>

Siga estes passos em ordem:

1. Abra as Configurações do Sistema no seu console
1. Navegue para `Configurações da Internet` -> `Configurações de Conexão`
1. Clique no seu slot de conexão da rede e navegue para `Alterar configurações` -> `Próxima página (seta direita)` -> `Configurações de proxy`
1. Defina "Configurações de proxy" para "Não"
1. Clique em OK, e depois clique em Salvar
1. Quando solicitado, clique em "Testar" para executar o teste de conexão
    + O teste deve ser bem-sucedido
1. Clique em "OK" para continuar
1. Pressione "Voltar" duas vezes e, em seguida, "Fechar" para voltar ao Menu HOME
1. Abra o Navegador Internet
1. Se for solicitado sobre uma atualização de sistema, pressione OK
    + Isso não vai atualizar o sistema
1. Comece novamente pela [Seção II](installing-boot9strap-(ssloth-browser).html#section-ii---ssloth)
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Congelado em "Doing agbhax..."</u></summary>
Pode haver um problema com o seu arquivo `arm11code.bin`. Baixe novamente a versão mais recente do [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), coloque-o na raiz do seu cartão SD e renomeie-o para `arm11code.bin`. Não adicione a extensão `.bin` se você não a vê.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"PrepareArm9ForTwl returned error c8804631!"</u></summary>

Entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp) para obter ajuda.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Failed to mount the SD card!</u></summary>

Faça o backup de seus dados e formate novamente seu cartão SD como FAT32 com a ferramenta recomendada dependendo do seu sistema operacional ([Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux))). MiniTool Partition Wizard e a ferramenta de formatação da HP (HPUSBDisk) são conhecidas por causar problemas com cartões SD para 3DS.

Se isso falhar, tente usar outro cartão SD.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Finalizando a instalação

{% capture compat %}
<summary><u>Não é possível atualizar o console</u></summary>

As etapas abaixo podem ser tentadas em qualquer ordem, mas são listadas de maneira mais fácil para maneira mais difícil de realizar.

1. Defina suas configurações de DNS para "Automático"
1. Aproxime-se do seu roteador Wi-Fi
1. Atualize a partir do Safe Mode desligando o console, segurando (Gatilho Esquerdo) + (Gatilho Direito) + (Botão direcional para cima) + (A) na inicialização, seguindo as instruções na tela
1. Exclua sua conexão Wi-Fi e reconecte sua rede Wi-Fi novamente
1. Reinicie seu roteador Wi-Fi
1. Conecte-se a uma conexão Wi-Fi diferente, como um ponto de acesso móvel
1. Servidores Nintendo podem estar desligados; Tente novamente mais tarde
1. Se o erro persistir, [siga CTRTransfer](ctrtransfer), e tente novamente
1. Para mais suporte (em Inglês), entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp)
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #22: finalize.romfs is invalid</u></summary>

O arquivo `finalize.romfs` está corrompido ou é ilegível. [Re-download it](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) and copy it to the root of the SD card, replacing any existing copy, then try again.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Information #23: finalize.romfs in wrong location</u></summary>

O arquivo `finalize.romfs` foi colocado no local errado ao invés de raiz do SD. O script tentará resolver isso, mas requer a sua permissão para fazê-lo. Aperte (A) nas próximas mensagens para continuar.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #24: SD is write-protected</u></summary>

Certifique-se de que seu cartão SD não esteja [bloqueado](/images/sdlock.png). Se o cartão SD não estiver bloqueado e você continuar a receber este erro, junte-se ao [Nintendo Homebrew no Discord](https://discord.gg/MWxPgEp) para assistência.

{% endcapture %}
<details>{{ compat | markdownify }}</details>


{% capture compat %}
<summary><u>Error #02: Missing essential.exefs</u></summary>

Você disse 'No' para a mensagem "Make essential files backup?" no GodMode9. Desligue seu dispositivo, ligue-o enquanto segura (Start) para entrar novamente no GodMode9, diga 'Yes' para a mensagem, e então tente novamente.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}

<summary><u>Error #04: No space</u></summary>

Você precisa de pelo menos 1.3GB de espaço livre para executar o backup da NAND, que é parte do script. Se você não tem espaço suficiente, siga estes passos:

1. Desligue seu console
1. Insira o cartão SD no seu computador
1. Copie a pasta `Nintendo 3DS` da raiz do seu cartão SD para o seu computador
1. Exclua a pasta Nintendo 3DS do cartão SD
1. Reinsira o cartão SD no seu console
1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
1. Pressione o botão (Home)
1. Selecione "Scripts..."
1. Selecione "finalize"
1. Aperte (A) para criar um backup da NAND
    + Isso pode demorar cerca de quinze minutos
1. Aperte (A) novamente
    + Seu console irá desligar automaticamente
1. Insira o cartão SD no seu computador
1. Copie os arquivos em `gm9/backups/` do seu SD para um local seguro no seu computador
1. Apague os arquivos `<date>_<serialnumber>_sysnand_##.bin` e `<date>_<serialnumber>_sysnand_##.bin.sha` do cartão SD
1. Copie a pasta `Nintendo 3DS` do seu computador para a raiz do seu cartão SD
1. Exclua a pasta `Nintendo 3DS` do seu computador

Agora que você tem seu backup da NAND em um lugar seguro:

1. Reinsira o cartão SD no seu console
1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
1. Pressione o botão (Home)
1. Selecione "Scripts..."
1. Selecione "finalize"
1. Continue o script normalmente
    + O backup da NAND será automaticamente pulado

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Information #05: No title database</u></summary>

Aperte (A) para importar um title database, desbloqueie SysNAND apertando os botões na tela, e depois continue o script normalmente.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #06 ou "Error: Could not open directory" ao tentar fazer um backup da NAND</u></summary>

Certifique-se de que você tem pelo menos 1.3GB disponíveis no seu cartão SD. Se você não tem espaço suficiente, siga estes passos:
1. Desligue seu console
1. Insira o cartão SD no seu computador
1. Copie a pasta `Nintendo 3DS` da raiz do seu cartão SD para o seu computador
1. Exclua a pasta Nintendo 3DS do cartão SD
1. Reinsira o cartão SD no seu console
1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
1. Faça um [backup da NAND](godmode9-usage#criating-a-nand-backup)
1. Copie os arquivos em `gm9/out` do seu SD para um local seguro no seu computador
1. Apague os arquivos `<date>_<serialnumber>_sysnand_##.bin` e `<date>_<serialnumber>_sysnand_##.bin.sha` do cartão SD, mantendo essential.exefs em `/gm9/out/`
1. Copie a pasta `Nintendo 3DS` do seu computador para a raiz do seu cartão SD
1. Exclua a pasta `Nintendo 3DS` do seu computador

Se você tiver espaço suficiente no seu cartão SD, seu SD pode estar corrompido ou com defeito. Verifique se há erros no seu cartão SD de acordo com o sistema operacional do seu computador: [Windows](h2testw-(windows)), [Linux](f3-(linux)), [macOS](f3xquickt-(mac)).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #12: Copy (file).db fail</u></summary>

Certifique-se de que seu cartão SD não esteja [bloqueado](/images/sdlock.png). Se o cartão SD não estiver bloqueado e você continuar a receber este erro, junte-se ao [Nintendo Homebrew no Discord](https://discord.gg/MWxPgEp) para assistência.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Information #17: Duplicate NAND backup</u></summary>

O script detectou que a pasta Nintendo 3DS está faltando e que você já fez um backup da NAND antes. Se você pretende instalar o homebrew, você deve fazer o seguinte:

1. Aperte (B) para cancelar outro backup da NAND
1. Segure (R) e aperte (Start) ao mesmo tempo para desligar seu console
1. Copie os arquivos em `/gm9/backups/` do seu SD para um local seguro no seu computador
1. Apague `/gm9/backups/` do seu cartão SD
1. Se você moveu sua pasta Nintendo 3DS para fora do seu cartão SD para chegar a este ponto, copie-a de volta para o seu cartão SD
    + Se você não possui uma pasta Nintendo 3DS, Inicie no Menu HOME pelo menos uma vez com o cartão SD inserido para gerá-la automaticamente
1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
1. Aperte (Home) para abrir o menu de ações
1. Selecione "Scripts..."
1. Selecione "finalize"
1. Siga as instruções no script, respondendo a quaisquer perguntas que lhe sejam feitas 

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Error #18a/18b: MSET9 detected</u></summary>

Você não removeu o MSET9 na página anterior. O script tentará remover o MSET9 para você; siga as instruções dadas pelo script.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

---

## Problemas de inicialização em consoles com custom firmware

As etapas detalhadas aqui geralmente assumem que o seu console tem um setup de custom firmware moderno (boot9strap + Luma3DS 8.0 ou superior). Se o seu console está executando uma instalação homebrew mais antiga (por exemplo, algo baseado em arm9loaderhax ou menuhax), você deve atualizar sua configuração antes de tentar essas instruções.
{: .notice--info}

### Indicadores de luz de notificação ou liga/desliga

{% capture compat %}
<summary><u>Meu console é desligado quando eu tentar ligá-lo e/ou o LED de notificação mostra uma cor na inicialização</u></summary>

Há um problema com o seu arquivo `boot.firm`. Se você estiver executando [boot9strap 1.4](https://github.com/SciresM/boot9strap/releases/tag/1.4), seu LED de notificação do 3DS poderá terá uma certa cor. Esta cor é usada para diagnosticar problemas que envolvem seu arquivo `boot.firm` no cartão SD ou na memória interna. Em versões mais antigas do boot9strap, a luz azul irá desligar quase imediatamente quando tentar ligar o console.

Se o LED de notificação acender:

+ **Branco**: Seu 3DS não conseguiu encontrar `boot.firm` no seu cartão SD ou na memória interna.
+ **Magenta**: Seu 3DS não conseguiu encontrar `boot.firm` no seu cartão SD. Ele foi capaz de encontrar `boot.firm` na memória interna, mas o arquivo está corrompido.
+ **Vermelho**: Seu 3DS conseguiu encontrar `boot.firm` tanto no seu cartão SD quanto na memória interna, mas ambos os arquivos estão corrompidos.

Você pode obter um novo arquivo `boot.firm` baixando a [versão mais recente do Luma3DS](https://github. om/LumaTeam/Luma3DS/releases/latest), extraindo e colocando `boot.firm` na raiz do seu cartão SD. Se o seu arquivo `boot.firm` está sendo constantemente detectado como corrompido, você pode querer verificar se há erros no seu cartão SD ([Windows](h2testw-(windows)), [Linux](f3-(linux)), ou [macOS](f3xquickt-(mac))). Além disso, note que o 3DS tende a ter problemas com arquivos extraídos usando WinRAR.

Se você ouvir um "som de pop", potencialmente acompanhado com a luz de fundo ativando por um segundo, há um problema de hardware no seu console (como um cabo de luz de fundo desconectado). Você pode ser capaz de fazer com que o seu console inicialize segurando-o em certos ângulos.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Meu console fica preso em uma tela preta com a luz azul ligada</u></summary>

As etapas abaixo podem ser tentadas em qualquer ordem, mas são listadas de menos para mais demorada.

1. Desligue o console, remova o cartão SD, insira-o e, em seguida, ligue seu console.
1. Desligue o console, ejete o cartucho do jogo se estiver inserido, ligue o seu console, e espere até dez minutos. Se o seu console inicializar dentro de dez minutos, o problema foi corrigido e é improvável que volte a ocorrer
1. Renomeie a pasta `Nintendo 3DS` no seu cartão SD para `Nintendo 3DS_BACKUP`, depois tente inicializar. Se o seu console é iniciado com sucesso, há alguns problemas na pasta `Nintendo 3DS`. Tente limpar a extdata do Menu HOME:
    + Navegue até `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/`
    + Apague a pasta correspondente da região do seu 3DS:
        + ** Região EUR**: `00000098`
        + **Região JPN**: `00000082`
        + **Região USA**: `0000008f`
        + **Região CHN**: `000000A1`
        + **Região KOR**: `000000A9`
        + **Região TWN**: `000000B1`
1. Tente iniciar no modo recovery e atualizar o seu sistema:
    + Desligue seu console
    + Segure (Gatilho Esquerdo) + (Gatilho Direito) + (D-Pad pra cima) + (A)
    + Ligue o seu console
    + Se você tiver sucesso, o console iniciará em uma tela de "atualizar seu sistema"
1. Siga o guia de [CTRTransfer](ctrtransfer)
1. Para mais suporte, peça ajuda no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp)
{% endcapture %}
<details>{{ compat | markdownify }}</details>

### Mensagem de erro ao inicializar

{% capture compat %}
<summary><u>"An error has occurred: Failed to apply 1 FIRM patch(es)" ou "An exception has occurred -- Current process: pm"</u></summary>

Sua versão do Luma3DS está desatualizada. Baixe a versão mais recente do [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) e coloque `boot.firm` na raiz do seu cartão SD, substituindo qualquer arquivo existente. Certifique-se de estar extraindo o arquivo ZIP com qualquer outra ferramenta que não seja o WinRAR, pois é conhecido por causar problemas com arquivos relacionados ao 3DS.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"Unable to mount CTRNAND or load the CTRNAND FIRM. Please use an external one."</u></summary>
Há uma série de razões para que isto possa estar acontecendo. Em qualquer caso, este erro geralmente pode ser corrigido seguindo o guia de [CTRTransfer](ctrtransfer).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>"Ocorreu um erro. Segure o botão POWER para desligar..."</u></summary>

Os ARM11 exception handlers estão desabilitados, ou custom firmware não está instalado. Tente habilitar os ARM11 exception handlers:
    + Desligue seu console
    + Segure (Select)
    + Ligue o seu console, enquanto ainda segura (Select)
    + Se a caixa "Disable ARM11 exception handlers" estiver marcada, desmarque a opção
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>O Menu HOME está sem meus aplicativos instalados</u></summary>

Isso pode ser causado por várias razões, mas principalmente porque o seu cartão SD não está sendo lido pelo sistema.
Você pode verificar se seu SD está sendo lido segurando SELECT durante a inicialização e verificando o texto amarelo na parte inferior; Se disser "Booted from CTRNAND via B9S", então seu console está iniciando da memória interna e não do cartão SD.
Se este for o caso, tente os passos abaixo, os quais são listados de mais fácil para mais difícil:
1. Desligue o console, remova o cartão SD, insira-o e, em seguida, ligue seu console
1. Desligue o console, remova o cartão SD, insira-o no seu computador, baixe a versão mais recente do [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest), extraia `boot.firm` do `Luma3DS.zip` e coloque-o na raiz do seu cartão SD (substituindo qualquer arquivo existente)
1. Desligue o console, remova o cartão SD, insira-o no seu computador e reformate o cartão SD de acordo com o sistema operacional do seu computador: [Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux)) *(isso irá apagar os dados do seu cartão SD)*
1. Teste por erros no seu cartão SD seguindo o guia de acordo com o sistema operacional do seu computador: [Windows](h2testw-(windows)), [Linux](f3-(linux)), [macOS](f3xquickt-(mac)). Se o seu cartão SD estiver marcado como defeituoso, então você terá que substituir o cartão SD
1. Sua entrada de cartão SD pode estar com problemas. Entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp) para obter mais ajuda
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Tela azul "BOOTROM ERROR"</u></summary>

Seu console provavelmente está hard-bricked. Você precisará comprar um flashcart de ntrboot para reinstalar o boot9strap para tentar consertar seu console. Isso também pode indicar um problema de hardware que não pode ser corrigido. De qualquer forma, entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp) para obter ajuda.
    + Também é possível que alguém tenha definido um splash (tela que mostra uma imagem assim que o 3DS inicia) que se pareça com um brick. Tente deixar o seu console ligado, esperando na tela azul, por cinco minutos.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Outro erro</u></summary>

Por favor, tire uma foto do erro e entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp) para obter ajuda.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Problemas de software em consoles com custom firmware

{% capture compat %}
<summary><u>A funcionalidade DSi / DS está quebrada ou foi substituída pelo Flipnote Studio</u></summary>

1. Baixe a versão mais recente do [TWLFix-CFW](https://github.com/MechanicalDragon0687/TWLFix-CFW/releases/latest) (o arquivo `.3dsx`)
1. Desligue seu console
1. Crie uma pasta chamada `3ds` na raiz do seu cartão SD se ela ainda não existir
1. Copie o arquivo `TWLFix-CFW.3dsx` para a pasta `/3ds/` do seu cartão SD
1. Reinsira o cartão SD no seu console
1. Abra o Homebrew Launcher
1. Inicie o TWLFix-CFW da lista do homebrew
1. Aperte (A) para desinstalar os títulos TWL
1. Aperte (Start) para reiniciar o console
1. Atualize seu console indo em Configurações do Sistema, depois em "Outras Configurações", depois indo até a direita e usando "Atualização do Sistema"
    + A atualização mostrará que os aplicativos TWL essenciais foram desinstalados e serão baixados novamente e depois reinstalados
1. Quando a atualização for concluída, toque em "OK" para reiniciar o console
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>A funcionalidade de Console Virtual e/ou Modo de Segurança está quebrada</u></summary>

O seu console está executando o Luma3DS 6.6 ou mais antigo, provavelmente via arm9loaderhax. Você deve seguir [A9LH para B9S](a9lh-to-b9s) para atualizar seu console para um ambiente moderno de custom firmware.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Jogos no modo de extended memory (Pokemon Sun/Moon, Smash, etc.) não funcionam</u></summary>

Isso pode ocorrer após uma CTRTransfer ou mudança de região no Old 3DS / 2DS. Siga as instruções [aqui](https://3ds.hacks.guide/region-changing#section-vi---fixing-locale-related-issues) para corrigir esse problema (ignorando os passos 3, 4, 5 e 6).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Exception screen ao iniciar/carregar um aplicativo</u></summary>

Procure pela sua exception screen [nesta página](https://wiki.hacks.guide/wiki/3DS:Error_screens/Luma3DS_exception_screen).
Se você não conseguiu encontrar seu erro ou as instruções não funcionaram, entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp) para obter mais assistência.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Abrir as configurações do Menu HOME trava o console ou carrega o Homebrew Launcher</u></summary>

Seu console provavelmente ainda tem menuhax67 instalado. Para desinstalar menuhax67, baixe a versão mais recente de [menuhax67](https://github.com/zoogie/menuhax67/releases/latest) (o `.zip`), então siga a [seção "Desinstalar menuhax67"](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits/menuhax67#Uninstall_menuhax67) aqui.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

---

## Outros problemas

{% capture compat %}
<summary><u>Limpar extdata do Menu HOME</u></summary>

1. Desligue seu console
1. Insira o cartão SD no seu computador
1. Navegue até a pasta `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` no seu cartão SD
1. Apague a pasta correspondente para a região do seu 3DS:
    + ** Região EUR**: `00000098`
    + **Região JPN**: `00000082`
    + **Região USA**: `0000008f`
    + **Região CHN**: `000000A1`
    + **Região KOR**: `000000A9`
    + **Região TWN**: `000000B1`
1. Reinsira o cartão SD no seu console
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Limpar dados de tema do Menu HOME</u></summary>

1. Desligue seu console
1. Insira o cartão SD no seu computador
1. Navegue até a pasta `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` no seu cartão SD
1. Apague a pasta correspondente para a região do seu 3DS:
    + **Região EUR**: `000002ce`
    + **Região JPN**: `000002cc`
    + **Região EUA**: `000002cd`
1. Reinsira o cartão SD no seu console
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Entrando manualmente no Homebrew Launcher</u></summary>

Se você estiver sem o aplicativo do Homebrew Launcher no seu Menu HOME, você pode seguir estas instruções para entrar no Homebrew Launcher manualmente. (Você precisará de [boot.3dsx e boot.firm](https://github.com/LumaTeam/Luma3DS/releases/latest) na raiz do seu cartão SD.)

{% include_relative include/launch-hbl-dlp.txt %}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Desativando o Controle dos Pais</u></summary>

Desative o recurso Controle dos Pais indo em Configurações do Sistema -> Controles dos Pais e inserindo o PIN, então pressionando "Limpar configurações", depois "Excluir" para removê-lo.
Entretanto, se você não sabe o PIN e, portanto, não pode acessar as configurações do console, você precisará desativá-lo. Para fazer isso, você precisa obter a chave mestra do seu console (mkey):
1. Vá para [este site](https://mkey.eiphax.tech/)
1. Preencha as seguintes caixas com as informações:
    + Device Type: Selecione "3DS" (o mesmo se aplica se você estiver usando um 2DS, New 3DS (XL/LL) ou New 2DS (XL/LL))
    + System Date: O dia e mês que o relógio do seu console está configurado
    + Inquiry Number: Pode ser obtido pressionando "Esquci o PIN" e então "Eu esqueci" na tela de Controle dos Pais
1. Depois de obter sua mkey, pressione OK na tela onde você obteve seu Inquiry Number, então informe a mkey
1. Pressione "Limpar Configurações", depois "Excluir" para remover todos os dados do Controle dos Pais
{% endcapture %}
<details>{{ compat | markdownify }}</details>
