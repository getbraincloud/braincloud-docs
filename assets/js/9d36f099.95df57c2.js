"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[3684],{3905:(e,a,r)=>{r.d(a,{Zo:()=>s,kt:()=>m});var t=r(67294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function d(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=t.createContext({}),i=function(e){var a=t.useContext(c),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},s=function(e){var a=i(e.components);return t.createElement(c.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},b=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=i(r),b=n,m=u["".concat(c,".").concat(b)]||u[b]||p[b]||l;return r?t.createElement(m,o(o({ref:a},s),{},{components:r})):t.createElement(m,o({ref:a},s))}));function m(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=b;var d={};for(var c in a)hasOwnProperty.call(a,c)&&(d[c]=a[c]);d.originalType=e,d[u]="string"==typeof e?e:n,o[1]=d;for(var i=2;i<l;i++)o[i]=r[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}b.displayName="MDXCreateElement"},16627:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>v,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var t=r(87462),n=(r(67294),r(3905));const l={},o="GetMultiSocialLeaderboard",d={unversionedId:"api/capi/leaderboard/getmultisocialleaderboard",id:"api/capi/leaderboard/getmultisocialleaderboard",title:"GetMultiSocialLeaderboard",description:"Overview",source:"@site/docs/api/2_capi/leaderboard/getmultisocialleaderboard.md",sourceDirName:"api/2_capi/leaderboard",slug:"/api/capi/leaderboard/getmultisocialleaderboard",permalink:"/braincloud-apiref/api/capi/leaderboard/getmultisocialleaderboard",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/leaderboard/getmultisocialleaderboard.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"GetGroupSocialLeaderboardByVersion",permalink:"/braincloud-apiref/api/capi/leaderboard/getgroupsocialleaderboardbyversion"},next:{title:"GetPlayerScore",permalink:"/braincloud-apiref/api/capi/leaderboard/getplayerscore"}},c={},i=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],s=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",a)},u=s("PartialServop"),p=s("BrowserWindow"),b=s("Tabs"),m=s("TabItem"),g={toc:i};function v(e){let{components:a,...r}=e;return(0,n.kt)("wrapper",(0,t.Z)({},g,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getmultisocialleaderboard"},"GetMultiSocialLeaderboard"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Reads multiple social leaderboards."),(0,n.kt)(u,{service_name:"leaderboard",operation_name:"GET_MULTI_SOCIAL_LEADERBOARD",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(p,{mdxType:"BrowserWindow"},(0,n.kt)(b,{mdxType:"Tabs"},(0,n.kt)(m,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'string[] leaderboardIds = { "default" };\nint leaderboardResultCount = 1;\nbool replaceName = false;\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.LeaderboardService.GetMultiSocialLeaderboard(leaderboardIds, leaderboardResultCount, replaceName, successCallback, failureCallback);\n'))),(0,n.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'std::vector<std::string> leaderboardIds;\nleaderboardIds.push_back("default");\nint leaderboardResultCount = 1;\nbool replaceName = false;\n_bc->getLeaderboardService()->getMultiSocialLeaderboard(leaderboardIds, leaderboardResultCount, replaceName, this);\n'))),(0,n.kt)(m,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSArray *leaderboardIds = @[ @"default" ];\nint leaderboardResultCount = 1;\nbool replaceName = false;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc leaderboardService] getMultiSocialLeaderboard:leaderboardIds\n     leaderboardResultCount:leaderboardResultCount\n                replaceName:replaceName\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,n.kt)(m,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String[] leaderboardIds = { "default" };\nint leaderboardResultCount = 1;\nboolean replaceName = false;\nthis; // implements IServerCallback\n\n_bc.getLeaderboardService().getMultiSocialLeaderboard(leaderboardIds, leaderboardResultCount, replaceName, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,n.kt)(m,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var leaderboardIds = [ "default" ];\nvar leaderboardResultCount = 1;\nvar replaceName = false;\n\n_bc.leaderboard.getMultiSocialLeaderboard(leaderboardIds, leaderboardResultCount, replaceName, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)(m,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var leaderboardIds = [ "default" ];\nvar leaderboardResultCount = 1;\nvar replaceName = false;\nvar leaderboardProxy = bridge.getLeaderboardServiceProxy();\n\nvar postResult = leaderboardProxy.getMultiSocialLeaderboard(leaderboardIds, leaderboardResultCount, replaceName);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,n.kt)(m,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "leaderboard",\n    "operation": "GET_MULTI_SOCIAL_LEADERBOARD",\n    "data": {\n        "leaderboardIds": [\n            "default"\n        ],\n        "leaderboardResultCount": 1,\n        "replaceName": false\n    }\n}\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "server_time": 1445952203123,\n        "leaderboards": [\n            {\n                "leaderboardId": "default",\n                "leaderboard": [\n                    {\n                        "externalId": "pacer5",\n                        "name": "Rollo",\n                        "pictureUrl": "http://localhost:8080/gameserver/s3/portal/g/eggies/metadata/pacers/pacer5.png",\n                        "playerId": "pacer5",\n                        "authenticationType": null,\n                        "score": 100000,\n                        "data": {\n                            "pacerTag": null,\n                            "pacerLeaderboardTag": {}\n                        },\n                        "createdAt": null,\n                        "updatedAt": null\n                    },\n                    {\n                        "externalId": "pacer4",\n                        "name": "Chirp",\n                        "pictureUrl": "http://localhost:8080/gameserver/s3/portal/g/eggies/metadata/pacers/pacer4.png",\n                        "playerId": "pacer4",\n                        "authenticationType": null,\n                        "score": 80000,\n                        "data": {\n                            "pacerTag": null,\n                            "pacerLeaderboardTag": {}\n                        },\n                        "createdAt": null,\n                        "updatedAt": null\n                    }\n                ],\n                "self": {\n                    "externalId": null,\n                    "name": null,\n                    "pictureUrl": null,\n                    "playerId": "49390659-33bd-4812-b0c4-ab04e614ec98",\n                    "authenticationType": null,\n                    "score": 10,\n                    "data": {\n                        "nickname": "batman"\n                    },\n                    "createdAt": 1445952060607,\n                    "updatedAt": 1445952060607,\n                    "summaryFriendData": null\n                },\n                "selfIndex": 5\n            }\n        ]\n    }\n}\n'))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"leaderboardIds"),(0,n.kt)("td",{parentName:"tr",align:null},"Collection of leaderboard IDs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"leaderboardResultCount"),(0,n.kt)("td",{parentName:"tr",align:null},"Maximum count of entries to return for each leaderboard.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"replaceName"),(0,n.kt)("td",{parentName:"tr",align:null},'If true, the currently logged in player\'s name will be replaced by the string "You"')))))}v.isMDXComponent=!0}}]);