"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[80461],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,b=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return a?r.createElement(b,l(l({ref:t},i),{},{components:a})):r.createElement(b,l({ref:t},i))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var d=2;d<o;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},26139:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const o={},l="PostTournamentScoreUTC",s={unversionedId:"api/capi/tournament/posttournamentscoreutc",id:"api/capi/tournament/posttournamentscoreutc",title:"PostTournamentScoreUTC",description:"Overview",source:"@site/docs/api/2_capi/tournament/posttournamentscoreutc.md",sourceDirName:"api/2_capi/tournament",slug:"/api/capi/tournament/posttournamentscoreutc",permalink:"/braincloud-apiref/api/capi/tournament/posttournamentscoreutc",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/tournament/posttournamentscoreutc.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"PostTournamentScoreOnBehalfOf",permalink:"/braincloud-apiref/api/capi/tournament/posttournamentscoreonbehalfof"},next:{title:"PostTournamentScoreWithResultsUTC",permalink:"/braincloud-apiref/api/capi/tournament/posttournamentscorewithresultsutc"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=i("PartialServop"),p=i("BrowserWindow"),m=i("Tabs"),b=i("TabItem"),v={toc:d};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"posttournamentscoreutc"},"PostTournamentScoreUTC"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Post the users score to the tournament leaderboard."),(0,n.kt)("p",null,"tRank will always be zero in the response of this API call. The value generates after the tournament is complete or on ",(0,n.kt)("code",null,(0,n.kt)("a",{parentName:"p",href:"/api/capi/tournament/viewcurrentreward"},"ViewCurrentReward")),"."),(0,n.kt)(u,{service_name:"tournament",operation_name:"POST_TOURNAMENT_SCORE",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(p,{mdxType:"BrowserWindow"},(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(b,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'string leaderboardId = "leaderboardId1";\nint score = 0;\nstring jsonData = "{\\"nickname\\":\\"batman\\"}";\nDateTime roundStartedTime = DateTime.Now;\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.TournamentService.PostTournamentScoreUTC(leaderboardId, score, jsonData, roundStartedTime, successCallback, failureCallback);\n'))),(0,n.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *leaderboardId = "leaderboardId1";\nint score = 0;\nconst char *jsonData = "{\\"nickname\\":\\"batman\\"}";\ntime_t t = time(0);\nconst struct *roundStartedTime = gmtime(&t);\n_bc->getTournamentService()->postTournamentScoreUTC(leaderboardId, score, jsonData, roundStartedTime, this);\n'))),(0,n.kt)(b,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *leaderboardId = @"leaderboardId1";\nint score = 0;\nNSString *jsonData = @"{\\"nickname\\":\\"batman\\"}";\nNSDate *roundStartedTime = [NSDate date];\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc tournamentService] postTournamentScoreUTC:leaderboardId\n                      score:score\n                   jsonData:jsonData\n           roundStartedTime:roundStartedTime\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,n.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String leaderboardId = "leaderboardId1";\nint score = 0;\nString jsonData = "{\\"nickname\\":\\"batman\\"}";\nDate roundStartedTime = new Date(System.currentTimeMillis());\nthis; // implements IServerCallback\n\n_bc.getTournamentService().postTournamentScoreUTC(leaderboardId, score, jsonData, roundStartedTime, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,n.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var leaderboardId = "leaderboardId1";\nvar score = 0;\nvar jsonData = {\n    "nickname": "batman"\n};\nvar roundStartedTime = Date.now();\n\n_bc.tournament.postTournamentScoreUTC(leaderboardId, score, jsonData, roundStartedTime, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)(b,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var leaderboardId = "leaderboardId1";\nvar score = 0;\nvar jsonData = {\n    "nickname": "batman"\n};\nvar roundStartedTime = Date.now();\nvar tournamentProxy = bridge.getTournamentServiceProxy();\n\nvar postResult = tournamentProxy.postTournamentScoreUTC(leaderboardId, score, jsonData, roundStartedTime);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,n.kt)(b,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "tournament",\n    "operation": "POST_TOURNAMENT_SCORE",\n    "data": {\n        "leaderboardId": "the-leaderboard-id",\n        "score": 0,\n        "data": {\n            "nickname": "batman"\n        },\n        "roundStartedEpoch": "[[#ts]]"\n    }\n}\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 200,\n  "data": {\n      "leaderboardId": <%= data.example.leaderboardId %>,\n      "versionId": <%= data.example.returnedVersionId %>,\n      "playerId": <%= data.example.playerId %>,\n      "score": <%= data.example.score %>,\n      "data": <%= data.example.leaderboardExtraData_js %>,\n      "createdAt": <%= data.example.createdAt %>,\n      "updatedAt": <%= data.example.updatedAt %>,\n      "tCode": <%= data.example.tournamentCode %>,\n      "tRank": 0,\n      "tClaimedAt": 0\n  }\n}\n'))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"leaderboardId"),(0,n.kt)("td",{parentName:"tr",align:null},"The leaderboard for the tournament")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"score"),(0,n.kt)("td",{parentName:"tr",align:null},"The score to post")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"jsonData"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional data attached to the leaderboard entry")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"roundStartedTime"),(0,n.kt)("td",{parentName:"tr",align:null},"Time the user started the match resulting in the score being posted. (date in millis UTC)")))))}k.isMDXComponent=!0}}]);