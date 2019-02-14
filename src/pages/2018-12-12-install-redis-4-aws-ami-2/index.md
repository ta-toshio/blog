---
path: "/install-redis-4-aws-ami-2"
date: "2018-12-12T06:19:46.200Z"
title: "Install Redis AWS AMI 2"
tags: ["aws"]
---

Amazon Linux 2 AMI (HVM)にRedisをインストール



```
#redisがインストールできるか確認
$ yum info redis
読み込んだプラグイン:extras_suggestions, langpacks, priorities, update-motd
エラー: 表示するパッケージはありません

# インストールできるパッケージを確認
$ amazon-linux-extras list
  8  redis4.0                 available    [ =4.0.5  =4.0.10 ]

# インストール（ここでは=4.0.10を指定）
$ sudo amazon-linux-extras install -y  redis4.0=4.0.10

# 起動
$ sudo service redis start

# 自動起動
$ sudo systemctl enable redis
Created symlink from /etc/systemd/system/multi-user.target.wants/redis.service to /usr/lib/systemd/system/redis.service.

# 確認
$ sudo service redis status
Redirecting to /bin/systemctl status redis.service
● redis.service - Redis persistent key-value database
   Loaded: loaded (/usr/lib/systemd/system/redis.service; enabled; vendor preset: disabled)
  Drop-In: /etc/systemd/system/redis.service.d
           └─limit.conf
   Active: active (running) ...

# 別サーバーから接続するための設定
$ cp /etc/redis.conf /etc/redis.conf.default
$ sudo vi /etc/redis.conf
- bind 127.0.0.1
+ bind 0.0.0.0

# 再起動
$ sudo service redis restart
```

別サーバーからredis-cliを使って疎通確認をしました。

ec2にredis-cliのインストールはこちらを参考にさせていただきました。
https://gist.github.com/Integralist/72161a96641fa4a0033d


```
$ sudo yum install gcc
$ sudo yum install wget
$ cd /usr/local/src
$ sudo wget http://download.redis.io/redis-stable.tar.gz
$ sudo tar xvzf redis-stable.tar.gz
$ cd redis-stable
$ sudo make
$ src/redis-cli -h mycachecluster.eaogs8.0001.usw2.cache.amazonaws.com -p 6379
```

---

参考サイト<br />
https://konboi.hatenablog.com/entry/2013/03/05/155107
