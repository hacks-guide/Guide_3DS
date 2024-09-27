# Installing boot9strap (safecerthax)

:::details Technical Details (optional)

:::

## Compatibility Notes

safecerthax is compatible with all Old 3DS and Old 2DS consoles in all regions on system versions 1.0.0 through 11.14.0.

::: info

This exploit will not work on the New 3DS, New 3DS XL, or New 2DS XL. Please ensure that the console you are modding is an Old 3DS, Old 3DS XL, or Old 2DS before continuing.

:::

## What You Need

- The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (direct download)
- The latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (direct download)
- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

## Instructions

### Section I - Hardware Button Check

In this section, you will see whether your shoulder buttons are working on your console. This will determine whether your console is compatible with this method.

1. Zet je console aan
2. Once you see the HOME Menu, press the (Left Shoulder) and (Right Shoulder) buttons at the same time
   - The camera applet should appear
3. Zet je console uit

::: warning

If the camera did NOT appear, you cannot follow this method. If this is the case, use [Installing boot9strap (MSET9)](installing-boot9strap-\(mset9\)) instead.

:::

### Section II - Prep Work

In this section, you will copy the files needed to trigger the safecerthax exploit.

1. Plaats je SD kaart in je computer
2. Kopieer `boot.firm` en `boot.3dsx` van de Luma3DS `.zip` naar de hoofdmap van je SD-kaart
   - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
3. Maak een map genaamd `boot9strap` op de hoofdmap van je SD-kaart
4. Kopieer `boot9strap.firm` en `boot9strap.firm.sha` van de boot9strap `.zip` naar de `/boot9strap/` map op je SD-kaart
5. Kopieer `SafeB9SInstaller.bin` van de SafeB9SInstaller `.zip` naar de hoofdmap van je SD-kaart
6. Stop je SD-kaart terug in je console
7. Zet je console aan

### Section III - safecerthax proxy

In this section, you will change your Internet connection settings to use a proxy network designed to exploit the System Update feature of your console.

<!--@include: ./_include/addproxy.md -->

1. Zet je console uit

### Section IV - safecerthax

In this section, you will enter Safe Mode (a feature available on all 3DS family consoles) where safecerthax will be triggered, which will launch you into the boot9strap (custom firmware) installer.

1. With your console still powered off, hold the following buttons: (Left Shoulder) + (Right Shoulder) + (D-Pad Up) + (A), and while holding these buttons together, power on your console
   - Keep holding the buttons until the console boots into Safe Mode (a "system update" menu)
2. Druk op "OK" om de update te accepteren
   - There is no update. Dit is deel van de exploit
3. Press "I accept" to accept the terms and conditions
4. The update will eventually fail, with the error code `003-1099`. Dit is verwacht gedrag
5. Press "OK" to close the error message
6. Als de exploit succesvol was, zal je SafeB9SInstaller hebben opgestart
   - If the console freezes or crashes, force power off the console, then retry this section

### Section V - Installing boot9strap

In this section, you will install custom firmware onto your console.

1. When prompted, input the key combo given on the top screen to install boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
2. Once it is complete, press (A) to reboot your console

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

### Section VI - Restoring default proxy

<!--@include: ./_include/rmproxy.md -->

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
