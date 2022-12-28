"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[92172],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>b});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),c=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=n,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(b,o(o({ref:r},p),{},{components:t})):a.createElement(b,o({ref:r},p))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},64653:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(87462),n=(t(67294),t(3905));const i={},o="ReceiveUserItemFrom",s={unversionedId:"api/capi/useritems/receiveuseritemfrom",id:"api/capi/useritems/receiveuseritemfrom",title:"ReceiveUserItemFrom",description:"Overview",source:"@site/docs/api/2_capi/useritems/receiveuseritemfrom.md",sourceDirName:"api/2_capi/useritems",slug:"/api/capi/useritems/receiveuseritemfrom",permalink:"/braincloud-apiref/api/capi/useritems/receiveuseritemfrom",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/useritems/receiveuseritemfrom.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"PurchaseUserItem",permalink:"/braincloud-apiref/api/capi/useritems/purchaseuseritem"},next:{title:"RefreshBlockchainUserItems",permalink:"/braincloud-apiref/api/capi/useritems/refreshblockchainuseritems"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",r)},m=p("PartialServop"),u=p("BrowserWindow"),d=p("Tabs"),b=p("TabItem"),v={toc:c};function f(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},v,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"receiveuseritemfrom"},"ReceiveUserItemFrom"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Retrieves and transfers the gift item from the specified player, who must have previously called giveUserItemTo."),(0,n.kt)(m,{service_name:"userItems",operation_name:"RECEIVE_USER_ITEM_FROM",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(u,{mdxType:"BrowserWindow"},(0,n.kt)(d,{mdxType:"Tabs"},(0,n.kt)(b,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'string profileId = "a-user-profileId";\nstring itemId = "aaa-bbb-ccc-ddd";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.UserItemsService.ReceiveUserItemFrom(profileId, itemId, successCallback, failureCallback);\n'))),(0,n.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *profileId = "a-user-profileId";\nconst char *itemId = "aaa-bbb-ccc-ddd";\n_bc->getUserItemsService()->receiveUserItemFrom(profileId, itemId, this);\n'))),(0,n.kt)(b,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *profileId = @"a-user-profileId";\nNSString *itemId = @"aaa-bbb-ccc-ddd";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc userItemsService] receiveUserItemFrom:profileId\n                     itemId:itemId\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,n.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String profileId = "a-user-profileId";\nString itemId = "aaa-bbb-ccc-ddd";\nthis; // implements IServerCallback\n\n_bc.getUserItemsService().receiveUserItemFrom(profileId, itemId, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,n.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var profileId = "a-user-profileId";\nvar itemId = "aaa-bbb-ccc-ddd";\n\n_bc.userItems.receiveUserItemFrom(profileId, itemId, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)(b,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var profileId = "a-user-profileId";\nvar itemId = "aaa-bbb-ccc-ddd";\nvar userItemsProxy = bridge.getUserItemsServiceProxy();\n\nvar postResult = userItemsProxy.receiveUserItemFrom(profileId, itemId);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,n.kt)(b,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "userItems",\n    "operation": "RECEIVE_USER_ITEM_FROM",\n    "data": {\n        "profileId": "a-user-profileId",\n        "itemId": "aaa-bbb-ccc-ddd"\n    }\n}\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "item": {\n      "itemId": "692ac167-ed6a-4539-9513-c7149d7166c2",\n      "defId": "boost_rapidfire",\n      "quantity": 1,\n      "usesLeft": null,\n      "coolDownStart": -1,\n      "recoveryStart": -1,\n      "itemData": {},\n      "giftedTo": null,\n      "giftedFrom": null,\n      "blockId": null,\n      "createdAt": 1566852144140,\n      "updatedAt": 1566852144140,\n      "version": 1,\n      "maxUses": null,\n      "coolDownUntil": -1,\n      "recoveryUntil": -1,\n      "itemDef": {}\n    }\n  },\n  "status": 200\n}\n'))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"profileId"),(0,n.kt)("td",{parentName:"tr",align:null},"The profile ID of the user who is giving the item.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"itemId"),(0,n.kt)("td",{parentName:"tr",align:null},"The ID uniquely identifying the user item to be transferred.")))))}f.isMDXComponent=!0}}]);