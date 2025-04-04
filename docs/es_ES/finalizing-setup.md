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

La siguiente captura de pantalla indica la estructura básica que debe tener la tarjeta SD para poder seguir esta página. You may have extra files or folders on your SD card, depending on your previous setup or the method that you followed.

::: info

![](/images/screenshots/finalizing-root-layout.png)

:::

::: info

![](/images/screenshots/finalizing-luma-payloads.png)

:::

### Section II - Updating the System

In this section, you will update your system to the latest version, which is safe to do with custom firmware.

<!--@include: ./_include/sysupdate.md -->

### Section III - RTC and DSP setup

In this section, you will sync your 3DS internal clock with the actual time and dump the sound firmware (which is necesssary for some homebrew software to use sound properly).

1. Press (Left Shoulder) + (D-Pad Down) + (Select) at the same time to open the Rosalina menu
    - If one of these buttons is broken, download [config.ini](/assets/config.ini) and put it in your `luma` folder, replacing the existing one. This will change the Rosalina menu key combination to (X) + (Y)
2. Select "Miscellaneous options"
3. Select "Dump DSP firmware"
4. Press (B) to continue
5. Select "Nullify user time offset"
6. Press (B) to continue
7. Press (B) to return to the Rosalina main menu
8. Press (B) to exit the Rosalina menu

### Section IV - Setup Script

In this section, you will use a series of scripts to automate homebrew installation, SD card cleanup, and system file backup.

1. Apaga la consola
2. Press and hold (X), and while holding (X), power on your console. This will launch the Finalizing Setup Helper
    - If you boot to the HOME Menu, your `payloads` folder may be incorrectly spelled or in the wrong location
    - If you encounter an error, consult the [troubleshooting](troubleshooting-finalizing-setup) page
3. If the Helper was successful, your console will boot into GodMode9
    - From this point forward, you can access GodMode9 by holding START while powering on your console
4. If you are prompted to create an essential files backup, press (A) to do so, then press (A) to continue once it has completed
5. If you are prompted to fix the RTC date&time, press (A) to do so, then set the date and time, then press (A) to continue
6. Presiona el botón (HOME) para abrir el menú de acciones
7. Select "Scripts..."
8. Select "finalize"
9. Follow the prompts in the script, answering any questions that you are asked
    - If you see "Information #05: No title database", press (A) to import and enter the buttons on-screen to proceed
    - If you encounter an error, follow the instructions in the error message or consult the [troubleshooting](troubleshooting-finalizing-setup) page
10. Once the script says "Setup complete!", press (A) to power off the device
    - If you do NOT see the message "Setup complete!", the script was not successful and you will need to redo this section from Step 3
11. Inserta la tarjeta SD en tu computadora
12. Copy the `/gm9/backups/` folder to a safe location on your computer
    - This folder contains critical file backups and should be backed up to multiple locations (i.e. cloud storage) if possible
    - The two SysNAND files are your NAND backup and can be used to revert your console to a working state if it is bricked by a software issue
    - The `essential.exefs` file contains your console's system-unique files and can be used to recover your data in the event of a hardware failure
13. If you still have them, delete the two `SysNAND` files from the `/gm9/backups/` folder from your SD card
    - The `essential.exefs` file is small and may be kept on your SD card for ease of access

___

::: tip

You're done! Custom firmware is now fully configured on your console.

:::

::: info

Trying to figure out what to do with your newly modded device? Visit [our wiki](https://wiki.hacks.guide/wiki/3DS:Things_to_do)!

:::

### Information and Notes

::: info

Here are some key combos that you should know:

- Holding (Select) on boot will launch the Luma3DS configuration menu.
- Holding (Start) on boot will launch GodMode9, or if you have multiple payloads in `/luma/payloads/`, the Luma3DS chainloader.
- By default, pressing (Left Shoulder) + (Down D-Pad) + (Select) while in 3DS mode will open the Rosalina menu, where you can check system information, take screenshots, enable cheats, and more. This can be changed from the Rosalina menu.
- Holding (Start) + (Select) + (X) on boot will make the notification LED show a color for debug purposes. See the [changelog](https://github.com/SciresM/boot9strap/releases/tag/1.4) for a list.

:::

::: info

For information on using GodMode9's various features, check out the [GodMode9 Usage](godmode9-usage) and [Dumping Titles and Game Cartridges](dumping-titles-and-game-cartridges) pages.

:::
