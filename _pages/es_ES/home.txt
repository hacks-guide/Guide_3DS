---
layout: splash
title: "Guía de hacks para 3DS" #
header:
  overlay_color: "#5e616c" #
  overlay_image: /images/home-page-feature.jpg
  overlay_filter: 0.5
  cta_label: "Get Started"
  cta_url: "key-information"
  caption:
excerpt: "A complete guide to 3DS (and 2DS) custom firmware, <br /> from stock to boot9strap.<br />"
---

Lee detenidamente todas las páginas de introducción (incluido ésta) antes de proceder.
{: .notice--info}

{% capture update-notice %}
{% include_relative include/3ds-online.txt %}
{% endcapture %}
<div class="notice--danger">{{ update-notice | markdownify }}</div>

## ¿Qué es Custom Firmware?

**Custom Firmware** (Abreviado "CFW") es una modificación completa de software a tu 3DS, comparable a los "permisos de administrador" en una computadora. Te permite hacer cualquier cosa que la 3DS sea físicamente capaz de hacer, en lugar de estar limitada por lo que Nintendo te permita hacer.

Los usos populares para custom firmware incluyen:

* Running homebrew software and games made for or ported to the Nintendo 3DS
* Ignorar el bloqueo de región, permitiéndote jugar juegos de otras regiones
* HOME Menu customization, using community-created [themes and badges](https://themeplaza.art)
* Modificaciones de juegos ("ROM Hacks") a través de [LayeredFS](https://github.com/knight-ryu12/godmode9-layeredfs-usage/wiki/Using-Luma3DS'-layeredfs-(Only-version-8.0-and-higher))
* Editar, respaldar y restaurar datos de guardado
* Emular consolas antiguas, así como jugar nativamente a juegos de DS y GBA
* Instalar cartuchos físicos para uso en formato digital

## ¿Qué se instalará con esta guía?

This guide will:
+ Install **boot9strap** and **Luma3DS custom firmware** on unmodified retail 3DS/2DS consoles
    + Luma3DS will automatically remove the region lock and allow you to run unsigned software
+ Install various pieces of homebrew software, such as a package installer, save file manager, and a homebrew app store
+ Make critical system file backups that can help avoid bricks (and recover data in the event of one)

___

### Continue to [Key Information](key-information)
{: .notice--primary}
