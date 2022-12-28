"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[15214],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),o=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=o(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=o(r),m=n,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return r?a.createElement(b,s(s({ref:t},p),{},{components:r})):a.createElement(b,s({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:n,s[1]=c;for(var o=2;o<l;o++)s[o]=r[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54089:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const l={},s="UpdateUserPictureUrl",c={unversionedId:"api/capi/playerstate/updateuserpictureurl",id:"api/capi/playerstate/updateuserpictureurl",title:"UpdateUserPictureUrl",description:"Overview",source:"@site/docs/api/2_capi/playerstate/updateuserpictureurl.md",sourceDirName:"api/2_capi/playerstate",slug:"/api/capi/playerstate/updateuserpictureurl",permalink:"/braincloud-apiref/api/capi/playerstate/updateuserpictureurl",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/playerstate/updateuserpictureurl.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671831235,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"UpdateUserName",permalink:"/braincloud-apiref/api/capi/playerstate/updateusername"},next:{title:"Player Statistics",permalink:"/braincloud-apiref/api/capi/playerstats/"}},i={},o=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=p("PartialServop"),d=p("BrowserWindow"),m=p("Tabs"),b=p("TabItem"),v={toc:o};function y(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"updateuserpictureurl"},"UpdateUserPictureUrl"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Update User picture URL."),(0,n.kt)(u,{service_name:"playerState",operation_name:"UPDATE_PICTURE_URL",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(d,{mdxType:"BrowserWindow"},(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(b,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'string userPictureUrl = "someURL";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.PlayerStateService.UpdateUserPictureUrl(userPictureUrl, successCallback, failureCallback);\n'))),(0,n.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *userPictureUrl = "someURL";\n_bc->getPlayerStateService()->updateUserPictureUrl(userPictureUrl, this);\n'))),(0,n.kt)(b,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *userPictureUrl = @"someURL";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc playerStateService] updateUserPictureUrl:userPictureUrl\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,n.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String userPictureUrl = "someURL";\nthis; // implements IServerCallback\n\n_bc.getPlayerStateService().updateUserPictureUrl(userPictureUrl, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,n.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var userPictureUrl = "someURL";\n\n_bc.playerState.updateUserPictureUrl(userPictureUrl, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)(b,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var userPictureUrl = "someURL";\nvar playerStateProxy = bridge.getPlayerStateServiceProxy();\n\nvar postResult = playerStateProxy.updateUserPictureUrl(userPictureUrl);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,n.kt)(b,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "playerState",\n    "operation": "UPDATE_PICTURE_URL",\n    "data": {\n        "userPictureUrl": "someURL"\n    }\n}\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "playerPictureUrl": "https://some.domain.com/mypicture.jpg"\n    }\n}\n'))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pictureUrl"),(0,n.kt)("td",{parentName:"tr",align:null},"URL to apply")))))}y.isMDXComponent=!0}}]);