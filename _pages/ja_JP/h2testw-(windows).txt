---
title: "H2testw (Windows)"
---

{% include toc title="目次" %}

### 必読事項

このアドオンセクションは、h2testwを使用してSDカードのエラーをチェックするための手順です。

SDカードのサイズとコンピュータのパフォーマンスによって、かかる時間は異なり、数時間もかかる場合があります！

このページはWindowsユーザー向けです。 If you are not on windows, check out the [F3 (Linux)](f3-(linux)) or [F3XSwift (Mac)](f3xswift-(mac)) pages.

### 必要なもの

* The latest version of [h2testw](https://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip)

### 手順

1. h2testw `.zip`から`h2testw.exe`をデスクトップにコピーします
1. パソコンにSDカードを入れます
1. `h2testw.exe` を実行します
1. 「English」を選択します
1. 「Select target」をクリックします
1. SDカードのディスク文字を選択します
1. 「all available space」を選択したことを確認します
1. 「Write + Verify」をクリックします
1. 処理が完了するまで待ちます

___

If the test shows the result `Test finished without errors`, your SD card is good and you can delete all `.h2w` files on your SD card.
{: .notice--success}

結果はそうでなければ、SDカードは壊れた恐れがありますので、新しいSDカードに切り替えることをご検討ください！
{: .notice--danger}

### [はじめに](get-started) に戻る
{: .notice--primary}
