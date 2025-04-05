# Formatear una tarjeta SD (Windows)

## Lectura requerida

Esta es una sección adicional para formatear tu tarjeta SD de manera que funcione con la 3DS.

Si la 3DS ya reconoce la tarjeta SD, entonces esta guía no es necesaria.

Esta página es solo para usuarios de Windows. Si no estas usando Windows, revisa las páginas [Formatear una tarjeta SD (Linux)](formatting-sd-\(linux\)), o [Formatear una tarjeta SD (Mac)](formatting-sd-\(mac\)).

## Lo que necesitas

- **Para tarjetas SD de cualquier tamaño**: La última versión de [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
- **Para tarjetas SD de 64GB o más:** La última versión de [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm)

## Instrucciones

### Sección I - SD Card Formatter

1. Inserta la tarjeta SD en tu computadora

2. Si la tarjeta SD tiene archivos o carpetas en ella, copia todo a una carpeta de respaldo en tu computadora

3. Ejecuta `SD Card Formatter Setup` (el archivo `.exe`) dentro del archivo `.zip` con permisos de administrador e instala el programa

4. Ejecuta `SD Card Formatter` desde el menú Inicio

5. Selecciona la letra de la unidad de tu tarjeta SD en el campo de "Select card"

    ::: danger

    ¡Asegúrate de elegir la unidad con la letra correcta, de lo contrario podrías borrar el contenido de otra unidad por error!

    :::

6. Escribe el nombre que quieras en "Volume label"

7. Asegúrate de que la opción "Quick Format" está seleccionada

8. Haz click en "Format"

9. Haz clic en "OK"

10. Espera a que termine el formateo

11. Haz clic en "OK"

12. Cierra SD Card Formatter

13. Si la tarjeta SD es de 32GB o menos y contenía archivos y carpetas antes del formateo, copia todo de vuelta desde el respaldo en tu computadora

::: info

Has terminado de formatear tu tarjeta SD (si es de **32GB o menos**).

:::

### Sección II - guiformat (SOLO para 64GB o más)

1. Ejecuta `guiformat.exe`

2. Selecciona la letra de la unidad de tu tarjeta SD en el campo "Drive"

    ::: danger

    ¡Asegúrate de elegir la unidad con la letra correcta, de lo contrario podrías borrar el contenido de otra unidad por error!

    :::

3. Selecciona un tamaño apropiado en el campo "Allocation unit size"
    - Si la tarjeta SD es de 64GB, elige 32768
    - Si la tarjeta SD es mayor a 64GB, elige 65536

4. Escribe el nombre que quieras en "Volume label"

5. Asegúrate de que la opción "Quick Format" está seleccionada

6. Haz clic en "Start"

7. Haz clic en "OK"

8. Espera a que termine el formateo

9. Haz clic en "Cerrar"

10. Si la tarjeta SD tenía archivos o carpetas en ella antes del formateo, copia todo de vuelta desde el respaldo en tu computadora

## Resolución de Problemas

- guiformat muestra el error "Failed to open device: GetLastError()=32"
    - Cierra todos los programas que puedan estar usando la tarjeta SD, tales como ventanas del Explorador de Windows.
    - Si el problema persiste, intenta formatear la tarjeta en formato NTFS en el Explorador de archivos. Cierra la ventana cuando termine el proceso y vuelve a intentar el proceso de guiformat.

- guiformat muestra el error "GetLastError()=1117"
    - El interruptor de protección contra escritura de tu tarjeta SD podría estar [activado](/images/sdlock.png). El interruptor debe ser invertido hacia arriba para permitir escritura en la tarjeta SD (y el formateo).

- La tarjeta SD sigue sin ser detectada por la consola o muestra la capacidad incorrecta tras formatear
    - La tarjeta SD quizá tenga múltiples particiones, o espacio sin asignar. Sigue las instrucciones [aquí](https://wiki.hacks.guide/wiki/SD_Clean/Windows) para cambiar de formato la tarjeta SD.
