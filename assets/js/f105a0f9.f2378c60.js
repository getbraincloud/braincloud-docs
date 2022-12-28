"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[91211],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=i(a),u=n,g=c["".concat(p,".").concat(u)]||c[u]||d[u]||s;return a?r.createElement(g,o(o({ref:t},m),{},{components:a})):r.createElement(g,o({ref:t},m))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var i=2;i<s;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},97985:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const s={},o="SysUpdateMessage",l={unversionedId:"api/s2s/messaging/sysupdatemessage",id:"api/s2s/messaging/sysupdatemessage",title:"SysUpdateMessage",description:"Overview",source:"@site/docs/api/4_s2s/messaging/sysupdatemessage.md",sourceDirName:"api/4_s2s/messaging",slug:"/api/s2s/messaging/sysupdatemessage",permalink:"/braincloud-apiref/api/s2s/messaging/sysupdatemessage",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/4_s2s/messaging/sysupdatemessage.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysSendMessageSimple",permalink:"/braincloud-apiref/api/s2s/messaging/syssendmessagesimple"},next:{title:"Presence",permalink:"/braincloud-apiref/api/s2s/presence/"}},p={},i=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},c=m("PartialServop"),d=m("BrowserWindow"),u=m("Tabs"),g=m("TabItem"),v={toc:i};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sysupdatemessage"},"SysUpdateMessage"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Updates a system message."),(0,n.kt)(c,{service_name:"messaging",operation_name:"SYS_UPDATE_MESSAGE",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(d,{mdxType:"BrowserWindow"},(0,n.kt)(u,{mdxType:"Tabs"},(0,n.kt)(g,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,n.kt)(g,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,n.kt)(g,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,n.kt)(g,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,n.kt)(g,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,n.kt)(g,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var msgId = "msgId1";\nvar msgVer = 1;\nvar contentJson = {\n  "subject": "New features",\n  "text": "Chat and messaging features coming soon..."\n};\nvar messagingProxy = bridge.getMessagingServiceProxy();\n\nvar postResult = messagingProxy.sysUpdateMessage(msgId, msgVer, contentJson);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,n.kt)(g,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "messaging",\n    "operation": "SYS_UPDATE_MESSAGE",\n    "data": {\n        "msgId": "msgId1",\n        "msgVer": 1,\n        "contentJson": {\n            "subject": "New features",\n            "text": "Chat and messaging features coming soon..."\n        }\n    }\n}\n'))))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"msgId"),(0,n.kt)("td",{parentName:"tr",align:null},"The id of the message to update.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"msgVer"),(0,n.kt)("td",{parentName:"tr",align:null},"The version of the message. Use -1 to specify latest version.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"contentJson"),(0,n.kt)("td",{parentName:"tr",align:null},"The new content to write to the message.")))))}b.isMDXComponent=!0}}]);