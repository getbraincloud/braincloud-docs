"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[42572],{3905:(e,a,r)=>{r.d(a,{Zo:()=>p,kt:()=>m});var t=r(67294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=t.createContext({}),i=function(e){var a=t.useContext(d),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},p=function(e){var a=i(e.components);return t.createElement(d.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},b=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=i(r),b=n,m=c["".concat(d,".").concat(b)]||c[b]||u[b]||o;return r?t.createElement(m,l(l({ref:a},p),{},{components:r})):t.createElement(m,l({ref:a},p))}));function m(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=b;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=e,s[c]="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}b.displayName="MDXCreateElement"},14244:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var t=r(87462),n=(r(67294),r(3905));const o={},l="ListAllLeaderboards",s={unversionedId:"api/s2s/leaderboard/listallleaderboards",id:"api/s2s/leaderboard/listallleaderboards",title:"ListAllLeaderboards",description:"Overview",source:"@site/docs/api/4_s2s/leaderboard/listallleaderboards.md",sourceDirName:"api/4_s2s/leaderboard",slug:"/api/s2s/leaderboard/listallleaderboards",permalink:"/braincloud-apiref/api/s2s/leaderboard/listallleaderboards",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/4_s2s/leaderboard/listallleaderboards.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"GetGlobalLeaderboardVersions",permalink:"/braincloud-apiref/api/s2s/leaderboard/getgloballeaderboardversions"},next:{title:"PostScoreToLeaderboardOnBehalfOf",permalink:"/braincloud-apiref/api/s2s/leaderboard/postscoretoleaderboardonbehalfof"}},d={},i=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2}],p=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",a)},c=p("PartialServop"),u=p("BrowserWindow"),b=p("Tabs"),m=p("TabItem"),v={toc:i};function f(e){let{components:a,...r}=e;return(0,n.kt)("wrapper",(0,t.Z)({},v,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"listallleaderboards"},"ListAllLeaderboards"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n    "packetId": 1,\n    "messages": [\n        {\n            "service": "leaderboard",\n            "operation": "LIST_ALL_LEADERBOARDS",\n            "data": { }            \n        }\n    ]\n}\n')),(0,n.kt)("p",null,"Method returns list of all the leaderboards from the server based on gameId of the user."),(0,n.kt)(c,{service_name:"leaderboard",operation_name:"LIST_ALL_LEADERBOARDS",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(u,{mdxType:"BrowserWindow"},(0,n.kt)(b,{mdxType:"Tabs"},(0,n.kt)(m,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,n.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,n.kt)(m,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,n.kt)(m,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,n.kt)(m,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,n.kt)(m,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},"var leaderboardProxy = bridge.getLeaderboardServiceProxy();\n\nvar postResult = leaderboardProxy.listAllLeaderboards();\nif (postResult.status == 200) {\n    // Success!\n}\n"))),(0,n.kt)(m,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},"var leaderboardProxy = bridge.getLeaderboardServiceProxy();\n\nvar postResult = leaderboardProxy.listAllLeaderboards();\nif (postResult.status == 200) {\n    // Success!\n}\n"))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "packetId": 1,\n    "messageResponses": [\n        {\n            "status": 200,\n            "data": {\n                "leaderboardListCount": 3,\n                "leaderboardList": [\n                    {\n                        "leaderboardId": "default",\n                        "leaderboardType": "HIGH_VALUE",\n                        "resetAt": 1473793200000,\n                        "rotationType": "WEEKLY",\n                        "currentVersionId": 1,\n                        "maxRetainedCount": 5,\n                        "retainedVersionsCount": 1,\n                        "data": {}\n                    },\n                    {\n                        "leaderboardId": "default1",\n                        "leaderboardType": "HIGH_VALUE",\n                        "resetAt": 1517428800000,\n                        "rotationType": "WEEKLY",\n                        "currentVersionId": 1,\n                        "maxRetainedCount": 2,\n                        "retainedVersionsCount": 1,\n                        "data": {\n                            "retainedCount": 7\n                        }\n                    }\n                ]\n            }\n        }\n    ]\n}\n'))))}f.isMDXComponent=!0}}]);