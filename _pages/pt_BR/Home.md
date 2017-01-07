* * *

layout: splash permalink: / title: "Guide" header: overlay_color: "#5e616c" overlay_image: images/home-page-feature.jpg overlay_filter: 0.5 cta_label: "Get Started" cta_url: "/get-started" caption: excerpt: 'A complete guide to 3DS custom firmware,   
from stock to arm9loaderhax.  
' lang: en_US ref: home

* * *

{% capture notice-home %} **Este guia é para aparelhos de varejo (comprados por consumidores; não pelo Nintendo Developer Program) _apenas_! Se você possui um aparelho de desenvolvedor ("PANDA" ou "SNAKE"), cheque o \[devGuide\](https://dev.3ds.guide)** {% endcapture %}

<div class="notice--danger">{{ notice-home | markdownify }}</div>

**Este guia precisa da *sua* ajuda para semear \[estes\](https://3ds.guide/rss.xml) torrents!** {: .notice--info}

**Para usar os links \[magnet\](https://pt.wikipedia.org/wiki/Magnet-Link) neste guia, você precisará de um cliente de torrents como o \[Deluge\](http://dev.deluge-torrent.org/wiki/Download)** {: .notice--info}

**Leia todas as páginas introdutórias antes de prosseguir.** {: .notice--warning}

## O que é homebrew?

O termo \[**Homebrew**\](https://pt.wikipedia.org/wiki/Homebrew) geralmente se se refere ao software que não é autorizado pela Nintendo. Ele permite você rodar jogos homebrew , ferramentas como backup e edição de saves, e emuladores de vários sistemas antigos.

Na maioria dos casos, rodar homebrew no seu console é 100% gratuito usando apenas o aplicativo Ninntendo 3DS Sound. Existem também vários outros exploits em jogos comerciais e no navegador do 3DS que permitem a execução de homebrew.

## O que é Custom Firmware?

**Custom Firmware** ("CFW") permite você usar hacks mais avançados que o homebrew do modo userland normalmente não consegue tão facilmente. Por exemplo, os patches de assinaturas permitem você instalar títulos não assinados que aparecem logo no seu Menu HOME.

CFW pode ser facilmente instalado em qualquer console que esteja na versão 11.2.0 (mais recente) ou inferior. Outras versões necessitam de um downgrade no seu firmware.

## O que este guia instala?

Este guia possui o objetivo final de pegar um 3DS que nunca foi modificado e instalar um Custom Firmware por meio do arm9loaderhax. Em algumas versões, ele utiliza homebrew como um pontapé inicial, porém o objetivo permanece o mesmo, que é instalar um Custom Firmware.

Arm9loaderhax é o melhor e mais novo método para rodar um Custom Firmware que nos dá quase que controle total do sistema em apenas milisegundos após ligar o aparelho, que é similar ao efeito do BootMii para o Wii.

Os benefícios do arm9loaderhax sobre outros métodos de rodar Custom Firmware são numerosos, e como tal é recomendado utilizar este guia do que qualquer outro que dependa de software desatualizado (como menuhax ou rxTools).

## O que eu posso fazer com Custom Firmware?

+ Jogar todos os cartuchos e jogos da eShop, independente da sua região de origem
+ Customizar seu Menu HOME com [temas](https://3dsthem.es/) e [badges](https://badges.3dsthem.es/) personalizados
+ Utilizar "ROM hacks" de jogos que você possui
+ Tirar capturas de telas de aplicações e jogos
+ [Fazer backup, editar, and restaurar](https://gbatemp.net/threads/release-jks-savemanager-homebrew-cia-save-manager.413143/) saves de diversos jogos
+ Jogar jogos de sistemas antigos com vários emuladores, utilizando RetroArch ou outros emuladores separados. (Funciona melhor com um New Nintendo 3DS)
+ Instalar títulos homebrew no seu sistema, e fazê-los aparecer no Menu HOME
+ Copiar os seus cartuchos para um formato que você pode instalar e jogar sem precisar do cartucho
+ New 3DS apenas: capture as telas enquanto joga e envie para o PC sem precisar de cabos, com NTR CFW
+ Rode vários flash carts de Nintendo DS antigos que foram bloqueados a muito tempo atrás ou que nunca funcionaram no Nintendo 3DS
+ Atualize com segurança para a última versão do sistema sem medo de perder acesso ao homebrew

## O que eu preciso saber antes de começar?

+ **Antes de começar a seguir o guia, você precisa saber os riscos de hackear o 3DS: TODA vez que você modifica seu sistema, existe sempre o potencial de ocorrer um brick IRRECUPERÁVEL. They're rare, but still a possibility so make sure you follow ALL directions EXACTLY.**
+ If you have already hacked your 3DS before to get an EmuNAND setup, and would like to move the contents of your previous EmuNAND to your new SysNAND CFW, you should follow all instructions and restore your existing EmuNAND when prompted once you reach [Installing arm9loaderhax](installing-arm9loaderhax).
+ This guide will work on New 3DS, Old 3DS, and 2DS in all regions on firmware 11.2.0 or below *(except CHN / TWN)*.
+ If everything goes according to plan, you will lose no data and end up with everything that you started with (games, NNID, saves, etc will be preserved).
+ **Keep the device plugged in and charged throughout the entire process to avoid data loss or damage from an unexpected power-off!**
+ Your SD card should be [MBR, not GPT](http://www.howtogeek.com/245610/) (the SD card that comes with the device will be MBR by default).
+ If you need to format a brand new SD card, you can use [`guiformat`](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) and set to an Allocation Unit Size of 32K.
+ The 2DS is essentially identical to the Old 3DS in terms of software, and that any steps which say "Old 3DS" also apply to 2DS.