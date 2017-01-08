* * *

title: "OTP Info" permalink: /otp-info.html lang: en_US ref: otp-info

* * *

L'OTP est une région de 0x100 octets contenant des données apparemment aléatoires à l'adresse 0x10012000. Il est présumé que les clés uniques à chaque console sont dérivées de cette région, même si nous ne savons pas exactement comment actuellement. Cette région est sans doute le "magasin" ou toute les données unique à chaque console sont stocké et celle si sont décrypté par le bootrom, mais nous ne savons pas exactement comment cela ce fait tant que quelqu'un n'a pas dumpé le bootrom entier (qui est protégé). Nous ne savons pas pour l'instant si quelqu'un à réussis à dumpé le bootrom entier.

Avant la version 3.0.0-X, la région 0x10012000 (l'OTP) est resté sans défenses et pouvait être dumper par un attaquant qui aurait les permissions nécessaires (exécution de code arm9).

Après la version 3.0.0-X, Nintendo ont verouiller cette région à l'aide du registre CFG_SYSPROT9, qui est aussi utilisé pour vérouiller le bootloader et celui-ci est définis très tôt durant le démarrage,bien avant qu'on puisse obtenir de l'exécution de code. This register can be set exactly once, and cannot be switched off until the unit is fully powered off, and therefore it is impossible to dump the full OTP without a version below 3.0.0-X.

There is, however, a method to dump the hash of the OTP on version 9.6.0-X. Because Kernel9Loader does not clear the SHA_HASH register after it has been used, dumping the SHA_HASH will give the hash of the OTP which was handed over to Kernel9 from Kernel9Loader. In addition, there is a long standing vulnerability where an MCU reboot caused by the i2c will not clear RAM like it's supposed to.

This allows for a hardware based attack where arbitrary data is written to nand_sector96+0x10 in a SysNAND backup and flashed to the device. Afterwards we wire the i2c to MCU reboot on our command, write a payload (which will write 0x1000A040 - 0x1000A060 to a file on the SD card) to arm9 memory somewhere, fill all memory with a NOP sled followed by a JMP instruction pointing to the payload. We can then MCU reboot repeatedly (incrementing nand_sector96+0x10 by 1 each time) until the Kernel9Loader jumps to the payload by random chance.

Because of the complexity and extra hardware involved in the method described above, I have decided to limit the scope of this guide strictly to the software based approach of downgrading to a version below 3.0.0-X. Version 2.1.0-X was selected because it is the only version below 3.0.0-X that contains a fully exploitable browser version (2.0.0-X has a partially exploitable browser, but it won't work for other reasons).

This process involves flashing your CTRNAND to 2.1.0-4. This is accomplished by installing a premade CTRNAND image containing 2.1.0, copying your console specific files (such as `moveable.sed` and `SecureInfo_A`) to it, then fixing the title database CMACS. On New 3DS, it also swaps CTRNAND's encryption slot and installs an Old 3DS NCSD header to NAND, allowing it to boot the Old 3DS only 2.1.0 software.