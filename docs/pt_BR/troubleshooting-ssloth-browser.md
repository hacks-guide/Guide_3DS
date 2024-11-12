# Troubleshooting (SSLoth-Browser)

This page offers troubleshooting advice for commonly encountered issues with the "Installing boot9strap (SSLoth-Browser)" page, which is used on system versions between 11.4.0 and 11.13.0. Se você não consegue resolver seu problema com o conselho nesta página, por favor entre no [Nintendo Homebrew no Discord](https://discord.gg/MWxPgEp) e descreva o seu problema, incluindo o que você já tentou.

::: warning

These instructions are only valid for the "Installing boot9strap (SSLoth-Browser)" page. If you are using a **New 3DS** on version **11.15.0 through 11.17.0**, you should follow [troubleshooting instructions for Installing boot9strap (super-skaterhax)](troubleshooting-super-skaterhax) instead.

:::

## SSLoth-Browser

:::details Red/purple/pink and white screen after running Browserhax

Isso provavelmente indica que você já possui custom firmware. Você deve [checar por CFW](checking-for-cfw).

:::

:::details "An error has occurred. Hold down the POWER button to turn off the power..." (black screen with text)

The file `arm11code.bin` is missing or misplaced. Download the latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), place `otherapp.bin` on the root of your SD card and rename it to `arm11code.bin`. Não adicione a extensão `.bin` se você não a vê.

:::

:::details "Ocorreu um erro, forçando o software a fechar..." (caixa de mensagem branca)

There may be an issue with your `arm11code.bin` file. Download the latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), place `otherapp.bin` on the root of your SD card and rename it to `arm11code.bin`. Não adicione a extensão `.bin` se você não a vê.

You can also try resetting your browser save data:

1. Launch the browser, then launch the browser settings
2. Scroll to the bottom and select "Reset Save Data" (it may also be called "Initialize Save Data" or "Clear All Save Data")
3. Try the exploit again

:::

:::details Opening the browserhax QR code or URL crashes

Browser based exploits (such as this one) are often unstable and crash frequently, but they can sometimes be fixed by doing the following steps.

1. Launch the browser, then launch the browser settings
2. Scroll to the bottom and select "Reset Save Data" (it may also be called "Initialize Save Data" or "Clear All Save Data")
3. Try the exploit again

:::

:::details System Update prompt when opening browser

The SSLoth proxy was incorrectly configured. Re-do the SSLoth section on the page.

:::

:::details Error 032-0420 when opening browser

Follow these steps in order:

1. Abra as Configurações do Sistema no seu console
2. Navegue para `Configuração de internet` -> `Configurações de conexão`
3. Clique no seu slot de conexão da rede e navegue para `Mudar configurações` -> `Próxima página (seta para a direita)` -> `Servidor proxy`
4. Defina "Servidor proxy" para "Não"
5. Clique OK, depois clique em Salvar
6. Quando solicitado, clique em "Testar" para realizar o teste de conexão
   - O teste deve ser bem-sucedido
7. Clique "OK" para continuar
8. Pressione "Voltar" duas vezes e, em seguida, "Fechar" para voltar ao Menu HOME
9. Open the Internet Browser once
10. If prompted about a system update, press OK
    - This won't actually update the system
11. Start again from [Section II](installing-boot9strap-\(ssloth-browser\).html#section-ii---ssloth)

:::

:::details Frozen on "Doing agbhax..."

There may be an issue with your `arm11code.bin` file. Re-download the latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), place it on the root of your SD card, and rename it to `arm11code.bin`. Não adicione a extensão `.bin` se você não a vê.

:::

:::details "PrepareArm9ForTwl returned error c8804631!"

Entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp) para obter ajuda.

:::

:::details Failed to mount the SD card!

Faça o backup de seus dados e formate novamente seu cartão SD como FAT32 com a ferramenta recomendada dependendo do seu sistema operacional ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\))). MiniTool Partition Wizard e a ferramenta de formatação da HP (HPUSBDisk) são conhecidas por causar problemas com cartões SD para 3DS.

Se isso falhar, tente usar outro cartão SD.

:::

## Issues with SafeB9SInstaller

<!--@include: ./_include/troubleshooting-sb9si-bin.md -->

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Go back to [Installing boot9strap (SSLoth-Browser)](installing-boot9strap-\(ssloth-browser\))

:::

<!--@include: ./_include/troubleshooting-return.md -->
