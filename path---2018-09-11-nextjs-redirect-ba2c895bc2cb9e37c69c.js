webpackJsonp([28948697094777],{518:function(s,n){s.exports={data:{site:{siteMetadata:{title:"Toshio Blog",author:"Ta Toshio"}},markdownRemark:{id:"/Volumes/Transcend/Workspace/local/ta-toshio-blog/src/pages/2018-09-11-nextjs-redirect/index.md absPath of file >>> MarkdownRemark",html:'<p>next.jsを使う中でリダイレクト処理を扱う方法に、サーバー側で一工夫する箇所があるのだな、と気づきがあったので記事として残しておきます。</p>\n<p><strong>リダイレクト処理</strong></p>\n<p><div id="gist91842182" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-redirect-js" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-javascript">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-redirect-js-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-redirect-js-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> <span class="pl-smi">Router</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">&#39;</span>next/router<span class="pl-pds">&#39;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-redirect-js-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-redirect-js-LC2" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-redirect-js-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-redirect-js-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">export</span> <span class="pl-c1">default</span> (<span class="pl-smi">context</span>, <span class="pl-smi">target</span>) <span class="pl-k">=&gt;</span> {</td>\n      </tr>\n      <tr>\n        <td id="file-redirect-js-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-redirect-js-LC4" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-smi">context</span>.<span class="pl-smi">res</span>) {</td>\n      </tr>\n      <tr>\n        <td id="file-redirect-js-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-redirect-js-LC5" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> server</span></td>\n      </tr>\n      <tr>\n        <td id="file-redirect-js-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-redirect-js-LC6" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> 303: &quot;See other&quot;</span></td>\n      </tr>\n      <tr>\n        <td id="file-redirect-js-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-redirect-js-LC7" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">context</span>.<span class="pl-smi">res</span>.<span class="pl-en">writeHead</span>(<span class="pl-c1">303</span>, { <span class="pl-c1">Location</span><span class="pl-k">:</span> target })</td>\n      </tr>\n      <tr>\n        <td id="file-redirect-js-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-redirect-js-LC8" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">context</span>.<span class="pl-smi">res</span>.<span class="pl-en">end</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-redirect-js-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-redirect-js-LC9" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> {</td>\n      </tr>\n      <tr>\n        <td id="file-redirect-js-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-redirect-js-LC10" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> In the browser, we just pretend like this never even happened ;)</span></td>\n      </tr>\n      <tr>\n        <td id="file-redirect-js-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-redirect-js-LC11" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">Router</span>.<span class="pl-c1">replace</span>(target)</td>\n      </tr>\n      <tr>\n        <td id="file-redirect-js-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-redirect-js-LC12" class="blob-code blob-code-inner js-file-line">  }</td>\n      </tr>\n      <tr>\n        <td id="file-redirect-js-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-redirect-js-LC13" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/ta-toshio/cf887c8223565c5366e35185ed5296f2/raw/3e09c26d67de7785876031a795a094d4c6cc4a56/redirect.js" style="float:right">view raw</a>\n        <a href="https://gist.github.com/ta-toshio/cf887c8223565c5366e35185ed5296f2#file-redirect-js">redirect.js</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><strong>サーバー側でリダイレクトされた場合の扱い</strong></p>\n<p><code class="language-text">if (res &amp;&amp; res.finished) {</code> の箇所がポイント</p>\n<p><div id="gist91842182" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-hoc-js" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-javascript">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-hoc-js-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-hoc-js-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">export</span> <span class="pl-c1">default</span> <span class="pl-smi">App</span> <span class="pl-k">=&gt;</span> {</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-hoc-js-LC2" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-k">class</span> <span class="pl-en">Hoc</span> <span class="pl-k">extends</span> <span class="pl-e">React</span>.<span class="pl-smi">Component</span> {</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-hoc-js-LC3" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-hoc-js-LC4" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">static</span> <span class="pl-k">async</span> <span class="pl-en">getInitialProps</span> (<span class="pl-smi">ctx</span>) {</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-hoc-js-LC5" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">const</span> { <span class="pl-c1">Component</span>, <span class="pl-c1">router</span>, ctx<span class="pl-k">:</span> { <span class="pl-c1">req</span>, <span class="pl-c1">res</span> } } <span class="pl-k">=</span> ctx</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-hoc-js-LC6" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-hoc-js-LC7" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">let</span> appProps <span class="pl-k">=</span> {}</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-hoc-js-LC8" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">App</span>.<span class="pl-smi">getInitialProps</span>) {</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-hoc-js-LC9" class="blob-code blob-code-inner js-file-line">        appProps <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">App</span>.<span class="pl-en">getInitialProps</span>(ctx)</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-hoc-js-LC10" class="blob-code blob-code-inner js-file-line">      }</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-hoc-js-LC11" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-hoc-js-LC12" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (res <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">res</span>.<span class="pl-smi">finished</span>) {</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-hoc-js-LC13" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> When redirecting, the response is finished.</span></td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-hoc-js-LC14" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> No point in continuing to render</span></td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-hoc-js-LC15" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> {}</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-hoc-js-LC16" class="blob-code blob-code-inner js-file-line">      }</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-hoc-js-LC17" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-hoc-js-LC18" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> {</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-hoc-js-LC19" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">...</span>appProps</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-hoc-js-LC20" class="blob-code blob-code-inner js-file-line">      }</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-hoc-js-LC21" class="blob-code blob-code-inner js-file-line">    }</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-hoc-js-LC22" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-hoc-js-LC23" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">constructor </span>(<span class="pl-smi">props</span>) {</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-hoc-js-LC24" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">super</span>(props)</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-hoc-js-LC25" class="blob-code blob-code-inner js-file-line">    }</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-hoc-js-LC26" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-hoc-js-LC27" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">render</span> () {</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-hoc-js-LC28" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-k">&lt;</span>App {<span class="pl-k">...</span><span class="pl-c1">this</span>.<span class="pl-smi">props</span>} <span class="pl-k">/</span><span class="pl-k">&gt;</span></td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-hoc-js-LC29" class="blob-code blob-code-inner js-file-line">    }</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-hoc-js-LC30" class="blob-code blob-code-inner js-file-line">  }</td>\n      </tr>\n      <tr>\n        <td id="file-hoc-js-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-hoc-js-LC31" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/ta-toshio/cf887c8223565c5366e35185ed5296f2/raw/3e09c26d67de7785876031a795a094d4c6cc4a56/hoc.js" style="float:right">view raw</a>\n        <a href="https://gist.github.com/ta-toshio/cf887c8223565c5366e35185ed5296f2#file-hoc-js">hoc.js</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><strong>使用例</strong></p>\n<p><div id="gist91842182" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-sample-use-js" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-javascript">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-sample-use-js-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-sample-use-js-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-en">redirect</span>({}, <span class="pl-s"><span class="pl-pds">&#39;</span>/signin<span class="pl-pds">&#39;</span></span>)</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/ta-toshio/cf887c8223565c5366e35185ed5296f2/raw/3e09c26d67de7785876031a795a094d4c6cc4a56/sample-use.js" style="float:right">view raw</a>\n        <a href="https://gist.github.com/ta-toshio/cf887c8223565c5366e35185ed5296f2#file-sample-use-js">sample-use.js</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p>引用元:\n<a href="https://github.com/zeit/next.js/tree/canary/examples/with-apollo-auth">https://github.com/zeit/next.js/tree/canary/examples/with-apollo-auth</a></p>',frontmatter:{title:"Nextjs Redirect",date:"September 11, 2018"}}},pathContext:{slug:"/2018-09-11-nextjs-redirect/",previous:{fields:{slug:"/2018-09-05-remote-debugger-with-phpstorm/"},frontmatter:{title:"Remote Debugger With Phpstorm"}},next:!1}}}});
//# sourceMappingURL=path---2018-09-11-nextjs-redirect-ba2c895bc2cb9e37c69c.js.map