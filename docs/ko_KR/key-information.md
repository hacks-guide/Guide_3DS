# 주요 내용

::: info

만약 이번이 3DS를 처음으로 모딩하는 것 (혹은 모딩에 익숙하지 않다면) 이라면, 계속 정독하세요! 반면, 사전에 모딩을 해봤거나 할 줄 안다면, [시작하기](get-started) 페이지로 계속하세요.

:::

이 페이지는 일부 컴퓨터 용어를 다루고, 이 가이드를 따르기 전에 당신이 알아야 할 3DS의 특정한 정보가 담겨있습니다.

각 섹션은 기본으로 축소되어 있습니다. 섹션 이름을 탭하거나 클릭해서 여십시오.

## 호환성

:::: details 이 가이드를 어느 콘솔에 사용할 수 있나요?

::: info

![](/images/screenshots/onboarding/compatible.png)

:::

이 가이드는 국가나 펌웨어 상관없이, 모든 닌텐도 3DS 시리즈의 콘솔(3DS, 3DS XL/LL, 2DS, New 3DS, New 3DS XL/LL, New 2DS XL/LL 모두 해당)과 호환됩니다. DSi 시리즈 콘솔과는 호환되지 않습니다(DSi, DSi XL/LL).  DSi 콘솔 시리즈에 대해서는, [이 가이드](https://dsi.cfw.guide)를 따르세요.

::::

:::: details 이 가이드를 따르기 위해서 어떤 종류의 컴퓨터/하드웨어가 필요한가요?

::: info

![](/images/screenshots/onboarding/os.jpg)

:::

대부분의 경우, 인터넷에서 파일을 다운로드 하고 SD 카드에 옮길 수 있어야만 이용 가능합니다. This includes most consumer electronic devices, such as computers running Windows, macOS, Linux, and chromeOS (Chromebooks), as well as phones and tablets running Android and iOS. Depending on your electronic device, you may need to purchase an SD card adapter to allow it to read your SD card.

::::

:::: details 콘솔을 사용하기 위해 어떤 종류의 SD 카드를 사용해야 되나요?

::: info

![](/images/screenshots/onboarding/sdcard.jpg)

:::

3DS 모델에 따라 SD카드 슬롯의 위치나 호환되는 종류가 다릅니다. 자세한 정보는 [닌텐도 공식 지원](https://www.nintendo.co.kr/3DS/customer/qna.php) 에서 찾아볼 수 있습니다. Note that on New 3DS and New 3DS XL consoles, you will need a screwdriver (JIS 00) to access the microSD card, which is located under the backplate.

Your (micro)SD card should conform to the following requirements:

- **Brand**: Any name brand (SanDisk, Samsung, Kingston, Lexar, PNY, etc.)
  - Beware of fake or illegitimate SD cards (e.g. Memory SD, PRO PLUS, SanDian, Extreme Pro), particularly those purchased from online marketplaces like AliExpress. See [here](https://www.flashcarts.net/microsd-fakes) for a guide on spotting fake SD cards. Using a fake or illegitimate SD card is very likely to result in things not working, or even **data loss**!
- **Capacity**: Between 2GB and 128GB (inclusive)
  - These cards will be labelled SD (<=2GB), SDHC (4GB-32GB), or SDXC (64GB+)
  - Cards smaller than 2GB are insufficient due to the minimum size of a NAND dump (around 1GB), which is made at the end of this guide as a safety measure
  - Cards 200GB or larger will still work, but are not recommended due to possible issues with DS/GBA graphics and custom themes
- **Speed**: Any
  - Currently, the cheapest cards on the market are **Class 10** (e.g. SanDisk Ultra). Faster cards are acceptable, but the 3DS cannot take advantage of their speed
- **Format**: FAT32 with MBR
  - Cards that are 32GB or smaller should already be formatted in this way, while larger SD cards will have to be manually formatted: [Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux))

For consoles that use a full-size SD card, a microSD card in an SD card adapter will work identically.

::: info

두 개의 SD 카드에 있는 내용물을 나중에 하나로 합칠 수 없기 때문에, 콘솔에는 언제나 **오직 SD 카드 하나만 사용**하는 것을 강력히 권장합니다. 그래서, 만약 여러분의 콘솔에 이미 SD 카드가 있을 경우, 커펌을 하기 위해 해당 SD 카드를 사용하거나 커펌 전 또는 후에 더 큰 SD 카드에 모든 것을 복사하여야 합니다.

:::

::: info

If you want, you can check your SD card for errors/legitimacy before following this guide using [H2testw](h2testw-(windows))/[ValiDrive](https://www.grc.com/validrive.htm) (Windows), [F3 (Linux)](f3-(linux)), or [F3XSwift (Mac)](f3xswift-(mac)).

:::

::::

:::: warning

:::details 잠재적 위험성 (고지)

콘솔을 수정함으로서, 여러분은 콘솔이 벽돌이 되는 것(콘솔이 작동하지 않는 현상)에 대한 희박한, 하지만 0은 아닌 가능성을 염두에 두어야 합니다. **파일을 잘못 넣는다고 콘솔이 벽돌이 되지는 않지만**, 의도적으로 순서를 건너뛴다면 벽돌이 될 수도 있습니다.

요약하자면: 콘솔을 수정하는 것은 안전하지만, 뭔가 잘못되었다면 그것은 __여러분의 책임__입니다.

:::

::::

## 중요 용어

::: warning

이 가이드를 따라하는 것만으로는 데이터 손실이 일어나지 않습니다만, SD 카드 데이터 파손 가능성은 있습니다. 중요한 데이터가 있는 경우, SD 카드의 컨텐츠(특히 `Nintendo 3DS` 폴더)를 백업해야 합니다.

:::

:::: details "SD 카드의 루트" 나 "/luma/" 가 무슨 뜻인가요?

::: info

![](/images/screenshots/onboarding/sdroot.png)

:::

SD 카드에 파일을 복사할 때 올바른 위치에 넣는 것이 중요합니다. 그렇지 않으면 콘솔에서 파일을 감지하지 못하고 사용하려는 취약점이나 소프트웨어가 작동하지 않습니다. 이 가이드에서는 SD 카드의 "루트"라는 용어를 자주 볼 수 있습니다. 이는 SD 카드의 어떠한 폴더에도 들어가있지 않다는 것을 의미합니다. 컴퓨터에서 SD 카드를 처음 열 때 나타나는 디렉터리를 '루트'라고 합니다.

또한 '/폴더/'와 같이 표시된 폴더 이름도 볼 수 있습니다. 슬래시("/")는 디렉토리를 나타내는 데 사용되며 폴더 이름의 일부가 아닙니다. 예를 들어, "/폴더1/폴더2"는 폴더1 안에 있는 폴더2를 의미합니다.

::: info

![](/images/screenshots/onboarding/folders.png)

:::

**앵글 브래킷** (\< and \>)은 시스템 식별자를 나타내는 데에 사용됩니다. 예를 들어, 가이드가 `<ID0>`을 표시한다면 문자 그대로 "ID0"이라 명명된 폴더가 아니라 'Nintendo 3DS' 폴더 내의 시스템별 식별자를 의미합니다.

::: info

![](/images/screenshots/onboarding/anglebrackets.png)

:::

::::

:::: details GitHub에서 파일을 어떻게 다운로드 받나요?

::: info

![](/images/screenshots/onboarding/github.png)

:::

이 가이드를 통해 컴퓨터나 핸드폰으로 다운받은 파일을 콘솔의 SD 카드로 복사하게 됩니다. 이러한 파일의 대부분은 개발자가 오픈 소스 릴리즈를 게시하는 데 사용하는 웹사이트인 GitHub에서 제공됩니다. GitHub에서 파일을 다운로드할 때에는 소스 코드가 _아닌_ 파일을 다운로드해야 합니다.

::::

:::: details ZIP 파일을 어떻게 압축 해제하거나 여나요?

::: info

![](/images/screenshots/onboarding/zipfiles.png)

:::

다운로드받을 몇몇 파일은 여러 파일을 하나로 묶기 위한 `.zip` 파일 형식입니다.

"(파일).zip에서 (파일)을 복사하세요"와 같은 말이 나오면, 이것은 해당 ZIP 파일을 열어야(혹은 "압축 해제"해야) 함을 뜻합니다. ZIP 파일 내에서 파일을 찾으면, 그 파일을 SD 카드의 특정 위치로 복사하면 됩니다.

대부분의 환경에서는 파일을 두 번 클릭하는 것으로 파일 추출이 가능합니다. If this doesn't work, you can install a reputable third-party extraction tool like [7-Zip](https://7-zip.org/) instead.

::: warning

Windows 애플리케이션 "WinRAR"는 특히 3DS 커스텀 펌웨어 설치 취약점에 호환성 문제가 있는 것으로 알려졌습니다. If you are on a Windows computer, you should use either the default File Explorer or 7-Zip to extract files.

:::

::::

:::: details 파일 확장자가 뭔가요?

::: info

![](/images/screenshots/onboarding/fileext.png)

:::

만약 Windows를 사용하고 있다면, 파일 확장자는 기본적으로 숨겨져 있으며 이 때문에 파일을 찾기가 더욱 어렵습니다. 파일 확장자를 표시하려면, [이 설명](file-extensions-(windows))을 따라주세요.

::::

:::: details What does it mean to "eject" an SD card?

::: info

![](/images/screenshots/onboarding/eject-windows.png)

:::

On most devices, your file manager will have an Eject (⏏️) button for your SD card. Using this option safely stops all activity and unmounts the card so it can be removed.

This is **very** important because removing the SD card while it is in use can cause corruption and may negatively affect the outcome of exploits when modding your 3DS.

::::

## 도움 받기

만약 이 가이드를 따라가다 문제가 발생했다면, 도움을 받을 수 있는 경로도 여러 가지입니다!

- 만약 이 페이지에 없는 것에 대한 질문이 있다면, [설치 전 자주 묻는 질문](faq#설치-전-자주-묻는-질문)에서 찾을 수 있습니다.
- 만약 이 가이드를 따라가다 문제를 겪게 되었다면, [문제 해결](troubleshooting) 페이지에서 해결 방법을 찾아볼 수 있습니다.
- If the resources we've provided here aren't helping, you can get one-on-one support over at [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp).

::: tip

[시작하기](get-started)로 계속합니다

:::
