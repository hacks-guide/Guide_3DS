---
title: "Instalando boot9strap (MSET9 Play Store)"
---

{% include toc title="Tabela de Conteúdo" %}

{% capture technical_info %}
<summary><em>Detalhes técnicos (opcional)</em></summary>
[MSET9](https://github.com/zoogie/MSET9) é um exploit para o aplicativo de Configurações do Sistema desenvolvido por [zoogie](https://github.com/zoogie). Ele faz uso de um erro onde a ID1 (a pasta de 32 caractéres dentro da pasta Nintendo 3DS, dentro de ID0) pode ter *qualquer* nome desde que seja composto por 32 caractéres. Fazer uma sequência de ações específicas resultará no console executando instruções que estão codificadas no nome da pasta da ID1, que pode ser utilizada para garantir controle total sobre o 3DS.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

### Notas de Compatibilidade

Esta página requer um celular/tablet Android ou um Chromebook. Se você tiver um computador executando Windows, macOS ou Linux, siga [Instalando boot9strap (MSET9 CLI)](installing-boot9strap-(mset9-cli)) em vez disso. Se você não tiver acesso a nenhum desses dispositivos, será necessário usar um [método alternativo](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits).
{: .notice--warning}

Em telefones/tablets Android, a versão mínima do Android é 6.0 (Marshmallow).
{: .notice--warning}

### O que é necessário

* Os seguintes aplicativos instalados da Google Play Store:
    * [MSET9 Installer](https://play.google.com/store/apps/details?id=moe.saru.homebrew.console3ds.mset9_installer_android)
    * [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver)
    * Se você desejar, você pode fazer sideload destes aplicativos em vez disso
* A versão mais recente do [MSET9](https://github.com/zoogie/MSET9/releases/latest) (o arquivo `.zip`)

### Instruções

#### Seção I - Preparação

Nesta seção, você irá preparar os dados no seu cartão SD necessários para que o exploit MSET9 possa ser ativado.

1. Ligue o seu console **com o cartão SD inserido**
1. Abra o Mii Maker
1. Espere seu console chegar a tela "Bem-vindo ao Mii Maker", então saia do Mii Maker
    + Talvez você veja [esta tela](/images/screenshots/mset9/mii-extdata.png),o que indica que os dados necessários já foram criados
    + Se você só chegou na tela normal do Mii Maker, saia do Mii Maker e continue para o próximo passo
1. Desligue seu console
1. Insira o cartão SD no seu telefone/tablet/computador
1. Copie tudo do Release `.zip` para a raíz do seu cartão SD, substituindo quaisquer arquivos existentes:
    + Abra o ZArchiver
    + Se solicitado, [permita que o ZArchiver acesse arquivos do seu cartão SD](/images/screenshots/mset9/zarchiver-allow.png)
    + Navegue para onde o `.zip` do MSET9 Release está localizado ([provavelmente na pasta Downloads](/images/screenshots/mset9/zarchiver-zip-location.png))
    + Selecione o Release `.zip`, depois selecione "Extract..." ([image](/images/screenshots/mset9/zarchiver-extract-1.png))
    + Navegue até seu cartão SD, então toque o ícone azul de 'seta para baixo' para extrair os arquivos para a raíz do seu cartão SD ([image](/images/screenshots/mset9/zarchiver-extract-2. ng))

    ![MSET9 root layout](/images/screenshots/mset9/mset9-root-layout-android.png)
    {: .notice--info}

1. Execute o [aplicativo MSET9 Installer](/images/screenshots/mset9/mset9-setup-android.png)
1. Toque em `Select "Nintendo 3DS" Folder` e, em seguida, navegue até sua pasta `Nintendo 3DS` no seu cartão SD ([imagem](/images/screenshots/mset9/select-mset9-folder-1.png))
1. Uma vez dentro da pasta `Nintendo 3DS`, toque em "Use this folder", depois "Allow" se perguntado ([imagem](/images/screenshots/mset9/select-mset9-folder-2.png))
1. Se "Setup MSET9" estiver [destacado](/images/screenshots/mset9/setup-mset9-highlighted.png), prossiga para o próximo passo. **Não configure o MSET9 ainda.** Feche o MSET9 Installer por enquanto
    + Se "Check Again" estiver destacado, há um problema que você precisa resolver antes de usar o MSET9. Consulte o [troubleshooting](solução de problemas#installing-boot9strap-mset9)
1. Reinsira o cartão SD no seu console
1. Ligue o seu console

#### Seção II - MSET9

Nestã seção, você vai attivar o MSET9 para iniciar o SafeB9SInstaller (o instalador de custom firmware).

Estas instruções devem ser seguidas **EXATAMENTE** como estão, então confira TUDO que você está fazendo para evitar erros!
{: .notice--danger}

1. **[Paire sobre](/images/screenshots/mset9/hover-settings.png)** o ícone das Configurações do Sistema usando o D-Pad (não o selecione ainda)
1. Desligue, então ligue seu console
1. Pressione (A) para iniciar as Configurações do Sistema
1. Navegue para `Gerenciamento de Dados` -> `Nintendo 3DS` -> `Extra Data` ([imagem](/images/screenshots/mset9/settings-extdata.png))
1. **Não pressione nenhum botão ou toque na tela**
1. **Com o console AINDA LIGADO, e sem pressionar nenhum dos botões ou a tela de toque**, remova seu cartão SD do seu console
    + O menu vai recarregar e dizer que não há cartão SD inserido, o que é esperado
1. Insira o cartão SD no seu telefone/tablet/computador
1. Abrir o aplicativo MSET9 Installer
1. Toque em "Setup MSET9"
1. Toque na foto correspondente ao seu modelo de console, e então no botão correspondente à versão atual do firmware
    + Se a injeção foi bem-sucedida, todos os botões devem ficar cinzentos, exceto "Remove MSET9"
1. Reinsira o cartão SD no seu console **sem pressionar nenhum botão ou tocar a tela de toque**
1. Se o exploit for bem-sucedido, você terá entrado no SafeB9SInstaller 
    + Se aparecer uma tela vermelha ou o console ficar preso em uma tela de carregamento, siga o [guia de troubleshooting](troubleshooting#installing-boot9strap-mset9)

#### Seção III - Instalando o boot9strap

{% include_relative include/install-boot9strap-safeb9sinstaller.txt %}
{%- include_relative include/configure-luma3ds.txt %}

#### Seção IV - Removendo o MSET9

Nesta seção, você irá remover o MSET9 para evitar erros futuros. (Isto não irá remover o custom firmware que você acabou de instalar.)

NÃO pule esta seção! Se você pular isso, os aplicativos podem ter um crash inesperado e você encontrará erros na próxima página!
{: .notice--danger}

1. Desligue seu console
1. Insira o cartão SD no seu telefone/tablet/computador
1. Abrir o aplicativo MSET9 Installer
1. Toque em "Remove MSET9"
1. Feche o aplicativo MSET9 Installer

{% include_relative include/luma3ds-installed-note.txt %}
___

Você seguiu a Seção IV (Removendo o MSET9)? Essa seção é MANDATÓRIA!
{: .notice--danger}

### Continue para [Finalizando a instalação](finalizing-setup)
{: .notice--primary}
