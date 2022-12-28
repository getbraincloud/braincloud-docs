"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[59514],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(g,l(l({ref:t},d),{},{components:a})):n.createElement(g,l({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},64881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>v,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={},l="VerifySignedJwt",o={unversionedId:"api/capi/identity/verifysignedjwt",id:"api/capi/identity/verifysignedjwt",title:"VerifySignedJwt",description:"Overview",source:"@site/docs/api/2_capi/identity/verifysignedjwt.md",sourceDirName:"api/2_capi/identity",slug:"/api/capi/identity/verifysignedjwt",permalink:"/braincloud-apiref/api/capi/identity/verifysignedjwt",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/identity/verifysignedjwt.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"VerifyOktaJWT",permalink:"/braincloud-apiref/api/capi/identity/verifyoktajwt"},next:{title:"Item Catalog",permalink:"/braincloud-apiref/api/capi/itemcatalog/"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=d("PartialServop"),u=d("BrowserWindow"),m=d("Tabs"),g=d("TabItem"),y={toc:s};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"verifysignedjwt"},"VerifySignedJwt"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Verifies a signed JWT provided as a string."),(0,r.kt)(c,{service_name:"identity",operation_name:"VERIFY_SIGNED_JWT",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(u,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(g,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(g,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(g,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(g,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(g,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(g,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var jksUri = "https://xxx.";\nvar issuer = "https://xxx.";\nvar audience = "api://default";\nvar jwtString = "jihgfhgsjkfgfjkgh";\nvar identityProxy = bridge.getIdentityServiceProxy();\n\nvar postResult = identityProxy.verifySignedJwt(jksUri, issuer, audience, jwtString);\nif (postResult.status == 200) {\n  // Success!\n}\n'))),(0,r.kt)(g,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n  "service": "identity",\n  "operation": "VERIFY_SIGNED_JWT",\n  "data":\n  {\n    "jksUri": "https://xxx.",\n    "issuer": "https://xxx.",\n    "audience": "api://default",\n    "jwtString": "jihgfhgsjkfgfjkgh"\n  }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "claims": {\n      "sub": "00u1caz4q626WtuOc555",\n      "name": "John Snow",\n      "email": "johns@xxx.com",\n      "ver": 1,\n      "iss": "https://login.xxx.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0",\n      "aud": "0oa1k21u00qBbTwaz555",\n      "iat": 1573052062,\n      "exp": 1573055662,\n      "jti": "ID.HntoaUAOrMR4XXXswVCAV8Vi2eU_gplsbx4xgW4BhgM",\n      "amr": [\n        "pwd",\n        "rsa",\n        "mfa"\n      ],\n      "idp": "00o1caT4n2FS01065357",\n      "nonce": "a81b30479be55fe98fda915525acf2da",\n      "preferred_username": "johns@xxx.com",\n      "auth_time": 1573052055,\n      "at_hash": "n_bRbPka--WLaLKWEKEDUZXXXXXX",\n      "groups": [\n        "Everyone",\n        "BrainCloudUsers"\n      ]\n    },\n    "issuedAt": 1573052067000,\n    "expiresAt": 1573055667000\n  },\n  "status": 200\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jksUri"),(0,r.kt)("td",{parentName:"tr",align:null},"JKS uri.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"issuer"),(0,r.kt)("td",{parentName:"tr",align:null},"issuer uri.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"audience"),(0,r.kt)("td",{parentName:"tr",align:null},"JWT audience.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jwtString"),(0,r.kt)("td",{parentName:"tr",align:null},"JWT string representation.")))))}v.isMDXComponent=!0}}]);