import{d as v,r as C,B as a,o as l,c as p,k as u,f as c,b as f,z as y,e as d,h as b,l as k,ac as _,q as L,s as T}from"../modules/vue-qryzO8Wt.js";import{a as B}from"../index-2OZ3eH1-.js";import{u as g,f as S}from"./context-3pDhzecg.js";import"../modules/shiki-gHWd0iSs.js";const M=["href","innerHTML"],P=["href"],z=v({__name:"Link",props:{to:{},title:{}},setup(t){const{isPrintMode:n}=B();return(e,o)=>{const r=C("RouterLink");return!a(n)&&e.title?(l(),p(r,{key:0,to:String(e.to),onClick:o[0]||(o[0]=i=>i.target.blur()),innerHTML:e.title},null,8,["to","innerHTML"])):!a(n)&&!e.title?(l(),p(r,{key:1,to:String(e.to),onClick:o[1]||(o[1]=i=>i.target.blur())},{default:u(()=>[c(e.$slots,"default")]),_:3},8,["to"])):a(n)&&e.title?(l(),f("a",{key:2,href:`#${e.to}`,innerHTML:e.title},null,8,M)):(l(),f("a",{key:3,href:`#${e.to}`},[c(e.$slots,"default")],8,P))}}});function $(t){return t.startsWith("/")?"/cos1101_slides/"+t.slice(1):t}function H(t,n=!1){const e=t&&["#","rgb","hsl"].some(r=>t.indexOf(r)===0),o={background:e?t:void 0,color:t&&!e?"white":void 0,backgroundImage:e?void 0:t?n?`linear-gradient(#0005, #0008), url(${$(t)})`:`url("${$(t)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const N={class:"my-auto w-full"},R=v({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(t){g();const n=t,e=y(()=>H(n.background,!0));return(o,r)=>(l(),f("div",{class:"slidev-layout cover text-center",style:b(e.value)},[d("div",N,[c(o.$slots,"default")])],4))}}),O={__name:"toc.md__slidev_1",setup(t){const{$slidev:n,$nav:e,$clicksContext:o,$clicks:r,$page:i,$renderContext:w,$frontmatter:h}=g();return o.setup(),(V,s)=>{const m=z;return l(),p(R,L(T(a(S)(a(h),0))),{default:u(()=>[s[2]||(s[2]=d("h1",null,"Table of Contents",-1)),d("p",null,[k(m,{to:"/chapter5/"},{default:u(()=>s[0]||(s[0]=[_("Chapter 5")])),_:1})]),d("p",null,[k(m,{to:"/chapter7/"},{default:u(()=>s[1]||(s[1]=[_("Chapter 7")])),_:1})])]),_:1},16)}}};export{O as default};
