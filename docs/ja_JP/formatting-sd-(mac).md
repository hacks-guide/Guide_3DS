# Formatting SD (Mac)

## Required Reading

これは3DSで機能するようにSDカードをフォーマットするものです。

3DSがすでにSDカードを認識している場合は、この操作は必要ありません。

このページはMacユーザー向けです。 Macをお使いでない場合は、[Formatting-sd-(windows)](formatting-sd-\(windows\)) または [Formatting-sd-(Linux)](formatting-sd-\(linux\)) のページをご覧ください。

## Instructions

### OS X El Capitan (10.11) and later

1. パソコンにSDカードを入れます

2. SDカードにファイルとフォルダがある場合は、コンピュータ上のフォルダにすべてをコピーしてください

3. ディスクユーティリティアプリを実行します

4. 左上の「表示」メニューで「すべてのデバイスを表示」を選択します

5. 左側のパネルでSDカードを選択してください

    ::: danger

    誤って間違ったドライブを消去する可能性があります。正しいデバイスを選択してください。

    :::

6. 上部の「消去」をクリックします

7. 名前を入力してください

8. 「フォーマット」が「MS-DOS (FAT)」に設定されていることを確認してください

9. Ensure that "Scheme" is set to "Master Boot Record"
    - If "Scheme" does not appear, click "Cancel" and make sure to choose the device instead of a volume

10. 「消去」をクリックします

11. フォーマットが完了するのを待ちます

12. 「閉じる」をクリックします

13. フォーマット前に、SDカードにファイルとフォルダがあった場合は、コンピュータからすべてをコピーして戻して下さい。

### OS X Yosemite (10.10) and earlier

1. パソコンにSDカードを入れます

2. SDカードにファイルとフォルダがある場合は、コンピュータ上のフォルダにすべてをコピーしてください

3. ディスクユーティリティアプリを実行します

4. 左側のパネルでSDカードを選択してください

    ::: danger

    誤って間違ったドライブを消去する可能性があります。正しいデバイスを選択してください。

    :::

5. 上部の「パーティション」をクリックします
    - If "Partition" does not appear, make sure to choose the device instead of a volume

6. 「パーティションレイアウト」が「1 パーティション」に設定されていることを確認します。

7. 名前を入力してください

8. 「フォーマット」が「MS-DOS (FAT)」に設定されていることを確認してください

9. パーティションテーブルの下にある「オプション」をクリックします

10. "マスターブートレコード"を選択

11. OK をクリックします

12. 「適用」をクリックします。

13. パーティションをクリックします。

14. フォーマットが完了するのを待ちます

15. ディスクユーティリティを閉じます

16. フォーマット前に、SDカードにファイルとフォルダがあった場合は、コンピュータからすべてをコピーして戻して下さい。

## トラブルシューティング

- SD card remains undetected by console or continues to display the wrong capacity after formatting
    - Your SD card may be partitioned or have unallocated space. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Mac) to reformat your SD card.