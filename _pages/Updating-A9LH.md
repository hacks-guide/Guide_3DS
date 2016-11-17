---
title: "Actualizar A9LH"
permalink: /updating-a9lh.html
---

### Última actualización: 3 Nov 2016

La actual instalación de arm9loaderhax consiste en cargas payloads instalados en las particiones NFIRM^ del chip NAND del dispositivo, el cual es adherido a la tarjeta madre por sí mismo. Estos playloads son raramente actualizadas y su único próposito es el de iniciar `arm9loaderhax.bin` desde la tarjeta SD, la cuál es, en esté caso, Luma3DS.
{: .notice}

Si no sabe que versión de arm9loaderhax tiene, solo instale la última versión con estos pasos. Si posee la últma versión y la vuelve a instalar esto no tendra ningún efecto.
{: .notice--info}

Si tiene algún PIN en Luma, Debe obligatoriamente apagarlo tdmporalmente para seguir estos pasos. Puede reactivar el PIN despues de la actualización.
{: .notice--info}

Si está usando una carga (payload) que no inicializa por si misma la pantalla (tal como Bootanim9), necesitará renombrarla de la siguiente manera `arm9loaderhax_si.bin` en lugar de `arm9loaderhax.bin`.
{: .notice--info}

Estos pasos también actualizarán las cargas (payloads) y la clave de la base de datos AES (AES key database).  
{: .notice--success}

#### ¿Qué se necesita?

* [`aeskeydb.bin`](torrents/aeskeydb.torrent) - <code class="highlighterrouge"><a href="magnet:?xt=urn:btih:18b3a17f78e2376e05feaa150749d9fd689b25dc"><i class="fa fa-magnet" aria-hidden="true"></i></a></code>
* [`data_input_v3.zip`](torrents/data_input_v3.torrent) - <code class="highlighterrouge"><a href="magnet:?xt=urn:btih:a1195c9f7ab650fa7c7bf020b51fc19ea8d9440c"><i class="fa fa-magnet" aria-hidden="true"></i></a></code>
* Última versión de [Luma3DS](https://github.com/AuroraWright/Luma3DS/releases/latest)
* Última versión de [arm9loaderhax](https://github.com/AuroraWright/arm9loaderhax/releases/latest)
* Última versión de [SafeA9LHInstaller](https://github.com/AuroraWright/SafeA9LHInstaller/releases/latest)
* Última versión de [Hourglass9](https://github.com/d0k3/Hourglass9/releases/latest)

#### Instrucciones

**Para todas estas instrucciones, SOBRESCRIBIR todos los archivos existentes en la tarjeta SD.**

##### Parte I - Preparación

1. Eliminar cualquier archivo `aeskeydb.bin` de la raíz de la tarjeta SD.
4. Eliminar la carpeta `a9lh` de la raíz de la tarjeta SD si este existe.
2. Copiar `aeskeydb.bin` en la carpeta `/files9/` de la tarjeta SD.
3. Copiar `Hourglass9.bin` de Hourglass9 zip a la carpeta `/luma/payloads/` en la tarjeta SD y renombrarlo de `Hourglass9.bin` a `start_Hourglass9.bin`.
5. Copiar `arm9loaderhax.bin` de SafeA9LHInstaller zip a la carpeta `/luma/payloads` de la tarjeta SD.
6. Renombrar `arm9loaderhax.bin` en `/luma/payloads` a `down_safea9lhinstaller.bin`.
7. Copiar la carpeta `a9lh` de `data_input_v3.zip` a la raíz de la tarjeta SD.
7. Copiar _el contenido de_ el arm9loaderhax zip a la carpeta `a9lh` de la tarjeta SD
8. Copiar `arm9loaderhax.bin` de el Luma3DS zip a la raíz de la tarjeta SD, sobrescriba los archivos existentes.
9. Reinsert your SD card into your 3DS

##### Parte II - Actualización de Payload

10. Inicie la consola y mantenga oprimida la flecha de abajo.
11. Oprima (Select) para actualizar arm9loaderhax
12. Apague la consola y coloque la tarjeta SD en la computadora.
13. Elimiar la carpeta `a9lh`de la raíz de la tarjeta SD.
14. Eliminar `down_safea9lhinstaller.bin` en `/luma/payloads`.

##### Parte III - Configuración de Luma3DS

15. Reinserte  la tarjeta SD en la 3DS e inicie mientras mantiene oprimido (select).
16. Utilice el botón (A) y el las flechas para cambiar lo siguiente:    
  + **"Autoboot SysNAND"**
  + **"Use SysNAND FIRM if booting with R (A9LH)"**
  + **"Show NAND or user string in System Settings"**
3. Si está usando una **New 3DS**, *también* debería de activar lo siguiente:
  + **"New 3DS CPU" to "Clock+L2(x)"**
    + Esto aumentará framerate (media de fotogramas) de muchos juegos, pero podria causar inestabilidad en otros.
    + Si algunos juegos no van bien, desactive está opción y pruebe de nuevo.
4. Presione Start para guardar y reincie la consola.

##### Parte IV - CTRNAND Luma3DS

16. Abra FBI
17. Seleccione "SD"
18. Navegue `arm9loaderhax.bin`, y presione (A) sobre el archivo y selecione "Copy" (Copiar).
9. Regrese al menu principal de FBI presionando (B).
10. Seleccione "CTR NAND"
11. Seleccione "\<current directory>"
12. Seleccione "Paste" (pegar), y presione (A) para confirmar.
8. Salga con el boton (HOME).
9. Apague la 3DS y quite la tarjeta SD.
10. Inicie la consola sin la tarjeta SD y mantenga (SELECT) oprimido.
  + Inciar la consola por lo menos una vez sin la tarjeta SD le permitira configurar la CTRNAND based luma installation
16. Use el botón (A) and las flechas para cambiar lo siguiente:    
  + **"Show NAND or user string in System Settings"**
3. Si está usando una **New 3DS**, *también* debería activar lo siguiente:
  + **"New 3DS CPU" to "Clock+L2(x)"**
    + Esto aumentará framerate (media de fotogramas) de muchos juegos, pero podria causar inestabilidad en otros.
    + Si algunos juegos no van bien, desactive está opción y pruebe de nuevo.
14. Reinserte la tarjeta SD, y presione (START) para guardar y reinciar!
