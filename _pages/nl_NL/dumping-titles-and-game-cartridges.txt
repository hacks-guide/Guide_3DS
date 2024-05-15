---
title: "Geïnstalleerde Titels en Game Cartridges dumpen"
---

{% include toc title="Inhoudsopgave" %}

Voor ondersteuning (in het Engels) met GodMode9, evenals voor hulp met scripting en het krijgen van updates en info, meld je aan bij [GodMode9 op Discord](https://discord.gg/BRcbvtFxX4).
{: .notice--primary}

### Verplicht te lezen

Naast het creëren en herstellen van NAND backups heeft GodMode9 de functionaliteit om geïnstalleerde titels te dumpen naar installeerbare `.cia` bestanden, om game cartridge data te dumpen naar een `.3ds` ROM-bestand, en om een game cartridge direct te installeren op het systeem.

## GodMode9 updaten

Deze instructies zijn bedoeld voor gebruik met GodMode9 v2.0.0 of hoger. Als je een oudere versie van GodMode9 hebt, volg dan deze instructies om het bij te werken.
{: .notice--info}

### Wat je nodig hebt

* De nieuwste versie van [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (het GodMode9 `.zip` bestand)

### Instructies

1. Zet je console uit
1. Plaats je SD kaart in je computer
1. Kopieer `GodMode9.firm` van de GodMode9 `.zip` naar de `/luma/payloads/` map op je SD-kaart
1. Kopieer de `gm9` map uit de GodMode9 `.zip` naar de hoofdmap van de SD-kaart
1. Stop je SD-kaart terug in je console

## Een game cartridge dumpen

{% capture notice %}
Insert the game cartridge you intend to dump into your console
+ 3DS game cartridges zullen naar een `.3ds` formaat gedumpt worden
+ NDS game cartridges zullen naar een `.nds` formaat worden gedumpt
{% endcapture %}

<div class="notice--info">{{ notice | markdownify }}</div>

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
1. Navigeer naar `[C:] GAMECART`
1. Volg de stappen die van toepassing zijn op jouw game cartridge:
    + **3DS game cartridge:** Druk op (A) op `[TitleID].trim.3ds` om het te selecteren
    + **NDS game cartridge:** Druk op (A) op '[TitleID].nds` om het te selecteren
        + Trimmed dumps are not recommended for NDS games in general, as they can cause various playback issues
1. Selecteer "Copy to 0:/gm9/out"
1. Je niet-installeerbaar `.3ds` of `.nds` geformatteerd bestand zal worden geplaatst in de `/gm9/out/` map op je SD-kaart

## Een game cartridge direct installeren op het systeem

Dit werkt alleen voor 3DS spellen; het is niet mogelijk om een NDS game cartridge als titel op het systeem te installeren.
{: .notice--info}

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
1. Navigeer naar `[C:] GAMECART`
1. Druk op (A) op `[TitleID].trim.3ds` om het te selecteren, selecteer vervolgens "NCSD image options..." en selecteer dan "Install game image"
1. Druk op (A) om SysNAND (lvl1) writing te ontgrendelen en voer daarna de toetsencombinatie in die wordt gegeven
1. Zodra het proces is voltooid, zal het spel verschijnen in het HOME-menu als een geïnstalleerde titel.

## Een 3DS game gartridge dumpen naar .CIA

Dit zou enkel gebruikt moeten worden als [een Game Cartridge direct installeren op het systeem](#installing-a-game-cartridge-direct-to-the-system) niet werkt.
{: .notice--info}

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
1. Navigeer naar `[C:] GAMECART`
1. Druk op (A) op `[TitleID].trim.3ds` om het te selecteren, selecteer vervolgens "NCSD image options..." en selecteer dan "Build CIA from file"
1. Jouw installeerbaar `.cia` geformatteerd bestand zal in `/gm9/out` geplaatst worden op je SD-kaart

## Een geïnstalleerde titel dumpen

Dit laat dumping toe van zowel systeem als digitale titels die door de gebruiker zijn geïnstalleerd, zoals titels die zijn gedownload van de eShop.
{: .notice--info}

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
1. Druk op de (Home) knop om het actiemenu te openen
1. Selecteer "Title manager"
1. Selecteer een van de volgende afhankelijk van het type titel dat je wilt dumpen
    + **Gebruiker geïnstalleerde titel**: `[A:] SD CARD`
    + **Systeemtitel / DSiWare**: `[1:] NAND / TWL`
1. Selecteer de titel die je wilt dumpen
1. Selecteer "Manage Title..."
1. Selecteer "Build CIA (standard)"
1. Jouw installeerbaar `.cia` geformatteerd bestand zal in `/gm9/out` geplaatst worden op je SD-kaart

## GBA VC saves backuppen

Het spel zal in de `/gm9/out/` folder op je SD-kaart geplaatst worden met de naam `<TitleID>.gbavc.sav`.
{: .notice--info}

Om een `<TitleID>.gbavc.sav` bestand te identificeren moet je een lijst van geïnstalleerde spellen raadplegen. Dit doe je door (Home) in te drukken om het action menu te tonen, vervolgens selecteer je `Title manager` en dan selecteer je `[A:] SD CARD`.
{: .notice--info}

1. Voer het volgende proces uit voor elk GBA VC spel waarvoor je een back-up wilt maken van de save:
    + Start het GBA VC spel
    + Sluit het spel af
    + Zet je console uit
    + Press and hold (Start), and while holding (Start), power on your console. Dit zal GodMode9 starten
    + Navigeer naar `[S:] SYSNAND VIRTUAL`
    + Druk op (Y) op `agbsave.bin` om deze te selecteren
    + Selecteer "AGBSAVE options..."
    + Selecteer "Dump GBA VC save"
    + Druk op (A) om door te gaan
    + Press (Start) to reboot your console

## GBA VC saves herstellen

Om een `<TitleID>.gbavc.sav` bestand te identificeren moet je een lijst van geïnstalleerde spellen raadplegen. Dit doe je door (Home) in te drukken om het action menu te tonen, vervolgens selecteer je `Title manager` en dan selecteer je `[A:] SD CARD`.
{: .notice--info}

1. Voer het volgende proces uit voor elk GBA VC spel waarvan je de save wilt herstellen:
    + Start het GBA VC spel
    + Sluit het spel af
    + Zet je console uit
    + Press and hold (Start), and while holding (Start), power on your console. Dit zal GodMode9 starten
    + Navigate to `[0:] SDCARD` -> `gm9` -> `out`
    + Druk op (Y) op de `<TitleID>.gbavc.sav` bestand dat je wil herstellen om het te kopiëren
    + Druk op (B) om terug te gaan naar het hoofdmenu
    + Navigeer naar `[S:] SYSNAND VIRTUAL`
    + Druk op (Y) op `agbsave.bin` om deze te selecteren
    + Selecteer "AGBSAVE options..."
    + Selecteer "Inject GBA VC save"
    + Druk op (A) om door te gaan
    + Press (Start) to reboot your console
    + Start het GBA VC spel
    + Sluit het spel af

## Een .CIA bestand coderen / decoderen

Om alles makkelijk terug te vinden in de toekomst, kopieer elk `.cia` bestand dat je wilt coderen / decoderen naar de `/cias/` map op je SD-kaart
{: .notice--info}

1. Houd (Start) ingedrukt en terwijl je (Start) ingedrukt houdt, zet je je console aan. Dit zal GodMode9 starten
1. Navigeer naar `[0:] SDCARD`-> `cias`
1. Druk op (A) op het `.cia` bestand om het te selecteren, selecteer dan "CIA image options..."
1. Selecteer de optie om de gewenste functie uit te voeren:
    + **Encrypt to 0:/gm9/out:** maakt een gecodeerde kopie van het geselecteerde `.cia` bestand aan in de `/gm9/out/` map op je SD-kaart
    + **Decrypt to 0:/gm9/out:** maakt een gedecodeerde kopie van het geselecteerde `.cia` bestand aan in de `/gm9/out/` map op je SD-kaart
    + **Encrypt inplace:** Vervang het geselecteerde `.cia` bestand met een gecodeerde versie
    + **Decrypt inplace:** Vervang het geselecteerde `.cia` bestand met een gedecodeerde versie
1. Jouw gecodeerde / gedecodeerde `.cia` zal naar de gewenste locatie worden geplaatst
