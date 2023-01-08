"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[87639],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),f=r,m=u["".concat(p,".").concat(f)]||u[f]||g[f]||l;return t?n.createElement(m,o(o({ref:a},c),{},{components:t})):n.createElement(m,o({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=f;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},23674:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=t(87462),r=(t(67294),t(3905));const l={},o="ProfanityReplaceText",i={unversionedId:"api/capi/profanity/profanityreplacetext",id:"api/capi/profanity/profanityreplacetext",title:"ProfanityReplaceText",description:"Overview",source:"@site/docs/api/2_capi/profanity/profanityreplacetext.md",sourceDirName:"api/2_capi/profanity",slug:"/api/capi/profanity/profanityreplacetext",permalink:"/braincloud-apiref/api/capi/profanity/profanityreplacetext",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/profanity/profanityreplacetext.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1673042992,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{},sidebar:"apiSidebar",previous:{title:"ProfanityIdentifyBadWords",permalink:"/braincloud-apiref/api/capi/profanity/profanityidentifybadwords"},next:{title:"Promotions",permalink:"/braincloud-apiref/api/capi/promotions/"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},u=c("PartialServop"),g=c("BrowserWindow"),f=c("Tabs"),m=c("TabItem"),d={toc:s};function b(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"profanityreplacetext"},"ProfanityReplaceText"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Replaces the characters of profanity text with a passed character(s)."),(0,r.kt)(u,{service_name:"profanity",operation_name:"PROFANITY_REPLACE_TEXT",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(g,{mdxType:"BrowserWindow"},(0,r.kt)(f,{mdxType:"Tabs"},(0,r.kt)(m,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string text = "foul language";\nstring replaceSymbol = "*";\nstring languages = "en,fr";\nbool flagEmail = false;\nbool flagPhone = false;\nbool flagUrls = false;\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.ProfanityService.ProfanityReplaceText(text, replaceSymbol, languages, flagEmail, flagPhone, flagUrls, successCallback, failureCallback);\n'))),(0,r.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *text = "foul language";\nconst char *replaceSymbol = "*";\nconst char *languages = "en,fr";\nbool flagEmail = false;\nbool flagPhone = false;\nbool flagUrls = false;\n_bc->getProfanityService()->profanityReplaceText(text, replaceSymbol, languages, flagEmail, flagPhone, flagUrls, this);\n'))),(0,r.kt)(m,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *text = @"foul language";\nNSString *replaceSymbol = @"*";\nNSString *languages = @"en,fr";\nbool flagEmail = false;\nbool flagPhone = false;\nbool flagUrls = false;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc profanityService] profanityReplaceText:text\n              replaceSymbol:replaceSymbol\n                  languages:languages\n                  flagEmail:flagEmail\n                  flagPhone:flagPhone\n                   flagUrls:flagUrls\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,r.kt)(m,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String text = "foul language";\nString replaceSymbol = "*";\nString languages = "en,fr";\nboolean flagEmail = false;\nboolean flagPhone = false;\nboolean flagUrls = false;\nthis; // implements IServerCallback\n\n_bc.getProfanityService().profanityReplaceText(text, replaceSymbol, languages, flagEmail, flagPhone, flagUrls, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,r.kt)(m,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var text = "foul language";\nvar replaceSymbol = "*";\nvar languages = "en,fr";\nvar flagEmail = false;\nvar flagPhone = false;\nvar flagUrls = false;\n\n_bc.profanity.profanityReplaceText(text, replaceSymbol, languages, flagEmail, flagPhone, flagUrls, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,r.kt)(m,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var text = "foul language";\nvar replaceSymbol = "*";\nvar languages = "en,fr";\nvar flagEmail = false;\nvar flagPhone = false;\nvar flagUrls = false;\nvar profanityProxy = bridge.getProfanityServiceProxy();\n\nvar postResult = profanityProxy.profanityReplaceText(text, replaceSymbol, languages, flagEmail, flagPhone, flagUrls);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(m,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "profanity",\n    "operation": "PROFANITY_REPLACE_TEXT",\n    "data": {\n        "text": "foul language",\n        "replaceSymbol": "*",\n        "languages": "en,fr",\n        "flagEmail": false,\n        "flagPhone": false,\n        "flagUrls": false\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "foundCount": "1",\n    "replacedString": "**** language"\n  },\n  "status": 200\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Common Error Code"),(0,r.kt)("h3",{id:"status-codes"},"Status Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40421"),(0,r.kt)("td",{parentName:"tr",align:null},"WEBPURIFY_NOT_CONFIGURED"),(0,r.kt)("td",{parentName:"tr",align:null},"WebPurify not configured")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40422"),(0,r.kt)("td",{parentName:"tr",align:null},"WEBPURIFY_EXCEPTION"),(0,r.kt)("td",{parentName:"tr",align:null},"General exception occurred")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40423"),(0,r.kt)("td",{parentName:"tr",align:null},"WEBPURIFY_FAILURE"),(0,r.kt)("td",{parentName:"tr",align:null},"WebPurify returned an error (Http status != 200)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40424"),(0,r.kt)("td",{parentName:"tr",align:null},"WEBPURIFY_NOT_ENABLED"),(0,r.kt)("td",{parentName:"tr",align:null},"WebPurify not enabled"))))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"The text to check")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replaceSymbol"),(0,r.kt)("td",{parentName:"tr",align:null},"The text to replace individual characters of profanity text with")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"languages"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional comma delimited list of two character language codes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flagEmail"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional processing of email addresses")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flagPhone"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional processing of phone numbers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flagUrls"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional processing of urls")))),(0,r.kt)("h1",{id:""}))}b.isMDXComponent=!0}}]);