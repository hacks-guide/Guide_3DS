---
title: "Aktualizowanie B9S"
---

{% include toc title="Spis Treści" %}

### Wymagana Lektura

Ta strona poświęcona jest obecnym użytkownikom boot9strap, którzy chcą zaktualizować boot9strap do najnowszej wersji.

### Czego Potrzebujesz

* The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
* The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
* The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

### Instrukcje

#### Sekcja I - Przygotowanie

Wykonując wszystkie kroki opisane w tej sekcji, zastąp istniejące pliki na karcie SD.
{: .notice--info}

1. Włóż kartę SD do komputera
1. Stwórz folder o nazwie `boot9strap` w katalogu głównym karty SD
1. Skopiuj `boot9strap.firm` i `boot9strap.firm.sha` z boot9strap `.zip` do folderu `/boot9strap/` na karcie SD
1. Copy `SafeB9SInstaller.firm` from the SafeB9SInstaller `.zip` to the root of your SD card and rename it to `boot.firm`
1. Reinsert your SD card into your console

    ![]({{ "/images/screenshots/updateb9s-root-layout.png" | absolute_url }})
    {: .notice--info}


#### Sekcja II - Instalacja boot9strap

1. Power on your console
    + This should automatically launch SafeB9SInstaller
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt isbootfirm="true" inline="true" %}

#### Sekcja III - Aktualizacja Luma3DS

1. Włóż kartę SD do komputera
1. Copy `boot.firm` and `boot.3dsx` from the Luma3DS `.zip` to the root of your SD card, replacing the existing file
1. Reinsert your SD card into your console
1. Power on your console
1. If your console has booted into the Luma3DS configuration menu, press (Start) to save and reboot
    + Luma3DS configuration menu are settings for the Luma3DS custom firmware. Many of these settings may be useful for customization or debugging
    + For the purpose of this guide, these settings will be left on default settings

___

### Kontynuuj do [Finalizowanie Instalacji](finalizing-setup)
{: .notice--primary}
