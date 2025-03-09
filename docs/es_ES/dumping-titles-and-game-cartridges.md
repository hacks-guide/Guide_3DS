# Volcado de Software Digital y Cartuchos de Juegos

::: info

Para ayuda (en inglés) con GodMode9, así como ayuda con la creación de scripts y obtener actualizaciones e información, únete al [Discord de GodMode9](https://discord.gg/BRcbvtFxX4).

:::

## Lectura requerida

Aparte de crear y restaurar copias de seguridad de la NAND, GodMode9 tiene la funcionalidad de volcar el software instalado en la consola a un archivo de instalación `.cia`, volcar el juego de un cartucho a un archivo `.3ds`, y también directamente instalar el juego de un cartucho en la consola.

## Actualizar GodMode9

::: info

Estas instrucciones están escritas para ser usadas con GodMode9 v2.0.0 o superior. Si tienes una versión anterior de GodMode9, sigue estas instrucciones para actualizarlo.

:::

### Lo que necesitas

- - La última versión de [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (el archivo GodMode `.zip`)

### Instrucciones

1. Apaga la consola
2. Inserta la tarjeta SD en tu computadora
3. Copia `Godmode9.firm` desde Godmode9 `.zip` a la carpeta `/luma/payloads/` en la tarjeta SD
4. Copia la carpeta `gm9` de GodMode9 `.zip` a la raíz de la tarjeta SD
5. Reinserta la tarjeta SD en la consola

## Volcar un Cartucho de Juego

::: info

Inserta en la consola el cartucho de juego que deseas volcar

- Los cartuchos de 3DS se volcarán en formato `.3ds`
- Los cartuchos de Nintendo DS se volcarán en formato `.nds`

:::

1. Presiona y mantén (Start), luego enciende la consola mientras lo mantienes. Esto abrirá GodMode9
2. Ve a `[C:] GAMECART`
3. Sigue los pasos correspondientes a tu tipo de cartucho:
    - **Cartucho de 3DS:** Presiona (A) sobre `[TitleID].trim.3ds` para seleccionarlo
    - **Cartucho de DS:** Presiona (A) sobre `[TitleID].nds` para seleccionarlo
        - Las copias recortadas ("trimmed" en inglés) no son recomendadas para los juegos de DS ya que pueden causar problemas al usarlas
4. Seleciona "Copy to 0:/gm9/out"
5. Tu archivo `.3ds` o `.nds` _no instalable_ será guardado en la carpeta `/gm9/out/` de la tarjeta SD

## Instalar un Cartucho a la Consola Directamente

::: info

Esto sólo funciona para juegos de 3DS; no es posible instalar un cartucho de DS como software de 3DS.

:::

1. Presiona y mantén (Start), luego enciende la consola mientras lo mantienes. Esto abrirá GodMode9
2. Ve a `[C:] GAMECART`
3. Presiona el botón (A) sobre `[TitleID].trim.3ds` para seleccionarlo, luego selecciona "NCSD image options..." y luego "Install game image"
4. Presiona (A) para desbloquear la escritura de SysNAND (lvl1) y luego introduce la combinación de botones mostrada
5. Una vez que el proceso haya sido completado, el juego aparecerá en el Menú HOME como un ícono.

## Volcar un Cartucho de 3DS a .CIA

::: info

Esto sólo debiera seguirse si [Instalar un Cartucho a la Consola Directamente](#installing-a-game-cartridge-directly-to-the-system) no funciona.

:::

1. Presiona y mantén (Start), luego enciende la consola mientras lo mantienes. Esto abrirá GodMode9
2. Ve a `[C:] GAMECART`
3. Presiona el botón (A) sobre `[TitleID].trim.3ds` para seleccionarlo, luego selecciona "NCSD image options..." y luego "Build CIA from file"
4. Tu archivo instalable en formato `.cia` será guardado en la carpeta `/gm9/out/` de la tarjeta SD

## Volcar un Software Instalado

::: info

Esto permite volcar tanto software del sistema como juegos/software digitales instalados desde la eShop.

:::

1. Presiona y mantén (Start), luego enciende la consola mientras lo mantienes. Esto abrirá GodMode9
2. Presiona el botón (HOME) para abrir el menú de acciones
3. Selecciona "Title manager"
4. Selecciona una de las siguientes opciones, dependiendo del tipo de software que desees volcar
    - **Título instalado por el usuario**: `[A:] SD CARD`
    - **Software del Sistema / DSiWare**: `[1:] NAND / TWL`
5. Selecciona el título que quieras volcar
6. Selecciona "Manage Title..."
7. Selecciona "Build CIA (standard)"
8. Tu archivo instalable en formato `.cia` será guardado en la carpeta `/gm9/out/` de la tarjeta SD

## Respaldar datos de guardado de la Consola Virtual de GBA

::: info

El juego será almacenado en la carpeta `/gm9/out/` de la tarjeta SD con el nombre `<TitleID>.gbavc.sav`.

:::

::: info

Para identificar el "ID de Título" de un archivo `<TitleID>.gbavc.sav`, puedes revisar una lista de todos los juegos en la consola y sus IDs correspondientes presionando (HOME) para mostrar el menú de acciones, seleccionando `Title manager` y luego `[A:] SD CARD`.

:::

1. Haz lo siguiente por cada juego de Consola Virtual de GBA del cual quieras respaldar sus datos de guardado:
    - Inicia el juego de Consola Virtual de GBA
    - Sal del juego de Consola Virtual de GBA
    - Apaga la consola
    - Presiona y mantén (Start), luego enciende la consola mientras lo mantienes. Esto abrirá GodMode9
    - Ve a `[S:] SYSNAND VIRTUAL`
    - Presiona (A) sobre `agbsave.bin` para seleccionarlo
    - Selecciona "AGBSAVE options..."
    - Selecciona "Dump GBA VC save"
    - Presiona (A) para continuar
    - Presiona (Start) para reiniciar tu consola

## Restaurar datos de guardado de la Consola Virtual de GBA

::: info

Para identificar el "ID de Título" de un archivo `<TitleID>.gbavc.sav`, puedes revisar una lista de todos los juegos en la consola y sus IDs correspondientes presionando (HOME) para mostrar el menú de acciones, seleccionando `Title manager` y luego `[A:] SD CARD`.

:::

1. Haz lo siguiente por cada juego de Consola Virtual de GBA del cual quieras restaurar sus datos de guardado:
    - Inicia el juego de Consola Virtual de GBA
    - Sal del juego de Consola Virtual de GBA
    - Apaga la consola
    - Presiona y mantén (Start), luego enciende la consola mientras lo mantienes. Esto abrirá GodMode9
    - Ve a `[0:] SDCARD` -> `gm9` -> `out`
    - Presiona (Y) sobre el archivo `<TitleID>.gbavc.sav` que deseas restaurar para copiarlo
    - Presiona (B) para regresar al menú principal
    - Ve a `[S:] SYSNAND VIRTUAL`
    - Presiona (A) sobre `agbsave.bin` para seleccionarlo
    - Selecciona "AGBSAVE options..."
    - Selecciona "Inject GBA VC save"
    - Presiona (A) para continuar
    - Presiona (Start) para reiniciar tu consola
    - Inicia el juego de Consola Virtual de GBA
    - Sal del juego de Consola Virtual de GBA

## Encriptar/desencriptar un archivo .CIA

::: info

Para mantener orden, copia cada archivo `.cia` que quieras encriptar/desencriptar a la carpeta `/cias/` en la tarjeta SD

:::

1. Presiona y mantén (Start), luego enciende la consola mientras lo mantienes. Esto abrirá GodMode9
2. Ve a `[0:] SDCARD` -> `cias`
3. Presiona (A) sobre el archivo `.cia` para seleccionarlo, luego selecciona "CIA image options..."
4. Selecciona la opción para realizar la función deseada:
    - **Encrypt to 0:/gm9/out:** Crea una copia encriptada del archivo `.cia` seleccionado en la carpeta `/gm9/out/` de la tarjeta SD
    - **Decrypt to 0:/gm9/out:** Crea una copia desencriptada del archivo `.cia` seleccionado en la carpeta `/gm9/out/` de la tarjeta SD
    - **Encrypt inplace:** Reemplaza el archivo `.cia` seleccionado con uno encriptado
    - **Decrypt inplace:** Reemplaza el archivo `.cia` seleccionado con uno desencriptado
5. Tu `.cia` encriptado/desencriptado será guardado en la ubicación seleccionada
