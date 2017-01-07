* * *

layout: splash permalink: / title: "Guide" header: overlay_color: "#5e616c" overlay_image: images/home-page-feature.jpg overlay_filter: 0.5 cta_label: "Get Started" cta_url: "/get-started" caption: excerpt: 'A complete guide to 3DS custom firmware,   
from stock to arm9loaderhax.  
' lang: en_US ref: home

* * *

{% capture notice-home %} **このガイドは、一般に販売されている3DS (Nintendo Developer Programで配布されるものではない)*専用* です！  
開発ハードウェア ("PANDA"や"SNAKE") を使用している場合、[devGuide](https://dev.3ds.guide)をご覧ください** {% endcapture %}

<div class="notice--danger">{{ notice-home | markdownify }}</div>

**このガイドでは、[これらのTorrent](https://3ds.guide/rss.xml) *をシードしていただける方*を必要としています！** {: .notice--info}

**このガイドの[マグネットリンク](https://en.wikipedia.org/wiki/Magnet_URI_scheme)を使用するには、[Deluge](http://dev.deluge-torrent.org/wiki/Download)のようなTorrentクライアントが必要です！** {: .notice--info}

**実践する前に、紹介されているすべてのページをお読みください。** {: .notice--warning}

## Homebrewとは

[**Homebrew**](https://en.wikipedia.org/wiki/List_of_homebrew_video_games) は通常、任天堂が許可していないソフトウェアを指します。 自作ゲーム、セーブデータ改造やバックアップ、さまざまな古いゲームのエミュレータなどのソフトウェアを実行できます。

ほとんどの場合、「ニンテンドー3DSサウンド」の脆弱性を使用するだけで、つまり100％無料で3DSでHomebrewを実行することができます。 他にも、ゲームやインターネットブラウザなどに、Homebrewを起動するための脆弱性は多く存在します。

## カスタムファームウェアとは

**カスタムファームウェア** ("CFW") は、Homebrewのみでは実現し難い高度なハックを可能にします。 例えば「署名回避パッチ」は、署名のない、許可されていないソフトをHOMEメニューにインストールできます。

CFWは11.2.0-35 (最新) 以下の3DSで簡単に導入できます。他のバージョンでは、ファームウェアをダウングレードすることができます。

## このガイドは何をインストールしますか？

このガイドでは、未改造の3DSを通常のファームウェアからarm9loaderhax搭載のカスタムファームウェアに変更することを最終目標としています。 一部のバージョンではHomebrewを出発点として利用していますが、最終的にはカスタムファームウェアを導入します。

Arm9loaderhaxは、WiiにおけるBootMiiと似た、起動からわずか数ミリ秒のシステムをほぼ完全に制御できる、カスタムファームウェアを起動する最新かつ最良の方法です。

他のカスタムファームウェアの起動方法に比べてarm9loaderhaxのメリットは数多くあり、古いバージョンのソフトウェア ( menuhaxやrxToolsなど) に依存する方法よりもこのガイドを使用することをお勧めします。

## カスタムファームウェアで何ができますか？

+ リージョンに関係なく、すべてのゲームカードとeShopゲームを遊ぶ
+ [テーマ](https://3dsthem.es/)や[バッジ](https://badges.3dsthem.es/)でHOMEメニューをカスタマイズ
+ 自分が所有するゲームに「ROMハック」を使用する
+ ゲームプレイやアプリケーションのスクリーンショットを撮る
+ ゲームのセーブデータを[バックアップ、編集、リストア](https://gbatemp.net/threads/release-jks-savemanager-homebrew-cia-save-manager.413143/)
+ RetroArchまたは他のエミュレータを使用して、古いハード用のゲームを遊ぶ (Newニンテンドー3DSで快適に動作)
+ 3DSにHomebrewタイトルをインストールし、HOMEメニューに表示させる
+ ゲームカードを吸い出してインストールし、カートリッジ (カセット) を必要とせずに起動
+ New 3DSのみ: NTR CFWを使い、ゲーム映像をPCに無線ストリーミングして表示
+ 本体更新によって使えなくなった、または3DSで使えた試しのない、昔のDSマジコンを起動
+ Homebrewソフトへのアクセスが失われることなく、安全に最新のシステムバージョンに更新

## 始める前に知っておくべきことは何ですか？

+ **ガイドを始める前に、3DSを改造するリスクを知っていなければなりません。システムを変更を加える度に、回復不能な文鎮となる可能性が発生します。 文鎮化はまれですが可能性はあります、必ずすべての指示に従ってください。**
+ If you have already hacked your 3DS before to get an EmuNAND setup, and would like to move the contents of your previous EmuNAND to your new SysNAND CFW, you should follow all instructions and restore your existing EmuNAND when prompted once you reach [Installing arm9loaderhax](installing-arm9loaderhax).
+ This guide will work on New 3DS, Old 3DS, and 2DS in all regions on firmware 11.2.0 or below *(except CHN / TWN)*.
+ If everything goes according to plan, you will lose no data and end up with everything that you started with (games, NNID, saves, etc will be preserved).
+ **Keep the device plugged in and charged throughout the entire process to avoid data loss or damage from an unexpected power-off!**
+ Your SD card should be [MBR, not GPT](http://www.howtogeek.com/245610/) (the SD card that comes with the device will be MBR by default).
+ If you need to format a brand new SD card, you can use [`guiformat`](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) and set to an Allocation Unit Size of 32K.
+ The 2DS is essentially identical to the Old 3DS in terms of software, and that any steps which say "Old 3DS" also apply to 2DS.