---
head: [ [ 'script', { src: '/assets/js/common.js' } ], [ 'script', { src: '/assets/js/skater-link.js' } ], [ 'script', { src: '/assets/js/link-common.js' } ] ]
---

# Instalar boot9strap (super-skaterhax)

:::details Detalles técnicos (opcional)

Para obtener detalles técnicos sobre el exploit que usarás en esta página, entra [aquí](https://github.com/zoogie/super-skaterhax).

:::

### Notas de compatibilidad

Super-skaterhax (como método para iniciar Homebrew Launcher) es compatible con los modelos New en las versiones 11.15.0 y superior en todas las regiones.

::: info

Este exploit tiene resultados inconsistentes; para algunos funciona, para otros no. Si prefieres usar un exploit más consistente (cuál podría tardar más, aunque tendrá el mismo resultado final), entonces sigue [MSET9](installing-boot9strap-(mset9)).

:::

### Lo que necesitas

- The [Super-skaterhax](https://skater.nintendohomebrew.com) `.zip` for your console's region and system version

#### Sección I - Preparativos

En esta sección, copiarás los archivos necesarios para activar super-skaterhax y Homebrew Launcher.

1. Apaga la consola

2. Inserta la tarjeta SD en tu computadora

3. Copia todo lo que está dentro del `.zip` de Super-skaterhax a la raíz de tu tarjeta SD. Si alguno de los archivos ya existe, sobreescríbelos con los nuevos.
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
   - USA: First select United States, then select Do Not Set
   - EUR: First select United Kingdom, then select Do Not Set
   - JPN: First select 日本, then select 設定しない
   - KOR: First select 대한민국, then select 설정하지 않음

10. Dirígete a "Fecha y hora"

11. Set "Today's Date" and "Current Time" to the current date and time

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
    - **Un cuadro en blanco que dice "Error has occurred"**: el exploit falló. Abre la configuración de la consola, cambia el idioma a uno distinto (si es posible) y vuelve a intentarlo. Puede que tengas que repetir esta secuencia hasta diez veces
      - En las consolas con región JPN/KOR, solo hay un idioma disponible. En esas consolas, deberás abrir la configuración de la consola, cerrarlo y volver a intentarlo
      - Si el exploit sigue fallando después de cinco intentos, podría haber un problema con los archivos o preparativos. Asegúrate de que la región y la fecha sean correctas, y de que has estado siguiendo esta sección **exactamente paso por paso**. Si usaste WinRAR para extraer los archivos a la tarjeta SD, vuelve a extraer los archivos usando el Explorador de archivos o 7-zip en su lugar
      - Si el exploit sigue fallando después de diez intentos, sigue [MSET9](installing-boot9strap-(mset9)) en cambio
    - **Una pantalla negra que dice "An error has occurred"**: Los archivos no están colocados correctamente. Asegúrate de que los archivos de super-skaterhax se encuentran en la raíz de la tarjeta SD
    - **Una pantalla amarilla**: el Homebrew Launcher no pudo abrirse. Mantén el botón POWER hasta que la consola se apague e inténtalo de nuevo
    - **[La palabra "Text"](/images/screenshots/skaterhax/skater-old3ds.png)**: Posees una Old 3DS, en la que el exploit **no es compatible**. Si este es el caso, entones debes de usar el exploit [MSET9](installing-boot9strap-(mset9))
17. Inicia nimdsphax desde la lista de homebrew
18. Si el exploit fue exitoso, habrás iniciado SafeB9SInstaller
    - Si tu consola se queda congelada en una pantalla roja o verde, mantén el botón POWER hasta que se apague y vuelve a intentarlo

#### Sección III - Instalar boot9strap

En esta sección, instalarás custom firmware en tu consola.

1. Cuando se te pida, introduce la combinación de botones mostrada para instalar boot9strap
   - Si algún paso en la pantalla inferior tiene el texto en color rojo y no se te pide que introduzcas una combinación de botones, [sigue la guía de resolución de problemas](troubleshooting-super-skaterhax)
2. Once it is complete, press (A) to reboot your console

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: info

Ya puedes restablecer los ajustes de residencia.

:::

::: tip

Continúa a [Finalizar instalación](finalizing-setup)

:::
