* * *

title: "Decrypt9 (Homebrew Launcher)" permalink: /decrypt9-(homebrew-launcher).html lang: en_US ref: decrypt9-(homebrew-launcher)

* * *

Aufgrund eines Fehlers benötigt Safehax aktuell ein funktiorendes Spielemodul (3DS, NDS, Flashcar, etc.), welches sich im 3DS befinden muss, um erfolgreich fortzufahren. Leute, mit einer Systemversion gleich oder kleiner 9.2.0, welche keine Spielemodule besitzen, können provisorisch `Decrypt9WIP.3dsx` zu `/3ds/` kopieren und es direkt ohne hax starten. {: .notice--info}

#### Was du benötigst:

* Die letzte Version von [Decrypt9WIP](https://github.com/d0k3/Decrypt9WIP/releases/latest/)
* The latest fork of [safehax+fasthax](https://gbatemp.net/attachments/safehax-fasthax-cb6a1bc-zip.73592/)

#### Instructions

  1. Create a folder named `files9` on the root of your SD card if it does not already exist
  2. Copy and merge the contents of the safehax+fasthax `.zip` to root of your SD card, overwrite existing files
  3. Copy `Decrypt9WIP.bin` from the Decrypt9WIP `.zip` to the root of your SD card and rename `Decrypt9WIP.bin` to `arm9.bin`
  4. Reinsert your SD card into your 3DS
  5. Enter the homebrew launcher
  6. Launch safehax
  7. If the exploit was successful, you will have booted into Decrypt9

Continue to [2.1.0 ctrtransfer](2.1.0-ctrtransfer)  
{: .notice--primary}