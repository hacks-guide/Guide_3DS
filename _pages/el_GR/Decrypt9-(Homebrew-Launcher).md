* * *

title: "Decrypt9 (Homebrew Launcher)" permalink: /decrypt9-(homebrew-launcher).html lang: en_US ref: decrypt9-(homebrew-launcher)

* * *

Λόγο ενός σφάλματος, το safehax απαιτεί μια λειτουργική κασέτα οποιουδήποτε είδους (3DS, NDS, flashcard, κλπ) να βρίσκετε εισηγμένος έτσι ώστε να ολοκληρωθεί επιτυχώς. Ως προσωρινή λύση, χρήστες οι οποίοι βρίσκονται σε έκδοση ίση ή χαμηλότερη του 9.2.0, οι οποίοι δεν κατέχουν καμία κασέτα, μπορούν να αντιγράψουν το `Decrypt9WIP.3dsx` στον φάκελο `/3ds/` και να το τρέξουν απευθείας χωρίς κανένα hax. {: .notice--info}

#### Τι χρειάζεστε

* Την τελευταία έκδοση του [Decrypt9WIP](https://github.com/d0k3/Decrypt9WIP/releases/latest/)
* Την τελευταία έκδοση του [safehax+fasthax](https://gbatemp.net/attachments/safehax-fasthax-cb6a1bc-zip.73592/)

#### Οδηγείες

  1. Δημιουργήστε έναν φάκελο με το όνομα `files9` στην ρίζα της κάρτας SD σε περίπτωση που δεν υπάρχει ίδη
  2. Αντιγράψτε τα περιεχόμενα του safehax+fasthax`.zip` στην ρίζα της κάρτας SD, αντικαθιστώντας τα ήδη υπάρχοντα αρχεία
  3. Αντιγράψτε το `Decrypt9WIP.bin` από το Decrypt9WIP `.zip` στην ρίζα της κάρτας SD και μετονομάστε το `Decrypt9WIP.bin` σε `arm9.bin`
  4. Επανατοποθετήστε την κάρτα SD στο 3DS
  5. Εκκινήστε το Homebrew Launcher
  6. Εκκινήστε το safehax
  7. If the exploit was successful, you will have booted into Decrypt9

Continue to [2.1.0 ctrtransfer](2.1.0-ctrtransfer)  
{: .notice--primary}