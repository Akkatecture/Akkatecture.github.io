webpackJsonp([50867482497554],{432:function(n,s){n.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Walkthrough Introduction",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-introduction"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}},{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Your First Commands",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-commands"}}},{node:{frontmatter:{title:"Clustering",lesson:3,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}},{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Your First Events",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-events"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Specifications",lesson:5,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/specifications"}}},{node:{frontmatter:{title:"Your First Specifications",lesson:5,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-specifications"}}},{node:{frontmatter:{title:"Event Upgrading",lesson:5,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/event-upgrading"}}},{node:{frontmatter:{title:"Subscribers",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Your First Aggregate Test",lesson:6,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-test"}}},{node:{frontmatter:{title:"Testing Aggregates",lesson:6,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/testing-aggregates"}}},{node:{frontmatter:{title:"Scheduled Jobs",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/scheduled-jobs"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:7,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Akka",lesson:8,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Your First Subscribers",lesson:8,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscribers"}}},{node:{frontmatter:{title:"Configuration",lesson:9,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Your First Projections",lesson:9,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-projections"}}},{node:{frontmatter:{title:"Walkthrough Ending",lesson:10,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-ending"}}}]},postBySlug:{html:'<p>Lets tie up the loose ends so that we can run it. We need to orchestrate the startup of the actor system. Typically in Akkatecture this means instantiating:</p>\n<ul>\n<li>AggregateManagers</li>\n<li>AggregateSagaManagers</li>\n<li>DomainEventSubscribers</li>\n<li>Persistence Dependencies</li>\n</ul>\n<p>The persistence dependencies is normally application specific. The <code class="language-text">RevenueRepository</code> in this walkthrough is an implementation detail and will depend on your persistence requirements.</p>\n<h2 id="startup"><a href="#startup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Startup</h2>\n<p>We can make a method <code class="language-text">CreateActorSystem()</code> that instantiates all the actors accordingly:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token comment">//Walkthrough.Application.Program.cs</span>\n<span class="token comment">//Create actor system</span>\n<span class="token keyword">var</span> system <span class="token operator">=</span> ActorSystem<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token string">"bank-system"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//Create aggregate manager for accounts</span>\n<span class="token keyword">var</span> aggregateManager <span class="token operator">=</span> system<span class="token punctuation">.</span><span class="token function">ActorOf</span><span class="token punctuation">(</span>Props<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">new</span> <span class="token class-name">AccountManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">"account-manager"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//Create revenue repository</span>\n<span class="token keyword">var</span> revenueRepository <span class="token operator">=</span> system<span class="token punctuation">.</span><span class="token function">ActorOf</span><span class="token punctuation">(</span>Props<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">new</span> <span class="token class-name">RevenueRepository</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">"revenue-repository"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//Create subscriber for revenue repository</span>\nsystem<span class="token punctuation">.</span><span class="token function">ActorOf</span><span class="token punctuation">(</span>Props<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">new</span> <span class="token class-name">RevenueSubscriber</span><span class="token punctuation">(</span>revenueRepository<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">"revenue-subscriber"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//Create saga manager for money transfer</span>\nsystem<span class="token punctuation">.</span><span class="token function">ActorOf</span><span class="token punctuation">(</span>Props<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>\n    <span class="token keyword">new</span> <span class="token class-name">MoneyTransferSagaManager</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">new</span> <span class="token class-name">MoneyTransferSaga</span><span class="token punctuation">(</span>aggregateManager<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">"moneytransfer-saga"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="example-usage"><a href="#example-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example Usage</h2>\n<p>In our console application\'s <code class="language-text">Main(...)</code> method:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token comment">//Walkthrough.Application.Program.cs</span>\n<span class="token comment">//initialize actor system</span>\n<span class="token function">CreateActorSystem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//create send receiver identifiers</span>\n<span class="token keyword">var</span> senderId <span class="token operator">=</span> AccountId<span class="token punctuation">.</span>New<span class="token punctuation">;</span>\n<span class="token keyword">var</span> receiverId <span class="token operator">=</span> AccountId<span class="token punctuation">.</span>New<span class="token punctuation">;</span>\n\n<span class="token comment">//create mock opening balances</span>\n<span class="token keyword">var</span> senderOpeningBalance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Money</span><span class="token punctuation">(</span><span class="token number">509.23</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> receiverOpeningBalance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Money</span><span class="token punctuation">(</span><span class="token number">30.45</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//create commands for opening the sender and receiver accounts</span>\n<span class="token keyword">var</span> openSenderAccountCommand <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OpenNewAccountCommand</span><span class="token punctuation">(</span>senderId<span class="token punctuation">,</span> senderOpeningBalance<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> openReceiverAccountCommand <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OpenNewAccountCommand</span><span class="token punctuation">(</span>receiverId<span class="token punctuation">,</span> receiverOpeningBalance<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//send the command to be handled by the account aggregate</span>\nAccountManager<span class="token punctuation">.</span><span class="token function">Tell</span><span class="token punctuation">(</span>openReceiverAccountCommand<span class="token punctuation">)</span><span class="token punctuation">;</span>\nAccountManager<span class="token punctuation">.</span><span class="token function">Tell</span><span class="token punctuation">(</span>openSenderAccountCommand<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//create command to initiate money transfer</span>\n<span class="token keyword">var</span> amountToSend <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Money</span><span class="token punctuation">(</span><span class="token number">125.23</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> transaction <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Transaction</span><span class="token punctuation">(</span>senderId<span class="token punctuation">,</span> receiverId<span class="token punctuation">,</span> amountToSend<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> transferMoneyCommand <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TransferMoneyCommand</span><span class="token punctuation">(</span>senderId<span class="token punctuation">,</span>transaction<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//send the command to initiate the money transfer</span>\nAccountManager<span class="token punctuation">.</span><span class="token function">Tell</span><span class="token punctuation">(</span>transferMoneyCommand<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//fake \'wait\' to let the saga process the chain of events</span>\n<span class="token keyword">await</span> Task<span class="token punctuation">.</span><span class="token function">Delay</span><span class="token punctuation">(</span>TimeSpan<span class="token punctuation">.</span><span class="token function">FromSeconds</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nConsole<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Walkthrough operations complete.\\n\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nConsole<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Press Enter to get the revenue:"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nConsole<span class="token punctuation">.</span><span class="token function">ReadLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//get the revenue stored in the repository</span>\n<span class="token keyword">var</span> revenue <span class="token operator">=</span> RevenueRepository<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Ask</span><span class="token punctuation">&lt;</span><span class="token class-name">RevenueProjection</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GetRevenueQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> TimeSpan<span class="token punctuation">.</span><span class="token function">FromMilliseconds</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Result<span class="token punctuation">;</span>\n\n<span class="token comment">//print the results</span>\nConsole<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>$<span class="token string">"The Revenue is: {revenue.Revenue.Value}."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nConsole<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>$<span class="token string">"From: {revenue.Transactions} transaction(s)."</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>There we have our sample application working, congragulations for making it this far. Make sure to checkout the code and run the <a href="https://github.com/Akkatecture/Walkthrough">walkthrough</a>. A full example can be found in the repository.</p>\n<h2 id="in-closing"><a href="#in-closing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>In Closing</h2>\n<p>Fantastic. You have finished the walkthrough. But don\'t stop there. Further your understanding by looking at some of the external resources that we have collected in <a href="/docs/videos">video</a>, and in <a href="/docs/articles">article</a> form.</p>',timeToRead:2,excerpt:"Lets tie up the loose ends so that we can run it. We need to orchestrate the startup of the actor system. Typically in Akkatecture this…",frontmatter:{title:"Walkthrough Ending",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["walkthrough","akkatecture","projections","csharp","dotnet"]},fields:{slug:"/walkthrough-ending"}}},pathContext:{slug:"/walkthrough-ending",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-walkthrough-ending-58f9a2ae410e68055751.js.map