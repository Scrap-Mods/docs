"use strict";(self.webpackChunkscrap_docs=self.webpackChunkscrap_docs||[]).push([[5588],{129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=n(4848),i=n(8453);const r={title:"30 - Player Movement"},d="Player Movement",l={id:"networking/packets/30-player-movement",title:"30 - Player Movement",description:"This packet contains pressed movement keys and the player's look direction. It does not contain any position coordinates.",source:"@site/docs/networking/packets/30-player-movement.mdx",sourceDirName:"networking/packets",slug:"/networking/packets/30-player-movement",permalink:"/docs/networking/packets/30-player-movement",draft:!1,unlisted:!1,editUrl:"https://pr.new/github.com/Scrap-Mods/docs/blob/main/docs/networking/packets/30-player-movement.mdx",tags:[],version:"current",frontMatter:{title:"30 - Player Movement"},sidebar:"networkingSidebar",previous:{title:"29 - Compound Packet",permalink:"/docs/networking/packets/29-compound-packet"},next:{title:"31 - Equipped Item Changed",permalink:"/docs/networking/packets/31-hotbar-item-changed"}},o={},c=[{value:"Structure",id:"structure",level:2},{value:"Keys bitfield",id:"keys-bitfield",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"player-movement",children:"Player Movement"}),"\n",(0,s.jsx)(t.p,{children:"This packet contains pressed movement keys and the player's look direction. It does not contain any position coordinates."}),"\n",(0,s.jsx)(t.p,{children:"The client sends this packet to the server once every tick. If the client's framerate drops below the tickrate, at most one packet is sent per frame."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"ID"}),": 0x1E (30)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Size"}),": 8 bytes"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"LZ4 Compressed"}),": Yes"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"State"}),": Playing"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Bound To"}),": Client -> Server"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Offset"}),(0,s.jsx)(t.th,{children:"Field Name"}),(0,s.jsx)(t.th,{children:"Field Type"}),(0,s.jsx)(t.th,{children:"Notes"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0x00"}),(0,s.jsx)(t.td,{children:"Tick"}),(0,s.jsx)(t.td,{children:"be u32"}),(0,s.jsx)(t.td,{children:"The current tick."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0x04"}),(0,s.jsx)(t.td,{children:"Keys"}),(0,s.jsx)(t.td,{children:"u8 bitfield"}),(0,s.jsxs)(t.td,{children:["Bitfield of which movement keys are pressed. See ",(0,s.jsx)(t.a,{href:"#keys-bitfield",children:"Keys bitfield"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0x05"}),(0,s.jsx)(t.td,{children:"Direction"}),(0,s.jsx)(t.td,{children:"u8"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)("p",{children:"The horizontal direction, relative to the player's yaw, the player is walking in or has last walked in. When the player stops walking, this value is not updated."})," Strafing right starts at ",(0,s.jsx)(t.code,{children:"0"})," and increases when changing the direction counter-clockwise (to the left). When using the keyboard, only distinct increments of ",(0,s.jsx)(t.code,{children:"32"})," can be achieved, but the server supports any value between ",(0,s.jsx)(t.code,{children:"0"})," and ",(0,s.jsx)(t.code,{children:"255"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0x06"}),(0,s.jsx)(t.td,{children:"Yaw"}),(0,s.jsx)(t.td,{children:"u8"}),(0,s.jsxs)(t.td,{children:["The player's horizontal look rotation. A yaw of ",(0,s.jsx)(t.code,{children:"0"})," means the player is looking into the positive Y direction. Rotating counter-clockwise (to the left) increases the yaw. After reaching ",(0,s.jsx)(t.code,{children:"255"}),", the yaw overflows back to ",(0,s.jsx)(t.code,{children:"0"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0x07"}),(0,s.jsx)(t.td,{children:"Pitch"}),(0,s.jsx)(t.td,{children:"u8"}),(0,s.jsxs)(t.td,{children:["The player's vertical look rotation. A pitch of ",(0,s.jsx)(t.code,{children:"0"})," means the player is looking straight down (into the negative Z direction). Looking straight up yields a pitch of ",(0,s.jsx)(t.code,{children:"128"}),"."]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"keys-bitfield",children:"Keys bitfield"}),"\n",(0,s.jsx)(t.p,{children:"Contains information about which movement keys are pressed. All bits are always low while the player's character is seated or tumbling."}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Bits"}),(0,s.jsx)("th",{children:"Field name"}),(0,s.jsx)("th",{children:"Notes"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"7"}),(0,s.jsx)("td",{rowspan:"3",children:"Unused"}),(0,s.jsx)("td",{rowspan:"3",children:"Guaranteed to not be used. Always low."})]}),(0,s.jsx)("tr",{children:(0,s.jsx)("td",{children:"6"})}),(0,s.jsx)("tr",{children:(0,s.jsx)("td",{children:"5"})}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"4"}),(0,s.jsx)("td",{children:"Aim"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.p,{children:"High when the player is aiming with a tool. This value is set using"}),(0,s.jsx)("a",{href:"https://scrapmechanic.com/api/userdata_Game_Tool.html#setMovementSlowDown",children:(0,s.jsxs)("code",{children:["Tool",":setMovementSlowDown","(boolean)"]})}),(0,s.jsx)(t.p,{children:"and read using"}),(0,s.jsx)("a",{href:"https://scrapmechanic.com/api/userdata_Game_Character.html#isAiming",children:(0,s.jsxs)("code",{children:["Character",":isAiming","()"]})}),(0,s.jsx)(t.p,{children:"."})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"3"}),(0,s.jsx)("td",{children:"Sprint"}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)("p",{children:"High when the player is sprinting while moving horizontally. Low in all other cases, including when the player is holding the Sprint button while standing still."}),"\nAlways lags one tick behind when starting a sprint from standstill. The sprint bitflag also continues to stay high for one more tick after the player has stopped moving horizontally."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"2"}),(0,s.jsx)("td",{children:"Horizontal"}),(0,s.jsx)("td",{children:"High when any of the Move Forward, Move Backward, Stafe Left or Strafe Right keys are pressed."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"1"}),(0,s.jsx)("td",{children:"Crawl"}),(0,s.jsx)("td",{children:"High when the player is holding the Crawl (crouch) keybind. This is not connected to the actual crawl state of the player's character. If the character is crawling and unable to stand up, the value can be either high or low depending on wether the player is holding the Crawl key or not."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"0"}),(0,s.jsx)("td",{children:"Jump"}),(0,s.jsx)("td",{children:"High when the player is holding the Jump button. The player's character does not have to be on the ground."})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>l});var s=n(6540);const i={},r=s.createContext(i);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);