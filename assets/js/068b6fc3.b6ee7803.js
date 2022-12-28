"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[59856],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,y=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(y,o(o({ref:t},d),{},{components:a})):n.createElement(y,o({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},95786:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>v,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},o="ReadSystemEntity",i={unversionedId:"api/s2s/globalentity/readsystementity",id:"api/s2s/globalentity/readsystementity",title:"ReadSystemEntity",description:"Overview",source:"@site/docs/api/4_s2s/globalentity/readsystementity.md",sourceDirName:"api/4_s2s/globalentity",slug:"/api/s2s/globalentity/readsystementity",permalink:"/braincloud-apiref/api/s2s/globalentity/readsystementity",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/4_s2s/globalentity/readsystementity.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"ReadEntity",permalink:"/braincloud-apiref/api/s2s/globalentity/readentity"},next:{title:"UpdateEntityIndexedId",permalink:"/braincloud-apiref/api/s2s/globalentity/updateentityindexedid"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=d("PartialServop"),u=d("BrowserWindow"),m=d("Tabs"),y=d("TabItem"),b={toc:p};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"readsystementity"},"ReadSystemEntity"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Method reads an existing system entity on the server. It cannot be an owned/global entity."),(0,r.kt)(c,{service_name:"globalEntity",operation_name:"READ_SYSTEM_ENTITY",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(u,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(y,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(y,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(y,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(y,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(y,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(y,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var entityId = "the-entity-id";\nvar globalEntityProxy = bridge.getGlobalEntityServiceProxy();\n\nvar postResult = globalEntityProxy.readSystemEntity(entityId);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(y,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "globalEntity",\n    "operation": "READ_SYSTEM_ENTITY",\n    "data": {\n        "entityId": "the-entity-id"\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "gameId": "22198",\n        "entityIndexedId": null,\n        "timeToLive": 0,\n        "createdAt": 1498850247510,\n        "entityType": "address",\n        "entityId": "4b2f1cba-cc52-4d3c-8663-ff540ee48a38",\n        "acl": {\n        "other": 2\n        },\n        "ownerId": null,\n        "version": 2,\n        "expiresAt": 9223372036854776000,\n        "updatedAt": 1498850536733,\n        "_serverTime": 1637946319239\n    },\n    "status": 200\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entityId"),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the entity to read.")))))}v.isMDXComponent=!0}}]);