"use strict";(self.webpackChunkscrap_docs=self.webpackChunkscrap_docs||[]).push([[3542],{3951:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var r=s(4848),n=s(8453);const d={title:"35 - Remove"},i="Remove",c={id:"networking/packets/35-remove",title:"35 - Remove",description:"This packet is sent when the player removes a shape or lift.",source:"@site/docs/networking/packets/35-remove.mdx",sourceDirName:"networking/packets",slug:"/networking/packets/35-remove",permalink:"/docs/networking/packets/35-remove",draft:!1,unlisted:!1,editUrl:"https://pr.new/github.com/Scrap-Mods/docs/blob/main/docs/networking/packets/35-remove.mdx",tags:[],version:"current",frontMatter:{title:"35 - Remove"},sidebar:"networkingSidebar",previous:{title:"34 - Place",permalink:"/docs/networking/packets/34-place"},next:{title:"39 - Remove Joint",permalink:"/docs/networking/packets/39-remove-joint"}},h={},l=[{value:"Structure",id:"structure",level:2},{value:"Vec3i",id:"vec3i",level:3},{value:"RemovedSurface Enum",id:"removedsurface-enum",level:3},{value:"RemovedSurface 4 - Body",id:"removedsurface-4---body",level:4},{value:"RemovedSurface 6 - Lift",id:"removedsurface-6---lift",level:4}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"remove",children:"Remove"}),"\n",(0,r.jsx)(t.p,{children:"This packet is sent when the player removes a shape or lift."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"ID"}),": 0x23 (35)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Size"}),": 33 bytes"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"LZ4 Compressed"}),": Yes"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"State"}),": Playing"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Bound To"}),": Client -> Server"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Offset"}),(0,r.jsx)(t.th,{children:"Field Name"}),(0,r.jsx)(t.th,{children:"Field Type"}),(0,r.jsx)(t.th,{children:"Notes"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0x00"}),(0,r.jsx)(t.td,{children:"Local Position High"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#vec3i",children:"Vec3i"})}),(0,r.jsxs)(t.td,{children:["The position of the positive-x, positive-y, positive-z, exclusive corner of blocks to remove, local to the body. The value of this field is equal to the value of ",(0,r.jsx)(t.code,{children:"Local Position Low"})," plus the size of the box of blocks to remove. Always ",(0,r.jsx)(t.code,{children:"(0, 0, 0)"})," for parts, but the server accepts any value."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0x0C"}),(0,r.jsx)(t.td,{children:"Local Position Low"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#vec3i",children:"Vec3i"})}),(0,r.jsxs)(t.td,{children:["The position of the negative-x, negative-y, negative-z, inclusive corner of blocks to remove, local to the body. Always ",(0,r.jsx)(t.code,{children:"(0, 0, 0)"})," for parts, but the server accepts any value."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0x18"}),(0,r.jsx)(t.td,{children:"Removed Surface"}),(0,r.jsxs)(t.td,{children:["enum ",(0,r.jsx)(t.a,{href:"#removedsurface-enum",children:"RemovedSurface"})," : u8"]}),(0,r.jsx)(t.td,{children:"The type of surface to remove."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0x19"}),(0,r.jsx)(t.td,{children:"Removed Surface Data"}),(0,r.jsx)(t.td,{children:"... (8 bytes)"}),(0,r.jsx)(t.td,{children:"The data of the removed surface."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"vec3i",children:"Vec3i"}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"The order of the coordinates is Z, Y, X, which may be seen as counterintuitive."})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Offset"}),(0,r.jsx)(t.th,{children:"Field Name"}),(0,r.jsx)(t.th,{children:"Field Type"}),(0,r.jsx)(t.th,{children:"Notes"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0x00"}),(0,r.jsx)(t.td,{children:"Z"}),(0,r.jsx)(t.td,{children:"be s32"}),(0,r.jsx)(t.td,{children:"The signed Z coordinate."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0x04"}),(0,r.jsx)(t.td,{children:"Y"}),(0,r.jsx)(t.td,{children:"be s32"}),(0,r.jsx)(t.td,{children:"The signed Y coordinate."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0x08"}),(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{children:"be s32"}),(0,r.jsx)(t.td,{children:"The signed X coordinate."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"removedsurface-enum",children:"RemovedSurface Enum"}),"\n",(0,r.jsx)(t.p,{children:"This is an exhaustive list. Packets with values not listed in the table do not do anything."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"ID"}),(0,r.jsx)(t.th,{children:"Removed Surface"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"4"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#removedsurface-4---body",children:"Body"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"6"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#removedsurface-6---lift",children:"Lift"})})]})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Packet ",(0,r.jsx)(t.a,{href:"/docs/networking/packets/39-remove-joint",children:"39 - Remove Joint"})," is sent when a joint is removed, not packet 35 - Remove."]})}),"\n",(0,r.jsx)(t.h4,{id:"removedsurface-4---body",children:"RemovedSurface 4 - Body"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Offset"}),(0,r.jsx)(t.th,{children:"Field Name"}),(0,r.jsx)(t.th,{children:"Field Type"}),(0,r.jsx)(t.th,{children:"Notes"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0x00"}),(0,r.jsx)(t.td,{children:"Shape ID"}),(0,r.jsx)(t.td,{children:"be u32"}),(0,r.jsxs)(t.td,{children:["The ID of the part to remove. Always ",(0,r.jsx)(t.code,{children:"0"})," for blocks."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0x04"}),(0,r.jsx)(t.td,{children:"Body ID"}),(0,r.jsx)(t.td,{children:"be u32"}),(0,r.jsx)(t.td,{children:"The ID of the body the shape to remove the shape from."})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"removedsurface-6---lift",children:"RemovedSurface 6 - Lift"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Offset"}),(0,r.jsx)(t.th,{children:"Field Name"}),(0,r.jsx)(t.th,{children:"Field Type"}),(0,r.jsx)(t.th,{children:"Notes"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0x00"}),(0,r.jsx)(t.td,{children:"Unknown"}),(0,r.jsx)(t.td,{children:"4 bytes"}),(0,r.jsxs)(t.td,{children:["Always equal to ",(0,r.jsx)(t.code,{children:"00 00 00 00"}),". Any value is accepted by the server."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0x04"}),(0,r.jsx)(t.td,{children:"Lift ID"}),(0,r.jsx)(t.td,{children:"be u32"}),(0,r.jsx)(t.td,{children:"The ID of the lift to remove."})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>c});var r=s(6540);const n={},d=r.createContext(n);function i(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);