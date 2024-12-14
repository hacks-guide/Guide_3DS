---
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/soundhax-frankenfirm-link.js
  - - script
    - src: /assets/js/link-common.js
---

# Troubleshooting (Soundhax)

This page offers troubleshooting advice for commonly encountered issues with the "Installing boot9strap (Soundhax)" page, which is used on system versions between 1.0.0 and 11.3.0. Se você não consegue resolver seu problema com o conselho nesta página, por favor entre no [Nintendo Homebrew no Discord](https://discord.gg/MWxPgEp) e descreva o seu problema, incluindo o que você já tentou.

## Issues with Soundhax

:::details Tela vermelha/roxa/rosa e branca após executar o Soundhax

Se o seu console está na versão de sistema 9.4.0, 9.5.0, ou 9.6.0, você pode estar encontrando um bug com uma versão antiga do universal-otherapp. Baixe a última versão [aqui](https://github.com/TuxSH/universal-otherapp/releases/latest).

Se seu console não está nesses firmware, isso provavelmente indica que você já tem custom firmware. Você deve [checar por CFW](checking-for-cfw).

:::

:::details "Ocorreu um erro, forçando o software a fechar..." (caixa de mensagem branca)

Há um problema com seu arquivo `otherapp.bin` (ele está faltando, colocado no lugar errado ou corrompido). Baixe a última versão do [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) e coloque-a na raiz do seu cartão SD.

If the above doesn't fix your issue, and you are using an Old 3DS / Old 3DS XL / Old 2DS, you may be encountering an issue involving cartridge updates. Take another look at the system version. If the last number is 4 or lower (e.g. 11.3.0-**4**U), replace the Soundhax file on the root of your SD card with the one from [here](http://soundhax.686178.xyz/frankenfirm.html?crash).

If none of these fix your issue, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance.

:::

:::details "Não é possível tocar"

You have the wrong Soundhax file for your console, region and version. Double-check that you entered all the info correctly into the [Soundhax website](https://soundhax.com/), redownload your Soundhax file, and replace it with the one on the root of your SD card.

If the above doesn't fix your issue, and you are using an Old 3DS / Old 3DS XL / Old 2DS, you may be encountering an issue involving cartridge updates. Take another look at the system version. If the last number is 3 or lower (e.g. 11.3.0-**0**U), replace the Soundhax file on the root of your SD card with the one from [here](http://soundhax.686178.xyz/frankenfirm.html?unplayable).

If none of these fix your issue, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance.

:::

:::details Failed to mount the SD card!

Se isso falhar, tente usar outro cartão SD.

:::

## Issues with SafeB9SInstaller

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Go back to [Installing boot9strap (Soundhax)](installing-boot9strap-\(soundhax\))

:::

<!--@include: ./_include/troubleshooting-return.md -->
