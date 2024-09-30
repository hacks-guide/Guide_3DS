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

- You will not be able to use your NNID (if you have one). Os NNIDs são fixados para a região na qual foram criados.
- You may not be able to access the eShop, even if you [delete your eShop account](https://en-americas-support.nintendo.com/app/answers/detail/a_id/74/~/how-to-delete-a-nintendo-eshop-account) beforehand. Isso é porque certos aplicativos tendem a permanecer ligados ao 3DS, mesmo após a exclusão da conta (especialmente no New 3DS).
  - This is still relevant because, while purchases can no longer be made on eShop, game updates are still being provided. Atualizações podem fornecer conteúdo extra ou corrigir erros.
  - This logic extends to system transfers, meaning you would not be able to perform a system transfer from a USA 3DS to a region-changed JPN-to-USA 3DS.
  - Pokémon Bank also requires working eShop access.
  - That being said, system transfer and game updates are region locked anyway (e.g. Japanese eShop only has Japanese game updates).
- **You will not be able to uninstall custom firmware without bricking the console!** If you intend to uninstall custom firmware in the future, you **MUST** restore your NAND backup that was created before the region change.

:::

## O que é necessário

- A versão mais recente do [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (o arquivo `.zip` do GodMode9)
- A versão mais recente do [FBI](https://github.com/lifehackerhansol/FBI/releases/download/2.6.1/FBI.3dsx) (download direto)
- A versão mais recente do [faketik](https://github.com/ihaveamac/faketik/releases/latest) _(o arquivo `.3dsx`)_
- Um cliente de torrent como [qBittorrent](https://www.qbittorrent.org/download.php) ou [Deluge](http://dev.deluge-torrent.org/wiki/Download)
  - Se você já tem um cliente de torrent, não é necessário baixar um novo
- The 11.15.0 CTRTransfer image for your console type of the region that you want to change to (e.g. Download "New 3DS or 2DS - USA" if you have a New 3DS and want to change your region to USA)

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
