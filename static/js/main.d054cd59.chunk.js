(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/logotip.88cffa30.svg"},28:function(e,t,a){e.exports=a.p+"static/media/load.eaf33723.gif"},44:function(e,t,a){e.exports=a(69)},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(38),l=a.n(r),c=(a(49),a(50),a(51),a(52),a(53),a(54),a(23)),i=a.n(c),o=a(7);var m=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),n.a.createElement("p",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"),n.a.createElement(o.a,{to:"/main",className:"App-link"},"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e")))},u=a(43),d=a(4),h=a(27),p=a(14),E=a(15),v=a(8),b=a(17),f=a(16),N=a(28),k=a.n(N),g=a(3),w=a.n(g),y=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var s;return Object(p.a)(this,a),(s=t.call(this,e)).restApiSign=s.restApiSign.bind(Object(v.a)(s)),s.handleUserInput=s.handleUserInput.bind(Object(v.a)(s)),s.state={errorMessage:"",load:"hidden",username:" ",password:" ",usernameValid:!1,passwordValid:!1,fromValid:!1},s}return Object(E.a)(a,[{key:"restApiSign",value:function(e){var t=this;if(e.preventDefault(),this.state.fromValid){var a={username:this.state.username,password:this.state.password};this.setState({load:"visible"}),fetch("https://emphasoft-test-assignment.herokuapp.com/api-token-auth/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.ok?e:Promise.reject(e)})).then((function(e){return e.json()})).then((function(e){t.setState({load:"hidden",errorMessage:""}),localStorage.setItem("Token",e.token),o.b.push("/main")})).catch((function(e){var a="";a=400===e.status?"Wrong password or username":"Error",t.setState({load:"hidden",errorMessage:a})}))}else this.validateField("username",this.state.username),this.validateField("password",this.state.password)}},{key:"handleUserInput",value:function(e){var t=this,a=e.target.name,s=e.target.value;this.setState(Object(h.a)({},a,s),(function(){t.validateField(a,s)}))}},{key:"validateField",value:function(e,t){switch(e){case"password":this.setState({passwordValid:!/^(?=.*[A-Z])(?=.*\d).{8,128}$/.test(t)});break;case"username":this.setState({usernameValid:!/^[\w.@+-]{1,150}$/.test(t)})}this.setState({fromValid:!this.state.usernameValid&&!this.state.passwordValid})}},{key:"render",value:function(){var e=this;return s.createElement("div",null,s.createElement("div",{className:"block-signIn"},s.createElement("img",{className:"loader",style:{visibility:this.state.load},src:k.a,alt:"Load"}),s.createElement("p",{className:"block-signIn_label"},"Please sign in"),s.createElement("form",{onSubmit:this.restApiSign,className:"form-signIn"},s.createElement("input",{className:w()("form-signIn__input",{"has-error":this.state.usernameValid}),onChange:this.handleUserInput,autoComplete:"off",type:"text",placeholder:"Type your username",name:"username"}),s.createElement("input",{className:w()("form-signIn__input",{"has-error":this.state.passwordValid}),onChange:this.handleUserInput,autoComplete:"off",type:"password",placeholder:"Type your password",name:"password"}),s.createElement("ul",{className:"form-errors"},s.createElement("li",{className:w()("form-noerrors",{"has-error__text":this.state.usernameValid})},'Username should be 1+ characters(max - 150), only english letters and "@", "." , "+", "-", "_"'),s.createElement("li",{className:w()("form-noerrors",{"has-error__text":this.state.passwordValid})},"Password should be 8+ characters(max - 128), 1 capital, 1 numeric")),s.createElement("p",{className:"errorMessage"},this.state.errorMessage),s.createElement("button",{className:"submitBtn",onClick:function(){return e.restApiSign}},"Sign in"),s.createElement("div",{className:"form-signIn blockLink"},s.createElement(o.a,{className:"form-signIn__linkRegister",to:"/main"},"Go to main page")))))}}]),a}(s.Component),S=function(e){var t=e.user,a=e.updateData,s=e.index;return n.a.createElement("tr",{className:"users-table-line",onClick:function(){return a({active:s})}},n.a.createElement("td",{className:"users-table-column"},t.id),n.a.createElement("td",{className:"users-table-column"},t.username),n.a.createElement("td",{className:"users-table-column"},t.first_name))},j=function(e){var t=e.data,a=e.active;if(!t||!t[a])return n.a.createElement("div",{className:"user-active"},n.a.createElement("p",{className:"user-choose"},"Select User"));var s=t[a];return n.a.createElement("div",{className:"user-active"},n.a.createElement("div",{className:"user-active__border"},n.a.createElement("p",{className:"user-active__username"},s.username),n.a.createElement("table",{className:"table table-dark"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{className:"userActive-table-column"},"First name:"),n.a.createElement("td",{className:"userActive-table-column"},""===s.username?"Empty":s.username)),n.a.createElement("tr",null,n.a.createElement("td",{className:"userActive-table-column"},"Last name:"),n.a.createElement("td",{className:"userActive-table-column"},""===s.last_name?"Empty":s.last_name)),n.a.createElement("tr",null,n.a.createElement("td",{className:"userActive-table-column"},"Active:"),n.a.createElement("td",{className:"userActive-table-column"},s.is_active?"true":"false")),n.a.createElement("tr",null,n.a.createElement("td",{className:"userActive-table-column"},"Last login:"),n.a.createElement("td",{className:"userActive-table-column"},null==s.last_login?"Never":new Date(Date.parse(s.last_login)).toLocaleString())),n.a.createElement("tr",null,n.a.createElement("td",{className:"userActive-table-column"},"Super user:"),n.a.createElement("td",{className:"userActive-table-column"},s.is_superuser?"true":"false"))))))},O=function(e){var t=e.term,a=e.data,s=e.update;return n.a.createElement("div",{className:"users-search"},n.a.createElement("input",{value:t,type:"text",className:"form-control",placeholder:"Search people by username...",onChange:function(e){var t=e.target.value,n=a.filter((function(e){return e.username.startsWith(t)}));s({data:n,active:0,term:t,errorMessage:0===n.length?"Can't search user by "+t:""})}}))},C=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var s;return Object(p.a)(this,a),(s=t.call(this,e)).sort=s.sort.bind(Object(v.a)(s)),s.reset=s.reset.bind(Object(v.a)(s)),s}return Object(E.a)(a,[{key:"sort",value:function(){var e=this.props.id?1:-1,t=[].slice.call(this.props.data).sort((function(t,a){return t.id===a.id?0:t.id>a.id?e:-1*e}));this.props.updateData({data:t,id:!this.props.id})}},{key:"reset",value:function(){this.props.updateData({active:0,term:"",data:this.props.filterData})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"users-sort"},n.a.createElement("button",{className:"btn-sort",onClick:function(){return e.sort()}},"Sort by id"),n.a.createElement("button",{className:"btn btn-danger btn-reset",onClick:this.reset},"Reset"))}}]),a}(n.a.Component),_=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var s;return Object(p.a)(this,a),(s=t.call(this,e)).showUsers=s.showUsers.bind(Object(v.a)(s)),s.updateData=s.updateData.bind(Object(v.a)(s)),s.sort=s.sort.bind(Object(v.a)(s)),s.state={load:"hidden",errorMessage:"",data:[],filterData:[],active:0,term:"",id:!0},s}return Object(E.a)(a,[{key:"updateData",value:function(e){this.setState(e)}},{key:"showUsers",value:function(){var e=this;this.setState({load:"visible"}),fetch("https://emphasoft-test-assignment.herokuapp.com/api/v1/users/",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Token "+localStorage.getItem("Token")}}).then((function(e){return e.ok?e:Promise.reject(e)})).then((function(e){return e.json()})).then((function(t){e.setState({load:"hidden",errorMessage:"",data:t,filterData:t})})).catch((function(t){var a="";a=401===t.status?"Please authorized":"Error",e.setState({load:"hidden",errorMessage:a})}))}},{key:"sort",value:function(){var e=this.state.id?1:-1,t=[].slice.call(this.state.data).sort((function(t,a){return t.id===a.id?0:t.id>a.id?e:-1*e}));this.setState({data:t,id:!this.state.id})}},{key:"render",value:function(){var e=this;return s.createElement("div",{className:"users-content"},s.createElement("img",{className:"loaderForTable",style:{visibility:this.state.load},src:k.a,alt:"Load"}),s.createElement("button",{className:"table-btn submitBtn",onClick:function(){return e.showUsers()}},"Show users"),s.createElement("p",{className:"errorForTable"},this.state.errorMessage),s.createElement("div",{className:"users-content__instruments"},s.createElement("div",{className:"users-content__instruments log"},s.createElement(C,{id:this.state.id,data:this.state.data,filterData:this.state.filterData,updateData:this.updateData}),s.createElement(O,{data:this.state.filterData,update:this.updateData,term:this.state.term}))),s.createElement("div",{className:"user-info"},s.createElement(j,{data:this.state.data,active:this.state.active}),s.createElement("div",{className:"users-table"},s.createElement("table",{className:"table table-dark"},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",{className:"users-table-column id-sort",onClick:this.sort},"Id",s.createElement("svg",{className:w()("bi bi-chevron-up svg-icon",{"svg-down":!this.state.id},{"svg-up":!(0===this.state.data.length)}),width:"18",height:"18",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},s.createElement("path",{"fill-rule":"evenodd",d:"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"}))),s.createElement("th",{className:"users-table-column"},"Username"),s.createElement("th",{className:"users-table-column"},"First name"))),s.createElement("tbody",null,this.state.data.map((function(t,a){return s.createElement(S,{user:t,key:t.id,index:a,updateData:e.updateData})})))))))}}]),a}(s.Component),B=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var s;return Object(p.a)(this,a),(s=t.call(this,e)).dropdownMenu=s.dropdownMenu.bind(Object(v.a)(s)),s.showBlock=s.showBlock.bind(Object(v.a)(s)),s.showElement=s.showElement.bind(Object(v.a)(s)),s.default=s.default.bind(Object(v.a)(s)),s.state={dropdown:!1,users:!0,news:!1,shop:!1,tea:!1,support:!1},s}return Object(E.a)(a,[{key:"dropdownMenu",value:function(){this.setState({dropdown:!this.state.dropdown})}},{key:"default",value:function(){this.setState({users:!1,news:!1,shop:!1,tea:!1,support:!1})}},{key:"showBlock",value:function(e){this.default(),this.setState(Object(h.a)({},e,!this.state.name))}},{key:"showElement",value:function(){return this.state.users?s.createElement(_,null):this.state.shop?s.createElement("h3",null,"Here will be shop"):this.state.support?s.createElement("h3",null,"I don't have any support"):this.state.tea?s.createElement("h3",null,"I want a tea too"):this.state.news?s.createElement("h3",null,"Here will be news"):null}},{key:"render",value:function(){var e=this;return s.createElement("div",null,s.createElement("header",{className:"header"},s.createElement("div",{className:"header-container"},s.createElement(o.a,{to:"/main",className:"header-logo"},s.createElement("img",{className:"header-logo__image",src:i.a,alt:"Logo"})),s.createElement("div",{className:"header-items"},s.createElement(o.a,{onClick:function(){return e.showBlock("news")},className:w()("header-item header-link",{"header-link-activeBlock":this.state.news})},s.createElement("p",{className:"header-label"},"NEWS")),s.createElement(o.a,{onClick:function(){return e.showBlock("shop")},className:w()("header-item header-link",{"header-link-activeBlock":this.state.shop})},s.createElement("p",{className:"header-label"},"SHOP")),s.createElement(o.a,{onClick:function(){return e.showBlock("users")},className:w()("header-item header-link",{"header-link-activeBlock":this.state.users})},s.createElement("p",{className:"header-label"},"USERS")),s.createElement(o.a,{onClick:function(){return e.showBlock("tea")},className:w()("header-item header-link",{"header-link-activeBlock":this.state.tea})},s.createElement("p",{className:"header-label"},"TEA"))),s.createElement("div",{className:"header-profileItems"},s.createElement(o.a,{onClick:function(){return e.showBlock("support")},className:w()("header-item header-link",{"header-link-activeBlock":this.state.support})},s.createElement("p",{className:"header-label"},"Support")),s.createElement(o.a,{onClick:this.dropdownMenu,className:w()("header-item header-link",{"header-link-active":this.state.dropdown})},s.createElement("p",{className:"header-label"},"Menu"),s.createElement("span",null)))),s.createElement("div",null,s.createElement("div",{className:w()("header-accountDropdownLogged",{"is-open":this.state.dropdown})},s.createElement("div",{className:"header-items menu"},s.createElement("ul",{className:"menu-items"},s.createElement("li",{className:w()("menu-item",{activeBlock:this.state.news})},s.createElement(o.a,{onClick:function(){return e.showBlock("news")},className:w()("header-item header-link")},s.createElement("p",{className:"header-label"},"NEWS"))),s.createElement("li",{className:w()("menu-item",{activeBlock:this.state.shop})},s.createElement(o.a,{onClick:function(){return e.showBlock("shop")},className:w()("header-item header-link")},s.createElement("p",{className:"header-label"},"SHOP"))),s.createElement("li",{className:w()("menu-item",{activeBlock:this.state.users})},s.createElement(o.a,{onClick:function(){return e.showBlock("users")},className:w()("header-item header-link")},s.createElement("p",{className:"header-label"},"USERS"))),s.createElement("li",{className:w()("menu-item",{activeBlock:this.state.tea})},s.createElement(o.a,{onClick:function(){return e.showBlock("tea")},className:w()("header-item header-link")},s.createElement("p",{className:"header-label"},"TEA"))))),s.createElement("div",{className:"header-sectionLogin"},s.createElement(o.a,{to:"/login",className:"header-accountDropdownButtonLink"},"Log in"))))),s.createElement(this.showElement,null))}}]),a}(s.Component);l.a.render(n.a.createElement(u.a,{basename:"/reactUsers"},n.a.createElement(d.a,{path:"/",component:B}),n.a.createElement(d.a,{path:"/main",component:B}),n.a.createElement(d.a,{path:"/login",component:y}),n.a.createElement(d.a,{path:"/*",component:m})),document.getElementById("red"))}},[[44,1,2]]]);
//# sourceMappingURL=main.d054cd59.chunk.js.map