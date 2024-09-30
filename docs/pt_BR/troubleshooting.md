# Troubleshooting

Esta página oferece troubleshooting para problemas comuns. Se você não consegue resolver seu problema com o conselho nesta página, por favor entre no [Nintendo Homebrew no Discord](https://discord.gg/MWxPgEp) e descreva o seu problema, incluindo o que você já tentou.

:::details Table of Contents

Usado em múltiplas páginas:

- [SafeB9SInstaller](#issues-with-safeb9sinstaller)

Páginas do guia:

- [Installing boot9strap (Soundhax)](#installing-boot9strap-soundhax)
- [Installing boot9strap (MSET9)](#installing-boot9strap-mset9)
- [Installing boot9strap (SSLoth-Browser)](#installing-boot9strap-ssloth-browser)
- [Installing boot9strap (super-skaterhax)](#installing-boot9strap-super-skaterhax)
- [Finalizing Setup](#finalizing-setup)

Erros após a instalação:

- [Boot issues](#boot-issues-on-consoles-with-custom-firmware)
- [Software issues](#software-issues-on-consoles-with-custom-firmware)

:::

## Issues with SafeB9SInstaller

### Before opening SafeB9SInstaller

:::details Failed to open SafeB9SInstaller.bin

O arquivo `SafeB9SInstaller.bin` está ausente ou fora do lugar apropriado. Baixe a última versão do [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip), extraia e coloque `SafeB9SInstaller.bin` na raiz do seu cartão SD. Não adicione a extensão `.bin` se você não a vê.

:::

### SigHaxed FIRM was not installed! Check lower screen for more info.

:::details MicroSD Card - init failed

O cartão SD está provavelmente agindo estranho. Tente reformatar o seu cartão SD ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\))). Se isso não funcionar, tente outro cartão SD.

:::

:::details SigHaxed FIRM - File not found

Você não tem o `boot9strap.firm` e o `boot9strap.firm.sha` da pasta `boot9strap`, ou a pasta `boot9strap` está com o nome errado. Baixe a versão mais recente do [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip), e coloque `boot9strap.firm` e `boot9strap.firm.sha` na pasta `boot9strap`.

:::

:::details SigHaxed FIRM - invalid FIRM

Há um problema com seus arquivos `boot9strap.firm` e `boot9strap.firm.sha`. Baixe novamente a versão mais recente do [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip), e coloque o `boot9strap.firm` e `boot9strap.firm.sha` na pasta `boot9strap`.

:::

:::details Secret Sector - File not found

Você não tem o `secret_sector.bin` da pasta `boot9strap`, ou a pasta `boot9strap` está com um nome incorreto. Baixe o [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a51%2fannouncce&tr=udp%3a%2f%2ftracker.lelux. i%3a969%2fanunciou&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fanúncio&tr=udp%3a%2f%2frastreador. oeking.me%3a6969%2fanunciando&tr=udp%3a%2f%2frastreador. onitorit4.me%3a6969%2fanunciou&tr=udp%3a%2f%2ftracker.olosh.space%3a6969%2fanunciou&tr=udp%3a%2f%2ftracker.pomf. e%3a80%2fanúncio &tr=udp%3a%2f%2frastreador.srv00.com%3a6969%2fanunciou&tr=udp%3a%2f%2frastreador. heoks.net %3a 6969%2fanunciando&tr=udp%3a%2f%2frastreador.tiny-vps. om%3a6969%2fanunciando&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fanúncio&tr=udp%3a%2f%2frastreador. erobytes.xyz%3a1337%2fanuncia &tr=udp%3a%2f%2ftracker1.bt.moack. o.kr%3a80%2fanunciando&tr=udp%3a%2f%2fvibe.sleepyinternetfun. yz%3a1738%2fanuncia &tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fanunciando&tr=udp%3a%2f%2frastreador. penbittorrent.com%3a6969%2fanunciando&tr=udp%3a%2f%2f9.rarbg. om%3a2810%2fanunciou&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fanunciou&tr=udp%3a%2f%2fexodus. esync.com%3a6969%2fanuncia &tr=http %3a%2f%2fopenbittorrent. om%3a80%2fanunciado) usando um cliente torrent, e coloque-o na pasta `boot9strap`.

:::

:::details Something else

Entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp) para obter ajuda, e descreva a mensagem que você vê.

:::

## Instalando boot9strap (Soundhax)

:::details Red/purple/pink and white screen after running Soundhax

If your console is on system version 9.4.0, 9.5.0, or 9.6.0, you may be encountering a bug with an old version of universal-otherapp. Download the latest version from [here](https://github.com/TuxSH/universal-otherapp/releases/latest).

Se seu console não está nesses firmware, isso provavelmente indica que você já tem custom firmware. Você deve [checar por CFW](checking-for-cfw).

:::

:::details "An error has occurred, forcing the software to close..." (white message box)

Há um problema com seu arquivo `otherapp.bin` (ele está faltando, colocado no lugar errado ou corrompido). Baixe a última versão do [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) e coloque-a na raiz do seu cartão SD.

:::

:::details "Could not play"

Você tem o arquivo Soundhax errado para o seu console e região, ou seu console é incompatível com o Soundhax. No último caso, seu curso de ação irá determinar em qual versão o seu 3DS está no momento. Entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp) para obter ajuda.

:::

:::details Failed to mount the SD card!

Se isso falhar, tente usar outro cartão SD.

:::

## Instalando boot9strap (MSET9)

:::details Python 3 is not installed

O Python não está instalado no computador que você está usando. Baixe-o do [site do Python](https://www.python.org/downloads/), clique duas vezes no instalador e siga as instruções para instalar o Python. Quando o Python estiver instalado, tente novamente.

:::

:::details HOME Menu extdata: Missing!

Por favor, ligue seu console com o seu cartão SD inserido e, em seguida, verifique o status de MSET9 novamente.

Se isso não funcionar, seu cartão SD precisa ser formatado:

1. Copie tudo do cartão SD para seu PC
2. Formate o cartão SD ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. Copie tudo de volta
4. Comece novamente da [Seção I Passo 7](installing-boot9strap-\(mset9-cli\)#section-i---prep-work)

:::

:::details Mii Maker extdata: Missing!

Dados do Mii Maker não foram encontrados no cartão SD. Por favor, ligue seu console com o seu cartão SD inserido, inicie o Mii Maker, então verifique o status de MSET9 novamente.

Se isso não funcionar, seu cartão SD precisa ser formatado:

1. Copie tudo do cartão SD para seu PC
2. Formate o cartão SD ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. Copie tudo de volta
4. Comece novamente da [Seção I Passo 8](installing-boot9strap-\(mset9-cli\)#section-i---prep-work).

:::

:::details Title database: Not initialized!

Ensure that you have reset the title database.

- Please power on your console with your SD inserted
- Inicie as Configurações do Sistema e navegue para `Gerenciador de Dados` -> `Nintendo 3DS` -> `Software` -> Apagar ([imagem](/images/screenshots/database-reset.jpg))
  - This will not wipe any of your data
- If you get a reset prompt, after resetting, power off your console and start again from [Section I Step 14](installing-boot9strap-\(mset9-cli\)#section-i---prep-work)

Se você _não_ receber uma mensagem de redefinição, seu cartão SD precisa ser formatado:

1. Copie tudo do cartão SD para seu PC
2. Formate o cartão SD ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. Copie tudo de volta

<!--@include: ./_include/mset9-chorus.md -->

1. Digite o número correspondente ao modelo do seu console e a versão, então pressione Enter
2. Digite `2` e pressione enter para verificar o status do MSET9
   - This will create the dummy databases again
3. Feche a janela de script do MSET9
4. Comece novamente da [Seção I Etapa 12](installing-boot9strap-\(mset9-cli\)#section-i---prep-work).

:::

:::: details Error 01: Couldn't find Nintendo 3DS folder

Você não está executando o MSET9 na raiz do cartão SD, ou o cartão SD está sem a pasta Nintendo 3DS.

Lembre-se, seu cartão SD deve ficar assim:

::: info

![](/images/screenshots/mset9/mset9-root-layout.png)

:::

Se o layout do seu cartão SD estiver correto, então o cartão SD provavelmente não está sendo lido pelo seu console e precisa ser formatado:

1. Copie tudo do cartão SD para seu PC
2. Formate o cartão SD ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. Copie tudo de volta
4. Comece novamente do início da [Seção I](installing-boot9strap-\(mset9-cli\)#section-i---prep-work)

::::

:::details Error 02: Your SD is write protected

A proteção contra gravação está ativada neste cartão SD. Se você está usando um cartão SD completo, certifique-se de que a alavanca está [para cima](/images/sdlock.png). Caso contrário, tente ejetar e reinserir seu cartão SD.

:::

:::details Error 04: You don't have 1 ID0, you have (#)!

Você tem múltiplas pastas ID0. Para determinar a pasta correta, siga estas instruções:

1. Renomeie a pasta `Nintendo 3DS` para `BACKUP_Nintendo 3DS`
2. Reinsira o cartão SD no seu console
3. Ligue o seu console
4. Espere o console gerar os dados do cartão SD
   - Your applications will have disappeared. Isto é normal e será resolvido em breve
5. Desligue seu console
6. Insira o cartão SD no seu computador
7. Vá até a pasta `Nintendo 3DS` no seu cartão SD
8. Anote os primeiros caractéres da pasta que você ver
   - This is your true ID0, which we will keep in the real Nintendo 3DS folder
9. Remova o ID0 da pasta `Nintendo 3DS` atual
10. Mova a pasta do verdadeiro ID0 da pasta `BACKUP_Nintendo 3DS` para a pasta `Nintendo 3DS`
11. Se existir, mova a pasta `Private` da pasta `BACKUP_Nintendo 3DS` para a pasta `Nintendo 3DS`

Assim que você tiver feito isso, continue da [Seção I Passo 3](installing-boot9strap-\(mset9-cli\)#section-i---prep-work).

:::

:::: details Error 05: You don't have 1 ID1, you have (#)!

<!--@include: ./_include/id1-check.md -->

::::

:::details Error 06: You need at least 16MB free

Seu cartão SD não possui espaço suficiente para acionar o MSET9. Libere um pouco de espaço e tente novamente.

No final deste guia, você precisará de pelo menos 1,3GB para fazer um backup da NAND, então é melhor liberar pelo menos isso.

:::

:::details Error 07: One or more files are missing or malformed!

Um ou mais arquivos que o MSET9 precisa executar estão ausentes ou corrompidos. Baixe novamente o [Release `.zip` do MSET9](https://github.com/hacks-guide/MSET9/releases/latest) e extraia-o para a raiz do seu cartão SD, substituindo todos os arquivos existentes, então tente novamente.

:::

:::details Error 18: Windows Locale Settings are broken!

<!--@include: ./_include/winerror234.md -->

:::

:::details Red screen after reinserting SD card (Section II Step 11)

Talvez você esteja sem o `SafeB9S.bin` na raiz do seu cartão SD, ou o arquivo pode estar corrompido. Copie-o do `.zip` do MSET9, substituindo quaisquer arquivos existentes, depois siga essas instruções para remover o arquivo de ativação:

1. Força o desligamento do seu console segurando o botão POWER por 20 segundos
2. Insira o cartão SD no seu computador

<!--@include: ./_include/mset9-chorus.md -->

1. Digite o número correspondente ao modelo do seu console e a versão, então pressione Enter
   - The current state should display [Injected](/images/screenshots/mset9/mset9-injected.png)
   - If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ready.png), and you may [retry Section II](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)
2. Digite `4` e pressione Enter
3. Assim que a janela disser "Removed trigger file", digite `0` e depois pressione Enter
4. Reinsira o cartão SD no seu console
5. Ligue o seu console
6. Retorne à [Seção II Passo 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

Alternativamente, seu cartão SD pode estar sem a formatação apropriada ou mal particionado. Depois de remover o arquivo de ativação, formate-o:

1. Copie tudo do cartão SD para seu PC
2. Formate o cartão SD ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. Copie tudo de volta
4. Comece novamente da [Seção II Etapa 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

:::

:::details System Settings loading infinitely after reinserting the SD card

Você provavelmente fez algo diferente das instruções do MSET9, selecionou o modelo/versão errado, ou seu cartão SD precisa ser formatado. Certifique-se de estar escolhendo o [modelo](/images/3dsmodels.png) e a versão de firmware corretos ao abrir o script.

Siga estas instruções para remover o arquivo de ativação e tentar novamente a Seção II:

1. Força o desligamento do seu console segurando o botão POWER por 20 segundos
2. Insira o cartão SD no seu computador

<!--@include: ./_include/mset9-chorus.md -->

1. Digite o número correspondente ao modelo do seu console e a versão, então pressione Enter
   - The current state should display [Injected](/images/screenshots/mset9/mset9-injected.png)
   - If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ready.png), and you are ready to retry Section II
2. Digite `4` e pressione Enter
3. Assim que a janela disser "Removed trigger file", digite `0` e depois pressione Enter
4. Reinsira o cartão SD no seu console
5. Ligue o seu console
6. Retorne à [Seção II Passo 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

If you continue to have this issue and are sure that you did everything correctly, ensure the trigger file is removed and format your SD card:

1. Copie tudo do cartão SD para seu PC
2. Formate o cartão SD ([Windows](formatting-sd-\(windows\)), [Linux](formatting-sd-\(linux\)), [macOS](formatting-sd-\(mac\)))
3. Copie tudo de volta
4. Comece novamente da [Seção II Etapa 1](installing-boot9strap-\(mset9-cli\)#section-ii---mset9)

:::

:::details An exception occurred after triggering MSET9

This likely indicates that you already have custom firmware. Você deve [checar por CFW](checking-for-cfw).

:::

## Instalando boot9strap (superskaterhax)

:::details "An error has occurred. Please save your data in any software currently in use, then restart the system."

If no colors flash after pressing "GO GO!":

- Ensure that you have set your system date and [region](/images/screenshots/skater/skater-lang.png) correctly
- Ensure that no other browser tabs are open, then restart the browser and try the exploit again

If the screen flashes colors then freezes/crashes:

- Ensure that you have the correct copy of `arm11code.bin` and `browserhax_hblauncher_ropbin_payload.bin` for your console's version and region
- Try resetting your browser data:
  1. Launch the browser, then launch the browser settings
  2. Scroll to the bottom and select "Reset Save Data" (it may also be called "Initialize Save Data" or "Clear All Save Data")
  3. Try the exploit again
- Try changing the system language to something other than the current language

:::

:::: details "An error has occurred. Hold down the POWER button to turn off the power..." (black screen with text)

The file `arm11code.bin` is missing or misplaced. Make sure to copy the files of the [latest version of super-skaterhax](https://github.com/zoogie/super-skaterhax/releases/latest) for your region and version to the root of your SD card (not inside of a folder).

::: info

![](/images/screenshots/skaterhax/skater-root-layout.png)

:::

::::

:::details An exception occured or "DLL_HEAP_INFORMATION" when pressing GO! GO!

This likely indicates that you already have custom firmware. Você deve [checar por CFW](checking-for-cfw).

:::

## Instalando boot9strap (SSLoth-Browser)

:::details Red/purple/pink and white screen after running Browserhax

This likely indicates that you already have custom firmware. Você deve [checar por CFW](checking-for-cfw).

:::

:::details "An error has occurred. Hold down the POWER button to turn off the power..." (black screen with text)

The file `arm11code.bin` is missing or misplaced. Download the latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest), place `otherapp.bin` on the root of your SD card and rename it to `arm11code.bin`. Não adicione a extensão `.bin` se você não a vê.

:::

:::details "An error has occurred, forcing the software to close..." (white message box)

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
2. Navigate to `Internet Settings` -> `Connection Settings`
3. Click on your network connection slot and navigate to `Change Settings` -> `Next Page (right arrow)` -> `Proxy Settings`
4. Set "Proxy Settings" to "No"
5. Click OK, then click Save
6. When prompted, click "Test" to perform the connection test
   - The test should succeed
7. Click "OK" to continue
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

## Finalizando a Instalação

:::details Unable to update console

As etapas abaixo podem ser tentadas em qualquer ordem, mas são listadas de maneira mais fácil para maneira mais difícil de realizar.

1. If you are using Pretendo, switch back to Nintendo with Nimbus and try again
2. Defina suas configurações de DNS para "Automático"
3. Aproxime-se do seu roteador Wi-Fi
4. Atualize a partir do Safe Mode desligando o console, segurando (Gatilho Esquerdo) + (Gatilho Direito) + (Botão direcional para cima) + (A) na inicialização, seguindo as instruções na tela
5. Exclua sua conexão Wi-Fi e reconecte sua rede Wi-Fi novamente
6. Reinicie seu roteador Wi-Fi
7. Conecte-se a uma conexão Wi-Fi diferente, como um ponto de acesso móvel
8. Servidores Nintendo podem estar desligados; Tente novamente mais tarde
9. Se o erro persistir, [siga CTRTransfer](ctrtransfer), e tente novamente
10. Para mais suporte (em Inglês), entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp)

:::

:::details Error #22: finalize.romfs is invalid

O arquivo `finalize.romfs` está corrompido ou é ilegível. [Re-download it](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) and copy it to the root of the SD card, replacing any existing copy, then try again.

:::

:::details Information #23: finalize.romfs in wrong location

O arquivo `finalize.romfs` foi colocado no local errado ao invés de raiz do SD. O script tentará resolver isso, mas requer a sua permissão para fazê-lo. Aperte (A) nas próximas mensagens para continuar.

:::

:::details Error #24: SD is write-protected

Certifique-se de que seu cartão SD não esteja [bloqueado](/images/sdlock.png). Se o cartão SD não estiver bloqueado e você continuar a receber este erro, junte-se ao [Nintendo Homebrew no Discord](https://discord.gg/MWxPgEp) para assistência.

:::

:::details Error #02: Missing essential.exefs

Você disse 'No' para a mensagem "Make essential files backup?" no GodMode9. Desligue seu dispositivo, ligue-o enquanto segura (Start) para entrar novamente no GodMode9, diga 'Yes' para a mensagem, e então tente novamente.

:::

:::details Error #04: No space

Você precisa de pelo menos 1.3GB de espaço livre para executar o backup da NAND, que é parte do script. Se você não tem espaço suficiente, siga estes passos:

1. Desligue seu console
2. Insira o cartão SD no seu computador
3. Copie a pasta `Nintendo 3DS` da raiz do seu cartão SD para o seu computador
4. Exclua a pasta Nintendo 3DS do cartão SD
5. Reinsira o cartão SD no seu console
6. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
7. Pressione o botão (Home)
8. Selecione "Scripts..."
9. Selecione "finalize"
10. Aperte (A) para criar um backup da NAND
    - This may take around fifteen minutes
11. Aperte (A) novamente
    - The console should automatically power off
12. Insira o cartão SD no seu computador
13. Copie os arquivos em `gm9/backups/` do seu SD para um local seguro no seu computador
14. Apague os arquivos `<date>_<serialnumber>_sysnand_##.bin` e `<date>_<serialnumber>_sysnand_##.bin.sha` do cartão SD
15. Copie a pasta `Nintendo 3DS` do seu computador para a raiz do seu cartão SD
16. Exclua a pasta `Nintendo 3DS` do seu computador

Agora que você tem seu backup da NAND em um lugar seguro:

1. Reinsira o cartão SD no seu console
2. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
3. Pressione o botão (Home)
4. Selecione "Scripts..."
5. Selecione "finalize"
6. Continue o script normalmente
   - The NAND backup will be automatically skipped

:::

:::details Information #05: No title database

Aperte (A) para importar um title database, desbloqueie SysNAND apertando os botões na tela, e depois continue o script normalmente.

:::

:::details Error #06 or "Error: Could not open directory" when attempting a NAND backup

Certifique-se de que você tem pelo menos 1.3GB disponíveis no seu cartão SD. Se você não tem espaço suficiente, siga estes passos:

1. Desligue seu console
2. Insira o cartão SD no seu computador
3. Copie a pasta `Nintendo 3DS` da raiz do seu cartão SD para o seu computador
4. Exclua a pasta Nintendo 3DS do cartão SD
5. Reinsira o cartão SD no seu console
6. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
7. Faça um [backup da NAND](godmode9-usage#criating-a-nand-backup)
8. Copie os arquivos em `gm9/out` do seu SD para um local seguro no seu computador
9. Apague os arquivos `<date>_<serialnumber>_sysnand_##.bin` e `<date>_<serialnumber>_sysnand_##.bin.sha` do cartão SD, mantendo essential.exefs em `/gm9/out/`
10. Copie a pasta `Nintendo 3DS` do seu computador para a raiz do seu cartão SD
11. Exclua a pasta `Nintendo 3DS` do seu computador

Se você tiver espaço suficiente no seu cartão SD, seu SD pode estar corrompido ou com defeito. Verifique se há erros no seu cartão SD de acordo com o sistema operacional do seu computador: [Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), [macOS](f3xswift-\(mac\)).

:::

:::details Error #12: Copy (file).db fail

Certifique-se de que seu cartão SD não esteja [bloqueado](/images/sdlock.png). Se o cartão SD não estiver bloqueado e você continuar a receber este erro, junte-se ao [Nintendo Homebrew no Discord](https://discord.gg/MWxPgEp) para assistência.

:::

:::details Information #17: Duplicate NAND backup

O script detectou que a pasta Nintendo 3DS está faltando e que você já fez um backup da NAND antes. Se você pretende instalar o homebrew, você deve fazer o seguinte:

1. Aperte (B) para cancelar outro backup da NAND
2. Segure (R) e aperte (Start) ao mesmo tempo para desligar seu console
3. Copie os arquivos em `/gm9/backups/` do seu SD para um local seguro no seu computador
4. Apague `/gm9/backups/` do seu cartão SD
5. Se você moveu sua pasta Nintendo 3DS para fora do seu cartão SD para chegar a este ponto, copie-a de volta para o seu cartão SD
   - If you do not have a Nintendo 3DS folder, boot into the HOME Menu at least once with the SD card inserted to automatically generate it
6. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
7. Aperte (Home) para abrir o menu de ações
8. Selecione "Scripts..."
9. Selecione "finalize"
10. Siga as instruções no script, respondendo a quaisquer perguntas que lhe sejam feitas

:::

:::details Error #18a/18b: MSET9 detected

Você não removeu o MSET9 na página anterior. O script tentará remover o MSET9 para você; siga as instruções dadas pelo script.

:::

---

## Boot issues on consoles with custom firmware

::: info

As etapas detalhadas aqui geralmente assumem que o seu console tem um setup de custom firmware moderno (boot9strap + Luma3DS 8.0 ou superior). Se o seu console está executando uma instalação homebrew mais antiga (por exemplo, algo baseado em arm9loaderhax ou menuhax), você deve atualizar sua configuração antes de tentar essas instruções.

:::

### Power/notification light indicators

:::details My console powers off when I try to turn it on, and/or the notification LED shows a color on boot

Há um problema com o seu arquivo `boot.firm`. Se você estiver executando [boot9strap 1.4](https://github.com/SciresM/boot9strap/releases/tag/1.4), seu LED de notificação do 3DS poderá terá uma certa cor. Esta cor é usada para diagnosticar problemas que envolvem seu arquivo `boot.firm` no cartão SD ou na memória interna. Em versões mais antigas do boot9strap, a luz azul irá desligar quase imediatamente quando tentar ligar o console.

Se o LED de notificação acender:

- **White**: Your 3DS was not able to find `boot.firm` on your SD card or on internal memory.
- **Magenta**: Your 3DS was not able to find `boot.firm` on your SD card. Ele foi capaz de encontrar `boot.firm` na memória interna, mas o arquivo está corrompido.
- **Red**: Your 3DS was able to find `boot.firm` on both your SD card and on internal memory, but both files are corrupted.

Você pode obter um novo arquivo `boot.firm` baixando a [versão mais recente do Luma3DS](https://github. om/LumaTeam/Luma3DS/releases/latest), extraindo e colocando `boot.firm` na raiz do seu cartão SD. Se o seu arquivo `boot.firm` está sendo constantemente detectado como corrompido, você pode querer verificar se há erros no seu cartão SD ([Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), ou [macOS](f3xswift-\(mac\))). Além disso, note que o 3DS tende a ter problemas com arquivos extraídos usando WinRAR.

Se você ouvir um "som de pop", potencialmente acompanhado com a luz de fundo ativando por um segundo, há um problema de hardware no seu console (como um cabo de luz de fundo desconectado). Você pode ser capaz de fazer com que o seu console inicialize segurando-o em certos ângulos.

:::

:::details My console gets stuck on a black screen with blue power light staying on

As etapas abaixo podem ser tentadas em qualquer ordem, mas são listadas de menos para mais demorada.

1. Desligue o console, remova o cartão SD, insira-o e, em seguida, ligue seu console.
2. Desligue o console, ejete o cartucho do jogo se estiver inserido, ligue o seu console, e espere até dez minutos. Se o seu console inicializar dentro de dez minutos, o problema foi corrigido e é improvável que volte a ocorrer
3. Renomeie a pasta `Nintendo 3DS` no seu cartão SD para `Nintendo 3DS_BACKUP`, depois tente inicializar. Se o seu console é iniciado com sucesso, há alguns problemas na pasta `Nintendo 3DS`. Tente limpar a extdata do Menu HOME:
   - Navigate to `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/`
   - Apague a pasta correspondente para a região do seu 3DS:
     - **EUR Region**: `00000098`
     - **JPN Region**: `00000082`
     - **USA Region**: `0000008f`
     - **CHN Region**: `000000A1`
     - **KOR Region**: `000000A9`
     - **TWN Region**: `000000B1`
4. Tente iniciar no modo recovery e atualizar o seu sistema:
   - Desligue seu console
   - Hold (Left Shoulder) + (Right Shoulder) + (D-Pad Up) + (A)
   - Ligue o seu console
   - If you were successful, the console will boot to an "update your system" screen
5. Siga o guia de [CTRTransfer](ctrtransfer)
6. Para mais suporte, peça ajuda no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp)

:::

### Error message on boot

:::details "An error has occurred: Failed to apply 1 FIRM patch(es)" or "An exception has occurred -- Current process: pm"

Sua versão do Luma3DS está desatualizada. Baixe a versão mais recente do [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) e coloque `boot.firm` na raiz do seu cartão SD, substituindo qualquer arquivo existente. Certifique-se de estar extraindo o arquivo ZIP com qualquer outra ferramenta que não seja o WinRAR, pois é conhecido por causar problemas com arquivos relacionados ao 3DS.

:::

:::details "Unable to mount CTRNAND or load the CTRNAND FIRM. Please use an external one."

There are a number of reasons as to why this could be happening. In any case, this error can usually be fixed by following the [CTRTransfer](ctrtransfer) guide.

:::

:::details "An error has occurred. Hold down the POWER button to turn off the power..."

Os ARM11 exception handlers estão desabilitados, ou custom firmware não está instalado. Try enabling ARM11 exception handlers:

- Desligue seu console
- Hold (Select)
- Power on your console, while still holding (Select)
- If the "Disable ARM11 exception handlers" box is checked, uncheck it

:::

:::details HOME Menu is missing installed applications

Isso pode ser causado por várias razões, mas principalmente porque o seu cartão SD não está sendo lido pelo sistema.
Você pode verificar se seu SD está sendo lido segurando SELECT durante a inicialização e verificando o texto amarelo na parte inferior; Se disser "Booted from CTRNAND via B9S", então seu console está iniciando da memória interna e não do cartão SD.
Se este for o caso, tente os passos abaixo, os quais são listados de mais fácil para mais difícil:

1. Desligue o console, remova o cartão SD, insira-o e, em seguida, ligue seu console
2. Desligue o console, remova o cartão SD, insira-o no seu computador, baixe a versão mais recente do [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest), extraia `boot.firm` do `Luma3DS.zip` e coloque-o na raiz do seu cartão SD (substituindo qualquer arquivo existente)
3. Desligue o console, remova o cartão SD, insira-o no seu computador e reformate o cartão SD de acordo com o sistema operacional do seu computador: [Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)) _(isso irá apagar os dados do seu cartão SD)_
4. Teste por erros no seu cartão SD seguindo o guia de acordo com o sistema operacional do seu computador: [Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), [macOS](f3xswift-\(mac\)). Se o seu cartão SD estiver marcado como defeituoso, então você terá que substituir o cartão SD
5. Sua entrada de cartão SD pode estar com problemas. Entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp) para obter mais ajuda

:::

:::details Blue "BOOTROM ERROR" screen

Seu console provavelmente está hard-bricked. Você precisará comprar um flashcart de ntrboot para reinstalar o boot9strap para tentar consertar seu console. Isso também pode indicar um problema de hardware que não pode ser corrigido. De qualquer forma, entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp) para obter ajuda.
\+ Também é possível que alguém tenha definido um splash (tela que mostra uma imagem assim que o 3DS inicia) que se pareça com um brick. Tente deixar o seu console ligado, esperando na tela azul, por cinco minutos.

:::

:::details Some other error

Por favor, tire uma foto do erro e entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp) para obter ajuda.

:::

## Software issues on consoles with custom firmware

:::details DSi / DS functionality is broken or has been replaced with Flipnote Studio

1. Baixe a versão mais recente do [TWLFix-CFW](https://github.com/MechanicalDragon0687/TWLFix-CFW/releases/latest) (o arquivo `.3dsx`)
2. Desligue seu console
3. Crie uma pasta chamada `3ds` na raiz do seu cartão SD se ela ainda não existir
4. Copie o arquivo `TWLFix-CFW.3dsx` para a pasta `/3ds/` do seu cartão SD
5. Reinsira o cartão SD no seu console
6. Abra o Homebrew Launcher
7. Inicie o TWLFix-CFW da lista do homebrew
8. Aperte (A) para desinstalar os títulos TWL
9. Aperte (Start) para reiniciar o console
10. Atualize seu console indo em Configurações do Sistema, depois em "Outras Configurações", depois indo até a direita e usando "Atualização do Sistema"
    - The update will see that the essential TWL titles have been uninstalled, and will redownload and reinstall them
11. Quando a atualização for concluída, toque em "OK" para reiniciar o console

:::

:::details GBA Virtual Console and/or Safe Mode functionality is broken

O seu console está executando o Luma3DS 6.6 ou mais antigo, provavelmente via arm9loaderhax. Você deve seguir [A9LH para B9S](a9lh-to-b9s) para atualizar seu console para um ambiente moderno de custom firmware.

:::

:::details Extended memory mode games (Pokemon Sun/Moon, Smash, etc.) don't work

Isso pode ocorrer após uma CTRTransfer ou mudança de região no Old 3DS / 2DS. Follow the instructions [here](region-changing#section-vi---fixing-locale-related-issues) to fix this issue (skipping steps 3, 4, 5, and 6).

:::

:::details Exception screen when booting/loading an application

Procure pela sua exception screen [nesta página](https://wiki.hacks.guide/wiki/3DS:Error_screens/Luma3DS_exception_screen).
Se você não conseguiu encontrar seu erro ou as instruções não funcionaram, entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp) para obter mais assistência.

:::

:::details Opening the HOME Menu settings crashes the console or loads the Homebrew Launcher

Seu console provavelmente ainda tem menuhax67 instalado. Para desinstalar menuhax67, baixe a versão mais recente de [menuhax67](https://github.com/zoogie/menuhax67/releases/latest) (o `.zip`), então siga a [seção "Desinstalar menuhax67"](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits/menuhax67#Uninstall_menuhax67) aqui.

:::

---

## Other troubleshooting

:::details Clear HOME Menu extdata

1. Desligue seu console
2. Insira o cartão SD no seu computador
3. Navegue até a pasta `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` no seu cartão SD
4. Apague a pasta correspondente para a região do seu 3DS:
   - **EUR Region**: `00000098`
   - **JPN Region**: `00000082`
   - **USA Region**: `0000008f`
   - **CHN Region**: `000000A1`
   - **KOR Region**: `000000A9`
   - **TWN Region**: `000000B1`
5. Reinsira o cartão SD no seu console

:::

:::details Clear HOME Menu theme data

1. Desligue seu console
2. Insira o cartão SD no seu computador
3. Navegue até a pasta `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` no seu cartão SD
4. Apague a pasta correspondente para a região do seu 3DS:
   - **EUR Region**: `000002ce`
   - **JPN Region**: `000002cc`
   - **USA Region**: `000002cd`
   - **KOR Region**: `000002cf`
5. Reinsira o cartão SD no seu console

:::

:::details Manually entering Homebrew Launcher

Se você estiver sem o aplicativo do Homebrew Launcher no seu Menu HOME, você pode seguir estas instruções para entrar no Homebrew Launcher manualmente. (Você precisará de [boot.3dsx e boot.firm](https://github.com/LumaTeam/Luma3DS/releases/latest) na raiz do seu cartão SD.)

<!--@include: ./_include/launch-hbl-dlp.md -->

:::

:::details Turning off Parental Controls

Desative o recurso Controle dos Pais indo em Configurações do Sistema -> Controles dos Pais e inserindo o PIN, então pressionando "Limpar configurações", depois "Excluir" para removê-lo.
Entretanto, se você não sabe o PIN e, portanto, não pode acessar as configurações do console, você precisará desativá-lo. Para fazer isso, você precisa obter a chave mestra do seu console (mkey):

1. Vá para [este site](https://mkey.eiphax.tech/)
2. Preencha as seguintes caixas com as informações:
   - Device Type: Select "3DS" (the same applies if you are using a 2DS, New 3DS (XL/LL) or New 2DS (XL/LL))
   - System Date: The day and month your console's clock is set to
   - Inquiry Number: Can be obtained by pressing "Forgot PIN" then "I Forgot" in the Parental Controls screen
3. Depois de obter sua mkey, pressione OK na tela onde você obteve seu Inquiry Number, então informe a mkey
4. Pressione "Limpar Configurações", depois "Excluir" para remover todos os dados do Controle dos Pais

:::
