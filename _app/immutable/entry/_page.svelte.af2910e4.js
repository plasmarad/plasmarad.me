import{S as I,i as M,s as R,e as g,t as U,a as b,c as v,b as $,d as S,f as p,g as w,h,m as L,j as A,k as u,w as P,n as H,J,A as D,B as y,C as j,r as E,p as k,D as C,l as F}from"../chunks/index.6514ab59.js";function V(i){let e,t,l;return{c(){e=g("div"),t=g("iframe"),this.h()},l(o){e=v(o,"DIV",{class:!0});var d=$(e);t=v(d,"IFRAME",{title:!0,src:!0,frameborder:!0,allow:!0}),$(t).forEach(p),d.forEach(p),this.h()},h(){h(t,"title","video"),J(t.src,l=i[2])||h(t,"src",l),h(t,"frameborder","0"),h(t,"allow",`accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture`),t.allowFullscreen=!0,h(e,"class","vid svelte-dmo0ec")},m(o,d){A(o,e,d),u(e,t)},p(o,d){d&4&&!J(t.src,l=o[2])&&h(t,"src",l)},d(o){o&&p(e)}}}function N(i){let e,t,l=i[3].name+"",o,d,f,c,m,_,a,s=i[2]!="none"&&V(i);return{c(){e=g("div"),t=g("h3"),o=U(l),d=b(),f=g("h6"),c=U(i[1]),m=b(),_=g("div"),a=b(),s&&s.c(),this.h()},l(r){e=v(r,"DIV",{class:!0,style:!0});var n=$(e);t=v(n,"H3",{class:!0});var W=$(t);o=S(W,l),W.forEach(p),d=w(n),f=v(n,"H6",{class:!0});var q=$(f);c=S(q,i[1]),q.forEach(p),m=w(n),_=v(n,"DIV",{class:!0});var B=$(_);B.forEach(p),a=w(n),s&&s.l(n),n.forEach(p),this.h()},h(){h(t,"class","project__name svelte-dmo0ec"),h(f,"class","date svelte-dmo0ec"),h(_,"class","Description svelte-dmo0ec"),h(e,"class","newscard svelte-dmo0ec"),L(e,"background","linear-gradient(black, black) padding-box, linear-gradient(to top left, "+i[3].bottomright_Color+", "+i[3].topleft_Color+") border-box")},m(r,n){A(r,e,n),u(e,t),u(t,o),u(e,d),u(e,f),u(f,c),u(e,m),u(e,_),_.innerHTML=i[0],u(e,a),s&&s.m(e,null)},p(r,[n]){n&8&&l!==(l=r[3].name+"")&&P(o,l),n&2&&P(c,r[1]),n&1&&(_.innerHTML=r[0]),r[2]!="none"?s?s.p(r,n):(s=V(r),s.c(),s.m(e,null)):s&&(s.d(1),s=null),n&8&&L(e,"background","linear-gradient(black, black) padding-box, linear-gradient(to top left, "+r[3].bottomright_Color+", "+r[3].topleft_Color+") border-box")},i:H,o:H,d(r){r&&p(e),s&&s.d()}}}function Y(i,e,t){let{Description:l="placeholder"}=e,{date:o="January 1 1970"}=e,{video:d="none"}=e,{project:f={name:"placeholder",bottomright_Color:"gray",topleft_Color:"gray"}}=e;return i.$$set=c=>{"Description"in c&&t(0,l=c.Description),"date"in c&&t(1,o=c.date),"video"in c&&t(2,d=c.video),"project"in c&&t(3,f=c.project)},[l,o,d,f]}class T extends I{constructor(e){super(),M(this,e,Y,N,R,{Description:0,date:1,video:2,project:3})}}function G(i){let e,t,l,o,d,f,c,m,_,a,s;return t=new T({props:{project:i[0],Description:`
    <u><b>HTML SUPPORT ADDED TO NEWS CARDS </u>`,date:"2024 FEBRUARY 28"}}),o=new T({props:{project:i[0],Description:"Website has been migrated to plasmarad.online, rebranding aswell.",date:"2023 AUGUST 23"}}),f=new T({props:{project:i[0],Description:"Improved alignment for Project cards, scrollbars, and news cards.",date:"2023 AUGUST 3"}}),m=new T({props:{project:i[0],Description:"added missing logos for the Durango and Website projects card.",date:"2023 JULY 19"}}),a=new T({props:{project:i[0],Description:`deployed website to github's static site hosting service, <br>
    this site is now live at plasmarad.me`,date:"2023 JULY 5"}}),{c(){e=g("div"),D(t.$$.fragment),l=b(),D(o.$$.fragment),d=b(),D(f.$$.fragment),c=b(),D(m.$$.fragment),_=b(),D(a.$$.fragment),this.h()},l(r){e=v(r,"DIV",{id:!0,class:!0});var n=$(e);y(t.$$.fragment,n),l=w(n),y(o.$$.fragment,n),d=w(n),y(f.$$.fragment,n),c=w(n),y(m.$$.fragment,n),_=w(n),y(a.$$.fragment,n),n.forEach(p),this.h()},h(){h(e,"id","news__list"),h(e,"class","svelte-1x56kyb")},m(r,n){A(r,e,n),j(t,e,null),u(e,l),j(o,e,null),u(e,d),j(f,e,null),u(e,c),j(m,e,null),u(e,_),j(a,e,null),s=!0},p:H,i(r){s||(E(t.$$.fragment,r),E(o.$$.fragment,r),E(f.$$.fragment,r),E(m.$$.fragment,r),E(a.$$.fragment,r),s=!0)},o(r){k(t.$$.fragment,r),k(o.$$.fragment,r),k(f.$$.fragment,r),k(m.$$.fragment,r),k(a.$$.fragment,r),s=!1},d(r){r&&p(e),C(t),C(o),C(f),C(m),C(a)}}}function O(i){return[{bottomright_Color:"aqua",topleft_Color:"purple",name:"Website"}]}class z extends I{constructor(e){super(),M(this,e,O,G,R,{})}}function K(i){let e,t,l,o,d,f,c,m,_;return m=new z({}),{c(){e=g("meta"),t=b(),l=g("h2"),o=U("Welcome,"),d=g("br"),f=U(" here's the latest news."),c=b(),D(m.$$.fragment),this.h()},l(a){const s=F("svelte-1s0ksxt",document.head);e=v(s,"META",{name:!0,content:!0}),s.forEach(p),t=w(a),l=v(a,"H2",{class:!0});var r=$(l);o=S(r,"Welcome,"),d=v(r,"BR",{}),f=S(r," here's the latest news."),r.forEach(p),c=w(a),y(m.$$.fragment,a),this.h()},h(){document.title="plasmarad",h(e,"name","Plasmarad.online"),h(e,"content","My portfolio of projects"),h(l,"class","svelte-1gchcqq")},m(a,s){u(document.head,e),A(a,t,s),A(a,l,s),u(l,o),u(l,d),u(l,f),A(a,c,s),j(m,a,s),_=!0},p:H,i(a){_||(E(m.$$.fragment,a),_=!0)},o(a){k(m.$$.fragment,a),_=!1},d(a){p(e),a&&p(t),a&&p(l),a&&p(c),C(m,a)}}}class X extends I{constructor(e){super(),M(this,e,null,K,R,{})}}export{X as default};
