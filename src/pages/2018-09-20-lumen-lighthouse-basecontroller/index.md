---
path: "/lumen-lighthouse-basecontroller"
date: "2018-09-20T02:33:23.418Z"
title: "Lumen Lighthouse Basecontroller"
tags: ['lumen', 'graphql']
---

LumenでNuwave\Lighthouseを使うときの注意事項です。

## 問題

コントローラーのエントリポイントにデフォルト設定のまま使うと、期待しない挙動が度々あったので調査の上修正しました。

## 解決方法

`config/lighthouse.php`

```
'controller' => 'Nuwave\Lighthouse\Support\Http\Controllers\GraphQLController@query',
```

`Nuwave\Lighthouse\Support\Http\Controllers\GraphQLController` は`Illuminate\Routing\Controller` を継承していますが `Laravel\Lumen\Routing\Controller` を継承する必要があります。

## 修正方法

`config/lighthouse.php`

`'controller' => 'App\Http\GraphQL\GraphQLController@query',` を設定して、`App\Http\GraphQL\GraphQLController`を作成します。

中身は `Nuwave\Lighthouse\Support\Http\Controllers\GraphQLController` をコピペです。そして継承先を `App\Http\Controllers\Controller`にします。


正常動作のための一設定でした。
