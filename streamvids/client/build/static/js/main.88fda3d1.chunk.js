(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(17),r=a.n(o),i=a(18),s=a(2),c=(a(68),a(69),a(70),a(10)),m=a(11),d=a(13),u=a(12),p=a(38),g=a(23),f=a(22),h=a.n(f),v=(a(89),a(62)),b=(a(90),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={pager:{}},n}return Object(m.a)(a,[{key:"componentWillMount",value:function(){this.props.items&&this.props.items.length&&this.setPage(this.props.initialPage),console.log(this.props.items)}},{key:"componentDidUpdate",value:function(e,t){this.props.items!==e.items&&this.setPage(this.props.initialPage)}},{key:"setPage",value:function(e){var t=this.props.items,a=this.state.pager;if(!(e<1||e>a.totalPages)){a=this.getPager(t.length,e,10,10);var n=t.slice(a.startIndex,a.endIndex+1);this.setState({pager:a}),console.log(n),console.log(this.props.onChangePage(n))}}},{key:"getPager",value:function(e,t,a,n){t=t||1,a=a||10,n=n||10;var l,o,r=Math.ceil(e/a);if(r<=n)l=1,o=r;else{var i=Math.ceil(n/2),s=i-1;t<=Math.floor(n/2)+1?(l=1,o=n):t+s>=r?(l=r-(n-1),o=r):(l=t-i,o=t+s),console.log(l),console.log(o)}var c=(t-1)*a,m=Math.min(c+a-1,e-1),d=Object(v.a)(Array(o+1-l).keys()).map(function(e){return l+e});return{totalItems:e,currentPage:t,pageSize:a,totalPages:r,startPage:l,endPage:o,startIndex:c,endIndex:m,pages:d}}},{key:"render",value:function(){var e=this,t=this.state.pager;return!t.pages||t.pages.length<=1?null:l.a.createElement("div",{style:{textAlign:"center",margin:"auto"}},l.a.createElement("nav",{"aria-label":"Page navigation example"},l.a.createElement("ul",{className:"pagination justify-content-center"},l.a.createElement("li",{style:{margin:"0"},className:"page-item ".concat(1===t.currentPage?"disabled":"")},l.a.createElement("a",{className:"page-link",style:{backgroundColor:"#1c2228 !important",color:"#fff !important"},tabindex:"-1",onClick:function(){return e.setPage(1)}},"First")),l.a.createElement("li",{style:{margin:"0"},className:"page-item ".concat(1===t.currentPage?"disabled":"")},l.a.createElement("a",{className:"page-link",style:{backgroundColor:"#1c2228 !important",color:"#fff !important"},onClick:function(){return e.setPage(t.currentPage-1)}},"Previous")),t.pages.map(function(a,n){return l.a.createElement("li",{style:{margin:"0"},key:n,className:"page-item ".concat(t.currentPage===a?"active":"")},l.a.createElement("a",{className:"page-link",style:{backgroundColor:"#1c2228 !important",color:"#fff !important"},onClick:function(){return e.setPage(a)}},a))}),l.a.createElement("li",{style:{margin:"0"},className:"page-item ".concat(t.currentPage===t.totalPages?"disabled":"")},l.a.createElement("a",{className:"page-link",style:{backgroundColor:"#1c2228 !important",color:"#fff !important"},onClick:function(){return e.setPage(t.currentPage+1)}},"Next")),l.a.createElement("li",{style:{margin:"0"},className:"page-item ".concat(t.currentPage===t.totalPages?"disabled":"")},l.a.createElement("a",{className:"page-link",style:{backgroundColor:"#1c2228 !important",color:"#fff !important"},onClick:function(){return e.setPage(t.totalPages)}},"Last")))))}}]),a}(l.a.Component));b.defaultProps={initialPage:1};var E=b,w=a(14),y=a.n(w),k=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={showTitle:!1,logoUrl:null,mobile:!1},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.innerWidth<=500&&this.setState({mobile:!0}),window.addEventListener("resize",function(){window.innerWidth<=500?e.setState({mobile:!0}):e.setState({mobile:!1})})}},{key:"render",value:function(){return l.a.createElement("div",{className:y.a.SlideContainer},l.a.createElement("div",{className:y.a.SlideInfo},this.props.logoUrl?l.a.createElement("div",{className:y.a.LogoImg},l.a.createElement("img",{src:this.props.logoUrl,alt:""})):l.a.createElement("div",{className:y.a.Title},l.a.createElement("h1",null,this.props.title)),this.props.caption?l.a.createElement("div",{className:y.a.CaptionContainer},l.a.createElement("h2",{className:y.a.Caption},this.props.caption)):l.a.createElement("div",{className:y.a.CaptionContainer}),this.props.overview?l.a.createElement("div",{className:y.a.Overview},this.props.overview):null),l.a.createElement("img",{alt:"",className:y.a.SliderImage,src:this.props.bgImage}))}}]),a}(n.Component),O=a(53),S=a.n(O),C=function(e){return l.a.createElement("div",{className:S.a.loader,style:e.addStyle},"Loading...")},I=(a(4),a(54)),N=a.n(I),P=a(55),j=a.n(P),_=a(56),x=a.n(_),L=(a(91),a(25)),A=a.n(L),U=a(19),T=a.n(U),M=a(32),B=a.n(M),W=a(20),D=a.n(W),F=a(33),R=a.n(F),H=(a(92),j()(N.a)),V=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={sliderData:[{id:1,logoUrl:A.a,bgImage:D.a},{id:2,logoUrl:T.a,bgImage:T.a},{id:3,logoUrl:B.a,bgImage:T.a},{id:4,logoUrl:T.a,bgImage:A.a},{id:5,logoUrl:D.a,bgImage:D.a},{id:6,logoUrl:A.a,bgImage:T.a},{id:7,logoUrl:D.a,bgImage:A.a},{id:8,logoUrl:B.a,bgImage:D.a}],loadFinished:!1},e}return Object(m.a)(a,[{key:"render",value:function(){var e=null,t=null;return 8===this.state.sliderData.length&&(e=this.state.sliderData.map(function(e,a){return t=l.a.createElement("div",{class:R.a.Loading},l.a.createElement(C,null)),l.a.createElement("div",{key:a},l.a.createElement(k,{bgImage:e.bgImage,logoUrl:e.logoUrl}))})),l.a.createElement("div",{className:R.a.SliderBox},8===this.state.sliderData.length?l.a.createElement(H,{startupScreen:t,play:!0,cssModule:x.a,interval:5e6},e):null)}}]),a}(n.Component),z=(a(51),a(29)),G=a(30),J=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={exampleItems:"",filteredItems:[],pageOfItems:[],videos:[]},e.onChangePage=e.onChangePage.bind(Object(g.a)(e)),e.handleFilter=e.handleFilter.bind(Object(g.a)(e)),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://cors-anywhere.herokuapp.com/http://xstreamvids.herokuapp.com/api/v1/videos").then(function(t){return e.setState({videos:t.data.videos})})}},{key:"componentDidUpdate",value:function(e,t){this.state.videos!==t.videos&&this.setState({filteredItems:this.state.videos})}},{key:"onChangePage",value:function(e){this.setState({pageOfItems:e})}},{key:"handleFilter",value:function(e){var t=e.currentTarget.value.toString().toLowerCase(),a=this.state.videos.filter(function(e){return e.title.toLowerCase().includes(t)});0===a.length&&a.push({id:0,title:""}),this.setState({filteredItems:a})}},{key:"render",value:function(){return console.log(this.state.filteredItems),console.log(this.state.filteredItems.length),console.log(this.state.pageOfItems),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(V,null)),l.a.createElement("div",{className:"container",style:{backgroundColor:"#1c2228"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{class:"main",style:{width:"100%",margin:"auto"}},l.a.createElement("div",{class:"form-group has-search",style:{width:"50%",margin:"auto",padding:"30px 0"}},l.a.createElement("span",{class:"fa fa-search form-control-feedback"},l.a.createElement(z.a,{icon:G.a,style:{color:"gray",width:"1rem",height:"1rem"}})),l.a.createElement("input",{type:"text",class:"form-control",placeholder:"Search Videos",onInput:this.handleFilter}))),this.state.videos?this.state.pageOfItems.map(function(e){return l.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12 padmobile"},l.a.createElement("div",null,l.a.createElement("iframe",{src:e.video,allow:"fullScreen; encrypted-media; picture-in-picture",allowfullscreen:!0,frameborder:"0"}),l.a.createElement("h6",{style:{textAlign:"center",color:"white"}},e.title)))}):l.a.createElement("h4",null,"loading...")),l.a.createElement("div",{style:{width:"100%",margin:"auto",padding:"30px 0"}},l.a.createElement(E,{items:this.state.filteredItems,onChangePage:this.onChangePage}))))}}]),a}(l.a.Component),q=a(16),X=(a(95),function(){var e=Object(n.useState)(!1),t=Object(q.a)(e,2),a=t[0],o=t[1],r=Object(n.useCallback)(function(){return o(!a)});return l.a.createElement("div",null,l.a.createElement("div",{class:"header"},l.a.createElement("ul",{className:"nav"},l.a.createElement("div",{className:"logo"},l.a.createElement("li",null,"StreamVids")),l.a.createElement("div",{className:"lists"},l.a.createElement("li",null,l.a.createElement(i.b,{to:"/"},"Home")),l.a.createElement("li",null,"Categories"),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/upload-a-video"},"Upload Videos")),l.a.createElement("li",null,"Login"),l.a.createElement("li",null,"Sign Up")))),l.a.createElement("input",{type:"checkbox",class:"openSidebarMenu",id:"openSidebarMenu"}),l.a.createElement("label",{for:"openSidebarMenu",class:"sidebarIconToggle",onClick:r},l.a.createElement("div",{class:"spinner diagonal part-1"}),l.a.createElement("div",{class:"spinner horizontal"}),l.a.createElement("div",{class:"spinner diagonal part-2"})),a&&l.a.createElement("div",{id:"sidebarMenu"},l.a.createElement("ul",{class:"sidebarMenuInner"},l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"/upload-a-video"},"Upload Videos")),l.a.createElement("li",null,"Categories"),l.a.createElement("li",null,"Photos"),l.a.createElement("li",null,"Login"),l.a.createElement("li",null,"Sign Up"))))}),Y=(a(98),function(){return l.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement("div",{className:"",style:{color:"white !important",height:"150px",bottom:"0",position:"absolute",width:"auto",textAlign:"center",backgroundColor:"#000"}},l.a.createElement("div",{className:"mb4-l cf"},l.a.createElement("h1",{className:"fl w-100 pv0 f6 fw6 ttu tracked",style:{color:"white"}},"StreamVids")),l.a.createElement("div",{className:"dt dt--fixed w-100"},l.a.createElement("div",{className:"dn dtc-ns v-mid"},l.a.createElement("p",{className:"f7  dib pr3 mb3",style:{color:"white"}},"Copyright \xa9 Manuelbiolatiri 2020")),l.a.createElement("div",{className:"db dtc-ns  tc  v-mid"},l.a.createElement("a",{href:"https://www.facebook.com/",className:"link dim dib mr3 ",title:"Impossible Labs on Facebook",style:{color:"white"}},l.a.createElement("svg",{className:"db w2 h2","data-icon":"facebook",viewBox:"0 0 32 32",fill:"currentColor"},l.a.createElement("title",null,"facebook icon"),l.a.createElement("path",{d:"M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"}))),l.a.createElement("a",{href:"https://twitter.com/",className:"link dim dib mr3 ",style:{color:"white"}},l.a.createElement("svg",{className:"db w2 h2","data-icon":"twitter",viewBox:"0 0 32 32",fill:"currentColor"},l.a.createElement("title",null,"twitter icon"),l.a.createElement("path",{d:"M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"}))))),l.a.createElement("div",{className:"db dn-ns"},l.a.createElement("p",{className:"f7  mt4 tc",style:{color:"white"}},"Copyright \xa9 Manuelbiolatiri 2020"))))}),$=a(37),K=a.n($),Q=a(58),Z=a(59),ee=a(8),te=(a(100),a(31)),ae=a(61),ne=a.n(ae);function le(){var e=Object(Z.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: light-green;\n"]);return le=function(){return e},e}var oe=Object(te.css)(le()),re=function(e){var t=Object(n.useState)(""),a=Object(q.a)(t,2),o=a[0],r=a[1],i=Object(n.useState)(""),s=Object(q.a)(i,2),c=s[0],m=s[1],d=Object(n.useState)(!1),u=Object(q.a)(d,2),p=u[0],g=u[1],f=Object(n.useState)(""),v=Object(q.a)(f,2),b=(v[0],v[1],Object(n.useState)("")),E=Object(q.a)(b,2),w=E[0],y=E[1],k=Object(n.useState)(""),O=Object(q.a)(k,2),S=O[0],C=O[1],I=function(){g(!1)},N=function(){var e=Object(Q.a)(K.a.mark(function e(t){var a,n,l;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),g(!0),a="custom-id-yes",!c){e.next=12;break}return(n=new FormData).append("image",c),n.set("title",o),l={headers:{"content-type":"multipart/form-data"}},e.next=10,h.a.post("https://cors-anywhere.herokuapp.com/https://xstreamvids.herokuapp.com/api/v1/video",n,l).then(function(e){"error"===e.data.status?(ee.b.warn(e.data.message,{toastId:a,position:ee.b.POSITION.TOP_RIGHT}),y(e.data.message),I()):"error"===e.data.status?(ee.b.warn(e.data.message,{toastId:a,position:ee.b.POSITION.TOP_RIGHT}),y(e.data.message),I()):"success"===e.data.status&&(C(e.data.data.message),ee.b.success(e.data.data.message,{toastId:a,position:ee.b.POSITION.TOP_CENTER}),I())}).catch(function(e){console.log(e),ee.b.warn("file not supported, upload mp4 or gif",{toastId:a,position:ee.b.POSITION.TOP_RIGHT})});case 10:e.next=15;break;case 12:y("You need to upload a video"),ee.b.warn("You need to upload a video",{toastId:a,position:ee.b.POSITION.TOP_CENTER}),I();case 15:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",{class:"container",style:{paddingBottom:"260px",paddingTop:"100px",margin:"auto"}},w?l.a.createElement(ee.a,{position:"top-right",autoClose:"3000",hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):"",S?l.a.createElement(ee.a,{position:"top-right",hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):"",l.a.createElement("div",{class:"row",style:{display:"flex !important",alignItems:"center !important"}},l.a.createElement("form",{class:"col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-3 col-md-3 col-sm-offset-4 col-lg-4 col-lg-offset-5"},l.a.createElement("h1",null,"Upload A Video"),l.a.createElement("p",null,l.a.createElement("label",{class:"sr-only",for:""},"Title"),l.a.createElement("input",{class:"form-control",width:"50%",type:"text",name:"title",id:"title2",value:o||"",placeholder:"Title",onChange:function(e){return r(e.target.value)},required:!0})),l.a.createElement("p",null,l.a.createElement("label",{class:"sr-only",for:""},"Select A Video"),l.a.createElement("input",{id:"upload",type:"file",onChange:function(e){return m(e.target.files[0])}})),l.a.createElement("button",{onClick:N,className:"btn btn-primary btn-block btn-sm"},p?l.a.createElement(ne.a,{css:oe,color:"white",size:"25"}):"Upload"))))};a(105);p.a.initialize("UA-147154395-1"),p.a.pageview(window.location.pathname+window.location.search);var ie=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App-wrapper"},l.a.createElement(X,null),l.a.createElement("div",{className:"body"},l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",exact:!0,component:J}),l.a.createElement(s.a,{path:"/upload-a-video",exact:!0,component:re}))),l.a.createElement(Y,null))}}]),a}(n.Component),se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var me=l.a.createElement(i.a,null,l.a.createElement(s.a,{path:"/",component:ie}));r.a.render(me,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");se?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ce(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ce(t,e)})}}()},14:function(e,t,a){e.exports={SlideContainer:"Slide_SlideContainer__35pPf",SlideInfo:"Slide_SlideInfo__LkW2j",SliderImage:"Slide_SliderImage__1BuLG",SliderScores:"Slide_SliderScores__2UCjX",Title:"Slide_Title__32F0U",Caption:"Slide_Caption__sd9p0",CaptionContainer:"Slide_CaptionContainer__3HI1F",LogoImg:"Slide_LogoImg__2fUpJ",Overview:"Slide_Overview__3NIkj",Loading:"Slide_Loading__1WipM",SliderContainer:"Slide_SliderContainer__1TmsD"}},19:function(e,t,a){e.exports=a.p+"static/media/xstream1.e84e64ea.jpg"},20:function(e,t,a){e.exports=a.p+"static/media/xstream3.5ea5b111.jpg"},25:function(e,t,a){e.exports=a.p+"static/media/xstream.65a1d987.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/xstream2.7b626281.jpg"},33:function(e,t,a){e.exports={SliderBox:"Slider_SliderBox__X3tRh",Loading:"Slider_Loading__2_Cvu"}},53:function(e,t,a){e.exports={loader:"Loader_loader__RqBaE",load7:"Loader_load7__1_Mh3"}},63:function(e,t,a){e.exports=a(106)},68:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){e.exports=a.p+"static/media/mg-icon.5eb92ea4.png"},92:function(e,t,a){},95:function(e,t,a){},98:function(e,t,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.88fda3d1.chunk.js.map