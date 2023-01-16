"use strict";(self.webpackChunkglowworm=self.webpackChunkglowworm||[]).push([[3749],{72414:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(44367),r=a(29547),i=a(3469),l=a(37172),s=a(59061),o=a(26573),u=a(48943),c=a(58847),d=["links","action","heading","moreLink","sx"];function x(e){var t=e.links,a=e.action,x=e.heading,m=e.moreLink,h=void 0===m?[]:m,p=e.sx,v=(0,r.Z)(e,d);return(0,c.jsxs)(i.Z,{sx:(0,n.Z)({mb:5},p),children:[(0,c.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,c.jsxs)(i.Z,{sx:{flexGrow:1},children:[(0,c.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:x}),(0,c.jsx)(u.SW,(0,n.Z)({links:t},v))]}),a&&(0,c.jsx)(i.Z,{sx:{flexShrink:0},children:a})]}),(0,c.jsx)(i.Z,{sx:{mt:2},children:(0,o.isString)(h)?(0,c.jsx)(s.Z,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return(0,c.jsx)(s.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},8139:function(e,t,a){a.d(t,{_:function(){return u},g:function(){return c}});var n=a(44367),r=a(37172),i=a(29336),l=a(82255),s=a(3469),o=a(58847);function u(e){var t=e.title;return(0,o.jsx)(r.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function c(e){var t=e.title,a=e.sx,r=e.children;return(0,o.jsxs)(i.Z,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&(0,o.jsx)(l.Z,{title:t}),(0,o.jsx)(s.Z,{sx:(0,n.Z)({p:3,minHeight:180},a),children:r})]})}},83749:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var n=a(23151),r=a(29987),i=a(58847),l=(0,r.Z)((0,i.jsx)("path",{d:"M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"}),"VolumeDown"),s=(0,r.Z)((0,i.jsx)("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"}),"VolumeUp"),o=a(3469),u=a(89227),c=a(87408),d=a(94519),x=a(37172),m=a(24960),h=a(53525),p=a(72414),v=a(75641),Z=a(19363),g=a(33543),j=a(8139),f=[{value:0,label:"0\xb0C"},{value:20,label:"20\xb0C"},{value:37,label:"37\xb0C"},{value:100,label:"100\xb0C"}],b=[{value:0,label:"$0"},{value:25,label:"250"},{value:50,label:"500"},{value:75,label:"750"},{value:100,label:"1000"}],y={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}},P=(0,m.ZP)(v.Z)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function k(e){return e>0?"$".concat(e,"0"):e}function C(e){return e>0?"$".concat(e):e}function V(e){return"$".concat(e,"\xb0C")}function w(e){return f.findIndex((function(t){return t.value===e}))+1}function T(){var e=(0,h.useState)(30),t=(0,n.Z)(e,2),a=t[0],r=t[1],m=(0,h.useState)([25,75]),v=(0,n.Z)(m,2),T=v[0],S=v[1];return(0,i.jsxs)(P,{title:"\u7ec4\u4ef6: Slider".concat(Z.uU),children:[(0,i.jsx)(o.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,i.jsx)(u.Z,{maxWidth:"lg",children:(0,i.jsx)(p.Z,{heading:"Slider",links:[{name:"Components",href:g.ko.components},{name:"Slider"}],moreLink:"https://mui.com/zh/material-ui/react-slider/"})})}),(0,i.jsx)(u.Z,{maxWidth:"lg",children:(0,i.jsxs)(c.ZP,{container:!0,spacing:3,children:[(0,i.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,i.jsx)(j.g,{title:"Volume",sx:y,children:(0,i.jsxs)(c.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(c.ZP,{item:!0,children:(0,i.jsx)(l,{})}),(0,i.jsx)(c.ZP,{item:!0,xs:!0,children:(0,i.jsx)(d.ZP,{value:a,onChange:function(e,t){r(t)},"aria-labelledby":"continuous-slider"})}),(0,i.jsx)(c.ZP,{item:!0,children:(0,i.jsx)(s,{})})]})})}),(0,i.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,i.jsx)(j.g,{title:"Disabled",sx:y,children:(0,i.jsx)(d.ZP,{disabled:!0,defaultValue:30})})}),(0,i.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,i.jsx)(j.g,{title:"Temperature",sx:y,children:(0,i.jsx)(d.ZP,{defaultValue:30,getAriaValueText:V,valueLabelDisplay:"auto",step:10,marks:!0,min:10,max:110})})}),(0,i.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,i.jsxs)(j.g,{title:"Size",sx:y,children:[(0,i.jsx)(d.ZP,{size:"medium",marks:!0,min:10,step:10,max:110,defaultValue:30,valueLabelDisplay:"auto",getAriaValueText:V}),(0,i.jsx)(d.ZP,{marks:!0,min:10,step:10,max:110,defaultValue:30,valueLabelDisplay:"auto",getAriaValueText:V})]})}),(0,i.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,i.jsx)(j.g,{title:"Small steps",sx:y,children:(0,i.jsx)(d.ZP,{defaultValue:5e-8,getAriaValueText:V,step:1e-8,marks:!0,min:-5e-8,max:1e-7,valueLabelDisplay:"auto"})})}),(0,i.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,i.jsx)(j.g,{title:"Custom marks",sx:y,children:(0,i.jsx)(d.ZP,{defaultValue:20,getAriaValueText:V,step:10,valueLabelDisplay:"auto",marks:f})})}),(0,i.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,i.jsx)(j.g,{title:"Restricted values",sx:y,children:(0,i.jsx)(d.ZP,{defaultValue:20,valueLabelFormat:w,getAriaValueText:V,step:null,valueLabelDisplay:"auto",marks:f})})}),(0,i.jsx)(c.ZP,{item:!0,xs:12,md:8,children:(0,i.jsxs)(j.g,{title:"Range",sx:y,children:[(0,i.jsx)(o.Z,{sx:{width:"100%"},children:(0,i.jsx)(d.ZP,{scale:function(e){return 10*e},step:10,marks:b,value:T,onChange:function(e,t){S(t)},valueLabelDisplay:"on",getAriaValueText:k,valueLabelFormat:C})}),(0,i.jsxs)(o.Z,{sx:{p:2,width:"100%",borderRadius:1,bgcolor:"grey.50012"},children:[(0,i.jsxs)(x.Z,{variant:"subtitle2",gutterBottom:!0,children:["Min: ",k(T[0])]}),(0,i.jsxs)(x.Z,{variant:"subtitle2",children:["Max: ",k(T[1])]})]})]})})]})})]})}},82255:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(23080),r=a(13010),i=a(45443),l=a(53525),s=a(60236),o=a(4607),u=a(37172),c=a(92261),d=a(24960),x=a(10656);function m(e){return(0,x.Z)("MuiCardHeader",e)}var h=(0,a(35689).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),p=a(58847),v=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],Z=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return(0,i.Z)((a={},(0,n.Z)(a,"& .".concat(h.title),t.title),(0,n.Z)(a,"& .".concat(h.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),g=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),j=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),f=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),b=l.forwardRef((function(e,t){var a=(0,c.Z)({props:e,name:"MuiCardHeader"}),n=a.action,l=a.avatar,d=a.className,x=a.component,h=void 0===x?"div":x,b=a.disableTypography,y=void 0!==b&&b,P=a.subheader,k=a.subheaderTypographyProps,C=a.title,V=a.titleTypographyProps,w=(0,r.Z)(a,v),T=(0,i.Z)({},a,{component:h,disableTypography:y}),S=function(e){var t=e.classes;return(0,o.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},m,t)}(T),L=C;null==L||L.type===u.Z||y||(L=(0,p.jsx)(u.Z,(0,i.Z)({variant:l?"body2":"h5",className:S.title,component:"span",display:"block"},V,{children:L})));var M=P;return null==M||M.type===u.Z||y||(M=(0,p.jsx)(u.Z,(0,i.Z)({variant:l?"body2":"body1",className:S.subheader,color:"text.secondary",component:"span",display:"block"},k,{children:M}))),(0,p.jsxs)(Z,(0,i.Z)({className:(0,s.Z)(S.root,d),as:h,ref:t,ownerState:T},w,{children:[l&&(0,p.jsx)(g,{className:S.avatar,ownerState:T,children:l}),(0,p.jsxs)(f,{className:S.content,ownerState:T,children:[L,M]}),n&&(0,p.jsx)(j,{className:S.action,ownerState:T,children:n})]}))}))}}]);
//# sourceMappingURL=3749.d77e1d29.chunk.js.map