* * *

title: "OTP Info" permalink: /otp-info.html lang: en_US ref: otp-info

* * *

El OTP es una región de datos 0x100 de aparentemente datos aleatorios en la dirección 0x10012000. Se presume que las claves únicas de la consola derivan de esta región, aunque se desconoce en la actualidad exactamente cómo. La región es probablemente el almacenamiento de datos únicos de la consola que es descifrada por el bootrom, pero no sabemos cómo eso es hecho hasta que alguien vuelque el bootrom (totalmente protegido). Hasta la fecha, se desconoce si alguien ha volcado con éxito el bootrom protegido.

Antes de la versión 3.0.0-X, la región 0x10012000 (OTP) estaba desprotegida y podía ser volcada por un atacante con suficientes permisos (ejecución de código arm9).

Después de la versión 3.0.0-X, Nintendo bloqueó esta región mediante el registro CFG_SYSPROT9, que también bloquea el gestor de arranque y se establece muy temprano en la inicialización, mucho antes de que ser capaces de obtener la ejecución de código. Este registro puede ser establecido exactamente una vez y no se puede cambiar hasta que la unidad esté completamente apagada, y por lo tanto es imposible hacer un volcado del OTP completo sin una versión por debajo de 3.0.0-X.

Sin embargo, hay un método para volcar el hash del OTP en la versión 9.6.0-X. A causa de que Kernel9Loader no borra el registro SHA_HASH tras ser utilizado, volcar SHA_HASH dará el hash del OTP que fue entregado a Kernel9 desde Kernel9Loader. Además, existe una vulnerabilidad prolongada donde un reinicio MCU causado por i2c no borra RAM como se supone.

Esto permito un ataque de hardware donde datos arbitrarios son escritos al nand_sector96+0x10 en una copia de seguridad de SysNand y flasheada al dispositivo. Afterwards we wire the i2c to MCU reboot on our command, write a payload (which will write 0x1000A040 - 0x1000A060 to a file on the SD card) to arm9 memory somewhere, fill all memory with a NOP sled followed by a JMP instruction pointing to the payload. We can then MCU reboot repeatedly (incrementing nand_sector96+0x10 by 1 each time) until the Kernel9Loader jumps to the payload by random chance.

Because of the complexity and extra hardware involved in the method described above, I have decided to limit the scope of this guide strictly to the software based approach of downgrading to a version below 3.0.0-X. Version 2.1.0-X was selected because it is the only version below 3.0.0-X that contains a fully exploitable browser version (2.0.0-X has a partially exploitable browser, but it won't work for other reasons).

This process involves flashing your CTRNAND to 2.1.0-4. This is accomplished by installing a premade CTRNAND image containing 2.1.0, copying your console specific files (such as `moveable.sed` and `SecureInfo_A`) to it, then fixing the title database CMACS. On New 3DS, it also swaps CTRNAND's encryption slot and installs an Old 3DS NCSD header to NAND, allowing it to boot the Old 3DS only 2.1.0 software.