"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[69679],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(a),v=r,d=u["".concat(l,".").concat(v)]||u[v]||m[v]||o;return a?n.createElement(d,s(s({ref:t},p),{},{components:a})):n.createElement(d,s({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=v;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,s[1]=c;for(var i=2;i<o;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}v.displayName="MDXCreateElement"},46795:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const o={},s="CustomScreenEvent",c={unversionedId:"api/capi/datastream/customscreenevent",id:"api/capi/datastream/customscreenevent",title:"CustomScreenEvent",description:"Overview",source:"@site/docs/api/2_capi/datastream/customscreenevent.md",sourceDirName:"api/2_capi/datastream",slug:"/api/capi/datastream/customscreenevent",permalink:"/braincloud-apiref/api/capi/datastream/customscreenevent",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/datastream/customscreenevent.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"CustomPageEvent",permalink:"/braincloud-apiref/api/capi/datastream/custompageevent"},next:{title:"CustomTrackEvent",permalink:"/braincloud-apiref/api/capi/datastream/customtrackevent"}},l={},i=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=p("PartialServop"),m=p("BrowserWindow"),v=p("Tabs"),d=p("TabItem"),k={toc:i};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"customscreenevent"},"CustomScreenEvent"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Creates custom data stream screen event"),(0,r.kt)(u,{service_name:"dataStream",operation_name:"CUSTOM_SCREEN_EVENT",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(m,{mdxType:"BrowserWindow"},(0,r.kt)(v,{mdxType:"Tabs"},(0,r.kt)(d,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string eventName = "customEvent";\nstring jsonEventProperties = "{\\"key1\\":\\"value\\",\\"key2\\":\\"value\\"}";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.DataStreamService.CustomScreenEvent(eventName, jsonEventProperties, successCallback, failureCallback);\n'))),(0,r.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *eventName = "customEvent";\nconst char *jsonEventProperties = "{\\"key1\\":\\"value\\",\\"key2\\":\\"value\\"}";\n_bc->getDataStreamService()->customScreenEvent(eventName, jsonEventProperties, this);\n'))),(0,r.kt)(d,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *eventName = @"customEvent";\nNSString *jsonEventProperties = @"{\\"key1\\":\\"value\\",\\"key2\\":\\"value\\"}";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc dataStreamService] customScreenEvent:eventName\n        jsonEventProperties:jsonEventProperties\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,r.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String eventName = "customEvent";\nString jsonEventProperties = "{\\"key1\\":\\"value\\",\\"key2\\":\\"value\\"}";\nthis; // implements IServerCallback\n\n_bc.getDataStreamService().customScreenEvent(eventName, jsonEventProperties, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,r.kt)(d,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var eventName = "customEvent";\nvar jsonEventProperties = {\n    "key1": "value",\n    "key2": "value"\n};\n\n_bc.dataStream.customScreenEvent(eventName, jsonEventProperties, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,r.kt)(d,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var eventName = "customEvent";\nvar jsonEventProperties = {\n    "key1": "value",\n    "key2": "value"\n};\nvar dataStreamProxy = bridge.getDataStreamServiceProxy();\n\nvar postResult = dataStreamProxy.customScreenEvent(eventName, jsonEventProperties);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(d,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "dataStream",\n    "operation": "CUSTOM_SCREEN_EVENT",\n    "data": {\n        "eventName": "customEvent",\n        "eventProperties": {\n            "key1": "value",\n            "key2": "value"\n        }\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": null\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventName"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventProperties"),(0,r.kt)("td",{parentName:"tr",align:null},"The properties of the event")))))}b.isMDXComponent=!0}}]);