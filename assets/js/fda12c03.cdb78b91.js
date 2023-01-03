"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[95068],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,s[1]=p;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},s="HTTP Client",p={unversionedId:"api/cc/httpclient/index",id:"api/cc/httpclient/index",title:"HTTP Client",description:"Overview",source:"@site/docs/api/3_cc/httpclient/index.md",sourceDirName:"api/3_cc/httpclient",slug:"/api/cc/httpclient/",permalink:"/braincloud-apiref/api/cc/httpclient/",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/3_cc/httpclient/index.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Sleep",permalink:"/braincloud-apiref/api/cc/bridge/sleep"},next:{title:"Delete",permalink:"/braincloud-apiref/api/cc/httpclient/delete"}},i={},l=[{value:"Overview",id:"overview",level:2},{value:"API Summary",id:"api-summary",level:3},{value:"Get",id:"get",level:3},{value:"Post",id:"post",level:3},{value:"Put",id:"put",level:3},{value:"Patch",id:"patch",level:3},{value:"Delete",id:"delete",level:3},{value:"Other",id:"other",level:3}],c=(u="DocCardList",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const d={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"http-client"},"HTTP Client"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This service allows you to make HTTP requests to external third party websites."),(0,a.kt)("p",null,"Note that you must configure (declare) the external service via the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.braincloudservers.com/admin/dashboard#/development/core-settings-services"},"Cloud Code - Web Services page")," of the brainCloud portal first."),(0,a.kt)("h3",{id:"api-summary"},"API Summary"),(0,a.kt)("h3",{id:"get"},"Get"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/cc/httpclient/getresponsejson"},"GetResponseJson()")," - Retrieves a Json document."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/cc/httpclient/getresponsetext"},"GetResponseText()")," - Retrieves a Text document.")),(0,a.kt)("h3",{id:"post"},"Post"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/cc/httpclient/postjsonresponsejson"},"PostJsonResponseJson()")," - Posts a JSON document, expects a Json response."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/cc/httpclient/postjsonresponsetext"},"PostJsonResponseText()")," - Posts a JSON document, expects a text response."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/cc/httpclient/postjsonresponsetext"},"PostJsonOffboard()")," - Posts a JSON document in the background, without waiting for a response."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/cc/httpclient/postformresponsejson"},"PostFormResponseJson()")," - Posts a Form encoded document, expects a Json response."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/cc/httpclient/postmultipartresponsejson"},"PostMultipartResponseJson()")," - Posts a Form encoded document, expects a Json response."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/cc/httpclient/postformresponsetext"},"PostFormResponseText()")," - Posts a Form encoded document, expects a Text response."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/cc/httpclient/posttextresponsetext"},"PostTextResponseText()")," - Posts a text document, expects a Text response.")),(0,a.kt)("h3",{id:"put"},"Put"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/cc/httpclient/putjsonresponsejson"},"PutJsonResponseJson()")," - Puts a JSON document, expects a Json response."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/cc/httpclient/puttextresponsetext"},"PutTextResponseText()")," - Puts a text document, expects a Text response.")),(0,a.kt)("h3",{id:"patch"},"Patch"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/cc/httpclient/patchjsonresponsejson"},"PatchJsonResponseJson()")," - Patches a JSON document, expects a Json response."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/cc/httpclient/patchtextresponsetext"},"PatchTextResponseText()")," - Patches a text document, expects a Text response.")),(0,a.kt)("h3",{id:"delete"},"Delete"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/cc/httpclient/deletejsonresponsejson"},"DeleteJsonResponseJson()")," - Deletes a document, passes a Json body, expects a Json response."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/cc/httpclient/delete"},"Delete()")," - Deletes a document., expects a Text response.")),(0,a.kt)("h3",{id:"other"},"Other"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/cc/httpclient/parserequest"},"ParseRequest()")," - Makes a request to Parse Rest API.")),(0,a.kt)(c,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);