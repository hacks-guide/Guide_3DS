# Dumping Titles and Game Cartridges

::: info

Για υποστήριξη (στα αγγλικά) με το GodMode9, καθώς και για βοήθεια με τα script και τη λήψη ενημερώσεων και πληροφοριών, γίνετε μέλος του [GodMode9 στο Discord](https://discord.gg/BRcbvtFxX4).

:::

## Required Reading

Εκτός από τη δημιουργία και την επαναφορά αντιγράφων ασφαλείας NAND, το GodMode9 μπορεί να αποτυπώνει (dump) εγκατεστημένους τίτλους σε ένα αρχείο εγκατάστασης `.cia`, να αποτυπώνει δεδομένα κασετών παιχνιδιών σε ένα αρχείο ROM `.3ds` και να εγκαθιστά απευθείας μια κασέτα παιχνιδιού στο σύστημα.

## Updating GodMode9

::: info

Αυτές οι οδηγίες αφορούν τη χρήση της έκδοσης 2.0.0 του GodMode9 ή νεότερης. Εάν διαθέτετε κάποια παλαιότερη έκδοση του GodMode9, ακολουθήστε αυτές τις οδηγίες για να το ενημερώσετε.

:::

### What You Need

- The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

### Instructions

1. Απενεργοποιήστε την κονσόλα σας
2. Εισαγάγετε την κάρτα SD στον υπολογιστή σας
3. Αντιγράψτε το `GodMode9.firm` από το αρχείο `.zip` του GodMode9 στον φάκελο `/luma/payloads/` της κάρτας SD σας
4. Αντιγράψτε τον φάκελο `gm9` από το αρχείο `.zip` του GodMode9 στη ρίζα της κάρτας SD σας
5. Εισαγάγετε ξανά την κάρτα SD στην κονσόλα σας

## Dumping a Game Cartridge

::: info

Εισαγάγετε την κασέτα του παιχνιδιού που επιθυμείτε να αποτυπώσετε στην κονσόλα σας

- 3DS game cartridges will be dumped to a `.3ds` format
- NDS game cartridges will be dumped to a `.nds` format

:::

1. Κρατήστε πατημένο το (Start) και ταυτόχρονα, ενεργοποιήστε την κονσόλα σας. Αυτή η ενέργεια θα εκκινήσει το GodMode9
2. Μεταβείτε στο `[C:] GAMECART`
3. Ακολουθήστε τα κατάλληλα βήματα, ανάλογα με την κασέτα σας:
   - **3DS Game Cartridge:** Press (A) on `[TitleID].trim.3ds` to select it
   - **NDS Game Cartridge:** Press (A) on `[TitleID].nds` to select it
     - Trimmed dumps are not recommended for NDS games in general, as they can cause various playback issues
4. Επιλέξτε «Copy to 0:/gm9/out»
5. Το μη εγκαταστάσιμο αρχείο με μορφοποίηση `.3ds` ή `.nds` θα εξαχθεί στον φάκελο `/gm9/out/` της κάρτας SD

## Installing a Game Cartridge Directly to the System

::: info

Αυτό θα λειτουργήσει μόνο για παιχνίδια 3DS και δεν είναι δυνατή η εγκατάσταση μιας κασέτας παιχνιδιού NDS με τη μορφή τίτλου στο σύστημα.

:::

1. Κρατήστε πατημένο το (Start) και ταυτόχρονα, ενεργοποιήστε την κονσόλα σας. Αυτή η ενέργεια θα εκκινήσει το GodMode9
2. Μεταβείτε στο `[C:] GAMECART`
3. Πατήστε το (A) στο `[TitleID].trim.3ds` για να το επιλέξετε. Έπειτα, επιλέξτε «NCSD image options...» και τέλος, «Install game image»
4. Πατήστε το (A) για να ξεκλειδώσετε την εγγραφή στη SysNAND (lvl1) και έπειτα, εισαγάγετε τον συνδυασμό πλήκτρων που θα σας δοθεί
5. Μόλις ολοκληρωθεί η διαδικασία, το παιχνίδι σας θα εμφανιστεί στο μενού «HOME» ως εγκατεστημένος τίτλος.

## Dumping a 3DS Game Cartridge to .CIA

::: info

Αυτό θα πρέπει να χρησιμοποιηθεί μόνο εάν δεν λειτουργεί η [Εγκατάσταση κασέτας παιχνιδιού απευθείας στο σύστημα](#installing-a-game-cartridge-directly-to-the-system).

:::

1. Κρατήστε πατημένο το (Start) και ταυτόχρονα, ενεργοποιήστε την κονσόλα σας. Αυτή η ενέργεια θα εκκινήσει το GodMode9
2. Μεταβείτε στο `[C:] GAMECART`
3. Πατήστε το (A) στο `[TitleID].trim.3ds` για να το επιλέξετε. Έπειτα, επιλέξτε «NCSD image options...» και τέλος, «Build CIA from file»
4. Το εγκαταστάσιμο αρχείο με μορφοποίηση `.cia` θα εξαχθεί στον φάκελο `/gm9/out/` της κάρτας SD

## Dumping an Installed Title

::: info

Αυτό επιτρέπει την αποτύπωση ψηφιακών τίτλων, είτε συστήματος είτε χρήστη, όπως αυτών που έχουν ληφθεί από το eShop.

:::

1. Κρατήστε πατημένο το (Start) και ταυτόχρονα, ενεργοποιήστε την κονσόλα σας. Αυτή η ενέργεια θα εκκινήσει το GodMode9
2. Πατήστε το (Home) για να εμφανιστεί το μενού ενεργειών
3. Επιλέξτε «Title manager»
4. Επιλέξτε ένα από τα ακόλουθα ανάλογα με τον τύπο του τίτλου που θέλετε να αποτυπώσετε
   - **User Installed Title**: `[A:] SD CARD`
   - **System Title / DSiWare**: `[1:] NAND / TWL`
5. Επιλέξτε τον τίτλο που επιθυμείτε να αποτυπώσετε
6. Επιλέξτε «Manage Title...»
7. Επιλέξτε «Build CIA (standard)»
8. Το εγκαταστάσιμο αρχείο με μορφοποίηση `.cia` θα εξαχθεί στον φάκελο `/gm9/out/` της κάρτας SD

## Backup GBA VC Saves

::: info

Το παιχνίδι θα εξαχθεί στον φάκελο `/ gm9 / out /` της κάρτας SD σας με το όνομα `<TitleID>.gbavc.sav`.

:::

::: info

Για να προσδιορίσετε το Title ID (αναγνωριστικό τίτλου) ενός αρχείου `<TitleID>.gbavc.sav`, μπορείτε να δείτε μια λίστα με όλα τα παιχνίδια του συστήματος και τα αντίστοιχα Title ID, ως εξής: πατήστε το (Home) για να εμφανιστεί το μενού ενεργειών, επιλέξτε `Title manager` και τέλος, `[A:] SD CARD`.

:::

1. Ακολουθήστε την παρακάτω διαδικασία για να δημιουργήσετε αντίγραφο ασφαλείας των αποθηκευμένων δεδομένων για όποιο παιχνίδι GBA της VC επιθυμείτε:
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Απενεργοποιήστε την κονσόλα σας
   - Κρατήστε πατημένο το (Start) και ταυτόχρονα, ενεργοποιήστε την κονσόλα σας. Αυτή η ενέργεια θα εκκινήσει το GodMode9
   - Μεταβείτε στο `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Dump GBA VC save"
   - Πατήστε το (A) για να συνεχίσετε
   - Πατήστε το (Start) για να επανεκκινήσετε την κονσόλα σας

## Restore GBA VC Saves

::: info

Για να προσδιορίσετε το Title ID (αναγνωριστικό τίτλου) ενός αρχείου `<TitleID>.gbavc.sav`, μπορείτε να δείτε μια λίστα με όλα τα παιχνίδια του συστήματος και τα αντίστοιχα Title ID, ως εξής: πατήστε το (Home) για να εμφανιστεί το μενού ενεργειών, επιλέξτε `Title manager` και τέλος, `[A:] SD CARD`.

:::

1. Ακολουθήστε την παρακάτω διαδικασία για να επαναφέρετε τα αποθηκευμένα δεδομένα για όποιο παιχνίδι GBA της VC επιθυμείτε:
   - Launch the GBA VC game
   - Exit the GBA VC game
   - Απενεργοποιήστε την κονσόλα σας
   - Κρατήστε πατημένο το (Start) και ταυτόχρονα, ενεργοποιήστε την κονσόλα σας. Αυτή η ενέργεια θα εκκινήσει το GodMode9
   - Μεταβείτε στο `[0:] SDCARD` -> `gm9` -> `out`
   - Press (Y) on the `<TitleID>.gbavc.sav` file you wish to restore to copy it
   - Πατήστε το (B) για να επιστρέψετε στο κύριο μενού
   - Μεταβείτε στο `[S:] SYSNAND VIRTUAL`
   - Press (A) on `agbsave.bin` to select it
   - Select "AGBSAVE options..."
   - Select "Inject GBA VC save"
   - Πατήστε το (A) για να συνεχίσετε
   - Πατήστε το (Start) για να επανεκκινήσετε την κονσόλα σας
   - Launch the GBA VC game
   - Exit the GBA VC game

## Encrypting / Decrypting a .CIA file

::: info

Για λόγους οργάνωσης, αντιγράψτε κάθε αρχείο `.cia` που επιθυμείτε να (απο)κρυπτογραφήσετε στον φάκελο `/ cias /` της κάρτας SD σας

:::

1. Κρατήστε πατημένο το (Start) και ταυτόχρονα, ενεργοποιήστε την κονσόλα σας. Αυτή η ενέργεια θα εκκινήσει το GodMode9
2. Μεταβείτε στο `[0:] SDCARD` -> `cias`
3. Πατήστε το (Α) στο αρχείο `.cia` για να το επιλέξετε και έπειτα, επιλέξτε «CIA image options...»
4. Επιλέξτε την κατάλληλη εντολή για να πραγματοποιηθεί η επιθυμητή λειτουργία:
   - **Encrypt to 0:/gm9/out:** Create an encrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
   - **Decrypt to 0:/gm9/out:** Create a decrypted copy of the selected `.cia` file in the `/gm9/out/` folder on your SD card
   - **Encrypt inplace:** Replace the selected `.cia` file with an encrypted version
   - **Decrypt inplace:** Replace the selected `.cia` file with a decrypted version
5. Το (απο)κρυπτογραφημένο αρχείο `.cia` θα εξαχθεί στην επιθυμητή τοποθεσία
