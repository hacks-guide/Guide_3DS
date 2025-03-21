### SigHaxed FIRM was not installed! Check lower screen for more info.

:::details MicroSD Card - init failed

La tua scheda SD ha probabilmente qualcosa che non va. Prova a riformattarla ([Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\))). Se questo non risolve il problema, prova una scheda SD diversa.

:::

:::details SigHaxed FIRM - File not found

Ti mancano i file `boot9strap.firm` e `boot9strap.firm.sha` dalla cartella `boot9strap`, o la cartella `boot9strap` non è stata correttamente nominata. Scarica l'ultima versione di [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip), e posiziona i file `boot9strap.firm` e `boot9strap.firm.sha` nella cartella `boot9strap`.

:::

:::details SigHaxed FIRM - invalid FIRM

C'è un problema con i tuoi file `boot9strap.firm` e `boot9strap.firm.sha`. Ri-scarica l'ultima versione di [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip), e posiziona i file `boot9strap.firm` e `boot9strap.firm.sha` nella cartella `boot9strap`.

:::

:::details Secret Sector - File not found

Ti manca il file `secret_sector.bin` dalla cartella `boot9strap`, o la cartella `boot9strap` non è stata correttamente nominata. Scarica secret_sector.bin con un client torrent, e posizionalo nella cartella `boot9strap`.

:::
