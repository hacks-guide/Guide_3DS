# Instalando boot9strap (MSET9 Play Store)

:::details Detalhes Técnicos (opcional)

[MSET9](https://github.com/zoogie/MSET9) é um exploit para o aplicativo de Configurações do Sistema desenvolvido por [zoogie](https://github.com/zoogie). Ele faz uso de um erro onde a ID1 (a pasta de 32 caractéres dentro da pasta Nintendo 3DS, dentro de ID0) pode ter _qualquer_ nome desde que seja composto por 32 caractéres. Fazer uma sequência de ações específicas resultará no console executando instruções que estão codificadas no nome da pasta da ID1, que pode ser utilizada para garantir controle total sobre o 3DS.

:::

## Notas de Compatibilidade

::: warning

Esta página requer um celular/tablet Android ou um Chromebook. Se você tiver um computador executando Windows, macOS ou Linux, siga [Instalando boot9strap (MSET9 CLI)](installing-boot9strap-\(mset9-cli\)) em vez disso. Se você não tiver acesso a nenhum desses dispositivos, será necessário usar um [método alternativo](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits).

:::

::: warning

Em telefones/tablets Android, a versão mínima do Android é 6.0 (Marshmallow).

:::

## O que é necessário

- Os aplicativos a seguir serão instalados pela Google Play Store:
  - [MSET9 Installer](https://play.google.com/store/apps/details?id=moe.saru.homebrew.console3ds.mset9_installer_android)
  - [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver)
  - Se você desejar, você pode fazer sideloading destes aplicativos em vez disso
- A versão mais recente do [MSET9](https://github.com/zoogie/MSET9/releases/latest) (o arquivo Release `.zip`)

## Instruções

### Seção I - Preparação

Nesta seção, você irá preparar os dados no seu cartão SD necessários para que o exploit MSET9 possa ser ativado.

1. Insira o cartão SD no seu telefone/tablet/computador

2. Copie tudo do Release `.zip` para a raíz do seu cartão SD, substituindo quaisquer arquivos existentes:

   - Abra o ZArchiver
   - Se solicitado, [permita ao ZArchiver acessar os arquivos do seu cartão SD](/images/screenshots/mset9/zarchiver-allow.png)
   - Navegue para onde o Release `.zip` do MSET9 está localizado ([provavelmente na pasta de Downloads](/images/screenshots/mset9/zarchiver-zip-location.png))
   - Selecione o Release `.zip`, então selecione "Extract..." ([imagem](/images/screenshots/mset9/zarchiver-extract-1.png))
   - Navegue para o seu cartão SD, então toque o ícone azul de 'seta para baixo' para extrair os arquivos para a raiz do seu cartão SD ([imagem](/images/screenshots/mset9/zarchiver-extract-2.png))

   ::: info

   ![](/images/screenshots/mset9/mset9-root-layout-android.png)

   :::

3. Execute o [aplicativo MSET9 Installer](/images/screenshots/mset9/mset9-setup-android.png)

4. Toque em `Select "Nintendo 3DS" Folder` e, em seguida, navegue até sua pasta `Nintendo 3DS` no seu cartão SD ([imagem](/images/screenshots/mset9/select-mset9-folder-1.png))

5. Uma vez dentro da pasta `Nintendo 3DS`, toque em "Use this folder", depois "Allow" se perguntado ([imagem](/images/screenshots/mset9/select-mset9-folder-2.png))

6. If `Setup MSET9` is [highlighted](/images/screenshots/mset9/setup-mset9-highlighted.png), proceed to the next step
   - If you get an error, you need to resolve before you can use MSET9. Refer to the [troubleshooting](troubleshooting-mset9)

7. Tap on `Setup MSET9` to begin the process of setting up MSET9

8. After reviewing the disclaimer, tap on `Confirm` to accept it

9. Tap on the photo corresponding to your console model, then at the bottom, pick your current firmware version

10. If you see the prompt of `Hax ID1 Created`, tap OK to continue
    - If you get an error, check the [troubleshooting](troubleshooting-mset9), then try again
    - Your 3DS will appear to lose most data / no user-installed apps on HOME Menu. This is expected. Your data will come back at a later step

11. Reinsira o cartão SD no seu console

12. Ligue o seu console

13. Abra o Mii Maker

14. Espere seu console chegar a tela "Bem-vindo ao Mii Maker", então saia do Mii Maker
    - Você verá [esta tela](/images/screenshots/mset9/mii-extdata.png), o que indica que os dados necessários foram criados
    - If you just reach the normal Mii Maker screen, exit Mii Maker and return to the HOME Menu

15. Inicie as Configurações do Sistema e navegue para `Gerenciador de Dados` -> `Nintendo 3DS` -> `Software` -> Apagar ([imagem](/images/screenshots/database-reset.jpg))
    - Isso não irá apagar nenhum dos seus dados

16. Desligue seu console apertando o botão POWER e depois toque em Desligar na tela inferior

17. Insira o cartão SD no seu telefone/tablet/computador

18. The MSET9 Installer application should automatically check if you have done previous steps properly
    - It may take a few seconds for the app to detect the SD card and react
    - If it doesn't check automatically, tap `Check MSET9 status` to check manually
    - If you get an error, check the [troubleshooting](troubleshooting-mset9), then try again

19. If the check passed, you'll see `Inject trigger file` become [highlighted](/images/screenshots/mset9/inject-trigger-highlighted.png) and you can continue to the next step. **Do not inject trigger yet.** Put your phone/tablet/computer aside for now

20. Reinsira o cartão SD no seu console

### Seção II - MSET9

Nestã seção, você vai attivar o MSET9 para iniciar o SafeB9SInstaller (o instalador de custom firmware).

::: danger

Estas instruções devem ser seguidas **EXATAMENTE** como estão, então confira TUDO que você está fazendo para evitar erros!

:::

1. Ligue seu console, garantindo que as Configurações do Sistema estejam selecionadas
   - Se a Configuração do Console não está selecionada, **[posicione o cursor](/images/screenshots/mset9/hover-settings.png)** sob o ícone da Configuração do Console usando o D-Pad, desligue seu console e ligue-o novamente
2. Pressione (A) para iniciar as Configurações do Sistema
3. Navegue para `Gerenciamento de Dados` -> `Nintendo 3DS` -> `Extra Data` ([imagem](/images/screenshots/mset9/settings-extdata.png))
4. **Não pressione nenhum botão ou toque na tela**
5. **Com o console AINDA LIGADO, e sem pressionar nenhum dos botões ou a tela de toque**, remova seu cartão SD do seu console
   - O menu atualizará e dirá que nenhum cartão SD foi inserido, o que é esperado
6. Insira o cartão SD no seu telefone/tablet/computador
7. Abrir o aplicativo MSET9 Installer
8. Tap `Inject trigger file`
   - The button should become greyed out and `Remove trigger file` become [highlighted](/images/screenshots/mset9/remove-trigger-highlighted.png)
9. Reinsira o cartão SD no seu console **sem pressionar nenhum botão ou tocar na tela**
10. Se o exploit for bem-sucedido, você terá entrado no SafeB9SInstaller
    - If you get a red screen or the console gets stuck on a loading screen, follow the [troubleshooting guide](troubleshooting-mset9)

### Seção III - Instalando boot9strap

Nesta seção, você instalará custom firmware no seu console.

1. Quando solicitado, aperte a sequência de botões fornecida na tela superior para instalar o boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-mset9)
2. Quando concluído, aperte (A) para reiniciar o seu console

<!--@include: ./_include/configure-luma3ds.md -->

### Seção IV - Removendo o MSET9

Nesta seção, você irá remover o MSET9 para evitar erros futuros. (Isto não irá remover o custom firmware que você acabou de instalar.)

::: danger

NÃO pule esta seção! Se você pular isso, os aplicativos podem ter um crash inesperado e você encontrará erros na próxima página!

:::

1. Desligue seu console
2. Insira o cartão SD no seu telefone/tablet/computador
3. Abrir o aplicativo MSET9 Installer
4. Tap `Remove MSET9`
5. Feche o aplicativo MSET9 Installer

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

Você seguiu a Seção IV (Removendo o MSET9)? Essa seção é MANDATÓRIA!

:::

::: tip

Continue para [Finalizando a Instalação](finalizing-setup)

:::
