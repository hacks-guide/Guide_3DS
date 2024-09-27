# Formatting SD (Windows)

## Required Reading

이곳은 3DS와 쓰기 위한 SD 카드를 포맷하는 부가 섹션입니다.

만약 3DS가 이미 SD 카드를 인식한다면, 이 가이드는 따를 필요가 없습니다.

이 페이지는 Windows 사용자만 이용할 수 있습니다. 만약 Windows에서 하는 것이 아니라면, [SD 포맷하기 (Linux)](formatting-sd-\(linux\))나 [SD 포맷하기 (Mac)](formatting-sd-\(mac\)) 페이지들을 찾아봐 주세요.

## What You Need

- **For SD cards 32GB or smaller:** the latest version of [SD Formatter](https://www.sdcard.org/downloads/formatter/sd-memory-card-formatter-for-windows-download/)
- **For SD cards 64GB or larger:** The latest version of [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm)

## Instructions (32GB or smaller)

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

13. 만약 SD 카드에 파일이나 폴더가 있었다면, 백업한 폴더에서 파일들을 다시 넣으세요

## Instructions (64GB or larger)

1. SD 카드를 컴퓨터에 삽입해 주세요

2. 만약 SD 카드에 파일이나 폴더가 있다면, 모든 것을 컴퓨터 내 한 폴더에 복사하세요

3. `guiformat.exe`를 실행하세요

4. "Drive"에서 SD 카드의 드라이브를 선택하세요

   ::: danger

   올바른 드라이브를 선택하는 것을 확인하세요. 잘못하면 다른 드라이브를 포맷할 수도 있습니다!

   :::

5. "Allocation unit size"에서 크기를 선택하세요
   - If the SD card is 64GB, choose 32768
   - If the SD card is larger than 64GB, choose 65536

6. "Volume label"에는 아무거나 입력하세요

7. "Quick Format"이 선택된 것을 확인하세요.

8. "Start"를 클릭하세요

9. "OK"를 클릭하세요

10. 포맷이 완료되는 것을 기다리세요

11. "Close"를 클릭하세요

12. 만약 SD 카드에 파일이나 폴더가 있었다면, 백업한 폴더에서 파일들을 다시 넣으세요

## 문제 해결

- guiformat shows the error "Failed to open device: GetLastError()=32"
  - Close everything that may be using the SD card, such as any File Explorer windows.
  - If this issue persists, try reformatting the card to NTFS in File Explorer, close that window when it's done, and re-attempt the guiformat process.

- guiformat shows the error "GetLastError()=1117"
  - Your SD card write-protection switch may be [enabled](/images/sdlock.png). SD 카드에 쓰기(포맷 포함)를 하려면 잠금 막대가 위로 올라가 있어야 합니다.

- SD card remains undetected by console or continues to display the wrong capacity after formatting
  - Your SD card may be partitioned or have unallocated space. [이 가이드](https://wiki.hacks.guide/wiki/SD_Clean/Windows)를 따라 SD 카드를 다시 포맷해 주세요
