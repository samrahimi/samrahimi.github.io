var __awaiter=this&&this.__awaiter||function(e,t,a,n){function s(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,r){function i(e){try{h(n.next(e))}catch(t){r(t)}}function o(e){try{h(n["throw"](e))}catch(t){r(t)}}function h(e){e.done?a(e.value):s(e.value).then(i,o)}h((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var a={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,s,r,i;return i={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function o(e){return function(t){return h([e,t])}}function h(i){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,s&&(r=i[0]&2?s["return"]:i[0]?s["throw"]||((r=s["return"])&&r.call(s),0):s.next)&&!(r=r.call(s,i[1])).done)return r;if(s=0,r)i=[i[0]&2,r.value];switch(i[0]){case 0:case 1:r=i;break;case 4:a.label++;return{value:i[1],done:false};case 5:a.label++;s=i[1];i=[0];continue;case 7:i=a.ops.pop();a.trys.pop();continue;default:if(!(r=a.trys,r=r.length>0&&r[r.length-1])&&(i[0]===6||i[0]===2)){a=0;continue}if(i[0]===3&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(i[0]===6&&a.label<r[1]){a.label=r[1];r=i;break}if(r&&a.label<r[2]){a.label=r[2];a.ops.push(i);break}if(r[2])a.ops.pop();a.trys.pop();continue}i=t.call(e,a)}catch(o){i=[6,o];s=0}finally{n=r=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};System.register(["./p-d6291e30.system.js"],(function(e){"use strict";var t,a;return{setters:[function(e){t=e.B;a=e.A}],execute:function(){var n=function(){function e(){this.hashtags=[];this.hashtags$=new t([]);this.hashtagtxids=[];this.postTxids=[];this.posts=[];this.posts$=new t([]);this.arweaveService=a.defaultInstance}e.prototype.getPostsBySearchTxid=function(e,t,a){return __awaiter(this,void 0,void 0,(function(){var n,s,r,i,o;return __generator(this,(function(h){switch(h.label){case 0:n=[{name:"App-Name",value:"weibot-search-weibs"},{name:"App-Version",value:"0.1.0"},{name:"Search-Tx",value:e}];s=this;return[4,this.arweaveService.getTransactionsByTags(n)];case 1:s.postTxids=h.sent();r=this.postTxids.slice(t,a);this.hashtags=[];i=0;h.label=2;case 2:if(!(i<r.length))return[3,5];return[4,this.arweaveService.getItemRaw(r[i])];case 3:o=h.sent();this.posts.push(o);h.label=4;case 4:i++;return[3,2];case 5:this.posts$.next(this.posts);return[2]}}))}))};e.prototype.getHashtags=function(e,t){return __awaiter(this,void 0,void 0,(function(){var a,n,s,r,i;return __generator(this,(function(o){switch(o.label){case 0:a=[{name:"App-Name",value:"weibot-search"},{name:"App-Version",value:"0.1.0"},{name:"Search-Type",value:"hashtag"}];n=this;return[4,this.arweaveService.getTransactionsByTags(a)];case 1:n.hashtagtxids=o.sent();s=this.hashtagtxids.slice(e,t);this.hashtags=[];r=0;o.label=2;case 2:if(!(r<s.length))return[3,5];return[4,this.arweaveService.getItemByTxId(s[r])];case 3:i=o.sent();this.hashtags.push(i);o.label=4;case 4:r++;return[3,2];case 5:this.hashtags$.next(this.hashtags);return[2]}}))}))};return e}();var s=e("W",new n)}}}));