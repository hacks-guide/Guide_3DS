# Instalando boot9strap (MSET9 Play Store)

:::details Detalhes Técnicos (opcional)

[MSET9](https://github.com/zoogie/MSET9) é um exploit para o aplicativo de Configurações do Sistema desenvolvido por [zoogie](https://github.com/zoogie). Ele faz uso de um erro onde a ID1 (a pasta de 32 caractéres dentro da pasta Nintendo 3DS, dentro de ID0) pode ter _qualquer_ nome desde que seja composto por 32 caractéres. Performing a specific sequence of actions results in the console executing the instructions that are encoded into the ID1 folder name, which can be used to grant full control over the console.

:::

## Notas de Compatibilidade

::: warning

Esta página requer um celular/tablet Android ou um Chromebook. Se você tiver um computador executando Windows, macOS ou Linux, siga [Instalando boot9strap (MSET9 CLI)](installing-boot9strap-\(mset9-cli\)) em vez disso. Se você não tiver acesso a nenhum desses dispositivos, será necessário usar um [método alternativo](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits).

:::

::: warning

Em telefones/tablets Android, a versão mínima do Android é 6.0 (Marshmallow).

:::

## O que é necessário

- The latest release of [MSET9](https://github.com/hacks-guide/MSET9/releases/latest) (the MSET9 `.zip` file)
- Os aplicativos a seguir serão instalados pela Google Play Store:
    - [MSET9 Installer](https://play.google.com/store/apps/details?id=moe.saru.homebrew.console3ds.mset9_installer_android)
    - [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver)
    - Se você desejar, você pode fazer sideloading destes aplicativos em vez disso

## Instruções

### Seção I - Preparação

In this section, you will prepare the MSET9 exploit by **temporarily** creating a new HOME Menu profile with almost no user data, and then setting up that profile with only the minimum data required for MSET9 to trigger. Seus dados de usuário existentes desaparecerão, mas voltarão quando você terminar esta página.

1. Insira o cartão SD no seu telefone/tablet/computador

2. Copy everything from the MSET9 `.zip` to the root of your SD card, overwriting any existing files:

    - Abra o ZArchiver
    - Se solicitado, [permita ao ZArchiver acessar os arquivos do seu cartão SD](/images/screenshots/mset9/zarchiver-allow.png)
    - Navigate to where the downloaded MSET9 `.zip` is located ([likely in the Downloads folder](/images/screenshots/mset9/zarchiver-zip-location.png))
    - Select the MSET9 `.zip`, then select "Extract..." ([imagem](/images/screenshots/mset9/zarchiver-extract-1.png))
    - Navegue para o seu cartão SD, então toque o ícone azul de 'seta para baixo' para extrair os arquivos para a raiz do seu cartão SD ([imagem](/images/screenshots/mset9/zarchiver-extract-2.png))

    ::: info

    ![](/images/screenshots/mset9/mset9-root-layout-android.png)

    :::

3. Execute o [aplicativo MSET9 Installer](/images/screenshots/mset9/mset9-setup-android.png)

4. Toque em `Select "Nintendo 3DS" Folder` e, em seguida, navegue até sua pasta `Nintendo 3DS` no seu cartão SD ([imagem](/images/screenshots/mset9/select-mset9-folder-1.png))

5. Uma vez dentro da pasta `Nintendo 3DS`, toque em "Use this folder", depois "Allow" se perguntado ([imagem](/images/screenshots/mset9/select-mset9-folder-2.png))

6. Se `Setup MSET9` estiver [destacado](/images/screenshots/mset9/setup-mset9-highlighted.png), prossiga para a próxima etapa
    - Se você receber um erro, você precisa resolvê-lo antes de usar o MSET9. Consulte o [guia de troubleshooting](troubleshooting-mset9)

7. Toque em `Setup MSET9` para começar o processo de configuração do MSET9

8. Após ler o aviso, toque em `Confirm` para aceitá-lo

9. Toque na foto correspondente ao modelo de seu console, depois na parte inferior, escolha a sua versão atual do firmware

10. Se você ver a mensagem `Hax ID1 Created`, toque em OK para continuar
    - Se você receber um erro, verifique o [guia de troubleshooting](troubleshooting-mset9), depois tente novamente
    - Your console will appear to lose most data / no user-installed apps on HOME Menu. **Isto é esperado.** Seus dados voltarão mais tarde

11. Reinsira o cartão SD no seu console

12. Ligue o seu console

13. Abra o Mii Maker

14. Espere o seu console chegar a tela de [Bem-vindo do Mii Maker](/images/screenshots/mset9/mii-welcome.png), depois saia do Mii Maker e retorne ao Menu HOME
    - Você verá [esta tela](/images/screenshots/mset9/mii-extdata.png), o que indica que os dados necessários foram criados
    - Se você apenas chegar à [tela normal](/images/screenshots/mset9/mii-existing.png) do Mii Maker, então os dados já existem. Saia do Mi Maker e volte para o Menu HOME

15. Inicie as Configurações do Sistema e navegue para `Gerenciador de Dados` -> `Nintendo 3DS` -> `Software` -> Apagar ([imagem](/images/screenshots/database-reset.jpg))
    - Isso não irá apagar nenhum dos seus dados

16. Desligue seu console apertando o botão POWER e depois toque em Desligar na tela inferior

17. Insira o cartão SD no seu telefone/tablet/computador

18. O aplicativo MSET9 Installer deve verificar automaticamente se você fez os passos anteriores corretamente
    - Pode demorar alguns segundos para o aplicativo detectar o cartão SD e reagir
    - Se o aplicativo não verificar automaticamente, toque em `Check MSET9 status` para verificar manualmente
    - Se você receber um erro, verifique o [guia de troubleshooting](troubleshooting-mset9), depois tente novamente

19. Se a verificação for aprovada, você verá `Inject trigger file` se tornar [destacado](/images/screenshots/mset9/inject-trigger-highlighted.png) e você pode continuar para a próxima etapa. **Não injete o gatilho ainda.** Coloque o seu telefone/tablet/computador de lado por enquanto

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
8. Toque em `Inject trigger file`
    - O botão deve tornar-se cinza e `Remove trigger file` irá se tornar [destacado](/images/screenshots/mset9/remove-trigger-highlighted.png)
9. Reinsira o cartão SD no seu console **sem pressionar nenhum botão ou tocar na tela**
10. Se o exploit for bem-sucedido, você terá entrado no SafeB9SInstaller
    - Se você ver uma tela vermelha ou o console ficar preso em uma tela de carregamento, siga o [guia de troubleshooting](troubleshooting-mset9)

### Seção III - Instalando boot9strap

Nesta seção, você instalará custom firmware no seu console.

1. Quando solicitado, aperte a sequência de botões fornecida na tela superior para instalar o boot9strap
    - Se um passo na tela inferior possuir texto em cor vermelha, e você não for solicitado a introduzir um combo de botões, siga o [guia de troubleshooting](troubleshooting-mset9)
2. Quando concluído, aperte (A) para reiniciar o seu console

<!--@include: ./_include/configure-luma3ds.md -->

### Seção IV - Removendo o MSET9

Nesta seção, você removerá o MSET9 para evitar problemas adicionais e restaurar seus dados do usuário (jogos, temas, etc). (Isso não irá remover o custom firmware que você acabou de instalar.)

::: danger

NÃO pule esta seção! Se você pular isso, os aplicativos podem ter um crash inesperado e você encontrará erros na próxima página!

:::

1. Desligue seu console
2. Insira o cartão SD no seu telefone/tablet/computador
3. Abrir o aplicativo MSET9 Installer
4. Toque em `Remove MSET9`
5. Feche o aplicativo MSET9 Installer

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

Você seguiu a Seção IV (Removendo o MSET9)? Essa seção é MANDATÓRIA!

:::

::: tip

Continue para [Finalizando a Instalação](finalizing-setup)

:::
