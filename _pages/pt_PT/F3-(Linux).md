* * *

title: "F3 (Linux)" permalink: /f3-(linux).html lang: en_US ref: f3-(linux)

* * *

Esta página irá guiá-lo pelo processo de verificar o seu cartão SD por erros usando o programa F3. {: .notice}

Dependendo do tamanho do seu cartão SD e da velocidade do seu computador, este processo pode levar algumas horas! {: .notice--info}

Esta página é apenas para utilizadores de Linux. Se não tiver Linux, veja as páginas para [H2testw (windows)](h2testw-(windows)) ou [F3X (mac)](f3x-(mac)). {: .notice--info}

#### O que precisa

* A última versão do [F3](https://github.com/AltraMayor/f3/archive/v6.0.zip)

#### Instruções

  1. Extraia o ficheiro f3 `.zip`
  2. Faca `cd` até ao diretório do f3
  3. Corra `make` para compilar o F3
  4. Insert your SD card into your computer
  5. Mount your SD card
  6. Run `./f3write <your sd card mount point>`
  7. Wait until the process is complete. See below for an example output.
    
        $ ./f3write /media/michel/6135-3363/
        Free space: 29.71 GB
        Creating file 1.h2w ... OK!
        ...
        Creating file 30.h2w ... OK!
        Free space: 0.00 Byte
        Average Writing speed: 4.90 MB/s
        

  8. Run `./f3read <your sd card mount point>`

  9. Wait until the process is complete. See below for an example output.
    
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
        

If the test shows the result `Data LOST: 0.00 Byte (0 sectors)` your SD card is good and you can delete all `.h2w` files on the SD card {: .notice--success}

If the test shows any other results, your SD card may be corrupted or damaged and you may have to replace it! {: .notice--danger}

Return to [Get Started](get-started) {: .notice--primary}