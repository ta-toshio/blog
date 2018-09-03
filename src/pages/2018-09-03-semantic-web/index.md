---
path: "/semantic-web"
date: "2018-09-03T13:58:21.553Z"
title: "Semantic Web"
tags: ["microformats"]
noindex: true
---

WEBを支える技術11を読んで。

# セマンティックwebとは

プログラムからも理解できるhtml、xmlリソースを実現するための技術。

# RDFとは

「トリプル」と呼ばれる主語、述語、目的語の３つの組を使って、Web上のリソースの意味を処理できるようにする技術。

RDF技術はあまり普及しなかったと言及されている。確かにRDF文書構造を意識したwebアプリケーションという話はあまり聞かないように思う。

RDFを利用したアプリケーション

* DBpedia
  * DBpediaはWikipediaから情報を抽出してLOD (Linked Open Data)として公開するコミュニティプロジェクト
  * http://ja.dbpedia.org/

DBpedia説明記事抜粋

> DBpediaがWikipediaから抽出する構造化データは，Wikipediaの各記事についての事実や説明，記事間の関係等である。これらはグラフとして表現するのが適切なため，構造化データの表現にはセマンティックWebにおけるデータ記述のためのグラフモデルであるRDF（Resource Description Framework）3）を用いている。また，構造化するための語彙として，DBpediaオントロジーも開発している。
>
> DBpediaが先進的だったのは，単にRDFで表現した構造化データをWeb上で公開したということだけではなく，当時W3C等で議論されていた，WebでRDFデータを公開共有するときのよりよい設計や公開の手法であるリンクトデータ（Linked Data）4）とSPARQL5）を適用したことにある。以降，DBpediaを参照実装として，同様の形でWeb上に公開されるデータセットが増えていくことになる。

https://www.jstage.jst.go.jp/article/johokanri/60/5/60_307/_html/-char/ja

Wikipediaをスクレイピングしてデータを取得する、という記事はよく見かけるが、DBpediaを利用すると楽にデータの抽出が可能になる。
しかし抽出対象のwikipediaのデータが2016-04-07時点のデータで更新が止まっているようである。

# microformatsとは

> RDFの問題点を解消した技術がmicoroformatsです。

p.177
> HTML文書そのものにメタデータを埋め込む技術です。

p.178

microformatsもRDF同様あまり耳にしたことがなかったので、RDF同様廃れてしまった技術なのかな、と思ったがSEOの向上のためにという記事が見られたので、現役で使用されているようだ。

https://www.nagahitoyuki.com/2018/08/markup-of-hatom-hentry-use-microformats-structured-data-for-seo-countermeasure.html


# まとめ

Webのテキスト文書を構造化してプログラムからも理解するための取り決めが行われていたということを学んだ。
