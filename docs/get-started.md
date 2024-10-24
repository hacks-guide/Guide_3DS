---
noneSelected: System model is required.
invalidVersion: This doesn't seem to be a valid system version.
head: [
    ['script', {src: '/assets/js/selecting.js'}]
]
---

### Section I - System Version Check

1. Launch System Settings on your console
1. Your system version will be displayed on the bottom right of the top screen (e.g. "Ver. 11.17.0-50U")

### Section II - Select a Method

To find the correct method for your console, please select the model of your console and the system version you found in Section II.

<!--@include: @/_internal/consoleVersionSelect.html -->

---

#### Alternate Methods

If possible, you should follow the method given by the prompt above.

Otherwise, methods that work on all versions are available, but require additional hardware:

1. [ntrboot](ntrboot) - requires compatible DS flashcart
1. [Installing boot9strap (Hardmod)](installing-boot9strap-(hardmod)) - requires soldering
