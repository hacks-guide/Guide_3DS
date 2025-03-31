# Instalar boot9strap (MSET9 CLI)

:::details Detalles técnicos (opcional)

[MSET9](https://github.com/zoogie/MSET9) es un exploit para el programa Configuración de la consola desarrollado por [zoogie](https://github.com/zoogie). Utiliza una falla donde la ID1 (la segunda carpeta de 32 caracteres dentro de la carpeta Nintendo 3DS, dentro de la ID0) puede tener _cualquier_ nombre siempre que sean 32 caracteres. Realizar una secuencia específica de acciones lleva a la consola a ejecutar las instrucciones codificadas en el nombre de la carpeta ID1, la cual puede ser utilizada para conseguir un control total sobre la 3DS.

:::

## Notas de compatibilidad

::: warning

Esta página requiere un PC con Windows, Linux o macOS. Si tienes un teléfono/tablet Android o una Chromebook, debes seguir [Instalar boot9strap (MSET9 Play Store)](installing-boot9strap-\(mset9-play-store\)). Si no tienes acceso a ninguno de estos dispositivos, deberás utilizar un [exploit alternativo](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits).

:::

## Lo que necesitas

- La última versión de [MSET9](https://github.com/hacks-guide/MSET9/releases/latest)
- Cualquier versión 3.x de [Python](https://www.python.org/downloads/) **instalada en tu computadora**
    - Si estas en Windows, no puedes usar Python de la Microsoft Store. Por favor instala una versión desde python.org.
    - Si estás en Linux o en macOS, puede que ya tengas Python 3. Compruébalo abriendo una ventana de Terminal e introduciendo `python3 -V`. Si esto devuelve un número de versión, funcionará para esta guía.

## Instrucciones

::: info

En esta página, utilizarás el script MSET9, que se utiliza para activar MSET9. Mientras el script está en progreso, los datos de usuario desaparecerán temporalmente, pero regresarán cuando termines con esta página. Si recibes un error al ejecutar el script, es probable que encuentres la solución en la página de [resolución de problemas](troubleshooting-mset9).

:::

### Sección I - Preparativos

En esta sección, prepararás el exploit MSET9 creando **temporalmente** un nuevo perfil de Menú HOME sin datos de usuario, y luego completando el perfil con solo los datos mínimos requeridos para activar MSET9. Tus datos de usuario existentes desaparecerán, pero volverán cuando finalices con esta página.

1. Inserta la tarjeta SD en tu computadora
2. Copia todo lo que está dentro del `.zip` de MSET9 a la raíz de tu tarjeta SD, sobreescribiendo cualquier archivo existente

    ::: info

    ![](/images/screenshots/mset9/mset9-root-layout.png)

    :::

<!--@include: ./_include/mset9-chorus.md -->

```
::: info

![](/images/screenshots/mset9/mset9-select.png)

:::
```

1. Escribe el número correspondiente al modelo y versión de tu consola, luego pulsa Enter

    - La ventana debería cambiar a esto:

    ::: info

    ![](/images/screenshots/mset9/mset9-setup-notcreated.png)

    :::

    - Asegúrate de que el modelo y versión de la consola mostrados sean los correctos
2. Type `1`, then press Enter to begin the process of creating the MSET9 ID1
3. After reviewing the disclaimer, type `1` again and press Enter to accept it
    - Si aparece un error, consulta la página de [resolución de problemas](troubleshooting-mset9) e inténtalo otra vez
4. If you see the message "Created hacked ID1.", press Enter to close the MSET9 script
    - Tu 3DS aparecerá como si no tuviera datos ni programas instalados por el usuario en el Menú HOME. **Esto es normal.** Tus datos volverán más tarde en un paso posterior
5. Reinserta la tarjeta SD en la consola
6. Enciende tu consola
7. Abre el Editor de Mii
8. Espera a que tu consola llegue al mensaje que dice ["¡Estás en el editor de Mii!"](/images/screenshots/mset9/mii-welcome.png), luego cierra el Editor de Mii y vuelve al Menú HOME
    - Puede que veas [este mensaje](/images/screenshots/mset9/mii-extdata.png), cuál indica que los datos necesarios han sido creados
    - Si llegas al [menú principal](/images/screenshots/mset9/mii-existing.png) del Editor de Mii, entonces los datos ya existen. Sal del Editor de Mii y vuelve al Menú HOME
9. Abre la configuración de la consola y ve hacia `Gestión de datos` -> `Nintendo 3DS` -> `Programas` -> Borrar ([imagen](/images/screenshots/database-reset.jpg))
    - Esto no borrará ninguno de tus datos
10. Apaga la consola presionando el botón POWER y luego tocando «Apagar» en la pantalla táctil
11. Inserta la tarjeta SD en tu computadora

<!--@include: ./_include/mset9-chorus.md -->

1. Escribe el número correspondiente al modelo y versión de tu consola, luego pulsa Enter

    - La ventana debería cambiar a esto y mostrar `Ready`:

    ::: info

    ![](/images/screenshots/mset9/mset9-ready.png)

    :::

    - Si la ventana dice [«Not ready - check MSET9 status for more details»](/images/screenshots/mset9/mset9-not-ready.png):
        - Type `2`, then press Enter to check the MSET9 status and follow the directions indicated
        - Una vez que hayas resuelto el problema, vuelve a la Sección I Paso 14
        - Para más información, consulta la página de [resolución de problemas](troubleshooting-mset9)
2. Type `0`, then press Enter to close the script
3. Reinserta la tarjeta SD en la consola

### Sección II - MSET9

En esta sección, activarás el exploit MSET9 para iniciar SafeB9SInstaller (el instalador de custom firmware).

::: danger

These instructions must be followed **EXACTLY**, so double-check EVERYTHING you are doing to avoid errors!

:::

1. Enciende tu consola, asegurándote de que el ícono de la configuración de la consola este seleccionado
    - Si la configuración de la consola no está seleccionada, **[mueve el cursor](/images/screenshots/mset9/hover-settings.png)** al ícono de la configuración de la consola usando la cruz de control, apaga la consola, y enciéndela
2. Pulsa (A) para iniciar los Ajustes del Sistema
3. Navega a `Gestion de datos` -> `Nintendo 3DS` -> `Datos Adicionales` ([imagen](/images/screenshots/mset9/settings-extdata.png))
4. **No presiones ningún botón ni toques la pantalla**
5. **Con la consola AÚN ENCENDIDA, y sin presionar ningún botón y sin tocar la pantalla**, saca la tarjeta SD de tu consola
    - El menú se actualizará y dirá que la tarjeta SD no está insertada
6. Inserta la tarjeta SD en tu computadora

<!--@include: ./_include/mset9-chorus.md -->

1. Escribe el número correspondiente al modelo y versión de tu consola, luego pulsa Enter
2. In the MSET9 window, type `3`, then press Enter to inject MSET9
    - You should see "MSET9 successfully injected!"
3. Press Enter to close the MSET9 script
4. Reinsert your SD card into your console **without pressing any buttons or touching the screen**
5. If the exploit was successful, you will have booted into SafeB9SInstaller
    - If you get a red screen or the console gets stuck on a loading screen, follow the [troubleshooting guide](troubleshooting-mset9)

### Section III - Installing boot9strap

En esta sección, instalarás custom firmware en tu consola.

1. Cuando se te pida, introduce la combinación de botones mostrada para instalar boot9strap
    - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-mset9)
2. Una vez completado, presiona (A) para reiniciar tu consola

<!--@include: ./_include/configure-luma3ds.md -->

### Section IV - Removing MSET9

In this section, you will remove MSET9 to prevent further issues and to restore your user data (games, themes, etc). (This will not remove the custom firmware that you have just installed.)

::: danger

Do NOT skip this section! If you skip it, applications may crash unexpectedly and you will encounter errors on the next page!

:::

1. Apaga la consola
2. Inserta la tarjeta SD en tu computadora

<!--@include: ./_include/mset9-chorus.md -->

1. Escribe el número correspondiente al modelo y versión de tu consola, luego pulsa Enter
    - The current state should display [Injected](/images/screenshots/mset9/mset9-injected.png)
    - If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ready.png), skip to Step 6
2. Type `4`, then press Enter to remove the trigger file
    - You should see "Removed trigger file."
3. Type `5`, then press Enter to remove MSET9
    - You should see "Successfully removed MSET9!"
4. Press Enter to close the MSET9 script

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

Did you follow Section IV (Removing MSET9)? That section is MANDATORY!

:::

::: tip

Continúa a [Finalizar instalación](finalizing-setup)

:::
