# Formatando o cartão SD (Windows)

## Leitura Obrigatória

Essa é uma seção adicional para a formatação de um cartão SD para fazê-lo funcional com o 3DS.

Se o 3DS já reconhece o cartão SD, este guia não é necessário.

Esta página é destinada apenas a usuários do Windows. Caso você não esteja usando Windows, acesse a página [Formatando SD (Linux)](formatting-sd-\(linux\)) ou [Formatando SD (Mac)](formatting-sd-\(mac\))

## O que é necessário

- a versão mais recente do [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
- **Apenas para cartões SD de 64GB ou maior:** A última versão do [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm)

## Instruções

### Seção I - SD Card Formatter

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

13. Se o cartão SD for de 32GB ou menor e possuia quaisquer arquivos e pastas nele antes da formatação, copie tudo de volta do seu computador

::: info

Você acabou de formatar seu cartão SD se ele for **de 32GB ou menor.**

:::

### Seção II - guiformat (APENAS para 64GB ou maior)

1. Execute `guiformat.exe`

2. Selecione a letra da unidade do seu cartão SD em "Drive"

   ::: danger

   Certifique-se de escolher a letra da unidade correta, caso contrário você pode apagar a unidade errada acidentalmente!

   :::

3. Selecione um tamanho para "Allocation unit size"
   - Se o cartão SD for de 64GB, escolha 32768
   - Se o cartão SD for maior que 64GB, escolha 65536

4. Digite qualquer coisa para "Volume label"

5. Certifique-se de que "Quick Format" está selecionado

6. Clique em "Start"

7. Clique em "OK"

8. Aguarde a conclusão da formatação

9. Clique em "Close"

10. Se o cartão SD tinha quaisquer arquivos ou pastas nele, copie tudo de volta para o SD do seu computador

## Troubleshooting

- guiformat mostra o erro "Failed to open device: GetLastError()=32"
  - Feche tudo o que estiver usando o cartão SD, como qualquer janela do Explorador de Arquivos.
  - Se este problema persistir, tente reformatar o cartão para NTFS no Gerenciador de Arquivos, feche essa janela quando terminar, e tente novamente o processo do guiformat.

- guiformat mostra o erro "GetLastError()=1117"
  - A chave contra proteção de escrita no cartão SD pode estar [habilitada](/images/sdlock.png). A chave deve ser virada para cima para permitir a escrita de arquivos no cartão SD (incluindo formatação).

- O cartão SD permanece não sendo detectado pelo console, ou continua mostrando a capacidade errada após a formatação
  - Seu cartão SD pode estar particionado ou ter espaço não alocado. Siga as instruções [aqui](https://wiki.hacks.guide/wiki/SD_Clean/Windows) para reformatar o seu cartão SD.
