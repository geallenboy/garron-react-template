"use strict";(self.webpackChunkglowworm=self.webpackChunkglowworm||[]).push([[4459],{72414:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(44367),a=t(29547),o=t(3469),i=t(37172),s=t(59061),l=t(26573),c=t(48943),d=t(58847),u=["links","action","heading","moreLink","sx"];function h(e){var n=e.links,t=e.action,h=e.heading,p=e.moreLink,x=void 0===p?[]:p,m=e.sx,Z=(0,a.Z)(e,u);return(0,d.jsxs)(o.Z,{sx:(0,r.Z)({mb:5},m),children:[(0,d.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,d.jsxs)(o.Z,{sx:{flexGrow:1},children:[(0,d.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:h}),(0,d.jsx)(c.SW,(0,r.Z)({links:n},Z))]}),t&&(0,d.jsx)(o.Z,{sx:{flexShrink:0},children:t})]}),(0,d.jsx)(o.Z,{sx:{mt:2},children:(0,l.isString)(x)?(0,d.jsx)(s.Z,{href:x,target:"_blank",variant:"body2",children:x}):x.map((function(e){return(0,d.jsx)(s.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},8139:function(e,n,t){t.d(n,{_:function(){return c},g:function(){return d}});var r=t(44367),a=t(37172),o=t(29336),i=t(82255),s=t(3469),l=t(58847);function c(e){var n=e.title;return(0,l.jsx)(a.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:n})}function d(e){var n=e.title,t=e.sx,a=e.children;return(0,l.jsxs)(o.Z,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[n&&(0,l.jsx)(i.Z,{title:n}),(0,l.jsx)(s.Z,{sx:(0,r.Z)({p:3,minHeight:180},t),children:a})]})}},44459:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var r=t(23151),a=t(29987),o=t(58847),i=(0,a.Z)((0,o.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert"),s=t(3469),l=t(89227),c=t(33469),d=t(91985),u=t(61795),h=t(46281),p=t(86023),x=t(13656),m=t(66339),Z=t(98151),f=t(24960),g=t(53525),v=t(72414),j=t(75641),y=t(19363),b=t(33543),k=t(8139),C=["Show some love to Material-UI","Show all notification content","Hide sensitive notification content","Hide all notification content"],w=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"],M={display:"flex",alignItems:"center",justifyContent:"center"},S=(0,f.ZP)(j.Z)((function(e){var n=e.theme;return{paddingTop:n.spacing(11),paddingBottom:n.spacing(15)}}));function P(){var e=(0,g.useState)(null),n=(0,r.Z)(e,2),t=n[0],a=n[1],f=(0,g.useState)(null),j=(0,r.Z)(f,2),P=j[0],T=j[1],H=(0,g.useState)(1),N=(0,r.Z)(H,2),R=N[0],B=N[1],L=(0,g.useState)(null),W=(0,r.Z)(L,2),z=W[0],I=W[1],A=function(){a(null)},E=function(){I(null)};return(0,o.jsxs)(S,{title:"\u7ec4\u4ef6: Menus".concat(y.uU),children:[(0,o.jsx)(s.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,o.jsx)(l.Z,{maxWidth:"lg",children:(0,o.jsx)(v.Z,{heading:"Menus",links:[{name:"Components",href:b.ko.components},{name:"Menus"}],moreLink:"https://mui.com/zh/material-ui/react-menu/"})})}),(0,o.jsx)(l.Z,{maxWidth:"lg",children:(0,o.jsxs)(c.Z,{direction:{xs:"column",md:"row"},spacing:3,children:[(0,o.jsxs)(k.g,{title:"Simple",sx:M,children:[(0,o.jsx)(d.Z,{variant:"outlined",onClick:function(e){a(e.currentTarget)},children:"Open Menu"}),(0,o.jsx)(u.Z,{keepMounted:!0,id:"simple-menu",anchorEl:t,onClose:A,open:Boolean(t),children:["Profile","My account","Logout"].map((function(e){return(0,o.jsx)(h.Z,{onClick:A,children:e},e)}))})]}),(0,o.jsxs)(k.g,{title:"Selected",sx:M,children:[(0,o.jsx)(p.Z,{component:"nav","aria-label":"Device settings",children:(0,o.jsx)(x.Z,{"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"when device is locked",onClick:function(e){T(e.currentTarget)},children:(0,o.jsx)(m.Z,{primary:"When device is locked",secondary:C[R]})})}),(0,o.jsx)(u.Z,{keepMounted:!0,id:"lock-menu",anchorEl:P,onClose:A,open:Boolean(P),children:C.map((function(e,n){return(0,o.jsx)(h.Z,{disabled:0===n,selected:n===R,onClick:function(e){return function(e,n){B(n),T(null)}(0,n)},children:e},e)}))})]}),(0,o.jsxs)(k.g,{title:"Max height",sx:M,children:[(0,o.jsx)(Z.Z,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){I(e.currentTarget)},children:(0,o.jsx)(i,{})}),(0,o.jsx)(u.Z,{keepMounted:!0,id:"long-menu",anchorEl:z,onClose:E,open:Boolean(z),PaperProps:{style:{maxHeight:216,width:"20ch"}},children:w.map((function(e){return(0,o.jsx)(h.Z,{selected:"Pyxis"===e,onClick:E,children:e},e)}))})]})]})})]})}},82255:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(23080),a=t(13010),o=t(45443),i=t(53525),s=t(60236),l=t(4607),c=t(37172),d=t(92261),u=t(24960),h=t(10656);function p(e){return(0,h.Z)("MuiCardHeader",e)}var x=(0,t(35689).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),m=t(58847),Z=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],f=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,n){var t;return(0,o.Z)((t={},(0,r.Z)(t,"& .".concat(x.title),n.title),(0,r.Z)(t,"& .".concat(x.subheader),n.subheader),t),n.root)}})({display:"flex",alignItems:"center",padding:16}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,n){return n.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),v=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,n){return n.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),j=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,n){return n.content}})({flex:"1 1 auto"}),y=i.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiCardHeader"}),r=t.action,i=t.avatar,u=t.className,h=t.component,x=void 0===h?"div":h,y=t.disableTypography,b=void 0!==y&&y,k=t.subheader,C=t.subheaderTypographyProps,w=t.title,M=t.titleTypographyProps,S=(0,a.Z)(t,Z),P=(0,o.Z)({},t,{component:x,disableTypography:b}),T=function(e){var n=e.classes;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,n)}(P),H=w;null==H||H.type===c.Z||b||(H=(0,m.jsx)(c.Z,(0,o.Z)({variant:i?"body2":"h5",className:T.title,component:"span",display:"block"},M,{children:H})));var N=k;return null==N||N.type===c.Z||b||(N=(0,m.jsx)(c.Z,(0,o.Z)({variant:i?"body2":"body1",className:T.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:N}))),(0,m.jsxs)(f,(0,o.Z)({className:(0,s.Z)(T.root,u),as:x,ref:n,ownerState:P},S,{children:[i&&(0,m.jsx)(g,{className:T.avatar,ownerState:P,children:i}),(0,m.jsxs)(j,{className:T.content,ownerState:P,children:[H,N]}),r&&(0,m.jsx)(v,{className:T.action,ownerState:P,children:r})]}))}))}}]);
//# sourceMappingURL=4459.a9ba01da.chunk.js.map