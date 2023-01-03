"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[92054],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>b});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=r.createContext({}),s=function(e){var a=r.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=s(e.components);return r.createElement(d.Provider,{value:a},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(t),m=n,b=c["".concat(d,".").concat(m)]||c[m]||p[m]||o;return t?r.createElement(b,l(l({ref:a},u),{},{components:t})):r.createElement(b,l({ref:a},u))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},32814:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(87462),n=(t(67294),t(3905));const o={title:"Leaderboards and Tournaments",date:"2014-09-08"},l=void 0,i={unversionedId:"learn/introduction/leaderboards-and-tournaments/index",id:"learn/introduction/leaderboards-and-tournaments/index",title:"Leaderboards and Tournaments",description:"Leaderboards",source:"@site/docs/learn/0_introduction/leaderboards-and-tournaments/index.md",sourceDirName:"learn/0_introduction/leaderboards-and-tournaments",slug:"/learn/introduction/leaderboards-and-tournaments/",permalink:"/braincloud-apiref/learn/introduction/leaderboards-and-tournaments/",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/learn/0_introduction/leaderboards-and-tournaments/index.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672634083,formattedLastUpdatedAt:"Jan 2, 2023",frontMatter:{title:"Leaderboards and Tournaments",date:"2014-09-08"},sidebar:"learnSidebar",previous:{title:"Gamification",permalink:"/braincloud-apiref/learn/introduction/gamification/"},next:{title:"Multiplayer",permalink:"/braincloud-apiref/learn/introduction/multiplayer/"}},d={},s=[{value:"Leaderboards",id:"leaderboards",level:2},{value:"Tournaments",id:"tournaments",level:2}],u={toc:s};function c(e){let{components:a,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"leaderboards"},"Leaderboards"),(0,n.kt)("p",null,"brainCloud provides support for\xa0both ",(0,n.kt)("em",{parentName:"p"},"global")," and ",(0,n.kt)("em",{parentName:"p"},"social")," leaderboards."),(0,n.kt)("p",null,"brainCloud leaderboards support the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Games can have an unlimited number of leaderboards"),(0,n.kt)("li",{parentName:"ul"},"Single score entry for both global and social leaderboards"),(0,n.kt)("li",{parentName:"ul"},'Supported score types include "High Value", "Low Value", "Cumulative" and "Last Entry"'),(0,n.kt)("li",{parentName:"ul"},'Leaderboard entries can include additional "developer-defined" data'),(0,n.kt)("li",{parentName:"ul"},"Leaderboards can be configured to automatically reset daily, weekly, monthly or yearly"),(0,n.kt)("li",{parentName:"ul"},"brainCloud provides rich\xa0APIs for dynamically creating leaderboards, retrieving data for social maps, and more")),(0,n.kt)("p",null,'brainCloud also supports Pacers to make leaderboards more compelling for players that are not connected to social networks. \xa0Pacers are "canned" score entries that are automatically populated on a leaderboard with set score values. \xa0These can be used to give the player a crew of game-provided avatars to compete against.'),(0,n.kt)("p",null,"For more information, check out the ",(0,n.kt)("a",{parentName:"p",href:"/api/capi/leaderboard"},"Leaderboard API"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:t(84839).Z},(0,n.kt)("img",{alt:"brainCloud",src:t(28715).Z,width:"1596",height:"1000"}))),(0,n.kt)("h2",{id:"tournaments"},"Tournaments"),(0,n.kt)("p",null,"brainCloud\u2019s new ",(0,n.kt)("em",{parentName:"p"},"Global Tournaments")," feature is an entirely new system designed to amplify player engagement in your games."),(0,n.kt)("p",null,"Global Tournaments are suitable for any game where competition centers around leaderboards. In fact, in their simplest form, global tournaments can be thought of simply as prize rules added to a leaderboard."),(0,n.kt)("p",null,"The power of brainCloud\u2019s tournament system comes from how flexible they are, coupled with how much they do for you. Features include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Free or Paid \u2013 brainCloud collects the entry fee for you"),(0,n.kt)("li",{parentName:"ul"},"Flexible Prizes \u2013 award any combination of currencies, XP, stats and achievements \u2013 brainCloud handles it all"),(0,n.kt)("li",{parentName:"ul"},"Tournament Cycles \u2013 set your tournament to daily, weekly, monthly or an arbitrary number of days"),(0,n.kt)("li",{parentName:"ul"},"Tournament Phases \u2013 optionally have an exclusive registration vs. play phase \u2013 and set up downtime between tournaments"),(0,n.kt)("li",{parentName:"ul"},"Notifications \u2013 both Push and Email-based notifications \u2013 automatically sent by brainCloud throughout the tournament cycle"),(0,n.kt)("li",{parentName:"ul"},"Portal Support \u2013 configure tournament templates and attach them to leaderboards. And then view tournament results straight from the Leaderboard monitoring screens"),(0,n.kt)("li",{parentName:"ul"},"New Tournaments API \u2013 for fine control of displaying tournament information, handling player enrollment, recording player scores, and claiming awarded prizes"),(0,n.kt)("li",{parentName:"ul"},"And of course, you can use brainCloud Global Tournament features as building blocks for more advanced tournament variations \u2013 for example, tournaments brackets.")),(0,n.kt)("p",null,"For more information on Global Tournaments,\xa0check out our ",(0,n.kt)("a",{parentName:"p",href:"/api/capi/tournament"},"Tournament API"),"."))}c.isMDXComponent=!0},84839:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/files/brainCloud_dashboard_lbConfig-2cd947fd58504962a8286702ceb9ed1d.jpg"},28715:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/brainCloud_dashboard_lbConfig-2cd947fd58504962a8286702ceb9ed1d.jpg"}}]);