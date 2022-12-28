"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[53970],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),u=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(o.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),m=u(a),s=r,k=m["".concat(o,".").concat(s)]||m[s]||c[s]||l;return a?n.createElement(k,i(i({ref:e},d),{},{components:a})):n.createElement(k,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[m]="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},61829:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={},i="Authentication Types",p={unversionedId:"api/appendix/authTypes",id:"api/appendix/authTypes",title:"Authentication Types",description:"Overview",source:"@site/docs/api/5_appendix/authTypes.md",sourceDirName:"api/5_appendix",slug:"/api/appendix/authTypes",permalink:"/braincloud-apiref/api/appendix/authTypes",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/5_appendix/authTypes.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"ACL",permalink:"/braincloud-apiref/api/appendix/acl"},next:{title:"Generic Paged Queries",permalink:"/braincloud-apiref/api/appendix/genericPagedQueries"}},o={},u=[{value:"Overview",id:"overview",level:2}],d={toc:u};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"authentication-types"},"Authentication Types"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This is a list of all valid Authentication Types for brainCloud.  The following authentication types are currently supported:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"ID"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Anonymous"),(0,r.kt)("td",{parentName:"tr",align:null},"Anonymous")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Apple"),(0,r.kt)("td",{parentName:"tr",align:null},"Apple")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Email"),(0,r.kt)("td",{parentName:"tr",align:null},"Email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"External"),(0,r.kt)("td",{parentName:"tr",align:null},"External")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Facebook"),(0,r.kt)("td",{parentName:"tr",align:null},"Facebook")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FacebookLimited"),(0,r.kt)("td",{parentName:"tr",align:null},"FacebookLimited")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GameCenter"),(0,r.kt)("td",{parentName:"tr",align:null},"GameCenter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Google"),(0,r.kt)("td",{parentName:"tr",align:null},"Google")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GoogleOpenId"),(0,r.kt)("td",{parentName:"tr",align:null},"GoogleOpenId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Handoff"),(0,r.kt)("td",{parentName:"tr",align:null},"HandOff")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nintendo"),(0,r.kt)("td",{parentName:"tr",align:null},"Nintendo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oculus"),(0,r.kt)("td",{parentName:"tr",align:null},"Oculus")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parse"),(0,r.kt)("td",{parentName:"tr",align:null},"Parse")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PlaystationNetwork5"),(0,r.kt)("td",{parentName:"tr",align:null},"PlaystationNetwork5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PlaystationNetwork"),(0,r.kt)("td",{parentName:"tr",align:null},"PlaystationNetwork")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SettopHandoff"),(0,r.kt)("td",{parentName:"tr",align:null},"SettopHandoff")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Steam"),(0,r.kt)("td",{parentName:"tr",align:null},"Steam")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Twitter"),(0,r.kt)("td",{parentName:"tr",align:null},"Twitter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ultra"),(0,r.kt)("td",{parentName:"tr",align:null},"Ultra")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Universal"),(0,r.kt)("td",{parentName:"tr",align:null},"Universal")))),(0,r.kt)("p",null,"Note that the client libraries contain an ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthenticationType")," class that represents the authentication type strings. You can use these classes directly when calling API methods which require an authentication type to be passed in."))}m.isMDXComponent=!0}}]);