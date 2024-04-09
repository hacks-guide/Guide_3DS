---
layout: splash
titel: "3DS Hacks Guide" #
header:
  overlay_color: "#5e616c" #
  overlay_image: /images/home-page-feature.jpg
  overlay_filter: 0.5
  cta_label: "Get Started"
  cta_url: "key-information"
  caption:
excerpt: "A complete guide to 3DS (and 2DS) custom firmware, <br /> from stock to boot9strap.<br />"
---

Lies alle Einleitungsseiten gründlich durch (einschließlich dieser), bevor du fortfährst.
{: .notice--info}

{% capture update-notice %}
{% include_relative include/3ds-online.txt %}
{% endcapture %}
<div class="notice--danger">{{ update-notice | markdownify }}</div>

## Was ist Custom Firmware?

**Custom Firmware** ("CFW") ist eine vollständige Software-Modifikation zu deinem 3DS, vergleichbar mit dem "Administrator-Zugriff" auf einem Computer. Es erlaubt dir, alles zu tun, was der 3DS physisch tun kann, anstatt von Nintendo eingeschränkt zu sein.

Beliebte Anwendungsmöglichkeiten für Custom Firmware beinhalten:

* Das Ausführen von Homebrew Software und Spielen, die für den 3DS gemacht, oder auf ihn geportet wurden
* Das Umgehen der Regionsperre, sodass du Spiele aus anderen Regionen spielen kannst
* HOME Menu customization, using community-created [themes and badges](https://themeplaza.art)
* Die Modifikation von Spielen ("ROM-Hacks") durch [LayeredFS](https://github.com/knight-ryu12/godmode9-layeredfs-usage/wiki/Using-Luma3DS'-layeredfs-(Only-version-8.0-and-higher))
* Speicherdatenbearbeitung, Sicherung, und Wiederherstellung
* Die Emulation älterer Konsolen, sowie native Wiedergabe von DS und GBA Spielen
* Die Installation deiner physichen Karten zur digitalen Nutzung

## Was wird mit dieser Anleitung installiert?

Diese Anleitung wird:
+ Install **boot9strap** and **Luma3DS custom firmware** on unmodified retail 3DS/2DS consoles
    + Luma3DS wird automatisch die Regionsbegrenzung entfernen und erlaubt dir, unsignierte Software auszuführen
+ verschiedene Homebrew Apps, wie einen Paketinstaller, Save Manager, und einen Homebrew App Store installieren
+ wichtige Sicherheitskopien die Bricks verhindern (und Datenverlust im Fall eines Bricks verhindern) erstellen

___

### Continue to [Key Information](key-information)
{: .notice--primary}
