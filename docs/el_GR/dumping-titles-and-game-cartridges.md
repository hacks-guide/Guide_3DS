# Αποτύπωση τίτλων και κασετών παιχνιδιών

::: info

Για υποστήριξη (στα αγγλικά) με το GodMode9, καθώς και για βοήθεια με τα script και τη λήψη ενημερώσεων και πληροφοριών, γίνετε μέλος του [GodMode9 στο Discord](https://discord.gg/BRcbvtFxX4).

:::

## Απαραίτητη ανάγνωση

Εκτός από τη δημιουργία και την επαναφορά αντιγράφων ασφαλείας της NAND, το GodMode9 μπορεί να αποτυπώνει (dump) εγκατεστημένους τίτλους σε ένα αρχείο εγκατάστασης `.cia`, να αποτυπώνει δεδομένα κασετών παιχνιδιών σε ένα αρχείο ROM `.3ds` και να εγκαθιστά απευθείας μια κασέτα παιχνιδιού στο σύστημα.

## Ενημέρωση του GodMode9

::: info

Αυτές οι οδηγίες αφορούν τη χρήση της έκδοσης 2.0.0 του GodMode9 ή νεότερης. Εάν διαθέτετε μια παλαιότερη έκδοση του GodMode9, ακολουθήστε αυτές τις οδηγίες για να το ενημερώσετε.

:::

### Τι χρειάζεστε

- Την πιο πρόσφατη έκδοση του [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (το αρχείο `.zip` του GodMode9)

### Οδηγίες

1. Απενεργοποιήστε την κονσόλα σας
2. Εισαγάγετε την κάρτα SD στον υπολογιστή σας
3. Αντιγράψτε το `GodMode9.firm` από το αρχείο `.zip` του GodMode9 στον φάκελο `/luma/payloads/` της κάρτας SD σας
4. Αντιγράψτε τον φάκελο `gm9` από το αρχείο `.zip` του GodMode9 στη ρίζα της κάρτας SD σας
5. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας

## Αποτύπωση κασέτας παιχνιδιού

::: info

Εισαγάγετε την κασέτα του παιχνιδιού που επιθυμείτε να αποτυπώσετε στην κονσόλα σας

- Οι κασέτες παιχνιδιών 3DS θα αποτυπωθούν σε μορφή `.3ds`
- Οι κασέτες παιχνιδιών NDS θα αποτυπωθούν σε μορφή `.nds`

:::

1. Κρατήστε πατημένο το (Start) και ταυτόχρονα, ενεργοποιήστε την κονσόλα σας. Αυτή η ενέργεια θα εκκινήσει το GodMode9
2. Μεταβείτε στο `[C:] GAMECART`
3. Ακολουθήστε τα κατάλληλα βήματα, ανάλογα με την κασέτα σας:
    - **Κασέτα παιχνιδιού 3DS:** Πατήστε το (A) στο `<TitleID>.trim.3ds` για να το επιλέξετε
    - **Κασέτα παιχνιδιού NDS:** Πατήστε το (A) στο `<TitleID>.nds` για να το επιλέξετε
        - Γενικά, δεν προτείνονται οι περικομμένες αποτυπώσεις (trimmed dumps) για παιχνίδια NDS, καθώς ενδέχεται να προκληθούν διάφορα ζητήματα κατά την εκτέλεση
4. Επιλέξτε «Copy to 0:/gm9/out»
5. Το μη εγκαταστάσιμο αρχείο με μορφοποίηση `.3ds` ή `.nds` θα εξαχθεί στον φάκελο `/gm9/out/` της κάρτας SD

## Εγκατάσταση κασέτας παιχνιδιού απευθείας στο σύστημα

::: info

Αυτό θα λειτουργήσει μόνο για παιχνίδια 3DS και δεν είναι δυνατή η εγκατάσταση μιας κασέτας παιχνιδιού NDS με τη μορφή τίτλου στο σύστημα.

:::

1. Κρατήστε πατημένο το (Start) και ταυτόχρονα, ενεργοποιήστε την κονσόλα σας. Αυτή η ενέργεια θα εκκινήσει το GodMode9
2. Μεταβείτε στο `[C:] GAMECART`
3. Πατήστε το (A) στο `[TitleID].trim.3ds` για να το επιλέξετε. Έπειτα, επιλέξτε «NCSD image options...» και τέλος, «Install game image»
4. Πατήστε το (A) για να ξεκλειδώσετε την εγγραφή στη SysNAND (lvl1) και έπειτα, εισαγάγετε τον συνδυασμό πλήκτρων που θα σας δοθεί
5. Μόλις ολοκληρωθεί η διαδικασία, το παιχνίδι σας θα εμφανιστεί στο μενού «HOME» ως εγκατεστημένος τίτλος.

## Αποτύπωση κασέτας παιχνιδιού 3DS σε .CIA

::: info

Αυτό θα πρέπει να χρησιμοποιηθεί μόνο εάν δεν λειτουργεί η [Εγκατάσταση κασέτας παιχνιδιού απευθείας στο σύστημα](#installing-a-game-cartridge-directly-to-the-system).

:::

1. Κρατήστε πατημένο το (Start) και ταυτόχρονα, ενεργοποιήστε την κονσόλα σας. Αυτή η ενέργεια θα εκκινήσει το GodMode9
2. Μεταβείτε στο `[C:] GAMECART`
3. Πατήστε το (A) στο `<TitleID>.trim.3ds` για να το επιλέξετε. Έπειτα, επιλέξτε «NCSD image options...» και τέλος, «Build CIA from file»
4. Το εγκαταστάσιμο αρχείο με μορφοποίηση `.cia` θα εξαχθεί στον φάκελο `/gm9/out/` της κάρτας SD

## Αποτύπωση εγκατεστημένου τίτλου

::: info

Αυτό επιτρέπει την αποτύπωση ψηφιακών τίτλων, είτε συστήματος είτε χρήστη, όπως αυτών που έχουν ληφθεί από το eShop.

:::

1. Κρατήστε πατημένο το (Start) και ταυτόχρονα, ενεργοποιήστε την κονσόλα σας. Αυτή η ενέργεια θα εκκινήσει το GodMode9
2. Πατήστε το (Home) για να εμφανιστεί το μενού ενεργειών
3. Επιλέξτε «Title manager»
4. Επιλέξτε ένα από τα ακόλουθα ανάλογα με τον τύπο του τίτλου που θέλετε να αποτυπώσετε
    - **Τίτλος που εγκαταστάθηκε από τον χρήστη**: `[A:] SD CARD`
    - **Τίτλος συστήματος/DSiWare**: `[1:] NAND / TWL`
5. Επιλέξτε τον τίτλο που επιθυμείτε να αποτυπώσετε
6. Επιλέξτε «Manage Title...»
7. Επιλέξτε «Build CIA (standard)»
8. Το εγκαταστάσιμο αρχείο με μορφοποίηση `.cia` θα εξαχθεί στον φάκελο `/gm9/out/` της κάρτας SD

## Αντίγραφο ασφαλείας αποθηκευμένων δεδομένων GBA της VC

::: info

Το παιχνίδι θα εξαχθεί στον φάκελο `/ gm9 / out /` της κάρτας SD σας με το όνομα `<TitleID>.gbavc.sav`.

:::

::: info

Για να προσδιορίσετε το Title ID (αναγνωριστικό τίτλου) ενός αρχείου `<TitleID>.gbavc.sav`, μπορείτε να δείτε μια λίστα με όλα τα παιχνίδια του συστήματος και τα αντίστοιχα Title ID, ως εξής: πατήστε το (Home) για να εμφανιστεί το μενού ενεργειών, επιλέξτε `Title manager` και τέλος, `[A:] SD CARD`.

:::

1. Ακολουθήστε την παρακάτω διαδικασία για να δημιουργήσετε αντίγραφο ασφαλείας των αποθηκευμένων δεδομένων για όποιο παιχνίδι GBA της VC επιθυμείτε:
    - Εκκινήστε το παιχνίδι GBA στη VC
    - Τερματίστε το παιχνίδι GBA
    - Απενεργοποιήστε την κονσόλα σας
    - Κρατήστε πατημένο το (Start) και ταυτόχρονα, ενεργοποιήστε την κονσόλα σας. Αυτή η ενέργεια θα εκκινήσει το GodMode9
    - Μεταβείτε στο `[S:] SYSNAND VIRTUAL`
    - Πατήστε το (A) στο 'agbsave.bin\` για να το επιλέξετε
    - Επιλέξτε «AGBSAVE options...»
    - Επιλέξτε «Dump GBA VC save»
    - Πατήστε το (A) για να συνεχίσετε
    - Πατήστε το (Start) για να επανεκκινήσετε την κονσόλα σας

## Επαναφορά αποθηκευμένων δεδομένων GBA της VC

::: info

Για να προσδιορίσετε το Title ID (αναγνωριστικό τίτλου) ενός αρχείου `<TitleID>.gbavc.sav`, μπορείτε να δείτε μια λίστα με όλα τα παιχνίδια του συστήματος και τα αντίστοιχα Title ID, ως εξής: πατήστε το (Home) για να εμφανιστεί το μενού ενεργειών, επιλέξτε `Title manager` και τέλος, `[A:] SD CARD`.

:::

1. Ακολουθήστε την παρακάτω διαδικασία για να επαναφέρετε τα αποθηκευμένα δεδομένα για όποιο παιχνίδι GBA της VC επιθυμείτε:
    - Εκκινήστε το παιχνίδι GBA στη VC
    - Τερματίστε το παιχνίδι GBA
    - Απενεργοποιήστε την κονσόλα σας
    - Κρατήστε πατημένο το (Start) και ταυτόχρονα, ενεργοποιήστε την κονσόλα σας. Αυτή η ενέργεια θα εκκινήσει το GodMode9
    - Μεταβείτε στο `[0:] SDCARD` -> `gm9` -> `out`
    - Πατήστε το (Y) στο αρχείο `<TitleID>.gbavc.sav` που επιθυμείτε να επαναφέρετε για να το αντιγράψετε
    - Πατήστε το (B) για να επιστρέψετε στο κύριο μενού
    - Μεταβείτε στο `[S:] SYSNAND VIRTUAL`
    - Πατήστε το (A) στο 'agbsave.bin\` για να το επιλέξετε
    - Επιλέξτε «AGBSAVE options...»
    - Επιλέξτε «Inject GBA VC save»
    - Πατήστε το (A) για να συνεχίσετε
    - Πατήστε το (Start) για να επανεκκινήσετε την κονσόλα σας
    - Εκκινήστε το παιχνίδι GBA στη VC
    - Τερματίστε το παιχνίδι GBA

## Κρυπτογράφηση/αποκρυπτογράφηση αρχείου .CIA

::: info

Για λόγους οργάνωσης, αντιγράψτε κάθε αρχείο `.cia` που επιθυμείτε να (απο)κρυπτογραφήσετε στον φάκελο `/ cias /` της κάρτας SD σας

:::

1. Κρατήστε πατημένο το (Start) και ταυτόχρονα, ενεργοποιήστε την κονσόλα σας. Αυτή η ενέργεια θα εκκινήσει το GodMode9
2. Μεταβείτε στο `[0:] SDCARD` -> `cias`
3. Πατήστε το (Α) στο αρχείο `.cia` για να το επιλέξετε και έπειτα, επιλέξτε «CIA image options...»
4. Επιλέξτε την κατάλληλη εντολή για να πραγματοποιηθεί η επιθυμητή λειτουργία:
    - **Encrypt to 0:/gm9/out:** Δημιουργία κρυπτογραφημένου αντιγράφου του επιλεγμένου αρχείου `.cia` στον φάκελο `/gm9/out/` της κάρτας SD σας
    - **Decrypt to 0:/gm9/out:** Δημιουργία αποκρυπτογραφημένου αντιγράφου του επιλεγμένου αρχείου `.cia` στον φάκελο `/gm9/out/` της κάρτας SD σας
    - **Encrypt inplace:** Αντικατάσταση του επιλεγμένου αρχείου `.cia` με μια κρυπτογραφημένη έκδοση
    - **Decrypt inplace:** Αντικατάσταση του επιλεγμένου αρχείου `.cia` με μια αποκρυπτογραφημένη έκδοση
5. Το (απο)κρυπτογραφημένο αρχείο `.cia` θα εξαχθεί στην επιθυμητή τοποθεσία
