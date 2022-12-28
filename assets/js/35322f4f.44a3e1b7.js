"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[20724],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},60800:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={},o="SysGetCatalogItemsPageOffset",s={unversionedId:"api/s2s/itemcatalog/sysgetcatalogitemspageoffset",id:"api/s2s/itemcatalog/sysgetcatalogitemspageoffset",title:"SysGetCatalogItemsPageOffset",description:"Overview",source:"@site/docs/api/4_s2s/itemcatalog/sysgetcatalogitemspageoffset.md",sourceDirName:"api/4_s2s/itemcatalog",slug:"/api/s2s/itemcatalog/sysgetcatalogitemspageoffset",permalink:"/braincloud-apiref/api/s2s/itemcatalog/sysgetcatalogitemspageoffset",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/4_s2s/itemcatalog/sysgetcatalogitemspageoffset.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysGetCatalogItemsPage",permalink:"/braincloud-apiref/api/s2s/itemcatalog/sysgetcatalogitemspage"},next:{title:"SysPublishCatalogItem",permalink:"/braincloud-apiref/api/s2s/itemcatalog/syspublishcatalogitem"}},i={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=p("PartialServop"),u=p("BrowserWindow"),d=p("Tabs"),g=p("TabItem"),f={toc:c};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sysgetcatalogitemspageoffset"},"SysGetCatalogItemsPageOffset"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Gets the page of catalog items from the server based on the encoded context and specified page offset, with full language fields mappings."),(0,r.kt)(m,{service_name:"itemCatalog",operation_name:"SYS_GET_CATALOG_ITEMS_PAGE_OFFSET",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(u,{mdxType:"BrowserWindow"},(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(g,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(g,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(g,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(g,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(g,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(g,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";\nvar pageOffset = 1;\nvar itemCatalogProxy = bridge.getItemCatalogServiceProxy();\n\nvar postResult = itemCatalogProxy.sysGetCatalogItemsPageOffset(context, pageOffset);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(g,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "itemCatalog",\n    "operation": "SYS_GET_CATALOG_ITEMS_PAGE_OFFSET",\n    "data": {\n        "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0",\n        "pageOffset": 1\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJnYW1lSWQiOiIyMzQwMyJ9LCJzb3J0Q3JpdGVyaWEiOnsiY3JlYXRlZEF0IjoxLCJ1cGRhdGVkQXQiOi0xfSwicGFnaW5hdGlvbiI6eyJyb3dzUGVyUGFnZSI6MSwicGFnZU51bWJlciI6MiwiZG9Db3VudCI6dHJ1ZX0sIm9wdGlvbnMiOm51bGx9",\n    "results": {\n      "count": 7,\n      "page": 2,\n      "items": [\n        {\n          "gameId": "23403",\n          "defId": "medal_bronze_2",\n          "name": {\n            "en": "Medium Bronze Medal"\n          },\n          "desc": {\n            "en": ""\n          },\n          "type": "ITEM",\n          "category": "collectable",\n          "tags": [\n            "medal"\n          ],\n          "buyPrice": {},\n          "sellPrice": {},\n          "image": null,\n          "resourceGroup": null,\n          "resourceTag": null,\n          "meta": {},\n          "initData": {},\n          "pState": "PUBLISHED",\n          "publishedAt": 1566585957049,\n          "createdAt": 1566585954652,\n          "updatedAt": 1566585957049,\n          "version": 2,\n          "stackable": false,\n          "consumable": false,\n          "uses": null,\n          "coolDownSecs": 0,\n          "recoverySecs": 0,\n          "activatable": false,\n          "statusName": null,\n          "activeSecs": null,\n          "tradable": false,\n          "blockchain": false,\n          "blockchainDefId": null\n        }\n      ],\n      "moreAfter": true,\n      "moreBefore": true\n    }\n  },\n  "status": 200\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"context"),(0,r.kt)("td",{parentName:"tr",align:null},"The context string returned from the server from a previous call to SysGetCatalogItemsPage or SysGetCatalogItemsPageOffset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageOffset"),(0,r.kt)("td",{parentName:"tr",align:null},"The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.")))))}b.isMDXComponent=!0}}]);