var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,s=0,e=arguments.length;s<e;s++)t+=arguments[s].length;for(var r=Array(t),n=0,s=0;s<e;s++)for(var o=arguments[s],i=0,a=o.length;i<a;i++,n++)r[n]=o[i];return r};System.register(["./p-1fa942a3.system.js","./p-2779d55b.system.js","./p-21ee716c.system.js"],(function(t){"use strict";var s,e,r;return{setters:[function(t){s=t.r;e=t.h},function(){},function(t){r=t.W}],execute:function(){var n=t("weibo_posts",function(){function t(t){s(this,t);this.posts=[];this.searchTxId="";this.hashtag=""}t.prototype.componentDidLoad=function(){var t=this;r.posts$.subscribe((function(s){t.posts=__spreadArrays(s);console.log("gots posts")}));this.posts=[];r.getPostsBySearchTxid(this.searchTxId,0,20)};t.prototype.render=function(){return[e("ion-header",null,e("ion-toolbar",{color:"primary"},e("ion-buttons",{slot:"start"},e("ion-back-button",{defaultHref:"/"})),e("ion-title",null,"Latest Posts"))),e("ion-content",{class:"ion-padding"},e("div",null,this.posts.map((function(t){return e("div",{class:"post"},e("p",null,t.tags["Text"]),e("img",{alt:"Attached Image",src:"https://arweave.net/"+t.id}),e("br",null),e("a",{target:"_blank",href:"https://viewblock.io/arweave/tx/"+t.id},"Verify On Arweave: $",t.id.substr(0,15)))}))))]};Object.defineProperty(t,"style",{get:function(){return":host{display:block}.hscroll{width:100%;overflow-y:auto}.min-500{min-width:900px!important;width:100%}.chinese-text{font-size:10px}.darkred{color:#c00!important}.post{padding:10px;margin:10px;border-bottom:1px solid #ccc}.post a{font-weight:700;font-size:11px;text-decoration:none}"},enumerable:true,configurable:true});return t}())}}}));