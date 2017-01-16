* * *

title: "Decrypt9 (MSET)" permalink: /decrypt9-(mset).html lang: en_US ref: decrypt9-(mset)

* * *

Das erste was dieser Guide machen wird ist Decrypt9 zum laufen zu bringen. Decrypt9 ist ein multifunktionelles Werkzeug, welches uns erlauben wird die Version 2.1.0 zu installieren. Diese Version enthält die Schwachstelle, welche benötigt wird um die weiteren Exploits des Systems zu benutzen. {: .notice}

Falls du deinen 3DS bereits gehackt hast und du ein EmuNAND basiertes CFW Setup hast, handelt diese Anleitung exklusiv von dem SysNAND und du solltest all Anweisungen, von innerhalb des SysNAND oder auf das SysNAND anwendend, folge leisten. Beachte, dass es sich bei den Begriffen EmuNAND und RedNAND um leicht verschiedene Implementationen des [selben Konzepts](http://3dbrew.org/wiki/NAND_Redirection) handelt. {: .notice--info}

#### Was du brauchst

* DS Flashcard, welche auf deiner 3DS Version funktioniert
* Die neueste Version von [Decrypt9WIP](https://github.com/d0k3/Decrypt9WIP/releases/)

#### Anleitung

  1. Erstelle einen `files9` Ordner auf dem Root deiner SD Karte falls dieser noch nicht existiert
  2. Kopiere `Launcher.dat` und `Decrypt9WIP.dat` aus der Decrypt9`.zip` auf den Root deiner SD Karte
  3. Lege deine SD Karte wieder in deinen 3DS ein
  4. Kopiere `Decrypt9.nds` aus der Decrypt9`.zip` auf deine DS Flashcard
  5. Starte deine DS Flashcard auf deinem 3DS
  6. Starte `Decrypt9.nds` mit deiner Flashcard
  7. Wähle die korrekte Option für deine Systemversion 
    * 4.X.X -> "4.x Decrypt9WIP"
    * 6.X.X -> "6.x Decrypt9WIP"
  8. Starte das System neu, gehe dann zu Systemeinstellungen, dann zu "Other Settings", dann "Profile", dann "Nintendo DS Profile"
  9. Falls der Exploit erfolgreich war, wirst du in Decrypt9 gestartet haben

Fortfahren mit [2.1.0 ctrtransfer](2.1.0-ctrtransfer).