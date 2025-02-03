# Troubleshooting (Pós-Instalação)

Esta página oferece recursos de solução de problemas para problemas encontrados depois que custom firmware foi instalado. Se você não consegue resolver seu problema com o conselho nesta página, por favor entre no [Nintendo Homebrew no Discord](https://discord.gg/MWxPgEp) e descreva o seu problema, incluindo o que você já tentou.

## Problemas de inicialização

::: info

As etapas detalhadas aqui geralmente assumem que o seu console tem um setup de custom firmware moderno (boot9strap + Luma3DS 8.0 ou superior). Se o seu console está executando uma configuração de homebrew mais antiga (por exemplo, algo baseado em arm9loaderhax ou menuhax), você deve atualizar sua configuração antes de tentar essas instruções.

:::

### Luzes indicadoras de energia/notificação

:::details Meu console desliga quando eu tento ligá-lo, e/ou o LED de notificação mostra uma cor ao iniciar

Há um problema com seu arquivo `boot.firm`. Se você estiver executando [boot9strap 1.4](https://github.com/SciresM/boot9strap/releases/tag/1.4), seu LED de notificação do 3DS poderá ter uma certa cor. Esta cor é usada para diagnosticar problemas que envolvem o arquivo `boot.firm` no cartão SD ou na memória interna. Em versões mais antigas do boot9strap, a luz azul irá desligar quase imediatamente ao tentar ligar o console.

Se o LED de notificação piscar:

- **Branco**: Seu 3DS não conseguiu encontrar `boot.firm` no seu cartão SD ou na memória interna.
- **Magenta**: Seu 3DS não conseguiu encontrar `boot.firm` no seu cartão SD. Foi capaz de encontrar `boot.firm` na memória interna, mas o arquivo está corrompido.
- **Vermelho**: Seu 3DS conseguiu encontrar `boot.firm` em ambos cartão SD e memória interna, mas ambos arquivos estão corrompidos.

Você pode obter um novo arquivo `boot.firm` baixando a [versão mais recente do Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest), extraindo e colocando o `boot.firm` na raiz do seu cartão SD. Se o seu arquivo `boot.firm` está sendo constantemente detectado como corrompido, você pode querer verificar se há erros no seu cartão SD ([Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), ou [macOS](f3xswift-\(mac\))). Além disso, note que o 3DS tende a ter problemas com arquivos extraídos usando WinRAR.

Se você ouvir um "pop", potencialmente acompanhado com a tela ativando por um segundo, há um problema de hardware no seu dispositivo (como um cabo de tela desconectado). Você talvez possa fazer seu dispositivo inicializar segurando-o em certos ângulos.

:::

:::details Meu console fica preso em uma tela preta com a luz azul ligada

As etapas abaixo podem ser tentadas em qualquer ordem, mas são listadas de menos para mais demorada.

1. Desligue o console, remova o cartão SD, insira-o novamente e, em seguida, ligue seu console.
2. Desligue seu console, ejete o cartucho do jogo se estiver inserido, ligue o seu console, e espere até dez minutos. Se o seu console inicializar dentro de dez minutos, o problema foi corrigido e é improvável que volte a ocorrer
3. Renomeie a pasta `Nintendo 3DS` no seu cartão SD para `Nintendo 3DS_BACKUP`, depois tente inicializar. Se o seu console é iniciado com sucesso, há algum problema na pasta `Nintendo 3DS`. Tente limpar a extdata do Menu HOME:
   - Navegue até `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/`
   - Delete a pasta correspondente à região de seu 3DS:
     - **Região EUR**: `00000098`
     - **Região JPN**: `00000082`
     - **Região USA**: `0000008f`
     - **Região CHN**: `000000A1`
     - **Região KOR**: `000000A9`
     - **Região TWN**: `000000B1`
4. Tente iniciar no modo de recuperação e atualizar o seu sistema:
   - Desligue seu console
   - Segure (Gatilho Esquerdo) + (Gatilho Direito) + (D-Pad Cima) + (A)
   - Ligue o seu console
   - Se obtiver sucesso, o console iniciará em uma tela de "atualize seu sistema"
5. Siga o guia de [CTRTransfer](ctrtransfer)
6. Para mais suporte, peça ajuda no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp)

:::

### Mensagem de erro ao inicializar

:::details "An error has occurred: Failed to apply 1 FIRM patch(es)" ou "An exception has occurred -- Current process: pm"

Sua versão do Luma3DS está desatualizada. Baixe a versão mais recente do [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) e coloque `boot.firm` na raiz do seu cartão SD, substituindo qualquer arquivo existente. Certifique-se de estar extraindo o arquivo ZIP com qualquer outra ferramenta que não seja o WinRAR, pois é conhecido por causar problemas com arquivos relacionados ao 3DS.

:::

:::details "Unable to mount CTRNAND or load the CTRNAND FIRM. Please use an external one."

Há uma série de razões para que isto possa estar acontecendo. Este erro geralmente pode ser corrigido seguindo o guia de [CTRTransfer](ctrtransfer).

:::

:::details "An error has occured. Hold down the POWER button to turn off the power..."

Os ARM11 exception handlers estão desabilitados, ou custom firmware não está instalado. Tente habilitar os ARM11 exception handlers:

- Desligue seu console
- Segure (Select)
- Ligue seu console enquanto segura (Select)
- Se a caixa "Disable ARM11 exception handlers" estiver marcada, desmarque-a

:::

:::details Estão faltando aplicativos instalados no Menu HOME

Isso pode ser causado por várias razões, mas principalmente porque o seu cartão SD não está sendo lido pelo sistema.
Você pode verificar se seu SD está sendo lido segurando SELECT durante a inicialização e verificando o texto amarelo na parte inferior; Se disser "Booted from CTRNAND via B9S", então seu console está iniciando da memória interna e não do cartão SD.
Se este for o caso, tente os passos abaixo, os quais são listados de mais fácil para mais difícil:

1. Desligue o console, remova o cartão SD, insira-o novamente e, em seguida, ligue seu console
2. Desligue o console, remova o cartão SD, insira-o no seu computador, baixe a versão mais recente do [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest), extraia `boot.firm` do `Luma3DS.zip` e coloque-o na raiz do seu cartão SD (substituindo qualquer arquivo existente)
3. Desligue o console, remova o cartão SD, insira-o no seu computador e reformate o cartão SD de acordo com o sistema operacional do seu computador: [Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)) _(isso irá apagar os dados do seu cartão SD)_
4. Verifique se há erros no seu cartão SD de acordo com o sistema operacional do seu computador: [Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), [macOS](f3xswift-\(mac\)). Se o seu cartão SD estiver marcado como defeituoso, então você terá que substituir o cartão SD
5. Sua entrada de cartão SD pode estar com problemas. Entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp) para obter mais ajuda

