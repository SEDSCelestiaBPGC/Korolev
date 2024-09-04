import{s as he,n as B,a as ue,o as Ce,r as xe,b as ke}from"../chunks/scheduler.DzV7pw1l.js";import{S as fe,i as pe,e as v,c as m,y as G,f as u,g as M,d as g,s as x,t as N,b as k,a as I,j as A,n as z,h as r,k as se,u as W,v as F,w as Q,l as J,m as Y,x as X,z as ge,A as $e,o as _e}from"../chunks/index.OuQUVrRW.js";import{e as be}from"../chunks/each.D6YF6ztN.js";import{C as Ee}from"../chunks/canvas.BK11fjbc.js";import{C as ae}from"../chunks/slider.svelte_svelte_type_style_lang.Bh1gW02x.js";import{b as we}from"../chunks/paths.BZmv8PdU.js";function Ie(i){let e,a='<div class="earth svelte-1tctjtm"><div class="earth__shadow-container svelte-1tctjtm"><div class="earth__shadow svelte-1tctjtm"></div></div> <div class="clouds svelte-1tctjtm"><div class="clouds__group-1 svelte-1tctjtm"></div></div></div> <div class="earth-aura svelte-1tctjtm"></div>';return{c(){e=v("div"),e.innerHTML=a,this.h()},l(t){e=m(t,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-cyibrl"&&(e.innerHTML=a),this.h()},h(){u(e,"class","wrapper svelte-1tctjtm")},m(t,s){M(t,e,s)},p:B,i:B,o:B,d(t){t&&g(e)}}}class Le extends fe{constructor(e){super(),pe(this,e,null,Ie,he,{})}}const Te=[{img:"/assets/images/qc.png",title:"Quantum chess",repo:"https://github.com/SEDSCelestiaBPGC/quantum-chess"},{show:-1,img:"https://images.immediate.co.uk/production/volatile/sites/25/2019/02/Baader-Nano-Tracker-Travelling-Mount-Baader-Nano-Tracker-Travelling-Mount-5d5a2f4.jpg?quality=90&resize=620,413",title:"3- Sided Coin",repo:""},{img:"/assets/images/bci.png",title:"Brain Computer Interface",repo:"https://github.com/SEDSCelestiaBPGC/BCI"},{show:-1,img:"/assets/svgs/korolev.svg",title:"Celestia-Korolev Website (Soon)",repo:"https://github.com/SEDSCelestiaBPGC/BCI"}],Me=[{icon:"/assets/svgs/youtube.svg",link:"youtube.com/playlist?list=PLGzI_TnIg-eqKRfQTB4wxVFGOnarP3jFJ"},{icon:"/assets/svgs/spotify.svg",link:"open.spotify.com/show/0NKbVLI7LpY6069IUCF6xi"},{icon:"/assets/svgs/radiopublic.svg",link:"radiopublic.com/celestia-onair-WeRp1J"},{icon:"/assets/svgs/google.svg",link:"podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80NWYzZjAwOC9wb2RjYXN0L3Jzcw=="},{icon:"/assets/svgs/pocketcast.svg",link:"pca.st/b3mqu7bk"},{icon:"/assets/svgs/breaker.png",link:"breaker.audio/celestia-on-air"}],ye={opensource:Te,podcast:Me};function Se(i){let e,a,t,s,l,c,h=i[0].prof+"",n,d,o=(i[0].title.length>20?i[0].title.slice(0,20)+"...":i[0].title)+"",b,L,T,f=i[0].date+"",C,w,S=i[0].time+"",V,K,D,ee,j,Z=i[0].text+"",R,P,U,p,_,$,q=" ",te,O,H,ce,le;return{c(){e=v("img"),t=x(),s=v("div"),l=v("div"),c=v("span"),n=N(h),d=N(": "),b=N(o),L=x(),T=v("span"),C=N(f),w=N(", "),V=N(S),K=x(),D=v("br"),ee=x(),j=v("div"),R=N(Z),P=x(),U=v("br"),p=x(),_=v("div"),$=v("span"),$.textContent=q,te=x(),O=v("span"),H=v("a"),ce=N("Watch"),this.h()},l(E){e=m(E,"IMG",{class:!0,style:!0,src:!0,alt:!0}),t=k(E),s=m(E,"DIV",{class:!0});var y=I(s);l=m(y,"DIV",{class:!0});var ne=I(l);c=m(ne,"SPAN",{class:!0});var re=I(c);n=A(re,h),d=A(re,": "),b=A(re,o),re.forEach(g),L=k(ne),T=m(ne,"SPAN",{});var ie=I(T);C=A(ie,f),w=A(ie,", "),V=A(ie,S),ie.forEach(g),ne.forEach(g),K=k(y),D=m(y,"BR",{}),ee=k(y),j=m(y,"DIV",{});var de=I(j);R=A(de,Z),de.forEach(g),P=k(y),U=m(y,"BR",{}),p=k(y),_=m(y,"DIV",{class:!0});var oe=I(_);$=m(oe,"SPAN",{"data-svelte-h":!0}),G($)!=="svelte-1uypmr0"&&($.textContent=q),te=k(oe),O=m(oe,"SPAN",{});var ve=I(O);H=m(ve,"A",{class:!0,href:!0,style:!0});var me=I(H);ce=A(me,"Watch"),me.forEach(g),ve.forEach(g),oe.forEach(g),y.forEach(g),this.h()},h(){u(e,"class","w-100"),z(e,"object-fit","cover"),ue(e.src,a=i[1](i[0].image))||u(e,"src",a),u(e,"alt",""),u(c,"class","f-wt7"),u(l,"class","flex jtx-bw"),u(H,"class","btn-std"),u(H,"href",le=i[0].url),z(H,"--theme","#faa"),u(_,"class","flex jtx-bw"),u(s,"class","p-10")},m(E,y){M(E,e,y),M(E,t,y),M(E,s,y),r(s,l),r(l,c),r(c,n),r(c,d),r(c,b),r(l,L),r(l,T),r(T,C),r(T,w),r(T,V),r(s,K),r(s,D),r(s,ee),r(s,j),r(j,R),r(s,P),r(s,U),r(s,p),r(s,_),r(_,$),r(_,te),r(_,O),r(O,H),r(H,ce)},p(E,[y]){y&1&&!ue(e.src,a=E[1](E[0].image))&&u(e,"src",a),y&1&&h!==(h=E[0].prof+"")&&se(n,h),y&1&&o!==(o=(E[0].title.length>20?E[0].title.slice(0,20)+"...":E[0].title)+"")&&se(b,o),y&1&&f!==(f=E[0].date+"")&&se(C,f),y&1&&S!==(S=E[0].time+"")&&se(V,S),y&1&&Z!==(Z=E[0].text+"")&&se(R,Z),y&1&&le!==(le=E[0].url)&&u(H,"href",le)},i:B,o:B,d(E){E&&(g(e),g(t),g(s))}}}function Ve(i,e,a){let{lec:t={url:"",title:"",image:"https://www.awilsonsocialwork.net/wp-content/uploads/2017/01/placeholder.jpg",text:"",date:"",time:"",prof:""}}=e;const s=l=>{var c;return l!=null&&l.includes("google")?`https://drive.google.com/uc?export=view&id=${(c=l==null?void 0:l.split("/d/")[1])==null?void 0:c.split("/")[0]}`:l};return i.$$set=l=>{"lec"in l&&a(0,t=l.lec)},[t,s]}class je extends fe{constructor(e){super(),pe(this,e,Ve,Se,he,{lec:0})}}function De(i,e,a){const t=i.slice();return t[11]=e[a],t}function He(i,e,a){const t=i.slice();return t[14]=e[a],t}function ze(i){let e,a,t,s,l='<svg viewBox="0 0 32 32" size="svg" class="p-5 rx-5" bg="e66-c26"><path d="M20 30 L8 16 20 2"></path></svg>',c,h,n='<svg viewBox="0 0 32 32" size="svg" class="p-5 rx-5" bg="e66-c26"><path d="M12 30 L24 16 12 2"></path></svg>',d,o,b,L,T;return o=new je({props:{lec:i[1]}}),{c(){e=v("div"),a=v("main"),t=v("div"),s=v("div"),s.innerHTML=l,c=x(),h=v("div"),h.innerHTML=n,d=x(),W(o.$$.fragment),this.h()},l(f){e=m(f,"DIV",{class:!0,slot:!0});var C=I(e);a=m(C,"MAIN",{class:!0,style:!0});var w=I(a);t=m(w,"DIV",{class:!0});var S=I(t);s=m(S,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),G(s)!=="svelte-1cbachr"&&(s.innerHTML=l),c=k(S),h=m(S,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),G(h)!=="svelte-14n9k3"&&(h.innerHTML=n),S.forEach(g),d=k(w),F(o.$$.fragment,w),w.forEach(g),C.forEach(g),this.h()},h(){u(s,"class","po-abs"),z(s,"left","5px"),z(s,"top","100px"),u(h,"class","po-abs"),z(h,"right","5px"),z(h,"top","100px"),u(t,"class","po-rel h-100"),u(a,"class","fader o-1"),z(a,"transition","opacity 0.5s ease"),u(e,"class","lecture po-rel w-100"),u(e,"slot","body")},m(f,C){M(f,e,C),r(e,a),r(a,t),r(t,s),r(t,c),r(t,h),r(a,d),Q(o,a,null),i[5](a),b=!0,L||(T=[ge(s,"click",i[3]),ge(h,"click",i[4])],L=!0)},p(f,C){const w={};C&2&&(w.lec=f[1]),o.$set(w)},i(f){b||(J(o.$$.fragment,f),b=!0)},o(f){Y(o.$$.fragment,f),b=!1},d(f){f&&g(e),X(o),i[5](null),L=!1,xe(T)}}}function Pe(i){let e,a,t,s,l,c=i[14].title+"",h,n;return{c(){e=v("a"),a=v("img"),s=x(),l=v("div"),h=N(c),n=x(),this.h()},l(d){e=m(d,"A",{class:!0,href:!0,style:!0});var o=I(e);a=m(o,"IMG",{size:!0,class:!0,src:!0,alt:!0}),s=k(o),l=m(o,"DIV",{class:!0});var b=I(l);h=A(b,c),b.forEach(g),n=k(o),o.forEach(g),this.h()},h(){u(a,"size","md-lg"),u(a,"class","rx-5"),ue(a.src,t=i[14].img)||u(a,"src",t),u(a,"alt",""),u(l,"class","w-100 tx-c"),u(e,"class","flex-col m-5"),u(e,"href",i[14].repo),z(e,"height","225px"),z(e,"align-items","center")},m(d,o){M(d,e,o),r(e,a),r(e,s),r(e,l),r(l,h),r(e,n)},d(d){d&&g(e)}}}function Be(i){let e,a=i[14].show!==-1&&Pe(i);return{c(){a&&a.c(),e=_e()},l(t){a&&a.l(t),e=_e()},m(t,s){a&&a.m(t,s),M(t,e,s)},p:B,d(t){t&&g(e),a&&a.d(t)}}}function Ge(i){let e,a=be(ye.opensource),t=[];for(let s=0;s<a.length;s+=1)t[s]=Be(He(i,a,s));return{c(){e=v("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=m(s,"DIV",{class:!0,slot:!0});var l=I(e);for(let c=0;c<t.length;c+=1)t[c].l(l);l.forEach(g),this.h()},h(){u(e,"class","f-wrap jtx-ev"),u(e,"slot","body")},m(s,l){M(s,e,l);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null)},p:B,d(s){s&&g(e),$e(t,s)}}}function Ne(i){let e,a=`<img class="h-a" src="${i[11].icon}" alt="" style="width:40px;"/> `;return{c(){e=v("a"),e.innerHTML=a,this.h()},l(t){e=m(t,"A",{href:!0,class:!0,"data-svelte-h":!0}),G(e)!=="svelte-w9u0d2"&&(e.innerHTML=a),this.h()},h(){u(e,"href","https://"+i[11].link),u(e,"class","p-5 rx-5")},m(t,s){M(t,e,s)},p:B,d(t){t&&g(e)}}}function Ae(i){let e,a,t=`<img class="w-100 rx-5" src="${we}/assets/images/podcast.png" alt="" style="max-height: 400px;"/>`,s,l,c=be(ye.podcast),h=[];for(let n=0;n<c.length;n+=1)h[n]=Ne(De(i,c,n));return{c(){e=v("div"),a=v("div"),a.innerHTML=t,s=x(),l=v("div");for(let n=0;n<h.length;n+=1)h[n].c();this.h()},l(n){e=m(n,"DIV",{slot:!0});var d=I(e);a=m(d,"DIV",{class:!0,"data-svelte-h":!0}),G(a)!=="svelte-915esv"&&(a.innerHTML=t),s=k(d),l=m(d,"DIV",{class:!0});var o=I(l);for(let b=0;b<h.length;b+=1)h[b].l(o);o.forEach(g),d.forEach(g),this.h()},h(){u(a,"class","lecture po-rel w-100"),u(l,"class","flex p-20 jtx-ev"),u(e,"slot","body")},m(n,d){M(n,e,d),r(e,a),r(e,s),r(e,l);for(let o=0;o<h.length;o+=1)h[o]&&h[o].m(l,null)},p:B,d(n){n&&g(e),$e(h,n)}}}function Ze(i){let e,a=`<iframe src="https://edu.sedscelestia.org/examples/tor/lens.html" class="w-100 rx-5" title="GravLensing Sim" ht="300px" frameborder="0"></iframe> <i>Tap/Move Mouse to Try</i> <p>We conduct regular on campus observation sessions, which we are all
          unfortunately missing out on. This new year, we bring you Celestia&#39;s
          Guide to the Universe! A Virtual Guided Tour through universe, with
          the help of simulators like Space Engine .</p>`;return{c(){e=v("div"),e.innerHTML=a,this.h()},l(t){e=m(t,"DIV",{slot:!0,"data-svelte-h":!0}),G(e)!=="svelte-r23f9w"&&(e.innerHTML=a),this.h()},h(){u(e,"slot","body")},m(t,s){M(t,e,s)},p:B,d(t){t&&g(e)}}}function Re(i){let e,a=`Paper Presentation is about how you put your theme or present your topic
        before the audience. They see the manner in which you present your
        point, the manner in which you put your focus, your introduction style,
        your language and how promptly and effectively you answer their
        questions.`;return{c(){e=v("p"),e.textContent=a,this.h()},l(t){e=m(t,"P",{class:!0,slot:!0,"data-svelte-h":!0}),G(e)!=="svelte-1avl5il"&&(e.textContent=a),this.h()},h(){u(e,"class","tx-j"),u(e,"slot","body")},m(t,s){M(t,e,s)},p:B,d(t){t&&g(e)}}}function Ue(i){let e,a="Events | SEDS Celestia",t,s,l,c="Events",h,n,d,o,b,L,T,f,C,w,S,V,K,D,ee,j,Z=" ",R,P,U;return o=new Ee({props:{image:we+"/assets/onthehouse/lecsArt.png",height:"400",width:"400"}}),L=new ae({props:{title:"Open Lectures",icon:"lec",bg:"e66-c26",$$slots:{body:[ze]},$$scope:{ctx:i}}}),f=new ae({props:{title:"Open Source",icon:"git",bg:"e6e-954",$$slots:{body:[Ge]},$$scope:{ctx:i}}}),w=new ae({props:{title:"Podcast",icon:"cast",bg:"b5e-83c",$$slots:{body:[Ae]},$$scope:{ctx:i}}}),V=new ae({props:{title:"Celestia's Guide to the Universe",icon:"astronaut",bg:"66e-37f",$$slots:{body:[Ze]},$$scope:{ctx:i}}}),D=new ae({props:{title:"Paper Presentation",icon:"scroll",bg:"69e-8ae",$$slots:{body:[Re]},$$scope:{ctx:i}}}),P=new Le({}),{c(){e=v("title"),e.textContent=a,t=x(),s=v("celestia-page"),l=v("h1"),l.textContent=c,h=x(),n=v("section"),d=v("div"),W(o.$$.fragment),b=x(),W(L.$$.fragment),T=x(),W(f.$$.fragment),C=x(),W(w.$$.fragment),S=x(),W(V.$$.fragment),K=x(),W(D.$$.fragment),ee=x(),j=v("div"),j.textContent=Z,R=x(),W(P.$$.fragment),this.h()},l(p){e=m(p,"TITLE",{"data-svelte-h":!0}),G(e)!=="svelte-ob6r78"&&(e.textContent=a),t=k(p),s=m(p,"CELESTIA-PAGE",{});var _=I(s);l=m(_,"H1",{class:!0,style:!0,bg:!0,"data-svelte-h":!0}),G(l)!=="svelte-lxmogw"&&(l.textContent=c),h=k(_),n=m(_,"SECTION",{class:!0});var $=I(n);d=m($,"DIV",{size:!0,class:!0,style:!0});var q=I(d);F(o.$$.fragment,q),q.forEach(g),b=k($),F(L.$$.fragment,$),T=k($),F(f.$$.fragment,$),C=k($),F(w.$$.fragment,$),S=k($),F(V.$$.fragment,$),K=k($),F(D.$$.fragment,$),ee=k($),j=m($,"DIV",{style:!0,"data-svelte-h":!0}),G(j)!=="svelte-bf86qs"&&(j.textContent=Z),R=k($),F(P.$$.fragment,$),$.forEach(g),_.forEach(g),this.h()},h(){u(l,"class","tx-c po-stx p-10 z-4 m-h-auto"),z(l,"top","0px"),u(l,"bg","000-nil"),u(d,"size","max"),u(d,"class","m-h-auto"),z(d,"animation","float 6s ease-in-out infinite"),z(j,"height","5em"),u(n,"class","adaptive")},m(p,_){M(p,e,_),M(p,t,_),M(p,s,_),r(s,l),r(s,h),r(s,n),r(n,d),Q(o,d,null),r(n,b),Q(L,n,null),r(n,T),Q(f,n,null),r(n,C),Q(w,n,null),r(n,S),Q(V,n,null),r(n,K),Q(D,n,null),r(n,ee),r(n,j),r(n,R),Q(P,n,null),U=!0},p(p,[_]){const $={};_&131075&&($.$$scope={dirty:_,ctx:p}),L.$set($);const q={};_&131072&&(q.$$scope={dirty:_,ctx:p}),f.$set(q);const te={};_&131072&&(te.$$scope={dirty:_,ctx:p}),w.$set(te);const O={};_&131072&&(O.$$scope={dirty:_,ctx:p}),V.$set(O);const H={};_&131072&&(H.$$scope={dirty:_,ctx:p}),D.$set(H)},i(p){U||(J(o.$$.fragment,p),J(L.$$.fragment,p),J(f.$$.fragment,p),J(w.$$.fragment,p),J(V.$$.fragment,p),J(D.$$.fragment,p),J(P.$$.fragment,p),U=!0)},o(p){Y(o.$$.fragment,p),Y(L.$$.fragment,p),Y(f.$$.fragment,p),Y(w.$$.fragment,p),Y(V.$$.fragment,p),Y(D.$$.fragment,p),Y(P.$$.fragment,p),U=!1},d(p){p&&(g(e),g(t),g(s)),X(o),X(L),X(f),X(w),X(V),X(D),X(P)}}}function qe(i,e,a){let t,s=0,l,c,h=0,n,d;const o=(f,C=0)=>(n&&C&&clearInterval(n),s=(s+ +f)%h,a(1,d=l[s]),0);Ce(()=>{t=atob("aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMUp6dkhRM1hOZEphUHFSVm8tSzZBWmlsbHFYRUZGZG80NTBQLS1Xb3E0UUUvZ3Zpei90cT90cXg9b3V0OmNzdiZzaGVldD1Lb3JvbGV2LUxlY3R1cmVzLUFQSQ=="),fetch(t).then(f=>f.text()).then(f=>(l=JSON.parse(csvtojson(f)).filter(C=>C.featured==="1"),a(1,[d,h]=[l[s],l.length],d),n=setInterval(()=>{a(0,c.style.opacity=0,c),setTimeout(()=>{o(1),a(0,c.style.opacity=1,c)},1e3)},5e3),l.forEach(C=>{let w=new Image;w.src=C.image}),0))});const b=()=>o(-1,1),L=()=>o(1,1);function T(f){ke[f?"unshift":"push"](()=>{c=f,a(0,c)})}return[c,d,o,b,L,T]}class Xe extends fe{constructor(e){super(),pe(this,e,qe,Ue,he,{})}}export{Xe as component};