"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[34059],{3905:(e,r,a)=>{a.d(r,{Zo:()=>c,kt:()=>m});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function d(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=t.createContext({}),s=function(e){var r=t.useContext(i),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},c=function(e){var r=s(e.components);return t.createElement(i.Provider,{value:r},e.children)},b="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),b=s(a),u=n,m=b["".concat(i,".").concat(u)]||b[u]||p[u]||o;return a?t.createElement(m,l(l({ref:r},c),{},{components:a})):t.createElement(m,l({ref:r},c))}));function m(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var d={};for(var i in r)hasOwnProperty.call(r,i)&&(d[i]=r[i]);d.originalType=e,d[b]="string"==typeof e?e:n,l[1]=d;for(var s=2;s<o;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},32351:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var t=a(87462),n=(a(67294),a(3905));const o={},l="GetGlobalLeaderboardEntryCountByVersion",d={unversionedId:"api/capi/leaderboard/getgloballeaderboardentrycountbyversion",id:"api/capi/leaderboard/getgloballeaderboardentrycountbyversion",title:"GetGlobalLeaderboardEntryCountByVersion",description:"Overview",source:"@site/docs/api/2_capi/leaderboard/getgloballeaderboardentrycountbyversion.md",sourceDirName:"api/2_capi/leaderboard",slug:"/api/capi/leaderboard/getgloballeaderboardentrycountbyversion",permalink:"/braincloud-apiref/api/capi/leaderboard/getgloballeaderboardentrycountbyversion",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/leaderboard/getgloballeaderboardentrycountbyversion.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"GetGlobalLeaderboardEntryCount",permalink:"/braincloud-apiref/api/capi/leaderboard/getgloballeaderboardentrycount"},next:{title:"GetGlobalLeaderboardPage",permalink:"/braincloud-apiref/api/capi/leaderboard/getgloballeaderboardpage"}},i={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",r)},b=c("PartialServop"),p=c("BrowserWindow"),u=c("Tabs"),m=c("TabItem"),v={toc:s};function g(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},v,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getgloballeaderboardentrycountbyversion"},"GetGlobalLeaderboardEntryCountByVersion"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Method returns the number of entries in a global leaderboard."),(0,n.kt)(b,{service_name:"leaderboard",operation_name:"GET_GLOBAL_LEADERBOARD_ENTRY_COUNT",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(p,{mdxType:"BrowserWindow"},(0,n.kt)(u,{mdxType:"Tabs"},(0,n.kt)(m,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'string leaderboardId = "default";\nint versionId = -1;\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.LeaderboardService.GetGlobalLeaderboardEntryCountByVersion(leaderboardId, versionId, successCallback, failureCallback);\n'))),(0,n.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *leaderboardId = "default";\nint versionId = -1;\n_bc->getLeaderboardService()->getGlobalLeaderboardEntryCountByVersion(leaderboardId, versionId, this);\n'))),(0,n.kt)(m,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *leaderboardId = @"default";\nint versionId = -1;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc leaderboardService] getGlobalLeaderboardEntryCountByVersion:leaderboardId\n                  versionId:versionId\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,n.kt)(m,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String leaderboardId = "default";\nint versionId = -1;\nthis; // implements IServerCallback\n\n_bc.getLeaderboardService().getGlobalLeaderboardEntryCountByVersion(leaderboardId, versionId, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,n.kt)(m,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var leaderboardId = "default";\nvar versionId = -1;\n\n_bc.leaderboard.getGlobalLeaderboardEntryCountByVersion(leaderboardId, versionId, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)(m,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var leaderboardId = "default";\nvar versionId = -1;\nvar leaderboardProxy = bridge.getLeaderboardServiceProxy();\n\nvar postResult = leaderboardProxy.getGlobalLeaderboardEntryCountByVersion(leaderboardId, versionId);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,n.kt)(m,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "leaderboard",\n    "operation": "GET_GLOBAL_LEADERBOARD_ENTRY_COUNT",\n    "data": {\n        "leaderboardId": "default",\n        "versionId": -1\n    }\n}\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "entryCount": 1\n    }\n}\n'))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"leaderboardId"),(0,n.kt)("td",{parentName:"tr",align:null},"The id of the leaderboard")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"versionId"),(0,n.kt)("td",{parentName:"tr",align:null},"Version of the leaderboard")))))}g.isMDXComponent=!0}}]);