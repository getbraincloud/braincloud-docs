"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[50936],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={},i="AuthenticateGoogleOpenId",l={unversionedId:"api/capi/authentication/authenticategoogleopenId",id:"api/capi/authentication/authenticategoogleopenId",title:"AuthenticateGoogleOpenId",description:"Overview",source:"@site/docs/api/2_capi/authentication/authenticategoogleopenId.md",sourceDirName:"api/2_capi/authentication",slug:"/api/capi/authentication/authenticategoogleopenId",permalink:"/braincloud-apiref/api/capi/authentication/authenticategoogleopenId",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/authentication/authenticategoogleopenId.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"AuthenticateGoogle",permalink:"/braincloud-apiref/api/capi/authentication/authenticategoogle"},next:{title:"AuthenticateHandoff",permalink:"/braincloud-apiref/api/capi/authentication/authenticatehandoff"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=s("PartialServop"),u=s("BrowserWindow"),m=s("Tabs"),g=s("TabItem"),k={toc:d};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"authenticategoogleopenid"},"AuthenticateGoogleOpenId"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Authenticate the user using google's modern OpenId mechanism."),(0,r.kt)("h3",{id:"status-codes"},"Status Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40206"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_IDENTITY_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"The identity does not exist on the server and ",(0,r.kt)("inlineCode",{parentName:"td"},"forceCreate")," was ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," ","[and a ",(0,r.kt)("inlineCode",{parentName:"td"},"profileId")," was provided - otherwise 40208 would have been returned]",". Will also occur when ",(0,r.kt)("inlineCode",{parentName:"td"},"forceCreate")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," and a saved ","[but un-associated]"," ",(0,r.kt)("inlineCode",{parentName:"td"},"profileId")," is provided. The error handler should reset the stored profile id (if there is one) and re-authenticate, setting ",(0,r.kt)("inlineCode",{parentName:"td"},"forceCreate")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," to create a new account. ",(0,r.kt)("strong",{parentName:"td"},"A common cause of this error is deleting the user's account via the Design Portal."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40207"),(0,r.kt)("td",{parentName:"tr",align:null},"SWITCHING_PROFILES"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates that the identity credentials are valid, and the saved ",(0,r.kt)("inlineCode",{parentName:"td"},"profileId")," is valid, but the identity is not associated with the provided ",(0,r.kt)("inlineCode",{parentName:"td"},"profileId"),". This may indicate that the user wants to switch accounts in the app. Often an app will pop-up a dialog confirming that the user wants to switch accounts, and then reset the stored ",(0,r.kt)("inlineCode",{parentName:"td"},"profileId")," and call authenticate again.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40208"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_PROFILE_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"Returned when the identity cannot be located, no ",(0,r.kt)("inlineCode",{parentName:"td"},"profileId")," is provided, and ",(0,r.kt)("inlineCode",{parentName:"td"},"forceCreate")," is false. The normal response is to call Authenticate again with ",(0,r.kt)("inlineCode",{parentName:"td"},"forceCreate")," set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40217"),(0,r.kt)("td",{parentName:"tr",align:null},"UNKNOWN_AUTH_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"An unknown error has occurred during authentication.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40307"),(0,r.kt)("td",{parentName:"tr",align:null},"TOKEN_DOES_NOT_MATCH_USER"),(0,r.kt)("td",{parentName:"tr",align:null},"The user credentials are invalid (i.e. googleUserAccountEmail and IdToken are invalid). May also indicate that Google Integration is not properly configured.")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you've initialized the brainCloud library before authenticating.")),(0,r.kt)(p,{service_name:"authenticationV2",operation_name:"AUTHENTICATE",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(u,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(g,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string googleUserAccountEmail = "example@gmail.com";\nstring IdToken = "authTokenFromGoogle";\nbool forceCreate = true;\n\n_bc.AuthenticationService.AuthenticateGoogleOpenId(\n    googleUserAccountEmail, IdToken, forceCreate, SuccessCallback, FailureCallback);\n'))),(0,r.kt)(g,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'const char* googleUserAccountEmail = "example@gmail.com";\nconst char* IdToken = "authTokenFromGoogle";\nbool forceCreate = true;\n\n_bc->getAuthenticationService()->authenticateGoogleOpenId(\n    googleUserAccountEmail, IdToken, forceCreate, this);\n'))),(0,r.kt)(g,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString * googleUserAccountEmail = @"example@gmail.com";\nNSString * IdToken = @"authTokenFromGoogle";\nBOOL forceCreate = true;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc authenticationService]\n     googleUserAccountEmail:googleUserAccountEmail\n                    IdToken:IdToken\n                forceCreate:forceCreate\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,r.kt)(g,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String googleUserAccountEmail = "example@gmail.com";\nString IdToken = "authTokenFromGoogle";\nboolean forceCreate = true;\nthis; // implements IServerCallback\n\n_bc.getAuthenticationService().authenticateGoogleOpenId(googleUserAccountEmail, IdToken, forceCreate, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,r.kt)(g,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var googleUserAccountEmail = "example@gmail.com";\nvar IdToken = "authTokenFromGoogle";\nvar forceCreate = true;\n\n_bc.authentication.authenticateGoogleOpenId(googleUserAccountEmail, IdToken, forceCreate, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,r.kt)(g,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))),(0,r.kt)(g,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "vcPurchased": 0,\n        "experiencePoints": 100,\n        "refundCount": 0,\n        "playerSessionExpiry": 60,\n        "server_time": 1464621990155,\n        "experienceLevel": 0,\n        "currency": {\n            "credits": {\n                "purchased": 0,\n                "balance": 12211,\n                "consumed": 133,\n                "awarded": 12344\n            }\n        },\n        "abTestingId": 8,\n        "statistics": {\n            "gamesWon": 0\n        },\n        "id": "323e861-b749-4ce4-a57a-175232e21b5d",\n        "createdAt": 1459439058035,\n        "profileId": "323e861-b749-4ce4-a57a-175232e21b5d",\n        "newUser": "false",\n        "xpCapped": false,\n        "sent_events": [],\n        "timeZoneOffset": -5,\n        "playerName": "",\n        "vcClaimed": 0,\n        "parentProfileId": null,\n        "rewards": {\n            "rewardDetails": {},\n            "rewards": {},\n            "currency": {}\n        },\n        "countryCode": "ca",\n        "loginCount": 16,\n        "emailAddress": "test@email.com",\n        "previousLogin": 1464621979514,\n        "incoming_events": [],\n        "lastLogin": 1464621990118,\n        "languageCode": "en",\n        "pictureUrl": null,\n        "sessionId": "v3grtg3ve0a089pekk8lneuk8k",\n        "amountSpent": 0\n    }\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"googleUserAccountEmail"),(0,r.kt)("td",{parentName:"tr",align:null},"Either the user's google email, or their google userid (gXXX)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IdToken"),(0,r.kt)("td",{parentName:"tr",align:null},"The id token of the google account. Can get with calls like requestIdToken")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forceCreate"),(0,r.kt)("td",{parentName:"tr",align:null},"Should a new profile be created for this user if the account does not exist?")))))}h.isMDXComponent=!0}}]);