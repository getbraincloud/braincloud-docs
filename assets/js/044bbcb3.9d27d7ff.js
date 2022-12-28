"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[2842],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},90340:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>v,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={},i="VerifyOktaJWT",l={unversionedId:"api/capi/identity/verifyoktajwt",id:"api/capi/identity/verifyoktajwt",title:"VerifyOktaJWT",description:"Overview",source:"@site/docs/api/2_capi/identity/verifyoktajwt.md",sourceDirName:"api/2_capi/identity",slug:"/api/capi/identity/verifyoktajwt",permalink:"/braincloud-apiref/api/capi/identity/verifyoktajwt",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/identity/verifyoktajwt.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"UpdateUniversalIdLogin",permalink:"/braincloud-apiref/api/capi/identity/updateuniversalidlogin"},next:{title:"VerifySignedJwt",permalink:"/braincloud-apiref/api/capi/identity/verifysignedjwt"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=d("PartialServop"),c=d("BrowserWindow"),m=d("Tabs"),k=d("TabItem"),y={toc:s};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"verifyoktajwt"},"VerifyOktaJWT"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Used in an External Authentication script to validate an OKTA login. "),(0,r.kt)("p",null,"Usage:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The client app should first implement the Okta login"),(0,r.kt)("li",{parentName:"ol"},"Then pass the Okta User ID (as externalId) and JWT token (as authenticationToken) to brainCloud via the ",(0,r.kt)("a",{parentName:"li",href:"/api/capi/authentication/authenticateexternal"},(0,r.kt)("code",null,"AuthenticateExternal"))," call"),(0,r.kt)("li",{parentName:"ol"},"This will automatically invoke the custom external auth script (configured via the ",(0,r.kt)("strong",{parentName:"li"},"Design | Authentication | External")," portal page)"),(0,r.kt)("li",{parentName:"ol"},"Where verifyOktaJwt() can be called to verify the JWT token before proceeding")),(0,r.kt)("p",null,"Constants like the Okta domain and audience are best stored as global properties in your app."),(0,r.kt)(u,{service_name:"identity",operation_name:"VERIFY_OKTA_JWT",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(c,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(k,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(k,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(k,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(k,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(k,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(k,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'\n// The key config parameters are best managed as global properties\nurl = bridge.getGlobalProperty("oktaUrl");\nappId = bridge.getGlobalProperty("oktaClientId");\ngroup = bridge.getGlobalProperty("oktaGroup"); \n\nuserId = data.externalId; // Okta User Id\ntoken = data.authenticationToken; // JWT Token\n\n// Verify Okta Token\nvar identityProxy = bridge.getIdentityServiceProxy();\nresponse = identityProxy.verifyOktaJwt(url, appId, token);\n\nvar hasPermission = false;\n\nif(response.status == 200) {\n    // Optional - verify that user is member of the appropriate group\n    var groups = response.data.claims.groups;\n    for(i = 0; i < groups.length; i++) {\n        if(group == groups[i]) {\n            hasPermission = true;\n        }\n    }\n}\n\n// Return true or false to indicate valid login\nhasPermission;\n'))),(0,r.kt)(k,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "claims": {\n      "sub": "00u1caz4q626WtuOc555",\n      "name": "John Snow",\n      "email": "johns@xxx.com",\n      "ver": 1,\n      "iss": "https://dev-5555555.okta.com/oauth2/default",\n      "aud": "0oa1k21u00qBbTwaz555",\n      "iat": 1573052062,\n      "exp": 1573055662,\n      "jti": "ID.HntoaUAOrMR4XXXswVCAV8Vi2eU_gplsbx4xgW4BhgM",\n      "amr": [\n        "pwd"\n      ],\n      "idp": "00o1caT4n2FS01065357",\n      "nonce": "a81b30479be55fe98fda915525acf2da",\n      "preferred_username": "johns@xxx.com",\n      "auth_time": 1573052055,\n      "at_hash": "n_bRbPka--WLaLKWEKEDUZXXXXXX",\n      "groups": [\n        "Everyone",\n        "BrainCloudUsers"\n      ]\n    },\n    "issuedAt": 1573052067000,\n    "expiresAt": 1573055667000\n  },\n  "status": 200\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"domain"),(0,r.kt)("td",{parentName:"tr",align:null},"Okta domain (also known as the ",(0,r.kt)("em",{parentName:"td"},"Okta Issuer URI"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"audience"),(0,r.kt)("td",{parentName:"tr",align:null},"JWT audience (also known as ",(0,r.kt)("em",{parentName:"td"},"Okta Client ID"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jwtString"),(0,r.kt)("td",{parentName:"tr",align:null},"JWT string (passed in as ",(0,r.kt)("inlineCode",{parentName:"td"},"data.authenticationToken")," to the script)")))))}v.isMDXComponent=!0}}]);