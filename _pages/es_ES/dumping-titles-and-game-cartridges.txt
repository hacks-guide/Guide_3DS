---
title: "Volcar Títulos y Cartuchos de Juegos"
---

{% include toc title="Tabla de contenidos" %}

Para ayuda (en inglés) con GodMode9, así como ayuda con la creación de scripts y obtener actualizaciones e información, únete al [Discord de Soporte de GodMode9](https://discord.gg/BRcbvtFxX4).
{: .notice--primary}

### Lectura requerida

Además de crear y restaurar copias de seguridad de la NAND, GodMode9 tiene la funcionalidad de extraer los juegos instalados en la consola a un archivo de instalación `.cia`, volcar el juego de un cartucho a un archivo `.3ds`, y también directamente instalar el juego de un cartucho en la consola.

## Actualizar GodMode9

Estas instrucciones están escritas para ser usadas con GodMode9 v2.0.0 o superior. Si tienes una versión anterior de GodMode9, sigue estas instrucciones para actualizarlo.
{: .notice--info}

### Qué necesitas

* The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Instrucciones

1. Apaga tu consola
1. Inserta tu tarjeta SD en tu computadora
1. Copia el archivo `GodMode9.firm` desde el `.zip` de GodMode9 a la carpeta `/luma/payloads/` en tu tarjeta SD
1. Copia la carpeta `gm9`contenida en el `.zip`de GodMode9 al directorio raíz de tu tarjeta SD
1. Reinsert your SD card into your console

## Volcar un cartucho de juego

{% capture notice %}
Insert the game cartridge you intend to dump into your console
+ Los cartuchos de 3DS serán extraídos en formato `.3ds`
+ Los cartuchos de DS serán extraídos en formato `.nds`
{% endcapture %}

<div class="notice--info">{{ notice | markdownify }}</div>

1. Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
1. Ve a `[C:] GAMECART`
1. Sigue los pasos según tu tipo de cartucho:
    + **Cartucho de juego de 3DS:** Presiona (A) sobre `[TitleID].trim.3ds` para seleccionarlo
    +**Cartucho de juego NDS** Presiona (A) sobre `[TitleID].nds` para seleccionarlo
        + Trimmed dumps are not recommended for NDS games in general, as they can cause various playback issues
1. Selecciona "Copy to 0:/gm9/out"
1. Tu archivo `.3ds` o `.nds` *no instalable* será guardado en la carpeta `/gm9/out/` de tu tarjeta SD

## Instalar un cartucho de juego directamente a la consola

Esto solo funciona para juegos de 3DS; no es posible instalar un cartucho de DS como software de 3DS.
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
1. Ve a `[C:] GAMECART`
1. Presiona el botón (A) sobre `[TitleID].trim.3ds` para seleccionarlo, luego selecciona `NCSD image options...`, y luego `Install game image`
1. Presiona (A) para desbloquear la escritura de la SysNAND (lvl1) y después ingresa la combinación de teclas mostrada
1. Una vez el proceso haya sido completado, tu juego aparecerá en el Menú HOME como un ícono.

## Volcar un Cartucho de juego de 3DS a un Archivo .CIA

Esto sólo debiera seguirse si [Instalar un cartucho de juego directamente a la consola](#installing-a-game-cartridge-directly-to-the-system) no funciona.
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
1. Ve a `[C:] GAMECART`
1. Presiona el botón (A) sobre `[TitleID].trim.3ds` para seleccionarlo, luego selecciona `NCSD image options...`, y luego ` Build CIA from file`
1. Tu archivo instalable en formato `.cia` será guardado en la carpeta `/gm9/out/` de tu tarjeta SD

## Volcar un Título Instalado

Esto permite la extracción de tanto software del Sistema como juegos/software digitales instalados por el usuario, como aquellos descargados de la eShop.
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
1. Presiona el botón (Home) para abrir el menú de acción
1. Selecciona "Title manager"
1. Selecciona una de las siguientes opciones, dependiendo del tipo de título que desees extraer
    + **Título instalado por el usuario**: `[A:] SD CARD`
    + **Título del Sistema / DSiWare**: `[1:] NAND / TWL`
1. Selecciona el título que quieras extraer
1. Selecciona "Manage Title..."
1. Selecciona "Build CIA (standard)"
1. Tu archivo instalable en formato `.cia` será guardado en la carpeta `/gm9/out/` de tu tarjeta SD

## Respaldar datos de guardado de la Consola Virtual de GBA

El juego será almacenado en la carpeta `/gm9/out/` de tu tarjeta SD con el nombre `<TitleID>.gbavc.sav`.
{: .notice--info}

Para identificar el Title ID de un archivo `<TitleID>.gbavc.sav`, puedes revisar una lista de todos los juegos en la consola y sus Title IDs correspondientes presionando (Home) para mostrar el menú de acciones, seleccionando `Title manager` y luego `[A:] SD CARD`.
{: .notice--info}

1. Do the following process for each GBA VC game that you want to back up the save for:
    + Inicia el juego de Consola Virtual de GBA
    + Sal del juego de Consola Virtual de GBA
    + Power off your console
    + Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
    + Ve a `[S:] SYSNAND VIRTUAL`
    + Presiona (A) en `agbsave.bin` para seleccionarlo
    + Selecciona "AGBSAVE options..."
    + Selecciona "Dump GBA VC save"
    + Presiona (A) para continuar
    + Press (Start) to reboot your console

## Restaurar datos de guardado de la Consola Virtual de GBA

Para identificar el Title ID de un archivo `<TitleID>.gbavc.sav`, puedes revisar una lista de todos los juegos en la consola y sus Title IDs correspondientes presionando (Home) para mostrar el menú de acciones, seleccionando `Title manager` y luego `[A:] SD CARD`.
{: .notice--info}

1. Haz lo siguiente por cada juego de Consola Virtual de GBA del cual quieras restaurar sus datos de guardado:
    + Inicia el juego de Consola Virtual de GBA
    + Sal del juego de Consola Virtual de GBA
    + Power off your console
    + Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
    + Navigate to `[0:] SDCARD` -> `gm9` -> `out`
    + Presiona (Y) en el archivo `<TitleID>.gbavc.sav` que deseas restaurar para copiarlo
    + Presiona (B) para regresar al menú principal
    + Ve a `[S:] SYSNAND VIRTUAL`
    + Presiona (A) en `agbsave.bin` para seleccionarlo
    + Selecciona "AGBSAVE options..."
    + Selecciona "Inject GBA VC save"
    + Presiona (A) para continuar
    + Press (Start) to reboot your console
    + Inicia el juego de Consola Virtual de GBA
    + Sal del juego de Consola Virtual de GBA

## Encriptar/desencriptar un archivo .CIA

Para mantener orden, copia cada `.cia` que quieras encriptar/desencriptar a la carpeta `/cias/` en tu tarjeta SD
{: .notice--info}

1. Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
1. Ve a `[0:] SDCARD` -> `cias`
1. Presona (A) sobre el archivo `.cia` para seleccionarlo, luego selecciona "CIA image options..."
1. Selecciona la opción para realizar la función deseada:
    + **Encrypt to 0:/gm9/out:** Crea una copia encriptada del archivo `.cia` seleccionado en la carpeta `/gm9/out/` de tu tarjeta SD
    + **Decrypt to 0:/gm9/out:** Crea una copia desencriptada del archivo `.cia` seleccionado en la carpeta `/gm9/out/` de tu tarjeta SD
    + **Encrypt inplace:** Reemplaza el archivo `.cia` seleccionado con uno encriptado
    + **Decrypt inplace:** Reemplaza el archivo `.cia` seleccionado con uno desencriptado
1. Tu `.cia` encriptado/desencriptado será guardado en la ubicación seleccionada
