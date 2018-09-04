---
path: "/docorator-pattern-code"
date: "2018-09-04T14:06:43.963Z"
title: "Docorator Pattern Code"
tags: []
---

<a href="/blog/2018-04-01-decorator-pattern/" target="_blank">前回の記事</a>、を読み直して、Decoratorパターンの復習をする。


# docoratorパターンとは

自分の言葉で

あるクラスに機能を追加する方法として、継承で実現するのではなく、合成（委譲）で機能を実現する方法である。また動的に機能の追加をすることが可能である。


より詳しく

http://zecl.hatenablog.com/entry/20070603/p1


クラス図（<a href="https://ja.wikipedia.org/wiki/Decorator_%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3" target="_blank">wikipediaより</a>）

<img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Decorator_UML_class_diagram.svg" />

wikipediaのサンプルコード

`gist:ta-toshio/131d355af7660f0a2150d02d11e21afd#docorator-pattern-java-01.java`

中心となるオブジェクトがあって、その役割を果たすのがConcreteComponentである。その中心となるオブジェクトに装飾する役割を果たすクラスがConcreteDecoratorである。
