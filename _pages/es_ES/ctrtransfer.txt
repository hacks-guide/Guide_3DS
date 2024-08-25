---
title: "CTRTransfer"
---

{% include toc title="Tabla de contenidos" %}

### Lectura requerida

This is an add-on section for installing an 11.15.0 CTRTransfer image to your console.

This page assumes that you have already installed Luma3DS and boot9strap. If you followed this website to the end (Finalizing Setup), you have Luma3DS and boot9strap.
{: .notice--info}

As a part of this process, your system settings will be reset to its defaults. This includes things such as your username, country, and language. **Installed games and their save data will not be affected.**
{: .notice--warning}

### Qué necesitas

* The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)
* The latest release of [FBI](https://github.com/lifehackerhansol/FBI/releases/download/2.6.1/FBI.3dsx) (direct download)
* The latest release of [faketik](https://github.com/ihaveamac/faketik/releases/latest) *(the `.3dsx` file)*
* A torrent client like [qBittorrent](https://www.qbittorrent.org/download.php) or [Deluge](http://dev.deluge-torrent.org/wiki/Download)
    * If you already have a torrent client, you do not need to download a new one
* The 11.15.0 CTRTransfer image for your console and region:
{% include_relative include/ctrtransfer-images.txt %}

### Instrucciones

#### Sección I - Preparativos

{% include_relative include/ctrtransfer-prep.txt %}

#### Sección II - Copia de seguridad de la NAND

1. Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
{% include_relative include/nand-backup.txt %}

#### Sección III - CTRTransfer

{% include_relative include/ctrtransfer-main.txt %}

#### Sección IV - Iniciar FBI

{% include_relative include/launch-hbl-dlp.txt %}

#### Sección V - Reinstalación de Tickets

{% include_relative include/ctrtransfer-ticket-copy.txt %}

#### Section VI - Fixing locale-related issues

{% include_relative include/ctrnand-datayeet.txt %}

___

### Continúa en [Finalizar instalación](finalizing-setup)
{: .notice--primary}
