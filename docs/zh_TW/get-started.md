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

1. Power off your console
2. 按住「Select」鍵
3. Power on your console while still holding the (Select) button
4. If you do not see a custom menu (your console just boots to the HOME Menu), you may proceed to the next section

::: warning

If you see the Luma3DS configuration screen or any other custom menu (e.g. GodMode9, Decrypt9WIP), STOP - you already have custom firmware! Continue from [here](checking-for-cfw#what-to-do-next).

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

雖然說有適用於任何版本的改機方式，但這些方式都得用額外硬體才能達成。

1. [ntrboot](ntrboot) - 需備有相容的 DS 燒錄卡
2. [安裝 boot9strap (透過硬改)](installing-boot9strap-\(hardmod\)) - 需要焊接
