"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[81905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),y=r,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||i;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>v,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},l="UpdateEntityAcl",o={unversionedId:"api/capi/globalentity/updateentityacl",id:"api/capi/globalentity/updateentityacl",title:"UpdateEntityAcl",description:"Overview",source:"@site/docs/api/2_capi/globalentity/updateentityacl.md",sourceDirName:"api/2_capi/globalentity",slug:"/api/capi/globalentity/updateentityacl",permalink:"/braincloud-apiref/api/capi/globalentity/updateentityacl",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/globalentity/updateentityacl.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1673042992,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{},sidebar:"apiSidebar",previous:{title:"UpdateEntity",permalink:"/braincloud-apiref/api/capi/globalentity/updateentity"},next:{title:"UpdateEntityIndexedId",permalink:"/braincloud-apiref/api/capi/globalentity/updateentityindexedid"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=p("PartialServop"),u=p("BrowserWindow"),y=p("Tabs"),m=p("TabItem"),b={toc:c};function v(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"updateentityacl"},"UpdateEntityAcl"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Method updates an existing entity's ACL on the server."),(0,r.kt)("p",null,"This method is affected by versioning. See the ",(0,r.kt)("a",{parentName:"p",href:"/api/appendix/version"},"versioning documentation")," for more information."),(0,r.kt)(d,{service_name:"globalEntity",operation_name:"UPDATE_ACL",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(u,{mdxType:"BrowserWindow"},(0,r.kt)(y,{mdxType:"Tabs"},(0,r.kt)(m,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string entityId = "a-entity-id";\nint version = 2;\nACL jsonEntityAcl = new ACL(ACL.Access.Read);\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.GlobalEntityService.UpdateEntityAcl(entityId, version, jsonEntityAcl, successCallback, failureCallback);\n'))),(0,r.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *entityId = "a-entity-id";\nint version = 2;\nconst char *jsonEntityAcl = "{\\"other\\":1}";\n\n_bc->getGlobalEntityService()->updateEntityAcl(entityId, version, jsonEntityAcl, this);\n'))),(0,r.kt)(m,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *entityId = @"a-entity-id";\nint version = 2;\nNSString * jsonEntityAcl = [ACL getAclJson:Read];\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc globalEntityService] updateEntityAcl:entityId\n                    version:version\n              jsonEntityAcl:jsonEntityAcl\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,r.kt)(m,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String entityId = "a-entity-id";\nint version = 2;\nString jsonEntityAcl = "{\\"other\\":1}";\nthis; // implements IServerCallback\n\n_bc.getGlobalEntityService().updateEntityAcl(entityId, version, jsonEntityAcl, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,r.kt)(m,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var entityId = "a-entity-id";\nvar version = 2;\nvar jsonEntityAcl = {\n    "other": 1\n};\n\n_bc.globalEntity.updateEntityAcl(entityId, version, jsonEntityAcl, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,r.kt)(m,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var entityId = "a-entity-id";\nvar version = 2;\nvar jsonEntityAcl = {\n    "other": 1\n};\nvar globalEntityProxy = bridge.getGlobalEntityServiceProxy();\n\nvar postResult = globalEntityProxy.updateEntityAcl(entityId, version, jsonEntityAcl);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(m,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "globalEntity",\n    "operation": "UPDATE_ACL",\n    "data": {\n        "entityId": "the-entity-id",\n        "version": 2,\n        "acl": {\n            "other": 1\n        }\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "gameId": "123456",\n        "entityId": "14281c38-abf6-4ca2-8436-b2bdwas8d5a9a",\n        "ownerId": "784cc6c6-4569-4d75-bd10-62dwa8ae0218",\n        "entityType": "test",\n        "entityIndexedId" : "indexTest",\n        "version": 1,\n        "data": {\n            "testData": 1234\n        },\n        "acl": {\n            "other": 1\n        },\n        "expiresAt": 1449861422588,\n        "timeToLive": 34567,\n        "createdAt": 1449861388021,\n        "updatedAt": 1449861388021\n    }\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Common Error Code"),(0,r.kt)("h3",{id:"status-codes"},"Status Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40344"),(0,r.kt)("td",{parentName:"tr",align:null},"ENTITY_VERSION_MISMATCH"),(0,r.kt)("td",{parentName:"tr",align:null},"The version passed in does not match the version of the entity on the server"))))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entityId"),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the entity to update")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"The version of the entity to update. Use -1 to indicate the newest version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jsonEntityAcl"),(0,r.kt)("td",{parentName:"tr",align:null},"The entity's ",(0,r.kt)("a",{parentName:"td",href:"/api/appendix/acl"},"Access Control List")," as json.")))),(0,r.kt)("h1",{id:""}))}v.isMDXComponent=!0}}]);