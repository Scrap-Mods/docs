"use strict";(self.webpackChunkscrap_docs=self.webpackChunkscrap_docs||[]).push([[7503],{9351:(e,i,n)=>{n.d(i,{Ay:()=>d,RM:()=>r});var t=n(4848),s=n(8453);const r=[];function l(e){const i={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(i.admonition,{type:"note",children:[(0,t.jsx)(i.p,{children:"The structure of this packet is very similar to those of the following packets:"}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"../11-script-initialization-data",children:"11 - Script Initialization Data"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"../13-generic-initialization-data",children:"13 - Generic Initialization Data"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"../25-script-data-s2c",children:"25 - Script Data (S->C)"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"../26-script-data-c2s",children:"26 - Script Data (C->S)"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"../27-generic-data-s2c",children:"27 - Generic Data (S->C)"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"../28-generic-data-c2s",children:"28 - Generic Data (C->S)"})}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},9058:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var t=n(4848),s=n(8453),r=n(9351);const l={title:"13 - Generic Initialization Data"},d="Generic Initialization Data",a={id:"networking/packets/13-generic-initialization-data",title:"13 - Generic Initialization Data",description:"This packet is sent by the server to the client while joining a game. It contains the initialization data related to Lua scripts that can store data. The only known use of this packet is to send the terrain data to the client.",source:"@site/docs/networking/packets/13-generic-initialization-data.mdx",sourceDirName:"networking/packets",slug:"/networking/packets/13-generic-initialization-data",permalink:"/docs/networking/packets/13-generic-initialization-data",draft:!1,unlisted:!1,editUrl:"https://pr.new/github.com/Scrap-Mods/docs/blob/main/docs/networking/packets/13-generic-initialization-data.mdx",tags:[],version:"current",frontMatter:{title:"13 - Generic Initialization Data"},sidebar:"networkingSidebar",previous:{title:"11 - Script Initialization Data",permalink:"/docs/networking/packets/11-script-initialization-data"},next:{title:"18 - Display Message",permalink:"/docs/networking/packets/18-display-message"}},c={},h=[{value:"Structure",id:"structure",level:2},...r.RM,{value:"BlobData Payloads",id:"blobdata-payloads",level:2},{value:"World Info",id:"world-info",level:3},{value:"Payload",id:"payload",level:4},{value:"Gameplay Options",id:"gameplay-options",level:3},{value:"Payload",id:"payload-1",level:4},{value:"Example",id:"example",level:4},{value:"Player Data",id:"player-data",level:3},{value:"Payload",id:"payload-2",level:4}];function o(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"generic-initialization-data",children:"Generic Initialization Data"}),"\n",(0,t.jsx)(i.p,{children:"This packet is sent by the server to the client while joining a game. It contains the initialization data related to Lua scripts that can store data. The only known use of this packet is to send the terrain data to the client."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"ID"}),": 0x0B (11)"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Size"}),": Variable"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"LZ4 Compressed"}),": Yes"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"State"}),": Joining"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Bound To"}),": Server -> Client"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"structure",children:"Structure"}),"\n",(0,t.jsx)(r.Ay,{}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Field Name"}),(0,t.jsx)(i.th,{children:"Field Type"}),(0,t.jsx)(i.th,{children:"Notes"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Game Tick"}),(0,t.jsx)(i.td,{children:"be u32"}),(0,t.jsx)(i.td,{children:"The tick when the server sent this packet."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Data"}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.a,{href:"/docs/structures/networking/blobdata",children:"BlobData"}),"[Until ",(0,t.jsx)("abbr",{title:"End of Stream",children:"EOS"}),"]"]}),(0,t.jsx)(i.td,{children:"The data the scripted classes are initialized with. This array is read until the end of the packet."})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"blobdata-payloads",children:"BlobData Payloads"}),"\n",(0,t.jsxs)(i.p,{children:["In this subsection, UIDs of known ",(0,t.jsx)(i.a,{href:"/docs/structures/networking/blobdata",children:"BlobData"})," and their payloads are listed. This is not guaranteed to be an exhaustive list."]}),"\n",(0,t.jsx)(i.h3,{id:"world-info",children:"World Info"}),"\n",(0,t.jsxs)(i.p,{children:["This ",(0,t.jsx)(i.a,{href:"/docs/structures/networking/blobdata",children:"BlobData"})," contains information about the world the player is currently joining."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"UID"}),": ",(0,t.jsx)(i.code,{children:"3ff36c8b-93f7-4428-ae4d-429a6f0cf77d"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Key"}),": The ID of the world, stored as ",(0,t.jsx)(i.code,{children:"le u32"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"World ID"}),": The ID of the world"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Flags"}),": 13 (0b1101)"]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"payload",children:"Payload"}),"\n",(0,t.jsxs)(i.p,{children:["This structure contains all parameters passed to ",(0,t.jsx)(i.code,{children:"sm.world.createWorld()"})," when the world was created."]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Field Name"}),(0,t.jsx)(i.th,{children:"Field Type"}),(0,t.jsx)(i.th,{children:"Notes"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Seed"}),(0,t.jsx)(i.td,{children:"be u32"}),(0,t.jsx)(i.td,{children:"The seed of the world."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Filename"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/docs/structures/networking/string",children:"String"})}),(0,t.jsx)(i.td,{children:"The filename of the world."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Classname"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/docs/structures/networking/string",children:"String"})}),(0,t.jsx)(i.td,{children:"The classname of the world."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Terrain Params"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/docs/structures/networking/string",children:"String"})}),(0,t.jsx)(i.td,{children:"A stringified JSON object containing the terrain parameters of the world."})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"gameplay-options",children:"Gameplay Options"}),"\n",(0,t.jsxs)(i.p,{children:["This ",(0,t.jsx)(i.a,{href:"/docs/structures/networking/blobdata",children:"BlobData"})," contains the gameplay options of the world."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"UID"}),": ",(0,t.jsx)(i.code,{children:"44ac020c-aec7-4f8b-b230-34d2e3bd23eb"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Key"}),": ",(0,t.jsx)(i.code,{children:"0"}),", stored as ",(0,t.jsx)(i.code,{children:"le u32"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"World ID"}),": ",(0,t.jsx)(i.a,{href:"/docs/structures/networking/blobdata#special-world-ids",children:"No World"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Flags"}),": 15 (0b1111)"]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"payload-1",children:"Payload"}),"\n",(0,t.jsx)(i.p,{children:"This structure stores the difficulty, multiplayer setting and the physics quality."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Field Name"}),(0,t.jsx)(i.th,{children:"Field Type"}),(0,t.jsx)(i.th,{children:"Notes"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Options"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/docs/structures/networking/string",children:"String"})}),(0,t.jsx)(i.td,{children:"A stringified JSON object containing the gameplay options of the world."})]})})]}),"\n",(0,t.jsx)(i.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:'{"Difficulty":1,"Multiplayer":2,"PhysicsQuality":8}\\n'})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Difficulty"}),": The difficulty of the game as returned by ",(0,t.jsx)(i.code,{children:"sm.game.getDifficulty()"}),".","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"0"})," is ",(0,t.jsx)(i.code,{children:"Easy"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"1"})," is ",(0,t.jsx)(i.code,{children:"Normal"})," (default)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Multiplayer"}),": The multiplayer setting of the game.","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"0"})," is ",(0,t.jsx)(i.code,{children:"Private"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"1"})," is ",(0,t.jsx)(i.code,{children:"Friends Only"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"2"})," is ",(0,t.jsx)(i.code,{children:"Friends of Friends"})," (default)"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"3"})," is ",(0,t.jsx)(i.code,{children:"Public"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"PhysicsQuality"}),": The quality of the physics simulation.","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"0"})," is ",(0,t.jsx)(i.code,{children:"Simple 1"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"8"})," is ",(0,t.jsx)(i.code,{children:"Advanced"})," (default)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"player-data",children:"Player Data"}),"\n",(0,t.jsxs)(i.p,{children:["This ",(0,t.jsx)(i.a,{href:"/docs/structures/networking/blobdata",children:"BlobData"})," contains information about a player."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"UID"}),": ",(0,t.jsx)(i.code,{children:"51868883-d2d2-4953-9135-1ab0bdc2a47e"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Key"}),": The ID of the player, stored as ",(0,t.jsx)(i.code,{children:"le u32"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"World ID"}),": ",(0,t.jsx)(i.a,{href:"/docs/structures/networking/blobdata#special-world-ids",children:"No World"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Flags"}),": 13 (0b1101)"]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"payload-2",children:"Payload"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Field Name"}),(0,t.jsx)(i.th,{children:"Field Type"}),(0,t.jsx)(i.th,{children:"Notes"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Character ID"}),(0,t.jsx)(i.td,{children:"be u32"}),(0,t.jsx)(i.td,{children:"The ID of the character of the player."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Steam ID 64"}),(0,t.jsx)(i.td,{children:"be u64"}),(0,t.jsx)(i.td,{children:"The Steam ID of the player."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Inventory Container ID"}),(0,t.jsx)(i.td,{children:"be u32"}),(0,t.jsx)(i.td,{children:"The ID of the inventory container of the player."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Carry Container ID"}),(0,t.jsx)(i.td,{children:"be u32"}),(0,t.jsx)(i.td,{children:"The ID of the carry container of the player."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Carry Color"}),(0,t.jsx)(i.td,{children:"be u32"}),(0,t.jsxs)(i.td,{children:["The color of the part the player is currently carrying. Stored as ",(0,t.jsx)(i.code,{children:"0xAABBGGRR"}),". ",(0,t.jsx)(i.code,{children:"0xFFFFFFFF"})," if the player is not carrying anything."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Unknown"}),(0,t.jsx)(i.td,{children:"u8"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Name Size"}),(0,t.jsx)(i.td,{children:"u8"}),(0,t.jsx)(i.td,{children:"The size of the name of the player."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Name"}),(0,t.jsx)(i.td,{children:"char[Name Size]"}),(0,t.jsx)(i.td,{children:"The name of the player, encoded in UTF-8."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Character Customization"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/docs/structures/character-customization",children:"Character Customization"})}),(0,t.jsx)(i.td,{children:"The customization options of the character of the player."})]})]})]})]})}function x(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>d});var t=n(6540);const s={},r=t.createContext(s);function l(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);