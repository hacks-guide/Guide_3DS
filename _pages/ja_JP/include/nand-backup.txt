1. (Home) ボタンを押してアクションメニューを呼び出します
1. "Scripts..."を選択します
1. "GM9Megascript"を選択します
1. "Backup Options"を選択します
1. "SysNAND Backup"を選択します
1. (A) を押して確認します
    + この作業には少し時間がかかります
    + If you get an error, look for your issue in the [troubleshooting guide](troubleshooting#finalizing-setup)
1. (A) で続行します
1. Bキーを押してメインメニューに戻ります
1. "Exit"を選択します。
1. (A) ボタンを押すとNANDへの書き込みを再ロックできます
1. Navigate to `[S:] SYSNAND VIRTUAL`
1. Press (A) on `essential.exefs` to select it
1. "Copy to 0:/gm9/out" を選択します
    + If you see "Destination already exists", press (A) on "Overwrite file(s)"
1. (A) で続行します
1. Hold (R) and press (Start) at the same time to power off your console
1. パソコンにSDカードを入れます
1. Copy `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha`, and `essential.exefs` from the `/gm9/out/` folder on your SD card to a safe location on your computer
    + Copy these backups to multiple locations (such as online file storage, an external hard drive, etc.)
    + これらのバックアップはブリックした場合に、NANDイメージからファイルを復元することができます。
1. Delete `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` from the `/gm9/out/` folder on your SD card after copying it
    + The other backup files are negligible in size and may be kept on your SD card for ease of access
1. Reinsert your SD card into your console
