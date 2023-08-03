---
titel: "ntrboot flashen (Einzelnes 3DS-System) "
---

{% include toc title="Inhalt" %}

### Lesen erforderlich

Bevor du fortfährst, stelle sicher, dass du alle Informationen zu [ntrboot](ntrboot) gelesen hast

Diese Methode erfordert nichts weiter außer deinem ungehacktem 3DS und einer kompatiblen Flashkarte. Diese Methode verwendet eine Flashkarte zum Ausführen der Ntrboot Flasher ".nds" Datei auf deinem 3DS. Dies bedeutet, dass deine Flashkarte das Ausführen von ".nds" Dateien auf deiner 3DS Version unterstützen muss. Schaue in der Flashcart Tabelle auf [ntrboot](ntrboot) für weitere Informationen.

In seltenen Fällen ist kann es sein, dass während des Flashens einer gefälschten Flashkarte diese **gebrickt** wird und somit permanent unbenutzbar wird. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).
{: .notice--danger}

### Was du brauchst

* Deine ntrboot kompatible Flashkarte
* The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
* The latest release of [ntrboot_flasher_nds](https://github.com/jason0597/ntrboot_flasher_nds/releases/latest) (`ntrboot_flasher_nds.nds`)

### Anleitung

#### Schritt I - Vorbereitungen

1. Power off your console
1. Stecke deine SD-Karte in den Computer
1. Create a folder named `ntrboot` on the root of your flashcart's SD card
1. Copy `boot9strap_ntr.firm` from the boot9strap ntr `.zip` to the `/ntrboot/` folder on your flashcart's SD card
1. Copy `ntrboot_flasher_nds.nds` to your flashcart's SD card
1. Steck deine SD-Karte in deine Flashkarte zurück
1. Insert your ntrboot compatible DS / DSi flashcart into your console

#### Schritt II - ntrboot flashen

1. Launch `ntrboot_flasher_nds.nds` on your console using your flashcart
1. Drücke (A) um fortzufahren
1. Benutze (Hoch) und (Runter) um deine Flashcart auszuwählen
1. Drücke (A) um fortzufahren
1. Select "Dump flash" to make a backup of your flashcart's memory
1. Input the key combo given to confirm
1. Drücke (A) um fortzufahren
1. Benutze (Hoch) und (Runter) um deine Flashcart auszuwählen
1. Drücke (A), um fortzufahren
1. Select "Inject FIRM" to install boot9strap to your flashcart
1. Input the key combo given to confirm
1. Drücke (A), um fortzufahren
1. Power off your console

___

### Fortfahren mit der [Installation von boot9strap (ntrboot)](installing-boot9strap-(ntrboot))
{: .notice--primary}
