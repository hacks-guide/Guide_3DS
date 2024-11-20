---
noneSelected: Le modèle de la console doit être sélectionné.
invalidVersion: Il semblerait que ce numéro de version soit invalide.
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/selecting.js
---

# Get Started

Before starting this guide, we will see if custom firmware is already installed and check the current system version of your console.

### Section I - CFW Check

1. Power off your console
2. Hold the (Select) button
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

Otherwise, methods that work on all versions are available, but require additional hardware:

1. [ntrboot](ntrboot) - requires compatible DS flashcart
2. [Installing boot9strap (Hardmod)](installing-boot9strap-\(hardmod\)) - requires soldering
