"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[27724],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(a),u=r,y=p["".concat(i,".").concat(u)]||p[u]||d[u]||l;return a?n.createElement(y,o(o({ref:t},c),{},{components:a})):n.createElement(y,o({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b[p]="string"==typeof e?e:r,o[1]=b;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},21631:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>v,frontMatter:()=>l,metadata:()=>b,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={},o="GetLobbyData",b={unversionedId:"api/capi/lobby/getlobbydata",id:"api/capi/lobby/getlobbydata",title:"GetLobbyData",description:"Overview",source:"@site/docs/api/2_capi/lobby/getlobbydata.md",sourceDirName:"api/2_capi/lobby",slug:"/api/capi/lobby/getlobbydata",permalink:"/braincloud-apiref/api/capi/lobby/getlobbydata",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/lobby/getlobbydata.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1673042992,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{},sidebar:"apiSidebar",previous:{title:"FindOrCreateLobbyWithPingData",permalink:"/braincloud-apiref/api/capi/lobby/findorcreatelobbywithpingdata"},next:{title:"GetLobbyInstances",permalink:"/braincloud-apiref/api/capi/lobby/getlobbyinstances"}},i={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=c("PartialServop"),d=c("BrowserWindow"),u=c("Tabs"),y=c("TabItem"),m={toc:s};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getlobbydata"},"GetLobbyData"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Returns the data for the specified lobby, including member data."),(0,r.kt)(p,{service_name:"lobby",operation_name:"GET_LOBBY_DATA",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(d,{mdxType:"BrowserWindow"},(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(y,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string lobbyId = "13229:Relay_lobbyT_v2:20";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.LobbyService.GetLobbyData(lobbyId, successCallback, failureCallback);\n'))),(0,r.kt)(y,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *lobbyId = "13229:Relay_lobbyT_v2:20";\n_bc->getLobbyService()->getLobbyData(lobbyId, this);\n'))),(0,r.kt)(y,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *lobbyId = @"13229:Relay_lobbyT_v2:20";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc lobbyService] getLobbyData:lobbyId\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,r.kt)(y,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String lobbyId = "13229:Relay_lobbyT_v2:20";\nthis; // implements IServerCallback\n\n_bc.getLobbyService().getLobbyData(lobbyId, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,r.kt)(y,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var lobbyId = "13229:Relay_lobbyT_v2:20";\n\n_bc.lobby.getLobbyData(lobbyId, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,r.kt)(y,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var lobbyId = "13229:Relay_lobbyT_v2:20";\nvar lobbyProxy = bridge.getLobbyServiceProxy();\n\nvar postResult = lobbyProxy.getLobbyData(lobbyId);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(y,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "lobby",\n    "operation": "GET_LOBBY_DATA",\n    "data": {\n        "lobbyId": "13229:Relay_lobbyT_v2:20"\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "id": "13229:Relay_lobbyT_v2:20",\n    "lobbyType": "Relay_lobbyT_v2",\n    "state": "setup",\n    "rating": 0,\n    "lobbyTypeDef": {\n      "lobbyTypeId": "Relay_lobbyT_v2",\n      "teams": {\n        "all": {\n          "minUsers": 1,\n          "maxUsers": 8,\n          "autoAssign": true,\n          "code": "all"\n        }\n      },\n      "rules": {\n        "allowEarlyStartWithoutMax": true,\n        "forceOnTimeStartWithoutReady": true,\n        "allowJoinInProgress": false,\n        "onTimeStartSecs": 600,\n        "disbandOnStart": true,\n        "everyReadyMinPercent": 15,\n        "everyReadyMinNum": 1,\n        "earliestStartSecs": 1,\n        "tooLateSecs": 600\n      },\n      "desc": "starts when 1 player is ready"\n    },\n    "settings": {},\n    "version": 1,\n    "connectData": {},\n    "timetable": {\n      "createdAt": 1631050042177,\n      "early": 1631050043177,\n      "onTime": 1631050642177,\n      "tooLate": 1631050642177\n    },\n    "cRegions": [],\n    "round": 1,\n    "ownerCxId": "13229:db4be46d-1e99-41fe-9402-a0e8f7cd7cb5:p57kebat767ogdtesnp5cmd46p",\n    "legacyLobbyOwnerEnabled": true,\n    "owner": "db4be46d-1e99-41fe-9402-a0e8f7cd7cb5",\n    "numMembers": 1,\n    "members": [\n      {\n        "profileId": "db4be46d-1e99-41fe-9402-a0e8f7cd7cb5",\n        "name": "",\n        "pic": "",\n        "rating": 1200,\n        "team": "all",\n        "isReady": true,\n        "extra": {},\n        "cxId": "13229:db4be46d-1e99-41fe-9402-a0e8f7cd7cb5:p57kebat767ogdtesnp5cmd46p"\n      }\n    ]\n  },\n  "status": 200\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Common Error Code"),(0,r.kt)("h3",{id:"status-codes"},"Status Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40601"),(0,r.kt)("td",{parentName:"tr",align:null},"RTT_NOT_ENABLED"),(0,r.kt)("td",{parentName:"tr",align:null},"RTT must be enabled for this feature"))))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lobbyId"),(0,r.kt)("td",{parentName:"tr",align:null},"Id of chosen lobby.")))))}v.isMDXComponent=!0}}]);