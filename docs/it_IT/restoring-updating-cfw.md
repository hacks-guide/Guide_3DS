# Restoring / Updating CFW

## Required Reading

Questa pagina prepara una console con un'installazione moderna preesistente di boot9strap alla reinstallazione e/o aggiornamento delle applicazioni del custom firmware. Può anche essere utilizzata in caso di perdita o corruzione della scheda SD.

La scheda SD deve essere formattata come FAT32 per seguire questa guida, altrimenti il 3DS non sarà in grado di riconoscerla. Se la scheda SD non è ancora formattata correttamente, utilizzare una di queste pagine per formattarla, a seconda del sistema operativo: [Windows](formatting-sd-\(windows\)), [Mac](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)).

## What You Need

- The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (the Luma3DS `.zip` file)

## Instructions

1. Inserisci la scheda SD nel tuo computer
2. Copia i file `boot.3dsx` e `boot.firm` dall'archivio `.zip` di Luma3DS nella directory principale della tua scheda SD, sovrascrivendo eventuali file già preesistenti
   - The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
3. Reinserisci la scheda SD nella tua console
4. Accendi la tua console
   - If you see the Luma3DS configuration menu, press (Start) to save and reboot

::: tip

La versione più recente di Luma3DS è ora installata sulla scheda SD e nella memoria interna.

:::

___

::: info

Se vuoi re-installare o aggiornare altre applicazioni homebrew, prosegui con [Completamento dell'installazione](finalizing-setup)

:::
