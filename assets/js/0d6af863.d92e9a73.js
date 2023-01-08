"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[63282],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=i(a),u=r,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||l;return a?n.createElement(g,s(s({ref:t},p),{},{components:a})):n.createElement(g,s({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var i=2;i<l;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},27027:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const l={},s="GetChatMessage",o={unversionedId:"api/capi/chat/getchatmessage",id:"api/capi/chat/getchatmessage",title:"GetChatMessage",description:"Overview",source:"@site/docs/api/2_capi/chat/getchatmessage.md",sourceDirName:"api/2_capi/chat",slug:"/api/capi/chat/getchatmessage",permalink:"/braincloud-apiref/api/capi/chat/getchatmessage",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/chat/getchatmessage.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1673042992,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{},sidebar:"apiSidebar",previous:{title:"GetChannelInfo",permalink:"/braincloud-apiref/api/capi/chat/getchannelinfo"},next:{title:"GetRecentChatMessages",permalink:"/braincloud-apiref/api/capi/chat/getrecentchatmessages"}},c={},i=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=p("PartialServop"),m=p("BrowserWindow"),u=p("Tabs"),g=p("TabItem"),b={toc:i};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getchatmessage"},"GetChatMessage"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Retrieves a chat message object from history. If the message cannot be found, that ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," section returned will be empty."),(0,r.kt)(d,{service_name:"chat",operation_name:"GET_CHAT_MESSAGE",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(m,{mdxType:"BrowserWindow"},(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(g,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'\n\nstring channelId = "22817:gl:CHAT_GROUPFINDER"; // APP_ID:CHANNEL_TYPE:CHANNEL_ID\nstring msgId = "783820066133040";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Dictionary<string, object> jsonMessage = (Dictionary<string, object>)JsonFx.Json.JsonReader.Deserialize(response);\n    Dictionary<string, object> jsonData = (Dictionary<string, object>)jsonMessage["data"];\n    \n    var date = jsonData["date"].ToString();\n    var name = ((Dictionary<string, object>)jsonData["from"])["name"].ToString();\n    var text = ((Dictionary<string, object>)jsonData["content"])["text"].ToString();\n    string logMessage = string.Join(" | ", new [] {date, name, text});\n    Debug.Log(logMessage); // 1530898566666 | RedBomber | Anyone looking for a group?\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("[GetChatMessage Failed] {0}  {1}  {2}", status, code, error));\n};\n_bc.ChatService.GetChatMessage(channelId, msgId, successCallback, failureCallback);\n'))),(0,r.kt)(g,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *channelId = "55555:gl:bcDev";\nconst char *msgId = "123456789";\n_bc->getChatService()->getChatMessage(channelId, msgId, this);\n'))),(0,r.kt)(g,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *channelId = @"55555:gl:bcDev";\nNSString *msgId = @"123456789";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc chatService] getChatMessage:channelId\n                      msgId:msgId\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,r.kt)(g,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String channelId = "22817:gl:CHAT_GROUPFINDER"; // APP_ID:CHANNEL_TYPE:CHANNEL_ID\nString msgId = "783820066133040";\nthis; // implements IServerCallback\n\n_bc.getChatService().getChatMessage(channelId, msgId, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,r.kt)(g,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var channelId = "22817:gl:CHAT_GROUPFINDER"; // APP_ID:CHANNEL_TYPE:CHANNEL_ID\nvar msgId = "783820066133040";\n\n_bc.chat.getChatMessage(channelId, msgId, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,r.kt)(g,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},"var chatProxy = bridge.getChatServiceProxy();\nvar getResult = chatProxy.getChatMessage(channelId, msgId);\nif (getReult.status == 200 ) {\n    msgText = getResult.data.content.text;\n}\n"))),(0,r.kt)(g,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "chat",\n    "operation": "GET_CHAT_MESSAGE",\n    "data": {\n        "channelId": "55555:gl:bcDev",\n        "msgId": "the-message-id"\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "date": 1530898566666,\n        "ver": 1,\n        "msgId": "783820066133040",\n        "from": {\n            "id": "a7b7de02-8432-4547-8c40-9af94537fce0",\n            "name": "RedBomber",\n            "pic": null\n        },\n        "chId": "22817:gl:CHAT_TRADE",\n        "content": {\n            "text": "Anyone looking for a group?"\n        }\n    },\n    "status": 200\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Common Error Code"),(0,r.kt)("h3",{id:"status-codes"},"Status Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40601"),(0,r.kt)("td",{parentName:"tr",align:null},"RTT_NOT_ENABLED"),(0,r.kt)("td",{parentName:"tr",align:null},"RTT must be enabled for this feature")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40603"),(0,r.kt)("td",{parentName:"tr",align:null},"CHAT_UNRECOGNIZED_CHANNEL"),(0,r.kt)("td",{parentName:"tr",align:null},"The specified channel is invalid"))))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channelId"),(0,r.kt)("td",{parentName:"tr",align:null},"The channel of the message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgId"),(0,r.kt)("td",{parentName:"tr",align:null},"The message id")))),(0,r.kt)("h1",{id:""}))}h.isMDXComponent=!0}}]);