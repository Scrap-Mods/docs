"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[5661],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={title:"19 - Display Alert Text"},i="Display Alert Text",o={unversionedId:"networking/packets/display-alert-text",id:"networking/packets/display-alert-text",title:"19 - Display Alert Text",description:"Displays an alert message.",source:"@site/docs/networking/packets/19-display-alert-text.mdx",sourceDirName:"networking/packets",slug:"/networking/packets/display-alert-text",permalink:"/docs/networking/packets/display-alert-text",draft:!1,editUrl:"https://pr.new/github.com/Scrap-Mechanic-Modding/Scrap-Mechanic-Modding.github.io/blob/main/docs/networking/packets/19-display-alert-text.mdx",tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"19 - Display Alert Text"},sidebar:"networkingSidebar",previous:{title:"13 - World Info - WIP",permalink:"/docs/networking/packets/world-info"},next:{title:"30 - Player Movement",permalink:"/docs/networking/packets/player-movement"}},s={},p=[{value:"Structure",id:"structure",level:2},{value:"Known messages",id:"known-messages",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"display-alert-text"},"Display Alert Text"),(0,a.kt)("p",null,"Displays an alert message."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ID"),": 0x13 (19)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Size"),": Variable"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LZ4 Compressed"),": Yes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"State"),": Playing"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bound To"),": Server -> Client")),(0,a.kt)("h2",{id:"structure"},"Structure"),(0,a.kt)("p",null,"Setting the size to be shorter than the size of the message will cut of the end of the message."),(0,a.kt)("p",null,"Setting the size to be larger than the size of the message will display only the alert icon, no text."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Offset"),(0,a.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0x00"),(0,a.kt)("td",{parentName:"tr",align:null},"Size"),(0,a.kt)("td",{parentName:"tr",align:null},"be u16"),(0,a.kt)("td",{parentName:"tr",align:null},"The size of the message.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0x04"),(0,a.kt)("td",{parentName:"tr",align:null},"Message"),(0,a.kt)("td",{parentName:"tr",align:null},"utf8 string"),(0,a.kt)("td",{parentName:"tr",align:null},"The utf-8 encoded message.")))),(0,a.kt)("h2",{id:"known-messages"},"Known messages"),(0,a.kt)("p",null,"List of known messages that the server can send to the client."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Message"),(0,a.kt)("th",{parentName:"tr",align:null},"Occurs When"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"#{INFO_INVENTORY_FULL}")),(0,a.kt)("td",{parentName:"tr",align:null},"The player's inventory is full and the player tries to remove a shape that should be added to the inventory, while in limited inventory mode.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Your host does not support that shape")),(0,a.kt)("td",{parentName:"tr",align:null},"Sending a ",(0,a.kt)("a",{parentName:"td",href:"/docs/networking/packets/place"},"34 - Place")," packet with a UUID that does not belong to a loaded shape.")))))}d.isMDXComponent=!0}}]);