---
title: "ntrbootのフラッシュ (3DSシングルシステム)"
---

{% include toc title="目次" %}

### 必読事項

この後を読む前に、[ntrboot](ntrboot) の情報を全て読んだことを確認してください。

この方法は、改造されていない3DSと対応しているフラッシュカード以外の必要の物は必要ありません。 この方法は、フラッシュカードを使い、ntrbootフラッシャーが入っている`.nds`ファイルを実行します。 このことは、`.nds`を3DSで実行するのにフラッシュカードが対応していることが必要です。 [ntrboot](ntrboot) にあるフラッシュカードの対応表を見てください。

稀ですが、フェイクのフラッシュカードを**文鎮化**する可能性があります。 This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).
{: .notice--danger}

### 必要なもの

* ntrbootと互換性のあるフラッシュカード
* The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
* The latest release of [ntrboot_flasher_nds](https://github.com/jason0597/ntrboot_flasher_nds/releases/latest) (`ntrboot_flasher_nds.nds`)

### 手順

#### セクション I - 準備

1. Power off your console
1. SDカードをPCに挿入します。
1. `ntrboot` というフォルダをSDカードの直下に作成します
1. `boot9strap_ntr.firm`をboot9strap　ntr `.zip`からフラッシュカードのSDカードの`/ntrboot/`フォルダにコピーします
1. `ntrboot_flasher_nds.nds`をフラッシュカードのSDカードの直下にコピーします
1. SDカードをフラッシュカードに挿入します。
1. Insert your ntrboot compatible DS / DSi flashcart into your console

#### セクション II - ntrbootの書き込み

1. Launch `ntrboot_flasher_nds.nds` on your console using your flashcart
1. (A) ボタンで続行します
1. (Up) と (Down) を使ってフラッシュカードを選択します
1. (A) で続行します
1. フラッシュカードのメモリをバックアップするために「Dump flash」を選択してください
1. キーコンボを入力して確認してください
1. (A) で続行します
1. (Up) と (Down) を使ってフラッシュカードを選択します
1. (A) で続行します
1. フラッシュカードにboot9strapをインストールするために、"Inject FIRM"を選択してください
1. キーコンボを入力して確認してください
1. (A) で続行します
1. Power off your console

___

### 引き続き [boot9strapをインストール (ntrboot)](installing-boot9strap-(ntrboot)) に進んでください。
{: .notice--primary}
