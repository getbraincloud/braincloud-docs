"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[83930],{3905:(e,r,a)=>{a.d(r,{Zo:()=>p,kt:()=>b});var t=a(67294);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function n(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){o(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function d(e,r){if(null==e)return{};var a,t,o=function(e,r){if(null==e)return{};var a,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=t.createContext({}),c=function(e){var r=t.useContext(i),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},p=function(e){var r=c(e.components);return t.createElement(i.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=c(a),m=o,b=s["".concat(i,".").concat(m)]||s[m]||u[m]||n;return a?t.createElement(b,l(l({ref:r},p),{},{components:a})):t.createElement(b,l({ref:r},p))}));function b(e,r){var a=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=m;var d={};for(var i in r)hasOwnProperty.call(r,i)&&(d[i]=r[i]);d.originalType=e,d[s]="string"==typeof e?e:o,l[1]=d;for(var c=2;c<n;c++)l[c]=a[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7884:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>n,metadata:()=>d,toc:()=>c});var t=a(87462),o=(a(67294),a(3905));const n={},l="RemoveGroupScore",d={unversionedId:"api/capi/leaderboard/removegroupscore",id:"api/capi/leaderboard/removegroupscore",title:"RemoveGroupScore",description:"Overview",source:"@site/docs/api/2_capi/leaderboard/removegroupscore.md",sourceDirName:"api/2_capi/leaderboard",slug:"/api/capi/leaderboard/removegroupscore",permalink:"/braincloud-apiref/api/capi/leaderboard/removegroupscore",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/leaderboard/removegroupscore.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"PostScoreToLeaderboardOnBehalfOf",permalink:"/braincloud-apiref/api/capi/leaderboard/postscoretoleaderboardonbehalfof"},next:{title:"RemovePlayerScore",permalink:"/braincloud-apiref/api/capi/leaderboard/removeplayerscore"}},i={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",r)},s=p("PartialServop"),u=p("BrowserWindow"),m=p("Tabs"),b=p("TabItem"),v={toc:c};function g(e){let{components:r,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},v,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"removegroupscore"},"RemoveGroupScore"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Removes the group's score data from the specified group leaderboard. Optional parameters: versionId"),(0,o.kt)(s,{service_name:"leaderboard",operation_name:"REMOVE_GROUP_SCORE",mdxType:"PartialServop"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(u,{mdxType:"BrowserWindow"},(0,o.kt)(m,{mdxType:"Tabs"},(0,o.kt)(b,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'string leaderboardId = "default";\nstring groupId = "actual_group_id";\nint versionId = -1;\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.LeaderboardService.RemoveGroupScore(leaderboardId, groupId, versionId, successCallback, failureCallback);\n'))),(0,o.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *leaderboardId = "default";\nconst char *groupId = "actual_group_id";\nint versionId = -1;\n_bc->getLeaderboardService()->removeGroupScore(leaderboardId, groupId, versionId, this);\n'))),(0,o.kt)(b,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *leaderboardId = @"default";\nNSString *groupId = @"actual_group_id";\nint versionId = -1;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc leaderboardService] removeGroupScore:leaderboardId\n                    groupId:groupId\n                  versionId:versionId\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,o.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'String leaderboardId = "default";\nString groupId = "actual_group_id";\nint versionId = -1;\nthis; // implements IServerCallback\n\n_bc.getLeaderboardService().removeGroupScore(leaderboardId, groupId, versionId, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,o.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var leaderboardId = "default";\nvar groupId = "actual_group_id";\nvar versionId = -1;\n\n_bc.leaderboard.removeGroupScore(leaderboardId, groupId, versionId, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,o.kt)(b,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cfscript"},'var leaderboardId = "default";\nvar groupId = "actual_group_id";\nvar versionId = -1;\nvar leaderboardProxy = bridge.getLeaderboardServiceProxy();\n\nvar postResult = leaderboardProxy.removeGroupScore(leaderboardId, groupId, versionId);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,o.kt)(b,{value:"r",label:"Raw",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "leaderboard",\n    "operation": "REMOVE_GROUP_SCORE",\n    "data": {\n        "leaderboardId": "default",\n        "groupId": "actual_group_id",\n        "versionId": -1\n    }\n}\n'))))),(0,o.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"leaderboardId"),(0,o.kt)("td",{parentName:"tr",align:null},"The id of the leaderboard.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"groupId"),(0,o.kt)("td",{parentName:"tr",align:null},"The id of the group.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"versionId"),(0,o.kt)("td",{parentName:"tr",align:null},"The version of the leaderboard. Use -1 to specify the currently active leaderboard version.")))))}g.isMDXComponent=!0}}]);