---
title: "Get Started"
---

{% include toc title="Table of Contents" %}

### Required Reading

Select the appropriate page for your version from the chart below. Note that the "from" and "to" fields are inclusive. This means that, for example, the "from 9.0.0 to 9.2.0" row includes 9.0.0, 9.1.0, and 9.2.0.

Your device version can be found at the bottom right of the top screen of the System Settings.

![]({{ "/images/screenshots/system-version.png" | absolute_url }})
{: .notice--info}

**If you are unable to follow the instructions corresponding to your specific version due to missing prerequisites, then you should either update to the latest version or use the "All Versions" row for methods that work regardless of system version.**

For all versions you can also [Cartridge Update](cart-update) (or use a standard system update) to get to a higher version in the same column to follow its instructions.

If you have already hacked your 3DS before and have an EmuNAND based CFW setup, just follow all instructions while on SysNAND. Replace any files that already exist. Your data will be transferred from EmuNAND to your new B9S install at the end. If you use menuhax, you should [clear Home Menu's extdata](troubleshooting#clear-home-menu-extdata) to remove it before beginning.

This page is for instructions on how to install boot9strap to a *stock* 3DS or 2DS. If you already have arm9loaderhax installed and are looking to update to boot9strap, follow [A9LH to B9S](a9lh-to-b9s).
{: .notice--primary}

Before starting, Windows users should enable the option to show file extensions using [File Extensions (Windows)](file-extensions-(windows))!
{: .notice--info}

Before starting, you may want to check your SD card for errors using [H2testw (Windows)](h2testw-(windows)), [F3 (Linux)](f3-(linux)), or [F3X (Mac)](f3x-(mac))!
{: .notice--warning}

{% capture notice-1 %}
While we believe custom firmware is relatively safe at this time, it is important to note that it will never be "ban free".

You should avoid the following actions:
1. Piracy
1. Cheating online
1. Suspicious behaviour on eShop (for example, credit card chargebacks)

We believe SpotPass and StreetPass are also safe for use at this time.

{% endcapture %}

<div class="notice--danger">{{ notice-1 | markdownify }}</div>

### Version Table

<table>
  <colgroup>
    <col span="1" style="width: 10%;">
    <col span="1" style="width: 10%;">
    <col span="1" style="width: 40%;">
  </colgroup>
  <thead>
    <tr>
      <th style="text-align: center">From</th>
      <th style="text-align: center">To</th>
      <th style="text-align: center">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center; font-weight: bold;">1.0.0</td>
      <td style="text-align: center; font-weight: bold;">2.0.0</td>
      <td style="text-align: center; font-weight: bold;">Update to latest firmware or use an "All Versions" Method</td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">2.1.0</td>
      <td style="text-align: center; font-weight: bold;">8.1.0</td>
      <td style="text-align: center; font-weight: bold;"><a href="installing-boot9strap-(soundhax)">Installing boot9strap (Soundhax)</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">9.0.0</td>
      <td style="text-align: center; font-weight: bold;">11.3.0</td>
      <td style="text-align: center; font-weight: bold;"><a href="homebrew-launcher-(soundhax)">Homebrew Launcher (Soundhax)</a></td>
    </tr><tr>
      <td style="text-align: center; font-weight: bold;">11.4.0</td>
      <td style="text-align: center; font-weight: bold;">11.12.0</td>
      <td style="text-align: center; font-weight: bold;">Update to latest firmware or use an "All Versions" Method</td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">11.13.0</td>
      <td style="text-align: center; font-weight: bold;">11.13.0</td>
      <td style="text-align: center; font-weight: bold;"><a href="homebrew-launcher-(browserhax-2020)">Homebrew Launcher (BrowserHax 2020)</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;" colspan="2">ALL VERSIONS<br></td>
      <td style="text-align: center; font-weight: bold;"><p style="display: inline-block; margin-top: 1.3em; width: 47%"><a href="ntrboot">ntrboot</a><br><sub>(Requires a Compatible Flashcart)</sub></p><p style="display: inline-block; margin-top: 1.3em; vertical-align: super; width: 6%">or</p><p style="display: inline-block; margin-top: 1.3em; width: 47%"><a href="installing-boot9strap-(hardmod)">Installing boot9strap (Hardmod)</a><br><sub>(Requires Soldering)</sub></p></td>
    </tr>
  </tbody>
</table>
