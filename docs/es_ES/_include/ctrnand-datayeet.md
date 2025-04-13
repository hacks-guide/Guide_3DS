Esta sección restablecerá los ajustes del sistema a los predeterminados. **Los juegos instalados y sus datos de guardados no serán afectados.** Esto es **requerido** para prevenir problemas conocidos en relación con el modo de memoria extendida y aplicaciones en algunas consolas.

::: warning

Este proceso borrará los personajes Mii guardados. Si deseas salvarlos, entonces; o [generas un QR code](https://es-americas-support.nintendo.com/app/answers/detail/a_id/24354/~/c%C3%B3mo-generar-un-qr-code%E2%84%A2-para-un-mii) para cada Mii que quieras mantener o haces un respaldo de `SYSNAND CTRNAND:/data/<ID0>/extdata/00048000/f000000b` antes de seguir las siguientes instrucciones. Puedes restaurar este respaldo en el mismo directorio _después_ de haber hecho la configuración inicial de la consola.

:::

1. Apaga tu consola
2. Presiona y mánten (Start), y mientras mantienes (Start), enciende la consola. Esto abrirá GodMode9
3. Navega hasta `[0:] SDCARD` -> `gm9` -> `in`
4. Presiona (X) en la imagen `.bin` de CTRTransfer para borrarla
5. Presiona (A) para confirmar
6. Presiona (B) varias veces para volver al menú principal
7. Ve a `[1:] SYSNAND CTRNAND` -> `data` -> `<ID0>` -> `sysdata`
    - `<ID0>` será una carpeta con un nombre compuesto por 32 caracteres aleatorios
8. Utiliza la cruz de control para seleccionar `00010017`
9. Presiona (R) y (A) juntos para mostrar las opciones de carpeta
10. Seleciona "Copy to 0:/gm9/out"
11. Presiona (A) para continuar
12. Mientras seleccionas `00010017`, pulsa (X) para eliminar
13. Presiona (A) para confirmar
14. Presiona (A) para desbloquear la escritura de SysNAND (lvl1) y después introduce la combinación de botones mostrada
15. Una vez eliminado el archivo, pulsa (A) para continuar
16. Presiona (A) para volver a bloquear los permisos de escritura si se solicita
17. Presiona (Start) para reiniciar la consola
18. Tu consola iniciará en el menú de configuración inicial
    - Esto es normal y esperado. No has perdido ningún dato de tus juegos
19. Completa la configuración inicial siguiendo los pasos mostrados en la pantalla de tu consola
