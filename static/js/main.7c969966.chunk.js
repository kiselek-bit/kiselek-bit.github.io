(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,function(e,a,t){e.exports={wrapper:"Message_wrapper__dFZF8",message:"Message_message__ckRWj",name:"Message_name__3qVfR",time:"Message_time__3ICSL",message_data:"Message_message_data__mGWx6"}},,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__1N-wr",errorInput:"SuperInputText_errorInput__3g0P6",error:"SuperInputText_error__2UIQn",span:"SuperInputText_span__24duA"}},function(e,a,t){e.exports={default:"SuperButton_default__yduVG",red:"SuperButton_red__3GMe1"}},function(e,a,t){e.exports={blue:"HW4_blue__1A1Im",column:"HW4_column__1U__M",button:"HW4_button__1lsiW"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__1t21x",spanClassName:"SuperCheckbox_spanClassName__3CJJ7"}},,,function(e,a,t){e.exports={App:"App_App__2sxd3"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__O5z21",error:"Greeting_error__1zZXO"}},,function(e,a,t){e.exports=t(21)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),c=t.n(l),s=(t(20),t(12)),o=t.n(s),u=t(3),i=t.n(u);var m=function(e){return r.a.createElement("div",{className:i.a.wrapper},r.a.createElement("img",{src:e.avatar}),r.a.createElement("div",{className:i.a.message},r.a.createElement("div",{className:i.a.name},e.name),r.a.createElement("div",{className:i.a.message_data},e.message),r.a.createElement("div",{className:i.a.time},e.time)))},d={avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Ignat",message:"Hello! \nI'll teach you coding!",time:"22:00"};var p=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(m,{avatar:d.avatar,name:d.name,message:d.message,time:d.time}),r.a.createElement("hr",null),r.a.createElement("hr",null))},h=t(1),_=t(2),E=t(7),f=t.n(E),g=function(e){var a=e.red,t=e.className,n=Object(_.a)(e,["red","className"]),l="".concat(a?f.a.red:f.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))};var v=function(e){return r.a.createElement("div",null,e.affair.name,r.a.createElement(g,{onClick:function(){e.deleteAffairCallback(e.affair._id)},red:!0},"X"))};var C=function(e){var a=e.data.map((function(a){return r.a.createElement(v,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement(g,{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(g,{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(g,{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(g,{onClick:function(){e.setFilter("low")}},"Low"))},b=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var k=function(){var e=Object(n.useState)(b),a=Object(h.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),s=Object(h.a)(c,2),o=s[0],u=s[1],i=function(e,a){return"all"===a?e:"high"===a||"middle"===a||"low"===a?e.filter((function(e){return e.priority===a})):void 0}(t,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(C,{data:i,setFilter:function(e){u(e)},deleteAffairCallback:function(e){return l(function(e,a){return e=e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},N=t(14),x=t(13),O=t.n(x),w=t(6),y=t.n(w),j=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,u=Object(_.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(y.a.error," ").concat(o||""),m="".concat(c?y.a.errorInput:y.a.superInput," ").concat(s);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},u)),c&&r.a.createElement("span",{className:i},c))},S=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,s=e.onKeyPressCallback,o=l&&O.a.error;return r.a.createElement("div",null,r.a.createElement(j,{value:a,onChange:t,className:o,onKeyPress:s,error:l}),r.a.createElement("span",null,l),r.a.createElement(g,{onClick:n,red:!1},"add"),r.a.createElement("span",null,c))},I=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(h.a)(l,2),s=c[0],o=c[1],u=Object(n.useState)(""),i=Object(h.a)(u,2),m=i[0],d=i[1],p=function(){if(""===s.trim())return d("Error"),void o("");s=s.trim(),t(s),alert("Hello  ".concat(s,"!")),o("")},_=a.length;return r.a.createElement(S,{name:s,setNameCallback:function(e){o(e.currentTarget.value),d("")},addUser:p,error:m,totalUsers:_,onKeyPressCallback:function(e){"Enter"===e.key&&""!==s?p():d("Error")}})},A=t(23);var T=function(){var e=Object(n.useState)([]),a=Object(h.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(I,{users:t,addUserCallback:function(e){var a={_id:Object(A.a)(),name:e};return l([a].concat(Object(N.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},W=t(8),F=t.n(W),M=t(9),P=t.n(M),U=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(_.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(P.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:s},c)),l&&r.a.createElement("span",{className:P.a.spanClassName},l))};var H=function(){var e=Object(n.useState)(""),a=Object(h.a)(e,2),t=a[0],l=a[1],c=t?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(n.useState)(!1),u=Object(h.a)(o,2),i=u[0],m=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:F.a.column},r.a.createElement(j,{value:t,onChangeText:l,onEnter:s,error:c,className:F.a.blue}),r.a.createElement(g,{red:!1,onClick:s},"delete "),r.a.createElement(U,{checked:i,onChangeChecked:m},"some text "),r.a.createElement(U,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var G=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(p,null),r.a.createElement(k,null),r.a.createElement(T,null),r.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.7c969966.chunk.js.map