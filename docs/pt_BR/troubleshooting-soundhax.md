# Troubleshooting (Soundhax)

This page offers troubleshooting advice for commonly encountered issues with the "Installing boot9strap (Soundhax)" page, which is used on system versions between 1.0.0 and 11.3.0. Se você não consegue resolver seu problema com o conselho nesta página, por favor entre no [Nintendo Homebrew no Discord](https://discord.gg/MWxPgEp) e descreva o seu problema, incluindo o que você já tentou.

## Issues with Soundhax

:::details Tela vermelha/roxa/rosa e branca após executar o Soundhax

Se o seu console está na versão de sistema 9.4.0, 9.5.0, ou 9.6.0, você pode estar encontrando um bug com uma versão antiga do universal-otherapp. Baixe a última versão [aqui](https://github.com/TuxSH/universal-otherapp/releases/latest).

Se seu console não está nesses firmware, isso provavelmente indica que você já tem custom firmware. Você deve [checar por CFW](checking-for-cfw).

:::

:::details "Ocorreu um erro, forçando o software a fechar..." (caixa de mensagem branca)

Há um problema com seu arquivo `otherapp.bin` (ele está faltando, colocado no lugar errado ou corrompido). Baixe a última versão do [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) e coloque-a na raiz do seu cartão SD.

:::

:::details "Não é possível tocar"

Você tem o arquivo Soundhax errado para o seu console e região, ou seu console é incompatível com o Soundhax. No último caso, seu curso de ação irá determinar em qual versão o seu 3DS está no momento. Entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp) para obter ajuda.

:::

:::details Failed to mount the SD card!

Se isso falhar, tente usar outro cartão SD.

:::

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Go back to [Installing boot9strap (Soundhax)](installing-boot9strap-\(soundhax\))

:::

<!--@include: ./_include/troubleshooting-return.md -->
