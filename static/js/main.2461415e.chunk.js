(this.webpackJsonprobodex=this.webpackJsonprobodex||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),r=n.n(c),a=n(4),o=n.n(a),i=(n(14),n(5)),h=n(6),l=n(2),u=n(8),d=n(7),j=(n(15),n(16),function(e){return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2"),alt:""}),Object(s.jsx)("h1",{children:e.monster.name}),Object(s.jsx)("p",{children:e.monster.email})]})}),b=(n(17),function(e){return Object(s.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(s.jsx)(j,{monster:e})}))})}),m=(n(18),function(e){var t=e.placeholder,n=e.handleChange;return Object(s.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={monsters:[],search:""},e.handleChange=e.handleChange.bind(Object(l.a)(e)),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({monsters:t})}))}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({search:t})}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.search,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{className:"heading-1",children:"Monsters Rolodex"}),Object(s.jsx)(m,{placeholder:"search your monster",handleChange:this.handleChange}),Object(s.jsx)(b,{monsters:c})]})}}]),n}(c.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),p()}],[[19,1,2]]]);
//# sourceMappingURL=main.2461415e.chunk.js.map