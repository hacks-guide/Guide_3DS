Questa sezione ripristinerà la configurazione di sistema ai valori predefiniti. **I giochi installati e i loro dati di salvataggio non saranno influenzati.** È **necessario** per evitare problemi noti relativi alla modalità a memoria estesa e alle applet su alcune console.

::: warning

This process will reset your Mii data. If you wish to save any Miis that you have created, either [generate a QR code](https://en-americas-support.nintendo.com/app/answers/detail/a_id/298/~/how-to-generate-a-qr-code%E2%84%A2-for-a-mii) for each Mii that you want to save, or make a backup of `SYSNAND CTRNAND:/data/<ID0>/extdata/00048000/f000000b` before following these instructions. You can restore this file to the same directory _after_ your console has gone through initial setup.

:::

1. Spegni la tua console
2. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
3. Entra nella cartella `[0:] SDCARD` -> `gm9` -> `in`
4. Premi (X) sul file immagine `.bin` del CTRTransfer per cancellarlo
5. Premi (A) per confermare
6. Premi (B) alcune volte per tornare al menu principale
7. Entra nella cartella `[1:] SYSNAND CTRNAND` -> `data` -> `<ID0>` -> `sysdata`
    - `<ID0>` sarà una cartella con un nome di 32 caratteri
8. Naviga su `00010017` con il D-Pad
9. Premi (R) + (A) per visualizzare le opzioni della cartella
10. Seleziona "Copy to 0:/gm9/out"
11. Premi il pulsante (A) per continuare
12. Sempre rimanendo su `00010017`, premi (X) per eliminarla
13. Premi (A) per confermare
14. Premi il pulsante (A) per sbloccare i permessi di scrittura di primo livello su SysNAND, quindi inserisci la combinazione di tasti richiesta a schermo
15. Al termine della rimozione del file, premi (A) per proseguire
16. Se richiesto, premi (A) per ritirare le autorizzazioni di scrittura
17. Premi (Start) per riavviare la tua console
18. La tua console avvierà il menu di configurazione iniziale
    - È voluto. Non hai perso alcun dato di gioco
19. Completa la configurazione iniziale seguendo le istruzioni mostrate a schermo
