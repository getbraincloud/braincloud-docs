"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[18058],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(r),g=a,m=s["".concat(p,".").concat(g)]||s[g]||d[g]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},35400:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={},i="DeleteGroupEntity",l={unversionedId:"api/capi/group/deletegroupentity",id:"api/capi/group/deletegroupentity",title:"DeleteGroupEntity",description:"Overview",source:"@site/docs/api/2_capi/group/deletegroupentity.md",sourceDirName:"api/2_capi/group",slug:"/api/capi/group/deletegroupentity",permalink:"/braincloud-apiref/api/capi/group/deletegroupentity",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/group/deletegroupentity.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671831235,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"DeleteGroup",permalink:"/braincloud-apiref/api/capi/group/deletegroup"},next:{title:"GetMyGroups",permalink:"/braincloud-apiref/api/capi/group/getmygroups"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},s=c("PartialServop"),d=c("BrowserWindow"),g=c("Tabs"),m=c("TabItem"),v={toc:u};function y(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deletegroupentity"},"DeleteGroupEntity"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Delete an entity in the group."),(0,a.kt)(s,{service_name:"group",operation_name:"DELETE_GROUP_ENTITY",mdxType:"PartialServop"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(d,{mdxType:"BrowserWindow"},(0,a.kt)(g,{mdxType:"Tabs"},(0,a.kt)(m,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'string groupId = "a-group-id";\nstring entityId = "a-group-entity-id";\nint version = 3;\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.Group.DeleteGroupEntity(groupId, entityId, version, successCallback, failureCallback);\n'))),(0,a.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *groupId = "a-group-id";\nconst char *entityId = "a-group-entity-id";\nint version = 3;\n\n_bc->getGroup()->deleteGroupEntity(groupId, entityId, version, this);\n'))),(0,a.kt)(m,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *groupId = @"a-group-id";\nNSString *entityId = @"a-group-entity-id";\nint version = 3;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc groupService] deleteGroupEntity:groupId\n                   entityId:entityId\n                    version:version\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,a.kt)(m,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'String groupId = "a-group-id";\nString entityId = "a-group-entity-id";\nint version = 3;\nthis; // implements IServerCallback\n\n_bc.getGroup().deleteGroupEntity(groupId, entityId, version, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,a.kt)(m,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'var groupId = "a-group-id";\nvar entityId = "a-group-entity-id";\nvar version = 3;\n\n_bc.group.deleteGroupEntity(groupId, entityId, version, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,a.kt)(m,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cfscript"},'var groupId = "a-group-id";\nvar entityId = "a-group-entity-id";\nvar version = 3;\nvar groupProxy = bridge.getGroupServiceProxy();\n\nvar postResult = groupProxy.deleteGroupEntity(groupId, entityId, version);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,a.kt)(m,{value:"r",label:"Raw",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "group",\n    "operation": "DELETE_GROUP_ENTITY",\n    "data": {\n        "groupId": "a-group-id",\n        "entityId": "a-group-entity-id",\n        "version": 3\n    }\n}\n'))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"JSON Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": null\n}\n'))),(0,a.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupId"),(0,a.kt)("td",{parentName:"tr",align:null},"ID of the group")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"entityId"),(0,a.kt)("td",{parentName:"tr",align:null},"ID of the entity.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"version"),(0,a.kt)("td",{parentName:"tr",align:null},"The current version of the group entity (for concurrency checking).")))))}y.isMDXComponent=!0}}]);