(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(3),r=a.n(l);var m=function(){return o.a.createElement("nav",{className:"navbar ml-auto navbar-dark bg-dark"},o.a.createElement("a",{class:"navbar-brand",href:"#"},o.a.createElement("img",{height:"60vh",src:"http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png",alt:"Problem?"})),o.a.createElement("a",{class:"navbar-brand",href:"#"},"Meme Generator"))},c=a(4),s=a(5),i=a(6),h=a(8),u=a(7),b=a(9),d=a(1),p=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(h.a)(this,Object(u.a)(t).call(this))).state={topText:"",bottomText:"",randomImg:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},e.handleChange=e.handleChange.bind(Object(d.a)(Object(d.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(Object(d.a)(e))),e}return Object(b.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then(function(e){return e.json()}).then(function(t){var a=t.data.memes;e.setState({allMemeImgs:a})})}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(c.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Math.floor(Math.random()*this.state.allMemeImgs.length),a=this.state.allMemeImgs[t].url;this.setState({randomImg:a})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{className:"form-group container justify-content-center col-lg-6 col-sm-6 mt-4",onSubmit:this.handleSubmit},o.a.createElement("input",{className:"form-control mb-3",type:"text",name:"topText",value:this.state.topText,placeholder:"Top Text",onChange:this.handleChange}),o.a.createElement("input",{className:"form-control mb-2",type:"text",name:"bottomText",value:this.state.bottomText,placeholder:"Bottom Text",onChange:this.handleChange}),o.a.createElement("button",{class:"btn btn-primary"},"Generate")),o.a.createElement("div",{className:"meme"},o.a.createElement("img",{src:this.state.randomImg,alt:"Random meme"}),o.a.createElement("h2",{className:"top"},this.state.topText),o.a.createElement("h2",{className:"bottom"},this.state.bottomText)))}}]),t}(n.Component);a(16);var g=function(){return o.a.createElement("div",null,o.a.createElement(m,null),o.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.d3dbaedd.chunk.js.map