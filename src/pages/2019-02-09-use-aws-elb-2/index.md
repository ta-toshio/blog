---
path: "/use-aws-elb-1"
date: "2019-02-09T06:02:15.403Z"
title: "Use Aws Elb #2"
tags: []
---

前回の続きです。

#### 方針

0. AMIの作成

1. ELBの作成 <- ここから
    * 対象となるサブネット
    * セキュリティーグループの設定

2. ターゲットグループの設定
    * ヘルスチェックの設定
    * どのインスタンスをELBの配下に設定するか

3. Auto Scailingの設定

#### 作業

##### ELBの作成、ターゲットグループの設定

Applicatin Load Balancerを選択後、ロードバランサーの設定の入力画面
![](https://user-images.githubusercontent.com/37950257/52547984-5ad77400-2e0e-11e9-9fcc-2c9741f6a5ee.png)

ヘルスチェック（死活監視）を使用するのに利用するのかな、と推測。


ロードバランサーを適用するアベイラビリティゾーン、ひいてはサブネット
![](https://user-images.githubusercontent.com/37950257/52547986-5ad77400-2e0e-11e9-8b44-b0a2b1916a28.png)

![](https://user-images.githubusercontent.com/37950257/52547987-5ad77400-2e0e-11e9-8cae-fae7cff0192a.png)

セキュリティーブループ
![](https://user-images.githubusercontent.com/37950257/52547988-5b700a80-2e0e-11e9-852e-f2bf3d68deef.png)

httpに変更。あとHTTPSも追加したほうがいいのかもしれない。公開は追加しなかった

ターゲットグループの作成
![](https://user-images.githubusercontent.com/37950257/52547989-5b700a80-2e0e-11e9-8152-751b4a2511d0.png)

![](https://user-images.githubusercontent.com/37950257/52547991-5b700a80-2e0e-11e9-961c-11a6c0d3c102.png)

バランシングするターゲットを登録
![](https://user-images.githubusercontent.com/37950257/52547992-5c08a100-2e0e-11e9-8757-34963ea3433f.png)

今稼働しているインスタンスを選択
![](https://user-images.githubusercontent.com/37950257/52547993-5ca13780-2e0e-11e9-9bcf-af6cee1cb992.png)

「登録済みに追加」ボタンを押下
![](https://user-images.githubusercontent.com/37950257/52547994-5ca13780-2e0e-11e9-98d6-ee8c6d0ac79c.png)


画面上のテーブルにレコードが追加されるので、選択
![](https://user-images.githubusercontent.com/37950257/52547996-5ca13780-2e0e-11e9-9500-a1e99e7edbcf.png)

保存
![](https://user-images.githubusercontent.com/37950257/52547997-5d39ce00-2e0e-11e9-957e-ddf927172f71.png)


ロードバランサー一覧を確認

80ポートの通信はターゲットグループのルール（ここではmy-tg）に従うという意と推測
![](https://user-images.githubusercontent.com/37950257/52548694-7ba1c880-2e12-11e9-9e0a-6d7a7973e055.png)

ターゲットグループ確認

![](https://user-images.githubusercontent.com/37950257/52548865-7133fe80-2e13-11e9-8f98-847660cf7764.png)

ターゲットグループに管理されているインスタンスが存在すること確認、さらにhealthyであることも確認
![](https://user-images.githubusercontent.com/37950257/52548695-7ba1c880-2e12-11e9-9c77-648dc90be30d.png)


ロードバランサーのDNS名で動作確認
![](https://user-images.githubusercontent.com/37950257/52548952-f9b29f00-2e13-11e9-8866-f9166e8a2ccd.png)

次回に続きます。Auto Scailingの設定です。
