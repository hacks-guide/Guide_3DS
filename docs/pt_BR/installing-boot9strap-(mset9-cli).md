# Instalando boot9strap (MSET9 CLI)

:::details Detalhes Técnicos (opcional)

[MSET9](https://github.com/zoogie/MSET9) é um exploit para o aplicativo de Configurações do Sistema desenvolvido por [zoogie](https://github.com/zoogie). Ele faz uso de um erro onde a ID1 (a pasta de 32 caractéres dentro da pasta Nintendo 3DS, dentro de ID0) pode ter _qualquer_ nome desde que seja composto por 32 caractéres. Fazer uma sequência de ações específicas resultará no console executando instruções que estão codificadas no nome da pasta da ID1, que pode ser utilizada para garantir controle total sobre o 3DS.

:::

## Notas de Compatibilidade

::: warning

Esta página requer um computador rodando Windows, Linux ou macOS. Se você tem um celular/tablet Android ou um Chromebook, siga [Instalando boot9strap (MSET9 Play Store)](installing-boot9strap-\(mset9-play-store\)) em vez disso. Se você não tiver acesso a nenhum desses dispositivos, será necessário usar um [método alternativo](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits).

:::

## O que é necessário

- A versão mais recente do [MSET9](https://github.com/hacks-guide/MSET9/releases/latest)
- Qualquer versão 3.x de [Python](https://www.python.org/downloads/) **instalada no seu computador**
  - Se você estiver no Linux ou no macOS, você possivelmente já tem Python 3. Verifique abrindo uma janela terminal e digitando `python3 -V`. Se este retornar um número de versão, ele funcionará para este guia.

## Instruções

::: info

Nesta página, você usará o script MSET9, que é usado para acionar o MSET9. Enquanto o script estiver em progresso, os dados do usuário desaparecerão temporariamente, mas retornarão após a conclusão desta página. Se você receber um erro ao executar o script, a solução para esse erro provavelmente pode ser encontrada na página de [troubleshooting](troubleshooting#installing-boot9strap-mset9).

:::

### Seção I - Preparação

Nesta seção, você vai preparar o exploit MSET9 através de **temporariamente** criar um novo perfil do Menu HOME sem dados de usuário, e, em seguida, configurar esse perfil com apenas os dados mínimos necessários para que o MSET9 acione. Seus dados de usuário existentes desaparecerão, mas voltarão quando você terminar esta página.

1. Insira o cartão SD no seu computador
2. Copie tudo do `.zip` MSET9 para a raiz do seu cartão SD, substituindo quaisquer arquivos existentes

   ::: info

   ![](/images/screenshots/mset9/mset9-root-layout.png)

   :::

<!--@include: ./_include/mset9-chorus.md -->

```
::: info

![](/images/screenshots/mset9/mset9-select.png)

:::
```

1. Digite o número correspondente ao modelo do seu console e a versão, então pressione Enter

   - A janela deve mudar para isto:

   ::: info

   ![](/images/screenshots/mset9/mset9-setup-notcreated.png)

   :::

   - Certifique-se de que o modelo e a versão mostrados estão corretos
2. Digite `1`, depois pressione Enter para começar o processo de criação de ID1 do MSET9
3. Após ler o aviso, digite `1` novamente e pressione Enter para aceitá-lo
   - Se você receber um erro, verifique o guia de [troubleshooting](troubleshooting#installing-boot9strap-mset9), então tente novamente
4. Se você ver a mensagem "Created hacked ID1.", pressione Enter para fechar o script MSET9
   - Seu 3DS vai parecer não ter dados/nenhum aplicativo instalado no Menu HOME. **Isto é esperado.** Seus dados voltarão mais tarde
5. Reinsira o cartão SD no seu console
6. Ligue o seu console
7. Abra o Mii Maker
8. Espere o seu console chegar a tela de [Bem-vindo do Mii Maker](/images/screenshots/mset9/mii-welcome.png), depois saia do Mii Maker e retorne ao Menu HOME
   - Você verá [esta tela](/images/screenshots/mset9/mii-extdata.png), o que indica que os dados necessários foram criados
   - Se você apenas chegar à [tela normal](/images/screenshots/mset9/mii-existing.png) do Mii Maker, então os dados já existem. Saia do Mi Maker e volte para o Menu HOME
9. Inicie as Configurações do Sistema e navegue para `Gerenciador de Dados` -> `Nintendo 3DS` -> `Software` -> Apagar ([imagem](/images/screenshots/database-reset.jpg))
   - Isso não irá apagar nenhum dos seus dados
10. Desligue seu console apertando o botão POWER e depois toque em Desligar na tela inferior
11. Insira o cartão SD no seu computador

<!--@include: ./_include/mset9-chorus.md -->

1. Digite o número correspondente ao modelo do seu console e a versão, então pressione Enter

   - A janela deve mudar para isto e exibir `Ready`:

   ::: info

   ![](/images/screenshots/mset9/mset9-ready.png)

   :::

   - Se a janela exibir [Not ready - check MSET9 status for more details](/images/screenshots/mset9/mset9-not-ready.png):
     - Digite `2`, depois pressione Enter para verificar o status do MSET9, e siga as instruções indicadas
     - Assim que você resolver o problema, volte à Seção I Passo 14
     - Para mais informações, verifique a página de [troubleshooting](troubleshooting#installing-boot9strap-mset9)
2. Digite `0` e pressione Enter para fechar o script
3. Reinsira o cartão SD no seu console

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
   - O menu atualizará e dirá que nenhum cartão SD foi inserido
6. Insira o cartão SD no seu computador

<!--@include: ./_include/mset9-chorus.md -->

1. Digite o número correspondente ao modelo do seu console e a versão, então pressione Enter
2. Na janela do MSET9, digite `3` e pressione Enter para injetar o MSET9
   - Você deve ver "MSET9 successfully injected!"
3. Pressione Enter para fechar o script MSET9
4. Reinsira o cartão SD no seu console **sem pressionar nenhum botão ou tocar a tela de toque**
5. Se o exploit for bem-sucedido, você terá entrado no SafeB9SInstaller
   - Se você ver uma tela vermelha ou o console ficar preso em uma tela de carregamento, siga o [guia de troubleshooting](troubleshooting#installing-boot9strap-mset9)

### Seção III - Instalando boot9strap

Nesta seção, você instalará custom firmware no seu console.

1. Quando solicitado, aperte a sequência de botões fornecida na tela superior para instalar o boot9strap
   - Se um passo na tela inferior tiver texto em cor vermelha, e você não for solicitado a introduzir um combo de botões, siga o guia de [troubleshooting](troubleshooting#issues-with-safeb9sinstaller)
2. Quando concluído, aperte (A) para reiniciar o seu console

<!--@include: ./_include/configure-luma3ds.md -->

### Seção IV - Removendo o MSET9

Nesta seção, você removerá o MSET9 para evitar problemas adicionais e restaurar seus dados do usuário (jogos, temas, etc). (Isso não irá remover o custom firmware que você acabou de instalar.)

::: danger

NÃO pule esta seção! Se você pular isso, os aplicativos podem ter um crash inesperado e você encontrará erros na próxima página!

:::

1. Desligue seu console
2. Insira o cartão SD no seu computador

<!--@include: ./_include/mset9-chorus.md -->

1. Digite o número correspondente ao modelo do seu console e a versão, então pressione Enter
   - O estado atual deve exibir [Injected](/images/screenshots/mset9/mset9-injected.png)
   - Se você já removeu o arquivo de ativação (ou nunca o injetou), o estado atual irá mostrar [Ready](/images/screenshots/mset9/mset9-ready.png); pule para o Passo 6
2. Digite `4`, então pressione Enter para remover o arquivo de ativação
   - Você deve ver "Removed trigger file."
3. Digite `5` e pressione Enter para remover o MSET9
   - Você deve ver "Successfully removed MSET9!"
4. Pressione Enter para fechar o script MSET9

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

Você seguiu a Seção IV (Removendo o MSET9)? Essa seção é MANDATÓRIA!

:::

::: tip

Continue para [Finalizando a Instalação](finalizing-setup)

:::
