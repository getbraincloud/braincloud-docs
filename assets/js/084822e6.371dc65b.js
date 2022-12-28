"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[13379],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=i(a),g=n,m=c["".concat(s,".").concat(g)]||c[g]||u[g]||l;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:n,o[1]=p;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},31605:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const l={},o="SysUpdateLegacyFlaggedUser",p={unversionedId:"api/capi/globalapp/sysupdatelegacyflaggeduser",id:"api/capi/globalapp/sysupdatelegacyflaggeduser",title:"SysUpdateLegacyFlaggedUser",description:"Overview",source:"@site/docs/api/2_capi/globalapp/sysupdatelegacyflaggeduser.md",sourceDirName:"api/2_capi/globalapp",slug:"/api/capi/globalapp/sysupdatelegacyflaggeduser",permalink:"/braincloud-apiref/api/capi/globalapp/sysupdatelegacyflaggeduser",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/globalapp/sysupdatelegacyflaggeduser.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysRemoveFromLegacyFlaggedUsers",permalink:"/braincloud-apiref/api/capi/globalapp/sysremovefromlegacyflaggedusers"},next:{title:"SysUpdatePropertyJson",permalink:"/braincloud-apiref/api/capi/globalapp/sysupdatepropertyjson"}},s={},i=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},c=d("PartialServop"),u=d("BrowserWindow"),g=d("Tabs"),m=d("TabItem"),y={toc:i};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sysupdatelegacyflaggeduser"},"SysUpdateLegacyFlaggedUser"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Updates a user's entry in the legacy list of flagged users."),(0,n.kt)(c,{service_name:"globalApp",operation_name:"SYS_UPDATE_LEGACY_FLAGGED_USER",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(u,{mdxType:"BrowserWindow"},(0,n.kt)(g,{mdxType:"Tabs"},(0,n.kt)(m,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(m,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(m,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(m,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(m,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var profileId = "the-profile-id";\nvar isActive = true;\nvar notes = "This is a note about the player.";\nvar globalAppProxy = bridge.getGlobalAppServiceProxy();\n\nvar postResult = globalAppProxy.sysUpdateLegacyFlaggedUser(profileId, isActive, notes);\nif (postResult.status == 200) {\n  // Success!\n}\n'))),(0,n.kt)(m,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n  "service": "globalApp",\n  "operation": "SYS_UPDATE_LEGACY_FLAGGED_USER",\n  "data":\n  {\n    "profileId": "the-profile-id",\n    "isActive": true,\n    "notes": "This is a note about the player."\n  }\n}\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status" : 200,\n  "data" : null\n}\n'))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"profileId"),(0,n.kt)("td",{parentName:"tr",align:null},"Target user's profile id.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"isActive"),(0,n.kt)("td",{parentName:"tr",align:null},"Flag indicating whether the user is flagged or not.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"notes"),(0,n.kt)("td",{parentName:"tr",align:null},"A field for recording something noteworthy about this user.")))))}b.isMDXComponent=!0}}]);