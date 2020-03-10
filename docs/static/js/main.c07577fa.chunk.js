(this["webpackJsonpissuer-interop-transmute-world"]=this["webpackJsonpissuer-interop-transmute-world"]||[]).push([[0],{129:function(e,t){},134:function(e,t){},135:function(e,t){},149:function(e,t){},152:function(e,t){},183:function(e,t){},216:function(e,t){},229:function(e,t,n){"use strict";(function(e){var a=n(2),r=n.n(a),i=n(5),o=n(30),c=n(242),s=n(0),l=n.n(s),u=n(383),d=n(238),m=n.n(d),p=n(245),f=n(237),g=n.n(f),h=n(230),b=n(243);t.a=function(){var t=l.a.useState({credentialSubjectId:"did:example:credential-subject-123",tmui:{}}),n=Object(c.a)(t,2),a=n[0],s=n[1];return l.a.createElement(p.a,{style:{padding:"32px"}},l.a.createElement(b.a,{tmui:a.tmui,doSetTmuiProp:function(e){s(Object(o.a)({},a,{tmui:Object(o.a)({},a.tmui,{},e)}))}}),l.a.createElement(u.a,{variant:"h6",style:{marginBottom:"32px"}},"Certified Mill Test Report"),l.a.createElement(g.a,{required:!0,fullWidth:!0,id:"credentialSubjectId",label:"Credential Subject ID",variant:"outlined",value:a.credentialSubjectId}),l.a.createElement("div",{style:{marginTop:"16px",marginBottom:"16px"}},l.a.createElement(m.a,{variant:"contained",onClick:Object(i.a)(r.a.mark((function t(){var n,i,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.a)(a.credentialSubjectId);case 2:return n=t.sent,i=new e.WebCredential(n.type,n),t.next=6,navigator.credentials.store(i);case 6:c=t.sent,console.log("Result of receiving via store() request:",c),s(Object(o.a)({},a,{tmui:Object(o.a)({},a.tmui,{snackBarMessage:{open:!0,variant:"success",message:"Credential stored in wallet.",vertical:"top",horizontal:"right",autoHideDuration:2e4}})}));case 9:case"end":return t.stop()}}),t)})))},"Receive Credential")))}}).call(this,n(46))},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(2),r=n.n(a),i=n(5),o=n(30),c=n(93),s=(n(231),n(94)),l=n.n(s),u=n(232),d=n(96),m=l.a.suites.Ed25519Signature2018,p=new c.Ed25519KeyPair(Object(o.a)({},u,{id:"did:web:issuer.interop.transmute.world#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",controller:"did:web:issuer.interop.transmute.world"})),f=(new m({key:p,verificationMethod:p.id}),function(){var e=Object(i.a)(r.a.mark((function e(t){var n,a,i,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://vc.transmute.world/api/v0/issuer/issue",n=Object(o.a)({},d,{issuer:p.controller,credentialSubject:Object(o.a)({},d.credentialSubject,{id:t})}),e.next=4,fetch("https://vc.transmute.world/api/v0/issuer/issue",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(n)});case 4:return a=e.sent,e.next=7,a.json();case 7:return i=e.sent,c={"@context":["https://www.w3.org/2018/credentials/v1","https://www.w3.org/2018/credentials/examples/v1"],type:"VerifiablePresentation",verifiableCredential:[i]},e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},232:function(e){e.exports=JSON.parse('{"passphrase":null,"id":"did:key:z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN","controller":"did:key:z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN","type":"Ed25519VerificationKey2018","privateKeyBase58":"3X9WCEbjyVZMYMfB45vFpTqx3YCULX2AtEUsqqQ7HwgooXscme1fzNHrwUkP2nCp4WNdZjciDdzGGfSZPsrUMdUL","publicKeyBase58":"DqS5F3GVe3rCxucgi4JBNagjv4dKoHc8TDLDw9kR58Pz"}')},239:function(e,t,n){e.exports=n.p+"static/media/logo.33b194d8.svg"},243:function(e,t,n){"use strict";var a=n(30),r=n(0),i=n.n(r),o=n(406),c=n(244),s=n(4),l=n(233),u=n.n(l),d=n(235),m=n.n(d),p=n(155),f=n.n(p),g=n(236),h=n.n(g),b=n(121),v=n(402),y=n(404),j=n(403),w=n(234),k=n.n(w),x=n(401),E={success:u.a,warning:k.a,error:m.a,info:f.a,default:f.a},O=Object(x.a)((function(e){return{success:{backgroundColor:b.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main},warning:{backgroundColor:v.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}}));var C=function(e){var t=O(),n=e.className,a=e.message,r=e.onClose,o=e.variant,l=Object(c.a)(e,["className","message","onClose","variant"]),u=E[o];return i.a.createElement(j.a,Object.assign({className:Object(s.default)(t[o],n),"aria-describedby":"client-snackbar",message:i.a.createElement("span",{id:"client-snackbar",className:t.message},i.a.createElement(u,{className:Object(s.default)(t.icon,t.iconVariant)}),a),action:[i.a.createElement(y.a,{key:"close","aria-label":"close",color:"inherit",onClick:r},i.a.createElement(h.a,{className:t.icon}))]},l))};t.a=function(e){var t=e.tmui.snackBarMessage||{variant:"default",vertical:"bottom",horizontal:"right"},n=t.open,r=t.variant,c=t.message,s=t.autoHideDuration,l=t.vertical,u=t.horizontal,d=function(t,n){"clickaway"!==n&&e.doSetTmuiProp({snackBarMessage:Object(a.a)({},e.tmui.snackBarMessage,{open:!1})})};return i.a.createElement("div",null,i.a.createElement(o.a,{anchorOrigin:{vertical:l,horizontal:u},open:n,autoHideDuration:s,onClose:d},i.a.createElement(C,{onClose:d,variant:r,message:c})))}},253:function(e,t,n){e.exports=n(376)},258:function(e,t,n){},263:function(e,t,n){},282:function(e,t){},283:function(e,t){},293:function(e,t){},305:function(e,t){},315:function(e,t){},316:function(e,t){},340:function(e,t){},376:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(20),o=n.n(i),c=(n(258),n(2)),s=n.n(c),l=n(5),u=n(240),d=n(228),m=n.n(d),p=n(10),f=n(14),g=n(119),h=n(62),b=n(120),v=n(241),y=n(399),j=n(63),w='"Rajdhani"',k='"Roboto Condensed"',x='"Lato"',E=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.children,t=Object(v.a)({splashImage:"",palette:{type:"light",primary:{light:Object(j.lighten)("#594aa8",.07),main:"#594aa8",dark:Object(j.darken)("#594aa8",.07)},secondary:{light:Object(j.lighten)("#fcb373",.07),main:"#fcb373",dark:Object(j.darken)("#fcb373",.07)}},typography:{useNextVariants:!0,fontSize:16,fontFamily:[w,k,x].join(","),h1:{fontFamily:w,fontWeight:600},h2:{fontFamily:w,fontWeight:600},h3:{fontFamily:w,fontWeight:600},h4:{fontFamily:k,textTransform:"uppercase",letterSpacing:"0.1em",fontWeight:400},h5:{fontFamily:k,textTransform:"uppercase",letterSpacing:"0.1em",fontWeight:400},h6:{fontFamily:k,textTransform:"uppercase",letterSpacing:"0.1em",fontWeight:400},subtitle1:{fontFamily:w,fontWeight:400},subtitle2:{fontFamily:k,fontWeight:400},body1:{fontFamily:x,fontWeight:400},body2:{fontFamily:x,fontWeight:400},button:{fontFamily:k,fontWeight:400},caption:{fontFamily:k,fontWeight:400},overline:{fontFamily:k,letterSpacing:"0.15em",textTransform:"uppercase",fontWeight:300}},overrides:{MuiInput:{input:{fontFamily:x}},MuiInputLabel:{root:{fontFamily:k}},MuiAppBar:{root:{}},MuiButton:{contained:{boxShadow:"none"}}}});return r.a.createElement(y.a,{theme:t},e)}}]),t}(a.Component),O=(n(263),n(229)),C=n(239),S=n.n(C);var B=function(){return r.a.useEffect((function(){Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error("Error in loadOnce:",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()})),r.a.createElement(E,null,r.a.createElement("div",{className:"App"},r.a.createElement(m.a,{bannerColor:"#594aa8",href:"https://github.com/transmute-industries/issuer.interop.transmute.world"}),r.a.createElement("div",{style:{maxWidth:"512px",margin:"auto",paddingTop:"10%"}},r.a.createElement("img",{src:S.a,alt:"transmute logo",style:{width:"50%",margin:"auto",display:"block",padding:"32px 0px"}}),r.a.createElement(O.a,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t){},84:function(e,t){},96:function(e){e.exports=JSON.parse('{"@context":["https://www.w3.org/2018/credentials/v1","https://www.w3.org/2018/credentials/examples/v1"],"id":"http://example.gov/credentials/3732","type":["VerifiableCredential","UniversityDegreeCredential"],"issuer":"https://example.edu","issuanceDate":"2020-03-09T21:24:24.098Z","credentialSubject":{"id":"did:example:ebfeb1f712ebc6f1c276e12ec21","degree":{"type":"BachelorDegree","name":"Bachelor of Science and Arts"}}}')}},[[253,1,2]]]);
//# sourceMappingURL=main.c07577fa.chunk.js.map