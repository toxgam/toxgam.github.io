(this["webpackJsonphappy-author"]=this["webpackJsonphappy-author"]||[]).push([[2],{25:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(309),t),o(n(615),t),o(n(313),t),o(n(312),t),o(n(616),t)},309:function(e,t,n){"use strict";var r=n(310);Object.defineProperty(t,"__esModule",{value:!0}),t.collections=t.bookDataCollections=t.childCollectionsWithoutOrder=t.collectionsWithoutParent=void 0;var o=n(312);t.collectionsWithoutParent=["books"],t.childCollectionsWithoutOrder=["lists"],t.bookDataCollections=[].concat(r(t.childCollectionsWithoutOrder),["pages"],r(o.macroTypes)),t.collections=[].concat(r(t.collectionsWithoutParent),r(t.bookDataCollections))},312:function(e,t,n){"use strict";var r=n(310),o=n(614);function c(e,t){return t.map((function(t){return{macroType:e,doc:t}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.getMacros=t.macroTypes=void 0,t.macroTypes=["mAccordions","mImages","mInputs","mListSelects","mListShows","mMarkdowns","mQuizes","mQuotes","mSurveys","mTocs","mYouTubes"],t.getMacros=function(e,n){var a,i=[],s=o(t.macroTypes);try{for(s.s();!(a=s.n()).done;){var u=a.value,l=c(u,n(u,e));i.push.apply(i,r(l))}}catch(d){s.e(d)}finally{s.f()}return i.sort((function(e,t){return e.doc.order-t.doc.order})),i}},313:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.iconSets=void 0,t.iconSets=["AntDesign","Entypo","EvilIcons","Feather","FontAwesome","FontAwesome5","Fontisto","Foundation","Ionicons","MaterialCommunityIcons","MaterialIcons","Octicons","Zocial","SimpleLineIcons"]},615:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.topPageIds=void 0,t.topPageIds={sidebar:"sidebar",lessons:"lessons"}},616:function(e,t,n){"use strict";var r=n(617);Object.defineProperty(t,"__esModule",{value:!0}),t.jsonSchemas=t.defaultImage=void 0;var o=n(309),c=n(313);t.defaultImage="data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7",t.jsonSchemas={books:{title:"Book",type:"object",properties:{title:{type:"string",default:"Book title"}},required:["title"]},lists:{title:"List",description:"List of groups of text",type:"object",properties:{title:{type:"string",default:"List title"},groups:{type:"array",items:{title:"Group",type:"object",properties:{name:{type:"string",default:"Group name"},items:{type:"array",items:{type:"string",default:"Item name"}}},required:["name","items"]},default:[{group:"Group 1",items:["Item1","Item2"]},{group:"Group 2",items:["Item3","Item4"]}]}},required:["title","groups"]},pages:{title:"Page",description:"Pages can be structured into a tree",type:"object",properties:{title:{type:"string",default:"Page title"},visual:{oneOf:[{title:"Icon",type:"object",properties:{iconSet:{type:"string",enum:c.iconSets},icon:{type:"string"}},required:["iconSet","icon"]},{title:"Image",type:"string",format:"data-url",default:t.defaultImage}],default:{iconSet:"Ionicons",icon:"paper-plane-outline"}}},required:["title"]},mAccordions:{title:"Accordion",description:"Macro that shows child pages in an accordion",type:"object",properties:{}},mTocs:{title:"Toc",description:"Macro that shows table of contents of child pages",type:"object",properties:{}},mImages:{title:"Image",description:"Macro that shows an image",type:"object",properties:{image:{type:"string",format:"data-url",default:t.defaultImage},caption:{type:"string",default:"Image caption"}},required:["image"]},mInputs:{title:"Input",description:"Macro that records user text input",type:"object",properties:{multiline:{type:"boolean",default:!1}},required:["multiline"]},mListSelects:{title:"List select",description:"Macro that lets user select from a text list",type:"object",properties:{listId:{title:"List ID",type:"string"}},required:["listId"]},mListShows:{title:"List show",description:"Macro that shows a text list",type:"object",properties:{listId:{title:"List ID",type:"string"}},required:["listId"]},mMarkdowns:{title:"Markdown",description:"Macro that shows text in Markdown format",type:"object",properties:{text:{type:"string",default:"Markdown text"}},required:["text"]},mQuizes:{title:"Quiz",description:"Macro that shows a quiz (can be multiple choices)",type:"object",properties:{question:{description:"Markdown",type:"string",default:"Quiz question?"},choices:{type:"array",items:{title:"Choice",type:"object",properties:{choice:{type:"string",default:"Choice"},correct:{type:"boolean",default:!1}},required:["choice","correct"]},default:[{choice:"Choice 1",correct:!0},{choice:"Choice 2",correct:!1}]},explanation:{description:"Explanation about the answer (Markdown)",type:"string",default:"Markdown text"}},required:["question","choices"]},mQuotes:{title:"Quote",description:"Macro that shows a quote",type:"object",properties:{quote:{description:"Markdown",type:"string",default:"Markdown text"},author:{type:"string",default:"Author of the quote"},image:{type:"string",format:"data-url",default:t.defaultImage}},required:["quote","author"]},mSurveys:{title:"Survey",description:"Macro that shows a survey question",type:"object",properties:{question:{description:"Markdown",type:"string",default:"Ask something?"},choices:{type:"array",items:{type:"string",default:"Choice"},default:["Choice 1","Choice 2"]},multiple:{type:"boolean",default:!1}},required:["question","choices","multiple"]},mYouTubes:{title:"YouTube",description:"Macro that shows a YouTube video",type:"object",properties:{videoId:{type:"string",default:"pVBev5-2Ujk"}},required:["videoId"]}};for(var a=0,i=Object.entries(t.jsonSchemas);a<i.length;a++){var s=r(i[a],2),u=s[0],l=s[1],d=o.collectionsWithoutParent.includes(u),p=o.childCollectionsWithoutOrder.includes(u);l.properties=Object.assign({},{id:{type:"string"}},d?{}:p?{parentId:{type:"string"}}:{parentId:{type:"string"},order:{type:"integer",default:99}},l.properties),l.required||(l.required=[]),d?l.required.unshift("id"):p?l.required.unshift("id","parentId"):l.required.unshift("id","parentId","order")}},622:function(e,t,n){"use strict";n.r(t);var r=n(3),o=n(0),c=n.n(o),a=n(19),i=n.n(a),s=n(56),u=n(684),l=n(46),d=n(43),p=n(664),b=n(625),j=n(175),f=(n(608),n(8)),h=n(686),O=n(685),m=Object(d.b)({key:"alertState",default:{severity:"info",msg:""}});function x(){var e=Object(d.c)(m),t=Object(f.a)(e,2),n=t[0],o=n.severity,c=n.msg,a=t[1];return Object(r.jsx)(h.a,{open:c.length>0,autoHideDuration:3e3,onClose:function(){return a({severity:o,msg:""})},children:Object(r.jsx)(O.a,{severity:o,children:c})})}function v(){var e=Object(d.c)(m),t=Object(f.a)(e,2)[1];return function(e,n){return t({severity:e,msg:n})}}var y=n(670),g=n(345),k=Object(y.a)((function(e){return{paper:{marginBottom:e.spacing(2),padding:e.spacing(2)}}}));function A(e){var t=e.children,n=k();return Object(r.jsx)(g.a,{className:n.paper,children:t})}function I(){var e=Object(l.c)(),t=v();return Object(r.jsx)(p.a,{item:!0,md:6,sm:12,children:Object(r.jsx)(A,{children:Object(r.jsx)(j.a,{autoComplete:"off",schema:{type:"object",required:["email","password"],properties:{email:{type:"string",format:"email",title:"Email"},password:{type:"string",title:"Password"}}},uiSchema:{password:{"ui:widget":"password"}},onSubmit:function(n){var r,o,c=n.formData;return r=c.email,o=c.password,void e.signInWithEmailAndPassword(r,o).then((function(){}),(function(e){t("error","Could not login"),console.error(e)}))},children:Object(r.jsx)(b.a,{type:"submit",color:"primary",children:"Login"})})})})}var w=n(57),C=(n(623),n(624),w.a.initializeApp({apiKey:"AIzaSyB-svyOf1GKrlLnGCNWFo7SA9xMzKKLkys",projectId:"happy-child-302620",authDomain:"localhost",storageBucket:"gs://happy-child-302620.appspot.com"})),S=w.a.firestore(C),M=w.a.storage(C),q=n(27),D=n(232),P=n(13),T=n(12),B=n.n(T),E=n(28),F=n(83),Q=n(337),L=n.n(Q);var N=n(25);function _(e,t){return e?new Promise((function(n){var r=new Image;r.onload=function(){r.width<=t&&n(e);var o=function(e,t){var n=e.height*t/e.width,r=document.createElement("canvas");return r.width=t,r.height=n,r.getContext("2d").drawImage(e,0,0,t,n),r.toDataURL("image/jpg",.75)}(r,t);n(o)},r.src=e})):Promise.resolve("")}var G,z=Object(P.a)(N.collections);try{for(z.s();!(G=z.n()).done;){var K=G.value;delete N.jsonSchemas[K].properties.id,delete N.jsonSchemas[K].properties.parentId}}catch(Vt){z.e(Vt)}finally{z.f()}var U,W={},V=Object(P.a)(N.collections);try{for(V.s();!(U=V.n()).done;){var J=U.value;W[J]={}}}catch(Vt){V.e(Vt)}finally{V.f()}var R={"ui:widget":"textarea"};W.mMarkdowns.text=R,W.mSurveys.question=R,W.mQuizes.question=R,W.mQuizes.explanation=R,W.mQuotes.quote=R;var Y={};function Z(e,t){var n=de(e).orderBy("order","asc");return void 0!==t&&(n=n.where("parentId","==",t)),Object(l.e)(n,{idField:"id"}).data}function H(e,t){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.category||e.toString(),o=n.lifespan||1e4,c=[r].concat(Object(F.a)(t)),a=function(){return e.apply(null,t)};return L()(a,c,o)}(he,[e,t])}function X(e){return $.apply(this,arguments)}function $(){return($=Object(E.a)(B.a.mark((function e(t){var n,r,o,c,a,i;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je("books",t);case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return",void 0);case 5:r={},o=Object(P.a)(N.bookDataCollections),e.prev=7,o.s();case 9:if((c=o.n()).done){e.next=17;break}return a=c.value,e.next=13,pe([t,a],void 0);case 13:i=e.sent,r[a]=i;case 15:e.next=9;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(7),o.e(e.t0);case 22:return e.prev=22,o.f(),e.finish(22);case 25:return e.abrupt("return",{book:n,data:r});case 26:case"end":return e.stop()}}),e,null,[[7,19,22,25]])})))).apply(this,arguments)}function ee(e,t){return te.apply(this,arguments)}function te(){return(te=Object(E.a)(B.a.mark((function e(t,n){var r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de(t).add(n);case 2:return r=e.sent,e.abrupt("return",r.id);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(e,t,n){return re.apply(this,arguments)}function re(){return(re=Object(E.a)(B.a.mark((function e(t,n,r){var o,c;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o="string"===typeof t?t:t[1],e.t0=Object,e.t1=void 0===n?{}:{parentId:n},e.t2=Y[o],e.t3=r,e.t3){e.next=10;break}return e.next=8,ve(t,n);case 8:e.t4=e.sent,e.t3=e.t4+1;case 10:return e.t5=e.t3,e.t6={order:e.t5},c=e.t0.assign.call(e.t0,e.t1,e.t2,e.t6),e.next=15,ee(t,c);case 15:return e.abrupt("return",e.sent);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(e,t,n){return ce.apply(this,arguments)}function ce(){return(ce=Object(E.a)(B.a.mark((function e(t,n,r){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je(t,n);case 2:if(e.sent){e.next=6;break}return e.next=6,me(t,n,r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(e,t){return ie.apply(this,arguments)}function ie(){return(ie=Object(E.a)(B.a.mark((function e(t,n){var r,o,c,a,i,s,u,l,d;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de(t).doc(n).delete();case 2:r=t[0],o=Object(P.a)(N.bookDataCollections),e.prev=4,o.s();case 6:if((c=o.n()).done){e.next=31;break}return a=c.value,i=[r,a],e.next=11,de(i).where("parentId","==",n).get();case 11:s=e.sent,u=Object(P.a)(s.docs),e.prev=13,u.s();case 15:if((l=u.n()).done){e.next=21;break}return d=l.value,e.next=19,ae(i,d.id);case 19:e.next=15;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(13),u.e(e.t0);case 26:return e.prev=26,u.f(),e.finish(26);case 29:e.next=6;break;case 31:e.next=36;break;case 33:e.prev=33,e.t1=e.catch(4),o.e(e.t1);case 36:return e.prev=36,o.f(),e.finish(36);case 39:case"end":return e.stop()}}),e,null,[[4,33,36,39],[13,23,26,29]])})))).apply(this,arguments)}function se(e){var t=e.data();if(t){var n=t;return n.id=e.id,n}}function ue(e){var t=Object.assign({},e);return delete t.id,t}function le(e){if("string"===typeof e)return e;var t=Object(f.a)(e,2),n=t[0],r=t[1];return"/books/".concat(n,"/").concat(r)}function de(e){return S.collection(le(e))}function pe(e,t){return be.apply(this,arguments)}function be(){return(be=Object(E.a)(B.a.mark((function e(t,n){var r,o;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=de(t).orderBy("order","asc"),void 0!==n&&(r=r.where("parentId","==",n)),e.next=4,r.get();case 4:return o=e.sent,e.abrupt("return",o.docs.map((function(e){return se(e)})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function je(e,t){return fe.apply(this,arguments)}function fe(){return(fe=Object(E.a)(B.a.mark((function e(t,n){var r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de(t).doc(n).get();case 2:return r=e.sent,e.abrupt("return",se(r));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function he(e,t){return Oe.apply(this,arguments)}function Oe(){return(Oe=Object(E.a)(B.a.mark((function e(t,n){var r,o;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[];case 1:if(!n){e.next=8;break}return e.next=4,je(t,n);case 4:(o=e.sent)?(r.push(o),n=o.parentId):n="",e.next=1;break;case 8:return e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(e,t,n){return xe.apply(this,arguments)}function xe(){return(xe=Object(E.a)(B.a.mark((function e(t,n,r){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de(t).doc(n).set(r);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ve(e,t){return ye.apply(this,arguments)}function ye(){return(ye=Object(E.a)(B.a.mark((function e(t,n){var r,o;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=de(t).orderBy("order","desc").limit(1),void 0!==n&&(r=r.where("parentId","==",n)),e.next=4,r.get();case 4:return o=e.sent,e.abrupt("return",o.empty?0:o.docs[0].data().order);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ge(e){for(var t=0,n=Object.entries(e);t<n.length;t++){var r=Object(f.a)(n[t],2),o=r[0];void 0===r[1]&&(e[o]="")}}function ke(e,t){return Ae.apply(this,arguments)}function Ae(){return(Ae=Object(E.a)(B.a.mark((function e(t,n){var r,o;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=600,"string"!==typeof t){e.next=3;break}return e.abrupt("return");case 3:if("mImages"!==(o=t[1])&&"mQuotes"!==o){e.next=10;break}return e.next=7,_(n.image,r);case 7:n.image=e.sent,e.next=14;break;case 10:if("pages"!==o||"string"!==typeof n.visual){e.next=14;break}return e.next=13,_(n.visual,r);case 13:n.visual=e.sent;case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}N.collections.forEach((function(e){var t=N.jsonSchemas[e].properties;Y[e]={};for(var n=0,r=Object.entries(t);n<r.length;n++){var o=Object(f.a)(r[n],2),c=o[0],a=o[1];Y[e][c]=a.default}})),S.enablePersistence();var Ie=n(671),we=n(672),Ce=n(673),Se=n(674),Me=n(675),qe=Object(d.b)({key:"confirmDlgState",default:{open:!1,msg:"",onConfirm:function(){}}});function De(){var e=Object(d.c)(qe),t=Object(f.a)(e,2),n=t[0],o=n.open,c=n.msg,a=n.onConfirm,i=t[1],s=function(){i({open:!1,msg:"",onConfirm:function(){}})};return Object(r.jsxs)(Ie.a,{open:o,onClose:s,children:[Object(r.jsx)(we.a,{children:"Confirm"}),Object(r.jsx)(Ce.a,{children:Object(r.jsx)(Se.a,{children:c})}),Object(r.jsxs)(Me.a,{children:[Object(r.jsx)(b.a,{onClick:function(){a(),s()},color:"secondary",children:"OK"}),Object(r.jsx)(b.a,{onClick:s,color:"primary",autoFocus:!0,children:"Cancel"})]})]})}var Pe=Object(y.a)((function(){return{buttons:{display:"flex",justifyContent:"space-between"}}}));function Te(e){var t=e.bookId,n=e.collection,c=e.doc,a=e.onDelete,i=Pe(),s=v(),u=function(){var e=Object(d.c)(qe),t=Object(f.a)(e,2)[1];return function(e,n){t({open:!0,msg:e,onConfirm:n})}}(),p=Object(q.g)(),h=Object(o.useState)(c),O=Object(f.a)(h,2),m=O[0],x=O[1],y=Object(o.useState)(Be(m)),g=Object(f.a)(y,2),k=g[0],I=g[1],w="books"===n?n:[t,n],C=function(e,t){var n=Object(l.d)().collection(le(e)).doc(t),r=n.update.bind(n);return function(){var t=Object(E.a)(B.a.mark((function t(n){var o;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return ge(n),t.next=3,ke(e,n);case 3:return o=ue(n),t.next=6,r(o);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(w,c.id),S=function(){a&&a(),ae(w,c.id).then((function(){s("info","Successfully deleted document of ".concat(n))}),(function(e){s("error","Could not delete"),console.error(e)}))};return Object(r.jsx)(A,{children:Object(r.jsx)(j.a,{autoComplete:"off",schema:N.jsonSchemas[n],uiSchema:W[n],formData:m,onSubmit:function(e){var t=e.formData;return C(t).then((function(){x(t),I(Be(t)),s("info","Successfully updated")}),(function(e){s("error","Could not update"),console.error(e)}))},children:Object(r.jsxs)("div",{className:i.buttons,children:[Object(r.jsx)(b.a,{type:"submit",color:"primary",children:"Update"}),"books"===n&&Object(r.jsx)(b.a,{color:"primary",onClick:function(){return p.push("/books/".concat(t))},children:"Edit content"}),"books"!==n&&Object(r.jsx)(b.a,{color:"secondary",onClick:function(){N.macroTypes.includes(n)?S():u("Do you want to delete this document of ".concat(n,"?"),S)},children:"Delete"})]})},k)})}function Be(e){var t=Ee(e);return"".concat(e.id,"-").concat(t.join("-"))}function Ee(e){for(var t=[],n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];t.push(o);var c=e[o];"object"!==typeof c||Array.isArray(c)||t.push.apply(t,Object(F.a)(Ee(c)))}return t}var Fe=n(680),Qe=n(681),Le=n(665),Ne=n(687),_e=n(341),Ge=n.n(_e),ze=n(35),Ke=n(679);function Ue(){var e=Object(l.c)(),t=Object(l.g)().data,n=v(),o=Object(q.g)();return Object(r.jsx)("div",{children:Object(r.jsxs)(D.a,{children:[Object(r.jsx)(b.a,{color:"primary",onClick:function(){e.signOut().then((function(){return o.push("/")}),(function(e){n("error","Could not logout"),console.error(e)}))},children:"Logout"}),t.email]})})}function We(){return(We=Object(E.a)(B.a.mark((function e(t){var n,r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X(t);case 2:return n=e.sent,r=JSON.stringify(n,null,2),e.next=6,Je("backup/"+Ye(t,{timestamped:!0}),r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ve(){return(Ve=Object(E.a)(B.a.mark((function e(t){var n,r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X(t);case 2:return n=e.sent,r=JSON.stringify(n,null,2),e.next=6,Je("backup/"+Ye(t,{timestamped:!0,tag:"publish"}),r);case 6:return e.next=8,Je("publish/"+Ye(t),r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Je(e,t){return Re.apply(this,arguments)}function Re(){return(Re=Object(E.a)(B.a.mark((function e(t,n){var r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=M.ref(t),e.next=3,r.putString(n,void 0,{contentType:"text/json"}).then();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ye(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.timestamped,r=t.tag,o=n?"-"+Ze():"",c=r?"-"+r:"";return"".concat(e,"/happy-").concat(e).concat(o).concat(c,".json")}function Ze(){return(new Date).toISOString()}function He(){var e=Object(q.h)().bookId,t=Object(q.g)(),n=function(e,t){var n=Object(l.d)().collection(le(e)).doc(t),r=Object(l.f)(n,{idField:"id"}).data;return 1===Object.keys(r).length?void 0:r}("books",e),o=v();return Object(r.jsxs)(r.Fragment,{children:[n&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(D.a,{variant:"h5",children:n.title}),Object(r.jsxs)("div",{children:[Object(r.jsx)(b.a,{color:"primary",onClick:function(){X(e).then((function(t){!function(e,t){var n=JSON.stringify(t,null,2),r=document.createElement("a");r.setAttribute("href","data:application/json;charset=utf-8,"+encodeURIComponent(n)),r.setAttribute("download",e),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)}("happy-".concat(e,".json"),t)}),(function(e){o("error","Could not download"),console.error(e)}))},children:"Download"}),Object(r.jsx)(b.a,{color:"primary",onClick:function(){(function(e){return We.apply(this,arguments)})(e).then((function(){o("info","Created backup")}),(function(e){o("error","Could not backup"),console.error(e)}))},children:"Backup"}),Object(r.jsx)(b.a,{color:"primary",onClick:function(){(function(e){return Ve.apply(this,arguments)})(e).then((function(){o("info","Created backup and published")}),(function(e){o("error","Could not publish"),console.error(e)}))},children:"Publish"})]})]}),Object(r.jsx)(b.a,{color:"primary",onClick:function(){return t.push("/")},children:"View book list"})]})}var Xe=n(676);function $e(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(O.a,{severity:"info",children:Object(r.jsx)(Xe.a,{href:"https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet",children:"Markdown text format refence"})}),Object(r.jsx)(O.a,{severity:"info",children:Object(r.jsx)(Xe.a,{href:"https://oblador.github.io/react-native-vector-icons/",children:"Icons"})})]})}var et=n(18),tt=n(688),nt=n(678),rt=n(340),ot=n.n(rt),ct=n(339),at=n.n(ct),it=n(338),st=n.n(it);function ut(){return(ut=Object(E.a)(B.a.mark((function e(t){var n,r,o,c;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Object.keys(N.topPageIds),r=0;case 2:if(!(r<n.length)){e.next=10;break}return o=n[r],c={id:o,parentId:"",order:r+1,title:o},e.next=7,oe([t,"pages"],o,c);case 7:r++,e.next=2;break;case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var lt=n(677),dt=n(44),pt=n(130),bt=n(69),jt=n(70);function ft(e){var t=e.msg;return Object(r.jsx)(D.a,{color:"error",children:t})}var ht=function(e){Object(bt.a)(n,e);var t=Object(jt.a)(n);function n(e){var r;return Object(dt.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(pt.a)(n,[{key:"render",value:function(){return this.state.hasError?Object(r.jsx)(ft,{msg:this.props.errorMsg}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return console.error(e),{hasError:!0}}}]),n}(o.Component);function Ot(e){return Object(r.jsx)(ht,{errorMsg:e.errorMsg,children:Object(r.jsx)(o.Suspense,{fallback:Object(r.jsx)(lt.a,{}),children:e.children})})}var mt=Object(d.b)({key:"docTreeState",default:{expandedNodeIds:["pages"],selectedNodeId:"pages"}});function xt(){return Object(r.jsx)(tt.a,{nodeId:"lists",label:"Text lists",children:Object(r.jsx)(gt,{collection:"lists",recursive:!1,parentId:void 0,labelMaker:function(e){return e.title}})})}function vt(e){var t=e.bookId;return Object(o.useEffect)((function(){!function(e){ut.apply(this,arguments)}(t)}),[t]),Object(r.jsx)(tt.a,{nodeId:"pages",label:"Pages",children:Object(r.jsx)(gt,{collection:"pages",recursive:!0,parentId:"",labelMaker:function(e){return e.title}})})}function yt(){var e=Object(q.h)().bookId,t=Object(d.c)(mt),n=Object(f.a)(t,2),o=n[0],c=o.expandedNodeIds,a=o.selectedNodeId,i=n[1];return Object(r.jsx)(A,{children:Object(r.jsxs)(nt.a,{defaultCollapseIcon:Object(r.jsx)(st.a,{}),defaultExpandIcon:Object(r.jsx)(at.a,{}),expanded:c,selected:a,onNodeToggle:function(e,t){return i({expandedNodeIds:t,selectedNodeId:a})},children:[Object(r.jsx)(xt,{}),Object(r.jsx)(vt,{bookId:e})]})})}function gt(e){return Object(r.jsx)(Ot,{errorMsg:"Error loading ".concat(e.collection),children:Object(r.jsx)(kt,Object(et.a)({},e))})}function kt(e){var t=e.collection,n=e.recursive,o=e.parentId,c=e.labelMaker,a=Object(q.h)().bookId,i=Object(q.g)(),s=Z([a,t],o),u=v();return Object(r.jsxs)(r.Fragment,{children:[s.map((function(e){var o=e.id,s="/books/".concat(a,"/").concat(t,"/").concat(o);return Object(r.jsx)(tt.a,{nodeId:s,label:c(e),onLabelClick:function(e){e.preventDefault(),i.push(s)},children:n&&Object(r.jsx)(gt,{collection:t,recursive:!0,parentId:o,labelMaker:c})},s)})),Object(r.jsx)(tt.a,{nodeId:"add-doc-to-".concat(t,"-").concat(o),icon:Object(r.jsx)(ot.a,{}),label:"Add",onClick:function(){ne([a,t],o).then((function(e){i.push("/books/".concat(a,"/").concat(t,"/").concat(e))}),(function(e){console.error(e),u("error","Could not add new document to ".concat(t))}))}})]})}function At(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(q.b,{path:"/books/:bookId",children:Object(r.jsx)(yt,{})}),Object(r.jsxs)(A,{children:[Object(r.jsxs)(q.b,{path:"/books/:bookId",children:[Object(r.jsx)(He,{}),Object(r.jsx)($e,{})]}),Object(r.jsx)(Ue,{})]})]})}function It(){var e=Object(ze.a)();return Object(Ke.a)(e.breakpoints.up("md"))}function wt(e){var t=e.title,n=It(),c=Object(o.useState)(!1),a=Object(f.a)(c,2),i=a[0],s=a[1];return Object(r.jsx)(Fe.a,{position:"static",children:Object(r.jsxs)(Qe.a,{children:[!n&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Le.a,{color:"inherit",edge:"start",onClick:function(){return s(!0)},children:Object(r.jsx)(Ge.a,{})}),Object(r.jsx)(Ne.a,{anchor:"left",open:i,onClose:function(){return s(!1)},children:Object(r.jsx)(At,{})})]}),Object(r.jsx)(D.a,{children:t})]})})}function Ct(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(wt,{title:e.title}),Object(r.jsx)("div",{style:{marginTop:"1em"},children:Object(r.jsx)(Ot,{errorMsg:"There's error, please try reloading this web page.",children:e.children})})]})}function St(){var e=Z("books",void 0);return e.sort((function(e,t){return e.title<t.title?-1:1})),Object(r.jsxs)(r.Fragment,{children:[e.map((function(e){return Object(r.jsx)(Te,{bookId:e.id,collection:"books",doc:e,onDelete:function(){}},e.id)})),Object(r.jsx)(b.a,{color:"primary",onClick:function(){return ne("books",void 0)},children:"Add book"}),Object(r.jsx)(O.a,{severity:"info",children:Object(r.jsx)(D.a,{children:"Deleting books from this admin UI is not effecient for the system. If you want to delete a book, please contact a DB admin."})})]})}var Mt=Object(r.jsx)(q.b,{path:"/",exact:!0,children:Object(r.jsx)(Ct,{title:"Books",children:Object(r.jsx)(St,{})})});function qt(){return Object(r.jsx)(D.a,{children:"Please start from the sidebar."})}var Dt=Object(r.jsx)(q.b,{path:"/books/:bookId",exact:!0,children:Object(r.jsx)(Ct,{title:"Edit book",children:Object(r.jsx)(qt,{})})}),Pt=n(682),Tt=n(683),Bt=n(666),Et=n(669),Ft=n(667),Qt=n(668),Lt=n(342),Nt=n.n(Lt);function _t(e){var t=e.bookId,n=e.pageId,o=c.a.useState(!1),a=Object(f.a)(o,2),i=a[0],s=a[1],u=c.a.useRef(null),l=c.a.useState(0),d=Object(f.a)(l,2),j=d[0],h=d[1],O=N.macroTypes[j],m=N.jsonSchemas[O].title,x=function(e){u.current&&u.current.contains(e.target)||s(!1)};return Object(r.jsx)(p.a,{container:!0,direction:"column",alignItems:"center",children:Object(r.jsxs)(p.a,{item:!0,xs:12,children:[Object(r.jsxs)(Pt.a,{variant:"contained",color:"primary",ref:u,children:[Object(r.jsxs)(b.a,{onClick:function(){ne([t,O],n,99)},children:["Add ",m]}),Object(r.jsx)(b.a,{color:"primary",size:"small",onClick:function(){s((function(e){return!e}))},children:Object(r.jsx)(Nt.a,{})})]}),Object(r.jsx)(Tt.a,{open:i,anchorEl:u.current,role:void 0,transition:!0,disablePortal:!0,children:function(e){var t=e.TransitionProps,n=e.placement;return Object(r.jsx)(Bt.a,Object(et.a)(Object(et.a)({},t),{},{style:{transformOrigin:"bottom"===n?"center top":"center bottom"},children:Object(r.jsx)(g.a,{children:Object(r.jsx)(Et.a,{onClickAway:x,children:Object(r.jsx)(Ft.a,{children:N.macroTypes.map((function(e,t){return Object(r.jsx)(Qt.a,{selected:t===j,onClick:function(e){return function(e,t){h(t),s(!1)}(0,t)},children:N.jsonSchemas[e].title},e)}))})})})}))}})]})})}function Gt(e){var t=e.bookId,n=e.pageId,o=function(e,t){return Object(N.getMacros)(t,(function(t,n){return Z([e,t],n)}))}(t,n);return Object(r.jsxs)("div",{children:[o.map((function(e){return function(e,t){var n=t.macroType,o=t.doc;return N.macroTypes.includes(n)?Object(r.jsx)(Te,{bookId:e,collection:n,doc:o},o.id):Object(r.jsx)(ft,{msg:"Unknown page macro type: ".concat(n)})}(t,e)})),Object(r.jsx)(_t,{bookId:t,pageId:n})]})}function zt(e){var t=e.collection,n=Object(q.h)(),c=n.bookId,a=n.bookDataId,i=H([c,t],a),s=function(){var e=Object(d.c)(mt),t=Object(f.a)(e,2),n=t[0].expandedNodeIds,r=t[1];return Object(o.useCallback)((function(e,t,o,c){var a,i="/books/".concat(e,"/").concat(t,"/").concat(o),s=Object(F.a)(n),u=Object(P.a)(c);try{for(u.s();!(a=u.n()).done;){var l=a.value,d="/".concat(t,"/").concat(l);s.includes(d)||s.push(d)}}catch(Vt){u.e(Vt)}finally{u.f()}var p=s.length!==n.length;r({expandedNodeIds:p?s:n,selectedNodeId:i})}),[n,r])}(),u=Object(q.g)();if(Object(o.useEffect)((function(){var e=i.map((function(e){return e.id}));s(c,t,a,e)}),[c,t,a,i,s]),0===i.length)return Object(r.jsx)(ft,{msg:"Could not load data to edit"});var l=i[0];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Te,{bookId:c,collection:t,doc:l,onDelete:function(){return u.push("/")}},"".concat(c,"/").concat(t,"/").concat(a)),"pages"===t&&Object(r.jsx)(Gt,{bookId:c,pageId:a})]})}var Kt=[["lists","Edit text list"],["pages","Edit page"]].map((function(e){var t=Object(f.a)(e,2),n=t[0],o=t[1];return Object(r.jsx)(q.b,{path:"/books/:bookId/".concat(n,"/:bookDataId"),exact:!0,children:Object(r.jsx)(Ct,{title:o,children:Object(r.jsx)(zt,{collection:n})})},n)}));function Ut(){var e=It();return Object(r.jsxs)(p.a,{container:!0,spacing:e?2:0,children:[e&&Object(r.jsx)(p.a,{item:!0,md:5,children:Object(r.jsx)(At,{})}),Object(r.jsx)(p.a,{item:!0,md:7,sm:12,children:Object(r.jsxs)(q.d,{children:[Mt,Dt,Kt,Object(r.jsx)(q.a,{from:"*",to:"/"})]})})]})}function Wt(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(u.a,{}),Object(r.jsx)(Ot,{errorMsg:"There's error, please try reloading this page",children:Object(r.jsx)(d.a,{children:Object(r.jsxs)(s.a,{children:[Object(r.jsx)(x,{}),Object(r.jsx)(De,{}),Object(r.jsx)(l.b,{firebaseApp:C,suspense:!0,children:Object(r.jsx)(l.a,{fallback:Object(r.jsx)(I,{}),children:Object(r.jsx)(Ut,{})})})]})})})]})}i.a.render(Object(r.jsx)(Wt,{}),document.getElementById("root"))}},[[622,3,4]]]);