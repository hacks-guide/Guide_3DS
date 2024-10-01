# Formatando o cartão SD (Linux)

## Leitura Obrigatória

Essa é uma seção adicional para a formatação de um cartão SD para fazê-lo funcional com o 3DS.

Se o 3DS já reconhece o cartão SD, este guia não é necessário.

Esta página é destinada apenas a usuários do Linux. Caso você não esteja usando Linux, acesse a página [Formatando SD (Windows)](formatting-sd-\(windows\)) ou [Formatando SD (Mac)](formatting-sd-\(mac\)).

## Instruções

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
   - Se `RO` estiver com valor 1, certifique-se de que a trava do cartão SD não está para baixo
7. Pressione CRTL + C para sair do do menu
8. Digite o seguinte para o seu cartão SD:
   - 2GB ou menos: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 16`
     - Isso cria uma única partição FAT16 com tamanho de cluster 32KB no cartão SD
   - 4GB a 128GB: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 32`
     - Isso cria uma única partição FAT32 com tamanho de cluster 32KB no cartão SD
   - 128GB ou mais: `sudo mkfs.fat /dev/(nome do dispositivo acima) -s 128 -F 32`
     - Isso cria uma única partição FAT32 com tamanho de cluster 64KB no cartão SD

## Troubleshooting

- O cartão SD permanece não sendo detectado pelo console, ou continua mostrando a capacidade errada após a formatação
  - Seu cartão SD pode estar particionado ou ter espaço não alocado. Siga as instruções [aqui](https://wiki.hacks.guide/wiki/SD_Clean/Linux) para reformatar o seu cartão SD.
