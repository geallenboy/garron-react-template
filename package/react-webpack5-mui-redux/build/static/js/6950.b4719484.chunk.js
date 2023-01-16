"use strict";(self.webpackChunkglowworm=self.webpackChunkglowworm||[]).push([[6950],{48355:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(44367),i=n(29547),a=n(46596),o=n(7233),c=n(3469),l=n(60568),s=n(56132),d=n(58847),u=["sx"],f=["colors"];function p(e){var t=e.sx,n=(0,i.Z)(e,u);return(0,d.jsx)(c.Z,(0,r.Z)((0,r.Z)({sx:(0,r.Z)({width:20,height:20,display:"flex",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center",bgcolor:"currentColor",transition:function(e){return e.transitions.create("all",{duration:e.transitions.duration.shortest})}},t)},n),{},{children:(0,d.jsx)(o.JO,{icon:a.Z})}))}function h(e){var t=e.colors,n=(0,i.Z)(e,f);return(0,d.jsx)(l.Z,(0,r.Z)((0,r.Z)({row:!0},n),{},{children:t.map((function(e){var t="#FFFFFF"===e||"white"===e;return(0,d.jsx)(s.Z,{value:e,color:"default",icon:(0,d.jsx)(p,{sx:(0,r.Z)({},t&&{border:function(e){return"solid 1px ".concat(e.palette.divider)}})}),checkedIcon:(0,d.jsx)(p,{sx:(0,r.Z)({transform:"scale(1.4)","&:before":{opacity:.48,width:"100%",content:"''",height:"100%",borderRadius:"50%",position:"absolute",boxShadow:"4px 4px 8px 0 currentColor"},"& svg":{width:12,height:12,color:"common.white"}},t&&{border:function(e){return"solid 1px ".concat(e.palette.divider)},boxShadow:function(e){return"4px 4px 8px 0 ".concat(e.palette.grey[50024])},"& svg":{width:12,height:12,color:"common.black"}})}),sx:{color:e,"&:hover":{opacity:.72}}},e)}))}))}},72414:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(44367),i=n(29547),a=n(3469),o=n(37172),c=n(59061),l=n(26573),s=n(48943),d=n(58847),u=["links","action","heading","moreLink","sx"];function f(e){var t=e.links,n=e.action,f=e.heading,p=e.moreLink,h=void 0===p?[]:p,v=e.sx,x=(0,i.Z)(e,u);return(0,d.jsxs)(a.Z,{sx:(0,r.Z)({mb:5},v),children:[(0,d.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,d.jsxs)(a.Z,{sx:{flexGrow:1},children:[(0,d.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:f}),(0,d.jsx)(s.SW,(0,r.Z)({links:t},x))]}),n&&(0,d.jsx)(a.Z,{sx:{flexShrink:0},children:n})]}),(0,d.jsx)(a.Z,{sx:{mt:2},children:(0,l.isString)(h)?(0,d.jsx)(c.Z,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return(0,d.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},56950:function(e,t,n){n.r(t),n.d(t,{default:function(){return ve}});var r=n(36834),i=n(82173),a=n(23151),o=n(93762),c=n(89917),l=n(54956),s=n(87871),d=n(49769),u=n(99682),f=n(79507),p=n(7233),h=n(18815),v=n(89227),x=n(91985),g=n(29336),Z=n(67004),y=n(94934),b=n(46055),m=n(53525),w=n(46038),j=n(72414),k=n(75641),C=n(3935),D=n(91608),S=n(45008),F=n(33543),W=n(44367),I=n(66954),M=n(82485),A=n(84832),R=n(33469),T=n(14682),E=n(37045),P=n(63856),B=n(55938),J=n(53394),z=n(98151),V=n(3469),O=n(7567),G=n(26573),L=n(11098),q=n(48355),N=n(58847),U=["#00AB55","#1890FF","#94D82D","#FFC107","#FF4842","#04297A","#7A0C2E"],_=function(e,t){var n={title:"",description:"",textColor:"#1890FF",allDay:!1,start:t?new Date(t.start):new Date,end:t?new Date(t.end):new Date};return e||t?(0,G.merge)({},n,e):n};function H(e){var t=e.event,n=e.range,a=e.onCancel,o=(0,b.Ds)().enqueueSnackbar,c=(0,S.I0)(),l=!t,s=L.Ry().shape({title:L.Z_().max(255).required("Title is required"),description:L.Z_().max(5e3),end:L.hT().when("start",(function(e,t){return e&&t.min(e,"End date must be later than start date")})),start:L.hT()}),d=(0,O.TA)({initialValues:_(t,n),validationSchema:s,onSubmit:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,i){var l,s,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=i.resetForm,s=i.setSubmitting;try{d={title:n.title,description:n.description,textColor:n.textColor,allDay:n.allDay,start:n.start,end:n.end},t?(c((0,D.eJ)(t.id,d)),o("Update event success",{variant:"success"})):(c((0,D.yM)(d)),o("Create event success",{variant:"success"})),l(),a(),s(!1)}catch(r){console.error(r)}case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}),u=d.values,f=d.errors,h=d.touched,v=d.handleSubmit,g=d.isSubmitting,Z=d.getFieldProps,y=d.setFieldValue,m=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a(),c((0,D.Bt)(t.id)),o("Delete event success",{variant:"success"})}catch(n){console.error(n)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,N.jsx)(O.Hy,{value:d,children:(0,N.jsxs)(O.l0,{autoComplete:"off",noValidate:!0,onSubmit:v,children:[(0,N.jsxs)(R.Z,{spacing:3,sx:{p:3},children:[(0,N.jsx)(T.Z,(0,W.Z)((0,W.Z)({fullWidth:!0,label:"Title"},Z("title")),{},{error:Boolean(h.title&&f.title),helperText:h.title&&f.title})),(0,N.jsx)(T.Z,(0,W.Z)((0,W.Z)({fullWidth:!0,multiline:!0,maxRows:4,label:"Description"},Z("description")),{},{error:Boolean(h.description&&f.description),helperText:h.description&&f.description})),(0,N.jsx)(E.Z,{control:(0,N.jsx)(P.Z,(0,W.Z)({checked:u.allDay},Z("allDay"))),label:"All day"}),(0,N.jsx)(M.W,{label:"Start date",value:u.start,inputFormat:"dd/MM/yyyy hh:mm a",onChange:function(e){return y("start",e)},renderInput:function(e){return(0,N.jsx)(T.Z,(0,W.Z)((0,W.Z)({},e),{},{fullWidth:!0}))}}),(0,N.jsx)(M.W,{label:"End date",value:u.end,inputFormat:"dd/MM/yyyy hh:mm a",onChange:function(e){return y("end",e)},renderInput:function(e){return(0,N.jsx)(T.Z,(0,W.Z)((0,W.Z)({},e),{},{fullWidth:!0,error:Boolean(h.end&&f.end),helperText:h.end&&f.end,sx:{mb:3}}))}}),(0,N.jsx)(q.Z,(0,W.Z)((0,W.Z)({},Z("textColor")),{},{colors:U}))]}),(0,N.jsxs)(B.Z,{children:[!l&&(0,N.jsx)(J.Z,{title:"Delete Event",children:(0,N.jsx)(z.Z,{onClick:m,children:(0,N.jsx)(p.JO,{icon:I.Z,width:20,height:20})})}),(0,N.jsx)(V.Z,{sx:{flexGrow:1}}),(0,N.jsx)(x.Z,{type:"button",variant:"outlined",color:"inherit",onClick:a,children:"Cancel"}),(0,N.jsx)(A.Z,{type:"submit",variant:"contained",loading:g,loadingIndicator:"Loading...",children:"Add"})]})]})})}var K=n(24960),Q=n(28586),X=(0,K.ZP)("div")((function(e){var t=e.theme;return{width:"calc(100% + 2px)",marginLeft:-1,marginBottom:-1,"& .fc":{"--fc-list-event-dot-width":"8px","--fc-border-color":t.palette.divider,"--fc-event-border-color":t.palette.info.light,"--fc-now-indicator-color":t.palette.error.main,"--fc-today-bg-color":t.palette.action.selected,"--fc-page-bg-color":t.palette.background.default,"--fc-neutral-bg-color":t.palette.background.neutral,"--fc-list-event-hover-bg-color":t.palette.action.hover,"--fc-highlight-color":(0,Q.Fq)(t.palette.primary.main,.08)},"& .fc .fc-license-message":{display:"none"},"& .fc a":{color:t.palette.text.primary},"& .fc .fc-col-header ":{boxShadow:"inset 0 -1px 0 ".concat(t.palette.divider),"& th":{borderColor:"transparent"},"& .fc-col-header-cell-cushion":(0,W.Z)((0,W.Z)({},t.typography.subtitle2),{},{padding:"13px 0"})},"& .fc .fc-event":{borderColor:"transparent",backgroundColor:"transparent"},"& .fc .fc-event .fc-event-main":{padding:"2px 4px",borderRadius:4,backgroundColor:t.palette.common.white,transition:t.transitions.create("filter"),"&:hover":{filter:"brightness(0.92)"},"&:before,&:after":{top:0,left:0,width:"100%",height:"100%",content:"''",borderRadius:4,position:"absolute",boxSizing:"border-box"},"&:before":{zIndex:8,opacity:.32,border:"solid 1px currentColor"},"&:after":{zIndex:7,opacity:.24,backgroundColor:"currentColor"}},"& .fc .fc-event .fc-event-main-frame":{fontSize:13,lineHeight:"20px",filter:"brightness(0.24)"},"& .fc .fc-daygrid-event .fc-event-title":{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},"& .fc .fc-event .fc-event-time":{padding:0,overflow:"unset",fontWeight:t.typography.fontWeightBold},"& .fc .fc-popover":{border:0,overflow:"hidden",boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.paper},"& .fc .fc-popover-header":(0,W.Z)((0,W.Z)({},t.typography.subtitle2),{},{padding:t.spacing(1),backgroundColor:t.palette.grey[50012],borderBottom:"solid 1px ".concat(t.palette.divider)}),"& .fc .fc-popover-close":{opacity:.48,transition:t.transitions.create("opacity"),"&:hover":{opacity:1}},"& .fc .fc-more-popover .fc-popover-body":{padding:t.spacing(1.5)},"& .fc .fc-popover-body":{"& .fc-daygrid-event.fc-event-start, & .fc-daygrid-event.fc-event-end":{margin:"2px 0"}},"& .fc .fc-day-other .fc-daygrid-day-top":{opacity:1,"& .fc-daygrid-day-number":{color:t.palette.text.disabled}},"& .fc .fc-daygrid-day-number":(0,W.Z)((0,W.Z)({},t.typography.body2),{},{padding:t.spacing(1,1,0)}),"& .fc .fc-daygrid-event":{marginTop:4},"& .fc .fc-daygrid-event.fc-event-start, & .fc .fc-daygrid-event.fc-event-end":{marginLeft:4,marginRight:4},"& .fc .fc-daygrid-more-link":(0,W.Z)((0,W.Z)({},t.typography.caption),{},{color:t.palette.text.secondary}),"& .fc .fc-timegrid-axis-cushion":(0,W.Z)((0,W.Z)({},t.typography.body2),{},{color:t.palette.text.secondary}),"& .fc .fc-timegrid-slot-label-cushion":(0,W.Z)({},t.typography.body2),"& .fc-direction-ltr .fc-list-day-text, .fc-direction-rtl .fc-list-day-side-text, .fc-direction-ltr .fc-list-day-side-text, .fc-direction-rtl .fc-list-day-text":(0,W.Z)({},t.typography.subtitle2),"& .fc .fc-list-event":(0,W.Z)((0,W.Z)({},t.typography.body2),{},{"& .fc-list-event-time":{color:t.palette.text.secondary}}),"& .fc .fc-list-table":{"& th, td":{borderColor:"transparent"}}}})),Y=n(29547),$=n(23080),ee=n(78833),te=n(92969),ne=n(2805),re=n(74734),ie=n(49731),ae=n(85496),oe=n(52924),ce=n(37172),le=n(48943),se=n(58216),de=["date","view","onNextDate","onPrevDate","onToday","onChangeView"],ue=[{value:"dayGridMonth",label:"Month",icon:ie.Z},{value:"timeGridWeek",label:"Week",icon:ae.Z},{value:"timeGridDay",label:"Day",icon:re.Z},{value:"listWeek",label:"Agenda",icon:ne.Z}],fe=(0,K.ZP)("div")((function(e){var t=e.theme;return(0,$.Z)({display:"flex",alignItems:"center",flexDirection:"column",padding:t.spacing(3,0)},t.breakpoints.up("sm"),{flexDirection:"row",padding:t.spacing(1.75,3),justifyContent:"space-between"})}));function pe(e){var t=e.date,n=e.view,r=e.onNextDate,i=e.onPrevDate,a=e.onToday,o=e.onChangeView,c=(0,Y.Z)(e,de);return(0,N.jsxs)(fe,(0,W.Z)((0,W.Z)({},c),{},{children:[(0,N.jsx)(le.Jh,{width:"smDown",children:(0,N.jsx)(R.Z,{direction:"row",spacing:1.5,children:ue.map((function(e){return(0,N.jsx)(J.Z,{title:e.label,children:(0,N.jsx)(oe.Z,{value:n,selected:e.value===n,onChange:function(){return o(e.value)},sx:{width:32,height:32,padding:0},children:(0,N.jsx)(p.JO,{icon:e.icon,width:20,height:20})})},e.value)}))})}),(0,N.jsx)(ce.Z,{variant:"h5",sx:{my:{xs:1,sm:0}},children:(0,se.Mu)(t)}),(0,N.jsxs)(V.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,N.jsx)(z.Z,{onClick:i,children:(0,N.jsx)(p.JO,{icon:ee.Z,width:18,height:18})}),(0,N.jsx)(x.Z,{size:"small",color:"error",variant:"contained",onClick:a,sx:{mx:.5},children:"Today"}),(0,N.jsx)(z.Z,{onClick:r,children:(0,N.jsx)(p.JO,{icon:te.Z,width:18,height:18})})]})]}))}var he=function(e){var t=e.calendar,n=t.events,r=t.selectedEventId;return r?n.find((function(e){return e.id===r})):null};function ve(){var e=(0,C.Z)().themeStretch,t=(0,S.I0)(),n=(0,y.Z)(),W=(0,h.Z)(n.breakpoints.down("sm")),I=(0,m.useRef)(null),M=(0,b.Ds)().enqueueSnackbar,A=(0,m.useState)(new Date),R=(0,a.Z)(A,2),T=R[0],E=R[1],P=(0,m.useState)(W?"listWeek":"dayGridMonth"),B=(0,a.Z)(P,2),J=B[0],z=B[1],V=(0,S.v9)(he),O=(0,S.v9)((function(e){return e.calendar})),G=O.events,L=O.isOpenModal,q=O.selectedRange;(0,m.useEffect)((function(){t((0,D.vw)())}),[t]),(0,m.useEffect)((function(){var e=I.current;if(e){var t=e.getApi(),n=W?"listWeek":"dayGridMonth";t.changeView(n),z(n)}}),[W]);var U=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=n.event;try{t((0,D.eJ)(i.id,{allDay:i.allDay,start:i.start,end:i.end})),M("Update event success",{variant:"success"})}catch(r){console.error(r)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=n.event;try{t((0,D.eJ)(i.id,{allDay:i.allDay,start:i.start,end:i.end})),M("Update event success",{variant:"success"})}catch(r){console.error(r)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){t((0,D.Mr)())};return(0,N.jsx)(k.Z,{title:"Calendar | Minimal-UI",children:(0,N.jsxs)(v.Z,{maxWidth:!e&&"xl",children:[(0,N.jsx)(j.Z,{heading:"Calendar",links:[{name:"Dashboard",href:F.vB.root},{name:"Calendar"}],moreLink:"https://fullcalendar.io/docs/react",action:(0,N.jsx)(x.Z,{variant:"contained",startIcon:(0,N.jsx)(p.JO,{icon:f.Z,width:20,height:20}),onClick:function(){t((0,D.h7)())},children:"New Event"})}),(0,N.jsx)(g.Z,{children:(0,N.jsxs)(X,{children:[(0,N.jsx)(pe,{date:T,view:J,onNextDate:function(){var e=I.current;if(e){var t=e.getApi();t.next(),E(t.getDate())}},onPrevDate:function(){var e=I.current;if(e){var t=e.getApi();t.prev(),E(t.getDate())}},onToday:function(){var e=I.current;if(e){var t=e.getApi();t.today(),E(t.getDate())}},onChangeView:function(e){var t=I.current;t&&(t.getApi().changeView(e),z(e))}}),(0,N.jsx)(s.ZPm,{weekends:!0,editable:!0,droppable:!0,selectable:!0,events:G,ref:I,rerenderDelay:10,initialDate:T,initialView:J,dayMaxEventRows:3,eventDisplay:"block",headerToolbar:!1,allDayMaintainDuration:!0,eventResizableFromStart:!0,select:function(e){var n=I.current;n&&n.getApi().unselect();t((0,D.jh)(e.start,e.end))},eventDrop:_,eventClick:function(e){t((0,D.lz)(e.event.id))},eventResize:U,height:W?"auto":720,plugins:[l.Z,o.ZP,u.ZP,d.ZP,c.ZP]})]})}),(0,N.jsxs)(w.Kl,{open:L,onClose:K,children:[(0,N.jsx)(Z.Z,{children:V?"Edit Event":"Add Event"}),(0,N.jsx)(H,{event:V,range:q,onCancel:K})]})]})})}}}]);
//# sourceMappingURL=6950.b4719484.chunk.js.map