(this["webpackJsonpTinder-but-for-movies"]=this["webpackJsonpTinder-but-for-movies"]||[]).push([[0],{117:function(e,t,a){e.exports={container:"Matches_container__tINFD"}},118:function(e,t,a){e.exports={banner:"LicensBanner_banner__m3fFM"}},135:function(e,t,a){},136:function(e,t,a){},18:function(e,t,a){e.exports={container:"Profile_container__3TYu4",header:"Profile_header__22TfC",headerContainer:"Profile_headerContainer__bx_U1",flexWrapper:"Profile_flexWrapper__3Vq3w",userName:"Profile_userName__38P1i",userInfo:"Profile_userInfo__jWXno",userPhoto:"Profile_userPhoto__lcLiC",menu:"Profile_menu__1ckjN",menuBlob:"Profile_menuBlob__3OFQ2",footer:"Profile_footer__3uzvv",share:"Profile_share__yep9s"}},21:function(e,t,a){e.exports={movie_card:"Card_movie_card__31i-o",overlay:"Card_overlay__C9xri",movie_info:"Card_movie_info__3dReZ",fadein:"Card_fadein__3OLXs",movieBox:"Card_movieBox__3CML_",categories_list:"Card_categories_list__31FJt",activeGenre:"Card_activeGenre__2qsu5",bottom_box:"Card_bottom_box__2M2Ma",action_label:"Card_action_label__18pZ6",like:"Card_like__1EB_U",nope:"Card_nope__ujmgo",super_like:"Card_super_like__2kzqF"}},25:function(e,t,a){e.exports={container:"EditInfo_container__2RloJ",hide:"EditInfo_hide__1b_Jg",header:"EditInfo_header__1oxuh",close:"EditInfo_close__3KlVg",body:"EditInfo_body__2XfRh",topInfo:"EditInfo_topInfo__3ua9B",flexWrapper:"EditInfo_flexWrapper__UFcxT",interest:"EditInfo_interest__12UwG",active:"EditInfo_active__2u6gt"}},262:function(e,t,a){"use strict";a.r(t);var c=a(29),i=a(0),n=a.n(i),s=a(38),r=a.n(s),o=(a(135),a(136),a(44)),l=a.n(o),d=a(12),j=a(42),b=a(2),h=function(){return Object(b.jsx)("div",{className:l.a.header,children:Object(b.jsxs)("div",{className:l.a.headerWrap,children:[Object(b.jsx)(d.a,{exact:!0,from:"/",to:"/app/recs"}),Object(b.jsx)(j.b,{to:"/app/recs",activeClassName:l.a.active,children:Object(b.jsx)("button",{children:Object(b.jsx)("i",{className:"material-icons",children:"local_fire_department"})})}),Object(b.jsx)(j.b,{to:"/app/likes",activeClassName:l.a.active,children:Object(b.jsx)("button",{children:Object(b.jsx)("i",{className:"material-icons",children:"favorite"})})}),Object(b.jsx)(j.b,{to:"/app/matches",activeClassName:l.a.active,children:Object(b.jsx)("button",{children:Object(b.jsx)("i",{className:"material-icons",children:"forum"})})}),Object(b.jsx)(j.b,{to:"/app/profile",activeClassName:l.a.active,children:Object(b.jsx)("button",{children:Object(b.jsx)("i",{className:"material-icons",children:"account_circle"})})})]})})},u=a(19),m=a.n(u),_=a(36),O=a(11),x=a(41),p=a.n(x),v=a(32),f=(a(97),a(98),{apiKey:"AIzaSyDcMfWHX5YJCD4HK7Zu6K0VFNTSQ3BHzGo",authDomain:"test-ea2aa.firebaseapp.com",projectId:"test-ea2aa",databaseURL:"https://test-ea2aa.firebaseio.com",storageBucket:"test-ea2aa.appspot.com",messagingSenderId:"1036010806515",appId:"1:1036010806515:web:8efa8150f1a181921dab86"});v.a.apps.length||v.a.initializeApp(f);var g=a(37),N=a.n(g),k=a(125),y=a(49),w=a(115),S=a(21),L=a.n(S),C=function(e){var t=Object(i.useState)((function(){return new Set})),a=Object(O.a)(t,1)[0],n=Object(y.b)((function(){return{xy:[0,0]}})),s=Object(O.a)(n,2),r=s[0].xy,o=s[1],l=e.callback;console.log(e);var d=Object(w.a)((function(t){var c=t.down,i=t.delta,n=t.velocity,s=t.xy,r=t.event,d=n,j=Math.abs(i[0])>window.innerWidth/3,b=i[1]<-window.innerHeight/3,h=n>.2||j||b,u=i[0]<0?-1:1;!c&&h&&a.add(e.movie.id),n=Object(k.a)(n,1,8),a.has(e.movie.id)?(!j&&b?l({id:e.movie.id,type:2,poster_path:e.movie.poster_path}):h&&!b&&l(u>0?{id:e.movie.id,type:1,poster_path:e.movie.poster_path}:{id:e.movie.id,type:0,poster_path:e.movie.poster_path}),o({xy:[h&&!b?(200+window.innerWidth)*u:0,!j&&b?-window.innerHeight:0],config:{mass:n/2,tension:1e3*n,friction:50}})):(0!==d||c||"mousedown"!==r.type||(s[1]>window.innerHeight/3*2?console.log(e.movie.overview):s[0]<window.innerWidth/2?console.log("Prev img"):console.log("Next img")),o({xy:c?i:[0,0],config:{mass:n/2,tension:1e3*n,friction:50}}))}));return Object(b.jsxs)(y.a.div,Object(c.a)(Object(c.a)({className:L.a.movie_card},d()),{},{style:{transform:r.interpolate((function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px,0) rotate(").concat(-e/(window.innerWidth/20),"deg)")}))},children:[Object(b.jsx)(y.a.div,{className:L.a.action_label+" "+L.a.like,style:{opacity:r.interpolate((function(e,t){return"".concat(e/(window.innerWidth/4))}))},children:"Like"}),Object(b.jsx)(y.a.div,{className:L.a.action_label+" "+L.a.nope,style:{opacity:r.interpolate((function(e,t){return"".concat(e/(-window.innerWidth/4))}))},children:"Nope"}),Object(b.jsx)("div",{className:L.a.bottom_box,children:Object(b.jsx)(y.a.div,{className:L.a.action_label+" "+L.a.super_like,style:{opacity:r.interpolate((function(e,t){return"".concat(t/(-window.innerHeight/4))}))},children:"Super Like"})}),Object(b.jsx)("div",{className:L.a.overlay}),Object(b.jsx)("img",{alt:e.movie.name,src:e.movie.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.movie.poster_path):"https://m.media-amazon.com/images/S/sash/8ZhQrGnWn9cWUVQ.png"}),Object(b.jsxs)("div",{className:L.a.movieBox,children:[Object(b.jsxs)("div",{className:L.a.movie_info,children:[Object(b.jsx)("h2",{children:e.movie.title}),Object(b.jsx)("p",{children:e.movie.release_date}),Object(b.jsxs)("p",{children:["Rating ",e.movie.vote_average]})]}),Object(b.jsx)("ul",{className:L.a.categories_list,children:e.movie.genre_ids.map((function(t,a){return Object(b.jsx)("li",{className:e.interests.genres.includes(t.toString())?L.a.activeGenre:"",children:e.genreNames.find((function(e){return e.id===t})).name},t.toString())}))})]})]}))};C.contextType=n.a.createContext({genreNames:[],userIntrests:[]});var I=C,P=v.a.database(),T=function(){var e=Object(i.useState)([]),t=Object(O.a)(e,2),a=t[0],c=t[1],n=Object(i.useState)({}),s=Object(O.a)(n,2),r=s[0],o=s[1],l=Object(i.useState)(null),d=Object(O.a)(l,2),j=d[0],h=d[1],u=Object(i.useState)(null),x=Object(O.a)(u,2),f=x[0],g=x[1],k=Object(i.useState)(1),y=Object(O.a)(k,2),w=y[0],S=y[1],L=function(){var e=[];return P.ref("users/".concat(v.a.auth().currentUser.uid,"/interests")).on("value",(function(t){var a;e=null!==(a=t.val())&&void 0!==a?a:[]})),{genres:e}};return Object(i.useEffect)(Object(_.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),[]),Object(i.useEffect)((function(){var e=r.id,t=r.type,i=r.poster_path;if("number"!==typeof e)return!1;P.ref("".concat(v.a.auth().currentUser.uid,"/movies")).push().set({id:e,type:t,poster_path:i,date:(new Date).getTime()});var n=a;n.pop(),c(n),n.length<=2&&S((function(e){return e+1}))}),[r]),Object(i.useEffect)(Object(_.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()("https://api.themoviedb.org/3/genre/movie/list?api_key=a9d0af555a3bf6a117089d98841fcd0e&language=en-US");case 2:return t=e.sent,g(t.data.genres),h(L()),e.next=7,p()("https://api.themoviedb.org/3/discover/movie?api_key=a9d0af555a3bf6a117089d98841fcd0e&language=en&page=".concat(w,"&vote_average.gte=6.9&sort_by=popularity.desx&include_video=true"));case 7:a=e.sent,c((function(e){return a.data.results.concat(e)}));case 9:case"end":return e.stop()}}),e)}))),[w]),Object(b.jsxs)("div",{className:N.a.container,children:[Object(b.jsx)("div",{className:N.a.movies,children:null!==f&&null!==j?a.map((function(e,t){return 0===a.length?Object(b.jsx)("div",{children:"No more fortnite!!!"}):Object(b.jsx)(I,{callback:o,interests:j,genreNames:f,movie:e})})):null}),Object(b.jsxs)("div",{className:N.a.footer,children:[Object(b.jsx)("button",{className:N.a.redo,children:Object(b.jsx)("i",{className:"material-icons",children:"restart_alt"})}),Object(b.jsx)("button",{className:N.a.nope,children:Object(b.jsx)("i",{className:"material-icons",children:"clear"})}),Object(b.jsx)("button",{className:N.a.super_like,children:Object(b.jsx)("i",{className:"material-icons",children:"star"})}),Object(b.jsx)("button",{className:N.a.like,children:Object(b.jsx)("i",{className:"material-icons",children:"favorite"})}),Object(b.jsx)("button",{className:N.a.bolt,children:Object(b.jsx)("i",{className:"material-icons",children:"bolt"})})]})]})},E=a(277),U=a(28),B=a.n(U),W=v.a.database(),M=function(){var e=Object(i.useState)(8),t=Object(O.a)(e,2),a=t[0],c=t[1],n=Object(i.useState)([]),s=Object(O.a)(n,2),r=s[0],o=s[1],l=Object(i.useState)(!0),d=Object(O.a)(l,2),j=d[0],h=d[1],u=Object(i.useState)(0),x=Object(O.a)(u,2),p=x[0],f=x[1],g=Object(i.useRef)(null);document.title="Liked Movies";var N=function(){var e=Object(_.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:W.ref("".concat(v.a.auth().currentUser.uid,"/movies")).orderByChild("date").limitToFirst(a).on("value",function(){var e=Object(_.a)(m.a.mark((function e(t){var a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=null!==(a=t.val())&&void 0!==a?a:{},o(Object.values(c));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){W.ref("".concat(v.a.auth().currentUser.uid,"/movies")).once("value").then((function(e){return f(e.numChildren())}))}),[]),Object(i.useEffect)(Object(_.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:case"end":return e.stop()}}),e)}))),[a]),Object(b.jsxs)("div",{className:B.a.container,children:[Object(b.jsx)(E.a,{onClick:function(){g.current.scrollTo(0,0)},className:"".concat(B.a.goUp," ").concat(j?"":B.a.active),children:Object(b.jsx)("i",{className:"material-icons",children:"keyboard_arrow_up"})}),Object(b.jsxs)("div",{ref:g,className:B.a.movieGallery,onScroll:function(e){var t=0===e.target.scrollTop,i=Math.round(e.target.scrollHeight-e.target.scrollTop)/4*3<=e.target.clientHeight;h(!!t),i&&c(a+4)},children:[Object(b.jsx)("div",{className:B.a.topbox,children:Object(b.jsxs)("h2",{children:[p," movie ratings"]})}),r.map((function(e,t){return Object(b.jsxs)("div",{className:"".concat(B.a.ratedMovie," ").concat(0===e.type?B.a.nope:1===e.type?B.a.like:B.a.super_like),children:[Object(b.jsx)("img",{alt:t.toString(),src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"https://m.media-amazon.com/images/S/sash/8ZhQrGnWn9cWUVQ.png"}),Object(b.jsx)("div",{className:B.a.rating})]})})),a>=p?Object(b.jsx)("div",{className:B.a.endBox,children:"You reach the end\ud83d\ude80"}):null]})]})},G=a(117),A=a.n(G),H=(v.a.database(),function(e){return Object(b.jsxs)("div",{className:A.a.container,children:["Your matches ",Object(b.jsx)("br",{}),"Chats and groups"]})}),R=a(18),D=a.n(R),F=a(39),Q=a(119),z=a(279),J=a(30),K=a(7),Y=a.n(K),Z=a(278),X=a(280),V=a(118),q=a.n(V),$=function(){return Object(b.jsxs)("div",{className:q.a.banner,children:["Tinder, but for movies \xa9 2021",Object(b.jsx)("br",{}),"(NOT ASSOCIATED WITH Tinder)"]})},ee=function(e){var t=n.a.useState({rememberMe:!0,RTU:!0,notifications:!0,useInterests:!0,useActors:!0,useLanguage:!0,useLocation:!0,useGenres:!0}),a=Object(O.a)(t,2),i=a[0],s=a[1],r=function(e){s(Object(c.a)(Object(c.a)({},i),{},Object(J.a)({},e.target.name,e.target.checked)))};return Object(b.jsxs)("div",{className:"".concat(Y.a.container," ").concat(e.show?"":Y.a.hide),children:[Object(b.jsxs)("div",{className:Y.a.header,children:[Object(b.jsx)("h2",{children:"Settings"}),Object(b.jsx)("h2",{onClick:e.callback,className:Y.a.close,children:"Done"})]}),Object(b.jsx)(F.a,{children:function(e){var t,a=e.user;return Object(b.jsxs)("div",{className:Y.a.body,children:[Object(b.jsx)("h2",{children:"Account Settings"}),a.email?Object(b.jsxs)("div",{className:Y.a.colum,children:[Object(b.jsx)("div",{children:"Email"}),Object(b.jsx)("div",{children:a.email})]}):null,a.phoneNumber?Object(b.jsxs)("div",{className:Y.a.colum,children:[Object(b.jsx)("div",{children:"Phone Number"}),Object(b.jsx)("div",{children:a.providerData[0].providerId})]}):null,Object(b.jsxs)("div",{className:Y.a.colum,children:[Object(b.jsx)("div",{children:"Login Method"}),Object(b.jsx)("div",{children:a.providerData[0].providerId})]}),Object(b.jsxs)("div",{className:Y.a.colum,children:[Object(b.jsx)("div",{children:"Remember Me"}),Object(b.jsx)("div",{children:Object(b.jsx)(X.a,{checked:i.rememberMe,onChange:r,color:"primary",name:"rememberMe",inputProps:{"aria-label":"primary checkbox"}})})]}),Object(b.jsxs)("div",{className:Y.a.signOut,children:[Object(b.jsx)(Z.a,{onClick:function(){v.a.auth().signOut()},variant:"contained",children:"Sign out"}),Object(b.jsx)(Z.a,{variant:"contained",color:"secondary",children:"DELETE USER"})]}),Object(b.jsx)("h2",{children:"App Settings"}),Object(b.jsxs)("div",{className:Y.a.colum,children:[Object(b.jsx)("div",{children:"Theme"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("i",{className:"material-icons",children:"brightness_low"}),Object(b.jsx)("i",{className:"material-icons",children:"brightness_medium"}),Object(b.jsx)("i",(t={className:Y.a.activeTheme},Object(J.a)(t,"className","material-icons"),Object(J.a)(t,"children","brightness_high"),t))]})]}),Object(b.jsx)("h2",{children:"Privacy setting"}),Object(b.jsxs)("div",{className:Y.a.colum,children:[Object(b.jsx)("div",{children:"Profile type"}),Object(b.jsxs)("div",{children:["Public",Object(b.jsx)("i",{className:"material-icons",children:"public"})]})]}),Object(b.jsxs)("div",{className:Y.a.colum,children:[Object(b.jsx)("div",{children:"People and Groups"}),Object(b.jsx)("div",{children:Object(b.jsx)("i",{className:"material-icons",children:"arrow_forward_ios"})})]}),Object(b.jsxs)("div",{className:Y.a.colum,children:[Object(b.jsx)("div",{children:"Store interests"}),Object(b.jsx)("div",{children:Object(b.jsx)(X.a,{checked:i.useInterests,onChange:r,color:"primary",name:"useInterests",inputProps:{"aria-label":"primary checkbox"}})})]}),Object(b.jsxs)("div",{className:Y.a.colum,children:[Object(b.jsx)("div",{children:"Background Sync"}),Object(b.jsxs)("div",{children:["On",Object(b.jsx)("i",{className:"material-icons",children:"sync"})]})]}),Object(b.jsxs)("div",{className:Y.a.colum,children:[Object(b.jsx)("div",{children:"Real Time Update"}),Object(b.jsxs)("div",{children:["On",Object(b.jsx)("i",{className:"material-icons",children:"sync"})]})]}),Object(b.jsxs)("div",{className:Y.a.colum,children:[Object(b.jsx)("div",{children:"Notifications"}),Object(b.jsxs)("div",{children:["On",Object(b.jsx)("i",{className:"material-icons",children:"arrow_forward_ios"})]})]}),Object(b.jsxs)("div",{className:Y.a.colum,children:[Object(b.jsx)("div",{children:"Privacy Policy"}),Object(b.jsx)("div",{children:Object(b.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",children:["Read me",Object(b.jsx)("i",{className:"material-icons",children:"arrow_forward_ios"})]})})]}),Object(b.jsx)("h2",{children:"Content Delivery"}),Object(b.jsxs)("div",{className:Y.a.colum,children:[Object(b.jsx)("div",{children:"Use Interests"}),Object(b.jsx)("div",{children:Object(b.jsx)(X.a,{checked:i.useInterests,onChange:r,color:"secondary",name:"useInterests",inputProps:{"aria-label":"secondary checkbox"}})})]}),Object(b.jsxs)("div",{className:Y.a.colum,children:[Object(b.jsx)("div",{children:"Actors"}),Object(b.jsx)("div",{children:Object(b.jsx)(X.a,{checked:i.useInterests&&i.useActors,onChange:r,color:"primary",name:"useActors",inputProps:{"aria-label":"primary checkbox"}})})]}),Object(b.jsxs)("div",{className:Y.a.colum,children:[Object(b.jsx)("div",{children:"Use Language"}),Object(b.jsx)("div",{children:Object(b.jsx)(X.a,{checked:i.useInterests&&i.useLanguage,onChange:r,color:"primary",name:"useLanguage",inputProps:{"aria-label":"primary checkbox"}})})]}),Object(b.jsxs)("div",{className:Y.a.colum,children:[Object(b.jsx)("div",{children:"Use Location"}),Object(b.jsx)("div",{children:Object(b.jsx)(X.a,{checked:i.useInterests&&i.useLocation,onChange:r,color:"primary",name:"useLocation",inputProps:{"aria-label":"primary checkbox"}})})]}),Object(b.jsxs)("div",{className:Y.a.colum,children:[Object(b.jsx)("div",{children:"Genres"}),Object(b.jsx)("div",{children:Object(b.jsx)(X.a,{checked:i.useInterests&&i.useGenres,onChange:r,color:"primary",name:"useGenres",inputProps:{"aria-label":"primary checkbox"}})})]}),Object(b.jsx)($,{})]})}})]})},te=a(25),ae=a.n(te),ce=v.a.database(),ie=function(e){var t=Object(i.useState)([]),a=Object(O.a)(t,2),c=a[0],n=a[1],s=Object(i.useState)([]),r=Object(O.a)(s,2),o=r[0],l=r[1],d=function(){return ce.ref("users/".concat(v.a.auth().currentUser.uid,"/interests"))},j=function(){var e=[];return d().on("value",(function(t){var a;e=null!==(a=t.val())&&void 0!==a?a:[]})),e},h=function(e){var t=e.target.classList,a=t.contains(ae.a.active),c=e.target.dataset.genreId,i=d(),n=j();a&&n.includes(c)?n.indexOf(c)>-1&&n.splice(n.indexOf(c),1):a||n.includes(c)||n.push(c),i.set(n),l(n),a?t.remove(ae.a.active):t.add(ae.a.active)};return Object(i.useEffect)((function(){l(j())}),[]),Object(i.useEffect)(Object(_.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()("https://api.themoviedb.org/3/genre/movie/list?api_key=a9d0af555a3bf6a117089d98841fcd0e&language=en-US");case 2:t=e.sent,n(t.data.genres);case 4:case"end":return e.stop()}}),e)}))),[]),Object(b.jsxs)("div",{className:"".concat(ae.a.container," ").concat(e.show?"":ae.a.hide),children:[Object(b.jsxs)("div",{className:ae.a.header,children:[Object(b.jsx)("h2",{children:"Your Interests"}),Object(b.jsxs)("h2",{onClick:e.callback,className:ae.a.close,children:["Done",Object(b.jsx)("i",{className:"material-icons",children:"keyboard_arrow_right"})]})]}),Object(b.jsxs)("div",{className:ae.a.body,children:[Object(b.jsx)("div",{className:ae.a.topInfo,children:"Select a couple of genres you'd like to base our movie suggetions on"}),Object(b.jsx)("div",{className:ae.a.flexWrapper,children:c.map((function(e,t){return Object(b.jsx)("div",{onClick:h,className:"".concat(ae.a.interest," ").concat(o.includes(e.id.toString())?ae.a.active:""),"data-genre-id":e.id,children:e.name})}))})]})]})},ne=function(){var e=Object(i.useState)(!1),t=Object(O.a)(e,2),a=t[0],c=t[1],n=Object(i.useState)(!1),s=Object(O.a)(n,2),r=s[0],o=s[1];document.title="Your Profile";var l=function(){c((function(e){return!e}))},d=function(){o((function(e){return!e}))};return Object(b.jsxs)("div",{className:D.a.container,children:[Object(b.jsx)(ie,{show:r,callback:d}),Object(b.jsx)(ee,{show:a,callback:l}),Object(b.jsx)("div",{className:D.a.header,children:Object(b.jsx)("div",{className:D.a.headerContainer,children:Object(b.jsxs)("div",{className:D.a.flexWrapper,children:[Object(b.jsx)(F.a,{children:function(e){var t=e.user;return Object(b.jsxs)("div",{className:D.a.userInfo,children:[Object(b.jsx)("img",{alt:"",className:D.a.userPhoto,src:t.photoURL||"/Tinder-but-for-movies/blank-profile-picture.png"}),Object(b.jsx)("div",{className:D.a.userName,children:t.displayName})]})}}),Object(b.jsxs)("div",{className:D.a.menu,children:[Object(b.jsxs)("div",{className:D.a.menuBlob,children:[Object(b.jsx)(E.a,{onClick:l,"aria-label":"settings",children:Object(b.jsx)(z.a,{children:"settings"})}),Object(b.jsx)("div",{children:"Settings"})]}),Object(b.jsxs)("div",{className:D.a.menuBlob,children:[Object(b.jsxs)(E.a,{color:"secondary","aria-label":"upload",children:[Object(b.jsx)("input",{type:"file",hidden:!0,id:"actual-btn"}),Object(b.jsx)("label",{for:"actual-btn",children:Object(b.jsx)(z.a,{children:"upload"})})]}),Object(b.jsx)("div",{children:"Add imdb ratings"})]}),Object(b.jsxs)("div",{className:D.a.menuBlob,children:[Object(b.jsx)(E.a,{onClick:d,"aria-label":"edit info",children:Object(b.jsx)(z.a,{children:"edit"})}),Object(b.jsx)("div",{children:"Edit info"})]})]})]})})}),Object(b.jsx)("div",{className:D.a.footer,children:Object(b.jsxs)("div",{className:"".concat(D.a.menuBlob," ").concat(D.a.shareContainer),children:[Object(b.jsx)(E.a,{color:"primary","aria-label":"share",className:D.a.share,children:Object(b.jsx)(Q.a,{data:{text:"Swipe movies and find matches",url:"https://developer.runeharlyk.dk/Explore/files/Tinder%20For%20Movies/index.html",title:"Tinder, but for movie"},children:Object(b.jsx)(z.a,{children:"share"})})}),Object(b.jsx)("div",{children:"Share"}),Object(b.jsx)($,{})]})})]})};var se=function(){return Object(b.jsxs)(j.a,{className:"App",children:[Object(b.jsx)(h,{}),Object(b.jsxs)(d.d,{children:[Object(b.jsx)(d.b,{exact:!0,path:"/",children:Object(b.jsx)(d.a,{to:"/app/matches"})}),Object(b.jsx)(d.b,{path:"/app/recs",children:Object(b.jsx)(T,{})}),Object(b.jsx)(d.b,{path:"/app/likes",children:Object(b.jsx)(M,{})}),Object(b.jsx)(d.b,{path:"/app/matches",children:Object(b.jsx)(H,{})}),Object(b.jsx)(d.b,{path:"/app/profile",children:Object(b.jsx)(ne,{})})]})]})},re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,281)).then((function(t){var a=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),i(e),n(e),s(e)}))},oe=a(120),le=a(48),de=a.n(le);function je(){return Object(b.jsxs)("div",{className:de.a.main,children:[Object(b.jsxs)("div",{className:de.a.container,children:[Object(b.jsx)("h2",{children:"Login"}),Object(b.jsx)("div",{className:de.a.buttonContainer,children:Object(b.jsx)(Z.a,{className:de.a.loginButton,variant:"contained",onClick:function(){var e=new v.a.auth.GoogleAuthProvider;v.a.auth().signInWithPopup(e)},children:"Sign In with Google"})})]}),Object(b.jsxs)("div",{className:de.a.movingBackground,children:[Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{})]})]})}var be=a(124);r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsxs)(F.b,Object(c.a)(Object(c.a)({firebase:v.a},f),{},{children:[Object(b.jsxs)(oe.a,{children:[Object(b.jsx)("title",{children:"Rune Harlyk"}),Object(b.jsx)("link",{rel:"icon",href:"/favicon.ico"}),Object(b.jsx)("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"}),Object(b.jsx)("link",{rel:"manifest",href:"%PUBLIC_URL%/manifest.json"}),Object(b.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),Object(b.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}),Object(b.jsx)("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),Object(b.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"})]}),Object(b.jsx)(F.d,{children:function(){return Object(b.jsx)(je,{})}}),Object(b.jsx)(F.c,{children:function(){return Object(b.jsx)(be.a,Object(c.a)(Object(c.a)({firebase:v.a},f),{},{children:Object(b.jsx)(se,{})}))}})]}))}),document.getElementById("root")),re()},28:function(e,t,a){e.exports={container:"Likes_container__1Fjp6",movieGallery:"Likes_movieGallery__2Tt35",topbox:"Likes_topbox__Jl7Hs",fill:"Likes_fill__1dsrE",endBox:"Likes_endBox__1DtLO",ratedMovie:"Likes_ratedMovie__h5pma",rating:"Likes_rating__36JhA",nope:"Likes_nope__2OuyD",like:"Likes_like__1YBKQ",super_like:"Likes_super_like__3FcjU",goUp:"Likes_goUp__d4RHm",active:"Likes_active__3xEdx"}},37:function(e,t,a){e.exports={container:"Swiping_container__3dCou",movies:"Swiping_movies__2awow",footer:"Swiping_footer__3UL5M",redo:"Swiping_redo__2hpL7",nope:"Swiping_nope__3U5rP",super_like:"Swiping_super_like__3ZTyH",like:"Swiping_like__1Ai7M",bolt:"Swiping_bolt__LRNlB",fadein:"Swiping_fadein__1WUmQ"}},44:function(e,t,a){e.exports={header:"Header_header__1zb-o",headerWrap:"Header_headerWrap__1Ks4T",active:"Header_active__2pui9"}},48:function(e,t,a){e.exports={main:"Login_main__1LlZG",movingBackground:"Login_movingBackground__OE63F","float-1":"Login_float-1__3xvtP","float-2":"Login_float-2__Theo5","float-3":"Login_float-3__1-QE9","float-4":"Login_float-4__1rDIt","float-5":"Login_float-5__2e3TK","float-6":"Login_float-6__3lmIr",container:"Login_container__2tEPP",loginButton:"Login_loginButton__25LO8",buttonContainer:"Login_buttonContainer__10AP5"}},7:function(e,t,a){e.exports={container:"Settings_container__1053L",hide:"Settings_hide__1y_2w",header:"Settings_header__L25PA",close:"Settings_close__3_Qgr",body:"Settings_body__334WX",signOut:"Settings_signOut__207bT",warning:"Settings_warning__3zx-T",colum:"Settings_colum__33rMU",activeTheme:"Settings_activeTheme__29C_I"}}},[[262,1,2]]]);
//# sourceMappingURL=main.9fc044c0.chunk.js.map