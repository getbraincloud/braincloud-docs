"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[13162],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>v});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,v=d["".concat(s,".").concat(u)]||d[u]||m[u]||l;return a?n.createElement(v,o(o({ref:t},p),{},{components:a})):n.createElement(v,o({ref:t},p))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},10703:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={},o="SysSetInvisibleCatalogItem",i={unversionedId:"api/s2s/itemcatalog/syssetinvisiblecatalogitem",id:"api/s2s/itemcatalog/syssetinvisiblecatalogitem",title:"SysSetInvisibleCatalogItem",description:"Overview",source:"@site/docs/api/4_s2s/itemcatalog/syssetinvisiblecatalogitem.md",sourceDirName:"api/4_s2s/itemcatalog",slug:"/api/s2s/itemcatalog/syssetinvisiblecatalogitem",permalink:"/braincloud-apiref/api/s2s/itemcatalog/syssetinvisiblecatalogitem",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/4_s2s/itemcatalog/syssetinvisiblecatalogitem.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysRevokeCatalogItem",permalink:"/braincloud-apiref/api/s2s/itemcatalog/sysrevokecatalogitem"},next:{title:"Leaderboard",permalink:"/braincloud-apiref/api/s2s/leaderboard/"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=p("PartialServop"),m=p("BrowserWindow"),u=p("Tabs"),v=p("TabItem"),b={toc:c};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"syssetinvisiblecatalogitem"},"SysSetInvisibleCatalogItem"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Set the specified catalog item to invisible on the server."),(0,r.kt)(d,{service_name:"itemCatalog",operation_name:"SYS_SET_INVISIBLE_CATALOG_ITEM",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(m,{mdxType:"BrowserWindow"},(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(v,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(v,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(v,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(v,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(v,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(v,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var defId = "sword001";\nvar version = 1;\nvar force = false;\nvar itemCatalogProxy = bridge.getItemCatalogServiceProxy();\n\nvar postResult = itemCatalogProxy.sysSetInvisibleCatalogItem(defId, version, force);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(v,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "itemCatalog",\n    "operation": "SYS_SET_INVISIBLE_CATALOG_ITEM",\n    "data": {\n        "defId": "sword001",\n        "version": 1,\n        "force": false\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "defId": "sword001a",\n    "name": "Crimson Sword - Alt",\n    "desc": "A sword whose blade was forged in Cherry Kool-aid!",\n    "type": "ITEM",\n    "category": "sword",\n    "tags": [\n      "weapon",\n      "pointy"\n    ],\n    "buyPrice": {\n      "coins": 200\n    },\n    "sellPrice": {\n      "coins": 150\n    },\n    "image": "//xxx.jpg",\n    "resourceGroup": "equipment.asset",\n    "resourceTag": "sword001",\n    "meta": {\n      "speed": 85,\n      "damage": 12,\n      "accuracy": 80,\n      "range": 5\n    },\n    "initData": {\n      "condition": 100,\n      "bonus": 0\n    },\n    "pState": "INVISIBLE",\n    "publishedAt": 0,\n    "createdAt": 1567192159250,\n    "updatedAt": 1567192312406,\n    "version": 2,\n    "stackable": false,\n    "consumable": false,\n    "uses": null,\n    "coolDownSecs": 0,\n    "recoverySecs": 0,\n    "activatable": false,\n    "statusName": null,\n    "activeSecs": null,\n    "tradable": false,\n    "blockchain": false,\n    "blockchainDefId": null\n  },\n  "status": 200\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defId"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique ID identifying catalog item.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"Version of catalog item being edited.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"force"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify true to set invisible even if the item has previously been retired or revoked, otherwise false.")))))}g.isMDXComponent=!0}}]);