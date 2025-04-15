1. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
2. 만약 "Essential files backup not found" 메세지가 표시되면, (A) 룰 눌러서 백업을 만들고, 끝나면 (A) 를 눌러서 진행해 주세요
3. 만약 "RTC date&time seems to be wrong" 메세지가 표시되면 (A) 버튼을 눌러 하고, 날짜와 시간을 고친 다음 (A) 버튼을 눌러 계속해 주세요
    - 만약 RTC 날짜와 시간을 수정해야 했다면, 이 가이드 끝나고 본체 설정에서도 시간을 수정해야 합니다
4. (Home)을 눌러 작업 메뉴를 열어 주세요
5. "Scripts..."를 선택해 주세요
6. "ctrtransfer"를 선택해 주세요
7. 다운로드한 CTRTransfer 이미지를 선택하세요.
    - 스크립트가 이미지의 해시값을 계산하여, 유효한 이미지인지 확인할 것입니다.
8. 작업이 완료되면 (A)를 눌려 계속해 주세요
9. (A) 를 눌러 SysNAND (lvl2) 쓰기 잠금을 풀고 화면에 표시된 키 조합을 입력해 주세요
10. 작업이 완료되면 (A)를 눌려 계속해 주세요
11. 메세지가 표시되면, (A)를 눌러서 쓰기 권한을 다시 잠궈주세요
12. (Start)를 눌러 콘솔을 다시 시작해 주세요
13. 본체 설정의 "기타 설정"에서 가장 오른쪽에 있는 "본체 업데이트"를 선택해 콘솔을 업데이트해 주세요
    - boot9strap과 Luma을 이용한 (지금 가지고 계신 버전) 업데이트는 안전합니다
    - 오류가 발생하면 DNS 설정을 "자동"으로 설정해 주세요

::: info

At this point, you may remove the CTRTransfer `.bin` and `.bin.sha` files  from the `/gm9/in/` folder to reclaim space on your SD card.

:::