(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{17:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var n=c(5),a=c(6),s=c(10),r=c(9),i=c(0),o=c(1),l=c.n(o),j=c(7),u=c.n(j),d=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))},h=c(3),m=c.n(h),b=c(8),O=c(4),v=function(e){return Object(i.jsx)(i.Fragment,{children:e.movies.map((function(e,t){return Object(i.jsx)("li",{className:"media",children:Object(i.jsxs)("div",{className:"d-flex justify-content-md-center m-3",children:[Object(i.jsx)("img",{className:"image align-self-center",src:"N/A"===e.Poster?"https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-1-150x150.jpg":e.Poster,alt:e.Title}),Object(i.jsx)("div",{className:"overlay",children:Object(i.jsxs)("div",{className:"text",children:[e.Title," ",Object(i.jsx)("br",{})," ",e.Type," ",Object(i.jsx)("br",{})," ",e.Year]})})]})},e.id)}))})},f=(c(17),function(e){return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-sm-6 form-group-lg",children:Object(i.jsx)("input",{className:"input form-control",type:"text",name:"search",placeholder:"Search Movie",onChange:function(t){e.setSearchValue(t.target.value),console.log(t.target.value)},value:e.value})})})})}),x=(c(18),c(19),function(e){return Object(i.jsx)("div",{className:"col-sm-4 heading",children:Object(i.jsx)("h2",{children:Object(i.jsx)("bold",{children:e.heading})})})}),p=function(){var e=Object(o.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],a=Object(o.useState)(""),s=Object(O.a)(a,2),r=s[0],l=s[1],j=function(){var e=Object(b.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://www.omdbapi.com/?s=".concat(r,"&apikey=14c9736d"),e.next=3,fetch(t).then((function(e){return e.json()}));case 3:(c=e.sent).Search&&n(c.Search);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){j()}),[r]),Object(i.jsxs)("div",{className:"container-fluid movie-app",children:[Object(i.jsxs)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:[Object(i.jsx)(x,{heading:r}),Object(i.jsx)(f,{searchValue:r,setSearchValue:l})]}),Object(i.jsx)("div",{className:"row",children:Object(i.jsx)(v,{movies:c})})]})},g=function(e){Object(s.a)(c,e);var t=Object(r.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"title",children:Object(i.jsx)("strong",{children:"Movie Search"})}),Object(i.jsx)(p,{})]})}}]),c}(l.a.Component);u.a.render(Object(i.jsx)(g,{}),document.getElementById("root")),d()}},[[20,1,2]]]);
//# sourceMappingURL=main.da068b5f.chunk.js.map