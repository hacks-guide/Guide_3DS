---
title: "FAQ"
---
{% include toc title="Inhalt"%}

{% capture update-notice %}
{% include_relative include/3ds-online.txt %}
{% endcapture %}
<div class="notice--danger">{{ update-notice | markdownify }}</div>

**Yes**, you can still install custom firmware on your 3DS, even after the closure of eShop.
{: .notice--info}

## FAQ vor der Installation

{% capture compat %}
<summary><u>I am on the latest system version. Is my console hackable without any external hardware/prerequisites?</u></summary>

**Yes!** New 3DS / New 3DS XL / New 2DS XL can use [super-skaterhax](installing-boot9strap-(super-skaterhax)), while 3DS / 3DS XL / 2DS can use [MSET9](installing-boot9strap-(mset9)).

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>What consoles is this guide compatible with?</u></summary>

This guide is compatible with all retail 3DS-family devices (3DS, 3DS XL, 2DS, New 3DS, New 3DS XL, New 2DS XL). If your system version string is displayed as "0.0.0-0", then you may have a developer unit.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>How risky is hacking my console?</u></summary>

Bricks are now effectively impossible unless you are purposely trying to brick your console.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Can I run awesome homebrew and emulators with this?</u></summary>

Yes! Diese Anleitung wird nützliche Homebrew-Apps instalieren, darunter den Universal-Updater (siehe https://github.com/Universal-Team/Universal-Updater/releases/latest), eine Art Homebrew App Store.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Can I use this to play games from other regions?</u></summary>

Yes; Luma3DS will automatically ignore the region check for cartridges and installed titles. Some games may need to make use of Luma's [locale emulation feature](https://wiki.hacks.guide/wiki/3DS:Setting_game_locales) in order to work properly on out-of-region consoles.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Will I lose any features if I install CFW?</u></summary>

No. Consoles with custom firmware can download game updates and run physical cartridges as any other 3DS can.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Can I keep my NNID, saves, digital games (etc.)?</u></summary>

Your NNID (if you have one) will not be affected by this guide. Consoles with a region of KOR, CHN, or TWN do not have NNID functionality to begin with and are thus unaffected.

Following this guide alone should not result in data loss (saves, digital games, etc), but SD card corruption is always a possibility. You should make a backup of your SD card contents if you have important data.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Will my 3DS be banned for having CFW?</u></summary>

Bans are no longer possible because Nintendo Network services have been shut down (for everyone).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Can I do this without a computer (e.g. an Android phone)?</u></summary>

Yes! All you need is the ability to put files on a compatible SD card.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>What size SD card can I use?</u></summary>

You will need at least 1.5GB of free SD card space to follow this guide in its entirety. Während der 3DS offiziell mit SD-Karten bis zu 32GB kompatibel ist, können größere SD-Karten verwendet werden, wenn sie manuell als FAT32 formatiert werden. Es wird nicht empfohlen, SD-Karten größer als 128GB zu verwenden, da bekannte Probleme mit GBA-Grafiken und benutzerdefinierten Designs auftreten.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>I heard about this thing I have to pay for (Gateway, Sky3DS, ntrboot, R4, etc). Is that something I need?</u></summary>

No. While a DS flashcart can be used to mod a 3DS using [ntrboot](ntrboot), there is now a free software method available for most consoles.

3DS-mode flashcarts like Gateway and Sky3DS are not recommended because they are obsolete and may carry brick risk.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>What's the difference between custom firmware and homebrew?</u></summary>

Definitionally speaking, custom firmware refers to a modification of the 3DS system software to do things that it normally isn't able to. Homebrew generally refers to software created outside of official sources (i.e. not distributed by eShop or cartridges).

Historically, the 3DS used to have userland homebrew access through older exploits like ninjhax, which people sometimes called just "homebrew". Das mit Userland gewährte Niveau des Systemzugriffs erlaubt es dir, grundlegendes Homebrew und Emulatoren zu benutzen, hat dir aber nicht erlaubt, Spiele (einfach) zu modifizieren oder Cartridges zu dumpen. Es war auch viel instabiler, alles ist öfters gecrasht und brauchte einen vollen Neustart. Custom Firmware erlaubt ein viel besseres Niveau des Systemzugriffes und ist auch viel stabiler als Nur-Homebrew Entrypoints.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Post-Installation FAQ

{% capture compat %}
<summary><u>Is it safe to update my 3DS to the latest version with CFW?</u></summary>

If you are using Luma3DS, your custom firmware loader (boot9strap) will *never* be removed when performing a system update. There have been updates in the past that have resulted in Luma3DS crashing on boot, so it is a good idea to wait a couple of hours to ensure that the latest update will not temporarily render the console unusable until Luma3DS is updated. System updates can be performed the same way as they are on an unmodified 3DS: through System Settings, Safe Mode, or the update prompt when the update is automatically downloaded.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>How do I upgrade my SD card?</u></summary>

Copy and paste your SD card contents to a new SD card formatted as FAT32. Für 128 GB Karten wird eine Allocation Unit Size von 65536 empfohlen. SD-Karten größer als 128GB werden aufgrund bekannter Probleme mit GBA-Grafiken und benutzerdefinierten Designs nicht empfohlen.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Can I system transfer with CFW?</u></summary>

Yes, system transfers can be performed through the official System Transfer function to other consoles with CFW (inconsistencies may occur if the target console is unmodified). Tickets für unechte Titel (Homebrew) werden nicht übertragen, aber die Titel können mit [faketik](https://github.com/ihaveamac/faketik/releases/latest) wieder erscheinen. Überprüfe nochmals, dass du keinen drahtlosen Datentransfer machst, da dies unechte Titel löschen wird. CFW wird auf beiden Konsolen erhalten bleiben.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>How do I change the system language of a Japanese 3DS?</u></summary>

The only way to change the system language of a Japanese 3DS to a language other than Japanese is to perform a [region change](region-changing). Note that this is very likely to break the Nintendo eShop on your console, which means you will be unable to update your games whether they are in-region or out-of-region.
 {% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>How do I update homebrew applications?</u></summary>

It depends on the format of the homebrew application. Allgemein gesagt:

* Homebrew im **CIA Format** kann durch Installieren einer neuen CIA aktualisiert werden, was normalerweise die alte Version überschreibt. Wenn die alte CIA nicht überschrieben wird, kannst du die Alte aus der Datenverwaltung löschen, wie du es auch bei jedem anderen 3DS-Titel tun würdest.
* Homebrew im **3DSX Format** kann durch Ersetzen der 3DSX Datei in `/3ds/` mit einer neuen Kopie aktualisiert werden. Wenn die Anwendung zusätzliche Assets enthält, musst du diese vielleicht in einem anderen Ordner ersetzen. Lies dafür die Dokumentation der Homebrew Anwendung.
* Zum Updaten von Luma3DS, gehe auf [diese Seite](restoring-updating-cfw). Zum Updaten von GodMode9, gehe auf [diese Seite](godmode9-usage#updating-godmode9).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>How do I update my games?</u></summary>

You can continue to download game updates from the Nintendo eShop, even though it has now shut down.

If the game is not from the same region as the console, you will need to [dump the updates](dumping-titles-and-game-cartridges) from a 3DS that has the updates installed. The Nintendo eShop only contains updates for the console's region (for example, a Japanese 3DS will only have updates for Japanese games).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Help! Something bad happened and my 3DS won't boot to HOME Menu...</u></summary>

Please look at the [troubleshooting guide](troubleshooting#boot-issues-on-consoles-with-custom-firmware). **Uninstalling CFW when your console is in an unbootable state is not recommended, as it is very likely to lead to a brick**.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## menuhax / A9LH / Gateway FAQ

{% capture compat %}
<summary><u>I modded my console (x) years ago, so it already has some sort of homebrew. What should I do?</u></summary>

It is recommended that you upgrade your setup to a modern, boot9strap-based one. Follow the [Checking for CFW](checking-for-cfw) guide to see how to upgrade your setup.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>My setup works for me. Why should I upgrade it?</u></summary>

The vast majority of modern homebrew (such as Checkpoint and BootNTR Selector) have only been tested on modern, boot9strap-based setups and may not work entirely (or at all) on older setups based on menuhax, A9LH, or Gateway. In addition, depending on your setup, you may be unable to safely update to the latest firmware. Moderne, boot9strap-basierte Setups erlauben einen höheren Grad an Systemzugriff als frühere Hacks, einschließlich der Möglichkeit, die Bootrom deiner Konsole zu dumpen.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Will I lose anything if I upgrade my setup?</u></summary>

Your old setup (including your EmuNAND, if you have one) can usually be directly migrated to boot9strap with no data loss. Wenn du Daten hast, die dir sehr wichtig sind, ist es eine gute Idee eine entschlüsselte Kopie von deinen Speicherdaten mit einem Tool wie [JKSM](https://github.com/J-D-K/JKSM/releases/tag/12%2F20%2F2018) zu erstellen bevor du ein Setup upgradest.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>How do I move saves from an existing Gateway setup to a more modern setup?</u></summary>

**A:** Lies [diesen Thread](https://gbatemp.net/threads/425743/).
{% endcapture %}
<details>{{ compat | markdownify }}</details>
