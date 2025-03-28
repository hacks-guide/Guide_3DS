# Instalar boot9strap (safecerthax)

:::details Technical Details (optional)

:::

## Notas de compatibilidad

safecerthax is compatible with all Old 3DS and Old 2DS consoles in all regions on system versions 1.0.0 through 11.14.0.

::: info

This exploit will not work on the New 3DS, New 3DS XL, or New 2DS XL. Please ensure that the console you are modding is an Old 3DS, Old 3DS XL, or Old 2DS before continuing.

:::

## Lo que necesitas

- La última versión de [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (descarga directa)
- La última versión de [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (descarga directa)
- La última versión de [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (el archivo `.zip` de Luma3DS)

## Instrucciones

### Section I - Hardware Button Check

In this section, you will see whether your shoulder buttons are working on your console. This will determine whether your console is compatible with this method.

1. Enciende tu consola
2. Once you see the HOME Menu, press the (Left Shoulder) and (Right Shoulder) buttons at the same time
    - The camera applet should appear
3. Apaga la consola

::: warning

If the camera did NOT appear, you cannot follow this method. If this is the case, use [Installing boot9strap (MSET9)](installing-boot9strap-\(mset9\)) instead.

:::

### Section II - Prep Work

In this section, you will copy the files needed to trigger the safecerthax exploit.

1. Inserta la tarjeta SD en tu computadora
2. Copy everything from the Luma3DS `.zip` to the root of your SD card
    - La raíz de la tarjeta SD se refiere al primer directorio de la tarjeta, donde puedes ver la carpeta Nintendo 3DS pero no estás dentro de ella
3. Crea una carpeta llamada `boot9strap` en la raíz de la tarjeta SD
4. Copia `boot9strap.firm` y `boot9strap.firm.sha` desde el `.zip` de boot9strap a la carpeta `/boot9strap/` en la tarjeta SD
5. Copy `SafeB9SInstaller.bin` from the SafeB9SInstaller `.zip` to the root of your SD card
6. Reinserta la tarjeta SD en la consola
7. Enciende tu consola

### Section III - safecerthax proxy

::: warning

This section is MANDATORY! Failure to setup the proxy may cause you to update your console to a newer firmware by mistake.

:::

In this section, you will change your Internet connection settings to use a proxy network designed to exploit the System Update feature of your console.

<!--@include: ./_include/addproxy.md -->

1. Apaga la consola

### Section IV - safecerthax

In this section, you will enter Safe Mode (a feature available on all 3DS family consoles) where safecerthax will be triggered, which will launch you into the boot9strap (custom firmware) installer.

1. With your console still powered off, hold the following buttons: (Left Shoulder) + (Right Shoulder) + (D-Pad Up) + (A), and while holding these buttons together, power on your console
    - Keep holding the buttons until the console boots into Safe Mode (a "system update" menu)
2. Press "OK" to accept the update
    - There is no update. This is part of the exploit
3. Press "I accept" to accept the terms and conditions
4. The update will eventually fail, with the error code `003-1099`. This is intended behaviour
5. Press "OK" to close the error message
6. If the exploit was successful, you will have booted into SafeB9SInstaller
    - If the console freezes or crashes, force power off the console, then retry this section

### Section V - Installing boot9strap

En esta sección, instalarás custom firmware en tu consola.

1. Cuando se te pida, introduce la combinación de botones mostrada para instalar boot9strap
    - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-safecerthax)
2. Una vez completado, presiona (A) para reiniciar tu consola

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

### Section VI - Restoring default proxy

<!--@include: ./_include/rmproxy.md -->

___

::: tip

Continúa a [Finalizar instalación](finalizing-setup)

:::
