# Formatting SD (Linux)

## Required Reading

이곳은 3DS와 쓰기 위한 SD 카드를 포맷하는 부가 섹션입니다.

만약 3DS가 이미 SD 카드를 인식한다면, 이 가이드는 따를 필요가 없습니다.

이 페이지는 Linux 사용자를 위한 페이지입니다. 만약 Linux에서 하는 것이 아니라면, [SD 포맷하기 (Windows)](formatting-sd-\(windows\))나 [SD 포맷하기 (Mac)](formatting-sd-\(mac\)) 페이지들을 찾아봐 주세요.

## Instructions

1. SD 카드가 삽입되어 있지 **않아야** 합니다
2. Linux 터미널을 시작해 주세요
3. `watch "lsblk"`를 입력해 주세요
4. SD 카드를 컴퓨터에 삽입해 주세요
5. 출력값을 확인해 주세요. 아래와 같이 보일 것입니다:
   ```
   NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
   mmcblk0     179:0    0   3,8G  0 disk
   └─mmcblk0p1 179:1    0   3,7G  0 part /run/media/user/FFFF-FFFF
   ```
6. 장치 이름을 기록해 두세요. 위 예시에서는 `mmcblk0p1`입니다.
   - If `RO` is set to 1, make sure the lock switch is not slid down
7. CTRL + C 를 입력해 메뉴를 닫으세요
8. SD 카드 포멧을 위해 다음을 실행하세요:
   - 2GB or lower: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 16`
     - This creates a single FAT16 partition with 32 KB cluster size on the SD card
   - 4GB - 128GB: `sudo mkfs.fat /dev/(device name from above) -s 64 -F 32`
     - This creates a single FAT32 partition with 32 KB cluster size on the SD card
   - 128GB or higher: `sudo mkfs.fat /dev/(device name from above) -s 128 -F 32`
     - This creates a single FAT32 partition with 64 KB cluster size on the SD card

## 문제 해결

- SD card remains undetected by console or continues to display the wrong capacity after formatting
  - Your SD card may be partitioned or have unallocated space. [해당 링크](https://wiki.hacks.guide/wiki/SD_Clean/Linux)의 가이드를 따라 SD 카드를 다시 포맷해 주세요
