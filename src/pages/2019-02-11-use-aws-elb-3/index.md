---
path: "/use-aws-elb-3"
date: "2019-02-11T07:03:26.967Z"
title: "Use Aws Elb #3"
tags: []
---

前回の続きです。

#### 方針

0. AMIの作成

1. ELBの作成

2. ターゲットグループの設定

3. Auto Scalingの設定
    * 起動設定
    * Auto Scalingグループ


どのようなルール（＝Auto Scalingグループ）でどのようなインスタンス（=起動設定）を増減するか。

Auto Scalingグループをターゲットグループに紐付かせることによって、どのロードバランシング対象の管理化でスケールアウト、スケールインしますか、という振る舞いになる。


Auto Scaling起動設定の作成

自分で作成したAMIを選択
![](https://user-images.githubusercontent.com/37950257/52552599-35556500-2e24-11e9-9887-4b9b8b232713.png)

名前だけ入力して次へ
![](https://user-images.githubusercontent.com/37950257/52552600-35edfb80-2e24-11e9-87b5-0e3bcc5a3766.png)

webサーバーのスケールアウト・インをするつもりなので、web用のセキュリティーグループを選択
![](https://user-images.githubusercontent.com/37950257/52553718-e01b5280-2e27-11e9-8991-37ea0902a0bb.png)

作成後、「この起動設定を使用してAuto Scalingグループを作成する」ボタンを押下
![](https://user-images.githubusercontent.com/37950257/52552603-35edfb80-2e24-11e9-8721-2ad9d2c361ce.png)

Auto Scalingグループの作成
![](https://user-images.githubusercontent.com/37950257/52552605-36869200-2e24-11e9-9f79-4d216b391865.png)

サブネットにパブリックサブネットの1aゾーンと1cゾーンを選択した。

高度な詳細
![](https://user-images.githubusercontent.com/37950257/52552606-36869200-2e24-11e9-8556-baf91b02159a.png)

* ロードバランシングにチェック
* ターゲットグループに、前回作成したターゲットグループを指定して、ロードバランサー管理下のインスタンスと認識させる
* ヘルスチェックのタイプにELB

Auto Scalingのルールを設定
今回は最低1個のインスタンスで、最大2個
![](https://user-images.githubusercontent.com/37950257/52552607-36869200-2e24-11e9-84a7-798426341e6c.png)

スケールアウトの設定

![](https://user-images.githubusercontent.com/37950257/52552608-371f2880-2e24-11e9-9a01-55c5b417ca9e.png)

新しいアラームを追加を押下
![](https://user-images.githubusercontent.com/37950257/52552609-371f2880-2e24-11e9-92c8-e589c82365fa.png)

CPUが40%以上の使用率になったらインスタンス1個立ち上げる

![](https://user-images.githubusercontent.com/37950257/52552610-371f2880-2e24-11e9-81bc-8575ec2c548c.png)


スケールインの設定
![](https://user-images.githubusercontent.com/37950257/52552614-38505580-2e24-11e9-9c67-48883efd6386.png)

![](https://user-images.githubusercontent.com/37950257/52552613-371f2880-2e24-11e9-8c1c-e94603bd7a21.png)

タグの設定
![](https://user-images.githubusercontent.com/37950257/52552615-38505580-2e24-11e9-846c-0895dda609cc.png)

ウィザードを進めて作成後、Auto Scalingのプロビジョニングが終わったタイミングのターゲットグループ一覧の画面にて
![](https://user-images.githubusercontent.com/37950257/52552616-38e8ec00-2e24-11e9-8a6d-d5887dff91dc.png)

登録済みターゲットにいま起動設定とAuto Scalingグループで設定したインスタンスが一個増えている

EC2一覧画面にて
![](https://user-images.githubusercontent.com/37950257/52552617-38e8ec00-2e24-11e9-913b-1b6c050b3fc9.png)

ここで想定外だったのは、Web-1aというインスタンスがすでにロードバランサが管理しているターゲットにいるので、Auto Scaling最低1個から最大2個のインスタンス数設定に当てはまるかと思ったら、そうではないですね。Auto Scalingから作成されたインスタンス数を最低1個から最大2個の範囲で管理するのですね。

ということでWeb-1aを外してしまう。

![](https://user-images.githubusercontent.com/37950257/52552618-38e8ec00-2e24-11e9-85d7-b4046b22bf92.png)

![](https://user-images.githubusercontent.com/37950257/52552619-38e8ec00-2e24-11e9-8752-d42472c7923b.png)

![](https://user-images.githubusercontent.com/37950257/52552620-39818280-2e24-11e9-8b44-3f502402dabc.png)

![](https://user-images.githubusercontent.com/37950257/52552621-3a1a1900-2e24-11e9-9172-d3988fe2f002.png)

web-1aのステータスがdrainingに変わる。
(Auto Scalingにインスタンス数を管理してもらうので、この後web-1aは削除しました)


*本当にスケールアウト・スケールインされるか確認*

CPU使用率を故意にあげたあと、作成されているインスタンスが出てきたこと確認

ステータスがinitial
![](https://user-images.githubusercontent.com/37950257/52552623-3ab2af80-2e24-11e9-9c91-86917f13d5a3.png)

ステータスチェックが初期化しています
![](![](https://user-images.githubusercontent.com/37950257/52552622-3a1a1900-2e24-11e9-9ec0-8b6d1f704571.png)
)

インスタンス数と希望が2になっていること確認
![](https://user-images.githubusercontent.com/37950257/52552625-3b4b4600-2e24-11e9-987c-229d7bfe747b.png)

今度はCPU使用率を元に戻した場合の振る舞いを確認

ステータスがdrainingに変わり、
![](https://user-images.githubusercontent.com/37950257/52552629-3d150980-2e24-11e9-8930-024ec41b2513.png)

削除される動きになったこと確認
![](https://user-images.githubusercontent.com/37950257/52552628-3c7c7300-2e24-11e9-9f4a-00d489537017.png)


申し訳ないのですが、Apacheが動いていてブラウザから確認できる箇所は記事中では省いてしまったので、本当にロードバランシングされているか分かりにくい記事になってしまったと思います。

あと、インスタンスを全部削除したときの振る舞いも確認したら、Auto Scalingがインスタンス起動させたことも確認しました。
インスタンスは全てストップさせたかったので、Auto Scalingの動作を無効にする、ということをしたかったのですが、操作方法が分からなかったので、作成した起動設定とAuto Scalingグループのルールは削除しました。

以上になります。
