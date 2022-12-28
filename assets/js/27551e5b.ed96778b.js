"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[46096],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>v});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(a),m=r,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(v,s(s({ref:t},c),{},{components:a})):n.createElement(v,s({ref:t},c))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,s[1]=p;for(var i=2;i<o;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96087:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const o={},s="PostJsonResponseJson",p={unversionedId:"api/cc/httpclient/postjsonresponsejson",id:"api/cc/httpclient/postjsonresponsejson",title:"PostJsonResponseJson",description:"Overview",source:"@site/docs/api/3_cc/httpclient/postjsonresponsejson.md",sourceDirName:"api/3_cc/httpclient",slug:"/api/cc/httpclient/postjsonresponsejson",permalink:"/braincloud-apiref/api/cc/httpclient/postjsonresponsejson",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/3_cc/httpclient/postjsonresponsejson.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"PostJsonOffboard",permalink:"/braincloud-apiref/api/cc/httpclient/postjsonoffboard"},next:{title:"PostJsonResponseText",permalink:"/braincloud-apiref/api/cc/httpclient/postjsonresponsetext"}},l={},i=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=c("PartialServop"),d=c("BrowserWindow"),m=c("Tabs"),v=c("TabItem"),b={toc:i};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"postjsonresponsejson"},"PostJsonResponseJson"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Posts a JSON formatted document via HTTP and expects a JSON response."),(0,r.kt)(u,{service_name:"httpClient",operation_name:"POST_JSON_RESPONSE_JSON",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(d,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(v,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"//Switch to CC tab\n"))),(0,r.kt)(v,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"//Switch to CC tab\n"))),(0,r.kt)(v,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"//Switch to CC tab\n"))),(0,r.kt)(v,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"//Switch to CC tab\n"))),(0,r.kt)(v,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"//Switch to CC tab\n"))),(0,r.kt)(v,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var serviceCode = "webService";\nvar path = "resource/dir";\nvar query = {\n    "parmName": "value"\n};\nvar headers = {\n    "headerName": "value"\n};\nvar json = {\n    "key": "value"\n};\nvar httpClientProxy = bridge.getHttpClientServiceProxy();\n\nvar postResult = httpClientProxy.postJsonResponseJson(serviceCode, path, query, headers, json);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(v,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var serviceCode = "webService";\nvar path = "resource/dir";\nvar query = {\n    "parmName": "value"\n};\nvar headers = {\n    "headerName": "value"\n};\nvar json = {\n    "key": "value"\n};\nvar httpClientProxy = bridge.getHttpClientServiceProxy();\n\nvar postResult = httpClientProxy.postJsonResponseJson(serviceCode, path, query, headers, json);\nif (postResult.status == 200) {\n    // Success!\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "statusCode": 200,\n        "json": {\n            "key": "value"\n        }\n    }\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"serviceCode"),(0,r.kt)("td",{parentName:"tr",align:null},"Service code of the external service configured in the Cloud Code - Web Services section of the portal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to append to the Base URL of the service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"Map of query parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headers"),(0,r.kt)("td",{parentName:"tr",align:null},"Map of extra headers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON formatted data to post")))))}f.isMDXComponent=!0}}]);