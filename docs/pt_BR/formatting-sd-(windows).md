# Formatting SD (Windows)

## Required Reading

Essa é uma seção adicional para a formatação de um cartão SD para fazê-lo funcional com o 3DS.

Se o 3DS já reconhece o cartão SD, este guia não é necessário.

Esta página é destinada apenas a usuários do Windows. Caso você não esteja usando Windows, acesse a página [Formatando SD (Linux)](formatting-sd-\(linux\)) ou [Formatando SD (Mac)](formatting-sd-\(mac\))

## What You Need

- **For SD cards 32GB or smaller:** the latest version of [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
- **For SD cards 64GB or larger:** The latest version of [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm)

## Instructions (32GB or smaller)

1. Insira o cartão SD no seu computador

2. Se o cartão SD tiver quaisquer arquivos ou pastas nele, copie tudo para uma pasta no seu computador

3. Execute `SD Card Formatter Setup` (o arquivo `.exe`) no arquivo `.zip` baixado com privilégios de administrador, e instale o programa

4. Execute o `SD Card Formatter` do Menu Inicial

5. Selecione a letra de unidade do seu cartão SD em "Select card"

   ::: danger

   Certifique-se de escolher a letra da unidade correta, caso contrário você pode apagar a unidade errada acidentalmente!

   :::

6. Digite qualquer coisa para "Volume label"

7. Certifique-se de que "Quick Format" está selecionado

8. Clique em "Format"

9. Clique em "OK"

10. Aguarde a conclusão da formatação

11. Clique em "OK"

12. Feche o SD Card Formatter

13. Se o cartão SD tinha quaisquer arquivos ou pastas nele, copie tudo de volta para o SD do seu computador

## Instructions (64GB or larger)

1. Insira o cartão SD no seu computador

2. Se o cartão SD tiver quaisquer arquivos ou pastas nele, copie tudo para uma pasta no seu computador

3. Execute `guiformat.exe`

4. Selecione a letra da unidade do seu cartão SD para "Drive"

   ::: danger

   Certifique-se de escolher a letra da unidade correta, caso contrário você pode apagar a unidade errada acidentalmente!

   :::

5. Selecione um tamanho para "Allocation unit size"
   - If the SD card is 64GB, choose 32768
   - If the SD card is larger than 64GB, choose 65536

6. Digite qualquer coisa para "Volume label"

7. Certifique-se de que "Quick Format" está selecionado

8. Clique em "Start"

9. Clique em "OK"

10. Aguarde a conclusão da formatação

11. Clique em "Close"

12. Se o cartão SD tinha quaisquer arquivos ou pastas nele, copie tudo de volta para o SD do seu computador

## Troubleshooting

- guiformat shows the error "Failed to open device: GetLastError()=32"
  - Close everything that may be using the SD card, such as any File Explorer windows.
  - If this issue persists, try reformatting the card to NTFS in File Explorer, close that window when it's done, and re-attempt the guiformat process.

- guiformat shows the error "GetLastError()=1117"
  - Your SD card write-protection switch may be [enabled](/images/sdlock.png). A chave deve ser virada para cima para permitir a manipulação de arquivos no cartão SD (incluindo formatação).

- SD card remains undetected by console or continues to display the wrong capacity after formatting
  - Your SD card may be partitioned or have unallocated space. Siga as instruções [aqui](https://wiki.hacks.guide/wiki/SD_Clean/Windows) para reformatar o seu cartão SD.
