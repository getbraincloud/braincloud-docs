"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[66831],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>v});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=i(a),u=r,v=s["".concat(l,".").concat(u)]||s[u]||m[u]||o;return a?n.createElement(v,c(c({ref:t},p),{},{components:a})):n.createElement(v,c({ref:t},p))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[s]="string"==typeof e?e:r,c[1]=d;for(var i=2;i<o;i++)c[i]=a[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7941:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>k,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const o={},c="ActivateCode",d={unversionedId:"api/capi/redemptioncode/activatecode",id:"api/capi/redemptioncode/activatecode",title:"ActivateCode",description:"Overview",source:"@site/docs/api/2_capi/redemptioncode/activatecode.md",sourceDirName:"api/2_capi/redemptioncode",slug:"/api/capi/redemptioncode/activatecode",permalink:"/braincloud-apiref/api/capi/redemptioncode/activatecode",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/redemptioncode/activatecode.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Redemption Code",permalink:"/braincloud-apiref/api/capi/redemptioncode/"},next:{title:"AddCode",permalink:"/braincloud-apiref/api/capi/redemptioncode/addcode"}},l={},i=[{value:"Overview",id:"overview",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},s=p("PartialServop"),m=p("BrowserWindow"),u=p("Tabs"),v=p("TabItem"),b={toc:i};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"activatecode"},"ActivateCode"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Activate a redemption code. Optional parameters: customCodeInfo."),(0,r.kt)("h3",{id:"status-codes"},"Status Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40399"),(0,r.kt)("td",{parentName:"tr",align:null},"REDEMPTION_CODE_TYPE_NOT_FOUND"),(0,r.kt)("td",{parentName:"tr",align:null},"The specified code type was not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40395"),(0,r.kt)("td",{parentName:"tr",align:null},"REDEMPTION_CODE_NOT_FOUND"),(0,r.kt)("td",{parentName:"tr",align:null},"The specified code was not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40397"),(0,r.kt)("td",{parentName:"tr",align:null},"REDEMPTION_CODE_ACTIVE"),(0,r.kt)("td",{parentName:"tr",align:null},"Redemption code already activated")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40400"),(0,r.kt)("td",{parentName:"tr",align:null},"REDEMPTION_CODE_INVALID"),(0,r.kt)("td",{parentName:"tr",align:null},"Redemption code invalid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40753"),(0,r.kt)("td",{parentName:"tr",align:null},"REDEMPTION_CODE_TYPE_DISABLED"),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid code. Redemption code type has been disabled")))),(0,r.kt)(s,{service_name:"redemptionCode",operation_name:"ACTIVATE_CODE",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(m,{mdxType:"BrowserWindow"},(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(v,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string scanCode = "the-scan-code";\nstring codeType = "the-code-type";\nstring customCodeInfo = "{}";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n  Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n  Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.RedemptionCodeService.ActivateCode(scanCode, codeType, customCodeInfo, successCallback, failureCallback);\n'))),(0,r.kt)(v,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *scanCode = "the-scan-code";\nconst char *codeType = "the-code-type";\nconst char *customCodeInfo = "{}";\n\n_bc->getRedemptionCodeService()->activateCode(scanCode, codeType, customCodeInfo, this);\n'))),(0,r.kt)(v,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *scanCode = @"the-scan-code";\nNSString *codeType = @"the-code-type";\nNSString *customCodeInfo = "{}";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc redemptionCodeService] activateCode:scanCode\n                      codeType:codeType\n                customCodeInfo:customCodeInfo\n               completionBlock:successBlock\n          errorCompletionBlock:failureBlock\n                      cbObject:nil];\n'))),(0,r.kt)(v,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String scanCode = "the-scan-code";\nString codeType = "the-code-type";\nString customCodeInfo = "{}";\nthis; // implements IServerCallback\n\n_bc.getRedemptionCodeService().activateCode(scanCode, codeType, customCodeInfo, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n  System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n  System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,r.kt)(v,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var scanCode = "the-scan-code";\nvar codeType = "the-code-type";\nvar customCodeInfo = {};\n\n_bc.redemptionCode.activateCode(scanCode, codeType, customCodeInfo, result =>\n{\n  var status = result.status;\n  console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,r.kt)(v,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var scanCode = "the-scan-code";\nvar codeType = "the-code-type";\nvar customCodeInfo = {};\nvar redemptionCodeProxy = bridge.getRedemptionCodeServiceProxy();\n\nvar postResult = redemptionCodeProxy.activateCode(scanCode, codeType, customCodeInfo);\nif (postResult.status == 200) {\n  // Success!\n}\n'))),(0,r.kt)(v,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n  "service": "redemptionCode",\n  "operation": "ACTIVATE_CODE",\n  "data":\n  {\n    "scanCode": "the-scan-code",\n    "codeType": "the-code-type",\n    "customCodeInfo": {}\n  }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "gameId": "23782",\n    "scanCode": "a-scan-code",\n    "codeType": "ct",\n    "redemptionCodeId": "7379b058-8669-4199-b4bb-712f1e77ea8e",\n    "version": 2,\n    "codeState": "Available",\n    "customCodeInfo": {},\n    "customRedemptionInfo": {},\n    "redeemedByProfileId": null,\n    "redeemedByProfileName": null,\n    "invalidationReason": null,\n    "createdAt": 1655483646387,\n    "activatedAt": 1655483664964,\n    "redeemedAt": null,\n    "invalidatedAt": null,\n    "updatedAt": 1655483646387\n  },\n  "status": 200\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scanCode"),(0,r.kt)("td",{parentName:"tr",align:null},"The scan code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"codeType"),(0,r.kt)("td",{parentName:"tr",align:null},"The code type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customCodeInfo"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional custom information.")))))}k.isMDXComponent=!0}}]);