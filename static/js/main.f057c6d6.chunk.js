(this.webpackJsonpdiagnosu=this.webpackJsonpdiagnosu||[]).push([[0],{26:function(e,t,a){e.exports=a(59)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},58:function(e,t){window.watsonAssistantChatOptions={integrationID:"2a6b68d7-2e01-43d4-9455-21c992cdf0b9",region:"us-south",serviceInstanceID:"a67e5474-f948-4aba-957a-c6b9547e0150",onLoad:function(e){e.render()}},setTimeout((function(){var e=document.createElement("script");e.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js",document.head.appendChild(e)}))},59:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(4),c=a.n(o),i=(a(31),a(32),a(18)),r=a(19),u=a(5),l=a(24),m=a(22);a(33),a(34);var d=function(){return s.a.createElement("div",{className:"chat-window-header"},s.a.createElement("h1",null,"Welcome to the COVID Chat Bot"))},h=a(23),f=(a(35),function(e){var t=e.width,a=e.height,n=e.children,o=s.a.useState(-t),c=Object(h.a)(o,2),i=c[0],r=c[1];return s.a.useEffect((function(){r(0)}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"chat-window-sidebar",style:{transform:"translatex(".concat(i,"px)"),width:t,minHeight:a}},s.a.createElement("button",{onClick:function(){r(i<0?0:-t)},className:"toggle-sidebar",style:{transform:"translate(".concat(t,"px, 20vh)")}}),s.a.createElement("div",{className:"content"},n)))});var p=a(8),v=a(21),b=a.n(v),E=(a(58),["Help you determine if you need a test for COVID-19","Give you more information about COVID-19","Inform you on symptoms of COVID-19, the flu, and the common cold","Talk about the buckeyes"]),g=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).chatDialog=s.a.createRef(),n.submitMessage=n.submitMessage.bind(Object(u.a)(n)),n.state={sessionId:""},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.us-south.assistant.watson.cloud.ibm.com/instances/abadaf22-9195-425a-aa9a-3e86f1cb4a28/v2/assistants/cca390d2-78f4-442c-b2e4-6275fe74ed82/sessions?version=2020-04-01",{headers:{Authorization:"Basic YXBpa2V5OjJWYWo3VVQ1REh6Nkt6Y28xOHUyM2pyRVpFcHJ5Xzc5WGs3R3ozVEYxYnBB"},method:"POST"}).then((function(e){return e.json()})).then((function(t){return e.setState({sessionId:t.session_id})}))}},{key:"submitMessage",value:function(e){var t=this;this.props.dispatch({type:"SEND_USER_MESSAGE",content:e}),fetch("https://api.us-south.assistant.watson.cloud.ibm.com/instances/abadaf22-9195-425a-aa9a-3e86f1cb4a28/v2/assistants/cca390d2-78f4-442c-b2e4-6275fe74ed82/sessions/".concat(this.state.sessionId,"/message?version=2020-04-01"),{body:JSON.stringify({input:{text:e}}),headers:{Authorization:"Basic YXBpa2V5OjJWYWo3VVQ1REh6Nkt6Y28xOHUyM2pyRVpFcHJ5Xzc5WGs3R3ozVEYxYnBB","Content-Type":"application/json"},method:"POST"}).then((function(e){return e.json()})).then((function(e){return e.output.generic.forEach((function(e){t.props.dispatch({type:"SEND_WATSON_MESSAGE",content:e})}))}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(d,null),s.a.createElement("div",{className:"main-wrapper"},s.a.createElement(f,{width:300,height:"100vh"},s.a.createElement("h1",{className:"side-bar"}," ",s.a.createElement("a",{href:"https://www.cdc.gov/coronavirus/2019-ncov/more/index.html"},"Center for Disease Control and Prevention: Covid")," "),s.a.createElement("h1",{className:"side-bar"}," ",s.a.createElement("a",{href:"https://www.nih.gov/coronavirus"},"National Institutes of Health: Covid")," "),s.a.createElement("h1",{className:"side-bar"}," ",s.a.createElement("a",{href:"https://www.columbus.gov/covid19resources/"},"City of Columbus Covid Resources")," ")),s.a.createElement("div",{className:"youtube"},s.a.createElement(b.a,{url:"https://www.youtube.com/watch?v=DCdxsnRF1Fk&ab_channel=UpToDate"})),s.a.createElement("div",{className:"Capabilities"},s.a.createElement("h3",null,"Dr. Brutus Can:"),s.a.createElement("ul",null,E)),s.a.createElement("div",{className:"chat-window"},s.a.createElement("embedded_bot",null))))}}]),a}(s.a.Component),w=Object(p.b)()(g);var y=function(){return s.a.createElement("div",{"data-testid":"app-div",className:"App"},s.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=a(7),N=a(25),S=a(12);var C=Object(O.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{messages:[],isWaiting:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_WATSON_MESSAGE":if("option"===t.content.response_type){var a=t.content.options.map((function(e){return{content:e.label,isUser:!1}}));return{messages:e.messages.concat({content:t.content.title,isUser:!1}).concat(a),isWaiting:!1}}return{messages:[].concat(Object(S.a)(e.messages),[{content:t.content.text,isUser:!1}]),isWaiting:!1};case"SEND_USER_MESSAGE":return{messages:[].concat(Object(S.a)(e.messages),[{content:t.content,isUser:!0}]),isWaiting:!0};default:return Object(N.a)({},e)}}));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(p.a,{store:C},s.a.createElement(y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.f057c6d6.chunk.js.map