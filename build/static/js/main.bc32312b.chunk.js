(this["webpackJsonptrashdao.github.io"]=this["webpackJsonptrashdao.github.io"]||[]).push([[0],{16:function(e,t,n){},2:function(e,t,n){e.exports={row:"Counter_row__3ZfYE",value:"Counter_value__3nqCt",button:"Counter_button__PxGxe",textbox:"Counter_textbox__3kGuv",asyncButton:"Counter_asyncButton__amnIj Counter_button__PxGxe"}},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),o=n.n(c),s=(n(16),n.p+"static/media/logo.b2e5a01e.svg"),u=n(11),i=n(3),l=i.c,d=n(9),j=n.n(d),b=n(10),h=n(4);function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var p=Object(h.b)("counter/fetchCount",function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),m=Object(h.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(p.pending,(function(e){e.status="loading"})).addCase(p.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),f=m.actions,O=f.increment,v=f.decrement,g=f.incrementByAmount,_=function(e){return e.counter.value},k=m.reducer,N=n(2),C=n.n(N),w=n(1);function A(){var e=l(_),t=Object(i.b)(),n=Object(r.useState)("2"),a=Object(u.a)(n,2),c=a[0],o=a[1],s=Number(c)||0;return Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:C.a.row,children:[Object(w.jsx)("button",{className:C.a.button,"aria-label":"Decrement value",onClick:function(){return t(v())},children:"-"}),Object(w.jsx)("span",{className:C.a.value,children:e}),Object(w.jsx)("button",{className:C.a.button,"aria-label":"Increment value",onClick:function(){return t(O())},children:"+"})]}),Object(w.jsxs)("div",{className:C.a.row,children:[Object(w.jsx)("input",{className:C.a.textbox,"aria-label":"Set increment amount",value:c,onChange:function(e){return o(e.target.value)}}),Object(w.jsx)("button",{className:C.a.button,onClick:function(){return t(g(s))},children:"Add Amount"}),Object(w.jsx)("button",{className:C.a.asyncButton,onClick:function(){return t(p(s))},children:"Add Async"}),Object(w.jsx)("button",{className:C.a.button,onClick:function(){return t((e=s,function(t,n){_(n())%2===1&&t(g(e))}));var e},children:"Add If Odd"})]})]})}n(23);var y=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsxs)("header",{className:"App-header",children:[Object(w.jsx)("img",{src:s,className:"App-logo",alt:"logo"}),Object(w.jsx)(A,{}),Object(w.jsxs)("p",{children:["Edit ",Object(w.jsx)("code",{children:"src/App.tsx"})," and save to reload."]}),Object(w.jsxs)("span",{children:[Object(w.jsx)("span",{children:"Learn "}),Object(w.jsx)("a",{className:"App-link",href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer",children:"React"}),Object(w.jsx)("span",{children:", "}),Object(w.jsx)("a",{className:"App-link",href:"https://redux.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Redux"}),Object(w.jsx)("span",{children:", "}),Object(w.jsx)("a",{className:"App-link",href:"https://redux-toolkit.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Redux Toolkit"}),",",Object(w.jsx)("span",{children:" and "}),Object(w.jsx)("a",{className:"App-link",href:"https://react-redux.js.org/",target:"_blank",rel:"noopener noreferrer",children:"React Redux"})]})]})})},B=Object(h.a)({reducer:{counter:k}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(i.a,{store:B,children:Object(w.jsx)(y,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.bc32312b.chunk.js.map