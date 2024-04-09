---
layout: splash
title: "3DS 해킹 가이드" #
header:
  overlay_color: "#5e616c" #
  overlay_image: /images/home-page-feature.jpg
  overlay_filter: 0.5
  cta_label: "시작하기"
  cta_url: "key-information"
  caption:
excerpt: "3DS와 2DS를 위한 커스텀 펌웨어 완벽 가이드, <br /> 순정에서 boot9strap까지.<br />"
---

진행하기 전에 모든 소개 페이지(이 페이지 포함) 를 철저히 읽어 주세요.
{: .notice--info}

{% capture update-notice %}
{% include_relative include/3ds-online.txt %}
{% endcapture %}
<div class="notice--danger">{{ update-notice | markdownify }}</div>

## 커스텀 펌웨어란 무엇입니까?

**커스텀 펌워어** ("CFW")란, 3DS의 소프트웨어 개조이며, 컴퓨터의 "관리자 권한"과 비슷한 것입니다. 할 수 있는 걸 닌텐도에서 제한하는 것을 해제하고, 3DS가 하드웨어적으로 가능한 모든 것을 할 수 있게 합니다.

커스텀 펌웨어의 대표적인 사용은 이하와 같습니다.

* 닌텐도 3DS를 위한, 또는 3DS용으로 포트된 홈브류 소프트웨어와 게임 실행
* 타 국가의 게임을 플레이할 수 있도록 하는, 지역 코드 해제
* 타 사용자들이 만든 [테마와 배지](https://themeplaza.art)를 사용한 HOME 메뉴 꾸미기
* [LayeredFS](https://github.com/knight-ryu12/godmode9-layeredfs-usage/wiki/Using-Luma3DS'-layeredfs-(Only-version-8.0-and-higher))를 이용한 게임 개조 ("ROM 핵")
* 세이브 데이터 편집, 백업 및 복구
* 옛날 콘솔의 에뮬레이션 및 DS / GBA 게임의 플레이
* 카트리지판 게임의 디지털 설치

## 이 가이드는 무엇을 설치하는 가이드입니까?

이 가이드는:
+ 순정 3DS/2DS 콘솔에 **boot9strap** 및 **Luma3DS 커스텀 펌웨어**를 설치합니다
    + Luma3DS를 사용해서 지역 코드를 자동으로 없에고, 커스텀 소프트웨어를 실행할 수 있도록 해 줍니다
+ 패키지 인스톨러, 세이브 파일 매니저, 홈브류 앱 스토어 등 여러 홈브류 소프트웨어를 설치합니다
+ 벽돌 방지를 도울 수 있도록, 중요한 시스템 파일의 백업을 생성 (필요할 시에는 복원)합니다

___

### [주요 내용](key-information)으로 계속합니다
{: .notice--primary}
