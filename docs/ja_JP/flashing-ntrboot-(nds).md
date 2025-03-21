# Flashing ntrboot (NDS)

## Required Reading

この後を読む前に、[ntrboot](ntrboot) の情報を全て読んだことを確認してください。

この方法では、フラッシュカードと互換性のあるNintendoDSもしくはNintendoDS Liteにアクセスする必要があります。 この方法は、フラッシュカードを使い、ntrbootフラッシャーが入っている`.nds`ファイルをNDSにて実行します。

::: danger

稀ですが、フェイクのフラッシュカードを**文鎮化**する可能性があります。 This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two consoles
    - **The source NDS / NDSL**: the Nintendo DS or Nintendo DS Lite which is compatible with your flashcart
    - **The target 3DS**: the 3DS family console on stock firmware
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher_nds](https://github.com/jason0597/ntrboot_flasher_nds/releases/latest) (`ntrboot_flasher_nds.nds`)

## Instructions

### Section I - Prep Work

1. **ソースとなるNDS / NDSL**の電源を切ります
2. SDカードをPCに挿入します。
3. `ntrboot` というフォルダをSDカードの直下に作成します
4. `boot9strap_ntr.firm`をboot9strap　ntr `.zip`からフラッシュカードのSDカードの`/ntrboot/`フォルダにコピーします
5. `ntrboot_flasher_nds.nds`をフラッシュカードのSDカードの直下にコピーします
6. SDカードをフラッシュカードに挿入します。
7. Ntrboot互換のDS / DSiフラッシュカードを **ソースとなるNDS / NDSL**へ挿入します

### Section II - Flashing ntrboot

1. `ntrboot_flasher_nds.nds`を**ソースとなるNDS / NDSL**でフラッシュカードを使って起動します
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
13. **ソースとなるNDS / NDSL**の電源を切ります
14. **ソースとなるNDS / NDSL** からフラッシュカードを抜きます

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
