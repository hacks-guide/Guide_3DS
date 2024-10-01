# Formatando o cartão SD (Windows)

## Leitura Obrigatória

Essa é uma seção adicional para a formatação de um cartão SD para fazê-lo funcional com o 3DS.

Se o 3DS já reconhece o cartão SD, este guia não é necessário.

Esta página é destinada apenas a usuários do Windows. Caso você não esteja usando Windows, acesse a página [Formatando SD (Linux)](formatting-sd-\(linux\)) ou [Formatando SD (Mac)](formatting-sd-\(mac\))

## O que é necessário

- **Para cartões SD de 32GB ou menores:** a versão mais recente do [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
- **Para cartões SD de 64GB ou maiores:** A versão mais recente do [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm)

## Instruções (32GB ou menor)

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

## Instruções (64GB ou maior)

1. Insira o cartão SD no seu computador

2. Se o cartão SD tiver quaisquer arquivos ou pastas nele, copie tudo para uma pasta no seu computador

3. Execute `guiformat.exe`

4. Selecione a letra da unidade do seu cartão SD para "Drive"

   ::: danger

   Certifique-se de escolher a letra da unidade correta, caso contrário você pode apagar a unidade errada acidentalmente!

   :::

5. Selecione um tamanho para "Allocation unit size"
   - Se o cartão SD for de 64GB, selecione 32768
   - Se o cartão SD for maior que 64GB, selecione 65536

6. Digite qualquer coisa para "Volume label"

7. Certifique-se de que "Quick Format" está selecionado

8. Clique em "Start"

9. Clique em "OK"

10. Aguarde a conclusão da formatação

11. Clique em "Close"

12. Se o cartão SD tinha quaisquer arquivos ou pastas nele, copie tudo de volta para o SD do seu computador

## Troubleshooting

- guiformat mostra o erro "Failed to open device: GetLastError()=32"
  - Feche tudo que possa estar usando o cartão SD, como qualquer janela do Explorador de Arquivos.
  - Se o problema persistir, tente reformatar o cartão SD para NTFS pelo Explorador de Arquivos, feche a janela após concluído, e tente novamente o processo do guiformat.

- guiformat mostra o erro "GetLastError()=1117"
  - A trava de proteção contra gravação pode estar [habilitada](/images/sdlock.png). A chave deve ser virada para cima para permitir a manipulação de arquivos no cartão SD (incluindo formatação).

- O cartão SD permanece não sendo detectado pelo console, ou continua mostrando a capacidade errada após a formatação
  - Seu cartão SD pode estar particionado ou ter espaço não alocado. Siga as instruções [aqui](https://wiki.hacks.guide/wiki/SD_Clean/Windows) para reformatar o seu cartão SD.
