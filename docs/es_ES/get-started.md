---
noneSelected: El modelo del sistema es requerido.
invalidVersion: Esta no parece ser una versión válida del sistema.
otherPrefix: (Otro)
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/selecting.js
---

# Comencemos

Antes de empezar con esta guía, comprobaremos si ya hay custom firmware instalado y cuál es la versión actual de la consola.

### Seccion II - Comprobar CFW

1. Apaga la consola
2. Mantén presionado el Botón (Select)
3. Enciende la consola mientras mantienes presionado el botón (Select)
4. Si no aparece un menú personalizado (tu consola simplemente muestra el Menú HOME), puedes seguir a la siguiente sección

::: warning

Si aparece la pantalla de configuración de Luma3DS o cualquier otro menú personalizado (por ejemplo, GodMode9, Decrypt9WIP), DETENTE - ¡ya tienes custom firmware! Continúa desde [aquí](checking-for-cfw#what-to-do-next).

:::

### Sección II - Comprobando la versión del sistema

1. Inicia la configuración de la consola
2. Tu versión del sistema se mostrará en la parte inferior derecha de la pantalla superior (p.ej. "Ver. 11.17.0-50U")

### Sección III - Selecciona un método

Para averiguar el método correcto para modificar tu consola, introduce la versión del sistema que encontraste en la Sección II.

<!--@include: @/_internal/consoleVersionSelect.html -->

---

#### Métodos alternativos

De ser posible, deberías seguir el método dado por el enunciado arriba.

De lo contrario, existen otros métodos que funcionan en todas las versiones, pero requieren hardware adicional:

1. [ntrboot](ntrboot) - requires compatible DS flashcart
2. [Instalar boot9strap (modificación de hardware)](installing-boot9strap-\(hardmod\)) - requiere hacer soldaduras
