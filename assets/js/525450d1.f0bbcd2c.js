"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[22895],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},s="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(a),d=r,f=s["".concat(c,".").concat(d)]||s[d]||b[d]||n;return a?o.createElement(f,i(i({ref:t},u),{},{components:a})):o.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},35539:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=a(87462),r=(a(67294),a(3905));const n={title:"Authentication - Facebook",date:"2015-08-07"},i=void 0,l={unversionedId:"learn/portal-tutorials/authentication-facebook/index",id:"learn/portal-tutorials/authentication-facebook/index",title:"Authentication - Facebook",description:"In order for your app to connect with\xa0Facebook, you will need to do the steps below.",source:"@site/docs/learn/5_portal-tutorials/authentication-facebook/index.md",sourceDirName:"learn/5_portal-tutorials/authentication-facebook",slug:"/learn/portal-tutorials/authentication-facebook/",permalink:"/braincloud-apiref/learn/portal-tutorials/authentication-facebook/",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/learn/5_portal-tutorials/authentication-facebook/index.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672634083,formattedLastUpdatedAt:"Jan 2, 2023",frontMatter:{title:"Authentication - Facebook",date:"2015-08-07"},sidebar:"learnSidebar",previous:{title:"Authentication - Apple",permalink:"/braincloud-apiref/learn/portal-tutorials/authentication-apple/"},next:{title:"Authentication - Google (OpenID)",permalink:"/braincloud-apiref/learn/portal-tutorials/authentication-google-openid/"}},c={},p=[{value:"Facebook Authentication",id:"facebook-authentication",level:3}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In order for your app to connect with\xa0Facebook, you will need to do the steps below."),(0,r.kt)("h3",{id:"facebook-authentication"},"Facebook Authentication"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to the brainCloud Portal and open the Design | Core App Info | Application IDs page  ","  ",(0,r.kt)("a",{target:"_blank",href:a(20506).Z},(0,r.kt)("img",{alt:"brainCloud",src:a(32081).Z,width:"531",height:"486"}))),(0,r.kt)("li",{parentName:"ul"},"Click the Facebook icon  ","  ",(0,r.kt)("a",{target:"_blank",href:a(16661).Z},(0,r.kt)("img",{alt:"brainCloud",src:a(4e4).Z,width:"712",height:"207"}))),(0,r.kt)("li",{parentName:"ul"},"Log into the ",(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com"},"Facebook Developer Portal")," for your app"),(0,r.kt)("li",{parentName:"ul"},'Collect the "App ID" and "App Secret" from the Facebook Developer Portal Dashboard page  ',"  ",(0,r.kt)("a",{target:"_blank",href:a(70800).Z},(0,r.kt)("img",{alt:"brainCloud",src:a(43030).Z,width:"729",height:"165"}))),(0,r.kt)("li",{parentName:"ul"},"Go back to the brainCloud portal and fill in the following information  ","  ",(0,r.kt)("a",{target:"_blank",href:a(10399).Z},(0,r.kt)("img",{alt:"brainCloud",src:a(70229).Z,width:"986",height:"372"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Facebook App ID - The App ID from your Facebook app dashboard page"),(0,r.kt)("li",{parentName:"ul"},"Facebook Secret - The Secret from your Facebook app dashboard page"))),(0,r.kt)("li",{parentName:"ul"},'Ensure that "Facebook" is turned on as a Platform in your Design | Core App Info | Platforms page  ',"  ",(0,r.kt)("a",{target:"_blank",href:a(42783).Z},(0,r.kt)("img",{alt:"brainCloud",src:a(40921).Z,width:"556",height:"392"})),"  ",(0,r.kt)("a",{target:"_blank",href:a(98438).Z},(0,r.kt)("img",{alt:"brainCloud",src:a(58319).Z,width:"676",height:"405"}))),(0,r.kt)("li",{parentName:"ul"},"You should now be able to use Facebook Authentication in your app. For further information in regard to implementing Facebook Authentication, refer to\xa0",(0,r.kt)("a",{parentName:"li",href:"http://help.getbraincloud.com/en/articles/4668095-authenticate-facebook"},"this linked article"),"\xa0in our knowledge base help center.")))}s.isMDXComponent=!0},70800:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/files/2015-08-07_14-14-05-56499fee446abb7e58aa188483eb2626.png"},20506:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/files/brainCloud_fbAuth_1-082b70ec05c87be2e9e12113e6de2005.jpg"},16661:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/files/brainCloud_fbAuth_2-4c4b21b87687bbf64cd81fa8e2450a04.jpg"},10399:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/files/brainCloud_fbAuth_3-8c8e5bfb4972fd0deacd1d22db8121df.jpg"},42783:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/files/brainCloud_fbAuth_4-d4d230da480619b3c5241bf6489e8ba3.jpg"},98438:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/files/brainCloud_fbAuth_5-83fbc9f207e12b3fdc821c377747a81c.jpg"},43030:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/2015-08-07_14-14-05-56499fee446abb7e58aa188483eb2626.png"},32081:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/brainCloud_fbAuth_1-082b70ec05c87be2e9e12113e6de2005.jpg"},4e4:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/brainCloud_fbAuth_2-4c4b21b87687bbf64cd81fa8e2450a04.jpg"},70229:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/brainCloud_fbAuth_3-8c8e5bfb4972fd0deacd1d22db8121df.jpg"},40921:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/brainCloud_fbAuth_4-d4d230da480619b3c5241bf6489e8ba3.jpg"},58319:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/brainCloud_fbAuth_5-83fbc9f207e12b3fdc821c377747a81c.jpg"}}]);