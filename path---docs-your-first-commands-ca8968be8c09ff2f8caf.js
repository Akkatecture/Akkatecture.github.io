webpackJsonp([32197525406939],{430:function(n,s){n.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Clustering",lesson:3,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Testing Actors",lesson:6,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/testing-actors"}}},{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Configuration",lesson:8,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Specifications",lesson:5,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/specifications"}}},{node:{frontmatter:{title:"Subscribers",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}},{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Walkthrough Introduction",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-introduction"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Your First Commands",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-commands"}}},{node:{frontmatter:{title:"Your First Events",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-events"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:6,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Your First Subscribers",lesson:7,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscribers"}}},{node:{frontmatter:{title:"Your First Specifications",lesson:5,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-specifications"}}},{node:{frontmatter:{title:"Your First Read Models",lesson:8,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-read-models"}}},{node:{frontmatter:{title:"Walkthrough Ending",lesson:9,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-ending"}}},{node:{frontmatter:{title:"Akka",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Event Upgrading",lesson:5,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/event-upgrading"}}}]},postBySlug:{html:'<p>Let us remind ourselves of some of the business requirements for the task that we are trying to do:</p>\n<ul>\n<li>The bank needs to allow customers to create accounts for free with a non-negative opening balance.</li>\n<li>The bank needs to allow customers to transfer money between accounts.</li>\n</ul>\n<p>We could see these as two commands, one for creating the bank account. And another one for initiating a money transfer:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token comment">//command for creating the bank account</span>\n<span class="token comment">//Walkthrough.Domain/Model/Account/Commands/OpenNewAccountCommand.cs</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OpenNewAccountCommand</span> <span class="token punctuation">:</span> <span class="token class-name">Command</span><span class="token operator">&lt;</span>Account<span class="token punctuation">,</span> AccountId<span class="token operator">></span> \n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">Money</span> OpeningBalance <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token function">OpenNewAccountCommand</span><span class="token punctuation">(</span><span class="token class-name">AccountId</span> aggregateId<span class="token punctuation">,</span> <span class="token class-name">Money</span> openingBalance<span class="token punctuation">)</span>\n        <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>aggregateId<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>openingBalance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ArgumentNullException</span><span class="token punctuation">(</span><span class="token function">nameof</span><span class="token punctuation">(</span>openingBalance<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        OpeningBalance <span class="token operator">=</span> openingBalance<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>And the transfer money command can be made as follows:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token comment">//command for initiating (sending) a money transfer</span>\n<span class="token comment">//Walkthrough.Domain/Model/Account/Commands/TransferMoneyCommand.cs</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TransferMoneyCommand</span> <span class="token punctuation">:</span> <span class="token class-name">Command</span><span class="token operator">&lt;</span>Account<span class="token punctuation">,</span> AccountId<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">Transaction</span> Transaction <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token function">TransferMoneyCommand</span><span class="token punctuation">(</span>\n    <span class="token class-name">AccountId</span> aggregateId<span class="token punctuation">,</span>\n    <span class="token class-name">Transaction</span> transaction<span class="token punctuation">)</span>\n        <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>aggregateId<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Transaction <span class="token operator">=</span> transaction<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>But there is actually a third command, we need a command to have an account aggregate receive money.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token comment">//command for receiving a money transfer</span>\n<span class="token comment">//Walkthrough.Domain/Model/Account/Commands/ReceiveMoneyCommand.cs</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReceiveMoneyCommand</span> <span class="token punctuation">:</span> <span class="token class-name">Command</span><span class="token operator">&lt;</span>Account<span class="token punctuation">,</span>AccountId<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">Transaction</span> Transaction <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n        \n    <span class="token keyword">public</span> <span class="token function">ReceiveMoneyCommand</span><span class="token punctuation">(</span>\n    <span class="token class-name">AccountId</span> aggregateId<span class="token punctuation">,</span> \n    <span class="token class-name">Transaction</span> transaction<span class="token punctuation">)</span> \n        <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>aggregateId<span class="token punctuation">)</span> \n    <span class="token punctuation">{</span>\n        Transaction <span class="token operator">=</span> transaction<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>We have glossed over this <code class="language-text">Transaction</code> model. The transaction model is a model that encompasses the details of the money transaction. The sender and the receiver accounts along with the amount to be transferred. In this walkthrough it will be modelled as an <code class="language-text">Entity&lt;TransactionId&gt;</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token comment">//Walkthrough.Domain/Model/Account/Entities/Transaction.cs</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Transaction</span> <span class="token punctuation">:</span> <span class="token class-name">Entity</span><span class="token operator">&lt;</span>TransactionId<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">AccountId</span> Sender <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token class-name">AccountId</span> Receiver <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token class-name">Money</span> Amount <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n        \n    <span class="token keyword">public</span> <span class="token function">Transaction</span><span class="token punctuation">(</span><span class="token class-name">TransactionId</span> entityId<span class="token punctuation">,</span> <span class="token class-name">AccountId</span> sender<span class="token punctuation">,</span> <span class="token class-name">AccountId</span> receiver<span class="token punctuation">,</span> <span class="token class-name">Money</span> amount<span class="token punctuation">)</span>\n        <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>entityId<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Sender <span class="token operator">=</span> sender<span class="token punctuation">;</span>\n        Receiver <span class="token operator">=</span> receiver<span class="token punctuation">;</span>\n        Amount <span class="token operator">=</span> amount<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Be sure to also model the corresponding <code class="language-text">TransactionId</code> for the <code class="language-text">Transaction</code> entity.</p>\n<blockquote>\n<p>Typically when designing a business domain, one would start with the events first. Instead of modelling how external players interact with the system, one should start with designing how the system interacts with itself through a process called <a href="https://en.wikipedia.org/wiki/Event_storming">event storming</a>.</p>\n</blockquote>\n<p>Now we can make some events for the business domain. Events are the fundamental building blocks of event sourced systems. Go on ahead next to create your first <strong>events</strong>.</p>\n<p><a href="/docs/your-first-events">Next →</a></p>',timeToRead:2,excerpt:"Let us remind ourselves of some of the business requirements for the task that we are trying to do: The bank needs to allow customers to…",frontmatter:{title:"Your First Commands",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["walkthrough","akkatecture","commands","csharp","dotnet"]},fields:{slug:"/your-first-commands"}}},pathContext:{slug:"/your-first-commands",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-your-first-commands-ca8968be8c09ff2f8caf.js.map