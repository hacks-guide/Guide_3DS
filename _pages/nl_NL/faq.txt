---
title: "Veelgestelde vragen"
---
{% include toc title="Inhoudsopgave"%}

{% capture update-notice %}
{% include_relative include/3ds-online.txt %}
{% endcapture %}
<div class="notice--danger">{{ update-notice | markdownify }}</div>

**Yes**, you can still install custom firmware on your 3DS, even after the closure of eShop.
{: .notice--info}

## Pre-installatie FAQ

{% capture compat %}
<summary><u>I am on the latest system version. Is mijn console hackbaar zonder externe hardware/vereisten?</u></summary>

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

Ja! Deze handleiding zal een aantal nuttige homebrew applicaties installeren, waaronder [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases/latest), deze werkt als een homebrew app store.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Can I use this to play games from other regions?</u></summary>

Yes; Luma3DS will automatically ignore the region check for cartridges and installed titles. Some games may need to make use of Luma's [locale emulation feature](https://wiki.hacks.guide/wiki/3DS:Setting_game_locales) in order to work properly on out-of-region consoles.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Will I lose any features if I install CFW?</u></summary>

Nee. Consoles with custom firmware can download game updates and run physical cartridges as any other 3DS can.
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

Ja! All you need is the ability to put files on a compatible SD card.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Welke grootte SD-kaart kan ik gebruiken?</u></summary>

You will need at least 1.5GB of free SD card space to follow this guide in its entirety. Terwijl de 3DS officieel compatibel is met SD-kaarten tot 32GB, grotere SD-kaarten kunnen gebruikt worden als ze handmatig geformatteerd worden als FAT32. Het wordt niet aanbevolen om SD-kaarten groter dan 128GB te gebruiken als gevolg van bekende problemen met GBA afbeeldingen en custom themes.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>I heard about this thing I have to pay for (Gateway, Sky3DS, ntrboot, R4, etc). Is that something I need?</u></summary>

Nee. While a DS flashcart can be used to mod a 3DS using [ntrboot](ntrboot), there is now a free software method available for most consoles.

3DS-mode flashcarts like Gateway and Sky3DS are not recommended because they are obsolete and may carry brick risk.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>What's the difference between custom firmware and homebrew?</u></summary>

Definitionally speaking, custom firmware refers to a modification of the 3DS system software to do things that it normally isn't able to. Homebrew generally refers to software created outside of official sources (i.e. not distributed by eShop or cartridges).

Historically, the 3DS used to have userland homebrew access through older exploits like ninjhax, which people sometimes called just "homebrew". Het systeemtoegangsniveau dat verleend werd met userland, gaf je de mogelijkheid om homebrew en emulators te gebruiken, maar je kon niet (gemakkelijk) spellen aanpassen of cartridges dumpen. Het was ook een stuk minder stabiel, met homebrew die vaak onaangenaam crashten en een volledige herstart van het systeem vereisten. Custom firmware geeft een veel hoger niveau van systeemtoegang en is ook stabieler dan alleen-homebrew toegangspunten.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

## FAQ na installatie

{% capture compat %}
<summary><u>Is it safe to update my 3DS to the latest version with CFW?</u></summary>

If you are using Luma3DS, your custom firmware loader (boot9strap) will *never* be removed when performing a system update. There have been updates in the past that have resulted in Luma3DS crashing on boot, so it is a good idea to wait a couple of hours to ensure that the latest update will not temporarily render the console unusable until Luma3DS is updated. System updates can be performed the same way as they are on an unmodified 3DS: through System Settings, Safe Mode, or the update prompt when the update is automatically downloaded.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>How do I upgrade my SD card?</u></summary>

Copy and paste your SD card contents to a new SD card formatted as FAT32. Voor SD-kaarten die groter zijn dan 128GB, wordt een allocation size van 65536 aanbevolen. SD-kaarten groter dan 128 GB worden niet aanbevolen als gevolg van bekende problemen met GBA beelden en custom themes.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Can I system transfer with CFW?</u></summary>

Yes, system transfers can be performed through the official System Transfer function to other consoles with CFW (inconsistencies may occur if the target console is unmodified). Tickets voor niet-legitieme titels (homebrew) zullen niet overgedragen worden, maar de titels kunnen opnieuw zichtbaar gemaakt worden met [faketik](https://github.com/ihaveamac/faketik/releases/latest). Zorg ervoor dat je geen wirelesss transfer doet, dit zal ervoor zorgen dat al je onwettige titels verwijdert worden. CFW zal op beide consoles blijven.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>How do I change the system language of a Japanese 3DS?</u></summary>

The only way to change the system language of a Japanese 3DS to a language other than Japanese is to perform a [region change](region-changing). Note that this is very likely to break the Nintendo eShop on your console, which means you will be unable to update your games whether they are in-region or out-of-region.
 {% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>How do I update homebrew applications?</u></summary>

Het hangt af van het formaat van de homebrew applicatie. Algemeen geldt dat:

* Homebrew in **CIA formaat** kan worden geüpdate door het installeren van de nieuwe CIA, dit zal meestal de oude versie overschrijven. Als het oude CIA bestand niet is overschreven, kan je de oude uit Data Management verwijderen zoals je dat zou doen voor andere 3DS titels.
* Homebrew in **3DSX formaat** kan worden geüpdate door het vervangen van het overeenkomende 3DSX bestand in ´/3ds/´ met een nieuw kopie. Als de homebrew applicatie bepaalde extra assets bevat, zul je misschien die folder op een andere plaats zetten. Raadpleeg de documentatie van de homebrew applicatie.
* Voor het bijwerken van Luma3DS, zie [deze pagina](restoring-updating-cfw). Om GodMode9 te updaten, ga naar [deze pagina](godmode9-usage#updating-godmode9).
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

## Menuhax / A9LH / Gateway FAQ

{% capture compat %}
<summary><u>I modded my console (x) years ago, so it already has some sort of homebrew. What should I do?</u></summary>

It is recommended that you upgrade your setup to a modern, boot9strap-based one. Volg de [controleren op CFW](checking-for-cfw) handleiding om te zien hoe je je setup kan upgraden.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>My setup works for me. Why should I upgrade it?</u></summary>

The vast majority of modern homebrew (such as Checkpoint and BootNTR Selector) have only been tested on modern, boot9strap-based setups and may not work entirely (or at all) on older setups based on menuhax, A9LH, or Gateway. Afhankelijk van je setup, zou het kunnen dat je niet veilig kunt updaten naar de nieuwste firmware. Moderne, op boot9strap gebaseerde setups bieden een grotere niveau van toegang tot het systeem dan eerdere hacks, waaronder de mogelijkheid om de bootrom gegevens van je console te dumpen.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>Will I lose anything if I upgrade my setup?</u></summary>

Your old setup (including your EmuNAND, if you have one) can usually be directly migrated to boot9strap with no data loss. Als je gegevens hebt die belangrijk zijn voor je, is het een goed idee om een niet-versleutelde backup van je save data the maken voordat je je setup upgrade met een tool zoals [JKSM](https://github.com/J-D-K/JKSM/releases/tag/12%2F20%2F2018).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><u>How do I move saves from an existing Gateway setup to a more modern setup?</u></summary>

**A:** Zie [deze thread](https://gbatemp.net/threads/425743/).
{% endcapture %}
<details>{{ compat | markdownify }}</details>
