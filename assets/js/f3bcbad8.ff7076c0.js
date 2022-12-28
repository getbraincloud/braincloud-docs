"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[24816],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>u});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),m=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=m(e.components);return n.createElement(i.Provider,{value:a},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=m(t),p=s,u=g["".concat(i,".").concat(p)]||g[p]||d[p]||r;return t?n.createElement(u,o(o({ref:a},c),{},{components:t})):n.createElement(u,o({ref:a},c))}));function u(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,o=new Array(r);o[0]=p;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l[g]="string"==typeof e?e:s,o[1]=l;for(var m=2;m<r;m++)o[m]=t[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},55403:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=t(87462),s=(t(67294),t(3905));const r={},o="GetMessages",l={unversionedId:"api/capi/messaging/getmessages",id:"api/capi/messaging/getmessages",title:"GetMessages",description:"Overview",source:"@site/docs/api/2_capi/messaging/getmessages.md",sourceDirName:"api/2_capi/messaging",slug:"/api/capi/messaging/getmessages",permalink:"/braincloud-apiref/api/capi/messaging/getmessages",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/messaging/getmessages.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"GetMessageCounts",permalink:"/braincloud-apiref/api/capi/messaging/getmessagecounts"},next:{title:"GetMessagesPage",permalink:"/braincloud-apiref/api/capi/messaging/getmessagespage"}},i={},m=[{value:"Overview",id:"overview",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",a)},g=c("PartialServop"),d=c("BrowserWindow"),p=c("Tabs"),u=c("TabItem"),b={toc:m};function k(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"getmessages"},"GetMessages"),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"Return the content of the specified messages (if found)."),(0,s.kt)("h3",{id:"status-codes"},"Status Codes"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Code"),(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"40601"),(0,s.kt)("td",{parentName:"tr",align:null},"FEATURE_NOT_ENABLED"),(0,s.kt)("td",{parentName:"tr",align:null},"Messaging feature is not enabled for app.")))),(0,s.kt)(g,{service_name:"messaging",operation_name:"GET_MESSAGES",mdxType:"PartialServop"}),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)(d,{mdxType:"BrowserWindow"},(0,s.kt)(p,{mdxType:"Tabs"},(0,s.kt)(u,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'string msgbox = "inbox";\nstring[] msgIds = { "msgId1", "msgId2" };\nbool markAsRead = false;\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.MessagingService.GetMessages(msgbox, msgIds, markAsRead, successCallback, failureCallback);\n'))),(0,s.kt)(u,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *msgbox = "inbox";\nstd::vector<std::string> msgIds;\nmsgIds.push_back("msgId1");\nmsgIds.push_back("msgId2");\nbool markAsRead = false;\n_bc->getMessagingService()->getMessages(msgbox, msgIds, markAsRead, this);\n'))),(0,s.kt)(u,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *msgbox = @"inbox";\nNSArray *msgIds = @[ @"msgId1", @"msgId2" ];\nbool markAsRead = false;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc messagingService] getMessages:msgbox\n                     msgIds:msgIds\n                 markAsRead:markAsRead\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,s.kt)(u,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'String msgbox = "inbox";\nString[] msgIds = { "msgId1", "msgId2" };\nboolean markAsRead = false;\nthis; // implements IServerCallback\n\n_bc.getMessagingService().getMessages(msgbox, msgIds, markAsRead, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,s.kt)(u,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'var msgbox = "inbox";\nvar msgIds = [ "msgId1", "msgId2" ];\nvar markAsRead = false;\n\n_bc.messaging.getMessages(msgbox, msgIds, markAsRead, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,s.kt)(u,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cfscript"},'var msgbox = "inbox";\nvar msgIds = [ "msgId1", "msgId2" ];\nvar markAsRead = false;\nvar messagingProxy = bridge.getMessagingServiceProxy();\n\nvar postResult = messagingProxy.getMessages(msgbox, msgIds, markAsRead);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,s.kt)(u,{value:"r",label:"Raw",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "messaging",\n    "operation": "GET_MESSAGES",\n    "data": {\n        "msgbox": "inbox",\n        "msgIds": [\n            "msgId1",\n            "msgId2"\n        ],\n        "markAsRead": false\n    }\n}\n'))))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"JSON Response"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "requested": 2,\n        "actual": 2,\n        "items": [\n            {\n                "msgbox": "inbox",\n                "msgId": "0b102b77-5478-4bf4-b212-1b26d03d2dd6",\n                "mbVer": 1,\n                "mbCr": 1530289175397,\n                "mbUp": 1530289175397,\n                "read": false,\n                "message": {\n                    "from": {\n                        "id": "c3a455de-27f5-4126-a051-0effb1c75fd3",\n                        "name": ""\n                    },\n                    "to": [\n                        "c3a455de-27f5-4126-a051-0effb1c75fd3"\n                    ],\n                    "sentAt": 1530289175381,\n                    "content": {\n                        "subject": "Message 1",\n                        "text": "Message 1"\n                    }\n                }\n            },\n            {\n                "msgbox": "inbox",\n                "msgId": "5a11e6e3-7bbd-46ef-85ec-797d22eb3486",\n                "mbVer": 1,\n                "mbCr": 1530289180524,\n                "mbUp": 1530289180524,\n                "read": false,\n                "message": {\n                    "from": {\n                        "id": "c3a455de-27f5-4126-a051-0effb1c75fd3",\n                        "name": ""\n                    },\n                    "to": [\n                        "c3a455de-27f5-4126-a051-0effb1c75fd3"\n                    ],\n                    "sentAt": 1530289180520,\n                    "content": {\n                        "subject": "Message 2",\n                        "text": "Message 2"\n                    }\n                }\n            }\n        ]\n    }\n}\n'))),(0,s.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"msgbox"),(0,s.kt)("td",{parentName:"tr",align:null},"The messagebox that the messages reside in")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"msgids"),(0,s.kt)("td",{parentName:"tr",align:null},"An array of message ids")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"markAsRead"),(0,s.kt)("td",{parentName:"tr",align:null},"Whether the messages should be marked as read once retrieved.")))))}k.isMDXComponent=!0}}]);