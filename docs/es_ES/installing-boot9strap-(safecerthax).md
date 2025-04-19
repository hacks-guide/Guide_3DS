# Instalar boot9strap (safecerthax)

:::details Detalles técnicos (opcional)

:::

## Notas de compatibilidad

safecerthax es compatible con todas las consolas Old 3DS y Old 2DS en todas las regiones en versiones de sistema desde la 1.0.0 hasta la 11.14.0.

::: info

Este exploit NO funcionará en consolas New 3DS, New 3DS XL o New 2DS XL. Por favor, asegúrate de que la consola que estés modificando sea una Old 3DS, Old 3DS XL u Old 2DS antes de continuar.

:::

## Lo que necesitas

- La última versión de [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (descarga directa)
- La última versión de [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (descarga directa)
- La última versión de [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (el archivo `.zip` de Luma3DS)

## Instrucciones

### Sección I - Probar los botones laterales

En esta sección, verás si tus botones laterales funcionan en tu consola. Esto determinará si tu consola es compatible con este método.

1. Enciende tu consola
2. Una vez veas el menú HOME, presiona los botones laterales (L) y (R) al mismo tiempo
    - La cámara debería activarse
3. Apaga la consola

::: warning

Si la cámara NO ha aparecido, no puedes utilizar este método. Si este es el caso, utiliza [Instalar boot9strap (MSET9)](installing-boot9strap-\(mset9\)).

:::

### Sección II - Preparativos

En esta sección, copiarás los archivos necesarios para activar el exploit safecerthax.

1. Inserta la tarjeta SD en tu computadora
2. Copia todo lo que está dentro del `.zip` de Luma3DS a la raíz de tu tarjeta SD
    - La raíz de la tarjeta SD se refiere al primer directorio de la tarjeta, donde puedes ver la carpeta Nintendo 3DS pero no estás dentro de ella
3. Crea una carpeta llamada `boot9strap` en la raíz de la tarjeta SD
4. Copia `boot9strap.firm` y `boot9strap.firm.sha` desde el `.zip` de boot9strap a la carpeta `/boot9strap/` en la tarjeta SD
5. Copia `SafeB9SInstaller.bin` del `.zip` de SafeB9SInstaller a la raíz de tu tarjeta SD
6. Reinserta la tarjeta SD en la consola
7. Enciende tu consola

### Sección III - Proxy de safecerthax

::: warning

¡Hacer esta sección es OBLIGATORIO! No configurar el proxy podría causar que tu consola se actualice a un firmware más reciente por accidente.

:::

En esta sección, cambiarás la configuración de tu conexión a Internet para utilizar una red proxy diseñada para explotar la función Actualización del Sistema de tu consola.

<!--@include: ./_include/addproxy.md -->

1. Apaga la consola

### Sección IV - safecerthax

En esta sección, entrarás en el Modo Seguro (una característica disponible en todas las consolas de la familia 3DS) y navegarás a un menú donde safecerthax será activado, lo cual iniciará el instalador de boot9strap (custom firmware).

1. With your console still powered off, hold the following buttons: (Left Shoulder) + (Right Shoulder) + (D-Pad Up) + (A), and while holding these buttons together, power on your console
    - Keep holding the buttons until the console boots into Safe Mode (a "system update" menu)
2. Press "OK" to accept the update
    - There is no update. This is part of the exploit
3. Press "I accept" to accept the terms and conditions
4. The update will eventually fail, with the error code `003-1099`. This is intended behaviour
5. Press "OK" to close the error message
6. Si el exploit fue exitoso, habrás iniciado SafeB9SInstaller
    - If the console freezes or crashes, force power off the console, then retry this section

### Section V - Installing boot9strap

En esta sección, instalarás custom firmware en tu consola.

1. Cuando se te pida, introduce la combinación de botones mostrada para instalar boot9strap
    - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-safecerthax)
2. Una vez completado, presiona (A) para reiniciar tu consola

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

### Section VI - Restoring default proxy

<!--@include: ./_include/rmproxy.md -->

___

::: tip

Continúa a [Finalizar instalación](finalizing-setup)

:::
