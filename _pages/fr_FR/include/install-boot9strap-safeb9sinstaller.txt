{%- if include.inline != "true" %}
In this section, you will install custom firmware onto your console.
{%- endif %}

1. Lorsque vous y êtes invité, entrez la combinaison de touches indiquée sur l'écran supérieur pour installer boot9strap
    + Si une étape sur l'écran du bas a du texte rouge, et que vous n'êtes pas invité à entrer une combinaison de touches, [suivez ce guide de dépannage](troubleshooting#issues-with-safeb9sinstaller)
{%- if include.isbootfirm == "true" %}
1. Once it is completed, force your console to power off by holding down the power button
    + Your console will only boot to the SafeB9SInstaller screen until the next section is completed
{%- else %}
1. Once it is complete, press (A) to reboot your console
{%- endif %}
