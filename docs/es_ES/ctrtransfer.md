# CTRTransfer

## Lectura requerida

Esta es una sección adicional para instalar una imagen CTRTransfer 11.15.0 en la consola.

::: info

Esta página asume que ya están instalados Luma3DS y boot9strap. Si has seguido la guía hasta el final (Finalizar instalación), ya tienes Luma3DS y boot9strap.

:::

::: warning

Como parte de este proceso, los ajustes de Configración de la consola se restablecerán a sus valores por defecto. Esto incluye cosas como tu nombre de usuario, país e idioma. **Los juegos instalados y sus datos de guardado no se verán afectados.**

:::

## Lo que necesitas

- - La última versión de [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (el archivo GodMode `.zip`)
- La última versión de [FBI](https://github.com/nh-server/FBI-NH/releases/download/2.6.1/FBI.3dsx) (descarga directa)
- - La última versión de [faketik](https://github.com/ihaveamac/faketik/releases/latest) _(el archivo `.3dsx`)_
- La última versión de [ctrtransfer.gm9](https://raw.githubusercontent.com/nh-server/scripts/refs/heads/main/3DS/ctrtransfer.gm9) (haz clic derecho y elige "guardar enlace como...")
- The 11.15.0 CTRTransfer image for your console and region

    ::: warning

    Necesitas usar un cliente torrent para descargar las imágenes CTRTransfer, tales como [qBitTorrent](https://www.qbittorrent.org/download) o [Deluge](https://deluge-torrent.org/download/).

    :::

<!--@include: ./_include/ctrtransfer-images.md -->

## Instrucciones

### Sección I - Preparativos

<!--@include: ./_include/ctrtransfer-prep.md -->

### Sección II - Copia de seguridad de la NAND

1. Presiona y mantén (Start), luego enciende la consola mientras lo mantienes. Esto abrirá GodMode9

<!--@include: ./_include/nand-backup.md -->

### Sección III - CTRTransfer

<!--@include: ./_include/ctrtransfer-main.md -->

### Sección IV - Iniciar FBI

<!--@include: ./_include/launch-hbl-dlp.md -->

### Sección V - Reinstalación de tickets

<!--@include: ./_include/ctrtransfer-ticket-copy.md -->

### Sección VI - Arreglar problemas relacionados con la configuración regional

<!--@include: ./_include/ctrnand-datayeet.md -->

___

::: tip

Continúa a [Finalizar instalación](finalizing-setup)

:::
