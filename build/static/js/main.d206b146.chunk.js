(this.webpackJsonphuntweb=this.webpackJsonphuntweb||[]).push([[0],{31:function(e,t,n){e.exports=n(63)},54:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),o=n.n(c),u=n(11),i=n(1),s=n(5),l=n.n(s),p=n(30),d=n(7),m=n(8),f=n(9),h=n(10),v=n(12),E=n(28),g=n.n(E).a.create({baseURL:"https://rocketseat-node.herokuapp.com/api"}),b=(n(54),function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={products:[],productInfo:{},page:1},e.loadProducts=Object(d.a)(l.a.mark((function t(){var n,a,r,c,o,u=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>0&&void 0!==u[0]?u[0]:1,t.next=3,g.get("/products?page=".concat(n));case 3:a=t.sent,r=a.data,c=r.docs,o=Object(p.a)(r,["docs"]),e.setState({products:c,productInfo:o,page:n});case 6:case"end":return t.stop()}}),t)}))),e.prevPage=function(){var t=e.state,n=t.page;t.productInfo;if(1!==n){var a=n-1;e.loadProducts(a)}},e.nextPage=function(){var t=e.state,n=t.page;if(n!==t.productInfo.pages){var a=n+1;e.loadProducts(a)}},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.loadProducts()}},{key:"render",value:function(){var e=this.state,t=e.products,n=e.page,a=e.productInfo;return r.a.createElement("div",{className:"product-list"},t.map((function(e){return r.a.createElement("article",{key:e._id},r.a.createElement("strong",null,e.title),r.a.createElement("p",null,e.description),r.a.createElement(u.b,{to:"/products/".concat(e._id)},"Acessar"))})),r.a.createElement("div",{className:"actions"},r.a.createElement("button",{disabled:1===n,onClick:this.prevPage},"Anterior"),r.a.createElement("button",{disabled:n===a.pages,onClick:this.nextPage},"Pr\xf3ximo")))}}]),n}(a.Component)),w=(n(60),function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={product:{}},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,g.get("/products/".concat(t));case 3:n=e.sent,this.setState({product:n.data});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.product;return r.a.createElement("div",{className:"product-info"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.description),r.a.createElement("p",null,"URL: ",r.a.createElement("a",{href:e.url},e.url)))}}]),n}(a.Component)),k=function(){return r.a.createElement(u.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:b}),r.a.createElement(i.a,{path:"/products/:id",component:w})))},y=(n(61),n(62),function(){return r.a.createElement("header",{id:"main-header"},"JSHunter")}),j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.d206b146.chunk.js.map