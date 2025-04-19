# Instalar boot9strap (MSET9 Play Store)

:::details Detalles técnicos (opcional)

[MSET9](https://github.com/zoogie/MSET9) es un exploit para el programa «Configuración de la consola» desarrollado por [zoogie](https://github.com/zoogie). Utiliza una falla donde la ID1 (la segunda carpeta de 32 caracteres dentro de la carpeta Nintendo 3DS, dentro de la ID0) puede tener _cualquier_ nombre siempre que sean 32 caracteres. Performing a specific sequence of actions results in the console executing the instructions that are encoded into the ID1 folder name, which can be used to grant full control over the console.

:::

## Notas de compatibilidad

::: warning

This page requires an Android phone/tablet or a Chromebook. Si tienes una computadora con Windows, macOS o Linux, sigue [Instalar boot9strap (MSET9 CLI)](installing-boot9strap-\(mset9-cli\)). Si no tienes acceso a ninguno de estos dispositivos, deberás utilizar un [exploit alternativo](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits).

:::

::: warning

On Android phones/tablets, the minimum Android version required is 6.0 (Marshmallow).

:::

## Lo que necesitas

- La última versión de [MSET9](https://github.com/hacks-guide/MSET9/releases/latest) (El archivo MSET9 `.zip`)
- Las siguientes aplicaciones instaladas desde Google Play Store:
    - [MSET9 Installer](https://play.google.com/store/apps/details?id=moe.saru.homebrew.console3ds.mset9_installer_android)
    - [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver)
    - Si quieres, puedes descargar estas aplicaciones desde otros lugares

## Instrucciones

### Sección I - Preparativos

In this section, you will prepare the MSET9 exploit by **temporarily** creating a new HOME Menu profile with almost no user data, and then setting up that profile with only the minimum data required for MSET9 to trigger. Tus datos de usuario existentes desaparecerán, pero volverán cuando finalices con esta página.

1. Insert your SD card into your phone/tablet/computer

2. Copia todo el contenido dentro del `.zip` de MSET9 en la raíz de la tarjeta SD, sobreescribiendo cualquier archivo existente:

    - Abre ZArchiver
    - Si se te pide, [concédele el permiso para acceder a archivos en tu tarjeta SD a ZArchiver](/images/screenshots/mset9/zarchiver-allow.png)
    - Navigate to where the downloaded MSET9 `.zip` is located ([likely in the Downloads folder](/images/screenshots/mset9/zarchiver-zip-location.png))
    - Select the MSET9 `.zip`, then select "Extract..." ([imagen](/images/screenshots/mset9/zarchiver-extract-1.png))
    - Navigate to your SD card, then tap the blue 'down arrow' icon to extract the files to the root of your SD card ([image](/images/screenshots/mset9/zarchiver-extract-2.png))

    ::: info

    ![](/images/screenshots/mset9/mset9-root-layout-android.png)

    :::

3. Abre la [aplicación MSET9 Installer](/images/screenshots/mset9/mset9-setup-android.png)

4. Toca en `Select "Nintendo 3DS" Folder`, después navega a la carpeta `Nintendo 3DS` en tu tarjeta SD ([imagen](/images/screenshots/mset9/select-mset9-folder-1.png))

5. Una vez estés dentro de la carpeta `Nintendo 3DS`, presiona en "Seleccionar", y después en "Permitir" si se pide permiso ([imagen](/images/screenshots/mset9/select-mset9-folder-2.png))

6. If `Setup MSET9` is [highlighted](/images/screenshots/mset9/setup-mset9-highlighted.png), proceed to the next step
    - If you get an error, you need to resolve before you can use MSET9. Refer to the [troubleshooting](troubleshooting-mset9)

7. Tap on `Setup MSET9` to begin the process of setting up MSET9

8. After reviewing the disclaimer, tap on `Confirm` to accept it

9. Tap on the photo corresponding to your console model, then at the bottom, pick your current firmware version

10. Si ves el aviso de `Hax ID1 Created`, toca OK para continuar
    - Si aparece un error, consulta la página de [resolución de problemas](troubleshooting-mset9) e inténtalo otra vez
    - Your console will appear to lose most data / no user-installed apps on HOME Menu. **Esto es normal.** Tus datos volverán más tarde en un paso posterior

11. Reinserta la tarjeta SD en la consola

12. Enciende tu consola

13. Abre el Editor de Mii

14. Espera a que tu consola llegue al mensaje que dice ["¡Estás en el editor de Mii!"](/images/screenshots/mset9/mii-welcome.png), luego cierra el Editor de Mii y vuelve al Menú HOME
    - Puede que veas [este mensaje](/images/screenshots/mset9/mii-extdata.png), cuál indica que los datos necesarios han sido creados
    - Si llegas al [menú principal](/images/screenshots/mset9/mii-existing.png) del Editor de Mii, entonces los datos ya existen. Sal del Editor de Mii y vuelve al Menú HOME

15. Abre la configuración de la consola y ve hacia `Gestión de datos` -> `Nintendo 3DS` -> `Programas` -> Borrar ([imagen](/images/screenshots/database-reset.jpg))
    - Esto no borrará ninguno de tus datos

16. Apaga la consola presionando el botón POWER y luego tocando Apagar en la pantalla táctil

17. Insert your SD card into your phone/tablet/computer

18. The MSET9 Installer application should automatically check if you have done previous steps properly
    - It may take a few seconds for the app to detect the SD card and react
    - If it doesn't check automatically, tap `Check MSET9 status` to check manually
    - Si aparece un error, consulta la página de [resolución de problemas](troubleshooting-mset9) e inténtalo otra vez

19. If the check passed, you'll see `Inject trigger file` become [highlighted](/images/screenshots/mset9/inject-trigger-highlighted.png) and you can continue to the next step. **Do not inject trigger yet.** Put your phone/tablet/computer aside for now

20. Reinserta la tarjeta SD en la consola

### Sección II - MSET9

En esta sección, activarás el exploit MSET9 para iniciar SafeB9SInstaller (el instalador de custom firmware).

::: danger

Debes de seguir estas instrucciones de forma **EXACTA**, ¡así que revisa cautelosamente TODO lo que haces para evitar problemas!

:::

1. Enciende tu consola, asegurándote de que el ícono de la configuración de la consola este seleccionado
    - Si la configuración de la consola no está seleccionada, **[mueve el cursor](/images/screenshots/mset9/hover-settings.png)** al ícono de la configuración de la consola usando la cruz de control, apaga la consola, y enciéndela
2. Pulsa (A) para iniciar los Ajustes del Sistema
3. Navega a `Gestion de datos` -> `Nintendo 3DS` -> `Datos Adicionales` ([imagen](/images/screenshots/mset9/settings-extdata.png))
4. **No presiones ningún botón ni toques la pantalla**
5. **Con la consola AÚN ENCENDIDA, y sin presionar ningún botón y sin tocar la pantalla**, saca la tarjeta SD de tu consola
    - The menu will refresh and say that no SD card is inserted, which is expected
6. Insert your SD card into your phone/tablet/computer
7. Open the MSET9 Installer application
8. Tap `Inject trigger file`
    - The button should become greyed out and `Remove trigger file` become [highlighted](/images/screenshots/mset9/remove-trigger-highlighted.png)
9. Reinserta la tarjeta SD en tu consola **sin presionar ningún botón y sin tocar la pantalla**
10. Si el exploit fue exitoso, habrás iniciado SafeB9SInstaller
    - Si aparece una pantalla roja o la consola se queda trabada en una pantalla de carga, sigue la [guía de resolución de problemas](troubleshooting-mset9)

### Sección III - Instalar boot9strap

En esta sección, instalarás custom firmware en tu consola.

1. Cuando se te pida, introduce la combinación de botones mostrada para instalar boot9strap
    - Si algún paso en la pantalla inferior tiene el texto en color rojo y no se te pide que introduzcas una combinación de botones, [sigue la guía de resolución de problemas](troubleshooting-mset9)
2. Una vez completado, presiona (A) para reiniciar tu consola

<!--@include: ./_include/configure-luma3ds.md -->

### Sección IV - Remover MSET9

En esta sección, se removerá MSET9 para evitar futuros problemas y para restaurar tus datos (juegos, temas, etc). (Esto no removerá el custom firmware que acabas de instalar.)

::: danger

¡NO saltes esta sección! Si te saltas esta sección; ¡las aplicaciones podrían congelarse inesperadamente y te encontrarás con varios errores al seguir la página siguiente!

:::

1. Apaga la consola
2. Insert your SD card into your phone/tablet/computer
3. Inicia la aplicación MSET9 Installer
4. Toca `Remove MSET9`
5. Cierra la aplicación MSET9 Installer

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

¿Has seguido la Sección IV (Eliminar MSET9)? ¡Esa sección es OBLIGATORIA!

:::

::: tip

Continúa a [Finalizar instalación](finalizing-setup)

:::
