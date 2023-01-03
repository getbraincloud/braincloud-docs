"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[28239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>v,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},i="AuthenticateAnonymous",l={unversionedId:"api/capi/authentication/authenticateanonymous",id:"api/capi/authentication/authenticateanonymous",title:"AuthenticateAnonymous",description:"Overview",source:"@site/docs/api/2_capi/authentication/authenticateanonymous.md",sourceDirName:"api/2_capi/authentication",slug:"/api/capi/authentication/authenticateanonymous",permalink:"/braincloud-apiref/api/capi/authentication/authenticateanonymous",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/authentication/authenticateanonymous.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"AuthenticateAdvanced",permalink:"/braincloud-apiref/api/capi/authentication/authenticateadvanced"},next:{title:"AuthenticateApple",permalink:"/braincloud-apiref/api/capi/authentication/authenticateapple"}},u={},s=[{value:"Overview",id:"overview",level:2},{value:"Error Handling Example",id:"error-handling-example",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=c("PartialServop"),p=c("BrowserWindow"),m=c("Tabs"),h=c("TabItem"),y={toc:s};function v(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"authenticateanonymous"},"AuthenticateAnonymous"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"To authenticate anonymously you must have first called InitializeIdentity. You must supply an anonymous ID if you are creating a brand new profile or if you are logging into an already created profile you need to supply the anonymous ID AND the profile ID of the user."),(0,r.kt)("p",null,"Once you've logged in successfully make sure to save the anonymous and profile ID for future logins."),(0,r.kt)("p",null,"You can generate a new anonymous ID using the convenience method ",(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"p",href:"/api/capi/authentication/generateanonymousid"},"GenerateAnonymousId")),"."),(0,r.kt)("h2",{id:"error-handling-example"},"Error Handling Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public void FailureCallback(int statusCode, int reasonCode, string statusMessage, object cbObject) {\n    switch (reasonCode) {\n        case ReasonCodes.MISSING_IDENTITY_ERROR: { // Anonymous id is invalid\n\n            // Clear the profile id, generate a new Anonymous id, and re-authenticate\n            BrainCloudClient.Get().AuthenticationService.ClearSavedProfileID();\n            BrainCloudClient.Get().AuthenticationService.AnonymousId =\n                BrainCloudClient.Get().AuthenticationService.GenerateAnonymousId();\n            BrainCloudClient.Get().AuthenticationService.AuthenticateAnonymous(true, OnSuccess_Authenticate, OnError_AuthenticateAnonymous);\n            break;\n        }\n        case ReasonCodes.MISSING_PROFILE_ERROR: { // Anonymous id doesn't exist in database\n\n            // The account doesn't exist - create it now.\n            BrainCloudClient.Get().AuthenticationService.AuthenticateAnonymous(true, OnSuccess_Authenticate, OnError_AuthenticateAnonymous);\n            break;\n        }\n        case ReasonCodes.SWITCHING_PROFILES: {  // Identity belongs to a different profile\n\n            // Clear the profile id, generate a new Anonymous id, and re-authenticate\n            BrainCloudClient.Get().AuthenticationService.ClearSavedProfileID();\n            BrainCloudClient.Get().AuthenticationService.AnonymousId =\n                BrainCloudClient.Get().AuthenticationService.GenerateAnonymousId();\n            BrainCloudClient.Get().AuthenticationService.AuthenticateAnonymous(true, OnSuccess_Authenticate, OnError_AuthenticateAnonymous);\n            break;\n        }\n        case ReasonCodes.SECURITY_ERROR: { // Identity is invalid\n            // Generate a new Anonymous id, and re-authenticate\n            BrainCloudClient.Get().AuthenticationService.AnonymousId =\n                BrainCloudClient.Get().AuthenticationService.GenerateAnonymousId();\n            BrainCloudClient.Get().AuthenticationService.AuthenticateAnonymous(true, OnSuccess_Authenticate, OnError_AuthenticateAnonymous);\n            break;\n        }\n        case ReasonCodes.MISSING_REQUIRED_PARAMETER: { // Anonymous id cannot be blank\n            // Generate an Anonymous id before calling AuthenticateAnonymous\n            BrainCloudClient.Get().AuthenticationService.AnonymousId =\n                BrainCloudClient.Get().AuthenticationService.GenerateAnonymousId();\n            BrainCloudClient.Get().AuthenticationService.AuthenticateAnonymous(true, OnSuccess_Authenticate, OnError_AuthenticateAnonymous);\n            break;\n        }\n        default: { // Uncaught reasonCode\n            /**\n             * Log the unexpected reasonCode to your own internal logs,\n             * to implement needed error handling later\n             */\n            break;\n        }\n    }\n}\n")),(0,r.kt)("h3",{id:"status-codes"},"Status Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40206"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_IDENTITY_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"Both an anonymousId and profileId were provided for authentication - but the anonymousId doesn't exist on the server. The profileId may or may not exist. ",(0,r.kt)("strong",{parentName:"td"},"It is possible that the user account was deleted via the Design Portal.")," The proper recourse is to reset the stored profile id, and re-authenticate. ","[There is no need to delete the anonymousId since it doesn't exist on the server anyway.]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40207"),(0,r.kt)("td",{parentName:"tr",align:null},"SWITCHING_PROFILES"),(0,r.kt)("td",{parentName:"tr",align:null},"This means that the anonymousId provided ",(0,r.kt)("em",{parentName:"td"},"does")," point to a profile, but not the same one that was saved in the client. This fails the anonymous security check. For any other authentication type, this might indicate that the user wants to switch accounts (thus the name of the error constant). For anonymous, the only response is to reset ",(0,r.kt)("em",{parentName:"td"},"both")," the stored anonymousId and profileId, and then re-authenticate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40208"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_PROFILE_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"The anonymousId provided is not associated with an existing profile and forceCreate = false. To create an account, retry with forceCreate = true.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40209"),(0,r.kt)("td",{parentName:"tr",align:null},"SECURITY_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"Occurs when attempting to authenticate anonymously to an existing user without providing the matching profile ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40217"),(0,r.kt)("td",{parentName:"tr",align:null},"UNKNOWN_AUTH_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"An unknown error has occurred on authentication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40358"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_REQUIRED_PARAMETER"),(0,r.kt)("td",{parentName:"tr",align:null},"The provided anonymous ID cannot be null")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you've initialized the brainCloud library before authenticating.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can set the profile and anonymous IDs directly using ",(0,r.kt)("a",{href:"#capi-client-initializeidentity"},"BrainCloudClient.InitializeIdentity()")," or ",(0,r.kt)("a",{href:"#capi-client-initializeidentity"},"BrainCloudClient.AuthenticationService.InitializeIdentity()"))),(0,r.kt)(d,{service_name:"authenticationV2",operation_name:"AUTHENTICATE",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(p,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(h,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'bool forceCreate = true;\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n    \n_bc.AuthenticationService.AuthenticateAnonymous(forceCreate, successCallback, failureCallback);\n'))),(0,r.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// if it's a new user\nconst char* newAnonId = _bc->generateGUID();\n_bc->initializeIdentity(NULL, newAnonId);\n_bc->getAuthenticationService()->authenticateAnonymous(true, this);\n\n// if it's an existing user\nconst char* savedProfileId = yourMethodToGetSavedProfileId();\nconst char* savedAnonId = yourMethodToGetSavedAnonymousId();\n_bc->initializeIdentity(savedProfileId, savedAnonId);\n_bc->getAuthenticationService()->authenticateAnonymous(false, this);\n\n// note you can also use the BrainCloudWrapper class\n"))),(0,r.kt)(h,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"BOOL forceCreate = true;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc authenticationService] authenticateAnonymous:forceCreate\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n"))),(0,r.kt)(h,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'boolean includeOffline = true;\nthis; // implements IServerCallback\n\n_bc.GetAuthenticationService().AuthenticateAnonymous(includeOffline, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,r.kt)(h,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var forceCreate = true;\n\n_bc.authentication.authenticateAnonymous(forceCreate, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,r.kt)(h,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))),(0,r.kt)(h,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "vcPurchased": 0,\n        "experiencePoints": 100,\n        "refundCount": 0,\n        "playerSessionExpiry": 60,\n        "server_time": 1464621990155,\n        "experienceLevel": 0,\n        "currency": {\n            "credits": {\n                "purchased": 0,\n                "balance": 12211,\n                "consumed": 133,\n                "awarded": 12344\n            }\n        },\n        "abTestingId": 8,\n        "statistics": {\n            "gamesWon": 0\n        },\n        "id": "323e861-b749-4ce4-a57a-175232e21b5d",\n        "createdAt": 1459439058035,\n        "profileId": "323e861-b749-4ce4-a57a-175232e21b5d",\n        "newUser": "false",\n        "xpCapped": false,\n        "sent_events": [],\n        "timeZoneOffset": -5,\n        "playerName": "",\n        "vcClaimed": 0,\n        "parentProfileId": null,\n        "rewards": {\n            "rewardDetails": {},\n            "rewards": {},\n            "currency": {}\n        },\n        "countryCode": "ca",\n        "loginCount": 16,\n        "emailAddress": "test@email.com",\n        "previousLogin": 1464621979514,\n        "incoming_events": [],\n        "lastLogin": 1464621990118,\n        "languageCode": "en",\n        "pictureUrl": null,\n        "sessionId": "v3grtg3ve0a089pekk8lneuk8k",\n        "amountSpent": 0\n    }\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forceCreate"),(0,r.kt)("td",{parentName:"tr",align:null},"If set to true, create a new profile if anonymous ID not found. If set to false and anonymous ID does not exist on the server, return an error.")))))}v.isMDXComponent=!0}}]);