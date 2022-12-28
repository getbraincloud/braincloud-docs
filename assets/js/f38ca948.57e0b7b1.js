"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[2019],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>S});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),N=r,S=m["".concat(o,".").concat(N)]||m[N]||u[N]||i;return a?n.createElement(S,s(s({ref:t},p),{},{components:a})):n.createElement(S,s({ref:t},p))}));function S(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=N;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},70579:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>I,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={},s="ProcessStatistics",l={unversionedId:"api/capi/globalstats/processstatistics",id:"api/capi/globalstats/processstatistics",title:"ProcessStatistics",description:"Overview",source:"@site/docs/api/2_capi/globalstats/processstatistics.md",sourceDirName:"api/2_capi/globalstats",slug:"/api/capi/globalstats/processstatistics",permalink:"/braincloud-apiref/api/capi/globalstats/processstatistics",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/globalstats/processstatistics.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671831235,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"IncrementGlobalStats",permalink:"/braincloud-apiref/api/capi/globalstats/incrementglobalstats"},next:{title:"ReadAllGlobalStats",permalink:"/braincloud-apiref/api/capi/globalstats/readallglobalstats"}},o={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=p("PartialServop"),u=p("BrowserWindow"),N=p("Tabs"),S=p("TabItem"),d={toc:c};function I(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"processstatistics"},"ProcessStatistics"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Apply statistics grammar to a partial set of statistics. Global statistics are defined through the brainCloud portal."),(0,r.kt)("p",null,"The operations available are much richer than the standard ",(0,r.kt)("em",{parentName:"p"},"increment")," operation available via ",(0,r.kt)("inlineCode",{parentName:"p"},"IncrementGlobalStats()"),"."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "INNING": "INC#1",              // Increment by one\n    "INNINGSREM": "DEC#1",          // Decrement by one\n    "OUTS": "RESET",                // Reset to the defined initial value\n    "POINTS": "INC_TO_LIMIT#5#30",  // Increment by 5, but to a max of 30\n    "PLAYERS": "SET#8",             // Set to the specified value\n    "HIGHESTHR": "MAX#3",           // Set to the specified value if larger\n    "ESTIMATE": "MIN#5",            // Set to the specified value if smaller\n    "GAME" : "5"                    // Missing stat grammar will treat the operation as an increment\n}\n')),(0,r.kt)("p",null,"The above example would:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Increment ",(0,r.kt)("inlineCode",{parentName:"li"},"INNING")," by ",(0,r.kt)("inlineCode",{parentName:"li"},"1")),(0,r.kt)("li",{parentName:"ul"},"Decrement ",(0,r.kt)("inlineCode",{parentName:"li"},"INNINGSREM")," by ",(0,r.kt)("inlineCode",{parentName:"li"},"1")),(0,r.kt)("li",{parentName:"ul"},"Reset ",(0,r.kt)("inlineCode",{parentName:"li"},"OUTS")," to its pre-defined initial value"),(0,r.kt)("li",{parentName:"ul"},"Increment ",(0,r.kt)("inlineCode",{parentName:"li"},"POINTS")," by ",(0,r.kt)("inlineCode",{parentName:"li"},"5"),", but to a maximum of ",(0,r.kt)("inlineCode",{parentName:"li"},"30")),(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},"PLAYERS")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"8")),(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},"HIGHESTHR")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"3"),", or remain at current higher value"),(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},"ESTIMATE")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"5"),", or remain at current lower value"),(0,r.kt)("li",{parentName:"ul"},"Increment ",(0,r.kt)("inlineCode",{parentName:"li"},"GAME")," by ",(0,r.kt)("inlineCode",{parentName:"li"},"5"))),(0,r.kt)("p",null,"For the full statistics grammar see the ",(0,r.kt)("a",{parentName:"p",href:"/api/appendix/statisticsgrammar"},"statistics grammar section"),"."),(0,r.kt)(m,{service_name:"globalGameStatistics",operation_name:"PROCESS_STATISTICS",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(u,{mdxType:"BrowserWindow"},(0,r.kt)(N,{mdxType:"Tabs"},(0,r.kt)(S,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string statistics = "{\\"INNING\\":\\"INC#1\\",\\"INNINGSREM\\":\\"DEC#1\\",\\"OUTS\\":\\"RESET\\",\\"POINTS\\":\\"INC_TO_LIMIT#5#30\\",\\"PLAYERS\\":\\"SET#8\\",\\"HIGHESTHR\\":\\"MAX#3\\",\\"ESTIMATE\\":\\"MIN#5\\"}";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.GlobalGameStatisticsService.ProcessStatistics(statistics, successCallback, failureCallback);\n'))),(0,r.kt)(S,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *statistics = "{\\"INNING\\":\\"INC#1\\",\\"INNINGSREM\\":\\"DEC#1\\",\\"OUTS\\":\\"RESET\\",\\"POINTS\\":\\"INC_TO_LIMIT#5#30\\",\\"PLAYERS\\":\\"SET#8\\",\\"HIGHESTHR\\":\\"MAX#3\\",\\"ESTIMATE\\":\\"MIN#5\\"}";\n_bc->getGlobalGameStatisticsService()->processStatistics(statistics, this);\n'))),(0,r.kt)(S,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *statistics = @"{\\"INNING\\":\\"INC#1\\",\\"INNINGSREM\\":\\"DEC#1\\",\\"OUTS\\":\\"RESET\\",\\"POINTS\\":\\"INC_TO_LIMIT#5#30\\",\\"PLAYERS\\":\\"SET#8\\",\\"HIGHESTHR\\":\\"MAX#3\\",\\"ESTIMATE\\":\\"MIN#5\\"}";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc globalGameStatisticsService] processStatistics:statistics\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,r.kt)(S,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String statistics = "{\\"INNING\\":\\"INC#1\\",\\"INNINGSREM\\":\\"DEC#1\\",\\"OUTS\\":\\"RESET\\",\\"POINTS\\":\\"INC_TO_LIMIT#5#30\\",\\"PLAYERS\\":\\"SET#8\\",\\"HIGHESTHR\\":\\"MAX#3\\",\\"ESTIMATE\\":\\"MIN#5\\"}";\nthis; // implements IServerCallback\n\n_bc.getGlobalGameStatisticsService().processStatistics(statistics, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,r.kt)(S,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var statistics = {\n    "INNING": "INC#1",\n    "INNINGSREM": "DEC#1",\n    "OUTS": "RESET",\n    "POINTS": "INC_TO_LIMIT#5#30",\n    "PLAYERS": "SET#8",\n    "HIGHESTHR": "MAX#3",\n    "ESTIMATE": "MIN#5"\n};\n\n_bc.globalGameStatistics.processStatistics(statistics, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,r.kt)(S,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var statistics = {\n    "INNING": "INC#1",\n    "INNINGSREM": "DEC#1",\n    "OUTS": "RESET",\n    "POINTS": "INC_TO_LIMIT#5#30",\n    "PLAYERS": "SET#8",\n    "HIGHESTHR": "MAX#3",\n    "ESTIMATE": "MIN#5"\n};\nvar globalStatisticsProxy = bridge.getGlobalStatisticsServiceProxy();\n\nvar postResult = globalStatisticsProxy.processStatistics(statistics);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(S,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var statistics = {\n    "INNING": "INC#1",\n    "INNINGSREM": "DEC#1",\n    "OUTS": "RESET",\n    "POINTS": "INC_TO_LIMIT#5#30",\n    "PLAYERS": "SET#8",\n    "HIGHESTHR": "MAX#3",\n    "ESTIMATE": "MIN#5"\n};\nvar globalStatisticsProxy = bridge.getGlobalStatisticsServiceProxy();\n\nvar postResult = globalStatisticsProxy.processStatistics(statistics);\nif (postResult.status == 200) {\n    // Success!\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "statisticsExceptions": {\n      "INNINGSREM": "minApplied"\n    },\n    "statistics": {\n      "OUTS": 0,\n      "HIGHESTHR": 4,\n      "PLAYERS": 8,\n      "INNINGSREM": 0,\n      "INNING": 2,\n      "POINTS": 11,\n      "ESTIMATE": 5\n    }\n  },\n  "status": 200\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"statistics"),(0,r.kt)("td",{parentName:"tr",align:null},"A collection containing the statistics to process")))))}I.isMDXComponent=!0}}]);