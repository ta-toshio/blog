---
path: "/nextjs-redirect"
date: "2018-09-11T13:44:02.635Z"
title: "Nextjs Redirect"
tags: []
---

next.jsを使う中でリダイレクト処理を扱う方法に、サーバー側で一工夫する箇所があるのだな、と気づきがあったので記事として残しておきます。


**リダイレクト処理**

`gist:ta-toshio/cf887c8223565c5366e35185ed5296f2#redirect.js`


**リダイレクトされた場合の扱い**

`if (res && res.finished) {` の箇所がポイント

`gist:ta-toshio/cf887c8223565c5366e35185ed5296f2#hoc.js`


**使用例**

`gist:ta-toshio/cf887c8223565c5366e35185ed5296f2#sample-use.js`


引用元:
https://github.com/zeit/next.js/tree/canary/examples/with-apollo-auth
