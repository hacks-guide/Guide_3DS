---
title: "Обновление B9S"
---

{% include toc title="Содержание" %}

### Обязательно к прочтению

Эта страница предназначена для пользователей boot9strap, чтобы они могли обновить установленный boot9strap до последней версии.

### Что понадобится

* The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
* The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
* The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

### Инструкция

#### Часть I - Подготовительные работы

Для всех шагов в этой части перезаписывайте любые существующие файлы на SD-карте.
{: .notice--info}

1. Вставьте SD-карту в компьютер
1. Создайте папку `boot9strap` в корне SD-карты
1. Скопируйте `boot9strap.firm` и `boot9strap.firm.sha` из `.zip-архива` boot9strap в папку `/boot9strap/` в корне SD-карты
1. Copy `SafeB9SInstaller.firm` from the SafeB9SInstaller `.zip` to the root of your SD card and rename it to `boot.firm`
1. Reinsert your SD card into your console

    ![]({{ "/images/screenshots/updateb9s-root-layout.png" | absolute_url }})
    {: .notice--info}


#### Часть II - Установка boot9strap

1. Power on your console
    + This should automatically launch SafeB9SInstaller
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt isbootfirm="true" inline="true" %}

#### Часть III - Обновление Luma3DS

1. Вставьте SD-карту в компьютер
1. Copy `boot.firm` and `boot.3dsx` from the Luma3DS `.zip` to the root of your SD card, replacing the existing file
1. Reinsert your SD card into your console
1. Power on your console
1. If your console has booted into the Luma3DS configuration menu, press (Start) to save and reboot
    + Luma3DS configuration menu are settings for the Luma3DS custom firmware. Many of these settings may be useful for customization or debugging
    + For the purpose of this guide, these settings will be left on default settings

___

### Следующий шаг: [Завершение установки](finalizing-setup)
{: .notice--primary}
