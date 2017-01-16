* * *

layout: splash permalink: / title: "Guide" header: overlay_color: "#5e616c" overlay_image: images/home-page-feature.jpg overlay_filter: 0.5 cta_label: "Get Started" cta_url: "/get-started" caption: excerpt: 'A complete guide to 3DS custom firmware,   
from stock to arm9loaderhax.  
' lang: en_US ref: home

* * *

{% capture notice-home %} **Este guia é para aparelhos de varejo (comprados por consumidores; não pelo Nintendo Developer Program) *apenas*!  
Se você possui um aparelho de desenvolvedor ("PANDA" ou "SNAKE"), cheque o [devGuide](https://dev.3ds.guide)** {% endcapture %}

<div class="notice--danger">{ notice-home | markdownify }</div>

**Este guia precisa da *sua* ajuda para semear [estes](https://3ds.guide/rss.xml) torrents!** {: .notice--info}

**Para usar os links [magnet](https://en.wikipedia.org/wiki/Magnet_URI_scheme) deste guia, você precisará de um cliente de torrents como o [Deluge](http://dev.deluge-torrent.org/wiki/Download)** {: .notice--info}

**Leia todas as páginas introdutórias antes de prosseguir.** {: .notice--warning}

## O que é homebrew?

O termo [**Homebrew**](https://en.wikipedia.org/wiki/List_of_homebrew_video_games) geralmente se se refere ao software que não é autorizado pela Nintendo. Ele permite você rodar jogos homebrew , ferramentas como backup e edição de saves, e emuladores de vários sistemas antigos.

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

+ **Antes de começar a seguir o guia, você precisa saber os riscos de hackear o 3DS: TODA vez que você modifica seu sistema, existe sempre o potencial de ocorrer um brick IRRECUPERÁVEL. Eles são raros, mas ainda existe a possibilidade, então garanta que você siga TODOS os passos EXATAMENTE como escritos.**
+ Se você já hackeou seu 3DS antes para usar um EmuNAND, e gostaria de mover os conteúdos do seu EmuNAND anterior para o seu novo CFW no SysNAND, você deve seguir todas as instruções e restaurar seu EmuNAND existente quando solicitado assim que você estiver na parte [Instalando arm9loaderhax](installing-arm9loaderhax).
+ Este guia funciona para o New 3DS, Old 3DS(primeiro modelo), e 2DS de todas as regiões no firmware 11.2.0 ou inferior *(exceto CHN / TWN)*.
+ Se tudo ocorrer conforme o esperado, você não perderá dados pessoais e continuará com tudo o que tinha antes de começar (jogos, NNID, saves, etc serão preservados).
+ **Mantenha o aparelho plugado e carregando durante todo o processo para evitar perda de dados ou danos causados por um delsigamento inesperado!**
+ O seu cartão SD deve ser [MBR, e não GPT](http://www.howtogeek.com/245610/) (o SD que vem com o aparelho é, por padrão, MBR).
+ Se você precisa formatar um cartão SD novo, você pode utilizar o [`guiformat`](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) e colocar um Allocation Unit Size de 32K.
+ O 2DS é essencialmente idêntico ao Old 3DS em termos de software, e todos os passos que dizem "Old 3DS" também se aplicam ao 2DS.