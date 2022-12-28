"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[78850],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},62242:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},o="SysGetQuestPage",s={unversionedId:"api/capi/gamification/sysgetquestpage",id:"api/capi/gamification/sysgetquestpage",title:"SysGetQuestPage",description:"Overview",source:"@site/docs/api/2_capi/gamification/sysgetquestpage.md",sourceDirName:"api/2_capi/gamification",slug:"/api/capi/gamification/sysgetquestpage",permalink:"/braincloud-apiref/api/capi/gamification/sysgetquestpage",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/gamification/sysgetquestpage.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysGetMilestonePageOffset",permalink:"/braincloud-apiref/api/capi/gamification/sysgetmilestonepageoffset"},next:{title:"SysGetQuestPageOffset",permalink:"/braincloud-apiref/api/capi/gamification/sysgetquestpageoffset"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=c("PartialServop"),d=c("BrowserWindow"),m=c("Tabs"),g=c("TabItem"),f={toc:p};function y(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sysgetquestpage"},"SysGetQuestPage"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json-doc"},'{\n  "status": 200,\n  "data": {\n    "context": "eyJzZWFyY2hDcml0ZXJpYSI6ey...",\n    "results": {\n      "count": 5,\n      "page": 1,\n      "items": [\n        {\n          "questId": "QUEST_CRUSH50",\n          "questType": "unorderedMinimal",\n          "questData": "0",\n          "title": "Crush 50 Eggs",\n          "description": "Crush 50 Eggs quest",\n          "category": "mission",\n          "extraData": {\n            "difficulty": 1\n          },\n          "rewards": {\n            "experiencePoints": 30,\n            "achievement": "ACH001",\n            "currency": {\n              "coins": 5\n            },\n            "globalStatistics": {\n              "globalxp": 30\n            },\n            "statistics": {\n              "a3": 1,\n              "secretMissions": 1\n            }\n          },\n          "unlockThresholds": {\n            "playerStatistics": {\n              "experienceLevel": 2,\n              "experiencePoints": 10,\n              "statistics": {\n                "levelC": 5\n              }\n            },\n            "globalStatistics": {\n              "level_unlock": 1\n            }\n          },\n          "createdAt": 1574692241409,\n          "updatedAt": 1574692313569,\n          "version": 2,\n          "tasks": [\n            "11"\n          ]\n        },\n        {\n          "questId": "QUEST_CRUSH51",\n          "questType": "unorderedMinimal",\n          "questData": "0",\n          "title": "Crush 50 Eggs",\n          "description": "Crush 50 Eggs quest",\n          "category": "mission",\n          "extraData": {\n            "difficulty": 1\n          },\n          "rewards": {\n            "experiencePoints": 30,\n            "achievement": "ACH001",\n            "currency": {\n              "coins": 5\n            },\n            "globalStatistics": {\n              "globalxp": 30\n            },\n            "statistics": {\n              "a3": 1,\n              "secretMissions": 1\n            }\n          },\n          "unlockThresholds": {\n            "playerStatistics": {\n              "experienceLevel": 2,\n              "experiencePoints": 10,\n              "statistics": {\n                "levelC": 5\n              }\n            },\n            "globalStatistics": {\n              "level_unlock": 1\n            }\n          },\n          "createdAt": 1574801362234,\n          "updatedAt": 1574801362234,\n          "version": 1,\n          "tasks": []\n        }\n      ],\n      "moreAfter": true,\n      "moreBefore": false\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Retrieves the first page of quests. "),(0,r.kt)("p",null,"After retrieving a page of quests with this method use ",(0,r.kt)("a",{parentName:"p",href:"/api/capi/gamification/sysgetquestpageoffset"},"sysGetQuestPageOffset")," to retrieve previous or next pages."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/api/appendix/genericpagedqueries"},"Generic Paged Queries")," documentation for creating the context object."),(0,r.kt)("p",null,"Supported ",(0,r.kt)("inlineCode",{parentName:"p"},"searchCriteria")," fields include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"questId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"title")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"description")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"category")),(0,r.kt)("li",{parentName:"ul"},"and ",(0,r.kt)("inlineCode",{parentName:"li"},"extraData")," fields (must be prefixed by ",(0,r.kt)("inlineCode",{parentName:"li"},"extraData"),") - i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"extraData.actionIndex"))),(0,r.kt)(u,{service_name:"gamification",operation_name:"SYS_GET_QUEST_PAGE",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(d,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(g,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(g,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(g,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(g,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(g,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(g,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var context = {\n    "pagination": {\n        "rowsPerPage": 2,\n        "pageNumber": 1\n    },\n    "searchCriteria": {},\n    "sortCriteria": {\n        "questId": 1\n    }\n};\n\nvar gameficationProxy = bridge.getGamificationServiceProxy();\nvar questPage = gameficationProxy.sysGetQuestPage(context);\n'))),(0,r.kt)(g,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var context = {\n    "pagination": {\n        "rowsPerPage": 2,\n        "pageNumber": 1\n    },\n    "searchCriteria": {},\n    "sortCriteria": {\n        "questId": 1\n    }\n};\n\nvar gameficationProxy = bridge.getGamificationServiceProxy();\nvar questPage = gameficationProxy.sysGetQuestPage(context);\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"context"),(0,r.kt)("td",{parentName:"tr",align:null},"The json context for the page request.")))))}y.isMDXComponent=!0}}]);