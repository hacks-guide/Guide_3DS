# Alapvető információk

::: info

Ha ez az első alkalom, hogy moddolsz egy 3DS-t (vagy nem vagy ismerős a technológiával) akkor folytasd az olvasást! Egyébként, ha rendelkezel tapasztalattal és tudod, hogy mit csinálsz, folytasd a [Kezdeti lépésekkel](get-started).

:::

Ez az oldal néhány alap számitástechnikai információt és 3DS specifikus információkat tartalmaz, amiket ismerned kell, mielőtt követnéd ezt az útmutatót.

Minden szekció összezárt alapértelmezésként. Kattints rá vagy érintsd meg a nevét a szekciónak, hogy kinyisd.

## Dolgok amit érdemes tudnod a 3DS-ről

:::: details 3DS/2DS kompatibilitás részletek

::: info

![](/images/screenshots/onboarding/compatible.png)

:::

Ez az útmutató minden kereskedelmi konzollal működik a Nintendo 3DS konzol családból (beleértve a 3DS, 3DS XL/LL, 2DS, New 3DS, New 3DS XL/LL, és a New 2DS XL/LL-t), függetlenül a régiótól és a firmware-től.

::::

:::: details Számítógép kompatibilitás részletek

::: info

![](/images/screenshots/onboarding/os.jpg)

:::

A legtöbb esetben követheted ezt az útmutatót egészen addig, amíg képes vagy letölteni fájlokat az internetről és SD kártyára másolni. A számitógépedtől/telefonodtól/elektronikus eszközödtől függően szükséged lehet egy USB-SD kárya adapterre, ami lehetővé teszi a számítógéped számára, hogy olvassa az SD kártyádat.

::::

:::: details SD kártya helye, típusa és kapacitása részletek

::: info

![](/images/screenshots/onboarding/sdcard.jpg)

:::

Az SD kártyá slot helye és az SD kártya típusa amit elfogad a 3DS modelledtől függ. További infromációk találhatók erről a [Nintendo hivatalos támogatási oldalán](https://en-americas-support.nintendo.com/app/answers/detail/a_id/271/~/how-to-insert-an-sd-card-or-microsd-card).

A 3DS bármilyen kapacitású SD kártyát tud olvasni (még akkor is, ha nagyobb, mint 32GB), de a kártyának FAT32-re kell formatálva lennie (**nem** exFAT vagy NTFS). A következő eszközöket használhatod az SD kártyád formázására, az operációs rendszeredtől függően: [Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)). **128GB**-nál nagyobb SD kártyák nem javasoltak az ismert problémák miatt az egyedi témákkal és a GBA grafikával.

::: warning

Ahhoz, hogy követhesd ezt az útmutatót szükséged van egy legalább **2GB** kapacitású SD kártyára.

:::

::: info

Ha szeretnéd, leellenőrizheted az SD kártyádat valamelyik programmal az alábbiak közül: [H2testw (Windows)](h2testw-\(windows\)), [F3 (Linux)](f3-\(linux\)), vagy [F3XSwift (Mac)](f3xswift-\(mac\))

:::

::::

:::: warning

:::details Potential risks (Disclaimer)

A konzolod moddolásával, van egy nagyon kicsi (de nem nulla) esélye, hogy a konzol brickelődik (nem működővé válik). _**A rossz helyre rakott fájlok NEM brickelik a konzolodat**_, de szándékosan kihagyott lépések elképzelhető, hogy igen.

Röviden: A konzolod moddolása biztonságos, de a _**te felelősséged**_ ha valami elromlik.

:::

::::

## Dolgok, amiket a számítógépeden kell csinálnod

::: warning

Following this guide alone should not result in data loss, but SD card corruption is always a possibility. You should make a backup of your SD card contents (especially the `Nintendo 3DS` folder) if you have important data.

:::

:::: details Fájl elhelyezés terminológia (pl. "az SD gyökere", "/luma/")

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

:::: details Fájlok letöltése a GitHub-ról

::: info

![](/images/screenshots/onboarding/github.png)

:::

In this guide, you will copy files that are downloaded on your computer/phone to your console's SD card. Many of these files come from GitHub, which is a website used by developers to publish their open-source releases. When downloading files from GitHub, you should download the file that _isn't_ source code.

::::

:::: details Fájlok megnyitása/kicsomagolása

::: info

![](/images/screenshots/onboarding/zipfiles.png)

:::

Some of the files that you will be asked to download come in the `.zip` file format, which is used to package multiple files into one file.

When you are told to "copy (file) from (file).zip", that means that you need to open (or "extract") the ZIP file. Inside the ZIP file will be the file you're looking for, after which you can copy it to the specified location on your SD card.

On most operating systems, you can extract files by double-clicking the file. If this doesn't work, you can install a reputable third-party extraction tool like [7-zip](https://7-zip.org/) instead.

::::

:::: details (csak Windows) Fájl kiterjesztések

::: info

![](/images/screenshots/onboarding/fileext.png)

:::

If your computer is running Windows, file extensions may be hidden by default, which may make it harder to find the files you're looking for. To enable file extensions, follow [these instructions](file-extensions-\(windows\)).

::::

## Segítség kérése

Ha problémád van ezen útmutató követésével, többféle módja van, hogy segítséget kapj!

- Ha olyan kérdésed van, amit nem válaszolt meg az az oldal, akkor a válaszaid lehet, hogy a [Telepítés előtti gyakran ismételt kérdések](faq#pre-installation-faq) oldalon találhatók.
- Ha hibát kaptál a útmutató követése közben, ránézhetsz a [Hibaelhárítás](troubleshooting) oldalra a megoldásért.
- Ha az itt található információk nem segítenek egy-egy támogatást kaphatsz a [Nintendo Homebrew Discord csatornán](https://discord.gg/MWxPgEp).

::: tip

Tovább a [kezdeti lépésekhez](get-started)

:::
