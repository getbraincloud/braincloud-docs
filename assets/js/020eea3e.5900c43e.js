"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[96773],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},48120:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={title:"Release 3.9.0",date:"2018-10-04",tags:["release-history"]},l=void 0,o={permalink:"/braincloud-apiref/release/2018/10/04/release-3-9-0",source:"@site/release/2018-10-04-release-3-9-0/index.md",title:"Release 3.9.0",description:"brainCloud 3.9 is here! Check out the new hotness!",date:"2018-10-04T00:00:00.000Z",formattedDate:"October 4, 2018",tags:[{label:"release-history",permalink:"/braincloud-apiref/release/tags/release-history"}],readingTime:10.215,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Release 3.9.0",date:"2018-10-04",tags:["release-history"]},prevItem:{title:"Release 3.10",permalink:"/braincloud-apiref/release/2018/12/05/release-3-10"},nextItem:{title:"Release 3.8.0 - RTT is here!",permalink:"/braincloud-apiref/release/2018/07/11/release-3-8"}},s={authorsImageUrls:[]},p=[{value:"Release Highlights",id:"release-highlights",level:2},{value:"Online Presence",id:"online-presence",level:3},{value:"Tournament Divisions",id:"tournament-divisions",level:3},{value:"Refactored Currency and In-App Purchase APIs",id:"refactored-currency-and-in-app-purchase-apis",level:3},{value:"Customer Requests",id:"customer-requests",level:3},{value:"Miscellaneous",id:"miscellaneous",level:3},{value:"Portal Changes",id:"portal-changes",level:2},{value:"Design",id:"design",level:3},{value:"Monitoring",id:"monitoring",level:3},{value:"General",id:"general",level:3},{value:"API Changes",id:"api-changes",level:2},{value:"Miscellaneous Changes / Fixes",id:"miscellaneous-changes--fixes",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"brainCloud 3.9 is here! Check out the new hotness!")),(0,n.kt)("h2",{id:"release-highlights"},"Release Highlights"),(0,n.kt)("h3",{id:"online-presence"},"Online Presence"),(0,n.kt)("p",null,"Online Presence allows an app's users to know which of their friends are currently online and available for collaboration."),(0,n.kt)("p",null,"Presence builds upon brainCloud RTT to deliver a rich solution which communicates:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"online status")," - which users (friends, group members) are currently online"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"activity")," - customizable, rich activity data")),(0,n.kt)("p",null,"In addition, presence supports:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"real-time")," notification of status changes"),(0,n.kt)("li",{parentName:"ul"},"ability of subjects to\xa0",(0,n.kt)("em",{parentName:"li"},"appear invisible (i.e. offline)"))),(0,n.kt)("p",null,"For more information, see the ",(0,n.kt)("a",{parentName:"p",href:"/api/capi/presence"},"Presence Service API Reference"),"."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note - Online Presence requires brainCloud RTT.")),(0,n.kt)("h3",{id:"tournament-divisions"},"Tournament Divisions"),(0,n.kt)("p",null,"brainCloud already allows games to increase player engagement through global tournaments, which reward prizes (currency, xp, etc.) to users for their play in recurring and/or adhoc tournaments."),(0,n.kt)("p",null,"Unfortunately, the lure of tournaments diminish as the number of participants grow and the player's chance of winning decreases. It is tough to motivate players when they need to rank at the top of a leaderboard with thousands of players."),(0,n.kt)("p",null,"That is where ",(0,n.kt)("em",{parentName:"p"},"Divisions")," come in. Divisions horizontally divide your players into separate leaderboards (which we call division instances) of a set size - say 100 players each."),(0,n.kt)("p",null,"The advantages are significant:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Greater engagement")," - players are playing against a smaller set of opponents, and are more motivated because they have a greater chance of winning"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Greater control")," - there is a greater ability to tune the risk / reward structure of the contest, since the numbers are constrained"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Greater liquidity")," - divisions hide the actual size of your tournament pool, which can be advantageous when your app is still growing")),(0,n.kt)("p",null,"For more information, see the new ",(0,n.kt)("em",{parentName:"p"},"Division")," APIs in the ",(0,n.kt)("a",{parentName:"p",href:"/api/capi/tournament"},"Tournament Service API Reference"),"."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note - Divisions are available to Business Plan customers and above.")),(0,n.kt)("h3",{id:"refactored-currency-and-in-app-purchase-apis"},"Refactored Currency and In-App Purchase APIs"),(0,n.kt)("p",null,"We have completely refactored the Currency, Purchase, and Product / Pricing / Promotions APIs that were previously jammed together in our old Product Service."),(0,n.kt)("p",null,"We've created two shiny new services to contain the new goodness:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AppStore Service")," ","-"," houses the new purchase and Product / Pricing / Promotions APIs. The Purchase APIs have been completely re-designed for the new service."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"VirtualCurrency Service")," ","-"," handles all the currency APIs (other than the move, the APIs are barely changed).")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Have no worries - we will ensure that the legacy ",(0,n.kt)("strong",{parentName:"em"},"Product Service")," continues to work until ",(0,n.kt)("strong",{parentName:"em"},"July 1, 2020"),", but we strongly suggest that new apps move to the new APIs now, and older apps migrate when they can.")),(0,n.kt)("p",null,"For more information, see the new ",(0,n.kt)("a",{parentName:"p",href:"/api/capi"},"AppStore Service")," and ",(0,n.kt)("a",{parentName:"p",href:"/api/capi/virtualcurrency"},"VirtualCurrency Service")," API References."),(0,n.kt)("h3",{id:"customer-requests"},"Customer Requests"),(0,n.kt)("p",null,"We have also added a handful of features to satisfy key customer requests. Hopefully you'll find yours here!"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},(0,n.kt)("strong",{parentName:"em"},"Global Pre-hooks")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You can now set up a single pre-hook that gets invoked before any API call - which is especially useful if you want to significantly restrict the calls that can be made from the client, without having to individually configure the hook for each service + operation combination."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},(0,n.kt)("strong",{parentName:"em"},"Global Properties")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"New JSON support")," ","-"," you can now directly add/edit JSON in your properties!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Deployment Enhancements")," ","-"," you can now preserve the values of select Global Properties though deploys. This is especially useful if you need to accomodate alternate property values in development vs. production, for example. ",(0,n.kt)("em",{parentName:"li"},"(Admittedly, using a JSON structure for the value, indexed by AppId is a decent solution for that as well!)")," "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Facebook")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"We've updated our Facebook libraries to support ",(0,n.kt)("strong",{parentName:"li"},"Graph API v 2.8")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Improved Script Engine")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Turns out our cloud code implementation had an issue where objects being passed and returned from scripts were being set to ",(0,n.kt)("em",{parentName:"li"},"read-only")," - even though they were copies. This resulted in issues invoking certain methods on the objects, and of course not being able to modify them without performing another deep-copy within your script. This has been resolved. This result is fully back-wards compatible.")))),(0,n.kt)("h3",{id:"miscellaneous"},"Miscellaneous"),(0,n.kt)("p",null,"Last but not least, we have a few more improvements under-the-hood:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Improved Cloud Code performance",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"we've improved the caching of cloud code scripts for even better performance!"))),(0,n.kt)("li",{parentName:"ul"},"Improved Leaderboard caching",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"as part of our Tournament Division work, we improved the caching of leaderboard configuration data. The improvement will be most noticeable for apps with lots of leaderboards."))),(0,n.kt)("li",{parentName:"ul"},"Improved Design Portal performance",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"We've been reworking our core Design Portal tech. You should notice improved zippiness all around when using the portal!")))),(0,n.kt)("h2",{id:"portal-changes"},"Portal Changes"),(0,n.kt)("p",null,"We have made the following portal changes:"),(0,n.kt)("h3",{id:"design"},"Design"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Core App Info | Application IDs"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added a new ",(0,n.kt)("em",{parentName:"li"},"Bundle Id")," field in Apple platform settings, which if filled in, is used to perform additional receipt validation in the new ",(0,n.kt)("strong",{parentName:"li"},"AppStore Service.")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Core App Info | Advanced Settings"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A new compatibility flag, ",(0,n.kt)("em",{parentName:"li"},"[x]"," Enable legacy Purchase Collection support,")," has been\xa0added. It defaults to\xa0",(0,n.kt)("em",{parentName:"li"},"enabled")," for both new and existing apps.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apps with existing purchases should keep this enabled - it will allow the new purchase APIs and old purchase APIs to coexist nicely"),(0,n.kt)("li",{parentName:"ul"},"New apps can feel free to disable this and use the new APIs only."))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cloud Code | API Hooks"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"We have added new ",(0,n.kt)("em",{parentName:"li"},"Dispatcher")," and ",(0,n.kt)("em",{parentName:"li"},"S2SDispatcher")," support for pre-hooks."),(0,n.kt)("li",{parentName:"ul"},"Configuring a pre-hook against those services will cause the pre-hook script to run before any ",(0,n.kt)("em",{parentName:"li"},"client")," or ",(0,n.kt)("em",{parentName:"li"},"S2S")," call respectively."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Custom Config | Global Properties"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"When creating / editing a property, you can now configure the editor for ",(0,n.kt)("em",{parentName:"li"},"String")," or ",(0,n.kt)("em",{parentName:"li"},"JSON")," editing.\xa0Note that the underlying value is still stored as a ",(0,n.kt)("em",{parentName:"li"},"String"),"."),(0,n.kt)("li",{parentName:"ul"},"You can also choose whether the property value should be protected from being overwritten during deploys. This is useful for values that are set uniquely per brainCloud app instance (i.e. the profileId of a system user, a to tell the client that this is a prod vs. debug instance, that sort of thing)."),(0,n.kt)("li",{parentName:"ul"},"Note that during deployment, the deploy process obeys the configuration specified in the ",(0,n.kt)("em",{parentName:"li"},"source")," app, not the\xa0",(0,n.kt)("em",{parentName:"li"},"target")," app."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Leaderboards | Leaderboard Configs"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You can now flag tournament-enabled leaderboards to act as ",(0,n.kt)("em",{parentName:"li"},"templates")," for Divisions. Template tournament/leaderboards do not appear in the regular leaderboard lists, and cannot be joined."),(0,n.kt)("li",{parentName:"ul"},"You can also now quickly clone leaderboards by choosing the\xa0",(0,n.kt)("em",{parentName:"li"},"Duplicate")," option from the action menu."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Loaderboards | Tournament Templates"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Quickly clone tournament templates by choosing the ",(0,n.kt)("em",{parentName:"li"},"Duplicate")," option from the action menu."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Leaderboards | Division Sets"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Jump into our new ",(0,n.kt)("em",{parentName:"li"},"Tournament Divisions")," feature by defining ",(0,n.kt)("em",{parentName:"li"},"Division Sets"),"!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Division Sets")," allow you to break tournaments into random sub-tournaments for greater engagement."),(0,n.kt)("li",{parentName:"ul"},"To configure a division:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"First create a tournament-enabled Leaderboard to act as a template (setting the template flag to enabled)"),(0,n.kt)("li",{parentName:"ol"},"Then create the division set, selecting the Leaderboard template and configuring the maximum # of players per division instance"),(0,n.kt)("li",{parentName:"ol"},"Use the new ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/tournament"},"Tournament Division APIs")," to join the tournament!"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Marketplace | Products"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"We have made a bunch of under-the-hood changes to allow for easier integration of new AppStores in the future"),(0,n.kt)("li",{parentName:"ul"},"The screen should work largely as before - let us know if you experience any issues!"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Messaging | Presence"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New screen for configuring the new ",(0,n.kt)("em",{parentName:"li"},(0,n.kt)("strong",{parentName:"em"},"Presence"))," service"),(0,n.kt)("li",{parentName:"ul"},"Once enabled, any RTT connection established by a client will contain basic presence info (i.e. online/offline) as well"),(0,n.kt)("li",{parentName:"ul"},"From there, rich activity and real-time updates can be enabled as well")))),(0,n.kt)("h3",{id:"monitoring"},"Monitoring"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Global Monitoring | Leaderboards"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'We have added a "Choose a division..." option to the Leaderboard selection menu (for apps that are using Divisions). Use it to view the leaderboard results for a Division instance.'),(0,n.kt)("li",{parentName:"ul"},"Rationale - division instances are hidden from the Leaderboard lists (because there may be hundreds of them)."),(0,n.kt)("li",{parentName:"ul"},"Pro-tip - You can use the API explorer to find the division instances related to a particular player",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Monitoring | User Monitoring"),", and find the player in question"),(0,n.kt)("li",{parentName:"ul"},"If the ",(0,n.kt)("em",{parentName:"li"},"Live Lock")," banner is showing, click the lock to unlock it"),(0,n.kt)("li",{parentName:"ul"},"Click on\xa0",(0,n.kt)("strong",{parentName:"li"},"[Login as User]")," to login as this user in the API explorer"),(0,n.kt)("li",{parentName:"ul"},"Choose the ",(0,n.kt)("em",{parentName:"li"},"Tournament service"),", and the ",(0,n.kt)("em",{parentName:"li"},"GetMyDivisions() operation,")," and click\xa0",(0,n.kt)("em",{parentName:"li"},(0,n.kt)("strong",{parentName:"em"},"[Run]"),".")),(0,n.kt)("li",{parentName:"ul"},"Voila - a list of the division ids instances for that player. Note that each id contains both the division set code, and the instance id (a number)."))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"User Monitoring"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"We've added a new ",(0,n.kt)("strong",{parentName:"li"},"Recent Users")," tab to make it easier to find users that have recently logged into your app"),(0,n.kt)("li",{parentName:"ul"},"Note that this is a log, so you may see the same user listed multiple times (only really noticeable at low activity counts)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"User Monitoring | Transactions"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Updated to support the new purchase services and transaction formats"),(0,n.kt)("li",{parentName:"ul"},"You can now view purchase receipts, and even ",(0,n.kt)("em",{parentName:"li"},"delete")," purchases if you would like (useful during testing)")))),(0,n.kt)("h3",{id:"general"},"General"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Improved Portal Tech"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"We've been doing some work under-the-covers to improve our Portal technology"),(0,n.kt)("li",{parentName:"ul"},"The first thing you should notice is a performance boost - yay!"),(0,n.kt)("li",{parentName:"ul"},"You may also notice a few CSS-related bugs. Feel free to report those so that we can stamp them out!")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"api-changes"},"API Changes"),(0,n.kt)("p",null,"The following changes/additions have affected the\xa0brainCloud\xa0API:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AppStore Service"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/appstore"},"AppStore Service")," for querying products / pricing / promotions, and performing in-app purchases."),(0,n.kt)("li",{parentName:"ul"},"The product / pricing / promotions APIs are identical to the Product Service versions - but the IAP APIs are all new!"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Group Service"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Users can now call ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/group/rejectgroupjoinrequest"},"RejectGroupJoinRequest()")," to reject a join request that they have made"),(0,n.kt)("li",{parentName:"ul"},"New APIs for managing groups: ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/group/setgroupopen"},"SetGroupOpen()")," and ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/group/updategroupacl"},"UpdateGroupACL()")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Leaderboard Service"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New versioned social leaderboard calls - ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/leaderboard/getsocialleaderboardbyversion"},"GetSocialLeaderboardByVersion()"),", ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/leaderboard/getplayerssocialleaderboardbyversion"},"GetPlayersSocialLeaderboardByVersion()")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Product Service"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Important: The Product Service is being ",(0,n.kt)("strong",{parentName:"em"},"deprecated")," in\xa0favour of the new AppStore and\xa0VirtualCurrency services.")),(0,n.kt)("li",{parentName:"ul"},"The service and its APIs will continue to work until ",(0,n.kt)("strong",{parentName:"li"},"July 1st, 2020"),"."),(0,n.kt)("li",{parentName:"ul"},"There is a new compatibility flag in the portal under ",(0,n.kt)("strong",{parentName:"li"},"Design | Core App Info | Advanced Settings"),", which controls how purchase transactions are written to the database. Keep\xa0","[x]"," Enable legacy Purchase Collection support checked if your app uses the old Product APIs, or a mixture of the old ",(0,n.kt)("strong",{parentName:"li"},"Product"),"and new ",(0,n.kt)("strong",{parentName:"li"},"AppStore"),"APIs. New apps that will only use the new AppStore APIs can feel free to clear that flag."),(0,n.kt)("li",{parentName:"ul"},"Although deprecated, we did add the missing cloud-code version of the ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/product/verifyitunesreceipt"},"VerifyItunesReceipt()")," back to the service (for those who need it!)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Presence Service"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"There is an all-new ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/presence"},"Presence")," service. Check it out!"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tournament Service"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New Division Set calls have been added - mostly used when querying and joining a Division Set instance."),(0,n.kt)("li",{parentName:"ul"},"The new calls are: ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/tournament/getdivisioninfo"},"GetDivisionInfo()"),", ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/tournament/getmydivisions"},"GetMyDivisions()"),", ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/tournament/joindivision"},"JoinDivision()")," and ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/tournament/leavedivisioninstance"},"LeaveDivisionInstance()")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"VirtualCurrency Service"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/virtualcurrency"},"VirtualCurrency Service")," for currency operations. The operations are largely the same, with a bit of clean-up.")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"miscellaneous-changes--fixes"},"Miscellaneous Changes / Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated libraries",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"All libraries have been updated with the latest API enhancements (with a few exceptions). Go get 'em!",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"C# / Unity - fully up-to-date for 3.9"),(0,n.kt)("li",{parentName:"ul"},"Unreal - fully up-to-date for 3.9"),(0,n.kt)("li",{parentName:"ul"},"C++ - fully up-to-date for 3.9 (though UWP and Nuget packages are outstanding)"),(0,n.kt)("li",{parentName:"ul"},"Java - fully up-to-date for 3.9"),(0,n.kt)("li",{parentName:"ul"},"JavaScript - fully up-to-date for 3.9"),(0,n.kt)("li",{parentName:"ul"},"Objective-C / Swift - fully up-to-date for 3.9"),(0,n.kt)("li",{parentName:"ul"},"AS3 - does not include RTT or RTT-related features (Chat, Presence, Lobbies) but otherwise supports all 3.9 APIs"))))),(0,n.kt)("li",{parentName:"ul"},"Documentation updates",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"API references have been updated for 3.9"))),(0,n.kt)("li",{parentName:"ul"},"Important Fixes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"BCLD-3513 - Calling RemoveMember on a lobby instance that only has 1 member causes a null pointer exception"),(0,n.kt)("li",{parentName:"ul"},"BCLD-3388 - When receiving a peer currency reward from an xp upgrade, the peer currency balances were not being returned"),(0,n.kt)("li",{parentName:"ul"},"BCLD-3321 - Wrong error code returned for invalid lobby id"),(0,n.kt)("li",{parentName:"ul"},"BCLD-3265 - Unreal and objective-C - fix set profileId after merge call"),(0,n.kt)("li",{parentName:"ul"},"BCLD-3348 - 'View tutorials' link in Portal was broken"),(0,n.kt)("li",{parentName:"ul"},"BCLD-3217 - Improved RETRY and PACKET","_","IN","_","PROGRESS handling for Unity client library"),(0,n.kt)("li",{parentName:"ul"},"BCLD-3211 - Improved\xa0RETRY and PACKET","_","IN","_","PROGRESS handling for JavaScript client library"))),(0,n.kt)("li",{parentName:"ul"},"Plus miscellaneous fixes and performance enhancements...")))}m.isMDXComponent=!0}}]);