* * *

title: "Decrypt9 (Browser)" permalink: /decrypt9-(browser).html lang: en_US ref: decrypt9-(browser)

* * *

Das Ziel dieses Guides ist es, Decrypt9 zu starten. Decrypt9 ist ein Multifunktionstool welches es erlaubt die Firmwareversion 2.1.0 zu installieren. In dieser existiert eine Vulnerabilität (Schwachstelle) die für die weiteren Exploits ausgenutzt wird. {: .notice}

Falls du deine Konsole bereits gehackt hast und bisher einen CFW verwendet hast, die auf einem EmuNAND basiert, bedenke: Dieser Guide ist für den SysNAND verfasst und sämtliche Schritte müssen vom SysNAND bzw. am SysNAND ausgeführt werden. Hinweis: Die Begriffe EmuNAND und RedNAND (REDirectedNAND =umgeleiteter NAND) verweisen auf einander ähnliche Ausführungen [ desselben Konzepts ](http://3dbrew.org/wiki/NAND_Redirection). {: .notice--info}

#### Was du benötigst

* Die aktuellste Version von [Decrypt9WIP](https://github.com/d0k3/Decrypt9WIP/releases/)

#### Arbeitsschritte

  1. Erstelle einen `files9` Ordner auf dem Root deiner SD Karte falls dieser noch nicht existiert
  2. Kopiere die Datei `Launcher.dat` und `Decrypt9WIP.dat` aus der Decrypt9WIP `.zip` in das Rootverzeichnis deiner SD Karte
  3. Lege die SD Karte wieder in deinen 3DS ein
  4. Öffne deinen Internetbrowser auf dem 3DS und öffne eine der folgenden Seiten: 
    * `https://dukesrg.github.io/?Decrypt9WIP.dat`
    * `http://go.gateway-3ds.com/`
    * `http://www.reboot.ms/3ds/load.html?Launcher.dat`
    * `http://dukesrg.dynu.net/3ds/rop?GW17567.dat&Launcher.dat`
    * Stelle sicher, dass du jede URL probierst falls die erste nicht funktioniert (manche Versionen können die erste nicht benutzen und manche Versionen können die letzten drei nicht benutzen)
    * Falls du eine Fehlermeldung bekommst, [folge dieser Anleitung zur Fehlerbehebung](troubleshooting#ts_browser)
  5. Wenn alles funktioniert hat, wirst du dich nun in Decrypt9 befinden.

Weiter zu [2.1.0 ctrtransfer](2.1.0-ctrtransfer) {: .notice--primary}