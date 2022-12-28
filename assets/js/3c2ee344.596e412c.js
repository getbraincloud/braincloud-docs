"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[54718],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>v});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),u=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},s=function(e){var r=u(e.components);return a.createElement(i.Provider,{value:r},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},b=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),b=n,v=p["".concat(i,".").concat(b)]||p[b]||c[b]||o;return t?a.createElement(v,d(d({ref:r},s),{},{components:t})):a.createElement(v,d({ref:r},s))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,d=new Array(o);d[0]=b;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[p]="string"==typeof e?e:n,d[1]=l;for(var u=2;u<o;u++)d[u]=t[u];return a.createElement.apply(null,d)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},79082:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(87462),n=(t(67294),t(3905));const o={},d="GetGroupLeaderboardViewByVersion",l={unversionedId:"api/capi/leaderboard/getgroupleaderboardviewbyversion",id:"api/capi/leaderboard/getgroupleaderboardviewbyversion",title:"GetGroupLeaderboardViewByVersion",description:"Overview",source:"@site/docs/api/2_capi/leaderboard/getgroupleaderboardviewbyversion.md",sourceDirName:"api/2_capi/leaderboard",slug:"/api/capi/leaderboard/getgroupleaderboardviewbyversion",permalink:"/braincloud-apiref/api/capi/leaderboard/getgroupleaderboardviewbyversion",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/leaderboard/getgroupleaderboardviewbyversion.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"GetGroupLeaderboardView",permalink:"/braincloud-apiref/api/capi/leaderboard/getgroupleaderboardview"},next:{title:"GetGroupSocialLeaderboard",permalink:"/braincloud-apiref/api/capi/leaderboard/getgroupsocialleaderboard"}},i={},u=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],s=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",r)},p=s("PartialServop"),c=s("BrowserWindow"),b=s("Tabs"),v=s("TabItem"),g={toc:u};function m(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getgroupleaderboardviewbyversion"},"GetGroupLeaderboardViewByVersion"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Method returns a view of group leaderboard results that centers on the current group. By using a non-current version id, the user can retrieve a historical group leaderboard."),(0,n.kt)(p,{service_name:"leaderboard",operation_name:"GET_GROUP_LEADERBOARD_VIEW",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(c,{mdxType:"BrowserWindow"},(0,n.kt)(b,{mdxType:"Tabs"},(0,n.kt)(v,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'string leaderboardId = "default";\nstring groupId = "actual_group_id";\nint versionId = -1;\nSortOrder sort = BrainCloudSocialLeaderboard.SortOrder.HIGH_TO_LOW;\nint beforeCount = 3;\nint afterCount = 4;\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.LeaderboardService.GetGroupLeaderboardViewByVersion(leaderboardId, groupId, versionId, sort, beforeCount, afterCount, successCallback, failureCallback);\n'))),(0,n.kt)(v,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *leaderboardId = "default";\nconst char *groupId = "actual_group_id";\nint versionId = -1;\nSortOrder sort = HIGH_TO_LOW;\nint beforeCount = 3;\nint afterCount = 4;\n_bc->getLeaderboardService()->getGroupLeaderboardViewByVersion(leaderboardId, groupId, versionId, sort, beforeCount, afterCount, this);\n'))),(0,n.kt)(v,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *leaderboardId = @"default";\nNSString *groupId = @"actual_group_id";\nint versionId = -1;\nSortOrder sort = HIGH_TO_LOW;\nint beforeCount = 3;\nint afterCount = 4;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc leaderboardService] getGroupLeaderboardViewByVersion:leaderboardId\n                    groupId:groupId\n                  versionId:versionId\n                       sort:sort\n                beforeCount:beforeCount\n                 afterCount:afterCount\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,n.kt)(v,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String leaderboardId = "default";\nString groupId = "actual_group_id";\nint versionId = -1;\nSortOrder sort = SocialLeaderboardService.SortOrder.HIGH_TO_LOW;\nint beforeCount = 3;\nint afterCount = 4;\nthis; // implements IServerCallback\n\n_bc.getLeaderboardService().getGroupLeaderboardViewByVersion(leaderboardId, groupId, versionId, sort, beforeCount, afterCount, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,n.kt)(v,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var leaderboardId = "default";\nvar groupId = "actual_group_id";\nvar versionId = -1;\nvar sort = "HIGH_TO_LOW";\nvar beforeCount = 3;\nvar afterCount = 4;\n\n_bc.leaderboard.getGroupLeaderboardViewByVersion(leaderboardId, groupId, versionId, sort, beforeCount, afterCount, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)(v,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var leaderboardId = "default";\nvar groupId = "actual_group_id";\nvar versionId = -1;\nvar sort = "HIGH_TO_LOW";\nvar beforeCount = 3;\nvar afterCount = 4;\nvar leaderboardProxy = bridge.getLeaderboardServiceProxy();\n\nvar postResult = leaderboardProxy.getGroupLeaderboardViewByVersion(leaderboardId, groupId, versionId, sort, beforeCount, afterCount);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,n.kt)(v,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "leaderboard",\n    "operation": "GET_GROUP_LEADERBOARD_VIEW",\n    "data": {\n        "leaderboardId": "default",\n        "groupId": "actual_group_id",\n        "versionId": -1,\n        "sort": "HIGH_TO_LOW",\n        "beforeCount": 3,\n        "afterCount": 4\n    }\n}\n'))))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"leaderboardId"),(0,n.kt)("td",{parentName:"tr",align:null},"The id of the leaderboard.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupId"),(0,n.kt)("td",{parentName:"tr",align:null},"The id of the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"versionId"),(0,n.kt)("td",{parentName:"tr",align:null},"The historical version to retrieve.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sort"),(0,n.kt)("td",{parentName:"tr",align:null},'Sort order of page. ("HIGH_TO_LOW" or "LOW_TO_HIGH")')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"beforeCount"),(0,n.kt)("td",{parentName:"tr",align:null},"The count of number of players before the current player to include.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"afterCount"),(0,n.kt)("td",{parentName:"tr",align:null},"The count of number of players after the current player to include.")))))}m.isMDXComponent=!0}}]);