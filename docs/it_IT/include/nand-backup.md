1. Premi il pulsante HOME per far apparire il menu delle azioni
2. Seleziona "Scripts..."
3. Seleziona "GM9Megascript"
4. Seleziona "Backup Options"
5. Seleziona "SysNAND Backup"
6. Premi (A) per confermare
   - This process will take some time
   - If you get an error, look for your issue in the [troubleshooting guide](troubleshooting#finalizing-setup)
7. Premi il pulsante (A) per continuare
8. Premi (B) per ritornare al menu principale
9. Seleziona "Exit"
10. Se richiesto, premi (A) per ritirare le autorizzazioni di scrittura
11. Entra nella cartella `[S:] SYSNAND VIRTUAL`
12. Premi (A) su `essential.exefs` per selezionarlo
13. Seleziona "Copy to 0:/gm9/out"
    - If you see "Destination already exists", press (A) on "Overwrite file(s)"
14. Premi il pulsante (A) per continuare
15. Tenendo premuto (R), premi (Start) per spegnere la console
16. Inserisci la scheda SD nel tuo computer
17. Copia i file `<data>_<codiceseriale>_sysnand_##.bin`, `<data>_<codiceseriale>_sysnand_##.bin.sha` ed `essential.exefs` dalla cartella `/gm9/out/` della tua scheda SD in una posizione sicura sul tuo computer
    - Copy these backups to multiple locations (such as online file storage, an external hard drive, etc.)
    - These backups will save you from a brick and/or help you recover files from the NAND image if anything goes wrong in the future
18. Dopo la copia, elimina i file `<data>_<codiceseriale>_sysnand_##.bin` e `<data>_<codiceseriale>_sysnand_##.bin.sha` dalla cartella `/gm9/out/` della tua scheda SD
    - The other backup files are negligible in size and may be kept on your SD card for ease of access
19. Reinserisci la scheda SD nella tua console
