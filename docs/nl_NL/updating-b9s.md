# Updating B9S

## Required Reading

Deze pagina is bedoeld voor bestaande boot9strap gebruikers om hun installatie van boot9strap bij te werken naar de nieuwste versie.

## What You Need

- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

## Instructions

### Section I - Prep Work

::: info

Voor alle stappen in dit gedeelte, moet je bestaande bestanden op je SD-kaart overschrijven.

:::

1. Plaats je SD kaart in je computer
2. Maak een map genaamd `boot9strap` op de hoofdmap van je SD-kaart
3. Kopieer `boot9strap.firm` en `boot9strap.firm.sha` van de boot9strap `.zip` naar de `/boot9strap/` map op je SD-kaart
4. Kopieer `SafeB9SInstaller.firm` van de SafeB9SInstaller `.zip` naar de hoofdmap van je SD-kaart en hernoem het naar `boot.firm`
5. Stop je SD-kaart terug in je console

   ::: info

   ![](/images/screenshots/updateb9s-root-layout.png)

   :::

### Section II - Installing boot9strap

1. Zet je console aan
   - This should automatically launch SafeB9SInstaller
2. When prompted, input the key combo given on the top screen to install boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
3. Once it is completed, force your console to power off by holding down the power button
   - Your console will only boot to the SafeB9SInstaller screen until the next section is completed

### Section III - Update Luma3DS

1. Plaats je SD kaart in je computer
2. Kopieer `boot.firm` en `boot.3dsx` van de Luma3DS `.zip` naar de hoofdmap van je SD-kaart en vervang het bestaande bestand
3. Stop je SD-kaart terug in je console
4. Zet je console aan
5. If your console has booted into the Luma3DS configuration menu, press (Start) to save and reboot
   - Luma3DS configuration menu are settings for the Luma3DS custom firmware. Veel van deze instellingen kunnen nuttig zijn voor aanpassing of debugging
   - For the purpose of this guide, these settings will be left on default settings

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
