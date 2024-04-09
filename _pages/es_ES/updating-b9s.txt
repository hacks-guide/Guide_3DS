---
title: "Actualizar B9S" #
---

{% include toc title="Tabla de contenidos" %}

### Lectura requerida

Esta página es para ayudar a los usuarios actuales de boot9strap a actualizar su instalación a la última versión.

### Qué necesitas

* The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
* The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
* The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

### Instrucciones

#### Sección I - Preparativos

Para todos los pasos en esta sección, sobreescribe cualquier archivo existente en tu tarjeta SD.
{: .notice--info}

1. Inserta tu tarjeta SD en tu computadora
1. Crea una carpeta llamada `boot9strap` en la raíz de tu tarjeta SD
1. Copia `boot9strap.firm` y `boot9strap.firm.sha` desde el `.zip` de `boot9strap` a la carpeta `/boot9strap/` en tu tarjeta SD
1. Copia `SafeB9SInstaller.firm` desde el `.zip` de SafeB9SInstaller a la raíz de tu tarjeta SD y renómbralo a `boot.firm`
1. Reinsert your SD card into your console

    ![]({{ "/images/screenshots/updateb9s-root-layout.png" | absolute_url }})
    {: .notice--info}


#### Sección II - Instalar boot9strap

1. Power on your console
    + Esto debería iniciar SafeB9SInstaller automáticamente
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt isbootfirm="true" inline="true" %}

#### Section III - Actualizar Luma3DS

1. Inserta tu tarjeta SD en tu computadora
1. Copia `boot.firm` desde el `.zip` de Luma3DS a la raíz de tu tarjeta SD reemplazando el archivo existente
1. Reinsert your SD card into your console
1. Power on your console
1. If your console has booted into the Luma3DS configuration menu, press (Start) to save and reboot
    + Luma3DS configuration menu are settings for the Luma3DS custom firmware. Many of these settings may be useful for customization or debugging
    + For the purpose of this guide, these settings will be left on default settings

___

### Continúa en [Finalizar instalación](finalizing-setup)
{: .notice--primary}
