---
layout: splash
permalink: /
header:
  overlay_color: "#5e616c"
  overlay_image: images/home-page-feature.jpg
  overlay_filter: 0.5
  cta_label: "Vamos a comenzar"
  cta_url: "/get-started"
  caption:
excerpt: 'Una guía completa para 3DS Custom Firmware, <br /> desde estado de fábrica hasta arm9loaderhax.<br />'
---

**Esta guía necesita de *TU* ayuda para sembrar [estos](https://github.com/Plailect/Guide/archive/master.zip) ([rss](https://plailect.github.io/Guide/rss.xml)) torrents!**
{: .notice--info}

**Para usar los archivos [torrent](https://en.wikipedia.org/wiki/Torrent_file) de esta guía, necesitarás un cliente torrent como [Deluge](http://dev.deluge-torrent.org/wiki/Download)**

**Lee todas las páginas introductorias antes de comenzar**
{: .notice--warning}

## ¿Qué es Homebrew?

[**Homebrew**](https://en.wikipedia.org/wiki/List_of_homebrew_video_games) se refiere comúnmente a software que no está autorizado por Nintendo. Te permite correr juegos homebrew, herramientas para editar y respaldar partidas, y emuladores de varios sistemas antiguos.

En la mayoría de casos, correr Homebrew es 100% gratuito utilizando solamente el Explorador de Internet. También existen diferentes vulnerabilidades en juegos comerciales que hacen posible correr Homebrew.
 
## ¿Qué es Custom Firmware?

**Custom Firmware** ("CFW") te permite utilizar hacks más avanzados que un homebrew en modo de usuario no puede ejecutar tan fácilmente. Por ejemplo, los parches de firmas te permiten instalar títulos no-firmados y hacerlos aparecer justo en el menú HOME de la consola.

CFW puede ser instalado en cualquier consola que esté en la versión 9.2.0-20 o inferior. Las demás versiones pueden ser reducidas a una versión anterior, normalmente de forma gratuita o comprando un juego vulnerable.

## ¿Qué instala esta guía?

Esta guía tiene la finalidad de tomar una consola completamente sin modificar desde estado de fábrica hasta Custom Firmware funcionando a través de arm9loaderhax. En algunas versiones, utiliza homebrew como punto de inicio, pero Custom Firmware es la meta final.

Arm9loaderhax es el mejor y más nuevo metodo de lanzar CFW dándonos casi total control del sistema a tan solo milisegundos de iniciar la consola, logrando un efecto similar a BootMii en la consola Wii.

Los beneficios de arm9loaderhax sobre otros métodos de lanzamiento de CFW son numerosos, y es por dicha razón que se recomienda el uso de esta guía sobre cualquier otra que dependa de software desactualizado (como menuhax y rxTools).

## ¿Qué puedo hacer con Custom Firmware?

+ Jugar cualquier juego (sea cartucho o digital), sin importar la región
+ Personalizar tu menú HOME con [temas creados por usuarios](https://3dsthem.es/) e [insignias](https://badges.3dsthem.es/)
+ Usar "ROM hacks" para juegos que ya tienes
+ Capturar gameplay y realizar capturas de pantalla
+ [Respaldar, editar, and restaurar](https://gbatemp.net/threads/release-jks-savemanager-homebrew-cia-save-manager.413143/) partidas para varios juegos
+ Jugar juegos de sistemas más antiguos, usando RetroArch u otros emuladores individuales. (Funciona mejor con un New Nintendo 3DS)
+ Instalar títulos homebrew en tu sistema, y hacerlos aparecer en el menú HOME
+ Extraer tus juegos desde un cartucho a un formato el cual puedes instalar, y jugar con ellos sin necesitad del cartucho
+ Solo New 3DS: transmite gameplay en vivo a tu PC de forma inalámbrica con NTR CFW
+ Utiliza varias flashcards de Nintendo DS que fueron bloqueadas hace tiempo o nunca funcionaron en Nintendo 3DS
+ Actualiza de forma segura a la última versión del sistema disponible sin miedo a perder el acceso a Homebrew 

## ¿Qué necesito antes de comenzar?

+ **Antes de iniciar la guía, debes conocer los riesgos de hackear una 3DS: CADA vez que modificas tu sitema, siempre existe la posibilidad de un brick IRRECUPERABLE. Son realmente poco comunes, pero es posible así que asegúrate de seguir TODAS las instrucciones AL PIE DE LA LETRA.**
+ **Si ya antes has hackeado tu 3DS para conseguir una configuración de EmuNAND, y quisieras transferir los contenidos de tu EmuNAND a tu nueva configuración de SysNAND CFW, deberás seguir todas las instrucciones y restaurar tu existente EmuNAND cuando la guía lo indique una vez que llegues a la sección [Instalar arm9loaderhax](installing-arm9loaderhax).
+ Esta guía funcionará en New 3DS, Vieja 3DS y 2DS en cualquier región en una versión 11.2.0 u inferior *(excepto CHN / TWN en New 3DS y Vieja 3DS, y KOR en New 3DS)*.
+ Si todo sale de acuerdo al plan, no perderás los datos y terminarás con todo lo que empezaste (serán preservados juegos, NNID, partidas, etc).
+ Gran parte de esta guía consta de largos respaldos de NAND y reducciones a versiones anteriores, así que el proceso puede tomar *varias* horas gracias al lento procesador del 3DS.
+ **¡Mantén el dispositivo conectado y cargando durante todo el proceso para evitar pérdida de datos o daño por un inesperado corte de energía!**
+ Tu tarjeta SD debería ser [MBR, y no GPT](http://www.howtogeek.com/245610/) (la tarjeta SD que viene con el dispositivo será MBR de fábrica).
+ Si necesitas formatear una tarjeta SD nueva, puedes usar [`guiformat`](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) y configurar el Tamaño de Unidad de Asignación (Tamaño del Clúster) a 32K.
+ La 2DS es esencialmente idéntica a la Vieja 3DS en términos de software, así que cualquier paso que diga "Vieja 3DS" también aplicará para la 2DS.
