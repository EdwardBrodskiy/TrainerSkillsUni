(this.webpackJsonphorarium=this.webpackJsonphorarium||[]).push([[0],{109:function(e,t){},110:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e[e.Databases=0]="Databases",e[e.Accounting=1]="Accounting",e[e.WebDev=2]="WebDev",e[e.Business=3]="Business"}(r||(r={}))},111:function(e,t,n){"use strict";var r;n(48),n(47),n(28);!function(e){e[e.Admin=0]="Admin",e[e.Scheduler=1]="Scheduler",e[e.Trainer=2]="Trainer",e[e.Consultant=3]="Consultant"}(r||(r={}))},116:function(e,t,n){"use strict";var r=n(109);n.o(r,"Modules")&&n.d(t,"Modules",(function(){return r.Modules}));var a=n(110);n.d(t,"Modules",(function(){return a.a}));n(111)},134:function(e,t,n){},135:function(e,t,n){},153:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(26),i=n.n(c);n(134),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(50),s=(n(135),n(176)),l=n(155),j=n(166),u=n(12),d=n(97),b=n(167),h=n(161),O=n(163),v=n(164),x=n(3);function m(){var e=Object(d.c)(),t=e.colorMode,n=e.toggleColorMode;return Object(x.jsx)(h.a,{"aria-label":"change color mode",onClick:n,icon:"light"===t?Object(x.jsx)(O.a,{}):Object(x.jsx)(v.a,{}),isRound:!0})}var p=n(165),f=function(e){var t=e.children;return Object(x.jsx)(p.a,{m:"auto",p:4,fontSize:"lg",children:t})},g=function(){Object(u.h)();var e=Object(d.c)().colorMode;return Object(x.jsx)(j.a,{h:"4rem",children:Object(x.jsx)(j.a,{zIndex:1,p:4,h:"4rem",bg:{light:"gray.200",dark:"gray.700"}[e],pos:"fixed",left:"0",right:"0",top:"0",borderBottomWidth:"1px",width:"full",children:Object(x.jsxs)(b.a,{justify:"space-between",align:"center",w:"100%",h:"100%",children:[Object(x.jsx)(b.a,{align:"center",justify:"space-evenly",maxWidth:"480px",children:Object(x.jsx)(f,{children:Object(x.jsx)(o.b,{to:"/",children:"Home"})})}),Object(x.jsx)(m,{})]})})})},y=n(90),T=n.n(y),w=n(112),C=n(4),S=n(174),M=n(15),k=n(168),D=function(e){return Object(x.jsx)(k.a,Object(M.a)(Object(M.a)({},e),{},{templateColumns:"16rem minmax(0, 1fr)",gap:0}))},I=function(e){var t=Object(d.c)().colorMode;return Object(x.jsx)(j.a,Object(M.a)(Object(M.a)({},e),{},{overflow:"hidden",borderRightStyle:"solid",borderRightColor:{light:"gray.200",dark:"gray.600"}[t],borderRightWidth:"1px"}))},E=n(182),W=function(e){var t=e.event,n=e.createEvent;return Object(x.jsx)(j.a,{p:3,bg:t.color,rounded:6,height:20,fontSize:18,onClick:function(){return n({type:t})},children:t.name})},A=function(e){var t=e.events,n=e.createEvent,r=t.map((function(e,t){return Object(x.jsx)(W,{event:e,createEvent:n},t)}));return Object(x.jsx)(E.a,{spacing:2,padding:2,children:r})},R=function(e){var t=e.children,n=e.events,r=e.createEvent;return Object(x.jsxs)(D,{children:[Object(x.jsx)(I,{children:Object(x.jsx)(A,{events:n,createEvent:r})}),Object(x.jsx)(j.a,{p:3,children:t})]})},B=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],z=function(){var e=Object(d.c)().colorMode,t={light:"gray.300",dark:"gray.600"},n=B.map((function(n,r){return Object(x.jsx)(j.a,{w:"100%",h:"14",bg:t[e],padding:"3",fontSize:"20",children:n})})),r=new Array(63).fill(Object(x.jsx)(j.a,{w:"100%",h:"16",bg:{light:"gray.200",dark:"gray.700"}[e]}));return Object(x.jsxs)(k.a,{templateColumns:"repeat(7, 1fr)",gap:1,children:[n,r]})},L=n(7),P=n(179),J=n(178),N=n(53),U=n(170),_=n(171),q=n(172),H=n(173),F=n(119),G=n(39),K=n.n(G),$=function(e){var t,n,a,c=e.onClose,i=e.isOpen,o=e.prefilledData,s=Object(P.a)(),l={title:{value:"",error:!1,touched:!1},description:{value:"",error:!1,touched:!0},location:{value:"",error:!1,touched:!1},startTime:{value:"",error:!1,touched:!1},endTime:{value:"",error:!1,touched:!1},type:{value:(null===(t=o.type)||void 0===t?void 0:t.name)||"",error:!1,touched:void 0!==(null===(n=o.type)||void 0===n?void 0:n.name)}},j=Object(r.useState)(l),u=Object(C.a)(j,2),d=u[0],b=u[1],h=function(e){var t,n=e.target,r=n.name,a=n.value,c=Q(r,a,!0,d);b((function(e){return Object(M.a)(Object(M.a)({},e),{},Object(L.a)({},r,{touched:!0,value:a,error:c}))}));var i={};for(t in d){Q(t,d[t].value,d[t].touched,d)!==d[t].error&&(i[t]=Object(M.a)(Object(M.a)({},d[t]),{},{error:!d[t].error}))}b((function(e){return Object(M.a)(Object(M.a)({},e),i)}))},O={onChange:h,onBlur:h,errorBorderColor:"crimson"},v=K.a.get("locations").map((function(e,t){return Object(x.jsx)("option",{value:e,children:e},t)})),m=K.a.get("courses")[0],p=m.eventTypes.map((function(e,t){return Object(x.jsx)("option",{value:e.name,children:e.name},t)}));return Object(x.jsxs)(J.a,{closeOnOverlayClick:!1,isOpen:i,onClose:c,children:[Object(x.jsx)(J.g,{}),Object(x.jsxs)(J.d,{children:[Object(x.jsx)(J.f,{children:"Create Event"}),Object(x.jsx)(J.c,{}),Object(x.jsxs)(J.b,{children:[Object(x.jsxs)(N.a,{children:[Object(x.jsx)(U.a,{children:"Title"}),Object(x.jsx)(_.a,Object(M.a)({name:"title",placeholder:"".concat(null===(a=o.type)||void 0===a?void 0:a.name," name"),value:d.title.value,isInvalid:d.title.error},O))]}),Object(x.jsxs)(N.a,{children:[Object(x.jsx)(U.a,{children:"Description"}),Object(x.jsx)(q.a,Object(M.a)({name:"description",placeholder:"Some text here",value:d.description.value,isInvalid:d.description.error},O))]}),Object(x.jsxs)(N.a,{children:[Object(x.jsx)(U.a,{children:"Location"}),Object(x.jsx)(H.a,Object(M.a)(Object(M.a)({name:"location",placeholder:"Select option",value:d.location.value,isInvalid:d.location.error},O),{},{children:v}))]}),Object(x.jsxs)(N.a,{children:[Object(x.jsx)(U.a,{children:"Start Time"}),Object(x.jsx)(_.a,Object(M.a)({name:"startTime",type:"datetime-local",max:d.endTime.value,value:d.startTime.value,isInvalid:d.startTime.error},O))]}),Object(x.jsxs)(N.a,{children:[Object(x.jsx)(U.a,{children:"End Time"}),Object(x.jsx)(_.a,Object(M.a)({name:"endTime",type:"datetime-local",min:d.startTime.value,value:d.endTime.value,isInvalid:d.endTime.error},O))]}),Object(x.jsxs)(N.a,{children:[Object(x.jsx)(U.a,{children:"Event Type"}),Object(x.jsx)(H.a,Object(M.a)(Object(M.a)({name:"type",value:d.type.value,isInvalid:d.type.error},O),{},{children:p}))]})]}),Object(x.jsxs)(J.e,{children:[Object(x.jsx)(F.a,{colorScheme:"blue",mr:3,onClick:function(){if(V(d)){var e=m.eventTypes.find((function(e){return e.name===d.type.value}));void 0!==e&&X(0,{title:d.title.value,description:d.description.value,type:e,location:d.location.value,start_time:d.startTime.value,end_time:d.endTime.value}),c()}else s({title:"Make sure you filled in all the fields",status:"error",isClosable:!0})},children:"Create"}),Object(x.jsx)(F.a,{variant:"ghost",onClick:c,children:"Cancel"})]})]})]})},Q=function(e,t,n,r){if(n){if("description"!==e&&""===t)return!0;if("startTime"===e&&""!==r.endTime.value&&new Date(t)>=new Date(r.endTime.value))return!0;if("endTime"===e&&""!==r.startTime.value&&new Date(t)<=new Date(r.startTime.value))return!0}return!1},V=function(e){var t;for(t in e)if(e[t].error||!e[t].touched)return!1;return!0},X=function(e,t){var n=K.a.get("courses");n[e].events.push(t),K.a.set("courses",n)},Y=function(){var e=Object(r.useState)({}),t=Object(C.a)(e,2),n=t[0],a=t[1],c=Object(S.a)(),i=c.isOpen,o=c.onOpen,s=c.onClose,l=function(){var e=Object(w.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(t);case 2:o();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=K.a.get("courses")[0];return Object(x.jsx)(j.a,{height:"100%",children:Object(x.jsxs)(R,{events:u.eventTypes,createEvent:l,children:[Object(x.jsx)(z,{}),Object(x.jsx)($,{isOpen:i,onClose:s,prefilledData:n},"".concat(JSON.stringify(n,null,2)))]})})},Z=n(175),ee=n(180),te=function(){var e=Object(u.g)(),t=Object(P.a)(),n=Object(r.useState)(""),a=Object(C.a)(n,2),c=a[0],i=a[1],o=Object(r.useState)(""),s=Object(C.a)(o,2),l=s[0],d=s[1];return Object(x.jsx)(b.a,{width:"full",align:"center",justifyContent:"center",children:Object(x.jsxs)(j.a,{margin:10,p:8,maxWidth:"500px",borderWidth:1,borderRadius:8,boxShadow:"lg",children:[Object(x.jsx)(j.a,{textAlign:"center",children:Object(x.jsx)(Z.a,{children:"Login"})}),Object(x.jsx)(j.a,{my:4,textAlign:"left",children:Object(x.jsxs)("form",{onSubmit:function(n){"ADMIN"===c&&"ADMIN"===l?e.push("/home"):t({title:"Invalid Username/Password",status:"error",isClosable:!0})},children:[Object(x.jsxs)(N.a,{isRequired:!0,children:[Object(x.jsx)(U.a,{children:"Username"}),Object(x.jsx)(_.a,{type:"text",placeholder:"Username",size:"lg",onChange:function(e){return i(e.currentTarget.value)}})]}),Object(x.jsxs)(N.a,{mt:6,isRequired:!0,children:[Object(x.jsx)(U.a,{children:"Password"}),Object(x.jsx)(_.a,{type:"password",placeholder:"Password",size:"lg",onChange:function(e){return d(e.currentTarget.value)}})]}),Object(x.jsx)(ee.a,{children:"Remember Me"}),Object(x.jsx)(F.a,{width:"full",mt:4,type:"submit",children:"Log In"})]})})]})})},ne=function(){return Object(x.jsx)(j.a,{height:"100%",children:Object(x.jsx)(te,{})})},re=function(){Object(u.h)();return Object(x.jsxs)(j.a,{bgGradient:"linear(to-r, blue.200, grey.500)",children:[Object(x.jsx)(g,{}),Object(x.jsx)(j.a,{children:Object(x.jsxs)(u.d,{children:[Object(x.jsx)(u.b,{exact:!0,path:"/",component:ne},"route-login"),Object(x.jsx)(u.b,{exact:!0,path:"/home",component:Y},"route-home"),Object(x.jsx)(u.a,{from:"*",to:"/"})," "]})})]})},ae=n(22),ce=n(116);Object(ae.a)();function ie(){return function(){var e,t={courses:[{name:"test",module:ce.Modules.Databases,description:"this is a temporary test course",courseId:"test123",enroled_groups:[],shedulers:[],events:[],eventTypes:[{name:"Lecture",color:"tomato"},{name:"Lab",color:"orange"},{name:"Exam",color:"purple"}]}],locations:["London","HongKong","Paris"]};for(e in t)void 0===K.a.get(e)&&(console.log(t[e]),K.a.set(e,t[e]))}(),Object(x.jsxs)(s.a,{children:[Object(x.jsx)(l.a,{}),Object(x.jsx)(o.a,{basename:"/",children:Object(x.jsx)(re,{})})]})}i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(ie,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[153,1,2]]]);
//# sourceMappingURL=main.c683c2cb.chunk.js.map