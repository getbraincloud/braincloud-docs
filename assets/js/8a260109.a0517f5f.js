"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[9816],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,b=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(b,p(p({ref:t},i),{},{components:r})):n.createElement(b,p({ref:t},i))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[c]="string"==typeof e?e:a,p[1]=u;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65709:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},p="CreateGroup",u={unversionedId:"api/capi/group/creategroup",id:"api/capi/group/creategroup",title:"CreateGroup",description:"Overview",source:"@site/docs/api/2_capi/group/creategroup.md",sourceDirName:"api/2_capi/group",slug:"/api/capi/group/creategroup",permalink:"/braincloud-apiref/api/capi/group/creategroup",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/group/creategroup.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671831235,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"CancelGroupInvitation",permalink:"/braincloud-apiref/api/capi/group/cancelgroupinvitation"},next:{title:"CreateGroupEntity",permalink:"/braincloud-apiref/api/capi/group/creategroupentity"}},l={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},c=i("PartialServop"),m=i("BrowserWindow"),d=i("Tabs"),b=i("TabItem"),g={toc:s};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creategroup"},"CreateGroup"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Create a group."),(0,a.kt)("p",null,"The group ACL contains two elements defining access to the groups data for non-members (other) and members. Access is defined as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"None = 0,"),(0,a.kt)("li",{parentName:"ul"},"ReadOnly = 1"),(0,a.kt)("li",{parentName:"ul"},"ReadWrite = 2")),(0,a.kt)(c,{service_name:"group",operation_name:"CREATE_GROUP",mdxType:"PartialServop"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(m,{mdxType:"BrowserWindow"},(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(b,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'string name = "myGroupName";\nstring groupType = "myGroupType";\nbool isOpenGroup = false;\nGroupACL.Access memberAccess = GroupACL.Access.ReadWrite;\nGroupACL.Access otherAccess = GroupACL.Access.None;\nGroupACL acl = new GroupACL(otherAccess, memberAccess);\nstring jsonData = "{}";\nstring ownerAttributes = "{}";\nstring defaultMemberAttributes = "{}";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.Group.CreateGroup(name, groupType, isOpenGroup, acl, jsonData, ownerAttributes, defaultMemberAttributes, successCallback, failureCallback);\n'))),(0,a.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *name = "myGroupName";\nconst char *groupType = "myGroupType";\nbool isOpenGroup = false;\nconst char *acl = "{\\"member\\":2,\\"other\\":0}";\nconst char *jsonData = "{}";\nconst char *ownerAttributes = "{}";\nconst char *defaultMemberAttributes = "{}";\n\n_bc->getGroup()->createGroup(name, groupType, isOpenGroup, acl, jsonData, ownerAttributes, defaultMemberAttributes, this);\n'))),(0,a.kt)(b,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *name = @"myGroupName";\nNSString *groupType = @"myGroupType";\nbool isOpenGroup = false;\nNSString *acl = @"{\\"member\\":2,\\"other\\":0}";\nNSString *jsonData = @"{}";\nNSString *ownerAttributes = @"{}";\nNSString *defaultMemberAttributes = @"{}";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc groupService] createGroup:name\n                  groupType:groupType\n                isOpenGroup:isOpenGroup\n                        acl:acl\n                   jsonData:jsonData\n            ownerAttributes:ownerAttributes\n    defaultMemberAttributes:defaultMemberAttributes\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,a.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'String name = "myGroupName";\nString groupType = "myGroupType";\nboolean isOpenGroup = false;\nGroupACL acl = new GroupACL(GroupACL.Access.None, GroupACL.Access.ReadWrite);\nString jsonData = "{}";\nString ownerAttributes = "{}";\nString defaultMemberAttributes = "{}";\nthis; // implements IServerCallback\n\n_bc.getGroup().createGroup(name, groupType, isOpenGroup, acl, jsonData, ownerAttributes, defaultMemberAttributes, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,a.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'var name = "myGroupName";\nvar groupType = "myGroupType";\nvar isOpenGroup = false;\nvar acl = {\n    "member": 2,\n    "other": 0\n};\nvar jsonData = {};\nvar ownerAttributes = {};\nvar defaultMemberAttributes = {};\n\n_bc.group.createGroup(name, groupType, isOpenGroup, acl, jsonData, ownerAttributes, defaultMemberAttributes, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,a.kt)(b,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cfscript"},'var name = "myGroupName";\nvar groupType = "myGroupType";\nvar isOpenGroup = false;\nvar acl = {\n    "member": 2,\n    "other": 0\n};\nvar jsonData = {};\nvar ownerAttributes = {};\nvar defaultMemberAttributes = {};\nvar groupProxy = bridge.getGroupServiceProxy();\n\nvar postResult = groupProxy.createGroup(name, groupType, isOpenGroup, acl, ownerAttributes, defaultMemberAttributes, jsonData);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,a.kt)(b,{value:"r",label:"Raw",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "group",\n    "operation": "CREATE_GROUP",\n    "data": {\n        "name": "myGroupName",\n        "groupType": "myGroupType",\n        "isOpenGroup": true,\n        "acl": {\n            "member": 2,\n            "other": 0\n        },\n        "ownerAttributes": {},\n        "defaultMemberAttributes": {},\n        "data": {},\n        "summaryData": {}\n    }\n}\n'))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"JSON Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "gameId": "20595",\n        "groupId": "211559ef-234a-4aef-a643-48a90a6036c2",\n        "ownerId": "ee8cad26-16f2-4ef8-9045-3aab84ce6362",\n        "name": "my-group-name",\n        "groupType": "TestGroup",\n        "createdAt": 1461613090251,\n        "updatedAt": 1461613090251,\n        "members": {\n            "ee8cad26-16f2-4ef8-9045-3aab84ce6362": {\n                "role": "OWNER",\n                "attributes": {}\n            }\n        },\n        "pendingMembers": {},\n        "version": 1,\n        "data": {},\n        "isOpenGroup": false,\n        "defaultMemberAttributes": {},\n        "memberCount": 1,\n        "invitedPendingMemberCount": 0,\n        "requestingPendingMemberCount": 0,\n        "acl": {\n            "member": 2,\n            "other": 1\n        }\n    }\n}\n'))),(0,a.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the group")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupType"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the type of group")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isOpenGroup"),(0,a.kt)("td",{parentName:"tr",align:null},"true if group is open; false if closed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"acl"),(0,a.kt)("td",{parentName:"tr",align:null},"The group's access control list. A null ACL implies default")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"jsonOwnerAttributes"),(0,a.kt)("td",{parentName:"tr",align:null},"Attributes for the group owner (current user)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"jsonDefaultMemberAttributes"),(0,a.kt)("td",{parentName:"tr",align:null},"Default attributes for group members")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"jsonData"),(0,a.kt)("td",{parentName:"tr",align:null},"Custom application data")))))}f.isMDXComponent=!0}}]);