* * *

title: "Decrypt9 (Browser)" permalink: /decrypt9-(browser).html lang: en_US ref: decrypt9-(browser)

* * *

Das Ziel dieses Guides ist es, Decrypt9 zu starten. Decrypt9 ist ein Multifunktionstool welches es erlaubt die Firmwareversion 2.1.0 zu installieren. In dieser existiert eine Vulnerabilität (Schwachstelle) die für die weiteren Exploits ausgenutzt wird. {: .notice}

Falls du deine Konsole bereits gehackt hast und bisher einen CFW verwendet hast, die auf einem EmuNAND basiert, bedenke: Dieser Guide ist für den SysNAND verfasst und sämtliche Schritte müssen vom SysNAND bzw. am SysNAND ausgeführt werden. Hinweis: Die Begriffe EmuNAND und RedNAND (REDirectedNAND =umgeleiteter NAND) verweisen auf einander ähnliche Ausführungen [ desselben Konzepts ](http://3dbrew.org/wiki/NAND_Redirection). {: .notice--info}

#### Was du benötigst

* Die aktuellste Version von [Decrypt9WIP](https://github.com/d0k3/Decrypt9WIP/releases/)

#### Arbeitsschritte

  1. Create a folder named `files9` on the root of your SD card if it does not already exist
  2. Kopiere die Datei `Launcher.dat` und `Decrypt9WIP.dat` aus der Decrypt9WIP `.zip` in das Rootverzeichnis deiner SD Karte
  3. Reinsert your SD card into your 3DS
  4. Open the browser and go to one of the following URLs on your 3DS 
    * `https://dukesrg.github.io/?Decrypt9WIP.dat`
    * `http://go.gateway-3ds.com/`
    * `http://www.reboot.ms/3ds/load.html?Launcher.dat`
    * `http://dukesrg.dynu.net/3ds/rop?GW17567.dat&Launcher.dat`
    * Make sure to try each URL if the first one doesn't work (some versions cannot use the first one, and some versions cannot use the last three)
    * If you get an error, [follow this troubleshooting guide](troubleshooting#ts_browser)
  5. If the exploit was successful, you will have booted into Decrypt9

Weiter zu [2.1.0 ctrtransfer](2.1.0-ctrtransfer) {: .notice--primary}