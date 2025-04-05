Al crear el ID1 de MSET9 en Windows 10 y versiones posteriores, el script puede fallar con este error:

![](/images/screenshots/troubleshooting/234.png)

Esto ocurre debido al soporte beta de UTF-8 en Windows. Debes deshabilitarlo para ejecutar MSET9:

1. Presiona **Windows + R** para abrir el cuadro de diálogo Ejecutar, escribe `intl.cpl` y luego haz clic en "Aceptar"

    ::: info

    ![](/images/screenshots/troubleshooting/234run.png)

    :::

2. Haz clic en `Administrativo` y luego en `Cambiar configuración regional del sistema`

    ::: info

    ![](/images/screenshots/troubleshooting/234region.png)

    :::

    ::: info

    ![](/images/screenshots/troubleshooting/234administrative.png)

    :::

3. Desmarca la casilla junto a `Beta: usar Unicode UTF-8 para compatibilidad con idiomas en todo el mundo` y luego haz clic en "Aceptar"

    ::: info

    ![](/images/screenshots/troubleshooting/234locale.png)

    :::

4. Haz clic en "Reiniciar ahora"

    ::: info

    ![](/images/screenshots/troubleshooting/234restart.png)

    :::

Después de que tu PC se haya reiniciado, intenta crear el ID1 de MSET9 de nuevo.
