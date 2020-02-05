System.register(["./p-ba3208be.system.js"],(function(e){"use strict";var t,n,i,r,o,s;return{setters:[function(e){t=e.k;n=e.r;i=e.l;r=e.h;o=e.H;s=e.e}],execute:function(){var a;var u=function(){if(!a){var e=window;e.Ionicons=e.Ionicons||{};a=e.Ionicons.map=e.Ionicons.map||new Map}return a};var c=function(e){var t=d(e.src);if(t){return t}t=l(e.name,e.icon,e.mode,e.ios,e.md);if(t){return f(t)}if(e.icon){t=d(e.icon);if(t){return t}t=d(e.icon[e.mode]);if(t){return t}}return null};var f=function(e){var n=u().get(e);if(n){return n}return t("svg/"+e+".svg")};var l=function(e,t,n,i,r){n=(n&&n.toLowerCase())==="ios"?"ios":"md";if(i&&n==="ios"){e=i.toLowerCase()}else if(r&&n==="md"){e=r.toLowerCase()}else{if(!e&&t&&!v(t)){e=t}if(h(e)){e=e.toLowerCase();if(!/^md-|^ios-|^logo-/.test(e)){e=n+"-"+e}}}if(!h(e)||e.trim()===""){return null}var o=e.replace(/[a-z]|-|\d/gi,"");if(o!==""){return null}return e};var d=function(e){if(h(e)){e=e.trim();if(v(e)){return e}}return null};var v=function(e){return e.length>0&&/(\/|\.)/.test(e)};var h=function(e){return typeof e==="string"};var m=function(e){if(e){var t=document.createElement("div");t.innerHTML=e;for(var n=t.childNodes.length-1;n>=0;n--){if(t.childNodes[n].nodeName.toLowerCase()!=="svg"){t.removeChild(t.childNodes[n])}}var i=t.firstElementChild;if(i&&i.nodeName.toLowerCase()==="svg"){i.setAttribute("class","s-ion-icon");if(b(i)){return t.innerHTML}}}return""};var b=function(e){if(e.nodeType===1){if(e.nodeName.toLowerCase()==="script"){return false}for(var t=0;t<e.attributes.length;t++){var n=e.attributes[t].value;if(h(n)&&n.toLowerCase().indexOf("on")===0){return false}}for(var t=0;t<e.childNodes.length;t++){if(!b(e.childNodes[t])){return false}}}return true};var p=new Map;var g=function(e){var t=p.get(e);if(!t){t=fetch(e).then((function(e){if(e.status<=299){return e.text()}return Promise.resolve(null)})).then((function(e){return m(e)}));p.set(e,t)}return t};var w=e("ion_icon",function(){function e(e){n(this,e);this.mode=y(this);this.isVisible=false;this.lazy=false}e.prototype.connectedCallback=function(){var e=this;this.waitUntilVisible(this.el,"50px",(function(){e.isVisible=true;e.loadIcon()}))};e.prototype.disconnectedCallback=function(){if(this.io){this.io.disconnect();this.io=undefined}};e.prototype.waitUntilVisible=function(e,t,n){var i=this;if(this.lazy&&typeof window!=="undefined"&&window.IntersectionObserver){var r=this.io=new window.IntersectionObserver((function(e){if(e[0].isIntersecting){r.disconnect();i.io=undefined;n()}}),{rootMargin:t});r.observe(e)}else{n()}};e.prototype.loadIcon=function(){var e=this;if(this.isVisible){var t=c(this);if(t){g(t).then((function(t){return e.svgContent=t}))}}if(!this.ariaLabel){var n=l(this.name,this.icon,this.mode,this.ios,this.md);if(n){this.ariaLabel=n.replace("ios-","").replace("md-","").replace(/\-/g," ")}}};e.prototype.render=function(){var e,t;var n=this.mode||"md";var i=this.flipRtl||this.ariaLabel&&this.ariaLabel.indexOf("arrow")>-1&&this.flipRtl!==false;return r(o,{role:"img",class:Object.assign((e={},e[n]=true,e),L(this.color),(t={},t["icon-"+this.size]=!!this.size,t["flip-rtl"]=!!i&&this.el.ownerDocument.dir==="rtl",t))},this.svgContent?r("div",{class:"icon-inner",innerHTML:this.svgContent}):r("div",{class:"icon-inner"}))};Object.defineProperty(e,"assetsDirs",{get:function(){return["svg"]},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}.icon-inner,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px!important}:host(.icon-large){font-size:32px!important}:host(.ion-color){color:var(--ion-color-base)!important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary,#3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary,#0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary,#f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success,#10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning,#ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger,#f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light,#f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium,#989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark,#222428)}"},enumerable:true,configurable:true});return e}());var y=function(e){return i(e)||document.documentElement.getAttribute("mode")||"md"};var L=function(e){var t;return e?(t={"ion-color":true},t["ion-color-"+e]=true,t):null}}}}));