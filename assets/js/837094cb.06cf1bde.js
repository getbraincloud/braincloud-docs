"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[89519],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>b});var r=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,l=function(e,a){if(null==e)return{};var t,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),i=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=i(e.components);return r.createElement(c.Provider,{value:a},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,l=e.mdxType,n=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=i(t),m=l,b=u["".concat(c,".").concat(m)]||u[m]||s[m]||n;return t?r.createElement(b,o(o({ref:a},d),{},{components:t})):r.createElement(b,o({ref:a},d))}));function b(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var n=t.length,o=new Array(n);o[0]=m;var p={};for(var c in a)hasOwnProperty.call(a,c)&&(p[c]=a[c]);p.originalType=e,p[u]="string"==typeof e?e:l,o[1]=p;for(var i=2;i<n;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34697:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>n,metadata:()=>p,toc:()=>i});var r=t(87462),l=(t(67294),t(3905));const n={},o="CancelUpload",p={unversionedId:"api/capi/file/cancelupload",id:"api/capi/file/cancelupload",title:"CancelUpload",description:"Overview",source:"@site/docs/api/2_capi/file/cancelupload.md",sourceDirName:"api/2_capi/file",slug:"/api/capi/file/cancelupload",permalink:"/braincloud-apiref/api/capi/file/cancelupload",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/file/cancelupload.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"File",permalink:"/braincloud-apiref/api/capi/file/"},next:{title:"DeleteUserFile",permalink:"/braincloud-apiref/api/capi/file/deleteuserfile"}},c={},i=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],d=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",a)},u=d("BrowserWindow"),s=d("Tabs"),m=d("TabItem"),b={toc:i};function f(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cancelupload"},"CancelUpload"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Method cancels an upload. If a File Upload Callback has been registered with the BrainCloudClient class, the fileUploadFailed callback method will be called once the upload has been canceled."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(u,{mdxType:"BrowserWindow"},(0,l.kt)(s,{mdxType:"Tabs"},(0,l.kt)(m,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'string myUploadId = "1234-1234-1234-1234"; //From UploadFile return data\n\n_bc.FileService.CancelUpload(myUploadId);\n'))),(0,l.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'const char* myUploadId = "1234-1234-1234-1234"; //From UploadFile return data\n\n_bc->getFileService()->cancelUpload(myUploadId);\n'))),(0,l.kt)(m,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString * myUploadId = @"1234-1234-1234-1234"; //From UploadFile return data\n\n[[_bc fileService] cancelUpload:myUploadId];\n'))),(0,l.kt)(m,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"}," public void cancelUpload(String uploadId)\n"))),(0,l.kt)(m,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// N/A\n"))),(0,l.kt)(m,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))),(0,l.kt)(m,{value:"r",label:"Raw",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))))),(0,l.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uploadId"),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the upload")))))}f.isMDXComponent=!0}}]);