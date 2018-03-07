webpackJsonp([0x6d2303377df5],{446:function(e,n){e.exports={data:{markdownRemark:{html:'<h2 id="beforevaluechange"><a href="#beforevaluechange" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>beforeValueChange</h2>\n<p>Most filter components in ReactiveSearch provides a <code>beforeValueChange</code> prop. It is a callback function which accepts component’s future <strong>value</strong> as a parameter and <strong>returns</strong> a promise. It is called everytime before a component’s value changes. The promise, if and when resolved, triggers the execution of the component’s query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.</p>\n<blockquote>\n<p>Note</p>\n<p>Most of the time your needs can be solved using <code>onValueChange</code>. If you absolutely need <code>beforeValueChange</code> you should ensure that you don’t pass a function which takes a very long time to resolve the promise. The component goes in a <strong>locked</strong> state when using <code>beforeValueChange</code> and before the promise is resolved. This means all the state updates are suspended for the component.</p>\n</blockquote>\n<h2 id="minimizing-bundle-size"><a href="#minimizing-bundle-size" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Minimizing bundle size</h2>\n<p>ReactiveSearch from v2.3.1 also provides ES modules which can help you in reducing your app’s final bundle size. You can achieve this with <strong>tree shaking</strong>. If you’re unable to setup tree shaking in your project we recommend trying out the <a href="https://github.com/umidbekkarimov/babel-plugin-direct-import" target="_blank">babel-plugin-direct-import</a>.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code>yarn add -D babel-plugin-direct-import\n</code></pre>\n      </div>\n<p>After adding this you can update your <code>.babelrc</code> accordingly:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token punctuation">{</span>\n    <span class="token string">"presets"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token string">"react"</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token string">"plugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">[</span>\n          <span class="token string">"direct-import"</span><span class="token punctuation">,</span>\n          <span class="token punctuation">[</span>\n            <span class="token string">"@appbaseio/reactivesearch"</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n              <span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"@appbaseio/reactivesearch"</span><span class="token punctuation">,</span>\n              <span class="token string">"indexFile"</span><span class="token punctuation">:</span> <span class="token string">"@appbaseio/reactivesearch/lib/index.es.js"</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Now your <code>import</code> statements will only include the necessary modules. So,</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ReactiveBase <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@appbaseio/reactivesearch\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>will include only the <code>ReactiveBase</code> module. Alternatively, you may avoid this step altogether and <code>import</code> using the full path, however the above method looks cleaner and you don’t have to worry about the component’s path in the library. Check out the <a href="https://github.com/appbaseio-apps/webpack-tree-shaking">example repo</a> for the above setup.</p>\n<p>Following also works with no extra setup, albeit a bit more explicit path:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ReactiveBase <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@appbaseio/reactivesearch/lib/components/basic/ReactiveBase\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>Note</p>\n<p>If you’re using <strong>create-react-app</strong> you might need to update your configurations if tree shaking is not working out of the box. You may try <a href="https://github.com/timarney/react-app-rewired" target="_blank">react-app-rewired</a> instead of ejecting the app.</p>\n</blockquote>',frontmatter:{title:"Advanced Guides",next:"advanced/comparison.html",prev:"advanced/writingdata.html",nextTitle:"Comparison",prevTitle:"Writing and Editing Data"},fields:{path:"docs/advanced/Guides.md",slug:"advanced/guides.html"}}},pathContext:{slug:"advanced/guides.html"}}}});
//# sourceMappingURL=path---advanced-guides-html-25c331dff5d3e3849676.js.map