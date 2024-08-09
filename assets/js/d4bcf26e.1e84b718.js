"use strict";(self.webpackChunkscrap_docs=self.webpackChunkscrap_docs||[]).push([[2681],{2020:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=s(4848),r=s(8453);const i={title:"19 - Display Alert Text"},l="Display Alert Text",d={id:"networking/packets/19-display-alert-text",title:"19 - Display Alert Text",description:"Displays an alert message.",source:"@site/docs/networking/packets/19-display-alert-text.mdx",sourceDirName:"networking/packets",slug:"/networking/packets/19-display-alert-text",permalink:"/docs/networking/packets/19-display-alert-text",draft:!1,unlisted:!1,editUrl:"https://pr.new/github.com/Scrap-Mods/docs/blob/main/docs/networking/packets/19-display-alert-text.mdx",tags:[],version:"current",frontMatter:{title:"19 - Display Alert Text"},sidebar:"networkingSidebar",previous:{title:"18 - Display Message",permalink:"/docs/networking/packets/18-display-message"},next:{title:"21 - Initialization Network Update",permalink:"/docs/networking/packets/21-initialization-network-update"}},a={},c=[{value:"Structure",id:"structure",level:2},{value:"Known messages",id:"known-messages",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"display-alert-text",children:"Display Alert Text"}),"\n",(0,n.jsx)(t.p,{children:"Displays an alert message."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"ID"}),": 0x13 (19)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Size"}),": Variable"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"LZ4 Compressed"}),": Yes"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"State"}),": Playing"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Bound To"}),": Server -> Client"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,n.jsx)(t.p,{children:"Setting the size to be shorter than the size of the message will cut of the end of the message."}),"\n",(0,n.jsx)(t.p,{children:"Setting the size to be larger than the size of the message will display only the alert icon, no text."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Offset"}),(0,n.jsx)(t.th,{children:"Field Name"}),(0,n.jsx)(t.th,{children:"Field Type"}),(0,n.jsx)(t.th,{children:"Notes"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0x00"}),(0,n.jsx)(t.td,{children:"Size"}),(0,n.jsx)(t.td,{children:"be u16"}),(0,n.jsx)(t.td,{children:"The size of the message."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0x02"}),(0,n.jsx)(t.td,{children:"Message"}),(0,n.jsx)(t.td,{children:"utf8 string"}),(0,n.jsx)(t.td,{children:"The utf-8 encoded message."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"known-messages",children:"Known messages"}),"\n",(0,n.jsx)(t.p,{children:"List of known messages that the server can send to the client."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Message"}),(0,n.jsx)(t.th,{children:"Occurs When"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"#{INFO_INVENTORY_FULL}"})}),(0,n.jsx)(t.td,{children:"The player's inventory is full and the player tries to remove a shape that should be added to the inventory, while in limited inventory mode."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Your host does not support that shape"})}),(0,n.jsxs)(t.td,{children:["Sending a ",(0,n.jsx)(t.a,{href:"/docs/networking/packets/34-place",children:"34 - Place"})," packet with a UUID that does not belong to a loaded shape."]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>d});var n=s(6540);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);