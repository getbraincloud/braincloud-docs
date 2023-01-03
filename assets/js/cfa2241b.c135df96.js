"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[6703],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>m});var r=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,r,l=function(e,a){if(null==e)return{};var t,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),p=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=p(e.components);return r.createElement(o.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},b=r.forwardRef((function(e,a){var t=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),b=l,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||n;return t?r.createElement(m,i(i({ref:a},s),{},{components:t})):r.createElement(m,i({ref:a},s))}));function m(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var n=t.length,i=new Array(n);i[0]=b;var c={};for(var o in a)hasOwnProperty.call(a,o)&&(c[o]=a[o]);c.originalType=e,c[u]="string"==typeof e?e:l,i[1]=c;for(var p=2;p<n;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},68566:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>f,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var r=t(87462),l=(t(67294),t(3905));const n={},i="DeregisterFileUploadCallback",c={unversionedId:"api/capi/client/deregisterfileuploadcallback",id:"api/capi/client/deregisterfileuploadcallback",title:"DeregisterFileUploadCallback",description:"Overview",source:"@site/docs/api/2_capi/client/deregisterfileuploadcallback.md",sourceDirName:"api/2_capi/client",slug:"/api/capi/client/deregisterfileuploadcallback",permalink:"/braincloud-apiref/api/capi/client/deregisterfileuploadcallback",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/client/deregisterfileuploadcallback.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"DeregisterEventCallback",permalink:"/braincloud-apiref/api/capi/client/deregistereventcallback"},next:{title:"DeregisterGlobalErrorCallback",permalink:"/braincloud-apiref/api/capi/client/deregisterglobalerrorcallback"}},o={},p=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2}],s=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",a)},u=s("BrowserWindow"),d=s("Tabs"),b=s("TabItem"),m={toc:p};function f(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"deregisterfileuploadcallback"},"DeregisterFileUploadCallback"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Deregisters the file upload callback"),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(u,{mdxType:"BrowserWindow"},(0,l.kt)(d,{mdxType:"Tabs"},(0,l.kt)(b,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"_bc.DeregisterFileUploadCallback();\n"))),(0,l.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"_bc->deregisterFileUploadCallback();\n"))),(0,l.kt)(b,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"[_bc deregisterFileUploadCallback];\n"))),(0,l.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// N/A\n"))),(0,l.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// N/A\n"))),(0,l.kt)(b,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// N/A\n"))),(0,l.kt)(b,{value:"r",label:"Raw",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// N/A\n"))))))}f.isMDXComponent=!0}}]);