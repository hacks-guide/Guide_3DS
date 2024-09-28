# FAQ

::: danger

<!--@include: ./_include/3ds-online.md -->

:::

::: info

**Sim**, você ainda pode instalar custom firmware no seu 3DS, mesmo após o encerramento da eShop.

:::

## Pre-Installation FAQ

:::details I am on the latest system version. Is my console hackable without any external hardware/prerequisites?

**Sim!** New 3DS / New 3DS XL / New 2DS XL podem usar [super-skaterhax](installing-boot9strap-\(super-skaterhax\)), enquanto 3DS / 3DS XL / 2DS podem usar [MSET9](installing-boot9strap-\(mset9\)).

:::

:::details What consoles is this guide compatible with?

Este guia é compatível com todos os dispositivos de varejo da família 3DS (3DS, 3DS XL, 2DS, New 3DS, New 3DS XL, New 2DS XL). Se a versão de sistema é exibida como "0.0.0-0", então você pode ter uma unidade de desenvolvedor.

:::

:::details How risky is hacking my console?

Bricks agora são efetivamente impossíveis a menos que você esteja tentando causar um brick em seu console de propósito.

:::

:::details Can I run awesome homebrew and emulators with this?

Sim! Este guia irá instalar alguns aplicativos homebrew úteis, incluindo [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases/latest), que atua como uma loja de aplicativos homebrew.

:::

:::details Can I use this to play games from other regions?

