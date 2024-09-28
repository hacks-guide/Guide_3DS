# 주요 내용

::: danger

<!--@include: ./_include/3ds-online.md -->

:::

::: info

만약 이번이 3DS를 처음으로 모딩하는 것 (혹은 모딩에 익숙하지 않다면) 이라면, 계속 정독하세요! 반면, 사전에 모딩을 해봤거나 할 줄 안다면, [시작하기](get-started) 페이지로 계속하세요.

:::

이 페이지는 일부 컴퓨터 용어를 다루고, 이 가이드를 따르기 전에 당신이 알아야 할 3DS의 특정한 정보가 담겨있습니다.

각 섹션은 기본으로 축소되어 있습니다. 섹션 이름을 탭하거나 클릭해서 여십시오.

## Things you should know about the 3DS

:::: details 3DS/2DS compatibility

::: info

![](/images/screenshots/onboarding/compatible.png)

:::

이 가이드는 국가나 펌웨어 상관없이, 모든 닌텐도 3DS 시리즈의 콘솔(3DS, 3DS XL/LL, 2DS, New 3DS, New 3DS XL/LL, New 2DS XL/LL에 모두 해당)와 호환됩니다.

::::

:::: details Computer compatibility

::: info

![](/images/screenshots/onboarding/os.jpg)

:::

대부분의 경우, 인터넷에서 파일을 다운로드 하고 SD 카드에 옮길 수 있어야만 이용 가능합니다. 본인의 컴퓨터/스마트폰/전자기기에 따라서 컴퓨터에서 SD 카드를 읽기 위해 USB->SD 카드 어댑터를 구매해야 할 수도 있습니다.

::::

:::: details SD card location, type, and capacity

::: info

![](/images/screenshots/onboarding/sdcard.jpg)

:::

3DS 모델에 따라 SD카드 슬롯의 위치나 호환되는 종류가 다릅니다. 자세한 정보는 [닌텐도 공식 지원](https://www.nintendo.co.kr/3DS/customer/qna.php) 에서 찾아볼 수 있습니다.

3DS는 어떤 용량의 SD 카드 (32GB보다 커도 가능)도 사용할 수 있지만, 그 카드는 무조건 FAT32로 포맷되어 있어야합니다. (exFAT이나 NTFS **는 불가능**). SD 카드를 포맷하기 위해 자신의 OS에 해당하는 프로그램을 사용할 수 있습니다: [Windows](formatting-sd-\(windows\)), [macOS](formatting-sd-\(mac\)), [Linux](formatting-sd-\(linux\)). GBA/DS 그래픽과 커스텀 테마 문제 때문에 128GB를 넘기는 SD 카드를 사용하는 것은 권장하지 않습니다.

::: warning

이 가이드를 따르려면, 적어도 **2GB**용량의 SD 카드를 사용해야 합니다.

:::

::: info

원하신다면, 이 가이드를 따라가기 전에 [H2testw (Windows)](h2testw-\(windows\)), [F3 (Linux)](f3-\(linux\)), 또는 [F3XSwift (Mac)](f3xswift-\(mac\))을 사용해 SD 카드의 오류 여부를 확인하실 수 있습니다.

:::

::::

:::: warning
::: details Potential risks (Disclaimer)

By modding your console, you subject it to the remote (but non-zero) possibility of the console being bricked (rendered non-functional). **파일을 잘못 넣는다고 콘솔이 벽돌이 되지는 않지만**, 의도적으로 순서를 건너뛴다면 벽돌이 될 수도 있습니다.

요약하자면: 콘솔을 수정하는 것은 안전하지만, 뭔가 잘못되었다면 그것은 __여러분의 책임__입니다.

:::
::::

## Things you need to do on your computer

::: warning

이 가이드를 따라하는 것만으로는 데이터 손실이 일어나지 않습니다만, SD 카드 데이터 파손 가능성은 있습니다. 중요한 데이터가 있는 경우, SD 카드의 컨텐츠(특히 `Nintendo 3DS` 폴더)를 백업해야 합니다.

:::

:::: details File placement terminology (e.g. "root of SD", "/luma/")

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

:::: details Downloading files from GitHub

::: info

![](/images/screenshots/onboarding/github.png)

:::

이 가이드를 통해 컴퓨터나 핸드폰으로 다운받은 파일을 3DS의 SD 카드로 복사하게 됩니다. 이러한 파일의 대부분은 개발자가 오픈 소스 릴리즈를 게시하는 데 사용하는 웹사이트인 GitHub에서 제공됩니다. GitHub에서 파일을 다운로드할 때에는 소스 코드가 _아닌_ 파일을 다운로드해야 합니다.

::::

:::: details Opening/extracting files

::: info

![](/images/screenshots/onboarding/zipfiles.png)

:::

다운로드받을 몇몇 파일은 여러 파일을 하나로 묶기 위한 `.zip` 파일 형식입니다.

"(파일).zip에서 (파일)을 복사하세요"와 같은 말이 나오면, 이것은 해당 ZIP 파일을 열어야(혹은 "압축 해제"해야) 함을 뜻합니다. ZIP 파일 내에서 파일을 찾으면, 그 파일을 SD 카드의 특정 위치로 복사하면 됩니다.

대부분의 환경에서는 파일을 두 번 클릭하는 것으로 파일 추출이 가능합니다. 만약 동작하지 않는다면, [7-zip](https://7-zip.org)과 같은 서드 파티 압축 해제 툴을 설치해 이용할 수 있습니다.

::::

:::: details (Windows only) File extensions

::: info

![](/images/screenshots/onboarding/fileext.png)

:::

만약 Windows를 사용하고 있다면, 파일 확장자는 기본적으로 숨겨져 있으며 이 때문에 파일을 찾기가 더욱 어렵습니다. 파일 확장자를 표시하려면, [이 설명](file-extensions-\(windows\))을 따라주세요.

::::

## Getting help

만약 이 가이드를 따라가다 문제가 발생했다면, 도움을 받을 수 있는 경로도 여러 가지입니다!

- If you have any questions that haven't been answered on this page, their answers might be in the [Pre-Installation FAQ](faq#pre-installation-faq).
- If you experience an issue while following this guide, you can check the [Troubleshooting](troubleshooting) page for a solution.
- If the resources we've provided here aren't helping, you can get one-on-one support over at [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp).

::: tip

[시작하기](get-started)로 계속합니다

:::
