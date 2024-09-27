# ntrboot

::: tip

Εάν η flashcart σας έχει προφορτωμένο το ntrboot (ή έαν το έχετε ήδη φορτώσει στη flashcart σας), μπορείτε να μεταβείτε στην [Εγκατάσταση του boot9strap (ntrboot)](installing-boot9strap-\(ntrboot\)) για οδηγίες σχετικά με τη χρήση του.

:::

## Required Reading

Η εγκατάσταση του boot9strap μέσω ntrboot απαιτεί μια συμβατή flashcart NDS/DSi, στην οποία θα φορτωθεί το ntrboot. Σημειώστε ότι ορισμένες από αυτές τις flashcart πωλούνται με προφορτωμένο το ntrboot.

Το exploit «ntrboot» λειτουργεί ανεξάρτητα από την έκδοση του συστήματος, αλλά αυτό δεν ισχύει και για το ntrboot flasher (το οποίο εγκαθιστά το exploit στη flashcart). Αυτό σημαίνει ότι, ανάλογα με τις εκδόσεις και τις κονσόλες που υποστηρίζονται από τη flashcart, ενδέχεται να διατίθενται σε εσάς μόνο ορισμένες μέθοδοι.

Σημειώστε ότι οι flashcart με «ωρολογιακή βόμβα» δεν θα μπορούν πλέον να εκκινήσουν αρχεία `.nds` όταν ανιχνεύσουν ότι το ρολόι συστήματος έχει περάσει την ημερομηνία που καθορίζεται από το firmware της flashcart. Μια μέθοδος για να παρακάμψετε αυτό το πρόβλημα είναι να ρυθμίσετε το ρολόι του συστήματος σε μια προγενέστερη ημερομηνία.

