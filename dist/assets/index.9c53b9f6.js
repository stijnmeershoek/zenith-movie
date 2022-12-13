import{d as z,u as L,c as M,i as $,a as o,b as C,s as N,S as k,t as v,e as x,o as A,f as P,L as E,g as F,M as p,F as V}from"./index.3a5736f5.js";import{f as j,s as B}from"./functions.991add9e.js";const T=v("<img>"),q=v("<span>18+</span>"),D=v('<div class="line"></div>'),G=v('<article class="grid-card"><section aria-label="movie info" class="info"><div><h2></h2><div><span>/10</span><div class="line"></div><time></time></div></div><p></p></section></article>'),Q=v('<img src="/missing.jpg" alt="image not found">');function R(e){const g=L(),f=M(()=>i(e.data)?e.data.title:e.data.original_name),d=M(()=>i(e.data)?e.data.release_date:e.data.first_air_date);function i(l){return l.title!==void 0}return(()=>{const l=G.cloneNode(!0),m=l.firstChild,w=m.firstChild,_=w.firstChild,c=_.nextSibling,u=c.firstChild,S=u.firstChild,n=u.nextSibling,t=n.nextSibling,a=w.nextSibling;return l.$$click=()=>i(e.data)?g(`${e.data.id}`):{},$(l,o(k,{get when(){return e.data.poster_path!==null},get fallback(){return Q.cloneNode(!0)},get children(){const h=T.cloneNode(!0);return C(r=>{const b="https://image.tmdb.org/t/p/w500"+e.data.poster_path,s=f();return b!==r._v$&&N(h,"src",r._v$=b),s!==r._v$2&&N(h,"alt",r._v$2=s),r},{_v$:void 0,_v$2:void 0}),h}}),m),$(_,f),$(c,o(k,{get when(){return i(e.data)&&e.data.adult},get children(){return[q.cloneNode(!0),D.cloneNode(!0)]}}),u),$(u,()=>e.data.vote_average,S),$(t,()=>d()?.slice(0,4)),$(a,()=>e.data.overview),C(()=>N(t,"datetime",d())),l})()}z(["click"]);const I=v("<img>"),J=v('<article class="list-card"><section aria-label="movie info" class="info"><h2></h2><p></p></section></article>'),K=v('<img src="/missing.jpg" alt="image not found">');function O(e){const g=L(),f=M(()=>d(e.data)?e.data.title:e.data.original_name);function d(i){return i.title!==void 0}return(()=>{const i=J.cloneNode(!0),l=i.firstChild,m=l.firstChild,w=m.nextSibling;return i.$$click=()=>g(`${e.data.id}`),$(i,o(k,{get when(){return e.data.poster_path!==null},get fallback(){return K.cloneNode(!0)},get children(){const _=I.cloneNode(!0);return C(c=>{const u="https://image.tmdb.org/t/p/w500"+e.data.poster_path,S=f();return u!==c._v$&&N(_,"src",c._v$=u),S!==c._v$2&&N(_,"alt",c._v$2=S),c},{_v$:void 0,_v$2:void 0}),_}}),l),$(m,f),$(w,()=>e.data.overview),i})()}z(["click"]);const U=v('<header><div class="view-buttons"><button><svg aria-hidden="true" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M192 80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80zm0 256c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336zM256 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48zM448 336c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336z"></path></svg></button><button><svg aria-hidden="true" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M64 144c26.5 0 48-21.5 48-48s-21.5-48-48-48S16 69.5 16 96s21.5 48 48 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm48-208c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z"></path></svg></button></div><form class="search"><input type="text" placeholder="Search for a movie"></form></header>'),W=v('<section class="card-grid"></section>'),X=v("<footer><button>Previous</button><span></span><button>Next</button></footer>");function ee(e){const[g,f]=x("grid"),[d,i]=x(1),[l,m]=x(""),[w,_]=x(),[c,u]=x();C(()=>{const n=new AbortController;async function t(){const a=await j(e.urlType,d(),n.signal);_(a),u(a)}t(),A(()=>n.abort())});async function S(n){if(n.preventDefault(),l()===""){u(w());return}const t=new AbortController,a=await B(e.urlType,d(),l(),t.signal);_(a),u(a),m("")}return[(()=>{const n=U.cloneNode(!0),t=n.firstChild,a=t.firstChild,h=a.nextSibling,r=t.nextSibling,b=r.firstChild;return a.$$click=()=>f("grid"),h.$$click=()=>f("list"),r.addEventListener("submit",S),b.$$input=({target:s})=>m(s.value),C(s=>{const H=`${g()==="grid"?"active":""}`,y=`${g()==="list"?"active":""}`;return H!==s._v$&&P(a,s._v$=H),y!==s._v$2&&P(h,s._v$2=y),s},{_v$:void 0,_v$2:void 0}),C(()=>b.value=l()),n})(),(()=>{const n=W.cloneNode(!0);return $(n,o(k,{get when(){return c()?.results.length!==0},get fallback(){return o(E,{})},get children(){return o(F,{get children(){return[o(p,{get when(){return g()==="grid"},get children(){return o(V,{get each(){return c()?.results},children:t=>o(R,{data:t})})}}),o(p,{get when(){return g()==="list"},get children(){return o(V,{get each(){return c()?.results},children:t=>o(O,{data:t})})}})]}})}})),C(()=>n.style.setProperty("gap",`${g()==="grid"?"1.25rem":"0.75rem"}`)),n})(),(()=>{const n=X.cloneNode(!0),t=n.firstChild,a=t.nextSibling,h=a.nextSibling;return t.$$click=()=>i(d()-1),$(a,d),h.$$click=()=>i(d()+1),C(r=>{const b=d()===1,s=d()===c()?.total_pages;return b!==r._v$3&&(t.disabled=r._v$3=b),s!==r._v$4&&(h.disabled=r._v$4=s),r},{_v$3:void 0,_v$4:void 0}),n})()]}z(["click","input"]);export{ee as Page};