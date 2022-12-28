"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[1179],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var r=a(67294);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,s=function(t,e){if(null==t)return{};var a,r,s={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(s[a]=t[a]);return s}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}var i=r.createContext({}),p=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):n(n({},e),t)),a},c=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(t,e){var a=t.components,s=t.mdxType,l=t.originalType,i=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=p(a),b=s,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||l;return a?r.createElement(m,n(n({ref:e},c),{},{components:a})):r.createElement(m,n({ref:e},c))}));function m(t,e){var a=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var l=a.length,n=new Array(l);n[0]=b;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[d]="string"==typeof t?t:s,n[1]=o;for(var p=2;p<l;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},93546:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>n,default:()=>b,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(87462),s=(a(67294),a(3905));const l={},n="Global Statistics",o={unversionedId:"api/s2s/globalstats/index",id:"api/s2s/globalstats/index",title:"Global Statistics",description:"Overview",source:"@site/docs/api/4_s2s/globalstats/index.md",sourceDirName:"api/4_s2s/globalstats",slug:"/api/s2s/globalstats/",permalink:"/braincloud-apiref/api/s2s/globalstats/",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/4_s2s/globalstats/index.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysRenameFolder",permalink:"/braincloud-apiref/api/s2s/globalfile/sysrenamefolder"},next:{title:"IncrementGlobalStats",permalink:"/braincloud-apiref/api/s2s/globalstats/incrementglobalstats"}},i={},p=[{value:"Overview",id:"overview",level:2},{value:"API Summary",id:"api-summary",level:3},{value:"Global Statistics",id:"global-statistics-1",level:3}],c=(d="DocCardList",function(t){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)});var d;const u={toc:p};function b(t){let{components:e,...a}=t;return(0,s.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"global-statistics"},"Global Statistics"),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"The Global Statistics service allows you to retrieve and update your app's predefined statistics defined on the\n",(0,s.kt)("a",{parentName:"p",href:"https://portal.braincloudservers.com/admin/dashboard#/development/stats-game"},"Global Statistics")," page of the brainCloud portal."),(0,s.kt)("p",null,"Global Statistics must be pre-defined from the ",(0,s.kt)("a",{parentName:"p",href:"https://portal.braincloudservers.com/admin/dashboard#/development/stats-game"},"Statistics Rules - Global Statistics page"),"\nof the brainCloud portal.  If instead you need to create them dynamically at runtime, you can enable the Generate App Statistic Rule Enabled setting on the\n",(0,s.kt)("a",{parentName:"p",href:"https://portal.braincloudservers.com/admin/dashboard#/development/core-settings-advanced-settings"},"Advanced Settings page")," of your app in the brainCloud portal."),(0,s.kt)("p",null,"Global (or App) Statistics are similar to User Stats, except that they are stored centrally across all of an app's users."),(0,s.kt)("h3",{id:"api-summary"},"API Summary"),(0,s.kt)("h3",{id:"global-statistics-1"},"Global Statistics"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/api/s2s/globalstats/readallglobalstats"},"ReadAllGlobalStats")," - Returns all of the global statistics."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/api/s2s/globalstats/readglobalstatsforcategory"},"ReadGlobalStatsForCategory")," - Reads a subset of global statistics belonging to the specified category (all if omitted)."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/api/s2s/globalstats/readglobalstatssubset"},"ReadGlobalStatsSubset")," - Reads a subset of global statistics as defined by the input JSON."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/api/s2s/globalstats/incrementglobalstats"},"IncrementGlobalStats")," - Atomically increment (or decrement) global statistics."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/api/s2s/globalstats/processstatistics"},"ProcessStatistics")," - Apply statistics grammar to a partial set of statistics.")),(0,s.kt)(c,{mdxType:"DocCardList"}))}b.isMDXComponent=!0}}]);