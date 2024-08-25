---
title: "Mudança de Região"
---

{% include toc title="Tabela de Conteúdo" %}

### Leitura Obrigatória

Esta é uma seção adicional para a alterar a região do seu console. Isto é feito através da instalação da imagem CTRTransfer 11.15.0 da região para qual você deseja trocar. Depois de instalar a imagem, você pode atualizar seu console normalmente para o firmware mais recente (11.17.0).

Note que a mudança de região é quase completamente desnecessária uma vez que o Luma3DS suporta jogos de outras regiões e aplicativos inidividuais através de [Locale Emulation]
(https://github.com/LumaTeam/Luma3DS/wiki/Optional-features). Além, disso, rodar jogos do Nintendo DS com idiomas de outras regiões é possível através do [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases). Você só deve executar uma mudança de região se você deseja que sua interface de usuário do sistema esteja em um idioma que não está disponível na região atual do seu console.

Esta página pressupõe que você já instalou o Luma3DS e boot9strap. Se você seguiu este site até o final de (Finalizando a instalação), você terá Luma3DS e boot9strap.
{: .notice--info}

Como parte deste processo, a configuração do console será redefinida para os padrões. Isso inclui coisas como seu nome de usuário, país e idioma. **Os jogos instalados e seus dados salvos não serão afetados.**
{: .notice--warning}

{% capture notice-6 %}
Se você mudar a região do seu console:

+ Você não será capaz de usar seu NNID (se tiver um). Os NNIDs são fixados para a região na qual foram criados.
+ Você não poderá acessar a eShop, mesmo que você [exclua sua conta da eShop](https://en-americas-support.nintendo.com/app/answers/detail/a_id/74/~/how-to-delete-a-nintendo-eshop-account) previamente. Isso é porque certos aplicativos tendem a permanecer ligados ao 3DS, mesmo após a exclusão da conta (especialmente no New 3DS).
    + Isso ainda é relevante porque, enquanto as compras não podem mais ser feitas na eShop, ainda são fornecidas as atualizações de jogos. Atualizações podem fornecer conteúdo extra ou corrigir erros.
    + Esta lógica se estende às transferências do sistema, o que significa que você não será capaz de executar uma transferência de sistema de um 3DS dos EUA para um 3DS JPN-para-EUA de região alterada.
    + Pokémon Bank também requer acesso à eShop.
    + Dito isto, a transferência de sistema e atualizações de jogos são bloqueadas de qualquer forma (por exemplo, a eShop japonesa tem apenas atualizações de jogos japoneses).
+ **Você não poderá desinstalar o firmware sem causer um brick no console!** Se desejar desinstalar um custom firmware no futuro, você **DEVE** restaurar o seu backup da NAND que foi criado antes da alteração da região.
{% endcapture %}

<div class="notice--danger">{{ notice-6 | markdownify }}</div>

### O que você precisa

* A versão mais recente do [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (o arquivo `.zip`)
* A versão mais recente do [FBI](https://github.com/lifehackerhansol/FBI/releases/download/2.6.1/FBI.3dsx) (download direto)
* A versão mais recente do [faketik](https://github.com/ihaveamac/faketik/releases/latest) *(o arquivo `.3dsx)*
* A torrent client like [qBittorrent](https://www.qbittorrent.org/download.php) or [Deluge](http://dev.deluge-torrent.org/wiki/Download)
    * If you already have a torrent client, you do not need to download a new one
* A imagem CTRTransfer 11.15.0 para o seu tipo de console da região para a qual você deseja mudar (ex. Baixe "New 3DS ou 2DS - EUA" se você tiver um New 3DS e quiser alterar sua região para EUA)
{% include_relative include/ctrtransfer-images.txt %}

### Instruções

#### Seção I - Preparação

{% include_relative include/ctrtransfer-prep.txt %}

#### Seção II - Backup da NAND

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
{% include_relative include/nand-backup.txt %}

#### Seção III - CTRTransfer

{% include_relative include/ctrtransfer-main.txt %}

#### Seção IV - Iniciando o FBI

{% include_relative include/launch-hbl-dlp.txt %}

#### Seção V - Reinstalando Tickets

{% include_relative include/ctrtransfer-ticket-copy.txt %}

#### Seção VI - Corrigindo problemas relacionados ao locale

{% include_relative include/ctrnand-datayeet.txt %}

___

Seu 3DS teve a região alterada com sucesso!
{: .notice--success}
