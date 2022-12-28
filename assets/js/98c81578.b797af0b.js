"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[13606],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=p(a),m=r,b=s["".concat(i,".").concat(m)]||s[m]||u[m]||l;return a?n.createElement(b,o(o({ref:t},c),{},{components:a})):n.createElement(b,o({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[s]="string"==typeof e?e:r,o[1]=d;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},12408:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},o="SysRenameFolder",d={unversionedId:"api/capi/globalfile/sysrenamefolder",id:"api/capi/globalfile/sysrenamefolder",title:"SysRenameFolder",description:"Overview",source:"@site/docs/api/2_capi/globalfile/sysrenamefolder.md",sourceDirName:"api/2_capi/globalfile",slug:"/api/capi/globalfile/sysrenamefolder",permalink:"/braincloud-apiref/api/capi/globalfile/sysrenamefolder",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/globalfile/sysrenamefolder.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysMoveToGlobalFile",permalink:"/braincloud-apiref/api/capi/globalfile/sysmovetoglobalfile"},next:{title:"Global Statistics",permalink:"/braincloud-apiref/api/capi/globalstats/"}},i={},p=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},s=c("PartialServop"),u=c("BrowserWindow"),m=c("Tabs"),b=c("TabItem"),f={toc:p};function y(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sysrenamefolder"},"SysRenameFolder"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Rename the specified folder."),(0,r.kt)(s,{service_name:"globalFileV3",operation_name:"SYS_RENAME_FOLDER",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(u,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(b,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(b,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(b,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var globalFileProxy = bridge.getGlobalFileV3ServiceProxy();\n\nvar treeId = "56b1c593-92d2-4e49-a997-0e493111d7b2";\nvar treeVersion = 5;\nvar updatedName = "tempdir2";\n\nvar postResult = globalFileProxy.sysRenameFolder(\n    treeId, treeVersion, updatedName );\n\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(b,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "globalFileV3",\n    "operation": "SYS_RENAME_FOLDER",\n    "data": {\n        "treeId": "56b1c593-92d2-4e49-a997-0e493111d7b2",\n        "treeVersion": 5,\n        "updatedName": "tempdir2"\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "globalTree": {\n            "tree": [\n                {\n                    "treeId": "2188e9cf-27fa-4a33-8d06-3306f9a74bf8",\n                    "name": "art",\n                    "type": "Folder",\n                    "desc": "Folder for art assets",\n                    "children": null\n                },\n                {\n                    "treeId": "146cce63-da7a-40c7-bd57-5b5f81607523",\n                    "name": "audio",\n                    "type": "Folder",\n                    "desc": "For audio files",\n                    "children": [\n                        {\n                            "treeId": "1330b5c1-5af4-46d9-820e-c0de1c109366",\n                            "name": "xxx",\n                            "type": "Folder",\n                            "desc": null,\n                            "children": null\n                        }\n                    ]\n                },\n                {\n                    "treeId": "4a98c288-e1ab-4cb8-bdf4-66f7d4ea0739",\n                    "name": "xaudio",\n                    "type": "Folder",\n                    "desc": "",\n                    "children": [\n                        {\n                            "treeId": "02888d60-3caa-4b9a-b9b0-9d8eac5d410d",\n                            "name": "yyy",\n                            "type": "Folder",\n                            "desc": "",\n                            "children": [\n                                {\n                                    "treeId": "56b1c593-92d2-4e49-a997-0e493111d7b2",\n                                    "name": "tempdir2",\n                                    "type": "Folder",\n                                    "desc": "Seeing how multilevel works",\n                                    "children": null\n                                }\n                            ]\n                        }\n                    ]\n                }\n            ],\n            "treeVersion": 6\n        }\n    }\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"treeId"),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the folder to rename")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"treeVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"The current tree version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"updatedName"),(0,r.kt)("td",{parentName:"tr",align:null},"The updated name of the folder")))))}y.isMDXComponent=!0}}]);