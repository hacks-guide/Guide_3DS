---
layout: splash
permalink: /
header:
  overlay_color: "#5e616c"
  overlay_image: home-page-feature.jpg
  overlay_filter: 0.5
  cta_label: "Get Started"
  cta_url: "/get-started"
  caption:
excerpt: 'Una guia completa de 3DS Custom Firmware, <br /> de fabrica hasta arm9loaderhax.<br />'
---

**Esta guia necesita de *TU* ayuda para sembrar [estos](https://github.com/Plailect/Guide/archive/master.zip) ([rss](https://plailect.github.io/Guide/rss.xml)) torrents!**
{: .notice--info}

**Para usar los archivos [torrent](https://en.wikipedia.org/wiki/Torrent_file) de esta guia, necesitarás un cliente torrent como [Transmission](https://sourceforge.net/projects/trqtw/files/latest/download)**
{: .notice--info}

**Lea todas las paginas introductorias antes de comenzar**
{: .notice--warning}

## Qué es Homebrew?

[**Homebrew**](https://en.wikipedia.org/wiki/List_of_homebrew_video_games) se refiere usualmente a software que no es autorizado por Nintendo. Permite correr Homebrew, herramientas como quemadores y editores de partidas, y emuladores para sistemas antiguos.

En la mayoría de casos, correr Homebrew es 100% gratuito utilizando el Explorador de Internet. Tambien hay diferentes vulnerabilidades en juegos comerciales para correr Homebrew.

## Que es Custom Firmware?

**Custom Firmware** ("CFW") permite usar hacks mas avanzados que homebrew en modo usuario no puede hacer facilmente. Por ejemplo, los parches de firmas te permites instalar titulos sin firmar que aparecen un el menu HOME de la consola.

CFW puede ser instalado en cualquier consola que es 9.2.0-20 o inferior. OTras versiones pueden ser bajadas(downgrade), la mayoria de forma grauita o con un juego vulnerable.

## Que instala esta guía?

Esta guia tiene la finalidad de tomar una consola sin modificar desde estado de fabrica hasta Custom Firmware cargado por arm9loaderhax. En algunas versions, utiliza homebrew como punto de inicio, pero Custom Firmware es la meta final.

Arm9loaderhax es el mejor y mas nuevo metodo de lanzar CFW el cual nos da casi total control del sistema en cuestion de milisegundos de iniciar la consola, lo cual es parecido a lo logra BootMii en la consola Wii.

The benefits of arm9loaderhax over other Custom Firmware launch methods are numerous, and as such it is recommended to use this guide over any other that relies on outdated software (such as menuhax or rxTools).

## Que puedo hacer con Custom Firmware?

+ Jugar cualquier juego (sea cartucho o digital), sin importar la región
+ Personalizar tu menu HOME con [temas creados por usuarios](https://3dsthem.es/) y [parches](https://badges.3dsthem.es/)
+ Usar "ROM hacks" para juegos que tienes
+ Capturar gameplay y capturas de pantallas
+ [Respaldar, editar, and restaurar](https://gbatemp.net/threads/release-jks-savemanager-homebrew-cia-save-manager.413143/) partidas para varios juegos
+ Jugar juegos para sistemas mas antiguos, usando RetroArch u otros emuladores individuales. (Works best with a New Nintendo 3DS)
+ Install homebrew titles to your system, and have them appear on your HOME Menu
+ Dump your game cards to a format you can install, and play them without needing the card
+ New 3DS only: stream live gameplay to your PC wirelessly with NTR CFW
+ Run many old Nintendo DS flash carts that were blocked long ago or never worked on Nintendo 3DS
+ Safely update to the latest system version without fear of losing access to homebrew

## What do I need to know before starting?

+ **Before beginning the guide, you must know the risks of 3DS hacking: EVERY time you modify your system, there is always the potential for an UNRECOVERABLE brick. They're rare, but still a possibility so make sure you follow ALL directions EXACTLY.**
+ If you have already hacked your 3DS before to get an EmuNAND setup, and would like to move the contents of your previous EmuNAND to your new SysNAND CFW, you should follow all instructions and restore your existing EmuNAND when prompted once you reach [Installing arm9loaderhax](installing-arm9loaderhax).
+ This guide will work on New 3DS, Old 3DS, and 2DS in all regions on firmware 11.2.0 or below *(except CHN / TWN on both New 3DS and Old 3DS, and KOR New 3DS)*.
+ If everything goes according to plan, you will lose no data and end up with everything that you started with (games, NNID, saves, etc will be preserved).
+ A large part of this guide is lengthy NAND dumps and downgrades, so the entire process can take *several* hours thanks to the 3DS's slow processor.
+ **Keep the device plugged in and charged throughout the entire process to avoid data loss or damage from an unexpected power-off!**
+ Your SD card should be [MBR, not GPT](http://www.howtogeek.com/245610/) (the SD card that comes with the device will be MBR by default).
+ If you need to format a brand new SD card, you can use [`guiformat`](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) and set to an Allocation Unit Size of 32K.
+ The 2DS is essentially identical to the Old 3DS in terms of software, and that any steps which say "Old 3DS" also apply to 2DS.
