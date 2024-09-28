Κατά τη δημιουργία του ID1 του MSET9 στα Windows 10 και νεότερα, το script ενδέχεται να αποτύχει με το εξής σφάλμα:

![Error 18](/images/screenshots/troubleshooting/234.png)

Αυτό οφείλεται στην υποστήριξη beta για UTF-8 των Windows. Πρέπει να την απενεργοποιήσετε για την εκτέλεση του MSET9:

1. Hit **Windows Key + R** to open up the Run dialogue, type `intl.cpl` then click "OK"
   ::: info

   ![Run](/images/screenshots/troubleshooting/234run.png)

   :::

2. Κάντε κλικ στο `Διαχείριση`, έπειτα στο `Αλλαγή τοπικών ρυθμίσεων συστήματος`

   ::: info

   ![Region](/images/screenshots/troubleshooting/234region.png)

   :::

   ::: info

   ![Administrative](/images/screenshots/troubleshooting/234administrative.png)

   :::

3. Καταργήστε την επιλογή `Beta: Χρήση Unicode UTF-8 για διεθνή υποστήριξη γλώσσας` και κάντε κλικ στο «OK»

   ::: info

   ![Locale](/images/screenshots/troubleshooting/234locale.png)

   :::

4. Κάντε κλικ στο «Επανεκκίνηση τώρα»

   ::: info

   ![Restart](/images/screenshots/troubleshooting/234restart.png)

   :::

Αφού επανεκκινηθεί ο υπολογιστής σας, δοκιμάστε ξανά να δημιουργήσετε το ID1 του MSET9.
