webpackJsonp([0xdb3f7ce780b9],{405:function(t,e){t.exports={data:{allMarkdownRemark:{totalCount:26,edges:[{node:{fields:{slug:"/snapshotting"},excerpt:"Snapshotting is a future feature and will be documented when it becomes available. 😊",timeToRead:1,frontmatter:{title:"Snapshotting",tags:["advanced-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/specifications"},excerpt:"Akkatecture comes with an implementation of the specification pattern which could be used to e.g. make complex business rules easier to read…",timeToRead:2,frontmatter:{title:"Specifications",tags:["basic-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/event-upgrading"},excerpt:"TBD",timeToRead:1,frontmatter:{title:"Event Upgrading",tags:["advanced-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/articles"},excerpt:"Domain-Driven Design Domain-Driven Design Reference  by Eric Evans General CQRS+ES CQRS Journey by Microsoft  by Microsoft Microservice DDD…",timeToRead:1,frontmatter:{title:"Articles",tags:["further-self-study","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/clustering"},excerpt:"Clustering is a huge concept with many moving parts, so for now refer to the akka.net documentation on clustering since that is basically…",timeToRead:1,frontmatter:{title:"Clustering",tags:["advanced-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/production-readiness"},excerpt:"There actually is a long laundry list of things one might want to consider prior to deploying to production. Remember, now that we are using…",timeToRead:1,frontmatter:{title:"Production Readiness",tags:["advanced-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/videos"},excerpt:"Below are some video resources that you can use to bootstrap your fundamental knowledge about the concepts that are seen throughout…",timeToRead:1,frontmatter:{title:"Videos",tags:["further-self-study","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/tips-and-tricks"},excerpt:"Whenever creating an application that uses cqrs and   event sourcing there are several\nthings you need to keep in mind to make it easier and…",timeToRead:3,frontmatter:{title:"Tips and Tricks",tags:["further-self-study","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/commands"},excerpt:"Commands are the basic  's, that represent the operations of intent that you want to perform in your domain. Aggregate commands sent to…",timeToRead:3,frontmatter:{title:"Commands",tags:["basic-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/primitives"},excerpt:"The basic core primitives of akkatecture are: Value Objects Identities Entities A Value Object is an immutable type that is distinguishable…",timeToRead:4,frontmatter:{title:"Primitives",tags:["basic-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/getting-started"},excerpt:"Welcome to Akkatecture Using Akkatecture is as easy as installing any other NuGet package in your .net core application. All you need to do…",timeToRead:1,frontmatter:{title:"Getting Started",tags:["getting-started","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/akka"},excerpt:"Actors are objects which encapsulate state and behavior, they communicate exclusively by exchanging messages which are placed into the…",timeToRead:1,frontmatter:{title:"Akka",tags:["basic-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/events"},excerpt:"In an event source system like Akkatecture, aggregate root data is stored stored in events. These events are replayed upon aggregate root…",timeToRead:5,frontmatter:{title:"Events",tags:["basic-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/your-first-aggregate-saga"},excerpt:"",timeToRead:1,frontmatter:{title:"Your First Aggregate Saga",tags:["walkthrough","akkatecture","saga","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/your-first-read-models"},excerpt:"TBD",timeToRead:1,frontmatter:{title:"Your First Read Models",tags:["walkthrough","akkatecture","readmodels","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/your-first-subscribers"},excerpt:"TBD",timeToRead:1,frontmatter:{title:"Your First Subscribers",tags:["walkthrough","akkatecture","subscriber","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/subscribers"},excerpt:"Subscribers in Akkatecture come in the form of  . This allows you to have actors within the actor system listening to domain events that get…",timeToRead:1,frontmatter:{title:"Subscribers",tags:["basic-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/your-first-cluster"},excerpt:"TBD",timeToRead:1,frontmatter:{title:"Your First Cluster",tags:["walkthrough","akkatecture","cluster","csharp","dotnet","cluster"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/sagas"},excerpt:"Sagas (otherwise known as  process managers , or activities) are useful for doing distributed, long running persistent, transactions. They…",timeToRead:2,frontmatter:{title:"Sagas",tags:["advanced-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/walkthrough-introduction"},excerpt:"Lets design a domain using Akkatecture. The walkthrough is designed to get you familiar with Akkatecture, akka.net, cqrs and event sourcing…",timeToRead:1,frontmatter:{title:"Walkthrough Introduction",tags:["walkthrough","akkatecture","introduction","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/configuration"},excerpt:"Akkatecture does not have any of its own configuration points as of yet. Akkatecture will use the same configuration hooks as akka.net…",timeToRead:1,frontmatter:{title:"Configuration",tags:["basic-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/aggregates"},excerpt:"Initially, before you can create an aggregate, you need to create its corresponding \nidentity and state. You can create your own…",timeToRead:2,frontmatter:{title:"Aggregates",tags:["basic-concepts","akkatecture","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/your-first-aggregate"},excerpt:"On analysis of the business requirements, it is apparent that the main aggregate entity that exists under the   domain is a  . The bank…",timeToRead:1,frontmatter:{title:"Your First Aggregate",tags:["walkthrough","akkatecture","aggregate","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/your-first-commands"},excerpt:"Let us recall some of the business requiremtents for the bank: The bank needs to allow customers to create bank accounts for free with a non…",timeToRead:1,frontmatter:{title:"Your First Commands",tags:["walkthrough","akkatecture","commands","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/your-first-events"},excerpt:"We now need to design the aggregate events that will alert the system that something has happened. Some events that occur in this system…",timeToRead:2,frontmatter:{title:"Your First Events",tags:["walkthrough","akkatecture","events","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}},{node:{fields:{slug:"/your-first-specifications"},excerpt:"Before we dive into how to construct aggregate sagas in Akkatecture, we are missing some crucial bits. We have laid out some fundamental…",timeToRead:3,frontmatter:{title:"Your First Specifications",tags:["walkthrough","akkatecture","specifications","csharp","dotnet"],cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018"}}}]}},pathContext:{category:"akkatecture"}}}});
//# sourceMappingURL=path---categories-akkatecture-a8c340618d04444107bc.js.map