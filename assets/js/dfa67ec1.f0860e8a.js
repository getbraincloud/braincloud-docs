"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[3428],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,b=u["".concat(i,".").concat(m)]||u[m]||c[m]||o;return a?r.createElement(b,l(l({ref:t},s),{},{components:a})):r.createElement(b,l({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[u]="string"==typeof e?e:n,l[1]=d;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19655:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>v,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={},l="EditLeaderboard",d={unversionedId:"api/capi/leaderboard/editleaderboard",id:"api/capi/leaderboard/editleaderboard",title:"EditLeaderboard",description:"Overview",source:"@site/docs/api/2_capi/leaderboard/editleaderboard.md",sourceDirName:"api/2_capi/leaderboard",slug:"/api/capi/leaderboard/editleaderboard",permalink:"/braincloud-apiref/api/capi/leaderboard/editleaderboard",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/leaderboard/editleaderboard.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"DeleteLeaderboards",permalink:"/braincloud-apiref/api/capi/leaderboard/deleteleaderboards"},next:{title:"GetGlobalLeaderboardEntryCount",permalink:"/braincloud-apiref/api/capi/leaderboard/getgloballeaderboardentrycount"}},i={},p=[{value:"Overview",id:"overview",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=s("PartialServop"),c=s("BrowserWindow"),m=s("Tabs"),b=s("TabItem"),y={toc:p};function v(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"editleaderboard"},"EditLeaderboard"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"WARNING: This call, ",(0,n.kt)("code",null,"EditLeaderboard()"),", will be deprecated and replaced with ",(0,n.kt)("code",null,"SysEditLeaderboard()"),".")),(0,n.kt)("p",null,"Edits a existing leaderboard under the context of the current game. You can optionally send a user-defined json string of data with the edit leaderboard. This string could include information relevant to the edited leaderboard."),(0,n.kt)("h3",{id:"status-codes"},"Status Codes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Code"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"40499"),(0,n.kt)("td",{parentName:"tr",align:null},"NO_LEADERBOARD_FOUND"),(0,n.kt)("td",{parentName:"tr",align:null},"No leaderboard with given leaderboardId")))),(0,n.kt)(u,{service_name:"leaderboard",operation_name:"EDIT_LEADERBOARD",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(c,{mdxType:"BrowserWindow"},(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(b,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"//cloud code only\n"))),(0,n.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"//cloud code only\n"))),(0,n.kt)(b,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"//cloud code only\n"))),(0,n.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"//cloud code only\n"))),(0,n.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"//cloud code only\n"))),(0,n.kt)(b,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var leaderboardId = "testEdit";\nvar type = "HIGH_VALUE";\nvar rotationType = "WEEKLY";\nvar rotationReset = Date.now();\nvar versionsToRetain = 6;\nvar data = { "test": 1234 };\n\nvar leaderboardProxy = bridge.getLeaderboardServiceProxy();\nvar retVal = leaderboardProxy.editLeaderboard(\n    leaderboardId,\n    type,\n    rotationType,\n    rotationReset,\n    versionsToRetain,\n    data\n);\n\n// For DAYS rotation type\n\nvar leaderboardId = "testEdit";\nvar type = "HIGH_VALUE";\nvar rotationType = "DAYS";\nvar rotationReset = Date.now();\nvar versionsToRetain = 6;\nvar data = { "test": 1234 };\nvar numDaysToRotate = 3;\n\nvar leaderboardProxy = bridge.getLeaderboardServiceProxy();\nvar retVal = leaderboardProxy.editLeaderboard(\n    leaderboardId,\n    type,\n    rotationType,\n    rotationReset,\n    versionsToRetain,\n    data,\n    numDaysToRotate\n);\n'))),(0,n.kt)(b,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "leaderboard",\n    "operation": "EDIT_LEADERBOARD",\n    "data": {\n        "leaderboardId": "default",\n        "leaderboardType": "HIGH_VALUE",\n        "rotationType": "DAYS",\n        "rotationResetTime": "[[#ts+60000]]",\n        "retainedCount": 2,\n        "numDaysToRotate": 5,\n        "data": {\n            "street": "1309 Carling Avenue"\n        }\n    }\n}\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": null\n}\n'))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"leaderboardId"),(0,n.kt)("td",{parentName:"tr",align:null},"The leaderboard to edit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional user-defined data to relevant to the edited leaderboard")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"leaderboardType"),(0,n.kt)("td",{parentName:"tr",align:null},"Leaderboard type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rotationType"),(0,n.kt)("td",{parentName:"tr",align:null},"Type of rotation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rotationReset"),(0,n.kt)("td",{parentName:"tr",align:null},"Date to start the rotation (date in millis)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"retainedCount"),(0,n.kt)("td",{parentName:"tr",align:null},"How many previous rotations to keep")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"numDaysToRotate"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional parameter for use only with DAYS rotation type")))))}v.isMDXComponent=!0}}]);