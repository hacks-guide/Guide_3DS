Esta sección restablecerá los ajustes del sistema a los predeterminados. **Los juegos instalados y sus datos de guardados no serán afectados.** Esto es **requerido** para prevenir problemas conocidos en relación con el modo de memoria extendida y aplicaciones en algunas consolas.

1. Apaga tu consola
1. Presiona y mantén (Start), y mientras mantienes (Start), enciende la consola. Esto abrirá GodMode9
1. Ve a `[0:] SDCARD` -> `gm9`
1. Presiona (X) en la imagen `.bin` de CTRTransfer para borrarla
1. Presiona (A) para confirmar
1. Pulsa (B) varias veces para volver al menú principal
1. Ve a `[1:] SYSNAND CTRNAND` -> `data` -> `<ID0>` -> `sysdata`
    + El `<ID0>` será una carpeta con un nombre de 32 caracteres
1. Utiliza el D-Pad para seleccionar `00010017`
1. Pulsa (R) y (A) juntos para mostrar las opciones de carpeta
1. Selecciona "Copy to 0:/gm9/out"
1. Presiona (A) para continuar
1. Mientras seleccionas `00010017`, pulsa (X) para eliminar
1. Presiona (A) para confirmar
1. Presiona (A) para desbloquear la escritura de la SysNAND (lvl1) y después ingresa la combinación de teclas mostrada
1. Una vez eliminado el archivo, pulsa (A) para continuar
1. Pulsa (A) para volver a bloquear los permisos de escritura si se solicita
1. Presiona (Start) para reiniciar tu consola
1. Tu consola iniciará en el menú de configuración inicial
    + Este comportamiento es esperado. No has perdido ningún dato de tus juegos
1. Completa la inicialización del menú siguiendo los pasos mostrados en la pantalla de tu consola
