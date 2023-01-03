"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[41490],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),d=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=d(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,f=p["".concat(i,".").concat(m)]||p[m]||s[m]||o;return t?n.createElement(f,l(l({ref:r},u),{},{components:t})):n.createElement(f,l({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var d=2;d<o;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},97023:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=t(87462),a=(t(67294),t(3905));const o={title:"Cloud Code Central",date:"2018-08-17"},l=void 0,c={unversionedId:"learn/cloud-code-central/index",id:"learn/cloud-code-central/index",title:"Cloud Code Central",description:"What is Cloud Code?",source:"@site/docs/learn/4_cloud-code-central/index.md",sourceDirName:"learn/4_cloud-code-central",slug:"/learn/cloud-code-central/",permalink:"/braincloud-apiref/learn/cloud-code-central/",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/learn/4_cloud-code-central/index.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672679892,formattedLastUpdatedAt:"Jan 2, 2023",frontMatter:{title:"Cloud Code Central",date:"2018-08-17"},sidebar:"learnSidebar",previous:{title:"API Reference",permalink:"/braincloud-apiref/learn/api-reference"},next:{title:"Cloud Code Tutorials",permalink:"/braincloud-apiref/learn/cloud-code-central/cloud-code-tutorials/"}},i={},d=[{value:"Handy references",id:"handy-references",level:3},{value:"Even more references",id:"even-more-references",level:3}],u=(p="DocCardList",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const s={toc:d};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"What is Cloud Code?")),(0,a.kt)("p",null,"brainCloud allows\xa0developers to write custom ",(0,a.kt)("a",{parentName:"p",href:"/api/cc"},"Cloud Code")," routines\xa0in JavaScript, that reside and run on the brainCloud servers, allowing execution of code more securely and efficiently than if it were run client-side."),(0,a.kt)("p",null,"brainCloud uses the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino"},"Mozilla Rhino")," engine to run scripts."),(0,a.kt)("p",null,"Scripts can be quickly written and tested via the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.braincloudservers.com/admin/dashboard#/development/serverscripts-edit"},(0,a.kt)("strong",{parentName:"a"},"Design | Cloud Code | Scripts"))," page of the Design Portal."),(0,a.kt)("h3",{id:"handy-references"},"Handy references"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/learn/key-concepts/cloud-code/"},"Capabilities")," -\xa0",(0,a.kt)("em",{parentName:"li"},"an overview of how cloud code can be used in brainCloud")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/learn/cloud-code-central/cloud-code-tutorials/cloud-code-tutorial-background/"},"Rules")," - ",(0,a.kt)("em",{parentName:"li"},"an overview of cloud code scripts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/learn/cloud-code-central/cloud-code-tutorials/"},"Tutorials")," - ",(0,a.kt)("em",{parentName:"li"},"recommended for all developers!")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/learn/cloud-code-central/handy-cloud-code-scripts/"},"Examples")," - ",(0,a.kt)("em",{parentName:"li"},"handy example scripts"))),(0,a.kt)("h3",{id:"even-more-references"},"Even more references"),(0,a.kt)("p",null,"Additional pages from the web:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"},"JavaScript Guide")," - Mozilla's guide to JavaScript syntax")),(0,a.kt)(u,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);