"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[26262],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,b=d["".concat(p,".").concat(u)]||d[u]||c[u]||o;return n?r.createElement(b,i(i({ref:t},m),{},{components:n})):r.createElement(b,i({ref:t},m))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i="SysEnablePromotion",l={unversionedId:"api/s2s/promotions/sysenablepromotion",id:"api/s2s/promotions/sysenablepromotion",title:"SysEnablePromotion",description:"Overview",source:"@site/docs/api/4_s2s/promotions/sysenablepromotion.md",sourceDirName:"api/4_s2s/promotions",slug:"/api/s2s/promotions/sysenablepromotion",permalink:"/braincloud-apiref/api/s2s/promotions/sysenablepromotion",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/4_s2s/promotions/sysenablepromotion.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysDeletePromotion",permalink:"/braincloud-apiref/api/s2s/promotions/sysdeletepromotion"},next:{title:"SysGetPromotionList",permalink:"/braincloud-apiref/api/s2s/promotions/sysgetpromotionlist"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=m("PartialServop"),c=m("BrowserWindow"),u=m("Tabs"),b=m("TabItem"),v={toc:s};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sysenablepromotion"},"SysEnablePromotion"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Enable/Disable a promotion. A convenience API for easily toggling a promotion on/off."),(0,a.kt)(d,{service_name:"promotions",operation_name:"SYS_ENABLE_PROMOTION",mdxType:"PartialServop"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(c,{mdxType:"BrowserWindow"},(0,a.kt)(u,{mdxType:"Tabs"},(0,a.kt)(b,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,a.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,a.kt)(b,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,a.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,a.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,a.kt)(b,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cfscript"},"var promotionId = 1;\nvar version = 1;\nvar enabled = true;\nvar promotionsProxy = bridge.getPromotionsServiceProxy();\n\nvar postResult = promotionsProxy.sysEnablePromotion(promotionId, version, enabled);\nif (postResult.status == 200) {\n    // Success!\n}\n"))),(0,a.kt)(b,{value:"r",label:"Raw",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "promotions",\n    "operation": "SYS_ENABLE_PROMOTION",\n    "data": {\n    "promotionId": 1,\n    "version": 1,\n    "enabled": true\n  }\n}\n'))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"JSON Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "promotion": {\n      "promotionId": 1,\n      "type": "SCHEDULED",\n      "name": "Independence Day Sale",\n      "message": {\n        "en": "Happy 4th of July!"\n      },\n      "enabled": true,\n      "segments": [],\n      "prices": [\n        {\n          "itemId": "coinbundle10",\n          "priceId": 0\n        }\n      ],\n      "notifications": [\n        {\n          "trigger": "ACTIVATED",\n          "notificationTemplateId": 1\n        }\n      ],\n      "startAt": 1593781259911,\n      "endAt": 1594126859911,\n      "createdAt": 1592543866698,\n      "updatedAt": 1592590019283,\n      "version": 2\n    }\n  },\n  "status": 200\n}\n'))),(0,a.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"promotionId"),(0,a.kt)("td",{parentName:"tr",align:null},"ID uniquely identifying the promotion to update. Note: If promotionId is included in the promotionJson, it is ignored. The promotionId provided as a direct parameter takes priority.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"version"),(0,a.kt)("td",{parentName:"tr",align:null},"Version of the promotion to update. Can bypass version check by passing in -1.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"enabled"),(0,a.kt)("td",{parentName:"tr",align:null},"Flag true to enable promotion, false to disable promotion.")))))}y.isMDXComponent=!0}}]);