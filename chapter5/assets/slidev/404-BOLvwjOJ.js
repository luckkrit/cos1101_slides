import{d as m,_ as f,z as _,r as x,o as n,b as v,e as o,I as a,x as r,K as k,c as u,k as i,g as c}from"../modules/vue-DfCQnSJn.js";import{k as g,_ as h}from"../index-ua04NE4f.js";import"../monaco/bundled-types-B-1Ry6xy.js";import"../modules/file-saver-BirHVELW.js";import"../modules/shiki-CD7nly4B.js";const N={class:"grid justify-center text-center pt-15% gap-5"},y={class:"text-2xl"},B={class:"op-60"},C={class:"mt-3 flex flex-col gap-2 max-w-xs mx-auto w-full"},R=m({__name:"404",setup(w){const{currentRoute:l}=f(),{total:p}=g(),s=_(()=>{const t=l.value.path.match(/\d+/);if(t){const e=+t[0];if(e>0&&e<=p.value)return e}return null});return(d,t)=>{const e=x("RouterLink");return n(),v("div",N,[o("div",null,[t[2]||(t[2]=o("h1",{class:"text-9xl font-light"}," 404 ",-1)),o("p",y,[t[0]||(t[0]=a(" Page ")),o("code",B,r(k(l).path),1),t[1]||(t[1]=a(" not found "))])]),o("div",C,[s.value!==1?(n(),u(e,{key:0,to:"/",class:"page-link"},{default:i(()=>t[3]||(t[3]=[a(" Go Home ")])),_:1})):c("v-if",!0),s.value?(n(),u(e,{key:1,to:`/${s.value}`,class:"page-link"},{default:i(()=>[a(" Go to Slide "+r(s.value),1)]),_:1},8,["to"])):c("v-if",!0)])])}}}),b=h(R,[["__scopeId","data-v-2af184e6"]]);export{b as default};
