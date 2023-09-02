"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[8066],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=m(a),s=r,c=u["".concat(p,".").concat(s)]||u[s]||k[s]||l;return a?n.createElement(c,o(o({ref:t},d),{},{components:a})):n.createElement(c,o({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},71:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={title:"35 - Remove"},o="Remove",i={unversionedId:"networking/packets/remove",id:"networking/packets/remove",title:"35 - Remove",description:"This packet is sent when the player removes a shape or lift.",source:"@site/docs/networking/packets/35-remove.mdx",sourceDirName:"networking/packets",slug:"/networking/packets/remove",permalink:"/docs/networking/packets/remove",draft:!1,editUrl:"https://pr.new/github.com/Scrap-Mechanic-Modding/Scrap-Mechanic-Modding.github.io/blob/main/docs/networking/packets/35-remove.mdx",tags:[],version:"current",sidebarPosition:35,frontMatter:{title:"35 - Remove"},sidebar:"networkingSidebar",previous:{title:"34 - Place",permalink:"/docs/networking/packets/place"},next:{title:"39 - Remove Joint",permalink:"/docs/networking/packets/remove-joint"}},p={},m=[{value:"Structure",id:"structure",level:2},{value:"Vec3i",id:"vec3i",level:3},{value:"RemovedSurface Enum",id:"removedsurface-enum",level:3},{value:"RemovedSurface 4 - Body",id:"removedsurface-4---body",level:4},{value:"RemovedSurface 6 - Lift",id:"removedsurface-6---lift",level:4}],d={toc:m},u="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"remove"},"Remove"),(0,r.kt)("p",null,"This packet is sent when the player removes a shape or lift."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ID"),": 0x23 (35)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Size"),": 33 bytes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LZ4 Compressed"),": Yes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"State"),": Playing"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bound To"),": Client -> Server")),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Offset"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x00"),(0,r.kt)("td",{parentName:"tr",align:null},"Local Position High"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#vec3i"},"Vec3i")),(0,r.kt)("td",{parentName:"tr",align:null},"The position of the positive-x, positive-y, positive-z, exclusive corner of blocks to remove, local to the body. The value of this field is equal to the value of ",(0,r.kt)("inlineCode",{parentName:"td"},"Local Position Low")," plus the size of the box of blocks to remove. Always ",(0,r.kt)("inlineCode",{parentName:"td"},"(0, 0, 0)")," for parts, but the server accepts any value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x0C"),(0,r.kt)("td",{parentName:"tr",align:null},"Local Position Low"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#vec3i"},"Vec3i")),(0,r.kt)("td",{parentName:"tr",align:null},"The position of the negative-x, negative-y, negative-z, inclusive corner of blocks to remove, local to the body. Always ",(0,r.kt)("inlineCode",{parentName:"td"},"(0, 0, 0)")," for parts, but the server accepts any value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x18"),(0,r.kt)("td",{parentName:"tr",align:null},"Removed Surface"),(0,r.kt)("td",{parentName:"tr",align:null},"enum ",(0,r.kt)("a",{parentName:"td",href:"#removedsurface-enum"},"RemovedSurface")," : u8"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of surface to remove.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x19"),(0,r.kt)("td",{parentName:"tr",align:null},"Removed Surface Data"),(0,r.kt)("td",{parentName:"tr",align:null},"... (8 bytes)"),(0,r.kt)("td",{parentName:"tr",align:null},"The data of the removed surface.")))),(0,r.kt)("h3",{id:"vec3i"},"Vec3i"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The order of the coordinates is Z, Y, X, which may be seen as counterintuitive.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Offset"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x00"),(0,r.kt)("td",{parentName:"tr",align:null},"Z"),(0,r.kt)("td",{parentName:"tr",align:null},"be s32"),(0,r.kt)("td",{parentName:"tr",align:null},"The signed Z coordinate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x04"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"be s32"),(0,r.kt)("td",{parentName:"tr",align:null},"The signed Y coordinate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x08"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"be s32"),(0,r.kt)("td",{parentName:"tr",align:null},"The signed X coordinate.")))),(0,r.kt)("h3",{id:"removedsurface-enum"},"RemovedSurface Enum"),(0,r.kt)("p",null,"This is an exhaustive list. Packets with values not listed in the table do not do anything."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Removed Surface"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#removedsurface-4---body"},"Body"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#removedsurface-6---lift"},"Lift"))))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Packet ",(0,r.kt)("a",{parentName:"p",href:"/docs/networking/packets/remove-joint"},"39 - Remove Joint")," is sent when a joint is removed, not packet 35 - Remove.")),(0,r.kt)("h4",{id:"removedsurface-4---body"},"RemovedSurface 4 - Body"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Offset"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x00"),(0,r.kt)("td",{parentName:"tr",align:null},"Shape ID"),(0,r.kt)("td",{parentName:"tr",align:null},"be u32"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the part to remove. Always ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," for blocks.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x04"),(0,r.kt)("td",{parentName:"tr",align:null},"Body ID"),(0,r.kt)("td",{parentName:"tr",align:null},"be u32"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the body the shape to remove the shape from.")))),(0,r.kt)("h4",{id:"removedsurface-6---lift"},"RemovedSurface 6 - Lift"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Offset"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x00"),(0,r.kt)("td",{parentName:"tr",align:null},"Unknown"),(0,r.kt)("td",{parentName:"tr",align:null},"4 bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Always equal to ",(0,r.kt)("inlineCode",{parentName:"td"},"00 00 00 00"),". Any value is accepted by the server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x04"),(0,r.kt)("td",{parentName:"tr",align:null},"Lift ID"),(0,r.kt)("td",{parentName:"tr",align:null},"be u32"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the lift to remove.")))))}k.isMDXComponent=!0}}]);