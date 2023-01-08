"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[30428],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(a),u=n,g=m["".concat(p,".").concat(u)]||m[u]||s[u]||i;return a?r.createElement(g,l(l({ref:t},d),{},{components:a})):r.createElement(g,l({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},11761:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={},l="MergeGameCenterIdentity",o={unversionedId:"api/capi/identity/mergegamecenteridentity",id:"api/capi/identity/mergegamecenteridentity",title:"MergeGameCenterIdentity",description:"Overview",source:"@site/docs/api/2_capi/identity/mergegamecenteridentity.md",sourceDirName:"api/2_capi/identity",slug:"/api/capi/identity/mergegamecenteridentity",permalink:"/braincloud-apiref/api/capi/identity/mergegamecenteridentity",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/identity/mergegamecenteridentity.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1673042992,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{},sidebar:"apiSidebar",previous:{title:"MergeFacebookLimitedIdentity",permalink:"/braincloud-apiref/api/capi/identity/mergefacebooklimitedidentity"},next:{title:"MergeGoogleIdentity",permalink:"/braincloud-apiref/api/capi/identity/mergegoogleidentity"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Method Parameters",id:"method-parameters",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=d("PartialServop"),s=d("BrowserWindow"),u=d("Tabs"),g=d("TabItem"),y={toc:c};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mergegamecenteridentity"},"MergeGameCenterIdentity"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Merge the profile associated with the specified Game Center identity with the current profile."),(0,n.kt)("p",null,"NOTE: If using the BrainCloudWrapper, once the merge is complete you should call ",(0,n.kt)("a",{parentName:"p",href:"/api/wrapper/setstoredprofileid"},(0,n.kt)("code",null,"SetStoredProfileId"))," in the BrainCloudWrapper with the profileId returned in the Merge call."),(0,n.kt)(m,{service_name:"identity",operation_name:"MERGE",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(s,{mdxType:"BrowserWindow"},(0,n.kt)(u,{mdxType:"Tabs"},(0,n.kt)(g,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'string gameCenterId = "someId";\n\n_bc.IdentityService.MergeGameCenterIdentity(\n    gameCenterId,\n    SuccessCallback, FailureCallback);\n'))),(0,n.kt)(g,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'const char * gameCenterId = "someId";\n\n_bc->getIdentityService()->mergeGameCenterIdentity(\n    gameCenterId, this);\n'))),(0,n.kt)(g,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (void)mergeGameCenterIdentity:(NSString *)gameCenterId\n                completionBlock:(BCCompletionBlock)cb\n           errorCompletionBlock:(BCErrorCompletionBlock)ecb\n                       cbObject:(BCCallbackObject)cbObject;\n"))),(0,n.kt)(g,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public void mergeGameCenterIdentity(String gameCenterId, IServerCallback callback)\n"))),(0,n.kt)(g,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"_bc.identity.mergeGameCenterIdentity = function(gameCenterId, callback)\n"))),(0,n.kt)(g,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))),(0,n.kt)(g,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{  \n   "data":{  \n      "profileId":"f94f7e2d-3cdd-4fd6-9c28-392f7875e9df"\n   },\n   "status":200\n}\n'))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Common Error Code"),(0,n.kt)("h3",{id:"status-codes"},"Status Codes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Code"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"40211"),(0,n.kt)("td",{parentName:"tr",align:null},"DUPLICATE_IDENTITY_TYPE"),(0,n.kt)("td",{parentName:"tr",align:null},"Returned when trying to attach an identity type that already exists for that profile. For instance you can have only one Game Center identity for a profile."))))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gameCenterId"),(0,n.kt)("td",{parentName:"tr",align:null},"The player's game center id  (use the playerID property from the local GKPlayer object)")))))}b.isMDXComponent=!0}}]);