# Instalando boot9strap (MSET9 Play Store)

:::details Technical Details (optional)

[MSET9](https://github.com/zoogie/MSET9) é um exploit para o aplicativo de Configurações do Sistema desenvolvido por [zoogie](https://github.com/zoogie). Ele faz uso de um erro onde a ID1 (a pasta de 32 caractéres dentro da pasta Nintendo 3DS, dentro de ID0) pode ter _qualquer_ nome desde que seja composto por 32 caractéres. Fazer uma sequência de ações específicas resultará no console executando instruções que estão codificadas no nome da pasta da ID1, que pode ser utilizada para garantir controle total sobre o 3DS.

:::

## Compatibility Notes

::: warning

Esta página requer um celular/tablet Android ou um Chromebook. Se você tiver um computador executando Windows, macOS ou Linux, siga [Instalando boot9strap (MSET9 CLI)](installing-boot9strap-\(mset9-cli\)) em vez disso. Se você não tiver acesso a nenhum desses dispositivos, será necessário usar um [método alternativo](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits).

:::

::: warning

Em telefones/tablets Android, a versão mínima do Android é 6.0 (Marshmallow).

:::

## What You Need

- The following applications installed from the Google Play Store:
  - [MSET9 Installer](https://play.google.com/store/apps/details?id=moe.saru.homebrew.console3ds.mset9_installer_android)
  - [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver)
  - If you wish, you can sideload these applications instead
- The latest release of [MSET9](https://github.com/zoogie/MSET9/releases/latest) (the Release `.zip` file)

## Instructions

### Section I - Prep Work

Nesta seção, você irá preparar os dados no seu cartão SD necessários para que o exploit MSET9 possa ser ativado.

1. Ligue o seu console **com o cartão SD inserido**

2. Abra o Mii Maker

3. Espere seu console chegar a tela "Bem-vindo ao Mii Maker", então saia do Mii Maker
   - You may see [this screen](/images/screenshots/mset9/mii-extdata.png), which indicates the necessary data has been created
   - If you just reach the normal Mii Maker screen, exit Mii Maker and continue to the next step

4. Desligue seu console

5. Insira o cartão SD no seu telefone/tablet/computador

6. Copie tudo do Release `.zip` para a raíz do seu cartão SD, substituindo quaisquer arquivos existentes:

   - Open ZArchiver
   - If prompted, [allow ZArchiver to access files on your SD card](/images/screenshots/mset9/zarchiver-allow.png)
   - Navigate to where the downloaded MSET9 Release `.zip` is located ([likely in the Downloads folder](/images/screenshots/mset9/zarchiver-zip-location.png))
   - Select the Release `.zip`, then select "Extract..." ([image](/images/screenshots/mset9/zarchiver-extract-1.png))
   - Navigate to your SD card, then tap the blue 'down arrow' icon to extract the files to the root of your SD card ([image](/images/screenshots/mset9/zarchiver-extract-2.png))

   ::: info

   ![](/images/screenshots/mset9/mset9-root-layout-android.png)

   :::

7. Execute o [aplicativo MSET9 Installer](/images/screenshots/mset9/mset9-setup-android.png)

8. Toque em `Select "Nintendo 3DS" Folder` e, em seguida, navegue até sua pasta `Nintendo 3DS` no seu cartão SD ([imagem](/images/screenshots/mset9/select-mset9-folder-1.png))

9. Uma vez dentro da pasta `Nintendo 3DS`, toque em "Use this folder", depois "Allow" se perguntado ([imagem](/images/screenshots/mset9/select-mset9-folder-2.png))

10. Se "Setup MSET9" estiver [destacado](/images/screenshots/mset9/setup-mset9-highlighted.png), prossiga para o próximo passo. **Não configure o MSET9 ainda.** Feche o MSET9 Installer por enquanto
    - If "Check Again" is highlighted, there is a problem that you need to resolve before you can use MSET9. Consulte o [troubleshooting](solução de problemas#installing-boot9strap-mset9)

11. Reinsira o cartão SD no seu console

12. Ligue o seu console

### Section II - MSET9

Nestã seção, você vai attivar o MSET9 para iniciar o SafeB9SInstaller (o instalador de custom firmware).

::: danger

Estas instruções devem ser seguidas **EXATAMENTE** como estão, então confira TUDO que você está fazendo para evitar erros!

:::

1. **[Paire sobre](/images/screenshots/mset9/hover-settings.png)** o ícone das Configurações do Sistema usando o D-Pad (não o selecione ainda)
2. Desligue, então ligue seu console
3. Pressione (A) para iniciar as Configurações do Sistema
4. Navegue para `Gerenciamento de Dados` -> `Nintendo 3DS` -> `Extra Data` ([imagem](/images/screenshots/mset9/settings-extdata.png))
5. **Não pressione nenhum botão ou toque na tela**
6. **Com o console AINDA LIGADO, e sem pressionar nenhum dos botões ou a tela de toque**, remova seu cartão SD do seu console
   - The menu will refresh and say that no SD card is inserted, which is expected
7. Insira o cartão SD no seu telefone/tablet/computador
8. Abrir o aplicativo MSET9 Installer
9. Toque em "Setup MSET9"
10. Toque na foto correspondente ao seu modelo de console, e então no botão correspondente à versão atual do firmware
    - If the injection was successful, all buttons should become grayed out except for "Remove MSET9"
11. Reinsira o cartão SD no seu console **sem pressionar nenhum botão ou tocar a tela de toque**
12. Se o exploit for bem-sucedido, você terá entrado no SafeB9SInstaller
    - If you get a red screen or the console gets stuck on a loading screen, follow the [troubleshooting guide](troubleshooting#installing-boot9strap-mset9)

### Section III - Installing boot9strap

Nesta seção, você instalará custom firmware no seu console.

1. Quando solicitado, aperte a sequência de botões fornecida na tela superior para instalar o boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
2. Quando concluído, aperte (A) para reiniciar o seu console

<!--@include: ./_include/configure-luma3ds.md -->

### Section IV - Removing MSET9

Nesta seção, você irá remover o MSET9 para evitar erros futuros. (Isto não irá remover o custom firmware que você acabou de instalar.)

::: danger

NÃO pule esta seção! Se você pular isso, os aplicativos podem ter um crash inesperado e você encontrará erros na próxima página!

:::

1. Desligue seu console
2. Insira o cartão SD no seu telefone/tablet/computador
3. Abrir o aplicativo MSET9 Installer
4. Toque em "Remove MSET9"
5. Feche o aplicativo MSET9 Installer

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

Você seguiu a Seção IV (Removendo o MSET9)? Essa seção é MANDATÓRIA!

:::

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
