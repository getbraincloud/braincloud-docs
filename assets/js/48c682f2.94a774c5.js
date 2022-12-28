"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[63396],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(r),s=a,v=m["".concat(c,".").concat(s)]||m[s]||u[s]||o;return r?n.createElement(v,i(i({ref:t},d),{},{components:r})):n.createElement(v,i({ref:t},d))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},25635:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},i="GetEnvironmentName",l={unversionedId:"api/cc/bridge/getenvironmentname",id:"api/cc/bridge/getenvironmentname",title:"GetEnvironmentName",description:"Overview",source:"@site/docs/api/3_cc/bridge/getenvironmentname.md",sourceDirName:"api/3_cc/bridge",slug:"/api/cc/bridge/getenvironmentname",permalink:"/braincloud-apiref/api/cc/bridge/getenvironmentname",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/3_cc/bridge/getenvironmentname.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"GetEntityServiceProxy",permalink:"/braincloud-apiref/api/cc/bridge/getentityserviceproxy"},next:{title:"GetEventServiceProxy",permalink:"/braincloud-apiref/api/cc/bridge/geteventserviceproxy"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=d("BrowserWindow"),u=d("Tabs"),s=d("TabItem"),v={toc:p};function b(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getenvironmentname"},"GetEnvironmentName"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This returns the name of the deployment environment that app is running within. "),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"This is most useful for developers who have access to both public and private brainCloud environments.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(m,{mdxType:"BrowserWindow"},(0,a.kt)(u,{mdxType:"Tabs"},(0,a.kt)(s,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,a.kt)(s,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,a.kt)(s,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,a.kt)(s,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,a.kt)(s,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,a.kt)(s,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cfscript"},"var environmentName = bridge.getEnvironmentName();\n"))),(0,a.kt)(s,{value:"r",label:"Raw",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cfscript"},"var environmentName = bridge.getEnvironmentName();\n"))))))}b.isMDXComponent=!0}}]);