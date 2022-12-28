"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[78331],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||n;return a?i.createElement(g,l(l({ref:t},p),{},{components:a})):i.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<n;c++)l[c]=a[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},47881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var i=a(87462),r=(a(67294),a(3905));const n={},l="Item Catalog",o={unversionedId:"api/s2s/itemcatalog/index",id:"api/s2s/itemcatalog/index",title:"Item Catalog",description:"Overview",source:"@site/docs/api/4_s2s/itemcatalog/index.md",sourceDirName:"api/4_s2s/itemcatalog",slug:"/api/s2s/itemcatalog/",permalink:"/braincloud-apiref/api/s2s/itemcatalog/",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/4_s2s/itemcatalog/index.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysChangeEmailIdentity",permalink:"/braincloud-apiref/api/s2s/identity/syschangeemailidentity"},next:{title:"SysAddCatalogItem",permalink:"/braincloud-apiref/api/s2s/itemcatalog/sysaddcatalogitem"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"API Summary",id:"api-summary",level:3},{value:"Get",id:"get",level:4},{value:"Create",id:"create",level:4},{value:"Edit",id:"edit",level:4},{value:"Life Cycle",id:"life-cycle",level:4}],p=(m="DocCardList",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const d={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"item-catalog"},"Item Catalog"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"<%# TODO Write Desc %>"),(0,r.kt)("h3",{id:"api-summary"},"API Summary"),(0,r.kt)("h4",{id:"get"},"Get"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/s2s/itemcatalog/sysgetcatalogitemspage"},"SysGetCatalogItemsPage")," - Retrieves page of catalog items from the server, with full language fields mappings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/s2s/itemcatalog/sysgetcatalogitemspageoffset"},"SysGetCatalogItemsPageOffset")," - Gets the page of catalog items from the server based on the encoded context and specified page offset, with full language fields mappings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/s2s/itemcatalog/sysgetcatalogitemdefinition"},"SysGetCatalogItemDefinition")," - Reads an existing item definition from the server, with full language fields mappings.")),(0,r.kt)("h4",{id:"create"},"Create"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/s2s/itemcatalog/sysaddcatalogitem"},"SysAddCatalogItem")," - Create a new catalog item on the server.")),(0,r.kt)("h4",{id:"edit"},"Edit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/s2s/itemcatalog/syseditcatalogitem"},"SysEditCatalogItem")," - Update a catalog item on the server.")),(0,r.kt)("h4",{id:"life-cycle"},"Life Cycle"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/s2s/itemcatalog/syspublishcatalogitem"},"SysPublishCatalogItem")," - Publish the specified catalog item on the server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/s2s/itemcatalog/syssetinvisiblecatalogitem"},"SysSetInvisibleCatalogItem")," - Set the specified catalog item to invisible on the server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/s2s/itemcatalog/sysretirecatalogitem"},"SysRetireCatalogItem")," - Retire the specified catalog item on the server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/s2s/itemcatalog/sysrevokecatalogitem"},"SysRevokeCatalogItem")," - Revoke the specified catalog item on the server.")),(0,r.kt)(p,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);