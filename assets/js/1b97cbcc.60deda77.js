"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[50375],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?n.createElement(f,s(s({ref:r},c),{},{components:t})):n.createElement(f,s({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87633:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const o={},s="RefreshPromotions",i={unversionedId:"api/capi/appstore/refreshpromotions",id:"api/capi/appstore/refreshpromotions",title:"RefreshPromotions",description:"Overview",source:"@site/docs/api/2_capi/appstore/refreshpromotions.md",sourceDirName:"api/2_capi/appstore",slug:"/api/capi/appstore/refreshpromotions",permalink:"/braincloud-apiref/api/capi/appstore/refreshpromotions",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/appstore/refreshpromotions.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"GetSalesInventoryByCategory",permalink:"/braincloud-apiref/api/capi/appstore/getsalesinventorybycategory"},next:{title:"ReturnPurchase",permalink:"/braincloud-apiref/api/capi/appstore/returnpurchase"}},p={},l=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2}],c=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",r)},u=c("PartialServop"),m=c("BrowserWindow"),d=c("Tabs"),f=c("TabItem"),b={toc:l};function g(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},b,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"refreshpromotions"},"RefreshPromotions"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Returns up-to-date eligible 'promotions' for the user and a 'promotionsRefreshed' flag indicating whether the user's promotion info required refreshing."),(0,a.kt)("admonition",{type:"success"},(0,a.kt)("p",{parentName:"admonition"},"A user\u2019s segments and promotions are automatically refreshed when they authenticate. Calling this method allows apps to periodically refresh the segment + promotion data for the user during the play session.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Note that this is an expensive call - calling it is equates to 2 API counts (technically 1 API + 10 bulk API) - so use it sparingly!")),(0,a.kt)(u,{service_name:"appStore",operation_name:"REFRESH_PROMOTIONS",mdxType:"PartialServop"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(m,{mdxType:"BrowserWindow"},(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(f,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'SuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.AppStoreService.RefreshPromotions(successCallback, failureCallback);\n'))),(0,a.kt)(f,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"_bc->getAppStoreService()->refreshPromotions(this);\n"))),(0,a.kt)(f,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"BCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc appStoreService] refreshPromotions:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n"))),(0,a.kt)(f,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'this; // implements IServerCallback\n\n_bc.getAppStoreService().refreshPromotions(this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,a.kt)(f,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'\n_bc.appStore.refreshPromotions(result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,a.kt)(f,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cfscript"},"var appStoreProxy = bridge.getAppStoreServiceProxy();\n\nvar postResult = appStoreProxy.refreshPromotions();\nif (postResult.status == 200) {\n    // Success!\n}\n"))),(0,a.kt)(f,{value:"r",label:"Raw",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "appStore",\n    "operation": "REFRESH_PROMOTIONS"\n}\n'))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"JSON Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "promotionsRefreshed": false,\n    "promotions": [\n      {\n        "gameId": "24591",\n        "promotionId": 13,\n        "type": "AUTOMATED",\n        "name": "adtestidunder50",\n        "message": "",\n        "enabled": true,\n        "segments": [\n          3\n        ],\n        "prices": [\n          {\n            "itemId": "barBundle1Imp",\n            "priceId": 0\n          },\n          {\n            "itemId": "gemcollection",\n            "priceId": 3\n          }\n        ],\n        "notifications": [\n          {\n            "trigger": "ACTIVATED",\n            "notificationTemplateId": 1\n          }\n        ],\n        "duration": 5,\n        "customJson": null,\n        "isRetriggerable": true,\n        "maxRetriggers": null,\n        "maxPurchases": 1,\n        "createdAt": 1619802897824,\n        "updatedAt": 1619802981253,\n        "version": 2,\n        "triggeredForUserAt": 1619802981350,\n        "expiresForUserAt": 1619820981350\n      }\n    ]\n  },\n  "status": 200\n}\n'))))}g.isMDXComponent=!0}}]);