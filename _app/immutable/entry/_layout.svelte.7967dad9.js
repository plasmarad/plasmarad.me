import{S as q,i as B,s as G,e as g,t as k,a as I,c as b,b as $,d as C,f as p,g as N,h as r,j as L,k as o,n as F,E as R,F as T,A as x,B as z,m as J,C as K,G as Q,H as U,I as W,r as O,p as P,D as X}from"../chunks/index.6514ab59.js";import{s as Y}from"../chunks/singletons.dd863314.js";const Z=()=>{const s=Y;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},ee={subscribe(s){return Z().page.subscribe(s)}};function ae(s){let e,t,n,u,_,f,i,d,E,l,a,c,A,j,m,D,w;return{c(){e=g("nav"),t=g("div"),n=g("a"),u=k("News"),f=I(),i=g("a"),d=k("Projects"),l=I(),a=g("a"),c=k("About"),j=I(),m=g("a"),D=k("Contact Me"),this.h()},l(h){e=b(h,"NAV",{class:!0});var v=$(e);t=b(v,"DIV",{class:!0});var y=$(t);n=b(y,"A",{"aria-current":!0,href:!0,class:!0});var H=$(n);u=C(H,"News"),H.forEach(p),f=N(y),i=b(y,"A",{"aria-current":!0,href:!0,class:!0});var M=$(i);d=C(M,"Projects"),M.forEach(p),l=N(y),a=b(y,"A",{"aria-current":!0,href:!0,class:!0});var S=$(a);c=C(S,"About"),S.forEach(p),j=N(y),m=b(y,"A",{"aria-current":!0,href:!0,class:!0});var V=$(m);D=C(V,"Contact Me"),V.forEach(p),y.forEach(p),v.forEach(p),this.h()},h(){r(n,"aria-current",_=s[0].url.pathname==="/"?"page":void 0),r(n,"href","/"),r(n,"class","svelte-1xaug88"),r(i,"aria-current",E=s[0].url.pathname==="/projects"?"page":void 0),r(i,"href","/projects"),r(i,"class","svelte-1xaug88"),r(a,"aria-current",A=s[0].url.pathname==="/about"?"page":void 0),r(a,"href","/about"),r(a,"class","svelte-1xaug88"),r(m,"aria-current",w=s[0].url.pathname==="/contact"?"page":void 0),r(m,"href","/contact"),r(m,"class","svelte-1xaug88"),r(t,"class","navbar__links svelte-1xaug88"),r(e,"class","navbar svelte-1xaug88")},m(h,v){L(h,e,v),o(e,t),o(t,n),o(n,u),o(t,f),o(t,i),o(i,d),o(t,l),o(t,a),o(a,c),o(t,j),o(t,m),o(m,D)},p(h,[v]){v&1&&_!==(_=h[0].url.pathname==="/"?"page":void 0)&&r(n,"aria-current",_),v&1&&E!==(E=h[0].url.pathname==="/projects"?"page":void 0)&&r(i,"aria-current",E),v&1&&A!==(A=h[0].url.pathname==="/about"?"page":void 0)&&r(a,"aria-current",A),v&1&&w!==(w=h[0].url.pathname==="/contact"?"page":void 0)&&r(m,"aria-current",w)},i:F,o:F,d(h){h&&p(e)}}}function te(s,e,t){let n;return R(s,ee,u=>t(0,n=u)),[n]}class re extends q{constructor(e){super(),B(this,e,te,ae,G,{})}}function se(s){let e,t,n,u,_,f,i,d;t=new re({});const E=s[1].default,l=T(E,s,s[0],null);return{c(){e=g("div"),x(t.$$.fragment),n=I(),u=g("main"),l&&l.c(),_=I(),f=g("footer"),i=k("plasmarad - 2023"),this.h()},l(a){e=b(a,"DIV",{class:!0});var c=$(e);z(t.$$.fragment,c),n=N(c),u=b(c,"MAIN",{class:!0});var A=$(u);l&&l.l(A),A.forEach(p),_=N(c),f=b(c,"FOOTER",{style:!0,class:!0});var j=$(f);i=C(j,"plasmarad - 2023"),j.forEach(p),c.forEach(p),this.h()},h(){r(u,"class","svelte-1ekor5p"),J(f,"color","gray"),r(f,"class","svelte-1ekor5p"),r(e,"class","app svelte-1ekor5p")},m(a,c){L(a,e,c),K(t,e,null),o(e,n),o(e,u),l&&l.m(u,null),o(e,_),o(e,f),o(f,i),d=!0},p(a,[c]){l&&l.p&&(!d||c&1)&&Q(l,E,a,a[0],d?W(E,a[0],c,null):U(a[0]),null)},i(a){d||(O(t.$$.fragment,a),O(l,a),d=!0)},o(a){P(t.$$.fragment,a),P(l,a),d=!1},d(a){a&&p(e),X(t),l&&l.d(a)}}}function ne(s,e,t){let{$$slots:n={},$$scope:u}=e;return s.$$set=_=>{"$$scope"in _&&t(0,u=_.$$scope)},[u,n]}class ue extends q{constructor(e){super(),B(this,e,ne,se,G,{})}}export{ue as default};
