"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[70554],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,y=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return a?r.createElement(y,c(c({ref:t},d),{},{components:a})):r.createElement(y,c({ref:t},d))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:n,c[1]=l;for(var p=2;p<o;p++)c[p]=a[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},24554:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>v,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={},c="GetOnewayMatchServiceProxy",l={unversionedId:"api/cc/bridge/getonewaymatchserviceproxy",id:"api/cc/bridge/getonewaymatchserviceproxy",title:"GetOnewayMatchServiceProxy",description:"Overview",source:"@site/docs/api/3_cc/bridge/getonewaymatchserviceproxy.md",sourceDirName:"api/3_cc/bridge",slug:"/api/cc/bridge/getonewaymatchserviceproxy",permalink:"/braincloud-apiref/api/cc/bridge/getonewaymatchserviceproxy",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/3_cc/bridge/getonewaymatchserviceproxy.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"GetName",permalink:"/braincloud-apiref/api/cc/bridge/getname"},next:{title:"GetPlaybackStreamServiceProxy",permalink:"/braincloud-apiref/api/cc/bridge/getplaybackstreamserviceproxy"}},i={},p=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},s=d("BrowserWindow"),u=d("Tabs"),m=d("TabItem"),y={toc:p};function v(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getonewaymatchserviceproxy"},"GetOnewayMatchServiceProxy"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Retrieves a OnewayMatchService proxy object."),(0,n.kt)("p",null,"Documentation for the service methods can be found ",(0,n.kt)("a",{parentName:"p",href:"/api/capi/onewaymatch"},"here"),"."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(s,{mdxType:"BrowserWindow"},(0,n.kt)(u,{mdxType:"Tabs"},(0,n.kt)(m,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(m,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(m,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(m,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(m,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},"var proxy = bridge.getOnewayMatchServiceProxy();\n"))),(0,n.kt)(m,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},"var proxy = bridge.getOnewayMatchServiceProxy();\n"))))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"session"),(0,n.kt)("td",{parentName:"tr",align:null},"A optional parameter for when a script is executed without a session")))))}v.isMDXComponent=!0}}]);