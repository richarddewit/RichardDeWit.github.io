!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/assets/",n(n.s=0)}([function(t,e,n){t.exports=n(5)},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(1);function o(){}function r(t){return t()}function l(){return Object.create(null)}function c(t){t.forEach(r)}function u(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}new Set;function s(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function h(){return m(" ")}function g(){return m("")}function b(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){e=""+e,t.data!==e&&(t.data=e)}function v(t,e){(null!=e||t.value)&&(t.value=e)}let w;function k(t){w=t}function x(){if(!w)throw new Error("Function called outside component initialization");return w}const _=[],S=[],C=[],O=[],E=Promise.resolve();let j=!1;function M(){j||(j=!0,E.then(P))}function T(t){C.push(t)}function P(){const t=new Set;do{for(;_.length;){const t=_.shift();k(t),L(t.$$)}for(;S.length;)S.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];t.has(n)||(n(),t.add(n))}C.length=0}while(_.length);for(;O.length;)O.pop()();j=!1}function L(t){if(null!==t.fragment){t.update(),c(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const R=new Set;let A;function H(){A={r:0,c:[],p:A}}function N(){A.r||c(A.c),A=A.p}function Y(t,e){t&&t.i&&(R.delete(t),t.i(e))}function q(t,e,n,o){if(t&&t.o){if(R.has(t))return;R.add(t),A.c.push(()=>{R.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}"undefined"!=typeof window?window:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let z;function F(t){t&&t.c()}function W(t,e,n){const{fragment:o,on_mount:l,on_destroy:i,after_update:s}=t.$$;o&&o.m(e,n),T(()=>{const e=l.map(r).filter(u);i?i.push(...e):c(e),t.$$.on_mount=[]}),s.forEach(T)}function D(t,e){const n=t.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e,n,r,u,i,s=[-1]){const a=w;k(t);const f=e.props||{},d=t.$$={fragment:null,ctx:null,props:i,update:o,not_equal:u,bound:l(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:l(),dirty:s};let p=!1;var m;d.ctx=n?n(t,f,(e,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&u(d.ctx[e],d.ctx[e]=r)&&(d.bound[e]&&d.bound[e](r),p&&function(t,e){-1===t.$$.dirty[0]&&(_.push(t),M(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n}):[],d.update(),p=!0,c(d.before_update),d.fragment=!!r&&r(d.ctx),e.target&&(e.hydrate?d.fragment&&d.fragment.l((m=e.target,Array.from(m.childNodes))):d.fragment&&d.fragment.c(),e.intro&&Y(t.$$.fragment),W(t,e.target,e.anchor),P()),k(a)}"function"==typeof HTMLElement&&(z=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){D(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class G{$destroy(){D(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}n(2);function U(t,e,n){const o=t.slice();return o[2]=e[n],o}function V(t){let e,n,r,l,c,u,i;return{c(){e=p("li"),n=p("a"),r=p("i"),i=h(),$(r,"class",l="fa fa-fw fa-"+t[2].type+" svelte-1c1jdsu"),$(n,"href",c=t[2].url),$(n,"target","_blank"),$(n,"class","icon-link svelte-1c1jdsu"),$(n,"title",u=t[2].title)},m(t,o){a(t,e,o),s(e,n),s(n,r),s(e,i)},p:o,d(t){t&&f(e)}}}function I(t){let e,n,r,l,c,u=t[1],i=[];for(let e=0;e<u.length;e+=1)i[e]=V(U(t,u,e));return{c(){e=p("footer"),n=p("section"),n.textContent=`© ${t[0]} Richard de Wit`,r=h(),l=p("section"),c=p("ul");for(let t=0;t<i.length;t+=1)i[t].c();$(c,"class","list-inline svelte-1c1jdsu"),$(e,"class","svelte-1c1jdsu")},m(t,o){a(t,e,o),s(e,n),s(e,r),s(e,l),s(l,c);for(let t=0;t<i.length;t+=1)i[t].m(c,null)},p(t,[e]){if(2&e){let n;for(u=t[1],n=0;n<u.length;n+=1){const o=U(t,u,n);i[n]?i[n].p(o,e):(i[n]=V(o),i[n].c(),i[n].m(c,null))}for(;n<i.length;n+=1)i[n].d(1);i.length=u.length}},i:o,o:o,d(t){t&&f(e),d(i,t)}}}function J(t){return[(new Date).getFullYear(),[{type:"github",url:"https://github.com/richarddewit",title:"Github - richarddewit"},{type:"twitter",url:"https://twitter.com/sneetzle",title:"Twitter - @Sneetzle"},{type:"stack-overflow",url:"https://stackoverflow.com/users/1062281/richard-de-wit",title:"Stack Overflow - Richard de Wit"}]]}var K=class extends G{constructor(t){super(),B(this,t,J,I,i,{})}};const Q=[];function X(t,e=o){let n;const r=[];function l(e){if(i(t,e)&&(t=e,n)){const e=!Q.length;for(let e=0;e<r.length;e+=1){const n=r[e];n[1](),Q.push(n,t)}if(e){for(let t=0;t<Q.length;t+=2)Q[t][0](Q[t+1]);Q.length=0}}}return{set:l,update:function(e){l(e(t))},subscribe:function(c,u=o){const i=[c,u];return r.push(i),1===r.length&&(n=e(l)||o),c(t),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(n(),n=null)}}}}const Z=X("You");n(3);function tt(t,e,n){const o=t.slice();return o[15]=e[n],o[17]=n,o}function et(t){let e,n,o,r,l,c,u,i,d,g,y=t[15].label+"",v=t[17]+1+"";function w(...e){return t[14](t[15],...e)}return{c(){e=p("button"),n=p("i"),r=h(),l=m(y),c=h(),u=p("span"),i=m(v),d=h(),$(n,"class",o="fa fa-fw fa-"+t[15].icon+" svelte-ugui3p"),$(u,"class","keycode"),$(e,"class","svelte-ugui3p")},m(t,o){a(t,e,o),s(e,n),s(e,r),s(e,l),s(e,c),s(e,u),s(u,i),s(e,d),g=b(e,"click",w)},p(e,n){t=e},d(t){t&&f(e),g()}}}function nt(t){let e;return{c(){e=m(" ")},m(t,n){a(t,e,n)},p:o,d(t){t&&f(e)}}}function ot(t){let e,n,o,r,l=t[4].label+"";return{c(){e=m(t[0]),n=m(" picked\n      "),o=p("strong"),r=m(l)},m(t,l){a(t,e,l),a(t,n,l),a(t,o,l),s(o,r)},p(t,n){1&n&&y(e,t[0]),16&n&&l!==(l=t[4].label+"")&&y(r,l)},d(t){t&&f(e),t&&f(n),t&&f(o)}}}function rt(t){let e;return{c(){e=m(" ")},m(t,n){a(t,e,n)},p:o,d(t){t&&f(e)}}}function lt(t){let e,n,o,r,l=t[5].label+"";return{c(){e=m(st),n=m(" picked\n      "),o=p("strong"),r=m(l)},m(t,l){a(t,e,l),a(t,n,l),a(t,o,l),s(o,r)},p(t,e){32&e&&l!==(l=t[5].label+"")&&y(r,l)},d(t){t&&f(e),t&&f(n),t&&f(o)}}}function ct(t){let e;return{c(){e=m(" ")},m(t,n){a(t,e,n)},p:o,d(t){t&&f(e)}}}function ut(t){let e;return{c(){e=m(t[1])},m(t,n){a(t,e,n)},p(t,n){2&n&&y(e,t[1])},d(t){t&&f(e)}}}function it(t){let e,n,r,l,c,u,i,g,v,w,k,x,_,S,C,O,E,j,M,T,P,L,R,A,H,N,Y,q,z,F=t[6],W=[];for(let e=0;e<F.length;e+=1)W[e]=et(tt(t,F,e));function D(t,e){return t[4]?ot:nt}let B=D(t),G=B(t);function U(t,e){return t[5]?lt:rt}let V=U(t),I=V(t);function J(t,e){return t[1]?ut:ct}let K=J(t),Q=K(t);return{c(){e=p("h1"),e.textContent="Rock, Paper, Scissors",n=h(),r=p("p"),r.innerHTML="<small>Click a button or press 1, 2, 3 or R, P, S on your keyboard.</small>",l=h(),c=p("hr"),u=h(),i=p("div"),g=p("span"),v=m(t[0]),w=m(":\n    "),k=p("strong"),x=m(t[2]),_=h(),S=p("span"),C=m(st),O=m(":\n    "),E=p("strong"),j=m(t[3]),M=h(),T=p("div");for(let t=0;t<W.length;t+=1)W[t].c();P=h(),L=p("div"),R=p("p"),G.c(),A=h(),H=p("p"),I.c(),N=h(),Y=p("p"),q=p("big"),Q.c(),$(g,"class","svelte-ugui3p"),$(S,"class","svelte-ugui3p"),$(i,"class","score svelte-ugui3p"),$(T,"class","choices svelte-ugui3p"),$(L,"class","messages svelte-ugui3p")},m(o,f){a(o,e,f),a(o,n,f),a(o,r,f),a(o,l,f),a(o,c,f),a(o,u,f),a(o,i,f),s(i,g),s(g,v),s(g,w),s(g,k),s(k,x),s(i,_),s(i,S),s(S,C),s(S,O),s(S,E),s(E,j),a(o,M,f),a(o,T,f);for(let t=0;t<W.length;t+=1)W[t].m(T,null);a(o,P,f),a(o,L,f),s(L,R),G.m(R,null),s(L,A),s(L,H),I.m(H,null),s(L,N),s(L,Y),s(Y,q),Q.m(q,null),z=b(window,"keydown",t[8])},p(t,[e]){if(1&e&&y(v,t[0]),4&e&&y(x,t[2]),8&e&&y(j,t[3]),192&e){let n;for(F=t[6],n=0;n<F.length;n+=1){const o=tt(t,F,n);W[n]?W[n].p(o,e):(W[n]=et(o),W[n].c(),W[n].m(T,null))}for(;n<W.length;n+=1)W[n].d(1);W.length=F.length}B===(B=D(t))&&G?G.p(t,e):(G.d(1),G=B(t),G&&(G.c(),G.m(R,null))),V===(V=U(t))&&I?I.p(t,e):(I.d(1),I=V(t),I&&(I.c(),I.m(H,null))),K===(K=J(t))&&Q?Q.p(t,e):(Q.d(1),Q=K(t),Q&&(Q.c(),Q.m(q,null)))},i:o,o:o,d(t){t&&f(e),t&&f(n),t&&f(r),t&&f(l),t&&f(c),t&&f(u),t&&f(i),t&&f(M),t&&f(T),d(W,t),t&&f(P),t&&f(L),G.d(),I.d(),Q.d(),z()}}}let st="Richard";function at(t,e,n){let o="You";const r=Z.subscribe(t=>{n(0,o=t)}),l=[{label:"Rock",value:4,icon:"hand-rock-o"},{label:"Paper",value:2,icon:"hand-paper-o"},{label:"Scissors",value:1,icon:"hand-scissors-o"}];let c="",u="",i=0,s=0,a=null,f=null;function d(t){n(4,a=t),n(5,f=l[Math.floor(Math.random()*l.length)]);const e=a.value|f.value;switch(c=`${o} picked ${a.label}, ${st} picked ${f.label}`,e){case 5:4===a.value&&p(),4===f.value&&m();break;case 6:2===a.value&&p(),2===f.value&&m();break;case 3:1===a.value&&p(),1===f.value&&m();break;case 4:case 2:case 1:n(1,u="Tie! Try again.");break;default:n(1,u="WTF? How?")}}function p(){n(1,u=o+" win"+("You"===o?"":"s")+"!"),n(2,i++,i)}function m(){n(1,u=`${st} wins!`),n(3,s++,s)}function h(t){let e=["1","2","3"].indexOf(t);return-1!==e?d(l[e]):(e=["r","p","s"].indexOf(t),-1!==e?d(l[e]):void 0)}var g;g=()=>{r()},x().$$.on_destroy.push(g);return[o,u,i,s,a,f,l,d,function(t){h(t.key)},c,r,p,m,h,t=>d(t)]}var ft=class extends G{constructor(t){super(),B(this,t,at,it,i,{})}};n(4);function dt(t,e,n){const o=t.slice();return o[11]=e[n],o[13]=n,o}function pt(t){let e,n,r,l,u,i,d,g,w,k,x,_,S,C;return{c(){e=p("h1"),e.textContent="Let's play a game",n=h(),r=p("form"),l=p("div"),u=p("label"),u.textContent="Enter your name",i=h(),d=p("p"),g=p("small"),w=m(t[1]),k=h(),x=p("input"),_=h(),S=p("button"),S.innerHTML='<i class="fa fa-fw fa-flag"></i>\n        Start\n        <span class="keycode">Enter</span>',$(u,"for","name"),$(x,"name","name"),$(x,"id","name"),$(x,"type","text"),x.autofocus=!0,$(x,"maxlength","16"),$(l,"class","form-control"),$(S,"type","submit")},m(o,c){var f;a(o,e,c),a(o,n,c),a(o,r,c),s(r,l),s(l,u),s(l,i),s(l,d),s(d,g),s(g,w),s(l,k),s(l,x),v(x,t[0]),s(r,_),s(r,S),x.focus(),C=[b(x,"input",t[10]),b(r,"submit",(f=t[5],function(t){return t.preventDefault(),f.call(this,t)}))]},p(t,e){2&e&&y(w,t[1]),1&e&&x.value!==t[0]&&v(x,t[0])},i:o,o:o,d(t){t&&f(e),t&&f(n),t&&f(r),c(C)}}}function mt(t){let e,n,o,r,l,c;const u=[gt,ht],i=[];function s(t,e){return null===t[3]?0:1}return e=s(t),n=i[e]=u[e](t),{c(){n.c(),o=h(),r=p("button"),r.innerHTML='<i class="fa fa-fw fa-chevron-left"></i>\n      Start over\n      <span class="keycode">Esc</span>',$(r,"class","inverted")},m(n,u){i[e].m(n,u),a(n,o,u),a(n,r,u),l=!0,c=b(r,"click",t[6])},p(t,r){let l=e;e=s(t),e===l?i[e].p(t,r):(H(),q(i[l],1,1,()=>{i[l]=null}),N(),n=i[e],n||(n=i[e]=u[e](t),n.c()),Y(n,1),n.m(o.parentNode,o))},i(t){l||(Y(n),l=!0)},o(t){q(n),l=!1},d(t){i[e].d(t),t&&f(o),t&&f(r),c()}}}function ht(t){let e,n;var o=t[3].component;if(o)var r=new o({});return{c(){r&&F(r.$$.fragment),e=g()},m(t,o){r&&W(r,t,o),a(t,e,o),n=!0},p(t,n){if(o!==(o=t[3].component)){if(r){H();const t=r;q(t.$$.fragment,1,0,()=>{D(t,1)}),N()}o?(F((r=new o({})).$$.fragment),Y(r.$$.fragment,1),W(r,e.parentNode,e)):r=null}},i(t){n||(r&&Y(r.$$.fragment,t),n=!0)},o(t){r&&q(r.$$.fragment,t),n=!1},d(t){t&&f(e),r&&D(r,t)}}}function gt(t){let e,n,r,l=t[4],c=[];for(let e=0;e<l.length;e+=1)c[e]=bt(dt(t,l,e));return{c(){e=p("h1"),e.textContent="Select a game to play",n=h();for(let t=0;t<c.length;t+=1)c[t].c();r=g()},m(t,o){a(t,e,o),a(t,n,o);for(let e=0;e<c.length;e+=1)c[e].m(t,o);a(t,r,o)},p(t,e){if(144&e){let n;for(l=t[4],n=0;n<l.length;n+=1){const o=dt(t,l,n);c[n]?c[n].p(o,e):(c[n]=bt(o),c[n].c(),c[n].m(r.parentNode,r))}for(;n<c.length;n+=1)c[n].d(1);c.length=l.length}},i:o,o:o,d(t){t&&f(e),t&&f(n),d(c,t),t&&f(r)}}}function bt(t){let e,n,o,r,l,c,u,i=t[11].name+"",d=t[13]+1+"";function g(...e){return t[9](t[11],...e)}return{c(){e=p("button"),n=m(i),o=h(),r=p("span"),l=m(d),c=h(),$(r,"class","keycode")},m(t,i){a(t,e,i),s(e,n),s(e,o),s(e,r),s(r,l),s(e,c),u=b(e,"click",g)},p(e,n){t=e},d(t){t&&f(e),u()}}}function $t(t){let e,n,o,r,l,c;const u=[mt,pt],i=[];function s(t,e){return t[2]?0:1}n=s(t),o=i[n]=u[n](t);const d=new K({});return{c(){e=p("main"),o.c(),r=h(),F(d.$$.fragment),$(e,"class","svelte-h42f5r")},m(o,u){a(o,e,u),i[n].m(e,null),a(o,r,u),W(d,o,u),l=!0,c=b(window,"keydown",t[8])},p(t,[r]){let l=n;n=s(t),n===l?i[n].p(t,r):(H(),q(i[l],1,1,()=>{i[l]=null}),N(),o=i[n],o||(o=i[n]=u[n](t),o.c()),Y(o,1),o.m(e,null))},i(t){l||(Y(o),Y(d.$$.fragment,t),l=!0)},o(t){q(o),q(d.$$.fragment,t),l=!1},d(t){t&&f(e),i[n].d(),t&&f(r),D(d,t),c()}}}function yt(t,e,n){const o=[{name:"Rock, Paper, Scissors",component:ft}];let r="",l="",c=!1,u=null;function i(){n(2,c=!1),n(3,u=null)}function s(t){n(3,u=t)}return[r,l,c,u,o,function(){if(n(1,l=""),n(0,r=r.replace(/[^\w -]/g,"").substr(0,16).trim()),"your name"===r.toLowerCase())return n(1,l="Very funny"),void n(0,r="");Z.set(r||"You"),n(2,c=!0)},i,s,function(t){const e=t.key.toUpperCase();if("ESCAPE"===e)return i();if(null===u&&c){const t=[...Array(o.length+1).keys()].map(String);t.shift();const n=t.indexOf(e);if(-1!==n)return s(o[n])}},t=>s(t),function(){r=this.value,n(0,r)}]}const vt=new class extends G{constructor(t){super(),B(this,t,yt,$t,i,{})}}({target:document.body,props:{}});window.app=vt;e.default=vt}]);