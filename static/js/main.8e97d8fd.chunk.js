(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(59),r=a.n(o),c=(a(73),a(7)),s=(a(75),a(76),a(78),a(80),a(60)),i=a(49),m=a(63),u=a(40),d=a(33);var E=function(e){var t=e.Name,a=e.Home,n=e.About,o=e.mode,r=e.togglemode,c=e.buttontext;return l.a.createElement("div",null,l.a.createElement(u.a,{bg:o,expand:"lg",variant:o},l.a.createElement(s.a,{fluid:!0},l.a.createElement(u.a.Brand,null,t),l.a.createElement(u.a.Toggle,{"aria-controls":"navbarScroll"}),l.a.createElement(u.a.Collapse,{id:"navbarScroll"},l.a.createElement(m.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0},l.a.createElement(d.b,{to:"/",style:{color:"light"===o?"black":"white",textDecoration:"none"},className:"mx-5"},a),l.a.createElement(d.b,{to:"about",style:{color:"light"===o?"black":"white",textDecoration:"none"},className:"mx-5"},n)),l.a.createElement(i.a.Check,{type:"switch",label:c,onClick:r,id:"custom-switch"})))))},b=a(38),g=a(61),h=a.n(g);var p=function(e){var t=e.mode,a=e.showalert,o=Object(n.useState)(""),r=Object(c.a)(o,2),s=r[0],m=r[1];return l.a.createElement("div",{className:h.a.container},l.a.createElement("h1",null,"Enter text Below"),l.a.createElement(i.a.Control,{as:"textarea",placeholder:"Enter Text",cols:"80",rows:"10",PlaceHolder:"Enter Text Here",onChange:function(e){m(e.target.value)},value:s,id:"textareabox",class:"col-xs-12",style:{backgroundColor:"light"===t?"white":"#a4b0be",color:"light"===t?"black":"white"}}),l.a.createElement("br",null),l.a.createElement(b.a,{variant:"success",onClick:function(){var e=s.toLocaleUpperCase();m(e),a("Converted to UpperCase","Success")},className:"mx-3 my-3",disabled:0===s.length},"Convert To UpperCase"),l.a.createElement(b.a,{variant:"success",onClick:function(){var e=s.toLocaleLowerCase();m(e),a("Converted to LowerCase","Success")},className:"mx-3 my-3",disabled:0===s.length},"Convert To LowerCase"),l.a.createElement(b.a,{variant:"success",onClick:function(){var e=document.getElementById("textareabox");a("Copied To Clipboard","Success"),e.select(),document.getSelection().removeAllRanges(),navigator.clipboard.writeText(e.value)},className:"mx-3 my-3",disabled:0===s.length},"Copy Text"),l.a.createElement(b.a,{variant:"success",onClick:function(){var e=s.split(/[ ]+/);m(e.join(" ")),a("Extra Spaces Removed","Success")},className:"mx-3 my-3",disabled:0===s.length},"Remove Extra Spaces"),l.a.createElement(b.a,{onClick:function(){m("")},className:"mx-3 my-3"},"Reset"),l.a.createElement("h1",{className:"my-3"},"Data from input"),l.a.createElement("p",null," ",s.split(/\s+/).filter(function(e){return 0!==e.length}).length,"  words and ",s.length," charachters"),l.a.createElement("p",null,.008*s.split(" ").filter(function(e){return 0!==e.length}).length," Minuts required to read"),l.a.createElement("h2",null,"Preview of entered text"),l.a.createElement("p",null,s.length>0?s:"Nothing To Preview"))},v=a(1),x=a(62);var f=function(e){return Object(x.a)(e),l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Features of this website"),l.a.createElement("ol",null,l.a.createElement("li",null,"Convert to uppercase"),l.a.createElement("li",null,"Convert to lowercase"),l.a.createElement("li",null,"Remove extra spaces"),l.a.createElement("li",null,"Copy text"),l.a.createElement("li",null,"Word and alphabet count"),l.a.createElement("li",null,"Time required to read as per no of words")))},C=a(111);var y=function(e){var t=e.alertmsg;return l.a.createElement("div",{style:{height:"70px"}},t&&l.a.createElement("div",null,l.a.createElement(C.a,{key:"success",variant:"success"},l.a.createElement("strong",null,"".concat(t.typeofmsg," : ")),t.msg)))};var w=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)("Enable Dark Mode"),s=Object(c.a)(r,2),i=s[0],m=s[1],u=Object(n.useState)(null),d=Object(c.a)(u,2),b=d[0],g=d[1],h=function(e,t){g({msg:e,typeofmsg:t}),setTimeout(function(){g(null)},1e3)};return l.a.createElement("div",null,l.a.createElement(E,{Name:"Text-Manipulator",Home:"Home",About:"About",Contact:"Contact Us",mode:a,togglemode:function(){"light"===a?(o("dark"),m("Enable Light Mode"),h("Dark Mode Has Been Enabled","Success"),document.body.style.backgroundColor="#a4b0be",document.body.style.color="white"):(o("light"),m("Enable Dark Mode"),h("Light Mode Has Been Enabled","Success"),document.body.style.backgroundColor="white",document.body.style.color="black")},buttontext:i}),l.a.createElement(y,{alertmsg:b}),l.a.createElement(v.c,null,l.a.createElement(v.a,{path:"/",element:l.a.createElement(p,{mode:a,showalert:h})}),l.a.createElement(v.a,{path:"about",element:l.a.createElement(f,null)})))},k=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,112)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),o(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(d.a,null,l.a.createElement(w,null))),k()},61:function(e,t,a){e.exports={container:"Textarea_container__1ryls",head:"Textarea_head__1RQHp"}},65:function(e,t,a){e.exports=a(105)},73:function(e,t,a){},75:function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},76:function(e,t,a){}},[[65,3,2]]]);
//# sourceMappingURL=main.8e97d8fd.chunk.js.map