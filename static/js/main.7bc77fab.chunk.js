(this.webpackJsonpwhatsup=this.webpackJsonpwhatsup||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},function(e,t){},function(e,t,a){},,,,function(e,t,a){e.exports=a.p+"static/media/logo.5a6a464d.png"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),m=a(7),l=a.n(m),r=a(8),h=a(9),o=a(11),u=a(10),i=a(12),c=(a(18),a(19),a(20),a(1)),d=a.n(c),q=function(){return s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"top"},s.a.createElement("figure",{className:"logo"},s.a.createElement("img",{src:a(24)})),s.a.createElement("div",{className:"heading"},s.a.createElement(d.a,{left:!0,delay:500,duration:2e3},"W"),s.a.createElement(d.a,{top:!0,delay:1e3,duration:2e3},"H"),s.a.createElement(d.a,{right:!0,delay:1500,duration:2e3},"A"),s.a.createElement(d.a,{bottom:!0,delay:2e3,duration:2e3},"T"),s.a.createElement(d.a,{left:!0,delay:2500,duration:2e3},"S"),s.a.createElement(d.a,{top:!0,delay:3e3,duration:2e3},"U"),s.a.createElement(d.a,{right:!0,delay:3500,duration:2e3},"P"))))},p=(a(25),function(){return s.a.createElement("div",{className:"footer"},s.a.createElement("p",null))}),E=(a(26),a(4)),y=a.n(E),g=function(e){var t=e.renderUser;return s.a.createElement("div",{className:"landing"},s.a.createElement(y.a,{left:!0},s.a.createElement("h2",null,"Creating a community to boost interactions between students.")),s.a.createElement(y.a,{bottom:!0,delay:500,duration:1e3},s.a.createElement("form",null,s.a.createElement("h3",null,"Create an account"),s.a.createElement("input",{placeholder:"Full name",className:"name"}),s.a.createElement("input",{placeholder:"Username",className:"username"}),s.a.createElement("input",{placeholder:"Email",type:"email",className:"mail"}),s.a.createElement("input",{placeholder:"Phone no",className:"phone"}),s.a.createElement("input",{placeholder:"date of birth",type:"date",className:"date"}),s.a.createElement("input",{placeholder:"Password",type:"password",className:"password"}),s.a.createElement("button",{onClick:function(e){return t(e)}},"CREATE"))))},f=(a(27),function(e){var t=e.user,a=t.friends,n=(t.status,a.map((function(e,t){return s.a.createElement("div",{className:"friend"},s.a.createElement("h3",null,e.name),s.a.createElement("p",null,e.department))})));return s.a.createElement("div",{className:"home"},s.a.createElement("header",null,s.a.createElement("figure",null,s.a.createElement("img",null)),s.a.createElement("h2",null,t.name),s.a.createElement("nav",null,s.a.createElement("ul",null,s.a.createElement("li",null,"My Profile"),s.a.createElement("li",null,"Followers ",t.followers),s.a.createElement("li",null,"Following ",t.following),s.a.createElement("li",null,"Notification")))),s.a.createElement("body",null,s.a.createElement("section",{className:"friends"},n),s.a.createElement("section",{className:"status"})))}),v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),m=0;m<n;m++)s[m]=arguments[m];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={users:[],user:{},route:"landing"},a.renderUser=function(e){e.preventDefault();var t={name:document.querySelector(".name").value,email:document.querySelector(".mail").value,username:document.querySelector(".username").value,phone:document.querySelector(".phone").value,date:document.querySelector(".date").value,password:document.querySelector(".password").value,friends:[{name:"Saade Michel",department:"computer science",messages:[{sender:"ashraf",message:"this is a test message"},{sender:"temi",message:"from me"}],status:[{type:"video, image, text",status:"https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm"},{type:"video, image, text",status:"https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm"},{type:"video, image, text",status:"https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm"},{type:"video, image, text",status:"https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm"}]},{name:"Samuel Daniel",department:"Arts",messages:[{sender:"ashraf",message:"yoyoyoyoyoyoyooyoy"},{sender:"temi",message:"enjoying that"}],status:[{type:"video, image, text",status:"https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm"},{type:"video, image, text",status:"https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm"},{type:"video, image, text",status:"https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm"},{type:"video, image, text",status:"https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm"}]},{name:"Olabiyi Daniel",department:"Microbiology",messages:[{sender:"ashraf",message:"HI man"},{sender:"temi",message:"Hello there"}],status:[{type:"video, image, text",status:"https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm"},{type:"video, image, text",status:"https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm"},{type:"video, image, text",status:"https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm"},{type:"video, image, text",status:"https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm"}]},{name:"Remi Olaiwola",department:"Geography",messages:[{sender:"ashraf",message:"where is the map"},{sender:"temi",message:"go check the satellite"}],status:[{type:"video, image, text",status:"https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm"},{type:"video, image, text",status:"https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm"},{type:"video, image, text",status:"https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm"},{type:"video, image, text",status:"https://kjetu578thqb57thq5on5q78h5iuhq587h45m4q85hm45hm"}]}],followers:0,following:0};a.setState({user:t}),a.setState({route:"home"})},a}return Object(i.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(q,null),"landing"===this.state.route?s.a.createElement(g,{renderUser:this.renderUser}):"home"===this.state.route?s.a.createElement(f,{user:this.state.user}):null,s.a.createElement(p,null))}}]),t}(n.Component);l.a.render(s.a.createElement(v,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.7bc77fab.chunk.js.map