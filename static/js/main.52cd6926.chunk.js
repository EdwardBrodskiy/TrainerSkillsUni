(this.webpackJsonphorarium=this.webpackJsonphorarium||[]).push([[0],{110:function(e,t){},111:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e[e.Databases=0]="Databases",e[e.Accounting=1]="Accounting",e[e.WebDev=2]="WebDev",e[e.Business=3]="Business"}(r||(r={}))},112:function(e,t,n){"use strict";var r;n(48),n(47),n(29);!function(e){e[e.Admin=0]="Admin",e[e.Scheduler=1]="Scheduler",e[e.Trainer=2]="Trainer",e[e.Consultant=3]="Consultant"}(r||(r={}))},117:function(e,t,n){"use strict";var r=n(110);n.o(r,"Modules")&&n.d(t,"Modules",(function(){return r.Modules}));var a=n(111);n.d(t,"Modules",(function(){return a.a}));n(112)},135:function(e,t,n){},136:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(26),i=n.n(c);n(135),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(13),s=(n(136),n(178)),l=n(156),j=n(167),u=n(98),d=n(168),b=n(50),h=n(162),O=n(164),m=n(165),x=n(3);function v(){var e=Object(u.c)(),t=e.colorMode,n=e.toggleColorMode;return Object(x.jsx)(h.a,{"aria-label":"change color mode",onClick:n,icon:"light"===t?Object(x.jsx)(O.a,{}):Object(x.jsx)(m.a,{}),isRound:!0})}var p=n(166),f=function(e){var t=e.children;return Object(x.jsx)(p.a,{m:"auto",p:4,fontSize:"lg",children:t})},g=function(){Object(o.g)();var e=Object(u.c)().colorMode;return Object(x.jsx)(j.a,{h:"4rem",children:Object(x.jsx)(j.a,{zIndex:1,p:4,h:"4rem",bg:{light:"gray.200",dark:"gray.700"}[e],pos:"fixed",left:"0",right:"0",top:"0",borderBottomWidth:"1px",width:"full",children:Object(x.jsxs)(d.a,{justify:"space-between",align:"center",w:"100%",h:"100%",children:[Object(x.jsx)(d.a,{align:"center",justify:"space-evenly",maxWidth:"480px",children:Object(x.jsx)(f,{children:Object(x.jsx)(b.a,{to:"/",children:"Home"})})}),Object(x.jsx)(v,{})]})})})},y=n(90),w=n.n(y),T=n(113),C=n(4),S=n(177),M=n(15),D=n(169),k=function(e){return Object(x.jsx)(D.a,Object(M.a)(Object(M.a)({},e),{},{templateColumns:"16rem minmax(0, 1fr)",gap:0}))},I=function(e){var t=Object(u.c)().colorMode;return Object(x.jsx)(j.a,Object(M.a)(Object(M.a)({},e),{},{overflow:"hidden",borderRightStyle:"solid",borderRightColor:{light:"gray.200",dark:"gray.600"}[t],borderRightWidth:"1px"}))},A=n(184),E=function(e){var t=e.event,n=e.createEvent;return Object(x.jsx)(j.a,{p:3,bg:t.color,rounded:6,height:20,fontSize:18,onClick:function(){return n({type:t})},children:t.name})},W=function(e){var t=e.events,n=e.createEvent,r=t.map((function(e,t){return Object(x.jsx)(E,{event:e,createEvent:n},t)}));return Object(x.jsx)(A.a,{spacing:2,padding:2,children:r})},z=function(e){var t=e.children,n=e.events,r=e.createEvent;return Object(x.jsxs)(k,{children:[Object(x.jsx)(I,{children:Object(x.jsx)(W,{events:n,createEvent:r})}),Object(x.jsx)(j.a,{p:3,children:t})]})},L=n(170),R=n(91),B=n.n(R),H=function(e){var t=e.event,n=e.scale,r=new Date(t.start_time),a=new Date(t.end_time),c=Math.round(r.getMinutes()/60*n),i=(a.getTime()-r.getTime())/36e5,o=Math.floor(i-4/n);return Object(x.jsxs)(j.a,{marginTop:"".concat(c,"px"),height:"".concat(Math.round(i*n)+4*o,"px"),p:2,bg:t.type.color,rounded:6,fontSize:18,marginX:1,position:"relative",borderLeft:"4px",borderColor:"rgba(0,0,0,0.4)",children:[Object(x.jsx)(p.a,{fontSize:"md",textAlign:"right",children:"".concat(B()(r).format("HH:mm")," - ").concat(B()(a).format("HH:mm"))}),Object(x.jsx)(L.a,{isTruncated:!0,fontSize:"lg",children:t.title}),o>0&&Object(x.jsx)(p.a,{noOfLines:2*o,children:t.description})]})},_=function(e){var t=e.events,n=e.scale,r=Object(u.c)().colorMode,a={light:"gray.200",dark:"gray.700"},c=new Array(24).fill(Object(x.jsx)(x.Fragment,{})).map((function(e,c){var i=t.filter((function(e){return new Date(e.start_time).getHours()===c})).map((function(e,t){return Object(x.jsx)(H,{event:e,scale:n})}));return Object(x.jsx)(j.a,{w:"100%",h:"".concat(n,"px"),bg:a[r],children:i})}));return Object(x.jsx)(A.b,{spacing:1,maxWidth:"100%",overflow:"hidden",children:c})},P=n(28),F=n.n(P),J=n(171),N=function(){var e=Object(u.c)().colorMode,t={light:"gray.300",dark:"gray.600"},n=new Array(24).fill(Object(x.jsx)(x.Fragment,{})).map((function(n,r){return Object(x.jsxs)(J.a,{w:"100%",h:"16",bg:t[e],justifyContent:"center",fontSize:"lg",id:9===r?"anchorTime":void 0,children:[r,":00"]})}));return Object(x.jsx)(A.b,{spacing:1,children:n})},U=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],q=function(){var e=Object(o.g)(),t=Object(u.c)().colorMode,n={light:"gray.300",dark:"gray.600"},r=F.a.get("courses")[0],a=U.map((function(e,r){return Object(x.jsx)(j.a,{w:"100%",h:"14",bg:n[t],padding:"3",fontSize:"20",isTruncated:!0,children:e})})),c=U.map((function(e,t){var n=r.events.filter((function(e){return new Date(e.start_time).getDay()-1===t}));return Object(x.jsx)(_,{events:n,scale:64})}));return Object(x.jsxs)(j.a,{children:[Object(x.jsx)("a",{href:"".concat(e.url,"#anchorTime"),children:"hi"}),Object(x.jsxs)(D.a,{templateColumns:"7% repeat(7, 13%)",gap:1,mb:1,children:[Object(x.jsx)(j.a,{}),a]}),Object(x.jsx)(j.a,{height:"".concat(612,"px"),overflowY:"scroll",sx:{"::-webkit-scrollbar":{display:"none"},"-ms-overflow-style":"none","scrollbar-width":"none","scroll-snap-type":"y manditory"},children:Object(x.jsxs)(D.a,{templateColumns:"7% repeat(7, 13%)",gap:1,children:[Object(x.jsx)(N,{}),c]})})]})},G=n(7),K=n(181),X=n(180),Y=n(53),$=n(173),Q=n(174),V=n(175),Z=n(176),ee=n(120),te=function(e){var t,n,a,c=e.onClose,i=e.isOpen,o=e.prefilledData,s=Object(K.a)(),l={title:{value:"",error:!1,touched:!1},description:{value:"",error:!1,touched:!0},location:{value:"",error:!1,touched:!1},startTime:{value:"",error:!1,touched:!1},endTime:{value:"",error:!1,touched:!1},type:{value:(null===(t=o.type)||void 0===t?void 0:t.name)||"",error:!1,touched:void 0!==(null===(n=o.type)||void 0===n?void 0:n.name)}},j=Object(r.useState)(l),u=Object(C.a)(j,2),d=u[0],b=u[1],h=function(e){var t,n=e.target,r=n.name,a=n.value,c=ne(r,a,!0,d);b((function(e){return Object(M.a)(Object(M.a)({},e),{},Object(G.a)({},r,{touched:!0,value:a,error:c}))}));var i={};for(t in d){ne(t,d[t].value,d[t].touched,d)!==d[t].error&&(i[t]=Object(M.a)(Object(M.a)({},d[t]),{},{error:!d[t].error}))}b((function(e){return Object(M.a)(Object(M.a)({},e),i)}))},O={onChange:h,onBlur:h,errorBorderColor:"crimson"},m=F.a.get("locations").map((function(e,t){return Object(x.jsx)("option",{value:e,children:e},t)})),v=F.a.get("courses")[0],p=v.eventTypes.map((function(e,t){return Object(x.jsx)("option",{value:e.name,children:e.name},t)}));return Object(x.jsxs)(X.a,{closeOnOverlayClick:!1,isOpen:i,onClose:c,children:[Object(x.jsx)(X.g,{}),Object(x.jsxs)(X.d,{children:[Object(x.jsx)(X.f,{children:"Create Event"}),Object(x.jsx)(X.c,{}),Object(x.jsxs)(X.b,{children:[Object(x.jsxs)(Y.a,{children:[Object(x.jsx)($.a,{children:"Title"}),Object(x.jsx)(Q.a,Object(M.a)({name:"title",placeholder:"".concat(null===(a=o.type)||void 0===a?void 0:a.name," name"),value:d.title.value,isInvalid:d.title.error},O))]}),Object(x.jsxs)(Y.a,{children:[Object(x.jsx)($.a,{children:"Description"}),Object(x.jsx)(V.a,Object(M.a)({name:"description",placeholder:"Some text here",value:d.description.value,isInvalid:d.description.error},O))]}),Object(x.jsxs)(Y.a,{children:[Object(x.jsx)($.a,{children:"Location"}),Object(x.jsx)(Z.a,Object(M.a)(Object(M.a)({name:"location",placeholder:"Select option",value:d.location.value,isInvalid:d.location.error},O),{},{children:m}))]}),Object(x.jsxs)(Y.a,{children:[Object(x.jsx)($.a,{children:"Start Time"}),Object(x.jsx)(Q.a,Object(M.a)({name:"startTime",type:"datetime-local",max:d.endTime.value,value:d.startTime.value,isInvalid:d.startTime.error},O))]}),Object(x.jsxs)(Y.a,{children:[Object(x.jsx)($.a,{children:"End Time"}),Object(x.jsx)(Q.a,Object(M.a)({name:"endTime",type:"datetime-local",min:d.startTime.value,value:d.endTime.value,isInvalid:d.endTime.error},O))]}),Object(x.jsxs)(Y.a,{children:[Object(x.jsx)($.a,{children:"Event Type"}),Object(x.jsx)(Z.a,Object(M.a)(Object(M.a)({name:"type",value:d.type.value,isInvalid:d.type.error},O),{},{children:p}))]})]}),Object(x.jsxs)(X.e,{children:[Object(x.jsx)(ee.a,{colorScheme:"blue",mr:3,onClick:function(){if(re(d)){var e=v.eventTypes.find((function(e){return e.name===d.type.value}));void 0!==e&&ae(0,{title:d.title.value,description:d.description.value,type:e,location:d.location.value,start_time:d.startTime.value,end_time:d.endTime.value}),c()}else s({title:"Make sure you filled in all the fields",status:"error",isClosable:!0})},children:"Create"}),Object(x.jsx)(ee.a,{variant:"ghost",onClick:c,children:"Cancel"})]})]})]})},ne=function(e,t,n,r){if(n){if("description"!==e&&""===t)return!0;if("startTime"===e&&""!==r.endTime.value&&new Date(t)>=new Date(r.endTime.value))return!0;if("endTime"===e&&""!==r.startTime.value&&new Date(t)<=new Date(r.startTime.value))return!0}return!1},re=function(e){var t;for(t in e)if(e[t].error||!e[t].touched)return!1;return!0},ae=function(e,t){var n=F.a.get("courses");n[e].events.push(t),F.a.set("courses",n)},ce=function(){var e=Object(r.useState)({}),t=Object(C.a)(e,2),n=t[0],a=t[1],c=Object(S.a)(),i=c.isOpen,o=c.onOpen,s=c.onClose,l=function(){var e=Object(T.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(t);case 2:o();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=F.a.get("courses")[0];return Object(x.jsx)(j.a,{height:"100%",children:Object(x.jsxs)(z,{events:u.eventTypes,createEvent:l,children:[Object(x.jsx)(q,{}),Object(x.jsx)(te,{isOpen:i,onClose:s,prefilledData:n},"".concat(JSON.stringify(n,null,2)))]})})},ie=n(182),oe=function(){var e=Object(o.f)(),t=Object(K.a)(),n=Object(r.useState)(""),a=Object(C.a)(n,2),c=a[0],i=a[1],s=Object(r.useState)(""),l=Object(C.a)(s,2),u=l[0],b=l[1];return Object(x.jsx)(d.a,{width:"full",align:"center",justifyContent:"center",children:Object(x.jsxs)(j.a,{margin:10,p:8,maxWidth:"500px",borderWidth:1,borderRadius:8,boxShadow:"lg",children:[Object(x.jsx)(j.a,{textAlign:"center",children:Object(x.jsx)(L.a,{children:"Login"})}),Object(x.jsx)(j.a,{my:4,textAlign:"left",children:Object(x.jsxs)("form",{onSubmit:function(n){"ADMIN"===c&&"ADMIN"===u?e.push("/home"):t({title:"Invalid Username/Password",status:"error",isClosable:!0})},children:[Object(x.jsxs)(Y.a,{isRequired:!0,children:[Object(x.jsx)($.a,{children:"Username"}),Object(x.jsx)(Q.a,{type:"text",placeholder:"Username",size:"lg",onChange:function(e){return i(e.currentTarget.value)}})]}),Object(x.jsxs)(Y.a,{mt:6,isRequired:!0,children:[Object(x.jsx)($.a,{children:"Password"}),Object(x.jsx)(Q.a,{type:"password",placeholder:"Password",size:"lg",onChange:function(e){return b(e.currentTarget.value)}})]}),Object(x.jsx)(ie.a,{children:"Remember Me"}),Object(x.jsx)(ee.a,{width:"full",mt:4,type:"submit",children:"Log In"})]})})]})})},se=function(){return Object(x.jsx)(j.a,{height:"100%",children:Object(x.jsx)(oe,{})})},le=function(){Object(o.g)();return Object(x.jsxs)(j.a,{bgGradient:"linear(to-r, blue.200, grey.500)",children:[Object(x.jsx)(g,{}),Object(x.jsx)(j.a,{children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{exact:!0,path:"/",component:se},"route-login"),Object(x.jsx)(o.a,{path:"/home",component:ce},"route-home")]})})]})},je=n(23),ue=n(117),de=Object(je.a)();function be(){return function(){var e,t={courses:[{name:"test",module:ue.Modules.Databases,description:"this is a temporary test course",courseId:"test123",enroled_groups:[],shedulers:[],events:[],eventTypes:[{name:"Lecture",color:"tomato"},{name:"Lab",color:"orange"},{name:"Exam",color:"purple"}]}],locations:["London","HongKong","Paris"]};for(e in t)void 0===F.a.get(e)&&(console.log(t[e]),F.a.set(e,t[e]))}(),Object(x.jsxs)(s.a,{children:[Object(x.jsx)(l.a,{}),Object(x.jsx)(o.b,{history:de,children:Object(x.jsx)(le,{})})]})}i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(be,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[154,1,2]]]);
//# sourceMappingURL=main.52cd6926.chunk.js.map