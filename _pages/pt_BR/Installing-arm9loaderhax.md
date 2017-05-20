---
title: "Instalando arm9loaderhax"
permalink: /installing-arm9loaderhax.html
lang: pt_BR
ref: installing-arm9loaderhax
---

A etapa final deste guia é instalar o arm9loaderhax e configurar o Luma3DS para rodar milisegundos após ligar o aparelho. Isso é realizado ao utilizar o SafeA9LHInstaller por [AuroraWright](https://github.com/AuroraWright/).
{: .notice}

Isto irá instalar o [Fork de AuroraWright](https://github.com/AuroraWright/arm9loaderhax) do arm9loaderhax.
{: .notice--info}

Iremos também configurar a habilidade de rodar payloads do arm9loaderhax, nos dando a habilidade de desbrickar o nosso SysNAND, de situações que normalmente brickariam o nosso aparelho, ao restaurar o backup da NAND.
{: .notice--info}

**Você não pode usar o OTP de outro console, é GARANTIDO que você irá brickar se fizer isso.**
{: .notice--danger}

#### Visão geral das etapas

Nesta seção, vamos passar pela etapa à qual todas as outras etapas levaram: instalar o arm9loaderhax.

Este é quase o melhor tipo possível de exploit do dispositivo, porque é permanentemente instalável nas partições FIRM da NAND e é executado antes da maior parte do sistema operacional, permitindo que ele não só funcione em *todas* as versões depois de instalado, mas também consegue se proteger e oferecer meios de recuperar um 3DS brickado, como um menu HOME não-funcional ou a instalação de um título corrompido.

O arquivo `arm9loaderhax.bin` é o que é executado pelo próprio arm9loaderhax depois que ele termina o carregamento da NAND, e pode ser qualquer payload arm9 válido. Este arquivo pode ser substituído a qualquer momento, embora o Luma3DS permita o uso de outros payloads arm9 ao segurar botões no boot.

Neste caso, usamos o Luma3DS por [AuroraWright](https://github.com/AuroraWright/) para carregar um SysNAND com patches diretamente, o que nos permite evitar a necessidade de qualquer tipo de EmuNAND, simplificando enormemente o uso de um 3DS hackeado, além de economizar espaço no cartão SD.

Assim que o arm9loaderhax estiver instalado e o Luma3DS estiver configurado com as opções corretas, restauraremos o backup anterior.

Durante este processo, também configuramos alguns programas como os seguintes:   

+  **FBI** *(Instala jogos e aplicativos no formato CIA)*
+  **Luma3DS Updater** *(Atualiza nossa instalação CFW facilmente)*
+  **Hourglass9** *(Ferramenta multiuso com funções de NAND e cartucho)*

#### O que você precisa

* [`aeskeydb.bin`](magnet:?xt=urn:btih:18b3a17f78e2376e05feaa150749d9fd689b25dc&dn=aeskeydb.bin&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* [`fbi-2.4.2-injectable.zip`](magnet:?xt=urn:btih:f978b4cf5eda72823240b9c649f3fd2940a9f525&dn=fbi-2.4.2-injectable.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* [`data_input_v3.zip`](magnet:?xt=urn:btih:a1195c9f7ab650fa7c7bf020b51fc19ea8d9440c&dn=data%5Finput%5Fv3.zip&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.aletorrenty.pl%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.baravik.org%3A6970%2Fannounce&tr=http%3A%2F%2Ftracker.tfile.me%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=http%3A%2F%2Ftorrent.gresille.org%2Fannounce&tr=udp%3A%2F%2Ftracker.yoshi210.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.filetracker.pl%3A8089%2Fannounce)
* O mais recente fork do [SafeA9LHInstaller](https://github.com/Plailect/SafeA9LHInstaller/releases/latest) *(o arquivo `.7z`)*
* A versão mais recente do [arm9loaderhax](https://github.com/AuroraWright/arm9loaderhax/releases/latest) *(o arquivo `.7z`)*
* A versão mais recente do [Luma3DS](https://github.com/AuroraWright/Luma3DS/releases/latest) *(o arquivo `.7z`)*
* A versão mais recente do [hblauncher_loader](https://github.com/yellows8/hblauncher_loader/releases/latest)
* A versão mais recente do [Hourglass9](https://github.com/d0k3/Hourglass9/releases/latest)
* A versão mais recente do [Luma3DS Updater](https://github.com/Hamcha/lumaupdate/releases/latest)
* A versão mais recente do [DspDump](https://github.com/Cruel/DspDump/releases/latest)
* A versão mais recente do [FBI](https://github.com/Steveice10/FBI/releases/)
* A versão mais recente do [GodMode9](https://github.com/d0k3/GodMode9/releases/latest)
* O Homebrew [Starter Kit](http://smealum.github.io/ninjhax2/starter.zip)

#### Instruções

##### Seção I - Trabalho Preparatório

{% capture notice-5 %}
**Verifique se você está usando um cartão SD que não está corrompido!**

**Se você usar um cartão SD corrompido sem repará-lo, você irá BRICKAR!**

**Se você acha que o seu cartão SD pode estar corrompido, verifique se o seu cartão SD possui erros usando [H2testw (Windows)](h2testw-(windows)), [F3 (Linux)](f3-(linux)), ou [F3X (Mac)](f3x-(mac))!**
{% endcapture %}

<div class="notice--danger">{{ notice-5 | markdownify }}</div>

1. **Se existir, copie a pasta `/ files9 /` do seu cartão SD para um local seguro em seu computador e faça backup em vários locais (como armazenamento on-line); Os arquivos dentro desta pasta pode salvá-lo de uma perda total de dados se você quebrar seu sistema**
2. Crie uma pasta chamada `cias` na raiz do seu cartão SD se ela ainda não existir
4. **Exclua a pasta `a9lh` da raiz do cartão SD se ela existir**
  + **Se você acidentalmente instalar o arm9loaderhax usando o `OTP.bin` de outro dispositivo, você irá BRICKAR!**
3. Exclua a pasta `3ds` da raiz do seu cartão SD se ela existir
4. **Copie _o conteúdo do_ `starter.zip` para a raiz do seu cartão SD**
  + Isso incluirá uma nova pasta `3ds` para substituir a que você acabou de excluir
5. Copie _o conteúdo do_ SafeA9LHInstaller `.7z` para a raiz do seu cartão SD
6. **Copie a pasta `a9lh` do data_input `.zip` para a raiz do seu cartão SD**
7. **Copie _o conteúdo_ da pasta do arm9loaderhax, release `.7z`, para a pasta `a9lh` do seu cartão SD**
9. Copie `hblauncher_loader.cia` do hblauncher_loader `.zip` para a pasta `/ cias /` do seu cartão SD
10. Copie `lumaupdater.cia` do Luma3DS Updater `.zip` para a pasta `/ cias /` do seu cartão SD
11. Copie `FBI.cia` do `.zip` do FBI para a pasta `/ cias /` do seu cartão SD
12. **Copie `arm9loaderhax.bin` do Luma3DS `.7z` para a raiz do seu cartão SD e substitua os arquivos existentes**
13. Crie uma pasta chamada `luma` na raiz do seu cartão SD
14. Crie uma pasta chamada `payloads` dentro da pasta `luma` do seu cartão SD
15. Copie `Hourglass9.bin` do Hourglass9 `.zip` para a pasta `/luma/payloads/` do seu cartão SD e renomeie `Hourglass9.bin` para `start_Hourglass9.bin`
16. Copie `GodMode9.bin` do GodMode9 `.zip` para a pasta `/luma/payloads/` do seu cartão SD e renomeie `GodMode9.bin` para `up_GodMode9.bin`
16. Copie `aeskeydb.bin` para a pasta `/files9/` do seu cartão SD
17. Copie `DspDump.3dsx` para a pasta `/3ds/` do seu cartão SD
18. Copie _o conteúdo do_ `fbi-2.4.2-injectable.zip` para a pasta `/files9/` do seu cartão SD

##### Seção II - Instalando arm9loaderhax

1. Reinsira o seu cartão SD no 3DS
2. Siga as etapas para instalar o arm9loaderhax em seu dispositivo:
  + Você deve estar na versão 2.1.0
  + Vá para `http://dukesrg.github.io/2xrsa.html?arm11.bin` no seu 3DS
    + Se você receber o erro "This service is not available in your region", use as Configurações do Sistema para definir o país do dispositivo para coincidir com a região NAND que você instalou com o ctrtransfer para a versão 2.1.0
    + Se você receber outro erro, [siga este guia de solução de problemas](troubleshooting#ts_browser)
    + Se você receber uma tela irregular, [siga este guia de solução de problemas](troubleshooting#ts_safe_a9lh_screen)
  + Aperte (Select) para prosseguir com a opção Full Install
  + O instalador instalará o arm9loaderhax no seu dispositivo (isso é muito rápido)
  + Desligue o console, mantenha pressionado o botão liga / desliga até que ele seja desligado, se necessário
  + Copie o `OTP.bin` específico do seu console da pasta `/a9lh/` do seu cartão SD card para um lugar seguro em seu computador e faça backup em vários lugares (como armazenamento online), e então reinsira o cartão SD no seu 3DS.

##### Seção III - Configurando Luma3DS

1. Mantenha pressionado (Select) ao ligar para entrar no menu Luma3DS
  + Certifique-se de começar a segurar o botão (Select) antes de apertar o botão liga/desliga
  + Se você receber uma tela preta, [siga este guia de solução de problemas](troubleshooting#ts_sys_a9lh)   
  + Se o console ligar e carregar o SafeA9LHInstaller, [siga este guia de solução de problemas](troubleshooting#ts_safe_a9lh)
2. Use o botão (A) e botões direcionais para ativar o seguinte:    
  + **"Autoboot SysNAND"**
  + **"Use SysNAND FIRM if booting with R"**
  + **"Show NAND or user string in System Settings"**
3. Se você estiver usando um **New 3DS**, você *também* deve ativar o seguinte:
  + **"New 3DS CPU" to "Clock+L2(x)"**
    + Isso aumentará o framerate de muitos jogos, mas pode causar instabilidade em outros
    + Se alguns jogos não funcionarem corretamente, desative essa opção e tente novamente
4. Aperte Start para salvar e reiniciar
  + Se você receber uma tela preta, basta continuar para a próxima seção   
  + Se você receber um erro "Failed to mount CTRNAND", basta continuar para a próxima seção

##### Seção IV - Restaurando o Sistema

Se, antes de seguir este guia, você já tinha uma configuração EmuNAND e gostaria de mover o conteúdo do seu EmuNAND anterior para o seu novo CFW SysNAND, agora é a hora de [seguir Mover EmuNAND](move-emunand) ao invés de seguir as quatro primeiras etapas nessa seção.
{: .notice--info}

1. Abra o Hourglass9 pelo arm9loaderhax segurando (Start) ao ligar
2. Vá para "SysNAND Backup/Restore"
3. Restaure de `NANDmin.bin`
4. Aperte (Start) para reiniciar
  + Se você receber uma tela preta, [siga ctrtransfer para 9.2.0](9.2.0-ctrtransfer)
5. Se o seu backup era de uma versão entre 3.0.0 e 4.5.0, o console não ligará completamente até que você faça o download manual do firmware necessário:
  + Faça o download [deste arquivo](http://nus.cdn.c.shop.nintendowifi.net/ccs/download/0004013800000002/00000056) e renomeie-o para `firmware.bin`
  + Faça o download [deste arquivo](http://nus.cdn.c.shop.nintendowifi.net/ccs/download/0004013800000002/cetk)
  + Copie `firmware.bin` e `cetk` para a pasta `/luma/` do seu cartão SD
  + Exclua ambos os arquivos após atualizar seu 3DS
2. Atualize seu 3DS: vá para "Configurações do Sistema", "Outras Configurações", e em seguida navegue completamente para a direita e selecione "Atualização do Sistema"
  + As atualizações feitas enquanto se usa o A9LH + Luma (o que você possui) são seguras, pare de perguntar sobre isso
  + O aviso sobre nunca atualizar um New 3DS na versão 2.1.0 não se aplica após a restauração do backup da NAND.
  + Se isso lhe der um erro, defina suas configurações de DNS para "Automático"
  + Se isso ainda lhe dá um erro e sua NAND está abaixo de 9.2.0, [siga ctrtransfer para 9.2.0](9.2.0-ctrtransfer)


##### Seção V - Injetando FBI

1. Abra o Hourglass9 pelo arm9loaderhax segurando (Start) ao ligar
2. Vá para "SysNAND Backup/Restore" e selecione a  opção "Health&Safety Dump" para copiar o aplicativo Saúde e Segurança (Health & Safety) para `hs.app` **(você pode usar para cima e para baixo / esquerda e direita para alterar o nome)**
3. Aperte (B), e então selecione a opção "Health&Safety Inject"
8. Selecione o FBI `.app` injetável correspondente à sua região
4. Aperte (A) para confirmar a injeção
9. Aperte (Start) para reiniciar
10. Se você ainda estiver abrindo o aplicativo Saúde e Segurança (Health & Safety) padrão e realizou um downgrade pelo Gateway no passado, [siga este guia de solução de problemas](troubleshooting#gw_fbi)

##### Seção VI - Finalizando a configuração

2. Abra o aplicativo Saúde e Segurança (Health & Safety) (que agora é o FBI)
3. Selecione "SD"
4. Selecione a pasta "cias"
5. Navegue até `FBI.cia` e aperte (A) para instalar
6. Navegue até `hblauncher_loader.cia` e aperte (A) para instalar
7. Navegue até `lumaupdater.cia` e aperte (A) para instalar
8. Retorne para o diretório raíz do cartão SD com (B)
8. Navegue até `arm9loaderhax.bin`, aperte (A) nele e selecione a opção "Copiar"
9. Retorne para o menu principal do FBI com (B)
10. Selecione "CTR NAND"
11. Selecione "\<diretório atual>"
12. Selecione a opção "Colar", e então aperte (A) para confirmar
8. Saia com o botão home
9. Abra o Homebrew Launcher pelo menu home
10. Selecione "DSP Dump"
11. Aperte (Start) quando solicitado para sair
12. Reinicie enquanto segura Start para abri o Hourglass9
13. Vá para "SysNAND Backup/Restore", e então selecione "Health&Safety Inject"
14. Selecione `hs.app` (o original que não contém o FBI), e então aperte (A) para confirmar a injeção
15. Aperte (Select) no menu principal para ejetar seu cartão SD
15. Aperte (Start) para reiniciar sem o cartão SD
  + Ao inicializar o dispositivo pelo menos uma vez com o cartão SD removido, você poderá configurar a instalação do luma baseada em CTRNAND
16. Use o botão (A) e botões direcionais para ativar o seguinte:    
  + **"Show NAND or user string in System Settings"**
3. Se você estiver usando um **New 3DS**, você *também* deve ativar o seguinte:
  + **"New 3DS CPU" to "Clock+L2(x)"**
    + Isso aumentará o framerate de muitos jogos, mas pode causar instabilidade em outros
    + Se alguns jogos não funcionarem corretamente, desative essa opção e tente novamente
14. Reinsira seu cartão SD, e então aperte Start para salvar e reiniciar!

___

Se a funcionalidade DSi / DS estiver quebrada (como cartuchos de jogos de DS ou DSiWare não funcionando), [siga este guia de solução de problemas](troubleshooting#twl_broken)
{: .notice--warning}

{% capture notice-10 %}
Você pode usar o Luma3DS Updater para atualizar o seu Luma3DS para a última versão abrindo ele e apertando (A).     
Isso não é a mesma coisa que uma atualização do sistema; Ele simplesmente faz o download e extrai os arquivos mais recentes do Luma3DS. O Luma3DS Updater atualiza apenas os arquivos localizados no cartão SD.   
Isso só atualizará os arquivos Luma3DS no cartão SD. Se você inicializar o dispositivo sem um cartão SD, ele usará qualquer versão que você colocou no CTR NAND.   
{% endcapture %}

<div class="notice--info">{{ notice-10 | markdownify }}</div>

{% capture notice-6 %}   
Agora você inicializará um SysNAND baseado em Custom Firmware por padrão.   
Agora você pode segurar (Select) ao ligar para abrir o menu de configuração do Luma3DS.    
Agora você pode segurar (Start) ao ligar para abrir o Hourglass9, uma ferramenta multiuso com funções de NAND e cartucho.     
{% endcapture %}

<div class="notice--info">{{ notice-6 | markdownify }}</div>

Você pode atualizar sua instalação do arm9loaderhax no futuro seguindo as instruções na página [Atualizando A9LH](updating-a9lh).
{: .notice--info}

Para usar o [NTR CFW](https://github.com/44670/BootNTR/), obtenha o `ntr.bin` do `.zip` apropriado [nesta](https://github.com/44670/BootNTR/releases) página e o copie para a raiz do seu cartão SD, e então instale o `BootNTR.cia` [desta](https://github.com/astronautlevel2/BootNTR/releases/latest) página.
{: .notice--info}

Guarde o seu arquivo `NANDmin.bin`, ele pode ser restaurado pelo Hourglass9 e salvá-lo de um brick no futuro.
{: .notice--info}

Você pode remover os seus backups da NAND da pasta `/files9/` contanto que você os tenha salvo em um local seguro.
{: .notice--info}

{% capture notice-7 %}
**Você pode remover quaisquer arquivos e pastas extras da raiz do cartão SD que *não* estão na lista a seguir:**

    + 3ds
    + files9
    + hblauncherloader
    + luma
    + Nintendo 3DS
    + arm9loaderhax.bin
    + boot.3dsx

{% endcapture %}

<div class="notice--info">{{ notice-7 | markdownify }}</div>

Para obter informações sobre como alterar o dispositivo para outra região, consulte a página [Alteração de região](region-changing).
{: .notice--success}

Para obter informações sobre como manter sua instalação do A9LH atualizada, consulte a página [Atualizando A9LH](updating-a9lh).
{: .notice--success}

Para obter informações sobre como usar os vários recursos do Luma3DS, confira [sua wiki](https://github.com/AuroraWright/Luma3DS/wiki/Options-and-usage).
{: .notice--success}
