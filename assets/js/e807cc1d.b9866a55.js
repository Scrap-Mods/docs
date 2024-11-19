"use strict";(self.webpackChunkscrap_docs=self.webpackChunkscrap_docs||[]).push([[314],{2918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var i=n(4848),s=n(8453);const l={title:"52 - Lift Level"},r="Lift Level",o={id:"networking/packets/52-lift-level",title:"52 - Lift Level",description:"This packet is sent when the player presses up or down. Requires the player to have a lift placed in the world, otherwise no packet is sent.",source:"@site/docs/networking/packets/52-lift-level.mdx",sourceDirName:"networking/packets",slug:"/networking/packets/52-lift-level",permalink:"/docs/networking/packets/52-lift-level",draft:!1,unlisted:!1,editUrl:"https://pr.new/github.com/Scrap-Mods/docs/blob/main/docs/networking/packets/52-lift-level.mdx",tags:[],version:"current",frontMatter:{title:"52 - Lift Level"},sidebar:"networkingSidebar",previous:{title:"51 - Legacy",permalink:"/docs/networking/packets/51-legacy"},next:{title:"Format",permalink:"/docs/networking/protocol/format"}},c={},h=[{value:"Structure",id:"structure",level:2}];function d(e){const t={h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"lift-level",children:"Lift Level"}),"\n",(0,i.jsx)(t.p,{children:"This packet is sent when the player presses up or down. Requires the player to have a lift placed in the world, otherwise no packet is sent."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"ID"}),": 0x34 (52)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Size"}),": 8"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"LZ4 Compressed"}),": Yes"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"State"}),": Playing"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Bound To"}),": Client -> Server"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Offset"}),(0,i.jsx)(t.th,{children:"Field Name"}),(0,i.jsx)(t.th,{children:"Field Type"}),(0,i.jsx)(t.th,{children:"Notes"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0x00"}),(0,i.jsx)(t.td,{children:"Lift ID"}),(0,i.jsx)(t.td,{children:"be u32"}),(0,i.jsx)(t.td,{children:"The ID of the lift to change the level of. IDs of lifts placed by other players are accepted, IDs of non-existant lifts are ignored."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0x04"}),(0,i.jsx)(t.td,{children:"Level Change"}),(0,i.jsx)(t.td,{children:"be s32"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)("p",{children:"The amount of blocks to change the lift level by. Positive values to rise the lift, negative values to lower the lift."}),"The lift will try to change the level by the full amount specified, and will ignore other Lift Level packets while moving. Only when the lift is not changing its level (by having reached its target height, minimum height or maximum height), it will accept new Lift Level packets."]})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(6540);const s={},l=i.createContext(s);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);