---
path: "/aws-sdk-php-laravel"
date: "2018-09-28T04:17:58.656Z"
title: "Aws Sdk Php Laravel"
tags: []
---

lumenでs3を扱いたく、https://github.com/aws/aws-sdk-php-laravel を使用してみました。

ただ結局Filesystemを使用してしまいまして、上のライブラリを利用しませんでしたが、一応記事として残しておきます。


1. インストール

composer require aws/aws-sdk-php-laravel

2. サービスプロバイダーに登録


`bootstrap/app.php` に

$app->register(Aws\Laravel\AwsServiceProvider::class);

3. 設定値を定義

config/aws.php に以下のような内容で設定

```
<?php

use Aws\Laravel\AwsServiceProvider;

return [
    'credentials' => [
        'key'    => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
    ],
    'region' => env('AWS_REGION', 'us-east-1'),
    'version' => 'latest',
    'ua_append' => [
        'L5MOD/' . AwsServiceProvider::VERSION,
    ],
];
```

準備としては以上です。

4. 使用方法

```
$this->s3 = app()->make('aws')->createClient('s3');

// バケット一覧
$results = $this->s3->listBuckets();

// アップロード
$results = $this->s3->putObject([
    'Key' => 'test/a/test.jpg',
    'Bucket' => env('AWS_BUCKET'),
    'SourceFile' => base_path() . '/tests/Data/480x640.jpg',
    'ACL' => 'public-read',
]);

// 削除
$result = $this->s3->deleteObjects([
    'Bucket'  => env('AWS_BUCKET'),
    'Delete' => [
        'Objects' => [
            ['Key' => 'test/a/test1.jpg'],
            ['Key' => 'test/a/test2.jpg'],
        ]
    ],
]);

```

5 モック

```
$aws = Mockery::mock('Aws\Sdk');
$this->app->instance('aws', $aws);
```

以上です。
