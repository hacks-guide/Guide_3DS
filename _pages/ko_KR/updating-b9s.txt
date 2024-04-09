---
title: "B9S 업데이트"
---

{% include toc title="목차" %}

### 중요

이 페이지는 기존 boot9strap 사용자중 최신 버전의 boot9strap 으로 업데이트 과정을 설명한 페이지 입니다.

### 준비물

* 최신 버전의 [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (직접 다운로드)
* 최신 버전의 [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (직접 다운로드)
* 최신 버전의 [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (`.zip` 파일)

### 진행 방법

#### 섹션 I - 준비 작업

모든 과정에서, SD 카드에 이미 존재하는 파일들은 모두 덮어쓰기 해주세요.
{: .notice--info}

1. SD 카드를 컴퓨터에 삽입해 주세요
1. SD 카드이 루트에 `boot9strap` 라는 이름으로 새 폴더를 생성해 주세요
1. SD 카드에 있는 `/boot9strap/` 폴더에 boot9strap `.zip` 파일 안에 압축되있는 `boot9strap.firm`과 `boot9strap.firm.sha`을 복사해 주세요
1. SafeB9SInstaller `.zip`의 `SafeB9SInstaller.firm`을 SD 카드의 루트에 복사하고 `boot.firm`으로 이름 변경해 주세요
1. SD 카드를 콘솔에 다시 삽입해 주세요

    ![]({{ "/images/screenshots/updateb9s-root-layout.png" | absolute_url }})
    {: .notice--info}


#### 섹션 II - boot9strap 설치하기

1. 콘솔의 전원을 켜 주세요
    + SafeB9SInstaller가 자동으로 시작할 겁니다
{%- include_relative include/install-boot9strap-safeb9sinstaller.txt isbootfirm="true" inline="true" %}

#### 섹션 III - Luma3DS 업데이트

1. SD 카드를 컴퓨터에 삽입해 주세요
1. Luma3DS `.zip`안에 있는 `boot.firm`과 `boot.3dsx`를 SD 카드의 루트에 복사해 주세요. 이미 존재하는 파일을 덮어쓰기 해 주세요
1. SD 카드를 콘솔에 다시 삽입해 주세요
1. 콘솔의 전원을 켜 주세요
1. 만약 Luma3DS 설정 메뉴로 부팅되었다면, (Start)를 눌러서 저장/리부트해 주세요
    + Luma3DS 구성 메뉴는 Luma3DS 커스텀 펌웨어의 설정들 입니다. 이 설정들은 디버깅 또는 맞춤화의 유용합니다
    + 이 가이드에서는 기본 설정으로 남길 겁니다

___

### [마무리 단계](finalizing-setup) 로 계속합니다
{: .notice--primary}
