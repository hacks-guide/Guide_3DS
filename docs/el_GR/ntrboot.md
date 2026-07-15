# ntrboot

## Απαραίτητη ανάγνωση

ntrboot refers to the ability for all 3DS family consoles to boot into a special, recovery-mode cartridge to perform actions before any other part of the operating system loads. It is commonly used for data recovery and unbricking, but can also be used to install boot9strap, a custom firmware loader.

To use ntrboot, a compatible cartridge (normally a 'flashcart') is required. Many flashcarts from the NDS or DSi era can be repurposed for ntrboot, while new ones can be purchased for roughly $20 USD.

No matter how you run ntrboot, you will need a small **magnet** that is strong enough to to put the console into sleep mode (except on the Old 2DS, which uses a sleep switch). Για να ελέγξετε αν ο μαγνήτης θα λειτουργήσει, κρατήστε τον πάνω ή γύρω από τα κουμπιά (A)(B)(X)(Y) ενώ η κονσόλα είναι ενεργοποιημένη για να δείτε αν θα τεθεί σε λειτουργία ύπνου. Εάν ναι, τότε και οι δύο οθόνες θα παραμείνουν ανενεργές όσο κρατάτε τον μαγνήτη σε εκείνο το σημείο.

## Recommended for new purchases

If you don't already have a flashcart, or if your flashcart is incompatible with ntrboot, it is recommended to purchase one of these.

