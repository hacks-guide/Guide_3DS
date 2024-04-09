---
title: "Key Information"
---

{% include toc title="תוכן העניינים" %}

{% capture update-notice %}
{% include_relative include/3ds-online.txt %}
{% endcapture %}
<div class="notice--danger">{{ update-notice | markdownify }}</div>

If this is your first time modding a 3DS (or you're unfamiliar with technology), keep reading! Otherwise, if you have prior experience and know what you're doing, continue to [Get Started](get-started).
{: .notice--info}

This page covers some of the base computer terminology and 3DS-specific information that you should know before following this guide.

Each section is collapsed by default. Click or tap on the name of the section to open it.

## Things you should know about the 3DS

{% capture compat %}
<summary><strong>3DS/2DS compatibility</strong></summary>
![]({{ "/images/screenshots/onboarding/compatible.png" | absolute_url }})
{: .notice--info}

This guide works with every retail console in the Nintendo 3DS family of consoles (including the 3DS, 3DS XL/LL, 2DS, New 3DS, New 3DS XL/LL, and New 2DS XL/LL), regardless of region or firmware.
{% endcapture %}

<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>Computer compatibility</strong></summary>
![]({{ "/images/screenshots/onboarding/os.jpg" | absolute_url }})
{: .notice--info}
In most cases, you can follow this guide as long as you are able to download files from the Internet and copy them to your SD card. Depending on your computer/phone/electronic device, you may need to purchase a USB to SD card adapter to allow your computer to read your SD card.
{% endcapture %}

<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>SD card location, type, and capacity</strong></summary>
![]({{ "/images/screenshots/onboarding/sdcard.jpg" | absolute_url }})
{: .notice--info}

The location of the SD card slot and the type of SD card that is accepted depends on the model of your 3DS. More information can be found on [Nintendo's official support page](https://en-americas-support.nintendo.com/app/answers/detail/a_id/271/~/how-to-insert-an-sd-card-or-microsd-card).

The 3DS can read SD cards of any capacity (even those larger than 32GB), but the card must be formatted as FAT32 (**not** exFAT or NTFS). You can use one of the following tools to format your SD card, depending on your operating system: [Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux)). SD cards larger than **128GB** are not recommended due to known issues with custom themes and GBA/DS graphics.

To follow this guide, you'll need an SD card with a capacity of at least **2GB**.
{: .notice--warning}

If you want, you can check your SD card for errors before following this guide using [H2testw (Windows)](h2testw-(windows)), [F3 (Linux)](f3-(linux)), or [F3XSwift (Mac)](f3xswift-(mac))
{: .notice--info}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>Potential risks (Disclaimer)</strong></summary>

By modding your console, you subject it to the remote (but non-zero) possibility of the console being bricked (rendered non-functional). ___Incorrect file placement will NOT brick your console___, but purposely skipping instructions might.

In short: Modding your console is safe, but it's ___your responsibility___ if something goes wrong.

{% endcapture %}
<details>{{ compat | markdownify }}</details>
{: .notice--warning}

## Things you need to do on your computer

Following this guide alone should not result in data loss, but SD card corruption is always a possibility. You should make a backup of your SD card contents (especially the `Nintendo 3DS` folder) if you have important data.
{: .notice--warning}

{% capture compat %}
<summary><strong>File placement terminology (e.g. "root of SD", "/luma/")</strong></summary>
![]({{ "/images/screenshots/onboarding/sdroot.png" | absolute_url }})
{: .notice--info}

When copying files to the SD card, it is important to copy them to the right location - otherwise, the console will not detect the file and the exploit or software you are trying to use will not work. A term you will see frequently on this guide is **root of the SD card**, which means you are not inside any folder on your SD card. The directory that appears when you first open your SD card on your computer is called the 'root'.

You may also see folder names indicated like this: `/folder/`. The slashes are used to indicate directories and are not part of the name of the folder. For example, `/folder1/folder2/` would refer to `folder2` inside of `folder1`:

![]({{ "/images/screenshots/onboarding/folders.png" | absolute_url }})
{: .notice--info}

**Angle brackets** (\< and \>) are also occasionally used to refer to system-specific identifiers. For example, if the guide says `<ID0>`, it is referring to the system-specific identifier inside of the `Nintendo 3DS` folder, rather than a folder literally named "ID0":

![]({{ "/images/screenshots/onboarding/anglebrackets.png" | absolute_url }})
{: .notice--info}

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>Downloading files from GitHub</strong></summary>
![]({{ "/images/screenshots/onboarding/github.png" | absolute_url }})
{: .notice--info}

In this guide, you will copy files that are downloaded on your computer/phone to your console's SD card. Many of these files come from GitHub, which is a website used by developers to publish their open-source releases. When downloading files from GitHub, you should download the file that *isn't* source code.

{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>Opening/extracting files</strong></summary>
![]({{ "/images/screenshots/onboarding/zipfiles.png" | absolute_url }})
{: .notice--info}

Some of the files that you will be asked to download come in the `.zip` file format, which is used to package multiple files into one file.

When you are told to "copy (file) from (file).zip", that means that you need to open (or "extract") the ZIP file. Inside the ZIP file will be the file you're looking for, after which you can copy it to the specified location on your SD card.

On most operating systems, you can extract files by double-clicking the file. If this doesn't work, you can install a reputable third-party extraction tool like [7-zip](https://7-zip.org/) instead.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>(Windows only) File extensions</strong></summary>
![]({{ "/images/screenshots/onboarding/fileext.png" | absolute_url }})
{: .notice--info}

If your computer is running Windows, file extensions may be hidden by default, which may make it harder to find the files you're looking for. To enable file extensions, follow [these instructions](file-extensions-(windows)).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Getting help

If you experience an issue while following this guide, there are many ways that you can get help!

+ If you have any questions that haven't been answered on this page, their answers might be in the [Pre-Installation FAQ](faq#pre-installation-faq).
+ If you experience an issue while following this guide, you can check the [Troubleshooting](troubleshooting) page for a solution.
+ If the resources we've provided here aren't helping, you can get one-on-one support over at [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp).

Continue to [Get Started](get-started)
{: .notice--primary}
