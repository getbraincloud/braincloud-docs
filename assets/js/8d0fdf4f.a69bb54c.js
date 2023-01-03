"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[99998],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=l,b=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return a?r.createElement(b,n(n({ref:t},d),{},{components:a})):r.createElement(b,n({ref:t},d))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,n=new Array(o);n[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:l,n[1]=i;for(var s=2;s<o;s++)n[s]=a[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},64722:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(87462),l=(a(67294),a(3905));const o={},n="SysLookupFolder",i={unversionedId:"api/capi/globalfile/syslookupfolder",id:"api/capi/globalfile/syslookupfolder",title:"SysLookupFolder",description:"Overview",source:"@site/docs/api/2_capi/globalfile/syslookupfolder.md",sourceDirName:"api/2_capi/globalfile",slug:"/api/capi/globalfile/syslookupfolder",permalink:"/braincloud-apiref/api/capi/globalfile/syslookupfolder",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/globalfile/syslookupfolder.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysGetGlobalFileList",permalink:"/braincloud-apiref/api/capi/globalfile/sysgetglobalfilelist"},next:{title:"SysMoveFolder",permalink:"/braincloud-apiref/api/capi/globalfile/sysmovefolder"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},u=d("PartialServop"),c=d("BrowserWindow"),m=d("Tabs"),b=d("TabItem"),f={toc:s};function y(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"syslookupfolder"},"SysLookupFolder"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Returns the treeId for the specified folder."),(0,l.kt)(u,{service_name:"globalFileV3",operation_name:"SYS_LOOKUP_FOLDER",mdxType:"PartialServop"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(c,{mdxType:"BrowserWindow"},(0,l.kt)(m,{mdxType:"Tabs"},(0,l.kt)(b,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,l.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,l.kt)(b,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,l.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,l.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,l.kt)(b,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cfscript"},'var globalFileProxy = bridge.getGlobalFileV3ServiceProxy();\n\nvar fullFolderPath = "audio/xxx/tempdir";\n\nvar postResult = globalFileProxy.sysLookupFolder(fullFolderPath);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,l.kt)(b,{value:"r",label:"Raw",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "globalFileV3",\n    "operation": "SYS_LOOKUP_FOLDER",\n    "data": {\n        "fullFolderPath": "audio/xxx/tempdir"\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"JSON Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "treeId": "56b1c593-92d2-4e49-a997-0e493111d7b2",\n        "folderPath": "audio/xxx/tempdir",\n        "treeVersion": 3\n    }\n}\n'))),(0,l.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fullFolderPath"),(0,l.kt)("td",{parentName:"tr",align:null},"Fully folder path to lookup")))))}y.isMDXComponent=!0}}]);