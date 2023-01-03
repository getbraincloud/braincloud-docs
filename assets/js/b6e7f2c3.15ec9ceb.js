"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[31626],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(a),b=n,m=c["".concat(p,".").concat(b)]||c[b]||u[b]||l;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},51881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>v,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={},o="SysSendSignal",i={unversionedId:"api/capi/lobby/syssendsignal",id:"api/capi/lobby/syssendsignal",title:"SysSendSignal",description:"Overview",source:"@site/docs/api/2_capi/lobby/syssendsignal.md",sourceDirName:"api/2_capi/lobby",slug:"/api/capi/lobby/syssendsignal",permalink:"/braincloud-apiref/api/capi/lobby/syssendsignal",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/lobby/syssendsignal.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysRoomStopped",permalink:"/braincloud-apiref/api/capi/lobby/sysroomstopped"},next:{title:"UpdateReady",permalink:"/braincloud-apiref/api/capi/lobby/updateready"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},c=d("PartialServop"),u=d("BrowserWindow"),b=d("Tabs"),m=d("TabItem"),y={toc:s};function v(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"syssendsignal"},"SysSendSignal"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Send the given data to all members of the given lobby."),(0,n.kt)(c,{service_name:"lobby",operation_name:"SYS_SEND_SIGNAL",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(u,{mdxType:"BrowserWindow"},(0,n.kt)(b,{mdxType:"Tabs"},(0,n.kt)(m,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(m,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(m,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(m,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(m,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var lobbyId = "123456:4v4:19";\nvar signalData = {};\nvar from = {};\nvar lobbyProxy = bridge.getLobbyServiceProxy();\n\nvar postResult = lobbyProxy.sysSendSignal(lobbyId, signalData, from);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,n.kt)(m,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "lobby",\n    "operation": "SYS_SEND_SIGNAL",\n    "data": {\n        "lobbyId": "55555:4v4:19",\n        "signalData": {},\n        "from": {}\n    }\n}\n'))))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lobbyId"),(0,n.kt)("td",{parentName:"tr",align:null},"Id of chosen lobby.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"signalData"),(0,n.kt)("td",{parentName:"tr",align:null},"Signal data to be sent.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"from"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional 'from' data to be sent.")))))}v.isMDXComponent=!0}}]);