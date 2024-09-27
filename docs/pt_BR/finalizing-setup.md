# Finalizando a Instalação

## Required Reading

O arquivo `boot.firm` é o que é iniciado pelo boot9strap depois que ele termina de carregar a NAND. Neste caso, estamos usando o Luma3DS por [LumaTeam](https://github.com/LumaTeam/) para alterar o console, permitindo que ele execute um software de homebrew.

Nesta página, faremos backups de arquivos críticos do sistema e instalaremos os seguintes programas de homebrew. A maioria dessas etapas serão automatizadas usando um script que você irá executar no seu console.

::: info

O script irá instalar os seguintes aplicativos:

- **[FBI](https://github.com/lifehackerhansol/FBI)** _(installs CIA formatted applications)_
- **[Homebrew Launcher Loader](https://github.com/PabloMK7/homebrew_launcher_dummy)** _(launches the Homebrew Launcher)_
- **[Anemone3DS](https://github.com/astronautlevel2/Anemone3DS)** _(installs custom themes)_
- **[Checkpoint](https://github.com/FlagBrew/Checkpoint)** _(backs up and restores save files for 3DS and DS games)_
- **[ftpd](https://github.com/mtheall/ftpd)** _(access your 3DS SD card wirelessly)_
- **[Universal-Updater](https://github.com/Universal-Team/Universal-Updater/)** _(a homebrew app store for downloading homebrew from the 3DS over Wi-Fi)_
- **[GodMode9](https://github.com/d0k3/GodMode9)** _(multipurpose tool which can do NAND and cartridge functions)_

Se você não quer um destes aplicativos, você pode removê-los depois de concluir esta página navegando até Configurações do Sistema -> Gerenciamento de Dados -> Nintendo 3DS -> Software. (GodMode9 não pode ser removido desta maneira e é geralmente necessário para outras funções.)

:::

## Compatibility Notes

::: warning

Se o seu **New 3DS** estava na versão 2.1.0 antes de seguir este guia, você deve [restaurar o seu backup da NAND](godmode9-usage#restoring-a-nand-backup) antes de continuar. Isto provavelmente não se aplica a você, a menos que você seguiu este guia em 2017.

:::

::: info

Se a sua instalação do CFW anterior era baseada em EmuNAND e você deseja mover o conteúdo da sua EmuNAND/RedNAND para SysNAND, siga [Mover EmuNAND](move-emunand) antes de seguir esta página. Se você não sabe o que é uma EmuNAND, isso não se aplica a você.

:::

## What You Need

- [x_finalize_helper.firm](https://github.com/hacks-guide/finalize/releases/latest/download/x_finalize_helper.firm) (direct download)
- [finalize.romfs](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) (direct download)

## Instructions

### Section I - Prep Work

Nesta seção, você copiará os arquivos necessários para seguir o resto das instruções nesta página.

1. Desligue seu console
2. Insira o cartão SD no seu computador
3. Copie `finalize.romfs` para a raiz do seu cartão SD
4. Abra a pasta `luma` no seu cartão SD e crie uma pasta chamada `payloads` dentro, se já não existir
5. Copie `finalize_helper.firm` para a pasta `payloads`
6. Reinsira o cartão SD no seu console

As capturas de tela abaixo indicam o layout mínimo do cartão SD que é necessário para seguir esta página. Você pode ter arquivos ou pastas extras no seu cartão SD, dependendo da sua instalação anterior ou do método que você seguiu.

::: info

![](/images/screenshots/finalizing-root-layout.png)

:::

::: info

![](/images/screenshots/finalizing-luma-payloads.png)

:::

### Section II - Updating the System

Nesta seção, você atualizará seu sistema para a versão mais recente, que é seguro de fazer com custom firmware.

<!--@include: ./_include/sysupdate.md -->

### Section III - RTC and DSP setup

Nesta seção, você irá sincronizar o relógio interno do seu 3DS com a hora real e descarregar o firmware de som (que é necessário para que alguns softwares de homebrew utilizem o som corretamente).

1. Aperte (Gatilho Esquerdo) + (D-pad pra baixo) + (Select) ao mesmo tempo para abrir o menu Rosalina
   - If one of these buttons is broken, download [config.ini](/assets/config.ini) and put it in your `luma` folder, replacing the existing one. Isso vai mudar a combinação de botões do Rosalina menu para (X) + (Y)
2. Selecione "Miscellaneous options"
3. Selecione "Dump DSP firmware"
4. Aperte (B) para continuar
5. Selecione "Nullify user time offset"
6. Aperte (B) para continuar
7. Aperte (B) para retornar para o menu principal do Rosalina
8. Aperte (B) para sair do menu do Rosalina

### Section IV - Setup Script

Nesta seção, você usará uma série de scripts para automatizar a instalação de homebrews, limpeza de cartão SD e backup de arquivos do sistema.

1. Desligue seu console
2. Aperte e segure (X), e enquanto segura (X), ligue o console. Isto irá iniciar o Finalizing Setup Helper
   - If you boot to the HOME Menu, your `payloads` folder may be incorrectly spelled or in the wrong location
   - If you encounter an error, consult the [troubleshooting](troubleshooting#finalizing-setup) page
3. Se o Helper for bem-sucedido, o seu console iniciará no GodMode9
   - From this point forward, you can access GodMode9 by holding START while powering on your console
4. Se você for solicitado para criar um backup de arquivos essenciais, aperte (A) pra fazê-lo, e depois aperte (A) para continuar quando ele for concluído
5. Se você for solicitado para consertar o RTC date&time, pressione (A) para consertar, então insira a data e a hora, depois pressione (A) para continuar
6. Aperte (Home) para abrir o menu de ações
7. Selecione "Scripts..."
8. Selecione "finalize"
9. Siga as instruções no script, respondendo a quaisquer perguntas que lhe sejam feitas
   - If you encounter an error, follow the instructions in the error message or consult the [troubleshooting](troubleshooting#finalizing-setup) page
10. Uma vez que o script disser "Setup complete!", aperte (A) para desligar o dispositivo
    - If you do NOT see the message "Setup complete!", the script was not successful and you will need to redo this section from Step 3
11. Insira o cartão SD no seu computador
12. Copie a pasta `/gm9/backups/` no seu cartão SD para um local seguro no seu computador
    - This folder contains critical file backups and should be backed up to multiple locations (i.e. cloud storage) if possible
    - The two SysNAND files are your NAND backup and can be used to revert your console to a working state if it is bricked by a software issue
    - The `essential.exefs` file contains your console's system-unique files and can be used to recover your data in the event of a hardware failure
13. Se você ainda os tiver, exclua os dois arquivos `SysNAND` da pasta `/gm9/backups/` do seu cartão SD
    - The `essential.exefs` file is small and may be kept on your SD card for ease of access

___

::: tip

Você terminou! Custom firmware agora está totalmente configurado no seu console.

:::

::: info

Tentando descobrir o que fazer com seu dispositivo recém-modificado? Visite [nossa wiki](https://wiki.hacks.guide/wiki/3DS:Things_to_do)!

:::

### Information and Notes

::: info

Aqui estão alguns combos que você deve saber:

- Holding (Select) on boot will launch the Luma3DS configuration menu.
- Holding (Start) on boot will launch GodMode9, or if you have multiple payloads in `/luma/payloads/`, the Luma3DS chainloader.
- By default, pressing (Left Shoulder) + (Down D-Pad) + (Select) while in 3DS mode will open the Rosalina menu, where you can check system information, take screenshots, enable cheats, and more. Isto pode ser alterado a partir do menu do Rosalina.
- Holding (Start) + (Select) + (X) on boot will make the notification LED show a color for debug purposes. Veja o [changelog](https://github.com/SciresM/boot9strap/releases/tag/1.4) para uma lista.

:::

::: info

Para informações sobre como usar os vários recursos do GodMode9, confira as páginas [Uso do GodMode9](godmode9-usage) e [Fazendo Dump de Aplicativos e Jogos de Cartucho](dumping-titles-and-game-cartridges).

:::
