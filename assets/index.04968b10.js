import{u as F,h as L,e as w,c as C,b as S,o as M,a as u,L as U,i,S as x,F as H,s as y,d as O,t as f}from"./index.04264e4f.js";import{d as P,a as R,b as Z}from"./functions.991add9e.js";const j=f('<div class="torrents"></div>'),z=f('<div class="specific"><picture><source media="(max-width: 1200px)"><img></picture><div><h1><span>(<!>)</span></h1><h2>Overview</h2><p></p><h2>Downloads</h2></div></div>'),B=f("<button> </button>");function K(g){const N=F(),T=L(),[s,k]=w(),[$,E]=w([]),m=C(()=>{let e=s();return h(e)?e.title:e?.name}),I=C(()=>{let e=s();return h(e)?e.release_date:e?.first_air_date});S(()=>{const e=new AbortController;async function l(){await R(g.urlType,T.id,e.signal).then(async o=>{const r=o;if(h(r)&&r.imdb_id){const c=await Z(r.imdb_id,e.signal);E(c)}k(r)}).catch(()=>{N(`${g.urlType==="tv"?"/shows":"/movies"}`)})}l(),M(()=>e.abort())});function h(e){return e?.title!==void 0}return u(x,{get when(){return s()},get fallback(){return u(U,{})},get children(){const e=z.cloneNode(!0),l=e.firstChild,o=l.firstChild,r=o.nextSibling,c=l.nextSibling,p=c.firstChild,_=p.firstChild,q=_.firstChild,v=q.nextSibling;v.nextSibling;const A=p.nextSibling,b=A.nextSibling;return b.nextSibling,i(p,m,_),i(_,()=>I()?.slice(0,4),v),i(b,()=>s()?.overview),i(c,u(x,{get when(){return $().length!==0},get children(){const t=j.cloneNode(!0);return i(t,u(H,{get each(){return $()},children:n=>{const d=m()?.replace(/ /g,".")+"."+n.quality+"."+n.type.toUpperCase()+"-ZENITH";return(()=>{const a=B.cloneNode(!0),D=a.firstChild;return a.$$click=()=>P(n.url,d),i(a,()=>n.quality,D),i(a,()=>n.type.toUpperCase(),null),a})()}})),t}}),null),S(t=>{const n="https://image.tmdb.org/t/p/w1280"+s()?.backdrop_path,d="https://image.tmdb.org/t/p/w500"+s()?.poster_path;return n!==t._v$&&y(o,"srcset",t._v$=n),d!==t._v$2&&y(r,"src",t._v$2=d),t},{_v$:void 0,_v$2:void 0}),e}})}O(["click"]);export{K as Info};
