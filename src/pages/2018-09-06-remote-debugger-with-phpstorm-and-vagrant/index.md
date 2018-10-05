---
path: "/remote-debugger-with-phpstorm-and-vagrant"
date: "2018-09-06T06:10:24.582Z"
title: "Remote Debugger With Phpstorm And Vagrant"
tags: ["php", "debug"]
---

前回の続きで、今回はVagrantで作成した仮想環境内にDockerをインストールして、その中でphpコンテナ、nginxコンテナを用意してリモートデバッグをした記事になります。

動作環境

* Docker (Docker version 18.06.0-ce, build 0ffa825)
* Docker-Compoe (docker-compose version 1.21.2, build a133471)
* Vagrant (Version: 2.1.1)
* PhpStorm (Version: PhpStorm 2018.1.6)


PHPが動作しているコンテナでxdebug.iniを適用

`gist:ta-toshio/01e928732bddb03b1f2a5dd461d9a5e0#xdebug.ini`


その他は前回と同様になります。
