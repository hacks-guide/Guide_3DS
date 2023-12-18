---
title: "SDカードをフォーマット (Windows)"
---

{% include toc title="目次" %}

### 必ずお読みください

これは3DSで機能するようにSDカードをフォーマットするものです。

3DSがすでにSDカードを認識している場合は、この操作は必要ありません。

このページはWindowsユーザー向けです。 Windowsをお使いでない場合、[SDカードをフォーマット (Linux)](formatting-sd-(linux)) または [SDカードをフォーマット (Mac)](formatting-sd-(mac)) をご覧ください。

### 必要なもの

* **For SD cards 32GB or smaller:** the latest version of [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
* **For SD cards 64GB or larger:** The latest version of [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm)

### Instructions (32GB or smaller)

1. パソコンにSDカードを入れます
1. SDカードにファイルとフォルダがある場合は、コンピュータ上のフォルダにすべてをコピーしてください
1. Run `SD Card Formatter Setup` (the `.exe` file) in the downloaded `.zip` file with Administrator privileges, then install the program
1. Run `SD Card Formatter` from the Start Menu
1. Select your SD card's drive letter for "Select card"

    ドライブレターが正しく選択されていることを確認しましょう。正しく選択されていないと、違ったドライブを消してしまう可能性があります。
    {: .notice--danger}

1. 「ボリュームラベル」は何でも構いません。
1. 「クイックフォーマット」が選択されていることを確認して下さい。
1. Click "Format"
1. OK をクリックします
1. フォーマットが完了するのを待ちます
1. OK をクリックします
1. Close SD Card Formatter
1. フォーマット前に、SDカードにファイルとフォルダがあった場合は、コンピュータからすべてをコピーして戻して下さい。

### Instructions (64GB or larger)

1. パソコンにSDカードを入れます
1. SDカードにファイルとフォルダがある場合は、コンピュータ上のフォルダにすべてをコピーしてください
1. `guiformat.exe`を実行します
1. SDカードのドライブレターは「ドライブ」で選択して下さい。

    ドライブレターが正しく選択されていることを確認しましょう。正しく選択されていないと、違ったドライブを消してしまう可能性があります。
    {: .notice--danger}

1. サイズは「アロケーションユニットサイズ」で選択して下さい。
    + If the SD card is 64GB, choose 32768
    + If the SD card is larger than 64GB, choose 65536
1. 「ボリュームラベル」は何でも構いません。
1. 「クイックフォーマット」が選択されていることを確認して下さい。
1. 「開始」をクリックします
1. OK をクリックします
1. フォーマットが完了するのを待ちます
1. 「閉じる」をクリックします
1. フォーマット前に、SDカードにファイルとフォルダがあった場合は、コンピュータからすべてをコピーして戻して下さい。

### Troubleshooting

* guiformat shows the error "Failed to open device: GetLastError()=32"
    + ファイルエクスプローラウィンドウなど、SDカードを使用している可能性のあるものをすべて閉じましょう。
    + If this issue persists, try reformatting the card to NTFS in File Explorer, close that window when it's done, and re-attempt the guiformat process.

* guiformat shows the error "GetLastError()=1117"
    + Your SD card write-protection switch may be [enabled](/images/sdlock.png). The lock must be flipped upwards to allow writing to the SD card (including formatting).

* SD card remains undetected by console or continues to display the wrong capacity after formatting
    + Your SD card may be partitioned or have unallocated space. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Windows) to reformat your SD card.
