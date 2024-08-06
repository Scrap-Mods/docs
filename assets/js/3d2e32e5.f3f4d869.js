"use strict";(self.webpackChunkscrap_docs=self.webpackChunkscrap_docs||[]).push([[2e3],{7619:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=i(4848),t=i(8453);const o={title:"Joining"},s="Joining",c={id:"networking/protocol/joining",title:"Joining",description:"Joining is the process of establishing a connection between two peers. It is a critical part of the protocol, as it is the only way to verify that the peer you are connected to is the peer you intended to connect to. It is also the only way to verify that the peer you are connected to is running the correct version of the protocol.",source:"@site/docs/networking/protocol/joining.mdx",sourceDirName:"networking/protocol",slug:"/networking/protocol/joining",permalink:"/docs/networking/protocol/joining",draft:!1,unlisted:!1,editUrl:"https://pr.new/github.com/Scrap-Mods/docs/blob/main/docs/networking/protocol/joining.mdx",tags:[],version:"current",frontMatter:{title:"Joining"},sidebar:"networkingSidebar",previous:{title:"Format",permalink:"/docs/networking/protocol/format"},next:{title:"Playing - WIP",permalink:"/docs/networking/protocol/playing"}},l={},a=[{value:"Packets",id:"packets",level:2},{value:"Joining Sequence",id:"joining-sequence",level:2},{value:"Public",id:"public",level:3},{value:"Friends Only",id:"friends-only",level:3},{value:"Friends of Friends - WIP",id:"friends-of-friends---wip",level:3},{value:"Private",id:"private",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"joining",children:"Joining"}),"\n",(0,r.jsx)(n.p,{children:"Joining is the process of establishing a connection between two peers. It is a critical part of the protocol, as it is the only way to verify that the peer you are connected to is the peer you intended to connect to. It is also the only way to verify that the peer you are connected to is running the correct version of the protocol."}),"\n",(0,r.jsxs)(n.p,{children:["Joining packets range from packet ID ",(0,r.jsx)(n.code,{children:"0"})," -> ",(0,r.jsx)(n.code,{children:"13"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"packets",children:"Packets"}),"\n",(0,r.jsx)(n.p,{children:"In the joining sequence, the following packets are used:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../../packets/01-hello",children:"01 - Hello"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../../packets/02-server-info",children:"02 - Server Info"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../../packets/03-request-passphrase",children:"03 - Request Passphrase"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../../packets/04-respond-passphrase",children:"04 - Respond Passphrase"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../../packets/05-client-accepted",children:"05 - Client Accepted"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../../packets/06-file-checksums",children:"06 - File Checksums"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../../packets/07-checksums-accepted",children:"07 - Checksums Accepted"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../../packets/08-checksums-denied",children:"08 - Checksums Denied"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../../packets/09-character-info",children:"09 - Character Info"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../../packets/10-join-confirmation",children:"10 - Join Confirmation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../../packets/13-generic-initialization-data",children:"13 - Generic Initialization Data"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"joining-sequence",children:"Joining Sequence"}),"\n",(0,r.jsxs)(n.p,{children:["The joining sequence depends on the ",(0,r.jsx)(n.code,{children:"Multiplayer"})," setting of the server."]}),"\n",(0,r.jsx)(n.h3,{id:"public",children:"Public"}),"\n",(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    Server->>Client: Client Accepted\n    Client->>Server: Hello\n    Server->>Client: Server Info\n    Server->>Client: Generic Initialization Data\n    Server--\x3eClient: 29\n    Client->>Server: File Checksums\n    Server->>Client: Checksums Accepted\n    Client->>Server: Character Info\n    Server->>Client: Join Confirmation"}),"\n",(0,r.jsx)(n.h3,{id:"friends-only",children:"Friends Only"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"If friended:"})}),"\n",(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    Client->>Server: Initiate connection\n    Server->>Client: Client Accepted\n    Client->>Server: Hello\n    Server->>Client: Server Info\n    Server->>Client: Generic Initialization Data\n    Server--\x3eClient: 29\n    Client->>Server: File Checksums\n    Server->>Client: Checksums Accepted\n    Client->>Server: Character Info\n    Server->>Client: Join Confirmation"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"If un-friended:"})}),"\n",(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    Client->>Server: Initiate connection\n    Server->>Client: Close connection"}),"\n",(0,r.jsx)(n.h3,{id:"friends-of-friends---wip",children:"Friends of Friends - WIP"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"If friended:"})}),"\n",(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    Client->>Server: Initiate connection\n    Server->>Client: Client Accepted\n    Client->>Server: Hello\n    Server->>Client: Server Info\n    Server->>Client: Generic Initialization Data\n    Server--\x3eClient: 29\n    Client->>Server: File Checksums\n    Server->>Client: Checksums Accepted\n    Client->>Server: Character Info\n    Server->>Client: Join Confirmation"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"If passphrase is valid:"})}),"\n",(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    Client->>Server: Initiate connection\n    Server->>Client: Request Passphrase\n    Client->>Server: Respond Passphrase\n    Server->>Client: Client Accepted \n    Client->>Server: Hello\n    Server->>Client: Server Info\n    Server->>Client: Generic Initialization Data\n    Server--\x3eClient: 29\n    Client->>Server: File Checksums\n    Server->>Client: Checksums Accepted\n    Client->>Server: Character Info\n    Server->>Client: Join Confirmation"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"If passphrase is invalid:"})}),"\n",(0,r.jsx)(n.p,{children:"Todo"}),"\n",(0,r.jsx)(n.h3,{id:"private",children:"Private"}),"\n",(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    Client->>Server: Initiate connection\n    Server->>Client: Close connection"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var r=i(6540);const t={},o=r.createContext(t);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);