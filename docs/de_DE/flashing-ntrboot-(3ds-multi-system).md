# Flashing ntrboot (3DS Multi System)

## Required Reading

Before proceeding, ensure you have read all of the information on [ntrboot](ntrboot).

This method requires temporary access to a second 3DS family console that is already running boot9strap. Dies erfordert nicht, dass deine Flashcart die 3DS-Version unterstützt.

::: danger

In manchen seltenen Fällen ist es möglich, dass während des Flashens einer gefälschten Flashkarte diese **gebrickt** wird und somit permanent unbenutzbar wird. This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two 3DS family consoles
    - **The source 3DS**: the 3DS family console that is already running boot9strap
    - **The target 3DS**: the 3DS family console on stock firmware
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher](https://github.com/ntrteam/ntrboot_flasher/releases/latest) (`ntrboot_flasher.firm`)

## Instructions

### Section I - Prep Work

1. Schalte den **Quell-3DS** aus
2. Lege die SD-Karte des **Quell-3DS** in deinen Computer ein
3. Erstelle einen Ordner mit dem Namen `ntrboot` im Stammverzeichnis deiner SD-Karte
4. Kopiere `boot9strap_ntr.firm` und `boot9strap_ntr.firm.sha` aus der boot9strap ntr `.zip`-Datei in den `/ntrboot/`-Ordner auf deiner SD-Karte
5. Kopiere `ntrboot_flasher.firm` in den `/luma/payloads` Ordner auf der **Quell-3DS** SD-Karte
6. Lege die **Quell-3DS**'s SD-Karte zurück in den **Quell-3DS**
7. Lege deine ntrboot-kompatible DS / DSi Flashkarte in den **Quell-3DS**

### Section II - Flashing ntrboot

1. Starte den Luma3DS Chainloader indem du (Start) während des Startvorgangs des **Quell-3DS** gedrückt hälst
2. Wähle "ntrboot_flasher"
3. Lies die rote Warnung auf dem Bildschirm
4. Drücke (A), um fortzufahren
5. Wähle deine Flashcart aus
    - If you do not see your flashcart in the list at the top, read the bottom screen for more info on each option
6. Wähle "Dump Flash"
7. Warte bis der Prozess beendet ist
8. Drücke (A), um fortzufahren
9. Drücke (A), um zum Hauptmenü zurückzukehren
10. Wähle "Inject Ntrboot"
11. Drücke (A) für die Retail-Version von ntrboot
12. Warte bis der Prozess beendet ist
13. Drücke (A), um zum Hauptmenü zurückzukehren
14. Drücke (B) um den **Quell-3DS** auszuschalten

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
