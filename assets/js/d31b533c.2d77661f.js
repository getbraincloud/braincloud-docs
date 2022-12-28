"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[54489],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),l=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},o="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),o=l(r),m=a,f=o["".concat(s,".").concat(m)]||o[m]||d[m]||n;return r?i.createElement(f,c(c({ref:t},u),{},{components:r})):i.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,c=new Array(n);c[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[o]="string"==typeof e?e:a,c[1]=p;for(var l=2;l<n;l++)c[l]=r[l];return i.createElement.apply(null,c)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69185:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>n,metadata:()=>p,toc:()=>l});var i=r(87462),a=(r(67294),r(3905));const n={},c="Script",p={unversionedId:"api/capi/script/index",id:"api/capi/script/index",title:"Script",description:"Overview",source:"@site/docs/api/2_capi/script/index.md",sourceDirName:"api/2_capi/script",slug:"/api/capi/script/",permalink:"/braincloud-apiref/api/capi/script/",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/script/index.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysMoveToLegacyGlobalFile",permalink:"/braincloud-apiref/api/capi/s3handling/sysmovetolegacyglobalfile"},next:{title:"CancelScheduledScript",permalink:"/braincloud-apiref/api/capi/script/cancelscheduledscript"}},s={},l=[{value:"Overview",id:"overview",level:2},{value:"API Summary",id:"api-summary",level:3},{value:"Script",id:"script-1",level:3}],u=(o="DocCardList",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var o;const d={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"script"},"Script"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The ",(0,a.kt)("code",null,(0,a.kt)("a",{parentName:"p",href:"/api/capi/script/runscript"},"RunScript"))," method is used to invoke cloud code scripts from the client."),(0,a.kt)("p",null,"Cloud Code scripts can be created, edited, and tested from the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.braincloudservers.com/admin/dashboard#/development/serverscripts-edit"},"Edit Scripts page"),"\nof the brainCloud portal."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Scripts must have the \u201cClient Callable\u201d flag set to True to be callable from client apps.")),(0,a.kt)("h3",{id:"api-summary"},"API Summary"),(0,a.kt)("h3",{id:"script-1"},"Script"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/capi/script/cancelscheduledscript"},"CancelScheduledScript")," - Cancels a previously scheduled script."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/capi/script/getrunningorqueuedcloudscripts"},"GetRunningOrQueuedCloudScripts")," - Retrieves scripts are running up and queued by server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/capi/script/getscheduledcloudscripts"},"GetScheduledCloudScripts")," - Retrieves scripts scheduled to run up to and including the specified start time (UTC in ms)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/capi/script/runparentscript"},"RunParentScript")," - Runs a script against the level of parent from."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/capi/script/runpeerscript"},"RunPeerScript")," - Runs a script against the level of peer from."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/capi/script/runpeerscriptasync"},"RunPeerScriptAsync")," - Runs a script against the level of peer from with async way."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/capi/script/runscript"},"RunScript")," - Executes a script on the server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/capi/script/schedulerunscriptminutes"},"ScheduleRunScriptMinutes")," - Schedules a script to run on the server at a later time in minutes from now."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/capi/script/schedulerunscriptmillisutc"},"ScheduleRunScriptMillisUTC")," - Schedules a script to run on the server at a later time in UTC format."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/capi/script/schedulerunscriptutc"},"ScheduleRunScriptUTC")," - Schedules a script to run on the server at a later time in UTC format."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/capi/script/schedulerunscriptutcv2"},"ScheduleRunScriptUTCv2")," - Schedules a script to run on the server at a later time in UTC format."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/capi/script/syscancelscheduledscriptifexists"},"SysCancelScheduledScriptIfExists")," - Cancels a previously scheduled script, if it exists and is still in Scheduled state."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/capi/script/syscanceluserscriptbatchifexists"},"SysCancelUserScriptBatchIfExists")," - Cancels a user script batch, if it exists and is in Scheduled, Queued or Running state.")),(0,a.kt)(u,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);