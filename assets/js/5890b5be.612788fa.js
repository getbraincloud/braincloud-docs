"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[26124],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),v=n,b=u["".concat(c,".").concat(v)]||u[v]||d[v]||o;return r?a.createElement(b,i(i({ref:t},s),{},{components:r})):a.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=v;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},54629:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={},i="GetEventServiceProxy",p={unversionedId:"api/s2s/abridge/geteventserviceproxy",id:"api/s2s/abridge/geteventserviceproxy",title:"GetEventServiceProxy",description:"Overview",source:"@site/docs/api/4_s2s/abridge/geteventserviceproxy.md",sourceDirName:"api/4_s2s/abridge",slug:"/api/s2s/abridge/geteventserviceproxy",permalink:"/braincloud-apiref/api/s2s/abridge/geteventserviceproxy",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/4_s2s/abridge/geteventserviceproxy.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"GetCustomEntityServiceProxy",permalink:"/braincloud-apiref/api/s2s/abridge/getcustomentityserviceproxy"},next:{title:"GetGlobalProperty",permalink:"/braincloud-apiref/api/s2s/abridge/getglobalproperty"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=s("BrowserWindow"),d=s("Tabs"),v=s("TabItem"),b={toc:l};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"geteventserviceproxy"},"GetEventServiceProxy"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Retrieves a S2S EventService proxy object."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(u,{mdxType:"BrowserWindow"},(0,n.kt)(d,{mdxType:"Tabs"},(0,n.kt)(v,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"//Switch to CC tab\n"))),(0,n.kt)(v,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"//Switch to CC tab\n"))),(0,n.kt)(v,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"//Switch to CC tab\n"))),(0,n.kt)(v,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"//Switch to CC tab\n"))),(0,n.kt)(v,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"//Switch to CC tab\n"))),(0,n.kt)(v,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},"var proxy = bridge.getEventServiceProxy();\n"))),(0,n.kt)(v,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},"var proxy = bridge.getEventServiceProxy();\n"))))))}m.isMDXComponent=!0}}]);