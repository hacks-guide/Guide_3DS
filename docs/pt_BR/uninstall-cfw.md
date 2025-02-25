# Desinstalar CFW

## Leitura Obrigatória

Isso irá remover completamente CFW do seu console, incluindo boot9strap e Luma3DS, com o propósito de restaurar o console ao padrão.

Quaisquer jogos não assinados (ilegítimos) serão dados como inutilizáveis e serão removidos durante este processo. Use um [gerenciador de saves](https://github.com/FlagBrew/Checkpoint/releases/latest) para fazer backup de quaisquer saves com que você se importe.

::: danger

Se você está removendo o CFW porque:

- Você deseja reinstalá-lo
- Você deseja mudar de cartão SD
- Seu cartão SD foi perdido ou corrompido
- Um de seus jogos não funciona
- Um dos seus aplicativos do sistema não funciona
- Seu console não consegue iniciar o Menu HOME

<u>**PARE!!!**</u> Desinstalar o custom firmware é um risco desnecessário que na melhor das hipóteses fará você perder tempo, e na pior das hipoteses causará um <u>**BRICK**</u> no seu console. Uma ideia melhor seria pedir ajuda a [Nintendo Homebrew no Discord](https://discord.gg/MWxPgEp).

:::

::: danger

Se você já fez QUALQUER das seguintes coisas:

- [Mudou a região](region-changing) do console
- Instalou um teclado personalizado
- Instalou um Menu HOME personalizado (_não_ um tema personalizado)
- Mudou manualmente a chave de criptografia (`movable.sed`) do console
- Desbaniu o console

então desinstalar o custom firmware <u>**VAI CAUSAR UM BRICK NO SEU CONSOLE**</u>. Se isso se aplicar a você, [restaure um backup da NAND limpo](godmode9-usage#restoring-a-nand-backup) antes de continuar.

:::

::: warning

Estas instruções só funcionarão em consoles com uma versão 8.0 ou superior do Luma3DS. Se você tem uma versão mais antiga do Luma, você deve atualizar sua configuração antes de seguir estas instruções. Siga [esta página](checking-for-cfw) para encontrar suas instruções de atualização.

:::

## O que é necessário

- A versão mais recente do [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (o arquivo `.zip` do Luma3DS)
- A versão mais recente do [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (o arquivo `.zip` do GodMode9)
- A versão mais recente do [DSiWare Uninstaller](https://github.com/MechanicalDragon0687/DSiWare-Uninstaller/releases/latest)
- [safety_test.gm9](/gm9_scripts/safety_test.gm9)

## Instruções

### Seção I - Preparação

1. Desligue seu console
2. Insira o cartão SD no seu computador
3. Copie tudo do arquivo `.zip` do Luma3DS para a raiz do seu cartão SD
4. Copie `GodMode9.firm` do `.zip` do GodMode9 para a pasta `/luma/payloads/` no seu cartão SD
5. Copie a pasta `gm9` do `.zip` do GodMode9 para a raiz do seu cartão SD
6. Copie `DSiWareUninstaller.3dsx` para a pasta `/3ds/` no seu cartão SD
7. Copie `safety_test.gm9` para a pasta `/gm9/scripts/` no seu cartão SD
8. Reinsira o cartão SD no seu console

### Seção II - Testes do Modo DS

O objetivo desta seção é verificar se os aplicativos do modo DS embutidos continuarão a funcionar assim que o CFW for desinstalado. Se você pular esta seção, o modo DS ou suas funções poderão ficar inacessíveis até que o CFW seja reinstalado.

#### Teste de Configurações de Conexão DS

1. Ligue o seu console
2. Abra as Configurações do Sistema no seu console
3. Navegue para `Configuração de Internet` -> `Conexões Nintendo DS`, depois clique em OK
4. Você deve iniciar no menu de Conexões Nintendo DS
   - Se o seu console exibir a versão japonesa do Flipnote Studio, uma tela preta, ou uma mensagem de erro, o teste falhou
5. Desligue seu console

#### Teste do Download Play de DS

1. Ligue o seu console
2. Abra o aplicativo Download Play (![](/images/download-play-icon.png){height="24px" width="24px"})
3. Selecione "Nintendo DS"
4. Se o seu console carregar em um menu "Download de software via DS Download Play", o teste foi bem sucedido
   - Se o seu console exibir a versão japonesa do Flipnote Studio, uma tela preta, ou uma mensagem de erro, o teste falhou
5. Desligue seu console

::: warning

Se qualquer um desses testes falhar, o Modo DS, DS Download Play, e/ou Conexões Nintendo DS podem estar inacessíveis quando o CFW for desinstalado! Você deve [corrigir o modo DS](troubleshooting-post-install) antes de continuar.

:::

### Seção III - Teste de Segurança

O objetivo desta seção é verificar se o console irá ligar e que as funções críticas do sistema, como as configurações do sistema e o teclado, funcionarão quando o CFW for desinstalado. **Se você pular esta seção, você pode CAUSAR UM BRICK no seu console!**

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
2. Se você for solicitado para criar um backup de arquivos essenciais, aperte (A) para fazê-lo, e então aperte (A) para continuar assim que estiver concluído
3. Se você for solicitado para consertar o RTC date&time, pressione (A) para consertar, então insira a data e a hora, depois pressione (A) para continuar
   - Note que, se você teve que consertar a data e hora do RTC, você também terá que corrigir a hora na Configuração do Console após acabar o guia
4. Aperte (Home) para abrir o menu de ações
5. Selecione "Scripts..."
6. Selecione "safety_test"
7. Leia o texto na tela e aperte (A) para continuar
8. Você deve iniciar no Menu HOME padrão do 3DS (qualquer tema personalizado é irrelevante). Se sim, continue estas instruções
   - Se o Menu HOME padrão do 3DS não aparecer (tela preta, tela de erro, etc.), desinstalar CFW **VAI CAUSAR UM BRICK NO SEU CONSOLE!**
9. Abra as Configurações do Sistema no seu console
   - Se o console travar ou exibir um erro neste ponto, o teste falhou
10. Selecione "Outras Configurações"
11. Selecione "Perfil"
12. Selecione "Nome de Usuário"
13. Se você puder digitar um novo nome de usuário, o teste foi bem sucedido
    - Se o teclado não aparecer, a tela congelar, ou o console exibir um erro, o teste falhou
14. Desligue seu console

::: danger

Se você NÃO inicializar no Menu HOME padrão do 3DS, ou a configuração do sistema / seu teclado está inacessível, **NÃO continue com estas instruções**! Entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp) e pergunte (em Inglês) para alguém lá te ajudar.

:::

### Seção IV - Backup da NAND

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
2. Aperte (Home) para abrir o menu de ações
3. Selecione "Scripts..."
4. Selecione "GM9Megascript"
5. Selecione "Backup Options"
6. Selecione "SysNAND Backup"
7. Aperte (A) para confirmar
   - Esse processo levará algum tempo
   - Se você receber um erro, certifique-se de ter pelo menos 1.3GB de espaço livre no seu cartão SD
8. Aperte (B) para retornar para o menu principal
9. Selecione "Exit"
10. Aperte (Home) para abrir o menu de ações
11. Selecione "Poweroff system" para desligar seu console

### Seção V - Removendo conteúdo ilegítimo

::: warning

Esta seção removerá conteúdo ilegítimo, como homebrew e cartuchos dumped. Se você tem saves com que você se importa, faça backup com um gerenciador de saves antes de continuar!

:::

1. Ligue o seu console
2. Abra as Configurações do Sistema no seu console
3. Navegue até Gerenciador de Dados > Nintendo 3DS > Software
4. Nessa lista de software, delete qualquer conteúdo que não seja relativo a Nintendo instalado enquanto estiver usando o CFW
   - Isso inclui softwares de sistema comuns como FBI, Anemone3DS, Luma Updater, Homebrew Launcher, Checkpoint e outros, assim como quaisquer jogos e títulos que você _não_ instalou da eShop
5. Navegue para `Gerenciador de Dados` -> `DSiWare`
6. Nessa lista de software, delete qualquer conteúdo que não seja relativo a Nintendo instalado enquanto estiver usando o CFW
   - Isso inclui software como TWiLightMenu++, assim como quaisquer jogos e aplicativos que você _não_ instalou da eShop
   - Falhar ao remover todos os softwares CFW das seções de 3DS e DSiWare antes de desinstalar o CFW pode impedir ou desabilitar o acesso ao menu de Gerenciamento de Dados após desinstalar o CFW, o que pode dificultar a reinstalação de CFW no futuro
7. Saia do aplicativo Configuração do Console
8. Abra o aplicativo Download Play (![](/images/download-play-icon.png){height="24px" width="24px"})
9. Aguarde até que você veja os dois botões
10. Aperte (Gatilho Esquerdo) + (D-pad pra baixo) + (Select) ao mesmo tempo para abrir o menu Rosalina
11. Selecione "Miscellaneous options"
12. Selecione "Switch the hb. title to the current app."
13. Press (B) to continue
14. Aperte (B) para retornar para o menu principal do Rosalina
15. Aperte (B) para sair do menu do Rosalina
16. Aperte (Home), depois feche o Download Play
17. Abra o aplicativo Download Play (![](/images/download-play-icon.png){height="24px" width="24px"})
18. Seu console deve inicializar o Homebrew Launcher
19. Inicie o DSiWare Uninstaller da lista de homebrew
20. Siga as instruções e permita que o programa desinstale
21. Assim que o processo tiver sido bem-sucedido, saia do Homebrew Launcher e desligue seu console

### Seção VI - Formatando o sistema

Essa seção irá garantir que todos os tickets ilegítimos sejam removidos, permitindo que a eShop funcione normalmente. Isso removerá todo o conteúdo do 3DS e desconectará você do seu NNID. Tenha em mente que a chave de criptografia do seu console será embaralhada, o que significa que quaisquer dados antigos ficarão inacessíveis, mesmo que você tenha um backup do conteúdo do seu SD.

1. Ligue o seu console
2. Abra as Configurações do Sistema no seu console
3. Navegue para Outras Configurações -> Próxima Página (até a página final) -> Formatar console
4. Siga as instruções para formatar seu 3DS

### Seção VII - Executando o Script de Desinstalação

::: warning

Esta é a sua oportunidade final de verificar se todas as etapas de segurança acima foram seguidas! Por favor, certifique-se de que você seguiu todas as seções desta página, **especialmente** `Seção III - Teste de segurança`, antes de continuar.

:::

::: danger

Se você está removendo o CFW porque:

- Você deseja reinstalá-lo
- Você deseja mudar de cartão SD
- Seu cartão SD foi perdido ou corrompido
- Um de seus jogos não funciona
- Um dos seus aplicativos do sistema não funciona
- Seu console não consegue iniciar o Menu HOME

<u>**PARE!!!**</u> Desinstalar o custom firmware é um risco desnecessário que na melhor das hipóteses fará você perder tempo, e na pior das hipoteses causará um <u>**BRICK**</u> no seu console. Uma ideia melhor seria pedir ajuda a [Nintendo Homebrew no Discord](https://discord.gg/MWxPgEp).

:::

1. Aperte e segure (Start), e enquanto segura (Start), ligue seu console. Isso vai inicializar o GodMode9
   - Se ao invés disso você ver o chainloader do Luma3DS, use o D-Pad e o botão (A) para selecionar o GodMode9
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
