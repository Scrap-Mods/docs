"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[927],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>m});var l=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=l.createContext({}),s=function(t){var e=l.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=s(t.components);return l.createElement(d.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,d=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),p=s(n),c=r,m=p["".concat(d,".").concat(c)]||p[c]||u[c]||a;return n?l.createElement(m,i(i({ref:e},k),{},{components:n})):l.createElement(m,i({ref:e},k))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[p]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2257:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var l=n(7462),r=(n(7294),n(3905));const a={title:"30 - Player Movement"},i="Player Movement",o={unversionedId:"networking/packets/player-movement",id:"networking/packets/player-movement",title:"30 - Player Movement",description:"This packet contains pressed movement keys and the player's look direction. It does not contain any position coordinates.",source:"@site/docs/networking/packets/30-player-movement.mdx",sourceDirName:"networking/packets",slug:"/networking/packets/player-movement",permalink:"/docs/networking/packets/player-movement",draft:!1,editUrl:"https://pr.new/github.com/Scrap-Mechanic-Modding/Scrap-Mechanic-Modding.github.io/blob/main/docs/networking/packets/30-player-movement.mdx",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"30 - Player Movement"},sidebar:"networkingSidebar",previous:{title:"13 - World Info - WIP",permalink:"/docs/networking/packets/world-info"},next:{title:"31 - Equipped Item Changed",permalink:"/docs/networking/packets/hotbar-item-changed"}},d={},s=[{value:"Structure",id:"structure",level:2},{value:"Keys bitfield",id:"keys-bitfield",level:3},{value:"Direction bitfield",id:"direction-bitfield",level:3}],k={toc:s},p="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,l.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"player-movement"},"Player Movement"),(0,r.kt)("p",null,"This packet contains pressed movement keys and the player's look direction. It does not contain any position coordinates."),(0,r.kt)("p",null,"The client sends this packet to the server once every tick. If the client's framerate drops below the tickrate, at most one packet is sent per frame."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ID"),": 0x1E (30)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Size"),": 9 bytes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LZ4 Compressed"),": No"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"State"),": Playing"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bound To"),": Client -> Server")),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Offset"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x00"),(0,r.kt)("td",{parentName:"tr",align:null},"Unknown"),(0,r.kt)("td",{parentName:"tr",align:null},"u8"),(0,r.kt)("td",{parentName:"tr",align:null},"Always ",(0,r.kt)("inlineCode",{parentName:"td"},"0x80"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x01"),(0,r.kt)("td",{parentName:"tr",align:null},"Tick"),(0,r.kt)("td",{parentName:"tr",align:null},"be u32"),(0,r.kt)("td",{parentName:"tr",align:null},"The current tick.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x05"),(0,r.kt)("td",{parentName:"tr",align:null},"Keys"),(0,r.kt)("td",{parentName:"tr",align:null},"u8 bitfield"),(0,r.kt)("td",{parentName:"tr",align:null},"Bitfield of which movement keys are pressed. See ",(0,r.kt)("a",{parentName:"td",href:"#keys-bitfield"},"Keys bitfield"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x06"),(0,r.kt)("td",{parentName:"tr",align:null},"Direction"),(0,r.kt)("td",{parentName:"tr",align:null},"u8 bitfield"),(0,r.kt)("td",{parentName:"tr",align:null},"Bitfield of the last horizontal direction moved in. See ",(0,r.kt)("a",{parentName:"td",href:"#direction-bitfield"},"Direction bitfield"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x07"),(0,r.kt)("td",{parentName:"tr",align:null},"Yaw"),(0,r.kt)("td",{parentName:"tr",align:null},"u8"),(0,r.kt)("td",{parentName:"tr",align:null},"The player's horizontal look rotation. A yaw of ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," means the player is looking into the positive Y direction. Rotating counter-clockwise (to the left) increases the yaw. After reaching ",(0,r.kt)("inlineCode",{parentName:"td"},"255"),", the yaw overflows back to ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x08"),(0,r.kt)("td",{parentName:"tr",align:null},"Pitch"),(0,r.kt)("td",{parentName:"tr",align:null},"u8"),(0,r.kt)("td",{parentName:"tr",align:null},"The player's vertical look rotation. A pitch of ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," means the player is looking straight down (into the negative Z direction). Looking straight up yields a pitch of ",(0,r.kt)("inlineCode",{parentName:"td"},"128"),".")))),(0,r.kt)("h3",{id:"keys-bitfield"},"Keys bitfield"),(0,r.kt)("p",null,"Contains information about which movement keys are pressed. All bits are always low while the player's character is seated or tumbling."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Bits"),(0,r.kt)("th",null,"Field name"),(0,r.kt)("th",null,"Notes"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"7"),(0,r.kt)("td",{rowspan:"4"},"Unknown"),(0,r.kt)("td",{rowspan:"4"},"Not known to be anything other than low.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"6")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"5")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"4")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"3"),(0,r.kt)("td",null,"Sprint"),(0,r.kt)("td",null,(0,r.kt)("p",null,"High when the player is sprinting while moving horizontally. Low in all other cases, including when the player is holding the Sprint button while standing still."),"Always lags one tick behind when starting a sprint from standstill. The sprint bitflag also continues to stay high for one more tick after the player has stopped moving horizontally.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"2"),(0,r.kt)("td",null,"Horizontal"),(0,r.kt)("td",null,"High when any of the Move Forward, Move Backward, Stafe Left or Strafe Right keys are pressed.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"Crawl"),(0,r.kt)("td",null,"High when the player is holding the Crawl (crouch) keybind. This is not connected to the actual crawl state of the player's character. If the character is crawling and unable to stand up, the value can be either high or low depending on wether the player is holding the Crawl key or not.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"Jump"),(0,r.kt)("td",null,"High when the player is holding the Jump button. The player's character does not have to be on the ground.")))),(0,r.kt)("h3",{id:"direction-bitfield"},"Direction bitfield"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Bits"),(0,r.kt)("th",null,"Field name"),(0,r.kt)("th",null,"Notes"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"7"),(0,r.kt)("td",{rowspan:"3"},"Direction"),(0,r.kt)("td",{rowspan:"3"},(0,r.kt)("p",null,"The direction relative to the player the player is walking in or has last walked in. When the player stops walking, this value is not updated."),"Ranges from ",(0,r.kt)("code",null,"0")," up to and including ",(0,r.kt)("code",null,"7"),". Strafing right starts at ",(0,r.kt)("code",null,"0")," and increases by ",(0,r.kt)("code",null,"1")," for every 45 degrees rotated counter-clockwise (to the left). Bit ",(0,r.kt)("code",null,"7")," is the most significant bit.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"6")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"5")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"4"),(0,r.kt)("td",{rowspan:"5"},"Unknown"),(0,r.kt)("td",{rowspan:"5"},"Not known to be anything other than low.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"3")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"2")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"1")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"0")))))}u.isMDXComponent=!0}}]);