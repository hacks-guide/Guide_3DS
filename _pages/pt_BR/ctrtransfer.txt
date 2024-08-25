---
title: "CTRTransfer"
---

{% include toc title="Tabela de Conteúdo" %}

### Leitura Obrigatória

Esta é uma seção adicional para instalar uma imagem CTRTransfer 11.15.0 no seu console.

Esta página pressupõe que você já instalou o Luma3DS e boot9strap. Se você seguiu este site até o final (Finalizando a instalação), você terá Luma3DS e boot9strap.
{: .notice--info}

Como parte deste processo, a configuração do console será redefinida para os padrões. Isso inclui coisas como seu nome de usuário, país e idioma. **Os jogos instalados e seus dados salvos não serão afetados.**
{: .notice--warning}

### O que você precisa

* A versão mais recente do [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (o arquivo `.zip`)
* A versão mais recente do [FBI](https://github.com/lifehackerhansol/FBI/releases/download/2.6.1/FBI.3dsx) (download direto)
* A versão mais recente do [faketik](https://github.com/ihaveamac/faketik/releases/latest) *(o arquivo `.3dsx)*
* A torrent client like [qBittorrent](https://www.qbittorrent.org/download.php) or [Deluge](http://dev.deluge-torrent.org/wiki/Download)
    * If you already have a torrent client, you do not need to download a new one
* A imagem CTRTransfer 11.15.0 para o seu console e região:
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

### Continue para [Finalizando a instalação](finalizing-setup)
{: .notice--primary}
