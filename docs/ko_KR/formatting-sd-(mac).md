# Formatting SD (Mac)

## Required Reading

이곳은 3DS와 쓰기 위한 SD 카드를 포맷하는 부가 섹션입니다.

만약 3DS가 이미 SD 카드를 인식한다면, 이 가이드는 따를 필요가 없습니다.

이 페이지는 Mac 사용자를 위한 페이지입니다. 만약 Mac에서 하는 것이 아니라면, [SD 포맷하기 (Windows)](formatting-sd-\(Windows\))나 [SD 포맷하기 (Linux)](formatting-sd-\(linux\)) 페이지들을 찾아봐 주세요.

## Instructions

### OS X El Capitan (10.11) and later

1. SD 카드를 컴퓨터에 삽입해 주세요

2. 만약 SD 카드에 파일이나 폴더가 있다면, 모든 것을 컴퓨터 내 한 폴더에 복사하세요

3. 디스크 유틸리티 앱을 실행해 주세요

4. 위 왼쪽 "보기" 메뉴에서 "모든 기기 보기"를 선택해 주세요

5. 왼쪽 패널에서 SD 카드를 선택해 주세요

   ::: danger

   올바른 디바이스를 선택하는 것을 확인하세요. 잘못하면 다른 드라이브를 포맷할 수도 있습니다!

   :::

6. 위쪽에 "지우기"를 선택해 주세요

7. "이름" 란에 아무 이름을 입력해 주세요

8. "포맷" 창이 "MS-DOS ( FAT )"으로 설정되있는 것을 확인해 주세요

9. "설계" 창이 "마스터 부트 레코드"로 설정되있는 것을 확인해 주세요
   - If "Scheme" does not appear, click "Cancel" and make sure to choose the device instead of a volume

10. "지우기"를 선택해 주세요

11. 포맷이 완료되는 것을 기다리세요

12. "Close"를 클릭하세요

13. 만약 SD 카드에 파일이나 폴더가 있었다면, 백업한 폴더에서 파일들을 다시 넣으세요

### OS X Yosemite (10.10) and earlier

1. SD 카드를 컴퓨터에 삽입해 주세요

2. 만약 SD 카드에 파일이나 폴더가 있다면, 모든 것을 컴퓨터 내 한 폴더에 복사하세요

3. 디스크 유틸리티 앱을 실행해 주세요

4. 왼쪽 패널에서 SD 카드를 선택해 주세요

   ::: danger

   올바른 디바이스를 선택하는 것을 확인하세요. 잘못하면 다른 드라이브를 포맷할 수도 있습니다!

   :::

5. 위쪽에 "파티션"을 선택해 주세요
   - If "Partition" does not appear, make sure to choose the device instead of a volume

6. "볼륨 설게" 창이 "1개외 파티션"으로 설정되있는 것을 확인해 주세요

7. "이름" 란에 아무 이름을 입력해 주세요

8. "포맷" 창이 "MS-DOS ( FAT )"으로 설정되있는 것을 확인해 주세요

9. 파티션 테이블 이하에 "옵션"을 선택해 주세요

10. "마스터 부트 레코드"를 선택해 주세요

11. "OK"를 클릭하세요

12. "적용"을 클릭하세요

13. "파티션"을 클릭하세요

14. 포맷이 완료되는 것을 기다리세요

15. 디스크 유틸리티를 종료해 주세요

16. 만약 SD 카드에 파일이나 폴더가 있었다면, 백업한 폴더에서 파일들을 다시 넣으세요

## 문제 해결

- SD card remains undetected by console or continues to display the wrong capacity after formatting
  - Your SD card may be partitioned or have unallocated space. [해당 링크](https://wiki.hacks.guide/wiki/SD_Clean/Mac)의 가이드를 따라 SD 카드를 다시 포맷해 주세요
