# Formatting SD (Windows)

## Required Reading

これは3DSで機能するようにSDカードをフォーマットするものです。

3DSがすでにSDカードを認識している場合は、この操作は必要ありません。

このページはWindowsユーザー向けです。 Windowsをお使いでない場合、[SDカードをフォーマット (Linux)](formatting-sd-\(linux\)) または [SDカードをフォーマット (Mac)](formatting-sd-\(mac\)) をご覧ください。

## What You Need

- **For all SD card sizes**: The latest version of [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
- **For SD cards 64GB or larger only:** The latest version of [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm)

## Instructions

### Section I - SD Card Formatter

1. パソコンにSDカードを入れます

2. SDカードにファイルとフォルダがある場合は、コンピュータ上のフォルダにすべてをコピーしてください

3. Run `SD Card Formatter Setup` (the `.exe` file) in the downloaded `.zip` file with Administrator privileges, then install the program

4. Run `SD Card Formatter` from the Start Menu

5. Select your SD card's drive letter for "Select card"

    ::: danger

    ドライブレターが正しく選択されていることを確認しましょう。正しく選択されていないと、違ったドライブを消してしまう可能性があります。

    :::

6. 「ボリュームラベル」は何でも構いません。

7. 「クイックフォーマット」が選択されていることを確認して下さい。

8. Click "Format"

9. OK をクリックします

10. フォーマットが完了するのを待ちます

11. OK をクリックします

12. Close SD Card Formatter

13. If the SD card is 32GB or smaller and had any files and folders on it before the format, copy everything back from your computer

::: info

You're done formatting your SD card if it's **32GB or smaller.**

:::

### Section II - guiformat (ONLY for 64GB or larger)

1. Run `guiformat.exe`

2. Select your SD card's drive letter for "Drive"

    ::: danger

    ドライブレターが正しく選択されていることを確認しましょう。正しく選択されていないと、違ったドライブを消してしまう可能性があります。

    :::

3. Select a size for "Allocation unit size"
    - If the SD card is 64GB, choose 32768
    - If the SD card is larger than 64GB, choose 65536

4. 「ボリュームラベル」は何でも構いません。

5. 「クイックフォーマット」が選択されていることを確認して下さい。

6. Click "Start"

7. OK をクリックします

8. フォーマットが完了するのを待ちます

9. 「閉じる」をクリックします

10. フォーマット前に、SDカードにファイルとフォルダがあった場合は、コンピュータからすべてをコピーして戻して下さい。

## トラブルシューティング

- guiformat shows the error "Failed to open device: GetLastError()=32"
    - Close everything that may be using the SD card, such as any File Explorer windows.
    - If this issue persists, try reformatting the card to NTFS in File Explorer, close that window when it's done, and re-attempt the guiformat process.

- guiformat shows the error "GetLastError()=1117"
    - Your SD card write-protection switch may be [enabled](/images/sdlock.png). The lock must be flipped upwards to allow writing to the SD card (including formatting).

- SD card remains undetected by console or continues to display the wrong capacity after formatting
    - Your SD card may be partitioned or have unallocated space. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Windows) to reformat your SD card.
