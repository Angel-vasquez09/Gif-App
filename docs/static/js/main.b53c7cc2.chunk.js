(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(8),i=n.n(c),u=n(2),s=n(10),o=n(5),d=n.n(o),j=n(0),p=function(t){var e=t.setC,n=Object(a.useState)("Buscar"),r=Object(u.a)(n,2),c=r[0],i=r[1];return Object(j.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2&&(e((function(t){return[c].concat(Object(s.a)(t))})),i(""))},children:Object(j.jsx)("input",{type:"text",name:"",value:c,onChange:function(t){var e=t.target.value;i(e)}})})};p.protoTypes={setC:d.a.func.isRequired};var f=n(11),l=function(t){t.id,t.title;var e=t.url;return Object(j.jsx)("div",{className:"card",children:Object(j.jsx)("img",{src:e,alt:""})})},b=n(7),O=n.n(b),m=n(9),h=function(){var t=Object(m.a)(O.a.mark((function t(e){var n,a,r,c,i;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=q8pc5vwiAGw1x0yBHKJoYDiWY4LtFthk"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,c=r.data,i=c.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(t){var e=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(u.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){h(t).then((function(t){setTimeout((function(){c({data:t,loading:!1})}),3e3)}))}),[t]),r}(t.categoria),n=e.data,r=e.loading;return Object(j.jsxs)(j.Fragment,{children:[r&&Object(j.jsx)("p",{children:"Loading..."}),Object(j.jsx)("div",{className:"card-grid animate__animated animate__fadeIn",children:n.map((function(t){return Object(j.jsx)(l,Object(f.a)({},t),t.id)}))})]})};v.protoTypes={categoria:d.a.string.isRequired};var g=function(){var t=Object(a.useState)(["luis"]),e=Object(u.a)(t,2),n=e[0],r=e[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Mi Gif App"}),Object(j.jsx)(p,{setC:r}),Object(j.jsx)("ol",{children:n.map((function(t){return Object(j.jsx)(v,{categoria:t},t)}))})]})};n(20);i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.b53c7cc2.chunk.js.map