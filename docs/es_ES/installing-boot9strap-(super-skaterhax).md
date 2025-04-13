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

::: warning

Las instrucciones proporcionadas solo se aplican a los modelos New 3DS, New 3DS XL y New 2DS XL. Por favor, asegúrate de que la consola que estés modificando sea una New 3DS, New 3DS XL o New 2DS XL antes de continuar.

:::

### Lo que necesitas

- El zip [Super-skaterhax](https://skater.nintendohomebrew.com) para la región y la versión del sistema de tu consola

#### Sección I - Preparativos

En esta sección, copiarás los archivos necesarios para activar super-skaterhax y Homebrew Launcher.

1. Apaga la consola

2. Inserta la tarjeta SD en tu computadora

3. Copy everything from the Super-skaterhax `.zip` to the root of your SD card, overwriting any existing files

    ::: info

    ![](/images/screenshots/skaterhax/skater-root-layout.png)

    :::

4. Reinserta la tarjeta SD en la consola

5. Enciende tu consola

6. Inicia la configuración de la consola

7. Selecciona "Otras opciones"

8. Ve hacia "Perfil" -> "Residencia"
    - Estos ajustes serán cambiados temporalmente para aumentar la tasa de éxito del exploit
    - Podrás restaurar los ajustes de residencia a la normalidad una vez que hayas terminado de seguir esta página
    - If you get a [warning](/images/screenshots/skaterhax/country-change-notice.png) that says you will lose access to Nintendo Network ID features, you can safely select OK to continue

9. Select the following options according to your console's region ([image](/images/screenshots/skaterhax/skater-lang.png))
    - USA: United States, Do Not Set
    - EUR: United Kingdom, Do Not Set
    - JPN: 日本, 設定しない
    - KOR: 대한민국, 설정하지 않음

10. Dirígete a "Fecha y hora"

11. Configura "Fecha de hoy" y "Hora actual" con la fecha y hora correspondiente a tu franja horaria

12. Sal de la configuración de la consola

#### Sección II - super-skaterhax

In this section, you will visit the browser exploit webpage, which will launch the Homebrew Launcher.

::: info

A video detailing these steps is available [here](https://www.youtube.com/watch?v=DEcZB72vJts).

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
15. Wait for the page to fully load, then press (A) to dismiss the [popup](/images/screenshots/skaterhax/skater-popup.png)
16. If your console displays:
    - **"The Homebrew Launcher" screen**: Continue to the next step
    - **A white "Error has occurred" message box**: The exploit failed due to random chance. Open System Settings, change the language to a different one (if possible), then retry this section. Be persistent; you may have to repeat this sequence up to ten times
        - On JPN/KOR region consoles, there is only one language setting. On those consoles, you should open System Settings, close it, then retry this section
        - If the exploit is still unsuccessful after more than ten attempts, there may be a problem with your files or SD card. Ensure that you are **not** using WinRAR to extract files, as it is known to cause issues
    - **A black screen that says "An error has occurred"**: Your file placement is incorrect. Ensure that the super-skaterhax files are on the root of the SD card
    - **A yellow screen**: Homebrew Launcher failed to open due to random chance. Hold the POWER button until the console turns off, then retry this section
    - **[The word "Text"](/images/screenshots/skaterhax/skater-old3ds.png)**: You have an Old 3DS, where this exploit **does not work**. If this is the case, you should follow [MSET9](installing-boot9strap-\(mset9\)) instead
17. Launch nimdsphax from the list of homebrew
18. Si el exploit fue exitoso, habrás iniciado SafeB9SInstaller
    - If your console freezes on a red or green screen, hold the POWER button until it turns off, then retry this section

#### Sección III - Instalar boot9strap

En esta sección, instalarás custom firmware en tu consola.

1. Cuando se te pida, introduce la combinación de botones mostrada para instalar boot9strap
    - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-super-skaterhax)
2. Una vez completado, presiona (A) para reiniciar tu consola

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: info

You may now restore your region settings back to normal.

:::

::: tip

Continúa a [Finalizar instalación](finalizing-setup)

:::
