# Installing boot9strap (MSET9 CLI iOS)

:::details Detalles técnicos (opcional)

[MSET9](https://github.com/zoogie/MSET9) es un exploit para el programa «Configuración de la consola» desarrollado por [zoogie](https://github.com/zoogie). Utiliza una falla donde la ID1 (la segunda carpeta de 32 caracteres dentro de la carpeta Nintendo 3DS, dentro de la ID0) puede tener _cualquier_ nombre siempre y cuando tenga 32 caracteres. Performing a specific sequence of actions results in the console executing the instructions that are encoded into the ID1 folder name, which can be used to grant full control over the 3DS.

:::

## Notas de compatibilidad

::: warning

This page requires an iPhone or iPad running iOS/iPadOS 14.0 or higher. Si tienes una computadora con Windows, macOS o Linux, sigue [Instalar boot9strap (MSET9 CLI)](installing-boot9strap-(mset9-cli)). Si tienes un teléfono/tablet Android o una Chromebook, debes seguir [Instalar boot9strap (MSET9 Play Store)](installing-boot9strap-(mset9-play-store)). Si no tienes acceso a ninguno de estos dispositivos, deberás utilizar un [exploit alternativo](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits).

:::

::: warning

As iPhones and iPads do not have an SD card slot, you will need an adapter to plug in your SD card to your device (e.g. a Lightning to SD card or USB-C to SD card adapter).

:::

## Lo que necesitas

- [iSH](https://apps.apple.com/us/app/ish-shell/id1436902243) from App Store

## Instrucciones

::: info

En esta página, utilizarás el script MSET9, que se utiliza para activar MSET9. Mientras el script está en progreso, los datos de usuario desaparecerán temporalmente, pero regresarán cuando termines con esta página. Si recibes un error al ejecutar el script, es probable que encuentres la solución en la página de [resolución de problemas](troubleshooting-mset9).

:::

### Sección I - Preparativos

In this section, you will prepare the MSET9 exploit by **temporarily** creating a new HOME Menu profile with no user data, and then setting up that profile with only the minimum data required for MSET9 to trigger. Tus datos de usuario existentes desaparecerán, pero volverán cuando finalices con esta página.

1. Insert your SD card into your iPhone/iPad (using an adapter)

<!--@include: ./_include/ish-chorus.md -->

    ```
    ::: info
    
    ![](/images/screenshots/mset9/mset9-ish-select.png)
    
    :::
    ```

1. Type the number corresponding to your console model and version, then tap Return

   - The screen should change to this:

   ::: info

   ![](/images/screenshots/mset9/mset9-ish-setup-notcreated.png)

   :::

   - Asegúrate de que el modelo y versión de la consola mostrados sean los correctos
2. Type `1`, then tap Return to begin the process of creating the MSET9 ID1
3. After reviewing the disclaimer, type `1` again and tap Return to accept it
   - Si aparece un error, consulta la página de [resolución de problemas](troubleshooting-mset9) e inténtalo otra vez
4. If you see the message "Created hacked ID1.", tap Return to close the MSET9 script
   - Your 3DS will appear to have no data / no user-installed apps on HOME Menu. **Esto es normal.** Tus datos volverán más tarde en un paso posterior
5. Reinserta la tarjeta SD en la consola
6. Enciende tu consola
7. Abre el Editor de Mii
8. Espera a que tu consola llegue al mensaje que dice ["¡Estás en el editor de Mii!"](/images/screenshots/mset9/mii-welcome.png), luego cierra el Editor de Mii y vuelve al Menú HOME
   - Puede que veas [este mensaje](/images/screenshots/mset9/mii-extdata.png), cuál indica que los datos necesarios han sido creados
   - Si llegas al [menú principal](/images/screenshots/mset9/mii-existing.png) del Editor de Mii, entonces los datos ya existen. Sal del Editor de Mii y vuelve al Menú HOME
9. Abre la configuración de la consola y ve hacia `Gestión de datos` -> `Nintendo 3DS` -> `Programas` -> Borrar ([imagen](/images/screenshots/database-reset.jpg))
   - Esto no borrará ninguno de tus datos
10. Apaga la consola presionando el botón POWER y luego tocando Apagar en la pantalla táctil
11. Insert your SD card into your iPhone/iPad (using an adapter)

<!--@include: ./_include/ish-chorus.md -->

1. Type the number corresponding to your console model and version, then tap Return

   - The screen should change to this and display `Ready`:

   ::: info

   ![](/images/screenshots/mset9/mset9-ish-ready.png)

   :::

   - If the screen says [Not ready - check MSET9 status for more details](/images/screenshots/mset9/mset9-ish-not-ready.png):
     - Type `2`, then tap Return to check the MSET9 status and follow the directions indicated
     - Una vez que hayas resuelto el problema, vuelve a la Sección I Paso 14
     - Para más información, consulta la página de [resolución de problemas](troubleshooting-mset9)
2. Type `0`, then tap Return to close the script
3. Reinserta la tarjeta SD en la consola

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
   - The menu will refresh and say that no SD card is inserted
6. Insert your SD card into your iPhone/iPad (using an adapter)

<!--@include: ./_include/ish-chorus.md -->

1. Type the number corresponding to your console model and version, then tap Return
2. In the MSET9 screen, type `3`, then tap Return to inject MSET9
   - Deberías ver el mensaje: "MSET9 successfully injected!"
3. Tap Return to close the MSET9 script
4. Reinserta la tarjeta SD en tu consola **sin presionar ningún botón y sin tocar la pantalla**
5. Si el exploit fue exitoso, habrás iniciado SafeB9SInstaller
   - If you get a red screen or the console gets stuck on a loading screen for more than 10 seconds, follow the [troubleshooting guide](troubleshooting-mset9)

### Sección III - Instalar boot9strap

En esta sección, instalarás custom firmware en tu consola.

1. Cuando se te pida, introduce la combinación de botones mostrada para instalar boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-mset9#sighaxed-firm-was-not-installed-check-lower-screen-for-more-info)
   - If the top screen is blank **and** you see "Crypto Status - all checks passed" on the bottom screen, you will have to enter key combo blindly. Press the following buttons on your console in this order:
     - D-Pad Left, D-Pad Down, D-Pad Right, D-Pad Up, A
2. Once it is complete (all seven steps on the bottom screen are green), press (A) to reboot your console

<!--@include: ./_include/configure-luma3ds.md -->

### Sección IV - Remover MSET9

En esta sección, se removerá MSET9 para evitar futuros problemas y para restaurar tus datos (juegos, temas, etc). (Esto no removerá el custom firmware que acabas de instalar.)

::: danger

¡NO saltes esta sección! Si te saltas esta sección; ¡las aplicaciones podrían congelarse inesperadamente y te encontrarás con varios errores al seguir la página siguiente!

:::

1. Apaga la consola
2. Insert your SD card into your iPhone/iPad (using an adapter)

<!--@include: ./_include/ish-chorus.md -->

1. Type the number corresponding to your console model and version, then tap Return
   - The current state should display [Injected](/images/screenshots/mset9/mset9-ish-injected.png)
   - If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ish-ready.png), skip to Step 6
2. Type `4`, then tap Return to remove the trigger file
   - Deberías ver el mensaje: "Removed trigger file."
3. Type `5`, then tap Return to remove MSET9
   - Deberías ver el mensaje: "Successfully removed MSET9!"
4. Tap Return to close the MSET9 script

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

¿Has seguido la Sección IV (Eliminar MSET9)? ¡Esa sección es OBLIGATORIA!

:::

::: tip

Continúa a [Finalizar instalación](finalizing-setup)

:::
