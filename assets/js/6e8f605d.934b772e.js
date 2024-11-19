"use strict";(self.webpackChunkscrap_docs=self.webpackChunkscrap_docs||[]).push([[7971],{9491:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var r=s(4848),n=s(8453);const i={title:"Character Customization"},c="Character Customization",d={id:"structures/character-customization",title:"Character Customization",description:"The Character Customization structure is used to store the customization of a character. It is used in the character file found in %APPDATA%/Axolot Games/Scrap Mechanic/User/User_/, as well as in some network packets.",source:"@site/docs/structures/character-customization.md",sourceDirName:"structures",slug:"/structures/character-customization",permalink:"/docs/structures/character-customization",draft:!1,unlisted:!1,editUrl:"https://pr.new/github.com/Scrap-Mods/docs/blob/main/docs/structures/character-customization.md",tags:[],version:"current",frontMatter:{title:"Character Customization"},sidebar:"structuresSidebar",previous:{title:"Home",permalink:"/docs/structures/intro"},next:{title:"Character",permalink:"/docs/structures/imhex-patterns/character"}},o={},h=[{value:"Structure",id:"structure",level:2},{value:"Gender",id:"gender",level:2},{value:"Customization Options",id:"customization-options",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"character-customization",children:"Character Customization"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"Character Customization"})," structure is used to store the customization of a character. It is used in the ",(0,r.jsx)(t.code,{children:"character"})," file found in ",(0,r.jsx)(t.code,{children:"%APPDATA%/Axolot Games/Scrap Mechanic/User/User_<SteamId64>/"}),", as well as in some network packets."]}),"\n",(0,r.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Offset"}),(0,r.jsx)(t.th,{children:"Field Name"}),(0,r.jsx)(t.th,{children:"Field Type"}),(0,r.jsx)(t.th,{children:"Notes"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0x00"}),(0,r.jsx)(t.td,{children:"Version"}),(0,r.jsx)(t.td,{children:"be u32"}),(0,r.jsx)(t.td,{children:"Not confirmed, but this field is always 2."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0x04"}),(0,r.jsx)(t.td,{children:"Gender"}),(0,r.jsxs)(t.td,{children:["enum ",(0,r.jsx)(t.a,{href:"#gender",children:"Gender"})," : u8"]}),(0,r.jsx)(t.td,{children:"This is not a boolean. If it were, everything after this field would be shifted by one bit."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0x05"}),(0,r.jsx)(t.td,{children:"Options Length"}),(0,r.jsx)(t.td,{children:"u8"}),(0,r.jsx)(t.td,{children:"The number of customization options."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0x06"}),(0,r.jsx)(t.td,{children:"Options UUIDs"}),(0,r.jsx)(t.td,{children:"be u128[Options Length]"}),(0,r.jsxs)(t.td,{children:["The UUIDs of the customization options. Note that the UUIDs are big-endian, which is uncommon. See ",(0,r.jsx)(t.a,{href:"#customization-options",children:"Customization Options"})," for the indices of the options."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0x06 + 16 * Options Length"}),(0,r.jsx)(t.td,{children:"Options Palette Indeces"}),(0,r.jsx)(t.td,{children:"be u32[Options Length]"}),(0,r.jsxs)(t.td,{children:["The color palette indeces of the customization options. See ",(0,r.jsx)(t.a,{href:"#customization-options",children:"Customization Options"})," for the indices of the options. Only ",(0,r.jsx)(t.code,{children:"Face"})," and ",(0,r.jsx)(t.code,{children:"Hair"})," can be configured through in-game user interfaces."]})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["A list of all customization option UUIDs and color palettes can be found in ",(0,r.jsx)(t.code,{children:"$GAME_DATA/Character/customization_options.json"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"gender",children:"Gender"}),"\n",(0,r.jsx)(t.p,{children:"There are currently two genders in the game."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Gender"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Male"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Female"}),(0,r.jsx)(t.td,{children:"1"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"customization-options",children:"Customization Options"}),"\n",(0,r.jsx)(t.p,{children:"These are the indices of the customization options in the array of customization options."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Option"}),(0,r.jsx)(t.th,{children:"Index"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Face"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Hair"}),(0,r.jsx)(t.td,{children:"1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"FacialHair"}),(0,r.jsx)(t.td,{children:"2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Torso"}),(0,r.jsx)(t.td,{children:"3"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Gloves"}),(0,r.jsx)(t.td,{children:"4"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Shoes"}),(0,r.jsx)(t.td,{children:"5"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Pants"}),(0,r.jsx)(t.td,{children:"6"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Hat"}),(0,r.jsx)(t.td,{children:"7"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Backpack"}),(0,r.jsx)(t.td,{children:"8"})]})]})]})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>d});var r=s(6540);const n={},i=r.createContext(n);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);