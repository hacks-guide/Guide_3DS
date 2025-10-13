# B9Sのアップデート

## 必読

このページは、既存のboot9strap ユーザーがboot9strap を最新バージョンにアップデートするためのものです。

## 必要なもの

- 最新リリースの [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip) (直接ダウンロード)
- 最新リリースの [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip) (直接ダウンロード)
- 最新リリースの [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) (Luma3DSの`.zip` ファイル)

## 手順

### セクション I - 準備作業

::: info

このセクションのすべての手順では、SD カード上の既存のファイルをすべて上書きします。

:::

1. パソコンにSDカードを入れます
2. `boot9strap`という名前のフォルダをSDカードのルート上に作成します。
3. `boot9strap.firm`と`boot9strap.firm.sha`を boot9strap `.zip` ファイルから解凍し、SD カードのboot9strapフォルダにコピーします。
4. `SafeB9SInstaller.zip` から `SafeB9SInstaller.firm` をSDカードのルートにコピーし、名前を `boot.firm` に変更します。
5. SDカードをコンソールに再度挿入します

   ::: info

   ![](/images/screenshots/updateb9s-root-layout.png)

   :::

### セクション II - boot9strapのインストール

1. コンソールの電源をオンにします
   - これにより、SafeB9SInstallerが自動的に起動します。
2. プロンプトが表示されたら、上部の画面に表示されているキーの組み合わせを入力してboot9strapをインストールします。
   - 画面下部の手順に赤いテキストが表示され、キーの組み合わせを入力するように求められない場合は、[このトラブルシューティングガイドに従ってください](troubleshooting-updating-b9s)
3. 完了したら、電源ボタンを長押ししてコンソールの電源を強制的にオフにします。
   - 次のセクションが完了するまで、コンソールはSafeB9SInstallerの画面のみ起動します。

### セクション III - Luma3DSのアップデート

1. パソコンにSDカードを入れます
2. Luma3DS の `.zip` ファイルをSDカードのルートディレクトリにコピーし、既存のファイルを置き換えます。
3. SDカードをコンソールに挿入し直します。
4. コンソールの電源を入れます。
5. コンソールがLuma3DSの設定メニューを起動した場合は、（スタート）ボタンを押して保存し、再起動します。
   - Luma3DSの設定メニューは、Luma3DSカスタムファームウェアの設定です。これらの設定の多くは、カスタマイズやデバッグに役立ちます。
   - このガイドでは、これらの設定はデフォルト設定のままとします。

___

::: tip

[セットアップの最終処理](finalizing-setup) に進む

:::
