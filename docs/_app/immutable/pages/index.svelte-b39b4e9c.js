import{S as x,i as ee,s as te,e as u,k as E,l as X,c as d,m as k,g as m,d as s,t as I,a as p,h as y,b as _,J as i,K as le,n as q,j as oe}from"../chunks/index-46293cf0.js";function Z(v){let l,r,a;function c(e,o){return e[0]!=="Error"?re:se}let f=c(v),t=f(v);return{c(){l=u("br"),r=E(),t.c(),a=X()},l(e){l=d(e,"BR",{}),r=k(e),t.l(e),a=X()},m(e,o){m(e,l,o),m(e,r,o),t.m(e,o),m(e,a,o)},p(e,o){f===(f=c(e))&&t?t.p(e,o):(t.d(1),t=f(e),t&&(t.c(),t.m(a.parentNode,a)))},d(e){e&&s(l),e&&s(r),t.d(e),e&&s(a)}}}function se(v){let l,r,a,c,f;return{c(){l=u("p"),r=I("Error: invalid debug info"),a=E(),c=u("p"),f=I("To get the debug info, right click on the video and click 'Copy debug info'"),this.h()},l(t){l=d(t,"P",{});var e=p(l);r=y(e,"Error: invalid debug info"),e.forEach(s),a=k(t),c=d(t,"P",{class:!0});var o=p(c);f=y(o,"To get the debug info, right click on the video and click 'Copy debug info'"),o.forEach(s),this.h()},h(){_(c,"class","helper")},m(t,e){m(t,l,e),i(l,r),m(t,a,e),m(t,c,e),i(c,f)},p:q,d(t){t&&s(l),t&&s(a),t&&s(c)}}}function re(v){let l,r,a,c,f;return{c(){l=u("a"),r=u("p"),a=I("http://youtu.be/"),c=I(v[0]),this.h()},l(t){l=d(t,"A",{href:!0,target:!0});var e=p(l);r=d(e,"P",{});var o=p(r);a=y(o,"http://youtu.be/"),c=y(o,v[0]),o.forEach(s),e.forEach(s),this.h()},h(){_(l,"href",f="http://youtu.be/"+v[0]+"/"),_(l,"target","_blank")},m(t,e){m(t,l,e),i(l,r),i(r,a),i(r,c)},p(t,e){e&1&&oe(c,t[0]),e&1&&f!==(f="http://youtu.be/"+t[0]+"/")&&_(l,"href",f)},d(t){t&&s(l)}}}function ie(v){let l,r,a,c,f,t,e,o,U,g,C,B,N,D,P,G,J,V,H,O,Y,R,L,$,j,A,h=v[0]!==null&&Z(v);return{c(){l=u("div"),r=u("h1"),a=I("TB Shitposting Tools"),c=E(),f=u("div"),t=E(),e=u("div"),o=u("div"),U=u("h3"),g=I("YouTube advert from debug info"),C=E(),B=u("div"),N=E(),D=u("button"),P=I("Get advert URL from clipboard"),G=E(),h&&h.c(),J=E(),V=u("div"),H=u("h3"),O=I("I'll make some more soon"),Y=E(),R=u("div"),L=u("h3"),$=I("I'll make some more soon"),this.h()},l(n){l=d(n,"DIV",{class:!0});var b=p(l);r=d(b,"H1",{class:!0});var K=p(r);a=y(K,"TB Shitposting Tools"),K.forEach(s),b.forEach(s),c=k(n),f=d(n,"DIV",{class:!0}),p(f).forEach(s),t=k(n),e=d(n,"DIV",{class:!0});var S=p(e);o=d(S,"DIV",{class:!0});var T=p(o);U=d(T,"H3",{});var w=p(U);g=y(w,"YouTube advert from debug info"),w.forEach(s),C=k(T),B=d(T,"DIV",{class:!0}),p(B).forEach(s),N=k(T),D=d(T,"BUTTON",{});var z=p(D);P=y(z,"Get advert URL from clipboard"),z.forEach(s),G=k(T),h&&h.l(T),T.forEach(s),J=k(S),V=d(S,"DIV",{class:!0});var F=p(V);H=d(F,"H3",{});var M=p(H);O=y(M,"I'll make some more soon"),M.forEach(s),F.forEach(s),Y=k(S),R=d(S,"DIV",{class:!0});var Q=p(R);L=d(Q,"H3",{});var W=p(L);$=y(W,"I'll make some more soon"),W.forEach(s),Q.forEach(s),S.forEach(s),this.h()},h(){_(r,"class","title"),_(l,"class","nav"),_(f,"class","spacer"),_(B,"class","spacer"),_(o,"class","tool"),_(V,"class","tool"),_(R,"class","tool"),_(e,"class","tools")},m(n,b){m(n,l,b),i(l,r),i(r,a),m(n,c,b),m(n,f,b),m(n,t,b),m(n,e,b),i(e,o),i(o,U),i(U,g),i(o,C),i(o,B),i(o,N),i(o,D),i(D,P),i(o,G),h&&h.m(o,null),i(e,J),i(e,V),i(V,H),i(H,O),i(e,Y),i(e,R),i(R,L),i(L,$),j||(A=le(D,"click",v[1]),j=!0)},p(n,[b]){n[0]!==null?h?h.p(n,b):(h=Z(n),h.c(),h.m(o,null)):h&&(h.d(1),h=null)},i:q,o:q,d(n){n&&s(l),n&&s(c),n&&s(f),n&&s(t),n&&s(e),h&&h.d(),j=!1,A()}}}function ae(v,l,r){let a=null;function c(){navigator.clipboard.readText().then(f=>{const t=JSON.parse(f);r(0,a=t.addebug_videoId)}).catch(f=>{r(0,a="Error")})}return[a,c]}class ce extends x{constructor(l){super(),ee(this,l,ae,ie,te,{})}}export{ce as default};
