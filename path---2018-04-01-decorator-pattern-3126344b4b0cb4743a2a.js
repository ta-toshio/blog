webpackJsonp([72119354725019],{521:function(t,n){t.exports={data:{site:{siteMetadata:{title:"Toshio Blog",author:"Ta Toshio"}},markdownRemark:{id:"/Volumes/Transcend/Workspace/local/ta-toshio-blog/src/pages/2018-04-01-decorator-pattern/index.md absPath of file >>> MarkdownRemark",html:'<p>Decorator Patternについて調べたことについてのメモです。</p>\n<h2>キーワード</h2>\n<ul>\n<li>継承の代替手段</li>\n<li>既存のオブジェクトに新しい機能や振る舞いを動的に追加することを可能にする。</li>\n<li>継承は静的に機能が決まってしまうが、このパターンは動的に責任を追加することができる。単一責任の原則（Single Responsibility Principle）に当てはめやすい。</li>\n<li>柔軟な拡張<a href="#link1">引用</a></li>\n</ul>\n<h4>参考図書</h4>\n<ul>\n<li>デザインパターン入門</li>\n</ul>\n<h4>参考サイト</h4>\n<ul>\n<li>\n<p><a href="https://liginc.co.jp/web/programming/php/142575">https://liginc.co.jp/web/programming/php/142575</a>\n<br></p>\n<blockquote>\n<p>既存のオブジェクトに新しい機能や振る舞いを動的に追加することを可能にする。</p>\n</blockquote>\n</li>\n<li>\n<p><a href="http://d.hatena.ne.jp/shimooka/20141217/1418788239">http://d.hatena.ne.jp/shimooka/20141217/1418788239</a>\n<br>\n詳細な解説が記載。\n<a name="link1"></a></p>\n<blockquote>\n<p>柔軟な拡張が可能<br>\n既存クラスのメソッドに機能を追加する場合、サブクラスを作成し、既存クラスの機能追加したいメソッドをオーバーライドする事が一般的かもしれません。つまり継承です。しかし、追加したい「機能」のパターンが複数ある場合、また、追加したい「機能」は他のパターンを踏まえた上で実装されることがある場合、さらには追加するパターンに「順序」が存在する場合、そのパターンの組み合わせを考慮したクラス設計が必要になります。機能が静的に追加されている状態であり、必要なパターンの組み合わせの数分、サブクラスの作成が必要となります。</p>\n</blockquote>\n</li>\n<li>\n<p><a href="https://qiita.com/masakura/items/cbe49f20acfdc28927ae">https://qiita.com/masakura/items/cbe49f20acfdc28927ae</a>\n<br>\nデコレーターパターンをサンプルコード、解説付きで説明。<br>\nHTTPリクエストの処理にキャッシュの機能を付ける例で、デコレーターパターンを使用。</p>\n</li>\n</ul>\n<ul>\n<li>\n<p><a href="http://zecl.hatenablog.com/entry/20070603/p1">http://zecl.hatenablog.com/entry/20070603/p1</a>\n<br>\n継承による機能拡張とデコレーターパターンを利用した機能拡張の違いの説明が、デコレーターパターンの特徴をよく表している。</p>\n</li>\n<li>\n<p><a href="https://techracho.bpsinc.jp/hachi8833/2017_10_11/46069">https://techracho.bpsinc.jp/hachi8833/2017<em>10</em>11/46069</a>\n<br>\n解説を完結に、サンプルコードも有り。コーヒーのトッピングを例にしている。</p>\n</li>\n<li>\n<p><a href="http://doriven.hatenablog.com/entry/2014/03/24/002449">http://doriven.hatenablog.com/entry/2014/03/24/002449</a>\n<br></p>\n<blockquote>\n<p>基板となるソースコードに全くの変更を加えることなく、新しい機能を加える事が出来るデザインパターンです。プログラム上ではオプション的な処理として、「この処理はしたいけど、あれは意図的に呼び出された時に機能して欲しい」といった機能に適しています。</p>\n</blockquote>\n</li>\n<li>\n<p><a href="http://momijiame.tumblr.com/post/86112194941/python-%E8%89%B2%E3%80%85%E3%81%AA%E3%83%87%E3%82%B3%E3%83%AC%E3%83%BC%E3%82%BF%E3%81%AE%E4%BD%9C%E3%82%8A%E6%96%B9%E3%81%A8%E4%BD%BF%E3%81%84%E6%96%B9%E3%81%9D%E3%81%97%E3%81%A6%E6%9C%AC%E8%B3%AA">http://momijiame.tumblr.com/post/86112194941/python-%E8%89%B2%E3%80%85%E3%81%AA%E3%83%87%E3%82%B3%E3%83%AC%E3%83%BC%E3%82%BF%E3%81%AE%E4%BD%9C%E3%82%8A%E6%96%B9%E3%81%A8%E4%BD%BF%E3%81%84%E6%96%B9%E3%81%9D%E3%81%97%E3%81%A6%E6%9C%AC%E8%B3%AA</a>\n<br>\nJavascript、デコレータ構文についての解説。あるコンポーネントはそのままで、そのコンポーネントに処理を追加する本質は変わらない。</p>\n</li>\n<li>\n<p><a href="https://www.webprofessional.jp/javascript-decorators-what-they-are/">https://www.webprofessional.jp/javascript-decorators-what-they-are/</a>\n<br>\nJavascript、デコレーター構文についての解説。</p>\n</li>\n<li>\n<p><a href="http://hamuhamu.hatenablog.jp/entry/2015/10/10/143707">http://hamuhamu.hatenablog.jp/entry/2015/10/10/143707</a>\n<br>\nGoogle検索結果にアスペクト指向の記事もヒットしたので読んでみた。DIコンテナとProxyパターンを利用した解説記事。</p>\n</li>\n</ul>',frontmatter:{title:"Decorator Pattern",date:"April 01, 2018"}}},pathContext:{slug:"/2018-04-01-decorator-pattern/",previous:{fields:{slug:"/2018-04-01-hello-world/"},frontmatter:{title:"Hello World"}},next:{fields:{slug:"/2018-04-03-display-table-case-study/"},frontmatter:{title:"display:tableのケーススタディ"}}}}}});
//# sourceMappingURL=path---2018-04-01-decorator-pattern-3126344b4b0cb4743a2a.js.map