"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[62066],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},87724:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={},i="AuthenticateEmailPassword",o={unversionedId:"api/wrapper/authenticateemailpassword",id:"api/wrapper/authenticateemailpassword",title:"AuthenticateEmailPassword",description:"Overview",source:"@site/docs/api/1_wrapper/authenticateemailpassword.md",sourceDirName:"api/1_wrapper",slug:"/api/wrapper/authenticateemailpassword",permalink:"/braincloud-apiref/api/wrapper/authenticateemailpassword",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/1_wrapper/authenticateemailpassword.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1673042992,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{},sidebar:"apiSidebar",previous:{title:"AuthenticateApple",permalink:"/braincloud-apiref/api/wrapper/authenticateapple"},next:{title:"AuthenticateExternal",permalink:"/braincloud-apiref/api/wrapper/authenticateexternal"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Error Handling Example",id:"error-handling-example",level:2},{value:"Usage",id:"usage",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=p("PartialServop"),u=p("BrowserWindow"),m=p("Tabs"),h=p("TabItem"),k={toc:d};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"authenticateemailpassword"},"AuthenticateEmailPassword"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Authenticate the user with a custom Email and Password.  Note that the client app is responsible for collecting (and storing) the e-mail and potentially password (for convenience) in the client data.  For the greatest security, force the user to re-enter their password at each login (or at least give them that option)."),(0,r.kt)("h2",{id:"error-handling-example"},"Error Handling Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public void FailureCallback(int statusCode, int reasonCode, string statusMessage, object cbObject) {\n    switch (reasonCode) {\n        case ReasonCodes.MISSING_IDENTITY_ERROR: {  // Identity does not exist (and client has orphaned profileId)\n\n            // Reset profileId and re-authenticate\n            _bc.ResetStoredProfileId();\n            _bc.AuthenticateUniversal(userId, password, true);\n            break;\n        }\n        case ReasonCodes.SWITCHING_PROFILES: {  // Identity belongs to a different profile\n\n            // [Optional] Prompt user to confirm that they wish to switch accounts?\n\n            // Reset profileId and re-authenticate\n            _bc.ResetStoredProfileId();\n            _bc.AuthenticateUniversal(userId, password, forceCreate);\n            break;\n        }\n        case ReasonCodes.MISSING_PROFILE_ERROR: {  // Identity does not exist\n\n            // The account doesn't exist - create it now.\n            _bc.AuthenticateUniversal(userId, password, true);\n            break;\n        }\n        case ReasonCodes.TOKEN_DOES_NOT_MATCH_USER: {  // Wrong password\n\n            // Display a dialog telling the user that the password provided was invalid,\n            // and invite them to re-enter the password.\n            // ...\n            break;\n        }\n        default: { // Uncaught reasonCode\n\n            // Log the error for debugging later\n            // ...\n            break;\n        }\n    }\n}\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you've initialized the brainCloud wrapper before authenticating.")),(0,r.kt)(c,{service_name:"authenticationV2",operation_name:"AUTHENTICATE",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(u,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(h,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string email = <%= data.example.email %>;\nstring password = <%= data.example.password %>;\nbool forceCreate = true;\n    \nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("[Authenticate Success] {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("[Authenticate Failed] {0}  {1}  {2}", status, code, error));\n};\n_bc.AuthenticateEmailPassword(\n    email, password, forceCreate, successCallback, failureCallback);\n'))),(0,r.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"const char* email = <%= data.example.email %>;\nconst char* password = <%= data.example.password %>;\nbool forceCreate = true;\n\n_bc->authenticateEmailPassword(email, password, forceCreate, this);\n"))),(0,r.kt)(h,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"NSString* email = @<%= data.example.email %>;\nNSString* password = @<%= data.example.password %>;\nbool forceCreate = true;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[_bc authenticateEmailPassword:email\n                     password:password\n                  forceCreate:forceCreate\n              completionBlock:successBlock\n         errorCompletionBlock:failureBlock\n                     cbObject:nil];\n"))),(0,r.kt)(h,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"String email = <%= data.example.email %>;\nString password = <%= data.example.password %>;\nboolean forceCreate = true;\n\n_bc.authenticateEmailPassword(\n    email,\n    password,\n    forceCreate,\n    this);\n"))),(0,r.kt)(h,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var email = <%= data.example.email %>;\nvar password = <%= data.example.password %>;\nvar forceCreate = true;\n\n_bc.authenticateEmailPassword(email, password, forceCreate, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,r.kt)(h,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var email = <%= data.example.email %>;\nvar password = <%= data.example.password %>;\nvar forceCreate = true;\n\n_bc.authenticateEmailPassword(email, password, forceCreate, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,r.kt)(h,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var email = <%= data.example.email %>;\nvar password = <%= data.example.password %>;\nvar forceCreate = true;\n\n_bc.authenticateEmailPassword(email, password, forceCreate, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "vcPurchased": 0,\n        "xpCapped": false,\n        "experiencePoints": 230,\n        "sent_events": [\n        ],\n        "playerSessionExpiry": 1200,\n        "playerName": "Jimmy",\n        "vcClaimed": 0,\n        "parentProfileId": null,\n        "rewards": {\n            "rewardDetails": {},\n            "rewards": {},\n            "currency": {}\n        },\n        "loginCount": 23,\n        "server_time": 1445545791711,\n        "experienceLevel": 0,\n        "entities": [\n        ],\n        "incoming_events": [\n        ],\n        "currency": {\n            "gold": {\n                "purchased": 0,\n                "balance": 0,\n                "consumed": 0,\n                "awarded": 0\n            }\n        },\n        "statistics": {\n            "deaths": 0,\n            "kills": 0\n        },\n        "abTestingId": 78,\n        "id": "47037fc9-ca7b-4f61-a71f-e5a37b0e8a03",\n        "sessionId": "bg6qf38p2btl0o825s99385nd1",\n        "profileId": "47037fc9-ca7b-4f61-a71f-e5a37b0e8a03",\n        "newUser": "false"\n    }\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Common Error Code"),(0,r.kt)("h3",{id:"status-codes"},"Status Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40206"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_IDENTITY_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"The identity does not exist on the server and ",(0,r.kt)("inlineCode",{parentName:"td"},"forceCreate")," was ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," ","[and a ",(0,r.kt)("inlineCode",{parentName:"td"},"profileId")," was provided - otherwise 40208 would have been returned]",". Will also occur when ",(0,r.kt)("inlineCode",{parentName:"td"},"forceCreate")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," and a saved ","[and unrelated]"," ",(0,r.kt)("inlineCode",{parentName:"td"},"profileId")," is provided. The error handler should reset the stored profile id (if there is one) and re-authenticate, setting ",(0,r.kt)("inlineCode",{parentName:"td"},"forceCreate")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," to create a new account. ",(0,r.kt)("strong",{parentName:"td"},"A common cause of this error is deleting the user's account via the Design Portal."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40207"),(0,r.kt)("td",{parentName:"tr",align:null},"SWITCHING_PROFILES"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates that the identity credentials are valid, and the saved ",(0,r.kt)("inlineCode",{parentName:"td"},"profileId")," is valid, but the identity is not associated with the ",(0,r.kt)("inlineCode",{parentName:"td"},"profileId"),". This may indicate that the user wants to switch accounts in the app. Often an app will pop-up a dialog confirming that the user wants to switch accounts, and then reset the stored ",(0,r.kt)("inlineCode",{parentName:"td"},"profileId")," and call authenticate again.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40208"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_PROFILE_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"Returned when the identity cannot be located, no ",(0,r.kt)("inlineCode",{parentName:"td"},"profileId")," is provided, and ",(0,r.kt)("inlineCode",{parentName:"td"},"forceCreate")," is false. The normal response is to call Authenticate again with ",(0,r.kt)("inlineCode",{parentName:"td"},"forceCreate")," set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40217"),(0,r.kt)("td",{parentName:"tr",align:null},"UNKNOWN_AUTH_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"An unknown error has occurred during authentication.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40307"),(0,r.kt)("td",{parentName:"tr",align:null},"TOKEN_DOES_NOT_MATCH_USER"),(0,r.kt)("td",{parentName:"tr",align:null},"The user credentials don't match (i.e. incorrect password)."))))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"The e-mail address of the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"The password of the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forceCreate"),(0,r.kt)("td",{parentName:"tr",align:null},"Should a new profile be created for this user if the account does not exist?")))))}b.isMDXComponent=!0}}]);