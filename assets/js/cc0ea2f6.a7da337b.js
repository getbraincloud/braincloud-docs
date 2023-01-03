"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[9246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,y=m["".concat(s,".").concat(u)]||m[u]||c[u]||a;return n?o.createElement(y,i(i({ref:t},d),{},{components:n})):o.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={},i="SysUpdatePromotion",p={unversionedId:"api/s2s/promotions/sysupdatepromotion",id:"api/s2s/promotions/sysupdatepromotion",title:"SysUpdatePromotion",description:"Overview",source:"@site/docs/api/4_s2s/promotions/sysupdatepromotion.md",sourceDirName:"api/4_s2s/promotions",slug:"/api/s2s/promotions/sysupdatepromotion",permalink:"/braincloud-apiref/api/s2s/promotions/sysupdatepromotion",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/4_s2s/promotions/sysupdatepromotion.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysReadPromotion",permalink:"/braincloud-apiref/api/s2s/promotions/sysreadpromotion"},next:{title:"Push Notifications",permalink:"/braincloud-apiref/api/s2s/pushnotification/"}},s={},l=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=d("PartialServop"),c=d("BrowserWindow"),u=d("Tabs"),y=d("TabItem"),v={toc:l};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sysupdatepromotion"},"SysUpdatePromotion"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Updates the specified promotion with the provided promotionJson. Any promotionId included in the promotionJson will be ignored."),(0,r.kt)(m,{service_name:"promotions",operation_name:"SYS_UPDATE_PROMOTION",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(c,{mdxType:"BrowserWindow"},(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(y,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(y,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(y,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(y,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(y,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(y,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var promotionId = 1;\nvar version = 1;\nvar promotionJson ={\n  "name": "Independence Day Sale",\n  "type": "SCHEDULED",\n  "startAt": 1593781140000,\n  "endAt": 1594126859999,\n  "message": {\n      "en": "Happy 4th of July!",\n      "fr": "Joyeux 4 juillet!"\n  },\n  "enabled": true,\n  "segments": [ 1 ],\n  "prices": [\n      {\n          "itemId": "coinbundle10",\n          "priceId": 1\n      }\n  ],\n  "notifications": [\n      {\n          "trigger" : "ACTIVATED",\n          "notificationTemplateId" : 1\n      }\n  ],\n  "customJson": {\n    "key": "value"\n  }\n}\nvar promotionsProxy = bridge.getPromotionsServiceProxy();\n\nvar postResult = promotionsProxy.sysUpdatePromotion(promotionId, version, promotionJson);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(y,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "promotions",\n    "operation": "SYS_UPDATE_PROMOTION",\n    "data": {\n    "promotionId": 1,\n    "version": 2,\n    "promotionJson": {\n        "name": "Independence Day Sale",\n        "type": "SCHEDULED",\n        "startAt": 1593781140000,\n        "endAt": 1594126859999,\n        "message": {\n            "en": "Happy 4th of July!",\n            "fr": "Joyeux 4 juillet!"\n        },\n        "enabled": true,\n        "segments": [ 1 ],\n        "prices": [\n            {\n                "itemId": "coinbundle10",\n                "priceId": 1\n            }\n        ],\n        "notifications": [\n            {\n                "trigger" : "ACTIVATED",\n                "notificationTemplateId" : 2\n            }\n        ],\n        "customJson": {\n          "key": "value"\n        }\n    }\n  }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "promotion": {\n      "promotionId": 1,\n      "type": "SCHEDULED",\n      "name": "Independence Day Sale",\n      "message": {\n        "en": "Happy 4th of July!",\n        "fr": "Joyeux 4 juillet!"\n      },\n      "enabled": true,\n      "segments": [\n        1\n      ],\n      "prices": [\n        {\n          "itemId": "coinbundle10",\n          "priceId": 1\n        }\n      ],\n      "notifications": [\n        {\n          "trigger": "ACTIVATED",\n          "notificationTemplateId": 1\n        }\n      ],\n      "customJson": {\n        "key": "value"\n      },\n      "startAt": 1593781140000,\n      "endAt": 1594126859999,\n      "createdAt": 1592543345470,\n      "updatedAt": 1592589083592,\n      "version": 2\n    }\n  },\n  "status": 200\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"promotionId"),(0,r.kt)("td",{parentName:"tr",align:null},"ID uniquely identifying the promotion to update. Note: If promotionId is included in the promotionJson, it is ignored. The promotionId provided as a direct parameter takes priority.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"Version of the promotion to update. Can bypass version check by passing in -1.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"promotionJson"),(0,r.kt)("td",{parentName:"tr",align:null},"The full promotion JSON (minus the promotionId).")))))}b.isMDXComponent=!0}}]);