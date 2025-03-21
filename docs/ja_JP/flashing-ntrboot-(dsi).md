# Flashing ntrboot (DSi)

## Required Reading

この後を読む前に、[ntrboot](ntrboot) の情報を全て読んだことを確認してください。

この方法では、フラッシュカードと互換性のあるNintendoDSiにアクセスする必要があります。 この方法は、フラッシュカードを使い、ntrbootフラッシャーが入っている`.nds`ファイルをDSiにて実行します。 このことは、`.nds`をDSiで実行するのにフラッシュカードが対応していることが必要です。 [ntrboot](ntrboot) にあるフラッシュカードの対応表を見てください。

::: danger

稀ですが、フェイクのフラッシュカードを**文鎮化**する可能性があります。 This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two consoles
    - **The source DSi**: the Nintendo DSi which is compatible with your flashcart
    - **The target 3DS**: the 3DS family console on stock firmware
- The latest release of [ds_ntrboot_flasher](https://github.com/ntrteam/ds_ntrboot_flasher/releases/latest) (`ds_ntrboot_flasher_dsi.nds`)

## Instructions

### Section I - Prep Work

1. **ソースとなるDSi**の電源を切ります
2. SDカードをPCに挿入します。
3. `ds_ntrboot_flasher_dsi.nds`をフラッシュカードのSDカードへコピーします。
4. SDカードをフラッシュカードに挿入します。
5. Ntrboot互換のDS / DSiフラッシュカードを **ソースとなるDSi**へ挿入します

### Section II - Flashing ntrboot

1. `ds_ntrboot_flasher_dsi.nds` を**ソースとなるDSi** でフラッシュカードを使って起動します
2. (A) で続行します
3. (Up) と (Down) を使ってフラッシュカードを選択します
4. (A) で続行します
5. "inject ntrboothax"を (A) で選択します
6. "RETAIL"を (A) で選択します
7. (A) で続行します
8. "EXIT"を選択します。

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
