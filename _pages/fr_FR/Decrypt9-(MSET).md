* * *

title: "Decrypt9 (MSET)" permalink: /decrypt9-(mset).html lang: en_US ref: decrypt9-(mset)

* * *

La première chose que ce guide va faire est de vous obtenez l''exécution Decrypt9, qui est un outil qui nous permettra d'installer la version 2.1.0, qui contient une vulnérabilité qui est nécessaire pour poursuivre l'exploitation du système. {: .notice}

Si vous avez déjà une installation RedNAND, ce guide concerne exclusivement SysNAND et vous devez suivre toutes les instructions dans SysNAND ou par rapport à SysNAND. Notez que les termes EmuNAND et RedNAND font référence à des implémentations légèrement différentes [du même concept](http://3dbrew.org/wiki/NAND_Redirection). {: .notice--info}

#### Ce dont vous aurez besoin

* Un linker DS fonctionnant sur votre version 3DS
* La dernière version de [Decrypt9WIP](https://github.com/d0k3/Decrypt9WIP/releases/)

#### Instructions

  1. Create a folder named `files9` on the root of your SD card if it does not already exist
  2. Copy `Launcher.dat` and `Decrypt9WIP.dat` from the Decrypt9WIP `.zip` to the root of your SD card
  3. Reinsert your SD card into your 3DS
  4. Put `Decrypt9.nds` from the Decrypt9 `.zip` on your DS flashcard
  5. Start your DS flashcard from your 3DS
  6. Boot `Decrypt9.nds` using your flashcart
  7. Select the correct option for your system version 
    * 4.X.X -> "4.x Decrypt9WIP"
    * 6.X.X -> "6.x Decrypt9WIP"
  8. Reboot the system, then go to System Settings, then "Other Settings", then "Profile", then "Nintendo DS Profile"
  9. If the exploit was successful, you will have booted into Decrypt9

Continue to [2.1.0 ctrtransfer](2.1.0-ctrtransfer). {: .notice--primary}