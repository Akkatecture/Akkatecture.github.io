webpackJsonp([83401027222320],{425:function(s,n){s.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Getting Started",lesson:1,category:"akkatecture",chapter:1,type:"docs"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"Primitives",lesson:1,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/primitives"}}},{node:{frontmatter:{title:"Walkthrough Introduction",lesson:1,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-introduction"}}},{node:{frontmatter:{title:"Sagas",lesson:1,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/sagas"}}},{node:{frontmatter:{title:"Tips and Tricks",lesson:1,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/tips-and-tricks"}}},{node:{frontmatter:{title:"Aggregates",lesson:2,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/aggregates"}}},{node:{frontmatter:{title:"Your First Aggregate",lesson:2,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate"}}},{node:{frontmatter:{title:"Snapshotting",lesson:2,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/snapshotting"}}},{node:{frontmatter:{title:"Articles",lesson:2,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/articles"}}},{node:{frontmatter:{title:"Events",lesson:3,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/events"}}},{node:{frontmatter:{title:"Your First Commands",lesson:3,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-commands"}}},{node:{frontmatter:{title:"Clustering",lesson:3,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/clustering"}}},{node:{frontmatter:{title:"Videos",lesson:3,category:"akkatecture",chapter:5,type:"docs"},fields:{slug:"/videos"}}},{node:{frontmatter:{title:"Commands",lesson:4,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/commands"}}},{node:{frontmatter:{title:"Your First Events",lesson:4,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-events"}}},{node:{frontmatter:{title:"Production Readiness",lesson:4,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/production-readiness"}}},{node:{frontmatter:{title:"Specifications",lesson:5,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/specifications"}}},{node:{frontmatter:{title:"Your First Specifications",lesson:5,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-specifications"}}},{node:{frontmatter:{title:"Event Upgrading",lesson:5,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/event-upgrading"}}},{node:{frontmatter:{title:"Subscribers",lesson:6,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/subscribers"}}},{node:{frontmatter:{title:"Your First Aggregate Test",lesson:6,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-test"}}},{node:{frontmatter:{title:"Testing Aggregates",lesson:6,category:"akkatecture",chapter:4,type:"docs"},fields:{slug:"/testing-aggregates"}}},{node:{frontmatter:{title:"Scheduled Jobs",lesson:7,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/scheduled-jobs"}}},{node:{frontmatter:{title:"Your First Aggregate Saga",lesson:7,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-aggregate-saga"}}},{node:{frontmatter:{title:"Akka",lesson:8,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/akka"}}},{node:{frontmatter:{title:"Your First Subscribers",lesson:8,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-subscribers"}}},{node:{frontmatter:{title:"Configuration",lesson:9,category:"akkatecture",chapter:2,type:"docs"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Your First Projections",lesson:9,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/your-first-projections"}}},{node:{frontmatter:{title:"Walkthrough Ending",lesson:10,category:"akkatecture",chapter:3,type:"docs"},fields:{slug:"/walkthrough-ending"}}}]},postBySlug:{html:'<p>Akkatecture ships with a model for executing commands known as jobs. These jobs are messages that are persisted and (within reasonable tolerances) will be executed in the future. Jobs are not supposed to be used as an intermediary in situations where real time responsiveness is needed. Jobs are useful for scheduling processes that can tolerate high latencies (eg minutes). Scheduled jobs are suitable for triggering processes at some arbitrary point in time in the future, like sending  non-business critical emails, or scheduling backups.</p>\n<blockquote>\n<p>This is a highly experimental feature at this point as should be regarded as such. The API surface may change drastically as things evolve. Feel free to submit your comments <a href="https://github.com/Lutando/Akkatecture/issues/146">here</a>. All suggestions will be taken seriously.</p>\n</blockquote>\n<h2 id="jobs"><a href="#jobs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Jobs</h2>\n<p>Jobs are just like commands, however unlike commands, they do not target any specific domain entity. Jobs are just messages which are likely to be persisted and scheduled to be published in the future. Since they get persisted, these messages are regarded as invariant, one must be sure to not alter the message structure/schema in code since they will need to be deserialized later, in the same way that aggregate events are invariant. </p>\n<p>For the purposes of demonstration let\'s say that we have an <code class="language-text">EmailCouponJob</code>, it is a job that models the need to send out coupon codes to customers. It might look something like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token punctuation">[</span><span class="token class-name">JobName</span><span class="token punctuation">(</span><span class="token string">"email-coupon-code-job"</span><span class="token punctuation">)</span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EmailCouponJob</span> <span class="token punctuation">:</span> <span class="token class-name">IJob</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">string</span> Address <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token class-name">CouponCode</span> Code <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token function">EmailCouponJob</span><span class="token punctuation">(</span>\n        <span class="token keyword">string</span> address<span class="token punctuation">,</span>\n        <span class="token class-name">CouponCode</span> code<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Address <span class="token operator">=</span> address<span class="token punctuation">;</span>\n        Code <span class="token operator">=</span> code<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>We also need to create a <code class="language-text">IJobId</code> this is important later on</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EmailJobId</span> <span class="token punctuation">:</span> <span class="token class-name">Identity</span><span class="token operator">&lt;</span>EmailJobId<span class="token operator">></span><span class="token punctuation">,</span> IJobId\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token function">EmailJobId</span><span class="token punctuation">(</span><span class="token keyword">string</span> <span class="token keyword">value</span><span class="token punctuation">)</span> \n        <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The <code class="language-text">IJobId</code> is the unique identifier for a particular scheduled job. Cancelling a scheduled job is only achievable if you have its jobId on hand.</p>\n<h2 id="job-runners"><a href="#job-runners" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Job Runners</h2>\n<p>Job runners are the actors which execute the jobs. Job runners receive the job messages from the job scheduler and executes them. The job runners typically have no concept of scheduling messages, as their one purpose is to handle the job messages. JobRunners would normally inherit from <code class="language-text">JobRunner&lt;,&gt;</code> so that they can consume the <code class="language-text">IRun&lt;&gt;</code> interface to signify what messages/jobs that the runner can handle.</p>\n<p>A job runner might look like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EmailCouponJobRunner</span> <span class="token punctuation">:</span> <span class="token class-name">JobRunner</span><span class="token operator">&lt;</span>EmailCouponJob<span class="token punctuation">,</span> EmailJobId<span class="token operator">></span><span class="token punctuation">,</span>\n    IRun<span class="token operator">&lt;</span>EmailCouponJob<span class="token operator">></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">bool</span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token class-name">EmailCouponJob</span> job<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token function">SendCouponEmail</span><span class="token punctuation">(</span>job<span class="token punctuation">.</span>Address<span class="token punctuation">,</span> job<span class="token punctuation">.</span>Code<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token keyword">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<blockquote>\n<p>This JobRunner is pretty stateless, but jobs do not have to be stateless.</p>\n</blockquote>\n<h2 id="job-schedulers"><a href="#job-schedulers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Job Schedulers</h2>\n<p>Scheduling is the method by which work is assigned to resources that complete the work. In Akkatecture, the job scheduler is the actor which decides when to trigger work to resources that can handle the work (the job runner).Under the hood, job schedulers are persistent actors which persist messages to a journal and then uses this journal as its primary source of state just like in any other event sourced system. </p>\n<p>The job scheduler for the email coupon job can be described as follows</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EmailCouponJobScheduler</span><span class="token operator">&lt;</span>EmailCouponJobScheduler<span class="token punctuation">,</span> EmailCouponJob<span class="token punctuation">,</span> EmailJobId<span class="token operator">></span>\n<span class="token punctuation">{</span><span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The job scheduler polls itself to see if it should trigger the next job as defined in the frequency on on its configuration found <a href="https://github.com/Lutando/Akkatecture/blob/0a7c4d8b4d14f982ccbe78239849d4d0747079ff/src/Akkatecture/Configuration/reference.conf#L118">here</a>.</p>\n<h2 id="job-managers"><a href="#job-managers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Job Managers</h2>\n<p><code class="language-text">JobManager</code>s are the glue between the scheduler and the runner. Job manager supervises the runner and the scheduler but also coordinates messages between them. The job manager is the entry point to the job system, all messages that come from outside the job manager would typically be messages to either schedule jobs or to cancel jobs.</p>\n<p>Instantiating a job manager looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">var</span> jobManager <span class="token operator">=</span> \n    Props<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>\n        <span class="token keyword">new</span> <span class="token generic-method"><span class="token function">JobManager</span><span class="token punctuation">&lt;</span><span class="token class-name">TestJobScheduler</span><span class="token punctuation">,</span> <span class="token class-name">TestJobRunner</span><span class="token punctuation">,</span> <span class="token class-name">TestJob</span><span class="token punctuation">,</span> <span class="token class-name">TestJobId</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>\n            <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">new</span> <span class="token class-name">EmailCouponJobScheduler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">new</span> <span class="token class-name">EmailCouponJobRunner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="scheduling-jobs"><a href="#scheduling-jobs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Scheduling Jobs</h2>\n<p>There are three ways to schedule jobs, <code class="language-text">ScheduleOnce</code>, <code class="language-text">ScheduleRepeatedly</code>, and <code class="language-text">ScheduleCron</code>. All of the schedule methods allow you to specify when the trigger should start. In the case of <code class="language-text">ScheduleOnce</code> this is the actual trigger time. <code class="language-text">ScheduleRepeatedly</code> allows you to schedule a job to triger in the future and then to repeat itself every interval of time. <code class="language-text">ScheduleCron</code> allows you to schedule a job to trigger in the future and then to repeat itself everytime the cron expression yields a positive trigger.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">var</span> jobId <span class="token operator">=</span> EmailJobId<span class="token punctuation">.</span>New<span class="token punctuation">;</span>\n<span class="token keyword">var</span> emailCouponJob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EmailCouponJob</span><span class="token punctuation">(</span><span class="token string">"foo@bar.com"</span><span class="token punctuation">,</span> CouponCode<span class="token punctuation">.</span>NewOneTimeCoupon<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> when <span class="token operator">=</span> DateTime<span class="token punctuation">.</span>UtcNow<span class="token punctuation">.</span><span class="token function">AddDays</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//Scheduling a one time job for 1 week from now</span>\n<span class="token keyword">var</span> oneTimeJob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token generic-method"><span class="token function">Schedule</span><span class="token punctuation">&lt;</span><span class="token class-name">EmailCouponJob</span><span class="token punctuation">,</span> <span class="token class-name">EmailJobId</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>jobId<span class="token punctuation">,</span> emailCouponJob<span class="token punctuation">,</span> when<span class="token punctuation">)</span><span class="token punctuation">;</span>\njobManager<span class="token punctuation">.</span><span class="token function">Tell</span><span class="token punctuation">(</span>oneTimeJob<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//Scheduling a repeated job for 1 week from now </span>\n<span class="token comment">//and then every 2 weeks repeatedly from then on</span>\n<span class="token keyword">var</span> interval <span class="token operator">=</span> TimeSpan<span class="token punctuation">.</span><span class="token function">FromDays</span><span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> repeatedJob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token generic-method"><span class="token function">ScheduleRepeatedly</span><span class="token punctuation">&lt;</span><span class="token class-name">EmailCouponJob</span><span class="token punctuation">,</span> <span class="token class-name">EmailJobId</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>jobId<span class="token punctuation">,</span> emailCouponJob<span class="token punctuation">,</span> interval<span class="token punctuation">,</span> when<span class="token punctuation">)</span><span class="token punctuation">;</span>\njobManager<span class="token punctuation">.</span><span class="token function">Tell</span><span class="token punctuation">(</span>oneTimeJob<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//Scheduling a cron job for 1 week from now</span>\n<span class="token comment">// and then the first of every month at midnight</span>\n<span class="token keyword">var</span> cronExpression <span class="token operator">=</span> <span class="token string">"0 0 1 * *"</span><span class="token punctuation">;</span> <span class="token comment">// cron expression for every first day of the month at midnight</span>\n<span class="token keyword">var</span> cronJob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token generic-method"><span class="token function">ScheduleCron</span><span class="token punctuation">&lt;</span><span class="token class-name">EmailCouponJob</span><span class="token punctuation">,</span> <span class="token class-name">EmailJobId</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>jobId<span class="token punctuation">,</span> emailCouponJob<span class="token punctuation">,</span> cronExpression<span class="token punctuation">,</span> when<span class="token punctuation">)</span><span class="token punctuation">;</span>\njobManager<span class="token punctuation">.</span><span class="token function">Tell</span><span class="token punctuation">(</span>cronJob<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>If you look at the above schedule jobs, they all trigger 7 days from <code class="language-text">DateTime.UtcNow</code>. The difference between the schedule types here is that the <code class="language-text">Schedule&lt;,&gt;</code> job will finish after it has triggered for the first time. The <code class="language-text">ScheduleRepeatedly&lt;,&gt;</code> job will not finish after it has been triggered for the first time, infact, it will be scheduled to be triggered indefinitely after every <code class="language-text">interval</code>. In a similar way to the reapeated schedule, the <code class="language-text">ScheduleCron&lt;,&gt;</code> job will be scheduled to trigger in the future and then will trigger indefinitely everytime the cron expression yields a "trigger next" time.</p>\n<p>All jobs can be cancelled by sending a <code class="language-text">Cancel&lt;,&gt;(jobId)</code> message to the job manager, with the correlating jobId.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">var</span> cancelJob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token generic-method"><span class="token function">Cancel</span><span class="token punctuation">&lt;</span><span class="token class-name">EmailCouponJob</span><span class="token punctuation">,</span> <span class="token class-name">EmailJobId</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>jobId<span class="token punctuation">)</span><span class="token punctuation">;</span>\njobManager<span class="token punctuation">.</span><span class="token function">Tell</span><span class="token punctuation">(</span>cancelJob<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="cron-expressions"><a href="#cron-expressions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cron Expressions</h3>\n<p>Akkatecture takes on a dependency from <a href="https://github.com/HangfireIO/Cronos">Hangfire\'s Cronos</a> library. This means that most practical cron expressions are accepted. Take a lot at the libraries expression notation so that you may use them here as well.</p>\n<h3 id="testing-jobs-and-time"><a href="#testing-jobs-and-time" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Testing Jobs (And Time)</h3>\n<p>If you look at <a href="https://petabridge.com/blog/how-to-unit-test-akkadotnet-actors-akka-testkit/">this</a> blog post on how to test for time, you can see how one might want to test jobs. To set up your TestKit appropriately for this, one hase to make sure that you have configured your TestKit\'s configuration to use the <a href="http://api.getakka.net/docs/stable/html/64701727.htm"><code class="language-text">TestScheduler</code></a>. This scheduler allows you to manipulate time in your unit tests by using <code class="language-text">Advance(...)</code> and <code class="language-text">AdvanceTo(...)</code> methods.</p>\n<p>Your job test might look like this where the <code class="language-text">BackupJob</code> emits a <code class="language-text">BackupJobDone</code> when it has finished its work.</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token comment">//tests/JobTests</span>\n<span class="token punctuation">[</span><span class="token class-name">Fact</span><span class="token punctuation">]</span>\n<span class="token punctuation">[</span><span class="token class-name">Category</span><span class="token punctuation">(</span><span class="token string">"JobTests"</span><span class="token punctuation">)</span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">EveryTwoWeeks_BackupJob_IsRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">var</span> scheduler <span class="token operator">=</span> <span class="token punctuation">(</span>TestScheduler<span class="token punctuation">)</span> Sys<span class="token punctuation">.</span>Scheduler<span class="token punctuation">;</span>\n    <span class="token keyword">var</span> backupJob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BackupJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> start <span class="token operator">=</span> DateTime<span class="token punctuation">.</span>UtcNow<span class="token punctuation">.</span><span class="token function">AddDays</span><span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> interval <span class="token operator">=</span> TimeSpan<span class="token punctuation">.</span><span class="token function">FromDays</span><span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> jobManager <span class="token operator">=</span> <span class="token comment">/* Omitted for brevity */</span> \n\n    <span class="token keyword">var</span> scheduleRepeatedly <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token generic-method"><span class="token function">ScheduleRepeatedly</span><span class="token punctuation">&lt;</span><span class="token class-name">BackupJob</span><span class="token punctuation">,</span> <span class="token class-name">BackupJobId</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>\n        jobId<span class="token punctuation">,</span>\n        backupJob<span class="token punctuation">,</span>\n        interval<span class="token punctuation">,</span>\n        when<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    jobManager<span class="token punctuation">.</span><span class="token function">Tell</span><span class="token punctuation">(</span>scheduleRepeatedly<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    scheduler<span class="token punctuation">.</span><span class="token function">Advance</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span> <span class="token comment">//advance by 2 weeks</span>\n    <span class="token generic-method"><span class="token function">ExpectMsg</span><span class="token punctuation">&lt;</span><span class="token class-name">BackupJobDone</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    scheduler<span class="token punctuation">.</span><span class="token function">Advance</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span> <span class="token comment">//advance by 2 weeks</span>\n    <span class="token generic-method"><span class="token function">ExpectMsg</span><span class="token punctuation">&lt;</span><span class="token class-name">BackupJobDone</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>As you can see we can tell the TestKit to advance time to our bidding in order to test how the job scheduler and runner will react. More examples can be found in the unit test project of Akkatecture.</p>\n<blockquote>\n<p>Jobs can be used for both domain and infrastructural needs. They can be used to defer a command to an aggregate root or to just trigger some infrastructural requirement.</p>\n</blockquote>\n<p><a href="/docs/akka">Next, Akka →</a></p>',
timeToRead:6,excerpt:"Akkatecture ships with a model for executing commands known as jobs. These jobs are messages that are persisted and (within reasonable…",frontmatter:{title:"Scheduled Jobs",cover:"https://unsplash.it/400/300/?random?BoldMage",date:"01/07/2018",category:"akkatecture",tags:["basic-concepts","akkatecture","csharp","dotnet"]},fields:{slug:"/scheduled-jobs"}}},pathContext:{slug:"/scheduled-jobs",category:"akkatecture"}}}});
//# sourceMappingURL=path---docs-scheduled-jobs-d422f5098efd8183c1b9.js.map