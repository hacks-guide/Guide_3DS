
Κατά τη δημιουργία του ID1 του MSET9 στα Windows 10 και νεότερα, το script ενδέχεται να αποτύχει με το εξής σφάλμα:

![Error 18](/images/screenshots/troubleshooting/234.png)

Αυτό οφείλεται στην υποστήριξη beta για UTF-8 των Windows. Πρέπει να την απενεργοποιήσετε για την εκτέλεση του MSET9:

1. Πατήστε το **πλήκτρο Windows + R** για να ανοίξει το παράθυρο διαλόγου «Εκτέλεση», πληκτρολογήστε `intl.cpl` και κάντε κλικ στο «OK»

    ![Run](/images/screenshots/troubleshooting/234run.png)
    {: .notice--info}

1. Κάντε κλικ στο `Διαχείριση`, έπειτα στο `Αλλαγή τοπικών ρυθμίσεων συστήματος`

    ![Region](/images/screenshots/troubleshooting/234region.png)
    {: .notice--info}
    ![Administrative](/images/screenshots/troubleshooting/234administrative.png)
    {: .notice--info}

1. Καταργήστε την επιλογή `Beta: Χρήση Unicode UTF-8 για διεθνή υποστήριξη γλώσσας` και κάντε κλικ στο «OK»

    ![Locale](/images/screenshots/troubleshooting/234locale.png)
    {: .notice--info}

1. Κάντε κλικ στο «Επανεκκίνηση τώρα»

    ![Restart](/images/screenshots/troubleshooting/234restart.png)
    {: .notice--info}

Αφού επανεκκινηθεί ο υπολογιστής σας, δοκιμάστε ξανά να δημιουργήσετε το ID1 του MSET9.
