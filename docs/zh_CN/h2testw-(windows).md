# H2testw (Windows)

## Required Reading

本附加章节将介绍如何使用 h2testw 来检查你的 SD 卡是否有错误。

这个操作的耗时取决于你的 SD 卡的容量大小和电脑的速度，可能将耗费数个小时完成！

本节教程仅限 Windows 用户。 如果你不用 Windows，请查阅 [F3XSwift（Mac）](f3xswift-\(mac\)) 或 [F3（Linux）](f3-\(linux\))页面。

## What You Need

- The latest version of [h2testw](https://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip)

## Instructions

1. 解压缩 `h2testw` 压缩包，复制 `h2testw.exe` 文件到桌面
2. 将你的 SD 卡插入到电脑
3. 运行 `h2testw.exe`
4. 选择 “English”
5. 点击 “Select target”
6. 选择 SD 卡对应的盘符
7. 确保 “all available space” 已勾选
8. 点击 “Write + Verify”
9. 等待测试完成

::: tip

If the test shows the result `Test finished without errors`, your SD card is good and you can delete all `.h2w` files on your SD card.

:::

::: danger

如果测试显示任何其他结果，则你的 SD 卡可能已经出错或损坏，你可能需要更换一张 SD卡 ！

:::

::: tip

Return to [Get Started](get-started)

:::
