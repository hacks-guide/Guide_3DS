# Instalar boot9strap (MSET9 CLI)

:::details Detalles técnicos (opcional)

[MSET9](https://github.com/zoogie/MSET9) es un exploit para el programa «Configuración de la consola» desarrollado por [zoogie](https://github.com/zoogie). Utiliza una falla donde la ID1 (la segunda carpeta de 32 caracteres dentro de la carpeta Nintendo 3DS, dentro de la ID0) puede tener _cualquier_ nombre siempre y cuando tenga 32 caracteres. Entonces, al realizar una secuencia específica de acciones la consola ejecutará las instrucciones que están codificadas en el nombre de la carpeta ID1. Por eso se puede usar esto para otorgarle al usuario control total de la consola.

:::

## Notas de compatibilidad

::: warning

Esta página requiere un PC con Windows, Linux o macOS. Si tienes un teléfono/tablet Android o una Chromebook, debes seguir [Instalar boot9strap (MSET9 Play Store)](installing-boot9strap-\(mset9-play-store\)). If you have an iPhone or iPad, follow [Installing boot9strap (MSET9 CLI iOS)](installing-boot9strap-\(mset9-cli-ios\)) instead. Si no tienes acceso a ninguno de estos dispositivos, deberás utilizar un [exploit alternativo](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits).

:::

::: info

If you are using an Android device as an SD card adapter for your computer, you will not be able to follow this page due to incompatibilities with Android's file transfer protocol (MTP). If this is the case, follow [Installing boot9strap (MSET9 Play Store)](installing-boot9strap-\(mset9-play-store\)) instead.

:::

## Lo que necesitas

- La última versión de [MSET9](https://github.com/hacks-guide/MSET9/releases/latest) (El archivo MSET9 `.zip`)
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
2. Copia todo lo que está dentro del `.zip` de MSET9 a la raíz de tu tarjeta SD. Si alguno de los archivos ya existe, sobreescríbelos con los nuevos.

   ::: info

   ![](/images/screenshots/mset9/mset9-root-layout.png)

   :::

<!--@include: ./_include/mset9-chorus.md -->

```
::: info

![](/images/screenshots/mset9/mset9-select.png)

:::
```

1. Escribe el número correspondiente al modelo y versión de tu consola, luego presiona Enter

   - La ventana debería cambiar a esto:

   ::: info

   ![](/images/screenshots/mset9/mset9-setup-notcreated.png)

   :::

   - Asegúrate de que el modelo y versión de la consola mostrados sean los correctos
2. Escribe `1` y presiona Enter para iniciar la creación del ID1 de MSET9
3. Después de leer la advertencia, escribe `1` otra vez y presiona Enter para aceptarla
   - Si aparece un error, consulta la página de [resolución de problemas](troubleshooting-mset9) e inténtalo otra vez
4. Si ves el mensaje "Created hacked ID1.", presiona Enter para cerrar el script MSET9
   - Tu consola aparecerá como si hubiera perdido varios datos / programas instalados por el usuario en el Menú HOME. **Esto es normal.** Tus datos volverán más tarde en un paso posterior
5. Reinserta la tarjeta SD en la consola
6. Enciende tu consola
7. Abre el Editor de Mii
8. Espera a que tu consola llegue al mensaje que dice ["¡Estás en el editor de Mii!"](/images/screenshots/mset9/mii-welcome.png), luego cierra el Editor de Mii y vuelve al Menú HOME
   - Puede que veas [este mensaje](/images/screenshots/mset9/mii-extdata.png), cuál indica que los datos necesarios han sido creados
   - Si llegas al [menú principal](/images/screenshots/mset9/mii-existing.png) del Editor de Mii, entonces los datos ya existen. Sal del Editor de Mii y vuelve al Menú HOME
9. Abre la configuración de la consola y ve hacia `Gestión de datos` -> `Nintendo 3DS` -> `Programas` -> Borrar ([imagen](/images/screenshots/database-reset.jpg))
   - Esto no borrará ninguno de tus datos
10. Apaga la consola presionando el botón POWER y luego tocando Apagar en la pantalla táctil
11. Inserta la tarjeta SD en tu computadora

<!--@include: ./_include/mset9-chorus.md -->

1. Escribe el número correspondiente al modelo y versión de tu consola, luego presiona Enter

   - La ventana debería cambiar a esto y mostrar `Ready`:

   ::: info

   ![](/images/screenshots/mset9/mset9-ready.png)

   :::

   - Si la ventana dice [«Not ready - check MSET9 status for more details»](/images/screenshots/mset9/mset9-not-ready.png):
     - Escribe `2` y presiona Enter para comprobar el estado de MSET9 y sigue las instrucciones indicadas
     - Una vez que hayas resuelto el problema, vuelve a la Sección I Paso 14
     - Para más información, consulta la página de [resolución de problemas](troubleshooting-mset9)
2. Escribe `0` y presiona Enter para cerrar el script
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
   - El menú se actualizará y dirá que no hay ninguna tarjeta SD insertada, que es lo que tiene que pasar
6. Inserta la tarjeta SD en tu computadora

<!--@include: ./_include/mset9-chorus.md -->

1. Escribe el número correspondiente al modelo y versión de tu consola, luego presiona Enter
2. En la ventana de MSET9, escribe `3` y presiona Enter para inyectar MSET9
   - Deberías ver el mensaje: "MSET9 successfully injected!"
3. Presiona Enter para cerrar el script MSET9
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
2. Inserta la tarjeta SD en tu computadora

<!--@include: ./_include/mset9-chorus.md -->

1. Escribe el número correspondiente al modelo y versión de tu consola, luego presiona Enter
   - El estado actual debería mostrar ["Injected"](/images/screenshots/mset9/mset9-injected.png)
   - Si ya removiste el archivo activador (o nunca lo inyectaste en el primer lugar), el estado actual mostrará ["Ready"](/images/screenshots/mset9/mset9-ready.png). Salta al Paso 6
2. Escribe `4` y presiona Enter para remover el archivo activador
   - Deberías ver el mensaje: "Removed trigger file."
3. Escribe `5` y presiona Enter para remover MSET9
   - Deberías ver el mensaje: "Successfully removed MSET9!"
   - If you see "FileNotFoundError: [Errno 2] No such file or directory:" followed by a long file path containing "Nintendo 3DS", [follow the corresponding section of this troubleshooting guide](troubleshooting-mset9#mset9-application-script)
4. Presiona Enter para cerrar el script MSET9

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

¿Has seguido la Sección IV (Eliminar MSET9)? ¡Esa sección es OBLIGATORIA!

:::

::: tip

Continúa a [Finalizar instalación](finalizing-setup)

:::
