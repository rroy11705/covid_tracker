(this.webpackJsonpcorona_app=this.webpackJsonpcorona_app||[]).push([[0],{20:function(e,t,a){e.exports={container:"Cards_container__3VC6N",infected:"Cards_infected__3OC29",recovered:"Cards_recovered__34daW",deaths:"Cards_deaths__3B8Nc"}},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(69),o=a.n(c),u=a(5),s=a.n(u),i=a(10),l=a(70),d=a(71),p=a(83),f=a(82),m=a(29),v=a(40),h=a(30),b=a.n(h),C="https://covid19.mathdro.id/api",y=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=C,t&&(a="".concat(C,"/countries/").concat(t)),e.prev=2,e.next=5,b.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(C,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(C,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),E=a(72),x=a.n(E),O=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(n.useState)({}),d=Object(m.a)(l,2),p=d[0],f=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=a?r.a.createElement(v.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null,b=p[0]?r.a.createElement(v.Line,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:x.a.container},u?h:b)},j=a(230),w=a(229),N=a(73),k=a.n(N),D=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(m.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,g();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(j.a,{className:k.a.formControl},r.a.createElement(w.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},S=a(226),I=a(231),V=a(227),U=a(228),B=a(78),T=a.n(B),A=a(79),L=a.n(A),W=a(80),J=a.n(W),P=function(e){var t=e.className,a=e.cardTitle,n=e.value,c=e.lastUpdate,o=e.cardSubtitle;return r.a.createElement(S.a,{item:!0,xs:12,md:3,component:I.a,className:L()(J.a.card,t)},r.a.createElement(V.a,null,r.a.createElement(U.a,{color:"textSecondary",gutterBottom:!0},a),r.a.createElement(U.a,{variant:"h5",component:"h2"},r.a.createElement(T.a,{start:0,end:n,duration:2.75,separator:","})),r.a.createElement(U.a,{color:"textSecondary"},new Date(c).toDateString()),r.a.createElement(U.a,{variant:"body2",component:"p"},o)))},R=a(20),F=a.n(R),G=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:F.a.container},r.a.createElement(S.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(P,{className:F.a.infected,cardTitle:"Infected",value:a.value,lastUpdate:o,cardSubtitle:"Number of active cases from COVID-19."}),r.a.createElement(P,{className:F.a.recovered,cardTitle:"Recovered",value:n.value,lastUpdate:o,cardSubtitle:"Number of recoveries from COVID-19."}),r.a.createElement(P,{className:F.a.deaths,cardTitle:"Deaths",value:c.value,lastUpdate:o,cardSubtitle:"Number of deaths caused by COVID-19."}))):"Loading..."},K=a(42),M=a.n(K),Q=a(81),q=a.n(Q),z=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:M.a.container},r.a.createElement("img",{className:M.a.image,src:q.a,alt:"COVID-19"}),r.a.createElement(G,{data:t}),r.a.createElement(D,{handleCountryChange:this.handleCountryChange}),r.a.createElement(O,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(z,null),document.getElementById("root"))},42:function(e,t,a){e.exports={container:"App_container__3nKlp",image:"App_image__WLn9r"}},72:function(e,t,a){e.exports={container:"Chart_container__1WCDv"}},73:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2BVFQ"}},80:function(e,t,a){e.exports={card:"Card_card__2NvVt"}},81:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},85:function(e,t,a){e.exports=a(208)}},[[85,1,2]]]);
//# sourceMappingURL=main.91c2070a.chunk.js.map