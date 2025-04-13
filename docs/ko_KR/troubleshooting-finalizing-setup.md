# 문제 해결 (마무리 단계)

이 페이지는 "마무리 단계" 페이지에서 흔히 일어나는 문제에 관한 해결책을 기재합니다. 만약 이 페이지의 해결책만으로 문제를 해결할 수 없다면, [Nintendo Homebrew Discord 서버](https://discord.gg/MWxPgEp)에 들어가서 당신의 문제와 시도한 해결책을 설명해 주세요.

## 마무리 단계에서의 문제

:::details 본체 업데이트를 할 수 없습니다

다음 단계는 순서 없이 진행 가능하나, 하기 쉬운 것부터 어려운 순서로 정렬되어 있습니다.

1. If you are using Pretendo, switch back to Nintendo with Nimbus and try again
2. DNS 설정을 "자동"으로 설정해 주세요
3. 콘솔을 Wi-Fi 공유기에 가까이 가져가 주세요
4. 콘솔을 끄고, L 버튼 + R 버튼 + D패드 위 + A 키를 눌러 안전 모드로 들어가 화면의 지시대로 업데이트를 진행해 주세요
5. Wi-Fi 연결 설정을 삭제한 후 다시 Wi-Fi에 연결해 주세요
6. WI-Fi 공유기를 다시 시작해 주세요
7. 모바일 핫스팟과 같이, 다른 Wi-Fi로 연결해 주세요
8. Nintendo 서버가 점검 중일 수 있습니다. 나중에 다시 시도해 주세요
9. 만약 여전히 오류가 발생한다면, [CTRTransfer](ctrtransfer)를 진행한 후 다시 시도해 주세요
10. 지원이 필요하면 [Nintendo Homebrew Discord 서버](https://discord.gg/MWxPgEp)에 (영어로) 지원을 요청해 주세요

:::

:::details Error #22: finalize.romfs is invalid

`finalize.romfs` 파일이 손상되었거나 읽을 수 없는 상태입니다. [파일을 다시 다운로드](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs)하고 파일을 SD 카드의 최상위 디렉토리에 복사하세요. 파일이 이미 존재한다면 덮어쓰기하고, 과정을 다시 시도하세요.

:::

:::details Information #23: finalize.romfs in wrong location

`finalize.romfs` 파일이 SD 카드의 루트 폴더가 아닌 다른 잘못된 위치에 배치되었습니다. 스크립트가 이 문제를 해결할 수 있지만, 권한 허가가 필요합니다. (A) 버튼을 눌러 과정을 계속하세요.

:::

:::details Error #24: SD is write-protected

SD 카드가 [쓰기 금지](/images/sdlock.png) 상태가 아닌지 확인해 주세요. 이 상태가 아님에도 문제가 지속될 경우, [Nintendo Homebrew Discord 서버](https://discord.gg/MWxPgEp) 에 연락해 도움을 청하세요.

:::

:::details Error #02: Missing essential.exefs

GodMode9에서 "Make essential files backup?" 알림에서 No를 선택했을 때 뜹니다. Power off your console, power it on while holding (Start) to re-enter GodMode9, say 'Yes' to the prompt, then try again.

:::

:::details Error #04: No space

스크립트의 일부인 NAND 백업을 수행하려면 메모리 카드에 최소 1.3GB 여유 공간이 필요합니다. 빈 공간이 부족하다면 다음 단계를 따르세요.

1. 콘솔의 전원을 꺼 주세요
2. SD 카드를 컴퓨터에 삽입해 주세요
3. SD 카드의 루트에 있는 `Nintendo 3DS` 폴더를 컴퓨터에 복사해주세요
4. SD 카드에서 `Nintendo 3DS` 폴더를 지워주세요
5. SD 카드를 콘솔에 다시 삽입해 주세요
6. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
7. HOME 버튼을 눌러 주세요.
8. "Scripts..."를 선택해 주세요
9. "finalize"를 선택해 주세요
10. (A)를 눌러 NAND 백업본을 만드세요
    - 예상 소요 시간은 약 15 분입니다
11. (A) 를 한 번 더 누르세요
    - 콘솔의 전윈이 자동으로 꺼질 겁니다
12. SD 카드를 컴퓨터에 삽입해 주세요
13. SD 카드의 `/gm9/backups/` 폴더 내 파일들을 컴퓨터의 안전한 위치에 복사해 주세요
14. `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` 파일을 SD 카드에서 지워주세요
15. 컴퓨터에서 SD 카드의 루트로 복사해 두었던 `Nintendo 3DS` 폴더를 다시 복사해 주세요
16. 컴퓨터에서 `Nintendo 3DS` 폴더를 지워주세요

이제 안전한 저장소로 NAND 백업이 완료되었습니다. 다음 단계를 따라 주세요:

1. SD 카드를 콘솔에 다시 삽입해 주세요
2. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
3. HOME 버튼을 눌러 주세요.
4. "Scripts..."를 선택해 주세요
5. "finalize"를 선택해 주세요
6. 스크립트를 계속 실행해 주세요
    - NAND 백업은 자동으로 스킵됩니다.

:::

:::details Information #05: No title database

(A)를 눌러 타이틀 데이터베이스를 주입한 뒤 화면의 키콤보를 입력해 SysNAND의 쓰기 잠금을 해제하고 스크립트를 계속 진행해 주세요

:::

:::details NAND 백업을 시도할 때 Error #06 또는 "Error: Could not open directory"가 표시될 경우:

SD 카드에 1.3GB 이상의 빈 공간이 있는지 확인해주세요. 빈 공간이 부족하다면 다음 단계를 따르세요.

1. 콘솔의 전원을 꺼 주세요
2. SD 카드를 컴퓨터에 삽입해 주세요
3. SD 카드의 루트에 있는 `Nintendo 3DS` 폴더를 컴퓨터에 복사해주세요
4. SD 카드에서 `Nintendo 3DS` 폴더를 지워주세요
5. SD 카드를 콘솔에 다시 삽입해 주세요
6. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
7. [NAND 백업](godmode9-usage#creating-a-nand-backup)을 실행하세요
8. SD 카드의 `gm9/out` 폴더 내 파일을 컴퓨터의 안전한 위치에 복사해 주세요
9. SD 카드의 `/gm9/out` 폴더에서 essential.exefs는 남기고 `<date>_<serialnumber>_sysnand_##.bin` 및 `<date>_<serialnumber>_sysnand_##.bin.sha` 파일을 삭제해주세요
10. 컴퓨터에서 SD 카드의 루트로 복사해 두었던 `Nintendo 3DS` 폴더를 다시 복사해 주세요
11. 컴퓨터에서 `Nintendo 3DS` 폴더를 지워주세요

SD 카드의 용량이 충분하다면, SD 카드가 손상되었거나 불량일 수 있습니다. 컴퓨터의 운영 체제에 따라 SD 카드에 오류가 있는지를 확인해주세요: [Windows](h2testw-\(windows\)), [Linux](f3-\(linux\)), [macOS](f3xswift-\(mac\)).

:::

:::details Error #12: Copy (file).db fail

SD 카드가 [쓰기 금지](/images/sdlock.png) 상태가 아닌지 확인해 주세요. 이 상태가 아님에도 문제가 지속될 경우, [Nintendo Homebrew Discord 서버](https://discord.gg/MWxPgEp) 에 연락해 도움을 청하세요.

:::

:::details Information #17: Duplicate NAND backup

스크립트가 Nintendo 3DS 폴더가 없는 것을 확인했고 또한 NAND 백업을 이전에 만들었을 경우 표시됩니다. 홈브류 애플리케이션을 설치할 의향이 있을 경우, 다음 방법을 따라주세요.

1. (B) 를 눌러 또 다른 NAND 백업 생성을 중지해 주세요
2. (R)을 누른 채 (Start)를 눌러 콘솔의 전원을 꺼 주세요
3. `/gm9/backups/` 폴더 내 파일들을 컴퓨터에 백업해 주세요
4. `/gm9/backups/` 폴더를 SD 카드에서 지워주세요
5. Nintendo 3DS 폴더를 SD 카드에서 다른 곳으로 옮겨놨을 경우, SD 카드로 다시 복사해 주세요.
    - Nintendo 3DS 폴더가 없을 경우, 콘솔에 SD 카드를 장착한 채로 HOME 메뉴로 부팅하여 SD 카드에 자동으로 폴더가 생성되도록 해야 합니다.
6. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
7. (Home)을 눌러 작업 메뉴를 열어 주세요
8. "Scripts..."를 선택해 주세요
9. "finalize"를 선택해 주세요
10. 스크립트 표시에 따라 필요한 행동을 취해주세요

:::

:::details Error #18a/18b: MSET9 detected

이전 페이지에서 MSET9가 제거되지 않았습니다. 스크립트가 MSET9를 자동으로 삭제하려 시도할 것입니다. 스크립트가 제시하는 절차를 따르십시오.

:::

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

[마무리 단계](finalizing-setup) 로 돌아갑니다

:::

<!--@include: ./_include/troubleshooting-return.md -->
