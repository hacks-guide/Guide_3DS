---
title: "Usos de GodMode9"
---

{% include toc title="Tabla de contenidos" %}

For information on dumping cartridge or SD card content, see [Dumping Titles and Game Cartridges](dumping-titles-and-game-cartridges).
{: .notice--info}

Para ayuda (en inglés) con GodMode9, así como ayuda con la creación de scripts y obtener actualizaciones e información, entra al [Discord de GodMode9](https://discord.gg/BRcbvtFxX4).
{: .notice--primary}

### Lectura requerida

GodMode9 es un explorador de archivos con acceso completo para la consola 3DS de Nintendo, dando acceso a la tarjeta SD, las particiones FAT dentro de tu SysNAND y EmuNAND, y básicamente a cualquier otra cosa. Entre otras funciones, te permite copiar, eliminar, renombrar archivos y crear carpetas.

Ten en cuenta que si tienes archivos de payloads distintos de `GodMode9.firm` en la carpeta `/luma/payloads/` en tu tarjeta SD, al mantener (Start) al inicio se desplegará un "chainloader menu" donde tendrás que usar el D-Pad y pulsar (A) para seleccionar "GodMode9", para esas instrucciones.

GodMode9 es una potente herramienta que tiene la capacidad de modificar básicamente todo en tu consola. Aunque muchas de estas modificaciones están restringidas por un sistema de permisos y es imposible realizar acciones peligrosas de forma accidental sin activar los permisos deliberadamente, debes seguir cuidadosamente las instrucciones y mantener copias de seguridad por cualquier cosa.

## Actualizar GodMode9

Algunas de las siguientes instrucciones sólo son aplicables a la última versión de GodMode9, y como tal debes seguir esta sección para actualizar tu instalación antes de continuar. Sobrescribe cualquier archivo que te indique.
{: .notice--info}

### Qué necesitas

* The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Instrucciones

1. Apaga tu consola
1. Inserta tu tarjeta SD en tu computadora
1. Copia el archivo `GodMode9.firm` desde el `.zip` de GodMode9 a la carpeta `/luma/payloads/` en tu tarjeta SD
1. Copia la carpeta `gm9`contenida en el `.zip`de GodMode9 al directorio raíz de tu tarjeta SD
1. Reinsert your SD card into your console

GodMode9 is now up to date.
{: .notice--success}

## Crear una copia de seguridad de la NAND

1. Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
{% include_relative include/nand-backup.txt %}

Your NAND backup has been successfully created.
{: .notice--success}

## Restaurar una copia de seguridad de la NAND

1. Apaga tu consola
1. Inserta tu tarjeta SD en tu computadora
1. Copy `<date>_<serialnumber>_sysnand_##.bin` from your computer to the `/gm9/out/` folder on your SD card
1. Reinsert your SD card into your console
1. Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
1. Presiona el botón (Home) para abrir el menú de acción
1. Selecciona "Scripts..."
1. Selecciona "GM9Megascript"
1. Selecciona "Restore Options"
1. Selecciona "SysNAND Restore (safe)"
1. Selecciona tu copia de seguridad de NAND
1. Presiona (A) para desbloquear la escritura de SysNAND (lvl3) y después introduce la combinación de teclas mostrada
    + This will **not** overwrite your boot9strap installation
    + Este proceso tomará un tiempo
1. Presiona (A) para continuar
1. Presiona (B) para volver al menú principal
1. Selecciona "Exit"
1. Presiona (A) para volver a bloquear los permisos de escritura si se solicita

Your NAND backup has been successfully restored. You can now delete `<date>_<serialnumber>_sysnand_###.bin` from your SD card.
{: .notice--success}

## Inyectar cualquier aplicación .CIA en Salud y Seguridad

Ten en cuenta que no es posible inyectar archivos en Salud y Seguridad que sean más grandes que esta aplicación (incluyendo juegos y otras aplicaciones de gran tamaño)
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
1. Ve a `[0:] SDCARD` -> `cias`
1. Press (A) on your `.cia` to select it
1. Select "CIA image options..."
1. Select "Mount image to drive"
1. Press (A) on the `.app` file
1. Select "NCCH image options"
1. Select "Inject to H&S"
1. Presiona (A) para desbloquear la escritura de la SysNAND (lvl1) y después ingresa la combinación de teclas mostrada
1. Presiona (A) para continuar
1. Presiona (A) para volver a bloquear los permisos de escritura si se solicita

Your desired application has now been injected into Health & Safety.
{: .notice--success}

## Restaurar Salud y Seguridad luego de inyectar una aplicación .CIA

Esto sólo funcionará si la inyección sobre Salud y Seguridad fue realizada con GodMode9 (no con Decrypt9 u Hourglass9).
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
1. Presiona el botón (Home) para abrir el menú de acción
1. Selecciona "Mas..."
1. Selecciona "Restore H&S"
1. Presiona (A) para desbloquear la escritura de la SysNAND (lvl1) y después ingresa la combinación de teclas mostrada
1. Presiona (A) para volver a bloquear los permisos de escritura si se solicita

Health & Safety has been reverted to normal.
{: .notice--success}

## Formatear una tarjeta SD

**¡Ten en cuenta que esto eliminará el contenido de tu tarjeta SD!**
{: .notice--danger}

1. Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
1. Press (Right Shoulder) + (B) to unmount the current SD card and insert the one you want to format
    + If GodMode9 shows an initialization error when inserting the SD Card to be formatted, it can safely be dismissed
{% include_relative include/format-sd-gm9.txt %}

Your SD card has successfully been formatted for use with the console.
{: .notice--success}

## Removing an NNID without formatting your console

This process will only log you out of your NNID. You will still not be able to use the NNID on another console, as the NNID remains linked to the console.
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
1. Presiona el botón (Home) para abrir el menú de acción
1. Selecciona "Scripts..."
1. Selecciona "GM9Megascript"
1. Selecciona "Scripts from Plailect's Guide"
1. Selecciona "Remove NNID"
1. Presiona (A) para continuar
1. Presiona (A) para desbloquear la escritura de la SysNAND (lvl1) y después ingresa la combinación de teclas mostrada
1. Presiona (A) para continuar
1. Presiona (B) para volver al menú principal
1. Selecciona "Exit"
1. Presiona (A) para volver a bloquear los permisos de escritura si se solicita
1. Presiona (Start) para reiniciar tu consola

You have now been logged out of your NNID.
{: .notice--success}
