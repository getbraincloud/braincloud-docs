"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[80321],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,g=s["".concat(l,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(g,p(p({ref:t},c),{},{components:r})):n.createElement(g,p({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:a,p[1]=i;for(var u=2;u<o;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74126:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>v,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={},p="GetRandomGroupsMatching",i={unversionedId:"api/capi/group/getrandomgroupsmatching",id:"api/capi/group/getrandomgroupsmatching",title:"GetRandomGroupsMatching",description:"Overview",source:"@site/docs/api/2_capi/group/getrandomgroupsmatching.md",sourceDirName:"api/2_capi/group",slug:"/api/capi/group/getrandomgroupsmatching",permalink:"/braincloud-apiref/api/capi/group/getrandomgroupsmatching",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/group/getrandomgroupsmatching.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"GetMyGroups",permalink:"/braincloud-apiref/api/capi/group/getmygroups"},next:{title:"IncrementGroupData",permalink:"/braincloud-apiref/api/capi/group/incrementgroupdata"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},s=c("PartialServop"),m=c("BrowserWindow"),d=c("Tabs"),g=c("TabItem"),b={toc:u};function v(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getrandomgroupsmatching"},"GetRandomGroupsMatching"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Gets a list of up to maxReturn randomly selected groups from the server based on the where condition."),(0,a.kt)(s,{service_name:"group",operation_name:"GET_RANDOM_GROUPS_MATCHING",mdxType:"PartialServop"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(m,{mdxType:"BrowserWindow"},(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(g,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'string where = "{\\"groupType\\":\\"BLUE\\"}";\nint maxReturn = 20;\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.GroupService.GetRandomGroupsMatching(where, maxReturn, successCallback, failureCallback);\n'))),(0,a.kt)(g,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *where = "{\\"groupType\\":\\"BLUE\\"}";\nint maxReturn = 20;\n_bc->getGroupService()->getRandomGroupsMatching(where, maxReturn, this);\n'))),(0,a.kt)(g,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *where = @"{\\"groupType\\":\\"BLUE\\"}";\nint maxReturn = 20;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc groupService] getRandomGroupsMatching:where\n                  maxReturn:maxReturn\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,a.kt)(g,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'String where = "{\\"groupType\\":\\"BLUE\\"}";\nint maxReturn = 20;\nthis; // implements IServerCallback\n\n_bc.getGroupService().getRandomGroupsMatching(where, maxReturn, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,a.kt)(g,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'var where = {\n    "groupType": "BLUE"\n};\nvar maxReturn = 20;\n\n_bc.group.getRandomGroupsMatching(where, maxReturn, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,a.kt)(g,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cfscript"},'var where = {\n    "groupType": "BLUE"\n};\nvar maxReturn = 20;\nvar groupProxy = bridge.getGroupServiceProxy();\n\nvar postResult = groupProxy.getRandomGroupsMatching(where, maxReturn);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,a.kt)(g,{value:"r",label:"Raw",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "group",\n    "operation": "GET_RANDOM_GROUPS_MATCHING",\n    "data": {\n        "where": {\n            "groupType": "BLUE"\n        },\n        "maxReturn": 20\n    }\n}\n'))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"JSON Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "count": 1,\n    "groups": [\n      {\n        "gameId": "12345",\n        "groupId": "b7b590e0-0e27-47ef-8bf5-03a3b4e34475",\n        "ownerId": "77ce8889-20b7-4d01-b248-e0beb747f1b4",\n        "name": "myGroupName",\n        "groupType": "myGroupType",\n        "createdAt": 1561472696504,\n        "updatedAt": 1561472696504,\n        "members": {\n          "77ce8889-20b7-4d01-b248-e0beb747f1b4": {\n            "role": "OWNER",\n            "attributes": {}\n          }\n        },\n        "pendingMembers": {},\n        "version": 1,\n        "data": {},\n        "summaryData": {},\n        "isOpenGroup": true,\n        "defaultMemberAttributes": {},\n        "memberCount": 1,\n        "invitedPendingMemberCount": 0,\n        "requestingPendingMemberCount": 0,\n        "acl": {\n          "member": 2,\n          "other": 0\n        }\n      }\n    ]\n  },\n  "status": 200\n}\n'))),(0,a.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"where"),(0,a.kt)("td",{parentName:"tr",align:null},"Mongo style query string.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"maxReturn"),(0,a.kt)("td",{parentName:"tr",align:null},"Count of groups to randomly select")))))}v.isMDXComponent=!0}}]);