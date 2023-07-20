{%- if include.inline != "true" %}
In this section, you will install custom firmware onto your console.
{%- endif %}

1. When prompted, input the key combo given on the top screen to install boot9strap
    + If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
{%- if include.isbootfirm == "true" %}
1. Once it is completed, force your console to power off by holding down the power button
    + Your console will only boot to the SafeB9SInstaller screen until the next section is completed
{%- else %}
1. Once it is complete, press (A) to reboot your console
{%- endif %}
