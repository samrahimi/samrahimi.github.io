let t,e,n,o=0,s=!1,l=!1,i=!1,r=!1,c=!1;const a="undefined"!=typeof window?window:{},f=a.document||{head:{}},u={t:0,o:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,o)=>t.addEventListener(e,n,o),rel:(t,e,n,o)=>t.removeEventListener(e,n,o)},p=(()=>!!f.head.attachShadow)(),d=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),m=new WeakMap,h=t=>m.get(t),w=(t,e)=>m.set(e.s=t,e),b=(t,e)=>e in t,y=t=>console.error(t),$=new Map,g=new Map,v=[],j=[],_=[],k=(t,e)=>n=>{t.push(n),s||(s=!0,e&&4&u.t?R(M):u.raf(M))},O=(t,e)=>{let n=0,o=0;for(;n<t.length&&(o=performance.now())<e;)try{t[n++](o)}catch(s){y(s)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},M=()=>{o++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){y(e)}t.length=0})(v);const t=2==(6&u.t)?performance.now()+10*Math.ceil(o*(1/22)):1/0;O(j,t),O(_,t),j.length>0&&(_.push(...j),j.length=0),(s=v.length+j.length+_.length>0)?u.raf(M):o=0},R=t=>Promise.resolve().then(t),S=k(v,!1),C=k(j,!0),P={},U=t=>"object"==(t=typeof t)||"function"===t,N=()=>a.CSS&&a.CSS.supports&&a.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_app("./p-73bc5e11.js").then(()=>{u.l=a.__stencil_cssshim}),L=()=>{u.l=a.__stencil_cssshim;const t=Array.from(f.querySelectorAll("script")).find(t=>new RegExp("/app(\\.esm)?\\.js($|\\?|#)").test(t.src)||"app"===t.getAttribute("data-stencil-namespace")),e=t["data-opts"]||{};return"onbeforeload"in t&&!history.scrollRestoration?{then(){}}:(e.resourcesUrl=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,a.location.href)).href,x(e.resourcesUrl,t),window.customElements?Promise.resolve(e):__sc_import_app("./p-3b66a627.js").then(()=>e))},x=(t,e)=>{const n=(()=>`__sc_import_${"app".replace(/\s|-/g,"_")}`)();try{a[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(o){const s=new Map;a[n]=o=>{const l=new URL(o,t).href;let i=s.get(l);if(!i){const t=f.createElement("script");t.type="module",t.crossOrigin=e.crossOrigin,t.src=URL.createObjectURL(new Blob([`import * as m from '${l}'; window.${n}.m = m;`],{type:"application/javascript"})),i=new Promise(e=>{t.onload=()=>{e(a[n].m),t.remove()}}),s.set(l,i),f.head.appendChild(t)}return i}}},E="http://www.w3.org/1999/xlink",F=new WeakMap,I=(t,e)=>"sc-"+(e?t+"-"+e:t),T=(t,e,...n)=>{let o=null,s=null,l=null,i=!1,r=!1,c=[];const a=e=>{for(let n=0;n<e.length;n++)o=e[n],Array.isArray(o)?a(o):null!=o&&"boolean"!=typeof o&&((i="function"!=typeof t&&!U(o))&&(o=String(o)),i&&r?c[c.length-1].i+=o:c.push(i?W(null,o):o),r=i)};if(a(n),e){e.key&&(s=e.key),e.name&&(l=e.name);{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}}if("function"==typeof t)return t(e,c,D);const f=W(t,null);return f.u=e,c.length>0&&(f.p=c),f.h=s,f.$=l,f},W=(t,e)=>({t:0,g:t,i:e,v:null,p:null,u:null,h:null,$:null}),A={},D={forEach:(t,e)=>t.map(B).forEach(e),map:(t,e)=>t.map(B).map(e).map(H)},B=t=>({vattrs:t.u,vchildren:t.p,vkey:t.h,vname:t.$,vtag:t.g,vtext:t.i}),H=t=>{const e=W(t.vtag,t.vtext);return e.u=t.vattrs,e.p=t.vchildren,e.h=t.vkey,e.$=t.vname,e},J=(t,e,n,o,s,l)=>{if(n===o)return;let i=b(t,e),r=e.toLowerCase();if("class"===e){const e=t.classList,s=V(n),l=V(o);e.remove(...s.filter(t=>t&&!l.includes(t))),e.add(...l.filter(t=>t&&!s.includes(t)))}else if("style"===e){for(const e in n)o&&null!=o[e]||(e.includes("-")?t.style.removeProperty(e):t.style[e]="");for(const e in o)n&&o[e]===n[e]||(e.includes("-")?t.style.setProperty(e,o[e]):t.style[e]=o[e])}else if("key"===e);else if("ref"===e)o&&o(t);else if(i||"o"!==e[0]||"n"!==e[1]){const a=U(o);if((i||a&&null!==o)&&!s)try{if(t.tagName.includes("-"))t[e]=o;else{let s=null==o?"":o;"list"===e?i=!1:null!=n&&t[e]==s||(t[e]=s)}}catch(c){}let f=!1;r!==(r=r.replace(/^xlink\:?/,""))&&(e=r,f=!0),null==o||!1===o?f?t.removeAttributeNS(E,e):t.removeAttribute(e):(!i||4&l||s)&&!a&&(o=!0===o?"":o,f?t.setAttributeNS(E,e,o):t.setAttribute(e,o))}else e="-"===e[2]?e.slice(3):b(a,r)?r.slice(2):r[2]+e.slice(3),n&&u.rel(t,e,n,!1),o&&u.ael(t,e,o,!1)},q=/\s/,V=t=>t?t.split(q):[],z=(t,e,n,o)=>{const s=11===e.v.nodeType&&e.v.host?e.v.host:e.v,l=t&&t.u||P,i=e.u||P;for(o in l)o in i||J(s,o,l[o],void 0,n,e.t);for(o in i)J(s,o,l[o],i[o],n,e.t)},G=(o,s,i,a)=>{let u,p,d,m=s.p[i],h=0;if(l||(r=!0,"slot"===m.g&&(t&&a.classList.add(t+"-s"),m.t|=m.p?2:1)),null!==m.i)u=m.v=f.createTextNode(m.i);else if(1&m.t)u=m.v=f.createTextNode("");else{if(c||(c="svg"===m.g),u=m.v=f.createElementNS(c?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&m.t?"slot-fb":m.g),c&&"foreignObject"===m.g&&(c=!1),z(null,m,c),(t=>null!=t)(t)&&u["s-si"]!==t&&u.classList.add(u["s-si"]=t),m.p)for(h=0;h<m.p.length;++h)(p=G(o,m,h,u))&&u.appendChild(p);"svg"===m.g?c=!1:"foreignObject"===u.tagName&&(c=!0)}return u["s-hn"]=n,3&m.t&&(u["s-sr"]=!0,u["s-cr"]=e,u["s-sn"]=m.$||"",(d=o&&o.p&&o.p[i])&&d.g===m.g&&o.v&&K(o.v,!1)),u},K=(t,e)=>{u.t|=1;const o=t.childNodes;for(let s=o.length-1;s>=0;s--){const t=o[s];t["s-hn"]!==n&&t["s-ol"]&&(tt(t).insertBefore(t,Z(t)),t["s-ol"].remove(),t["s-ol"]=void 0,r=!0),e&&K(t,e)}u.t&=-2},Q=(t,e,o,s,l,i)=>{let r,c=t["s-cr"]&&t["s-cr"].parentNode||t;for(c.shadowRoot&&c.tagName===n&&(c=c.shadowRoot);l<=i;++l)s[l]&&(r=G(null,o,l,t))&&(s[l].v=r,c.insertBefore(r,Z(e)))},X=(t,e,n,o,s)=>{for(;e<=n;++e)(o=t[e])&&(s=o.v,lt(o),i=!0,s["s-ol"]?s["s-ol"].remove():K(s,!0),s.remove())},Y=(t,e)=>t.g===e.g&&("slot"===t.g?t.$===e.$:t.h===e.h),Z=t=>t&&t["s-ol"]||t,tt=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,et=(t,e)=>{const n=e.v=t.v,o=t.p,s=e.p;let l;c=n&&n.parentNode&&void 0!==n.ownerSVGElement,c="svg"===e.g||"foreignObject"!==e.g&&c,null===e.i?("slot"===e.g||z(t,e,c),null!==o&&null!==s?((t,e,n,o)=>{let s,l,i=0,r=0,c=0,a=0,f=e.length-1,u=e[0],p=e[f],d=o.length-1,m=o[0],h=o[d];for(;i<=f&&r<=d;)if(null==u)u=e[++i];else if(null==p)p=e[--f];else if(null==m)m=o[++r];else if(null==h)h=o[--d];else if(Y(u,m))et(u,m),u=e[++i],m=o[++r];else if(Y(p,h))et(p,h),p=e[--f],h=o[--d];else if(Y(u,h))"slot"!==u.g&&"slot"!==h.g||K(u.v.parentNode,!1),et(u,h),t.insertBefore(u.v,p.v.nextSibling),u=e[++i],h=o[--d];else if(Y(p,m))"slot"!==u.g&&"slot"!==h.g||K(p.v.parentNode,!1),et(p,m),t.insertBefore(p.v,u.v),p=e[--f],m=o[++r];else{for(c=-1,a=i;a<=f;++a)if(e[a]&&null!==e[a].h&&e[a].h===m.h){c=a;break}c>=0?((l=e[c]).g!==m.g?s=G(e&&e[r],n,c,t):(et(l,m),e[c]=void 0,s=l.v),m=o[++r]):(s=G(e&&e[r],n,r,t),m=o[++r]),s&&tt(u.v).insertBefore(s,Z(u.v))}i>f?Q(t,null==o[d+1]?null:o[d+1].v,n,o,r,d):r>d&&X(e,i,f)})(n,o,e,s):null!==s?(null!==t.i&&(n.textContent=""),Q(n,null,e,s,0,s.length-1)):null!==o&&X(o,0,o.length-1)):(l=n["s-cr"])?l.parentNode.textContent=e.i:t.i!==e.i&&(n.data=e.i),c&&"svg"===e.g&&(c=!1)},nt=t=>{let e,n,o,s,l,i,r=t.childNodes;for(n=0,o=r.length;n<o;n++)if(1===(e=r[n]).nodeType){if(e["s-sr"])for(l=e["s-sn"],e.hidden=!1,s=0;s<o;s++)if(r[s]["s-hn"]!==e["s-hn"])if(i=r[s].nodeType,""!==l){if(1===i&&l===r[s].getAttribute("slot")){e.hidden=!0;break}}else if(1===i||3===i&&""!==r[s].textContent.trim()){e.hidden=!0;break}nt(e)}},ot=[],st=t=>{let e,n,o,s,l=t.childNodes,r=l.length,c=0,a=0,f=0;for(r=l.length;c<r;c++){if((e=l[c])["s-sr"]&&(n=e["s-cr"]))for(s=e["s-sn"],a=(o=n.parentNode.childNodes).length-1;a>=0;a--)(n=o[a])["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||((3===(f=n.nodeType)||8===f)&&""===s||1===f&&null===n.getAttribute("slot")&&""===s||1===f&&n.getAttribute("slot")===s)&&(ot.some(t=>t.j===n)||(i=!0,n["s-sn"]=s,ot.push({_:e,j:n})));1===e.nodeType&&st(e)}},lt=t=>{t.u&&t.u.ref&&t.u.ref(null),t.p&&t.p.forEach(lt)},it=(t,e)=>{e&&!t.k&&e["s-p"].push(new Promise(e=>t.k=e))},rt=(t,e,n,o)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const s=e.s,l=()=>ct(t,e,n,s,o);let i;return it(e,e.O),o&&(e.t|=256,e.M&&(e.M.forEach(([t,e])=>pt(s,t,e)),e.M=null),i=pt(s,"componentWillLoad")),i=dt(i,()=>pt(s,"componentWillRender")),dt(i,()=>C(l))},ct=(o,s,c,a,d)=>{const m=o["s-rc"];d&&((t,e,n)=>{const o=((t,e,n)=>{let o=I(e.R,n),s=g.get(o);if(t=11===t.nodeType?t:f,s||(o=I(e.R),s=g.get(o)),s)if("string"==typeof s){let e,n=F.get(t=t.head||t);n||F.set(t,n=new Set),n.has(o)||((e=f.createElement("style")).innerHTML=s,t.insertBefore(e,t.querySelector("link")),n&&n.add(o))}else t.adoptedStyleSheets.includes(s)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,s]);return o})(p&&t.shadowRoot?t.shadowRoot:t.getRootNode(),e,n);10&e.t&&(t["s-sc"]=o,t.classList.add(o+"-h"),2&e.t&&t.classList.add(o+"-s"))})(o,c,s.S),((o,s,c,a)=>{n=o.tagName;const d=s.C||W(null,null),m=(t=>t&&t.g===A)(a)?a:T(null,null,a);if(c.P&&(m.u=m.u||{},c.P.forEach(([t,e])=>m.u[e]=o[t])),m.g=null,m.t|=4,s.C=m,m.v=d.v=o.shadowRoot||o,t=o["s-sc"],e=o["s-cr"],l=p&&0!=(1&c.t),i=!1,et(d,m),r){st(m.v);for(let t=0;t<ot.length;t++){const e=ot[t];if(!e.j["s-ol"]){const t=f.createTextNode("");t["s-nr"]=e.j,e.j.parentNode.insertBefore(e.j["s-ol"]=t,e.j)}}u.t|=1;for(let t=0;t<ot.length;t++){const e=ot[t],n=e._.parentNode;let o=e._.nextSibling,s=e.j["s-ol"];for(;s=s.previousSibling;){let t=s["s-nr"];if(t&&t["s-sn"]===e.j["s-sn"]&&n===t.parentNode&&(!(t=t.nextSibling)||!t["s-nr"])){o=t;break}}(!o&&n!==e.j.parentNode||e.j.nextSibling!==o)&&e.j!==o&&n.insertBefore(e.j,o)}u.t&=-2}i&&nt(m.v),ot.length=0})(o,s,c,at(a)),s.t&=-17,s.t|=2,m&&(m.forEach(t=>t()),o["s-rc"]=void 0);{const t=o["s-p"],e=()=>ft(o,s,c);0===t.length?e():(Promise.all(t).then(e),s.t|=4,t.length=0)}},at=t=>{try{t=t.render&&t.render()}catch(e){y(e)}return t},ft=(t,e,n)=>{const o=e.s,s=e.O;64&e.t?pt(o,"componentDidUpdate"):(e.t|=64,t.classList.add("hydrated"),pt(o,"componentDidLoad"),e.U(t),s||ut()),e.N(t),e.k&&(e.k(),e.k=void 0),512&e.t&&R(()=>rt(t,e,n,!1)),e.t&=-517},ut=()=>{f.documentElement.classList.add("hydrated"),u.t|=2},pt=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(o){y(o)}},dt=(t,e)=>t&&t.then?t.then(e):e(),mt=(t,e,n)=>{if(e.L){t.watchers&&(e.F=t.watchers);const o=Object.entries(e.L),s=t.prototype;if(o.forEach(([t,[o]])=>{31&o||2&n&&32&o?Object.defineProperty(s,t,{get(){return((t,e)=>h(t).I.get(e))(this,t)},set(n){((t,e,n,o)=>{const s=h(this),l=s.T,i=s.I.get(e),r=s.t,c=s.s;if(!((n=((t,e)=>null==t||U(t)?t:4&e?"false"!==t&&(""===t||!!t):2&e?parseFloat(t):1&e?String(t):t)(n,o.L[e][0]))===i||8&r&&void 0!==i)&&(s.I.set(e,n),c)){if(o.F&&128&r){const t=o.F[e];t&&t.forEach(t=>{try{c[t](n,i,e)}catch(o){y(o)}})}2==(18&r)&&rt(l,s,o,!1)}})(0,t,n,e)},configurable:!0,enumerable:!0}):1&n&&64&o&&Object.defineProperty(s,t,{value(...e){const n=h(this);return n.W.then(()=>n.s[t](...e))}})}),1&n){const n=new Map;s.attributeChangedCallback=function(t,e,o){u.jmp(()=>{const e=n.get(t);this[e]=(null!==o||"boolean"!=typeof this[e])&&o})},t.observedAttributes=o.filter(([t,e])=>15&e[0]).map(([t,o])=>{const s=o[1]||t;return n.set(s,t),512&o[0]&&e.P.push([t,s]),s})}}return t},ht=[],wt=t=>ht.push(t),bt=t=>h(t).S,yt=t=>{pt(t,"connectedCallback")},$t=t=>{const e=t["s-cr"]=f.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)},gt=(t,e={})=>{const n=[],o=e.exclude||[],s=f.head,l=a.customElements,i=s.querySelector("meta[charset]"),r=f.createElement("style"),c=[];let w,b=!0;Object.assign(u,e),u.o=new URL(e.resourcesUrl||"./",f.baseURI).href,e.syncQueue&&(u.t|=4),t.forEach(t=>t[1].forEach(e=>{const s={t:e[0],R:e[1],L:e[2],A:e[3]};s.L=e[2],s.A=e[3],s.P=[],s.F={},!p&&1&s.t&&(s.t|=8);const i=s.R,r=class extends HTMLElement{constructor(t){super(t),(t=>{const e={t:0,T:t,I:new Map};e.W=new Promise(t=>e.N=t),e.D=new Promise(t=>e.U=t),t["s-p"]=[],t["s-rc"]=[],m.set(t,e)})(t=this),1&s.t&&(p?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){w&&(clearTimeout(w),w=null),b?c.push(this):u.jmp(()=>((t,e)=>{if(0==(1&u.t)){const n=()=>{},o=h(t);if(e.A&&(o.B=((t,e,n)=>{e.M=e.M||[];const o=n.map(([n,o,s])=>{const l=((t,e)=>4&e?f:8&e?a:32&e?f.body:16&e?t.parentElement:t)(t,n),i=((t,e)=>n=>{256&t.t?t.s[e](n):t.M.push([e,n])})(e,s),r=(t=>({passive:0!=(1&t),capture:0!=(2&t)}))(n);return u.ael(l,o,i,r),()=>u.rel(l,o,i,r)});return()=>o.forEach(t=>t())})(t,o,e.A)),!(1&o.t)){let n;o.t|=1,n||(4&e.t||8&e.t)&&$t(t);{let e=t;for(;e=e.parentNode||e.host;)if(e["s-p"]){it(o,o.O=e);break}}e.L&&Object.entries(e.L).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),R(()=>(async(t,e,n,o,s)=>{if(0==(32&e.t)){e.t|=32,null==e.S&&(e.S="string"!=typeof n.H?(t=>ht.map(e=>e(t)).find(t=>!!t))(t):"");{if((s=((t,e)=>{const n=t.R.replace(/-/g,"_"),o="string"!=typeof t.H?t.H[e.S]:t.H,s=$.get(o);return s?s[n]:__sc_import_app(`./${o}.entry.js`).then(t=>($.set(o,t),t[n]),y)})(n,e)).then){const t=()=>{};s=await s,t()}s.isProxied||(n.F=s.watchers,mt(s,n,2),s.isProxied=!0);const t=()=>{};e.t|=8;try{new s(e)}catch(r){y(r)}e.t&=-9,e.t|=128,t(),yt(e.s)}const o=I(n.R,e.S);if(!g.has(o)&&s.style){const t=()=>{};let l=s.style;"string"!=typeof l&&(l=l[e.S]),8&n.t&&(l=await __sc_import_app("./p-affe7c09.js").then(t=>t.scopeCss(l,o,!1))),((t,e,n)=>{let o=g.get(t);d&&n?(o=o||new CSSStyleSheet).replace(e):o=e,g.set(t,o)})(o,l,!!(1&n.t)),t()}}const l=e.O,i=()=>rt(t,e,n,!0);l&&l["s-rc"]?l["s-rc"].push(i):i()})(t,o,e))}yt(o.s),n()}})(this,s))}disconnectedCallback(){u.jmp(()=>(()=>{if(0==(1&u.t)){const t=h(this),e=t.s;t.B&&(t.B(),t.B=void 0),pt(e,"disconnectedCallback"),pt(e,"componentDidUnload")}})())}forceUpdate(){((t,e)=>{{const n=h(t);n.T.isConnected&&2==(18&n.t)&&rt(t,n,e,!1)}})(this,s)}componentOnReady(){return h(this).D}};s.H=t[0],o.includes(i)||l.get(i)||(n.push(i),l.define(i,mt(r,s,1)))})),r.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),s.insertBefore(r,i?i.nextSibling:s.firstChild),b=!1,c.length>0?c.forEach(t=>t.connectedCallback()):u.jmp(()=>w=setTimeout(ut,30,"timeout"))},vt=(t,e,n)=>{const o=_t(t);return{emit:t=>{const s=new CustomEvent(e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t});return o.dispatchEvent(s),s}}},jt=t=>{const e=new URL(t,u.o);return e.origin!==a.location.origin?e.href:e.pathname},_t=t=>h(t).T,kt=(t,e)=>("string"==typeof t&&(e=t,t=void 0),(t=>Ot(t))(t).includes(e)),Ot=(t=window)=>{t.Ionic=t.Ionic||{};let e=t.Ionic.platforms;return null==e&&(e=t.Ionic.platforms=Mt(t)).forEach(e=>t.document.documentElement.classList.add(`plt-${e}`)),e},Mt=t=>Object.keys(Et).filter(e=>Et[e](t)),Rt=t=>!!Lt(t,/iPad/i)||!(!Lt(t,/Macintosh/i)||!Ct(t)),St=t=>Lt(t,/android|sink/i),Ct=t=>xt(t,"(any-pointer:coarse)"),Pt=t=>Ut(t)||Nt(t),Ut=t=>!!(t.cordova||t.phonegap||t.PhoneGap),Nt=t=>{const e=t.Capacitor;return!(!e||!e.isNative)},Lt=(t,e)=>e.test(t.navigator.userAgent),xt=(t,e)=>t.matchMedia(e).matches,Et={ipad:Rt,iphone:t=>Lt(t,/iPhone/i),ios:t=>Lt(t,/iPhone|iPod/i)||Rt(t),android:St,phablet:t=>{const e=t.innerWidth,n=t.innerHeight,o=Math.min(e,n),s=Math.max(e,n);return o>390&&o<520&&s>620&&s<800},tablet:t=>{const e=t.innerWidth,n=t.innerHeight,o=Math.min(e,n),s=Math.max(e,n);return Rt(t)||(t=>St(t)&&!Lt(t,/mobile/i))(t)||o>460&&o<820&&s>780&&s<1400},cordova:Ut,capacitor:Nt,electron:t=>Lt(t,/electron/i),pwa:t=>!(!t.matchMedia("(display-mode: standalone)").matches&&!t.navigator.standalone),mobile:Ct,mobileweb:t=>Ct(t)&&!Pt(t),desktop:t=>!Ct(t),hybrid:Pt};class Ft{constructor(){this.m=new Map}reset(t){this.m=new Map(Object.entries(t))}get(t,e){const n=this.m.get(t);return void 0!==n?n:e}getBoolean(t,e=!1){const n=this.m.get(t);return void 0===n?e:"string"==typeof n?"true"===n:!!n}getNumber(t,e){const n=parseFloat(this.m.get(t));return isNaN(n)?void 0!==e?e:NaN:n}set(t,e){this.m.set(t,e)}}const It=new Ft;let Tt;const Wt=t=>t&&bt(t)||Tt,At=()=>{(()=>{const t=document,e=window,n=e.Ionic=e.Ionic||{};Ot(e);const o=Object.assign(Object.assign(Object.assign(Object.assign({},(t=>{try{const e=t.sessionStorage.getItem("ionic-persist-config");return null!==e?JSON.parse(e):{}}catch(e){return{}}})(e)),{persistConfig:!1}),n.config),(t=>{const e={};return t.location.search.slice(1).split("&").map(t=>t.split("=")).map(([t,e])=>[decodeURIComponent(t),decodeURIComponent(e)]).filter(([t])=>(t=>"ionic:"===t.substr(0,"ionic:".length))(t)).map(([t,e])=>[t.slice("ionic:".length),e]).forEach(([t,n])=>{e[t]=n}),e})(e));It.reset(o),It.getBoolean("persistConfig")&&((t,e)=>{try{t.sessionStorage.setItem("ionic-persist-config",JSON.stringify(e))}catch(n){return}})(e,o),n.config=It,n.mode=Tt=It.get("mode",t.documentElement.getAttribute("mode")||(kt(e,"ios")?"ios":"md")),It.set("mode",Tt),t.documentElement.setAttribute("mode",Tt),t.documentElement.classList.add(Tt),It.getBoolean("_testing")&&It.set("animated",!1),wt(t=>t.mode=t.mode||t.getAttribute("mode")||Tt)})(),wt(t=>"ION-ICON"===t.tagName?t.mode||t.getAttribute("mode"):null)};export{A as H,N as a,gt as b,Wt as c,It as d,_t as e,vt as f,At as g,T as h,kt as i,S as j,jt as k,bt as l,L as p,w as r,C as w};