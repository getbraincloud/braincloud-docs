"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[83373],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>b});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),p=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=p(e.components);return r.createElement(i.Provider,{value:a},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=p(t),m=n,b=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return t?r.createElement(b,l(l({ref:a},c),{},{components:t})):r.createElement(b,l({ref:a},c))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=m;var d={};for(var i in a)hasOwnProperty.call(a,i)&&(d[i]=a[i]);d.originalType=e,d[s]="string"==typeof e?e:n,l[1]=d;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6899:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>v,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var r=t(87462),n=(t(67294),t(3905));const o={},l="CreateLeaderboard",d={unversionedId:"api/capi/leaderboard/createleaderboard",id:"api/capi/leaderboard/createleaderboard",title:"CreateLeaderboard",description:"Overview",source:"@site/docs/api/2_capi/leaderboard/createleaderboard.md",sourceDirName:"api/2_capi/leaderboard",slug:"/api/capi/leaderboard/createleaderboard",permalink:"/braincloud-apiref/api/capi/leaderboard/createleaderboard",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/leaderboard/createleaderboard.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Leaderboard",permalink:"/braincloud-apiref/api/capi/leaderboard/"},next:{title:"DeleteLeaderboards",permalink:"/braincloud-apiref/api/capi/leaderboard/deleteleaderboards"}},i={},p=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",a)},s=c("PartialServop"),u=c("BrowserWindow"),m=c("Tabs"),b=c("TabItem"),y={toc:p};function v(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"createleaderboard"},"CreateLeaderboard"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"WARNING: This call, ",(0,n.kt)("code",null,"CreateLeaderboard()"),", will be deprecated and replaced with ",(0,n.kt)("code",null,"SysCreateLeaderboard()"),".")),(0,n.kt)("p",null,"Creates a leaderboard under the context of the current game. You can optionally send a user-defined json string of data with the created leaderboard. This string could include information relevant to the created leaderboard."),(0,n.kt)(s,{service_name:"leaderboard",operation_name:"CREATE_LEADERBOARD",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(u,{mdxType:"BrowserWindow"},(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(b,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"//cloud code only\n"))),(0,n.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"//cloud code only\n"))),(0,n.kt)(b,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"//cloud code only\n"))),(0,n.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"//cloud code only\n"))),(0,n.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"//cloud code only\n"))),(0,n.kt)(b,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var leaderboardId = "testCreate";\nvar type = "HIGH_VALUE";\nvar rotationType = "WEEKLY";\nvar rotationReset = Date.now();\nvar versionsToRetain = 6;\nvar data = { "test": 1234 };\n\nvar leaderboardProxy = bridge.getLeaderboardServiceProxy();\nvar retVal = leaderboardProxy.createLeaderboard(\n    leaderboardId,\n    type,\n    rotationType,\n    rotationReset,\n    versionsToRetain,\n    data\n);\n\n//For DAYS rotation type\n\nvar leaderboardId = "testCreate";\nvar type = "HIGH_VALUE";\nvar rotationType = "DAYS";\nvar rotationReset = Date.now();\nvar versionsToRetain = 6;\nvar data = { "test": 1234 };\nvar numDaysToRotate = 3;\n\nvar leaderboardProxy = bridge.getLeaderboardServiceProxy();\nvar retVal = leaderboardProxy.createLeaderboard(\n    leaderboardId,\n    type,\n    rotationType,\n    rotationReset,\n    versionsToRetain,\n    data,\n    numDaysToRotate\n);\n'))),(0,n.kt)(b,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "leaderboard",\n    "operation": "CREATE_LEADERBOARD",\n    "data": {\n        "leaderboardId": "default",\n        "leaderboardType": "HIGH_VALUE",\n        "rotationType": "DAYS",\n        "rotationResetTime": "[[#ts+60000]]",\n        "retainedCount": 2,\n        "numDaysToRotate": 5,\n        "data": {\n            "street": "1309 Carling"\n        }\n    }\n}\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": null\n}\n'))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"leaderboardId"),(0,n.kt)("td",{parentName:"tr",align:null},"The leaderboard to create")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"leaderboardType"),(0,n.kt)("td",{parentName:"tr",align:null},"Leaderboard type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rotationType"),(0,n.kt)("td",{parentName:"tr",align:null},"Type of rotation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rotationReset"),(0,n.kt)("td",{parentName:"tr",align:null},"Date to start the rotation (date in millis)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"retainedCount"),(0,n.kt)("td",{parentName:"tr",align:null},"How many previous rotations to keep")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional user-defined data to relevant to the created leaderboard")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"numDaysToRotate"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional parameter for use only with DAYS rotation type")))))}v.isMDXComponent=!0}}]);