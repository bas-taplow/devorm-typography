"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9314],{8867:(e,t,i)=>{i.d(t,{WG:()=>tN,D2:()=>tU,FJ:()=>tC,Jk:()=>tB,Vi:()=>tx,Hf:()=>tW,U4:()=>tD,S5:()=>t6,st:()=>t1,KR:()=>tZ,GI:()=>ib,IC:()=>it,C$:()=>t5,rN:()=>ie,Pv:()=>t3,Ul:()=>ir,hu:()=>iR,vG:()=>i_,Yz:()=>iw,pD:()=>ik,tq:()=>ia,Zp:()=>iA,WE:()=>iT,n_:()=>iL,$V:()=>tQ,zN:()=>iD,OR:()=>ig,CL:()=>iy});var a=Object.create,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,o=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,d=function(e,t){return function(){return e&&(t=e(e=0)),t}},u=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},c=function(e,t,i,a){if(t&&"object"==typeof t||"function"==typeof t)for(var o,d=s(t),u=0,c=d.length;u<c;u++)o=d[u],l.call(e,o)||o===i||r(e,o,{get:(function(e){return t[e]}).bind(null,o),enumerable:!(a=n(t,o))||a.enumerable});return e},h=function(e,t,i){return i=null!=e?a(o(e)):{},c(!t&&e&&e.__esModule?i:r(i,"default",{value:e,enumerable:!0}),e)},m=u(function(e,t){t.exports="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}});function p(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var v=d(function(){}),b=u(function(e,t){var i;v(),i=function(){var e=function(){},t="undefined",i=("undefined"==typeof window?"undefined":p(window))!==t&&p(window.navigator)!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),a=["trace","debug","info","warn","error"];function r(e,t){var i=e[t];if("function"==typeof i.bind)return i.bind(e);try{return Function.prototype.bind.call(i,e)}catch(t){return function(){return Function.prototype.apply.apply(i,[e,arguments])}}}function n(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function s(t,i){for(var r=0;r<a.length;r++){var n=a[r];this[n]=r<t?e:this.methodFactory(n,t,i)}this.log=this.debug}function o(e,i,a){return function(){("undefined"==typeof console?"undefined":p(console))!==t&&(s.call(this,i,a),this[e].apply(this,arguments))}}function l(a,s,l){var d;return"debug"===(d=a)&&(d="log"),("undefined"==typeof console?"undefined":p(console))!==t&&("trace"===d&&i?n:void 0!==console[d]?r(console,d):void 0!==console.log?r(console,"log"):e)||o.apply(this,arguments)}function d(e,i,r){var n,o=this;i=null==i?"WARN":i;var d="loglevel";function u(){var e;if(!(("undefined"==typeof window?"undefined":p(window))===t||!d)){try{e=window.localStorage[d]}catch(e){}if((void 0===e?"undefined":p(e))===t)try{var i=window.document.cookie,a=i.indexOf(encodeURIComponent(d)+"=");-1!==a&&(e=/^([^;]+)/.exec(i.slice(a))[1])}catch(e){}return void 0===o.levels[e]&&(e=void 0),e}}"string"==typeof e?d+=":"+e:(void 0===e?"undefined":p(e))==="symbol"&&(d=void 0),o.name=e,o.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},o.methodFactory=r||l,o.getLevel=function(){return n},o.setLevel=function(i,r){if("string"==typeof i&&void 0!==o.levels[i.toUpperCase()]&&(i=o.levels[i.toUpperCase()]),"number"==typeof i&&i>=0&&i<=o.levels.SILENT){if(n=i,!1!==r&&function(e){var i=(a[e]||"silent").toUpperCase();if(!(("undefined"==typeof window?"undefined":p(window))===t||!d)){try{window.localStorage[d]=i;return}catch(e){}try{window.document.cookie=encodeURIComponent(d)+"="+i+";"}catch(e){}}}(i),s.call(o,i,e),("undefined"==typeof console?"undefined":p(console))===t&&i<o.levels.SILENT)return"No console available for logging"}else throw"log.setLevel() called with invalid level: "+i},o.setDefaultLevel=function(e){i=e,u()||o.setLevel(e,!1)},o.resetLevel=function(){o.setLevel(i,!1),function(){if(!(("undefined"==typeof window?"undefined":p(window))===t||!d)){try{window.localStorage.removeItem(d);return}catch(e){}try{window.document.cookie=encodeURIComponent(d)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}()},o.enableAll=function(e){o.setLevel(o.levels.TRACE,e)},o.disableAll=function(e){o.setLevel(o.levels.SILENT,e)};var c=u();null==c&&(c=i),o.setLevel(c,!1)}var u=new d,c={};u.getLogger=function(e){if((void 0===e?"undefined":p(e))!=="symbol"&&"string"!=typeof e||""===e)throw TypeError("You must supply a name when creating a logger.");var t=c[e];return t||(t=c[e]=new d(e,u.getLevel(),u.methodFactory)),t};var h=("undefined"==typeof window?"undefined":p(window))!==t?window.log:void 0;return u.noConflict=function(){return("undefined"==typeof window?"undefined":p(window))!==t&&window.log===u&&(window.log=h),u},u.getLoggers=function(){return c},u.default=u,u},"function"==typeof define&&define.amd?define(i):"object"==typeof t&&t.exports?t.exports=i():e.log=i()});function E(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):E(e,t)}var f=d(function(){f()}),g=u(function(e){var t,i=Object.prototype.hasOwnProperty;function a(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function r(e){try{return encodeURIComponent(e)}catch(e){return null}}e.stringify=function(e,a){var n,s,o=[];for(s in"string"!=typeof(a=a||"")&&(a="?"),e)if(i.call(e,s)){if(!(n=e[s])&&(null===n||n===t||isNaN(n))&&(n=""),s=r(s),n=r(n),null===s||null===n)continue;o.push(s+"="+n)}return o.length?a+o.join("&"):""},e.parse=function(e){for(var t,i=/([^=?#&]+)=?([^&]*)/g,r={};t=i.exec(e);){var n=a(t[1]),s=a(t[2]);null===n||null===s||n in r||(r[n]=s)}return r}}),y=u(function(e,t){!function(i){var a=!1;if("function"==typeof define&&define.amd&&(define(i),a=!0),"object"==typeof e&&(t.exports=i(),a=!0),!a){var r=window.Cookies,n=window.Cookies=i();n.noConflict=function(){return window.Cookies=r,n}}}(function(){var e=function(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var a in i)t[a]=i[a]}return t};return function t(i){function a(t,r,n){var s;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(n=e({path:"/"},a.defaults,n)).expires){var o=new Date;o.setMilliseconds(o.getMilliseconds()+864e5*n.expires),n.expires=o}try{s=JSON.stringify(r),/^[\{\[]/.test(s)&&(r=s)}catch(e){}return r=i.write?i.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=t+"="+r+(n.expires?"; expires="+n.expires.toUTCString():"")+(n.path?"; path="+n.path:"")+(n.domain?"; domain="+n.domain:"")+(n.secure?"; secure":"")}t||(s={});for(var l=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<l.length;u++){var c=l[u].split("="),h=c.slice(1).join("=");'"'===h.charAt(0)&&(h=h.slice(1,-1));try{var m=c[0].replace(d,decodeURIComponent);if(h=i.read?i.read(h,m):i(h,m)||h.replace(d,decodeURIComponent),this.json)try{h=JSON.parse(h)}catch(e){}if(t===m){s=h;break}t||(s[m]=h)}catch(e){}}return s}}return a.set=a,a.get=function(e){return a.call(a,e)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(t,i){a(t,"",e(i,{expires:-1}))},a.withConverter=t,a}(function(){})})}),_=u(function(e,t){var i=Array.prototype.slice;t.exports=function(e,t){for(("length"in e)||(e=[e]),e=i.call(e);e.length;){var a=e.shift(),r=t(a);if(r)return r;a.childNodes&&a.childNodes.length&&(e=i.call(a.childNodes).concat(e))}}}),A=u(function(e,t){function i(e,t){if(!E(this,i))return new i(e,t);this.data=e,this.nodeValue=e,this.length=e.length,this.ownerDocument=t||null}f(),t.exports=i,i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),T=u(function(e,t){function i(e,t){if(!E(this,i))return new i(e);this.data=e||"",this.length=this.data.length,this.ownerDocument=t||null}f(),t.exports=i,i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(e,t,i){var a=this.data,r=a.substring(0,e),n=a.substring(e+t,a.length);this.data=r+i+n,this.length=this.data.length}}),k=u(function(e,t){t.exports=function(e){var t=this,i=e.type;e.target||(e.target=t),t.listeners||(t.listeners={});var a=t.listeners[i];if(a)return a.forEach(function(i){e.currentTarget=t,"function"==typeof i?i(e):i.handleEvent(e)});t.parentNode&&t.parentNode.dispatchEvent(e)}}),w=u(function(e,t){t.exports=function(e,t){this.listeners||(this.listeners={}),this.listeners[e]||(this.listeners[e]=[]),-1===this.listeners[e].indexOf(t)&&this.listeners[e].push(t)}}),S=u(function(e,t){t.exports=function(e,t){if(this.listeners&&this.listeners[e]){var i=this.listeners[e],a=i.indexOf(t);-1!==a&&i.splice(a,1)}}}),I=u(function(e,t){v(),t.exports=function e(t){switch(t.nodeType){case 3:return r(t.data);case 8:return"\x3c!--"+t.data+"--\x3e";default:var n,s,o;return s=[],o=(n=t).tagName,"http://www.w3.org/1999/xhtml"===n.namespaceURI&&(o=o.toLowerCase()),s.push("<"+o+function(e){var t=[];for(var i in e)(function(e,t){var i=p(e[t]);return"style"===t&&Object.keys(e.style).length>0||e.hasOwnProperty(t)&&("string"===i||"boolean"===i||"number"===i)&&"nodeName"!==t&&"className"!==t&&"tagName"!==t&&"textContent"!==t&&"innerText"!==t&&"namespaceURI"!==t&&"innerHTML"!==t})(e,i)&&t.push({name:i,value:e[i]});for(var r in e._attributes)for(var n in e._attributes[r]){var s=e._attributes[r][n],o=(s.prefix?s.prefix+":":"")+n;t.push({name:o,value:s.value})}return e.className&&t.push({name:"class",value:e.className}),t.length?a(t):""}(n)+function(e){var t=e.dataset,i=[];for(var r in t)i.push({name:"data-"+r,value:t[r]});return i.length?a(i):""}(n)),i.indexOf(o)>-1?s.push(" />"):(s.push(">"),n.childNodes.length?s.push.apply(s,n.childNodes.map(e)):n.textContent||n.innerText?s.push(r(n.textContent||n.innerText)):n.innerHTML&&s.push(n.innerHTML),s.push("</"+o+">")),s.join("")}};var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(e){var t=[];return e.forEach(function(e){var i=e.name,a=e.value;"style"===i&&(a=function(e){if("string"==typeof e)return e;var t="";return Object.keys(e).forEach(function(i){var a=e[i];i=i.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),t+=i+":"+a+";"}),t}(a)),t.push(i+'="'+r(a).replace(/"/g,"&quot;")+'"')}),t.length?" "+t.join(" "):""}function r(e){var t="";return"string"==typeof e?t=e:e&&(t=e.toString()),t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}),C=u(function(e,t){f();var i=_(),a=k(),r=w(),n=S(),s=I(),o="http://www.w3.org/1999/xhtml";function l(e,t,i){if(!E(this,l))return new l(e);var a=void 0===i?o:i||null;this.tagName=a===o?String(e).toUpperCase():e,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=t||null,this.namespaceURI=a,this._attributes={},"INPUT"===this.tagName&&(this.type="text")}t.exports=l,l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(e){return e.parentNode&&e.parentNode.removeChild(e),this.childNodes.push(e),e.parentNode=this,e},l.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=this.childNodes.indexOf(t);return t.parentNode=null,this.childNodes[i]=e,e.parentNode=this,t},l.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);return this.childNodes.splice(t,1),e.parentNode=null,e},l.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=null==t?-1:this.childNodes.indexOf(t);return i>-1?this.childNodes.splice(i,0,e):this.childNodes.push(e),e.parentNode=this,e},l.prototype.setAttributeNS=function(e,t,i){var a=null,r=t,n=t.indexOf(":");(n>-1&&(a=t.substr(0,n),r=t.substr(n+1)),"INPUT"===this.tagName&&"type"===t)?this.type=i:(this._attributes[e]||(this._attributes[e]={}))[r]={value:i,prefix:a}},l.prototype.getAttributeNS=function(e,t){var i=this._attributes[e],a=i&&i[t]&&i[t].value;return"INPUT"===this.tagName&&"type"===t?this.type:"string"!=typeof a?null:a},l.prototype.removeAttributeNS=function(e,t){var i=this._attributes[e];i&&delete i[t]},l.prototype.hasAttributeNS=function(e,t){var i=this._attributes[e];return!!i&&t in i},l.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)},l.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},l.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)},l.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(e){var t=e.split(" "),a=[];return i(this,function(e){if(1===e.nodeType){var i=(e.className||"").split(" ");t.every(function(e){return -1!==i.indexOf(e)})&&a.push(e)}}),a},l.prototype.getElementsByTagName=function(e){e=e.toLowerCase();var t=[];return i(this.childNodes,function(i){1===i.nodeType&&("*"===e||i.tagName.toLowerCase()===e)&&t.push(i)}),t},l.prototype.contains=function(e){return i(this,function(t){return e===t})||!1}}),R=u(function(e,t){f();var i=C();function a(e){if(!E(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=e||null}t.exports=a,a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(e){return String(e)}).join("")}}),L=u(function(e,t){function i(e){}t.exports=i,i.prototype.initEvent=function(e,t,i){this.type=e,this.bubbles=t,this.cancelable=i},i.prototype.preventDefault=function(){}}),D=u(function(e,t){f();var i=_(),a=A(),r=T(),n=C(),s=R(),o=L(),l=k(),d=w(),u=S();function c(){if(!E(this,c))return new c;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}t.exports=c;var h=c.prototype;h.createTextNode=function(e){return new r(e,this)},h.createElementNS=function(e,t){return new n(t,this,null===e?null:String(e))},h.createElement=function(e){return new n(e,this)},h.createDocumentFragment=function(){return new s(this)},h.createEvent=function(e){return new o(e)},h.createComment=function(e){return new a(e,this)},h.getElementById=function(e){return e=String(e),i(this.childNodes,function(t){if(String(t.id)===e)return t})||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=u,h.addEventListener=d,h.dispatchEvent=l}),x=u(function(e,t){t.exports=new(D())}),M=u(function(e,t){var i,a="undefined"!=typeof global?global:"undefined"!=typeof window?window:{},r=x();"undefined"!=typeof document?i=document:(i=a["__GLOBAL_DOCUMENT_CACHE@4"])||(i=a["__GLOBAL_DOCUMENT_CACHE@4"]=r),t.exports=i});function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],s=!0,o=!1;try{for(i=i.call(e);!(s=(a=i.next()).done)&&(n.push(a.value),!(t&&n.length===t));s=!0);}catch(e){o=!0,r=e}finally{try{s||null==i.return||i.return()}finally{if(o)throw r}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return N(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var P=h(m()),U=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},B=function(){return("000000"+(0x81bf1000*Math.random()|0).toString(36)).slice(-6)},W=function(e){var t;if(e&&void 0!==e.nodeName)return e.muxId||(e.muxId=B()),e.muxId;try{t=document.querySelector(e)}catch(e){}return t&&!t.muxId&&(t.muxId=e),(null==t?void 0:t.muxId)||e},H=function(e){e&&void 0!==e.nodeName?e=W(t=e):t=document.querySelector(e);var t,i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]},V=h(b()),q=V.default.methodFactory;V.default.methodFactory=function(e,t,i){var a=q(e,t,i);return function(){for(var e=["[mux]"],t=0;t<arguments.length;t++)e.push(arguments[t]);a.apply(void 0,e)}},V.default.setLevel(V.default.getLevel());var F=V.default,$=h(m());function K(){return"1"===($.default.doNotTrack||$.default.navigator&&$.default.navigator.doNotTrack)}var j=h(m()),G={now:function(){var e=j.default.performance,t=e&&e.timing,i=t&&t.navigationStart;return Math.round("number"==typeof i&&"function"==typeof e.now?i+e.now():Date.now())}};function Y(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e,t){if(!E(e,t))throw TypeError("Cannot call a class as a function")}function Q(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function z(e,t,i){return t&&Q(e.prototype,t),i&&Q(e,i),e}function X(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}f(),v();var et=function(e){return ei(e)[0]},ei=function(e){if("string"!=typeof e||""===e)return["localhost"];var t,i=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return i&&(t=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,t]},ea=h(m()),er={exists:function(){var e=ea.default.performance;return void 0!==(e&&e.timing)},domContentLoadedEventEnd:function(){var e=ea.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},navigationStart:function(){var e=ea.default.performance,t=e&&e.timing;return t&&t.navigationStart}};function en(e,t,i){i=void 0===i?1:i,e[t]=e[t]||0,e[t]+=i}function es(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){X(e,t,i[t])})}return e}function eo(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i.push.apply(i,a)}return i})(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}var el=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],ed=["x-cdn","content-type"].concat(el);function eu(e){var t={};return(e=e||"").trim().split(/[\r\n]+/).forEach(function(e){if(e){var i=e.split(": "),a=i.shift();a&&(ed.indexOf(a.toLowerCase())>=0||0===a.toLowerCase().indexOf("x-litix-"))&&(t[a]=i.join(": "))}}),t}function ec(e){if(e){var t=el.find(function(t){return void 0!==e[t]});return t?e[t]:void 0}}var eh=function(e){var t={};for(var i in e){var a=e[i];-1!==a["DATA-ID"].search("io.litix.data.")&&(t[a["DATA-ID"].replace("io.litix.data.","")]=a.VALUE)}return t},em=function(e){if(!e)return{};var t=er.navigationStart(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},ep=function(e){if(!(!e||"function"!=typeof e.getAllResponseHeaders))return eu(e.getAllResponseHeaders())},ev=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(e){var t,i=parseInt(a.version);return 1===i&&null!==e.programDateTime&&(t=e.programDateTime),0===i&&null!==e.pdt&&(t=e.pdt),t};if(!er.exists())return void r.warn("performance timing not supported. Not tracking HLS.js.");var o=function(i,a){return e.emit(t,i,a)},l=function(e,t){var i=t.levels,a=t.audioTracks,r=t.url,n=t.stats,s=t.networkDetails,l=t.sessionData,d={},u={};i.forEach(function(e,t){d[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),a.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var c=em(n),h=c.bytesLoaded,m=c.requestStart,p=c.responseStart,v=c.responseEnd;o("requestcompleted",eo(es({},eh(l)),{request_event_type:e,request_bytes_loaded:h,request_start:m,request_response_start:p,request_response_end:v,request_type:"manifest",request_hostname:et(r),request_response_headers:ep(s),request_rendition_lists:{media:d,audio:u,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(e,t){var i=t.details,a=t.level,r=t.networkDetails,l=em(t.stats),d=l.bytesLoaded,u=l.requestStart,c=l.responseStart,h=l.responseEnd,m=i.fragments[i.fragments.length-1],p=s(m)+n(m.duration);o("requestcompleted",{request_event_type:e,request_bytes_loaded:d,request_start:u,request_response_start:c,request_response_end:h,request_current_level:a,request_type:"manifest",request_hostname:et(i.url),request_response_headers:ep(r),video_holdback:i.holdBack&&n(i.holdBack),video_part_holdback:i.partHoldBack&&n(i.partHoldBack),video_part_target_duration:i.partTarget&&n(i.partTarget),video_target_duration:i.targetduration&&n(i.targetduration),video_source_is_live:i.live,player_manifest_newest_program_time:isNaN(p)?void 0:p})};i.on(a.Events.LEVEL_LOADED,d);var u=function(e,t){var i=t.details,a=t.networkDetails,r=em(t.stats);o("requestcompleted",{request_event_type:e,request_bytes_loaded:r.bytesLoaded,request_start:r.requestStart,request_response_start:r.responseStart,request_response_end:r.responseEnd,request_type:"manifest",request_hostname:et(i.url),request_response_headers:ep(a)})};i.on(a.Events.AUDIO_TRACK_LOADED,u);var c=function(e,t){var a=t.stats,r=t.networkDetails,n=t.frag,s=em(a=a||n.stats),l=s.bytesLoaded,d=s.requestStart,u=s.responseStart,c=s.responseEnd,h=r?ep(r):void 0,m={request_event_type:e,request_bytes_loaded:l,request_start:d,request_response_start:u,request_response_end:c,request_hostname:r?et(r.responseURL):void 0,request_id:h?ec(h):void 0,request_response_headers:h,request_media_duration:n.duration,request_url:null==r?void 0:r.responseURL};"main"===n.type?(m.request_type="media",m.request_current_level=n.level,m.request_video_width=(i.levels[n.level]||{}).width,m.request_video_height=(i.levels[n.level]||{}).height,m.request_labeled_bitrate=(i.levels[n.level]||{}).bitrate):m.request_type=n.type,o("requestcompleted",m)};i.on(a.Events.FRAG_LOADED,c);var h=function(e,t){var i=t.frag,a=i.start;o("fragmentchange",{currentFragmentPDT:s(i),currentFragmentStart:n(a)})};i.on(a.Events.FRAG_CHANGED,h);var m=function(e,t){var i,r=t.type,n=t.details,s=t.response,l=t.fatal,d=t.frag,u=t.networkDetails,c=(null==d?void 0:d.url)||t.url||"",h=u?ep(u):void 0;(n===a.ErrorDetails.MANIFEST_LOAD_ERROR||n===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT||n===a.ErrorDetails.LEVEL_LOAD_ERROR||n===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:n,request_url:c,request_hostname:et(c),request_id:h?ec(h):void 0,request_type:n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==s?void 0:s.code,request_error_text:null==s?void 0:s.text}),l&&o("error",{player_error_code:r,player_error_message:n,player_error_context:"".concat(c?"url: ".concat(c,"\n"):"")+"".concat(s&&(s.code||s.text)?"response: ".concat(s.code,", ").concat(s.text,"\n"):"")+"".concat(t.reason?"failure reason: ".concat(t.reason,"\n"):"")+"".concat(t.level?"level: ".concat(t.level,"\n"):"")+"".concat(t.parent?"parent stream controller: ".concat(t.parent,"\n"):"")+"".concat(t.buffer?"buffer length: ".concat(t.buffer,"\n"):"")+"".concat(t.error?"error: ".concat(t.error,"\n"):"")+"".concat(t.event?"event: ".concat(t.event,"\n"):"")+"".concat(t.err?"error message: ".concat(null==(i=t.err)?void 0:i.message,"\n"):"")})};i.on(a.Events.ERROR,m);var p=function(e,t){var i=t.frag,a=i&&i._url||"";o("requestcanceled",{request_event_type:e,request_url:a,request_type:"media",request_hostname:et(a)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p);var v=function(e,t){var a=t.level,n=i.levels[a];if(n&&n.attrs&&n.attrs.BANDWIDTH){var s,l=n.attrs.BANDWIDTH,d=parseFloat(n.attrs["FRAME-RATE"]);isNaN(d)||(s=d),l?o("renditionchange",{video_source_fps:s,video_source_bitrate:l,video_source_width:n.width,video_source_height:n.height,video_source_rendition_name:n.name,video_source_codec:null==n?void 0:n.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,v),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,u),i.off(a.Events.FRAG_LOADED,c),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,m),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p),i.off(a.Events.LEVEL_SWITCHED,v),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},eb=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},eE=function(e,t){if(!e||!e.requestEndDate)return{};var i,a=et(e.url),r=e.url,n=e.bytesLoaded,s=new Date(e.requestStartDate).getTime(),o=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),d=isNaN(e.duration)?0:e.duration,u="function"==typeof t.getMetricsFor?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType);u.length>0&&(i=eu(u[u.length-1]._responseHeaders||""));var c=i?ec(i):void 0;return{requestStart:s,requestResponseStart:o,requestResponseEnd:l,requestBytesLoaded:n,requestResponseHeaders:i,requestMediaDuration:d,requestHostname:a,requestUrl:r,requestId:c}},ef=function(e,t){var i=t.getQualityFor(e),a=t.getCurrentTrackFor(e).bitrateList;return a?{currentLevel:i,renditionWidth:a[i].width||null,renditionHeight:a[i].height||null,renditionBitrate:a[i].bandwidth}:{}},eg=function(e){var t;return null==(t=e.match(/.*codecs\*?="(.*)"/))?void 0:t[1]},ey=function(e){try{var t,i;return null==(i=e.getVersion)||null==(t=i.call(e))?void 0:t.split(".").map(function(e){return parseInt(e)})[0]}catch(e){return!1}},e_=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=e.log;if(!i||!i.on)return void a.warn("Invalid dash.js player reference. Monitoring blocked.");var r=ey(i),n=function(i,a){return e.emit(t,i,a)},s=function(e){var t=e.type,i=(e.data||{}).url;n("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:et(i),request_url:i})};i.on("manifestLoaded",s);var o={},l=function(e){if("function"!=typeof e.getRequests)return null;var t=e.getRequests({state:"executed"});return 0===t.length?null:t[t.length-1]},d=function(e){var t=e.type,a=e.chunk,r=e.request,s=(a||{}).mediaInfo||{},l=s.type,d=s.bitrateList,u={};(d=d||[]).forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),"video"===l?o.video=u:"audio"===l?o.audio=u:o.media=u;var c=eE(r,i),h=c.requestStart,m=c.requestResponseStart,p=c.requestResponseEnd,v=c.requestResponseHeaders,b=c.requestMediaDuration,E=c.requestHostname,f=c.requestUrl;n("requestcompleted",{request_event_type:t,request_start:h,request_response_start:m,request_response_end:p,request_bytes_loaded:-1,request_type:l+"_init",request_response_headers:v,request_hostname:E,request_id:c.requestId,request_url:f,request_media_duration:b,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",d):i.on("initFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;d({type:t,request:l(i),chunk:a})});var u=function(e){var t=e.type,a=e.chunk,r=e.request,s=a||{},o=s.mediaInfo,l=s.start,d=(o||{}).type,u=eE(r,i),c=u.requestStart,h=u.requestResponseStart,m=u.requestResponseEnd,p=u.requestBytesLoaded,v=u.requestResponseHeaders,b=u.requestMediaDuration,E=u.requestHostname,f=u.requestUrl,g=u.requestId,y=ef(d,i),_=y.currentLevel,A=y.renditionWidth,T=y.renditionHeight;n("requestcompleted",{request_event_type:t,request_start:c,request_response_start:h,request_response_end:m,request_bytes_loaded:p,request_type:d,request_response_headers:v,request_hostname:E,request_id:g,request_url:f,request_media_start_time:l,request_media_duration:b,request_current_level:_,request_labeled_bitrate:y.renditionBitrate,request_video_width:A,request_video_height:T})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;u({type:t,request:l(i),chunk:a})});var c={video:void 0,audio:void 0,totalBitrate:void 0},h=function(){if(c.video&&"number"==typeof c.video.bitrate){if(!(c.video.width&&c.video.height))return void a.warn("have bitrate info for video but missing width/height");var e=c.video.bitrate;if(c.audio&&"number"==typeof c.audio.bitrate&&(e+=c.audio.bitrate),e!==c.totalBitrate)return c.totalBitrate=e,{video_source_bitrate:e,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:eg(c.video.codec)}}},m=function(e,t,r){if("number"!=typeof e.newQuality)return void a.warn("missing evt.newQuality in qualityChangeRendered event",e);var s=e.mediaType;if("audio"===s||"video"===s){var o=i.getBitrateInfoListFor(s).find(function(t){return t.qualityIndex===e.newQuality});if(!(o&&"number"==typeof o.bitrate))return void a.warn("missing bitrate info for ".concat(s));c[s]=eo(es({},o),{codec:i.getCurrentTrackFor(s).codec});var l=h();l&&n("renditionchange",l)}};i.on("qualityChangeRendered",m);var p=function(e){var t=e.request,i=e.mediaType;n("requestcanceled",{request_event_type:(t=t||{}).type+"_"+t.action,request_url:t.url,request_type:i,request_hostname:et(t.url)})};i.on("fragmentLoadingAbandoned",p);var v=function(e){var t,i,a=e.error,r=(null==a||null==(t=a.data)?void 0:t.request)||{},s=(null==a||null==(i=a.data)?void 0:i.response)||{};(null==a?void 0:a.code)===27&&n("requestfailed",{request_error:r.type+"_"+r.action,request_url:r.url,request_hostname:et(r.url),request_type:r.mediaType,request_error_code:s.status,request_error_text:s.statusText});var o="".concat(null!=r&&r.url?"url: ".concat(r.url,"\n"):"")+"".concat(null!=s&&s.status||null!=s&&s.statusText?"response: ".concat(null==s?void 0:s.status,", ").concat(null==s?void 0:s.statusText,"\n"):"");n("error",{player_error_code:null==a?void 0:a.code,player_error_message:null==a?void 0:a.message,player_error_context:o})};i.on("error",v),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",d),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",m),i.off("error",v),i.off("fragmentLoadingAbandoned",p),delete i._stopMuxMonitor}},eA=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},eT=0,ek=function(){function e(){Z(this,e),X(this,"_listeners",void 0)}return z(e,[{key:"on",value:function(e,t,i){return t._eventEmitterGuid=t._eventEmitterGuid||++eT,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],i&&(t=t.bind(i)),this._listeners[e].push(t),t}},{key:"off",value:function(e,t){var i=this._listeners&&this._listeners[e];i&&i.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&i.splice(a,1)})}},{key:"one",value:function(e,t,i){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++eT;var r=function(){a.off(e,r),t.apply(i||this,arguments)};r._eventEmitterGuid=t._eventEmitterGuid,this.on(e,r)}},{key:"emit",value:function(e,t){var i=this;if(this._listeners){t=t||{};var a=this._listeners["before*"]||[],r=this._listeners[e]||[],n=this._listeners["after"+e]||[],s=function(t,a){(t=t.slice()).forEach(function(t){t.call(i,{type:e},a)})};s(a,t),s(r,t),s(n,t)}}}]),e}(),ew=h(m()),eS=function(){function e(t){var i=this;Z(this,e),X(this,"_playbackHeartbeatInterval",void 0),X(this,"_playheadShouldBeProgressing",void 0),X(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){i._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){null!==i._playbackHeartbeatInterval&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(e,a){null!==i._playbackHeartbeatInterval&&(ew.default.clearInterval(i._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:a.viewer_time}),i._playbackHeartbeatInterval=null)})}return z(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=ew.default.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(ew.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e}(),eI=function e(t){var i=this;Z(this,e),X(this,"viewErrored",void 0),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(e,a){try{var r=t.errorTranslator({player_error_code:a.player_error_code,player_error_message:a.player_error_message,player_error_context:a.player_error_context,player_error_severity:a.player_error_severity,player_error_business_exception:a.player_error_business_exception});r&&(t.data.player_error_code=r.player_error_code||a.player_error_code,t.data.player_error_message=r.player_error_message||a.player_error_message,t.data.player_error_context=r.player_error_context||a.player_error_context,t.data.player_error_severity=r.player_error_severity||a.player_error_severity,t.data.player_error_business_exception=r.player_error_business_exception||a.player_error_business_exception,i.viewErrored=!0)}catch(e){t.mux.log.warn("Exception in error translator callback.",e),i.viewErrored=!0}}),t.on("aftererror",function(){var e,i,a,r,n;null==(e=t.data)||delete e.player_error_code,null==(i=t.data)||delete i.player_error_message,null==(a=t.data)||delete a.player_error_context,null==(r=t.data)||delete r.player_error_severity,null==(n=t.data)||delete n.player_error_business_exception})},eC=function(){function e(t){Z(this,e),X(this,"_watchTimeTrackerLastCheckedTime",void 0),X(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return z(e,[{key:"_updateWatchTime",value:function(e,t){var i=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=i),en(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),eR=function(){function e(t){var i=this;Z(this,e),X(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),X(this,"_lastTime",void 0),X(this,"_isAdPlaying",void 0),X(this,"_callbackUpdatePlaybackTime",void 0),X(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=G.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null;var a=this._startPlaybackTimeTracking.bind(this);t.on("playing",a),t.on("adplaying",a),t.on("seeked",a);var r=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",r),t.on("seeking",r),t.on("adplaying",function(){i._isAdPlaying=!0}),t.on("adended",function(){i._isAdPlaying=!1}),t.on("adpause",function(){i._isAdPlaying=!1}),t.on("adbreakstart",function(){i._isAdPlaying=!1}),t.on("adbreakend",function(){i._isAdPlaying=!1}),t.on("adplay",function(){i._isAdPlaying=!1}),t.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=G.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return z(e,[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time,t=G.now(),i=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?i=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(i=t-this._lastTime),i>0&&i<=1e3&&en(this.pm.data,"view_content_playback_time",i),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}]),e}(),eL=function(){function e(t){Z(this,e),X(this,"pm",void 0),this.pm=t;var i=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",i),t.on("playbackheartbeatend",i),t.on("timeupdate",i),t.on("destroy",function(){t.off("timeupdate",i)})}return z(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,t){var i=this,a=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,a(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var r=this.pm.getPlayheadTime();void 0!==r&&(this.pm.data.player_playhead_time=r,a(),this._updateMaxPlayheadPosition())}}}]),e}(),eD=function e(t){if(Z(this,e),!t.disableRebufferTracking){var i,a=function(e,t){r(t),i=void 0},r=function(e){if(i){var a=e.viewer_time-i;en(t.data,"view_rebuffer_duration",a),i=e.viewer_time,t.data.view_rebuffer_duration>3e5&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(e,t){return r(t)}),t.on("rebufferstart",function(e,r){i||(en(t.data,"view_rebuffer_count",1),i=r.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},ex=function(){function e(t){var i=this;Z(this,e),X(this,"_lastCheckedTime",void 0),X(this,"_lastPlayheadTime",void 0),X(this,"_lastPlayheadTimeUpdatedTime",void 0),X(this,"_rebuffering",void 0),X(this,"pm",void 0),this.pm=t,t.disableRebufferTracking||t.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:G.now()})}))}return z(e,[{key:"_checkIfRebuffering",value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing)return void this._cleanupRebufferTracker(e,t);if(null===this._lastCheckedTime)return void this._prepareRebufferTrackerState(t.viewer_time);if(this._lastPlayheadTime!==this.pm.data.player_playhead_time)return void this._cleanupRebufferTracker(e,t,!0);var i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return;var a=this.pm.data.player_playhead_time-this._lastPlayheadTime,r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&a>0&&r-a>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+r-a}))}i?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}]),e}(),eM=function(){function e(t){var i=this;Z(this,e),X(this,"NAVIGATION_START",void 0),X(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var e=t.data,a=e.view_id;if(!e.view_program_changed){var r=function(e,r){var n=r.viewer_time;"playing"===e.type&&void 0===t.data.view_time_to_first_frame?i.calculateTimeToFirstFrame(n||G.now(),a):"adplaying"===e.type&&(void 0===t.data.view_time_to_first_frame||i._inPrerollPosition())&&i.calculateTimeToFirstFrame(n||G.now(),a)};t.one("playing",r),t.one("adplaying",r),t.one("viewend",function(){t.off("playing",r),t.off("adplaying",r)})}})}return z(e,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.NAVIGATION_START&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.NAVIGATION_START))}}]),e}(),eN=function e(t){var i=this;Z(this,e),X(this,"_lastPlayerHeight",void 0),X(this,"_lastPlayerWidth",void 0),X(this,"_lastPlayheadPosition",void 0),X(this,"_lastSourceHeight",void 0),X(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb"].forEach(function(e){t.on(e,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var e=t.data.player_playhead_time-i._lastPlayheadPosition;if(e<0){i._lastPlayheadPosition=-1;return}var a=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),r=Math.max(0,a-1),n=Math.max(0,1-a);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,r),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,n),en(t.data,"view_total_content_playback_time",e),en(t.data,"view_total_upscaling",r*e),en(t.data,"view_total_downscaling",n*e)}i._lastPlayheadPosition=-1})}),["playing","hb"].forEach(function(e){t.on(e,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},eO=function e(t){var i=this;Z(this,e),X(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var e=G.now(),r=(t.data.viewer_time||e)-(a||e);en(t.data,"view_seek_duration",r),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,r),i.isSeeking=!1,a=-1};t.on("seeking",function(e,n){if(Object.assign(t.data,n),i.isSeeking&&n.viewer_time-a<=2e3){a=n.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=n.viewer_time,en(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},eP=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},eU=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],eB=function(){function e(t){var i=this;Z(this,e),X(this,"_adHasPlayed",void 0),X(this,"_adRequests",void 0),X(this,"_adResponses",void 0),X(this,"_currentAdRequestNumber",void 0),X(this,"_currentAdResponseNumber",void 0),X(this,"_prerollPlayTime",void 0),X(this,"_wouldBeNewAdPlay",void 0),X(this,"isAdBreak",void 0),X(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),eU.forEach(function(e){return t.on(e,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};t.on("adbreakstart",function(){i.isAdBreak=!0}),t.on("play",a),t.on("playing",a),t.on("viewend",a),t.on("adrequest",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},a),eP(i._adRequests,a),en(t.data,"view_ad_request_count"),i.inPrerollPosition()&&(t.data.view_preroll_requested=!0,i._adHasPlayed||en(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},a),eP(i._adResponses,a);var r=i.findAdRequest(a.ad_request_id);r&&en(t.data,"view_ad_request_time",Math.max(0,a.viewer_time-r.viewer_time))}),t.on("adplay",function(e,a){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,en(t.data,"view_ad_played_count")),i.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,i._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,a.viewer_time-i._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,a.viewer_time-t.data.view_start)),i._prerollPlayTime=a.viewer_time)}),t.on("adplaying",function(e,a){i.inPrerollPosition()&&void 0===t.data.view_preroll_load_time&&void 0!==i._prerollPlayTime&&(t.data.view_preroll_load_time=a.viewer_time-i._prerollPlayTime,t.data.view_startup_preroll_load_time=a.viewer_time-i._prerollPlayTime)}),t.on("adclicked",function(e,a){i._wouldBeNewAdPlay||en(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(e,a){i._wouldBeNewAdPlay||en(t.data,"view_ad_skipped_count")}),t.on("adended",function(){i._wouldBeNewAdPlay=!0}),t.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return z(e,[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:"_updateAdData",value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var i=O(ei(t.ad_tag_url),2),a=i[0],r=i[1];this.pm.data.view_preroll_ad_tag_domain=r,this.pm.data.view_preroll_ad_tag_hostname=a}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var n=O(ei(t.ad_asset_url),2),s=n[0],o=n[1];this.pm.data.view_preroll_ad_asset_domain=o,this.pm.data.view_preroll_ad_asset_hostname=s}}this.pm.data.ad_asset_url=null==t?void 0:t.ad_asset_url,this.pm.data.ad_tag_url=null==t?void 0:t.ad_tag_url,this.pm.data.ad_creative_id=null==t?void 0:t.ad_creative_id,this.pm.data.ad_id=null==t?void 0:t.ad_id,this.pm.data.ad_universal_id=null==t?void 0:t.ad_universal_id}}]),e}(),eW=h(m()),eH=function e(t){Z(this,e);var i,a,r=function(){t.disableRebufferTracking||(en(t.data,"view_waiting_rebuffer_count",1),i=G.now(),a=eW.default.setInterval(function(){if(i){var e=G.now();en(t.data,"view_waiting_rebuffer_duration",e-i),i=e}},250))},n=function(){t.disableRebufferTracking||i&&(en(t.data,"view_waiting_rebuffer_duration",G.now()-i),i=!1,eW.default.clearInterval(a))},s=!1,o=function(){s=!0},l=function(){s=!1,n()};t.on("waiting",function(){s&&r()}),t.on("playing",function(){n(),o()}),t.on("pause",l),t.on("seeking",l)},eV=function e(t){var i=this;Z(this,e),X(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=G.now(),t.on("before*",r)},r=function(e){var a=G.now(),r=i.lastWallClockTime;i.lastWallClockTime=a,a-r>3e4&&(t.emit("devicesleep",{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:a}),Object.assign(t.data,{viewer_time:a}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},eq=h(m()),eF=h(g()),e$=h(y()),eK="muxData",ej=function(){var e;try{e=eF.default.parse(e$.default.get(eK)||"")}catch(t){e={}}return e},eG=function(e){try{e$.default.set(eK,eF.default.stringify(e),{expires:365})}catch(e){}},eY=function(){var e=ej();return e.mux_viewer_id=e.mux_viewer_id||U(),e.msn=e.msn||Math.random(),eG(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},eZ=function(){var e=ej(),t=G.now();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=U(),e.sst=t),e.sex=t+15e5,eG(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}},eQ=h(m()),ez=function(){var e;switch(eX()){case"cellular":e="cellular";break;case"ethernet":e="wired";break;case"wifi":e="wifi";break;case void 0:break;default:e="other"}return e},eX=function(){var e=eQ.default.navigator,t=e&&(e.connection||e.mozConnection||e.webkitConnection);return t&&t.type};ez.getConnectionFromAPI=eX;var eJ=e1({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),e0=e1({ad:"ad",ag:"aggregate",ap:"api",al:"application",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ck:"clicked",cl:"canceled",cn:"config",co:"count",ce:"counter",cp:"complete",cr:"creative",ct:"content",cu:"current",cx:"connection",cz:"context",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pr:"preload",ps:"position",pt:"part",py:"property",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function e1(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function e2(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),s=n[0],o=eJ[s];o||(F.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),e0[e]?o+=e0[e]:Number(e)&&Math.floor(Number(e))===Number(e)?o+=e:(F.info("Data key word `"+e+"` not expected in "+a),o+="_"+e+"_")}),r?i[o]=e[a]:t[o]=e[a]}}),Object.assign(t,i)}var e3=h(m()),e5={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},e4=["hb","requestcompleted","requestfailed","requestcanceled"],e9=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},e5,t)};e9.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},e9.prototype.flushEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&1===this._eventQueue.length)return void this._eventQueue.pop();this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()},e9.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),e3.default.clearTimeout(this._sendTimeout)},e9.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],e2({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);e8(this._beaconUrl,i,!0,function(){})},e9.prototype._sendBeaconQueue=function(){var e=this;if(!this._postInFlight){var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=G.now();e8(this._beaconUrl,i,!1,function(i,r){r?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,F.info("Error sending beacon: "+r)):e._failureCount=0,e._roundTripTime=G.now()-a,e._postInFlight=!1})}},e9.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},e9.prototype._startBeaconSending=function(){var e=this;e3.default.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=e3.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},e9.prototype._createPayload=function(e){var t=this,i={transmission_timestamp:Math.round(G.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){n=(a=JSON.stringify({metadata:i,events:r||e})).length/1024},o=function(){return n<=t._options.maxPayloadKBSize};return s(),o()||(F.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(e){return -1===e4.indexOf(e.e)}),s()),o()||(F.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(e){for(var t in e){var i=e[t];"string"==typeof i&&i.length>51200&&(e[t]=i.substring(0,51200))}}),s()),a};var e8=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t))return void a();if(e3.default.fetch)return void e3.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:t.length<=57344}).then(function(e){return a(null,e.ok?null:"Error")}).catch(function(e){return a(null,e)});if(e3.default.XMLHttpRequest){var r=new e3.default.XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState)return a(null,200!==r.status?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}a()},e7=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception"],e6=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],te=["ad_id","ad_creative_id","ad_universal_id"],tt=["viewstart","error","ended","viewend"],ti=function(){function e(t,i){var a,r,n,s,o,l,d,u,c,h,m,p,v,b,E,f,g,y,_,A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Z(this,e),X(this,"mux",void 0),X(this,"envKey",void 0),X(this,"options",void 0),X(this,"eventQueue",void 0),X(this,"sampleRate",void 0),X(this,"disableCookies",void 0),X(this,"respectDoNotTrack",void 0),X(this,"previousBeaconData",void 0),X(this,"lastEventTime",void 0),X(this,"rateLimited",void 0),X(this,"pageLevelData",void 0),X(this,"viewerData",void 0),this.mux=t,this.envKey=i,this.options=A,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new e9((a=this.envKey,n=(r=this.options).beaconCollectionDomain,s=r.beaconDomain,n?"https://"+n:(a=a||"inferred").match(/^[a-z0-9]+$/)?"https://"+a+"."+(s||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!=(g=this.options.sampleRate)?g:1,this.disableCookies=null!=(y=this.options.disableCookies)&&y,this.respectDoNotTrack=null!=(_=this.options.respectDoNotTrack)&&_,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null==(o=this.options.platform)?void 0:o.name,viewer_application_version:null==(l=this.options.platform)?void 0:l.version,viewer_application_engine:null==(d=this.options.platform)?void 0:d.layout,viewer_device_name:null==(u=this.options.platform)?void 0:u.product,viewer_device_category:"",viewer_device_manufacturer:null==(c=this.options.platform)?void 0:c.manufacturer,viewer_os_family:null==(m=this.options.platform)||null==(h=m.os)?void 0:h.family,viewer_os_architecture:null==(v=this.options.platform)||null==(p=v.os)?void 0:p.architecture,viewer_os_version:null==(E=this.options.platform)||null==(b=E.os)?void 0:b.version,viewer_connection_type:ez(),page_url:null===eq.default||void 0===eq.default||null==(f=eq.default.location)?void 0:f.href},this.viewerData=this.disableCookies?{}:eY()}return z(e,[{key:"send",value:function(e,t){if(!(!e||!(null!=t&&t.view_id))){if(this.respectDoNotTrack&&K())return F.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!=typeof t)return F.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:eZ(),a=eo(es({},this.pageLevelData,t,i,this.viewerData),{event:e,env_key:this.envKey});a.user_id&&(a.viewer_user_id=a.user_id,delete a.user_id);var r,n=(null!=(r=a.mux_sample_number)?r:0)>=this.sampleRate,s=e2(this._deduplicateBeaconData(e,a));if(this.lastEventTime=this.mux.utils.now(),n)return F.info("Not sending event due to sample rate restriction",e,a,s);if(this.envKey||F.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,a,s),!this.rateLimited){if(F.info("Sending event",e,a,s),this.rateLimited=!this.eventQueue.queueEvent(e,s),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else if(this.mux.WINDOW_HIDDEN&&"hb"===e?this.eventQueue.flushEvents(!0):tt.indexOf(e)>=0&&this.eventQueue.flushEvents(),this.rateLimited)return a.event="eventrateexceeded",s=e2(a),this.eventQueue.queueEvent(a.event,s),F.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,t){var i=this,a={},r=t.view_id;if("-1"===r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)a=es({},t),r&&(this.previousBeaconData=a),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.entries(t).forEach(function(t){var r=O(t,2),s=r[0],o=r[1];i.previousBeaconData&&(o!==i.previousBeaconData[s]||e7.indexOf(s)>-1||i.objectHasChanged(n,s,o,i.previousBeaconData[s])||i.eventRequiresKey(e,s))&&(a[s]=o,i.previousBeaconData[s]=o)})}return a}},{key:"objectHasChanged",value:function(e,t,i,a){return!!e&&0===t.indexOf("request_")&&("request_response_headers"===t||"object"!=typeof i||"object"!=typeof a||Object.keys(i||{}).length!==Object.keys(a||{}).length)}},{key:"eventRequiresKey",value:function(e,t){return!!("renditionchange"===e&&0===t.indexOf("video_source_")||te.includes(t)&&e6.includes(e))}}]),e}(),ta=function e(t){Z(this,e);var i=0,a=0,r=0,n=0,s=0,o=0,l=0;t.on("requestcompleted",function(e,o){var l,d,u=o.request_start,c=o.request_response_start,h=o.request_response_end,m=o.request_bytes_loaded;if(n++,c?(l=c-(null!=u?u:0),d=(null!=h?h:0)-c):d=(null!=h?h:0)-(null!=u?u:0),d>0&&m&&m>0){var p=m/d*8e3;s++,a+=m,r+=d,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,p),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,l>0&&(i+=l,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,l),t.data.view_average_request_latency=i/s)}}),t.on("requestfailed",function(e,i){n++,o++,t.data.view_request_count=n,t.data.view_request_failed_count=o}),t.on("requestcanceled",function(e,i){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l})},tr=function e(t){var i=this;Z(this,e),X(this,"_lastEventTime",void 0),t.on("before*",function(e,a){var r=a.viewer_time,n=G.now(),s=i._lastEventTime;if(i._lastEventTime=n,s&&n-s>36e5){var o=Object.keys(t.data).reduce(function(e,i){return 0===i.indexOf("video_")?Object.assign(e,X({},i,t.data[i])):e},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view"),t.emit("viewinit",Object.assign({viewer_time:r},o)),t.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==e.type&&"adbreakstart"!==e.type&&(t.emit("play",{viewer_time:r}),"playing"!==e.type&&t.emit("playing",{viewer_time:r}))}})},tn=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange"],ts=function(e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),e&&J(a,e);var t,i=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,i=ee(a);return e=t?Reflect.construct(i,arguments,ee(this).constructor):i.apply(this,arguments),e&&("object"===p(e)||"function"==typeof e)?e:Y(this)});function a(e,t,r){Z(this,a),X(Y(n=i.call(this)),"DOM_CONTENT_LOADED_EVENT_END",void 0),X(Y(n),"NAVIGATION_START",void 0),X(Y(n),"_destroyed",void 0),X(Y(n),"_heartBeatTimeout",void 0),X(Y(n),"adTracker",void 0),X(Y(n),"dashjs",void 0),X(Y(n),"data",void 0),X(Y(n),"disablePlayheadRebufferTracking",void 0),X(Y(n),"disableRebufferTracking",void 0),X(Y(n),"errorTracker",void 0),X(Y(n),"errorTranslator",void 0),X(Y(n),"getAdData",void 0),X(Y(n),"getPlayheadTime",void 0),X(Y(n),"getStateData",void 0),X(Y(n),"hlsjs",void 0),X(Y(n),"id",void 0),X(Y(n),"longResumeTracker",void 0),X(Y(n),"minimumRebufferDuration",void 0),X(Y(n),"mux",void 0),X(Y(n),"oldEmit",void 0),X(Y(n),"playbackEventDispatcher",void 0),X(Y(n),"playbackHeartbeat",void 0),X(Y(n),"playbackHeartbeatTime",void 0),X(Y(n),"playheadTime",void 0),X(Y(n),"seekingTracker",void 0),X(Y(n),"sustainedRebufferThreshold",void 0),X(Y(n),"watchTimeTracker",void 0),X(Y(n),"currentFragmentPDT",void 0),X(Y(n),"currentFragmentStart",void 0),n.DOM_CONTENT_LOADED_EVENT_END=er.domContentLoadedEventEnd(),n.NAVIGATION_START=er.navigationStart(),n.mux=e,n.id=t,null!=r&&r.beaconDomain&&n.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(r=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,errorTranslator:function(e){return e}},r)).data=r.data||{},r.data.property_key&&(r.data.env_key=r.data.property_key,delete r.data.property_key),F.setLevel(r.debug?"debug":"warn"),n.getPlayheadTime=r.getPlayheadTime,n.getStateData=r.getStateData||function(){return{}},n.getAdData=r.getAdData||function(){},n.minimumRebufferDuration=r.minimumRebufferDuration,n.sustainedRebufferThreshold=r.sustainedRebufferThreshold,n.playbackHeartbeatTime=r.playbackHeartbeatTime,n.disableRebufferTracking=r.disableRebufferTracking,n.disableRebufferTracking&&n.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),n.disablePlayheadRebufferTracking=r.disablePlayheadRebufferTracking,n.errorTranslator=r.errorTranslator,n.playbackEventDispatcher=new ti(e,r.data.env_key,r),n.data={player_instance_id:U(),mux_sample_rate:r.sampleRate,beacon_domain:r.beaconCollectionDomain||r.beaconDomain},n.data.view_sequence_number=1,n.data.player_sequence_number=1,n.oldEmit=n.emit,n.emit=function(e,t){t=Object.assign({viewer_time:this.mux.utils.now()},t),this.oldEmit(e,t)};var n,s=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"))}).bind(Y(n));n.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one("play",s),this.one("adbreakstart",s)});var o=(function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}).bind(Y(n));if(n.on("videochange",function(e,t){o(t)}),n.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),o(Object.assign(t,{view_program_changed:!0})),s(),this.emit("play"),this.emit("playing")}),n.on("fragmentchange",function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),n.on("destroy",n.destroy),"undefined"!=typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var l=function(){var e=void 0!==n.data.view_start;n.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,e&&n.mux.WINDOW_HIDDEN&&(n.data.player_is_paused||n.emit("hb"))};window.addEventListener("visibilitychange",l,!1);var d=function(e){e.persisted||n.destroy()};window.addEventListener("pagehide",d,!1),n.on("destroy",function(){window.removeEventListener("visibilitychange",l),window.removeEventListener("pagehide",d)})}return n.on("playerready",function(e,t){Object.assign(this.data,t)}),tn.forEach(function(e){n.on(e,function(t,i){0!==e.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,i),this._sanitizeData()}),n.on("after"+e,function(){("error"!==e||this.errorTracker.viewErrored)&&this.send(e)})}),n.on("viewend",function(e,t){Object.assign(n.data,t)}),n.one("playerready",function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),!this.mux.PLAYER_TRACKED&&this.NAVIGATION_START&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.DOM_CONTENT_LOADED_EVENT_END)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.DOM_CONTENT_LOADED_EVENT_END||1/0)-this.NAVIGATION_START)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),n.longResumeTracker=new tr(Y(n)),n.errorTracker=new eI(Y(n)),new eV(Y(n)),n.seekingTracker=new eO(Y(n)),n.playheadTime=new eL(Y(n)),n.playbackHeartbeat=new eS(Y(n)),new eN(Y(n)),n.watchTimeTracker=new eC(Y(n)),new eR(Y(n)),n.adTracker=new eB(Y(n)),new ex(Y(n)),new eD(Y(n)),new eM(Y(n)),new eH(Y(n)),new ta(Y(n)),r.hlsjs&&n.addHLSJS(r),r.dashjs&&n.addDashJS(r),n.emit("viewinit",r.data),n}return z(a,[{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(void 0===t.video_source_is_live&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var i=O(ei(t.video_source_url),2),a=i[0];t.video_source_domain=i[1],t.video_source_hostname=a}delete t.ad_request_id,this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,this._restartHeartBeat(),"viewend"===e&&delete this.data.view_id}}},{key:"_updateStateData",value:function(){Object.assign(this.data,this.getStateData()),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(t){var i=parseInt(e.data[t],10);e.data[t]=isNaN(i)?void 0:i}),["player_source_url","video_source_url"].forEach(function(t){if(e.data[t]){var i=e.data[t].toLowerCase();(0===i.indexOf("data:")||0===i.indexOf("blob:"))&&(e.data[t]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("video_")&&delete e.data[t]})}},{key:"_resetViewData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var e=this,t=this.data.view_id=U(),i=function(){t===e.data.view_id&&en(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",i):i()}},{key:"_restartHeartBeat",value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4)}},{key:"addHLSJS",value:function(e){return e.hlsjs?this.hlsjs?void this.mux.log.warn("An instance of HLS.js is already being monitored for this player."):void(this.hlsjs=e.hlsjs,ev(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)):void this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")}},{key:"removeHLSJS",value:function(){this.hlsjs&&(eb(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(e){return e.dashjs?this.dashjs?void this.mux.log.warn("An instance of Dash.js is already being monitored for this player."):void(this.dashjs=e.dashjs,e_(this.mux,this.id,e.dashjs)):void this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")}},{key:"removeDashJS",value:function(){this.dashjs&&(eA(this.dashjs),this.dashjs=void 0)}}]),a}(ek);v();var to,tl=h(M()),td=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],tu={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"},tc=h(m());tc.default&&tc.default.WeakMap&&(to=new WeakMap);var th={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},tm=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};tm.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf("\n");t>-1;t=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},tm.prototype.processLine=function(e){var t=e.indexOf(":"),i=ty(e,t),a=i[0],r=2===i.length?tb(i[1]):void 0;if("#"!==a[0])this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case th.TARGET_DURATION:if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case th.PART_INF:tp(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case th.SERVER_CONTROL:tp(this.manifest,i),this.setHoldBack();break;case th.INF:0===r?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case th.PROGRAM_DATE_TIME:var n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case th.VERSION:tp(this.manifest,i);break;case th.SESSION_DATA:var s=eh(t_(i[1]));Object.assign(this.manifest.sessionData,s)}},tm.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=i&&3*i,o=a&&2*a;i&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),a&&!t.hasOwnProperty(n)&&(t[n]=3*a),a&&t[n]<o&&(t[n]=o)}};var tp=function(e,t){var i,a=tv(t[0].replace("#EXT-X-",""));tg(t[1])?(i={},i=Object.assign(tf(t[1]),i)):i=tb(t[1]),e[a]=i},tv=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},tb=function(e){if("yes"===e.toLowerCase()||"no"===e.toLowerCase())return"yes"===e.toLowerCase();var t=-1!==e.indexOf(":")?e:parseFloat(e);return isNaN(t)?e:t},tE=function(e){var t={},i=e.split("=");return i.length>1&&(t[tv(i[0])]=tb(i[1])),t},tf=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++)i=Object.assign(tE(t[a]),i);return i},tg=function(e){return e.indexOf("=")>-1},ty=function(e,t){return -1===t?[e]:[e.substring(0,t),e.substring(t+1)]},t_=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(e,i){for(var a=e.replace(/['"]+/g,"").split("="),r=0;r<a.length;r++)"DATA-ID"===a[r]&&(t["DATA-ID"]=a[1-r]),"VALUE"===a[r]&&(t.VALUE=a[1-r])}),{data:t}}},tA={safeCall:function(e,t,i,a){var r=a;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,i)}catch(e){F.info("safeCall error",e)}return r},safeIncrement:en,getComputedStyle:function(e,t){var i;return e&&t&&tc.default&&"function"==typeof tc.default.getComputedStyle?(to&&to.has(e)&&(i=to.get(e)),i||(i=tc.default.getComputedStyle(e,null),to&&to.set(e,i)),i.getPropertyValue(t)):""},secondsToMs:function(e){return Math.floor(1e3*e)},assign:Object.assign,headersStringToObject:eu,cdnHeadersToRequestId:ec,extractHostnameAndDomain:ei,extractHostname:et,manifestParser:tm,generateShortID:B,generateUUID:U,now:G.now},tT={},tk=function(e){var t=arguments;"string"==typeof e?tk.hasOwnProperty(e)?P.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),tk[e].apply(null,t)},0):F.warn("`"+e+"` is an unknown task"):"function"==typeof e?P.default.setTimeout(function(){e(tk)},0):F.warn("`"+e+"` is invalid.")},tw={loaded:G.now(),NAME:"mux-embed",VERSION:"5.2.1",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(e,t){return function(e,t,i){var a=O(H(t),3),r=a[0],n=a[1],s=a[2],o=e.log,l=e.utils.getComputedStyle,d=e.utils.secondsToMs;if(!r)return o.error("No element was found with the `"+n+"` query selector.");if("video"!==s&&"audio"!==s)return o.error("The element of `"+n+"` was not a media element.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners")),(i=Object.assign({automaticErrorTracking:!0},i)).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),i.getPlayheadTime=function(){return d(r.currentTime)},i.getStateData=function(){var e,t=this.hlsjs&&this.hlsjs.url,a=this.dashjs&&p("function"===this.dashjs.getSource)&&this.dashjs.getSource(),n={player_is_paused:r.paused,player_playhead_time:d(r.currentTime),player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:tl.default&&!!(tl.default.fullscreenElement||tl.default.webkitFullscreenElement||tl.default.mozFullScreenElement||tl.default.msFullscreenElement),video_poster_url:r.poster,video_source_url:t||a||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:null==r||null==(e=r.getVideoPlaybackQuality)?void 0:e.call(r).droppedVideoFrames},s=i.getPlayheadTime();if(r.getStartDate&&s>0){var o=r.getStartDate();if(o&&"function"==typeof o.getTime&&o.getTime()){var u=o.getTime();n.player_program_time=u+s,r.seekable.length>0&&(n.player_live_edge_program_time=u+r.seekable.end(r.seekable.length-1))}}return n},r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(t,i){e.emit(n,t,i)};var u=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(e){r.removeEventListener(e,r.mux.listeners[e],!1)}),delete r.mux.listeners,r.mux.destroy=u,r.mux.swapElement=u,r.mux.emit=u,r.mux.addHLSJS=u,r.mux.addDashJS=u,r.mux.removeHLSJS=u,r.mux.removeDashJS=u,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(t){var i=O(H(t),3),a=i[0],n=i[1],s=i[2];return a?"video"!==s&&"audio"!==s?e.log.error("The element of `"+n+"` was not a media element."):void(a.muxId=r.muxId,delete r.muxId,a.mux=a.mux||{},a.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(a.mux.listeners).forEach(function(e){r.removeEventListener(e,a.mux.listeners[e],!1),a.addEventListener(e,a.mux.listeners[e],!1)}),a.mux.swapElement=r.mux.swapElement,a.mux.destroy=r.mux.destroy,delete r.mux,r=a):e.log.error("No element was found with the `"+n+"` query selector.")},r.mux.addHLSJS=function(t){e.addHLSJS(n,t)},r.mux.addDashJS=function(t){e.addDashJS(n,t)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},e.init(n,i),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},td.forEach(function(t){("error"!==t||i.automaticErrorTracking)&&(r.mux.listeners[t]=function(){var i={};if("error"===t){if(!r.error||1===r.error.code)return;i.player_error_code=r.error.code,i.player_error_message=tu[r.error.code]||r.error.message}e.emit(n,t,i)},r.addEventListener(t,r.mux.listeners[t],!1))})}(tk,e,t)},destroyMonitor:function(e){var t=O(H(e),1)[0];t&&t.mux&&"function"==typeof t.mux.destroy?t.mux.destroy():F.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=W(e);tT[i]?tT[i].addHLSJS(t):F.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=W(e);tT[i]?tT[i].addDashJS(t):F.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=W(e);tT[t]?tT[t].removeHLSJS():F.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=W(e);tT[t]?tT[t].removeDashJS():F.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){K()&&t&&t.respectDoNotTrack&&F.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=W(e);tT[i]=new ts(tk,i,t)},emit:function(e,t,i){var a=W(e);tT[a]?(tT[a].emit(t,i),"destroy"===t&&delete tT[a]):F.error("A monitor for `"+a+"` has not been initialized.")},checkDoNotTrack:K,log:F,utils:tA,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(tk,tw),void 0!==P.default&&"function"==typeof P.default.addEventListener&&P.default.addEventListener("pagehide",function(e){e.persisted||(tk.WINDOW_UNLOADING=!0)},!1);var tS=i(98720).Ay,tI=class e extends Error{constructor(t,i=e.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=null!=a?a:i>=e.MEDIA_ERR_NETWORK&&i<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};tI.MEDIA_ERR_ABORTED=1,tI.MEDIA_ERR_NETWORK=2,tI.MEDIA_ERR_DECODE=3,tI.MEDIA_ERR_SRC_NOT_SUPPORTED=4,tI.MEDIA_ERR_ENCRYPTED=5,tI.MEDIA_ERR_CUSTOM=100,tI.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var tC=tI,tR=(e,t)=>null!=t&&e in t,tL={ANY:"any",MUTED:"muted"},tD={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},tx={MSE:"mse",NATIVE:"native"},tM={HEADER:"header",QUERY:"query",NONE:"none"},tN=Object.values(tM),tO={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},tP={HLS:tO.M3U8},tU=(Object.keys(tP),[...Object.values(tO)],{upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"}),tB={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},tW={DESCENDING:"desc"},tH=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})},tV=e=>{let t=e.type;if(t){let e=t.toUpperCase();return tR(e,tP)?tP[e]:t}let{src:i}=e;return i?t$(i):""},tq=e=>"VOD"===e?tD.ON_DEMAND:tD.LIVE,tF=e=>"EVENT"===e?1/0:"VOD"===e?NaN:0,t$=e=>{let t="";try{t=new URL(e).pathname}catch{console.error("invalid url")}let i=t.lastIndexOf(".");if(i<0)return"";let a=t.slice(i+1).toUpperCase();return tR(a,tO)?tO[a]:""},tK=Object.values(tL),tj=e=>"boolean"==typeof e||"string"==typeof e&&tK.includes(e),tG=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case tL.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case tL.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{})}},tY=e=>"time"in e?e.time:e.startTime;function tZ(e,t,i,a,r){let n=document.createElement("track");return n.kind=t,n.label=i,a&&(n.srclang=a),r&&(n.id=r),n.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",n.setAttribute("data-removeondestroy",""),e.append(n),n.track}function tQ(e,t){let i=Array.prototype.find.call(e.querySelectorAll("track"),e=>e.track===t);null==i||i.remove()}function tz(e,t,i){var a;return null==(a=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&e.track.kind===i))?void 0:a.track}async function tX(e,t,i,a){let r=tz(e,i,a);return r||((r=tZ(e,a,i)).mode="hidden",await new Promise(e=>setTimeout(()=>e(void 0),0))),"hidden"!==r.mode&&(r.mode="hidden"),[...t].sort((e,t)=>tY(t)-tY(e)).forEach(t=>{var i,n;let s=t.value,o=tY(t);if("endTime"in t&&null!=t.endTime)null==r||r.addCue(new VTTCue(o,t.endTime,"chapters"===a?s:JSON.stringify(null!=s?s:null)));else{let t=Array.prototype.findIndex.call(null==r?void 0:r.cues,e=>e.startTime>=o),l=null==(i=null==r?void 0:r.cues)?void 0:i[t],d=l?l.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,u=null==(n=null==r?void 0:r.cues)?void 0:n[t-1];u&&(u.endTime=o),null==r||r.addCue(new VTTCue(o,d,"chapters"===a?s:JSON.stringify(null!=s?s:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var tJ="cuepoints",t0=Object.freeze({label:tJ});async function t1(e,t,i=t0){return tX(e,t,i.label,"metadata")}var t2=e=>({time:e.startTime,value:JSON.parse(e.text)});function t3(e,t={label:tJ}){let i=tz(e,t.label,"metadata");return null!=i&&i.cues?Array.from(i.cues,e=>t2(e)):[]}function t5(e,t={label:tJ}){var i,a;let r=tz(e,t.label,"metadata");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return t2(r.activeCues[0]);let{currentTime:n}=e;return t2(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function t4(e,t=t0){return new Promise(i=>{tH(e,"loadstart",async()=>{let a=await t1(e,[],t);tH(e,"cuechange",()=>{let t=t5(e);if(t){let i=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var t9="chapters",t8=Object.freeze({label:t9}),t7=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function t6(e,t,i=t8){return tX(e,t,i.label,"chapters")}function ie(e,t={label:t9}){var i;let a=tz(e,t.label,"chapters");return null!=(i=null==a?void 0:a.cues)&&i.length?Array.from(a.cues,e=>t7(e)):[]}function it(e,t={label:t9}){var i,a;let r=tz(e,t.label,"chapters");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return t7(r.activeCues[0]);let{currentTime:n}=e;return t7(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function ii(e,t=t8){return new Promise(i=>{tH(e,"loadstart",async()=>{let a=await t6(e,[],t);tH(e,"cuechange",()=>{let t=it(e);if(t){let i=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}function ia(e,t){if(t){let i=t.playingDate;if(null!=i)return new Date(i.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}function ir(e,t){return t&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:NaN)}var is,io,il,id=async e=>fetch(e).then(e=>e.text()).then(e=>fetch(e.split(`
`).find((e,t,i)=>t&&i[t-1].startsWith("#EXT-X-STREAM-INF"))).then(e=>e.text()).then(e=>e.split(`
`))),iu=async(e,t)=>t===tO.MP4?{streamType:tD.ON_DEMAND,targetLiveWindow:NaN,liveEdgeStartOffset:void 0}:t===tO.M3U8?(e=>{var t,i,a;let r=null==(i=(null!=(t=e.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:i.trim(),n=tq(r),s=tF(r),o;if(n===tD.LIVE){let t=e.find(e=>e.startsWith("#EXT-X-PART-INF"));if(t)o=2*t.split(":")[1].split("=")[1];else{let t=e.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),i=null==(a=null==t?void 0:t.split(":"))?void 0:a[1];o=(null!=i?i:6)*3}}return{streamType:n,targetLiveWindow:s,liveEdgeStartOffset:o}})(await id(e)):(console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0}),ic=async(e,t,i=tV({src:e}))=>{var a,r,n;let{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}=await iu(e,i);(null!=(a=im.get(t))?a:{}).liveEdgeStartOffset=l,(null!=(r=im.get(t))?r:{}).targetLiveWindow=o,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(n=im.get(t))?n:{}).streamType=s,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},ih=-1!==(null!=(io=null==(is=null==globalThis?void 0:globalThis.navigator)?void 0:is.userAgent)?io:"").toLowerCase().indexOf("android"),im=new WeakMap,ip="mux.com",iv=null==(il=tS.isSupported)?void 0:il.call(tS),ib=()=>tk.utils.now(),iE=tk.utils.generateUUID,ig=({playbackId:e,customDomain:t=ip,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,tokens:{playback:o}={},extraSourceParams:l={}}={})=>{if(!e)return;let[d,u=""]=(e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]})(e),c=new URL(`https://stream.${t}/${d}.m3u8${u}`);return o||c.searchParams.has("token")?(c.searchParams.forEach((e,t)=>{"token"!=t&&c.searchParams.delete(t)}),o&&c.searchParams.set("token",o)):(i&&c.searchParams.set("max_resolution",i),a&&(c.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&c.searchParams.set("rendition_order",r),n&&c.searchParams.set("program_start_time",`${n}`),s&&c.searchParams.set("program_end_time",`${s}`),Object.entries(l).forEach(([e,t])=>{null!=t&&c.searchParams.set(e,t)})),c.toString()},iy=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(".m3u8");return t||void 0},i_=e=>{var t;return null==(t=im.get(e))?void 0:t.error},iA=e=>{var t,i;return null!=(i=null==(t=im.get(e))?void 0:t.streamType)?i:tD.UNKNOWN},iT=e=>{var t,i;return null!=(i=null==(t=im.get(e))?void 0:t.targetLiveWindow)?i:NaN},ik=e=>{var t,i;return null!=(i=null==(t=im.get(e))?void 0:t.seekable)?i:e.seekable},iw=e=>{var t;let i=null==(t=im.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof i)return NaN;let a=ik(e);return a.length?a.end(a.length-1)-i:NaN},iS=.034,iI=(e,t,i=iS)=>e>t||((e,t,i=iS)=>Math.abs(e-t)<=i)(e,t,i),iC=(e,t)=>{var i,a,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(a=null==(i=t.levels)?void 0:i[t.currentLevel])?void 0:a.details:null==(r=t.levels.find(e=>!!e.details))?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(null!=s&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return l>d&&l<u},iR=(e,t)=>e.ended||e.loop?e.ended:!!(t&&iC(e,t))||((e,t=iS)=>e.paused&&iI(e.currentTime,e.duration,t))(e),iL=(e,t,i)=>{iD(t,i);let{metadata:a={}}=e,{view_session_id:r=iE()}=a,n=(e=>{var t,i,a;return null!=(t=null==e?void 0:e.metadata)&&t.video_id?e.metadata.video_id:iH(e)&&null!=(a=null!=(i=(e=>{if(!e)return;let[t]=e.split("?");return t||void 0})(e.playbackId))?i:iy(e.src))?a:e.src})(e);a.view_session_id=r,a.video_id=n,e.metadata=a,im.set(t,{});let s=iM(e,t),o=(({preload:e,src:t},i,a)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?i.setAttribute("preload",e):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:i.preload;s||"none"===t||("metadata"===t?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,a.loadSource(t))};return tH(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,u()},{once:!0}),d(e),d})(e,t,s);iV(e,t,s),iq(e,t,s),t4(t),ii(t);let l=((e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,s=tj(a)?a:!!a,o=()=>{r||tH(t,"playing",()=>{r=!0},{once:!0})};if(o(),tH(t,"loadstart",()=>{r=!1,o(),tG(t,s)},{once:!0}),tH(t,"loadstart",()=>{i||(n=e.streamType&&e.streamType!==tD.UNKNOWN?e.streamType===tD.LIVE:!Number.isFinite(t.duration)),tG(t,s)},{once:!0}),i&&i.once(tS.Events.LEVEL_LOADED,(t,i)=>{var a;n=e.streamType&&e.streamType!==tD.UNKNOWN?e.streamType===tD.LIVE:null!=(a=i.details.live)&&a}),!s){let a=()=>{!n||Number.isFinite(e.startTime)||(null!=i&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&tH(t,"play",()=>{"metadata"===t.preload?i.once(tS.Events.LEVEL_UPDATED,a):a()},{once:!0})}return e=>{r||tG(t,s=tj(e)?e:!!e)}})(e,t,s);return{engine:s,setAutoplay:l,setPreload:o}},iD=(e,t)=>{let i=null==t?void 0:t.engine;i&&(i.detachMedia(),i.destroy()),null!=e&&e.mux&&!e.mux.deleted&&(e.mux.destroy(),delete e.mux),e&&(e.removeAttribute("src"),e.load(),e.removeEventListener("error",i$),e.removeEventListener("error",iK),e.removeEventListener("durationchange",iF),im.delete(e),e.dispatchEvent(new Event("teardown")))};function ix(e,t){var i;let a=tV(e);if(a!==tO.M3U8)return!0;let r=!a||null==(i=t.canPlayType(a))||i,{preferPlayback:n}=e,s=n===tx.MSE,o=n===tx.NATIVE;return r&&(o||!(iv&&(s||ih)))}var iM=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={}}=e,l=tV(e)===tO.M3U8,d=ix(e,t);if(l&&!d&&iv){let t=iN(a),l=iO(e);return new tS({debug:i,startPosition:r,cmcd:s!==tM.NONE?{useHeaders:s===tM.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0,xhrSetup:(e,t)=>{var i,a;if(s&&s!==tM.QUERY)return;let r=new URL(t);if(!r.searchParams.has("CMCD"))return;let n=(null!=(a=null==(i=r.searchParams.get("CMCD"))?void 0:i.split(","))?a:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");r.searchParams.set("CMCD",n),e.open("GET",r)},...{backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0},...t,...l,...o})}},iN=e=>e===tD.LIVE?{backBufferLength:8}:{},iO=e=>{let{drmToken:t,src:i,playbackId:a=iy(i)}=e;return t&&a?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:iB(e,"fairplay"),serverCertificateUrl:iW(e,"fairplay")},"com.widevine.alpha":{licenseUrl:iB(e,"widevine")},"com.microsoft.playready":{licenseUrl:iB(e,"playready")}},requestMediaKeySystemAccessFunc:(e,t)=>("com.widevine.alpha"===e&&(t=[...t.map(e=>{var t;let i=null==(t=e.videoCapabilities)?void 0:t.map(e=>({...e,robustness:"HW_SECURE_ALL"}));return{...e,videoCapabilities:i}}),...t]),navigator.requestMediaKeySystemAccess(e,t))}:{}},iP=async e=>await (await fetch(e)).arrayBuffer(),iU=async(e,t)=>new Uint8Array(await (await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e})).arrayBuffer()),iB=({playbackId:e,drmToken:t,customDomain:i=ip},a)=>`https://license.${i.toLocaleLowerCase().endsWith(ip)?i:ip}/license/${a}/${e}?token=${t}`,iW=({playbackId:e,drmToken:t,customDomain:i=ip},a)=>`https://license.${i.toLocaleLowerCase().endsWith(ip)?i:ip}/appcert/${a}/${e}?token=${t}`,iH=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if("string"!=typeof t)return!1;let a=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return a.includes(ip)||!!i&&a.includes(i.toLocaleLowerCase())},iV=(e,t,i)=>{var a;let{envKey:r,disableTracking:n}=e,s=iH(e);if(!n&&(r||s)){let{playerInitTime:n,playerSoftwareName:s,playerSoftwareVersion:o,beaconCollectionDomain:l,debug:d,disableCookies:u}=e,c={...e.metadata,video_title:(null==(a=null==e?void 0:e.metadata)?void 0:a.video_title)||void 0};tk.monitor(t,{debug:d,beaconCollectionDomain:l,hlsjs:i,Hls:i?tS:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:u,data:{...r?{env_key:r}:{},player_software_name:s,player_software:s,player_software_version:o,player_init_time:n,...c}})}},iq=(e,t,i)=>{var a;let r=ix(e,t),{src:n}=e,s=()=>{t.ended||!iR(t,i)||(iC(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},o,l,d=()=>{var e,i;let a=null==(e=ik(t))?void 0:e.start(0),r=null==(i=ik(t))?void 0:i.end(0);(l!==r||o!==a)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),o=a,l=r};if(tH(t,"durationchange",d),t&&r){let i=tV(e);if("string"==typeof n){let r=()=>{if(iA(t)!==tD.LIVE||Number.isFinite(t.duration))return;let e=setInterval(d,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),tH(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})};if("none"===t.preload){let e=()=>{ic(n,t,i).then(r),t.removeEventListener("loadedmetadata",a)},a=()=>{ic(n,t,i).then(r),t.removeEventListener("play",e)};tH(t,"play",e,{once:!0}),tH(t,"loadedmetadata",a,{once:!0})}else ic(n,t,i).then(r);e.drmToken&&((e,t)=>{tH(t,"encrypted",async i=>{try{let a=i.initDataType;if("skd"!==a)return void console.error(`Received unexpected initialization data type "${a}"`);if(!t.mediaKeys){let i=await (await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[a],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}])).createMediaKeys(),r=await iP(iW(e,"fairplay"));await i.setServerCertificate(r),await t.setMediaKeys(i)}let r=i.initData;if(null==r)return void console.error(`Could not start encrypted playback due to missing initData in ${i.type} event`);let n=t.mediaKeys.createSession();n.generateRequest(a,r);let s=await new Promise(e=>{n.addEventListener("message",t=>{e(t.message)},{once:!0})}),o=await iU(s,iB(e,"fairplay"));return await n.update(o),n}catch(e){console.error(`Could not start encrypted playback due to exception "${e}"`)}})})(e,t),t.setAttribute("src",n),e.startTime&&((null!=(a=im.get(t))?a:{}).startTime=e.startTime,t.addEventListener("durationchange",iF,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",i$),t.addEventListener("error",iK),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),tH(t,"pause",s),tH(t,"seeked",s),tH(t,"play",()=>{t.ended||iI(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else i&&n?(i.once(tS.Events.LEVEL_LOADED,(e,a)=>{((e,t,i)=>{var a,r,n,s,o,l,d,u;let{streamType:c,targetLiveWindow:h,liveEdgeStartOffset:m,lowLatency:p}=(e=>{var t;let i=e.type,a=tq(i),r=tF(i),n,s=!!(null!=(t=e.partList)&&t.length);return a===tD.LIVE&&(n=s?2*e.partTarget:3*e.targetduration),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}})(e);if(c===tD.LIVE){p?(i.config.backBufferLength=null!=(a=i.userConfig.backBufferLength)?a:4,i.config.maxFragLookUpTolerance=null!=(r=i.userConfig.maxFragLookUpTolerance)?r:.001,i.config.abrBandWidthUpFactor=null!=(n=i.userConfig.abrBandWidthUpFactor)?n:i.config.abrBandWidthFactor):i.config.backBufferLength=null!=(s=i.userConfig.backBufferLength)?s:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var a;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(a=i.liveSyncPosition)?a:t.seekable.end(e)}});(null!=(o=im.get(t))?o:{}).seekable=e}(null!=(l=im.get(t))?l:{}).liveEdgeStartOffset=m,(null!=(d=im.get(t))?d:{}).targetLiveWindow=h,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=im.get(t))?u:{}).streamType=c,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))})(a.details,t,i),d(),iA(t)!==tD.LIVE||Number.isFinite(t.duration)||(i.on(tS.Events.LEVEL_UPDATED,d),tH(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(tS.Events.LEVELS_UPDATED,d)}))}),i.on(tS.Events.ERROR,(e,i)=>{let a={[tS.ErrorTypes.NETWORK_ERROR]:tC.MEDIA_ERR_NETWORK,[tS.ErrorTypes.MEDIA_ERROR]:tC.MEDIA_ERR_DECODE},r=new tC("",a[i.type]);r.fatal=i.fatal,r.data=i,t.dispatchEvent(new CustomEvent("error",{detail:r}))}),t.addEventListener("error",iK),tH(t,"waiting",s),function(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(tS.Events.MANIFEST_PARSED,function(t,i){n();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,i.levels.entries())){let i=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);a.set(t,`${e}`),i.id=`${e}`}}),t.on(tS.Events.AUDIO_TRACKS_UPDATED,function(t,i){for(let t of(r(),i.audioTracks)){let i=t.default?"main":"alternative",a=e.addAudioTrack(i,t.name,t.lang);a.id=`${t.id}`,t.default&&(a.enabled=!0)}}),e.audioTracks.addEventListener("change",()=>{var i;let a=+(null==(i=[...e.audioTracks].find(e=>e.enabled))?void 0:i.id),r=t.audioTracks.map(e=>e.id);a!=t.audioTrack&&r.includes(a)&&(t.audioTrack=a)}),t.on(tS.Events.LEVELS_UPDATED,function(t,i){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let s=i.levels.map(e=>a.get(e));for(let t of e.videoRenditions)t.id&&!s.includes(t.id)&&n.removeRendition(t)});null==(i=e.videoRenditions)||i.addEventListener("change",i=>{var a;let r,n,s,o=i.target.selectedIndex;o!=t.nextLevel&&(a=o,r=e.currentTime,n=!1,s=(e,t)=>{n||(n=!Number.isFinite(t.endOffset))},t.on(tS.Events.BUFFER_FLUSHING,s),t.nextLevel=a,t.off(tS.Events.BUFFER_FLUSHING,s),n||t.trigger(tS.Events.BUFFER_FLUSHING,{startOffset:r+10,endOffset:1/0,type:"video"}))});let r=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},n=()=>{(()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)})(),r()};t.once(tS.Events.DESTROYING,n)}(e,i),function(e,t){t.on(tS.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(i,{tracks:a})=>{a.forEach(i=>{var a;let r=null!=(a=i.subtitleTrack)?a:i.closedCaptions,n=t.subtitleTracks.findIndex(({lang:e,name:t,type:a})=>e==(null==r?void 0:r.lang)&&t===i.label&&a.toLowerCase()===i.kind);tZ(e,i.kind,i.label,null==r?void 0:r.lang,`${i.kind}${n}`)})});let i=()=>{var i;if(!t.subtitleTracks.length)return;let a=Array.from(e.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind)),r=`${null==(i=t.subtitleTracks[t.subtitleTrack])?void 0:i.type.toLowerCase()}${t.subtitleTrack}`;if(a&&(t.subtitleTrack<0||(null==a?void 0:a.id)!==r)){let e=t.subtitleTracks.findIndex(({lang:e,name:t,type:i})=>e==a.language&&t===a.label&&i.toLowerCase()===a.kind);t.subtitleTrack=e}a&&(null==a?void 0:a.id)===r&&a.cues&&Array.from(a.cues).forEach(e=>{a.addCue(e)})};e.textTracks.addEventListener("change",i),t.on(tS.Events.CUES_PARSED,(t,{track:i,cues:a})=>{let r=e.textTracks.getTrackById(i);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),a.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),t.once(tS.Events.DESTROYING,()=>{e.textTracks.removeEventListener("change",i),e.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})});let a=()=>{Array.from(e.textTracks).forEach(t=>{var i,a;if(!["subtitles","caption"].includes(t.kind)&&"thumbnails"===t.label){if(!(null!=(i=t.cues)&&i.length)){let t=e.querySelector('track[label="thumbnails"]'),i=null!=(a=null==t?void 0:t.getAttribute("src"))?a:"";null==t||t.removeAttribute("src"),setTimeout(()=>{null==t||t.setAttribute("src",i)},0)}"hidden"!==t.mode&&(t.mode="hidden")}})};t.once(tS.Events.MANIFEST_LOADED,a),t.once(tS.Events.MEDIA_ATTACHED,a)}(t,i),i.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function iF(e){var t;let i=e.target,a=null==(t=im.get(i))?void 0:t.startTime;if(a&&function(e,t,i){t&&i>t&&(i=t);for(let t=0;t<e.length;t++)if(e.start(t)<=i&&e.end(t)>=i)return!0;return!1}(i.seekable,i.duration,a)){let e="auto"===i.preload;e&&(i.preload="none"),i.currentTime=a,e&&(i.preload="auto")}}async function i$(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:i,code:a}=t.error,r=new tC(i,a);if(t.src&&(a!==tC.MEDIA_ERR_DECODE||void 0!==a))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}t.dispatchEvent(new CustomEvent("error",{detail:r}))}function iK(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof tC))return;let a=e.target,r=e.detail;r&&r.fatal&&((null!=(t=im.get(a))?t:{}).error=r,null==(i=a.mux)||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}},49314:(e,t,i)=>{let a,r;i.d(t,{FJ:()=>nU.FJ});let n={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},s={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},o={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_PAUSED:"mediaPaused",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_ENDED:"mediaEnded",MEDIA_MUTED:"mediaMuted",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_IS_PIP:"mediaIsPip",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_LOADING:"mediaLoading",MEDIA_BUFFERED:"mediaBuffered",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_CHAPTERS_CUES:"mediaChaptersCues"},l=Object.entries(o),d=l.reduce((e,[t,i])=>(e[t]=`${i.toLowerCase()}`,e),{}),u=l.reduce((e,[t,i])=>(e[t]=`${i.toLowerCase()}`,e),{USER_INACTIVE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(u).reduce((e,[t,i])=>{let a=d[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let c=Object.entries(d).reduce((e,[t,i])=>{let a=u[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),h={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},m={DISABLED:"disabled",SHOWING:"showing"},p={MOUSE:"mouse",TOUCH:"touch"},v={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},b={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},E={FULLSCREEN:"fullscreen"},f={AUDIO_PLAYER:()=>"audio player",VIDEO_PLAYER:()=>"video player",VOLUME:()=>"volume",SEEK:()=>"seek",CLOSED_CAPTIONS:()=>"closed captions",PLAYBACK_RATE:({playbackRate:e=1}={})=>`current playback rate ${e}`,PLAYBACK_TIME:()=>"playback time",MEDIA_LOADING:()=>"media loading",SETTINGS:()=>"settings",AUDIO_TRACKS:()=>"audio tracks",QUALITY:()=>"quality"},g={PLAY:()=>"play",PAUSE:()=>"pause",MUTE:()=>"mute",UNMUTE:()=>"unmute",ENTER_AIRPLAY:()=>"start airplay",EXIT_AIRPLAY:()=>"stop airplay",ENTER_CAST:()=>"start casting",EXIT_CAST:()=>"stop casting",ENTER_FULLSCREEN:()=>"enter fullscreen mode",EXIT_FULLSCREEN:()=>"exit fullscreen mode",ENTER_PIP:()=>"enter picture in picture mode",EXIT_PIP:()=>"exit picture in picture mode",SEEK_FORWARD_N_SECS:({seekOffset:e=30}={})=>`seek forward ${e} seconds`,SEEK_BACK_N_SECS:({seekOffset:e=30}={})=>`seek back ${e} seconds`,SEEK_LIVE:()=>"seek to live",PLAYING_LIVE:()=>"playing live"};function y(e){return null==e?void 0:e.split(/\s+/).map(A)}function _(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function A(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:i,height:a}}}function T(e){return null==e?void 0:e.split(/\s+/).map(w)}function k(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function w(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function S(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}({...f,...g});let I=e=>new Promise(t=>setTimeout(t,e)),C=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],R=e=>{if(!function(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>e&&((e,t)=>{let i=1===e?C[t].singular:C[t].plural;return`${e} ${i}`})(e,t)).filter(e=>e).join(", ");return`${r}${i?" remaining":""}`};function L(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600),s=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||o>0?n+":":"")||s>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});class D{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class x extends D{}class M{observe(){}unobserve(){}disconnect(){}}let N={createElement:function(){return new O.HTMLElement},createElementNS:function(){return new O.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},O={ResizeObserver:M,document:N,Node:x,HTMLElement:class extends x{},DocumentFragment:class extends D{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e})},P="undefined"==typeof window||void 0===window.customElements,U=Object.keys(O).every(e=>e in globalThis),B=P&&!U?O:globalThis,W=P&&!U?N:globalThis.document,H=new WeakMap,V=e=>{let t=H.get(e);return t||H.set(e,t=new Set),t},q=new B.ResizeObserver(e=>{for(let t of e)for(let e of V(t.target))e(t)});function F(e,t){V(e).add(t),q.observe(e)}function $(e,t){let i=V(e);i.delete(t),i.size||q.unobserve(e)}function K(e){var t;return null!=(t=j(e))?t:Q(e,"media-controller")}function j(e){var t;let{MEDIA_CONTROLLER:i}=s,a=e.getAttribute(i);if(a)return null==(t=X(e))?void 0:t.getElementById(a)}let G=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},Y=(e,t)=>((e,t)=>{let i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]})(e,t)[0],Z=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||Z(e,t.getRootNode().host)),Q=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||Q(e.getRootNode().host,t)};function z(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=z(i.shadowRoot))?t:i:null}function X(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function J(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function ee(e,t){let i=function(e,t){var i;let a;for(a of e.querySelectorAll("style")){let e;try{e=null==(i=a.sheet)?void 0:i.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t);return i||et(e,t)}function et(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style"))?i:[],n=null==r?void 0:r[r.length-1];return(null==n?void 0:n.sheet)?(null==n||n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length),null==(a=n.sheet.cssRules)?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function ei(e,t,i=NaN){let a=e.getAttribute(t);return null!=a?+a:i}function ea(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}ei(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function er(e,t){return e.hasAttribute(t)}function en(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}er(e,t)!=i&&e.toggleAttribute(t,i)}function es(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function eo(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;es(e,t,void 0)!==a&&e.setAttribute(t,a)}var el=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ed=(e,t,i)=>(el(e,t,"read from private field"),i?i.call(e):t.get(e)),eu=(e,t,i,a)=>(el(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let ec=W.createElement("template");ec.innerHTML=`
<style>
  :host {
    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
    box-sizing: border-box;
  }
</style>
`;class eh extends B.HTMLElement{constructor(e={}){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,nZ,void 0),!this.shadowRoot){let t=this.attachShadow({mode:"open"}),i=ec.content.cloneNode(!0);this.nativeEl=i;let a=e.slotTemplate;a||((a=W.createElement("template")).innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(a.content.cloneNode(!0)),t.appendChild(i)}}static get observedAttributes(){return[s.MEDIA_CONTROLLER,d.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=ed(this,nZ))?void 0:a.unassociateElement)||r.call(a,this),eu(this,nZ,null)),i&&this.isConnected&&(eu(this,nZ,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=ed(this,nZ))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i,a;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),eu(this,nZ,function(e){var t;let i=e.getAttribute(s.MEDIA_CONTROLLER);return i?null==(t=e.getRootNode())?void 0:t.getElementById(i):Q(e,"media-controller")}(this)),this.getAttribute(s.MEDIA_CONTROLLER)&&(null==(t=null==(e=ed(this,nZ))?void 0:e.associateElement)||t.call(e,this)),null==(i=ed(this,nZ))||i.addEventListener("pointerdown",this),null==(a=ed(this,nZ))||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(s.MEDIA_CONTROLLER)&&(null==(t=null==(e=ed(this,nZ))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=ed(this,nZ))||i.removeEventListener("pointerdown",this),null==(a=ed(this,nZ))||a.removeEventListener("click",this),eu(this,nZ,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let{pointerType:d=this._pointerType}=e;if(this._pointerType=void 0,d===p.TOUCH)return void this.handleTap(e);if(d===p.MOUSE)return void this.handleMouseClick(e)}}}get mediaPaused(){return er(this,d.MEDIA_PAUSED)}set mediaPaused(e){en(this,d.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?n.MEDIA_PLAY_REQUEST:n.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new B.CustomEvent(t,{composed:!0,bubbles:!0}))}}nZ=new WeakMap,B.customElements.get("media-gesture-receiver")||B.customElements.define("media-gesture-receiver",eh);var em=Object.defineProperty,ep=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ev=(e,t,i)=>(ep(e,t,"read from private field"),i?i.call(e):t.get(e)),eb=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},eE=(e,t,i,a)=>(ep(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ef=(e,t,i)=>(ep(e,t,"access private method"),i);let eg={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive"},ey=W.createElement("template");ey.innerHTML=`
  <style>
    
    :host([${d.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([${eg.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    slot[name=media] {
      display: var(--media-slot-display, contents);
    }

    
    :host([${eg.AUDIO}]) slot[name=media] {
      display: var(--media-slot-display, none);
    }

    
    :host([${eg.AUDIO}]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    
    :host(:not([${eg.AUDIO}])[${eg.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
    :host(:not([${eg.AUDIO}])[${eg.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([hidden])) {
      pointer-events: auto;
    }

    :host(:not([${eg.AUDIO}])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([${eg.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([${eg.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    
    :host(:not([${eg.AUDIO}])) .spacer {
      flex-grow: 1;
    }

    
    :host(:-webkit-full-screen) {
      
      width: 100% !important;
      height: 100% !important;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not([${eg.NO_AUTOHIDE}]):not([hidden])) {
      opacity: 1;
      transition: opacity 0.25s;
    }

    
    :host([${eg.USER_INACTIVE}]:not([${d.MEDIA_PAUSED}]):not([${d.MEDIA_IS_AIRPLAYING}]):not([${d.MEDIA_IS_CASTING}]):not([${eg.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${eg.NO_AUTOHIDE}])) {
      opacity: 0;
      transition: opacity 1s;
    }

    :host([${eg.USER_INACTIVE}]:not([${d.MEDIA_PAUSED}]):not([${d.MEDIA_IS_CASTING}]):not([${eg.AUDIO}])) ::slotted([slot=media]) {
      cursor: none;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    
    :host(:not([${eg.AUDIO}])[${d.MEDIA_HAS_PLAYED}]) slot[name=poster] {
      display: none;
    }

    ::slotted([role="menu"]) {
      align-self: end;
    }

    ::slotted([role="dialog"]) {
      align-self: center;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    
    <slot part="bottom chrome"></slot>
  </span>
`;let e_=Object.values(d);class eA extends B.HTMLElement{constructor(){super(),eb(this,nX),eb(this,n0),eb(this,n2),eb(this,n5),eb(this,n9),eb(this,nQ,0),eb(this,nz,void 0),((e,t,i)=>((e,t,i)=>t in e?em(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!=typeof t?t+"":t,i))(this,"breakpointsComputed",!1),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ey.content.cloneNode(!0))),new MutationObserver(e=>{let t=this.media;for(let i of e)"childList"===i.type&&(i.removedNodes.forEach(e=>{if("media"==e.slot&&i.target==this){let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}}),t&&i.addedNodes.forEach(e=>{e===t&&this.handleMediaUpdated(t)}))}).observe(this,{childList:!0,subtree:!0});let e=!1;F(this,t=>{e||(setTimeout(()=>{!function(e){!function(e,t){var i,a,r;if(!e.isConnected)return;let n=Object.fromEntries((null!=(i=e.getAttribute(eg.BREAKPOINTS))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),s=(a=n,r=t,Object.keys(a).filter(e=>r>=a[e])),o=!1;if(Object.keys(n).forEach(t=>{if(s.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(u.BREAKPOINTS_CHANGE,{detail:s});e.dispatchEvent(t)}}(e.target,e.contentRect.width)}(t),e=!1,this.breakpointsComputed||(this.breakpointsComputed=!0,this.dispatchEvent(new CustomEvent(u.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))},0),e=!0)});let t=this.querySelector(":scope > slot[slot=media]");t&&t.addEventListener("slotchange",()=>{if(!t.assignedElements({flatten:!0}).length){ev(this,nz)&&this.mediaUnsetCallback(ev(this,nz));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[eg.AUTOHIDE,eg.GESTURES_DISABLED].concat(e_).filter(e=>![d.MEDIA_RENDITION_LIST,d.MEDIA_AUDIO_TRACK_LIST,d.MEDIA_CHAPTERS_CUES].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==eg.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(eE(this,nz,e),e.localName.includes("-")&&await B.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;let t=null!=this.getAttribute(eg.AUDIO)?f.AUDIO_PLAYER():f.VIDEO_PLAYER();this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(eg.USER_INACTIVE,""),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=B.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;this.media&&this.mediaUnsetCallback(this.media),null==(e=B.window)||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){eE(this,nz,null)}handleEvent(e){switch(e.type){case"pointerdown":eE(this,nQ,e.timeStamp);break;case"pointermove":ef(this,nX,nJ).call(this,e);break;case"pointerup":ef(this,n0,n1).call(this,e);break;case"mouseleave":ef(this,n2,n3).call(this);break;case"mouseup":this.removeAttribute(eg.KEYBOARD_CONTROL);break;case"keyup":ef(this,n9,n8).call(this),this.setAttribute(eg.KEYBOARD_CONTROL,"")}}set autohide(e){e=Number(e),this._autohide=isNaN(e)?0:e}get autohide(){return void 0===this._autohide?2:this._autohide}}nQ=new WeakMap,nz=new WeakMap,nX=new WeakSet,nJ=function(e){!("mouse"!==e.pointerType&&e.timeStamp-ev(this,nQ)<250)&&(ef(this,n5,n4).call(this),clearTimeout(this._inactiveTimeout),[this,this.media].includes(e.target)&&ef(this,n9,n8).call(this))},n0=new WeakSet,n1=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(eg.USER_INACTIVE);[this,this.media].includes(e.target)&&t?ef(this,n2,n3).call(this):ef(this,n9,n8).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&ef(this,n9,n8).call(this)},n2=new WeakSet,n3=function(){if(this.autohide<0||this.hasAttribute(eg.USER_INACTIVE))return;this.setAttribute(eg.USER_INACTIVE,"");let e=new B.CustomEvent(u.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},n5=new WeakSet,n4=function(){if(!this.hasAttribute(eg.USER_INACTIVE))return;this.removeAttribute(eg.USER_INACTIVE);let e=new B.CustomEvent(u.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},n9=new WeakSet,n8=function(){ef(this,n5,n4).call(this),clearTimeout(this._inactiveTimeout),this.autohide<0||(this._inactiveTimeout=setTimeout(()=>{ef(this,n2,n3).call(this)},1e3*this.autohide))},B.customElements.get("media-container")||B.customElements.define("media-container",eA);var eT=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ek=(e,t,i)=>(eT(e,t,"read from private field"),i?i.call(e):t.get(e)),ew=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},eS=(e,t,i,a)=>(eT(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class eI{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){ew(this,si),ew(this,n7,void 0),ew(this,n6,void 0),ew(this,se,void 0),ew(this,st,new Set),eS(this,n7,e),eS(this,n6,t),eS(this,se,new Set(i))}[Symbol.iterator](){return ek(this,si,sa).values()}get length(){return ek(this,si,sa).size}get value(){var e;return null!=(e=[...ek(this,si,sa)].join(" "))?e:""}set value(e){var t;e!==this.value&&(eS(this,st,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...ek(this,si,sa)][e]}values(){return ek(this,si,sa).values()}forEach(e){ek(this,si,sa).forEach(e)}add(...e){var t,i;e.forEach(e=>ek(this,st).add(e)),(""!==this.value||(null==(t=ek(this,n7))?void 0:t.hasAttribute(`${ek(this,n6)}`)))&&(null==(i=ek(this,n7))||i.setAttribute(`${ek(this,n6)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>ek(this,st).delete(e)),null==(t=ek(this,n7))||t.setAttribute(`${ek(this,n6)}`,`${this.value}`)}contains(e){return ek(this,si,sa).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}n7=new WeakMap,n6=new WeakMap,se=new WeakMap,st=new WeakMap,si=new WeakSet,sa=function(){return ek(this,st).size?ek(this,st):ek(this,se)};let eC=(e="")=>{let[t,i,a]=e.split(":");return{kind:t="cc"===t?"captions":"subtitles",language:i,label:a?decodeURIComponent(a):void 0}},eR=(e="",t={})=>((e="")=>e.split(/\s+/))(e).map(e=>{let i=eC(e);return{...t,...i}}),eL=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?eC(e):e):"string"==typeof e?eR(e):[e]:[],eD=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,ex=(e=[])=>Array.prototype.map.call(e,eD).join(" "),eM=e=>{let t=Object.entries(e).map(([e,t])=>i=>i[e]===t);return e=>t.every(t=>t(e))},eN=(e,t=[],i=[])=>{let a=eL(i).map(eM);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},eO=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:eM(t);return Array.from(e.textTracks).filter(i)},eP=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(d.MEDIA_SUBTITLES_SHOWING)},eU="exitFullscreen"in W?"exitFullscreen":"webkitExitFullscreen"in W?"webkitExitFullscreen":"webkitCancelFullScreen"in W?"webkitCancelFullScreen":void 0,eB="fullscreenElement"in W?"fullscreenElement":"webkitFullscreenElement"in W?"webkitFullscreenElement":void 0,eW="fullscreenEnabled"in W?"fullscreenEnabled":"webkitFullscreenEnabled"in W?"webkitFullscreenEnabled":void 0,eH=()=>{var e;return a||(a=null==(e=null==W?void 0:W.createElement)?void 0:e.call(W,"video"))},eV=async(e=eH())=>{if(!e)return!1;let t=e.volume;return e.volume=t/2+.1,await I(0),e.volume!==t},eq=/.*Version\/.*Safari\/.*/.test(B.navigator.userAgent),eF=(e=eH())=>(!B.matchMedia("(display-mode: standalone)").matches||!eq)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),e$=(e=eH())=>(e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[eW])||i&&"webkitSupportsFullscreen"in i})({documentElement:W,media:e}),eK=e$(),ej=eF(),eG=!!B.WebKitPlaybackTargetAvailabilityEvent,eY=!!B.chrome,eZ=e=>eO(e.media,e=>[h.SUBTITLES,h.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),eQ=e=>eO(e.media,e=>e.mode===m.SHOWING&&[h.SUBTITLES,h.CAPTIONS].includes(e.kind)),ez=(e,t)=>{let i=eZ(e),a=eQ(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)eN(m.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...globalThis.navigator.languages]:globalThis.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;eN(m.DISABLED,i,a),eN(m.SHOWING,i,[{language:n,label:s,kind:o}])}}},eX=(e,t)=>e===t||typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?eJ(e,t):Object.entries(e).every(([e,i])=>e in t&&eX(i,t[e])))),eJ=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>eX(e,t[i])))},e0=Object.values(b),e1=eV().then(e=>r=e),e2=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof B.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=B.customElements.get(t);i&&e instanceof i||(await B.customElements.whenDefined(t),B.customElements.upgrade(e))}))},e3={mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;i&&Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i}=t;i&&(i.muted=e)},mediaEvents:["volumechange"]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i}=t;if(i){try{null==e?B.localStorage.removeItem("media-chrome-pref-volume"):B.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let i=B.localStorage.getItem("media-chrome-pref-volume");if(null==i)return;e3.mediaVolume.set(+i,t),e(i)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&0!==i.readyState&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[b.LIVE,b.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(e0.includes(r))return r===b.UNKNOWN?a:r;let n=t.duration;return n===1/0?b.LIVE:Number.isFinite(n)?b.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:i}=t,a=e3.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===b.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(e3.mediaStreamType.get(e)!==b.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>eZ(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>eQ(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let s=e=>{var i;n.defaultSubtitles&&(e&&![h.CAPTIONS,h.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||ez(t,!0))};return null==(i=r.textTracks)||i.addEventListener("addtrack",s),null==(a=r.textTracks)||a.addEventListener("removetrack",s),s(),()=>{var e,t;null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=eO(i,{kind:h.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{let{media:i}=t;if(!i)return;let a=i.querySelector('track[kind="chapters"][default][src]');return null==a||a.addEventListener("load",e),()=>{null==a||a.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=a.localName)?void 0:t.includes("-"))&&Z(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i)if(e){if(!W.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!i.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else W.pictureInPictureElement&&W.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>(e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let n=(e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[eB];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===E.FULLSCREEN?i:a})(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(eB in e))return Z(n,r);for(;null==e?void 0:e[eB];){if(e[eB]===r)return!0;e=null==(t=e[eB])?void 0:t.shadowRoot}}return!1})(e),set(e,t){e?(e=>{var t;let{media:i,fullscreenElement:a}=e,r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){let e=null==(t=a[r])?void 0:t.call(a);if(e instanceof Promise)return e.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()})(t):(e=>{var t;let{documentElement:i}=e;if(eU){let e=null==(t=null==i?void 0:i[eU])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}})(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return!!(null==i?void 0:i.remote)&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&B.WebKitPlaybackTargetAvailabilityEvent))return void console.warn("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!eK||!e$(t))return v.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;if(!ej||!eF(t))return v.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===r||(null==t?void 0:t.volume)==void 0)return v.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==r&&e1.then(t=>e(t?void 0:v.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return eY&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?v.UNAVAILABLE:void 0:v.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>eG?(null==t?void 0:t.availability)==="not-available"?v.UNAVAILABLE:void 0:v.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:v.UNAVAILABLE:v.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?v.UNAVAILABLE:void 0:v.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}},e5={[n.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let s,o,{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=eO(l,{kind:h.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),s=i.href}}let u=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:c}},[n.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[n.MEDIA_PLAY_REQUEST](e,t){var i;if(e.mediaStreamType.get(t)===b.LIVE){let a=!(e.mediaTargetLiveWindow.get(t)>0),r=null==(i=e.mediaSeekable.get(t))?void 0:i[1];a&&r&&e.mediaCurrentTime.set(r,t)}e.mediaPaused.set(!1,t)},[n.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[n.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[n.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[n.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[n.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[n.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i;let a=null==(i=e.mediaSeekable.get(t))?void 0:i[1];Number.isNaN(Number(a))&&e.mediaCurrentTime.set(a,t)},[n.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=eZ(t),s=eL(i),o=null==(a=s[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&B.localStorage.setItem("media-chrome-pref-subtitles-lang",o),eN(m.SHOWING,n,s)},[n.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=eZ(t);eN(m.DISABLED,a,null!=i?i:[])},[n.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){ez(t,i)},[n.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[n.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[n.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[n.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[n.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t)},[n.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[n.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[n.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[n.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var e4=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},e9=(e,t,i)=>(e4(e,t,"read from private field"),i?i.call(e):t.get(e)),e8=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},e7=(e,t,i,a)=>(e4(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),e6=(e,t,i)=>(e4(e,t,"access private method"),i);let te=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],tt={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset"};class ti extends eA{constructor(){super(),e8(this,su),e8(this,sh),e8(this,sp),e8(this,sr,new eI(this,tt.HOTKEYS)),e8(this,sn,void 0),e8(this,ss,void 0),e8(this,so,void 0),e8(this,sl,void 0),e8(this,sd,e=>{var t;null==(t=e9(this,ss))||t.dispatch(e)}),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,this.associateElement(this);let e={};e7(this,so,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new B.CustomEvent(c[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(tt.NO_HOTKEYS,tt.HOTKEYS,tt.DEFAULT_STREAM_TYPE,tt.DEFAULT_SUBTITLES,tt.DEFAULT_DURATION)}get mediaStore(){return e9(this,ss)}set mediaStore(e){var t,i;if(e9(this,ss)&&(null==(t=e9(this,sl))||t.call(this),e7(this,sl,void 0)),e7(this,ss,e),!e9(this,ss)&&!this.hasAttribute(tt.NO_DEFAULT_STORE))return void e6(this,su,sc).call(this);e7(this,sl,null==(i=e9(this,ss))?void 0:i.subscribe(e9(this,so)))}get fullscreenElement(){var e;return null!=(e=e9(this,sn))?e:this}set fullscreenElement(e){var t;this.hasAttribute(tt.FULLSCREEN_ELEMENT)&&this.removeAttribute(tt.FULLSCREEN_ELEMENT),e7(this,sn,e),null==(t=e9(this,ss))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}attributeChangedCallback(e,t,i){var a,r,n,s,o,l;if(super.attributeChangedCallback(e,t,i),e===tt.NO_HOTKEYS)i!==t&&""===i?(this.hasAttribute(tt.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===tt.HOTKEYS)e9(this,sr).value=i;else if(e===tt.DEFAULT_SUBTITLES&&i!==t)null==(a=e9(this,ss))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(tt.DEFAULT_SUBTITLES)}});else if(e===tt.DEFAULT_STREAM_TYPE)null==(n=e9(this,ss))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(tt.DEFAULT_STREAM_TYPE))?r:void 0}});else if(e===tt.LIVE_EDGE_OFFSET)null==(s=e9(this,ss))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(tt.LIVE_EDGE_OFFSET)?+this.getAttribute(tt.LIVE_EDGE_OFFSET):void 0}});else if(e===tt.FULLSCREEN_ELEMENT){let e=i?null==(o=this.getRootNode())?void 0:o.getElementById(i):void 0;e7(this,sn,e),null==(l=e9(this,ss))||l.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}}connectedCallback(){var e,t;e9(this,ss)||this.hasAttribute(tt.NO_DEFAULT_STORE)||e6(this,su,sc).call(this),null==(e=e9(this,ss))||e.dispatch({type:"documentelementchangerequest",detail:W}),super.connectedCallback(),e9(this,ss)&&!e9(this,sl)&&e7(this,sl,null==(t=e9(this,ss))?void 0:t.subscribe(e9(this,so))),this.enableHotkeys()}disconnectedCallback(){var e,t,i,a;null==(e=super.disconnectedCallback)||e.call(this),e9(this,ss)&&(null==(t=e9(this,ss))||t.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(i=e9(this,ss))||i.dispatch({type:n.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),e9(this,sl)&&(null==(a=e9(this,sl))||a.call(this),e7(this,sl,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=e9(this,ss))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=e9(this,ss))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){tc(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=th(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(n).forEach(t=>{e.addEventListener(t,e9(this,sd))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(n).forEach(t=>{e.removeEventListener(t,e9(this,sd))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),e9(this,ss)&&Object.entries(e9(this,ss).getState()).forEach(([t,i])=>{tc([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",e6(this,sp,sv))}disableHotkeys(){this.removeEventListener("keydown",e6(this,sp,sv)),this.removeEventListener("keyup",e6(this,sh,sm))}get hotkeys(){return e9(this,sr)}keyboardShortcutHandler(e){var t,i,a,r,s,o;let l,d,u;if(!((null!=(r=null!=(a=null==(t=e.target.getAttribute(tt.KEYS_USED))?void 0:t.split(" "))?a:null==(i=e.target)?void 0:i.keysUsed)?r:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||e9(this,sr).contains(`no${e.key.toLowerCase()}`))&&!(" "===e.key&&e9(this,sr).contains("nospace")))switch(e.key){case" ":case"k":l=e9(this,ss).getState().mediaPaused?n.MEDIA_PLAY_REQUEST:n.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new B.CustomEvent(l,{composed:!0,bubbles:!0}));break;case"m":l="off"===this.mediaStore.getState().mediaVolumeLevel?n.MEDIA_UNMUTE_REQUEST:n.MEDIA_MUTE_REQUEST,this.dispatchEvent(new B.CustomEvent(l,{composed:!0,bubbles:!0}));break;case"f":l=this.mediaStore.getState().mediaIsFullscreen?n.MEDIA_EXIT_FULLSCREEN_REQUEST:n.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new B.CustomEvent(l,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new B.CustomEvent(n.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let e=this.hasAttribute(tt.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(tt.KEYBOARD_BACKWARD_SEEK_OFFSET):10;d=Math.max((null!=(s=this.mediaStore.getState().mediaCurrentTime)?s:0)-e,0),u=new B.CustomEvent(n.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:d}),this.dispatchEvent(u);break}case"ArrowRight":{let e=this.hasAttribute(tt.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(tt.KEYBOARD_FORWARD_SEEK_OFFSET):10;d=Math.max((null!=(o=this.mediaStore.getState().mediaCurrentTime)?o:0)+e,0),u=new B.CustomEvent(n.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:d}),this.dispatchEvent(u)}}}}sr=new WeakMap,sn=new WeakMap,ss=new WeakMap,so=new WeakMap,sl=new WeakMap,sd=new WeakMap,su=new WeakSet,sc=function(){var e;this.mediaStore=(({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=e3,requestMap:r=e5,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o,l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0!=e&&(eX(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u))))},h=()=>{c(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,n,u,p,v,b,E,f,g,y,_,A,T,k,w;let S=!!o;if(o={...d,...null!=o?o:{},...e},S)return;await e2(...Object.values(e));let I=l.length>0&&0===t&&s,C=d.media!==o.media,R=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),L=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),D=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(v=o.media)?void 0:v.audioTracks),x=(null==(b=d.media)?void 0:b.remote)!==(null==(E=o.media)?void 0:E.remote),M=d.documentElement!==o.documentElement,N=!!d.media&&(C||I),O=!!(null==(f=d.media)?void 0:f.textTracks)&&(R||I),P=!!(null==(g=d.media)?void 0:g.videoRenditions)&&(L||I),U=!!(null==(y=d.media)?void 0:y.audioTracks)&&(D||I),B=!!(null==(_=d.media)?void 0:_.remote)&&(x||I),W=!!d.documentElement&&(M||I),H=N||O||P||U||B||W,V=0===l.length&&1===t&&s,q=!!o.media&&(C||V),F=!!(null==(A=o.media)?void 0:A.textTracks)&&(R||V),$=!!(null==(T=o.media)?void 0:T.videoRenditions)&&(L||V),K=!!(null==(k=o.media)?void 0:k.audioTracks)&&(D||V),j=!!(null==(w=o.media)?void 0:w.remote)&&(x||V),G=!!o.documentElement&&(M||V),Y=q||F||$||K||j||G;if(!(H||Y)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let p=i=>{c({[e]:t(d,i)})};h=m[e].mediaEvents,i.forEach(t=>{h&&N&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),q&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),h=m[e].textTracksEvents,a.forEach(t=>{var i,a;h&&O&&(null==(i=d.media.textTracks)||i.removeEventListener(t,h),m[e].textTracksEvents=void 0),F&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;h&&P&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),$&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),h=m[e].audioTracksEvents,n.forEach(t=>{var i,a;h&&U&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,h),m[e].audioTracksEvents=void 0),K&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),h=m[e].remoteEvents,s.forEach(t=>{var i,a;h&&B&&(null==(i=d.media.remote)||i.removeEventListener(t,h),m[e].remoteEvents=void 0),j&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),h=m[e].rootEvents,l.forEach(t=>{h&&W&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),G&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let v=m[e].stateOwnersUpdateHandlers;u.forEach(t=>{v&&H&&v(),Y&&(m[e].stateOwnersUpdateHandlers=t(p,o))})}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;if(r[t])return void c(r[t](a,d,e));"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t})},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(tt.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(tt.DEFAULT_DURATION)?+this.getAttribute(tt.DEFAULT_DURATION):void 0,defaultStreamType:null!=(e=this.getAttribute(tt.DEFAULT_STREAM_TYPE))?e:void 0,liveEdgeOffset:this.hasAttribute(tt.LIVE_EDGE_OFFSET)?+this.getAttribute(tt.LIVE_EDGE_OFFSET):void 0,noVolumePref:this.hasAttribute(tt.NO_VOLUME_PREF),noSubtitlesLangPref:this.hasAttribute(tt.NO_SUBTITLES_LANG_PREF)}})},sh=new WeakSet,sm=function(e){let{key:t}=e;if(!te.includes(t))return void this.removeEventListener("keyup",e6(this,sh,sm));this.keyboardShortcutHandler(e)},sp=new WeakSet,sv=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!te.includes(a))return void this.removeEventListener("keyup",e6(this,sh,sm));[" ","ArrowLeft","ArrowRight"].includes(a)&&!(e9(this,sr).contains(`no${a.toLowerCase()}`)||" "===a&&e9(this,sr).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",e6(this,sh,sm),{once:!0})};let ta=Object.values(d),tr=Object.values(o),tn=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(B.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let o=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,s.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||o)?(n||o).filter(e=>ta.includes(e)):[]},ts=e=>(e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&B.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof B.customElements.get(e.nodeName.toLowerCase()))&&B.customElements.upgrade(e),tr.some(t=>t in e)})(e)||!!tn(e).length,to=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},tl={[d.MEDIA_SUBTITLES_LIST]:ex,[d.MEDIA_SUBTITLES_SHOWING]:ex,[d.MEDIA_SEEKABLE]:to,[d.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(to).join(" "),[d.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[d.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(_).join(" ")},[d.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(k).join(" ")}},td=async(e,t,i)=>{var a,r;if(e.isConnected||await I(0),"boolean"==typeof i||null==i)return en(e,t,i);if("number"==typeof i)return ea(e,t,i);if("string"==typeof i)return eo(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=tl[t])?void 0:a.call(tl,i))?r:i;return e.setAttribute(t,n)},tu=(e,t)=>{if((e=>{var t;return!!(null==(t=e.closest)?void 0:t.call(e,'*[slot="media"]'))})(e))return;let i=(e,t)=>{var i,a;ts(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>tu(e,t))},a=null==e?void 0:e.nodeName.toLowerCase();if(a.includes("-")&&!ts(e))return void B.customElements.whenDefined(a).then(()=>{i(e,t)});i(e,t)},tc=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=tn(e),r=t.toLowerCase();a.includes(r)&&td(e,r,i)})},th=(e,t,i)=>{tu(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(n.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(n.UNREGISTER_MEDIA_STATE_RECEIVER,r);let o=[],l=e=>{let a=e.target;"media"!==a.name&&(o.forEach(e=>tu(e,i)),(o=[...a.assignedElements({flatten:!0})]).forEach(e=>tu(e,t)))};e.addEventListener("slotchange",l);let d=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:o,attributeName:l}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>tu(e,t)),Array.prototype.forEach.call(r,e=>tu(e,i))):"attributes"===n&&l===s.MEDIA_CHROME_ATTRIBUTES&&(ts(o)?t(o):i(o))})});return d.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{tu(e,i),e.removeEventListener("slotchange",l),d.disconnect(),e.removeEventListener(n.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(n.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};B.customElements.get("media-controller")||B.customElements.define("media-controller",ti);var tm=Object.defineProperty,tp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tv=(e,t,i)=>(tp(e,t,"read from private field"),i?i.call(e):t.get(e)),tb=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tE=(e,t,i,a)=>(tp(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let tf=W.createElement("template");tf.innerHTML=`
<style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, bold)
      var(--media-font-size, 14px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
    padding: var(--media-button-padding, var(--media-control-padding, 10px));
    justify-content: var(--media-button-justify-content, center);
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    box-sizing: border-box;
    transition: background .15s linear;
    pointer-events: auto;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }
  
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }
</style>
`;class tg extends B.HTMLElement{constructor(e={}){if(super(),tb(this,sb,void 0),((e,t,i)=>((e,t,i)=>t in e?tm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!=typeof t?t+"":t,i))(this,"preventClick",!1),tb(this,sE,e=>{this.preventClick||this.handleClick(e)}),tb(this,sf,e=>{let{key:t}=e;if(!this.keysUsed.includes(t))return void this.removeEventListener("keyup",tv(this,sf));this.preventClick||this.handleClick(e)}),tb(this,sg,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a))return void this.removeEventListener("keyup",tv(this,sf));this.addEventListener("keyup",tv(this,sf),{once:!0})}),!this.shadowRoot){this.attachShadow({mode:"open"});let t=tf.content.cloneNode(!0);this.nativeEl=t;let i=e.slotTemplate;i||((i=W.createElement("template")).innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(i.content.cloneNode(!0)),this.shadowRoot.appendChild(t)}}static get observedAttributes(){return["disabled",s.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",tv(this,sE)),this.addEventListener("keydown",tv(this,sg)),this.tabIndex=0}disable(){this.removeEventListener("click",tv(this,sE)),this.removeEventListener("keydown",tv(this,sg)),this.removeEventListener("keyup",tv(this,sf)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=tv(this,sb))?void 0:a.unassociateElement)||r.call(a,this),tE(this,sb,null)),i&&this.isConnected&&(tE(this,sb,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=tv(this,sb))?void 0:o.associateElement)||l.call(o,this))):"disabled"===e&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){var e,t,i;let{style:a}=ee(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","button");let r=this.getAttribute(s.MEDIA_CONTROLLER);r&&(tE(this,sb,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=tv(this,sb))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=tv(this,sb))?void 0:e.unassociateElement)||t.call(e,this),tE(this,sb,null)}get keysUsed(){return["Enter"," "]}handleClick(e){}}sb=new WeakMap,sE=new WeakMap,sf=new WeakMap,sg=new WeakMap,B.customElements.get("media-chrome-button")||B.customElements.define("media-chrome-button",tg);let ty=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,t_=W.createElement("template");t_.innerHTML=`
  <style>
  :host([${d.MEDIA_IS_AIRPLAYING}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${d.MEDIA_IS_AIRPLAYING}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${ty}</slot>
    <slot name="exit">${ty}</slot>
  </slot>
`;let tA=e=>{let t=e.mediaIsAirplaying?g.EXIT_AIRPLAY():g.ENTER_AIRPLAY();e.setAttribute("aria-label",t)};class tT extends tg{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_IS_AIRPLAYING,d.MEDIA_AIRPLAY_UNAVAILABLE]}constructor(e={}){super({slotTemplate:t_,...e})}connectedCallback(){super.connectedCallback(),tA(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_IS_AIRPLAYING&&tA(this)}get mediaIsAirplaying(){return er(this,d.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){en(this,d.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return es(this,d.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){eo(this,d.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new B.CustomEvent(n.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}function tk(e){return e.split("-")[0]}B.customElements.get("media-airplay-button")||B.customElements.define("media-airplay-button",tT);var tw=Object.defineProperty,tS=(e,t,i)=>(((e,t,i)=>t in e?tw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!=typeof t?t+"":t,i),i);class tI extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),tS(this,"action"),tS(this,"relatedTarget"),this.action=e,this.relatedTarget=t}}class tC extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),tS(this,"newState"),tS(this,"oldState"),this.newState=e,this.oldState=t}}var tR=Object.defineProperty,tL=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tD=(e,t,i)=>(tL(e,t,"read from private field"),i?i.call(e):t.get(e)),tx=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tM=(e,t,i,a)=>(tL(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),tN=(e,t,i)=>(tL(e,t,"access private method"),i);function tO({type:e,text:t,value:i,checked:a}){let r=W.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let n=W.createElement("span");return n.textContent=t,r.append(n),r}function tP(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let tU=W.createElement("template");tU.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
      border-radius: var(--media-menu-border-radius);
      border: var(--media-menu-border, none);
      display: var(--media-menu-display, inline-flex);
      transition: var(--media-menu-transition-in,
        visibility 0s,
        opacity .2s ease-out,
        transform .15s ease-out,
        left .2s ease-in-out,
        min-width .2s ease-in-out,
        min-height .2s ease-in-out
      ) !important;
      
      visibility: var(--media-menu-visibility, visible);
      opacity: var(--media-menu-opacity, 1);
      max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
      transform: var(--media-menu-transform-in, translateY(0) scale(1));
      flex-direction: column;
      
      min-height: 0;
      position: relative;
      box-sizing: border-box;
    }

    :host([hidden]) {
      transition: var(--media-menu-transition-out,
        visibility .15s ease-in,
        opacity .15s ease-in,
        transform .15s ease-in
      ) !important;
      visibility: var(--media-menu-hidden-visibility, hidden);
      opacity: var(--media-menu-hidden-opacity, 0);
      max-height: var(--media-menu-hidden-max-height,
        var(--media-menu-max-height, var(--_menu-max-height, 300px)));
      transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
      pointer-events: none;
    }

    :host([slot="submenu"]) {
      background: none;
      width: 100%;
      min-height: 100%;
      position: absolute;
      bottom: 0;
      right: -100%;
    }

    #container {
      display: flex;
      flex-direction: column;
      min-height: 0;
      transition: transform .2s ease-out;
      transform: translate(0, 0);
    }

    #container.has-expanded {
      transition: transform .2s ease-in;
      transform: translate(-100%, 0);
    }

    slot[name="header"] {
      display: flex;
      padding: .4em .7em;
      border-bottom: 1px solid rgb(255 255 255 / .25);
      cursor: default;
    }

    slot[name="header"][hidden] {
      display: none;
    }

    button[part~="back"] {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      display: inline-flex;
      align-items: center;
      cursor: pointer;
    }

    svg[part~="back"] {
      height: var(--media-menu-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
      margin-right: .5ch;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap);
      flex-direction: var(--media-menu-flex-direction, column);
      overflow: var(--media-menu-overflow, hidden auto);
      display: flex;
      min-height: 0;
    }

    :host([role="menu"]) slot:not([name]) {
      padding-block: .4em;
    }

    slot:not([name])::slotted([role="menu"]) {
      background: none;
    }

    media-chrome-menu-item > span {
      margin-right: .5ch;
      max-width: var(--media-menu-item-max-width);
      text-overflow: ellipsis;
      overflow: hidden;
    }
  </style>
  <style id="layout-row" media="width:0">

    slot[name="header"] {
      padding: .4em .5em;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap, .25em);
      flex-direction: var(--media-menu-flex-direction, row);
      padding-inline: .5em;
    }

    media-chrome-menu-item {
      padding: .3em .5em;
    }

    media-chrome-menu-item[aria-checked="true"] {
      background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
    }

    
    media-chrome-menu-item::part(checked-indicator) {
      display: var(--media-menu-item-checked-indicator-display, none);
    }
  </style>
  <div id="container">
    <slot name="header" hidden>
      <button part="back button" aria-label="Back to previous menu">
        <slot name="back-icon">
          <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
            <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
          </svg>
        </slot>
        <slot name="title"></slot>
      </button>
    </slot>
    <slot></slot>
  </div>
  <slot name="checked-indicator" hidden></slot>
`;let tB={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class tW extends B.HTMLElement{constructor(){super(),tx(this,sC),tx(this,sD),tx(this,sM),tx(this,sO),tx(this,sU),tx(this,sV),tx(this,sF),tx(this,sK),tx(this,sG),tx(this,sZ),tx(this,sz),tx(this,sJ),tx(this,s1),tx(this,s3),tx(this,s4),tx(this,s8),tx(this,s6),tx(this,sy,void 0),tx(this,s_,void 0),tx(this,sA,void 0),tx(this,sT,""),tx(this,sk,null),tx(this,sw,new Set),tx(this,sS,void 0),tx(this,sI,!1),tx(this,sL,()=>{let e=tD(this,sw),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));tM(this,sw,t)}),tx(this,sW,()=>{tN(this,sV,sq).call(this,!1),tN(this,sF,s$).call(this,!1)}),tx(this,sH,()=>{tN(this,sV,sq).call(this,!1)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=this.constructor.template.content.cloneNode(!0),this.shadowRoot.append(this.nativeEl)),this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),tM(this,sS,new MutationObserver(tD(this,sL))),tD(this,sS).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[tB.DISABLED,tB.HIDDEN,tB.STYLE,tB.ANCHOR,s.MEDIA_CONTROLLER]}static formatMenuItemText(e){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":tN(this,sC,sR).call(this,e);break;case"invoke":tN(this,sM,sN).call(this,e);break;case"click":tN(this,sK,sj).call(this,e);break;case"toggle":tN(this,sZ,sQ).call(this,e);break;case"focusout":tN(this,sJ,s0).call(this,e);break;case"keydown":tN(this,s1,s2).call(this,e)}}connectedCallback(){var e,t;tN(this,sD,sx).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),tM(this,sy,j(this)),null==(t=null==(e=tD(this,sy))?void 0:e.associateElement)||t.call(e,this),this.hidden||(F(tV(this),tD(this,sW)),F(this,tD(this,sH)))}disconnectedCallback(){var e,t;$(tV(this),tD(this,sW)),$(this,tD(this,sH)),this.disable(),null==(t=null==(e=tD(this,sy))?void 0:e.unassociateElement)||t.call(e,this),tM(this,sy,null)}attributeChangedCallback(e,t,i){var a,r,n,o;e===tB.HIDDEN&&i!==t?(tD(this,sI)||tM(this,sI,!0),this.hidden?tN(this,sU,sB).call(this):tN(this,sO,sP).call(this),this.dispatchEvent(new tC({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===s.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=tD(this,sy))?void 0:a.unassociateElement)||r.call(a,this),tM(this,sy,null)),i&&this.isConnected&&(tM(this,sy,j(this)),null==(o=null==(n=tD(this,sy))?void 0:n.associateElement)||o.call(n,this))):e===tB.DISABLED&&i!==t?null==i?this.enable():this.disable():e===tB.STYLE&&i!==t&&tN(this,sD,sx).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=X(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(tH)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&tN(this,s6,oe).call(this,t)}focus(){if(tM(this,s_,z()),this.items.length){tN(this,s8,s7).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=tN(this,s3,s5).call(this,e);i&&(tN(this,s6,oe).call(this,i,"checkbox"===i.type),tD(this,sA)&&!this.hidden&&(null==(t=tD(this,s_))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,n=null!=(i=null!=(t=tN(this,s3,s5).call(this,e))?t:tN(this,s4,s9).call(this))?i:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===a?s++:"ArrowUp"===a?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),tN(this,s8,s7).call(this,r[s]),r[s].focus()}}function tH(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function tV(e){var t;return null!=(t=e.getAttribute("bounds")?Q(e,`#${e.getAttribute("bounds")}`):K(e)||e.parentElement)?t:e}sy=new WeakMap,s_=new WeakMap,sA=new WeakMap,sT=new WeakMap,sk=new WeakMap,sw=new WeakMap,sS=new WeakMap,sI=new WeakMap,sC=new WeakSet,sR=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&(this.shadowRoot.querySelector('slot[name="header"]').hidden=0===t.assignedNodes().length),t.name||tD(this,sL).call(this)},sL=new WeakMap,sD=new WeakSet,sx=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},sM=new WeakSet,sN=function(e){tM(this,sA,e.relatedTarget),Z(this,e.relatedTarget)||(this.hidden=!this.hidden)},sO=new WeakSet,sP=function(){var e;null==(e=tD(this,sA))||e.setAttribute("aria-expanded","true"),requestAnimationFrame(()=>tN(this,sV,sq).call(this,!1)),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),F(tV(this),tD(this,sW)),F(this,tD(this,sH))},sU=new WeakSet,sB=function(){var e;null==(e=tD(this,sA))||e.setAttribute("aria-expanded","false"),$(tV(this),tD(this,sW)),$(this,tD(this,sH))},sW=new WeakMap,sH=new WeakMap,sV=new WeakSet,sq=function(e,t){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:i,y:a}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a,r="x"==(["top","bottom"].includes(tk(i))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=tk(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){var i,a;let r,n;return{anchor:(i=e,a=t.offsetParent,r=i.getBoundingClientRect(),n=a.getBoundingClientRect(),{x:r.x-n.x,y:r.y-n.y,width:r.width,height:r.height}),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=t||(t=this.offsetWidth);let r=tV(this).getBoundingClientRect(),n=this.anchorElement.getBoundingClientRect(),s=r.width-i-t,o=r.height-a-this.offsetHeight,l=r.height-n.height,{style:d}=ee(this.shadowRoot,":host");e||d.setProperty("--media-menu-transition-in","none"),d.setProperty("position","absolute"),d.setProperty("right",`${Math.max(0,s)}px`),d.setProperty("bottom",`${o}px`),d.setProperty("--_menu-max-height",`${l}px`),d.removeProperty("--media-menu-transition-in")},sF=new WeakSet,s$=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=ee(this.shadowRoot,":host");if(e||a.setProperty("--media-menu-transition-in","none"),i){let a=i.offsetHeight,r=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${r}px`),this.style.setProperty("min-height",`${a}px`),tN(this,sV,sq).call(this,e,r)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),tN(this,sV,sq).call(this,e);a.removeProperty("--media-menu-transition-in")},sK=new WeakSet,sj=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(tD(this,sG,sY))){null==(t=tD(this,s_))||t.focus(),this.hidden=!0;return}let i=tN(this,s3,s5).call(this,e);!i||i.hasAttribute("disabled")||(tN(this,s8,s7).call(this,i),this.handleSelect(e))},sG=new WeakSet,sY=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.part.contains("back")&&e.part.contains("button"))},sZ=new WeakSet,sQ=function(e){if(e.target===this)return;tN(this,sz,sX).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement!=e.target&&("open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new tI({relatedTarget:i})));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);tN(this,sF,s$).call(this,!0)},sz=new WeakSet,sX=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},sJ=new WeakSet,s0=function(e){var t;Z(this,e.relatedTarget)||(tD(this,sI)&&(null==(t=tD(this,s_))||t.focus()),tD(this,sA)&&tD(this,sA)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},s1=new WeakSet,s2=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s))if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(tD(this,sI)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===s?(null==(n=tD(this,s_))||n.focus(),tD(this,sI)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)},s3=new WeakSet,s5=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},s4=new WeakSet,s9=function(){return this.items.find(e=>0===e.tabIndex)},s8=new WeakSet,s7=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},s6=new WeakSet,oe=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},((e,t,i)=>((e,t,i)=>t in e?tR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!=typeof t?t+"":t,i))(tW,"template",tU),B.customElements.get("media-chrome-menu")||B.customElements.define("media-chrome-menu",tW);var tq=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tF=(e,t,i)=>(tq(e,t,"read from private field"),i?i.call(e):t.get(e)),t$=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tK=(e,t,i,a)=>(tq(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),tj=(e,t,i)=>(tq(e,t,"access private method"),i);class tG extends tW{constructor(){super(...arguments),t$(this,oa),t$(this,on),t$(this,ot,[]),t$(this,oi,void 0)}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_AUDIO_TRACK_LIST,d.MEDIA_AUDIO_TRACK_ENABLED,d.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_AUDIO_TRACK_ENABLED&&t!==i?this.value=i:e===d.MEDIA_AUDIO_TRACK_LIST&&t!==i&&(tK(this,ot,T(i)),tj(this,oa,or).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",tj(this,on,os))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",tj(this,on,os))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:K(this).querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return tF(this,ot)}set mediaAudioTrackList(e){tK(this,ot,e),tj(this,oa,or).call(this)}get mediaAudioTrackEnabled(){return es(this,d.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(e){eo(this,d.MEDIA_AUDIO_TRACK_ENABLED,e)}}ot=new WeakMap,oi=new WeakMap,oa=new WeakSet,or=function(){if(tF(this,oi)===JSON.stringify(this.mediaAudioTrackList))return;tK(this,oi,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e)){let e=tO({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(tP(this,"checked-indicator")),this.defaultSlot.append(e)}},on=new WeakSet,os=function(){if(null==this.value)return;let e=new B.CustomEvent(n.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},B.customElements.get("media-audio-track-menu")||B.customElements.define("media-audio-track-menu",tG);class tY extends tg{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=X(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){this.invokeTargetElement.dispatchEvent(new tI({relatedTarget:this}))}}B.customElements.get("media-chrome-menu-button")||B.customElements.define("media-chrome-menu-button",tY);let tZ=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,tQ=W.createElement("template");tQ.innerHTML=`
  <slot name="icon">${tZ}</slot>
`;class tz extends tY{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_AUDIO_TRACK_ENABLED,d.MEDIA_AUDIO_TRACK_UNAVAILABLE]}constructor(){super({slotTemplate:tQ})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",f.AUDIO_TRACKS())}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:K(this).querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){return es(this,d.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(e){eo(this,d.MEDIA_AUDIO_TRACK_ENABLED,e)}}B.customElements.get("media-audio-track-menu-button")||B.customElements.define("media-audio-track-menu-button",tz);let tX=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,tJ=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,t0=W.createElement("template");t0.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }
  </style>

  <slot name="icon">
    <slot name="on">${tX}</slot>
    <slot name="off">${tJ}</slot>
  </slot>
`;let t1=e=>{e.setAttribute("aria-checked",eP(e))};class t2 extends tg{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_SUBTITLES_LIST,d.MEDIA_SUBTITLES_SHOWING]}constructor(e={}){super({slotTemplate:t0,...e}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",f.CLOSED_CAPTIONS()),t1(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_SUBTITLES_SHOWING&&t1(this)}get mediaSubtitlesList(){return t3(this,d.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){t5(this,d.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return t3(this,d.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){t5(this,d.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new B.CustomEvent(n.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}let t3=(e,t)=>{let i=e.getAttribute(t);return i?eR(i):[]},t5=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=ex(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};B.customElements.get("media-captions-button")||B.customElements.define("media-captions-button",t2);var t4=Object.defineProperty,t9=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},t8=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},t7=(e,t,i)=>(t9(e,t,"access private method"),i);let t6=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`,ie=W.createElement("template");ie.innerHTML=tW.template.innerHTML+`
  <slot name="captions-indicator" hidden>${t6}</slot>`;class it extends tW{constructor(){super(...arguments),t8(this,ol),t8(this,ou),t8(this,oo,void 0)}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_SUBTITLES_LIST,d.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_SUBTITLES_LIST&&t!==i?t7(this,ol,od).call(this):e===d.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",t7(this,ou,oc))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",t7(this,ou,oc))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:K(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return ii(this,d.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){ia(this,d.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return ii(this,d.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){ia(this,d.MEDIA_SUBTITLES_SHOWING,e)}}oo=new WeakMap,ol=new WeakSet,od=function(){var e,t,i,a,r,n;if(t9(this,t=oo,"read from private field"),(i?i.call(this):t.get(this))===JSON.stringify(this.mediaSubtitlesList))return;a=oo,r=JSON.stringify(this.mediaSubtitlesList),t9(this,a,"write to private field"),n?n.call(this,r):a.set(this,r),this.defaultSlot.textContent="";let s=!this.value,o=tO({type:"radio",text:this.formatMenuItemText("Off"),value:"off",checked:s});for(let t of(o.prepend(tP(this,"checked-indicator")),this.defaultSlot.append(o),this.mediaSubtitlesList)){let i=tO({type:"radio",text:this.formatMenuItemText(t.label,t),value:eD(t),checked:this.value==eD(t)});i.prepend(tP(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(tP(this,"captions-indicator")),this.defaultSlot.append(i)}},ou=new WeakSet,oc=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(d.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new B.CustomEvent(n.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new B.CustomEvent(n.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},((e,t,i)=>((e,t,i)=>t in e?t4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!=typeof t?t+"":t,i))(it,"template",ie);let ii=(e,t)=>{let i=e.getAttribute(t);return i?eR(i):[]},ia=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=ex(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};B.customElements.get("media-captions-menu")||B.customElements.define("media-captions-menu",it);let ir=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,is=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,io=W.createElement("template");io.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }
  </style>

  <slot name="icon">
    <slot name="on">${ir}</slot>
    <slot name="off">${is}</slot>
  </slot>
`;let il=e=>{e.setAttribute("aria-checked",eP(e))};class id extends tY{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_SUBTITLES_LIST,d.MEDIA_SUBTITLES_SHOWING]}constructor(e={}){super({slotTemplate:io,...e}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",f.CLOSED_CAPTIONS()),il(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_SUBTITLES_SHOWING&&il(this)}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:K(this).querySelector("media-captions-menu")}get mediaSubtitlesList(){return iu(this,d.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){ic(this,d.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return iu(this,d.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){ic(this,d.MEDIA_SUBTITLES_SHOWING,e)}}let iu=(e,t)=>{let i=e.getAttribute(t);return i?eR(i):[]},ic=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=ex(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};B.customElements.get("media-captions-menu-button")||B.customElements.define("media-captions-menu-button",id);let ih=W.createElement("template");ih.innerHTML=`
  <style>
  :host([${d.MEDIA_IS_CASTING}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${d.MEDIA_IS_CASTING}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
    <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
  </slot>
`;let im=e=>{let t=e.mediaIsCasting?g.EXIT_CAST():g.ENTER_CAST();e.setAttribute("aria-label",t)};class ip extends tg{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_IS_CASTING,d.MEDIA_CAST_UNAVAILABLE]}constructor(e={}){super({slotTemplate:ih,...e})}connectedCallback(){super.connectedCallback(),im(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_IS_CASTING&&im(this)}get mediaIsCasting(){return er(this,d.MEDIA_IS_CASTING)}set mediaIsCasting(e){en(this,d.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return es(this,d.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){eo(this,d.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?n.MEDIA_EXIT_CAST_REQUEST:n.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new B.CustomEvent(e,{composed:!0,bubbles:!0}))}}B.customElements.get("media-cast-button")||B.customElements.define("media-cast-button",ip);var iv=Object.defineProperty,ib=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iE=(e,t,i)=>(ib(e,t,"read from private field"),i?i.call(e):t.get(e)),ig=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iy=(e,t,i,a)=>(ib(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),i_=(e,t,i)=>(ib(e,t,"access private method"),i);let iA=W.createElement("template");iA.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-dialog-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
      border-radius: var(--media-dialog-border-radius);
      border: var(--media-dialog-border, none);
      display: var(--media-dialog-display, inline-flex);
      transition: var(--media-dialog-transition-in,
        visibility 0s,
        opacity .2s ease-out,
        transform .15s ease-out
      ) !important;
      
      visibility: var(--media-dialog-visibility, visible);
      opacity: var(--media-dialog-opacity, 1);
      transform: var(--media-dialog-transform-in, translateY(0) scale(1));
    }

    :host([hidden]) {
      transition: var(--media-dialog-transition-out,
        visibility .15s ease-in,
        opacity .15s ease-in,
        transform .15s ease-in
      ) !important;
      visibility: var(--media-dialog-hidden-visibility, hidden);
      opacity: var(--media-dialog-hidden-opacity, 0);
      transform: var(--media-dialog-transform-out, translateY(2px) scale(.99));
      pointer-events: none;
    }
  </style>
  <slot></slot>
`;let iT={HIDDEN:"hidden",ANCHOR:"anchor"};class ik extends B.HTMLElement{constructor(){super(),ig(this,op),ig(this,ob),ig(this,of),ig(this,oy),ig(this,oA),ig(this,oh,void 0),ig(this,om,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=this.constructor.template.content.cloneNode(!0),this.shadowRoot.append(this.nativeEl)),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[iT.HIDDEN,iT.ANCHOR]}handleEvent(e){switch(e.type){case"invoke":i_(this,of,og).call(this,e);break;case"focusout":i_(this,oy,o_).call(this,e);break;case"keydown":i_(this,oA,oT).call(this,e)}}connectedCallback(){this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){e===iT.HIDDEN&&i!==t&&(this.hidden?i_(this,ob,oE).call(this):i_(this,op,ov).call(this))}focus(){iy(this,oh,z());let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}get keysUsed(){return["Escape","Tab"]}}oh=new WeakMap,om=new WeakMap,op=new WeakSet,ov=function(){var e;null==(e=iE(this,om))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},ob=new WeakSet,oE=function(){var e;null==(e=iE(this,om))||e.setAttribute("aria-expanded","false")},of=new WeakSet,og=function(e){iy(this,om,e.relatedTarget),Z(this,e.relatedTarget)||(this.hidden=!this.hidden)},oy=new WeakSet,o_=function(e){var t;Z(this,e.relatedTarget)||(null==(t=iE(this,oh))||t.focus(),iE(this,om)&&iE(this,om)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},oA=new WeakSet,oT=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;o||l||d||this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===s&&(null==(n=iE(this,oh))||n.focus(),this.hidden=!0))},((e,t,i)=>((e,t,i)=>t in e?iv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!=typeof t?t+"":t,i))(ik,"template",iA),B.customElements.get("media-chrome-dialog")||B.customElements.define("media-chrome-dialog",ik);var iw=Object.defineProperty,iS=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iI=(e,t,i)=>(iS(e,t,"read from private field"),i?i.call(e):t.get(e)),iC=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iR=(e,t,i,a)=>(iS(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),iL=(e,t,i)=>(iS(e,t,"access private method"),i);let iD=W.createElement("template");iD.innerHTML=`
  <style>
    :host {
      transition: var(--media-menu-item-transition,
        background .15s linear,
        opacity .2s ease-in-out
      );
      outline: var(--media-menu-item-outline, 0);
      outline-offset: var(--media-menu-item-outline-offset, -1px);
      cursor: pointer;
      display: flex;
      align-items: center;
      align-self: stretch;
      justify-self: stretch;
      white-space: nowrap;
      white-space-collapse: collapse;
      text-wrap: nowrap;
      padding: .4em .8em .4em 1em;
    }

    :host(:focus-visible) {
      box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      outline: var(--media-menu-item-hover-outline, 0);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host(:hover) {
      cursor: pointer;
      background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
      outline: var(--media-menu-item-hover-outline);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host([aria-checked="true"]) {
      background: var(--media-menu-item-checked-background);
    }

    :host([hidden]) {
      display: none;
    }

    :host([disabled]) {
      pointer-events: none;
      color: rgba(255, 255, 255, .3);
    }

    slot:not([name]) {
      width: 100%;
    }

    slot:not([name="submenu"]) {
      display: inline-flex;
      align-items: center;
      transition: inherit;
      opacity: var(--media-menu-item-opacity, 1);
    }

    slot[name="description"] {
      justify-content: end;
    }

    slot[name="description"] > span {
      display: inline-block;
      margin-inline: 1em .2em;
      max-width: var(--media-menu-item-description-max-width, 100px);
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: .8em;
      font-weight: 400;
      text-align: right;
      position: relative;
      top: .04em;
    }

    slot[name="checked-indicator"] {
      display: none;
    }

    :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
      display: var(--media-menu-item-checked-indicator-display, inline-block);
    }

    
    svg, img, ::slotted(svg), ::slotted(img) {
      height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
    }

    
    [part~="indicator"],
    ::slotted([part~="indicator"]) {
      fill: var(--media-menu-item-indicator-fill,
        var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
      height: var(--media-menu-item-indicator-height, 1.25em);
      margin-right: .5ch;
    }

    [part~="checked-indicator"] {
      visibility: hidden;
    }

    :host([aria-checked="true"]) [part~="checked-indicator"] {
      visibility: visible;
    }
  </style>
  <slot name="checked-indicator">
    <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
      <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
    </svg>
  </slot>
  <slot name="prefix"></slot>
  <slot></slot>
  <slot name="description"></slot>
  <slot name="suffix"></slot>
  <slot name="submenu"></slot>
`;let ix={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class iM extends B.HTMLElement{constructor(){super(),iC(this,oS),iC(this,oC),iC(this,oL),iC(this,oM),iC(this,oO),iC(this,oU),iC(this,ok,!1),iC(this,ow,void 0),iC(this,ox,()=>{var e,t;this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(t=null==(e=this.submenuElement.checkedItems)?void 0:e[0])?void 0:t.text,r=W.createElement("span");r.textContent=null!=a?a:"",i.replaceChildren(r)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.append(this.constructor.template.content.cloneNode(!0))),this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[ix.TYPE,ix.DISABLED,ix.CHECKED,ix.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),iN(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":iL(this,oS,oI).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":iL(this,oO,oP).call(this,e);break;case"keyup":iL(this,oM,oN).call(this,e)}}attributeChangedCallback(e,t,i){e===ix.CHECKED&&iN(this)&&!iI(this,ok)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===ix.TYPE&&i!==t?this.role="menuitem"+i:e===ix.DISABLED&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(ix.DISABLED)||this.enable(),this.role="menuitem"+this.type,iR(this,ow,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),iL(this,oU,oB).call(this)}disconnectedCallback(){this.disable(),iL(this,oU,oB).call(this),iR(this,ow,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=X(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(ix.TYPE))?e:""}set type(e){this.setAttribute(ix.TYPE,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(ix.VALUE))?e:this.text}set value(e){this.setAttribute(ix.VALUE,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(iN(this))return"true"===this.getAttribute("aria-checked")}set checked(e){iN(this)&&(iR(this,ok,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!iN(this)&&this.invokeTargetElement&&Z(this,e.target)&&this.invokeTargetElement.dispatchEvent(new tI({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function iN(e){return"radio"===e.type||"checkbox"===e.type}ok=new WeakMap,ow=new WeakMap,oS=new WeakSet,oI=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?iL(this,oC,oR).call(this):iL(this,oL,oD).call(this))},oC=new WeakSet,oR=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",iI(this,ox)),this.submenuElement.addEventListener("addmenuitem",iI(this,ox)),this.submenuElement.addEventListener("removemenuitem",iI(this,ox)),iI(this,ox).call(this)},oL=new WeakSet,oD=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",iI(this,ox)),this.submenuElement.removeEventListener("addmenuitem",iI(this,ox)),this.submenuElement.removeEventListener("removemenuitem",iI(this,ox)),iI(this,ox).call(this)},ox=new WeakMap,oM=new WeakSet,oN=function(e){let{key:t}=e;if(!this.keysUsed.includes(t))return void this.removeEventListener("keyup",iL(this,oM,oN));this.handleClick(e)},oO=new WeakSet,oP=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a))return void this.removeEventListener("keyup",iL(this,oM,oN));this.addEventListener("keyup",iL(this,oM,oN),{once:!0})},oU=new WeakSet,oB=function(){var e;let t=null==(e=iI(this,ow))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},((e,t,i)=>((e,t,i)=>t in e?iw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!=typeof t?t+"":t,i))(iM,"template",iD),B.customElements.get("media-chrome-menu-item")||B.customElements.define("media-chrome-menu-item",iM);var iO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iP=(e,t,i)=>(iO(e,t,"read from private field"),i?i.call(e):t.get(e)),iU=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iB=(e,t,i,a)=>(iO(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),iW=(e,t,i)=>(iO(e,t,"access private method"),i);let iH=W.createElement("template");iH.innerHTML=`
  <style>
    :host {
      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

      box-shadow: var(--_focus-visible-box-shadow, none);
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      display: inline-flex;
      align-items: center;
      
      vertical-align: middle;
      box-sizing: border-box;
      position: relative;
      width: 100px;
      transition: background .15s linear;
      cursor: pointer;
      pointer-events: auto;
      touch-action: none; 
      z-index: 1; 
    }

    
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgb(50 50 70 / .7));
    }

    #leftgap {
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
    }

    #rightgap {
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
    }

    #startpoint,
    #endpoint {
      position: absolute;
    }

    #endpoint {
      right: 0;
    }

    #container {
      
      width: var(--media-range-track-width, 100%);
      transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      min-width: 40px;
    }

    #range {
      
      display: var(--media-time-range-hover-display, block);
      bottom: var(--media-time-range-hover-bottom, -7px);
      height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
      width: 100%;
      position: absolute;
      cursor: pointer;

      -webkit-appearance: none; 
      -webkit-tap-highlight-color: transparent;
      background: transparent; 
      margin: 0;
      z-index: 1;
    }

    @media (hover: hover) {
      #range {
        bottom: var(--media-time-range-hover-bottom, -5px);
        height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
      }
    }

    
    
    #range::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: transparent;
      width: .1px;
      height: .1px;
    }

    
    #range::-moz-range-thumb {
      background: transparent;
      border: transparent;
      width: .1px;
      height: .1px;
    }

    #appearance {
      height: var(--media-range-track-height, 4px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      position: absolute;
      
      will-change: transform;
    }

    #background,
    #track {
      border-radius: var(--media-range-track-border-radius, 1px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #background {
      background: var(--media-range-track-background, rgb(255 255 255 / .2));
      backdrop-filter: var(--media-range-track-background-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-background-backdrop-filter);
    }

    #track {
      border: var(--media-range-track-border, none);
      outline: var(--media-range-track-outline);
      outline-offset: var(--media-range-track-outline-offset);
      backdrop-filter: var(--media-range-track-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
      box-shadow: var(--media-range-track-box-shadow, none);
      overflow: hidden;
    }

    #progress,
    #highlight,
    #pointer {
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #progress {
      background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
      transition: var(--media-range-track-transition);
    }

    #pointer {
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    @media (hover: hover) {
      :host(:hover) #pointer {
        transition: visibility .5s, opacity .5s;
        visibility: visible;
        opacity: 1;
      }
    }

    #thumb {
      width: var(--media-range-thumb-width, 10px);
      height: var(--media-range-thumb-height, 10px);
      margin-left: calc(var(--media-range-thumb-width, 10px) / -2);
      border: var(--media-range-thumb-border, none);
      border-radius: var(--media-range-thumb-border-radius, 10px);
      background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
      box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
      transition: var(--media-range-thumb-transition);
      transform: var(--media-range-thumb-transform, none);
      opacity: var(--media-range-thumb-opacity, 1);
      position: absolute;
      left: 0;
      cursor: pointer;
    }

    :host([disabled]) #thumb {
      background-color: #777;
    }

    .segments #appearance {
      height: var(--media-range-segment-hover-height, 7px);
    }

    #background,
    #track {
      clip-path: url(#segments-clipping);
    }

    #segments {
      --segments-gap: var(--media-range-segments-gap, 2px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #segments-clipping {
      transform: translateX(calc(var(--segments-gap) / 2));
    }

    #segments-clipping:empty {
      display: none;
    }

    #segments-clipping rect {
      height: var(--media-range-track-height, 4px);
      y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
      transition: var(--media-range-segment-transition, transform .1s ease-in-out);
      transform: var(--media-range-segment-transform, scaleY(1));
      transform-origin: center;
    }
  </style>
  <div id="leftgap"></div>
  <div id="container">
    <div id="startpoint"></div>
    <div id="endpoint"></div>
    <div id="appearance" part="appearance">
      <div id="background"></div>
      <div id="track">
        <div id="highlight"></div>
        <div id="pointer"></div>
        <div id="progress"></div>
      </div>
      <div id="thumb"></div>
      <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
    </div>
    <input id="range" type="range" min="0" max="1" step="any" value="0">
  </div>
  <div id="rightgap"></div>
`;class iV extends B.HTMLElement{constructor(){super(),iU(this,oY),iU(this,oQ),iU(this,oX),iU(this,o0),iU(this,o2),iU(this,o5),iU(this,o9),iU(this,o7),iU(this,oW,void 0),iU(this,oH,void 0),iU(this,oV,void 0),iU(this,oq,void 0),iU(this,oF,{}),iU(this,o$,[]),iU(this,oK,()=>{if(this.range.matches(":focus-visible")){let{style:e}=ee(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),iU(this,oj,()=>{let{style:e}=ee(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),iU(this,oG,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(iH.content.cloneNode(!0))),this.container=this.shadowRoot.querySelector("#container"),iB(this,oV,this.shadowRoot.querySelector("#startpoint")),iB(this,oq,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",s.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=iP(this,oW))?void 0:a.unassociateElement)||r.call(a,this),iB(this,oW,null)),i&&this.isConnected&&(iB(this,oW,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=iP(this,oW))?void 0:o.associateElement)||l.call(o,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),iW(this,oQ,oz).call(this)):(this.range.setAttribute(e,i),iW(this,oX,oJ).call(this)))}connectedCallback(){var e,t,i;let{style:a}=ee(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),iP(this,oF).pointer=ee(this.shadowRoot,"#pointer"),iP(this,oF).progress=ee(this.shadowRoot,"#progress"),iP(this,oF).thumb=ee(this.shadowRoot,"#thumb");let r=this.getAttribute(s.MEDIA_CONTROLLER);r&&(iB(this,oW,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=iP(this,oW))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",iP(this,oK)),this.shadowRoot.addEventListener("focusout",iP(this,oj)),iW(this,oQ,oz).call(this),F(this.container,iP(this,oG))}disconnectedCallback(){var e,t;iW(this,oX,oJ).call(this),null==(t=null==(e=iP(this,oW))?void 0:e.unassociateElement)||t.call(e,this),iB(this,oW,null),this.shadowRoot.removeEventListener("focusin",iP(this,oK)),this.shadowRoot.removeEventListener("focusout",iP(this,oj)),$(this.container,iP(this,oG))}updatePointerBar(e){var t;null==(t=iP(this,oF).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=iP(this,oF).progress)||e.style.setProperty("width",`${i}%`),null==(t=iP(this,oF).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;iP(this,oF).activeSegment=et(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];iB(this,o$,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,s]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?a:i[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=W.createElementNS("http://www.w3.org/2000/svg","rect"),c=ee(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",o),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){return Math.max(0,Math.min(1,function(e,t,i,a){let r=J(i,a),n=J(i,{x:e,y:t}),s=J(a,{x:e,y:t});return n>r||s>r?+(n>s):n/r}(e.clientX,e.clientY,iP(this,oV).getBoundingClientRect(),iP(this,oq).getBoundingClientRect())))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":iW(this,o7,o6).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":iW(this,o2,o3).call(this,e);break;case"pointerdown":iW(this,o0,o1).call(this,e);break;case"pointerup":iW(this,o5,o4).call(this);break;case"pointerleave":iW(this,o9,o8).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}oW=new WeakMap,oH=new WeakMap,oV=new WeakMap,oq=new WeakMap,oF=new WeakMap,o$=new WeakMap,oK=new WeakMap,oj=new WeakMap,oG=new WeakMap,oY=new WeakSet,oZ=function(e){let t=iP(this,oF).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=iP(this,o$).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},oQ=new WeakSet,oz=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},oX=new WeakSet,oJ=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(e=B.window)||e.removeEventListener("pointerup",this),null==(t=B.window)||t.removeEventListener("pointermove",this)},o0=new WeakSet,o1=function(e){var t;iB(this,oH,e.composedPath().includes(this.range)),null==(t=B.window)||t.addEventListener("pointerup",this)},o2=new WeakSet,o3=function(e){var t;"mouse"!==e.pointerType&&iW(this,o0,o1).call(this,e),this.addEventListener("pointerleave",this),null==(t=B.window)||t.addEventListener("pointermove",this)},o5=new WeakSet,o4=function(){var e;null==(e=B.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},o9=new WeakSet,o8=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=B.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=iP(this,oF).activeSegment)||t.style.removeProperty("transform")},o7=new WeakSet,o6=function(e){this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),iW(this,oY,oZ).call(this,e),this.dragging&&("mouse"!==e.pointerType||!iP(this,oH))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},B.customElements.get("media-chrome-range")||B.customElements.define("media-chrome-range",iV);var iq=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iF=(e,t,i)=>(iq(e,t,"read from private field"),i?i.call(e):t.get(e)),i$=(e,t,i,a)=>(iq(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let iK=W.createElement("template");iK.innerHTML=`
  <style>
    :host {
      
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --media-loading-indicator-icon-height: 44px;
    }

    ::slotted(media-time-range),
    ::slotted(media-volume-range) {
      min-height: 100%;
    }

    ::slotted(media-time-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }
  </style>

  <slot></slot>
`;class ij extends B.HTMLElement{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,le,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(iK.content.cloneNode(!0)))}static get observedAttributes(){return[s.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=iF(this,le))?void 0:a.unassociateElement)||r.call(a,this),i$(this,le,null)),i&&this.isConnected&&(i$(this,le,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=iF(this,le))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(i$(this,le,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=iF(this,le))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=iF(this,le))?void 0:e.unassociateElement)||t.call(e,this),i$(this,le,null)}}le=new WeakMap,B.customElements.get("media-control-bar")||B.customElements.define("media-control-bar",ij);var iG=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iY=(e,t,i)=>(iG(e,t,"read from private field"),i?i.call(e):t.get(e)),iZ=(e,t,i,a)=>(iG(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let iQ=W.createElement("template");iQ.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
      padding: var(--media-control-padding, 10px);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      text-align: center;
      pointer-events: auto;
    }

    
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
      outline: 0;
    }

    
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <slot></slot>
`;class iz extends B.HTMLElement{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,lt,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(iQ.content.cloneNode(!0)))}static get observedAttributes(){return[s.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=iY(this,lt))?void 0:a.unassociateElement)||r.call(a,this),iZ(this,lt,null)),i&&this.isConnected&&(iZ(this,lt,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=iY(this,lt))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i;let{style:a}=ee(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(s.MEDIA_CONTROLLER);r&&(iZ(this,lt,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=iY(this,lt))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=iY(this,lt))?void 0:e.unassociateElement)||t.call(e,this),iZ(this,lt,null)}}lt=new WeakMap,B.customElements.get("media-text-display")||B.customElements.define("media-text-display",iz);var iX=iz,iJ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},i0=(e,t,i)=>(iJ(e,t,"read from private field"),i?i.call(e):t.get(e));class i1 extends iz{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,li,void 0),((e,t,i,a)=>(iJ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,li,this.shadowRoot.querySelector("slot")),i0(this,li).textContent=L(0)}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===d.MEDIA_DURATION&&(i0(this,li).textContent=L(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return ei(this,d.MEDIA_DURATION)}set mediaDuration(e){ea(this,d.MEDIA_DURATION,e)}}li=new WeakMap,B.customElements.get("media-duration-display")||B.customElements.define("media-duration-display",i1);let i2=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,i3=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,i5=W.createElement("template");i5.innerHTML=`
  <style>
  :host([${d.MEDIA_IS_FULLSCREEN}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${d.MEDIA_IS_FULLSCREEN}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${i2}</slot>
    <slot name="exit">${i3}</slot>
  </slot>
`;let i4=e=>{let t=e.mediaIsFullscreen?g.EXIT_FULLSCREEN():g.ENTER_FULLSCREEN();e.setAttribute("aria-label",t)};class i9 extends tg{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_IS_FULLSCREEN,d.MEDIA_FULLSCREEN_UNAVAILABLE]}constructor(e={}){super({slotTemplate:i5,...e})}connectedCallback(){super.connectedCallback(),i4(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_IS_FULLSCREEN&&i4(this)}get mediaFullscreenUnavailable(){return es(this,d.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){eo(this,d.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return er(this,d.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){en(this,d.MEDIA_IS_FULLSCREEN,e)}handleClick(){let e=this.mediaIsFullscreen?n.MEDIA_EXIT_FULLSCREEN_REQUEST:n.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new B.CustomEvent(e,{composed:!0,bubbles:!0}))}}B.customElements.get("media-fullscreen-button")||B.customElements.define("media-fullscreen-button",i9);let{MEDIA_TIME_IS_LIVE:i8,MEDIA_PAUSED:i7}=d,{MEDIA_SEEK_TO_LIVE_REQUEST:i6,MEDIA_PLAY_REQUEST:ae}=n,at=W.createElement("template");at.innerHTML=`
  <style>

  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${i8}]:not([${i7}])) slot[name=indicator] > *,
  :host([${i8}]:not([${i7}])) ::slotted([slot=indicator]) {
    fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
  }

  :host([${i8}]:not([${i7}])) {
    cursor: not-allowed;
  }

  </style>

  <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
  
  <slot name="spacer">&nbsp;</slot><slot name="text">LIVE</slot>
`;let ai=e=>{let t=e.mediaPaused||!e.mediaTimeIsLive,i=t?g.SEEK_LIVE():g.PLAYING_LIVE();e.setAttribute("aria-label",i),t?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class aa extends tg{static get observedAttributes(){return[...super.observedAttributes,i7,i8]}constructor(e={}){super({slotTemplate:at,...e})}connectedCallback(){ai(this),super.connectedCallback()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),ai(this)}get mediaPaused(){return er(this,d.MEDIA_PAUSED)}set mediaPaused(e){en(this,d.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return er(this,d.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){en(this,d.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new B.CustomEvent(i6,{composed:!0,bubbles:!0})),this.hasAttribute(i7)&&this.dispatchEvent(new B.CustomEvent(ae,{composed:!0,bubbles:!0})))}}B.customElements.get("media-live-button")||B.customElements.define("media-live-button",aa);var ar=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},an=(e,t,i)=>(ar(e,t,"read from private field"),i?i.call(e):t.get(e)),as=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ao=(e,t,i,a)=>(ar(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let al={LOADING_DELAY:"loadingdelay"},ad=W.createElement("template"),au=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;ad.innerHTML=`
<style>
:host {
  display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
  vertical-align: middle;
  box-sizing: border-box;
  --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=icon] > *,
:host ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 0);
  transition: opacity 0.15s;
}

:host([${d.MEDIA_LOADING}]:not([${d.MEDIA_PAUSED}])) slot[name=icon] > *,
:host([${d.MEDIA_LOADING}]:not([${d.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 1);
  transition: opacity 0.15s var(--_loading-indicator-delay);
}

:host #status {
  visibility: var(--media-loading-indicator-opacity, hidden);
  transition: visibility 0.15s;
}

:host([${d.MEDIA_LOADING}]:not([${d.MEDIA_PAUSED}])) #status {
  visibility: var(--media-loading-indicator-opacity, visible);
  transition: visibility 0.15s var(--_loading-indicator-delay);
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-indicator-icon-width);
  height: var(--media-loading-indicator-icon-height, 100px);
  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
  vertical-align: middle;
}
</style>

<slot name="icon">${au}</slot>
<div id="status" role="status" aria-live="polite">${f.MEDIA_LOADING()}</div>
`;class ac extends B.HTMLElement{constructor(){if(super(),as(this,la,void 0),as(this,lr,500),!this.shadowRoot){let e=this.attachShadow({mode:"open"}),t=ad.content.cloneNode(!0);e.appendChild(t)}}static get observedAttributes(){return[s.MEDIA_CONTROLLER,d.MEDIA_PAUSED,d.MEDIA_LOADING,al.LOADING_DELAY]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===al.LOADING_DELAY&&t!==i?this.loadingDelay=Number(i):e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=an(this,la))?void 0:a.unassociateElement)||r.call(a,this),ao(this,la,null)),i&&this.isConnected&&(ao(this,la,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=an(this,la))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(ao(this,la,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=an(this,la))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=an(this,la))?void 0:e.unassociateElement)||t.call(e,this),ao(this,la,null)}get loadingDelay(){return an(this,lr)}set loadingDelay(e){ao(this,lr,e);let{style:t}=ee(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return er(this,d.MEDIA_PAUSED)}set mediaPaused(e){en(this,d.MEDIA_PAUSED,e)}get mediaLoading(){return er(this,d.MEDIA_LOADING)}set mediaLoading(e){en(this,d.MEDIA_LOADING,e)}}la=new WeakMap,lr=new WeakMap,B.customElements.get("media-loading-indicator")||B.customElements.define("media-loading-indicator",ac);let{MEDIA_VOLUME_LEVEL:ah}=d,am=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,ap=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,av=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,ab=W.createElement("template");ab.innerHTML=`
  <style>
  
  :host(:not([${ah}])) slot:not([name=high]):not([name=icon]), 
  :host([${ah}=high]) slot:not([name=high]):not([name=icon]) {
    display: none !important;
  }

  :host([${ah}=off]) slot:not([name=off]):not([name=icon]) {
    display: none !important;
  }

  :host([${ah}=low]) slot:not([name=low]):not([name=icon]) {
    display: none !important;
  }

  :host([${ah}=medium]) slot:not([name=medium]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="off">${am}</slot>
    <slot name="low">${ap}</slot>
    <slot name="medium">${ap}</slot>
    <slot name="high">${av}</slot>
  </slot>
`;let aE=e=>{let t="off"===e.mediaVolumeLevel?g.UNMUTE():g.MUTE();e.setAttribute("aria-label",t)};class af extends tg{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_VOLUME_LEVEL]}constructor(e={}){super({slotTemplate:ab,...e})}connectedCallback(){aE(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===d.MEDIA_VOLUME_LEVEL&&aE(this),super.attributeChangedCallback(e,t,i)}get mediaVolumeLevel(){return es(this,d.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){eo(this,d.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?n.MEDIA_UNMUTE_REQUEST:n.MEDIA_MUTE_REQUEST;this.dispatchEvent(new B.CustomEvent(e,{composed:!0,bubbles:!0}))}}B.customElements.get("media-mute-button")||B.customElements.define("media-mute-button",af);let ag=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,ay=W.createElement("template");ay.innerHTML=`
  <style>
  :host([${d.MEDIA_IS_PIP}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${d.MEDIA_IS_PIP}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${ag}</slot>
    <slot name="exit">${ag}</slot>
  </slot>
`;let a_=e=>{let t=e.mediaIsPip?g.EXIT_PIP():g.ENTER_PIP();e.setAttribute("aria-label",t)};class aA extends tg{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_IS_PIP,d.MEDIA_PIP_UNAVAILABLE]}constructor(e={}){super({slotTemplate:ay,...e})}connectedCallback(){a_(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===d.MEDIA_IS_PIP&&a_(this),super.attributeChangedCallback(e,t,i)}get mediaPipUnavailable(){return es(this,d.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){eo(this,d.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return er(this,d.MEDIA_IS_PIP)}set mediaIsPip(e){en(this,d.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?n.MEDIA_EXIT_PIP_REQUEST:n.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new B.CustomEvent(e,{composed:!0,bubbles:!0}))}}B.customElements.get("media-pip-button")||B.customElements.define("media-pip-button",aA);var aT=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};let ak={RATES:"rates"},aw=[1,1.2,1.5,1.7,2],aS=W.createElement("template");aS.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
  </style>
  <slot name="icon"></slot>
`;class aI extends tg{constructor(e={}){super({slotTemplate:aS,...e}),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,ln,new eI(this,ak.RATES,{defaultValue:aw})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PLAYBACK_RATE,ak.RATES]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===ak.RATES&&(aT(this,ln).value=i),e===d.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",f.PLAYBACK_RATE({playbackRate:t}))}}get rates(){return aT(this,ln)}set rates(e){e?Array.isArray(e)&&(aT(this,ln).value=e.join(" ")):aT(this,ln).value=""}get mediaPlaybackRate(){return ei(this,d.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ea(this,d.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(this.rates.values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new B.CustomEvent(n.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}ln=new WeakMap,B.customElements.get("media-playback-rate-button")||B.customElements.define("media-playback-rate-button",aI);var aC=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aR=(e,t,i)=>(aC(e,t,"read from private field"),i?i.call(e):t.get(e)),aL=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aD=(e,t,i)=>(aC(e,t,"access private method"),i);let ax={RATES:"rates"};class aM extends tW{constructor(){super(),aL(this,lo),aL(this,ld),aL(this,ls,new eI(this,ax.RATES,{defaultValue:aw})),aD(this,lo,ll).call(this)}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PLAYBACK_RATE,ax.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_PLAYBACK_RATE&&t!=i?this.value=i:e===ax.RATES&&t!=i&&(aR(this,ls).value=i,aD(this,lo,ll).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",aD(this,ld,lu))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",aD(this,ld,lu))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:K(this).querySelector("media-playback-rate-menu-button")}get rates(){return aR(this,ls)}set rates(e){e?Array.isArray(e)&&(aR(this,ls).value=e.join(" ")):aR(this,ls).value="",aD(this,lo,ll).call(this)}get mediaPlaybackRate(){return ei(this,d.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ea(this,d.MEDIA_PLAYBACK_RATE,e)}}ls=new WeakMap,lo=new WeakSet,ll=function(){for(let e of(this.defaultSlot.textContent="",this.rates)){let t=tO({type:"radio",text:this.formatMenuItemText(`${e}x`,e),value:e,checked:this.mediaPlaybackRate==e});t.prepend(tP(this,"checked-indicator")),this.defaultSlot.append(t)}},ld=new WeakSet,lu=function(){if(!this.value)return;let e=new B.CustomEvent(n.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},B.customElements.get("media-playback-rate-menu")||B.customElements.define("media-playback-rate-menu",aM);var aN=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};let aO={RATES:"rates"},aP=[1,1.2,1.5,1.7,2],aU=W.createElement("template");aU.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
  </style>
  <slot name="icon"></slot>
`;class aB extends tY{constructor(e={}){super({slotTemplate:aU,...e}),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,lc,new eI(this,aO.RATES,{defaultValue:aP})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PLAYBACK_RATE,aO.RATES]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===aO.RATES&&(aN(this,lc).value=i),e===d.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",f.PLAYBACK_RATE({playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:K(this).querySelector("media-playback-rate-menu")}get rates(){return aN(this,lc)}set rates(e){e?Array.isArray(e)&&(aN(this,lc).value=e.join(" ")):aN(this,lc).value=""}get mediaPlaybackRate(){return ei(this,d.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ea(this,d.MEDIA_PLAYBACK_RATE,e)}}lc=new WeakMap,B.customElements.get("media-playback-rate-menu-button")||B.customElements.define("media-playback-rate-menu-button",aB);let aW=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,aH=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,aV=W.createElement("template");aV.innerHTML=`
  <style>
  :host([${d.MEDIA_PAUSED}]) slot[name=pause] {
    display: none !important;
  }

  :host(:not([${d.MEDIA_PAUSED}])) slot[name=play] {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="play">${aW}</slot>
    <slot name="pause">${aH}</slot>
  </slot>
`;let aq=e=>{let t=e.mediaPaused?g.PLAY():g.PAUSE();e.setAttribute("aria-label",t)};class aF extends tg{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PAUSED,d.MEDIA_ENDED]}constructor(e={}){super({slotTemplate:aV,...e})}connectedCallback(){aq(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===d.MEDIA_PAUSED&&aq(this),super.attributeChangedCallback(e,t,i)}get mediaPaused(){return er(this,d.MEDIA_PAUSED)}set mediaPaused(e){en(this,d.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?n.MEDIA_PLAY_REQUEST:n.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new B.CustomEvent(e,{composed:!0,bubbles:!0}))}}B.customElements.get("media-play-button")||B.customElements.define("media-play-button",aF);let a$={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"},aK=W.createElement("template");aK.innerHTML=`
  <style>
    :host {
      pointer-events: none;
      display: var(--media-poster-image-display, inline-block);
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
      background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }
  </style>

  <img part="poster img" aria-hidden="true" id="image"/>
`;class aj extends B.HTMLElement{static get observedAttributes(){return[a$.PLACEHOLDER_SRC,a$.SRC]}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(aK.content.cloneNode(!0))),this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){if(e===a$.SRC&&(null==i?this.image.removeAttribute(a$.SRC):this.image.setAttribute(a$.SRC,i)),e===a$.PLACEHOLDER_SRC)if(null==i)this.image.style.removeProperty("background-image");else{var a;a=this.image,a.style["background-image"]=`url('${i}')`}}get placeholderSrc(){return es(this,a$.PLACEHOLDER_SRC)}set placeholderSrc(e){eo(this,a$.SRC,e)}get src(){return es(this,a$.SRC)}set src(e){eo(this,a$.SRC,e)}}B.customElements.get("media-poster-image")||B.customElements.define("media-poster-image",aj);var aG=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};class aY extends iX{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,lh,void 0),((e,t,i,a)=>(aG(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,lh,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===d.MEDIA_PREVIEW_CHAPTER&&i!==t&&null!=i){var a,r;(aG(this,a=lh,"read from private field"),r?r.call(this):a.get(this)).textContent=i,""!==i?this.setAttribute("aria-valuetext",`chapter: ${i}`):this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return es(this,d.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){eo(this,d.MEDIA_PREVIEW_CHAPTER,e)}}lh=new WeakMap,B.customElements.get("media-preview-chapter-display")||B.customElements.define("media-preview-chapter-display",aY);var aZ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aQ=(e,t,i)=>(aZ(e,t,"read from private field"),i?i.call(e):t.get(e)),az=(e,t,i,a)=>(aZ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let aX=W.createElement("template");aX.innerHTML=`
  <style>
    :host {
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async">
`;class aJ extends B.HTMLElement{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,lm,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(aX.content.cloneNode(!0)))}static get observedAttributes(){return[s.MEDIA_CONTROLLER,d.MEDIA_PREVIEW_IMAGE,d.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(az(this,lm,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=aQ(this,lm))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=aQ(this,lm))?void 0:e.unassociateElement)||t.call(e,this),az(this,lm,null)}attributeChangedCallback(e,t,i){var a,r,n,o,l;[d.MEDIA_PREVIEW_IMAGE,d.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=aQ(this,lm))?void 0:a.unassociateElement)||r.call(a,this),az(this,lm,null)),i&&this.isConnected&&(az(this,lm,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=aQ(this,lm))?void 0:o.associateElement)||l.call(o,this)))}get mediaPreviewImage(){return es(this,d.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){eo(this,d.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(d.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){if(!e)return void this.removeAttribute(d.MEDIA_PREVIEW_COORDS);this.setAttribute(d.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[i,a,r,n]=e,s=t.split("#")[0],{maxWidth:o,maxHeight:l,minWidth:d,minHeight:u}=getComputedStyle(this),c=Math.min(parseInt(o)/r,parseInt(l)/n),h=Math.max(parseInt(d)/r,parseInt(u)/n),m=c<1,p=m?c:h>1?h:1,{style:v}=ee(this.shadowRoot,":host"),b=ee(this.shadowRoot,"img").style,E=this.shadowRoot.querySelector("img"),f=m?"min":"max";v.setProperty(`${f}-width`,"initial","important"),v.setProperty(`${f}-height`,"initial","important"),v.width=`${r*p}px`,v.height=`${n*p}px`;let g=()=>{b.width=`${this.imgWidth*p}px`,b.height=`${this.imgHeight*p}px`,b.display="block"};E.src!==s&&(E.onload=()=>{this.imgWidth=E.naturalWidth,this.imgHeight=E.naturalHeight,g()},E.src=s,g()),g(),b.transform=`translate(-${i*p}px, -${a*p}px)`}}lm=new WeakMap,B.customElements.get("media-preview-thumbnail")||B.customElements.define("media-preview-thumbnail",aJ);var a0=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},a1=(e,t,i)=>(a0(e,t,"read from private field"),i?i.call(e):t.get(e));class a2 extends iz{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,lp,void 0),((e,t,i,a)=>(a0(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,lp,this.shadowRoot.querySelector("slot")),a1(this,lp).textContent=L(0)}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_PREVIEW_TIME&&null!=i&&(a1(this,lp).textContent=L(i))}get mediaPreviewTime(){return ei(this,d.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){ea(this,d.MEDIA_PREVIEW_TIME,e)}}lp=new WeakMap,B.customElements.get("media-preview-time-display")||B.customElements.define("media-preview-time-display",a2);var a3=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},a5=(e,t,i)=>(a3(e,t,"read from private field"),i?i.call(e):t.get(e)),a4=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},a9=(e,t,i,a)=>(a3(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),a8=(e,t,i)=>(a3(e,t,"access private method"),i);class a7 extends tW{constructor(){super(...arguments),a4(this,lE),a4(this,lg),a4(this,lv,[]),a4(this,lb,void 0)}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_RENDITION_LIST,d.MEDIA_RENDITION_SELECTED,d.MEDIA_RENDITION_UNAVAILABLE]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_RENDITION_SELECTED&&t!==i?this.value=null!=i?i:"auto":e===d.MEDIA_RENDITION_LIST&&t!==i&&(a9(this,lv,y(i)),a8(this,lE,lf).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",a8(this,lg,ly))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",a8(this,lg,ly))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:K(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return a5(this,lv)}set mediaRenditionList(e){a9(this,lv,e),a8(this,lE,lf).call(this)}get mediaRenditionSelected(){return es(this,d.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){eo(this,d.MEDIA_RENDITION_SELECTED,e)}}lv=new WeakMap,lb=new WeakMap,lE=new WeakSet,lf=function(){if(a5(this,lb)===JSON.stringify(this.mediaRenditionList))return;a9(this,lb,JSON.stringify(this.mediaRenditionList));let e=this.mediaRenditionList.sort((e,t)=>t.height-e.height);this.defaultSlot.textContent="";let t=!this.mediaRenditionSelected;for(let i of e){let e=tO({type:"radio",text:this.formatMenuItemText(`${Math.min(i.width,i.height)}p`,i),value:`${i.id}`,checked:i.selected&&!t});e.prepend(tP(this,"checked-indicator")),this.defaultSlot.append(e)}let i=tO({type:"radio",text:this.formatMenuItemText("Auto"),value:"auto",checked:t});i.prepend(tP(this,"checked-indicator")),this.defaultSlot.append(i)},lg=new WeakSet,ly=function(){if(null==this.value)return;let e=new B.CustomEvent(n.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},B.customElements.get("media-rendition-menu")||B.customElements.define("media-rendition-menu",a7);let a6=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`,re=W.createElement("template");re.innerHTML=`
  <slot name="icon">${a6}</slot>
`;class rt extends tY{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_RENDITION_SELECTED,d.MEDIA_RENDITION_UNAVAILABLE]}constructor(){super({slotTemplate:re})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",f.QUALITY())}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:K(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return es(this,d.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){eo(this,d.MEDIA_RENDITION_SELECTED,e)}}B.customElements.get("media-rendition-menu-button")||B.customElements.define("media-rendition-menu-button",rt);let ri={SEEK_OFFSET:"seekoffset"},ra=W.createElement("template");ra.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">30</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg></slot>
`;class rr extends tg{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_CURRENT_TIME,ri.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:ra,...e})}connectedCallback(){this.seekOffset=ei(this,ri.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(e,t,i){e===ri.SEEK_OFFSET&&(this.seekOffset=ei(this,ri.SEEK_OFFSET,30)),super.attributeChangedCallback(e,t,i)}get seekOffset(){return ei(this,ri.SEEK_OFFSET,30)}set seekOffset(e){ea(this,ri.SEEK_OFFSET,e),this.setAttribute("aria-label",g.SEEK_BACK_N_SECS({seekOffset:this.seekOffset})),G(Y(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return ei(this,d.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){ea(this,d.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new B.CustomEvent(n.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}B.customElements.get("media-seek-backward-button")||B.customElements.define("media-seek-backward-button",rr);let rn={SEEK_OFFSET:"seekoffset"},rs=W.createElement("template");rs.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">30</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg></slot>
`;class ro extends tg{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_CURRENT_TIME,rn.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:rs,...e})}connectedCallback(){this.seekOffset=ei(this,rn.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(e,t,i){e===rn.SEEK_OFFSET&&(this.seekOffset=ei(this,rn.SEEK_OFFSET,30)),super.attributeChangedCallback(e,t,i)}get seekOffset(){return ei(this,rn.SEEK_OFFSET,30)}set seekOffset(e){ea(this,rn.SEEK_OFFSET,e),this.setAttribute("aria-label",g.SEEK_FORWARD_N_SECS({seekOffset:this.seekOffset})),G(Y(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return ei(this,d.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){ea(this,d.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new B.CustomEvent(n.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}B.customElements.get("media-seek-forward-button")||B.customElements.define("media-seek-forward-button",ro);var rl=Object.defineProperty;let rd=W.createElement("template");rd.innerHTML=tW.template.innerHTML+`
  <style>
    :host {
      background: var(--media-settings-menu-background,
        var(--media-menu-background,
        var(--media-control-background,
        var(--media-secondary-color, rgb(20 20 30 / .8)))));
      min-width: var(--media-settings-menu-min-width, 160px);
      border-radius: 2px 2px 0 0;
      overflow: hidden;
    }

    :host([role="menu"]) {
      
      justify-content: end;
    }

    slot:not([name]) {
      justify-content: var(--media-settings-menu-justify-content);
      flex-direction: var(--media-settings-menu-flex-direction, column);
      overflow: visible;
    }

    #container.has-expanded {
      --media-settings-menu-item-opacity: 0;
    }
  </style>
`;class ru extends tW{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:K(this).querySelector("media-settings-menu-button")}}((e,t,i)=>((e,t,i)=>t in e?rl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!=typeof t?t+"":t,i))(ru,"template",rd),B.customElements.get("media-settings-menu")||B.customElements.define("media-settings-menu",ru);let rc=W.createElement("template");rc.innerHTML=`
  <slot name="icon">
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
    </svg>
  </slot>
`;class rh extends tY{static get observedAttributes(){return[...super.observedAttributes,"target"]}constructor(){super({slotTemplate:rc})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",f.SETTINGS())}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:K(this).querySelector("media-settings-menu")}}B.customElements.get("media-settings-menu-button")||B.customElements.define("media-settings-menu-button",rh);var rm=Object.defineProperty;let rp=W.createElement("template");rp.innerHTML=iM.template.innerHTML+`
  <style>
    slot:not([name="submenu"]) {
      opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
    }

    :host([aria-expanded="true"]:hover) {
      background: transparent;
    }
  </style>
`,(null==(l_=rp.content)?void 0:l_.querySelector)&&(rp.content.querySelector('slot[name="suffix"]').innerHTML=`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `);class rv extends iM{}((e,t,i)=>((e,t,i)=>t in e?rm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!=typeof t?t+"":t,i))(rv,"template",rp),B.customElements.get("media-settings-menu-item")||B.customElements.define("media-settings-menu-item",rv);var rb=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rE=(e,t,i)=>(rb(e,t,"read from private field"),i?i.call(e):t.get(e));let rf={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},rg=[...Object.values(rf),d.MEDIA_CURRENT_TIME,d.MEDIA_DURATION,d.MEDIA_SEEKABLE],ry=["Enter"," "],r_="&nbsp;/&nbsp;",rA=(e,{timesSep:t=r_}={})=>{var i,a;let r=e.hasAttribute(rf.REMAINING),n=e.hasAttribute(rf.SHOW_DURATION),s=null!=(i=e.mediaCurrentTime)?i:0,[,o]=null!=(a=e.mediaSeekable)?a:[],l=0;Number.isFinite(e.mediaDuration)?l=e.mediaDuration:Number.isFinite(o)&&(l=o);let d=r?L(0-(l-s)):L(s);return n?`${d}${t}${L(l)}`:d};class rT extends iz{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,lA,void 0),((e,t,i,a)=>(rb(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,lA,this.shadowRoot.querySelector("slot")),rE(this,lA).innerHTML=`${rA(this)}`}static get observedAttributes(){return[...super.observedAttributes,...rg,"disabled"]}connectedCallback(){let{style:e}=ee(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","pointer"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",f.PLAYBACK_TIME());let t=e=>{let{key:i}=e;if(!ry.includes(i))return void this.removeEventListener("keyup",t);this.toggleTimeDisplay()};this.addEventListener("keydown",e=>{let{metaKey:i,altKey:a,key:r}=e;if(i||a||!ry.includes(r))return void this.removeEventListener("keyup",t);this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){rg.includes(e)?this.update():"disabled"===e&&i!==t&&(null==i?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return er(this,rf.REMAINING)}set remaining(e){en(this,rf.REMAINING,e)}get showDuration(){return er(this,rf.SHOW_DURATION)}set showDuration(e){en(this,rf.SHOW_DURATION,e)}get noToggle(){return er(this,rf.NO_TOGGLE)}set noToggle(e){en(this,rf.NO_TOGGLE,e)}get mediaDuration(){return ei(this,d.MEDIA_DURATION)}set mediaDuration(e){ea(this,d.MEDIA_DURATION,e)}get mediaCurrentTime(){return ei(this,d.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){ea(this,d.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(d.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e)return void this.removeAttribute(d.MEDIA_SEEKABLE);this.setAttribute(d.MEDIA_SEEKABLE,e.join(":"))}update(){let e=rA(this);(e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r)return e.setAttribute("aria-valuetext","video not loaded, unknown time.");let n=e.hasAttribute(rf.REMAINING),s=e.hasAttribute(rf.SHOW_DURATION),o=n?R(0-(r-i)):R(i);if(!s)return e.setAttribute("aria-valuetext",o);let l=R(r),d=`${o} of ${l}`;e.setAttribute("aria-valuetext",d)})(this),e!==rE(this,lA).innerHTML&&(rE(this,lA).innerHTML=e)}}lA=new WeakMap,B.customElements.get("media-time-display")||B.customElements.define("media-time-display",rT);var rk=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rw=(e,t,i)=>(rk(e,t,"read from private field"),i?i.call(e):t.get(e)),rS=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rI=(e,t,i,a)=>(rk(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class rC{constructor(e,t,i){rS(this,lT,void 0),rS(this,lk,void 0),rS(this,lw,void 0),rS(this,lS,void 0),rS(this,lI,void 0),rS(this,lC,void 0),rS(this,lR,void 0),rS(this,lL,void 0),rS(this,lD,0),rS(this,lx,(e=performance.now())=>{rI(this,lD,requestAnimationFrame(rw(this,lx))),rI(this,lS,performance.now()-rw(this,lw));let t=1e3/this.fps;if(rw(this,lS)>t){rI(this,lw,e-rw(this,lS)%t);let i=1e3/((e-rw(this,lk))/++((e,t,i,a)=>({set _(value){rI(e,t,value,i)},get _(){return rw(e,t,a)}}))(this,lI)._),a=(e-rw(this,lC))/1e3/this.duration,r=rw(this,lR)+a*this.playbackRate;r-rw(this,lT).valueAsNumber>0?rI(this,lL,this.playbackRate/this.duration/i):(rI(this,lL,.995*rw(this,lL)),r=rw(this,lT).valueAsNumber+rw(this,lL)),this.callback(r)}}),rI(this,lT,e),this.callback=t,this.fps=i}start(){0===rw(this,lD)&&(rI(this,lw,performance.now()),rI(this,lk,rw(this,lw)),rI(this,lI,0),rw(this,lx).call(this))}stop(){0!==rw(this,lD)&&(cancelAnimationFrame(rw(this,lD)),rI(this,lD,0))}update({start:e,duration:t,playbackRate:i}){let a=e-rw(this,lT).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),rI(this,lR,e),rI(this,lC,performance.now()),this.duration=t,this.playbackRate=i}}lT=new WeakMap,lk=new WeakMap,lw=new WeakMap,lS=new WeakMap,lI=new WeakMap,lC=new WeakMap,lR=new WeakMap,lL=new WeakMap,lD=new WeakMap,lx=new WeakMap;var rR=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rL=(e,t,i)=>(rR(e,t,"read from private field"),i?i.call(e):t.get(e)),rD=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rx=(e,t,i,a)=>(rR(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rM=(e,t,i)=>(rR(e,t,"access private method"),i);let rN=W.createElement("template");rN.innerHTML=`
  <style>
    :host {
      --media-box-border-radius: 4px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
      --media-preview-border-radius: var(--media-box-border-radius);
      --media-box-arrow-offset: var(--media-box-border-radius);
      --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      --_preview-background: var(--media-preview-background, var(--_control-background));

      
      contain: layout;
    }

    #highlight {
      background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
    }

    #preview-rail,
    #current-rail {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
      will-change: transform;
    }

    [part~="box"] {
      width: min-content;
      
      position: absolute;
      bottom: 100%;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="current-box"] {
      display: var(--media-current-box-display, var(--media-box-display, flex));
      margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
      visibility: hidden;
    }

    [part~="preview-box"] {
      display: var(--media-preview-box-display, var(--media-box-display, flex));
      margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
      transition-property: var(--media-preview-transition-property, visibility, opacity);
      transition-duration: var(--media-preview-transition-duration-out, .25s);
      transition-delay: var(--media-preview-transition-delay-out, 0s);
      visibility: hidden;
      opacity: 0;
    }

    :host(:is([${d.MEDIA_PREVIEW_IMAGE}], [${d.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
      transition-duration: var(--media-preview-transition-duration-in, .5s);
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
      opacity: 1;
    }

    @media (hover: hover) {
      :host(:is([${d.MEDIA_PREVIEW_IMAGE}], [${d.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      
      transition: visibility 0s .25s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-thumbnail-background, var(--_preview-background));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${d.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
    :host([${d.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
    }

    @media (hover: hover) {
      :host([${d.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
      :host([${d.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      :host([${d.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }
    }

    media-preview-chapter-display,
    ::slotted(media-preview-chapter-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      visibility: hidden;
      
      transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-chapter-background, var(--_preview-background));
      border-radius: var(--media-preview-chapter-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-chapter-padding, 3.5px 9px);
      margin: var(--media-preview-chapter-margin, 0 0 5px);
      text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
    }

    :host([${d.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
    :host([${d.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-chapter-border-radius, 0);
      padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
      margin: var(--media-preview-chapter-margin, 0);
      min-width: 100%;
    }

    media-preview-chapter-display[${d.MEDIA_PREVIEW_CHAPTER}],
    ::slotted(media-preview-chapter-display[${d.MEDIA_PREVIEW_CHAPTER}]) {
      visibility: visible;
    }

    media-preview-chapter-display:not([aria-valuetext]),
    ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
      display: none;
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display),
    media-time-display,
    ::slotted(media-time-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      
      transition: min-width 0s, border-radius 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--_preview-background));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 3.5px 9px);
      margin: var(--media-preview-time-margin, 0);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50%)
      ));
    }

    :host([${d.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${d.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
      min-width: 100%;
    }

    :host([${d.MEDIA_PREVIEW_TIME}]:hover) {
      --media-time-range-hover-display: block;
    }

    [part~="arrow"],
    ::slotted([part~="arrow"]) {
      display: var(--media-box-arrow-display, inline-block);
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
      ));
      
      border-color: transparent;
      border-top-color: var(--media-box-arrow-background, var(--_control-background));
      border-width: var(--media-box-arrow-border-width,
        var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
      border-style: solid;
      justify-content: center;
      height: 0;
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-chapter-display></media-preview-chapter-display>
      <media-preview-time-display></media-preview-time-display>
      <slot name="preview-arrow"><div part="arrow"></div></slot>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      
    </slot>
  </div>
`;let rO=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},rP=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class rU extends iV{constructor(){super(),rD(this,lq),rD(this,l$),rD(this,lG),rD(this,lZ),rD(this,lz),rD(this,lJ),rD(this,l1),rD(this,l3),rD(this,lM,void 0),rD(this,lN,void 0),rD(this,lO,void 0),rD(this,lP,void 0),rD(this,lU,void 0),rD(this,lB,void 0),rD(this,lW,void 0),rD(this,lH,void 0),rD(this,lV,void 0),rD(this,lj,e=>{this.dragging||(this.range.valueAsNumber=e,this.updateBar())}),this.container.appendChild(rN.content.cloneNode(!0)),rx(this,lO,this.shadowRoot.querySelectorAll('[part~="box"]')),rx(this,lU,this.shadowRoot.querySelector('[part~="preview-box"]')),rx(this,lB,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);rx(this,lW,parseInt(e.getPropertyValue("--media-box-padding-left"))),rx(this,lH,parseInt(e.getPropertyValue("--media-box-padding-right"))),rx(this,lN,new rC(this.range,rL(this,lj),60))}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PAUSED,d.MEDIA_DURATION,d.MEDIA_SEEKABLE,d.MEDIA_CURRENT_TIME,d.MEDIA_PREVIEW_IMAGE,d.MEDIA_PREVIEW_TIME,d.MEDIA_PREVIEW_CHAPTER,d.MEDIA_BUFFERED,d.MEDIA_PLAYBACK_RATE,d.MEDIA_LOADING,d.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",f.SEEK()),rM(this,lq,lF).call(this),rx(this,lM,this.getRootNode()),null==(e=rL(this,lM))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),rM(this,lq,lF).call(this),null==(e=rL(this,lM))||e.removeEventListener("transitionstart",this),rx(this,lM,null)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!=i&&(e===d.MEDIA_CURRENT_TIME||e===d.MEDIA_PAUSED||e===d.MEDIA_ENDED||e===d.MEDIA_LOADING||e===d.MEDIA_DURATION||e===d.MEDIA_SEEKABLE?(rL(this,lN).update({start:rO(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),rM(this,lq,lF).call(this),(e=>{let t=e.range,i=R(+rP(e)),a=R(+e.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:"video not loaded, unknown time.";t.setAttribute("aria-valuetext",r)})(this)):e===d.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===d.MEDIA_DURATION||e===d.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=rL(this,lV),this.updateBar()))}get mediaChaptersCues(){return rL(this,lV)}set mediaChaptersCues(e){var t;rx(this,lV,e),this.updateSegments(null==(t=rL(this,lV))?void 0:t.map(e=>({start:rO(this,e.startTime),end:rO(this,e.endTime)})))}get mediaPaused(){return er(this,d.MEDIA_PAUSED)}set mediaPaused(e){en(this,d.MEDIA_PAUSED,e)}get mediaLoading(){return er(this,d.MEDIA_LOADING)}set mediaLoading(e){en(this,d.MEDIA_LOADING,e)}get mediaDuration(){return ei(this,d.MEDIA_DURATION)}set mediaDuration(e){ea(this,d.MEDIA_DURATION,e)}get mediaCurrentTime(){return ei(this,d.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){ea(this,d.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return ei(this,d.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ea(this,d.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(d.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(d.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(d.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(d.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e)return void this.removeAttribute(d.MEDIA_SEEKABLE);this.setAttribute(d.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return es(this,d.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){eo(this,d.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return ei(this,d.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){ea(this,d.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return er(this,d.MEDIA_ENDED)}set mediaEnded(e){en(this,d.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=rO(this,r)}let{style:a}=ee(this.shadowRoot,"#highlight");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=ee(this.shadowRoot,"#current-rail"),t=ee(this.shadowRoot,'[part~="current-box"]'),i=rM(this,lG,lY).call(this,rL(this,lB)),a=rM(this,lZ,lQ).call(this,i,this.range.valueAsNumber),r=rM(this,lz,lX).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":rM(this,l3,l5).call(this);break;case"pointermove":rM(this,lJ,l0).call(this,e);break;case"pointerup":case"pointerleave":rM(this,l1,l2).call(this,null);break;case"transitionstart":Z(e.target,this)&&setTimeout(()=>rM(this,lq,lF).call(this),0)}}}lM=new WeakMap,lN=new WeakMap,lO=new WeakMap,lP=new WeakMap,lU=new WeakMap,lB=new WeakMap,lW=new WeakMap,lH=new WeakMap,lV=new WeakMap,lq=new WeakSet,lF=function(){rM(this,l$,lK).call(this)?rL(this,lN).start():rL(this,lN).stop()},l$=new WeakSet,lK=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&function(e,t=3){if(e.checkVisibility)return e.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0});let i=e;for(;i&&t>0;){let e=getComputedStyle(i);if("0"===e.opacity||"hidden"===e.visibility||"none"===e.display)return!1;i=i.parentElement,t--}return!0}(this)},lj=new WeakMap,lG=new WeakSet,lY=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?Q(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),s=i.right-a.left-r/2;return{box:{width:r,min:n,max:s},bounds:i,range:a}},lZ=new WeakSet,lQ=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},lz=new WeakSet,lX=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+rL(this,lW)){let t=e.range.left-e.bounds.left-rL(this,lW);return`${n-i/2+t}px`}if(n>r-rL(this,lH)){let t=e.bounds.right-e.range.right-rL(this,lH);return`${n+i/2-t-e.range.width}px`}return 0},lJ=new WeakSet,l0=function(e){let t=[...rL(this,lO)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void rM(this,l1,l2).call(this,null);let i=this.mediaSeekableEnd;if(!i)return;let a=ee(this.shadowRoot,"#preview-rail"),r=ee(this.shadowRoot,'[part~="preview-box"]'),n=rM(this,lG,lY).call(this,rL(this,lU)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=rM(this,lZ,lQ).call(this,n,s),l=rM(this,lz,lX).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(rL(this,lP))-Math.round(s*i))&&s>.01&&s<.99||(rx(this,lP,s*i),rM(this,l1,l2).call(this,rL(this,lP)))},l1=new WeakSet,l2=function(e){this.dispatchEvent(new B.CustomEvent(n.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},l3=new WeakSet,l5=function(){rL(this,lN).stop();let e=rP(this);this.dispatchEvent(new B.CustomEvent(n.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},B.customElements.get("media-time-range")||B.customElements.define("media-time-range",rU);class rB extends iV{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_VOLUME,d.MEDIA_MUTED,d.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let e=this.range.value,t=new B.CustomEvent(n.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",f.VOLUME())}attributeChangedCallback(e,t,i){(super.attributeChangedCallback(e,t,i),e===d.MEDIA_VOLUME||e===d.MEDIA_MUTED)&&(this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(({value:e})=>`${Math.round(100*e)}%`)(this.range)),this.updateBar())}get mediaVolume(){return ei(this,d.MEDIA_VOLUME,1)}set mediaVolume(e){ea(this,d.MEDIA_VOLUME,e)}get mediaMuted(){return er(this,d.MEDIA_MUTED)}set mediaMuted(e){en(this,d.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return es(this,d.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){eo(this,d.MEDIA_VOLUME_UNAVAILABLE,e)}}B.customElements.get("media-volume-range")||B.customElements.define("media-volume-range",rB);var rW=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rH=(e,t,i)=>(rW(e,t,"read from private field"),i?i.call(e):t.get(e)),rV=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rq=(e,t,i,a)=>(rW(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rF=(e,t,i)=>(rW(e,t,"access private method"),i);let r$=`
<svg aria-hidden="true" viewBox="0 1 24 24" part="select-indicator indicator">
  <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
</svg>`;function rK(e,t,i){let a=W.createElement("media-chrome-option");a.part.add("option"),a.value=t,a.selected=i;let r=W.createElement("span");return r.textContent=e,a.append(r),a}function rj(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);return((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)?((i=i.cloneNode(!0)).removeAttribute("slot"),i):e.shadowRoot.querySelector(`[name="${t}"] > svg`).cloneNode(!0)}let rG=W.createElement("template");rG.innerHTML=`
<style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, normal)
      var(--media-font-size, 15px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-listbox-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
    border-radius: var(--media-listbox-border-radius);
    display: inline-flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
  }

  ::slotted([slot="header"]) {
    padding: .4em 1.4em;
    border-bottom: 1px solid rgb(255 255 255 / .25);
  }

  #container {
    gap: var(--media-listbox-gap);
    display: flex;
    flex-direction: var(--media-listbox-flex-direction, column);
    overflow: hidden auto;
    padding-block: .5em;
  }

  media-chrome-option {
    padding-inline: .7em 1.4em;
  }

  media-chrome-option > span {
    margin-inline: .5ch;
  }

  [part~="indicator"] {
    fill: var(--media-option-indicator-fill, var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
    height: var(--media-option-indicator-height, 1.25em);
    vertical-align: var(--media-option-indicator-vertical-align, text-top);
  }

  [part~="select-indicator"] {
    display: var(--media-option-select-indicator-display);
    visibility: hidden;
  }

  [aria-selected="true"] > [part~="select-indicator"] {
    visibility: visible;
  }
</style>
<style id="layout-row" media="width:0">

  ::slotted([slot="header"]) {
    padding: .4em .5em;
  }

  #container {
    gap: var(--media-listbox-gap, .25em);
    flex-direction: var(--media-listbox-flex-direction, row);
    padding-inline: .5em;
  }

  media-chrome-option {
    padding: .3em .24em;
  }

  media-chrome-option[aria-selected="true"] {
    background: var(--media-option-selected-background, rgb(255 255 255 / .2));
  }

  [part~="select-indicator"] {
    display: var(--media-option-select-indicator-display, none);
  }
</style>
<slot name="header"></slot>
<slot id="container"></slot>
<slot name="select-indicator" hidden>${r$}</slot>
`;class rY extends B.HTMLElement{constructor(e={}){super(),rV(this,de),rV(this,dr),rV(this,ds),rV(this,dd),rV(this,dc),rV(this,dm),rV(this,l4,void 0),rV(this,l9,""),rV(this,l8,null),rV(this,l7,!1),rV(this,l6,e=>{this.handleClick(e)}),rV(this,di,e=>{let{key:t}=e;return"Escape"===t?void this.removeEventListener("keyup",rH(this,di)):"Meta"===t?void rq(this,l7,!1):void rF(this,de,dt).call(this,e)}),rV(this,da,e=>{let{key:t,altKey:i}=e;return i?void this.removeEventListener("keyup",rH(this,di)):"Meta"===t?void rq(this,l7,!0):(this.keysUsed.includes(t)&&e.preventDefault(),rH(this,l7)&&this.keysUsed.includes(t))?void rF(this,de,dt).call(this,e):void this.addEventListener("keyup",rH(this,di),{once:!0})}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=rG.content.cloneNode(!0),e.slotTemplate&&this.nativeEl.append(e.slotTemplate.content.cloneNode(!0)),this.shadowRoot.append(this.nativeEl)),this.container=this.shadowRoot.querySelector("#container"),this.container.addEventListener("slotchange",e=>{for(let t of e.target.assignedNodes({flatten:!0}))3===t.nodeType&&""===t.textContent.trim()&&t.remove()})}static get observedAttributes(){return["disabled","style",s.MEDIA_CONTROLLER]}static formatOptionText(e){return e}formatOptionText(e,t){return this.constructor.formatOptionText(e,t)}get options(){var e;let t=this.querySelectorAll("media-chrome-option");return t.length||(t=null==(e=this.container)?void 0:e.querySelectorAll("media-chrome-option")),Array.from(t)}get selectedOptions(){return this.options.filter(e=>e.selected)}get value(){var e,t;return null!=(t=null==(e=this.selectedOptions[0])?void 0:e.value)?t:""}set value(e){let t=this.options.find(t=>t.value===e);t&&rF(this,dd,du).call(this,t)}focus(){var e;null==(e=this.selectedOptions[0])||e.focus()}enable(){this.addEventListener("click",rH(this,l6)),this.addEventListener("keydown",rH(this,da))}disable(){this.removeEventListener("click",rH(this,l6)),this.removeEventListener("keyup",rH(this,di))}attributeChangedCallback(e,t,i){var a,r,n,o,l;"style"===e&&i!==t?rF(this,dr,dn).call(this):e===s.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=rH(this,l4))?void 0:a.unassociateElement)||r.call(a,this),rq(this,l4,null)),i&&this.isConnected&&(rq(this,l4,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=rH(this,l4))?void 0:o.associateElement)||l.call(o,this))):"disabled"===e&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){var e,t,i;rF(this,dr,dn).call(this),this.hasAttribute("disabled")||this.enable(),this.hasAttribute("role")||this.setAttribute("role","listbox");let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(rq(this,l4,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=rH(this,l4))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=rH(this,l4))?void 0:e.unassociateElement)||t.call(e,this),rq(this,l4,null)}get keysUsed(){return["Enter"," ","ArrowDown","ArrowUp","Home","End"]}handleSelection(e,t){let i=rF(this,ds,dl).call(this,e);i&&rF(this,dd,du).call(this,i,t)}handleMovement(e){let t,{key:i}=e,a=this.options,r=rF(this,ds,dl).call(this,e);switch(!r&&(r=a.filter(e=>"0"===e.getAttribute("tabindex"))[0]),i){case"ArrowDown":(null==(t=r.nextElementSibling)?void 0:t.hasAttribute("disabled"))&&(t=t.nextElementSibling);break;case"ArrowUp":(null==(t=r.previousElementSibling)?void 0:t.hasAttribute("disabled"))&&(t=t.previousElementSibling);break;case"Home":t=a[0];break;case"End":t=a[a.length-1];break;default:t=rF(this,dc,dh).call(this,i)}t&&(a.forEach(e=>e.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),t.focus())}handleClick(e){let t=rF(this,ds,dl).call(this,e);!t||t.hasAttribute("disabled")||(this.options.forEach(e=>e.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),this.handleSelection(e,this.hasAttribute("aria-multiselectable")&&"true"===this.getAttribute("aria-multiselectable")))}}l4=new WeakMap,l9=new WeakMap,l8=new WeakMap,l7=new WeakMap,l6=new WeakMap,de=new WeakSet,dt=function(e){let{key:t}=e;"Enter"===t||" "===t?this.handleSelection(e,this.hasAttribute("aria-multiselectable")&&"true"===this.getAttribute("aria-multiselectable")):this.handleMovement(e)},di=new WeakMap,da=new WeakMap,dr=new WeakSet,dn=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=(null==(e=getComputedStyle(this).getPropertyValue("--media-listbox-layout"))?void 0:e.trim())==="row";t.setAttribute("media",i?"":"width:0")},ds=new WeakSet,dl=function(e){let t=e.composedPath(),i=t.findIndex(e=>"MEDIA-CHROME-OPTION"===e.nodeName);return t[i]},dd=new WeakSet,du=function(e,t){let i=[...this.selectedOptions];this.hasAttribute("aria-multiselectable")&&"true"===this.getAttribute("aria-multiselectable")||this.options.forEach(e=>e.selected=!1),t?e.selected=!e.selected:e.selected=!0,this.selectedOptions.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},dc=new WeakSet,dh=function(e){rF(this,dm,dp).call(this);let t=this.options,i=t.findIndex(e=>"0"===e.getAttribute("tabindex"));rq(this,l9,rH(this,l9)+e);let a=rH(this,l9).split("").every(t=>t===e),r=t.slice(i+ +!!a).filter(e=>e.textContent.toLowerCase().startsWith(rH(this,l9))),n=t.slice(0,i-!!a).filter(e=>e.textContent.toLowerCase().startsWith(rH(this,l9))),s=[],o=[];return a&&(s=t.slice(i+ +!!a).filter(t=>t.textContent.startsWith(e)),o=t.slice(0,i-!!a).filter(t=>t.textContent.startsWith(e))),[...r,...n,...s,...o][0]},dm=new WeakSet,dp=function(){clearTimeout(rH(this,l8)),rq(this,l8,null),rq(this,l8,setTimeout(()=>{rq(this,l9,""),rq(this,l8,null)},500))},B.customElements.get("media-chrome-listbox")||B.customElements.define("media-chrome-listbox",rY);var rZ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rQ=(e,t,i)=>(rZ(e,t,"read from private field"),i?i.call(e):t.get(e)),rz=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rX=(e,t,i,a)=>(rZ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rJ=(e,t,i)=>(rZ(e,t,"access private method"),i);let r0=W.createElement("template");r0.innerHTML=`
<style>
  :host {
    cursor: pointer;
    display: block;
    line-height: revert;
    white-space: nowrap;
    white-space-collapse: collapse;
    text-wrap: nowrap;
    padding: .4em .5em;
    transition: var(--media-option-transition);
    outline: var(--media-option-outline, 0);
    outline-offset: var(--media-option-outline-offset, -1px);
  }

  :host(:focus-visible) {
    box-shadow: var(--media-option-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
    outline: var(--media-option-hover-outline, 0);
    outline-offset: var(--media-option-hover-outline-offset,  var(--media-option-outline-offset, -1px));
  }

  :host(:hover) {
    cursor: pointer;
    background: var(--media-option-hover-background, rgb(82 82 122 / .8));
    outline: var(--media-option-hover-outline);
    outline-offset: var(--media-option-hover-outline-offset,  var(--media-option-outline-offset, -1px));
  }

  :host([aria-selected="true"]) {
    background: var(--media-option-selected-background);
  }

  :host([disabled]) {
    pointer-events: none;
    color: rgba(255, 255, 255, .3);
  }
</style>
<slot></slot>
`;let r1={VALUE:"value",SELECTED:"selected",DISABLED:"disabled"};class r2 extends B.HTMLElement{constructor(){super(),rz(this,dE),rz(this,dv,!1),rz(this,db,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(r0.content.cloneNode(!0)))}static get observedAttributes(){return[r1.DISABLED,r1.SELECTED,r1.VALUE]}get value(){var e;return null!=(e=this.getAttribute(r1.VALUE))?e:this.text}set value(e){this.setAttribute(r1.VALUE,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get selected(){return"true"===this.getAttribute("aria-selected")}set selected(e){rX(this,dv,!0),this.setAttribute("aria-selected",e?"true":"false"),e?this.part.add("option-selected"):this.part.remove("option-selected")}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex",-1),this.hasAttribute("aria-selected")||this.setAttribute("aria-selected","false")}disable(){this.removeAttribute("tabindex")}attributeChangedCallback(e,t,i){e!==r1.SELECTED||rQ(this,dv)?e===r1.DISABLED&&i!==t&&(null==i?this.enable():this.disable()):this.setAttribute("aria-selected",null!=i?"true":"false")}connectedCallback(){this.hasAttribute(r1.DISABLED)||this.enable(),this.setAttribute("role","option"),rX(this,db,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.options)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),rJ(this,dE,df).call(this)}disconnectedCallback(){this.disable(),rJ(this,dE,df).call(this),rX(this,db,null)}handleClick(){}}dv=new WeakMap,db=new WeakMap,dE=new WeakSet,df=function(){var e;let t=null==(e=rQ(this,db))?void 0:e.options;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-selected")).pop();i||(i=t[0]),"true"!==rQ(this,db).getAttribute("aria-multiselectable")&&t.forEach(e=>{e.setAttribute("tabindex","-1"),e.setAttribute("aria-selected","false")}),null==i||i.setAttribute("tabindex","0"),null==i||i.setAttribute("aria-selected","true")},B.customElements.get("media-chrome-option")||B.customElements.define("media-chrome-option",r2);var r3=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},r5=(e,t,i)=>(r3(e,t,"read from private field"),i?i.call(e):t.get(e)),r4=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},r9=(e,t,i,a)=>(r3(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),r8=(e,t,i)=>(r3(e,t,"access private method"),i);let r7=W.createElement("template");r7.innerHTML=`
  <style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, normal)
      var(--media-font-size, 15px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    display: inline-flex;
    position: relative;
    flex-shrink: .5;
  }

  [name=listbox]::slotted(*),
  [part=listbox] {
    position: absolute;
    bottom: 100%;
    max-height: 300px;
    transition: var(--media-selectmenu-transition-in,
      visibility 0s, transform .15s ease-out, opacity .15s ease-out);
    transform: var(--media-listbox-transform-in, translateY(0) scale(1));
    visibility: visible;
    opacity: 1;
  }

  [name=listbox][hidden]::slotted(*),
  [hidden] [part=listbox] {
    transition: var(--media-selectmenu-transition-out,
      visibility .15s ease-out, transform .15s ease-out, opacity .15s ease-out);
    transform: var(--media-listbox-transform-out, translateY(2px) scale(.99));
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  }

  slot[name=listbox][hidden] {
    display: block;
  }
  </style>

  <slot name="button">
    <media-chrome-button aria-haspopup="listbox" part="button">
      <slot name="button-content"></slot>
    </media-chrome-button>
  </slot>
  <slot name="listbox" hidden>
    <media-chrome-listbox id="listbox" part="listbox">
      <slot></slot>
    </media-chrome-listbox>
  </slot>
`;class r6 extends B.HTMLElement{constructor(){var e;super(),r4(this,dR),r4(this,dD),r4(this,dM),r4(this,dg,void 0),r4(this,dy,void 0),r4(this,d_,void 0),r4(this,dA,void 0),r4(this,dT,void 0),r4(this,dk,e=>{let{key:t}=e;if(!this.keysUsed.includes(t))return void this.removeEventListener("keyup",r5(this,dk));e.composedPath().includes(r5(this,dy))&&("Enter"===t||" "===t)?r8(this,dR,dL).call(this):"Escape"===t&&r8(this,dM,dN).call(this)}),r4(this,dw,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a))return void this.removeEventListener("keyup",r5(this,dk));e.preventDefault(),this.addEventListener("keyup",r5(this,dk),{once:!0})}),r4(this,dS,e=>{e.composedPath().includes(this)||r8(this,dM,dN).call(this)}),r4(this,dI,e=>{e.composedPath().includes(r5(this,dy))&&r8(this,dR,dL).call(this)}),r4(this,dC,()=>{r8(this,dM,dN).call(this)}),r4(this,dO,()=>{if(0===r5(this,dA).offsetWidth)return;let e=r5(this,dA).offsetWidth,t=r5(this,dy).getBoundingClientRect();if(this.hasAttribute("mediacontroller")||r5(this,dy).hasAttribute("mediacontroller")||r5(this,dA).hasAttribute("mediacontroller")){r5(this,dA).style.zIndex="1",r5(this,dA).style.bottom="unset",r5(this,dA).style.right=null,r5(this,dA).style.left="0",r5(this,dA).style.top=`${t.height}px`;return}let i=ne(this).getBoundingClientRect(),a=t.x+e,r=Math.max(t.right-a,t.right-i.right);r5(this,dA).style.left=null,r5(this,dA).style.right=`${r}px`,r5(this,dA).style.maxHeight=`${i.height-t.height}px`}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(r7.content.cloneNode(!0))),null==(e=this.init)||e.call(this),r9(this,dy,this.shadowRoot.querySelector("[part=button]")),r9(this,dA,this.shadowRoot.querySelector("[part=listbox]")),r9(this,d_,this.shadowRoot.querySelector("slot[name=button]")),r5(this,d_).addEventListener("slotchange",()=>{let e=r5(this,d_).assignedElements()[0];e&&(r9(this,dy,e),r5(this,dy).preventClick=!0,this.hasAttribute("disabled")||r5(this,dy).hasAttribute("disabled")?this.disable():(this.enable(),r5(this,dy).setAttribute("aria-haspopup","listbox")))}),r9(this,dT,this.shadowRoot.querySelector("slot[name=listbox]")),r5(this,dT).addEventListener("slotchange",()=>{r9(this,dA,r5(this,dT).assignedElements()[0]||r5(this,dA))})}static get observedAttributes(){return["disabled",s.MEDIA_CONTROLLER]}enable(){r5(this,dy).toggleAttribute("disabled",!1),this.addEventListener("change",r5(this,dC)),this.addEventListener("keydown",r5(this,dw)),this.addEventListener("click",r5(this,dI)),W.addEventListener("click",r5(this,dS))}disable(){r5(this,dy).toggleAttribute("disabled",!0),this.removeEventListener("change",r5(this,dC)),this.removeEventListener("keydown",r5(this,dw)),this.removeEventListener("keyup",r5(this,dk)),this.removeEventListener("click",r5(this,dI)),W.removeEventListener("click",r5(this,dS))}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=r5(this,dg))?void 0:a.unassociateElement)||r.call(a,this),r9(this,dg,null),r5(this,dA).removeAttribute(s.MEDIA_CONTROLLER)),i&&this.isConnected&&(r9(this,dg,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=r5(this,dg))?void 0:o.associateElement)||l.call(o,this),r5(this,dA).setAttribute(s.MEDIA_CONTROLLER,i))):"disabled"===e&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){var e,t,i;let{style:a}=ee(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(s.MEDIA_CONTROLLER);r&&(r9(this,dg,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=r5(this,dg))?void 0:t.associateElement)||i.call(t,this),r5(this,dA).setAttribute(s.MEDIA_CONTROLLER,r)),this.hasAttribute("disabled")||this.enable(),r5(this,dT).hidden||F(ne(this),r5(this,dO))}disconnectedCallback(){var e,t;$(ne(this),r5(this,dO)),this.disable(),null==(t=null==(e=r5(this,dg))?void 0:e.unassociateElement)||t.call(e,this),r9(this,dg,null),r5(this,dA).removeAttribute(s.MEDIA_CONTROLLER)}get keysUsed(){return["Enter","Escape"," ","ArrowUp","ArrowDown","f","c","k","m"]}}function ne(e){var t;return null!=(t=e.getAttribute("bounds")?Q(e,`#${e.getAttribute("bounds")}`):function(e){var t;let i=e.getAttribute(s.MEDIA_CONTROLLER);return i?null==(t=e.getRootNode())?void 0:t.getElementById(i):Q(e,"media-controller")}(e)||e.parentElement)?t:e}dg=new WeakMap,dy=new WeakMap,d_=new WeakMap,dA=new WeakMap,dT=new WeakMap,dk=new WeakMap,dw=new WeakMap,dS=new WeakMap,dI=new WeakMap,dC=new WeakMap,dR=new WeakSet,dL=function(){r5(this,dT).hidden?r8(this,dD,dx).call(this):r8(this,dM,dN).call(this)},dD=new WeakSet,dx=function(){r5(this,dT).hidden&&(r5(this,dT).hidden=!1,r5(this,dy).setAttribute("aria-expanded","true"),r5(this,dO).call(this),r5(this,dA).focus(),F(ne(this),r5(this,dO)))},dM=new WeakSet,dN=function(){if(r5(this,dT).hidden)return;$(ne(this),r5(this,dO));let e=z();r5(this,dT).hidden=!0,r5(this,dy).setAttribute("aria-expanded","false"),Z(r5(this,dA),e)&&r5(this,dy).focus()},dO=new WeakMap,B.customElements.get("media-chrome-selectmenu")||B.customElements.define("media-chrome-selectmenu",r6);var nt=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ni=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},na=(e,t,i)=>(nt(e,t,"access private method"),i);let nr=`
<svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,nn=W.createElement("template");nn.innerHTML=`
  <slot name="captions-indicator" hidden>${nr}</slot>
`;class ns extends rY{constructor(){super({slotTemplate:nn}),ni(this,dU),ni(this,dW),ni(this,dP,void 0)}static get observedAttributes(){return[...super.observedAttributes,"aria-multiselectable",d.MEDIA_SUBTITLES_LIST,d.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_SUBTITLES_LIST&&t!==i?na(this,dU,dB).call(this):e===d.MEDIA_SUBTITLES_SHOWING&&t!==i?this.value=i:"aria-multiselectable"===e&&(this.removeAttribute("aria-multiselectable"),console.warn("Captions List doesn't currently support multiple selections. You can enable multiple items via the media.textTracks API."))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",na(this,dW,dH))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",na(this,dW,dH))}get mediaSubtitlesList(){return no(this,d.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){nl(this,d.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return no(this,d.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){nl(this,d.MEDIA_SUBTITLES_SHOWING,e)}}dP=new WeakMap,dU=new WeakSet,dB=function(){var e,t,i,a,r,n;if(nt(this,t=dP,"read from private field"),(i?i.call(this):t.get(this))===JSON.stringify(this.mediaSubtitlesList))return;a=dP,r=JSON.stringify(this.mediaSubtitlesList),nt(this,a,"write to private field"),n?n.call(this,r):a.set(this,r);let s=this.shadowRoot.querySelector("#container");s.textContent="";let o=!this.value,l=rK(this.formatOptionText("Off"),"off",o);for(let t of(l.prepend(rj(this,"select-indicator")),s.append(l),this.mediaSubtitlesList)){let i=rK(this.formatOptionText(t.label,t),eD(t),this.value==eD(t));i.prepend(rj(this,"select-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(rj(this,"captions-indicator")),s.append(i)}},dW=new WeakSet,dH=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(d.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new B.CustomEvent(n.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new B.CustomEvent(n.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};let no=(e,t)=>{let i=e.getAttribute(t);return i?eR(i):[]},nl=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=ex(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};B.customElements.get("media-captions-listbox")||B.customElements.define("media-captions-listbox",ns);class nd extends r6{init(){let e=W.createElement("media-captions-button");e.part.add("button"),e.preventClick=!0;let t=W.createElement("media-captions-listbox");t.part.add("listbox"),t.setAttribute("exportparts","option, option-selected, indicator");let i=this.shadowRoot.querySelector("slot[name=button]"),a=this.shadowRoot.querySelector("slot[name=listbox]");i.textContent="",a.textContent="",i.append(e),a.append(t)}}B.customElements.get("media-captions-selectmenu")||B.customElements.define("media-captions-selectmenu",nd);var nu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nc=(e,t,i)=>(nu(e,t,"read from private field"),i?i.call(e):t.get(e)),nh=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nm=(e,t,i)=>(nu(e,t,"access private method"),i);let np={RATES:"rates"};class nv extends rY{constructor(){super(),nh(this,dq),nh(this,d$),nh(this,dV,new eI(this,np.RATES,{defaultValue:aw})),nm(this,dq,dF).call(this)}static get observedAttributes(){return[...super.observedAttributes,"aria-multiselectable",d.MEDIA_PLAYBACK_RATE,np.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_PLAYBACK_RATE&&t!=i?this.value=i:e===np.RATES&&t!=i&&(nc(this,dV).value=i,nm(this,dq,dF).call(this))}get rates(){return nc(this,dV)}set rates(e){e?Array.isArray(e)&&(nc(this,dV).value=e.join(" ")):nc(this,dV).value="",nm(this,dq,dF).call(this)}get mediaPlaybackRate(){return ei(this,d.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ea(this,d.MEDIA_PLAYBACK_RATE,e)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",nm(this,d$,dK))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",nm(this,d$,dK))}}dV=new WeakMap,dq=new WeakSet,dF=function(){let e=this.shadowRoot.querySelector("#container");for(let t of(e.textContent="",this.rates)){let i=rK(this.formatOptionText(`${t}x`,t),t,this.mediaPlaybackRate==t);i.prepend(rj(this,"select-indicator")),e.append(i)}},d$=new WeakSet,dK=function(){if(!this.value)return;let e=new B.CustomEvent(n.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},B.customElements.get("media-playback-rate-listbox")||B.customElements.define("media-playback-rate-listbox",nv);class nb extends r6{init(){let e=W.createElement("media-playback-rate-button");e.part.add("button"),e.preventClick=!0;let t=W.createElement("media-playback-rate-listbox");t.part.add("listbox"),t.setAttribute("exportparts","option, option-selected, indicator");let i=this.shadowRoot.querySelector("slot[name=button]"),a=this.shadowRoot.querySelector("slot[name=listbox]");i.textContent="",a.textContent="",i.append(e),a.append(t)}}B.customElements.get("media-playback-rate-selectmenu")||B.customElements.define("media-playback-rate-selectmenu",nb);var nE=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nf=(e,t,i)=>(nE(e,t,"read from private field"),i?i.call(e):t.get(e)),ng=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ny=(e,t,i,a)=>(nE(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),n_=(e,t,i)=>(nE(e,t,"access private method"),i);class nA extends rY{constructor(){super(...arguments),ng(this,dY),ng(this,dQ),ng(this,dj,[]),ng(this,dG,void 0)}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_RENDITION_LIST,d.MEDIA_RENDITION_SELECTED]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_RENDITION_SELECTED&&t!==i?this.value=null!=i?i:"auto":e===d.MEDIA_RENDITION_LIST&&t!==i&&(ny(this,dj,y(i)),n_(this,dY,dZ).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",n_(this,dQ,dz))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",n_(this,dQ,dz))}get mediaRenditionList(){return nf(this,dj)}set mediaRenditionList(e){ny(this,dj,e),n_(this,dY,dZ).call(this)}get mediaRenditionSelected(){return es(this,d.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){eo(this,d.MEDIA_RENDITION_SELECTED,e)}}dj=new WeakMap,dG=new WeakMap,dY=new WeakSet,dZ=function(){if(nf(this,dG)===JSON.stringify(this.mediaRenditionList))return;ny(this,dG,JSON.stringify(this.mediaRenditionList));let e=this.mediaRenditionList.sort((e,t)=>t.height-e.height),t=this.shadowRoot.querySelector("#container");t.textContent="";let i=!this.mediaRenditionSelected;for(let a of e){let e=rK(this.formatOptionText(`${Math.min(a.width,a.height)}p`,a),`${a.id}`,a.selected&&!i);e.prepend(rj(this,"select-indicator")),t.append(e)}let a=rK(this.formatOptionText("Auto"),"auto",i);a.prepend(rj(this,"select-indicator")),t.append(a)},dQ=new WeakSet,dz=function(){if(null==this.value)return;let e=new B.CustomEvent(n.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},B.customElements.get("media-rendition-listbox")||B.customElements.define("media-rendition-listbox",nA);let nT=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`,nk=W.createElement("template");nk.innerHTML=`
  <slot name="icon">${nT}</slot>
`;class nw extends tg{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_RENDITION_SELECTED,d.MEDIA_RENDITION_UNAVAILABLE]}constructor(){super({slotTemplate:nk})}get mediaRenditionSelected(){return es(this,d.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){eo(this,d.MEDIA_RENDITION_SELECTED,e)}}B.customElements.get("media-rendition-button")||B.customElements.define("media-rendition-button",nw);class nS extends r6{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_RENDITION_SELECTED,d.MEDIA_RENDITION_UNAVAILABLE]}init(){let e=W.createElement("media-rendition-button");e.part.add("button"),e.preventClick=!0;let t=W.createElement("media-rendition-listbox");t.part.add("listbox"),t.setAttribute("exportparts","option, option-selected, indicator");let i=this.shadowRoot.querySelector("slot[name=button]"),a=this.shadowRoot.querySelector("slot[name=listbox]");i.textContent="",a.textContent="",i.append(e),a.append(t)}}B.customElements.get("media-rendition-selectmenu")||B.customElements.define("media-rendition-selectmenu",nS);var nI=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nC=(e,t,i)=>(nI(e,t,"read from private field"),i?i.call(e):t.get(e)),nR=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nL=(e,t,i,a)=>(nI(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nD=(e,t,i)=>(nI(e,t,"access private method"),i);class nx extends rY{constructor(){super(...arguments),nR(this,d0),nR(this,d2),nR(this,dX,[]),nR(this,dJ,void 0)}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_AUDIO_TRACK_LIST,d.MEDIA_AUDIO_TRACK_ENABLED]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_AUDIO_TRACK_ENABLED&&t!==i?this.value=i:e===d.MEDIA_AUDIO_TRACK_LIST&&t!==i&&(nL(this,dX,T(i)),nD(this,d0,d1).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",nD(this,d2,d3))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",nD(this,d2,d3))}get mediaAudioTrackList(){return nC(this,dX)}set mediaAudioTrackList(e){nL(this,dX,e),nD(this,d0,d1).call(this)}get mediaAudioTrackEnabled(){return es(this,d.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(e){eo(this,d.MEDIA_AUDIO_TRACK_ENABLED,e)}}dX=new WeakMap,dJ=new WeakMap,d0=new WeakSet,d1=function(){if(nC(this,dJ)===JSON.stringify(this.mediaAudioTrackList))return;nL(this,dJ,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList,t=this.shadowRoot.querySelector("#container");for(let i of(t.textContent="",e)){let e=rK(this.formatOptionText(i.label,i),`${i.id}`,i.enabled);e.prepend(rj(this,"select-indicator")),t.append(e)}},d2=new WeakSet,d3=function(){if(null==this.value)return;let e=new B.CustomEvent(n.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},B.customElements.get("media-audio-track-listbox")||B.customElements.define("media-audio-track-listbox",nx);let nM=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,nN=W.createElement("template");nN.innerHTML=`
  <slot name="icon">${nM}</slot>
`;class nO extends tg{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_AUDIO_TRACK_ENABLED,d.MEDIA_AUDIO_TRACK_UNAVAILABLE]}constructor(){super({slotTemplate:nN})}get mediaAudioTrackEnabled(){return es(this,d.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(e){eo(this,d.MEDIA_AUDIO_TRACK_ENABLED,e)}}B.customElements.get("media-audio-track-button")||B.customElements.define("media-audio-track-button",nO);class nP extends r6{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_AUDIO_TRACK_ENABLED,d.MEDIA_AUDIO_TRACK_UNAVAILABLE]}init(){let e=W.createElement("media-audio-track-button");e.part.add("button"),e.preventClick=!0;let t=W.createElement("media-audio-track-listbox");t.part.add("listbox"),t.setAttribute("exportparts","option, option-selected, indicator");let i=this.shadowRoot.querySelector("slot[name=button]"),a=this.shadowRoot.querySelector("slot[name=listbox]");i.textContent="",a.textContent="",i.append(e),a.append(t)}}B.customElements.get("media-audio-track-selectmenu")||B.customElements.define("media-audio-track-selectmenu",nP);var nU=i(8867),nB=Object.defineProperty,nW=Object.getPrototypeOf,nH=Reflect.get,nV=(e,t,i)=>(((e,t,i)=>t in e?nB(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!=typeof t?t+"":t,i),i),nq=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nF=(e,t,i)=>(nq(e,t,"read from private field"),i?i.call(e):t.get(e)),n$=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nK=(e,t,i,a)=>(nq(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nj=(e,t,i)=>(nq(e,t,"access private method"),i),nG=(e,t,i)=>nH(nW(e),i,t),nY=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends nY{}globalThis.DocumentFragment=e}var nZ,nQ,nz,nX,nJ,n0,n1,n2,n3,n5,n4,n9,n8,n7,n6,se,st,si,sa,sr,sn,ss,so,sl,sd,su,sc,sh,sm,sp,sv,sb,sE,sf,sg,sy,s_,sA,sT,sk,sw,sS,sI,sC,sR,sL,sD,sx,sM,sN,sO,sP,sU,sB,sW,sH,sV,sq,sF,s$,sK,sj,sG,sY,sZ,sQ,sz,sX,sJ,s0,s1,s2,s3,s5,s4,s9,s8,s7,s6,oe,ot,oi,oa,or,on,os,oo,ol,od,ou,oc,oh,om,op,ov,ob,oE,of,og,oy,o_,oA,oT,ok,ow,oS,oI,oC,oR,oL,oD,ox,oM,oN,oO,oP,oU,oB,oW,oH,oV,oq,oF,o$,oK,oj,oG,oY,oZ,oQ,oz,oX,oJ,o0,o1,o2,o3,o5,o4,o9,o8,o7,o6,le,lt,li,la,lr,ln,ls,lo,ll,ld,lu,lc,lh,lm,lp,lv,lb,lE,lf,lg,ly,l_,lA,lT,lk,lw,lS,lI,lC,lR,lL,lD,lx,lM,lN,lO,lP,lU,lB,lW,lH,lV,lq,lF,l$,lK,lj,lG,lY,lZ,lQ,lz,lX,lJ,l0,l1,l2,l3,l5,l4,l9,l8,l7,l6,de,dt,di,da,dr,dn,ds,dl,dd,du,dc,dh,dm,dp,dv,db,dE,df,dg,dy,d_,dA,dT,dk,dw,dS,dI,dC,dR,dL,dD,dx,dM,dN,dO,dP,dU,dB,dW,dH,dV,dq,dF,d$,dK,dj,dG,dY,dZ,dQ,dz,dX,dJ,d0,d1,d2,d3,d5,d4=class extends nY{},d9=class{constructor(e,t={}){n$(this,d5,void 0),nK(this,d5,null==t?void 0:t.detail)}get detail(){return nF(this,d5)}initCustomEvent(){}};d5=new WeakMap;var d8={document:{createElement:function(e,t){return new d4}},DocumentFragment,customElements:{get(e){},define(e,t,i){},upgrade(e){},whenDefined:e=>Promise.resolve(d4)},CustomEvent:d9,EventTarget:nY,HTMLElement:d4,HTMLVideoElement:class extends nY{}},d7="undefined"==typeof window||void 0===globalThis.customElements,d6=d7?d8:globalThis;d7?d8.document:globalThis.document;var ue=(()=>{try{return"0.20.2"}catch{}return"UNKNOWN"})(),ut=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"];function ui(e){return`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${un(e)}></audio>
    </slot>
    <slot></slot>
  `}function ua(e){return`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${un(e)}></video>
    </slot>
    <slot></slot>
  `}var ur=(e,{tag:t,is:i})=>{var a,r,n,s,o,l,d,u,c,h,m,p,v,b,E,f,g;let y=null==(r=null==(a=globalThis.document)?void 0:a.createElement)?void 0:r.call(a,t,{is:i}),_=y?function(e){let t=[];for(let i=Object.getPrototypeOf(e);i&&i!==HTMLElement.prototype;i=Object.getPrototypeOf(i))t.push(...Object.getOwnPropertyNames(i));return t}(y):[];return n=class extends e{constructor(){super(),n$(this,h),n$(this,p),n$(this,b),n$(this,f),n$(this,d,void 0),n$(this,u,void 0),n$(this,c,new Map)}static get observedAttributes(){var e,t,i;return nj(e=n,o,l).call(e),[...null!=(i=null==(t=null==y?void 0:y.constructor)?void 0:t.observedAttributes)?i:[],"autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"]}get nativeEl(){var e,i,a;return nj(this,h,m).call(this),null!=(a=null!=(i=null!=(e=nF(this,u))?e:this.shadowRoot.querySelector(t))?i:this.querySelector(":scope > [slot=media]"))?a:this.querySelector(t)}set nativeEl(e){nK(this,u,e)}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(e){this.toggleAttribute("muted",!!e)}get src(){return this.getAttribute("src")}set src(e){this.setAttribute("src",`${e}`)}get preload(){var e,t;return null!=(t=this.getAttribute("preload"))?t:null==(e=this.nativeEl)?void 0:e.preload}set preload(e){this.setAttribute("preload",`${e}`)}init(){var e,a;if(!this.shadowRoot){this.attachShadow({mode:"open"});let e=function(e){let t={};for(let i of e)t[i.name]=i.value;return t}(this.attributes);i&&(e.is=i),t&&(e.part=t),this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}for(let e of(this.nativeEl.muted=this.hasAttribute("muted"),_))nj(this,b,E).call(this,e);for(let t of(this.shadowRoot.addEventListener("slotchange",this),nj(this,p,v).call(this),this.constructor.Events))null==(a=(e=this.shadowRoot).addEventListener)||a.call(e,t,this,!0)}handleEvent(e){if("slotchange"===e.type)return void nj(this,p,v).call(this);e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))}attributeChangedCallback(e,t,i){nj(this,h,m).call(this),nj(this,f,g).call(this,e,t,i)}connectedCallback(){nj(this,h,m).call(this)}},s=new WeakMap,o=new WeakSet,l=function(){if(nF(this,s))return;nK(this,s,!0);let e=new Set(this.observedAttributes);for(let t of(e.delete("muted"),_))if(!(t in this.prototype))if("function"==typeof y[t])this.prototype[t]=function(...e){return nj(this,h,m).call(this),this.call?this.call(t,...e):this.nativeEl[t].apply(this.nativeEl,e)};else{let i={get(){var i,a,r;nj(this,h,m).call(this);let n=t.toLowerCase();if(e.has(n)){let e=this.getAttribute(n);return null!==e&&(""===e||e)}return null!=(r=null==(i=this.get)?void 0:i.call(this,t))?r:null==(a=this.nativeEl)?void 0:a[t]}};t!==t.toUpperCase()&&(i.set=function(i){nj(this,h,m).call(this);let a=t.toLowerCase();return e.has(a)?void(!0===i||!1===i||null==i?this.toggleAttribute(a,!!i):this.setAttribute(a,i)):this.set?void this.set(t,i):void(this.nativeEl[t]=i)}),Object.defineProperty(this.prototype,t,i)}},d=new WeakMap,u=new WeakMap,c=new WeakMap,h=new WeakSet,m=function(){nF(this,d)||(nK(this,d,!0),this.init())},p=new WeakSet,v=function(){let e=new Map(nF(this,c));this.shadowRoot.querySelector("slot:not([name])").assignedElements({flatten:!0}).filter(e=>["track","source"].includes(e.localName)).forEach(t=>{var i,a;e.delete(t);let r=nF(this,c).get(t);r||(r=t.cloneNode(),nF(this,c).set(t,r)),null==(a=(i=this.nativeEl).append)||a.call(i,r),"track"===r.localName&&r.default&&("chapters"===r.kind||"metadata"===r.kind)&&"disabled"===r.track.mode&&(r.track.mode="hidden")}),e.forEach(e=>e.remove())},b=new WeakSet,E=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},f=new WeakSet,g=function(e,t,i){var a,r,s,o,l,d;["id","class"].includes(e)||!n.observedAttributes.includes(e)&&this.constructor.observedAttributes.includes(e)||(null===i?null==(r=(a=this.nativeEl).removeAttribute)||r.call(a,e):(null==(o=(s=this.nativeEl).getAttribute)?void 0:o.call(s,e))!=i&&(null==(d=(l=this.nativeEl).setAttribute)||d.call(l,e,i)))},n$(n,o),nV(n,"getTemplateHTML",t.endsWith("audio")?ui:ua),nV(n,"shadowRootOptions",{mode:"open"}),nV(n,"Events",ut),n$(n,s,void 0),n};function un(e){let t="";for(let i in e){let a=e[i];""===a?t+=` ${i}`:t+=` ${i}="${a}"`}return t}var us,uo,ul=ur(null!=(us=globalThis.HTMLElement)?us:class{},{tag:"video"});ur(null!=(uo=globalThis.HTMLElement)?uo:class{},{tag:"audio"});var ud=new WeakMap,uu=class extends Error{},uc=class extends Error{};function uh(){var e,t;return null==(t=null==(e=globalThis.cast)?void 0:e.framework)?void 0:t.CastContext.getInstance()}function um(){var e;return null==(e=uh())?void 0:e.getCurrentSession()}function up(){var e;return null==(e=um())?void 0:e.getSessionObj().media[0]}function uv(e){return uh().setOptions({...ub(),...e})}function ub(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}var uE,uf=new(globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{let i=t.deref();i&&e(i)})}}:Set),ug=new WeakSet;!function(e){var t,i,a;null!=(i=null==(t=globalThis.chrome)?void 0:t.cast)&&i.isAvailable?null!=(a=globalThis.cast)&&a.framework?e():customElements.whenDefined("google-cast-button").then(e):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(e)}}(()=>{var e,t,i,a;if(!(null!=(t=null==(e=globalThis.chrome)?void 0:e.cast)&&t.isAvailable))return void console.debug("chrome.cast.isAvailable",null==(a=null==(i=globalThis.chrome)?void 0:i.cast)?void 0:a.isAvailable);uE||(uE=cast.framework,uh().addEventListener(uE.CastContextEventType.CAST_STATE_CHANGED,e=>{uf.forEach(t=>{var i,a;return null==(a=(i=ud.get(t)).onCastStateChanged)?void 0:a.call(i,e)})}),uh().addEventListener(uE.CastContextEventType.SESSION_STATE_CHANGED,e=>{uf.forEach(t=>{var i,a;return null==(a=(i=ud.get(t)).onSessionStateChanged)?void 0:a.call(i,e)})}),uf.forEach(e=>{var t,i;return null==(i=(t=ud.get(e)).init)?void 0:i.call(t)}))});var uy,u_,uA,uT,uk,uw,uS,uI,uC,uR,uL,uD,ux,uM,uN,uO,uP,uU,uB,uW,uH,uV,uq=0,uF=class extends EventTarget{constructor(e){super(),n$(this,uC),n$(this,uL),n$(this,ux),n$(this,uN),n$(this,uP),n$(this,uB),n$(this,uH),n$(this,uy,void 0),n$(this,u_,void 0),n$(this,uA,void 0),n$(this,uT,void 0),n$(this,uk,"disconnected"),n$(this,uw,!1),n$(this,uS,new Set),n$(this,uI,new WeakMap),nK(this,uy,e),uf.add(this),ud.set(this,{init:()=>nj(this,uP,uU).call(this),onCastStateChanged:()=>nj(this,ux,uM).call(this),onSessionStateChanged:()=>nj(this,uN,uO).call(this),getCastPlayer:()=>nF(this,uC,uR)}),nj(this,uP,uU).call(this)}get state(){return nF(this,uk)}async watchAvailability(e){if(nF(this,uy).disableRemotePlayback)throw new uu("disableRemotePlayback attribute is present.");return nF(this,uI).set(e,++uq),nF(this,uS).add(e),uq}async cancelWatchAvailability(e){if(nF(this,uy).disableRemotePlayback)throw new uu("disableRemotePlayback attribute is present.");e?nF(this,uS).delete(e):nF(this,uS).clear()}async prompt(){var e,t,i,a;if(nF(this,uy).disableRemotePlayback)throw new uu("disableRemotePlayback attribute is present.");if(!(null!=(t=null==(e=globalThis.chrome)?void 0:e.cast)&&t.isAvailable))throw new uc("The RemotePlayback API is disabled on this platform.");let r=ug.has(nF(this,uy));ug.add(nF(this,uy)),uv(nF(this,uy).castOptions),Object.entries(nF(this,uT)).forEach(([e,t])=>{nF(this,uA).controller.addEventListener(e,t)});try{await uh().requestSession()}catch(e){if("cancel"===e){r||ug.delete(nF(this,uy));return}throw Error(e)}null==(a=null==(i=ud.get(nF(this,uy)))?void 0:i.loadOnPrompt)||a.call(i)}};uy=new WeakMap,u_=new WeakMap,uA=new WeakMap,uT=new WeakMap,uk=new WeakMap,uw=new WeakMap,uS=new WeakMap,uI=new WeakMap,uC=new WeakSet,uR=function(){if(ug.has(nF(this,uy)))return nF(this,uA)},uL=new WeakSet,uD=function(){ug.has(nF(this,uy))&&(Object.entries(nF(this,uT)).forEach(([e,t])=>{nF(this,uA).controller.removeEventListener(e,t)}),ug.delete(nF(this,uy)),nF(this,uy).muted=nF(this,uA).isMuted,nF(this,uy).currentTime=nF(this,uA).savedPlayerState.currentTime,!1===nF(this,uA).savedPlayerState.isPaused&&nF(this,uy).play())},ux=new WeakSet,uM=function(){let e=uh().getCastState();if(ug.has(nF(this,uy))&&"CONNECTING"===e&&(nK(this,uk,"connecting"),this.dispatchEvent(new Event("connecting"))),!nF(this,uw)&&null!=e&&e.includes("CONNECT"))for(let e of(nK(this,uw,!0),nF(this,uS)))e(!0);else if(nF(this,uw)&&(!e||"NO_DEVICES_AVAILABLE"===e))for(let e of(nK(this,uw,!1),nF(this,uS)))e(!1)},uN=new WeakSet,uO=async function(){var e,t;let{SESSION_RESUMED:i}=uE.SessionState;if(uh().getSessionState()===i&&nF(this,uy).castSrc===(null==(e=up())?void 0:e.media.contentId)){ug.add(nF(this,uy)),Object.entries(nF(this,uT)).forEach(([e,t])=>{nF(this,uA).controller.addEventListener(e,t)});try{await (t=new chrome.cast.media.GetStatusRequest,new Promise((e,i)=>{up().getStatus(t,e,i)}))}catch(e){console.error(e)}nF(this,uT)[uE.RemotePlayerEventType.IS_PAUSED_CHANGED](),nF(this,uT)[uE.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}},uP=new WeakSet,uU=function(){!uE||nF(this,u_)||(nK(this,u_,!0),uv(nF(this,uy).castOptions),nF(this,uy).textTracks.addEventListener("change",()=>nj(this,uH,uV).call(this)),nj(this,ux,uM).call(this),nK(this,uA,new uE.RemotePlayer),new uE.RemotePlayerController(nF(this,uA)),nK(this,uT,{[uE.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!0===e?(nK(this,uk,"connected"),this.dispatchEvent(new Event("connect"))):(nj(this,uL,uD).call(this),nK(this,uk,"disconnected"),this.dispatchEvent(new Event("disconnect")))},[uE.RemotePlayerEventType.DURATION_CHANGED]:()=>{nF(this,uy).dispatchEvent(new Event("durationchange"))},[uE.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{nF(this,uy).dispatchEvent(new Event("volumechange"))},[uE.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{nF(this,uy).dispatchEvent(new Event("volumechange"))},[uE.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{var e;null!=(e=nF(this,uC,uR))&&e.isMediaLoaded&&nF(this,uy).dispatchEvent(new Event("timeupdate"))},[uE.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{nF(this,uy).dispatchEvent(new Event("resize"))},[uE.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{nF(this,uy).dispatchEvent(new Event(this.paused?"pause":"play"))},[uE.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{var e,t;(null==(e=nF(this,uC,uR))?void 0:e.playerState)!==chrome.cast.media.PlayerState.PAUSED&&nF(this,uy).dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[null==(t=nF(this,uC,uR))?void 0:t.playerState]))},[uE.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{var e;null!=(e=nF(this,uC,uR))&&e.isMediaLoaded&&(await Promise.resolve(),nj(this,uB,uW).call(this))}}))},uB=new WeakSet,uW=function(){nj(this,uH,uV).call(this)},uH=new WeakSet,uV=async function(){var e,t,i,a,r;let n;if(!nF(this,uC,uR))return;let s=(null!=(t=null==(e=nF(this,uA).mediaInfo)?void 0:e.tracks)?t:[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),o=[...nF(this,uy).textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),l=s.map(({language:e,name:t,trackId:i})=>{var a;let{mode:r}=null!=(a=o.find(i=>i.language===e&&i.label===t))?a:{};return!!r&&{mode:r,trackId:i}}).filter(Boolean),d=l.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),u=l.find(({mode:e})=>"showing"===e),c=null!=(r=null==(a=null==(i=um())?void 0:i.getSessionObj().media[0])?void 0:a.activeTrackIds)?r:[],h=c;if(c.length&&(h=h.filter(e=>!d.includes(e))),null!=u&&u.trackId&&(h=[...h,u.trackId]),h=[...new Set(h)],n=h,!(c.length===n.length&&c.every(e=>n.includes(e))))try{let e=new chrome.cast.media.EditTracksInfoRequest(h);await new Promise((t,i)=>{up().editTracksInfo(e,t,i)})}catch(e){console.error(e)}};var u$=e=>{var t,i,a,r,n,s,o,l,d;return i=class extends e{constructor(){super(...arguments),n$(this,s),n$(this,l),n$(this,a,{paused:!1}),n$(this,r,ub()),n$(this,n,void 0)}get remote(){return nF(this,n)?nF(this,n):globalThis.chrome?(function(){var e;let t="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(null!=(e=globalThis.chrome)&&e.cast||document.querySelector(`script[src="${t}"]`))return;let i=document.createElement("script");i.src=t,document.head.append(i)}(),ud.set(this,{loadOnPrompt:()=>nj(this,l,d).call(this)}),nK(this,n,new uF(this))):super.remote}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"cast-receiver"===e&&i){nF(this,r).receiverApplicationId=i;return}if(nF(this,s,o))switch(e){case"cast-stream-type":case"cast-src":this.load()}}async load(){var e,t;if(!nF(this,s,o))return super.load();let i=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType),r=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),n=[],l=0;r.length&&(i.tracks=r.map(e=>{let t=++l;0===n.length&&"showing"===e.track.mode&&n.push(t);let i=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return i.trackContentId=e.src,i.trackContentType="text/vtt",i.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,i.name=e.label,i.language=e.srclang,i})),"live"===this.castStreamType?i.streamType=chrome.cast.media.StreamType.LIVE:i.streamType=chrome.cast.media.StreamType.BUFFERED,i.metadata=new chrome.cast.media.GenericMediaMetadata,i.metadata.title=this.title,i.metadata.images=[{url:this.poster}];let d=new chrome.cast.media.LoadRequest(i);d.currentTime=null!=(e=super.currentTime)?e:0,d.autoplay=!nF(this,a).paused,d.activeTrackIds=n,await (null==(t=um())?void 0:t.loadMedia(d)),this.dispatchEvent(new Event("volumechange"))}play(){var e;if(nF(this,s,o)){nF(this,s,o).isPaused&&(null==(e=nF(this,s,o).controller)||e.playOrPause());return}return super.play()}pause(){var e;if(nF(this,s,o)){nF(this,s,o).isPaused||null==(e=nF(this,s,o).controller)||e.playOrPause();return}super.pause()}get castOptions(){return nF(this,r)}get castReceiver(){var e;return null!=(e=this.getAttribute("cast-receiver"))?e:void 0}set castReceiver(e){this.castReceiver!=e&&this.setAttribute("cast-receiver",`${e}`)}get castSrc(){var e,t,i;return null!=(i=null!=(t=this.getAttribute("cast-src"))?t:null==(e=this.querySelector("source"))?void 0:e.src)?i:this.currentSrc}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){var e;return null!=(e=this.getAttribute("cast-content-type"))?e:void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){var e,t;return null!=(t=null!=(e=this.getAttribute("cast-stream-type"))?e:this.streamType)?t:void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get readyState(){if(nF(this,s,o))switch(nF(this,s,o).playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return nF(this,s,o)?nF(this,s,o).isPaused:super.paused}get muted(){var e;return nF(this,s,o)?null==(e=nF(this,s,o))?void 0:e.isMuted:super.muted}set muted(e){var t;if(nF(this,s,o)){(e&&!nF(this,s,o).isMuted||!e&&nF(this,s,o).isMuted)&&(null==(t=nF(this,s,o).controller)||t.muteOrUnmute());return}super.muted=e}get volume(){var e,t;return nF(this,s,o)?null!=(t=null==(e=nF(this,s,o))?void 0:e.volumeLevel)?t:1:super.volume}set volume(e){var t;if(nF(this,s,o)){nF(this,s,o).volumeLevel=+e,null==(t=nF(this,s,o).controller)||t.setVolumeLevel();return}super.volume=e}get duration(){var e,t,i;return nF(this,s,o)&&null!=(e=nF(this,s,o))&&e.isMediaLoaded?null!=(i=null==(t=nF(this,s,o))?void 0:t.duration)?i:NaN:super.duration}get currentTime(){var e,t,i;return nF(this,s,o)&&null!=(e=nF(this,s,o))&&e.isMediaLoaded?null!=(i=null==(t=nF(this,s,o))?void 0:t.currentTime)?i:0:super.currentTime}set currentTime(e){var t;if(nF(this,s,o)){nF(this,s,o).currentTime=e,null==(t=nF(this,s,o).controller)||t.seek();return}super.currentTime=e}},a=new WeakMap,r=new WeakMap,n=new WeakMap,s=new WeakSet,o=function(){var e,t;return null==(t=null==(e=ud.get(this.remote))?void 0:e.getCastPlayer)?void 0:t.call(e)},l=new WeakSet,d=async function(){nF(this,a).paused=nG(i.prototype,this,"paused"),nG(i.prototype,this,"pause").call(this),this.muted=nG(i.prototype,this,"muted");try{await this.load()}catch(e){console.error(e)}},nV(i,"observedAttributes",[...null!=(t=e.observedAttributes)?t:[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"]),i},uK=class extends Event{constructor(e,t){super(e),nV(this,"track"),this.track=t.track}},uj=new WeakMap;function uG(e){var t,i,a;let r;return null!=(t=uj.get(e))?t:(i=e,a={},(r=uj.get(i))||uj.set(i,r={}),Object.assign(r,a))}function uY(e,t){let i=e.videoTracks;uG(t).media=e,uG(t).renditionSet||(uG(t).renditionSet=new Set);let a=uG(i).trackSet;a.add(t);let r=a.size-1;r in u1.prototype||Object.defineProperty(u1.prototype,r,{get(){return[...uG(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new uK("addtrack",{track:t}))})}function uZ(e){var t;let i=null==(t=uG(e).media)?void 0:t.videoTracks;i&&(uG(i).trackSet.delete(e),queueMicrotask(()=>{i.dispatchEvent(new uK("removetrack",{track:e}))}))}var uQ,uz,uX,uJ,u0,u1=class extends EventTarget{constructor(){super(),n$(this,uJ),n$(this,uQ,void 0),n$(this,uz,void 0),n$(this,uX,void 0),uG(this).trackSet=new Set}[Symbol.iterator](){return nF(this,uJ,u0).values()}get length(){return nF(this,uJ,u0).size}getTrackById(e){var t;return null!=(t=[...nF(this,uJ,u0)].find(t=>t.id===e))?t:null}get selectedIndex(){return[...nF(this,uJ,u0)].findIndex(e=>e.selected)}get onaddtrack(){return nF(this,uQ)}set onaddtrack(e){nF(this,uQ)&&(this.removeEventListener("addtrack",nF(this,uQ)),nK(this,uQ,void 0)),"function"==typeof e&&(nK(this,uQ,e),this.addEventListener("addtrack",e))}get onremovetrack(){return nF(this,uz)}set onremovetrack(e){nF(this,uz)&&(this.removeEventListener("removetrack",nF(this,uz)),nK(this,uz,void 0)),"function"==typeof e&&(nK(this,uz,e),this.addEventListener("removetrack",e))}get onchange(){return nF(this,uX)}set onchange(e){nF(this,uX)&&(this.removeEventListener("change",nF(this,uX)),nK(this,uX,void 0)),"function"==typeof e&&(nK(this,uX,e),this.addEventListener("change",e))}};uQ=new WeakMap,uz=new WeakMap,uX=new WeakMap,uJ=new WeakSet,u0=function(){return uG(this).trackSet};var u2=class extends Event{constructor(e,t){super(e),nV(this,"rendition"),this.rendition=t.rendition}};function u3(e){return[...uG(e).media.videoTracks].filter(e=>e.selected).flatMap(e=>[...uG(e).renditionSet])}var u5,u4,u9,u8=class extends EventTarget{constructor(){super(...arguments),n$(this,u5,void 0),n$(this,u4,void 0),n$(this,u9,void 0)}[Symbol.iterator](){return u3(this).values()}get length(){return u3(this).length}getRenditionById(e){var t;return null!=(t=u3(this).find(t=>`${t.id}`==`${e}`))?t:null}get selectedIndex(){return u3(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of u3(this).entries())i.selected=t===e}get onaddrendition(){return nF(this,u5)}set onaddrendition(e){nF(this,u5)&&(this.removeEventListener("addrendition",nF(this,u5)),nK(this,u5,void 0)),"function"==typeof e&&(nK(this,u5,e),this.addEventListener("addrendition",e))}get onremoverendition(){return nF(this,u4)}set onremoverendition(e){nF(this,u4)&&(this.removeEventListener("removerendition",nF(this,u4)),nK(this,u4,void 0)),"function"==typeof e&&(nK(this,u4,e),this.addEventListener("removerendition",e))}get onchange(){return nF(this,u9)}set onchange(e){nF(this,u9)&&(this.removeEventListener("change",nF(this,u9)),nK(this,u9,void 0)),"function"==typeof e&&(nK(this,u9,e),this.addEventListener("change",e))}};u5=new WeakMap,u4=new WeakMap,u9=new WeakMap;var u7,u6=class{constructor(){nV(this,"src"),nV(this,"id"),nV(this,"width"),nV(this,"height"),nV(this,"bitrate"),nV(this,"frameRate"),nV(this,"codec"),n$(this,u7,!1)}get selected(){return nF(this,u7)}set selected(e){var t;let i;nF(this,u7)!==e&&(nK(this,u7,e),t=this,(i=uG(t).media.videoRenditions)&&!uG(i).changeRequested&&(uG(i).changeRequested=!0,queueMicrotask(()=>{delete uG(i).changeRequested,uG(t).track.selected&&i.dispatchEvent(new Event("change"))})))}};u7=new WeakMap;var ce,ct=class{constructor(){nV(this,"id"),nV(this,"kind"),nV(this,"label",""),nV(this,"language",""),nV(this,"sourceBuffer"),n$(this,ce,!1)}addRendition(e,t,i,a,r,n){var s;let o,l,d,u=new u6;return u.src=e,u.width=t,u.height=i,u.frameRate=n,u.bitrate=r,u.codec=a,s=this,o=uG(s).media.videoRenditions,uG(u).media=uG(s).media,uG(u).track=s,(l=uG(s).renditionSet).add(u),(d=l.size-1)in u8.prototype||Object.defineProperty(u8.prototype,d,{get(){return u3(this)[d]}}),queueMicrotask(()=>{s.selected&&o.dispatchEvent(new u2("addrendition",{rendition:u}))}),u}removeRendition(e){let t,i;t=uG(e).media.videoRenditions,i=uG(e).track,uG(i).renditionSet.delete(e),queueMicrotask(()=>{uG(e).track.selected&&t.dispatchEvent(new u2("removerendition",{rendition:e}))})}get selected(){return nF(this,ce)}set selected(e){nF(this,ce)!==e&&(nK(this,ce,e),!0===e&&function(e){var t;let i=null!=(t=uG(e).media.videoTracks)?t:[],a=!1;for(let t of i)t!==e&&(t.selected=!1,a=!0);if(a){if(uG(i).changeRequested)return;uG(i).changeRequested=!0,queueMicrotask(()=>{delete uG(i).changeRequested,i.dispatchEvent(new Event("change"))})}}(this))}};function ci(e){return[...uG(e).media.audioTracks].filter(e=>e.enabled).flatMap(e=>[...uG(e).renditionSet])}ce=new WeakMap;var ca,cr,cn,cs=class extends EventTarget{constructor(){super(...arguments),n$(this,ca,void 0),n$(this,cr,void 0),n$(this,cn,void 0)}[Symbol.iterator](){return ci(this).values()}get length(){return ci(this).length}getRenditionById(e){var t;return null!=(t=ci(this).find(t=>`${t.id}`==`${e}`))?t:null}get selectedIndex(){return ci(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of ci(this).entries())i.selected=t===e}get onaddrendition(){return nF(this,ca)}set onaddrendition(e){nF(this,ca)&&(this.removeEventListener("addrendition",nF(this,ca)),nK(this,ca,void 0)),"function"==typeof e&&(nK(this,ca,e),this.addEventListener("addrendition",e))}get onremoverendition(){return nF(this,cr)}set onremoverendition(e){nF(this,cr)&&(this.removeEventListener("removerendition",nF(this,cr)),nK(this,cr,void 0)),"function"==typeof e&&(nK(this,cr,e),this.addEventListener("removerendition",e))}get onchange(){return nF(this,cn)}set onchange(e){nF(this,cn)&&(this.removeEventListener("change",nF(this,cn)),nK(this,cn,void 0)),"function"==typeof e&&(nK(this,cn,e),this.addEventListener("change",e))}};ca=new WeakMap,cr=new WeakMap,cn=new WeakMap;var co,cl=class{constructor(){nV(this,"src"),nV(this,"id"),nV(this,"bitrate"),nV(this,"codec"),n$(this,co,!1)}get selected(){return nF(this,co)}set selected(e){var t;let i;nF(this,co)!==e&&(nK(this,co,e),t=this,(i=uG(t).media.audioRenditions)&&!uG(i).changeRequested&&(uG(i).changeRequested=!0,queueMicrotask(()=>{delete uG(i).changeRequested,uG(t).track.enabled&&i.dispatchEvent(new Event("change"))})))}};function cd(e,t){let i=e.audioTracks;uG(t).media=e,uG(t).renditionSet||(uG(t).renditionSet=new Set);let a=uG(i).trackSet;a.add(t);let r=a.size-1;r in cb.prototype||Object.defineProperty(cb.prototype,r,{get(){return[...uG(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new uK("addtrack",{track:t}))})}function cu(e){var t;let i=null==(t=uG(e).media)?void 0:t.audioTracks;i&&(uG(i).trackSet.delete(e),queueMicrotask(()=>{i.dispatchEvent(new uK("removetrack",{track:e}))}))}co=new WeakMap;var cc,ch,cm,cp,cv,cb=class extends EventTarget{constructor(){super(),n$(this,cp),n$(this,cc,void 0),n$(this,ch,void 0),n$(this,cm,void 0),uG(this).trackSet=new Set}[Symbol.iterator](){return nF(this,cp,cv).values()}get length(){return nF(this,cp,cv).size}getTrackById(e){var t;return null!=(t=[...nF(this,cp,cv)].find(t=>t.id===e))?t:null}get onaddtrack(){return nF(this,cc)}set onaddtrack(e){nF(this,cc)&&(this.removeEventListener("addtrack",nF(this,cc)),nK(this,cc,void 0)),"function"==typeof e&&(nK(this,cc,e),this.addEventListener("addtrack",e))}get onremovetrack(){return nF(this,ch)}set onremovetrack(e){nF(this,ch)&&(this.removeEventListener("removetrack",nF(this,ch)),nK(this,ch,void 0)),"function"==typeof e&&(nK(this,ch,e),this.addEventListener("removetrack",e))}get onchange(){return nF(this,cm)}set onchange(e){nF(this,cm)&&(this.removeEventListener("change",nF(this,cm)),nK(this,cm,void 0)),"function"==typeof e&&(nK(this,cm,e),this.addEventListener("change",e))}};cc=new WeakMap,ch=new WeakMap,cm=new WeakMap,cp=new WeakSet,cv=function(){return uG(this).trackSet};var cE,cf=class{constructor(){nV(this,"id"),nV(this,"kind"),nV(this,"label",""),nV(this,"language",""),nV(this,"sourceBuffer"),n$(this,cE,!1)}addRendition(e,t,i){var a;let r,n,s,o=new cl;return o.src=e,o.codec=t,o.bitrate=i,a=this,r=uG(a).media.audioRenditions,uG(o).media=uG(a).media,uG(o).track=a,(n=uG(a).renditionSet).add(o),(s=n.size-1)in cs.prototype||Object.defineProperty(cs.prototype,s,{get(){return ci(this)[s]}}),queueMicrotask(()=>{a.enabled&&r.dispatchEvent(new u2("addrendition",{rendition:o}))}),o}removeRendition(e){let t,i;t=uG(e).media.audioRenditions,i=uG(e).track,uG(i).renditionSet.delete(e),queueMicrotask(()=>{uG(e).track.enabled&&t.dispatchEvent(new u2("removerendition",{rendition:e}))})}get enabled(){return nF(this,cE)}set enabled(e){let t;nF(this,cE)!==e&&(nK(this,cE,e),(t=uG(this).media.audioTracks)&&!uG(t).changeRequested&&(uG(t).changeRequested=!0,queueMicrotask(()=>{delete uG(t).changeRequested,t.dispatchEvent(new Event("change"))})))}};cE=new WeakMap;var cg=cA(globalThis.HTMLMediaElement,"video"),cy=cA(globalThis.HTMLMediaElement,"audio");function c_(e){if(!(null!=e&&e.prototype))return e;let t=cA(e,"video");(!t||`${t}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"videoTracks",{get(){return function(e){var t;let i=uG(e).videoTracks;if(!i&&(i=new u1,uG(e).videoTracks=i,cg)){let a=cg.call(null!=(t=e.nativeEl)?t:e);for(let t of a)uY(e,t);a.addEventListener("change",()=>{i.dispatchEvent(new Event("change"))}),a.addEventListener("addtrack",t=>{if([...i].some(e=>e instanceof ct)){for(let e of a)uZ(e);return}uY(e,t.track)}),a.addEventListener("removetrack",e=>{uZ(e.track)})}return i}(this)}});let i=cA(e,"audio");(!i||`${i}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"audioTracks",{get(){return function(e){var t;let i=uG(e).audioTracks;if(!i&&(i=new cb,uG(e).audioTracks=i,cy)){let a=cy.call(null!=(t=e.nativeEl)?t:e);for(let t of a)cd(e,t);a.addEventListener("change",()=>{i.dispatchEvent(new Event("change"))}),a.addEventListener("addtrack",t=>{if([...i].some(e=>e instanceof cf)){for(let e of a)cu(e);return}cd(e,t.track)}),a.addEventListener("removetrack",e=>{cu(e.track)})}return i}(this)}}),"addVideoTrack"in e.prototype||(e.prototype.addVideoTrack=function(e,t="",i=""){let a=new ct;return a.kind=e,a.label=t,a.language=i,uY(this,a),a}),"removeVideoTrack"in e.prototype||(e.prototype.removeVideoTrack=uZ),"addAudioTrack"in e.prototype||(e.prototype.addAudioTrack=function(e,t="",i=""){let a=new cf;return a.kind=e,a.label=t,a.language=i,cd(this,a),a}),"removeAudioTrack"in e.prototype||(e.prototype.removeAudioTrack=cu),"videoRenditions"in e.prototype||Object.defineProperty(e.prototype,"videoRenditions",{get(){return a(this)}});let a=e=>{let t=uG(e).videoRenditions;return t||(uG(t=new u8).media=e,uG(e).videoRenditions=t),t};"audioRenditions"in e.prototype||Object.defineProperty(e.prototype,"audioRenditions",{get(){return r(this)}});let r=e=>{let t=uG(e).audioRenditions;return t||(uG(t=new cs).media=e,uG(e).audioRenditions=t),t};return e}function cA(e,t){var i;if(null!=e&&e.prototype)return null==(i=Object.getOwnPropertyDescriptor(e.prototype,`${t}Tracks`))?void 0:i.get}ut.push("castchange","entercast","leavecast");var cT,ck,cw,cS,cI,cC,cR,cL,cD,cx,cM={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DRM_TOKEN:"drm-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type"},cN=Object.values(cM),cO=class extends ul{constructor(){super(),n$(this,cD),n$(this,cT,void 0),n$(this,ck,void 0),n$(this,cw,void 0),n$(this,cS,{}),n$(this,cI,void 0),n$(this,cC,void 0),n$(this,cR,void 0),n$(this,cL,void 0),nK(this,cw,(0,nU.GI)())}static get observedAttributes(){var e;return[...cN,...null!=(e=ul.observedAttributes)?e:[]]}get preferCmcd(){var e;return null!=(e=this.getAttribute(cM.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?nU.WG.includes(e)?this.setAttribute(cM.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${nU.WG.join()}`):this.removeAttribute(cM.PREFER_CMCD))}get playerInitTime(){return nF(this,cw)}get playerSoftwareName(){var e;return null!=(e=nF(this,cR))?e:"mux-video"}set playerSoftwareName(e){nK(this,cR,e)}get playerSoftwareVersion(){var e;return null!=(e=nF(this,cC))?e:ue}set playerSoftwareVersion(e){nK(this,cC,e)}get _hls(){var e;return null==(e=nF(this,cT))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=(0,nU.vG)(this.nativeEl))?e:null}get errorTranslator(){return nF(this,cL)}set errorTranslator(e){nK(this,cL,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(cM.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(cM.TYPE,e):this.removeAttribute(cM.TYPE))}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(cM.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(cM.DEBUG,""):this.removeAttribute(cM.DEBUG))}get disableTracking(){return this.hasAttribute(cM.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(cM.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(cM.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(cM.DISABLE_COOKIES,""):this.removeAttribute(cM.DISABLE_COOKIES))}get startTime(){let e=this.getAttribute(cM.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(cM.START_TIME):this.setAttribute(cM.START_TIME,`${e}`))}get playbackId(){var e;return this.hasAttribute(cM.PLAYBACK_ID)?this.getAttribute(cM.PLAYBACK_ID):null!=(e=(0,nU.CL)(this.src))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(cM.PLAYBACK_ID,e):this.removeAttribute(cM.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(cM.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(cM.MAX_RESOLUTION,e):this.removeAttribute(cM.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(cM.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(cM.MIN_RESOLUTION,e):this.removeAttribute(cM.MIN_RESOLUTION))}get renditionOrder(){var e;return null!=(e=this.getAttribute(cM.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(cM.RENDITION_ORDER,e):this.removeAttribute(cM.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(cM.PROGRAM_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){null==e?this.removeAttribute(cM.PROGRAM_START_TIME):this.setAttribute(cM.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(cM.PROGRAM_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){null==e?this.removeAttribute(cM.PROGRAM_END_TIME):this.setAttribute(cM.PROGRAM_END_TIME,`${e}`)}get customDomain(){var e;return null!=(e=this.getAttribute(cM.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(cM.CUSTOM_DOMAIN,e):this.removeAttribute(cM.CUSTOM_DOMAIN))}get drmToken(){var e;return null!=(e=this.getAttribute(cM.DRM_TOKEN))?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(cM.DRM_TOKEN,e):this.removeAttribute(cM.DRM_TOKEN))}get ended(){return(0,nU.hu)(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(cM.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(cM.ENV_KEY,e):this.removeAttribute(cM.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(cM.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(cM.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(cM.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(cM.STREAM_TYPE))?e:(0,nU.Zp)(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(cM.STREAM_TYPE,e):this.removeAttribute(cM.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(cM.TARGET_LIVE_WINDOW)?+this.getAttribute(cM.TARGET_LIVE_WINDOW):(0,nU.WE)(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(cM.TARGET_LIVE_WINDOW):this.setAttribute(cM.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(cM.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,a-i)}return(0,nU.Yz)(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(cM.LIVE_EDGE_OFFSET))return+this.getAttribute(cM.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(cM.LIVE_EDGE_OFFSET):this.setAttribute(cM.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return(0,nU.pD)(this.nativeEl)}async addCuePoints(e){return(0,nU.st)(this.nativeEl,e)}get activeCuePoint(){return(0,nU.C$)(this.nativeEl)}get cuePoints(){return(0,nU.Pv)(this.nativeEl)}async addChapters(e){return(0,nU.S5)(this.nativeEl,e)}get activeChapter(){return(0,nU.IC)(this.nativeEl)}get chapters(){return(0,nU.rN)(this.nativeEl)}getStartDate(){return(0,nU.tq)(this.nativeEl,this._hls)}get currentPdt(){return(0,nU.Ul)(this.nativeEl,this._hls)}get preferPlayback(){let e=this.getAttribute(cM.PREFER_PLAYBACK);if(e===nU.Vi.MSE||e===nU.Vi.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===nU.Vi.MSE||e===nU.Vi.NATIVE?this.setAttribute(cM.PREFER_PLAYBACK,e):this.removeAttribute(cM.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![cM.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return null!=i&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...nF(this,cS)}}set metadata(e){nK(this,cS,null!=e?e:{}),this.mux&&this.mux.emit("hb",nF(this,cS))}get _hlsConfig(){return nF(this,cI)}set _hlsConfig(e){nK(this,cI,e)}load(){nK(this,cT,(0,nU.n_)(this,this.nativeEl,nF(this,cT)))}unload(){(0,nU.zN)(this.nativeEl,nF(this,cT)),nK(this,cT,void 0)}attributeChangedCallback(e,t,i){var a,r;switch(ul.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case cM.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=i?i:void 0;break;case cM.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=i?i:void 0;break;case"src":{let e=!!t,a=!!i;!e&&a?nj(this,cD,cx).call(this):e&&!a?this.unload():e&&a&&(this.unload(),nj(this,cD,cx).call(this));break}case"autoplay":if(i===t)break;null==(a=nF(this,cT))||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;null==(r=nF(this,cT))||r.setPreload(i);break;case cM.PLAYBACK_ID:this.src=(0,nU.OR)(this);break;case cM.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case cM.METADATA_URL:i&&fetch(i).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case cM.STREAM_TYPE:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case cM.TARGET_LIVE_WINDOW:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}))}}connectedCallback(){var e;null==(e=super.connectedCallback)||e.call(this),this.nativeEl&&this.src&&!nF(this,cT)&&nj(this,cD,cx).call(this)}disconnectedCallback(){this.unload()}};cT=new WeakMap,ck=new WeakMap,cw=new WeakMap,cS=new WeakMap,cI=new WeakMap,cC=new WeakMap,cR=new WeakMap,cL=new WeakMap,cD=new WeakSet,cx=async function(){nF(this,ck)||(await nK(this,ck,Promise.resolve()),nK(this,ck,null),this.load())};var cP=class extends u$(c_(cO)){};d6.customElements.get("mux-video")||(d6.customElements.define("mux-video",cP),d6.MuxVideoElement=cP);var cU=Object.defineProperty,cB=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},cW=(e,t,i)=>(cB(e,t,"read from private field"),i?i.call(e):t.get(e)),cH=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},cV=(e,t,i,a)=>(cB(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let cq={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof cQ&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof cQ?a.element[a.attributeName]=t:a.value=t}}}};class cF extends B.DocumentFragment{constructor(e,t,i=cq){var a;super(),cH(this,hf,void 0),cH(this,hg,void 0),this.append(e.content.cloneNode(!0)),cV(this,hf,c$(this)),cV(this,hg,i),null==(a=i.createCallback)||a.call(i,this,cW(this,hf),t),i.processCallback(this,cW(this,hf),t)}update(e){cW(this,hg).processCallback(this,cW(this,hf),e)}}hf=new WeakMap,hg=new WeakMap;let c$=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new cZ;for([i,a]of cj(r.value))if(i){let i=new cQ(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){if(1===r.nodeType||r.data.includes("{{")){let n=[];if(r.data)for([i,a]of cj(r.data))if(i){let i=new cz(e);n.push(i),t.push([a,i])}else n.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new cX(e,r);n.push(i),t.push([i.expression,i])}r.replaceWith(...n.flatMap(e=>e.replacementNodes||[e]))}}else c$(r,t);return t},cK={},cj=e=>{let t="",i=0,a=cK[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),cK[e]=a};class cG{get value(){return""}set value(e){}toString(){return this.value}}let cY=new WeakMap;class cZ{constructor(){cH(this,hy,[])}[Symbol.iterator](){return cW(this,hy).values()}get length(){return cW(this,hy).length}item(e){return cW(this,hy)[e]}append(...e){for(let t of e)t instanceof cQ&&cY.set(t,this),cW(this,hy).push(t)}toString(){return cW(this,hy).join("")}}hy=new WeakMap;class cQ extends cG{constructor(e,t,i){super(),cH(this,hw),cH(this,h_,""),cH(this,hA,void 0),cH(this,hT,void 0),cH(this,hk,void 0),cV(this,hA,e),cV(this,hT,t),cV(this,hk,i)}get attributeName(){return cW(this,hT)}get attributeNamespace(){return cW(this,hk)}get element(){return cW(this,hA)}get value(){return cW(this,h_)}set value(e){cW(this,h_)!==e&&(cV(this,h_,e),cW(this,hw,hS)&&1!==cW(this,hw,hS).length?cW(this,hA).setAttributeNS(cW(this,hk),cW(this,hT),cW(this,hw,hS)):null==e?cW(this,hA).removeAttributeNS(cW(this,hk),cW(this,hT)):cW(this,hA).setAttributeNS(cW(this,hk),cW(this,hT),e))}get booleanValue(){return cW(this,hA).hasAttributeNS(cW(this,hk),cW(this,hT))}set booleanValue(e){if(cW(this,hw,hS)&&1!==cW(this,hw,hS).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}h_=new WeakMap,hA=new WeakMap,hT=new WeakMap,hk=new WeakMap,hw=new WeakSet,hS=function(){return cY.get(this)};class cz extends cG{constructor(e,t){super(),cH(this,hI,void 0),cH(this,hC,void 0),cV(this,hI,e),cV(this,hC,t?[...t]:[new Text])}get replacementNodes(){return cW(this,hC)}get parentNode(){return cW(this,hI)}get nextSibling(){return cW(this,hC)[cW(this,hC).length-1].nextSibling}get previousSibling(){return cW(this,hC)[0].previousSibling}get value(){return cW(this,hC).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),cV(this,hC,function(e,t,i,a=null){let r=0,n,s,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}(cW(this,hC)[0].parentNode,cW(this,hC),t,this.nextSibling))}}hI=new WeakMap,hC=new WeakMap;class cX extends cz{constructor(e,t){let i=t.getAttribute("directive")||t.getAttribute("type"),a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),((e,t,i)=>((e,t,i)=>t in e?cU(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!=typeof t?t+"":t,i))(this,"directive"),this.expression=a,this.template=t,this.directive=i}}let cJ={string:e=>String(e)};class c0{constructor(e){this.template=e,this.state=void 0}}let c1=new WeakMap,c2=new WeakMap,c3={partial:(e,t)=>{t[e.expression]=new c0(e.template)},if:(e,t)=>{var i;if(c8(e.expression,t))if(c1.get(e)!==e.template){c1.set(e,e.template);let i=new cF(e.template,t,c4);e.replace(i),c2.set(e,i)}else null==(i=c2.get(e))||i.update(t);else e.replace(""),c1.delete(e),c2.delete(e)}},c5=Object.keys(c3),c4={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof cX){if(!n.directive){let e=c5.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=c3[n.directive])||a.call(c3,n,i);continue}let t=c8(e,i);if(t instanceof c0){c1.get(n)!==t.template?(c1.set(n,t.template),n.value=t=new cF(t.template,t.state,c4),c2.set(n,t)):null==(r=c2.get(n))||r.update(t.state);continue}t?(n instanceof cQ&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof cQ?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,c1.delete(n),c2.delete(n))):n instanceof cQ?n.value=void 0:(n.value=void 0,c1.delete(n),c2.delete(n))}}},c9={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=cJ[t])?void 0:i.call(cJ,e)}};function c8(e,t={}){var i,a,r,n,s,o,l;let d=(function(e,t){let i,a,r,n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return c7(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return c7(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;i&&"="===a&&(o[i]=he(d,t))}return i}if(1===d.length)return c6(d[0])?he(d[0].token,t):c7(e);if(2===d.length){let i=c9[null==(o=d[0])?void 0:o.token];return i&&c6(d[1])?i(he(d[1].token,t)):c7(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=c9[i];if(!a||!c6(d[0])||!c6(d[2]))return c7(e);let r=he(d[0].token,t);return a(r,"|"===i?d[2].token:he(d[2].token,t))}}function c7(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function c6({type:e}){return["number","boolean","string","param"].includes(e)}function he(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):S(e)?parseFloat(e):t[e]}var ht=Object.defineProperty,hi=(e,t,i)=>(((e,t,i)=>t in e?ht(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!=typeof t?t+"":t,i),i),ha=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},hr=(e,t,i)=>(ha(e,t,"read from private field"),i?i.call(e):t.get(e)),hn=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},hs=(e,t,i,a)=>(ha(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ho=(e,t,i)=>(ha(e,t,"access private method"),i);let hl={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},hd=W.createElement("template");hd.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-controller:not([mediasubtitleslist]) media-captions-selectmenu,
    media-captions-button:not([mediasubtitleslist]),
    media-rendition-selectmenu[mediarenditionunavailable],
    media-audio-track-selectmenu[mediaaudiotrackunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class hu extends B.HTMLElement{constructor(){super(),hn(this,hx),hn(this,hN),hi(this,"renderRoot"),hi(this,"renderer"),hn(this,hR,void 0),hn(this,hL,void 0),hn(this,hD,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());let e=new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(hl[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(u.BREAKPOINTS_COMPUTED,this.render),ho(this,hx,hM).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=hr(this,hR))?e:this.constructor.template}set template(e){hs(this,hD,null),hs(this,hR,e),this.createRenderer()}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>hl[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=hl[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(S(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&ho(this,hN,hO).call(this)}connectedCallback(){ho(this,hN,hO).call(this)}createRenderer(){this.template&&this.template!==hr(this,hL)&&(hs(this,hL,this.template),this.renderer=new cF(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(hd.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function hc(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}hR=new WeakMap,hL=new WeakMap,hD=new WeakMap,hx=new WeakSet,hM=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},hN=new WeakSet,hO=function(){var e;let t=this.getAttribute("template");if(!t||t===hr(this,hD))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){hs(this,hD,t),hs(this,hR,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(hs(this,hD,t),hc(t).then(e=>{let t=W.createElement("template");t.innerHTML=e,hs(this,hR,t),this.createRenderer()}).catch(console.error))},hi(hu,"template"),hi(hu,"observedAttributes",["template"]),hi(hu,"processor",c4),B.customElements.get("media-theme")||B.customElements.define("media-theme",hu);var hh=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},hm=(e,t,i)=>(hh(e,t,"read from private field"),i?i.call(e):t.get(e)),hp=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},hv=(e,t,i,a)=>(hh(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),hb=(e,t,i)=>(hh(e,t,"access private method"),i),hE=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends hE{}globalThis.DocumentFragment=e}var hf,hg,hy,h_,hA,hT,hk,hw,hS,hI,hC,hR,hL,hD,hx,hM,hN,hO,hP,hU=class extends hE{},hB=class{constructor(e,t={}){hp(this,hP,void 0),hv(this,hP,null==t?void 0:t.detail)}get detail(){return hm(this,hP)}initCustomEvent(){}};hP=new WeakMap;var hW={document:{createElement:function(e,t){return new hU}},DocumentFragment,customElements:{get(e){},define(e,t,i){},upgrade(e){},whenDefined:e=>Promise.resolve(hU)},CustomEvent:hB,EventTarget:hE,HTMLElement:hU,HTMLVideoElement:class extends hE{}},hH="undefined"==typeof window||void 0===globalThis.customElements,hV=hH?hW:globalThis,hq=hH?hW.document:globalThis.document,hF={code:"en"};function h$(e,t=!0){var i;return new hK(t&&null!=(i=null==hF?void 0:hF[e])?i:e,t?hF.code:"en")}var hK=class{constructor(e,t=(e=>null!=(e=hF.code)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return null!=(a=e[i])?a:""})}toString(){return this.message}};function hj(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function hG(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function hY(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function hZ(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}function hQ(e){let t=(null!=e?e:"").split(".")[1];return t?JSON.parse(decodeURIComponent(atob(t.replace(/-/g,"+").replace(/_/g,"/")).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))):{}}var hz,hX,hJ,h0=(e,t)=>!!e&&!!t&&(!!e.contains(t)||h0(e,t.getRootNode().host)),h1="mux.com",h2=(()=>{try{return"2.9.1"}catch{}return"UNKNOWN"})(),h3=e=>{if(e){if([nU.U4.LIVE,nU.U4.ON_DEMAND].includes(e))return e;if(null!=e&&e.includes("live"))return nU.U4.LIVE}},h5={crossorigin:"crossOrigin",playsinline:"playsInline"},h4=class{constructor(e,t){hp(this,hz,void 0),hp(this,hX,void 0),hp(this,hJ,[]),hv(this,hz,e),hv(this,hX,t)}[Symbol.iterator](){return hm(this,hJ).values()}get length(){return hm(this,hJ).length}get value(){var e;return null!=(e=hm(this,hJ).join(" "))?e:""}set value(e){var t;e!==this.value&&(hv(this,hJ,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return hm(this,hJ)[e]}values(){return hm(this,hJ).values()}keys(){return hm(this,hJ).keys()}forEach(e){hm(this,hJ).forEach(e)}add(...e){var t,i;e.forEach(e=>{this.contains(e)||hm(this,hJ).push(e)}),(""!==this.value||null!=(t=hm(this,hz))&&t.hasAttribute(`${hm(this,hX)}`))&&null!=(i=hm(this,hz))&&i.setAttribute(`${hm(this,hX)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{hm(this,hJ).splice(hm(this,hJ).indexOf(e),1)}),null==(t=hm(this,hz))||t.setAttribute(`${hm(this,hX)}`,`${this.value}`)}contains(e){return hm(this,hJ).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};hz=new WeakMap,hX=new WeakMap,hJ=new WeakMap;var h9=`[mux-player ${h2}]`;function h8(...e){console.warn(h9,...e)}function h7(...e){console.error(h9,...e)}function h6(e){var t;let i=null!=(t=e.message)?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${h$("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),h8(i)}var me,mt={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},mi={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},ma=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),mr=ut.filter(e=>"error"!==e),mn=Object.values(mt).filter(e=>![mt.PLAYSINLINE].includes(e)),ms=Object.values(mi),mo=class extends hV.HTMLElement{constructor(){super(),hp(this,me,new WeakMap),new MutationObserver(e=>{for(let t of e)"childList"===t.type&&(t.removedNodes.forEach(e=>{var t;null==(t=hm(this,me).get(e))||t.remove()}),t.addedNodes.forEach(e=>{var t;null!=e&&e.slot||null==(t=this.media)||t.append(md(hm(this,me),e))}))}).observe(this,{childList:!0,subtree:!0})}static get observedAttributes(){return[...mn,...ms]}init(){this.querySelectorAll(":scope > :not([slot])").forEach(e=>{var t;null==(t=this.media)||t.append(md(hm(this,me),e))}),mr.forEach(e=>{var t;null==(t=this.media)||t.addEventListener(e,e=>{this.dispatchEvent(new Event(e.type))})})}attributeChangedCallback(e,t,i){var a,r;switch(e){case mi.MUTED:this.media&&(this.media.muted=null!=i,this.media.defaultMuted=null!=i);return;case mi.VOLUME:{let e=null!=(a=hY(i))?a:1;this.media&&(this.media.volume=e);return}case mi.PLAYBACKRATE:{let e=null!=(r=hY(i))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}load(){var e;null==(e=this.media)||e.load()}requestCast(e){var t;return null==(t=this.media)?void 0:t.requestCast(e)}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:ma}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:ma}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentSrc(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentSrc)?t:""}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=hY(this.getAttribute(mi.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(mi.PLAYBACKRATE,`${e}`):this.removeAttribute(mi.PLAYBACKRATE)}get crossOrigin(){return ml(this,mt.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(mt.CROSSORIGIN,`${e}`)}get autoplay(){return null!=ml(this,mt.AUTOPLAY)}set autoplay(e){e?this.setAttribute(mt.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(mt.AUTOPLAY)}get loop(){return null!=ml(this,mt.LOOP)}set loop(e){e?this.setAttribute(mt.LOOP,""):this.removeAttribute(mt.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=ml(this,mt.MUTED)}set defaultMuted(e){e?this.setAttribute(mt.MUTED,""):this.removeAttribute(mt.MUTED)}get playsInline(){return null!=ml(this,mt.PLAYSINLINE)}set playsInline(e){h7("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(mt.PRELOAD,e):this.removeAttribute(mt.PRELOAD)}};function ml(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}function md(e,t){let i=e.get(t);return i||(i=t.cloneNode(),e.set(t,i)),i}me=new WeakMap;var mu=mo,mc=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-selectmenu-display: var(--captions-selectmenu, var(--media-captions-button-display));
  --media-rendition-selectmenu-display: var(--rendition-selectmenu);
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-selectmenu-display: var(--playback-rate-selectmenu);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  width: 100%;
  line-height: 0;
}

/* Hide custom elements that are not defined yet */
:not(:defined) {
  display: none;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-captions-button-display, var(--top-captions-selectmenu))
  );
  --media-rendition-selectmenu-display: var(--rendition-selectmenu, var(--top-rendition-selectmenu));
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu, var(--top-audio-track-selectmenu));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-playback-rate-button-display, var(--top-playback-rate-selectmenu))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-captions-button-display, var(--center-captions-selectmenu))
  );
  --media-rendition-selectmenu-display: var(--rendition-selectmenu, var(--center-rendition-selectmenu));
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu, var(--center-audio-track-selectmenu));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-selectmenu-display: var(
    --playback-rate-selectmenu,
    var(--media-playback-rate-button-display, var(--center-playback-rate-selectmenu))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-captions-button-display, var(--bottom-captions-selectmenu))
  );
  --media-rendition-selectmenu-display: var(--rendition-selectmenu, var(--bottom-rendition-selectmenu));
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu, var(--bottom-audio-track-selectmenu));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-selectmenu-display: var(
    --playback-rate-selectmenu,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-selectmenu))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}
`,mh=`
  :host {
    z-index: 100;
    display: var(--media-dialog-display, flex);
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    color: #fff;
    line-height: 18px;
    font-family: Arial, sans-serif;
    padding: var(--media-dialog-backdrop-padding, 0);
    background: var(--media-dialog-backdrop-background,
      linear-gradient(to bottom, rgba(20, 20, 30, 0.7) 50%, rgba(20, 20, 30, 0.9))
    );
    /* Needs to use !important to prevent overwrite of media-chrome */
    transition: var(--media-dialog-transition-open, visibility .2s, opacity .2s) !important;
    transform: var(--media-dialog-transform-open, none) !important;
    visibility: visible !important;
    opacity: 1 !important;
    pointer-events: auto !important;
  }

  :host(:not([open])) {
    /* Needs to use !important to prevent overwrite of media-chrome */
    transition: var(--media-dialog-transition-close, visibility .1s, opacity .1s) !important;
    transform: var(--media-dialog-transform-close, none) !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }

  :focus-visible {
    box-shadow: 0 0 0 2px rgba(27, 127, 204, 0.9);
  }

  .dialog {
    position: relative;
    box-sizing: border-box;
    background: var(--media-dialog-background, none);
    padding: var(--media-dialog-padding, 10px);
    width: min(320px, 100%);
    word-wrap: break-word;
    max-height: 100%;
    overflow: auto;
    text-align: center;
    line-height: 1.4;
  }
`,mm=hq.createElement("template");mm.innerHTML=`
  <style>
    ${mh}
  </style>

  <div class="dialog">
    <slot></slot>
  </div>
`;var mp=class extends hV.HTMLElement{constructor(){var e;super(),this.attachShadow({mode:"open"}),null==(e=this.shadowRoot)||e.appendChild(this.constructor.template.content.cloneNode(!0))}show(){this.setAttribute("open",""),this.dispatchEvent(new CustomEvent("open",{composed:!0,bubbles:!0})),mv(this)}close(){var e;this.hasAttribute("open")&&(this.removeAttribute("open"),this.dispatchEvent(new CustomEvent("close",{composed:!0,bubbles:!0})),e=this,e._previouslyFocusedElement instanceof HTMLElement&&e._previouslyFocusedElement.focus())}attributeChangedCallback(e,t,i){"open"===e&&t!==i&&(null!=i?this.show():this.close())}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","dialog"),this.hasAttribute("open")&&mv(this)}};function mv(e){let t=new CustomEvent("initfocus",{composed:!0,bubbles:!0,cancelable:!0});if(e.dispatchEvent(t),t.defaultPrevented)return;let i=e.querySelector("[autofocus]:not([disabled])");!i&&e.tabIndex>=0&&(i=e),i||(i=function e(t){let i=["button","input","keygen","select","textarea"].map(function(e){return e+":not([disabled])"});i.push('[tabindex]:not([disabled]):not([tabindex=""])');let a=null==t?void 0:t.querySelector(i.join(", "));if(!a&&"attachShadow"in Element.prototype){let i=(null==t?void 0:t.querySelectorAll("*"))||[];for(let t=0;t<i.length&&!(i[t].tagName&&i[t].shadowRoot&&(a=e(i[t].shadowRoot)));t++);}return a}(e.shadowRoot)),e._previouslyFocusedElement=hq.activeElement,hq.activeElement instanceof HTMLElement&&hq.activeElement.blur(),e.addEventListener("transitionend",()=>{i instanceof HTMLElement&&i.focus({preventScroll:!0})},{once:!0})}mp.styles=mh,mp.template=mm,mp.observedAttributes=["open"],hV.customElements.get("media-dialog")||(hV.customElements.define("media-dialog",mp),hV.MediaDialog=mp);var mb=mp,mE=hq.createElement("template");mE.innerHTML=`
  <style>
    ${mb.styles}

    .close {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      width: 28px;
      height: 28px;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  </style>

  <div class="dialog">
    <slot></slot>
  </div>

  <slot name="close">
    <button class="close" tabindex="0">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </slot>
`;var mf=class extends mb{constructor(){var e,t;super(),null==(t=null==(e=this.shadowRoot)?void 0:e.querySelector(".close"))||t.addEventListener("click",()=>{this.close()})}};mf.template=mE,hV.customElements.get("mxp-dialog")||(hV.customElements.define("mxp-dialog",mf),hV.MxpDialog=mf);var mg=new WeakMap,my=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let i=mg.get(this.element);i&&i.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=mg.get(this.element);e&&e.delete(this.type)}}static for(t){mg.has(t.element)||mg.set(t.element,new Map);let i=t.attributeName.slice(2),a=mg.get(t.element);return a&&a.has(i)?a.get(i):new e(t.element,i)}},m_=new Map,mA=new WeakMap,mT=new WeakMap,mk=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("\x01")}get template(){if(m_.has(this.stringsKey))return m_.get(this.stringsKey);{let e=hq.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,i,a)=>e+i+(a<t?`{{ ${a} }}`:""),""),m_.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(mA.get(e)!==i){mA.set(e,i);let t=new cF(i,this.values,this.processor);mT.set(e,t),e instanceof cz?e.replace(...t.children):e.appendChild(t);return}let a=mT.get(e);null==(t=null==a?void 0:a.update)||t.call(a,this.values)}},mw={processCallback(e,t,i){var a;if(i)for(let[e,r]of t)e in i&&function(e,t){(function(e,t){if(e instanceof cQ&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1})(e,t)||function(e,t){if("boolean"==typeof t&&e instanceof cQ){let i=e.attributeNamespace;return t!==e.element.hasAttributeNS(i,e.attributeName)&&(e.booleanValue=t),!0}return!1}(e,t)||e instanceof cQ&&e.attributeName.startsWith("on")&&(my.for(e).set(t),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),1)||!1===t&&e instanceof cz&&(e.replace(""),1)||t instanceof mk&&e instanceof cz&&(t.renderInto(e),1)||t instanceof DocumentFragment&&e instanceof cz&&(t.childNodes.length&&e.replace(...t.childNodes),1)||function(e,t){if(e instanceof cQ){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t))}e.value=String(t)}(e,t)}(r,null!=(a=i[e])?a:"")}};function mS(e,...t){return new mk(e,t,mw)}var mI=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",DISPLAY:"display",CONTROL_BAR:"control-bar",SELECTMENU:"selectmenu",LISTBOX:"listbox",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", ");function mC(e,t,i,a,r){var n,s,o;let l={},d={};switch(e.code){case nU.FJ.MEDIA_ERR_NETWORK:switch(l.title=h$("Network Error",r),l.message=e.message,null==(n=e.data)?void 0:n.response.code){case 412:l.title=h$("Video is not currently available",r),l.message=h$("The live stream or video file are not yet ready.",r),d.message=h$("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),d.file="412-not-playable.md";break;case 404:l.title=h$("Video does not exist",r),l.message="",d.message=h$("This playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),d.file="404-not-found.md";break;case 403:{if(l.title=h$("Invalid playback URL",r),l.message=h$("The video URL or playback-token are formatted with incorrect or incomplete information.",r),d.message=h$("403 error trying to access this playback URL. If this is a signed URL, you might need to provide a playback-token.",r),d.file="missing-signed-tokens.md",!a)break;let{exp:e,aud:t,sub:n}=hQ(a),s=Date.now()>1e3*e,o=n!==i,u="v"!==t,c={timeStyle:"medium",dateStyle:"medium"};if(s){l.title=h$("Video URL has expired",r),l.message=h$("The video’s secured playback-token has expired.",r),d.message=h$("The video’s secured playback-token has expired.",r),d.context=h$("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat(hF.code,c).format(1e3*e),currentDate:new Intl.DateTimeFormat(hF.code,c).format(Date.now())}),d.file="403-expired-token.md";break}if(o){l.title=h$("Video URL is formatted incorrectly",r),l.message=h$("The video’s playback ID does not match the one encoded in the playback-token.",r),d.message=h$("The video’s playback ID does not match the one encoded in the playback-token.",r),d.context=h$("Specified playback ID: {playbackId} and the playback ID encoded in the playback-token: {tokenPlaybackId}",r).format({playbackId:i,tokenPlaybackId:n}),d.file="403-playback-id-mismatch.md";break}if(u){l.title=h$("Video URL is formatted incorrectly",r),l.message=h$("The playback-token is formatted with incorrect information.",r),d.message=h$("The playback-token is formatted with incorrect information.",r),d.context=h$("The playback-token has an incorrect aud value: {tokenType}. aud value should be v.",r).format({tokenType:t}),d.file="403-incorrect-aud-value.md";break}d.message=h$("403 error trying to access this playback URL. If this is a signed playback ID, the token might not have been generated correctly.",r),d.file="403-malformatted-token.md"}}break;case nU.FJ.MEDIA_ERR_DECODE:{let{message:t}=e;l={title:h$("Media Error",r),message:t},d.file="media-decode-error.md";break}case nU.FJ.MEDIA_ERR_SRC_NOT_SUPPORTED:{let n=null==(o=null==(s=e.data)?void 0:s.response)?void 0:o.code;if(n>=400&&n<500){e.code=nU.FJ.MEDIA_ERR_NETWORK,e.data={response:{code:n}},{dialog:l,devlog:d}=mC(e,t,i,a);break}l={title:h$("Source Not Supported",r),message:e.message},d.file="media-src-not-supported.md";break}default:l={title:h$("Error",r),message:e.message}}return t&&(l={title:h$("Your device appears to be offline",r),message:h$("Check your internet connection and try reloading this video.",r)}),{dialog:l,devlog:d}}var mR=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='listbox'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: calc(100% + 16px);
      padding: 2.5px 10px;
    }

    [part~='listbox']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='listbox']::part(option) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='listbox']::part(option-selected) {
      font-weight: 700;
    }

    media-captions-selectmenu,
    media-rendition-selectmenu,
    media-audio-track-selectmenu,
    media-playback-rate-listbox[part~='listbox'] {
      --media-listbox-background: var(--_primary-color);
      --media-option-selected-background: transparent;
      --media-option-hover-background: transparent;
      --media-option-hover-outline: var(--_accent-color) solid 1px;
      --media-text-color: var(--_text-color);
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-selectmenu {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-listbox[part~='listbox'] {
      --media-listbox-layout: row;
      --media-option-selected-background: var(--_accent-color);
      margin-right: 6px;
      padding: 0;
    }

    media-playback-rate-listbox[part~='listbox']::part(option) {
      padding: 6px 4px;
    }

    media-playback-rate-listbox[part~='listbox']::part(option-selected) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps: hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%,
        hsl(0 0% 0% / 0.104) 22.5%, hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%,
        hsl(0 0% 0% / 0.45) 47.1%, hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%,
        hsl(0 0% 0% / 0.825) 71%, hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%,
        hsl(0 0% 0%) 100%;
    }

    :host([title]:not([audio])) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 2;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-selectmenu: none;
      --bottom-pip-button: none;
    }
  </style>

  <template partial="TitleDisplay">
    <template if="title">
      <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenuButton">
    <media-captions-selectmenu part="bottom captions selectmenu" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-captions-button
        slot="button"
        part="bottom captions button"
        disabled="{{disabled}}"
        aria-disabled="{{disabled}}"
      >
        <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
          <path
            d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
          <path
            d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
          />
          <path
            d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
          />
          <path
            d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
          />
        </svg>
      </media-captions-button>
      <media-captions-listbox slot="listbox" exportparts="option" part="bottom captions listbox">
        <div slot="select-indicator">
          <style>
            .listbox-indicator {
              position: relative;
              top: 1px;
              width: 0.9em;
              height: auto;
              fill: var(--_accent-color);
            }

            [aria-selected='false'] .listbox-indicator {
              display: none;
            }
          </style>
          <svg viewBox="0 0 14 18" class="listbox-indicator">
            <path
              d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </media-captions-listbox>
    </media-captions-selectmenu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateSelect">
    <media-playback-rate-selectmenu
      part="bottom playback-rate selectmenu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <media-playback-rate-button slot="button" part="bottom playback-rate button"></media-playback-rate-button>
      <media-playback-rate-listbox
        slot="listbox"
        rates="{{playbackrates}}"
        exportparts="option"
        part="bottom playback-rate listbox"
      ></media-playback-rate-listbox>
    </media-playback-rate-selectmenu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackSelect">
    <media-audio-track-selectmenu
      part="bottom audio-track selectmenu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <media-audio-track-button slot="button" part="bottom audio-track button">
        <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
          <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
          <path
            d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
          />
        </svg>
      </media-audio-track-button>
      <media-audio-track-listbox slot="listbox" exportparts="option" part="bottom audio-track listbox">
        <div slot="select-indicator">
          <style>
            .listbox-indicator {
              position: relative;
              top: 1px;
              width: 0.9em;
              height: auto;
              fill: var(--_accent-color);
            }

            [aria-selected='false'] .listbox-indicator {
              display: none;
            }
          </style>
          <svg viewBox="0 0 14 18" class="listbox-indicator">
            <path
              d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </media-audio-track-listbox>
    </media-audio-track-selectmenu>
  </template>

  <template partial="RenditionSelect">
    <media-rendition-selectmenu part="bottom rendition selectmenu" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-rendition-button slot="button" part="bottom rendition button">
        <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
          <path
            d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          />
        </svg>
      </media-rendition-button>
      <media-rendition-listbox slot="listbox" exportparts="option" part="bottom rendition listbox">
        <div slot="select-indicator">
          <style>
            .listbox-indicator {
              position: relative;
              top: 1px;
              width: 0.9em;
              height: auto;
              fill: var(--_accent-color);
            }

            [aria-selected='false'] .listbox-indicator {
              display: none;
            }
          </style>
          <svg viewBox="0 0 14 18" class="listbox-indicator">
            <path
              d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </media-rendition-listbox>
    </media-rendition-selectmenu>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <!-- Pre-playback UI -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="streamtype == 'on-demand'">
          <template if="!breakpointsm"> {{>SeekBackwardButton section="center"}} </template>
          <template if="!breakpointsm"> {{>PlayButton section="center"}} </template>
          <template if="breakpointsm"> {{>PrePlayButton section="center"}} </template>
          <template if="!breakpointsm"> {{>SeekForwardButton section="center"}} </template>
        </template>

        <template if="streamtype == 'live'">
          <template if="!breakpointsm">
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton section="center"}} </template>
          </template>
          <template if="!breakpointsm"> {{>PlayButton section="center"}} </template>
          <template if="breakpointsm"> {{>PrePlayButton section="center"}} </template>
          <template if="!breakpointsm">
            <template if="targetlivewindow > 0"> {{>SeekForwardButton section="center"}} </template>
          </template>
        </template>
      </div>

      <!-- Auotplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionSelect}} {{>PlaybackRateSelect}} {{>AudioTrackSelect}} {{>CaptionsMenuButton}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionSelect}} {{>AudioTrackSelect}} {{>CaptionsMenuButton}} {{>AirplayButton}} {{>CastButton}}
          {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateSelect}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          <template if="breakpointsm">
            {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}} {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,mL=hq.createElement("template");"innerHTML"in mL&&(mL.innerHTML=mR);var mD,mx,mM=class extends hu{};mM.template=null==(mx=null==(mD=mL.content)?void 0:mD.children)?void 0:mx[0],hV.customElements.get("media-theme-gerwig")||hV.customElements.define("media-theme-gerwig",mM);var mN={SRC:"src",POSTER:"poster"},mO={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref"},mP=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","novolumepref"];function mU(e){let t=e.hasAttribute(mO.TITLE)?{video_title:e.getAttribute(mO.TITLE)}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,i)=>{let a=e.getAttribute(i);return null!==a&&(t[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),t},t)}var mB,mW,mH,mV,mq,mF,m$,mK,mj,mG,mY,mZ,mQ,mz,mX,mJ,m0,m1,m2,m3,m5,m4=Object.values(cM),m9=Object.values(mN),m8=Object.values(mO),m7={dialog:void 0,isDialogOpen:!1},m6={redundant_streams:!0},pe=class extends mu{constructor(){super(),hp(this,mF),hp(this,mK),hp(this,mG),hp(this,mZ),hp(this,mz),hp(this,mJ),hp(this,m1),hp(this,m3),hp(this,mB,!1),hp(this,mW,{}),hp(this,mH,!0),hp(this,mV,new h4(this,"hotkeys")),hp(this,mq,{...m7,onCloseErrorDialog:()=>hb(this,mG,mY).call(this,{dialog:void 0,isDialogOpen:!1}),onInitFocusDialog:e=>{h0(this,hq.activeElement)||e.preventDefault()}}),this.attachShadow({mode:"open"}),hb(this,mK,mj).call(this),this.isConnected&&hb(this,mF,m$).call(this)}static get observedAttributes(){var e;return[...null!=(e=mu.observedAttributes)?e:[],...m9,...m4,...m8]}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){var e;let t=null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video");t&&(t.metadata=mU(this))}attributeChangedCallback(e,t,i){var a;switch(hb(this,mF,m$).call(this),super.attributeChangedCallback(e,t,i),e){case mO.HOTKEYS:hm(this,mV).value=i;break;case mO.THUMBNAIL_TIME:null!=i&&this.tokens.thumbnail&&h8(h$("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").format({}));break;case mO.THUMBNAIL_TOKEN:{let{aud:e}=hQ(i);i&&"t"!==e&&h8(h$("The provided thumbnail-token should have audience value 't' instead of '{aud}'.").format({aud:e}));break}case mO.STORYBOARD_TOKEN:{let{aud:e}=hQ(i);i&&"s"!==e&&h8(h$("The provided storyboard-token should have audience value 's' instead of '{aud}'.").format({aud:e}));break}case cM.PLAYBACK_ID:null!=i&&i.includes("?token")&&h7(h$("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case cM.STREAM_TYPE:i&&![nU.U4.LIVE,nU.U4.ON_DEMAND,nU.U4.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?1/0:0:h6({file:"invalid-stream-type.md",message:h$("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===nU.U4.LIVE?null==this.getAttribute(mO.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=NaN}[cM.PLAYBACK_ID,mN.SRC,mO.PLAYBACK_TOKEN].includes(e)&&t!==i&&hv(this,mq,{...hm(this,mq),...m7}),hb(this,mZ,mQ).call(this,{[null!=(a=h5[e])?a:hG(e)]:i})}get preferCmcd(){var e;return null!=(e=this.getAttribute(cM.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?nU.WG.includes(e)?this.setAttribute(cM.PREFER_CMCD,e):h8(`Invalid value for preferCmcd. Must be one of ${nU.WG.join()}`):this.removeAttribute(cM.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(d.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(d.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(mO.THEME))?e:"gerwig"}set theme(e){this.setAttribute(mO.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(mP.includes(i))continue;let a=e.getAttribute(i);t[hG(i)]=""===a||a}return t}set themeProps(e){var t,i;hb(this,mF,m$).call(this);let a={...this.themeProps,...e};for(let r in a){if(mP.includes(r))continue;let a=null==e?void 0:e[r];"boolean"==typeof a||null==a?null==(t=this.mediaTheme)||t.toggleAttribute(hj(r),!!a):null==(i=this.mediaTheme)||i.setAttribute(hj(r),a)}}get playbackId(){var e;return null!=(e=this.getAttribute(cM.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(cM.PLAYBACK_ID,e):this.removeAttribute(cM.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=pt(this,mN.SRC))?e:void 0:null!=(t=this.getAttribute(mN.SRC))?t:void 0}set src(e){e?this.setAttribute(mN.SRC,e):this.removeAttribute(mN.SRC)}get poster(){var e;let t=this.getAttribute(mN.POSTER);return null!=t?t:this.playbackId&&!this.audio?((e,{token:t,customDomain:i=h1,thumbnailTime:a,programTime:r}={})=>{let n=null==t?a:void 0,{aud:s}=hQ(t);if(!(t&&"t"!==s))return`https://image.${i}/${e}/thumbnail.webp${hZ({token:t,time:n,program_time:r})}`})(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,programTime:this.programStartTime,token:this.tokens.thumbnail}):void 0}set poster(e){e||""===e?this.setAttribute(mN.POSTER,e):this.removeAttribute(mN.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(mO.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(mO.STORYBOARD_SRC,e):this.removeAttribute(mO.STORYBOARD_SRC)}get storyboard(){return this.storyboardSrc&&!this.tokens.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[nU.U4.LIVE,nU.U4.UNKNOWN].includes(this.streamType)?void 0:((e,{token:t,customDomain:i=h1,programStartTime:a,programEndTime:r}={})=>{let{aud:n}=hQ(t);if(!(t&&"s"!==n))return`https://image.${i}/${e}/storyboard.vtt${hZ({token:t,format:"webp",program_start_time:a,program_end_time:r})}`})(this.playbackId,{customDomain:this.customDomain,token:this.tokens.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(mO.AUDIO)}set audio(e){if(!e)return void this.removeAttribute(mO.AUDIO);this.setAttribute(mO.AUDIO,"")}get hotkeys(){return hm(this,mV)}get nohotkeys(){return this.hasAttribute(mO.NOHOTKEYS)}set nohotkeys(e){if(!e)return void this.removeAttribute(mO.NOHOTKEYS);this.setAttribute(mO.NOHOTKEYS,"")}get thumbnailTime(){return hY(this.getAttribute(mO.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(mO.THUMBNAIL_TIME,`${e}`)}get title(){var e;return null!=(e=this.getAttribute(mO.TITLE))?e:""}set title(e){e!==this.title&&(e?this.setAttribute(mO.TITLE,e):this.removeAttribute("title"),super.title=e)}get placeholder(){var e;return null!=(e=pt(this,mO.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(mO.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(mO.PRIMARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=hV.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return i}set primaryColor(e){this.setAttribute(mO.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(mO.SECONDARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=hV.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return i}set secondaryColor(e){this.setAttribute(mO.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(mO.ACCENT_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=hV.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return i}set accentColor(e){this.setAttribute(mO.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(mO.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(mO.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(mO.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(mO.PLAYBACK_RATES))return this.getAttribute(mO.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){if(!e)return void this.removeAttribute(mO.PLAYBACK_RATES);this.setAttribute(mO.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return null!=(e=hY(this.getAttribute(mO.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(mO.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=hY(this.getAttribute(mO.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(mO.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(mO.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(mO.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(mO.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return hY(this.getAttribute(mO.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(mO.DEFAULT_DURATION):this.setAttribute(mO.DEFAULT_DURATION,`${e}`)}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(cM.PLAYER_SOFTWARE_NAME))?e:"mux-player"}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(cM.PLAYER_SOFTWARE_VERSION))?e:h2}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(cM.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(cM.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(cM.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(cM.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(cM.MAX_RESOLUTION,e):this.removeAttribute(cM.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(cM.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(cM.MIN_RESOLUTION,e):this.removeAttribute(cM.MIN_RESOLUTION))}get renditionOrder(){var e;return null!=(e=this.getAttribute(cM.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(cM.RENDITION_ORDER,e):this.removeAttribute(cM.RENDITION_ORDER))}get programStartTime(){return hY(this.getAttribute(cM.PROGRAM_START_TIME))}set programStartTime(e){null==e?this.removeAttribute(cM.PROGRAM_START_TIME):this.setAttribute(cM.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return hY(this.getAttribute(cM.PROGRAM_END_TIME))}set programEndTime(e){null==e?this.removeAttribute(cM.PROGRAM_END_TIME):this.setAttribute(cM.PROGRAM_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(mO.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(mO.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):m6}set extraSourceParams(e){null==e?this.removeAttribute(mO.EXTRA_SOURCE_PARAMS):this.setAttribute(mO.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(cM.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(cM.CUSTOM_DOMAIN,e):this.removeAttribute(cM.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=pt(this,cM.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(cM.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(mO.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(mO.NO_VOLUME_PREF,""):this.removeAttribute(mO.NO_VOLUME_PREF)}get debug(){return null!=pt(this,cM.DEBUG)}set debug(e){e?this.setAttribute(cM.DEBUG,""):this.removeAttribute(cM.DEBUG)}get disableTracking(){return null!=pt(this,cM.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(cM.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=pt(this,cM.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(cM.DISABLE_COOKIES,""):this.removeAttribute(cM.DISABLE_COOKIES)}get streamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(cM.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?i:nU.U4.UNKNOWN}set streamType(e){this.setAttribute(cM.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(mO.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(mO.DEFAULT_STREAM_TYPE))?i:nU.U4.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(mO.DEFAULT_STREAM_TYPE,e):this.removeAttribute(mO.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(mO.TARGET_LIVE_WINDOW)?+this.getAttribute(mO.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(mO.TARGET_LIVE_WINDOW):this.setAttribute(mO.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return hY(pt(this,cM.START_TIME))}set startTime(e){this.setAttribute(cM.START_TIME,`${e}`)}get preferPlayback(){let e=this.getAttribute(cM.PREFER_PLAYBACK);if(e===nU.Vi.MSE||e===nU.Vi.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===nU.Vi.MSE||e===nU.Vi.NATIVE?this.setAttribute(cM.PREFER_PLAYBACK,e):this.removeAttribute(cM.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){if(hb(this,mF,m$).call(this),!this.media)return void h7("underlying media element missing when trying to set metadata. metadata will not be set.");this.media.metadata={...mU(this),...e}}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){if(hb(this,mF,m$).call(this),!this.media)return void h7("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");this.media._hlsConfig=e}async addCuePoints(e){var t;return(hb(this,mF,m$).call(this),this.media)?null==(t=this.media)?void 0:t.addCuePoints(e):void h7("underlying media element missing when trying to addCuePoints. cuePoints will not be added.")}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}addChapters(e){var t;return(hb(this,mF,m$).call(this),this.media)?null==(t=this.media)?void 0:t.addChapters(e):void h7("underlying media element missing when trying to addChapters. chapters will not be added.")}get activeChapter(){var e;return null==(e=this.media)?void 0:e.activeChapter}get chapters(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.chapters)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(mO.PLAYBACK_TOKEN),t=this.getAttribute(mO.DRM_TOKEN),i=this.getAttribute(mO.THUMBNAIL_TOKEN),a=this.getAttribute(mO.STORYBOARD_TOKEN);return{...hm(this,mW),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{},...null!=i?{thumbnail:i}:{},...null!=a?{storyboard:a}:{}}}set tokens(e){hv(this,mW,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(mO.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(mO.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return null!=(e=this.getAttribute(mO.DRM_TOKEN))?e:void 0}set drmToken(e){this.setAttribute(mO.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(mO.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(mO.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(mO.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(mO.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return(0,nU.KR)(n,e,t,i,a)}removeTextTrack(e){var t;let i=null==(t=this.media)?void 0:t.nativeEl;if(i)return(0,nU.$V)(i,e)}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}};function pt(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}mB=new WeakMap,mW=new WeakMap,mH=new WeakMap,mV=new WeakMap,mq=new WeakMap,mF=new WeakSet,m$=function(){var e,t,i,a;if(!hm(this,mB)){hv(this,mB,!0),hb(this,mZ,mQ).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof hV.HTMLElement))throw""}catch{h7("<media-theme> failed to upgrade!")}try{if(customElements.upgrade(this.media),!(this.media instanceof cP))throw""}catch{h7("<mux-video> failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof ti))throw""}catch{h7("<media-controller> failed to upgrade!")}this.init(),hb(this,mz,mX).call(this),hb(this,mJ,m0).call(this),hb(this,m1,m2).call(this),hv(this,mH,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(eg.USER_INACTIVE))||t),hb(this,m3,m5).call(this),null==(i=this.media)||i.addEventListener("streamtypechange",()=>hb(this,mZ,mQ).call(this)),null==(a=this.media)||a.addEventListener("loadstart",()=>hb(this,mZ,mQ).call(this))}},mK=new WeakSet,mj=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},mG=new WeakSet,mY=function(e){Object.assign(hm(this,mq),e),hb(this,mZ,mQ).call(this)},mZ=new WeakSet,mQ=function(e={}){var t,i,a,r,n,s,o,l,d,u,c,h,m,p,v,b,E,f,g,y,_,A,T,k,w,S,I,C,R,L,D,x,M,N,O,P,U,B,W,H,V,q,F,$;let K,j;t={...hm(this,mq),...e},K={src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:this.storyboard,storyboardSrc:this.getAttribute(mO.STORYBOARD_SRC),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,i;let a=e.theme;if(a){let r=null==(i=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=hV.customElements.get(a);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(mO.NOHOTKEYS),hotKeys:this.getAttribute(mO.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(cM.TARGET_LIVE_WINDOW),streamType:h3(this.getAttribute(cM.STREAM_TYPE)),primaryColor:this.getAttribute(mO.PRIMARY_COLOR),secondaryColor:this.getAttribute(mO.SECONDARY_COLOR),accentColor:this.getAttribute(mO.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(j=null==(a=this.mediaController)?void 0:a.querySelector("media-time-display"))&&"none"===getComputedStyle(j).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(mO.PLAYBACK_RATES),customDomain:null!=(i=this.getAttribute(cM.CUSTOM_DOMAIN))?i:void 0,title:this.getAttribute(mO.TITLE),novolumepref:this.hasAttribute(mO.NO_VOLUME_PREF),...t,extraSourceParams:this.extraSourceParams},r=mS`
  <style>
    ${(e=>{let{tokens:t}=e;return t.drm?":host { --_cast-button-drm-display: none; }":""})(K)}
    ${mc}
  </style>
  ${s=K,mS`
  <media-theme
    template="${s.themeTemplate||!1}"
    defaultstreamtype="${null!=(o=s.defaultStreamType)&&o}"
    hotkeys="${(e=>{let t=e.hotKeys?`${e.hotKeys}`:"";return"live"===h3(e.streamType)&&(t+=" noarrowleft noarrowright"),t})(s)||!1}"
    nohotkeys="${s.noHotKeys||!s.hasSrc||s.isDialogOpen||!1}"
    noautoseektolive="${!!(null!=(l=s.streamType)&&l.includes(nU.U4.LIVE))&&0!==s.targetLiveWindow}"
    novolumepref="${s.novolumepref||!1}"
    disabled="${!s.hasSrc||s.isDialogOpen}"
    audio="${null!=(d=s.audio)&&d}"
    style="${null!=(u=function(e){let t="";return Object.entries(e).forEach(([e,i])=>{null!=i&&(t+=`${hj(e)}: ${i}; `)}),t?t.trim():void 0}({"--media-primary-color":s.primaryColor,"--media-secondary-color":s.secondaryColor,"--media-accent-color":s.accentColor}))&&u}"
    defaultsubtitles="${!s.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(c=s.forwardSeekOffset)&&c}"
    backwardseekoffset="${null!=(h=s.backwardSeekOffset)&&h}"
    playbackrates="${null!=(m=s.playbackRates)&&m}"
    defaultshowremainingtime="${null!=(p=s.defaultShowRemainingTime)&&p}"
    defaultduration="${null!=(v=s.defaultDuration)&&v}"
    hideduration="${null!=(b=s.hideDuration)&&b}"
    title="${null!=(E=s.title)&&E}"
    exportparts="${mI}"
  >
    <mux-video
      slot="media"
      target-live-window="${null!=(f=s.targetLiveWindow)&&f}"
      stream-type="${null!=(g=h3(s.streamType))&&g}"
      crossorigin="${null!=(y=s.crossOrigin)?y:""}"
      playsinline
      autoplay="${null!=(_=s.autoplay)&&_}"
      muted="${null!=(A=s.muted)&&A}"
      loop="${null!=(T=s.loop)&&T}"
      preload="${null!=(k=s.preload)&&k}"
      debug="${null!=(w=s.debug)&&w}"
      prefer-cmcd="${null!=(S=s.preferCmcd)&&S}"
      disable-tracking="${null!=(I=s.disableTracking)&&I}"
      disable-cookies="${null!=(C=s.disableCookies)&&C}"
      prefer-playback="${null!=(R=s.preferPlayback)&&R}"
      start-time="${null!=s.startTime&&s.startTime}"
      beacon-collection-domain="${null!=(L=s.beaconCollectionDomain)&&L}"
      player-software-name="${null!=(D=s.playerSoftwareName)&&D}"
      player-software-version="${null!=(x=s.playerSoftwareVersion)&&x}"
      env-key="${null!=(M=s.envKey)&&M}"
      custom-domain="${null!=(N=s.customDomain)&&N}"
      src="${s.src?s.src:!!s.playbackId&&(0,nU.OR)(s)}"
      cast-src="${s.src?s.src:!!s.playbackId&&(0,nU.OR)(s)}"
      drm-token="${null!=(P=null==(O=s.tokens)?void 0:O.drm)&&P}"
      exportparts="video"
    >
      ${s.storyboard?mS`<track label="thumbnails" default kind="metadata" src="${s.storyboard}" />`:mS``}
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${""!==s.poster&&null!=(U=s.poster)&&U}"
        placeholdersrc="${null!=(B=s.placeholder)&&B}"
      ></media-poster-image>
    </slot>
    <mxp-dialog
      no-auto-hide
      open="${null!=(W=s.isDialogOpen)&&W}"
      onclose="${s.onCloseErrorDialog}"
      oninitfocus="${s.onInitFocusDialog}"
    >
      ${null!=(H=s.dialog)&&H.title?mS`<h3>${s.dialog.title}</h3>`:mS``}
      <p>
        ${null==(V=s.dialog)?void 0:V.message}
        ${null!=(q=s.dialog)&&q.linkUrl?mS`<a
              href="${s.dialog.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(F=s.dialog.linkText)?F:""} ${h$("(opens in a new window)")}"
              >${null!=($=s.dialog.linkText)?$:s.dialog.linkUrl}</a
            >`:mS``}
      </p>
    </mxp-dialog>
  </media-theme>
`}
`,n=this.shadowRoot,r.renderInto(n)},mz=new WeakSet,mX=function(){let e=e=>{var t,i;if(!(null!=e&&e.startsWith("theme-")))return;let a=e.replace(/^theme-/,"");if(mP.includes(a))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(a,r):null==(i=this.mediaTheme)||i.removeAttribute(a)};new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},mJ=new WeakSet,m0=function(){var e;let t=e=>{let{detail:t}=e;if(t instanceof nU.FJ||(t=new nU.FJ(t.message,t.code,t.fatal)),!(null!=t&&t.fatal)){h8(t),t.data&&h8(`${t.name} data:`,t.data);return}let{dialog:i,devlog:a}=mC(t,!window.navigator.onLine,this.playbackId,this.playbackToken);a.message&&h6(a),h7(t),t.data&&h7(`${t.name} data:`,t.data),hb(this,mG,mY).call(this,{isDialogOpen:!0,dialog:i})};this.addEventListener("error",t),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!((null==(t=this.media)?void 0:t.error)instanceof nU.FJ))return e;let{devlog:r}=mC(null==(i=this.media)?void 0:i.error,!window.navigator.onLine,this.playbackId,this.playbackToken,!1);return{player_error_code:null==(a=this.media)?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}}),null==(e=this.media)||e.addEventListener("error",e=>{var t,i;let{detail:a}=e;if(!a){let{message:e,code:r}=null!=(i=null==(t=this.media)?void 0:t.error)?i:{};a=new nU.FJ(e,r)}null!=a&&a.fatal&&this.dispatchEvent(new CustomEvent("error",{detail:a}))})},m1=new WeakSet,m2=function(){var e,t,i,a;let r=()=>hb(this,mZ,mQ).call(this);null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",r),null==(a=null==(i=this.media)?void 0:i.textTracks)||a.addEventListener("removetrack",r)},m3=new WeakSet,m5=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===nU.U4.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(e,t,i=!1)=>{r()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10))if(!t||this.paused){let t=e.text.split(`
`).length,r=-3;this.streamType===nU.U4.LIVE&&(r=-2);let n=r-t;if(e.line===n&&!i)return;a.has(e)||a.set(e,e.line),e.line=n}else setTimeout(()=>{e.line=a.get(e)||"auto"},500)})},s=()=>{var e,t;n(i,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(eg.USER_INACTIVE))&&t)},o=()=>{var e,t;let a=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];a!==i&&(null==i||i.removeEventListener("cuechange",s)),null==(i=a)||i.addEventListener("cuechange",s),n(i,hm(this,mH))};o(),null==(e=this.textTracks)||e.addEventListener("change",o),null==(t=this.textTracks)||t.addEventListener("addtrack",o),this.addEventListener("userinactivechange",()=>{var e,t;let a=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(eg.USER_INACTIVE))||t;hm(this,mH)!==a&&(hv(this,mH,a),n(i,hm(this,mH)))})},hV.customElements.get("mux-player")||(hV.customElements.define("mux-player",pe),hV.MuxPlayerElement=pe)}}]);