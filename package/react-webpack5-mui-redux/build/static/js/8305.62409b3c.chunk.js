"use strict";(self.webpackChunkglowworm=self.webpackChunkglowworm||[]).push([[8305],{72414:function(e,t,r){r.d(t,{Z:function(){return h}});var i=r(44367),n=r(29547),a=r(3469),s=r(37172),o=r(59061),u=r(26573),c=r(48943),l=r(58847),d=["links","action","heading","moreLink","sx"];function h(e){var t=e.links,r=e.action,h=e.heading,p=e.moreLink,m=void 0===p?[]:p,x=e.sx,g=(0,n.Z)(e,d);return(0,l.jsxs)(a.Z,{sx:(0,i.Z)({mb:5},x),children:[(0,l.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,l.jsxs)(a.Z,{sx:{flexGrow:1},children:[(0,l.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:h}),(0,l.jsx)(c.SW,(0,i.Z)({links:t},g))]}),r&&(0,l.jsx)(a.Z,{sx:{flexShrink:0},children:r})]}),(0,l.jsx)(a.Z,{sx:{mt:2},children:(0,u.isString)(m)?(0,l.jsx)(o.Z,{href:m,target:"_blank",variant:"body2",children:m}):m.map((function(e){return(0,l.jsx)(o.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},8139:function(e,t,r){r.d(t,{_:function(){return c},g:function(){return l}});var i=r(44367),n=r(37172),a=r(29336),s=r(82255),o=r(3469),u=r(58847);function c(e){var t=e.title;return(0,u.jsx)(n.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function l(e){var t=e.title,r=e.sx,n=e.children;return(0,u.jsxs)(a.Z,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&(0,u.jsx)(s.Z,{title:t}),(0,u.jsx)(o.Z,{sx:(0,i.Z)({p:3,minHeight:180},r),children:n})]})}},88305:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var i=r(34451),n=r(18815),a=r(3469),s=r(89227),o=r(87408),u=r(37172),c=r(24960),l=r(94934),d=r(72414),h=r(75641),p=r(19363),m=r(33543),x=r(8139),g=r(58847),v=[{name:"h1. Heading",variant:"h1"},{name:"h2. Heading",variant:"h2"},{name:"h3. Heading",variant:"h3"},{name:"h4. Heading",variant:"h4"},{name:"h5. Heading",variant:"h5"},{name:"h6. Heading",variant:"h6"},{name:"subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",variant:"subtitle1"},{name:"subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",variant:"subtitle2"},{name:"body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",variant:"body1"},{name:"body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",variant:"body2"},{name:"caption text",variant:"caption"},{name:"overline text",variant:"overline"},{name:"Button",variant:"button"}],y={minHeight:"auto",marginBottom:3},b=(0,c.ZP)(h.Z)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),Z=(0,c.ZP)("div")({width:"100%",maxWidth:720});function f(e){var t,r=e.name,a=(0,l.Z)(),s=function(){var e=(0,l.Z)();return(0,i.Z)(e.breakpoints.keys).reverse().reduce((function(t,r){var i=(0,n.Z)(e.breakpoints.up(r));return!t&&i?r:t}),null)||"xs"}(),o=a.breakpoints.up("xl"===s?"lg":s),u=a.typography[r][o]?a.typography[r][o]:a.typography[r],c=(t=u.fontSize,Math.round(16*parseFloat(t))),d=a.typography[r].lineHeight*c,h=a.typography[r].fontWeight,p=void 0!==a.typography[r].letterSpacing?a.typography[r].letterSpacing:"";return"size: ".concat(c," / l-height: ").concat(d," / weight: ").concat(h," ").concat(p&&"/ spacing: ".concat(p))}function j(){return(0,g.jsxs)(b,{title:"\u57fa\u7840\uff1aTypography".concat(p.uU),children:[(0,g.jsx)(a.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,g.jsx)(s.Z,{maxWidth:"lg",children:(0,g.jsx)(d.Z,{heading:"Typography",links:[{name:"Components",href:m.ko.components},{name:"Typography"}],moreLink:"https://mui.com/zh/material-ui/react-typography/"})})}),(0,g.jsxs)(s.Z,{maxWidth:"lg",children:[(0,g.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,g.jsx)(o.ZP,{item:!0,xs:12,md:3,children:(0,g.jsx)(u.Z,{variant:"h6",paragraph:!0,children:"Default Text"})}),(0,g.jsx)(o.ZP,{item:!0,xs:12,md:9,children:v.map((function(e){return(0,g.jsx)(x.g,{sx:y,children:(0,g.jsxs)(Z,{children:[(0,g.jsx)(u.Z,{variant:e.variant,gutterBottom:!0,children:e.name}),(0,g.jsx)(u.Z,{variant:"body2",sx:{color:"text.secondary"},children:f({name:e.variant})})]})},e.variant)}))})]}),(0,g.jsx)(a.Z,{sx:{height:40}}),(0,g.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,g.jsx)(o.ZP,{item:!0,xs:12,md:3,children:(0,g.jsx)(u.Z,{variant:"h6",paragraph:!0,children:"Colors Text"})}),(0,g.jsxs)(o.ZP,{item:!0,xs:12,md:9,children:[(0,g.jsx)(x.g,{sx:y,children:(0,g.jsxs)(Z,{children:[(0,g.jsx)(u.Z,{variant:"subtitle1",gutterBottom:!0,children:"Text primary"}),(0,g.jsx)(u.Z,{variant:"body2",children:"Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus."})]})}),(0,g.jsx)(x.g,{sx:y,children:(0,g.jsxs)(Z,{children:[(0,g.jsx)(u.Z,{gutterBottom:!0,variant:"subtitle1",sx:{color:"text.secondary"},children:"Text secondary"}),(0,g.jsx)(u.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus."})]})}),(0,g.jsx)(x.g,{sx:y,children:(0,g.jsxs)(Z,{children:[(0,g.jsx)(u.Z,{gutterBottom:!0,variant:"subtitle1",sx:{color:"text.disabled"},children:"disabled"}),(0,g.jsx)(u.Z,{gutterBottom:!0,variant:"body2",sx:{color:"text.disabled"},children:"Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus."})]})}),["primary","secondary","info","warning","error"].map((function(e){return(0,g.jsx)(x.g,{sx:y,children:(0,g.jsxs)(Z,{children:[(0,g.jsx)(u.Z,{gutterBottom:!0,variant:"subtitle1",sx:{color:"".concat(e,".main")},children:e}),(0,g.jsx)(u.Z,{gutterBottom:!0,variant:"body2",sx:{color:"".concat(e,".main")},children:"Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus."})]})},e)}))]})]})]})]})}},82255:function(e,t,r){r.d(t,{Z:function(){return f}});var i=r(23080),n=r(13010),a=r(45443),s=r(53525),o=r(60236),u=r(4607),c=r(37172),l=r(92261),d=r(24960),h=r(10656);function p(e){return(0,h.Z)("MuiCardHeader",e)}var m=(0,r(35689).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),x=r(58847),g=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var r;return(0,a.Z)((r={},(0,i.Z)(r,"& .".concat(m.title),t.title),(0,i.Z)(r,"& .".concat(m.subheader),t.subheader),r),t.root)}})({display:"flex",alignItems:"center",padding:16}),y=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),b=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),Z=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),f=s.forwardRef((function(e,t){var r=(0,l.Z)({props:e,name:"MuiCardHeader"}),i=r.action,s=r.avatar,d=r.className,h=r.component,m=void 0===h?"div":h,f=r.disableTypography,j=void 0!==f&&f,k=r.subheader,q=r.subheaderTypographyProps,C=r.title,P=r.titleTypographyProps,w=(0,n.Z)(r,g),H=(0,a.Z)({},r,{component:m,disableTypography:j}),T=function(e){var t=e.classes;return(0,u.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)}(H),S=C;null==S||S.type===c.Z||j||(S=(0,x.jsx)(c.Z,(0,a.Z)({variant:s?"body2":"h5",className:T.title,component:"span",display:"block"},P,{children:S})));var B=k;return null==B||B.type===c.Z||j||(B=(0,x.jsx)(c.Z,(0,a.Z)({variant:s?"body2":"body1",className:T.subheader,color:"text.secondary",component:"span",display:"block"},q,{children:B}))),(0,x.jsxs)(v,(0,a.Z)({className:(0,o.Z)(T.root,d),as:m,ref:t,ownerState:H},w,{children:[s&&(0,x.jsx)(y,{className:T.avatar,ownerState:H,children:s}),(0,x.jsxs)(Z,{className:T.content,ownerState:H,children:[S,B]}),i&&(0,x.jsx)(b,{className:T.action,ownerState:H,children:i})]}))}))}}]);
//# sourceMappingURL=8305.62409b3c.chunk.js.map