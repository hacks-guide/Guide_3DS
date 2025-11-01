# Instalando boot9strap (MSET9 CLI iOS)

:::details Detalhes Técnicos (opcional)

[MSET9](https://github.com/zoogie/MSET9) é um exploit para o aplicativo de Configurações do Sistema desenvolvido por [zoogie](https://github.com/zoogie). Ele faz uso de uma falha onde a ID1 (a pasta de 32 caracteres dentro da pasta Nintendo 3DS, dentro da ID0) pode ter _qualquer_ nome desde que seja composto por 32 caracteres. Executar uma sequência específica de ações resultarão no console executando as instruções que são codificadas no nome da pasta ID1, que pode ser usado para conceder controle total sobre o 3DS.

:::

## Notas de Compatibilidade

::: warning

Esta página requer um iPhone ou iPad executando iOS/iPadOS 14.0 ou superior. Se você tiver um computador executando Windows, macOS ou Linux, siga [Instalando boot9strap (MSET9 CLI)](installing-boot9strap-\(mset9-cli\)) em vez disso. Se você tem um celular/tablet Android ou um Chromebook, siga [Instalando boot9strap (MSET9 Play Store)](installing-boot9strap-\(mset9-play-store\)) em vez disso. Se você não tiver acesso a nenhum desses dispositivos, será necessário usar um [método alternativo](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits).

:::

::: warning

Como iPhones e iPads não possuem um slot de cartão SD, você precisará de um adaptador para conectar seu cartão SD ao seu dispositivo (ex: um Lightning para cartão SD ou USB-C para adaptador de cartão SD).

:::

## O que é necessário

- [iSH](https://apps.apple.com/us/app/ish-shell/id1436902243) da App Store

## Instruções

::: info

Nesta página, você usará o script MSET9, que é usado para acionar o MSET9. Enquanto o script estiver em progresso, os dados do usuário desaparecerão temporariamente, mas retornarão após a conclusão desta página. Se você receber um erro ao executar o script, a solução para esse erro provavelmente pode ser encontrada na página de [troubleshooting](troubleshooting-mset9).

:::

### Seção I - Preparação

Nesta seção, você irá preparar o exploit MSET9 **temporariamente** criando um novo perfil do Menu HOME sem dados de usuário, e, em seguida, configurar esse perfil com apenas os dados mínimos necessários para que o MSET9 acione. Seus dados de usuário existentes desaparecerão, mas voltarão quando você terminar esta página.

1. Insira seu cartão SD no seu iPhone/iPad (usando um adaptador)

<!--@include: ./_include/ish-chorus.md -->

    ```
    ::: info
    
    ![](/images/screenshots/mset9/mset9-ish-select.png)
    
    :::
    ```

1. Digite o número correspondente ao seu modelo e versão do console, em seguida, toque em Voltar

   - A tela deve mudar para isto:

   ::: info

   ![](/images/screenshots/mset9/mset9-ish-setup-notcreated.png)

   :::

   - Certifique-se de que o modelo e a versão mostrados estão corretos
2. Digite `1`, depois toque em Voltar para começar o processo de criação do ID1 do MSET9
3. Após rever o aviso, digite `1` novamente e toque em Voltar para aceitá-lo
   - Se você receber um erro, verifique o [guia de troubleshooting](troubleshooting-mset9), depois tente novamente
4. Se você ver a mensagem "Created hacked ID1.", toque em Voltar para fechar o script MSET9
   - Seu 3DS irá aparentar não ter dados / nenhum aplicativo instalado pelo usuário no Menu HOME. **Isto é esperado.** Seus dados voltarão mais tarde
5. Reinsira o cartão SD no seu console
6. Ligue o seu console
7. Abra o Mii Maker
8. Espere o seu console chegar a tela de [Bem-vindo do Mii Maker](/images/screenshots/mset9/mii-welcome.png), depois saia do Mii Maker e retorne ao Menu HOME
   - Você verá [esta tela](/images/screenshots/mset9/mii-extdata.png), o que indica que os dados necessários foram criados
   - Se você apenas chegar à [tela normal](/images/screenshots/mset9/mii-existing.png) do Mii Maker, então os dados já existem. Saia do Mi Maker e volte para o Menu HOME
9. Inicie as Configurações do Sistema e navegue para `Gerenciador de Dados` -> `Nintendo 3DS` -> `Software` -> Apagar ([imagem](/images/screenshots/database-reset.jpg))
   - Isso não irá apagar nenhum dos seus dados
10. Desligue seu console apertando o botão POWER e depois toque em Desligar na tela inferior
11. Insira seu cartão SD no seu iPhone/iPad (usando um adaptador)

<!--@include: ./_include/ish-chorus.md -->

1. Digite o número correspondente ao seu modelo e versão do console, em seguida, toque em Voltar

   - A tela deve mudar para isto e exibir `Ready`:

   ::: info

   ![](/images/screenshots/mset9/mset9-ish-ready.png)

   :::

   - Se a tela disser [Not ready - check MSET9 status for more details](/images/screenshots/mset9/mset9-ish-not-ready.png):
     - Digite `2`, depois toque em Voltar para verificar o status do MSET9 e siga as instruções indicadas
     - Assim que você resolver o problema, volte à Seção I Passo 14
     - Para mais informações, verifique a página de [troubleshooting](troubleshooting-mset9)
2. Digite `0`, depois toque em Voltar para fechar o script
3. Reinsira o cartão SD no seu console

### Seção II - MSET9

Nestã seção, você vai attivar o MSET9 para iniciar o SafeB9SInstaller (o instalador de custom firmware).

::: danger

Estas instruções devem ser seguidas **EXATAMENTE** como estão, então confira TUDO que você está fazendo para evitar erros!

:::

1. Ligue seu console, garantindo que a Configuração do Console esteja selecionada
   - Se a Configuração do Console não está selecionada, **[posicione o cursor](/images/screenshots/mset9/hover-settings.png)** sob o ícone da Configuração do Console usando o D-Pad, desligue seu console e ligue-o novamente
2. Pressione (A) para abrir a Configuração do Console
3. Navegue para `Gerenciamento de Dados` -> `Nintendo 3DS` -> `Dados adicionais` ([imagem](/images/screenshots/mset9/settings-extdata.png))
4. **Não pressione nenhum botão ou toque na tela**
5. **Com o console AINDA LIGADO, e sem pressionar nenhum botão ou tocar na tela**, remova seu cartão SD do seu console
   - O menu irá atualizar e dizer que nenhum cartão SD foi inserido
6. Insira seu cartão SD no seu iPhone/iPad (usando um adaptador)

<!--@include: ./_include/ish-chorus.md -->

1. Digite o número correspondente ao seu modelo e versão do console, em seguida, toque em Voltar
2. Na tela MSET9, digite `3`, depois toque em Voltar para injetar o MSET9
   - Você deve ver "MSET9 successfully injected!"
3. Toque em Voltar para fechar o script MSET9
4. Reinsira o cartão SD no seu console **sem pressionar nenhum botão ou tocar na tela**
5. Se o exploit for bem-sucedido, você terá entrado no SafeB9SInstaller
   - Se você receber uma tela vermelha ou o console ficar preso em uma tela de carregamento por mais de 10 segundos, siga o [Guia de Troubleshooting](troubleshooting-mset9)

### Seção III - Instalando boot9strap

Nesta seção, você instalará custom firmware no seu console.

1. Quando solicitado, aperte a sequência de botões fornecida na tela superior para instalar o boot9strap
   - Se um passo na parte inferior da tela tiver texto vermelho e você não for solicitado a introduzir um combo de botões, [siga este Guia de Troubleshooting](troubleshooting-mset9#sighaxed-firm-was-not-installed-check-lower-screen-for-more-info)
   - Se a tela superior estiver em branco **e** você vê "Crypto Status - all checks passed" na tela inferior, você terá que inserir o combo de botões cegamente. Pressione os seguintes botões no seu console nesta ordem:
     - Botão Direcional Esquerdo, Botão Direcional Baixo, Botão Direcional Direito, Botão Direcional Cima, A
2. Assim que estiver completo (todos os sete passos na tela inferior estão verdes), aperte (A) para reiniciar o seu console

<!--@include: ./_include/configure-luma3ds.md -->

### Seção IV - Removendo o MSET9

Nesta seção, você removerá o MSET9 para evitar problemas adicionais e restaurar seus dados do usuário (jogos, temas, etc). (Isso não irá remover o custom firmware que você acabou de instalar.)

::: danger

NÃO pule esta seção! Se você pular isso, os aplicativos podem ter um crash inesperado e você encontrará erros na próxima página!

:::

1. Desligue seu console
2. Insira seu cartão SD no seu iPhone/iPad (usando um adaptador)

<!--@include: ./_include/ish-chorus.md -->

1. Digite o número correspondente ao seu modelo e versão do console, em seguida, toque em Voltar
   - O estado atual deve exibir [Injected](/images/screenshots/mset9/mset9-ish-injected.png)
   - Se você já removeu o arquivo de ativação (ou nunca o injetou), o estado atual mostrará [Ready](/images/screenshots/mset9/mset9-ish-ready.png), pule para a Etapa 6
2. Digite `4` e toque em Voltar para remover o arquivo de gatilho
   - Você deve ver "Removed trigger file."
3. Digite `5`, depois toque em Voltar para remover o MSET9
   - Você deve ver "Successfully removed MSET9!"
4. Toque em Voltar para fechar o script MSET9

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

Você seguiu a Seção IV (Removendo o MSET9)? Essa seção é MANDATÓRIA!

:::

::: tip

Continue para [Finalizando a Instalação](finalizing-setup)

:::
