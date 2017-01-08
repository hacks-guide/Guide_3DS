* * *

title: "Decrypt9 (Browser)" permalink: /decrypt9-(browser).html lang: en_US ref: decrypt9-(browser)

* * *

O primeiro passo deste guia é conseguir pô-lo a correr o Decrypt9, que é uma ferramenta multifunções que nos permitirá instalar a versão 2.1.0, que contêm uma vulnerabilidade que é necessária para explorar mais o sistema. {: .notice}

Se já tiver hackeado a sua 3DS antes e tiver um sistema de CFW EmuNAND, este guia lida exclusivamente com a SysNAND, e todas as intruções que seguir terão de ser feitas ou aplicadas na SysNAND. Note que os termos EmuNAND e RedNAND referem-se a implementações ligeiramente diferentes [do mesmo conceito](http://3dbrew.org/wiki/NAND_Redirection). {: .notice--info}

#### O que precisa

* A última versão do [Decrypt9WIP](https://github.com/d0k3/Decrypt9WIP/releases/)

#### Instruções

  1. Crie uma pasta com o nome `files9` na raíz do seu cartão SD, se ainda não existir
  2. Copy `Launcher.dat` and `Decrypt9WIP.dat` from the Decrypt9WIP `.zip` to the root of your SD card
  3. Reinsert your SD card into your 3DS
  4. Open the browser and go to one of the following URLs on your 3DS 
    * `https://dukesrg.github.io/?Decrypt9WIP.dat`
    * `http://go.gateway-3ds.com/`
    * `http://www.reboot.ms/3ds/load.html?Launcher.dat`
    * `http://dukesrg.dynu.net/3ds/rop?GW17567.dat&Launcher.dat`
    * Make sure to try each URL if the first one doesn't work (some versions cannot use the first one, and some versions cannot use the last three)
    * If you get an error, [follow this troubleshooting guide](troubleshooting#ts_browser)
  5. If the exploit was successful, you will have booted into Decrypt9

Continue to [2.1.0 ctrtransfer](2.1.0-ctrtransfer). {: .notice--primary}