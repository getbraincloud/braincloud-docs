"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[46268],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},36042:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},i="SysDeleteEntities",o={unversionedId:"api/capi/customentity/sysdeleteentities",id:"api/capi/customentity/sysdeleteentities",title:"SysDeleteEntities",description:"Overview",source:"@site/docs/api/2_capi/customentity/sysdeleteentities.md",sourceDirName:"api/2_capi/customentity",slug:"/api/capi/customentity/sysdeleteentities",permalink:"/braincloud-apiref/api/capi/customentity/sysdeleteentities",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/customentity/sysdeleteentities.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysCreateIndex",permalink:"/braincloud-apiref/api/capi/customentity/syscreateindex"},next:{title:"SysDeleteEntity",permalink:"/braincloud-apiref/api/capi/customentity/sysdeleteentity"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=c("PartialServop"),u=c("BrowserWindow"),m=c("Tabs"),y=c("TabItem"),b={toc:p};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sysdeleteentities"},"SysDeleteEntities"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Deletes all applicable custom entities from the server based on the custom entity type, specified delete criteria and acrossAllUsers flag, bypassing ownership/ACL checks."),(0,r.kt)(d,{service_name:"customEntity",operation_name:"SYS_DELETE_ENTITIES",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(u,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(y,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(y,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(y,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(y,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(y,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(y,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var entityType = "athletes";\nvar deleteCriteria = {\n    "entityId": { "$in":\n        ["aaaa-bbbb-cccc-dddd", "ffff-gggg-hhhh-iiii", "jjjj-kkkk-llll-mmmm"]\n    }\n};\nvar acrossAllUsers = true;\nvar customEntityProxy = bridge.getCustomEntityServiceProxy();\n\nvar postResult = customEntityProxy.sysDeleteEntities(entityType, deleteCriteria, acrossAllUsers);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(y,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'//ownerId(s) is needed to specify for the owned custom entities only. Or, setting acrossAllUsers to true\n{\n    "service": "customEntity",\n    "operation": "SYS_DELETE_ENTITIES",\n    "data": {\n        "entityType": "athletes",\n        "deleteCriteria": {\n            "entityId": { "$in":\n                ["aaaa-bbbb-cccc-dddd", "ffff-gggg-hhhh-iiii", "jjjj-kkkk-llll-mmmm"]\n            },\n            "ownerId":"e7688d66-bf31-4d5c-a0f4-da97628531a3"//the ownerId is only needed for the owned custom entities. Or, set acrossAllUsers to true\n        },\n        "acrossAllUsers": false\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "deletedCount": 3\n  },\n  "status": 200\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entityType"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of custom entity being deleted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deleteCriteria"),(0,r.kt)("td",{parentName:"tr",align:null},"The delete criteria to be applied.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"acrossAllUsers"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean indicating whether delete is to be applied to all users (true) or not (false), when custom entities are owned.")))))}f.isMDXComponent=!0}}]);