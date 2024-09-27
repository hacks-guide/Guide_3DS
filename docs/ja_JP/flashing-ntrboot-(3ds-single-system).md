# Flashing ntrboot (3DS Single System)

## Required Reading

この後を読む前に、[ntrboot](ntrboot) の情報を全て読んだことを確認してください。

この方法は、改造されていない3DSと対応しているフラッシュカード以外の必要の物は必要ありません。 この方法は、フラッシュカードを使い、ntrbootフラッシャーが入っている`.nds`ファイルを実行します。 このことは、`.nds`を3DSで実行するのにフラッシュカードが対応していることが必要です。 [ntrboot](ntrboot) にあるフラッシュカードの対応表を見てください。

::: danger

稀ですが、フェイクのフラッシュカードを**文鎮化**する可能性があります。 This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher_nds](https://github.com/jason0597/ntrboot_flasher_nds/releases/latest) (`ntrboot_flasher_nds.nds`)

## Instructions

### Section I - Prep Work

1. Power off your console
2. SDカードをPCに挿入します。
3. `ntrboot` というフォルダをSDカードの直下に作成します
4. `boot9strap_ntr.firm`をboot9strap　ntr `.zip`からフラッシュカードのSDカードの`/ntrboot/`フォルダにコピーします
5. `ntrboot_flasher_nds.nds`をフラッシュカードのSDカードの直下にコピーします
6. SDカードをフラッシュカードに挿入します。
7. Insert your ntrboot compatible DS / DSi flashcart into your console

### Section II - Flashing ntrboot

1. Launch `ntrboot_flasher_nds.nds` on your console using your flashcart
2. (A) で続行します
3. (Up) と (Down) を使ってフラッシュカードを選択します
4. (A) で続行します
5. フラッシュカードのメモリをバックアップするために「Dump flash」を選択してください
6. キーコンボを入力して確認してください
7. (A) で続行します
8. (Up) と (Down) を使ってフラッシュカードを選択します
9. (A) で続行します
10. フラッシュカードにboot9strapをインストールするために、"Inject FIRM"を選択してください
11. キーコンボを入力して確認してください
12. (A) で続行します
13. Power off your console

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
