---
title: "Homebrew Launcher (Navegador)"
permalink: /homebrew-launcher-(browser).html
---

áEl Homebew Launcher tiene diferentes maneras de ser lanzado o "puntos de entrada". El mas común se conoce como "browserhax", el cual ejecuta el Homebrew Launcher utilizando nada más que el navegador incluido en la consola.
{: .notice--info}

r**Browserhax funcionará SOLO para las regiones EUR / JPN / USA / KOR**
{: .notice--warning}

#### Lo necesario

+ [`config.zip`](images/config.zip)
+ El [ropbin](https://smealum.github.io/3ds/#otherapp) correspondiente a la versión de tu 3DS
+ El [Kit Inicial Homebrew](http://smealum.github.io/ninjhax2/starter.zip)
+ Una conección a internet preparada en la consola

#### Instrucciones

##### Sección I -  Trabajo preliminar

1. Copia los contenidos de `starter.zip` a la raíz de tu tarjeta SD
2. Copia los contenidos de `config.zip` a la ubicación `/3ds/menuhax_manager/` de tu tarjeta SD
3. Crea una carpeta llamada `menuhax` en la raíz de tu tarjeta SD si todavía no existe
4. Renombra el ropbin a `menuhaxmanager_input_payload.bin`
5. Copia `menuhaxmanager_input_payload.bin` a la carpeta `/menuhax/` de tu tarjeta SD
4. Reinserta tuntarjeta SD en la 3DS

##### Sección II -  Evitar revisión de versión

**Esta sección solo es necesaria para las versiones 9.9.0 hasta 10.6.0**

2. Abre el menú de temas, cambia tu tema a cualquier otro, y vuelve a poner el que tenías antes. Esto creará los datos de temas necesarios
3. Ve a Configuración de la Consola
4. Cambia la fecha a `Enero 1, 2000`
5. Cambia la hora a `00:00`
6. Inicia el navegador, y abre las configuraciones del navegador lo más rápido posible
7. Ve al final y haz click en "Borrar datos guardados" Initialize Savedata lo más rápido posible

<<<<<<< HEAD
##### Sección III -  Bloquear conntest.nintendowifi.net

**This section is only needed for New 3DS on version 10.7.0 y 11.0.0**

1. Leer [esto](https://github.com/Plailect/Guide/issues/684)

##### Section IV -  browserhax

8. Navigate to `http://yls8.mtheall.com/3dsbrowserhax_auto.php`
    + You can also load the page by scanning the following QR code (press (L + R) on the home menu, then tap the QR icon on the bottom screen)     
![browserhax_auto](http://yls8.mtheall.com/3dsbrowserhax_auto_qrcode.png)
    + If you get an error, [follow this troubleshooting guide](troubleshooting#ts_browser)
9. Your console should load the homebrew menu

##### Section V -  menuhax

10. Open the menuhax_manager application
11. Press (A) to install, it may show some errors but that's fine as long as it shows "Install finished successfully" towards the end
    + If you are prompted to "override the detected system version," press (B) to decline
12. Go back to the main menuhax_manager menu, then select "Configure menuhax"
13. Press (A) to continue, then select "Type1"
14. Hold (Down) on the D-Pad, then tap the touch screen; this is the recommended button to use for launching menuhax in this guide because it does not interfere with any other functions of tools we will be using
15. Go back to the main menuhax_manager menu, press (B), then press (Start) to exit back into the Homebrew Launcher
16. Press the (Start) button then press (A) to reboot
17. You can now hold D-Pad (Down) while the system is booting to launch the Homebrew Launcher

You can now launch the Homebrew Launcher by holding D-Pad (Down) while the system is booting
{: .notice--info}

If you are above the version 9.2.0, continue to [9.2.0 Downgrade](9.2.0-downgrade)
{: .notice--primary}

If you are on the version 9.2.0 or below, continue to [Decrypt9 (Homebrew Launcher)](decrypt9-(homebrew-launcher))
{: .notice--primary}
