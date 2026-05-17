# Restaurar / Actualizar CFW

## Lectura requerida

This page prepares consoles with an existing modern boot9strap installation for reinstallation and/or updating of custom firmware applications. It can also be used in the event of a lost or corrupted SD card.

Your SD card must be formatted as FAT32 to follow this guide, or else the 3DS will be unable to recognize it. If your SD card is not yet properly formatted, use one of these pages to format it, depending on your operating system: [Windows](formatting-sd-(windows)), [Mac](formatting-sd-(mac)), [Linux](formatting-sd-(linux)).

## Lo que necesitas

- La última versión de [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (el archivo `.zip` de Luma3DS)

## Instrucciones

1. Inserta la tarjeta SD en tu computadora
2. Copia todo lo que está dentro del `.zip` de Luma3DS (`boot.firm`, `boot.3dsx` y `config`) a la raíz de tu tarjeta SD. Si alguno de los archivos ya existe, sobreescríbelos con los nuevos.
   - La raíz de la tarjeta SD se refiere al primer directorio de la tarjeta, donde puedes ver la carpeta Nintendo 3DS pero no estás dentro de ella
3. Reinserta la tarjeta SD en la consola
4. Enciende tu consola
   - Si ves el menú de configuración de Luma3DS, presiona (Start) para guardar y reiniciar

::: info

![](/images/screenshots/restoringcfw-root-layout.png)

:::

::: info

La última versión de Luma3DS ha sido instalada en tu tarjeta SD y en la memoria interna.

:::

::: tip

Continúa a [Finalizar instalación](finalizing-setup) para instalar o actualizar programas homebrew (como FBI o Homebrew Launcher).

:::
