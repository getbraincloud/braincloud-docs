"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[98167],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>u});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=a.createContext({}),s=function(e){var r=a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return a.createElement(d.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),f=n,u=p["".concat(d,".").concat(f)]||p[f]||m[f]||o;return t?a.createElement(u,l(l({ref:r},c),{},{components:t})):a.createElement(u,l({ref:r},c))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},73651:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>v,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(87462),n=(t(67294),t(3905));const o={},l="AddFriendsFromPlatform",i={unversionedId:"api/capi/friend/addfriendsfromplatform",id:"api/capi/friend/addfriendsfromplatform",title:"AddFriendsFromPlatform",description:"Overview",source:"@site/docs/api/2_capi/friend/addfriendsfromplatform.md",sourceDirName:"api/2_capi/friend",slug:"/api/capi/friend/addfriendsfromplatform",permalink:"/braincloud-apiref/api/capi/friend/addfriendsfromplatform",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/friend/addfriendsfromplatform.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"AddFriends",permalink:"/braincloud-apiref/api/capi/friend/addfriends"},next:{title:"FindUserByExactUniversalId",permalink:"/braincloud-apiref/api/capi/friend/finduserbyexactuniversalid"}},d={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",r)},p=c("PartialServop"),m=c("BrowserWindow"),f=c("Tabs"),u=c("TabItem"),b={toc:s};function v(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},b,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"addfriendsfromplatform"},"AddFriendsFromPlatform"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Links the profiles for the specified externalIds for the given friend platform as internal friends."),(0,n.kt)(p,{service_name:"friend",operation_name:"ADD_FRIENDS_FROM_PLATFORM",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(m,{mdxType:"BrowserWindow"},(0,n.kt)(f,{mdxType:"Tabs"},(0,n.kt)(u,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'string friendPlatform = "Facebook";\nstring mode = "ADD";\nstring[] externalIds = { "profileId1", "profileId2" };\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.FriendService.AddFriendsFromPlatform(friendPlatform, mode, externalIds, successCallback, failureCallback);\n'))),(0,n.kt)(u,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *friendPlatform = "Facebook";\nconst char *mode = "ADD";\nstd::vector<std::string> externalIds;\nexternalIds.push_back("profileId1");\nexternalIds.push_back("profileId2");\n_bc->getFriendService()->addFriendsFromPlatform(friendPlatform, mode, externalIds, this);\n'))),(0,n.kt)(u,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *friendPlatform = @"Facebook";\nNSString *mode = @"ADD";\nNSArray *externalIds = @[ @"profileId1", @"profileId2" ];\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc friendService] addFriendsFromPlatform:friendPlatform\n                       mode:mode\n                externalIds:externalIds\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,n.kt)(u,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String friendPlatform = "Facebook";\nString mode = "ADD";\nString[] externalIds = { "profileId1", "profileId2" };\nthis; // implements IServerCallback\n\n_bc.getFriendService().addFriendsFromPlatform(friendPlatform, mode, externalIds, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,n.kt)(u,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var friendPlatform = "Facebook";\nvar mode = "ADD";\nvar externalIds = [ "profileId1", "profileId2" ];\n\n_bc.friend.addFriendsFromPlatform(friendPlatform, mode, externalIds, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)(u,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var friendPlatform = "Facebook";\nvar mode = "ADD";\nvar externalIds = [ "profileId1", "profileId2" ];\nvar friendProxy = bridge.getFriendServiceProxy();\n\nvar postResult = friendProxy.addFriendsFromPlatform(friendPlatform, mode, externalIds);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,n.kt)(u,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "friend",\n    "operation": "ADD_FRIENDS_FROM_PLATFORM",\n    "data": {\n        "friendPlatform": "Facebook",\n        "mode": "ADD",\n        "externalIds": ["111234914143270", "106296724679297"]\n    }\n}\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "server_time": 1623090934620,\n    "rejected": [],\n    "numRejected": 0,\n    "numNewAdded": 2,\n    "numDeleted": 0,\n    "numExisting": 0\n  },\n  "status": 200\n}\n'))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"friendPlatform"),(0,n.kt)("td",{parentName:"tr",align:null},'Friend platform to query. Valid values are "Facebook", "Steam", and "PlaystationNetwork"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mode"),(0,n.kt)("td",{parentName:"tr",align:null},'"ADD" to add friends only, "SYNC" to delete any previously saved friends that are not in the externalIds list')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"externalIds"),(0,n.kt)("td",{parentName:"tr",align:null},"The list of platform-specific external IDs of the friends to add")))))}v.isMDXComponent=!0}}]);