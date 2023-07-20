{%- if include.inline != "true" %}
Nesta seção, você instalará custom firmware no seu console.
{%- endif %}

1. Quando solicitado, aperte a sequência de botões fornecida na tela superior para instalar o boot9strap
    + Se um passo na tela inferior tiver texto de cor vermelha e você não for solicitado a introduzir um combo de botões, [siga este guia de solução de problemas](troubleshooting#issues-with-safeb9sinstaller)
{%- if include.isbootfirm == "true" %}
1. Assim que for completo, force o seu console a desligar segurando o botão POWER
    + Seu console só iniciará na tela do SafeB9SInstaller até que a próxima seção esteja concluída
{%- else %}
1. Quando concluído, aperte (A) para reiniciar o seu console
{%- endif %}
