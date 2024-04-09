---
title: "B9S updaten"
---

{% include toc title="Inhoudsopgave" %}

### Verplicht te lezen

Deze pagina is bedoeld voor bestaande boot9strap gebruikers om hun installatie van boot9strap bij te werken naar de nieuwste versie.

### Wat je nodig hebt

* De nieuwste versie van [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (directe download)
* De nieuwste versie van [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (directe download)
* De nieuwste versie van [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (het Luma3DS `.zip` bestand)

### Instructies

#### Deel I - Voorbereiding

Voor alle stappen in dit gedeelte, moet je bestaande bestanden op je SD-kaart overschrijven.
{: .notice--info}

1. Plaats je SD kaart in je computer
1. Maak een map genaamd `boot9strap` op de hoofdmap van je SD-kaart
1. Kopieer `boot9strap.firm` en `boot9strap.firm.sha` van de boot9strap `.zip` naar de `/boot9strap/` map op je SD-kaart
1. Kopieer `SafeB9SInstaller.firm` van de SafeB9SInstaller `.zip` naar de hoofdmap van je SD-kaart en hernoem het naar `boot.firm`
1. Stop je SD-kaart terug in je console

    ![]({{ "/images/screenshots/updateb9s-root-layout.png" | absolute_url }})
    {: .notice--info}


#### Deel II - Boot9strap installeren

1. Zet je console aan
    + Dit zou SafeB9SInstaller automatisch moeten starten
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt isbootfirm="true" inline="true" %}

### Deel III - Luma3DS updaten

1. Plaats je SD kaart in je computer
1. Kopieer `boot.firm` en `boot.3dsx` van de Luma3DS `.zip` naar de hoofdmap van je SD-kaart en vervang het bestaande bestand
1. Stop je SD-kaart terug in je console
1. Zet je console aan
1. If your console has booted into the Luma3DS configuration menu, press (Start) to save and reboot
    + Luma3DS configuration menu are settings for the Luma3DS custom firmware. Veel van deze instellingen kunnen nuttig zijn voor aanpassing of debugging
    + For the purpose of this guide, these settings will be left on default settings

___

### Doorgaan naar [Installatie voltooien](finalizing-setup)
{: .notice--primary}
