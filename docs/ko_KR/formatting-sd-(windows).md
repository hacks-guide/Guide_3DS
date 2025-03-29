# SD 포맷하기 (Windows)

## 중요

이곳은 3DS와 쓰기 위한 SD 카드를 포맷하는 부가 섹션입니다.

만약 3DS가 이미 SD 카드를 인식한다면, 이 가이드는 따를 필요가 없습니다.

이 페이지는 Windows 사용자만 이용할 수 있습니다. 만약 Windows에서 하는 것이 아니라면, [SD 포맷하기 (Linux)](formatting-sd-\(linux\))나 [SD 포맷하기 (Mac)](formatting-sd-\(mac\)) 페이지들을 찾아봐 주세요.

## 준비물

- **모든 SD 카드**: 최신 버전의 [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
- **64GB 이상의 SD 카드를 사용하는 경우:** 최신 버전의 [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm)

## 진행 방법

### 섹션 I - SD Card Formatter

1. SD 카드를 컴퓨터에 삽입해 주세요

2. 만약 SD 카드에 파일이나 폴더가 있다면, 모든 것을 컴퓨터 내 한 폴더에 복사하세요

3. 다운로드한 `zip` 내의 `SD Card Formatter Setup` (`.exe` 파일)을 관리자 권한으로 실행하고, 설치하세요

4. `SD Card Formatter`를 시작 메뉴에서 실행하세요

5. "Select card"에서 SD 카드의 드라이브를 선택하세요

    ::: danger

    올바른 드라이브를 선택하는 것을 확인하세요. 잘못하면 다른 드라이브를 포맷할 수도 있습니다!

    :::

6. "Volume label"에는 아무거나 입력하세요

7. "Quick Format"이 선택된 것을 확인하세요.

8. "Format"을 클릭하세요

9. "OK"를 클릭하세요

10. 포맷이 완료되는 것을 기다리세요

11. "OK"를 클릭하세요

12. SD Card Formatter를 닫으세요

13. SD 카드의 용량이 32GB 이하이고 포맷 이전에 파일이나 폴더가 존재했다면, 컴퓨터에 백업해 둔 것들을 다시 복사해넣으세요.

::: info

SD 카드의 용량이 **32GB 이하인 경우**, 포맷이 완료되었습니다.

:::

### 섹션 II - guiformat (SD 카드 용량이 64GB 이상인 경우에만)

1. `guiformat.exe`를 실행하세요

2. "Drive"에서 SD 카드의 드라이브를 선택하세요

    ::: danger

    올바른 드라이브를 선택하는 것을 확인하세요. 잘못하면 다른 드라이브를 포맷할 수도 있습니다!

    :::

3. "Allocation unit size"에서 크기를 선택하세요
    - 만약 SD 카드의 용량이 64GB라면, 32768을 선택하세요.
    - 만약 SD 카드의 용량이 64GB보다 크다면, 65536을 선택하세요.

4. "Volume label"에는 아무거나 입력하세요

5. "Quick Format"이 선택된 것을 확인하세요.

6. "Start"를 클릭하세요.

7. "OK"를 클릭하세요

8. 포맷이 완료되는 것을 기다리세요

9. "Close"를 클릭하세요

10. 만약 SD 카드에 파일이나 폴더가 있었다면, 백업한 폴더에서 파일들을 다시 넣으세요

## 문제 해결

- guiformat이 "Failed to open device: GetLastError()=32"를 표시할 때
    - 파일 탐색기 등, SD 카드를 이용하고 있을 수 있는 모든 프로그램을 종료하세요.
    - 문제가 지속되면, 파일 탐색기에서 SD 카드를 NTFS 형식으로 포맷해보세요. 포맷이 완료되면 창을 닫고, guiformat을 사용하는 과정을 다시 시도해보세요.

- guiformat이 "GetLastError()=1117"를 표시할 때
    - SD 카드 쓰기 보호가 [활성화](/images/sdlock.png)되어 있을 수도 있습니다. SD 카드에 쓰기(포맷 포함) 작업을 하려면 잠금 막대가 위로 올라가 있어야 합니다.

- SD 카드를 콘솔에서 여전히 감지되지 않거나 포맷 이후로도 엉뚱한 용량을 표시할 경우
    - SD 카드가 나뉘었거나 미할당 공간이 있을 가능성이 있습니다. [이 가이드](https://wiki.hacks.guide/wiki/SD_Clean/Windows)를 따라 SD 카드를 다시 포맷해 주세요.
