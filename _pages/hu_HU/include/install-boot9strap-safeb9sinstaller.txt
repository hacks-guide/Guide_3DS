{%- if include.inline != "true" %}
Ebben a fejezetben egyedi firmware-t fogsz telepíteni a konzolodra.
{%- endif %}

1. Ha kéri, akkor nyomd meg a gombokat egyszerre, amiket kijelez a felső képernyőn, hogy telepíthesd a boot9strap-et
    + Ha egy lépés az alsó képernyőn piros színű szöveget eredményez, és nem kér a rendszer tőled egy gomb-kombinációt, akkor [kövesd ezt a hibaelhárítási útmutatót](troubleshooting#issues-with-safeb9sinstaller)
{%- if include.isbootfirm == "true" %}
1. Ha ez elkészült, kényszerítsd a konzolod leállásra a bekapcsológomb lenyomva tartásával
    + A konzolod csak addig fog a SafeB9SInstaller képernyőre bootolni, amíg a következő részt be nem fejezed
{%- else %}
1. Ha ez elkészült, nyomd meg az (A) gombot a konzolod újraindításához
{%- endif %}
