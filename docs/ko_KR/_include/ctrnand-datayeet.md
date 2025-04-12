이 섹션에서는 시스템 설정을 기본값으로 복구하게 됩니다. **설치된 게임과 저장 데이터에는 영향이 없습니다.** 이 절차는 확장 메모리와 에플릿 관련 문제를 해결하는데 **필수입니다.**

::: warning

This process will reset your Mii data. If you wish to save any Miis that you have created, either [generate a QR code](https://en-americas-support.nintendo.com/app/answers/detail/a_id/298/~/how-to-generate-a-qr-code%E2%84%A2-for-a-mii) for each Mii that you want to save, or make a backup of `SYSNAND CTRNAND:/data/<ID0>/extdata/00048000/f000000b` before following these instructions. You can restore this file to the same directory _after_ your console has gone through initial setup.

:::

1. 콘솔의 전원을 꺼 주세요
2. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
3. `[0:] SDCARD` -> `gm9` -> `in`으로 이동해 주세요
4. CTRTransfer 이미지 `.bin`에 (X)를 눌러 삭제해 주세요
5. (A)를 눌러 확인해 주세요
6. (B) 버튼을 여러 번 눌러 메인 메뉴로 돌아가 주세요
7. `[1:] SYSNAND CTRNAND` -> `data` -> `<ID0>` -> `sysdata` -> `<0>` 폴더로 이동해 주세요
    - `<ID0>` 폴더의 이름은 32개의 알파벳과 숫자로 이루어져 있습니다
8. 십자 패드를 이용해 `00010017`을 선택해주세요
9. (R 버튼) + (A) 버튼을 눌러 폴더 옵션을 불러와주세요
10. "Copy to 0:/gm9/out"를 선택해 주세요
11. (A)를 눌러 진행해 주세요
12. `00010017`을 계속 선택한 상태에서, (X)를 눌러 삭제해주세요
13. (A)를 눌러 확인해 주세요
14. (A)를 눌려 SysNAND (lvl1) 쓰기 잠금을 풀고 주어진 키 조합을 입력해 주세요
15. 작업이 완료되면 (A)를 눌려 계속해 주세요
16. 메세지가 표시되면, (A)를 눌러서 쓰기잠금을 확인해 주세요
17. (Start)를 눌러 콘솔을 다시 시작해 주세요
18. 콘솔이 최초 실행 메뉴로 부팅될 것입니다
    - 이것은 의도적 행동입니다. 게임 데이터는 손실되지 않습니다
19. 콘솔에 표시되는 안내를 따라 최초 설정을 마무리해주세요
