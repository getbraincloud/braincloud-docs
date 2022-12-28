"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[88452],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return a?r.createElement(k,o(o({ref:t},c),{},{components:a})):r.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:n,o[1]=p;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},79928:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={},o="VerifyPurchase",p={unversionedId:"api/capi/appstore/verifypurchase",id:"api/capi/appstore/verifypurchase",title:"VerifyPurchase",description:"Overview",source:"@site/docs/api/2_capi/appstore/verifypurchase.md",sourceDirName:"api/2_capi/appstore",slug:"/api/capi/appstore/verifypurchase",permalink:"/braincloud-apiref/api/capi/appstore/verifypurchase",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/appstore/verifypurchase.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671831235,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"StartPurchase",permalink:"/braincloud-apiref/api/capi/appstore/startpurchase"},next:{title:"Async Match",permalink:"/braincloud-apiref/api/capi/asyncmatch/"}},i={},s=[{value:"Overview",id:"overview",level:2},{value:"ReceiptData formats",id:"receiptdata-formats",level:3},{value:"Apple AppStore",id:"apple-appstore",level:3},{value:"Google Play Store",id:"google-play-store",level:3},{value:"Facebook",id:"facebook",level:3},{value:"Amazon Store",id:"amazon-store",level:3},{value:"Response fields",id:"response-fields",level:3},{value:"VerifyPurchase responses",id:"verifypurchase-responses",level:3},{value:"Status Codes",id:"status-codes",level:3},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=c("PartialServop"),d=c("BrowserWindow"),m=c("Tabs"),k=c("TabItem"),g={toc:s};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"verifypurchase"},"VerifyPurchase"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Used to verify a purchase receipt for Apple AppStore, Google Play, Facebook or Windows. The contents passed into ",(0,n.kt)("inlineCode",{parentName:"p"},"receiptData")," are store-specific. On success, the player will be awarded the associated currencies."),(0,n.kt)("h3",{id:"receiptdata-formats"},"ReceiptData formats"),(0,n.kt)("h3",{id:"apple-appstore"},"Apple AppStore"),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},'"itunes"')," as the ",(0,n.kt)("inlineCode",{parentName:"p"},"storeId"),"."),(0,n.kt)("p",null,"iTunes ",(0,n.kt)("inlineCode",{parentName:"p"},"receiptData")," format:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n    "receipt": "ENCODED-RECEIPT-DATA"\n}\n')),(0,n.kt)("h3",{id:"google-play-store"},"Google Play Store"),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},'"googlePlay"')," as the ",(0,n.kt)("inlineCode",{parentName:"p"},"storeId"),"."),(0,n.kt)("p",null,"Google Play ",(0,n.kt)("inlineCode",{parentName:"p"},"receiptData")," format:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{    \n    "productId" : "gems_pack_small",\n    "orderId" : "GPA.0000-1111-2222-33333",\n    "token" : "ENCODED_TOKEN_STRING",\n    "developerPayload" : "STRING_ENCODED_JSON"\n}\n')),(0,n.kt)("h3",{id:"facebook"},"Facebook"),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},'"facebook"')," as the ",(0,n.kt)("inlineCode",{parentName:"p"},"storeId"),"."),(0,n.kt)("p",null,"Facebook ",(0,n.kt)("inlineCode",{parentName:"p"},"receiptData")," format:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n    "signedRequest": "string-of-signedRequest"\n}\n')),(0,n.kt)("h3",{id:"amazon-store"},"Amazon Store"),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},'"amazon"')," as the ",(0,n.kt)("inlineCode",{parentName:"p"},"storeId"),"."),(0,n.kt)("p",null,"Amazon ",(0,n.kt)("inlineCode",{parentName:"p"},"receiptData")," format:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n    "receiptId": "a-receipt-id",\n    "userId": "a-user-id"\n}\n')),(0,n.kt)("h3",{id:"response-fields"},"Response fields"),(0,n.kt)("p",null,"The following fields are included in the json response:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resultCode"),(0,n.kt)("td",{parentName:"tr",align:null},"the overall status of the operation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errorMessage"),(0,n.kt)("td",{parentName:"tr",align:null},"(optional) message describing non-zero result codes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"store"),(0,n.kt)("td",{parentName:"tr",align:null},"the store used for the purchase")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"transactionSummary"),(0,n.kt)("td",{parentName:"tr",align:null},"the store-specific response details. Contents vary by store-type.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rewards"),(0,n.kt)("td",{parentName:"tr",align:null},"the total currencies being rewarded as a result of the purchases(s). Includes subsections by currency scope.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"currency"),(0,n.kt)("td",{parentName:"tr",align:null},"currency balances.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"parentCurrency"),(0,n.kt)("td",{parentName:"tr",align:null},"balances of parent currencies (if any)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"peerCurrency"),(0,n.kt)("td",{parentName:"tr",align:null},"balances of peer currencies (if any)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"server_time"),(0,n.kt)("td",{parentName:"tr",align:null},"utc time on the server (in millis)")))),(0,n.kt)("h3",{id:"verifypurchase-responses"},"VerifyPurchase responses"),(0,n.kt)("p",null,"The key values of the return to evaluate include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"processedCount")," - number of transactions successfully processed. To be processed, a transaction receipt must be valid, the product must be found, and the transaction must not have been processed before."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"unprocessedCount")," - the number of transactions that were rejected. See the ",(0,n.kt)("inlineCode",{parentName:"li"},"transactionStatus")," code associated with the transaction for details.")),(0,n.kt)("h3",{id:"status-codes"},"Status Codes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Code"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"RESULT_OK"),(0,n.kt)("td",{parentName:"tr",align:null},"Successfully verified, new currencies awarded.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"100"),(0,n.kt)("td",{parentName:"tr",align:null},"RESULT_FAILED_ALREADY_PROCESSED"),(0,n.kt)("td",{parentName:"tr",align:null},"Already verified and awarded currencies.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"101"),(0,n.kt)("td",{parentName:"tr",align:null},"RESULT_FAILED_APPSTORE_ERROR"),(0,n.kt)("td",{parentName:"tr",align:null},"Purchase error with the used app store.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"102"),(0,n.kt)("td",{parentName:"tr",align:null},"RESULT_FAILED_PRODUCT_NOT_FOUND"),(0,n.kt)("td",{parentName:"tr",align:null},"Cannot locate the product in brainCloud Product Inventory. *This is likely a configuration error in the brainCloud product - double-check the price settings for the product.**")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"103"),(0,n.kt)("td",{parentName:"tr",align:null},"RESULT_FAILED_UNKNOWN_ERROR"),(0,n.kt)("td",{parentName:"tr",align:null},"Unexpected error.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"104"),(0,n.kt)("td",{parentName:"tr",align:null},"RESULT_FAILED_CONFIGURATION_ERROR"),(0,n.kt)("td",{parentName:"tr",align:null},"Configuration error on the used app store.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"105"),(0,n.kt)("td",{parentName:"tr",align:null},"RESULT_FAILED_REQUEST_ERROR"),(0,n.kt)("td",{parentName:"tr",align:null},"Credential missing for used app store. Ensure Facebook or Stream credential is correct.")))),(0,n.kt)(u,{service_name:"appStore",operation_name:"VERIFY_PURCHASE",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(d,{mdxType:"BrowserWindow"},(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(k,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'string storeId = "hghghsgfh";\nstring receiptData = "{\\"productId\\":\\"ugfhffhgj\\"}";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.AppStoreService.VerifyPurchase(storeId, receiptData, successCallback, failureCallback);\n'))),(0,n.kt)(k,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *storeId = "hghghsgfh";\nconst char *receiptData = "{\\"productId\\":\\"ugfhffhgj\\"}";\n_bc->getAppStoreService()->verifyPurchase(storeId, receiptData, this);\n'))),(0,n.kt)(k,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *storeId = @"hghghsgfh";\nNSString *receiptData = @"{\\"productId\\":\\"ugfhffhgj\\"}";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc appStoreService] verifyPurchase:storeId\n                receiptData:receiptData\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,n.kt)(k,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String storeId = "hghghsgfh";\nString receiptData = "{\\"productId\\":\\"ugfhffhgj\\"}";\nthis; // implements IServerCallback\n\n_bc.getAppStoreService().verifyPurchase(storeId, receiptData, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,n.kt)(k,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var storeId = "hghghsgfh";\nvar receiptData = {\n    "productId": "ugfhffhgj"\n};\n\n_bc.appStore.verifyPurchase(storeId, receiptData, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)(k,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var storeId = "hghghsgfh";\nvar receiptData = {\n    "productId": "ugfhffhgj"\n};\nvar appStoreProxy = bridge.getAppStoreServiceProxy();\n\nvar postResult = appStoreProxy.verifyPurchase(storeId, receiptData);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,n.kt)(k,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "appStore",\n    "operation": "VERIFY_PURCHASE",\n    "data": {\n        "storeId": "itunes",\n        "receiptData": {\n            "receipt": "a-receipt"\n        }\n    }\n}\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "resultCode": 0,\n        "errorMessage": null,\n        "store": "itunes",\n        "transactionSummary": {\n            "processedCount": 1,\n            "unprocessedCount": 1,\n            "transactionDetails": [\n                {\n                    "transactionId": "80000557199459",\n                    "itemId": "barBundle1Imp",\n                    "transactionResultCode": 0,\n                    "processed": true,\n                    "originalTransactionId": "80000557199459",\n                    "quantity": 1,\n                    "purchaseDateMs": 1550639146000,\n                    "productId": "...coinBundle1Imp",\n                    "purchaseDate": "2019-02-20 05:05:46 Etc/GMT",\n                    "rewards": {\n                        "extra": null,\n                        "currency": {\n                            "bar": 10,\n                            "coinMultiplier": 1\n                        }\n                    }\n                },\n                {\n                    "transactionId": "80000557201213",\n                    "itemId": "coinBundle2Imp",\n                    "transactionResultCode": 100,\n                    "processed": false,\n                    "originalTransactionId": "80000557201213",\n                    "quantity": 1,\n                    "purchaseDateMs": 1550639681000,\n                    "productId": "...coinBundle2Imp",\n                    "errorMessage": "Item already processed",\n                    "purchaseDate": "2019-02-20 05:14:41 Etc/GMT"\n                }\n            ],\n            "extra": {\n                "appleReceipt": "stringified json receipt data"\n            }\n        },\n        "rewards": {\n            "currency": {\n                "coins": 1000\n            },\n            "parentCurrency": {\n                "awesomeMaster": {\n                    "rubies": 2000\n                }\n            },\n            "peerCurrency": {\n                "peerApp": {\n                    "rogerCurrency": 30\n                }\n            }\n        },\n        "currency": {\n            "coins": {\n                "balance": 1000,\n                "purchased": 1000,\n                "awarded": 0,\n                "consumed": 0\n            }\n        },\n\n        "parentCurrency": {\n            "awesomeMaster": {\n                "rubies": {\n                    "balance": 2000,\n                    "purchased": 2000,\n                    "awarded": 0,\n                    "consumed": 0\n                }\n            }\n        },\n\n        "peerCurrency": {\n            "peerApp": {\n                "rogerCurrency": {\n                    "balance": 30,\n                    "purchased": 30,\n                    "awarded": 0,\n                    "consumed": 0\n                }\n            }\n        },\n\n        "server_time": 1473325588695\n    }\n}\n'))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"storeId"),(0,n.kt)("td",{parentName:"tr",align:null},'The store type - "itunes", "googlePlay", "amazon", "facebook" or "windows"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"receiptData"),(0,n.kt)("td",{parentName:"tr",align:null},"A JSON object with data in the format for the specified store")))))}h.isMDXComponent=!0}}]);