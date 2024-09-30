1. Premi il pulsante HOME per far apparire il menu delle azioni
2. Seleziona "Scripts..."
3. Seleziona "GM9Megascript"
4. Seleziona "Backup Options"
5. Seleziona "SysNAND Backup"
6. Premi (A) per confermare
   - Questo passaggio richiederà un po' di tempo
   - Se ottieni un errore, cerca il tuo problema alla pagina [Risoluzione dei problemi](troubleshooting#finalizing-setup)
7. Premi il pulsante (A) per continuare
8. Premi (B) per ritornare al menu principale
9. Seleziona "Exit"
10. Se richiesto, premi (A) per ritirare le autorizzazioni di scrittura
11. Entra nella cartella `[S:] SYSNAND VIRTUAL`
12. Premi (A) su `essential.exefs` per selezionarlo
13. Seleziona "Copy to 0:/gm9/out"
    - Se appare "Destination already exists", premi (A) su "Overwrite file(s)"
14. Premi il pulsante (A) per continuare
15. Tenendo premuto (R), premi (Start) per spegnere la console
16. Inserisci la scheda SD nel tuo computer
17. Copia i file `<data>_<codiceseriale>_sysnand_##.bin`, `<data>_<codiceseriale>_sysnand_##.bin.sha` ed `essential.exefs` dalla cartella `/gm9/out/` della tua scheda SD in una posizione sicura sul tuo computer
    - Copia questi backup in più posti (ad esempio un archivio online, un disco rigido esterno, ecc.)
    - Questi backup ti salveranno da un brick e/o ti aiuteranno a recuperare i file dalla NAND nel caso dovesse accadere qualcosa in futuro
18. Dopo la copia, elimina i file `<data>_<codiceseriale>_sysnand_##.bin` e `<data>_<codiceseriale>_sysnand_##.bin.sha` dalla cartella `/gm9/out/` della tua scheda SD
    - Gli altri file di backup sono di dimensioni trascurabili e possono essere conservati sulla tua scheda SD per comodità di accesso
19. Reinserisci la scheda SD nella tua console
