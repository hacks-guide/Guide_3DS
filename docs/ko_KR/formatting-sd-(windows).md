# SD 포맷하기 (Windows)

## 중요

이곳은 3DS와 쓰기 위한 SD 카드를 포맷하는 부가 섹션입니다.

만약 3DS가 이미 SD 카드를 인식한다면, 이 가이드는 따를 필요가 없습니다.

이 페이지는 Windows 사용자만 이용할 수 있습니다. 만약 Windows에서 하는 것이 아니라면, [SD 포맷하기 (Linux)](formatting-sd-\(linux\))나 [SD 포맷하기 (Mac)](formatting-sd-\(mac\)) 페이지들을 찾아봐 주세요.

## 준비물

- the latest version of [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
- **For SD cards 64GB or larger only:** The latest version of [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm)

## 진행 방법

### Section I - SD Card Formatter

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

13. If the SD card is 32GB or smaller and had any files and folders on it before the format, copy everything back from your computer

::: info

You're done formatting your SD card if it's **32GB or smaller.**

:::

### Section II - guiformat (ONLY for 64GB or larger)

1. Run `guiformat.exe`

2. Select your SD card's drive letter for "Drive"

   ::: danger

   올바른 드라이브를 선택하는 것을 확인하세요. 잘못하면 다른 드라이브를 포맷할 수도 있습니다!

   :::

3. Select a size for "Allocation unit size"
   - If the SD card is 64GB, choose 32768
   - If the SD card is larger than 64GB, choose 65536

4. "Volume label"에는 아무거나 입력하세요

5. "Quick Format"이 선택된 것을 확인하세요.

6. Click "Start"

7. "OK"를 클릭하세요

8. 포맷이 완료되는 것을 기다리세요

9. "Close"를 클릭하세요

10. 만약 SD 카드에 파일이나 폴더가 있었다면, 백업한 폴더에서 파일들을 다시 넣으세요

## 문제 해결

- guiformat shows the error "Failed to open device: GetLastError()=32"
  - Close everything that may be using the SD card, such as any File Explorer windows.
  - If this issue persists, try reformatting the card to NTFS in File Explorer, close that window when it's done, and re-attempt the guiformat process.

- guiformat shows the error "GetLastError()=1117"
  - Your SD card write-protection switch may be [enabled](/images/sdlock.png). The lock must be flipped upwards to allow writing to the SD card (including formatting).

- SD 카드를 콘솔에서 여전히 감지되지 않거나 포맷 이후로도 엉뚱한 용량을 표시할 경우
  - SD 카드가 나뉘었거나 미할당 공간이 있을 가능성이 있습니다. Follow the instructions [here](https://wiki.hacks.guide/wiki/SD_Clean/Windows) to reformat your SD card.
