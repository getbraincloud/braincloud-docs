"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[19519],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i="SysGetMilestonePageOffset",s={unversionedId:"api/capi/gamification/sysgetmilestonepageoffset",id:"api/capi/gamification/sysgetmilestonepageoffset",title:"SysGetMilestonePageOffset",description:"Overview",source:"@site/docs/api/2_capi/gamification/sysgetmilestonepageoffset.md",sourceDirName:"api/2_capi/gamification",slug:"/api/capi/gamification/sysgetmilestonepageoffset",permalink:"/braincloud-apiref/api/capi/gamification/sysgetmilestonepageoffset",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/gamification/sysgetmilestonepageoffset.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysGetMilestonePage",permalink:"/braincloud-apiref/api/capi/gamification/sysgetmilestonepage"},next:{title:"SysGetQuestPage",permalink:"/braincloud-apiref/api/capi/gamification/sysgetquestpage"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=p("PartialServop"),d=p("BrowserWindow"),u=p("Tabs"),g=p("TabItem"),f={toc:c};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sysgetmilestonepageoffset"},"SysGetMilestonePageOffset"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json-doc"},'{\n  "status": 200,\n  "data": {\n    "context": "eyJzZWFyY2hDcml0ZXa...",\n    "results": {\n      "count": 3,\n      "page": 2,\n      "items": [\n        {\n          "milestoneId": "3",\n          "questId": null,\n          "title": "Egg Crusher",\n          "description": "Crushing Eggs lifetime milestone",\n          "category": "mission",\n          "extraData": {\n            "batmanIs": "awesome2"\n          },\n          "rewards": {\n            "experiencePoints": 30,\n            "achievement": "ACH001",\n            "currency": {\n              "coins": 5\n            },\n            "globalStatistics": {\n              "globalxp": 30\n            },\n            "statistics": {\n              "a3": 1,\n              "secretMissions": 1\n            }\n          },\n          "thresholds": {\n            "playerStatistics": {\n              "experienceLevel": 1,\n              "experiencePoints": 10,\n              "statistics": {\n                "returningDay": 7\n              }\n            }\n          },\n          "unlockThresholds": {\n            "playerStatistics": {\n              "experienceLevel": 2,\n              "experiencePoints": 10,\n              "statistics": {\n                "foodc": 5\n              }\n            },\n            "globalStatistics": {\n              "food_unlock": 1\n            }\n          },\n          "createdAt": 1574691758570,\n          "updatedAt": 1574691922583,\n          "version": 4\n        }\n      ],\n      "moreAfter": false,\n      "moreBefore": true\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Retrieves the next/prev page of milestones. "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note that this call does not return milestones (i.e. tasks) that are embedded within Quests. Use the Quests API for those.")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/api/appendix/genericpagedqueries"},"Generic Paged Queries")," documentation for creating the context object."),(0,r.kt)(m,{service_name:"gamification",operation_name:"SYS_GET_MILESTONE_PAGE_OFFSET",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(d,{mdxType:"BrowserWindow"},(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(g,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(g,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(g,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(g,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(g,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(g,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var context = {\n    "pagination": {\n        "rowsPerPage": 2,\n        "pageNumber": 1\n    },\n    "searchCriteria": {},\n    "sortCriteria": {\n        "milestoneId": 1\n    }\n};\n\nvar gameficationProxy = bridge.getGamificationServiceProxy();\nvar milestonePage = gameficationProxy.sysGetMilestonePage(context);\nvar encodedContext = "";\n\nif ( milestonePage.status == 200 ) {\n  if ( milestonePage.data.results.moreAfter == true ) {\n\n    //...\n\n    // Get the next page...\n    encodedContext = milestonePage.data.context;\n    milestonePage = gamificationProxy.sysGetMilestonePageOffset(encodedContext, 1);\n    if ( milestonePage.status == 200 ) {\n\n      // Success!\n    \n    }\n  }\n\n}\n'))),(0,r.kt)(g,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var context = {\n    "pagination": {\n        "rowsPerPage": 2,\n        "pageNumber": 1\n    },\n    "searchCriteria": {},\n    "sortCriteria": {\n        "milestoneId": 1\n    }\n};\n\nvar gameficationProxy = bridge.getGamificationServiceProxy();\nvar milestonePage = gameficationProxy.sysGetMilestonePage(context);\nvar encodedContext = "";\n\nif ( milestonePage.status == 200 ) {\n  if ( milestonePage.data.results.moreAfter == true ) {\n\n    //...\n\n    // Get the next page...\n    encodedContext = milestonePage.data.context;\n    milestonePage = gamificationProxy.sysGetMilestonePageOffset(encodedContext, 1);\n    if ( milestonePage.status == 200 ) {\n\n      // Success!\n    \n    }\n  }\n\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"encodedContext"),(0,r.kt)("td",{parentName:"tr",align:null},"The json context from the previous page request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageOffset"),(0,r.kt)("td",{parentName:"tr",align:null},"The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.")))))}y.isMDXComponent=!0}}]);