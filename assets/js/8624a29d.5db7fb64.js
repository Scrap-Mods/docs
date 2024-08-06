"use strict";(self.webpackChunkscrap_docs=self.webpackChunkscrap_docs||[]).push([[8357],{2930:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>a,contentTitle:()=>h,default:()=>o,frontMatter:()=>l,metadata:()=>c,toc:()=>j});var s=t(4848),i=t(8453);function n(e){const d={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,s.jsx)(d.admonition,{type:"note",children:(0,s.jsxs)(d.p,{children:["Parsing and building this structure requires the use of a BitStream. See ",(0,s.jsx)(d.a,{href:"/docs/networking/common-encoding-patterns/bitstream",children:"BitStream"})," for more information."]})})}function r(e={}){const{wrapper:d}={...(0,i.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(n,{...e})}):n(e)}const l={title:"Lua Object"},h="LuaObject",c={id:"structures/lua-object",title:"Lua Object",description:"The Lua Object is a custom serialization format used by the game to store Lua objects. It is used in packets, blueprints and save files.",source:"@site/docs/structures/lua-object.md",sourceDirName:"structures",slug:"/structures/lua-object",permalink:"/docs/structures/lua-object",draft:!1,unlisted:!1,editUrl:"https://pr.new/github.com/Scrap-Mods/docs/blob/main/docs/structures/lua-object.md",tags:[],version:"current",frontMatter:{title:"Lua Object"},sidebar:"structuresSidebar",previous:{title:"Generic",permalink:"/docs/structures/imhex-patterns/worlddata"},next:{title:"BlobData",permalink:"/docs/structures/networking/blobdata"}},a={},j=[{value:"Structure",id:"structure",level:2},{value:"LuaSaveData",id:"luasavedata",level:2},{value:"LuaSaveData Structure",id:"luasavedata-structure",level:3},{value:"LuaSaveDataType enum",id:"luasavedatatype-enum",level:2},{value:"LuaSaveDataValue",id:"luasavedatavalue",level:2},{value:"Nil",id:"nil",level:3},{value:"Boolean",id:"boolean",level:3},{value:"Number",id:"number",level:3},{value:"String",id:"string",level:3},{value:"Table",id:"table",level:3},{value:"TableKeyValuePair",id:"tablekeyvaluepair",level:4},{value:"TableKeyValuePair Structure",id:"tablekeyvaluepair-structure",level:5},{value:"Int32",id:"int32",level:3},{value:"Int16",id:"int16",level:3},{value:"Int8",id:"int8",level:3},{value:"Json",id:"json",level:3},{value:"Userdata",id:"userdata",level:3},{value:"Unknown_101",id:"unknown_101",level:3},{value:"LuaUserdata",id:"luauserdata",level:2},{value:"UserdataTypeId enum",id:"userdatatypeid-enum",level:3},{value:"Uuid",id:"uuid",level:3},{value:"Vec3",id:"vec3",level:3},{value:"Quat",id:"quat",level:3},{value:"Color",id:"color",level:3},{value:"Shape",id:"shape",level:3},{value:"Body",id:"body",level:3},{value:"Interactable",id:"interactable",level:3},{value:"Container",id:"container",level:3},{value:"Harvestable",id:"harvestable",level:3},{value:"World",id:"world",level:3},{value:"Unit",id:"unit",level:3},{value:"Player",id:"player",level:3},{value:"Character",id:"character",level:3},{value:"Joint",id:"joint",level:3},{value:"Portal",id:"portal",level:3},{value:"PathNode",id:"pathnode",level:3},{value:"Lift",id:"lift",level:3},{value:"ScriptableObject",id:"scriptableobject",level:3},{value:"Tool",id:"tool",level:3}];function x(e){const d={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.h1,{id:"luaobject",children:"LuaObject"}),"\n",(0,s.jsx)(d.p,{children:"The Lua Object is a custom serialization format used by the game to store Lua objects. It is used in packets, blueprints and save files."}),"\n",(0,s.jsx)(d.h2,{id:"structure",children:"Structure"}),"\n",(0,s.jsx)(r,{}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Offset"}),(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"0x00"}),(0,s.jsx)(d.td,{children:"Magic Tag"}),(0,s.jsxs)(d.td,{children:["Constant ",(0,s.jsx)(d.code,{children:'"LUA"'})," (",(0,s.jsx)(d.code,{children:"4c 55 41"}),")"]}),(0,s.jsx)(d.td,{children:"This helps recognizing the start of the Lua object."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"0x03"}),(0,s.jsx)(d.td,{children:"Version"}),(0,s.jsx)(d.td,{children:"be u32"}),(0,s.jsxs)(d.td,{children:["The version of the serialization format. This is currently ",(0,s.jsx)(d.code,{children:"1"}),"."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"0x07"}),(0,s.jsx)(d.td,{children:"Data"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#luasavedata",children:"LuaSaveData"})}),(0,s.jsx)(d.td,{children:"The data that is serialized."})]})]})]}),"\n",(0,s.jsx)(d.h2,{id:"luasavedata",children:"LuaSaveData"}),"\n",(0,s.jsx)(d.h3,{id:"luasavedata-structure",children:"LuaSaveData Structure"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Offset"}),(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"0x00"}),(0,s.jsx)(d.td,{children:"Type"}),(0,s.jsxs)(d.td,{children:["enum ",(0,s.jsx)(d.a,{href:"#luasavedatatype-enum",children:"LuaSaveDataType"})," : u8"]}),(0,s.jsx)(d.td,{children:"The type of data that is stored."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"0x01"}),(0,s.jsx)(d.td,{children:"Value"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#luasavedatavalue",children:"LuaSaveDataValue"})}),(0,s.jsxs)(d.td,{children:["The actual data that is stored. The type of this field depends on the ",(0,s.jsx)(d.code,{children:"Type"})," field."]})]})]})]}),"\n",(0,s.jsx)(d.h2,{id:"luasavedatatype-enum",children:"LuaSaveDataType enum"}),"\n",(0,s.jsx)(d.p,{children:"This enum is used to specify the type of data that is stored. This is an exhaustive list of all the types that can be serialized and deserialized."}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Value"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Nil"}),(0,s.jsx)(d.td,{children:"1"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Boolean"}),(0,s.jsx)(d.td,{children:"2"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Number"}),(0,s.jsx)(d.td,{children:"3"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"String"}),(0,s.jsx)(d.td,{children:"4"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Table"}),(0,s.jsx)(d.td,{children:"5"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Int32"}),(0,s.jsx)(d.td,{children:"6"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Int16"}),(0,s.jsx)(d.td,{children:"7"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Int8"}),(0,s.jsx)(d.td,{children:"8"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Json"}),(0,s.jsx)(d.td,{children:"9"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Userdata"}),(0,s.jsx)(d.td,{children:"100"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Unknown_101"}),(0,s.jsx)(d.td,{children:"101"})]})]})]}),"\n",(0,s.jsx)(d.h2,{id:"luasavedatavalue",children:"LuaSaveDataValue"}),"\n",(0,s.jsxs)(d.p,{children:["The ",(0,s.jsx)(d.code,{children:"LuaSaveDataValue"})," field is used to store the actual data that is serialized. The type of this field depends on the ",(0,s.jsx)(d.code,{children:"Type"})," field of the ",(0,s.jsx)(d.a,{href:"#luasavedata",children:"LuaSaveData"})," structure."]}),"\n",(0,s.jsx)(d.h3,{id:"nil",children:"Nil"}),"\n",(0,s.jsxs)(d.p,{children:["The ",(0,s.jsx)(d.code,{children:"Nil"})," type is used to represent a ",(0,s.jsx)(d.code,{children:"nil"})," value in Lua. It does not have a value, as it is always ",(0,s.jsx)(d.code,{children:"nil"}),". It is serialized as a byte array with a length of ",(0,s.jsx)(d.code,{children:"0"}),"."]}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Value"}),(0,s.jsxs)(d.td,{children:["Constant ",(0,s.jsx)(d.code,{children:'""'})]}),(0,s.jsxs)(d.td,{children:["The ",(0,s.jsx)(d.code,{children:"nil"})," value."]})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"boolean",children:"Boolean"}),"\n",(0,s.jsxs)(d.p,{children:["The ",(0,s.jsx)(d.code,{children:"Boolean"})," type is used to represent a boolean value in Lua. It is serialized as a single bit, where ",(0,s.jsx)(d.code,{children:"0"})," is ",(0,s.jsx)(d.code,{children:"false"})," and ",(0,s.jsx)(d.code,{children:"1"})," is ",(0,s.jsx)(d.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Value"}),(0,s.jsx)(d.td,{children:"Flag (1 bit)"}),(0,s.jsx)(d.td,{children:"The boolean value."})]})})]}),"\n",(0,s.jsx)(d.admonition,{type:"warning",children:(0,s.jsx)(d.p,{children:"The boolean type is serialized as a single bit, which means that the byte that contains the boolean value may contain other data as well. Any data after the boolean value is offset by 1 bit."})}),"\n",(0,s.jsx)(d.h3,{id:"number",children:"Number"}),"\n",(0,s.jsxs)(d.p,{children:["The ",(0,s.jsx)(d.code,{children:"Number"})," type is used to represent a number in Lua. It is serialized as a 32-bit floating point number in big-endian format. Note that precision may be lost when serializing and deserializing numbers. The game uses this type to represent floating point numbers, and integers that do not fit within the 32-bit signed integer range."]}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Value"}),(0,s.jsx)(d.td,{children:"be float"}),(0,s.jsx)(d.td,{children:"The number value."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"string",children:"String"}),"\n",(0,s.jsxs)(d.p,{children:["The ",(0,s.jsx)(d.code,{children:"String"})," type is used to represent a string in Lua. It is serialized as a length-prefixed, utf-8 encoded string. The length is a 32-bit unsigned integer in big-endian format, followed by the string data."]}),"\n",(0,s.jsx)(d.admonition,{type:"warning",children:(0,s.jsx)(d.p,{children:"The contents of the string must be aligned to a whole byte. If the length of the string data is not a multiple of 8 bits, padding is inserted between the length and the string data to align the string data to a whole byte."})}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Size"}),(0,s.jsx)(d.td,{children:"be u32"}),(0,s.jsx)(d.td,{children:"The amount of bytes required to store the utf-8 encoded string data."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Padding"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.em,{children:"Padding"})}),(0,s.jsx)(d.td,{children:"Padding to align the string data to a whole byte."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"String"}),(0,s.jsx)(d.td,{children:"char[Size]"}),(0,s.jsx)(d.td,{children:"The string data, encoded in utf-8."})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"table",children:"Table"}),"\n",(0,s.jsxs)(d.p,{children:["The ",(0,s.jsx)(d.code,{children:"Table"})," type is used to represent a table in Lua. It is serialized as a list of key-value pairs. The table can be either an array or a dictionary. The type of the table is determined by the ",(0,s.jsx)(d.code,{children:"Is Array"})," field."]}),"\n",(0,s.jsx)(d.admonition,{type:"warning",children:(0,s.jsxs)(d.p,{children:["The ",(0,s.jsx)(d.code,{children:"Is Array"})," field is stored as a single bit. This means that the byte that contains the ",(0,s.jsx)(d.code,{children:"Is Array"})," field may contain other data as well. Any data after the ",(0,s.jsx)(d.code,{children:"Is Array"})," field is offset by 1 bit."]})}),"\n",(0,s.jsx)(d.admonition,{type:"note",children:(0,s.jsxs)(d.p,{children:["The ",(0,s.jsx)(d.code,{children:"Table"})," type is a recursive structure, which means that tables can contain other tables."]})}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Count"}),(0,s.jsx)(d.td,{children:"be u32"}),(0,s.jsx)(d.td,{children:"The number of elements in the table."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Is Array"}),(0,s.jsx)(d.td,{children:"Flag (1 bit)"}),(0,s.jsx)(d.td,{children:"Whether the table is an array or a dictionary."})]})]})]}),"\n",(0,s.jsxs)(d.p,{children:["If ",(0,s.jsx)(d.code,{children:"Is Array"})," is ",(0,s.jsx)(d.code,{children:"false"})," (continued):"]}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Elements"}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.a,{href:"#tablekeyvaluepair",children:"TableKeyValuePair"}),"[Count]"]}),(0,s.jsx)(d.td,{children:"The key-value pairs of the table."})]})})]}),"\n",(0,s.jsxs)(d.p,{children:["If ",(0,s.jsx)(d.code,{children:"Is Array"})," is ",(0,s.jsx)(d.code,{children:"true"})," (continued):"]}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Offset"}),(0,s.jsx)(d.td,{children:"be u32"}),(0,s.jsx)(d.td,{children:"The offset of the first element in the table."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Elements"}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.a,{href:"#luasavedata",children:"LuaSaveData"}),"[Count]"]}),(0,s.jsx)(d.td,{children:"The elements of the table."})]})]})]}),"\n",(0,s.jsx)(d.h4,{id:"tablekeyvaluepair",children:"TableKeyValuePair"}),"\n",(0,s.jsx)(d.h5,{id:"tablekeyvaluepair-structure",children:"TableKeyValuePair Structure"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Key"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#luasavedata",children:"LuaSaveData"})}),(0,s.jsx)(d.td,{children:"The key of the pair."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Value"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#luasavedata",children:"LuaSaveData"})}),(0,s.jsx)(d.td,{children:"The value of the pair."})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"int32",children:"Int32"}),"\n",(0,s.jsxs)(d.p,{children:["The ",(0,s.jsx)(d.code,{children:"Int32"})," type is used to represent a 32-bit signed integer in Lua. It is serialized as a 32-bit signed integer in big-endian format. The game uses this type to represent integers that fit within the 32-bit signed integer range, but not within the 16-bit signed integer range."]}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Value"}),(0,s.jsx)(d.td,{children:"be s32"}),(0,s.jsx)(d.td,{children:"The integer value."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"int16",children:"Int16"}),"\n",(0,s.jsxs)(d.p,{children:["The ",(0,s.jsx)(d.code,{children:"Int16"})," type is used to represent a 16-bit signed integer in Lua. It is serialized as a 16-bit signed integer in big-endian format. The game uses this type to represent integers that fit within the 16-bit signed integer range, but not within the 8-bit signed integer range."]}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Value"}),(0,s.jsx)(d.td,{children:"be s16"}),(0,s.jsx)(d.td,{children:"The integer value."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"int8",children:"Int8"}),"\n",(0,s.jsxs)(d.p,{children:["The ",(0,s.jsx)(d.code,{children:"Int8"})," type is used to represent an 8-bit signed integer in Lua. It is serialized as an 8-bit signed integer."]}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Value"}),(0,s.jsx)(d.td,{children:"s8"}),(0,s.jsx)(d.td,{children:"The integer value."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"json",children:"Json"}),"\n",(0,s.jsxs)(d.p,{children:["The ",(0,s.jsx)(d.code,{children:"Json"})," type has not been documented yet."]}),"\n",(0,s.jsx)(d.h3,{id:"userdata",children:"Userdata"}),"\n",(0,s.jsxs)(d.p,{children:["The ",(0,s.jsx)(d.code,{children:"Userdata"})," type is used to represent a userdata object in Lua. It is serialized as a ",(0,s.jsx)(d.a,{href:"#luauserdata",children:"LuaUserdata"})," object."]}),"\n",(0,s.jsx)(d.h3,{id:"unknown_101",children:"Unknown_101"}),"\n",(0,s.jsxs)(d.p,{children:["The ",(0,s.jsx)(d.code,{children:"Unknown_101"})," type has not been documented yet."]}),"\n",(0,s.jsx)(d.h2,{id:"luauserdata",children:"LuaUserdata"}),"\n",(0,s.jsxs)(d.p,{children:["The ",(0,s.jsx)(d.code,{children:"LuaUserdata"})," type is used to represent a userdata object in Lua. It is serialized as a type ID followed by the data of the userdata object. The type ID is used to determine the type of the userdata object, and the data is specific to the type of the userdata object."]}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Type ID"}),(0,s.jsxs)(d.td,{children:["enum ",(0,s.jsx)(d.a,{href:"#userdatatypeid-enum",children:"UserdataTypeId"})," : be u32"]}),(0,s.jsx)(d.td,{children:"The type ID of the userdata object."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Data"}),(0,s.jsx)(d.td,{children:"dynamic"}),(0,s.jsxs)(d.td,{children:["The data of the userdata object. The type of this field depends on the ",(0,s.jsx)(d.code,{children:"Type ID"})," field."]})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"userdatatypeid-enum",children:"UserdataTypeId enum"}),"\n",(0,s.jsx)(d.p,{children:"This enum is used to specify the type of the userdata object. This is an exhaustive list of all the types that can be serialized and deserialized."}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Value"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#uuid",children:"Uuid"})}),(0,s.jsx)(d.td,{children:"10001"}),(0,s.jsxs)(d.td,{children:["\u2705"," Serializable."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#vec3",children:"Vec3"})}),(0,s.jsx)(d.td,{children:"10003"}),(0,s.jsxs)(d.td,{children:["\u2705"," Serializable."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#quat",children:"Quat"})}),(0,s.jsx)(d.td,{children:"10004"}),(0,s.jsxs)(d.td,{children:["\u2705"," Serializable."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#color",children:"Color"})}),(0,s.jsx)(d.td,{children:"10005"}),(0,s.jsxs)(d.td,{children:["\u2705"," Serializable."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"RaycastResult"}),(0,s.jsx)(d.td,{children:"10006"}),(0,s.jsxs)(d.td,{children:["\u274c"," Cannot be serialized at all."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"LoadCellHandle"}),(0,s.jsx)(d.td,{children:"10007"}),(0,s.jsxs)(d.td,{children:["\u2754"," Unknown."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Effect"}),(0,s.jsx)(d.td,{children:"10008"}),(0,s.jsxs)(d.td,{children:["\u274c"," Cannot be serialized at all."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#shape",children:"Shape"})}),(0,s.jsx)(d.td,{children:"10021"}),(0,s.jsxs)(d.td,{children:["\u2705"," Serializable."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#body",children:"Body"})}),(0,s.jsx)(d.td,{children:"10022"}),(0,s.jsxs)(d.td,{children:["\u2705"," Serializable."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#interactable",children:"Interactable"})}),(0,s.jsx)(d.td,{children:"10023"}),(0,s.jsxs)(d.td,{children:["\u2705"," Serializable."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#container",children:"Container"})}),(0,s.jsx)(d.td,{children:"10024"}),(0,s.jsxs)(d.td,{children:["\u2705"," Serializable."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#harvestable",children:"Harvestable"})}),(0,s.jsx)(d.td,{children:"10025"}),(0,s.jsxs)(d.td,{children:["\u2705"," Serializable."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Network"}),(0,s.jsx)(d.td,{children:"10026"}),(0,s.jsxs)(d.td,{children:["\u274c"," Cannot be serialized at all."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#world",children:"World"})}),(0,s.jsx)(d.td,{children:"10027"}),(0,s.jsxs)(d.td,{children:["\u2705"," Serializable."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#unit",children:"Unit"})}),(0,s.jsx)(d.td,{children:"10028"}),(0,s.jsxs)(d.td,{children:[":large_orange_square: Cannot be deserialized on the client, but can be serialized for ",(0,s.jsx)(d.code,{children:"sm.event.sendTo*"})," and storing in ",(0,s.jsx)(d.code,{children:"sm.storage"}),"."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Storage"}),(0,s.jsx)(d.td,{children:"10029"}),(0,s.jsxs)(d.td,{children:["\u274c"," Cannot be serialized at all."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#player",children:"Player"})}),(0,s.jsx)(d.td,{children:"10030"}),(0,s.jsxs)(d.td,{children:["\u2705"," Serializable."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#character",children:"Character"})}),(0,s.jsx)(d.td,{children:"10031"}),(0,s.jsxs)(d.td,{children:["\u2705"," Serializable."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#joint",children:"Joint"})}),(0,s.jsx)(d.td,{children:"10032"}),(0,s.jsxs)(d.td,{children:["\u2705"," Serializable."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"AiState"}),(0,s.jsx)(d.td,{children:"10033"}),(0,s.jsxs)(d.td,{children:["\u274c"," Cannot be serialized at all."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"AreaTrigger"}),(0,s.jsx)(d.td,{children:"10035"}),(0,s.jsxs)(d.td,{children:["\u274c"," Cannot be serialized at all."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#portal",children:"Portal"})}),(0,s.jsx)(d.td,{children:"10036"}),(0,s.jsxs)(d.td,{children:[":large_orange_square: Cannot be deserialized on the client, but can be serialized for ",(0,s.jsx)(d.code,{children:"sm.event.sendTo*"})," and storing in ",(0,s.jsx)(d.code,{children:"sm.storage"}),"."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#pathnode",children:"PathNode"})}),(0,s.jsx)(d.td,{children:"10037"}),(0,s.jsxs)(d.td,{children:[":large_orange_square: Cannot be deserialized on the client, but can be serialized for ",(0,s.jsx)(d.code,{children:"sm.event.sendTo*"})," and storing in ",(0,s.jsx)(d.code,{children:"sm.storage"}),"."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#lift",children:"Lift"})}),(0,s.jsx)(d.td,{children:"10038"}),(0,s.jsxs)(d.td,{children:["\u2705"," Serializable."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#scriptableobject",children:"ScriptableObject"})}),(0,s.jsx)(d.td,{children:"10039"}),(0,s.jsxs)(d.td,{children:["\u2705"," Serializable."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"BuilderGuide"}),(0,s.jsx)(d.td,{children:"10040"}),(0,s.jsxs)(d.td,{children:["\u274c"," Cannot be serialized at all."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"CullSphereGroup"}),(0,s.jsx)(d.td,{children:"10041"}),(0,s.jsxs)(d.td,{children:["\u274c"," Cannot be serialized at all."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"VoxelTerrain"}),(0,s.jsx)(d.td,{children:"10042"}),(0,s.jsxs)(d.td,{children:["\u2754"," Unknown."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Widget"}),(0,s.jsx)(d.td,{children:"20001"}),(0,s.jsxs)(d.td,{children:["\u2754"," Unknown."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"#tool",children:"Tool"})}),(0,s.jsx)(d.td,{children:"20002"}),(0,s.jsxs)(d.td,{children:["\u2705"," Serializable."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"GuiInterface"}),(0,s.jsx)(d.td,{children:"20006"}),(0,s.jsxs)(d.td,{children:["\u274c"," Cannot be serialized at all."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"BlueprintVisualization"}),(0,s.jsx)(d.td,{children:"20007"}),(0,s.jsxs)(d.td,{children:["\u274c"," Cannot be serialized at all."]})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"uuid",children:"Uuid"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Uuid"}),(0,s.jsx)(d.td,{children:"le u128"}),(0,s.jsx)(d.td,{children:"The UUID value."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"vec3",children:"Vec3"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"be float"}),(0,s.jsx)(d.td,{children:"The X component of the vector."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Y"}),(0,s.jsx)(d.td,{children:"be float"}),(0,s.jsx)(d.td,{children:"The Y component of the vector."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Z"}),(0,s.jsx)(d.td,{children:"be float"}),(0,s.jsx)(d.td,{children:"The Z component of the vector."})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"quat",children:"Quat"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"X"}),(0,s.jsx)(d.td,{children:"be float"}),(0,s.jsx)(d.td,{children:"The X component of the quaternion."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Y"}),(0,s.jsx)(d.td,{children:"be float"}),(0,s.jsx)(d.td,{children:"The Y component of the quaternion."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Z"}),(0,s.jsx)(d.td,{children:"be float"}),(0,s.jsx)(d.td,{children:"The Z component of the quaternion."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"W"}),(0,s.jsx)(d.td,{children:"be float"}),(0,s.jsx)(d.td,{children:"The W component of the quaternion."})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"color",children:"Color"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"R"}),(0,s.jsx)(d.td,{children:"be float"}),(0,s.jsx)(d.td,{children:"The red component of the color."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"G"}),(0,s.jsx)(d.td,{children:"be float"}),(0,s.jsx)(d.td,{children:"The green component of the color."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"B"}),(0,s.jsx)(d.td,{children:"be float"}),(0,s.jsx)(d.td,{children:"The blue component of the color."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"A"}),(0,s.jsx)(d.td,{children:"be float"}),(0,s.jsx)(d.td,{children:"The alpha component of the color."})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"shape",children:"Shape"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Shape ID"}),(0,s.jsx)(d.td,{children:"be u32"}),(0,s.jsx)(d.td,{children:"The ID of the shape."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"body",children:"Body"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Body ID"}),(0,s.jsx)(d.td,{children:"be u32"}),(0,s.jsx)(d.td,{children:"The ID of the body."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"interactable",children:"Interactable"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Interactable ID"}),(0,s.jsx)(d.td,{children:"be u32"}),(0,s.jsx)(d.td,{children:"The ID of the interactable."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"container",children:"Container"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Container ID"}),(0,s.jsx)(d.td,{children:"be u32"}),(0,s.jsx)(d.td,{children:"The ID of the container."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"harvestable",children:"Harvestable"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Harvestable ID"}),(0,s.jsx)(d.td,{children:"be u32"}),(0,s.jsx)(d.td,{children:"The ID of the harvestable."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"world",children:"World"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"World ID"}),(0,s.jsx)(d.td,{children:"be u32"}),(0,s.jsx)(d.td,{children:"The ID of the world."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"unit",children:"Unit"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Unit ID"}),(0,s.jsx)(d.td,{children:"be u32"}),(0,s.jsx)(d.td,{children:"The ID of the unit."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"player",children:"Player"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Player ID"}),(0,s.jsx)(d.td,{children:"be u32"}),(0,s.jsx)(d.td,{children:"The ID of the player."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"character",children:"Character"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Character ID"}),(0,s.jsx)(d.td,{children:"be u32"}),(0,s.jsx)(d.td,{children:"The ID of the character."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"joint",children:"Joint"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Joint ID"}),(0,s.jsx)(d.td,{children:"be u32"}),(0,s.jsx)(d.td,{children:"The ID of the joint."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"portal",children:"Portal"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Portal ID"}),(0,s.jsx)(d.td,{children:"be u32"}),(0,s.jsx)(d.td,{children:"The ID of the portal."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"pathnode",children:"PathNode"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"PathNode ID"}),(0,s.jsx)(d.td,{children:"be u32"}),(0,s.jsx)(d.td,{children:"The ID of the path node."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"lift",children:"Lift"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Lift ID"}),(0,s.jsx)(d.td,{children:"be u32"}),(0,s.jsx)(d.td,{children:"The ID of the lift."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"scriptableobject",children:"ScriptableObject"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Scriptable Object ID"}),(0,s.jsx)(d.td,{children:"be u32"}),(0,s.jsx)(d.td,{children:"The ID of the scriptable object."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"tool",children:"Tool"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Field Name"}),(0,s.jsx)(d.th,{children:"Field Type"}),(0,s.jsx)(d.th,{children:"Notes"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Tool ID"}),(0,s.jsx)(d.td,{children:"be u32"}),(0,s.jsx)(d.td,{children:"The ID of the tool."})]})})]})]})}function o(e={}){const{wrapper:d}={...(0,i.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},8453:(e,d,t)=>{t.d(d,{R:()=>r,x:()=>l});var s=t(6540);const i={},n=s.createContext(i);function r(e){const d=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(n.Provider,{value:d},e.children)}}}]);