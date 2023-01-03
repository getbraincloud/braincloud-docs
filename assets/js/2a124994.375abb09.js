"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[64594],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=l,b=d["".concat(p,".").concat(m)]||d[m]||u[m]||n;return a?r.createElement(b,o(o({ref:t},c),{},{components:a})):r.createElement(b,o({ref:t},c))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<n;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},45466:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var r=a(87462),l=(a(67294),a(3905));const n={},o="SysCopyGlobalFile",i={unversionedId:"api/capi/globalfile/syscopyglobalfile",id:"api/capi/globalfile/syscopyglobalfile",title:"SysCopyGlobalFile",description:"Overview",source:"@site/docs/api/2_capi/globalfile/syscopyglobalfile.md",sourceDirName:"api/2_capi/globalfile",slug:"/api/capi/globalfile/syscopyglobalfile",permalink:"/braincloud-apiref/api/capi/globalfile/syscopyglobalfile",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/globalfile/syscopyglobalfile.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"GetGlobalFileList",permalink:"/braincloud-apiref/api/capi/globalfile/getglobalfilelist"},next:{title:"SysCreateFolder",permalink:"/braincloud-apiref/api/capi/globalfile/syscreatefolder"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},d=c("PartialServop"),u=c("BrowserWindow"),m=c("Tabs"),b=c("TabItem"),f={toc:s};function g(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"syscopyglobalfile"},"SysCopyGlobalFile"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Makes a copy of the specified file."),(0,l.kt)(d,{service_name:"globalFileV3",operation_name:"SYS_COPY_GLOBAL_FILE",mdxType:"PartialServop"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(u,{mdxType:"BrowserWindow"},(0,l.kt)(m,{mdxType:"Tabs"},(0,l.kt)(b,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,l.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,l.kt)(b,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,l.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,l.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,l.kt)(b,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cfscript"},'var fileId = "hjvfsghguhuhrtghgh";\nvar version = 1;\nvar newTreeId = "guid";\nvar treeVersion = 1;\nvar newFileName = "gfileName";\nvar globalFileProxy = bridge.getGlobalFileV3ServiceProxy();\n\nvar postResult = globalFileProxy.sysCopyGlobalFile(fileId, version, newTreeId, treeVersion, newFileName);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,l.kt)(b,{value:"r",label:"Raw",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "globalFileV3",\n    "operation": "SYS_COPY_GLOBAL_FILE",\n    "data": {\n        "fileId": "8d2e30b0-6308-4aeb-ac6a-68e4a458365b",\n        "version": 1,\n        "newTreeId": "",\n        "treeVersion": 1,\n        "newFilename": "gfile",\n        "overwriteIfPresent": true\n      }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"JSON Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "fileDetails": {\n            "fileId": "8d2e30b0-6308-4aeb-ac6a-68e4a458365b",\n            "treeId": "",\n            "fileName": "testFile3.txt",\n            "contentMd5": "ruSnJhFo5VpcvrWdweyeaw==",\n            "fileSize": 19,\n            "dateUploaded": 1587692400000,\n            "etag": "aee4a7261168e55a5cbeb59dc1ec9e6b",\n            "version": 1,\n            "url": "https://api.braincloudservers.com/files/bc/g/21774/f/8d2e30b0-6308-4aeb-ac6a-68e4a458365b/V1/testFile3.txt"\n        }\n    }\n}\n'))),(0,l.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fileId"),(0,l.kt)("td",{parentName:"tr",align:null},"The file id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},"The current version of the file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"newTreeId"),(0,l.kt)("td",{parentName:"tr",align:null},"The location in the tree for the new file. Use emptystring for root.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"treeVersion"),(0,l.kt)("td",{parentName:"tr",align:null},"The current version of the tree")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"newFilename"),(0,l.kt)("td",{parentName:"tr",align:null},"The filename to use for the copied file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"overwriteIfPresent"),(0,l.kt)("td",{parentName:"tr",align:null},"Set to true to overwrite an existing file if present.")))))}g.isMDXComponent=!0}}]);