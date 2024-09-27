1. Aperte (Home) para abrir o menu de ações
2. Selecione "Scripts..."
3. Selecione "GM9Megascript"
4. Selecione "Backup Options"
5. Selecione "SysNAND Backup"
6. Aperte (A) para confirmar
   - This process will take some time
   - If you get an error, look for your issue in the [troubleshooting guide](troubleshooting#finalizing-setup)
7. Aperte (A) para continuar
8. Aperte (B) para retornar para o menu principal
9. Selecione "Exit"
10. Se solicitado, aperte (A) para bloquear as permissões de escrita
11. Navegue para `[S:] SYSNAND VIRTUAL`
12. Aperte (A) em `essential.exefs` para selecioná-lo
13. Selecione "Copy to 0:/gm9/out''
    - If you see "Destination already exists", press (A) on "Overwrite file(s)"
14. Aperte (A) para continuar
15. Segure (R) e aperte (Start) ao mesmo tempo para desligar seu console
16. Insira o cartão SD no seu computador
17. Copie `<date>_<serialnumber>_sysnand_##.bin`, `<date>_<serialnumber>_sysnand_##.bin.sha` e `essential.exefs` da pasta `/gm9/out/` no seu cartão SD para um local seguro no seu computador
    - Copy these backups to multiple locations (such as online file storage, an external hard drive, etc.)
    - These backups will save you from a brick and/or help you recover files from the NAND image if anything goes wrong in the future
18. Delete `<date>_<serialnumber>_sysnand_##.bin` e `<date>_<serialnumber>_sysnand_##.bin.sha` da pasta `/gm9/out/` no seu cartão SD após copiá-lo
    - The other backup files are negligible in size and may be kept on your SD card for ease of access
19. Reinsira o cartão SD no seu console
