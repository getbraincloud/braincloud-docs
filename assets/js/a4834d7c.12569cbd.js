"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[83266],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>v});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),d=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=d(e.components);return r.createElement(s.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(t),u=n,v=p["".concat(s,".").concat(u)]||p[u]||m[u]||l;return t?r.createElement(v,o(o({ref:a},c),{},{components:t})):r.createElement(v,o({ref:a},c))}));function v(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},28702:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=t(87462),n=(t(67294),t(3905));const l={},o="SendAdvancedEmail",i={unversionedId:"api/s2s/mail/sendadvancedemail",id:"api/s2s/mail/sendadvancedemail",title:"SendAdvancedEmail",description:"Overview",source:"@site/docs/api/4_s2s/mail/sendadvancedemail.md",sourceDirName:"api/4_s2s/mail",slug:"/api/s2s/mail/sendadvancedemail",permalink:"/braincloud-apiref/api/s2s/mail/sendadvancedemail",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/4_s2s/mail/sendadvancedemail.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Mail",permalink:"/braincloud-apiref/api/s2s/mail/"},next:{title:"SendAdvancedEmailByAddress",permalink:"/braincloud-apiref/api/s2s/mail/sendadvancedemailbyaddress"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",a)},p=c("PartialServop"),m=c("BrowserWindow"),u=c("Tabs"),v=c("TabItem"),b={toc:d};function f(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sendadvancedemail"},"SendAdvancedEmail"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Sends a advanced email to the given user.\nSee the documentation for contents of 'serviceParams'."),(0,n.kt)(p,{service_name:"mail",operation_name:"SEND_ADVANCED_EMAIL",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(m,{mdxType:"BrowserWindow"},(0,n.kt)(u,{mdxType:"Tabs"},(0,n.kt)(v,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,n.kt)(v,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,n.kt)(v,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,n.kt)(v,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,n.kt)(v,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,n.kt)(v,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var profileId = "f7144cc0-b996-440f-8459-21b0ecb91a10";\nvar serviceParams = {\n    "fromAddress": "fromAddress",\n    "fromName": "fromName",\n    "replyToAddress": "replyToAddress",\n    "replyToName": "replyToName",\n    "templateId": "8f14c77d-61f4-4966-ab6d-0bee8b13d090",\n    "subject": "subject",\n    "body": "Body goes here",\n    "useHtml": false,\n    "substitutions": {\n        ":name": "John Doe",\n        ":resetLink": "www.dummuyLink.io"\n    },\n    "categories": [\n        "category1",\n        "category2"\n    ]\n};\nvar mailProxy = bridge.getMailServiceProxy();\n\nvar postResult = mailProxy.sendAdvancedEmail(profileId, serviceParams);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,n.kt)(v,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "mail",\n    "operation": "SEND_ADVANCED_EMAIL",\n    "data": {\n        "profileId": "f7144cc0-b996-440f-8459-21b0ecb91a10",\n        "serviceParams": {\n            "fromAddress": "fromAddress",\n            "fromName": "fromName",\n            "replyToAddress": "replyToAddress",\n            "replyToName": "replyToName",\n            "templateId": "8f14c77d-61f4-4966-ab6d-0bee8b13d090",\n            "subject": "subject",\n            "body": "Body goes here",\n            "useHtml": false,\n            "substitutions": {\n                ":name": "John Doe",\n                ":resetLink": "www.dummuyLink.io"\n            },\n            "categories": [\n                "category1",\n                "category2"\n            ]\n        }\n    }\n}\n'))))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"profileId"),(0,n.kt)("td",{parentName:"tr",align:null},"The user to send the email to.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"serviceParams"),(0,n.kt)("td",{parentName:"tr",align:null},"Set of parameters dependant on the mail service configured.")))))}f.isMDXComponent=!0}}]);