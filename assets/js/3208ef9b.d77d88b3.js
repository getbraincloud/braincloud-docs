"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[19577],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>v,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={},i="PurchaseUserItem",l={unversionedId:"api/capi/useritems/purchaseuseritem",id:"api/capi/useritems/purchaseuseritem",title:"PurchaseUserItem",description:"Overview",source:"@site/docs/api/2_capi/useritems/purchaseuseritem.md",sourceDirName:"api/2_capi/useritems",slug:"/api/capi/useritems/purchaseuseritem",permalink:"/braincloud-apiref/api/capi/useritems/purchaseuseritem",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/useritems/purchaseuseritem.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"PublishUserItemToBlockchain",permalink:"/braincloud-apiref/api/capi/useritems/publishuseritemtoblockchain"},next:{title:"ReceiveUserItemFrom",permalink:"/braincloud-apiref/api/capi/useritems/receiveuseritemfrom"}},o={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=u("PartialServop"),d=u("BrowserWindow"),m=u("Tabs"),f=u("TabItem"),b={toc:c};function v(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"purchaseuseritem"},"PurchaseUserItem"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Purchases a quantity of an item from the specified store, if the user has enough funds. If includeDef is true, response includes associated itemDef with language fields limited to the current or default language."),(0,a.kt)(p,{service_name:"userItems",operation_name:"PURCHASE_USER_ITEM",mdxType:"PartialServop"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(d,{mdxType:"BrowserWindow"},(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(f,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'string defId = "sword001";\nint quantity = 1;\nstring shopId = "";\nbool includeDef = true;\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.UserItemsService.PurchaseUserItem(defId, quantity, shopId, includeDef, successCallback, failureCallback);\n'))),(0,a.kt)(f,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *defId = "sword001";\nint quantity = 1;\nconst char *shopId = "";\nbool includeDef = true;\n_bc->getUserItemsService()->purchaseUserItem(defId, quantity, shopId, includeDef, this);\n'))),(0,a.kt)(f,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *defId = @"sword001";\nint quantity = 1;\nNSString *shopId = @"";\nbool includeDef = true;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc userItemsService] purchaseUserItem:defId\n                   quantity:quantity\n                     shopId:shopId\n                 includeDef:includeDef\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,a.kt)(f,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'String defId = "sword001";\nint quantity = 1;\nString shopId = "";\nboolean includeDef = true;\nthis; // implements IServerCallback\n\n_bc.getUserItemsService().purchaseUserItem(defId, quantity, shopId, includeDef, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,a.kt)(f,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'var defId = "sword001";\nvar quantity = 1;\nvar shopId = null;\nvar includeDef = true;\n\n_bc.userItems.purchaseUserItem(defId, quantity, shopId, includeDef, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,a.kt)(f,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cfscript"},'var defId = "sword001";\nvar quantity = 1;\nvar shopId = null;\nvar includeDef = true;\nvar userItemsProxy = bridge.getUserItemsServiceProxy();\n\nvar postResult = userItemsProxy.purchaseUserItem(defId, quantity, shopId, includeDef);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,a.kt)(f,{value:"r",label:"Raw",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "userItems",\n    "operation": "PURCHASE_USER_ITEM",\n    "data": {\n        "defId": "sword001",\n        "quantity": 1,\n        "shopId": null,\n        "includeDef": true\n    }\n}\n'))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"JSON Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "items": {\n      "8e12e907-3f54-4971-b84a-b685ce50b684": {\n        "itemId": "8e12e907-3f54-4971-b84a-b685ce50b684",\n        "defId": "boost_rapidfire",\n        "quantity": 1,\n        "usesLeft": null,\n        "coolDownStart": -1,\n        "recoveryStart": -1,\n        "itemData": {},\n        "giftedTo": null,\n        "giftedFrom": null,\n        "blockId": null,\n        "createdAt": 1566850132554,\n        "updatedAt": 1566850132554,\n        "version": 1,\n        "maxUses": null,\n        "coolDownUntil": -1,\n        "recoveryUntil": -1,\n        "itemDef": {\n          "defId": "boost_rapidfire",\n          "name": "Rapid Fire",\n          "desc": "Rapid fire for the next match.",\n          "type": "ITEM",\n          "category": "boost",\n          "tags": null,\n          "buyPrice": {\n            "coins": 200\n          },\n          "sellPrice": {},\n          "image": null,\n          "resourceGroup": null,\n          "resourceTag": null,\n          "meta": {},\n          "pState": "PUBLISHED",\n          "publishedAt": 1566850042148,\n          "stackable": false,\n          "consumable": false,\n          "uses": null,\n          "coolDownSecs": 0,\n          "recoverySecs": 0,\n          "activatable": true,\n          "statusName": "boosted",\n          "activeSecs": 900000,\n          "tradable": false,\n          "blockchain": false,\n          "blockchainDefId": null\n        }\n      }\n    },\n    "currencySpent": {\n      "coins": 200\n    },\n    "currencyBalances": {\n      "createdAt": 1566850026783,\n      "currencyMap": {\n        "coins": {\n          "consumed": 200,\n          "balance": 2999800,\n          "purchased": 0,\n          "awarded": 3000000\n        }\n      },\n      "playerId": "55ffc16e-f92b-44f3-98b0-68a7a4f24106",\n      "updatedAt": 1566850132552\n    }\n  },\n  "status": 200\n}\n'))),(0,a.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"defId"),(0,a.kt)("td",{parentName:"tr",align:null},"The unique id of the item definition to purchase.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"quantity"),(0,a.kt)("td",{parentName:"tr",align:null},"The quantity of the item to purchase.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"shopId"),(0,a.kt)("td",{parentName:"tr",align:null},"The id identifying the store the item is being purchased from (not yet supported). Use null or empty string to specify the default shop price.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"includeDef"),(0,a.kt)("td",{parentName:"tr",align:null},"If true, the associated item definition will be included in the response.")))))}v.isMDXComponent=!0}}]);