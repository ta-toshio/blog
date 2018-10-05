webpackJsonp([0x82563de5befc],{525:function(e,n){e.exports={data:{site:{siteMetadata:{title:"Toshio Blog",author:"Ta Toshio"}},markdownRemark:{id:"/Volumes/Transcend/Workspace/local/ta-toshio-blog/src/pages/2018-09-06-remote-debugger-with-phpstorm-and-vagrant/index.md absPath of file >>> MarkdownRemark",html:'<p>前回の続きで、今回はVagrantで作成した仮想環境内にDockerをインストールして、その中でphpコンテナ、nginxコンテナを用意してリモートデバッグをした記事になります。</p>\n<p>動作環境</p>\n<ul>\n<li>Docker (Docker version 18.06.0-ce, build 0ffa825)</li>\n<li>Docker-Compoe (docker-compose version 1.21.2, build a133471)</li>\n<li>Vagrant (Version: 2.1.1)</li>\n<li>PhpStorm (Version: PhpStorm 2018.1.6)</li>\n</ul>\n<p>PHPが動作しているコンテナでxdebug.iniを適用</p>\n<p><div id="gist92295319" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-xdebug-ini" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-ini ">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-xdebug-ini-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-xdebug-ini-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">;</span> NOTE: The actual debug.so extention is NOT SET HERE but rather (/usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini)</span></td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-xdebug-ini-LC2" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-xdebug-ini-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.remote_connect_back</span>=1</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-xdebug-ini-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.remote_port</span>=9000</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-xdebug-ini-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.idekey</span>=PHPSTORM</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-xdebug-ini-LC6" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-xdebug-ini-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.remote_autostart</span>=1</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-xdebug-ini-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.remote_enable</span>=1</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-xdebug-ini-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.cli_color</span>=0</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-xdebug-ini-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.profiler_enable</span>=0</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-xdebug-ini-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.profiler_output_dir</span>=<span class="pl-s"><span class="pl-pds">&quot;</span>~/xdebug/phpstorm/tmp/profiling<span class="pl-pds">&quot;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-xdebug-ini-LC12" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-xdebug-ini-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.remote_handler</span>=dbgp</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-xdebug-ini-LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.remote_mode</span>=req</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-xdebug-ini-LC15" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-xdebug-ini-LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.var_display_max_children</span>=-1</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-xdebug-ini-LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.var_display_max_data</span>=-1</td>\n      </tr>\n      <tr>\n        <td id="file-xdebug-ini-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-xdebug-ini-LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-k">xdebug.var_display_max_depth</span>=-1</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/ta-toshio/01e928732bddb03b1f2a5dd461d9a5e0/raw/d5d10cfe81ea980ba5e3c808b145776a616deca6/xdebug.ini" style="float:right">view raw</a>\n        <a href="https://gist.github.com/ta-toshio/01e928732bddb03b1f2a5dd461d9a5e0#file-xdebug-ini">xdebug.ini</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p>その他は前回と同様になります。</p>',frontmatter:{title:"Remote Debugger With Phpstorm And Vagrant",date:"September 06, 2018"}}},pathContext:{slug:"/2018-09-06-remote-debugger-with-phpstorm-and-vagrant/",previous:{fields:{slug:"/2018-09-05-remote-debugger-with-phpstorm/"},frontmatter:{title:"Remote Debugger With Phpstorm"}},next:{fields:{slug:"/2018-09-11-nextjs-redirect/"},frontmatter:{title:"Nextjs Redirect"}}}}}});
//# sourceMappingURL=path---2018-09-06-remote-debugger-with-phpstorm-and-vagrant-6855f8ecd23245be52ea.js.map