"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[33321],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,g=p["".concat(o,".").concat(u)]||p[u]||m[u]||l;return a?n.createElement(g,s(s({ref:t},d),{},{components:a})):n.createElement(g,s({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},23305:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>v,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={},s="DeleteChatMessage",i={unversionedId:"api/capi/chat/deletechatmessage",id:"api/capi/chat/deletechatmessage",title:"DeleteChatMessage",description:"Overview",source:"@site/docs/api/2_capi/chat/deletechatmessage.md",sourceDirName:"api/2_capi/chat",slug:"/api/capi/chat/deletechatmessage",permalink:"/braincloud-apiref/api/capi/chat/deletechatmessage",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/chat/deletechatmessage.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1673042992,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{},sidebar:"apiSidebar",previous:{title:"ChannelDisconnect",permalink:"/braincloud-apiref/api/capi/chat/channeldisconnect"},next:{title:"GetChannelId",permalink:"/braincloud-apiref/api/capi/chat/getchannelid"}},o={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Method Parameters",id:"method-parameters",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=d("PartialServop"),m=d("BrowserWindow"),u=d("Tabs"),g=d("TabItem"),h={toc:c};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deletechatmessage"},"DeleteChatMessage"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Delete the specified chat message. Message must have been from this user. Version must match (or pass -1 to bypass version enforcement)."),(0,r.kt)("p",null,"Returns the number of messages that were deleted. Since the history rolls over, it is possible that the message had already expired before the delete attempt - in that case, the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"deleted")," field will be ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)(p,{service_name:"chat",operation_name:"DELETE_CHAT_MESSAGE",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(m,{mdxType:"BrowserWindow"},(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(g,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'\n\nstring channelId = "22817:gl:CHAT_TRADE"; // APP_ID:CHANNEL_TYPE:CHANNEL_ID\nstring msgId = "784130333859899";\nint version = -1;\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    var jsonMessage = (Dictionary<string, object>)JsonFx.Json.JsonReader.Deserialize(response);\n    Dictionary<string, object> jsonData = (Dictionary<string, object>)jsonMessage["data"];\n    string deleted = jsonData["deleted"].ToString();\n    \n    string logMessage = string.Join(" | ", new [] {deleted});\n    Debug.Log(logMessage); // 1\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("[DeleteChatMessage Failed] {0}  {1}  {2}", status, code, error));\n};\n\n_bc.ChatService.DeleteChatMessage(channelId, msgId, version, successCallback, failureCallback);\n'))),(0,r.kt)(g,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *channelId = "55555:gl:bcDev";\nconst char *msgId = "123456789";\nint version = 1;\n_bc->getChatService()->deleteChatMessage(channelId, msgId, version, this);\n'))),(0,r.kt)(g,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *channelId = @"55555:gl:bcDev";\nNSString *msgId = @"123456789";\nint version = 1;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc chatService] deleteChatMessage:channelId\n                      msgId:msgId\n                    version:version\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,r.kt)(g,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String channelId = "22817:gl:CHAT_TRADE"; // APP_ID:CHANNEL_TYPE:CHANNEL_ID\nString msgId = "784130333859899";\nint version = -1;\nthis; // implements IServerCallback\n\n_bc.getChatService().deleteChatMessage(channelId, msgId, version, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,r.kt)(g,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var channelId = "22817:gl:CHAT_TRADE";\nvar msgId = "784130333859899";\nvar version = -1;\n\n_bc.chat.channelDisconnect(channelId, msgId, version, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,r.kt)(g,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},"var chatProxy = bridge.getChatServiceProxy();\nvar result = chatProxy.deleteChatMessage( channelId, msgId, ver );\n"))),(0,r.kt)(g,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "chat",\n    "operation": "DELETE_CHAT_MESSAGE",\n    "data": {\n        "channelId": "55555:gl:bcDev",\n        "msgId": "the-message-id",\n        "version": 1\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "deleted": 1\n    }\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Common Error Code"),(0,r.kt)("h3",{id:"status-codes"},"Status Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40346"),(0,r.kt)("td",{parentName:"tr",align:null},"CHAT_INVALID_CHANNEL_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"The channel id provided is invalid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40601"),(0,r.kt)("td",{parentName:"tr",align:null},"RTT_NOT_ENABLED"),(0,r.kt)("td",{parentName:"tr",align:null},"RTT must be enabled for this feature"))))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channelId"),(0,r.kt)("td",{parentName:"tr",align:null},"The channel of the message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgId"),(0,r.kt)("td",{parentName:"tr",align:null},"The message id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"The version of the message. Pass it -1 to bypass version checking.")))))}v.isMDXComponent=!0}}]);