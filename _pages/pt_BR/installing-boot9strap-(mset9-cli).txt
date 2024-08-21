---
title: "Instalando boot9strap (MSET9 CLI)"
---

{% include toc title="Tabela de Conteúdo" %}

{% capture technical_info %}
<summary><em>Detalhes técnicos (opcional)</em></summary>
[MSET9](https://github.com/zoogie/MSET9) é um exploit para o aplicativo de Configurações do Sistema desenvolvido por [zoogie](https://github.com/zoogie). Ele faz uso de um erro onde a ID1 (a pasta de 32 caractéres dentro da pasta Nintendo 3DS, dentro de ID0) pode ter *qualquer* nome desde que seja composto por 32 caractéres. Fazer uma sequência de ações específicas resultará no console executando instruções que estão codificadas no nome da pasta da ID1, que pode ser utilizada para garantir controle total sobre o 3DS.

{% endcapture %}
<details>{{ technical_info | markdownify }}</details>
{: .notice--info}

### Notas de Compatibilidade

Esta página requer um computador rodando Windows, Linux ou macOS. Se você tem um celular/tablet Android ou um Chromebook, siga [Instalando boot9strap (MSET9 Play Store)](installing-boot9strap-(mset9-play-store)) em vez disso. Se você não tiver acesso a nenhum desses dispositivos, será necessário usar um [método alternativo](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits).
{: .notice--warning}

### O que é necessário

* A versão mais recente do [MSET9](https://github.com/hacks-guide/MSET9/releases/latest)
* Qualquer versão 3.x de [Python](https://www.python.org/downloads/) **instalada no seu computador**
    + Se você estiver no Linux ou macOS, você já pode ter Python 3. Verifique abrindo uma janela terminal e digitando `python3 -V`. Se este retornar um número de versão, ele funcionará para este guia.

### Instruções

Nesta página, você usará o script MSET9, que é usado para acionar o MSET9. Enquanto o script estiver em progresso, os dados do usuário desaparecerão temporariamente, mas retornarão após a conclusão desta página. Se você receber um erro ao executar o script, a solução para esse erro provavelmente pode ser encontrada na página de [troubleshooting](troubleshooting#installing-boot9strap-mset9).
{: .notice--info}

#### Seção I - Preparação

Nesta seção, você vai preparar o exploit MSET9 através de **temporariamente** criar um novo perfil do Menu HOME sem dados de usuário, e, em seguida, configurar esse perfil com apenas os dados mínimos necessários para que o MSET9 acione. Seus dados de usuário existentes desaparecerão, mas voltarão quando você terminar esta página.

1. Insira o cartão SD no seu computador
1. Copie tudo do `.zip` MSET9 para a raiz do seu cartão SD, substituindo quaisquer arquivos existentes

    ![MSET9 root layout](/images/screenshots/mset9/mset9-root-layout.png)
    {: .notice--info}

1. Execute o script MSET9:
{% capture mset9-chorus %}
    + **Windows**: Clique duas vezes em `MSET9-Windows.bat`
    + **macOS**: clique duas vezes em `MSET9-macOS.command` e digite sua senha, se solicitado
    + **Linux**: Abra uma janela do Terminal, use `cd` até o root do seu cartão SD, então digite `python3 mset9.py` e pressione Enter
{% endcapture %}
    {{ mset9-chorus }}

    ![Image: MSET9 setup](/images/screenshots/mset9/mset9-select.png)
    {: .notice--info}

1. Digite o número correspondente ao modelo do seu console e a versão, então pressione Enter
    + A janela deve mudar para isto:

    ![Imagem: preparação do MSET9](/images/screenshots/mset9/mset9-setup-notcreated.png)
    {: .notice--info}

    + Certifique-se de que o modelo e a versão do console estão sendo mostrados
1. Digite `1`, depois pressione Enter para começar o processo de criação de ID1 do MSET9
1. Após ler o aviso, digite `1` novamente e pressione Enter para aceitá-lo
    + Se você receber um erro, verifique o [troubleshooting](troubleshooting#installing-boot9strap-mset9), e tente novamente
1. Se você ver a mensagem "Created hacked ID1.", pressione Enter para fechar o script MSET9
    + Seu 3DS irá parecer não ter dados / nenhum aplicativo instalado pelo usuário no Menu HOME. **Isto é esperado.** Seus dados voltarão mais tarde
1. Reinsira o cartão SD no seu console
1. Ligue o seu console
1. Abra o Mii Maker
1. Espere o seu console chegar a tela de [Bem-vindo do Mii Maker](/images/screenshots/mset9/mii-welcome.png), depois saia do Mii Maker e retorne ao Menu HOME
    + Talvez você veja [esta tela](/images/screenshots/mset9/mii-extdata.png),o que indica que os dados necessários já foram criados
    + Se você apenas chegar a tela [normal](/images/screenshots/mset9/mii-existing.png) do Mii Maker, então os dados já existem. Saia do Mi Maker e volte para o Menu HOME
1. Inicie as Configurações do Sistema e navegue para `Gerenciador de Dados` -> `Nintendo 3DS` -> `Software` -> Apagar ([imagem](/images/screenshots/database-reset.jpg))
    + Isso não irá apagar nenhum dos seus dados
1. Desligue seu console apertando o botão POWER e depois toque em Desligar na tela inferior
1. Insira o cartão SD no seu computador
1. Execute o script MSET9:

    {{ mset9-chorus }}

1. Digite o número correspondente ao modelo do seu console e a versão, então pressione Enter
    + A janela deve mudar para isso e exibir `Ready`:

    ![Imagem: preparação do MSET9](/images/screenshots/mset9/mset9-ready.png)
    {: .notice--info}

    + Se a janela diz [Not ready - check MSET9 status for more details](/images/screenshots/mset9/mset9-not-ready.png):
        + Digite `2`, depois pressione Enter para verificar o status do MSET9 e siga as instruções indicadas
        + Assim que você resolver o problema, volte à Seção I Passo 14
        + Para mais informações, verifique a página de [troubleshooting](troubleshooting#installing-boot9strap-mset9)
1. Digite `0` e pressione Enter para fechar o script
1. Reinsira o cartão SD no seu console

#### Seção II - MSET9

Nestã seção, você vai attivar o MSET9 para iniciar o SafeB9SInstaller (o instalador de custom firmware).

Estas instruções devem ser seguidas **EXATAMENTE** como estão, então confira TUDO que você está fazendo para evitar erros!
{: .notice--danger}

1. Ligue seu console, garantindo que as Configurações do Sistema estejam selecionadas
    + Se as Configurações do Sistema não estiverem selecionadas, **[passe o cursor](/images/screenshots/mset9/hover-settings.png)** sobre o ícone de Configurações do sistema usando o D-Pad, desligue seu console, e ligue-o novamente
1. Pressione (A) para iniciar as Configurações do Sistema
1. Navegue para `Gerenciamento de Dados` -> `Nintendo 3DS` -> `Extra Data` ([imagem](/images/screenshots/mset9/settings-extdata.png))
1. **Não pressione nenhum botão ou toque na tela**
1. **Com o console AINDA LIGADO, e sem pressionar nenhum dos botões ou a tela de toque**, remova seu cartão SD do seu console
    + O menu atualizará e dirá que nenhum cartão SD foi inserido
1. Insira o cartão SD no seu computador
1. Execute o script MSET9:
    {{ mset9-chorus }}
1. Digite o número correspondente ao modelo do seu console e a versão, então pressione Enter
1. Na janela do MSET9, digite `3` e pressione Enter para injetar o MSET9
    + Você deve ver "MSET9 successfully injected!"
1. Pressione Enter para fechar o script MSET9
1. Reinsira o cartão SD no seu console **sem pressionar nenhum botão ou tocar a tela de toque**
1. Se o exploit for bem-sucedido, você terá entrado no SafeB9SInstaller 
    + Se aparecer uma tela vermelha ou o console ficar preso em uma tela de carregamento, siga o [guia de troubleshooting](troubleshooting#installing-boot9strap-mset9)

#### Seção III - Instalando o boot9strap

{% include_relative include/install-boot9strap-safeb9sinstaller.txt %}
{%- include_relative include/configure-luma3ds.txt %}

#### Seção IV - Removendo o MSET9

Nesta seção, você removerá o MSET9 para evitar problemas adicionais e restaurar seus dados do usuário (jogos, temas, etc). (Isso não irá remover o custom firmware que você acabou de instalar.)

NÃO pule esta seção! Se você pular isso, os aplicativos podem ter um crash inesperado e você encontrará erros na próxima página!
{: .notice--danger}

1. Desligue seu console
1. Insira o cartão SD no seu computador
1. Execute o script MSET9:
    {{ mset9-chorus }}
1. Digite o número correspondente ao modelo do seu console e a versão, então pressione Enter
    + O estado atual deve exibir [Injected](/images/screenshots/mset9/mset9-injected.png)
    + Se você já removeu o arquivo de ativação (ou nunca foi o injetou), o estado atual irá mostrar [Ready](/images/screenshots/mset9/mset9-ready. ng), pule para a Etapa 6
1. Digite `4`, então pressione Enter para remover o arquivo de ativação
    + Você deve ver "Removed trigger file."
1. Digite `5` e pressione Enter para remover o MSET9
    + Você deve ver "Successfully removed MSET9!"
1. Pressione Enter para fechar o script MSET9

{% include_relative include/luma3ds-installed-note.txt %}
___

Você seguiu a Seção IV (Removendo o MSET9)? Essa seção é MANDATÓRIA!
{: .notice--danger}

### Continue para [Finalizando a instalação](finalizing-setup)
{: .notice--primary}
