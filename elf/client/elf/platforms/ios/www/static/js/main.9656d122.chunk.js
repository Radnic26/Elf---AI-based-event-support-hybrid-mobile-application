(this["webpackJsonpcom.example.elf"]=this["webpackJsonpcom.example.elf"]||[]).push([[0],{180:function(e,t,a){var n=a(221),r=a(63);e.exports=function(){var e=localStorage.getItem("userToken");return null!==e&&n.verify(e,r.tokenSecret).id}},190:function(e,t,a){e.exports=a(325)},195:function(e,t,a){},196:function(e,t,a){},197:function(e,t,a){},198:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){},216:function(e,t,a){},217:function(e,t,a){},218:function(e,t,a){},227:function(e,t){},229:function(e,t){},267:function(e,t){},268:function(e,t){},325:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(12),c=a(21),o=a(20),s=a(0),i=a.n(s),l=a(13),u=a.n(l),m=(a(195),a(196),a(47)),d=a(23),p=a(52),g=a(364),h=a(361),E=a(365),f=a(366),b=a(367),v=a(368),y=a(369),S=a(370),C=a(371),O=a(72),x=a(378),j=a(379),k=a(178),w=a.n(k),R=a(363),L=a(19),_=(a(197),a(5)),U=a(357),N=a(376),A=a(362),T=a(177),I=a.n(T),G=(a(198),a(35)),D=function(e,t){return{type:"ADD_MESSAGE",payload:{chatBubbleId:e.chatBubbleId,message:e.content,context:e.context,isTyping:t}}},M=a(14),P=a.n(M),B=a(25),W=a(39),F=a(63),V=function(){function e(){Object(n.a)(this,e),this.message=[],this.emitter=new W.EventEmitter}return Object(r.a)(e,[{key:"addMessage",value:function(){var e=Object(B.a)(P.a.mark((function e(t,a){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(F.ngrokServer,"/chat/message/user/").concat(t),{method:"post",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("userToken")},body:JSON.stringify(a)});case 3:this.emitter.emit("ADD_MESSAGE_SUCCESS"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.warn(e.t0),this.emitter.emit("ADD_MESSAGE_ERROR");case 10:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"getMessage",value:function(){var e=Object(B.a)(P.a.mark((function e(){var t,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(F.ngrokServer,"/chat/messages"));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.message=a,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.warn(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),z=a(63),J=function(){function e(){Object(n.a)(this,e),this.emitter=new W.EventEmitter,this.reply=[]}return Object(r.a)(e,[{key:"getResponse",value:function(){var e=Object(B.a)(P.a.mark((function e(t){var a,n,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(z.ngrokServer,"/chat/response"),{method:"post",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("userToken")},body:JSON.stringify(t)});case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,25===Object.keys(n).length?this.reply=n:Object.values(n.solution)[0].length>1?(r=Math.floor(Math.random()*n.solution.length),this.reply=n.solution[r]):this.reply=n.solution,this.emitter.emit("GET_RESPONSE_SUCCESS");case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"catch",value:function(e){console.warn(e),this.emitter.emit("GET_RESPONSE_ERROR")}}]),e}(),q=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={question:"",response:[]},r.messageStore=new V,r.responseStore=new J,r.handleChange=function(e){r.setState(Object(d.a)({},e.target.name,e.target.value))},r.sendMessage=function(){if(""!==r.state.question){var e={chatBubbleId:0,content:r.state.question,context:"test"};r.setState({question:""}),r.props.addMessage(e,!0),r.messageStore.addMessage(r.props.currentUser.id,e),r.responseStore.getResponse(e),r.responseStore.emitter.addListener("GET_RESPONSE_SUCCESS",(function(){var t={chatBubbleId:1,content:r.responseStore.reply,context:e.context};r.props.addMessage(t,!1),r.responseStore.emitter.removeCurrentListener()}))}},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement("div",{className:"Form"},i.a.createElement(U.a,{container:!0,className:e.grid,style:{minHeight:"100%"}},i.a.createElement(U.a,{item:!0,xs:9},i.a.createElement(N.a,{name:"question",id:"outlined-basic-email",size:"small",variant:"outlined",placeholder:"Adaug\u0103 un mesaj",value:this.state.question,onChange:this.handleChange,fullWidth:!0})),i.a.createElement(U.a,{item:!0,xs:1,align:"right"},i.a.createElement(A.a,{className:e.buttonGrid,color:"primary",size:"large",variant:"outlined",onClick:this.sendMessage},i.a.createElement(I.a,null)))))}}]),a}(i.a.Component),H=Object(G.b)(null,{addMessage:D})(Object(_.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},grid:{padding:"10px",display:"flex",bottom:0},button:{minWidth:10},buttonGrid:{width:"20px",marginLeft:"10px"}}}))(q)),Y=a(90),$=(a(213),a(214),function(){return i.a.createElement("div",{className:"typing"},i.a.createElement("div",{className:"typing_dot"}),i.a.createElement("div",{className:"typing_dot"}),i.a.createElement("div",{className:"typing_dot"}))}),X=function(e){var t=e.messages,a=e.isTyping;return i.a.createElement("div",{className:"Messages"},i.a.createElement(Y.ChatFeed,{messages:t,bubbleStyles:{text:{fontSize:17},chatbubble:{borderRadius:20,padding:10}}}),a?i.a.createElement($,null):"")},K=Object(G.b)((function(e){return{messages:e.message.messages,isTyping:e.message.isTyping,currentUser:e.user.currentUser}}))((function(e){var t=e.currentUser,a=e.isTyping,n=e.messages;return i.a.createElement("div",{className:"ChatDiv"},i.a.createElement(U.a,{className:"MessageGrid"},i.a.createElement(X,{className:"message",isTyping:a,messages:n})),i.a.createElement(H,{currentUser:t}))})),Q=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){return Object(n.a)(this,a),t.call(this,e)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.currentUser;return i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("div",{style:{marginTop:"10px"}},i.a.createElement("img",{alt:"drawerChatIcon",src:e.photoURL,style:{height:"10vh"}})),i.a.createElement("div",{style:{marginTop:"3vh"}},"Nume: ",e.name),i.a.createElement("div",{style:{marginTop:"2vh"}},"Utilizator: ",e.username),i.a.createElement("div",{style:{marginTop:"2vh"}},"Email: ",e.email))}}]),a}(i.a.Component),Z=Object(G.b)((function(e){return{currentUser:e.user.currentUser}}))(Q),ee=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){return Object(n.a)(this,a),t.call(this,e)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,"Settings")}}]),a}(i.a.Component),te=(a(215),a(216),a(63)),ae=function(){function e(){Object(n.a)(this,e),this.categories=[],this.subcategories=[],this.emitter=new W.EventEmitter,this.abortController=new AbortController}return Object(r.a)(e,[{key:"addCategory",value:function(){var e=Object(B.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(te.ngrokServer,"/concepts/category"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:this.emitter.emit("ADD_CATEGORY_SUCCESSFUL"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),this.emitter.emit("ADD_CATEGORY_ERROR");case 10:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllCategories",value:function(){var e=Object(B.a)(P.a.mark((function e(){var t,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(te.ngrokServer,"/concepts/categories"),{signal:this.abortController.signal});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.categories=a,this.emitter.emit("GET_ALL_CATEGORIES_SUCCESS"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.warn(e.t0),this.emitter.emit("GET_ALL_REVIEWS_ERROR");case 15:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"addSubcategory",value:function(){var e=Object(B.a)(P.a.mark((function e(t,a){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(te.ngrokServer,"/concepts/category/").concat(a,"/subcategory"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.warn(e.t0),this.emitter.emit("ADD_SUBCATEGORY_ERROR");case 9:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"getAllSubcategories",value:function(){var e=Object(B.a)(P.a.mark((function e(){var t,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(te.ngrokServer,"/concepts/subcategories"),{signal:this.abortController.signal});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.subcategories=a,this.emitter.emit("GET_ALL_SUBCATEGORIES_SUCCESS"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.warn(e.t0),this.emitter.emit("GET_ALL_SUBCATEGORIES_ERROR");case 15:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"addExample",value:function(){var e=Object(B.a)(P.a.mark((function e(t,a,n){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(te.ngrokServer,"/concepts/category/").concat(a,"/subcategory/").concat(n,"/example"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.warn(e.t0),this.emitter.emit("ADD_EXAMPLE_ERROR");case 9:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(t,a,n){return e.apply(this,arguments)}}()}]),e}(),ne=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={category:"",categories:[],selectedCategory:[]},r.conceptStore=new ae,r.handleChange=function(e){r.setState(Object(d.a)({},e.target.name,e.target.value))},r.add=function(){r.conceptStore.addCategory({category:r.state.category}),r.conceptStore.emitter.addListener("ADD_CATEGORY_SUCCESSFUL",(function(){window.location.reload(!1)}))},r}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"addCategoryHeader"},"Add a category"),i.a.createElement("div",{className:"categoryForm"},i.a.createElement("label",{className:"categoryLabel"},"Category"),i.a.createElement("input",{type:"text",name:"category",placeholder:"category",onChange:this.handleChange}),i.a.createElement("button",{className:"addCategoryButton",onClick:this.add},"Add")))}}]),a}(i.a.Component),re=(a(217),function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={categories:[],selectedCategoryId:"",subcategory:""},r.conceptStore=new ae,r.handleCategorySelectChange=function(e){r.setState({selectedCategoryId:e.target.value})},r.handleSubcategoryInputChange=function(e){r.setState(Object(d.a)({},e.target.name,e.target.value))},r.add=function(){var e={subcategory:r.state.subcategory};r.conceptStore.addSubcategory(e,r.state.selectedCategoryId),window.location.reload(!0)},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.conceptStore.getAllCategories(),this.conceptStore.emitter.addListener("GET_ALL_CATEGORIES_SUCCESS",(function(){e.setState({categories:e.conceptStore.categories})}))}},{key:"componentWillUnmount",value:function(){this.conceptStore.abortController.abort()}},{key:"render",value:function(){var e=this.state.categories,t=e.length>0&&e.map((function(e,t){return i.a.createElement("option",{key:t,value:e.id},e.category)}),this);return i.a.createElement("div",null,i.a.createElement("div",{className:"addSubcategoryHeader"},"Add a subcategory"),i.a.createElement("div",{className:"subcategoryForm"},i.a.createElement("label",null,"Select a category"),i.a.createElement("select",{className:"selectCategory",onChange:this.handleCategorySelectChange},i.a.createElement("option",{value:"value"},"Select a category"),t)),i.a.createElement("div",{className:"subcategoryForm"},i.a.createElement("label",{className:"subcategoryLabel"},"Subcategory"),i.a.createElement("input",{type:"text",name:"subcategory",placeholder:"subcategory",onChange:this.handleSubcategoryInputChange}),i.a.createElement("button",{className:"addSubcategoryButton",onClick:this.add},"Add")))}}]),a}(i.a.Component)),ce=(a(218),function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={categories:[],selectedCategoryId:"",subcategories:[],selectedSubcategoryId:"",example:""},r.emitter=new W.EventEmitter,r.conceptStore=new ae,r.handleCategorySelectChange=function(e){r.setState({selectedCategoryId:e.target.value})},r.handleSubcategorySelectChange=function(e){r.setState({selectedSubcategoryId:e.target.value})},r.handleInputChange=function(e){r.setState(Object(d.a)({},e.target.name,e.target.value))},r.add=function(){var e={example:r.state.example};console.log(e),r.conceptStore.addExample(e,r.state.selectedCategoryId,r.state.selectedSubcategoryId),window.location.reload(!0)},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.conceptStore.getAllCategories(),this.conceptStore.getAllSubcategories(),this.conceptStore.emitter.addListener("GET_ALL_CATEGORIES_SUCCESS",(function(){e.setState({categories:e.conceptStore.categories})})),this.emitter.emit("EXAMPLE_FORM_SUCCESSFUL_LOAD"),this.conceptStore.emitter.addListener("GET_ALL_SUBCATEGORIES_SUCCESS",(function(){e.setState({subcategories:e.conceptStore.subcategories})}))}},{key:"componentWillUnmount",value:function(){this.conceptStore.abortController.abort()}},{key:"render",value:function(){var e=this.state,t=e.categories,a=e.subcategories,n=t.length>0&&t.map((function(e,t){return i.a.createElement("option",{key:t,value:e.id},e.category)}),this),r=a.length>0&&a.map((function(e,t){return i.a.createElement("option",{key:t,value:e.id},e.subcategory)}),this);return i.a.createElement("div",null,i.a.createElement("div",{className:"addExamplesHeader"},"Add examples"),i.a.createElement("div",{className:"subcategoryForm"},i.a.createElement("label",null,"Select a category"),i.a.createElement("select",{className:"selectSubcategory",onChange:this.handleCategorySelectChange},i.a.createElement("option",{value:"defaultValue"},"Select a category"),n)),i.a.createElement("div",{className:"subcategoryForm"},i.a.createElement("label",null,"Select a subcategory"),i.a.createElement("select",{className:"selectSubcategory",onChange:this.handleSubcategorySelectChange},i.a.createElement("option",{value:"defaultValue"},"Select a subcategory"),r)),i.a.createElement("div",{className:"exampleForm"},i.a.createElement("label",{className:"exampleLabel"},"Example"),i.a.createElement("input",{type:"text",name:"example",placeholder:"example",onChange:this.handleInputChange}),i.a.createElement("button",{className:"addExampleButton",onClick:this.add},"Add")))}}]),a}(i.a.Component)),oe=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"ConceptsForm"},i.a.createElement(ne,null),i.a.createElement(re,null),i.a.createElement(ce,null))}}]),a}(i.a.Component),se=Object(R.a)((function(e){return{root:{display:"flex"},drawer:Object(d.a)({},e.breakpoints.up("sm"),Object(p.a)({width:240,flexShrink:0},e.mixins.toolbar)),appBar:Object(d.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(d.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1}}}));var ie=Object(G.b)((function(e){return{currentUser:e.user.currentUser}}))((function(e){var t=e.windows,a=e.currentUser,n=se(),r=Object(L.a)(),c=i.a.useState(!1),o=Object(m.a)(c,2),s=o[0],l=o[1],u=i.a.useState(!0),d=Object(m.a)(u,2),p=d[0],k=d[1],R=i.a.useState(!1),_=Object(m.a)(R,2),U=_[0],N=_[1],A=i.a.useState(!1),T=Object(m.a)(A,2),I=T[0],G=T[1],D=function(){l(!s)},M=i.a.createElement("div",{className:"HomeDiv"},i.a.createElement("div",null),i.a.createElement(g.a,null),i.a.createElement(h.a,null,i.a.createElement(E.a,{key:"currentUserFullName"},i.a.createElement(f.a,null,i.a.createElement("img",{alt:"drawerChatIcon",src:a.photoURL,style:{height:"34px"}})),i.a.createElement(b.a,{primary:a.name})),i.a.createElement(g.a,null),i.a.createElement(E.a,{button:!0,key:"Chat",onClick:function(){k(!1),G(!1),k(!0),s&&l(!s)}},i.a.createElement(f.a,null,i.a.createElement("img",{alt:"drawerChatIcon",src:"https://img.icons8.com/bubbles/50/000000/chat.png",style:{height:"40px"}})),i.a.createElement(b.a,{primary:"Chat"})),i.a.createElement(E.a,{button:!0,key:"Account",onClick:function(){k(!1),G(!1),N(!0),s&&l(!s)}},i.a.createElement(f.a,null,i.a.createElement("img",{alt:"drawerAccountIcon",src:"https://img.icons8.com/bubbles/50/000000/test-account.png",style:{height:"40px"}})),i.a.createElement(b.a,{primary:"Contul Meu"}))),i.a.createElement(g.a,null),i.a.createElement(E.a,{button:!0,key:"AI",onClick:function(){N(!1),k(!1),G(!1),s&&l(!s)}},i.a.createElement(f.a,null,i.a.createElement("img",{alt:"drawerSettingsIcon",src:"https://img.icons8.com/bubbles/50/000000/learning.png",style:{height:"40px"}})),i.a.createElement(b.a,{primary:"AI"})),i.a.createElement(E.a,{button:!0,key:"Logout",onClick:function(){localStorage.removeItem("userToken"),window.location.reload()}},i.a.createElement(f.a,null,i.a.createElement("img",{alt:"logoutIcon",src:"https://img.icons8.com/dusk/64/000000/logout-rounded-up.png",style:{height:"30px",marginLeft:"5px"}})),i.a.createElement(b.a,{primary:"Iesire"}))),P=void 0!==t?function(){return t().document.body}:void 0;return i.a.createElement("div",{className:n.root},i.a.createElement(v.a,null),i.a.createElement(y.a,{position:"fixed",className:n.appBar},i.a.createElement(S.a,null,i.a.createElement(C.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:D,className:n.menuButton},i.a.createElement(w.a,null)),i.a.createElement(O.a,{variant:"h6",noWrap:!0},"Elf Chat"))),i.a.createElement("nav",{className:n.drawer,"aria-label":"mailbox folders"},i.a.createElement(x.a,{smUp:!0,implementation:"css"},i.a.createElement(j.a,{container:P,variant:"temporary",anchor:"rtl"===r.direction?"right":"left",open:s,onClose:D,classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0}},M)),i.a.createElement(x.a,{xsDown:!0,implementation:"css"},i.a.createElement(j.a,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0},M))),i.a.createElement("main",{className:n.content},i.a.createElement("div",{className:n.toolbar}),p?i.a.createElement(K,null):U?i.a.createElement(Z,null):I?i.a.createElement(ee,null):i.a.createElement(oe,null)))})),le=function(){return i.a.createElement(ie,null)},ue=a(63),me=function(){function e(){Object(n.a)(this,e),this.users=[],this.loggedUser="",this.emitter=new W.EventEmitter,this.responseStatus="",this.error="",this.token=""}return Object(r.a)(e,[{key:"addUser",value:function(){var e=Object(B.a)(P.a.mark((function e(t){var a,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(ue.ngrokServer,"/chat/user"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return a=e.sent,e.next=6,a.json();case 6:(n=e.sent).hasOwnProperty("errors")?(this.error=n.errors[0].message,this.emitter.emit("USER_ADD_ERROR")):(this.emitter.emit("USER_ADD_SUCCESSFUL"),console.log("registration successful!")),e.next=16;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,e.t0.json();case 14:this.error=e.sent,this.emitter.emit("USER_ADD_ERROR");case 16:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(B.a)(P.a.mark((function e(t){var a,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(ue.ngrokServer,"/chat/login"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:if(500===(a=e.sent).status){e.next=11;break}return e.next=7,a.json();case 7:(n=e.sent).hasOwnProperty("error")?(this.error=n.error,this.emitter.emit("LOGIN_ERROR")):(localStorage.setItem("userToken",n.tokenValue),this.token=n.tokenValue,console.log("login successful!"),this.emitter.emit("LOGIN_SUCCESSFUL")),e.next=12;break;case 11:this.emitter.emit("LOGIN_ERROR");case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0),this.emitter.emit("LOGIN_ERROR");case 18:case"end":return e.stop()}}),e,this,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getLoggedUser",value:function(){var e=Object(B.a)(P.a.mark((function e(t){var a,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(ue.ngrokServer,"/chat/user/").concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,this.loggedUser=n,this.emitter.emit("GET_LOGGED_USER_SUCCESS"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.warn(e.t0),this.emitter.emit("GET_LOGGED_USER_ERROR");case 15:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),de=a(372),pe=a(380),ge=a(373),he=a(374),Ee=a(93),fe=a(91),be=a.n(fe),ve=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={email:"",password:"",isValid:!0,isLoading:!1,error:"",loginToken:""},r.handleChange=function(e){r.setState(Object(d.a)({},e.target.name,e.target.value))},r.add=function(){r.setState({isLoading:!0});var e={email:r.state.email,password:r.state.password};r.userStore=new me,r.userStore.login(e),r.userStore.emitter.addListener("LOGIN_SUCCESSFUL",(function(){r.setState({isLoading:!1,loginToken:r.userStore.token}),window.location.reload(!1)})),r.userStore.emitter.addListener("LOGIN_ERROR",(function(){r.setState({isValid:!1,error:r.userStore.error,isLoading:!1})}))},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.isLoading,n=t.isValid,r=t.error;return i.a.createElement(de.a,{component:"main",maxWidth:"xs"},i.a.createElement(v.a,null),i.a.createElement("div",{className:e.paper},i.a.createElement(pe.a,{className:e.avatar},i.a.createElement(be.a,null)),i.a.createElement(O.a,{component:"h1",variant:"h5"},"Autentificare"),i.a.createElement("form",{className:e.form,noValidate:!0},i.a.createElement(U.a,{container:!0,spacing:2},i.a.createElement(U.a,{item:!0,xs:12},i.a.createElement(N.a,{variant:"outlined",fullWidth:!0,id:"email",size:"small",label:"Email",name:"email",type:"email",onChange:this.handleChange})),i.a.createElement(U.a,{item:!0,xs:12},i.a.createElement(N.a,{variant:"outlined",fullWidth:!0,name:"password",label:"Parol\u0103",size:"small",type:"password",id:"password",onChange:this.handleChange})),n?i.a.createElement("div",null):i.a.createElement("div",{style:{marginLeft:"10px",color:"red"}},r)),i.a.createElement(A.a,{fullWidth:!0,variant:"contained",color:"primary",disabled:a,className:e.submit,onClick:this.add},"Autentificare",a&&i.a.createElement(ge.a,{size:34,className:e.circularProgress})),i.a.createElement(U.a,{container:!0},i.a.createElement(U.a,{item:!0,xs:!0},i.a.createElement(he.a,{href:"#",variant:"body2"},"Ai uitat parola?")),i.a.createElement(U.a,{item:!0},i.a.createElement(he.a,{href:"#/register",variant:"body2"},"Nu ai cont? \xcenregistreaz\u0103-te"))))))}}]),a}(s.Component),ye=Object(_.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},circularProgress:{color:Ee.a[500],position:"absolute",top:"36%",marginTop:-12}}}))(ve),Se=a(179),Ce=a.n(Se),Oe=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={fullName:"",username:"",password:"",confirmPassword:"",email:"",error:"",isValid:!0,isLoading:!1},r.userStore=new me,r.handleChange=function(e){r.setState(Object(d.a)({},e.target.name,e.target.value))},r.isPasswordValid=function(e){var t=e.password,a=e.confirmPassword;return t.length<6?(r.setState({error:"Parola trebuie s\u0103 aib\u0103 minim 6 caractere!"}),!1):t===a||(r.setState({error:"Parolele trebuie s\u0103 fie identice!"}),!1)},r.add=function(){r.setState({isLoading:!0});var e={name:r.state.fullName,username:r.state.username,password:r.state.password,email:r.state.email,photoURL:"http://gravatar.com/avatar/".concat(Ce()(r.state.email),"?d=identicon")};console.log(e),r.isPasswordValid(r.state)?(r.userStore.addUser(e),r.userStore.emitter.addListener("USER_ADD_SUCCESSFUL",(function(){r.setState({isLoading:!1}),r.props.history.push("/login")})),r.userStore.emitter.addListener("USER_ADD_ERROR",(function(){r.setState({isValid:!1,error:r.userStore.error,isLoading:!1})}))):r.setState({isValid:!1,isLoading:!1})},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.isValid,n=t.error,r=t.isLoading;return i.a.createElement(de.a,{component:"main",maxWidth:"xs"},i.a.createElement(v.a,null),i.a.createElement("div",{className:e.paper},i.a.createElement(pe.a,{className:e.avatar},i.a.createElement(be.a,null)),i.a.createElement(O.a,{component:"h1",variant:"h5"},"\xcenregistrare"),i.a.createElement("form",{className:e.form,noValidate:!0},i.a.createElement(U.a,{container:!0,spacing:2},i.a.createElement(U.a,{item:!0,xs:12,sm:6},i.a.createElement(N.a,{name:"fullName",variant:"outlined",size:"small",fullWidth:!0,id:"fullName",label:"Nume Complet",onChange:this.handleChange})),i.a.createElement(U.a,{item:!0,xs:12,sm:6},i.a.createElement(N.a,{variant:"outlined",fullWidth:!0,size:"small",id:"username",label:"Nume Utilizator",onChange:this.handleChange,name:"username"})),i.a.createElement(U.a,{item:!0,xs:12},i.a.createElement(N.a,{variant:"outlined",fullWidth:!0,size:"small",id:"email",label:"Email",onChange:this.handleChange,name:"email"})),i.a.createElement(U.a,{item:!0,xs:12},i.a.createElement(N.a,{variant:"outlined",fullWidth:!0,size:"small",name:"password",label:"Parol\u0103",type:"password",onChange:this.handleChange,id:"password"})),i.a.createElement(U.a,{item:!0,xs:12},i.a.createElement(N.a,{variant:"outlined",fullWidth:!0,size:"small",name:"confirmPassword",label:"Confirm\u0103 Parola",type:"password",onChange:this.handleChange,id:"confirmPassword"})),a?i.a.createElement("div",null):i.a.createElement("div",{style:{marginLeft:"10px",color:"red"}},n)),i.a.createElement(A.a,{fullWidth:!0,variant:"contained",color:"primary",disabled:r,className:e.submit,onClick:this.add},"\xcenregistrare",r&&i.a.createElement(ge.a,{size:34,className:e.circularProgress})),i.a.createElement(U.a,{container:!0,justify:"flex-end"},i.a.createElement(U.a,{item:!0},i.a.createElement(he.a,{href:"#/login",variant:"body2"},"Ai deja cont? Autentific\u0103-te!"))))))}}]),a}(s.Component),xe=Object(_.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},circularProgress:{color:Ee.a[500],position:"absolute",top:"36%",marginTop:-12}}}))(Oe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je=a(180),ke=a.n(je),we=a(46),Re=a(183),Le=a(50),_e=a(181),Ue={currentUser:null,isLoading:!0},Ne={messages:[],context:null,isTyping:!1},Ae=Object(Le.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return{currentUser:t.payload.currentUser,isLoading:!1};case"CLEAR_USER":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1});default:return e}},message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":return Object(p.a)(Object(p.a)({},e),{},{messages:e.messages.concat(new Y.Message({id:t.payload.chatBubbleId,message:t.payload.message})),context:t.payload.context,isTyping:t.payload.isTyping});default:return e}}}),Te=a(375),Ie=Object(R.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(1)},marginTop:"95%",marginLeft:"10%",marginBlockEnd:"20%"}}}));function Ge(){var e=Ie(),t=i.a.useState(0),a=Object(m.a)(t,2),n=a[0],r=a[1],c=i.a.useState(10),o=Object(m.a)(c,2),s=o[0],l=o[1],u=i.a.useRef((function(){}));return i.a.useEffect((function(){u.current=function(){if(n>100)r(0),l(10);else{var e=10*Math.random(),t=10*Math.random();r(n+e),l(n+e+t)}}})),i.a.useEffect((function(){var e=setInterval((function(){u.current()}),500);return function(){clearInterval(e)}}),[]),i.a.createElement("div",{className:e.root},i.a.createElement(Te.a,{variant:"buffer",value:n,valueBuffer:s}),i.a.createElement(Te.a,{variant:"buffer",value:n,valueBuffer:s,color:"secondary"}))}var De=Object(Le.createStore)(Ae,Object(_e.composeWithDevTools)()),Me=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new me,a=ke()();a?(t.getLoggedUser(a),t.emitter.addListener("GET_LOGGED_USER_SUCCESS",(function(){var a={chatBubbleId:1,content:"Salut "+t.loggedUser.username+"! Eu sunt Tia, cu ce te pot ajuta?",context:"greet"};e.props.addMessage(a,!1),e.props.setUser(t.loggedUser),e.props.history.push("/")}))):(this.props.history.push("/login"),this.props.clearUser())}},{key:"render",value:function(){return this.props.isLoading?i.a.createElement(Ge,null):i.a.createElement(we.c,null,i.a.createElement(we.a,{path:"/",exact:!0,component:le}),i.a.createElement(we.a,{path:"/register",component:xe}),i.a.createElement(we.a,{path:"/login",component:ye}))}}]),a}(i.a.Component),Pe=Object(we.f)(Object(G.b)((function(e){return{isLoading:e.user.isLoading}}),{setUser:function(e){return{type:"SET_USER",payload:{currentUser:e}}},clearUser:function(){return{type:"CLEAR_USER"}},addMessage:D})(Me)),Be=function(){u.a.render(i.a.createElement(G.a,{store:De},i.a.createElement(Re.a,null,i.a.createElement(Pe,null))),document.getElementById("root"))};window.cordova?document.addEventListener("deviceready",(function(){Be()}),!1):Be(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t){e.exports={ngrokServer:"http://127.0.0.1:8080",tokenSecret:"*$9&1&bPsOGeu6Eu$a&&3bGeMd"}}},[[190,1,2]]]);
//# sourceMappingURL=main.9656d122.chunk.js.map