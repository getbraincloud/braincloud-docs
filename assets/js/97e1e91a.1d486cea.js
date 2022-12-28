"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[32170],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=d(a),u=r,y=s["".concat(c,".").concat(u)]||s[u]||m[u]||i;return a?n.createElement(y,l(l({ref:t},p),{},{components:a})):n.createElement(y,l({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},59823:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={},l="AttachEmailIdentity",o={unversionedId:"api/capi/identity/attachemailidentity",id:"api/capi/identity/attachemailidentity",title:"AttachEmailIdentity",description:"Overview",source:"@site/docs/api/2_capi/identity/attachemailidentity.md",sourceDirName:"api/2_capi/identity",slug:"/api/capi/identity/attachemailidentity",permalink:"/braincloud-apiref/api/capi/identity/attachemailidentity",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/identity/attachemailidentity.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"AttachBlockchainIdentity",permalink:"/braincloud-apiref/api/capi/identity/attachblockchainidentity"},next:{title:"AttachFacebookIdentity",permalink:"/braincloud-apiref/api/capi/identity/attachfacebookidentity"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Error Handling Example",id:"error-handling-example",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},s=p("PartialServop"),m=p("BrowserWindow"),u=p("Tabs"),y=p("TabItem"),b={toc:d};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"attachemailidentity"},"AttachEmailIdentity"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Attach a Email and Password identity to the current profile."),(0,r.kt)("h2",{id:"error-handling-example"},"Error Handling Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public void FailureCallback(int statusCode, int reasonCode, string statusMessage, object cbObject) {\n        switch (reasonCode) {\n            case ReasonCodes.DUPLICATE_IDENTITY_TYPE: { // User is attempting to attach an idenity of the type that exists on there account\n                // Must get old idenity of type Email, and detach it first. see GetIdentities\n                _bc.IdentityService.DetachEmailIdentity(oldEmail, oldPassword);\n                // Then, can add a new Identity of that type\n                _bc.IdentityService.AttachEmailIdentity(email, password);\n                break;\n            }\n            case ReasonCodes.MERGE_PROFILES: { // User to attaching a idenity that is connected to a different profile\n                /**\n                 * Prompt the user that the identity already exists with a different account.\n                 * Ask if they wish to merge the two accounts, and perform a merge if true\n                 */\n                _bc.MergeEmailIdentity(email, password, true);\n                break;\n            }\n            default: { // Uncaught reasonCode\n                /**\n                 * Log the unexpected reasonCode to your own internal logs,\n                 * to implement needed error handling later\n                 */\n                break;\n            }\n        }\n    }\n")),(0,r.kt)("h3",{id:"status-codes"},"Status Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40211"),(0,r.kt)("td",{parentName:"tr",align:null},"DUPLICATE_IDENTITY_TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"Returned when trying to attach an identity type that already exists for that profile. For instance you can have only one Email identity for a profile.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40212"),(0,r.kt)("td",{parentName:"tr",align:null},"MERGE_PROFILES"),(0,r.kt)("td",{parentName:"tr",align:null},"Returned when trying to attach an identity type that would result in two profiles being merged into one (for instance an anonymous account and a Email account).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"550022"),(0,r.kt)("td",{parentName:"tr",align:null},"INVALID_PASSWORD_CONTENT"),(0,r.kt)("td",{parentName:"tr",align:null},"The password doesn't meet the minimum password requirements.")))),(0,r.kt)(s,{service_name:"identity",operation_name:"ATTACH",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(m,{mdxType:"BrowserWindow"},(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(y,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string email = "email@domain.com";\nstring password = "somePassword";\n\n_bc.IdentityService.AttachEmailIdentity(\n    email,\n    password,\n    SuccessCallback, FailureCallback);\n'))),(0,r.kt)(y,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'const char * email = "email@domain.com";\nconst char * password = "someToken";\n\n_bc->getIdentityService()->attachEmailIdentity(\n    email, password, this);\n'))),(0,r.kt)(y,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (void)attachEmailIdentity:(NSString *)email\n        authenticationToken:(NSString *)password\n            completionBlock:(BCCompletionBlock)cb\n       errorCompletionBlock:(BCErrorCompletionBlock)ecb\n                   cbObject:(BCCallbackObject)cbObject;\n"))),(0,r.kt)(y,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public void attachEmailIdentity(String email, String password, IServerCallback callback)\n"))),(0,r.kt)(y,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"_bc.identity.attachEmailIdentity = function(email, password, callback)\n"))),(0,r.kt)(y,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))),(0,r.kt)(y,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status" : 200,\n    "data" : null\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"The user's e-mail address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"The user's password")))))}k.isMDXComponent=!0}}]);