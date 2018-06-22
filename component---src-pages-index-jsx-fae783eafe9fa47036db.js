webpackJsonp([0xc23565d713b7],{220:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){return e.raw=t,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=r(["\n  border: 1px solid ",";\n  border-radius: 3px;  \n  padding-left: 0.5em;  \n  padding-right: 0.5em;  \n  padding-top: 0.5em;\n  padding-bottom: 0.5em;\n  font-size: 2rem;\n  margin-bottom: 0.25em;\n  margin-right: 0.25em;  \n  margin-top: 0;\n  color: ",";\n  display: inline-block;\n  transition: all .3s ease;\n  height: 5rem;  \n  &:hover {\n    color: ",";\n    background: ",";\n  }  \n"],["\n  border: 1px solid ",";\n  border-radius: 3px;  \n  padding-left: 0.5em;  \n  padding-right: 0.5em;  \n  padding-top: 0.5em;\n  padding-bottom: 0.5em;\n  font-size: 2rem;\n  margin-bottom: 0.25em;\n  margin-right: 0.25em;  \n  margin-top: 0;\n  color: ",";\n  display: inline-block;\n  transition: all .3s ease;\n  height: 5rem;  \n  &:hover {\n    color: ",";\n    background: ",";\n  }  \n"]),d=n(3),c=a(d),s=n(16),f=a(s),p=n(22),m=a(p),g=function(e){function t(){return i(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.children;return c.default.createElement(f.default,{style:{border:"none"},to:this.props.to},c.default.createElement(h,null,e))},t}(d.Component);t.default=g;var h=m.default.div(u,function(e){return e.theme.brand},function(e){return e.theme.brand},function(e){return e.theme.accent},function(e){return e.theme.brand});e.exports=t.default},227:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){return e.raw=t,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=r(["\n  list-style-type: '✔ ';       \n  li { \n    padding-right: 25px;\n  }\n"],["\n  list-style-type: '✔ ';       \n  li { \n    padding-right: 25px;\n  }\n"]),d=r(["\n  padding: ",";  \n  background: ",";    \n"],["\n  padding: ",";  \n  background: ",";    \n"]),c=r(["\npadding: ",";  \npadding-bottom: 16rem;\n"],["\npadding: ",";  \npadding-bottom: 16rem;\n"]),s=r(["\nmargin: 0 auto;\nmax-width: ",";\ncolor:  ",";\n"],["\nmargin: 0 auto;\nmax-width: ",";\ncolor:  ",";\n"]),f=r(["\nmargin: 0 auto;\nmax-width: ",";\n"],["\nmargin: 0 auto;\nmax-width: ",";\n"]),p=n(3),m=a(p),g=n(26),h=a(g),b=n(22),y=a(b),E=n(16),k=(a(E),n(60)),w=a(k),v=n(24),x=a(v),_=n(59),T=a(_),j=n(220),A=a(j),O=function(e){function t(){return i(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return m.default.createElement("div",{className:"index-container"},m.default.createElement(h.default,{title:x.default.siteTitle}),m.default.createElement(w.default,{postEdges:e}),m.default.createElement("main",{style:{display:"flex",flexDirection:"column"}},m.default.createElement("span",{style:{flex:1,minHeight:"65vh"}},m.default.createElement(T.default,{siteTitle:x.default.siteTitle,siteDescription:x.default.siteDescription,location:this.props.location,logo:x.default.siteLogo})),m.default.createElement(C,null,m.default.createElement(P,null,m.default.createElement("h2",null,"Akkatecture is a CQRS/ES toolkit for Akka.NET"),m.default.createElement("p",null,"With the notion of distributed computing becoming commonplace, so do our business domains need to become distributed."),m.default.createElement("p",null,"Akkatecture, built ontop of Akka.NET, and inspired by EventFlow, aims to make your business modelling easy, using actors:"),m.default.createElement(S,null,m.default.createElement("li",null,"Based purely on fire and forget semantics making it reactive."),m.default.createElement("li",null,"Event sourced, giving you audit trails and long term business value."),m.default.createElement("li",null,"Highly configurable and extensible."),m.default.createElement("li",null,"Scales well backed with Akka.NET's clustering mechanism."),m.default.createElement("li",null,"Sagas give you the ability to craft long running persistent processes easily.")),m.default.createElement("p",null,"Akkatecture treats event sourcing as a fundamental principle making it a great canditate to use in conjunction with long running projects"),m.default.createElement("p",null,"Leveraging Akka.NET's well-thought out architectural implementations, Akkatecture too enjoys great levels of extensibility and configurability for you to make a resilient, distributed application"))),m.default.createElement(N,null,m.default.createElement(R,null,m.default.createElement("h2",null,"Getting Started"),m.default.createElement("p",null,"Akkatecture is written in C# .NET Core targeting the netstandard 2.0 framework, which means that for any greenfield project, this may be a good option for you to consider."),m.default.createElement("p",null,"If you are familiar with domain driven design, CQRS, and event sourcing, learning Akkatecture will be a breaze for you to pick up."),m.default.createElement("div",null,m.default.createElement(A.default,{to:"/lesson/javascript/aggregates"}," GET STARTED"))))))},t}(m.default.Component);t.default=O;var S=y.default.ul(u),C=y.default.div(d,function(e){return e.theme.sitePadding},function(e){return e.theme.brand}),N=y.default.div(c,function(e){return e.theme.sitePadding}),P=y.default.div(s,function(e){return e.theme.contentWidthLaptop},function(e){return e.theme.accent}),R=y.default.div(f,function(e){return e.theme.contentWidthLaptop});t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-jsx-fae783eafe9fa47036db.js.map