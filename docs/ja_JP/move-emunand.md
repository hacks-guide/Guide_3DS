# Move EmuNAND

## Required Reading

このエクストラセクションでは、どうやって古いEmuNANDのコンテンツを新しいSysNAND CFWに移動し、古いEmuNANDパーティションを削除するか紹介します。 EmuNANDとRedNANDは[同じ理論](http://3dbrew.org/wiki/NAND_Redirection)の少々違う実装です。

SDカードの/luma/payloadsフォルダに
godmode9.firm以外のpayloadファイルがある場合、(START)を押しながら起動すると、「chainloaderメニュー」が表示されます。
(十字キー)で「GodMode9」を選択して(Aボタン)を押してください。

::: danger

これを使用するには、Luma3DSとboot9strapをインストールしている必要があります。

:::

## What You Need

- An existing EmuNAND
- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

## Instructions

### Section I - Prep Work

1. Power off your console
2. パソコンにSDカードを入れます
3. `GodMode9.firm` を GodMode9の `.zip` から取り出し、SDカードの `/luma/payloads/` フォルダにコピーします。
4. `gm9`フォルダをGodMode9`.zip`からSDカードのルートにコピーします。
5. Reinsert your SD card into your console

### Section II - Backup SysNAND DSiWare Saves

::: info

重要なDSiWareゲームやセーブを持っていない場合、このセクションを読み飛ばしてもいいです。

:::

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. If you are prompted to create an essential files backup, press (A) to do so, then press (A) to continue once it is completed
3. RTC日付/時刻を修正するには、(A) ボタンを押し、日付や時刻を設定してください。終わったら、(A) を押して続けてください。
   - Note that, if you had to fix the RTC date and time, you will have to fix the time in the System Settings as well after this guide
4. `[2:] SYSNAND TWLN` -> `title`へ移動します
5. (R) と(A) を同時に押し`00030004`フォルダを選択して "Copy to 0:/gm9/out" を選択します
   - This process may take some time if you have many DSiWare games
6. Bキーを二回押してメインメニューに戻ります。

### Section III - Backup GBA VC Saves

::: info

重要なGBA VCゲームやセーブを持っていない場合、このセクションを読み飛ばしてもいいです。

:::

::: info

このセクションはその他のバーチャルコンソールゲーム（GBC、NESなど）には必要ありません

:::

::: info

セーブデータはSDカードの `/gm9/out/` フォルダに`<TitleID>.gbavc.sav`として出力されます

:::

::: info

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.

:::

1. Do the following process for each GBA VC game that you want to back up the save for:
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
   - Launch GodMode9 by pressing (A)
   - Navigate to `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Dump GBA VC save"
   - (A) で続行します
   - Press (Start) to reboot your console

### Section IV - Copy EmuNAND to SysNAND

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
2. `[E:] EMUNAND VIRTUAL`へ移動します
3. (A)を押し`nand.bin`を選択します。次に"NAND image options..."から "Restore SysNAND (safe)"を選択します
4. (A) を押してSysNANDへ書き込みをアンロックします。表示しているキーコンボを入力します
   - This will not overwrite your boot9strap installation
5. 表示されているキーコンボを入力し、SysNAND (lvl1) への書き込みを許可します
   - This process will take some time
6. Once it is completed, press (A) to continue
7. Nandへの書き込みのロックを求められた場合、(B) ボタンを押して拒否してください。
8. Bキーを押してメインメニューに戻ります

### Section V - Restore DSiWare Saves

::: info

DSiWareセーブを持っていない場合、このセクションを無視してください。

:::

1. `[0:] SDCARD` -> `gm9` -> `out`へ移動します
2. (Y) を押し`00030004` フォルダをコピーします
3. Bキーを二回押してメインメニューに戻ります。
4. `[2:] SYSNAND TWLN` -> `title`へ移動します
5. (Y) を押し `00030004` フォルダを貼り付けます
6. 「Copy path(s)」を選択します
7. (A) ボタンを押し、表示されるコンボを入力することで、 SysNAND (lvl1) への書き込みを許可します
8. "Overwrite file(s)"を選択します
   - This process may take some time if you have many DSiWare games
9. Nandへの書き込みのロックを求められた場合、(B) ボタンを押して拒否してください。
10. Bキーを二回押してメインメニューに戻ります。

### Section VI - Restore GBA VC Saves

::: info

GBA VCセーブを持っていない場合、このセクションを無視してください。

:::

::: info

To identify a `<TitleID>.gbavc.sav` file's Title ID, you can get a listing of all games on the system and their corresponding Title IDs by pressing (Home) to bring up the action menu, selecting `Title manager`, and selecting `[A:] SD CARD`.

:::

1. Hold (R) and press (Start) at the same time to power off your console
2. Power on your console into SysNAND
3. セーブを元に戻すGBA VCゲームごとに以下の処理を行います:
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Boot your console while holding (Start) to launch the Luma3DS chainloader menu
   - Launch GodMode9 by pressing (A)
   - `[0:] SDCARD` -> `gm9`へ移動します。
   - Press (Y) on the `<TitleID>.gbavc.sav` file you wish to restore to copy it
   - Bキーを押してメインメニューに戻ります
   - Navigate to `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Inject GBA VC save"
   - (A) で続行します
   - Press (Start) to reboot your console
   - Launch the GBA VC game
   - Exit the GBA VC game

### Section VII - Backup SysNAND

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9

<!--@include: ./_include/nand-backup.md -->

1. **次のステップではSDカードに保存してあるファイルを全て削除しますので、SDカードのコンテンツをパソコンにバックアップします**

### Section VIII - Format SD card

1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9

<!--@include: ./_include/format-sd-gm9.md -->

1. (R) を押したまま (B) を押してSDカードを取り外します
2. パソコンにSDカードを入れます
3. すべてのファイルをSDカードにコピーします
   - Ensure you replace the `boot.firm` file on your SD card with the one from your backup
4. Reinsert your SD card into your console
5. (A) を押してSDカードをマウントします
6. (Start) を押して再起動します

___

::: tip

Return to [Finalizing Setup](finalizing-setup)

:::
