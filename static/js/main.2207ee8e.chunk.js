(this["webpackJsonpakka-platform-radar"]=this["webpackJsonpakka-platform-radar"]||[]).push([[0],{27:function(e,t,a){e.exports=a(63)},32:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(19),r=a.n(c),l=(a(32),a(24)),s=a(20),i=a(21),d=a.n(i);var u=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],r={rings:["core","assess","hold"],quadrants:["components","integrations","clouds"],data:a,dataUrl:"https://docs.google.com/spreadsheets/d/1k5wTMuNmEIK9lovMaCKMYmjC74ydn0dy-6SyWQnei48/edit"};return Object(n.useEffect)((function(){!function(e){var t=function(e){var t=setTimeout((function(){console.log("Radar cache invalidated: "+t),localStorage.removeItem("RADAR_DATA_"+r.dataUrl)}),1e3*e);console.log("Radar cache set: "+t)},a=localStorage.getItem("RADAR_DATA_"+r.dataUrl);a?(console.log("Cache hit"),c(JSON.parse(a)),t(10)):s.init({key:e,callback:function(e){c(e),localStorage.setItem("RADAR_DATA_"+r.dataUrl,JSON.stringify(e)),t(10)},simpleSheet:!0})}(r.dataUrl)}),[r.dataUrl,10]),o.a.createElement("div",{className:"App"},o.a.createElement(d.a,r))},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,64)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),o(e),c(e),r(e)}))};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root")),m()}},[[27,1,2]]]);
//# sourceMappingURL=main.2207ee8e.chunk.js.map