"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,t,r){r.r(t);var n=r(8152),c=r(2791),u=r(6871),a=r(4390),s=r(184);t.default=function(){var e=(0,u.UO)().movieId,t=(0,c.useState)(),r=(0,n.Z)(t,2),o=r[0],i=r[1];if((0,c.useEffect)((function(){e&&(0,a.WB)({id:e}).then((function(e){i(e.data)})).catch((function(e){return console.error(e)}))}),[e]),void 0!==o)return(0,s.jsx)("ul",{children:o.results.length>0?o.results.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsx)("h3",{children:e.author}),(0,s.jsx)("p",{children:e.content})]},e.id)})):(0,s.jsx)("h2",{children:"No Reviews"})})}},4390:function(e,t,r){r.d(t,{Mn:function(){return w},UB:function(){return d},WB:function(){return y},dB:function(){return i},t_:function(){return h},w7:function(){return f}});var n=r(5861),c=r(7757),u=r.n(c),a=r(4569),s=r.n(a),o="https://api.themoviedb.org/3/",i="https://image.tmdb.org/t/p/w500/";s().defaults.baseURL=o;var p=s().create({baseURL:o,params:{api_key:"8f7dccc9472730a8b8594c51c2e70c8f",language:"en-US",include_adult:!1}});function f(){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("/trending/movie/day");case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.name,e.prev=1,e.next=4,p.get("/search/movie?query=".concat(r));case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,e.prev=1,e.next=4,p.get("/movie/".concat(r));case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function w(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,e.prev=1,e.next=4,p.get("movie/".concat(r,"/credits"));case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function y(e){return b.apply(this,arguments)}function b(){return(b=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,e.prev=1,e.next=4,p.get("movie/".concat(r,"/reviews"));case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=186.693ff479.chunk.js.map