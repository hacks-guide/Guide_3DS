# Mudança de Região

## Leitura Obrigatória

Esta é uma seção adicional para a alterar a região do seu console. Isto é feito através da instalação da imagem CTRTransfer 11.15.0 da região para qual você deseja trocar. Depois de instalar a imagem, você pode atualizar seu console normalmente para o firmware mais recente (11.17.0).

Note que a mudança de região é quase completamente desnecessária uma vez que o Luma3DS suporta jogos de outras regiões e aplicativos inidividuais através de [Locale Emulation]
(https://github.com/LumaTeam/Luma3DS/wiki/Optional-features). Além, disso, rodar jogos do Nintendo DS com idiomas de outras regiões é possível através do [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases). Você só deve executar uma mudança de região se você deseja que sua interface de usuário do sistema esteja em um idioma que não está disponível na região atual do seu console.

::: info

Esta página pressupõe que você já instalou o Luma3DS e boot9strap. Se você seguiu este site até o final de (Finalizando a instalação), você terá Luma3DS e boot9strap.

:::

::: warning

Como parte deste processo, a configuração do console será redefinida para os padrões. Isso inclui coisas como seu nome de usuário, país e idioma. **Os jogos instalados e seus dados salvos não serão afetados.**

:::

::: danger

Se você mudar a região do seu console:

- Você não será capaz de usar a sua NNID (se tiver uma). Os NNIDs são fixados para a região na qual foram criados.
- Você não poderá acessar a eShop, mesmo se você [deletar sua conta da eShop](https://en-americas-support.nintendo.com/app/answers/detail/a_id/74/~/how-to-delete-a-nintendo-eshop-account) previamente. Isso é porque certos aplicativos tendem a permanecer ligados ao 3DS, mesmo após a exclusão da conta (especialmente no New 3DS).
    - Isso ainda é relevante porque, enquanto novas compras não podem mais ser feitas na eShop, atualizações para jogos ainda são fornecidas. Atualizações podem fornecer conteúdo extra ou corrigir erros.
    - Esta lógica se estende para transferências de sistema, o que significa que você não poderá realizar uma Transferência de Dados de um 3DS americano para um 3DS japonês cuja região foi alterada.
    - Pokémon Bank também requer acesso à eShop.
    - Dito isso, transferências de sistema e atualizações de jogos são bloqueadas de qualquer forma (por exemplo, a eShop japonesa tem apenas atualizações para jogos japoneses).
- **Você não poderá desinstalar o custom firmware sem causar um brick no console!** Se você desejar desinstalar o custom firmware no futuro, você DEVE restaurar o seu backup da NAND que foi criado antes da mudança de região.

:::

## O que é necessário

- A versão mais recente do [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (o arquivo `.zip` do GodMode9)
- A versão mais recente do [FBI](https://github.com/nh-server/FBI-NH/releases/download/2.6.1/FBI.3dsx) (download direto)
- A versão mais recente do [faketik](https://github.com/ihaveamac/faketik/releases/latest) _(o arquivo `.3dsx`)_
- A versão mais recente do [ctrtransfer.gm9](https://raw.githubusercontent.com/nh-server/scripts/refs/heads/main/3DS/ctrtransfer.gm9) (botão direito do mouse, "Salvar link como...")
- The 11.15.0 CTRTransfer image for your console type of the region that you want to change to (e.g. Download "New 3DS or 2DS - USA" if you have a New 3DS and want to change your region to USA)
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

Seu 3DS teve a região alterada com sucesso!

:::
