# Informasi Penting

::: info

Jika ini pertama kalinya memodif 3DS (atau tidak biasa dengan teknologi), lanjut baca! Atau tidak, jika sebelumnya sudah pernah lakukan dan tahu harus apa, lanjut ke [Memulai](get-started).

:::

Laman ini menjabar beberapa istilah dasar komputer dan info spesifik-3DS yang harus diketahui sebelum mengikuti panduan ini.

Daftar tiap bagian masih diciutkan. Jadi sentuh dulu nama bagiannya untuk membuka.

## Kompatibilitas

:::: details Panduan ini kompatibel dengan konsol apa?

::: info

![](/images/screenshots/onboarding/compatible.png)

:::

Panduan ini bisa untuk semua jenis konsol ecer Nintendo 3DS (termasuk 3DS, 3DS XL/LL, 2DS, New 3DS, New 3DS XL/LL, dan New 2DS XL/LL), terlepas dari daerah atau _firmware_. Ini TIDAK kompatibel untuk jenis konsol DSi (DSi, DSi XL/LL). Untuk jenis konsol DSi, rujuk ke [panduan ini](https://dsi.cfw.guide).

::::

:::: details Untuk panduan ini, perlu komputer/peranti keras seperti apa?

::: info

![](/images/screenshots/onboarding/os.jpg)

:::

Untuk mengikuti panduan di sini harus bisa mengunduh berkas dari Internet dan menyalinnya ke kartu SD. Tergantung komputer/ponsel/perangkat elektronik, mungkin perlu juga adaptor USB ke kartu SD agar perangkat bisa membaca kartu SD.

::::

:::: details Untuk konsol saya, perlu kartu SD seperti apa?

::: info

![](/images/screenshots/onboarding/sdcard.jpg)

:::

Letak slot kartu SD dan jenis kartu SD yang bisa disisip tergantung pada model 3DS. Informasi lebih lanjut bisa dilihat di [laman dukungan resmi Nintendo](https://en-americas-support.nintendo.com/app/answers/detail/a_id/271/~/how-to-insert-an-sd-card-or-microsd-card).

The 3DS can read SD cards of any capacity (even those larger than 32GB), but the card must be formatted as FAT32 (**not** exFAT or NTFS). You can use one of the following tools to format your SD card, depending on your operating system: [Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)). SD cards larger than **128GB** are not recommended due to known issues with custom themes and GBA/DS graphics.

::: warning

To follow this guide, you'll need an SD card with a capacity of at least **2GB**.

:::

::: info

If you want, you can check your SD card for errors before following this guide using [H2testw (Windows)](h2testw-\(windows\)), [F3 (Linux)](f3-\(linux\)), or [F3XSwift (Mac)](f3xswift-\(mac\))

:::

::::

:::: warning

:::details Potential risks (Disclaimer)

By modding your console, you subject it to the remote (but non-zero) possibility of the console being bricked (rendered non-functional). _**Incorrect file placement will NOT brick your console**_, but purposely skipping instructions might.

In short: Modding your console is safe, but it's _**your responsibility**_ if something goes wrong.

:::

::::

## Important terminology

::: warning

Following this guide alone should not result in data loss, but SD card corruption is always a possibility. You should make a backup of your SD card contents (especially the `Nintendo 3DS` folder) if you have important data.

:::

:::: details What does "root of SD" or "/luma/" mean?

::: info

![](/images/screenshots/onboarding/sdroot.png)

:::

When copying files to the SD card, it is important to copy them to the right location - otherwise, the console will not detect the file and the exploit or software you are trying to use will not work. A term you will see frequently on this guide is **root of the SD card**, which means you are not inside any folder on your SD card. The directory that appears when you first open your SD card on your computer is called the 'root'.

You may also see folder names indicated like this: `/folder/`. The slashes are used to indicate directories and are not part of the name of the folder. For example, `/folder1/folder2/` would refer to `folder2` inside of `folder1`:

::: info

![](/images/screenshots/onboarding/folders.png)

:::

**Angle brackets** (\< and \>) are also occasionally used to refer to system-specific identifiers. For example, if the guide says `<ID0>`, it is referring to the system-specific identifier inside of the `Nintendo 3DS` folder, rather than a folder literally named "ID0":

::: info

![](/images/screenshots/onboarding/anglebrackets.png)

:::

::::

:::: details How do I download files from GitHub?

::: info

![](/images/screenshots/onboarding/github.png)

:::

In this guide, you will copy files that are downloaded on your computer/phone to your console's SD card. Many of these files come from GitHub, which is a website used by developers to publish their open-source releases. When downloading files from GitHub, you should download the file that _isn't_ source code.

::::

:::: details How do I extract/open a ZIP file?

::: info

![](/images/screenshots/onboarding/zipfiles.png)

:::

Some of the files that you will be asked to download come in the `.zip` file format, which is used to package multiple files into one file.

When you are told to "copy (file) from (file).zip", that means that you need to open (or "extract") the ZIP file. Inside the ZIP file will be the file you're looking for, after which you can copy it to the specified location on your SD card.

On most operating systems, you can extract files by double-clicking the file. If this doesn't work, you can install a reputable third-party extraction tool like [7-zip](https://7-zip.org/) instead.

::::

:::: details What are file extensions?

::: info

![](/images/screenshots/onboarding/fileext.png)

:::

If your computer is running Windows, file extensions may be hidden by default, which may make it harder to find the files you're looking for. To enable file extensions, follow [these instructions](file-extensions-\(windows\)).

::::

## Getting help

If you experience an issue while following this guide, there are many ways that you can get help!

- If you have any questions that haven't been answered on this page, their answers might be in the [Pre-Installation FAQ](faq#pre-installation-faq).
- If you experience an issue while following this guide, you can check the [Troubleshooting](troubleshooting) page for a solution.
- If the resources we've provided here aren't helping, you can get one-on-one support over at [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp).

::: tip

Lanjut ke [Memulai](get-started)

:::
