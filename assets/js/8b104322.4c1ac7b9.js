"use strict";(self.webpackChunkscrap_docs=self.webpackChunkscrap_docs||[]).push([[9173],{8235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(4848),i=n(8453);const s={title:"45 - Lift Import Creation"},o="Lift Import Creation",c={id:"networking/packets/45-lift-import-creation",title:"45 - Lift Import Creation",description:"This packet is sent when the player imports a creation from the lift.",source:"@site/docs/networking/packets/45-lift-import-creation.mdx",sourceDirName:"networking/packets",slug:"/networking/packets/45-lift-import-creation",permalink:"/docs/networking/packets/45-lift-import-creation",draft:!1,unlisted:!1,editUrl:"https://pr.new/github.com/Scrap-Mods/docs/blob/main/docs/networking/packets/45-lift-import-creation.mdx",tags:[],version:"current",frontMatter:{title:"45 - Lift Import Creation"},sidebar:"networkingSidebar",previous:{title:"44 - Connect",permalink:"/docs/networking/packets/44-connect"},next:{title:"50 - Interact WIP",permalink:"/docs/networking/packets/50-interact"}},d={},l=[{value:"Structure",id:"structure",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"lift-import-creation",children:"Lift Import Creation"}),"\n",(0,r.jsx)(t.p,{children:"This packet is sent when the player imports a creation from the lift."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"ID"}),": 0x2D (45)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Size"}),": Variable"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"LZ4 Compressed"}),": Yes"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"State"}),": Playing"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Bound To"}),": Client -> Server"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Offset"}),(0,r.jsx)(t.th,{children:"Field Name"}),(0,r.jsx)(t.th,{children:"Field Type"}),(0,r.jsx)(t.th,{children:"Notes"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0x00"}),(0,r.jsx)(t.td,{children:"Lift ID"}),(0,r.jsx)(t.td,{children:"be u32"}),(0,r.jsx)(t.td,{children:"The ID of the lift to import the creation on."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0x04"}),(0,r.jsx)(t.td,{children:"Uncompressed Size"}),(0,r.jsx)(t.td,{children:"be u32"}),(0,r.jsx)(t.td,{children:"The size of the blueprint data before it is compressed with LZ4."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0x08"}),(0,r.jsx)(t.td,{children:"Compressed Size"}),(0,r.jsx)(t.td,{children:"be u32"}),(0,r.jsx)(t.td,{children:"The size of the blueprint data after it is compressed with LZ4."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0x14"}),(0,r.jsx)(t.td,{children:"Compressed Blueprint Data"}),(0,r.jsx)(t.td,{children:"LZ4 compressed bytes"}),(0,r.jsxs)(t.td,{children:["The contents of the ",(0,r.jsx)(t.code,{children:"blueprint.json"})," file, compressed with LZ4 block compression."]})]})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["The blueprint data can be decompressed using the ",(0,r.jsx)(t.code,{children:"lz4_decompress_safe"})," function from the LZ4 ",(0,r.jsx)(t.a,{href:"https://github.com/lz4/lz4",children:"C API"}),". The ",(0,r.jsx)(t.code,{children:"lz4.block.decompress"})," function from ",(0,r.jsx)(t.a,{href:"https://github.com/python-lz4/python-lz4",children:"python-lz4"})," can also be used by providing the ",(0,r.jsx)(t.code,{children:"uncompressed_size"})," argument. Without this argument, decompressing the blueprint data will fail."]})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["When compressing the blueprint data, ensure the used LZ4 library does not prepend the ",(0,r.jsx)(t.code,{children:"Compressed Blueprint Data"})," field with the compressed size."]})})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(6540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);