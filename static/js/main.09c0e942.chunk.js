(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(6),i=n.n(a),s=(n(12),n(7)),l=n(3),j=n(0),u=function(){var t=Object(c.useState)(""),e=Object(l.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)([]),u=Object(l.a)(i,2),o=u[0],r=u[1],b=Object(c.useState)(!0),d=Object(l.a)(b,2),f=d[0],O=d[1],m=Object(c.useState)(null),x=Object(l.a)(m,2),h=x[0],p=x[1],v=function(){f&&n?(r([].concat(Object(s.a)(o),[n])),a("")):!f&&n?(o.map((function(t,e){if(e===h)return o[e]=n})),O(!0),p(null),a("")):O(!0)};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"main",children:Object(j.jsx)("div",{className:"box",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{onChange:function(t){a(t.target.value)},name:"name",value:n,placeholder:"\u270d\ufe0f Add items..."}),f?Object(j.jsx)("i",{className:"fa fa-plus btn-add",onClick:function(){v()}}):Object(j.jsx)("i",{onClick:function(){v()},className:"fa fa-edit btn-add"}),o.map((function(t,e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"div-list",children:[Object(j.jsxs)("span",{children:[e+1," : ",t]}),Object(j.jsxs)("div",{className:"list-btn",children:[Object(j.jsx)("i",{onClick:function(){!function(t){a(o[t]),O(!1),p(t)}(e)},className:"fa fa-edit ",title:"Edit Item"}),Object(j.jsx)("i",{onClick:function(){!function(t){r(o.filter((function(e,n){return n!==t}))),p(null),O(!0),a("")}(e)},className:"fa fa-trash-alt ",title:"Delete Item"})]})]},e)})}))]})})})})},o=function(){return Object(j.jsx)(u,{})};i.a.render(Object(j.jsx)(o,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.09c0e942.chunk.js.map