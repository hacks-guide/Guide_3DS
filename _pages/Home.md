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

CFW puede ser instalado en cualquier consola que es 9.2.0-20 o inferior. Otras versiones pueden ser bajadas(downgrade), la mayoria de forma grauita o con un juego vulnerable.

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
+ Instalar titulos homebrew en tu sistema, y hacerlos aparecer en el menu HOME
+ Extrae tus juegos en cartucho a un formato el cual puedes instalar, y poder jugar sin usar el cartucho
+ Solo New 3DS: transmite gameplay en vivo a tu PC de forma inalambrica con NTR CFW
+ Utiliza varias flashcards de Nintendo DS que fueron bloqueadas hace tiempo o nunca funcionario en Nintendo 3DS
+ Actualiza de forma segura a la ultima version disponible sin mideo de perder acceso a Homebrew 

## Qué necesito antes de empezar?

+ **Antes de comenzar la guia, debes conocer los riesgos de hackear 3DS: CADA vez que modificas tu sitema, siempre esta el potencial de un brick INRECUPERABLE. Son poco comunes, pero aun esta la posibilidad así que asegurate de seguir todas las instrucciones.**
+ **Si ya has hackeado tu 3DS antes para conseguir una configuracion de EmuNAND, y quisiseras transferir los contenidos de tu EmuNAND a tu nueva configuracion de SysNAND CFW, deberías seguir todas las instrucciones y restaurar tu existente EmuNAND cuando indicado una vez llegues a [Instalar arm9loaderhax](installing-arm9loaderhax).
+ Esta guía funcionará en NEW 3DS, Vieja 3DS and 2DS en cualquier region en version 11.2.0 u inferior *(excepto CHN / TWN en New 3DS y Old 3DS, y KOR New 3DS)*.
+ Si todo va con respecto al plan, no perderás datos y terminarás con todo lo que empezaste (juegos, NNID, partidas, etc será preservado).
+ Gran parte de esta guía consta de largos respaldos de NAND y bajadas(downgrades), así que el proceso puede tomar *varias* gracias al lento procesador del 3DS.
+ **Manten el dispositivo cargado y conectado durante todo el proceso para evitar pérdida de datos o daño de un inesperado corte de energía!**
+ Tu tarjeta SD debería ser [MBR, y no GPT](http://www.howtogeek.com/245610/) (la tarjeta SD que viene con el dispositivo será MBR de fábrica).
+ Si necesitas formatear una tarjeta SD nueva, puedes usar [`guiformat`](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) y configurar el Tamaño de Unidad de Locacion (Allocation Unit Size) a 32K.
+ La 2DS es esencialmente identica a la Vieja 3DS en términos de software, y cualquier paso que diga "Vieja 3DS" también aplican para las 2DS.
