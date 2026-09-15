# Formatear una tarjeta SD (Linux)

## Lectura requerida

Esta es una sección adicional para formatear tu tarjeta SD de manera que funcione con la 3DS.

Si la 3DS ya reconoce la tarjeta SD, entonces no es necesario seguir esta guía.

::: warning

Esta página es sólo para usuarios de Linux. If you are not on Linux, check out the [Formatting SD (Windows)](formatting-sd-(windows)) or [Formatting SD (Mac)](formatting-sd-(mac)) pages.

:::

::: info

Several Linux distributions may provide more user-friendly methods for formatting SD cards than this guide provides, some of which can be [found here](https://wiki.hacks.guide/wiki/Formatting_an_SD_card/Linux). In particular, if you are on SteamOS (e.g. Steam Deck, Steam Machine), check out the [Formatting SD (KDE Partition Manager)](formatting-sd-(kde)) page.

:::

## Instrucciones

1. Inserta la tarjeta SD en tu computadora
2. If the SD card has any files and folders on it, copy everything to a folder on your computer
3. Eject your SD card from your computer
4. Inicia la terminal de Linux
5. Escribe `watch "lsblk"`
6. Inserta la tarjeta SD en tu computadora
7. Observa el resultado. Debería coincidir en gran parte con esto:
   ```
   NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
   mmcblk0     179:0    0   3,8G  0 disk
   └─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
   ```
8. Toma nota del nombre del dispositivo. En nuestro ejemplo anterior, era `mmcblk0p1`
   - Si `RO` está establecido en 1, asegúrate que el interruptor de bloqueo de escritura de la tarjeta SD no está deslizado hacia abajo
9. Presiona CTRL + C para salir del menú
10. Escribe lo siguiente según tu tarjeta SD:
    - 2GB o menos: `sudo mkfs.fat /dev/(nombre del dispositivo) -s 64 -F 16`
      - Esto crea una sola partición FAT16 con un tamaño de clúster de 32 KB en la tarjeta SD
    - Entre 4GB y 128GB inclusive: `sudo mkfs.fat /dev(nombre del dispositivo) -s 64 -F 32`
      - Esto crea una sola partición FAT32 con un tamaño de clúster de 32 KB en la tarjeta SD
    - 128GB o más: `sudo mkfs.fat /dev/(nombre del dispositivo) -s 128 -F 32`
      - Esto crea una sola particion FAT32 con un tamaño de clúster de 64 KB en la tarjeta SD
11. If the SD card had any files and folders on it before the format, copy everything back from your computer

## Resolución de Problemas

- La tarjeta SD sigue sin ser detectada por la consola o muestra la capacidad incorrecta tras formatear
  - Tal vez la tarjeta SD esté fragmentada en particiones, o tenga espacio sin asignar. Sigue [estas instrucciones](https://wiki.hacks.guide/wiki/SD_Clean/Linux) para formatear de nuevo la tarjeta SD.
