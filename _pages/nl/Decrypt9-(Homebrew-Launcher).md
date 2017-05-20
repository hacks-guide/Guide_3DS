* * *

title: "Decrypt9 (Homebrew Launcher)" permalink: /decrypt9-(homebrew-launcher).html ref: decrypt9-(homebrew-launcher)

* * *

Due to a bug, safehax currently requires a functioning cartridge of some kind (3ds, nds, flashcart, etc) to be inserted in order to complete successfully. As a temporary workaround, users less than or equal to 9.2.0 who do not own any cartridges can copy `Decrypt9WIP.3dsx` to `/3ds/` and run it directly without any hax. {: .notice--info}

#### What you need

* The latest release of [Decrypt9WIP](https://github.com/d0k3/Decrypt9WIP/releases/latest/)
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