---
path: "/install-docker-in-aws-ami-2"
date: "2018-12-11T04:11:28.258Z"
title: "Install Docker In Aws Ami 2"
tags: []
---
Amazon Linux 2 AMI (HVM)にDockerのインストール

こちらの記事を参考に作業しました。
https://qiita.com/reflet/items/3b818fbfb14ba5c7ef47

```
# パッケージ更新
$ sudo yum update -y

# インストールできるパッケージを確認
$ amazon-linux-extras list
20  docker=latest            enabled      \
       [ =17.12.1  =18.03.1  =18.06.1 ]

# インストール（ここでは=18.06.1を指定）
$ sudo amazon-linux-extras install -y docker=18.06.1

# 起動
$ sudo service docker start
Redirecting to /bin/systemctl start docker.service

# 自動起動
$ sudo systemctl enable docker

# 確認
$ sudo service docker status
Redirecting to /bin/systemctl status docker.service
● docker.service - Docker Application Container Engine
   Loaded: loaded (/usr/lib/systemd/system/docker.service; disabled; vendor preset: disabled)
   Active: active (running)
   Docs: https://docs.docker.com
Process: 11987 ExecStartPre=/usr/libexec/docker/docker-setup-runtimes.sh (code=exited, status=0/SUCCESS)
Process: 11955 ExecStartPre=/bin/mkdir -p /run/docker (code=exited, status=0/SUCCESS)
Main PID: 11999 (dockerd)
  Tasks: 18
 Memory: 36.2M
 CGroup: /system.slice/docker.service
         ├─11999 /usr/bin/dockerd --default-ulimit nofile=1024:4096
         └─12010 docker-containerd --config /var/run/docker/containerd/containerd.toml

# バージョン確認
$ docker -v
Docker version 18.06.1-ce, build e68fc7a215d7133c34aa18e3b72b4a21fd0c6136

# dockerグループに参加する
$ sudo usermod -a -G docker ec2-user
$ cat /etc/group | grep docker
docker:x:993:ec2-user

$ id
uid=1000(ec2-user) gid=1000(ec2-user) groups=1000(ec2-user),4(adm),10(wheel),190(systemd-journal)

# 設定を反映するため、sshを再接続する
$ exit

$ id
uid=1000(ec2-user) gid=1000(ec2-user) groups=1000(ec2-user),4(adm),10(wheel),190(systemd-journal),993(docker)

# Hello Worldを実行してみる
$ docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
1b930d010525: Pull complete
Digest: sha256:2557e3c07ed1e38f26e389462d03ed943586f744621577a99efb77324b0fe535
Status: Downloaded newer image for hello-world:latest

Hello from Docker!

# 不要なコンテナ一括削除
$ docker rm `docker ps -f "status=exited" -q`
```

---
*他参考サイト* <br />
https://qiita.com/y-do/items/e127211b32296d65803a

amazon-linux-extrasについて<br />
https://dev.classmethod.jp/cloud/aws/how-to-work-with-amazon-linux2-amazon-linux-extras/
