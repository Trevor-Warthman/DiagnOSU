(this.webpackJsonpdiagnosu=this.webpackJsonpdiagnosu||[]).push([[0],[,,,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},,,function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(10),r=a.n(c),i=(a(19),a(11)),o=a.n(i),l=(a(20),a(2)),u=a(3),m=a(1),h=a(5),d=a(4),g=a(12);a(8);function v(e){return s.a.createElement("div",{className:e.styleClass+" message"},s.a.createElement("span",null,e.content))}a(21);function f(e){return s.a.createElement("div",{className:"message-line"},s.a.createElement(v,{styleClass:"user-message",content:e.content}))}a(22),a(23);function b(e){return s.a.createElement("div",{className:"message-line"},s.a.createElement(v,{styleClass:"watson-message",content:e.content}))}var E=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={messages:[]},n.addMessage=n.addMessage.bind(Object(m.a)(n)),n.createMessageElement=n.createMessageElement.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"createMessageElement",value:function(e){return e.isUser?s.a.createElement(f,{content:e.content}):s.a.createElement(b,{content:e.content})}},{key:"addMessage",value:function(e){this.setState((function(t){return{messages:[].concat(Object(g.a)(t.messages),[e])}}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"chat-dialog"},this.state.messages.map((function(t){return e.createMessageElement(t)})))}}]),a}(s.a.Component),p=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={message:""},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"handleSubmit",value:function(e){this.props.onSubmit(this.state.message),this.setState({message:""}),e.preventDefault()}},{key:"handleChange",value:function(e){this.setState({message:e.target.value})}},{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("input",{type:"text",name:"input-message",value:this.state.message,onChange:this.handleChange}),s.a.createElement("button",{type:"submit",name:"submit"},"Enter"))}}]),a}(s.a.Component);a(24),a(25);var w=function(){return s.a.createElement("div",{className:"chat-window-header"},s.a.createElement("h1",null,"Welcome to the COVID Chat Bot"))},y=a(13),C=(a(26),function(e){var t=e.width,a=e.height,n=e.children,c=s.a.useState(-t),r=Object(y.a)(c,2),i=r[0],o=r[1];return s.a.useEffect((function(){o(0)}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"chat-window-sidebar",style:{transform:"translatex(".concat(i,"px)"),width:t,minHeight:a}},s.a.createElement("button",{onClick:function(){o(i<0?0:-t)},className:"toggle-sidebar",style:{transform:"translate(".concat(t,"px, 20vh)")}}),s.a.createElement("div",{className:"content"},n)))}),O=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).chatDialog=s.a.createRef(),n.submitMessage=n.submitMessage.bind(Object(m.a)(n)),n.state={count:0},n}return Object(u.a)(a,[{key:"submitMessage",value:function(e){var t;switch(this.state.count){case 0:t="What are your symptoms?";break;case 1:t="Have you already taken a covid test?";break;case 2:t="You should get a test ASAP.";break;default:t="Have a nice day"}this.chatDialog.current.addMessage({content:e,isUser:!0}),this.chatDialog.current.addMessage({content:t,isUser:!1}),this.setState({count:this.state.count+1})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(w,null),s.a.createElement(C,{width:300,height:"100vh"},s.a.createElement("h1",{class:"side-bar"}," ",s.a.createElement("a",{href:"https://www.cdc.gov/coronavirus/2019-ncov/more/index.html"},"Center for Disease Control and Prevention: Covid")," "),s.a.createElement("h1",{class:"side-bar"}," ",s.a.createElement("a",{href:"https://www.nih.gov/coronavirus"},"National Institutes of Health: Covid")," "),s.a.createElement("h1",{class:"side-bar"}," ",s.a.createElement("a",{href:"https://www.columbus.gov/covid19resources/"},"City of Columbus Covid Resources")," ")),s.a.createElement("div",{className:"chat-window"},s.a.createElement(E,{ref:this.chatDialog}),s.a.createElement(p,{onSubmit:this.submitMessage})))}}]),a}(s.a.Component);var j=function(){return s.a.createElement("div",{"data-testid":"app-div",className:"App"},s.a.createElement(O,null),s.a.createElement("img",{src:o.a,alt:"React Logo"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.1790a902.chunk.js.map