"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[75267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={title:"Getting Started With the Online Subsystem",date:"2015-11-05"},l=void 0,o={unversionedId:"learn/sdk-tutorials/unreal-tutorials/getting-started-with-the-online-subsystem/index",id:"learn/sdk-tutorials/unreal-tutorials/getting-started-with-the-online-subsystem/index",title:"Getting Started With the Online Subsystem",description:"NOTE:\xa0 OnlineSubsystem support is still in-development",source:"@site/docs/learn/6_sdk-tutorials/unreal-tutorials/getting-started-with-the-online-subsystem/index.md",sourceDirName:"learn/6_sdk-tutorials/unreal-tutorials/getting-started-with-the-online-subsystem",slug:"/learn/sdk-tutorials/unreal-tutorials/getting-started-with-the-online-subsystem/",permalink:"/braincloud-apiref/learn/sdk-tutorials/unreal-tutorials/getting-started-with-the-online-subsystem/",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/learn/6_sdk-tutorials/unreal-tutorials/getting-started-with-the-online-subsystem/index.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672679892,formattedLastUpdatedAt:"Jan 2, 2023",frontMatter:{title:"Getting Started With the Online Subsystem",date:"2015-11-05"},sidebar:"learnSidebar",previous:{title:"Getting Started With C++",permalink:"/braincloud-apiref/learn/sdk-tutorials/unreal-tutorials/getting-started-with-cpp/"},next:{title:"Setting Up The brainCloud Plugin",permalink:"/braincloud-apiref/learn/sdk-tutorials/unreal-tutorials/setting-up-the-braincloud-plugin/"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Initialization",id:"initialization",level:3},{value:"Using OnlineSubsystem",id:"using-onlinesubsystem",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:\xa0")," OnlineSubsystem support is still in-development"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Created a brainCloud Portal account"),(0,i.kt)("li",{parentName:"ul"},"Created a game in the brainCloud Portal. If you need help with this step refer to the ",(0,i.kt)("a",{parentName:"li",href:"/learn/sdk-tutorials/unity-tutorials/unity-getting-started/"},"Unity Tutorial #1 video"),"."),(0,i.kt)("li",{parentName:"ul"},"An Unreal project with the brainCloud plugin installed as described ",(0,i.kt)("a",{parentName:"li",href:"/learn/sdk-tutorials/unreal-tutorials/setting-up-the-braincloud-plugin/"},"here")),(0,i.kt)("li",{parentName:"ul"},"Basic experience with Unreal C++, see the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unrealengine.com/latest/INT/Programming/Introduction/index.html"},"Unreal documentation")," for help")),(0,i.kt)("h3",{id:"initialization"},"Initialization"),(0,i.kt)("p",null,"The first\xa0step is to create the BrainCloudConfig.ini file that the Subsystem will read in order to automatically initialize brainCloud. Note that this step is optional. \xa0If you wish you can manually initialize the Client through Blueprint or native C++ instead by calling the ",(0,i.kt)("a",{parentName:"p",href:"/api/capi/client/initialize"},"BrainCloudClient->Initialize")," function."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the root folder of your\xa0Unreal project (where the *.uproject file is)"),(0,i.kt)("li",{parentName:"ol"},"Open the Config folder"),(0,i.kt)("li",{parentName:"ol"},"Create a new text file and rename it to\xa0BrainCloudConfig.ini (ensure the extension is changed from .txt to .ini, not just named\xa0BrainCloudConfig.ini.txt)"),(0,i.kt)("li",{parentName:"ol"},"Enter the following into the file, replacing the Secret and App ID and version with those of your App:")),(0,i.kt)("p",null,"[BrainCloud.Client]",'\nServerURL = "',(0,i.kt)("a",{parentName:"p",href:"https://sharedprod.braincloudservers.com/dispatcherv2%22"},'https://sharedprod.braincloudservers.com/dispatcherv2"'),"\nSecret = YOUR-APP-SECRET-HERE\nAppID = YOUR-APP-ID-HERE\nVersion = 1.0.0"),(0,i.kt)("h3",{id:"using-onlinesubsystem"},"Using OnlineSubsystem"),(0,i.kt)("p",null,"To learn more about using the Unreal Online Subsystem refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/latest/INT/Programming/Online/index.html"},"official Unreal documentation"),"."))}d.isMDXComponent=!0}}]);