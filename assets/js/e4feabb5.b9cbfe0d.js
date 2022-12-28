"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[59138],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(a),m=r,b=s["".concat(l,".").concat(m)]||s[m]||u[m]||o;return a?n.createElement(b,i(i({ref:t},p),{},{components:a})):n.createElement(b,i({ref:t},p))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2163:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={},i="DetachFacebookLimitedIdentity",c={unversionedId:"api/capi/identity/detachfacebooklimitedidentity",id:"api/capi/identity/detachfacebooklimitedidentity",title:"DetachFacebookLimitedIdentity",description:"Overview",source:"@site/docs/api/2_capi/identity/detachfacebooklimitedidentity.md",sourceDirName:"api/2_capi/identity",slug:"/api/capi/identity/detachfacebooklimitedidentity",permalink:"/braincloud-apiref/api/capi/identity/detachfacebooklimitedidentity",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/identity/detachfacebooklimitedidentity.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"DetachFacebookIdentity",permalink:"/braincloud-apiref/api/capi/identity/detachfacebookidentity"},next:{title:"DetachGameCenterIdentity",permalink:"/braincloud-apiref/api/capi/identity/detachgamecenteridentity"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},s=p("PartialServop"),u=p("BrowserWindow"),m=p("Tabs"),b=p("TabItem"),k={toc:d};function y(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"detachfacebooklimitedidentity"},"DetachFacebookLimitedIdentity"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Detach the Facebook Limited login identity from this profile."),(0,r.kt)("h3",{id:"status-codes"},"Status Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40210"),(0,r.kt)("td",{parentName:"tr",align:null},"DOWNGRADING_TO_ANONYMOUS_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"Occurs when detaching the last non-anonymous identity from an account with continueAnon set to false.")))),(0,r.kt)(s,{service_name:"identity",operation_name:"DETACH",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(u,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(b,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string facebookId = "someFacebookId";\n\n_bc.IdentityService.DetachFacebookLimitedIdentity(\n    facebookId,\n    true,\n    SuccessCallback, FailureCallback);\n'))),(0,r.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'const char * facebookId = "someFacebookId";\n\n_bc->getIdentityService()->detachFacebookLimitedIdentity(\n    facebookId, false, this);\n'))),(0,r.kt)(b,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (void)detachFacebookLimitedIdentity:(NSString *)facebookId\n                  continueAnon:(bool)continueAnon\n               completionBlock:(BCCompletionBlock)cb\n          errorCompletionBlock:(BCErrorCompletionBlock)ecb\n                      cbObject:(BCCallbackObject)cbObject;\n"))),(0,r.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String facebookId = "someFacebookId";\nBoolean continueAnon = true;\nthis; // implements IServerCallback\n\n_bc.getIdentityService().detachFacebookLimitedIdentity(facebookId, ontinueAnon, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\npublic void detachFacebookLimitedIdentity(String facebookId, boolean continueAnon, IServerCallback callback)\n'))),(0,r.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var facebookId = "someFacebookId";\nvar continueAnon = true;\n\n_bc.identity.detachFacebookLimitedIdentity(facebookId, continueAnon, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,r.kt)(b,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))),(0,r.kt)(b,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status" : 200,\n    "data" : null\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"facebookId"),(0,r.kt)("td",{parentName:"tr",align:null},"The facebook id of the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"continueAnon"),(0,r.kt)("td",{parentName:"tr",align:null},"Proceed even if the profile will revert to anonymous?")))))}y.isMDXComponent=!0}}]);