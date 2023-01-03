"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[11196],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const i={},r="SendRawPushNotificationBatch",s={unversionedId:"api/capi/pushnotification/sendrawpushnotificationbatch",id:"api/capi/pushnotification/sendrawpushnotificationbatch",title:"SendRawPushNotificationBatch",description:"Overview",source:"@site/docs/api/2_capi/pushnotification/sendrawpushnotificationbatch.md",sourceDirName:"api/2_capi/pushnotification",slug:"/api/capi/pushnotification/sendrawpushnotificationbatch",permalink:"/braincloud-apiref/api/capi/pushnotification/sendrawpushnotificationbatch",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/pushnotification/sendrawpushnotificationbatch.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SendRawPushNotification",permalink:"/braincloud-apiref/api/capi/pushnotification/sendrawpushnotification"},next:{title:"SendRawPushNotificationToGroup",permalink:"/braincloud-apiref/api/capi/pushnotification/sendrawpushnotificationtogroup"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=p("PartialServop"),d=p("BrowserWindow"),m=p("Tabs"),f=p("TabItem"),g={toc:l};function b(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sendrawpushnotificationbatch"},"SendRawPushNotificationBatch"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Sends a notification to a list of users consisting of raw message content."),(0,o.kt)(u,{service_name:"pushNotification",operation_name:"SEND_RAW_BATCH",mdxType:"PartialServop"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(d,{mdxType:"BrowserWindow"},(0,o.kt)(m,{mdxType:"Tabs"},(0,o.kt)(f,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'string[] profileIds = { "a-profile-id", "another-profile-id" };\nstring fcmContent = "{\\"notification\\":{\\"body\\":\\"content of message\\",\\"title\\":\\"message title\\"},\\"data\\":{\\"customfield1\\":\\"customValue1\\",\\"customfield2\\":\\"customValue2\\"},\\"priority\\":\\"normal\\"}";\nstring iosContent = "{\\"aps\\":{\\"alert\\":{\\"body\\":\\"content of message\\",\\"title\\":\\"message title\\"},\\"badge\\":0,\\"sound\\":\\"gggg\\"}}";\nstring facebookContent = "{\\"template\\":\\"content of message\\"}";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.PushNotificationService.SendRawPushNotificationBatch(profileIds, fcmContent, iosContent, facebookContent, successCallback, failureCallback);\n'))),(0,o.kt)(f,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'std::vector<std::string> profileIds;\nprofileIds.push_back("a-profile-id");\nprofileIds.push_back("another-profile-id");\nconst char *fcmContent = "{\\"notification\\":{\\"body\\":\\"content of message\\",\\"title\\":\\"message title\\"},\\"data\\":{\\"customfield1\\":\\"customValue1\\",\\"customfield2\\":\\"customValue2\\"},\\"priority\\":\\"normal\\"}";\nconst char *iosContent = "{\\"aps\\":{\\"alert\\":{\\"body\\":\\"content of message\\",\\"title\\":\\"message title\\"},\\"badge\\":0,\\"sound\\":\\"gggg\\"}}";\nconst char *facebookContent = "{\\"template\\":\\"content of message\\"}";\n_bc->getPushNotificationService()->sendRawPushNotificationBatch(profileIds, fcmContent, iosContent, facebookContent, this);\n'))),(0,o.kt)(f,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSArray *profileIds = @[ @"a-profile-id", @"another-profile-id" ];\nNSString *fcmContent = @"{\\"notification\\":{\\"body\\":\\"content of message\\",\\"title\\":\\"message title\\"},\\"data\\":{\\"customfield1\\":\\"customValue1\\",\\"customfield2\\":\\"customValue2\\"},\\"priority\\":\\"normal\\"}";\nNSString *iosContent = @"{\\"aps\\":{\\"alert\\":{\\"body\\":\\"content of message\\",\\"title\\":\\"message title\\"},\\"badge\\":0,\\"sound\\":\\"gggg\\"}}";\nNSString *facebookContent = @"{\\"template\\":\\"content of message\\"}";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc pushNotificationService] sendRawPushNotificationBatch:profileIds\n                 fcmContent:fcmContent\n                 iosContent:iosContent\n            facebookContent:facebookContent\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,o.kt)(f,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'String[] profileIds = { "a-profile-id", "another-profile-id" };\nString fcmContent = "{\\"notification\\":{\\"body\\":\\"content of message\\",\\"title\\":\\"message title\\"},\\"data\\":{\\"customfield1\\":\\"customValue1\\",\\"customfield2\\":\\"customValue2\\"},\\"priority\\":\\"normal\\"}";\nString iosContent = "{\\"aps\\":{\\"alert\\":{\\"body\\":\\"content of message\\",\\"title\\":\\"message title\\"},\\"badge\\":0,\\"sound\\":\\"gggg\\"}}";\nString facebookContent = "{\\"template\\":\\"content of message\\"}";\nthis; // implements IServerCallback\n\n_bc.getPushNotificationService().sendRawPushNotificationBatch(profileIds, fcmContent, iosContent, facebookContent, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,o.kt)(f,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var profileIds = [ "a-profile-id", "another-profile-id" ];\nvar fcmContent = {\n    "notification": {\n        "body": "content of message",\n        "title": "message title"\n    },\n    "data": {\n        "customfield1": "customValue1",\n        "customfield2": "customValue2"\n    },\n    "priority": "normal"\n};\nvar iosContent = {\n    "aps": {\n        "alert": {\n            "body": "content of message",\n            "title": "message title"\n        },\n        "badge": 0,\n        "sound": "gggg"\n    }\n};\nvar facebookContent = {\n    "template": "content of message"\n};\n\n_bc.pushNotification.sendRawPushNotificationBatch(profileIds, fcmContent, iosContent, facebookContent, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,o.kt)(f,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cfscript"},'var profileIds = [ "a-profile-id", "another-profile-id" ];\nvar fcmContent = {\n    "notification": {\n        "body": "content of message",\n        "title": "message title"\n    },\n    "data": {\n        "customfield1": "customValue1",\n        "customfield2": "customValue2"\n    },\n    "priority": "normal"\n};\nvar iosContent = {\n    "aps": {\n        "alert": {\n            "body": "content of message",\n            "title": "message title"\n        },\n        "badge": 0,\n        "sound": "gggg"\n    }\n};\nvar facebookContent = {\n    "template": "content of message"\n};\nvar pushNotificationProxy = bridge.getPushNotificationServiceProxy();\n\nvar postResult = pushNotificationProxy.sendRawPushNotificationBatch(profileIds, fcmContent, iosContent, facebookContent);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,o.kt)(f,{value:"r",label:"Raw",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "pushNotification",\n    "operation": "SEND_RAW_BATCH",\n    "data": {\n        "profileIds": [\n            "the-profile-id",\n            "another-profile-id"\n        ],\n        "fcmContent": {\n            "notification": {\n                "body": "content of message",\n                "title": "message title"\n            },\n            "data": {\n                "customfield1": "customValue1",\n                "customfield2": "customValue2"\n            },\n            "priority": "normal"\n        },\n        "iosContent": {\n            "aps": {\n                "alert": {\n                    "body": "content of message",\n                    "title": "message title"\n                },\n                "badge": 0,\n                "sound": "gggg"\n            }\n        },\n        "facebookContent": {\n            "template": "content of message"\n        }\n    }\n}\n'))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"JSON Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": null\n}\n'))),(0,o.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"profileIds"),(0,o.kt)("td",{parentName:"tr",align:null},"Target user list")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"alertContentJson"),(0,o.kt)("td",{parentName:"tr",align:null},"Body and title of alert")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"customDataJson"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional custom data")))))}b.isMDXComponent=!0}}]);