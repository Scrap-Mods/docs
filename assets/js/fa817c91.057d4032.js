"use strict";(self.webpackChunkscrap_docs=self.webpackChunkscrap_docs||[]).push([[1957],{736:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var d=n(4848),t=n(8453);const i={title:"18 - Display Message"},r="Display Message",l={id:"networking/packets/18-display-message",title:"18 - Display Message",description:"Displays a message in a warning pop-up, alert HUD, or in the chat.",source:"@site/docs/networking/packets/18-display-message.mdx",sourceDirName:"networking/packets",slug:"/networking/packets/18-display-message",permalink:"/docs/networking/packets/18-display-message",draft:!1,unlisted:!1,editUrl:"https://pr.new/github.com/Scrap-Mods/docs/blob/main/docs/networking/packets/18-display-message.mdx",tags:[],version:"current",frontMatter:{title:"18 - Display Message"},sidebar:"networkingSidebar",previous:{title:"13 - Generic Initialization Data",permalink:"/docs/networking/packets/13-generic-initialization-data"},next:{title:"19 - Display Alert Text",permalink:"/docs/networking/packets/19-display-alert-text"}},c={},a=[{value:"Structure",id:"structure",level:2},{value:"Message types",id:"message-types",level:2},{value:"Pop-up",id:"pop-up",level:3},{value:"Special messages",id:"special-messages",level:4},{value:"Alert text",id:"alert-text",level:3},{value:"Chat",id:"chat",level:3},{value:"Known messages",id:"known-messages",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.h1,{id:"display-message",children:"Display Message"}),"\n",(0,d.jsx)(s.p,{children:"Displays a message in a warning pop-up, alert HUD, or in the chat."}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"ID"}),": 0x12 (18)"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Size"}),": Variable"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"LZ4 Compressed"}),": Yes"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"State"}),": Playing"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Bound To"}),": Server -> Client"]}),"\n"]}),"\n",(0,d.jsx)(s.h2,{id:"structure",children:"Structure"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Offset"}),(0,d.jsx)(s.th,{children:"Field Name"}),(0,d.jsx)(s.th,{children:"Field Type"}),(0,d.jsx)(s.th,{children:"Notes"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0x00"}),(0,d.jsx)(s.td,{children:"Type Size"}),(0,d.jsx)(s.td,{children:"be u16"}),(0,d.jsx)(s.td,{children:"The size of the type of the message."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"0x02"}),(0,d.jsx)(s.td,{children:"Type"}),(0,d.jsx)(s.td,{children:"utf8 string"}),(0,d.jsx)(s.td,{children:"The utf-8 encoded type of the message."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsxs)(s.td,{children:["0x02 + ",(0,d.jsx)(s.code,{children:"Type Size"})]}),(0,d.jsx)(s.td,{children:"Message Size"}),(0,d.jsx)(s.td,{children:"be u16"}),(0,d.jsx)(s.td,{children:"The size of the message."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsxs)(s.td,{children:["0x04 + ",(0,d.jsx)(s.code,{children:"Type Size"})]}),(0,d.jsx)(s.td,{children:"Message"}),(0,d.jsx)(s.td,{children:"utf8 string"}),(0,d.jsx)(s.td,{children:"The utf-8 encoded message."})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"message-types",children:"Message types"}),"\n",(0,d.jsxs)(s.p,{children:["How the message is displayed depends on the contents of the ",(0,d.jsx)(s.code,{children:"Type"})," field. If this field is set to ",(0,d.jsx)(s.code,{children:"<WARNING>"})," or ",(0,d.jsx)(s.code,{children:"<ALERT>"}),", the message is displayed as a pop-up or as an alert. If the ",(0,d.jsx)(s.code,{children:"Type"})," field contains any other value, the type and message are printed in the chat instead."]}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Type string"}),(0,d.jsx)(s.th,{children:"Location"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"<WARNING>"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"#pop-up",children:"Pop-up"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"<ALERT>"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"#alert-text",children:"Alert text"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Other"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"#chat",children:"Chat"})})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"pop-up",children:"Pop-up"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{alt:"Popup displaying the message &quot;Example popup&quot;",src:n(5953).A+"",width:"471",height:"492"})}),"\n",(0,d.jsxs)(s.p,{children:["If the ",(0,d.jsx)(s.code,{children:"Type"})," field is set to ",(0,d.jsx)(s.code,{children:"<WARNING>"}),", a pop-up with an exclaimation mark icon is displayed. The ",(0,d.jsx)(s.code,{children:"Message"})," field is used as the caption, with space for a single line. It is not possible to provide a custom message body, but special ",(0,d.jsx)(s.code,{children:"Message"})," values can set the caption and body to hardcoded values."]}),"\n",(0,d.jsx)(s.p,{children:"While the pop-up is open, the player is able to move, but unable to look around."}),"\n",(0,d.jsx)(s.h4,{id:"special-messages",children:"Special messages"}),"\n",(0,d.jsxs)(s.p,{children:["If the ",(0,d.jsx)(s.code,{children:"Type"})," field is set to ",(0,d.jsx)(s.code,{children:"<WARNING>"})," and the ",(0,d.jsx)(s.code,{children:"Message"})," field is set to any of the following special messages, the caption and body of the popup are set to their corresponding values. The interface tags are translated by MyGUI into the localized versions. The English localizations are listed below."]}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Message"}),(0,d.jsx)("th",{children:"Caption"}),(0,d.jsx)("th",{children:"Body"})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{rowspan:"2",children:(0,d.jsx)("code",{children:"WARNING_TUNNELING"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"#{WARNING_TUNNELING_TITLE}"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"#{WARNING_TUNNELING_LINE1}\n#{WARNING_TUNNELING_LINE2}"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"Hey!"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"You're playing the game wrong!\nStop that!"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{rowspan:"2",children:(0,d.jsx)("code",{children:"VERSION_MISMATCH"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"#{ERRMSG_TITLE_FAILED_TO_LOAD_WORLD}"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"#{ERRMSG_VERSION_MISMATCH_LINE1}\n#{ERRMSG_VERSION_MISMATCH_LINE2}"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"Failed to load world"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"Version mismatch\nPlease update your client and try again"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{rowspan:"2",children:(0,d.jsx)("code",{children:"CONNECTION_FAILED"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"#{ERRMSG_TITLE_CONNECTION_FAILED}"})}),(0,d.jsx)("td",{rowspan:"2",children:(0,d.jsx)("code",{children:"\n"})})]}),(0,d.jsx)("tr",{children:(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"Connection failed"})})}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{rowspan:"2",children:(0,d.jsx)("code",{children:"CONNECTION_TIMEOUT"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"#{ERRMSG_TITLE_CONNECTION_FAILED}"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"#{ERRMSG_CONNECTION_TIMEOUT_LINE1}\n#{ERRMSG_CONNECTION_TIMEOUT_LINE2}"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"Connection failed"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"Connection to host timed out\nPlease check your Internet connection and try again"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{rowspan:"2",children:(0,d.jsx)("code",{children:"CONNECTION_LOST"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"#{ERRMSG_TITLE_CONNECTION_LOST}"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"#{ERRMSG_CONNECTION_LOST_LINE1}\n#{ERRMSG_CONNECTION_LOST_LINE2}"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"Connection lost"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"Connection lost\nPlease check your Internet connection"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{rowspan:"2",children:(0,d.jsx)("code",{children:"SERVER_SHUTDOWN"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"#{ERRMSG_TITLE_CONNECTION_LOST}"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"#{ERRMSG_SERVER_SHUTDOWN_LINE1}\n"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"Connection lost"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"Host has shut down\n"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{rowspan:"2",children:(0,d.jsx)("code",{children:"KICKED_FROM_SERVER"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"#{ERRMSG_TITLE_CONNECTION_LOST}"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"#{ERRMSG_KICKED_FROM_SERVER_LINE1}\n#{ERRMSG_KICKED_FROM_SERVER_LINE2}"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"Connection lost"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"You have been kicked\nfrom the host"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{rowspan:"2",children:(0,d.jsx)("code",{children:"UNLOAD_MOD"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"#{ERRMSG_TITLE_WARNING}"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"#{ERRMSG_UNLOAD_MOD_LINE1}\n#{ERRMSG_UNLOAD_MOD_LINE2}\n#{ERRMSG_UNLOAD_MOD_LINE3}"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"Warning"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"A previously used mod has been removed!\nThis might cause the world to be unloadable.\nDo you want to do this?"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{rowspan:"2",children:(0,d.jsx)("code",{children:"INVALID_SHAPE_ID"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"#{ERRMSG_TITLE_ERROR}"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"#{ERRMSG_INVALID_SHAPE_ID}\n#{ERRMSG_REQUIRED_MOD}: #{UNKNOWN_MOD}"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"ERROR"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"The world contains an unsupported part\nRequired mod: <Unknown mod>"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{rowspan:"2",children:(0,d.jsx)("code",{children:"ERROR_MESSAGE"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"#{ERRMSG_TITLE_ERROR}"})}),(0,d.jsx)("td",{rowspan:"2",children:(0,d.jsx)("code",{children:"\n"})})]}),(0,d.jsx)("tr",{children:(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"ERROR"})})}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{rowspan:"2",children:(0,d.jsx)("code",{children:"DATABASE_ERROR_MESSAGE"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"#{ERRMSG_TITLE_ERROR}"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"#{ERRMSG_DATABASE_ISSUE}: \n\n"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"ERROR"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"A problem occurred when handling the save file: \n\n"})})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"alert-text",children:"Alert text"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{alt:"Alert text displaying the message &quot;Example alert text&quot;",src:n(8309).A+"",width:"296",height:"144"})}),"\n",(0,d.jsxs)(s.p,{children:["If the ",(0,d.jsx)(s.code,{children:"Type"})," field is set to ",(0,d.jsx)(s.code,{children:"<ALERT>"}),", a text message with an exclaimation mark icon is displayed in the center top of the HUD. The ",(0,d.jsx)(s.code,{children:"Message"})," field is used as the text of the message, with space for a single line."]}),"\n",(0,d.jsx)(s.h3,{id:"chat",children:"Chat"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{alt:"Chat message containing the text &quot;Example type: Example message&quot;",src:n(157).A+"",width:"289",height:"46"})}),"\n",(0,d.jsxs)(s.p,{children:["If the ",(0,d.jsx)(s.code,{children:"Type"})," field is set to neither ",(0,d.jsx)(s.code,{children:"<WARNING>"})," nor ",(0,d.jsx)(s.code,{children:"<ALERT>"}),", the ",(0,d.jsx)(s.code,{children:"Type"})," field and the ",(0,d.jsx)(s.code,{children:"Message"})," are joined by the string ",(0,d.jsx)(s.code,{children:": "})," and the result is printed to the chat."]}),"\n",(0,d.jsx)(s.h2,{id:"known-messages",children:"Known messages"}),"\n",(0,d.jsx)(s.p,{children:"List of known messages that the server can send to the client."}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Message"}),(0,d.jsx)(s.th,{children:"Occurs When"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"<WARNING>"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"WARNING_TUNNELING"})}),(0,d.jsx)(s.td,{children:"The player falls through the ground and hits the teleportation area trigger."})]})})]})]})}function x(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},8309:(e,s,n)=>{n.d(s,{A:()=>d});const d="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCACQASgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9OKKevNKRmvsD+YbkdGMCpKKCiMDNBGKk6UhGTQAitTqQrmlHFABjNFPU5FBGaQDKMYp4XFL1oAjpcU7FAGKYAvSloooGFFOC5pdgpCGUDmn4oK5NADSuKAmafRS1HoMxtNPooos2GgUUq9adtzUiGhcigLmnAYpaBjNlGyn0UD0GFcUBTT6KdxaCLmlooBwaA0F20bDinA5paQaDAuaKfRQGhmj2pwpoXBpSM1roIWigCl2UgEopQuDS7KAG0UpSl2UANBwaeDkUmykxtagB9FA5pSlIBKKd5dATmlcBtKKCmKNnFO4DgMUtIuRSgZFBejCilC5FGw0iRKKdso2UXEKORSbKTaRSqeKChdlG3HrS0EYqR6BRRShc0CsJTgAaTaaNpFAkO2c03AP50oBIpQuBSK0YgXFGzmndaKYWQm2gDFLRigLIXg+tFJiigRnhc0oWgcGnA5FUwQ0rzTlzilooTHZBRRRjFUSKFyKNtC04HIqbhoN2mkxUlFK47DAuaVTTqKLhYAuaD1oBwaeDkUgsN28UmKkrT8JeErzxprKWdmm525dz92Je7E+lJtJXZrSoTqzVOmrt7IZ4R8H3vjXWEs7NMs3LufuxL3Yn0q1efFO7sNSOjfDHR9D1b7Kxiute1S3kuo7yVeHS3hiZWdFIIL+Yq5GFD8sI/EHiD/hPS3gnwS0r6E8hg1bVoG2y67IOHghcfdgHIeQH5uVU43MfV9A0zwj+zD4Kjv8AxFrWgeHoWKWzXuoXcVlbRkj5YUaQqoGFOB1O3pxgeZXr3V5bdF382foOR5NKnN0sO1zr46lk1D+5C+jl3fT8/NfDfiiH4v3R0TW9M03wz44Cs9m9ox+wa4qgl1TcAySqASY2ywHIZ1DFcG/sJtLvZLe4jeGeFirowwVNetfHf4EWvxG0o6lpoP2vK3INtIUd2XDJNE68rKpAZWU5yB368J4a8Sn4sOnhzxG8Nr44tY2FhflBFD4hiQEkEDAS4UAlkHGAXQbdyx3QrpK6+H8v+Ac+c5LOrU9lUSVfo0rRqry6Ka6rqc3RjFTX9hNpV9Jb3EbRTQttdGGCpqPcCa9A+DlBp2e40jFGKkopk2GqSPWlBzS0UFCYxS4xRRQAUUUUCsFFFFS2FgooFOVqkY2lU807FLjFABRRRVXAz6O9PxzS7aomw0EGlAxSsvNG2gYgXFLS7OaCuKBiYoFO2YpQOeKCbAADQRmlxigDNAxNgpNlP280FCKBjdlAGKcFJoKkUAJXSeOo5rf4N6HplhJJaWniV7iTV7iFtss8cTBPswYcqr7vmIOdqMv8ZI5zbxWl4Q8dWmjxHw14nIi8OahcGTTdU4/4k91IeY5fSKRySHPAZ2VsAoRy4laKXRPU9/h+aVSpShLlqTi1BvvdaX6Nq6TPbPgn8OtK8GeErO4sGtbk3lvG6XFvgxeUVBRYscbMYxjrx7VR/aVs3vPBFlsUv5eoIxAGePKlH9a808MeJtU/ZP8AFMun6hFNceDbiQyzwRKXOlFiSbm3A5aEnJkiHIOXUZ3K/r3xN8B2/wAcfA9nb2mu39hZzSx3sd7pN/NA1xHsbbtlgkRijbw3DYOBwa8mfNCspzd/M/T8MsPisqqYPDQ5Wk4uOnMn53tv3b1On0azbT9ItYGwWghSMkdyFAryb9p74VaRqOhHV3mSwufPjwVl8mR592Y5IWBBWZSNwK8/KT2r0Lxv480z4R+CW1PWrtlt7VUiBCl5ruU8LHGnV5HPAUckn8a8JtLTUPjLr9x4z8aXEOiaHosbyRxSyj7NokGPm+b7r3DL9+ToAdq/L9+cKpKXPeyW/wDkacSVKMqCwnLzVZfAlumvtX6JdzU8VNdeIvhX4b1nVjFJrTGWzubhUCG9WNmVJSAAMsqhiAMBnIHAFchtFWNc8dzfEXVYbqKyk0nw/p0JtdHspVKztExBeeZf4XkKphDyirzhnZVgHJr2sMmoWZ+T59Wp1cY5QfNok2tpSSSb+bCilK4oGc1ueNYSinAA0pXIpaiGUDmnmOjbxS1ATZS7aAMUvWgY3ZzShKXbgUAZoCwmKNuTTihFAx3pCsNxTlXIpfLyaNmKAApzRSgYFFAykuaXvSYOaUjmtBBiloopXAKKKKVwCjGaULml2kUXAUdOaWkK5NL0qgCiiilcAopVXcKNlK4CVHdW0d7bSQzRpLDKpSSN1DK6kYIIPBBFS7KXy6LgW/BHjaDQbG38KeK7h38OOwi0fWJW3SaLIeFt52PJhJwEkJ+XhWP3WrS0PxLr37KGv3NgdKvtc8M3DtKdMs2j8+zkYk+da+a6IY3OS8RZcEll53K/PXVlHe20kM0ccsMqlJI3XcrqRggg8EEU/QviD4x+H2kx6VaWXhzxnoNvxZ2euzy29xYL2RblY5t8Y6KGj3KON7DAHBVoae6rp9P8j7LK89TlGdapyVY6KdrqUf5Zpavye5t2lnqHxi1+48Z+NLiHRNF0WN5Yo5JR9m0ODHzfN917hl+/J0AO1fl+/ieK/FMvxaurX/RZdK8IaW4k0nSZFKSXLqcrd3SnnfnlIz9z7zfvMCOLXtd8RfE+e1PiY6RZ6Zp8gms9D0lW+xxSg5WWV2Aad1PK/IiKedhYKws7KqlR2cla2y/rqcuaZyrSp4efNKfxz2b/ALsV0ivxGleaCM0/ZSFK6z5caBxS0uw0BKdxiYxSg560pBzRtNMrcVeBRtyKBxSgZqSbCYoC4pwUmjYaBCUUoSl2YoHcbS7DTsHNN5NBQbsGnYFIE4oAO2gGhSM0UDpRS1JKFFOC4NDJmtQG4pduaULS7cGk1cdhuyjZT+tKEqbCI9pFP7U7ZRsoAbRTtlAShFWQ2gLmneXQq09GFgCkUobNKBThHSsSNxxRTilJsoHZCUU7ZxRs5pDsNpytQEpNlAWH0U0HbTwuaBW7iUU4qTSBKB2EopdnNBXFAWEoBwaUITRsNAxwfNLTAmadj3oFyi0UYzShSaAsJRQBml24oCwlFKFzRspajEopdlFFwKWOKKfijHFXzEjKKeBigrmi4DKv/tC+Mfi3oPw8+EWlfCdlsp/EeuXFpruqSeHJNbi0uyjsL24V3jWSMRh7iKCIO7AZlAGSwFUwuKk/aV8D/Ez4ieAvg3pXw+1zxb4c06fXrlvFF/4engguYrFdOvmiBaZHG03YtR8qk8joM1wY7VRT7n2XBk2q9eUW01Teyu91sur8jkNK+F3xl8SfG7w3qnxE+JK6vaWNld6bZ6Na+Gn0O0uJbuW1/wBInH2iUStF9n2oduVE0uD8xB7XQ9PHiT4kaz4VsphLqmgX66ZfboJooopmtobobWdBvXybiJt6Bl+YjOVYDhvCn7LOofC745WGv+IvGnjbxR4v1zT20PTP+El1W2lcW6zJM6wpFHGeHZCzc4yOldR4g+PVp8afH/xC+AXg3xD4z0jx/wCHtFj0rUfiZY6ZbTW+g39wBNFpyzSgmW5S3kRywjkEayoXcStzk6rpRShbrtr8z0IZVTzPE1J4qUk4uHvSSjdP7NtNX0ZY+HVzp/xUufEg0XVtOntPCOo32lateys8FtZ3FnK8NyrM6g4SSNwWA2/KSDjmn311o0fhKx17T/FPhbX9F1G/GmQX2k6kl5btckEiLzF+XccYxnqQOpAPlvg39kT4dJ+wv8Q/AGkeHfGnjnQ/Atrqlvd+FNG8W3+l6n4u1GM3f2u1u7uCaKWd7qZpd/mMY5DcbirAqKl+P/hzXPBv7B3hm21n4YeE/g/N/wALX8I/ZtB8O642rQi3/trTUWSWU2tttlbDKUCMAqJ87ZIBLFTU1H0/EvD8MYSrg51uWUX+8td6rldldWt01u15Ht8vwwuLHwtDrd9qeiaZpUkYle6vbvyIrcEgDezAAZJwOtS6l8JLzQpoxqOpaFpsNzNHbW091eiKO7lf7kcZIyzHsMZPavD/ANvL4Y+HvjJ8Yv2ZdC8WaPYeItCitfEGqjTdQhFxZvdQQ2SwzPC2Ud4xLJtLA7S5Iweam+Pvwi8L/En/AIKjeB28Q6BpWtr4O+HNleaHFfWyzw6TPJqkyPNBGwKRylIo13qAwCAAgUe3qt2TW7X3C/sXK4UnOcZNxjCT1359Lbd9T07TdE/tb4h3/heC7sn1XSrpbO8QSEi2laFJ1DYGRmKWNhx0cV0B+El3Hrp0ltV0Aax5LXMenm9H2qaFTt8xY8Z2Z7nHXnFeffCBif8Agpz8bhk4Gp6EQPQ/2LD/AIVf/ZE/YnPwc/ao+JnxB13wro//AAlHi7xTquox+I9kdxez6dK+LSHzzmRESEKnlAhV2nA5ySWLqWTutrmlHhjBe0qU5xlK1RQVnsmk7vTpfcbq/jlbv9jj4weIvD2puv8AxQmpX2n39nMUeNhZzskkbrgqwIBBGCCOxFV/gvp76p8BNJ8RaxrOmaVptlo9pNqGraxeiCBGaFCWklfjJJ5LHqevNeTfsn6hFq//AASK+Jl3BMtxb3XgfxLNDKrblkjY6gUZT3BUgj2xXpEWgHxd/wAE0k02H4aWXxguJR4eZPCV5qb6dbX7C5sGWWadIpmSKAr9ocCKTctuy7G3YqZVpRcpr+6OhlFCvTw2Eq/DGVbyb5WdLqk+mWen6Fe2mv6BrWn+JhL/AGXe6Zerc21+Yv8AWCORflYjDHAJ4R/7rYn0fSZ9d1SCztl3z3DBEGcc14n8XX+Iy/Ej9nfQ/F/gL4O/CTQdM8WanqWl6boPjrUNZv8AVJBoWrRSQR2r6LaRoo+1GZ5HmAGwDBZ1Fe9eD/CcHjrXk0e6ub+zttSjlgllsbyWzuVVo2B8uaJlkjcjgOjBlJyCCAa6aNaUqTk+lz5/NcooUMxpYWjflny6f4naybS+9oguNM0tbjxBa2vizwhqep+FbeS61fTbHVEuL3T40GXMsK/OmMdCBzx1rjP2pfGV3oX/AAT08bavoOq3NnM+paKYL2wuWjZo5dTslbbIhB2vG7A4OCrEdDR+x/8ABm6+ETfFC0034B2Hwx8Iwrr8dv4m1Xxnc654o8V3BvpC11crPC8nlXO17gSSXkr4aIbcH5fI9Nlab/ggj4cd2LO/h/wSzMTksTcaVkmuP6xKpBqXkfXwyLDYLGU6lBNXVRNN32j6L57rsz6NvdMsvD/g5vEOv+IfDfhXQxMLcX2t6iljbtIeih3+XJwcDPODUd9ZQWPifTdLj1PTLyfWLOPUbGS2uPMiu7Z2CrNGwHzpkrkrnG9P7y5oftJ+Frzxh8Avh3DpXwc0D416lZeMPtEGna1rkukafoTizv8A/iYzSxWt0zBQ3kqnkMN92jfLtDDza3vPHmp/t9fCy28deG/hd8PX8O/D/V7fS/Dnhnxjfa/dTW02paIBNIsulWUcEUJtfLHzuzGU7VwjGtvrM/auPS7PHnw5g/7NjiFfmcYyvfu9Va1rfO56t8d59I/Zm+H2reKPHPiPQfD2i6PBJcvNcTtvuVjQO4hjCmSVgD91VLE9Aa1/ij4On0n4e+Er3TfEPgLR4k1/Z4hv9Z1BoY5bL7Pc5ggfG37SJ/s/DYGxJecgZ+fvHHwO8J/GL/gpP8avEXi7QdP8Var4XXRdF0R9Yi+3R6NaPpsNzJHbRy7kh3zSu7lFBYkZJwK9F/af/Zzm+PHwi+Dmm6b4WsvEWl6N8SP7Z12ze3ikhSA6bqsbTSRvw/7+4gzwTlwexIiVSq6cZt7s6aGAyyljq+Dp0nLlhLd3vs/dVtHrZPcm+HXxF0X4t+B9N8SeHL9NU0PWIRcWV2kbxrcRnIDBXVWAOO4Fdt8UfB02k/D3wle6b4h8BaPEmv7PEF/rOoNDHLZfZ7nMED42/aRP9n4bA2JLzkDPLeFLHStP8O2lvocenw6TbxiO1jsAi20aDgKgT5Qoxjjis39qH9nOb47/AAj+Dmmab4WsvEWl6P8AEf8AtnXbN7aKSFIDpuqxtNJG/D/vriDPBOXB7EjfEymlFp21PD4ao4apXrwq0+Zckml106LT4uz6Gr8L/FOg/Fv4SL4+0zxFott4Ie3W6XXNRnNjZ+UTgOWlClQePvAdR61c1O60y0sNCvLTX9B1rT/Ewl/su90y9W5tr8xf6wRyL8rEYY4BPCP/AHWxn+PvCWma5+wpr2ieHfhhoPxasRqulLY+D01H+zNNvAmo2ZR3mhim2QW7J9oYLE4ZbZl2NnFeUfFx/iP/AMLL/Z30Lxf4C+Dvwl0LTfFmp6lpem6B461DWb/VZBoWrRSQR2r6LaRoo+1GZpHmAGwDBZ1FZfWaiq8vS9j0lw9g5ZY8UrqXLKW/Z6K1reTd0/Lt7bq1mmk/FO48GmcTa5a2dpqEqRwTeUIbqSeOFlkZAjktbTAhCSu0bgNy50vhk2g+Ifjh4g8JSatpd3qXgy5t7TWbQtJHsmuLVLqGJSyqHYwyRyfKTgH1BFZevftOaP8AD/49aZ8FDJ4n1j4g3+hT61ca5Y6dBeW3w8tbjdDbPPLKRuM08chjhAlY+SxKCJFxxv7EH7Ovhr9m34j6l4TbV7vxd41sdf8A7V8W69rMv2nUtY1a5tEYXsjEALvhaNY1jASNFEagbCKX1ipNOPk9e/obyyLBYWdOtKLfNOHutr3L9J+r208i3deNbXwX8T5fCHiLxX4LvfFWt6trU+j6VoM8s8ltpltc5hW5BXEU8cE1usgYgGTft3AZrpRxXmHwX/Zyi+DHjfxvrHiHwvo+i+KvFXjzxTqNhfSW9uL/AFKxn1WeeJ1lH7xkMMkJxn5QVBAxivUK68O26abdz5biClSp4+pClBwSb0+e68n0Ciil4Na3PFEop2yjZRcQ2inbOKKQGfvp1JinLWgCUU/aBRigBlcV8R/gTp/xR15NQvvE/wAV9NkigW3SDw/8SvEWgWaqpJH+jWN7DDuyxy2zceMk4FdzSYqZRjJWkrm9DE1qEuehNxfdNr8jzXwT+yx4a8C/ETTvFcOrfErWNe0eCe30+68Q/ETxBr4sFn2eaYUvr2ZI2by0y6qG+Uc1s/CX4H6F8D9B1XT/AA9L4jj/ALbvZdSv76+8R6jqWp3VzJGkbTNe3M8lzv2RoA3mZXYNuMV2OKWkqcFsjWpj8VU/iVJPbdt7bfd0OB8Jfs1+GfAvw6vvDOk3HjGys9TvpdTur5PGGrnWZrqVt0kx1I3Jvd7HqwmzgkdCRWDpf7EHgHShZDPjq8Wz1+LxQyX/AI916+XUNTiMBiubwTXji8aM20GwXHmBPLG0DnPrlKvWo5Ib2K/tLFpNKrLXV+89W9769TkdQ+Ceh6v8ZbHx7eSeIb3xFpdlJYWIufEOoTafYQyBBIILBpzaRM4jTc6Qh22jJNL4c+C+i+GPi9rHjuGbxHd+Kdct0tLi71LxFqGopBAkjSJDbw3E7xWsYdmbZAka5J4rsKTbzVcqXQyeLrtWc3ayW72Wy9F0Rz/wG+HHhX9m3xtrfiiKTxRcSazdf2rrd7qWr6p4kv7pooSihPtEtxOQqKFSGIY4AVOgrwn4YfBHRP2rNC+IGseIn+L+n6F4m8ba/dWmmTeIfE3hCO/0+e8kaJp9NE1qSroek8OSpx0r6XpCmaxdCDlzNeVj0aee4qGHlQU3dy5ua75trWv2OE8R/s6eFPEXwMi+GqW+r6H4Jhs49NXTPD2uX2gqbRIzELYyWU0MjQlCVMZYow+8DWp4g+FGl+I/BlroIuPEOkWVjEkFvLoev3+jXsCIoUKt3aTRXAGAAQJPmwM5rp8UuMVryx6o4I4qurNTejutXo3u12bPMPh9+yB4H+HPxNTxnDB4n13xbBZvYW+seKPFmreJbyzt3Kl44JdRuZ2hViq7hGV3YGc16ZPCtzA8bjKSKUYZxkEYNPpVOBTSSVoozrYmrVn7SrJyl3bbf3nksv7Fvg641rUNTm1X4qXGqalYSaU99P8AE/xLLdW9pJLFLJBbytfl7dHeGLcsJQMECnK8VreJv2W/B3iz4W+F/BNzF4ig8I+D1tE07SLHxNqdhaOlr5X2dLlILhBdqnkxELc+YMpnGSSfRQARS4qPZw7I3lmWMk1KVWTa/vP079tDlviP8KdP+KFpFFeal4x0kwnIn8OeK9U8O3Dj+682n3EEjr/ssxAOTisP4OfsueDPgT4x1bxJoNprM/ifXY4ob/XNb1/UNd1W5iiJMcZu76eafy1LEhA4UE5xmvRSM0Yp8kb81tSFjMR7L2HtJcna7t92xxvww+B2gfCHVfEN/pLeILnUfFV4t9qt7rPiHUNaurqVI1iT97eTSuqKiqqopCKAAFFWviP8KrD4oWcUN5qXjDSTCcifw54r1Tw7cOP7rzafcQSOv+yzFc84rqMUFc0csbcttBLFV1V9upvn73d/v3Od+Fvwy0X4MfD7SfC3h22ms9E0SAW1nDNdTXUiICT80szPI5ySSzsWOeTUfxH+FenfFK0hhvdS8Y6SYTkT+HPFeqeHbhx/debT7iCR1/2WYrnnFdMExRtFDimrPYVPEVYVPawk1Lunr95w2lfs5eGfDvwi0rwRpLeJ9C0LRIRBZPpPijU9P1GBBk4+3wXCXZzn5iZiW/izWX8Pf2P/AAN8N/idH41gh8T654ugtHsLfWPFHizVvEt7ZwOVLxwS6jcztCrFV3eWV3YGc16cuAKcADS5I3vY1+v4nkdL2kuV7q7s790cj4B+C2h/Dbx34o8T6e+v3Ov+MZ4p9VvtV1+/1WWUxGQxRxm6mk8iJDNJsih2RoGwqgAVH8O/gZ4f+GGueJtT07+3bzUvGF0t3q93rOv3+sz3TqmxFD3k0rRxqnyrGhVFHAUCuzxSFKSUexMsVXlzc02+a19Xrba/e3Q868P/ALL/AIX8PfFK08ZfavHGqa7p0VxBYnWfG2tavaaek+zzVt7S6upLeHcEQfu41wFAGBXodOCYpdtVGy0iRXr1a0uatJyfdu/5jKMZp+wUbKdzIRW5xTqQcUtMAopVPNFK4GdRT8ZoAxWlzMRXwKUHNGOaXHNFwCinAAilAxRcBlFPxRii6AYDinjDCjFLjFFx3EAxS4zRQDg1Nx7hRTuM0u2kKzGUYp+2l6UD1I8c04ACnUm3NBQvSiiincTCilWnYyKROoyjrT9go2UFIZRTwuKNvNAxlAODTymaMUAAfNLTSmacOKACinjBo2ipuAyin7RRsougGUU/ZRsFO4DVxminbaKLgf/Z"},157:(e,s,n)=>{n.d(s,{A:()=>d});const d="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAuASEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9ZKKds4ptfR6M/m8KO1FFFgGs1JyTTs801mpgIRg0UZooAKKKKQB1pMUtFKzAQrmk2U6ijUBoSjZTqKNQG7KQpzTi+DTS2aeorhjHWkbkcUGimA0oTSbDT6KAGbDRsNPooAZsNG00+igNCMjFGKkooFoRkYoqSml8UyRuKKC2aKdxjSpJppGDUlIRmlcqyGUU/YKAMUhaDKKdsop6kmjikZQBSnkUmzNSbnlv7XnxKn+HuvfCqO//AGhvDnwA8H6jpfiF7+a71bQbC+1y/judLFosX9q204eKKKS+8zygpVpYNxOVrS/Zl1XTfGnwn1HVPC3xF1X43ve6pPJb67Pf2Uy6gY5xDcxwPaQQ25SMRyGNYkCuVwCd4ao/jPF4w/4Wj4O8Q+Fvhv4K8X3XhXRNU0iG91v4g3nh5oU1C5sp7iMW8Gk3qyDOnWhEhkUj5xt5ycXx+vxy+IvwK1XRtNg8E/DTxb4o1NNOuNV0TxPeajJ4Z0NmT7TNZTSWELTai0YkjjLJAkRkDhyU2twpSTk0tT7SriMLWpYenUmuRKKkr7WjZ+7y3v2fNv0saPhf9qbS/Gt58Ur7Q/C3jDxR4X+Gd7Jo1td6Bai/vvGep2y7b2DTrbC5SK4P2YSu4RpI5jlUj3nuPDHjSHUfHfg3w94h0DX/AARrnjHw/qfiBNJ1aW2murGPT5beK5WV7Z5Y+DeWjAqWysp6FSK5HxP4S8Ra74f+K/hz+wNIj8L+LLbbpken+LbvSb28luf3l+ZJoLPdYB7jc4MZuSxmlztVljXzz4LfBbxn8OfHHgzV9L+F3wm+Hmi+AvBHizRNN8OaD4qu7mK6vtXutKuIzNM2mRbVzp8jSzhHctOMRttJZSdbSw6MMlak52+K6+K/LeP5q99N7rsdfoH7Z/hbxJ8BPh18QbbwX8THtfijq0ej+G9FNvp6apq5lsnv47pAbnyIbc2cFzKTcSxyARAeXl1B6L4m/tG+E/hF4W+KGq6lb+IdRPwx8T6X4Un0/S7dJr7U73UksJLOC3VmVWeRdTsx8zIqs75OEyfPvBf7Pni3wv8ACv8AZe8JSDw7LB8GpIrvxFerfzb5pYvDV3pCR2kXkYlVpbsuXkeIqkY+Vi2FrfFq5vfhL4d+LfiLxVpfg+7l+L3xs8G3Ph7SDrMxLJGNB02CQyGGNlukfTHu9iJKiBQCZlD5UnVir3/rT/gl4WnlWIqKChFO1/tb2ndPXayi+/Y9x8G/EW2l8YeHbK40vV/Dmr+JfD2pa1aaZqbW8tzALPZDcqz28kkJMb3Nqcq5BFwvcMF8t/Zf+JfiC9/Zh/Z8mufBPxN+I2tfEHwZp+q6pq+j21v9j0pRa23m3F5c3MsSNNLJKSkMZaRgkjYAGareE/C/xW8U/tDXnxP8XaR4G0iTwt4P1Lwp4I8I6Vr9ze2wa+khmu7u91GSyicPNJaWSgR2zCKOInDsxFcjqf7HccX7Ovwe0bxD8IvhZ8ZfE/wx8H2nhcReIdcm02yiKQwCVo5PsF15qGWL5cxRMqs/J3bQ37Xdf1uOlLKElRqcr1b68qk4wvrvy3Ura7n0J4T8W2PiHUdXjiiuLmXw9q13o97aptSQ3FvIUKqWO3D4VlJxlJFJxnA4jRvjvc694g+Ok9v4X8QXOkfDS71MWNxNc2anVp7MyPcWdtBCu8JHGg8tpfnkZ8Hpupn7Ivwdu/gR8I4dMv8ARPh94d1W5v7jUrvT/BWmNYaNaPLIWWOJW+eTZGI0MrhWkKbiq52jR8A60/wT+Jnj7xL4lt/h/wDDv4dtqJ8Ry67feLncT3NxKftc1ytzbwxWkZzFtjWablm+bkAaS59JX6Hm4N4JyqYeMFJOpHlWt3G7T5X31X5mrafFjR779pPwb8NbWOS/vfEXhW98ZalqEdyq22jafHKkFmzfKd5upPP2YOAtrKecCuZ+FH7Vfh74y/AjTPiLZeHfGfhzwrrN9pdrpl7rsVrH/a8OpTJb2V1FFFNJLHHLPLAgWZUfFxG2MbtvGf8ABPTXdI1XV/iJ8dfLt9C8IeJibHwaNQBt7fT/AAdo1lJa6WxE2GSKbF1efOR8t6CcVxnwt0L4g/tPfs4/AjQ7Lw54H+HnwgtbTwt4wvmsddu9U1XVhYR21/YabFby2saWsEd1FAzO1xPIyQqucszVCnVbXnr+P+R6NbBZZTpTi0rRbjza3bUFrG2l3PvpY+ktb8cX2j+K/HOnN8OfiXHpPgKwkurnxTcWVtb6RqssVst1LDZo8wuZgEJjEwiEbSqUDYBYUvDvxUtfGnju40vS9K8QSaVb6NY6rHr81ssemag9z5p8i3fdukaNEjZjtwPOUZzxXhn7Uv7ICfE3xx4p1TQPgN+z/wCIfEfjaYz3fjHxleT3T6fK0aRNN/ZYsm84qiAqn22NWcsx2A7a9w8IWHiLQ/F76SNJ8J6X4B0bQ7Cy0f8As+aY39xdJ5ouHlhKLDBAE8hYo42c/K5LDIUa0fa3988zN45b7NSwVr27yvureXNve/T0Ob/a7+JFx8PNb+FUd7+0N4b+AHhDUdL8QvfzXmraDYX2uX8dzpYtFi/tW2nDxRRSXxk8oKVaWDcfmWtD9mbUtN8bfCjUdU8L/EbVfjfJe6nPJba7Nf2Uyag0c4huY4HtIIbcpGI5DGsSBXKYBO8NTPjMPF//AAtDwd4h8L/DbwX4vu/CmiappEN7rfxBvPDzQpqFzZT3EYt4dJvVkGdOtCJDIpHzjbzk4nj1vjj8RPgXqujabB4J+Gni3xRqaadcatovie81GTwzobMn2maymksIWm1FoxJHGWSBIjIJA5KbWzUZpyaWp3VMThK1LD06k1yJRUtdrRafu8t79nzPXpY0fC/7UWleNb34o32h+FvGHijwv8M7yTRra60C1F/feM9Ttl23sGnW2FykVwfswldwjSRzHKpHvPc+GPF0OoePfBvh7xBoHiDwRrfjHw/qfiBNJ1aW2murGPT5beK5WV7Z5Y+DeWjAqWysp6FSK5HxP4X8Q67oPxW8Of8ACP6QnhfxZbbdNj0/xZd6Te3ktz+8vzJNBZ7rAPcbnBjNyWM0udissa+efBb4NeMfhz458F6vpfwu+E3w80XwF4I8WaHpvhzQfFV3dRXV9rF1pVxGZp20yLaudPkaWcI7lpxiNtpLDdfSxVGOStSc7W5tPivy3j+avfTfTsdfoH7ZnhbxJ8BPh18QbbwZ8TXtfihq8ej+HNFNvp6arrBlsnv47pAbnyYbc2cFzKTcSxyARBdmXUV0PxN/aI8JfCLwv8UtV1ODxDqP/CsPE+leFZ9P0u3Sa+1O91JLCSzgt0ZlVnkXU7MfMyKrO+ThMnz/AMF/s/eLPC/wr/Ze8JSDw7LB8G5YrzxDerfzB5pYvDV3pCR2kXkYlVpbsuXkeIqkQwrFsLB8Wby8+E/hz4ueIvFWl+D7uX4u/Gvwbc+HtIOszEskY0HTYJDIYY2W6R9Me72IkqIFAJlUPlSdWKv/AF0/4JWFhlOIqqCjFO1/tb2ndPXayi+/Y9w8F/ES1k8Y+HLK40vV/Dur+JfD2pa1aaZqjW8tzALPZDcqz28kkJMb3Nqcq5BFwuOQwXy39l/4k+Ib39mH9nya68E/E34i618QfBun6rqer6Na2/2PSlFrbebcXlzcyxI00skpKQxlpHCSNgAZqt4T8N/FXxT+0NefE/xbpHgbSJPCvg/UvCngjwjpWv3N7bBr6SGa7u73UZLKJw80lpZqBHbMIo4jw7MRXI6n+x/FH+zr8H9F8Q/CL4WfGXxP8MfB9p4YEXiHXJ9Ns4ikMAlaOT7Bdeahlh+XMUTKrPyd20D9tuv63HSnlCSo1HF6t9eVScYX135bqVtd/kfRHgPXLPx14mvdOid1l0nXJ9BvlIw0U8M3lPj/AGWG11PdHUkDOBwFz+114Sh+EnjfxoPDfxAbRvBPiv8A4RCJltbRpPFV82qvo6R6cnn7sHUAkO+6ECYfeDtBqf8AYz+FN1+zx8NbG01DQfh/oOpvqc2rXemeCtNbT9Gtnkm3rFErfO+2MRoZXAZym4qudo4Kw+A3js/sraf4MuLXwlHrupfE+18bay0WsXElpp1nH4tfX3jt5DaK9zNs2QgPHApZmYsAoDay9q0rdvxPLwryuM6iqJNc7te/w8smtrfaUV8z2HUPidp9j4i8VWI0Dxld33hLwXp/ji50PTrFNR1m4tr03kcNpDFC7JJdGewuYtquY8qrb9pJFvwp4rOraz4MsfEnhnxN8O9Q8ZxXrwabrz2klzA9qscjxs9vNJCWeOUFMPz5cucbQW8+8afB3Uvib8aPitqPiHR/DWoeDfG3w+0DwLb6bJqE7S6iljcaxczyXGIVFtufUo1jKNPjyS7Dny64P4C/ssf8IN8d4/EifAj9nr4b6Ho2l3dpbW+hPLq+raxczhV3y3rWVmLa3EYZfKSKRnLkswA2mP39zutkjpuSSvo95LdRdlvpfmT3a+49h8C/FXUPG2v+FdP1T4Y/Ez4ezeJoZ7g/8JHb2jppyIYfL+0SW00iRvIspPlscgxuOcZo1T4q31j4gWyn+F/xP0e0n8RzaFZ6pe29nNaX0EYnA1EeRO7xWztCNjSKCyzRNxuwPPPhn4C+I9p8VPCEP/CM+BPhf8L/AARcX2oPoeheI7rW5vE11cQLAqOGsrOKztEAMvlRK2+VUbCYJMOp/Dz4kXvj+y0nwv4T+H3wr8Ev4qtvEviDVdJ8SXWoX+vpbvLIttFY/YbeC189nCzymWVmjLIfMOHDUqvu7mdallT9qouCurr4tHZ6Lu721v8ALc9G8TfGiHwt4e+J+t3/AID+I+j+EvhZpM+rXnivVbS2tNM1lLaJZ7oWUTS/aZFSIuVlaNY5GhcK2ME2ofjBpVz+09afCey8PeL9Z1eHT7DU9d1q0FpFpHh9L15BbwSNLMs0s7JC7lYY3CBo8/erwr9pn9mzxR8UNW+O83hv4X/DdvEfxg8Iav4YXxt4g8eahc6jaJf2f2XyYLY6bILO2QhZDDHO6krgY3bl9X+KPxw0n9n/AOM2neJrvxJ8APDtvNFpn/CUap4q8YNpOpWOnWsr/Mtmcrcz+U8yxOWiGfLB8wIBWTnVirz0XyPRpYHKq9SMMJFTlb+9a146tLVNpvrbuT+G/jpP4n+Emm+KtH+HHxC8Zza14q1LwxaaT4bhgmktvsVzdQy3l1czvFBBBi1yCzbmeVEUMa6qLxNbXPjjXtA8q7tNS8PNbG6trpFWWNLi3SeInaWXo5RsEgSRSAEgBj80fBv4X6f+0X+w14MvNY+F3hvx/C+v614w0bQvF13No6iLUb68lhkd/styV3W1xG3lvAfm2Hcm3n0X9kD4CXXwb0zxNeX3gf4U/Dy58R6is8Oh+BLRxaWFrHEqRRz3TxxPeT58xmlMMQ/ebVTAydqLquV5bHkZvTyuGGlHDWU4ya3d/ifyta1v+HPYaKds4pNldZ8iJRS7KKd2I0fLpNpFPorI6Bm3il2U6igCMriipKKAI6KeWwaazZFMBpOKTfTqCM07BqRtz1op+OaNopgMI4pAMVLjNN2UwGFc0AYqQpkUBMCkBGVyaNvFP2UhABpiGFKQrinucjim7KQhtFO8ugpTJG0U5lwKAmRQOwwrmkCVJspNlILDNnNIUxUhTFDfLRcqyI9lIeKXJY0FMCgkSig8GlC5FMQlFBGKKACms3OKdRQAzBopd9FAH//Z"},5953:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/popup-628f5c47080104d8e73087f23690bd9e.jpg"},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var d=n(6540);const t={},i=d.createContext(t);function r(e){const s=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),d.createElement(i.Provider,{value:s},e.children)}}}]);