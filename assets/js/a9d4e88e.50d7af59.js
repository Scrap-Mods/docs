"use strict";(self.webpackChunkscrap_docs=self.webpackChunkscrap_docs||[]).push([[387],{9351:(e,t,s)=>{s.d(t,{Ay:()=>c,RM:()=>r});var n=s(4848),i=s(8453);const r=[];function a(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsx)(t.p,{children:"The structure of this packet is very similar to those of the following packets:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../11-script-initialization-data",children:"11 - Script Initialization Data"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../13-generic-initialization-data",children:"13 - Generic Initialization Data"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../25-script-data-s2c",children:"25 - Script Data (S->C)"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../26-script-data-c2s",children:"26 - Script Data (C->S)"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../27-generic-data-s2c",children:"27 - Generic Data (S->C)"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../28-generic-data-c2s",children:"28 - Generic Data (C->S)"})}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},4889:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var n=s(4848),i=s(8453),r=s(9351);const a={title:"27 - Generic Data (S->C) - WIP"},c="Generic Data (S->C)",d={id:"networking/packets/27-generic-data-s2c",title:"27 - Generic Data (S->C) - WIP",description:"To be documented.",source:"@site/docs/networking/packets/27-generic-data-s2c.mdx",sourceDirName:"networking/packets",slug:"/networking/packets/27-generic-data-s2c",permalink:"/docs/networking/packets/27-generic-data-s2c",draft:!1,unlisted:!1,editUrl:"https://pr.new/github.com/Scrap-Mods/docs/blob/main/docs/networking/packets/27-generic-data-s2c.mdx",tags:[],version:"current",frontMatter:{title:"27 - Generic Data (S->C) - WIP"},sidebar:"networkingSidebar",previous:{title:"26 - Script Data (C->S) - WIP",permalink:"/docs/networking/packets/26-script-data-c2s"},next:{title:"28 - Generic Data (C->S) - WIP",permalink:"/docs/networking/packets/28-generic-data-c2s"}},l={},h=[{value:"Structure",id:"structure",level:2},...r.RM,{value:"BlobData Payloads",id:"blobdata-payloads",level:2},{value:"Chat Message",id:"chat-message",level:3},{value:"Payload",id:"payload",level:4}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"generic-data-s-c",children:"Generic Data (S->C)"}),"\n",(0,n.jsx)(t.p,{children:"To be documented."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"ID"}),": 0x1B (27)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Size"}),": Variable"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"LZ4 Compressed"}),": Yes"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"State"}),": Playing"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Bound To"}),": Server -> Client"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,n.jsx)(r.Ay,{}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field Name"}),(0,n.jsx)(t.th,{children:"Field Type"}),(0,n.jsx)(t.th,{children:"Notes"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Game Tick"}),(0,n.jsx)(t.td,{children:"be u32"}),(0,n.jsx)(t.td,{children:"The tick when the server sent this packet."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Data"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"/docs/structures/networking/blobdata",children:"BlobData"}),"[Until ",(0,n.jsx)("abbr",{title:"End of Stream",children:"EOS"}),"]"]}),(0,n.jsx)(t.td,{children:"The generic data. This array is read until the end of the packet."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"blobdata-payloads",children:"BlobData Payloads"}),"\n",(0,n.jsxs)(t.p,{children:["In this subsection, known ",(0,n.jsx)(t.a,{href:"/docs/structures/networking/blobdata",children:"BlobData"})," payloads are listed. This is not guaranteed to be an exhaustive list."]}),"\n",(0,n.jsx)(t.h3,{id:"chat-message",children:"Chat Message"}),"\n",(0,n.jsxs)(t.p,{children:["This ",(0,n.jsx)(t.a,{href:"/docs/structures/networking/blobdata",children:"BlobData"})," contains a single chat message. It is broadcasted to all players when a players sends a chat message. Additionally, when a player joins the game, the server broadcasts the join message with an empty sender."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"UID"}),": ",(0,n.jsx)(t.code,{children:"46968863-090a-46b8-ad99-1159b53450fe"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Key"}),": The ID of the chat message, stored as ",(0,n.jsx)(t.code,{children:"le u32"}),". Starts at ",(0,n.jsx)(t.code,{children:"1"})," for the first message of the current session, and increments by ",(0,n.jsx)(t.code,{children:"1"})," for every new chat message sent. The value of this field does not appear to be used."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"World ID"}),": ",(0,n.jsx)(t.a,{href:"/docs/structures/networking/blobdata#special-world-ids",children:"No World"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Flags"}),": 20 (0b10100)"]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"payload",children:"Payload"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field Name"}),(0,n.jsx)(t.th,{children:"Field Type"}),(0,n.jsx)(t.th,{children:"Notes"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Timestamp"}),(0,n.jsx)(t.td,{children:"be u64"}),(0,n.jsxs)(t.td,{children:["The UNIX timestamp in seconds at which this message is sent. The localized time is visible in the chat when the ",(0,n.jsx)(t.code,{children:"/time"})," chat command is used, unless the timestamp is ",(0,n.jsx)(t.code,{children:"0"}),", then it is never displayed."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Sender"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/structures/networking/string",children:"String"})}),(0,n.jsxs)(t.td,{children:["The sender of the chat message, prefixed with the MyGUI color override. If this field is empty, the ",(0,n.jsx)(t.code,{children:": "})," separator between the sender and the message is not printed to the chat."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Message"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/structures/networking/string",children:"String"})}),(0,n.jsx)(t.td,{children:"The UTF-8 encoded contents of the chat message."})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>c});var n=s(6540);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);