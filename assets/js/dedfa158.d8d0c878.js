"use strict";(self.webpackChunkscrap_docs=self.webpackChunkscrap_docs||[]).push([[4181],{66:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var n=i(4848),a=i(8453),r=i(9351);const s={title:"11 - Script Initialization Data"},c="Script Initialization Data",l={id:"networking/Packets/script-initialization-data",title:"11 - Script Initialization Data",description:"This packet is sent by the server to the client while joining a game. It contains the initialization data related to Lua scripts that can store data. The only known use of this packet is to send the terrain data to the client.",source:"@site/docs/networking/Packets/11-script-initialization-data.mdx",sourceDirName:"networking/Packets",slug:"/networking/Packets/script-initialization-data",permalink:"/docs/networking/Packets/script-initialization-data",draft:!1,unlisted:!1,editUrl:"https://pr.new/github.com/Scrap-Mods/docs/blob/main/docs/networking/Packets/11-script-initialization-data.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"11 - Script Initialization Data"},sidebar:"networkingSidebar",previous:{title:"10 - Join Confirmation",permalink:"/docs/networking/Packets/join-confirmation"},next:{title:"13 - Generic Initialization Data",permalink:"/docs/networking/Packets/generic-initialization-data"}},d={},o=[{value:"Structure",id:"structure",level:2},...r.RM,{value:"BlobData Payloads",id:"blobdata-payloads",level:2},{value:"Terrain Data",id:"terrain-data",level:3},{value:"Payload",id:"payload",level:4}];function h(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"script-initialization-data",children:"Script Initialization Data"}),"\n",(0,n.jsx)(e.p,{children:"This packet is sent by the server to the client while joining a game. It contains the initialization data related to Lua scripts that can store data. The only known use of this packet is to send the terrain data to the client."}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"ID"}),": 0x0B (11)"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Size"}),": Variable"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"LZ4 Compressed"}),": Yes"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"State"}),": Joining"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Bound To"}),": Server -> Client"]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"structure",children:"Structure"}),"\n",(0,n.jsx)(r.Ay,{}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Field Name"}),(0,n.jsx)(e.th,{children:"Field Type"}),(0,n.jsx)(e.th,{children:"Notes"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Game Tick"}),(0,n.jsx)(e.td,{children:"be u32"}),(0,n.jsx)(e.td,{children:"The tick when the server sent this packet."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Data"}),(0,n.jsxs)(e.td,{children:[(0,n.jsx)(e.a,{href:"/docs/structures/Networking/blobdata",children:"BlobData"}),"[until EOS]"]}),(0,n.jsx)(e.td,{children:"The data the scripted classes are initialized with. This array is read until the end of the packet."})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"blobdata-payloads",children:"BlobData Payloads"}),"\n",(0,n.jsxs)(e.p,{children:["In this subsection, UIDs of known ",(0,n.jsx)(e.a,{href:"/docs/structures/Networking/blobdata",children:"BlobData"})," and their payloads are listed. This is not guaranteed to be an exhaustive list."]}),"\n",(0,n.jsx)(e.h3,{id:"terrain-data",children:"Terrain Data"}),"\n",(0,n.jsxs)(e.p,{children:["This ",(0,n.jsx)(e.a,{href:"/docs/structures/Networking/blobdata",children:"BlobData"})," contains the terrain data of the world the player is currently joining."]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"UID"}),": ",(0,n.jsx)(e.code,{children:"61aa13d7-e715-4153-a269-4d338c0c5bd4"})]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Key"}),": The ID of the world, stored as ",(0,n.jsx)(e.code,{children:"le u32"})]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"World ID"}),": The ID of the world"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Flags"}),": 7 (0b0111)"]}),"\n"]}),"\n",(0,n.jsx)(e.h4,{id:"payload",children:"Payload"}),"\n",(0,n.jsxs)(e.p,{children:["A ",(0,n.jsx)(e.a,{href:"/docs/structures/lua-object",children:"LuaObject"})," that has been set using ",(0,n.jsx)(e.code,{children:"sm.terrainData.save()"})," or ",(0,n.jsx)(e.code,{children:"sm.world.createWorld()"})]}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Field Name"}),(0,n.jsx)(e.th,{children:"Field Type"}),(0,n.jsx)(e.th,{children:"Notes"})]})}),(0,n.jsx)(e.tbody,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Terrain Data"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.a,{href:"/docs/structures/lua-object",children:"LuaObject"})}),(0,n.jsx)(e.td,{children:"The terrain data."})]})})]})]})}function x(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(h,{...t})}):h(t)}},9351:(t,e,i)=>{i.d(e,{Ay:()=>c,RM:()=>r});var n=i(4848),a=i(8453);const r=[];function s(t){const e={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,a.R)(),...t.components};return(0,n.jsxs)(e.admonition,{type:"note",children:[(0,n.jsx)(e.p,{children:"The structure of this packet is very similar to those of the following packets:"}),(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"../script-initialization-data",children:"11 - Script Initialization Data"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"../generic-initialization-data",children:"13 - Generic Initialization Data"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"../script-data-s2c",children:"25 - Script Data (S->C)"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"../script-data-c2s",children:"26 - Script Data (C->S)"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"../generic-data-s2c",children:"27 - Generic Data (S->C)"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"../generic-data-c2s",children:"28 - Generic Data (C->S)"})}),"\n"]})]})}function c(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(s,{...t})}):s(t)}},8453:(t,e,i)=>{i.d(e,{R:()=>s,x:()=>c});var n=i(6540);const a={},r=n.createContext(a);function s(t){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:s(t.components),n.createElement(r.Provider,{value:e},t.children)}}}]);