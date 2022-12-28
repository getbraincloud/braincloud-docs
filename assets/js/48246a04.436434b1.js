"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[64570],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(a),y=r,u=c["".concat(d,".").concat(y)]||c[y]||m[y]||l;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=y;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},26138:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>v,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={},i="CreateSystemEntityWithIndexedId",o={unversionedId:"api/s2s/globalentity/createsystementitywithindexedid",id:"api/s2s/globalentity/createsystementitywithindexedid",title:"CreateSystemEntityWithIndexedId",description:"Overview",source:"@site/docs/api/4_s2s/globalentity/createsystementitywithindexedid.md",sourceDirName:"api/4_s2s/globalentity",slug:"/api/s2s/globalentity/createsystementitywithindexedid",permalink:"/braincloud-apiref/api/s2s/globalentity/createsystementitywithindexedid",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/4_s2s/globalentity/createsystementitywithindexedid.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"CreateSystemEntity",permalink:"/braincloud-apiref/api/s2s/globalentity/createsystementity"},next:{title:"DeleteSystemEntity",permalink:"/braincloud-apiref/api/s2s/globalentity/deletesystementity"}},d={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=p("PartialServop"),m=p("BrowserWindow"),y=p("Tabs"),u=p("TabItem"),b={toc:s};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"createsystementitywithindexedid"},"CreateSystemEntityWithIndexedId"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Create a new system entity on the server with an indexed id."),(0,r.kt)(c,{service_name:"globalEntity",operation_name:"CREATE_SYSTEM_ENTITY_WITH_INDEXED_ID",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(m,{mdxType:"BrowserWindow"},(0,r.kt)(y,{mdxType:"Tabs"},(0,r.kt)(u,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(u,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(u,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(u,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(u,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(u,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var entityType = "address";\nvar entityIndexedId = "entityId1";\nvar timeToLive = null;\nvar acl = {\n  "other": 1\n};\nvar data = {\n  "street": "1309 Carling"\n};\nvar globalEntityProxy = bridge.getGlobalEntityServiceProxy();\n\nvar postResult = globalEntityProxy.createSystemEntityWithIndexedId(entityType, entityIndexedId, timeToLive, acl, data);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(u,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "globalEntity",\n    "operation": "CREATE_SYSTEM_ENTITY_WITH_INDEXED_ID",\n    "data": {\n        "entityType": "address",\n        "entityIndexedId": "entityId1",\n        "timeToLive": null,\n        "acl": {\n            "other": 1\n        },\n        "data": {\n            "street": "1309 Carling"\n        }\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{  \n   "data":{  \n      "gameId":"12270",\n      "entityId":"b2a2bbdf-084b-41c8-802a-05de9c37b20c",\n      "ownerId":null,\n      "entityType":"address",\n      "entityIndexedId":"entityId1",\n      "version":1,\n      "acl":{  \n         "other":1\n      },\n      "expiresAt":9223372036854776000,\n      "timeToLive":-1,\n      "createdAt":1550852309251,\n      "updatedAt":1550852309251\n   },\n   "status":200\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entityType"),(0,r.kt)("td",{parentName:"tr",align:null},"The entity type as defined by the user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entityIndexedId"),(0,r.kt)("td",{parentName:"tr",align:null},"Id used to index the entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeToLive"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets expiry time for entity in milliseconds if > 0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"acl"),(0,r.kt)("td",{parentName:"tr",align:null},"The entity's Access Control List as an object. A null ACL implies default permissions which make the entity readable/writeable by only the owner.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"The entity's data object.")))))}v.isMDXComponent=!0}}]);