---
noneSelected: System model is required.
invalidVersion: This doesn't seem to be a valid system version.
cfwPrefixDetected: Your console may already have custom firmware installed. Please retry Section I. If you still only reach the HOME menu, click the link below and ask, in English, for assistance.
inviteLinkText: Nintendo Homebrew on Discord
otherPrefix: (Other)
head: [
    ['script', {src: '/assets/js/common.js'}],
    ['script', {src: '/assets/js/selecting.js'}]
]
---

# Get Started

Before starting this guide, we will see if custom firmware is already installed and check the current system version of your console.

### Section I - CFW Check

1. Power off your console
1. Hold the (Select) button
1. Power on your console while still holding the (Select) button
1. If you do not see a custom menu (your console just boots to the HOME Menu), you may proceed to the next section

::: warning

If you see the Luma3DS configuration screen or any other custom menu (e.g. GodMode9, Decrypt9WIP), STOP - you already have custom firmware! Continue from [here](checking-for-cfw#what-to-do-next).

:::

### Section II - System Version Check

1. Launch System Settings on your console
1. Your system version will be displayed on the bottom right of the top screen (e.g. "Ver. 11.17.0-50U")

### Section III - Select a Method

To find the correct method for your console, please select the model of your console and the system version you found in Section II.

<!--@include: @/_internal/consoleVersionSelect.html -->

---

#### Alternate Methods

If possible, you should follow the method given by the prompt above.

Otherwise, methods that work on all versions are available, but require additional hardware:

1. [ntrboot](ntrboot) - requires compatible DS flashcart
1. [Installing boot9strap (Hardmod)](installing-boot9strap-(hardmod)) - requires soldering
