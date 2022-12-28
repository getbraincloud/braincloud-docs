"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[65943],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},l="SwitchToSingletonChildProfile",o={unversionedId:"api/capi/identity/switchtosingletonchildprofile",id:"api/capi/identity/switchtosingletonchildprofile",title:"SwitchToSingletonChildProfile",description:"Overview",source:"@site/docs/api/2_capi/identity/switchtosingletonchildprofile.md",sourceDirName:"api/2_capi/identity",slug:"/api/capi/identity/switchtosingletonchildprofile",permalink:"/braincloud-apiref/api/capi/identity/switchtosingletonchildprofile",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/identity/switchtosingletonchildprofile.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671831235,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SwitchToParentProfile",permalink:"/braincloud-apiref/api/capi/identity/switchtoparentprofile"},next:{title:"SysChangeEmailIdentity",permalink:"/braincloud-apiref/api/capi/identity/syschangeemailidentity"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},s=d("PartialServop"),u=d("BrowserWindow"),m=d("Tabs"),f=d("TabItem"),h={toc:p};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"switchtosingletonchildprofile"},"SwitchToSingletonChildProfile"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Switches to a child profile of an app when only one profile exists. If multiple profiles exist this returns an error."),(0,a.kt)(s,{service_name:"identity",operation_name:"SWITCH_TO_CHILD_PROFILE",mdxType:"PartialServop"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(u,{mdxType:"BrowserWindow"},(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(f,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'string childAppId = "1234567";\n\n_bc.IdentityService.SwitchToSingletonChildProfile(\n    childAppId,\n    true,\n    ApiSuccess, ApiError);\n'))),(0,a.kt)(f,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'const char * childAppId = "1234567";\n\n_bc->getIdentityService()->switchToSingletonChildProfile(\n    childAppId, true, this);\n'))),(0,a.kt)(f,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (void)switchToSingletonChildProfile:(NSString *)childAppId\n                 forceCreate:(bool)forceCreate\n             completionBlock:(BCCompletionBlock)cb\n        errorCompletionBlock:(BCErrorCompletionBlock)ecb\n                    cbObject:(BCCallbackObject)cbObject;\n"))),(0,a.kt)(f,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public void switchToSingletonChildProfile(String in_childAppId, boolean in_forceCreate, IServerCallback in_callback)\n"))),(0,a.kt)(f,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"_bc.identity.switchToSingletonChildProfile = function(childAppId, forceCreate, callback)\n"))),(0,a.kt)(f,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cfscript"},'var childAppId = "123456";\nvar forceCreate = true;\n\nvar identityProxy = bridge.getIdentityServiceProxy();\nvar retVal = identityProxy.switchToSingletonChildProfile(childAppId, forceCreate);\n'))),(0,a.kt)(f,{value:"r",label:"Raw",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cfscript"},'var childAppId = "123456";\nvar forceCreate = true;\n\nvar identityProxy = bridge.getIdentityServiceProxy();\nvar retVal = identityProxy.switchToSingletonChildProfile(childAppId, forceCreate);\n'))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"JSON Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{  \n   "data":{  \n      "abTestingId":93,\n      "lastLogin":1558725462395,\n      "server_time":1558725462431,\n      "refundCount":0,\n      "timeZoneOffset":-5,\n      "experiencePoints":0,\n      "createdAt":1558462162948,\n      "parentProfileId":"08ae9b33-3e9d-43d5-835e-7915e0da0fca",\n      "emailAddress":null,\n      "experienceLevel":0,\n      "countryCode":"CA",\n      "vcClaimed":0,\n      "currency":{  \n\n      },\n      "id":"e3bf5491-aed5-402c-8eb3-e218e77a58ff",\n      "amountSpent":0,\n      "parentCurrency":{  \n         "Parent":{  \n\n         }\n      },\n      "previousLogin":1558462162950,\n      "playerName":"",\n      "pictureUrl":null,\n      "incoming_events":[  \n\n      ],\n      "languageCode":"en",\n      "vcPurchased":0,\n      "isTester":false,\n      "loginCount":2,\n      "xpCapped":false,\n      "profileId":"e3bf5491-aed5-402c-8eb3-e218e77a58ff",\n      "newUser":false,\n      "sent_events":[  \n\n      ],\n      "rewards":{  \n         "rewardDetails":{  \n\n         },\n         "currency":{  \n\n         },\n         "rewards":{  \n\n         }\n      },\n      "switchToAppId":"12336",\n      "statistics":{  \n\n      }\n   },\n   "status":200\n}\n'))),(0,a.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"childAppId"),(0,a.kt)("td",{parentName:"tr",align:null},"The App ID of the child app to switch to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"forceCreate"),(0,a.kt)("td",{parentName:"tr",align:null},"Should a new profile be created if it does not exist?")))))}b.isMDXComponent=!0}}]);