# Formatando o cartão SD (Mac)

## Leitura Obrigatória

Essa é uma seção adicional para a formatação de um cartão SD para fazê-lo funcional com o 3DS.

Se o 3DS já reconhece o cartão SD, este guia não é necessário.

::: warning

Esta página é destinada apenas a usuários do Mac. If you are not on Mac, check out the [Formatting SD (Windows)](formatting-sd-(windows)) or [Formatting SD (Linux)](formatting-sd-(linux)) pages.

:::

## Instruções

### OS X El Capitan (10.11) and later

1. Insira o cartão SD no seu computador

2. If the SD card has any files and folders on it, copy everything to a folder on your computer

3. Run the Disk Utility app

4. In the top-left "View" menu, choose "Show All Devices"

5. Select your SD card in the left panel

   ::: danger

   Make sure you choose the correct device, otherwise you might accidentally erase the wrong drive!

   :::

6. Click "Erase" at the top

7. Enter anything for "Name"

8. Ensure that "Format" is set to "MS-DOS (FAT)"

9. Ensure that "Scheme" is set to "Master Boot Record"
   - If "Scheme" does not appear, click "Cancel" and make sure to choose the device instead of a volume

10. Click "Erase"

11. Wait for the format to finish

12. Click "Close"

13. If the SD card had any files and folders on it before the format, copy everything back from your computer

### OS X Yosemite (10.10) and earlier

1. Insira o cartão SD no seu computador

2. If the SD card has any files and folders on it, copy everything to a folder on your computer

3. Run the Disk Utility app

4. Select your SD card in the left panel

   ::: danger

   Make sure you choose the correct device, otherwise you might accidentally erase the wrong drive!

   :::

5. Click "Partition" at the top
   - If "Partition" does not appear, make sure to choose the device instead of a volume

6. Ensure that "Partition Layout" is set to "1 Partition"

7. Enter anything for "Name"

8. Ensure that "Format" is set to "MS-DOS (FAT)"

9. Click "Options" below the partition table

10. Choose "Master Boot Record"

11. Click "OK"

12. Click "Apply"

13. Click "Partition"

14. Wait for the format to finish

15. Close Disk Utility

16. If the SD card had any files and folders on it before the format, copy everything back from your computer

## Troubleshooting

- O cartão SD permanece não sendo detectado pelo console, ou continua mostrando a capacidade errada após a formatação
  - Seu cartão SD pode estar particionado ou ter espaço não alocado. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Mac) to reformat your SD card.