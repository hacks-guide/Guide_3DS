* * *

title: "Decrypt9 (Homebrew Launcher)" permalink: /decrypt9-(homebrew-launcher).html lang: en_US ref: decrypt9-(homebrew-launcher)

* * *

現在、safehaxにバグが存在するため、3DSにカートリッジ (3DSゲーム、NDSゲーム、flashcartなど) が挿入されていないと動作しません。 が挿入されていないと動作しません。一時的な回避策として、バージョン9.2.0以下3DSでは、`Decrypt9WIP.3dsx`を`/3ds/`にコピーして、HBLからDecrypt9を直接実行することもできます。 {: .notice--info}

#### 必要なもの

* 最新リリース版の[Decrypt9WIP](https://github.com/d0k3/Decrypt9WIP/releases/latest/)
* 最新フォークの[safehax+fasthax](https://gbatemp.net/attachments/safehax-fasthax-cb6a1bc-zip.73592/)

#### 手順

  1. SDカード直下に `files9` フォルダが存在しない場合は作成
  2. safehax+fasthax`.zip`の中身をSDカード直下にコピー。統合・上書きしてOK
  3. Copy `Decrypt9WIP.bin` from the Decrypt9WIP `.zip` to the root of your SD card and rename `Decrypt9WIP.bin` to `arm9.bin`
  4. Reinsert your SD card into your 3DS
  5. Enter the homebrew launcher
  6. Launch safehax
  7. If the exploit was successful, you will have booted into Decrypt9

Continue to [2.1.0 ctrtransfer](2.1.0-ctrtransfer)  
{: .notice--primary}