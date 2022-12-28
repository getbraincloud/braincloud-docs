"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[3164],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>y});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),u=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},i=function(e){var r=u(e.components);return a.createElement(p.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=u(t),m=n,y=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return t?a.createElement(y,l(l({ref:r},i),{},{components:t})):a.createElement(y,l({ref:r},i))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=m;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[s]="string"==typeof e?e:n,l[1]=c;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},36803:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=t(87462),n=(t(67294),t(3905));const o={},l="ResetPeerCurrency",c={unversionedId:"api/capi/virtualcurrency/resetpeercurrency",id:"api/capi/virtualcurrency/resetpeercurrency",title:"ResetPeerCurrency",description:"Overview",source:"@site/docs/api/2_capi/virtualcurrency/resetpeercurrency.md",sourceDirName:"api/2_capi/virtualcurrency",slug:"/api/capi/virtualcurrency/resetpeercurrency",permalink:"/braincloud-apiref/api/capi/virtualcurrency/resetpeercurrency",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/virtualcurrency/resetpeercurrency.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"ResetParentCurrency",permalink:"/braincloud-apiref/api/capi/virtualcurrency/resetparentcurrency"},next:{title:"SysGetCurrencyTypes",permalink:"/braincloud-apiref/api/capi/virtualcurrency/sysgetcurrencytypes"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],i=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",r)},s=i("PartialServop"),d=i("BrowserWindow"),m=i("Tabs"),y=i("TabItem"),v={toc:u};function b(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},v,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"resetpeercurrency"},"ResetPeerCurrency"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Resets the peer user's currency back to zero."),(0,n.kt)(s,{service_name:"virtualCurrency",operation_name:"RESET_PEER_VC",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(d,{mdxType:"BrowserWindow"},(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(y,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(y,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(y,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(y,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(y,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(y,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var peerCode = "master";\nvar virtualCurrencyProxy = bridge.getVirtualCurrencyServiceProxy();\n\nvar postResult = virtualCurrencyProxy.resetPeerCurrency(peerCode);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,n.kt)(y,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var peerCode = "master";\nvar virtualCurrencyProxy = bridge.getVirtualCurrencyServiceProxy();\n\nvar postResult = virtualCurrencyProxy.resetPeerCurrency(peerCode);\nif (postResult.status == 200) {\n    // Success!\n}\n'))))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"peerCode"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the peer")))))}b.isMDXComponent=!0}}]);