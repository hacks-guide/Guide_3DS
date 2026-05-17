# Formatting SD (Mac)

## Lectura requerida

Esta es una sección adicional para formatear tu tarjeta SD de manera que funcione con la 3DS.

Si la 3DS ya reconoce la tarjeta SD, entonces no es necesario seguir esta guía.

Esta página es sólo para usuarios de Mac. Si no eres un usuario de Mac, revisa las páginas [Formatear una tarjeta SD (Windows)](formatting-sd-(windows)), o [Formatear una tarjeta SD (Linux)](formatting-sd-(linux)).

## Instrucciones

### OS X El Capitan (10.11) y posteriores

1. Inserta la tarjeta SD en tu computadora

2. Si la tarjeta SD tiene archivos o carpetas en ella, copia todo a una carpeta de respaldo en tu computadora

3. Ejecuta la aplicación Utilidad de Discos

4. En el menú "Ver" de la parte superior izquierda, selecciona "Mostrar todos los dispositivos"

5. Selecciona tu tarjeta SD en el panel izquierdo

   ::: danger

   ¡Asegúrate de elegir el dispositivo correcto, de lo contrario podrías formatear accidentalmente la unidad equivocada!

   :::

6. Haz clic en "Borrar" en la parte superior

7. Introduce cualquier cosa como "Nombre"

8. Asegúrate de que el "Formato" esté puesto como "MS-DOS (FAT)"

9. Asegúrate de que el "Esquema" esté establecido como "Master Boot Record"
   - Si el "Esquema" no aparece, haz clic en "Cancelar" y asegúrate de elegir el dispositivo en lugar de un volumen

10. Haz clic en "Borrar"

11. Espera a que termine el formateo

12. Haz clic en "Cerrar"

13. Si la tarjeta SD tenía archivos o carpetas en ella antes del formateo, copia todo de vuelta desde la computadora

### OS X Yosemite (10.10) y anteriores

1. Inserta la tarjeta SD en tu computadora

2. Si la tarjeta SD tiene archivos o carpetas en ella, copia todo a una carpeta de respaldo en tu computadora

3. Ejecuta la aplicación Utilidad de Discos

4. Selecciona tu tarjeta SD en el panel izquierdo

   ::: danger

   ¡Asegúrate de elegir el dispositivo correcto, de lo contrario podrías formatear accidentalmente la unidad equivocada!

   :::

5. Haz clic en "Partición" en la parte superior
   - Si no aparece "Partición", asegúrate de que elegiste el dispositivo en vez de un volumen

6. Asegúrate de que el "Diseño de partición" esté establecido en "1 Partición"

7. Introduce cualquier cosa como "Nombre"

8. Asegúrate de que el "Formato" esté puesto como "MS-DOS (FAT)"

9. Haz clic en "Opciones" debajo de la tabla de particiones

10. Elige "Master Boot Record"

11. Haz clic en "OK"

12. Haz clic en "Aplicar"

13. Haz clic en "Partición"

14. Espera a que termine el formateo

15. Cierra Utilidad de Discos

16. Si la tarjeta SD tenía archivos o carpetas en ella antes del formateo, copia todo de vuelta desde la computadora

## Resolución de Problemas

- La tarjeta SD sigue sin ser detectada por la consola o muestra la capacidad incorrecta tras formatear
  - Tal vez la tarjeta SD esté fragmentada en particiones, o tenga espacio sin asignar. Sigue [estas instrucciones](https://wiki.hacks.guide/wiki/SD_Clean/Mac) para formatear de nuevo tu tarjeta SD.