---
path: "/aws-ami-2-install-mysql-57"
date: "2018-11-10T14:22:25.737Z"
title: "Aws Ami 2 Install Mysql 57"
tags: ["aws"]
---

Amazon Linux 2 AMI (HVM)にMysql5.7のインストール

こちらの記事を参考に作業しました。
https://qiita.com/2no553/items/952dbb8df9a228195189

```
#mariadbがインストールされているか確認
$ yum list installed | grep mariadb
mariadb-libs.x86_64                   1:5.5.56-2.amzn2                 installed

#mysqlがインストールされているか確認
$ yum list installed | grep mysql

#mysqlがインストールできるか確認
$ yum info mysql
読み込んだプラグイン:extras_suggestions, langpacks, priorities, update-motd
エラー: 表示するパッケージはありません

#mysql8.0リポジトリの追加（このリポジトリに5.7も含まれています）
$ sudo yum localinstall https://dev.mysql.com/get/mysql80-community-release-el7-1.noarch.rpm -y

#mysql8.0リポジトリの無効化
$ sudo yum-config-manager --disable mysql80-community

#mysql5.7リポジトリの有効化
$ sudo yum-config-manager --enable mysql57-community

#mysql5.7がインストールできるか確認
$ yum info mysql-community-server

#mysqlインストール
$ sudo yum install mysql-community-server -y
$ mysqld --version
mysqld  Ver 5.7.22 for Linux on x86_64 (MySQL Community Server (GPL))

#自動起動設定
$ sudo systemctl start mysqld.service
$ sudo systemctl enable mysqld.service
$ systemctl status mysqld.service


#rootパスワードを確認
$ cat /var/log/mysqld.log | grep password
A temporary password is generated for root@localhost: ************

#初期設定
$ mysql_secure_installation
Enter password for user root: ************
New password: @@@@@@@@@@@@
Re-enter new password: @@@@@@@@@@@@
Change the password for root ? ((Press y|Y for Yes, any other key for No) : No
Remove anonymous users? (Press y|Y for Yes, any other key for No) : Yes
Disallow root login remotely? (Press y|Y for Yes, any other key for No) : Yes
Remove test database and access to it? (Press y|Y for Yes, any other key for No) : Yes
Reload privilege tables now? (Press y|Y for Yes, any other key for No) : Yes


#mysqlにログイン
$ mysql -u root -p
Enter password: @@@@@@@@@@@@

#文字コードの確認
mysql> show global variables like 'character%';
+--------------------------+----------------------------+
| Variable_name            | Value                      |
+--------------------------+----------------------------+
| character_set_client     | latin1                     |
| character_set_connection | latin1                     |
| character_set_database   | latin1                     |
| character_set_filesystem | binary                     |
| character_set_results    | latin1                     |
| character_set_server     | latin1                     |
| character_set_system     | utf8                       |
| character_sets_dir       | /usr/share/mysql/charsets/ |
+--------------------------+----------------------------+
mysql> exit

#文字コードの変更（[mysqld]と[client]セクションと設定を追加）
$ sudo vi /etc/my.cnf
+ [mysqld] （既に記述されている場合は省略）
+ character_set_server=utf8mb4

+ [client]
+ default-character-set=utf8mb4

#mysql再起動
$ sudo systemctl restart mysqld.service

#mysqlにログイン
$ mysql -u root -p
Enter password: @@@@@@@@@@@@

#文字コードの確認
mysql> show global variables like 'character%';
+--------------------------+----------------------------+
| Variable_name            | Value                      |
+--------------------------+----------------------------+
| character_set_client     | utf8mb4                    |
| character_set_connection | utf8mb4                    |
| character_set_database   | utf8mb4                    |
| character_set_filesystem | binary                     |
| character_set_results    | utf8mb4                    |
| character_set_server     | utf8mb4                    |
| character_set_system     | utf8                       |
| character_sets_dir       | /usr/share/mysql/charsets/ |
+--------------------------+----------------------------+

# データベース作成
mysql> CREATE DATABASE データベース名 CHARACTER SET utf8mb4;

# 作業ユーザーに権限を付与（一緒にユーザーも作成される）
mysql> GRANT ALL PRIVILEGES ON データベース名.* TO ユーザー名@'IP or DNS名 or %' identified by 'パスワード' with grant option;


mysql> exit

```

他参考
https://qiita.com/himatani/items/e1e650992dbc12b8a9b3
