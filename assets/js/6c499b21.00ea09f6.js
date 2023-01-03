"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[10193],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,y=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return a?r.createElement(y,s(s({ref:t},c),{},{components:a})):r.createElement(y,s({ref:t},c))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7957:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>v,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={},s="SysDeleteEntities",i={unversionedId:"api/s2s/customentity/sysdeleteentities",id:"api/s2s/customentity/sysdeleteentities",title:"SysDeleteEntities",description:"Overview",source:"@site/docs/api/4_s2s/customentity/sysdeleteentities.md",sourceDirName:"api/4_s2s/customentity",slug:"/api/s2s/customentity/sysdeleteentities",permalink:"/braincloud-apiref/api/s2s/customentity/sysdeleteentities",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/4_s2s/customentity/sysdeleteentities.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysCreateIndex",permalink:"/braincloud-apiref/api/s2s/customentity/syscreateindex"},next:{title:"SysDropIndex",permalink:"/braincloud-apiref/api/s2s/customentity/sysdropindex"}},o={},p=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},d=c("PartialServop"),u=c("BrowserWindow"),m=c("Tabs"),y=c("TabItem"),b={toc:p};function v(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sysdeleteentities"},"SysDeleteEntities"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Deletes all applicable custom entities from the server based on the custom entity type, specified delete criteria and acrossAllUsers flag, bypassing ownership/ACL checks."),(0,n.kt)(d,{service_name:"customEntity",operation_name:"SYS_DELETE_ENTITIES",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(u,{mdxType:"BrowserWindow"},(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(y,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,n.kt)(y,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,n.kt)(y,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,n.kt)(y,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,n.kt)(y,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,n.kt)(y,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var entityType = "athletes";\nvar deleteCriteria = {\n    "entityId": { "$in":\n        ["aaaa-bbbb-cccc-dddd", "ffff-gggg-hhhh-iiii", "jjjj-kkkk-llll-mmmm"]\n    }\n};\nvar acrossAllUsers = true;\nvar customEntityProxy = bridge.getCustomEntityServiceProxy();\n\nvar postResult = customEntityProxy.sysDeleteEntities(entityType, deleteCriteria, acrossAllUsers);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,n.kt)(y,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'//ownerId(s) is needed to specify for the owned custom entities only. Or, setting acrossAllUsers to true\n{\n    "service": "customEntity",\n    "operation": "SYS_DELETE_ENTITIES",\n    "data": {\n        "entityType": "athletes",\n        "deleteCriteria": {\n            "entityId": { "$in":\n                ["aaaa-bbbb-cccc-dddd", "ffff-gggg-hhhh-iiii", "jjjj-kkkk-llll-mmmm"]\n            },\n            "ownerId":"e7688d66-bf31-4d5c-a0f4-da97628531a3"\n        },\n        "acrossAllUsers": false\n    }\n}\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "deletedCount": 3\n  },\n  "status": 200\n}\n'))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"entityType"),(0,n.kt)("td",{parentName:"tr",align:null},"The type of custom entity being deleted.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"deleteCriteria"),(0,n.kt)("td",{parentName:"tr",align:null},"The delete criteria to be applied.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"acrossAllUsers"),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean indicating whether delete is to be applied to all users (true) or not (false), when custom entities are owned.")))))}v.isMDXComponent=!0}}]);