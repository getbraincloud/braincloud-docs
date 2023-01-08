"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[99558],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,b=u["".concat(c,".").concat(m)]||u[m]||p[m]||l;return a?r.createElement(b,i(i({ref:t},d),{},{components:a})):r.createElement(b,i({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},99380:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={},i="GetCDNUrl",o={unversionedId:"api/capi/file/getcdnurl",id:"api/capi/file/getcdnurl",title:"GetCDNUrl",description:"Overview",source:"@site/docs/api/2_capi/file/getcdnurl.md",sourceDirName:"api/2_capi/file",slug:"/api/capi/file/getcdnurl",permalink:"/braincloud-apiref/api/capi/file/getcdnurl",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/file/getcdnurl.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1673042992,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{},sidebar:"apiSidebar",previous:{title:"DeleteUserFiles",permalink:"/braincloud-apiref/api/capi/file/deleteuserfiles"},next:{title:"GetUploadBytesTransferred",permalink:"/braincloud-apiref/api/capi/file/getuploadbytestransferred"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Method Parameters",id:"method-parameters",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=d("PartialServop"),p=d("BrowserWindow"),m=d("Tabs"),b=d("TabItem"),f={toc:s};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getcdnurl"},"GetCDNUrl"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"This method was added to support clients (like very old versions of Unity - i.e. circa 2016) that cannot handle HTTP Redirects. This method allows clients to ",(0,n.kt)("em",null,"pre-resolve")," the CDN endpoint for the file to download.",(0,n.kt)("br",null)),(0,n.kt)("br",null),"This call is not required in the great majority of cases. Just use the regular file download URL and the platform will automatically re-direct the client to the appropriate CDN URL."),(0,n.kt)("p",null,"Returns the CDN url for a file object."),(0,n.kt)(u,{service_name:"file",operation_name:"GET_CDN_URL",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(p,{mdxType:"BrowserWindow"},(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(b,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'string cloudPath = "dir1/dir2";\nstring cloudFilename = "filename";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.FileService.GetCDNUrl(cloudPath, cloudFilename, successCallback, failureCallback);\n'))),(0,n.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *cloudPath = "dir1/dir2";\nconst char *cloudFilename = "filename";\n_bc->getFileService()->getCDNUrl(cloudPath, cloudFilename, this);\n'))),(0,n.kt)(b,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *cloudPath = @"dir1/dir2";\nNSString *cloudFilename = @"filename";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc fileService] getCDNUrl:cloudPath\n              cloudFilename:cloudFilename\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,n.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String cloudPath = "dir1/dir2";\nString cloudFilename = "filename";\nthis; // implements IServerCallback\n\n_bc.getFileService().getCDNUrl(cloudPath, cloudFilename, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,n.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var cloudPath = "dir1/dir2";\nvar cloudFilename = "filename";\n\n_bc.file.getCDNUrl(cloudPath, cloudFilename, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)(b,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var cloudPath = "dir1/dir2";\nvar cloudFilename = "filename";\nvar fileProxy = bridge.getFileServiceProxy();\n\nvar postResult = fileProxy.getCDNUrl(cloudPath, cloudFilename);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,n.kt)(b,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "file",\n    "operation": "GET_CDN_URL",\n    "data": {\n        "cloudPath": "dir1/dir2",\n        "cloudFilename": "filename"\n    }\n}\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "appServerUrl": "https://api.braincloudservers.com/...f434b1db538b/f/uploadsimplefile.txt",\n        "cdnUrl": "https://d2b6zwnvr1nyug.cloudfront.net/bc/g/20001/u/107b3aa9-0d9f-4e90-af..."\n    }\n}\n'))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Common Error Code"),(0,n.kt)("h3",{id:"status-codes"},"Status Codes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Code"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"40431"),(0,n.kt)("td",{parentName:"tr",align:null},"CLOUD_STORAGE_SERVICE_ERROR"),(0,n.kt)("td",{parentName:"tr",align:null},"Cloud storage service error")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"40432"),(0,n.kt)("td",{parentName:"tr",align:null},"FILE_DOES_NOT_EXIST"),(0,n.kt)("td",{parentName:"tr",align:null},"File does not exist"))))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cloudPath"),(0,n.kt)("td",{parentName:"tr",align:null},"File path")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cloudFilename"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of file")))),(0,n.kt)("h1",{id:""}))}g.isMDXComponent=!0}}]);