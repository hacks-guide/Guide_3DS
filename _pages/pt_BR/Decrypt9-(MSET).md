* * *

title: "Decrypt9 (MSET)" permalink: /decrypt9-(mset).html lang: en_US ref: decrypt9-(mset)

* * *

O primeiro passo deste guia é conseguir pô-lo a correr o Decrypt9, que é uma ferramenta multifunções que nos permitirá instalar a versão 2.1.0, que contêm uma vulnerabilidade que é necessária para explorar mais o sistema. {: .notice}

Se já tiver hackeado a sua 3DS antes e tiver um sistema de CFW EmuNAND, este guia lida exclusivamente com a SysNAND, e todas as intruções que seguir terão de ser feitas ou aplicadas na SysNAND. Note que os termos EmuNAND e RedNAND referem-se a implementações ligeiramente diferentes [do mesmo conceito](http://3dbrew.org/wiki/NAND_Redirection). {: .notice--info}

#### O que precisa

* Um flashcard DS que funcione na versão da sua 3DS
* A última versão do [Decrypt9WIP](https://github.com/d0k3/Decrypt9WIP/releases/)

#### Instruções

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