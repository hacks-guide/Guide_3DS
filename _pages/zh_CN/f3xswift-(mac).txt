---
title: "F3XSwift (Mac)"
---

{% include toc title="目录内容" %}

### 重要事项

本附加章节用来介绍如何使用 F3XSwift 来检查你的 SD 卡有无问题。

这个操作的耗时取决于你的 SD 卡的容量大小和电脑的速度，可能将耗费数个小时完成！

本页教程仅限 Mac 用户。 如果你的操作系统不是 Mac，参见 [H2testw (Windows)](h2testw-(windows)) 或 [F3 (Linux)](f3-(linux)) 页面。

F3XSwift 只兼容 macOS 10.13（High Sierra）及以上版本。 如果你正在使用旧版本的 macOS，请换用 [F3X (Mac)](f3x-(mac))
{: .notice--primary}

### 你需要准备点啥？

* 最新版本的 [F3XSwift](https://github.com/vrunkel/F3XSwift/releases/latest)

### 操作步骤

1. 将你的 SD 卡插入到电脑
1. 运行 F3XSwift 应用
1. 从卷列表中选择你的 SD 卡
1. 点击“测试（Test）”
1. 点击“打开（Open）”来确认写入 SD 卡
1. 等待检查完成

___

如果测试结果显示 `Success! Your card is ok!`, your SD card is good and you can delete all `.h2w` files on your SD card.
{: .notice--success}

如果测试显示任何其他结果，则你的 SD 卡可能已经出错或损坏，你可能需要更换一张 SD卡 ！
{: .notice--danger}

### 返回至[新手入门](get-started)
{: .notice--primary}
