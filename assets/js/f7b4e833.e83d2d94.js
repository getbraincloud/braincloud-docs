"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[89283],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),s=d(a),u=r,k=s["".concat(p,".").concat(u)]||s[u]||c[u]||l;return a?n.createElement(k,i(i({ref:t},o),{},{components:a})):n.createElement(k,i({ref:t},o))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[s]="string"==typeof e?e:r,i[1]=m;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},48103:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={},i="Mail",m={unversionedId:"api/capi/mail/index",id:"api/capi/mail/index",title:"Mail",description:"Overview",source:"@site/docs/api/2_capi/mail/index.md",sourceDirName:"api/2_capi/mail",slug:"/api/capi/mail/",permalink:"/braincloud-apiref/api/capi/mail/",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/mail/index.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1673042992,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{},sidebar:"apiSidebar",previous:{title:"UpdateSettings",permalink:"/braincloud-apiref/api/capi/lobby/updatesettings"},next:{title:"SendAdvancedEmail",permalink:"/braincloud-apiref/api/capi/mail/sendadvancedemail"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Advanced Parameters",id:"advanced-parameters",level:3},{value:"SendGrid",id:"sendgrid",level:3},{value:"General Template Parameters",id:"general-template-parameters",level:3},{value:"Dyanmic Template Parameters",id:"dyanmic-template-parameters",level:3},{value:"HTML/plain-text Template Parameters",id:"htmlplain-text-template-parameters",level:3},{value:"Legacy Template Parameters",id:"legacy-template-parameters",level:3},{value:"API Summary",id:"api-summary",level:3},{value:"Send Mail",id:"send-mail",level:3}],o=(s="DocCardList",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var s;const c={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mail"},"Mail"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Mail service allows you to send emails though brainCloud using the mail service provider you have configured on the ",(0,r.kt)("a",{parentName:"p",href:"https://portal.braincloudservers.com/admin/dashboard#/development/integrations-manage-integrations"},"Manage Integrations page")," of the brainCloud portal."),(0,r.kt)("h3",{id:"advanced-parameters"},"Advanced Parameters"),(0,r.kt)("p",null,"Using the SendAdvancedEmail method you can specify service-specific parameters to use when sending an email.  Things like tags, categories, templates, and substitutions.\nThe available parameters will depend on the mail service provider you have enabled."),(0,r.kt)("h3",{id:"sendgrid"},"SendGrid"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Example of dynamic templated SendGrid email parameters:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json-doc"},'{\n    "fromAddress": "email@company.com",\n    "fromName": "Jane Doe",\n    "replyToAddress": "optional@company.com",\n    "replyToName": "Optional ReplyTo",\n    "templateId": "d-www-xxx-yyy-zzz",\n    "dynamicData": {\n        "user": {\n            "firstName": "John",\n            "lastName": "Doe"\n        },\n        "resetLink": "www.dummuyLink.io"\n    },\n    "categories": [\n        "category1",\n        "category2"\n    ],\n    "attachments": [\n        {\n            "content": "VGhpcyBhdHRhY2htZW50IHRleHQ=",\n            "filename": "attachment.txt"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"Mail template formats sent into SendGrid."),(0,r.kt)("p",null,"Information on setting up SendGrid can be found ",(0,r.kt)("a",{parentName:"p",href:"/learn/portal-tutorials/email-integration-sendgrid/"},"here"),"."),(0,r.kt)("h3",{id:"general-template-parameters"},"General Template Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fromAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"An alternate from address.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fromName"),(0,r.kt)("td",{parentName:"tr",align:null},"An alternate from name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replyToAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"An alternate reply-to address.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replyToName"),(0,r.kt)("td",{parentName:"tr",align:null},"An alternate reply-to name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"templateId"),(0,r.kt)("td",{parentName:"tr",align:null},"The templateId of the SendGrid template to use for this message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"categories"),(0,r.kt)("td",{parentName:"tr",align:null},"Additional category tags for this email.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attachments"),(0,r.kt)("td",{parentName:"tr",align:null},"File attachments.")))),(0,r.kt)("h3",{id:"dyanmic-template-parameters"},"Dyanmic Template Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dynamicData"),(0,r.kt)("td",{parentName:"tr",align:null},"Dynamic email data.")))),(0,r.kt)("h3",{id:"htmlplain-text-template-parameters"},"HTML/plain-text Template Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useHtml"),(0,r.kt)("td",{parentName:"tr",align:null},"Should display email contents in html.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subject"),(0,r.kt)("td",{parentName:"tr",align:null},"The email subject")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"The email body")))),(0,r.kt)("h3",{id:"legacy-template-parameters"},"Legacy Template Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"substitutions"),(0,r.kt)("td",{parentName:"tr",align:null},"Substitutions to use in the specified template. Only valid if template is used.")))),(0,r.kt)("h3",{id:"api-summary"},"API Summary"),(0,r.kt)("h3",{id:"send-mail"},"Send Mail"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/mail/sendbasicemail"},"SendBasicEmail")," - simplified send an email to a profile id"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/mail/sendadvancedemail"},"SendAdvancedEmail")," - send an email with to a profile id"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/mail/sendadvancedemailbyaddress"},"SendAdvancedEmailByAddress")," - send an email to an email address")),(0,r.kt)(o,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);