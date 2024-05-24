"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[4329],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=l,d=u["".concat(p,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2646:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(7462),l=(r(7294),r(3905));const a={title:"52 - Lift Level"},i="Lift Level",o={unversionedId:"networking/packets/lift-level",id:"networking/packets/lift-level",title:"52 - Lift Level",description:"This packet is sent when the player presses up or down. Requires the player to have a lift placed in the world, otherwise no packet is sent.",source:"@site/docs/networking/packets/52-lift-level.mdx",sourceDirName:"networking/packets",slug:"/networking/packets/lift-level",permalink:"/docs/networking/packets/lift-level",draft:!1,editUrl:"https://pr.new/github.com/Scrap-Mods/docs/blob/main/docs/networking/packets/52-lift-level.mdx",tags:[],version:"current",sidebarPosition:52,frontMatter:{title:"52 - Lift Level"},sidebar:"networkingSidebar",previous:{title:"51 - Legacy",permalink:"/docs/networking/packets/legacy"},next:{title:"Protocol",permalink:"/docs/category/protocol"}},p={},c=[{value:"Structure",id:"structure",level:2}],s={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lift-level"},"Lift Level"),(0,l.kt)("p",null,"This packet is sent when the player presses up or down. Requires the player to have a lift placed in the world, otherwise no packet is sent."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ID"),": 0x34 (52)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Size"),": 8"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"LZ4 Compressed"),": Yes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"State"),": Playing"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Bound To"),": Client -> Server")),(0,l.kt)("h2",{id:"structure"},"Structure"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Offset"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x00"),(0,l.kt)("td",{parentName:"tr",align:null},"Lift ID"),(0,l.kt)("td",{parentName:"tr",align:null},"be u32"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the lift to change the level of. IDs of lifts placed by other players are accepted, IDs of non-existant lifts are ignored.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x04"),(0,l.kt)("td",{parentName:"tr",align:null},"Level Change"),(0,l.kt)("td",{parentName:"tr",align:null},"be s32"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The amount of blocks to change the lift level by. Positive values to rise the lift, negative values to lower the lift."),"The lift will try to change the level by the full amount specified, and will ignore other Lift Level packets while moving. Only when the lift is not changing its level (by having reached its target height, minimum height or maximum height), it will accept new Lift Level packets.")))))}f.isMDXComponent=!0}}]);