Cartridges may be available for a cheaper price through a local distributor or on AliExpress. For more information, see the [NTRBoot Quick Start Guide](https://www.flashcarts.net/ntrboot-ds-carts?tab=flashable#flashcarts) (in English only).

| Flashcart                                                      |                  Price | Notes                                                                                                                                                                                                                                                                                                                         |
| -------------------------------------------------------------- | ---------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**DSpico**](https://www.nds-card.com/ProShow.asp?ProID=658)   | $25.99 | **Must be flashed using a computer** (using a microUSB or USB-C cable, depending on the cartridge). This cart needs a microSD card inserted to function for both ntrboot and regular NDS firmware.                                                                         |
| [**Ace3DS X**](https://www.nds-card.com/ProShow.asp?ProID=575) |                 24,99$ | **Προφορτωμένο ntrboot** (εξωτερικός διακόπτης για εναλλαγή μεταξύ των λειτουργιών ntrboot («3DS») και NDS)· μην κάνετε χειροκίνητη φόρτωση του ntrboot. This cart needs a microSD card inserted to function for both ntrboot and regular NDS firmware. |

::: tip

If you have a DSpico, you will need to flash it with an ntrboot-compatible firmware. To do so:

- Download [DSpico_Hybrid_B9S-1.3_GCD.uf2](https://github.com/coderkei/dspico-hybrid-fw/releases/download/1.4/DSpico_Hybrid_B9S-1.3_GCD.uf2)
- Remove the microSD card from your DSpico
- Connect the DSpico to your computer using a microUSB or USB-C cable (depending on the cartridge)
  - A `RPI-RP2` drive should appear on your computer
- Copy `DSpico_Hybrid_B9S-1.3_GCD.uf2` to the root of the `RPI-RP2` drive (not inside any folder)
  - The drive should automatically disconnect itself after a few seconds
- **After the drive has disconnected itself**, disconnect the DSpico from your computer and reinsert the microSD card
  - The hybrid firmware has been successfully flashed
    :::

::: tip

Once your cartridge is flashed with ntrboot, you can continue to [Installing boot9strap (ntrboot)](installing-boot9strap-(ntrboot)). You can ignore the rest of this page.

:::

## Other Flashcarts

If you already have a flashcart that _isn't_ a DSpico or Ace3DS X, you can check this list to see if it can be flashed with ntrboot.

Το exploit «ntrboot» λειτουργεί ανεξάρτητα από την έκδοση του συστήματος, αλλά αυτό δεν ισχύει και για το ntrboot flasher (το οποίο εγκαθιστά το exploit στη flashcart). Αυτό σημαίνει ότι, ανάλογα με τις εκδόσεις και τις κονσόλες που υποστηρίζονται από τη flashcart, ενδέχεται να διατίθενται σε εσάς μόνο ορισμένες μέθοδοι.

Σημειώστε ότι οι flashcart με «ωρολογιακή βόμβα» δεν θα μπορούν πλέον να εκκινήσουν αρχεία `.nds` όταν ανιχνεύσουν ότι το ρολόι συστήματος έχει περάσει την ημερομηνία που καθορίζεται από το firmware της flashcart. Μια μέθοδος για να παρακάμψετε αυτό το πρόβλημα είναι να ρυθμίσετε το ρολόι του συστήματος σε μια προγενέστερη ημερομηνία.

| Flashcart                                                                                                                    |       Price |                    «Ωρολογιακή βόμβα»;                    |                                 Εκδόσεις 3DS;                                 |                           Εκδόσεις DSi;                           | Άλλες σημειώσεις                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------- | ----------: | :-------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**R4i-SDHC B9S** (r4i-sdhc.com)](https://www.nds-card.com/ProShow.asp?ProID=574)         | Εξαντλημένο |                     3 Σεπτεμβρίου 2024                    |                                      ΟΛΕΣ                                     |                                ΟΛΕΣ                               | **Προφορτωμένο ntrboot**· δυνατότητα επαναφοράς σε μια flashcart NDS.                                                                                                                                            |
| [**DSTT** (ndstt.com)](https://www.nds-card.com/ProShow.asp?ProID=157)                    |      19,99$ |                            Όχι                            |                                     Καμία                                     |                               Καμία                               | Μόνο τα μοντέλα με [συγκεκριμένα flash chip](https://gist.github.com/aspargas2/fa2a70aed3a7fe33f1f10bc264d9fab6) είναι συμβατά με το ntrboot.                                                                    |
| [**R4i-SDHC 3DS RTS** (r4i-sdhc.com)](https://www.nds-card.com/ProShow.asp?ProID=146)     |      20,99$ | 1.85b: 3 Σεπτεμβρίου 2024 |                                      ΟΛΕΣ                                     |                                ΟΛΕΣ                               |                                                                                                                                                                                                                                  |
| [**R4iSDHC GOLD Pro 20XX** (r4isdhc.com)](https://www.nds-card.com/ProShow.asp?ProID=490) |      22,99$ |  4.0b: 3 Σεπτεμβρίου 2024 |                                      ΟΛΕΣ                                     |                                ΟΛΕΣ                               | Μόνο οι flashcart από το r4isdhc **.com** με τη σήμανση του έτους 2014 ή μεταγενέστερου είναι συμβατές.                                                                                          |
| **Ace3DS Plus**                                                                                                              |             |                            Όχι                            |                                      ΟΛΕΣ                                     |                                ΟΛΕΣ                               | This cart needs a microSD card inserted to function for both ntrboot and regular NDS firmware.                                                                                                                   |
| **Acekard 2i**                                                                                                               |             |                            Όχι                            |       <= 4.3.0       | <= 1.4.4 |                                                                                                                                                                                                                                  |
| **Gateway Blue**                                                                                                             |             |                            Όχι                            | 4.1.0 - 4.5.0 |                                ΟΛΕΣ                               |                                                                                                                                                                                                                                  |
| **Infinity 3 R4i** (r4infinity.com)                                                       |             |                            Όχι                            |                                      ΟΛΕΣ                                     |                                ΟΛΕΣ                               |                                                                                                                                                                                                                                  |
| **R4 3D Revolution**                                                                                                         |             |                            Όχι                            |                                     Καμία                                     |                               Καμία                               |                                                                                                                                                                                                                                  |
| **R4i Gold 3DS Plus** (r4ids.cn)                                                          |             |                            Όχι                            |                                      ΟΛΕΣ                                     |                                ΟΛΕΣ                               | **Προφορτωμένο ntrboot** ([εσωτερικός διακόπτης για εναλλαγή μεταξύ των λειτουργιών ntrboot και NDS](/images/screenshots/r4i-gold-3ds-plus.png))· μην κάνετε χειροκίνητη φόρτωση του ntrboot. |
| **R4i Gold 3DS** (r4ids.cn)                                                               |             |                            Όχι                            |                                      ΟΛΕΣ                                     |                                ΟΛΕΣ                               | Όλες οι flashcart είναι συμβατές.                                                                                                                                                                                |
| **R4i Ultra** (r4ultra.com)                                                               |             |                            Όχι                            |       <= 4.3.0       |                                ΟΛΕΣ                               |                                                                                                                                                                                                                                  |
| **R4i-SDHC 3DS RTS Deluxe Edition**                                                                                          |             |                          Άγνωστο                          |                                      ΟΛΕΣ                                     |                                ΟΛΕΣ                               | Μόνο η Deluxe Edition με το μπλε αυτοκόλλητο είναι συμβατή.                                                                                                                                                      |
| **R4iSDHC RTS LITE 20XX** (r4isdhc.com)                                                   |             |  4.0b: 3 Σεπτεμβρίου 2024 |                                      ΟΛΕΣ                                     |                                ΟΛΕΣ                               | Μόνο οι flashcart από το r4isdhc **.com** με τη σήμανση του έτους 2014 ή μεταγενέστερου είναι συμβατές.                                                                                          |
| **R4iSDHC Dual-Core 20XX** (r4isdhc.com)                                                  |             |  4.0b: 3 Σεπτεμβρίου 2024 |                                      ΟΛΕΣ                                     |                                ΟΛΕΣ                               | Μόνο οι flashcart από το r4isdhc **.com** με τη σήμανση του έτους 2014 ή μεταγενέστερου είναι συμβατές.                                                                                          |

::: info

![](/images/screenshots/ntrboot-flashcarts.png)

:::

Βεβαιωθείτε ότι η flashcart σας μπορεί να εκκινήσει αρχεία `.nds` στην κονσόλα σας πριν ξεκινήσετε. Ορισμένες flashcart ενδέχεται να απαιτούν την αντιγραφή των αρχείων firmware ή «kernel» στην κάρτα SD τους. Συμβουλευτείτε τις οδηγίες της flashcart σας για περισσότερες πληροφορίες.

Η χρήση αυτού του exploit, ανεξάρτητα από τη μέθοδο φόρτωσης, απαιτεί πρόσβαση σε έναν μικρό μαγνήτη αν η κονσόλα είναι αναδιπλούμενη (οποιοδήποτε σύστημα της οικογένειας 3DS, εκτός του Old 2DS που διαθέτει διακόπτη ύπνου). Αυτό συμβαίνει επειδή το exploit απαιτεί την είσοδο της κονσόλας σε λειτουργία ύπνου, ενώ εξακολουθεί να υπάρχει πρόσβαση στα κουμπιά.

Σημειώστε ότι η flashcart δεν θα μπορεί να χρησιμοποιηθεί για τις τυπικές της λειτουργίες, όσο είναι εγκατεστημένο σε αυτήν το exploit «ntrboot» (εκτός από την περίπτωση της Acekard 2i, η οποία παραμένει λειτουργική _μόνο σε συστήματα NDS και σε 3DS με custom firmware_). Αυτό σημαίνει ότι οι περισσότερες flashcart δεν θα εμφανίζονται καν στο μενού «HOME». Υπάρχουν προαιρετικά βήματα στο τέλος των οδηγιών φόρτωσης του ntrboot για να τo αφαιρέσετε από τη flashcart όταν τελειώσετε.

::: danger

Σημειώστε ότι σε ορισμένες, σπάνιες περιπτώσεις, η διαδικασία φόρτωσης ενδέχεται να καταστήσει μια πλαστή flashcart οριστικά **μη λειτουργική**. Αυτό είναι σχεδόν απίθανο, αλλά παρ' όλα αυτά, υποστηρίζονται μόνο αυθεντικές flashcart. Για να μειωθεί η πιθανότητα αγοράς μιας πλαστής flashcart, προτείνουμε να χρησιμοποιήσετε έναν αξιόπιστο ιστότοπο για τις αγορές σας (όπως το [NDS Card](https://www.nds-card.com/)).

:::

### Φόρτωση του ntrboot (ένα σύστημα 3DS)

Αυτή η μέθοδος απαιτεί μόνο το μη τροποποιημένο 3DS σας και μια συμβατή flashcart. Αυτή η μέθοδος χρησιμοποιεί τη flashcart για την εκτέλεση του αρχείου `.nds` του εργαλείου φόρτωσης του ntrboot στο 3DS σας. Αυτό σημαίνει ότι η flashcart σας πρέπει να υποστηρίζει την εκκίνηση αρχείων `.nds` στην έκδοση συστήματος του 3DS σας. Δείτε τον παραπάνω πίνακα flashcart για περισσότερες πληροφορίες.

::: tip

Συνέχεια στη [Φόρτωση του ntrboot (ένα σύστημα 3DS)](flashing-ntrboot-(3ds-single-system))

:::

___

### Φόρτωση του ntrboot (πολλαπλά συστήματα 3DS)

Αυτή η μέθοδος απαιτεί την προσωρινή πρόσβαση σε μια δεύτερη κονσόλα της οικογένειας 3DS που να εκτελεί ήδη το boot9strap. Η flashcart σας δεν είναι απαραίτητο να υποστηρίζει την έκδοση κανενός εκ των 3DS που διαθέτετε.

::: tip

Συνέχεια στη [Φόρτωση του ntrboot (πολλαπλά συστήματα 3DS)](flashing-ntrboot-(3ds-multi-system))

:::

___

### Φόρτωση του ntrboot (NDS)

Αυτή η μέθοδος απαιτεί την προσωρινή πρόσβαση σε ένα Nintendo DS ή Nintendo DS Lite που να είναι συμβατό με τη flashcart σας. Αυτή η μέθοδος χρησιμοποιεί τη flashcart για την εκτέλεση του αρχείου `.nds` του εργαλείου φόρτωσης του ntrboot στο NDS σας.

::: tip

Συνέχεια στη [Φόρτωση του ntrboot (NDS)](flashing-ntrboot-(nds))

:::

___

### Φόρτωση του ntrboot (DSi)

Αυτή η μέθοδος απαιτεί την προσωρινή πρόσβαση σε ένα Nintendo DSi που να είναι συμβατό με τη flashcart σας. Αυτή η μέθοδος χρησιμοποιεί τη flashcart για την εκτέλεση του αρχείου `.nds` του εργαλείου φόρτωσης του ntrboot στο DSi σας. Αυτό σημαίνει ότι η flashcart σας πρέπει να υποστηρίζει την εκκίνηση αρχείων `.nds` στην έκδοση συστήματος του DSi σας. Δείτε τον παραπάνω πίνακα flashcart για περισσότερες πληροφορίες.

::: tip

Συνέχεια στη [Φόρτωση του ntrboot (DSi)](flashing-ntrboot-(dsi))

:::
