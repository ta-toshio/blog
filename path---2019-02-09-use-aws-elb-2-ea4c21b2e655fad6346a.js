webpackJsonp([6310525891775],{539:function(e,n){e.exports={data:{site:{siteMetadata:{title:"Toshio Blog",author:"Ta Toshio"}},markdownRemark:{id:"/Volumes/Transcend/Workspace/local/ta-toshio-blog/src/pages/2019-02-09-use-aws-elb-2/index.md absPath of file >>> MarkdownRemark",html:'<p>前回の続きです。</p>\n<h4>方針</h4>\n<ol start="0">\n<li>\n<p>AMIの作成</p>\n</li>\n<li>\n<p>ELBの作成 &#x3C;- ここから</p>\n<ul>\n<li>対象となるサブネット</li>\n<li>セキュリティーグループの設定</li>\n</ul>\n</li>\n<li>\n<p>ターゲットグループの設定</p>\n<ul>\n<li>ヘルスチェックの設定</li>\n<li>どのインスタンスをELBの配下に設定するか</li>\n</ul>\n</li>\n<li>\n<p>Auto Scailingの設定</p>\n</li>\n</ol>\n<h4>作業</h4>\n<h5>ELBの作成、ターゲットグループの設定</h5>\n<p>Applicatin Load Balancerを選択後、ロードバランサーの設定の入力画面\n<img src="https://user-images.githubusercontent.com/37950257/52547984-5ad77400-2e0e-11e9-9fcc-2c9741f6a5ee.png"></p>\n<p>ヘルスチェック（死活監視）を使用するのに利用するのかな、と推測。</p>\n<p>ロードバランサーを適用するアベイラビリティゾーン、ひいてはサブネット\n<img src="https://user-images.githubusercontent.com/37950257/52547986-5ad77400-2e0e-11e9-8b44-b0a2b1916a28.png"></p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52547987-5ad77400-2e0e-11e9-8cae-fae7cff0192a.png"></p>\n<p>セキュリティーブループ\n<img src="https://user-images.githubusercontent.com/37950257/52547988-5b700a80-2e0e-11e9-852e-f2bf3d68deef.png"></p>\n<p>httpに変更。あとHTTPSも追加したほうがいいのかもしれない。公開は追加しなかった</p>\n<p>ターゲットグループの作成\n<img src="https://user-images.githubusercontent.com/37950257/52547989-5b700a80-2e0e-11e9-8152-751b4a2511d0.png"></p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52547991-5b700a80-2e0e-11e9-961c-11a6c0d3c102.png"></p>\n<p>バランシングするターゲットを登録\n<img src="https://user-images.githubusercontent.com/37950257/52547992-5c08a100-2e0e-11e9-8757-34963ea3433f.png"></p>\n<p>今稼働しているインスタンスを選択\n<img src="https://user-images.githubusercontent.com/37950257/52547993-5ca13780-2e0e-11e9-9bcf-af6cee1cb992.png"></p>\n<p>「登録済みに追加」ボタンを押下\n<img src="https://user-images.githubusercontent.com/37950257/52547994-5ca13780-2e0e-11e9-98d6-ee8c6d0ac79c.png"></p>\n<p>画面上のテーブルにレコードが追加されるので、選択\n<img src="https://user-images.githubusercontent.com/37950257/52547996-5ca13780-2e0e-11e9-9500-a1e99e7edbcf.png"></p>\n<p>保存\n<img src="https://user-images.githubusercontent.com/37950257/52547997-5d39ce00-2e0e-11e9-957e-ddf927172f71.png"></p>\n<p>ロードバランサー一覧を確認</p>\n<p>80ポートの通信はターゲットグループのルール（ここではmy-tg）に従うという意と推測\n<img src="https://user-images.githubusercontent.com/37950257/52548694-7ba1c880-2e12-11e9-9e0a-6d7a7973e055.png"></p>\n<p>ターゲットグループ確認</p>\n<p><img src="https://user-images.githubusercontent.com/37950257/52548865-7133fe80-2e13-11e9-8f98-847660cf7764.png"></p>\n<p>ターゲットグループに管理されているインスタンスが存在すること確認、さらにhealthyであることも確認\n<img src="https://user-images.githubusercontent.com/37950257/52548695-7ba1c880-2e12-11e9-9c77-648dc90be30d.png"></p>\n<p>ロードバランサーのDNS名で動作確認\n<img src="https://user-images.githubusercontent.com/37950257/52548952-f9b29f00-2e13-11e9-8866-f9166e8a2ccd.png"></p>\n<p>次回に続きます。Auto Scailingの設定です。</p>',frontmatter:{title:"Use Aws Elb #2",date:"February 09, 2019"}}},pathContext:{slug:"/2019-02-09-use-aws-elb-2/",previous:{fields:{slug:"/2019-02-08-use-aws-elb-1/"},frontmatter:{title:"Use Aws Elb #1"}},next:{fields:{slug:"/2019-02-11-use-aws-elb-3/"},frontmatter:{title:"Use Aws Elb #3"}}}}}});
//# sourceMappingURL=path---2019-02-09-use-aws-elb-2-ea4c21b2e655fad6346a.js.map