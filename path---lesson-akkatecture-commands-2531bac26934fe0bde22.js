webpackJsonp([0xad7098227441],{409:function(s,a){s.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Clustering",lesson:1,category:"akkatecture",chapter:4,type:"lesson"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"lesson"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"lesson"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"lesson"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Aggregates",lesson:3,category:"akkatecture",chapter:2,type:"lesson"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Commands",lesson:5,category:"akkatecture",chapter:2,type:"lesson"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Akka",lesson:6,category:"akkatecture",chapter:2,type:"lesson"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Configuration",lesson:8,category:"akkatecture",chapter:2,type:"lesson"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Events",lesson:4,category:"akkatecture",chapter:2,type:"lesson"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Identity",lesson:1,category:"akkatecture",chapter:2,type:"lesson"},fields:{slug:"/identity"}}},{node:{frontmatter:{title:"Subscribers",lesson:7,category:"akkatecture",chapter:2,type:"lesson"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Video Content",lesson:2,category:"akkatecture",chapter:5,type:"lesson"},fields:{slug:"/video-content"}}},{node:{frontmatter:{title:"Articles",lesson:1,category:"akkatecture",chapter:5,type:"lesson"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:1,category:"akkatecture",chapter:3,type:"lesson"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:4,category:"akkatecture",chapter:3,type:"lesson"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Your First Read Model",lesson:3,category:"akkatecture",chapter:3,type:"lesson"},fields:{slug:"/your-first-read-model"}}},{node:{frontmatter:{title:"Your First Subscriber",lesson:2,category:"akkatecture",chapter:3,type:"lesson"},fields:{slug:"/your-first-subscriber"}}},{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"lesson"},fields:{slug:"/getting-started"}}}]},postBySlug:{html:'<!-- <a class="remix-button" href="https://glitch.com/edit/#!/remix/nact-stateless-greeter" target="_blank">\n  <button>\n    <img src="/img/code-fork-symbol.svg"/> REMIX\n  </button>\n</a> -->\n<blockquote>\n<p>Tip: The remix buttons like the one above, allow you to try out the samples in this guide and make changes to them.\nPlaying around with the code is probably the best way to get to grips with the framework. </p>\n</blockquote>\n<p>Nact has only been tested to work on Node 8 and above. You can install nact in your project by invoking the following:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">    <span class="token function">npm</span> <span class="token function">install</span> --save nact</code></pre>\n      </div>\n<p>This is just for me Csharp Markup test</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token comment">//Create actor system</span>\n<span class="token keyword">var</span> system <span class="token operator">=</span> ActorSystem<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token string">"useraccount-example"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//Create supervising aggregate manager for UserAccount aggregate root actors</span>\n<span class="token keyword">var</span> aggregateManager <span class="token operator">=</span> system<span class="token punctuation">.</span><span class="token function">ActorOf</span><span class="token punctuation">(</span>Props<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">new</span> <span class="token class-name">UserAccountAggregateManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//Build create user account aggregate command with name "foo bar"</span>\n<span class="token keyword">var</span> aggregateId <span class="token operator">=</span> UserAccountId<span class="token punctuation">.</span>New<span class="token punctuation">;</span>\n<span class="token keyword">var</span> createUserAccountCommand <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CreateUserAccountCommand</span><span class="token punctuation">(</span>aggregateId<span class="token punctuation">,</span> <span class="token string">"foo bar"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            \n<span class="token comment">//Send command, this is equivalent to command.publish() in other cqrs frameworks</span>\naggregateManager<span class="token punctuation">.</span><span class="token function">Tell</span><span class="token punctuation">(</span>createUserAccountCommand<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            \n<span class="token comment">//tell the aggregateManager to change the name of the aggregate root to "foo bar baz"</span>\n<span class="token keyword">var</span> changeNameCommand <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserAccountChangeNameCommand</span><span class="token punctuation">(</span>aggregateId<span class="token punctuation">,</span> <span class="token string">"foo bar baz"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\naggregateManager<span class="token punctuation">.</span><span class="token function">Tell</span><span class="token punctuation">(</span>changeNameCommand<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Once installed, you need to import the start function, which starts and then returns the actor system.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token punctuation">{</span> start<span class="token punctuation">,</span> dispatch<span class="token punctuation">,</span> stop<span class="token punctuation">,</span> spawnStateless <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'nact\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> system <span class="token operator">=</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Once you have a reference to the system, it is now possible to create our first actor. To create an actor you have to <code class="language-text">spawn</code> it.  As is traditional, let us create an actor which says hello when a message is sent to it. Since this actor doesn\'t require any state, we can use the simpler <code class="language-text">spawnStateless</code> function.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> greeter <span class="token operator">=</span> <span class="token function">spawnStateless</span><span class="token punctuation">(</span>\n  system<span class="token punctuation">,</span> <span class="token comment">// parent</span>\n  <span class="token punctuation">(</span>msg<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>msg<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// function</span>\n  <span class="token string">\'greeter\'</span> <span class="token comment">// name</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>The first argument to <code class="language-text">spawnStateless</code> is the parent, which is in this case the actor system. The <a href="#hierarchy">hierarchy</a> section will go into more detail about this.</p>\n<p>The second argument to <code class="language-text">spawnStateless</code> is a function which is invoked when a message is received.</p>\n<p>The third argument to <code class="language-text">spawnStateless</code> is the name of the actor, which in this case is <code class="language-text">&#39;greeter&#39;</code>. The name field is optional, and if omitted, the actor is automatically assigned a name by the system.</p>\n<p>To communicate with the greeter, we need to <code class="language-text">dispatch</code> a message to it informing it who we are:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">dispatch</span><span class="token punctuation">(</span>greeter<span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'Erlich Bachman\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>This should print <code class="language-text">Hello Erlich Bachman</code> to the console. </p>\n<p>To complete this example, we need to shutdown our system. We can do this by calling <code class="language-text">stop(system)</code>\nThe <code class="language-text">stop</code> function also can be used to terminate an actor.</p>\n<blockquote>\n<p>Note: Stateless actors can service multiple requests at the same time. Statelessness means that such actors do not have to cater for concurrency issues.</p>\n</blockquote>',timeToRead:2,excerpt:"Tip: The remix buttons like the one above, allow you to try out the samples in this guide and make changes to them. \nPlaying around with the…",frontmatter:{title:"Commands",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["getting-started","nact","javascript","nodejs"]},fields:{slug:"/commands"}}},pathContext:{slug:"/commands",category:"akkatecture"}}}});
//# sourceMappingURL=path---lesson-akkatecture-commands-2531bac26934fe0bde22.js.map