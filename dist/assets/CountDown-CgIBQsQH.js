import{d,o as u,c as f,e as t,i as m,J as w,h as x,s as h,g,w as v,t as _,f as c,G as y,H as D}from"./index-C7cZQplB.js";const b={class:"inner-box-1"},k={class:"inner-box-2"},B={class:"content"},S=d({__name:"ShadowBlock",props:{class:{type:String,default:""}},setup(p){const e=p;return(l,i)=>(u(),f("div",{class:w(["out-box",e.class])},[t("div",b,[t("div",k,[t("div",B,[m(l.$slots,"default",{},void 0,!0)])])])],2))}}),T=x(S,[["__scopeId","data-v-8f5c87be"]]),$={class:"relative h-full w-full",style:{"font-family":"Digital"}},C={class:"absolute left-[50%] top-[50%] w-[180px] flex flex-row -translate-x-1/2 -translate-y-1/2"},N=t("div",{class:"relative grid w-fit place-items-center"},[t("div",{class:"opacity-0"},":"),t("div",{class:"absolute left-[1px] top-0 w-full"},".")],-1),F={class:"absolute left-[50%] top-[50%] w-[180px] text-[#0000001c] -translate-x-1/2 -translate-y-1/2 dark:text-[#ffffff1c]"},G={class:"absolute left-[calc(50%_-_150px)] top-[50%] text-[24px] opacity-30"},H=t("span",{class:"absolute left-[calc(50%_+_100px)] top-[50%] text-[24px] opacity-30"}," % ",-1),Y=d({__name:"CountDown",setup(p){const e=h(i());function l(o){const n=Date.now(),s=new Date;s.setHours(24,0,0,0),s.getTime()-n,setInterval(()=>{const r=Date.now();if(r>=s.getTime()){o();const a=new Date;a.setHours(24,0,0,0),a.getTime()-r}},1e3)}l(()=>{e.value=i()});function i(){const o=new Date().getFullYear(),n=new Date(o,2,0).getDate()===29?366:365,a=((Math.floor((new Date().getTime()-new Date(o,0,0).getTime())/864e5)+1)/n*100).toFixed(2);return Number(a)<10?`0${a}`:a}return(o,n)=>{const s=T;return u(),g(s,{class:"h-[300px] w-[400px] text-[5rem]"},{default:v(()=>[t("div",$,[t("span",C,[t("span",null,_(c(e).slice(0,2)),1),N,t("span",null,_(c(e).slice(3)),1)]),y(t("span",F," 00:00 ",512),[[D,Number(c(e))!==100&&Number(c(e))!==100]]),t("span",G,[t("span",null,_(new Date().getFullYear()),1)]),H])]),_:1})}}});export{Y as default};
