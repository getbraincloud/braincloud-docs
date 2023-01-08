"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[88051],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},83555:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},i="AuthenticateSettopHandoff",l={unversionedId:"api/capi/authentication/authenticatesettophandoff",id:"api/capi/authentication/authenticatesettophandoff",title:"AuthenticateSettopHandoff",description:"Overview",source:"@site/docs/api/2_capi/authentication/authenticatesettophandoff.md",sourceDirName:"api/2_capi/authentication",slug:"/api/capi/authentication/authenticatesettophandoff",permalink:"/braincloud-apiref/api/capi/authentication/authenticatesettophandoff",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/authentication/authenticatesettophandoff.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1673042992,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{},sidebar:"apiSidebar",previous:{title:"AuthenticatePlaystationNetwork",permalink:"/braincloud-apiref/api/capi/authentication/authenticateplaystationnetwork"},next:{title:"AuthenticateSteam",permalink:"/braincloud-apiref/api/capi/authentication/authenticatesteam"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Method Parameters",id:"method-parameters",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=s("PartialServop"),u=s("BrowserWindow"),m=s("Tabs"),f=s("TabItem"),h={toc:c};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"authenticatesettophandoff"},"AuthenticateSettopHandoff"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Authenticate the user with a custom Set-top Handoff Code - which is an short, easy-to-enter code suitable for use in devices with limited data entry capabilities (i.e. Set-top boxes, VR headsets, etc.) The hand-off code can be generated via the ",(0,r.kt)("a",{parentName:"p",href:"/api/capi/identity/createsettophandoffcode"},(0,r.kt)("code",null,"CreateSettopHandoffCode"))," cloud-code call."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you've initialized the brainCloud library before authenticating.")),(0,r.kt)(p,{service_name:"authenticationV2",operation_name:"AUTHENTICATE",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(u,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(f,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string handoffCode = "handoffCode";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.AuthenticationService.AuthenticateSettopHandoff(\n    handoffCode, successCallback, failureCallback);\n'))),(0,r.kt)(f,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'const char* handoffCode = "handoffCode";\n\n_bc->getAuthenticationService()->authenticateSettopHandoff(\n    handoffCode,\n    this);\n'))),(0,r.kt)(f,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString* handoffCode = @"handoffCode";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc authenticationService]\n        authenticateSettopHandoff:handoffCode\n                  completionBlock:successBlock\n             errorCompletionBlock:failureBlock\n                         cbObject:nil];\n'))),(0,r.kt)(f,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String handoffCode = "handoffCode";\nthis; // implements IServerCallback\n\n_bc.getAuthenticationService().authenticateSettopHandoff(handoffCode, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,r.kt)(f,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var handoffCode = "handoffCode";\n\n_bc.authentication.authenticateSettopHandoff(handoffCode, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,r.kt)(f,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))),(0,r.kt)(f,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n      "abTestingId": 48,\n      "lastLogin": 1572446599748,\n      "server_time": 1572446599779,\n      "refundCount": 0,\n      "timeZoneOffset": -5,\n      "experiencePoints": 0,\n      "maxBundleMsgs": 12,\n      "createdAt": 1572446599168,\n      "parentProfileId": null,\n      "emailAddress": null,\n      "experienceLevel": 0,\n      "handoffJson": {"key": "value"},\n      "countryCode": "CA",\n      "vcClaimed": 0,\n      "currency": {\n        "test": {\n          "consumed": 0,\n          "balance": 0,\n          "purchased": 0,\n          "awarded": 0\n        },\n        "credits": {\n          "consumed": 0,\n          "balance": 0,\n          "purchased": 0,\n          "awarded": 0\n        }\n      },\n      "id": "5e04aa28-4c1f-45c2-b32c-3f52c59cfb49",\n      "compressIfLarger": 0,\n      "amountSpent": 0,\n      "previousLogin": 1572446599171,\n      "playerName": "",\n      "pictureUrl": null,\n      "incoming_events": [],\n      "sessionId": "b9rr6j32ragmhnp5aajbi8vn82",\n      "languageCode": "en",\n      "vcPurchased": 0,\n      "isTester": false,\n      "summaryFriendData": null,\n      "loginCount": 2,\n      "xpCapped": false,\n      "profileId": "5e04aa28-4c1f-45c2-b32c-3f52c59cfb49",\n      "newUser": "false",\n      "playerSessionExpiry": 60,\n      "sent_events": [],\n      "maxKillCount": 11,\n      "rewards": {\n        "rewardDetails": {},\n        "currency": {},\n        "rewards": {}\n      },\n      "statistics": {\n        "wins": 0,\n        "gamesLost": 0,\n        "stat2": 0,\n        "gamesPlayed": 0,\n        "TestStat": 0,\n        "highestScore": 0,\n        "currency": 0,\n        "losses": 0,\n        "TestStat2": 0,\n        "gamesWon": 0\n      }\n    }\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Common Error Code"),(0,r.kt)("h3",{id:"status-codes"},"Status Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40206"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_IDENTITY_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"The identity does not exist on the server and ",(0,r.kt)("inlineCode",{parentName:"td"},"forceCreate")," was ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," ","[and a ",(0,r.kt)("inlineCode",{parentName:"td"},"profileId")," was provided - otherwise 40208 would have been returned]",". Will also occur when ",(0,r.kt)("inlineCode",{parentName:"td"},"forceCreate")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," and a saved ","[but un-associated]"," ",(0,r.kt)("inlineCode",{parentName:"td"},"profileId")," is provided. The error handler should reset the stored profile id (if there is one) and re-authenticate, setting ",(0,r.kt)("inlineCode",{parentName:"td"},"forceCreate")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," to create a new account. ",(0,r.kt)("strong",{parentName:"td"},"A common cause of this error is deleting the user's account via the Design Portal."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40207"),(0,r.kt)("td",{parentName:"tr",align:null},"SWITCHING_PROFILES"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates that the identity credentials are valid, and the saved ",(0,r.kt)("inlineCode",{parentName:"td"},"profileId")," is valid, but the identity is not associated with the provided ",(0,r.kt)("inlineCode",{parentName:"td"},"profileId"),". This may indicate that the user wants to switch accounts in the app. Most often an app will pop-up a dialog confirming that the user wants to switch accounts, and then reset the stored ",(0,r.kt)("inlineCode",{parentName:"td"},"profileId")," and call authenticate again.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40208"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_PROFILE_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"Returned when the identity cannot be located, no ",(0,r.kt)("inlineCode",{parentName:"td"},"profileId")," is provided, and ",(0,r.kt)("inlineCode",{parentName:"td"},"forceCreate")," is false. The normal response is to call Authenticate again with ",(0,r.kt)("inlineCode",{parentName:"td"},"forceCreate")," set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40217"),(0,r.kt)("td",{parentName:"tr",align:null},"UNKNOWN_AUTH_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"An unknown error has occurred during authentication.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40307"),(0,r.kt)("td",{parentName:"tr",align:null},"TOKEN_DOES_NOT_MATCH_USER"),(0,r.kt)("td",{parentName:"tr",align:null},"The user's password is incorrect."))))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"handoffCode"),(0,r.kt)("td",{parentName:"tr",align:null},"The set-top hand-off code generated via ",(0,r.kt)("a",{parentName:"td",href:"/api/capi/identity/createsettophandoffcode"},(0,r.kt)("code",null,"CreateSettopHandoffCode")))))))}k.isMDXComponent=!0}}]);