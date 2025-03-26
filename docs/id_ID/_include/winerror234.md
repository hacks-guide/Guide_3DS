Saat membuat ID1 MSET9 di Windows 10 ke atas, naskah bisa gagal berkode galat ini:

![](/images/screenshots/troubleshooting/234.png)

Ini terjadi karena fitur "beta UTF-8" di Windows. Ini harus nonaktif agar MSET9 berjalan:

1. Pencet **Tombol Windows + R** untuk membuka Run, ketik `intl.cpl`, lalu pencet "OK"
    ::: info

    ![](/images/screenshots/troubleshooting/234run.png)

    :::

2. Pencet `Administrative`, lalu `Change System Locale`

    ::: info

    ![](/images/screenshots/troubleshooting/234region.png)

    :::

    ::: info

    ![](/images/screenshots/troubleshooting/234administrative.png)

    :::

3. Lepas centang di sebelah `Beta: Use Unicode UTF-8 for worldwide language support`, lalu "OK"

    ::: info

    ![](/images/screenshots/troubleshooting/234locale.png)

    :::

4. Pencet "Restart Now"

    ::: info

    ![](/images/screenshots/troubleshooting/234restart.png)

    :::

Setelah komputer menyala ulang, coba buat lagi ID1 MSET9.
