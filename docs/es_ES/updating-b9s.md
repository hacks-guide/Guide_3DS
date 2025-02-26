# Updating B9S

## Lectura requerida

This page is for existing boot9strap users to update their installation of boot9strap to the latest version.

## Lo que necesitas

- La última versión de [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (descarga directa)
- La última versión de [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (descarga directa)
- La última versión de [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (el archivo `.zip` de Luma3DS)

## Instrucciones

### Sección I - Preparativos

::: info

Para todos los pasos en esta sección, sobreescribe cualquier archivo existente en tu tarjeta SD.

:::

1. Inserta la tarjeta SD en tu computadora
2. Crea una carpeta llamada `boot9strap` en la raíz de la tarjeta SD
3. Copia `boot9strap.firm` y `boot9strap.firm.sha` desde el `.zip` de boot9strap a la carpeta `/boot9strap/` en la tarjeta SD
4. Copy `SafeB9SInstaller.firm` from the SafeB9SInstaller `.zip` to the root of your SD card and rename it to `boot.firm`
5. Reinserta la tarjeta SD en la consola

   ::: info

   ![](/images/screenshots/updateb9s-root-layout.png)

   :::

### Sección II - Instalar boot9strap

1. Power on your console
   - This should automatically launch SafeB9SInstaller
2. Cuando se te pida, introduce la combinación de botones mostrada para instalar boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-updating-b9s)
3. Una vez terminado, mantén pulsado el botón de apagado para apagar la consola
   - Your console will only boot to the SafeB9SInstaller screen until the next section is completed

### Section III - Update Luma3DS

1. Inserta la tarjeta SD en tu computadora
2. Copy everything from the Luma3DS `.zip` to the root of your SD card, replacing any existing files
3. Reinserta la tarjeta SD en la consola
4. Power on your console
5. If your console has booted into the Luma3DS configuration menu, press (Start) to save and reboot
   - Luma3DS configuration menu are settings for the Luma3DS custom firmware. Many of these settings may be useful for customization or debugging
   - For the purpose of this guide, these settings will be left on default settings

___

::: tip

Continúa a [Finalizar instalación](finalizing-setup)

:::
