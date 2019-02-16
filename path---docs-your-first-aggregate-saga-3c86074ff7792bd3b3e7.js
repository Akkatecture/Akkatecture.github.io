webpackJsonp([0x9d162346a377],{427:function(a,n){a.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}},{node:{frontmatter:{title:"Event Upgrading",lesson:5,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/event-upgrading"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Clustering",lesson:3,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Specifications",lesson:5,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/specifications"}}},{node:{frontmatter:{title:"Testing Actors",lesson:6,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/testing-actors"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Subscribers",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Akka",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Configuration",lesson:8,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Your First Events",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-events"}}},{node:{frontmatter:{title:"Your First Specifications",lesson:5,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-specifications"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:6,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Your First Subscribers",lesson:7,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscribers"}}},{node:{frontmatter:{title:"Your First Read Models",lesson:8,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-read-models"}}},{node:{frontmatter:{title:"Walkthrough Ending",lesson:9,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-ending"}}},{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Walkthrough Introduction",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-introduction"}}},{node:{frontmatter:{title:"Your First Commands",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-commands"}}}]},postBySlug:{html:'<p>In Akkatecuture <code class="language-text">AggregateSaga&lt;,,&gt;</code>s are usefuly for coordinating message passing between service or aggregate boundaries. More about sagas can be said in our documentation over <a href="/docs/sagas">here</a>, but in this walkthrough we will re-iterate over some of the concepts and implement them to our needs. </p>\n<p>One of the major components missing in our current task is the ability to tell other Account\'s that there is money to be received. In other words, we lack the ability to command bank accounts to receive money as a result of another bank account having sent the money. </p>\n<p>Since we are making a saga responsible for coordinating money transfer, lets call it the <code class="language-text">MoneyTransferSaga</code>. Bare with the explanation but we will model it one stab. Sagas need to implement <code class="language-text">ISagaIsStartedBy&lt;,,&gt;</code> and (sometimes) <code class="language-text">ISagaHandles&lt;,,&gt;</code> interfaces. These interfaces give you a nice description of how the saga works and which boundaries it operates between.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MoneyTransferSaga</span> <span class="token punctuation">:</span> <span class="token class-name">AggregateSaga</span><span class="token operator">&lt;</span>MoneyTransferSaga<span class="token punctuation">,</span> MoneyTransferSagaId<span class="token punctuation">,</span> MoneyTransferSagaState<span class="token operator">></span><span class="token punctuation">,</span>\n    ISagaIsStartedBy<span class="token operator">&lt;</span>Account<span class="token punctuation">,</span> AccountId<span class="token punctuation">,</span> MoneySentEvent<span class="token operator">></span><span class="token punctuation">,</span>\n    ISagaHandles<span class="token operator">&lt;</span>Account<span class="token punctuation">,</span> AccountId<span class="token punctuation">,</span> FeesDeductedEvent<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">IActorRef</span> AccountAggregateManager <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token function">MoneyTransferSaga</span><span class="token punctuation">(</span><span class="token class-name">IActorRef</span> accountAggregateManager<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        AccountAggregateManager <span class="token operator">=</span> accountAggregateManager<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token class-name">Task</span> <span class="token function">Handle</span><span class="token punctuation">(</span>IDomainEvent<span class="token operator">&lt;</span>Account<span class="token punctuation">,</span> AccountId<span class="token punctuation">,</span> MoneySentEvent<span class="token operator">></span> domainEvent<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> isNewSpec <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AggregateIsNewSpecification</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>isNewSpec<span class="token punctuation">.</span><span class="token function">IsSatisfiedBy</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">var</span> command <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReceiveMoneyCommand</span><span class="token punctuation">(</span>\n                domainEvent<span class="token punctuation">.</span>AggregateEvent<span class="token punctuation">.</span>Transaction<span class="token punctuation">.</span>Receiver<span class="token punctuation">,</span>\n                domainEvent<span class="token punctuation">.</span>AggregateEvent<span class="token punctuation">.</span>Transaction<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            \n            AccountAggregateManager<span class="token punctuation">.</span><span class="token function">Tell</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                \n            <span class="token function">Emit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MoneyTransferStartedEvent</span><span class="token punctuation">(</span>domainEvent<span class="token punctuation">.</span>AggregateEvent<span class="token punctuation">.</span>Transaction<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n            \n        <span class="token keyword">return</span> Task<span class="token punctuation">.</span>CompletedTask<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token class-name">Task</span> <span class="token function">Handle</span><span class="token punctuation">(</span>IDomainEvent<span class="token operator">&lt;</span>Account<span class="token punctuation">,</span> AccountId<span class="token punctuation">,</span> MoneyReceivedEvent<span class="token operator">></span> domainEvent<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> spec <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AggregateIsNewSpecification</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Not</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>spec<span class="token punctuation">.</span><span class="token function">IsSatisfiedBy</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token function">Emit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MoneyTransferCompletedEvent</span><span class="token punctuation">(</span>domainEvent<span class="token punctuation">.</span>AggregateEvent<span class="token punctuation">.</span>Transaction<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n            \n        <span class="token keyword">return</span> Task<span class="token punctuation">.</span>CompletedTask<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><code class="language-text">AggregateSaga&lt;,,&gt;</code>s in akkatecture behave just like <code class="language-text">AggregateRoot&lt;,,&gt;</code>s. They are event sourced and have a unique identity per instance based on its <code class="language-text">SagaId&lt;&gt;</code>. If you notice Handle methods on the aggregate saga are handling domain events and not commands (unlike aggregate roots which handle commands). All the same practices of domain validation applies, use specifications to enforce business rules. You can also see that aggregate sagas also <code class="language-text">Emit(...)</code> events just like aggregate roots, however in this case they emit events related to that saga.</p>\n<p>Lets talk about the first <code class="language-text">Handle</code> method in depth. Esentially it is responsible for handling the <code class="language-text">MoneySentEvent</code>. Which means telling the receiver aggregate that it is to receive money. We do this using a command that we made in the <a href="/docs/your-first-commands">previous lesson on commmands</a> using the <code class="language-text">ReceiveMoneyCommand</code>. After creating the receive money command we can tell the account that it has money to be received. After that we can emit an event that expresses the fact that the saga has begun using the <code class="language-text">MoneyTransferStartedEvent</code>.</p>\n<p>The <code class="language-text">SagaId&lt;&gt;</code> gives us a way to address the saga in the actor system, and much like <code class="language-text">Identity&lt;&gt;</code> it is also a <code class="language-text">SingleValueObject&lt;&gt;</code>. We can define our <code class="language-text">MoneyTransferSagaId</code> as follows:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MoneyTransferSagaId</span> <span class="token punctuation">:</span> <span class="token class-name">SagaId</span><span class="token operator">&lt;</span>MoneyTransferSagaId<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token function">MoneyTransferSagaId</span><span class="token punctuation">(</span><span class="token keyword">string</span> <span class="token keyword">value</span><span class="token punctuation">)</span>\n        <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>        \n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Akkatecture aggregate sagas are also similar to aggregate roots in that they have a state model, but this time it is based on <code class="language-text">SagaState&lt;,,&gt;</code>. We can define our <code class="language-text">SagaState&lt;,,&gt;</code> as follows:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MoneyTransferSagaState</span> <span class="token punctuation">:</span> <span class="token class-name">SagaState</span><span class="token operator">&lt;</span>MoneyTransferSaga<span class="token punctuation">,</span>MoneyTransferSagaId<span class="token punctuation">,</span>IEventApplier<span class="token operator">&lt;</span>MoneyTransferSaga<span class="token punctuation">,</span> MoneyTransferSagaId<span class="token operator">></span><span class="token operator">></span><span class="token punctuation">,</span>\n    IApply<span class="token operator">&lt;</span>MoneyTransferStartedEvent<span class="token operator">></span><span class="token punctuation">,</span>\n    IApply<span class="token operator">&lt;</span>MoneyTransferCompletedEvent<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">Transaction</span> Transaction <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">private</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">Apply</span><span class="token punctuation">(</span><span class="token class-name">MoneyTransferStartedEvent</span> aggregateEvent<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Transaction <span class="token operator">=</span> aggregateEvent<span class="token punctuation">.</span>Transaction<span class="token punctuation">;</span>\n        <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">Apply</span><span class="token punctuation">(</span><span class="token class-name">MoneyTransferCompletedEvent</span> aggregateEvent<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n       <span class="token function">Complete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<blockquote>\n<p>Check out how the saga events are modelled the source code <a href="https://github.com/Lutando/Akkatecture/tree/master/examples/walkthrough/Akkatecture.Walkthrough.Domain/Sagas/MoneyTransfer/Events">here</a>.</p>\n</blockquote>\n<p><code class="language-text">SagaState.Status</code> is an enum that describes the overall status of the saga. The status can be any of the following:</p>\n<ul>\n<li>NotStarted</li>\n<li>Running</li>\n<li>Completed</li>\n<li>Failed</li>\n<li>Cancelled</li>\n<li>PartiallySucceeded</li>\n</ul>\n<blockquote>\n<p>To set the saga into those states we recommend you use the methods that set the status member into the specified state. The respective methods are; <code class="language-text">Start()</code>,<code class="language-text">Complete()</code>,...,<code class="language-text">PartiallySucceed()</code>. And these should only ideally be used as a result of an aggregate saga event int a  <code class="language-text">SagaState.Apply(...)</code>.</p>\n</blockquote>\n<h3 id="aggregatesagamanager"><a href="#aggregatesagamanager" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>AggregateSagaManager</h3>\n<p>The <code class="language-text">AggregateSagaManager&lt;,,&gt;</code> functions just like the <code class="language-text">AggregateManager&lt;,,&gt;</code>. It is responsible for coordinating the message passing of messages to sagas. In this case it is not <code class="language-text">Commands&lt;,&gt;</code>, but <code class="language-text">IDomainEvent</code>s. We can define our saga manager as follows:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MoneyTransferSagaManager</span> <span class="token punctuation">:</span> <span class="token class-name">AggregateSagaManager</span><span class="token operator">&lt;</span>MoneyTransferSaga<span class="token punctuation">,</span>MoneyTransferSagaId<span class="token punctuation">,</span>MoneyTransferSagaLocator<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token function">MoneyTransferSagaManager</span><span class="token punctuation">(</span>Expression<span class="token operator">&lt;</span>Func<span class="token operator">&lt;</span>MoneyTransferSaga<span class="token operator">></span><span class="token operator">></span> factory<span class="token punctuation">)</span>\n        <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>            \n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>If you notice, the saga manager needs to have a factory method passed to its constructor so that it knows how to instantiate the underlying sagas since you may need to instantiate the saga with dependancies (like references to aggregatemanagers or other services).</p>\n<h3 id="sagalocators"><a href="#sagalocators" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>SagaLocators</h3>\n<p><code class="language-text">ISagaLocator&lt;&gt;</code>s are used to return <code class="language-text">SagaId&lt;&gt;</code>s for any given saga, these Ids are used to address sagas in the actor system. Unlike aggregate roots which are located by an aggregateId, Sagas are not. Sagas are locateable from a group or class of events that are related to that saga. In our case, we need to use the <code class="language-text">MoneySentEvent</code> and the <code class="language-text">MoneyReceivedEvent</code> events  addresses the saga that is required to process the event. Both events have a <code class="language-text">Transaction.Id</code> member so we can do that to address the saga. Lets define our <code class="language-text">ISagaLocator&lt;&gt;</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MoneyTransferSagaLocator</span> <span class="token punctuation">:</span> <span class="token class-name">ISagaLocator</span><span class="token operator">&lt;</span>MoneyTransferSagaId<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">const</span> <span class="token keyword">string</span> LocatorIdPrefix <span class="token operator">=</span> <span class="token string">"moneytransfer"</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token class-name">MoneyTransferSagaId</span> <span class="token function">LocateSaga</span><span class="token punctuation">(</span><span class="token class-name">IDomainEvent</span> domainEvent<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">switch</span> <span class="token punctuation">(</span>domainEvent<span class="token punctuation">.</span><span class="token function">GetAggregateEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">case</span> <span class="token class-name">MoneySentEvent</span> evt<span class="token punctuation">:</span>\n                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MoneyTransferSagaId</span><span class="token punctuation">(</span>$<span class="token string">"{LocatorIdPrefix}-{evt.Transaction.Id}"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">case</span> <span class="token class-name">MoneyReceivedEvent</span> evt<span class="token punctuation">:</span>\n                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MoneyTransferSagaId</span><span class="token punctuation">(</span>$<span class="token string">"{LocatorIdPrefix}-{evt.Transaction.Id}"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">default</span><span class="token punctuation">:</span>\n                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ArgumentNullException</span><span class="token punctuation">(</span><span class="token function">nameof</span><span class="token punctuation">(</span>domainEvent<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>We used a common bit of information that exists between these events to compose a locator for the saga. You can think of the SagaLocator as a function that returns an identifier for a group of events related to that saga. In this walkthrough, our sagas will have the identity of the form <code class="language-text">moneytransfer-transaction-{transactionId}</code>. It is good practice to prefix your saga locator addresses.</p>\n<blockquote>\n<p>Final note, it is good to think about an aggregate saga as a domain event subscriber that coordinates a distributed process. In Akkatecture, there exists a more barebones domain event subscriber for lighter scenarios. Lets have a look at what a domain event <strong>subscriber</strong> is next.</p>\n</blockquote>\n<p><a href="/docs/your-first-subscribers">Next →</a></p>',timeToRead:5,excerpt:"In Akkatecuture  s are usefuly for coordinating message passing between service or aggregate boundaries. More about sagas can be said in our…",frontmatter:{title:"Your First Aggregate Saga",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["walkthrough","akkatecture","saga","csharp","dotnet"]},fields:{slug:"/your-first-aggregate-saga"}}},pathContext:{slug:"/your-first-aggregate-saga",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-your-first-aggregate-saga-3c86074ff7792bd3b3e7.js.map