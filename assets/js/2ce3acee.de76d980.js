"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[69281],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),h=l,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},88938:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const r={},i="MongoDB Where Queries",o={unversionedId:"api/appendix/mongodbWhereQueries",id:"api/appendix/mongodbWhereQueries",title:"MongoDB Where Queries",description:"Overview",source:"@site/docs/api/5_appendix/mongodbWhereQueries.md",sourceDirName:"api/5_appendix",slug:"/api/appendix/mongodbWhereQueries",permalink:"/braincloud-apiref/api/appendix/mongodbWhereQueries",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/5_appendix/mongodbWhereQueries.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1673023815,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Range In Json",permalink:"/braincloud-apiref/api/appendix/jsonNumberRange"},next:{title:"Platform IDs",permalink:"/braincloud-apiref/api/appendix/platformIds"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Basics",id:"basics",level:2},{value:"Equality",id:"equality",level:3},{value:"Comparison",id:"comparison",level:3},{value:"Logical Operators",id:"logical-operators",level:2},{value:"AND",id:"and",level:3},{value:"OR",id:"or",level:3},{value:"NOT",id:"not",level:3},{value:"Arrays",id:"arrays",level:2},{value:"Exact Match",id:"exact-match",level:3},{value:"Match a single element",id:"match-a-single-element",level:3},{value:"Match a single element against multiple criteria",id:"match-a-single-element-against-multiple-criteria",level:3},{value:"Types",id:"types",level:2},{value:"Null or Missing Fields",id:"null-or-missing-fields",level:2},{value:"Null",id:"null",level:3},{value:"Exists",id:"exists",level:3}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mongodb-where-queries"},"MongoDB Where Queries"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Some brainCloud APIs take a JSON formatted MongoDB-style where clause as a parameter.  These allow you to perform more complex queries on data to get specific results."),(0,l.kt)("p",null,"Depending on the service different default (brainCloud created) fields are allowed to be queried on (see the documentation for these services for a list of allowed fields)."),(0,l.kt)("p",null,"You can also query any custom data you have created using Dot notation. For example:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'{ "data.myObjectField.name": "example" }')),(0,l.kt)("p",null,"Here are several examples using the Entity service.  For a complete list of syntax refer to the MongoDB documentation ",(0,l.kt)("a",{href:"https://docs.mongodb.com/v2.4/reference/operator/query/",target:"_blank"},"here"),"."),(0,l.kt)("h2",{id:"basics"},"Basics"),(0,l.kt)("h3",{id:"equality"},"Equality"),(0,l.kt)("p",null,"Equality is the simplest form of query and will return only data that exactly matches the criteria."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'{ "entityType": "example" }')),(0,l.kt)("p",null,"This string will return only entities of type example."),(0,l.kt)("p",null,"You can also specify multiple criteria for the equality parameters."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'{ "entityType": { "$in": [ "food", "snacks" ] } }')),(0,l.kt)("p",null,"This string will return any entities of type food or snacks.  Although you can express this query using the $or operator, use the $in operator rather than the $or operator when performing equality checks on the same field."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note that there is also a ",(0,l.kt)("strong",{parentName:"em"},"$nin")," operator that is functionally the opposite of ",(0,l.kt)("strong",{parentName:"em"},"$in"),".")),(0,l.kt)("h3",{id:"comparison"},"Comparison"),(0,l.kt)("p",null,"The following comparison operators are supported:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$ne"),(0,l.kt)("td",{parentName:"tr",align:null},"Not equal to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$gt"),(0,l.kt)("td",{parentName:"tr",align:null},"Greater than")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$gte"),(0,l.kt)("td",{parentName:"tr",align:null},"Greater than or equal to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$lt"),(0,l.kt)("td",{parentName:"tr",align:null},"Less than")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$lte"),(0,l.kt)("td",{parentName:"tr",align:null},"Less than or equal to")))),(0,l.kt)("p",null,"The following example returns all items whose price is greater than 1.99."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'{ "data.price": { "$gt": 1.99 } }')),(0,l.kt)("h2",{id:"logical-operators"},"Logical Operators"),(0,l.kt)("h3",{id:"and"},"AND"),(0,l.kt)("p",null,"A compound query can specify conditions for more than one field in the data. Implicitly, a logical AND conjunction connects the clauses of a compound query so that the query selects the data in the collection that match all the conditions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{ \n  "entityType": "example", \n  "data.rank": { "$lt": 9000 } \n}\n')),(0,l.kt)("p",null,"This query returns all entities where the entityType field has the value 'example' and the value of the rank field is less than 9000."),(0,l.kt)("p",null,"For nested conditions, you can also specify an explicit ",(0,l.kt)("inlineCode",{parentName:"p"},"$and")," clause. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{ \n  "$and": [ \n    { "data.localTimezone": { "$gte": 5 } }, \n    { "data.localTimezone": { "$lte": 8 } } \n  ] \n}\n')),(0,l.kt)("h3",{id:"or"},"OR"),(0,l.kt)("p",null,"Using the $or operator, you can specify a compound query that joins each clause with a logical OR conjunction so that the query selects the data in the collection that match at least one condition."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{ \n  "$or": [ \n    { "data.rank": { "$gt": 100 } }, \n    { "data.rank": { "$lt": 10 } } \n  ] \n}\n')),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note that there is also an ",(0,l.kt)("strong",{parentName:"em"},"$nor")," operator that is functionally the opposite of $or.")),(0,l.kt)("h3",{id:"not"},"NOT"),(0,l.kt)("p",null,"Performs a logical NOT operation on the expression, and returns the entities that do ",(0,l.kt)("em",{parentName:"p"},"not")," match."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'{ "data.price": { "$not": { "$gt": 1.99 } } }')),(0,l.kt)("p",null,"The following example returns all items whose price is greater than 1.99."),(0,l.kt)("h2",{id:"arrays"},"Arrays"),(0,l.kt)("p",null,"When the field holds an array, you can query for an exact array match or for specific values in the array. If the array holds embedded objects, you can query for specific fields in the embedded objects using dot notation."),(0,l.kt)("h3",{id:"exact-match"},"Exact Match"),(0,l.kt)("p",null,"The following example queries for all entities where the field ratings is an array that holds exactly three elements, 5, 8, and 9, in this order:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'{ "data.ratings": [ 5, 8, 9 ] }')),(0,l.kt)("h3",{id:"match-a-single-element"},"Match a single element"),(0,l.kt)("p",null,"This example will return all entities with an array called ratings that contain the element 'Awesome'."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'{ "data.ratings": "Awesome" }')),(0,l.kt)("h3",{id:"match-a-single-element-against-multiple-criteria"},"Match a single element against multiple criteria"),(0,l.kt)("p",null,"Use $elemMatch operator to specify multiple criteria on the elements of an array such that at least one array element satisfies all the specified criteria."),(0,l.kt)("p",null,"The following example queries for documents where the ratings array contains at least one element that is greater than ($gt) 5 and less than ($lt) 9:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'{ "data.ratings": { "$elemMatch": { "$gt": 2, "$lt": 9 } } }')),(0,l.kt)("h2",{id:"types"},"Types"),(0,l.kt)("p",null,"You can do lookups based on whether a field is of a certain type."),(0,l.kt)("p",null,"The types used are BSON types (documentation ",(0,l.kt)("a",{href:"https://docs.mongodb.org/manual/reference/bson-types/",target:"_blank"},"here"),")."),(0,l.kt)("p",null,"For example this query will only return entites where the field 'test' is of type 'null' (BSON type 10):"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'{ "data.test": { "$type": 10 } }')),(0,l.kt)("h2",{id:"null-or-missing-fields"},"Null or Missing Fields"),(0,l.kt)("p",null,"You can also do lookups based on null or whether a field exists."),(0,l.kt)("h3",{id:"null"},"Null"),(0,l.kt)("p",null,"Given the following query:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'{ "data.ratings": null }')),(0,l.kt)("p",null,"Any entity that contains the field 'ratings' with the value 'null' ",(0,l.kt)("em",{parentName:"p"},"OR")," any entity that does not contain the field 'ratings' will be returned."),(0,l.kt)("h3",{id:"exists"},"Exists"),(0,l.kt)("p",null,"Given the following query:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'{ "data.ratings": { "$exists": false } }')),(0,l.kt)("p",null,"Any entity that contains the field 'ratings' with the value 'null' ",(0,l.kt)("em",{parentName:"p"},"OR")," any entity that does not contain the field 'ratings' will be returned."))}d.isMDXComponent=!0}}]);