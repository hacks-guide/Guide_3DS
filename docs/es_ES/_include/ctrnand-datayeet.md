Esta sección restablecerá los ajustes del sistema a los predeterminados. **Los juegos instalados y sus datos de guardados no serán afectados.** Esto es **requerido** para prevenir problemas conocidos en relación con el modo de memoria extendida y aplicaciones en algunas consolas.

1. Power off your console
2. Press and hold (Start), and while holding (Start), power on your console. Esto abrirá GodMode9
3. Navigate to `[0:] SDCARD` -> `gm9` -> `in`
4. Presiona (X) en la imagen `.bin` de CTRTransfer para borrarla
5. Press (A) to confirm
6. Pulsa (B) varias veces para volver al menú principal
7. Ve a `[1:] SYSNAND CTRNAND` -> `data` -> `<ID0>` -> `sysdata`
   - The `<ID0>` will be a folder with a 32-character long name
8. Utiliza el D-Pad para seleccionar `00010017`
9. Pulsa (R) y (A) juntos para mostrar las opciones de carpeta
10. Select "Copy to 0:/gm9/out"
11. Press (A) to continue
12. Mientras seleccionas `00010017`, pulsa (X) para eliminar
13. Press (A) to confirm
14. Press (A) to unlock SysNAND (lvl1) writing, then input the key combo given
15. Una vez eliminado el archivo, pulsa (A) para continuar
16. Press (A) to relock write permissions if prompted
17. Presiona (Start) para reiniciar tu consola
18. Tu consola iniciará en el menú de configuración inicial
    - This is expected behaviour. No has perdido ningún dato de tus juegos
19. Completa la inicialización del menú siguiendo los pasos mostrados en la pantalla de tu consola
