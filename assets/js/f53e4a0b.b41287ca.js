"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[88716],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},31795:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>v,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},o="SysGetChannelInfo",s={unversionedId:"api/s2s/chat/sysgetchannelinfo",id:"api/s2s/chat/sysgetchannelinfo",title:"SysGetChannelInfo",description:"Overview",source:"@site/docs/api/4_s2s/chat/sysgetchannelinfo.md",sourceDirName:"api/4_s2s/chat",slug:"/api/s2s/chat/sysgetchannelinfo",permalink:"/braincloud-apiref/api/s2s/chat/sysgetchannelinfo",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/4_s2s/chat/sysgetchannelinfo.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1673042992,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysDeleteChatMessage",permalink:"/braincloud-apiref/api/s2s/chat/sysdeletechatmessage"},next:{title:"SysGetChatMessage",permalink:"/braincloud-apiref/api/s2s/chat/sysgetchatmessage"}},i={},p=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=c("PartialServop"),u=c("BrowserWindow"),m=c("Tabs"),h=c("TabItem"),b={toc:p};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sysgetchannelinfo"},"SysGetChannelInfo"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Returns ",(0,r.kt)("em",{parentName:"p"},"description info")," and ",(0,r.kt)("em",{parentName:"p"},"activity stats")," for the specified channel. Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"numMembers"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"numListeners")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"listeners")," are only returned for non-global groups. "),(0,r.kt)(d,{service_name:"chat",operation_name:"SYS_GET_CHANNEL_INFO",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(u,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(h,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(h,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(h,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(h,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(h,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var channelId = "55555:gl:bcDev";\nvar chatProxy = bridge.getChatServiceProxy();\n\nvar postResult = chatProxy.sysGetChannelInfo(channelId);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(h,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "chat",\n    "operation": "SYS_GET_CHANNEL_INFO",\n    "data": {\n        "channelId": "55555:gl:bcDev"\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "id": "55555:gl:brainCloudDev",\n        "type": "gl",\n        "code": "brainCloudDev",\n        "name": "brainCloud dev",\n        "desc": "For discussing brainCloud development status",\n        "stats": {\n            "messageCount": 25\n        }\n    }\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Common Error Code"),(0,r.kt)("h3",{id:"status-codes"},"Status Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40346"),(0,r.kt)("td",{parentName:"tr",align:null},"CHAT_INVALID_CHANNEL_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"The channel id provided is invalid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40601"),(0,r.kt)("td",{parentName:"tr",align:null},"RTT_NOT_ENABLED"),(0,r.kt)("td",{parentName:"tr",align:null},"RTT must be enabled for this feature")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40616"),(0,r.kt)("td",{parentName:"tr",align:null},"CLOUD_CODE_ONLY"),(0,r.kt)("td",{parentName:"tr",align:null},"Method only available via cloud code"))))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channelId"),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the channel.")))))}v.isMDXComponent=!0}}]);