Sim; Luma3DS irá ignorar automaticamente a verificação de região de cartuchos e aplicativos instalados. Alguns jogos podem precisar usar o [recurso de locale emulation do Luma](https://wiki.hacks.guide/wiki/3DS:Setting_game_locales) para funcionar corretamente em consoles fora da região.

:::

:::details Will I lose any features if I install CFW?

Não. Consoles com custom firmware podem baixar as atualizações de jogos e rodar cartuchos físicos como qualquer outro 3DS pode.

:::

:::details Can I keep my NNID, saves, digital games (etc.)?

Seu NNID (se você tiver um) não será afetado por este guia. Consoles com uma região de KOR, CHN ou TWN não têm funcionalidade de NNID em primeiro lugar e portanto não são afetados.

Seguir este guia não deve resultar em perda de dados (saves, jogos digitais, etc), mas a corrupção do cartão SD é sempre uma possibilidade. Você deve fazer um backup do conteúdo do seu cartão SD se você tiver dados importantes.

:::

:::details Will my 3DS be banned for having CFW?

Os banimentos não são mais possíveis porque os serviços da Nintendo Network foram desligados (para todos).

:::

:::details Can I do this without a computer (e.g. an Android phone)?

Sim! Tudo que você precisa é a capacidade de colocar arquivos em um cartão SD compatível.

:::

:::details What size SD card can I use?

Você precisará de pelo menos 1.5GB de espaço livre no cartão SD para seguir este guia em sua totalidade. Enquanto o 3DS é oficialmente compatível com cartões SD de até 32GB, cartões SD maiores podem ser usados caso sejam formatados manualmente como FAT32. Não é recomendado usar cartões SD maiores que 128GB devido a problemas conhecidos com gráficos de GBA e temas personalizados.

:::

:::details I heard about this thing I have to pay for (Gateway, Sky3DS, ntrboot, R4, etc). Is that something I need?

Não. Enquanto um flashcart de DS pode ser utilizado para modding de um 3DS usando [ntrboot](ntrboot), agora há um novo método de software disponível para a maioria dos consoles.

Os flashcarts com 3DS-mode como Gateway e Sky3DS não são recomendados porque eles estão obsoletos e podem carregar o risco de bricks.

:::

:::details What's the difference between custom firmware and homebrew?

Definitivamente falando, custom firmware refere-se a uma modificação do software do sistema 3DS para fazer coisas às quais ele normalmente não é capaz. Homebrew generally refers to software created outside of official sources (i.e. not distributed by eShop or cartridges).

Historicamente, o 3DS usa homebrew para acessar o homebrew de userland através de exploits mais antigos como ninjhax, que as pessoas às vezes chamaram de apenas "homebrew". O nível de acesso do sistema concedido com userland permitiu que você rodasse homebrew básico e emuladores, mas não permitia que você pudesse (facilmente) modificar jogos ou fazer dump de cartuchos. Também era muito menos estável, com o homebrew muitas vezes dando crashes indevidamente e exigindo um reinício completo. Custom firmware concede um nível muito maior de acesso ao sistema, sendo ao mesmo tempo mais estável do que pontos de entrada homebrew-only.

:::

## Post-Installation FAQ

:::details Is it safe to update my 3DS to the latest version with CFW?

Se você estiver usando o Luma3DS, o seu custom firmware loader (boot9strap) _nunca_ será removido ao executar uma atualização de sistema. Houve atualizações no passado que resultaram um crash do Luma3DS na inicialização, então é uma boa ideia esperar algumas horas para garantir que a atualização mais recente não tornará o console inutilizável temporariamente até que o Luma3DS seja atualizado. As atualizações do sistema podem ser executadas da mesma forma que em um 3DS não modificado: através da Configuração do console, Modo de Segurança, ou o aviso de atualização quando a atualização for automaticamente baixada.

:::

:::details How do I upgrade my SD card?

Copie e cole o conteúdo do cartão SD em um novo cartão SD formatado como FAT32. Para cartões de 128GB, é recomendado um tamanho de alocação de 65536. Cartões SD maiores que 128GB não são recomendados devido a problemas conhecidos com gráficos de GBA e temas personalizados.

:::

:::details Can I system transfer with CFW?

Sim, as transferências de sistema podem ser executadas através da função oficial de Transferência de Sistema para outros consoles com CFW (inconsistências podem ocorrer se o console de destino não for modificado). Tickets para aplicativos ilegítimos (homebrew) não transferirão, mas os aplicativos podem ser feitos para reaparecer com [faketik](https://github.com/ihaveamac/faketik/releases/latest). Certifique-se de não realizar uma transferência sem fio, pois isso excluirá os aplicativos ilegítimos. O CFW permanecerá em ambos os consoles.

:::

:::details How do I change the system language of a Japanese 3DS?

A única maneira de alterar a linguagem do sistema de um 3DS japonês para um idioma diferente do japonês é realizar uma [mudança de região](region-changing). Observe que é bem provável que isso quebre a Nintendo eShop no seu console, o que significa que você não poderá atualizar seus jogos, quer eles estejam na região ou fora da região.

:::

:::details How do I update homebrew applications?

Depende do formato do aplicativo homebrew. Geralmente:

- Homebrew in **CIA format** can be updated by installing the new CIA, which will usually overwrite the old one. Se o CIA antigo não for substituído, você pode deletar o antigo através do Gerenciador de Dados como qualquer outro aplicativo de 3DS.
- Homebrew in **3DSX format** can be updated by replacing the 3DSX file in `/3ds/` with a fresh copy. Se o aplicativo homebrew incluir recursos adicionais, você pode precisar colocar essa pasta em outro lugar. Consulte a documentação do aplicativo homebrew.
- For updating Luma3DS, see [this page](restoring-updating-cfw). Para atualizar o GodMode9, consulte [esta página](godmode9-usage#updating-godmode9).

:::

:::details How do I update my games?

Você pode continuar baixando atualizações de jogos da Nintendo eShop, mesmo que agora tenha desligado.

Se o jogo não for da mesma região do console, você precisará [fazer um dump das atualizações](dumping-titles-and-game-cartridges) de um 3DS que tenha as atualizações instaladas. A Nintendo eShop só contém atualizações para a região do console (por exemplo, um 3DS japonês só terá atualizações para jogos japoneses).

:::

:::details Help! Something bad happened and my 3DS won't boot to HOME Menu...

Por favor, veja o [guia de troubleshooting](troubleshooting#boot-issues-on-consoles-with-custom-firmware). **Desinstalar CFW quando seu console está em um estado não-inicializável não é recomendado, já que é muito provável que isso leve a um brick**.

:::

## menuhax / A9LH / Gateway FAQ

:::details I modded my console (x) years ago, so it already has some sort of homebrew. What should I do?

É recomendável que você atualize sua configuração para um ambiente moderno e baseado em boot9strap. Siga o guia [Checando por CFW](checking-for-cfw) para ver como atualizar sua instalação.

:::

:::details My setup works for me. Why should I upgrade it?

A grande maioria do homebrew moderno (como Checkpoint e BootNTR Selector) foram testados apenas em um servidor moderno, em configuração baseada em boot9strap, e pode não funcionar inteiramente (ou totalmente) em instalações mais antigas baseadas em menuhax, A9LH ou Gateway. Além disso, dependendo da sua instalação, você pode ser incapaz de atualizar com segurança para o firmware mais recente. Configurações modernas e baseadas em boot9strap permitem um nível maior de acesso ao sistema do que os métodos anteriores, incluindo a capacidade fazer o dump do bootrom do seu console.

:::

:::details Will I lose anything if I upgrade my setup?

A sua configuração antiga (incluindo sua EmuNAND, se você tiver uma) geralmente pode ser migrada diretamente para o boot9strap sem perda de dados. Se você tiver dados, que são particularmente importantes para você, seria uma boa ideia fazer um backup descriptografado de seus dados salvos antes de atualizar sua instalação com uma ferramenta como [JKSM](https://github.com/J-D-K/JKSM/releases/tag/12%2F20%2F2018).

:::

:::details How do I move saves from an existing Gateway setup to a more modern setup?

See [this thread](https://gbatemp.net/threads/425743/).

:::
