# Region Changing

## Lectura requerida

This is an add-on section for region changing your console. This is done by installing the 11.15.0 CTRTransfer image for the region you want to switch to. After installing the image, you can update your console normally to the latest firmware (11.17.0).

Note that region changing is almost completely unnecessary since Luma3DS supports out-of-region games and individual title [Locale Emulation](https://github.com/LumaTeam/Luma3DS/wiki/Optional-features). Additionally, running NDS games with alternative out-of-region languages is supported by [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases). You should only perform a region change if you wish to have your system UI is in a language that is not available on your console's current region.

::: info

Esta página asume que ya están instalados Luma3DS y boot9strap. Si has seguido la guía hasta el final (Finalizar instalación), ya tienes Luma3DS y boot9strap.

:::

::: warning

Como parte de este proceso, los ajustes de Configración de la consola se restablecerán a sus valores por defecto. Esto incluye cosas como tu nombre de usuario, país e idioma. **Los juegos instalados y sus datos de guardado no se verán afectados.**

:::

::: danger

If you change the region of your console:

- You will not be able to use your NNID (if you have one). NNIDs are locked to the region that they were created in.
- You may not be able to access the eShop, even if you [delete your eShop account](https://en-americas-support.nintendo.com/app/answers/detail/a_id/74/~/how-to-delete-a-nintendo-eshop-account) beforehand. This is because certain titles tend to remain linked to the 3DS, even after account deletion (especially on New 3DS).
    - This is still relevant because, while purchases can no longer be made on eShop, game updates are still being provided. Updates may provide extra content or fix bugs.
    - This logic extends to system transfers, meaning you would not be able to perform a system transfer from a USA 3DS to a region-changed JPN-to-USA 3DS.
    - Pokémon Bank also requires working eShop access.
    - That being said, system transfer and game updates are region locked anyway (e.g. Japanese eShop only has Japanese game updates).
- **You will not be able to uninstall custom firmware without bricking the console!** If you intend to uninstall custom firmware in the future, you **MUST** restore your NAND backup that was created before the region change.

:::

## Lo que necesitas

- - La última versión de [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (el archivo GodMode `.zip`)
- La última versión de [FBI](https://github.com/nh-server/FBI-NH/releases/download/2.6.1/FBI.3dsx) (descarga directa)
- - La última versión de [faketik](https://github.com/ihaveamac/faketik/releases/latest) _(el archivo `.3dsx`)_
- La última versión de [ctrtransfer.gm9](https://raw.githubusercontent.com/nh-server/scripts/refs/heads/main/3DS/ctrtransfer.gm9) (haz clic derecho y elige "guardar enlace como...")
- The 11.15.0 CTRTransfer image for your console type of the region that you want to change to (e.g. Download "New 3DS or 2DS - USA" if you have a New 3DS and want to change your region to USA)
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

Your 3DS has successfully been region changed!

:::
