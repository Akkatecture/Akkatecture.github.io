webpackJsonp([5874578191020],{399:function(e,a){e.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Configuration",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}},{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}},{node:{frontmatter:{title:"Subscribers",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Akka",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Clustering",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Your First Read Model",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-read-model"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:5,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Your First Subscriber",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscriber"}}}]},postBySlug:{html:'<p>The basic core primitives of akkatecture are:</p>\n<ul>\n<li><a href="#value-objects">Value Objects</a></li>\n<li><a href="#identities">Identities</a></li>\n<li><a href="#entities">Entities</a></li>\n</ul>\n<p>A Value Object is an immutable type that is distinguishable only by the state of its properties. That is, unlike an Entity, which has a unique identifier and remains distinct even if its properties are otherwise identical, two Value Objects with the exact same properties can be considered equal. Two entities with the same identity are considered equal. Akkatecture uses these primitives all over the project and you are highly encouraged to use them as well so that your domain design is highly expressive.</p>\n<h1 id="value-objects"><a href="#value-objects" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Value Objects</h1>\n<p>The <code class="language-text">SingleValueObject&lt;&gt;</code> generic primitive provides you with the necessary class overrides you need to have, so that they can be compared on the basis of their collective state. If all of their component properties are equal to one another, then two Value Objects can be said to be equal. It works by scanning for the value objects public members and comparing the members from value object to value object. Feel free to derive from this class:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AccountNumber</span> <span class="token punctuation">:</span> <span class="token class-name">SingleValueObject</span><span class="token operator">&lt;</span><span class="token keyword">string</span><span class="token operator">></span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token function">AccountNumber</span><span class="token punctuation">(</span><span class="token keyword">string</span> <span class="token keyword">value</span><span class="token punctuation">)</span>\n    <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n      <span class="token comment">//do some model validation, null checks etc.</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<blockquote>\n<p>It is recommended to use <code class="language-text">value</code> as the parameter name, if you intend to serialize value objects. With Akkatecture\'s built in serialization converters.</p>\n</blockquote>\n<h1 id="identities"><a href="#identities" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Identities</h1>\n<p>The <code class="language-text">Identity&lt;&gt;</code> value object provides generic functionality to create\nand validate the IDs of e.g. aggregate roots. Its basically a wrapper\naround a <code class="language-text">Guid</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AccountId</span> <span class="token punctuation">:</span> <span class="token class-name">Identity</span><span class="token operator">&lt;</span>AccountId<span class="token operator">></span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token function">AccountId</span><span class="token punctuation">(</span><span class="token keyword">string</span> <span class="token keyword">value</span><span class="token punctuation">)</span>\n    <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<ol>\n<li>\n<p>The identity follow the form <code class="language-text">{class without &quot;Id&quot;}-{guid}</code> e.g. <code class="language-text">account-c93fdb8c-5c9a-4134-bbcd-87c0644ca34f</code> for the above <code class="language-text">AccountId</code> example.</p>\n</li>\n<li>\n<p>The internal <code class="language-text">Guid</code> can be generated using one of the following methods/properties. Note that you can access the <code class="language-text">Guid</code> factories directly by accessing the static methods on the <code class="language-text">GuidFactories</code> class.</p>\n</li>\n<li>\n<p><code class="language-text">New</code>: Uses the standard <code class="language-text">Guid.NewGuid()</code>.</p>\n</li>\n<li>\n<p><code class="language-text">NewDeterministic(...)</code>: Creates a name-based <code class="language-text">Guid</code> using the algorithm from <a href="https://www.ietf.org/rfc/rfc4122.txt">RFC 4122 §4.3</a>, which allows identities to be generated based on known data, e.g. an user e-mail, i.e., it always returns the same identity for the same arguments.</p>\n</li>\n<li>\n<p><code class="language-text">NewComb()</code>: Creates a sequential <code class="language-text">Guid</code> that can be used to e.g. avoid database fragmentation.</p>\n</li>\n<li>\n<p>A <code class="language-text">string</code> can be tested to see if its a valid identity using the static <code class="language-text">bool IsValid(string)</code> method.</p>\n</li>\n<li>\n<p>Any validation errors can be gathered using the static <code class="language-text">IEnumerable&lt;string&gt; Validate(string)</code> method.</p>\n</li>\n</ol>\n<blockquote>\n<p>   Its very important to name the constructor argument <code class="language-text">value</code> as it is significant when the identity type is deserialized.</p>\n</blockquote>\n<p>Here\'s some examples on we can use our newly created <code class="language-text">AccountId</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp">    <span class="token comment">// Uses the default Guid.NewGuid()</span>\n    <span class="token keyword">var</span> accountId <span class="token operator">=</span> AccountId<span class="token punctuation">.</span>New</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp">    <span class="token comment">// Create a namespace, put this in a constant somewhere</span>\n    <span class="token keyword">var</span> emailNamespace <span class="token operator">=</span> Guid<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token string">"769077C6-F84D-46E3-AD2E-828A576AAAF3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// Creates an identity with the value "account-9181a444-af25-567e-a866-c263b6f6119a"</span>\n    <span class="token comment">//useful to use when you want to create Id\'s</span>\n    <span class="token comment">// deterministically from other real world "identifiers"</span>\n    <span class="token keyword">var</span> accountId <span class="token operator">=</span> AccountId<span class="token punctuation">.</span><span class="token function">NewDeterministic</span><span class="token punctuation">(</span>emailNamespace<span class="token punctuation">,</span> <span class="token string">"test@example.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp">    <span class="token comment">// Creates a new identity every time, but an identity when used in e.g.</span>\n    <span class="token comment">// database indexes, minimizes fragmentation</span>\n    <span class="token keyword">var</span> accountId <span class="token operator">=</span> AccountId<span class="token punctuation">.</span><span class="token function">NewComb</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<h1 id="entities"><a href="#entities" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Entities</h1>\n<p>An Entity is an object that has some intrinsic identity, apart from the rest of its state. Even if its properties are the same as another instance of the same type, it remains distinct because of its unique identity. The <code class="language-text">Entity&lt;&gt;</code> In Akkatecture is itself a Value Object however it implements the <code class="language-text">IEntity&lt;Identity&gt;</code> interface, which requires it to have a member called <code class="language-text">Id</code>. Now you can see the relationship between <code class="language-text">Entity&lt;&gt;</code>, <code class="language-text">SingleValueObject&lt;&gt;</code>, and <code class="language-text">Identity&lt;&gt;</code>. A sample Entity running onwards from the Account example above, could be:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Account</span> <span class="token punctuation">:</span> <span class="token class-name">Entity</span><span class="token operator">&lt;</span>AccountId<span class="token operator">></span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token class-name">AccountNumber</span> AccountNumber <span class="token punctuation">{</span><span class="token keyword">get</span><span class="token punctuation">;</span><span class="token punctuation">}</span>\n  <span class="token keyword">public</span> <span class="token function">Account</span><span class="token punctuation">(</span><span class="token class-name">AccountId</span> entityId<span class="token punctuation">,</span> <span class="token class-name">AccountNumber</span> accountNumber<span class="token punctuation">)</span>\n    <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>entityId<span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n      <span class="token comment">//do some model validation, null checks etc.</span>\n      AccountNumber <span class="token operator">=</span> accountNumber<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<blockquote>\n<p>As you can see <code class="language-text">Account</code> has an <code class="language-text">AccountId</code> entity identifier, and is itself an value object because <code class="language-text">Entity&lt;&gt;</code> inherits from <code class="language-text">SingleValueObject&lt;&gt;</code>, and has a ValueObject member <code class="language-text">AccountNumber</code>.</p>\n</blockquote>',timeToRead:4,excerpt:"The basic core primitives of akkatecture are: Value Objects Identities Entities A Value Object is an immutable type that is distinguishable…",frontmatter:{title:"Primitives",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["basic-concepts","akkatecture","csharp","dotnet"]},fields:{slug:"/primitives"}}},pathContext:{slug:"/primitives",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-primitives-4faab940e499b5c95c0c.js.map