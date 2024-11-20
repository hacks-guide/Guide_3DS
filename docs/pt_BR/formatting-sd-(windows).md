# Formatando o cartão SD (Windows)

## Leitura Obrigatória

Essa é uma seção adicional para a formatação de um cartão SD para fazê-lo funcional com o 3DS.

Se o 3DS já reconhece o cartão SD, este guia não é necessário.

Esta página é destinada apenas a usuários do Windows. Caso você não esteja usando Windows, acesse a página [Formatando SD (Linux)](formatting-sd-\(linux\)) ou [Formatando SD (Mac)](formatting-sd-\(mac\))

## O que é necessário

- the latest version of [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
- **For SD cards 64GB or larger only:** The latest version of [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm)

## Instruções

### Section I - SD Card Formatter

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

13. If the SD card is 32GB or smaller and had any files and folders on it before the format, copy everything back from your computer

::: info

You're done formatting your SD card if it's **32GB or smaller.**

:::

### Section II - guiformat (ONLY for 64GB or larger)

1. Run `guiformat.exe`

2. Select your SD card's drive letter for "Drive"

   ::: danger

   Certifique-se de escolher a letra da unidade correta, caso contrário você pode apagar a unidade errada acidentalmente!

   :::

3. Select a size for "Allocation unit size"
   - If the SD card is 64GB, choose 32768
   - If the SD card is larger than 64GB, choose 65536

4. Digite qualquer coisa para "Volume label"

5. Certifique-se de que "Quick Format" está selecionado

6. Click "Start"

7. Clique em "OK"

8. Aguarde a conclusão da formatação

9. Clique em "Close"

10. Se o cartão SD tinha quaisquer arquivos ou pastas nele, copie tudo de volta para o SD do seu computador

## Troubleshooting

- guiformat shows the error "Failed to open device: GetLastError()=32"
  - Close everything that may be using the SD card, such as any File Explorer windows.
  - If this issue persists, try reformatting the card to NTFS in File Explorer, close that window when it's done, and re-attempt the guiformat process.

- guiformat shows the error "GetLastError()=1117"
  - Your SD card write-protection switch may be [enabled](/images/sdlock.png). The lock must be flipped upwards to allow writing to the SD card (including formatting).

- O cartão SD permanece não sendo detectado pelo console, ou continua mostrando a capacidade errada após a formatação
  - Seu cartão SD pode estar particionado ou ter espaço não alocado. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Windows) to reformat your SD card.
