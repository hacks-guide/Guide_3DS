# Flashing ntrboot (3DS Multi System)

## Required Reading

Before proceeding, ensure you have read all of the information on [ntrboot](ntrboot).

This method requires temporary access to a second 3DS family console that is already running boot9strap. フラッシュカードが3DSのいずれかのバージョンをサポートする必要はありません。

::: danger

稀ですが、フェイクのフラッシュカードを**文鎮化**する可能性があります。 This is unlikely, but nevertheless, only original listed flashcarts are supported. To reduce the chance of receiving a counterfeit card, it is recommended that you use a reputable site to buy your flashcart (such as [NDS Card](https://www.nds-card.com/)).

:::

## What You Need

- Your ntrboot compatible flashcart
- Two 3DS family consoles
    - **The source 3DS**: the 3DS family console that is already running boot9strap
    - **The target 3DS**: the 3DS family console on stock firmware
- The v1.3 release of [boot9strap-ntr](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-ntr.zip) (direct download)
- The latest release of [ntrboot_flasher](https://github.com/ntrteam/ntrboot_flasher/releases/latest) (`ntrboot_flasher.firm`)

## Instructions

### Section I - Prep Work

1. **ソース3DS**の電源を切ります
2. **ソース3DS**のSDカードをパソコンに入れます
3. `ntrboot` というフォルダをSDカードのルートに作成します
4. `boot9strap_ntr.firm` と `boot9strap_ntr.firm.sha` をboot9strap ntr `.zip` から解凍し、SD カードの`/ntrboot/`フォルダにコピーします。
5. `ntrboot_flasher.firm` を **ソースとなる3DS**のSDカードの `/luma/payloads` フォルダへコピーします
6. **ソースとなる3DS**のSDカードを本体へ挿入します
7. Ntrboot互換のDS / DSiフラッシュカードを **ソースとなる3DS**へ挿入します

### Section II - Flashing ntrboot

1. (Start) を押しながら起動し **ソースとなる3DS**のLuma3DSチェーンローダを起動します。
2. "ntrboot_flasher" を選択します
3. 赤い画面の警告を読んでください
4. (A) で続行します
5. フラッシュカードを選択します
    - If you do not see your flashcart in the list at the top, read the bottom screen for more info on each option
6. "Dump Flash" を選択します
7. 処理が完了するまで待ちます
8. (A) で続行します
9. (A) を押してメインメニューに戻ります
10. "Inject Ntrboot" を選択します
11. (A) を押します
12. 処理が完了するまで待ちます
13. (A) を押してメインメニューに戻ります
14. (B) を押し、**ソースとなる3DS**の電源を切ります

___

::: tip

Continue to [Installing boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\))

:::
