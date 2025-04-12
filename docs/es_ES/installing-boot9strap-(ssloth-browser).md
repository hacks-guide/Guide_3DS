# Instalar boot9strap (SSLoth-Browser)

:::details Detalles técnicos (opcional)

In order to exploit the Browser application, we need to bypass the browser version check, which is designed to disallow the use of the browser without updating to the latest system version.

A public proxy server is available, which, with the help of the SSLoth exploit, can bypass this check.

Once the bypass is active, an exploit webpage will be accessible which will do the rest of the job.

For technical details on the exploits that you will be using on this page, see [here](https://github.com/MrNbaYoh/3ds-ssloth) (SSLoth) and [here](https://github.com/TuxSH/universal-otherapp) (universal-otherapp).

:::

## Notas de compatibilidad

SSLoth allows users on version 11.13.0 and below to bypass the browser version check, allowing the use of new-browserhax or old-browserhax (compatible with versions 11.4.0 through 11.13.0 in all regions), which can then be used in conjunction with universal-otherapp.

## Lo que necesitas

- La última versión de [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (descarga directa)
- La última versión de [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (descarga directa)
- La última versión de [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (el archivo `.zip` de Luma3DS)
- The latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

## Instrucciones

### Sección I - Preparativos

In this section, you will copy the files needed to trigger both browserhax and universal-otherapp.

1. Apaga la consola
2. Inserta la tarjeta SD en tu computadora
3. Copy `otherapp.bin` to the root of your SD card and rename it to `arm11code.bin`
    - La raíz de la tarjeta SD se refiere al primer directorio de la tarjeta, donde puedes ver la carpeta Nintendo 3DS pero no estás dentro de ella
    - If you do not see the `.bin` extension, do not add it to the end of the filename
4. Copy everything from the Luma3DS `.zip` to the root of your SD card
5. Crea una carpeta llamada `boot9strap` en la raíz de la tarjeta SD
6. Copia `boot9strap.firm` y `boot9strap.firm.sha` desde el `.zip` de boot9strap a la carpeta `/boot9strap/` en la tarjeta SD
7. Copy `SafeB9SInstaller.bin` from the SafeB9SInstaller `.zip` to the root of your SD card
8. Reinserta la tarjeta SD en la consola
9. Enciende tu consola

### Section II - SSLoth

In this section, you will change your Internet connection settings to use a proxy network designed to bypass the browser version check, allowing the browser to function without a system update. This will allow you to access the browser exploit webpage in the next section.

<!--@include: ./_include/addproxy.md -->

1. Press "Back" twice, then "Close" to go back to the HOME Menu

### Section III - Launching SafeB9SInstaller

In this section, you will visit the browser exploit webpage, which will use universal-otherapp to launch the boot9strap (custom firmware) installer.

1. On the HOME Menu, press the Left and Right shoulder buttons at the same time to open the camera
    - If you are unable to open the camera, open the Internet Browser and manually type the URL instead (`https://zoogie.github.io/web/nbhax/`)

2. Tap the QR code button and scan [this QR code](http://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data=https%3A%2F%2Fzoogie.github.io%2Fweb%2Fnbhax&qzone=1&margin=0&size=400x400&ecc=L)

    - When you get a prompt with error code `012-1511`, press (A) to allow the connection
    - If you get a crash or a different error code, [follow this troubleshooting guide](troubleshooting-ssloth-browser)

    ::: danger

    Si aparece un mensaje pidiéndote que actualices la consola, ¡DETENTE! Haz de nuevo la Sección II desde el principio y asegúrate de haber configurado el proxy correctamente.

    :::

3. Tap the "PROCEED TO HAXX" button

4. Si el exploit fue exitoso, habrás iniciado SafeB9SInstaller
    - If you get an error, [follow this troubleshooting guide](troubleshooting-ssloth-browser)

### Section IV - Installing boot9strap

En esta sección, instalarás custom firmware en tu consola.

1. Cuando se te pida, introduce la combinación de botones mostrada para instalar boot9strap
    - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-ssloth-browser)
2. Una vez completado, presiona (A) para reiniciar tu consola

<!--@include: ./_include/configure-luma3ds.md -->

### Section V - Restoring default proxy

<!--@include: ./_include/rmproxy.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

Continúa a [Finalizar instalación](finalizing-setup)

:::
