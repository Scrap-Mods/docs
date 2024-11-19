"use strict";(self.webpackChunkscrap_docs=self.webpackChunkscrap_docs||[]).push([[5067],{1089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=n(4848),s=n(8453);const a={title:"Generic"},c=void 0,o={id:"structures/imhex-patterns/genericdata",title:"Generic",description:"",source:"@site/docs/structures/imhex-patterns/genericdata.md",sourceDirName:"structures/imhex-patterns",slug:"/structures/imhex-patterns/genericdata",permalink:"/docs/structures/imhex-patterns/genericdata",draft:!1,unlisted:!1,editUrl:"https://pr.new/github.com/Scrap-Mods/docs/blob/main/docs/structures/imhex-patterns/genericdata.md",tags:[],version:"current",frontMatter:{title:"Generic"},sidebar:"structuresSidebar",previous:{title:"Container",permalink:"/docs/structures/imhex-patterns/container"},next:{title:"Mods",permalink:"/docs/structures/imhex-patterns/mods"}},i={},d=[];function u(e){const t={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"struct DynamicDataHeader {\n\tu128 uid;\n\tu16 channel; // found in savegameversion 26 for player data\n\tu32 key;\n\tbe u16 worldId;\n\tu32 flags;\n\tu8 compressedSize;\n};\n\nstruct Body {\n\tpadding[1];\n\tfloat z;\n\tfloat y;\n\tfloat x;\n};\n\nstruct Trailer {\n\tbe u64 steamId64;\n\tbe u32 container;\n\tbe u32 unknown;\n\tbe u32 unknown;\n};\n\nstruct Player {\n\tDynamicDataHeader header;\n\tBody body;\n\tTrailer trailer @ addressof(body) + header.compressedSize - 0x14;\n\tu8 compressed[header.compressedSize] @ addressof(body);\n};\n\nPlayer player @ 0x00;\n"})})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var r=n(6540);const s={},a=r.createContext(s);function c(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);