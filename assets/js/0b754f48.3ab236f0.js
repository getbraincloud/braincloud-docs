"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[80240],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),o=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=o(r),m=n,d=u["".concat(c,".").concat(m)]||u[m]||v[m]||i;return r?a.createElement(d,s(s({ref:t},p),{},{components:r})):a.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,s[1]=l;for(var o=2;o<i;o++)s[o]=r[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12031:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const i={},s="TriggerStatsEvent",l={unversionedId:"api/capi/playerstatsevent/triggerstatsevent",id:"api/capi/playerstatsevent/triggerstatsevent",title:"TriggerStatsEvent",description:"Overview",source:"@site/docs/api/2_capi/playerstatsevent/triggerstatsevent.md",sourceDirName:"api/2_capi/playerstatsevent",slug:"/api/capi/playerstatsevent/triggerstatsevent",permalink:"/braincloud-apiref/api/capi/playerstatsevent/triggerstatsevent",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/playerstatsevent/triggerstatsevent.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Player Statistics Event",permalink:"/braincloud-apiref/api/capi/playerstatsevent/"},next:{title:"TriggerStatsEvents",permalink:"/braincloud-apiref/api/capi/playerstatsevent/triggerstatsevents"}},c={},o=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=p("PartialServop"),v=p("BrowserWindow"),m=p("Tabs"),d=p("TabItem"),g={toc:o};function b(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"triggerstatsevent"},"TriggerStatsEvent"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Trigger an event server side that will increase the users statistics. This may cause one or more awards to be sent back to the player - could be achievements, experience, etc. Achievements will be sent by this client library to the appropriate awards service (Apple Game Center, etc)."),(0,n.kt)("p",null,"This mechanism supersedes the ",(0,n.kt)("a",{parentName:"p",href:"/api/capi/playerstats"},(0,n.kt)("code",null,"PlayerStatisticsService"))," API methods, since PlayerStatisticsService API method only update the raw statistics without triggering the rewards."),(0,n.kt)(u,{service_name:"playerStatisticsEvent",operation_name:"TRIGGER",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(v,{mdxType:"BrowserWindow"},(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(d,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'string eventName = "GrantExperience";\nint eventMultiplier = 100;\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.PlayerStatisticsEventService.TriggerStatsEvent(eventName, eventMultiplier, successCallback, failureCallback);\n'))),(0,n.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *eventName = "GrantExperience";\nint eventMultiplier = 100;\n\n_bc->getPlayerStatisticsEventService()->triggerStatsEvent(eventName, eventMultiplier, this);\n'))),(0,n.kt)(d,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *eventName = "GrantExperience";\nint eventMultiplier = 100;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc playerStatisticsEventService] triggerStatsEvent:eventName\n            eventMultiplier:eventMultiplier\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,n.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String eventName = "GrantExperience";\nint eventMultiplier = 100;\nthis; // implements IServerCallback\n\n_bc.getPlayerStatisticsEventService().triggerStatsEvent(eventName, eventMultiplier, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,n.kt)(d,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var eventName = "GrantExperience";\nvar eventMultiplier = 100;\n\n_bc.playerStatisticsEvent.triggerStatsEvent(eventName, eventMultiplier, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)(d,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var eventName = "GrantExperience";\nvar eventMultiplier = 100;\nvar playerStatisticsEventProxy = bridge.getPlayerStatisticsEventServiceProxy();\n\nvar postResult = playerStatisticsEventProxy.triggerStatsEvent(eventName, eventMultiplier);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,n.kt)(d,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var eventName = "GrantExperience";\nvar eventMultiplier = 100;\nvar playerStatisticsEventProxy = bridge.getPlayerStatisticsEventServiceProxy();\n\nvar postResult = playerStatisticsEventProxy.triggerStatsEvent(eventName, eventMultiplier);\nif (postResult.status == 200) {\n    // Success!\n}\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "currency": {},\n        "rewardDetails": {},\n        "rewards": {}\n    },\n    "status": 200\n}\n'))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"eventName"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the event configured through the brainCloud portal")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"multiplier"),(0,n.kt)("td",{parentName:"tr",align:null},"The multiplier to apply to the event")))))}b.isMDXComponent=!0}}]);