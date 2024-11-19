"use strict";(self.webpackChunkscrap_docs=self.webpackChunkscrap_docs||[]).push([[7821],{7571:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>h,contentTitle:()=>l,default:()=>o,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var d=n(4848),t=n(8453);const s={title:"34 - Place"},l="Place",r={id:"networking/packets/34-place",title:"34 - Place",description:"This packet is sent when the player places a shape.",source:"@site/docs/networking/packets/34-place.mdx",sourceDirName:"networking/packets",slug:"/networking/packets/34-place",permalink:"/docs/networking/packets/34-place",draft:!1,unlisted:!1,editUrl:"https://pr.new/github.com/Scrap-Mods/docs/blob/main/docs/networking/packets/34-place.mdx",tags:[],version:"current",frontMatter:{title:"34 - Place"},sidebar:"networkingSidebar",previous:{title:"33 - Drop Item Stack",permalink:"/docs/networking/packets/33-drop-item-stack"},next:{title:"35 - Remove",permalink:"/docs/networking/packets/35-remove"}},h={},c=[{value:"Structure",id:"structure",level:2},{value:"Vec3i",id:"vec3i",level:3},{value:"PlacedOn Enum",id:"placedon-enum",level:3},{value:"PlacedOn 2 - Terrain Surface",id:"placedon-2---terrain-surface",level:4},{value:"PlacedOn 3 - Terrain Asset",id:"placedon-3---terrain-asset",level:4},{value:"PlacedOn 4 - Body",id:"placedon-4---body",level:4},{value:"PlacedOn 6 - Lift",id:"placedon-6---lift",level:4},{value:"PlacedOn 8 - Joint",id:"placedon-8---joint",level:4},{value:"Validation",id:"validation",level:2},{value:"Hotbar index",id:"hotbar-index",level:3},{value:"Limited inventory mode",id:"limited-inventory-mode",level:4},{value:"Unlimited inventory mode",id:"unlimited-inventory-mode",level:4},{value:"Total item quantity",id:"total-item-quantity",level:3},{value:"Position",id:"position",level:3},{value:"Size",id:"size",level:3},{value:"Limited inventory mode",id:"limited-inventory-mode-1",level:4},{value:"Rotation",id:"rotation",level:3},{value:"Uuids",id:"uuids",level:3},{value:"Limited inventory mode",id:"limited-inventory-mode-2",level:4},{value:"Unlimited inventory mode",id:"unlimited-inventory-mode-1",level:4},{value:"Placed on",id:"placed-on",level:3}];function a(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.h1,{id:"place",children:"Place"}),"\n",(0,d.jsx)(i.p,{children:"This packet is sent when the player places a shape."}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.strong,{children:"ID"}),": 0x22 (34)"]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.strong,{children:"Size"}),": 109 bytes"]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.strong,{children:"LZ4 Compressed"}),": Yes"]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.strong,{children:"State"}),": Playing"]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.strong,{children:"Bound To"}),": Client -> Server"]}),"\n"]}),"\n",(0,d.jsx)(i.h2,{id:"structure",children:"Structure"}),"\n",(0,d.jsxs)(i.admonition,{type:"note",children:[(0,d.jsxs)(i.p,{children:["The ",(0,d.jsx)(i.code,{children:"Local Position"})," and ",(0,d.jsx)(i.code,{children:"Local Position Start"})," fields depend on the surface the shape is placed on. When local to the world, positions are relative to the world origin. Positions local to the body are in the same space as returned by ",(0,d.jsx)(i.code,{children:"shape:getLocalPosition()"}),"."]}),(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"ID"}),(0,d.jsx)(i.th,{children:"Placed On"}),(0,d.jsx)(i.th,{children:"Local positions"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"2"}),(0,d.jsx)(i.td,{children:"Terrain Surface"}),(0,d.jsx)(i.td,{children:"Local to world"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"3"}),(0,d.jsx)(i.td,{children:"Terrain Asset"}),(0,d.jsx)(i.td,{children:"Local to world"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"4"}),(0,d.jsx)(i.td,{children:"Body"}),(0,d.jsx)(i.td,{children:"Local to body"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"6"}),(0,d.jsx)(i.td,{children:"Lift"}),(0,d.jsx)(i.td,{children:"Local to world"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"8"}),(0,d.jsx)(i.td,{children:"Joint"}),(0,d.jsx)(i.td,{children:"Local to body"})]})]})]})]}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"Offset"}),(0,d.jsx)(i.th,{children:"Field Name"}),(0,d.jsx)(i.th,{children:"Field Type"}),(0,d.jsx)(i.th,{children:"Notes"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"0x00"}),(0,d.jsx)(i.td,{children:"Hotbar Index"}),(0,d.jsx)(i.td,{children:"be u32"}),(0,d.jsx)(i.td,{children:"The index of the placed item in the hotbar."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"0x04"}),(0,d.jsx)(i.td,{children:"Total Item Quantity"}),(0,d.jsx)(i.td,{children:"be u32"}),(0,d.jsxs)(i.td,{children:["The total amount of items of the same type in the player's inventory. Always ",(0,d.jsx)(i.code,{children:"1"})," when in unlimited inventory mode."]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"0x08"}),(0,d.jsx)(i.td,{children:"Size"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.a,{href:"#vec3i",children:"Vec3i"})}),(0,d.jsxs)(i.td,{children:["The size of the blocks placed. Always ",(0,d.jsx)(i.code,{children:"(0, 0, 0)"})," for parts, which the server ignores."]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"0x14"}),(0,d.jsx)(i.td,{children:"Local Position Start"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.a,{href:"#vec3i",children:"Vec3i"})}),(0,d.jsx)(i.td,{children:"The position in block units, local to the world or body, where the shape is placed on. The placed shape will be connected to all sticky faces adjacent to this position."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"0x20"}),(0,d.jsx)(i.td,{children:"Z Axis"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.a,{href:"#vec3i",children:"Vec3i"})}),(0,d.jsx)(i.td,{children:"The Z-axis of the placed shape."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"0x2C"}),(0,d.jsx)(i.td,{children:"X Axis"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.a,{href:"#vec3i",children:"Vec3i"})}),(0,d.jsx)(i.td,{children:"The X-axis of the placed shape."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"0x38"}),(0,d.jsx)(i.td,{children:"Local Position"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.a,{href:"#vec3i",children:"Vec3i"})}),(0,d.jsxs)(i.td,{children:["The position of the placed shape in block units, local to the world or body. If local to the body (see note), this value matches the value returned by the ",(0,d.jsx)(i.code,{children:"shape:getLocalPosition()"})," Lua API function."]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"0x44"}),(0,d.jsx)(i.td,{children:"Item Uuid"}),(0,d.jsx)(i.td,{children:"le u128"}),(0,d.jsx)(i.td,{children:"The UUID of the item in the inventory that is placed. This does not have to equal to the Shape Uuid. The Vacuum Pipes for example have multiple shapes that can be placed with a single item."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"0x54"}),(0,d.jsx)(i.td,{children:"Shape Uuid"}),(0,d.jsx)(i.td,{children:"le u128"}),(0,d.jsx)(i.td,{children:"The UUID of the placed shape."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"0x64"}),(0,d.jsx)(i.td,{children:"Placed On"}),(0,d.jsxs)(i.td,{children:["enum ",(0,d.jsx)(i.a,{href:"#placedon-enum",children:"PlacedOn"})," : u8"]}),(0,d.jsx)(i.td,{children:"The type of surface the shape is placed on."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"0x65"}),(0,d.jsx)(i.td,{children:"Placed On Data"}),(0,d.jsx)(i.td,{children:"... (8 bytes)"}),(0,d.jsx)(i.td,{children:"The data of the placed on surface."})]})]})]}),"\n",(0,d.jsx)(i.h3,{id:"vec3i",children:"Vec3i"}),"\n",(0,d.jsx)(i.admonition,{type:"note",children:(0,d.jsx)(i.p,{children:"The order of the coordinates is Z, Y, X, which may be seen as counterintuitive."})}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"Offset"}),(0,d.jsx)(i.th,{children:"Field Name"}),(0,d.jsx)(i.th,{children:"Field Type"}),(0,d.jsx)(i.th,{children:"Notes"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"0x00"}),(0,d.jsx)(i.td,{children:"Z"}),(0,d.jsx)(i.td,{children:"be s32"}),(0,d.jsx)(i.td,{children:"The signed Z coordinate."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"0x04"}),(0,d.jsx)(i.td,{children:"Y"}),(0,d.jsx)(i.td,{children:"be s32"}),(0,d.jsx)(i.td,{children:"The signed Y coordinate."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"0x08"}),(0,d.jsx)(i.td,{children:"X"}),(0,d.jsx)(i.td,{children:"be s32"}),(0,d.jsx)(i.td,{children:"The signed X coordinate."})]})]})]}),"\n",(0,d.jsx)(i.h3,{id:"placedon-enum",children:"PlacedOn Enum"}),"\n",(0,d.jsxs)(i.p,{children:["This is an exhaustive list. Packets with values not listed in the table are rejected by the server and ",(0,d.jsx)(i.code,{children:"Failed to create shape {<uuid>}"})," is printed to the console."]}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"ID"}),(0,d.jsx)(i.th,{children:"Placed On"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"2"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.a,{href:"#placedon-2---terrain-surface",children:"Terrain Surface"})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"3"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.a,{href:"#placedon-3---terrain-asset",children:"Terrain Asset"})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"4"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.a,{href:"#placedon-4---body",children:"Body"})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"6"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.a,{href:"#placedon-6---lift",children:"Lift"})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"8"}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.a,{href:"#placedon-8---joint",children:"Joint"})})]})]})]}),"\n",(0,d.jsx)(i.h4,{id:"placedon-2---terrain-surface",children:"PlacedOn 2 - Terrain Surface"}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"Offset"}),(0,d.jsx)(i.th,{children:"Field Name"}),(0,d.jsx)(i.th,{children:"Field Type"}),(0,d.jsx)(i.th,{children:"Notes"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"0x00"}),(0,d.jsx)(i.td,{children:"Unknown"}),(0,d.jsx)(i.td,{children:"4 bytes"}),(0,d.jsxs)(i.td,{children:["Most of the time equal to ",(0,d.jsx)(i.code,{children:"00 00 02 BB"}),", but right after entering the world equal to ",(0,d.jsx)(i.code,{children:"D2 0A 69 8D"}),". The server accepts any value, modifying it does not seem to result in any changes."]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"0x04"}),(0,d.jsx)(i.td,{children:"Unknown"}),(0,d.jsx)(i.td,{children:"4 bytes"}),(0,d.jsx)(i.td,{children:"Different every time. The server accepts any value, modifying it does not seem to result in any changes."})]})]})]}),"\n",(0,d.jsx)(i.h4,{id:"placedon-3---terrain-asset",children:"PlacedOn 3 - Terrain Asset"}),"\n",(0,d.jsxs)(i.p,{children:["Appears to be the same as ",(0,d.jsx)(i.a,{href:"#placedon-2---terrain-surface",children:"Terrain Surface"}),"."]}),"\n",(0,d.jsx)(i.h4,{id:"placedon-4---body",children:"PlacedOn 4 - Body"}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"Offset"}),(0,d.jsx)(i.th,{children:"Field Name"}),(0,d.jsx)(i.th,{children:"Field Type"}),(0,d.jsx)(i.th,{children:"Notes"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"0x00"}),(0,d.jsx)(i.td,{children:"Shape ID"}),(0,d.jsx)(i.td,{children:"be u32"}),(0,d.jsx)(i.td,{children:"The ID of the shape the new shape is placed on. Using a non-existing Shape ID is accepted by the server."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"0x04"}),(0,d.jsx)(i.td,{children:"Body ID"}),(0,d.jsx)(i.td,{children:"be u32"}),(0,d.jsx)(i.td,{children:"The ID of the body the new shape is placed on. Using a non-existing Body ID will fail to create the shape."})]})]})]}),"\n",(0,d.jsx)(i.h4,{id:"placedon-6---lift",children:"PlacedOn 6 - Lift"}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"Offset"}),(0,d.jsx)(i.th,{children:"Field Name"}),(0,d.jsx)(i.th,{children:"Field Type"}),(0,d.jsx)(i.th,{children:"Notes"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"0x00"}),(0,d.jsx)(i.td,{children:"Unknown"}),(0,d.jsx)(i.td,{children:"4 bytes"}),(0,d.jsxs)(i.td,{children:["Appears to be the same as the first Unknown field of ",(0,d.jsx)(i.a,{href:"#placedon-2---terrain-surface",children:"Terrain Surface"}),"."]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"0x04"}),(0,d.jsx)(i.td,{children:"Lift ID"}),(0,d.jsx)(i.td,{children:"be u32"}),(0,d.jsx)(i.td,{children:"The ID of the lift the new shape is placed on. Using a non-existing Lift ID results in the shape to become static."})]})]})]}),"\n",(0,d.jsx)(i.h4,{id:"placedon-8---joint",children:"PlacedOn 8 - Joint"}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"Offset"}),(0,d.jsx)(i.th,{children:"Field Name"}),(0,d.jsx)(i.th,{children:"Field Type"}),(0,d.jsx)(i.th,{children:"Notes"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"0x00"}),(0,d.jsx)(i.td,{children:"Unknown"}),(0,d.jsx)(i.td,{children:"4 bytes"}),(0,d.jsxs)(i.td,{children:["Appears to be the same as the first Unknown field of ",(0,d.jsx)(i.a,{href:"#placedon-2---terrain-surface",children:"Terrain Surface"}),"."]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:"0x04"}),(0,d.jsx)(i.td,{children:"Joint ID"}),(0,d.jsx)(i.td,{children:"be u32"}),(0,d.jsx)(i.td,{children:"The ID of the joint the new shape is placed on. Using a non-existing Joint ID will fail to create the shape."})]})]})]}),"\n",(0,d.jsx)(i.h2,{id:"validation",children:"Validation"}),"\n",(0,d.jsx)(i.h3,{id:"hotbar-index",children:"Hotbar index"}),"\n",(0,d.jsx)(i.h4,{id:"limited-inventory-mode",children:"Limited inventory mode"}),"\n",(0,d.jsxs)(i.p,{children:["If the uuid of the item in the slot indicated by the ",(0,d.jsx)(i.code,{children:"Hotbar Index"})," field does not equal to the value of the ",(0,d.jsx)(i.code,{children:"Item Uuid"})," field, the packet is ignored."]}),"\n",(0,d.jsx)(i.h4,{id:"unlimited-inventory-mode",children:"Unlimited inventory mode"}),"\n",(0,d.jsxs)(i.p,{children:["The ",(0,d.jsx)(i.code,{children:"Hotbar Index"})," field is ignored. Any value is accepted, including non-existent slots."]}),"\n",(0,d.jsx)(i.h3,{id:"total-item-quantity",children:"Total item quantity"}),"\n",(0,d.jsxs)(i.p,{children:["Any value for the ",(0,d.jsx)(i.code,{children:"Total Item Quantity"})," field is accepted by the server."]}),"\n",(0,d.jsx)(i.h3,{id:"position",children:"Position"}),"\n",(0,d.jsx)(i.p,{children:"The game performs a collision check where the shape will appear in the world. If the space is occupied, the packet is ignored. It is not validated if the shape is physically connected to anything."}),"\n",(0,d.jsx)(i.h3,{id:"size",children:"Size"}),"\n",(0,d.jsx)(i.p,{children:"There are no size validations. Any size is accepted, including negative bounds, on the condition the space is not already occupied."}),"\n",(0,d.jsx)(i.h4,{id:"limited-inventory-mode-1",children:"Limited inventory mode"}),"\n",(0,d.jsx)(i.p,{children:"The player must have enough blocks in their inventory to place the shape. If the volume is negative, the player is rewarded with blocks. If the quantity of the item stack becomes larger than the maximum allowed stack size, the item stack disappears."}),"\n",(0,d.jsx)(i.h3,{id:"rotation",children:"Rotation"}),"\n",(0,d.jsxs)(i.p,{children:["The server accepts any values for the ",(0,d.jsx)(i.code,{children:"Z Axis"})," and ",(0,d.jsx)(i.code,{children:"X Axis"})," fields, including impossible configurations. Rotations where both axes are in parallel or where an axis is not of length 1 are allowed. If the angle between the X and Z axes is not 90 degrees, undefined bahaviour will occur. Physical sizes and collisions will diverge from the placed size. It may make removing the shape impossible. Models look either completely normal, or are completely invisible. They will never be warped."]}),"\n",(0,d.jsx)(i.h3,{id:"uuids",children:"Uuids"}),"\n",(0,d.jsxs)(i.p,{children:["The ",(0,d.jsx)(i.code,{children:"Shape Uuid"})," is always validated to belong to a loaded shape. If this no shape exists with the provided ",(0,d.jsx)(i.code,{children:"Shape Uuid"}),", the packet is ignored and the server responds with ",(0,d.jsx)(i.a,{href:"/docs/networking/packets/19-display-alert-text",children:"19 - Display Alert Text"}),' "Your host does not support that shape".']}),"\n",(0,d.jsx)(i.h4,{id:"limited-inventory-mode-2",children:"Limited inventory mode"}),"\n",(0,d.jsxs)(i.p,{children:["The ",(0,d.jsx)(i.code,{children:"Item Uuid"})," field must be valid for the given ",(0,d.jsx)(i.code,{children:"Shape Uuid"}),". It is valid if the ",(0,d.jsx)(i.code,{children:"Item Uuid"})," equals to the ",(0,d.jsx)(i.code,{children:"Shape Uuid"})," or the ",(0,d.jsx)(i.code,{children:"baseUuid"})," property in the shapeset JSON file. If it is invalid, the server ignores the packet."]}),"\n",(0,d.jsx)(i.h4,{id:"unlimited-inventory-mode-1",children:"Unlimited inventory mode"}),"\n",(0,d.jsxs)(i.p,{children:["The ",(0,d.jsx)(i.code,{children:"Item Uuid"})," field is ignored, the ",(0,d.jsx)(i.code,{children:"Shape Uuid"})," is always used. Invalid uuids for the ",(0,d.jsx)(i.code,{children:"Item Uuid"})," field are allowed."]}),"\n",(0,d.jsx)(i.h3,{id:"placed-on",children:"Placed on"}),"\n",(0,d.jsxs)(i.p,{children:["See ",(0,d.jsx)(i.a,{href:"#placedon-enum",children:"PlacedOn Enum"}),"."]})]})}function o(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,d.jsx)(i,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>r});var d=n(6540);const t={},s=d.createContext(t);function l(e){const i=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),d.createElement(s.Provider,{value:i},e.children)}}}]);