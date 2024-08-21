---
title: "Finalizando a instalação"
---

{% include toc title="Tabela de Conteúdo" %}

### Leitura Obrigatória

O arquivo `boot.firm` é o que é iniciado pelo boot9strap depois que ele termina de carregar a NAND. Neste caso, estamos usando o Luma3DS por [LumaTeam](https://github.com/LumaTeam/) para alterar o console, permitindo que ele execute um software de homebrew.

Nesta página, faremos backups de arquivos críticos do sistema e instalaremos os seguintes programas de homebrew. A maioria dessas etapas serão automatizadas usando um script que você irá executar no seu console.

{% capture notice-6 %}
O script irá instalar os seguintes aplicativos:

+ **[FBI](https://github.com/lifehackerhansol/FBI)** *(instala aplicativos formatados em CIA)*
+ **[Homebrew Launcher Loader](https://github.com/PabloMK7/homebrew_launcher_dummy)** *(inicia o Homebrew Launcher)*
+ **[Anemone3DS](https://github.com/astronautlevel2/Anemone3DS)** *(instala temas personalizados)*
+ **[Checkpoint](https://github.com/FlagBrew/Checkpoint)** *(faz backup e restaura arquivos de saves para jogos de 3DS e DS)*
+ **[ftpd](https://github.com/mtheall/ftpd)** *(acesse o cartão SD do seu 3DS através da internet)*
+ **[Universal-Updater](https://github.com/Universal-Team/Universal-Updater/)** *(uma loja de aplicativos homebrew para download de homebrew do 3DS por Wi-Fi)*
+ **[GodMode9](https://github.com/d0k3/GodMode9)** *(ferramenta multiuso que pode fazer funções de NAND e cartucho)*

Se você não quer um destes aplicativos, você pode removê-los depois de concluir esta página navegando até Configurações do Sistema -> Gerenciamento de Dados -> Nintendo 3DS -> Software. (GodMode9 não pode ser removido desta maneira e é geralmente necessário para outras funções.)
{% endcapture %}
<div class="notice--info">{{ notice-6 | markdownify }}</div>

### Notas de Compatibilidade

Se o seu **New 3DS** estava na versão 2.1.0 antes de seguir este guia, você deve [restaurar o seu backup da NAND](godmode9-usage#restoring-a-nand-backup) antes de continuar. Isto provavelmente não se aplica a você, a menos que você seguiu este guia em 2017.
{: .notice--warning}

Se a sua instalação do CFW anterior era baseada em EmuNAND e você deseja mover o conteúdo da sua EmuNAND/RedNAND para SysNAND, siga [Mover EmuNAND](move-emunand) antes de seguir esta página. Se você não sabe o que é uma EmuNAND, isso não se aplica a você.
{: .notice--info}

### O que você precisa

* [x_finalize_helper.firm](https://github.com/hacks-guide/finalize/releases/latest/download/x_finalize_helper.firm) (download direto)
* [finalize.romfs](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) (download direto)

### Instruções

#### Seção I - Preparação

Nesta seção, você copiará os arquivos necessários para seguir o resto das instruções nesta página.

1. Desligue seu console
1. Insira o cartão SD no seu computador
1. Copie `finalize.romfs` para a raiz do seu cartão SD
1. Abra a pasta `luma` no seu cartão SD e crie uma pasta chamada `payloads` dentro, se já não existir
1. Copie `finalize_helper.firm` para a pasta `payloads`
1. Reinsira o cartão SD no seu console

As capturas de tela abaixo indicam o layout mínimo do cartão SD que é necessário para seguir esta página. Você pode ter arquivos ou pastas extras no seu cartão SD, dependendo da sua instalação anterior ou do método que você seguiu.

![]({{ "/images/screenshots/finalizing-root-layout.png" | absolute_url }})
{: .notice--info}

![]({{ "/images/screenshots/finalizing-luma-payloads.png" | absolute_url }})
{: .notice--info}

#### Seção II - Atualizando o Sistema

Nesta seção, você atualizará seu sistema para a versão mais recente, que é seguro de fazer com custom firmware.

{% include_relative include/sysupdate.txt cfw="true" %}

#### Seção III - Configuração RTC e DSP

Nesta seção, você irá sincronizar o relógio interno do seu 3DS com a hora real e descarregar o firmware de som (que é necessário para que alguns softwares de homebrew utilizem o som corretamente).

1. Aperte (Gatilho Esquerdo) + (D-pad pra baixo) + (Select) ao mesmo tempo para abrir o menu Rosalina
    + Se um destes botões estiver quebrado, baixe [config.ini]({{ base_path }}/assets/config.ini) e coloque em sua pasta `luma`, substituindo o já existente. Isso vai mudar a combinação de botões do Rosalina menu para (X) + (Y)
1. Selecione "Miscellaneous options"
1. Selecione "Dump DSP firmware"
1. Aperte (B) para continuar
1. Selecione "Nullify user time offset"
1. Aperte (B) para continuar
1. Aperte (B) para retornar para o menu principal do Rosalina
1. Aperte (B) para sair do menu do Rosalina

#### Seção IV - Preparando o Script

Nesta seção, você usará uma série de scripts para automatizar a instalação de homebrews, limpeza de cartão SD e backup de arquivos do sistema.

1. Desligue seu console
1. Aperte e segure (X), e enquanto segura (X), ligue o console. Isto irá iniciar o Finalizing Setup Helper
    + Se você inicializar no Menu HOME, sua pasta `payloads` pode estar nomeada incorretamente ou no local errado
    + Se você encontrar um erro, consulte a página de [troubleshooting](troubleshooting#finalizing-setup)
1. Se o Helper for bem-sucedido, o seu console iniciará no GodMode9
    + A partir daqui você pode acessar o GodMode9 segurando START enquanto inicia o seu console
1. Se você for solicitado para criar um backup de arquivos essenciais, aperte (A) pra fazê-lo, e depois aperte (A) para continuar quando ele for concluído
1. Se você for solicitado para consertar o RTC date&time, pressione (A) para consertar, então insira a data e a hora, depois pressione (A) para continuar
1. Aperte (Home) para abrir o menu de ações
1. Selecione "Scripts..."
1. Selecione "finalize"
1. Siga as instruções no script, respondendo a quaisquer perguntas que lhe sejam feitas
    + Se você encontrar um erro, siga as instruções na mensagem de erro ou consulte a página [troubleshooting](troubleshooting#finalizing-setup)
1. Uma vez que o script disser "Setup complete!", aperte (A) para desligar o dispositivo
    + Se você NÃO ver a mensagem "Setup complete!", o script não foi bem sucedido e você precisará refazer esta seção
1. Insira o cartão SD no seu computador
1. Copie a pasta `/gm9/backups/` no seu cartão SD para um local seguro no seu computador
    + Esta pasta contém backups críticos de arquivos e deve ser salva em vários locais (por exemplo, um armazenamento na nuvem) se possível
    + Os dois arquivos da SysNAND são seu backup da NAND e podem ser usados para reverter seu console para um estado funcional se ele obtiver um brick por um problema de software
    + O arquivo `essential.exefs` contém arquivos exclusivos do sistema do seu console e pode ser usado para recuperar seus dados em caso de falha de hardware
1. Se você ainda os tiver, exclua os dois arquivos `SysNAND` da pasta `/gm9/backups/` do seu cartão SD
    + O arquivo `essential.exefs` é pequeno e pode ser mantido em seu cartão SD para acesso fácil

___

Você terminou! Custom firmware agora está totalmente configurado no seu console.
{: .notice--success}

Tentando descobrir o que fazer com seu dispositivo recém-modificado? Visite [nossa wiki](https://wiki.hacks.guide/wiki/3DS:Things_to_do)!
{: .notice--info}

### Informações e Notas

{% capture notice-6 %}
Aqui estão alguns combos que você deve saber:

+ Segurar (Select) durante a inicialização irá abrir o menu de configuração do Luma3DS.
+ Pressionar (Start) durante a inicialização irá abrir o GodMode9, ou se você tiver vários payloads em `/luma/payloads/`, o chainloader do Luma3DS.
+ Por padrão, pressionar (Gatilho Esquerdo) + (Botão direcional para baixo) + (Select) enquanto no modo 3DS abrirá o menu Rosalina, onde você pode verificar informações do sistema, fazer capturas de tela, habilitar cheats e muito mais. Isto pode ser alterado a partir do menu do Rosalina.
+ Segurar (Start) + (Select) + (X) durante a inicialização fará com que o LED de notificação mostre uma cor para fins de depuração. Veja o [changelog](https://github.com/SciresM/boot9strap/releases/tag/1.4) para uma lista.
{% endcapture %}

<div class="notice--info">{{ notice-6 | markdownify }}</div>

Para informações sobre como usar os vários recursos do GodMode9, confira as páginas [Uso do GodMode9](godmode9-usage) e [Fazendo Dump de Aplicativos e Jogos de Cartucho](dumping-titles-and-game-cartridges).
{: .notice--info}
