"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[88174],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||l;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},82253:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>v,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={},o="UpdateSettings",s={unversionedId:"api/capi/lobby/updatesettings",id:"api/capi/lobby/updatesettings",title:"UpdateSettings",description:"Overview",source:"@site/docs/api/2_capi/lobby/updatesettings.md",sourceDirName:"api/2_capi/lobby",slug:"/api/capi/lobby/updatesettings",permalink:"/braincloud-apiref/api/capi/lobby/updatesettings",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/lobby/updatesettings.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"UpdateReady",permalink:"/braincloud-apiref/api/capi/lobby/updateready"},next:{title:"Mail",permalink:"/braincloud-apiref/api/capi/mail/"}},i={},c=[{value:"Overview",id:"overview",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=p("PartialServop"),d=p("BrowserWindow"),b=p("Tabs"),m=p("TabItem"),g={toc:c};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"updatesettings"},"UpdateSettings"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Updates the settings for the given lobby instance."),(0,r.kt)("h3",{id:"status-codes"},"Status Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40601"),(0,r.kt)("td",{parentName:"tr",align:null},"RTT_NOT_ENABLED"),(0,r.kt)("td",{parentName:"tr",align:null},"RTT must be enabled for this feature")))),(0,r.kt)(u,{service_name:"lobby",operation_name:"UPDATE_SETTINGS",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(d,{mdxType:"BrowserWindow"},(0,r.kt)(b,{mdxType:"Tabs"},(0,r.kt)(m,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string lobbyId = "55555:4v4:19";\nstring settings = "{}";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.LobbyService.UpdateSettings(lobbyId, settings, successCallback, failureCallback);\n'))),(0,r.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *lobbyId = "55555:4v4:19";\nconst char *settings = "{}";\n_bc->getLobbyService()->updateSettings(lobbyId, settings, this);\n'))),(0,r.kt)(m,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *lobbyId = @"55555:4v4:19";\nNSString *settings = @"{}";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc lobbyService] updateSettings:lobbyId\n                   settings:settings\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,r.kt)(m,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String lobbyId = "55555:4v4:19";\nString settings = "{}";\nthis; // implements IServerCallback\n\n_bc.getLobbyService().updateSettings(lobbyId, settings, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,r.kt)(m,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var lobbyId = "55555:4v4:19";\nvar settings = {};\n\n_bc.lobby.updateSettings(lobbyId, settings, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,r.kt)(m,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var lobbyId = "55555:4v4:19";\nvar settings = {};\nvar lobbyProxy = bridge.getLobbyServiceProxy();\n\nvar postResult = lobbyProxy.updateSettings(lobbyId, settings);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(m,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "lobby",\n    "operation": "UPDATE_SETTINGS",\n    "data": {\n        "lobbyId": "55555:4v4:19",\n        "settings": {}\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {}\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lobbyId"),(0,r.kt)("td",{parentName:"tr",align:null},"Id of the specfified lobby.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"settings"),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration data for the room.")))))}v.isMDXComponent=!0}}]);