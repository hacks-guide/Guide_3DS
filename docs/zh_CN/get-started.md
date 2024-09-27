---
noneSelected: System model is required.
invalidVersion: This doesn't seem to be a valid system version.
head:
  - - script
    - src: /assets/js/selecting.js
---

# Get Started

Before starting this guide, we will see if custom firmware is already installed and check the current system version of your console.

### Section I - CFW Check

1. 将主机关机
2. 按住 “Select” 键
3. Power on your console while still holding the (Select) button
4. If you do not see a custom menu (your console just boots to the HOME Menu), you may proceed to the next section

::: warning

If you see the Luma3DS configuration screen or any other custom menu (e.g. GodMode9, Decrypt9WIP), STOP - you already have custom firmware! [点这里继续](checking-for-cfw#what-to-do-next)。

:::

### Section II - System Version Check

1. Launch System Settings on your console
2. Your system version will be displayed on the bottom right of the top screen (e.g. "Ver. 11.17.0-50U")

### Section III - Select a Method

To find the correct method for your console, please select the model of your console and the system version you found in Section II.

<!--@include: @/_internal/consoleVersionSelect.html -->

---

#### Alternate Methods

If possible, you should follow the method given by the prompt above.

以下方法需要一些外设才能进行：

1. [ntrboot](ntrboot) - 需要兼容的 DS 烧录卡
2. [安装 boot9strap（通过硬件修改）](installing-boot9strap-\(hardmod\)) - 需要焊接工具
