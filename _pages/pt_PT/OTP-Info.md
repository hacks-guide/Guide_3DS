* * *

title: "OTP Info" permalink: /otp-info.html lang: en_US ref: otp-info

* * *

O OTP é uma região de 0x100 bytes de dados aparentemente aleatórios localizados no endereço 0x10012000. Presume-se que as chaves únicas à consola derivam desta região, embora de momento ainda não se saiba exatamente como. Essa região é provavelmente o sítio onde se encontram os dados únicos à consola que são desencriptados pelo bootrom. No entanto, não sabemos como isso é feito até que alguém consiga extrair a bootrom totalmente protegida. Até ao momento, não se sabe se alguém já conseguiu extrair a bootrom protegida.

Antes da versão 3.0.0-X, a região 0x10012000 (o OTP) estava desprotegida e podia ser extraída por um atacante com permissões suficientes (execução de código no arm9).

A partir da versão 3.0.0-X, a Nintendo decidiu bloquear esta região ao utilizar o registo CFG_SYSPROT9, que também bloqueia o bootloader, e isto é feito extremamente cedo ao ligar a consola, muito antes de conseguirmos executar código. Este registo só pode ser feito exatamente uma vez, e não pode ser desativado até que a consola se desligue completamente, e por isso é impossível extrair o OTP inteiro sem uma versão inferior a 3.0.0-X.

Existe, no entanto, uma maneira de extrair o hash do OTP na versão 9.6.0-X. Because Kernel9Loader does not clear the SHA_HASH register after it has been used, dumping the SHA_HASH will give the hash of the OTP which was handed over to Kernel9 from Kernel9Loader. In addition, there is a long standing vulnerability where an MCU reboot caused by the i2c will not clear RAM like it's supposed to.

This allows for a hardware based attack where arbitrary data is written to nand_sector96+0x10 in a SysNAND backup and flashed to the device. Afterwards we wire the i2c to MCU reboot on our command, write a payload (which will write 0x1000A040 - 0x1000A060 to a file on the SD card) to arm9 memory somewhere, fill all memory with a NOP sled followed by a JMP instruction pointing to the payload. We can then MCU reboot repeatedly (incrementing nand_sector96+0x10 by 1 each time) until the Kernel9Loader jumps to the payload by random chance.

Because of the complexity and extra hardware involved in the method described above, I have decided to limit the scope of this guide strictly to the software based approach of downgrading to a version below 3.0.0-X. Version 2.1.0-X was selected because it is the only version below 3.0.0-X that contains a fully exploitable browser version (2.0.0-X has a partially exploitable browser, but it won't work for other reasons).

This process involves flashing your CTRNAND to 2.1.0-4. This is accomplished by installing a premade CTRNAND image containing 2.1.0, copying your console specific files (such as `moveable.sed` and `SecureInfo_A`) to it, then fixing the title database CMACS. On New 3DS, it also swaps CTRNAND's encryption slot and installs an Old 3DS NCSD header to NAND, allowing it to boot the Old 3DS only 2.1.0 software.