System.register(["./p-ba3208be.system.js","./p-89a726af.system.js"],(function(n){"use strict";var e,t,o,r,i;return{setters:[function(n){e=n.r;t=n.h;o=n.e;r=n.H},function(n){i=n.n}],execute:function(){var s=n("ion_nav_push",function(){function n(n){var t=this;e(this,n);this.push=function(){return i(t.el,"forward",t.component,t.componentProps)}}n.prototype.componentDidLoad=function(){console.warn('[DEPRECATED][ion-nav-push] `<ion-nav-push component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent">` instead.')};n.prototype.render=function(){return t(r,{onClick:this.push})};Object.defineProperty(n.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});return n}())}}}));