# Formatear una tarjeta SD (Linux)

## Lectura requerida

Esta es una sección adicional para formatear tu tarjeta SD de manera que funcione con la 3DS.

Si la 3DS ya reconoce la tarjeta SD, entonces no es necesario seguir esta guía.

Esta página es sólo para usuarios de Linux. Si no eres usuario de Linux, revisa estas páginas: [Formatear una tarjeta SD (Windows)](formatting-sd-(Windows)), o [Formatear una tarjeta SD (Mac)](formatting-sd-(mac)).

## Instrucciones

1. Asegúrate de que la tarjeta SD **no** esté insertada
2. Inicia la terminal de Linux
3. Escribe `watch "lsblk"`
4. Inserta la tarjeta SD en tu computadora
5. Observa el resultado. Debería coincidir en gran parte con esto:
   ```
   NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
   mmcblk0     179:0    0   3,8G  0 disk
   └─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
   ```
6. Toma nota del nombre del dispositivo. En nuestro ejemplo anterior, era `mmcblk0p1`
   - Si `RO` está establecido en 1, asegúrate que el interruptor de bloqueo de escritura de la tarjeta SD no está deslizado hacia abajo
7. Presiona CTRL + C para salir del menú
8. Escribe lo siguiente según tu tarjeta SD:
   - 2GB o menos: `sudo mkfs.fat /dev/(nombre del dispositivo) -s 64 -F 16`
     - Esto crea una sola partición FAT16 con un tamaño de clúster de 32 KB en la tarjeta SD
   - Entre 4GB y 128GB inclusive: `sudo mkfs.fat /dev(nombre del dispositivo) -s 64 -F 32`
     - Esto crea una sola partición FAT32 con un tamaño de clúster de 32 KB en la tarjeta SD
   - 128GB o más: `sudo mkfs.fat /dev/(nombre del dispositivo) -s 128 -F 32`
     - Esto crea una sola particion FAT32 con un tamaño de clúster de 64 KB en la tarjeta SD

## Resolución de Problemas

- La tarjeta SD sigue sin ser detectada por la consola o muestra la capacidad incorrecta tras formatear
  - Tal vez la tarjeta SD esté fragmentada en particiones, o tenga espacio sin asignar. Sigue [estas instrucciones](https://wiki.hacks.guide/wiki/SD_Clean/Linux) para formatear de nuevo la tarjeta SD.
