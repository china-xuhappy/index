import{_ as f}from"./index-j-wJh9pb.js";function l(n={}){const{immediate:o=!1,onNeedRefresh:g,onOfflineReady:u,onRegistered:a,onRegisteredSW:t,onRegisterError:i}=n;let r,s;const c=async(e=!0)=>{await s};async function d(){if("serviceWorker"in navigator){if(r=await f(()=>import("./workbox-window.prod.es5-Ck4lWPv4.js"),[]).then(({Workbox:e})=>new e("/sw.js",{scope:"/",type:"classic"})).catch(e=>{i?.(e)}),!r)return;r.register({immediate:o}).then(e=>{t?t("/sw.js",e):a?.(e)}).catch(e=>{i?.(e)})}}return s=d(),c}export{l as registerSW};