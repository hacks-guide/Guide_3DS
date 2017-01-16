* * *

title: "OTP Info" permalink: /otp-info.html lang: en_US ref: otp-info

* * *

O OTP é uma região 0x100 byte de dados aparentemente aleatórios no endereço 0x10012000. Presume-se que chaves exclusivas do console são derivadas desta região, embora o método exato seja atualmente desconhecido. É provável que nesta região estejam armazenados os dados exclusivos do console que são descriptografados pelo bootrom, mas nós não saberemos como isso é feito até que alguém obtenha uma cópia do bootrom todo. Atualmente não se sabe de ninguém que tenha obtido uma cópia bem sucedida do bootrom protegido.

Antes da versão 3.0.0-X, a região 0x10012000 (o OTP) foi deixada desprotegida e podia ser dumpada por um invasor com permissões suficientes (execução de código arm9).

Depois da versão 3.0.0-X, a Nintendo mudou a segurança do sistema a fim de bloquear esta região utilizando o registrador CFG_SYSPROT9, que também bloqueia o bootloader e é setado extremamente cedo no boot, muito antes de podermos obter execução de código. Esse registrador só pode ser setado exatamente uma vez e não pode ser desligado até que a unidade esteja totalmente desligada e, portanto, é impossível dumpar o OTP completo sem estar em uma versão abaixo de 3.0.0-X.

Existe, no entanto, um método para dumpar o hash do OTP na versão 9.6.0-X. Como o Kernel9Loader não limpa o registro SHA_HASH depois de ter sido usado, o dump do SHA_HASH dará o hash do OTP que foi entregue ao Kernel9 pelo Kernel9Loader. Além disso, há uma vulnerabilidade de longa data em que uma reinicialização MCU causada pelo i2c não limpa a RAM como esperado.

Isso permite um ataque baseado em hardware onde dados arbitrários são gravados no nand_sector96 + 0x10 em um backup SysNAND e regravar de volta para o dispositivo. Em seguida, ligamos o i2c para a reinicialização do MCU em nosso comando, escrevemos um payload (que escreve a região 0x1000A040 - 0x1000A060 em um arquivo no cartão SD) para a memória arm9 em algum lugar, preencheremos toda a memória com um NOP seguido de uma instrução JMP apontando para o payload. Podemos então fazer um MCU reboot repetidamente (incrementando de 1 em 1 o nand_sector96 + 0x10) até que o Kernel9Loader pule para o payload por acaso.

Devido à complexidade e ao hardware adicional envolvido no método descrito acima, decidi limitar o escopo deste guia estritamente à abordagem baseada em software de downgrade para uma versão abaixo de 3.0.0-X. A versão 2.1.0-X foi selecionada porque é a única versão abaixo de 3.0.0-X que contém uma versão de navegador totalmente vulnerável (2.0.0-X tem um navegador parcialmente vulnerável, mas não funciona por outras razões).

Este processo envolve regravar o seu CTRNAND para 2.1.0-4. Isso é feito através da instalação de uma imagem CTRNAND pronta que contém a versão 2.1.0, copiando seus arquivos específicos do console (como `moveable.sed` e `SecureInfo_A`) para ele, em seguida, corrigindo o CMACS do banco de dados de títulos. No New 3DS, o método também troca o slot de criptografia do CTRNAND e instala um cabeçalho NCSD do Old 3DS na NAND, permitindo que ele inicialize o software 2.1.0 exclusivo do Old 3DS.