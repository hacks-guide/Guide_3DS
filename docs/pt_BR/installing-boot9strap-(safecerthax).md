# Instalando boot9strap (safecerthax)

:::details Technical Details (optional)

:::

## Compatibility Notes

safecerthax é compatível com todos os consoles Old 3DS e Old 2DS de todas as regiões nas versões do sistema 1.0.0 a 11.14.0.

::: info

Este exploit não funcionará no New 3DS, New 3DS XL ou no New 2DS XL. Por favor, certifique-se de que o console que você está modificando é um Old 3DS, Old 3DS XL, ou Old 2DS antes de continuar.

:::

## What You Need

- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

## Instructions

### Section I - Hardware Button Check

Nesta seção, você verá se seus botões de gatilho estão funcionando no console. Isso determinará se o seu console é compatível com este método.

1. Ligue o seu console
2. Quando você ver o Menu HOME, pressione os botões do (Gatilho Esquerdo) e do (Gatilho Direito) ao mesmo tempo
   - The camera applet should appear
3. Desligue seu console

::: warning

Se a câmera NÃO aparecer, você não pode seguir este método. Se este for o caso, use [Instalando boot9strap (MSET9)](installing-boot9strap-\(mset9\)) ao invés disso.

:::

### Section II - Prep Work

Nesta seção, você irá copiar os arquivos necessários para acionar o exploit safecerthax.

1. Insira o cartão SD no seu computador
2. Copy everything from the Luma3DS `.zip` to the root of your SD card
   - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
3. Crie uma pasta chamada `boot9strap` na raiz do seu cartão SD
4. Copie o `boot9strap.firm` e o `boot9strap.firm.sha` do `.zip` do boot9strap para a pasta `/boot9strap/` no seu cartão SD
5. Copie `SafeB9SInstaller.bin` do `.zip` do SafeB9SInstaller para a raiz do seu cartão SD
6. Reinsira o cartão SD no seu console
7. Ligue o seu console

### Section III - safecerthax proxy

Nesta seção, você vai alterar suas configurações de conexão com a Internet para usar uma rede de proxy projetada para fazer exploit do recurso de Atualização do Sistema do seu console.

<!--@include: ./_include/addproxy.md -->

1. Desligue seu console

### Section IV - safecerthax

Nesta seção, você entrará no Modo de Segurança (um recurso disponível em todos os consoles da família 3DS) onde safecerthax será acionado, que irá iniciar você no instalador do boot9strap (custom firmware).

1. Com o seu console ainda desligado, segure os seguintes botões: (Gatilho Esquerdo) + (Gatilho Direito) + (D-Pad para Cima) + (A), e enquanto segura esses botões juntos, ligue seu console
   - Keep holding the buttons until the console boots into Safe Mode (a "system update" menu)
2. Pressione "OK" para aceitar a atualização
   - There is no update. Isto faz parte do exploit
3. Pressione "Eu aceito" para aceitar os termos e condições
4. A atualização eventualmente falhará, com o código de erro `003-1099`. Isto é intencional
5. Pressione "OK" para fechar a mensagem de erro
6. Se o exploit for bem-sucedido, você terá entrado no SafeB9SInstaller
   - If the console freezes or crashes, force power off the console, then retry this section

### Section V - Installing boot9strap

Nesta seção, você instalará custom firmware no seu console.

1. Quando solicitado, aperte a sequência de botões fornecida na tela superior para instalar o boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
2. Quando concluído, aperte (A) para reiniciar o seu console

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

### Section VI - Restoring default proxy

<!--@include: ./_include/rmproxy.md -->

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
