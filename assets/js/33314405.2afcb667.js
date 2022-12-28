"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[20634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>v,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={},r="ScheduleNormalizedPushNotificationMinutes",s={unversionedId:"api/capi/pushnotification/schedulenormalizedpushnotificationminutes",id:"api/capi/pushnotification/schedulenormalizedpushnotificationminutes",title:"ScheduleNormalizedPushNotificationMinutes",description:"Overview",source:"@site/docs/api/2_capi/pushnotification/schedulenormalizedpushnotificationminutes.md",sourceDirName:"api/2_capi/pushnotification",slug:"/api/capi/pushnotification/schedulenormalizedpushnotificationminutes",permalink:"/braincloud-apiref/api/capi/pushnotification/schedulenormalizedpushnotificationminutes",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/pushnotification/schedulenormalizedpushnotificationminutes.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"RegisterPushNotificationDeviceToken",permalink:"/braincloud-apiref/api/capi/pushnotification/registerpushnotificationdevicetoken"},next:{title:"ScheduleNormalizedPushNotificationUTC",permalink:"/braincloud-apiref/api/capi/pushnotification/schedulenormalizedpushnotificationutc"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},p=u("PartialServop"),m=u("BrowserWindow"),d=u("Tabs"),f=u("TabItem"),h={toc:c};function v(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"schedulenormalizedpushnotificationminutes"},"ScheduleNormalizedPushNotificationMinutes"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Schedules a normalized push notification to a user at a future relative time."),(0,o.kt)(p,{service_name:"pushNotification",operation_name:"SCHEDULE_NORMALIZED_NOTIFICATION",mdxType:"PartialServop"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(m,{mdxType:"BrowserWindow"},(0,o.kt)(d,{mdxType:"Tabs"},(0,o.kt)(f,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'string profileId = "kjhkjhgfkjshgkjh";\nstring alertContentJson = "{\\"body\\":\\"content of message\\",\\"title\\":\\"message title\\"}";\nstring customDataJson = "{\\"field1\\":\\"value1\\",\\"field2\\":\\"value2\\"}";\nint minutesFromNow = 1;\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.PushNotificationService.ScheduleNormalizedPushNotificationMinutes(profileId, alertContentJson, customDataJson, minutesFromNow, successCallback, failureCallback);\n'))),(0,o.kt)(f,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *profileId = "kjhkjhgfkjshgkjh";\nconst char *alertContentJson = "{\\"body\\":\\"content of message\\",\\"title\\":\\"message title\\"}";\nconst char *customDataJson = "{\\"field1\\":\\"value1\\",\\"field2\\":\\"value2\\"}";\nint minutesFromNow = 1;\n_bc->getPushNotificationService()->scheduleNormalizedPushNotificationMinutes(profileId, alertContentJson, customDataJson, minutesFromNow, this);\n'))),(0,o.kt)(f,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *profileId = @"kjhkjhgfkjshgkjh";\nNSString *alertContentJson = @"{\\"body\\":\\"content of message\\",\\"title\\":\\"message title\\"}";\nNSString *customDataJson = @"{\\"field1\\":\\"value1\\",\\"field2\\":\\"value2\\"}";\nint minutesFromNow = 1;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc pushNotificationService] scheduleNormalizedPushNotificationMinutes:profileId\n           alertContentJson:alertContentJson\n             customDataJson:customDataJson\n             minutesFromNow:minutesFromNow\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,o.kt)(f,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'String profileId = "kjhkjhgfkjshgkjh";\nString alertContentJson = "{\\"body\\":\\"content of message\\",\\"title\\":\\"message title\\"}";\nString customDataJson = "{\\"field1\\":\\"value1\\",\\"field2\\":\\"value2\\"}";\nint minutesFromNow = 1;\nthis; // implements IServerCallback\n\n_bc.getPushNotificationService().scheduleNormalizedPushNotificationMinutes(profileId, alertContentJson, customDataJson, minutesFromNow, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,o.kt)(f,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var profileId = "kjhkjhgfkjshgkjh";\nvar alertContentJson = {\n    "body": "content of message",\n    "title": "message title"\n};\nvar customDataJson = {\n    "field1": "value1",\n    "field2": "value2"\n};\nvar minutesFromNow = 1;\n\n_bc.pushNotification.scheduleNormalizedPushNotificationMinutes(profileId, alertContentJson, customDataJson, minutesFromNow, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,o.kt)(f,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cfscript"},'var profileId = "kjhkjhgfkjshgkjh";\nvar alertContentJson = {\n    "body": "content of message",\n    "title": "message title"\n};\nvar customDataJson = {\n    "field1": "value1",\n    "field2": "value2"\n};\nvar minutesFromNow = 1;\nvar pushNotificationProxy = bridge.getPushNotificationServiceProxy();\n\nvar postResult = pushNotificationProxy.scheduleNormalizedPushNotificationMinutes(profileId, alertContentJson, customDataJson, minutesFromNow);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,o.kt)(f,{value:"r",label:"Raw",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "pushNotification",\n    "operation": "SCHEDULE_NORMALIZED_NOTIFICATION",\n    "data": {\n        "profileId": "kjhkjhgfkjshgkjh",\n        "alertContent": {\n            "body": "content of message",\n            "title": "message title"\n        },\n        "customData": {\n            "field1": "value1",\n            "field2": "value2"\n        },\n        "startDateUTC": "[[#ts+60000]]"\n    }\n}\n'))))),(0,o.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"profileId"),(0,o.kt)("td",{parentName:"tr",align:null},"Identifies the user to send to")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"alertContent"),(0,o.kt)("td",{parentName:"tr",align:null},"Body and title of alert")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"customData"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional custom data")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"minutesFromNow"),(0,o.kt)("td",{parentName:"tr",align:null},"Minutes in the future to send notification")))))}v.isMDXComponent=!0}}]);