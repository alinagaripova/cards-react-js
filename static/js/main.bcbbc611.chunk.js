(this["webpackJsonpcards-react-js"]=this["webpackJsonpcards-react-js"]||[]).push([[0],{15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(0),r=(n(11),n(1)),s=n.n(r),i=n(7),a=n.n(i);n(15);function j(){return Object(c.jsx)("header",{children:Object(c.jsx)("h1",{className:"text-center p-4",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u0432\u0430\u0440\u0442\u0438\u0440"})})}var o=n(8),d=n(6),l=n(2);function u(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)([]),a=Object(d.a)(i,2),j=a[0],u=a[1];return Object(r.useEffect)((function(){fetch("https://alinagaripova.github.io/json-api/entities.json").then((function(e){if(!e.ok)throw new Error("HTTP error "+e.status);return e.json()})).then((function(e){e&&s(Object(l.get)(e,"response"))})).catch((function(e){return console.error("entities.json loader",e)}))}),[]),Object(c.jsx)("div",{className:"container py-3",children:Object(c.jsx)("div",{className:"row justify-content-between",children:n&&n.map((function(e){var t=e.id,n=e.attributes,r=(e.relationships,Object(l.get)(n,"title","")),s=Object(l.get)(n,"address.street",""),i=Object(l.get)(n,"address.house",""),a=Object(l.get)(n,"address.room",""),d=j.find((function(e){return e===t}))===t?"red":"none";return Object(c.jsx)("div",{className:"col-12 col-md-4 mb-3",children:Object(c.jsx)("div",{className:"card",style:{minHeight:"250px"},children:Object(c.jsxs)("div",{className:"card-body d-flex flex-column justify-content-around align-content-center text-center",children:[Object(c.jsx)("h5",{className:"card-title",children:r}),Object(c.jsxs)("p",{className:"card-text",style:{minHeight:"50px"},children:["\u0410\u0434\u0440\u0435\u0441\u0441: \u0443\u043b.",s,",\u0434\u043e\u043c.",i,", \u043a\u0432.",a]}),Object(c.jsx)("div",{className:"card__like",onClick:function(){return function(e){var t=j.findIndex((function(t){return t===e})),n=j.filter((function(t){return t!==e}));u(t<0?[].concat(Object(o.a)(j),[e]):n)}(t)},children:Object(c.jsx)("svg",{width:"35",height:"35",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsxs)("g",{children:[Object(c.jsx)("title",{children:"Layer 1"}),Object(c.jsx)("path",{id:"svg_1",fill:d,stroke:"red",d:"m16.4,4c-1.8,0 -3.4,0.9 -4.4,2.3c-1,-1.4 -2.6,-2.3 -4.4,-2.3c-3.1,0 -5.6,2.5 -5.6,5.6c0,4.4 10,12.4 10,12.4s10,-8 10,-12.4c0,-3.1 -2.5,-5.6 -5.6,-5.6z"})]})})})]})})},t)}))})})}function b(){return Object(c.jsx)("main",{className:"container",children:Object(c.jsx)(u,{})})}function h(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j,{}),Object(c.jsx)(b,{})]})}var O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};n(18);a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),O()}},[[19,1,2]]]);
//# sourceMappingURL=main.bcbbc611.chunk.js.map