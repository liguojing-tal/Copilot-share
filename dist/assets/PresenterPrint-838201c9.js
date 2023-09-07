import{d as p,u as _,a as d,c,b as u,e as r,f as t,t as s,g as a,F as h,r as f,n as g,h as v,o as i,i as x,j as y,k as b,l as N,m as k,_ as P}from"./index-bb7cab75.js";import{N as w}from"./NoteDisplay-7e1f5714.js";import"/example-image.png";import"/copilot-context.mkv";import"/prompt-demo.mkv";import"/basic-prompt.png";import"/prompt-result-marked.png";import"/more-tabs.png";import"/chatGPT.png";import"/copilot-chat.png";import"/explain.mkv";import"/ask-question.png";import"/copilot-doc.png";import"/metrics.png";import"/make-better.mkv";import"/sonar-lint.png";import"/sonar-lint.mkv";import"/monitor.png";import"/zhiban.png";const S={class:"m-4"},V={class:"mb-10"},D={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},T={class:"text-lg"},B={class:"font-bold flex gap-2"},C={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),j={key:0,class:"border-gray-400/50 mb-8"},z=p({__name:"PresenterPrint",setup(F){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),d({title:`Notes - ${c.title}`});const l=u(()=>v.map(o=>{var n;return(n=o.meta)==null?void 0:n.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,n)=>(i(),r("div",{id:"page-root",style:g(a(k))},[t("div",S,[t("div",V,[t("h1",D,s(a(c).title),1),t("div",L,s(new Date().toLocaleString()),1)]),(i(!0),r(h,null,f(a(l),(e,m)=>(i(),r("div",{key:m,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",B,[t("div",C,s(e==null?void 0:e.no)+"/"+s(a(x)),1),y(" "+s(e==null?void 0:e.title)+" ",1),H])]),b(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),m<a(l).length-1?(i(),r("hr",j)):N("v-if",!0)]))),128))])],4))}}),ot=P(z,[["__file","/Users/uniqueli/Documents/ShareCopilot/copilot/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{ot as default};
