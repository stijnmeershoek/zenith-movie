import{d as M,u as V,c as z,i as v,a as u,b as f,s as x,S as k,t as g,e as N,o as F,f as p,L as A,g as E,M as P,F as L}from"./index.e6052eba.js";import{f as j,s as B}from"./functions.1250ea96.js";const R=g("<img>"),T=g("<span>18+</span>"),q=g('<div class="line"></div>'),D=g('<article class="grid-card"><section aria-label="movie info" class="info"><div><h2></h2><div><span>/10</span><div class="line"></div><time></time></div></div><p></p></section></article>'),G=g('<img alt="image not found">');function Q(e){const _=V(),m=z(()=>r(e.data)?e.data.title:e.data.original_name),d=z(()=>r(e.data)?e.data.release_date:e.data.first_air_date);function r(l){return l.title!==void 0}return(()=>{const l=D.cloneNode(!0),b=l.firstChild,w=b.firstChild,h=w.firstChild,c=h.nextSibling,$=c.firstChild,S=$.firstChild,n=$.nextSibling,t=n.nextSibling,i=w.nextSibling;return l.$$click=()=>_(`${e.data.id}`),v(l,u(k,{get when(){return e.data.poster_path!==null},get fallback(){return(()=>{const o=G.cloneNode(!0);return f(()=>x(o,"src",`${new URL("/zenith-movie/missing.jpg",self.location).href}`)),o})()},get children(){const o=R.cloneNode(!0);return f(a=>{const C="https://image.tmdb.org/t/p/w500"+e.data.poster_path,s=m();return C!==a._v$&&x(o,"src",a._v$=C),s!==a._v$2&&x(o,"alt",a._v$2=s),a},{_v$:void 0,_v$2:void 0}),o}}),b),v(h,m),v(c,u(k,{get when(){return r(e.data)&&e.data.adult},get children(){return[T.cloneNode(!0),q.cloneNode(!0)]}}),$),v($,()=>e.data.vote_average.toFixed(1),S),v(t,()=>d()?.slice(0,4)),v(i,()=>e.data.overview),f(()=>x(t,"datetime",d())),l})()}M(["click"]);const U=g("<img>"),I=g('<article class="list-card"><section aria-label="movie info" class="info"><h2></h2><p></p></section></article>'),J=g('<img src="/missing.jpg" alt="image not found">');function K(e){const _=V(),m=z(()=>d(e.data)?e.data.title:e.data.original_name);function d(r){return r.title!==void 0}return(()=>{const r=I.cloneNode(!0),l=r.firstChild,b=l.firstChild,w=b.nextSibling;return r.$$click=()=>_(`${e.data.id}`),v(r,u(k,{get when(){return e.data.poster_path!==null},get fallback(){return J.cloneNode(!0)},get children(){const h=U.cloneNode(!0);return f(c=>{const $="https://image.tmdb.org/t/p/w500"+e.data.poster_path,S=m();return $!==c._v$&&x(h,"src",c._v$=$),S!==c._v$2&&x(h,"alt",c._v$2=S),c},{_v$:void 0,_v$2:void 0}),h}}),l),v(b,m),v(w,()=>e.data.overview),r})()}M(["click"]);const O=g('<header><div class="view-buttons"><button><svg aria-hidden="true" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M192 80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80zm0 256c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336zM256 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48zM448 336c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336z"></path></svg></button><button><svg aria-hidden="true" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M64 144c26.5 0 48-21.5 48-48s-21.5-48-48-48S16 69.5 16 96s21.5 48 48 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm48-208c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z"></path></svg></button></div><form class="search"><input type="text" placeholder="Search for a movie"></form></header>'),W=g('<section class="card-grid"></section>'),X=g("<footer><button>Previous</button><span></span><button>Next</button></footer>");function ee(e){const[_,m]=N("grid"),[d,r]=N(1),[l,b]=N(""),[w,h]=N(),[c,$]=N();f(()=>{const n=new AbortController;async function t(){const i=await j(e.urlType,d(),n.signal);h(i),$(i)}t(),F(()=>n.abort())});async function S(n){if(n.preventDefault(),l()===""){$(w());return}const t=new AbortController,i=await B(e.urlType,d(),l(),t.signal);h(i),$(i),b("")}return[(()=>{const n=O.cloneNode(!0),t=n.firstChild,i=t.firstChild,o=i.nextSibling,a=t.nextSibling,C=a.firstChild;return i.$$click=()=>m("grid"),o.$$click=()=>m("list"),a.addEventListener("submit",S),C.$$input=({target:s})=>b(s.value),f(s=>{const H=`${_()==="grid"?"active":""}`,y=`${_()==="list"?"active":""}`;return H!==s._v$&&p(i,s._v$=H),y!==s._v$2&&p(o,s._v$2=y),s},{_v$:void 0,_v$2:void 0}),f(()=>C.value=l()),n})(),(()=>{const n=W.cloneNode(!0);return v(n,u(k,{get when(){return c()?.results.length!==0},get fallback(){return u(A,{})},get children(){return u(E,{get children(){return[u(P,{get when(){return _()==="grid"},get children(){return u(L,{get each(){return c()?.results},children:t=>u(Q,{data:t})})}}),u(P,{get when(){return _()==="list"},get children(){return u(L,{get each(){return c()?.results},children:t=>u(K,{data:t})})}})]}})}})),f(()=>n.style.setProperty("gap",`${_()==="grid"?"1.25rem":"0.75rem"}`)),n})(),(()=>{const n=X.cloneNode(!0),t=n.firstChild,i=t.nextSibling,o=i.nextSibling;return t.$$click=()=>r(d()-1),v(i,d),o.$$click=()=>r(d()+1),f(a=>{const C=d()===1,s=d()===c()?.total_pages;return C!==a._v$3&&(t.disabled=a._v$3=C),s!==a._v$4&&(o.disabled=a._v$4=s),a},{_v$3:void 0,_v$4:void 0}),n})()]}M(["click","input"]);export{ee as Page};
