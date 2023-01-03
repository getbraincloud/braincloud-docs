"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[65999],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),f=a,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||l;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},85611:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"Release 1.8.3",date:"2014-10-13",tags:["release-history"]},o=void 0,i={permalink:"/braincloud-apiref/release/2014/10/13/release-1-8-3",source:"@site/release/2014-10-13-release-1-8-3/index.md",title:"Release 1.8.3",description:"We're pleased to announce the availability\xa0of brainCloud 1.8.3!",date:"2014-10-13T00:00:00.000Z",formattedDate:"October 13, 2014",tags:[{label:"release-history",permalink:"/braincloud-apiref/release/tags/release-history"}],readingTime:.755,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Release 1.8.3",date:"2014-10-13",tags:["release-history"]},prevItem:{title:"Release 1.9.0",permalink:"/braincloud-apiref/release/2014/10/27/release-1-9-0"},nextItem:{title:"Release 1.8.2",permalink:"/braincloud-apiref/release/2014/09/29/release-1-8-2"}},s={authorsImageUrls:[]},p=[],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We're pleased to announce the availability\xa0of ",(0,a.kt)("strong",{parentName:"p"},"brainCloud 1.8.3"),"!"),(0,a.kt)("p",null,"New features in this release include:"),(0,a.kt)("p",null,"API Features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Google Play Store IAP Receipt Validation"),"\xa0- clients can now validate IAP receipts from the Google Play Store."),(0,a.kt)("li",{parentName:"ul"},"Misc fixes and improvements")),(0,a.kt)("p",null,"Portal Features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"One Way Match Multiplayer Monitoring"),"\xa0- new page to view the multiplayer match state and logs. Super useful for debugging!"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Global Monitoring")," - added a number of handy ways to sort/filter logs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Import/Export")," - now includes all cloud scripts and S3 files for the game."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cloud Scripts")," - can now define test parameters per script"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Player Monitoring Log")," - got a facelift!"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Game Config")," - added a max concurrent sessions parameter to control how many concurrent sessions a user can have running"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Notifications")," - now able to define templates and send to users"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Segments")," - added additional criteria"),(0,a.kt)("li",{parentName:"ul"},"Misc fixes and improvements")))}c.isMDXComponent=!0}}]);