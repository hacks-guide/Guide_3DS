---
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/soundhax-link.js
  - - script
    - src: /assets/js/link-common.js
---

# Installing boot9strap (Soundhax)

:::details Detalles técnicos (opcional)

For technical details on the exploits that you will be using on this page, see [here](https://github.com/nedwill/soundhax) (Soundhax) and [here](https://github.com/TuxSH/universal-otherapp) (universal-otherapp).

:::

## Notas de compatibilidad

Soundhax (when combined with universal-otherapp) is compatible with versions 1.0.0 through 11.3.0 in all regions.

## Lo que necesitas

- The latest release of [Soundhax](http://soundhax.com) _(for your region, console, and version)_
    - If Soundhax appears in your browser as an unplayable video, press Ctrl+S or Cmd+S to save it to your computer
- La última versión de [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (descarga directa)
- La última versión de [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (descarga directa)
- La última versión de [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (el archivo `.zip` de Luma3DS)
- The latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

## Instrucciones

### Sección I - Preparativos

In this section, you will copy the files needed to trigger both Soundhax and universal-otherapp.

1. Apaga la consola
2. Inserta la tarjeta SD en tu computadora
3. Copy the Soundhax `.m4a` to the root of your SD card
    - La raíz de la tarjeta SD se refiere al primer directorio de la tarjeta, donde puedes ver la carpeta Nintendo 3DS pero no estás dentro de ella
4. Copy `otherapp.bin` to the root of your SD card
5. Copy everything from the Luma3DS `.zip` to the root of your SD card
6. Crea una carpeta llamada `boot9strap` en la raíz de la tarjeta SD
7. Copia `boot9strap.firm` y `boot9strap.firm.sha` desde el `.zip` de boot9strap a la carpeta `/boot9strap/` en la tarjeta SD
8. Copy `SafeB9SInstaller.bin` from the SafeB9SInstaller `.zip` to the root of your SD card
9. Reinserta la tarjeta SD en la consola
10. Enciende tu consola

::: info

![](/images/screenshots/soundhax/soundhax-root-layout.png)

:::

::: info

![](/images/screenshots/boot9strap-folder.png)

:::

### Section II - Launching SafeB9SInstaller

In this section, you will launch Soundhax through the Nintendo 3DS Sound app, which will use universal-otherapp to launch the boot9strap (custom firmware) installer.

1. Launch Nintendo 3DS Sound

    ::: info

    ![](/images/screenshots/soundhax/soundhax-welcome.png)

    :::

2. If you've never opened Nintendo 3DS Sound before and get tips on how to use it from a bird icon, go through all of the bird tips, then close the app normally and relaunch it
    - In this situation, launching Soundhax immediately would cause these tips to appear on every launch of the Nintendo 3DS Sound until this is done

3. Go to `/SDCARD`, then play "<3 nedwill 2016"

    - This may take many (up to 10) tries
    - If you see the message "Could not play", you are either on a system version incompatible with Soundhax or downloaded the wrong Soundhax release
    - If it freezes, force the console to power off by holding the power button, then try again
    - If you get a different error, [follow this troubleshooting guide](troubleshooting-soundhax)

    ::: info

    ![](/images/screenshots/soundhax/soundhax-launch.png)

    :::

4. Si el exploit fue exitoso, habrás iniciado SafeB9SInstaller

### Sección III - Instalar boot9strap

En esta sección, instalarás custom firmware en tu consola.

1. Cuando se te pida, introduce la combinación de botones mostrada para instalar boot9strap
    - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-soundhax)
2. Una vez completado, presiona (A) para reiniciar tu consola

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

Continúa a [Finalizar instalación](finalizing-setup)

:::
