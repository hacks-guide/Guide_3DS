# Formatting SD (Linux)

## Required Reading

Essa é uma seção adicional para a formatação de um cartão SD para fazê-lo funcional com o 3DS.

Se o 3DS já reconhece o cartão SD, este guia não é necessário.

Esta página é destinada apenas a usuários do Linux. Caso você não esteja usando Linux, acesse a página [Formatando SD (Windows)](formatting-sd-\(windows\)) ou [Formatando SD (Mac)](formatting-sd-\(mac\)).

## Instructions

1. Tenha certeza de que seu cartão SD **não** está inserido
2. Abra o terminal do Linux
3. Digite `watch "lsblk"`
4. Insira o cartão SD no seu computador
5. Observe a mensgem no terminal. Ela deverá ser semelhante a isso:
   ```
   NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
   mmcblk0     179:0    0   3,8G  0 disk
   └─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
   ```
6. Lembre-se do nome do dispositivo. No nosso exemplo acima, era `mmcblk0p1`
   - If `RO` is set to 1, make sure the lock switch is not slid down
7. Pressione CRTL + C para sair do do menu
8. Digite o seguinte para o seu cartão SD:
   - 2GB or lower: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 16`
     - This creates a single FAT16 partition with 32 KB cluster size on the SD card
   - 4GB - 128GB: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 32`
     - This creates a single FAT32 partition with 32 KB cluster size on the SD card
   - 128GB or higher: `sudo mkfs.fat /dev/(device name from above) -s 128 -F 32`
     - This creates a single FAT32 partition with 64 KB cluster size on the SD card

## Troubleshooting

- SD card remains undetected by console or continues to display the wrong capacity after formatting
  - Your SD card may be partitioned or have unallocated space. Siga as instruções [aqui](https://wiki.hacks.guide/wiki/SD_Clean/Linux) para reformatar o seu cartão SD.
