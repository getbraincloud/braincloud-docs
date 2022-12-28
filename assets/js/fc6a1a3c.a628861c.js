"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[17925],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=i(a),u=r,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||s;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var i=2;i<s;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},94837:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const s={},l="SysGetMessagesPageOffset",o={unversionedId:"api/capi/messaging/sysgetmessagespageoffset",id:"api/capi/messaging/sysgetmessagespageoffset",title:"SysGetMessagesPageOffset",description:"Overview",source:"@site/docs/api/2_capi/messaging/sysgetmessagespageoffset.md",sourceDirName:"api/2_capi/messaging",slug:"/api/capi/messaging/sysgetmessagespageoffset",permalink:"/braincloud-apiref/api/capi/messaging/sysgetmessagespageoffset",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/messaging/sysgetmessagespageoffset.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysGetMessagesPage",permalink:"/braincloud-apiref/api/capi/messaging/sysgetmessagespage"},next:{title:"SysSendMessage",permalink:"/braincloud-apiref/api/capi/messaging/syssendmessage"}},p={},i=[{value:"Overview",id:"overview",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=c("PartialServop"),d=c("BrowserWindow"),u=c("Tabs"),g=c("TabItem"),f={toc:i};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sysgetmessagespageoffset"},"SysGetMessagesPageOffset"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Returns the next/prev page of messages."),(0,r.kt)("h3",{id:"status-codes"},"Status Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40601"),(0,r.kt)("td",{parentName:"tr",align:null},"FEATURE_NOT_ENABLED"),(0,r.kt)("td",{parentName:"tr",align:null},"Messaging feature is not enabled for app.")))),(0,r.kt)(m,{service_name:"messaging",operation_name:"SYS_GET_MESSAGES_PAGE_OFFSET",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(d,{mdxType:"BrowserWindow"},(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(g,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(g,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(g,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(g,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(g,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(g,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";\nvar pageOffset = 1;\nvar messagingProxy = bridge.getMessagingServiceProxy();\n\nvar postResult = messagingProxy.sysGetMessagesPageOffset(context, pageOffset);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(g,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "messaging",\n    "operation": "SYS_GET_MESSAGES_PAGE_OFFSET",\n    "data": {\n        "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0",\n        "pageOffset": 1\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "context": "eyJzZWFyY2hDcml0ZXJpYSI6e30sInNvcnRDcml0ZXJpYSI6eyJtYkNyIjoxLCJtYlVwIjotMX0sInBhZ2luYXRpb24iOnsicm93c1BlclBhZ2UiOjEwLCJwYWdlTnVtYmVyIjoxLCJkb0NvdW50IjpmYWxzZSwic2tpcFJlY291bnQiOmZhbHNlfSwib3B0aW9ucyI6bnVsbCwicmVzdWx0Q291bnQiOjF9",\n    "results": {\n      "count": 20,\n      "page": 2,\n      "items": [\n        {\n          "mbVer": 1,\n          "mbUp": 1623349641504,\n          "read": false,\n          "msgCr": 1623349641498,\n          "msgVer": 1,\n          "mbCr": 1623349641504,\n          "msgId": "f6631ba6-c11e-4fea-bd65-181b16ec9335",\n          "msgUp": 1623349641498,\n          "message": {\n            "from": {\n              "id": "a687ba2f-cc66-463a-8b3c-db900eba7e94",\n              "name": "Rookie"\n            },\n            "sentAt": 1623349641498,\n            "to": [\n              "493dd9ad-5196-4494-aab1-02fbffa4c7af"\n            ],\n            "content": {\n              "subject": "new",\n              "text": "test"\n            }\n          },\n          "msgbox": "inbox"\n        }\n      ],\n      "moreAfter": false,\n      "moreBefore": false\n    }\n  },\n  "status": 200\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"context"),(0,r.kt)("td",{parentName:"tr",align:null},"The search and paging criteria")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageOffset"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of pages to go forward or back")))))}b.isMDXComponent=!0}}]);