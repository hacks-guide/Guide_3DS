# Desinstalar CFW

## Required Reading

Isso irá remover completamente CFW do seu console, incluindo boot9strap e Luma3DS, com o propósito de restaurar o console ao padrão.

Quaisquer jogos não assinados (ilegítimos) serão dados como inutilizáveis e serão removidos durante este processo. Use um [gerenciador de saves](https://github.com/FlagBrew/Checkpoint/releases/latest) para fazer backup de quaisquer saves com que você se importe.

::: danger

Se você está removendo o CFW porque:

- You want to re-install it
- You want to change SD cards
- Your SD card was lost or corrupted
- One of your games is broken
- One of your system applications is broken
- Your console is unable to boot to HOME Menu

<u>**STOP!!!**</u> Uninstalling custom firmware is an unnecessary risk that will at best waste your time and at worst <u>**BRICK**</u> your console. Uma ideia melhor seria pedir ajuda a [Nintendo Homebrew no Discord](https://discord.gg/MWxPgEp).

:::

::: danger

Se você já fez QUALQUER das seguintes coisas:

- [Changed the region](region-changing) of the console
- Installed a custom keyboard
- Installed a custom HOME Menu (_not_ a custom theme)
- Manually changed the encryption key (`movable.sed`) of the console
- Unbanned the console

then uninstalling CFW <u>**WILL BRICK YOUR CONSOLE**</u>. Se isso se aplicar a você, [restaure um backup da NAND limpo](godmode9-usage#restoring-a-nand-backup) antes de continuar.

:::

::: warning

Estas instruções só funcionarão em consoles com uma versão 8.0 ou superior do Luma3DS. Se você tem uma versão mais antiga do Luma, você deve atualizar sua configuração antes de seguir estas instruções. Siga [esta página](checking-for-cfw) para encontrar suas instruções de atualização.

:::

## What You Need

- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)
- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)
- The latest release of [DSiWare Uninstaller](https://github.com/MechanicalDragon0687/DSiWare-Uninstaller/releases/latest)
- [safety_test.gm9](/gm9_scripts/safety_test.gm9)

## Instructions

### Section I - Prep Work

1. Desligue seu console
2. Insira o cartão SD no seu computador
3. Copy everything from the Luma3DS `.zip` to the root of your SD card
4. Copie `GodMode9.firm` do `.zip` do GodMode9 para a pasta `/luma/payloads/` no seu cartão SD
5. Copie a pasta `gm9` do `.zip` do GodMode9 para a raiz do seu cartão SD
6. Copie `DSiWareUninstaller.3dsx` para a pasta `/3ds/` no seu cartão SD
7. Copie `safety_test.gm9` para a pasta `/gm9/scripts/` no seu cartão SD
8. Reinsira o cartão SD no seu console

### Section II - DS Mode Tests

O objetivo desta seção é verificar se os aplicativos do modo DS embutidos continuarão a funcionar assim que o CFW for desinstalado. Se você pular esta seção, o modo DS ou suas funções poderão ficar inacessíveis até que o CFW seja reinstalado.

#### DS Connection Settings Test

1. Ligue o seu console
2. Abra as Configurações do Sistema no seu console
3. Navegue para `Configuração de Internet` -> `Conexões Nintendo DS`, depois clique em OK
4. Você deve iniciar no menu de Conexões Nintendo DS
   - If your console displays the Japanese version of Flipnote Studio, a black screen, or an error message, the test has failed
5. Desligue seu console

#### DS Download Play Test

1. Ligue o seu console
2. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
3. Selecione "Nintendo DS"
4. Se o seu console carregar em um menu "Download de software via DS Download Play", o teste foi bem sucedido
   - If your console displays the Japanese version of Flipnote Studio, a black screen, or an error message, the test has failed
5. Desligue seu console

::: warning

Se qualquer um desses testes falhar, o Modo DS, DS Download Play, e/ou Conexões Nintendo DS podem estar inacessíveis quando o CFW for desinstalado! Você deve [consertar o modo DS](troubleshooting#software-issues-on-consoles-with-custom-firmware) antes de continuar.

:::

### Section III - Safety Test

O objetivo desta seção é verificar se o console irá ligar e que as funções críticas do sistema, como as configurações do sistema e o teclado, funcionarão quando o CFW for desinstalado. **Se você pular esta seção, você pode CAUSAR UM BRICK no seu console!**

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
2. Se você for solicitado para criar um backup de arquivos essenciais, aperte (A) para fazê-lo, e então aperte (A) para continuar assim que estiver concluído
3. Se você for solicitado para consertar o RTC date&time, pressione (A) para consertar, então insira a data e a hora, depois pressione (A) para continuar
   - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after following this guide
4. Aperte (Home) para abrir o menu de ações
5. Selecione "Scripts..."
6. Selecione "safety_test"
7. Leia o texto na tela e aperte (A) para continuar
8. Você deve iniciar no Menu HOME padrão do 3DS (qualquer tema personalizado é irrelevante). Se sim, continue estas instruções
   - If you do not boot into the regular 3DS HOME Menu (black screen, error screen, etc.), uninstalling CFW **WILL BRICK YOUR CONSOLE!**
9. Abra as Configurações do Sistema no seu console
   - If the console crashes at this point, the test has failed
10. Selecione "Outras Configurações"
11. Selecione "Perfil"
12. Selecione "Nome de Usuário"
13. Se você puder digitar um novo nome de usuário, o teste foi bem sucedido
    - If the keyboard does not appear, the screen freezes, or the console crashes, the test has failed
14. Desligue seu console

::: danger

Se você NÃO inicializar no Menu HOME padrão do 3DS, ou a configuração do sistema / seu teclado está inacessível, **NÃO continue com estas instruções**! Entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp) e pergunte (em Inglês) para alguém lá te ajudar.

:::

### Section IV - NAND Backup

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
2. Aperte (Home) para abrir o menu de ações
3. Selecione "Scripts..."
4. Selecione "GM9Megascript"
5. Selecione "Backup Options"
6. Selecione "SysNAND Backup"
7. Aperte (A) para confirmar
   - This process will take some time
   - If you get an error, ensure you have at least 1.3GB of free space on your SD card
8. Aperte (B) para retornar para o menu principal
9. Selecione "Exit"
10. Aperte (Home) para abrir o menu de ações
11. Selecione "Poweroff system" para desligar seu console

### Section V - Removing illegitimate content

::: warning

Esta seção removerá conteúdo ilegítimo, como homebrew e cartuchos dumped. Se você tem saves com que você se importa, faça backup com um gerenciador de saves antes de continuar!

:::

1. Ligue o seu console
2. Abra as Configurações do Sistema no seu console
3. Navegue até Gerenciador de Dados > Nintendo 3DS > Software
4. Nessa lista de software, delete qualquer conteúdo que não seja relativo a Nintendo instalado enquanto estiver usando o CFW
   - This includes common system software such as FBI, Anemone3DS, Luma Updater, Homebrew Launcher, Checkpoint, and others, along with any games and titles that you did _not_ install from the eShop
5. Navegue para `Gerenciador de Dados` -> `DSiWare`
6. Nessa lista de software, delete qualquer conteúdo que não seja relativo a Nintendo instalado enquanto estiver usando o CFW
   - This includes software such as TWiLightMenu++, along with any games and titles that you did _not_ install from the eShop
   - Failure to remove all CFW software from both the 3DS and DSiWare sections before uninstalling CFW may prevent or disable access to the Data Management menu after uninstalling CFW, which will make it difficult to re-install CFW in the future
7. Saia do aplicativo Configuração do Console
8. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
9. Aguarde até que você veja os dois botões
10. Aperte (Gatilho Esquerdo) + (D-pad pra baixo) + (Select) ao mesmo tempo para abrir o menu Rosalina
11. Selecione "Miscellaneous options"
12. Select "Switch the hb. title to the current app."
13. Aperte (B) para continuar
14. Aperte (B) para retornar para o menu principal do Rosalina
15. Aperte (B) para sair do menu do Rosalina
16. Aperte (Home), depois feche o Download Play
17. Launch the Download Play application (![](/images/download-play-icon.png){height="24px" width="24px"})
18. Seu console deve inicializar o Homebrew Launcher
19. Inicie o DSiWare Uninstaller da lista de homebrew
20. Siga as instruções e permita que o programa desinstale
21. Assim que o processo tiver sido bem-sucedido, saia do Homebrew Launcher e desligue seu console

### Section VI - System Format

Essa seção irá garantir que todos os tickets ilegítimos sejam removidos, permitindo que a eShop funcione normalmente. Isso removerá todo o conteúdo do 3DS e desconectará você do seu NNID. Tenha em mente que a chave de criptografia do seu console será embaralhada, o que significa que quaisquer dados antigos ficarão inacessíveis, mesmo que você tenha um backup do conteúdo do seu SD.

1. Ligue o seu console
2. Abra as Configurações do Sistema no seu console
3. Navegue para Outras Configurações -> Próxima Página (até a página final) -> Formatar console
4. Siga as instruções para formatar seu 3DS

### Section VII - Running Uninstall Script

::: warning

Esta é a sua oportunidade final de verificar se todas as etapas de segurança acima foram seguidas! Por favor, certifique-se de que você seguiu todas as seções desta página, **especialmente** `Seção III - Teste de segurança`, antes de continuar.

:::

::: danger

Se você está removendo o CFW porque:

- You want to re-install it
- You want to change SD cards
- Your SD card was lost or corrupted
- One of your games is broken
- One of your system applications is broken
- Your console is unable to boot to HOME Menu

<u>**STOP!!!**</u> Uninstalling custom firmware is an unnecessary risk that will at best waste your time and at worst <u>**BRICK**</u> your console. Uma ideia melhor seria pedir ajuda a [Nintendo Homebrew no Discord](https://discord.gg/MWxPgEp).

:::

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
   - If you instead see the Luma3DS chainloader, use the D-Pad and the (A) button to select GodMode9
2. Aperte (Home) para abrir o menu de ações
3. Selecione "Scripts..."
4. Selecione "GM9Megascript"
5. Selecione "Hax Options"
6. Selecione "Un-install Hax"
7. Quando solicitado, aperte (A) para prosseguir
8. Aperte (A) para destravar "SysNAND (lvl3) writing", então aperte a sequência de botões solicitada
9. Aperte (A) para continuar
10. Aperte (B) para retornar para o menu principal
11. Selecione "Exit"
12. Se solicitado, aperte (A) para bloquear as permissões de escrita
13. Aperte (Start) para reiniciar seu console

___

::: tip

Todos o custom firmware foi removido do seu console.

:::

::: info

Agora você pode remover quaisquer arquivos e pastas extras da raiz do seu cartão SD que _não_ são as pastas `Nintendo 3DS`, `DCIM` ou `private`.

:::
