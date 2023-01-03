"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[25933],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>y});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),s=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=s(a),u=r,y=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(y,l(l({ref:e},p),{},{components:a})):n.createElement(y,l({ref:e},p))}));function y(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[d]="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},54421:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={},l="AttachSteamIdentity",o={unversionedId:"api/capi/identity/attachsteamidentity",id:"api/capi/identity/attachsteamidentity",title:"AttachSteamIdentity",description:"Overview",source:"@site/docs/api/2_capi/identity/attachsteamidentity.md",sourceDirName:"api/2_capi/identity",slug:"/api/capi/identity/attachsteamidentity",permalink:"/braincloud-apiref/api/capi/identity/attachsteamidentity",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/identity/attachsteamidentity.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"AttachPlaystationNetworkIdentity",permalink:"/braincloud-apiref/api/capi/identity/attachplaystationnetworkidentity"},next:{title:"AttachTwitterIdentity",permalink:"/braincloud-apiref/api/capi/identity/attachtwitteridentity"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},d=p("PartialServop"),m=p("BrowserWindow"),u=p("Tabs"),y=p("TabItem"),k={toc:s};function b(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"attachsteamidentity"},"AttachSteamIdentity"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Attach a Steam (steam ID + steam session ticket) identity to the current profile."),(0,r.kt)("h3",{id:"status-codes"},"Status Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40211"),(0,r.kt)("td",{parentName:"tr",align:null},"DUPLICATE_IDENTITY_TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"Returned when trying to attach an identity type that already exists for that profile. For instance you can have only one Steam identity for a profile.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40212"),(0,r.kt)("td",{parentName:"tr",align:null},"MERGE_PROFILES"),(0,r.kt)("td",{parentName:"tr",align:null},"Returned when trying to attach an identity type that would result in two profiles being merged into one (for instance an anonymous account and a Steam account).")))),(0,r.kt)(d,{service_name:"identity",operation_name:"ATTACH",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(m,{mdxType:"BrowserWindow"},(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(y,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string steamId = "someId";\nstring sessionTicket = "someToken";\n\n_bc.IdentityService.AttachSteamIdentity(\n    steamId,\n    sessionTicket,\n    SuccessCallback, FailureCallback);\n'))),(0,r.kt)(y,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'const char * steamId = "someId";\nconst char * sessionTicket = "someToken";\n\n_bc->getIdentityService()->attachSteamIdentity(\n    steamId, sessionTicket, this);\n'))),(0,r.kt)(y,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (void)attachSteamIdentity:(NSString *)steamId\n        authenticationToken:(NSString *)sessionTicket\n            completionBlock:(BCCompletionBlock)cb\n       errorCompletionBlock:(BCErrorCompletionBlock)ecb\n                   cbObject:(BCCallbackObject)cbObject;\n"))),(0,r.kt)(y,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public void attachSteamIdentity(String steamId, String sessionTicket, IServerCallback callback)\n"))),(0,r.kt)(y,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"_bc.identity.attachSteamIdentity = function(steamId, sessionTicket, callback)\n"))),(0,r.kt)(y,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))),(0,r.kt)(y,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status" : 200,\n    "data" : null\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"steamId"),(0,r.kt)("td",{parentName:"tr",align:null},"String representation of 64 bit steam id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sessionTicket"),(0,r.kt)("td",{parentName:"tr",align:null},"The player's session ticket (hex encoded)")))))}b.isMDXComponent=!0}}]);