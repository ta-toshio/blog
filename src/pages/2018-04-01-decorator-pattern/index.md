---
path: "/decorator-pattern"
date: "2018-04-01T06:15:16.365Z"
title: "Decorator Pattern"
tags: ["scrap"]
---

Decorator Patternについて調べたことについてのメモです。


## キーワード

* 継承の代替手段
* 既存のオブジェクトに新しい機能や振る舞いを動的に追加することを可能にする。
* 継承は静的に機能が決まってしまうが、このパターンは動的に責任を追加することができる。単一責任の原則（Single Responsibility Principle）に当てはめやすい。
* 柔軟な拡張[引用](#link1)


#### 参考図書

- デザインパターン入門


#### 参考サイト

- https://liginc.co.jp/web/programming/php/142575
<br>
> 既存のオブジェクトに新しい機能や振る舞いを動的に追加することを可能にする。

- http://d.hatena.ne.jp/shimooka/20141217/1418788239
<br>
詳細な解説が記載。
<a name="link1"></a>
> 柔軟な拡張が可能<br>
> 既存クラスのメソッドに機能を追加する場合、サブクラスを作成し、既存クラスの機能追加したいメソッドをオーバーライドする事が一般的かもしれません。つまり継承です。しかし、追加したい「機能」のパターンが複数ある場合、また、追加したい「機能」は他のパターンを踏まえた上で実装されることがある場合、さらには追加するパターンに「順序」が存在する場合、そのパターンの組み合わせを考慮したクラス設計が必要になります。機能が静的に追加されている状態であり、必要なパターンの組み合わせの数分、サブクラスの作成が必要となります。

- https://qiita.com/masakura/items/cbe49f20acfdc28927ae
<br>
デコレーターパターンをサンプルコード、解説付きで説明。<br>
HTTPリクエストの処理にキャッシュの機能を付ける例で、デコレーターパターンを使用。


- http://zecl.hatenablog.com/entry/20070603/p1
<br>
継承による機能拡張とデコレーターパターンを利用した機能拡張の違いの説明が、デコレーターパターンの特徴をよく表している。

- https://techracho.bpsinc.jp/hachi8833/2017_10_11/46069
<br>
解説を完結に、サンプルコードも有り。コーヒーのトッピングを例にしている。

- http://doriven.hatenablog.com/entry/2014/03/24/002449
<br>
> 基板となるソースコードに全くの変更を加えることなく、新しい機能を加える事が出来るデザインパターンです。プログラム上ではオプション的な処理として、「この処理はしたいけど、あれは意図的に呼び出された時に機能して欲しい」といった機能に適しています。

- http://momijiame.tumblr.com/post/86112194941/python-%E8%89%B2%E3%80%85%E3%81%AA%E3%83%87%E3%82%B3%E3%83%AC%E3%83%BC%E3%82%BF%E3%81%AE%E4%BD%9C%E3%82%8A%E6%96%B9%E3%81%A8%E4%BD%BF%E3%81%84%E6%96%B9%E3%81%9D%E3%81%97%E3%81%A6%E6%9C%AC%E8%B3%AA
<br>
Javascript、デコレータ構文についての解説。あるコンポーネントはそのままで、そのコンポーネントに処理を追加する本質は変わらない。

- https://www.webprofessional.jp/javascript-decorators-what-they-are/
<br>
Javascript、デコレーター構文についての解説。

- http://hamuhamu.hatenablog.jp/entry/2015/10/10/143707
<br>
Google検索結果にアスペクト指向の記事もヒットしたので読んでみた。DIコンテナとProxyパターンを利用した解説記事。
