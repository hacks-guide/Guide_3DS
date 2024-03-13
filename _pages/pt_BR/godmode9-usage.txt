---
title: "Utilização do GodMode9"
---

{% include toc title="Tabela de Conteúdo" %}

Para obter informações sobre fazer dumps de cartuchos ou conteúdo do cartão SD, veja [Fazendo Dump de Aplicativos e Jogos de Cartucho](dumping-titles-and-game-cartridges).
{: .notice--info}

Para suporte (em inglês) com o GodMode9, bem como ajuda com scripting e obter atualizações e informações, junte-se ao [Discord do GodMode9](https://discord.gg/BRcbvtFxX4).
{: .notice--primary}

### Leitura Obrigatória

GodMode9 é um gerenciador de arquivos completo para o console Nintendo 3DS, lhe dando acesso ao seu cartão SD, às partições FAT dentro da sua SysNAND e EmuNAND, e a basicamente todo o resto. Dentre outras funcionalidades, você pode copiar, excluir, renomear e criar pastas.

Note que se você tem outros arquivos de payload diferentes do `GodMode9.firm` na pasta `/luma/payloads/` do seu cartão SD, segure (Start) durante a inicialização para exibir um "menu de chainloader" onde você terá que utilizar os botões direcionais e o botão (A) para selecionar "GodMode9" para estas instruções.

GodMode9 é um poderoso software que tem a capacidade de modificar essencialmente qualquer coisa em seu console. Embora muitas destas modificações sejam bloqueadas por trás de um sistema de permissões, e é impossível acidentalmente executar ações perigosas sem deliberadamente desbloquear permissões, você deve ainda seguir as instruções cuidadosamente e manter backups por precaução.

## Atualizando o GodMode9

Algumas das instruções abaixo só são aplicáveis para a versão mais recente do GodMode9, e como tal deve seguir esta seção para atualizar sua cópia antes de continuar. Substitua quaisquer arquivos existentes.
{: .notice--info}

### O que você precisa

* A versão mais recente do [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (o arquivo `.zip`)

### Instruções

1. Desligue seu console
1. Insira o cartão SD no seu computador
1. Copie `GodMode9.firm` do `.zip` do GodMode9 para a pasta `/luma/payloads/` no seu cartão SD
1. Copie a pasta `gm9` do `.zip` do GodMode9 para a raiz do seu cartão SD
1. Reinsira o cartão SD no seu console

O GodMode9 agora está atualizado.
{: .notice--success}

## Criando um Backup da NAND

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
{% include_relative include/nand-backup.txt %}

Seu backup da NAND foi criado com sucesso.
{: .notice--success}

## Restaurando um Backup da NAND

1. Desligue seu console
1. Insira o cartão SD no seu computador
1. Copie `<date>_<serialnumber>_sysnand_##.bin` do seu computador para a pasta `/gm9/out/` no seu cartão SD
1. Reinsira o cartão SD no seu console
1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
1. Aperte (Home) para abrir o menu de ações
1. Selecione "Scripts..."
1. Selecione "GM9Megascript"
1. Selecione "Restore Options"
1. Selecione "SysNAND Restore (safe)"
1. Selecione o backup da NAND
1. Aperte (A) para destravar "SysNAND (lvl3) writing", então aperte a sequência de botões solicitada
    + Isso **não** irá sobrescrever sua instalação do boot9strap
    + Este processo levará algum tempo
1. Aperte (A) para continuar
1. Aperte (B) para retornar para o menu principal
1. Selecione "Exit"
1. Se solicitado, aperte (A) para bloquear as permissões de escrita

Seu backup da NAND foi restaurado com sucesso. Agora você pode apagar `<date>_<serialnumber>_sysnand_###.bin` de seu cartão SD.
{: .notice--success}

## Injetando qualquer app .CIA no Informações sobre Saúde e Segurança

Note que não é possível injetar arquivos no Informações sobre Saúde e Segurança que sejam maiores do que ele (incluindo jogos e outras aplicações maiores)
{: .notice--info}

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
1. Navegue para `[0:] SDCARD` -> `cias`
1. Aperte (A) no seu `.cia` para selecioná-lo
1. Selecione "CIA image options..."
1. Selecione "Mount image to drive"
1. Aperte (A) no arquivo `.app`
1. Selecione "NCCH image options"
1. Selecione "Inject to H&S"
1. Aperte (A) para destravar "SysNAND (lvl1) writing", então aperte a sequência de botões solicitada
1. Aperte (A) para continuar
1. Se solicitado, aperte (A) para bloquear as permissões de escrita

Seu aplicativo desejado foi agora injetado no aplicativo Saúde e Segurança.
{: .notice--success}

## Restaurando o Informações sobre Saúde e Segurança após injetar um app .CIA

Isto só irá funcionar caso a injeção do Informações sobre saúde e segurança foi feita pelo GodMode9 (não Decrypt9 ou Hourglass9).
{: .notice--info}

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
1. Aperte (Home) para abrir o menu de ações
1. Selecione "More..."
1. Selecione "Restore H&S"
1. Aperte (A) para destravar "SysNAND (lvl1) writing", então aperte a sequência de botões solicitada
1. Se solicitado, aperte (A) para bloquear as permissões de escrita

Saúde e Segurança foi revertido para o normal.
{: .notice--success}

## Formatar um cartão SD

**Note que isto irá apagar o conteúdo do seu cartão SD!**
{: .notice--danger}

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
1. Aperte (Gatilho Direito) + (B) para desmontar o cartão SD atual e inserir o que você deseja formatar
    + Se o GodMode9 mostra um erro de inicialização ao inserir o cartão SD a ser formatado, o erro pode ser descartado
{% include_relative include/format-sd-gm9.txt %}

Seu cartão SD foi formatado com sucesso para ser utilizado com o console.
{: .notice--success}

## Removendo um NNID sem formatar o seu console

Esse processo somente desconectará você do seu NNID. Você ainda não poderá usar a NNID em outro console, pois a NNID permanece vinculada ao console.
{: .notice--info}

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
1. Aperte (Home) para abrir o menu de ações
1. Selecione "Scripts..."
1. Selecione "GM9Megascript"
1. Selecione "Scripts from Plailect's Guide"
1. Selecione "remove_nnid"
1. Aperte (A) para continuar
1. Aperte (A) para destravar "SysNAND (lvl1) writing", então aperte a sequência de botões solicitada
1. Aperte (A) para continuar
1. Aperte (B) para retornar para o menu principal
1. Selecione "Exit"
1. Se solicitado, aperte (A) para bloquear as permissões de escrita
1. Aperte (Start) para reiniciar seu console

Você foi desconectado da sua NNID.
{: .notice--success}