| Flashcart Name                                                                                                              |          Current Price |                       "Time Bomb"?                       |                                 3DS Versions?                                 |                           DSi Versions?                           | Other Notes                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------- | ---------------------: | :------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**Ace3DS X**](https://www.nds-card.com/ProShow.asp?ProID=575)                                                              | $17.99 |                            No                            |                                      ALL                                      |                                ALL                                | **Comes pre-flashed with ntrboot** (external switch to switch between ntrboot ("3DS") and NDS modes); do not manually flash with ntrboot. Αυτή η flashcart απαιτεί μια κάρτα SD για να λειτουργήσει τόσο για το ntrboot όσο και για το κανονικό firmware NDS. |
| [**R4i-SDHC B9S** (r4i-sdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=574)         | $16.99 |                     September 3, 2024                    |                                      ALL                                      |                                ALL                                | **Comes pre-flashed with ntrboot**; can be flashed back to an NDS flashcart.                                                                                                                                                                                                                                        |
| [**DSTT** (ndstt.com)](http://www.nds-card.com/ProShow.asp?ProID=157)                    | $11.99 |                            No                            |                                      None                                     |                                None                               | Only models with [certain flash chips](https://gist.github.com/aspargas2/fa2a70aed3a7fe33f1f10bc264d9fab6) are compatible with ntrboot.                                                                                                                                                                             |
| [**R4i-SDHC 3DS RTS** (r4i-sdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=146)     | $15.99 | 1.85b: September 3, 2024 |                                      ALL                                      |                                ALL                                |                                                                                                                                                                                                                                                                                                                                     |
| [**R4iSDHC GOLD Pro 20XX** (r4isdhc.com)](http://www.nds-card.com/ProShow.asp?ProID=490) | $17.99 |  4.0b: September 3, 2024 |                                      ALL                                      |                                ALL                                | Only r4isdhc **.com** carts marked with a year of 2014 or later are compatible.                                                                                                                                                                                                                     |
| **Ace3DS Plus**                                                                                                             |                        |                            No                            |                                      ALL                                      |                                ALL                                | Αυτή η flashcart απαιτεί μια κάρτα SD για να λειτουργήσει τόσο για το ntrboot όσο και για το κανονικό firmware NDS.                                                                                                                                                                                                 |
| **Acekard 2i**                                                                                                              |                        |                            No                            |       <= 4.3.0       | <= 1.4.4 |                                                                                                                                                                                                                                                                                                                                     |
| **Gateway Blue**                                                                                                            |                        |                            No                            | 4.1.0 - 4.5.0 |                                ALL                                |                                                                                                                                                                                                                                                                                                                                     |
| **Infinity 3 R4i** (r4infinity.com)                                                      |                        |                            No                            |                                      ALL                                      |                                ALL                                |                                                                                                                                                                                                                                                                                                                                     |
| **R4 3D Revolution**                                                                                                        |                        |                            No                            |                                      None                                     |                                None                               |                                                                                                                                                                                                                                                                                                                                     |
| **R4i Gold 3DS Plus** (r4ids.cn)                                                         |                        |                            No                            |                                      ALL                                      |                                ALL                                | **Comes pre-flashed with ntrboot** ([internal switch to switch between ntrboot and NDS modes](/images/screenshots/r4i-gold-3ds-plus.png)); do not manually flash with ntrboot.                                                                                                                   |
| **R4i Gold 3DS** (r4ids.cn)                                                              |                        |                            No                            |                                      ALL                                      |                                ALL                                | All carts are compatible.                                                                                                                                                                                                                                                                                           |
| **R4i Ultra** (r4ultra.com)                                                              |                        |                            No                            |       <= 4.3.0       |                                ALL                                |                                                                                                                                                                                                                                                                                                                                     |
| **R4i-SDHC 3DS RTS Deluxe Edition**                                                                                         |                        |                          Unknown                         |                                      ALL                                      |                                ALL                                | Only the Deluxe Edition with the blue sticker is compatible.                                                                                                                                                                                                                                                        |
| **R4iSDHC RTS LITE 20XX** (r4isdhc.com)                                                  |                        |  4.0b: September 3, 2024 |                                      ALL                                      |                                ALL                                | Only r4isdhc **.com** carts marked with a year of 2014 or later are compatible.                                                                                                                                                                                                                     |
| **R4iSDHC Dual-Core 20XX** (r4isdhc.com)                                                 |                        |  4.0b: September 3, 2024 |                                      ALL                                      |                                ALL                                | Only r4isdhc **.com** carts marked with a year of 2014 or later are compatible.                                                                                                                                                                                                                     |

::: info

![](/images/screenshots/ntrboot-flashcarts.png)

:::

Βεβαιωθείτε ότι η flashcart σας μπορεί να εκκινήσει αρχεία `.nds` στην κονσόλα σας πριν ξεκινήσετε. Ορισμένες flashcart ενδέχεται να απαιτούν την αντιγραφή των αρχείων firmware ή «kernel» στην κάρτα SD τους. Συμβουλευτείτε τις οδηγίες της flashcart σας για περισσότερες πληροφορίες.

Σημειώστε ότι ορισμένες μέθοδοι ενδέχεται να έχουν πρόσθετες πληροφορίες συμβατότητας.

Η χρήση αυτού του exploit, ανεξάρτητα από τη μέθοδο φόρτωσης, απαιτεί πρόσβαση σε έναν μικρό μαγνήτη αν η κονσόλα είναι αναδιπλούμενη (οποιοδήποτε σύστημα της οικογένειας 3DS, εκτός του Old 2DS που διαθέτει διακόπτη ύπνου). Αυτό συμβαίνει επειδή το exploit απαιτεί την είσοδο της κονσόλας σε λειτουργία ύπνου, ενώ εξακολουθεί να υπάρχει πρόσβαση στα κουμπιά.

::: info

Για να ελέγξετε αν ο μαγνήτης θα λειτουργήσει, κρατήστε τον πάνω ή γύρω από τα κουμπιά (A)(B)(X)(Y) ενώ η κονσόλα είναι ενεργοποιημένη για να δείτε αν θα τεθεί σε λειτουργία ύπνου. Εάν ναι, τότε και οι δύο οθόνες θα παραμείνουν ανενεργές όσο κρατάτε τον μαγνήτη σε εκείνο το σημείο.

:::

Σημειώστε ότι η flashcart δεν θα μπορεί να χρησιμοποιηθεί για τις τυπικές της λειτουργίες, όσο είναι εγκατεστημένο σε αυτήν το exploit «ntrboot» (εκτός από την περίπτωση της Acekard 2i, η οποία παραμένει λειτουργική _μόνο σε συστήματα NDS και σε 3DS με custom firmware_). Αυτό σημαίνει ότι οι περισσότερες flashcart δεν θα εμφανίζονται καν στο μενού «HOME». Υπάρχουν προαιρετικά βήματα στο τέλος των οδηγιών φόρτωσης του ntrboot για να τo αφαιρέσετε από τη flashcart όταν τελειώσετε.

::: danger

Σημειώστε ότι σε ορισμένες, σπάνιες περιπτώσεις, η διαδικασία φόρτωσης ενδέχεται να καταστήσει μια πλαστή flashcart οριστικά **μη λειτουργική**. Αυτό είναι σχεδόν απίθανο, αλλά παρ' όλα αυτά, υποστηρίζονται μόνο αυθεντικές flashcart. Για να μειωθεί η πιθανότητα αγοράς μιας πλαστής flashcart, προτείνουμε να χρησιμοποιήσετε έναν αξιόπιστο ιστότοπο για τις αγορές σας (όπως το [NDS Card](https://www.nds-card.com/)).

:::

___

## Methods

___

### Φόρτωση του ntrboot (ένα σύστημα 3DS)

Αυτή η μέθοδος απαιτεί μόνο το μη τροποποιημένο 3DS σας και μια συμβατή flashcart. Αυτή η μέθοδος χρησιμοποιεί τη flashcart για την εκτέλεση του αρχείου `.nds` του εργαλείου φόρτωσης του ntrboot στο 3DS σας. Αυτό σημαίνει ότι η flashcart σας πρέπει να υποστηρίζει την εκκίνηση αρχείων `.nds` στην έκδοση συστήματος του 3DS σας. Δείτε τον παραπάνω πίνακα flashcart για περισσότερες πληροφορίες.

::: tip

Συνέχεια στη [Φόρτωση του ntrboot (ένα σύστημα 3DS)](flashing-ntrboot-\(3ds-single-system\))

:::

___

### Φόρτωση του ntrboot (πολλαπλά συστήματα 3DS)

Αυτή η μέθοδος απαιτεί την προσωρινή πρόσβαση σε μια δεύτερη κονσόλα της οικογένειας 3DS που να εκτελεί ήδη το boot9strap. Η flashcart σας δεν είναι απαραίτητο να υποστηρίζει την έκδοση κανενός εκ των 3DS που διαθέτετε.

::: tip

Συνέχεια στη [Φόρτωση του ntrboot (πολλαπλά συστήματα 3DS)](flashing-ntrboot-\(3ds-multi-system\))

:::

___

### Φόρτωση του ntrboot (NDS)

Αυτή η μέθοδος απαιτεί την προσωρινή πρόσβαση σε ένα Nintendo DS ή Nintendo DS Lite που να είναι συμβατό με τη flashcart σας. Αυτή η μέθοδος χρησιμοποιεί τη flashcart για την εκτέλεση του αρχείου `.nds` του εργαλείου φόρτωσης του ntrboot στο NDS σας.

::: tip

Συνέχεια στη [Φόρτωση του ntrboot (NDS)](flashing-ntrboot-\(nds\))

:::

___

### Φόρτωση του ntrboot (DSi)

Αυτή η μέθοδος απαιτεί την προσωρινή πρόσβαση σε ένα Nintendo DSi που να είναι συμβατό με τη flashcart σας. Αυτή η μέθοδος χρησιμοποιεί τη flashcart για την εκτέλεση του αρχείου `.nds` του εργαλείου φόρτωσης του ntrboot στο DSi σας. Αυτό σημαίνει ότι η flashcart σας πρέπει να υποστηρίζει την εκκίνηση αρχείων `.nds` στην έκδοση συστήματος του DSi σας. Δείτε τον παραπάνω πίνακα flashcart για περισσότερες πληροφορίες.

::: tip

Συνέχεια στη [Φόρτωση του ntrboot (DSi)](flashing-ntrboot-\(dsi\))

:::
