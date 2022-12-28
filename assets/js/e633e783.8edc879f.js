"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[7238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const s={},i="UpdateSingletonFields",o={unversionedId:"api/capi/customentity/updatesingletonfields",id:"api/capi/customentity/updatesingletonfields",title:"UpdateSingletonFields",description:"Overview",source:"@site/docs/api/2_capi/customentity/updatesingletonfields.md",sourceDirName:"api/2_capi/customentity",slug:"/api/capi/customentity/updatesingletonfields",permalink:"/braincloud-apiref/api/capi/customentity/updatesingletonfields",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/customentity/updatesingletonfields.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"UpdateSingleton",permalink:"/braincloud-apiref/api/capi/customentity/updatesingleton"},next:{title:"Data Stream",permalink:"/braincloud-apiref/api/capi/datastream/"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=p("PartialServop"),d=p("BrowserWindow"),m=p("Tabs"),y=p("TabItem"),v={toc:c};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"updatesingletonfields"},"UpdateSingletonFields"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Partially updates the data, of the singleton owned by the user for the specified custom entity type, with the specified fields, on the server."),(0,r.kt)(u,{service_name:"customEntity",operation_name:"UPDATE_SINGLETON_FIELDS",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(d,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(y,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string entityType = "athletes";\nint version = 1;\nstring fieldsJson = "{\\"goals\\":3,\\"assists\\":5}";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.CustomEntityService.UpdateSingletonFields(entityType, version, fieldsJson, successCallback, failureCallback);\n'))),(0,r.kt)(y,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *entityType = "athletes";\nint version = 1;\nconst char *fieldsJson = "{\\"goals\\":3,\\"assists\\":5}";\n_bc->getCustomEntityService()->updateSingletonFields(entityType, version, fieldsJson, this);\n'))),(0,r.kt)(y,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *entityType = @"athletes";\nint version = 1;\nNSString *fieldsJson = "{\\"goals\\":3,\\"assists\\":5}";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc customEntityService] updateSingletonFields:entityType\n                    version:version\n                 fieldsJson:fieldsJson\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,r.kt)(y,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String entityType = "athletes";\nint version = 1;\nString fieldsJson = "{\\"goals\\":3,\\"assists\\":5}";\nthis; // implements IServerCallback\n\n_bc.getCustomEntityService().updateSingletonFields(entityType, version, fieldsJson, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,r.kt)(y,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var entityType = "athletes";\nvar version = 1;\nvar fieldsJson = {\n  "goals": 3,\n  "assists": 5\n};\n\n_bc.customEntity.updateSingletonFields(entityType, version, fieldsJson, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,r.kt)(y,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var entityType = "athletes";\nvar version = 1;\nvar fieldsJson = {\n  "goals": 3,\n  "assists": 5\n};\nvar customEntityProxy = bridge.getCustomEntityServiceProxy();\n\nvar postResult = customEntityProxy.updateSingletonFields(entityType, version, fieldsJson);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(y,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "customEntity",\n    "operation": "UPDATE_SINGLETON_FIELDS",\n    "data": {\n        "entityType": "athletes",\n        "version": 1,\n        "fieldsJson": {\n            "goals": 3,\n            "assists": 5\n        }\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "version": 2,\n    "updatedAt": 1591821018374\n  },\n  "status": 200\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entityType"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of custom entity singleton being updated. Custom entity type must have option isOwned set to true.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"Version of the custom entity singleton being updated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fieldsJson"),(0,r.kt)("td",{parentName:"tr",align:null},"Specific fields, as JSON, to set within singleton entity's custom data.")))))}g.isMDXComponent=!0}}]);