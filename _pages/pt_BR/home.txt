---
layout: splash
title: "Guia de Hacks para 3DS" #
header:
  overlay_color: "#5e616c" #
  overlay_image: /images/home-page-feature.jpg
  overlay_filter: 0.5
  cta_label: "Começando"
  cta_url: "key-information"
  caption:
excerpt: "Um guia completo para custom firmware em 3DS (e 2DS), <br /> de varejo até boot9strap.<br />"
---

Leia atentamente todas as páginas introdutórias (incluindo essa aqui!) antes de prosseguir.
{: .notice--info}

{% capture update-notice %}
{% include_relative include/3ds-online.txt %}
{% endcapture %}
<div class="notice--danger">{{ update-notice | markdownify }}</div>

## O que é Custom Firmware?

**Custom Firmware** ("CFW") é uma modificação completa de software para seu 3DS, comparável ao "acesso de administrador" de um computador. Ele permite que você faça qualquer coisa que o 3DS seja fisicamente capaz de fazer, ao invés de ser limitado por qualquer coisa que a Nintendo permite que você faça.

Usos populares para custom firmware incluem:

* Executar software e jogos de homebrew feitos ou portados para o Nintendo 3DS
* Ignorar o bloqueio de região, permitindo que você jogue jogos de outras regiões
* Personalização do Menu HOME, usando [temas e emblemas](https://themeplaza.art) criados pela comunidade
* Modificação de jogos ("ROM hacks") através de [LayeredFS](https://github.com/knight-ryu12/godmode9-layeredfs-usage/wiki/Using-Luma3DS'-layeredfs-(Only-version-8.0-and-higher))
* Edição, backup e restauração de saves
* Emulação de consoles mais antigos, bem como reprodução nativa de jogos de DS e GBA
* Instalar seus cartuchos físicos para uso digital

## O que este guia instala?

Este guia irá:
+ Instalar o **boot9strap** e o **Luma3DS custom firmware** em consoles de varejo 3DS/2DS não modificados
    + O Luma3DS irá remover automaticamente o bloqueio de região e permitir que você execute um software sem assinatura
+ Instalar vários aplicativos de software homebrew, como um instalador de pacotes, gerenciador de arquivos e uma loja de aplicativos homebrew
+ Fazer backups de arquivos críticos do sistema que possam ajudar a evitar bricks (e recuperar dados em caso de um)

___

### Continuar em [Informação Importante](key-information)
{: .notice--primary}
