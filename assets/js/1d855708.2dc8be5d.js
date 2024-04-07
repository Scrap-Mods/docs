"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=m(n),u=a,b=p["".concat(s,".").concat(u)]||p[u]||d[u]||i;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>m,toc:()=>p});var r=n(7462),a=n(7294),i=n(3905);function l(e){let{data:t,children:n}=e;const r=[];for(const{value:a,bits:c}of t)for(let e=c-1;e>=0;e--)r.push(0!=(a&1<<e));const i=[];for(let a=0;a<r.length;a+=8){let e=0;for(let t=0;t<8;t++)e|=(r[a+t]?1:0)<<7-t;i.push(e)}const l=r.length;for(;r.length%8!=0;)r.push(!1);const o={minWidth:"3ch",textAlign:"center",paddingInline:4},s={textAlign:"center"},m={...o,fontStyle:"italic",opacity:.6,filter:"blur(1px)"};return a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Byte Index"),i.map(((e,t)=>a.createElement("th",{key:t,colSpan:8},t)))),a.createElement("tr",null,a.createElement("th",null,"Bit Index"),r.map(((e,t)=>t<l?a.createElement("td",{key:t,style:o},t):a.createElement("td",{key:t,style:m,title:"Padding bit"},t))))),a.createElement("tbody",null,a.createElement("tr",null,a.createElement("th",null,"Bit Value"),r.map(((e,t)=>t<l?a.createElement("td",{key:t,style:o},e?"1":"0"):a.createElement("td",{key:t,style:m,title:"Padding bit"},e?"1":"0")))),a.createElement("tr",null,a.createElement("th",null,"Byte Value"),i.map(((e,t)=>a.createElement("td",{key:t,colSpan:8,style:s},"0x",e.toString(16).toUpperCase().padStart(2,"0"))))),a.createElement("tr",null,a.createElement("th",null,"Field"),t.map(((e,t)=>{let{name:n,bits:r}=e;return a.createElement("td",{key:t,colSpan:r,style:o},n)})),l%8!=0&&a.createElement("td",{colSpan:8-l%8,style:o},"Alignment padding")),n))}const o={title:"BitStream"},s=void 0,m={unversionedId:"networking/common-encoding-patterns/bitstream",id:"networking/common-encoding-patterns/bitstream",title:"BitStream",description:"Scrap Mechanic uses a stream of bits to serialize and deserialize all network packets. Most packets only use whole bytes, but some packets use bits that are not aligned to byte boundaries. This page describes the BitStream format.",source:"@site/docs/networking/common-encoding-patterns/bitstream.mdx",sourceDirName:"networking/common-encoding-patterns",slug:"/networking/common-encoding-patterns/bitstream",permalink:"/docs/networking/common-encoding-patterns/bitstream",draft:!1,editUrl:"https://pr.new/github.com/Scrap-Mods/docs/blob/main/docs/networking/common-encoding-patterns/bitstream.mdx",tags:[],version:"current",frontMatter:{title:"BitStream"},sidebar:"networkingSidebar",previous:{title:"Common Encoding Patterns",permalink:"/docs/category/common-encoding-patterns"}},c={},p=[{value:"BitStream format",id:"bitstream-format",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3}],d={toc:p},u="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Scrap Mechanic uses a stream of bits to serialize and deserialize all network packets. Most packets only use whole bytes, but some packets use bits that are not aligned to byte boundaries. This page describes the BitStream format."),(0,i.kt)("h2",{id:"bitstream-format"},"BitStream format"),(0,i.kt)("p",null,"Internally, the BitStream contains a buffer of bytes and a bit index. The bit index is the number of bits that have been read from or written to the buffer."),(0,i.kt)("p",null,"The BitStream is read and written from left to right. The bit index is incremented after each read or write operation by the number of bits that were read or written."),(0,i.kt)("h3",{id:"example-1"},"Example 1"),(0,i.kt)("p",null,"The following example shows a BitStream with a buffer of 3 bytes. The bit index starts at 0. The following operations are performed:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"An unsigned 8-bit integer with the value ",(0,i.kt)("inlineCode",{parentName:"li"},"0x11")," is written to the BitStream."),(0,i.kt)("li",{parentName:"ol"},"An unsigned 16-bit big-endian integer with the value ",(0,i.kt)("inlineCode",{parentName:"li"},"0x2233")," is written to the BitStream.")),(0,i.kt)("p",null,"The BitStream now contains the following data:"),(0,i.kt)(l,{data:[{name:"8-bit integer",bits:8,value:17},{name:"16-bit integer",bits:16,value:8755}],mdxType:"BitstreamDisplay"}),(0,i.kt)("p",null,"Because only whole bytes were written, the individual bytes of the buffer reflect the bytes that were written. The bit index after the write operations is 24."),(0,i.kt)("h3",{id:"example-2"},"Example 2"),(0,i.kt)("p",null,"The following example shows a BitStream with a buffer of 4 bytes. The bit index starts at 0. The following operations are performed:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A boolean flag bit with the value ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," is written to the BitStream."),(0,i.kt)("li",{parentName:"ol"},"An unsigned 8-bit integer with the value ",(0,i.kt)("inlineCode",{parentName:"li"},"0x11")," is written to the BitStream."),(0,i.kt)("li",{parentName:"ol"},"An unsigned 16-bit big-endian integer with the value ",(0,i.kt)("inlineCode",{parentName:"li"},"0x2233")," is written to the BitStream.")),(0,i.kt)("p",null,"The BitStream now contains the following data:"),(0,i.kt)(l,{data:[{name:"bool",bits:1,value:1},{name:"8-bit integer",bits:8,value:17},{name:"16-bit integer",bits:16,value:8755}],mdxType:"BitstreamDisplay"}),(0,i.kt)("p",null,"Notice how the boolean flag bit is stored in the first bit of the first byte, offsetting the other bits by 1. It is now very difficult to see where the individual bytes start and end. The bit index after the write operations is 25."))}b.isMDXComponent=!0}}]);