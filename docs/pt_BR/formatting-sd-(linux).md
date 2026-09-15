# Formatando o cartão SD (Linux)

## Leitura Obrigatória

Essa é uma seção adicional para a formatação de um cartão SD para fazê-lo funcional com o 3DS.

Se o 3DS já reconhece o cartão SD, este guia não é necessário.

::: warning

Esta página é destinada apenas a usuários do Linux. If you are not on Linux, check out the [Formatting SD (Windows)](formatting-sd-(windows)) or [Formatting SD (Mac)](formatting-sd-(mac)) pages.

:::

::: info

Several Linux distributions may provide more user-friendly methods for formatting SD cards than this guide provides, some of which can be [found here](https://wiki.hacks.guide/wiki/Formatting_an_SD_card/Linux). In particular, if you are on SteamOS (e.g. Steam Deck, Steam Machine), check out the [Formatting SD (KDE Partition Manager)](formatting-sd-(kde)) page.

:::

## Instruções

1. Insira o cartão SD no seu computador
2. If the SD card has any files and folders on it, copy everything to a folder on your computer
3. Eject your SD card from your computer
4. Abra o terminal do Linux
5. Digite `watch "lsblk"`
6. Insira o cartão SD no seu computador
7. Observe a mensgem no terminal. Ela deverá ser semelhante a isso:
   ```
   NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
   mmcblk0     179:0    0   3,8G  0 disk
   └─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
   ```
8. Lembre-se do nome do dispositivo. No nosso exemplo acima, era `mmcblk0p1`
   - Se `RO` estiver com valor 1, certifique-se de que a trava do cartão SD não está para baixo
9. Pressione CRTL + C para sair do do menu
10. Digite o seguinte para o seu cartão SD:
    - 2GB ou menos: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 16`
      - Isso cria uma única partição FAT16 com tamanho de cluster 32KB no cartão SD
    - 4GB a 128GB: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 32`
      - Isso cria uma única partição FAT32 com tamanho de cluster 32KB no cartão SD
    - 128GB ou mais: `sudo mkfs.fat /dev/(nome do dispositivo acima) -s 128 -F 32`
      - Isso cria uma única partição FAT32 com tamanho de cluster 64KB no cartão SD
11. If the SD card had any files and folders on it before the format, copy everything back from your computer

## Troubleshooting

- O cartão SD permanece não sendo detectado pelo console, ou continua mostrando a capacidade errada após a formatação
  - Seu cartão SD pode estar particionado ou ter espaço não alocado. Siga as instruções [aqui](https://wiki.hacks.guide/wiki/SD_Clean/Linux) para reformatar o seu cartão SD.
