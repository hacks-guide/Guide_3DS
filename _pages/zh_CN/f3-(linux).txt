---
title: "F3 (Linux)"
---

{% include toc title="目录內容" %}

### 必读事项

本附加章节是用来介绍如何使用 F3 来检查你的 SD 卡有无问题。

这个操作的耗时取决于你的 SD 卡的容量大小和电脑的速度，可能将耗费数个小时完成！

本页教程仅限 Linux 用户。 如果你不用 Linux，请查阅 [H2testw（windows）](h2testw-(windows)) 或 [F3XSwift（Mac）](f3xswift-(mac)) 页面。

### 你需要准备点啥？

* 最新版本的 [F3](https://github.com/AltraMayor/f3/releases/tag/v8.0)

### 操作步骤

1. 将 f3 `.zip` 文件解压
1. `cd` 到 f3 目录
1. 执行 `make` 命令以编译 F3
1. 将你的 SD 卡插入到电脑
1. 挂载你的 SD 卡
1. 执行 `./f3write <你 SD 卡的挂载路径>`
1. 等待，直到该过程已完成。 你可以参考以下范例。

~~~ bash
$ ./f3write /media/michel/6135-3363/
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
~~~

1. 执行 `./ f3write <你 SD 卡的挂载路径>`
1. 等待，直到该过程已完成。 你可以参考以下范例。

~~~ bash
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
~~~

___

If the test shows the result `Data LOST: 0.00 Byte (0 sectors)`, your SD card is good and you can delete all `.h2w` files on your SD card.
{: .notice--success}

如果测试显示任何其他结果，则你的 SD 卡可能已经出错或损坏，你可能需要更换一张 SD卡 ！
{: .notice--danger}

### 返回至[新手入门](get-started)
{: .notice--primary}
