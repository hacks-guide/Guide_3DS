# F3 (Linux)

## Required Reading

Αυτή είναι μια πρόσθετη ενότητα για τον έλεγχο την κάρτας SD για σφάλματα χρησιμοποιώντας το F3.

Ανάλογα με το μέγεθος της κάρτας SD και την ταχύτητα του υπολογιστή σας, αυτή η διαδικασία ενδέχεται να διαρκέσει πολλές ώρες!

Αυτή η σελίδα αφορά μόνο χρήστες Linux. Εάν δεν χρησιμοποιείτε Linux, δείτε τις σελίδες [H2testw (Windows)](h2testw-\(windows\)) ή [F3XSwift (Mac)](f3xswift-\(mac\)).

## What You Need

- The latest version of [F3](https://github.com/AltraMayor/f3/releases/tag/v8.0)

## Instructions

1. Αποσυμπιέστε το αρχείο `.zip` του f3
2. Μεταφερθείτε στον κατάλογο του f3 χρησιμοποιώντας την εντολή `cd`
3. Χρησιμοποιήστε την εντολή `make` για να συντάξετε το F3
4. Εισαγάγετε την κάρτα SD στον υπολογιστή σας
5. Προσαρτήστε την κάρτα SD σας
6. Εκτελέστε την εντολή `./f3read <σημείο προσάρτησης της κάρτας SD>`
7. Περιμένετε μέχρι να ολοκληρωθεί η διαδικασία. Δείτε παρακάτω ένα παράδειγμα αποτελέσματος.

```bash
$ ./f3write /media/michel/6135-3363/
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
```

1. Εκτελέστε την εντολή `./f3read <σημείο προσάρτησης της κάρτας SD>`
2. Περιμένετε μέχρι να ολοκληρωθεί η διαδικασία. Δείτε παρακάτω ένα παράδειγμα αποτελέσματος.

```bash
$ ./f3read /media/michel/6135-3363/
									SECTORS      ok/corrupted/changed/overwritten
Validating file 1.h2w ... 2097152/        0/      0/      0
...
Validating file 30.h2w ... 1491904/        0/      0/      0

	Data OK: 29.71 GB (62309312 sectors)
Data LOST: 0.00 Byte (0 sectors)
					Corrupted: 0.00 Byte (0 sectors)
	Slightly changed: 0.00 Byte (0 sectors)
				Overwritten: 0.00 Byte (0 sectors)
Average Reading speed: 9.42 MB/s
```

___

::: tip

Αν η δοκιμή δείξει το αποτέλεσμα `Data LOST: 0.00 Byte (0 sectors)`, η κάρτα SD σας είναι σε καλή κατάσταση και μπορείτε να διαγράψετε όλα τα αρχεία `.h2w` από αυτή.

:::

::: danger

Εάν η δοκιμή δείξει οποιοδήποτε άλλο αποτέλεσμα, η κάρτα SD σας ενδέχεται να έχει καταστραφεί ή φθαρεί και ίσως χρειαστεί να την αντικαταστήσετε!

:::

::: tip

Return to [Get Started](get-started)

:::
