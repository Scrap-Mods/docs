"use strict";(self.webpackChunkscrap_docs=self.webpackChunkscrap_docs||[]).push([[5851],{1132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var s=n(4848),i=n(8453);const r={title:"31 - Equipped Item Changed"},d="Equipped Item Changed",c={id:"networking/Packets/hotbar-item-changed",title:"31 - Equipped Item Changed",description:"This packet is sent when the player equips a different item. No packet is sent when both the UUID and the Tool Instance ID are the same as the previous equipped item.",source:"@site/docs/networking/Packets/31-hotbar-item-changed.mdx",sourceDirName:"networking/Packets",slug:"/networking/Packets/hotbar-item-changed",permalink:"/docs/networking/Packets/hotbar-item-changed",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:31,frontMatter:{title:"31 - Equipped Item Changed"},sidebar:"networkingSidebar",previous:{title:"30 - Player Movement",permalink:"/docs/networking/Packets/player-movement"},next:{title:"32 - Container Transaction WIP",permalink:"/docs/networking/Packets/container-transaction"}},o={},h=[{value:"Structure",id:"structure",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"equipped-item-changed",children:"Equipped Item Changed"}),"\n",(0,s.jsx)(t.p,{children:"This packet is sent when the player equips a different item. No packet is sent when both the UUID and the Tool Instance ID are the same as the previous equipped item."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"ID"}),": 0x1F (31)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Size"}),": 24 bytes"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"LZ4 Compressed"}),": Yes"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"State"}),": Playing"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Bound To"}),": Client -> Server"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Offset"}),(0,s.jsx)(t.th,{children:"Field Name"}),(0,s.jsx)(t.th,{children:"Field Type"}),(0,s.jsx)(t.th,{children:"Notes"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0x00"}),(0,s.jsx)(t.td,{children:"Character ID"}),(0,s.jsx)(t.td,{children:"be u32"}),(0,s.jsx)(t.td,{children:"The character ID of the player sending the packet."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0x04"}),(0,s.jsx)(t.td,{children:"Uuid"}),(0,s.jsx)(t.td,{children:"le u128"}),(0,s.jsxs)(t.td,{children:["The UUID of the newly equiped item. ",(0,s.jsx)(t.code,{children:"00000000-0000-0000-0000-000000000000"})," when no item is equipped"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0x14"}),(0,s.jsx)(t.td,{children:"Tool Instance ID"}),(0,s.jsx)(t.td,{children:"be u32"}),(0,s.jsxs)(t.td,{children:["The instance id of the newly equiped tool. Always ",(0,s.jsx)(t.code,{children:"0xFFFFFFFF"})," for items that are not tools or when no item is equipped."]})]})]})]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var s=n(6540);const i={},r=s.createContext(i);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);