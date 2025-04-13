---
noneSelected: 시스템 모델을 선택하세요.
invalidVersion: 올바른 시스템 버전으로 확인되지 않습니다.
otherPrefix: (기타)
head:
  - - script
    - src: /assets/js/common.js
  - - script
    - src: /assets/js/selecting.js
---

# 시작하기

이 가이드를 본격적으로 시작하기 전에, 현재 콘솔에 커스텀 펌웨어가 이미 설치되어 있는지, 시스템 버전이 무엇인지를 확인할 것 입니다.

### 섹션 I - CFW 확인

1. 콘솔의 전원을 꺼 주세요
2. (Select) 버튼을 길게 눌러 주세요
3. (Select) 버튼을 계속 눌러 있는 상태에서 콘솔의 전원을 켜 주세요
4. 커스텀 메뉴가 아닌 HOME 메뉴로 부팅이 되었다면 다음 섹션으로 진행할 수 있습니다

::: warning

만약 Luma3DS 구성 화면 또는 기타 커스텀 메뉴 (예: GodMode9/Decrypt9WIP)가 표시되면 멈추세요 - 커스텀 펌웨어가 이미 설치되어 있습니다! [이 섹션](checking-for-cfw#what-to-do-next)으로 진행해 주세요.

:::

### 섹션 II - 시스템 버전 확인

1. 콘솔에서 본체 설정을 열어 주세요
2. 시스템 버전은 위 화면의 오른쪽 하단에 표시됩니다 (예: "Ver. 11.17.0-50U")

### 섹션 III - 방법 선택

올바른 방법을 사용하기 위해, 섹션 II에서 확인한 시스템 버전을 입력해 주세요.

<!--@include: @/_internal/consoleVersionSelect.html -->

---

#### 다른 방법

가능하면, 위 박스에 표시되는 방법을 따르는 것을 추천합니다.

아래의 방식은 모든 버전과 호환되나, 추가 하드웨어를 필요로 합니다.

1. [ntrboot](ntrboot) - 호환되는 DS 플래시카드 필요
2. [boot9strap 설치 (하드모드)](installing-boot9strap-\(hardmod\)) - 납땜 필요
