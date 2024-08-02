---
title: "A9LH a B9S"
---

{% include toc title="Tabla de contenidos" %}

### Lectura requerida

This page is for existing arm9loaderhax users to update their consoles to boot9strap.

Todas las versiones futuras de Luma3DS serán sólo en formato `.firm`, el cual será únicamente compatible con boot9strap y sighax. Esto significa que para continuar recibiendo las últimas actualizaciones de Luma3DS, deberás utilizar esta página para continuar con tu instalación.

Para extraer los archivos `.7z` enlazados esta página, necesitarás un gestor de archivos como [7-Zip](http://www.7-zip.org/) o [The Unarchiver](https://theunarchiver.com/).

### Qué necesitas

To use the [magnet](https://wikipedia.org/wiki/Magnet_URI_scheme) links on this page, you will need a torrent client like [qBittorrent](https://www.qbittorrent.org/download.php) or [Deluge](http://dev.deluge-torrent.org/wiki/Download).
{: .notice--warning}

Ten en cuenta que sólo en la New 3DS, `secret_sector.bin` es requerido para revertir el exploit de arm9loaderhax, y por ello no se necesita para la instalación de boot9strap en una consola sin modificar. Si no tienes una New 3DS, no necesitas el `secret_sector.bin`.
{: .notice--info}

* <i class="fa fa-magnet" aria-hidden="true" title="Este es un enlace magnético. Use a torrent client to download the file."></i> - **New 3DS Users Only:** [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) (magnet link)
* The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
* The v7.0.5 release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/download/v7.0.5/Luma3DSv7.0.5.zip) (direct download)
* The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
* The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)

### Instrucciones

#### Sección I - Preparativos

Para todos los pasos en esta sección, sobreescribe cualquier archivo repetido en tu tarjeta SD.
{: .notice--info}

1. Apaga tu consola
1. Inserta tu tarjeta SD en tu computadora
1. Copy `boot.firm` and `boot.3dsx` from the latest version Luma3DS `.zip` to the root of your SD card
    + La raíz de tu tarjeta SD se refiere al primer directorio de la tarjeta, donde puedes ver la carpeta Nintendo 3DS pero no estás dentro de ella
1. Copia `arm9loaderhax.bin` desde el `.7z` de Luma3DS v7.0.5 a la raíz de tu tarjeta SD
1. Copia `SafeB9SInstaller.bin` desde el `.zip` de SafeB9SInstaller a la carpeta`/luma/payloads/` en tu tarjeta SD
    + Si las carpetas `luma` o `payloads` no existen, créalas apropiadamente
    + Elimina cualquier otro payload `.bin` (`GodMode9.bin`, `Decrypt9WIP.bin`, `Hourglass9.bin`, etc.) existente en la carpeta `/luma/payloads/` en tu tarjeta SD ya que no serán compatibles con versiones de Luma3DS que funcionan en boot9strap
1. Crea una carpeta llamada `boot9strap` en la raíz de tu tarjeta SD
1. Copia `boot9strap.firm` y `boot9strap.firm.sha` desde el `.zip` de `boot9strap` a la carpeta `/boot9strap/` en tu tarjeta SD
1. **Sólo para usuarios de New 3DS:** Copia `secret_sector.bin` a la carpeta `/boot9strap/`en tu tarjeta SD

    ![]({{ "/images/screenshots/a9lh-to-b9s-root-layout.png" | absolute_url }})
    {: .notice--info}

1. Reinsert your SD card into your console

#### Sección II - Instalar boot9strap

1. Boot your console while holding (Start) to launch SafeB9SInstaller
    + If you see the luma configuration screen instead of SafeB9SInstaller, simply press (Start), then shut down your 3DS and try again
    + If this gives you an error, try either using a new SD card or formatting your current SD card (backup existing files first)
1. Espera a que todas las verificaciones de seguridad se completen
    + Si tienes el error "OTP Crypto Fail", descarga <i class="fa fa-magnet" aria-hidden="true" title="Esto es un enlace magnético. Use a torrent client to download the file."></i> - [aeskeydb.bin](magnet:?xt=urn:btih:d25dab06a7e127922d70ddaa4fe896709dc99a1e&dn=aeskeydb.bin&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce), then put it in the `/boot9strap/` folder on your SD card and try again
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt inline="true" -%}
1. Your console should have rebooted into the Luma3DS configuration menu
    + Luma3DS configuration menu are settings for the Luma3DS custom firmware. Many of these settings may be useful for customization or debugging
    + For the purpose of this guide, these settings will be left on default settings
    + If you get a black screen, [follow this troubleshooting guide](troubleshooting#boot-issues-on-consoles-with-custom-firmware)
1. Presiona (Start) para guardar y reiniciar

___

### Continúa en [Finalizar instalación](finalizing-setup)
{: .notice--primary}
