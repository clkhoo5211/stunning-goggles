const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PhArrowCircleDown-B305t-Sh.js","assets/property-C9JG5tag.js","assets/PhArrowClockwise-CJPxQhr_.js","assets/PhArrowDown-C4hT9BVu.js","assets/PhArrowLeft-Way4Cu-r.js","assets/PhArrowRight-Cp5ZME0F.js","assets/PhArrowSquareOut-NnrK69c5.js","assets/PhArrowsDownUp-BjBI4ckC.js","assets/PhArrowsLeftRight-CuLpbKRk.js","assets/PhArrowUp-Dph6j8rm.js","assets/PhArrowUpRight-BpJjRRRh.js","assets/PhArrowsClockwise-CFUT8X7R.js","assets/PhBank-Dchr4XQJ.js","assets/PhBrowser-dUu2TrC1.js","assets/PhCaretDown-78IuKU3V.js","assets/PhCaretLeft-_aiyH7n1.js","assets/PhCaretRight-8zJQEuDX.js","assets/PhCaretUp-CiCxKWwN.js","assets/PhCheck-CcADx8br.js","assets/PhCircleHalf-BYzSzd2h.js","assets/PhClock-UItiXeJq.js","assets/PhCompass-CUy3uA7t.js","assets/PhCopy-C-PDgSlZ.js","assets/PhCreditCard-CWRaUT6F.js","assets/PhCurrencyDollar-Cqla3AXT.js","assets/PhDesktop-BBIPrYLl.js","assets/PhDeviceMobile-BdsPaATg.js","assets/PhDotsThree-BMXCQl-0.js","assets/PhVault-l2PHF38a.js","assets/PhEnvelope-yUsis6yU.js","assets/PhFunnelSimple-Ba7BbWTp.js","assets/PhGlobe-DgLxBk5U.js","assets/PhIdentificationCard-Czjmq9Z3.js","assets/PhImage-BAJ_erz6.js","assets/PhInfo-Cr4DhVUE.js","assets/PhLightbulb-BX_7duTr.js","assets/PhMagnifyingGlass-Mygfryvz.js","assets/PhPaperPlaneRight-BeuCA660.js","assets/PhPlus-BMjcHjsT.js","assets/PhPower-CGffGmdb.js","assets/PhPuzzlePiece-wm_GpVSi.js","assets/PhQrCode-DRwRzXCH.js","assets/PhQuestion-M09j2U0T.js","assets/PhQuestionMark-BP9EMB6h.js","assets/PhSealCheck-BfG80yKn.js","assets/PhSignOut-C5YOWlPT.js","assets/PhSpinner-BXooDYzU.js","assets/PhTrash-Biq6rmmL.js","assets/PhUser-CAgZSpGe.js","assets/PhWarning-DPEydIPw.js","assets/PhWarningCircle-BqjT745H.js","assets/PhX-s-SmVExa.js"])))=>i.map(i=>d[i]);
import{_ as U,aF as Cn,aG as Xh,aH as ut,f as Fe,F as Cr,aI as d,aJ as Qh,aK as Jh,aL as ep,aM as tp}from"./wagmi-B9BWfMKM.js";import{b as ip,R,r as A,v as np,L as Mt,u as op,d as rp,e as Mn,B as sp}from"./vendor-CalhZtuG.js";import{C as $,n as Y,R as _,h as V,S as pe,d as B,ar as ap,z as ni,p as ae,as as lp,at as cp,au as da,x as u,av as H,b as Ee,v as ke,r as z,a as E,i as P,c as D,aw as dp,U as be,e as de,O as I,X as nn,A as me,M as je,g as Si,W as Ai,y as $r,s as Le,j as G,E as ft,ax as Tt,ay as kr,az as up,Z as Gl,aA as wt,aB as Jt,aC as xi,aD as gt,P as hp,$ as Lr,q as te,aE as Ji,u as kd,B as pp,w as en,t as fp,o as mp,T as Rr,a1 as Xa,a2 as Qa,aF as gp,Q as wp,a5 as ua,aG as bp,aH as yp,aI as vp,aJ as xp,ab as Cp,aa as $p,a9 as kp,a7 as Sp,ae as Ap,ac as Ep,a8 as _p}from"./reown-DQVHWXW5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=i(r);fetch(r.href,n)}})();var ha={},Zl=ip;ha.createRoot=Zl.createRoot,ha.hydrateRoot=Zl.hydrateRoot;function Pp(){try{return B.returnOpenHref(`${ae.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch{throw new Error("Could not open social popup")}}async function Tp(){_.push("ConnectingFarcaster");const e=V.getAuthConnector();if(e){const t=$.getAccountData();if(!(t!=null&&t.farcasterUrl))try{const{url:i}=await e.provider.getFarcasterUri();$.setAccountProp("farcasterUrl",i,$.state.activeChain)}catch(i){_.goBack(),pe.showError(i)}}}async function Np(e){_.push("ConnectingSocial");const t=V.getAuthConnector();let i=null;try{const o=setTimeout(()=>{throw new Error("Social login timed out. Please try again.")},45e3);if(t&&e){if(B.isTelegram()||(i=Pp()),i)$.setAccountProp("socialWindow",ap(i),$.state.activeChain);else if(!B.isTelegram())throw new Error("Could not create social popup");const{uri:r}=await t.provider.getSocialRedirectUri({provider:e});if(!r)throw i==null||i.close(),new Error("Could not fetch the social redirect uri");if(i&&(i.location.href=r),B.isTelegram()){ni.setTelegramSocialProvider(e);const n=B.formatTelegramSocialLoginUrl(r);B.openHref(n,"_top")}clearTimeout(o)}}catch(o){i==null||i.close();const r=B.parseError(o);pe.showError(r),Y.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:e,message:r}})}}async function Rp(e){$.setAccountProp("socialProvider",e,$.state.activeChain),Y.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),e==="farcaster"?await Tp():await Np(e)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jp=new Set(["children","localName","ref","style","className"]),Kl=new WeakMap,ql=(e,t,i,o,r)=>{const n=r==null?void 0:r[t];n===void 0?(e[t]=i,i==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):i!==o&&((s,a,l)=>{let c=Kl.get(s);c===void 0&&Kl.set(s,c=new Map);let h=c.get(a);l!==void 0?h===void 0?(c.set(a,h={handleEvent:l}),s.addEventListener(a,h)):h.handleEvent=l:h!==void 0&&(c.delete(a),s.removeEventListener(a,h))})(e,n,i)},hs=({react:e,tagName:t,elementClass:i,events:o,displayName:r})=>{const n=new Set(Object.keys(o??{})),s=e.forwardRef((a,l)=>{const c=e.useRef(new Map),h=e.useRef(null),f={},g={};for(const[p,b]of Object.entries(a))jp.has(p)?f[p==="className"?"class":p]=b:n.has(p)||p in i.prototype?g[p]=b:f[p]=b;return e.useLayoutEffect(()=>{if(h.current===null)return;const p=new Map;for(const b in g)ql(h.current,b,a[b],c.current.get(b),o),c.current.delete(b),p.set(b,a[b]);for(const[b,w]of c.current)ql(h.current,b,void 0,w,o);c.current=p}),e.useLayoutEffect(()=>{var p;(p=h.current)==null||p.removeAttribute("defer-hydration")},[]),f.suppressHydrationWarning=!0,e.createElement(t,{...f,ref:e.useCallback(p=>{h.current=p,typeof l=="function"?l(p):l!==null&&(l.current=p)},[l])})});return s.displayName=r??i.name,s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ip={attribute:!0,type:String,converter:cp,reflect:!1,hasChanged:lp},Dp=(e=Ip,t,i)=>{const{kind:o,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),o==="accessor"){const{name:s}=i;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(o==="setter"){const{name:s}=i;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+o)};function m(e){return(t,i)=>typeof i=="object"?Dp(e,t,i):((o,r,n)=>{const s=r.hasOwnProperty(n);return r.constructor.createProperty(n,o),s?Object.getOwnPropertyDescriptor(r,n):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(e){return m({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=e=>e??da;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sd=Symbol.for(""),Lp=e=>{if((e==null?void 0:e.r)===Sd)return e==null?void 0:e._$litStatic$},Bp=e=>({_$litStatic$:e,r:Sd}),Yl=new Map,Mp=e=>(t,...i)=>{const o=i.length;let r,n;const s=[],a=[];let l,c=0,h=!1;for(;c<o;){for(l=t[c];c<o&&(n=i[c],(r=Lp(n))!==void 0);)l+=r+t[++c],h=!0;c!==o&&a.push(n),s.push(l),c++}if(c===o&&s.push(t[o]),h){const f=s.join("$$lit$$");(t=Yl.get(f))===void 0&&(s.raw=s,Yl.set(f,t=s)),i=a}return e(t,...i)},Xl=Mp(u),Op=H`<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
  <g clip-path="url(#clip0_87_33)">
    <path d="M23.9367 2.29447e-07H6.05917C5.26333 -0.000218805 4.47526 0.156384 3.73997 0.46086C3.00469 0.765337 2.33661 1.21172 1.77391 1.7745C1.21121 2.33727 0.764917 3.00542 0.460542 3.74074C0.156167 4.47607 -0.000327963 5.26417 5.16031e-07 6.06V23.9433C4.48257e-07 24.7389 0.156744 25.5267 0.461276 26.2617C0.765808 26.9967 1.21216 27.6645 1.77484 28.2269C2.33752 28.7894 3.0055 29.2355 3.74061 29.5397C4.47573 29.8439 5.26358 30.0003 6.05917 30H23.9417C25.5486 29.9996 27.0895 29.3609 28.2257 28.2245C29.3618 27.0881 30 25.5469 30 23.94V6.06C29.9993 4.45241 29.3602 2.91091 28.2232 1.77449C27.0861 0.638064 25.5443 -0.000220881 23.9367 2.29447e-07Z" fill="url(#paint0_linear_87_33)"/>
    <path d="M14.8708 6.89259L15.4783 5.84259C15.5679 5.68703 15.6873 5.55064 15.8296 5.44122C15.9719 5.3318 16.1344 5.25148 16.3078 5.20486C16.4812 5.15824 16.662 5.14622 16.8401 5.1695C17.0181 5.19277 17.1898 5.25088 17.3453 5.34051C17.5009 5.43013 17.6373 5.54952 17.7467 5.69186C17.8561 5.83419 17.9364 5.99669 17.9831 6.17006C18.0297 6.34344 18.0417 6.5243 18.0184 6.70232C17.9952 6.88034 17.9371 7.05203 17.8474 7.20759L11.9949 17.3401H16.2283C17.5999 17.3401 18.3691 18.9526 17.7724 20.0701H5.36159C5.18215 20.0707 5.00436 20.0359 4.83845 19.9675C4.67254 19.8992 4.5218 19.7986 4.39492 19.6718C4.26803 19.5449 4.16751 19.3941 4.09915 19.2282C4.03079 19.0623 3.99593 18.8845 3.99659 18.7051C3.99659 17.9476 4.60492 17.3401 5.36159 17.3401H8.84159L13.2958 9.61926L11.9041 7.20426C11.738 6.89096 11.7 6.52543 11.7982 6.18469C11.8963 5.84395 12.1229 5.5546 12.4301 5.37763C12.7374 5.20065 13.1014 5.14987 13.4454 5.23599C13.7893 5.3221 14.0864 5.53838 14.2741 5.83926L14.8708 6.89259ZM9.60659 21.4759L8.29409 23.7526C8.20446 23.9082 8.08506 24.0446 7.94271 24.1541C7.80035 24.2636 7.63783 24.344 7.46441 24.3906C7.291 24.4373 7.11009 24.4493 6.93202 24.4261C6.75395 24.4028 6.58221 24.3447 6.42659 24.2551C6.27097 24.1655 6.13454 24.0461 6.02506 23.9037C5.91559 23.7613 5.83523 23.5988 5.78857 23.4254C5.74191 23.252 5.72986 23.0711 5.75311 22.893C5.77637 22.715 5.83446 22.5432 5.92409 22.3876L6.89909 20.7001C8.00159 20.3584 8.89742 20.6209 9.60659 21.4759ZM20.9066 17.3476H24.4583C25.2158 17.3476 25.8233 17.9551 25.8233 18.7126C25.8233 19.4701 25.2149 20.0776 24.4583 20.0776H22.4858L23.8166 22.3876C24.1916 23.0443 23.9708 23.8726 23.3149 24.2551C23.0006 24.4359 22.6274 24.4845 22.2772 24.3903C21.927 24.2961 21.6286 24.0667 21.4474 23.7526C19.2058 19.8643 17.5216 16.9534 16.4041 15.0151C15.2608 13.0426 16.0783 11.0626 16.8841 10.3909C17.7799 11.9293 19.1191 14.2501 20.9074 17.3476H20.9066Z" fill="white"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_87_33" x1="15" y1="2.29447e-07" x2="15" y2="30" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB"/>
      <stop offset="1" stop-color="#2072F3"/>
    </linearGradient>
    <clipPath id="clip0_87_33">
      <rect width="30" height="30" fill="white"/>
    </clipPath>
  </defs>
</svg>`,Wp=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Vp=H`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 11">
    <path
      fill="var(--apkt-tokens-theme-textPrimary)"
      d="M7.862 4.86c.159-1.064-.652-1.637-1.76-2.018l.36-1.443-.879-.218-.35 1.404c-.23-.058-.468-.112-.703-.166l.352-1.413-.877-.219-.36 1.442a29.02 29.02 0 0 1-.56-.132v-.005l-1.21-.302-.234.938s.652.15.638.158c.356.089.42.324.41.51l-.41 1.644a.715.715 0 0 1 .09.03l-.092-.024-.574 2.302c-.044.108-.154.27-.402.208.008.013-.639-.16-.639-.16L.227 8.403l1.142.285c.213.053.42.109.626.161l-.363 1.459.877.218.36-1.443c.239.065.472.125.7.182l-.36 1.436.879.219.363-1.456c1.497.283 2.623.17 3.097-1.185.381-1.09-.02-1.719-.807-2.129.574-.132 1.006-.51 1.12-1.289ZM5.856 7.673c-.272 1.09-2.107.5-2.702.353l.482-1.933c.595.149 2.503.443 2.22 1.58Zm.271-2.829c-.247.992-1.775.488-2.27.365l.436-1.753c.496.124 2.092.354 1.834 1.388Z"
    />
  </svg>
`,Fp=H`<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M14.9978 7.80003H27.4668C26.2032 5.61107 24.3857 3.79333 22.1968 2.52955C20.008 1.26577 17.525 0.600485 14.9975 0.600586C12.47 0.600687 9.98712 1.26617 7.79838 2.53012C5.60964 3.79408 3.79221 5.61197 2.52881 7.80103L8.76281 18.599L8.76881 18.598C8.13412 17.5044 7.79906 16.2628 7.79743 14.9983C7.79579 13.7339 8.12764 12.4914 8.7595 11.3961C9.39136 10.3008 10.3009 9.39159 11.3963 8.76005C12.4918 8.12851 13.7344 7.79702 14.9988 7.79903L14.9978 7.80003Z" fill="url(#paint0_linear_87_32)"/>
<path d="M21.237 18.5981L15.003 29.3961C17.5305 29.3961 20.0134 28.7308 22.2022 27.467C24.391 26.2032 26.2086 24.3854 27.4721 22.1965C28.7356 20.0075 29.4006 17.5245 29.4003 14.997C29.3999 12.4695 28.7342 9.9867 27.47 7.7981H15.002L15 7.8041C16.2642 7.80168 17.5067 8.13257 18.6022 8.76342C19.6977 9.39428 20.6076 10.3028 21.2401 11.3974C21.8726 12.492 22.2053 13.734 22.2048 14.9982C22.2042 16.2623 21.8704 17.504 21.237 18.5981Z" fill="url(#paint1_linear_87_32)"/>
<path d="M8.76502 18.601L2.53102 7.80298C1.26664 9.99172 0.600848 12.4748 0.600586 15.0025C0.600324 17.5302 1.2656 20.0134 2.52953 22.2024C3.79345 24.3914 5.61145 26.209 7.80071 27.4725C9.98998 28.736 12.4733 29.4008 15.001 29.4L21.236 18.602L21.232 18.598C20.6022 19.6941 19.6944 20.6049 18.6003 21.2383C17.5062 21.8717 16.2644 22.2055 15.0002 22.2059C13.7359 22.2063 12.4939 21.8733 11.3994 21.2406C10.3049 20.6079 9.39657 19.6977 8.76602 18.602L8.76502 18.601Z" fill="url(#paint2_linear_87_32)"/>
<path d="M14.9998 22.2C16.9094 22.2 18.7407 21.4415 20.091 20.0912C21.4412 18.741 22.1998 16.9096 22.1998 15C22.1998 13.0905 21.4412 11.2591 20.091 9.90888C18.7407 8.55862 16.9094 7.80005 14.9998 7.80005C13.0902 7.80005 11.2589 8.55862 9.90864 9.90888C8.55837 11.2591 7.7998 13.0905 7.7998 15C7.7998 16.9096 8.55837 18.741 9.90864 20.0912C11.2589 21.4415 13.0902 22.2 14.9998 22.2Z" fill="white"/>
<path d="M14.9998 20.7C16.5115 20.7 17.9614 20.0995 19.0303 19.0306C20.0993 17.9616 20.6998 16.5118 20.6998 15C20.6998 13.4883 20.0993 12.0385 19.0303 10.9695C17.9614 9.90058 16.5115 9.30005 14.9998 9.30005C13.4881 9.30005 12.0383 9.90058 10.9693 10.9695C9.90034 12.0385 9.2998 13.4883 9.2998 15C9.2998 16.5118 9.90034 17.9616 10.9693 19.0306C12.0383 20.0995 13.4881 20.7 14.9998 20.7Z" fill="#1A73E8"/>
<defs>
  <linearGradient id="paint0_linear_87_32" x1="3.29381" y1="2.99503" x2="38.0998" y2="2.99503" gradientUnits="userSpaceOnUse">
    <stop stop-color="#D93025"/>
    <stop offset="1" stop-color="#EA4335"/>
  </linearGradient>
  <linearGradient id="paint1_linear_87_32" x1="17.953" y1="29.1431" x2="34.194" y2="-0.298904" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FCC934"/>
    <stop offset="1" stop-color="#FBBC04"/>
  </linearGradient>
  <linearGradient id="paint2_linear_87_32" x1="22.873" y1="28.2" x2="6.63202" y2="-1.24102" gradientUnits="userSpaceOnUse">
    <stop stop-color="#1E8E3E"/>
    <stop offset="1" stop-color="#34A853"/>
  </linearGradient>
</defs>
</svg>`,zp=H` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,Up=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,Hp=H`<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 9 12"
>
  <path
    fill="var(--apkt-tokens-theme-textPrimary)"
    d="M4.666.001v4.435l3.748 1.675L4.666.001Zm0 0L.917 6.111l3.749-1.675V.001Zm0 8.984V12l3.75-5.19-3.75 2.176Zm0 3.014V8.985L.917 6.81 4.666 12Zm0-3.712 3.748-2.176-3.748-1.675v3.851Z"
  />
  <path fill="var(--apkt-tokens-theme-textPrimary)" d="m.917 6.111 3.749 2.176v-3.85L.917 6.11Z" />
</svg>`,Gp=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,Zp=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Kp=H`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`,qp=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Yp=H`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`,Xp=H` <svg width="27" height="30" viewBox="0 0 27 30" fill="none">
  <path d="M12.5395 14.3237L0.116699 27.5049V27.5188C0.251527 28.0177 0.49972 28.4788 0.841941 28.866C1.18416 29.2533 1.61117 29.5563 2.0897 29.7515C2.56823 29.9467 3.08536 30.0287 3.60081 29.9913C4.11625 29.9538 4.61609 29.7979 5.06139 29.5356L5.0975 29.512L19.0718 21.4519L12.5395 14.3237Z" fill="#EA4335"/>
  <path d="M25.103 12.0833L25.0919 12.0722L19.0611 8.57202L12.2607 14.6279L19.0847 21.4504L25.0919 17.9864C25.6229 17.6983 26.0665 17.2725 26.376 16.7537C26.6854 16.2349 26.8493 15.6422 26.8505 15.0381C26.8516 14.434 26.6899 13.8408 26.3824 13.3208C26.0749 12.8008 25.633 12.3734 25.103 12.0833Z" fill="#FBBC04"/>
  <path d="M0.116672 2.49553C0.047224 2.7761 0 3.05528 0 3.35946V26.6537C0 26.9565 0.0347234 27.237 0.116672 27.5162L12.959 14.6725L0.116672 2.49553Z" fill="#4285F4"/>
  <path d="M12.634 15.0001L19.0607 8.57198L5.0975 0.477133C4.65115 0.210463 4.14916 0.0506574 3.63079 0.0102139C3.11242 -0.0302296 2.59172 0.0497852 2.10941 0.244001C1.6271 0.438216 1.19625 0.741368 0.850556 1.12975C0.504864 1.51813 0.253698 1.98121 0.116699 2.48279L12.634 15.0001Z" fill="#34A853"/>
</svg>`,Qp=H`<svg width="75" height="20" viewBox="0 0 75 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6666 5.83334C11.6666 2.61168 14.2783 0 17.5 0H25.8334C29.055 0 31.6666 2.61168 31.6666 5.83334V14.1666C31.6666 17.3883 29.055 20 25.8334 20H17.5C14.2783 20 11.6666 17.3883 11.6666 14.1666V5.83334Z" fill="var(--apkt-tokens-theme-foregroundTertiary)"/>
<path d="M19.5068 13.7499L22.4309 5.83331H23.2895L20.3654 13.7499H19.5068Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M0 5.41666C0 2.42513 2.42513 0 5.41666 0C8.40821 0 10.8334 2.42513 10.8334 5.41666V14.5833C10.8334 17.5748 8.40821 20 5.41666 20C2.42513 20 0 17.5748 0 14.5833V5.41666Z" fill="var(--apkt-tokens-theme-foregroundTertiary)"/>
<path d="M4.89581 12.4997V11.458H5.93747V12.4997H4.89581Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M32.5 10C32.5 4.47715 36.6896 0 41.8578 0H65.6422C70.8104 0 75 4.47715 75 10C75 15.5229 70.8104 20 65.6422 20H41.8578C36.6896 20 32.5 15.5229 32.5 10Z" fill="var(--apkt-tokens-theme-foregroundTertiary)"/>
<path d="M61.7108 12.4475V7.82751H62.5266V8.52418C62.8199 8.01084 63.4157 7.70834 64.0757 7.70834C65.0749 7.70834 65.7715 8.34084 65.7715 9.56918V12.4475H64.9649V9.61503C64.9649 8.80831 64.5066 8.38668 63.8374 8.38668C63.1132 8.38668 62.5266 8.9642 62.5266 9.78001V12.4475H61.7108Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M56.5671 12.4475L55.7147 7.82748H56.4846L57.0896 11.6409L57.8871 9.12916H58.6479L59.4363 11.6134L60.0505 7.82748H60.8204L59.9679 12.4475H59.0513L58.2721 10.0458L57.4838 12.4475H56.5671Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M52.9636 12.5666C51.5611 12.5666 50.7361 11.5217 50.7361 10.1375C50.7361 8.76254 51.5611 7.70834 52.9636 7.70834C54.3661 7.70834 55.1911 8.76254 55.1911 10.1375C55.1911 11.5217 54.3661 12.5666 52.9636 12.5666ZM52.9636 11.8883C53.9719 11.8883 54.357 11.0266 54.357 10.1283C54.357 9.23914 53.9719 8.38668 52.9636 8.38668C51.9552 8.38668 51.5702 9.23914 51.5702 10.1283C51.5702 11.0266 51.9552 11.8883 52.9636 11.8883Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M47.8507 12.5666C46.494 12.5666 45.6415 11.5308 45.6415 10.1375C45.6415 8.75337 46.494 7.70834 47.8507 7.70834C48.9965 7.70834 50.0048 8.35917 49.8948 10.3483H46.4756C46.5398 11.2009 46.934 11.8975 47.8507 11.8975C48.4648 11.8975 48.8681 11.5217 49.0057 11.0908H49.8123C49.684 11.8609 48.9598 12.5666 47.8507 12.5666ZM46.494 9.73416H49.1065C49.0423 8.80831 48.6114 8.37751 47.8507 8.37751C47.0165 8.37751 46.604 8.98254 46.494 9.73416Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M41.7284 12.4475V7.82748H42.5625V8.60665C42.8559 8.09332 43.3601 7.82748 43.8825 7.82748H44.9917V8.60665H43.8184C43.0851 8.60665 42.5625 9.08331 42.5625 10.0092V12.4475H41.7284Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
</svg>

`,Jp=H`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 8">
    <path
      fill="var(--apkt-tokens-theme-textPrimary)"
      d="m9.524 6.307-1.51 1.584A.35.35 0 0 1 7.76 8H.604a.178.178 0 0 1-.161-.103.168.168 0 0 1 .033-.186l1.51-1.583a.35.35 0 0 1 .256-.11h7.154c.034 0 .068.01.096.029a.168.168 0 0 1 .032.26Zm-1.51-3.189a.35.35 0 0 0-.255-.109H.604a.178.178 0 0 0-.161.103.168.168 0 0 0 .033.186l1.51 1.583a.35.35 0 0 0 .256.11h7.154a.178.178 0 0 0 .16-.104.168.168 0 0 0-.032-.185l-1.51-1.584ZM.605 1.981H7.76a.357.357 0 0 0 .256-.11L9.525.289a.17.17 0 0 0 .032-.185.173.173 0 0 0-.16-.103H2.241a.357.357 0 0 0-.256.109L.476 1.692a.17.17 0 0 0-.033.185.178.178 0 0 0 .16.103Z"
    />
  </svg>
`,ef=H`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`,Ad=H`
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
  <path d="M8.37651 0H1.62309C0.381381 0 -0.405611 1.33944 0.219059 2.42225L4.38701 9.64649C4.659 10.1182 5.3406 10.1182 5.61259 9.64649L9.78139 2.42225C10.4052 1.34117 9.61822 0 8.37736 0H8.37651ZM4.38362 7.48005L3.47591 5.72329L1.2857 1.80606C1.14121 1.55534 1.31968 1.23405 1.62225 1.23405H4.38278V7.4809L4.38362 7.48005ZM8.71221 1.80521L6.52284 5.72414L5.61513 7.48005V1.2332H8.37566C8.67823 1.2332 8.85669 1.55449 8.71221 1.80521Z" fill="black"/>
</svg>
`,tf=H`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,nf=H`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,of=H`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,rf=H`
<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
<path d="M60.0468 39.2502L65.9116 33.3854C52.6562 20.13 36.1858 20.13 22.9304 33.3854L28.7952 39.2502C38.8764 29.169 49.9725 29.169 60.0536 39.2502H60.0468Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M58.0927 52.9146L44.415 39.2369L30.7373 52.9146L17.0596 39.2369L11.2017 45.0949L30.7373 64.6374L44.415 50.9597L58.0927 64.6374L77.6284 45.0949L71.7704 39.2369L58.0927 52.9146Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
</svg>`,sf=H`
<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
<path d="M60.0468 39.2502L65.9116 33.3854C52.6562 20.13 36.1858 20.13 22.9304 33.3854L28.7952 39.2502C38.8764 29.169 49.9725 29.169 60.0536 39.2502H60.0468Z" fill="var(--apkt-tokens-theme-textInvert)"/>
<path d="M58.0927 52.9146L44.415 39.2369L30.7373 52.9146L17.0596 39.2369L11.2017 45.0949L30.7373 64.6374L44.415 50.9597L58.0927 64.6374L77.6284 45.0949L71.7704 39.2369L58.0927 52.9146Z" fill="var(--apkt-tokens-theme-textInvert)"/>
</svg>`,af=H`
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_22274_4692)">
<path d="M0 6.64C0 4.17295 0 2.93942 0.525474 2.01817C0.880399 1.39592 1.39592 0.880399 2.01817 0.525474C2.93942 0 4.17295 0 6.64 0H9.36C11.8271 0 13.0606 0 13.9818 0.525474C14.6041 0.880399 15.1196 1.39592 15.4745 2.01817C16 2.93942 16 4.17295 16 6.64V9.36C16 11.8271 16 13.0606 15.4745 13.9818C15.1196 14.6041 14.6041 15.1196 13.9818 15.4745C13.0606 16 11.8271 16 9.36 16H6.64C4.17295 16 2.93942 16 2.01817 15.4745C1.39592 15.1196 0.880399 14.6041 0.525474 13.9818C0 13.0606 0 11.8271 0 9.36V6.64Z" fill="#C7B994"/>
<path d="M4.49038 5.76609C6.42869 3.86833 9.5713 3.86833 11.5096 5.76609L11.7429 5.99449C11.8398 6.08938 11.8398 6.24323 11.7429 6.33811L10.9449 7.11942C10.8964 7.16686 10.8179 7.16686 10.7694 7.11942L10.4484 6.80512C9.09617 5.48119 6.90381 5.48119 5.5516 6.80512L5.20782 7.14171C5.15936 7.18915 5.08079 7.18915 5.03234 7.14171L4.23434 6.3604C4.13742 6.26552 4.13742 6.11167 4.23434 6.01678L4.49038 5.76609ZM13.1599 7.38192L13.8702 8.07729C13.9671 8.17217 13.9671 8.32602 13.8702 8.4209L10.6677 11.5564C10.5708 11.6513 10.4137 11.6513 10.3168 11.5564L8.04388 9.33105C8.01965 9.30733 7.98037 9.30733 7.95614 9.33105L5.6833 11.5564C5.58638 11.6513 5.42925 11.6513 5.33234 11.5564L2.12982 8.42087C2.0329 8.32598 2.0329 8.17213 2.12982 8.07724L2.84004 7.38188C2.93695 7.28699 3.09408 7.28699 3.191 7.38188L5.46392 9.60726C5.48815 9.63098 5.52743 9.63098 5.55166 9.60726L7.82447 7.38188C7.92138 7.28699 8.07851 7.28699 8.17543 7.38187L10.4484 9.60726C10.4726 9.63098 10.5119 9.63098 10.5361 9.60726L12.809 7.38192C12.9059 7.28703 13.063 7.28703 13.1599 7.38192Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_22274_4692">
<path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="white"/>
</clipPath>
</defs>
</svg>
`,lf=H`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="11" transform="matrix(-1 0 0 1 23 1)" fill="#202020"/>
<circle cx="11" cy="11" r="11.5" transform="matrix(-1 0 0 1 23 1)" stroke="#C7B994" stroke-opacity="0.7"/>
<path d="M15.4523 11.0686L16.7472 9.78167C13.8205 6.87297 10.1838 6.87297 7.25708 9.78167L8.55201 11.0686C10.7779 8.85645 13.2279 8.85645 15.4538 11.0686H15.4523Z" fill="#C7B994"/>
<path d="M15.0199 14.067L12 11.0656L8.98 14.067L5.96004 11.0656L4.66663 12.3511L8.98 16.6393L12 13.638L15.0199 16.6393L19.3333 12.3511L18.0399 11.0656L15.0199 14.067Z" fill="#C7B994"/>
</svg>
`,Ql=H`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`,cf=Ee`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    height: inherit;
    width: inherit;
    object-fit: contain;
    object-position: center;
  }
`;var Go=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const df={add:"ph-plus",allWallets:"ph-dots-three",arrowBottom:"ph-arrow-down",arrowBottomCircle:"ph-arrow-circle-down",arrowClockWise:"ph-arrow-clockwise",arrowLeft:"ph-arrow-left",arrowRight:"ph-arrow-right",arrowTop:"ph-arrow-up",arrowTopRight:"ph-arrow-up-right",bank:"ph-bank",bin:"ph-trash",browser:"ph-browser",card:"ph-credit-card",checkmark:"ph-check",checkmarkBold:"ph-check",chevronBottom:"ph-caret-down",chevronLeft:"ph-caret-left",chevronRight:"ph-caret-right",chevronTop:"ph-caret-up",clock:"ph-clock",close:"ph-x",coinPlaceholder:"ph-circle-half",compass:"ph-compass",copy:"ph-copy",desktop:"ph-desktop",dollar:"ph-currency-dollar",download:"ph-vault",exclamationCircle:"ph-warning-circle",extension:"ph-puzzle-piece",externalLink:"ph-arrow-square-out",filters:"ph-funnel-simple",helpCircle:"ph-question",id:"ph-identification-card",image:"ph-image",info:"ph-info",lightbulb:"ph-lightbulb",mail:"ph-envelope",mobile:"ph-device-mobile",more:"ph-dots-three",networkPlaceholder:"ph-globe",nftPlaceholder:"ph-image",plus:"ph-plus",power:"ph-power",qrCode:"ph-qr-code",questionMark:"ph-question",refresh:"ph-arrow-clockwise",recycleHorizontal:"ph-arrows-clockwise",search:"ph-magnifying-glass",sealCheck:"ph-seal-check",send:"ph-paper-plane-right",signOut:"ph-sign-out",spinner:"ph-spinner",swapHorizontal:"ph-arrows-left-right",swapVertical:"ph-arrows-down-up",threeDots:"ph-dots-three",user:"ph-user",verify:"ph-seal-check",verifyFilled:"ph-seal-check",warning:"ph-warning",warningCircle:"ph-warning-circle",appStore:"",apple:"",bitcoin:"",chromeStore:"",cursor:"",discord:"",ethereum:"",etherscan:"",facebook:"",farcaster:"",github:"",google:"",playStore:"",reown:"",solana:"",ton:"",telegram:"",twitch:"",twitterIcon:"",twitter:"",walletConnect:"",walletConnectBrown:"",walletConnectLightBrown:"",x:"",wallet:""},uf={"ph-arrow-circle-down":()=>U(()=>import("./PhArrowCircleDown-B305t-Sh.js"),__vite__mapDeps([0,1])),"ph-arrow-clockwise":()=>U(()=>import("./PhArrowClockwise-CJPxQhr_.js"),__vite__mapDeps([2,1])),"ph-arrow-down":()=>U(()=>import("./PhArrowDown-C4hT9BVu.js"),__vite__mapDeps([3,1])),"ph-arrow-left":()=>U(()=>import("./PhArrowLeft-Way4Cu-r.js"),__vite__mapDeps([4,1])),"ph-arrow-right":()=>U(()=>import("./PhArrowRight-Cp5ZME0F.js"),__vite__mapDeps([5,1])),"ph-arrow-square-out":()=>U(()=>import("./PhArrowSquareOut-NnrK69c5.js"),__vite__mapDeps([6,1])),"ph-arrows-down-up":()=>U(()=>import("./PhArrowsDownUp-BjBI4ckC.js"),__vite__mapDeps([7,1])),"ph-arrows-left-right":()=>U(()=>import("./PhArrowsLeftRight-CuLpbKRk.js"),__vite__mapDeps([8,1])),"ph-arrow-up":()=>U(()=>import("./PhArrowUp-Dph6j8rm.js"),__vite__mapDeps([9,1])),"ph-arrow-up-right":()=>U(()=>import("./PhArrowUpRight-BpJjRRRh.js"),__vite__mapDeps([10,1])),"ph-arrows-clockwise":()=>U(()=>import("./PhArrowsClockwise-CFUT8X7R.js"),__vite__mapDeps([11,1])),"ph-bank":()=>U(()=>import("./PhBank-Dchr4XQJ.js"),__vite__mapDeps([12,1])),"ph-browser":()=>U(()=>import("./PhBrowser-dUu2TrC1.js"),__vite__mapDeps([13,1])),"ph-caret-down":()=>U(()=>import("./PhCaretDown-78IuKU3V.js"),__vite__mapDeps([14,1])),"ph-caret-left":()=>U(()=>import("./PhCaretLeft-_aiyH7n1.js"),__vite__mapDeps([15,1])),"ph-caret-right":()=>U(()=>import("./PhCaretRight-8zJQEuDX.js"),__vite__mapDeps([16,1])),"ph-caret-up":()=>U(()=>import("./PhCaretUp-CiCxKWwN.js"),__vite__mapDeps([17,1])),"ph-check":()=>U(()=>import("./PhCheck-CcADx8br.js"),__vite__mapDeps([18,1])),"ph-circle-half":()=>U(()=>import("./PhCircleHalf-BYzSzd2h.js"),__vite__mapDeps([19,1])),"ph-clock":()=>U(()=>import("./PhClock-UItiXeJq.js"),__vite__mapDeps([20,1])),"ph-compass":()=>U(()=>import("./PhCompass-CUy3uA7t.js"),__vite__mapDeps([21,1])),"ph-copy":()=>U(()=>import("./PhCopy-C-PDgSlZ.js"),__vite__mapDeps([22,1])),"ph-credit-card":()=>U(()=>import("./PhCreditCard-CWRaUT6F.js"),__vite__mapDeps([23,1])),"ph-currency-dollar":()=>U(()=>import("./PhCurrencyDollar-Cqla3AXT.js"),__vite__mapDeps([24,1])),"ph-desktop":()=>U(()=>import("./PhDesktop-BBIPrYLl.js"),__vite__mapDeps([25,1])),"ph-device-mobile":()=>U(()=>import("./PhDeviceMobile-BdsPaATg.js"),__vite__mapDeps([26,1])),"ph-dots-three":()=>U(()=>import("./PhDotsThree-BMXCQl-0.js"),__vite__mapDeps([27,1])),"ph-vault":()=>U(()=>import("./PhVault-l2PHF38a.js"),__vite__mapDeps([28,1])),"ph-envelope":()=>U(()=>import("./PhEnvelope-yUsis6yU.js"),__vite__mapDeps([29,1])),"ph-funnel-simple":()=>U(()=>import("./PhFunnelSimple-Ba7BbWTp.js"),__vite__mapDeps([30,1])),"ph-globe":()=>U(()=>import("./PhGlobe-DgLxBk5U.js"),__vite__mapDeps([31,1])),"ph-identification-card":()=>U(()=>import("./PhIdentificationCard-Czjmq9Z3.js"),__vite__mapDeps([32,1])),"ph-image":()=>U(()=>import("./PhImage-BAJ_erz6.js"),__vite__mapDeps([33,1])),"ph-info":()=>U(()=>import("./PhInfo-Cr4DhVUE.js"),__vite__mapDeps([34,1])),"ph-lightbulb":()=>U(()=>import("./PhLightbulb-BX_7duTr.js"),__vite__mapDeps([35,1])),"ph-magnifying-glass":()=>U(()=>import("./PhMagnifyingGlass-Mygfryvz.js"),__vite__mapDeps([36,1])),"ph-paper-plane-right":()=>U(()=>import("./PhPaperPlaneRight-BeuCA660.js"),__vite__mapDeps([37,1])),"ph-plus":()=>U(()=>import("./PhPlus-BMjcHjsT.js"),__vite__mapDeps([38,1])),"ph-power":()=>U(()=>import("./PhPower-CGffGmdb.js"),__vite__mapDeps([39,1])),"ph-puzzle-piece":()=>U(()=>import("./PhPuzzlePiece-wm_GpVSi.js"),__vite__mapDeps([40,1])),"ph-qr-code":()=>U(()=>import("./PhQrCode-DRwRzXCH.js"),__vite__mapDeps([41,1])),"ph-question":()=>U(()=>import("./PhQuestion-M09j2U0T.js"),__vite__mapDeps([42,1])),"ph-question-circle":()=>U(()=>import("./PhQuestionMark-BP9EMB6h.js"),__vite__mapDeps([43,1])),"ph-seal-check":()=>U(()=>import("./PhSealCheck-BfG80yKn.js"),__vite__mapDeps([44,1])),"ph-sign-out":()=>U(()=>import("./PhSignOut-C5YOWlPT.js"),__vite__mapDeps([45,1])),"ph-spinner":()=>U(()=>import("./PhSpinner-BXooDYzU.js"),__vite__mapDeps([46,1])),"ph-trash":()=>U(()=>import("./PhTrash-Biq6rmmL.js"),__vite__mapDeps([47,1])),"ph-user":()=>U(()=>import("./PhUser-CAgZSpGe.js"),__vite__mapDeps([48,1])),"ph-warning":()=>U(()=>import("./PhWarning-DPEydIPw.js"),__vite__mapDeps([49,1])),"ph-warning-circle":()=>U(()=>import("./PhWarningCircle-BqjT745H.js"),__vite__mapDeps([50,1])),"ph-x":()=>U(()=>import("./PhX-s-SmVExa.js"),__vite__mapDeps([51,1]))},hf={appStore:Op,apple:Wp,bitcoin:Vp,chromeStore:Fp,cursor:zp,discord:Up,ethereum:Hp,etherscan:Gp,facebook:Zp,farcaster:Kp,github:qp,google:Yp,playStore:Xp,reown:Qp,solana:Jp,ton:Ad,telegram:ef,twitch:tf,twitter:Ql,twitterIcon:nf,walletConnect:rf,walletConnectInvert:sf,walletConnectBrown:lf,walletConnectLightBrown:af,x:Ql,wallet:of},pf={"accent-primary":ke.tokens.core.iconAccentPrimary,"accent-certified":ke.tokens.core.iconAccentCertified,default:ke.tokens.theme.iconDefault,success:ke.tokens.core.iconSuccess,error:ke.tokens.core.iconError,warning:ke.tokens.core.iconWarning,inverse:ke.tokens.theme.iconInverse};let on=class extends P{constructor(){super(...arguments),this.size="md",this.name="copy",this.weight="bold",this.color="inherit"}render(){const t={xxs:"2",xs:"3",sm:"3",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7",inherit:"inherit"};this.style.cssText=`
      --local-width: ${this.size==="inherit"?"inherit":`var(--apkt-spacing-${t[this.size]})`};
      --local-color: ${this.color==="inherit"?"inherit":pf[this.color]}
    `;const i=df[this.name];if(i&&i!==""){const o=uf[i];o&&o();const r=Bp(i);return Xl`<${r} size=${{xxs:"0.5em",xs:"0.75em",sm:"0.75em",md:"1em",mdl:"1.25em",lg:"1.25em",xl:"1.5em",xxl:"1.75em"}[this.size]} weight="${this.weight}"></${r}>`}return hf[this.name]||Xl``}};on.styles=[z,cf];Go([m()],on.prototype,"size",void 0);Go([m()],on.prototype,"name",void 0);Go([m()],on.prototype,"weight",void 0);Go([m()],on.prototype,"color",void 0);on=Go([E("wui-icon")],on);const ff=D`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
    user-select: none;
    user-drag: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  :host([data-boxed='true']) {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-boxed='true']) img {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  :host([data-full='true']) img {
    width: 100%;
    height: 100%;
  }

  :host([data-boxed='true']) wui-icon {
    width: 20px;
    height: 20px;
  }

  :host([data-icon='error']) {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }
`;var Ht=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let bt=class extends P{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.boxed=!1,this.rounded=!1,this.fullSize=!1}render(){const t={inherit:"inherit",xxs:"2",xs:"3",sm:"4",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7","3xl":"8","4xl":"9","5xl":"10"};return this.style.cssText=`
      --local-width: ${this.size?`var(--apkt-spacing-${t[this.size]});`:"100%"};
      --local-height: ${this.size?`var(--apkt-spacing-${t[this.size]});`:"100%"};
      `,this.dataset.boxed=this.boxed?"true":"false",this.dataset.rounded=this.rounded?"true":"false",this.dataset.full=this.fullSize?"true":"false",this.dataset.icon=this.iconColor||"inherit",this.icon?u`<wui-icon
        color=${this.iconColor||"inherit"}
        name=${this.icon}
        size="lg"
      ></wui-icon> `:this.logo?u`<wui-icon size="lg" color="inherit" name=${this.logo}></wui-icon> `:u`<img src=${j(this.src)} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};bt.styles=[z,ff];Ht([m()],bt.prototype,"src",void 0);Ht([m()],bt.prototype,"logo",void 0);Ht([m()],bt.prototype,"icon",void 0);Ht([m()],bt.prototype,"iconColor",void 0);Ht([m()],bt.prototype,"alt",void 0);Ht([m()],bt.prototype,"size",void 0);Ht([m({type:Boolean})],bt.prototype,"boxed",void 0);Ht([m({type:Boolean})],bt.prototype,"rounded",void 0);Ht([m({type:Boolean})],bt.prototype,"fullSize",void 0);bt=Ht([E("wui-image")],bt);const mf=Ee`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 1.4s linear infinite;
    color: var(--local-color);
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;var Ja=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Po=class extends P{constructor(){super(...arguments),this.color="primary",this.size="lg"}render(){const t={primary:ke.tokens.theme.textPrimary,secondary:ke.tokens.theme.textSecondary,tertiary:ke.tokens.theme.textTertiary,invert:ke.tokens.theme.textInvert,error:ke.tokens.core.textError,warning:ke.tokens.core.textWarning,"accent-primary":ke.tokens.core.textAccentPrimary};return this.style.cssText=`
      --local-color: ${this.color==="inherit"?"inherit":t[this.color]};
      `,this.dataset.size=this.size,u`<svg viewBox="0 0 16 17" fill="none">
      <path
        d="M8.75 2.65625V4.65625C8.75 4.85516 8.67098 5.04593 8.53033 5.18658C8.38968 5.32723 8.19891 5.40625 8 5.40625C7.80109 5.40625 7.61032 5.32723 7.46967 5.18658C7.32902 5.04593 7.25 4.85516 7.25 4.65625V2.65625C7.25 2.45734 7.32902 2.26657 7.46967 2.12592C7.61032 1.98527 7.80109 1.90625 8 1.90625C8.19891 1.90625 8.38968 1.98527 8.53033 2.12592C8.67098 2.26657 8.75 2.45734 8.75 2.65625ZM14 7.90625H12C11.8011 7.90625 11.6103 7.98527 11.4697 8.12592C11.329 8.26657 11.25 8.45734 11.25 8.65625C11.25 8.85516 11.329 9.04593 11.4697 9.18658C11.6103 9.32723 11.8011 9.40625 12 9.40625H14C14.1989 9.40625 14.3897 9.32723 14.5303 9.18658C14.671 9.04593 14.75 8.85516 14.75 8.65625C14.75 8.45734 14.671 8.26657 14.5303 8.12592C14.3897 7.98527 14.1989 7.90625 14 7.90625ZM11.3588 10.9544C11.289 10.8846 11.2062 10.8293 11.115 10.7915C11.0239 10.7538 10.9262 10.7343 10.8275 10.7343C10.7288 10.7343 10.6311 10.7538 10.54 10.7915C10.4488 10.8293 10.366 10.8846 10.2963 10.9544C10.2265 11.0241 10.1711 11.107 10.1334 11.1981C10.0956 11.2893 10.0762 11.387 10.0762 11.4856C10.0762 11.5843 10.0956 11.682 10.1334 11.7731C10.1711 11.8643 10.2265 11.9471 10.2963 12.0169L11.7106 13.4312C11.8515 13.5721 12.0426 13.6513 12.2419 13.6513C12.4411 13.6513 12.6322 13.5721 12.7731 13.4312C12.914 13.2904 12.9932 13.0993 12.9932 12.9C12.9932 12.7007 12.914 12.5096 12.7731 12.3687L11.3588 10.9544ZM8 11.9062C7.80109 11.9062 7.61032 11.9853 7.46967 12.1259C7.32902 12.2666 7.25 12.4573 7.25 12.6562V14.6562C7.25 14.8552 7.32902 15.0459 7.46967 15.1866C7.61032 15.3272 7.80109 15.4062 8 15.4062C8.19891 15.4062 8.38968 15.3272 8.53033 15.1866C8.67098 15.0459 8.75 14.8552 8.75 14.6562V12.6562C8.75 12.4573 8.67098 12.2666 8.53033 12.1259C8.38968 11.9853 8.19891 11.9062 8 11.9062ZM4.64125 10.9544L3.22688 12.3687C3.08598 12.5096 3.00682 12.7007 3.00682 12.9C3.00682 13.0993 3.08598 13.2904 3.22688 13.4312C3.36777 13.5721 3.55887 13.6513 3.75813 13.6513C3.95738 13.6513 4.14848 13.5721 4.28937 13.4312L5.70375 12.0169C5.84465 11.876 5.9238 11.6849 5.9238 11.4856C5.9238 11.2864 5.84465 11.0953 5.70375 10.9544C5.56285 10.8135 5.37176 10.7343 5.1725 10.7343C4.97324 10.7343 4.78215 10.8135 4.64125 10.9544ZM4.75 8.65625C4.75 8.45734 4.67098 8.26657 4.53033 8.12592C4.38968 7.98527 4.19891 7.90625 4 7.90625H2C1.80109 7.90625 1.61032 7.98527 1.46967 8.12592C1.32902 8.26657 1.25 8.45734 1.25 8.65625C1.25 8.85516 1.32902 9.04593 1.46967 9.18658C1.61032 9.32723 1.80109 9.40625 2 9.40625H4C4.19891 9.40625 4.38968 9.32723 4.53033 9.18658C4.67098 9.04593 4.75 8.85516 4.75 8.65625ZM4.2875 3.88313C4.1466 3.74223 3.95551 3.66307 3.75625 3.66307C3.55699 3.66307 3.3659 3.74223 3.225 3.88313C3.0841 4.02402 3.00495 4.21512 3.00495 4.41438C3.00495 4.61363 3.0841 4.80473 3.225 4.94562L4.64125 6.35813C4.78215 6.49902 4.97324 6.57818 5.1725 6.57818C5.37176 6.57818 5.56285 6.49902 5.70375 6.35813C5.84465 6.21723 5.9238 6.02613 5.9238 5.82688C5.9238 5.62762 5.84465 5.43652 5.70375 5.29563L4.2875 3.88313Z"
        fill="currentColor"
      />
    </svg>`}};Po.styles=[z,mf];Ja([m()],Po.prototype,"color",void 0);Ja([m()],Po.prototype,"size",void 0);Po=Ja([E("wui-loading-spinner")],Po);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ed={ATTRIBUTE:1,CHILD:2},_d=e=>(...t)=>({_$litDirective$:e,values:t});class Pd{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,o){this._$Ct=t,this._$AM=i,this._$Ci=o}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const el=_d(class extends Pd{constructor(e){var t;if(super(e),e.type!==Ed.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var o,r;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!((o=this.nt)!=null&&o.has(n))&&this.st.add(n);return this.render(t)}const i=e.element.classList;for(const n of this.st)n in t||(i.remove(n),this.st.delete(n));for(const n in t){const s=!!t[n];s===this.st.has(n)||(r=this.nt)!=null&&r.has(n)||(s?(i.add(n),this.st.add(n)):(i.remove(n),this.st.delete(n)))}return dp}}),gf=D`
  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  /* -- Headings --------------------------------------------------- */
  .wui-font-h1-regular-mono {
    font-size: ${({textSize:e})=>e.h1};
    line-height: ${({typography:e})=>e["h1-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h1-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h1-regular {
    font-size: ${({textSize:e})=>e.h1};
    line-height: ${({typography:e})=>e["h1-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h1-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h1-medium {
    font-size: ${({textSize:e})=>e.h1};
    line-height: ${({typography:e})=>e["h1-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h1-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h2-regular-mono {
    font-size: ${({textSize:e})=>e.h2};
    line-height: ${({typography:e})=>e["h2-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h2-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h2-regular {
    font-size: ${({textSize:e})=>e.h2};
    line-height: ${({typography:e})=>e["h2-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h2-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h2-medium {
    font-size: ${({textSize:e})=>e.h2};
    line-height: ${({typography:e})=>e["h2-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h2-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h3-regular-mono {
    font-size: ${({textSize:e})=>e.h3};
    line-height: ${({typography:e})=>e["h3-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h3-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h3-regular {
    font-size: ${({textSize:e})=>e.h3};
    line-height: ${({typography:e})=>e["h3-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h3-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h3-medium {
    font-size: ${({textSize:e})=>e.h3};
    line-height: ${({typography:e})=>e["h3-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h3-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h4-regular-mono {
    font-size: ${({textSize:e})=>e.h4};
    line-height: ${({typography:e})=>e["h4-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h4-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h4-regular {
    font-size: ${({textSize:e})=>e.h4};
    line-height: ${({typography:e})=>e["h4-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h4-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h4-medium {
    font-size: ${({textSize:e})=>e.h4};
    line-height: ${({typography:e})=>e["h4-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h4-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h5-regular-mono {
    font-size: ${({textSize:e})=>e.h5};
    line-height: ${({typography:e})=>e["h5-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h5-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h5-regular {
    font-size: ${({textSize:e})=>e.h5};
    line-height: ${({typography:e})=>e["h5-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h5-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h5-medium {
    font-size: ${({textSize:e})=>e.h5};
    line-height: ${({typography:e})=>e["h5-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h5-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h6-regular-mono {
    font-size: ${({textSize:e})=>e.h6};
    line-height: ${({typography:e})=>e["h6-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h6-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h6-regular {
    font-size: ${({textSize:e})=>e.h6};
    line-height: ${({typography:e})=>e["h6-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h6-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h6-medium {
    font-size: ${({textSize:e})=>e.h6};
    line-height: ${({typography:e})=>e["h6-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h6-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-lg-regular-mono {
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-lg-regular {
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-lg-medium {
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-md-regular-mono {
    font-size: ${({textSize:e})=>e.medium};
    line-height: ${({typography:e})=>e["md-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["md-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-md-regular {
    font-size: ${({textSize:e})=>e.medium};
    line-height: ${({typography:e})=>e["md-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["md-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-md-medium {
    font-size: ${({textSize:e})=>e.medium};
    line-height: ${({typography:e})=>e["md-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["md-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-sm-regular-mono {
    font-size: ${({textSize:e})=>e.small};
    line-height: ${({typography:e})=>e["sm-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["sm-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-sm-regular {
    font-size: ${({textSize:e})=>e.small};
    line-height: ${({typography:e})=>e["sm-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["sm-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-sm-medium {
    font-size: ${({textSize:e})=>e.small};
    line-height: ${({typography:e})=>e["sm-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["sm-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }
`;var uo=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const wf={primary:ke.tokens.theme.textPrimary,secondary:ke.tokens.theme.textSecondary,tertiary:ke.tokens.theme.textTertiary,invert:ke.tokens.theme.textInvert,error:ke.tokens.core.textError,warning:ke.tokens.core.textWarning,"accent-primary":ke.tokens.core.textAccentPrimary};let Ei=class extends P{constructor(){super(...arguments),this.variant="md-regular",this.color="inherit",this.align="left",this.lineClamp=void 0,this.display="inline-flex"}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      display: ${this.display};
      --local-align: ${this.align};
      --local-color: ${this.color==="inherit"?"inherit":wf[this.color??"primary"]};
      `,u`<slot class=${el(t)}></slot>`}};Ei.styles=[z,gf];uo([m()],Ei.prototype,"variant",void 0);uo([m()],Ei.prototype,"color",void 0);uo([m()],Ei.prototype,"align",void 0);uo([m()],Ei.prototype,"lineClamp",void 0);uo([m()],Ei.prototype,"display",void 0);Ei=uo([E("wui-text")],Ei);const bf=Ee`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
    box-sizing: border-box;
  }
`;var et=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Be=class extends P{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&be.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&be.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&be.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&be.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&be.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&be.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&be.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&be.getSpacingStyles(this.margin,3)};
      width: ${this.width};
    `,u`<slot></slot>`}};Be.styles=[z,bf];et([m()],Be.prototype,"flexDirection",void 0);et([m()],Be.prototype,"flexWrap",void 0);et([m()],Be.prototype,"flexBasis",void 0);et([m()],Be.prototype,"flexGrow",void 0);et([m()],Be.prototype,"flexShrink",void 0);et([m()],Be.prototype,"alignItems",void 0);et([m()],Be.prototype,"justifyContent",void 0);et([m()],Be.prototype,"columnGap",void 0);et([m()],Be.prototype,"rowGap",void 0);et([m()],Be.prototype,"gap",void 0);et([m()],Be.prototype,"padding",void 0);et([m()],Be.prototype,"margin",void 0);et([m()],Be.prototype,"width",void 0);Be=et([E("wui-flex")],Be);const yf=D`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: ${({borderRadius:e})=>e[16]};
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  :host([data-variant='generated']) {
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var Zo=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let rn=class extends P{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){const t={inherit:"inherit",xxs:"3",xs:"5",sm:"6",md:"8",mdl:"8",lg:"10",xl:"16",xxl:"20"};return this.style.cssText=`
    --local-width: var(--apkt-spacing-${t[this.size??"xl"]});
    --local-height: var(--apkt-spacing-${t[this.size??"xl"]});
    `,u`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",u`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const t=be.generateAvatarColors(this.address);return this.style.cssText+=`
 ${t}`,null}return this.dataset.variant="default",null}};rn.styles=[z,yf];Zo([m()],rn.prototype,"imageSrc",void 0);Zo([m()],rn.prototype,"alt",void 0);Zo([m()],rn.prototype,"address",void 0);Zo([m()],rn.prototype,"size",void 0);rn=Zo([E("wui-avatar")],rn);const vf=D`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[20]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[16]};
    height: 32px;
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: box-shadow;
  }

  button wui-flex.avatar-container {
    width: 28px;
    height: 24px;
    position: relative;

    wui-flex.network-image-container {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 12px;
      height: 12px;
    }

    wui-flex.network-image-container wui-icon {
      background: ${({tokens:e})=>e.theme.foregroundPrimary};
    }

    wui-avatar {
      width: 24px;
      min-width: 24px;
      height: 24px;
    }

    wui-icon {
      width: 12px;
      height: 12px;
    }
  }

  wui-image,
  wui-icon {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-text {
    white-space: nowrap;
  }

  button wui-flex.balance-container {
    height: 100%;
    border-radius: ${({borderRadius:e})=>e[16]};
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:focus-visible:enabled,
  button:active:enabled {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);

    wui-flex.balance-container {
      background: ${({tokens:e})=>e.theme.foregroundTertiary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled wui-text,
  button:disabled wui-flex.avatar-container {
    opacity: 0.3;
  }
`;var jt=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ot=class extends P{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return u`
      <button
        ?disabled=${this.disabled}
        class=${j(this.balance?void 0:"local-no-balance")}
        data-error=${j(this.isUnsupportedChain)}
      >
        ${this.imageTemplate()} ${this.addressTemplate()} ${this.balanceTemplate()}
      </button>
    `}imageTemplate(){const t=this.networkSrc?u`<wui-image src=${this.networkSrc}></wui-image>`:u` <wui-icon size="inherit" color="inherit" name="networkPlaceholder"></wui-icon> `;return u`<wui-flex class="avatar-container">
      <wui-avatar
        .imageSrc=${this.avatarSrc}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>

      <wui-flex class="network-image-container">${t}</wui-flex>
    </wui-flex>`}addressTemplate(){return u`<wui-text variant="md-regular" color="inherit">
      ${this.address?be.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
    </wui-text>`}balanceTemplate(){if(this.balance){const t=this.loading?u`<wui-loading-spinner size="md" color="inherit"></wui-loading-spinner>`:u`<wui-text variant="md-regular" color="inherit"> ${this.balance}</wui-text>`;return u`<wui-flex alignItems="center" justifyContent="center" class="balance-container"
        >${t}</wui-flex
      >`}return null}};ot.styles=[z,de,vf];jt([m()],ot.prototype,"networkSrc",void 0);jt([m()],ot.prototype,"avatarSrc",void 0);jt([m()],ot.prototype,"balance",void 0);jt([m({type:Boolean})],ot.prototype,"isUnsupportedChain",void 0);jt([m({type:Boolean})],ot.prototype,"disabled",void 0);jt([m({type:Boolean})],ot.prototype,"loading",void 0);jt([m()],ot.prototype,"address",void 0);jt([m()],ot.prototype,"profileName",void 0);jt([m()],ot.prototype,"charsStart",void 0);jt([m()],ot.prototype,"charsEnd",void 0);ot=jt([E("wui-account-button")],ot);var He=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class Ge extends P{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.isSupported=I.state.allowUnsupportedChain?!0:$.state.activeChain?$.checkIfSupportedNetwork($.state.activeChain):!0}connectedCallback(){super.connectedCallback(),this.setAccountData($.getAccountData(this.namespace)),this.setNetworkData($.getNetworkData(this.namespace))}firstUpdated(){const t=this.namespace;t?this.unsubscribe.push($.subscribeChainProp("accountState",i=>{this.setAccountData(i)},t),$.subscribeChainProp("networkState",i=>{var o;this.setNetworkData(i),this.isSupported=$.checkIfSupportedNetwork(t,(o=i==null?void 0:i.caipNetwork)==null?void 0:o.caipNetworkId)},t)):this.unsubscribe.push(nn.subscribeNetworkImages(()=>{this.networkImage=me.getNetworkImage(this.network)}),$.subscribeKey("activeCaipAddress",i=>{this.caipAddress=i}),$.subscribeChainProp("accountState",i=>{this.setAccountData(i)}),$.subscribeKey("activeCaipNetwork",i=>{this.network=i,this.networkImage=me.getNetworkImage(i),this.isSupported=i!=null&&i.chainNamespace?$.checkIfSupportedNetwork(i==null?void 0:i.chainNamespace):!0,this.fetchNetworkImage(i)}))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(!$.state.activeChain)return null;const t=this.balance==="show",i=typeof this.balanceVal!="string",{formattedText:o}=B.parseBalance(this.balanceVal,this.balanceSymbol);return u`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${I.state.allowUnsupportedChain?!1:!this.isSupported}
        address=${j(B.getPlainAddress(this.caipAddress))}
        profileName=${j(this.profileName)}
        networkSrc=${j(this.networkImage)}
        avatarSrc=${j(this.profileImage)}
        balance=${t?o:""}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${this.namespace?`-${this.namespace}`:""}`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${i}
      >
      </wui-account-button>
    `}onClick(){this.isSupported||I.state.allowUnsupportedChain?je.open({namespace:this.namespace}):je.open({view:"UnsupportedChain"})}async fetchNetworkImage(t){var i,o;(i=t==null?void 0:t.assets)!=null&&i.imageId&&(this.networkImage=await me.fetchNetworkImage((o=t==null?void 0:t.assets)==null?void 0:o.imageId))}setAccountData(t){t&&(this.caipAddress=t.caipAddress,this.balanceVal=t.balance,this.balanceSymbol=t.balanceSymbol,this.profileName=t.profileName,this.profileImage=t.profileImage)}setNetworkData(t){t&&(this.network=t.caipNetwork,this.networkImage=me.getNetworkImage(t.caipNetwork))}}He([m({type:Boolean})],Ge.prototype,"disabled",void 0);He([m()],Ge.prototype,"balance",void 0);He([m()],Ge.prototype,"charsStart",void 0);He([m()],Ge.prototype,"charsEnd",void 0);He([m()],Ge.prototype,"namespace",void 0);He([x()],Ge.prototype,"caipAddress",void 0);He([x()],Ge.prototype,"balanceVal",void 0);He([x()],Ge.prototype,"balanceSymbol",void 0);He([x()],Ge.prototype,"profileName",void 0);He([x()],Ge.prototype,"profileImage",void 0);He([x()],Ge.prototype,"network",void 0);He([x()],Ge.prototype,"networkImage",void 0);He([x()],Ge.prototype,"isSupported",void 0);let pa=class extends Ge{};pa=He([E("w3m-account-button")],pa);let Br=class extends Ge{};Br=He([E("appkit-account-button")],Br);const xf=Ee`
  :host {
    display: block;
    width: max-content;
  }
`;var It=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class Ct extends P{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0}firstUpdated(){var t;this.caipAddress=this.namespace?(t=$.getAccountData(this.namespace))==null?void 0:t.caipAddress:$.state.activeCaipAddress,this.namespace?this.unsubscribe.push($.subscribeChainProp("accountState",i=>{this.caipAddress=i==null?void 0:i.caipAddress},this.namespace)):this.unsubscribe.push($.subscribeKey("activeCaipAddress",i=>this.caipAddress=i))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return this.caipAddress?u`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${j(this.balance)}
            .charsStart=${j(this.charsStart)}
            .charsEnd=${j(this.charsEnd)}
            namespace=${j(this.namespace)}
          >
          </appkit-account-button>
        `:u`
          <appkit-connect-button
            size=${j(this.size)}
            label=${j(this.label)}
            loadingLabel=${j(this.loadingLabel)}
            namespace=${j(this.namespace)}
          ></appkit-connect-button>
        `}}Ct.styles=xf;It([m({type:Boolean})],Ct.prototype,"disabled",void 0);It([m()],Ct.prototype,"balance",void 0);It([m()],Ct.prototype,"size",void 0);It([m()],Ct.prototype,"label",void 0);It([m()],Ct.prototype,"loadingLabel",void 0);It([m()],Ct.prototype,"charsStart",void 0);It([m()],Ct.prototype,"charsEnd",void 0);It([m()],Ct.prototype,"namespace",void 0);It([x()],Ct.prototype,"caipAddress",void 0);let fa=class extends Ct{};fa=It([E("w3m-button")],fa);let Mr=class extends Ct{};Mr=It([E("appkit-button")],Mr);const Cf=D`
  :host {
    position: relative;
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='sm'] {
    padding: ${({spacing:e})=>e[2]};
  }

  button[data-size='md'] {
    padding: ${({spacing:e})=>e[3]};
  }

  button[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]};
  }

  button[data-variant='primary'] {
    background: ${({tokens:e})=>e.core.backgroundAccentPrimary};
  }

  button[data-variant='secondary'] {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button:hover:enabled {
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:disabled {
    cursor: not-allowed;
  }

  button[data-loading='true'] {
    cursor: not-allowed;
  }

  button[data-loading='true'][data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
  }

  button[data-loading='true'][data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[20]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[4]};
  }

  button[data-loading='true'][data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[16]};
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[5]};
  }
`;var Ko=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let sn=class extends P{constructor(){super(...arguments),this.size="md",this.variant="primary",this.loading=!1,this.text="Connect Wallet"}render(){return u`
      <button
        data-loading=${this.loading}
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.loading}
      >
        ${this.contentTemplate()}
      </button>
    `}contentTemplate(){const t={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},i={primary:"invert",secondary:"accent-primary"};return this.loading?u`<wui-loading-spinner
      color=${i[this.variant]}
      size=${this.size}
    ></wui-loading-spinner>`:u` <wui-text variant=${t[this.size]} color=${i[this.variant]}>
        ${this.text}
      </wui-text>`}};sn.styles=[z,de,Cf];Ko([m()],sn.prototype,"size",void 0);Ko([m()],sn.prototype,"variant",void 0);Ko([m({type:Boolean})],sn.prototype,"loading",void 0);Ko([m()],sn.prototype,"text",void 0);sn=Ko([E("wui-connect-button")],sn);var Di=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class Li extends P{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=je.state.open,this.loading=this.namespace?je.state.loadingNamespaceMap.get(this.namespace):je.state.loading,this.unsubscribe.push(je.subscribe(t=>{this.open=t.open,this.loading=this.namespace?t.loadingNamespaceMap.get(this.namespace):t.loading}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u`
      <wui-connect-button
        size=${j(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${this.namespace?`-${this.namespace}`:""}`}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?je.close():this.loading||je.open({view:"Connect",namespace:this.namespace})}}Di([m()],Li.prototype,"size",void 0);Di([m()],Li.prototype,"label",void 0);Di([m()],Li.prototype,"loadingLabel",void 0);Di([m()],Li.prototype,"namespace",void 0);Di([x()],Li.prototype,"open",void 0);Di([x()],Li.prototype,"loading",void 0);let ma=class extends Li{};ma=Di([E("w3m-connect-button")],ma);let Or=class extends Li{};Or=Di([E("appkit-connect-button")],Or);const $f=D`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: ${({spacing:e})=>e[1]} !important;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: relative;
  }

  :host([data-padding='2']) {
    padding: ${({spacing:e})=>e[2]} !important;
  }

  :host:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host > wui-icon {
    z-index: 10;
  }

  /* -- Colors --------------------------------------------------- */
  :host([data-color='accent-primary']) {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  :host([data-color='accent-primary']):after {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  :host([data-color='default']),
  :host([data-color='secondary']) {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  :host([data-color='default']):after {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-color='secondary']):after {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-color='success']) {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  :host([data-color='success']):after {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  :host([data-color='error']) {
    color: ${({tokens:e})=>e.core.iconError};
  }

  :host([data-color='error']):after {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  :host([data-color='warning']) {
    color: ${({tokens:e})=>e.core.iconWarning};
  }

  :host([data-color='warning']):after {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  :host([data-color='inverse']) {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  :host([data-color='inverse']):after {
    background-color: transparent;
  }
`;var qo=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let an=class extends P{constructor(){super(...arguments),this.icon="copy",this.size="md",this.padding="1",this.color="default"}render(){return this.dataset.padding=this.padding,this.dataset.color=this.color,u`
      <wui-icon size=${j(this.size)} name=${this.icon} color="inherit"></wui-icon>
    `}};an.styles=[z,de,$f];qo([m()],an.prototype,"icon",void 0);qo([m()],an.prototype,"size",void 0);qo([m()],an.prototype,"padding",void 0);qo([m()],an.prototype,"color",void 0);an=qo([E("wui-icon-box")],an);const kf=D`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[32]};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]}
      ${({spacing:e})=>e[1]} ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button[data-size='sm'] > wui-icon-box,
  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-icon-box,
  button[data-size='md'] > wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-icon-box,
  button[data-size='lg'] > wui-image {
    width: 24px;
    height: 24px;
  }

  wui-image,
  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e[32]};
  }
`;var Yo=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ln=class extends P{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.size="lg"}render(){const t={sm:"sm-regular",md:"md-regular",lg:"lg-regular"};return u`
      <button data-size=${this.size} data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant=${t[this.size]} color="primary">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?u` <wui-icon-box color="error" icon="warningCircle"></wui-icon-box> `:this.imageSrc?u`<wui-image src=${this.imageSrc}></wui-image>`:u` <wui-icon size="xl" color="default" name="networkPlaceholder"></wui-icon> `}};ln.styles=[z,de,kf];Yo([m()],ln.prototype,"imageSrc",void 0);Yo([m({type:Boolean})],ln.prototype,"isUnsupportedChain",void 0);Yo([m({type:Boolean})],ln.prototype,"disabled",void 0);Yo([m()],ln.prototype,"size",void 0);ln=Yo([E("wui-network-button")],ln);const Sf=Ee`
  :host {
    display: block;
    width: max-content;
  }
`;var pi=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class Gt extends P{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=$.state.activeCaipNetwork,this.networkImage=me.getNetworkImage(this.network),this.caipAddress=$.state.activeCaipAddress,this.loading=je.state.loading,this.isSupported=I.state.allowUnsupportedChain?!0:$.state.activeChain?$.checkIfSupportedNetwork($.state.activeChain):!0,this.unsubscribe.push(nn.subscribeNetworkImages(()=>{this.networkImage=me.getNetworkImage(this.network)}),$.subscribeKey("activeCaipAddress",t=>{this.caipAddress=t}),$.subscribeKey("activeCaipNetwork",t=>{var i;this.network=t,this.networkImage=me.getNetworkImage(t),this.isSupported=t!=null&&t.chainNamespace?$.checkIfSupportedNetwork(t.chainNamespace):!0,me.fetchNetworkImage((i=t==null?void 0:t.assets)==null?void 0:i.imageId)}),je.subscribeKey("loading",t=>this.loading=t))}firstUpdated(){var t,i;me.fetchNetworkImage((i=(t=this.network)==null?void 0:t.assets)==null?void 0:i.imageId)}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.network?$.checkIfSupportedNetwork(this.network.chainNamespace):!0;return u`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${I.state.allowUnsupportedChain?!1:!t}
        imageSrc=${j(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?!this.isSupported&&!I.state.allowUnsupportedChain?"Switch Network":this.network.name:this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(Y.sendEvent({type:"track",event:"CLICK_NETWORKS"}),je.open({view:"Networks"}))}}Gt.styles=Sf;pi([m({type:Boolean})],Gt.prototype,"disabled",void 0);pi([m({type:String})],Gt.prototype,"label",void 0);pi([x()],Gt.prototype,"network",void 0);pi([x()],Gt.prototype,"networkImage",void 0);pi([x()],Gt.prototype,"caipAddress",void 0);pi([x()],Gt.prototype,"loading",void 0);pi([x()],Gt.prototype,"isSupported",void 0);let ga=class extends Gt{};ga=pi([E("w3m-network-button")],ga);let Wr=class extends Gt{};Wr=pi([E("appkit-network-button")],Wr);const Af="https://reown.com",Ef=D`
  .reown-logo {
    height: 24px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  a:hover {
    opacity: 0.9;
  }
`;var _f=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let wa=class extends P{render(){return u`
      <a
        data-testid="ux-branding-reown"
        href=${Af}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="1"
          .padding=${["01","0","3","0"]}
        >
          <wui-text variant="sm-regular" color="inherit"> UX by </wui-text>
          <wui-icon name="reown" size="inherit" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};wa.styles=[z,de,Ef];wa=_f([E("wui-ux-by-reown")],wa);const Pf=D`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:e})=>e[3]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.core.textAccentPrimary};
    font-weight: 500;
  }
`;var Td=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Vr=class extends P{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=I.state.remoteFeatures,this.unsubscribe.push(I.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var n;const{termsConditionsUrl:t,privacyPolicyUrl:i}=I.state,o=(n=I.state.features)==null?void 0:n.legalCheckbox;return!t&&!i||o?u`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `:u`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:i}=I.state;return t&&i?"and":""}termsTemplate(){const{termsConditionsUrl:t}=I.state;return t?u`<a href=${t} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){const{privacyPolicyUrl:t}=I.state;return t?u`<a href=${t} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(t=!1){var i;return(i=this.remoteFeatures)!=null&&i.reownBranding?t?u`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:u`<wui-ux-by-reown></wui-ux-by-reown>`:null}};Vr.styles=[Pf];Td([x()],Vr.prototype,"remoteFeatures",void 0);Vr=Td([E("w3m-legal-footer")],Vr);const Tf=D`
  button {
    border: none;
    background: transparent;
    height: 20px;
    padding: ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[1]};
    padding: 0 ${({spacing:e})=>e[1]};
    border-radius: ${({spacing:e})=>e[1]};
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent'] {
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='secondary'] {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[data-variant='accent']:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-variant='accent']:hover:enabled {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var Xo=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Nf={sm:"sm-medium",md:"md-medium"},Rf={accent:"accent-primary",secondary:"secondary"};let cn=class extends P{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.variant="accent",this.icon=void 0}render(){return u`
      <button ?disabled=${this.disabled} data-variant=${this.variant}>
        <slot name="iconLeft"></slot>
        <wui-text
          color=${Rf[this.variant]}
          variant=${Nf[this.size]}
        >
          <slot></slot>
        </wui-text>
        ${this.iconTemplate()}
      </button>
    `}iconTemplate(){return this.icon?u`<wui-icon name=${this.icon} size="sm"></wui-icon>`:null}};cn.styles=[z,de,Tf];Xo([m()],cn.prototype,"size",void 0);Xo([m({type:Boolean})],cn.prototype,"disabled",void 0);Xo([m()],cn.prototype,"variant",void 0);Xo([m()],cn.prototype,"icon",void 0);cn=Xo([E("wui-link")],cn);const jf=Ee``;var If=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ba=class extends P{render(){const{termsConditionsUrl:t,privacyPolicyUrl:i}=I.state;return!t&&!i?null:u`
      <wui-flex
        .padding=${["4","3","3","3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `}howDoesItWorkTemplate(){return u` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){Y.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:Si($.state.activeChain)===Ai.ACCOUNT_TYPES.SMART_ACCOUNT}}),_.push("WhatIsABuy")}};ba.styles=[jf];ba=If([E("w3m-onramp-providers-footer")],ba);const Hn={getTabsByNamespace(e){var i;return!!e&&e===ae.CHAIN.EVM?((i=I.state.remoteFeatures)==null?void 0:i.activity)===!1?$r.ACCOUNT_TABS.filter(o=>o.label!=="Activity"):$r.ACCOUNT_TABS:[]},isValidReownName(e){return/^[a-zA-Z0-9]+$/gu.test(e)},isValidEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(e)},validateReownName(e){return e.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,"")},hasFooter(){var t;const e=_.state.view;if($r.VIEWS_WITH_LEGAL_FOOTER.includes(e)){const{termsConditionsUrl:i,privacyPolicyUrl:o}=I.state,r=(t=I.state.features)==null?void 0:t.legalCheckbox;return!(!i&&!o||r)}return $r.VIEWS_WITH_DEFAULT_FOOTER.includes(e)}},Df=D`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`;var tl=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Gn=class extends P{constructor(){super(...arguments),this.resizeObserver=void 0,this.unsubscribe=[],this.status="hide",this.view=_.state.view}firstUpdated(){this.status=Hn.hasFooter()?"show":"hide",this.unsubscribe.push(_.subscribeKey("view",t=>{this.view=t,this.status=Hn.hasFooter()?"show":"hide",this.status==="hide"&&document.documentElement.style.setProperty("--apkt-footer-height","0px")})),this.resizeObserver=new ResizeObserver(t=>{for(const i of t)if(i.target===this.getWrapper()){const o=`${i.contentRect.height}px`;document.documentElement.style.setProperty("--apkt-footer-height",o)}}),this.resizeObserver.observe(this.getWrapper())}render(){return u`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){return Hn.hasFooter()?u` ${this.templateFooter()}`:null}templateFooter(){switch(this.view){case"Networks":return this.templateNetworksFooter();case"Connect":case"ConnectWallets":case"OnRampFiatSelect":case"OnRampTokenSelect":return u`<w3m-legal-footer></w3m-legal-footer>`;case"OnRampProviders":return u`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return u` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`}onNetworkHelp(){Y.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),_.push("WhatIsANetwork")}getWrapper(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("div.container")}};Gn.styles=[Df];tl([x()],Gn.prototype,"status",void 0);tl([x()],Gn.prototype,"view",void 0);Gn=tl([E("w3m-footer")],Gn);const Lf=D`
  :host {
    display: block;
    width: inherit;
  }
`;var il=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Zn=class extends P{constructor(){super(),this.unsubscribe=[],this.viewState=_.state.view,this.history=_.state.history.join(","),this.unsubscribe.push(_.subscribeKey("view",()=>{this.history=_.state.history.join(","),document.documentElement.style.setProperty("--apkt-duration-dynamic","var(--apkt-durations-lg)")}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),document.documentElement.style.setProperty("--apkt-duration-dynamic","0s")}render(){return u`${this.templatePageContainer()}`}templatePageContainer(){return u`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=_.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(t){switch(t){case"AccountSettings":return u`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return u`<w3m-account-view></w3m-account-view>`;case"AllWallets":return u`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return u`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return u`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return u`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return u`<w3m-connect-view></w3m-connect-view>`;case"Create":return u`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return u`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return u`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return u`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return u`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return u`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return u`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return u`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"DataCapture":return u`<w3m-data-capture-view></w3m-data-capture-view>`;case"DataCaptureOtpConfirm":return u`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case"Downloads":return u`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return u`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return u`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return u`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return u`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return u`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return u`<w3m-network-switch-view></w3m-network-switch-view>`;case"ProfileWallets":return u`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case"Transactions":return u`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return u`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampTokenSelect":return u`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return u`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return u`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return u`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return u`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return u`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return u`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return u`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return u`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return u`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return u`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return u`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return u`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WalletSendConfirmed":return u`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;case"WhatIsABuy":return u`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return u`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return u`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return u`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return u`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return u`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return u`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return u`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return u`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return u`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return u`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return u`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return u`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return u`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return u`<w3m-pay-loading-view></w3m-pay-loading-view>`;case"FundWallet":return u`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case"PayWithExchange":return u`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case"PayWithExchangeSelectAsset":return u`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;case"UsageExceeded":return u`<w3m-usage-exceeded-view></w3m-usage-exceeded-view>`;case"SmartAccountSettings":return u`<w3m-smart-account-settings-view></w3m-smart-account-settings-view>`;default:return u`<w3m-connect-view></w3m-connect-view>`}}};Zn.styles=[Lf];il([x()],Zn.prototype,"viewState",void 0);il([x()],Zn.prototype,"history",void 0);Zn=il([E("w3m-router")],Zn);const Bf=D`
  button {
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button[data-size='xs'] > wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='xs'],
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='md'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button:disabled {
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;var ho=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let _i=class extends P{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){const t={accent:"accent-primary",primary:"inverse",secondary:"default"};return u`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${t[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};_i.styles=[z,de,Bf];ho([m()],_i.prototype,"size",void 0);ho([m({type:Boolean})],_i.prototype,"disabled",void 0);ho([m()],_i.prototype,"icon",void 0);ho([m()],_i.prototype,"iconColor",void 0);ho([m()],_i.prototype,"variant",void 0);_i=ho([E("wui-icon-link")],_i);const Mf=D`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var Zt=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let yt=class extends P{constructor(){super(...arguments),this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",u`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        tabindex=${j(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?u`<wui-image
        icon=${this.icon}
        iconColor=${j(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`:u`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?u`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:u`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};yt.styles=[z,de,Mf];Zt([m()],yt.prototype,"imageSrc",void 0);Zt([m()],yt.prototype,"icon",void 0);Zt([m()],yt.prototype,"iconColor",void 0);Zt([m({type:Boolean})],yt.prototype,"loading",void 0);Zt([m()],yt.prototype,"tabIdx",void 0);Zt([m({type:Boolean})],yt.prototype,"disabled",void 0);Zt([m({type:Boolean})],yt.prototype,"rightIcon",void 0);Zt([m({type:Boolean})],yt.prototype,"rounded",void 0);Zt([m({type:Boolean})],yt.prototype,"fullSize",void 0);yt=Zt([E("wui-list-item")],yt);const Of=D`
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({spacing:e})=>e[2]};
    transition:
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: 0 ${({spacing:e})=>e[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[3]};
    padding: 0 ${({spacing:e})=>e[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: 0 ${({spacing:e})=>e[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({tokens:e})=>e.theme.backgroundInvert};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({tokens:e})=>e.core.textError};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  button[data-variant='shade'] {
    background: var(--wui-color-gray-glass-002);
    color: var(--wui-color-fg-200);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-size='sm']:focus-visible:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:focus-visible:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:focus-visible:enabled {
    border-radius: 48px;
  }
  button[data-variant='shade']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button[data-size='sm']:hover:enabled {
      border-radius: 28px;
    }

    button[data-size='md']:hover:enabled {
      border-radius: 38px;
    }

    button[data-size='lg']:hover:enabled {
      border-radius: 48px;
    }

    button[data-variant='shade']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='shade']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }
  }

  button[data-size='sm']:active:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:active:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:active:enabled {
    border-radius: 48px;
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    opacity: 0.3;
  }
`;var $n=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Wf={lg:"lg-regular-mono",md:"md-regular-mono",sm:"sm-regular-mono"},Vf={lg:"md",md:"md",sm:"sm"};let oi=class extends P{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="accent-primary"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
     `;const t=this.textVariant??Wf[this.size];return u`
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){if(this.loading){const t=Vf[this.size],i=this.variant==="neutral-primary"||this.variant==="accent-primary"?"invert":"primary";return u`<wui-loading-spinner color=${i} size=${t}></wui-loading-spinner>`}return null}};oi.styles=[z,de,Of];$n([m()],oi.prototype,"size",void 0);$n([m({type:Boolean})],oi.prototype,"disabled",void 0);$n([m({type:Boolean})],oi.prototype,"fullWidth",void 0);$n([m({type:Boolean})],oi.prototype,"loading",void 0);$n([m()],oi.prototype,"variant",void 0);$n([m()],oi.prototype,"textVariant",void 0);oi=$n([E("wui-button")],oi);const Ff=D`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  wui-flex > wui-icon {
    padding: ${({spacing:e})=>e[2]};
    color: ${({tokens:e})=>e.theme.textInvert};
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    border-radius: ${({borderRadius:e})=>e[2]};
    align-items: normal;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent020};
    }
  }
`;var ps=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Kn=class extends P{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return u`
      <button>
        <wui-flex gap="2" alignItems="center">
          <wui-icon weight="fill" size="md" name=${this.icon} color="inherit"></wui-icon>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.label}</wui-text>
            <wui-text variant="md-regular" color="tertiary">${this.description}</wui-text>
          </wui-flex>
        </wui-flex>
        <wui-icon size="lg" color="accent-primary" name="chevronRight"></wui-icon>
      </button>
    `}};Kn.styles=[z,de,Ff];ps([m()],Kn.prototype,"label",void 0);ps([m()],Kn.prototype,"description",void 0);ps([m()],Kn.prototype,"icon",void 0);Kn=ps([E("wui-notice-card")],Kn);var Nd=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ya=class extends P{constructor(){super(),this.unsubscribe=[],this.socialProvider=ni.getConnectedSocialProvider(),this.socialUsername=ni.getConnectedSocialUsername(),this.namespace=$.state.activeChain,this.unsubscribe.push($.subscribeKey("activeChain",t=>{this.namespace=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=V.getConnectorId(this.namespace),i=V.getAuthConnector();if(!i||t!==ae.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;const o=i.provider.getEmail()??"";return!o&&!this.socialUsername?(this.style.cssText="display: none",null):u`
      <wui-list-item
        ?rounded=${!0}
        icon=${this.socialProvider??"mail"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(o,this.socialProvider)}}
      >
        <wui-text variant="lg-regular" color="primary">${this.getAuthName(o)}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(t,i){i||_.push("UpdateEmailWallet",{email:t,redirectView:"Account"})}getAuthName(t){return this.socialUsername?this.socialProvider==="discord"&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:t.length>30?`${t.slice(0,-3)}...`:t}};Nd([x()],ya.prototype,"namespace",void 0);ya=Nd([E("w3m-account-auth-button")],ya);var kn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ri=class extends P{constructor(){var t,i,o;super(),this.usubscribe=[],this.networkImages=nn.state.networkImages,this.address=(t=$.getAccountData())==null?void 0:t.address,this.profileImage=(i=$.getAccountData())==null?void 0:i.profileImage,this.profileName=(o=$.getAccountData())==null?void 0:o.profileName,this.network=$.state.activeCaipNetwork,this.disconnecting=!1,this.remoteFeatures=I.state.remoteFeatures,this.usubscribe.push($.subscribeChainProp("accountState",r=>{r&&(this.address=r.address,this.profileImage=r.profileImage,this.profileName=r.profileName)}),$.subscribeKey("activeCaipNetwork",r=>{r!=null&&r.id&&(this.network=r)}),I.subscribeKey("remoteFeatures",r=>{this.remoteFeatures=r}))}disconnectedCallback(){this.usubscribe.forEach(t=>t())}render(){var i,o,r;if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const t=this.networkImages[((o=(i=this.network)==null?void 0:i.assets)==null?void 0:o.imageId)??""];return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["0","5","3","5"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${j(this.profileImage)}
          size="lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="1" alignItems="center" justifyContent="center">
            <wui-text variant="h5-medium" color="primary" data-testid="account-settings-address">
              ${be.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="default"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" gap="2" .padding=${["6","4","3","4"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            imageSrc=${j(t)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            ?fullSize=${!0}
            ?rounded=${!0}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="lg-regular" color="primary">
              ${((r=this.network)==null?void 0:r.name)??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.smartAccountSettingsTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            ?rounded=${!0}
            icon="power"
            iconColor="error"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){var n;const t=(n=this.network)==null?void 0:n.chainNamespace,i=V.getConnectorId(t),o=V.getAuthConnector();return!$.checkIfNamesSupported()||!o||i!==ae.CONNECTOR_ID.AUTH||this.profileName?null:u`
      <wui-list-item
        icon="id"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="lg-regular" color="primary">Choose account name </wui-text>
      </wui-list-item>
    `}authCardTemplate(){var r;const t=V.getConnectorId((r=this.network)==null?void 0:r.chainNamespace),i=V.getAuthConnector(),{origin:o}=location;return!i||t!==ae.CONNECTOR_ID.AUTH||o.includes(Le.SECURE_SITE)?null:u`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const t=$.getAllRequestedCaipNetworks(),i=t?t.length>1:!1,o=t==null?void 0:t.find(({id:r})=>{var n;return r===((n=this.network)==null?void 0:n.id)});return i||!o}onCopyAddress(){try{this.address&&(B.copyToClopboard(this.address),pe.showSuccess("Address copied"))}catch{pe.showError("Failed to copy")}}smartAccountSettingsTemplate(){var n;const t=(n=this.network)==null?void 0:n.chainNamespace,i=$.checkIfSmartAccountEnabled(),o=V.getConnectorId(t);return!V.getAuthConnector()||o!==ae.CONNECTOR_ID.AUTH||!i?null:u`
      <wui-list-item
        icon="user"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onSmartAccountSettings.bind(this)}
        data-testid="account-smart-account-settings-button"
      >
        <wui-text variant="lg-regular" color="primary">Smart Account Settings</wui-text>
      </wui-list-item>
    `}onChooseName(){_.push("ChooseAccountName")}onNetworks(){this.isAllowedNetworkSwitch()&&_.push("Networks")}async onDisconnect(){var t,i;try{this.disconnecting=!0;const o=(t=this.network)==null?void 0:t.chainNamespace,n=G.getConnections(o).length>0,s=o&&V.state.activeConnectorIds[o],a=(i=this.remoteFeatures)==null?void 0:i.multiWallet;await G.disconnect(a?{id:s,namespace:o}:{}),n&&a&&(_.push("ProfileWallets"),pe.showSuccess("Wallet deleted"))}catch{Y.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),pe.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){Y.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),_.push("UpgradeEmailWallet")}onSmartAccountSettings(){_.push("SmartAccountSettings")}};kn([x()],ri.prototype,"address",void 0);kn([x()],ri.prototype,"profileImage",void 0);kn([x()],ri.prototype,"profileName",void 0);kn([x()],ri.prototype,"network",void 0);kn([x()],ri.prototype,"disconnecting",void 0);kn([x()],ri.prototype,"remoteFeatures",void 0);ri=kn([E("w3m-account-settings-view")],ri);const zf=D`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`;var Qo=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Uf={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},Hf={lg:"md",md:"sm",sm:"sm"};let dn=class extends P{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return u`
      <button data-active=${this.active}>
        ${this.icon?u`<wui-icon size=${Hf[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${Uf[this.size]}> ${this.label} </wui-text>
      </button>
    `}};dn.styles=[z,de,zf];Qo([m()],dn.prototype,"icon",void 0);Qo([m()],dn.prototype,"size",void 0);Qo([m()],dn.prototype,"label",void 0);Qo([m({type:Boolean})],dn.prototype,"active",void 0);dn=Qo([E("wui-tab-item")],dn);const Gf=D`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var Jo=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let un=class extends P{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((t,i)=>{var r;const o=i===this.activeTab;return u`
        <wui-tab-item
          @click=${()=>this.onTabClick(i)}
          icon=${t.icon}
          size=${this.size}
          label=${t.label}
          ?active=${o}
          data-active=${o}
          data-testid="tab-${(r=t.label)==null?void 0:r.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(t){this.activeTab=t,this.onTabChange(t)}};un.styles=[z,de,Gf];Jo([m({type:Array})],un.prototype,"tabs",void 0);Jo([m()],un.prototype,"onTabChange",void 0);Jo([m()],un.prototype,"size",void 0);Jo([x()],un.prototype,"activeTab",void 0);un=Jo([E("wui-tabs")],un);const Zf=D`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    text-transform: uppercase;
    white-space: nowrap;
  }

  :host([data-variant='accent']) {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  :host([data-variant='info']) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='success']) {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    color: ${({tokens:e})=>e.core.textSuccess};
  }

  :host([data-variant='warning']) {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
    color: ${({tokens:e})=>e.core.textWarning};
  }

  :host([data-variant='error']) {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  :host([data-variant='certified']) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-size='md']) {
    height: 30px;
    padding: 0 ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='sm']) {
    height: 20px;
    padding: 0 ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[1]};
  }
`;var fs=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let qn=class extends P{constructor(){super(...arguments),this.variant="accent",this.size="md",this.icon=void 0}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const t=this.size==="md"?"md-medium":"sm-medium",i=this.size==="md"?"md":"sm";return u`
      ${this.icon?u`<wui-icon size=${i} name=${this.icon}></wui-icon>`:null}
      <wui-text
        display="inline"
        data-variant=${this.variant}
        variant=${t}
        color="inherit"
      >
        <slot></slot>
      </wui-text>
    `}};qn.styles=[z,Zf];fs([m()],qn.prototype,"variant",void 0);fs([m()],qn.prototype,"size",void 0);fs([m()],qn.prototype,"icon",void 0);qn=fs([E("wui-tag")],qn);const Kf=D`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    column-gap: ${({spacing:e})=>e[1]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({spacing:e})=>e[6]};
    height: ${({spacing:e})=>e[6]};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({tokens:e})=>e.core.textSuccess};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var Kt=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let vt=class extends P{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return u`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){const t=this.icon?u`<wui-icon
          size=${j(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:u`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return u`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${!!this.icon}
      >
        ${t}
        <wui-flex class="circle"></wui-flex>
      </wui-flex>
    `}textTemplate(){return u`
      <wui-text variant="lg-regular" color="primary">
        ${be.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return u`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`}};vt.styles=[z,de,Kf];Kt([m()],vt.prototype,"address",void 0);Kt([m()],vt.prototype,"profileName",void 0);Kt([m()],vt.prototype,"alt",void 0);Kt([m()],vt.prototype,"imageSrc",void 0);Kt([m()],vt.prototype,"icon",void 0);Kt([m()],vt.prototype,"iconSize",void 0);Kt([m({type:Boolean})],vt.prototype,"loading",void 0);Kt([m({type:Number})],vt.prototype,"charsStart",void 0);Kt([m({type:Number})],vt.prototype,"charsEnd",void 0);vt=Kt([E("wui-wallet-switch")],vt);const qf=D`
  wui-icon-link {
    margin-right: calc(${({spacing:e})=>e[8]} * -1);
  }

  wui-notice-card {
    margin-bottom: ${({spacing:e})=>e[1]};
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .balance-container {
    display: inline;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .symbol {
    transform: translateY(-2px);
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[3]};
    height: 48px;
    padding: ${({spacing:e})=>e[2]};
    padding-right: ${({spacing:e})=>e[3]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  .account-button:hover {
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  wui-wallet-switch {
    margin-top: ${({spacing:e})=>e[2]};
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color ${({durations:e})=>e.md}
        ${({easings:e})=>e["ease-out-power-1"]},
      opacity ${({durations:e})=>e.md} ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var $t=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ye=class extends P{constructor(){var t,i,o,r,n,s;super(),this.unsubscribe=[],this.caipAddress=(t=$.getAccountData())==null?void 0:t.caipAddress,this.address=B.getPlainAddress((i=$.getAccountData())==null?void 0:i.caipAddress),this.profileImage=(o=$.getAccountData())==null?void 0:o.profileImage,this.profileName=(r=$.getAccountData())==null?void 0:r.profileName,this.disconnecting=!1,this.balance=(n=$.getAccountData())==null?void 0:n.balance,this.balanceSymbol=(s=$.getAccountData())==null?void 0:s.balanceSymbol,this.features=I.state.features,this.remoteFeatures=I.state.remoteFeatures,this.namespace=$.state.activeChain,this.activeConnectorIds=V.state.activeConnectorIds,this.unsubscribe.push($.subscribeChainProp("accountState",a=>{this.address=B.getPlainAddress(a==null?void 0:a.caipAddress),this.caipAddress=a==null?void 0:a.caipAddress,this.balance=a==null?void 0:a.balance,this.balanceSymbol=a==null?void 0:a.balanceSymbol,this.profileName=a==null?void 0:a.profileName,this.profileImage=a==null?void 0:a.profileImage}),I.subscribeKey("features",a=>this.features=a),I.subscribeKey("remoteFeatures",a=>this.remoteFeatures=a),V.subscribeKey("activeConnectorIds",a=>{this.activeConnectorIds=a}),$.subscribeKey("activeChain",a=>this.namespace=a),$.subscribeKey("activeCaipNetwork",a=>{a!=null&&a.chainNamespace&&(this.namespace=a==null?void 0:a.chainNamespace)}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(!this.caipAddress||!this.namespace)return null;const t=this.activeConnectorIds[this.namespace],i=t?V.getConnectorById(t):void 0,o=me.getConnectorImage(i),{value:r,decimals:n,symbol:s}=B.parseBalance(this.balance,this.balanceSymbol);return u`<wui-flex
        flexDirection="column"
        .padding=${["0","5","4","5"]}
        alignItems="center"
        gap="3"
      >
        <wui-avatar
          alt=${j(this.caipAddress)}
          address=${j(B.getPlainAddress(this.caipAddress))}
          imageSrc=${j(this.profileImage===null?void 0:this.profileImage)}
          data-testid="single-account-avatar"
        ></wui-avatar>
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          imageSrc=${o}
          alt=${i==null?void 0:i.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
        <div class="balance-container">
          <wui-text variant="h3-regular" color="primary">${r}</wui-text>
          <wui-text variant="h3-regular" color="secondary">.${n}</wui-text>
          <wui-text variant="h6-medium" color="primary" class="symbol">${s}</wui-text>
        </div>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="2" .padding=${["0","3","3","3"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          .rounded=${!0}
          icon="power"
          iconColor="error"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          .rightIcon=${!1}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}fundWalletTemplate(){var n,s;if(!this.namespace)return null;const t=Le.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),i=!!((n=this.features)!=null&&n.receive),o=((s=this.remoteFeatures)==null?void 0:s.onramp)&&t,r=ft.isPayWithExchangeEnabled();return!o&&!i&&!r?null:u`
      <wui-list-item
        .rounded=${!0}
        data-testid="w3m-account-default-fund-wallet-button"
        iconVariant="blue"
        icon="dollar"
        ?chevron=${!0}
        @click=${this.handleClickFundWallet.bind(this)}
      >
        <wui-text variant="lg-regular" color="primary">Fund wallet</wui-text>
      </wui-list-item>
    `}orderedFeaturesTemplate(){var i;return(((i=this.features)==null?void 0:i.walletFeaturesOrder)||Le.DEFAULT_FEATURES.walletFeaturesOrder).map(o=>{switch(o){case"onramp":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}activityTemplate(){var i;return this.namespace&&((i=this.remoteFeatures)==null?void 0:i.activity)&&Le.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?u` <wui-list-item
          .rounded=${!0}
          icon="clock"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="lg-regular" color="primary">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){var o;const t=(o=this.remoteFeatures)==null?void 0:o.swaps,i=$.state.activeChain===ae.CHAIN.EVM;return!t||!i?null:u`
      <wui-list-item
        .rounded=${!0}
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="lg-regular" color="primary">Swap</wui-text>
      </wui-list-item>
    `}sendTemplate(){var r;const t=(r=this.features)==null?void 0:r.send,i=$.state.activeChain;if(!i)throw new Error("SendController:sendTemplate - namespace is required");const o=Le.SEND_SUPPORTED_NAMESPACES.includes(i);return!t||!o?null:u`
      <wui-list-item
        .rounded=${!0}
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="lg-regular" color="primary">Send</wui-text>
      </wui-list-item>
    `}authCardTemplate(){const t=$.state.activeChain;if(!t)throw new Error("AuthCardTemplate:authCardTemplate - namespace is required");const i=V.getConnectorId(t),o=V.getAuthConnector(),{origin:r}=location;return!o||i!==ae.CONNECTOR_ID.AUTH||r.includes(Le.SECURE_SITE)?null:u`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickFundWallet(){_.push("FundWallet")}handleClickSwap(){_.push("Swap")}handleClickSend(){_.push("WalletSend")}explorerBtnTemplate(){var i;return((i=$.getAccountData())==null?void 0:i.addressExplorerUrl)?u`
      <wui-button size="md" variant="accent-primary" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}onTransactions(){Y.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:Si($.state.activeChain)===Ai.ACCOUNT_TYPES.SMART_ACCOUNT}}),_.push("Transactions")}async onDisconnect(){var t;try{this.disconnecting=!0;const o=G.getConnections(this.namespace).length>0,r=this.namespace&&V.state.activeConnectorIds[this.namespace],n=(t=this.remoteFeatures)==null?void 0:t.multiWallet;await G.disconnect(n?{id:r,namespace:this.namespace}:{}),o&&n&&(_.push("ProfileWallets"),pe.showSuccess("Wallet deleted"))}catch{Y.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),pe.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){var i;const t=(i=$.getAccountData())==null?void 0:i.addressExplorerUrl;t&&B.openHref(t,"_blank")}onGoToUpgradeView(){Y.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),_.push("UpgradeEmailWallet")}onGoToProfileWalletsView(){_.push("ProfileWallets")}};Ye.styles=qf;$t([x()],Ye.prototype,"caipAddress",void 0);$t([x()],Ye.prototype,"address",void 0);$t([x()],Ye.prototype,"profileImage",void 0);$t([x()],Ye.prototype,"profileName",void 0);$t([x()],Ye.prototype,"disconnecting",void 0);$t([x()],Ye.prototype,"balance",void 0);$t([x()],Ye.prototype,"balanceSymbol",void 0);$t([x()],Ye.prototype,"features",void 0);$t([x()],Ye.prototype,"remoteFeatures",void 0);$t([x()],Ye.prototype,"namespace",void 0);$t([x()],Ye.prototype,"activeConnectorIds",void 0);Ye=$t([E("w3m-account-default-widget")],Ye);const Yf=D`
  span {
    font-weight: 500;
    font-size: 38px;
    color: ${({tokens:e})=>e.theme.textPrimary};
    line-height: 38px;
    letter-spacing: -2%;
    text-align: center;
    font-family: var(--apkt-fontFamily-regular);
  }

  .pennies {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }
`;var nl=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let To=class extends P{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return u`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};To.styles=[z,Yf];nl([m()],To.prototype,"dollars",void 0);nl([m()],To.prototype,"pennies",void 0);To=nl([E("wui-balance")],To);const Xf=D`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  /* -- Variants --------------------------------------------------------- */
  :host([data-variant='fill']) {
    background-color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) {
    background-color: ${({colors:e})=>e.neutrals900};
  }

  :host([data-variant='fill']) > wui-text {
    color: ${({colors:e})=>e.black};
  }

  :host([data-variant='shade']) > wui-text {
    color: ${({colors:e})=>e.white};
  }

  :host([data-variant='fill']) > wui-icon {
    color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) > wui-icon {
    color: ${({colors:e})=>e.neutrals900};
  }

  /* -- Sizes --------------------------------------------------------- */
  :host([data-size='sm']) {
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) {
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  /* -- Placements --------------------------------------------------------- */
  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var er=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Qf={sm:"sm-regular",md:"md-regular"};let hn=class extends P{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.size="md",this.message=""}render(){return this.dataset.variant=this.variant,this.dataset.size=this.size,u`<wui-icon data-placement=${this.placement} size="inherit" name="cursor"></wui-icon>
      <wui-text variant=${Qf[this.size]}>${this.message}</wui-text>`}};hn.styles=[z,de,Xf];er([m()],hn.prototype,"placement",void 0);er([m()],hn.prototype,"variant",void 0);er([m()],hn.prototype,"size",void 0);er([m()],hn.prototype,"message",void 0);hn=er([E("wui-tooltip")],hn);var va;(function(e){e.approve="approved",e.bought="bought",e.borrow="borrowed",e.burn="burnt",e.cancel="canceled",e.claim="claimed",e.deploy="deployed",e.deposit="deposited",e.execute="executed",e.mint="minted",e.receive="received",e.repay="repaid",e.send="sent",e.sell="sold",e.stake="staked",e.trade="swapped",e.unstake="unstaked",e.withdraw="withdrawn"})(va||(va={}));const Jf=D`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  :host([data-no-images='true']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]} !important;
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  wui-flex.status-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.backgroundPrimary};
    overflow: hidden;
    width: 16px;
    height: 16px;
  }
`;var Sn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let si=class extends P{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[t,i]=this.images;this.images.length||(this.dataset.noImages="true");const o=(t==null?void 0:t.type)==="NFT",r=i!=null&&i.url?i.type==="NFT":o,n=o?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)",s=r?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)";return this.style.cssText=`
    --local-left-border-radius: ${n};
    --local-right-border-radius: ${s};
    `,u`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,i]=this.images,o=t==null?void 0:t.type;return this.images.length===2&&(t!=null&&t.url||i!=null&&i.url)?u`<div class="swap-images-container">
        ${t!=null&&t.url?u`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${i!=null&&i.url?u`<wui-image src=${i.url} alt="Transaction image"></wui-image>`:null}
      </div>`:t!=null&&t.url?u`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:o==="NFT"?u`<wui-icon size="inherit" color="default" name="nftPlaceholder"></wui-icon>`:u`<wui-icon size="inherit" color="default" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t="accent-primary",i;return i=this.getIcon(),this.status&&(t=this.getStatusColor()),i?u`
      <wui-flex alignItems="center" justifyContent="center" class="status-box">
        <wui-icon-box size="sm" color=${t} icon=${i}></wui-icon-box>
      </wui-flex>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontal":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success";case"failed":return"error";case"pending":return"inverse";default:return"accent-primary"}}};si.styles=[Jf];Sn([m()],si.prototype,"type",void 0);Sn([m()],si.prototype,"status",void 0);Sn([m()],si.prototype,"direction",void 0);Sn([m({type:Boolean})],si.prototype,"onlyDirectionIcon",void 0);Sn([m({type:Array})],si.prototype,"images",void 0);Sn([m({type:Object})],si.prototype,"secondImage",void 0);si=Sn([E("wui-transaction-visual")],si);const e0=D`
  :host {
    width: 100%;
  }

  :host > wui-flex:first-child {
    align-items: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var Bi=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Wt=class extends P{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return u`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${j(this.direction)}
          type=${this.type}
          .onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="lg-medium" color="primary">
            ${va[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="sm-medium" color="secondary"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var i;const t=(i=this.descriptions)==null?void 0:i[0];return t?u`
          <wui-text variant="md-regular" color="secondary">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){var i;const t=(i=this.descriptions)==null?void 0:i[1];return t?u`
          <wui-icon class="description-separator-icon" size="sm" name="arrowRight"></wui-icon>
          <wui-text variant="md-regular" color="secondary">
            <span>${t}</span>
          </wui-text>
        `:null}};Wt.styles=[z,e0];Bi([m()],Wt.prototype,"type",void 0);Bi([m({type:Array})],Wt.prototype,"descriptions",void 0);Bi([m()],Wt.prototype,"date",void 0);Bi([m({type:Boolean})],Wt.prototype,"onlyDirectionIcon",void 0);Bi([m()],Wt.prototype,"status",void 0);Bi([m()],Wt.prototype,"direction",void 0);Bi([m({type:Array})],Wt.prototype,"images",void 0);Wt=Bi([E("wui-transaction-list-item")],Wt);const t0=D`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundSecondary} 0%,
      ${({tokens:e})=>e.theme.foregroundTertiary} 50%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var tr=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let pn=class extends P{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",u`<slot></slot>`}};pn.styles=[t0];tr([m()],pn.prototype,"width",void 0);tr([m()],pn.prototype,"height",void 0);tr([m()],pn.prototype,"variant",void 0);tr([m({type:Boolean})],pn.prototype,"rounded",void 0);pn=tr([E("wui-shimmer")],pn);const i0=D`
  wui-flex {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[128]};
  }

  .fallback-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
    border-radius: ${({borderRadius:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .direction-icon,
  .status-image {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: ${({borderRadius:e})=>e[128]};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .direction-icon {
    padding: ${({spacing:e})=>e["01"]};
    color: ${({tokens:e})=>e.core.iconSuccess};

    background-color: color-mix(
      in srgb,
      ${({tokens:e})=>e.core.textSuccess} 30%,
      ${({tokens:e})=>e.theme.backgroundPrimary} 70%
    );
  }

  /* -- Sizes --------------------------------------------------- */
  :host([data-size='sm']) > wui-image:not(.status-image),
  :host([data-size='sm']) > wui-flex {
    width: 24px;
    height: 24px;
  }

  :host([data-size='lg']) > wui-image:not(.status-image),
  :host([data-size='lg']) > wui-flex {
    width: 40px;
    height: 40px;
  }

  :host([data-size='sm']) .fallback-icon {
    height: 16px;
    width: 16px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='lg']) .fallback-icon {
    height: 32px;
    width: 32px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='sm']) .direction-icon,
  :host([data-size='sm']) .status-image {
    transform: translate(40%, 30%);
  }

  :host([data-size='lg']) .direction-icon,
  :host([data-size='lg']) .status-image {
    transform: translate(40%, 10%);
  }

  :host([data-size='sm']) .status-image {
    height: 14px;
    width: 14px;
  }

  :host([data-size='lg']) .status-image {
    height: 20px;
    width: 20px;
  }

  /* -- Crop effects --------------------------------------------------- */
  .swap-crop-left-image,
  .swap-crop-right-image {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .swap-crop-left-image {
    left: 0;
    clip-path: inset(0px calc(50% + 1.5px) 0px 0%);
  }

  .swap-crop-right-image {
    right: 0;
    clip-path: inset(0px 0px 0px calc(50% + 1.5px));
  }
`;var ir=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Os={sm:"xxs",lg:"md"};let fn=class extends P{constructor(){super(...arguments),this.type="approve",this.size="lg",this.statusImageUrl="",this.images=[]}render(){return u`<wui-flex>${this.templateVisual()} ${this.templateIcon()}</wui-flex>`}templateVisual(){switch(this.dataset.size=this.size,this.type){case"trade":return this.swapTemplate();case"fiat":return this.fiatTemplate();case"unknown":return this.unknownTemplate();default:return this.tokenTemplate()}}swapTemplate(){const[t,i]=this.images;return this.images.length===2&&(t||i)?u`
        <wui-image class="swap-crop-left-image" src=${t} alt="Swap image"></wui-image>
        <wui-image class="swap-crop-right-image" src=${i} alt="Swap image"></wui-image>
      `:t?u`<wui-image src=${t} alt="Swap image"></wui-image>`:null}fiatTemplate(){return u`<wui-icon
      class="fallback-icon"
      size=${Os[this.size]}
      name="dollar"
    ></wui-icon>`}unknownTemplate(){return u`<wui-icon
      class="fallback-icon"
      size=${Os[this.size]}
      name="questionMark"
    ></wui-icon>`}tokenTemplate(){const[t]=this.images;return t?u`<wui-image src=${t} alt="Token image"></wui-image> `:u`<wui-icon
      class="fallback-icon"
      name=${this.type==="nft"?"image":"coinPlaceholder"}
    ></wui-icon>`}templateIcon(){return this.statusImageUrl?u`<wui-image
        class="status-image"
        src=${this.statusImageUrl}
        alt="Status image"
      ></wui-image>`:u`<wui-icon
      class="direction-icon"
      size=${Os[this.size]}
      name=${this.getTemplateIcon()}
    ></wui-icon>`}getTemplateIcon(){return this.type==="trade"?"arrowClockWise":"arrowBottom"}};fn.styles=[i0];ir([m()],fn.prototype,"type",void 0);ir([m()],fn.prototype,"size",void 0);ir([m()],fn.prototype,"statusImageUrl",void 0);ir([m({type:Array})],fn.prototype,"images",void 0);fn=ir([E("wui-transaction-thumbnail")],fn);const n0=D`
  :host > wui-flex:first-child {
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var o0=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let xa=class extends P{render(){return u`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px" rounded></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="124px" height="16px" rounded></wui-shimmer>
          <wui-shimmer width="60px" height="14px" rounded></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" rounded></wui-shimmer>
      </wui-flex>
    `}};xa.styles=[z,n0];xa=o0([E("wui-transaction-list-item-loader")],xa);const r0=D`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: ${({spacing:e})=>e[3]};
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var An=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Jl="last-transaction",s0=7;let ai=class extends P{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=$.state.activeCaipAddress,this.transactionsByYear=Tt.state.transactionsByYear,this.loading=Tt.state.loading,this.empty=Tt.state.empty,this.next=Tt.state.next,Tt.clearCursor(),this.unsubscribe.push($.subscribeKey("activeCaipAddress",t=>{t&&this.caipAddress!==t&&(Tt.resetTransactions(),Tt.fetchTransactions(t)),this.caipAddress=t}),$.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),Tt.subscribe(t=>{this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){Tt.resetTransactions(),this.caipAddress&&Tt.fetchTransactions(B.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(i=>{const o=parseInt(i,10),r=new Array(12).fill(null).map((n,s)=>{var c;const a=kr.getTransactionGroupTitle(o,s),l=(c=this.transactionsByYear[o])==null?void 0:c[s];return{groupTitle:a,transactions:l}}).filter(({transactions:n})=>n).reverse();return r.map(({groupTitle:n,transactions:s},a)=>{const l=a===r.length-1;return s?u`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${l?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["2","3","3","3"]}
            >
              <wui-text variant="md-medium" color="secondary" data-testid="group-title">
                ${n}
              </wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="2">
              ${this.templateTransactions(s,l)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(t,i){const{date:o,descriptions:r,direction:n,images:s,status:a,type:l,transfers:c,isAllNFT:h}=this.getTransactionListItemProps(t);return u`
      <wui-transaction-list-item
        date=${o}
        .direction=${n}
        id=${i&&this.next?Jl:""}
        status=${a}
        type=${l}
        .images=${s}
        .onlyDirectionIcon=${h||c.length===1}
        .descriptions=${r}
      ></wui-transaction-list-item>
    `}templateTransactions(t,i){return t.map((o,r)=>{const n=i&&r===t.length-1;return u`${this.templateRenderTransaction(o,n)}`})}emptyStateActivity(){return u`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["10","5","10","5"]}
      gap="5"
      data-testid="empty-activity-state"
    >
      <wui-icon-box color="default" icon="wallet" size="xl"></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="lg-medium" color="primary">No Transactions yet</wui-text>
        <wui-text align="center" variant="lg-regular" color="secondary"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return u`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="4"
      data-testid="empty-account-state"
    >
      <wui-icon-box icon="swapHorizontal" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="md-regular" align="center" color="primary">No activity yet</wui-text>
        <wui-text variant="sm-regular" align="center" color="secondary"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page==="account"?u`${this.emptyStateAccount()}`:u`${this.emptyStateActivity()}`}templateLoading(){return this.page==="activity"?Array(s0).fill(u` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(t=>t):null}onReceiveClick(){_.push("WalletReceive")}createPaginationObserver(){const{projectId:t}=I.state;this.paginationObserver=new IntersectionObserver(([i])=>{i!=null&&i.isIntersecting&&!this.loading&&(Tt.fetchTransactions(B.getPlainAddress(this.caipAddress)),Y.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:B.getPlainAddress(this.caipAddress),projectId:t,cursor:this.next,isSmartAccount:Si($.state.activeChain)===Ai.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var i,o,r;(i=this.paginationObserver)==null||i.disconnect();const t=(o=this.shadowRoot)==null?void 0:o.querySelector(`#${Jl}`);t&&((r=this.paginationObserver)==null||r.observe(t))}getTransactionListItemProps(t){var l,c,h;const i=up.formatDate((l=t==null?void 0:t.metadata)==null?void 0:l.minedAt),o=kr.mergeTransfers(t==null?void 0:t.transfers),r=kr.getTransactionDescriptions(t,o),n=o==null?void 0:o[0],s=!!n&&(o==null?void 0:o.every(f=>!!f.nft_info)),a=kr.getTransactionImages(o);return{date:i,direction:n==null?void 0:n.direction,descriptions:r,isAllNFT:s,images:a,status:(c=t.metadata)==null?void 0:c.status,transfers:o,type:(h=t.metadata)==null?void 0:h.operationType}}};ai.styles=r0;An([m()],ai.prototype,"page",void 0);An([x()],ai.prototype,"caipAddress",void 0);An([x()],ai.prototype,"transactionsByYear",void 0);An([x()],ai.prototype,"loading",void 0);An([x()],ai.prototype,"empty",void 0);An([x()],ai.prototype,"next",void 0);ai=An([E("w3m-activity-list")],ai);const a0=Ee`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;var l0=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ca=class extends P{render(){return u`<w3m-activity-list page="account"></w3m-activity-list>`}};Ca.styles=a0;Ca=l0([E("w3m-account-activity-widget")],Ca);const c0=D`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[4]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    max-width: 174px;
  }

  .tag-container {
    width: fit-content;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var po=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Pi=class extends P{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.disabled=!1}render(){return u`
      <button ?disabled=${this.disabled}>
        <wui-flex alignItems="center" gap="3">
          <wui-icon-box padding="2" color="secondary" icon=${this.icon} size="lg"></wui-icon-box>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.text}</wui-text>
            ${this.description?u`<wui-text variant="md-regular" color="secondary">
                  ${this.description}</wui-text
                >`:null}
          </wui-flex>
        </wui-flex>

        <wui-flex class="tag-container" alignItems="center" gap="1" justifyContent="flex-end">
          ${this.tag?u`<wui-tag tagType="main" size="sm">${this.tag}</wui-tag>`:null}
          <wui-icon size="md" name="chevronRight" color="default"></wui-icon>
        </wui-flex>
      </button>
    `}};Pi.styles=[z,de,c0];po([m()],Pi.prototype,"icon",void 0);po([m()],Pi.prototype,"text",void 0);po([m()],Pi.prototype,"description",void 0);po([m()],Pi.prototype,"tag",void 0);po([m({type:Boolean})],Pi.prototype,"disabled",void 0);Pi=po([E("wui-list-description")],Pi);const d0=D`
  :host {
    width: 100%;
  }

  button {
    padding: ${({spacing:e})=>e[3]};
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: transparent;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: ${({spacing:e})=>e[10]};
    height: ${({spacing:e})=>e[10]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[16]};
  }
`;var En=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let li=class extends P{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return u`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="2" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="space-between" gap="1">
            <wui-text variant="md-regular" color="primary">${this.tokenName}</wui-text>
            <wui-text variant="sm-regular-mono" color="secondary">
              ${Gl.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          justifyContent="space-between"
          gap="1"
          alignItems="flex-end"
        >
          <wui-text variant="md-regular-mono" color="primary"
            >$${this.tokenValue.toFixed(2)}</wui-text
          >
          <wui-text variant="sm-regular-mono" color="secondary">
            ${Gl.formatNumberToLocalString(this.tokenAmount,4)}
          </wui-text>
        </wui-flex>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?u`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:u`<wui-icon name="coinPlaceholder" color="default"></wui-icon>`}};li.styles=[z,de,d0];En([m()],li.prototype,"tokenName",void 0);En([m()],li.prototype,"tokenImageUrl",void 0);En([m({type:Number})],li.prototype,"tokenValue",void 0);En([m()],li.prototype,"tokenAmount",void 0);En([m()],li.prototype,"tokenCurrency",void 0);En([m({type:Boolean})],li.prototype,"clickable",void 0);li=En([E("wui-list-token")],li);const u0=Ee`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var ol=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let No=class extends P{constructor(){var t;super(),this.unsubscribe=[],this.tokenBalance=(t=$.getAccountData())==null?void 0:t.tokenBalance,this.remoteFeatures=I.state.remoteFeatures,this.unsubscribe.push($.subscribeChainProp("accountState",i=>{this.tokenBalance=i==null?void 0:i.tokenBalance}),I.subscribeKey("remoteFeatures",i=>{this.remoteFeatures=i}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u`${this.tokenTemplate()}`}tokenTemplate(){var t;return this.tokenBalance&&((t=this.tokenBalance)==null?void 0:t.length)>0?u`<wui-flex class="contentContainer" flexDirection="column" gap="2">
        ${this.tokenItemTemplate()}
      </wui-flex>`:u` <wui-flex flexDirection="column">
      ${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Scan the QR code and receive funds"
        icon="qrCode"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="w3m-account-receive-button"
      ></wui-list-description
    ></wui-flex>`}onRampTemplate(){var t;return(t=this.remoteFeatures)!=null&&t.onramp?u`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="w3m-account-onramp-button"
      ></wui-list-description>`:u``}tokenItemTemplate(){var t;return(t=this.tokenBalance)==null?void 0:t.map(i=>u`<wui-list-token
          tokenName=${i.name}
          tokenImageUrl=${i.iconUrl}
          tokenAmount=${i.quantity.numeric}
          tokenValue=${i.value}
          tokenCurrency=${i.symbol}
        ></wui-list-token>`)}onReceiveClick(){_.push("WalletReceive")}onBuyClick(){Y.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:Si($.state.activeChain)===Ai.ACCOUNT_TYPES.SMART_ACCOUNT}}),_.push("OnRampProviders")}};No.styles=u0;ol([x()],No.prototype,"tokenBalance",void 0);ol([x()],No.prototype,"remoteFeatures",void 0);No=ol([E("w3m-account-tokens-widget")],No);const h0=Ee`
  :host {
    width: 100%;
    display: block;
  }
`;var rl=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ro=class extends P{constructor(){super(),this.unsubscribe=[],this.text="",this.open=wt.state.open,this.unsubscribe.push(_.subscribeKey("view",()=>{wt.hide()}),je.subscribeKey("open",t=>{t||wt.hide()}),wt.subscribeKey("open",t=>{this.open=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),wt.hide()}render(){return u`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return u`<slot></slot> `}onMouseEnter(){const t=this.getBoundingClientRect();if(!this.open){const i=document.querySelector("w3m-modal"),o={width:t.width,height:t.height,left:t.left,top:t.top};if(i){const r=i.getBoundingClientRect();o.left=t.left-(window.innerWidth-r.width)/2,o.top=t.top-(window.innerHeight-r.height)/2}wt.showTooltip({message:this.text,triggerRect:o,variant:"shade"})}}onMouseLeave(t){this.contains(t.relatedTarget)||wt.hide()}};Ro.styles=[h0];rl([m()],Ro.prototype,"text",void 0);rl([x()],Ro.prototype,"open",void 0);Ro=rl([E("w3m-tooltip-trigger")],Ro);const p0=D`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:e})=>e[3]} 10px ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:e})=>e[5]});
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.textPrimary};
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var nr=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let mn=class extends P{constructor(){super(),this.unsubscribe=[],this.open=wt.state.open,this.message=wt.state.message,this.triggerRect=wt.state.triggerRect,this.variant=wt.state.variant,this.unsubscribe.push(wt.subscribe(t=>{this.open=t.open,this.message=t.message,this.triggerRect=t.triggerRect,this.variant=t.variant}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){this.dataset.variant=this.variant;const t=this.triggerRect.top,i=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${t}px;
    --w3m-tooltip-left: ${i}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,u`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};mn.styles=[p0];nr([x()],mn.prototype,"open",void 0);nr([x()],mn.prototype,"message",void 0);nr([x()],mn.prototype,"triggerRect",void 0);nr([x()],mn.prototype,"variant",void 0);mn=nr([E("w3m-tooltip")],mn);const f0=D`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * ${({spacing:e})=>e[4]});
  }

  wui-promo + wui-profile-button {
    margin-top: ${({spacing:e})=>e[4]};
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var Dt=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let rt=class extends P{constructor(){var t,i,o,r;super(...arguments),this.unsubscribe=[],this.network=$.state.activeCaipNetwork,this.profileName=(t=$.getAccountData())==null?void 0:t.profileName,this.address=(i=$.getAccountData())==null?void 0:i.address,this.currentTab=(o=$.getAccountData())==null?void 0:o.currentTab,this.tokenBalance=(r=$.getAccountData())==null?void 0:r.tokenBalance,this.features=I.state.features,this.namespace=$.state.activeChain,this.activeConnectorIds=V.state.activeConnectorIds,this.remoteFeatures=I.state.remoteFeatures}firstUpdated(){$.fetchTokenBalance(),this.unsubscribe.push($.subscribeChainProp("accountState",t=>{t!=null&&t.address?(this.address=t.address,this.profileName=t.profileName,this.currentTab=t.currentTab,this.tokenBalance=t.tokenBalance):je.close()}),V.subscribeKey("activeConnectorIds",t=>{this.activeConnectorIds=t}),$.subscribeKey("activeChain",t=>this.namespace=t),$.subscribeKey("activeCaipNetwork",t=>this.network=t),I.subscribeKey("features",t=>this.features=t),I.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t)),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),clearInterval(this.watchTokenBalance)}render(){if(!this.address)throw new Error("w3m-account-features-widget: No account provided");if(!this.namespace)return null;const t=this.activeConnectorIds[this.namespace],i=t?V.getConnectorById(t):void 0,{icon:o,iconSize:r}=this.getAuthData();return u`<wui-flex
      flexDirection="column"
      .padding=${["0","3","4","3"]}
      alignItems="center"
      gap="4"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center" gap="2">
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          icon=${o}
          iconSize=${r}
          alt=${i==null?void 0:i.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        ${this.tokenBalanceTemplate()}
      </wui-flex>
      ${this.orderedWalletFeatures()} ${this.tabsTemplate()} ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){var n;const t=((n=this.features)==null?void 0:n.walletFeaturesOrder)||Le.DEFAULT_FEATURES.walletFeaturesOrder;if(t.every(s=>{var a,l;return s==="send"||s==="receive"?!((a=this.features)!=null&&a[s]):s==="swaps"||s==="onramp"?!((l=this.remoteFeatures)!=null&&l[s]):!0}))return null;const o=t.map(s=>s==="receive"||s==="onramp"?"fund":s),r=[...new Set(o)];return u`<wui-flex gap="2">
      ${r.map(s=>{switch(s){case"fund":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}
    </wui-flex>`}fundWalletTemplate(){var n,s;if(!this.namespace)return null;const t=Le.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),i=(n=this.features)==null?void 0:n.receive,o=((s=this.remoteFeatures)==null?void 0:s.onramp)&&t,r=ft.isPayWithExchangeEnabled();return!o&&!i&&!r?null:u`
      <w3m-tooltip-trigger text="Fund wallet">
        <wui-button
          data-testid="wallet-features-fund-wallet-button"
          @click=${this.onFundWalletClick.bind(this)}
          variant="accent-secondary"
          size="lg"
          fullWidth
        >
          <wui-icon name="dollar"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}swapsTemplate(){var o;const t=(o=this.remoteFeatures)==null?void 0:o.swaps,i=$.state.activeChain===ae.CHAIN.EVM;return!t||!i?null:u`
      <w3m-tooltip-trigger text="Swap">
        <wui-button
          fullWidth
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="recycleHorizontal"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}sendTemplate(){var r;const t=(r=this.features)==null?void 0:r.send,i=$.state.activeChain,o=Le.SEND_SUPPORTED_NAMESPACES.includes(i);return!t||!o?null:u`
      <w3m-tooltip-trigger text="Send">
        <wui-button
          fullWidth
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="send"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}watchSwapValues(){this.watchTokenBalance=setInterval(()=>$.fetchTokenBalance(t=>this.onTokenBalanceError(t)),1e4)}onTokenBalanceError(t){t instanceof Error&&t.cause instanceof Response&&t.cause.status===ae.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}listContentTemplate(){return this.currentTab===0?u`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:this.currentTab===1?u`<w3m-account-activity-widget></w3m-account-activity-widget>`:u`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){var t;if(this.tokenBalance&&((t=this.tokenBalance)==null?void 0:t.length)>=0){const i=B.calculateBalance(this.tokenBalance),{dollars:o="0",pennies:r="00"}=B.formatTokenBalance(i);return u`<wui-balance dollars=${o} pennies=${r}></wui-balance>`}return u`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){const t=Hn.getTabsByNamespace($.state.activeChain);return t.length===0?null:u`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      .tabs=${t}
    ></wui-tabs>`}onTabChange(t){$.setAccountProp("currentTab",t,this.namespace)}onFundWalletClick(){_.push("FundWallet")}onSwapClick(){var t,i,o;(t=this.network)!=null&&t.caipNetworkId&&!Le.SWAP_SUPPORTED_NETWORKS.includes((i=this.network)==null?void 0:i.caipNetworkId)?_.push("UnsupportedChain",{swapUnsupportedChain:!0}):(Y.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:((o=this.network)==null?void 0:o.caipNetworkId)||"",isSmartAccount:Si($.state.activeChain)===Ai.ACCOUNT_TYPES.SMART_ACCOUNT}}),_.push("Swap"))}getAuthData(){const t=ni.getConnectedSocialProvider(),i=ni.getConnectedSocialUsername(),o=V.getAuthConnector(),r=(o==null?void 0:o.provider.getEmail())??"";return{name:Jt.getAuthName({email:r,socialUsername:i,socialProvider:t}),icon:t??"mail",iconSize:t?"xl":"md"}}onGoToProfileWalletsView(){_.push("ProfileWallets")}onSendClick(){var t;Y.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:((t=this.network)==null?void 0:t.caipNetworkId)||"",isSmartAccount:Si($.state.activeChain)===Ai.ACCOUNT_TYPES.SMART_ACCOUNT}}),_.push("WalletSend")}};rt.styles=f0;Dt([x()],rt.prototype,"watchTokenBalance",void 0);Dt([x()],rt.prototype,"network",void 0);Dt([x()],rt.prototype,"profileName",void 0);Dt([x()],rt.prototype,"address",void 0);Dt([x()],rt.prototype,"currentTab",void 0);Dt([x()],rt.prototype,"tokenBalance",void 0);Dt([x()],rt.prototype,"features",void 0);Dt([x()],rt.prototype,"namespace",void 0);Dt([x()],rt.prototype,"activeConnectorIds",void 0);Dt([x()],rt.prototype,"remoteFeatures",void 0);rt=Dt([E("w3m-account-wallet-features-widget")],rt);var Rd=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Fr=class extends P{constructor(){super(),this.unsubscribe=[],this.namespace=$.state.activeChain,this.unsubscribe.push($.subscribeKey("activeChain",t=>{this.namespace=t}))}render(){if(!this.namespace)return null;const t=V.getConnectorId(this.namespace),i=V.getAuthConnector();return u`
      ${i&&t===ae.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return u`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return u`<w3m-account-default-widget></w3m-account-default-widget>`}};Rd([x()],Fr.prototype,"namespace",void 0);Fr=Rd([E("w3m-account-view")],Fr);const m0=D`
  :host {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-image='true']) {
    background-color: transparent;
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-size='sm']) {
    width: 32px;
    height: 32px;
  }

  :host([data-size='md']) {
    width: 40px;
    height: 40px;
  }

  :host([data-size='lg']) {
    width: 56px;
    height: 56px;
  }

  :host([name='Extension'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 32px;
    height: 32px;
  }

  wui-icon[data-parent-size='md'] {
    width: 40px;
    height: 40px;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: 1px;
  }
`;var _n=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ci=class extends P{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="1";return this.size==="lg"?t="4":this.size==="md"?t="2":this.size==="sm"&&(t="1"),this.style.cssText=`
       --local-border-radius: var(--apkt-borderRadius-${t});
   `,this.dataset.size=this.size,this.imageSrc&&(this.dataset.image="true"),this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),u`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?u`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?u`<wui-icon size="md" color="default" name=${this.walletIcon}></wui-icon>`:u`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};ci.styles=[z,m0];_n([m()],ci.prototype,"size",void 0);_n([m()],ci.prototype,"name",void 0);_n([m()],ci.prototype,"imageSrc",void 0);_n([m()],ci.prototype,"walletIcon",void 0);_n([m({type:Boolean})],ci.prototype,"installed",void 0);_n([m()],ci.prototype,"badgeSize",void 0);ci=_n([E("wui-wallet-image")],ci);const g0=D`
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon:not(.custom-icon, .icon-badge) {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var tt=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Me=class extends P{constructor(){super(...arguments),this.address="",this.profileName="",this.content=[],this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadge=void 0,this.iconBadgeSize="md",this.buttonVariant="neutral-primary",this.enableMoreButton=!1,this.charsStart=4,this.charsEnd=6}render(){return u`
      <wui-flex flexDirection="column" rowgap="2">
        ${this.topTemplate()} ${this.bottomTemplate()}
      </wui-flex>
    `}topTemplate(){return u`
      <wui-flex alignItems="flex-start" justifyContent="space-between">
        ${this.imageOrIconTemplate()}
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="copy"
          @click=${this.dispatchCopyEvent}
        ></wui-icon-link>
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="externalLink"
          @click=${this.dispatchExternalLinkEvent}
        ></wui-icon-link>
        ${this.enableMoreButton?u`<wui-icon-link
              variant="secondary"
              size="md"
              icon="threeDots"
              @click=${this.dispatchMoreButtonEvent}
              data-testid="wui-active-profile-wallet-item-more-button"
            ></wui-icon-link>`:null}
      </wui-flex>
    `}bottomTemplate(){return u` <wui-flex flexDirection="column">${this.contentTemplate()}</wui-flex> `}imageOrIconTemplate(){return this.icon?u`
        <wui-flex flexGrow="1" alignItems="center">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?u`<wui-icon
                  color="accent-primary"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:u`
      <wui-flex flexGrow="1" alignItems="center">
        <wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>
      </wui-flex>
    `}contentTemplate(){return this.content.length===0?null:u`
      <wui-flex flexDirection="column" rowgap="3">
        ${this.content.map(t=>this.labelAndTagTemplate(t))}
      </wui-flex>
    `}labelAndTagTemplate({address:t,profileName:i,label:o,description:r,enableButton:n,buttonType:s,buttonLabel:a,buttonVariant:l,tagVariant:c,tagLabel:h,alignItems:f="flex-end"}){return u`
      <wui-flex justifyContent="space-between" alignItems=${f} columngap="1">
        <wui-flex flexDirection="column" rowgap="01">
          ${o?u`<wui-text variant="sm-medium" color="secondary">${o}</wui-text>`:null}

          <wui-flex alignItems="center" columngap="1">
            <wui-text variant="md-regular" color="primary">
              ${be.getTruncateString({string:i||t,charsStart:i?16:this.charsStart,charsEnd:i?0:this.charsEnd,truncate:i?"end":"middle"})}
            </wui-text>

            ${c&&h?u`<wui-tag variant=${c} size="sm">${h}</wui-tag>`:null}
          </wui-flex>

          ${r?u`<wui-text variant="sm-regular" color="secondary">${r}</wui-text>`:null}
        </wui-flex>

        ${n?this.buttonTemplate({buttonType:s,buttonLabel:a,buttonVariant:l}):null}
      </wui-flex>
    `}buttonTemplate({buttonType:t,buttonLabel:i,buttonVariant:o}){return u`
      <wui-button
        size="sm"
        variant=${o}
        @click=${t==="disconnect"?this.dispatchDisconnectEvent.bind(this):this.dispatchSwitchEvent.bind(this)}
        data-testid=${t==="disconnect"?"wui-active-profile-wallet-item-disconnect-button":"wui-active-profile-wallet-item-switch-button"}
      >
        ${i}
      </wui-button>
    `}dispatchDisconnectEvent(){this.dispatchEvent(new CustomEvent("disconnect",{bubbles:!0,composed:!0}))}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("switch",{bubbles:!0,composed:!0}))}dispatchExternalLinkEvent(){this.dispatchEvent(new CustomEvent("externalLink",{bubbles:!0,composed:!0}))}dispatchMoreButtonEvent(){this.dispatchEvent(new CustomEvent("more",{bubbles:!0,composed:!0}))}dispatchCopyEvent(){this.dispatchEvent(new CustomEvent("copy",{bubbles:!0,composed:!0}))}};Me.styles=[z,de,g0];tt([m()],Me.prototype,"address",void 0);tt([m()],Me.prototype,"profileName",void 0);tt([m({type:Array})],Me.prototype,"content",void 0);tt([m()],Me.prototype,"alt",void 0);tt([m()],Me.prototype,"imageSrc",void 0);tt([m()],Me.prototype,"icon",void 0);tt([m()],Me.prototype,"iconSize",void 0);tt([m()],Me.prototype,"iconBadge",void 0);tt([m()],Me.prototype,"iconBadgeSize",void 0);tt([m()],Me.prototype,"buttonVariant",void 0);tt([m({type:Boolean})],Me.prototype,"enableMoreButton",void 0);tt([m({type:Number})],Me.prototype,"charsStart",void 0);tt([m({type:Number})],Me.prototype,"charsEnd",void 0);Me=tt([E("wui-active-profile-wallet-item")],Me);const w0=D`
  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  .right-icon {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var Ve=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Te=class extends P{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.buttonLabel="",this.buttonVariant="accent-primary",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadgeSize="md",this.rightIcon="signOut",this.rightIconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return u`
      <wui-flex alignItems="center" columngap="2">
        ${this.imageOrIconTemplate()} ${this.labelAndDescriptionTemplate()}
        ${this.buttonActionTemplate()}
      </wui-flex>
    `}imageOrIconTemplate(){return this.icon?u`
        <wui-flex alignItems="center" justifyContent="center" class="icon-box">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?u`<wui-icon
                  color="default"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:u`<wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>`}labelAndDescriptionTemplate(){return u`
      <wui-flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <wui-text variant="lg-regular" color="primary">
          ${be.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
        </wui-text>
      </wui-flex>
    `}buttonActionTemplate(){return u`
      <wui-flex columngap="1" alignItems="center" justifyContent="center">
        <wui-button
          size="sm"
          variant=${this.buttonVariant}
          .loading=${this.loading}
          @click=${this.handleButtonClick}
          data-testid="wui-inactive-profile-wallet-item-button"
        >
          ${this.buttonLabel}
        </wui-button>

        <wui-icon-link
          variant="secondary"
          size="md"
          icon=${j(this.rightIcon)}
          class="right-icon"
          @click=${this.handleIconClick}
        ></wui-icon-link>
      </wui-flex>
    `}handleButtonClick(){this.dispatchEvent(new CustomEvent("buttonClick",{bubbles:!0,composed:!0}))}handleIconClick(){this.dispatchEvent(new CustomEvent("iconClick",{bubbles:!0,composed:!0}))}};Te.styles=[z,de,w0];Ve([m()],Te.prototype,"address",void 0);Ve([m()],Te.prototype,"profileName",void 0);Ve([m()],Te.prototype,"alt",void 0);Ve([m()],Te.prototype,"buttonLabel",void 0);Ve([m()],Te.prototype,"buttonVariant",void 0);Ve([m()],Te.prototype,"imageSrc",void 0);Ve([m()],Te.prototype,"icon",void 0);Ve([m()],Te.prototype,"iconSize",void 0);Ve([m()],Te.prototype,"iconBadge",void 0);Ve([m()],Te.prototype,"iconBadgeSize",void 0);Ve([m()],Te.prototype,"rightIcon",void 0);Ve([m()],Te.prototype,"rightIconSize",void 0);Ve([m({type:Boolean})],Te.prototype,"loading",void 0);Ve([m({type:Number})],Te.prototype,"charsStart",void 0);Ve([m({type:Number})],Te.prototype,"charsEnd",void 0);Te=Ve([E("wui-inactive-profile-wallet-item")],Te);const b0=D`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:e})=>e.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }
`;var jd=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let zr=class extends P{constructor(){super(...arguments),this.text=""}render(){return u`${this.template()}`}template(){return this.text?u`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};zr.styles=[z,b0];jd([m()],zr.prototype,"text",void 0);zr=jd([E("wui-separator")],zr);const Ws={getAuthData(e){var s,a;const t=e.connectorId===ae.CONNECTOR_ID.AUTH;if(!t)return{isAuth:!1,icon:void 0,iconSize:void 0,name:void 0};const i=((s=e==null?void 0:e.auth)==null?void 0:s.name)??ni.getConnectedSocialProvider(),o=((a=e==null?void 0:e.auth)==null?void 0:a.username)??ni.getConnectedSocialUsername(),r=V.getAuthConnector(),n=(r==null?void 0:r.provider.getEmail())??"";return{isAuth:!0,icon:i??"mail",iconSize:i?"xl":"md",name:t?Jt.getAuthName({email:n,socialUsername:o,socialProvider:i}):void 0}}},y0=D`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .balance-amount {
    flex: 1;
  }

  .wallet-list {
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({easings:e})=>e["ease-out-power-1"]}
      ${({durations:e})=>e.md};
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .active-wallets {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .active-wallets-box {
    height: 330px;
  }

  .empty-wallet-list-box {
    height: 400px;
  }

  .empty-box {
    width: 100%;
    padding: ${({spacing:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-separator {
    margin: ${({spacing:e})=>e[2]} 0 ${({spacing:e})=>e[2]} 0;
  }

  .active-connection {
    padding: ${({spacing:e})=>e[2]};
  }

  .recent-connection {
    padding: ${({spacing:e})=>e[2]} 0 ${({spacing:e})=>e[2]} 0;
  }

  @media (max-width: 430px) {
    .active-wallets-box,
    .empty-wallet-list-box {
      height: auto;
      max-height: clamp(360px, 470px, 80vh);
    }
  }
`;var at=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const ht={ADDRESS_DISPLAY:{START:4,END:6},BADGE:{SIZE:"md",ICON:"lightbulb"},SCROLL_THRESHOLD:50,OPACITY_RANGE:[0,1]},Wn={eip155:"ethereum",solana:"solana",bip122:"bitcoin",ton:"ton"},v0=[{namespace:"eip155",icon:Wn.eip155,label:"EVM"},{namespace:"solana",icon:Wn.solana,label:"Solana"},{namespace:"bip122",icon:Wn.bip122,label:"Bitcoin"},{namespace:"ton",icon:Wn.ton,label:"Ton"}],x0={eip155:{title:"Add EVM Wallet",description:"Add your first EVM wallet"},solana:{title:"Add Solana Wallet",description:"Add your first Solana wallet"},bip122:{title:"Add Bitcoin Wallet",description:"Add your first Bitcoin wallet"},ton:{title:"Add TON Wallet",description:"Add your first TON wallet"}};let Oe=class extends P{constructor(){var t,i,o;super(),this.unsubscribers=[],this.currentTab=0,this.namespace=$.state.activeChain,this.namespaces=Array.from($.state.chains.keys()),this.caipAddress=void 0,this.profileName=void 0,this.activeConnectorIds=V.state.activeConnectorIds,this.lastSelectedAddress="",this.lastSelectedConnectorId="",this.isSwitching=!1,this.caipNetwork=$.state.activeCaipNetwork,this.user=(t=$.getAccountData())==null?void 0:t.user,this.remoteFeatures=I.state.remoteFeatures,this.currentTab=this.namespace?this.namespaces.indexOf(this.namespace):0,this.caipAddress=(i=$.getAccountData(this.namespace))==null?void 0:i.caipAddress,this.profileName=(o=$.getAccountData(this.namespace))==null?void 0:o.profileName,this.unsubscribers.push(G.subscribeKey("connections",()=>this.onConnectionsChange()),G.subscribeKey("recentConnections",()=>this.requestUpdate()),V.subscribeKey("activeConnectorIds",r=>{this.activeConnectorIds=r}),$.subscribeKey("activeCaipNetwork",r=>this.caipNetwork=r),$.subscribeChainProp("accountState",r=>{this.user=r==null?void 0:r.user}),I.subscribeKey("remoteFeatures",r=>this.remoteFeatures=r)),this.chainListener=$.subscribeChainProp("accountState",r=>{this.caipAddress=r==null?void 0:r.caipAddress,this.profileName=r==null?void 0:r.profileName},this.namespace)}disconnectedCallback(){var t,i;this.unsubscribers.forEach(o=>o()),(t=this.resizeObserver)==null||t.disconnect(),this.removeScrollListener(),(i=this.chainListener)==null||i.call(this)}firstUpdated(){var o;const t=(o=this.shadowRoot)==null?void 0:o.querySelector(".wallet-list");if(!t)return;const i=()=>this.updateScrollOpacity(t);requestAnimationFrame(i),t.addEventListener("scroll",i),this.resizeObserver=new ResizeObserver(i),this.resizeObserver.observe(t),i()}render(){const t=this.namespace;if(!t)throw new Error("Namespace is not set");return u`
      <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="4">
        ${this.renderTabs()} ${this.renderHeader(t)} ${this.renderConnections(t)}
        ${this.renderAddConnectionButton(t)}
      </wui-flex>
    `}renderTabs(){const t=v0.filter(o=>this.namespaces.includes(o.namespace));return t.length>1?u`
        <wui-tabs
          .onTabChange=${o=>this.handleTabChange(o)}
          .activeTab=${this.currentTab}
          .tabs=${t}
        ></wui-tabs>
      `:null}renderHeader(t){const o=this.getActiveConnections(t).flatMap(({accounts:r})=>r).length+(this.caipAddress?1:0);return u`
      <wui-flex alignItems="center" columngap="1">
        <wui-icon
          size="sm"
          name=${Wn[t]??Wn.eip155}
        ></wui-icon>
        <wui-text color="secondary" variant="lg-regular"
          >${o>1?"Wallets":"Wallet"}</wui-text
        >
        <wui-text
          color="primary"
          variant="lg-regular"
          class="balance-amount"
          data-testid="balance-amount"
        >
          ${o}
        </wui-text>
        <wui-link
          color="secondary"
          variant="secondary"
          @click=${()=>G.disconnect({namespace:t})}
          ?disabled=${!this.hasAnyConnections(t)}
          data-testid="disconnect-all-button"
        >
          Disconnect All
        </wui-link>
      </wui-flex>
    `}renderConnections(t){const i=this.hasAnyConnections(t);return u`
      <wui-flex flexDirection="column" class=${el({"wallet-list":!0,"active-wallets-box":i,"empty-wallet-list-box":!i})} rowgap="3">
        ${i?this.renderActiveConnections(t):this.renderEmptyState(t)}
      </wui-flex>
    `}renderActiveConnections(t){const i=this.getActiveConnections(t),o=this.activeConnectorIds[t],r=this.getPlainAddress();return u`
      ${r||o||i.length>0?u`<wui-flex
            flexDirection="column"
            .padding=${["4","0","4","0"]}
            class="active-wallets"
          >
            ${this.renderActiveProfile(t)} ${this.renderActiveConnectionsList(t)}
          </wui-flex>`:null}
      ${this.renderRecentConnections(t)}
    `}renderActiveProfile(t){const i=this.activeConnectorIds[t];if(!i)return null;const{connections:o}=xi.getConnectionsData(t),r=V.getConnectorById(i),n=me.getConnectorImage(r),s=this.getPlainAddress();if(!s)return null;const a=t===ae.CHAIN.BITCOIN,l=Ws.getAuthData({connectorId:i,accounts:[]}),c=this.getActiveConnections(t).flatMap(g=>g.accounts).length>0,h=o.find(g=>g.connectorId===i),f=h==null?void 0:h.accounts.filter(g=>!gt.isLowerCaseMatch(g.address,s));return u`
      <wui-flex flexDirection="column" .padding=${["0","4","0","4"]}>
        <wui-active-profile-wallet-item
          address=${s}
          alt=${r==null?void 0:r.name}
          .content=${this.getProfileContent({address:s,connections:o,connectorId:i,namespace:t})}
          .charsStart=${ht.ADDRESS_DISPLAY.START}
          .charsEnd=${ht.ADDRESS_DISPLAY.END}
          .icon=${l.icon}
          .iconSize=${l.iconSize}
          .iconBadge=${this.isSmartAccount(s)?ht.BADGE.ICON:void 0}
          .iconBadgeSize=${this.isSmartAccount(s)?ht.BADGE.SIZE:void 0}
          imageSrc=${n}
          ?enableMoreButton=${l.isAuth}
          @copy=${()=>this.handleCopyAddress(s)}
          @disconnect=${()=>this.handleDisconnect(t,i)}
          @switch=${()=>{a&&h&&(f!=null&&f[0])&&this.handleSwitchWallet(h,f[0].address,t)}}
          @externalLink=${()=>this.handleExternalLink(s)}
          @more=${()=>this.handleMore()}
          data-testid="wui-active-profile-wallet-item"
        ></wui-active-profile-wallet-item>
        ${c?u`<wui-separator></wui-separator>`:null}
      </wui-flex>
    `}renderActiveConnectionsList(t){const i=this.getActiveConnections(t);return i.length===0?null:u`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
        ${this.renderConnectionList(i,!1,t)}
      </wui-flex>
    `}renderRecentConnections(t){const{recentConnections:i}=xi.getConnectionsData(t);return i.flatMap(r=>r.accounts).length===0?null:u`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]} rowGap="2">
        <wui-text color="secondary" variant="sm-medium" data-testid="recently-connected-text"
          >RECENTLY CONNECTED</wui-text
        >
        <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
          ${this.renderConnectionList(i,!0,t)}
        </wui-flex>
      </wui-flex>
    `}renderConnectionList(t,i,o){return t.filter(r=>r.accounts.length>0).map((r,n)=>{const s=V.getConnectorById(r.connectorId),a=me.getConnectorImage(s)??"",l=Ws.getAuthData(r);return r.accounts.map((c,h)=>{const f=n!==0||h!==0,g=this.isAccountLoading(r.connectorId,c.address);return u`
            <wui-flex flexDirection="column">
              ${f?u`<wui-separator></wui-separator>`:null}
              <wui-inactive-profile-wallet-item
                address=${c.address}
                alt=${r.connectorId}
                buttonLabel=${i?"Connect":"Switch"}
                buttonVariant=${i?"neutral-secondary":"accent-secondary"}
                rightIcon=${i?"bin":"power"}
                rightIconSize="sm"
                class=${i?"recent-connection":"active-connection"}
                data-testid=${i?"recent-connection":"active-connection"}
                imageSrc=${a}
                .iconBadge=${this.isSmartAccount(c.address)?ht.BADGE.ICON:void 0}
                .iconBadgeSize=${this.isSmartAccount(c.address)?ht.BADGE.SIZE:void 0}
                .icon=${l.icon}
                .iconSize=${l.iconSize}
                .loading=${g}
                .showBalance=${!1}
                .charsStart=${ht.ADDRESS_DISPLAY.START}
                .charsEnd=${ht.ADDRESS_DISPLAY.END}
                @buttonClick=${()=>this.handleSwitchWallet(r,c.address,o)}
                @iconClick=${()=>this.handleWalletAction({connection:r,address:c.address,isRecentConnection:i,namespace:o})}
              ></wui-inactive-profile-wallet-item>
            </wui-flex>
          `})})}renderAddConnectionButton(t){if(!this.isMultiWalletEnabled()&&this.caipAddress||!this.hasAnyConnections(t))return null;const{title:i}=this.getChainLabelInfo(t);return u`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="plus"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.handleAddConnection(t)}
        data-testid="add-connection-button"
      >
        <wui-text variant="md-medium" color="secondary">${i}</wui-text>
      </wui-list-item>
    `}renderEmptyState(t){const{title:i,description:o}=this.getChainLabelInfo(t);return u`
      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowgap="3"
          class="empty-box"
        >
          <wui-icon-box size="xl" icon="wallet" color="secondary"></wui-icon-box>

          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="1">
            <wui-text color="primary" variant="lg-regular" data-testid="empty-state-text"
              >No wallet connected</wui-text
            >
            <wui-text color="secondary" variant="md-regular" data-testid="empty-state-description"
              >${o}</wui-text
            >
          </wui-flex>

          <wui-link
            @click=${()=>this.handleAddConnection(t)}
            data-testid="empty-state-button"
            icon="plus"
          >
            ${i}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}handleTabChange(t){var o,r,n;const i=this.namespaces[t];i&&((o=this.chainListener)==null||o.call(this),this.currentTab=this.namespaces.indexOf(i),this.namespace=i,this.caipAddress=(r=$.getAccountData(i))==null?void 0:r.caipAddress,this.profileName=(n=$.getAccountData(i))==null?void 0:n.profileName,this.chainListener=$.subscribeChainProp("accountState",s=>{this.caipAddress=s==null?void 0:s.caipAddress},i))}async handleSwitchWallet(t,i,o){var r;try{this.isSwitching=!0,this.lastSelectedConnectorId=t.connectorId,this.lastSelectedAddress=i,((r=this.caipNetwork)==null?void 0:r.chainNamespace)!==o&&(t!=null&&t.caipNetwork)&&(V.setFilterByNamespace(o),await $.switchActiveNetwork(t==null?void 0:t.caipNetwork)),await G.switchConnection({connection:t,address:i,namespace:o,closeModalOnConnect:!1,onChange({hasSwitchedAccount:s,hasSwitchedWallet:a}){a?pe.showSuccess("Wallet switched"):s&&pe.showSuccess("Account switched")}})}catch{pe.showError("Failed to switch wallet")}finally{this.isSwitching=!1}}handleWalletAction(t){const{connection:i,address:o,isRecentConnection:r,namespace:n}=t;r?(ni.deleteAddressFromConnection({connectorId:i.connectorId,address:o,namespace:n}),G.syncStorageConnections(),pe.showSuccess("Wallet deleted")):this.handleDisconnect(n,i.connectorId)}async handleDisconnect(t,i){try{await G.disconnect({id:i,namespace:t}),pe.showSuccess("Wallet disconnected")}catch{pe.showError("Failed to disconnect wallet")}}handleCopyAddress(t){B.copyToClopboard(t),pe.showSuccess("Address copied")}handleMore(){_.push("AccountSettings")}handleExternalLink(t){var o,r;const i=(r=(o=this.caipNetwork)==null?void 0:o.blockExplorers)==null?void 0:r.default.url;i&&B.openHref(`${i}/address/${t}`,"_blank")}handleAddConnection(t){V.setFilterByNamespace(t),_.push("Connect",{addWalletForNamespace:t})}getChainLabelInfo(t){return x0[t]??{title:"Add Wallet",description:"Add your first wallet"}}isSmartAccount(t){var o,r;if(!this.namespace)return!1;const i=(r=(o=this.user)==null?void 0:o.accounts)==null?void 0:r.find(n=>n.type==="smartAccount");return i&&t?gt.isLowerCaseMatch(i.address,t):!1}getPlainAddress(){return this.caipAddress?B.getPlainAddress(this.caipAddress):void 0}getActiveConnections(t){const i=this.activeConnectorIds[t],{connections:o}=xi.getConnectionsData(t),[r]=o.filter(l=>gt.isLowerCaseMatch(l.connectorId,i));if(!i)return o;const n=t===ae.CHAIN.BITCOIN,{address:s}=this.caipAddress?hp.parseCaipAddress(this.caipAddress):{};let a=[...s?[s]:[]];return n&&r&&(a=r.accounts.map(l=>l.address)||[]),xi.excludeConnectorAddressFromConnections({connectorId:i,addresses:a,connections:o})}hasAnyConnections(t){const i=this.getActiveConnections(t),{recentConnections:o}=xi.getConnectionsData(t);return!!this.caipAddress||i.length>0||o.length>0}isAccountLoading(t,i){return gt.isLowerCaseMatch(this.lastSelectedConnectorId,t)&&gt.isLowerCaseMatch(this.lastSelectedAddress,i)&&this.isSwitching}getProfileContent(t){const{address:i,connections:o,connectorId:r,namespace:n}=t,[s]=o.filter(l=>gt.isLowerCaseMatch(l.connectorId,r));if(n===ae.CHAIN.BITCOIN&&(s!=null&&s.accounts.every(l=>typeof l.type=="string")))return this.getBitcoinProfileContent(s.accounts,i);const a=Ws.getAuthData({connectorId:r,accounts:[]});return[{address:i,tagLabel:"Active",tagVariant:"success",enableButton:!0,profileName:this.profileName,buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary",...a.isAuth?{description:this.isSmartAccount(i)?"Smart Account":"EOA Account"}:{}}]}getBitcoinProfileContent(t,i){const o=t.length>1,r=this.getPlainAddress();return t.map(n=>{const s=gt.isLowerCaseMatch(n.address,r);let a="PAYMENT";return n.type==="ordinal"&&(a="ORDINALS"),{address:n.address,tagLabel:gt.isLowerCaseMatch(n.address,i)?"Active":void 0,tagVariant:gt.isLowerCaseMatch(n.address,i)?"success":void 0,enableButton:!0,...o?{label:a,alignItems:"flex-end",buttonType:s?"disconnect":"switch",buttonLabel:s?"Disconnect":"Switch",buttonVariant:s?"neutral-secondary":"accent-secondary"}:{alignItems:"center",buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary"}}})}removeScrollListener(){var i;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(".wallet-list");t&&t.removeEventListener("scroll",()=>this.handleConnectListScroll())}handleConnectListScroll(){var i;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(".wallet-list");t&&this.updateScrollOpacity(t)}isMultiWalletEnabled(){var t;return!!((t=this.remoteFeatures)!=null&&t.multiWallet)}updateScrollOpacity(t){t.style.setProperty("--connect-scroll--top-opacity",Lr.interpolate([0,ht.SCROLL_THRESHOLD],ht.OPACITY_RANGE,t.scrollTop).toString()),t.style.setProperty("--connect-scroll--bottom-opacity",Lr.interpolate([0,ht.SCROLL_THRESHOLD],ht.OPACITY_RANGE,t.scrollHeight-t.scrollTop-t.offsetHeight).toString())}onConnectionsChange(){if(this.isMultiWalletEnabled()&&this.namespace){const{connections:t}=xi.getConnectionsData(this.namespace);t.length===0&&_.reset("ProfileWallets")}this.requestUpdate()}};Oe.styles=y0;at([x()],Oe.prototype,"currentTab",void 0);at([x()],Oe.prototype,"namespace",void 0);at([x()],Oe.prototype,"namespaces",void 0);at([x()],Oe.prototype,"caipAddress",void 0);at([x()],Oe.prototype,"profileName",void 0);at([x()],Oe.prototype,"activeConnectorIds",void 0);at([x()],Oe.prototype,"lastSelectedAddress",void 0);at([x()],Oe.prototype,"lastSelectedConnectorId",void 0);at([x()],Oe.prototype,"isSwitching",void 0);at([x()],Oe.prototype,"caipNetwork",void 0);at([x()],Oe.prototype,"user",void 0);at([x()],Oe.prototype,"remoteFeatures",void 0);Oe=at([E("w3m-profile-wallets-view")],Oe);var fo=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ti=class extends P{constructor(){super(),this.unsubscribe=[],this.activeCaipNetwork=$.state.activeCaipNetwork,this.features=I.state.features,this.remoteFeatures=I.state.remoteFeatures,this.exchangesLoading=ft.state.isLoading,this.exchanges=ft.state.exchanges,this.unsubscribe.push(I.subscribeKey("features",t=>this.features=t),I.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t),$.subscribeKey("activeCaipNetwork",t=>{this.activeCaipNetwork=t,this.setDefaultPaymentAsset()}),ft.subscribeKey("isLoading",t=>this.exchangesLoading=t),ft.subscribeKey("exchanges",t=>this.exchanges=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}async firstUpdated(){ft.isPayWithExchangeSupported()&&(await this.setDefaultPaymentAsset(),await ft.fetchExchanges())}render(){return u`
      <wui-flex flexDirection="column" .padding=${["1","3","3","3"]} gap="2">
        ${this.onrampTemplate()} ${this.receiveTemplate()} ${this.depositFromExchangeTemplate()}
      </wui-flex>
    `}async setDefaultPaymentAsset(){if(!this.activeCaipNetwork)return;const t=await ft.getAssetsForNetwork(this.activeCaipNetwork.caipNetworkId),i=t.find(o=>o.metadata.symbol==="USDC")||t[0];i&&ft.setPaymentAsset(i)}onrampTemplate(){var o;if(!this.activeCaipNetwork)return null;const t=(o=this.remoteFeatures)==null?void 0:o.onramp,i=Le.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.activeCaipNetwork.chainNamespace);return!t||!i?null:u`
      <wui-list-item
        @click=${this.onBuyCrypto.bind(this)}
        icon="card"
        data-testid="wallet-features-onramp-button"
      >
        <wui-text variant="lg-regular" color="primary">Buy crypto</wui-text>
      </wui-list-item>
    `}depositFromExchangeTemplate(){return!this.activeCaipNetwork||!ft.isPayWithExchangeSupported()?null:u`
      <wui-list-item
        @click=${this.onDepositFromExchange.bind(this)}
        icon="arrowBottomCircle"
        data-testid="wallet-features-deposit-from-exchange-button"
        ?loading=${this.exchangesLoading}
        ?disabled=${this.exchangesLoading||!this.exchanges.length}
      >
        <wui-text variant="lg-regular" color="primary">Deposit from exchange</wui-text>
      </wui-list-item>
    `}receiveTemplate(){var i;return!((i=this.features)!=null&&i.receive)?null:u`
      <wui-list-item
        @click=${this.onReceive.bind(this)}
        icon="qrCode"
        data-testid="wallet-features-receive-button"
      >
        <wui-text variant="lg-regular" color="primary">Receive funds</wui-text>
      </wui-list-item>
    `}onBuyCrypto(){_.push("OnRampProviders")}onReceive(){_.push("WalletReceive")}onDepositFromExchange(){var t;ft.reset(),_.push("PayWithExchange",{redirectView:(t=_.state.data)==null?void 0:t.redirectView})}};fo([x()],Ti.prototype,"activeCaipNetwork",void 0);fo([x()],Ti.prototype,"features",void 0);fo([x()],Ti.prototype,"remoteFeatures",void 0);fo([x()],Ti.prototype,"exchangesLoading",void 0);fo([x()],Ti.prototype,"exchanges",void 0);Ti=fo([E("w3m-fund-wallet-view")],Ti);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C0=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $o=(e,t)=>{var o;const i=e._$AN;if(i===void 0)return!1;for(const r of i)(o=r._$AO)==null||o.call(r,t,!1),$o(r,t);return!0},Ur=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},Id=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),S0(t)}};function $0(e){this._$AN!==void 0?(Ur(this),this._$AM=e,Id(this)):this._$AM=e}function k0(e,t=!1,i=0){const o=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(o))for(let n=i;n<o.length;n++)$o(o[n],!1),Ur(o[n]);else o!=null&&($o(o,!1),Ur(o));else $o(this,e)}const S0=e=>{e.type==Ed.CHILD&&(e._$AP??(e._$AP=k0),e._$AQ??(e._$AQ=$0))};class A0 extends Pd{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,o){super._$AT(t,i,o),Id(this),this.isConnected=t._$AU}_$AO(t,i=!0){var o,r;t!==this.isConnected&&(this.isConnected=t,t?(o=this.reconnected)==null||o.call(this):(r=this.disconnected)==null||r.call(this)),i&&($o(this,t),Ur(this))}setValue(t){if(C0(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const or=()=>new E0;class E0{}const Vs=new WeakMap,rr=_d(class extends A0{render(e){return da}update(e,[t]){var o;const i=t!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=(o=e.options)==null?void 0:o.host,this.rt(this.ct=e.element)),da}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let i=Vs.get(t);i===void 0&&(i=new WeakMap,Vs.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,t;return typeof this.G=="function"?(e=Vs.get(this.ht??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),_0=D`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`;var ms=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Yn=class extends P{constructor(){super(...arguments),this.inputElementRef=or(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return u`
      <label data-size=${this.size}>
        <input
          ${rr(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var t;this.dispatchEvent(new CustomEvent("switchChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.checked,bubbles:!0,composed:!0}))}};Yn.styles=[z,de,_0];ms([m({type:Boolean})],Yn.prototype,"checked",void 0);ms([m({type:Boolean})],Yn.prototype,"disabled",void 0);ms([m()],Yn.prototype,"size",void 0);Yn=ms([E("wui-toggle")],Yn);const P0=D`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var Dd=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Hr=class extends P{constructor(){super(...arguments),this.checked=!1}render(){return u`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(t){t.stopPropagation(),this.checked=t.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};Hr.styles=[z,de,P0];Dd([m({type:Boolean})],Hr.prototype,"checked",void 0);Hr=Dd([E("wui-certified-switch")],Hr);const T0=D`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[3]} ${({spacing:e})=>e[10]};
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[4]} ${({spacing:e})=>e[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:e})=>e[2]};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:e})=>e[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var kt=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Xe=class extends P{constructor(){super(...arguments),this.inputElementRef=or(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return u` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${rr(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${j(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?u`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){var t;return this.onSubmit?u`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${(t=this.onSubmit)==null?void 0:t.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?u`<wui-icon name="spinner" size="md"></wui-icon>`:u`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?u`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?u`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){var t;this.dispatchEvent(new CustomEvent("inputChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.value,bubbles:!0,composed:!0}))}};Xe.styles=[z,de,T0];kt([m()],Xe.prototype,"icon",void 0);kt([m({type:Boolean})],Xe.prototype,"disabled",void 0);kt([m({type:Boolean})],Xe.prototype,"loading",void 0);kt([m()],Xe.prototype,"placeholder",void 0);kt([m()],Xe.prototype,"type",void 0);kt([m()],Xe.prototype,"value",void 0);kt([m()],Xe.prototype,"errorText",void 0);kt([m()],Xe.prototype,"warningText",void 0);kt([m()],Xe.prototype,"onSubmit",void 0);kt([m()],Xe.prototype,"size",void 0);kt([m({attribute:!1})],Xe.prototype,"onKeyDown",void 0);Xe=kt([E("wui-input-text")],Xe);const N0=D`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`;var Ld=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Gr=class extends P{constructor(){super(...arguments),this.inputComponentRef=or(),this.inputValue=""}render(){return u`
      <wui-input-text
        ${rr(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?u`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(t){this.inputValue=t.detail||""}clearValue(){const t=this.inputComponentRef.value,i=t==null?void 0:t.inputElementRef.value;i&&(i.value="",this.inputValue="",i.focus(),i.dispatchEvent(new Event("input")))}};Gr.styles=[z,N0];Ld([m()],Gr.prototype,"inputValue",void 0);Gr=Ld([E("wui-search-bar")],Gr);const Bd=H`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,R0=D`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var Md=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Zr=class extends P{constructor(){super(...arguments),this.type="wallet"}render(){return u`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?u` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${Bd}`:u`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};Zr.styles=[z,de,R0];Md([m()],Zr.prototype,"type",void 0);Zr=Md([E("wui-card-select-loader")],Zr);const j0=Ee`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var St=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Qe=class extends P{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&be.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&be.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&be.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&be.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&be.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&be.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&be.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&be.getSpacingStyles(this.margin,3)};
    `,u`<slot></slot>`}};Qe.styles=[z,j0];St([m()],Qe.prototype,"gridTemplateRows",void 0);St([m()],Qe.prototype,"gridTemplateColumns",void 0);St([m()],Qe.prototype,"justifyItems",void 0);St([m()],Qe.prototype,"alignItems",void 0);St([m()],Qe.prototype,"justifyContent",void 0);St([m()],Qe.prototype,"alignContent",void 0);St([m()],Qe.prototype,"columnGap",void 0);St([m()],Qe.prototype,"rowGap",void 0);St([m()],Qe.prototype,"gap",void 0);St([m()],Qe.prototype,"padding",void 0);St([m()],Qe.prototype,"margin",void 0);Qe=St([E("wui-grid")],Qe);const I0=D`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[0]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:e})=>e[4]}, 20px);
    transition:
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:e})=>e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:e})=>e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:e})=>e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:e})=>e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var qt=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let xt=class extends P{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var i,o;const t=((i=this.wallet)==null?void 0:i.badge_type)==="certified";return u`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${j(t?"certified":void 0)}
            >${(o=this.wallet)==null?void 0:o.name}</wui-text
          >
          ${t?u`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var t,i;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():u`
      <wui-wallet-image
        size="lg"
        imageSrc=${j(this.imageSrc)}
        name=${j((t=this.wallet)==null?void 0:t.name)}
        .installed=${((i=this.wallet)==null?void 0:i.installed)??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return u`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=me.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await me.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){!this.wallet||this.isImpressed||(this.isImpressed=!0,Y.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:_.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};xt.styles=I0;qt([x()],xt.prototype,"visible",void 0);qt([x()],xt.prototype,"imageSrc",void 0);qt([x()],xt.prototype,"imageLoading",void 0);qt([x()],xt.prototype,"isImpressed",void 0);qt([m()],xt.prototype,"explorerId",void 0);qt([m()],xt.prototype,"walletQuery",void 0);qt([m()],xt.prototype,"certified",void 0);qt([m()],xt.prototype,"displayIndex",void 0);qt([m({type:Object})],xt.prototype,"wallet",void 0);xt=qt([E("w3m-all-wallets-list-item")],xt);const D0=D`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:e})=>e[4]};
    padding-bottom: ${({spacing:e})=>e[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var Mi=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const ec="local-paginator";let Vt=class extends P{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!te.state.wallets.length,this.wallets=te.state.wallets,this.recommended=te.state.recommended,this.featured=te.state.featured,this.filteredWallets=te.state.filteredWallets,this.mobileFullScreen=I.state.enableMobileFullScreen,this.unsubscribe.push(te.subscribeKey("wallets",t=>this.wallets=t),te.subscribeKey("recommended",t=>this.recommended=t),te.subscribeKey("featured",t=>this.featured=t),te.subscribeKey("filteredWallets",t=>this.filteredWallets=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var t;this.unsubscribe.forEach(i=>i()),(t=this.paginationObserver)==null||t.disconnect()}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),u`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var i;this.loading=!0;const t=(i=this.shadowRoot)==null?void 0:i.querySelector("wui-grid");t&&(await te.fetchWalletsByPage({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,i){return[...Array(t)].map(()=>u`
        <wui-card-select-loader type="wallet" id=${j(i)}></wui-card-select-loader>
      `)}getWallets(){var n;const t=[...this.featured,...this.recommended];((n=this.filteredWallets)==null?void 0:n.length)>0?t.push(...this.filteredWallets):t.push(...this.wallets);const i=B.uniqueBy(t,"id"),o=Ji.markWalletsAsInstalled(i),r=Ji.filterWalletsByWcSupport(o);return Ji.markWalletsWithDisplayIndex(r)}walletsTemplate(){return this.getWallets().map((i,o)=>u`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${i.id}"
          @click=${()=>this.onConnectWallet(i)}
          .wallet=${i}
          explorerId=${i.id}
          certified=${this.badge==="certified"}
          displayIndex=${o}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:i,featured:o,count:r,mobileFilteredOutWalletsLength:n}=te.state,s=window.innerWidth<352?3:4,a=t.length+i.length;let c=Math.ceil(a/s)*s-a+s;return c-=t.length?o.length%s:0,r===0&&o.length>0?null:r===0||[...o,...t,...i].length<r-(n??0)?this.shimmerTemplate(c,ec):null}createPaginationObserver(){var i;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(`#${ec}`);t&&(this.paginationObserver=new IntersectionObserver(([o])=>{if(o!=null&&o.isIntersecting&&!this.loading){const{page:r,count:n,wallets:s}=te.state;s.length<n&&te.fetchWalletsByPage({page:r+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){V.selectWalletConnector(t)}};Vt.styles=D0;Mi([x()],Vt.prototype,"loading",void 0);Mi([x()],Vt.prototype,"wallets",void 0);Mi([x()],Vt.prototype,"recommended",void 0);Mi([x()],Vt.prototype,"featured",void 0);Mi([x()],Vt.prototype,"filteredWallets",void 0);Mi([x()],Vt.prototype,"badge",void 0);Mi([x()],Vt.prototype,"mobileFullScreen",void 0);Vt=Mi([E("w3m-all-wallets-list")],Vt);const L0=Ee`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var sr=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let gn=class extends P{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=I.state.enableMobileFullScreen,this.query=""}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.onSearch(),this.loading?u`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await te.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:t}=te.state,i=Ji.markWalletsAsInstalled(t),o=Ji.filterWalletsByWcSupport(i);return o.length?u`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${o.map((r,n)=>u`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(r)}
              .wallet=${r}
              data-testid="wallet-search-item-${r.id}"
              explorerId=${r.id}
              certified=${this.badge==="certified"}
              walletQuery=${this.query}
              displayIndex=${n}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:u`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(t){V.selectWalletConnector(t)}};gn.styles=L0;sr([x()],gn.prototype,"loading",void 0);sr([x()],gn.prototype,"mobileFullScreen",void 0);sr([m()],gn.prototype,"query",void 0);sr([m()],gn.prototype,"badge",void 0);gn=sr([E("w3m-all-wallets-search")],gn);var sl=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let jo=class extends P{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=B.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return u`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge==="certified"}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t||this.badge?u`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:u`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onCertifiedSwitchChange(t){t.detail?(this.badge="certified",pe.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return B.isMobile()?u`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){_.push("ConnectingWalletConnect")}};sl([x()],jo.prototype,"search",void 0);sl([x()],jo.prototype,"badge",void 0);jo=sl([E("w3m-all-wallets-view")],jo);const B0=D`
  button {
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[4]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    justify-content: center;
    align-items: center;
  }

  :host([data-size='sm']) button {
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) button {
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:hover {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:disabled {
    opacity: 0.5;
  }
`;var mo=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ni=class extends P{constructor(){super(...arguments),this.text="",this.disabled=!1,this.size="lg",this.icon="copy",this.tabIdx=void 0}render(){this.dataset.size=this.size;const t=`${this.size}-regular`;return u`
      <button ?disabled=${this.disabled} tabindex=${j(this.tabIdx)}>
        <wui-icon name=${this.icon} size=${this.size} color="default"></wui-icon>
        <wui-text align="center" variant=${t} color="primary">${this.text}</wui-text>
      </button>
    `}};Ni.styles=[z,de,B0];mo([m()],Ni.prototype,"text",void 0);mo([m({type:Boolean})],Ni.prototype,"disabled",void 0);mo([m()],Ni.prototype,"size",void 0);mo([m()],Ni.prototype,"icon",void 0);mo([m()],Ni.prototype,"tabIdx",void 0);Ni=mo([E("wui-list-button")],Ni);const M0=Ee`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var ar=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let wn=class extends P{constructor(){super(...arguments),this.disabled=!1}render(){return u`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${j(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?u`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};wn.styles=[z,M0];ar([m()],wn.prototype,"errorMessage",void 0);ar([m({type:Boolean})],wn.prototype,"disabled",void 0);ar([m()],wn.prototype,"value",void 0);ar([m()],wn.prototype,"tabIdx",void 0);wn=ar([E("wui-email-input")],wn);const O0=D`
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: ${({spacing:e})=>e[2]};
  }

  wui-loading-spinner {
    right: ${({spacing:e})=>e[3]};
  }

  wui-text {
    margin: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[0]} ${({spacing:e})=>e[3]};
  }
`;var Pn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let di=class extends P{constructor(){super(),this.unsubscribe=[],this.formRef=or(),this.email="",this.loading=!1,this.error="",this.remoteFeatures=I.state.remoteFeatures,this.hasExceededUsageLimit=te.state.plan.hasExceededUsageLimit,this.unsubscribe.push(I.subscribeKey("remoteFeatures",t=>{this.remoteFeatures=t}),te.subscribeKey("plan",t=>this.hasExceededUsageLimit=t.hasExceededUsageLimit))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}firstUpdated(){var t;(t=this.formRef.value)==null||t.addEventListener("keydown",i=>{i.key==="Enter"&&this.onSubmitEmail(i)})}render(){const t=G.hasAnyConnection(ae.CONNECTOR_ID.AUTH);return u`
      <form ${rr(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${j(this.tabIdx)}
          ?disabled=${t||this.hasExceededUsageLimit}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?u`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?u`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:null}templateError(){return this.error?u`<wui-text variant="sm-medium" color="error">${this.error}</wui-text>`:null}onEmailInputChange(t){this.email=t.detail.trim(),this.error=""}async onSubmitEmail(t){var o;if(!Hn.isValidEmail(this.email)){kd.open({displayMessage:pp.ALERT_WARNINGS.INVALID_EMAIL.displayMessage},"warning");return}if(!ae.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(r=>r===$.state.activeChain)){const r=$.getFirstCaipNetworkSupportsAuthConnector();if(r){_.push("SwitchNetwork",{network:r});return}}try{if(this.loading)return;this.loading=!0,t.preventDefault();const r=V.getAuthConnector();if(!r)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:n}=await r.provider.connectEmail({email:this.email});if(Y.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),n==="VERIFY_OTP")Y.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),_.push("EmailVerifyOtp",{email:this.email});else if(n==="VERIFY_DEVICE")_.push("EmailVerifyDevice",{email:this.email});else if(n==="CONNECT"){const s=(o=this.remoteFeatures)==null?void 0:o.multiWallet;await G.connectExternal(r,$.state.activeChain),s?(_.replace("ProfileWallets"),pe.showSuccess("New Wallet Added")):_.replace("Account")}}catch(r){const n=B.parseError(r);n!=null&&n.includes("Invalid email")?this.error="Invalid email. Try again.":pe.showError(r)}finally{this.loading=!1}}onFocusEvent(){Y.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};di.styles=O0;Pn([m()],di.prototype,"tabIdx",void 0);Pn([x()],di.prototype,"email",void 0);Pn([x()],di.prototype,"loading",void 0);Pn([x()],di.prototype,"error",void 0);Pn([x()],di.prototype,"remoteFeatures",void 0);Pn([x()],di.prototype,"hasExceededUsageLimit",void 0);di=Pn([E("w3m-email-login-widget")],di);const W0=D`
  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    column-gap: ${({spacing:e})=>e[2]};
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    position: absolute;
  }

  label > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border: 1px solid ${({colors:e})=>e.neutrals400};
    color: ${({colors:e})=>e.white};
    background-color: transparent;
    will-change: border-color, background-color;
  }

  label > span > wui-icon {
    opacity: 0;
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    color: ${({colors:e})=>e.white};
  }

  label > input[type='checkbox']:not(:checked) > span > wui-icon {
    color: ${({colors:e})=>e.neutrals900};
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    opacity: 1;
  }

  /* -- Sizes --------------------------------------------------- */
  label[data-size='lg'] > span {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    border-radius: ${({borderRadius:e})=>e[10]};
  }

  label[data-size='md'] > span {
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  label[data-size='sm'] > span {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  /* -- Focus states --------------------------------------------------- */
  label > input[type='checkbox']:focus-visible + span,
  label > input[type='checkbox']:focus + span {
    border: 1px solid ${({tokens:e})=>e.core.borderAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  label > input[type='checkbox']:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
    border: 1px solid transparent;
  }

  /* -- Hover states --------------------------------------------------- */
  input[type='checkbox']:not(:checked):not(:disabled) + span:hover {
    border: 1px solid ${({colors:e})=>e.neutrals700};
    background-color: ${({colors:e})=>e.neutrals800};
    box-shadow: none;
  }

  input[type='checkbox']:checked:not(:disabled) + span:hover {
    border: 1px solid transparent;
    background-color: ${({colors:e})=>e.accent080};
    box-shadow: none;
  }

  /* -- Disabled state --------------------------------------------------- */
  label > input[type='checkbox']:checked:disabled + span {
    border: 1px solid transparent;
    opacity: 0.3;
  }

  label > input[type='checkbox']:not(:checked):disabled + span {
    border: 1px solid ${({colors:e})=>e.neutrals700};
  }

  label:has(input[type='checkbox']:disabled) {
    cursor: auto;
  }

  label > input[type='checkbox']:disabled + span {
    cursor: not-allowed;
  }
`;var gs=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const V0={lg:"md",md:"sm",sm:"sm"};let Xn=class extends P{constructor(){super(...arguments),this.inputElementRef=or(),this.checked=void 0,this.disabled=!1,this.size="md"}render(){const t=V0[this.size];return u`
      <label data-size=${this.size}>
        <input
          ${rr(this.inputElementRef)}
          ?checked=${j(this.checked)}
          ?disabled=${this.disabled}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" size=${t}></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){var t;this.dispatchEvent(new CustomEvent("checkboxChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.checked,bubbles:!0,composed:!0}))}};Xn.styles=[z,W0];gs([m({type:Boolean})],Xn.prototype,"checked",void 0);gs([m({type:Boolean})],Xn.prototype,"disabled",void 0);gs([m()],Xn.prototype,"size",void 0);Xn=gs([E("wui-checkbox")],Xn);const F0=D`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: ${({spacing:e})=>e[3]};
  }
  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.theme.textSecondary};
    font-weight: 500;
  }
`;var Od=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Kr=class extends P{constructor(){super(),this.unsubscribe=[],this.checked=en.state.isLegalCheckboxChecked,this.unsubscribe.push(en.subscribeKey("isLegalCheckboxChecked",t=>{this.checked=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var r;const{termsConditionsUrl:t,privacyPolicyUrl:i}=I.state,o=(r=I.state.features)==null?void 0:r.legalCheckbox;return!t&&!i||!o?null:u`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="secondary" variant="sm-regular" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:i}=I.state;return t&&i?"and":""}termsTemplate(){const{termsConditionsUrl:t}=I.state;return t?u`<a rel="noreferrer" target="_blank" href=${t}>terms of service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:t}=I.state;return t?u`<a rel="noreferrer" target="_blank" href=${t}>privacy policy</a>`:null}onCheckboxChange(){en.setIsLegalCheckboxChecked(!this.checked)}};Kr.styles=[F0];Od([x()],Kr.prototype,"checked",void 0);Kr=Od([E("w3m-legal-checkbox")],Kr);const z0=D`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[20]};
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var Wd=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let qr=class extends P{constructor(){super(...arguments),this.logo="google"}render(){return u`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};qr.styles=[z,z0];Wd([m()],qr.prototype,"logo",void 0);qr=Wd([E("wui-logo")],qr);const U0=D`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var lr=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let bn=class extends P{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.disabled=!1}render(){return u`
      <button ?disabled=${this.disabled} tabindex=${j(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          <wui-image ?boxed=${!0} logo=${this.logo}></wui-image>
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}};bn.styles=[z,de,U0];lr([m()],bn.prototype,"logo",void 0);lr([m()],bn.prototype,"name",void 0);lr([m()],bn.prototype,"tabIdx",void 0);lr([m({type:Boolean})],bn.prototype,"disabled",void 0);bn=lr([E("wui-list-social")],bn);const H0=D`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;var ws=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Qn=class extends P{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return u`
      <button ?disabled=${this.disabled} tabindex=${j(this.tabIdx)}>
        <wui-icon size="xxl" name=${this.logo}></wui-icon>
      </button>
    `}};Qn.styles=[z,de,H0];ws([m()],Qn.prototype,"logo",void 0);ws([m({type:Boolean})],Qn.prototype,"disabled",void 0);ws([m()],Qn.prototype,"tabIdx",void 0);Qn=ws([E("wui-logo-select")],Qn);const G0=D`
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var Oi=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const tc=2,ic=6;let Ft=class extends P{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=V.state.connectors,this.remoteFeatures=I.state.remoteFeatures,this.authConnector=this.connectors.find(t=>t.type==="AUTH"),this.isPwaLoading=!1,this.hasExceededUsageLimit=te.state.plan.hasExceededUsageLimit,this.unsubscribe.push(V.subscribeKey("connectors",t=>{this.connectors=t,this.authConnector=this.connectors.find(i=>i.type==="AUTH")}),I.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t),te.subscribeKey("plan",t=>this.hasExceededUsageLimit=t.hasExceededUsageLimit))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="2"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){var o;const t=this.walletGuide==="explore";let i=(o=this.remoteFeatures)==null?void 0:o.socials;return!i&&t?(i=Le.DEFAULT_SOCIALS,this.renderTopViewContent(i)):i?this.renderTopViewContent(i):null}renderTopViewContent(t){return t.length===2?u` <wui-flex gap="2">
        ${t.slice(0,tc).map(i=>u`<wui-logo-select
              data-testid=${`social-selector-${i}`}
              @click=${()=>{this.onSocialClick(i)}}
              logo=${i}
              tabIdx=${j(this.tabIdx)}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
      </wui-flex>`:u` <wui-list-button
      data-testid=${`social-selector-${t[0]}`}
      @click=${()=>{this.onSocialClick(t[0])}}
      size="lg"
      icon=${j(t[0])}
      text=${`Continue with ${be.capitalize(t[0])}`}
      tabIdx=${j(this.tabIdx)}
      ?disabled=${this.isPwaLoading||this.hasConnection()}
    ></wui-list-button>`}bottomViewTemplate(){var r;let t=(r=this.remoteFeatures)==null?void 0:r.socials;const i=this.walletGuide==="explore";return(!this.authConnector||!t||t.length===0)&&i&&(t=Le.DEFAULT_SOCIALS),!t||t.length<=tc?null:t&&t.length>ic?u`<wui-flex gap="2">
        ${t.slice(1,ic-1).map(n=>u`<wui-logo-select
              data-testid=${`social-selector-${n}`}
              @click=${()=>{this.onSocialClick(n)}}
              logo=${n}
              tabIdx=${j(this.tabIdx)}
              ?focusable=${this.tabIdx!==void 0&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${j(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading||this.hasConnection()}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`:t?u`<wui-flex gap="2">
      ${t.slice(1,t.length).map(n=>u`<wui-logo-select
            data-testid=${`social-selector-${n}`}
            @click=${()=>{this.onSocialClick(n)}}
            logo=${n}
            tabIdx=${j(this.tabIdx)}
            ?focusable=${this.tabIdx!==void 0&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading||this.hasConnection()}
          ></wui-logo-select>`)}
    </wui-flex>`:null}onMoreSocialsClick(){_.push("ConnectSocials")}async onSocialClick(t){if(this.hasExceededUsageLimit){_.push("UsageExceeded");return}if(!ae.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(o=>o===$.state.activeChain)){const o=$.getFirstCaipNetworkSupportsAuthConnector();if(o){_.push("SwitchNetwork",{network:o});return}}t&&await Rp(t)}async handlePwaFrameLoad(){var t;if(B.isPWA()){this.isPwaLoading=!0;try{((t=this.authConnector)==null?void 0:t.provider)instanceof fp&&await this.authConnector.provider.init()}catch(i){kd.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:i.message},"error")}finally{this.isPwaLoading=!1}}}hasConnection(){return G.hasAnyConnection(ae.CONNECTOR_ID.AUTH)}};Ft.styles=G0;Oi([m()],Ft.prototype,"walletGuide",void 0);Oi([m()],Ft.prototype,"tabIdx",void 0);Oi([x()],Ft.prototype,"connectors",void 0);Oi([x()],Ft.prototype,"remoteFeatures",void 0);Oi([x()],Ft.prototype,"authConnector",void 0);Oi([x()],Ft.prototype,"isPwaLoading",void 0);Oi([x()],Ft.prototype,"hasExceededUsageLimit",void 0);Ft=Oi([E("w3m-social-login-widget")],Ft);const Z0=D`
  :host {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: 2px;
  }
`;var Vd=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Fs=4;let Yr=class extends P{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<Fs;return u`${this.walletImages.slice(0,Fs).map(({src:i,walletName:o})=>u`
          <wui-wallet-image
            size="sm"
            imageSrc=${i}
            name=${j(o)}
          ></wui-wallet-image>
        `)}
    ${t?[...Array(Fs-this.walletImages.length)].map(()=>u` <wui-wallet-image size="sm" name=""></wui-wallet-image>`):null} `}};Yr.styles=[z,Z0];Vd([m({type:Array})],Yr.prototype,"walletImages",void 0);Yr=Vd([E("wui-all-wallets-image")],Yr);const K0=D`
  :host {
    width: 100%;
  }

  button {
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button > wui-wallet-image {
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: ${({tokens:e})=>e.core.glass010};
    color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  wui-flex.namespace-icon {
    width: 16px;
    height: 16px;
    border-radius: ${({borderRadius:e})=>e.round};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.backgroundPrimary};
    transition: box-shadow var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2);
  }

  button:hover:enabled wui-flex.namespace-icon {
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-flex.namespace-icon > wui-icon {
    width: 10px;
    height: 10px;
  }

  wui-flex.namespace-icon:not(:first-child) {
    margin-left: -4px;
  }
`;var it=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const q0={eip155:"ethereum",solana:"solana",bip122:"bitcoin",polkadot:void 0,cosmos:void 0,sui:void 0,stacks:void 0,ton:"ton"};let We=class extends P{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.namespaces=[],this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return this.dataset.size=this.size,u`
      <button
        ?disabled=${this.disabled}
        data-all-wallets=${this.showAllWallets}
        tabindex=${j(this.tabIdx)}
      >
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-flex flexDirection="column" justifyContent="center" alignItems="flex-start" gap="1">
          <wui-text variant="lg-regular" color="inherit">${this.name}</wui-text>
          ${this.templateNamespaces()}
        </wui-flex>
        ${this.templateStatus()}
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}templateNamespaces(){var t;return(t=this.namespaces)!=null&&t.length?u`<wui-flex alignItems="center" gap="0">
        ${this.namespaces.map((i,o)=>{var r;return u`<wui-flex
              alignItems="center"
              justifyContent="center"
              zIndex=${(((r=this.namespaces)==null?void 0:r.length)??0)*2-o}
              class="namespace-icon"
            >
              <wui-icon
                name=${j(q0[i])}
                size="sm"
                color="default"
              ></wui-icon>
            </wui-flex>`})}
      </wui-flex>`:null}templateAllWallets(){return this.showAllWallets&&this.imageSrc?u` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?u` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?u`<wui-wallet-image
        size=${j(this.size==="sm"?"sm":"md")}
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?u`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?u`<wui-loading-spinner size="lg" color="accent-primary"></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?u`<wui-tag size="sm" variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:null}};We.styles=[z,de,K0];it([m({type:Array})],We.prototype,"walletImages",void 0);it([m()],We.prototype,"imageSrc",void 0);it([m()],We.prototype,"name",void 0);it([m()],We.prototype,"size",void 0);it([m()],We.prototype,"tagLabel",void 0);it([m()],We.prototype,"tagVariant",void 0);it([m()],We.prototype,"walletIcon",void 0);it([m()],We.prototype,"tabIdx",void 0);it([m({type:Array})],We.prototype,"namespaces",void 0);it([m({type:Boolean})],We.prototype,"disabled",void 0);it([m({type:Boolean})],We.prototype,"showAllWallets",void 0);it([m({type:Boolean})],We.prototype,"loading",void 0);it([m({type:String})],We.prototype,"loadingSpinnerColor",void 0);We=it([E("wui-list-wallet")],We);var go=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let yn=class extends P{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.state.connectors,this.count=te.state.count,this.filteredCount=te.state.filteredWallets.length,this.isFetchingRecommendedWallets=te.state.isFetchingRecommendedWallets,this.unsubscribe.push(V.subscribeKey("connectors",t=>this.connectors=t),te.subscribeKey("count",t=>this.count=t),te.subscribeKey("filteredWallets",t=>this.filteredCount=t.length),te.subscribeKey("isFetchingRecommendedWallets",t=>this.isFetchingRecommendedWallets=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.find(c=>c.id==="walletConnect"),{allWallets:i}=I.state;if(!t||i==="HIDE"||i==="ONLY_MOBILE"&&!B.isMobile())return null;const o=te.state.featured.length,r=this.count+o,n=r<10?r:Math.floor(r/10)*10,s=this.filteredCount>0?this.filteredCount:n;let a=`${s}`;this.filteredCount>0?a=`${this.filteredCount}`:s<r&&(a=`${s}+`);const l=G.hasAnyConnection(ae.CONNECTOR_ID.WALLET_CONNECT);return u`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${j(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${l}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){var t;Y.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),_.push("AllWallets",{redirectView:(t=_.state.data)==null?void 0:t.redirectView})}};go([m()],yn.prototype,"tabIdx",void 0);go([x()],yn.prototype,"connectors",void 0);go([x()],yn.prototype,"count",void 0);go([x()],yn.prototype,"filteredCount",void 0);go([x()],yn.prototype,"isFetchingRecommendedWallets",void 0);yn=go([E("w3m-all-wallets-widget")],yn);const Y0=D`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var fi=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Rt=class extends P{constructor(){super(),this.unsubscribe=[],this.connectors=V.state.connectors,this.recommended=te.state.recommended,this.featured=te.state.featured,this.explorerWallets=te.state.explorerWallets,this.connections=G.state.connections,this.connectorImages=nn.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(V.subscribeKey("connectors",t=>this.connectors=t),G.subscribeKey("connections",t=>this.connections=t),nn.subscribeKey("connectorImages",t=>this.connectorImages=t),te.subscribeKey("recommended",t=>this.recommended=t),te.subscribeKey("featured",t=>this.featured=t),te.subscribeKey("explorerFilteredWallets",t=>{this.explorerWallets=t!=null&&t.length?t:te.state.explorerWallets}),te.subscribeKey("explorerWallets",t=>{var i;(i=this.explorerWallets)!=null&&i.length||(this.explorerWallets=t)})),B.isTelegram()&&B.isIos()&&(this.loadingTelegram=!G.state.wcUri,this.unsubscribe.push(G.subscribeKey("wcUri",t=>this.loadingTelegram=!t)))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}processConnectorsByType(t,i=!0){const o=Jt.sortConnectorsByExplorerWallet([...t]);return i?o.filter(Jt.showConnector):o}connectorListTemplate(){const t=Jt.getConnectorsByType(this.connectors,this.recommended,this.featured),i=this.processConnectorsByType(t.announced.filter(b=>b.id!=="walletConnect")),o=this.processConnectorsByType(t.injected),r=this.processConnectorsByType(t.multiChain.filter(b=>b.name!=="WalletConnect"),!1),n=t.custom,s=t.recent,a=this.processConnectorsByType(t.external.filter(b=>b.id!==ae.CONNECTOR_ID.COINBASE_SDK&&b.id!==ae.CONNECTOR_ID.BASE_ACCOUNT)),l=t.recommended,c=t.featured,h=Jt.getConnectorTypeOrder({custom:n,recent:s,announced:i,injected:o,multiChain:r,recommended:l,featured:c,external:a}),f=this.connectors.find(b=>b.id==="walletConnect"),g=B.isMobile(),p=[];for(const b of h)switch(b){case"walletConnect":{!g&&f&&p.push({kind:"connector",subtype:"walletConnect",connector:f});break}case"recent":{Jt.getFilteredRecentWallets().forEach(C=>p.push({kind:"wallet",subtype:"recent",wallet:C}));break}case"injected":{r.forEach(w=>p.push({kind:"connector",subtype:"multiChain",connector:w})),i.forEach(w=>p.push({kind:"connector",subtype:"announced",connector:w})),o.forEach(w=>p.push({kind:"connector",subtype:"injected",connector:w}));break}case"featured":{c.forEach(w=>p.push({kind:"wallet",subtype:"featured",wallet:w}));break}case"custom":{Jt.getFilteredCustomWallets(n??[]).forEach(C=>p.push({kind:"wallet",subtype:"custom",wallet:C}));break}case"external":{a.forEach(w=>p.push({kind:"connector",subtype:"external",connector:w}));break}case"recommended":{Jt.getCappedRecommendedWallets(l).forEach(C=>p.push({kind:"wallet",subtype:"recommended",wallet:C}));break}default:console.warn(`Unknown connector type: ${b}`)}return p.map((b,w)=>b.kind==="connector"?this.renderConnector(b,w):this.renderWallet(b,w))}getConnectorNamespaces(t){var i;return t.subtype==="walletConnect"?[]:t.subtype==="multiChain"?((i=t.connector.connectors)==null?void 0:i.map(o=>o.chain))||[]:[t.connector.chain]}renderConnector(t,i){var f,g;const o=t.connector,r=me.getConnectorImage(o)||this.connectorImages[(o==null?void 0:o.imageId)??""],s=(this.connections.get(o.chain)??[]).some(p=>gt.isLowerCaseMatch(p.connectorId,o.id));let a,l;t.subtype==="walletConnect"?(a="qr code",l="accent"):t.subtype==="injected"||t.subtype==="announced"?(a=s?"connected":"installed",l=s?"info":"success"):(a=void 0,l=void 0);const c=G.hasAnyConnection(ae.CONNECTOR_ID.WALLET_CONNECT),h=t.subtype==="walletConnect"||t.subtype==="external"?c:!1;return u`
      <w3m-list-wallet
        displayIndex=${i}
        imageSrc=${j(r)}
        .installed=${!0}
        name=${o.name??"Unknown"}
        .tagVariant=${l}
        tagLabel=${j(a)}
        data-testid=${`wallet-selector-${o.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(t)}
        tabIdx=${j(this.tabIdx)}
        ?disabled=${h}
        rdnsId=${j(((f=o.explorerWallet)==null?void 0:f.rdns)||void 0)}
        walletRank=${j((g=o.explorerWallet)==null?void 0:g.order)}
        .namespaces=${this.getConnectorNamespaces(t)}
      >
      </w3m-list-wallet>
    `}onClickConnector(t){var o;const i=(o=_.state.data)==null?void 0:o.redirectView;if(t.subtype==="walletConnect"){V.setActiveConnector(t.connector),B.isMobile()?_.push("AllWallets"):_.push("ConnectingWalletConnect",{redirectView:i});return}if(t.subtype==="multiChain"){V.setActiveConnector(t.connector),_.push("ConnectingMultiChain",{redirectView:i});return}if(t.subtype==="injected"){V.setActiveConnector(t.connector),_.push("ConnectingExternal",{connector:t.connector,redirectView:i,wallet:t.connector.explorerWallet});return}if(t.subtype==="announced"){if(t.connector.id==="walletConnect"){B.isMobile()?_.push("AllWallets"):_.push("ConnectingWalletConnect",{redirectView:i});return}_.push("ConnectingExternal",{connector:t.connector,redirectView:i,wallet:t.connector.explorerWallet});return}_.push("ConnectingExternal",{connector:t.connector,redirectView:i})}renderWallet(t,i){const o=t.wallet,r=me.getWalletImage(o),s=G.hasAnyConnection(ae.CONNECTOR_ID.WALLET_CONNECT),a=this.loadingTelegram,l=t.subtype==="recent"?"recent":void 0,c=t.subtype==="recent"?"info":void 0;return u`
      <w3m-list-wallet
        displayIndex=${i}
        imageSrc=${j(r)}
        name=${o.name??"Unknown"}
        @click=${()=>this.onClickWallet(t)}
        size="sm"
        data-testid=${`wallet-selector-${o.id}`}
        tabIdx=${j(this.tabIdx)}
        ?loading=${a}
        ?disabled=${s}
        rdnsId=${j(o.rdns||void 0)}
        walletRank=${j(o.order)}
        tagLabel=${j(l)}
        .tagVariant=${c}
      >
      </w3m-list-wallet>
    `}onClickWallet(t){var r;const i=(r=_.state.data)==null?void 0:r.redirectView;if(t.subtype==="featured"){V.selectWalletConnector(t.wallet);return}if(t.subtype==="recent"){if(this.loadingTelegram)return;V.selectWalletConnector(t.wallet);return}if(t.subtype==="custom"){if(this.loadingTelegram)return;_.push("ConnectingWalletConnect",{wallet:t.wallet,redirectView:i});return}if(this.loadingTelegram)return;const o=V.getConnector({id:t.wallet.id,rdns:t.wallet.rdns});o?_.push("ConnectingExternal",{connector:o,redirectView:i}):_.push("ConnectingWalletConnect",{wallet:t.wallet,redirectView:i})}};Rt.styles=Y0;fi([m({type:Number})],Rt.prototype,"tabIdx",void 0);fi([x()],Rt.prototype,"connectors",void 0);fi([x()],Rt.prototype,"recommended",void 0);fi([x()],Rt.prototype,"featured",void 0);fi([x()],Rt.prototype,"explorerWallets",void 0);fi([x()],Rt.prototype,"connections",void 0);fi([x()],Rt.prototype,"connectorImages",void 0);fi([x()],Rt.prototype,"loadingTelegram",void 0);Rt=fi([E("w3m-connector-list")],Rt);var Fd=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let $a=class extends P{constructor(){super(...arguments),this.tabIdx=void 0}render(){return u`
      <wui-flex flexDirection="column" gap="2">
        <w3m-connector-list tabIdx=${j(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${j(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};Fd([m()],$a.prototype,"tabIdx",void 0);$a=Fd([E("w3m-wallet-login-list")],$a);const X0=D`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var At=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Q0=470;let Ue=class extends P{constructor(){var t,i;super(),this.unsubscribe=[],this.connectors=V.state.connectors,this.authConnector=this.connectors.find(o=>o.type==="AUTH"),this.features=I.state.features,this.remoteFeatures=I.state.remoteFeatures,this.enableWallets=I.state.enableWallets,this.noAdapters=$.state.noAdapters,this.walletGuide="get-started",this.checked=en.state.isLegalCheckboxChecked,this.isEmailEnabled=((t=this.remoteFeatures)==null?void 0:t.email)&&!$.state.noAdapters,this.isSocialEnabled=((i=this.remoteFeatures)==null?void 0:i.socials)&&this.remoteFeatures.socials.length>0&&!$.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(V.subscribeKey("connectors",o=>{this.connectors=o,this.authConnector=this.connectors.find(r=>r.type==="AUTH"),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}),I.subscribeKey("features",o=>{this.features=o}),I.subscribeKey("remoteFeatures",o=>{this.remoteFeatures=o,this.setEmailAndSocialEnableCheck(this.noAdapters,this.remoteFeatures)}),I.subscribeKey("enableWallets",o=>this.enableWallets=o),$.subscribeKey("noAdapters",o=>this.setEmailAndSocialEnableCheck(o,this.remoteFeatures)),en.subscribeKey("isLegalCheckboxChecked",o=>this.checked=o))}disconnectedCallback(){var i,o;this.unsubscribe.forEach(r=>r()),(i=this.resizeObserver)==null||i.disconnect();const t=(o=this.shadowRoot)==null?void 0:o.querySelector(".connect");t==null||t.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){var i,o;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(".connect");t&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),t==null||t.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleConnectListScroll()}),(o=this.resizeObserver)==null||o.observe(t),this.handleConnectListScroll())}render(){var g;const{termsConditionsUrl:t,privacyPolicyUrl:i}=I.state,o=(g=I.state.features)==null?void 0:g.legalCheckbox,s=!!(t||i)&&!!o&&this.walletGuide==="get-started"&&!this.checked,a={connect:!0,disabled:s},l=I.state.enableWalletGuide,c=this.enableWallets,h=this.isSocialEnabled||this.authConnector,f=s?-1:void 0;return u`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          .padding=${["0","0","4","0"]}
          class=${el(a)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="2"
            .padding=${h&&c&&l&&this.walletGuide==="get-started"?["0","3","0","3"]:["0","3","3","3"]}
          >
            ${this.renderConnectMethod(f)}
          </wui-flex>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}reownBrandingTemplate(){var t;return Hn.hasFooter()||!((t=this.remoteFeatures)!=null&&t.reownBranding)?null:u`<wui-ux-by-reown></wui-ux-by-reown>`}setEmailAndSocialEnableCheck(t,i){this.isEmailEnabled=(i==null?void 0:i.email)&&!t,this.isSocialEnabled=(i==null?void 0:i.socials)&&i.socials.length>0&&!t,this.remoteFeatures=i,this.noAdapters=t}checkIfAuthEnabled(t){const i=t.filter(r=>r.type===mp.CONNECTOR_TYPE_AUTH).map(r=>r.chain);return ae.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(r=>i.includes(r))}renderConnectMethod(t){const i=Ji.getConnectOrderMethod(this.features,this.connectors);return u`${i.map((o,r)=>{switch(o){case"email":return u`${this.emailTemplate(t)} ${this.separatorTemplate(r,"email")}`;case"social":return u`${this.socialListTemplate(t)}
          ${this.separatorTemplate(r,"social")}`;case"wallet":return u`${this.walletListTemplate(t)}
          ${this.separatorTemplate(r,"wallet")}`;default:return null}})}`}checkMethodEnabled(t){switch(t){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(t){const o=Ji.getConnectOrderMethod(this.features,this.connectors)[t+1];return o?this.checkMethodEnabled(o)?o:this.checkIsThereNextMethod(t+1):void 0}separatorTemplate(t,i){const o=this.checkIsThereNextMethod(t),r=this.walletGuide==="explore";switch(i){case"wallet":return this.enableWallets&&o&&!r?u`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":{const n=o==="social";return this.isAuthEnabled&&this.isEmailEnabled&&!n&&o?u`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case"social":{const n=o==="email";return this.isAuthEnabled&&this.isSocialEnabled&&!n&&o?u`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(t){return!this.isEmailEnabled||!this.isAuthEnabled?null:u`<w3m-email-login-widget tabIdx=${j(t)}></w3m-email-login-widget>`}socialListTemplate(t){return!this.isSocialEnabled||!this.isAuthEnabled?null:u`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${j(t)}
    ></w3m-social-login-widget>`}walletListTemplate(t){var a,l;const i=this.enableWallets,o=((a=this.features)==null?void 0:a.emailShowWallets)===!1,r=(l=this.features)==null?void 0:l.collapseWallets,n=o||r;return!i||(B.isTelegram()&&(B.isSafari()||B.isIos())&&G.connectWalletConnect().catch(c=>({})),this.walletGuide==="explore")?null:this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&n?u`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${j(t)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:u`<w3m-wallet-login-list tabIdx=${j(t)}></w3m-wallet-login-list>`}legalCheckboxTemplate(){return this.walletGuide==="explore"?null:u`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){var o;const t=(o=this.shadowRoot)==null?void 0:o.querySelector(".connect");if(!t)return;t.scrollHeight>Q0?(t.style.setProperty("--connect-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 100px,
          black calc(100% - 100px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`),t.style.setProperty("--connect-scroll--top-opacity",Lr.interpolate([0,50],[0,1],t.scrollTop).toString()),t.style.setProperty("--connect-scroll--bottom-opacity",Lr.interpolate([0,50],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString())):(t.style.setProperty("--connect-mask-image","none"),t.style.setProperty("--connect-scroll--top-opacity","0"),t.style.setProperty("--connect-scroll--bottom-opacity","0"))}onContinueWalletClick(){_.push("ConnectWallets")}};Ue.styles=X0;At([x()],Ue.prototype,"connectors",void 0);At([x()],Ue.prototype,"authConnector",void 0);At([x()],Ue.prototype,"features",void 0);At([x()],Ue.prototype,"remoteFeatures",void 0);At([x()],Ue.prototype,"enableWallets",void 0);At([x()],Ue.prototype,"noAdapters",void 0);At([m()],Ue.prototype,"walletGuide",void 0);At([x()],Ue.prototype,"checked",void 0);At([x()],Ue.prototype,"isEmailEnabled",void 0);At([x()],Ue.prototype,"isSocialEnabled",void 0);At([x()],Ue.prototype,"isAuthEnabled",void 0);Ue=At([E("w3m-connect-view")],Ue);const J0=D`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${e=>e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var zd=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Xr=class extends P{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,o=36-t,r=116+o,n=245+o,s=360+o*1.75;return u`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${r} ${n}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};Xr.styles=[z,J0];zd([m({type:Number})],Xr.prototype,"radius",void 0);Xr=zd([E("wui-loading-thumbnail")],Xr);const em=D`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var bs=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Jn=class extends P{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return u`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Jn.styles=[z,de,em];bs([m({type:Boolean})],Jn.prototype,"disabled",void 0);bs([m()],Jn.prototype,"label",void 0);bs([m()],Jn.prototype,"buttonLabel",void 0);Jn=bs([E("wui-cta-button")],Jn);const tm=D`
  :host {
    display: block;
    padding: 0 ${({spacing:e})=>e[5]} ${({spacing:e})=>e[5]};
  }
`;var Ud=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Qr=class extends P{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:i,play_store:o,chrome_store:r,homepage:n}=this.wallet,s=B.isMobile(),a=B.isIos(),l=B.isAndroid(),c=[i,o,n,r].filter(Boolean).length>1,h=be.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return c&&!s?u`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${()=>_.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&n?u`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:i&&a?u`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:o&&l?u`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&B.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&B.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&B.openHref(this.wallet.homepage,"_blank")}};Qr.styles=[tm];Ud([m({type:Object})],Qr.prototype,"wallet",void 0);Qr=Ud([E("w3m-mobile-download-links")],Qr);const im=D`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:e})=>e.lg};
    transition-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var Lt=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class Ne extends P{constructor(){var t,i,o,r,n;super(),this.wallet=(t=_.state.data)==null?void 0:t.wallet,this.connector=(i=_.state.data)==null?void 0:i.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=me.getConnectorImage(this.connector)??me.getWalletImage(this.wallet),this.name=((o=this.wallet)==null?void 0:o.name)??((r=this.connector)==null?void 0:r.name)??"Wallet",this.isRetrying=!1,this.uri=G.state.wcUri,this.error=G.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(G.subscribeKey("wcUri",s=>{var a;this.uri=s,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(a=this.onConnect)==null||a.call(this))}),G.subscribeKey("wcError",s=>this.error=s)),(B.isTelegram()||B.isSafari())&&B.isIos()&&G.state.wcUri&&((n=this.onConnect)==null||n.call(this))}firstUpdated(){var t;(t=this.onAutoConnect)==null||t.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),G.setWcError(!1),clearTimeout(this.timeout)}render(){var o;(o=this.onRender)==null||o.call(this),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let i="";return this.label?i=this.label:(i=`Continue in ${this.name}`,this.error&&(i="Connection declined")),u`
      <wui-flex
        data-error=${j(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${j(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${i}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${t}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?u`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?u`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){var t;if(this.error&&!this.showRetry){this.showRetry=!0;const i=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-button");i==null||i.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var t,i;G.setWcError(!1),this.onRetry?(this.isRetrying=!0,(t=this.onRetry)==null||t.call(this)):(i=this.onConnect)==null||i.call(this)}loaderTemplate(){const t=Rr.state.themeVariables["--w3m-border-radius-master"],i=t?parseInt(t.replace("px",""),10):4;return u`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(B.copyToClopboard(this.uri),pe.showSuccess("Link copied"))}catch{pe.showError("Failed to copy")}}}Ne.styles=im;Lt([x()],Ne.prototype,"isRetrying",void 0);Lt([x()],Ne.prototype,"uri",void 0);Lt([x()],Ne.prototype,"error",void 0);Lt([x()],Ne.prototype,"ready",void 0);Lt([x()],Ne.prototype,"showRetry",void 0);Lt([x()],Ne.prototype,"label",void 0);Lt([x()],Ne.prototype,"secondaryBtnLabel",void 0);Lt([x()],Ne.prototype,"secondaryLabel",void 0);Lt([x()],Ne.prototype,"isLoading",void 0);Lt([m({type:Boolean})],Ne.prototype,"isMobile",void 0);Lt([m()],Ne.prototype,"onRetry",void 0);var nm=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ka=class extends Ne{constructor(){var i,o,r,n,s;if(super(),this.externalViewUnsubscribe=[],this.connectionsByNamespace=G.getConnections((i=this.connector)==null?void 0:i.chain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.remoteFeatures=I.state.remoteFeatures,this.currentActiveConnectorId=V.state.activeConnectorIds[(o=this.connector)==null?void 0:o.chain],!this.connector)throw new Error("w3m-connecting-view: No connector provided");const t=(r=this.connector)==null?void 0:r.chain;this.isAlreadyConnected(this.connector)&&(this.secondaryBtnLabel=void 0,this.label=`This account is already linked, change your account in ${this.connector.name}`,this.secondaryLabel=`To link a new account, open ${this.connector.name} and switch to the account you want to link`),Y.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser",displayIndex:(n=this.wallet)==null?void 0:n.display_index,walletRank:(s=this.wallet)==null?void 0:s.order,view:_.state.view}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(V.subscribeKey("activeConnectorIds",a=>{var f;const l=a[t],c=(f=this.remoteFeatures)==null?void 0:f.multiWallet,{redirectView:h}=_.state.data??{};l!==this.currentActiveConnectorId&&(this.hasMultipleConnections&&c?(_.replace("ProfileWallets"),pe.showSuccess("New Wallet Added")):h?_.replace(h):je.close())}),G.subscribeKey("connections",this.onConnectionsChange.bind(this)))}disconnectedCallback(){this.externalViewUnsubscribe.forEach(t=>t())}async onConnectProxy(){try{if(this.error=!1,this.connector){if(this.isAlreadyConnected(this.connector))return;(this.connector.id!==ae.CONNECTOR_ID.COINBASE_SDK||!this.error)&&await G.connectExternal(this.connector,this.connector.chain)}}catch(t){t instanceof Xa&&t.originalName===Qa.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?Y.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:t.message}}):Y.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}onConnectionsChange(t){var i,o;if((i=this.connector)!=null&&i.chain&&t.get(this.connector.chain)&&this.isAlreadyConnected(this.connector)){const r=t.get(this.connector.chain)??[],n=(o=this.remoteFeatures)==null?void 0:o.multiWallet;if(r.length===0)_.replace("Connect");else{const s=xi.getConnectionsByConnectorId(this.connectionsByNamespace,this.connector.id).flatMap(l=>l.accounts),a=xi.getConnectionsByConnectorId(r,this.connector.id).flatMap(l=>l.accounts);a.length===0?this.hasMultipleConnections&&n?(_.replace("ProfileWallets"),pe.showSuccess("Wallet deleted")):je.close():!s.every(c=>a.some(h=>gt.isLowerCaseMatch(c.address,h.address)))&&n&&_.replace("ProfileWallets")}}}isAlreadyConnected(t){return!!t&&this.connectionsByNamespace.some(i=>gt.isLowerCaseMatch(i.connectorId,t.id))}};ka=nm([E("w3m-connecting-external-view")],ka);const om=Ee`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var Hd=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Io=class extends P{constructor(){super(),this.unsubscribe=[],this.activeConnector=V.state.activeConnector,this.unsubscribe.push(V.subscribeKey("activeConnector",t=>this.activeConnector=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var t;return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${j(me.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["0","3","0","3"]}
        >
          <wui-text variant="lg-medium" color="primary">
            Select Chain for ${(t=this.activeConnector)==null?void 0:t.name}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","2","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){var t,i;return(i=(t=this.activeConnector)==null?void 0:t.connectors)==null?void 0:i.map((o,r)=>{var n;return o.name?u`
            <w3m-list-wallet
              displayIndex=${r}
              imageSrc=${j(me.getChainImage(o.chain))}
              name=${ae.CHAIN_NAME_MAP[o.chain]}
              @click=${()=>this.onConnector(o)}
              size="sm"
              data-testid="wui-list-chain-${o.chain}"
              rdnsId=${(n=o.explorerWallet)==null?void 0:n.rdns}
            ></w3m-list-wallet>
          `:null})}onConnector(t){var r,n,s,a;const i=(n=(r=this.activeConnector)==null?void 0:r.connectors)==null?void 0:n.find(l=>l.chain===t.chain),o=(s=_.state.data)==null?void 0:s.redirectView;if(!i){pe.showError("Failed to find connector");return}i.id==="walletConnect"?B.isMobile()?_.push("AllWallets"):_.push("ConnectingWalletConnect",{redirectView:o}):_.push("ConnectingExternal",{connector:i,redirectView:o,wallet:(a=this.activeConnector)==null?void 0:a.explorerWallet})}};Io.styles=om;Hd([x()],Io.prototype,"activeConnector",void 0);Io=Hd([E("w3m-connecting-multi-chain-view")],Io);var al=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Jr=class extends P{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return u`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${t} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(i=>i==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:i==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:i==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:i==="web"?{label:"Webapp",icon:"browser",platform:"web"}:i==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:i})=>i),t}onTabChange(t){var o;const i=this.platformTabs[t];i&&((o=this.onSelectPlatfrom)==null||o.call(this,i))}};al([m({type:Array})],Jr.prototype,"platforms",void 0);al([m()],Jr.prototype,"onSelectPlatfrom",void 0);Jr=al([E("w3m-connecting-header")],Jr);var rm=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let nc=class extends Ne{constructor(){var t;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),Y.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:(t=this.wallet)==null?void 0:t.display_index,walletRank:this.wallet.order,view:_.state.view}})}async onConnectProxy(){try{this.error=!1;const{connectors:t}=V.state,i=t.find(o=>{var r,n,s;return o.type==="ANNOUNCED"&&((r=o.info)==null?void 0:r.rdns)===((n=this.wallet)==null?void 0:n.rdns)||o.type==="INJECTED"||o.name===((s=this.wallet)==null?void 0:s.name)});if(i)await G.connectExternal(i,i.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");je.close()}catch(t){t instanceof Xa&&t.originalName===Qa.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?Y.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:t.message}}):Y.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}};nc=rm([E("w3m-connecting-wc-browser")],nc);var sm=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let oc=class extends Ne{constructor(){var t;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),Y.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:(t=this.wallet)==null?void 0:t.display_index,walletRank:this.wallet.order,view:_.state.view}})}onRenderProxy(){var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:i,name:o}=this.wallet,{redirect:r,href:n}=B.formatNativeUrl(i,this.uri);G.setWcLinking({name:o,href:n}),G.setRecentWallet(this.wallet),B.openHref(r,"_blank")}catch{this.error=!0}}};oc=sm([E("w3m-connecting-wc-desktop")],oc);var wo=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let vn=class extends Ne{constructor(){var t;if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=I.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{var i;if((i=this.wallet)!=null&&i.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:o,link_mode:r,name:n}=this.wallet,{redirect:s,redirectUniversalLink:a,href:l}=B.formatNativeUrl(o,this.uri,r);this.redirectDeeplink=s,this.redirectUniversalLink=a,this.target=B.isIframe()?"_top":"_self",G.setWcLinking({name:n,href:l}),G.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?B.openHref(this.redirectUniversalLink,this.target):B.openHref(this.redirectDeeplink,this.target)}catch(o){Y.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:o instanceof Error?o.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=Le.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(G.subscribeKey("wcUri",()=>{this.onHandleURI()})),Y.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:(t=this.wallet)==null?void 0:t.display_index,walletRank:this.wallet.order,view:_.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){var t;this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onTryAgain(){var t;G.setWcError(!1),(t=this.onConnect)==null||t.call(this)}};wo([x()],vn.prototype,"redirectDeeplink",void 0);wo([x()],vn.prototype,"redirectUniversalLink",void 0);wo([x()],vn.prototype,"target",void 0);wo([x()],vn.prototype,"preferUniversalLinks",void 0);wo([x()],vn.prototype,"isLoading",void 0);vn=wo([E("w3m-connecting-wc-mobile")],vn);var cr={},am=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Gd={},lt={};let ll;const lm=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];lt.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};lt.getSymbolTotalCodewords=function(t){return lm[t]};lt.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};lt.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');ll=t};lt.isKanjiModeEnabled=function(){return typeof ll<"u"};lt.toSJIS=function(t){return ll(t)};var ys={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(o){return o&&typeof o.bit<"u"&&o.bit>=0&&o.bit<4},e.from=function(o,r){if(e.isValid(o))return o;try{return t(o)}catch{return r}}})(ys);function Zd(){this.buffer=[],this.length=0}Zd.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var cm=Zd;function dr(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}dr.prototype.set=function(e,t,i,o){const r=e*this.size+t;this.data[r]=i,o&&(this.reservedBit[r]=!0)};dr.prototype.get=function(e,t){return this.data[e*this.size+t]};dr.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};dr.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var dm=dr,Kd={};(function(e){const t=lt.getSymbolSize;e.getRowColCoords=function(o){if(o===1)return[];const r=Math.floor(o/7)+2,n=t(o),s=n===145?26:Math.ceil((n-13)/(2*r-2))*2,a=[n-7];for(let l=1;l<r-1;l++)a[l]=a[l-1]-s;return a.push(6),a.reverse()},e.getPositions=function(o){const r=[],n=e.getRowColCoords(o),s=n.length;for(let a=0;a<s;a++)for(let l=0;l<s;l++)a===0&&l===0||a===0&&l===s-1||a===s-1&&l===0||r.push([n[a],n[l]]);return r}})(Kd);var qd={};const um=lt.getSymbolSize,rc=7;qd.getPositions=function(t){const i=um(t);return[[0,0],[i-rc,0],[0,i-rc]]};var Yd={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},e.from=function(r){return e.isValid(r)?parseInt(r,10):void 0},e.getPenaltyN1=function(r){const n=r.size;let s=0,a=0,l=0,c=null,h=null;for(let f=0;f<n;f++){a=l=0,c=h=null;for(let g=0;g<n;g++){let p=r.get(f,g);p===c?a++:(a>=5&&(s+=t.N1+(a-5)),c=p,a=1),p=r.get(g,f),p===h?l++:(l>=5&&(s+=t.N1+(l-5)),h=p,l=1)}a>=5&&(s+=t.N1+(a-5)),l>=5&&(s+=t.N1+(l-5))}return s},e.getPenaltyN2=function(r){const n=r.size;let s=0;for(let a=0;a<n-1;a++)for(let l=0;l<n-1;l++){const c=r.get(a,l)+r.get(a,l+1)+r.get(a+1,l)+r.get(a+1,l+1);(c===4||c===0)&&s++}return s*t.N2},e.getPenaltyN3=function(r){const n=r.size;let s=0,a=0,l=0;for(let c=0;c<n;c++){a=l=0;for(let h=0;h<n;h++)a=a<<1&2047|r.get(c,h),h>=10&&(a===1488||a===93)&&s++,l=l<<1&2047|r.get(h,c),h>=10&&(l===1488||l===93)&&s++}return s*t.N3},e.getPenaltyN4=function(r){let n=0;const s=r.data.length;for(let l=0;l<s;l++)n+=r.data[l];return Math.abs(Math.ceil(n*100/s/5)-10)*t.N4};function i(o,r,n){switch(o){case e.Patterns.PATTERN000:return(r+n)%2===0;case e.Patterns.PATTERN001:return r%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(r+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return r*n%2+r*n%3===0;case e.Patterns.PATTERN110:return(r*n%2+r*n%3)%2===0;case e.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2===0;default:throw new Error("bad maskPattern:"+o)}}e.applyMask=function(r,n){const s=n.size;for(let a=0;a<s;a++)for(let l=0;l<s;l++)n.isReserved(l,a)||n.xor(l,a,i(r,l,a))},e.getBestMask=function(r,n){const s=Object.keys(e.Patterns).length;let a=0,l=1/0;for(let c=0;c<s;c++){n(c),e.applyMask(c,r);const h=e.getPenaltyN1(r)+e.getPenaltyN2(r)+e.getPenaltyN3(r)+e.getPenaltyN4(r);e.applyMask(c,r),h<l&&(l=h,a=c)}return a}})(Yd);var vs={};const $i=ys,Sr=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Ar=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];vs.getBlocksCount=function(t,i){switch(i){case $i.L:return Sr[(t-1)*4+0];case $i.M:return Sr[(t-1)*4+1];case $i.Q:return Sr[(t-1)*4+2];case $i.H:return Sr[(t-1)*4+3];default:return}};vs.getTotalCodewordsCount=function(t,i){switch(i){case $i.L:return Ar[(t-1)*4+0];case $i.M:return Ar[(t-1)*4+1];case $i.Q:return Ar[(t-1)*4+2];case $i.H:return Ar[(t-1)*4+3];default:return}};var Xd={},xs={};const ko=new Uint8Array(512),es=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)ko[i]=t,es[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)ko[i]=ko[i-255]})();xs.log=function(t){if(t<1)throw new Error("log("+t+")");return es[t]};xs.exp=function(t){return ko[t]};xs.mul=function(t,i){return t===0||i===0?0:ko[es[t]+es[i]]};(function(e){const t=xs;e.mul=function(o,r){const n=new Uint8Array(o.length+r.length-1);for(let s=0;s<o.length;s++)for(let a=0;a<r.length;a++)n[s+a]^=t.mul(o[s],r[a]);return n},e.mod=function(o,r){let n=new Uint8Array(o);for(;n.length-r.length>=0;){const s=n[0];for(let l=0;l<r.length;l++)n[l]^=t.mul(r[l],s);let a=0;for(;a<n.length&&n[a]===0;)a++;n=n.slice(a)}return n},e.generateECPolynomial=function(o){let r=new Uint8Array([1]);for(let n=0;n<o;n++)r=e.mul(r,new Uint8Array([1,t.exp(n)]));return r}})(Xd);const Qd=Xd;function cl(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}cl.prototype.initialize=function(t){this.degree=t,this.genPoly=Qd.generateECPolynomial(this.degree)};cl.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const o=Qd.mod(i,this.genPoly),r=this.degree-o.length;if(r>0){const n=new Uint8Array(this.degree);return n.set(o,r),n}return o};var hm=cl,Jd={},Wi={},dl={};dl.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var Yt={};const eu="[0-9]+",pm="[A-Z $%*+\\-./:]+";let Do="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Do=Do.replace(/u/g,"\\u");const fm="(?:(?![A-Z0-9 $%*+\\-./:]|"+Do+`)(?:.|[\r
]))+`;Yt.KANJI=new RegExp(Do,"g");Yt.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");Yt.BYTE=new RegExp(fm,"g");Yt.NUMERIC=new RegExp(eu,"g");Yt.ALPHANUMERIC=new RegExp(pm,"g");const mm=new RegExp("^"+Do+"$"),gm=new RegExp("^"+eu+"$"),wm=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Yt.testKanji=function(t){return mm.test(t)};Yt.testNumeric=function(t){return gm.test(t)};Yt.testAlphanumeric=function(t){return wm.test(t)};(function(e){const t=dl,i=Yt;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return i.testNumeric(n)?e.NUMERIC:i.testAlphanumeric(n)?e.ALPHANUMERIC:i.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function o(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+r)}}e.from=function(n,s){if(e.isValid(n))return n;try{return o(n)}catch{return s}}})(Wi);(function(e){const t=lt,i=vs,o=ys,r=Wi,n=dl,s=7973,a=t.getBCHDigit(s);function l(g,p,b){for(let w=1;w<=40;w++)if(p<=e.getCapacity(w,b,g))return w}function c(g,p){return r.getCharCountIndicator(g,p)+4}function h(g,p){let b=0;return g.forEach(function(w){const C=c(w.mode,p);b+=C+w.getBitsLength()}),b}function f(g,p){for(let b=1;b<=40;b++)if(h(g,b)<=e.getCapacity(b,p,r.MIXED))return b}e.from=function(p,b){return n.isValid(p)?parseInt(p,10):b},e.getCapacity=function(p,b,w){if(!n.isValid(p))throw new Error("Invalid QR Code version");typeof w>"u"&&(w=r.BYTE);const C=t.getSymbolTotalCodewords(p),k=i.getTotalCodewordsCount(p,b),v=(C-k)*8;if(w===r.MIXED)return v;const y=v-c(w,p);switch(w){case r.NUMERIC:return Math.floor(y/10*3);case r.ALPHANUMERIC:return Math.floor(y/11*2);case r.KANJI:return Math.floor(y/13);case r.BYTE:default:return Math.floor(y/8)}},e.getBestVersionForData=function(p,b){let w;const C=o.from(b,o.M);if(Array.isArray(p)){if(p.length>1)return f(p,C);if(p.length===0)return 1;w=p[0]}else w=p;return l(w.mode,w.getLength(),C)},e.getEncodedBits=function(p){if(!n.isValid(p)||p<7)throw new Error("Invalid QR Code version");let b=p<<12;for(;t.getBCHDigit(b)-a>=0;)b^=s<<t.getBCHDigit(b)-a;return p<<12|b}})(Jd);var tu={};const Sa=lt,iu=1335,bm=21522,sc=Sa.getBCHDigit(iu);tu.getEncodedBits=function(t,i){const o=t.bit<<3|i;let r=o<<10;for(;Sa.getBCHDigit(r)-sc>=0;)r^=iu<<Sa.getBCHDigit(r)-sc;return(o<<10|r)^bm};var nu={};const ym=Wi;function eo(e){this.mode=ym.NUMERIC,this.data=e.toString()}eo.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};eo.prototype.getLength=function(){return this.data.length};eo.prototype.getBitsLength=function(){return eo.getBitsLength(this.data.length)};eo.prototype.write=function(t){let i,o,r;for(i=0;i+3<=this.data.length;i+=3)o=this.data.substr(i,3),r=parseInt(o,10),t.put(r,10);const n=this.data.length-i;n>0&&(o=this.data.substr(i),r=parseInt(o,10),t.put(r,n*3+1))};var vm=eo;const xm=Wi,zs=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function to(e){this.mode=xm.ALPHANUMERIC,this.data=e}to.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};to.prototype.getLength=function(){return this.data.length};to.prototype.getBitsLength=function(){return to.getBitsLength(this.data.length)};to.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let o=zs.indexOf(this.data[i])*45;o+=zs.indexOf(this.data[i+1]),t.put(o,11)}this.data.length%2&&t.put(zs.indexOf(this.data[i]),6)};var Cm=to,$m=function(t){for(var i=[],o=t.length,r=0;r<o;r++){var n=t.charCodeAt(r);if(n>=55296&&n<=56319&&o>r+1){var s=t.charCodeAt(r+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,r+=1)}if(n<128){i.push(n);continue}if(n<2048){i.push(n>>6|192),i.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){i.push(n>>12|224),i.push(n>>6&63|128),i.push(n&63|128);continue}if(n>=65536&&n<=1114111){i.push(n>>18|240),i.push(n>>12&63|128),i.push(n>>6&63|128),i.push(n&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const km=$m,Sm=Wi;function io(e){this.mode=Sm.BYTE,typeof e=="string"&&(e=km(e)),this.data=new Uint8Array(e)}io.getBitsLength=function(t){return t*8};io.prototype.getLength=function(){return this.data.length};io.prototype.getBitsLength=function(){return io.getBitsLength(this.data.length)};io.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var Am=io;const Em=Wi,_m=lt;function no(e){this.mode=Em.KANJI,this.data=e}no.getBitsLength=function(t){return t*13};no.prototype.getLength=function(){return this.data.length};no.prototype.getBitsLength=function(){return no.getBitsLength(this.data.length)};no.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=_m.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var Pm=no,ou={exports:{}};(function(e){var t={single_source_shortest_paths:function(i,o,r){var n={},s={};s[o]=0;var a=t.PriorityQueue.make();a.push(o,0);for(var l,c,h,f,g,p,b,w,C;!a.empty();){l=a.pop(),c=l.value,f=l.cost,g=i[c]||{};for(h in g)g.hasOwnProperty(h)&&(p=g[h],b=f+p,w=s[h],C=typeof s[h]>"u",(C||w>b)&&(s[h]=b,a.push(h,b),n[h]=c))}if(typeof r<"u"&&typeof s[r]>"u"){var k=["Could not find a path from ",o," to ",r,"."].join("");throw new Error(k)}return n},extract_shortest_path_from_predecessor_list:function(i,o){for(var r=[],n=o;n;)r.push(n),i[n],n=i[n];return r.reverse(),r},find_path:function(i,o,r){var n=t.single_source_shortest_paths(i,o,r);return t.extract_shortest_path_from_predecessor_list(n,r)},PriorityQueue:{make:function(i){var o=t.PriorityQueue,r={},n;i=i||{};for(n in o)o.hasOwnProperty(n)&&(r[n]=o[n]);return r.queue=[],r.sorter=i.sorter||o.default_sorter,r},default_sorter:function(i,o){return i.cost-o.cost},push:function(i,o){var r={value:i,cost:o};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(ou);var Tm=ou.exports;(function(e){const t=Wi,i=vm,o=Cm,r=Am,n=Pm,s=Yt,a=lt,l=Tm;function c(k){return unescape(encodeURIComponent(k)).length}function h(k,v,y){const S=[];let T;for(;(T=k.exec(y))!==null;)S.push({data:T[0],index:T.index,mode:v,length:T[0].length});return S}function f(k){const v=h(s.NUMERIC,t.NUMERIC,k),y=h(s.ALPHANUMERIC,t.ALPHANUMERIC,k);let S,T;return a.isKanjiModeEnabled()?(S=h(s.BYTE,t.BYTE,k),T=h(s.KANJI,t.KANJI,k)):(S=h(s.BYTE_KANJI,t.BYTE,k),T=[]),v.concat(y,S,T).sort(function(M,O){return M.index-O.index}).map(function(M){return{data:M.data,mode:M.mode,length:M.length}})}function g(k,v){switch(v){case t.NUMERIC:return i.getBitsLength(k);case t.ALPHANUMERIC:return o.getBitsLength(k);case t.KANJI:return n.getBitsLength(k);case t.BYTE:return r.getBitsLength(k)}}function p(k){return k.reduce(function(v,y){const S=v.length-1>=0?v[v.length-1]:null;return S&&S.mode===y.mode?(v[v.length-1].data+=y.data,v):(v.push(y),v)},[])}function b(k){const v=[];for(let y=0;y<k.length;y++){const S=k[y];switch(S.mode){case t.NUMERIC:v.push([S,{data:S.data,mode:t.ALPHANUMERIC,length:S.length},{data:S.data,mode:t.BYTE,length:S.length}]);break;case t.ALPHANUMERIC:v.push([S,{data:S.data,mode:t.BYTE,length:S.length}]);break;case t.KANJI:v.push([S,{data:S.data,mode:t.BYTE,length:c(S.data)}]);break;case t.BYTE:v.push([{data:S.data,mode:t.BYTE,length:c(S.data)}])}}return v}function w(k,v){const y={},S={start:{}};let T=["start"];for(let L=0;L<k.length;L++){const M=k[L],O=[];for(let W=0;W<M.length;W++){const ie=M[W],ue=""+L+W;O.push(ue),y[ue]={node:ie,lastCount:0},S[ue]={};for(let F=0;F<T.length;F++){const Z=T[F];y[Z]&&y[Z].node.mode===ie.mode?(S[Z][ue]=g(y[Z].lastCount+ie.length,ie.mode)-g(y[Z].lastCount,ie.mode),y[Z].lastCount+=ie.length):(y[Z]&&(y[Z].lastCount=ie.length),S[Z][ue]=g(ie.length,ie.mode)+4+t.getCharCountIndicator(ie.mode,v))}}T=O}for(let L=0;L<T.length;L++)S[T[L]].end=0;return{map:S,table:y}}function C(k,v){let y;const S=t.getBestModeForData(k);if(y=t.from(v,S),y!==t.BYTE&&y.bit<S.bit)throw new Error('"'+k+'" cannot be encoded with mode '+t.toString(y)+`.
 Suggested mode is: `+t.toString(S));switch(y===t.KANJI&&!a.isKanjiModeEnabled()&&(y=t.BYTE),y){case t.NUMERIC:return new i(k);case t.ALPHANUMERIC:return new o(k);case t.KANJI:return new n(k);case t.BYTE:return new r(k)}}e.fromArray=function(v){return v.reduce(function(y,S){return typeof S=="string"?y.push(C(S,null)):S.data&&y.push(C(S.data,S.mode)),y},[])},e.fromString=function(v,y){const S=f(v,a.isKanjiModeEnabled()),T=b(S),L=w(T,y),M=l.find_path(L.map,"start","end"),O=[];for(let W=1;W<M.length-1;W++)O.push(L.table[M[W]].node);return e.fromArray(p(O))},e.rawSplit=function(v){return e.fromArray(f(v,a.isKanjiModeEnabled()))}})(nu);const Cs=lt,Us=ys,Nm=cm,Rm=dm,jm=Kd,Im=qd,Aa=Yd,Ea=vs,Dm=hm,ts=Jd,Lm=tu,Bm=Wi,Hs=nu;function Mm(e,t){const i=e.size,o=Im.getPositions(t);for(let r=0;r<o.length;r++){const n=o[r][0],s=o[r][1];for(let a=-1;a<=7;a++)if(!(n+a<=-1||i<=n+a))for(let l=-1;l<=7;l++)s+l<=-1||i<=s+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?e.set(n+a,s+l,!0,!0):e.set(n+a,s+l,!1,!0))}}function Om(e){const t=e.size;for(let i=8;i<t-8;i++){const o=i%2===0;e.set(i,6,o,!0),e.set(6,i,o,!0)}}function Wm(e,t){const i=jm.getPositions(t);for(let o=0;o<i.length;o++){const r=i[o][0],n=i[o][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(r+s,n+a,!0,!0):e.set(r+s,n+a,!1,!0)}}function Vm(e,t){const i=e.size,o=ts.getEncodedBits(t);let r,n,s;for(let a=0;a<18;a++)r=Math.floor(a/3),n=a%3+i-8-3,s=(o>>a&1)===1,e.set(r,n,s,!0),e.set(n,r,s,!0)}function Gs(e,t,i){const o=e.size,r=Lm.getEncodedBits(t,i);let n,s;for(n=0;n<15;n++)s=(r>>n&1)===1,n<6?e.set(n,8,s,!0):n<8?e.set(n+1,8,s,!0):e.set(o-15+n,8,s,!0),n<8?e.set(8,o-n-1,s,!0):n<9?e.set(8,15-n-1+1,s,!0):e.set(8,15-n-1,s,!0);e.set(o-8,8,1,!0)}function Fm(e,t){const i=e.size;let o=-1,r=i-1,n=7,s=0;for(let a=i-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!e.isReserved(r,a-l)){let c=!1;s<t.length&&(c=(t[s]>>>n&1)===1),e.set(r,a-l,c),n--,n===-1&&(s++,n=7)}if(r+=o,r<0||i<=r){r-=o,o=-o;break}}}function zm(e,t,i){const o=new Nm;i.forEach(function(l){o.put(l.mode.bit,4),o.put(l.getLength(),Bm.getCharCountIndicator(l.mode,e)),l.write(o)});const r=Cs.getSymbolTotalCodewords(e),n=Ea.getTotalCodewordsCount(e,t),s=(r-n)*8;for(o.getLengthInBits()+4<=s&&o.put(0,4);o.getLengthInBits()%8!==0;)o.putBit(0);const a=(s-o.getLengthInBits())/8;for(let l=0;l<a;l++)o.put(l%2?17:236,8);return Um(o,e,t)}function Um(e,t,i){const o=Cs.getSymbolTotalCodewords(t),r=Ea.getTotalCodewordsCount(t,i),n=o-r,s=Ea.getBlocksCount(t,i),a=o%s,l=s-a,c=Math.floor(o/s),h=Math.floor(n/s),f=h+1,g=c-h,p=new Dm(g);let b=0;const w=new Array(s),C=new Array(s);let k=0;const v=new Uint8Array(e.buffer);for(let M=0;M<s;M++){const O=M<l?h:f;w[M]=v.slice(b,b+O),C[M]=p.encode(w[M]),b+=O,k=Math.max(k,O)}const y=new Uint8Array(o);let S=0,T,L;for(T=0;T<k;T++)for(L=0;L<s;L++)T<w[L].length&&(y[S++]=w[L][T]);for(T=0;T<g;T++)for(L=0;L<s;L++)y[S++]=C[L][T];return y}function Hm(e,t,i,o){let r;if(Array.isArray(e))r=Hs.fromArray(e);else if(typeof e=="string"){let c=t;if(!c){const h=Hs.rawSplit(e);c=ts.getBestVersionForData(h,i)}r=Hs.fromString(e,c||40)}else throw new Error("Invalid data");const n=ts.getBestVersionForData(r,i);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=zm(t,i,r),a=Cs.getSymbolSize(t),l=new Rm(a);return Mm(l,t),Om(l),Wm(l,t),Gs(l,i,0),t>=7&&Vm(l,t),Fm(l,s),isNaN(o)&&(o=Aa.getBestMask(l,Gs.bind(null,l,i))),Aa.applyMask(o,l),Gs(l,i,o),{modules:l,version:t,errorCorrectionLevel:i,maskPattern:o,segments:r}}Gd.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let o=Us.M,r,n;return typeof i<"u"&&(o=Us.from(i.errorCorrectionLevel,Us.M),r=ts.from(i.version),n=Aa.from(i.maskPattern),i.toSJISFunc&&Cs.setToSJISFunction(i.toSJISFunc)),Hm(t,r,o,n)};var ru={},ul={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let o=i.slice().replace("#","").split("");if(o.length<3||o.length===5||o.length>8)throw new Error("Invalid hex color: "+i);(o.length===3||o.length===4)&&(o=Array.prototype.concat.apply([],o.map(function(n){return[n,n]}))),o.length===6&&o.push("F","F");const r=parseInt(o.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+o.slice(0,6).join("")}}e.getOptions=function(o){o||(o={}),o.color||(o.color={});const r=typeof o.margin>"u"||o.margin===null||o.margin<0?4:o.margin,n=o.width&&o.width>=21?o.width:void 0,s=o.scale||4;return{width:n,scale:n?4:s,margin:r,color:{dark:t(o.color.dark||"#000000ff"),light:t(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},e.getScale=function(o,r){return r.width&&r.width>=o+r.margin*2?r.width/(o+r.margin*2):r.scale},e.getImageWidth=function(o,r){const n=e.getScale(o,r);return Math.floor((o+r.margin*2)*n)},e.qrToImageData=function(o,r,n){const s=r.modules.size,a=r.modules.data,l=e.getScale(s,n),c=Math.floor((s+n.margin*2)*l),h=n.margin*l,f=[n.color.light,n.color.dark];for(let g=0;g<c;g++)for(let p=0;p<c;p++){let b=(g*c+p)*4,w=n.color.light;if(g>=h&&p>=h&&g<c-h&&p<c-h){const C=Math.floor((g-h)/l),k=Math.floor((p-h)/l);w=f[a[C*s+k]?1:0]}o[b++]=w.r,o[b++]=w.g,o[b++]=w.b,o[b]=w.a}}})(ul);(function(e){const t=ul;function i(r,n,s){r.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function o(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,s,a){let l=a,c=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(c=o()),l=t.getOptions(l);const h=t.getImageWidth(n.modules.size,l),f=c.getContext("2d"),g=f.createImageData(h,h);return t.qrToImageData(g.data,n,l),i(f,c,h),f.putImageData(g,0,0),c},e.renderToDataURL=function(n,s,a){let l=a;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const c=e.render(n,s,l),h=l.type||"image/png",f=l.rendererOpts||{};return c.toDataURL(h,f.quality)}})(ru);var su={};const Gm=ul;function ac(e,t){const i=e.a/255,o=t+'="'+e.hex+'"';return i<1?o+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':o}function Zs(e,t,i){let o=e+t;return typeof i<"u"&&(o+=" "+i),o}function Zm(e,t,i){let o="",r=0,n=!1,s=0;for(let a=0;a<e.length;a++){const l=Math.floor(a%t),c=Math.floor(a/t);!l&&!n&&(n=!0),e[a]?(s++,a>0&&l>0&&e[a-1]||(o+=n?Zs("M",l+i,.5+c+i):Zs("m",r,0),r=0,n=!1),l+1<t&&e[a+1]||(o+=Zs("h",s),s=0)):r++}return o}su.render=function(t,i,o){const r=Gm.getOptions(i),n=t.modules.size,s=t.modules.data,a=n+r.margin*2,l=r.color.light.a?"<path "+ac(r.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+ac(r.color.dark,"stroke")+' d="'+Zm(s,n,r.margin)+'"/>',h='viewBox="0 0 '+a+" "+a+'"',g='<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+h+' shape-rendering="crispEdges">'+l+c+`</svg>
`;return typeof o=="function"&&o(null,g),g};const Km=am,_a=Gd,au=ru,qm=su;function hl(e,t,i,o,r){const n=[].slice.call(arguments,1),s=n.length,a=typeof n[s-1]=="function";if(!a&&!Km())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(r=i,i=t,t=o=void 0):s===3&&(t.getContext&&typeof r>"u"?(r=o,o=void 0):(r=o,o=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=o=void 0):s===2&&!t.getContext&&(o=i,i=t,t=void 0),new Promise(function(l,c){try{const h=_a.create(i,o);l(e(h,t,o))}catch(h){c(h)}})}try{const l=_a.create(i,o);r(null,e(l,t,o))}catch(l){r(l)}}cr.create=_a.create;cr.toCanvas=hl.bind(null,au.render);cr.toDataURL=hl.bind(null,au.renderToDataURL);cr.toString=hl.bind(null,function(e,t,i){return qm.render(e,i)});const Ym=.1,lc=2.5,Qt=7;function Ks(e,t,i){return e===t?!1:(e-t<0?t-e:e-t)<=i+Ym}function Xm(e,t){const i=Array.prototype.slice.call(cr.create(e,{errorCorrectionLevel:t}).modules.data,0),o=Math.sqrt(i.length);return i.reduce((r,n,s)=>(s%o===0?r.push([n]):r[r.length-1].push(n))&&r,[])}const Qm={generate({uri:e,size:t,logoSize:i,padding:o=8,dotColor:r="var(--apkt-colors-black)"}){const s=[],a=Xm(e,"Q"),l=(t-2*o)/a.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach(({x:w,y:C})=>{const k=(a.length-Qt)*l*w+o,v=(a.length-Qt)*l*C+o,y=.45;for(let S=0;S<c.length;S+=1){const T=l*(Qt-S*2);s.push(H`
            <rect
              fill=${S===2?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${S===0?T-10:T}
              rx= ${S===0?(T-10)*y:T*y}
              ry= ${S===0?(T-10)*y:T*y}
              stroke=${r}
              stroke-width=${S===0?10:0}
              height=${S===0?T-10:T}
              x= ${S===0?v+l*S+10/2:v+l*S}
              y= ${S===0?k+l*S+10/2:k+l*S}
            />
          `)}});const h=Math.floor((i+25)/l),f=a.length/2-h/2,g=a.length/2+h/2-1,p=[];a.forEach((w,C)=>{w.forEach((k,v)=>{if(a[C][v]&&!(C<Qt&&v<Qt||C>a.length-(Qt+1)&&v<Qt||C<Qt&&v>a.length-(Qt+1))&&!(C>f&&C<g&&v>f&&v<g)){const y=C*l+l/2+o,S=v*l+l/2+o;p.push([y,S])}})});const b={};return p.forEach(([w,C])=>{var k;b[w]?(k=b[w])==null||k.push(C):b[w]=[C]}),Object.entries(b).map(([w,C])=>{const k=C.filter(v=>C.every(y=>!Ks(v,y,l)));return[Number(w),k]}).forEach(([w,C])=>{C.forEach(k=>{s.push(H`<circle cx=${w} cy=${k} fill=${r} r=${l/lc} />`)})}),Object.entries(b).filter(([w,C])=>C.length>1).map(([w,C])=>{const k=C.filter(v=>C.some(y=>Ks(v,y,l)));return[Number(w),k]}).map(([w,C])=>{C.sort((v,y)=>v<y?-1:1);const k=[];for(const v of C){const y=k.find(S=>S.some(T=>Ks(v,T,l)));y?y.push(v):k.push([v])}return[w,k.map(v=>[v[0],v[v.length-1]])]}).forEach(([w,C])=>{C.forEach(([k,v])=>{s.push(H`
              <line
                x1=${w}
                x2=${w}
                y1=${k}
                y2=${v}
                stroke=${r}
                stroke-width=${l/(lc/2)}
                stroke-linecap="round"
              />
            `)})}),s}},Jm=D`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({colors:e})=>e.white};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  :host {
    border-radius: ${({borderRadius:e})=>e[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var Vi=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let zt=class extends P{constructor(){super(...arguments),this.uri="",this.size=500,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),u`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return H`
      <svg viewBox="0 0 ${this.size} ${this.size}" width="100%" height="100%">
        ${Qm.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?u`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?u`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:u`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};zt.styles=[z,Jm];Vi([m()],zt.prototype,"uri",void 0);Vi([m({type:Number})],zt.prototype,"size",void 0);Vi([m()],zt.prototype,"theme",void 0);Vi([m()],zt.prototype,"imageSrc",void 0);Vi([m()],zt.prototype,"alt",void 0);Vi([m({type:Boolean})],zt.prototype,"arenaClear",void 0);Vi([m({type:Boolean})],zt.prototype,"farcaster",void 0);zt=Vi([E("wui-qr-code")],zt);const e1=D`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var lu=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let is=class extends Ne{constructor(){super(),this.basic=!1}firstUpdated(){var t,i,o;this.basic||Y.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((t=this.wallet)==null?void 0:t.name)??"WalletConnect",platform:"qrcode",displayIndex:(i=this.wallet)==null?void 0:i.display_index,walletRank:(o=this.wallet)==null?void 0:o.order,view:_.state.view}})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.unsubscribe)==null||t.forEach(i=>i())}render(){return this.onRenderProxy(),u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0)}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.wallet?this.wallet.name:void 0;G.setWcLinking(void 0),G.setRecentWallet(this.wallet);const i=Rr.state.themeVariables["--apkt-qr-color"]??Rr.state.themeVariables["--w3m-qr-color"];return u` <wui-qr-code
      theme=${Rr.state.themeMode}
      uri=${this.uri}
      imageSrc=${j(me.getWalletImage(this.wallet))}
      color=${j(i)}
      alt=${j(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return u`<wui-button
      .disabled=${t}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};is.styles=e1;lu([m({type:Boolean})],is.prototype,"basic",void 0);is=lu([E("w3m-connecting-wc-qrcode")],is);var t1=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let cc=class extends P{constructor(){var t,i,o;if(super(),this.wallet=(t=_.state.data)==null?void 0:t.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");Y.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:(i=this.wallet)==null?void 0:i.display_index,walletRank:(o=this.wallet)==null?void 0:o.order,view:_.state.view}})}render(){return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${j(me.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};cc=t1([E("w3m-connecting-wc-unsupported")],cc);var cu=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Pa=class extends Ne{constructor(){var t,i;if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=Le.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(G.subscribeKey("wcUri",()=>{this.updateLoadingState()})),Y.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:(t=this.wallet)==null?void 0:t.display_index,walletRank:(i=this.wallet)==null?void 0:i.order,view:_.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:i,name:o}=this.wallet,{redirect:r,href:n}=B.formatUniversalUrl(i,this.uri);G.setWcLinking({name:o,href:n}),G.setRecentWallet(this.wallet),B.openHref(r,"_blank")}catch{this.error=!0}}};cu([x()],Pa.prototype,"isLoading",void 0);Pa=cu([E("w3m-connecting-wc-web")],Pa);const i1=D`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;var Tn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ut=class extends P{constructor(){var t;super(),this.wallet=(t=_.state.data)==null?void 0:t.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!I.state.siwx,this.remoteFeatures=I.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(I.subscribeKey("remoteFeatures",i=>this.remoteFeatures=i))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return I.state.enableMobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),u`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){var t;return!((t=this.remoteFeatures)!=null&&t.reownBranding)||!this.displayBranding?null:u`<wui-ux-by-reown></wui-ux-by-reown>`}async initializeConnection(t=!1){var i,o;if(!(this.platform==="browser"||I.state.manualWCControl&&!t))try{const{wcPairingExpiry:r,status:n}=G.state,{redirectView:s}=_.state.data??{};if(t||I.state.enableEmbedded||B.isPairingExpired(r)||n==="connecting"){const a=G.getConnections($.state.activeChain),l=(i=this.remoteFeatures)==null?void 0:i.multiWallet,c=a.length>0;await G.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(c&&l?(_.replace("ProfileWallets"),pe.showSuccess("New Wallet Added")):s?_.replace(s):je.close())}}catch(r){if(r instanceof Error&&r.message.includes("An error occurred when attempting to switch chain")&&!I.state.enableNetworkSwitch&&$.state.activeChain){$.setActiveCaipNetwork(gp.getUnsupportedNetwork(`${$.state.activeChain}:${(o=$.state.activeCaipNetwork)==null?void 0:o.id}`)),$.showUnsupportedChainUI();return}r instanceof Xa&&r.originalName===Qa.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?Y.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:r.message}}):Y.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(r==null?void 0:r.message)??"Unknown"}}),G.setWcError(!0),pe.showError(r.message??"Connection error"),G.resetWcConnection(),_.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:t,desktop_link:i,webapp_link:o,injected:r,rdns:n}=this.wallet,s=r==null?void 0:r.map(({injected_id:b})=>b).filter(Boolean),a=[...n?[n]:s??[]],l=I.state.isUniversalProvider?!1:a.length,c=t,h=o,f=G.checkInstalled(a),g=l&&f,p=i&&!B.isMobile();g&&!$.state.noAdapters&&this.platforms.push("browser"),c&&this.platforms.push(B.isMobile()?"mobile":"qrcode"),h&&this.platforms.push("web"),p&&this.platforms.push("desktop"),!g&&l&&!$.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return u`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return u`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return u`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return u`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return u`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return u`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?u`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){var o;const i=(o=this.shadowRoot)==null?void 0:o.querySelector("div");i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Ut.styles=i1;Tn([x()],Ut.prototype,"platform",void 0);Tn([x()],Ut.prototype,"platforms",void 0);Tn([x()],Ut.prototype,"isSiwxEnabled",void 0);Tn([x()],Ut.prototype,"remoteFeatures",void 0);Tn([m({type:Boolean})],Ut.prototype,"displayBranding",void 0);Tn([m({type:Boolean})],Ut.prototype,"basic",void 0);Ut=Tn([E("w3m-connecting-wc-view")],Ut);var pl=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Lo=class extends P{constructor(){super(),this.unsubscribe=[],this.isMobile=B.isMobile(),this.remoteFeatures=I.state.remoteFeatures,this.unsubscribe.push(I.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(this.isMobile){const{featured:t,recommended:i}=te.state,{customWallets:o}=I.state,r=ni.getRecentWallets(),n=t.length||i.length||(o==null?void 0:o.length)||r.length;return u`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${n?u`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return u`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){var t;return(t=this.remoteFeatures)!=null&&t.reownBranding?u` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};pl([x()],Lo.prototype,"isMobile",void 0);pl([x()],Lo.prototype,"remoteFeatures",void 0);Lo=pl([E("w3m-connecting-wc-basic-view")],Lo);const n1=Ee`
  .continue-button-container {
    width: 100%;
  }
`;var du=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Bo=class extends P{constructor(){super(...arguments),this.loading=!1}render(){return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0","0","4","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{B.openHref(wp.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return u` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0","6","0","6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box icon="id" size="xl" iconSize="xxl" color="default"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="lg-medium" color="primary">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return u`<wui-flex
      .padding=${["0","8","0","8"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){_.push("RegisterAccountName"),Y.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:Si($.state.activeChain)===Ai.ACCOUNT_TYPES.SMART_ACCOUNT}})}};Bo.styles=n1;du([x()],Bo.prototype,"loading",void 0);Bo=du([E("w3m-choose-account-name-view")],Bo);var o1=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ta=class extends P{constructor(){var t;super(...arguments),this.wallet=(t=_.state.data)==null?void 0:t.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return u`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var t;return(t=this.wallet)!=null&&t.chrome_store?u`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var t;return(t=this.wallet)!=null&&t.app_store?u`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var t;return(t=this.wallet)!=null&&t.play_store?u`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var t;return(t=this.wallet)!=null&&t.homepage?u`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(t){t.href&&this.wallet&&(Y.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:t.type}}),B.openHref(t.href,"_blank"))}onChromeStore(){var t;(t=this.wallet)!=null&&t.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};Ta=o1([E("w3m-downloads-view")],Ta);var r1=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const s1="https://walletconnect.com/explorer";let Na=class extends P{render(){return u`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="2">
        ${this.recommendedWalletsTemplate()}
        <w3m-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          size="sm"
          @click=${()=>{B.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></w3m-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:t,featured:i}=te.state,{customWallets:o}=I.state;return[...i,...o??[],...t].slice(0,4).map((n,s)=>u`
        <w3m-list-wallet
          displayIndex=${s}
          name=${n.name??"Unknown"}
          tagVariant="accent"
          size="sm"
          imageSrc=${j(me.getWalletImage(n))}
          @click=${()=>{this.onWalletClick(n)}}
        ></w3m-list-wallet>
      `)}onWalletClick(t){Y.sendEvent({type:"track",event:"GET_WALLET",properties:{name:t.name,walletRank:void 0,explorerId:t.id,type:"homepage"}}),B.openHref(t.homepage??s1,"_blank")}};Na=r1([E("w3m-get-wallet-view")],Na);const a1=H`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" fill="#F7931A"/>
  <g clip-path="url(#clip0_1045_17)">
    <path d="M63.0394 39.7409C58.7654 56.8839 41.4024 67.3169 24.2574 63.0419C7.11937 58.7679 -3.31363 41.4039 0.962367 24.2619C5.23437 7.11686 22.5974 -3.31714 39.7374 0.956863C56.8814 5.23086 67.3134 22.5969 63.0394 39.7409Z" fill="#F7931A"/>
    <path d="M46.1092 27.4409C46.7462 23.1829 43.5042 20.8939 39.0712 19.3669L40.5092 13.5989L36.9982 12.7239L35.5982 18.3399C34.6752 18.1099 33.7272 17.8929 32.7852 17.6779L34.1952 12.0249L30.6862 11.1499L29.2472 16.9159C28.4832 16.7419 27.7332 16.5699 27.0052 16.3889L27.0092 16.3709L22.1672 15.1619L21.2332 18.9119C21.2332 18.9119 23.8382 19.5089 23.7832 19.5459C25.2052 19.9009 25.4622 20.8419 25.4192 21.5879L23.7812 28.1589C23.8792 28.1839 24.0062 28.2199 24.1462 28.2759C24.0292 28.2469 23.9042 28.2149 23.7752 28.1839L21.4792 37.3889C21.3052 37.8209 20.8642 38.4689 19.8702 38.2229C19.9052 38.2739 17.3182 37.5859 17.3182 37.5859L15.5752 41.6049L20.1442 42.7439C20.9942 42.9569 21.8272 43.1799 22.6472 43.3899L21.1942 49.2239L24.7012 50.0989L26.1402 44.3269C27.0982 44.5869 28.0282 44.8269 28.9382 45.0529L27.5042 50.7979L31.0152 51.6729L32.4682 45.8499C38.4552 46.9829 42.9572 46.5259 44.8522 41.1109C46.3792 36.7509 44.7762 34.2359 41.6262 32.5959C43.9202 32.0669 45.6482 30.5579 46.1092 27.4409ZM38.0872 38.6899C37.0022 43.0499 29.6612 40.6929 27.2812 40.1019L29.2092 32.3729C31.5892 32.9669 39.2212 34.1429 38.0872 38.6899ZM39.1732 27.3779C38.1832 31.3439 32.0732 29.3289 30.0912 28.8349L31.8392 21.8249C33.8212 22.3189 40.2042 23.2409 39.1732 27.3779Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_1045_17">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,l1=H`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,c1=H`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,d1=H`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,u1=H`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,h1=H`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,p1=H`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,f1=H`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,m1=H`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,g1=H`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,w1=H`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,b1=H`<svg width="40" height="42" viewBox="0 0 40 42" fill="none">
<path opacity="0.7" d="M19.9526 41.9076L7.3877 34.655V26.1226L19.9526 33.3751V41.9076Z" fill="url(#paint0_linear_2113_32117)"/>
<path opacity="0.7" d="M19.9521 41.9076L32.5171 34.655V26.1226L19.9521 33.3751V41.9076Z" fill="url(#paint1_linear_2113_32117)"/>
<path opacity="0.7" d="M39.9095 7.34521V21.8562L32.5166 26.1225V11.6114L39.9095 7.34521Z" fill="url(#paint2_linear_2113_32117)"/>
<path d="M39.9099 7.34536L27.345 0.0927734L19.9521 4.359L32.5171 11.6116L39.9099 7.34536Z" fill="url(#paint3_linear_2113_32117)"/>
<path d="M0 7.34536L12.5649 0.0927734L19.9519 4.359L7.387 11.6116L0 7.34536Z" fill="#F969D3"/>
<path opacity="0.7" d="M0 7.34521V21.8562L7.387 26.1225V11.6114L0 7.34521Z" fill="url(#paint4_linear_2113_32117)"/>
<defs>
<linearGradient id="paint0_linear_2113_32117" x1="18.6099" y1="41.8335" x2="7.73529" y2="8.31842" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
<linearGradient id="paint1_linear_2113_32117" x1="26.2346" y1="26.1226" x2="26.2346" y2="41.9076" gradientUnits="userSpaceOnUse">
<stop stop-color="#719DED"/>
<stop offset="1" stop-color="#2545BE"/>
</linearGradient>
<linearGradient id="paint2_linear_2113_32117" x1="36.213" y1="7.34521" x2="36.213" y2="26.1225" gradientUnits="userSpaceOnUse">
<stop stop-color="#93EBFF"/>
<stop offset="1" stop-color="#197DDB"/>
</linearGradient>
<linearGradient id="paint3_linear_2113_32117" x1="29.931" y1="0.0927734" x2="38.2156" y2="14.8448" gradientUnits="userSpaceOnUse">
<stop stop-color="#F969D3"/>
<stop offset="1" stop-color="#4F51C0"/>
</linearGradient>
<linearGradient id="paint4_linear_2113_32117" x1="18.1251" y1="44.2539" x2="-7.06792" y2="15.2763" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
</defs>
</svg>`,y1=H`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,v1=H`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,x1=H`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,C1=H`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,$1=H`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,k1=H`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,S1=H`<svg fill="none" viewBox="0 0 80 80">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M40 80a40 40 0 1 0 0-80 40 40 0 0 0 0 80Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M79.5 40a39.5 39.5 0 1 1-79 0 39.5 39.5 0 0 1 79 0Z"
    />
    <path
      fill="#fff"
      d="m62.62 51.54-7.54 7.91a1.75 1.75 0 0 1-1.29.55H18.02a.9.9 0 0 1-.8-.52.84.84 0 0 1 .16-.92l7.55-7.92a1.75 1.75 0 0 1 1.28-.55h35.77a.87.87 0 0 1 .8.52.84.84 0 0 1-.16.93Zm-7.54-15.95a1.75 1.75 0 0 0-1.29-.54H18.02a.89.89 0 0 0-.8.51.84.84 0 0 0 .16.93l7.55 7.92a1.75 1.75 0 0 0 1.28.54h35.77a.89.89 0 0 0 .8-.51.84.84 0 0 0-.16-.93l-7.54-7.92ZM18.02 29.9h35.77a1.79 1.79 0 0 0 1.29-.54l7.54-7.92a.85.85 0 0 0 .16-.93.87.87 0 0 0-.8-.51H26.21a1.79 1.79 0 0 0-1.28.54l-7.55 7.92a.85.85 0 0 0-.16.93.89.89 0 0 0 .8.52Z"
    />
  </g>
  <defs>
    <linearGradient id="b" x1="6.75" x2="80.68" y1="81.91" y2="7.37" gradientUnits="userSpaceOnUse">
      <stop offset=".08" stop-color="#9945FF" />
      <stop offset=".3" stop-color="#8752F3" />
      <stop offset=".5" stop-color="#5497D5" />
      <stop offset=".6" stop-color="#43B4CA" />
      <stop offset=".72" stop-color="#28E0B9" />
      <stop offset=".97" stop-color="#19FB9B" />
    </linearGradient>
    <clipPath id="a"><path fill="#fff" d="M0 0h80v80H0z" /></clipPath>
  </defs>
</svg> `,A1=H`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,E1=Ee`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`;var fl=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const _1={browser:l1,dao:c1,defi:d1,defiAlt:u1,eth:h1,layers:f1,lock:g1,login:w1,network:y1,nft:v1,noun:x1,profile:k1,system:A1,meld:b1,onrampCard:C1,google:p1,pencil:$1,lightbulb:m1,solana:S1,ton:Ad,bitcoin:a1};let Mo=class extends P{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`
       --local-size: var(--apkt-visual-size-${this.size});
   `,u`${_1[this.name]}`}};Mo.styles=[z,E1];fl([m()],Mo.prototype,"name",void 0);fl([m()],Mo.prototype,"size",void 0);Mo=fl([E("wui-visual")],Mo);var uu=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ra=class extends P{constructor(){super(...arguments),this.data=[]}render(){return u`
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        ${this.data.map(t=>u`
            <wui-flex flexDirection="column" alignItems="center" gap="5">
              <wui-flex flexDirection="row" justifyContent="center" gap="1">
                ${t.images.map(i=>u`<wui-visual size="sm" name=${i}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="1">
              <wui-text variant="md-regular" color="primary" align="center">${t.title}</wui-text>
              <wui-text variant="sm-regular" color="secondary" align="center"
                >${t.text}</wui-text
              >
            </wui-flex>
          `)}
      </wui-flex>
    `}};uu([m({type:Array})],Ra.prototype,"data",void 0);Ra=uu([E("w3m-help-widget")],Ra);var P1=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const T1=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let ja=class extends P{render(){return u`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${T1}></w3m-help-widget>
        <wui-button variant="accent-primary" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){Y.sendEvent({type:"track",event:"CLICK_GET_WALLET_HELP"}),_.push("GetWallet")}};ja=P1([E("w3m-what-is-a-wallet-view")],ja);const N1=D`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var hu=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Oo=class extends P{constructor(){super(),this.unsubscribe=[],this.checked=en.state.isLegalCheckboxChecked,this.unsubscribe.push(en.subscribeKey("isLegalCheckboxChecked",t=>{this.checked=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var l;const{termsConditionsUrl:t,privacyPolicyUrl:i}=I.state,o=(l=I.state.features)==null?void 0:l.legalCheckbox,n=!!(t||i)&&!!o,s=n&&!this.checked,a=s?-1:void 0;return u`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${n?["0","3","3","3"]:"3"}
        gap="2"
        class=${j(s?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${j(a)}></w3m-wallet-login-list>
      </wui-flex>
    `}};Oo.styles=N1;hu([x()],Oo.prototype,"checked",void 0);Oo=hu([E("w3m-connect-wallets-view")],Oo);const R1=D`
  :host {
    display: block;
    width: 120px;
    height: 120px;
  }

  svg {
    width: 120px;
    height: 120px;
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: ${e=>e.colors.accent100};
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var j1=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ia=class extends P{render(){return u`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Ia.styles=[z,R1];Ia=j1([E("wui-loading-hexagon")],Ia);const I1=H`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,D1=H`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,L1=D`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({tokens:e})=>e.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var Nn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ui=class extends P{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:D1,md:Bd,lg:I1},this.selected=!1,this.round=!1}render(){const t={sm:"4",md:"6",lg:"10"};return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--apkt-spacing-10);
      --local-height: var(--apkt-spacing-10);
      --local-icon-size: var(--apkt-spacing-4);
    `):this.style.cssText=`

      --local-path: var(--apkt-path-network-${this.size});
      --local-width:  var(--apkt-width-network-${this.size});
      --local-height:  var(--apkt-height-network-${this.size});
      --local-icon-size:  var(--apkt-spacing-${t[this.size]});
    `,u`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?u`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:u`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};ui.styles=[z,L1];Nn([m()],ui.prototype,"size",void 0);Nn([m()],ui.prototype,"name",void 0);Nn([m({type:Object})],ui.prototype,"networkImagesBySize",void 0);Nn([m()],ui.prototype,"imageSrc",void 0);Nn([m({type:Boolean})],ui.prototype,"selected",void 0);Nn([m({type:Boolean})],ui.prototype,"round",void 0);ui=Nn([E("wui-network-image")],ui);const B1=Ee`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var ml=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let oo=class extends P{constructor(){var t;super(),this.network=(t=_.state.data)==null?void 0:t.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const t=this.getLabel(),i=this.getSubLabel();return u`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","10","5"]}
        gap="7"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${j(me.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:u`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="h6-regular" color="primary">${t}</wui-text>
          <wui-text align="center" variant="md-regular" color="secondary">${i}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent-primary"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const t=V.getConnectorId($.state.activeChain);return V.getAuthConnector()&&t===ae.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){var o;const t=V.getConnectorId($.state.activeChain);return V.getAuthConnector()&&t===ae.CONNECTOR_ID.AUTH?`Switching to ${((o=this.network)==null?void 0:o.name)??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){var t;if(this.error&&!this.showRetry){this.showRetry=!0;const i=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-button");i==null||i.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){var t;try{this.error=!1,$.state.activeChain!==((t=this.network)==null?void 0:t.chainNamespace)&&$.setIsSwitchingNamespace(!0),this.network&&(await $.switchActiveNetwork(this.network),await ua.isAuthenticated()&&_.goBack())}catch{this.error=!0}}};oo.styles=B1;ml([x()],oo.prototype,"showRetry",void 0);ml([x()],oo.prototype,"error",void 0);oo=ml([E("w3m-network-switch-view")],oo);const M1=D`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var ur=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let xn=class extends P{constructor(){super(...arguments),this.imageSrc=void 0,this.name="Ethereum",this.disabled=!1}render(){return u`
      <button ?disabled=${this.disabled} tabindex=${j(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          ${this.imageTemplate()}
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}imageTemplate(){return this.imageSrc?u`<wui-image ?boxed=${!0} src=${this.imageSrc}></wui-image>`:u`<wui-image
      ?boxed=${!0}
      icon="networkPlaceholder"
      size="lg"
      iconColor="default"
    ></wui-image>`}};xn.styles=[z,de,M1];ur([m()],xn.prototype,"imageSrc",void 0);ur([m()],xn.prototype,"name",void 0);ur([m()],xn.prototype,"tabIdx",void 0);ur([m({type:Boolean})],xn.prototype,"disabled",void 0);xn=ur([E("wui-list-network")],xn);const O1=Ee`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var hr=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ri=class extends P{constructor(){super(),this.unsubscribe=[],this.network=$.state.activeCaipNetwork,this.requestedCaipNetworks=$.getCaipNetworks(),this.search="",this.onDebouncedSearch=B.debounce(t=>{this.search=t},100),this.unsubscribe.push(nn.subscribeNetworkImages(()=>this.requestUpdate()),$.subscribeKey("activeCaipNetwork",t=>this.network=t),$.subscribe(()=>{this.requestedCaipNetworks=$.getAllRequestedCaipNetworks()}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","3","3","3"]}
        flexDirection="column"
        gap="2"
      >
        ${this.networksTemplate()}
      </wui-flex>
    `}templateSearchInput(){return u`
      <wui-flex gap="2" .padding=${["0","3","3","3"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}networksTemplate(){var o;const t=$.getAllApprovedCaipNetworkIds(),i=B.sortRequestedNetworks(t,this.requestedCaipNetworks);return this.search?this.filteredNetworks=i==null?void 0:i.filter(r=>{var n;return(n=r==null?void 0:r.name)==null?void 0:n.toLowerCase().includes(this.search.toLowerCase())}):this.filteredNetworks=i,(o=this.filteredNetworks)==null?void 0:o.map(r=>{var n;return u`
        <wui-list-network
          .selected=${((n=this.network)==null?void 0:n.id)===r.id}
          imageSrc=${j(me.getNetworkImage(r))}
          type="network"
          name=${r.name??r.id}
          @click=${()=>this.onSwitchNetwork(r)}
          .disabled=${$.isCaipNetworkDisabled(r)}
          data-testid=${`w3m-network-switch-${r.name??r.id}`}
        ></wui-list-network>
      `})}onSwitchNetwork(t){bp.onSwitchNetwork({network:t})}};Ri.styles=O1;hr([x()],Ri.prototype,"network",void 0);hr([x()],Ri.prototype,"requestedCaipNetworks",void 0);hr([x()],Ri.prototype,"filteredNetworks",void 0);hr([x()],Ri.prototype,"search",void 0);Ri=hr([E("w3m-networks-view")],Ri);const W1=D`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    border-radius: calc(
      ${({borderRadius:e})=>e[1]} * 9 - ${({borderRadius:e})=>e[3]}
    );
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(
      ${({borderRadius:e})=>e[1]} * 9 - ${({borderRadius:e})=>e[3]}
    );
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: ${({spacing:e})=>e["01"]} ${({spacing:e})=>e[2]};
  }

  .capitalize {
    text-transform: capitalize;
  }
`;var pu=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const V1={eip155:"eth",solana:"solana",bip122:"bitcoin",polkadot:void 0};let Wo=class extends P{constructor(){var t,i;super(...arguments),this.unsubscribe=[],this.switchToChain=(t=_.state.data)==null?void 0:t.switchToChain,this.caipNetwork=(i=_.state.data)==null?void 0:i.network,this.activeChain=$.state.activeChain}firstUpdated(){this.unsubscribe.push($.subscribeKey("activeChain",t=>this.activeChain=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.switchToChain?ae.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;const i=ae.CHAIN_NAME_MAP[this.switchToChain];return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["4","2","2","2"]}
        gap="4"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="2">
          <wui-visual
            size="md"
            name=${j(V1[this.switchToChain])}
          ></wui-visual>
          <wui-flex gap="2" flexDirection="column" alignItems="center">
            <wui-text
              data-testid=${`w3m-switch-active-chain-to-${i}`}
              variant="lg-regular"
              color="primary"
              align="center"
              >Switch to <span class="capitalize">${i}</span></wui-text
            >
            <wui-text variant="md-regular" color="secondary" align="center">
              Connected wallet doesn't support connecting to ${t} chain. You
              need to connect with a different wallet.
            </wui-text>
          </wui-flex>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&($.setIsSwitchingNamespace(!0),V.setFilterByNamespace(this.switchToChain),this.caipNetwork?await $.switchActiveNetwork(this.caipNetwork):$.setActiveNamespace(this.switchToChain),_.reset("Connect"))}};Wo.styles=W1;pu([m()],Wo.prototype,"activeChain",void 0);Wo=pu([E("w3m-switch-active-chain-view")],Wo);var F1=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const z1=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let Da=class extends P{render(){return u`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${z1}></w3m-help-widget>
        <wui-button
          variant="accent-primary"
          size="md"
          @click=${()=>{B.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Da=F1([E("w3m-what-is-a-network-view")],Da);const U1=Ee`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var gl=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ro=class extends P{constructor(){var t;super(),this.swapUnsupportedChain=(t=_.state.data)==null?void 0:t.swapUnsupportedChain,this.unsubscribe=[],this.disconnecting=!1,this.remoteFeatures=I.state.remoteFeatures,this.unsubscribe.push(nn.subscribeNetworkImages(()=>this.requestUpdate()),I.subscribeKey("remoteFeatures",i=>{this.remoteFeatures=i}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["3","5","2","5"]}
          alignItems="center"
          gap="5"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="3" gap="2"> ${this.networksTemplate()} </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="3" gap="2">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="signOut"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="md-medium" color="secondary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?u`
        <wui-text variant="sm-regular" color="secondary" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:u`
      <wui-text variant="sm-regular" color="secondary" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const t=$.getAllRequestedCaipNetworks(),i=$.getAllApprovedCaipNetworkIds(),o=B.sortRequestedNetworks(i,t);return(this.swapUnsupportedChain?o.filter(n=>Le.SWAP_SUPPORTED_NETWORKS.includes(n.caipNetworkId)):o).map(n=>u`
        <wui-list-network
          imageSrc=${j(me.getNetworkImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(n)}
        >
        </wui-list-network>
      `)}async onDisconnect(){var t;try{this.disconnecting=!0;const i=$.state.activeChain,r=G.getConnections(i).length>0,n=i&&V.state.activeConnectorIds[i],s=(t=this.remoteFeatures)==null?void 0:t.multiWallet;await G.disconnect(s?{id:n,namespace:i}:{}),r&&s&&(_.push("ProfileWallets"),pe.showSuccess("Wallet deleted"))}catch{Y.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),pe.showError("Failed to disconnect")}finally{this.disconnecting=!1}}async onSwitchNetwork(t){const i=$.getActiveCaipAddress(),o=$.getAllApprovedCaipNetworkIds(),r=$.getNetworkProp("supportsAllNetworks",t.chainNamespace),n=_.state.data;i?o!=null&&o.includes(t.caipNetworkId)?await $.switchActiveNetwork(t):r?_.push("SwitchNetwork",{...n,network:t}):_.push("SwitchNetwork",{...n,network:t}):i||($.setActiveCaipNetwork(t),_.push("Connect"))}};ro.styles=U1;gl([x()],ro.prototype,"disconnecting",void 0);gl([x()],ro.prototype,"remoteFeatures",void 0);ro=gl([E("w3m-unsupported-chain-view")],ro);const H1=D`
  wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
  }

  /* -- Types --------------------------------------------------------- */
  wui-flex[data-type='info'] {
    color: ${({tokens:e})=>e.theme.textSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-flex[data-type='success'] {
    color: ${({tokens:e})=>e.core.textSuccess};
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] {
    color: ${({tokens:e})=>e.core.textError};
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] {
    color: ${({tokens:e})=>e.core.textWarning};
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-flex[data-type='info'] wui-icon-box {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex[data-type='success'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-text {
    flex: 1;
  }
`;var $s=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let so=class extends P{constructor(){super(...arguments),this.icon="externalLink",this.text="",this.type="info"}render(){return u`
      <wui-flex alignItems="center" data-type=${this.type}>
        <wui-icon-box size="sm" color="inherit" icon=${this.icon}></wui-icon-box>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
      </wui-flex>
    `}};so.styles=[z,de,H1];$s([m()],so.prototype,"icon",void 0);$s([m()],so.prototype,"text",void 0);$s([m()],so.prototype,"type",void 0);so=$s([E("wui-banner")],so);const G1=Ee`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Z1=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ns=class extends P{constructor(){super(),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u` <wui-flex flexDirection="column" .padding=${["2","3","3","3"]} gap="2">
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const t=$.getAllRequestedCaipNetworks(),i=$.getAllApprovedCaipNetworkIds(),o=$.state.activeCaipNetwork,r=$.checkIfSmartAccountEnabled();let n=B.sortRequestedNetworks(i,t);if(r&&Si(o==null?void 0:o.chainNamespace)===Ai.ACCOUNT_TYPES.SMART_ACCOUNT){if(!o)return null;n=[o]}return n.filter(a=>a.chainNamespace===(o==null?void 0:o.chainNamespace)).map(a=>u`
        <wui-list-network
          imageSrc=${j(me.getNetworkImage(a))}
          name=${a.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};ns.styles=G1;ns=Z1([E("w3m-wallet-compatible-networks-view")],ns);const K1=D`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    box-shadow: 0 0 0 8px ${({tokens:e})=>e.theme.borderPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    overflow: hidden;
  }

  :host([data-border-radius-full='true']) {
    border-radius: 50px;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var ks=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ao=class extends P{render(){return this.dataset.borderRadiusFull=this.borderRadiusFull?"true":"false",u`${this.templateVisual()}`}templateVisual(){return this.imageSrc?u`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:u`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};ao.styles=[z,K1];ks([m()],ao.prototype,"imageSrc",void 0);ks([m()],ao.prototype,"alt",void 0);ks([m({type:Boolean})],ao.prototype,"borderRadiusFull",void 0);ao=ks([E("wui-visual-thumbnail")],ao);const q1=D`
  :host {
    display: flex;
    justify-content: center;
    gap: ${({spacing:e})=>e[4]};
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var Y1=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let La=class extends P{constructor(){var t,i,o;super(...arguments),this.dappImageUrl=(t=I.state.metadata)==null?void 0:t.icons,this.walletImageUrl=(o=(i=$.getAccountData())==null?void 0:i.connectedWalletInfo)==null?void 0:o.icon}firstUpdated(){var i;const t=(i=this.shadowRoot)==null?void 0:i.querySelectorAll("wui-visual-thumbnail");t!=null&&t[0]&&this.createAnimation(t[0],"translate(18px)"),t!=null&&t[1]&&this.createAnimation(t[1],"translate(-18px)")}render(){var t;return u`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(t=this.dappImageUrl)==null?void 0:t[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(t,i){t.animate([{transform:"translateX(0px)"},{transform:i}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};La.styles=q1;La=Y1([E("w3m-siwx-sign-message-thumbnails")],La);var wl=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Vo=class extends P{constructor(){var t;super(...arguments),this.dappName=(t=I.state.metadata)==null?void 0:t.name,this.isCancelling=!1,this.isSigning=!1}render(){return u`
      <wui-flex justifyContent="center" .padding=${["8","0","6","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex .padding=${["0","20","5","20"]} gap="3" justifyContent="space-between">
        <wui-text variant="lg-medium" align="center" color="primary"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["0","10","4","10"]} gap="3" justifyContent="space-between">
        <wui-text variant="md-regular" align="center" color="secondary"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["4","5","5","5"]} gap="3" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-secondary"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-primary"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0;try{await ua.requestSignMessage()}catch(t){if(t instanceof Error&&t.message.includes("OTP is required")){pe.showError({message:"Something went wrong. We need to verify your account again."}),_.replace("DataCapture");return}throw t}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,await ua.cancelSignMessage().finally(()=>this.isCancelling=!1)}};wl([x()],Vo.prototype,"isCancelling",void 0);wl([x()],Vo.prototype,"isSigning",void 0);Vo=wl([E("w3m-siwx-sign-message-view")],Vo);const e6=Object.freeze(Object.defineProperty({__proto__:null,get AppKitAccountButton(){return Br},get AppKitButton(){return Mr},get AppKitConnectButton(){return Or},get AppKitNetworkButton(){return Wr},get W3mAccountButton(){return pa},get W3mAccountSettingsView(){return ri},get W3mAccountView(){return Fr},get W3mAllWalletsView(){return jo},get W3mButton(){return fa},get W3mChooseAccountNameView(){return Bo},get W3mConnectButton(){return ma},get W3mConnectView(){return Ue},get W3mConnectWalletsView(){return Oo},get W3mConnectingExternalView(){return ka},get W3mConnectingMultiChainView(){return Io},get W3mConnectingWcBasicView(){return Lo},get W3mConnectingWcView(){return Ut},get W3mDownloadsView(){return Ta},get W3mFooter(){return Gn},get W3mFundWalletView(){return Ti},get W3mGetWalletView(){return Na},get W3mNetworkButton(){return ga},get W3mNetworkSwitchView(){return oo},get W3mNetworksView(){return Ri},get W3mProfileWalletsView(){return Oe},get W3mRouter(){return Zn},get W3mSIWXSignMessageView(){return Vo},get W3mSwitchActiveChainView(){return Wo},get W3mUnsupportedChainView(){return ro},get W3mWalletCompatibleNetworksView(){return ns},get W3mWhatIsANetworkView(){return Da},get W3mWhatIsAWalletView(){return ja}},Symbol.toStringTag,{value:"Module"}));hs({tagName:"appkit-button",elementClass:Mr,react:R});hs({tagName:"appkit-network-button",elementClass:Wr,react:R});hs({tagName:"appkit-connect-button",elementClass:Or,react:R});hs({tagName:"appkit-account-button",elementClass:Br,react:R});let qs;function X1(e){return qs||(qs=new yp({...e,sdkVersion:B.generateSdkVersion(e.adapters??[],"react",vp)})),qs}function mi(e){return{formatters:void 0,fees:void 0,serializers:void 0,...e}}mi({id:"5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",name:"Solana",network:"solana-mainnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!1,chainNamespace:"solana",caipNetworkId:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",deprecatedCaipNetworkId:"solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ"});mi({id:"EtWTRABZaYq6iMfeYKouRu166VU2xqa1",name:"Solana Devnet",network:"solana-devnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!0,chainNamespace:"solana",caipNetworkId:"solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",deprecatedCaipNetworkId:"solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K"});mi({id:"4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",name:"Solana Testnet",network:"solana-testnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!0,chainNamespace:"solana",caipNetworkId:"solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z"});mi({id:"000000000019d6689c085ae165831e93",caipNetworkId:"bip122:000000000019d6689c085ae165831e93",chainNamespace:"bip122",name:"Bitcoin",nativeCurrency:{name:"Bitcoin",symbol:"BTC",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}}});mi({id:"000000000933ea01ad0ee984209779ba",caipNetworkId:"bip122:000000000933ea01ad0ee984209779ba",chainNamespace:"bip122",name:"Bitcoin Testnet",nativeCurrency:{name:"Bitcoin",symbol:"BTC",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},testnet:!0});mi({id:"00000008819873e925422c1ff0f99f7c",caipNetworkId:"bip122:00000008819873e925422c1ff0f99f7c",chainNamespace:"bip122",name:"Bitcoin Signet",nativeCurrency:{name:"Bitcoin",symbol:"BTC",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},testnet:!0});mi({id:"-239",name:"TON",network:"ton-mainnet",nativeCurrency:{name:"TON",symbol:"TON",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Tonscan",url:"https://tonscan.org"}},testnet:!1,chainNamespace:"ton",caipNetworkId:"ton:-239"});mi({id:"-3",name:"TON Testnet",network:"ton-testnet",nativeCurrency:{name:"TON",symbol:"TON",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Tonscan",url:"https://testnet.tonscan.org"}},testnet:!0,chainNamespace:"ton",caipNetworkId:"ton:-3"});const fu="1478687c5ec68d46a47d17c941950005",Q1=mi({id:31337,caipNetworkId:"eip155:31337",chainNamespace:"eip155",name:"Hardhat Local",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["http://127.0.0.1:8545"]},public:{http:["http://127.0.0.1:8545"]}},blockExplorers:{default:{name:"Hardhat RPC",url:"http://127.0.0.1:8545"}}}),mu=[Q1,Cp,$p,kp,Sp,Ap,Ep,_p],gu=new xp({projectId:fu,networks:mu,ssr:!1}),J1=gu.wagmiConfig,eg={"--w3m-accent":"#38bdf8","--w3m-accent-fill-color":"#0f172a","--w3m-background-color":"#020617","--w3m-color-mix":"#22d3ee","--w3m-color-mix-strength":"20","--w3m-border-radius-master":"18","--w3m-font-family":'"Inter", "Space Grotesk", sans-serif',"--w3m-text-big-bold-size":"18px","--w3m-button-border-radius":"14px","--w3m-success-color":"#34d399"},Xi=X1({adapters:[gu],networks:mu,projectId:fu,metadata:{name:"LuckChain",description:"Provably Fair Blockchain Gaming Platform",url:"https://luckchain.io",icons:["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="]},features:{analytics:!1,connectMethodsOrder:["social","email","wallet"],legalCheckbox:!0},themeMode:"dark",themeVariables:eg,allowUnsupportedChain:!0,enableMobileFullScreen:!0,termsConditionsUrl:"https://www.mytermsandconditions.com",privacyPolicyUrl:"https://www.myprivacypolicy.com",allWallets:"ONLY_MOBILE",enableCoinbase:!1});var tg=e=>{switch(e){case"success":return og;case"info":return sg;case"warning":return rg;case"error":return ag;default:return null}},ig=Array(12).fill(0),ng=({visible:e,className:t})=>R.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},R.createElement("div",{className:"sonner-spinner"},ig.map((i,o)=>R.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${o}`})))),og=R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},R.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),rg=R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},R.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),sg=R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},R.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),ag=R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},R.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),lg=R.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},R.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),R.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),cg=()=>{let[e,t]=R.useState(document.hidden);return R.useEffect(()=>{let i=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",i),()=>window.removeEventListener("visibilitychange",i)},[]),e},Ba=1,dg=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:i,...o}=e,r=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:Ba++,n=this.toasts.find(a=>a.id===r),s=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(r)&&this.dismissedToasts.delete(r),n?this.toasts=this.toasts.map(a=>a.id===r?(this.publish({...a,...e,id:r,title:i}),{...a,...e,id:r,dismissible:s,title:i}):a):this.addToast({title:i,...o,dismissible:s,id:r}),r},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(i=>i({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let i;t.loading!==void 0&&(i=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let o=e instanceof Promise?e:e(),r=i!==void 0,n,s=o.then(async l=>{if(n=["resolve",l],R.isValidElement(l))r=!1,this.create({id:i,type:"default",message:l});else if(hg(l)&&!l.ok){r=!1;let c=typeof t.error=="function"?await t.error(`HTTP error! status: ${l.status}`):t.error,h=typeof t.description=="function"?await t.description(`HTTP error! status: ${l.status}`):t.description;this.create({id:i,type:"error",message:c,description:h})}else if(t.success!==void 0){r=!1;let c=typeof t.success=="function"?await t.success(l):t.success,h=typeof t.description=="function"?await t.description(l):t.description;this.create({id:i,type:"success",message:c,description:h})}}).catch(async l=>{if(n=["reject",l],t.error!==void 0){r=!1;let c=typeof t.error=="function"?await t.error(l):t.error,h=typeof t.description=="function"?await t.description(l):t.description;this.create({id:i,type:"error",message:c,description:h})}}).finally(()=>{var l;r&&(this.dismiss(i),i=void 0),(l=t.finally)==null||l.call(t)}),a=()=>new Promise((l,c)=>s.then(()=>n[0]==="reject"?c(n[1]):l(n[1])).catch(c));return typeof i!="string"&&typeof i!="number"?{unwrap:a}:Object.assign(i,{unwrap:a})},this.custom=(e,t)=>{let i=(t==null?void 0:t.id)||Ba++;return this.create({jsx:e(i),id:i,...t}),i},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},qe=new dg,ug=(e,t)=>{let i=(t==null?void 0:t.id)||Ba++;return qe.addToast({title:e,...t,id:i}),i},hg=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",pg=ug,fg=()=>qe.toasts,mg=()=>qe.getActiveToasts(),ee=Object.assign(pg,{success:qe.success,info:qe.info,warning:qe.warning,error:qe.error,custom:qe.custom,message:qe.message,promise:qe.promise,dismiss:qe.dismiss,loading:qe.loading},{getHistory:fg,getToasts:mg});function gg(e,{insertAt:t}={}){if(typeof document>"u")return;let i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",t==="top"&&i.firstChild?i.insertBefore(o,i.firstChild):i.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}gg(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Er(e){return e.label!==void 0}var wg=3,bg="32px",yg="16px",dc=4e3,vg=356,xg=14,Cg=20,$g=200;function Nt(...e){return e.filter(Boolean).join(" ")}function kg(e){let[t,i]=e.split("-"),o=[];return t&&o.push(t),i&&o.push(i),o}var Sg=e=>{var t,i,o,r,n,s,a,l,c,h,f;let{invert:g,toast:p,unstyled:b,interacting:w,setHeights:C,visibleToasts:k,heights:v,index:y,toasts:S,expanded:T,removeToast:L,defaultRichColors:M,closeButton:O,style:W,cancelButtonStyle:ie,actionButtonStyle:ue,className:F="",descriptionClassName:Z="",duration:ce,position:Pe,gap:ne,loadingIcon:le,expandByDefault:Re,classNames:N,icons:oe,closeButtonAriaLabel:se="Close toast",pauseWhenPageIsHidden:X}=e,[re,J]=R.useState(null),[Ce,Ze]=R.useState(null),[fe,zi]=R.useState(!1),[ct,nt]=R.useState(!1),[Ie,Ui]=R.useState(!1),[wr,In]=R.useState(!1),[Ds,br]=R.useState(!1),[Ls,ve]=R.useState(0),[Q,Hi]=R.useState(0),gi=R.useRef(p.duration||ce||dc),Xt=R.useRef(null),Bt=R.useRef(null),yr=y===0,vr=y+1<=k,dt=p.type,Dn=p.dismissible!==!1,Uh=p.className||"",Hh=p.descriptionClassName||"",xr=R.useMemo(()=>v.findIndex(q=>q.toastId===p.id)||0,[v,p.id]),Gh=R.useMemo(()=>{var q;return(q=p.closeButton)!=null?q:O},[p.closeButton,O]),Fl=R.useMemo(()=>p.duration||ce||dc,[p.duration,ce]),Bs=R.useRef(0),Ln=R.useRef(0),zl=R.useRef(0),Bn=R.useRef(null),[Zh,Kh]=Pe.split("-"),Ul=R.useMemo(()=>v.reduce((q,he,we)=>we>=xr?q:q+he.height,0),[v,xr]),Hl=cg(),qh=p.invert||g,Ms=dt==="loading";Ln.current=R.useMemo(()=>xr*ne+Ul,[xr,Ul]),R.useEffect(()=>{gi.current=Fl},[Fl]),R.useEffect(()=>{zi(!0)},[]),R.useEffect(()=>{let q=Bt.current;if(q){let he=q.getBoundingClientRect().height;return Hi(he),C(we=>[{toastId:p.id,height:he,position:p.position},...we]),()=>C(we=>we.filter(Et=>Et.toastId!==p.id))}},[C,p.id]),R.useLayoutEffect(()=>{if(!fe)return;let q=Bt.current,he=q.style.height;q.style.height="auto";let we=q.getBoundingClientRect().height;q.style.height=he,Hi(we),C(Et=>Et.find(_t=>_t.toastId===p.id)?Et.map(_t=>_t.toastId===p.id?{..._t,height:we}:_t):[{toastId:p.id,height:we,position:p.position},...Et])},[fe,p.title,p.description,C,p.id]);let wi=R.useCallback(()=>{nt(!0),ve(Ln.current),C(q=>q.filter(he=>he.toastId!==p.id)),setTimeout(()=>{L(p)},$g)},[p,L,C,Ln]);R.useEffect(()=>{if(p.promise&&dt==="loading"||p.duration===1/0||p.type==="loading")return;let q;return T||w||X&&Hl?(()=>{if(zl.current<Bs.current){let he=new Date().getTime()-Bs.current;gi.current=gi.current-he}zl.current=new Date().getTime()})():gi.current!==1/0&&(Bs.current=new Date().getTime(),q=setTimeout(()=>{var he;(he=p.onAutoClose)==null||he.call(p,p),wi()},gi.current)),()=>clearTimeout(q)},[T,w,p,dt,X,Hl,wi]),R.useEffect(()=>{p.delete&&wi()},[wi,p.delete]);function Yh(){var q,he,we;return oe!=null&&oe.loading?R.createElement("div",{className:Nt(N==null?void 0:N.loader,(q=p==null?void 0:p.classNames)==null?void 0:q.loader,"sonner-loader"),"data-visible":dt==="loading"},oe.loading):le?R.createElement("div",{className:Nt(N==null?void 0:N.loader,(he=p==null?void 0:p.classNames)==null?void 0:he.loader,"sonner-loader"),"data-visible":dt==="loading"},le):R.createElement(ng,{className:Nt(N==null?void 0:N.loader,(we=p==null?void 0:p.classNames)==null?void 0:we.loader),visible:dt==="loading"})}return R.createElement("li",{tabIndex:0,ref:Bt,className:Nt(F,Uh,N==null?void 0:N.toast,(t=p==null?void 0:p.classNames)==null?void 0:t.toast,N==null?void 0:N.default,N==null?void 0:N[dt],(i=p==null?void 0:p.classNames)==null?void 0:i[dt]),"data-sonner-toast":"","data-rich-colors":(o=p.richColors)!=null?o:M,"data-styled":!(p.jsx||p.unstyled||b),"data-mounted":fe,"data-promise":!!p.promise,"data-swiped":Ds,"data-removed":ct,"data-visible":vr,"data-y-position":Zh,"data-x-position":Kh,"data-index":y,"data-front":yr,"data-swiping":Ie,"data-dismissible":Dn,"data-type":dt,"data-invert":qh,"data-swipe-out":wr,"data-swipe-direction":Ce,"data-expanded":!!(T||Re&&fe),style:{"--index":y,"--toasts-before":y,"--z-index":S.length-y,"--offset":`${ct?Ls:Ln.current}px`,"--initial-height":Re?"auto":`${Q}px`,...W,...p.style},onDragEnd:()=>{Ui(!1),J(null),Bn.current=null},onPointerDown:q=>{Ms||!Dn||(Xt.current=new Date,ve(Ln.current),q.target.setPointerCapture(q.pointerId),q.target.tagName!=="BUTTON"&&(Ui(!0),Bn.current={x:q.clientX,y:q.clientY}))},onPointerUp:()=>{var q,he,we,Et;if(wr||!Dn)return;Bn.current=null;let _t=Number(((q=Bt.current)==null?void 0:q.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),bi=Number(((he=Bt.current)==null?void 0:he.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Gi=new Date().getTime()-((we=Xt.current)==null?void 0:we.getTime()),Pt=re==="x"?_t:bi,yi=Math.abs(Pt)/Gi;if(Math.abs(Pt)>=Cg||yi>.11){ve(Ln.current),(Et=p.onDismiss)==null||Et.call(p,p),Ze(re==="x"?_t>0?"right":"left":bi>0?"down":"up"),wi(),In(!0),br(!1);return}Ui(!1),J(null)},onPointerMove:q=>{var he,we,Et,_t;if(!Bn.current||!Dn||((he=window.getSelection())==null?void 0:he.toString().length)>0)return;let bi=q.clientY-Bn.current.y,Gi=q.clientX-Bn.current.x,Pt=(we=e.swipeDirections)!=null?we:kg(Pe);!re&&(Math.abs(Gi)>1||Math.abs(bi)>1)&&J(Math.abs(Gi)>Math.abs(bi)?"x":"y");let yi={x:0,y:0};re==="y"?(Pt.includes("top")||Pt.includes("bottom"))&&(Pt.includes("top")&&bi<0||Pt.includes("bottom")&&bi>0)&&(yi.y=bi):re==="x"&&(Pt.includes("left")||Pt.includes("right"))&&(Pt.includes("left")&&Gi<0||Pt.includes("right")&&Gi>0)&&(yi.x=Gi),(Math.abs(yi.x)>0||Math.abs(yi.y)>0)&&br(!0),(Et=Bt.current)==null||Et.style.setProperty("--swipe-amount-x",`${yi.x}px`),(_t=Bt.current)==null||_t.style.setProperty("--swipe-amount-y",`${yi.y}px`)}},Gh&&!p.jsx?R.createElement("button",{"aria-label":se,"data-disabled":Ms,"data-close-button":!0,onClick:Ms||!Dn?()=>{}:()=>{var q;wi(),(q=p.onDismiss)==null||q.call(p,p)},className:Nt(N==null?void 0:N.closeButton,(r=p==null?void 0:p.classNames)==null?void 0:r.closeButton)},(n=oe==null?void 0:oe.close)!=null?n:lg):null,p.jsx||A.isValidElement(p.title)?p.jsx?p.jsx:typeof p.title=="function"?p.title():p.title:R.createElement(R.Fragment,null,dt||p.icon||p.promise?R.createElement("div",{"data-icon":"",className:Nt(N==null?void 0:N.icon,(s=p==null?void 0:p.classNames)==null?void 0:s.icon)},p.promise||p.type==="loading"&&!p.icon?p.icon||Yh():null,p.type!=="loading"?p.icon||(oe==null?void 0:oe[dt])||tg(dt):null):null,R.createElement("div",{"data-content":"",className:Nt(N==null?void 0:N.content,(a=p==null?void 0:p.classNames)==null?void 0:a.content)},R.createElement("div",{"data-title":"",className:Nt(N==null?void 0:N.title,(l=p==null?void 0:p.classNames)==null?void 0:l.title)},typeof p.title=="function"?p.title():p.title),p.description?R.createElement("div",{"data-description":"",className:Nt(Z,Hh,N==null?void 0:N.description,(c=p==null?void 0:p.classNames)==null?void 0:c.description)},typeof p.description=="function"?p.description():p.description):null),A.isValidElement(p.cancel)?p.cancel:p.cancel&&Er(p.cancel)?R.createElement("button",{"data-button":!0,"data-cancel":!0,style:p.cancelButtonStyle||ie,onClick:q=>{var he,we;Er(p.cancel)&&Dn&&((we=(he=p.cancel).onClick)==null||we.call(he,q),wi())},className:Nt(N==null?void 0:N.cancelButton,(h=p==null?void 0:p.classNames)==null?void 0:h.cancelButton)},p.cancel.label):null,A.isValidElement(p.action)?p.action:p.action&&Er(p.action)?R.createElement("button",{"data-button":!0,"data-action":!0,style:p.actionButtonStyle||ue,onClick:q=>{var he,we;Er(p.action)&&((we=(he=p.action).onClick)==null||we.call(he,q),!q.defaultPrevented&&wi())},className:Nt(N==null?void 0:N.actionButton,(f=p==null?void 0:p.classNames)==null?void 0:f.actionButton)},p.action.label):null))};function uc(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function Ag(e,t){let i={};return[e,t].forEach((o,r)=>{let n=r===1,s=n?"--mobile-offset":"--offset",a=n?yg:bg;function l(c){["top","right","bottom","left"].forEach(h=>{i[`${s}-${h}`]=typeof c=="number"?`${c}px`:c})}typeof o=="number"||typeof o=="string"?l(o):typeof o=="object"?["top","right","bottom","left"].forEach(c=>{o[c]===void 0?i[`${s}-${c}`]=a:i[`${s}-${c}`]=typeof o[c]=="number"?`${o[c]}px`:o[c]}):l(a)}),i}var Eg=A.forwardRef(function(e,t){let{invert:i,position:o="bottom-right",hotkey:r=["altKey","KeyT"],expand:n,closeButton:s,className:a,offset:l,mobileOffset:c,theme:h="light",richColors:f,duration:g,style:p,visibleToasts:b=wg,toastOptions:w,dir:C=uc(),gap:k=xg,loadingIcon:v,icons:y,containerAriaLabel:S="Notifications",pauseWhenPageIsHidden:T}=e,[L,M]=R.useState([]),O=R.useMemo(()=>Array.from(new Set([o].concat(L.filter(X=>X.position).map(X=>X.position)))),[L,o]),[W,ie]=R.useState([]),[ue,F]=R.useState(!1),[Z,ce]=R.useState(!1),[Pe,ne]=R.useState(h!=="system"?h:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),le=R.useRef(null),Re=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),N=R.useRef(null),oe=R.useRef(!1),se=R.useCallback(X=>{M(re=>{var J;return(J=re.find(Ce=>Ce.id===X.id))!=null&&J.delete||qe.dismiss(X.id),re.filter(({id:Ce})=>Ce!==X.id)})},[]);return R.useEffect(()=>qe.subscribe(X=>{if(X.dismiss){M(re=>re.map(J=>J.id===X.id?{...J,delete:!0}:J));return}setTimeout(()=>{np.flushSync(()=>{M(re=>{let J=re.findIndex(Ce=>Ce.id===X.id);return J!==-1?[...re.slice(0,J),{...re[J],...X},...re.slice(J+1)]:[X,...re]})})})}),[]),R.useEffect(()=>{if(h!=="system"){ne(h);return}if(h==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?ne("dark"):ne("light")),typeof window>"u")return;let X=window.matchMedia("(prefers-color-scheme: dark)");try{X.addEventListener("change",({matches:re})=>{ne(re?"dark":"light")})}catch{X.addListener(({matches:J})=>{try{ne(J?"dark":"light")}catch(Ce){console.error(Ce)}})}},[h]),R.useEffect(()=>{L.length<=1&&F(!1)},[L]),R.useEffect(()=>{let X=re=>{var J,Ce;r.every(Ze=>re[Ze]||re.code===Ze)&&(F(!0),(J=le.current)==null||J.focus()),re.code==="Escape"&&(document.activeElement===le.current||(Ce=le.current)!=null&&Ce.contains(document.activeElement))&&F(!1)};return document.addEventListener("keydown",X),()=>document.removeEventListener("keydown",X)},[r]),R.useEffect(()=>{if(le.current)return()=>{N.current&&(N.current.focus({preventScroll:!0}),N.current=null,oe.current=!1)}},[le.current]),R.createElement("section",{ref:t,"aria-label":`${S} ${Re}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},O.map((X,re)=>{var J;let[Ce,Ze]=X.split("-");return L.length?R.createElement("ol",{key:X,dir:C==="auto"?uc():C,tabIndex:-1,ref:le,className:a,"data-sonner-toaster":!0,"data-theme":Pe,"data-y-position":Ce,"data-lifted":ue&&L.length>1&&!n,"data-x-position":Ze,style:{"--front-toast-height":`${((J=W[0])==null?void 0:J.height)||0}px`,"--width":`${vg}px`,"--gap":`${k}px`,...p,...Ag(l,c)},onBlur:fe=>{oe.current&&!fe.currentTarget.contains(fe.relatedTarget)&&(oe.current=!1,N.current&&(N.current.focus({preventScroll:!0}),N.current=null))},onFocus:fe=>{fe.target instanceof HTMLElement&&fe.target.dataset.dismissible==="false"||oe.current||(oe.current=!0,N.current=fe.relatedTarget)},onMouseEnter:()=>F(!0),onMouseMove:()=>F(!0),onMouseLeave:()=>{Z||F(!1)},onDragEnd:()=>F(!1),onPointerDown:fe=>{fe.target instanceof HTMLElement&&fe.target.dataset.dismissible==="false"||ce(!0)},onPointerUp:()=>ce(!1)},L.filter(fe=>!fe.position&&re===0||fe.position===X).map((fe,zi)=>{var ct,nt;return R.createElement(Sg,{key:fe.id,icons:y,index:zi,toast:fe,defaultRichColors:f,duration:(ct=w==null?void 0:w.duration)!=null?ct:g,className:w==null?void 0:w.className,descriptionClassName:w==null?void 0:w.descriptionClassName,invert:i,visibleToasts:b,closeButton:(nt=w==null?void 0:w.closeButton)!=null?nt:s,interacting:Z,position:X,style:w==null?void 0:w.style,unstyled:w==null?void 0:w.unstyled,classNames:w==null?void 0:w.classNames,cancelButtonStyle:w==null?void 0:w.cancelButtonStyle,actionButtonStyle:w==null?void 0:w.actionButtonStyle,removeToast:se,toasts:L.filter(Ie=>Ie.position==fe.position),heights:W.filter(Ie=>Ie.position==fe.position),setHeights:ie,expandByDefault:n,gap:k,loadingIcon:v,expanded:ue,pauseWhenPageIsHidden:T,swipeDirections:e.swipeDirections})})):null}))});const wu=A.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Ss=A.createContext({}),As=A.createContext(null),Es=typeof document<"u",bl=Es?A.useLayoutEffect:A.useEffect,bu=A.createContext({strict:!1}),yl=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),_g="framerAppearId",yu="data-"+yl(_g);function Pg(e,t,i,o){const{visualElement:r}=A.useContext(Ss),n=A.useContext(bu),s=A.useContext(As),a=A.useContext(wu).reducedMotion,l=A.useRef();o=o||n.renderer,!l.current&&o&&(l.current=o(e,{visualState:t,parent:r,props:i,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:a}));const c=l.current;A.useInsertionEffect(()=>{c&&c.update(i,s)});const h=A.useRef(!!(i[yu]&&!window.HandoffComplete));return bl(()=>{c&&(c.render(),h.current&&c.animationState&&c.animationState.animateChanges())}),A.useEffect(()=>{c&&(c.updateFeatures(),!h.current&&c.animationState&&c.animationState.animateChanges(),h.current&&(h.current=!1,window.HandoffComplete=!0))}),c}function Vn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Tg(e,t,i){return A.useCallback(o=>{o&&e.mount&&e.mount(o),t&&(o?t.mount(o):t.unmount()),i&&(typeof i=="function"?i(o):Vn(i)&&(i.current=o))},[t])}function Fo(e){return typeof e=="string"||Array.isArray(e)}function _s(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const vl=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],xl=["initial",...vl];function Ps(e){return _s(e.animate)||xl.some(t=>Fo(e[t]))}function vu(e){return!!(Ps(e)||e.variants)}function Ng(e,t){if(Ps(e)){const{initial:i,animate:o}=e;return{initial:i===!1||Fo(i)?i:void 0,animate:Fo(o)?o:void 0}}return e.inherit!==!1?t:{}}function Rg(e){const{initial:t,animate:i}=Ng(e,A.useContext(Ss));return A.useMemo(()=>({initial:t,animate:i}),[hc(t),hc(i)])}function hc(e){return Array.isArray(e)?e.join(" "):e}const pc={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},zo={};for(const e in pc)zo[e]={isEnabled:t=>pc[e].some(i=>!!t[i])};function jg(e){for(const t in e)zo[t]={...zo[t],...e[t]}}const Cl=A.createContext({}),xu=A.createContext({}),Ig=Symbol.for("motionComponentSymbol");function Dg({preloadedFeatures:e,createVisualElement:t,useRender:i,useVisualState:o,Component:r}){e&&jg(e);function n(a,l){let c;const h={...A.useContext(wu),...a,layoutId:Lg(a)},{isStatic:f}=h,g=Rg(a),p=o(a,f);if(!f&&Es){g.visualElement=Pg(r,p,h,t);const b=A.useContext(xu),w=A.useContext(bu).strict;g.visualElement&&(c=g.visualElement.loadFeatures(h,w,e,b))}return A.createElement(Ss.Provider,{value:g},c&&g.visualElement?A.createElement(c,{visualElement:g.visualElement,...h}):null,i(r,a,Tg(p,g.visualElement,l),p,f,g.visualElement))}const s=A.forwardRef(n);return s[Ig]=r,s}function Lg({layoutId:e}){const t=A.useContext(Cl).id;return t&&e!==void 0?t+"-"+e:e}function Bg(e){function t(o,r={}){return Dg(e(o,r))}if(typeof Proxy>"u")return t;const i=new Map;return new Proxy(t,{get:(o,r)=>(i.has(r)||i.set(r,t(r)),i.get(r))})}const Mg=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function $l(e){return typeof e!="string"||e.includes("-")?!1:!!(Mg.indexOf(e)>-1||/[A-Z]/.test(e))}const os={};function Og(e){Object.assign(os,e)}const pr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Rn=new Set(pr);function Cu(e,{layout:t,layoutId:i}){return Rn.has(e)||e.startsWith("origin")||(t||i!==void 0)&&(!!os[e]||e==="opacity")}const Je=e=>!!(e&&e.getVelocity),Wg={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Vg=pr.length;function Fg(e,{enableHardwareAcceleration:t=!0,allowTransformNone:i=!0},o,r){let n="";for(let s=0;s<Vg;s++){const a=pr[s];if(e[a]!==void 0){const l=Wg[a]||a;n+=`${l}(${e[a]}) `}}return t&&!e.z&&(n+="translateZ(0)"),n=n.trim(),r?n=r(e,o?"":n):i&&o&&(n="none"),n}const $u=e=>t=>typeof t=="string"&&t.startsWith(e),ku=$u("--"),Ma=$u("var(--"),zg=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,Ug=(e,t)=>t&&typeof e=="number"?t.transform(e):e,ji=(e,t,i)=>Math.min(Math.max(i,e),t),jn={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},So={...jn,transform:e=>ji(0,1,e)},_r={...jn,default:1},Ao=e=>Math.round(e*1e5)/1e5,Ts=/(-)?([\d]*\.?[\d])+/g,Su=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Hg=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function fr(e){return typeof e=="string"}const mr=e=>({test:t=>fr(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),vi=mr("deg"),Ot=mr("%"),K=mr("px"),Gg=mr("vh"),Zg=mr("vw"),fc={...Ot,parse:e=>Ot.parse(e)/100,transform:e=>Ot.transform(e*100)},mc={...jn,transform:Math.round},Au={borderWidth:K,borderTopWidth:K,borderRightWidth:K,borderBottomWidth:K,borderLeftWidth:K,borderRadius:K,radius:K,borderTopLeftRadius:K,borderTopRightRadius:K,borderBottomRightRadius:K,borderBottomLeftRadius:K,width:K,maxWidth:K,height:K,maxHeight:K,size:K,top:K,right:K,bottom:K,left:K,padding:K,paddingTop:K,paddingRight:K,paddingBottom:K,paddingLeft:K,margin:K,marginTop:K,marginRight:K,marginBottom:K,marginLeft:K,rotate:vi,rotateX:vi,rotateY:vi,rotateZ:vi,scale:_r,scaleX:_r,scaleY:_r,scaleZ:_r,skew:vi,skewX:vi,skewY:vi,distance:K,translateX:K,translateY:K,translateZ:K,x:K,y:K,z:K,perspective:K,transformPerspective:K,opacity:So,originX:fc,originY:fc,originZ:K,zIndex:mc,fillOpacity:So,strokeOpacity:So,numOctaves:mc};function kl(e,t,i,o){const{style:r,vars:n,transform:s,transformOrigin:a}=e;let l=!1,c=!1,h=!0;for(const f in t){const g=t[f];if(ku(f)){n[f]=g;continue}const p=Au[f],b=Ug(g,p);if(Rn.has(f)){if(l=!0,s[f]=b,!h)continue;g!==(p.default||0)&&(h=!1)}else f.startsWith("origin")?(c=!0,a[f]=b):r[f]=b}if(t.transform||(l||o?r.transform=Fg(e.transform,i,h,o):r.transform&&(r.transform="none")),c){const{originX:f="50%",originY:g="50%",originZ:p=0}=a;r.transformOrigin=`${f} ${g} ${p}`}}const Sl=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Eu(e,t,i){for(const o in t)!Je(t[o])&&!Cu(o,i)&&(e[o]=t[o])}function Kg({transformTemplate:e},t,i){return A.useMemo(()=>{const o=Sl();return kl(o,t,{enableHardwareAcceleration:!i},e),Object.assign({},o.vars,o.style)},[t])}function qg(e,t,i){const o=e.style||{},r={};return Eu(r,o,e),Object.assign(r,Kg(e,t,i)),e.transformValues?e.transformValues(r):r}function Yg(e,t,i){const o={},r=qg(e,t,i);return e.drag&&e.dragListener!==!1&&(o.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(o.tabIndex=0),o.style=r,o}const Xg=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function rs(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Xg.has(e)}let _u=e=>!rs(e);function Qg(e){e&&(_u=t=>t.startsWith("on")?!rs(t):e(t))}try{Qg(require("@emotion/is-prop-valid").default)}catch{}function Jg(e,t,i){const o={};for(const r in e)r==="values"&&typeof e.values=="object"||(_u(r)||i===!0&&rs(r)||!t&&!rs(r)||e.draggable&&r.startsWith("onDrag"))&&(o[r]=e[r]);return o}function gc(e,t,i){return typeof e=="string"?e:K.transform(t+i*e)}function e2(e,t,i){const o=gc(t,e.x,e.width),r=gc(i,e.y,e.height);return`${o} ${r}`}const t2={offset:"stroke-dashoffset",array:"stroke-dasharray"},i2={offset:"strokeDashoffset",array:"strokeDasharray"};function n2(e,t,i=1,o=0,r=!0){e.pathLength=1;const n=r?t2:i2;e[n.offset]=K.transform(-o);const s=K.transform(t),a=K.transform(i);e[n.array]=`${s} ${a}`}function Al(e,{attrX:t,attrY:i,attrScale:o,originX:r,originY:n,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...c},h,f,g){if(kl(e,c,h,g),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:b,dimensions:w}=e;p.transform&&(w&&(b.transform=p.transform),delete p.transform),w&&(r!==void 0||n!==void 0||b.transform)&&(b.transformOrigin=e2(w,r!==void 0?r:.5,n!==void 0?n:.5)),t!==void 0&&(p.x=t),i!==void 0&&(p.y=i),o!==void 0&&(p.scale=o),s!==void 0&&n2(p,s,a,l,!1)}const Pu=()=>({...Sl(),attrs:{}}),El=e=>typeof e=="string"&&e.toLowerCase()==="svg";function o2(e,t,i,o){const r=A.useMemo(()=>{const n=Pu();return Al(n,t,{enableHardwareAcceleration:!1},El(o),e.transformTemplate),{...n.attrs,style:{...n.style}}},[t]);if(e.style){const n={};Eu(n,e.style,e),r.style={...n,...r.style}}return r}function r2(e=!1){return(i,o,r,{latestValues:n},s)=>{const l=($l(i)?o2:Yg)(o,n,s,i),h={...Jg(o,typeof i=="string",e),...l,ref:r},{children:f}=o,g=A.useMemo(()=>Je(f)?f.get():f,[f]);return A.createElement(i,{...h,children:g})}}function Tu(e,{style:t,vars:i},o,r){Object.assign(e.style,t,r&&r.getProjectionStyles(o));for(const n in i)e.style.setProperty(n,i[n])}const Nu=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Ru(e,t,i,o){Tu(e,t,void 0,o);for(const r in t.attrs)e.setAttribute(Nu.has(r)?r:yl(r),t.attrs[r])}function _l(e,t){const{style:i}=e,o={};for(const r in i)(Je(i[r])||t.style&&Je(t.style[r])||Cu(r,e))&&(o[r]=i[r]);return o}function ju(e,t){const i=_l(e,t);for(const o in e)if(Je(e[o])||Je(t[o])){const r=pr.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;i[r]=e[o]}return i}function Pl(e,t,i,o={},r={}){return typeof t=="function"&&(t=t(i!==void 0?i:e.custom,o,r)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(i!==void 0?i:e.custom,o,r)),t}function Iu(e){const t=A.useRef(null);return t.current===null&&(t.current=e()),t.current}const ss=e=>Array.isArray(e),s2=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),a2=e=>ss(e)?e[e.length-1]||0:e;function jr(e){const t=Je(e)?e.get():e;return s2(t)?t.toValue():t}function l2({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:i},o,r,n){const s={latestValues:c2(o,r,n,e),renderState:t()};return i&&(s.mount=a=>i(o,a,s)),s}const Du=e=>(t,i)=>{const o=A.useContext(Ss),r=A.useContext(As),n=()=>l2(e,t,o,r);return i?n():Iu(n)};function c2(e,t,i,o){const r={},n=o(e,{});for(const g in n)r[g]=jr(n[g]);let{initial:s,animate:a}=e;const l=Ps(e),c=vu(e);t&&c&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let h=i?i.initial===!1:!1;h=h||s===!1;const f=h?a:s;return f&&typeof f!="boolean"&&!_s(f)&&(Array.isArray(f)?f:[f]).forEach(p=>{const b=Pl(e,p);if(!b)return;const{transitionEnd:w,transition:C,...k}=b;for(const v in k){let y=k[v];if(Array.isArray(y)){const S=h?y.length-1:0;y=y[S]}y!==null&&(r[v]=y)}for(const v in w)r[v]=w[v]}),r}const Se=e=>e;class wc{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const i=this.order.indexOf(t);i!==-1&&(this.order.splice(i,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function d2(e){let t=new wc,i=new wc,o=0,r=!1,n=!1;const s=new WeakSet,a={schedule:(l,c=!1,h=!1)=>{const f=h&&r,g=f?t:i;return c&&s.add(l),g.add(l)&&f&&r&&(o=t.order.length),l},cancel:l=>{i.remove(l),s.delete(l)},process:l=>{if(r){n=!0;return}if(r=!0,[t,i]=[i,t],i.clear(),o=t.order.length,o)for(let c=0;c<o;c++){const h=t.order[c];h(l),s.has(h)&&(a.schedule(h),e())}r=!1,n&&(n=!1,a.process(l))}};return a}const Pr=["prepare","read","update","preRender","render","postRender"],u2=40;function h2(e,t){let i=!1,o=!0;const r={delta:0,timestamp:0,isProcessing:!1},n=Pr.reduce((f,g)=>(f[g]=d2(()=>i=!0),f),{}),s=f=>n[f].process(r),a=()=>{const f=performance.now();i=!1,r.delta=o?1e3/60:Math.max(Math.min(f-r.timestamp,u2),1),r.timestamp=f,r.isProcessing=!0,Pr.forEach(s),r.isProcessing=!1,i&&t&&(o=!1,e(a))},l=()=>{i=!0,o=!0,r.isProcessing||e(a)};return{schedule:Pr.reduce((f,g)=>{const p=n[g];return f[g]=(b,w=!1,C=!1)=>(i||l(),p.schedule(b,w,C)),f},{}),cancel:f=>Pr.forEach(g=>n[g].cancel(f)),state:r,steps:n}}const{schedule:ge,cancel:hi,state:De,steps:Ys}=h2(typeof requestAnimationFrame<"u"?requestAnimationFrame:Se,!0),p2={useVisualState:Du({scrapeMotionValuesFromProps:ju,createRenderState:Pu,onMount:(e,t,{renderState:i,latestValues:o})=>{ge.read(()=>{try{i.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{i.dimensions={x:0,y:0,width:0,height:0}}}),ge.render(()=>{Al(i,o,{enableHardwareAcceleration:!1},El(t.tagName),e.transformTemplate),Ru(t,i)})}})},f2={useVisualState:Du({scrapeMotionValuesFromProps:_l,createRenderState:Sl})};function m2(e,{forwardMotionProps:t=!1},i,o){return{...$l(e)?p2:f2,preloadedFeatures:i,useRender:r2(t),createVisualElement:o,Component:e}}function ei(e,t,i,o={passive:!0}){return e.addEventListener(t,i,o),()=>e.removeEventListener(t,i)}const Lu=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Ns(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const g2=e=>t=>Lu(t)&&e(t,Ns(t));function ti(e,t,i,o){return ei(e,t,g2(i),o)}const w2=(e,t)=>i=>t(e(i)),ki=(...e)=>e.reduce(w2);function Bu(e){let t=null;return()=>{const i=()=>{t=null};return t===null?(t=e,i):!1}}const bc=Bu("dragHorizontal"),yc=Bu("dragVertical");function Mu(e){let t=!1;if(e==="y")t=yc();else if(e==="x")t=bc();else{const i=bc(),o=yc();i&&o?t=()=>{i(),o()}:(i&&i(),o&&o())}return t}function Ou(){const e=Mu(!0);return e?(e(),!1):!0}class Fi{constructor(t){this.isMounted=!1,this.node=t}update(){}}function vc(e,t){const i="pointer"+(t?"enter":"leave"),o="onHover"+(t?"Start":"End"),r=(n,s)=>{if(n.pointerType==="touch"||Ou())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[o]&&ge.update(()=>a[o](n,s))};return ti(e.current,i,r,{passive:!e.getProps()[o]})}class b2 extends Fi{mount(){this.unmount=ki(vc(this.node,!0),vc(this.node,!1))}unmount(){}}class y2 extends Fi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ki(ei(this.node.current,"focus",()=>this.onFocus()),ei(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Wu=(e,t)=>t?e===t?!0:Wu(e,t.parentElement):!1;function Xs(e,t){if(!t)return;const i=new PointerEvent("pointer"+e);t(i,Ns(i))}class v2 extends Fi{constructor(){super(...arguments),this.removeStartListeners=Se,this.removeEndListeners=Se,this.removeAccessibleListeners=Se,this.startPointerPress=(t,i)=>{if(this.isPressing)return;this.removeEndListeners();const o=this.node.getProps(),n=ti(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:h,globalTapTarget:f}=this.node.getProps();ge.update(()=>{!f&&!Wu(this.node.current,a.target)?h&&h(a,l):c&&c(a,l)})},{passive:!(o.onTap||o.onPointerUp)}),s=ti(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(o.onTapCancel||o.onPointerCancel)});this.removeEndListeners=ki(n,s),this.startPress(t,i)},this.startAccessiblePress=()=>{const t=n=>{if(n.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||Xs("up",(l,c)=>{const{onTap:h}=this.node.getProps();h&&ge.update(()=>h(l,c))})};this.removeEndListeners(),this.removeEndListeners=ei(this.node.current,"keyup",s),Xs("down",(a,l)=>{this.startPress(a,l)})},i=ei(this.node.current,"keydown",t),o=()=>{this.isPressing&&Xs("cancel",(n,s)=>this.cancelPress(n,s))},r=ei(this.node.current,"blur",o);this.removeAccessibleListeners=ki(i,r)}}startPress(t,i){this.isPressing=!0;const{onTapStart:o,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),o&&ge.update(()=>o(t,i))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Ou()}cancelPress(t,i){if(!this.checkPressEnd())return;const{onTapCancel:o}=this.node.getProps();o&&ge.update(()=>o(t,i))}mount(){const t=this.node.getProps(),i=ti(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),o=ei(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=ki(i,o)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Oa=new WeakMap,Qs=new WeakMap,x2=e=>{const t=Oa.get(e.target);t&&t(e)},C2=e=>{e.forEach(x2)};function $2({root:e,...t}){const i=e||document;Qs.has(i)||Qs.set(i,{});const o=Qs.get(i),r=JSON.stringify(t);return o[r]||(o[r]=new IntersectionObserver(C2,{root:e,...t})),o[r]}function k2(e,t,i){const o=$2(t);return Oa.set(e,i),o.observe(e),()=>{Oa.delete(e),o.unobserve(e)}}const S2={some:0,all:1};class A2 extends Fi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:i,margin:o,amount:r="some",once:n}=t,s={root:i?i.current:void 0,rootMargin:o,threshold:typeof r=="number"?r:S2[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,n&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:h,onViewportLeave:f}=this.node.getProps(),g=c?h:f;g&&g(l)};return k2(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:i}=this.node;["amount","margin","root"].some(E2(t,i))&&this.startObserver()}unmount(){}}function E2({viewport:e={}},{viewport:t={}}={}){return i=>e[i]!==t[i]}const _2={inView:{Feature:A2},tap:{Feature:v2},focus:{Feature:y2},hover:{Feature:b2}};function Vu(e,t){if(!Array.isArray(t))return!1;const i=t.length;if(i!==e.length)return!1;for(let o=0;o<i;o++)if(t[o]!==e[o])return!1;return!0}function P2(e){const t={};return e.values.forEach((i,o)=>t[o]=i.get()),t}function T2(e){const t={};return e.values.forEach((i,o)=>t[o]=i.getVelocity()),t}function Rs(e,t,i){const o=e.getProps();return Pl(o,t,i!==void 0?i:o.custom,P2(e),T2(e))}let Tl=Se;const tn=e=>e*1e3,ii=e=>e/1e3,N2={current:!1},Fu=e=>Array.isArray(e)&&typeof e[0]=="number";function zu(e){return!!(!e||typeof e=="string"&&Uu[e]||Fu(e)||Array.isArray(e)&&e.every(zu))}const xo=([e,t,i,o])=>`cubic-bezier(${e}, ${t}, ${i}, ${o})`,Uu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:xo([0,.65,.55,1]),circOut:xo([.55,0,1,.45]),backIn:xo([.31,.01,.66,-.59]),backOut:xo([.33,1.53,.69,.99])};function Hu(e){if(e)return Fu(e)?xo(e):Array.isArray(e)?e.map(Hu):Uu[e]}function R2(e,t,i,{delay:o=0,duration:r,repeat:n=0,repeatType:s="loop",ease:a,times:l}={}){const c={[t]:i};l&&(c.offset=l);const h=Hu(a);return Array.isArray(h)&&(c.easing=h),e.animate(c,{delay:o,duration:r,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:n+1,direction:s==="reverse"?"alternate":"normal"})}function j2(e,{repeat:t,repeatType:i="loop"}){const o=t&&i!=="loop"&&t%2===1?0:e.length-1;return e[o]}const Gu=(e,t,i)=>(((1-3*i+3*t)*e+(3*i-6*t))*e+3*t)*e,I2=1e-7,D2=12;function L2(e,t,i,o,r){let n,s,a=0;do s=t+(i-t)/2,n=Gu(s,o,r)-e,n>0?i=s:t=s;while(Math.abs(n)>I2&&++a<D2);return s}function gr(e,t,i,o){if(e===t&&i===o)return Se;const r=n=>L2(n,0,1,e,i);return n=>n===0||n===1?n:Gu(r(n),t,o)}const B2=gr(.42,0,1,1),M2=gr(0,0,.58,1),Zu=gr(.42,0,.58,1),O2=e=>Array.isArray(e)&&typeof e[0]!="number",Ku=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,qu=e=>t=>1-e(1-t),Nl=e=>1-Math.sin(Math.acos(e)),Yu=qu(Nl),W2=Ku(Nl),Xu=gr(.33,1.53,.69,.99),Rl=qu(Xu),V2=Ku(Rl),F2=e=>(e*=2)<1?.5*Rl(e):.5*(2-Math.pow(2,-10*(e-1))),z2={linear:Se,easeIn:B2,easeInOut:Zu,easeOut:M2,circIn:Nl,circInOut:W2,circOut:Yu,backIn:Rl,backInOut:V2,backOut:Xu,anticipate:F2},xc=e=>{if(Array.isArray(e)){Tl(e.length===4);const[t,i,o,r]=e;return gr(t,i,o,r)}else if(typeof e=="string")return z2[e];return e},jl=(e,t)=>i=>!!(fr(i)&&Hg.test(i)&&i.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(i,t)),Qu=(e,t,i)=>o=>{if(!fr(o))return o;const[r,n,s,a]=o.match(Ts);return{[e]:parseFloat(r),[t]:parseFloat(n),[i]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},U2=e=>ji(0,255,e),Js={...jn,transform:e=>Math.round(U2(e))},Qi={test:jl("rgb","red"),parse:Qu("red","green","blue"),transform:({red:e,green:t,blue:i,alpha:o=1})=>"rgba("+Js.transform(e)+", "+Js.transform(t)+", "+Js.transform(i)+", "+Ao(So.transform(o))+")"};function H2(e){let t="",i="",o="",r="";return e.length>5?(t=e.substring(1,3),i=e.substring(3,5),o=e.substring(5,7),r=e.substring(7,9)):(t=e.substring(1,2),i=e.substring(2,3),o=e.substring(3,4),r=e.substring(4,5),t+=t,i+=i,o+=o,r+=r),{red:parseInt(t,16),green:parseInt(i,16),blue:parseInt(o,16),alpha:r?parseInt(r,16)/255:1}}const Wa={test:jl("#"),parse:H2,transform:Qi.transform},Fn={test:jl("hsl","hue"),parse:Qu("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:i,alpha:o=1})=>"hsla("+Math.round(e)+", "+Ot.transform(Ao(t))+", "+Ot.transform(Ao(i))+", "+Ao(So.transform(o))+")"},ze={test:e=>Qi.test(e)||Wa.test(e)||Fn.test(e),parse:e=>Qi.test(e)?Qi.parse(e):Fn.test(e)?Fn.parse(e):Wa.parse(e),transform:e=>fr(e)?e:e.hasOwnProperty("red")?Qi.transform(e):Fn.transform(e)},xe=(e,t,i)=>-i*e+i*t+e;function ea(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*(2/3-i)*6:e}function G2({hue:e,saturation:t,lightness:i,alpha:o}){e/=360,t/=100,i/=100;let r=0,n=0,s=0;if(!t)r=n=s=i;else{const a=i<.5?i*(1+t):i+t-i*t,l=2*i-a;r=ea(l,a,e+1/3),n=ea(l,a,e),s=ea(l,a,e-1/3)}return{red:Math.round(r*255),green:Math.round(n*255),blue:Math.round(s*255),alpha:o}}const ta=(e,t,i)=>{const o=e*e;return Math.sqrt(Math.max(0,i*(t*t-o)+o))},Z2=[Wa,Qi,Fn],K2=e=>Z2.find(t=>t.test(e));function Cc(e){const t=K2(e);let i=t.parse(e);return t===Fn&&(i=G2(i)),i}const Ju=(e,t)=>{const i=Cc(e),o=Cc(t),r={...i};return n=>(r.red=ta(i.red,o.red,n),r.green=ta(i.green,o.green,n),r.blue=ta(i.blue,o.blue,n),r.alpha=xe(i.alpha,o.alpha,n),Qi.transform(r))};function q2(e){var t,i;return isNaN(e)&&fr(e)&&(((t=e.match(Ts))===null||t===void 0?void 0:t.length)||0)+(((i=e.match(Su))===null||i===void 0?void 0:i.length)||0)>0}const eh={regex:zg,countKey:"Vars",token:"${v}",parse:Se},th={regex:Su,countKey:"Colors",token:"${c}",parse:ze.parse},ih={regex:Ts,countKey:"Numbers",token:"${n}",parse:jn.parse};function ia(e,{regex:t,countKey:i,token:o,parse:r}){const n=e.tokenised.match(t);n&&(e["num"+i]=n.length,e.tokenised=e.tokenised.replace(t,o),e.values.push(...n.map(r)))}function as(e){const t=e.toString(),i={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return i.value.includes("var(--")&&ia(i,eh),ia(i,th),ia(i,ih),i}function nh(e){return as(e).values}function oh(e){const{values:t,numColors:i,numVars:o,tokenised:r}=as(e),n=t.length;return s=>{let a=r;for(let l=0;l<n;l++)l<o?a=a.replace(eh.token,s[l]):l<o+i?a=a.replace(th.token,ze.transform(s[l])):a=a.replace(ih.token,Ao(s[l]));return a}}const Y2=e=>typeof e=="number"?0:e;function X2(e){const t=nh(e);return oh(e)(t.map(Y2))}const Ii={test:q2,parse:nh,createTransformer:oh,getAnimatableNone:X2},rh=(e,t)=>i=>`${i>0?t:e}`;function sh(e,t){return typeof e=="number"?i=>xe(e,t,i):ze.test(e)?Ju(e,t):e.startsWith("var(")?rh(e,t):lh(e,t)}const ah=(e,t)=>{const i=[...e],o=i.length,r=e.map((n,s)=>sh(n,t[s]));return n=>{for(let s=0;s<o;s++)i[s]=r[s](n);return i}},Q2=(e,t)=>{const i={...e,...t},o={};for(const r in i)e[r]!==void 0&&t[r]!==void 0&&(o[r]=sh(e[r],t[r]));return r=>{for(const n in o)i[n]=o[n](r);return i}},lh=(e,t)=>{const i=Ii.createTransformer(t),o=as(e),r=as(t);return o.numVars===r.numVars&&o.numColors===r.numColors&&o.numNumbers>=r.numNumbers?ki(ah(o.values,r.values),i):rh(e,t)},Uo=(e,t,i)=>{const o=t-e;return o===0?1:(i-e)/o},$c=(e,t)=>i=>xe(e,t,i);function J2(e){return typeof e=="number"?$c:typeof e=="string"?ze.test(e)?Ju:lh:Array.isArray(e)?ah:typeof e=="object"?Q2:$c}function ew(e,t,i){const o=[],r=i||J2(e[0]),n=e.length-1;for(let s=0;s<n;s++){let a=r(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||Se:t;a=ki(l,a)}o.push(a)}return o}function ch(e,t,{clamp:i=!0,ease:o,mixer:r}={}){const n=e.length;if(Tl(n===t.length),n===1)return()=>t[0];e[0]>e[n-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=ew(t,o,r),a=s.length,l=c=>{let h=0;if(a>1)for(;h<e.length-2&&!(c<e[h+1]);h++);const f=Uo(e[h],e[h+1],c);return s[h](f)};return i?c=>l(ji(e[0],e[n-1],c)):l}function tw(e,t){const i=e[e.length-1];for(let o=1;o<=t;o++){const r=Uo(0,t,o);e.push(xe(i,1,r))}}function iw(e){const t=[0];return tw(t,e.length-1),t}function nw(e,t){return e.map(i=>i*t)}function ow(e,t){return e.map(()=>t||Zu).splice(0,e.length-1)}function ls({duration:e=300,keyframes:t,times:i,ease:o="easeInOut"}){const r=O2(o)?o.map(xc):xc(o),n={done:!1,value:t[0]},s=nw(i&&i.length===t.length?i:iw(t),e),a=ch(s,t,{ease:Array.isArray(r)?r:ow(t,r)});return{calculatedDuration:e,next:l=>(n.value=a(l),n.done=l>=e,n)}}function dh(e,t){return t?e*(1e3/t):0}const rw=5;function uh(e,t,i){const o=Math.max(t-rw,0);return dh(i-e(o),t-o)}const na=.001,sw=.01,aw=10,lw=.05,cw=1;function dw({duration:e=800,bounce:t=.25,velocity:i=0,mass:o=1}){let r,n,s=1-t;s=ji(lw,cw,s),e=ji(sw,aw,ii(e)),s<1?(r=c=>{const h=c*s,f=h*e,g=h-i,p=Va(c,s),b=Math.exp(-f);return na-g/p*b},n=c=>{const f=c*s*e,g=f*i+i,p=Math.pow(s,2)*Math.pow(c,2)*e,b=Math.exp(-f),w=Va(Math.pow(c,2),s);return(-r(c)+na>0?-1:1)*((g-p)*b)/w}):(r=c=>{const h=Math.exp(-c*e),f=(c-i)*e+1;return-na+h*f},n=c=>{const h=Math.exp(-c*e),f=(i-c)*(e*e);return h*f});const a=5/e,l=hw(r,n,a);if(e=tn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const c=Math.pow(l,2)*o;return{stiffness:c,damping:s*2*Math.sqrt(o*c),duration:e}}}const uw=12;function hw(e,t,i){let o=i;for(let r=1;r<uw;r++)o=o-e(o)/t(o);return o}function Va(e,t){return e*Math.sqrt(1-t*t)}const pw=["duration","bounce"],fw=["stiffness","damping","mass"];function kc(e,t){return t.some(i=>e[i]!==void 0)}function mw(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!kc(e,fw)&&kc(e,pw)){const i=dw(e);t={...t,...i,mass:1},t.isResolvedFromDuration=!0}return t}function hh({keyframes:e,restDelta:t,restSpeed:i,...o}){const r=e[0],n=e[e.length-1],s={done:!1,value:r},{stiffness:a,damping:l,mass:c,duration:h,velocity:f,isResolvedFromDuration:g}=mw({...o,velocity:-ii(o.velocity||0)}),p=f||0,b=l/(2*Math.sqrt(a*c)),w=n-r,C=ii(Math.sqrt(a/c)),k=Math.abs(w)<5;i||(i=k?.01:2),t||(t=k?.005:.5);let v;if(b<1){const y=Va(C,b);v=S=>{const T=Math.exp(-b*C*S);return n-T*((p+b*C*w)/y*Math.sin(y*S)+w*Math.cos(y*S))}}else if(b===1)v=y=>n-Math.exp(-C*y)*(w+(p+C*w)*y);else{const y=C*Math.sqrt(b*b-1);v=S=>{const T=Math.exp(-b*C*S),L=Math.min(y*S,300);return n-T*((p+b*C*w)*Math.sinh(L)+y*w*Math.cosh(L))/y}}return{calculatedDuration:g&&h||null,next:y=>{const S=v(y);if(g)s.done=y>=h;else{let T=p;y!==0&&(b<1?T=uh(v,y,S):T=0);const L=Math.abs(T)<=i,M=Math.abs(n-S)<=t;s.done=L&&M}return s.value=s.done?n:S,s}}}function Sc({keyframes:e,velocity:t=0,power:i=.8,timeConstant:o=325,bounceDamping:r=10,bounceStiffness:n=500,modifyTarget:s,min:a,max:l,restDelta:c=.5,restSpeed:h}){const f=e[0],g={done:!1,value:f},p=O=>a!==void 0&&O<a||l!==void 0&&O>l,b=O=>a===void 0?l:l===void 0||Math.abs(a-O)<Math.abs(l-O)?a:l;let w=i*t;const C=f+w,k=s===void 0?C:s(C);k!==C&&(w=k-f);const v=O=>-w*Math.exp(-O/o),y=O=>k+v(O),S=O=>{const W=v(O),ie=y(O);g.done=Math.abs(W)<=c,g.value=g.done?k:ie};let T,L;const M=O=>{p(g.value)&&(T=O,L=hh({keyframes:[g.value,b(g.value)],velocity:uh(y,O,g.value),damping:r,stiffness:n,restDelta:c,restSpeed:h}))};return M(0),{calculatedDuration:null,next:O=>{let W=!1;return!L&&T===void 0&&(W=!0,S(O),M(O)),T!==void 0&&O>T?L.next(O-T):(!W&&S(O),g)}}}const gw=e=>{const t=({timestamp:i})=>e(i);return{start:()=>ge.update(t,!0),stop:()=>hi(t),now:()=>De.isProcessing?De.timestamp:performance.now()}},Ac=2e4;function Ec(e){let t=0;const i=50;let o=e.next(t);for(;!o.done&&t<Ac;)t+=i,o=e.next(t);return t>=Ac?1/0:t}const ww={decay:Sc,inertia:Sc,tween:ls,keyframes:ls,spring:hh};function cs({autoplay:e=!0,delay:t=0,driver:i=gw,keyframes:o,type:r="keyframes",repeat:n=0,repeatDelay:s=0,repeatType:a="loop",onPlay:l,onStop:c,onComplete:h,onUpdate:f,...g}){let p=1,b=!1,w,C;const k=()=>{C=new Promise(se=>{w=se})};k();let v;const y=ww[r]||ls;let S;y!==ls&&typeof o[0]!="number"&&(S=ch([0,100],o,{clamp:!1}),o=[0,100]);const T=y({...g,keyframes:o});let L;a==="mirror"&&(L=y({...g,keyframes:[...o].reverse(),velocity:-(g.velocity||0)}));let M="idle",O=null,W=null,ie=null;T.calculatedDuration===null&&n&&(T.calculatedDuration=Ec(T));const{calculatedDuration:ue}=T;let F=1/0,Z=1/0;ue!==null&&(F=ue+s,Z=F*(n+1)-s);let ce=0;const Pe=se=>{if(W===null)return;p>0&&(W=Math.min(W,se)),p<0&&(W=Math.min(se-Z/p,W)),O!==null?ce=O:ce=Math.round(se-W)*p;const X=ce-t*(p>=0?1:-1),re=p>=0?X<0:X>Z;ce=Math.max(X,0),M==="finished"&&O===null&&(ce=Z);let J=ce,Ce=T;if(n){const ct=Math.min(ce,Z)/F;let nt=Math.floor(ct),Ie=ct%1;!Ie&&ct>=1&&(Ie=1),Ie===1&&nt--,nt=Math.min(nt,n+1),!!(nt%2)&&(a==="reverse"?(Ie=1-Ie,s&&(Ie-=s/F)):a==="mirror"&&(Ce=L)),J=ji(0,1,Ie)*F}const Ze=re?{done:!1,value:o[0]}:Ce.next(J);S&&(Ze.value=S(Ze.value));let{done:fe}=Ze;!re&&ue!==null&&(fe=p>=0?ce>=Z:ce<=0);const zi=O===null&&(M==="finished"||M==="running"&&fe);return f&&f(Ze.value),zi&&Re(),Ze},ne=()=>{v&&v.stop(),v=void 0},le=()=>{M="idle",ne(),w(),k(),W=ie=null},Re=()=>{M="finished",h&&h(),ne(),w()},N=()=>{if(b)return;v||(v=i(Pe));const se=v.now();l&&l(),O!==null?W=se-O:(!W||M==="finished")&&(W=se),M==="finished"&&k(),ie=W,O=null,M="running",v.start()};e&&N();const oe={then(se,X){return C.then(se,X)},get time(){return ii(ce)},set time(se){se=tn(se),ce=se,O!==null||!v||p===0?O=se:W=v.now()-se/p},get duration(){const se=T.calculatedDuration===null?Ec(T):T.calculatedDuration;return ii(se)},get speed(){return p},set speed(se){se===p||!v||(p=se,oe.time=ii(ce))},get state(){return M},play:N,pause:()=>{M="paused",O=ce},stop:()=>{b=!0,M!=="idle"&&(M="idle",c&&c(),le())},cancel:()=>{ie!==null&&Pe(ie),le()},complete:()=>{M="finished"},sample:se=>(W=0,Pe(se))};return oe}function bw(e){let t;return()=>(t===void 0&&(t=e()),t)}const yw=bw(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),vw=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Tr=10,xw=2e4,Cw=(e,t)=>t.type==="spring"||e==="backgroundColor"||!zu(t.ease);function $w(e,t,{onUpdate:i,onComplete:o,...r}){if(!(yw()&&vw.has(t)&&!r.repeatDelay&&r.repeatType!=="mirror"&&r.damping!==0&&r.type!=="inertia"))return!1;let s=!1,a,l,c=!1;const h=()=>{l=new Promise(y=>{a=y})};h();let{keyframes:f,duration:g=300,ease:p,times:b}=r;if(Cw(t,r)){const y=cs({...r,repeat:0,delay:0});let S={done:!1,value:f[0]};const T=[];let L=0;for(;!S.done&&L<xw;)S=y.sample(L),T.push(S.value),L+=Tr;b=void 0,f=T,g=L-Tr,p="linear"}const w=R2(e.owner.current,t,f,{...r,duration:g,ease:p,times:b}),C=()=>{c=!1,w.cancel()},k=()=>{c=!0,ge.update(C),a(),h()};return w.onfinish=()=>{c||(e.set(j2(f,r)),o&&o(),k())},{then(y,S){return l.then(y,S)},attachTimeline(y){return w.timeline=y,w.onfinish=null,Se},get time(){return ii(w.currentTime||0)},set time(y){w.currentTime=tn(y)},get speed(){return w.playbackRate},set speed(y){w.playbackRate=y},get duration(){return ii(g)},play:()=>{s||(w.play(),hi(C))},pause:()=>w.pause(),stop:()=>{if(s=!0,w.playState==="idle")return;const{currentTime:y}=w;if(y){const S=cs({...r,autoplay:!1});e.setWithVelocity(S.sample(y-Tr).value,S.sample(y).value,Tr)}k()},complete:()=>{c||w.finish()},cancel:k}}function kw({keyframes:e,delay:t,onUpdate:i,onComplete:o}){const r=()=>(i&&i(e[e.length-1]),o&&o(),{time:0,speed:1,duration:0,play:Se,pause:Se,stop:Se,then:n=>(n(),Promise.resolve()),cancel:Se,complete:Se});return t?cs({keyframes:[0,1],duration:0,delay:t,onComplete:r}):r()}const Sw={type:"spring",stiffness:500,damping:25,restSpeed:10},Aw=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Ew={type:"keyframes",duration:.8},_w={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Pw=(e,{keyframes:t})=>t.length>2?Ew:Rn.has(e)?e.startsWith("scale")?Aw(t[1]):Sw:_w,Fa=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ii.test(t)||t==="0")&&!t.startsWith("url(")),Tw=new Set(["brightness","contrast","saturate","opacity"]);function Nw(e){const[t,i]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[o]=i.match(Ts)||[];if(!o)return e;const r=i.replace(o,"");let n=Tw.has(t)?1:0;return o!==i&&(n*=100),t+"("+n+r+")"}const Rw=/([a-z-]*)\(.*?\)/g,za={...Ii,getAnimatableNone:e=>{const t=e.match(Rw);return t?t.map(Nw).join(" "):e}},jw={...Au,color:ze,backgroundColor:ze,outlineColor:ze,fill:ze,stroke:ze,borderColor:ze,borderTopColor:ze,borderRightColor:ze,borderBottomColor:ze,borderLeftColor:ze,filter:za,WebkitFilter:za},Il=e=>jw[e];function ph(e,t){let i=Il(e);return i!==za&&(i=Ii),i.getAnimatableNone?i.getAnimatableNone(t):void 0}const fh=e=>/^0[^.\s]+$/.test(e);function Iw(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||fh(e)}function Dw(e,t,i,o){const r=Fa(t,i);let n;Array.isArray(i)?n=[...i]:n=[null,i];const s=o.from!==void 0?o.from:e.get();let a;const l=[];for(let c=0;c<n.length;c++)n[c]===null&&(n[c]=c===0?s:n[c-1]),Iw(n[c])&&l.push(c),typeof n[c]=="string"&&n[c]!=="none"&&n[c]!=="0"&&(a=n[c]);if(r&&l.length&&a)for(let c=0;c<l.length;c++){const h=l[c];n[h]=ph(t,a)}return n}function Lw({when:e,delay:t,delayChildren:i,staggerChildren:o,staggerDirection:r,repeat:n,repeatType:s,repeatDelay:a,from:l,elapsed:c,...h}){return!!Object.keys(h).length}function Dl(e,t){return e[t]||e.default||e}const Bw={skipAnimations:!1},Ll=(e,t,i,o={})=>r=>{const n=Dl(o,e)||{},s=n.delay||o.delay||0;let{elapsed:a=0}=o;a=a-tn(s);const l=Dw(t,e,i,n),c=l[0],h=l[l.length-1],f=Fa(e,c),g=Fa(e,h);let p={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...n,delay:-a,onUpdate:b=>{t.set(b),n.onUpdate&&n.onUpdate(b)},onComplete:()=>{r(),n.onComplete&&n.onComplete()}};if(Lw(n)||(p={...p,...Pw(e,p)}),p.duration&&(p.duration=tn(p.duration)),p.repeatDelay&&(p.repeatDelay=tn(p.repeatDelay)),!f||!g||N2.current||n.type===!1||Bw.skipAnimations)return kw(p);if(!o.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const b=$w(t,e,p);if(b)return b}return cs(p)};function ds(e){return!!(Je(e)&&e.add)}const mh=e=>/^\-?\d*\.?\d+$/.test(e);function Bl(e,t){e.indexOf(t)===-1&&e.push(t)}function Ml(e,t){const i=e.indexOf(t);i>-1&&e.splice(i,1)}class Ol{constructor(){this.subscriptions=[]}add(t){return Bl(this.subscriptions,t),()=>Ml(this.subscriptions,t)}notify(t,i,o){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](t,i,o);else for(let n=0;n<r;n++){const s=this.subscriptions[n];s&&s(t,i,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Mw=e=>!isNaN(parseFloat(e));class Ow{constructor(t,i={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(o,r=!0)=>{this.prev=this.current,this.current=o;const{delta:n,timestamp:s}=De;this.lastUpdated!==s&&(this.timeDelta=n,this.lastUpdated=s,ge.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>ge.postRender(this.velocityCheck),this.velocityCheck=({timestamp:o})=>{o!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=Mw(this.current),this.owner=i.owner}onChange(t){return this.on("change",t)}on(t,i){this.events[t]||(this.events[t]=new Ol);const o=this.events[t].add(i);return t==="change"?()=>{o(),ge.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,i){this.passiveEffect=t,this.stopPassiveEffect=i}set(t,i=!0){!i||!this.passiveEffect?this.updateAndNotify(t,i):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,i,o){this.set(i),this.prev=t,this.timeDelta=o}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?dh(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=t(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function lo(e,t){return new Ow(e,t)}const gh=e=>t=>t.test(e),Ww={test:e=>e==="auto",parse:e=>e},wh=[jn,K,Ot,vi,Zg,Gg,Ww],bo=e=>wh.find(gh(e)),Vw=[...wh,ze,Ii],Fw=e=>Vw.find(gh(e));function zw(e,t,i){e.hasValue(t)?e.getValue(t).set(i):e.addValue(t,lo(i))}function Uw(e,t){const i=Rs(e,t);let{transitionEnd:o={},transition:r={},...n}=i?e.makeTargetAnimatable(i,!1):{};n={...n,...o};for(const s in n){const a=a2(n[s]);zw(e,s,a)}}function Hw(e,t,i){var o,r;const n=Object.keys(t).filter(a=>!e.hasValue(a)),s=n.length;if(s)for(let a=0;a<s;a++){const l=n[a],c=t[l];let h=null;Array.isArray(c)&&(h=c[0]),h===null&&(h=(r=(o=i[l])!==null&&o!==void 0?o:e.readValue(l))!==null&&r!==void 0?r:t[l]),h!=null&&(typeof h=="string"&&(mh(h)||fh(h))?h=parseFloat(h):!Fw(h)&&Ii.test(c)&&(h=ph(l,c)),e.addValue(l,lo(h,{owner:e})),i[l]===void 0&&(i[l]=h),h!==null&&e.setBaseTarget(l,h))}}function Gw(e,t){return t?(t[e]||t.default||t).from:void 0}function Zw(e,t,i){const o={};for(const r in e){const n=Gw(r,t);if(n!==void 0)o[r]=n;else{const s=i.getValue(r);s&&(o[r]=s.get())}}return o}function Kw({protectedKeys:e,needsAnimating:t},i){const o=e.hasOwnProperty(i)&&t[i]!==!0;return t[i]=!1,o}function qw(e,t){const i=e.get();if(Array.isArray(t)){for(let o=0;o<t.length;o++)if(t[o]!==i)return!0}else return i!==t}function bh(e,t,{delay:i=0,transitionOverride:o,type:r}={}){let{transition:n=e.getDefaultTransition(),transitionEnd:s,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");o&&(n=o);const c=[],h=r&&e.animationState&&e.animationState.getState()[r];for(const f in a){const g=e.getValue(f),p=a[f];if(!g||p===void 0||h&&Kw(h,f))continue;const b={delay:i,elapsed:0,...Dl(n||{},f)};if(window.HandoffAppearAnimations){const k=e.getProps()[yu];if(k){const v=window.HandoffAppearAnimations(k,f,g,ge);v!==null&&(b.elapsed=v,b.isHandoff=!0)}}let w=!b.isHandoff&&!qw(g,p);if(b.type==="spring"&&(g.getVelocity()||b.velocity)&&(w=!1),g.animation&&(w=!1),w)continue;g.start(Ll(f,g,p,e.shouldReduceMotion&&Rn.has(f)?{type:!1}:b));const C=g.animation;ds(l)&&(l.add(f),C.then(()=>l.remove(f))),c.push(C)}return s&&Promise.all(c).then(()=>{s&&Uw(e,s)}),c}function Ua(e,t,i={}){const o=Rs(e,t,i.custom);let{transition:r=e.getDefaultTransition()||{}}=o||{};i.transitionOverride&&(r=i.transitionOverride);const n=o?()=>Promise.all(bh(e,o,i)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:h,staggerDirection:f}=r;return Yw(e,t,c+l,h,f,i)}:()=>Promise.resolve(),{when:a}=r;if(a){const[l,c]=a==="beforeChildren"?[n,s]:[s,n];return l().then(()=>c())}else return Promise.all([n(),s(i.delay)])}function Yw(e,t,i=0,o=0,r=1,n){const s=[],a=(e.variantChildren.size-1)*o,l=r===1?(c=0)=>c*o:(c=0)=>a-c*o;return Array.from(e.variantChildren).sort(Xw).forEach((c,h)=>{c.notify("AnimationStart",t),s.push(Ua(c,t,{...n,delay:i+l(h)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(s)}function Xw(e,t){return e.sortNodePosition(t)}function Qw(e,t,i={}){e.notify("AnimationStart",t);let o;if(Array.isArray(t)){const r=t.map(n=>Ua(e,n,i));o=Promise.all(r)}else if(typeof t=="string")o=Ua(e,t,i);else{const r=typeof t=="function"?Rs(e,t,i.custom):t;o=Promise.all(bh(e,r,i))}return o.then(()=>e.notify("AnimationComplete",t))}const Jw=[...vl].reverse(),e3=vl.length;function t3(e){return t=>Promise.all(t.map(({animation:i,options:o})=>Qw(e,i,o)))}function i3(e){let t=t3(e);const i=o3();let o=!0;const r=(l,c)=>{const h=Rs(e,c);if(h){const{transition:f,transitionEnd:g,...p}=h;l={...l,...p,...g}}return l};function n(l){t=l(e)}function s(l,c){const h=e.getProps(),f=e.getVariantContext(!0)||{},g=[],p=new Set;let b={},w=1/0;for(let k=0;k<e3;k++){const v=Jw[k],y=i[v],S=h[v]!==void 0?h[v]:f[v],T=Fo(S),L=v===c?y.isActive:null;L===!1&&(w=k);let M=S===f[v]&&S!==h[v]&&T;if(M&&o&&e.manuallyAnimateOnMount&&(M=!1),y.protectedKeys={...b},!y.isActive&&L===null||!S&&!y.prevProp||_s(S)||typeof S=="boolean")continue;let W=n3(y.prevProp,S)||v===c&&y.isActive&&!M&&T||k>w&&T,ie=!1;const ue=Array.isArray(S)?S:[S];let F=ue.reduce(r,{});L===!1&&(F={});const{prevResolvedValues:Z={}}=y,ce={...Z,...F},Pe=ne=>{W=!0,p.has(ne)&&(ie=!0,p.delete(ne)),y.needsAnimating[ne]=!0};for(const ne in ce){const le=F[ne],Re=Z[ne];if(b.hasOwnProperty(ne))continue;let N=!1;ss(le)&&ss(Re)?N=!Vu(le,Re):N=le!==Re,N?le!==void 0?Pe(ne):p.add(ne):le!==void 0&&p.has(ne)?Pe(ne):y.protectedKeys[ne]=!0}y.prevProp=S,y.prevResolvedValues=F,y.isActive&&(b={...b,...F}),o&&e.blockInitialAnimation&&(W=!1),W&&(!M||ie)&&g.push(...ue.map(ne=>({animation:ne,options:{type:v,...l}})))}if(p.size){const k={};p.forEach(v=>{const y=e.getBaseTarget(v);y!==void 0&&(k[v]=y)}),g.push({animation:k})}let C=!!g.length;return o&&(h.initial===!1||h.initial===h.animate)&&!e.manuallyAnimateOnMount&&(C=!1),o=!1,C?t(g):Promise.resolve()}function a(l,c,h){var f;if(i[l].isActive===c)return Promise.resolve();(f=e.variantChildren)===null||f===void 0||f.forEach(p=>{var b;return(b=p.animationState)===null||b===void 0?void 0:b.setActive(l,c)}),i[l].isActive=c;const g=s(h,l);for(const p in i)i[p].protectedKeys={};return g}return{animateChanges:s,setActive:a,setAnimateFunction:n,getState:()=>i}}function n3(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Vu(t,e):!1}function Zi(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function o3(){return{animate:Zi(!0),whileInView:Zi(),whileHover:Zi(),whileTap:Zi(),whileDrag:Zi(),whileFocus:Zi(),exit:Zi()}}class r3 extends Fi{constructor(t){super(t),t.animationState||(t.animationState=i3(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),_s(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:i}=this.node.prevProps||{};t!==i&&this.updateAnimationControlsSubscription()}unmount(){}}let s3=0;class a3 extends Fi{constructor(){super(...arguments),this.id=s3++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:i,custom:o}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const n=this.node.animationState.setActive("exit",!t,{custom:o??this.node.getProps().custom});i&&!t&&n.then(()=>i(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const l3={animation:{Feature:r3},exit:{Feature:a3}},_c=(e,t)=>Math.abs(e-t);function c3(e,t){const i=_c(e.x,t.x),o=_c(e.y,t.y);return Math.sqrt(i**2+o**2)}class yh{constructor(t,i,{transformPagePoint:o,contextWindow:r,dragSnapToOrigin:n=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=ra(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,p=c3(f.offset,{x:0,y:0})>=3;if(!g&&!p)return;const{point:b}=f,{timestamp:w}=De;this.history.push({...b,timestamp:w});const{onStart:C,onMove:k}=this.handlers;g||(C&&C(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),k&&k(this.lastMoveEvent,f)},this.handlePointerMove=(f,g)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=oa(g,this.transformPagePoint),ge.update(this.updatePoint,!0)},this.handlePointerUp=(f,g)=>{this.end();const{onEnd:p,onSessionEnd:b,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=ra(f.type==="pointercancel"?this.lastMoveEventInfo:oa(g,this.transformPagePoint),this.history);this.startEvent&&p&&p(f,C),b&&b(f,C)},!Lu(t))return;this.dragSnapToOrigin=n,this.handlers=i,this.transformPagePoint=o,this.contextWindow=r||window;const s=Ns(t),a=oa(s,this.transformPagePoint),{point:l}=a,{timestamp:c}=De;this.history=[{...l,timestamp:c}];const{onSessionStart:h}=i;h&&h(t,ra(a,this.history)),this.removeListeners=ki(ti(this.contextWindow,"pointermove",this.handlePointerMove),ti(this.contextWindow,"pointerup",this.handlePointerUp),ti(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),hi(this.updatePoint)}}function oa(e,t){return t?{point:t(e.point)}:e}function Pc(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ra({point:e},t){return{point:e,delta:Pc(e,vh(t)),offset:Pc(e,d3(t)),velocity:u3(t,.1)}}function d3(e){return e[0]}function vh(e){return e[e.length-1]}function u3(e,t){if(e.length<2)return{x:0,y:0};let i=e.length-1,o=null;const r=vh(e);for(;i>=0&&(o=e[i],!(r.timestamp-o.timestamp>tn(t)));)i--;if(!o)return{x:0,y:0};const n=ii(r.timestamp-o.timestamp);if(n===0)return{x:0,y:0};const s={x:(r.x-o.x)/n,y:(r.y-o.y)/n};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function st(e){return e.max-e.min}function Ha(e,t=0,i=.01){return Math.abs(e-t)<=i}function Tc(e,t,i,o=.5){e.origin=o,e.originPoint=xe(t.min,t.max,e.origin),e.scale=st(i)/st(t),(Ha(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=xe(i.min,i.max,e.origin)-e.originPoint,(Ha(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Eo(e,t,i,o){Tc(e.x,t.x,i.x,o?o.originX:void 0),Tc(e.y,t.y,i.y,o?o.originY:void 0)}function Nc(e,t,i){e.min=i.min+t.min,e.max=e.min+st(t)}function h3(e,t,i){Nc(e.x,t.x,i.x),Nc(e.y,t.y,i.y)}function Rc(e,t,i){e.min=t.min-i.min,e.max=e.min+st(t)}function _o(e,t,i){Rc(e.x,t.x,i.x),Rc(e.y,t.y,i.y)}function p3(e,{min:t,max:i},o){return t!==void 0&&e<t?e=o?xe(t,e,o.min):Math.max(e,t):i!==void 0&&e>i&&(e=o?xe(i,e,o.max):Math.min(e,i)),e}function jc(e,t,i){return{min:t!==void 0?e.min+t:void 0,max:i!==void 0?e.max+i-(e.max-e.min):void 0}}function f3(e,{top:t,left:i,bottom:o,right:r}){return{x:jc(e.x,i,r),y:jc(e.y,t,o)}}function Ic(e,t){let i=t.min-e.min,o=t.max-e.max;return t.max-t.min<e.max-e.min&&([i,o]=[o,i]),{min:i,max:o}}function m3(e,t){return{x:Ic(e.x,t.x),y:Ic(e.y,t.y)}}function g3(e,t){let i=.5;const o=st(e),r=st(t);return r>o?i=Uo(t.min,t.max-o,e.min):o>r&&(i=Uo(e.min,e.max-r,t.min)),ji(0,1,i)}function w3(e,t){const i={};return t.min!==void 0&&(i.min=t.min-e.min),t.max!==void 0&&(i.max=t.max-e.min),i}const Ga=.35;function b3(e=Ga){return e===!1?e=0:e===!0&&(e=Ga),{x:Dc(e,"left","right"),y:Dc(e,"top","bottom")}}function Dc(e,t,i){return{min:Lc(e,t),max:Lc(e,i)}}function Lc(e,t){return typeof e=="number"?e:e[t]||0}const Bc=()=>({translate:0,scale:1,origin:0,originPoint:0}),zn=()=>({x:Bc(),y:Bc()}),Mc=()=>({min:0,max:0}),Ae=()=>({x:Mc(),y:Mc()});function mt(e){return[e("x"),e("y")]}function xh({top:e,left:t,right:i,bottom:o}){return{x:{min:t,max:i},y:{min:e,max:o}}}function y3({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function v3(e,t){if(!t)return e;const i=t({x:e.left,y:e.top}),o=t({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:o.y,right:o.x}}function sa(e){return e===void 0||e===1}function Za({scale:e,scaleX:t,scaleY:i}){return!sa(e)||!sa(t)||!sa(i)}function Ki(e){return Za(e)||Ch(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Ch(e){return Oc(e.x)||Oc(e.y)}function Oc(e){return e&&e!=="0%"}function us(e,t,i){const o=e-i,r=t*o;return i+r}function Wc(e,t,i,o,r){return r!==void 0&&(e=us(e,r,o)),us(e,i,o)+t}function Ka(e,t=0,i=1,o,r){e.min=Wc(e.min,t,i,o,r),e.max=Wc(e.max,t,i,o,r)}function $h(e,{x:t,y:i}){Ka(e.x,t.translate,t.scale,t.originPoint),Ka(e.y,i.translate,i.scale,i.originPoint)}function x3(e,t,i,o=!1){const r=i.length;if(!r)return;t.x=t.y=1;let n,s;for(let a=0;a<r;a++){n=i[a],s=n.projectionDelta;const l=n.instance;l&&l.style&&l.style.display==="contents"||(o&&n.options.layoutScroll&&n.scroll&&n!==n.root&&Un(e,{x:-n.scroll.offset.x,y:-n.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,$h(e,s)),o&&Ki(n.latestValues)&&Un(e,n.latestValues))}t.x=Vc(t.x),t.y=Vc(t.y)}function Vc(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Ci(e,t){e.min=e.min+t,e.max=e.max+t}function Fc(e,t,[i,o,r]){const n=t[r]!==void 0?t[r]:.5,s=xe(e.min,e.max,n);Ka(e,t[i],t[o],s,t.scale)}const C3=["x","scaleX","originX"],$3=["y","scaleY","originY"];function Un(e,t){Fc(e.x,t,C3),Fc(e.y,t,$3)}function kh(e,t){return xh(v3(e.getBoundingClientRect(),t))}function k3(e,t,i){const o=kh(e,i),{scroll:r}=t;return r&&(Ci(o.x,r.offset.x),Ci(o.y,r.offset.y)),o}const Sh=({current:e})=>e?e.ownerDocument.defaultView:null,S3=new WeakMap;class A3{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ae(),this.visualElement=t}start(t,{snapToCursor:i=!1}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const r=h=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(Ns(h,"page").point)},n=(h,f)=>{const{drag:g,dragPropagation:p,onDragStart:b}=this.getProps();if(g&&!p&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Mu(g),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),mt(C=>{let k=this.getAxisMotionValue(C).get()||0;if(Ot.test(k)){const{projection:v}=this.visualElement;if(v&&v.layout){const y=v.layout.layoutBox[C];y&&(k=st(y)*(parseFloat(k)/100))}}this.originPoint[C]=k}),b&&ge.update(()=>b(h,f),!1,!0);const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},s=(h,f)=>{const{dragPropagation:g,dragDirectionLock:p,onDirectionLock:b,onDrag:w}=this.getProps();if(!g&&!this.openGlobalLock)return;const{offset:C}=f;if(p&&this.currentDirection===null){this.currentDirection=E3(C),this.currentDirection!==null&&b&&b(this.currentDirection);return}this.updateAxis("x",f.point,C),this.updateAxis("y",f.point,C),this.visualElement.render(),w&&w(h,f)},a=(h,f)=>this.stop(h,f),l=()=>mt(h=>{var f;return this.getAnimationState(h)==="paused"&&((f=this.getAxisMotionValue(h).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new yh(t,{onSessionStart:r,onStart:n,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:Sh(this.visualElement)})}stop(t,i){const o=this.isDragging;if(this.cancel(),!o)return;const{velocity:r}=i;this.startAnimation(r);const{onDragEnd:n}=this.getProps();n&&ge.update(()=>n(t,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:i}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(t,i,o){const{drag:r}=this.getProps();if(!o||!Nr(t,r,this.currentDirection))return;const n=this.getAxisMotionValue(t);let s=this.originPoint[t]+o[t];this.constraints&&this.constraints[t]&&(s=p3(s,this.constraints[t],this.elastic[t])),n.set(s)}resolveConstraints(){var t;const{dragConstraints:i,dragElastic:o}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,n=this.constraints;i&&Vn(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&r?this.constraints=f3(r.layoutBox,i):this.constraints=!1,this.elastic=b3(o),n!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&mt(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=w3(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:i}=this.getProps();if(!t||!Vn(t))return!1;const o=t.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const n=k3(o,r.root,this.visualElement.getTransformPagePoint());let s=m3(r.layout.layoutBox,n);if(i){const a=i(y3(s));this.hasMutatedConstraints=!!a,a&&(s=xh(a))}return s}startAnimation(t){const{drag:i,dragMomentum:o,dragElastic:r,dragTransition:n,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=mt(h=>{if(!Nr(h,i,this.currentDirection))return;let f=l&&l[h]||{};s&&(f={min:0,max:0});const g=r?200:1e6,p=r?40:1e7,b={type:"inertia",velocity:o?t[h]:0,bounceStiffness:g,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...n,...f};return this.startAxisValueAnimation(h,b)});return Promise.all(c).then(a)}startAxisValueAnimation(t,i){const o=this.getAxisMotionValue(t);return o.start(Ll(t,o,0,i))}stopAnimation(){mt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){mt(t=>{var i;return(i=this.getAxisMotionValue(t).animation)===null||i===void 0?void 0:i.pause()})}getAnimationState(t){var i;return(i=this.getAxisMotionValue(t).animation)===null||i===void 0?void 0:i.state}getAxisMotionValue(t){const i="_drag"+t.toUpperCase(),o=this.visualElement.getProps(),r=o[i];return r||this.visualElement.getValue(t,(o.initial?o.initial[t]:void 0)||0)}snapToCursor(t){mt(i=>{const{drag:o}=this.getProps();if(!Nr(i,o,this.currentDirection))return;const{projection:r}=this.visualElement,n=this.getAxisMotionValue(i);if(r&&r.layout){const{min:s,max:a}=r.layout.layoutBox[i];n.set(t[i]-xe(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:i}=this.getProps(),{projection:o}=this.visualElement;if(!Vn(i)||!o||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};mt(s=>{const a=this.getAxisMotionValue(s);if(a){const l=a.get();r[s]=g3({min:l,max:l},this.constraints[s])}});const{transformTemplate:n}=this.visualElement.getProps();this.visualElement.current.style.transform=n?n({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),mt(s=>{if(!Nr(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:c}=this.constraints[s];a.set(xe(l,c,r[s]))})}addListeners(){if(!this.visualElement.current)return;S3.set(this.visualElement,this);const t=this.visualElement.current,i=ti(t,"pointerdown",l=>{const{drag:c,dragListener:h=!0}=this.getProps();c&&h&&this.start(l)}),o=()=>{const{dragConstraints:l}=this.getProps();Vn(l)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,n=r.addEventListener("measure",o);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),o();const s=ei(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(mt(h=>{const f=this.getAxisMotionValue(h);f&&(this.originPoint[h]+=l[h].translate,f.set(f.get()+l[h].translate))}),this.visualElement.render())});return()=>{s(),i(),n(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:o=!1,dragPropagation:r=!1,dragConstraints:n=!1,dragElastic:s=Ga,dragMomentum:a=!0}=t;return{...t,drag:i,dragDirectionLock:o,dragPropagation:r,dragConstraints:n,dragElastic:s,dragMomentum:a}}}function Nr(e,t,i){return(t===!0||t===e)&&(i===null||i===e)}function E3(e,t=10){let i=null;return Math.abs(e.y)>t?i="y":Math.abs(e.x)>t&&(i="x"),i}class _3 extends Fi{constructor(t){super(t),this.removeGroupControls=Se,this.removeListeners=Se,this.controls=new A3(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Se}unmount(){this.removeGroupControls(),this.removeListeners()}}const zc=e=>(t,i)=>{e&&ge.update(()=>e(t,i))};class P3 extends Fi{constructor(){super(...arguments),this.removePointerDownListener=Se}onPointerDown(t){this.session=new yh(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Sh(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:i,onPan:o,onPanEnd:r}=this.node.getProps();return{onSessionStart:zc(t),onStart:zc(i),onMove:o,onEnd:(n,s)=>{delete this.session,r&&ge.update(()=>r(n,s))}}}mount(){this.removePointerDownListener=ti(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function T3(){const e=A.useContext(As);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:i,register:o}=e,r=A.useId();return A.useEffect(()=>o(r),[]),!t&&i?[!1,()=>i&&i(r)]:[!0]}const Ir={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Uc(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const yo={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(K.test(e))e=parseFloat(e);else return e;const i=Uc(e,t.target.x),o=Uc(e,t.target.y);return`${i}% ${o}%`}},N3={correct:(e,{treeScale:t,projectionDelta:i})=>{const o=e,r=Ii.parse(e);if(r.length>5)return o;const n=Ii.createTransformer(e),s=typeof r[0]!="number"?1:0,a=i.x.scale*t.x,l=i.y.scale*t.y;r[0+s]/=a,r[1+s]/=l;const c=xe(a,l,.5);return typeof r[2+s]=="number"&&(r[2+s]/=c),typeof r[3+s]=="number"&&(r[3+s]/=c),n(r)}};class R3 extends R.Component{componentDidMount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:o,layoutId:r}=this.props,{projection:n}=t;Og(j3),n&&(i.group&&i.group.add(n),o&&o.register&&r&&o.register(n),n.root.didUpdate(),n.addEventListener("animationComplete",()=>{this.safeToRemove()}),n.setOptions({...n.options,onExitComplete:()=>this.safeToRemove()})),Ir.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:i,visualElement:o,drag:r,isPresent:n}=this.props,s=o.projection;return s&&(s.isPresent=n,r||t.layoutDependency!==i||i===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==n&&(n?s.promote():s.relegate()||ge.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:o}=this.props,{projection:r}=t;r&&(r.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(r),o&&o.deregister&&o.deregister(r))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Ah(e){const[t,i]=T3(),o=A.useContext(Cl);return R.createElement(R3,{...e,layoutGroup:o,switchLayoutGroup:A.useContext(xu),isPresent:t,safeToRemove:i})}const j3={borderRadius:{...yo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:yo,borderTopRightRadius:yo,borderBottomLeftRadius:yo,borderBottomRightRadius:yo,boxShadow:N3},Eh=["TopLeft","TopRight","BottomLeft","BottomRight"],I3=Eh.length,Hc=e=>typeof e=="string"?parseFloat(e):e,Gc=e=>typeof e=="number"||K.test(e);function D3(e,t,i,o,r,n){r?(e.opacity=xe(0,i.opacity!==void 0?i.opacity:1,L3(o)),e.opacityExit=xe(t.opacity!==void 0?t.opacity:1,0,B3(o))):n&&(e.opacity=xe(t.opacity!==void 0?t.opacity:1,i.opacity!==void 0?i.opacity:1,o));for(let s=0;s<I3;s++){const a=`border${Eh[s]}Radius`;let l=Zc(t,a),c=Zc(i,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Gc(l)===Gc(c)?(e[a]=Math.max(xe(Hc(l),Hc(c),o),0),(Ot.test(c)||Ot.test(l))&&(e[a]+="%")):e[a]=c}(t.rotate||i.rotate)&&(e.rotate=xe(t.rotate||0,i.rotate||0,o))}function Zc(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const L3=_h(0,.5,Yu),B3=_h(.5,.95,Se);function _h(e,t,i){return o=>o<e?0:o>t?1:i(Uo(e,t,o))}function Kc(e,t){e.min=t.min,e.max=t.max}function pt(e,t){Kc(e.x,t.x),Kc(e.y,t.y)}function qc(e,t,i,o,r){return e-=t,e=us(e,1/i,o),r!==void 0&&(e=us(e,1/r,o)),e}function M3(e,t=0,i=1,o=.5,r,n=e,s=e){if(Ot.test(t)&&(t=parseFloat(t),t=xe(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=xe(n.min,n.max,o);e===n&&(a-=t),e.min=qc(e.min,t,i,a,r),e.max=qc(e.max,t,i,a,r)}function Yc(e,t,[i,o,r],n,s){M3(e,t[i],t[o],t[r],t.scale,n,s)}const O3=["x","scaleX","originX"],W3=["y","scaleY","originY"];function Xc(e,t,i,o){Yc(e.x,t,O3,i?i.x:void 0,o?o.x:void 0),Yc(e.y,t,W3,i?i.y:void 0,o?o.y:void 0)}function Qc(e){return e.translate===0&&e.scale===1}function Ph(e){return Qc(e.x)&&Qc(e.y)}function V3(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function Th(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Jc(e){return st(e.x)/st(e.y)}class F3{constructor(){this.members=[]}add(t){Bl(this.members,t),t.scheduleRender()}remove(t){if(Ml(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(t){const i=this.members.findIndex(r=>t===r);if(i===0)return!1;let o;for(let r=i;r>=0;r--){const n=this.members[r];if(n.isPresent!==!1){o=n;break}}return o?(this.promote(o),!0):!1}promote(t,i){const o=this.lead;if(t!==o&&(this.prevLead=o,this.lead=t,t.show(),o)){o.instance&&o.scheduleRender(),t.scheduleRender(),t.resumeFrom=o,i&&(t.resumeFrom.preserveOpacity=!0),o.snapshot&&(t.snapshot=o.snapshot,t.snapshot.latestValues=o.animationValues||o.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:r}=t.options;r===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:i,resumingFrom:o}=t;i.onExitComplete&&i.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function ed(e,t,i){let o="";const r=e.x.translate/t.x,n=e.y.translate/t.y;if((r||n)&&(o=`translate3d(${r}px, ${n}px, 0) `),(t.x!==1||t.y!==1)&&(o+=`scale(${1/t.x}, ${1/t.y}) `),i){const{rotate:l,rotateX:c,rotateY:h}=i;l&&(o+=`rotate(${l}deg) `),c&&(o+=`rotateX(${c}deg) `),h&&(o+=`rotateY(${h}deg) `)}const s=e.x.scale*t.x,a=e.y.scale*t.y;return(s!==1||a!==1)&&(o+=`scale(${s}, ${a})`),o||"none"}const z3=(e,t)=>e.depth-t.depth;class U3{constructor(){this.children=[],this.isDirty=!1}add(t){Bl(this.children,t),this.isDirty=!0}remove(t){Ml(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(z3),this.isDirty=!1,this.children.forEach(t)}}function H3(e,t){const i=performance.now(),o=({timestamp:r})=>{const n=r-i;n>=t&&(hi(o),e(n-t))};return ge.read(o,!0),()=>hi(o)}function G3(e){window.MotionDebug&&window.MotionDebug.record(e)}function Z3(e){return e instanceof SVGElement&&e.tagName!=="svg"}function K3(e,t,i){const o=Je(e)?e:lo(e);return o.start(Ll("",o,t,i)),o.animation}const td=["","X","Y","Z"],q3={visibility:"hidden"},id=1e3;let Y3=0;const qi={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Nh({attachResizeListener:e,defaultParent:t,measureScroll:i,checkIsScrollRoot:o,resetTransform:r}){return class{constructor(s={},a=t==null?void 0:t()){this.id=Y3++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,qi.totalNodes=qi.resolvedTargetDeltas=qi.recalculatedProjection=0,this.nodes.forEach(J3),this.nodes.forEach(o5),this.nodes.forEach(r5),this.nodes.forEach(e5),G3(qi)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new U3)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Ol),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Z3(s),this.instance=s;const{layoutId:l,layout:c,visualElement:h}=this.options;if(h&&!h.current&&h.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),e){let f;const g=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=H3(g,250),Ir.hasAnimatedSinceResize&&(Ir.hasAnimatedSinceResize=!1,this.nodes.forEach(od))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&h&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:g,hasRelativeTargetChanged:p,layout:b})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||h.getDefaultTransition()||d5,{onLayoutAnimationStart:C,onLayoutAnimationComplete:k}=h.getProps(),v=!this.targetLayout||!Th(this.targetLayout,b)||p,y=!g&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||g&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,y);const S={...Dl(w,"layout"),onPlay:C,onComplete:k};(h.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else g||od(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=b})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,hi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(s5),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let h=0;h<this.path.length;h++){const f=this.path[h];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(nd);return}this.isUpdating||this.nodes.forEach(i5),this.isUpdating=!1,this.nodes.forEach(n5),this.nodes.forEach(X3),this.nodes.forEach(Q3),this.clearAllSnapshots();const a=performance.now();De.delta=ji(0,1e3/60,a-De.timestamp),De.timestamp=a,De.isProcessing=!0,Ys.update.process(De),Ys.preRender.process(De),Ys.render.process(De),De.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(t5),this.sharedNodes.forEach(a5)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ge.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ge.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ae(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:o(this.instance),offset:i(this.instance)})}resetTransform(){if(!r)return;const s=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!Ph(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,h=c!==this.prevTransformTemplateValue;s&&(a||Ki(this.latestValues)||h)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),u5(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return Ae();const a=s.measureViewportBox(),{scroll:l}=this.root;return l&&(Ci(a.x,l.offset.x),Ci(a.y,l.offset.y)),a}removeElementScroll(s){const a=Ae();pt(a,s);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:h,options:f}=c;if(c!==this.root&&h&&f.layoutScroll){if(h.isRoot){pt(a,s);const{scroll:g}=this.root;g&&(Ci(a.x,-g.offset.x),Ci(a.y,-g.offset.y))}Ci(a.x,h.offset.x),Ci(a.y,h.offset.y)}}return a}applyTransform(s,a=!1){const l=Ae();pt(l,s);for(let c=0;c<this.path.length;c++){const h=this.path[c];!a&&h.options.layoutScroll&&h.scroll&&h!==h.root&&Un(l,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),Ki(h.latestValues)&&Un(l,h.latestValues)}return Ki(this.latestValues)&&Un(l,this.latestValues),l}removeTransform(s){const a=Ae();pt(a,s);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Ki(c.latestValues))continue;Za(c.latestValues)&&c.updateSnapshot();const h=Ae(),f=c.measurePageBox();pt(h,f),Xc(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,h)}return Ki(this.latestValues)&&Xc(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==De.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(s||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:g}=this.options;if(!(!this.layout||!(f||g))){if(this.resolvedRelativeTargetAt=De.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ae(),this.relativeTargetOrigin=Ae(),_o(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),pt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Ae(),this.targetWithTransforms=Ae()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),h3(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):pt(this.target,this.layout.layoutBox),$h(this.target,this.targetDelta)):pt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ae(),this.relativeTargetOrigin=Ae(),_o(this.relativeTargetOrigin,this.target,p.target),pt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}qi.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Za(this.parent.latestValues)||Ch(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===De.timestamp&&(c=!1),c)return;const{layout:h,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||f))return;pt(this.layoutCorrected,this.layout.layoutBox);const g=this.treeScale.x,p=this.treeScale.y;x3(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:b}=a;if(!b){this.projectionTransform&&(this.projectionDelta=zn(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=zn(),this.projectionDeltaWithTransform=zn());const w=this.projectionTransform;Eo(this.projectionDelta,this.layoutCorrected,b,this.latestValues),this.projectionTransform=ed(this.projectionDelta,this.treeScale),(this.projectionTransform!==w||this.treeScale.x!==g||this.treeScale.y!==p)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",b)),qi.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,a=!1){const l=this.snapshot,c=l?l.latestValues:{},h={...this.latestValues},f=zn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const g=Ae(),p=l?l.source:void 0,b=this.layout?this.layout.source:void 0,w=p!==b,C=this.getStack(),k=!C||C.members.length<=1,v=!!(w&&!k&&this.options.crossfade===!0&&!this.path.some(c5));this.animationProgress=0;let y;this.mixTargetDelta=S=>{const T=S/1e3;rd(f.x,s.x,T),rd(f.y,s.y,T),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(_o(g,this.layout.layoutBox,this.relativeParent.layout.layoutBox),l5(this.relativeTarget,this.relativeTargetOrigin,g,T),y&&V3(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=Ae()),pt(y,this.relativeTarget)),w&&(this.animationValues=h,D3(h,c,this.latestValues,T,v,k)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(hi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ge.update(()=>{Ir.hasAnimatedSinceResize=!0,this.currentAnimation=K3(0,id,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(id),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:h}=s;if(!(!a||!l||!c)){if(this!==s&&this.layout&&c&&Rh(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Ae();const f=st(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+f;const g=st(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+g}pt(a,l),Un(a,h),Eo(this.projectionDeltaWithTransform,this.layoutCorrected,a,h)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new F3),this.sharedNodes.get(s).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const c={};for(let h=0;h<td.length;h++){const f="rotate"+td[h];l[f]&&(c[f]=l[f],s.setStaticValue(f,0))}s.render();for(const h in c)s.setStaticValue(h,c[h]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return q3;const c={visibility:""},h=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=jr(s==null?void 0:s.pointerEvents)||"",c.transform=h?h(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=jr(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Ki(this.latestValues)&&(w.transform=h?h({},""):"none",this.hasProjected=!1),w}const g=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=ed(this.projectionDeltaWithTransform,this.treeScale,g),h&&(c.transform=h(g,c.transform));const{x:p,y:b}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${b.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(a=g.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:c.opacity=f===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const w in os){if(g[w]===void 0)continue;const{correct:C,applyTo:k}=os[w],v=c.transform==="none"?g[w]:C(g[w],f);if(k){const y=k.length;for(let S=0;S<y;S++)c[k[S]]=v}else c[w]=v}return this.options.layoutId&&(c.pointerEvents=f===this?jr(s==null?void 0:s.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(nd),this.root.sharedNodes.clear()}}}function X3(e){e.updateLayout()}function Q3(e){var t;const i=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&i&&e.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:r}=e.layout,{animationType:n}=e.options,s=i.source!==e.layout.source;n==="size"?mt(f=>{const g=s?i.measuredBox[f]:i.layoutBox[f],p=st(g);g.min=o[f].min,g.max=g.min+p}):Rh(n,i.layoutBox,o)&&mt(f=>{const g=s?i.measuredBox[f]:i.layoutBox[f],p=st(o[f]);g.max=g.min+p,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+p)});const a=zn();Eo(a,o,i.layoutBox);const l=zn();s?Eo(l,e.applyTransform(r,!0),i.measuredBox):Eo(l,o,i.layoutBox);const c=!Ph(a);let h=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:g,layout:p}=f;if(g&&p){const b=Ae();_o(b,i.layoutBox,g.layoutBox);const w=Ae();_o(w,o,p.layoutBox),Th(b,w)||(h=!0),f.options.layoutRoot&&(e.relativeTarget=w,e.relativeTargetOrigin=b,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:o,snapshot:i,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:h})}else if(e.isLead()){const{onExitComplete:o}=e.options;o&&o()}e.options.transition=void 0}function J3(e){qi.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function e5(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function t5(e){e.clearSnapshot()}function nd(e){e.clearMeasurements()}function i5(e){e.isLayoutDirty=!1}function n5(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function od(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function o5(e){e.resolveTargetDelta()}function r5(e){e.calcProjection()}function s5(e){e.resetRotation()}function a5(e){e.removeLeadSnapshot()}function rd(e,t,i){e.translate=xe(t.translate,0,i),e.scale=xe(t.scale,1,i),e.origin=t.origin,e.originPoint=t.originPoint}function sd(e,t,i,o){e.min=xe(t.min,i.min,o),e.max=xe(t.max,i.max,o)}function l5(e,t,i,o){sd(e.x,t.x,i.x,o),sd(e.y,t.y,i.y,o)}function c5(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const d5={duration:.45,ease:[.4,0,.1,1]},ad=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),ld=ad("applewebkit/")&&!ad("chrome/")?Math.round:Se;function cd(e){e.min=ld(e.min),e.max=ld(e.max)}function u5(e){cd(e.x),cd(e.y)}function Rh(e,t,i){return e==="position"||e==="preserve-aspect"&&!Ha(Jc(t),Jc(i),.2)}const h5=Nh({attachResizeListener:(e,t)=>ei(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),aa={current:void 0},jh=Nh({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!aa.current){const e=new h5({});e.mount(window),e.setOptions({layoutScroll:!0}),aa.current=e}return aa.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),p5={pan:{Feature:P3},drag:{Feature:_3,ProjectionNode:jh,MeasureLayout:Ah}},f5=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function m5(e){const t=f5.exec(e);if(!t)return[,];const[,i,o]=t;return[i,o]}function qa(e,t,i=1){const[o,r]=m5(e);if(!o)return;const n=window.getComputedStyle(t).getPropertyValue(o);if(n){const s=n.trim();return mh(s)?parseFloat(s):s}else return Ma(r)?qa(r,t,i+1):r}function g5(e,{...t},i){const o=e.current;if(!(o instanceof Element))return{target:t,transitionEnd:i};i&&(i={...i}),e.values.forEach(r=>{const n=r.get();if(!Ma(n))return;const s=qa(n,o);s&&r.set(s)});for(const r in t){const n=t[r];if(!Ma(n))continue;const s=qa(n,o);s&&(t[r]=s,i||(i={}),i[r]===void 0&&(i[r]=n))}return{target:t,transitionEnd:i}}const w5=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Ih=e=>w5.has(e),b5=e=>Object.keys(e).some(Ih),dd=e=>e===jn||e===K,ud=(e,t)=>parseFloat(e.split(", ")[t]),hd=(e,t)=>(i,{transform:o})=>{if(o==="none"||!o)return 0;const r=o.match(/^matrix3d\((.+)\)$/);if(r)return ud(r[1],t);{const n=o.match(/^matrix\((.+)\)$/);return n?ud(n[1],e):0}},y5=new Set(["x","y","z"]),v5=pr.filter(e=>!y5.has(e));function x5(e){const t=[];return v5.forEach(i=>{const o=e.getValue(i);o!==void 0&&(t.push([i,o.get()]),o.set(i.startsWith("scale")?1:0))}),t.length&&e.render(),t}const co={width:({x:e},{paddingLeft:t="0",paddingRight:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),height:({y:e},{paddingTop:t="0",paddingBottom:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:hd(4,13),y:hd(5,14)};co.translateX=co.x;co.translateY=co.y;const C5=(e,t,i)=>{const o=t.measureViewportBox(),r=t.current,n=getComputedStyle(r),{display:s}=n,a={};s==="none"&&t.setStaticValue("display",e.display||"block"),i.forEach(c=>{a[c]=co[c](o,n)}),t.render();const l=t.measureViewportBox();return i.forEach(c=>{const h=t.getValue(c);h&&h.jump(a[c]),e[c]=co[c](l,n)}),e},$5=(e,t,i={},o={})=>{t={...t},o={...o};const r=Object.keys(t).filter(Ih);let n=[],s=!1;const a=[];if(r.forEach(l=>{const c=e.getValue(l);if(!e.hasValue(l))return;let h=i[l],f=bo(h);const g=t[l];let p;if(ss(g)){const b=g.length,w=g[0]===null?1:0;h=g[w],f=bo(h);for(let C=w;C<b&&g[C]!==null;C++)p?Tl(bo(g[C])===p):p=bo(g[C])}else p=bo(g);if(f!==p)if(dd(f)&&dd(p)){const b=c.get();typeof b=="string"&&c.set(parseFloat(b)),typeof g=="string"?t[l]=parseFloat(g):Array.isArray(g)&&p===K&&(t[l]=g.map(parseFloat))}else f!=null&&f.transform&&(p!=null&&p.transform)&&(h===0||g===0)?h===0?c.set(p.transform(h)):t[l]=f.transform(g):(s||(n=x5(e),s=!0),a.push(l),o[l]=o[l]!==void 0?o[l]:t[l],c.jump(g))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,c=C5(t,e,a);return n.length&&n.forEach(([h,f])=>{e.getValue(h).set(f)}),e.render(),Es&&l!==null&&window.scrollTo({top:l}),{target:c,transitionEnd:o}}else return{target:t,transitionEnd:o}};function k5(e,t,i,o){return b5(t)?$5(e,t,i,o):{target:t,transitionEnd:o}}const S5=(e,t,i,o)=>{const r=g5(e,t,o);return t=r.target,o=r.transitionEnd,k5(e,t,i,o)},Ya={current:null},Dh={current:!1};function A5(){if(Dh.current=!0,!!Es)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Ya.current=e.matches;e.addListener(t),t()}else Ya.current=!1}function E5(e,t,i){const{willChange:o}=t;for(const r in t){const n=t[r],s=i[r];if(Je(n))e.addValue(r,n),ds(o)&&o.add(r);else if(Je(s))e.addValue(r,lo(n,{owner:e})),ds(o)&&o.remove(r);else if(s!==n)if(e.hasValue(r)){const a=e.getValue(r);!a.hasAnimated&&a.set(n)}else{const a=e.getStaticValue(r);e.addValue(r,lo(a!==void 0?a:n,{owner:e}))}}for(const r in i)t[r]===void 0&&e.removeValue(r);return t}const pd=new WeakMap,Lh=Object.keys(zo),_5=Lh.length,fd=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],P5=xl.length;class T5{constructor({parent:t,props:i,presenceContext:o,reducedMotionConfig:r,visualState:n},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>ge.render(this.render,!1,!0);const{latestValues:a,renderState:l}=n;this.latestValues=a,this.baseTarget={...a},this.initialValues=i.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=i,this.presenceContext=o,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.options=s,this.isControllingVariants=Ps(i),this.isVariantNode=vu(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:c,...h}=this.scrapeMotionValuesFromProps(i,{});for(const f in h){const g=h[f];a[f]!==void 0&&Je(g)&&(g.set(a[f],!1),ds(c)&&c.add(f))}}scrapeMotionValuesFromProps(t,i){return{}}mount(t){this.current=t,pd.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,o)=>this.bindToMotionValue(o,i)),Dh.current||A5(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ya.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){pd.delete(this.current),this.projection&&this.projection.unmount(),hi(this.notifyUpdate),hi(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,i){const o=Rn.has(t),r=i.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&ge.update(this.notifyUpdate,!1,!0),o&&this.projection&&(this.projection.isTransformDirty=!0)}),n=i.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{r(),n()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...i},o,r,n){let s,a;for(let l=0;l<_5;l++){const c=Lh[l],{isEnabled:h,Feature:f,ProjectionNode:g,MeasureLayout:p}=zo[c];g&&(s=g),h(i)&&(!this.features[c]&&f&&(this.features[c]=new f(this)),p&&(a=p))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:h,dragConstraints:f,layoutScroll:g,layoutRoot:p}=i;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!h||f&&Vn(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:n,layoutScroll:g,layoutRoot:p})}return a}updateFeatures(){for(const t in this.features){const i=this.features[t];i.isMounted?i.update():(i.mount(),i.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ae()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,i){this.latestValues[t]=i}makeTargetAnimatable(t,i=!0){return this.makeTargetAnimatableFromInstance(t,this.props,i)}update(t,i){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let o=0;o<fd.length;o++){const r=fd[o];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const n=t["on"+r];n&&(this.propEventSubscriptions[r]=this.on(r,n))}this.prevMotionValues=E5(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const o=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(o.initial=this.props.initial),o}const i={};for(let o=0;o<P5;o++){const r=xl[o],n=this.props[r];(Fo(n)||n===!1)&&(i[r]=n)}return i}addVariantChild(t){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(t),()=>i.variantChildren.delete(t)}addValue(t,i){i!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,i)),this.values.set(t,i),this.latestValues[t]=i.get()}removeValue(t){this.values.delete(t);const i=this.valueSubscriptions.get(t);i&&(i(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,i){if(this.props.values&&this.props.values[t])return this.props.values[t];let o=this.values.get(t);return o===void 0&&i!==void 0&&(o=lo(i,{owner:this}),this.addValue(t,o)),o}readValue(t){var i;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(i=this.getBaseTargetFromProps(this.props,t))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,i){this.baseTarget[t]=i}getBaseTarget(t){var i;const{initial:o}=this.props,r=typeof o=="string"||typeof o=="object"?(i=Pl(this.props,o))===null||i===void 0?void 0:i[t]:void 0;if(o&&r!==void 0)return r;const n=this.getBaseTargetFromProps(this.props,t);return n!==void 0&&!Je(n)?n:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,i){return this.events[t]||(this.events[t]=new Ol),this.events[t].add(i)}notify(t,...i){this.events[t]&&this.events[t].notify(...i)}}class Bh extends T5{sortInstanceNodePosition(t,i){return t.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(t,i){return t.style?t.style[i]:void 0}removeValueFromRenderState(t,{vars:i,style:o}){delete i[t],delete o[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:i,...o},{transformValues:r},n){let s=Zw(o,t||{},this);if(r&&(i&&(i=r(i)),o&&(o=r(o)),s&&(s=r(s))),n){Hw(this,o,s);const a=S5(this,o,s,i);i=a.transitionEnd,o=a.target}return{transition:t,transitionEnd:i,...o}}}function N5(e){return window.getComputedStyle(e)}class R5 extends Bh{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,i){if(Rn.has(i)){const o=Il(i);return o&&o.default||0}else{const o=N5(t),r=(ku(i)?o.getPropertyValue(i):o[i])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(t,{transformPagePoint:i}){return kh(t,i)}build(t,i,o,r){kl(t,i,o,r.transformTemplate)}scrapeMotionValuesFromProps(t,i){return _l(t,i)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Je(t)&&(this.childSubscription=t.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}renderInstance(t,i,o,r){Tu(t,i,o,r)}}class j5 extends Bh{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,i){return t[i]}readValueFromInstance(t,i){if(Rn.has(i)){const o=Il(i);return o&&o.default||0}return i=Nu.has(i)?i:yl(i),t.getAttribute(i)}measureInstanceViewportBox(){return Ae()}scrapeMotionValuesFromProps(t,i){return ju(t,i)}build(t,i,o,r){Al(t,i,o,this.isSVGTag,r.transformTemplate)}renderInstance(t,i,o,r){Ru(t,i,o,r)}mount(t){this.isSVGTag=El(t.tagName),super.mount(t)}}const I5=(e,t)=>$l(e)?new j5(t,{enableHardwareAcceleration:!1}):new R5(t,{enableHardwareAcceleration:!0}),D5={layout:{ProjectionNode:jh,MeasureLayout:Ah}},L5={...l3,..._2,...p5,...D5},ye=Bg((e,t)=>m2(e,t,L5,I5));function Mh(){const e=A.useRef(!1);return bl(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function B5(){const e=Mh(),[t,i]=A.useState(0),o=A.useCallback(()=>{e.current&&i(t+1)},[t]);return[A.useCallback(()=>ge.postRender(o),[o]),t]}class M5 extends A.Component{getSnapshotBeforeUpdate(t){const i=this.props.childRef.current;if(i&&t.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=i.offsetHeight||0,o.width=i.offsetWidth||0,o.top=i.offsetTop,o.left=i.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function O5({children:e,isPresent:t}){const i=A.useId(),o=A.useRef(null),r=A.useRef({width:0,height:0,top:0,left:0});return A.useInsertionEffect(()=>{const{width:n,height:s,top:a,left:l}=r.current;if(t||!o.current||!n||!s)return;o.current.dataset.motionPopId=i;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${n}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),A.createElement(M5,{isPresent:t,childRef:o,sizeRef:r},A.cloneElement(e,{ref:o}))}const la=({children:e,initial:t,isPresent:i,onExitComplete:o,custom:r,presenceAffectsLayout:n,mode:s})=>{const a=Iu(W5),l=A.useId(),c=A.useMemo(()=>({id:l,initial:t,isPresent:i,custom:r,onExitComplete:h=>{a.set(h,!0);for(const f of a.values())if(!f)return;o&&o()},register:h=>(a.set(h,!1),()=>a.delete(h))}),n?void 0:[i]);return A.useMemo(()=>{a.forEach((h,f)=>a.set(f,!1))},[i]),A.useEffect(()=>{!i&&!a.size&&o&&o()},[i]),s==="popLayout"&&(e=A.createElement(O5,{isPresent:i},e)),A.createElement(As.Provider,{value:c},e)};function W5(){return new Map}function V5(e){return A.useEffect(()=>()=>e(),[])}const Yi=e=>e.key||"";function F5(e,t){e.forEach(i=>{const o=Yi(i);t.set(o,i)})}function z5(e){const t=[];return A.Children.forEach(e,i=>{A.isValidElement(i)&&t.push(i)}),t}const Wl=({children:e,custom:t,initial:i=!0,onExitComplete:o,exitBeforeEnter:r,presenceAffectsLayout:n=!0,mode:s="sync"})=>{const a=A.useContext(Cl).forceRender||B5()[0],l=Mh(),c=z5(e);let h=c;const f=A.useRef(new Map).current,g=A.useRef(h),p=A.useRef(new Map).current,b=A.useRef(!0);if(bl(()=>{b.current=!1,F5(c,p),g.current=h}),V5(()=>{b.current=!0,p.clear(),f.clear()}),b.current)return A.createElement(A.Fragment,null,h.map(v=>A.createElement(la,{key:Yi(v),isPresent:!0,initial:i?void 0:!1,presenceAffectsLayout:n,mode:s},v)));h=[...h];const w=g.current.map(Yi),C=c.map(Yi),k=w.length;for(let v=0;v<k;v++){const y=w[v];C.indexOf(y)===-1&&!f.has(y)&&f.set(y,void 0)}return s==="wait"&&f.size&&(h=[]),f.forEach((v,y)=>{if(C.indexOf(y)!==-1)return;const S=p.get(y);if(!S)return;const T=w.indexOf(y);let L=v;if(!L){const M=()=>{f.delete(y);const O=Array.from(p.keys()).filter(W=>!C.includes(W));if(O.forEach(W=>p.delete(W)),g.current=c.filter(W=>{const ie=Yi(W);return ie===y||O.includes(ie)}),!f.size){if(l.current===!1)return;a(),o&&o()}};L=A.createElement(la,{key:Yi(S),isPresent:!1,onExitComplete:M,custom:t,presenceAffectsLayout:n,mode:s},S),f.set(y,L)}h.splice(T,0,L)}),h=h.map(v=>{const y=v.key;return f.has(y)?v:A.createElement(la,{key:Yi(v),isPresent:!0,presenceAffectsLayout:n,mode:s},v)}),A.createElement(A.Fragment,null,f.size?h:h.map(v=>A.cloneElement(v)))};/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var U5={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),_e=(e,t)=>{const i=A.forwardRef(({color:o="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:a="",children:l,...c},h)=>A.createElement("svg",{ref:h,...U5,width:r,height:r,stroke:o,strokeWidth:s?Number(n)*24/Number(r):n,className:["lucide",`lucide-${H5(e)}`,a].join(" "),...c},[...t.map(([f,g])=>A.createElement(f,g)),...Array.isArray(l)?l:[l]]));return i.displayName=`${e}`,i};/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=_e("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=_e("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5=_e("Dices",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=_e("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=_e("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=_e("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=_e("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=_e("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=_e("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=_e("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=_e("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=_e("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=_e("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=_e("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=_e("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=_e("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=_e("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=_e("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=_e("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),s4={MockUSDT:"0x02b0B4EFd909240FCB2Eb5FAe060dC60D112E3a4",GameBoard:"0x638A246F0Ec8883eF68280293FFE8Cfbabe61B44",PrizePool:"0xFD6F7A6a5c21A3f503EBaE7a473639974379c351",GameController:"0x5302E909d1e93e30F05B5D6Eea766363D14F9892",GameActivityLogger:"0xa6e99A4ED7498b3cdDCBB61a6A607a4925Faa1B7"},On={contracts:s4},Ke=[{inputs:[],name:"claimPendingReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"forfeitPendingReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{name:"amount",type:"uint256"}],name:"deposit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{name:"numRounds",type:"uint256"},{name:"paymentMethod",type:"uint8"}],name:"buyRounds",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{name:"isClockwise",type:"bool"},{name:"seed",type:"uint256"}],name:"playRound",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{name:"amount",type:"uint256"}],name:"withdrawWinnings",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{name:"amount",type:"uint256"}],name:"withdrawDeposit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{name:"netAmount",type:"uint256"}],name:"withdrawNet",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getPlatformStats",outputs:[{name:"players",type:"uint256"},{name:"games",type:"uint256"},{name:"winnings",type:"uint256"},{name:"poolBalance",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"FEE_BPS",outputs:[{name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"roundsPerPackage",outputs:[{name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"minDepositAmount",outputs:[{name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"minWithdrawAmount",outputs:[{name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"minWithdrawNet",outputs:[{name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"costPerRound",outputs:[{name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"playerAddress",type:"address"}],name:"getPlayerState",outputs:[{components:[{name:"depositedBalance",type:"uint128"},{name:"winningsBalance",type:"uint128"},{name:"totalDeposited",type:"uint128"},{name:"totalWithdrawn",type:"uint128"},{name:"lifetimeWinnings",type:"uint128"},{name:"pendingPayout",type:"uint128"},{name:"pendingGameId",type:"uint256"},{name:"roundsRemaining",type:"uint64"},{name:"totalRoundsPlayed",type:"uint64"},{name:"lastDepositTime",type:"uint64"},{name:"lastPlayTimestamp",type:"uint64"},{name:"totalWins",type:"uint64"},{name:"totalLosses",type:"uint64"},{name:"firstPlayTimestamp",type:"uint64"},{name:"decisionDeadline",type:"uint64"},{name:"currentPosition",type:"uint8"},{name:"pendingStartCell",type:"uint8"},{name:"pendingEndCell",type:"uint8"},{name:"hasActiveSession",type:"bool"},{name:"pendingRewardActive",type:"bool"},{name:"lastDirectionClockwise",type:"bool"},{name:"lastDiceValues",type:"uint8[5]"}],name:"PlayerState",type:"tuple"}],stateMutability:"view",type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"player",type:"address"},{indexed:!0,name:"gameId",type:"uint256"},{indexed:!1,name:"diceValues",type:"uint8[5]"},{indexed:!1,name:"diceSum",type:"uint8"},{indexed:!1,name:"isBaozi",type:"bool"},{indexed:!1,name:"isClockwise",type:"bool"},{indexed:!1,name:"startPosition",type:"uint8"},{indexed:!1,name:"endPosition",type:"uint8"},{indexed:!1,name:"payout",type:"uint256"}],name:"DiceGamePlayed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"player",type:"address"},{indexed:!0,name:"gameId",type:"uint256"},{indexed:!1,name:"startPosition",type:"uint8"},{indexed:!1,name:"endPosition",type:"uint8"},{indexed:!1,name:"payout",type:"uint256"},{indexed:!1,name:"decisionDeadline",type:"uint64"}],name:"PendingRewardCreated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"player",type:"address"},{indexed:!0,name:"gameId",type:"uint256"},{indexed:!1,name:"payout",type:"uint256"},{indexed:!1,name:"endPosition",type:"uint8"}],name:"PendingRewardClaimed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"player",type:"address"},{indexed:!0,name:"gameId",type:"uint256"},{indexed:!1,name:"forfeitedAmount",type:"uint256"},{indexed:!1,name:"endPosition",type:"uint8"}],name:"PendingRewardForfeited",type:"event"}],md=[{inputs:[{name:"cellNumber",type:"uint8"}],name:"getCellPayout",outputs:[{type:"int16"}],stateMutability:"view",type:"function"},{inputs:[],name:"getAllPayouts",outputs:[{type:"int16[30]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getBoardSequence",outputs:[{type:"uint8[26]"}],stateMutability:"view",type:"function"}],gd=[{inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],name:"approve",outputs:[{type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],name:"allowance",outputs:[{type:"uint256"}],stateMutability:"view",type:"function"}],wd=[{inputs:[],name:"getPoolBalance",outputs:[{name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getCurrentMultiplier",outputs:[{name:"",type:"uint256"}],stateMutability:"view",type:"function"}];function Is(){const{address:e}=Cn(),{writeContractAsync:t}=Xh(),i=On.contracts.GameController,o=On.contracts.MockUSDT,r=On.contracts.PrizePool,{data:n,refetch:s}=ut({address:i,abi:Ke,functionName:"getPlayerState",args:e?[e]:void 0,query:{enabled:!!e,refetchInterval:5e3}}),{data:a}=ut({address:On.contracts.GameBoard,abi:md,functionName:"getAllPayouts"}),{data:l}=ut({address:r,abi:wd,functionName:"getPoolBalance",query:{refetchInterval:5e3,refetchOnWindowFocus:!0}}),{data:c}=ut({address:r,abi:wd,functionName:"getCurrentMultiplier",query:{refetchInterval:5e3,refetchOnWindowFocus:!0}}),{data:h}=ut({address:i,abi:Ke,functionName:"FEE_BPS"}),{data:f}=ut({address:i,abi:Ke,functionName:"costPerRound"}),{data:g}=ut({address:i,abi:Ke,functionName:"roundsPerPackage"}),{data:p}=ut({address:i,abi:Ke,functionName:"minDepositAmount"}),{data:b}=ut({address:i,abi:Ke,functionName:"minWithdrawNet"}),{data:w}=ut({address:On.contracts.GameBoard,abi:md,functionName:"getBoardSequence"}),{data:C}=ut({address:i,abi:Ke,functionName:"getPlatformStats",query:{refetchInterval:1e4,refetchOnWindowFocus:!0}}),{data:k,refetch:v}=ut({address:o,abi:gd,functionName:"allowance",args:e?[e,i]:void 0,query:{enabled:!!e}}),y=async F=>{const Z=Cr(F,6);return t({address:o,abi:gd,functionName:"approve",args:[i,Z]})},S=async F=>{const Z=Cr(F,6);return t({address:i,abi:Ke,functionName:"deposit",args:[Z]})},T=async(F,Z=0)=>t({address:i,abi:Ke,functionName:"buyRounds",args:[BigInt(F),Z]}),L=async F=>{const Z=BigInt(Math.floor(Math.random()*1e6));return t({address:i,abi:Ke,functionName:"playRound",args:[F,Z]})},M=async()=>t({address:i,abi:Ke,functionName:"claimPendingReward",args:[]}),O=async()=>t({address:i,abi:Ke,functionName:"forfeitPendingReward",args:[]}),W=async F=>{const Z=F?Cr(F,6):BigInt(0);return t({address:i,abi:Ke,functionName:"withdrawWinnings",args:[Z]})},ie=async F=>{const Z=Cr(F,6);return t({address:i,abi:Ke,functionName:"withdrawNet",args:[Z]})};return{playerState:n?(()=>{const Z=(Array.isArray(n.lastDiceValues)?n.lastDiceValues:Array.from(n.lastDiceValues??[])).map(le=>Number(le)),ce=Z.reduce((le,Re)=>le+Re,0),Pe=Z.some(le=>le>0),ne=Pe&&Z.every(le=>le===Z[0]);return{depositedBalance:Fe(n.depositedBalance,6),winningsBalance:Fe(n.winningsBalance,6),totalDeposited:Fe(n.totalDeposited,6),totalWithdrawn:Fe(n.totalWithdrawn,6),lifetimeWinnings:Fe(n.lifetimeWinnings,6),pendingPayout:Fe(n.pendingPayout,6),pendingGameId:Number(n.pendingGameId),roundsRemaining:Number(n.roundsRemaining),totalRoundsPlayed:Number(n.totalRoundsPlayed),lastDepositTime:Number(n.lastDepositTime),lastPlayTimestamp:Number(n.lastPlayTimestamp),currentPosition:Number(n.currentPosition),hasActiveSession:n.hasActiveSession,totalWins:Number(n.totalWins),totalLosses:Number(n.totalLosses),decisionDeadline:Number(n.decisionDeadline),pendingStartCell:Number(n.pendingStartCell),pendingEndCell:Number(n.pendingEndCell),pendingRewardActive:n.pendingRewardActive,lastDirectionClockwise:n.lastDirectionClockwise,lastDiceValues:Z,lastDiceSum:ce,lastDiceIsBaozi:ne,hasRecordedRoll:Pe}})():null,cellPayouts:a?Array.from(a).map(F=>typeof F=="bigint"?Number(F):F):void 0,prizePoolBalance:l?Fe(l,6):void 0,prizePoolMultiplier:c?Number(c)/1e3:void 0,platformStats:C?{totalPlayers:Number(C[0]),totalGames:Number(C[1]),totalWinnings:Fe(C[2],6),poolBalance:Fe(C[3],6)}:void 0,withdrawFeeBps:h?Number(h):void 0,costPerRound:f?Fe(f,6):void 0,roundsPerPackage:g?Number(g):void 0,minDepositAmount:p?Fe(p,6):void 0,minWithdrawNet:b?Fe(b,6):void 0,boardSequence:w?Array.from(w,F=>Number(F)):void 0,deposit:S,approveUsdt:y,usdtAllowance:k?Fe(k,6):"0",buyRounds:T,playRound:L,claimPendingReward:M,forfeitPendingReward:O,withdrawWinnings:W,withdrawNet:ie,refetchPlayerState:s,refetchAllowance:v}}function Fh(e){var t,i,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(i=Fh(e[t]))&&(o&&(o+=" "),o+=i)}else for(i in e)e[i]&&(o&&(o+=" "),o+=i);return o}function Ho(){for(var e,t,i=0,o="",r=arguments.length;i<r;i++)(e=arguments[i])&&(t=Fh(e))&&(o&&(o+=" "),o+=t);return o}const a4=1913;function $e({value:e,duration:t=a4,precision:i,format:o,className:r}){const n=A.useRef(e),s=A.useRef(),[a,l]=A.useState(e),[c,h]=A.useState(null),[f,g]=A.useState(!1);A.useEffect(()=>{if(n.current===e)return;const w=n.current,C=e-w;if(C===0){h(null),l(e),n.current=e;return}h(C>0?"up":"down"),g(!0);const k=performance.now(),v=y=>{const S=y-k,T=Math.min(S/t,1),L=1-Math.pow(1-T,3),M=w+C*L;l(T===1?e:M),T<1?s.current=requestAnimationFrame(v):(n.current=e,s.current=void 0,window.setTimeout(()=>g(!1),t*.6))};return s.current=requestAnimationFrame(v),()=>{s.current!==void 0&&(cancelAnimationFrame(s.current),s.current=void 0)}},[e,t]);const p=A.useMemo(()=>typeof i=="number"?Number(a.toFixed(i)):a,[a,i]),b=A.useMemo(()=>{if(o)return o(p);const w=typeof i=="number"?i:0;return p.toLocaleString(void 0,{minimumFractionDigits:w,maximumFractionDigits:w})},[p,o,i]);return d.jsx("span",{className:Ho("animated-number",r,f&&c==="up"&&"animated-number--up",f&&c==="down"&&"animated-number--down"),children:b})}function l4(){const{isConnected:e}=Cn(),{platformStats:t}=Is(),i=A.useMemo(()=>new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}),[]),o=A.useMemo(()=>new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1,style:"currency",currency:"USD"}),[]),r=l=>l===void 0?"—":i.format(l),n=l=>{if(l===void 0)return"—";const c=typeof l=="number"?l:Number.isFinite(Number.parseFloat(l))?Number.parseFloat(l):NaN;return Number.isFinite(c)?o.format(c):"—"},s=[{icon:d.jsx(K5,{className:"w-8 h-8"}),title:"Provably Fair",description:"Verifiable on-chain randomness using Chainlink VRF. Every roll is transparent."},{icon:d.jsx(Wh,{className:"w-8 h-8"}),title:"Big Payouts",description:"Win up to 6000元 (~$857 USD) per round. Dynamic multipliers up to 4.0×."},{icon:d.jsx(e4,{className:"w-8 h-8"}),title:"Secure & Audited",description:"Smart contracts audited by top security firms. Your funds are safe."},{icon:d.jsx(r4,{className:"w-8 h-8"}),title:"Instant Payouts",description:"Winnings paid immediately to your wallet. Withdraw anytime."},{icon:d.jsx(Oh,{className:"w-8 h-8"}),title:"Dynamic Prize Pool",description:"Pool grows with every game. Pattern-based multipliers activate automatically."},{icon:d.jsx(o4,{className:"w-8 h-8"}),title:"Multi-Chain",description:"Play on Ethereum, Polygon, Arbitrum, Base, Optimism, BSC, and Avalanche."}],a=[{label:"Total Players",numericValue:(t==null?void 0:t.totalPlayers)??0,formatter:l=>r(l)},{label:"Games Played",numericValue:(t==null?void 0:t.totalGames)??0,formatter:l=>r(l)},{label:"Total Winnings",numericValue:t!=null&&t.totalWinnings?Number.parseFloat(t.totalWinnings):0,formatter:l=>n(l)},{label:"Current Pool",numericValue:t!=null&&t.poolBalance?Number.parseFloat(t.poolBalance):0,formatter:l=>n(l)}];return d.jsxs("div",{className:"space-y-20",children:[d.jsxs("section",{className:"text-center space-y-8 py-12",children:[d.jsxs(ye.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:[d.jsxs("h1",{className:"text-5xl md:text-7xl font-bold mb-4",children:[d.jsx("span",{className:"gradient-text",children:"Provably Fair"}),d.jsx("br",{}),d.jsx("span",{className:"text-white",children:"Blockchain Gaming"})]}),d.jsx("p",{className:"text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto",children:"Roll the dice, land on cells, win real USDT. Transparent, fair, and fun."})]}),d.jsxs(ye.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"flex flex-col sm:flex-row gap-4 justify-center",children:[e?d.jsx(Mt,{to:"/game",className:"btn-primary text-lg px-8 py-4",children:"🎲 Start Playing Now"}):d.jsx("button",{onClick:()=>Xi.open(),className:"btn-primary text-lg px-8 py-4",children:"🔗 Connect Wallet to Play"}),d.jsx(Mt,{to:"/rules",className:"btn-secondary text-lg px-8 py-4",children:"📖 Learn How to Play"})]}),d.jsx(ye.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:"grid grid-cols-2 md:grid-cols-4 gap-4 mt-16",children:a.map((l,c)=>d.jsxs("div",{className:"card",children:[d.jsx("p",{className:"text-3xl md:text-4xl font-bold gradient-text mb-2",children:d.jsx($e,{value:l.numericValue,format:h=>l.formatter(h)})}),d.jsx("p",{className:"text-sm text-slate-400",children:l.label})]},c))})]}),d.jsxs("section",{children:[d.jsxs(ye.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-12",children:[d.jsx("h2",{className:"text-4xl font-bold mb-4",children:"Why Choose LuckChain?"}),d.jsx("p",{className:"text-xl text-slate-400",children:"The most transparent and fair blockchain gaming platform"})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map((l,c)=>d.jsxs(ye.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:c*.1},className:"card hover:scale-105 transition-transform cursor-pointer",children:[d.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4",children:l.icon}),d.jsx("h3",{className:"text-xl font-bold mb-2",children:l.title}),d.jsx("p",{className:"text-slate-400",children:l.description})]},c))})]}),d.jsxs("section",{children:[d.jsxs(ye.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-12",children:[d.jsx("h2",{className:"text-4xl font-bold mb-4",children:"How It Works"}),d.jsx("p",{className:"text-xl text-slate-400",children:"Simple gameplay, big rewards"})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[{step:"1",title:"Connect Wallet",description:"Connect your wallet and buy USDT rounds"},{step:"2",title:"Choose Direction",description:"Select clockwise or counterclockwise movement"},{step:"3",title:"Roll Dice",description:"Roll 5 dice and watch them land"},{step:"4",title:"Win USDT",description:"Get paid based on your landing cell"}].map((l,c)=>d.jsxs(ye.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:c*.1},className:"card text-center",children:[d.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4",children:l.step}),d.jsx("h3",{className:"text-xl font-bold mb-2",children:l.title}),d.jsx("p",{className:"text-slate-400",children:l.description})]},c))})]}),d.jsxs("section",{className:"card text-center py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20",children:[d.jsx("h2",{className:"text-4xl font-bold mb-4",children:"Ready to Win Big?"}),d.jsx("p",{className:"text-xl text-slate-300 mb-8",children:"Join thousands of players winning real USDT every day"}),e?d.jsx(Mt,{to:"/game",className:"btn-primary text-lg px-8 py-4 inline-block",children:"🎲 Start Playing Now"}):d.jsx("button",{onClick:()=>Xi.open(),className:"btn-primary text-lg px-8 py-4",children:"🔗 Connect Wallet to Play"})]})]})}const c4="0 0 120 120",bd={x:60,y:60},yd={tailPath:"M95 95 L35 95 L35 45",headPoints:"35,20 55,45 15,45"},d4={blue:{primary:"rgba(56, 189, 248, 0.18)",secondary:"rgba(94, 234, 212, 0.5)",accent:"rgba(59, 130, 246, 0.9)",gradient:{x1:"0%",y1:"100%",x2:"100%",y2:"0%"}},purple:{primary:"rgba(129, 140, 248, 0.18)",secondary:"rgba(168, 85, 247, 0.55)",accent:"rgba(236, 72, 153, 0.9)",gradient:{x1:"0%",y1:"0%",x2:"100%",y2:"100%"}},green:{primary:"rgba(34, 197, 94, 0.18)",secondary:"rgba(74, 222, 128, 0.5)",accent:"rgba(22, 163, 74, 0.9)",gradient:{x1:"0%",y1:"100%",x2:"100%",y2:"0%"}},red:{primary:"rgba(239, 68, 68, 0.18)",secondary:"rgba(248, 113, 113, 0.5)",accent:"rgba(220, 38, 38, 0.9)",gradient:{x1:"0%",y1:"0%",x2:"100%",y2:"100%"}},yellow:{primary:"rgba(234, 179, 8, 0.18)",secondary:"rgba(250, 204, 21, 0.5)",accent:"rgba(202, 138, 4, 0.9)",gradient:{x1:"100%",y1:"0%",x2:"0%",y2:"100%"}}};function u4(e,t=0){const o=(e==="clockwise"?180:0)+t;return o!==0?`rotate(${o}deg)`:void 0}function vd({direction:e,onChange:t,disabled:i=!1,className:o,variant:r,arrowConfig:n,style:s}){const a=S=>{i||t(S)},l=r??"clockwise",{colorTheme:c="blue",rotation:h=0,customColors:f,isActive:g,headPoints:p}=n??{},b=f||d4[c],w=g??e===l,C=u4(l,h),k=`arrow-gradient-${l}-${c}-${w?"active":"inactive"}`,v=C!==void 0?{transform:C,transformOrigin:`${bd.x}px ${bd.y}px`}:void 0,y=l==="counterclockwise"?"movement-selector__button--ccw":"movement-selector__button--cw";return d.jsx("div",{className:Ho("movement-selector",o),children:d.jsx("button",{type:"button","aria-label":l==="counterclockwise"?"Move counterclockwise":"Move clockwise",onClick:()=>a(l),className:Ho("movement-selector__button",y,{"movement-selector__button--active":w,"movement-selector__button--disabled":i}),disabled:i,style:s,children:d.jsxs("svg",{viewBox:c4,role:"presentation",style:v,children:[d.jsx("defs",{children:d.jsxs("linearGradient",{id:k,x1:b.gradient.x1,y1:b.gradient.y1,x2:b.gradient.x2,y2:b.gradient.y2,children:[d.jsx("stop",{offset:"0%",stopColor:b.primary}),d.jsx("stop",{offset:"42%",stopColor:b.secondary}),d.jsx("stop",{offset:"100%",stopColor:b.accent})]})}),d.jsx("path",{className:"movement-selector__path",d:yd.tailPath,stroke:`url(#${k})`}),d.jsx("polygon",{className:"movement-selector__head",points:p??yd.headPoints,fill:`url(#${k})`})]})})})}function h4({cellNumber:e,payout:t,isActive:i=!1,isPenalty:o=!1,isPlaying:r=!1,animationDelay:n=0,appearanceClass:s}){const a=typeof t=="number";return d.jsxs(ye.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:n},className:Ho("game-board-cell",s,{"game-board-cell--active":i,"animate-pulse-glow":r&&i}),children:[d.jsx("div",{className:"game-board-cell__label",children:e}),d.jsx("div",{className:Ho("game-board-cell__payout",{"text-emerald-400":o}),children:a?d.jsx($e,{value:t,precision:0,format:p4}):"—"})]})}const p4=e=>`${e<0?"-":""}$${Math.abs(e).toLocaleString()}`;function f4({payouts:e,currentPosition:t,isPlaying:i,directionProps:o,totalPoolDisplay:r,boardLayout:n}){const s=new Map;e.forEach((l,c)=>{s.set(c+1,l)});const a=l=>l===void 0?"border-slate-700/30":l<0?"border-emerald-400 bg-emerald-500/10":l>=6e3?"border-yellow-500 bg-gradient-to-br from-yellow-500/20 to-orange-500/20":l>=1400?"border-blue-400 bg-gradient-to-br from-blue-500/20 to-cyan-500/20":l>=1e3?"border-cyan-500 bg-gradient-to-br from-cyan-500/20 to-blue-500/15":l>=300?"border-slate-500 bg-gradient-to-br from-slate-500/20 to-slate-600/20":"border-slate-600 bg-slate-800/40";return d.jsxs("div",{className:"game-board",children:[d.jsx("div",{className:"game-board__grid",children:n.flatMap((l,c)=>l.map((h,f)=>{if(h===null)return d.jsx("div",{className:"game-board__placeholder"},`empty-${c}-${f}`);const g=s.get(h),p=h===t,b=(g??0)<0;return d.jsx("div",{className:"game-board__wrapper",children:d.jsx(h4,{cellNumber:h,payout:g,isActive:p,isPenalty:b,isPlaying:i,appearanceClass:a(g),animationDelay:(c*l.length+f)*.015})},`cell-${h}`)}))}),d.jsx("div",{className:"game-board__overlay",children:d.jsxs("div",{className:"game-board__center",children:[d.jsx("div",{className:"game-board__pool-wrapper",children:d.jsx("div",{className:"game-board__pool",children:r})}),d.jsx(vd,{...o,variant:"counterclockwise",arrowConfig:{colorTheme:"blue",headPoints:"123,95 98,115 98,75"},style:{top:"60%",left:"19%",transform:"translate(-45%, 5%)"}}),d.jsx(vd,{...o,variant:"clockwise",arrowConfig:{colorTheme:"purple"},style:{top:"28%",right:"18%",transform:"translate(50%, -45%)"}})]})})]})}const m4=[0,0,0,0,2e3,1400,100,1200,500,1e3,200,1200,600,1e3,200,1200,400,1e3,300,1400,300,1e3,200,1400,300,1200,-580,1600,300,6e3],Dr=[11,18,9,20,7,22,5,24,29,26,27,28,25,30,23,6,21,8,19,10,17,12,15,14,13,16],g4=[[11,18,9,20,7,22,5,24,29],[16,null,null,null,null,null,null,null,26],[13,null,null,null,null,null,null,null,27],[14,null,null,null,null,null,null,null,28],[15,null,null,null,null,null,null,null,25],[12,17,10,19,8,21,6,23,30]],w4=g4.map(e=>e.map(t=>{if(t===null)return null;const i=Dr.indexOf(t);return i>=0?i:null}));function b4({currentPosition:e=11,isPlaying:t=!1,direction:i,onDirectionChange:o,directionDisabled:r=!1}){const{cellPayouts:n,prizePoolBalance:s,prizePoolMultiplier:a,boardSequence:l}=Is(),c=n??m4,h=A.useMemo(()=>{const g=l&&l.length===Dr.length?l:Array.from(Dr);return w4.map(p=>p.map(b=>b===null?null:g[b]??Dr[b]))},[l]),f=A.useMemo(()=>{const g=s!==void 0?Number.parseFloat(s):0,p=a!==void 0?Number(a):null;return d.jsxs("div",{className:"game-board__pool-content",children:[d.jsx("span",{className:"game-board__pool-label",children:"总奖励池"}),d.jsxs("span",{className:"game-board__pool-amount",children:[d.jsx($e,{value:g,precision:2,format:b=>b.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})})," ","USDT"]}),p!==null&&d.jsxs("span",{className:"game-board__pool-multiplier",children:["倍率 ",d.jsx($e,{value:p,precision:2}),"×"]})]})},[s,a]);return d.jsx(f4,{payouts:c,currentPosition:e,isPlaying:t,directionProps:{direction:i,onChange:o,disabled:r},totalPoolDisplay:f,boardLayout:h})}const xd={1:[[1,1]],2:[[0,0],[2,2]],3:[[0,0],[1,1],[2,2]],4:[[0,0],[0,2],[2,0],[2,2]],5:[[0,0],[0,2],[1,1],[2,0],[2,2]],6:[[0,0],[0,1],[0,2],[2,0],[2,1],[2,2]]},y4=e=>Math.min(6,Math.max(1,Math.floor(Number.isFinite(e)?e:1)))||1,v4=({value:e,theme:t="default",size:i})=>{const o=y4(e),r=xd[o]??xd[1],n=A.useMemo(()=>{if(i)return{width:i,height:i,"--dice-size":`${i}px`}},[i]);return d.jsxs("div",{className:`dice3d dice3d-theme-${t}`,style:n,children:[d.jsx("div",{className:"dice3d__surface",children:r.map(([s,a],l)=>d.jsx("span",{className:"dice3d__dot",style:{gridRow:s+1,gridColumn:a+1}},`${o}-${l}`))}),d.jsx("div",{className:"dice3d__shadow"})]})},zh=A.memo(v4);zh.displayName="Dice3D";function x4({diceSlots:e,diceSum:t,isBaozi:i,isRolling:o,showStats:r=!0,disabled:n=!1,onRoll:s}){return d.jsxs(ye.div,{className:"dice-roller-card",initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.45,ease:"easeOut"},children:[d.jsxs("div",{className:"dice-roller-card__header",children:[d.jsxs("div",{children:[d.jsx("p",{className:"dice-roller-card__eyebrow",children:"LuckChain Multi-Chain Dice"}),d.jsx("h2",{className:"dice-roller-card__title",children:"Dice Roller"}),d.jsx("p",{className:"dice-roller-card__subtitle",children:"Feel the toss. Own the roll."})]}),d.jsx("div",{className:"dice-roller-card__badge",children:d.jsx("span",{className:"dice-roller-card__badge-label",children:"VRF Powered"})})]}),d.jsx("div",{className:"dice-roller-card__faces",children:e.map((a,l)=>d.jsx("div",{className:"dice-roller-card__slot",children:d.jsx(zh,{value:a})},`${l}-${a}`))}),!o&&r&&d.jsxs("div",{className:"dice-roller-card__stats",children:[d.jsxs("div",{children:[d.jsx("p",{className:"dice-roller-card__stats-label",children:"Total Sum"}),d.jsx("p",{className:"dice-roller-card__stats-value",children:d.jsx($e,{value:t})})]}),d.jsx("div",{className:"dice-roller-card__divider"}),d.jsxs("div",{children:[d.jsx("p",{className:"dice-roller-card__stats-label",children:"Starting Cell"}),d.jsxs("p",{className:"dice-roller-card__stats-meta",children:[d.jsx($e,{value:t})," • Move"," ",d.jsx($e,{value:Math.max(t-1,0)})," steps"]})]})]}),i&&!o&&d.jsxs(ye.div,{className:"dice-roller-card__baozi",initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:320,damping:18},children:["🎉 豹子 (Leopard)! All ",e[0],"s!"]}),s&&d.jsx("button",{onClick:s,disabled:o||n,className:`dice-roller-card__button ${o||n?"dice-roller-card__button--disabled":""}`,children:o?d.jsxs("span",{className:"dice-roller-card__loading",children:[d.jsx("div",{className:"dice-roller-card__spinner"}),"Rolling..."]}):"🎲 Roll Dice"})]})}function C4({isRolling:e,diceValues:t,onRoll:i,disabled:o=!1,hasRolledOnce:r=!1}){const n=A.useMemo(()=>{let w=Math.floor(Math.random()*4294967295)||1;const C=()=>(w=(1664525*w+1013904223)%4294967296,w/4294967296);return Array.from({length:5},()=>Math.floor(C()*6)+1)},[]),[s,a]=A.useState(!1),l=(w,C)=>typeof w!="number"||Number.isNaN(w)||!Number.isFinite(w)?C:Math.min(6,Math.max(1,Math.floor(w))),c=A.useMemo(()=>{if(!t||t.length===0)return n;const w=t[t.length-1];return Array.from({length:5},(C,k)=>{const v=t[k];return typeof v=="number"?v:typeof w=="number"?w:n[k]})},[t,n]),h=A.useMemo(()=>l(c[0]??n[0],n[0]),[c,n]),f=A.useMemo(()=>c.map(w=>l(w,h)),[c,h]),g=A.useMemo(()=>f.join("-"),[f]);A.useEffect(()=>{if(e||!r){a(!1);return}if(!g)return;a(!0);const w=window.setTimeout(()=>a(!1),9e4);return()=>window.clearTimeout(w)},[g,e,r]);const p=f.reduce((w,C)=>w+C,0),b=f.every(w=>w===f[0]);return d.jsx(x4,{diceSlots:f,diceSum:p,isBaozi:b,isRolling:e,disabled:o,onRoll:i,showStats:s})}const vo=e=>e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2});function $4({depositBalance:e,depositUsd:t,withdrawableBalance:i,lifetimeDeposited:o,lifetimeWinnings:r,stats:n,onRefresh:s,onDepositClick:a,onWithdrawClick:l,isWithdrawDisabled:c=!1}){const h=Number.parseFloat(e)||0,f=Number.parseFloat(t)||0,g=Number.parseFloat(i)||0,p=Number.parseFloat(o)||0,b=Number.parseFloat(r)||0;return d.jsxs("div",{className:"balance-card",children:[d.jsxs("div",{className:"balance-card__header",children:[d.jsx("h2",{className:"balance-card__title",children:"Your Balance"}),d.jsx("button",{className:"balance-card__refresh",onClick:s,children:"🔄 Refresh"})]}),d.jsxs(ye.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.35,ease:"easeOut"},className:"balance-card__summary",children:[d.jsxs("div",{className:"balance-card__summary-item",children:[d.jsx("span",{className:"balance-card__summary-label",children:"Deposited Balance"}),d.jsxs("span",{className:"balance-card__summary-value",children:[d.jsx($e,{value:h,precision:2,format:w=>vo(w)})," ","USDT"]}),d.jsxs("span",{className:"balance-card__summary-sub",children:["≈ $",d.jsx($e,{value:f,precision:2,format:vo})," USD"]})]}),d.jsxs("div",{className:"balance-card__summary-item",children:[d.jsx("span",{className:"balance-card__summary-label",children:"Earnings Balance"}),d.jsxs("span",{className:"balance-card__summary-value",children:[d.jsx($e,{value:g,precision:2,format:w=>vo(w)})," ","USDT"]})]})]}),d.jsxs("div",{className:"balance-card__breakdown",children:[d.jsxs("div",{className:"balance-card__breakdown-card",children:[d.jsxs("div",{className:"balance-card__breakdown-head",children:[d.jsx(q5,{className:"balance-card__breakdown-icon text-blue-400",size:16}),d.jsx("span",{className:"balance-card__breakdown-label",children:"Acc. Deposited"})]}),d.jsx("span",{className:"balance-card__breakdown-value",children:d.jsx($e,{value:p,precision:2,format:vo})}),d.jsx("span",{className:"balance-card__breakdown-unit",children:"USDT"})]}),d.jsxs("div",{className:"balance-card__breakdown-card",children:[d.jsxs("div",{className:"balance-card__breakdown-head",children:[d.jsx(Oh,{className:"balance-card__breakdown-icon text-green-400",size:16}),d.jsx("span",{className:"balance-card__breakdown-label",children:"Acc. Winnings"})]}),d.jsx("span",{className:"balance-card__breakdown-value text-green-400",children:d.jsx($e,{value:b,precision:2,format:vo,className:"text-green-400"})}),d.jsx("span",{className:"balance-card__breakdown-unit",children:"USDT"})]})]}),n&&d.jsxs("div",{className:"balance-card__stats",children:[d.jsxs("div",{children:[d.jsx("span",{className:"balance-card__stats-label",children:"Rounds Remaining"}),d.jsx("span",{className:"balance-card__stats-value text-yellow-400",children:d.jsx($e,{value:n.roundsRemaining})})]}),d.jsxs("div",{children:[d.jsx("span",{className:"balance-card__stats-label",children:"Acc. Played"}),d.jsx("span",{className:"balance-card__stats-value",children:d.jsx($e,{value:n.totalRoundsPlayed})})]}),d.jsxs("div",{children:[d.jsx("span",{className:"balance-card__stats-label",children:"Acc.Wins"}),d.jsx("span",{className:"balance-card__stats-value text-green-400",children:d.jsx($e,{value:n.totalWins})})]})]}),d.jsxs("div",{className:"balance-card__actions",children:[d.jsx("button",{className:"balance-card__action-secondary",onClick:a,children:"💰 Deposit"}),d.jsx("button",{className:"balance-card__action-primary",onClick:l,disabled:c,children:"💸 Withdraw"})]})]})}function Vl({isOpen:e,title:t,onClose:i,children:o,footer:r,widthClassName:n="max-w-lg"}){return d.jsx(Wl,{children:e&&d.jsxs(ye.div,{className:"fixed inset-0 z-50 flex items-center justify-center",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[d.jsx(ye.div,{className:"absolute inset-0 bg-slate-950/70 backdrop-blur",onClick:i,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}}),d.jsx(ye.div,{className:`relative z-10 w-full ${n} mx-4`,initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},transition:{type:"spring",stiffness:260,damping:20},children:d.jsxs("div",{className:"card p-6 shadow-xl border border-white/5 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950",children:[d.jsxs("div",{className:"flex items-start justify-between mb-4",children:[d.jsx("h3",{className:"text-xl font-semibold text-white",children:t}),d.jsx("button",{onClick:i,className:"text-slate-400 hover:text-slate-200 transition-colors","aria-label":"Close modal",children:"✕"})]}),d.jsx("div",{className:"text-slate-300 space-y-4",children:o}),r&&d.jsx("div",{className:"mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end",children:r})]})})]})})}function k4({isOpen:e,amount:t,allowance:i,sessionCost:o,sessionRounds:r,roundCost:n,minDeposit:s,depositFeePercent:a,isProcessing:l,needsApproval:c,waitingForApproval:h,approvalCountdown:f,onAmountChange:g,onClose:p,onApprove:b,onConfirm:w}){const C=()=>{c?b():w()};return d.jsx(Vl,{isOpen:e,onClose:p,title:"Deposit USDT",children:d.jsxs("div",{className:"deposit-modal",children:[d.jsxs("p",{className:"deposit-modal__description",children:["Enter the amount of USDT you would like to deposit into the game contract. Each session consumes",d.jsxs("span",{className:"deposit-modal__highlight",children:[" ",o.toLocaleString()," USDT "]}),"(",r," rounds × ",n," USDT)."]}),d.jsxs("div",{className:"deposit-modal__meta",children:[d.jsxs("span",{className:"deposit-modal__meta-label",children:["Minimum deposit: ",s," USDT"]}),d.jsxs("span",{className:"deposit-modal__meta-label",children:["Fee: ",a.toFixed(1),"%"]})]}),d.jsxs("div",{className:"deposit-modal__field",children:[d.jsx("label",{className:"deposit-modal__label",children:"Amount (USDT)"}),d.jsx("input",{type:"text",inputMode:"numeric",pattern:"[0-9]*",className:"theme-input deposit-modal__input",style:{backgroundColor:"#0b1532"},value:t,onChange:k=>g(k.target.value),disabled:l})]}),d.jsxs("div",{className:"deposit-modal__allowance",children:["Current allowance: ",i.toFixed(2)," USDT"]}),d.jsxs("div",{className:"deposit-modal__actions",children:[d.jsx("button",{className:"theme-button theme-button--ghost",onClick:p,disabled:l,children:"Cancel"}),d.jsx("button",{className:"theme-button theme-button--primary",onClick:C,disabled:l||h,children:l?d.jsxs("span",{className:"deposit-modal__loading",children:[d.jsx(js,{className:"w-4 h-4 animate-spin"}),"Processing..."]}):h?`Finalizing (${f}s)`:c?"Approve USDT":"Confirm Deposit"})]})]})})}function S4({isOpen:e,amount:t,minWithdraw:i,isProcessing:o,onAmountChange:r,onClose:n,onConfirm:s,feeBps:a}){const l=(a/100).toFixed(2).replace(/\.00$/,"");return d.jsx(Vl,{isOpen:e,onClose:n,title:"Withdraw Funds",children:d.jsxs("div",{className:"withdraw-modal",children:[d.jsx("p",{className:"withdraw-modal__description",children:"Enter the net amount you would like to receive. Winnings are used first, then your deposit balance, and we automatically add the fee before submitting the withdrawal so you still receive the full amount you enter."}),d.jsxs("div",{className:"withdraw-modal__meta",children:[d.jsxs("span",{className:"withdraw-modal__meta-label",children:["Minimum withdrawal: ",i," USDT"]}),d.jsxs("span",{className:"withdraw-modal__meta-label",children:["Fee: ",l,"%"]})]}),d.jsxs("div",{className:"withdraw-modal__field",children:[d.jsx("label",{className:"withdraw-modal__label",children:"Amount (USDT)"}),d.jsx("input",{type:"text",inputMode:"numeric",pattern:"[0-9]*",className:"theme-input withdraw-modal__input",style:{backgroundColor:"#0b1532"},value:t,onChange:c=>r(c.target.value),disabled:o})]}),d.jsxs("div",{className:"withdraw-modal__actions",children:[d.jsx("button",{className:"theme-button theme-button--ghost",onClick:n,disabled:o,children:"Cancel"}),d.jsx("button",{className:"theme-button theme-button--primary",onClick:s,disabled:o,children:o?d.jsxs("span",{className:"withdraw-modal__loading",children:[d.jsx(js,{className:"w-4 h-4 animate-spin"}),"Processing..."]}):"Confirm Withdraw"})]})]})})}function A4(){const{address:e,isConnected:t}=Cn(),{playerState:i,refetchPlayerState:o,deposit:r,approveUsdt:n,usdtAllowance:s,refetchAllowance:a,withdrawNet:l,withdrawFeeBps:c,roundsPerPackage:h,costPerRound:f,minDepositAmount:g,minWithdrawNet:p}=Is(),[b,w]=A.useState(!1),[C,k]=A.useState(!1),[v,y]=A.useState(!1),[S,T]=A.useState("1000"),[L,M]=A.useState("0"),[O,W]=A.useState(0),ie=ve=>{T(ve.replace(/[^0-9]/g,""))},ue=ve=>{var vr;const Q=ve.replace(/[^0-9.]/g,"");if(Q===""){M("");return}const Hi=Q.split(".");let gi=((vr=Hi[0])==null?void 0:vr.replace(/^0+(?=\d)/,""))||"0",Xt=Hi[1]??"";Hi.length>2&&(Xt+=Hi.slice(2).join("")),Xt.length>2&&(Xt=Xt.slice(0,2));const Bt=Xt.length>0?`${gi}.${Xt}`:gi,yr=Number.parseFloat(Bt);if(Number.isNaN(yr)){M("");return}if(yr>Ce){M(Ce.toFixed(2));return}M(Bt)};if(A.useEffect(()=>{if(O<=0)return;const ve=setInterval(()=>{W(Q=>Q<=1?0:Q-1)},1e3);return()=>clearInterval(ve)},[O]),!t||!e)return d.jsxs("div",{className:"card p-6 text-center",children:[d.jsx(Co,{className:"w-12 h-12 mx-auto mb-4 text-slate-500"}),d.jsx("p",{className:"text-slate-400",children:"Connect wallet to view balance"})]});const F=(i==null?void 0:i.depositedBalance)||"0",Z=(i==null?void 0:i.winningsBalance)||"0",ce=(i==null?void 0:i.totalDeposited)||"0",Pe=(i==null?void 0:i.lifetimeWinnings)||"0",ne=A.useMemo(()=>parseFloat(F),[F]),le=A.useMemo(()=>parseFloat(Z),[Z]),Re=(c??0)/1e4,N=Re>=1?0:Re,oe=(ne*1).toFixed(2),se=Math.max(le*(1-N),0),X=Math.max(ne*(1-N),0),re=se+X,J=Math.max(parseFloat(p||"0"),0),Ce=re,Ze=N<1?Ce/(1-N):0,fe=re<J||J===0||Ze<J,zi=Number(S||"0"),ct=parseFloat(s)+1e-6<zi,nt=O>0,Ie=h??10,Ui=f?parseFloat(f):100,wr=Ie*Ui,In=Math.max(parseFloat(g||"0"),0),Ds=async()=>{if(nt)return;const ve=Number(S);if(Number.isNaN(ve)||ve<=0){ee.error("Please enter a valid amount.");return}try{y(!0);const Q=ee.loading("Approving USDT...");await n(S),ee.success("USDT approved! Waiting for confirmation…",{id:Q}),await(a==null?void 0:a()),W(5)}catch(Q){console.error("Approve error:",Q),ee.error((Q==null?void 0:Q.shortMessage)||(Q==null?void 0:Q.message)||"Approval failed"),W(0)}finally{ee.dismiss(),y(!1)}},br=async()=>{const ve=Number(S);if(Number.isNaN(ve)||ve<=0){ee.error("Please enter a valid amount.");return}if(ct||nt){ee.error("Please approve USDT before depositing.");return}if(ve<In){ee.error(`Minimum deposit is ${In.toFixed(0)} USDT.`);return}try{y(!0);const Q=ee.loading(`Depositing ${ve} USDT...`);await r(S),ee.success("Deposit successful!",{id:Q}),w(!1),T("1000"),await Promise.all([o==null?void 0:o(),a==null?void 0:a()])}catch(Q){console.error("Deposit error:",Q),ee.error((Q==null?void 0:Q.shortMessage)||(Q==null?void 0:Q.message)||"Deposit failed")}finally{ee.dismiss(),y(!1)}},Ls=async()=>{const ve=Number(L);if(Number.isNaN(ve)||ve<=0){ee.error("Please enter a valid amount.");return}if(ve<J){ee.error(`Minimum withdrawal is ${J.toFixed(0)} USDT.`);return}if(ve>Ce){ee.error("Amount exceeds available withdrawable balance.");return}try{y(!0);const Q=ee.loading(`Withdrawing ${ve} USDT...`);await l(L),ee.success("Withdrawal successful!",{id:Q}),k(!1),await(o==null?void 0:o())}catch(Q){console.error("Withdraw error:",Q),ee.error((Q==null?void 0:Q.shortMessage)||(Q==null?void 0:Q.message)||"Withdrawal failed")}finally{ee.dismiss(),y(!1)}};return d.jsxs(d.Fragment,{children:[d.jsx($4,{depositBalance:parseFloat(F).toFixed(2),depositUsd:oe,withdrawableBalance:parseFloat(Z).toFixed(2),lifetimeDeposited:parseFloat(ce).toFixed(2),lifetimeWinnings:parseFloat(Pe).toFixed(2),stats:i?{roundsRemaining:i.roundsRemaining,totalRoundsPlayed:i.totalRoundsPlayed,totalWins:i.totalWins}:null,onRefresh:()=>o==null?void 0:o(),onDepositClick:()=>{T(String(Math.max(In,1e3))),w(!0)},onWithdrawClick:()=>{re>=J&&J>0?M(J.toFixed(2)):M("0"),k(!0)},isWithdrawDisabled:fe}),d.jsx(k4,{isOpen:b,amount:S,allowance:parseFloat(s||"0"),sessionCost:wr,sessionRounds:Ie,roundCost:Ui,isProcessing:v,needsApproval:ct,waitingForApproval:nt,approvalCountdown:O,onAmountChange:ie,minDeposit:In,depositFeePercent:(c??0)/100,onClose:()=>{v||w(!1)},onApprove:Ds,onConfirm:br}),d.jsx(S4,{isOpen:C,amount:L,minWithdraw:J,isProcessing:v,onAmountChange:ue,onClose:()=>{v||k(!1)},feeBps:c??0,onConfirm:Ls})]})}const ca=2,E4=()=>Array.from({length:5},()=>Math.floor(Math.random()*6)+1);function _4(){const{isConnected:e}=Cn(),{playerState:t,playRound:i,buyRounds:o,claimPendingReward:r,forfeitPendingReward:n,refetchPlayerState:s,roundsPerPackage:a,costPerRound:l}=Is(),[c,h]=A.useState(!1),[f,g]=A.useState("clockwise"),[p,b]=A.useState(()=>E4()),[w,C]=A.useState(!1),[k,v]=A.useState(!1),[y,S]=A.useState(!1),[T,L]=A.useState(null),M=!!(t!=null&&t.pendingRewardActive),O=(t==null?void 0:t.roundsRemaining)??0,W=a??10,ie=l?parseFloat(l):100,ue=W*ie,F=A.useMemo(()=>t!=null&&t.pendingPayout?parseFloat(t.pendingPayout):0,[t==null?void 0:t.pendingPayout]);A.useEffect(()=>{!(t!=null&&t.lastDiceValues)||!(t.hasRecordedRoll&&t.lastDiceValues.some(oe=>oe>0))||(b(t.lastDiceValues),C(!0),g(t.lastDirectionClockwise?"clockwise":"counterclockwise"))},[t==null?void 0:t.lastDiceValues,t==null?void 0:t.lastDirectionClockwise,t==null?void 0:t.hasRecordedRoll]),A.useEffect(()=>{if(!(t!=null&&t.pendingRewardActive)||!t.decisionDeadline){L(null);return}const N=()=>{const se=Math.floor(Date.now()/1e3),X=Math.max(0,t.decisionDeadline-se);L(X)};N();const oe=setInterval(N,1e3);return()=>clearInterval(oe)},[t==null?void 0:t.pendingRewardActive,t==null?void 0:t.decisionDeadline]);const Z=Number.parseFloat((t==null?void 0:t.depositedBalance)??"0"),ce=Z>=ue,Pe=async()=>{if(!e){Xi.open();return}if(M){ee.error("Resolve your pending reward before buying a new session.");return}if(t!=null&&t.hasActiveSession&&O>0){ee.error(`Finish your current ${W}-round session before purchasing another.`);return}if(!ce){ee.error(`Deposit at least ${ue.toLocaleString()} USDT to start a session.`);return}try{S(!0);const N=ee.loading(`Purchasing new ${W}-round session (${ue.toLocaleString()} USDT)...`);await o(W,0),ee.success("Session purchased! Good luck 🍀",{id:N}),v(!1),await(s==null?void 0:s())}catch(N){console.error("Buy rounds error:",N),ee.error((N==null?void 0:N.shortMessage)||(N==null?void 0:N.message)||"Failed to buy rounds")}finally{S(!1)}},ne=async()=>{if(!e){Xi.open();return}if(M){ee.error("Decide on your pending reward before rolling again.");return}if(O<=0){ee.error("No rounds remaining! Purchase a new session to keep playing.");return}let N=null;try{h(!0);const oe=ee.loading("Rolling dice...");N=setInterval(()=>{b([Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1])},100),await i(f==="clockwise"),C(!0),ee.success("Dice rolled! Check your results.",{id:oe}),await(s==null?void 0:s())}catch(oe){console.error("Play round error:",oe),ee.error((oe==null?void 0:oe.shortMessage)||(oe==null?void 0:oe.message)||"Failed to play round")}finally{N&&clearInterval(N),h(!1)}},le=async()=>{if(!e){Xi.open();return}try{const N=ee.loading("Claiming reward and ending session...");await r(),ee.success("Reward claimed! Session cleared.",{id:N}),await(s==null?void 0:s())}catch(N){console.error("Claim reward error:",N),ee.error((N==null?void 0:N.shortMessage)||(N==null?void 0:N.message)||"Failed to claim reward")}},Re=async()=>{if(!e){Xi.open();return}try{const N=ee.loading("Forfeiting reward and continuing session...");await n(),ee.success("Reward forfeited. Continue playing!",{id:N}),await(s==null?void 0:s())}catch(N){console.error("Forfeit reward error:",N),ee.error((N==null?void 0:N.shortMessage)||(N==null?void 0:N.message)||"Failed to forfeit reward")}};return d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"text-center",children:[d.jsx("h1",{className:"text-4xl font-bold mb-2",children:"🎲 Dice Game"}),d.jsx("p",{className:"text-slate-400",children:"Roll the dice, choose your direction, win USDT!"})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[d.jsxs("div",{className:"space-y-6",children:[d.jsx(A4,{}),d.jsxs("div",{className:"card p-6",children:[d.jsx("h3",{className:"text-lg font-bold mb-2",children:"Buy Session"}),d.jsxs("p",{className:"text-sm text-slate-400 mb-4",children:["Each session includes ",W," fixed rounds (5 dice per round) for"," ",ue.toLocaleString()," USDT. Complete or cash out within the session."]}),d.jsxs("button",{className:"w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed",onClick:()=>v(!0),disabled:y||M||(t==null?void 0:t.hasActiveSession)&&O>0||!ce,children:[d.jsx(t4,{className:"w-5 h-5"}),y?"Processing...":`Start ${W}-Round Session`]}),M&&d.jsx("p",{className:"mt-3 text-xs text-yellow-400",children:"Resolve your pending reward before buying another session."})]})]}),d.jsx("div",{className:"lg:col-span-2",children:d.jsx(b4,{currentPosition:(t==null?void 0:t.currentPosition)||11,isPlaying:c,direction:f,onDirectionChange:g,directionDisabled:c||M})})]}),M&&d.jsx("div",{className:"card p-6 border border-yellow-500/30 bg-yellow-500/5",children:d.jsxs("div",{className:"flex flex-col gap-4 md:flex-row md:items-center md:justify-between",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"text-lg font-bold text-yellow-200",children:"Pending Reward"}),d.jsxs("p",{className:"text-sm text-slate-300 mt-1",children:["Decide within"," ",d.jsx($e,{value:T??0})," seconds or the reward is automatically forfeited."]}),d.jsxs("div",{className:"flex items-center gap-2 mt-3",children:[d.jsx(i4,{className:"w-4 h-4 text-yellow-300"}),d.jsxs("span",{className:"text-2xl font-bold text-yellow-300",children:[d.jsx($e,{value:F,precision:ca,format:N=>N.toLocaleString(void 0,{minimumFractionDigits:ca,maximumFractionDigits:ca})})," ","USDT"]})]}),d.jsxs("p",{className:"text-sm text-slate-400 mt-1",children:["Landing cell:"," ",d.jsx($e,{value:(t==null?void 0:t.pendingEndCell)??0})," • Rounds remaining:"," ",d.jsx($e,{value:O})]})]}),d.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 min-w-[220px]",children:[d.jsx("button",{className:"btn-primary bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold",onClick:le,children:"Claim & End Session"}),d.jsx("button",{className:"btn-secondary border-yellow-500/40 text-yellow-200 hover:bg-yellow-500/10",onClick:Re,children:"Continue (Forfeit Reward)"})]})]})}),d.jsx(C4,{isRolling:c,diceValues:p,onRoll:ne,disabled:!O||M,hasRolledOnce:w}),d.jsxs("div",{className:"card p-6",children:[d.jsx("h3",{className:"text-lg font-bold mb-4",children:"🎯 How to Play"}),d.jsxs("ol",{className:"space-y-2 text-slate-400",children:[d.jsxs("li",{children:["1. Buy a session: ",W," rounds × ",ie.toLocaleString()," USDT ="," ",d.jsx($e,{value:ue,format:N=>N.toLocaleString()})," USDT upfront."]}),d.jsx("li",{children:"2. Each round rolls 5 dice. Starting cell = dice sum (minimum 5)."}),d.jsx("li",{children:"3. Choose clockwise or counterclockwise; move (dice sum - 1) steps."}),d.jsx("li",{children:"4. Landing cell shows the reward. Positive rewards enter a 60s decision timer."}),d.jsx("li",{children:"5. Claim to end the session immediately or forfeit to continue playing."}),d.jsx("li",{children:"6. Hitting 豹子 (all dice identical) pays 2,000元 base instantly and ends the session."}),d.jsx("li",{children:"7. If the session ends without claiming, any unused rounds are cleared."})]})]}),d.jsx(Vl,{isOpen:k,title:`Start ${W}-Round Session`,onClose:()=>{y||v(!1)},children:d.jsxs("div",{className:"space-y-4",children:[d.jsxs("p",{className:"text-sm text-slate-400",children:["You are purchasing"," ",d.jsxs("span",{className:"text-blue-300 font-semibold",children:[W," fixed rounds"]})," for"," ",d.jsxs("span",{className:"text-blue-300 font-semibold",children:[ue.toLocaleString()," USDT"]}),". Rounds must be played within this session—unclaimed rewards or unused rounds are cleared when the session ends."]}),d.jsxs("p",{className:"text-xs text-slate-500",children:["Current deposit balance: ",Z.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})," USDT"]}),d.jsxs("div",{className:"rounded-lg bg-purple-500/10 border border-purple-500/20 p-3 text-sm text-purple-200",children:["Total cost:"," ",d.jsx($e,{value:ue,format:N=>N.toLocaleString()})," USDT • Rounds per session: ",W]}),d.jsxs("div",{className:"flex flex-col-reverse gap-3 sm:flex-row sm:justify-end",children:[d.jsx("button",{className:"btn-secondary",onClick:()=>v(!1),disabled:y,children:"Cancel"}),d.jsx("button",{className:"btn-primary disabled:opacity-60",onClick:Pe,disabled:y,children:y?d.jsxs("span",{className:"flex items-center gap-2",children:[d.jsx(js,{className:"w-4 h-4 animate-spin"}),"Processing..."]}):"Confirm Session Purchase"})]})]})})]})}const Cd=[{anonymous:!1,inputs:[{indexed:!0,name:"player",type:"address"},{indexed:!0,name:"action",type:"uint8"},{indexed:!0,name:"gameId",type:"uint256"},{indexed:!1,name:"amount",type:"uint256"},{indexed:!1,name:"rounds",type:"uint256"},{indexed:!1,name:"diceValues",type:"uint8[5]"},{indexed:!1,name:"diceSum",type:"uint8"},{indexed:!1,name:"isBaozi",type:"bool"},{indexed:!1,name:"isClockwise",type:"bool"},{indexed:!1,name:"startPosition",type:"uint8"},{indexed:!1,name:"endPosition",type:"uint8"},{indexed:!1,name:"payout",type:"uint256"},{indexed:!1,name:"timestamp",type:"uint256"}],name:"ActivityLogged",type:"event"}],P4={0:"Deposit",1:"Withdraw",2:"Buy Session",3:"Play Round",4:"Pending Reward",5:"Reward Claimed",6:"Reward Forfeited",7:"Leopard Bonus"};function T4(){const{address:e}=Cn(),t=Qh(),[i,o]=A.useState([]),[r,n]=A.useState(!1),[s,a]=A.useState(null),l=A.useMemo(()=>On.contracts.GameActivityLogger,[]);return A.useEffect(()=>{if(!e||!t||!l||l==="0x0000000000000000000000000000000000000000"){o([]);return}let c=!0,h;const f=async p=>{if(!p.args)return null;const b=Number(p.args.action??0),w=Array.isArray(p.args.diceValues)?p.args.diceValues:[],C=p.blockHash?await t.getBlock({blockHash:p.blockHash}):void 0;return{txHash:p.transactionHash,action:P4[b]??"Unknown",gameId:Number(p.args.gameId??0),amount:Fe(p.args.amount??0n,6),rounds:Number(p.args.rounds??0),diceValues:w.map(k=>Number(k)),diceSum:Number(p.args.diceSum??0),isBaozi:!!p.args.isBaozi,isClockwise:!!p.args.isClockwise,startPosition:Number(p.args.startPosition??0),endPosition:Number(p.args.endPosition??0),payout:Fe(p.args.payout??0n,6),timestamp:p.args.timestamp?Number(p.args.timestamp):C?Number(C.timestamp):void 0,blockNumber:p.blockNumber??0n}};return(async()=>{try{n(!0),a(null);const p=await t.getContractEvents({address:l,abi:Cd,eventName:"ActivityLogged",fromBlock:0n,...e?{args:{player:e}}:{}}),b=(await Promise.all(p.map(f))).filter(C=>C!==null);if(!c)return;const w=b.sort((C,k)=>Number(k.blockNumber-C.blockNumber));o(w)}catch(p){if(!c)return;console.error("Failed to fetch history",p),a((p==null?void 0:p.shortMessage)||(p==null?void 0:p.message)||"Failed to load history")}finally{c&&n(!1)}})(),h=t.watchContractEvent({address:l,abi:Cd,eventName:"ActivityLogged",...e?{args:{player:e}}:{},onLogs:async p=>{const b=(await Promise.all(p.map(f))).filter(w=>w!==null);o(w=>{const C=new Set(w.map(v=>v.txHash));return[...b.filter(v=>!C.has(v.txHash)),...w].sort((v,y)=>Number(y.blockNumber-v.blockNumber))})}}),()=>{c=!1,h==null||h()}},[e,t,l]),{history:i,isLoading:r,error:s}}function $d(e){return e?new Date(e*1e3).toLocaleString():"Pending"}function N4(){const{isConnected:e}=Cn(),{history:t,isLoading:i,error:o}=T4();if(!e)return d.jsxs(ye.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},className:"card text-center py-20",children:[d.jsx("div",{className:"text-6xl mb-6",children:"🔌"}),d.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Connect to View History"}),d.jsx("p",{className:"text-slate-400",children:"Your game history will appear here once you connect your wallet and play."})]});if(i)return d.jsxs(ye.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},className:"card text-center py-20",children:[d.jsx(js,{className:"w-10 h-10 mx-auto mb-4 animate-spin text-blue-400"}),d.jsx("p",{className:"text-slate-400",children:"Loading your game history..."})]});if(o)return d.jsxs(ye.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},className:"card text-center py-20",children:[d.jsx("div",{className:"text-6xl mb-6",children:"⚠️"}),d.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Unable to fetch history"}),d.jsx("p",{className:"text-slate-400",children:o})]});if(!t.length)return d.jsxs(ye.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},className:"card text-center py-20",children:[d.jsx("div",{className:"text-6xl mb-6",children:"📊"}),d.jsx("h1",{className:"text-3xl font-bold mb-4",children:"No Activity Yet"}),d.jsx("p",{className:"text-slate-400 mb-2",children:"Play, deposit, withdraw or buy rounds to see activity here."}),d.jsx("p",{className:"text-sm text-slate-500",children:"Every action is recorded directly from on-chain events."})]});const r=t.filter(n=>n.action==="Play Round"&&Number(n.payout)>0||n.action==="Leopard Bonus").length;return d.jsx(ye.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},children:d.jsxs("div",{className:"card mb-6",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsxs("div",{children:[d.jsx("h1",{className:"text-2xl font-bold",children:"Game Activity"}),d.jsx("p",{className:"text-sm text-slate-400",children:"Pulled directly from the on-chain activity logger (most recent first)"})]}),d.jsxs("div",{className:"flex items-center gap-3 text-sm text-slate-400",children:[d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx(Z5,{className:"w-4 h-4"}),t.filter(n=>n.action==="Deposit").length," Deposits"]}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx(Wh,{className:"w-4 h-4"}),r," Wins"]})]})]}),d.jsx("div",{className:"overflow-hidden rounded-xl border border-white/5",children:d.jsxs("table",{className:"w-full text-sm",children:[d.jsx("thead",{className:"bg-slate-900/70 text-slate-300 uppercase text-xs tracking-wide",children:d.jsxs("tr",{children:[d.jsx("th",{className:"px-4 py-3 text-left",children:"Action"}),d.jsx("th",{className:"px-4 py-3 text-left",children:"Date"}),d.jsx("th",{className:"px-4 py-3 text-left",children:"Details"}),d.jsx("th",{className:"px-4 py-3 text-left",children:"Payout / Amount"}),d.jsx("th",{className:"px-4 py-3 text-left",children:"Round Info"})]})}),d.jsx("tbody",{className:"divide-y divide-slate-800/60",children:t.map(n=>d.jsxs("tr",{className:"hover:bg-slate-900/40",children:[d.jsx("td",{className:"px-4 py-3 font-semibold text-slate-200",children:n.action}),d.jsx("td",{className:"px-4 py-3 text-slate-400",children:d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(G5,{className:"w-4 h-4"}),$d(n.timestamp)]})}),d.jsx("td",{className:"px-4 py-3 text-slate-300 space-y-1",children:n.action==="Play Round"?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"font-mono text-xs bg-white/5 rounded px-2 py-1",children:["Dice: ",n.diceValues.length?n.diceValues.join(" · "):"—"," (Σ ",n.diceSum,")"]}),d.jsxs("div",{className:"text-xs text-slate-400",children:["Direction: ",n.isClockwise?"Clockwise":"Counter"]}),d.jsxs("div",{className:"text-xs text-slate-400",children:["Position: ",n.startPosition," → ",n.endPosition]}),n.isBaozi&&d.jsx("div",{className:"text-xs font-semibold text-green-300",children:"🎉 Baozi Bonus!"})]}):n.action==="Buy Session"?d.jsxs("div",{className:"text-xs text-slate-400",children:["Started session of ",n.rounds||10," rounds for ",Number(n.amount).toFixed(2)," USDT"]}):n.action==="Pending Reward"?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"text-xs text-yellow-200",children:["Potential payout: ",Number(n.payout).toFixed(2)," USDT"]}),d.jsxs("div",{className:"text-xs text-slate-400",children:["Landing cell: ",n.endPosition," • Decision deadline: ",$d(n.timestamp)]})]}):n.action==="Reward Claimed"?d.jsxs("div",{className:"text-xs text-green-300",children:["Claimed ",Number(n.payout).toFixed(2)," USDT from cell ",n.endPosition]}):n.action==="Reward Forfeited"?d.jsxs("div",{className:"text-xs text-slate-400",children:["Forfeited ",Number(n.payout).toFixed(2)," USDT from cell ",n.endPosition]}):n.action==="Leopard Bonus"?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"font-mono text-xs bg-white/5 rounded px-2 py-1",children:["Dice: ",n.diceValues.length?n.diceValues.join(" · "):"–"," (Σ ",n.diceSum,")"]}),d.jsxs("div",{className:"text-xs text-green-300 font-semibold",children:["Leopard hit! ",Number(n.payout).toFixed(2)," USDT paid instantly"]})]}):n.action==="Deposit"?d.jsxs("div",{className:"text-xs text-slate-400",children:["Deposited ",Number(n.amount).toFixed(2)," USDT"]}):n.action==="Withdraw"?d.jsxs("div",{className:"text-xs text-slate-400",children:["Withdrawn ",Number(n.amount).toFixed(2)," USDT"]}):d.jsx("div",{className:"text-xs text-slate-400",children:"—"})}),d.jsx("td",{className:"px-4 py-3 text-slate-200 font-semibold",children:["Play Round","Pending Reward","Reward Claimed","Reward Forfeited","Leopard Bonus"].includes(n.action)?`${Number(n.payout).toFixed(2)} USDT`:`${Number(n.amount).toFixed(2)} USDT`}),d.jsx("td",{className:"px-4 py-3 text-slate-300",children:n.action==="Play Round"?`Game #${n.gameId}`:n.action==="Leopard Bonus"?`Game #${n.gameId}`:n.action==="Buy Session"?`${n.rounds||10} rounds`:"—"})]},n.txHash))})]})})]})})}function R4(){return d.jsxs(ye.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},className:"card text-center py-20",children:[d.jsx("div",{className:"text-6xl mb-6",children:"🏆"}),d.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Leaderboard"}),d.jsx("p",{className:"text-slate-400 mb-6",children:"See top players, biggest wins, and platform statistics"}),d.jsx("p",{className:"text-sm text-slate-500",children:"Coming Soon - This feature will be available after MVP testing"})]})}function j4(){return d.jsxs(ye.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},className:"card text-center py-20",children:[d.jsx("div",{className:"text-6xl mb-6",children:"📖"}),d.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Game Rules"}),d.jsx("p",{className:"text-slate-400 mb-6",children:"Complete guide on how to play, payouts, and special features"}),d.jsx("p",{className:"text-sm text-slate-500",children:"Coming Soon - This feature will be available after MVP testing"})]})}function I4(){return d.jsxs(ye.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},className:"card text-center py-20",children:[d.jsx("div",{className:"text-6xl mb-6",children:"👤"}),d.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Player Profile"}),d.jsx("p",{className:"text-slate-400 mb-6",children:"View your stats, achievements, and account settings"}),d.jsx("p",{className:"text-sm text-slate-500",children:"Coming Soon - This feature will be available after MVP testing"})]})}function D4(){const{address:e,isConnected:t}=Cn(),i=op(),[o,r]=A.useState(!1),n=[{name:"Home",path:"/"},{name:"Play Game",path:"/game"},{name:"History",path:"/history"},{name:"Leaderboard",path:"/leaderboard"},{name:"Rules",path:"/rules"},{name:"Profile",path:"/profile"}],s=c=>i.pathname===c,a=()=>{Xi.open()},l=c=>`${c.slice(0,6)}...${c.slice(-4)}`;return d.jsx("header",{className:"glass-effect border-b border-white/10 sticky top-0 z-50",children:d.jsxs("div",{className:"container mx-auto px-4 py-4",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs(Mt,{to:"/",className:"flex items-center space-x-3 group",children:[d.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-110",children:d.jsx("span",{className:"text-2xl",children:"🎲"})}),d.jsxs("div",{children:[d.jsx("h1",{className:"text-xl font-bold gradient-text",children:"LuckChain"}),d.jsx("p",{className:"text-xs text-slate-400",children:"Provably Fair Gaming"})]})]}),d.jsx("nav",{className:"hidden md:flex items-center space-x-1",children:n.map(c=>d.jsx(Mt,{to:c.path,className:`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${s(c.path)?"bg-gradient-to-r from-blue-600 to-purple-600 text-white":"text-slate-300 hover:text-white hover:bg-white/5"}`,children:c.name},c.path))}),d.jsx("div",{className:"hidden md:block",children:t&&e?d.jsxs("button",{onClick:a,className:"flex items-center space-x-2 glass-effect px-4 py-2 rounded-lg hover:bg-white/10 transition-all",children:[d.jsx(Co,{className:"w-5 h-5 text-green-400"}),d.jsx("span",{className:"font-mono text-sm",children:l(e)})]}):d.jsxs("button",{onClick:a,className:"btn-primary flex items-center space-x-2",children:[d.jsx(Co,{className:"w-5 h-5"}),d.jsx("span",{children:"Connect Wallet"})]})}),d.jsx("button",{onClick:()=>r(!o),className:"md:hidden p-2 rounded-lg glass-effect hover:bg-white/10",children:o?d.jsx(Vh,{className:"w-6 h-6"}):d.jsx(Q5,{className:"w-6 h-6"})})]}),d.jsx(Wl,{children:o&&d.jsxs(ye.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"md:hidden mt-4 overflow-hidden",children:[d.jsx("nav",{className:"flex flex-col space-y-2",children:n.map(c=>d.jsx(Mt,{to:c.path,onClick:()=>r(!1),className:`px-4 py-3 rounded-lg font-medium transition-all ${s(c.path)?"bg-gradient-to-r from-blue-600 to-purple-600 text-white":"text-slate-300 hover:text-white hover:bg-white/5"}`,children:c.name},c.path))}),d.jsx("div",{className:"mt-4",children:t&&e?d.jsxs("button",{onClick:a,className:"w-full flex items-center justify-center space-x-2 glass-effect px-4 py-3 rounded-lg hover:bg-white/10 transition-all",children:[d.jsx(Co,{className:"w-5 h-5 text-green-400"}),d.jsx("span",{className:"font-mono text-sm",children:l(e)})]}):d.jsxs("button",{onClick:a,className:"w-full btn-primary flex items-center justify-center space-x-2",children:[d.jsx(Co,{className:"w-5 h-5"}),d.jsx("span",{children:"Connect Wallet"})]})})]})})]})})}function L4(){const e=new Date().getFullYear();return d.jsx("footer",{className:"glass-effect border-t border-white/10 mt-20",children:d.jsxs("div",{className:"container mx-auto px-4 py-8",children:[d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"text-lg font-bold mb-4",children:"LuckChain"}),d.jsx("p",{className:"text-sm text-slate-400 mb-4",children:"Provably fair blockchain gaming platform. Play dice games, win real USDT, and enjoy transparent, on-chain gameplay."}),d.jsxs("div",{className:"flex space-x-3",children:[d.jsx("a",{href:"https://github.com/luckchain",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-white/10 transition-all",children:d.jsx(X5,{className:"w-5 h-5"})}),d.jsx("a",{href:"https://twitter.com/luckchain",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-white/10 transition-all",children:d.jsx(n4,{className:"w-5 h-5"})}),d.jsx("a",{href:"https://discord.gg/luckchain",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-white/10 transition-all",children:d.jsx(J5,{className:"w-5 h-5"})})]})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-lg font-bold mb-4",children:"Quick Links"}),d.jsxs("ul",{className:"space-y-2",children:[d.jsx("li",{children:d.jsx(Mt,{to:"/",className:"text-sm text-slate-400 hover:text-white transition-colors",children:"Home"})}),d.jsx("li",{children:d.jsx(Mt,{to:"/game",className:"text-sm text-slate-400 hover:text-white transition-colors",children:"Play Game"})}),d.jsx("li",{children:d.jsx(Mt,{to:"/leaderboard",className:"text-sm text-slate-400 hover:text-white transition-colors",children:"Leaderboard"})}),d.jsx("li",{children:d.jsx(Mt,{to:"/rules",className:"text-sm text-slate-400 hover:text-white transition-colors",children:"Game Rules"})})]})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-lg font-bold mb-4",children:"Resources"}),d.jsxs("ul",{className:"space-y-2",children:[d.jsx("li",{children:d.jsx("a",{href:"https://docs.luckchain.io",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-slate-400 hover:text-white transition-colors",children:"Documentation"})}),d.jsx("li",{children:d.jsx("a",{href:"https://docs.luckchain.io/contracts",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-slate-400 hover:text-white transition-colors",children:"Smart Contracts"})}),d.jsx("li",{children:d.jsx("a",{href:"https://docs.luckchain.io/audit",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-slate-400 hover:text-white transition-colors",children:"Security Audit"})}),d.jsx("li",{children:d.jsx("a",{href:"https://docs.luckchain.io/faq",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-slate-400 hover:text-white transition-colors",children:"FAQ"})})]})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-lg font-bold mb-4",children:"Legal"}),d.jsxs("ul",{className:"space-y-2",children:[d.jsx("li",{children:d.jsx("a",{href:"/terms",className:"text-sm text-slate-400 hover:text-white transition-colors",children:"Terms of Service"})}),d.jsx("li",{children:d.jsx("a",{href:"/privacy",className:"text-sm text-slate-400 hover:text-white transition-colors",children:"Privacy Policy"})}),d.jsx("li",{children:d.jsx("a",{href:"/responsible-gaming",className:"text-sm text-slate-400 hover:text-white transition-colors",children:"Responsible Gaming"})}),d.jsx("li",{children:d.jsx("span",{className:"text-sm text-slate-400",children:"18+ Only"})})]})]})]}),d.jsx("div",{className:"mt-8 pt-8 border-t border-white/10",children:d.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0",children:[d.jsxs("p",{className:"text-sm text-slate-400",children:["© ",e," LuckChain. All rights reserved. Built on Ethereum, Polygon, and 5 more chains."]}),d.jsxs("div",{className:"flex items-center space-x-4",children:[d.jsx("span",{className:"text-xs text-slate-500",children:"Powered by"}),d.jsx("a",{href:"https://reown.com",target:"_blank",rel:"noopener noreferrer",className:"text-xs text-slate-400 hover:text-white transition-colors",children:"Reown"}),d.jsx("span",{className:"text-slate-600",children:"•"}),d.jsx("a",{href:"https://chain.link",target:"_blank",rel:"noopener noreferrer",className:"text-xs text-slate-400 hover:text-white transition-colors",children:"Chainlink VRF"})]})]})})]})})}function B4(){const[e,t]=A.useState(null),[i,o]=A.useState(!1);A.useEffect(()=>{const s=a=>{a.preventDefault(),t(a),setTimeout(()=>{o(!0)},3e3)};return window.addEventListener("beforeinstallprompt",s),()=>window.removeEventListener("beforeinstallprompt",s)},[]);const r=async()=>{if(!e)return;e.prompt();const{outcome:s}=await e.userChoice;console.log(s==="accepted"?"✅ PWA installed successfully":"❌ PWA installation dismissed"),t(null),o(!1)},n=()=>{o(!1),sessionStorage.setItem("pwa-prompt-dismissed","true")};return A.useEffect(()=>{sessionStorage.getItem("pwa-prompt-dismissed")&&o(!1)},[]),d.jsx(Wl,{children:i&&e&&d.jsx(ye.div,{initial:{opacity:0,y:100},animate:{opacity:1,y:0},exit:{opacity:0,y:100},transition:{duration:.3},className:"fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50",children:d.jsxs("div",{className:"glass-effect rounded-xl p-4 shadow-2xl border border-white/20",children:[d.jsx("button",{onClick:n,className:"absolute top-2 right-2 p-1 hover:bg-white/10 rounded-lg transition-colors","aria-label":"Dismiss",children:d.jsx(Vh,{className:"w-4 h-4"})}),d.jsxs("div",{className:"flex items-start gap-3",children:[d.jsx("div",{className:"p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg",children:d.jsx(Y5,{className:"w-6 h-6 text-white"})}),d.jsxs("div",{className:"flex-1 pr-6",children:[d.jsx("h3",{className:"font-semibold text-white mb-1",children:"Install LuckChain App"}),d.jsx("p",{className:"text-sm text-slate-300 mb-3",children:"Install our app for quick access, offline play, and a native app experience!"}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{onClick:r,className:"flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105",children:"Install Now"}),d.jsx("button",{onClick:n,className:"px-4 py-2 glass-effect hover:bg-white/10 rounded-lg font-medium transition-colors",children:"Later"})]})]})]})]})})})}function M4(){return d.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white",children:[d.jsx(D4,{}),d.jsx("main",{className:"container mx-auto px-4 py-8 min-h-[calc(100vh-200px)]",children:d.jsxs(rp,{children:[d.jsx(Mn,{path:"/",element:d.jsx(l4,{})}),d.jsx(Mn,{path:"/game",element:d.jsx(_4,{})}),d.jsx(Mn,{path:"/history",element:d.jsx(N4,{})}),d.jsx(Mn,{path:"/leaderboard",element:d.jsx(R4,{})}),d.jsx(Mn,{path:"/rules",element:d.jsx(j4,{})}),d.jsx(Mn,{path:"/profile",element:d.jsx(I4,{})})]})}),d.jsx(L4,{}),d.jsx(B4,{}),d.jsx(Eg,{position:"top-right",theme:"dark",richColors:!0,expand:!1,duration:4e3})]})}function O4(e={}){const{immediate:t=!1,onNeedRefresh:i,onOfflineReady:o,onRegistered:r,onRegisteredSW:n,onRegisterError:s}=e;let a,l;const c=async(f=!0)=>{await l};async function h(){if("serviceWorker"in navigator){if(a=await U(async()=>{const{Workbox:f}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:f}},[]).then(({Workbox:f})=>new f("/sw.js",{scope:"/",type:"classic"})).catch(f=>{s==null||s(f)}),!a)return;a.addEventListener("activated",f=>{(f.isUpdate||f.isExternal)&&window.location.reload()}),a.addEventListener("installed",f=>{f.isUpdate||o==null||o()}),a.register({immediate:t}).then(f=>{n?n("/sw.js",f):r==null||r(f)}).catch(f=>{s==null||s(f)})}}return l=h(),c}const W4=O4({onNeedRefresh(){confirm("New version available! Reload to update?")&&W4(!0)},onOfflineReady(){console.log("🎮 LuckChain is ready to work offline!")}}),V4=new Jh({defaultOptions:{queries:{refetchOnWindowFocus:!1,retry:1,staleTime:5e3}}});ha.createRoot(document.getElementById("root")).render(d.jsx(R.StrictMode,{children:d.jsx(sp,{children:d.jsx(ep,{config:J1,children:d.jsx(tp,{client:V4,children:d.jsx(M4,{})})})})}));export{Hn as H,rr as a,Rp as b,or as e,e6 as i,m as n,j as o,x as r};
//# sourceMappingURL=index-CfHk2d3v.js.map
