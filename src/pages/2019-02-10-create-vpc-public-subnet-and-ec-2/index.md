---
path: "/create-vpc-public-subnet-and-ec-2"
date: "2019-02-10T08:36:55.056Z"
title: "Create Vpc Public Subnet And Ec 2"
tags: []
---

理解を深めるための備忘録です。
こちらの講座をもとに作業しました。詳しい解説はそちらを閲覧してください。（有料です）

https://www.udemy.com/aws-14days/


### VPCをつくる

独立したネットワークを構築するができるもの。

### サブネット

IPレンジを利用したネットワーク帯域。

サブネットにはルートテーブルというものを持っている。ルートテーブルには、通信の経路を設定できる。

### パブリックサブネット

Internet Gatewayというサービスを利用して、VPCの外から入ってくることも、外へ出ることも許可する。

外から入るものに関しては、入って良いものを定義してあげる。

### プライベートサブネット

基本、VPC内の通信のみしか許可しない。外へ出ることを許可するためにはNAT Gatewayというサービスを利用する。


### 目的のネットワーク

インターネットゲートウェイ
アベイラビリティゾーン1aと1cにパブリックサブネット
  * アベイラビリティゾーン1aにEC2
  * Nat GW
アベイラビリティゾーン1aと1cにプライベートサブネット
  * アベイラビリティゾーン1aにEC2

### パブリックサブネットをつくる

#### 方針

1. VPCを作成する
2. アベイラビリティゾーン1aにパブリックサブネットを作成する
3. Internet GWも作成する

別のアベイラビリティゾーン（1c）にも場ブリックサブネットを作成する
4. アベイラビリティゾーン1cにパブリックサブネットを作成する
5. 新規で作った場合はInternet GWに向いていないので、ルートテーブルを修正する


#### 作業

ウィザード
![](https://user-images.githubusercontent.com/37950257/52530667-1aafbd00-2d4c-11e9-8d7f-e1b799e4190a.png)


入力内容
![](https://user-images.githubusercontent.com/37950257/52530668-1aafbd00-2d4c-11e9-9817-7caf98d76677.png)


作成されたVPC確認
![](https://user-images.githubusercontent.com/37950257/52530670-1b485380-2d4c-11e9-895a-331b79c89b48.png)


作成されたサブネット確認
![](https://user-images.githubusercontent.com/37950257/52530671-1b485380-2d4c-11e9-8259-a0962bcef880.png)


作成されたインターネットゲートウェイ確認
あと名前をつけた
![](https://user-images.githubusercontent.com/37950257/52530672-1be0ea00-2d4c-11e9-9b08-f558d7f3d4f2.png)

作成されたルートテーブル確認
あとな名前をつけた
![](https://user-images.githubusercontent.com/37950257/52530673-1be0ea00-2d4c-11e9-8ecf-36df1fb6f764.png)

ルートテーブル設定内容の確認
![](https://user-images.githubusercontent.com/37950257/52530674-1be0ea00-2d4c-11e9-88ba-16885ea4351e.png)

Destination: 10.0.0.0/16, Target: Local
<br />
Destination: 0.0.0.0/0, Target: igw-xxx
<br />
VPC中の接続は、そのままLocalの接続。その他はインターネットゲートウェイに出ていくように、という内容

アベイラビリティゾーン1cにもパブリックサブネットを作成する

新規にサブネットの作成
![](https://user-images.githubusercontent.com/37950257/52530850-5dbf5f80-2d4f-11e9-8c6a-3c240a42450d.png)

注意点はVPCの選択は上で作成したVPC

作成されたアベイラビリティゾーン1cのサブネット
![](https://user-images.githubusercontent.com/37950257/52530851-5dbf5f80-2d4f-11e9-94f0-1c075107f2fb.png)

ただ先程作成したアベイラビリティゾーン1aのサブネットと違うところは、インターネットゲートウェイの項目が存在しない

![](https://user-images.githubusercontent.com/37950257/52530852-5dbf5f80-2d4f-11e9-91cd-fbff75f6c8b3.png)

インターネットゲートウェイの設定を追加するために「ルートテーブルの関連付けの編集」ボタンを押下する

入力画面
![](https://user-images.githubusercontent.com/37950257/52530853-5e57f600-2d4f-11e9-90f9-c996a4867845.png)

ルートテーブルIDに1aのサブネットした時に作成されたインターネットゲートウェイを選択。

（名前がmy-rtb-for-subnet-1aとしたが、1cでも同じルートテーブルを使うのであれば、my-rtb-for-public-subnetという名前のほうがよさそう。あとで変更する）

選択後、igw-xxxの行が追加された
![](https://user-images.githubusercontent.com/37950257/52530854-5e57f600-2d4f-11e9-9904-af469c8d540a.png)

編集されたルートテーブルの設定を確認。インターネットゲートウェイの項目が追加されていること確認。

https://user-images.githubusercontent.com/37950257/52531195-02906b80-2d55-11e9-9005-ad982e44f84a.png


### パブリックサブネットの1aにEC2をつくる

方針

1. EC2をつくる
  * VPCやサブネットを指定する

作業

Amazon Linux 2 AMI (HVM), SSD Volume Typeを選択

![](https://user-images.githubusercontent.com/37950257/52531197-03290200-2d55-11e9-9b97-e219c295af77.png)

お好きなインスタイプを選択

入力画面

ネットワークに上で作成したVPCを選択
![](https://user-images.githubusercontent.com/37950257/52531198-03290200-2d55-11e9-8e4a-5a792dd38ad9.png)

サブネットに1aのサブネットを選択
![](https://user-images.githubusercontent.com/37950257/52531199-03290200-2d55-11e9-8c1b-0b7d6df9553e.png)

パブリックIPの割当に「有効」を選択

他はそのまま進んで、

タグを設定
![](https://user-images.githubusercontent.com/37950257/52531200-03290200-2d55-11e9-90c8-14099b22f610.png)

セキュリティーグループを設定（追加）

![](https://user-images.githubusercontent.com/37950257/52531201-03c19880-2d55-11e9-9b2c-47bf7de052ce.png)

そのまま進んで、「起動」ボタンを押下、sshの鍵認証を選択して、インスタンスの作成。

作成されたことを確認

![](https://user-images.githubusercontent.com/37950257/52531398-2d2ff380-2d58-11e9-97dd-f176f6e7c48d.png)

IPv4パブリックIPより、sshでログインできることを確認

```
$ ssh -i ~/.ssh/aws_cypher_works/xxx/aws-toshio.pem ec2-user@xxx.xxx.xxx.xxx
~~
       __|  __|_  )
       _|  (     /   Amazon Linux 2 AMI
      ___|\___|___|

https://aws.amazon.com/amazon-linux-2/
3 package(s) needed for security, out of 3 available
Run "sudo yum update" to apply all updates.
[ec2-user@my-web-1a ~]$
```

外に通信が出られるか確認

```
[ec2-user@my-web-1a ~]$ ping yahoo.co.jp
~~
^C
--- yahoo.co.jp ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 1001ms
```

続きます、以上です。
