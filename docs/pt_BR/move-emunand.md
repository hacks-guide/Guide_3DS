# Mover a EmuNAND

## Leitura Obrigatória

Esta é uma seção adicional, na qual moveremos o conteúdo de uma EmuNAND anterior para o seu novo CFW na SysNAND. Depois, removeremos a antiga partição da EmuNAND. Note que os termos EmuNAND e RedNAND se referem a implementações ligeiramente diferentes do [mesmo conceito](http://3dbrew.org/wiki/NAND_Redirection).

Note que se você tem outros arquivos de payload diferentes do `GodMode9.firm` na pasta `/luma/payloads/` do seu cartão SD, segure (Start) durante a inicialização para exibir um "menu de chainloader" onde você terá que utilizar os botões direcionais e o botão (A) para selecionar "GodMode9" para estas instruções.

::: danger

Você já DEVE ter instalado Luma3DS e boot9strap para usar isto.

:::

## O que é necessário

- Uma EmuNAND já existente
- A versão mais recente do [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (o arquivo `.zip` do GodMode9)

## Instruções

### Seção I - Preparação

1. Desligue seu console
2. Insira o cartão SD no seu computador
3. Copie `GodMode9.firm` do `.zip` do GodMode9 para a pasta `/luma/payloads/` no seu cartão SD
4. Copie a pasta `gm9` do `.zip` do GodMode9 para a raiz do seu cartão SD
5. Reinsira o cartão SD no seu console

### Seção II - Backup dos dados salvos de DSiWare da SysNAND

::: info

Se você não tem nenhum jogo ou save de DSiWare que você se importa, pule esta seção.

:::

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
2. Se você for solicitado para criar backups de arquivos essenciais, aperte (A) para fazê-lo, então aperte (A) novamente para continuar quando o backup for concluído
3. Se você for solicitado para consertar o RTC date&time, pressione (A) para consertar, então insira a data e a hora, depois pressione (A) para continuar
   - Note que, se você teve que consertar a data e hora do RTC, você também terá que corrigir a hora na Configuração do Console após acabar o guia
4. Navegue para `[2:] SYSNAND TWLN` -> `title`
5. Segure (R) e aperte (A) ao mesmo tempo em `00030004` para selecionar a pasta, depois selecione "Copy to 0:/gm9/out"
   - Este processo pode levar algum tempo caso você tenha muitos jogos DSiWare
6. Aperte (B) duas vezes para retornar para o menu principal

### Seção III - Backup de dados salvos do VC de GBA

::: info

Se você não tem nenhum jogo ou save de VC de GBA que você se importa, pule esta seção.

:::

::: info

Note que isto não é necessário para nenhum outro tipo de jogo de Virtual Console (GBC, NES, etc)

:::

::: info

O jogo vai ser criado na pasta '/gm9/out/' do cartão SD com o nome `<TitleID>.gbavc.sav`.

:::

::: info

Para identificar o TitleID de um arquivo `<TitleID>.gbavc.sav`, você pode obter uma listagem de todos os jogos no sistema e suas IDs correspondentes apertando (Home) para obter o menu de ações, selecionando `Title manager`, e selecionando `[A:] SD CARD`.

:::

1. Faça o seguinte processo para cada jogo de VC de GBA que você quer fazer um backup do save:
   - Inicie o jogo de VC de GBA
   - Saia do jogo de VC de GBA
   - Ligue o seu console enquanto segura (Start) para abrir o menu de chainloader do Luma3DS
   - Inicie o GodMode9 pressionando (A)
   - Navegue para `[S:] SYSNAND VIRTUAL`
   - Pressione (A) no arquivo `agbsave.bin` para selecioná-lo
   - Selecione "AGBSAVE options..."
   - Selecione "Dump GBA VC save"
   - Aperte (A) para continuar
   - Aperte (Start) para reiniciar seu console

### Seção IV - Copiar a EmuNAND para a SysNAND

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
2. Navegue para `[E:] EMUNAND VIRTUAL`
3. Aperte (A) em `nand.bin` para selecioná-lo, depois selecione "NAND image options...", depois selecione "Restore SysNAND (safe)"
4. Aperte (A) para destravar as modificações na SysNAND, então aperte a sequência de botões solicitada
   - Isso não irá sobrescrever sua instalação do boot9strap
5. Aperte a sequência de botões solicitada para desbloquear "SysNAND (lvl1) writing"
   - Esse processo levará algum tempo
6. Quando concluído, aperte (A) para continuar
7. Se solicitado, aperte (B) para recusar o bloqueio da permissão de escrita
8. Aperte (B) para retornar para o menu principal

### Seção V - Restaurando dados salvos de DSiWare

::: info

Se você não fez o backup de Saves de DSiWare anteriormente, pule esta seção.

:::

1. Navegue para `[0:] SDCARD` -> `gm9` -> `out`
2. Aperte (Y) na pasta `00030004` para copiá-la
3. Aperte (B) duas vezes para retornar para o menu principal
4. Navegue para `[2:] SYSNAND TWLN` -> `title`
5. Aperte (Y) para colar a pasta `00030004`
6. Selecione "Copy path(s)"
7. Aperte (A) para destravar "SysNAND (lvl1) writing", então aperte a sequência de botões solicitada
8. Selecione "Overwrite file(s)"
   - Este processo pode levar algum tempo caso você tenha muitos jogos DSiWare
9. Se solicitado, aperte (B) para recusar o bloqueio da permissão de escrita
10. Aperte (B) duas vezes para retornar para o menu principal

### Seção VI - Restaurando dados salvos do VC de GBA

::: info

Se você não fez o backup de Saves do VC de GBA anteriormente, pule esta seção.

:::

::: info

Para identificar o TitleID de um arquivo `<TitleID>.gbavc.sav`, você pode obter uma listagem de todos os jogos no sistema e suas IDs correspondentes apertando (Home) para obter o menu de ações, selecionando `Title manager`, e selecionando `[A:] SD CARD`.

:::

1. Segure (R) e aperte (Start) ao mesmo tempo para desligar seu console
2. Ligue o seu console na SysNAND
3. Faça o seguinte processo para cada jogo de VC de GBA que você deseja restaurar o save:
   - Inicie o jogo de VC de GBA
   - Saia do jogo de VC de GBA
   - Ligue o seu console enquanto segura (Start) para abrir o menu de chainloader do Luma3DS
   - Inicie o GodMode9 pressionando (A)
   - Navegue para `[0:] SDCARD` -> `gm9`
   - Pressione (Y) no arquivo `<TitleID>.gbavc.sav` que você deseja restaurar para copiá-lo
   - Aperte (B) para retornar para o menu principal
   - Navegue para `[S:] SYSNAND VIRTUAL`
   - Pressione (A) no arquivo `agbsave.bin` para selecioná-lo
   - Selecione "AGBSAVE options..."
   - Selecione "Inject GBA VC save"
   - Aperte (A) para continuar
   - Aperte (Start) para reiniciar seu console
   - Inicie o jogo de VC de GBA
   - Saia do jogo de VC de GBA

### Seção VII - Backup da SysNAND

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9

<!--@include: ./_include/nand-backup.md -->

1. **Faça backup de todos os arquivos no seu cartão SD para uma pasta no seu computador; todos os arquivos serão apagados na próxima etapa**

### Seção VIII - Formatar o cartão SD

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9

<!--@include: ./_include/format-sd-gm9.md -->

1. Segure (R) e aperte (B) ao mesmo tempo para ejetar o cartão SD
2. Insira o cartão SD no seu computador
3. Copie todos os seus arquivos de volta para o seu cartão SD
   - Certifique-se de substituir o arquivo `boot.firm` no seu cartão SD com o do seu backup
4. Reinsira o cartão SD no seu console
5. Aperte (A) para remontar seu cartão SD
6. Aperte (Start) para reiniciar

___

::: tip

Retorne para [Finalizando a Instalação](finalizing-setup)

:::
