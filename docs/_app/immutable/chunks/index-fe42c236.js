function q(){}function D(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function N(){return Object.create(null)}function p(t){t.forEach(B)}function F(t){return typeof t=="function"}function rt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function H(t){return Object.keys(t).length===0}function ct(t,n,e,i){if(t){const c=L(t,n,e,i);return t[0](c)}}function L(t,n,e,i){return t[1]&&i?D(e.ctx.slice(),t[1](i(n))):e.ctx}function lt(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const a=[],l=Math.max(n.dirty.length,c.length);for(let o=0;o<l;o+=1)a[o]=n.dirty[o]|c[o];return a}return n.dirty|c}return n.dirty}function ot(t,n,e,i,c,a){if(c){const l=L(n,e,i,a);t.p(l,c)}}function ut(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let $=!1;function I(){$=!0}function G(){$=!1}function J(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<n.length;u++){const s=n[u];s.claim_order!==void 0&&r.push(s)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const u=n[r].claim_order,s=(c>0&&n[e[c]].claim_order<=u?c+1:J(1,c,y=>n[e[y]].claim_order,u))-1;i[r]=e[s]+1;const f=s+1;e[f]=r,c=Math.max(f,c)}const a=[],l=[];let o=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(a.push(n[r-1]);o>=r;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);a.reverse(),l.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<l.length;r++){for(;u<a.length&&l[r].claim_order>=a[u].claim_order;)u++;const s=u<a.length?a[u]:null;t.insertBefore(l[r],s)}}function W(t,n){if($){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function at(t,n,e){$&&!e?W(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Q(t){t.parentNode.removeChild(t)}function R(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function ft(){return A(" ")}function st(){return A("")}function dt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function _t(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function U(t){return Array.from(t.childNodes)}function V(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,n,e,i,c=!1){V(t);const a=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const r=e(o);return r===void 0?t.splice(l,1):t[l]=r,c||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const r=e(o);return r===void 0?t.splice(l,1):t[l]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function X(t,n,e,i){return T(t,c=>c.nodeName===n,c=>{const a=[];for(let l=0;l<c.attributes.length;l++){const o=c.attributes[l];e[o.name]||a.push(o.name)}a.forEach(l=>c.removeAttribute(l))},()=>i(n))}function ht(t,n,e){return X(t,n,e,R)}function Y(t,n){return T(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>A(n),!0)}function mt(t){return Y(t," ")}function pt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function yt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function gt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let m;function h(t){m=t}function j(){if(!m)throw new Error("Function called outside component initialization");return m}function xt(t){j().$$.on_mount.push(t)}function bt(t){j().$$.after_update.push(t)}function $t(t,n){return j().$$.context.set(t,n),n}const _=[],C=[],x=[],M=[],O=Promise.resolve();let E=!1;function P(){E||(E=!0,O.then(z))}function wt(){return P(),O}function k(t){x.push(t)}const w=new Set;let g=0;function z(){const t=m;do{for(;g<_.length;){const n=_[g];g++,h(n),Z(n.$$)}for(h(null),_.length=0,g=0;C.length;)C.pop()();for(let n=0;n<x.length;n+=1){const e=x[n];w.has(e)||(w.add(e),e())}x.length=0}while(_.length);for(;M.length;)M.pop()();E=!1,w.clear(),h(t)}function Z(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const b=new Set;let d;function Et(){d={r:0,c:[],p:d}}function kt(){d.r||p(d.c),d=d.p}function tt(t,n){t&&t.i&&(b.delete(t),t.i(n))}function At(t,n,e,i){if(t&&t.o){if(b.has(t))return;b.add(t),d.c.push(()=>{b.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function jt(t,n){const e={},i={},c={$$scope:1};let a=t.length;for(;a--;){const l=t[a],o=n[a];if(o){for(const r in l)r in o||(i[r]=1);for(const r in o)c[r]||(e[r]=o[r],c[r]=1);t[a]=o}else for(const r in l)c[r]=1}for(const l in i)l in e||(e[l]=void 0);return e}function vt(t){return typeof t=="object"&&t!==null?t:{}}function St(t){t&&t.c()}function Nt(t,n){t&&t.l(n)}function nt(t,n,e,i){const{fragment:c,on_mount:a,on_destroy:l,after_update:o}=t.$$;c&&c.m(n,e),i||k(()=>{const r=a.map(B).filter(F);l?l.push(...r):p(r),t.$$.on_mount=[]}),o.forEach(k)}function et(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function it(t,n){t.$$.dirty[0]===-1&&(_.push(t),P(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ct(t,n,e,i,c,a,l,o=[-1]){const r=m;h(t);const u=t.$$={fragment:null,ctx:null,props:a,update:q,not_equal:c,bound:N(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:N(),dirty:o,skip_bound:!1,root:n.target||r.$$.root};l&&l(u.root);let s=!1;if(u.ctx=e?e(t,n.props||{},(f,y,...v)=>{const S=v.length?v[0]:y;return u.ctx&&c(u.ctx[f],u.ctx[f]=S)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](S),s&&it(t,f)),y}):[],u.update(),s=!0,p(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){I();const f=U(n.target);u.fragment&&u.fragment.l(f),f.forEach(Q)}else u.fragment&&u.fragment.c();n.intro&&tt(t.$$.fragment),nt(t,n.target,n.anchor,n.customElement),G(),z()}h(r)}class Mt{$destroy(){et(this,1),this.$destroy=q}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!H(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{jt as A,vt as B,et as C,D,wt as E,ct as F,gt as G,W as H,ot as I,ut as J,lt as K,dt as L,Mt as S,U as a,_t as b,ht as c,Q as d,R as e,yt as f,at as g,Y as h,Ct as i,pt as j,ft as k,st as l,mt as m,q as n,Et as o,At as p,kt as q,tt as r,rt as s,A as t,$t as u,bt as v,xt as w,St as x,Nt as y,nt as z};