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

1. Ligue o seu console **com o cartão SD inserido**

2. Abra o Mii Maker

3. Espere seu console chegar a tela "Bem-vindo ao Mii Maker", então saia do Mii Maker
   - Você verá [esta tela](/images/screenshots/mset9/mii-extdata.png), o que indica que os dados necessários foram criados
   - Se você apenas chegar à tela normal do Mii Maker, saia do Mii Maker e siga para o próximo passo

4. Desligue seu console

5. Insira o cartão SD no seu telefone/tablet/computador

6. Copie tudo do Release `.zip` para a raíz do seu cartão SD, substituindo quaisquer arquivos existentes:

   - Abra o ZArchiver
   - Se solicitado, [permita ao ZArchiver acessar os arquivos do seu cartão SD](/images/screenshots/mset9/zarchiver-allow.png)
   - Navegue para onde o Release `.zip` do MSET9 está localizado ([provavelmente na pasta de Downloads](/images/screenshots/mset9/zarchiver-zip-location.png))
   - Selecione o Release `.zip`, então selecione "Extract..." ([imagem](/images/screenshots/mset9/zarchiver-extract-1.png))
   - Navegue para o seu cartão SD, então toque o ícone azul de 'seta para baixo' para extrair os arquivos para a raiz do seu cartão SD ([imagem](/images/screenshots/mset9/zarchiver-extract-2.png))

   ::: info

   ![](/images/screenshots/mset9/mset9-root-layout-android.png)

   :::

7. Execute o [aplicativo MSET9 Installer](/images/screenshots/mset9/mset9-setup-android.png)

8. Toque em `Select "Nintendo 3DS" Folder` e, em seguida, navegue até sua pasta `Nintendo 3DS` no seu cartão SD ([imagem](/images/screenshots/mset9/select-mset9-folder-1.png))

9. Uma vez dentro da pasta `Nintendo 3DS`, toque em "Use this folder", depois "Allow" se perguntado ([imagem](/images/screenshots/mset9/select-mset9-folder-2.png))

10. Se "Setup MSET9" estiver [destacado](/images/screenshots/mset9/setup-mset9-highlighted.png), prossiga para o próximo passo. **Não configure o MSET9 ainda.** Feche o MSET9 Installer por enquanto
    - Se o botão "Check Again" estiver destacado, há um problema que você precisa resolver antes de usar o MSET9. Refer to the [troubleshooting](troubleshooting-mset9)

11. Reinsira o cartão SD no seu console

12. Ligue o seu console

### Seção II - MSET9

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
   - O menu atualizará e dirá que nenhum cartão SD foi inserido, o que é esperado
7. Insira o cartão SD no seu telefone/tablet/computador
8. Abrir o aplicativo MSET9 Installer
9. Toque em "Setup MSET9"
10. Toque na foto correspondente ao seu modelo de console, e então no botão correspondente à versão atual do firmware
    - Se a injeção for bem-sucedida, todos os botões devem ficar acinzentados, exceto "Remove MSET9"
11. Reinsira o cartão SD no seu console **sem pressionar nenhum botão ou tocar na tela**
12. Se o exploit for bem-sucedido, você terá entrado no SafeB9SInstaller
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
4. Toque em "Remove MSET9"
5. Feche o aplicativo MSET9 Installer

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

Você seguiu a Seção IV (Removendo o MSET9)? Essa seção é MANDATÓRIA!

:::

::: tip

Continue para [Finalizando a Instalação](finalizing-setup)

:::
