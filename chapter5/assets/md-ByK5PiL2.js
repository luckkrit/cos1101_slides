import{o as a,c as o,k as i,e as l,q as n,s as c,B as e}from"./modules/vue-CzH1KjaY.js";import{I as u}from"./slidev/default-Bsm9HjaY.js";import{u as m,f as p}from"./slidev/context--VELD4o4.js";import"./index-CcM2EEUT.js";import"./modules/shiki-NyjN1IAm.js";const d="/cos1101_slides/chapter5/images/chapter5/dma.png",P={__name:"chapter5.md__slidev_52",setup(f){const{$slidev:_,$nav:D,$clicksContext:t,$clicks:x,$page:k,$renderContext:v,$frontmatter:r}=m();return t.setup(),(M,s)=>(a(),o(u,n(c(e(p)(e(r),51))),{default:i(()=>s[0]||(s[0]=[l("h1",null,"Direct Memory Access",-1),l("div",{class:"flex flex-col gap-3"},[l("div",null,[l("ul",null,[l("li",null,"เป็นกระบวนการเฉพาะการถ่ายโอนข้อมูล Direct Memory Access เช่นไอโอที่เป็นดิสถ่ายโอนข้อมูลกับหน่วยความจำโอน โดยโอนเป็นบล็อกเป็นก้อน")]),l("div",{class:"flex gap-3"},[l("div",{class:"w-1/2"},[l("ul",null,[l("li",null,[l("p",null,"ซีพียูได้รับคำสั่งให้นำข้อมูลจากดิสมาใช้ ซีพียูจะเอาข้อมูลจาก Disk มาใช้โดยตรงไม่ได้ ซีพียูจะต้องได้รับคำสั่งให้ถ่ายโอนข้อมูลจากดิสไปหน่วยความจำก่อน โดยกระบวนการมีดังนี้"),l("ol",null,[l("li",null,"CPU ส่งคำสั่งไปที่ DMA"),l("li",null,"DMA ตอบรับขอใช้ BUS หลังจากนั้น CPU หยุดใช้ BUS และมอบ BUS ให้ DMA"),l("li",null,"ดึงข้อมูลจาก Disk"),l("li",null,"DMA ตอบ กลับ Disk ว่าได้ข้อมูลแล้ว"),l("li",null,"ส่งข้อมูลไป Main memory เป็นก้อนผ่าน DMA")])])])]),l("img",{src:d,class:"w-1/2 mt-2"})])])],-1)])),_:1},16))}};export{P as default};
