* * *

title: "Decrypt9 (MSET)" permalink: /decrypt9-(mset).html lang: en_US ref: decrypt9-(mset)

* * *

Das erste was dieser Guide machen wird ist Decrypt9 zum laufen zu bringen. Decrypt9 ist ein multifunktionelles Werkzeug, welches uns erlauben wird die Version 2.1.0 zu installieren. Diese Version enthält die Schwachstelle, welche benötigt wird um die weiteren Exploits des Systems zu benutzen. {: .notice}

If you have already hacked your 3DS before and have a EmuNAND based CFW setup, this guide deals exclusively with SysNAND and you should follow all instructions from within or applying to SysNAND. Beachte, dass es sich bei den Begriffen EmuNAND und RedNAND um leicht verschiedene Implementationen des [selben Konzepts](http://3dbrew.org/wiki/NAND_Redirection) handelt. {: .notice--info}

#### Was du brauchst

* DS Flashcard, welche auf deiner 3DS Version funktioniert
* Die neueste Version von [Decrypt9WIP](https://github.com/d0k3/Decrypt9WIP/releases/)

#### Anleitung

  1. Erstelle einen `files9` Ordner auf dem Root deiner SD Karte falls dieser noch nicht existiert
  2. Kopiere `Launcher.dat` und `Decrypt9WIP.dat` aus der Decrypt9`.zip` auf den Root deiner SD Karte
  3. Lege deine SD Karte wieder in deinen 3DS ein
  4. Put `Decrypt9.nds` from the Decrypt9 `.zip` on your DS flashcard
  5. Start your DS flashcard from your 3DS
  6. Boot `Decrypt9.nds` using your flashcart
  7. Select the correct option for your system version 
    * 4.X.X -> "4.x Decrypt9WIP"
    * 6.X.X -> "6.x Decrypt9WIP"
  8. Reboot the system, then go to System Settings, then "Other Settings", then "Profile", then "Nintendo DS Profile"
  9. If the exploit was successful, you will have booted into Decrypt9

Continue to [2.1.0 ctrtransfer](2.1.0-ctrtransfer). {: .notice--primary}