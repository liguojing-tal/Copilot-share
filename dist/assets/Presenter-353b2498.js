import{o as d,e as k,f as e,z as S,A as P,q as h,d as M,B as y,v,C as B,_ as D,D as z,E as H,c as b,a as R,G as $,H as q,I as A,J as I,K as U,L as E,M as L,N as F,O,P as W,g as i,k as u,t as Z,n as x,Q as N,S as V,l as G,R as J,T as w,U as K,F as Q,V as X,W as Y,s as j,X as ee,Y as te,m as T,Z as se,$ as oe,a0 as le,a1 as ne,i as ae,a2 as ie,a3 as re}from"./index-bb7cab75.js";import{N as ce}from"./NoteDisplay-7e1f5714.js";import ue from"./DrawingControls-eb034ab0.js";import"/example-image.png";import"/copilot-context.mkv";import"/prompt-demo.mkv";import"/basic-prompt.png";import"/prompt-result-marked.png";import"/more-tabs.png";import"/chatGPT.png";import"/copilot-chat.png";import"/explain.mkv";import"/ask-question.png";import"/copilot-doc.png";import"/metrics.png";import"/make-better.mkv";import"/sonar-lint.png";import"/sonar-lint.mkv";import"/monitor.png";import"/zhiban.png";const de={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},pe=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),me=[pe];function _e(o,n){return d(),k("svg",de,me)}const ve={name:"carbon-renew",render:_e},he={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fe=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),ge=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),xe=[fe,ge];function we(o,n){return d(),k("svg",he,xe)}const Se={name:"carbon-time",render:we},ye="/assets/logo-title-horizontal-96c3c915.png";function ke(){const o=S(Date.now()),n=P({interval:1e3}),p=h(()=>{const t=(n.value-o.value)/1e3,l=Math.floor(t%60).toString().padStart(2,"0");return`${Math.floor(t/60).toString().padStart(2,"0")}:${l}`});function m(){o.value=n.value}return{timer:p,resetTimer:m}}const Ce=M({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(o){const n=o,p=h(()=>{var t,l,s;return(s=(l=(t=y.value)==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:s.note}),m=h(()=>{var t,l,s;return(s=(l=(t=y.value)==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:s.noteHTML});return(t,l)=>(d(),v(ce,{class:B(n.class),note:p.value,"note-html":m.value},null,8,["class","note","note-html"]))}}),be=D(Ce,[["__file","/Users/uniqueli/Documents/ShareCopilot/copilot/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=o=>(X("data-v-574fd206"),o=o(),Y(),o),$e={class:"bg-main h-full slidev-presenter"},Ne={class:"grid-container"},Ve={class:"grid-section top flex"},Te=f(()=>e("img",{src:ye,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"}},null,-1)),Me=f(()=>e("div",{class:"flex-auto"},null,-1)),Be={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},De=f(()=>e("div",{class:"context"}," current ",-1)),Pe=f(()=>e("div",{class:"context"}," next ",-1)),ze={class:"grid-section note overflow-auto"},He={class:"grid-section bottom"},Re={class:"progress-bar"},qe=M({__name:"Presenter",setup(o){const n=S();z(),H(n);const p=b.titleTemplate.replace("%s",b.title||"Slidev");R({title:`Presenter - ${p}`});const{timer:m,resetTimer:t}=ke(),l=S([]),s=h(()=>$.value<q.value?{route:y.value,clicks:$.value+1}:A.value?{route:I.value,clicks:0}:null);return U(),E(()=>{const C=n.value.querySelector("#slide-content"),r=L(F()),g=O();W(()=>{if(!g.value||ee.value||!te.value)return;const c=C.getBoundingClientRect(),a=(r.x-c.left)/c.width*100,_=(r.y-c.top)/c.height*100;if(!(a<0||a>100||_<0||_>100))return{x:a,y:_}},c=>{j.cursor=c})}),(C,r)=>{const g=Se,c=ve;return d(),k(Q,null,[e("div",$e,[e("div",Ne,[e("div",Ve,[Te,Me,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:r[0]||(r[0]=(...a)=>i(t)&&i(t)(...a))},[u(g,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",Be,Z(i(m)),1)]),e("div",{ref_key:"main",ref:n,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(i(T))},[u(V,{key:"main",class:"h-full w-full"},{default:N(()=>[u(se,{context:"presenter"})]),_:1}),De],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(i(T))},[s.value?(d(),v(V,{key:"next",class:"h-full w-full"},{default:N(()=>{var a;return[u(i(le),{is:(a=s.value.route)==null?void 0:a.component,"clicks-elements":l.value,"onUpdate:clicksElements":r[1]||(r[1]=_=>l.value=_),clicks:s.value.clicks,"clicks-disabled":!1,class:B(i(oe)(s.value.route)),route:s.value.route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):G("v-if",!0),Pe],4),e("div",ze,[(d(),v(be,{key:2,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",He,[u(ie,{persist:!0})]),(d(),v(ue,{key:0}))]),e("div",Re,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(i(ne)-1)/(i(ae)-1)*100}%`})},null,4)])]),u(re),u(K,{modelValue:i(w),"onUpdate:modelValue":r[2]||(r[2]=a=>J(w)?w.value=a:null)},null,8,["modelValue"])],64)}}});const lt=D(qe,[["__scopeId","data-v-574fd206"],["__file","/Users/uniqueli/Documents/ShareCopilot/copilot/node_modules/@slidev/client/internals/Presenter.vue"]]);export{lt as default};
