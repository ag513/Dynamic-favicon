(this["webpackJsonpdynamic-favicon"]=this["webpackJsonpdynamic-favicon"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),a=n(4),o=n.n(a),r=(n(13),n(5)),s=n(6),u=n(2),h=n(8),d=n(7),l=(n(14),n(0)),b=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).increment=c.increment.bind(Object(u.a)(c)),c.decrement=c.decrement.bind(Object(u.a)(c)),c.updateFavicon=c.updateFavicon.bind(Object(u.a)(c)),c.state={counter:0},c}return Object(s.a)(n,[{key:"updateFavicon",value:function(){var t=document.querySelector("link[rel~='icon']");0===this.state.counter?t.href="/default.ico":1===this.state.counter?t.href="/1.ico":2===this.state.counter?t.href="/2.ico":3===this.state.counter?t.href="/3.ico":4===this.state.counter?t.href="/4.ico":5===this.state.counter?t.href="/5.ico":this.state.counter>5&&(t.href="/5plus.ico")}},{key:"increment",value:function(){var t=this;this.setState({counter:Math.min(10,this.state.counter+1)},(function(){t.updateFavicon()}))}},{key:"decrement",value:function(){var t=this;this.setState({counter:Math.max(0,this.state.counter-1)},(function(){t.updateFavicon()}))}},{key:"render",value:function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("button",{onClick:this.decrement,className:"button button-dec",children:"-"}),Object(l.jsx)("p",{className:"counter-value",children:this.state.counter}),Object(l.jsx)("button",{onClick:this.increment,className:"button button-inc",children:"+"})]})}}]),n}(i.a.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),a(t),o(t)}))};o.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.372a98f2.chunk.js.map