:::

:::details Tela azul "BOOTROM ERROR"

Seu console provavelmente está hard-bricked. Você precisará comprar um flashcart de ntrboot para reinstalar o boot9strap para tentar consertar seu console. Isso também pode indicar um problema de hardware que não pode ser corrigido. De qualquer forma, entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp) para obter ajuda.

- Também é possível que alguém tenha definido um splash que se pareça com um brick. Tente deixar o seu console ligado, esperando na tela azul, por cinco minutos.

:::

:::details Algum outro erro

Por favor, tire uma foto do erro e entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp) para obter ajuda.

:::

## Erros de software em consoles com custom firmware

:::details A funcionalidade DSi / DS está quebrada ou foi substituída pelo Flipnote Studio

1. Baixe a versão mais recente do [TWLFix-CFW](https://github.com/MechanicalDragon0687/TWLFix-CFW/releases/latest) (o arquivo `.3dsx`)
2. Desligue seu console
3. Crie uma pasta chamada `3ds` na raiz do seu cartão SD se ela ainda não existir
4. Copie o arquivo `TWLFix-CFW.3dsx` para a pasta `/3ds/` do seu cartão SD
5. Reinsira o cartão SD no seu console
6. Abra o Homebrew Launcher
7. Inicie o TWLFix-CFW da lista de homebrews
8. Aperte (A) para desinstalar os aplicativos TWL quebrados
9. Pressione (Start) para reiniciar o console
10. Atualize seu console indo em Configurações do Sistema, depois em "Outras Configurações", depois indo até a direita e usando "Atualização do Sistema"
    - A atualização verificará que os aplicativos TWL essenciais foram desinstalados e irá baixá-los novamente e reinstalá-los
11. Assim que a atualização for concluída, toque em "OK" para reiniciar o console

:::

:::details A funcionalidade de Console Virtual do GBA e/ou Modo de Segurança está quebrada

O seu console está executando o Luma3DS 6.6 ou inferior, provavelmente via arm9loaderhax. Você deve seguir [A9LH para B9S](a9lh-to-b9s) para atualizar seu console para um ambiente moderno de custom firmware.

:::

:::details Jogos no modo de memória estendida (Pokémon Sun/Moon, Smash, etc.) não funcionam

Isso pode ocorrer após uma CTRTransfer ou mudança de região no Old 3DS / 2DS. Siga as instruções [aqui](region-changing#section-vi---fixing-locale-related-issues) para corrigir este erro (ignorando as etapas 3, 4, 5 e 6).

:::

:::details Exception screen ao iniciar/carregar um aplicativo

Procure pela sua exception screen [nesta página](https://wiki.hacks.guide/wiki/3DS:Error_screens/Luma3DS_exception_screen).
Se você não conseguiu encontrar seu erro ou as instruções não funcionaram, entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp) para obter mais assistência.

:::

:::details Abrir as configurações do Menu HOME faz o console ter um crash ou carrega o Homebrew Launcher

Seu console provavelmente ainda tem menuhax67 instalado. Para desinstalar o menuhax67, baixe a versão mais recente do [menuhax67](https://github.com/zoogie/menuhax67/releases/latest) (o `.zip`), então siga a [seção "Desinstalar menuhax67"](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits/menuhax67#Uninstall_menuhax67).

:::

:::details Outra coisa

Entre no [Discord do Nintendo Homebrew](https://discord.gg/MWxPgEp) para obter ajuda, e descreva o erro que você vê.

:::

## Outros troubleshootings

:::details Limpar extdata do Menu HOME

1. Desligue seu console
2. Insira o cartão SD no seu computador
3. Navegue até a pasta `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` no seu cartão SD
4. Delete a pasta correspondente à região de seu 3DS:
   - **Região EUR**: `00000098`
   - **Região JPN**: `00000082`
   - **Região USA**: `0000008f`
   - **Região CHN**: `000000A1`
   - **Região KOR**: `000000A9`
   - **Região TWN**: `000000B1`
5. Reinsira o cartão SD no seu console

:::

:::details Limpar dados de tema do Menu HOME

1. Desligue seu console
2. Insira o cartão SD no seu computador
3. Navegue até a pasta `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` no seu cartão SD
4. Delete a pasta correspondente à região de seu 3DS:
   - **Região EUR**: `000002ce`
   - **Região JPN**: `000002cc`
   - **Região USA**: `000002cd`
   - **Região KOR**: `000002cf`
5. Reinsira o cartão SD no seu console

:::

:::details Entrando no Homebrew Launcher manualmente

Se você estiver sem o aplicativo do Homebrew Launcher no seu Menu HOME, você pode seguir estas instruções para entrar no Homebrew Launcher manualmente. (Você precisará de [boot.3dsx e boot.firm](https://github.com/LumaTeam/Luma3DS/releases/latest) na raiz do seu cartão SD.)

<!--@include: ./_include/launch-hbl-dlp.md -->

:::

:::details Desativando o Controle dos Pais

Desative o recurso Controle dos Pais indo em Configurações do Sistema -> Controles dos Pais e inserindo o PIN, então pressionando "Limpar configurações", depois "Excluir" para removê-lo.
Entretanto, se você não sabe o PIN e, portanto, não pode acessar as configurações do console, você precisará desativá-lo. Para fazer isso, você precisa obter a chave mestra do seu console (mkey):

1. Vá para [este site](https://mkey.eiphax.tech/)
2. Preencha as seguintes caixas com as informações:
   - Device Type: Selecione "3DS" (o mesmo se aplica se estiver utilizando um 2DS, New 3DS (XL/LL) ou New 2DS (XL/LL))
   - System Date: O dia e mês definidos em seu console
   - Inquiry Number: Pode ser obtido ao pressionar "Esqueci o PIN" então em "Eu esqueci" na tela de Controle dos Pais
3. Depois de obter sua mkey, pressione OK na tela onde você obteve seu Inquiry Number, então insira a mkey
4. Pressione "Limpar Configurações", depois "Excluir" para remover todos os dados do Controle dos Pais

:::

---

<!--@include: ./_include/troubleshooting-return.md -->
