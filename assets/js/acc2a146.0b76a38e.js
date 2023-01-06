"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[60455],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:1,title:"Introduction",date:"2014-09-09"},o=void 0,l={unversionedId:"learn/introduction/index",id:"learn/introduction/index",title:"Introduction",description:"brainCloud Stack",source:"@site/docs/learn/0_introduction/index.md",sourceDirName:"learn/0_introduction",slug:"/learn/introduction/",permalink:"/braincloud-apiref/learn/introduction/",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/learn/0_introduction/index.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672864123,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction",date:"2014-09-09"},sidebar:"learnSidebar",next:{title:"brainCloud API",permalink:"/braincloud-apiref/learn/introduction/braincloud-api/"}},s={},p=[{value:"What is brainCloud?",id:"what-is-braincloud",level:2},{value:"SDK libraries",id:"sdk-libraries",level:2},{value:"Engine Support",id:"engine-support",level:2},{value:"Understanding the APIs",id:"understanding-the-apis",level:2}],d=(u="DocCardList",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const c={toc:p};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(41361).Z},(0,a.kt)("img",{alt:"brainCloud Stack",src:n(8115).Z,width:"1024",height:"768"}))),(0,a.kt)("h2",{id:"what-is-braincloud"},"What is brainCloud?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"brainCloud"),"\xa0is a ready-made ",(0,a.kt)("strong",{parentName:"p"},"back-end platform"),"\xa0for the development of feature-rich\xa0",(0,a.kt)("strong",{parentName:"p"},"mobile+social games"),"\xa0and\xa0",(0,a.kt)("strong",{parentName:"p"},"gamified apps"),". brainCloud provides the features you need - along with\xa0",(0,a.kt)("strong",{parentName:"p"},"comprehensive tools"),"\xa0to support your team during development, testing, and user support."),(0,a.kt)("p",null,"brainCloud consists of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cloud Service")," - an advanced,\xa0Backend-as-a-Service (BaaS)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Client Libraries")," - local client libraries (SDKs)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Design\xa0Portal")," - a portal that allows you to design and debug your apps")),(0,a.kt)("h2",{id:"sdk-libraries"},"SDK libraries"),(0,a.kt)("p",null,"There are custom brainCloud libraries for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"C#")," - for Unity and .Net developers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"C++")," - for\xa0platform-native\xa0apps,\xa0on\xa0iOS Android,\xa0Windows,\xa0etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"JS")," - for\xa0web-based\xa0JavaScript\xa0apps"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"AS3")," - for\xa0Flash-based\xa0ActionScript\xa0apps"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Java")," - for\xa0Java-based\xa0and native\xa0Android\xa0apps"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Objective-C")," - for\xa0native Mac and iOS\xa0apps")),(0,a.kt)("h2",{id:"engine-support"},"Engine Support"),(0,a.kt)("p",null,"brainCloud\xa0supports the most popular gaming engines, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Unity")," - brainCloud provides C# libraries, examples and tutorials for integration with Unity"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Unreal")," - we have support for the latest versions of the Unreal Engine"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cocos2d-x")," - Cocos is supported natively using the C++ libraries")),(0,a.kt)("h2",{id:"understanding-the-apis"},"Understanding the APIs"),(0,a.kt)("p",null,"brainCloud has a very broad feature-set - you can use as much or as little of it as you like."),(0,a.kt)("p",null,"This section gives some background on how the brainCloud APIs work, in terms of concepts and structure. The details on API usage can be found in the ",(0,a.kt)("a",{parentName:"p",href:"/learn/api-reference/"},"API Reference")," section."),(0,a.kt)("p",null,"This introduction is organized into the following sections:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/learn/introduction/design-portal/"},"Design\xa0Portal"))," -  getting started in the system"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/learn/introduction/braincloud-api/"},"brainCloud API"))," -  connecting your app to brainCloud"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/learn/introduction/braincloud-rtt/"},"brainCloud RTT"))," -  listen and react to events in real-time"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/learn/introduction/profiles-and-identity/"},"Profiles and Identity"))," - how brainCloud identifies\xa0end-users"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/learn/introduction/cloud-data/"},"Cloud Data"))," - overview of the brainCloud data APIs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/learn/introduction/gamification/"},"Gamification"))," - discussion of the brainCloud gamification features"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/learn/introduction/multiplayer/"},"Multiplayer"))," - overview of brainCloud's multiplayer capabilities"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/learn/introduction/notifications/"},"Push Notifications"))," - sending push notifications (programmatically) in brainCloud"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/learn/introduction/currency-and-payments/"},"Currency, Payments, and Promotions"))," - dealing with virtual currencies, products, pricing and promotions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/learn/introduction/leaderboards-and-tournaments/"},"Leaderboards and Tournaments"))," - discussion of leaderboards, pacers, and tournaments"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/learn/introduction/cloud-code/"},"Cloud Code"))," - writing your own cloud code")),(0,a.kt)(d,{mdxType:"DocCardList"}))}m.isMDXComponent=!0},41361:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/BC_TechStack_05-d24f8117b8a5b0beed3932bd07fa49da.png"},8115:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/BC_TechStack_05-d24f8117b8a5b0beed3932bd07fa49da.png"}}]);