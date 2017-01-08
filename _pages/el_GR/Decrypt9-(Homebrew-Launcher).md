* * *

title: "Decrypt9 (Homebrew Launcher)" permalink: /decrypt9-(homebrew-launcher).html lang: en_US ref: decrypt9-(homebrew-launcher)

* * *

Λόγο ενός σφάλματος, το safehax απαιτεί μια λειτουργική κασέτα οποιουδήποτε είδους (3DS, NDS, flashcard, κλπ) να βρίσκετε εισηγμένος έτσι ώστε να ολοκληρωθεί επιτυχώς. Ως προσωρινή λύση, χρήστες οι οποίοι βρίσκονται σε έκδοση ίση ή χαμηλότερη του 9.2.0, οι οποίοι δεν κατέχουν καμία κασέτα, μπορούν να αντιγράψουν το `Decrypt9WIP.3dsx` στον φάκελο `/3ds/` και να το τρέξουν απευθείας χωρίς κανένα hax. {: .notice--info}

#### Τι χρειάζεστε

* Την τελευταία έκδοση του [Decrypt9WIP](https://github.com/d0k3/Decrypt9WIP/releases/latest/)
* Την τελευταία έκδοση του [safehax+fasthax](https://gbatemp.net/attachments/safehax-fasthax-cb6a1bc-zip.73592/)

#### Οδηγείες

  1. Create a folder named `files9` on the root of your SD card if it does not already exist
  2. Copy and merge the contents of the safehax+fasthax `.zip` to root of your SD card, overwrite existing files
  3. Copy `Decrypt9WIP.bin` from the Decrypt9WIP `.zip` to the root of your SD card and rename `Decrypt9WIP.bin` to `arm9.bin`
  4. Reinsert your SD card into your 3DS
  5. Enter the homebrew launcher
  6. Launch safehax
  7. If the exploit was successful, you will have booted into Decrypt9

Continue to [2.1.0 ctrtransfer](2.1.0-ctrtransfer)  
{: .notice--primary}