# Desinstalar CFW

## Lectura requerida

Esto quitará completamente el CFW de tu consola, incluyendo boot9strap y Luma3DS, con el propósito de restaurar la consola a su estado original.

Cualquier juego no firmado (ilegítimo) será eliminado durante este proceso. Usa un [gestor de datos de guardado](https://github.com/FlagBrew/Checkpoint/releases/latest) para respaldar los datos de guardado que te importen.

::: danger

Si estás desinstalando CFW porque:

- Quieres reinstalarlo
- Necesitas cambiar la tarjeta SD
- La tarjeta SD se perdió o se corrompió
- Uno de tus juegos no funciona
- Uno de los programas del sistema no funciona
- Tu consola no puede arrancar el Menú HOME

<u>**¡¡¡DETENTE!!!**</u> Desinstalar custom firmware es un riesgo innecesario que en el mejor de los casos solo desperdiciará tu tiempo y en el peor <u>**ROMPERÁ**</u> tu consola. Una mejor idea sería pedir ayuda (en inglés) en el [Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp).

:::

::: danger

Si has hecho CUALQUIERA de las siguientes cosas:

- [Cambiar la región](region-changing) de la consola
- Instalar un teclado personalizado
- Instalar un menú HOME personalizado (_no_ un tema personalizado)
- Cambiar manualmente la clave de encriptado (`movable.sed`) de la consola
- Remover la restricción al acceso de los servicios en línea

Entonces desinstalar CFW <u>**ROMPERÁ TU CONSOLA**</u>. Si este es el caso, [restaura una copia de seguridad limpia de la NAND](godmode9-usage#restoring-a-nand-backup) antes de continuar.

:::

::: warning

Estas instrucciones solo funcionarán en consolas con una versión de Luma3DS igual o mayor a la 8.0. Si tienes una versión anterior de Luma, debes actualizar tu configuración antes de seguir estas instrucciones. Ve a [esta página](checking-for-cfw) para encontrar instrucciones de actualización acordes a tu instalación.

:::

## Lo que necesitas

- La última versión de [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (el archivo `.zip` de Luma3DS)
- La última versión de [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (el archivo GodMode `.zip`)
- La última versión de [DSiWare Uninstaller](https://github.com/MechanicalDragon0687/DSiWare-Uninstaller/releases/latest)
- [safety_test.gm9](/gm9_scripts/safety_test.gm9)
- [uninstall_cfw.gm9](/gm9_scripts/uninstall_cfw.gm9)

## Instrucciones

### Sección I - Preparativos

1. Apaga la consola
2. Inserta la tarjeta SD en tu computadora
3. Copia todo lo que está dentro del `.zip` de Luma3DS a la raíz de tu tarjeta SD
4. Copia `Godmode9.firm` desde Godmode9 `.zip` a la carpeta `/luma/payloads/` en tu tarjeta SD
5. Copia la carpeta `gm9` desde GodMode9 `.zip` a la raíz de tu tarjeta SD
6. Copia `DSiWareUninstaller.3dsx` a la carpeta `/3ds/` de tu tarjeta SD
7. Copia `safety_test.gm9` y `uninstall_cfw.gm9` a la carpeta `/gm9/scripts/` en tu tarjeta SD
8. Reinserta la tarjeta SD en la consola

### Sección II - Probar el Modo DS

El propósito de esta sección es comprobar si las aplicaciones integradas del modo DS continuarán funcionando una vez que el CFW esté desinstalado. Si omites esta sección, el modo DS o sus funciones pueden ser inaccesibles hasta que se reinstale el CFW.

#### Prueba de Ajustes de conexión Wi-Fi de Nintendo

1. Enciende tu consola
2. Inicia la configuración de la consola
3. Dirígete hacia `Configuración de internet` -> `Conexiones de Nintendo DS`, luego toca en "Aceptar"
4. Deberías estar en la Configuración de la CFW de Nintendo
   - Si tu consola muestra la versión japonesa de Flipnote Studio, una pantalla en negro, o un mensaje de error; significa que esta prueba ha fallado
5. Apaga la consola

#### DS Download Play Test

1. Enciende tu consola
2. Inicia el modo descarga (![](/images/download-play-icon.png){height="24px" width="24px"})
3. Selecciona "Nintendo DS"
4. If your console loads into a "Download software via DS Download Play" menu, the test was successful
   - Si tu consola muestra la versión japonesa de Flipnote Studio, una pantalla en negro, o un mensaje de error; significa que esta prueba ha fallado
5. Apaga la consola

::: warning

Si cualquiera de estas pruebas falla, ¡el modo DS, el modo Descarga DS y/o las Conexiones de Nintendo DS podrían ser inaccesibles una vez que el CFW sea desinstalado! Deberás [reparar el modo DS](troubleshooting-post-install) antes de continuar.

:::

### Section III - Safety Test

El propósito de esta sección es verificar que la consola iniciará y que las funciones críticas del sistema, como la configuración de la consola y el teclado funcionarán una vez se desinstale el CFW. **Si te saltas esta sección, podrías ROMPER tu consola!**

1. Presiona y mantén (Start), luego enciende la consola mientras lo mantienes. Esto abrirá GodMode9
2. If you are prompted to create an essential files backup, press (A) to do so, then press (A) to continue once it is complete
3. Si se te pide establecer la fecha y hora RTC, presiona (A) para hacerlo, después establece la fecha y hora, y después presiona (A) para continuar
   - Cabe destacar que, si tuviste que cambiar la hora y fecha RTC, deberás corregir estos parámetros en la configuración de la consola después de seguir esta guía
4. Presiona el botón (HOME) para abrir el menú de acciones
5. Selecciona "Scripts..."
6. Selecciona "safety_test"
7. Lee el texto en pantalla y presiona (A) para continuar
8. Debería iniciar el menú HOME habitual de la 3DS (no importa si tiene un tema personalizado). Si es así, sigue con estas instrucciones
   - Si no arranca al menú HOME normal (pantalla negra, error, etc.), desinstalar el CFW **¡¡ROMPERÁ TU CONSOLA!!**
9. Inicia la configuración de la consola
   - Si la consola se bloquea, la prueba ha fallado
10. Selecciona "Otras opciones"
11. Select "Profile"
12. Select "User Name"
13. If you are able to enter a new user name, the test was successful
    - Si el teclado no aparece, la pantalla se congela o la consola se bloquea, la prueba ha fallado
14. Apaga la consola

::: danger

Si NO inicia el menú HOME habitual de la 3DS o la configuración del sistema / tu teclado es inaccesible, ¡**NO continúes con estas instrucciones**! Únete al [Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp) y pide ayuda (en inglés).

:::

### Sección IV - Copia de seguridad de la NAND

1. Presiona y mantén (Start), luego enciende la consola mientras lo mantienes. Esto abrirá GodMode9
2. Presoina (Home) para abrir el menú de acciones
3. Selecciona "Scripts..."
4. Selecciona "GM9Megascript"
5. Selecciona "Backup Options"
6. Selecciona "SysNAND Backup"
7. Presiona (A) para confirmar
   - Este proceso tomará un tiempo
   - Si aparece un error, asegúrate de que tienes al menos 1,3GB de espacio libre en la tarjeta SD
8. Presiona (B) para regresar al menú principal
9. Selecciona “Exit”
10. Presiona (Home) para abrir el menú de acciones
11. Selecciona "Poweroff system" para apagar tu consola

### Sección V - Quitar contenido ilegítimo

::: warning

En esta sección se eliminará el contenido no legítimo, como el homebrew y los juegos extraídos de cartuchos. ¡Si tienes datos de guardado que te sean importantes, haz una copia de seguridad con un gestor de guardado antes de continuar!

:::

1. Enciende tu consola
2. Inicia la configuración de la consola
3. Ve a Gestión de datos > Nintendo 3DS > Programas
4. En esta lista de programas, elimina cualquier contenido no autorizado por Nintendo que hayas instalado mientras usabas CFW
   - Esto incluye programas de uso común como FBI, Anemone3DS, Luma Updater, Homebrew Launcher, Checkpoint y otros, junto a los juegos y títulos que _no_ provengan de la eShop
5. Ve a `Gestión de datos` -> `DSiWare`
6. En esta lista de programas, elimina cualquier contenido no autorizado por Nintendo que hayas instalado mientras usabas CFW
   - Esto incluye programas como TWiLightMenu++, junto con cualquier juego y títulos que _no_ provengan de la eShop
   - No eliminar todos los programas CFW de las secciones 3DS y DSiWare antes de desinstalar el CFW, podría prevenir o deshabilitar el acceso al menú de gestión de datos luego de la desinstalación del CFW, lo que hará difícil reinstalar CFW en el futuro si lo deseas
7. Sal de Configuración de la Consola
8. Inicia el modo descarga (![](/images/download-play-icon.png){height="24px" width="24px"})
9. Espera hasta que veas los dos botones
10. Press (Left Shoulder) + (D-Pad Down) + (Select) at the same time to open the Rosalina menu
11. Selecciona "Miscellaneous options"
12. Selecciona "Switch the hb. title to the current app."
13. Presiona (B) para continuar
14. Presiona (B) para volver al menú principal de Rosalina
15. Presiona (B) para salir del menú de Rosalina
16. Press (Home), then close Download Play
17. Inicia el modo descarga (![](/images/download-play-icon.png){height="24px" width="24px"})
18. Tu consola debería iniciar el Homebrew Launcher
19. Inicia DSiWare Uninstaller desde la lista de homebrew
20. Sigue las instrucciones y permite al programa desinstalar
21. Una vez que el proceso haya terminado exitosamente, sal de Homebrew Launcher y apaga tu consola

### Sección VI - Formatear la consola

This section will ensure that all illegitimate tickets are removed, allowing eShop to work normally. Esto eliminará todo el contenido de la 3DS y cerrará la sesión de tu NNID. Ten en cuenta que la clave de encriptación de la consola será cambiada, lo cual implica que cualquier información antigua se volverá inaccesible, incluso si tienes un respaldo de tu tarjeta SD.

1. Enciende tu consola
2. Inicia la configuración de la consola
3. Navigate to Other Settings -> Next Page (until the final page) -> Format System Memory
4. Follow the prompts to format your 3DS

### Section VII - Running Uninstall Script

::: warning

This is your final opportunity to verify that all safety steps above have been followed! Please ensure that you have followed all sections on this page, **especially** `Section III - Safety Test`, before continuing.

:::

::: danger

Si estás desinstalando CFW porque:

- Quieres reinstalarlo
- Necesitas cambiar la tarjeta SD
- La tarjeta SD se perdió o se corrompió
- Uno de tus juegos no funciona
- Uno de los programas del sistema no funciona
- Tu consola no puede arrancar el Menú HOME

<u>**¡¡¡DETENTE!!!**</u> Desinstalar custom firmware es un riesgo innecesario que en el mejor de los casos solo desperdiciará tu tiempo y en el peor <u>**ROMPERÁ**</u> tu consola. Una mejor idea sería pedir ayuda (en inglés) en el [Discord de Nintendo Homebrew](https://discord.gg/MWxPgEp).

:::

1. Presiona y mantén (Start), luego enciende la consola mientras lo mantienes. Esto abrirá GodMode9
   - If you instead see the Luma3DS chainloader, use the D-Pad and the (A) button to select GodMode9
2. Presiona el botón (HOME) para abrir el menú de acciones
3. Selecciona "Scripts..."
4. Select "uninstall_cfw"
5. When prompted, press (A) to proceed
6. Press (A) again to proceed
7. Press (A) to unlock SysNAND (lvl3) writing, then input the key combo given
8. Presiona (A) para continuar
9. Press (A) to relock write permissions if prompted
10. Presiona (Start) para reiniciar tu consola

___

::: tip

Todo el custom firmware ha sido eliminado de tu consola.

:::

::: info

Ahora puedes eliminar cualquier archivo y carpeta extra de la raíz de tu tarjeta SD que _no_ sean `Nintendo 3DS`, `DCIM`, o las carpetas `private`.

:::
