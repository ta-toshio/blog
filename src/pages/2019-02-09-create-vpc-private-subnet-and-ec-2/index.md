---
path: "/create-vpc-private-subnet-and-ec-2"
date: "2019-02-09T08:37:02.076Z"
title: "Create Vpc Private Subnet And Ec 2"
tags: []
---

理解を深めるための備忘録です。
こちらの講座をもとに作業しました。詳しい解説はそちらを閲覧してください。（有料です）

https://www.udemy.com/aws-14days/

前回の続きでう。

### プライベートサブネットをつくる

#### 方針

1. プライベートサブネットをつくる

2. プライベートサブネット内にEC2をつくる

3. プライベートサブネットからVPCの外に出るためパブリックサブネットにNAT Gatewayをつくる

#### 作業

##### プライベートサブネットをつくる

「サブネットの作成」からプライベートサブネットを作成する

入力画面

![](https://user-images.githubusercontent.com/37950257/52531819-d11c9d80-2d5e-11e9-904e-b7c22ca05ffc.png)

VPCは前回作成したものを選択して、アベイラビリティゾーン1aを選択。保存後、続いてアベイラビリティゾーン1cに作成する。

入力画面

![](https://user-images.githubusercontent.com/37950257/52531820-d11c9d80-2d5e-11e9-8e7e-d19ede5df889.png)

作成されたもの確認

![](https://user-images.githubusercontent.com/37950257/52531821-d1b53400-2d5e-11e9-851f-0ef233fe1d18.png)

次に、上で自動でルートテーブルが作られたが、ルートテーブルを新規に作成してプライベートサブネットに利用させる

![](https://user-images.githubusercontent.com/37950257/52531940-72582380-2d60-11e9-91c3-e192db77f285.png)

作成されたルートテーブル確認。比較としてpublic用のルーティング設定とprivate用のルーティング設定を下記に。

パブリック用ルーティング
![](https://user-images.githubusercontent.com/37950257/52531941-72582380-2d60-11e9-864f-4ef03337d7f1.png)

プライベート用ルーティング
![](https://user-images.githubusercontent.com/37950257/52531943-7421e700-2d60-11e9-8d32-df83b1f78350.png)

プライベートサブネットに今作ったルートテーブルを適用させる

サブネット画面のmy-private-subnet-1aを選択して、「ルートテーブルの関連付けの編集」を押下、

![]()

ルートテーブルIDに、上で作成したプライベート用ルートテーブルを選択、保存

![](https://user-images.githubusercontent.com/37950257/52532019-ab44c800-2d61-11e9-885d-7d4d33afcb04.png)

設定されたことを確認

![](https://user-images.githubusercontent.com/37950257/52532021-abdd5e80-2d61-11e9-93ee-1063d8064a89.png)

my-private-subnet-1cも同様にプライベート用ルートテーブルを設定させる。

![](https://user-images.githubusercontent.com/37950257/52532022-abdd5e80-2d61-11e9-8234-fcbfb101dde2.png)

##### プライベートサブネット内にEC2をつくる

Amazon Linux 2 AMI (HVM), SSD Volume Type を選択

お好きなインスタンスタイプを選択

VPCは前回作成したVPC
ネットワークはprivateサブネットの1a
パプリックIP自動割当は、このサーバーはグローバルにさらす必要がないので、無効化を選択。他はそのままで次に。

![](https://user-images.githubusercontent.com/37950257/52532241-0e842980-2d65-11e9-82cb-fa22519c85d8.png)

タグはDB-1aと入力

![](https://user-images.githubusercontent.com/37950257/52532242-0e842980-2d65-11e9-9ba4-1a375932e747.png)

セキュリティーグループは新規に作成。
前回作成したセキュリティーグループ「web-sg」が設定されているインスタンスのみ（今回はsshとmysqlの）通信を許可する、という振る舞いをしたいので、ソースの入力欄でweb-sgを選択。

![](https://user-images.githubusercontent.com/37950257/52532243-0e842980-2d65-11e9-9fc1-29edc91e93bf.png)

他は特に変更せず作成。作成されているか確認

![](https://user-images.githubusercontent.com/37950257/52532244-0e842980-2d65-11e9-9dce-f4eae487d21b.png)


web-1aのサーバーを踏み台にしてdb-1aのサーバーにsshログインできるか確認

db-1aにログインするためにはweb-1aに秘密鍵をコピー（アップロード）する必要がある

現時点では、db-1a内からインターネットの外にいくことができないこと確認

```
$ ping yahoo.co.jp
~~
^C
--- yahoo.co.jp ping statistics ---
4 packets transmitted, 0 received, 100% packet loss, time 3054ms
```


##### プライベートサブネットからVPCの外に出るためパブリックサブネットにNAT Gatewayをつくる

パブリックサブネット1aのサブネットIDをコピーしておく

![](https://user-images.githubusercontent.com/37950257/52534390-549cb580-2d84-11e9-968c-f21455b84ad9.png)


NAT Gatewayの作成

![](https://user-images.githubusercontent.com/37950257/52534391-55cde280-2d84-11e9-897f-33d475214eb7.png)


入力画面

サブネットにさきほどコピーしておいたサブネットIDを入力（貼り付け）

NAT Gatewayが外に出ていくためのプロキシーサーバーとして振る舞ってくれる。グローバルIPが必要とのことなので、「新しいEIPの作成」ボタンを押下。

![](https://user-images.githubusercontent.com/37950257/52534392-56667900-2d84-11e9-9c63-2659588b8b3b.png)

![](https://user-images.githubusercontent.com/37950257/52534394-56667900-2d84-11e9-83c8-bf18205eea4d.png
)


作成後、「ルートテーブルの編集」ボタン押下。

5.png
![](https://user-images.githubusercontent.com/37950257/52534395-56667900-2d84-11e9-8851-670a1e4de933.png)

プライベートサブネットでNAT Gatewayを利用していくので、private-subnetを選択、ルート（Routes）タブから「Edit routes」ボタン押下。

![](https://user-images.githubusercontent.com/37950257/52534396-56667900-2d84-11e9-82fc-c76bacd5a27e.png)

入力画面

VPC内の通信はそのまま許可します、他はNATゲートウェイを通ります、という設定をする

![](https://user-images.githubusercontent.com/37950257/52534397-56ff0f80-2d84-11e9-8230-1b8299cc4712.png)

パブリックサブネットとプライベートサブネットの比較
パブリックサブネットはインターネットゲートウェイを利用していて、プライベートサブネットはNATゲートウェイという設定になっている

![](https://user-images.githubusercontent.com/37950257/52534398-56ff0f80-2d84-11e9-9f57-b71b172ddf94.png)

![](https://user-images.githubusercontent.com/37950257/52534399-56ff0f80-2d84-11e9-80cc-ba87cb72de9b.png)


外に接続できることを確認。

一応NATゲートウェイのスクショもとっておく

![](https://user-images.githubusercontent.com/37950257/52534691-0ee1ec00-2d88-11e9-95de-ffef4a093b0b.png)

プライベートサブネット内で外へ出ていく作業も終えたらNATゲートウェイを削除してしまう。（コスト削減のため）

NATゲートウェイ削除したら、プライベートサブネットに適用しているルートテーブルのルーティング設定も修正する。

プライベートサブネットのルートテーブルを選択し、「Edit Routes」ボタンを押下

![](https://user-images.githubusercontent.com/37950257/52534692-0ee1ec00-2d88-11e9-9fd2-6ed74a352151.png)

NATゲートウェイの振り分けレコードを削除して保存

![](https://user-images.githubusercontent.com/37950257/52534693-0f7a8280-2d88-11e9-96c1-8539514de0ba.png)

![](https://user-images.githubusercontent.com/37950257/52534694-0f7a8280-2d88-11e9-88f6-e8d4a88f6a84.png)

![](https://user-images.githubusercontent.com/37950257/52534696-10131900-2d88-11e9-9d54-dab9cac48498.png)

NATゲートウェイ作成時に、Elastic IPも作成したが、NATゲートウェイの削除が完了した後Elastic IPも削除されたこと確認した。

以上になります。
