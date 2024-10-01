# Descarregando Títulos e Cartuchos de Jogo

::: info

Para suporte (em inglês) com o GodMode9, bem como ajuda com scripting e obter atualizações e informações, junte-se ao [Discord do GodMode9](https://discord.gg/BRcbvtFxX4).

:::

## Leitura Obrigatória

Além de criar e restaurar backups da NAND, o GodMode9 tem a funcionalidade de fazer dump de aplicativos instalados para um arquivo `.cia` instalável, dump de dados de jogos de cartucho para um arquivo ROM `.3ds` e instalar diretamente um jogo de um cartucho para o sistema.

## Atualizando o GodMode9

::: info

Estas instruções estão escritas para serem usadas com o GodMode9 v2.0.0 ou adiante. Se você tem uma versão mais antiga do GodMode9, siga estas instruções para atualizá-lo.

:::

### O que é necessário

- A versão mais recente do [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (o arquivo `.zip` do GodMode9)

### Instruções

1. Desligue seu console
2. Insira o cartão SD no seu computador
3. Copie `GodMode9.firm` do `.zip` do GodMode9 para a pasta `/luma/payloads/` no seu cartão SD
4. Copie a pasta `gm9` do `.zip` do GodMode9 para a raiz do seu cartão SD
5. Reinsira o cartão SD no seu console

## Descarregando um Cartucho de Jogo

::: info

Insira o cartucho do jogo que você pretende fazer dump no seu console

- Cartuchos de jogos de 3DS serão descarregados no formato `.3ds`
- Cartuchos de jogos de DS serão descarregados no formato `.nds`

:::

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
2. Navegue para `[C:] GAMECART`
3. Siga os passos aplicáveis ao seu jogo de cartucho:
   - **Cartucho de Jogo de 3DS:** Aperte (A) em `[TitleID].trim.3ds` para selecioná-lo
   - **Cartucho de jogo de NDS:** Aperte (A) em `[TitleID].nds` para selecioná-lo
     - Trimmed dumps não são recomendados para jogos de NDS em geral, pois podem causar vários erros de reprodução
4. Selecione "Copy to 0:/gm9/out''
5. Seu arquivo formatado `.3ds` não-instalável ou `.nds` será gravado na pasta `/gm9/out/` no seu cartão SD

## Instalando um Cartucho de Jogo Diretamente no Sistema

::: info

Isto só funcionará para jogos de 3DS; não é possível instalar um jogo de cartucho de NDS no sistema como um aplicativo.

:::

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
2. Navegue para `[C:] GAMECART`
3. Aperte (A) no `[TitleID].trim.3ds` para selecioná-lo, depois selecione "NCSD image options...", depois selecione "Install game image"
4. Aperte (A) para destravar "SysNAND (lvl1) writing", então aperte a sequência de botões solicitada
5. Assim que o processo for completo, seu jogo aparecerá no Menu HOME como um aplicativo instalado.

## Descarregando um Cartucho de Jogo do 3DS para .CIA

::: info

Isso só deve ser usado se [Instalar um Jogo de Cartucho diretamente no Sistema](#installing-a-game-cartridge-directly-to-the-system) não funcionar.

:::

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
2. Navegue para `[C:] GAMECART`
3. Aperte (A) em `[TitleID].trim.3ds` para selecioná-lo, depois selecione "NCSD image options...", depois selecione "Build CIA from file"
4. Seu `.cia` instalável formatado será gravado na pasta `/gm9/out/` no seu cartão SD

## Descarregando um Aplicativo Instalado

::: info

Isso permite o dump de aplicativos digitais instalados tanto do Sistema como aplicativos instalados pelo Usuário, como os instalados da eShop.

:::

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
2. Aperte (Home) para abrir o menu de ações
3. Selecione "Title manager"
4. Selecione um dos seguintes dependendo do tipo de aplicativo que você deseja descarregar
   - **Aplicativo Instalado pelo Usuário**: `[A:] SD CARD`
   - **Aplicativo do Sistema / DSiWare**: `[1:] NAND / TWL`
5. Selecione o título que você deseja fazer um dump
6. Selecione "Manage Title..."
7. Selecione "Build CIA (standard)"
8. Seu `.cia` instalável formatado será gravado na pasta `/gm9/out/` no seu cartão SD

## Backup de Saves de VC de GBA

::: info

O jogo vai ser criado na pasta '/gm9/out/' do cartão SD com o nome `<TitleID>.gbavc.sav`.

:::

::: info

Para identificar o TitleID de um arquivo `<TitleID>.gbavc.sav`, você pode obter uma listagem de todos os jogos no sistema e suas IDs correspondentes apertando (Home) para obter o menu de ações, selecionando `Title manager`, e selecionando `[A:] SD CARD`.

:::

1. Faça o seguinte processo para cada jogo de VC de GBA que você quer fazer um backup do save:
   - Inicie o jogo de VC de GBA
   - Saia do jogo de VC de GBA
   - Desligue seu console
   - Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
   - Navegue para `[S:] SYSNAND VIRTUAL`
   - Pressione (A) no arquivo `agbsave.bin` para selecioná-lo
   - Selecione "AGBSAVE options..."
   - Selecione "Dump GBA VC save"
   - Aperte (A) para continuar
   - Aperte (Start) para reiniciar seu console

## Restaurando Saves de VC de GBA

::: info

Para identificar o TitleID de um arquivo `<TitleID>.gbavc.sav`, você pode obter uma listagem de todos os jogos no sistema e suas IDs correspondentes apertando (Home) para obter o menu de ações, selecionando `Title manager`, e selecionando `[A:] SD CARD`.

:::

1. Faça o seguinte processo para cada jogo de VC de GBA que você deseja restaurar o save:
   - Inicie o jogo de VC de GBA
   - Saia do jogo de VC de GBA
   - Desligue seu console
   - Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
   - Navegue para `[0:] SDCARD` -> `gm9` -> `out`
   - Aperte (Y) no arquivo `<TitleID>.gbavc.sav` que você deseja restaurar para copiá-lo
   - Aperte (B) para retornar para o menu principal
   - Navegue para `[S:] SYSNAND VIRTUAL`
   - Pressione (A) no arquivo `agbsave.bin` para selecioná-lo
   - Selecione "AGBSAVE options..."
   - Selecione "Inject GBA VC save"
   - Aperte (A) para continuar
   - Aperte (Start) para reiniciar seu console
   - Inicie o jogo de VC de GBA
   - Saia do jogo de VC de GBA

## Criptografando / Descriptografando um arquivo .CIA

::: info

Para fins organizacionais, copie cada arquivo `.cia` que você deseja criptografar / descriptografar para a pasta `/cias/` no seu cartão SD

:::

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
2. Navegue para `[0:] SDCARD` -> `cias`
3. Aperte (A) no arquivo `.cia` para selecioná-lo, depois selecione "CIA image options..."
4. Selecione a opção para executar a função desejada:
   - **Encrypt to 0:/gm9/out:** Cria uma cópia criptografada do arquivo `.cia` selecionado na pasta `/gm9/out` do seu cartão SD
   - **Decrypt to 0:/gm9/out:** Cria uma cópia descriptografada do arquivo `.cia` selecionado na pasta `/gm9/out/` do seu cartão SD
   - **Encrypt inplace:** Substitui o arquivo `.cia` selecionado por uma versão criptografada
   - **Decrypt inplace:** Substitui o arquivo `.cia` selecionado por uma versão descriptografada
5. Seu `.cia` criptografado / descriptografado será colocado no local desejado
