"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[48914],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>v});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,v=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(v,l(l({ref:t},p),{},{components:a})):r.createElement(v,l({ref:t},p))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:n,l[1]=c;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},63970:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={},l="RequestManagerConnection",c={unversionedId:"api/s2s/rtt/requestmanagerconnection",id:"api/s2s/rtt/requestmanagerconnection",title:"RequestManagerConnection",description:"Overview",source:"@site/docs/api/4_s2s/rtt/requestmanagerconnection.md",sourceDirName:"api/4_s2s/rtt",slug:"/api/s2s/rtt/requestmanagerconnection",permalink:"/braincloud-apiref/api/s2s/rtt/requestmanagerconnection",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/4_s2s/rtt/requestmanagerconnection.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"RegisterServer",permalink:"/braincloud-apiref/api/s2s/rtt/registerserver"},next:{title:"UpdateStatus",permalink:"/braincloud-apiref/api/s2s/rtt/updatestatus"}},i={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=p("BrowserWindow"),m=p("Tabs"),d=p("TabItem"),v={toc:s};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"requestmanagerconnection"},"RequestManagerConnection"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Request an RTT manager connection."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(u,{mdxType:"BrowserWindow"},(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(d,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"// S2S call: to view example, switch to the Raw tab.\n"))),(0,n.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"// S2S call: to view example, switch to the Raw tab.\n"))),(0,n.kt)(d,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"// S2S call: to view example, switch to the Raw tab.\n"))),(0,n.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// S2S call: to view example, switch to the Raw tab.\n"))),(0,n.kt)(d,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// S2S call: to view example, switch to the Raw tab.\n"))),(0,n.kt)(d,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},"// S2S call: to view example, switch to the Raw tab.\n"))),(0,n.kt)(d,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "rttRegistration",\n    "operation": "REQUEST_MANAGER_CONNECTION",\n    "data": {}\n}\n'))))))}b.isMDXComponent=!0}}]);