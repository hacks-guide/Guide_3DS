---
title: "CTRTransfer"
---

{% include toc title="목차" %}

### 중요

이것은 콘솔에 11.15.0 CTRTransfer 이미지를 설치하는 부가 섹션입니다.

이 페이지에서는 이미 Luma3DS와 boot9strap이 설치되어 있는 것으로 가정합니다. 이 웹사이트를 끝까지 진행했다면 (마무리 단계), Luma3DS와 boot9strap이 설치되어 있는 것입니다.
{: .notice--info}

이 과정에서, 콘솔의 본체 설정이 초기화 될 겁니다. 이것은 사용자 이름, 국가, 언어 등을 포함합니다. **설치 되있는 게임 및 저장 데이터는 유지될 것이니, 걱정 안하셔도 됩니다.**
{: .notice--warning}

### 준비물

* 최신 버전의 [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (`.zip` 파일)
* 최신 버전의 [FBI](https://github.com/lifehackerhansol/FBI/releases/download/2.6.1/FBI.3dsx) (직접 다운로드)
* 최신 버전의 [faketik](https://github.com/ihaveamac/faketik/releases/latest) *(`.3dsx` 파일)*
* A torrent client like [qBittorrent](https://www.qbittorrent.org/download.php) or [Deluge](http://dev.deluge-torrent.org/wiki/Download)
    * If you already have a torrent client, you do not need to download a new one
* 콘솔과 지역에 맞는 11.15.0 CTRTransfer 이미지:
{% include_relative include/ctrtransfer-images.txt %}

### 진행 방법

#### 섹션 I - 준비 작업

{% include_relative include/ctrtransfer-prep.txt %}

#### 섹션 II - NAND 백업

1. (Start) 를 길게 누르고, 이 상태에서 콘솔의 전원을 켜 주세요. GodMode9이 실행될 겁니다
{% include_relative include/nand-backup.txt %}

#### 섹션 III - CTRTransfer

{% include_relative include/ctrtransfer-main.txt %}

#### 섹션 IV - FBI 실행

{% include_relative include/launch-hbl-dlp.txt %}

#### 섹션 V - 티켓 재설치

{% include_relative include/ctrtransfer-ticket-copy.txt %}

#### 섹션 VI - 로케일 관련 문제 해결

{% include_relative include/ctrnand-datayeet.txt %}

___

### [마무리 단계](finalizing-setup) 로 계속합니다
{: .notice--primary}
