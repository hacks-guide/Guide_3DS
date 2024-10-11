# Troubleshooting (super-skaterhax)

This page offers troubleshooting advice for commonly encountered issues with the "Installing boot9strap (super-skaterhax)" page. Εάν δεν μπορείτε να διορθώσετε το ζήτημά σας με τις συμβουλές αυτής της σελίδας, γίνετε μέλος του [Nintendo Homebrew στο Discord](https://discord.gg/MWxPgEp) και περιγράψτε το πρόβλημά σας, καθώς και όλες τις λύσεις που έχετε ήδη δοκιμάσει.

::: warning

These instructions are only valid for the "Installing boot9strap (super-skaterhax)" page. If you are using **anything other than** a **New 3DS** on version **11.15.0 through 11.17.0**, you should follow [troubleshooting instructions for Installing boot9strap (SSLoth-Browser)](troubleshooting-ssloth-browser) instead.

:::

## Issues with super-skaterhax

:::details «An error has occurred. Please save your data in any software currently in use, then restart the system.»

Εάν δεν αναβοσβήσει κάποιο χρώμα μετά το πάτημα του «GO GO!»:

- Βεβαιωθείτε ότι έχετε ορίσει σωστά την ημερομηνία και την [περιοχή](/images/screenshots/skater/skater-lang.png) του συστήματός σας
- Βεβαιωθείτε ότι δεν υπάρχουν άλλες ανοικτές καρτέλες στο πρόγραμμα περιήγησης, κάντε επανεκκίνηση του προγράμματος περιήγησης και δοκιμάστε ξανά το exploit

Εάν η οθόνη αναβοσβήσει με χρώματα και έπειτα, «παγώσει» ή διακοπεί απρόσμενα η λειτουργία:

- Βεβαιωθείτε ότι διαθέτετε το σωστό αντίγραφο των `arm11code.bin` και `browserhax_hblauncher_ropbin_payload.bin` για την έκδοση και την περιοχή της κονσόλας σας
- Δοκιμάστε να επαναφέρετε τα δεδομένα του προγράμματος περιήγησης:
  1. Ανοίξτε την εφαρμογή «Internet Browser» και έπειτα, μεταβείτε στις ρυθμίσεις της
  2. Μεταβείτε στο κάτω μέρος και επιλέξτε «Reset Save Data» (ή «Initialize Save Data» ή «Clear All Save Data»)
  3. Δοκιμάστε ξανά το exploit
- Δοκιμάστε να αλλάξετε τη γλώσσα συστήματος σε κάποια άλλη εκτός της τρέχουσας

:::

:::: details «An error has occurred. Hold down the POWER button to turn off the power...» (μαύρη οθόνη με κείμενο)

Το αρχείο `arm11code.bin` απουσιάζει ή βρίσκεται σε λάθος τοποθεσία. Βεβαιωθείτε ότι έχετε αντιγράψει τα αρχεία της [πιο πρόσφατης έκδοσης του super-skaterhax](https://github.com/zoogie/super-skaterhax/releases/latest) για την περιοχή και την έκδοσή σας στη ρίζα της κάρτας SD σας (όχι μέσα σε κάποιο φάκελο).

::: info

![](/images/screenshots/skaterhax/skater-root-layout.png)

:::

::::

:::details Σφάλμα «An exception occured» ή εμφανίζεται το μήνυμα «DLL_HEAP_INFORMATION» όταν πατάω το «GO! GO!»

Αυτό δείχνει ότι πιθανότατα διαθέτετε ήδη custom firmware. Θα πρέπει να [κάνετε έλεγχο για CFW](checking-for-cfw).

:::

<!--@include: ./_include/troubleshooting-sb9si-common.md -->

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

Go back to [Installing boot9strap (super-skaterhax)](installing-boot9strap-\(super-skaterhax\))

:::

<!--@include: ./_include/troubleshooting-return.md -->