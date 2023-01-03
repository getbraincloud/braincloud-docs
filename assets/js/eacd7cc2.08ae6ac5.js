"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[88381],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>g});var r=t(67294);function p(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){p(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,p=function(e,a){if(null==e)return{};var t,r,p={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(p[t]=e[t]);return p}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var n=r.createContext({}),s=function(e){var a=r.useContext(n),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=s(e.components);return r.createElement(n.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},y=r.forwardRef((function(e,a){var t=e.components,p=e.mdxType,l=e.originalType,n=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),y=p,g=u["".concat(n,".").concat(y)]||u[y]||d[y]||l;return t?r.createElement(g,i(i({ref:a},c),{},{components:t})):r.createElement(g,i({ref:a},c))}));function g(e,a){var t=arguments,p=a&&a.mdxType;if("string"==typeof e||p){var l=t.length,i=new Array(l);i[0]=y;var o={};for(var n in a)hasOwnProperty.call(a,n)&&(o[n]=a[n]);o.originalType=e,o[u]="string"==typeof e?e:p,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},43182:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>n,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=t(87462),p=(t(67294),t(3905));const l={},i="Global App",o={unversionedId:"api/capi/globalapp/index",id:"api/capi/globalapp/index",title:"Global App",description:"Overview",source:"@site/docs/api/2_capi/globalapp/index.md",sourceDirName:"api/2_capi/globalapp",slug:"/api/capi/globalapp/",permalink:"/braincloud-apiref/api/capi/globalapp/",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/globalapp/index.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"UpdateRewards",permalink:"/braincloud-apiref/api/capi/gamification/updaterewards"},next:{title:"ReadProperties",permalink:"/braincloud-apiref/api/capi/globalapp/readproperties"}},n={},s=[{value:"Overview",id:"overview",level:2},{value:"API Summary",id:"api-summary",level:3},{value:"Global Properties:",id:"global-properties",level:3},{value:"App Counts:",id:"app-counts",level:3},{value:"Other App info:",id:"other-app-info",level:3}],c=(u="DocCardList",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.kt)("div",e)});var u;const d={toc:s};function y(e){let{components:a,...t}=e;return(0,p.kt)("wrapper",(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"global-app"},"Global App"),(0,p.kt)("h2",{id:"overview"},"Overview"),(0,p.kt)("p",null,"The Global App service allows you to read the Global Properties that you have set on the\n",(0,p.kt)("a",{parentName:"p",href:"https://portal.braincloudservers.com/admin/dashboard#/development/global-properties"},"Global Properties page")," brainCloud portal for you app."),(0,p.kt)("p",null,"Global Properties are used to configure the key parameters for your app that you want to be able to easily tweak server-side."),(0,p.kt)("p",null,"This service also provides APIs for reading the analytics counts of the app."),(0,p.kt)("h3",{id:"api-summary"},"API Summary"),(0,p.kt)("h3",{id:"global-properties"},"Global Properties:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/capi/globalapp/readproperties"},"ReadProperties")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/capi/globalapp/sysupdatepropertyjson"},"SysUpdatePropertyJson")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/capi/globalapp/sysupdatepropertystring"},"SysUpdatePropertyString")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/capi/globalapp/readselectedproperties"},"ReadSelectedProperties")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/capi/globalapp/readpropertiesincategories"},"ReadPropertiesInCategories")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/capi/globalapp/syscreatepropertystring"},"SysCreatePropertyString")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/capi/globalapp/syscreatepropertyjson"},"SysCreatePropertyJson"))),(0,p.kt)("h3",{id:"app-counts"},"App Counts:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/capi/globalapp/sysgetdailycounts"},"SysGetDailyCounts")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/capi/globalapp/sysgetmonthlycounts"},"SysGetMonthlyCounts"))),(0,p.kt)("h3",{id:"other-app-info"},"Other App info:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/capi/globalapp/sysgetappsecret"},"SysGetAppSecret")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/capi/globalapp/sysaddlegacyflaggeduser"},"SysAddLegacyFlaggedUser")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/capi/globalapp/sysgetlegacyflaggeduserdata"},"SysGetLegacyFlaggedUserData")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/capi/globalapp/sysgetlegacyflaggeduserdatalist"},"SysGetLegacyFlaggedUserDataList")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/capi/globalapp/sysremovefromlegacyflaggedusers"},"SysRemoveFromLegacyFlaggedUsers")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/capi/globalapp/sysupdatelegacyflaggeduser"},"SysUpdateLegacyFlaggedUser"))),(0,p.kt)(c,{mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);