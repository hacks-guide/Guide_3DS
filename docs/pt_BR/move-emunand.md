# Move EmuNAND

## Required Reading

Esta é uma seção adicional, na qual moveremos o conteúdo de uma EmuNAND anterior para o seu novo CFW na SysNAND. Depois, removeremos a antiga partição da EmuNAND. Note que os termos EmuNAND e RedNAND se referem a implementações ligeiramente diferentes do [mesmo conceito](http://3dbrew.org/wiki/NAND_Redirection).

Note que se você tem outros arquivos de payload diferentes do `GodMode9.firm` na pasta `/luma/payloads/` do seu cartão SD, segure (Start) durante a inicialização para exibir um "menu de chainloader" onde você terá que utilizar os botões direcionais e o botão (A) para selecionar "GodMode9" para estas instruções.

::: danger

Você já DEVE ter instalado Luma3DS e boot9strap para usar isto.

:::

## What You Need

- An existing EmuNAND
- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

## Instructions

### Section I - Prep Work

1. Desligue seu console
2. Insira o cartão SD no seu computador
3. Copie `GodMode9.firm` do `.zip` do GodMode9 para a pasta `/luma/payloads/` no seu cartão SD
4. Copie a pasta `gm9` do `.zip` do GodMode9 para a raiz do seu cartão SD
5. Reinsira o cartão SD no seu console

### Section II - Backup SysNAND DSiWare Saves

::: info

Se você não tem nenhum jogo ou save de DSiWare que você se importa, pule esta seção.

:::

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
2. Se você for solicitado para criar backups de arquivos essenciais, aperte (A) para fazê-lo, então aperte (A) novamente para continuar quando o backup for concluído
3. Se você for solicitado para consertar o RTC date&time, pressione (A) para consertar, então insira a data e a hora, depois pressione (A) para continuar
   - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after this guide
4. Navegue para `[2:] SYSNAND TWLN` -> `title`
5. Segure (R) e aperte (A) ao mesmo tempo em `00030004` para selecionar a pasta, depois selecione "Copy to 0:/gm9/out"
   - This process may take some time if you have many DSiWare games
6. Aperte (B) duas vezes para retornar para o menu principal

### Section III - Backup GBA VC Saves

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
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
   - Launch GodMode9 by pressing (A)
   - Navegue para `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Dump GBA VC save"
   - Aperte (A) para continuar
   - Aperte (Start) para reiniciar seu console

### Section IV - Copy EmuNAND to SysNAND

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
2. Navegue para `[E:] EMUNAND VIRTUAL`
3. Aperte (A) em `nand.bin` para selecioná-lo, depois selecione "NAND image options...", depois selecione "Restore SysNAND (safe)"
4. Aperte (A) para destravar as modificações na SysNAND, então aperte a sequência de botões solicitada
   - This will not overwrite your boot9strap installation
5. Aperte a sequência de botões solicitada para desbloquear "SysNAND (lvl1) writing"
   - This process will take some time
6. Quando concluído, aperte (A) para continuar
7. Se solicitado, aperte (B) para recusar o bloqueio da permissão de escrita
8. Aperte (B) para retornar para o menu principal

### Section V - Restore DSiWare Saves

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
   - This process may take some time if you have many DSiWare games
9. Se solicitado, aperte (B) para recusar o bloqueio da permissão de escrita
10. Aperte (B) duas vezes para retornar para o menu principal

### Section VI - Restore GBA VC Saves

::: info

Se você não fez o backup de Saves do VC de GBA anteriormente, pule esta seção.

:::

::: info

Para identificar o TitleID de um arquivo `<TitleID>.gbavc.sav`, você pode obter uma listagem de todos os jogos no sistema e suas IDs correspondentes apertando (Home) para obter o menu de ações, selecionando `Title manager`, e selecionando `[A:] SD CARD`.

:::

1. Segure (R) e aperte (Start) ao mesmo tempo para desligar seu console
2. Ligue o seu console na SysNAND
3. Faça o seguinte processo para cada jogo de VC de GBA que você deseja restaurar o save:
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
   - Launch GodMode9 by pressing (A)
   - Navegue para `[0:] SDCARD` -> `gm9`
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

### Section VII - Backup SysNAND

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9

<!--@include: ./_include/nand-backup.md -->

1. **Faça backup de todos os arquivos no seu cartão SD para uma pasta no seu computador; todos os arquivos serão apagados na próxima etapa**

### Section VIII - Format SD card

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9

<!--@include: ./_include/format-sd-gm9.md -->

1. Segure (R) e aperte (B) ao mesmo tempo para ejetar o cartão SD
2. Insira o cartão SD no seu computador
3. Copie todos os seus arquivos de volta para o seu cartão SD
   - Ensure you replace the `boot.firm` file on your SD card with the one from your backup
4. Reinsira o cartão SD no seu console
5. Aperte (A) para remontar seu cartão SD
6. Aperte (Start) para reiniciar

___

::: tip

Return to [Finalizing Setup](finalizing-setup)

:::
