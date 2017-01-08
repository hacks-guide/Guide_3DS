* * *

title: "Decrypt9 (Homebrew Launcher)" permalink: /decrypt9-(homebrew-launcher).html lang: en_US ref: decrypt9-(homebrew-launcher)

* * *

Neste momento, por causa de um bug, para o safehax funcionar completamente, é necessário que tenha um cartucho inserido de qualquer tipo (3ds, nds, flashcart, etc). Como solução temporária, os utilizadores que se encontrem numa versão igual ou inferior a 9.2.0 e que não possuem quaisquer cartões de jogo podem copiar o ficheiro `Decrypt9WIP.3dsx` para a pasta `/3ds/` no cartão SD e corrê-lo diretamente sem usar nenhum hax. {: .notice--info}

#### O que precisa

* A última versão do [Decrypt9WIP](https://github.com/d0k3/Decrypt9WIP/releases/latest/)
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