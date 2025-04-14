---
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/skater-link.js
  - - script
    - src: /assets/js/link-common.js
---

# Instalar boot9strap (super-skaterhax)

:::details Detalles técnicos (opcional)

Para obtener detalles técnicos sobre el exploit que usarás en esta página, entra [aquí](https://github.com/zoogie/super-skaterhax).

:::

### Notas de compatibilidad

Super-skaterhax (como método para iniciar Homebrew Launcher) es compatible con los modelos New en las versiones 11.15.0 y superior en todas las regiones.

::: info

This exploit is known to be inconsistent: it works for some people, but not others. If you prefer to use a more consistent exploit (which may take longer, but will have the same end result), follow [MSET9](installing-boot9strap-\(mset9\)) instead.

:::

### Lo que necesitas

- El zip [Super-skaterhax](https://skater.nintendohomebrew.com) para la región y la versión del sistema de tu consola

#### Sección I - Preparativos

En esta sección, copiarás los archivos necesarios para activar super-skaterhax y Homebrew Launcher.

1. Apaga la consola

2. Inserta la tarjeta SD en tu computadora

3. Copia todo el contenido del `.zip` de Super-skaterhax en la raíz de tu tarjeta SD, sobreescribiendo cualquier archivo existente

    ::: info

    ![](/images/screenshots/skaterhax/skater-root-layout.png)

    :::

4. Reinserta la tarjeta SD en la consola

5. Enciende tu consola

6. Inicia la configuración de la consola

7. Selecciona "Otras opciones"

8. Ve hacia "Perfil" -> "Residencia"
    - Estos ajustes serán cambiados temporalmente para aumentar la tasa de éxito del exploit
    - Podrás restablecer los ajustes de residencia a los originales una vez que hayas terminado de seguir esta página
    - Si aparece una [advertencia](/images/screenshots/skaterhax/country-change-notice.png) diciendo que perderás acceso a funciones de Nintendo Network ID, puedes seleccionar "Aceptar" para continuar sin ningún problema

9. Selecciona las siguientes opciones según la región de tu consola ([imagen](/images/screenshots/skaterhax/skater-lang.png))
    - USA: United States, Do Not Set
    - EUR: United Kingdom, Do Not Set
    - JPN: 日本, 設定しない
    - KOR: 대한민국, 설정하지 않음

10. Dirígete a "Fecha y hora"

11. Configura "Fecha de hoy" y "Hora actual" con la fecha y hora correspondiente a tu franja horaria

12. Sal de la configuración de la consola

#### Sección II - super-skaterhax

En esta sección, visitarás la página web del exploit para el navegador, la cual iniciará el Homebrew Launcher.

::: info

[Aquí](https://www.youtube.com/watch?v=DEcZB72vJts) encontrarás un vídeo paso a paso que explica este proceso.

:::

1. Dirígete al navegador de internet
2. Toca el icono de 3 líneas (☰) en la esquina inferior derecha de la pantalla
3. Toca `Ajustes` -> desliza hacia abajo -> `Borrar datos` -> `Sí` -> `Sí` -> `Aceptar`
    - El navegador se cerrará
4. Abre el navegador de internet de nuevo
5. Toca `Seguir` -> `Google` -> `Aceptar` -> `Aceptar`
6. Toca la barra de búsqueda en la parte superior de la pantalla inferior
7. Introduce el URL correspondiente a la región de la consola:
    - **USA/EUR/JPN**: `https://skater.686178.xyz/go/super`
    - **KOR**: `https://skater.686178.xyz/go/korea`
8. Toca «Abrir»
    - Te debería aparecer el texto «GO GO!». No hagas clic aún
9. Toca el icono de 3 líneas (☰) en la esquina inferior derecha de la pantalla
10. Toca «Añadir a favoritos»
11. Toca el icono de 3 líneas (☰) en la esquina inferior derecha de la pantalla
12. Toca `Ajustes` -> `Borrar cookies` -> `Sí`
13. Regresa al Menú HOME presionando el botón (Home) y seguidamente abre el navegador de internet de nuevo
14. Cuando la página cargue del todo, toca el botón "GO GO!" en la parte superior de la pantalla inferior
15. Espera a que la página cargue por completo y después presiona (A) para cerrar la [ventana emergente](/images/screenshots/skaterhax/skater-popup.png)
16. Si la consola muestra:
    - **La pantalla de "The Homebrew Launcher"**: Sigue con el siguiente paso
    - **Un cuadro en blanco que dice "Error has occurred"**: el exploit falló. Abre la configuración de la consola, cambia el idioma a uno distinto (si es posible) y vuelve a intentarlo. You may have to repeat this sequence up to ten times
        - En las consolas con región JPN/KOR, solo hay un idioma disponible. En esas consolas, deberás abrir la configuración de la consola, cerrarlo y volver a intentarlo
        - If the exploit is still unsuccessful after five attempts, there may be a problem with your files or prep work. Ensure that region and date/time are correct, and that you have been following this section **exactly**. If you used WinRAR to extract files to the SD card, re-extract the files using File Explorer or 7-zip instead
        - If the exploit is still unsuccessful after ten attempts, follow [MSET9](installing-boot9strap-\(mset9\)) instead
    - **Una pantalla negra que dice "An error has occurred"**: Los archivos no están colocados correctamente. Asegúrate de que los archivos de super-skaterhax se encuentran en la raíz de la tarjeta SD
    - **Una pantalla amarilla**: el Homebrew Launcher no pudo abrirse. Mantén el botón POWER hasta que la consola se apague e inténtalo de nuevo
    - **[La palabra "Text"](/images/screenshots/skaterhax/skater-old3ds.png)**: Posees una Old 3DS, en la que el exploit **no es compatible**. Si este es el caso, entones debes de usar el exploit [MSET9](installing-boot9strap-\(mset9\))
17. Inicia nimdsphax desde la lista de homebrew
18. Si el exploit fue exitoso, habrás iniciado SafeB9SInstaller
    - Si tu consola se queda congelada en una pantalla roja o verde, mantén el botón POWER hasta que se apague y vuelve a intentarlo

#### Sección III - Instalar boot9strap

En esta sección, instalarás custom firmware en tu consola.

1. Cuando se te pida, introduce la combinación de botones mostrada para instalar boot9strap
    - Si algún paso en la pantalla inferior tiene el texto en color rojo y no se te pide que introduzcas una combinación de botones, [sigue la guía de resolución de problemas](troubleshooting-super-skaterhax)
2. Una vez completado, presiona (A) para reiniciar tu consola

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: info

Ya puedes restablecer los ajustes de residencia.

:::

::: tip

Continúa a [Finalizar instalación](finalizing-setup)

:::
