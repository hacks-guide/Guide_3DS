# Actualizar B9S

## Lectura requerida

Esta página es para ayudar a los usuarios actuales de boot9strap a actualizar su instalación a la última versión.

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
4. Copia `SafeB9SInstaller.firm` desde el `.zip` de SafeB9SInstaller a la raíz de tu tarjeta SD y renómbralo a `boot.firm`
5. Reinserta la tarjeta SD en la consola

    ::: info

    ![](/images/screenshots/updateb9s-root-layout.png)

    :::

### Sección II - Instalar boot9strap

1. Enciende tu consola
    - Esto debería iniciar SafeB9SInstaller automáticamente
2. Cuando se te pida, introduce la combinación de botones mostrada para instalar boot9strap
    - Si algún paso en la pantalla inferior tiene el texto en color rojo, y no se te pide que introduzcas una combinación de botones, [sigue la guía de resolución de problemas](troubleshooting-updating-b9s)
3. Una vez terminado, mantén pulsado el botón de apagado para apagar la consola
    - Tu consola al iniciar siempre ejecutará SafeB9SInstaller hasta que completes la siguiente sección

### Section III - Actualizar Luma3DS

1. Inserta la tarjeta SD en tu computadora
2. Copia todo lo que está dentro del `.zip` de Luma3DS a la raíz de tu tarjeta SD, reemplazando cualquier archivo existente
3. Reinserta la tarjeta SD en la consola
4. Enciende tu consola
5. Si tu consola ha arrancado al menú de configuración de Luma3DS, presiona (Start) para guardar y reiniciar
    - En el menú de configuración de Luma3DS están los ajustes para el custom firmware Luma3DS. Muchos de estos ajustes pueden ser útiles para la personalización o depuración
    - Para los fines de esta guía, estos ajustes se dejarán en la configuración predeterminada

___

::: tip

Continúa a [Finalizar instalación](finalizing-setup)

:::
