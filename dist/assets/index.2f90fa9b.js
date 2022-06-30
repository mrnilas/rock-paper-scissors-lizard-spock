const Do=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};Do();function kr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const $o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ho=kr($o);function ci(e){return!!e||e===""}function Ar(e){if(z(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ee(r)?Yo(r):Ar(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ee(e))return e;if(Z(e))return e}}const Uo=/;(?![^(]*\))/g,Bo=/:(.+)/;function Yo(e){const t={};return e.split(Uo).forEach(n=>{if(n){const r=n.split(Bo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Or(e){let t="";if(ee(e))t=e;else if(z(e))for(let n=0;n<e.length;n++){const r=Or(e[n]);r&&(t+=r+" ")}else if(Z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Pt=e=>ee(e)?e:e==null?"":z(e)||Z(e)&&(e.toString===hi||!R(e.toString))?JSON.stringify(e,ui,2):String(e),ui=(e,t)=>t&&t.__v_isRef?ui(e,t.value):pt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:di(t)?{[`Set(${t.size})`]:[...t.values()]}:Z(t)&&!z(t)&&!pi(t)?String(t):t,K={},ht=[],xe=()=>{},Wo=()=>!1,Ko=/^on[^a-z]/,xn=e=>Ko.test(e),Cr=e=>e.startsWith("onUpdate:"),ae=Object.assign,Er=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},qo=Object.prototype.hasOwnProperty,D=(e,t)=>qo.call(e,t),z=Array.isArray,pt=e=>wn(e)==="[object Map]",di=e=>wn(e)==="[object Set]",R=e=>typeof e=="function",ee=e=>typeof e=="string",Pr=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",mi=e=>Z(e)&&R(e.then)&&R(e.catch),hi=Object.prototype.toString,wn=e=>hi.call(e),Vo=e=>wn(e).slice(8,-1),pi=e=>wn(e)==="[object Object]",Ir=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,en=kr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_n=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Xo=/-(\w)/g,Te=_n(e=>e.replace(Xo,(t,n)=>n?n.toUpperCase():"")),Jo=/\B([A-Z])/g,xt=_n(e=>e.replace(Jo,"-$1").toLowerCase()),kn=_n(e=>e.charAt(0).toUpperCase()+e.slice(1)),Dn=_n(e=>e?`on${kn(e)}`:""),ln=(e,t)=>!Object.is(e,t),$n=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},fn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Go=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ua;const Zo=()=>ua||(ua=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Oe;class Qo{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Oe&&(this.parent=Oe,this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Oe;try{return Oe=this,t()}finally{Oe=n}}}on(){Oe=this}off(){Oe=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function es(e,t=Oe){t&&t.active&&t.effects.push(e)}const Tr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},gi=e=>(e.w&qe)>0,vi=e=>(e.n&qe)>0,ts=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=qe},ns=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];gi(a)&&!vi(a)?a.delete(e):t[n++]=a,a.w&=~qe,a.n&=~qe}t.length=n}},Xn=new WeakMap;let Tt=0,qe=1;const Jn=30;let ge;const tt=Symbol(""),Gn=Symbol("");class Sr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,es(this,r)}run(){if(!this.active)return this.fn();let t=ge,n=We;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ge,ge=this,We=!0,qe=1<<++Tt,Tt<=Jn?ts(this):da(this),this.fn()}finally{Tt<=Jn&&ns(this),qe=1<<--Tt,ge=this.parent,We=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ge===this?this.deferStop=!0:this.active&&(da(this),this.onStop&&this.onStop(),this.active=!1)}}function da(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let We=!0;const bi=[];function wt(){bi.push(We),We=!1}function _t(){const e=bi.pop();We=e===void 0?!0:e}function de(e,t,n){if(We&&ge){let r=Xn.get(e);r||Xn.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Tr()),yi(a)}}function yi(e,t){let n=!1;Tt<=Jn?vi(e)||(e.n|=qe,n=!gi(e)):n=!e.has(ge),n&&(e.add(ge),ge.deps.push(e))}function Fe(e,t,n,r,a,i){const o=Xn.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&z(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":z(e)?Ir(n)&&s.push(o.get("length")):(s.push(o.get(tt)),pt(e)&&s.push(o.get(Gn)));break;case"delete":z(e)||(s.push(o.get(tt)),pt(e)&&s.push(o.get(Gn)));break;case"set":pt(e)&&s.push(o.get(tt));break}if(s.length===1)s[0]&&Zn(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);Zn(Tr(l))}}function Zn(e,t){const n=z(e)?e:[...e];for(const r of n)r.computed&&ma(r);for(const r of n)r.computed||ma(r)}function ma(e,t){(e!==ge||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const rs=kr("__proto__,__v_isRef,__isVue"),xi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Pr)),as=Nr(),is=Nr(!1,!0),os=Nr(!0),ha=ss();function ss(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)de(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){wt();const r=U(this)[t].apply(this,n);return _t(),r}}),e}function Nr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?ks:Oi:t?Ai:ki).get(r))return r;const o=z(r);if(!e&&o&&D(ha,a))return Reflect.get(ha,a,i);const s=Reflect.get(r,a,i);return(Pr(a)?xi.has(a):rs(a))||(e||de(r,"get",a),t)?s:re(s)?o&&Ir(a)?s:s.value:Z(s)?e?Ci(s):zr(s):s}}const ls=wi(),fs=wi(!0);function wi(e=!1){return function(n,r,a,i){let o=n[r];if(Dt(o)&&re(o)&&!re(a))return!1;if(!e&&!Dt(a)&&(Qn(a)||(a=U(a),o=U(o)),!z(n)&&re(o)&&!re(a)))return o.value=a,!0;const s=z(n)&&Ir(r)?Number(r)<n.length:D(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?ln(a,o)&&Fe(n,"set",r,a):Fe(n,"add",r,a)),l}}function cs(e,t){const n=D(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Fe(e,"delete",t,void 0),r}function us(e,t){const n=Reflect.has(e,t);return(!Pr(t)||!xi.has(t))&&de(e,"has",t),n}function ds(e){return de(e,"iterate",z(e)?"length":tt),Reflect.ownKeys(e)}const _i={get:as,set:ls,deleteProperty:cs,has:us,ownKeys:ds},ms={get:os,set(e,t){return!0},deleteProperty(e,t){return!0}},hs=ae({},_i,{get:is,set:fs}),Mr=e=>e,An=e=>Reflect.getPrototypeOf(e);function Vt(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&de(a,"get",t),de(a,"get",i));const{has:o}=An(a),s=r?Mr:n?Lr:jr;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Xt(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&de(r,"has",e),de(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Jt(e,t=!1){return e=e.__v_raw,!t&&de(U(e),"iterate",tt),Reflect.get(e,"size",e)}function pa(e){e=U(e);const t=U(this);return An(t).has.call(t,e)||(t.add(e),Fe(t,"add",e,e)),this}function ga(e,t){t=U(t);const n=U(this),{has:r,get:a}=An(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?ln(t,o)&&Fe(n,"set",e,t):Fe(n,"add",e,t),this}function va(e){const t=U(this),{has:n,get:r}=An(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Fe(t,"delete",e,void 0),i}function ba(){const e=U(this),t=e.size!==0,n=e.clear();return t&&Fe(e,"clear",void 0,void 0),n}function Gt(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?Mr:e?Lr:jr;return!e&&de(s,"iterate",tt),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function Zt(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=pt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?Mr:t?Lr:jr;return!t&&de(i,"iterate",l?Gn:tt),{next(){const{value:m,done:b}=u.next();return b?{value:m,done:b}:{value:s?[d(m[0]),d(m[1])]:d(m),done:b}},[Symbol.iterator](){return this}}}}function He(e){return function(...t){return e==="delete"?!1:this}}function ps(){const e={get(i){return Vt(this,i)},get size(){return Jt(this)},has:Xt,add:pa,set:ga,delete:va,clear:ba,forEach:Gt(!1,!1)},t={get(i){return Vt(this,i,!1,!0)},get size(){return Jt(this)},has:Xt,add:pa,set:ga,delete:va,clear:ba,forEach:Gt(!1,!0)},n={get(i){return Vt(this,i,!0)},get size(){return Jt(this,!0)},has(i){return Xt.call(this,i,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:Gt(!0,!1)},r={get(i){return Vt(this,i,!0,!0)},get size(){return Jt(this,!0)},has(i){return Xt.call(this,i,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:Gt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Zt(i,!1,!1),n[i]=Zt(i,!0,!1),t[i]=Zt(i,!1,!0),r[i]=Zt(i,!0,!0)}),[e,n,t,r]}const[gs,vs,bs,ys]=ps();function Fr(e,t){const n=t?e?ys:bs:e?vs:gs;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(D(n,a)&&a in r?n:r,a,i)}const xs={get:Fr(!1,!1)},ws={get:Fr(!1,!0)},_s={get:Fr(!0,!1)},ki=new WeakMap,Ai=new WeakMap,Oi=new WeakMap,ks=new WeakMap;function As(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Os(e){return e.__v_skip||!Object.isExtensible(e)?0:As(Vo(e))}function zr(e){return Dt(e)?e:Rr(e,!1,_i,xs,ki)}function Cs(e){return Rr(e,!1,hs,ws,Ai)}function Ci(e){return Rr(e,!0,ms,_s,Oi)}function Rr(e,t,n,r,a){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Os(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function gt(e){return Dt(e)?gt(e.__v_raw):!!(e&&e.__v_isReactive)}function Dt(e){return!!(e&&e.__v_isReadonly)}function Qn(e){return!!(e&&e.__v_isShallow)}function Ei(e){return gt(e)||Dt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Pi(e){return fn(e,"__v_skip",!0),e}const jr=e=>Z(e)?zr(e):e,Lr=e=>Z(e)?Ci(e):e;function Es(e){We&&ge&&(e=U(e),yi(e.dep||(e.dep=Tr())))}function Ps(e,t){e=U(e),e.dep&&Zn(e.dep)}function re(e){return!!(e&&e.__v_isRef===!0)}function Is(e){return re(e)?e.value:e}const Ts={get:(e,t,n)=>Is(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return re(a)&&!re(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Ii(e){return gt(e)?e:new Proxy(e,Ts)}class Ss{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Sr(t,()=>{this._dirty||(this._dirty=!0,Ps(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return Es(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ns(e,t,n=!1){let r,a;const i=R(e);return i?(r=e,a=xe):(r=e.get,a=e.set),new Ss(r,a,i||!a,n)}function Ke(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){On(i,t,n)}return a}function we(e,t,n,r){if(R(e)){const i=Ke(e,t,n,r);return i&&mi(i)&&i.catch(o=>{On(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(we(e[i],t,n,r));return a}function On(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ke(l,null,10,[e,o,s]);return}}Ms(e,n,a,r)}function Ms(e,t,n,r=!0){console.error(e)}let cn=!1,er=!1;const ue=[];let Me=0;const Mt=[];let St=null,ft=0;const Ft=[];let Be=null,ct=0;const Ti=Promise.resolve();let Dr=null,tr=null;function Fs(e){const t=Dr||Ti;return e?t.then(this?e.bind(this):e):t}function zs(e){let t=Me+1,n=ue.length;for(;t<n;){const r=t+n>>>1;$t(ue[r])<e?t=r+1:n=r}return t}function Si(e){(!ue.length||!ue.includes(e,cn&&e.allowRecurse?Me+1:Me))&&e!==tr&&(e.id==null?ue.push(e):ue.splice(zs(e.id),0,e),Ni())}function Ni(){!cn&&!er&&(er=!0,Dr=Ti.then(zi))}function Rs(e){const t=ue.indexOf(e);t>Me&&ue.splice(t,1)}function Mi(e,t,n,r){z(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Ni()}function js(e){Mi(e,St,Mt,ft)}function Ls(e){Mi(e,Be,Ft,ct)}function Cn(e,t=null){if(Mt.length){for(tr=t,St=[...new Set(Mt)],Mt.length=0,ft=0;ft<St.length;ft++)St[ft]();St=null,ft=0,tr=null,Cn(e,t)}}function Fi(e){if(Cn(),Ft.length){const t=[...new Set(Ft)];if(Ft.length=0,Be){Be.push(...t);return}for(Be=t,Be.sort((n,r)=>$t(n)-$t(r)),ct=0;ct<Be.length;ct++)Be[ct]();Be=null,ct=0}}const $t=e=>e.id==null?1/0:e.id;function zi(e){er=!1,cn=!0,Cn(e),ue.sort((n,r)=>$t(n)-$t(r));const t=xe;try{for(Me=0;Me<ue.length;Me++){const n=ue[Me];n&&n.active!==!1&&Ke(n,null,14)}}finally{Me=0,ue.length=0,Fi(),cn=!1,Dr=null,(ue.length||Mt.length||Ft.length)&&zi(e)}}function Ds(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:b}=r[d]||K;b&&(a=n.map(O=>O.trim())),m&&(a=n.map(Go))}let s,l=r[s=Dn(t)]||r[s=Dn(Te(t))];!l&&i&&(l=r[s=Dn(xt(t))]),l&&we(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,we(u,e,6,a)}}function Ri(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!R(e)){const l=u=>{const d=Ri(u,t,!0);d&&(s=!0,ae(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(z(i)?i.forEach(l=>o[l]=null):ae(o,i),r.set(e,o),o)}function En(e,t){return!e||!xn(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,xt(t))||D(e,t))}let Pe=null,ji=null;function un(e){const t=Pe;return Pe=e,ji=e&&e.type.__scopeId||null,t}function $s(e,t=Pe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Pa(-1);const i=un(t),o=e(...a);return un(i),r._d&&Pa(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Hn(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:b,setupState:O,ctx:F,inheritAttrs:j}=e;let S,y;const C=un(e);try{if(n.shapeFlag&4){const L=a||r;S=Ee(d.call(L,L,m,i,O,b,F)),y=l}else{const L=t;S=Ee(L.length>1?L(i,{attrs:l,slots:s,emit:u}):L(i,null)),y=t.props?l:Hs(l)}}catch(L){zt.length=0,On(L,e,1),S=G(Ht)}let N=S;if(y&&j!==!1){const L=Object.keys(y),{shapeFlag:W}=N;L.length&&W&7&&(o&&L.some(Cr)&&(y=Us(y,o)),N=bt(N,y))}return n.dirs&&(N=bt(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),S=N,un(C),S}const Hs=e=>{let t;for(const n in e)(n==="class"||n==="style"||xn(n))&&((t||(t={}))[n]=e[n]);return t},Us=(e,t)=>{const n={};for(const r in e)(!Cr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Bs(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ya(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const b=d[m];if(o[b]!==r[b]&&!En(u,b))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ya(r,o,u):!0:!!o;return!1}function ya(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!En(n,i))return!0}return!1}function Ys({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ws=e=>e.__isSuspense;function Ks(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):Ls(e)}function qs(e,t){if(Q){let n=Q.provides;const r=Q.parent&&Q.parent.provides;r===n&&(n=Q.provides=Object.create(r)),n[e]=t}}function Un(e,t,n=!1){const r=Q||Pe;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&R(t)?t.call(r.proxy):t}}const xa={};function tn(e,t,n){return Li(e,t,n)}function Li(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=K){const s=Q;let l,u=!1,d=!1;if(re(e)?(l=()=>e.value,u=Qn(e)):gt(e)?(l=()=>e,r=!0):z(e)?(d=!0,u=e.some(y=>gt(y)||Qn(y)),l=()=>e.map(y=>{if(re(y))return y.value;if(gt(y))return ut(y);if(R(y))return Ke(y,s,2)})):R(e)?t?l=()=>Ke(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),we(e,s,3,[b])}:l=xe,t&&r){const y=l;l=()=>ut(y())}let m,b=y=>{m=S.onStop=()=>{Ke(y,s,4)}};if(Bt)return b=xe,t?n&&we(t,s,3,[l(),d?[]:void 0,b]):l(),xe;let O=d?[]:xa;const F=()=>{if(!!S.active)if(t){const y=S.run();(r||u||(d?y.some((C,N)=>ln(C,O[N])):ln(y,O)))&&(m&&m(),we(t,s,3,[y,O===xa?void 0:O,b]),O=y)}else S.run()};F.allowRecurse=!!t;let j;a==="sync"?j=F:a==="post"?j=()=>le(F,s&&s.suspense):j=()=>js(F);const S=new Sr(l,j);return t?n?F():O=S.run():a==="post"?le(S.run.bind(S),s&&s.suspense):S.run(),()=>{S.stop(),s&&s.scope&&Er(s.scope.effects,S)}}function Vs(e,t,n){const r=this.proxy,a=ee(e)?e.includes(".")?Di(r,e):()=>r[e]:e.bind(r,r);let i;R(t)?i=t:(i=t.handler,n=t);const o=Q;yt(this);const s=Li(a,i.bind(r),n);return o?yt(o):nt(),s}function Di(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ut(e,t){if(!Z(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),re(e))ut(e.value,t);else if(z(e))for(let n=0;n<e.length;n++)ut(e[n],t);else if(di(e)||pt(e))e.forEach(n=>{ut(n,t)});else if(pi(e))for(const n in e)ut(e[n],t);return e}function $r(e){return R(e)?{setup:e,name:e.name}:e}const nn=e=>!!e.type.__asyncLoader,$i=e=>e.type.__isKeepAlive;function Xs(e,t){Hi(e,"a",t)}function Js(e,t){Hi(e,"da",t)}function Hi(e,t,n=Q){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Pn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)$i(a.parent.vnode)&&Gs(r,t,n,a),a=a.parent}}function Gs(e,t,n,r){const a=Pn(t,e,r,!0);Ui(()=>{Er(r[t],a)},n)}function Pn(e,t,n=Q,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;wt(),yt(n);const s=we(t,n,e,o);return nt(),_t(),s});return r?a.unshift(i):a.push(i),i}}const Le=e=>(t,n=Q)=>(!Bt||e==="sp")&&Pn(e,t,n),Zs=Le("bm"),Qs=Le("m"),el=Le("bu"),tl=Le("u"),nl=Le("bum"),Ui=Le("um"),rl=Le("sp"),al=Le("rtg"),il=Le("rtc");function ol(e,t=Q){Pn("ec",e,t)}function Je(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(wt(),we(l,n,8,[e.el,s,e,t]),_t())}}const Bi="components";function sl(e,t){return fl(Bi,e,!0,t)||e}const ll=Symbol();function fl(e,t,n=!0,r=!1){const a=Pe||Q;if(a){const i=a.type;if(e===Bi){const s=Hl(i,!1);if(s&&(s===t||s===Te(t)||s===kn(Te(t))))return i}const o=wa(a[e]||i[e],t)||wa(a.appContext[e],t);return!o&&r?i:o}}function wa(e,t){return e&&(e[t]||e[Te(t)]||e[kn(Te(t))])}const nr=e=>e?to(e)?Yr(e)||e.proxy:nr(e.parent):null,dn=ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>nr(e.parent),$root:e=>nr(e.root),$emit:e=>e.emit,$options:e=>Wi(e),$forceUpdate:e=>e.f||(e.f=()=>Si(e.update)),$nextTick:e=>e.n||(e.n=Fs.bind(e.proxy)),$watch:e=>Vs.bind(e)}),cl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const O=o[t];if(O!==void 0)switch(O){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==K&&D(r,t))return o[t]=1,r[t];if(a!==K&&D(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&D(u,t))return o[t]=3,i[t];if(n!==K&&D(n,t))return o[t]=4,n[t];rr&&(o[t]=0)}}const d=dn[t];let m,b;if(d)return t==="$attrs"&&de(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==K&&D(n,t))return o[t]=4,n[t];if(b=l.config.globalProperties,D(b,t))return b[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==K&&D(a,t)?(a[t]=n,!0):r!==K&&D(r,t)?(r[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==K&&D(e,o)||t!==K&&D(t,o)||(s=i[0])&&D(s,o)||D(r,o)||D(dn,o)||D(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let rr=!0;function ul(e){const t=Wi(e),n=e.proxy,r=e.ctx;rr=!1,t.beforeCreate&&_a(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:b,beforeUpdate:O,updated:F,activated:j,deactivated:S,beforeDestroy:y,beforeUnmount:C,destroyed:N,unmounted:L,render:W,renderTracked:te,renderTriggered:fe,errorCaptured:_e,serverPrefetch:ie,expose:At,inheritAttrs:it,components:Ot,directives:Kt,filters:ia}=t;if(u&&dl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const J in o){const q=o[J];R(q)&&(r[J]=q.bind(n))}if(a){const J=a.call(n,n);Z(J)&&(e.data=zr(J))}if(rr=!0,i)for(const J in i){const q=i[J],Se=R(q)?q.bind(n,n):R(q.get)?q.get.bind(n,n):xe,Rn=!R(q)&&R(q.set)?q.set.bind(n):xe,Ct=he({get:Se,set:Rn});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Ct.value,set:ot=>Ct.value=ot})}if(s)for(const J in s)Yi(s[J],r,n,J);if(l){const J=R(l)?l.call(n):l;Reflect.ownKeys(J).forEach(q=>{qs(q,J[q])})}d&&_a(d,e,"c");function oe(J,q){z(q)?q.forEach(Se=>J(Se.bind(n))):q&&J(q.bind(n))}if(oe(Zs,m),oe(Qs,b),oe(el,O),oe(tl,F),oe(Xs,j),oe(Js,S),oe(ol,_e),oe(il,te),oe(al,fe),oe(nl,C),oe(Ui,L),oe(rl,ie),z(At))if(At.length){const J=e.exposed||(e.exposed={});At.forEach(q=>{Object.defineProperty(J,q,{get:()=>n[q],set:Se=>n[q]=Se})})}else e.exposed||(e.exposed={});W&&e.render===xe&&(e.render=W),it!=null&&(e.inheritAttrs=it),Ot&&(e.components=Ot),Kt&&(e.directives=Kt)}function dl(e,t,n=xe,r=!1){z(e)&&(e=ar(e));for(const a in e){const i=e[a];let o;Z(i)?"default"in i?o=Un(i.from||a,i.default,!0):o=Un(i.from||a):o=Un(i),re(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function _a(e,t,n){we(z(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Yi(e,t,n,r){const a=r.includes(".")?Di(n,r):()=>n[r];if(ee(e)){const i=t[e];R(i)&&tn(a,i)}else if(R(e))tn(a,e.bind(n));else if(Z(e))if(z(e))e.forEach(i=>Yi(i,t,n,r));else{const i=R(e.handler)?e.handler.bind(n):t[e.handler];R(i)&&tn(a,i,e)}}function Wi(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>mn(l,u,o,!0)),mn(l,t,o)),i.set(t,l),l}function mn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&mn(e,i,n,!0),a&&a.forEach(o=>mn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=ml[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const ml={data:ka,props:Ze,emits:Ze,methods:Ze,computed:Ze,beforeCreate:ne,created:ne,beforeMount:ne,mounted:ne,beforeUpdate:ne,updated:ne,beforeDestroy:ne,beforeUnmount:ne,destroyed:ne,unmounted:ne,activated:ne,deactivated:ne,errorCaptured:ne,serverPrefetch:ne,components:Ze,directives:Ze,watch:pl,provide:ka,inject:hl};function ka(e,t){return t?e?function(){return ae(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function hl(e,t){return Ze(ar(e),ar(t))}function ar(e){if(z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ne(e,t){return e?[...new Set([].concat(e,t))]:t}function Ze(e,t){return e?ae(ae(Object.create(null),e),t):t}function pl(e,t){if(!e)return t;if(!t)return e;const n=ae(Object.create(null),e);for(const r in t)n[r]=ne(e[r],t[r]);return n}function gl(e,t,n,r=!1){const a={},i={};fn(i,In,1),e.propsDefaults=Object.create(null),Ki(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Cs(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function vl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let b=d[m];if(En(e.emitsOptions,b))continue;const O=t[b];if(l)if(D(i,b))O!==i[b]&&(i[b]=O,u=!0);else{const F=Te(b);a[F]=ir(l,s,F,O,e,!1)}else O!==i[b]&&(i[b]=O,u=!0)}}}else{Ki(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!D(t,m)&&((d=xt(m))===m||!D(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=ir(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!D(t,m)&&!0)&&(delete i[m],u=!0)}u&&Fe(e,"set","$attrs")}function Ki(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(en(l))continue;const u=t[l];let d;a&&D(a,d=Te(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:En(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=U(n),u=s||K;for(let d=0;d<i.length;d++){const m=i[d];n[m]=ir(a,l,m,u[m],e,!D(u,m))}}return o}function ir(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=D(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&R(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(yt(a),r=u[n]=l.call(null,t),nt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===xt(n))&&(r=!0))}return r}function qi(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!R(e)){const d=m=>{l=!0;const[b,O]=qi(m,t,!0);ae(o,b),O&&s.push(...O)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,ht),ht;if(z(i))for(let d=0;d<i.length;d++){const m=Te(i[d]);Aa(m)&&(o[m]=K)}else if(i)for(const d in i){const m=Te(d);if(Aa(m)){const b=i[d],O=o[m]=z(b)||R(b)?{type:b}:b;if(O){const F=Ea(Boolean,O.type),j=Ea(String,O.type);O[0]=F>-1,O[1]=j<0||F<j,(F>-1||D(O,"default"))&&s.push(m)}}}const u=[o,s];return r.set(e,u),u}function Aa(e){return e[0]!=="$"}function Oa(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ca(e,t){return Oa(e)===Oa(t)}function Ea(e,t){return z(t)?t.findIndex(n=>Ca(n,e)):R(t)&&Ca(t,e)?0:-1}const Vi=e=>e[0]==="_"||e==="$stable",Hr=e=>z(e)?e.map(Ee):[Ee(e)],bl=(e,t,n)=>{if(t._n)return t;const r=$s((...a)=>Hr(t(...a)),n);return r._c=!1,r},Xi=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Vi(a))continue;const i=e[a];if(R(i))t[a]=bl(a,i,r);else if(i!=null){const o=Hr(i);t[a]=()=>o}}},Ji=(e,t)=>{const n=Hr(t);e.slots.default=()=>n},yl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),fn(t,"_",n)):Xi(t,e.slots={})}else e.slots={},t&&Ji(e,t);fn(e.slots,In,1)},xl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=K;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ae(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Xi(t,a)),o=t}else t&&(Ji(e,t),o={default:1});if(i)for(const s in a)!Vi(s)&&!(s in o)&&delete a[s]};function Gi(){return{app:null,config:{isNativeTag:Wo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wl=0;function _l(e,t){return function(r,a=null){R(r)||(r=Object.assign({},r)),a!=null&&!Z(a)&&(a=null);const i=Gi(),o=new Set;let s=!1;const l=i.app={_uid:wl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Bl,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&R(u.install)?(o.add(u),u.install(l,...d)):R(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const b=G(r,a);return b.appContext=i,d&&t?t(b,u):e(b,u,m),s=!0,l._container=u,u.__vue_app__=l,Yr(b.component)||b.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function or(e,t,n,r,a=!1){if(z(e)){e.forEach((b,O)=>or(b,t&&(z(t)?t[O]:t),n,r,a));return}if(nn(r)&&!a)return;const i=r.shapeFlag&4?Yr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===K?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(ee(u)?(d[u]=null,D(m,u)&&(m[u]=null)):re(u)&&(u.value=null)),R(l))Ke(l,s,12,[o,d]);else{const b=ee(l),O=re(l);if(b||O){const F=()=>{if(e.f){const j=b?d[l]:l.value;a?z(j)&&Er(j,i):z(j)?j.includes(i)||j.push(i):b?(d[l]=[i],D(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else b?(d[l]=o,D(m,l)&&(m[l]=o)):O&&(l.value=o,e.k&&(d[e.k]=o))};o?(F.id=-1,le(F,n)):F()}}}const le=Ks;function kl(e){return Al(e)}function Al(e,t){const n=Zo();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:b,setScopeId:O=xe,cloneNode:F,insertStaticContent:j}=e,S=(f,c,h,g=null,p=null,w=null,k=!1,x=null,_=!!c.dynamicChildren)=>{if(f===c)return;f&&!It(f,c)&&(g=qt(f),$e(f,p,w,!0),f=null),c.patchFlag===-2&&(_=!1,c.dynamicChildren=null);const{type:v,ref:P,shapeFlag:E}=c;switch(v){case Ur:y(f,c,h,g);break;case Ht:C(f,c,h,g);break;case Bn:f==null&&N(c,h,g,k);break;case Ce:Kt(f,c,h,g,p,w,k,x,_);break;default:E&1?te(f,c,h,g,p,w,k,x,_):E&6?ia(f,c,h,g,p,w,k,x,_):(E&64||E&128)&&v.process(f,c,h,g,p,w,k,x,_,st)}P!=null&&p&&or(P,f&&f.ref,w,c||f,!c)},y=(f,c,h,g)=>{if(f==null)r(c.el=s(c.children),h,g);else{const p=c.el=f.el;c.children!==f.children&&u(p,c.children)}},C=(f,c,h,g)=>{f==null?r(c.el=l(c.children||""),h,g):c.el=f.el},N=(f,c,h,g)=>{[f.el,f.anchor]=j(f.children,c,h,g,f.el,f.anchor)},L=({el:f,anchor:c},h,g)=>{let p;for(;f&&f!==c;)p=b(f),r(f,h,g),f=p;r(c,h,g)},W=({el:f,anchor:c})=>{let h;for(;f&&f!==c;)h=b(f),a(f),f=h;a(c)},te=(f,c,h,g,p,w,k,x,_)=>{k=k||c.type==="svg",f==null?fe(c,h,g,p,w,k,x,_):At(f,c,p,w,k,x,_)},fe=(f,c,h,g,p,w,k,x)=>{let _,v;const{type:P,props:E,shapeFlag:I,transition:M,patchFlag:$,dirs:B}=f;if(f.el&&F!==void 0&&$===-1)_=f.el=F(f.el);else{if(_=f.el=o(f.type,w,E&&E.is,E),I&8?d(_,f.children):I&16&&ie(f.children,_,null,g,p,w&&P!=="foreignObject",k,x),B&&Je(f,null,g,"created"),E){for(const V in E)V!=="value"&&!en(V)&&i(_,V,null,E[V],w,f.children,g,p,Ne);"value"in E&&i(_,"value",null,E.value),(v=E.onVnodeBeforeMount)&&Ae(v,g,f)}_e(_,f,f.scopeId,k,g)}B&&Je(f,null,g,"beforeMount");const Y=(!p||p&&!p.pendingBranch)&&M&&!M.persisted;Y&&M.beforeEnter(_),r(_,c,h),((v=E&&E.onVnodeMounted)||Y||B)&&le(()=>{v&&Ae(v,g,f),Y&&M.enter(_),B&&Je(f,null,g,"mounted")},p)},_e=(f,c,h,g,p)=>{if(h&&O(f,h),g)for(let w=0;w<g.length;w++)O(f,g[w]);if(p){let w=p.subTree;if(c===w){const k=p.vnode;_e(f,k,k.scopeId,k.slotScopeIds,p.parent)}}},ie=(f,c,h,g,p,w,k,x,_=0)=>{for(let v=_;v<f.length;v++){const P=f[v]=x?Ye(f[v]):Ee(f[v]);S(null,P,c,h,g,p,w,k,x)}},At=(f,c,h,g,p,w,k)=>{const x=c.el=f.el;let{patchFlag:_,dynamicChildren:v,dirs:P}=c;_|=f.patchFlag&16;const E=f.props||K,I=c.props||K;let M;h&&Ge(h,!1),(M=I.onVnodeBeforeUpdate)&&Ae(M,h,c,f),P&&Je(c,f,h,"beforeUpdate"),h&&Ge(h,!0);const $=p&&c.type!=="foreignObject";if(v?it(f.dynamicChildren,v,x,h,g,$,w):k||Se(f,c,x,null,h,g,$,w,!1),_>0){if(_&16)Ot(x,c,E,I,h,g,p);else if(_&2&&E.class!==I.class&&i(x,"class",null,I.class,p),_&4&&i(x,"style",E.style,I.style,p),_&8){const B=c.dynamicProps;for(let Y=0;Y<B.length;Y++){const V=B[Y],pe=E[V],lt=I[V];(lt!==pe||V==="value")&&i(x,V,pe,lt,p,f.children,h,g,Ne)}}_&1&&f.children!==c.children&&d(x,c.children)}else!k&&v==null&&Ot(x,c,E,I,h,g,p);((M=I.onVnodeUpdated)||P)&&le(()=>{M&&Ae(M,h,c,f),P&&Je(c,f,h,"updated")},g)},it=(f,c,h,g,p,w,k)=>{for(let x=0;x<c.length;x++){const _=f[x],v=c[x],P=_.el&&(_.type===Ce||!It(_,v)||_.shapeFlag&70)?m(_.el):h;S(_,v,P,null,g,p,w,k,!0)}},Ot=(f,c,h,g,p,w,k)=>{if(h!==g){for(const x in g){if(en(x))continue;const _=g[x],v=h[x];_!==v&&x!=="value"&&i(f,x,v,_,k,c.children,p,w,Ne)}if(h!==K)for(const x in h)!en(x)&&!(x in g)&&i(f,x,h[x],null,k,c.children,p,w,Ne);"value"in g&&i(f,"value",h.value,g.value)}},Kt=(f,c,h,g,p,w,k,x,_)=>{const v=c.el=f?f.el:s(""),P=c.anchor=f?f.anchor:s("");let{patchFlag:E,dynamicChildren:I,slotScopeIds:M}=c;M&&(x=x?x.concat(M):M),f==null?(r(v,h,g),r(P,h,g),ie(c.children,h,P,p,w,k,x,_)):E>0&&E&64&&I&&f.dynamicChildren?(it(f.dynamicChildren,I,h,p,w,k,x),(c.key!=null||p&&c===p.subTree)&&Zi(f,c,!0)):Se(f,c,h,P,p,w,k,x,_)},ia=(f,c,h,g,p,w,k,x,_)=>{c.slotScopeIds=x,f==null?c.shapeFlag&512?p.ctx.activate(c,h,g,k,_):zn(c,h,g,p,w,k,_):oe(f,c,_)},zn=(f,c,h,g,p,w,k)=>{const x=f.component=Rl(f,g,p);if($i(f)&&(x.ctx.renderer=st),jl(x),x.asyncDep){if(p&&p.registerDep(x,J),!f.el){const _=x.subTree=G(Ht);C(null,_,c,h)}return}J(x,f,c,h,p,w,k)},oe=(f,c,h)=>{const g=c.component=f.component;if(Bs(f,c,h))if(g.asyncDep&&!g.asyncResolved){q(g,c,h);return}else g.next=c,Rs(g.update),g.update();else c.el=f.el,g.vnode=c},J=(f,c,h,g,p,w,k)=>{const x=()=>{if(f.isMounted){let{next:P,bu:E,u:I,parent:M,vnode:$}=f,B=P,Y;Ge(f,!1),P?(P.el=$.el,q(f,P,k)):P=$,E&&$n(E),(Y=P.props&&P.props.onVnodeBeforeUpdate)&&Ae(Y,M,P,$),Ge(f,!0);const V=Hn(f),pe=f.subTree;f.subTree=V,S(pe,V,m(pe.el),qt(pe),f,p,w),P.el=V.el,B===null&&Ys(f,V.el),I&&le(I,p),(Y=P.props&&P.props.onVnodeUpdated)&&le(()=>Ae(Y,M,P,$),p)}else{let P;const{el:E,props:I}=c,{bm:M,m:$,parent:B}=f,Y=nn(c);if(Ge(f,!1),M&&$n(M),!Y&&(P=I&&I.onVnodeBeforeMount)&&Ae(P,B,c),Ge(f,!0),E&&Ln){const V=()=>{f.subTree=Hn(f),Ln(E,f.subTree,f,p,null)};Y?c.type.__asyncLoader().then(()=>!f.isUnmounted&&V()):V()}else{const V=f.subTree=Hn(f);S(null,V,h,g,f,p,w),c.el=V.el}if($&&le($,p),!Y&&(P=I&&I.onVnodeMounted)){const V=c;le(()=>Ae(P,B,V),p)}(c.shapeFlag&256||B&&nn(B.vnode)&&B.vnode.shapeFlag&256)&&f.a&&le(f.a,p),f.isMounted=!0,c=h=g=null}},_=f.effect=new Sr(x,()=>Si(v),f.scope),v=f.update=()=>_.run();v.id=f.uid,Ge(f,!0),v()},q=(f,c,h)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,vl(f,c.props,g,h),xl(f,c.children,h),wt(),Cn(void 0,f.update),_t()},Se=(f,c,h,g,p,w,k,x,_=!1)=>{const v=f&&f.children,P=f?f.shapeFlag:0,E=c.children,{patchFlag:I,shapeFlag:M}=c;if(I>0){if(I&128){Ct(v,E,h,g,p,w,k,x,_);return}else if(I&256){Rn(v,E,h,g,p,w,k,x,_);return}}M&8?(P&16&&Ne(v,p,w),E!==v&&d(h,E)):P&16?M&16?Ct(v,E,h,g,p,w,k,x,_):Ne(v,p,w,!0):(P&8&&d(h,""),M&16&&ie(E,h,g,p,w,k,x,_))},Rn=(f,c,h,g,p,w,k,x,_)=>{f=f||ht,c=c||ht;const v=f.length,P=c.length,E=Math.min(v,P);let I;for(I=0;I<E;I++){const M=c[I]=_?Ye(c[I]):Ee(c[I]);S(f[I],M,h,null,p,w,k,x,_)}v>P?Ne(f,p,w,!0,!1,E):ie(c,h,g,p,w,k,x,_,E)},Ct=(f,c,h,g,p,w,k,x,_)=>{let v=0;const P=c.length;let E=f.length-1,I=P-1;for(;v<=E&&v<=I;){const M=f[v],$=c[v]=_?Ye(c[v]):Ee(c[v]);if(It(M,$))S(M,$,h,null,p,w,k,x,_);else break;v++}for(;v<=E&&v<=I;){const M=f[E],$=c[I]=_?Ye(c[I]):Ee(c[I]);if(It(M,$))S(M,$,h,null,p,w,k,x,_);else break;E--,I--}if(v>E){if(v<=I){const M=I+1,$=M<P?c[M].el:g;for(;v<=I;)S(null,c[v]=_?Ye(c[v]):Ee(c[v]),h,$,p,w,k,x,_),v++}}else if(v>I)for(;v<=E;)$e(f[v],p,w,!0),v++;else{const M=v,$=v,B=new Map;for(v=$;v<=I;v++){const ce=c[v]=_?Ye(c[v]):Ee(c[v]);ce.key!=null&&B.set(ce.key,v)}let Y,V=0;const pe=I-$+1;let lt=!1,la=0;const Et=new Array(pe);for(v=0;v<pe;v++)Et[v]=0;for(v=M;v<=E;v++){const ce=f[v];if(V>=pe){$e(ce,p,w,!0);continue}let ke;if(ce.key!=null)ke=B.get(ce.key);else for(Y=$;Y<=I;Y++)if(Et[Y-$]===0&&It(ce,c[Y])){ke=Y;break}ke===void 0?$e(ce,p,w,!0):(Et[ke-$]=v+1,ke>=la?la=ke:lt=!0,S(ce,c[ke],h,null,p,w,k,x,_),V++)}const fa=lt?Ol(Et):ht;for(Y=fa.length-1,v=pe-1;v>=0;v--){const ce=$+v,ke=c[ce],ca=ce+1<P?c[ce+1].el:g;Et[v]===0?S(null,ke,h,ca,p,w,k,x,_):lt&&(Y<0||v!==fa[Y]?ot(ke,h,ca,2):Y--)}}},ot=(f,c,h,g,p=null)=>{const{el:w,type:k,transition:x,children:_,shapeFlag:v}=f;if(v&6){ot(f.component.subTree,c,h,g);return}if(v&128){f.suspense.move(c,h,g);return}if(v&64){k.move(f,c,h,st);return}if(k===Ce){r(w,c,h);for(let E=0;E<_.length;E++)ot(_[E],c,h,g);r(f.anchor,c,h);return}if(k===Bn){L(f,c,h);return}if(g!==2&&v&1&&x)if(g===0)x.beforeEnter(w),r(w,c,h),le(()=>x.enter(w),p);else{const{leave:E,delayLeave:I,afterLeave:M}=x,$=()=>r(w,c,h),B=()=>{E(w,()=>{$(),M&&M()})};I?I(w,$,B):B()}else r(w,c,h)},$e=(f,c,h,g=!1,p=!1)=>{const{type:w,props:k,ref:x,children:_,dynamicChildren:v,shapeFlag:P,patchFlag:E,dirs:I}=f;if(x!=null&&or(x,null,h,f,!0),P&256){c.ctx.deactivate(f);return}const M=P&1&&I,$=!nn(f);let B;if($&&(B=k&&k.onVnodeBeforeUnmount)&&Ae(B,c,f),P&6)Lo(f.component,h,g);else{if(P&128){f.suspense.unmount(h,g);return}M&&Je(f,null,c,"beforeUnmount"),P&64?f.type.remove(f,c,h,p,st,g):v&&(w!==Ce||E>0&&E&64)?Ne(v,c,h,!1,!0):(w===Ce&&E&384||!p&&P&16)&&Ne(_,c,h),g&&oa(f)}($&&(B=k&&k.onVnodeUnmounted)||M)&&le(()=>{B&&Ae(B,c,f),M&&Je(f,null,c,"unmounted")},h)},oa=f=>{const{type:c,el:h,anchor:g,transition:p}=f;if(c===Ce){jo(h,g);return}if(c===Bn){W(f);return}const w=()=>{a(h),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(f.shapeFlag&1&&p&&!p.persisted){const{leave:k,delayLeave:x}=p,_=()=>k(h,w);x?x(f.el,w,_):_()}else w()},jo=(f,c)=>{let h;for(;f!==c;)h=b(f),a(f),f=h;a(c)},Lo=(f,c,h)=>{const{bum:g,scope:p,update:w,subTree:k,um:x}=f;g&&$n(g),p.stop(),w&&(w.active=!1,$e(k,f,c,h)),x&&le(x,c),le(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Ne=(f,c,h,g=!1,p=!1,w=0)=>{for(let k=w;k<f.length;k++)$e(f[k],c,h,g,p)},qt=f=>f.shapeFlag&6?qt(f.component.subTree):f.shapeFlag&128?f.suspense.next():b(f.anchor||f.el),sa=(f,c,h)=>{f==null?c._vnode&&$e(c._vnode,null,null,!0):S(c._vnode||null,f,c,null,null,null,h),Fi(),c._vnode=f},st={p:S,um:$e,m:ot,r:oa,mt:zn,mc:ie,pc:Se,pbc:it,n:qt,o:e};let jn,Ln;return t&&([jn,Ln]=t(st)),{render:sa,hydrate:jn,createApp:_l(sa,jn)}}function Ge({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Zi(e,t,n=!1){const r=e.children,a=t.children;if(z(r)&&z(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ye(a[i]),s.el=o.el),n||Zi(o,s))}}function Ol(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Cl=e=>e.__isTeleport,Ce=Symbol(void 0),Ur=Symbol(void 0),Ht=Symbol(void 0),Bn=Symbol(void 0),zt=[];let be=null;function El(e=!1){zt.push(be=e?null:[])}function Pl(){zt.pop(),be=zt[zt.length-1]||null}let Ut=1;function Pa(e){Ut+=e}function Il(e){return e.dynamicChildren=Ut>0?be||ht:null,Pl(),Ut>0&&be&&be.push(e),e}function Tl(e,t,n,r,a,i){return Il(H(e,t,n,r,a,i,!0))}function sr(e){return e?e.__v_isVNode===!0:!1}function It(e,t){return e.type===t.type&&e.key===t.key}const In="__vInternal",Qi=({key:e})=>e!=null?e:null,rn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ee(e)||re(e)||R(e)?{i:Pe,r:e,k:t,f:!!n}:e:null;function H(e,t=null,n=null,r=0,a=null,i=e===Ce?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Qi(t),ref:t&&rn(t),scopeId:ji,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Br(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ee(n)?8:16),Ut>0&&!o&&be&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&be.push(l),l}const G=Sl;function Sl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===ll)&&(e=Ht),sr(e)){const s=bt(e,t,!0);return n&&Br(s,n),Ut>0&&!i&&be&&(s.shapeFlag&6?be[be.indexOf(e)]=s:be.push(s)),s.patchFlag|=-2,s}if(Ul(e)&&(e=e.__vccOpts),t){t=Nl(t);let{class:s,style:l}=t;s&&!ee(s)&&(t.class=Or(s)),Z(l)&&(Ei(l)&&!z(l)&&(l=ae({},l)),t.style=Ar(l))}const o=ee(e)?1:Ws(e)?128:Cl(e)?64:Z(e)?4:R(e)?2:0;return H(e,t,n,r,a,o,i,!0)}function Nl(e){return e?Ei(e)||In in e?ae({},e):e:null}function bt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Ml(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Qi(s),ref:t&&t.ref?n&&a?z(a)?a.concat(rn(t)):[a,rn(t)]:rn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&bt(e.ssContent),ssFallback:e.ssFallback&&bt(e.ssFallback),el:e.el,anchor:e.anchor}}function eo(e=" ",t=0){return G(Ur,null,e,t)}function Ee(e){return e==null||typeof e=="boolean"?G(Ht):z(e)?G(Ce,null,e.slice()):typeof e=="object"?Ye(e):G(Ur,null,String(e))}function Ye(e){return e.el===null||e.memo?e:bt(e)}function Br(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(z(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Br(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(In in t)?t._ctx=Pe:a===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),r&64?(n=16,t=[eo(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ml(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Or([t.class,r.class]));else if(a==="style")t.style=Ar([t.style,r.style]);else if(xn(a)){const i=t[a],o=r[a];o&&i!==o&&!(z(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ae(e,t,n,r=null){we(e,t,7,[n,r])}const Fl=Gi();let zl=0;function Rl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Fl,i={uid:zl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qi(r,a),emitsOptions:Ri(r,a),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Ds.bind(null,i),e.ce&&e.ce(i),i}let Q=null;const yt=e=>{Q=e,e.scope.on()},nt=()=>{Q&&Q.scope.off(),Q=null};function to(e){return e.vnode.shapeFlag&4}let Bt=!1;function jl(e,t=!1){Bt=t;const{props:n,children:r}=e.vnode,a=to(e);gl(e,n,a,t),yl(e,r);const i=a?Ll(e,t):void 0;return Bt=!1,i}function Ll(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Pi(new Proxy(e.ctx,cl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?$l(e):null;yt(e),wt();const i=Ke(r,e,0,[e.props,a]);if(_t(),nt(),mi(i)){if(i.then(nt,nt),t)return i.then(o=>{Ia(e,o,t)}).catch(o=>{On(o,e,0)});e.asyncDep=i}else Ia(e,i,t)}else no(e,t)}function Ia(e,t,n){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=Ii(t)),no(e,n)}let Ta;function no(e,t,n){const r=e.type;if(!e.render){if(!t&&Ta&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=ae(ae({isCustomElement:i,delimiters:s},o),l);r.render=Ta(a,u)}}e.render=r.render||xe}yt(e),wt(),ul(e),_t(),nt()}function Dl(e){return new Proxy(e.attrs,{get(t,n){return de(e,"get","$attrs"),t[n]}})}function $l(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Dl(e))},slots:e.slots,emit:e.emit,expose:t}}function Yr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ii(Pi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in dn)return dn[n](e)}}))}function Hl(e,t=!0){return R(e)?e.displayName||e.name:e.name||t&&e.__name}function Ul(e){return R(e)&&"__vccOpts"in e}const he=(e,t)=>Ns(e,t,Bt);function ro(e,t,n){const r=arguments.length;return r===2?Z(t)&&!z(t)?sr(t)?G(e,null,[t]):G(e,t):G(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&sr(n)&&(n=[n]),G(e,t,n))}const Bl="3.2.37",Yl="http://www.w3.org/2000/svg",Qe=typeof document!="undefined"?document:null,Sa=Qe&&Qe.createElement("template"),Wl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Qe.createElementNS(Yl,e):Qe.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Qe.createTextNode(e),createComment:e=>Qe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Qe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Sa.innerHTML=r?`<svg>${e}</svg>`:e;const s=Sa.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Kl(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function ql(e,t,n){const r=e.style,a=ee(n);if(n&&!a){for(const i in n)lr(r,i,n[i]);if(t&&!ee(t))for(const i in t)n[i]==null&&lr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Na=/\s*!important$/;function lr(e,t,n){if(z(n))n.forEach(r=>lr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Vl(e,t);Na.test(n)?e.setProperty(xt(r),n.replace(Na,""),"important"):e[r]=n}}const Ma=["Webkit","Moz","ms"],Yn={};function Vl(e,t){const n=Yn[t];if(n)return n;let r=Te(t);if(r!=="filter"&&r in e)return Yn[t]=r;r=kn(r);for(let a=0;a<Ma.length;a++){const i=Ma[a]+r;if(i in e)return Yn[t]=i}return t}const Fa="http://www.w3.org/1999/xlink";function Xl(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Fa,t.slice(6,t.length)):e.setAttributeNS(Fa,t,n);else{const i=Ho(t);n==null||i&&!ci(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Jl(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=ci(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[ao,Gl]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let fr=0;const Zl=Promise.resolve(),Ql=()=>{fr=0},ef=()=>fr||(Zl.then(Ql),fr=ao());function tf(e,t,n,r){e.addEventListener(t,n,r)}function nf(e,t,n,r){e.removeEventListener(t,n,r)}function rf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=af(t);if(r){const u=i[t]=of(r,a);tf(e,s,u,l)}else o&&(nf(e,s,o,l),i[t]=void 0)}}const za=/(?:Once|Passive|Capture)$/;function af(e){let t;if(za.test(e)){t={};let n;for(;n=e.match(za);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[xt(e.slice(2)),t]}function of(e,t){const n=r=>{const a=r.timeStamp||ao();(Gl||a>=n.attached-1)&&we(sf(r,n.value),t,5,[r])};return n.value=e,n.attached=ef(),n}function sf(e,t){if(z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ra=/^on[a-z]/,lf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Kl(e,r,a):t==="style"?ql(e,n,r):xn(t)?Cr(t)||rf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ff(e,t,r,a))?Jl(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Xl(e,t,r,a))};function ff(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ra.test(t)&&R(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ra.test(t)&&ee(n)?!1:t in e}const cf=ae({patchProp:lf},Wl);let ja;function uf(){return ja||(ja=kl(cf))}const df=(...e)=>{const t=uf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=mf(r);if(!a)return;const i=t._component;!R(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function mf(e){return ee(e)?document.querySelector(e):e}const hf={class:"anzeige"},pf={class:"spielfeld"},gf={class:"anzeige-bot auswahl-anzeige"},vf={class:"anzeige-ergebnis"},bf={class:"anzeige-mensch auswahl-anzeige"},yf={class:"auswahlfeld"},xf={class:"auswahl"},wf={class:"auswahl-liste"},_f=H("span",{class:"icon-text"},"rock",-1),kf=H("span",{class:"icon-text"},"paper",-1),Af=H("span",{class:"icon-text"},"scissors",-1),Of=H("span",{class:"icon-text"},"lizard",-1),Cf=H("span",{class:"icon-text"},"spock",-1),Ef=H("footer",{class:"footer"},[H("a",{href:"http://niklasjaeger.de"},"My Homepage"),eo(" | "),H("a",{href:"https://bigbangtheory.fandom.com/de/wiki/Stein,_Papier,_Schere,_Echse,_Spock"}," Informations about the game")],-1),Pf={data(){return{choice_human:"",choice_bot:"",random:0,class_human:"",class_bot:"",counter_human:0,counter_bot:0,output:"",gameObject:{bot:this.choice_bot,human:this.choice_human,status:0}}},methods:{myFunction:function(e){this.random=Math.floor(Math.random()*e),console.log(this.random)},getIcon(e){switch(e){case"rock":return"fa-hand-back-fist";case"scissors":return"fa-hand-scissors";case"paper":return"fa-hand-paper";case"spock":return"fa-hand-spock";case"lizard":return"fa-hand-lizard"}},getRandomChoice(){switch(this.myFunction(5),this.random){case 0:this.choice_bot="rock";break;case 1:this.choice_bot="scissors";break;case 2:this.choice_bot="paper";break;case 3:this.choice_bot="lizard";break;case 4:this.choice_bot="spock";break}this.class_bot=this.getIcon(this.choice_bot)},getHumanChoice(e){this.choice_human=e,console.log(this.choice_human),this.class_human=this.getIcon(this.choice_human)},gameFunction(){if(this.choice_human=="")this.output="Please choose your Sign.";else{if(this.getRandomChoice(),this.choice_bot==this.choice_human)this.gameObject.bot=this.gameObject.human=this.choice_bot,this.gameObject.status=1,console.log(this.gameObject);else switch(this.choice_bot){case"scissors":this.choice_human=="paper"||this.choice_human=="lizard"?(this.gameObject.status=2,this.counter_bot++):(this.gameObject.status=3,this.counter_human++);break;case"lizard":this.choice_human=="spock"||this.choice_human=="paper"?(this.gameObject.status=2,this.counter_bot++):(this.gameObject.status=3,this.counter_human++);break;case"rock":this.choice_human=="scissors"||this.choice_human=="lizard"?(this.gameObject.status=2,this.counter_bot++):(this.gameObject.status=3,this.counter_human++);break;case"paper":this.choice_human=="spock"||this.choice_human=="rock"?(this.gameObject.status=2,this.counter_bot++):(this.gameObject.status=3,this.counter_human++);break;case"spock":this.choice_human=="rock"||this.choice_human=="scissors"?(this.gameObject.status=2,this.counter_bot++):(this.gameObject.status=3,this.counter_human++);break}this.output=this.setOutput()}},setOutput(){switch(this.gameObject.status){case 1:return"Bot equals Human. It's a Draw!";case 2:return this.choice_bot+" beats "+this.choice_human+". Bot wins!";case 3:return this.choice_human+" beats "+this.choice_bot+". Human wins!";default:return"Oops. Something didn't work..."}}},mounted(){this.getHumanChoice(this.choice_human)}},If=Object.assign(Pf,{__name:"App",setup(e){return(t,n)=>{const r=sl("font-awesome-icon");return El(),Tl(Ce,null,[H("main",null,[H("div",hf," Bot "+Pt(t.counter_bot)+" - "+Pt(t.counter_human)+" You ",1),H("div",pf,[H("div",gf,[G(r,{icon:["fas",t.class_bot],size:"xl"},null,8,["icon"]),H("span",null,Pt(t.choice_bot),1)]),H("div",vf,[H("p",null,Pt(t.output),1)]),H("div",bf,[G(r,{icon:["fas",t.class_human],size:"xl"},null,8,["icon"]),H("span",null,Pt(t.choice_human),1)])]),H("div",yf,[H("div",xf,[H("ul",wf,[H("li",null,[H("div",{class:"icons",name:"rock",onClick:n[0]||(n[0]=a=>t.getHumanChoice("rock"))},[G(r,{icon:"fa-solid fa-hand-back-fist",size:"lg"})]),_f]),H("li",null,[H("div",{class:"icons",name:"paper",onClick:n[1]||(n[1]=a=>t.getHumanChoice("paper"))},[G(r,{icon:"fa-solid fa-hand-paper",size:"lg"})]),kf]),H("li",null,[H("div",{class:"icons",name:"scissors",onClick:n[2]||(n[2]=a=>t.getHumanChoice("scissors"))},[G(r,{icon:"fa-solid fa-hand-scissors",size:"lg"})]),Af]),H("li",null,[H("div",{class:"icons",name:"lizard",onClick:n[3]||(n[3]=a=>t.getHumanChoice("lizard"))},[G(r,{icon:"fa-solid fa-hand-lizard",size:"lg"})]),Of]),H("li",null,[H("div",{class:"icons",name:"spock",onClick:n[4]||(n[4]=a=>t.getHumanChoice("spock"))},[G(r,{icon:"fa-solid fa-hand-spock",size:"lg"})]),Cf])])]),H("button",{class:"button-start",onClick:n[5]||(n[5]=a=>t.gameFunction())},"Go!")])]),Ef],64)}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function La(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?La(Object(n),!0).forEach(function(r){Nf(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):La(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hn(e){return hn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hn(e)}function Tf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Da(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Sf(e,t,n){return t&&Da(e.prototype,t),n&&Da(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Nf(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wr(e,t){return Ff(e)||Rf(e,t)||io(e,t)||Lf()}function Tn(e){return Mf(e)||zf(e)||io(e)||jf()}function Mf(e){if(Array.isArray(e))return cr(e)}function Ff(e){if(Array.isArray(e))return e}function zf(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Rf(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function io(e,t){if(!!e){if(typeof e=="string")return cr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return cr(e,t)}}function cr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function jf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var $a=function(){},Kr={},oo={},so=null,lo={mark:$a,measure:$a};try{typeof window!="undefined"&&(Kr=window),typeof document!="undefined"&&(oo=document),typeof MutationObserver!="undefined"&&(so=MutationObserver),typeof performance!="undefined"&&(lo=performance)}catch{}var Df=Kr.navigator||{},Ha=Df.userAgent,Ua=Ha===void 0?"":Ha,Ve=Kr,X=oo,Ba=so,Qt=lo;Ve.document;var De=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",fo=~Ua.indexOf("MSIE")||~Ua.indexOf("Trident/"),ze="___FONT_AWESOME___",ur=16,co="fa",uo="svg-inline--fa",rt="data-fa-i2svg",dr="data-fa-pseudo-element",$f="data-fa-pseudo-element-pending",qr="data-prefix",Vr="data-icon",Ya="fontawesome-i2svg",Hf="async",Uf=["HTML","HEAD","STYLE","SCRIPT"],mo=function(){try{return!0}catch{return!1}}(),Xr={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},pn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},ho={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Bf={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Yf=/fa[srltdbk\-\ ]/,po="fa-layers-text",Wf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Kf={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},go=[1,2,3,4,5,6,7,8,9,10],qf=go.concat([11,12,13,14,15,16,17,18,19,20]),Vf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Xf=[].concat(Tn(Object.keys(pn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",et.GROUP,et.SWAP_OPACITY,et.PRIMARY,et.SECONDARY]).concat(go.map(function(e){return"".concat(e,"x")})).concat(qf.map(function(e){return"w-".concat(e)})),vo=Ve.FontAwesomeConfig||{};function Jf(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Gf(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var Zf=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Zf.forEach(function(e){var t=Wr(e,2),n=t[0],r=t[1],a=Gf(Jf(n));a!=null&&(vo[r]=a)})}var Qf={familyPrefix:co,styleDefault:"solid",replacementClass:uo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Rt=A(A({},Qf),vo);Rt.autoReplaceSvg||(Rt.observeMutations=!1);var T={};Object.keys(Rt).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){Rt[e]=n,an.forEach(function(r){return r(T)})},get:function(){return Rt[e]}})});Ve.FontAwesomeConfig=T;var an=[];function ec(e){return an.push(e),function(){an.splice(an.indexOf(e),1)}}var Ue=ur,Ie={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function tc(e){if(!(!e||!De)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var nc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Yt(){for(var e=12,t="";e-- >0;)t+=nc[Math.random()*62|0];return t}function kt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Jr(e){return e.classList?kt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function bo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function rc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(bo(e[n]),'" ')},"").trim()}function Sn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Gr(e){return e.size!==Ie.size||e.x!==Ie.x||e.y!==Ie.y||e.rotate!==Ie.rotate||e.flipX||e.flipY}function ac(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function ic(e){var t=e.transform,n=e.width,r=n===void 0?ur:n,a=e.height,i=a===void 0?ur:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&fo?l+="translate(".concat(t.x/Ue-r/2,"em, ").concat(t.y/Ue-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ue,"em), calc(-50% + ").concat(t.y/Ue,"em)) "):l+="translate(".concat(t.x/Ue,"em, ").concat(t.y/Ue,"em) "),l+="scale(".concat(t.size/Ue*(t.flipX?-1:1),", ").concat(t.size/Ue*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var oc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function yo(){var e=co,t=uo,n=T.familyPrefix,r=T.replacementClass,a=oc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Wa=!1;function Wn(){T.autoAddCss&&!Wa&&(tc(yo()),Wa=!0)}var sc={mixout:function(){return{dom:{css:yo,insertCss:Wn}}},hooks:function(){return{beforeDOMElementCreation:function(){Wn()},beforeI2svg:function(){Wn()}}}},Re=Ve||{};Re[ze]||(Re[ze]={});Re[ze].styles||(Re[ze].styles={});Re[ze].hooks||(Re[ze].hooks={});Re[ze].shims||(Re[ze].shims=[]);var ye=Re[ze],xo=[],lc=function e(){X.removeEventListener("DOMContentLoaded",e),gn=1,xo.map(function(t){return t()})},gn=!1;De&&(gn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),gn||X.addEventListener("DOMContentLoaded",lc));function fc(e){!De||(gn?setTimeout(e,0):xo.push(e))}function Wt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?bo(e):"<".concat(t," ").concat(rc(r),">").concat(i.map(Wt).join(""),"</").concat(t,">")}function Ka(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var cc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Kn=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?cc(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function uc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function mr(e){var t=uc(e);return t.length===1?t[0].toString(16):null}function dc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function qa(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function hr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=qa(t);typeof ye.hooks.addPack=="function"&&!a?ye.hooks.addPack(e,qa(t)):ye.styles[e]=A(A({},ye.styles[e]||{}),i),e==="fas"&&hr("fa",t)}var jt=ye.styles,mc=ye.shims,hc=Object.values(ho),Zr=null,wo={},_o={},ko={},Ao={},Oo={},pc=Object.keys(Xr);function gc(e){return~Xf.indexOf(e)}function vc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!gc(a)?a:null}var Co=function(){var t=function(i){return Kn(jt,function(o,s,l){return o[l]=Kn(s,i,{}),o},{})};wo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),_o=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Oo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in jt||T.autoFetchSvg,r=Kn(mc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ko=r.names,Ao=r.unicodes,Zr=Nn(T.styleDefault)};ec(function(e){Zr=Nn(e.styleDefault)});Co();function Qr(e,t){return(wo[e]||{})[t]}function bc(e,t){return(_o[e]||{})[t]}function dt(e,t){return(Oo[e]||{})[t]}function Eo(e){return ko[e]||{prefix:null,iconName:null}}function yc(e){var t=Ao[e],n=Qr("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Xe(){return Zr}var ea=function(){return{prefix:null,iconName:null,rest:[]}};function Nn(e){var t=Xr[e],n=pn[e]||pn[t],r=e in ye.styles?e:null;return n||r||null}function Mn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=vc(T.familyPrefix,s);if(jt[s]?(s=hc.includes(s)?Bf[s]:s,a=s,o.prefix=s):pc.indexOf(s)>-1?(a=s,o.prefix=Nn(s)):l?o.iconName=l:s!==T.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?Eo(o.iconName):{},d=dt(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!jt.far&&jt.fas&&!T.autoFetchSvg&&(o.prefix="fas")}return o},ea());return(i.prefix==="fa"||a==="fa")&&(i.prefix=Xe()||"fas"),i}var xc=function(){function e(){Tf(this,e),this.definitions={}}return Sf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),hr(s,o[s]);var l=ho[s];l&&hr(l,o[s]),Co()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),Va=[],mt={},vt={},wc=Object.keys(vt);function _c(e,t){var n=t.mixoutsTo;return Va=e,mt={},Object.keys(vt).forEach(function(r){wc.indexOf(r)===-1&&delete vt[r]}),Va.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),hn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){mt[o]||(mt[o]=[]),mt[o].push(i[o])})}r.provides&&r.provides(vt)}),n}function pr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=mt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function at(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=mt[e]||[];a.forEach(function(i){i.apply(null,n)})}function je(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return vt[e]?vt[e].apply(null,t):void 0}function gr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Xe();if(!!t)return t=dt(n,t)||t,Ka(Po.definitions,n,t)||Ka(ye.styles,n,t)}var Po=new xc,kc=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,at("noAuto")},Ac={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return De?(at("beforeI2svg",t),je("pseudoElements2svg",t),je("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,fc(function(){Cc({autoReplaceSvgRoot:n}),at("watch",t)})}},Oc={icon:function(t){if(t===null)return null;if(hn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:dt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Nn(t[0]);return{prefix:r,iconName:dt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.familyPrefix,"-"))>-1||t.match(Yf))){var a=Mn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Xe(),iconName:dt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Xe();return{prefix:i,iconName:dt(i,t)||t}}}},me={noAuto:kc,config:T,dom:Ac,parse:Oc,library:Po,findIconDefinition:gr,toHtml:Wt},Cc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(ye.styles).length>0||T.autoFetchSvg)&&De&&T.autoReplaceSvg&&me.dom.i2svg({node:r})};function Fn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Wt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!De){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Ec(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Gr(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=Sn(A(A({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Pc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:o}),children:r}]}]}function ta(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,b=e.watchable,O=b===void 0?!1:b,F=r.found?r:n,j=F.width,S=F.height,y=a==="fak",C=[T.replacementClass,i?"".concat(T.familyPrefix,"-").concat(i):""].filter(function(ie){return m.classes.indexOf(ie)===-1}).filter(function(ie){return ie!==""||!!ie}).concat(m.classes).join(" "),N={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(j," ").concat(S)})},L=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(j/S*16*.0625,"em")}:{};O&&(N.attributes[rt]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(d||Yt())},children:[l]}),delete N.attributes.title);var W=A(A({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:A(A({},L),m.styles)}),te=r.found&&n.found?je("generateAbstractMask",W)||{children:[],attributes:{}}:je("generateAbstractIcon",W)||{children:[],attributes:{}},fe=te.children,_e=te.attributes;return W.children=fe,W.attributes=_e,s?Pc(W):Ec(W)}function Xa(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=A(A(A({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[rt]="");var d=A({},o.styles);Gr(a)&&(d.transform=ic({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Sn(d);m.length>0&&(u.style=m);var b=[];return b.push({tag:"span",attributes:u,children:[t]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function Ic(e){var t=e.content,n=e.title,r=e.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Sn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var qn=ye.styles;function vr(e){var t=e[0],n=e[1],r=e.slice(4),a=Wr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.familyPrefix,"-").concat(et.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(et.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(et.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Tc={found:!1,width:512,height:512};function Sc(e,t){!mo&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function br(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=Xe()),new Promise(function(r,a){if(je("missingIconAbstract"),n==="fa"){var i=Eo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&qn[t]&&qn[t][e]){var o=qn[t][e];return r(vr(o))}Sc(e,t),r(A(A({},Tc),{},{icon:T.showMissingIcons&&e?je("missingIconAbstract")||{}:{}}))})}var Ja=function(){},yr=T.measurePerformance&&Qt&&Qt.mark&&Qt.measure?Qt:{mark:Ja,measure:Ja},Nt='FA "6.1.1"',Nc=function(t){return yr.mark("".concat(Nt," ").concat(t," begins")),function(){return Io(t)}},Io=function(t){yr.mark("".concat(Nt," ").concat(t," ends")),yr.measure("".concat(Nt," ").concat(t),"".concat(Nt," ").concat(t," begins"),"".concat(Nt," ").concat(t," ends"))},na={begin:Nc,end:Io},on=function(){};function Ga(e){var t=e.getAttribute?e.getAttribute(rt):null;return typeof t=="string"}function Mc(e){var t=e.getAttribute?e.getAttribute(qr):null,n=e.getAttribute?e.getAttribute(Vr):null;return t&&n}function Fc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function zc(){if(T.autoReplaceSvg===!0)return sn.replace;var e=sn[T.autoReplaceSvg];return e||sn.replace}function Rc(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function jc(e){return X.createElement(e)}function To(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Rc:jc:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(To(o,{ceFn:r}))}),a}function Lc(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var sn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(To(a),n)}),n.getAttribute(rt)===null&&T.keepOriginalSource){var r=X.createComment(Lc(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Jr(n).indexOf(T.replacementClass))return sn.replace(t);var a=new RegExp("".concat(T.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Wt(s)}).join(`
`);n.setAttribute(rt,""),n.innerHTML=o}};function Za(e){e()}function So(e,t){var n=typeof t=="function"?t:on;if(e.length===0)n();else{var r=Za;T.mutateApproach===Hf&&(r=Ve.requestAnimationFrame||Za),r(function(){var a=zc(),i=na.begin("mutate");e.map(a),i(),n()})}}var ra=!1;function No(){ra=!0}function xr(){ra=!1}var vn=null;function Qa(e){if(!!Ba&&!!T.observeMutations){var t=e.treeCallback,n=t===void 0?on:t,r=e.nodeCallback,a=r===void 0?on:r,i=e.pseudoElementsCallback,o=i===void 0?on:i,s=e.observeMutationsRoot,l=s===void 0?X:s;vn=new Ba(function(u){if(!ra){var d=Xe();kt(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ga(m.addedNodes[0])&&(T.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ga(m.target)&&~Vf.indexOf(m.attributeName))if(m.attributeName==="class"&&Mc(m.target)){var b=Mn(Jr(m.target)),O=b.prefix,F=b.iconName;m.target.setAttribute(qr,O||d),F&&m.target.setAttribute(Vr,F)}else Fc(m.target)&&a(m.target)})}}),De&&vn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Dc(){!vn||vn.disconnect()}function $c(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Hc(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Mn(Jr(e));return a.prefix||(a.prefix=Xe()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=bc(a.prefix,e.innerText)||Qr(a.prefix,mr(e.innerText))),a}function Uc(e){var t=kt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Yt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Bc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ie,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Hc(e),r=n.iconName,a=n.prefix,i=n.rest,o=Uc(e),s=pr("parseNodeAttributes",{},e),l=t.styleParser?$c(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ie,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Yc=ye.styles;function Mo(e){var t=T.autoReplaceSvg==="nest"?ei(e,{styleParser:!1}):ei(e);return~t.extra.classes.indexOf(po)?je("generateLayersText",e,t):je("generateSvgReplacementMutation",e,t)}function ti(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!De)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(Ya,"-").concat(m))},a=function(m){return n.remove("".concat(Ya,"-").concat(m))},i=T.autoFetchSvg?Object.keys(Xr):Object.keys(Yc),o=[".".concat(po,":not([").concat(rt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(rt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=kt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=na.begin("onTree"),u=s.reduce(function(d,m){try{var b=Mo(m);b&&d.push(b)}catch(O){mo||O.name==="MissingIcon"&&console.error(O)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(b){So(b,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(b){l(),m(b)})})}function Wc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Mo(e).then(function(n){n&&So([n],t)})}function Kc(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:gr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:gr(a||{})),e(r,A(A({},n),{},{mask:a}))}}var qc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ie:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,b=m===void 0?null:m,O=n.titleId,F=O===void 0?null:O,j=n.classes,S=j===void 0?[]:j,y=n.attributes,C=y===void 0?{}:y,N=n.styles,L=N===void 0?{}:N;if(!!t){var W=t.prefix,te=t.iconName,fe=t.icon;return Fn(A({type:"icon"},t),function(){return at("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(b?C["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(F||Yt()):(C["aria-hidden"]="true",C.focusable="false")),ta({icons:{main:vr(fe),mask:l?vr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:te,transform:A(A({},Ie),a),symbol:o,title:b,maskId:d,titleId:F,extra:{attributes:C,styles:L,classes:S}})})}},Vc={mixout:function(){return{icon:Kc(qc)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ti,n.nodeCallback=Wc,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return ti(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,b=r.extra;return new Promise(function(O,F){Promise.all([br(a,s),d.iconName?br(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(j){var S=Wr(j,2),y=S[0],C=S[1];O([n,ta({icons:{main:y,mask:C},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:b,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Sn(s);l.length>0&&(a.style=l);var u;return Gr(o)&&(u=je("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},Xc={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Fn({type:"layer"},function(){at("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.familyPrefix,"-layers")].concat(Tn(i)).join(" ")},children:o}]})}}}},Jc={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Fn({type:"counter",content:n},function(){return at("beforeDOMElementCreation",{content:n,params:r}),Ic({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(T.familyPrefix,"-layers-counter")].concat(Tn(s))}})})}}}},Gc={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ie:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,b=r.styles,O=b===void 0?{}:b;return Fn({type:"text",content:n},function(){return at("beforeDOMElementCreation",{content:n,params:r}),Xa({content:n,transform:A(A({},Ie),i),title:s,extra:{attributes:m,styles:O,classes:["".concat(T.familyPrefix,"-layers-text")].concat(Tn(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(fo){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Xa({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Zc=new RegExp('"',"ug"),ni=[1105920,1112319];function Qc(e){var t=e.replace(Zc,""),n=dc(t,0),r=n>=ni[0]&&n<=ni[1],a=t.length===2?t[0]===t[1]:!1;return{value:mr(a?t[0]:t),isSecondary:r||a}}function ri(e,t){var n="".concat($f).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=kt(e.children),o=i.filter(function(te){return te.getAttribute(dr)===t})[0],s=Ve.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Wf),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?pn[l[2].toLowerCase()]:Kf[u],O=Qc(m),F=O.value,j=O.isSecondary,S=l[0].startsWith("FontAwesome"),y=Qr(b,F),C=y;if(S){var N=yc(F);N.iconName&&N.prefix&&(y=N.iconName,b=N.prefix)}if(y&&!j&&(!o||o.getAttribute(qr)!==b||o.getAttribute(Vr)!==C)){e.setAttribute(n,C),o&&e.removeChild(o);var L=Bc(),W=L.extra;W.attributes[dr]=t,br(y,b).then(function(te){var fe=ta(A(A({},L),{},{icons:{main:te,mask:ea()},prefix:b,iconName:C,extra:W,watchable:!0})),_e=X.createElement("svg");t==="::before"?e.insertBefore(_e,e.firstChild):e.appendChild(_e),_e.outerHTML=fe.map(function(ie){return Wt(ie)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function eu(e){return Promise.all([ri(e,"::before"),ri(e,"::after")])}function tu(e){return e.parentNode!==document.head&&!~Uf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(dr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ai(e){if(!!De)return new Promise(function(t,n){var r=kt(e.querySelectorAll("*")).filter(tu).map(eu),a=na.begin("searchPseudoElements");No(),Promise.all(r).then(function(){a(),xr(),t()}).catch(function(){a(),xr(),n()})})}var nu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ai,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;T.searchPseudoElements&&ai(a)}}},ii=!1,ru={mixout:function(){return{dom:{unwatch:function(){No(),ii=!0}}}},hooks:function(){return{bootstrap:function(){Qa(pr("mutationObserverCallbacks",{}))},noAuto:function(){Dc()},watch:function(n){var r=n.observeMutationsRoot;ii?xr():Qa(pr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},oi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},au={mixout:function(){return{parse:{transform:function(n){return oi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=oi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},b={transform:"translate(".concat(o/2*-1," -256)")},O={outer:s,inner:m,path:b};return{tag:"g",attributes:A({},O.outer),children:[{tag:"g",attributes:A({},O.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),O.path)}]}]}}}},Vn={x:0,y:0,width:"100%",height:"100%"};function si(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function iu(e){return e.tag==="g"?e.children:[e]}var ou={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Mn(a.split(" ").map(function(o){return o.trim()})):ea();return i.prefix||(i.prefix=Xe()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,b=o.icon,O=ac({transform:l,containerWidth:m,iconWidth:u}),F={tag:"rect",attributes:A(A({},Vn),{},{fill:"white"})},j=d.children?{children:d.children.map(si)}:{},S={tag:"g",attributes:A({},O.inner),children:[si(A({tag:d.tag,attributes:A(A({},d.attributes),O.path)},j))]},y={tag:"g",attributes:A({},O.outer),children:[S]},C="mask-".concat(s||Yt()),N="clip-".concat(s||Yt()),L={tag:"mask",attributes:A(A({},Vn),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,y]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:iu(b)},L]};return r.push(W,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(C,")")},Vn)}),{children:r,attributes:a}}}},su={provides:function(t){var n=!1;Ve.matchMedia&&(n=Ve.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},lu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},fu=[sc,Vc,Xc,Jc,Gc,nu,ru,au,ou,su,lu];_c(fu,{mixoutsTo:me});me.noAuto;var Fo=me.config,cu=me.library;me.dom;var bn=me.parse;me.findIconDefinition;me.toHtml;var uu=me.icon;me.layer;var du=me.text;me.counter;function li(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?li(Object(n),!0).forEach(function(r){se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):li(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yn(e){return yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yn(e)}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function hu(e,t){if(e==null)return{};var n=mu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function wr(e){return pu(e)||gu(e)||vu(e)||bu()}function pu(e){if(Array.isArray(e))return _r(e)}function gu(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function vu(e,t){if(!!e){if(typeof e=="string")return _r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _r(e,t)}}function _r(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function bu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yu=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},zo={exports:{}};(function(e){(function(t){var n=function(y,C,N){if(!u(C)||m(C)||b(C)||O(C)||l(C))return C;var L,W=0,te=0;if(d(C))for(L=[],te=C.length;W<te;W++)L.push(n(y,C[W],N));else{L={};for(var fe in C)Object.prototype.hasOwnProperty.call(C,fe)&&(L[y(fe,N)]=n(y,C[fe],N))}return L},r=function(y,C){C=C||{};var N=C.separator||"_",L=C.split||/(?=[A-Z])/;return y.split(L).join(N)},a=function(y){return F(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(C,N){return N?N.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var C=a(y);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(y,C){return r(y,C).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},b=function(y){return s.call(y)=="[object RegExp]"},O=function(y){return s.call(y)=="[object Boolean]"},F=function(y){return y=y-0,y===y},j=function(y,C){var N=C&&"process"in C?C.process:C;return typeof N!="function"?y:function(L,W){return N(L,y,W)}},S={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,C){return n(j(a,C),y)},decamelizeKeys:function(y,C){return n(j(o,C),y,C)},pascalizeKeys:function(y,C){return n(j(i,C),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:t.humps=S})(yu)})(zo);var xu=zo.exports,wu=["class","style"];function _u(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=xu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function ku(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function aa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return aa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=ku(d);break;case"style":l.style=_u(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=hu(n,wu);return ro(e.tag,ve(ve(ve({},t),{},{class:a.class,style:ve(ve({},a.style),o)},a.attrs),s),r)}var Ro=!1;try{Ro=!0}catch{}function Au(){if(!Ro&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Lt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?se({},e,t):{}}function Ou(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},se(t,"fa-".concat(e.size),e.size!==null),se(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),se(t,"fa-pull-".concat(e.pull),e.pull!==null),se(t,"fa-swap-opacity",e.swapOpacity),se(t,"fa-bounce",e.bounce),se(t,"fa-shake",e.shake),se(t,"fa-beat",e.beat),se(t,"fa-fade",e.fade),se(t,"fa-beat-fade",e.beatFade),se(t,"fa-flash",e.flash),se(t,"fa-spin-pulse",e.spinPulse),se(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function fi(e){if(e&&yn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(bn.icon)return bn.icon(e);if(e===null)return null;if(yn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Cu=$r({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=he(function(){return fi(t.icon)}),i=he(function(){return Lt("classes",Ou(t))}),o=he(function(){return Lt("transform",typeof t.transform=="string"?bn.transform(t.transform):t.transform)}),s=he(function(){return Lt("mask",fi(t.mask))}),l=he(function(){return uu(a.value,ve(ve(ve(ve({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});tn(l,function(d){if(!d)return Au("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=he(function(){return l.value?aa(l.value.abstract[0],{},r):null});return function(){return u.value}}});$r({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Fo.familyPrefix,i=he(function(){return["".concat(a,"-layers")].concat(wr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return ro("div",{class:i.value},r.default?r.default():[])}}});$r({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Fo.familyPrefix,i=he(function(){return Lt("classes",[].concat(wr(t.counter?["".concat(a,"-layers-counter")]:[]),wr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=he(function(){return Lt("transform",typeof t.transform=="string"?bn.transform(t.transform):t.transform)}),s=he(function(){var u=du(t.value.toString(),ve(ve({},o.value),i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=he(function(){return aa(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Eu={prefix:"fas",iconName:"hand",icon:[512,512,[129306,9995,"hand-paper"],"f256","M480 128v208c0 97.05-78.95 176-176 176h-37.72c-53.42 0-103.7-20.8-141.4-58.58l-113.1-113.1C3.906 332.5 0 322.2 0 312C0 290.7 17.15 272 40 272c10.23 0 20.47 3.906 28.28 11.72L128 343.4V64c0-17.67 14.33-32 32-32s32 14.33 32 32l.0729 176C192.1 248.8 199.2 256 208 256s16.07-7.164 16.07-16L224 32c0-17.67 14.33-32 32-32s32 14.33 32 32l.0484 208c0 8.836 7.111 16 15.95 16S320 248.8 320 240L320 64c0-17.67 14.33-32 32-32s32 14.33 32 32l.0729 176c0 8.836 7.091 16 15.93 16S416 248.8 416 240V128c0-17.67 14.33-32 32-32S480 110.3 480 128z"]},Pu=Eu,Iu={prefix:"fas",iconName:"hand-back-fist",icon:[448,512,["hand-rock"],"f255","M448 144v120.4C448 314.2 422.6 358.1 384 384v128H128v-128l-53.19-38.67C48 325.8 32 294.3 32 261.2V192c0-14.58 6.625-28.38 17.1-37.48L80 130.5V176C80 184.8 87.16 192 96 192s16-7.164 16-16v-128C112 21.48 133.5 0 160 0c25.38 0 45.96 19.77 47.67 44.73C216.2 36.9 227.5 32 240 32C266.5 32 288 53.48 288 80v5.531C296.6 72.57 311.3 64 328 64c23.47 0 42.94 16.87 47.11 39.14C382.4 98.7 390.9 96 400 96C426.5 96 448 117.5 448 144z"]},Tu={prefix:"fas",iconName:"hand-lizard",icon:[512,512,[],"f258","M512 329.1V432c0 8.836-7.164 16-16 16H368c-8.836 0-16-7.164-16-16V416l-85.33-64H95.1c-16.47 0-31.44-13.44-31.96-29.9C62.87 285.8 91.96 256 127.1 256h104.9c13.77 0 26-8.811 30.36-21.88l10.67-32C280.9 181.4 265.4 160 243.6 160H63.1C27.95 160-1.129 130.2 .0352 93.9C.5625 77.44 15.53 64 31.1 64h271.2c26.26 0 50.84 12.88 65.79 34.47l128.8 185.1C507 297.8 512 313.7 512 329.1z"]},Su={prefix:"fas",iconName:"hand-scissors",icon:[512,512,[],"f257","M512 192v111.1C512 383.4 447.4 448 368 448H288c-26.52 0-48-21.48-48-47.99c0-9.152 2.697-17.61 7.139-24.89C224.9 370.1 208 351.5 208 328c0-16.72 8.561-31.4 21.52-39.1H40c-22.09 0-40-17.9-40-39.99s17.91-39.1 40-39.1h229.5L60 142.2C42.93 136.8 31.99 121.1 31.99 104c0-3.973 .5967-8.014 1.851-12.01c5.35-17.07 21.08-28.04 38.06-28.04c4 0 8.071 .6085 12.09 1.889l279.2 87.22C364.8 153.6 366.4 153.8 368 153.8c6.812 0 13.12-4.375 15.27-11.23c.4978-1.588 .7346-3.195 .7346-4.777c0-6.807-4.388-13.12-11.23-15.25l-72.54-22.67l14.29-17.85C323.6 70.67 337.4 64.04 352 64.04h48c10.39 0 20.48 3.359 28.8 9.592l38.41 28.79c25.2 18.91 40.53 47.97 43.55 79.04C511.5 184.9 512 188.4 512 192z"]},Nu={prefix:"fas",iconName:"hand-spock",icon:[576,512,[128406],"f259","M543.6 128.6c0-8.999-6.115-32.58-31.68-32.58c-14.1 0-27.02 9.324-30.92 23.56l-34.36 125.1c-1.682 6.16-7.275 10.43-13.66 10.43c-7.981 0-14.16-6.518-14.16-14.13c0-.9844 .1034-1.987 .3197-2.996l35.71-166.6c.5233-2.442 .7779-4.911 .7779-7.362c0-13.89-9.695-32.86-31.7-32.86c-14.79 0-28.12 10.26-31.34 25.29l-37.77 176.2c-2.807 13.1-14.38 22.46-27.77 22.46c-13.04 0-24.4-8.871-27.56-21.52l-52.11-208.5C243.6 11.2 230.5-.0013 215.6-.0013c-26.71 0-31.78 25.71-31.78 31.98c0 2.569 .3112 5.18 .9617 7.786l50.55 202.2c.2326 .9301 .3431 1.856 .3431 2.764c0 6.051-4.911 11.27-11.3 11.27c-4.896 0-9.234-3.154-10.74-7.812L166.9 103.9C162.4 89.1 149.5 80.02 135.5 80.02c-15.68 0-31.63 12.83-31.63 31.97c0 3.273 .5059 6.602 1.57 9.884l69.93 215.7c.2903 .8949 .4239 1.766 .4239 2.598c0 4.521-3.94 7.915-8.119 7.915c-1.928 0-3.906-.7219-5.573-2.388L101.7 285.3c-8.336-8.336-19.63-12.87-30.81-12.87c-23.56 0-39.07 19.69-39.07 39.55c0 10.23 3.906 20.47 11.72 28.28l122.5 122.5C197.6 494.3 240.3 512 284.9 512h50.98c23.5 0 108.4-14.57 132.5-103l73.96-271.2C543.2 134.8 543.6 131.7 543.6 128.6z"]};cu.add(Iu,Nu,Su,Pu,Tu);df(If).component("font-awesome-icon",Cu).mount("#app");
