# Instalando boot9strap (MSET9 CLI)

:::details Technical Details (optional)

[MSET9](https://github.com/zoogie/MSET9) é um exploit para o aplicativo de Configurações do Sistema desenvolvido por [zoogie](https://github.com/zoogie). Ele faz uso de um erro onde a ID1 (a pasta de 32 caractéres dentro da pasta Nintendo 3DS, dentro de ID0) pode ter _qualquer_ nome desde que seja composto por 32 caractéres. Fazer uma sequência de ações específicas resultará no console executando instruções que estão codificadas no nome da pasta da ID1, que pode ser utilizada para garantir controle total sobre o 3DS.

:::

## Compatibility Notes

::: warning

Esta página requer um computador rodando Windows, Linux ou macOS. Se você tem um celular/tablet Android ou um Chromebook, siga [Instalando boot9strap (MSET9 Play Store)](installing-boot9strap-\(mset9-play-store\)) em vez disso. Se você não tiver acesso a nenhum desses dispositivos, será necessário usar um [método alternativo](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits).

:::

## What You Need

- The latest release of [MSET9](https://github.com/hacks-guide/MSET9/releases/latest)
- Any 3.x version of [Python](https://www.python.org/downloads/) **installed on your computer**
  - If you are on Linux or macOS, you may already have Python 3. Verifique abrindo uma janela terminal e digitando `python3 -V`. Se este retornar um número de versão, ele funcionará para este guia.

## Instructions

::: info

Nesta página, você usará o script MSET9, que é usado para acionar o MSET9. Enquanto o script estiver em progresso, os dados do usuário desaparecerão temporariamente, mas retornarão após a conclusão desta página. Se você receber um erro ao executar o script, a solução para esse erro provavelmente pode ser encontrada na página de [troubleshooting](troubleshooting#installing-boot9strap-mset9).

:::

### Section I - Prep Work

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

   - The window should change to this:

   ::: info

   ![](/images/screenshots/mset9/mset9-setup-notcreated.png)

   :::

   - Ensure that the correct console model and version is displayed
2. Digite `1`, depois pressione Enter para começar o processo de criação de ID1 do MSET9
3. Após ler o aviso, digite `1` novamente e pressione Enter para aceitá-lo
   - If you get an error, check the [troubleshooting](troubleshooting#installing-boot9strap-mset9), then try again
4. Se você ver a mensagem "Created hacked ID1.", pressione Enter para fechar o script MSET9
   - Your 3DS will appear to have no data / no user-installed apps on HOME Menu. **Isto é esperado.** Seus dados voltarão mais tarde
5. Reinsira o cartão SD no seu console
6. Ligue o seu console
7. Abra o Mii Maker
8. Espere o seu console chegar a tela de [Bem-vindo do Mii Maker](/images/screenshots/mset9/mii-welcome.png), depois saia do Mii Maker e retorne ao Menu HOME
   - You may see [this screen](/images/screenshots/mset9/mii-extdata.png), which indicates the necessary data has been created
   - If you just reach the [normal](/images/screenshots/mset9/mii-existing.png) Mii Maker screen, then the data already exists. Saia do Mi Maker e volte para o Menu HOME
9. Inicie as Configurações do Sistema e navegue para `Gerenciador de Dados` -> `Nintendo 3DS` -> `Software` -> Apagar ([imagem](/images/screenshots/database-reset.jpg))
   - This will not wipe any of your data
10. Desligue seu console apertando o botão POWER e depois toque em Desligar na tela inferior
11. Insira o cartão SD no seu computador

<!--@include: ./_include/mset9-chorus.md -->

1. Digite o número correspondente ao modelo do seu console e a versão, então pressione Enter

   - The window should change to this and display `Ready`:

   ::: info

   ![](/images/screenshots/mset9/mset9-ready.png)

   :::

   - If the window says [Not ready - check MSET9 status for more details](/images/screenshots/mset9/mset9-not-ready.png):
     - Type `2`, then press Enter to check the MSET9 status and follow the directions indicated
     - Once you have resolved the issue, return to Section I Step 14
     - For more information, check the [troubleshooting](troubleshooting#installing-boot9strap-mset9) page
2. Digite `0` e pressione Enter para fechar o script
3. Reinsira o cartão SD no seu console

### Section II - MSET9

Nestã seção, você vai attivar o MSET9 para iniciar o SafeB9SInstaller (o instalador de custom firmware).

::: danger

Estas instruções devem ser seguidas **EXATAMENTE** como estão, então confira TUDO que você está fazendo para evitar erros!

:::

1. Ligue seu console, garantindo que as Configurações do Sistema estejam selecionadas
   - If System Settings is not selected, **[hover over](/images/screenshots/mset9/hover-settings.png)** the System Settings icon using the D-Pad, power your console off, then back on
2. Pressione (A) para iniciar as Configurações do Sistema
3. Navegue para `Gerenciamento de Dados` -> `Nintendo 3DS` -> `Extra Data` ([imagem](/images/screenshots/mset9/settings-extdata.png))
4. **Não pressione nenhum botão ou toque na tela**
5. **Com o console AINDA LIGADO, e sem pressionar nenhum dos botões ou a tela de toque**, remova seu cartão SD do seu console
   - The menu will refresh and say that no SD card is inserted
6. Insira o cartão SD no seu computador

<!--@include: ./_include/mset9-chorus.md -->

1. Digite o número correspondente ao modelo do seu console e a versão, então pressione Enter
2. Na janela do MSET9, digite `3` e pressione Enter para injetar o MSET9
   - You should see "MSET9 successfully injected!"
3. Pressione Enter para fechar o script MSET9
4. Reinsira o cartão SD no seu console **sem pressionar nenhum botão ou tocar a tela de toque**
5. Se o exploit for bem-sucedido, você terá entrado no SafeB9SInstaller
   - If you get a red screen or the console gets stuck on a loading screen, follow the [troubleshooting guide](troubleshooting#installing-boot9strap-mset9)

### Section III - Installing boot9strap

Nesta seção, você instalará custom firmware no seu console.

1. Quando solicitado, aperte a sequência de botões fornecida na tela superior para instalar o boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
2. Quando concluído, aperte (A) para reiniciar o seu console

<!--@include: ./_include/configure-luma3ds.md -->

### Section IV - Removing MSET9

Nesta seção, você removerá o MSET9 para evitar problemas adicionais e restaurar seus dados do usuário (jogos, temas, etc). (Isso não irá remover o custom firmware que você acabou de instalar.)

::: danger

NÃO pule esta seção! Se você pular isso, os aplicativos podem ter um crash inesperado e você encontrará erros na próxima página!

:::

1. Desligue seu console
2. Insira o cartão SD no seu computador

<!--@include: ./_include/mset9-chorus.md -->

1. Digite o número correspondente ao modelo do seu console e a versão, então pressione Enter
   - The current state should display [Injected](/images/screenshots/mset9/mset9-injected.png)
   - If you have already removed the trigger file (or never injected in the first place), the current state will show [Ready](/images/screenshots/mset9/mset9-ready.png), skip to Step 6
2. Digite `4`, então pressione Enter para remover o arquivo de ativação
   - You should see "Removed trigger file."
3. Digite `5` e pressione Enter para remover o MSET9
   - You should see "Successfully removed MSET9!"
4. Pressione Enter para fechar o script MSET9

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: danger

Você seguiu a Seção IV (Removendo o MSET9)? Essa seção é MANDATÓRIA!

:::

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
