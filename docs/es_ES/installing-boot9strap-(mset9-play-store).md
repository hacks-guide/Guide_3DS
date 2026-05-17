# Instalar boot9strap (MSET9 Play Store)

:::details Detalles técnicos (opcional)

[MSET9](https://github.com/zoogie/MSET9) es un exploit para el programa «Configuración de la consola» desarrollado por [zoogie](https://github.com/zoogie). Utiliza una falla donde la ID1 (la segunda carpeta de 32 caracteres dentro de la carpeta Nintendo 3DS, dentro de la ID0) puede tener _cualquier_ nombre siempre y cuando tenga 32 caracteres. Entonces, al realizar una secuencia específica de acciones la consola ejecutará las instrucciones que están codificadas en el nombre de la carpeta ID1. Por eso se puede usar esto para otorgarle al usuario control total de la consola.

:::

## Notas de compatibilidad

::: warning

Para seguir esta página se requiere un dispositivo Android o un Chromebook. If you have an iPhone or iPad, follow [Installing boot9strap (MSET9 CLI iOS)](installing-boot9strap-(mset9-cli-ios)) instead. Si tienes una computadora con Windows, macOS o Linux, sigue [Instalar boot9strap (MSET9 CLI)](installing-boot9strap-(mset9-cli)). Si no tienes acceso a ninguno de estos dispositivos, deberás utilizar un [exploit alternativo](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits).

:::

::: warning

En dispositivos Android, la versión mínima requerida de Android es la 6.0 (Marshmallow).

:::

## Lo que necesitas

- La última versión de [MSET9](https://github.com/hacks-guide/MSET9/releases/latest) (El archivo MSET9 `.zip`)
- Las siguientes aplicaciones instaladas desde Google Play Store:
  - [MSET9 Installer](https://play.google.com/store/apps/details?id=moe.saru.homebrew.console3ds.mset9_installer_android)
  - [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver)
  - Si quieres, puedes descargar estas aplicaciones desde otros lugares

## Instrucciones

### Sección I - Preparativos

En esta sección, prepararás el exploit MSET9 creando **temporalmente** un nuevo perfil de Menú HOME sin datos de usuario, y luego completando el perfil con solo los datos mínimos requeridos para activar MSET9. Tus datos de usuario existentes desaparecerán, pero volverán cuando finalices con esta página.

1. Inserta la tarjeta SD en tu teléfono/tablet/computadora

2. Copia todo lo que está dentro del `.zip` de MSET9 a la raíz de tu tarjeta SD. Si alguno de los archivos ya existe, sobreescríbelos con los nuevos:

   - Abre ZArchiver
   - Si se te pide, [concédele el permiso para acceder a archivos en tu tarjeta SD a ZArchiver](/images/screenshots/mset9/zarchiver-allow.png)
   - Navega a donde se encuentra descargado el `.zip` de MSET9 ([probablemente en la carpeta Descargas](/images/screenshots/mset9/zarchiver-zip-location.png))
   - Selecciona el `.zip` de MSET9 y luego "Extraer..." ([imagen](/images/screenshots/mset9/zarchiver-extract-1.png))
   - Navega a la tarjeta SD, y toca el icono azul de 'flecha hacia abajo' para extraer los archivos a la raíz de la tarjeta SD ([imagen](/images/screenshots/mset9/zarchiver-extract-2.png))

   ::: info

   ![](/images/screenshots/mset9/mset9-root-layout-android.png)

   :::

3. Abre la [aplicación MSET9 Installer](/images/screenshots/mset9/mset9-setup-android.png)

4. Toca en `Select "Nintendo 3DS" Folder`, después navega a la carpeta `Nintendo 3DS` en tu tarjeta SD ([imagen](/images/screenshots/mset9/select-mset9-folder-1.png))

5. Una vez estés dentro de la carpeta `Nintendo 3DS`, presiona en "Seleccionar", y después en "Permitir" si se pide permiso ([imagen](/images/screenshots/mset9/select-mset9-folder-2.png))

6. Si la opción de `Setup MSET9` está [resaltada](/images/screenshots/mset9/setup-mset9-highlighted.png), continúa al siguiente paso
   - Si aparece un error, tendrás que resolverlo para poder usar MSET9. Consulta la guía de [resolución de problemas](troubleshooting-mset9)

7. Toca en `Setup MSET9` para iniciar el proceso de configuración de MSET9

8. Después de leer la advertencia, toca en `Confirm` para aceptarla

9. Toca la foto correspondiente al modelo de tu consola, y luego elige tu versión de firmware actual en la parte inferior

10. Si ves el aviso de `Hax ID1 Created`, toca OK para continuar
    - Si aparece un error, consulta la página de [resolución de problemas](troubleshooting-mset9) e inténtalo otra vez
    - Tu consola aparecerá como si hubiera perdido varios datos / programas instalados por el usuario en el Menú HOME. **Esto es normal.** Tus datos volverán más tarde en un paso posterior

11. Reinserta la tarjeta SD en la consola

12. Enciende tu consola

13. Abre el Editor de Mii

14. Espera a que tu consola llegue al mensaje que dice ["¡Estás en el editor de Mii!"](/images/screenshots/mset9/mii-welcome.png), luego cierra el Editor de Mii y vuelve al Menú HOME
    - Puede que veas [este mensaje](/images/screenshots/mset9/mii-extdata.png), cuál indica que los datos necesarios han sido creados
    - Si llegas al [menú principal](/images/screenshots/mset9/mii-existing.png) del Editor de Mii, entonces los datos ya existen. Sal del Editor de Mii y vuelve al Menú HOME

15. Abre la configuración de la consola y ve hacia `Gestión de datos` -> `Nintendo 3DS` -> `Programas` -> Borrar ([imagen](/images/screenshots/database-reset.jpg))
    - Esto no borrará ninguno de tus datos

16. Apaga la consola presionando el botón POWER y luego tocando Apagar en la pantalla táctil

17. Inserta la tarjeta SD en tu teléfono/tablet/computadora

18. El instalador de MSET9 debería comprobar automáticamente si ya has hecho los pasos previos de forma correcta
    - La aplicación puede tardar unos segundos en detectar y reaccionar a la tarjeta SD
    - Si no comprueba de forma automática, toca `Check MSET9 status` para comprobar manualmente
    - Si aparece un error, consulta la página de [resolución de problemas](troubleshooting-mset9) e inténtalo otra vez

19. Si la comprobación fue exitosa, verás que `Inject trigger file` se [resalta](/images/screenshots/mset9/inject-trigger-highlighted.png) y podrás continuar al siguiente paso. **No inyectes el archivo aún.** Deja a un lado tu teléfono/tablet/computadora por ahora

20. Reinserta la tarjeta SD en la consola

### Sección II - MSET9

En esta sección, activarás el exploit MSET9 para iniciar SafeB9SInstaller (el instalador de custom firmware).

::: danger

Debes de seguir estas instrucciones de forma **EXACTA**, ¡así que revisa cautelosamente TODO lo que haces para evitar problemas!

:::

1. Enciende tu consola, asegurándote de que el ícono de la configuración de la consola este seleccionado
   - Si la configuración de la consola no está seleccionada, **[mueve el cursor](/images/screenshots/mset9/hover-settings.png)** al ícono de la configuración de la consola usando la cruz de control, apaga la consola, y enciéndela
2. Presiona (A) para iniciar la configuración de la consola
3. Navega a `Gestion de datos` -> `Nintendo 3DS` -> `Datos Adicionales` ([imagen](/images/screenshots/mset9/settings-extdata.png))
4. **No presiones ningún botón ni toques la pantalla**
5. **Con la consola AÚN ENCENDIDA, y sin presionar ningún botón y sin tocar la pantalla**, saca la tarjeta SD de tu consola
   - El menú se actualizará y dirá que no hay ninguna tarjeta SD insertada, que es lo que tiene que pasar
6. Inserta la tarjeta SD en tu teléfono/tablet/computadora
7. Inicia la aplicación MSET9 Installer
8. Toca `Inject trigger file`
   - El botón debería ponerse gris y `Remove trigger file` debería [resaltarse](/images/screenshots/mset9/remove-trigger-highlighted.png)
9. Reinserta la tarjeta SD en tu consola **sin presionar ningún botón y sin tocar la pantalla**
10. Si el exploit fue exitoso, habrás iniciado SafeB9SInstaller
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
2. Inserta la tarjeta SD en tu teléfono/tablet/computadora
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
