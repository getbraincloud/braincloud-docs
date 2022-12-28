"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[16550],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,b=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return a?r.createElement(b,o(o({ref:t},c),{},{components:a})):r.createElement(b,o({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},89696:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>v,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={},o="SysMoveGlobalFile",i={unversionedId:"api/capi/globalfile/sysmoveglobalfile",id:"api/capi/globalfile/sysmoveglobalfile",title:"SysMoveGlobalFile",description:"Overview",source:"@site/docs/api/2_capi/globalfile/sysmoveglobalfile.md",sourceDirName:"api/2_capi/globalfile",slug:"/api/capi/globalfile/sysmoveglobalfile",permalink:"/braincloud-apiref/api/capi/globalfile/sysmoveglobalfile",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/globalfile/sysmoveglobalfile.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysMoveFolder",permalink:"/braincloud-apiref/api/capi/globalfile/sysmovefolder"},next:{title:"SysMoveToGlobalFile",permalink:"/braincloud-apiref/api/capi/globalfile/sysmovetoglobalfile"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},d=c("PartialServop"),u=c("BrowserWindow"),m=c("Tabs"),b=c("TabItem"),f={toc:s};function v(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sysmoveglobalfile"},"SysMoveGlobalFile"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Move or rename the specified file."),(0,n.kt)(d,{service_name:"globalFileV3",operation_name:"SYS_MOVE_GLOBAL_FILE",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(u,{mdxType:"BrowserWindow"},(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(b,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(b,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(b,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var globalFileProxy = bridge.getGlobalFileV3ServiceProxy();\n\nvar fileId = "742f46ad-cab2-4f62-9ac4-c7c5b6f0e13b";\nvar version = 1;\nvar newTreeId = "2188e9cf-27fa-4a33-8d06-3306f9a74bf8";\nvar treeVersion = 2;\nvar newFilename = "testFile1.txt";\nvar overwriteIfPresent = true;\n\nvar postResult = globalFileProxy.sysMoveGlobalFile(\n    fileId, version, newTreeId, treeVersion, newFilename, overwriteIfPresent );\n\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,n.kt)(b,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "globalFileV3",\n    "operation": "SYS_MOVE_GLOBAL_FILE",\n    "data": {\n        "fileId": "742f46ad-cab2-4f62-9ac4-c7c5b6f0e13b",\n        "version": 1,\n        "newTreeId": "2188e9cf-27fa-4a33-8d06-3306f9a74bf8",\n        "treeVersion": 2,\n        "newFilename": "testFile1.txt",\n        "overwriteIfPresent": true,\n    }\n}\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "fileId": "b0cc8e28-ab5d-4a6c-94c3-476549128eaa",\n        "treeId": "2188e9cf-27fa-4a33-8d06-3306f9a74bf8",\n        "fileName": "testFile1.txt",\n        "contentMd5": "ruSnJhFo5VpcvrWdweyeaw==",\n        "fileSize": 19,\n        "dateUploaded": 1587694790000,\n        "etag": "aee4a7261168e55a5cbeb59dc1ec9e6b",\n        "version": 1,\n        "url": "https://api.braincloudservers.com/files/bc/g/21774/f/2188e9cf-27fa-4a33-8d06-3306f9a74bf8/b0cc8e28-ab5d-4a6c-94c3-476549128eaa/V1/testFile1.txt"\n    }\n}\n'))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fileId"),(0,n.kt)("td",{parentName:"tr",align:null},"File ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"version"),(0,n.kt)("td",{parentName:"tr",align:null},"File version")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"newTreeId"),(0,n.kt)("td",{parentName:"tr",align:null},"Id of the new location for the file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"treeVersion"),(0,n.kt)("td",{parentName:"tr",align:null},"Current tree version (used to prevent concurrency errors)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"newFilename"),(0,n.kt)("td",{parentName:"tr",align:null},"New name for the file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"overwriteIfPresent"),(0,n.kt)("td",{parentName:"tr",align:null},"If a file of that name already exists at that location, overwrite it?")))))}v.isMDXComponent=!0}}]);