---
layout: home
title: Guida agli hack per 3DS
hero:
  text: Guida agli hack per 3DS
  tagline: La guida omnicomprensiva per installare un custom firmware su 3DS (e 2DS), da zero a boot9strap.
  image:
    src: /images/home-page-feature.jpg
---

::: info

Leggi attentamente tutte le pagine introduttive (compresa questa!) prima di proseguire.

:::

::: danger

<!--@include: ./_include/3ds-online.md -->

:::

## Cosa vuol dire custom firmware?

Un **custom firmware** ("CFW") è una modifica software per il 3DS, paragonabile ad un "amministratore di sistema" su un computer. Ti permette di fare tutto quello che un 3DS può fisicamente fare, invece di essere limitati da quello che permette Nintendo.

Tra i possibili utilizzi del custom firmware, è possibile:

- Eseguire software homebrew e giochi fatti per o portati su Nintendo 3DS
- Bypassare il blocco regionale, per giocare a giochi provenienti da altri paesi
- Personalizzare il menu HOME con [temi e badge](https://themeplaza.art) creati dalla community
- Modificare i giochi ("ROM hacks") tramite [LayeredFS](https://github.com/knight-ryu12/godmode9-layeredfs-usage/wiki/Using-Luma3DS'-layeredfs-\(Only-version-8.0-and-higher\))
- Editare i salvataggi, farne un backup e ripristinarli
- Emulare console più vecchie e utilizzare nativamente giochi DS e GBA
- Installare le schede di gioco per utilizzarle senza il supporto fisico

## Cosa viene installato con questa guida?

Con questa guida:

- Installerai **boot9strap** e il **custom firmware Luma3DS** su console 3DS/2DS non modificate
  - Luma3DS rimuoverà automaticamente il blocco regionale e ti permetterà di eseguire software non firmato
- Installerai vari software homebrew, quali un installer di pacchetti, un manager di file di salvataggio, e un homebrew app store
- Creerai backup di file di sistema critici per evitare di rendere la console inutilizzabile (e recuperare i dati in caso dovesse accadere)

___

::: tip

Prosegui con [Informazioni importanti](key-information)

:::
