"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[91022],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>v,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={},i="SendNormalizedPushNotificationToGroup",s={unversionedId:"api/capi/pushnotification/sendnormalizedpushnotificationtogroup",id:"api/capi/pushnotification/sendnormalizedpushnotificationtogroup",title:"SendNormalizedPushNotificationToGroup",description:"Overview",source:"@site/docs/api/2_capi/pushnotification/sendnormalizedpushnotificationtogroup.md",sourceDirName:"api/2_capi/pushnotification",slug:"/api/capi/pushnotification/sendnormalizedpushnotificationtogroup",permalink:"/braincloud-apiref/api/capi/pushnotification/sendnormalizedpushnotificationtogroup",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/pushnotification/sendnormalizedpushnotificationtogroup.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SendNormalizedPushNotificationBatch",permalink:"/braincloud-apiref/api/capi/pushnotification/sendnormalizedpushnotificationbatch"},next:{title:"SendRawPushNotification",permalink:"/braincloud-apiref/api/capi/pushnotification/sendrawpushnotification"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},p=u("PartialServop"),d=u("BrowserWindow"),m=u("Tabs"),f=u("TabItem"),g={toc:c};function v(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sendnormalizedpushnotificationtogroup"},"SendNormalizedPushNotificationToGroup"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,'Sends a notification to a "group" of user consisting of alert content and custom data.'),(0,o.kt)(p,{service_name:"pushNotification",operation_name:"SEND_NORMALIZED_TO_GROUP",mdxType:"PartialServop"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(d,{mdxType:"BrowserWindow"},(0,o.kt)(m,{mdxType:"Tabs"},(0,o.kt)(f,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'string groupId = "group1";\nstring alertContentJson = "{\\"body\\":\\"content of message\\",\\"title\\":\\"message title\\"}";\nstring customDataJson = "{\\"field1\\":\\"value1\\",\\"field2\\":\\"value2\\"}";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.PushNotificationService.SendNormalizedPushNotificationToGroup(groupId, alertContentJson, customDataJson, successCallback, failureCallback);\n'))),(0,o.kt)(f,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *groupId = "group1";\nconst char *alertContentJson = "{\\"body\\":\\"content of message\\",\\"title\\":\\"message title\\"}";\nconst char *customDataJson = "{\\"field1\\":\\"value1\\",\\"field2\\":\\"value2\\"}";\n_bc->getPushNotificationService()->sendNormalizedPushNotificationToGroup(groupId, alertContentJson, customDataJson, this);\n'))),(0,o.kt)(f,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *groupId = @"group1";\nNSString *alertContentJson = @"{\\"body\\":\\"content of message\\",\\"title\\":\\"message title\\"}";\nNSString *customDataJson = @"{\\"field1\\":\\"value1\\",\\"field2\\":\\"value2\\"}";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc pushNotificationService] sendNormalizedPushNotificationToGroup:groupId\n           alertContentJson:alertContentJson\n             customDataJson:customDataJson\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,o.kt)(f,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'String groupId = "group1";\nString alertContentJson = "{\\"body\\":\\"content of message\\",\\"title\\":\\"message title\\"}";\nString customDataJson = "{\\"field1\\":\\"value1\\",\\"field2\\":\\"value2\\"}";\nthis; // implements IServerCallback\n\n_bc.getPushNotificationService().sendNormalizedPushNotificationToGroup(groupId, alertContentJson, customDataJson, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,o.kt)(f,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var groupId = "group1";\nvar alertContentJson = {\n    "body": "content of message",\n    "title": "message title"\n};\nvar customDataJson = {\n    "field1": "value1",\n    "field2": "value2"\n};\n\n_bc.pushNotification.sendNormalizedPushNotificationToGroup(groupId, alertContentJson, customDataJson, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,o.kt)(f,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cfscript"},'var groupId = "group1";\nvar alertContentJson = {\n    "body": "content of message",\n    "title": "message title"\n};\nvar customDataJson = {\n    "field1": "value1",\n    "field2": "value2"\n};\nvar pushNotificationProxy = bridge.getPushNotificationServiceProxy();\n\nvar postResult = pushNotificationProxy.sendNormalizedPushNotificationToGroup(groupId, alertContentJson, customDataJson);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,o.kt)(f,{value:"r",label:"Raw",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "pushNotification",\n    "operation": "SEND_NORMALIZED_TO_GROUP",\n    "data": {\n        "groupId": "group1",\n        "alertContent": {\n            "body": "content of message",\n            "title": "message title"\n        },\n        "customData": {\n            "field1": "value1",\n            "field2": "value2"\n        }\n    }\n}\n'))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"JSON Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": null\n}\n'))),(0,o.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"groupId"),(0,o.kt)("td",{parentName:"tr",align:null},"Target group ID")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"alertContentJson"),(0,o.kt)("td",{parentName:"tr",align:null},"Body and title of alert")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"customDataJson"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional custom data")))))}v.isMDXComponent=!0}}]);