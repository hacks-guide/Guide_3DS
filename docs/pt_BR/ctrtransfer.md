# CTRTransfer

## Leitura Obrigatória

Esta é uma seção adicional para instalar uma imagem CTRTransfer 11.15.0 no seu console.

::: info

Esta página pressupõe que você já instalou o Luma3DS e boot9strap. Se você seguiu este site até o final de (Finalizando a instalação), você terá Luma3DS e boot9strap.

:::

::: warning

Como parte deste processo, a configuração do console será redefinida para os padrões. Isso inclui coisas como seu nome de usuário, país e idioma. **Os jogos instalados e seus dados salvos não serão afetados.**

:::

## O que é necessário

- A versão mais recente do [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (o arquivo `.zip` do GodMode9)
- A versão mais recente do [FBI](https://github.com/nh-server/FBI-NH/releases/download/2.6.1/FBI.3dsx) (download direto)
- A versão mais recente do [faketik](https://github.com/ihaveamac/faketik/releases/latest) _(o arquivo `.3dsx`)_
- A versão mais recente do [ctrtransfer.gm9](https://raw.githubusercontent.com/nh-server/scripts/refs/heads/main/3DS/ctrtransfer.gm9) (botão direito do mouse, "Salvar link como...")
- The 11.15.0 CTRTransfer image for your console and region

    ::: warning

    You need to use a torrent client to download the CTRTransfer images, such as [qBitTorrent](https://www.qbittorrent.org/download) or [Deluge](https://deluge-torrent.org/download/).

    :::

<!--@include: ./_include/ctrtransfer-images.md -->

## Instruções

### Seção I - Preparação

<!--@include: ./_include/ctrtransfer-prep.md -->

### Seção II - Backup da NAND

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9

<!--@include: ./_include/nand-backup.md -->

### Seção III - CTRTransfer

<!--@include: ./_include/ctrtransfer-main.md -->

### Seção IV - Iniciando o FBI

<!--@include: ./_include/launch-hbl-dlp.md -->

### Seção V - Reinstalando Tickets

<!--@include: ./_include/ctrtransfer-ticket-copy.md -->

### Seção VI - Corrigindo problemas de localidade

<!--@include: ./_include/ctrnand-datayeet.md -->

___

::: tip

Continue para [Finalizando a Instalação](finalizing-setup)

:::
