"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[96400],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var r=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=r.createContext({}),o=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=o(a),m=s,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||n;return a?r.createElement(b,l(l({ref:t},p),{},{components:a})):r.createElement(b,l({ref:t},p))}));function b(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,l=new Array(n);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:s,l[1]=i;for(var o=2;o<n;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},89307:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>n,metadata:()=>i,toc:()=>o});var r=a(87462),s=(a(67294),a(3905));const n={},l="ResetAllUserStats",i={unversionedId:"api/capi/playerstats/resetalluserstats",id:"api/capi/playerstats/resetalluserstats",title:"ResetAllUserStats",description:"Overview",source:"@site/docs/api/2_capi/playerstats/resetalluserstats.md",sourceDirName:"api/2_capi/playerstats",slug:"/api/capi/playerstats/resetalluserstats",permalink:"/braincloud-apiref/api/capi/playerstats/resetalluserstats",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/playerstats/resetalluserstats.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"ReadUserStatsSubset",permalink:"/braincloud-apiref/api/capi/playerstats/readuserstatssubset"},next:{title:"SetExperiencePoints",permalink:"/braincloud-apiref/api/capi/playerstats/setexperiencepoints"}},c={},o=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},u=p("PartialServop"),d=p("BrowserWindow"),m=p("Tabs"),b=p("TabItem"),v={toc:o};function y(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"resetalluserstats"},"ResetAllUserStats"),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"Reset all of the statistics for this user back to their initial value."),(0,s.kt)(u,{service_name:"playerStatistics",operation_name:"RESET",mdxType:"PartialServop"}),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)(d,{mdxType:"BrowserWindow"},(0,s.kt)(m,{mdxType:"Tabs"},(0,s.kt)(b,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'SuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.PlayerStatisticsService.ResetAllUserStats(successCallback, failureCallback);\n'))),(0,s.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"_bc->getPlayerStatisticsService()->resetAllUserStats(this);\n"))),(0,s.kt)(b,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-objectivec"},"BCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc playerStatisticsService] resetAllUserStats:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n"))),(0,s.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'this; // implements IServerCallback\n\n_bc.getPlayerStatisticsService().resetAllUserStats(this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,s.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'_bc.playerStatistics.resetAllUserStats(result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,s.kt)(b,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cfscript"},"var playerStatisticsProxy = bridge.getPlayerStatisticsServiceProxy();\n\nvar postResult = playerStatisticsProxy.resetAllUserStats();\nif (postResult.status == 200) {\n    // Success!\n}\n"))),(0,s.kt)(b,{value:"r",label:"Raw",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "playerStatistics",\n    "operation": "RESET",\n    "data": {}\n}\n'))))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"JSON Response"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "milestones": {\n            "1": "UNLOCKED",\n            "2": "UNLOCKED"\n        },\n        "xpCapped": false,\n        "experiencePoints": 0,\n        "quests": {\n            "Test Quest 2": "UNLOCKED",\n            "Test Quest 1": "UNLOCKED"\n        },\n        "playerAchievements": [],\n        "experienceLevel": 0,\n        "statistics": {\n            "RoundsWon": 0,\n            "RoundsLost": 0,\n            "DifficultyChanges": 0,\n            "RoundsFinished": 0\n        }\n    }\n}\n'))))}y.isMDXComponent=!0}}]);