"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[83716],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,g=p["".concat(d,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},i="SysCreateAdhocTournamentPeriod",l={unversionedId:"api/capi/leaderboard/syscreateadhoctournamentperiod",id:"api/capi/leaderboard/syscreateadhoctournamentperiod",title:"SysCreateAdhocTournamentPeriod",description:"Overview",source:"@site/docs/api/2_capi/leaderboard/syscreateadhoctournamentperiod.md",sourceDirName:"api/2_capi/leaderboard",slug:"/api/capi/leaderboard/syscreateadhoctournamentperiod",permalink:"/braincloud-apiref/api/capi/leaderboard/syscreateadhoctournamentperiod",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/leaderboard/syscreateadhoctournamentperiod.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"RemovePlayerScore",permalink:"/braincloud-apiref/api/capi/leaderboard/removeplayerscore"},next:{title:"SysCreateLeaderboard",permalink:"/braincloud-apiref/api/capi/leaderboard/syscreateleaderboard"}},d={},s=[{value:"Overview",id:"overview",level:2},{value:"Configuration fields of <strong>tSettingsJson</strong>",id:"configuration-fields-of-tsettingsjson",level:4},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=u("PartialServop"),c=u("BrowserWindow"),m=u("Tabs"),g=u("TabItem"),f={toc:s};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"syscreateadhoctournamentperiod"},"SysCreateAdhocTournamentPeriod"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Schedules a new tournament period for the ADHOC leaderboard configuration. Tournament must be scheduled in the future. Tournament settings ('tSettingsJson') must include tournament period ('tPeriod'), tournament configs and associated flags ('tTournament') and tournament phases ('tPhases')."),(0,r.kt)("h4",{id:"configuration-fields-of-tsettingsjson"},"Configuration fields of ",(0,r.kt)("strong",{parentName:"h4"},"tSettingsJson")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tPeriod"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Defines the UTC 'startingAt' time and the duration: 'durationDays', 'durationDays', 'durationDays'. Period cannot overlap with any other ADHOC period(s), future or in-progress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tTournament"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Must specify 'tConfigs' defining the tournament configuration code(s) ('tConfigCode') and tournament template version(s) ('activeUpUntil', set to -1 to pick up latest version of tournament template at time of rotation, or optionally set to a maximum fixed version) for the ADHOC period, as well as 'tAutoClaim' flag indicating whether users can automatically claim tournament rewards on login, and 'tAutoJoin' flag indicating whether users automatically join the tournament on posting score (must be free entry and only 1 tournament configured)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tPhases"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Defines the phases, in minutes, within the start and end period times. The total time for the enabled phases cannot exceed the overall length of the period. The competition minutes are calculated and must be greater than 0. Configurable phases: 'enrolMins', 'disallowMins', 'minMins', 'bufferMins', 'announcementMins'; and, if ADHOC tournament in progress, tournament settings may include 'tPeriod' duration settings: 'durationDays', 'durationDays', 'durationDays', which may affect endingAt time and cannot overlap with any future ADHOC periods scheduled")))),(0,r.kt)(p,{service_name:"leaderboard",operation_name:"SYS_CREATE_ADHOC_TOURNAMENT_PERIOD",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(c,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(g,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"//cloud code only\n"))),(0,r.kt)(g,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"//cloud code only\n"))),(0,r.kt)(g,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"//cloud code only\n"))),(0,r.kt)(g,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"//cloud code only\n"))),(0,r.kt)(g,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"//cloud code only\n"))),(0,r.kt)(g,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var leaderboardId = "default";\nvar dbVersion = 1;\nvar tSettingsJson = {\n    "tPeriod": {\n        "startingAt": 1631895835000,\n        "durationDays": 2,\n        "durationHours": 0,\n        "durationMinutes": 0\n    },\n    "tTournament": {\n        "tConfigs": {\n            "goldLevel": {\n                "tConfigCode": "goldLevel",\n                "activeUpUntil": -1\n            },\n            "silverLevel": {\n                "tConfigCode": "silverLevel",\n                "activeUpUntil": -1\n            }\n        },\n        "tAutoJoin": false,\n        "tAutoClaim": false\n    },\n    "tPhases": {\n        "enrolMins": 60,\n        "announcementMins": 15,\n        "disallowMins": 0,\n        "bufferMins": 10\n    }\n};              \n\nvar leaderboardProxy = bridge.getLeaderboardServiceProxy();\nvar retVal = leaderboardProxy.sysCreateAdhocTournamentPeriod(\n    leaderboardId,\n    dbVersion,\n    tSettingsJson\n);\n'))),(0,r.kt)(g,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "leaderboard",\n    "operation": "SYS_CREATE_ADHOC_TOURNAMENT_PERIOD",\n    "data": {\n        "leaderboardId": "aLeaderboardId",\n        "dbVersion": 1,\n        "tSettingsJson":  {\n            "tPeriod": {\n                "startingAt": 1631895835000,\n                "durationDays": 2,\n                "durationHours": 0,\n                "durationMinutes": 0\n            },\n            "tTournament": {\n                "tConfigs": {\n                    "goldLevel": {\n                        "tConfigCode": "goldLevel",\n                        "activeUpUntil": -1\n                    },\n                    "silverLevel": {\n                        "tConfigCode": "silverLevel",\n                        "activeUpUntil": -1\n                    }\n                },\n                "tAutoJoin": false,\n                "tAutoClaim": false\n            },\n            "tPhases": {\n                "enrolMins": 60,\n                "announcementMins": 15,\n                "disallowMins": 0,\n                "bufferMins": 10\n            }\n        }\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "aLeaderboardIdC": {\n      "leaderboardId": "aLeaderboardId",\n      "dbVersion": 3,\n      "resetAt": 1635895835000,\n      "leaderboardType": "HIGH_VALUE",\n      "rotationType": "ADHOC",\n      "retainedCount": 5,\n      "data": {},\n      "numDaysToRotate": 0,\n      "entryType": "PLAYER",\n      "tEnabled": true,\n      "tScheduled": [\n        {\n          "startingAt": 1635895835000,\n          "endingAt": 1636068635000,\n          "tConfigs": {\n            "silverLevel": {\n              "activeUpUntil": -1,\n              "tConfigCode": "silverLevel"\n            },\n            "goldLevel": {\n              "activeUpUntil": -1,\n              "tConfigCode": "goldLevel"\n            }\n          },\n          "tStates": {\n            "enrolMins": 60,\n            "disallowMins": 0,\n            "minMins": 2865,\n            "compMins": 2795,\n            "bufferMins": 10,\n            "announcementMins": 15\n          },\n          "tAutoJoin": false,\n          "tAutoClaim": false\n        }\n      ],\n      "tTemplateOnly": false,\n      "currentVersionId": 1,\n      "currentPeriod": {\n        "versionId": 1,\n        "startingAt": 1632253445307,\n        "endingAt": 1635895835000,\n        "rotationType": "ADHOC",\n        "numDaysToRotate": 0\n      }\n    }\n  },\n  "status": 200\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"leaderboardId"),(0,r.kt)("td",{parentName:"tr",align:null},"ID uniquely identifying the leaderboard configuration to edit. Leaderboard must be configured with ADHOC rotation type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dbVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"The database version of the leaderboard config being edited. For any version, specify -1.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tSettingsJson"),(0,r.kt)("td",{parentName:"tr",align:null},"Tournament settings for the new ADHOC tournament period being scheduled.")))))}b.isMDXComponent=!0}}]);