"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{7135:function(e,r,t){t.r(r),t.d(r,{default:function(){return _}});var n=t(8152),a=t(2791),s=t(3504),c=t(6871),i=t(4390),o=t(2134),u="MovieDetails_mainWrapper__aLc6z",l="MovieDetails_secondaryWrapper__BpiwJ",p="MovieDetails_poster__yO7gD",v="MovieDetails_overviewText__K3-MM",d="MovieDetails_genresWrapper__q-Zk5",h="MovieDetails_genresWrapperItem__3Rh2t",f="MovieDetails_backButton__pPF5M",m=t(2634),x=t(184),_=function(){var e,r,t=(0,c.UO)().movieId,_=(0,a.useState)(),j=(0,n.Z)(_,2),w=j[0],g=j[1],k=(0,c.TH)();if((0,a.useEffect)((function(){(0,i.UB)({id:t}).then((function(e){g(e.data)}))}),[t]),void 0!==w)return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(s.rU,{className:f,to:null!==(e=null===(r=k.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/",children:(0,x.jsx)(o.kyg,{})}),(0,x.jsxs)("section",{className:u,children:[(0,x.jsx)("img",{className:p,src:i.dB+w.backdrop_path,alt:w.original_title}),(0,x.jsxs)("div",{className:l,children:[(0,x.jsx)("h2",{children:w.title}),(0,x.jsxs)("p",{children:["User score: ",w.vote_average]}),(0,x.jsx)("h3",{children:"Overview"}),(0,x.jsx)("p",{className:v,children:w.overview}),(0,x.jsx)("h3",{children:"Genres"}),(0,x.jsx)("ul",{className:d,children:w.genres.map((function(e){var r=e.id,t=e.name;return(0,x.jsx)("li",{className:h,children:t},r)}))})]})]}),(0,x.jsxs)(m.W2,{children:[(0,x.jsx)("h3",{children:"Additional Information"}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{children:(0,x.jsx)(s.rU,{to:"cast",state:{from:k.state.from},children:"Cast"})}),(0,x.jsx)("p",{children:(0,x.jsx)(s.rU,{to:"review",state:{from:k.state.from},children:"Reviews"})})]}),(0,x.jsx)(a.Suspense,{fallback:null,children:(0,x.jsx)(c.j3,{})})]})]})}},4390:function(e,r,t){t.d(r,{Mn:function(){return x},UB:function(){return f},WB:function(){return j},dB:function(){return u},t_:function(){return d},w7:function(){return p}});var n=t(5861),a=t(7757),s=t.n(a),c=t(4569),i=t.n(c),o="https://api.themoviedb.org/3/",u="https://image.tmdb.org/t/p/w500/";i().defaults.baseURL=o;var l=i().create({baseURL:o,params:{api_key:"8f7dccc9472730a8b8594c51c2e70c8f",language:"en-US",include_adult:!1}});function p(){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.get("/trending/movie/day");case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.name,e.prev=1,e.next=4,l.get("/search/movie?query=".concat(t));case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.id,e.prev=1,e.next=4,l.get("/movie/".concat(t));case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function x(e){return _.apply(this,arguments)}function _(){return(_=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.id,e.prev=1,e.next=4,l.get("movie/".concat(t,"/credits"));case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function j(e){return w.apply(this,arguments)}function w(){return(w=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.id,e.prev=1,e.next=4,l.get("movie/".concat(t,"/reviews"));case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=135.ed3c8a51.chunk.js.map