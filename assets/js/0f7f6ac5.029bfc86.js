"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[61063],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=s(a),m=r,d=g["".concat(c,".").concat(m)]||g[m]||u[m]||o;return a?n.createElement(d,l(l({ref:t},p),{},{components:a})):n.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[g]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88743:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>v,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={},l="GetCatalogItemsPage",i={unversionedId:"api/capi/itemcatalog/getcatalogitemspage",id:"api/capi/itemcatalog/getcatalogitemspage",title:"GetCatalogItemsPage",description:"Overview",source:"@site/docs/api/2_capi/itemcatalog/getcatalogitemspage.md",sourceDirName:"api/2_capi/itemcatalog",slug:"/api/capi/itemcatalog/getcatalogitemspage",permalink:"/braincloud-apiref/api/capi/itemcatalog/getcatalogitemspage",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/itemcatalog/getcatalogitemspage.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"GetCatalogItemDefinition",permalink:"/braincloud-apiref/api/capi/itemcatalog/getcatalogitemdefinition"},next:{title:"GetCatalogItemsPageOffset",permalink:"/braincloud-apiref/api/capi/itemcatalog/getcatalogitemspageoffset"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},g=p("PartialServop"),u=p("BrowserWindow"),m=p("Tabs"),d=p("TabItem"),b={toc:s};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getcatalogitemspage"},"GetCatalogItemsPage"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Retrieves page of catalog items from the server, with language fields limited to the text for the current or default language."),(0,r.kt)(g,{service_name:"itemCatalog",operation_name:"GET_CATALOG_ITEMS_PAGE",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(u,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(d,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string context = "{\\"pagination\\":{\\"rowsPerPage\\":50,\\"pageNumber\\":1},\\"searchCriteria\\":{\\"category\\":\\"sword\\"},\\"sortCriteria\\":{\\"createdAt\\":1,\\"updatedAt\\":-1}}";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.ItemCatalogService.GetCatalogItemsPage(context, successCallback, failureCallback);\n'))),(0,r.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *context = "{\\"pagination\\":{\\"rowsPerPage\\":50,\\"pageNumber\\":1},\\"searchCriteria\\":{\\"category\\":\\"sword\\"},\\"sortCriteria\\":{\\"createdAt\\":1,\\"updatedAt\\":-1}}";\n_bc->getItemCatalogService()->getCatalogItemsPage(context, this);\n'))),(0,r.kt)(d,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *context = "{\\"pagination\\":{\\"rowsPerPage\\":50,\\"pageNumber\\":1},\\"searchCriteria\\":{\\"category\\":\\"sword\\"},\\"sortCriteria\\":{\\"createdAt\\":1,\\"updatedAt\\":-1}}";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc itemCatalogService] getCatalogItemsPage:context\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,r.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String context = "{\\"pagination\\":{\\"rowsPerPage\\":50,\\"pageNumber\\":1},\\"searchCriteria\\":{\\"category\\":\\"sword\\"},\\"sortCriteria\\":{\\"createdAt\\":1,\\"updatedAt\\":-1}}";\nthis; // implements IServerCallback\n\n_bc.getItemCatalogService().getCatalogItemsPage(context, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,r.kt)(d,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var context = {\n  "pagination": {\n    "rowsPerPage": 50,\n    "pageNumber": 1\n  },\n  "searchCriteria": {\n    "category": "sword"\n  },\n  "sortCriteria": {\n    "createdAt": 1,\n    "updatedAt": -1\n  }\n};\n\n_bc.itemCatalog.getCatalogItemsPage(context, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,r.kt)(d,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var context = {\n  "pagination": {\n    "rowsPerPage": 50,\n    "pageNumber": 1\n  },\n  "searchCriteria": {\n    "category": "sword"\n  },\n  "sortCriteria": {\n    "createdAt": 1,\n    "updatedAt": -1\n  }\n};\nvar itemCatalogProxy = bridge.getItemCatalogServiceProxy();\n\nvar postResult = itemCatalogProxy.getCatalogItemsPage(context);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(d,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "itemCatalog",\n    "operation": "GET_CATALOG_ITEMS_PAGE",\n    "data": {\n        "context": {\n            "pagination": {\n                "rowsPerPage": 50,\n                "pageNumber": 1\n            },\n            "searchCriteria": {\n                "category": "sword"\n            },\n            "sortCriteria": {\n                "createdAt": 1,\n                "updatedAt": -1\n            }\n        }\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJnYW1lSWQiOiIyMzQwMyJ9LCJzb3J0Q3JpdGVyaWEiOnsiY3JlYXRlZEF0IjoxLCJ1cGRhdGVkQXQiOi0xfSwicGFnaW5hdGlvbiI6eyJyb3dzUGVyUGFnZSI6MSwicGFnZU51bWJlciI6MSwiZG9Db3VudCI6dHJ1ZX0sIm9wdGlvbnMiOm51bGx9",\n    "results": {\n      "count": 7,\n      "page": 1,\n      "items": [\n        {\n          "defId": "medal_bronze_1",\n          "name": "Small Bronze Medal",\n          "desc": "",\n          "type": "ITEM",\n          "category": "collectable",\n          "tags": [\n            "medal"\n          ],\n          "buyPrice": {\n            "coins": 2000\n          },\n          "sellPrice": {\n            "coins": 200\n          },\n          "image": "https://api.braincloudservers.com/files/portal/g/23403/metadata/itemDefinitions/medal_bronze_1.png",\n          "resourceGroup": null,\n          "resourceTag": null,\n          "meta": {\n            "level": "bronze"\n          },\n          "initData": {\n            "exp": 0\n          },\n          "pState": "PUBLISHED",\n          "publishedAt": 1566584361752,\n          "createdAt": 1566584032523,\n          "updatedAt": 1566584437921,\n          "version": 4,\n          "stackable": true,\n          "consumable": false,\n          "uses": null,\n          "coolDownSecs": 0,\n          "recoverySecs": 0,\n          "activatable": false,\n          "statusName": null,\n          "activeSecs": null,\n          "tradable": false,\n          "blockchain": false,\n          "blockchainDefId": null\n        }\n      ],\n      "moreAfter": true,\n      "moreBefore": false\n    }\n  },\n  "status": 200\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"context"),(0,r.kt)("td",{parentName:"tr",align:null},"The json context for the page request.")))))}v.isMDXComponent=!0}}]);