{%- if include.inline != "true" %}
En esta sección, instalarás custom firmware en tu consola.
{%- endif %}

1. Cuando se te pida, introduce la combinación de botones mostrada para instalar boot9strap
    + Si algún paso en la pantalla inferior tiene el texto en color rojo y no se te pide que introduzcas una combinación de botones, [sigue la guía de solución de problemas](troubleshooting#issues-with-safeb9sinstaller)
{%- if include.isbootfirm == "true" %}
1. Una vez terminado, mantén pulsado el botón de apagado para apagar la consola
    + Tu consola al iniciar siempre ejecutará SafeB9SInstaller hasta que completes la siguiente sección
{%- else %}
1. Una vez completado, pulsa (A) para reiniciar tu consola
{%- endif %}
