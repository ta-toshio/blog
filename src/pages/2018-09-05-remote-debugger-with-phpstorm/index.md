---
path: "/remote-debugger-with-phpstorm"
date: "2018-09-05T08:01:51.284Z"
title: "Remote Debugger With Phpstorm"
tags: []
---

PhpStormでステップ実行でのデバッグをするための解説です。
度々忘れるので記事にします。

動作環境

* Docker on Mac (Version: 18.06.0-ce-mac70 (26399))
* PhpStorm (Version: PhpStorm 2018.1.6)

# 目次
- Xdebugの設定
  - Xdebugのインストール
  - Xdebugのリモートデバッグ機能の設定
- PhpStormの設定
  - server項目の設定
  - config項目の設定
  - デバッグ起動


# Xdebugの設定

## Xdebugをインストール

PHPが動作するコンテナのDockerfileの例

`gist:ta-toshio/8d3d19048f45f05bacecfcd1b29fdd02#php-fpm-Dockerfile`


## Xdebugのリモートデバッグ機能の設定

xdebug.iniの例

`gist:ta-toshio/8d3d19048f45f05bacecfcd1b29fdd02#xdebug.ini`

以下のサイトに全ての項目ではありませんが、各項目の分かりやすい説明がありました。
https://qiita.com/castaneai/items/d5fdf577a348012ed8af


xdebug.remote_hostに少し解説します。

デバッグの制御を開始するには、PHP動作側とリモートをつなぐ必要があります。PHP動作側（つまりコンテナ）からホスト（Mac、PhpStorm）に接続したいわけです。

remote_hostに設定する値は、ホストのIPを名前解決する値を指定するわけですが、その値は `host.docker.internal`としてdockerが用意してくれています。

> The host has a changing IP address (or none if you have no network access). From 18.03 onwards our recommendation is to connect to the special DNS name host.docker.internal, which resolves to the internal IP address used by the host. This is for development purpose and will not work in a production environment outside of Docker for Mac.

https://docs.docker.com/docker-for-mac/networking/#i-cannot-ping-my-containers

こちらの値でも接続できるはずですが、そのうち使えなくなります。
- docker.for.mac.localhost
- docker.for.mac.host.internal

https://docs.docker.com/docker-for-mac/release-notes/#docker-community-edition-18030-ce-mac59-2018-03-26

# PhpStormの設定

## Server項目の設定

<img src="/images/2018-09-05/server.jpg" />

0. Phpstorm -> Preferences -> Laguages & Frameworks -> PHP -> Server
1. Nameは何でもよくて、
2. Hostはブラウザからアクセスするホスト名を入力して、
3. Use path mappings ~ にチェックを入れて、
4. Project Filesの Absolute path on the serverにコンテナ内で配置されているパスを記入します。
5. Apply -> OK

## Config項目の設定

<img src="/images/2018-09-05/run-edit-conf.jpg" />

<img src="/images/2018-09-05/debug-server-conf.jpg" />

0. RUN -> Edit Configurations...
1. +
2. PHP Remote Debug
3. Nameは何でもよくて
4. Serverは「server項目の設定」1で入力したNameが選択できるようになっています。それを選択。（写真ではxdebugとなっていますが、anynameと登録していたらanynameが選択できるようになっているはずです。）
5. IDE Keyはxdebug.iniで入力したxdebug.idekeyを入力します。
5. Apply -> OK

## デバッグ起動

0. RUN -> Debug
1. 「Config項目の設定」3で入力した名前が選択できるようになっています。それを選択。
2. 起動されたので、適当にブレイクポイントをセットして、ブラウザアクセスで確認です。

以上になります。
