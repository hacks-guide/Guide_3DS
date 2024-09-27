# Instalando boot9strap (SSLoth-Browser)

:::details Technical Details (optional)

Para aproveitar do exploit do aplicativo do navegador, precisamos ignorar a verificação da versão do navegador, que é projetado para impedir o uso do navegador sem atualizar para a versão mais recente do sistema.

Um servidor proxy público está disponível, o que, com a ajuda do exploit SSLoth, pode ignorar esta verificação.

Assim que o bypass estiver ativo, uma página de exploit estará acessível para o resto do trabalho.

Para detalhes técnicos sobre os exploits que você usará nesta página, veja [aqui](https://github.com/MrNbaYoh/3ds-ssloth) (SSLoth) e [aqui](https://github.com/TuxSH/universal-otherapp) (universal-otherapp).

:::

## Compatibility Notes

O SSLoth permite que os usuários na versão 11.13.0 e inferior ignorem a verificação da versão do navegador, permitindo o uso de novo browserhax ou old-browserhax (compatível com as versões 11.4.0 através de 11.13.0 em todas as regiões), que podem então ser usados em conjunto com aplicativos universal-otherapp.

## What You Need

- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
- The latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

## Instructions

### Section I - Prep Work

Nesta seção, você irá copiar os arquivos necessários para acionar ambos browserhax e universal-otherapp.

1. Desligue seu console
2. Insira o cartão SD no seu computador
3. Copie `otherapp.bin` para a raiz do seu cartão SD e renomeie-o para `arm11code.bin`
   - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
   - If you do not see the `.bin` extension, do not add it to the end of the filename
4. Copie `boot.firm` e `boot.3dsx` do `.zip` do Luma3DS para a raiz do seu cartão SD
5. Crie uma pasta chamada `boot9strap` na raiz do seu cartão SD
6. Copie o `boot9strap.firm` e o `boot9strap.firm.sha` do `.zip` do boot9strap para a pasta `/boot9strap/` no seu cartão SD
7. Copie `SafeB9SInstaller.bin` do `.zip` do SafeB9SInstaller para a raiz do seu cartão SD
8. Reinsira o cartão SD no seu console
9. Ligue o seu console

### Section II - SSLoth

Nesta seção, você vai alterar suas configurações de conexão Internet para usar uma rede proxy criada para ignorar a verificação da versão do navegador, permitindo que o navegador funcione sem uma atualização do sistema. Isso permitirá que você acesse a página de exploit do navegador na próxima seção.

<!--@include: ./_include/addproxy.md -->

1. Pressione "Voltar" duas vezes e, em seguida, "Fechar" para voltar ao Menu HOME

### Section III - Launching SafeB9SInstaller

Nesta seção, você vai visitar a página de exploit do navegador, que usará ouniversal-otherapp para iniciar o instalador boot9strap (custom firmware).

1. No Menu HOME, pressione os gatilhos da Esquerda e da Direita ao mesmo tempo para abrir a câmera
   - If you are unable to open the camera, open the Internet Browser and manually type the URL instead (`https://zoogie.github.io/web/nbhax/`)
2. Toque no botão do código QR e escaneie [este código QR](http://api.qrserver.com/v1/create-qr-code/?color=000000\&bgcolor=FFFFFF\&data=https%3A%2F%2Fzoogie.github.io%2Fweb%2Fnbhax\&qzone=1\&margin=0\&size=400x400\&ecc=L)
   - If you get a crash or an error code, [follow this troubleshooting guide](troubleshooting#installing-boot9strap-ssloth-browser)
   - If you get a security certificate warning, press (A) to allow the connection
3. Toque no botão "PROCEED TO HAXX"
4. Se o exploit for bem-sucedido, você terá entrado no SafeB9SInstaller
   - If you get an error, [follow this troubleshooting guide](troubleshooting#installing-boot9strap-ssloth-browser)

### Section IV - Installing boot9strap

Nesta seção, você instalará custom firmware no seu console.

1. Quando solicitado, aperte a sequência de botões fornecida na tela superior para instalar o boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
2. Quando concluído, aperte (A) para reiniciar o seu console

<!--@include: ./_include/configure-luma3ds.md -->

### Section V - Restoring default proxy

<!--@include: ./_include/rmproxy.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
