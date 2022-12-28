"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[29068],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,y=m["".concat(l,".").concat(u)]||m[u]||c[u]||r;return n?o.createElement(y,i(i({ref:t},d),{},{components:n})):o.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={},i="SysUpdatePromotion",p={unversionedId:"api/capi/promotions/sysupdatepromotion",id:"api/capi/promotions/sysupdatepromotion",title:"SysUpdatePromotion",description:"Overview",source:"@site/docs/api/2_capi/promotions/sysupdatepromotion.md",sourceDirName:"api/2_capi/promotions",slug:"/api/capi/promotions/sysupdatepromotion",permalink:"/braincloud-apiref/api/capi/promotions/sysupdatepromotion",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/promotions/sysupdatepromotion.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671831235,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysReadPromotion",permalink:"/braincloud-apiref/api/capi/promotions/sysreadpromotion"},next:{title:"Push Notification",permalink:"/braincloud-apiref/api/capi/pushnotification/"}},l={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=d("PartialServop"),c=d("BrowserWindow"),u=d("Tabs"),y=d("TabItem"),v={toc:s};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sysupdatepromotion"},"SysUpdatePromotion"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Updates the specified promotion with the provided promotionJson. Any promotionId included in the promotionJson will be ignored."),(0,a.kt)(m,{service_name:"promotions",operation_name:"SYS_UPDATE_PROMOTION",mdxType:"PartialServop"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(c,{mdxType:"BrowserWindow"},(0,a.kt)(u,{mdxType:"Tabs"},(0,a.kt)(y,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,a.kt)(y,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,a.kt)(y,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,a.kt)(y,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,a.kt)(y,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,a.kt)(y,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cfscript"},'var promotionId = 1;\nvar version = 1;\nvar promotionJson ={\n  "name": "Independence Day Sale",\n  "type": "SCHEDULED",\n  "startAt": 1593781140000,\n  "endAt": 1594126859999,\n  "message": {\n      "en": "Happy 4th of July!",\n      "fr": "Joyeux 4 juillet!"\n  },\n  "enabled": true,\n  "segments": [ 1 ],\n  "prices": [\n      {\n          "itemId": "coinbundle10",\n          "priceId": 1\n      }\n  ],\n  "notifications": [\n      {\n          "trigger" : "ACTIVATED",\n          "notificationTemplateId" : 1\n      }\n  ],\n  "customJson": {\n    "key": "value"\n  }\n}\nvar promotionsProxy = bridge.getPromotionsServiceProxy();\n\nvar postResult = promotionsProxy.sysUpdatePromotion(promotionId, version, promotionJson);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,a.kt)(y,{value:"r",label:"Raw",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "promotions",\n    "operation": "SYS_UPDATE_PROMOTION",\n    "data": {\n    "promotionId": 1,\n    "version": 2,\n    "promotionJson": {\n        "name": "Independence Day Sale",\n        "type": "SCHEDULED",\n        "startAt": 1593781140000,\n        "endAt": 1594126859999,\n        "message": {\n            "en": "Happy 4th of July!",\n            "fr": "Joyeux 4 juillet!"\n        },\n        "enabled": true,\n        "segments": [ 1 ],\n        "prices": [\n            {\n                "itemId": "coinbundle10",\n                "priceId": 1\n            }\n        ],\n        "notifications": [\n            {\n                "trigger" : "ACTIVATED",\n                "notificationTemplateId" : 2\n            }\n        ],\n        "customJson": {\n          "key": "value"\n        }\n    }\n  }\n}\n'))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"JSON Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "promotion": {\n      "promotionId": 1,\n      "type": "SCHEDULED",\n      "name": "Independence Day Sale",\n      "message": {\n        "en": "Happy 4th of July!",\n        "fr": "Joyeux 4 juillet!"\n      },\n      "enabled": true,\n      "segments": [\n        1\n      ],\n      "prices": [\n        {\n          "itemId": "coinbundle10",\n          "priceId": 1\n        }\n      ],\n      "notifications": [\n        {\n          "trigger": "ACTIVATED",\n          "notificationTemplateId": 1\n        }\n      ],\n      "customJson": {\n        "key": "value"\n      },\n      "startAt": 1593781140000,\n      "endAt": 1594126859999,\n      "createdAt": 1592543345470,\n      "updatedAt": 1592589083592,\n      "version": 2\n    }\n  },\n  "status": 200\n}\n'))),(0,a.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"promotionId"),(0,a.kt)("td",{parentName:"tr",align:null},"ID uniquely identifying the promotion to update. Note: If promotionId is included in the promotionJson, it is ignored. The promotionId provided as a direct parameter takes priority.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"version"),(0,a.kt)("td",{parentName:"tr",align:null},"Version of the promotion to update. Can bypass version check by passing in -1.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"promotionJson"),(0,a.kt)("td",{parentName:"tr",align:null},"The full promotion JSON (minus the promotionId).")))))}b.isMDXComponent=!0}}]);