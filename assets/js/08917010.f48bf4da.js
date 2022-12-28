"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[50669],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>b});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(b,i(i({ref:r},c),{},{components:t})):n.createElement(b,i({ref:r},c))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},82212:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const o={},i="RegisterListenersForGroup",s={unversionedId:"api/capi/presence/registerlistenersforgroup",id:"api/capi/presence/registerlistenersforgroup",title:"RegisterListenersForGroup",description:"Overview",source:"@site/docs/api/2_capi/presence/registerlistenersforgroup.md",sourceDirName:"api/2_capi/presence",slug:"/api/capi/presence/registerlistenersforgroup",permalink:"/braincloud-apiref/api/capi/presence/registerlistenersforgroup",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/presence/registerlistenersforgroup.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671831235,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"RegisterListenersForFriends",permalink:"/braincloud-apiref/api/capi/presence/registerlistenersforfriends"},next:{title:"RegisterListenersForProfiles",permalink:"/braincloud-apiref/api/capi/presence/registerlistenersforprofiles"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",r)},u=c("PartialServop"),d=c("BrowserWindow"),m=c("Tabs"),b=c("TabItem"),g={toc:p};function f(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"registerlistenersforgroup"},"RegisterListenersForGroup"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Registers the caller for RTT presence updates from the members of the given ",(0,a.kt)("inlineCode",{parentName:"p"},"groupId"),". Caller must be a member of said group. If ",(0,a.kt)("inlineCode",{parentName:"p"},"bidirectional")," is set to true, then also registers the targeted users for presence updates from the caller."),(0,a.kt)(u,{service_name:"presence",operation_name:"REGISTER_LISTENERS_FOR_GROUP",mdxType:"PartialServop"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(d,{mdxType:"BrowserWindow"},(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(b,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'string groupId = <%= data.example.groupId %>;\nbool bidirectional = true;\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n    \n_bc.PresenceService.RegisterListenersForGroup(platform, bidirectional, successCallback, failureCallback);\n'))),(0,a.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"const char* groupId = <%= data.example.groupId %>;\nbool bidirectional = true;\n\n_bc->getPresenceService()->registerListenersForGroup(platform, bidirectional, this);\n"))),(0,a.kt)(b,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"NSString* groupId = @<%= data.example.groupId %>;\nbool bidirectional = true;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc presenceService] registerListenersForGroup:platform\n             bidirectional:bidirectional\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n"))),(0,a.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'String groupId = <%= data.example.groupId %>;\nboolean bidirectional = true;\nthis; // implements IServerCallback\n\n_bc.getPresenceService().registerListenersForGroup(platform, bidirectional, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,a.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'var groupId = <%= data.example.groupId %>;\nvar bidirectional = true;\n\n_bc.presence.registerListenersForGroup(platform, bidirectional, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,a.kt)(b,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cfscript"},"var groupId = <%= data.example.groupId %>;\nvar bidirectional = true;\n\nvar postResult = presenceProxy.registerListenersForGroup(platform, bidirectional);\nif (postResult.status == 200) {\n    // Success!\n}\n"))),(0,a.kt)(b,{value:"r",label:"Raw",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "presence",\n    "operation": "REGISTER_LISTENERS_FOR_GROUP",\n    "data": {\n        "groupId": "aaa-bbb-ccc-ddd",\n        "bidirectional": true\n    }\n}\n'))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"JSON Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n "data": {\n  "presence": [\n   {\n    "user": {\n     "id": <%= data.example.profileId %>,\n     "name": "",\n     "pic": null,\n     "cxs": [\n      "22284:fb416888-e76d-425d-a06d-a5529bdba8d9:"\n     ]\n    },\n    "online": true,\n    "summaryFriendData": {},\n    "activity": {\n     "LOCATION": "POKER_TABLE",\n     "STATUS": "PLAYING_GAME"\n    }\n   }\n  ]\n },\n "status": 200\n}\n'))),(0,a.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupId"),(0,a.kt)("td",{parentName:"tr",align:null},"Target group ID.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"bidirectional"),(0,a.kt)("td",{parentName:"tr",align:null},"Should those profiles be mutually registered to listen to the current profile?")))))}f.isMDXComponent=!0}}]);