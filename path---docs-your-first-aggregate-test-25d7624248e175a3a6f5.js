webpackJsonp([0x82b3149e5905],{435:function(n,s){n.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Walkthrough Introduction",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-introduction"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}},{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Your First Commands",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-commands"}}},{node:{frontmatter:{title:"Clustering",lesson:3,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}},{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Your First Events",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-events"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Specifications",lesson:5,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/specifications"}}},{node:{frontmatter:{title:"Your First Specifications",lesson:5,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-specifications"}}},{node:{frontmatter:{title:"Event Upgrading",lesson:5,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/event-upgrading"}}},{node:{frontmatter:{title:"Subscribers",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Your First Aggregate Test",lesson:6,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-test"}}},{node:{frontmatter:{title:"Testing Aggregates",lesson:6,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/testing-aggregates"}}},{node:{frontmatter:{title:"Scheduled Jobs",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/scheduled-jobs"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:7,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Akka",lesson:8,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Your First Subscribers",lesson:8,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscribers"}}},{node:{frontmatter:{title:"Configuration",lesson:9,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Your First Projections",lesson:9,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-projections"}}},{node:{frontmatter:{title:"Walkthrough Ending",lesson:10,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-ending"}}}]},postBySlug:{html:'<p>Any business application, especially one that deals with money, has to be rigorously tested. In our use case this means testing the aggregates to see if they behave as we intend them to. Akkatecture has a companion test package called <code class="language-text">Akkatecture.TestFixture</code> that gives test developers the tools to write fluent and easy to read tests</p>\n<p>Create an XUnit2 test project under <code class="language-text">/test/Domain.Tests</code> and add the <a href="https://www.nuget.org/packages/Akkatecture.TestFixture/">Akkatecture.TestFixture</a> package to the project. Also add the <a href="https://www.nuget.org/packages/Akka.TestKit.Xunit2/">Akka.TestKit.XUnit2</a> package to your project. You can easily use other dotnet testing frameworks but then you need to choose the correct corresponding companion package for <code class="language-text">Akka.TestKit.*</code>. Now we can write a simple test for our first command.</p>\n<p>Below is an example of how a test should look like. We have a class that derives from <code class="language-text">TestKit</code> which gives us the ability to do testing in the underlying akka.net actor system</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token comment">//test/Domain.Tests/AccountTests.cs</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AccountTests</span> <span class="token punctuation">:</span> <span class="token class-name">TestKit</span>\n<span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token class-name">Fact</span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">WhenOpenAccountCommand_ShouldEmitAccountOpen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> accountId <span class="token operator">=</span> AccountId<span class="token punctuation">.</span>New<span class="token punctuation">;</span>\n        <span class="token keyword">var</span> money <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Money</span><span class="token punctuation">(</span><span class="token number">50.1</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">FixtureFor</span><span class="token punctuation">&lt;</span><span class="token class-name">Account</span><span class="token punctuation">,</span> <span class="token class-name">AccountId</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>accountId<span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">GivenNothing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">When</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OpenNewAccountCommand</span><span class="token punctuation">(</span>accountId<span class="token punctuation">,</span> money<span class="token punctuation">)</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ThenExpect</span><span class="token punctuation">&lt;</span><span class="token class-name">AccountOpenedEvent</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>x <span class="token operator">=</span><span class="token operator">></span> x<span class="token punctuation">.</span>OpeningBalance <span class="token operator">==</span> money<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The scenario above, tests the first command <code class="language-text">OpenNewAccountCommand</code>, remember. The test has a clear goal, to see if the aggregate does what we expect it to do. In normal speak this is what the scenario is describing</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">0 - For an Account aggregate with Id = accountId\n1 - Given no prior activity\n2 - When sent OpenNewAccountCommand\n3 - Then expect AccountOpenedEvent to be emitted</code></pre>\n      </div>\n<p>We also need to test to see if money transferring works this one is a bit more involved but lets do it:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token punctuation">[</span><span class="token class-name">Fact</span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">GivenAccountIsOpened_WhenTransferIsCommanded_ShouldEmitAccountOpen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">var</span> accountId <span class="token operator">=</span> AccountId<span class="token punctuation">.</span>New<span class="token punctuation">;</span>\n    <span class="token keyword">var</span> receiverAccountId <span class="token operator">=</span> AccountId<span class="token punctuation">.</span>New<span class="token punctuation">;</span>\n    <span class="token keyword">var</span> openingBalance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Money</span><span class="token punctuation">(</span><span class="token number">20.3</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> transferAmount <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Money</span><span class="token punctuation">(</span><span class="token number">10.98</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> transactionId <span class="token operator">=</span> TransactionId<span class="token punctuation">.</span>New<span class="token punctuation">;</span>\n    <span class="token keyword">var</span> transaction <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Transaction</span><span class="token punctuation">(</span>transactionId<span class="token punctuation">,</span> accountId<span class="token punctuation">,</span> receiverAccountId<span class="token punctuation">,</span> transferAmount<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">FixtureFor</span><span class="token punctuation">&lt;</span><span class="token class-name">Account</span><span class="token punctuation">,</span> <span class="token class-name">AccountId</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>accountId<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">Given</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AccountOpenedEvent</span><span class="token punctuation">(</span>openingBalance<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">When</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TransferMoneyCommand</span><span class="token punctuation">(</span>accountId<span class="token punctuation">,</span> transaction<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ThenExpect</span><span class="token punctuation">&lt;</span><span class="token class-name">MoneySentEvent</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>x <span class="token operator">=</span><span class="token operator">></span> x<span class="token punctuation">.</span>Transaction <span class="token operator">==</span> transaction<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ThenExpect</span><span class="token punctuation">&lt;</span><span class="token class-name">FeesDeductedEvent</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>x <span class="token operator">=</span><span class="token operator">></span> x<span class="token punctuation">.</span>Amount<span class="token punctuation">.</span>Value <span class="token operator">==</span> <span class="token number">0.25</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>We can describe the test scenario above as follows:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">0 - For an Account aggregate with Id = accountId\n1 - Given that it has AccountOpenedEvent\n2 - When sent TransferMoneyCommand\n3 - Then expect MoneySentEvent to be emitted\n4 - And Then expect FeesDeductedEvent to be emitted</code></pre>\n      </div>\n<p>The test project can be found in the walkthrough repository <a href="https://github.com/Akkatecture/Walkthrough/blob/master/test/Domain.Tests/AccountTests.cs">test</a> folder.</p>\n<p>The <code class="language-text">ReceiveMoneyCommand</code> can be tested as an excersize to the reader. More information about the testing can be found in the <a href="/docs/testing-aggregates">testing</a> section of the documentation.</p>\n<p>Next we shall go over how to craft your own <strong>sagas</strong>. Which add an extra dimension of capabilities by allowing you to do cross aggregate message coordination.</p>\n<p><a href="/docs/your-first-aggregate-saga">Next →</a></p>',timeToRead:3,excerpt:"Any business application, especially one that deals with money, has to be rigorously tested. In our use case this means testing the…",frontmatter:{title:"Your First Aggregate Test",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["walkthrough","akkatecture","tdd","bdd","testing","csharp","dotnet"]},fields:{slug:"/your-first-aggregate-test"}}},pathContext:{slug:"/your-first-aggregate-test",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-your-first-aggregate-test-25d7624248e175a3a6f5.js.map