var Ge=Array.isArray,$r=Array.prototype.indexOf,Vt=Array.from,st=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,bn=Object.getOwnPropertyDescriptors,gr=Object.prototype,mr=Array.prototype,Ft=Object.getPrototypeOf,tn=Object.isExtensible;function qe(e){return typeof e=="function"}const se=()=>{};function yr(e){return e()}function We(e){for(var t=0;t<e.length;t++)e[t]()}function br(){var e,t,n=new Promise((r,a)=>{e=r,t=a});return{promise:n,resolve:e,reject:t}}function wr(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const H=2,qt=4,dt=8,Oe=16,oe=32,we=64,wn=128,U=256,lt=512,R=1024,Y=2048,ue=4096,W=8192,Ne=16384,Ht=32768,Ie=65536,nn=1<<17,Nn=1<<18,Ze=1<<19,En=1<<20,Ct=1<<21,jt=1<<22,$e=1<<23,ee=Symbol("$state"),Mn=Symbol("legacy props"),Nr=Symbol(""),Ut=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Er(){throw new Error("https://svelte.dev/e/await_outside_boundary")}function Bt(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Mr(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Pr(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Ar(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Sr(e){throw new Error("https://svelte.dev/e/effect_orphan")}function xr(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function kr(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Tr(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Cr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function zr(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}const vt=1,ht=2,Pn=4,Lr=8,Or=16,Ir=1,Rr=2,An=4,Dr=8,Vr=16,Fr=1,qr=2,O=Symbol(),Hr="http://www.w3.org/1999/xhtml",jr="http://www.w3.org/2000/svg",Ur="@attach";function Br(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}let Wr=!1;function Sn(e){return e===this.v}function Wt(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Yr(e,t){return e!==t}function xn(e){return!Wt(e,this.v)}let Re=!1;function Kr(){Re=!0}let L=null;function ot(e){L=e}function kn(e,t=!1,n){L={p:L,c:null,e:null,s:e,x:null,l:Re&&!t?{s:null,u:null,$:[]}:null}}function Tn(e){var t=L,n=t.e;if(n!==null){t.e=null;for(var r of n)Yn(r)}return e!==void 0&&(t.x=e),L=t.p,e??{}}function De(){return!Re||L!==null&&L.l===null}const Gr=new WeakMap;function Zr(e){var t=A;if(t===null)return x.f|=$e,e;if((t.f&Ht)===0){if((t.f&wn)===0)throw!t.parent&&e instanceof Error&&Cn(e),e;t.b.error(e)}else Yt(e,t)}function Yt(e,t){for(;t!==null;){if((t.f&wn)!==0)try{t.b.error(e);return}catch(n){e=n}t=t.parent}throw e instanceof Error&&Cn(e),e}function Cn(e){const t=Gr.get(e);t&&(st(e,"message",{value:t.message}),st(e,"stack",{value:t.stack}))}let Ye=[],zt=[];function zn(){var e=Ye;Ye=[],We(e)}function Jr(){var e=zt;zt=[],We(e)}function _t(e){Ye.length===0&&queueMicrotask(zn),Ye.push(e)}function Xr(){Ye.length>0&&zn(),zt.length>0&&Jr()}function Qr(){for(var e=A.b;e!==null&&!e.has_pending_snippet();)e=e.parent;return e===null&&Er(),e}function Je(e){var t=H|Y,n=x!==null&&(x.f&H)!==0?x:null;return A===null||n!==null&&(n.f&U)!==0?t|=U:A.f|=Ze,{ctx:L,deps:null,effects:null,equals:Sn,f:t,fn:e,reactions:null,rv:0,v:O,wv:0,parent:n??A,ac:null}}function ea(e,t){let n=A;n===null&&Mr();var r=n.b,a=void 0,s=ze(O),i=null,l=!x;return ga(()=>{try{var o=e();i&&Promise.resolve(o).catch(()=>{})}catch(h){o=Promise.reject(h)}var u=()=>o;a=i?.then(u,u)??Promise.resolve(o),i=a;var f=C,d=r.pending;l&&(r.update_pending_count(1),d||f.increment());const v=(h,c=void 0)=>{i=null,d||f.activate(),c?c!==Ut&&(s.f|=$e,Le(s,c)):((s.f&$e)!==0&&(s.f^=$e),Le(s,h)),l&&(r.update_pending_count(-1),d||f.decrement()),Rn()};if(a.then(v,h=>v(null,h||"unknown")),f)return()=>{queueMicrotask(()=>f.neuter())}}),new Promise(o=>{function u(f){function d(){f===a?o(s):u(a)}f.then(d,d)}u(a)})}function ta(e){const t=Je(e);return er(t),t}function Kt(e){const t=Je(e);return t.equals=xn,t}function Ln(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)F(t[n])}}function na(e){for(var t=e.parent;t!==null;){if((t.f&H)===0)return t;t=t.parent}return null}function Gt(e){var t,n=A;ne(na(e));try{Ln(e),t=ar(e)}finally{ne(n)}return t}function On(e){var t=Gt(e);if(e.equals(t)||(e.v=t,e.wv=nr()),!Ee){var n=(ve||(e.f&U)!==0)&&e.deps!==null?ue:R;V(e,n)}}function In(e,t,n){const r=De()?Je:Kt;if(t.length===0){n(e.map(r));return}var a=C,s=A,i=ra(),l=Qr();Promise.all(t.map(o=>ea(o))).then(o=>{a?.activate(),i();try{n([...e.map(r),...o])}catch(u){(s.f&Ne)===0&&Yt(u,s)}a?.deactivate(),Rn()}).catch(o=>{l.error(o)})}function ra(){var e=A,t=x,n=L,r=C;return function(){ne(e),te(t),ot(n),r?.activate()}}function Rn(){ne(null),te(null),ot(null)}const Mt=new Set;let C=null,at=null,rn=new Set,ut=[];function Dn(){const e=ut.shift();ut.length>0&&queueMicrotask(Dn),e()}let ye=[],pt=null,Lt=!1,it=!1;class Te{current=new Map;#o=new Map;#a=new Set;#e=0;#u=null;#f=!1;#n=[];#i=[];#r=[];#t=[];#s=[];#c=[];#d=[];skipped_effects=new Set;process(t){ye=[],at=null;for(const a of t)this.#h(a);if(this.#n.length===0&&this.#e===0){this.#v();var n=this.#r,r=this.#t;this.#r=[],this.#t=[],this.#s=[],at=C,C=null,an(n),an(r),C===null?C=this:Mt.delete(this),this.#u?.resolve()}else this.#l(this.#r),this.#l(this.#t),this.#l(this.#s);for(const a of this.#n)me(a);for(const a of this.#i)me(a);this.#n=[],this.#i=[]}#h(t){t.f^=R;for(var n=t.first;n!==null;){var r=n.f,a=(r&(oe|we))!==0,s=a&&(r&R)!==0,i=s||(r&W)!==0||this.skipped_effects.has(n);if(!i&&n.fn!==null){if(a)n.f^=R;else if((r&qt)!==0)this.#t.push(n);else if((r&R)===0)if((r&jt)!==0){var l=n.b?.pending?this.#i:this.#n;l.push(n)}else et(n)&&((n.f&Oe)!==0&&this.#s.push(n),me(n));var o=n.first;if(o!==null){n=o;continue}}var u=n.parent;for(n=n.next;n===null&&u!==null;)n=u.next,u=u.parent}}#l(t){for(const n of t)((n.f&Y)!==0?this.#c:this.#d).push(n),V(n,R);t.length=0}capture(t,n){this.#o.has(t)||this.#o.set(t,n),this.current.set(t,t.v)}activate(){C=this}deactivate(){C=null,at=null;for(const t of rn)if(rn.delete(t),t(),C!==null)break}neuter(){this.#f=!0}flush(){ye.length>0?Vn():this.#v(),C===this&&(this.#e===0&&Mt.delete(this),this.deactivate())}#v(){if(!this.#f)for(const t of this.#a)t();this.#a.clear()}increment(){this.#e+=1}decrement(){if(this.#e-=1,this.#e===0){for(const t of this.#c)V(t,Y),Ce(t);for(const t of this.#d)V(t,ue),Ce(t);this.#r=[],this.#t=[],this.flush()}else this.deactivate()}add_callback(t){this.#a.add(t)}settled(){return(this.#u??=br()).promise}static ensure(){if(C===null){const t=C=new Te;Mt.add(C),it||Te.enqueue(()=>{C===t&&t.flush()})}return C}static enqueue(t){ut.length===0&&queueMicrotask(Dn),ut.unshift(t)}}function aa(e){var t=it;it=!0;try{for(var n;;){if(Xr(),ye.length===0&&(C?.flush(),ye.length===0))return pt=null,n;Vn()}}finally{it=t}}function Vn(){var e=ke;Lt=!0;try{var t=0;for(fn(!0);ye.length>0;){var n=Te.ensure();if(t++>1e3){var r,a;ia()}n.process(ye),he.clear()}}finally{Lt=!1,fn(e),pt=null}}function ia(){try{xr()}catch(e){Yt(e,pt)}}let pe=null;function an(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(Ne|W))===0&&et(r)&&(pe=[],me(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?Jn(r):r.fn=null),pe?.length>0)){he.clear();for(const a of pe)me(a);pe=[]}}pe=null}}function Ce(e){for(var t=pt=e;t.parent!==null;){t=t.parent;var n=t.f;if(Lt&&t===A&&(n&Oe)!==0)return;if((n&(we|oe))!==0){if((n&R)===0)return;t.f^=R}}ye.push(t)}const he=new Map;function ze(e,t){var n={f:0,v:e,reactions:null,equals:Sn,rv:0,wv:0};return n}function de(e,t){const n=ze(e);return er(n),n}function Fn(e,t=!1,n=!0){const r=ze(e);return t||(r.equals=xn),Re&&n&&L!==null&&L.l!==null&&(L.l.s??=[]).push(r),r}function J(e,t,n=!1){x!==null&&(!X||(x.f&nn)!==0)&&De()&&(x.f&(H|Oe|jt|nn))!==0&&!le?.includes(e)&&zr();let r=n?xe(t):t;return Le(e,r)}function Le(e,t){if(!e.equals(t)){var n=e.v;Ee?he.set(e,t):he.set(e,n),e.v=t;var r=Te.ensure();r.capture(e,n),(e.f&H)!==0&&((e.f&Y)!==0&&Gt(e),V(e,(e.f&U)===0?R:ue)),e.wv=nr(),qn(e,Y),De()&&A!==null&&(A.f&R)!==0&&(A.f&(oe|we))===0&&(j===null?wa([e]):j.push(e))}return t}function sn(e,t=1){var n=I(e),r=t===1?n++:n--;return J(e,n),r}function Pt(e){J(e,e.v+1)}function qn(e,t){var n=e.reactions;if(n!==null)for(var r=De(),a=n.length,s=0;s<a;s++){var i=n[s],l=i.f;if(!(!r&&i===A)){var o=(l&Y)===0;o&&V(i,t),(l&H)!==0?qn(i,ue):o&&((l&Oe)!==0&&pe!==null&&pe.push(i),Ce(i))}}}function xe(e){if(typeof e!="object"||e===null||ee in e)return e;const t=Ft(e);if(t!==gr&&t!==mr)return e;var n=new Map,r=Ge(e),a=de(0),s=ge,i=l=>{if(ge===s)return l();var o=x,u=ge;te(null),dn(s);var f=l();return te(o),dn(u),f};return r&&n.set("length",de(e.length)),new Proxy(e,{defineProperty(l,o,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Tr();var f=n.get(o);return f===void 0?f=i(()=>{var d=de(u.value);return n.set(o,d),d}):J(f,u.value,!0),!0},deleteProperty(l,o){var u=n.get(o);if(u===void 0){if(o in l){const f=i(()=>de(O));n.set(o,f),Pt(a)}}else J(u,O),Pt(a);return!0},get(l,o,u){if(o===ee)return e;var f=n.get(o),d=o in l;if(f===void 0&&(!d||ie(l,o)?.writable)&&(f=i(()=>{var h=xe(d?l[o]:O),c=de(h);return c}),n.set(o,f)),f!==void 0){var v=I(f);return v===O?void 0:v}return Reflect.get(l,o,u)},getOwnPropertyDescriptor(l,o){var u=Reflect.getOwnPropertyDescriptor(l,o);if(u&&"value"in u){var f=n.get(o);f&&(u.value=I(f))}else if(u===void 0){var d=n.get(o),v=d?.v;if(d!==void 0&&v!==O)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return u},has(l,o){if(o===ee)return!0;var u=n.get(o),f=u!==void 0&&u.v!==O||Reflect.has(l,o);if(u!==void 0||A!==null&&(!f||ie(l,o)?.writable)){u===void 0&&(u=i(()=>{var v=f?xe(l[o]):O,h=de(v);return h}),n.set(o,u));var d=I(u);if(d===O)return!1}return f},set(l,o,u,f){var d=n.get(o),v=o in l;if(r&&o==="length")for(var h=u;h<d.v;h+=1){var c=n.get(h+"");c!==void 0?J(c,O):h in l&&(c=i(()=>de(O)),n.set(h+"",c))}if(d===void 0)(!v||ie(l,o)?.writable)&&(d=i(()=>de(void 0)),J(d,xe(u)),n.set(o,d));else{v=d.v!==O;var _=i(()=>xe(u));J(d,_)}var $=Reflect.getOwnPropertyDescriptor(l,o);if($?.set&&$.set.call(f,u),!v){if(r&&typeof o=="string"){var S=n.get("length"),g=Number(o);Number.isInteger(g)&&g>=S.v&&J(S,g+1)}Pt(a)}return!0},ownKeys(l){I(a);var o=Reflect.ownKeys(l).filter(d=>{var v=n.get(d);return v===void 0||v.v!==O});for(var[u,f]of n)f.v!==O&&!(u in l)&&o.push(u);return o},setPrototypeOf(){Cr()}})}function ln(e){try{if(e!==null&&typeof e=="object"&&ee in e)return e[ee]}catch{}return e}function sa(e,t){return Object.is(ln(e),ln(t))}var on,la,Hn,jn,Un;function oa(){if(on===void 0){on=window,la=document,Hn=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;jn=ie(t,"firstChild").get,Un=ie(t,"nextSibling").get,tn(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),tn(n)&&(n.__t=void 0)}}function re(e=""){return document.createTextNode(e)}function Q(e){return jn.call(e)}function $t(e){return Un.call(e)}function ua(e,t){return Q(e)}function b(e,t){{var n=Q(e);return n instanceof Comment&&n.data===""?$t(n):n}}function fa(e,t=1,n=!1){let r=e;for(;t--;)r=$t(r);return r}function ca(e){e.textContent=""}function gt(){return!1}function da(e,t){if(t){const n=document.body;e.autofocus=!0,_t(()=>{document.activeElement===n&&e.focus()})}}let un=!1;function va(){un||(un=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function ha(e,t,n,r=!0){r&&n();for(var a of t)e.addEventListener(a,n);Qe(()=>{for(var s of t)e.removeEventListener(s,n)})}function Xe(e){var t=x,n=A;te(null),ne(null);try{return e()}finally{te(t),ne(n)}}function Bn(e,t,n,r=n){e.addEventListener(t,()=>Xe(n));const a=e.__on_r;a?e.__on_r=()=>{a(),r(!0)}:e.__on_r=()=>r(!0),va()}function Wn(e){A===null&&x===null&&Sr(),x!==null&&(x.f&U)!==0&&A===null&&Ar(),Ee&&Pr()}function _a(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function ae(e,t,n,r=!0){var a=A;a!==null&&(a.f&W)!==0&&(e|=W);var s={ctx:L,deps:null,nodes_start:null,nodes_end:null,f:e|Y,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(n)try{me(s),s.f|=Ht}catch(o){throw F(s),o}else t!==null&&Ce(s);if(r){var i=s;if(n&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&Ze)===0&&(i=i.first),i!==null&&(i.parent=a,a!==null&&_a(i,a),x!==null&&(x.f&H)!==0&&(e&we)===0)){var l=x;(l.effects??=[]).push(i)}}return s}function Qe(e){const t=ae(dt,null,!1);return V(t,R),t.teardown=e,t}function Ot(e){Wn();var t=A.f,n=!x&&(t&oe)!==0&&(t&Ht)===0;if(n){var r=L;(r.e??=[]).push(e)}else return Yn(e)}function Yn(e){return ae(qt|En,e,!1)}function pa(e){return Wn(),ae(dt|En,e,!0)}function $a(e){Te.ensure();const t=ae(we|Ze,e,!0);return(n={})=>new Promise(r=>{n.outro?Ve(t,()=>{F(t),r(void 0)}):(F(t),r(void 0))})}function mt(e){return ae(qt,e,!1)}function di(e,t){var n=L,r={effect:null,ran:!1,deps:e};n.l.$.push(r),r.effect=yt(()=>{e(),!r.ran&&(r.ran=!0,G(t))})}function vi(){var e=L;yt(()=>{for(var t of e.l.$){t.deps();var n=t.effect;(n.f&R)!==0&&V(n,ue),et(n)&&me(n),t.ran=!1}})}function ga(e){return ae(jt|Ze,e,!0)}function yt(e,t=0){return ae(dt|t,e,!0)}function ma(e,t=[],n=[]){In(t,n,r=>{ae(dt,()=>e(...r.map(I)),!0)})}function fe(e,t=0){var n=ae(Oe|t,e,!0);return n}function K(e,t=!0){return ae(oe|Ze,e,!0,t)}function Kn(e){var t=e.teardown;if(t!==null){const n=Ee,r=x;cn(!0),te(null);try{t.call(null)}finally{cn(n),te(r)}}}function Gn(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const a=n.ac;a!==null&&Xe(()=>{a.abort(Ut)});var r=n.next;(n.f&we)!==0?n.parent=null:F(n,t),n=r}}function ya(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&oe)===0&&F(t),t=n}}function F(e,t=!0){var n=!1;(t||(e.f&Nn)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Zn(e.nodes_start,e.nodes_end),n=!0),Gn(e,t&&!n),ft(e,0),V(e,Ne);var r=e.transitions;if(r!==null)for(const s of r)s.stop();Kn(e);var a=e.parent;a!==null&&a.first!==null&&Jn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Zn(e,t){for(;e!==null;){var n=e===t?null:$t(e);e.remove(),e=n}}function Jn(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Ve(e,t){var n=[];Zt(e,n,!0),Xn(n,()=>{F(e),t&&t()})}function Xn(e,t){var n=e.length;if(n>0){var r=()=>--n||t();for(var a of e)a.out(r)}else t()}function Zt(e,t,n){if((e.f&W)===0){if(e.f^=W,e.transitions!==null)for(const i of e.transitions)(i.is_global||n)&&t.push(i);for(var r=e.first;r!==null;){var a=r.next,s=(r.f&Ie)!==0||(r.f&oe)!==0;Zt(r,t,s?n:!1),r=a}}}function bt(e){Qn(e,!0)}function Qn(e,t){if((e.f&W)!==0){e.f^=W,(e.f&R)===0&&(V(e,Y),Ce(e));for(var n=e.first;n!==null;){var r=n.next,a=(n.f&Ie)!==0||(n.f&oe)!==0;Qn(n,a?t:!1),n=r}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||t)&&s.in()}}let Ae=null;function ba(e){var t=Ae;try{if(Ae=new Set,G(e),t!==null)for(var n of Ae)t.add(n);return Ae}finally{Ae=t}}function hi(e){for(var t of ba(e))Le(t,t.v)}let ke=!1;function fn(e){ke=e}let Ee=!1;function cn(e){Ee=e}let x=null,X=!1;function te(e){x=e}let A=null;function ne(e){A=e}let le=null;function er(e){x!==null&&(le===null?le=[e]:le.push(e))}let D=null,q=0,j=null;function wa(e){j=e}let tr=1,Ke=0,ge=Ke;function dn(e){ge=e}let ve=!1;function nr(){return++tr}function et(e){var t=e.f;if((t&Y)!==0)return!0;if((t&ue)!==0){var n=e.deps,r=(t&U)!==0;if(n!==null){var a,s,i=(t&lt)!==0,l=r&&A!==null&&!ve,o=n.length;if((i||l)&&(A===null||(A.f&Ne)===0)){var u=e,f=u.parent;for(a=0;a<o;a++)s=n[a],(i||!s?.reactions?.includes(u))&&(s.reactions??=[]).push(u);i&&(u.f^=lt),l&&f!==null&&(f.f&U)===0&&(u.f^=U)}for(a=0;a<o;a++)if(s=n[a],et(s)&&On(s),s.wv>e.wv)return!0}(!r||A!==null&&!ve)&&V(e,R)}return!1}function rr(e,t,n=!0){var r=e.reactions;if(r!==null&&!le?.includes(e))for(var a=0;a<r.length;a++){var s=r[a];(s.f&H)!==0?rr(s,t,!1):t===s&&(n?V(s,Y):(s.f&R)!==0&&V(s,ue),Ce(s))}}function ar(e){var t=D,n=q,r=j,a=x,s=ve,i=le,l=L,o=X,u=ge,f=e.f;D=null,q=0,j=null,ve=(f&U)!==0&&(X||!ke||x===null),x=(f&(oe|we))===0?e:null,le=null,ot(e.ctx),X=!1,ge=++Ke,e.ac!==null&&(Xe(()=>{e.ac.abort(Ut)}),e.ac=null);try{e.f|=Ct;var d=e.fn,v=d(),h=e.deps;if(D!==null){var c;if(ft(e,q),h!==null&&q>0)for(h.length=q+D.length,c=0;c<D.length;c++)h[q+c]=D[c];else e.deps=h=D;if(!ve||(f&H)!==0&&e.reactions!==null)for(c=q;c<h.length;c++)(h[c].reactions??=[]).push(e)}else h!==null&&q<h.length&&(ft(e,q),h.length=q);if(De()&&j!==null&&!X&&h!==null&&(e.f&(H|ue|Y))===0)for(c=0;c<j.length;c++)rr(j[c],e);return a!==null&&a!==e&&(Ke++,j!==null&&(r===null?r=j:r.push(...j))),(e.f&$e)!==0&&(e.f^=$e),v}catch(_){return Zr(_)}finally{e.f^=Ct,D=t,q=n,j=r,x=a,ve=s,le=i,ot(l),X=o,ge=u}}function Na(e,t){let n=t.reactions;if(n!==null){var r=$r.call(n,e);if(r!==-1){var a=n.length-1;a===0?n=t.reactions=null:(n[r]=n[a],n.pop())}}n===null&&(t.f&H)!==0&&(D===null||!D.includes(t))&&(V(t,ue),(t.f&(U|lt))===0&&(t.f^=lt),Ln(t),ft(t,0))}function ft(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Na(e,n[r])}function me(e){var t=e.f;if((t&Ne)===0){V(e,R);var n=A,r=ke;A=e,ke=!0;try{(t&Oe)!==0?ya(e):Gn(e),Kn(e);var a=ar(e);e.teardown=typeof a=="function"?a:null,e.wv=tr;var s}finally{ke=r,A=n}}}async function Ea(){await Promise.resolve(),aa()}function I(e){var t=e.f,n=(t&H)!==0;if(Ae?.add(e),x!==null&&!X){var r=A!==null&&(A.f&Ne)!==0;if(!r&&!le?.includes(e)){var a=x.deps;if((x.f&Ct)!==0)e.rv<Ke&&(e.rv=Ke,D===null&&a!==null&&a[q]===e?q++:D===null?D=[e]:(!ve||!D.includes(e))&&D.push(e));else{(x.deps??=[]).push(e);var s=e.reactions;s===null?e.reactions=[x]:s.includes(x)||s.push(x)}}}else if(n&&e.deps===null&&e.effects===null){var i=e,l=i.parent;l!==null&&(l.f&U)===0&&(i.f^=U)}if(Ee){if(he.has(e))return he.get(e);if(n){i=e;var o=i.v;return((i.f&R)===0&&i.reactions!==null||ir(i))&&(o=Gt(i)),he.set(i,o),o}}else n&&(i=e,et(i)&&On(i));if((e.f&$e)!==0)throw e.v;return e.v}function ir(e){if(e.v===O)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(he.has(t)||(t.f&H)!==0&&ir(t))return!0;return!1}function G(e){var t=X;try{return X=!0,e()}finally{X=t}}const Ma=-7169;function V(e,t){e.f=e.f&Ma|t}function Se(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(ee in e)It(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&ee in n&&It(n)}}}function It(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{It(e[r],t)}catch{}const n=Ft(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=bn(n);for(let a in r){const s=r[a].get;if(s)try{s.call(e)}catch{}}}}}function Pa(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Aa=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Sa(e){return Aa.includes(e)}const xa={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ka(e){return e=e.toLowerCase(),xa[e]??e}const Ta=["touchstart","touchmove"];function Ca(e){return Ta.includes(e)}const sr=new Set,Rt=new Set;function lr(e,t,n,r={}){function a(s){if(r.capture||Ue.call(t,s),!s.cancelBubble)return Xe(()=>n?.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?_t(()=>{t.addEventListener(e,a,r)}):t.addEventListener(e,a,r),a}function _i(e,t,n,r,a){var s={capture:r,passive:a},i=lr(e,t,n,s);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Qe(()=>{t.removeEventListener(e,i,s)})}function za(e){for(var t=0;t<e.length;t++)sr.add(e[t]);for(var n of Rt)n(e)}let vn=null;function Ue(e){var t=this,n=t.ownerDocument,r=e.type,a=e.composedPath?.()||[],s=a[0]||e.target;vn=e;var i=0,l=vn===e&&e.__root;if(l){var o=a.indexOf(l);if(o!==-1&&(t===document||t===window)){e.__root=t;return}var u=a.indexOf(t);if(u===-1)return;o<=u&&(i=o)}if(s=a[i]||e.target,s!==t){st(e,"currentTarget",{configurable:!0,get(){return s||n}});var f=x,d=A;te(null),ne(null);try{for(var v,h=[];s!==null;){var c=s.assignedSlot||s.parentNode||s.host||null;try{var _=s["__"+r];if(_!=null&&(!s.disabled||e.target===s))if(Ge(_)){var[$,...S]=_;$.apply(s,[e,...S])}else _.call(s,e)}catch(g){v?h.push(g):v=g}if(e.cancelBubble||c===t||c===null)break;s=c}if(v){for(let g of h)queueMicrotask(()=>{throw g});throw v}}finally{e.__root=t,delete e.currentTarget,te(f),ne(d)}}}function pi(e){var t;t=document.head.appendChild(re());try{fe(()=>e(t),Nn)}finally{}}function Jt(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function be(e,t){var n=A;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=t)}function $i(e,t){var n=(t&Fr)!==0,r=(t&qr)!==0,a,s=!e.startsWith("<!>");return()=>{a===void 0&&(a=Jt(s?e:"<!>"+e),n||(a=Q(a)));var i=r||Hn?document.importNode(a,!0):a.cloneNode(!0);if(n){var l=Q(i),o=i.lastChild;be(l,o)}else be(i,i);return i}}function La(e,t,n="svg"){var r=!e.startsWith("<!>"),a=`<${n}>${r?e:"<!>"+e}</${n}>`,s;return()=>{if(!s){var i=Jt(a),l=Q(i);s=Q(l)}var o=s.cloneNode(!0);return be(o,o),o}}function Oa(e,t){return La(e,t,"svg")}function gi(e=""){{var t=re(e+"");return be(t,t),t}}function w(){var e=document.createDocumentFragment(),t=document.createComment(""),n=re();return e.append(t,n),be(t,n),e}function m(e,t){e!==null&&e.before(t)}function mi(e,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+"")}function yi(e,t){return Ia(e,t)}const Me=new Map;function Ia(e,{target:t,anchor:n,props:r={},events:a,context:s,intro:i=!0}){oa();var l=new Set,o=d=>{for(var v=0;v<d.length;v++){var h=d[v];if(!l.has(h)){l.add(h);var c=Ca(h);t.addEventListener(h,Ue,{passive:c});var _=Me.get(h);_===void 0?(document.addEventListener(h,Ue,{passive:c}),Me.set(h,1)):Me.set(h,_+1)}}};o(Vt(sr)),Rt.add(o);var u=void 0,f=$a(()=>{var d=n??t.appendChild(re());return K(()=>{if(s){kn({});var v=L;v.c=s}a&&(r.$$events=a),u=e(d,r)||{},s&&Tn()}),()=>{for(var v of l){t.removeEventListener(v,Ue);var h=Me.get(v);--h===0?(document.removeEventListener(v,Ue),Me.delete(v)):Me.set(v,h)}Rt.delete(o),d!==n&&d.parentNode?.removeChild(d)}});return Ra.set(u,f),u}let Ra=new WeakMap;function bi(e,t,n=!1){var r=e,a=null,s=null,i=O,l=n?Ie:0,o=!1;const u=(h,c=!0)=>{o=!0,v(c,h)};var f=null;function d(){f!==null&&(f.lastChild.remove(),r.before(f),f=null);var h=i?a:s,c=i?s:a;h&&bt(h),c&&Ve(c,()=>{i?s=null:a=null})}const v=(h,c)=>{if(i!==(i=h)){var _=gt(),$=r;if(_&&(f=document.createDocumentFragment(),f.append($=re())),i?a??=c&&K(()=>c($)):s??=c&&K(()=>c($)),_){var S=C,g=i?a:s,p=i?s:a;g&&S.skipped_effects.delete(g),p&&S.skipped_effects.add(p),S.add_callback(d)}else d()}};fe(()=>{o=!1,t(u),o||v(null,null)},l)}function wi(e,t,n){var r=e,a=O,s,i,l=null,o=De()?Yr:Wt;function u(){s&&Ve(s),l!==null&&(l.lastChild.remove(),r.before(l),l=null),s=i}fe(()=>{if(o(a,a=t())){var f=r,d=gt();d&&(l=document.createDocumentFragment(),l.append(f=re())),i=K(()=>n(f)),d?C.add_callback(u):u()}})}function Da(e,t){return t}function Va(e,t,n){for(var r=e.items,a=[],s=t.length,i=0;i<s;i++)Zt(t[i].e,a,!0);var l=s>0&&a.length===0&&n!==null;if(l){var o=n.parentNode;ca(o),o.append(n),r.clear(),Z(e,t[0].prev,t[s-1].next)}Xn(a,()=>{for(var u=0;u<s;u++){var f=t[u];l||(r.delete(f.k),Z(e,f.prev,f.next)),F(f.e,!l)}})}function Fa(e,t,n,r,a,s=null){var i=e,l={flags:t,items:new Map,first:null},o=(t&Pn)!==0;if(o){var u=e;i=u.appendChild(re())}var f=null,d=!1,v=new Map,h=Kt(()=>{var S=n();return Ge(S)?S:S==null?[]:Vt(S)}),c,_;function $(){qa(_,c,l,v,i,a,t,r,n),s!==null&&(c.length===0?f?bt(f):f=K(()=>s(i)):f!==null&&Ve(f,()=>{f=null}))}fe(()=>{_??=A,c=I(h);var S=c.length;if(!(d&&S===0)){d=S===0;var g,p,k,T;if(gt()){var E=new Set,z=C;for(p=0;p<S;p+=1){k=c[p],T=r(k,p);var B=l.items.get(T)??v.get(T);B?(t&(vt|ht))!==0&&or(B,k,p,t):(g=ur(null,l,null,null,k,T,p,a,t,n,!0),v.set(T,g)),E.add(T)}for(const[tt,wt]of l.items)E.has(tt)||z.skipped_effects.add(wt.e);z.add_callback($)}else $();I(h)}})}function qa(e,t,n,r,a,s,i,l,o){var u=(i&Lr)!==0,f=(i&(vt|ht))!==0,d=t.length,v=n.items,h=n.first,c=h,_,$=null,S,g=[],p=[],k,T,E,z;if(u)for(z=0;z<d;z+=1)k=t[z],T=l(k,z),E=v.get(T),E!==void 0&&(E.a?.measure(),(S??=new Set).add(E));for(z=0;z<d;z+=1){if(k=t[z],T=l(k,z),E=v.get(T),E===void 0){var B=r.get(T);if(B!==void 0){r.delete(T),v.set(T,B);var tt=$?$.next:c;Z(n,$,B),Z(n,B,tt),At(B,tt,a),$=B}else{var wt=c?c.e.nodes_start:a;$=ur(wt,n,$,$===null?n.first:$.next,k,T,z,s,i,o)}v.set(T,$),g=[],p=[],c=$.next;continue}if(f&&or(E,k,z,i),(E.e.f&W)!==0&&(bt(E.e),u&&(E.a?.unfix(),(S??=new Set).delete(E))),E!==c){if(_!==void 0&&_.has(E)){if(g.length<p.length){var nt=p[0],ce;$=nt.prev;var en=g[0],Nt=g[g.length-1];for(ce=0;ce<g.length;ce+=1)At(g[ce],nt,a);for(ce=0;ce<p.length;ce+=1)_.delete(p[ce]);Z(n,en.prev,Nt.next),Z(n,$,en),Z(n,Nt,nt),c=nt,$=Nt,z-=1,g=[],p=[]}else _.delete(E),At(E,c,a),Z(n,E.prev,E.next),Z(n,E,$===null?n.first:$.next),Z(n,$,E),$=E;continue}for(g=[],p=[];c!==null&&c.k!==T;)(c.e.f&W)===0&&(_??=new Set).add(c),p.push(c),c=c.next;if(c===null)continue;E=c}g.push(E),$=E,c=E.next}if(c!==null||_!==void 0){for(var Fe=_===void 0?[]:Vt(_);c!==null;)(c.e.f&W)===0&&Fe.push(c),c=c.next;var Et=Fe.length;if(Et>0){var _r=(i&Pn)!==0&&d===0?a:null;if(u){for(z=0;z<Et;z+=1)Fe[z].a?.measure();for(z=0;z<Et;z+=1)Fe[z].a?.fix()}Va(n,Fe,_r)}}u&&_t(()=>{if(S!==void 0)for(E of S)E.a?.apply()}),e.first=n.first&&n.first.e,e.last=$&&$.e;for(var pr of r.values())F(pr.e);r.clear()}function or(e,t,n,r){(r&vt)!==0&&Le(e.v,t),(r&ht)!==0?Le(e.i,n):e.i=n}function ur(e,t,n,r,a,s,i,l,o,u,f){var d=(o&vt)!==0,v=(o&Or)===0,h=d?v?Fn(a,!1,!1):ze(a):a,c=(o&ht)===0?i:ze(i),_={i:c,v:h,k:s,a:null,e:null,prev:n,next:r};try{if(e===null){var $=document.createDocumentFragment();$.append(e=re())}return _.e=K(()=>l(e,h,c,u),Wr),_.e.prev=n&&n.e,_.e.next=r&&r.e,n===null?f||(t.first=_):(n.next=_,n.e.next=_.e),r!==null&&(r.prev=_,r.e.prev=_.e),_}finally{}}function At(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,a=t?t.e.nodes_start:n,s=e.e.nodes_start;s!==null&&s!==r;){var i=$t(s);a.before(s),s=i}}function Z(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function Ni(e,t,n=!1,r=!1,a=!1){var s=e,i="";ma(()=>{var l=A;if(i!==(i=t()??"")&&(l.nodes_start!==null&&(Zn(l.nodes_start,l.nodes_end),l.nodes_start=l.nodes_end=null),i!=="")){var o=i+"";n?o=`<svg>${o}</svg>`:r&&(o=`<math>${o}</math>`);var u=Jt(o);if((n||r)&&(u=Q(u)),be(Q(u),u.lastChild),n||r)for(;Q(u);)s.before(Q(u));else s.before(u)}})}function N(e,t,n,r,a){var s=t.$$slots?.[n],i=!1;s===!0&&(s=t.children,i=!0),s===void 0||s(e,i?()=>r:r)}function Ei(e,t,...n){var r=e,a=se,s;fe(()=>{a!==(a=t())&&(s&&(F(s),s=null),s=K(()=>a(r,...n)))},Ie)}function Mi(e,t,n){var r=e,a,s,i=null,l=null;function o(){s&&(Ve(s),s=null),i&&(i.lastChild.remove(),r.before(i),i=null),s=l,l=null}fe(()=>{if(a!==(a=t())){var u=gt();if(a){var f=r;u&&(i=document.createDocumentFragment(),i.append(f=re()),s&&C.skipped_effects.add(s)),l=K(()=>n(f,a))}u?C.add_callback(o):o()}},Ie)}function Ha(e,t,n,r,a,s){var i,l,o=null,u=e,f;fe(()=>{const d=t()||null;var v=jr;d!==i&&(f&&(d===null?Ve(f,()=>{f=null,l=null}):d===l?bt(f):F(f)),d&&d!==l&&(f=K(()=>{if(o=document.createElementNS(v,d),be(o,o),r){var h=o.appendChild(re());r(o,h)}A.nodes_end=o,u.before(o)})),i=d,i&&(l=i))},Ie)}function ja(e,t){var n=void 0,r;fe(()=>{n!==(n=t())&&(r&&(F(r),r=null),n&&(r=K(()=>{mt(()=>n(e))})))})}function fr(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=fr(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Ua(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=fr(e))&&(r&&(r+=" "),r+=t);return r}function Ba(e){return typeof e=="object"?Ua(e):e??""}const hn=[...` 	
\r\f \v\uFEFF`];function Wa(e,t,n){var r=e==null?"":""+e;if(t&&(r=r?r+" "+t:t),n){for(var a in n)if(n[a])r=r?r+" "+a:a;else if(r.length)for(var s=a.length,i=0;(i=r.indexOf(a,i))>=0;){var l=i+s;(i===0||hn.includes(r[i-1]))&&(l===r.length||hn.includes(r[l]))?r=(i===0?"":r.substring(0,i))+r.substring(l+1):i=l}}return r===""?null:r}function _n(e,t=!1){var n=t?" !important;":";",r="";for(var a in e){var s=e[a];s!=null&&s!==""&&(r+=" "+a+": "+s+n)}return r}function St(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Ya(e,t){if(t){var n="",r,a;if(Array.isArray(t)?(r=t[0],a=t[1]):r=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,i=0,l=!1,o=[];r&&o.push(...Object.keys(r).map(St)),a&&o.push(...Object.keys(a).map(St));var u=0,f=-1;const _=e.length;for(var d=0;d<_;d++){var v=e[d];if(l?v==="/"&&e[d-1]==="*"&&(l=!1):s?s===v&&(s=!1):v==="/"&&e[d+1]==="*"?l=!0:v==='"'||v==="'"?s=v:v==="("?i++:v===")"&&i--,!l&&s===!1&&i===0){if(v===":"&&f===-1)f=d;else if(v===";"||d===_-1){if(f!==-1){var h=St(e.substring(u,f).trim());if(!o.includes(h)){v!==";"&&d++;var c=e.substring(u,d).trim();n+=" "+c+";"}}u=d+1,f=-1}}}}return r&&(n+=_n(r)),a&&(n+=_n(a,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Ka(e,t,n,r,a,s){var i=e.__className;if(i!==n||i===void 0){var l=Wa(n,r,s);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=n}else if(s&&a!==s)for(var o in s){var u=!!s[o];(a==null||u!==!!a[o])&&e.classList.toggle(o,u)}return s}function xt(e,t={},n,r){for(var a in n){var s=n[a];t[a]!==s&&(n[a]==null?e.style.removeProperty(a):e.style.setProperty(a,s,r))}}function Ga(e,t,n,r){var a=e.__style;if(a!==t){var s=Ya(t,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=t}else r&&(Array.isArray(r)?(xt(e,n?.[0],r[0]),xt(e,n?.[1],r[1],"important")):xt(e,n,r));return r}function ct(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Ge(t))return Br();for(var r of e.options)r.selected=t.includes(Be(r));return}for(r of e.options){var a=Be(r);if(sa(a,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function cr(e){var t=new MutationObserver(()=>{ct(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Qe(()=>{t.disconnect()})}function Pi(e,t,n=t){var r=!0;Bn(e,"change",a=>{var s=a?"[selected]":":checked",i;if(e.multiple)i=[].map.call(e.querySelectorAll(s),Be);else{var l=e.querySelector(s)??e.querySelector("option:not([disabled])");i=l&&Be(l)}n(i)}),mt(()=>{var a=t();if(ct(e,a,r),r&&a===void 0){var s=e.querySelector(":checked");s!==null&&(a=Be(s),n(a))}e.__value=a,r=!1}),cr(e)}function Be(e){return"__value"in e?e.__value:e.value}const He=Symbol("class"),je=Symbol("style"),dr=Symbol("is custom element"),vr=Symbol("is html");function Ai(e,t){var n=Xt(e);n.checked!==(n.checked=t??void 0)&&(e.checked=t)}function Za(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function pn(e,t,n,r){var a=Xt(e);a[t]!==(a[t]=n)&&(t==="loading"&&(e[Nr]=n),n==null?e.removeAttribute(t):typeof n!="string"&&hr(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Ja(e,t,n,r,a=!1){var s=Xt(e),i=s[dr],l=!s[vr],o=t||{},u=e.tagName==="OPTION";for(var f in t)f in n||(n[f]=null);n.class?n.class=Ba(n.class):n[He]&&(n.class=null),n[je]&&(n.style??=null);var d=hr(e);for(const g in n){let p=n[g];if(u&&g==="value"&&p==null){e.value=e.__value="",o[g]=p;continue}if(g==="class"){var v=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ka(e,v,p,r,t?.[He],n[He]),o[g]=p,o[He]=n[He];continue}if(g==="style"){Ga(e,p,t?.[je],n[je]),o[g]=p,o[je]=n[je];continue}var h=o[g];if(!(p===h&&!(p===void 0&&e.hasAttribute(g)))){o[g]=p;var c=g[0]+g[1];if(c!=="$$")if(c==="on"){const k={},T="$$"+g;let E=g.slice(2);var _=Sa(E);if(Pa(E)&&(E=E.slice(0,-7),k.capture=!0),!_&&h){if(p!=null)continue;e.removeEventListener(E,o[T],k),o[T]=null}if(p!=null)if(_)e[`__${E}`]=p,za([E]);else{let z=function(B){o[g].call(this,B)};o[T]=lr(E,e,z,k)}else _&&(e[`__${E}`]=void 0)}else if(g==="style")pn(e,g,p);else if(g==="autofocus")da(e,!!p);else if(!i&&(g==="__value"||g==="value"&&p!=null))e.value=e.__value=p;else if(g==="selected"&&u)Za(e,p);else{var $=g;l||($=ka($));var S=$==="defaultValue"||$==="defaultChecked";if(p==null&&!i&&!S)if(s[g]=null,$==="value"||$==="checked"){let k=e;const T=t===void 0;if($==="value"){let E=k.defaultValue;k.removeAttribute($),k.defaultValue=E,k.value=k.__value=T?E:null}else{let E=k.defaultChecked;k.removeAttribute($),k.defaultChecked=E,k.checked=T?E:!1}}else e.removeAttribute(g);else S||d.includes($)&&(i||typeof p!="string")?(e[$]=p,$ in s&&(s[$]=O)):typeof p!="function"&&pn(e,$,p)}}}return o}function $n(e,t,n=[],r=[],a,s=!1){In(n,r,i=>{var l=void 0,o={},u=e.nodeName==="SELECT",f=!1;if(fe(()=>{var v=t(...i.map(I)),h=Ja(e,l,v,a,s);f&&u&&"value"in v&&ct(e,v.value);for(let _ of Object.getOwnPropertySymbols(o))v[_]||F(o[_]);for(let _ of Object.getOwnPropertySymbols(v)){var c=v[_];_.description===Ur&&(!l||c!==l[_])&&(o[_]&&F(o[_]),o[_]=K(()=>ja(e,()=>c))),h[_]=c}l=h}),u){var d=e;mt(()=>{ct(d,l.value,!0),cr(d)})}f=!0})}function Xt(e){return e.__attributes??={[dr]:e.nodeName.includes("-"),[vr]:e.namespaceURI===Hr}}var gn=new Map;function hr(e){var t=e.getAttribute("is")||e.nodeName,n=gn.get(t);if(n)return n;gn.set(t,n=[]);for(var r,a=e,s=Element.prototype;s!==a;){r=bn(a);for(var i in r)r[i].set&&n.push(i);a=Ft(a)}return n}function Si(e,t,n=t){var r=new WeakSet;Bn(e,"input",async a=>{var s=a?e.defaultValue:e.value;if(s=kt(e)?Tt(s):s,n(s),C!==null&&r.add(C),await Ea(),s!==(s=t())){var i=e.selectionStart,l=e.selectionEnd;e.value=s??"",l!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(l,e.value.length))}}),G(t)==null&&e.value&&(n(kt(e)?Tt(e.value):e.value),C!==null&&r.add(C)),yt(()=>{var a=t();if(e===document.activeElement){var s=at??C;if(r.has(s))return}kt(e)&&a===Tt(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function kt(e){var t=e.type;return t==="number"||t==="range"}function Tt(e){return e===""?null:+e}function xi(e,t,n){var r=ie(e,t);r&&r.set&&(e[t]=n,Qe(()=>{e[t]=null}))}function mn(e,t){return e===t||e?.[ee]===t}function ki(e={},t,n,r){return mt(()=>{var a,s;return yt(()=>{a=s,s=[],G(()=>{e!==n(...s)&&(t(e,...s),a&&mn(n(...a),e)&&t(null,...a))})}),()=>{_t(()=>{s&&mn(n(...s),e)&&t(null,...s)})}}),e}function Ti(e,t){ha(window,["resize"],()=>Xe(()=>t(window[e])))}function Ci(e){return function(...t){var n=t[0];return n.stopPropagation(),e?.apply(this,t)}}function Xa(e=!1){const t=L,n=t.l.u;if(!n)return;let r=()=>Se(t.s);if(e){let a=0,s={};const i=Je(()=>{let l=!1;const o=t.s;for(const u in o)o[u]!==s[u]&&(s[u]=o[u],l=!0);return l&&a++,a});r=()=>I(i)}n.b.length&&pa(()=>{yn(t,r),We(n.b)}),Ot(()=>{const a=G(()=>n.m.map(yr));return()=>{for(const s of a)typeof s=="function"&&s()}}),n.a.length&&Ot(()=>{yn(t,r),We(n.a)})}function yn(e,t){if(e.l.s)for(const n of e.l.s)I(n);t()}function Qt(e,t,n){if(e==null)return t(void 0),n&&n(void 0),se;const r=G(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}const Pe=[];function Qa(e,t){return{subscribe:ei(e,t).subscribe}}function ei(e,t=se){let n=null;const r=new Set;function a(l){if(Wt(e,l)&&(e=l,n)){const o=!Pe.length;for(const u of r)u[1](),Pe.push(u,e);if(o){for(let u=0;u<Pe.length;u+=2)Pe[u][0](Pe[u+1]);Pe.length=0}}}function s(l){a(l(e))}function i(l,o=se){const u=[l,o];return r.add(u),r.size===1&&(n=t(a,s)||se),l(e),()=>{r.delete(u),r.size===0&&n&&(n(),n=null)}}return{set:a,update:s,subscribe:i}}function zi(e,t,n){const r=!Array.isArray(e),a=r?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=t.length<2;return Qa(n,(i,l)=>{let o=!1;const u=[];let f=0,d=se;const v=()=>{if(f)return;d();const c=t(r?u[0]:u,i,l);s?i(c):d=typeof c=="function"?c:se},h=a.map((c,_)=>Qt(c,$=>{u[_]=$,f&=~(1<<_),o&&v()},()=>{f|=1<<_}));return o=!0,v(),function(){We(h),d(),o=!1}})}function ti(e){let t;return Qt(e,n=>t=n)(),t}let rt=!1,Dt=Symbol();function Li(e,t,n){const r=n[t]??={store:null,source:Fn(void 0),unsubscribe:se};if(r.store!==e&&!(Dt in n))if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=se;else{var a=!0;r.unsubscribe=Qt(e,s=>{a?r.source.v=s:J(r.source,s)}),a=!1}return e&&Dt in n?ti(e):I(r.source)}function Oi(){const e={};function t(){Qe(()=>{for(var n in e)e[n].unsubscribe();st(e,Dt,{enumerable:!1,value:!0})})}return[e,t]}function ni(e){var t=rt;try{return rt=!1,[e(),rt]}finally{rt=t}}const ri={get(e,t){if(!e.exclude.includes(t))return I(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=A;try{ne(e.parent_effect),e.special[t]=_e({get[t](){return e.props[t]}},t,An)}finally{ne(r)}}return e.special[t](n),sn(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),sn(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function y(e,t){return new Proxy({props:e,exclude:t,special:{},version:ze(0),parent_effect:A},ri)}const ai={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(qe(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let a=e.props[r];qe(a)&&(a=a());const s=ie(a,t);if(s&&s.set)return s.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(qe(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const a=ie(r,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===ee||t===Mn)return!1;for(let n of e.props)if(qe(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(qe(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function M(...e){return new Proxy({props:e},ai)}function _e(e,t,n,r){var a=!Re||(n&Rr)!==0,s=(n&Dr)!==0,i=(n&Vr)!==0,l=r,o=!0,u=()=>(o&&(o=!1,l=i?G(r):r),l),f;if(s){var d=ee in e||Mn in e;f=ie(e,t)?.set??(d&&t in e?p=>e[t]=p:void 0)}var v,h=!1;s?[v,h]=ni(()=>e[t]):v=e[t],v===void 0&&r!==void 0&&(v=u(),f&&(a&&kr(),f(v)));var c;if(a?c=()=>{var p=e[t];return p===void 0?u():(o=!0,p)}:c=()=>{var p=e[t];return p!==void 0&&(l=void 0),p===void 0?l:p},a&&(n&An)===0)return c;if(f){var _=e.$$legacy;return(function(p,k){return arguments.length>0?((!a||!k||_||h)&&f(k?c():p),p):c()})}var $=!1,S=((n&Ir)!==0?Je:Kt)(()=>($=!1,c()));s&&I(S);var g=A;return(function(p,k){if(arguments.length>0){const T=k?I(S):a&&s?xe(p):p;return J(S,T),$=!0,l!==void 0&&(l=T),p}return Ee&&$||(g.f&Ne)!==0?S.v:I(S)})}function ii(e){L===null&&Bt(),Re&&L.l!==null?li(L).m.push(e):Ot(()=>{const t=G(e);if(typeof t=="function")return t})}function Ii(e){L===null&&Bt(),ii(()=>()=>G(e))}function si(e,t,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:r})}function Ri(){const e=L;return e===null&&Bt(),(t,n,r)=>{const a=e.s.$$events?.[t];if(a){const s=Ge(a)?a.slice():[a],i=si(t,n,r);for(const l of s)l.call(e.x,i);return!i.defaultPrevented}return!0}}function li(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const oi="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(oi);Kr();/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const ui={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var fi=Oa("<svg><!><!></svg>");function P(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]),r=y(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);kn(t,!1);let a=_e(t,"name",8,void 0),s=_e(t,"color",8,"currentColor"),i=_e(t,"size",8,24),l=_e(t,"strokeWidth",8,2),o=_e(t,"absoluteStrokeWidth",8,!1),u=_e(t,"iconNode",24,()=>[]);const f=(...c)=>c.filter((_,$,S)=>!!_&&S.indexOf(_)===$).join(" ");Xa();var d=fi();$n(d,(c,_)=>({...ui,...r,width:i(),height:i(),stroke:s(),"stroke-width":c,class:_}),[()=>(Se(o()),Se(l()),Se(i()),G(()=>o()?Number(l())*24/Number(i()):l())),()=>(Se(a()),Se(n),G(()=>f("lucide-icon","lucide",a()?`lucide-${a()}`:"",n.class)))]);var v=ua(d);Fa(v,1,u,Da,(c,_)=>{var $=ta(()=>wr(I(_),2));let S=()=>I($)[0],g=()=>I($)[1];var p=w(),k=b(p);Ha(k,S,!0,(T,E)=>{$n(T,()=>({...g()}))}),m(c,p)});var h=fa(v);N(h,t,"default",{}),m(e,d),Tn()}function Di(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];P(e,M({name:"activity"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function Vi(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]];P(e,M({name:"arrow-down"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function Fi(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];P(e,M({name:"arrow-left"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function qi(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m21 16-4 4-4-4"}],["path",{d:"M17 20V4"}],["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}]];P(e,M({name:"arrow-up-down"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function Hi(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];P(e,M({name:"arrow-up"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function ji(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]];P(e,M({name:"calendar-days"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function Ui(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];P(e,M({name:"calendar"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function Bi(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]];P(e,M({name:"chart-column"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function Wi(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];P(e,M({name:"check"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function Yi(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];P(e,M({name:"circle-check-big"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function Ki(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];P(e,M({name:"circle-x"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function Gi(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M12 11h4"}],["path",{d:"M12 16h4"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 16h.01"}]];P(e,M({name:"clipboard-list"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function Zi(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];P(e,M({name:"clock"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function Ji(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"}],["path",{d:"M5 21h14"}]];P(e,M({name:"crown"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function Xi(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];P(e,M({name:"database"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function Qi(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];P(e,M({name:"external-link"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function es(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];P(e,M({name:"file-text"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function ts(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"}]];P(e,M({name:"flame"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function ns(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];P(e,M({name:"globe"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function rs(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]];P(e,M({name:"hand"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function as(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m5 8 6 6"}],["path",{d:"m4 14 6-6 2-3"}],["path",{d:"M2 5h12"}],["path",{d:"M7 2h1"}],["path",{d:"m22 22-5-10-5 10"}],["path",{d:"M14 18h6"}]];P(e,M({name:"languages"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function is(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];P(e,M({name:"lock"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function ss(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 18h-5"}],["path",{d:"M18 14h-8"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1"}]];P(e,M({name:"newspaper"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function ls(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"}],["path",{d:"m2.3 2.3 7.286 7.286"}],["circle",{cx:"11",cy:"11",r:"2"}]];P(e,M({name:"pen-tool"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function os(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 17v5"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"}]];P(e,M({name:"pin"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function us(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];P(e,M({name:"play"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function fs(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];P(e,M({name:"plus"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function cs(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];P(e,M({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function ds(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];P(e,M({name:"rotate-ccw"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function vs(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];P(e,M({name:"search"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function hs(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];P(e,M({name:"server"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function _s(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];P(e,M({name:"settings"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function ps(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];P(e,M({name:"shield"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function $s(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"}],["path",{d:"m9 11 3 3L22 4"}]];P(e,M({name:"square-check-big"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function gs(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];P(e,M({name:"square-x"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function ms(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"6"}],["circle",{cx:"12",cy:"12",r:"2"}]];P(e,M({name:"target"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function ys(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M16 17h6v-6"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7"}]];P(e,M({name:"trending-down"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function bs(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];P(e,M({name:"triangle-alert"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function ws(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 21a8 8 0 0 0-16 0"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"}]];P(e,M({name:"users-round"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function Ns(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];P(e,M({name:"user"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function Es(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];P(e,M({name:"users"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function Ms(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];P(e,M({name:"video"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function Ps(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 20h.01"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]];P(e,M({name:"wifi"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function As(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];P(e,M({name:"x"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function Ss(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"}],["path",{d:"m10 15 5-3-5-3z"}]];P(e,M({name:"youtube"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}function xs(e,t){const n=y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];P(e,M({name:"zap"},()=>n,{get iconNode(){return r},children:(a,s)=>{var i=w(),l=b(i);N(l,t,"default",{}),m(a,i)},$$slots:{default:!0}}))}export{on as $,I as A,pn as B,J as C,Fa as D,Da as E,ii as F,ns as G,Ii as H,Oi as I,Li as J,Kt as K,Bi as L,Ui as M,ss as N,Xi as O,sn as P,Mi as Q,yi as R,ki as S,Si as T,Qi as U,Ga as V,gi as W,As as X,Gi as Y,ms as Z,xs as _,za as a,bs as a0,ji as a1,wi as a2,xi as a3,cs as a4,Ti as a5,es as a6,Ms as a7,us as a8,ls as a9,fs as aA,Ss as aB,is as aC,ta as aD,Ei as aE,de as aF,Yi as aG,Ki as aH,wr as aI,as as aJ,Ps as aK,Di as aL,Wi as aM,xe as aN,hs as aO,ti as aP,pi as aa,la as ab,ws as ac,ps as ad,rs as ae,Zi as af,Ji as ag,ys as ah,ts as ai,Es as aj,_s as ak,vs as al,os as am,Ci as an,qi as ao,hi as ap,Pi as aq,ds as ar,$s as as,gs as at,Ai as au,Hi as av,Vi as aw,Fi as ax,Ns as ay,Ni as az,m as b,ua as c,zi as d,Oa as e,$i as f,Ri as g,vi as h,bi as i,Xa as j,w as k,di as l,_i as m,b as n,Tn as o,_e as p,kn as q,Se as r,Ka as s,ma as t,fa as u,N as v,ei as w,G as x,mi as y,Fn as z};
