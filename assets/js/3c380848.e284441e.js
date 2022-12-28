"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[53308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,y=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(y,s(s({ref:t},d),{},{components:n})):a.createElement(y,s({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={},s="IncrementData",o={unversionedId:"api/capi/customentity/incrementdata",id:"api/capi/customentity/incrementdata",title:"IncrementData",description:"Overview",source:"@site/docs/api/2_capi/customentity/incrementdata.md",sourceDirName:"api/2_capi/customentity",slug:"/api/capi/customentity/incrementdata",permalink:"/braincloud-apiref/api/capi/customentity/incrementdata",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/customentity/incrementdata.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"GetRandomEntitiesMatching",permalink:"/braincloud-apiref/api/capi/customentity/getrandomentitiesmatching"},next:{title:"IncrementDataSharded",permalink:"/braincloud-apiref/api/capi/customentity/incrementdatasharded"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=d("PartialServop"),u=d("BrowserWindow"),m=d("Tabs"),y=d("TabItem"),b={toc:l};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"incrementdata"},"IncrementData"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This method is not sharding safe - and thus is not recommended for custom entities that you may want to shard for greater performance and scalability in the future.\nConsider using ",(0,r.kt)("strong",null,"IncrementDataSharded()")," version of this method instead.")),(0,r.kt)("p",null,"Increments the specified fields by the specified amount within custom entity data on the server, enforcing ownership/ACL permissions."),(0,r.kt)(p,{service_name:"customEntity",operation_name:"INCREMENT_DATA",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(u,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(y,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string entityType = "athletes";\nstring entityId = "aaaa-bbbb-cccc-dddd";\nstring fieldsJson = "{ \\"goals\\": 3,  \\"assists\\": 5 }";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.CustomEntityService.IncrementData(entityType, entityId, fieldsJson, successCallback, failureCallback);\n'))),(0,r.kt)(y,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *entityType = "athletes";\nconst char *entityId = "aaaa-bbbb-cccc-dddd";\nconst char *fieldsJson = "{ \\"goals\\": 3,  \\"assists\\": 5 }";\n_bc->getCustomEntityService()->incrementData(entityType, entityId, fieldsJson, this);\n'))),(0,r.kt)(y,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *entityType = @"athletes";\nNSString *entityId = @"aaaa-bbbb-cccc-dddd";\nNSString *fieldsJson = "{ \\"goals\\": 3,  \\"assists\\": 5 }";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc customEntityService] incrementData:entityType\n                   entityId:entityId\n                 fieldsJson:fieldsJson\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,r.kt)(y,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String entityType = "athletes";\nString entityId = "aaaa-bbbb-cccc-dddd";\nstring fieldsJson = "{ \\"goals\\": 3,  \\"assists\\": 5 }";\nthis; // implements IServerCallback\n\n_bc.getCustomEntityService().incrementData(entityType, entityId, fieldsJson, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,r.kt)(y,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var entityType = "athletes";\nvar entityId = "aaaa-bbbb-cccc-dddd";\nvar fieldsJson = { \n    "goals": 3, \n    "assists": 5 \n};\n\n_bc.customEntity.incrementData(entityType, entityId, fieldsJson, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,r.kt)(y,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var entityType = "athletes";\nvar entityId = "aaaa-bbbb-cccc-dddd";\nvar fieldsJson = { \n    "goals": 3, \n    "assists": 5 \n};\nvar customEntityProxy = bridge.getCustomEntityServiceProxy();\n\nvar postResult = customEntityProxy.incrementData(entityType, entityId, fieldsJson);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(y,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "customEntity",\n    "operation": "INCREMENT_DATA",\n    "data": {\n        "entityType": "athletes",\n        "entityId": "aaaa-bbbb-cccc-dddd",\n        "fieldsJson": { \n            "goals": 3, \n            "assists": 5 \n        }\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "entityId": "aaaa-bbbb-cccc-dddd",\n    "version": 2,\n    "acl": {\n      "other": 2\n    },\n    "ownerId": null,\n    "expiresAt": null,\n    "timeToLive": null,\n    "createdAt": 1586047449214,\n    "updatedAt": 1591290232477,\n    "data": {\n        "goals": 3, \n        "assists": 5 \n    },\n    "entityType": "athletes"\n  },\n  "status": 200\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entityType"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of custom entity being updated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entityId"),(0,r.kt)("td",{parentName:"tr",align:null},"The id of custom entity being updated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fieldsJson"),(0,r.kt)("td",{parentName:"tr",align:null},"Specific fields, as JSON, within entity's custom data, with respective increment amount.")))))}g.isMDXComponent=!0}}]);