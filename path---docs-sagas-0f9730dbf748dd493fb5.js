webpackJsonp([0xd75a0340c77f],{403:function(e,t){e.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Configuration",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}},{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}},{node:{frontmatter:{title:"Subscribers",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Akka",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Your First Read Model",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-read-model"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:5,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Your First Subscriber",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscriber"}}},{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Introduction",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/introduction"}}},{node:{frontmatter:{title:"Clustering",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}}]},postBySlug:{html:'<p>Sagas (otherwise known as process manager, or activities) are useful for doing distributed long running persistent transactions. They are also useful for coordinating message passing between aggregate root boundaries. A general rule of thumb is that Sagas only subscribe to events, and issue commands. As apposed to aggregate roots, which handle commands, and publish events. Sagas are only invoked through facts (events) that have happened in your business domain.</p>\n<p><strong>Long Running Saga</strong> - Imagine that you are an ecommerce vendor, and you want to give your loyal customers cool promotions. You can have a saga that monitors their ordering history and supply them with really cool voucher codes based on their purchase history. Sagas of this type are long running and persistent, and are really needed in business cases where you want to give your customers/users value</p>\n<p><strong>Coordinator Saga</strong> - Coordinator Sagas are pretty much sagas that fascilitate the communication between domain boundaries. This could be aggregate boundaries, or bounded contexts or both. It really depends on the situation.</p>\n<p>In Akkatecture, both of the above mentioned sagas can be modelled using the <code class="language-text">AggregateSaga&lt;,,&gt;</code> construct.</p>\n<p>Sagas are also, themselves, event sourced. Sagas can have their own events to emit and persist, as they are a special kind of aggregate root within Akkatecture. This means that your sagas can have an "infinite" lifespan and never "terminate". Sagas also exist on a higher level than aggregate roots since they require the knowledge of unrelated aggregate boundaries (in the form of their events). One could say that you can test the ubiquity of your ubiquitous through your Sagas.</p>\n<p>See the TestHelper example on the Saga that Akkatecture uses to fascilitate its testing. You will get a good idea of how it works <a href="https://github.com/Lutando/Akkatecture/tree/master/test/Akkatecture.TestHelpers/Aggregates/Sagas">here</a>.</p>',timeToRead:1,excerpt:"Sagas (otherwise known as process manager, or activities) are useful for doing distributed long running persistent transactions. They are…",frontmatter:{title:"Sagas",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["advanced-concepts","akkatecture","csharp","dotnet"]},fields:{slug:"/sagas"}}},pathContext:{slug:"/sagas",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-sagas-0f9730dbf748dd493fb5.js.map