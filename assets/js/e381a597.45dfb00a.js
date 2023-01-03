"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[27546],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},48335:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Release 2.26.0",date:"2016-07-13",tags:["release-history"]},o=void 0,l={permalink:"/braincloud-apiref/release/2016/07/13/release-2-26-0",source:"@site/release/2016-07-13-release-2-26-0/index.md",title:"Release 2.26.0",description:"2.26\xa0is a smaller release\xa0that delivers\xa0some handy, customer-requested features. Take a look -\xa0there is something to love for everyone!",date:"2016-07-13T00:00:00.000Z",formattedDate:"July 13, 2016",tags:[{label:"release-history",permalink:"/braincloud-apiref/release/tags/release-history"}],readingTime:3.715,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Release 2.26.0",date:"2016-07-13",tags:["release-history"]},prevItem:{title:"Release 3.0.0",permalink:"/braincloud-apiref/release/2016/08/29/release-3-0-0"},nextItem:{title:"Release 2.25.0",permalink:"/braincloud-apiref/release/2016/06/28/release-2-25-0"}},s={authorsImageUrls:[]},p=[{value:"WebHook Authentication",id:"webhook-authentication",level:2},{value:"Disabled Reason",id:"disabled-reason",level:2},{value:"User Online Status",id:"user-online-status",level:2},{value:"Clone Scripts",id:"clone-scripts",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.26"),"\xa0is a smaller release\xa0that delivers\xa0some handy, customer-requested features. Take a look -\xa0there is something to love for everyone!"),(0,r.kt)("h1",{id:"release-highlights"},"Release Highlights"),(0,r.kt)("h2",{id:"webhook-authentication"},"WebHook Authentication"),(0,r.kt)("p",null,"Some of you are looking to use our new ",(0,r.kt)("strong",{parentName:"p"},"WebHooks")," feature for integration with systems like ",(0,r.kt)("em",{parentName:"p"},"Photon"),", that can benefit from leveraging brainCloud authentication."),(0,r.kt)("p",null,"To enable this, we have added a new Cloud Code Bridge method: ",(0,r.kt)("a",{parentName:"p",href:"/api/cc/bridge/getsessionforsessionidandprofileid"},(0,r.kt)("inlineCode",{parentName:"a"},"GetSessionForSessionIdAndProfileId()")),". Using this API you can retrieve the current session for an active user, confirm that it is valid, and even take action within that user\u2019s context."),(0,r.kt)("h2",{id:"disabled-reason"},"Disabled Reason"),(0,r.kt)("p",null,"We\u2019ve added the ability to custom configure information to be sent to your client apps should you choose to temporarily disable your app. The info is in the form of a snippet of custom JSON data that will be returned along with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authentication()")," rejection."),(0,r.kt)("p",null,"For more details, consult the ",(0,r.kt)("a",{parentName:"p",href:"/api/capi/authentication"},"Authentication")," section of our API Reference."),(0,r.kt)("h2",{id:"user-online-status"},"User Online Status"),(0,r.kt)("p",null,"We\u2019ve added a new method that you can use to query and report the online status of other users in the system. The method is called ",(0,r.kt)("a",{parentName:"p",href:"/api/capi/friend/getusersonlinestatus"},(0,r.kt)("inlineCode",{parentName:"a"},"GetUsersOnlineStatus()"))," and works with an array of profile ids. Just the sort of thing you would want to gather the online status of a set of Group / Clan members!"),(0,r.kt)("h2",{id:"clone-scripts"},"Clone Scripts"),(0,r.kt)("p",null,"We\u2019ve noticed that some devs, when creating a major revision to a Cloud Code script, like to begin by \u201ccloning\u201d it first - but we didn\u2019t give you an easy way to do that - ",(0,r.kt)("em",{parentName:"p"},"until now"),"!"),(0,r.kt)("p",null,"Simply choose ",(0,r.kt)("strong",{parentName:"p"},"\u201cDuplicate\u201d")," from the new Scripts action menu, and voila!, you are on your way!"),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"portal-changes"},"Portal Changes"),(0,r.kt)("p",null,"We\u2019ve made the following portal changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Design | Core App Info | App Ids"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Google Services")," section - we now indicate whether a p12 certificate has been already uploaded."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Design | Core App Info | Advanced Settings"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"There\u2019s a new button, ",(0,r.kt)("strong",{parentName:"li"},"[Edit Disabled Reason]"),", up by the ",(0,r.kt)("strong",{parentName:"li"},"[x]"," App Enabled")," box, that allows you to edit the ",(0,r.kt)("em",{parentName:"li"},"JSON")," object that will be returned when your app is disabled."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Design | Cloud Code | Scripts"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The Script List functions have been organized into a new ",(0,r.kt)("em",{parentName:"li"},"action menu"),", and includes the new ",(0,r.kt)("em",{parentName:"li"},"Duplicate")," feature!"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Design | Custom Config | Files"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The MD5 for a file is now displayed if you hover over its filename."),(0,r.kt)("li",{parentName:"ul"},"Troubleshooting: If for some reason the MD5 is not present, click ",(0,r.kt)("strong",{parentName:"li"},"[Refresh File List]")," to retrieve it."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Monitoring | User Monitoring"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"All User Monitoring screens now bring up the ",(0,r.kt)("em",{parentName:"li"},"New Users")," list if a user has not already been selected"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Admin | Home"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"There\u2019s a new \u201cgear\u201d button in the Apps section that you can use to jump to the Apps screen"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"General"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We\u2019ve fixed an error in the portal that mangled international characters if you tried to apply them to a user\u2019s name, push notification message, etc.")))),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"api-changes"},"API Changes"),(0,r.kt)("p",null,"The following changes/additions have affected the brainCloud API:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cloud Code Bridge"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The new ",(0,r.kt)("a",{parentName:"li",href:"/api/cc/bridge/getsessionforsessionidandprofileid"},(0,r.kt)("inlineCode",{parentName:"a"},"GetSessionForSessionIdAndProfileId()"))," method retrieves the specified active session object, if it is associated with the provided ",(0,r.kt)("inlineCode",{parentName:"li"},"profileId"),". This can be used to validate that the user associated with the ",(0,r.kt)("inlineCode",{parentName:"li"},"profileId")," ",(0,r.kt)("em",{parentName:"li"},"has")," indeed successfully authenticated with brainCloud."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Friend"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The new ",(0,r.kt)("a",{parentName:"li",href:"/api/capi/friend/getusersonlinestatus"},(0,r.kt)("inlineCode",{parentName:"a"},"GetUsersOnlineStatus()"))," method can be used to retrieve the online status of the provided list of users."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Global Statistics")," and ",(0,r.kt)("strong",{parentName:"li"},"User")," ","[Player]"," ",(0,r.kt)("strong",{parentName:"li"},"Statistics"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"New ",(0,r.kt)("inlineCode",{parentName:"li"},"ProcessStatistics()")," methods have been added to both the ",(0,r.kt)("a",{parentName:"li",href:"/api/capi/globalstats/processstatistics"},(0,r.kt)("inlineCode",{parentName:"a"},"GlobalStatistics"))," and ",(0,r.kt)("a",{parentName:"li",href:"/api/capi/playerstats/processstatistics"},(0,r.kt)("inlineCode",{parentName:"a"},"PlayerStatistics"))," services that leverage the internal brainCloud ",(0,r.kt)("a",{parentName:"li",href:"/api/appendix/statisticsgrammar"},"Statistics Grammar"),", allowing for the batch processing of complicated stats operations to be carried out by the server."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Identity"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The various ",(0,r.kt)("a",{parentName:"li",href:"/api/capi/identity"},"Identity")," methods (\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"Attach*()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Detach*()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Merge*()"),", etc. ) are now available from cloud code.")))),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"miscellaneous-changes--fixes"},"Miscellaneous Changes / Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Important Fixes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CDN robustness - we\u2019ve improved our algorithms to better handle updating the cached files in the CDN when new Custom Files are uploaded to the portal."),(0,r.kt)("li",{parentName:"ul"},"Identifier syntax - The web portal now ensures that Global Properties and Cloud Code Script names adhere to the brainCloud identifier conventions of only letters, numbers and/or underscores"))),(0,r.kt)("li",{parentName:"ul"},"Updated libraries",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"All libraries have been updated with the latest API enhancements. Go get \u2019em!"))),(0,r.kt)("li",{parentName:"ul"},"Documentation updates",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We continue to iterate and improve our new API reference"),(0,r.kt)("li",{parentName:"ul"},"There is a new tutorial for ",(0,r.kt)("a",{parentName:"li",href:"/learn/sdk-tutorials/unreal-tutorials/building-the-plugin-for-older-versions-of-unreal/"},"Building the brainCloud Plugin for older versions of Unreal")))),(0,r.kt)("li",{parentName:"ul"},"Plus miscellaneous fixes and performance enhancements\u2026")))}d.isMDXComponent=!0}}]);