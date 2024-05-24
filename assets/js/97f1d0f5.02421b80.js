"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[4747],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=d(a),u=r,c=s["".concat(p,".").concat(u)]||s[u]||k[u]||l;return a?n.createElement(c,i(i({ref:e},m),{},{components:a})):n.createElement(c,i({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7027:(t,e,a)=>{a.d(e,{ZP:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={toc:[]},i="wrapper";function o(t){let{components:e,...a}=t;return(0,r.kt)(i,(0,n.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The structure of this packet is very similar to those of the following packets:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/networking/packets/script-initialization-data"},"11 - Script Initialization Data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/networking/packets/generic-initialization-data"},"13 - Generic Initialization Data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/networking/packets/script-data-s2c"},"25 - Script Data (S->C)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/networking/packets/script-data-c2s"},"26 - Script Data (C->S)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/networking/packets/generic-data-s2c"},"27 - Generic Data (S->C)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/networking/packets/generic-data-c2s"},"28 - Generic Data (C->S)")))))}o.isMDXComponent=!0},642:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),l=a(7027);const i={title:"13 - Generic Initialization Data"},o="Generic Initialization Data",p={unversionedId:"networking/packets/generic-initialization-data",id:"networking/packets/generic-initialization-data",title:"13 - Generic Initialization Data",description:"This packet is sent by the server to the client while joining a game. It contains the initialization data related to Lua scripts that can store data. The only known use of this packet is to send the terrain data to the client.",source:"@site/docs/networking/packets/13-generic-initialization-data.mdx",sourceDirName:"networking/packets",slug:"/networking/packets/generic-initialization-data",permalink:"/docs/networking/packets/generic-initialization-data",draft:!1,editUrl:"https://pr.new/github.com/Scrap-Mods/docs/blob/main/docs/networking/packets/13-generic-initialization-data.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"13 - Generic Initialization Data"},sidebar:"networkingSidebar",previous:{title:"11 - Script Initialization Data",permalink:"/docs/networking/packets/script-initialization-data"},next:{title:"18 - Display Message",permalink:"/docs/networking/packets/display-message"}},d={},m=[{value:"Structure",id:"structure",level:2},{value:"BlobData Payloads",id:"blobdata-payloads",level:2},{value:"World Info",id:"world-info",level:3},{value:"Payload",id:"payload",level:4},{value:"Gameplay Options",id:"gameplay-options",level:3},{value:"Payload",id:"payload-1",level:4},{value:"Example",id:"example",level:4},{value:"Player Data",id:"player-data",level:3},{value:"Payload",id:"payload-2",level:4}],s={toc:m},k="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(k,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"generic-initialization-data"},"Generic Initialization Data"),(0,r.kt)("p",null,"This packet is sent by the server to the client while joining a game. It contains the initialization data related to Lua scripts that can store data. The only known use of this packet is to send the terrain data to the client."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ID"),": 0x0B (11)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Size"),": Variable"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LZ4 Compressed"),": Yes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"State"),": Joining"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bound To"),": Server -> Client")),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)(l.ZP,{mdxType:"BlobDataPacketsNotice"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Game Tick"),(0,r.kt)("td",{parentName:"tr",align:null},"be u32"),(0,r.kt)("td",{parentName:"tr",align:null},"The tick when the server sent this packet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/networking/common-structures/blobdata"},"BlobData"),"[until EOS]"),(0,r.kt)("td",{parentName:"tr",align:null},"The data the scripted classes are initialized with. This array is read until the end of the packet.")))),(0,r.kt)("h2",{id:"blobdata-payloads"},"BlobData Payloads"),(0,r.kt)("p",null,"In this subsection, UIDs of known ",(0,r.kt)("a",{parentName:"p",href:"/docs/networking/common-structures/blobdata"},"BlobData")," and their payloads are listed. This is not guaranteed to be an exhaustive list."),(0,r.kt)("h3",{id:"world-info"},"World Info"),(0,r.kt)("p",null,"This ",(0,r.kt)("a",{parentName:"p",href:"/docs/networking/common-structures/blobdata"},"BlobData")," contains information about the world the player is currently joining."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"UID"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"3ff36c8b-93f7-4428-ae4d-429a6f0cf77d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Key"),": The ID of the world, stored as ",(0,r.kt)("inlineCode",{parentName:"li"},"le u32")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"World ID"),": The ID of the world"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flags"),": 13 (0b1101)")),(0,r.kt)("h4",{id:"payload"},"Payload"),(0,r.kt)("p",null,"This structure contains all parameters passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"sm.world.createWorld()")," when the world was created."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Seed"),(0,r.kt)("td",{parentName:"tr",align:null},"be u32"),(0,r.kt)("td",{parentName:"tr",align:null},"The seed of the world.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Filename"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/networking/common-structures/string"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The filename of the world.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Classname"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/networking/common-structures/string"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The classname of the world.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Terrain Params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/networking/common-structures/string"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"A stringified JSON object containing the terrain parameters of the world.")))),(0,r.kt)("h3",{id:"gameplay-options"},"Gameplay Options"),(0,r.kt)("p",null,"This ",(0,r.kt)("a",{parentName:"p",href:"/docs/networking/common-structures/blobdata"},"BlobData")," contains the gameplay options of the world."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"UID"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"44ac020c-aec7-4f8b-b230-34d2e3bd23eb")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Key"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", stored as ",(0,r.kt)("inlineCode",{parentName:"li"},"le u32")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"World ID"),": ",(0,r.kt)("a",{parentName:"li",href:"/docs/networking/common-structures/blobdata#special-world-ids"},"No World")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flags"),": 15 (0b1111)")),(0,r.kt)("h4",{id:"payload-1"},"Payload"),(0,r.kt)("p",null,"This structure stores the difficulty, multiplayer setting and the physics quality."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/networking/common-structures/string"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"A stringified JSON object containing the gameplay options of the world.")))),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'{"Difficulty":1,"Multiplayer":2,"PhysicsQuality":8}\\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Difficulty"),": The difficulty of the game as returned by ",(0,r.kt)("inlineCode",{parentName:"li"},"sm.game.getDifficulty()"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"Easy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"Normal")," (default)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Multiplayer"),": The multiplayer setting of the game.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"Private")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"Friends Only")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"2")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"Friends of Friends")," (default)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"Public")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PhysicsQuality"),": The quality of the physics simulation.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"Simple 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"8")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"Advanced")," (default)")))),(0,r.kt)("h3",{id:"player-data"},"Player Data"),(0,r.kt)("p",null,"This ",(0,r.kt)("a",{parentName:"p",href:"/docs/networking/common-structures/blobdata"},"BlobData")," contains information about a player."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"UID"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"51868883-d2d2-4953-9135-1ab0bdc2a47e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Key"),": The ID of the player, stored as ",(0,r.kt)("inlineCode",{parentName:"li"},"le u32")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"World ID"),": ",(0,r.kt)("a",{parentName:"li",href:"/docs/networking/common-structures/blobdata#special-world-ids"},"No World")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flags"),": 13 (0b1101)")),(0,r.kt)("h4",{id:"payload-2"},"Payload"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Character ID"),(0,r.kt)("td",{parentName:"tr",align:null},"be u32"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the character of the player.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Steam ID 64"),(0,r.kt)("td",{parentName:"tr",align:null},"be u64"),(0,r.kt)("td",{parentName:"tr",align:null},"The Steam ID of the player.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Inventory Container ID"),(0,r.kt)("td",{parentName:"tr",align:null},"be u32"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the inventory container of the player.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Carry Container ID"),(0,r.kt)("td",{parentName:"tr",align:null},"be u32"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the carry container of the player.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Carry Color"),(0,r.kt)("td",{parentName:"tr",align:null},"be u32"),(0,r.kt)("td",{parentName:"tr",align:null},"The color of the part the player is currently carrying. Stored as ",(0,r.kt)("inlineCode",{parentName:"td"},"0xAABBGGRR"),". ",(0,r.kt)("inlineCode",{parentName:"td"},"0xFFFFFFFF")," if the player is not carrying anything.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Unknown"),(0,r.kt)("td",{parentName:"tr",align:null},"u8"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name Size"),(0,r.kt)("td",{parentName:"tr",align:null},"u8"),(0,r.kt)("td",{parentName:"tr",align:null},"The size of the name of the player.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"char","[Name Size]"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the player, encoded in UTF-8.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Character Customization"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../../structures/docs/character-customization"},"Character Customization")),(0,r.kt)("td",{parentName:"tr",align:null},"The customization options of the character of the player.")))))}u.isMDXComponent=!0}}]);