# 문제 해결 (마무리 단계)

이 페이지는 "마무리 단계" 페이지에서 흔히 일어나는 문제에 관한 해결책을 기재합니다. 만약 이 페이지의 해결책만으로 문제를 해결할 수 없다면, [Nintendo Homebrew Discord 서버](https://discord.gg/MWxPgEp)에 들어가서 당신의 문제와 시도한 해결책을 설명해 주세요.

## Issues with Finalizing Setup

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

The file `finalize.romfs` is corrupt or unreadable. [Re-download it](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) and copy it to the root of the SD card, replacing any existing copy, then try again.

:::

:::details Information #23: finalize.romfs in wrong location

The file `finalize.romfs` was placed in the wrong location instead of root of SD. The script will attempt to resolve this, but requires your permission to do so. Press (A) on the next few prompts to continue.

:::

:::details Error #24: SD is write-protected

SD 카드가 [쓰기 금지](/images/sdlock.png) 상태가 아닌지 확인해 주세요. 이 상태가 아님에도 문제가 지속될 경우, [Nintendo Homebrew Discord 서버](https://discord.gg/MWxPgEp) 에 연락해 도움을 청하세요.

:::

:::details Error #02: Missing essential.exefs

You said 'No' to the "Make essential files backup?" prompt in GodMode9. Power off your console, power it on while holding (Start) to re-enter GodMode9, say 'Yes' to the prompt, then try again.

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
10. Press (A) to create a NAND backup
    - 예상 소요 시간은 약 15 분입니다
11. (A) 를 한 번 더 누르세요
    - 콘솔의 전윈이 자동으로 꺼질 겁니다
12. SD 카드를 컴퓨터에 삽입해 주세요
13. SD 카드의 `/gm9/backups/` 폴더 내 파일들을 컴퓨터의 안전한 위치에 복사해 주세요
14. Delete the `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` files from the SD card
15. 컴퓨터에서 SD 카드의 루트로 복사해 두었던 `Nintendo 3DS` 폴더를 다시 복사해 주세요
16. 컴퓨터에서 `Nintendo 3DS` 폴더를 지워주세요

Now that you have your NAND backup in a safe place:

1. SD 카드를 콘솔에 다시 삽입해 주세요
2. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
3. HOME 버튼을 눌러 주세요.
4. "Scripts..."를 선택해 주세요
5. "finalize"를 선택해 주세요
6. Continue the script as normal
   - The NAND backup will be automatically skipped

:::

:::details Information #05: No title database

Press (A) to import a title database, unlock SysNAND writing by entering the buttons on-screen, then continue the script as normal.

:::

:::details Error #06 or "Error: Could not open directory" when attempting a NAND backup

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

The script has detected that the Nintendo 3DS folder is missing AND that you have already made a NAND backup before. If you intend to install homebrew applications, you should do the following:

1. Press (B) to cancel making another NAND backup
2. (R)을 누른 채 (Start)를 눌러 콘솔의 전원을 꺼 주세요
3. Copy the contents of `/gm9/backups/` to a safe location on your computer
4. Delete `/gm9/backups/` from your SD card
5. If you moved your Nintendo 3DS folder off of your SD card to get to this point, copy it back to your SD card
   - If you do not have a Nintendo 3DS folder, boot into the HOME Menu at least once with the SD card inserted to automatically generate it
6. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
7. (Home)을 눌러 작업 메뉴를 열어 주세요
8. "Scripts..."를 선택해 주세요
9. "finalize"를 선택해 주세요
10. 스크립트 표시에 따라 필요한 행동을 취해주세요

:::

:::details Error #18a/18b: MSET9 detected

이전 페이지에서 MSET9가 제거되지 않았습니다. The script will attempt to remove MSET9 for you; follow the instructions given by the script.

:::

<!--@include: ./_include/troubleshooting-get-help-common.md -->

---

::: tip

[마무리 단계](finalizing-setup) 로 돌아갑니다

:::

<!--@include: ./_include/troubleshooting-return.md -->
