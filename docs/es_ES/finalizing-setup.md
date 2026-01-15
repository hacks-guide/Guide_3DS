# Finalizar instalación

## Lectura requerida

En la anterior página instalaste boot9strap, un cargador de custom firmware que carga el archivo `boot.firm` desde la tarjeta SD o NAND (memoria interna). En este caso, estamos usando Luma3DS por [LumaTeam](https://github.com/LumaTeam/) como `boot.firm` para parchear la consola, permitiéndole ejecutar software homebrew.

En esta página, haremos respaldos de archivos críticos del sistema e instalaremos algunos programas homebrew. La mayoría de estos pasos serán automatizados usando un script que ejecutarás en tu consola.

::: info

El script instalará las siguientes aplicaciones:

- **FBI** por Steveice10 _(instala programas en formato CIA)_
- **Homebrew Launcher Loader** por PabloMK7 _(ejecuta Homebrew Launcher, para homebrew en formato 3DSX)_
- **Anemone3DS** por astronautlevel2 _(instala temas personalizados, pantallas de inicio e insignias)_
- **Checkpoint** por BernardoGiordano/FlagBrew _(gestiona datos de guardado de juegos de 3DS/DS)_
- **ftpd** by mtheall _(permite acceder inalámbricamente a la tarjeta SD en la 3DS a través de FTP)_
- **Universal-Updater** por Universal-Team _(una tienda de aplicaciones para la 3DS que permite descargar homebrew por Wi-Fi)_
- **GodMode9** por d0k3 _(herramienta multipropósito para extraer datos de la memoria interna o tarjetas de juego)_

Si no quieres alguna de estas aplicaciones, las puedes eliminar después de haber terminado esta página, yendo a Configuración de la consola -> Gestión de Datos -> Nintendo 3DS -> Programas. (GodMode9 no puede ser eliminado de esta manera y es generalmente requerido para otras funciones).

::: details Enlaces de los códigos fuente (opcional)

Todos los programas instalados de esta guía son de código abierto. Si te interesa ver como funcionan, o si te gustaría dejar una estrella para mostrar tu apreciación, puedes visitar su código fuente aquí:

- [FBI](https://github.com/lifehackerhansol/FBI)
- [Homebrew Launcher Loader](https://github.com/PabloMK7/homebrew_launcher_dummy)
- [Anemone3DS](https://github.com/astronautlevel2/Anemone3DS)
- [Checkpoint](https://github.com/bernardogiordano/checkpoint/releases)
- [ftpd](https://github.com/mtheall/ftpd)
- [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/)
- [GodMode9](https://github.com/d0k3/GodMode9)

:::

## Notas de compatibilidad

::: info

Si tu instalación anterior de CFW estaba basada en EmuNAND y deseas mover el contenido de tu EmuNAND/RedNAND a SysNAND, ve a [Mover EmuNAND](move-emunand) antes de seguir esta página. Si no sabes lo que es una EmuNAND, ignora esto.

:::

## Lo que necesitas

- [x_finalize_helper.firm](https://github.com/hacks-guide/finalize/releases/latest/download/x_finalize_helper.firm) (descarga directa)
- [finalize.romfs](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) (descarga directa)

## Instrucciones

### Sección I - Preparativos

En esta sección, copiarás los archivos necesarios para seguir el resto de las instrucciones en esta página.

1. Apaga la consola
2. Inserta la tarjeta SD en tu computadora
3. Copia `finalize.romfs` a la raíz de tu tarjeta SD
4. Abre la carpeta `luma` en tu tarjeta SD y crea una carpeta llamada `payloads` adentro si es que no existe una ya de antemano
5. Copia "x_finalize_helper.firm" a la carpeta "payloads"
6. Reinserta la tarjeta SD en la consola

La siguiente captura de pantalla indica la estructura básica que debe tener la tarjeta SD para poder seguir esta página. Puede que tengas archivos o carpetas adicionales en tu tarjeta SD, dependiendo de la instalación anterior o del método que siguieras.

::: info

![](/images/screenshots/finalizing-root-layout.png)

:::

::: info

![](/images/screenshots/finalizing-luma-payloads.png)

:::

### Sección II - Actualizar el sistema

En esta sección, actualizarás tu sistema a la última versión, lo cual es seguro de hacer con custom firmware.

<!--@include: ./_include/sysupdate.md -->

### Sección III - configuración RTC y DSP

En esta sección, sincronizarás el reloj interno de la 3DS con la hora real y volcarás el firmware de sonido (que es necesario para que algunos software homebrew utilicen el sonido correctamente).

1. Press (Left Shoulder) + (D-Pad Down) + (Select) at the same time to open the Rosalina menu
   - Si alguno de estos botones no funciona, descarga [config.ini](/assets/config.ini) y ponlo en tu carpeta `luma `, reemplazando el archivo existente. Esto cambiará la combinación de botones del menú de Rosalina a (X) + (Y)
2. Selecciona "Miscellaneous options"
3. Selecciona "Dump DSP firmware"
4. Presiona (B) para continuar
5. Selecciona "Nullify user time offset"
6. Presiona (B) para continuar
7. Presiona (B) para volver al menú principal de Rosalina
8. Presiona (B) para salir del menú de Rosalina

### Sección IV - Script de configuración

En esta sección, usarás una serie de scripts para automatizar la instalación de homebrew, la limpieza de la tarjeta SD y la copia de seguridad de archivos del sistema.

1. Apaga la consola
2. Mantén presionado (X), y mientras mantienes (X), enciende la consola. This will launch the Finalizing Setup Helper
   - If you boot to the HOME Menu, your `payloads` folder may be incorrectly spelled, or `x_finalize_helper.firm` may be in the wrong location
   - Si encuentras un error, consulta la página de [resolución de problemas](troubleshooting-finalizing-setup)
3. After a few seconds, your console should automatically boot into GodMode9
   - From this point forward, you can access GodMode9 by holding (Start) while powering on your console
   - Holding (X) on boot will no longer do anything
4. If necessary, configure GodMode9:
   - If you are prompted to select a language, use the D-Pad and press (A) to select English
     - This language choice only affects GodMode9's menu options
     - You can set it to your language of choice after completing this guide
   - If you are prompted to create an essential files backup, press (A) to do so, then press (A) to continue
   - Si se te pide establecer la fecha y hora RTC, presiona (A) para hacerlo, después establece la fecha y hora, y después presiona (A) para continuar
5. Once you see [root] and a list of drives, press (Home) to bring up the action menu
6. Selecciona "Scripts..." (_not_ Lua scripts)
7. Selecciona "finalize"
8. Sigue las instrucciones del script, respondiendo a las preguntas que aparezcan
   - If you see "Information #05: No title database", press (A) and enter the key combination on the bottom screen to proceed
   - If you encounter an error, follow the instructions in the error message or consult the [troubleshooting](troubleshooting-finalizing-setup) page, then open GodMode9 by holding (Start) on boot to re-run the script
9. Una vez el script diga "Setup complete!", presiona (A) para apagar el dispositivo
   - Si NO aparece el mensaje "Setup complete!", el script no tuvo exito y tendrás que rehacer esta sección desde el Paso 3
10. Inserta la tarjeta SD en tu computadora
11. Copia la carpeta `/gm9/backups` a una ubicación segura en tu computadora
    - Esta carpeta contiene copias de seguridad de archivos críticos y se debería de respaldar a varias ubicaciones (p. ej. almacenamiento en la nube) si es posible
    - The two SysNAND files are your NAND backup and can be used to revert your console to a working state if it is bricked by a software issue
    - El archivo `essential.exefs` contiene los archivos únicos a tu consola y se pueden usar para recuperar tus datos en caso de un fallo de hardware
12. Si aún los tienes, borra los dos archivos `SysNAND` de la carpeta `/gm9/backups` de tu tarjeta SD
    - El archivo `essential.exefs` es pequeño, por lo que puede ser guardado en la tarjeta SD para tenerlo a mano

___

::: tip

¡Listo! Ya tienes configurado el custom firmware en tu consola.

:::

::: info

¿Estás intentando averiguar que hacer con tu dispositivo recientemente modificado? ¡Visita [nuestra wiki](https://wiki.hacks.guide/wiki/3DS:Things_to_do)!

:::

### Información y notas

::: info

Aquí tienes algunas combinaciones de botones que deberías saber:

- Mantener presionado (Select) al encender la consola iniciará el menú de configuración de Luma3DS.
- Mantener presionado (Start) al encender la consola iniciará GodMode9, o el menú de paylods de Luma3DS si tienes múltiples payloads en `/luma/payloads/`.
- Con los ajustes predeterminados, presionar (L) + (Abajo) + (Select) en el modo 3DS abrirá el menú de Rosalina, donde puedes ver información del sistema, hacer capturas de pantalla, activar trucos, y más. Esto se puede cambiar desde el menú de Rosalina.
- Mantener presionados (Start) + (Select) + (X) al encender la consola hará que el LED de notificación muestre un color para propósitos de depuración. Mira la [lista de cambios](https://github.com/SciresM/boot9strap/releases/tag/1.4) para saber que significan los distintos tipos de parpadeo.

:::

### Pretendo

Pretendo is a replacement service for the Nintendo Network, which resurrects online services from the now shut down Nintendo Network. It also revives the Miiverse service, via juxtaposition. The official guide can be found [here](https://pretendo.network/docs/install/3ds).

**Note: Pretendo does not support every online service, however work is being done to achieve this.**

A list of games that Pretendo supports can be found [here](https://wiki.pretendo.zip/game-support-status).

::: info

Para obtener información sobre cómo usar las diversas características de GodMode9, consulta las páginas [Uso GodMode9](godmode9-usage) y [Volcar Títulos y Cartuchos de Juego](dumping-titles-and-game-cartridges).

:::
