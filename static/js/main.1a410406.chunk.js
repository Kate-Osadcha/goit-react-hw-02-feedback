(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={item:"Statistics_item__wbN7U",value:"Statistics_value__3ukOG"}},,function(e,t,a){e.exports={list:"FeedbackOptions_list__1VxjJ",item:"FeedbackOptions_item__2ODRg",button:"FeedbackOptions_button__1LgeC"}},,function(e,t,a){e.exports={section:"Section_section__3DFnY",title:"Section_title__jxxRu"}},,,,,function(e,t,a){e.exports={message:"Notification_message__XcNut"}},,,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(6),i=a.n(s),r=(a(17),a(7)),o=a(8),l=a(9),j=a(12),b=a(11),d=a(5),u=a.n(d),h=a(0),O=function(e){var t=e.title,a=e.children;return Object(h.jsxs)("section",{className:u.a.section,children:[Object(h.jsx)("h1",{className:u.a.title,children:t}),a]})};O.defaultProps={title:"",children:[]};var x=O,m=a(3),p=a.n(m),v=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(h.jsx)("ul",{className:p.a.list,children:Object.keys(t).map((function(e){return Object(h.jsx)("li",{className:p.a.item,children:Object(h.jsx)("button",{className:p.a.button,type:"button",onClick:a,children:e})},e)}))})},f=a(10),g=a.n(f),k=function(e){var t=e.message;return Object(h.jsx)("p",{className:g.a.message,children:t})};k.defaultProps={message:""};var _=k,N=a(1),F=a.n(N),P=function(e){var t=e.good,a=e.neutral,c=e.bad,n=e.total,s=e.positivePercentage,i=n(),r=s();return Object(h.jsx)("div",{children:i?Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{className:F.a.item,children:Object(h.jsxs)("p",{children:["Good: ",Object(h.jsx)("span",{className:F.a.value,children:t})]})}),Object(h.jsx)("li",{className:F.a.item,children:Object(h.jsxs)("p",{children:["Neutral: ",Object(h.jsx)("span",{className:F.a.value,children:a})]})}),Object(h.jsx)("li",{className:F.a.item,children:Object(h.jsxs)("p",{children:["Bad: ",Object(h.jsx)("span",{className:F.a.value,children:c})]})}),Object(h.jsx)("li",{className:F.a.item,children:Object(h.jsxs)("p",{children:["Total: ",Object(h.jsx)("span",{className:F.a.value,children:i})]})}),Object(h.jsx)("li",{className:F.a.item,children:Object(h.jsxs)("p",{children:["Positive feedback:"," ",Object(h.jsxs)("span",{className:F.a.value,children:[r,"%"]})]})})]}):Object(h.jsx)(_,{message:"No feedback given"})})},y=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var a=t.target.textContent;e.setState((function(e){return Object(r.a)({},a,e[a]+=1)}))},e.countTotalFeedback=function(){return Object.keys(e.state).reduce((function(t,a){return t+e.state[a]}),0)},e.countPositiveFeedbackPercentage=function(){return Math.round(100*e.state.good/e.countTotalFeedback())},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,c=e.bad;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x,{title:"Please leave feedback",children:Object(h.jsx)(v,{options:this.state,onLeaveFeedback:this.onLeaveFeedback})}),Object(h.jsx)(x,{title:"Statistics",children:Object(h.jsx)(P,{good:t,neutral:a,bad:c,total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage})})]})}}]),a}(c.Component),S=y;i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.1a410406.chunk.js.map