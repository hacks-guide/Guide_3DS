---
title: "A9LH para B9S"
---

{% include toc title="Tabela de Conteúdo" %}

### Leitura Obrigatória

Esta página é para usuários do arm9loaderhax atualizarem seus consoles para boot9strap.

Todas as versões futuras do Luma3DS serão liberadas apenas no formato `.firm`, que só será compatível com com boot9strap e o sighax. Isto significa que você deve utilizar esta página para atualizar sua instalação, só assim você irá continuar recebendo as atualizações mais recentes do Luma3DS.

Para extrair os arquivos '7z' vinculados nesta página, você vai precisar de um compactador de arquivos como [7-Zip](http://www.7-zip.org/) ou [The Unarchiver] (https://theunarchiver.com/).

### O que você precisa

Para usar os links do [magnet](https://wikipedia.org/wiki/Magnet_URI_scheme) nesta página, você precisará de um cliente de torrent como [qBittorrent](https://www.qbittorrent.org/download.php) ou [Deluge](http://dev.deluge-torrent.org/wiki/Download).
{: .notice--warning}

Note que apenas no New 3DS o 'secret_sector.bin' é necessário para reverter o exploit arm9loaderhax, e é por isso que ele não é necessário para a instalação do boot9strap em um console de varejo. Se você não tiver um New 3DS, você não precisa do `secret_sector.bin`.
{: .notice--info}

* <i class="fa fa-magnet" aria-hidden="true" title="Este é um link magnético. Use um cliente torrent para baixar o arquivo."></i> - **Somente Novos Usuários do 3DS:** [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu. rg%2f51%2fanunciou&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fanúncio&tr=udp%3a%2f%2frastreador. oadbt.com%3a6969%2fanunciando&tr=udp%3a%2f%2ftracker.moeking. e%3a6969%2fanunciou&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fanuncia &tr=udp%3a%2f%2frastreador. lolosh.space%3a6969%2fanunciando&tr=udp%3a%2f%2frastreador. omf.se%3a80%2fanunciou&tr=udp%3a%2f%2frastreador.srv00.com%3a6969%2fanúncio&tr=udp%3a%2f%2frastreador. heoks.net%3a6969%2fanunciou&tr=udp%3a%2f%2f. iny-vps.com%3a6969%2fanuncia &tr=udp%3a%2f%2f open.tracker. l%3a1337%2fanunciou&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fanunciou&tr=udp%3a%2f%2ftracker1. t.moack.co.kr%3a80%2fanuncia &tr=udp%3a%2f%2fvibe.sleepyepyinternetfun.xyz%3a1738%2fanunciando&tr=udp%3a%2f%2fwww.torrent.eu. rg%3a451%2fanunciando&tr=udp%3a%2f%2ftracker.openbittorrent. om%3a6969%2fanunciou&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fanunciou&tr=udp%3a%2f%2frastreador. pentrackr.org%3a1337%2fanuncia &tr=udp%3a%2f%2fexodus.desync. om%3a6969%2fanunciou&tr=http%3a%2f%2fopenbittorrent.com%3a80 anúncio%2f) (magnet link)
* A versão mais recente do [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (o arquivo `.zip` do Luma3DS)
* A versão 7.0.5 do [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/download/v7.0.5/Luma3DSv7.0.5.zip) (download direto)
* A versão mais recente do [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (download direto)
* A versão mais recente do [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (download direto)

### Instruções

#### Seção I - Preparação

Para todas as etapas nesta seção, substitua quaisquer arquivos existentes no seu cartão SD.
{: .notice--info}

1. Desligue seu console
1. Insira seu cartão SD no seu computador
1. Copie o `boot.firm` e `boot.3dsx` da versão mais recente do Luma3DS `.zip` para a raiz do seu cartão SD
    + A raiz do cartão SD refere-se ao diretório inicial no seu cartão SD onde você pode ver a pasta Nintendo 3DS, mas não está dentro dela
1. Copie `arm9loaderhax.bin` da versão 7.0.5 do Luma3DS `.7z` para a raíz do seu cartão SD
1. Copie o `SafeB9SInstaller.bin` do `.zip` do SafeB9SInstaller para a pasta `/luma/payloads/` no seu cartão SD
    Se as pastas 'luma' ou 'payloads' não existirem, crie-as
    Apague quaisquer outros payloads '.bin' existentes (`GodMode9.bin`, `Decrypt9WIP.bin`, `Hourglass9.bin`, etc.) na pasta `/luma/payloads/` do seu cartão SD, já que eles não serão compatíveis com versões do Luma3DS compatíveis com boot9strap
1. Crie uma pasta chamada `boot9strap` na raiz do seu cartão SD
1. Copie o `boot9strap.firm` e o `boot9strap.firm.sha` do `.zip` do boot9strap para a pasta `/boot9strap/` no seu cartão SD
1. **Apenas usuários dos New 3DS:** Copie o `secret_sector.bin` para a pasta `/boot9strap/` no seu cartão SD

    ![]({{ "/images/screenshots/a9lh-to-b9s-root-layout.png" | absolute_url }})
    {: .notice--info}

1. Reinsira o cartão SD no seu console

#### Seção II - Instalando o boot9strap

1. Inicialize seu console enquanto segura (Start) para iniciar o SafeB9SInstaller
    + Caso você veja a tela de configuração do Luma ao invés do SafeB9SInstaller, simplesmente aperte (Start), então desligue o seu 3DS e tente novamente
    + Se isso lhe der um erro, tente usar um novo cartão SD ou formate seu cartão SD atual (faça um backup dos arquivos existentes primeiro)
1. Espere todos as verificações de segurança finalizarem
    + Se você receber um erro "OTP Crypto Fail", baixe <i class="fa fa-magnet" aria-hidden="true" title="Este é um link magnético. use um cliente torrent para baixar o arquivo."></i> - [aeskeydb.bin](magnet:?xt=urn:btih:d25dab06a7e127922d70ddaa4fe896709dc99a1e&dn=aeskeydb.bin&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce), e então coloque-o na pasta `/boot9strap/' do seu cartão SD e tente novamente
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt inline="true" -%}
1. Seu console deve ter reiniciado no menu de configuração do Luma3DS
    + O menu de configuração do Luma3DS são configurações para o custom firmware do Luma3DS. Muitas dessas configurações podem ser úteis para personalização ou depuração
    + Para a finalidade deste guia, estas configurações serão deixadas nas configurações padrão
    + Se você receber uma tela preta, [siga este guia de troubleshooting](troubleshooting#boot-issues-on-consoles-with-custom-firmware)
1. Aperte (Start) para salvar e reiniciar

___

### Continue para [Finalizando a instalação](finalizing-setup)
{: .notice--primary}
