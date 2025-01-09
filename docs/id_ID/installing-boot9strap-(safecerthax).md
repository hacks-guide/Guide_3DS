# Installing boot9strap (safecerthax)

:::details Perincian Teknis (opsional)

:::

## Catatan Kompatibilitas

safecerthax is compatible with all Old 3DS and Old 2DS consoles in all regions on system versions 1.0.0 through 11.14.0.

::: info

This exploit will not work on the New 3DS, New 3DS XL, or New 2DS XL. Please ensure that the console you are modding is an Old 3DS, Old 3DS XL, or Old 2DS before continuing.

:::

## Apa yang Perlu

- Versi terkini dari [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (unduhan langsung)
- Versi terkini dari [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (unduhan langsung)
- Versi terkini dari [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (yang `.zip` Luma3DS)

## Instruksi

### Section I - Hardware Button Check

In this section, you will see whether your shoulder buttons are working on your console. This will determine whether your console is compatible with this method.

1. Nyalakan daya konsol
2. Once you see the HOME Menu, press the (Left Shoulder) and (Right Shoulder) buttons at the same time
   - The camera applet should appear
3. Matikan daya konsol

::: warning

If the camera did NOT appear, you cannot follow this method. If this is the case, use [Installing boot9strap (MSET9)](installing-boot9strap-\(mset9\)) instead.

:::

### Section II - Prep Work

In this section, you will copy the files needed to trigger the safecerthax exploit.

1. Sisipkan kartu SD ke komputer Anda
2. Salin semua berkas dari `.zip` Luma3DS ke akar kartu SD
   - Akar (_root_) kartu SD merujuk ke direktori awal kartu SD yang ada folder Nintendo 3DS, berarti **tidak di dalam folder apa pun**
3. Buat folder dengan nama `boot9strap` di akar kartu SD
4. Salin `boot9strap.firm` dan `boot9strap.firm.sha` dari berkas `.zip` boot9strap ke folder `/boot9strap/` di kartu SD
5. Copy `SafeB9SInstaller.bin` from the SafeB9SInstaller `.zip` to the root of your SD card
6. Sisip kembali kartu SD ke konsol
7. Nyalakan daya konsol

### Section III - safecerthax proxy

In this section, you will change your Internet connection settings to use a proxy network designed to exploit the System Update feature of your console.

<!--@include: ./_include/addproxy.md -->

1. Matikan daya konsol

### Section IV - safecerthax

In this section, you will enter Safe Mode (a feature available on all 3DS family consoles) where safecerthax will be triggered, which will launch you into the boot9strap (custom firmware) installer.

1. With your console still powered off, hold the following buttons: (Left Shoulder) + (Right Shoulder) + (D-Pad Up) + (A), and while holding these buttons together, power on your console
   - Keep holding the buttons until the console boots into Safe Mode (a "system update" menu)
2. Press "OK" to accept the update
   - There is no update. This is part of the exploit
3. Press "I accept" to accept the terms and conditions
4. The update will eventually fail, with the error code `003-1099`. This is intended behaviour
5. Press "OK" to close the error message
6. Jika eksploit berhasil akan muncul SafeB9SInstaller
   - If the console freezes or crashes, force power off the console, then retry this section

### Section V - Installing boot9strap

Di bagian ini akan mulai memasang _custom firmware_ ke konsol.

1. Saat diminta, tekan kombo tombol mengikuti layar atas untuk memasang boot9strap
   - If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting-safecerthax)
2. Saat selesai, tekan (A) untuk nyalakan ulang konsol

<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

### Section VI - Restoring default proxy

<!--@include: ./_include/rmproxy.md -->

___

::: tip

Lanjut ke [Penyiapan Akhir](finalizing-setup)

:::
