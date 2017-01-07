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
+ 既にEmuNANDが3DSに導入されていて、以前のEmuNANDの内容を新しいSysNAND CFWに移行したい場合、あなたは全ての指示に従ってください。そして[Installing arm9loaderhax](installing-arm9loaderhax)のページで、既存のEmuNANDをSysNANDにリストアするよう促す小窓が表示されます。
+ このガイドでは、ファームウェア11.2.0以下で、全てのリージョン*(CHN / TWNを除く)*のNew 3DS、旧3DS、および2DS上で動作します。
+ すべてが計画通りに進めば、データは全く失われず、あなたが作業の前に使用していたすべてのもの (ゲーム、NNID、セーブなど) が保持されます。
+ **予期しない電源オフによるデータの損失や損傷を避けるため、作業全体を通してデバイスのプラグを差し込んだままにしておいてください！**
+ SDカードは [MBR (GPTではなく)](http://www.howtogeek.com/245610/)でフォーマットされている必要があります (3DSに付属のSDカードはデフォルトでMBRです) 。
+ SDカードをフォーマットする必要がある場合は、[`guiformat`](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm)を使用することができます。
+ 2DSはソフトウェア面ではOld 3DSと本質的に同じであり、"Old 3DS"で行うステップは2DSにも適用されます。