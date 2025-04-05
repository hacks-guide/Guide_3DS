1. Presiona (Home) para abrir el menú de acciones
2. Selecciona "Scripts..."
3. Selecciona "GM9Megascript"
4. Selecciona "Backup Options"
5. Selecciona "SysNAND Backup"
6. Presiona (A) para confirmar
    - Este proceso tomará un tiempo
    - Si aparece algún error, búscalo en la [guía de resolución de problemas](troubleshooting-finalizing-setup.html)
7. Presiona (A) para continuar
8. Presiona (B) para regresar al menú principal
9. Selecciona "Exit"
10. Presiona (A) para volver a bloquear los permisos de escritura si se solicita
11. Ve a `[S:] SYSNAND VIRTUAL`
12. Pulsa (A) en `essential.exefs` para seleccionarlo
13. Seleciona "Copy to 0:/gm9/out"
    - Si muestra "Destination already exists", presiona (A) sobre "Overwrite file(s)"
14. Presiona (A) para continuar
15. Mantén (R) y presiona (Start) al mismo tiempo para apagar tu consola
16. Inserta la tarjeta SD en tu computadora
17. Copia los archivos `<fecha>_<numerodeserie>_sysnand_##.bin`,`<fecha>_<numerodeserie>_sysnand_##.bin.sha` y `essential.exefs` en la carpeta `/gm9/out/` de tu tarjeta SD a una ubicación segura en tu computadora
    - Copia estos respaldos a múltiples lugares (como en el almacenamiento en la nube, un disco duro externo, etc.)
    - Estos respaldos podrán prevenir que se estropee la consola y/o ayudarte a recuperar archivos de la memoria de tu consola si algo sale mal en el futuro
18. Borra los archivos `<fecha>_<numerodeserie>_sysnand_##.bin` y `<fecha>_<numerodeserie>_sysnand_##.bin.sha` de la carpeta `/gm9/out/` de tu tarjeta SD _luego de copiarlos_
    - Los otros archivos de respaldo no pesan mucho y pueden quedarse en la tarjeta SD para tenerlos a mano
19. Reinserta la tarjeta SD en la consola
