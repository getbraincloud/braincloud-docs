"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[45744],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>S});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),o=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=o(a),d=n,S=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return a?r.createElement(S,s(s({ref:t},p),{},{components:a})):r.createElement(S,s({ref:t},p))}));function S(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,s[1]=l;for(var o=2;o<i;o++)s[o]=a[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},63914:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>I,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const i={},s="ProcessStatistics",l={unversionedId:"api/capi/playerstats/processstatistics",id:"api/capi/playerstats/processstatistics",title:"ProcessStatistics",description:"Overview",source:"@site/docs/api/2_capi/playerstats/processstatistics.md",sourceDirName:"api/2_capi/playerstats",slug:"/api/capi/playerstats/processstatistics",permalink:"/braincloud-apiref/api/capi/playerstats/processstatistics",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/playerstats/processstatistics.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671831235,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"IncrementUserStats",permalink:"/braincloud-apiref/api/capi/playerstats/incrementuserstats"},next:{title:"ReadAllUserStats",permalink:"/braincloud-apiref/api/capi/playerstats/readalluserstats"}},c={},o=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=p("PartialServop"),m=p("BrowserWindow"),d=p("Tabs"),S=p("TabItem"),E={toc:o};function I(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},E,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"processstatistics"},"ProcessStatistics"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Apply a set of operations to the specified statistics. User (player) Statistics are defined through the brainCloud portal."),(0,n.kt)("p",null,"The operations available are much richer than the standard ",(0,n.kt)("em",{parentName:"p"},"increment")," operation available via ",(0,n.kt)("inlineCode",{parentName:"p"},"IncrementUserStats()"),"."),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n    "INNING": "INC#1",              // Increment by one\n    "INNINGSREM": "DEC#1",          // Decrement by one\n    "OUTS": "RESET",                // Reset to the defined initial value\n    "POINTS": "INC_TO_LIMIT#5#30",  // Increment by 5, but to a max of 30\n    "PLAYERS": "SET#8",             // Set to the specified value\n    "HIGHESTHR": "MAX#3",           // Set to the specified value if larger\n    "ESTIMATE": "MIN#5",            // Set to the specified value if smaller\n    "GAME" : "5"                    // Missing stat grammar will treat the operation as an increment\n}\n')),(0,n.kt)("p",null,"The above example would:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Increment ",(0,n.kt)("inlineCode",{parentName:"li"},"INNING")," by ",(0,n.kt)("inlineCode",{parentName:"li"},"1")),(0,n.kt)("li",{parentName:"ul"},"Decrement ",(0,n.kt)("inlineCode",{parentName:"li"},"INNINGSREM")," by ",(0,n.kt)("inlineCode",{parentName:"li"},"1")),(0,n.kt)("li",{parentName:"ul"},"Reset ",(0,n.kt)("inlineCode",{parentName:"li"},"OUTS")," to its pre-defined initial value"),(0,n.kt)("li",{parentName:"ul"},"Increment ",(0,n.kt)("inlineCode",{parentName:"li"},"POINTS")," by ",(0,n.kt)("inlineCode",{parentName:"li"},"5"),", but to a maximum of ",(0,n.kt)("inlineCode",{parentName:"li"},"30")),(0,n.kt)("li",{parentName:"ul"},"Set ",(0,n.kt)("inlineCode",{parentName:"li"},"PLAYERS")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"8")),(0,n.kt)("li",{parentName:"ul"},"Set ",(0,n.kt)("inlineCode",{parentName:"li"},"HIGHESTHR")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"3"),", or remain at current higher value"),(0,n.kt)("li",{parentName:"ul"},"Set ",(0,n.kt)("inlineCode",{parentName:"li"},"ESTIMATE")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"5"),", or remain at current lower value"),(0,n.kt)("li",{parentName:"ul"},"Increment ",(0,n.kt)("inlineCode",{parentName:"li"},"GAME")," by ",(0,n.kt)("inlineCode",{parentName:"li"},"5"))),(0,n.kt)("p",null,"For the full statistics grammar see the ",(0,n.kt)("a",{parentName:"p",href:"/api/appendix/statisticsgrammar"},"statistics grammar section"),"."),(0,n.kt)(u,{service_name:"playerStatistics",operation_name:"PROCESS_STATISTICS",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(m,{mdxType:"BrowserWindow"},(0,n.kt)(d,{mdxType:"Tabs"},(0,n.kt)(S,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'string statistics = "{\\"DEAD_CATS\\":\\"RESET\\",\\"LIVES_LEFT\\":\\"SET#9\\",\\"MICE_KILLED\\":\\"INC#2\\",\\"MICE_MULTIPLIER\\":\\"INC_TO_LIMIT#2#20\\",\\"DOG_SCARE_BONUS_POINTS\\":\\"MAX#20\\",\\"TREES_CLIMBED_REQ\\":\\"MIN#5\\"}";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.PlayerStatisticsService.ProcessStatistics(statistics, successCallback, failureCallback);\n'))),(0,n.kt)(S,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *statistics = "{\\"DEAD_CATS\\":\\"RESET\\",\\"LIVES_LEFT\\":\\"SET#9\\",\\"MICE_KILLED\\":\\"INC#2\\",\\"MICE_MULTIPLIER\\":\\"INC_TO_LIMIT#2#20\\",\\"DOG_SCARE_BONUS_POINTS\\":\\"MAX#20\\",\\"TREES_CLIMBED_REQ\\":\\"MIN#5\\"}";\n_bc->getPlayerStatisticsService()->processStatistics(statistics, this);\n'))),(0,n.kt)(S,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *statistics = @"{\\"DEAD_CATS\\":\\"RESET\\",\\"LIVES_LEFT\\":\\"SET#9\\",\\"MICE_KILLED\\":\\"INC#2\\",\\"MICE_MULTIPLIER\\":\\"INC_TO_LIMIT#2#20\\",\\"DOG_SCARE_BONUS_POINTS\\":\\"MAX#20\\",\\"TREES_CLIMBED_REQ\\":\\"MIN#5\\"}";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc playerStatisticsService] processStatistics:statistics\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,n.kt)(S,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String statistics = "{\\"DEAD_CATS\\":\\"RESET\\",\\"LIVES_LEFT\\":\\"SET#9\\",\\"MICE_KILLED\\":\\"INC#2\\",\\"MICE_MULTIPLIER\\":\\"INC_TO_LIMIT#2#20\\",\\"DOG_SCARE_BONUS_POINTS\\":\\"MAX#20\\",\\"TREES_CLIMBED_REQ\\":\\"MIN#5\\"}";\nthis; // implements IServerCallback\n\n_bc.getPlayerStatisticsService().processStatistics(statistics, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,n.kt)(S,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var statistics = {\n    "DEAD_CATS": "RESET",\n    "LIVES_LEFT": "SET#9",\n    "MICE_KILLED": "INC#2",\n    "MICE_MULTIPLIER": "INC_TO_LIMIT#2#20",\n    "DOG_SCARE_BONUS_POINTS": "MAX#20",\n    "TREES_CLIMBED_REQ": "MIN#5"\n};\n\n_bc.playerStatistics.processStatistics(statistics, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)(S,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var statistics = {\n    "DEAD_CATS": "RESET",\n    "LIVES_LEFT": "SET#9",\n    "MICE_KILLED": "INC#2",\n    "MICE_MULTIPLIER": "INC_TO_LIMIT#2#20",\n    "DOG_SCARE_BONUS_POINTS": "MAX#20",\n    "TREES_CLIMBED_REQ": "MIN#5"\n};\nvar playerStatisticsProxy = bridge.getPlayerStatisticsServiceProxy();\n\nvar postResult = playerStatisticsProxy.processStatistics(statistics);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,n.kt)(S,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "playerStatistics",\n    "operation": "PROCESS_STATISTICS",\n    "data": {\n        "statistics": {\n            "DEAD_CATS": "RESET",\n            "LIVES_LEFT": "SET#9",\n            "MICE_KILLED": "INC#2",\n            "MICE_MULTIPLIER": "INC_TO_LIMIT#2#20",\n            "DOG_SCARE_BONUS_POINTS": "MAX#20",\n            "TREES_CLIMBED_REQ": "MIN#5"\n        }\n    }\n}\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "statistics": {\n            "TestStat": 162\n        }\n    }\n}\n'))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"statistics"),(0,n.kt)("td",{parentName:"tr",align:null},"The stats data to be passed to the method")))))}I.isMDXComponent=!0}}]);