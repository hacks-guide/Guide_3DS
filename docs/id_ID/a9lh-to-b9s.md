# Dari A9LH ke B9S

## Bacaan Penting

Laman ini untuk memperbarui konsol yang masih arm9loaderhax ke boot9strap.

Semua versi Luma3DS ke depannya akan berformat `.firm`, dan hanya akan kompatibel dengan boot9strap dan sighax. Berarti untuk terus mendapat pembaruan terkini Luma3DS, perlu rujuk ke laman ini untuk memperbarui pemasangan.

## Apa yang Perlu

::: warning

Untuk menggunakan tautan [magnet](https://wikipedia.org/wiki/Magnet_URI_scheme) di laman ini, diperlukan klien torrent seperti [qBittorrent](https://www.qbittorrent.org/download.php) atau [Deluge](http://dev.deluge-torrent.org/wiki/Download).

:::

::: info

Perlu diingat, `secret_sector.bin` hanya untuk mengembalikan eksploit arm9loaderhax pada **New 3DS (XL)**, jadi tidak perlu untuk pemasangan boot9strap pada konsol bawaan. Berarti jika tidak punya New 3DS, tidak perlu `secret_sector.bin`.

:::

- <font-awesome-icon icon="fa-solid fa-magnet"/> - **Hanya untuk New 3DS:** [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655\&dn=secret_sector.bin\&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce\&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce\&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce\&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce\&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce\&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce\&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce\&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce\&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce\&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce\&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce\&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce\&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) (tautan magnet)
- Versi terkini dari [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (yang `.zip` Luma3DS)
- Versi v7.0.5 dari [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/download/v7.0.5/Luma3DSv7.0.5.zip) (unduhan langsung)
- Versi terkini dari [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (unduhan langsung)
- Versi terkini dari [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (unduhan langsung)

## Instruksi

### Bagian I - Persiapan

::: info

Untuk semua langkah di bagian ini, timpa saja berkas terkait di kartu SD.

:::

1. Matikan daya konsol

2. Sisipkan kartu SD ke komputer Anda

3. Salin semua berkas dari `.zip` Luma3DS ke akar kartu SD
   - Akar (_root_) kartu SD merujuk ke direktori awal kartu SD yang ada folder Nintendo 3DS, berarti **tidak di dalam folder apa pun**

4. Salin `arm9loaderhax.bin` dari `.zip` Luma3DS v7.0.5 ke akar kartu SD

5. Salin `SafeB9SInstaller.bin` dari `.zip` SafeB9SInstaller ke folder `/luma/payloads/` di kartu SD
   - Jika folder `luma` atau `payloads` tidak ada, buat dulu
   - Hapus `.bin` _payload_ lain (`GodMode9.bin`, `Decrypt9WIP.bin`, `Hourglass9.bin`, dll.) yang ada di folder `/luma/payloads/` pada kartu SD karena _payload_ tersebut tidak kompatibel dengan Luma3DS versi boot9strap

6. Buat folder dengan nama `boot9strap` di akar kartu SD

7. Salin `boot9strap.firm` dan `boot9strap.firm.sha` dari berkas `.zip` boot9strap ke folder `/boot9strap/` di kartu SD

8. **Hanya untuk New 3DS:** Salin `secret_sector.bin` ke folder `/boot9strap/` di kartu SD

   ::: info

   ![](/images/screenshots/a9lh-to-b9s-root-layout.png)

   :::

9. Sisip kembali kartu SD ke konsol

### Bagian II - Memasang boot9strap

1. Nyalakan konsol selagi menahan (Start) untuk ke SafeB9SInstaller
   - Jika muncul layar konfigurasi luma dan bukan SafeB9SInstaller, tekan saja (Start), lalu matikan daya konsol 3DS dan coba lagi
   - Jika terjadi galat, coba gunakan kartu SD baru atau formatkan kartu SD saat ini (**cadangkan dulu isi kartu SD**)
2. Tunggu semua periksa keamanan selesai
   - Jika muncul galat "OTP Crypto Fail", unduh berkas <font-awesome-icon icon="fa-solid fa-magnet"/> - [aeskeydb.bin](magnet:?xt=urn:btih:d25dab06a7e127922d70ddaa4fe896709dc99a1e\&dn=aeskeydb.bin\&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce\&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce\&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce\&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce\&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce\&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce\&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce\&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce\&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce\&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce\&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce\&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce\&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce\&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce), lalu taruh dalam folder `/boot9strap/` di kartu SD dan coba lagi
3. Saat diminta, tekan kombo tombol mengikuti layar atas untuk memasang boot9strap
   - Jika langkah di layar bawah ada teks warna merah, dan tidak diminta kombo tombol, [ikuti panduan sidik gangguan ini](troubleshooting-a9lh-to-b9s)

<!--@include: ./_include/configure-luma3ds.md -->

___

::: tip

Lanjut ke [Penyiapan Akhir](finalizing-setup)

:::
