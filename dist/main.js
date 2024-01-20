(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(81),a=t.n(o),r=t(645),c=t.n(r)()(a());c.push([e.id,"* {\n    margin: 0;\n}\n\nbody {\n    background-color: black;\n}\n\n#content {\n    text-align: center;\n}\n\n/* Home Page */\n\n.header {\n    text-align: center;\n    background-color: rgb(0, 0, 0);\n    padding: 2%;\n    color: white;\n}\n\n.selection {\n    margin-top: 1%;\n}\n\na {\n    font-size: 20px;\n    padding-right: 5%;\n    padding-left: 5%;\n}\n\n.middle {\n    background-image: url(\"https://portal.restomontreal.ca/kumamoto-ramen/gallery/images/31_kumamoto_190-2018-05-29.jpg\");\n    margin-top: 1%;\n    height: 65vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.info {\n    text-align: center;\n    margin: auto;\n}\n\n.info > span {\n    color: white;\n    font-size: 70px;\n}\n\n.footer {\n    margin-top: 2%;\n    padding: 2%;\n    background-color: rgb(0, 0, 0);\n    color: white;\n}\n\n/* Menu Page */\n\n.menu {\n    margin-top: 2%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    height: 100vh;\n}\n\n.item {\n    text-align: center;\n    width: 40vw;\n    height: 45vh;\n    margin: auto;\n    display: grid;\n    grid-template-rows: 1fr 5fr;\n}\n\n.food {\n    margin: auto;\n    color: white;\n    font-size: 30px;\n}\n\n#karaage, #takoyaki, #comboOne, #comboTwo {\n    margin: auto;\n    height: 35vh;\n    width: 20vw;\n    border-radius: 10px;\n}\n\n#karaage {\n    background-size: 150%;\n    background-position: 50%;\n    background-image: url('https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/bd351b64-c401-49de-8ab4-8e9384a3f20b-retina-large.JPG');\n}\n\n#takoyaki {\n    background-size: 150%;\n    background-image: url('https://supercheapjapan.files.wordpress.com/2022/11/0df40-takoyaki.jpg');\n}\n\n#comboOne {\n    background-size: 130%;\n    background-position: 50%;\n    background-image: url('https://kumamoto-guide.jp/files/0f477972-c263-408e-8146-8730692da959_m.jpg?1653469110');\n}\n\n#comboTwo {\n    background-size: 140%;\n    background-position: 50%;\n    background-image: url('https://www.thepoortraveler.net/wp-content/uploads/2019/12/Kumamoto-Ramen.jpg');\n}\n\n/* Contact Page */\n\n.contact {\n    height: 95vh;\n}\n\np {\n    margin-top: 2%;\n    font-size: 100px;\n    color: white;\n}\n\n\nh2 {\n    padding: 1%;\n    color: white;\n}\n\nspan {\n    color: white;\n}",""]);const d=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(c[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&c[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},c=[],d=0;d<e.length;d++){var i=e[d],s=o.base?i[0]+o.base:i[0],l=r[s]||0,p="".concat(s," ").concat(l);r[s]=l+1;var u=t(p),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=a(m,o);o.byIndex=d,n.splice(d,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var d=t(r[c]);n[d].references--}for(var i=o(e,a),s=0;s<r.length;s++){var l=t(r[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=i}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),a=t.n(o),r=t(569),c=t.n(r),d=t(565),i=t.n(d),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(426),h={};h.styleTagTransform=u(),h.setAttributes=i(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=function(){const e=document.createElement("div");return e.appendChild(function(){const e=document.createElement("div");e.classList.add("middle");const n=document.createElement("div");n.classList.add("info");const t=document.createElement("span");return t.textContent="The most authentic ramen in all of Montreal!",n.appendChild(t),e.appendChild(n),e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("footer");const n=document.createElement("h4");return n.textContent="Copyright 2024 Samy Chattali",e.appendChild(n),e}()),e}(),g=function(){const e=document.createElement("div");e.classList.add("menu");const n=document.createElement("div");n.classList.add("item");const t=document.createElement("div");t.classList.add("food"),t.textContent="Karaage",n.appendChild(t);const o=document.createElement("div");o.id="karaage",n.appendChild(o);const a=document.createElement("div");a.classList.add("item");const r=document.createElement("div");r.classList.add("food"),r.textContent="Takoyaki",a.appendChild(r);const c=document.createElement("div");c.id="takoyaki",a.appendChild(c);const d=document.createElement("div");d.classList.add("item");const i=document.createElement("div");i.classList.add("food"),i.textContent="Ramen Combo One",d.appendChild(i);const s=document.createElement("div");s.id="comboOne",d.appendChild(s);const l=document.createElement("div");l.classList.add("item");const p=document.createElement("div");p.classList.add("food"),p.textContent="Ramen Combo Two",l.appendChild(p);const u=document.createElement("div");return u.id="comboTwo",l.appendChild(u),e.appendChild(n),e.appendChild(a),e.appendChild(d),e.appendChild(l),e}(),v=function(){const e=document.createElement("div"),n=document.createElement("div");n.id="auRevoir";const t=document.createElement("p");t.textContent="Konbanwa !",n.appendChild(t);const o=document.createElement("div"),a=document.createElement("h2");a.textContent="Kumamoto Ramen",o.appendChild(a);const r=document.createElement("span");r.textContent="1812 Saint-Catherine St W, Montreal, Quebec H3H 1M1",o.appendChild(r);const c=document.createElement("h2");c.textContent="Email Address",o.appendChild(c);const d=document.createElement("span");d.textContent="kumamotoramenmtl@gmail.com",o.appendChild(d);const i=document.createElement("h2");i.textContent="Phone Number",o.appendChild(i);const s=document.createElement("span");return s.textContent="(514) 935-0777",o.appendChild(s),e.appendChild(n),e.appendChild(o),e}(),C=function(){const e=document.createElement("div");return e.appendChild(function(){const e=document.createElement("div");e.classList.add("header");const n=document.createElement("h1");return n.textContent="Kumamoto",e.appendChild(n),e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("selection");const n=document.createElement("a");n.textContent="Home",n.id="home",n.href="#",n.classList.add("select-btn"),e.appendChild(n);const t=document.createElement("a");t.textContent="Menu",t.id="menu",t.href="#",t.classList.add("select-btn"),e.appendChild(t);const o=document.createElement("a");return o.textContent="Contact",o.id="contact",o.href="#",o.classList.add("select-btn"),e.appendChild(o),e}()),e}(),b=document.querySelector("#content"),E=C.querySelectorAll("a");b.appendChild(C),b.appendChild(f);for(const e of E)e.addEventListener("click",(e=>{switch(b.innerHTML="",b.appendChild(C),e.target.id){case"home":b.appendChild(f);break;case"menu":b.appendChild(g);break;case"contact":b.appendChild(v)}}))})()})();