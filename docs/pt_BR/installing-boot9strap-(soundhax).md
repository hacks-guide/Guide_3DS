# Instalando boot9strap (Soundhax)

:::details Technical Details (optional)

Para detalhes técnicos sobre os exploits que você usará nesta página, veja [aqui](https://github.com/nedwill/soundhax) e [aqui](https://github.com/TuxSH/universal-otherapp) (universal-otherapp).

:::

## Compatibility Notes

Soundhax (quando combinado com universal-otherapp) é compatível com as versões 1.0.0 a 11.3.0 em todas as regiões.

## What You Need

- The latest release of [Soundhax](http://soundhax.com) _(for your region, console, and version)_
  - If Soundhax appears in your browser as an unplayable video, press Ctrl+S or Cmd+S to save it to your computer
- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
- The latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

## Instructions

### Section I - Prep Work

Nesta seção, você irá copiar os arquivos necessários para acionar o Soundhax e o universal-otherapp.

1. Desligue seu console
2. Insira o cartão SD no seu computador
3. Copie o Soundhax `.m4a` para a raiz do seu cartão SD
   - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
4. Copie `otherapp.bin` para a raiz do seu cartão SD
5. Copy everything from the Luma3DS `.zip` to the root of your SD card
6. Crie uma pasta chamada `boot9strap` na raiz do seu cartão SD
7. Copie o `boot9strap.firm` e o `boot9strap.firm.sha` do `.zip` do boot9strap para a pasta `/boot9strap/` no seu cartão SD
8. Copie `SafeB9SInstaller.bin` do `.zip` do SafeB9SInstaller para a raiz do seu cartão SD
9. Reinsira o cartão SD no seu console
10. Ligue o seu console

::: info

![](/images/screenshots/uosoundhax-root-layout.png)

:::

::: info

![](/images/screenshots/boot9strap-folder.png)

:::

### Section II - Launching SafeB9SInstaller

Nesta seção, você irá iniciar o Soundhax através do aplicativo Som Nintendo 3DS, que usará o aplicativo universal-otherapp para iniciar o instaladorboot9strap (custom firmware).

1. Abra o Som Nintendo 3DS

   ::: info

   ![](/images/screenshots/soundhax-welcome.png)

   :::

2. Se você nunca abriu o Som Nintendo 3DS antes e receber as dicas de como utilizá-lo de um ícone de pássaro, passe por todos os palpites dos papagaios, depois feche o aplicativo normalmente e abra-o novamente
   - In this situation, launching Soundhax immediately would cause these tips to appear on every launch of the Nintendo 3DS Sound until this is done

3. Vá até `/SDCARD`, depois toque "<3 nedwill 2016"

   - This may take many (up to 10) tries
   - If you see the message "Could not play", you are either on a system version incompatible with Soundhax or downloaded the wrong Soundhax release
   - If it freezes, force the console to power off by holding the power button, then try again
   - If you get a different error, [follow this troubleshooting guide](troubleshooting#installing-boot9strap-soundhax)

   ::: info

   ![](/images/screenshots/soundhax-launch.png)

   :::

4. Se o exploit for bem-sucedido, você terá entrado no SafeB9SInstaller

### Section III - Installing boot9strap

Nesta seção, você instalará custom firmware no seu console.

1. Quando solicitado, aperte a sequência de botões fornecida na tela superior para instalar o boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
2. Quando concluído, aperte (A) para reiniciar o seu console

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
