---
title: "Informations importantes"
---

{% include toc title="Table des matières" %}

{% capture update-notice %}
{% include_relative include/3ds-online.txt %}
{% endcapture %}
<div class="notice--danger">{{ update-notice | markdownify }}</div>

Lisez attentivement cette page s'il s'agit de la première fois que vous hackez une 3DS (ou si vous n'êtes pas familier avec la technologie en général) ! Si vous savez ce que vous faites et que vous avez une expérience antérieure, continuez vers [Bien démarrer](get-started).
{: .notice--info}

Cette page couvre une partie de la terminologie informatique de base et des informations spécifiques à la 3DS que vous devriez connaître avant de suivre ce guide.

Chaque section est réduite par défaut. Cliquez ou appuyez sur le nom de la section pour l'ouvrir.

## Choses que vous devriez savoir sur la 3DS

{% capture compat %}
<summary><strong>Compatibilité 3DS/2DS</strong></summary>
![]({{ "/images/screenshots/onboarding/compatible.png" | absolute_url }})
{: .notice--info}

This guide works with every retail console in the Nintendo 3DS family of consoles (including the 3DS, 3DS XL/LL, 2DS, New 3DS, New 3DS XL/LL, and New 2DS XL/LL), regardless of region or firmware.
{% endcapture %}

<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>Compatibilité de l'ordinateur</strong></summary>
![]({{ "/images/screenshots/onboarding/os.jpg" | absolute_url }})
{: .notice--info}
In most cases, you can follow this guide as long as you are able to download files from the Internet and copy them to your SD card. Selon votre ordinateur/téléphone/périphérique électronique, vous devrez peut-être acheter un adaptateur de carte SD vers USB pour permettre à votre ordinateur de lire votre carte SD.
{% endcapture %}

<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>Emplacement, type et capacité de la carte SD</strong></summary>
![]({{ "/images/screenshots/onboarding/sdcard.jpg" | absolute_url }})
{: .notice--info}

L'emplacement du port carte SD et le type de carte SD accepté dépendent du modèle de votre 3DS. Plus d'informations peuvent être trouvées sur la [page officielle de l'assistance de Nintendo](https://fr-americas-support.nintendo.com/app/answers/detail/a_id/271/~/how-to-insert-an-sd-card-or-microsd-card).

La 3DS peut lire des cartes SD de n'importe quelle capacité (même celles supérieures à 32Go), mais la carte doit être formatée en FAT32 (**pas** exFAT ou NTFS). Vous pouvez utiliser l'un des outils suivants pour formater votre carte SD, selon votre système d'exploitation : [Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux)). Les cartes SD de plus de **128Go** ne sont pas recommandées en raison de problèmes connus avec des thèmes personnalisés et des graphiques GBA/DS.

Pour suivre ce guide, vous aurez besoin d'une carte SD d'une capacité d'au moins **2 Go**.
{: .notice--warning}

Si vous le souhaitez, vous pouvez vérifier que votre carte SD n'est pas corrompue avant de suivre ce guide en utilisant [H2testw (Windows)](h2testw-(windows)), [F3 (Linux)](f3-(linux)), ou [F3XSwift (Mac)](f3xswift-(mac))
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

## Les choses que vous devez faire sur votre ordinateur

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
<summary><strong>Ouverture/extraction de fichiers</strong></summary>
![]({{ "/images/screenshots/onboarding/zipfiles.png" | absolute_url }})
{: .notice--info}

Certains des fichiers que l'on vous demandera de télécharger arrivent dans le format `.zip`, qui est utilisé pour empaqueter plusieurs fichiers en un.

Quand on vous demande de "copier un (fichier) à partir de (fichier).zip", cela signifie que vous devez ouvrir (ou "extraire") le fichier ZIP. À l'intérieur du fichier ZIP se trouve le fichier que vous cherchez, après quoi vous pouvez le copier à l'emplacement spécifié sur votre carte SD.

Sur la plupart des systèmes d'exploitation, vous pouvez extraire des fichiers en double-cliquant sur le fichier. Si cela ne fonctionne pas, vous pouvez installer un outil d'extraction tiers réputé comme [7-zip](https://7-zip.org/) à la place.
{% endcapture %}
<details>{{ compat | markdownify }}</details>

{% capture compat %}
<summary><strong>(Windows uniquement) Extensions de fichier</strong></summary>
![]({{ "/images/screenshots/onboarding/fileext.png" | absolute_url }})
{: .notice--info}

Si votre ordinateur exécute Windows, les extensions de fichiers peuvent être masquées par défaut, ce qui peut rendre plus difficile la recherche des fichiers que vous cherchez. Pour activer les extensions de fichiers, suivez [ces instructions](file-extensions-(windows)).
{% endcapture %}
<details>{{ compat | markdownify }}</details>

## Obtenir de l'aide

Si vous rencontrez un problème en suivant ce guide, vous pouvez obtenir de l'aide de plusieurs façons !

+ If you have any questions that haven't been answered on this page, their answers might be in the [Pre-Installation FAQ](faq#pre-installation-faq).
+ If you experience an issue while following this guide, you can check the [Troubleshooting](troubleshooting) page for a solution.
+ If the resources we've provided here aren't helping, you can get one-on-one support over at [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp).

Continuer vers [Bien démarrer](get-started)
{: .notice--primary}
