(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{1:function(e,t,c){e.exports={"api-view":"api-view--3JpF7",title:"title--pNltY","item-view":"item-view--a3-pL","label-title":"label-title--3m40_",line:"line--ZUR-I","info-view":"info-view--3kib7","main-title":"main-title--2wtCC","bottom-view":"bottom-view--2bw4f","sub-view":"sub-view--2aQQO",num:"num--1uiz7","check-btn":"check-btn--1Dw9x","account-view":"account-view--1o3po","top-view":"top-view--2UtBX","head-view":"head-view--2LLkR","detail-view":"detail-view--2FBIn","name-view":"name-view--2hH31","balance-view":"balance-view--1tUIK"}},16:function(e,t,c){e.exports=c(29)},29:function(e,t,c){"use strict";c.r(t);var a=c(3),i=c.n(a),s=c(4),n=c.n(s),l=(c(10),c(8)),r=c(7),d=c(1),j=c.n(d),o=c(0);function b(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),c=t[0],i=t[1];return Object(a.useEffect)((function(){r.a.fetchUserInfo().then((function(e){e&&1===e.success&&i(e.userInfo)}))}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing",children:Object(o.jsxs)("div",{className:j.a["api-view"],children:[Object(o.jsx)("div",{className:j.a.title,children:"API KEY"}),Object(o.jsxs)("div",{className:j.a["item-view"],children:[Object(o.jsx)("i",{"data-feather":"key"}),Object(o.jsx)("span",{className:j.a["label-title"],children:"API Key"}),Object(o.jsx)("span",{children:c.apiKey})]}),Object(o.jsx)("div",{className:j.a.line}),Object(o.jsxs)("div",{className:j.a["item-view"],children:[Object(o.jsx)("i",{"data-feather":"key"}),Object(o.jsx)("span",{className:j.a["label-title"],children:"API Secret"}),Object(o.jsx)("span",{children:c.apiSecret}),Object(o.jsx)("i",{"data-feather":"eye",style:{marginLeft:5}})]})]})}),Object(o.jsx)("div",{className:"col-xl-3 col-lg-5 col-md-5 col-sm-6 col-12 layout-spacing",children:Object(o.jsxs)("div",{className:j.a["info-view"],children:[Object(o.jsx)("div",{className:j.a["main-title"],children:"INFORMATION"}),Object(o.jsxs)("div",{className:j.a["bottom-view"],children:[Object(o.jsxs)("div",{className:j.a["sub-view"],children:[Object(o.jsx)("div",{className:j.a.title,children:"Announcement"}),Object(o.jsx)("div",{className:j.a.num,children:"5"}),Object(o.jsx)("div",{className:j.a["check-btn"],children:"Check"})]}),Object(o.jsxs)("div",{className:j.a["sub-view"],children:[Object(o.jsx)("div",{className:j.a.title,children:"Message"}),Object(o.jsx)("div",{className:j.a.num,children:"3"}),Object(o.jsx)("div",{className:j.a["check-btn"],children:"Check"})]})]})]})}),Object(o.jsx)("div",{className:"col-xl-5 col-lg-7 col-md-7 col-sm-6 col-12 layout-spacing",children:Object(o.jsxs)("div",{className:j.a["account-view"],children:[Object(o.jsxs)("div",{className:j.a["top-view"],children:[Object(o.jsx)("i",{className:j.a["head-view"]}),Object(o.jsx)("div",{style:{flex:1}}),Object(o.jsxs)("div",{className:j.a["detail-view"],children:[Object(o.jsxs)("div",{className:j.a["name-view"],children:[Object(o.jsx)("i",{"data-feather":"edit-3"}),Object(o.jsx)("span",{children:c.userName})]}),Object(o.jsx)("div",{children:"Email:".concat(c.mail)}),Object(o.jsx)("div",{children:"Tel:".concat(c.tel)})]})]}),Object(o.jsxs)("div",{className:j.a["bottom-view"],children:[Object(o.jsxs)("div",{className:j.a["sub-view"],children:[Object(o.jsx)("div",{className:j.a.title,children:"API:"}),Object(o.jsx)("div",{className:j.a.num,children:"2"})]}),Object(o.jsxs)("div",{className:j.a["sub-view"],children:[Object(o.jsx)("div",{className:j.a.title,children:"BALANCE:"}),Object(o.jsxs)("div",{className:j.a["balance-view"],children:[c.balance,Object(o.jsx)("span",{children:"JPY"})]})]})]})]})})]})}n.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))},8:function(e,t,c){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var c=0,a=new Array(t);c<t;c++)a[c]=e[c];return a}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var c=[],a=!0,i=!1,s=void 0;try{for(var n,l=e[Symbol.iterator]();!(a=(n=l.next()).done)&&(c.push(n.value),!t||c.length!==t);a=!0);}catch(r){i=!0,s=r}finally{try{a||null==l.return||l.return()}finally{if(i)throw s}}return c}}(e,t)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var c=Object.prototype.toString.call(e).slice(8,-1);return"Object"===c&&e.constructor&&(c=e.constructor.name),"Map"===c||"Set"===c?Array.from(e):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}c.d(t,"a",(function(){return i}))}},[[16,9,0,1]]]);
//# sourceMappingURL=main.b6ccf526.chunk.js.map