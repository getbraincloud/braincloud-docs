"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[56003],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,y=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(y,l(l({ref:t},p),{},{components:n})):a.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>v,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},l="UpdateSystemEntityAcl",o={unversionedId:"api/capi/globalentity/updatesystementityacl",id:"api/capi/globalentity/updatesystementityacl",title:"UpdateSystemEntityAcl",description:"Overview",source:"@site/docs/api/2_capi/globalentity/updatesystementityacl.md",sourceDirName:"api/2_capi/globalentity",slug:"/api/capi/globalentity/updatesystementityacl",permalink:"/braincloud-apiref/api/capi/globalentity/updatesystementityacl",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/globalentity/updatesystementityacl.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671831235,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"UpdateSystemEntity",permalink:"/braincloud-apiref/api/capi/globalentity/updatesystementity"},next:{title:"Global File",permalink:"/braincloud-apiref/api/capi/globalfile/"}},d={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2},{value:"Status Codes",id:"status-codes",level:4}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=p("PartialServop"),u=p("BrowserWindow"),m=p("Tabs"),y=p("TabItem"),b={toc:s};function v(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"updatesystementityacl"},"UpdateSystemEntityAcl"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Updates an existing ",(0,r.kt)("em",{parentName:"p"},"System Entity's")," ACL on the server, regardless of the entity's current ACL permissions. ",(0,r.kt)("em",{parentName:"p"},"Note that for obvious security reasons, this API method is available via cloud-code only.")),(0,r.kt)("p",null,"This method is affected by versioning. See the ",(0,r.kt)("a",{parentName:"p",href:"/api/appendix/version"},"versioning documentation")," for more information."),(0,r.kt)(c,{service_name:"globalEntity",operation_name:"UPDATE_ACL",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(u,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(y,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "gameId": "123456",\n        "entityId": "14281c38-abf6-4ca2-8436-b2bdwas8d5a9a",\n        "ownerId": "784cc6c6-4569-4d75-bd10-62dwa8ae0218",\n        "entityType": "test",\n        "entityIndexedId" : "indexTest",\n        "version": 1,\n        "acl": {\n            "other": 1\n        },\n        "expiresAt": 1449861422588,\n        "timeToLive": 34567,\n        "createdAt": 1449861388021,\n        "updatedAt": 1449861388021\n    }\n}\n'))),(0,r.kt)(y,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "gameId": "123456",\n        "entityId": "14281c38-abf6-4ca2-8436-b2bdwas8d5a9a",\n        "ownerId": "784cc6c6-4569-4d75-bd10-62dwa8ae0218",\n        "entityType": "test",\n        "entityIndexedId" : "indexTest",\n        "version": 1,\n        "acl": {\n            "other": 1\n        },\n        "expiresAt": 1449861422588,\n        "timeToLive": 34567,\n        "createdAt": 1449861388021,\n        "updatedAt": 1449861388021\n    }\n}\n'))),(0,r.kt)(y,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "gameId": "123456",\n        "entityId": "14281c38-abf6-4ca2-8436-b2bdwas8d5a9a",\n        "ownerId": "784cc6c6-4569-4d75-bd10-62dwa8ae0218",\n        "entityType": "test",\n        "entityIndexedId" : "indexTest",\n        "version": 1,\n        "acl": {\n            "other": 1\n        },\n        "expiresAt": 1449861422588,\n        "timeToLive": 34567,\n        "createdAt": 1449861388021,\n        "updatedAt": 1449861388021\n    }\n}\n'))),(0,r.kt)(y,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "gameId": "123456",\n        "entityId": "14281c38-abf6-4ca2-8436-b2bdwas8d5a9a",\n        "ownerId": "784cc6c6-4569-4d75-bd10-62dwa8ae0218",\n        "entityType": "test",\n        "entityIndexedId" : "indexTest",\n        "version": 1,\n        "acl": {\n            "other": 1\n        },\n        "expiresAt": 1449861422588,\n        "timeToLive": 34567,\n        "createdAt": 1449861388021,\n        "updatedAt": 1449861388021\n    }\n}\n'))),(0,r.kt)(y,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "gameId": "123456",\n        "entityId": "14281c38-abf6-4ca2-8436-b2bdwas8d5a9a",\n        "ownerId": "784cc6c6-4569-4d75-bd10-62dwa8ae0218",\n        "entityType": "test",\n        "entityIndexedId" : "indexTest",\n        "version": 1,\n        "acl": {\n            "other": 1\n        },\n        "expiresAt": 1449861422588,\n        "timeToLive": 34567,\n        "createdAt": 1449861388021,\n        "updatedAt": 1449861388021\n    }\n}\n'))),(0,r.kt)(y,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var entityId = "a-entity-id";\nvar version = 2;\nvar jsonEntityAcl = {\n    "other": 1\n};\nvar globalEntityProxy = bridge.getGlobalEntityServiceProxy();\n\nvar postResult = globalEntityProxy.updateSystemEntityAcl(entityId, version, jsonEntityAcl);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(y,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "globalEntity",\n    "operation": "UPDATE_ACL",\n    "data": {\n        "entityId": "the-entity-id",\n        "version": 2,\n        "acl": {\n            "other": 1\n        }\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "gameId": "123456",\n        "entityId": "14281c38-abf6-4ca2-8436-b2bdwas8d5a9a",\n        "ownerId": "784cc6c6-4569-4d75-bd10-62dwa8ae0218",\n        "entityType": "test",\n        "entityIndexedId" : "indexTest",\n        "version": 1,\n        "acl": {\n            "other": 1\n        },\n        "expiresAt": 1449861422588,\n        "timeToLive": 34567,\n        "createdAt": 1449861388021,\n        "updatedAt": 1449861388021\n    }\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entityId"),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the entity to update")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"The version of the entity to update. Use -1 to indicate the newest version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jsonEntityAcl"),(0,r.kt)("td",{parentName:"tr",align:null},"The entity's ",(0,r.kt)("a",{parentName:"td",href:"/api/appendix/acl"},"Access Control List")," as json.")))),(0,r.kt)("h4",{id:"status-codes"},"Status Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40344"),(0,r.kt)("td",{parentName:"tr",align:null},"ENTITY_VERSION_MISMATCH"),(0,r.kt)("td",{parentName:"tr",align:null},"The version passed in does not match the version of the entity on the server")))))}v.isMDXComponent=!0}}]);