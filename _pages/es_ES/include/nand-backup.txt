1. Presiona el botón (Home) para abrir el menú de acción
1. Selecciona "Scripts..."
1. Selecciona "GM9Megascript"
1. Selecciona "Backup Options"
1. Selecciona "SysNAND Backup"
1. Presiona (A) para confirmar
    + Este proceso tomará un tiempo
    + Si aparece algún error, busca ayuda en la [guía de resolución de problemas](troubleshooting#finalizing-setup)
1. Presiona (A) para continuar
1. Presiona (B) para volver al menú principal
1. Selecciona "Exit"
1. Presiona (A) para volver a bloquear los permisos de escritura si se solicita
1. Ve a `[S:] SYSNAND VIRTUAL`
1. Pulsa (A) en `essential.exefs` para seleccionarlo
1. Selecciona "Copy to 0:/gm9/out"
    + Si muestra "Destination already exists", pulsa (A) sobre "Overwrite file(s)"
1. Presiona (A) para continuar
1. Mantén pulsado (R) y presiona (Start) al mismo tiempo para apagar tu consola
1. Inserta tu tarjeta SD en tu computadora
1. Copia los archivos `<fecha>_<numerodeserie>_sysnand_##.bin`,`<fecha>_<numerodeserie>_sysnand_##.bin.sha` y `essential.exefs` en la carpeta `/gm9/out/` de tu tarjeta SD a una ubicación segura en tu computadora
    + Copia estos respaldos a múltiples lugares (como almacenamiento en la nube, un disco duro externo, etc.)
    + Estos respaldos podrán prevenir que se inutilice la consola y/o ayudarte a recuperar archivos de la memoria de tu consola si algo sale mal en el futuro
1. Borra los archivos `<fecha>_<numerodeserie>_sysnand_##.bin` y `<fecha>_<numerodeserie>_sysnand_##.bin.sha` de la carpeta `/gm9/out/` de tu tarjeta SD *luego de copiarlos*
    + Los otros archivos de respaldo no pesan mucho y pueden quedarse en la tarjeta SD para tenerlos a mano
1. Reinserta la tarjeta SD en tu consola
