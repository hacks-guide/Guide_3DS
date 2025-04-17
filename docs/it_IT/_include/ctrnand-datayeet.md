Questa sezione ripristinerà la configurazione di sistema ai valori predefiniti. **I giochi installati e i loro dati di salvataggio non saranno influenzati.** È **necessario** per evitare problemi noti relativi alla modalità a memoria estesa e alle applet su alcune console.

::: warning

Questo processo resetterà i tuoi dati Mii. Se desideri salvare qualunque Mii creato, puoi [generare un codice QR](https://en-americas-support.nintendo.com/app/answers/detail/a_id/298/~/how-to-generate-a-qr-code%E2%84%A2-for-a-mii) per ogni Mii che vuoi salvare, o fare un backup di `SYSNAND CTRNAND:/data/<ID0>/extdata/00048000/f000000b` prima di seguire queste istruzioni. È possibile ripristinare questo file nella stessa cartella _dopo_ la configurazione iniziale della console.

:::

1. Spegni la tua console
2. Premi (Start) e accendi la console continuando a tenerlo premuto. Verrà avviato GodMode9
3. Entra nella cartella `[1:] SYSNAND CTRNAND` -> `data` -> `<ID0>` -> `sysdata`
    - `<ID0>` sarà una cartella con un nome di 32 caratteri
4. Naviga su `00010017` con il D-Pad
5. Premi (R) + (A) per visualizzare le opzioni della cartella
6. Seleziona "Copy to 0:/gm9/out"
7. Premi il pulsante (A) per continuare
8. Sempre rimanendo su `00010017`, premi (X) per eliminarla
9. Premi (A) per confermare
10. Premi il pulsante (A) per sbloccare i permessi di scrittura di primo livello su SysNAND, quindi inserisci la combinazione di tasti richiesta a schermo
11. Al termine della rimozione del file, premi (A) per proseguire
12. Se richiesto, premi (A) per ritirare le autorizzazioni di scrittura
13. Premi (Start) per riavviare la tua console
14. La tua console avvierà il menu di configurazione iniziale
    - È voluto. Non hai perso alcun dato di gioco
15. Completa la configurazione iniziale seguendo le istruzioni mostrate a schermo
