"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[40844],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},w=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),w=l,m=u["".concat(s,".").concat(w)]||u[w]||d[w]||n;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=w;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}w.displayName="MDXCreateElement"},96422:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=a(87462),l=(a(67294),a(3905));const n={},o="SetAlwaysAllowProfileSwitch",i={unversionedId:"api/wrapper/setalwaysallowprofileswitch",id:"api/wrapper/setalwaysallowprofileswitch",title:"SetAlwaysAllowProfileSwitch",description:"Overview",source:"@site/docs/api/1_wrapper/setalwaysallowprofileswitch.md",sourceDirName:"api/1_wrapper",slug:"/api/wrapper/setalwaysallowprofileswitch",permalink:"/braincloud-apiref/api/wrapper/setalwaysallowprofileswitch",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/1_wrapper/setalwaysallowprofileswitch.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"RunCallbacks",permalink:"/braincloud-apiref/api/wrapper/runcallbacks"},next:{title:"SetStoredAnonymousId",permalink:"/braincloud-apiref/api/wrapper/setstoredanonymousid"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},u=c("BrowserWindow"),d=c("Tabs"),w=c("TabItem"),m={toc:p};function f(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"setalwaysallowprofileswitch"},"SetAlwaysAllowProfileSwitch"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"For non-anonymous authentication methods, a profile ID will be passed in when this value is set to false. This will generate an error on the server if the profile ID passed in does not match the profile associated with the authentication credentials."),(0,l.kt)("p",null,"By default, this value is true."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(u,{mdxType:"BrowserWindow"},(0,l.kt)(d,{mdxType:"Tabs"},(0,l.kt)(w,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"<%= data.branding.intialize_step %>\n\n_bc.SetAlwaysAllowProfileSwitch(false);    // Default is true\n"))),(0,l.kt)(w,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"_bc->setAlwaysAllowProfileSwitch(true);\n"))),(0,l.kt)(w,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"_bc.alwaysAllowProfileSwitch = YES;\n"))),(0,l.kt)(w,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"_bc.setAlwaysAllowProfileSwitch(true);\n"))),(0,l.kt)(w,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"_bc.setAlwaysAllowProfileSwitch(true);\n"))),(0,l.kt)(w,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"_bc.setAlwaysAllowProfileSwitch(true);\n"))),(0,l.kt)(w,{value:"r",label:"Raw",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"_bc.setAlwaysAllowProfileSwitch(true);\n"))))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"JSON Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"_bc.setAlwaysAllowProfileSwitch(true);\n"))),(0,l.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"alwaysAllow"),(0,l.kt)("td",{parentName:"tr",align:null},"Controls whether the profile ID is passed in with non-anonymous authentications.")))))}f.isMDXComponent=!0}}]);