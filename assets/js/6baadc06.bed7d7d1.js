"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[95944],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=l.createContext({}),p=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,b=c["".concat(s,".").concat(m)]||c[m]||u[m]||n;return a?l.createElement(b,o(o({ref:t},d),{},{components:a})):l.createElement(b,o({ref:t},d))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<n;p++)o[p]=a[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},61185:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>v,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var l=a(87462),r=(a(67294),a(3905));const n={},o="SysDeleteGlobalFiles",i={unversionedId:"api/capi/globalfile/sysdeleteglobalfiles",id:"api/capi/globalfile/sysdeleteglobalfiles",title:"SysDeleteGlobalFiles",description:"Overview",source:"@site/docs/api/2_capi/globalfile/sysdeleteglobalfiles.md",sourceDirName:"api/2_capi/globalfile",slug:"/api/capi/globalfile/sysdeleteglobalfiles",permalink:"/braincloud-apiref/api/capi/globalfile/sysdeleteglobalfiles",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/globalfile/sysdeleteglobalfiles.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysDeleteGlobalFile",permalink:"/braincloud-apiref/api/capi/globalfile/sysdeleteglobalfile"},next:{title:"SysGetFileInfo",permalink:"/braincloud-apiref/api/capi/globalfile/sysgetfileinfo"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=d("PartialServop"),u=d("BrowserWindow"),m=d("Tabs"),b=d("TabItem"),f={toc:p};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sysdeleteglobalfiles"},"SysDeleteGlobalFiles"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Delete all the files in the specified directory. Returns a list of the files that were deleted."),(0,r.kt)(c,{service_name:"globalFileV3",operation_name:"SYS_DELETE_GLOBAL_FILES",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(u,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(b,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(b,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(b,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var globalFileProxy = bridge.getGlobalFileV3ServiceProxy();\n\nvar treeId = "";\nvar folderPath = "/";\nvar treeVersion = 2;\nvar recurse = false;\n\nvar postResult = globalFileProxy.sysDeleteGlobalFiles(\n    fileId, folderPath, treeVersion, recurse );\n\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(b,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "globalFileV3",\n    "operation": "SYS_DELETE_GLOBAL_FILES",\n    "data": {\n        "treeId": "",\n        "cloudPath": "/",\n        "treeVersion": 2,\n        "recurse": false\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "deletedFiles": [\n            {\n                "treeId": "",\n                "fileName": "testFile3.txt",\n                "version": 1,\n                "fileId": "34abacc5-c048-4bcc-a3ce-8eb751a718a6"\n            },\n            {\n                "treeId": "",\n                "fileName": "testFile2.txt",\n                "version": 1,\n                "fileId": "d77122cc-f87b-4f98-801f-e49568d7061f"\n            },\n            {\n                "treeId": "",\n                "fileName": "testFile1.txt",\n                "version": 1,\n                "fileId": "ed126aaa-27de-48c7-b650-18e7af52ccb9"\n            }\n        ]\n    }\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"treeId"),(0,r.kt)("td",{parentName:"tr",align:null},"Tree location to delete all files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"folderPath"),(0,r.kt)("td",{parentName:"tr",align:null},"Path of that tree location (as an intention check)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"treeVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"Current tree version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"recurse"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete files in subdirectories as well?")))))}v.isMDXComponent=!0}}]);