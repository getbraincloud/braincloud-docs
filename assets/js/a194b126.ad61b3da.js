"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[50444],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},48403:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>v,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={},o="SmartSwitchAuthenticateAdvanced",l={unversionedId:"api/wrapper/smartswitchauthenticateadvanced",id:"api/wrapper/smartswitchauthenticateadvanced",title:"SmartSwitchAuthenticateAdvanced",description:"Overview",source:"@site/docs/api/1_wrapper/smartswitchauthenticateadvanced.md",sourceDirName:"api/1_wrapper",slug:"/api/wrapper/smartswitchauthenticateadvanced",permalink:"/braincloud-apiref/api/wrapper/smartswitchauthenticateadvanced",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/1_wrapper/smartswitchauthenticateadvanced.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SetStoredProfileId",permalink:"/braincloud-apiref/api/wrapper/setstoredprofileid"},next:{title:"SmartSwitchAuthenticateApple",permalink:"/braincloud-apiref/api/wrapper/smartswitchauthenticateapple"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=d("PartialServop"),u=d("BrowserWindow"),m=d("Tabs"),h=d("TabItem"),k={toc:s};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smartswitchauthenticateadvanced"},"SmartSwitchAuthenticateAdvanced"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Smart Switch Authenticate will logout of the current profile, and switch to the new authentication type. "),(0,r.kt)("p",null,"In event the current session was previously a completely anonymous account, the smart switch will delete that profile (since completely anonymous accounts are irretrievable once you switch away from them). "),(0,r.kt)("p",null,"Use this function to keep a clean designflow from anonymous to signed profiles."),(0,r.kt)("p",null,"A generic Authenticate method that translates to the same as calling a specific one, except it takes an extraJson that will be passed along to pre- or post- hooks."),(0,r.kt)("h3",{id:"status-codes"},"Status Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40206"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_IDENTITY_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"The identity does not exist on the server and ",(0,r.kt)("inlineCode",{parentName:"td"},"forceCreate")," was ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," ","[and a ",(0,r.kt)("inlineCode",{parentName:"td"},"profileId")," was provided - otherwise 40208 would have been returned]",". Will also occur when ",(0,r.kt)("inlineCode",{parentName:"td"},"forceCreate")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," and a saved ","[but un-associated]"," ",(0,r.kt)("inlineCode",{parentName:"td"},"profileId")," is provided. The error handler should reset the stored profile id (if there is one) and re-authenticate, setting ",(0,r.kt)("inlineCode",{parentName:"td"},"forceCreate")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," to create a new account. ",(0,r.kt)("strong",{parentName:"td"},"A common cause of this error is deleting the user's account via the Design Portal."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40207"),(0,r.kt)("td",{parentName:"tr",align:null},"SWITCHING_PROFILES"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates that the identity credentials are valid, and the saved ",(0,r.kt)("inlineCode",{parentName:"td"},"profileId")," is valid, but the identity is not associated with the provided ",(0,r.kt)("inlineCode",{parentName:"td"},"profileId"),". This may indicate that the user wants to switch accounts in the app. Often an app will pop-up a dialog confirming that the user wants to switch accounts, and then reset the stored ",(0,r.kt)("inlineCode",{parentName:"td"},"profileId")," and call authenticate again.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40208"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_PROFILE_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"Returned when the identity cannot be located, no ",(0,r.kt)("inlineCode",{parentName:"td"},"profileId")," is provided, and ",(0,r.kt)("inlineCode",{parentName:"td"},"forceCreate")," is false. The normal response is to call Authenticate again with ",(0,r.kt)("inlineCode",{parentName:"td"},"forceCreate")," set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40217"),(0,r.kt)("td",{parentName:"tr",align:null},"UNKNOWN_AUTH_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"An unknown error has occurred during authentication.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40307"),(0,r.kt)("td",{parentName:"tr",align:null},"TOKEN_DOES_NOT_MATCH_USER"),(0,r.kt)("td",{parentName:"tr",align:null},"The user credentials are invalid (i.e. bad Facebook id / token). May also indicate that Facebook integration is not properly configured.")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you've initialized the brainCloud library before authenticating.")),(0,r.kt)(p,{service_name:"authenticationV2",operation_name:"AUTHENTICATE",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(u,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(h,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'AuthenticationType authenticationType = AuthenticationType.Universal;\nAuthenticationIds ids;\nids.externalId = "authAdvancedUser";\nids.authenticationToken = "authAdvancedPass";\nids.authenticationSubType = "";\nbool forceCreate = true;\nstring extraJson = "{\\"key\\":\\"value\\"}";\n\n_bc.SmartSwitchSmartSwitchAuthenticateAdvanced(\n    authenticationType, ids, forceCreate, extraJson, SuccessCallback, FailureCallback);\n'))),(0,r.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'AuthenticationType authenticationType = AuthenticationType::Universal;\nAuthenticationIds ids = { "authAdvancedUser", "authAdvancedPass", "" };\nbool forceCreate = true;\nconst char* extraJson = "{\\"key\\":\\"value\\"}";\n\n_bc->smartSwitchAuthenticateAdvanced(\n    authenticationType, ids, forceCreate, extraJson, SuccessCallback, FailureCallback);\n'))),(0,r.kt)(h,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'AuthenticationType authenticationType = [AuthenticationTypeObjc Universal];\nAuthenticationIds *ids = [[AuthenticationIdsObjc alloc]init];\nids.externalId = @"authAdvancedUser";\nids.authenticationToken = @"authAdvancedPass";\nids.authenticationSubType = @"";\nBOOL forceCreate = true;\nNSString * extraJson = "{\\"key\\":\\"value\\"}";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[_bc \n       smartSwitchAuthenticateAdvanced:authenticationType\n                        ids:ids\n                forceCreate:forceCreate\n                  extraJson:extraJson\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,r.kt)(h,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'AuthenticationType authenticationType = AuthenticationType.Universal;\nAuthenticationIds ids = new AuthenticationIds ("authAdvancedUser", "authAdvancedPass", "");\nboolean forceCreate = true;\nstring extraJson = "{\\"key\\":\\"value\\"}";\nthis; // implements IServerCallback\n\n_bc.smartSwitchAuthenticateAdvanced(authenticationType, ids, forceCreate, extraJson, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,r.kt)(h,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var authenticationType = _bc.brainCloudClient.authentication.AUTHENTICATION_TYPE_UNIVERSAL;\nvar ids = {externalId: "authAdvancedUser", authenticationToken: "authAdvancedPass", authenticationSubType: ""};\nvar forceCreate = true;\nvar extraJson = {"key":"value"};\n\n_bc.smartSwitchAuthenticateAdvanced(authenticationType, ids, forceCreate, extraJson, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,r.kt)(h,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))),(0,r.kt)(h,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "vcPurchased": 0,\n        "experiencePoints": 100,\n        "refundCount": 0,\n        "playerSessionExpiry": 60,\n        "server_time": 1464621990155,\n        "experienceLevel": 0,\n        "currency": {\n            "credits": {\n                "purchased": 0,\n                "balance": 12211,\n                "consumed": 133,\n                "awarded": 12344\n            }\n        },\n        "abTestingId": 8,\n        "statistics": {\n            "gamesWon": 0\n        },\n        "id": "323e861-b749-4ce4-a57a-175232e21b5d",\n        "createdAt": 1459439058035,\n        "profileId": "323e861-b749-4ce4-a57a-175232e21b5d",\n        "newUser": "false",\n        "xpCapped": false,\n        "sent_events": [],\n        "timeZoneOffset": -5,\n        "playerName": "",\n        "vcClaimed": 0,\n        "parentProfileId": null,\n        "rewards": {\n            "rewardDetails": {},\n            "rewards": {},\n            "currency": {}\n        },\n        "countryCode": "ca",\n        "loginCount": 16,\n        "emailAddress": "test@email.com",\n        "previousLogin": 1464621979514,\n        "incoming_events": [],\n        "lastLogin": 1464621990118,\n        "languageCode": "en",\n        "pictureUrl": null,\n        "sessionId": "v3grtg3ve0a089pekk8lneuk8k",\n        "amountSpent": 0\n    }\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authenticationType"),(0,r.kt)("td",{parentName:"tr",align:null},"Universal, Universal, Facebook, etc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ids"),(0,r.kt)("td",{parentName:"tr",align:null},"Auth IDs structure")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forceCreate"),(0,r.kt)("td",{parentName:"tr",align:null},"Should a new profile be created for this user if the account does not exist?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extraJson"),(0,r.kt)("td",{parentName:"tr",align:null},"Additional to piggyback along with the call, to be picked up by pre- or post- hooks. Leave empty string for no extraJson")))))}v.isMDXComponent=!0}}]);