(()=>{function r(r){return void 0===r?{b:0}:null!==r&&void 0!==r.b?{b:r.b+1|0}:r}function n(n){return null==n?void 0:r(n)}function e(r){if(null===r||void 0===r.b)return r;var n=r.b;return 0===n?void 0:{b:n-1|0}}function t(n,t){if(void 0!==n)return r(t(e(n)))}function i(r,n){if(void 0!==r)return n(e(r))}function a(r,n){return void 0!==r?e(r):n}function o(r,n){return void 0!==r?r:n}function u(r){return void 0!==r}var v=new Map;function d(r){var n,e=v.get(r);if(void 0!==e){var t=e+1|0;v.set(r,t),n=t}else v.set(r,1),n=1;return r+"/"+n}function c(r,n){return r.catch((r=>{return n((r=>null!=r&&"string"==typeof r.a)(e=r)?e:{a:"0j",o:e});var e}))}function f(r){return Promise.resolve(r)}function s(r,n){return r.then((r=>Promise.resolve(n(r))))}function m(r){return r.then((r=>Promise.resolve()))}var l=window,p=document;function w(r){return c(m(r),(r=>(((r,n)=>{var e=l.parent;null==e||e.postMessage({u:"/a/e",e:n+""},"*")})(0,r),Promise.resolve())))}function g(n){if(""!==n)try{return r(new URL(n))}catch(r){return}}function _(r,n){try{return localStorage.setItem(r,n),!0}catch(r){return!1}}function h(n){try{return null===(e=localStorage.getItem(n))?void 0:r(e)}catch(r){return}var e}function y(){try{return l===l.top}catch(r){return!1}}var b=RegExp("a-mo\\.net$");function A(r){try{return JSON.stringify(r)}catch(r){return"[]"}}function P(r){try{return JSON.parse(r)}catch(r){return[]}}var T=a(t(n(l.performance),(r=>()=>r.now())),(()=>Date.now())),x=d(209);var G=d(5),D=/{{([^}]+)}}/g;var k=d(203);function O(n,e){return new Promise(((i,o)=>{if(void 0===g(e))return o({a:k,o:e});var v=new Image;v.addEventListener("load",(r=>{i(v)})),v.addEventListener("error",(n=>{o({a:G,o:r(n)})})),setTimeout((()=>{o({a:G,o:void 0})}),3e3),v.src=function(r,n){var e,i=r[2];return((r,n,e)=>(e[0]||u(e[2]))&&((r,n)=>["gdpr_consent=","gpp=","gdpr=","ib.adnxs.com"].every((n=>-1===r.indexOf(n))))(r)?r+"&"+a(n[1],""):r)((e=n.replace(D,((n,e,t,o)=>{var u;switch(e.toLowerCase()){case"_pp":u=r[1];break;case"gdpr":u=i[0]?"1":"0";break;case"gdpr_consent":u=i[1];break;case"gpp_sid":u=i[3];break;case"gpp":case"gpp_string":u=i[2];break;case"uid":u=r[0];break;case"us_privacy":u=i[4];break;default:u=void 0}return a(u,"~")})),a(t(g(e),(r=>{var n=r.searchParams;return Array.from(n.entries()).forEach((r=>{var e=r[0];if("~"!==r[1])switch(e){case"":if(""!==r[1])return;return void n.delete("");case"~":return void n.delete("~");default:return}else n.delete(e)})),""+r})),e)),r,i).replace(/&&/g,"&").replace(/\?&/g,"?")}(n,e)}))}function S(r,n){return"__"+r+n}function I(){return(1e8*Math.random()).toString(32)}function M(r){var e;try{e=t(n(window.top.frames[S(r,"Locator")]),(r=>r.parent))}catch(r){e=void 0}return a(e,window.top)}function j(r,n,e){return[r,n,e,I()+I(),S(r,"Return"),M(r)]}function C(r){return new Promise(((n,t)=>{var i={m:t=>{var a=t.data;if(void 0!==a){var o=e(a)[r[4]];return void 0!==o&&o._===r[3]?(n(o.returnValue),void r[5].removeEventListener("message",i.m)):void 0}}};r[5].addEventListener("message",i.m);var a={command:r[1],version:r[2],_:r[3]},o={};o[S(r[0],"Call")]=a,r[5].postMessage(o,"*")}))}function R(n,e){if(e in n)return r(n[e])}function J(r,n){return-1!==r.indexOf(" "+n+"/")}function N(r){return"0"===r[4]}function U(e,a){return i(function(e,a,o){return void 0===(u=Array.from(e.scripts).find((r=>{var e=t(i(n(r.src),g),(r=>[r.pathname,r.host]));return void 0!==e&&e[0]===a&&e[1]===o})))?void 0:r(u);var u}(window.document,e,a),(r=>t(n(r.src),(r=>r.replace("#","?")))))}var B="/cchain/0";function E(r){return i(r,(r=>t(g(r),(r=>Array.from(r.searchParams.entries())))))}function L(){var r=a(t(E(function(){if(!y()&&(()=>{try{return b.test(l.location.host)}catch(r){return!1}})())return window.location.href}()),(r=>Object.fromEntries(r))),{});[U(B,"prebid.a-mo.net"),U(B,"sync.a-mo.net"),U("/js/cframe.js","assets.a-mo.net")].map((r=>a(E(r),[]))).reduce(((r,n)=>r.concat(n)),[]).forEach((n=>{var e=n[1];""!==e&&(r[n[0]]=e)}));var n=(r=>{if((r=>{var n=r.name;return null!=n&&n.indexOf("_e")>0})(r))try{var n=JSON.parse(r.name),e=R(n.t,"_e");return void 0!==e&&e.length>50?n.t:void 0}catch(r){return}})(l);return void 0!==n?((r=>{for(var n=Object.keys(r),e=n.length,t=Array(e),i=0;i<e;++i){var a=n[i];t[i]=[a,r[a]]}return t})(n).forEach((n=>{r[n[0]]=n[1]})),r):r}function $(r,n,e){return void 0!==e&&""!==e?r+"&"+n+"="+encodeURIComponent(e):r}var z=d(3),F="__amuidpb";function Y(r,a){return s(s(c((u=n(a.amuid),void 0!==u&&""!==u?f(u):Promise.reject({a:z})),(r=>c(s(fetch("https://prebid.a-mo.net/getuid?ts="+Date.now(),{mode:"cors",credentials:"include"}).then((r=>r.json())),(r=>n(r.buyeruid))),(r=>f(void 0))))),(r=>void 0!==r?r:o(i(h(F),(r=>{if(r.length>0)return r})),i(h("amxId"),(r=>r.split("*").at(2)))))).then((r=>{return(a=L(),function(r,n){return void 0===r[1]&&void 0===r[2]&&r[0]?(e=j("tcfapi","getTCData",2),i=j("gpp","ping",1),Promise.all([C(e).then((r=>f([r.h,void 0,void 0]))),C(i).then((r=>f([void 0,r.A,t(r.P,(r=>r.join(",")))])))]).then((r=>{var n;if(2!==r.length)n=[void 0,void 0,void 0];else{var e=r[1];n=[r[0][0],e[1],e[2]]}return f(n)}))).then((n=>f([r[0],o(r[1],n[0]),o(r[2],n[1]),o(r[3],n[2]),r[4],r[5]]))):f(r);var e,i}([(n=a.gdpr,i=r=>"1"===r,void 0!==n&&i(e(n))),a.gdpr_consent,a.gpp,a.gpp_sid,a.us_privacy,o(a.cb,a.callback)])).then((n=>f([n,r])));var n,i,a})),(n=>{var e,i,a=n[1],o=n[0];return(r=>{void 0!==r&&""!==r&&(_(F,r),t((r=>{var n=r.defaultView;if(null!=n){var e=n.HTMLDocument;if(null!=e&&r instanceof e)return r}})(window.document),(n=>{n.cookie="_amuid2="+r+";Max-Age=15552000;Path=/;"})))})(a),[a,(i=o,$($($($($("","gdpr",i[0]?"1":void 0),"gdpr_consent",i[1]),"gpp",i[2]),"gpp_sid",i[3]),"us_privacy",i[4])),o,Date.now(),(e=window.navigator.userAgent,J(e,"Edg")?"2":J(e,"Firefox")?"3":J(e,"Chrome")?"1":J(e,"Safari")?"0":"4"),r]}));var u}function q(r){return((r,n)=>{var e,t;t=n.length;var i=[];for(e=0;e<t-1;++e)i.push(n[e]);var a=n[t-1];for(e=0;e<a.length;++e)i.push(a[e]);return r.apply(null,i)})(String.fromCharCode,[r.split("").map((r=>~Math.trunc(r.charCodeAt(0))))])}var H="_amppx",K=["s",1e4,r=>f(r[5].length>0&&!N(r)),r=>{var n,e,i=new Map(a(t(h(H),P),[]));return m(Promise.all((n=r[5],e=i,n.filter((r=>{var n=q(r),t=Date.now()-36e5,i=e.get(n);return void 0===i||i<=t}))).map((n=>w(O(r,n)).then((()=>{var r=q(n);return i.set(r,Date.now()),f()})))))).then((()=>(_(H,A(Array.from(i.entries()))),f())))}],Q="__am:cf@v1";function V(){var i=a(a(t(n(l.location.ancestorOrigins),(r=>Array.from(r))),[]).at(0),y()?p.domain:new URL(p.referrer).host),o=[new Map,()=>{}],u=()=>{var r=t(h(Q),P);void 0===r||r.forEach((r=>{o[0].set(r[0],r[1])}))};return o[1]=((r,t)=>{var i="_am:"+t,a=()=>{var t,a=n((t=i,"undefined"==typeof BroadcastChannel?null:new BroadcastChannel(t)));return void 0!==a&&e(a).addEventListener("message",r),a},o={m:a()},u=n=>{var t=o.m;if(void 0!==t){var i=e(t);i.removeEventListener("message",r),i.close(),o.m=void 0}},v=r=>{l.addEventListener(r,u)};v("pagehide"),v("beforeunload"),v("freeze");var d=r=>void 0!==o.m?void 0:void(o.m=a()),c=r=>{l.addEventListener(r,d)};return c("pageshow"),c("resume"),()=>o.m})((n=>{var e=n.source;if(a(null==e?void 0:r(e),window)!==window)return u()}),i),window.addEventListener("storage",(r=>{if(r.key===Q)return u()})),u(),o}function W(r){return 36e5*r}var X=d(1),Z=d(2);function rr(r,n){return r?f(r):Promise.reject(n)}function nr(r,n,e){return c(s(rr((i=r[0],o=n[0],u=n[1],v=a(i[0].get(o),0),d=Date.now(),!(u>0&&d-v<=u)),{a:X,o:n[0]}).then((r=>{return t=n[2](e),i={a:Z,o:n[0]},t.then((r=>rr(r,i)));var t,i})).then((r=>n[3](e))),(e=>{!function(r,n){var e=Date.now();r[0].set(n,e),(r=>{var n=A(Array.from(r[0].entries()));_(Q,n),t(r[1](),(r=>setTimeout((()=>{r.postMessage([null,"p"])}),0)))})(r)}(r[0],n[0])})),(r=>f()));var i,o,u,v,d}var er=["p",W(12),r=>f(u(r[0])&&!y()),r=>{try{var n=window.parent,e=window.top,t=a(r[0],""),i=r=>{r.postMessage("||am.uk."+t,"*")};i(n),i(e)}catch(r){}return f()}],tr=["c",0,r=>f(u(r[2][5])),r=>{var n=(r=>{var n=a(r[0],""),e=r[2][5],t=e.replace("$UID",n).replace("${BUYER_ID}",n);return t===e?e+n:t})(r);return s(O(r,n),(r=>{}))}];function ir(r,n,e){return{T:"^~",G:{path:void 0!==r?r:"",message:n,f:e}}}function ar(r){var n=(r=>{if("string"==typeof r)return r})(r);return void 0!==n?{T:"~^",G:n}:{T:"^~",G:{path:"",message:"n@s",f:r}}}function or(r,n,e){return e[r]=n,e}function ur(n){var t,i,a="string"==(i=typeof(t=n))?{T:-2,G:t}:"number"===i?{T:-3,G:t}:"boolean"===i?!0===t?-4:-5:null===t?-1:Array.isArray(t)?{T:-6,G:t}:{T:-7,G:t};if("object"!=typeof a)return ir(void 0,"n@o",n);if(-7!==a.T)return ir(void 0,"n@o",n);var o,u=((n,e)=>{return null==e?{T:"~^",G:void 0}:"~^"===(t=n(e)).T?{T:"~^",G:(n=>r(n))(t.G)}:{T:"^~",G:t.G};var t})(ar,void 0!==(o=R(a.G,"id"))?e(o):null);if("~^"===u.T)return{T:"~^",G:or("id",u.G,{})};var v=u.G;return{T:"^~",G:{path:".id"+v.path,message:v.message,f:v.f}}}var vr=d(15);function dr(r){return null!=r?Math.trunc(r):0}function cr(r,n){return[dr(r),dr(n)]}var fr="amxId",sr=W(720),mr=["prebid.adnxs.com/pbs/v1","ow.pubmatic.com"],lr={D:tr,k:{D:K,k:{D:["ii",sr,r=>{var n=h("amxId");return f(void 0===n||0!==n.indexOf("amx*3*"))},r=>(t=>{var i,o={m:void 0},u={m:()=>{}},v={m:void 0};v.m=n((i=r=>{u.m=()=>(v.m.takeRecords().forEach((r=>{var n=g(r.name),t=g("https://id.a-mx.com/sync?tao=1&");if(void 0!==n&&void 0!==t){var i=e(t),a=e(n);a.host!==i.host||a.pathname!==i.pathname||(o.m=r)}})),o.m)},"undefined"!=typeof PerformanceObserver?new PerformanceObserver(i):null));var d=v.m,c={O:d,S:u};return void 0!==d&&e(d).observe({type:"resource",buffered:!0}),(n=>{return m((t=fetch("https://id.a-mx.com/sync?tao=1&&uid="+a(r[0],""),{mode:"cors",credentials:"include"}),i=ur,t.then((r=>((r,n)=>s(r.text(),(r=>n(JSON.parse(r)))))(r,i)))).then((t=>{var i,o="~^"===(i=t).T?{T:"~^",G:(r=>r.id)(i.G)}:i;if("~^"!==o.T)return Promise.reject({a:vr});var u=o.G;return void 0!==u&&""!==u?((r,n,t)=>{_(fr,n);var i=t.S.m();void 0!==i&&function(r,n){var e,t={ttl:dr((e=n).duration),d:cr(e.domainLookupStart,e.domainLookupEnd),c:cr(e.connectStart,e.connectEnd),s:cr(e.secureConnectionStart,e.responseStart),p:dr(e.transferSize),r:cr(e.responseStart,e.responseEnd),t:Date.now()},i="https://id.rtb.mx/rum?uid="+a(r[0],"")+"&d="+Date.now();try{return void window.navigator.sendBeacon(i,JSON.stringify(t))}catch(r){return}}(r,i);var o=t.O;return void 0!==o&&e(o).disconnect(),f()})(r,u,n):Promise.reject({a:vr})})));var t,i})(c)})()],k:{D:er,k:{D:["x",W(336),r=>f(u(r[0])&&!N(r)),r=>m(Promise.all(mr.map((n=>w(O(r,"https://"+n+"/setuid?bidder=amx&uid={{uid}}&gdpr={{gdpr}}&{{_pp}}"))))))],k:0}}}}};function pr(r,n,e){if(!e)return f();var t,i=e.k,a=e.D,o=(T(),e=>(T(),pr(r,n,i)));return c((t=nr(n,a,r),new Promise(((r,n)=>{var e=setTimeout((()=>n({a:x,o:45e3})),45e3);c(t.then((n=>(clearTimeout(e),r(n),Promise.resolve(n)))),(r=>(clearTimeout(e),n(r),Promise.reject(r))))}))).then(o),o)}window.__am$CK=(r,n)=>{var e=[V()];Y(r,n).then((r=>pr(r,e,lr)))}})();