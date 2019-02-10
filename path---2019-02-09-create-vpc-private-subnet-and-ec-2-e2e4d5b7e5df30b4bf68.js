webpackJsonp([0x7897a1f1067a],{531:function(e,p){e.exports={data:{site:{siteMetadata:{title:"Toshio Blog",author:"Ta Toshio"}},markdownRemark:{id:"/Volumes/Transcend/Workspace/local/ta-toshio-blog/src/pages/2019-02-09-create-vpc-private-subnet-and-ec-2/index.md absPath of file >>> MarkdownRemark",html:'<p>理解を深めるための備忘録です。\nこちらの講座をもとに作業しました。詳しい解説はそちらを閲覧してください。（有料です）</p>\n<p><a href="https://www.udemy.com/aws-14days/">https://www.udemy.com/aws-14days/</a></p>\n<p>前回の続きです。</p>\n<h3>プライベートサブネットをつくる</h3>\n<h4>方針</h4>\n<ol>\n<li>\n<p>プライベートサブネットをつくる</p>\n</li>\n<li>\n<p>プライベートサブネット内にEC2をつくる</p>\n</li>\n<li>\n<p>プライベートサブネットからVPCの外に出るためパブリックサブネットにNAT Gatewayをつくる</p>\n</li>\n</ol>\n<h4>作業</h4>\n<h5>プライベートサブネットをつくる</h5>\n<p>「サブネットの作成」からプライベートサブネットを作成する</p>\n<p>入力画面</p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52531819-d11c9d80-2d5e-11e9-904e-b7c22ca05ffc.png"></p>\n<p>VPCは前回作成したものを選択して、アベイラビリティゾーン1aを選択。保存後、続いてアベイラビリティゾーン1cに作成する。</p>\n<p>入力画面</p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52531820-d11c9d80-2d5e-11e9-8e7e-d19ede5df889.png"></p>\n<p>作成されたもの確認</p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52531821-d1b53400-2d5e-11e9-851f-0ef233fe1d18.png"></p>\n<p>次に、上で自動でルートテーブルが作られたが、ルートテーブルを新規に作成してプライベートサブネットに利用させる</p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52531940-72582380-2d60-11e9-91c3-e192db77f285.png"></p>\n<p>作成されたルートテーブル確認。比較としてpublic用のルーティング設定とprivate用のルーティング設定を下記に。</p>\n<p>パブリック用ルーティング\n<img src="https://user-images.githubusercontent.com/37950257/52531941-72582380-2d60-11e9-864f-4ef03337d7f1.png"></p>\n<p>プライベート用ルーティング\n<img src="https://user-images.githubusercontent.com/37950257/52531943-7421e700-2d60-11e9-8d32-df83b1f78350.png"></p>\n<p>プライベートサブネットに今作ったルートテーブルを適用させる</p>\n<p>サブネット画面のmy-private-subnet-1aを選択して、「ルートテーブルの関連付けの編集」を押下、</p>\n<p><img src=""></p>\n<p>ルートテーブルIDに、上で作成したプライベート用ルートテーブルを選択、保存</p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52532019-ab44c800-2d61-11e9-885d-7d4d33afcb04.png"></p>\n<p>設定されたことを確認</p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52532021-abdd5e80-2d61-11e9-93ee-1063d8064a89.png"></p>\n<p>my-private-subnet-1cも同様にプライベート用ルートテーブルを設定させる。</p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52532022-abdd5e80-2d61-11e9-8234-fcbfb101dde2.png"></p>\n<h5>プライベートサブネット内にEC2をつくる</h5>\n<p>Amazon Linux 2 AMI (HVM), SSD Volume Type を選択</p>\n<p>お好きなインスタンスタイプを選択</p>\n<p>VPCは前回作成したVPC\nネットワークはprivateサブネットの1a\nパプリックIP自動割当は、このサーバーはグローバルにさらす必要がないので、無効化を選択。他はそのままで次に。</p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52532241-0e842980-2d65-11e9-82cb-fa22519c85d8.png"></p>\n<p>タグはDB-1aと入力</p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52532242-0e842980-2d65-11e9-9ba4-1a375932e747.png"></p>\n<p>セキュリティーグループは新規に作成。\n前回作成したセキュリティーグループ「web-sg」が設定されているインスタンスのみ（今回はsshとmysqlの）通信を許可する、という振る舞いをしたいので、ソースの入力欄でweb-sgを選択。</p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52532243-0e842980-2d65-11e9-9fc1-29edc91e93bf.png"></p>\n<p>他は特に変更せず作成。作成されているか確認</p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52532244-0e842980-2d65-11e9-9dce-f4eae487d21b.png"></p>\n<p>web-1aのサーバーを踏み台にしてdb-1aのサーバーにsshログインできるか確認</p>\n<p>db-1aにログインするためにはweb-1aに秘密鍵をコピー（アップロード）する必要がある</p>\n<p>現時点では、db-1a内からインターネットの外にいくことができないこと確認</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$ ping yahoo.co.jp\n~~\n^C\n--- yahoo.co.jp ping statistics ---\n4 packets transmitted, 0 received, 100% packet loss, time 3054ms</code></pre>\n      </div>\n<h5>プライベートサブネットからVPCの外に出るためパブリックサブネットにNAT Gatewayをつくる</h5>\n<p>パブリックサブネット1aのサブネットIDをコピーしておく</p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52534390-549cb580-2d84-11e9-968c-f21455b84ad9.png"></p>\n<p>NAT Gatewayの作成</p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52534391-55cde280-2d84-11e9-897f-33d475214eb7.png"></p>\n<p>入力画面</p>\n<p>サブネットにさきほどコピーしておいたサブネットIDを入力（貼り付け）</p>\n<p>NAT Gatewayが外に出ていくためのプロキシーサーバーとして振る舞ってくれる。グローバルIPが必要とのことなので、「新しいEIPの作成」ボタンを押下。</p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52534392-56667900-2d84-11e9-9c63-2659588b8b3b.png"></p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52534394-56667900-2d84-11e9-83c8-bf18205eea4d.png"></p>\n<p>作成後、「ルートテーブルの編集」ボタン押下。</p>\n<p>5.png\n<img src="https://user-images.githubusercontent.com/37950257/52534395-56667900-2d84-11e9-8851-670a1e4de933.png"></p>\n<p>プライベートサブネットでNAT Gatewayを利用していくので、private-subnetを選択、ルート（Routes）タブから「Edit routes」ボタン押下。</p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52534396-56667900-2d84-11e9-82fc-c76bacd5a27e.png"></p>\n<p>入力画面</p>\n<p>VPC内の通信はそのまま許可します、他はNATゲートウェイを通ります、という設定をする</p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52534397-56ff0f80-2d84-11e9-8230-1b8299cc4712.png"></p>\n<p>パブリックサブネットとプライベートサブネットの比較\nパブリックサブネットはインターネットゲートウェイを利用していて、プライベートサブネットはNATゲートウェイという設定になっている</p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52534398-56ff0f80-2d84-11e9-9f57-b71b172ddf94.png"></p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52534399-56ff0f80-2d84-11e9-80cc-ba87cb72de9b.png"></p>\n<p>外に接続できることを確認。</p>\n<p>一応NATゲートウェイのスクショもとっておく</p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52534691-0ee1ec00-2d88-11e9-95de-ffef4a093b0b.png"></p>\n<p>プライベートサブネット内で外へ出ていく作業も終えたらNATゲートウェイを削除してしまう。（コスト削減のため）</p>\n<p>NATゲートウェイ削除したら、プライベートサブネットに適用しているルートテーブルのルーティング設定も修正する。</p>\n<p>プライベートサブネットのルートテーブルを選択し、「Edit Routes」ボタンを押下</p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52534692-0ee1ec00-2d88-11e9-9fd2-6ed74a352151.png"></p>\n<p>NATゲートウェイの振り分けレコードを削除して保存</p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52534693-0f7a8280-2d88-11e9-96c1-8539514de0ba.png"></p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52534694-0f7a8280-2d88-11e9-88f6-e8d4a88f6a84.png"></p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52534696-10131900-2d88-11e9-9d54-dab9cac48498.png"></p>\n<p>NATゲートウェイ作成時に、Elastic IPも作成したが、NATゲートウェイの削除が完了した後Elastic IPも削除されたこと確認した。</p>\n<p>以上になります。</p>',frontmatter:{title:"Create Vpc Private Subnet And Ec 2",date:"February 09, 2019"}}},pathContext:{slug:"/2019-02-09-create-vpc-private-subnet-and-ec-2/",previous:{fields:{slug:"/2019-02-08-create-vpc-public-subnet-and-ec-2/"},frontmatter:{title:"Create Vpc Public Subnet And Ec 2"}},next:{fields:{slug:"/2019-02-10-aws-ami-2-install-mysql-57/"},frontmatter:{title:"Aws Ami 2 Install Mysql 57"}}}}}});
//# sourceMappingURL=path---2019-02-09-create-vpc-private-subnet-and-ec-2-e2e4d5b7e5df30b4bf68.js.map