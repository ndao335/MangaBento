(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(e,t){var a={login:function(e,t,a){return{type:"LOGIN",payload:{username:e,accessToken:t,bookmarks:a}}},logout:function(){return{type:"LOGOUT"}},addBookmark:function(e){return{type:"ADD_BOOKMARK",payload:e}},removeBookmark:function(e){return{type:"REMOVE_BOOKMARK",payload:e}}};e.exports=a},43:function(e,t,a){"use strict";(function(e){var n=a(12),c=function(e){return{type:"GET_MANGA_INFO",payload:Object(n.a)({},e)}};e.exports=c,t.a=c}).call(this,a(31)(e))},54:function(e,t,a){},56:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a.n(c),r=a(20),o=a.n(r),i=a(11),l=a(14),j=a(3),d=(a(54),Object(i.b)((function(e){return{user:e.user}}),(function(e){return{logout:function(){e(Object(l.logout)())}}}))((function(e){return Object(n.jsx)("div",{children:Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light",children:[Object(n.jsx)(j.b,{className:"navbar-brand",to:"/",children:Object(n.jsx)("img",{className:"logo",src:"./logo.png",alt:"MangaBento"})}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(n.jsx)("ul",{className:"navbar-nav",children:localStorage.getItem("user")?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(j.b,{className:"nav-link",to:"/bookmark",children:"Favorites"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link",onClick:e.logout,href:"/",children:"Log Out"})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(j.b,{className:"nav-link",to:"/login",children:"Log In"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(j.b,{className:"nav-link",to:"/register",children:"Register"})})]})})})]})})}))),m=(a(56),function(e){return Object(n.jsxs)("footer",{children:[Object(n.jsx)(j.b,{className:"navbar-brand",to:"/",children:Object(n.jsx)("img",{className:"logo",src:"./logo.png",alt:"MangaBento"})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:"Copyright \xa9 by Nathaniel Dao"}),Object(n.jsxs)("p",{children:["Contact me: ",Object(n.jsx)("a",{href:"mailto:nathanielxd94@gmail.com",children:"nathanielxd94@gmail.com"})]})]})]})}),u=a(15),b=a(4),g=a(7),h=a.n(g),p=a(5),O=a(43),x=(a(74),Object(i.b)(null,(function(e){return{mangaInfo:function(t){e(Object(O.a)(t))}}}))((function(e){var t=Object(p.e)();return Object(n.jsxs)("div",{className:"mangaCard d-inline-block",onClick:function(a){h.a.get("http://localhost:5000/api/manga/".concat(e.manga.id)).then((function(a){e.mangaInfo(a.data),t.push("/manga")}))},children:[Object(n.jsx)("img",{src:"data:image/jpeg; base64, ".concat(e.manga.image),alt:e.manga.name}),Object(n.jsx)("div",{children:function(e){var t=[];return e.split(" ").forEach((function(e){t.push(e.charAt(0).toUpperCase()+e.slice(1))})),t.join(" ")}(e.manga.name)})]})}))),f=(a(75),function(e){var t=s.a.useState(""),a=Object(b.a)(t,2),c=a[0],r=a[1],o=s.a.useState([]),i=Object(b.a)(o,2),l=i[0],d=i[1],m=s.a.useState([]),g=Object(b.a)(m,2),p=g[0],O=g[1];s.a.useEffect((function(){h.a.get("http://localhost:5000/api/manga").then((function(e){d(Object(u.a)(e.data)),O(Object(u.a)(e.data))}))}),[]);s.a.useEffect((function(){var e=l.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));d(e)}),[c]);var f=function(e){var t=l;switch(e){case"views":t=l.sort((function(e,t){return e.views<t.views?1:-1})),d(t);break;case"rating":t=l.sort((function(e,t){return e.rating<t.rating?1:-1})),d(t);break;case"letter":t=l.sort((function(e,t){return e.name<t.name?1:-1})),d(t);break;case"comedy":t=p.filter((function(e){return e.genres.includes("Comedy")})),d(t);break;case"fantasy":t=p.filter((function(e){return e.genres.includes("Fantasy")})),d(t);break;default:d(p)}};return Object(n.jsxs)("div",{className:"homePage container-fluid",children:[Object(n.jsx)("div",{className:"row",style:{textAlign:"center"},children:Object(n.jsx)("div",{className:"col-lg-12",children:Object(n.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:Object(n.jsx)("input",{type:"text",value:c,onChange:function(e){d(p),r(e.target.value)},placeholder:"Search Mangas",className:"searchManga"})})})}),Object(n.jsxs)("div",{className:"mainContainer",children:[Object(n.jsxs)("div",{className:"viewContainer d-flex flex-column text-center",children:[Object(n.jsx)("h4",{children:"Manga by genres:"}),Object(n.jsxs)("ul",{className:"d-flex flex-column text-center",children:[Object(n.jsx)(j.b,{onClick:function(){f("default")},children:"Default"}),Object(n.jsx)(j.b,{onClick:function(){f("views")},children:"Highest View"}),Object(n.jsx)(j.b,{onClick:function(){f("rating")},children:"Rating View"}),Object(n.jsx)(j.b,{onClick:function(){f("comedy")},children:"Comedy"}),Object(n.jsx)(j.b,{onClick:function(){f("fantasy")},children:"Fantasy"})]})]}),Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"midContent",children:[Object(n.jsx)("div",{className:"title text-center",children:Object(n.jsx)("h2",{children:"Read Manga Online"})}),Object(n.jsx)("div",{className:"justify-content-between",children:Object(n.jsx)("div",{className:"mangaContainer",children:l.map((function(e,t){return Object(n.jsx)(x,{manga:{name:e.name,id:e.id,image:e.image}},t)}))})})]})}),Object(n.jsx)("div",{className:"sideview-container",children:Object(n.jsx)("img",{className:"clipimage",src:"./sideview.jpeg",alt:"sideview"})})]})]})}),v=(a(76),function(e){var t=Object(c.useState)(""),a=Object(b.a)(t,2),s=a[0],r=a[1],o=Object(c.useState)(""),i=Object(b.a)(o,2),l=i[0],d=i[1],m=Object(c.useState)(""),u=Object(b.a)(m,2),g=u[0],p=u[1];return Object(n.jsx)("div",{className:"registerPage",style:{backgroundImage:'url("./sideview.jpeg")'},children:Object(n.jsxs)("div",{className:"registerForm",children:[Object(n.jsx)("img",{className:"logo",src:"./logo.png",alt:"MangaBento"}),Object(n.jsx)("h4",{children:"Register"}),Object(n.jsxs)("p",{children:["Already registed? ",Object(n.jsx)(j.b,{className:"nav-link",to:"/register",children:"Login"})]}),Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),h.a.post("http://localhost:5000/api/user/signup",{username:s,password:l,email:g}).then((function(t){r(""),d(""),p(""),e.history.push("/login")})).catch((function(e){return alert(e)}))},children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{required:!0,type:"text",value:s,onChange:function(e){r(e.target.value)},className:"form-control",placeholder:"Username"})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{required:!0,type:"text",value:g,onChange:function(e){p(e.target.value)},className:"form-control",placeholder:"Email"})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{required:!0,type:"password",value:l,onChange:function(e){d(e.target.value)},className:"form-control",placeholder:"Password"})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("button",{className:"btn btn-primary btn-block",children:"Submit"})})]})]})})}),N=a(44),y=a.n(N),k=a(45),w=a.n(k),C=(a(77),Object(i.b)(null,(function(e){return{login:function(t,a,n){e(Object(l.login)(t,a,n))}}}))((function(e){var t=Object(c.useState)(""),a=Object(b.a)(t,2),r=a[0],o=a[1],i=Object(c.useState)(""),l=Object(b.a)(i,2),d=l[0],m=l[1],u=Object(c.useState)(!1),g=Object(b.a)(u,2),p=g[0],O=g[1],x=Object(c.useState)({}),f=Object(b.a)(x,2),v=f[0],N=f[1];return Object(n.jsxs)("div",{class:"container",style:{backgroundImage:'url("./sideview.jpeg")'},children:[Object(n.jsx)("script",{src:"https://apis.google.com/js/platform.js",async:!0,defer:!0}),Object(n.jsx)("meta",{name:"google-signin-client_id",content:"1050954081973-n1u9uvkipun891krjs8ehj5kpbharvt1.apps.googleusercontent.com"}),!p&&Object(n.jsx)(s.a.Fragment,{children:Object(n.jsx)("div",{className:"loginPage",children:Object(n.jsxs)("div",{className:"loginForm",children:[Object(n.jsx)("img",{className:"logo",src:"./logo.png",alt:"MangaBento"}),Object(n.jsx)("h4",{children:"Log In"}),Object(n.jsxs)("p",{children:["Haven't register? ",Object(n.jsx)(j.b,{className:"nav-link",to:"/register",children:"Register"})]}),Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),h.a.post("http://localhost:5000/api/user/signin",{username:r,password:d}).then((function(t){if(t.data.accessToken){var a=t.data,n=a.username,c=a.accessToken,s=a.bookmarks;e.login(n,c,s),o(""),m(""),e.history.push("/")}})).catch((function(e){console.log(e),alert("Incorrect username or password")}))},children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{required:!0,type:"text",value:r,onChange:function(e){o(e.target.value)},className:"form-control",placeholder:"Username"})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{required:!0,type:"password",value:d,onChange:function(e){m(e.target.value)},className:"form-control",placeholder:"Password"})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("button",{className:"btn btn-primary btn-block",children:"Submit"})})]}),Object(n.jsx)(y.a,{appId:"502330741034696",autoLoad:!1,fields:"name,email,picture",scope:"public_profile,user_friends",callback:function(e){console.log(e),N(e),e.accessToken?(console.log(v),O(!0)):O(!1)},icon:"fa-facebook"}),Object(n.jsx)(w.a,{className:"GoogleButton",clientId:"1050954081973-n1u9uvkipun891krjs8ehj5kpbharvt1.apps.googleusercontent.com",cookiePolicy:"single_host_origin",callback:function(e){console.log(e),N(e),e.accessToken?O(!0):O(!1)},icon:"fa-google"})]})})})]})})));var S=Object(i.b)((function(e){return{manga:e.mangaInfo,user:e.user}}),(function(e){return{addBookmark:function(t){e(Object(l.addBookmark)(t))},removeBookmark:function(t){e(Object(l.removeBookmark)(t))}}}))((function(e){Object(c.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"}),""===e.manga.name&&e.history.push("/")}));var t=function(){e.user.username&&e.manga._id?h.a.post("http://localhost:5000/api/user/bookmarks",{username:e.user.username,mangaId:e.manga._id}).then((function(t){-1!==e.user.bookmarks.indexOf(e.manga._id)?e.removeBookmark(e.manga._id):e.addBookmark(e.manga._id)})):console.log("Invalid request")},a=function(e){var t=[];return e.split(" ").forEach((function(e){t.push(e.charAt(0).toUpperCase()+e.slice(1))})),t.join(" ")};return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row",style:{marginTop:"30px",padding:"20px",backgroundColor:"#fff",borderRadius:"5px"},children:[Object(n.jsxs)("div",{className:"col-lg-3 d-flex flex-column align-items-center",children:[Object(n.jsx)("img",{src:"../".concat(e.manga.thumbnail),alt:"algo",className:"img-fluid",style:{width:"300px",height:"375px"}}),e.user.isLogged?-1!==e.user.bookmarks.indexOf(e.manga._id)?Object(n.jsx)("button",{onClick:t,className:"btn btn-block btn-danger",style:{marginTop:"5px",maxWidth:"300px"},children:"Remove Favorite"}):Object(n.jsx)("button",{onClick:t,className:"btn btn-block btn-primary",style:{marginTop:"5px",maxWidth:"300px"},children:"Add Favorite"}):Object(n.jsx)("button",{disabled:!0,className:"btn btn-block btn-primary",style:{marginTop:"5px",maxWidth:"300px"},children:"Add Favorite"})]}),Object(n.jsxs)("div",{className:"col-lg-8 d-flex flex-column align-items-start justify-content-start",style:{marginTop:"10px",wordWrap:"break-word",textAlign:"start"},children:[Object(n.jsxs)("p",{children:["Name: ",a(e.manga.name)]}),Object(n.jsxs)("p",{children:["Alternative: ",e.manga.alternative]}),Object(n.jsxs)("p",{children:["Author: ",a(e.manga.author)]}),Object(n.jsxs)("p",{children:["Genres: ",e.manga.genres.map((function(e){return Object(n.jsxs)("span",{children:[e," | "]})}))]}),Object(n.jsxs)("p",{children:["Rating: ",e.manga.rating,"/5"]}),Object(n.jsxs)("p",{children:["Description: ",e.manga.description]}),Object(n.jsxs)("p",{children:["Views: ",e.manga.views]})]})]}),Object(n.jsxs)("div",{className:"row",style:{backgroundColor:"#fff",paddingTop:"15px"},children:[Object(n.jsx)("div",{className:"col-lg-12",children:Object(n.jsx)("h3",{style:{textAlign:"start"},children:"Chapters"})}),Object(n.jsxs)("ul",{className:"col-lg-12",style:{listStyle:"none",maxHeight:"225px",padding:"0px 15px",overflowY:"auto"},children:[Object(n.jsx)("li",{className:"col-lg-3",style:{display:"inline"},children:Object(n.jsx)(j.b,{style:{color:"#000"},to:{pathname:"/readmanga",state:{displayName:a(e.manga.name),name:e.manga.name,chapter:1}},children:" Chapter 1"})}),Object(n.jsx)("li",{className:"col-lg-3",style:{display:"inline"},children:Object(n.jsx)(j.b,{style:{color:"#000"},to:{pathname:"/readmanga",state:{displayName:a(e.manga.name),name:e.manga.name,chapter:2}},children:" Chapter 2"})}),Object(n.jsx)("li",{className:"col-lg-3",style:{display:"inline"},children:Object(n.jsx)(j.b,{style:{color:"#000"},to:{pathname:"/readmanga",state:{displayName:a(e.manga.name),name:e.manga.name,chapter:3}},children:" Chapter 3"})})]})]})]})})),I=a(30);var B=function(e){var t=Object(c.useState)([]),a=Object(b.a)(t,2),s=a[0],r=a[1],o=e.location.state.name.split(" ").join("-"),i=e.location.state.chapter;return Object(c.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]),Object(c.useEffect)((function(){h.a.get("http://localhost:5000/api/manga/".concat(o,"/").concat(i)).then((function(e){var t=Object(u.a)(e.data);r(t)})),h.a.post("http://localhost:5000/api/manga/updateView",{name:e.location.state.name}).catch((function(e){return alert(e)})),1===e.location.state.chapter?document.getElementById("previousButton").style.display="none":3===e.location.state.chapter&&(document.getElementById("nextButton").style.display="none")})),Object(n.jsxs)("div",{className:"container-fluid d-flex flex-column justify-content-center align-items-center",style:{minHeight:"calc(100vh - 56px)",backgroundColor:"#000"},children:[Object(n.jsx)("div",{className:"d-flex flex-row justify-content-between",style:{marginTop:"10px",width:"100%"},children:Object(n.jsxs)("div",{style:{color:"red"},children:[Object(n.jsx)(j.b,{style:{color:"#fff"},to:"/",children:"Home"})," / ",Object(n.jsxs)(j.b,{style:{color:"#fff"},to:"/manga",children:[e.location.state.displayName," "]})," / Chapter ",i]})}),Object(n.jsx)("ul",{className:"d-flex flex-column justify-content-center align-items-center",style:{padding:"10px 0px"},children:s.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)("img",{src:"data:image/jpeg; base64, ".concat(e),className:"img-fluid",alt:""})},t)}))}),Object(n.jsx)("div",{className:"col-lg-12",style:{margin:"10px"},children:Object(n.jsxs)("div",{className:"d-flex flex-row justify-content-center align-items-center",children:[Object(n.jsx)(j.b,{to:{pathname:"/readmanga",state:{displayName:e.location.state.displayName,name:e.location.state.name,chapter:e.location.state.chapter-1}},onClick:function(){return window.location.reload()},children:Object(n.jsx)(I.a,{id:"previousButton",className:"btn btn-success",style:{marginRight:"5px"},children:"Previous chapter"})}),Object(n.jsx)(j.b,{to:{pathname:"/readmanga",state:{displayName:e.location.state.displayName,name:e.location.state.name,chapter:e.location.state.chapter+1}},onClick:function(){return window.location.reload()},children:Object(n.jsx)(I.a,{id:"nextButton",className:"btn btn-success",style:{marginLeft:"5px"},children:"Next chapter"})})]})})]})};var A=Object(i.b)((function(e){return{user:e.user}}),null)((function(e){var t=Object(c.useState)([]),a=Object(b.a)(t,2),s=a[0],r=a[1];return Object(c.useEffect)((function(){h.a.get("http://localhost:5000/api/user/bookmarks/".concat(e.user.username)).then((function(e){console.log(e),r(Object(u.a)(e.data))}))})),Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)("div",{className:"row",style:{marginTop:"30px",textAlign:"center"},children:Object(n.jsx)("div",{className:"col-lg-12",children:Object(n.jsx)("h1",{children:"Favorites"})})}),Object(n.jsx)("div",{className:"d-flex justify-content-center",children:Object(n.jsx)("div",{className:"col-lg-10 d-flex flex-wrap justify-content-center",children:s.map((function(e,t){return Object(n.jsx)(x,{manga:{name:e.name,id:e.id,image:e.image}},t)}))})})]})})),T=(a(40),function(e){var t=Object(c.useState)(""),a=Object(b.a)(t,2),s=a[0],r=a[1],o=Object(c.useState)(""),i=Object(b.a)(o,2),l=i[0],j=i[1],d=Object(c.useState)(""),m=Object(b.a)(d,2),u=m[0],g=m[1],p=Object(c.useState)([]),O=Object(b.a)(p,2),x=O[0],f=O[1],v=Object(c.useState)(""),N=Object(b.a)(v,2),y=N[0],k=N[1];return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("form",{onSubmit:function(e){var t=document.getElementById("genreInput").value.toString().split("|");f(t),e.preventDefault(),h.a.post("http://localhost:5000/api/manga/uploaddata",{name:s,alternative:l,author:u,genres:x,description:y,thumbnail:s.replace(" ","-")+".jpeg"}).then((function(e){r(""),j(""),g(""),f(""),k("")})).catch((function(e){return alert(e)}))},children:[Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{for:"mangaName",children:"Manga Name"}),Object(n.jsx)("input",{required:!0,type:"text",value:s,onChange:function(e){r(e.target.value)},className:"form-control",placeholder:"Manga Name"})]}),Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{for:"alternativeName",children:"Manga Alternative Name"}),Object(n.jsx)("input",{required:!0,type:"text",value:l,onChange:function(e){j(e.target.value)},className:"form-control",placeholder:"Alternative Name"})]}),Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{for:"authorName",children:"Author"}),Object(n.jsx)("input",{required:!0,type:"text",value:u,onChange:function(e){g(e.target.value)},className:"form-control",placeholder:"Author Name"})]}),Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{for:"genres",children:"Genres"}),Object(n.jsx)("input",{id:"genreInput",required:!0,type:"text",className:"form-control",placeholder:"Genre(s)"}),Object(n.jsx)("small",{id:"genreHelp",class:"form-text text-muted",children:'Seperate genres by " | " with no space'})]}),Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{for:"description",children:"Description"}),Object(n.jsx)("input",{required:!0,type:"text",value:y,onChange:function(e){k(e.target.value)},className:"form-control",placeholder:"Description"})]}),Object(n.jsx)("button",{className:"btn btn-primary",children:"Submit"})]})})}),E=a(17),M=a(12),_={name:"",alternative:"",author:"",genres:[],rating:0,description:"",thumbnail:"",views:0},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_MANGA_INFO":return Object(M.a)(Object(M.a)({},e),n);default:return e}},L={isLogged:!1,username:"",bookmarks:[]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"LOGIN":return localStorage.setItem("user",JSON.stringify(n.accessToken)),Object(M.a)(Object(M.a)({},e),{},{isLogged:!0,username:n.username,bookmarks:n.bookmarks});case"LOGOUT":return localStorage.removeItem("user"),{isLogged:!1,username:""};case"ADD_BOOKMARK":var c=e.bookmarks;return c.push(n),Object(M.a)(Object(M.a)({},e),{},{bookmarks:c});case"REMOVE_BOOKMARK":var s=e.bookmarks;return s.splice(s.indexOf(n),1),Object(M.a)(Object(M.a)({},e),{},{bookmarks:s});default:return e}},R=Object(E.b)({user:D,mangaInfo:F}),G=Object(E.c)(R),q=(a(78),a(41),a(79),function(e){return Object(c.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]),Object(n.jsx)(i.a,{store:G,children:Object(n.jsxs)("div",{className:"appDiv",children:[Object(n.jsx)(d,{}),Object(n.jsx)(p.a,{exact:!0,path:"/",component:f}),Object(n.jsx)(p.a,{exact:!0,path:"/register",component:v}),Object(n.jsx)(p.a,{exact:!0,path:"/login",component:C}),Object(n.jsx)(p.a,{exact:!0,path:"/admin",component:T}),Object(n.jsx)(p.a,{path:"/manga",component:S}),Object(n.jsx)(p.a,{path:"/readmanga",component:B}),Object(n.jsx)(p.a,{path:"/bookmark",component:A}),Object(n.jsx)(m,{})]})})}),P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,82)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};a(80);o.a.render(Object(n.jsx)(j.a,{children:Object(n.jsx)(q,{})}),document.getElementById("root")),P()}},[[81,1,2]]]);
//# sourceMappingURL=main.c5bc35c3.chunk.js.map