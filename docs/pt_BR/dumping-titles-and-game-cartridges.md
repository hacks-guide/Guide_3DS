# Dumping Titles and Game Cartridges

::: info

Para suporte (em inglês) com o GodMode9, bem como ajuda com scripting e obter atualizações e informações, junte-se ao [Discord do GodMode9](https://discord.gg/BRcbvtFxX4).

:::

## Required Reading

Além de criar e restaurar backups da NAND, o GodMode9 tem a funcionalidade de fazer dump de aplicativos instalados para um arquivo `.cia` instalável, dump de dados de jogos de cartucho para um arquivo ROM `.3ds` e instalar diretamente um jogo de um cartucho para o sistema.

## Updating GodMode9

::: info

Estas instruções estão escritas para serem usadas com o GodMode9 v2.0.0 ou adiante. Se você tem uma versão mais antiga do GodMode9, siga estas instruções para atualizá-lo.

:::

### What You Need

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Instructions

1. Desligue seu console
2. Insira o cartão SD no seu computador
3. Copie `GodMode9.firm` do `.zip` do GodMode9 para a pasta `/luma/payloads/` no seu cartão SD
4. Copie a pasta `gm9` do `.zip` do GodMode9 para a raiz do seu cartão SD
5. Reinsira o cartão SD no seu console

## Dumping a Game Cartridge

::: info

Insira o cartucho do jogo que você pretende fazer dump no seu console

- 3DS game cartridges will be dumped to a `.3ds` format
- NDS game cartridges will be dumped to a `.nds` format

:::

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
2. Navegue para `[C:] GAMECART`
3. Siga os passos aplicáveis ao seu jogo de cartucho:
   - **3DS Game Cartridge:** Press (A) on `[TitleID].trim.3ds` to select it
   - **NDS Game Cartridge:** Press (A) on `[TitleID].nds` to select it
     - Trimmed dumps are not recommended for NDS games in general, as they can cause various playback issues
4. Selecione "Copy to 0:/gm9/out''
5. Seu arquivo formatado `.3ds` não-instalável ou `.nds` será gravado na pasta `/gm9/out/` no seu cartão SD

## Installing a Game Cartridge Directly to the System

::: info

Isto só funcionará para jogos de 3DS; não é possível instalar um jogo de cartucho de NDS no sistema como um aplicativo.

:::

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
2. Navegue para `[C:] GAMECART`
3. Aperte (A) no `[TitleID].trim.3ds` para selecioná-lo, depois selecione "NCSD image options...", depois selecione "Install game image"
4. Aperte (A) para destravar "SysNAND (lvl1) writing", então aperte a sequência de botões solicitada
5. Assim que o processo for completo, seu jogo aparecerá no Menu HOME como um aplicativo instalado.

## Dumping a 3DS Game Cartridge to .CIA

::: info

Isso só deve ser usado se [Instalar um Jogo de Cartucho diretamente no Sistema](#installing-a-game-cartridge-directly-to-the-system) não funcionar.

:::

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
2. Navegue para `[C:] GAMECART`
3. Aperte (A) em `[TitleID].trim.3ds` para selecioná-lo, depois selecione "NCSD image options...", depois selecione "Build CIA from file"
4. Seu `.cia` instalável formatado será gravado na pasta `/gm9/out/` no seu cartão SD

## Dumping an Installed Title

::: info

Isso permite o dump de aplicativos digitais instalados tanto do Sistema como aplicativos instalados pelo Usuário, como os instalados da eShop.

:::

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
2. Aperte (Home) para abrir o menu de ações
3. Selecione "Title manager"
4. Selecione um dos seguintes dependendo do tipo de aplicativo que você deseja descarregar
   - **User Installed Title**: `[A:] SD CARD`
   - **System Title / DSiWare**: `[1:] NAND / TWL`
5. Selecione o título que você deseja fazer um dump
6. Selecione "Manage Title..."
7. Selecione "Build CIA (standard)"
8. Seu `.cia` instalável formatado será gravado na pasta `/gm9/out/` no seu cartão SD

## Backup GBA VC Saves

::: info

O jogo vai ser criado na pasta '/gm9/out/' do cartão SD com o nome `<TitleID>.gbavc.sav`.

:::

::: info

Para identificar o TitleID de um arquivo `<TitleID>.gbavc.sav`, você pode obter uma listagem de todos os jogos no sistema e suas IDs correspondentes apertando (Home) para obter o menu de ações, selecionando `Title manager`, e selecionando `[A:] SD CARD`.

:::

1. Faça o seguinte processo para cada jogo de VC de GBA que você quer fazer um backup do save:
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Desligue seu console
   - Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
   - Navegue para `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Dump GBA VC save"
   - Aperte (A) para continuar
   - Aperte (Start) para reiniciar seu console

## Restore GBA VC Saves

::: info

Para identificar o TitleID de um arquivo `<TitleID>.gbavc.sav`, você pode obter uma listagem de todos os jogos no sistema e suas IDs correspondentes apertando (Home) para obter o menu de ações, selecionando `Title manager`, e selecionando `[A:] SD CARD`.

:::

1. Faça o seguinte processo para cada jogo de VC de GBA que você deseja restaurar o save:
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Desligue seu console
   - Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
   - Navegue para `[0:] SDCARD` -> `gm9` -> `out`
   - Press (Y) on the `<TitleID>.gbavc.sav` file you wish to restore to copy it
   - Aperte (B) para retornar para o menu principal
   - Navegue para `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Inject GBA VC save"
   - Aperte (A) para continuar
   - Aperte (Start) para reiniciar seu console
   - Launch the GBA VC game
   - Exit the GBA VC game

## Encrypting / Decrypting a .CIA file

::: info

Para fins organizacionais, copie cada arquivo `.cia` que você deseja criptografar / descriptografar para a pasta `/cias/` no seu cartão SD

:::

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
2. Navegue para `[0:] SDCARD` -> `cias`
3. Aperte (A) no arquivo `.cia` para selecioná-lo, depois selecione "CIA image options..."
4. Selecione a opção para executar a função desejada:
   - **Encrypt to 0:/gm9/out:** Create an encrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
   - **Decrypt to 0:/gm9/out:** Create a decrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
   - **Encrypt inplace:** Replace the selected `.cia` file with an encrypted version
   - **Decrypt inplace:** Replace the selected `.cia` file with a decrypted version
5. Seu `.cia` criptografado / descriptografado será colocado no local desejado
