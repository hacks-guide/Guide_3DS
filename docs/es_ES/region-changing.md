# Cambiar de Región

## Lectura requerida

Esta es una sección adicional para cambiar de región tu consola. Esto se hace instalando la imagen de CTRTransfer 11.15.0 para la región a la que quieras cambiar. Después de instalar la imagen, puedes actualizar tu consola de forma normal al firmware más reciente (11.17.0).

Ten en cuenta que cambiar de región es casi totalmente innecesario, ya que Luma3DS soporta juegos de distinta región y [emulación de configuración regional](https://github.com/LumaTeam/Luma3DS/wiki/Optional-features) por juego. Adicionalmente, ejecutar juegos de NDS con idiomas alternativos de otras región es soportado por [TWiLightMenu++](https://github.com/DS-Homebrew/TWiLightMenu/releases). Solo deberías cambiar de región si quieres tener la interfaz del sistema en un idioma no disponible en tu región actual.

::: info

Esta página asume que ya están instalados Luma3DS y boot9strap. Si has seguido la guía hasta el final (Finalizar instalación), ya tienes Luma3DS y boot9strap.

:::

::: warning

Como parte de este proceso, los ajustes de Configración de la consola se restablecerán a sus valores por defecto. Esto incluye cosas como tu nombre de usuario, país e idioma. **Los juegos instalados y sus datos de guardado no serán afectados.**

:::

::: danger

Si cambias la región de tu consola:

- No podrás usar tu NNID actual (si tienes uno). Los NNID están bloqueados a la región en la que fueron creados.
- Es posible que no puedas acceder al eShop, incluso si [eliminas tu cuenta Nintendo eShop](https://es-americas-support.nintendo.com/app/answers/detail/a_id/23294/~/c%C3%B3mo-eliminar-una-cuenta-nintendo-eshop) de antemano. Esto se debe a que ciertos títulos tienden a permanecer vinculados a la 3DS, incluso después de la eliminación de la cuenta (especialmente en la New 3DS).
    - Esto sigue siendo importante, pues a pesar de no poder ya hacer compras en la eShop, esta todavía proporciona actualizaciones para los juegos. Las actualizaciones puede que incluyan contenido extra o arreglen errores.
    - Esta lógica también se aplica a las transferencias del sistema, por lo que no podrías hacer una transferencia de sistema desde una 3DS con región USA a una 3DS cuya región fue cambiada de JPN a USA.
    - El Banco de Pokémon también requiere acceso funcional a la eShop.
    - Dicho esto, las actualizaciones de juegos y las transferencias del sistema están bloqueadas por región de todas formas (por ejemplo, la eShop japonesa solo tiene actualizaciones de juegos japoneses).
- - **¡No podrás desinstalar el CFW sin brickear la consola!** Si pretendes desinstalar el CFW más adelante, **DEBES** restaurar la copia de seguridad de la NAND creada antes del cambio de región.

:::

## Lo que necesitas

- La última versión de [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (el archivo GodMode `.zip`)
- La última versión de [FBI](https://github.com/nh-server/FBI-NH/releases/download/2.6.1/FBI.3dsx) (descarga directa)
- La última versión de [faketik](https://github.com/ihaveamac/faketik/releases/latest) _(el archivo `.3dsx`)_
- La última versión de [ctrtransfer.gm9](https://raw.githubusercontent.com/nh-server/scripts/refs/heads/main/3DS/ctrtransfer.gm9) (clic derecho, guardar enlace como)
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

### Sección V - Reinstalación de Tickets

<!--@include: ./_include/ctrtransfer-ticket-copy.md -->

### Sección VI - Arreglar problemas relacionados con la configuración regional

<!--@include: ./_include/ctrnand-datayeet.md -->

___

::: tip

¡La región de tu 3DS ha sido modificada exitosamente!

:::
