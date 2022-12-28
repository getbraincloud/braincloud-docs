"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[17739],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=i.createContext({}),s=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return a?i.createElement(y,r(r({ref:t},c),{},{components:a})):i.createElement(y,r({ref:t},c))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,r[1]=o;for(var s=2;s<l;s++)r[s]=a[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},72521:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var i=a(87462),n=(a(67294),a(3905));const l={},r="Global Entity",o={unversionedId:"api/capi/globalentity/index",id:"api/capi/globalentity/index",title:"Global Entity",description:"Overview",source:"@site/docs/api/2_capi/globalentity/index.md",sourceDirName:"api/2_capi/globalentity",slug:"/api/capi/globalentity/",permalink:"/braincloud-apiref/api/capi/globalentity/",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/globalentity/index.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysUpdatePropertyString",permalink:"/braincloud-apiref/api/capi/globalapp/sysupdatepropertystring"},next:{title:"CreateEntity",permalink:"/braincloud-apiref/api/capi/globalentity/createentity"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Special Topic: Global Entity Ownership and Deletion",id:"special-topic-global-entity-ownership-and-deletion",level:3},{value:"Scaling Global Entities",id:"scaling-global-entities",level:3},{value:"API Summary",id:"api-summary",level:3},{value:"Core Access:",id:"core-access",level:3},{value:"Retrieval",id:"retrieval",level:3},{value:"System Entities",id:"system-entities",level:3}],c=(u="DocCardList",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var u;const m={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"global-entity"},"Global Entity"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The following methods are used to work with Global Entities, which as the name implies, are accessible to all users of the application (within the confines of the ACL specified)."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Performance warning: Global Entities are best-suited for a moderate number (i.e. < 1000) of generally read-only objects (i.e. think tuning files, level data, etc.)",(0,n.kt)("br",null)),(0,n.kt)("br",null),(0,n.kt)("p",null,"Do ",(0,n.kt)("em",null,"not")," use Global Entities in cases where the data is primarily ",(0,n.kt)("em",null,"owned by users")," and the number of objects will ",(0,n.kt)("em",null,"grow as the user population grows"),". Use ",(0,n.kt)("em",null,"User Entities")," instead - or for maximum flexibility use ",(0,n.kt)("em",null,"Owned Custom Entities"),"."),(0,n.kt)("p",null,"Also - if the data is ",(0,n.kt)("em",null,"un-owned"),", but high populations of objects are required (i.e. > 1000), use ",(0,n.kt)("em",null,"Un-owned Custom Entities"),".")),(0,n.kt)("p",null,"Note that the integrity of Global Entities are protected by two key mechanisms:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Atomic writes")," \u2013 MongoDB enforces that only one write at a time can be processed on an object in the database. In this way, multiple users of an application cannot each ",(0,n.kt)("em",{parentName:"li"},"partially")," update an object"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Version checking")," \u2013 brainCloud uses a versioning scheme on objects to ensure that the object you're attempting to update has not changed since you initially read it. See the ",(0,n.kt)("a",{parentName:"li",href:"/api/appendix/version"},"versioning documentation")," for more information.")),(0,n.kt)("p",null,"brainCloud versioning works like this:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Entities (both Global and User/Player) each have a version associated with them"),(0,n.kt)("li",{parentName:"ul"},"This version is automatically incremented by the server each time an update is performed"),(0,n.kt)("li",{parentName:"ul"},"For a client update to be valid (and succeed), the client must provide the version in the update, and this version must match the current value stored in the database.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If the version match, the update is processed (automatically incrementing the version), and a copy of the updated object is returned to the client"),(0,n.kt)("li",{parentName:"ul"},"If the versions don't match, an exception is triggered.")))),(0,n.kt)("admonition",{title:'"',type:"tip"},(0,n.kt)("p",{parentName:"admonition"},'Entity versioning can by bypassed by passing a "-1" as the version in the update method \u2013 but this is not recommended.')),(0,n.kt)("p",null,"There are two more unique capabilities of Global Entities:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Indexing")," \u2013 global entities can be indexed for faster lookups."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Time-to-live")," \u2013 you can optionally set the Time-to-live (TTL) for a Global Entity.  This is very useful if you're using Global Entities to implement shared dynamic objects, that should automatically be cleaned up (based on inactivity)")),(0,n.kt)("h3",{id:"special-topic-global-entity-ownership-and-deletion"},"Special Topic: Global Entity Ownership and Deletion"),(0,n.kt)("p",null,"By default, every Global Entity is ",(0,n.kt)("em",{parentName:"p"},"owned")," by the user that creates it - and will be ",(0,n.kt)("em",{parentName:"p"},"automatically removed")," if/when that user that is deleted."),(0,n.kt)("p",null,"This may not be ideal for some use cases. For this purpose, brainCloud also supports ",(0,n.kt)("em",{parentName:"p"},"System Entities")," - which are simply Global Entities without owners - and are therefore not subject to the ",(0,n.kt)("em",{parentName:"p"},"delete when the owner is deleted")," rule."),(0,n.kt)("p",null,"The Global Entity service contains a subset API for dealing with ",(0,n.kt)("em",{parentName:"p"},"System Entities"),". These API calls bypass most ACL rules, and are thus callable via cloud code scripts only."),(0,n.kt)("h3",{id:"scaling-global-entities"},"Scaling Global Entities"),(0,n.kt)("h3",{id:"api-summary"},"API Summary"),(0,n.kt)("h3",{id:"core-access"},"Core Access:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/createentity"},"CreateEntity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/createentitywithindexedid"},"CreateEntityWithIndexedId")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/deleteentity"},"DeleteEntity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/updateentity"},"UpdateEntity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/updateentityacl"},"UpdateEntityAcl")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/updateentitytimetolive"},"UpdateEntityTimeToLive")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/updateentityownerandacl"},"UpdateEntityOwnerAndAcl")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/incrementglobalentitydata"},"IncrementGlobalEntityData"))),(0,n.kt)("h3",{id:"retrieval"},"Retrieval"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/getlist"},"GetList")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/getlistbyindexedid"},"GetListByIndexedId")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/getlistcount"},"GetListCount")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/readentity"},"ReadEntity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/getpage"},"GetPage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/getpageoffset"},"GetPageOffset"))),(0,n.kt)("h3",{id:"system-entities"},"System Entities"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"System Entity calls are available via Cloud Code only.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/createsystementity"},"CreateSystemEntity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/getsystementitylist"},"GetSystemEntityList")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/getsystementitylistcount"},"GetSystemEntityListCount")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/getsystementitypage"},"GetSystemEntityPage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/getsystementitypageoffset"},"GetSystemEntityPageOffset")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/makesystementity"},"MakeSystemEntity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/readsystementity"},"ReadSystemEntity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/updatesystementity"},"UpdateSystemEntity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/updatesystementityacl"},"UpdateSysetmEntityAcl")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/updateentityindexedid"},"UpdateEntityIndexedId"))),(0,n.kt)("p",null,"For more information on how brainCloud organizes data, refer to the ",(0,n.kt)("a",{parentName:"p",href:"http://getbraincloud.com/apidocs/api-modules/data/"},"Cloud Data Overview"),"."),(0,n.kt)(c,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);