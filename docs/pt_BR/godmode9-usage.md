# Utilização do GodMode9

::: info

Para obter informações sobre fazer dumps de cartuchos ou conteúdo do cartão SD, veja [Fazendo Dump de Aplicativos e Jogos de Cartucho](dumping-titles-and-game-cartridges).

:::

::: info

Para suporte (em inglês) com o GodMode9, bem como ajuda com scripting e obter atualizações e informações, junte-se ao [Discord do GodMode9](https://discord.gg/BRcbvtFxX4).

:::

## Leitura Obrigatória

GodMode9 é um gerenciador de arquivos completo para o console Nintendo 3DS, lhe dando acesso ao seu cartão SD, às partições FAT dentro da sua SysNAND e EmuNAND, e a basicamente todo o resto. Dentre outras funcionalidades, você pode copiar, excluir, renomear e criar pastas.

Note que se você tem outros arquivos de payload diferentes do `GodMode9.firm` na pasta `/luma/payloads/` do seu cartão SD, segure (Start) durante a inicialização para exibir um "menu de chainloader" onde você terá que utilizar os botões direcionais e o botão (A) para selecionar "GodMode9" para estas instruções.

GodMode9 é um poderoso software que tem a capacidade de modificar essencialmente qualquer coisa em seu console. Embora muitas destas modificações sejam bloqueadas por trás de um sistema de permissões, e é impossível acidentalmente executar ações perigosas sem deliberadamente desbloquear permissões, você deve ainda seguir as instruções cuidadosamente e manter backups por precaução.

## Atualizando o GodMode9

::: info

Algumas das instruções abaixo só são aplicáveis para a versão mais recente do GodMode9, e como tal deve seguir esta seção para atualizar sua cópia antes de continuar. Substitua quaisquer arquivos existentes.

:::

### O que é necessário

- A versão mais recente do [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (o arquivo `.zip` do GodMode9)

### Instruções

1. Desligue seu console
2. Insira o cartão SD no seu computador
3. Copie `GodMode9.firm` do `.zip` do GodMode9 para a pasta `/luma/payloads/` no seu cartão SD
4. Copie a pasta `gm9` do `.zip` do GodMode9 para a raiz do seu cartão SD
5. Reinsira o cartão SD no seu console

::: tip

O GodMode9 agora está atualizado.

:::

## Criando um Backup da NAND

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9

<!--@include: ./_include/nand-backup.md -->

::: tip

Seu backup da NAND foi criado com sucesso.

:::

## Restaurando um Backup da NAND

1. Desligue seu console
2. Insira o cartão SD no seu computador
3. Copie `<date>_<serialnumber>_sysnand_##.bin` do seu computador para a pasta `/gm9/out/` no seu cartão SD
4. Reinsira o cartão SD no seu console
5. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
6. Aperte (Home) para abrir o menu de ações
7. Selecione "Scripts..."
8. Selecione "GM9Megascript"
9. Selecione "Restore Options"
10. Selecione "SysNAND Restore (safe)"
11. Selecione o backup da NAND
12. Aperte (A) para destravar "SysNAND (lvl3) writing", então aperte a sequência de botões solicitada
    - Isso **não** vai sobrescrever sua instalação do boot9strap
    - Esse processo levará algum tempo
13. Aperte (A) para continuar
14. Aperte (B) para retornar para o menu principal
15. Selecione "Exit"
16. Se solicitado, aperte (A) para bloquear as permissões de escrita

::: tip

Seu backup da NAND foi restaurado com sucesso. Agora você pode apagar `<date>_<serialnumber>_sysnand_###.bin` de seu cartão SD.

:::

## Injetando qualquer aplicativo .CIA no Informações sobre Saúde e Segurança

::: info

Note que não é possível injetar arquivos no Informações sobre Saúde e Segurança que sejam maiores do que ele (incluindo jogos e outras aplicações maiores)

:::

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
2. Navegue para `[0:] SDCARD` -> `cias`
3. Aperte (A) no seu `.cia` para selecioná-lo
4. Selecione "CIA image options..."
5. Selecione "Mount image to drive"
6. Aperte (A) no arquivo `.app`
7. Selecione "NCCH image options"
8. Selecione "Inject to H&S"
9. Aperte (A) para destravar "SysNAND (lvl1) writing", então aperte a sequência de botões solicitada
10. Aperte (A) para continuar
11. Se solicitado, aperte (A) para bloquear as permissões de escrita

::: tip

Seu aplicativo desejado foi agora injetado no aplicativo Saúde e Segurança.

:::

## Restaurando o Informações sobre Saúde e Segurança após injetar um aplicativo .CIA

::: info

Isto só irá funcionar caso a injeção do Informações sobre saúde e segurança foi feita pelo GodMode9 (não Decrypt9 ou Hourglass9).

:::

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
2. Aperte (Home) para abrir o menu de ações
3. Selecione "More..."
4. Selecione "Restore H&S"
5. Aperte (A) para destravar "SysNAND (lvl1) writing", então aperte a sequência de botões solicitada
6. Se solicitado, aperte (A) para bloquear as permissões de escrita

::: tip

Saúde e Segurança foi revertido para o normal.

:::

## Formatar um cartão SD

::: danger

**Note que isto irá apagar o conteúdo do seu cartão SD!**

:::

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
2. Aperte (Gatilho Direito) + (B) para desmontar o cartão SD atual e inserir o que você deseja formatar
    - Se o GodMode9 mostrar um erro de inicialização ao inserir o cartão SD a ser formatado, o erro pode ser dispensado

<!--@include: ./_include/format-sd-gm9.md -->

::: tip

Seu cartão SD foi formatado com sucesso para ser utilizado com o console.

:::

## Removendo uma NNID sem formatar seu console

::: info

Esse processo somente desconectará você do seu NNID. Você ainda não poderá usar a NNID em outro console, pois a NNID permanece vinculada ao console.

:::

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
2. Aperte (Home) para abrir o menu de ações
3. Selecione "Scripts..."
4. Selecione "GM9Megascript"
5. Selecione "Scripts from Plailect's Guide"
6. Selecione "remove_nnid"
7. Aperte (A) para continuar
8. Aperte (A) para destravar "SysNAND (lvl1) writing", então aperte a sequência de botões solicitada
9. Aperte (A) para continuar
10. Aperte (B) para retornar para o menu principal
11. Selecione "Exit"
12. Se solicitado, aperte (A) para bloquear as permissões de escrita
13. Aperte (Start) para reiniciar seu console

::: tip

Você foi desconectado da sua NNID.

:::
