"use strict";(self.webpackChunkscrap_docs=self.webpackChunkscrap_docs||[]).push([[7751],{4547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=n(4848),r=n(8453);const s={title:"43 - Lift Delete Creation"},l="Lift Delete Creation",o={id:"networking/packets/43-lift-delete-creation",title:"43 - Lift Delete Creation",description:"This packet is sent when the player deletes a creation from the lift.",source:"@site/docs/networking/packets/43-lift-delete-creation.mdx",sourceDirName:"networking/packets",slug:"/networking/packets/43-lift-delete-creation",permalink:"/docs/networking/packets/43-lift-delete-creation",draft:!1,unlisted:!1,editUrl:"https://pr.new/github.com/Scrap-Mods/docs/blob/main/docs/networking/packets/43-lift-delete-creation.mdx",tags:[],version:"current",frontMatter:{title:"43 - Lift Delete Creation"},sidebar:"networkingSidebar",previous:{title:"40 - Harvestable Destroy WIP",permalink:"/docs/networking/packets/40-harvestable-destroy"},next:{title:"44 - Connect",permalink:"/docs/networking/packets/44-connect"}},c={},d=[{value:"Structure",id:"structure",level:2},{value:"Validation",id:"validation",level:2}];function a(e){const t={h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"lift-delete-creation",children:"Lift Delete Creation"}),"\n",(0,i.jsx)(t.p,{children:"This packet is sent when the player deletes a creation from the lift."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"ID"}),": 0x2B (43)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Size"}),": 4 bytes"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"LZ4 Compressed"}),": Yes"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"State"}),": Playing"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Bound To"}),": Client -> Server"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Offset"}),(0,i.jsx)(t.th,{children:"Field Name"}),(0,i.jsx)(t.th,{children:"Field Type"}),(0,i.jsx)(t.th,{children:"Notes"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0x00"}),(0,i.jsx)(t.td,{children:"Lift ID"}),(0,i.jsx)(t.td,{children:"be u32"}),(0,i.jsx)(t.td,{children:"The ID of the lift delete the creation from."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"validation",children:"Validation"}),"\n",(0,i.jsx)(t.p,{children:"If the lift does not exist, nothing happens. The server does not validate if the sender of this packet is the owner of the lift. Any player can delete creations of any lift."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var i=n(6540);const r={},s=i.createContext(r);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);