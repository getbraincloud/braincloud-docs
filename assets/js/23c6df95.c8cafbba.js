"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[76222],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,d=p["".concat(l,".").concat(u)]||p[u]||g[u]||s;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},33414:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const s={},i="GetMessagesPage",o={unversionedId:"api/capi/messaging/getmessagespage",id:"api/capi/messaging/getmessagespage",title:"GetMessagesPage",description:"Overview",source:"@site/docs/api/2_capi/messaging/getmessagespage.md",sourceDirName:"api/2_capi/messaging",slug:"/api/capi/messaging/getmessagespage",permalink:"/braincloud-apiref/api/capi/messaging/getmessagespage",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/messaging/getmessagespage.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1673042992,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{},sidebar:"apiSidebar",previous:{title:"GetMessages",permalink:"/braincloud-apiref/api/capi/messaging/getmessages"},next:{title:"GetMessagesPageOffset",permalink:"/braincloud-apiref/api/capi/messaging/getmessagespageoffset"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Context example - search inbox",id:"context-example---search-inbox",level:3},{value:"Context example - search by party",id:"context-example---search-by-party",level:3},{value:"Usage",id:"usage",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Method Parameters",id:"method-parameters",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=m("PartialServop"),g=m("BrowserWindow"),u=m("Tabs"),d=m("TabItem"),b={toc:c};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getmessagespage"},"GetMessagesPage"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Given a json context object, returns a page of messages for this user. Note also returns an encoded context object that is used in the follow-up ",(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"p",href:"/api/capi/messaging/getmessagespageoffset"},"GetMessagesPageOffset"))," api call."),(0,r.kt)("p",null,"Some of the more useful fields for context queries are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgbox"),(0,r.kt)("td",{parentName:"tr",align:null},"The messagbox the message is in")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mbCr"),(0,r.kt)("td",{parentName:"tr",align:null},"The date the message was sent / arrived")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message.from"),(0,r.kt)("td",{parentName:"tr",align:null},"Who the message is from")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message.to"),(0,r.kt)("td",{parentName:"tr",align:null},"Who the message is to")))),(0,r.kt)("h3",{id:"context-example---search-inbox"},"Context example - search inbox"),(0,r.kt)("p",null,'This context searches for all messages in the "inbox", sorts them by creation (i.e. arrival time, newest first) and returns them using the default pagination.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "context": {\n        "searchCriteria": {\n            "msgbox": "inbox"\n        },\n        "sortCriteria": {\n            "mbCr": -1\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"context-example---search-by-party"},"Context example - search by party"),(0,r.kt)("p",null,"This context searches for all messages sent to/from the specified profile, sorts them by creation time, and returns them in batches of 10."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "context": {\n        "searchCriteria": {\n            "$or": [\n               { "message.from": "aProfileId" },\n               { "message.to": "aProfileId" }\n            ]\n        },\n        "sortCriteria": {\n            "mbCr": -1\n        },\n        "pagination": {\n            "rowsPerPage": 10,\n            "pageNumber": 1\n        }\n    }\n}\n')),(0,r.kt)(p,{service_name:"messaging",operation_name:"GET_MESSAGES_PAGE",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(g,{mdxType:"BrowserWindow"},(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(d,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string context = "{\\"pagination\\":{\\"rowsPerPage\\":10,\\"pageNumber\\":1},\\"searchCriteria\\":{\\"msgbox\\":\\"inbox\\",\\"read\\":false},\\"sortCriteria\\":{\\"mbCr\\":1,\\"mbUp\\":-1}}";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.MessagingService.GetMessagesPage(context, successCallback, failureCallback);\n'))),(0,r.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *context = "{\\"pagination\\":{\\"rowsPerPage\\":10,\\"pageNumber\\":1},\\"searchCriteria\\":{\\"msgbox\\":\\"inbox\\",\\"read\\":false},\\"sortCriteria\\":{\\"mbCr\\":1,\\"mbUp\\":-1}}";\n_bc->getMessagingService()->getMessagesPage(context, this);\n'))),(0,r.kt)(d,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *context = @"{\\"pagination\\":{\\"rowsPerPage\\":10,\\"pageNumber\\":1},\\"searchCriteria\\":{\\"msgbox\\":\\"inbox\\",\\"read\\":false},\\"sortCriteria\\":{\\"mbCr\\":1,\\"mbUp\\":-1}}";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc messagingService] getMessagesPage:context\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,r.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String context = "{\\"pagination\\":{\\"rowsPerPage\\":10,\\"pageNumber\\":1},\\"searchCriteria\\":{\\"msgbox\\":\\"inbox\\",\\"read\\":false},\\"sortCriteria\\":{\\"mbCr\\":1,\\"mbUp\\":-1}}";\nthis; // implements IServerCallback\n\n_bc.getMessagingService().getMessagesPage(context, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,r.kt)(d,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var context = {\n    "pagination": {\n        "rowsPerPage": 10,\n        "pageNumber": 1\n    },\n    "searchCriteria": {\n        "msgbox": "inbox",\n        "read": false\n    },\n    "sortCriteria": {\n        "mbCr": 1,\n        "mbUp": -1\n    }\n};\n\n_bc.messaging.getMessagesPage(context, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,r.kt)(d,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var msgProxy = bridge.getMessagingServiceProxy();\n\nvar context = {\n    "pagination": {\n        "rowsPerPage": 10,\n        "pageNumber": 1\n    },\n    "searchCriteria": {\n        "msgbox": "inbox",\n        "read": false\n    },\n    "sortCriteria": {\n        "mbCr": 1,\n        "mbUp": -1\n    }\n};\n\nvar getResult = msgProxy.getMessagesPage( context );\nif ( getResult.status == 200 ) {\n\n    if ( getResult.data.results.count > 0 ) {\n\n        var messages = getResult.data.results.items;\n        var message = {};\n\n        for (i = 0; i < messages.length; i++ ) {\n\n            message = messages[i];\n\n            // Now do something with it!\n\n        }\n    } \n} \n'))),(0,r.kt)(d,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "messaging",\n    "operation": "GET_MESSAGES_PAGE",\n    "data": {\n        "context": {\n            "pagination": {\n                "rowsPerPage": 10,\n                "pageNumber": 1\n            },\n            "searchCriteria": {\n                "msgbox": "inbox",\n                "read": false\n            },\n            "sortCriteria": {\n                "mbCr": 1,\n                "mbUp": -1\n            }\n        }\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJwcm9maWxlSWQiOiIwMDRhN2QwYy00ZTk2LTQ3NGItOTcyYi03Nzk0ZTBlZWM4ZDUifSwic29ydENyaXRlcmlhIjp7Im1iQ3IiOjEsIm1iVXAiOi0xfSwicGFnaW5hdGlvbiI6eyJyb3dzUGVyUGFnZSI6MTAsInBhZ2VOdW1iZXIiOjF9LCJvcHRpb25zIjpudWxsfQ",\n        "results": {\n            "count": 2,\n            "page": 1,\n            "items": [\n                {\n                    "msgbox": "sent",\n                    "msgId": "9bd20345-b274-4d20-912f-fb1c3cb5e458",\n                    "mbVer": 1,\n                    "mbCr": 1530023195326,\n                    "mbUp": 1530023195326,\n                    "read": false,\n                    "message": {\n                        "sentAt": 1530023195324,\n                        "to": [\n                            "004a7d0c-4e96-474b-972b-7794e0eec8d5"\n                        ],\n                        "content": {\n                            "subject": "Testing",\n                            "text": "Test message to me."\n                        }\n                    },\n                    "msVer": 1,\n                    "msgCr": 1530023195325,\n                    "msgUp": 1530023195325\n                },\n                {\n                    "msgbox": "inbox",\n                    "msgId": "9bd20345-b274-4d20-912f-fb1c3cb5e458",\n                    "mbVer": 1,\n                    "mbCr": 1530023195327,\n                    "mbUp": 1530023195327,\n                    "read": false,\n                    "message": {\n                        "sentAt": 1530023195324,\n                        "to": [\n                            "004a7d0c-4e96-474b-972b-7794e0eec8d5"\n                        ],\n                        "content": {\n                            "subject": "Testing",\n                            "text": "Test message to me."\n                        }\n                    },\n                    "msVer": 1,\n                    "msgCr": 1530023195325,\n                    "msgUp": 1530023195325\n                }\n            ],\n            "moreAfter": false,\n            "moreBefore": false\n        }\n    }\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Common Error Code"),(0,r.kt)("h3",{id:"status-codes"},"Status Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40601"),(0,r.kt)("td",{parentName:"tr",align:null},"FEATURE_NOT_ENABLED"),(0,r.kt)("td",{parentName:"tr",align:null},"Messaging feature is not enabled for app."))))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"context"),(0,r.kt)("td",{parentName:"tr",align:null},"A context object that controls the searchCriteria, pagination and sorting of the results to be returned.")))))}f.isMDXComponent=!0}}]);