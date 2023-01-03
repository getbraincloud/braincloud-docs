"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[82526],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=i(n),u=r,b=s["".concat(l,".").concat(u)]||s[u]||m[u]||o;return n?a.createElement(b,d(d({ref:t},p),{},{components:n})):a.createElement(b,d({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,d=new Array(o);d[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:r,d[1]=c;for(var i=2;i<o;i++)d[i]=n[i];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={},d="RedeemCode",c={unversionedId:"api/capi/redemptioncode/redeemcode",id:"api/capi/redemptioncode/redeemcode",title:"RedeemCode",description:"Overview",source:"@site/docs/api/2_capi/redemptioncode/redeemcode.md",sourceDirName:"api/2_capi/redemptioncode",slug:"/api/capi/redemptioncode/redeemcode",permalink:"/braincloud-apiref/api/capi/redemptioncode/redeemcode",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/redemptioncode/redeemcode.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671831235,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"ProcessAsynchronousResponse",permalink:"/braincloud-apiref/api/capi/redemptioncode/processasynchronousresponse"},next:{title:"UpdateCustomInfo",permalink:"/braincloud-apiref/api/capi/redemptioncode/updatecustominfo"}},l={},i=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2},{value:"Status Codes",id:"status-codes",level:4}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},s=p("PartialServop"),m=p("BrowserWindow"),u=p("Tabs"),b=p("TabItem"),k={toc:i};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"redeemcode"},"RedeemCode"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Redeem a code."),(0,r.kt)(s,{service_name:"redemptionCode",operation_name:"REDEEM_CODE",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(m,{mdxType:"BrowserWindow"},(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(b,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string scanCode = "a scan code";\nstring codeType = "a code type";\nstring customRedemptionInfo = "{}";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.RedemptionCodeService.RedeemCode(scanCode, codeType, customRedemptionInfo, successCallback, failureCallback);\n'))),(0,r.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *scanCode = "a scan code";\nconst char *codeType = "a code type";\nconst char *customRedemptionInfo = "{}";\n_bc->getRedemptionCodeService()->redeemCode(scanCode, codeType, customRedemptionInfo, this);\n'))),(0,r.kt)(b,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *scanCode = @"a scan code";\nNSString *codeType = @"a code type";\nNSString *customRedemptionInfo = @"{}";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc redemptionCodeService] redeemCode:scanCode\n                   codeType:codeType\n       customRedemptionInfo:customRedemptionInfo\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,r.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String scanCode = "a scan code";\nString codeType = "a code type";\nString customRedemptionInfo = "{}";\nthis; // implements IServerCallback\n\n_bc.getRedemptionCodeService().redeemCode(scanCode, codeType, customRedemptionInfo, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,r.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var scanCode = "a scan code";\nvar codeType = "a code type";\nvar customRedemptionInfo = {};\n\n_bc.redemptionCode.redeemCode(scanCode, codeType, customRedemptionInfo, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,r.kt)(b,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var scanCode = "a scan code";\nvar codeType = "a code type";\nvar customRedemptionInfo = {};\nvar redemptionCodeProxy = bridge.getRedemptionCodeServiceProxy();\n\nvar postResult = redemptionCodeProxy.redeemCode(scanCode, codeType, customRedemptionInfo);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(b,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "redemptionCode",\n    "operation": "REDEEM_CODE",\n    "data": {\n        "scanCode": "the-scan-code",\n        "codeType": "the-code-type",\n        "customRedemptionInfo": {}\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "gameId": "23782",\n    "scanCode": "vfaok-yu7gy-y4ida-jhibz-rtikc",\n    "codeType": "ct",\n    "redemptionCodeId": "ea2db0da-ef7b-4390-b747-df2eafaba2a3",\n    "version": 2,\n    "codeState": "Redeemed",\n    "customCodeInfo": {},\n    "customRedemptionInfo": {},\n    "redeemedByProfileId": "c5ecdbda-5f91-41a9-96aa-174f412f7657",\n    "redeemedByProfileName": "",\n    "invalidationReason": null,\n    "createdAt": 1655757623392,\n    "activatedAt": 1655757623392,\n    "redeemedAt": 1655758430895,\n    "invalidatedAt": null,\n    "updatedAt": 1655757623392\n  },\n  "status": 200\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scanCode"),(0,r.kt)("td",{parentName:"tr",align:null},"The code to redeem")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"codeType"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jsonCustomRedemptionInfo"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional - A JSON string containing custom redemption data")))),(0,r.kt)("h4",{id:"status-codes"},"Status Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40395"),(0,r.kt)("td",{parentName:"tr",align:null},"REDEMPTION_CODE_NOT_FOUND"),(0,r.kt)("td",{parentName:"tr",align:null},"The specified code was not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40398"),(0,r.kt)("td",{parentName:"tr",align:null},"REDEMPTION_CODE_NOT_ACTIVE"),(0,r.kt)("td",{parentName:"tr",align:null},"The specified code is not active")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40399"),(0,r.kt)("td",{parentName:"tr",align:null},"REDEMPTION_CODE_TYPE_NOT_FOUND"),(0,r.kt)("td",{parentName:"tr",align:null},"The specified code type was not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40401"),(0,r.kt)("td",{parentName:"tr",align:null},"REDEMPTION_CODE_REDEEMED"),(0,r.kt)("td",{parentName:"tr",align:null},"The code has already been redeemed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40402"),(0,r.kt)("td",{parentName:"tr",align:null},"REDEMPTION_CODE_REDEEMED_BY_SELF"),(0,r.kt)("td",{parentName:"tr",align:null},"The code has already been redeemed by the calling user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40403"),(0,r.kt)("td",{parentName:"tr",align:null},"REDEMPTION_CODE_REDEEMED_BY_OTHER"),(0,r.kt)("td",{parentName:"tr",align:null},"The code has already been redeemed by another user")))))}g.isMDXComponent=!0}}]);