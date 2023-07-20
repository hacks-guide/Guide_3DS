{%- if include.inline != "true" %}
In questa sezione installerai il custom firmware sulla tua console.
{%- endif %}

1. Quando richiesto, inserisci la combinazione di tasti richiesta sullo schermo superiore per installare boot9strap
    + Se una sezione nella schermata inferiore ha un testo di colore rosso, e non ti viene richiesto di inserire una combinazione di tasti, [segui questa guida per risolvere i problemi](troubleshooting#issues-with-safeb9sinstaller)
{%- if include.isbootfirm == "true" %}
1. Una volta completato, forza lo spegnimento della console tenendo premuto il tasto POWER
    + Finché non verrà completata la successiva sezione, la console visualizzerà soltanto la schermata di SafeB9SInstaller all'accensione
{%- else %}
1. Una volta completato tutto, premi (A) per riavviare la console
{%- endif %}
