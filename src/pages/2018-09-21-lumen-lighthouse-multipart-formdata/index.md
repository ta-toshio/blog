---
path: "/lumen-lighthouse-multipart-formdata"
date: "2018-09-21T03:44:49.831Z"
title: "Handle multipart/form-data on lumen with lighthouse"
tags: ['lumen', 'graphql']
draft: true
---

LumenでNuwave\Lighthouseを使用して、ファイルアップロードの扱い方を紹介します。

multipart/form-dataを扱う方針になります。

## 実装

0. https://github.com/jaydenseric/graphql-multipart-request-spec の設計を元に実装されています。

1. multipart/form-data で渡ってきた値を解析、パースする必要があります。

app/Http/Middleware/GraphQLUploadMiddleware.php に 以下ファイルを置きます。

https://github.com/rebing/graphql-laravel/blob/master/src/Rebing/GraphQL/GraphQLUploadMiddleware.php

namespace の定義を `App/Http/Middleware` に修正してください。

boostrap/app.php にて上のmiddlewareを定義します。

```
$app->routeMiddleware([
    ...
    'graphql-upload' => App\Http\Middleware\GraphQLUploadMiddleware::class,
]);

```

2. 上のmiddlewareを適用します。私は以下の方法で設定しました。

config/lighthouse.php

```
'route' => [
    'prefix' => '',
    // 'middleware' => ['web','api'],    // [ 'loghttp']
    'middleware' => ['graphql-upload'],
],
```

サーバー側の設定は以上になります。
