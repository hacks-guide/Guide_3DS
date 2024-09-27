# F3 (Linux)

## Required Reading

このアドオンセクションは、F3を使用してSDカードのエラーをチェックするための手順です。

SDカードのサイズとコンピュータのパフォーマンスによって、かかる時間は異なり、数時間もかかる場合があります！

このページはLinuxユーザー向けです。 If you are not on Linux, check out the [H2testw (Windows)](h2testw-\(windows\)) or [F3XSwift (Mac)](f3xswift-\(mac\)) pages.

## What You Need

- The latest version of [F3](https://github.com/AltraMayor/f3/releases/tag/v8.0)

## Instructions

1. F3 `.zip`ファイルをを解凍します
2. `cd`でf3ディレクトリまで移動します
3. `make`でF3をコンパイルします
4. パソコンにSDカードを入れます
5. SDカードをマウントします
6. `./f3write <SDカードのマウントポイント>`を実行します
7. 処理が完了するまで待ちます。 下記はサンプル出力です。

```bash
$ ./f3write /media/michel/6135-3363/
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
```

1. `./f3read <SDカードのマウントポイント>`を実行します
2. 処理が完了するまで待ちます。 下記はサンプル出力です。

```bash
$ ./f3read /media/michel/6135-3363/
									SECTORS      ok/corrupted/changed/overwritten
Validating file 1.h2w ... 2097152/        0/      0/      0
...
Validating file 30.h2w ... 1491904/        0/      0/      0

	Data OK: 29.71 GB (62309312 sectors)
Data LOST: 0.00 Byte (0 sectors)
					Corrupted: 0.00 Byte (0 sectors)
	Slightly changed: 0.00 Byte (0 sectors)
				Overwritten: 0.00 Byte (0 sectors)
Average Reading speed: 9.42 MB/s
```

___

::: tip

If the test shows the result `Data LOST: 0.00 Byte (0 sectors)`, your SD card is good and you can delete all `.h2w` files on your SD card.

:::

::: danger

結果はそうでなければ、SDカードは壊れた恐れがありますので、新しいSDカードに切り替えることをご検討ください！

:::

::: tip

Return to [Get Started](get-started)

:::
