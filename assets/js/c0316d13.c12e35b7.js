"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[52052],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(b,c(c({ref:t},p),{},{components:a})):r.createElement(b,c({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:n,c[1]=l;for(var s=2;s<i;s++)c[s]=a[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},47510:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>v,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={},c="IsAuthenticated",l={unversionedId:"api/capi/client/isauthenticated",id:"api/capi/client/isauthenticated",title:"IsAuthenticated",description:"Overview",source:"@site/docs/api/2_capi/client/isauthenticated.md",sourceDirName:"api/2_capi/client",slug:"/api/capi/client/isauthenticated",permalink:"/braincloud-apiref/api/capi/client/isauthenticated",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/client/isauthenticated.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"InsertEndOfMessageBundleMarker",permalink:"/braincloud-apiref/api/capi/client/insertendofmessagebundlemarker"},next:{title:"IsInitialized",permalink:"/braincloud-apiref/api/capi/client/isinitialized"}},o={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=p("BrowserWindow"),d=p("Tabs"),m=p("TabItem"),b={toc:s};function v(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"isauthenticated"},"IsAuthenticated"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Returns true if the user is authenticated."),(0,n.kt)("p",null,"If a session has timed out or if the server returns a session invalidation error, this flag will reset back to false."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(u,{mdxType:"BrowserWindow"},(0,n.kt)(d,{mdxType:"Tabs"},(0,n.kt)(m,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"bool isAuthenticated = _bc.Authenticated;\n"))),(0,n.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"bool isAuthenticated = _bc->isAuthenticated();\n"))),(0,n.kt)(m,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"bool isAuthenticated = [_bc isAuthenticated];\n"))),(0,n.kt)(m,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"boolean isAuthenticated = _bc.isAuthenticated();\n"))),(0,n.kt)(m,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"var isAuthenticated = _bc.isAuthenticated();\n"))),(0,n.kt)(m,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"var isAuthenticated = _bc.isAuthenticated();\n"))),(0,n.kt)(m,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"var isAuthenticated = _bc.isAuthenticated();\n"))))))}v.isMDXComponent=!0}}]);