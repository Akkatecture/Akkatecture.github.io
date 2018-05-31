webpackJsonp([71292731132602],{413:function(e,t){e.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Clustering",lesson:3,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Event Upgrading",lesson:5,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/event-upgrading"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Akka",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Testing Actors",lesson:6,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/testing-actors"}}},{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Configuration",lesson:8,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Specifications",lesson:5,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/specifications"}}},{node:{frontmatter:{title:"Subscribers",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}},{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Walkthrough Introduction",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-introduction"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Your First Commands",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-commands"}}},{node:{frontmatter:{title:"Your First Events",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-events"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:6,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Your First Subscribers",lesson:7,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscribers"}}},{node:{frontmatter:{title:"Your First Specifications",lesson:5,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-specifications"}}},{node:{frontmatter:{title:"Your First Read Models",lesson:8,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-read-models"}}},{node:{frontmatter:{title:"Walkthrough Ending",lesson:9,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-ending"}}}]},postBySlug:{html:'<p>Akkatecture uses the same configuration hooks as akka.net, using <a href="http://getakka.net/articles/concepts/configuration.html">hocon</a>. Where as akka.net uses the <code class="language-text">akka{}</code> key as its own dedicated namespace in the hocon, Akkatecture uses <code class="language-text">akkatecture{}</code> namespace. The Akkatecture configuration and documentation (with the defaults) are designated within the project\'s reference configuration file <a href="https://github.com/Lutando/Akkatecture/blob/master/src/Akkatecture/Configuration/reference.conf">here</a>. Have a read over these configuration items and their comments.</p>\n<p>In <code class="language-text">Akkatecture.Cluster</code> there is a default configuration that ships with the package. It establishes sane (and opinionated) defaults for clustered scenarios. you can find the default <code class="language-text">akka.cluster</code> and <code class="language-text">akka.remote</code> and <code class="language-text">akka.actor</code> configurations that ship with the package <a href="https://github.com/Lutando/Akkatecture/blob/master/src/Akkatecture.Clustering/Configuration/default.conf">here</a>.</p>\n<h3 id="considerations"><a href="#considerations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Considerations</h3>\n<p>If you notice. The main akkatecture configuration reference is littered with feature switches for each domain construct that exists in Akkatecture. Turning them off will require you to add more code to your solution to take control of your requirements. Since Akkatecture is a framework that does much for you behind the scenes, if you turn feature switches off, you will need to compensate for it, with handlers or subscribing to events. As with most frameworks, the more barebones you go, the more control you have, at the cost of you having to implement your own custom requirements. Remember Akkatecture is just akka.net under the hood anyways. So feel free to "bust out" of the Akkatecture framework when you see the need to.</p>\n<blockquote>\n<p>We highly recommend that you consider going through the <a href="/docs/walkthrough-introduction">walkthrough</a> of Akkatecture which will have you building a solution based on some requiremets. </p>\n</blockquote>',timeToRead:1,excerpt:"Akkatecture uses the same configuration hooks as akka.net, using  hocon . Where as akka.net uses the   key as its own dedicated namespace in…",frontmatter:{title:"Configuration",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["basic-concepts","akkatecture","csharp","dotnet"]},fields:{slug:"/configuration"}}},pathContext:{slug:"/configuration",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-configuration-b13a2408115bd076ede0.js.map