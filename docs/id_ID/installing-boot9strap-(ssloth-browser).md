# Installing boot9strap (SSLoth-Browser)

:::details Perincian Teknis (opsional)

In order to exploit the Browser application, we need to bypass the browser version check, which is designed to disallow the use of the browser without updating to the latest system version.

A public proxy server is available, which, with the help of the SSLoth exploit, can bypass this check.

Once the bypass is active, an exploit webpage will be accessible which will do the rest of the job.

For technical details on the exploits that you will be using on this page, see [here](https://github.com/MrNbaYoh/3ds-ssloth) (SSLoth) and [here](https://github.com/TuxSH/universal-otherapp) (universal-otherapp).

:::

## Catatan Kompatibilitas

SSLoth allows users on version 11.13.0 and below to bypass the browser version check, allowing the use of new-browserhax or old-browserhax (compatible with versions 11.4.0 through 11.13.0 in all regions), which can then be used in conjunction with universal-otherapp.

## Apa yang Perlu

- Versi terkini dari [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (unduhan langsung)
- Versi terkini dari [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (unduhan langsung)
- Versi terkini dari [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (yang `.zip` Luma3DS)
- The latest release of [universal-otherapp](https://github.com/TuxSH/universal-otherapp/releases/latest) (`otherapp.bin`)

## Instruksi

### Bagian I - Persiapan

In this section, you will copy the files needed to trigger both browserhax and universal-otherapp.

1. Matikan daya konsol
2. Sisipkan kartu SD ke komputer Anda
3. Copy `otherapp.bin` to the root of your SD card and rename it to `arm11code.bin`
   - Akar (_root_) kartu SD merujuk ke direktori awal kartu SD yang ada folder Nintendo 3DS, berarti **tidak di dalam folder apa pun**
   - If you do not see the `.bin` extension, do not add it to the end of the filename
4. Salin semua berkas dari `.zip` Luma3DS ke akar kartu SD
5. Buat folder dengan nama `boot9strap` di akar kartu SD
6. Salin `boot9strap.firm` dan `boot9strap.firm.sha` dari berkas `.zip` boot9strap ke folder `/boot9strap/` di kartu SD
7. Copy `SafeB9SInstaller.bin` from the SafeB9SInstaller `.zip` to the root of your SD card
8. Sisip kembali kartu SD ke konsol
9. Nyalakan daya konsol

### Section II - SSLoth

In this section, you will change your Internet connection settings to use a proxy network designed to bypass the browser version check, allowing the browser to function without a system update. This will allow you to access the browser exploit webpage in the next section.

<!--@include: ./_include/addproxy.md -->

1. Press "Back" twice, then "Close" to go back to the HOME Menu

### Section III - Launching SafeB9SInstaller

In this section, you will visit the browser exploit webpage, which will use universal-otherapp to launch the boot9strap (custom firmware) installer.

1. On the HOME Menu, press the Left and Right shoulder buttons at the same time to open the camera
   - If you are unable to open the camera, open the Internet Browser and manually type the URL instead (`https://zoogie.github.io/web/nbhax/`)
2. Tap the QR code button and scan [this QR code](http://api.qrserver.com/v1/create-qr-code/?color=000000\&bgcolor=FFFFFF\&data=https%3A%2F%2Fzoogie.github.io%2Fweb%2Fnbhax\&qzone=1\&margin=0\&size=400x400\&ecc=L)
   - If you get a crash or an error code, [follow this troubleshooting guide](troubleshooting-ssloth-browser)
   - If you get a security certificate warning, press (A) to allow the connection
3. Tap the "PROCEED TO HAXX" button
4. Jika eksploit berhasil akan muncul SafeB9SInstaller
   - If you get an error, [follow this troubleshooting guide](troubleshooting-ssloth-browser)

### Section IV - Installing boot9strap

Di bagian ini akan mulai memasang _custom firmware_ ke konsol.

1. Saat diminta, tekan kombo tombol mengikuti layar atas untuk memasang boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-ssloth-browser)
2. Once it is complete, press (A) to reboot your console

<!--@include: ./_include/configure-luma3ds.md -->

### Section V - Restoring default proxy

<!--@include: ./_include/rmproxy.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

Lanjut ke [Penyiapan Akhir](finalizing-setup)

:::
