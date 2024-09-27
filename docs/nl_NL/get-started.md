---
noneSelected: System model is required.
invalidVersion: This doesn't seem to be a valid system version.
head:
  - - script
    - src: /assets/js/selecting.js
---

# Begin

Before starting this guide, we will see if custom firmware is already installed and check the current system version of your console.

### Section I - CFW Check

1. Zet je console uit
2. Houd de (Select) knop ingedrukt
3. Power on your console while still holding the (Select) button
4. If you do not see a custom menu (your console just boots to the HOME Menu), you may proceed to the next section

::: warning

If you see the Luma3DS configuration screen or any other custom menu (e.g. GodMode9, Decrypt9WIP), STOP - you already have custom firmware! Ga verder vanaf [hier](checking-for-cfw#what-to-do-next).

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

Anders zijn methoden die op alle versies werken beschikbaar, maar deze vereisen extra hardware:

1. [Ntrboot](ntrboot) - Hiervoor is een compatibele DS flashkaart nodig
2. [Boot9strap installeren (Hardmod)](installing-boot9strap-\(hardmod\)) - dit vereist solderen
