webpackJsonp([42277021441545],{520:function(e,n){e.exports={data:{site:{siteMetadata:{title:"Toshio Blog",author:"Ta Toshio"}},markdownRemark:{id:"/Volumes/Transcend/Workspace/local/ta-toshio-blog/src/pages/2018-09-05-remote-debugger-with-phpstorm/index.md absPath of file >>> MarkdownRemark",html:'<p>PhpStormでステップ実行でのデバッグをするための解説です。\n度々忘れるので記事にします。</p>\n<p>動作環境</p>\n<ul>\n<li>Docker on Mac (Version: 18.06.0-ce-mac70 (26399))</li>\n<li>PhpStorm (Version: PhpStorm 2018.1.6)</li>\n</ul>\n<h1>目次</h1>\n<ul>\n<li>\n<p>Xdebugの設定</p>\n<ul>\n<li>Xdebugのインストール</li>\n<li>Xdebugのリモートデバッグ機能の設定</li>\n</ul>\n</li>\n<li>\n<p>PhpStormの設定</p>\n<ul>\n<li>server項目の設定</li>\n<li>config項目の設定</li>\n<li>デバッグ起動</li>\n</ul>\n</li>\n</ul>\n<h1>Xdebugの設定</h1>\n<h2>Xdebugをインストール</h2>\n<p>PHPが動作するコンテナのDockerfileの例</p>\n<p><div id="gist91771590" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-php-fpm-dockerfile" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-text ">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-php-fpm-dockerfile-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-php-fpm-dockerfile-LC1" class="blob-code blob-code-inner js-file-line">FROM php:7.2-fpm</td>\n      </tr>\n      <tr>\n        <td id="file-php-fpm-dockerfile-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-php-fpm-dockerfile-LC2" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-php-fpm-dockerfile-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-php-fpm-dockerfile-LC3" class="blob-code blob-code-inner js-file-line">... 省略</td>\n      </tr>\n      <tr>\n        <td id="file-php-fpm-dockerfile-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-php-fpm-dockerfile-LC4" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-php-fpm-dockerfile-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-php-fpm-dockerfile-LC5" class="blob-code blob-code-inner js-file-line">RUN pecl install xdebug &amp;&amp; \\</td>\n      </tr>\n      <tr>\n        <td id="file-php-fpm-dockerfile-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-php-fpm-dockerfile-LC6" class="blob-code blob-code-inner js-file-line">docker-php-ext-enable xdebug</td>\n      </tr>\n      <tr>\n        <td id="file-php-fpm-dockerfile-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-php-fpm-dockerfile-LC7" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-php-fpm-dockerfile-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-php-fpm-dockerfile-LC8" class="blob-code blob-code-inner js-file-line">... 省略</td>\n      </tr>\n      <tr>\n        <td id="file-php-fpm-dockerfile-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-php-fpm-dockerfile-LC9" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-php-fpm-dockerfile-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-php-fpm-dockerfile-LC10" class="blob-code blob-code-inner js-file-line">COPY ./xdebug.ini /usr/local/etc/php/conf.d/xdebug.ini</td>\n      </tr>\n      <tr>\n        <td id="file-php-fpm-dockerfile-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-php-fpm-dockerfile-LC11" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-php-fpm-dockerfile-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-php-fpm-dockerfile-LC12" class="blob-code blob-code-inner js-file-line">... 省略</td>\n      </tr>\n      <tr>\n        <td id="file-php-fpm-dockerfile-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-php-fpm-dockerfile-LC13" class="blob-code blob-code-inner js-file-line">EXPOSE 9000</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/ta-toshio/8d3d19048f45f05bacecfcd1b29fdd02/raw/f1e2b8e42a5e06a822f1a5ea81f4ed4e2364246c/php-fpm-Dockerfile" style="float:right">view raw</a>\n        <a href="https://gist.github.com/ta-toshio/8d3d19048f45f05bacecfcd1b29fdd02#file-php-fpm-dockerfile">php-fpm-Dockerfile</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<h2>Xdebugのリモートデバッグ機能の設定</h2>\n<p>xdebug.iniの例</p>\n<p><div id="gist91771590" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-xdebug-ini" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-ini ">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-xdebug-ini-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-xdebug-ini-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.remote_host</span>=host.docker.internal</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-xdebug-ini-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.remote_connect_back</span>=0</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-xdebug-ini-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.remote_port</span>=9000</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-xdebug-ini-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.idekey</span>=PHPSTORM</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-xdebug-ini-LC5" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-xdebug-ini-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.remote_autostart</span>=1</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-xdebug-ini-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.remote_enable</span>=1</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-xdebug-ini-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.cli_color</span>=0</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-xdebug-ini-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.profiler_enable</span>=0</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-xdebug-ini-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.profiler_output_dir</span>=<span class="pl-s"><span class="pl-pds">&quot;</span>~/xdebug/phpstorm/tmp/profiling<span class="pl-pds">&quot;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-xdebug-ini-LC11" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-xdebug-ini-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.remote_handler</span>=dbgp</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-xdebug-ini-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.remote_mode</span>=req</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-xdebug-ini-LC14" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-xdebug-ini-LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.var_display_max_children</span>=-1</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-xdebug-ini-LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.var_display_max_data</span>=-1</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-xdebug-ini-LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.var_display_max_depth</span>=-1</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/ta-toshio/8d3d19048f45f05bacecfcd1b29fdd02/raw/f1e2b8e42a5e06a822f1a5ea81f4ed4e2364246c/xdebug.ini" style="float:right">view raw</a>\n        <a href="https://gist.github.com/ta-toshio/8d3d19048f45f05bacecfcd1b29fdd02#file-xdebug-ini">xdebug.ini</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p>以下のサイトに全ての項目ではありませんが、各項目の分かりやすい説明がありました。\n<a href="https://qiita.com/castaneai/items/d5fdf577a348012ed8af">https://qiita.com/castaneai/items/d5fdf577a348012ed8af</a></p>\n<p>xdebug.remote_hostを少し解説します。</p>\n<p>デバッグの制御を開始するには、PHP動作側とリモートをつなぐ必要があります。PHP動作側（つまりコンテナ）からホスト（Mac、PhpStorm）に接続したいわけです。</p>\n<p>remote_hostに設定する値は、ホストのIPを名前解決する値を指定するわけですが、その値は <code class="language-text">host.docker.internal</code>としてdockerが用意してくれています。</p>\n<blockquote>\n<p>The host has a changing IP address (or none if you have no network access). From 18.03 onwards our recommendation is to connect to the special DNS name host.docker.internal, which resolves to the internal IP address used by the host. This is for development purpose and will not work in a production environment outside of Docker for Mac.</p>\n</blockquote>\n<p><a href="https://docs.docker.com/docker-for-mac/networking/#i-cannot-ping-my-containers">https://docs.docker.com/docker-for-mac/networking/#i-cannot-ping-my-containers</a></p>\n<p>こちらの値でも接続できるはずですが、そのうち使えなくなります。</p>\n<ul>\n<li>docker.for.mac.localhost</li>\n<li>docker.for.mac.host.internal</li>\n</ul>\n<p><a href="https://docs.docker.com/docker-for-mac/release-notes/#docker-community-edition-18030-ce-mac59-2018-03-26">https://docs.docker.com/docker-for-mac/release-notes/#docker-community-edition-18030-ce-mac59-2018-03-26</a></p>\n<h1>PhpStormの設定</h1>\n<h2>Server項目の設定</h2>\n<img src="https://user-images.githubusercontent.com/37950257/45221225-c6f7fe00-b2eb-11e8-8fad-e8abbb60a445.jpg">\n<ol start="0">\n<li>Phpstorm -> Preferences -> Laguages &#x26; Frameworks -> PHP -> Server</li>\n<li>Nameは何でもよくて、</li>\n<li>Hostはブラウザからアクセスするホスト名を入力して、</li>\n<li>Use path mappings ~ にチェックを入れて、</li>\n<li>Project Filesの Absolute path on the serverにコンテナ内で配置されているパスを記入します。</li>\n<li>Apply -> OK</li>\n</ol>\n<h2>Config項目の設定</h2>\n<img src="https://user-images.githubusercontent.com/37950257/45221223-c65f6780-b2eb-11e8-8b15-db4cf7f7c64b.jpg">\n<img src="https://user-images.githubusercontent.com/37950257/45221222-c65f6780-b2eb-11e8-858e-8d3db76e7393.jpg">\n<ol start="0">\n<li>RUN -> Edit Configurations…</li>\n<li>+</li>\n<li>PHP Remote Debug</li>\n<li>Nameは何でもよくて</li>\n<li>Serverは「server項目の設定」1で入力したNameが選択できるようになっています。それを選択。（写真ではxdebugとなっていますが、anynameと登録していたらanynameが選択できるようになっているはずです。）</li>\n<li>IDE Keyはxdebug.iniで入力したxdebug.idekeyを入力します。</li>\n<li>Apply -> OK</li>\n</ol>\n<h2>デバッグ起動</h2>\n<ol start="0">\n<li>RUN -> Debug</li>\n<li>「Config項目の設定」3で入力した名前が選択できるようになっています。それを選択。</li>\n<li>起動されたので、適当にブレイクポイントをセットして、ブラウザアクセスで確認です。</li>\n</ol>\n<p>以上になります。</p>',frontmatter:{title:"Remote Debugger With Phpstorm",date:"September 05, 2018"}}},pathContext:{slug:"/2018-09-05-remote-debugger-with-phpstorm/",previous:{fields:{slug:"/2018-09-04-docorator-pattern-code/"},frontmatter:{title:"Docorator Pattern Code"}},next:{fields:{slug:"/2018-09-06-remote-debugger-with-phpstorm-and-vagrant/"},frontmatter:{title:"Remote Debugger With Phpstorm And Vagrant"}}}}}});
//# sourceMappingURL=path---2018-09-05-remote-debugger-with-phpstorm-1cad0759aadb8d4a5571.js.map