"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[33964],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>N});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,N=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(N,l(l({ref:t},i),{},{components:n})):a.createElement(N,l({ref:t},i))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[c]="string"==typeof e?e:r,l[1]=d;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},l="ProcessAsynchronousResponse",d={unversionedId:"api/capi/redemptioncode/processasynchronousresponse",id:"api/capi/redemptioncode/processasynchronousresponse",title:"ProcessAsynchronousResponse",description:"Overview",source:"@site/docs/api/2_capi/redemptioncode/processasynchronousresponse.md",sourceDirName:"api/2_capi/redemptioncode",slug:"/api/capi/redemptioncode/processasynchronousresponse",permalink:"/braincloud-apiref/api/capi/redemptioncode/processasynchronousresponse",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/redemptioncode/processasynchronousresponse.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1673042992,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{},sidebar:"apiSidebar",previous:{title:"InvalidateCode",permalink:"/braincloud-apiref/api/capi/redemptioncode/invalidatecode"},next:{title:"RedeemCode",permalink:"/braincloud-apiref/api/capi/redemptioncode/redeemcode"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Method Parameters",id:"method-parameters",level:2}],i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=i("PartialServop"),m=i("BrowserWindow"),u=i("Tabs"),N=i("TabItem"),k={toc:s};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"processasynchronousresponse"},"ProcessAsynchronousResponse"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Callback with asynchronous response for the redemption code service to process for an asynchronous redemption code."),(0,r.kt)(c,{service_name:"redemptionCode",operation_name:"PROCESS_ASYNCHRONOUS_RESPONSE",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(m,{mdxType:"BrowserWindow"},(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(N,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(N,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(N,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(N,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(N,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(N,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var scanCode = "the-scan-code";\nvar redemptionCodeId = "the-redemption-code-id";\nvar codeType = "";\nvar attempt = 0;\nvar asyncResponse = {\n  "success": true,\n  "complete": false,\n  "customRedemptionInfo": {\n    "someCustomKey": "someCustomValue"\n  }\n};\nvar redemptionCodeProxy = bridge.getRedemptionCodeServiceProxy();\n\nvar postResult = redemptionCodeProxy.processAsynchronousResponse(scanCode, redemptionCodeId, codeType, attempt, asyncResponse);\nif (postResult.status == 200) {\n  // Success!\n}\n'))),(0,r.kt)(N,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n  "service": "redemptionCode",\n  "operation": "PROCESS_ASYNCHRONOUS_RESPONSE",\n  "data":\n  {\n    "scanCode": "the-scan-code",\n    "redemptionCodeId": "the-redemption-code-id",\n    "codeType": "",\n    "attempt": 0,\n    "asyncResponse": {\n      "success": true,\n      "complete": false,\n      "customRedemptionInfo": {\n        "someCustomKey": "someCustomValue"\n      }\n    }\n  }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "gameId": "23713",\n    "scanCode": "fdjsl-zh5h2-mwdw1-no0ua-x40ci",\n    "codeType": "test22",\n    "redemptionCodeId": "b75e0c13-08d2-41d1-9cf6-ff4a72356d2f",\n    "version": 3,\n    "codeState": "InProgress",\n    "customCodeInfo": {\n      "factoryId": 22\n    },\n    "customRedemptionInfo": {\n      "transaction_id": "9d3936f686fccd646669f67f332440e54a48f5c05a562c89a6637dc1125654eb"\n    },\n    "redeemedByProfileId": null,\n    "redeemedByProfileName": null,\n    "invalidationReason": null,\n    "createdAt": 1655818588627,\n    "activatedAt": 1655818588627,\n    "redeemedAt": null,\n    "invalidatedAt": null,\n    "updatedAt": 1655818611860,\n    "currentAttempt": 0,\n    "status": {\n      "attempt": 0,\n      "attemptedAt": 1655818605849,\n      "attemptedBy": "c14caf2b-6c72-4c8e-9280-54356f7d56c2",\n      "scriptId": "2f944060-9eff-40c4-bdc3-ab7d00f83f35",\n      "scriptVersion": 38,\n      "attemptState": "IN_PROGRESS",\n      "response": {\n        "success": true,\n        "complete": false,\n        "customRedemptionInfo": {\n          "transaction_id": "9d3936f686fccd646669f67f332440e54a48f5c05a562c89a6637dc1125654eb"\n        },\n        "errorCode": null,\n        "errorMsg": null\n      }\n    }\n  },\n  "status": 200\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Common Error Code"),(0,r.kt)("h3",{id:"status-codes"},"Status Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40395"),(0,r.kt)("td",{parentName:"tr",align:null},"REDEMPTION_CODE_NOT_FOUND"),(0,r.kt)("td",{parentName:"tr",align:null},"The specified code was not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40398"),(0,r.kt)("td",{parentName:"tr",align:null},"REDEMPTION_CODE_NOT_ACTIVE"),(0,r.kt)("td",{parentName:"tr",align:null},"The specified code is not active")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40401"),(0,r.kt)("td",{parentName:"tr",align:null},"REDEMPTION_CODE_REDEEMED"),(0,r.kt)("td",{parentName:"tr",align:null},"The code has already been redeemed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40402"),(0,r.kt)("td",{parentName:"tr",align:null},"REDEMPTION_CODE_REDEEMED_BY_SELF"),(0,r.kt)("td",{parentName:"tr",align:null},"The code has already been redeemed by the calling user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40403"),(0,r.kt)("td",{parentName:"tr",align:null},"REDEMPTION_CODE_REDEEMED_BY_OTHER"),(0,r.kt)("td",{parentName:"tr",align:null},"The code has already been redeemed by another user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40757"),(0,r.kt)("td",{parentName:"tr",align:null},"REDEMPTION_OF_CUSTOM_CODE_FAILED"),(0,r.kt)("td",{parentName:"tr",align:null},"Missing identity, required for get identity data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40758"),(0,r.kt)("td",{parentName:"tr",align:null},"REDEMPTION_CODE_NOT_IN_PROGRESS"),(0,r.kt)("td",{parentName:"tr",align:null},"The code state is not in progress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40759"),(0,r.kt)("td",{parentName:"tr",align:null},"REDEMPTION_CODE_ATTEMPT_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"The attempt number input was not correct")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40760"),(0,r.kt)("td",{parentName:"tr",align:null},"REDEMPTION_CODE_ATTEMPT_MISMATCH"),(0,r.kt)("td",{parentName:"tr",align:null},"The applicable attempt number associated with the redemption attempt being processed doesn't match the code type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40761"),(0,r.kt)("td",{parentName:"tr",align:null},"REDEMPTION_CODE_ASYNC_BAD_RESPONSE"),(0,r.kt)("td",{parentName:"tr",align:null},"The asynchronous response was not correct")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40762"),(0,r.kt)("td",{parentName:"tr",align:null},"REDEMPTION_CODE_BY_ID_NOT_FOUND"),(0,r.kt)("td",{parentName:"tr",align:null},"The specified code was not found by redemptionCodeId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40767"),(0,r.kt)("td",{parentName:"tr",align:null},"REDEMPTION_CODE_TYPE_NOT_ASYNC"),(0,r.kt)("td",{parentName:"tr",align:null},"The specified codeType was not asynchronous")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40768"),(0,r.kt)("td",{parentName:"tr",align:null},"REDEMPTION_CODE_ASYNC_PROCESSING_TIMEOUT"),(0,r.kt)("td",{parentName:"tr",align:null},"The specified timeout was hit"))))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scanCode"),(0,r.kt)("td",{parentName:"tr",align:null},"The scan code being redeemed. Required.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redemptionCodeId"),(0,r.kt)("td",{parentName:"tr",align:null},"The redemption code id of the redemption code being processed. Required.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"codeType"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of the scan code. Optional.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attempt"),(0,r.kt)("td",{parentName:"tr",align:null},"The applicable attempt number associated with the redemption attempt being processed. Required.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"asyncResponse"),(0,r.kt)("td",{parentName:"tr",align:null},"Required asynchronous response info, as JSON object, indicating status via success and complete flags, along with applicable, but optional, customRedemptionInfo (JSON object) and/or errorCode (Integer) and errorMsg (String).  Note: A timeout exception is thrown if the max asynchronous processing time (configured for the associated redemption code type) has been exceeded and processing is still in progress (complete: false).")))))}y.isMDXComponent=!0}}]);