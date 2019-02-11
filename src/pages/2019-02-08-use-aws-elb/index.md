---
path: "/use-aws-elb"
date: "2019-02-08T01:25:54.445Z"
title: "Use Aws Elb"
tags: []
---


ELBの利用をしてきます。

*ヘルスチェック*

正常動作しているインスタンスにリクエストを振り分ける

*Auto Scaling*

条件を決めてインスタンスの増減させる


#### 方針

0. AMIの作成

1. ELBの作成
  * 対象となるサブネット
  * セキュリティーグループの設定

2. ターゲットグループの設定

  * ヘルスチェックの設定
  * どのインスタンスをELBの配下に設定するか

#### 作業

対象となるサブネットに、パブリックIPアドレスの自動割当の設定を行う。Auto Scalingで自動で立ち上がったインスタンスにパブリックIPが割り振られるようになる。

サブネットの一覧画面よりpublic-1aを選択
![](https://user-images.githubusercontent.com/37950257/52544101-f6a6b700-2df1-11e9-9807-1f91a25aca47.png)

アクションより「自動割り当てIP設定の変更」を押下
![](https://user-images.githubusercontent.com/37950257/52544102-f73f4d80-2df1-11e9-9b1c-088dde4b6bce.png)

IPv4の自動割り当てにチェック
![](https://user-images.githubusercontent.com/37950257/52544103-f73f4d80-2df1-11e9-953f-4d937d0ceefd.png)

設定されたこと確認
![](https://user-images.githubusercontent.com/37950257/52544104-f73f4d80-2df1-11e9-9082-04a3ae6f052d.png)

public-1cにも同様に設定
![](https://user-images.githubusercontent.com/37950257/52544105-f73f4d80-2df1-11e9-8df5-7a0330afab59.png)


Auto Scalingする際の元となるイメージ（AMI）を作成する。そのAMIを作成するためのEC2を作成する。


入力画面
![](https://user-images.githubusercontent.com/37950257/52545734-38892a80-2dfd-11e9-8c4d-1817e61bc1f2.png)

上でパブリックサブネットにはIPv4の自動割り当てをしたので、「サブネット設定を使用(有効)」を選択すれば自動でIPが割り振られる。

タグを設定した。違うタグ名のほうがいいかもしれない。例えば、AMIの元となるインスタンスなのでweb-masterなど。
![](https://user-images.githubusercontent.com/37950257/52545735-38892a80-2dfd-11e9-9f9b-852e5734f41f.png)


セキュリティーブループ
![](https://user-images.githubusercontent.com/37950257/52545875-48edd500-2dfe-11e9-9638-c1b922339ffe.png)

作成したので、AMIをとる。インスタンスは停止しておく。

![](https://user-images.githubusercontent.com/37950257/52547598-3da1a600-2e0c-11e9-939d-50517a6bce03.png)

![](https://user-images.githubusercontent.com/37950257/52547599-3da1a600-2e0c-11e9-956c-0883723c8def.png)


<br />
閑話休題。割愛しますが、インスタンスに対して、Apacheを自動起動する設定をしました。
<br />

AMIからインスタンス作成しておく。AMI一覧から該当のAMIを選択して、アクションから起動。作成内容は上のEC2作成したときと同じ。

AMIの作成まで完了、次回に続く。
