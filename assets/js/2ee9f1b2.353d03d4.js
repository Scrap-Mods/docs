"use strict";(self.webpackChunkscrap_docs=self.webpackChunkscrap_docs||[]).push([[4997],{5224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=n(4848),s=n(8453);const a={title:"Generic"},c=void 0,o={id:"structures/imhex-patterns/worlddata",title:"Generic",description:"",source:"@site/docs/structures/imhex-patterns/worlddata.md",sourceDirName:"structures/imhex-patterns",slug:"/structures/imhex-patterns/worlddata",permalink:"/docs/structures/imhex-patterns/worlddata",draft:!1,unlisted:!1,editUrl:"https://pr.new/github.com/Scrap-Mods/docs/blob/main/docs/structures/imhex-patterns/worlddata.md",tags:[],version:"current",frontMatter:{title:"Generic"},sidebar:"structuresSidebar",previous:{title:"Player",permalink:"/docs/structures/imhex-patterns/playerdata"},next:{title:"Lua Object",permalink:"/docs/structures/lua-object"}},u={},d=[];function i(e){const t={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"struct World {\n    be u32 seed;\n    \n    be u16 filenameLength;\n    char filename[filenameLength];\n    \n    be u16 classnameLength;\n    char classname[classnameLength];\n    \n    be u16 dataLength;\n    char data[dataLength];\n};\n\nWorld world @ 0x00;\n"})})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var r=n(6540);const s={},a=r.createContext(s);function c(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);