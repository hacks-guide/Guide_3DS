# A9LH a B9S

## Lectura requerida

Esta página es para los usuarios actuales de arm9loaderhax que deseen actualizar sus consolas a boot9strap.

Todas las versiones futuras de Luma3DS serán sólo en formato `.firm`, el cual será únicamente compatible con boot9strap y sighax. Esto significa que, para continuar recibiendo las últimas actualizaciones de Luma3DS, deberás utilizar esta página para continuar con tu instalación.

## Lo que necesitas

::: warning

Para utilizar los enlaces [magnéticos](https://es.wikipedia.org/wiki/Magnet) de esta página, tienes que utilizar un cliente torrent como [qBittorrent](https://www.qbittorrent.org/download.php) o [Deluge](http://dev.deluge-torrent.org/wiki/Download).

:::

::: info

Ten en cuenta que sólo en la New 3DS `secret_sector.bin` es requerido para revertir el exploit de arm9loaderhax, por lo cual no se necesita para la instalación de boot9strap en una consola sin modificar. Si no tienes una New 3DS, no necesitas el `secret_sector.bin`.

:::

- <font-awesome-icon icon="fa-solid fa-magnet"/> - **Solo para usuarios de New 3DS:** [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) (enlace magnético)
- La última versión de [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (el archivo `.zip` de Luma3DS)
- La versión 7.0.5 de [Luma3DS] (https://github.com/LumaTeam/Luma3DS/releases/download/v7.0.5/Luma3DSv7.0.5.zip) (descarga directa)
- La última versión de [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (descarga directa)
- La última versión de [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (descarga directa)

## Instrucciones

### Sección I - Preparativos

::: info

Para todos los pasos en esta sección, sobreescribe cualquier archivo existente en tu tarjeta SD.

:::

1. Apaga la consola

2. Inserta la tarjeta SD en tu computadora

3. Copia todo lo que está dentro del `.zip` de Luma3DS a la raíz de tu tarjeta SD
    - La raíz de la tarjeta SD se refiere al primer directorio de la tarjeta, donde puedes ver la carpeta Nintendo 3DS pero no estás dentro de ella

4. Copia `arm9loaderhax.bin` desde el `.zip` de Luma3DS v7.0.5 a la raíz de la tarjeta SD

5. Copia `SafeB9SInstaller.bin` desde el `.zip` de SafeB9SInstaller a la carpeta`/luma/payloads/` en la tarjeta SD
    - Si las carpetas `luma` o `payloads` no existen, créalas apropiadamente
    - Elimina cualquier otro payload `.bin` existente (`GodMode9.bin`, `Decrypt9WIP.bin`, `Hourglass9.bin`, etc.) dentro de la carpeta `/luma/payloads/` en la tarjeta SD ya que no funcionarán con versiones de Luma3DS compatibles con boot9strap

6. Crea una carpeta llamada `boot9strap` en la raíz de la tarjeta SD

7. Copia `boot9strap.firm` y `boot9strap.firm.sha` desde el `.zip` de boot9strap a la carpeta `/boot9strap/` en la tarjeta SD

8. **Sólo para usuarios de New 3DS:** Copia `secret_sector.bin` a la carpeta `/boot9strap/`en la tarjeta SD

    ::: info

    ![](/images/screenshots/a9lh-to-b9s-root-layout.png)

    :::

9. Reinserta la tarjeta SD en la consola

### Sección II - Instalar boot9strap

1. Enciende la consola manteniendo (Start) presionado para iniciar SafeB9SInstaller
    - Si ves la pantalla de configuración de Luma3DS en lugar de SafeB9SInstaller, simplemente presiona (Start), luego apaga la consola e intenta de nuevo
    - Si te da error, intenta usar otra tarjeta SD o formatear la que tienes (realizando previamente una copia de seguridad de los archivos existentes)
2. Espera a que todas las verificaciones de seguridad se completen
    - Si aparece el error "OTP Crypto Fail", descarga <font-awesome-icon icon="fa-solid fa-magnet"/> - aeskeydb.bin, colócalo en la carpeta `/boot9strap/` en la tarjeta SD e intenta de nuevo
3. Cuando se te pida, introduce la combinación de botones mostrada para instalar boot9strap
    - Si algún paso en la pantalla inferior tiene el texto en color rojo y no se te pide que introduzcas una combinación de botones, [sigue la guía de Resolución de Problemas](troubleshooting#issues-with-safeb9sinstaller)

<!--@include: ./_include/configure-luma3ds.md -->

___

::: tip

Continúa a [Finalizar instalación](finalizing-setup)

:::
