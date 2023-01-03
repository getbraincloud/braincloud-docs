"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[69450],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=l.createContext({}),p=function(e){var t=l.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return l.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(a),m=r,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||n;return a?l.createElement(f,i(i({ref:t},d),{},{components:a})):l.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<n;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},26462:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var l=a(87462),r=(a(67294),a(3905));const n={},i="UploadFile",o={unversionedId:"api/capi/file/uploadfile",id:"api/capi/file/uploadfile",title:"UploadFile",description:"Overview",source:"@site/docs/api/2_capi/file/uploadfile.md",sourceDirName:"api/2_capi/file",slug:"/api/capi/file/uploadfile",permalink:"/braincloud-apiref/api/capi/file/uploadfile",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/file/uploadfile.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"UploadFile - JavaScript",permalink:"/braincloud-apiref/api/capi/file/uploadfile,javascript"},next:{title:"UploadFileFromMemory",permalink:"/braincloud-apiref/api/capi/file/uploadfilefrommemory"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},s=d("PartialServop"),u=d("BrowserWindow"),m=d("Tabs"),f=d("TabItem"),b={toc:p};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"uploadfile"},"UploadFile"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Prepares a user file upload. On success the file will begin uploading to the brainCloud server."),(0,r.kt)("p",null,"To be informed of success/failure of the upload register the File Upload Callbacks with the BrainCloudClient class."),(0,r.kt)("h3",{id:"status-codes"},"Status Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40429"),(0,r.kt)("td",{parentName:"tr",align:null},"UPLOAD_FILE_TOO_LARGE"),(0,r.kt)("td",{parentName:"tr",align:null},"File maximum file size exceeded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40430"),(0,r.kt)("td",{parentName:"tr",align:null},"FILE_ALREADY_EXISTS"),(0,r.kt)("td",{parentName:"tr",align:null},"File exists, replaceIfExists not set")))),(0,r.kt)(s,{service_name:"file",operation_name:"PREPARE_USER_UPLOAD",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(u,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(f,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'_bc.RegisterFileUploadCallbacks(FileCallbackSuccess, FileCallbackFail);\n\nstring cloudPath = "test/files/"\nstring cloudName = "testCloudFile.dat"\nbool overwrite = true;\nbool share = true;\nstring localPath = "path/to/my/file.dat";\n\n_bc.FileService.UploadFile(\n    cloudPath,\n    cloudName,\n    share,\n    overwrite,\n    localPath,\n    ApiSuccess, ApiError);\n'))),(0,r.kt)(f,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'_bc->registerFileUploadCallback(this);\n\nconst char* cloudPath = "test/files/"\nconst char* cloudName = "testCloudFile.dat"\nbool overwrite = true;\nbool share = true;\nconst char* localPath = "path/to/my/file.dat";\n\n_bc->getFileService()->uploadFile(\n    cloudPath,\n    cloudName,\n    share,\n    overwrite,\n    localPath,\n    this);\n'))),(0,r.kt)(f,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'BCFileUploadCompletedCompletionBlock fileSuccessBlock;  // define callback\nBCFileUploadFailedCompletionBlock fileFailedBlock;      // define callback\n\n[_bc registerFileUploadCallback: fileSuccessBlock failedBlock: fileFailedBlock];\n\nNSString * cloudPath = @"test/files/";\nNSString * cloudName = @"testCloudFile.dat";\nBOOL overwrite = true;\nBOOL share = true;\nNSString * localPath = @"path/to/my/file.dat";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc fileService]\n            uploadFile:cloudPath\n         cloudFilename:cloudFilename\n             shareable:overwrite\n       replaceIfExists:share\n             localPath:localPath\n       completionBlock:successBlock\n  errorCompletionBlock:failureBlock\n              cbObject:nil];\n'))),(0,r.kt)(f,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public Boolean uploadFile(String cloudPath,\n                   String cloudFilename,\n                   boolean shareable,\n                   boolean replaceIfExists,\n                   String localPath,\n                   IServerCallback callback)\n"))),(0,r.kt)(f,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// See UploadFile - JavaScript\n"))),(0,r.kt)(f,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},"// NA\n"))),(0,r.kt)(f,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},"// NA\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "fileDetails": {\n            "updatedAt": 1452616408147,\n            "fileSize": 100,\n            "fileType": "User",\n            "expiresAt": 1452702808146,\n            "shareable": true,\n            "uploadId": "cf9a075c-587e-4bd1-af0b-eab1a79b958f",\n            "createdAt": 1452616408147,\n            "profileId": "bf8a1433-62d2-448e-b396-f3dbffff44",\n            "gameId": "99999",\n            "path": "dir1/dir2",\n            "filename": "filename",\n            "replaceIfExists": true,\n            "cloudPath": "bc/g/99999/u/bf8a1433-62d2-448e-b396-f3dbffff44/f/dir1/dir2/filename"\n        }\n    }\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cloudPath"),(0,r.kt)("td",{parentName:"tr",align:null},"The desired cloud path of the file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cloudFilename"),(0,r.kt)("td",{parentName:"tr",align:null},"The desired cloud fileName of the file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"shareable"),(0,r.kt)("td",{parentName:"tr",align:null},"True if the file is shareable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replaceIfExists"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to replace file if it exists")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"localPath"),(0,r.kt)("td",{parentName:"tr",align:null},"The path and fileName of the local file")))))}k.isMDXComponent=!0}}]);