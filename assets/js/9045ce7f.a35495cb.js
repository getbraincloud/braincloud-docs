"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[51174],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(t),f=s,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return t?n.createElement(m,a(a({ref:r},l),{},{components:t})):n.createElement(m,a({ref:r},l))}));function m(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var i=t.length,a=new Array(i);a[0]=f;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o[u]="string"==typeof e?e:s,a[1]=o;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},61809:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(87462),s=(t(67294),t(3905));const i={},a="Presence",o={unversionedId:"api/s2s/presence/index",id:"api/s2s/presence/index",title:"Presence",description:"Overview",source:"@site/docs/api/4_s2s/presence/index.md",sourceDirName:"api/4_s2s/presence",slug:"/api/s2s/presence/",permalink:"/braincloud-apiref/api/s2s/presence/",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/4_s2s/presence/index.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysUpdateMessage",permalink:"/braincloud-apiref/api/s2s/messaging/sysupdatemessage"},next:{title:"SysExtendPxExpiry",permalink:"/braincloud-apiref/api/s2s/presence/sysextendpxexpiry"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"API Summary",id:"api-summary",level:3},{value:"Presence",id:"presence-1",level:3}],l=(u="DocCardList",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)});var u;const d={toc:c};function f(e){let{components:r,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"presence"},"Presence"),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"<%# TODO Write Desc %>"),(0,s.kt)("h3",{id:"api-summary"},"API Summary"),(0,s.kt)("h3",{id:"presence-1"},"Presence"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/api/s2s/presence/sysextendpxexpiry"},"SysExtendPxExpiry")," - Extends the presence TTL for \\<profileId",">"," by \\<seconds",">","."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/api/s2s/presence/sysgetpresenceofusers"},"SysGetPresenceOfUsers")," - Gets the presence data for the given \\<profileIds",">",". Will not include offline profiles unless \\<includeOffline",">"," is set to true."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/api/s2s/presence/sysinitializepresence"},"SysInitializePresence")," - Creates or updates the presence of \\<profileId",">",". \\<visible",">"," is optional (defaults to true). \\<activity",">"," is optional. \\<expirySecs",">"," is optional (defaults to brainCloud property \\<presPxExpirySecs",">",")."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/api/s2s/presence/systerminatepresence"},"SysTerminatePresence")," - Terminates the presence of \\<profileId",">",".")),(0,s.kt)(l,{mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);