var M=l=>{throw TypeError(l)};var q=(l,d,u)=>d.has(l)||M("Cannot "+u);var t=(l,d,u)=>(q(l,d,"read from private field"),u?u.call(l):d.get(l)),f=(l,d,u)=>d.has(l)?M("Cannot add the same private member more than once"):d instanceof WeakSet?d.add(l):d.set(l,u),h=(l,d,u,k)=>(q(l,d,"write to private field"),k?k.call(l,u):d.set(l,u),u),C=(l,d,u)=>(q(l,d,"access private method"),u);(async()=>{var U,a,m,w,y,b,_,A,I,L,O,$,S,x,P;(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();const l="modulepreload",d=function(o){return"/JOSH/"+o},u={},k=function(o,e,s){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),c=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.allSettled(e.map(g=>{if(g=d(g),g in u)return;u[g]=!0;const T=g.endsWith(".css"),Y=T?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${Y}`))return;const E=document.createElement("link");if(E.rel=T?"stylesheet":l,T||(E.as="script"),E.crossOrigin="",E.href=g,c&&E.setAttribute("nonce",c),document.head.appendChild(E),T)return new Promise((Z,ee)=>{E.addEventListener("load",Z),E.addEventListener("error",()=>ee(new Error(`Unable to preload CSS for ${g}`)))})}))}function n(i){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=i,window.dispatchEvent(c),!c.defaultPrevented)throw i}return r.then(i=>{for(const c of i||[])c.status==="rejected"&&n(c.reason);return o().catch(n)})};let N=null,R=null;async function W(){return(await k(async()=>{const{default:o}=await import("./re_viewer-BA9PaZRE.js");return{default:o}},[])).default}async function D(){return fetch(new URL("/JOSH/assets/re_viewer_bg-D3lypzTS.wasm",import.meta.url))}async function H(){(!N||!R)&&([N,R]=await Promise.all([W(),WebAssembly.compileStreaming(D())]));let o=N();return await o(R),class extends o.WebHandle{free(){super.free(),o.deinit()}}}let v=null;function V(){const o=new Uint8Array(16);return crypto.getRandomValues(o),Array.from(o).map(e=>e.toString(16).padStart(2,"0")).join("")}function j(o){return new Promise(e=>setTimeout(e,o))}class z{constructor(){f(this,A);f(this,U,V());f(this,a,null);f(this,m,null);f(this,w,"stopped");f(this,y,!1);f(this,b,!1);f(this,_,new Map);f(this,L,()=>{});f(this,O,()=>{v==null||v();const e=t(this,m),s=e.getBoundingClientRect(),r=()=>{e.style.left=s.left+"px",e.style.top=s.top+"px",e.style.width=s.width+"px",e.style.height=s.height+"px"},n=()=>e.removeAttribute("style"),i=c=>setTimeout(()=>requestAnimationFrame(c),B);e.classList.add(p.fullscreen_base,p.fullscreen_rect),r(),requestAnimationFrame(()=>{t(this,y)&&(e.classList.add(p.transition),i(()=>{t(this,y)&&(n(),document.body.classList.add(p.hide_scrollbars),document.documentElement.classList.add(p.hide_scrollbars),C(this,A,I).call(this,"fullscreen",!0))}))}),h(this,L,()=>{document.body.classList.remove(p.hide_scrollbars),document.documentElement.classList.remove(p.hide_scrollbars),r(),e.classList.remove(p.fullscreen_rect),i(()=>{t(this,y)||(n(),e.classList.remove(p.fullscreen_base,p.transition))}),v=null,h(this,y,!1),C(this,A,I).call(this,"fullscreen",!1)}),v=()=>t(this,L).call(this),h(this,y,!0)});K(),G()}async start(e,s,r){if(s??(s=document.body),r??(r={}),h(this,b,r.allow_fullscreen||!1),t(this,w)!=="stopped")return;h(this,w,"starting"),h(this,m,document.createElement("canvas")),t(this,m).style.width=r.width??"640px",t(this,m).style.height=r.height??"360px",s.append(t(this,m)),await j(0);let n=await H();if(t(this,w)!=="starting")return;const i=t(this,b)?{get_state:()=>t(this,y),on_toggle:()=>this.toggle_fullscreen()}:void 0;h(this,a,new n({...r,fullscreen:i}));try{await t(this,a).start(t(this,m))}catch(c){throw this.stop(),c}t(this,w)==="starting"&&(h(this,w,"ready"),C(this,A,I).call(this,"ready"),e&&this.open(e))}on(e,s){const r=t(this,_).get(e)??new Map;return r.set(s,{once:!1}),t(this,_).set(e,r),()=>r.delete(s)}once(e,s){const r=t(this,_).get(e)??new Map;return r.set(s,{once:!0}),t(this,_).set(e,r),()=>r.delete(s)}off(e,s){const r=t(this,_).get(e);r?r.delete(s):console.warn("Attempted to call `WebViewer.off` with an unregistered callback. Are you passing in the same function instance?")}get canvas(){return t(this,m)}get ready(){return t(this,w)==="ready"}open(e,s={}){if(!t(this,a))throw new Error(`attempted to open \`${e}\` in a stopped viewer`);const r=Array.isArray(e)?e:[e];for(const n of r)try{t(this,a).add_receiver(n,s.follow_if_http)}catch(i){throw this.stop(),i}}close(e){if(!t(this,a))throw new Error(`attempted to close \`${e}\` in a stopped viewer`);const s=Array.isArray(e)?e:[e];for(const r of s)try{t(this,a).remove_receiver(r)}catch(n){throw this.stop(),n}}stop(){var e,s,r;if(t(this,w)!=="stopped"){t(this,b)&&t(this,m)&&t(this,y)&&t(this,L).call(this),h(this,w,"stopped"),(e=t(this,m))==null||e.remove();try{(s=t(this,a))==null||s.destroy(),(r=t(this,a))==null||r.free()}catch(n){throw h(this,a,null),n}h(this,m,null),h(this,a,null),h(this,y,!1),h(this,b,!1)}}open_channel(e="rerun-io/web-viewer"){if(!t(this,a))throw new Error(`attempted to open channel "${e}" in a stopped web viewer`);const s=crypto.randomUUID();try{t(this,a).open_channel(s,e)}catch(c){throw this.stop(),c}const r=c=>{if(!t(this,a))throw new Error(`attempted to send data through channel "${e}" to a stopped web viewer`);try{t(this,a).send_rrd_to_channel(s,c)}catch(g){throw this.stop(),g}},n=()=>{if(!t(this,a))throw new Error(`attempted to send data through channel "${e}" to a stopped web viewer`);try{t(this,a).close_channel(s)}catch(c){throw this.stop(),c}},i=()=>t(this,w);return new F(r,n,i)}override_panel_state(e,s){if(!t(this,a))throw new Error(`attempted to set ${e} panel to ${s} in a stopped web viewer`);try{t(this,a).override_panel_state(e,s)}catch(r){throw this.stop(),r}}toggle_panel_overrides(e){if(!t(this,a))throw new Error("attempted to toggle panel overrides in a stopped web viewer");try{t(this,a).toggle_panel_overrides(e)}catch(s){throw this.stop(),s}}toggle_fullscreen(){if(t(this,b)){if(!t(this,a)||!t(this,m))throw new Error("attempted to toggle fullscreen mode in a stopped web viewer");t(this,y)?t(this,L).call(this):t(this,O).call(this)}}}U=new WeakMap,a=new WeakMap,m=new WeakMap,w=new WeakMap,y=new WeakMap,b=new WeakMap,_=new WeakMap,A=new WeakSet,I=function(e,s){setTimeout(()=>{const r=t(this,_).get(e);if(r)for(const[n,{once:i}]of[...r.entries()])n(s),i&&r.delete(n)},0)},L=new WeakMap,O=new WeakMap;class F{constructor(e,s,r){f(this,$);f(this,S);f(this,x);f(this,P,!1);h(this,$,e),h(this,S,s),h(this,x,r)}get ready(){return!t(this,P)&&t(this,x).call(this)==="ready"}send_rrd(e){this.ready&&t(this,$).call(this,e)}close(){this.ready&&(t(this,S).call(this),h(this,P,!0))}}$=new WeakMap,S=new WeakMap,x=new WeakMap,P=new WeakMap;const p={hide_scrollbars:"rerun-viewer-hide-scrollbars",fullscreen_base:"rerun-viewer-fullscreen-base",fullscreen_rect:"rerun-viewer-fullscreen-rect",transition:"rerun-viewer-transition"},B=100,J=`
  html.${p.hide_scrollbars},
  body.${p.hide_scrollbars} {
    scrollbar-gutter: auto !important;
    overflow: hidden !important;
  }

  .${p.fullscreen_base} {
    position: fixed;
    z-index: 99999;
  }

  .${p.transition} {
    transition: all ${B/1e3}s linear;
  }

  .${p.fullscreen_rect} {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;function K(){const o="__rerun_viewer_style";if(document.getElementById(o))return;const e=document.createElement("style");e.id=o,e.appendChild(document.createTextNode(J)),document.head.appendChild(e)}function G(){window.addEventListener("keyup",o=>{o.code==="Escape"&&(v==null||v())})}const Q="https://app.rerun.io/version/0.20.3/examples/arkit_scenes.rrd",X=document.getElementById("viewer-container");await new z().start(Q,X)})();