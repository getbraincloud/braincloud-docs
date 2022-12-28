"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[70974],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},b="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=p(a),d=l,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||n;return a?r.createElement(m,c(c({ref:t},s),{},{components:a})):r.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,c=new Array(n);c[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[b]="string"==typeof e?e:l,c[1]=o;for(var p=2;p<n;p++)c[p]=a[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},87275:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>k,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var r=a(87462),l=(a(67294),a(3905));const n={},c="RegisterRTTLobbyCallback",o={unversionedId:"api/capi/rtt/registerrttlobbycallback",id:"api/capi/rtt/registerrttlobbycallback",title:"RegisterRTTLobbyCallback",description:"Overview",source:"@site/docs/api/2_capi/rtt/registerrttlobbycallback.md",sourceDirName:"api/2_capi/rtt",slug:"/api/capi/rtt/registerrttlobbycallback",permalink:"/braincloud-apiref/api/capi/rtt/registerrttlobbycallback",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/rtt/registerrttlobbycallback.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"RegisterRTTEventCallback",permalink:"/braincloud-apiref/api/capi/rtt/registerrtteventcallback"},next:{title:"RegisterRTTMessagingCallback",permalink:"/braincloud-apiref/api/capi/rtt/registerrttmessagingcallback"}},i={},p=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},b=s("BrowserWindow"),u=s("Tabs"),d=s("TabItem"),m={toc:p};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"registerrttlobbycallback"},"RegisterRTTLobbyCallback"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Registers a callback for RTT Lobby updates."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(b,{mdxType:"BrowserWindow"},(0,l.kt)(u,{mdxType:"Tabs"},(0,l.kt)(d,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"RTTCallback rttCallback = response =>\n{\n   Debug.Log(response);\n};\n_bc.RTTService.RegisterRTTLobbyCallback(rttCallback);\n"))),(0,l.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"_bc.RTTService.registerRTTLobbyCallback(rttCallback);\n"))),(0,l.kt)(d,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"Coming soon!\n"))),(0,l.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"_bc.RTTService.registerRTTLobbyCallback(rttCallback);\n"))),(0,l.kt)(d,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"_bc.rttService.registerRTTLobbyCallback(rttCallback);\n"))),(0,l.kt)(d,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))),(0,l.kt)(d,{value:"r",label:"Raw",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))))),(0,l.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rttCallback"),(0,l.kt)("td",{parentName:"tr",align:null},"The RTT Chat callback handler.")))))}k.isMDXComponent=!0}}]);