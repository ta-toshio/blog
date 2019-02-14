webpackJsonp([0x8f0600e3294f],{535:function(e,s){e.exports={data:{site:{siteMetadata:{title:"Toshio Blog",author:"Ta Toshio"}},markdownRemark:{id:"/Volumes/Transcend/Workspace/local/ta-toshio-blog/src/pages/2018-11-10-install-mysql57-aws-ami-2/index.md absPath of file >>> MarkdownRemark",html:'<p>Amazon Linux 2 AMI (HVM)にMysql5.7のインストール</p>\n<p>こちらの記事を参考に作業しました。\n<a href="https://qiita.com/2no553/items/952dbb8df9a228195189">https://qiita.com/2no553/items/952dbb8df9a228195189</a></p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">#mariadbがインストールされているか確認\n$ yum list installed | grep mariadb\nmariadb-libs.x86_64                   1:5.5.56-2.amzn2                 installed\n\n#mysqlがインストールされているか確認\n$ yum list installed | grep mysql\n\n#mysqlがインストールできるか確認\n$ yum info mysql\n読み込んだプラグイン:extras_suggestions, langpacks, priorities, update-motd\nエラー: 表示するパッケージはありません\n\n#mysql8.0リポジトリの追加（このリポジトリに5.7も含まれています）\n$ sudo yum localinstall https://dev.mysql.com/get/mysql80-community-release-el7-1.noarch.rpm -y\n\n#mysql8.0リポジトリの無効化\n$ sudo yum-config-manager --disable mysql80-community\n\n#mysql5.7リポジトリの有効化\n$ sudo yum-config-manager --enable mysql57-community\n\n#mysql5.7がインストールできるか確認\n$ yum info mysql-community-server\n\n#mysqlインストール\n$ sudo yum install mysql-community-server -y\n$ mysqld --version\nmysqld  Ver 5.7.22 for Linux on x86_64 (MySQL Community Server (GPL))\n\n#自動起動設定\n$ sudo systemctl start mysqld.service\n$ sudo systemctl enable mysqld.service\n$ systemctl status mysqld.service\n\n\n#rootパスワードを確認\n$ cat /var/log/mysqld.log | grep password\nA temporary password is generated for root@localhost: ************\n\n#初期設定\n$ mysql_secure_installation\nEnter password for user root: ************\nNew password: @@@@@@@@@@@@\nRe-enter new password: @@@@@@@@@@@@\nChange the password for root ? ((Press y|Y for Yes, any other key for No) : No\nRemove anonymous users? (Press y|Y for Yes, any other key for No) : Yes\nDisallow root login remotely? (Press y|Y for Yes, any other key for No) : Yes\nRemove test database and access to it? (Press y|Y for Yes, any other key for No) : Yes\nReload privilege tables now? (Press y|Y for Yes, any other key for No) : Yes\n\n\n#mysqlにログイン\n$ mysql -u root -p\nEnter password: @@@@@@@@@@@@\n\n#文字コードの確認\nmysql&gt; show global variables like &#39;character%&#39;;\n+--------------------------+----------------------------+\n| Variable_name            | Value                      |\n+--------------------------+----------------------------+\n| character_set_client     | latin1                     |\n| character_set_connection | latin1                     |\n| character_set_database   | latin1                     |\n| character_set_filesystem | binary                     |\n| character_set_results    | latin1                     |\n| character_set_server     | latin1                     |\n| character_set_system     | utf8                       |\n| character_sets_dir       | /usr/share/mysql/charsets/ |\n+--------------------------+----------------------------+\nmysql&gt; exit\n\n#文字コードの変更（[mysqld]と[client]セクションと設定を追加）\n$ sudo vi /etc/my.cnf\n+ [mysqld] （既に記述されている場合は省略）\n+ character_set_server=utf8mb4\n\n+ [client]\n+ default-character-set=utf8mb4\n\n#mysql再起動\n$ sudo systemctl restart mysqld.service\n\n#mysqlにログイン\n$ mysql -u root -p\nEnter password: @@@@@@@@@@@@\n\n#文字コードの確認\nmysql&gt; show global variables like &#39;character%&#39;;\n+--------------------------+----------------------------+\n| Variable_name            | Value                      |\n+--------------------------+----------------------------+\n| character_set_client     | utf8mb4                    |\n| character_set_connection | utf8mb4                    |\n| character_set_database   | utf8mb4                    |\n| character_set_filesystem | binary                     |\n| character_set_results    | utf8mb4                    |\n| character_set_server     | utf8mb4                    |\n| character_set_system     | utf8                       |\n| character_sets_dir       | /usr/share/mysql/charsets/ |\n+--------------------------+----------------------------+\n\n# データベース作成\nmysql&gt; CREATE DATABASE データベース名 CHARACTER SET utf8mb4;\n\n# 作業ユーザーに権限を付与（一緒にユーザーも作成される）\nmysql&gt; GRANT ALL PRIVILEGES ON データベース名.* TO ユーザー名@&#39;IP or DNS名 or %&#39; identified by &#39;パスワード&#39; with grant option;\n\n#* ユーザーのパスワードをもっと簡易なものにしたい場合は\nmysql&gt; SET GLOBAL validate_password_length=8;\nmysql&gt; SET GLOBAL validate_password_policy=LOW;\n\nmysql&gt; exit</code></pre>\n      </div>\n<p>他参考\n<a href="https://qiita.com/himatani/items/e1e650992dbc12b8a9b3">https://qiita.com/himatani/items/e1e650992dbc12b8a9b3</a></p>',frontmatter:{title:"Install Mysql57 in AWS AMI 2 ",date:"November 10, 2018"}}},pathContext:{slug:"/2018-11-10-install-mysql57-aws-ami-2/",previous:{fields:{slug:"/2018-09-28-formik-material-ui-checkbox/"},frontmatter:{title:"formik-material-uiでのCheckboxの初期値"}},next:{fields:{slug:"/2018-12-11-install-docker-in-aws-ami-2/"},frontmatter:{title:"Install Docker in AWS AMI 2"}}}}}});
//# sourceMappingURL=path---2018-11-10-install-mysql-57-aws-ami-2-b8db3bb93bea1a389fba.js.map