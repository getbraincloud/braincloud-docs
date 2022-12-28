"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[10951],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=l,f=u["".concat(s,".").concat(d)]||u[d]||b[d]||n;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,o=new Array(n);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13594:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=r(87462),l=(r(67294),r(3905));const n={},o="GetGlobalFileList",i={unversionedId:"api/capi/globalfile/getglobalfilelist",id:"api/capi/globalfile/getglobalfilelist",title:"GetGlobalFileList",description:"Overview",source:"@site/docs/api/2_capi/globalfile/getglobalfilelist.md",sourceDirName:"api/2_capi/globalfile",slug:"/api/capi/globalfile/getglobalfilelist",permalink:"/braincloud-apiref/api/capi/globalfile/getglobalfilelist",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/globalfile/getglobalfilelist.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"GetGlobalCDNUrl",permalink:"/braincloud-apiref/api/capi/globalfile/getglobalcdnurl"},next:{title:"SysCopyGlobalFile",permalink:"/braincloud-apiref/api/capi/globalfile/syscopyglobalfile"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},u=p("PartialServop"),b=p("BrowserWindow"),d=p("Tabs"),f=p("TabItem"),m={toc:c};function g(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getglobalfilelist"},"GetGlobalFileList"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Retrieves the list of global files stored at the specified directory location."),(0,l.kt)(u,{service_name:"globalFileV3",operation_name:"GET_GLOBAL_FILE_LIST",mdxType:"PartialServop"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(b,{mdxType:"BrowserWindow"},(0,l.kt)(d,{mdxType:"Tabs"},(0,l.kt)(f,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'string folderPath = "";\nbool recurse = true;\n\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.GlobalFileService.GetGlobalFileList(folderPath, recurse, successCallback, failureCallback);\n'))),(0,l.kt)(f,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *folderPath = "";\nbool resurse = true;\n_bc->getGlobalFileService()->getGlobalFileList(folderPath, resurse, this);\n'))),(0,l.kt)(f,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *folderPath = @"";\nbool resurse = true;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc globalFileService] getGlobalFileList:folderPath\n                    resurse:recurse\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,l.kt)(f,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'String folderPath = "";\nboolean recurse = true;\nthis; // implements IServerCallback\n\n_bc.getGlobalFileService().getGlobalFileList(folderPath, recurse, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,l.kt)(f,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'var folderPath = "";\nvar recurse = true;\n\n_bc.globalFile.getGlobalFileList(folderPath, recurse, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,l.kt)(f,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cfscript"},'var folderPath = "";\nvar recurse = true;\n\nvar globalFileProxy = bridge.getGlobalFileV3ServiceProxy();\n\nvar postResult = globalFileProxy.getGlobalFileList(folderPath, recurse);\n\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,l.kt)(f,{value:"r",label:"Raw",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "globalFileV3",\n    "operation": "GET_GLOBAL_FILE_LIST",\n    "data": {\n        "folderPath": "",\n        "recurse": true,        \n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"JSON Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "treeVersion": 2,\n        "fileList": {\n            "treeId": "",\n            "folderPath": "/",\n            "name": "",\n            "folders": {\n                "art": {\n                    "treeId": "2188e9cf-27fa-4a33-8d06-3306f9a74bf8",\n                    "folderPath": "/art/",\n                    "name": "art",\n                    "folders": {},\n                    "files": {\n                        "image.png": {\n                            "fileId": "bf9de8db-8cd8-44ac-b43c-b91ecd312e13",\n                            "fileName": "image.png",\n                            "fileSize": 5678,\n                            "version": 1,\n                            "url": "https://api.braincloudservers.com/files/bc/g/21774/f/2188e9cf-27fa-4a33-8d06-3306f9a74bf8/bf9de8db-8cd8-44ac-b43c-b91ecd312e13/V1/image.png"\n                        }\n                    }\n                }\n            },\n            "files": {\n                "testFile2.txt": {\n                    "fileId": "6f6420b3-e641-43b7-8f32-20c16af208e0",\n                    "fileName": "testFile2.txt",\n                    "fileSize": 2256,\n                    "version": 1,\n                    "url": "https://api.braincloudservers.com/files/bc/g/21774/f/6f6420b3-e641-43b7-8f32-20c16af208e0/V1/testFile2.txt"\n                },\n                "testFile1.txt": {\n                    "fileId": "b2175eae-5b7a-4813-93d3-527600db7d73",\n                    "fileName": "testFile1.txt",\n                    "fileSize": 1214,\n                    "version": 1,\n                    "url": "https://api.braincloudservers.com/files/bc/g/21774/f/b2175eae-5b7a-4813-93d3-527600db7d73/V1/testFile1.txt"\n\n                }\n            }\n        }\n    }\n}\n'))),(0,l.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"folderPath"),(0,l.kt)("td",{parentName:"tr",align:null},'Directory location of the files. Use empty string or "/" for root.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"recurse"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to recurse into subdirectories")))))}g.isMDXComponent=!0}}]);