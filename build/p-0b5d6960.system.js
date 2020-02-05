var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function s(e){try{u(n.next(e))}catch(t){o(t)}}function a(e){try{u(n["throw"](e))}catch(t){o(t)}}function u(e){e.done?r(e.value):i(e.value).then(s,a)}u((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return u([e,t])}}function u(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(o=s[0]&2?i["return"]:s[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;if(i=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;i=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){r.label=s[1];break}if(s[0]===6&&r.label<o[1]){r.label=o[1];o=s;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(s);break}if(o[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(a){s=[6,a];i=0}finally{n=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register([],(function(e){"use strict";return{execute:function(){function t(e){return typeof e==="function"}var r=false;var n={Promise:undefined,set useDeprecatedSynchronousErrorHandling(e){if(e){var t=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+t.stack)}else if(r){console.log("RxJS: Back to a better error behavior. Thank you. <3")}r=e},get useDeprecatedSynchronousErrorHandling(){return r}};function i(e){setTimeout((function(){throw e}),0)}var o={closed:true,next:function(e){},error:function(e){if(n.useDeprecatedSynchronousErrorHandling){throw e}else{i(e)}},complete:function(){}};var s=function(){return Array.isArray||function(e){return e&&typeof e.length==="number"}}();function a(e){return e!==null&&typeof e==="object"}var u=function(){function e(e){Error.call(this);this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(e,t){return t+1+") "+e.toString()})).join("\n  "):"";this.name="UnsubscriptionError";this.errors=e;return this}e.prototype=Object.create(Error.prototype);return e}();var c=u;var l=function(){function e(e){this.closed=false;this._parentOrParents=null;this._subscriptions=null;if(e){this._unsubscribe=e}}e.prototype.unsubscribe=function(){var r;if(this.closed){return}var n=this,i=n._parentOrParents,o=n._unsubscribe,u=n._subscriptions;this.closed=true;this._parentOrParents=null;this._subscriptions=null;if(i instanceof e){i.remove(this)}else if(i!==null){for(var l=0;l<i.length;++l){var f=i[l];f.remove(this)}}if(t(o)){try{o.call(this)}catch(d){r=d instanceof c?h(d.errors):[d]}}if(s(u)){var l=-1;var p=u.length;while(++l<p){var b=u[l];if(a(b)){try{b.unsubscribe()}catch(d){r=r||[];if(d instanceof c){r=r.concat(h(d.errors))}else{r.push(d)}}}}}if(r){throw new c(r)}};e.prototype.add=function(t){var r=t;if(!t){return e.EMPTY}switch(typeof t){case"function":r=new e(t);case"object":if(r===this||r.closed||typeof r.unsubscribe!=="function"){return r}else if(this.closed){r.unsubscribe();return r}else if(!(r instanceof e)){var n=r;r=new e;r._subscriptions=[n]}break;default:{throw new Error("unrecognized teardown "+t+" added to Subscription.")}}var i=r._parentOrParents;if(i===null){r._parentOrParents=this}else if(i instanceof e){if(i===this){return r}r._parentOrParents=[i,this]}else if(i.indexOf(this)===-1){i.push(this)}else{return r}var o=this._subscriptions;if(o===null){this._subscriptions=[r]}else{o.push(r)}return r};e.prototype.remove=function(e){var t=this._subscriptions;if(t){var r=t.indexOf(e);if(r!==-1){t.splice(r,1)}}};return e}();l.EMPTY=function(e){e.closed=true;return e}(new l);function h(e){return e.reduce((function(e,t){return e.concat(t instanceof c?t.errors:t)}),[])}var f=function(){return typeof Symbol==="function"?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}();var p=function(e){__extends(t,e);function t(r,n,i){var s=e.call(this)||this;s.syncErrorValue=null;s.syncErrorThrown=false;s.syncErrorThrowable=false;s.isStopped=false;switch(arguments.length){case 0:s.destination=o;break;case 1:if(!r){s.destination=o;break}if(typeof r==="object"){if(r instanceof t){s.syncErrorThrowable=r.syncErrorThrowable;s.destination=r;r.add(s)}else{s.syncErrorThrowable=true;s.destination=new b(s,r)}break}default:s.syncErrorThrowable=true;s.destination=new b(s,r,n,i);break}return s}t.prototype[f]=function(){return this};t.create=function(e,r,n){var i=new t(e,r,n);i.syncErrorThrowable=false;return i};t.prototype.next=function(e){if(!this.isStopped){this._next(e)}};t.prototype.error=function(e){if(!this.isStopped){this.isStopped=true;this._error(e)}};t.prototype.complete=function(){if(!this.isStopped){this.isStopped=true;this._complete()}};t.prototype.unsubscribe=function(){if(this.closed){return}this.isStopped=true;e.prototype.unsubscribe.call(this)};t.prototype._next=function(e){this.destination.next(e)};t.prototype._error=function(e){this.destination.error(e);this.unsubscribe()};t.prototype._complete=function(){this.destination.complete();this.unsubscribe()};t.prototype._unsubscribeAndRecycle=function(){var e=this._parentOrParents;this._parentOrParents=null;this.unsubscribe();this.closed=false;this.isStopped=false;this._parentOrParents=e;return this};return t}(l);var b=function(e){__extends(r,e);function r(r,n,i,s){var a=e.call(this)||this;a._parentSubscriber=r;var u;var c=a;if(t(n)){u=n}else if(n){u=n.next;i=n.error;s=n.complete;if(n!==o){c=Object.create(n);if(t(c.unsubscribe)){a.add(c.unsubscribe.bind(c))}c.unsubscribe=a.unsubscribe.bind(a)}}a._context=c;a._next=u;a._error=i;a._complete=s;return a}r.prototype.next=function(e){if(!this.isStopped&&this._next){var t=this._parentSubscriber;if(!n.useDeprecatedSynchronousErrorHandling||!t.syncErrorThrowable){this.__tryOrUnsub(this._next,e)}else if(this.__tryOrSetError(t,this._next,e)){this.unsubscribe()}}};r.prototype.error=function(e){if(!this.isStopped){var t=this._parentSubscriber;var r=n.useDeprecatedSynchronousErrorHandling;if(this._error){if(!r||!t.syncErrorThrowable){this.__tryOrUnsub(this._error,e);this.unsubscribe()}else{this.__tryOrSetError(t,this._error,e);this.unsubscribe()}}else if(!t.syncErrorThrowable){this.unsubscribe();if(r){throw e}i(e)}else{if(r){t.syncErrorValue=e;t.syncErrorThrown=true}else{i(e)}this.unsubscribe()}}};r.prototype.complete=function(){var e=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var r=function(){return e._complete.call(e._context)};if(!n.useDeprecatedSynchronousErrorHandling||!t.syncErrorThrowable){this.__tryOrUnsub(r);this.unsubscribe()}else{this.__tryOrSetError(t,r);this.unsubscribe()}}else{this.unsubscribe()}}};r.prototype.__tryOrUnsub=function(e,t){try{e.call(this._context,t)}catch(r){this.unsubscribe();if(n.useDeprecatedSynchronousErrorHandling){throw r}else{i(r)}}};r.prototype.__tryOrSetError=function(e,t,r){if(!n.useDeprecatedSynchronousErrorHandling){throw new Error("bad call")}try{t.call(this._context,r)}catch(o){if(n.useDeprecatedSynchronousErrorHandling){e.syncErrorValue=o;e.syncErrorThrown=true;return true}else{i(o);return true}}return false};r.prototype._unsubscribe=function(){var e=this._parentSubscriber;this._context=null;this._parentSubscriber=null;e.unsubscribe()};return r}(p);function d(e){while(e){var t=e.closed,r=e.destination,n=e.isStopped;if(t||n){return false}else if(r&&r instanceof p){e=r}else{e=null}}return true}function y(e,t,r){if(e){if(e instanceof p){return e}if(e[f]){return e[f]()}}if(!e&&!t&&!r){return new p(o)}return new p(e,t,r)}var v=function(){return typeof Symbol==="function"&&Symbol.observable||"@@observable"}();function _(){}function g(e){if(!e){return _}if(e.length===1){return e[0]}return function t(r){return e.reduce((function(e,t){return t(e)}),r)}}var w=function(){function e(e){this._isScalar=false;if(e){this._subscribe=e}}e.prototype.lift=function(t){var r=new e;r.source=this;r.operator=t;return r};e.prototype.subscribe=function(e,t,r){var i=this.operator;var o=y(e,t,r);if(i){o.add(i.call(o,this.source))}else{o.add(this.source||n.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o))}if(n.useDeprecatedSynchronousErrorHandling){if(o.syncErrorThrowable){o.syncErrorThrowable=false;if(o.syncErrorThrown){throw o.syncErrorValue}}}return o};e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){if(n.useDeprecatedSynchronousErrorHandling){e.syncErrorThrown=true;e.syncErrorValue=t}if(d(e)){e.error(t)}else{console.warn(t)}}};e.prototype.forEach=function(e,t){var r=this;t=S(t);return new t((function(t,n){var i;i=r.subscribe((function(t){try{e(t)}catch(r){n(r);if(i){i.unsubscribe()}}}),n,t)}))};e.prototype._subscribe=function(e){var t=this.source;return t&&t.subscribe(e)};e.prototype[v]=function(){return this};e.prototype.pipe=function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}if(e.length===0){return this}return g(e)(this)};e.prototype.toPromise=function(e){var t=this;e=S(e);return new e((function(e,r){var n;t.subscribe((function(e){return n=e}),(function(e){return r(e)}),(function(){return e(n)}))}))};return e}();w.create=function(e){return new w(e)};function S(e){if(!e){e=Promise}if(!e){throw new Error("no Promise impl found")}return e}var E=function(){function e(){Error.call(this);this.message="object unsubscribed";this.name="ObjectUnsubscribedError";return this}e.prototype=Object.create(Error.prototype);return e}();var m=E;var x=function(e){__extends(t,e);function t(t,r){var n=e.call(this)||this;n.subject=t;n.subscriber=r;n.closed=false;return n}t.prototype.unsubscribe=function(){if(this.closed){return}this.closed=true;var e=this.subject;var t=e.observers;this.subject=null;if(!t||t.length===0||e.isStopped||e.closed){return}var r=t.indexOf(this.subscriber);if(r!==-1){t.splice(r,1)}};return t}(l);var O=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;r.destination=t;return r}return t}(p);var T=function(e){__extends(t,e);function t(){var t=e.call(this)||this;t.observers=[];t.closed=false;t.isStopped=false;t.hasError=false;t.thrownError=null;return t}t.prototype[f]=function(){return new O(this)};t.prototype.lift=function(e){var t=new D(this,this);t.operator=e;return t};t.prototype.next=function(e){if(this.closed){throw new m}if(!this.isStopped){var t=this.observers;var r=t.length;var n=t.slice();for(var i=0;i<r;i++){n[i].next(e)}}};t.prototype.error=function(e){if(this.closed){throw new m}this.hasError=true;this.thrownError=e;this.isStopped=true;var t=this.observers;var r=t.length;var n=t.slice();for(var i=0;i<r;i++){n[i].error(e)}this.observers.length=0};t.prototype.complete=function(){if(this.closed){throw new m}this.isStopped=true;var e=this.observers;var t=e.length;var r=e.slice();for(var n=0;n<t;n++){r[n].complete()}this.observers.length=0};t.prototype.unsubscribe=function(){this.isStopped=true;this.closed=true;this.observers=null};t.prototype._trySubscribe=function(t){if(this.closed){throw new m}else{return e.prototype._trySubscribe.call(this,t)}};t.prototype._subscribe=function(e){if(this.closed){throw new m}else if(this.hasError){e.error(this.thrownError);return l.EMPTY}else if(this.isStopped){e.complete();return l.EMPTY}else{this.observers.push(e);return new x(this,e)}};t.prototype.asObservable=function(){var e=new w;e.source=this;return e};return t}(w);T.create=function(e,t){return new D(e,t)};var D=function(e){__extends(t,e);function t(t,r){var n=e.call(this)||this;n.destination=t;n.source=r;return n}t.prototype.next=function(e){var t=this.destination;if(t&&t.next){t.next(e)}};t.prototype.error=function(e){var t=this.destination;if(t&&t.error){this.destination.error(e)}};t.prototype.complete=function(){var e=this.destination;if(e&&e.complete){this.destination.complete()}};t.prototype._subscribe=function(e){var t=this.source;if(t){return this.source.subscribe(e)}else{return l.EMPTY}};return t}(T);var k=function(e){__extends(t,e);function t(t){var r=e.call(this)||this;r._value=t;return r}Object.defineProperty(t.prototype,"value",{get:function(){return this.getValue()},enumerable:true,configurable:true});t.prototype._subscribe=function(t){var r=e.prototype._subscribe.call(this,t);if(r&&!r.closed){t.next(this._value)}return r};t.prototype.getValue=function(){if(this.hasError){throw this.thrownError}else if(this.closed){throw new m}else{return this._value}};t.prototype.next=function(t){e.prototype.next.call(this,this._value=t)};return t}(T);var A={production:false,AR_APP_ID:"coronavirus.api",API_VERSION:"1.0.2",DEFAULT_COLLECTION_ID:"regional.daily"};function P(e,t){return{op:"equals",expr1:e,expr2:t}}function R(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}if(e.length==0){throw new Error("0 arguments pass to and()")}if(e.length==1){return e[0]}var r={op:"and",expr1:e.shift(),expr2:e.length>1?R.apply(void 0,e):e[0]};return r}var B=function(){function e(){this.arweaveSdk=window["Arweave"].init({host:"arweave.net",port:443,protocol:"https",timeout:3e5,logging:false});this._currentWallet={address:"",balance:0,keystore:null,rawJson:""};this._allChannels=[];this._currentChannel={};console.log("ArweaveServiceService constructor");this.getNetworkStatus((function(e){return console.log(e)}));this.currentWallet$=new k(this._currentWallet);this.allChannels$=new k(this._allChannels);this.currentChannel$=new k(this._currentChannel)}Object.defineProperty(e,"defaultInstance",{get:function(){if(e._instance==null){e._instance=new e}return e._instance},enumerable:true,configurable:true});e.prototype.loadWallet=function(e){return __awaiter(this,void 0,void 0,(function(){var t;var r=this;return __generator(this,(function(n){try{t=JSON.parse(e);this.arweaveSdk.wallets.jwkToAddress(t).then((function(e){r.arweaveSdk.wallets.getBalance(e).then((function(n){r._currentWallet={address:e,balance:n,keystore:t,rawJson:JSON.stringify(t,null,2)};r.currentWallet$.next(r._currentWallet);if(n<1e5){console.log("Balance extremely low, app may not work. Visit tokens.arweave.org and get a new wallet + 1.00000 AR in free tokens")}}))}))}catch(i){console.log(JSON.stringify(i,null,2));alert("Not an Arweave wallet file! Visit tokens.arweave.org and get a new wallet + 1.00000 AR in free tokens")}return[2]}))}))};e.prototype.getItemByTxId=function(e){return __awaiter(this,void 0,void 0,(function(){var t,r,n,i;return __generator(this,(function(o){switch(o.label){case 0:return[4,this.arweaveSdk.transactions.get(e)];case 1:t=o.sent();r=JSON.parse(t.get("data",{decode:true,string:true}));n={};t.get("tags").forEach((function(e){var t=e.get("name",{decode:true,string:true});var r=e.get("value",{decode:true,string:true});console.log(t+" : "+r);n[t]=r}));i={data:r,tags:n};return[2,i]}}))}))};e.prototype.getCollection=function(e){return __awaiter(this,void 0,void 0,(function(){var t,r,n,i,o,s,a,u,c;return __generator(this,(function(l){switch(l.label){case 0:t=[];r=R(P("AR_APP_ID",A.AR_APP_ID),P("AR_COLLECTION_ID",e),P("API_VERSION",A.API_VERSION));return[4,this.arweaveSdk.arql(r)];case 1:n=l.sent();console.log("step 1: get all transaction ids tagged with AR_COLLECTION_ID == "+e);console.log(JSON.stringify(n));console.log("step 2: each transaction points to an element's contents - retrieve it and insert into our array");i=0;l.label=2;case 2:if(!(i<n.length))return[3,5];o=n[i];return[4,this.arweaveSdk.transactions.get(o)];case 3:s=l.sent();a=JSON.parse(s.get("data",{decode:true,string:true}));u={};s.get("tags").forEach((function(e){var t=e.get("name",{decode:true,string:true});var r=e.get("value",{decode:true,string:true});console.log(t+" : "+r);u[t]=r;u["txid"]=o}));c={data:a,tags:u};t.push(c);l.label=4;case 4:i++;return[3,2];case 5:console.log("success: the collection has been downloaded from the blockchain");return[2,t]}}))}))};e.prototype.loginWithWalletString=function(e){var t=this;try{var r=JSON.parse(e);this.arweaveSdk.wallets.jwkToAddress(r).then((function(e){t.arweaveSdk.wallets.getBalance(e).then((function(n){t._currentWallet={address:e,balance:n,keystore:r,rawJson:JSON.stringify(r,null,2)};t.currentWallet$.next(t._currentWallet);if(n<1e5){console.log("Balance extremely low, app may not work. Visit tokens.arweave.org and get a new wallet + 1.00000 AR in free tokens")}}))}))}catch(n){console.log(JSON.stringify(n,null,2));alert("Not an Arweave wallet file! Visit tokens.arweave.org and get a new wallet + 1.00000 AR in free tokens")}};e.prototype.loginWithWalletFile=function(e){var t=this;var r=new FileReader;r.readAsText(e);r.onloadend=function(){t.loginWithWalletString(r.result)}};e.prototype.getNetworkStatus=function(e){this.arweaveSdk.network.getInfo().then((function(t){return e(t)}))};return e}();B._instance=null;var I=function(){function e(){this._timeseriesByDay=[];this.timeseriesByDay$=new k([]);this._timeseriesByRegion={};this.timeseriesByRegion$=new k({});this.regions=[];this.arweaveService=B.defaultInstance}e.prototype.getRegions=function(){return this.regions};e.prototype.getValidDays=function(){var e=[];this._timeseriesByDay.forEach((function(t){e.push(t.tags["DATE"])}));e.sort((function(e,t){return Date.parse(e)-Date.parse(t["DATE"])}));return e};e.prototype.getRegionalTimeSeries=function(e){return this._timeseriesByRegion[e]};e.prototype.getRegionByDate=function(e,t){var r=this._timeseriesByRegion[e].filter((function(e){return e.date==t}))[0];return r};e.prototype.getSnapshotByDate=function(e){var t=this;return this.regions.map((function(r){return t._timeseriesByRegion[r].filter((function(t){return t.date==e}))[0]}))};e.prototype.generateRegionalTimeseries=function(){var e=this;this._timeseriesByDay.forEach((function(t){var r=t.tags["DATE"];t.data.forEach((function(n){var i=n["provincestate"]||n["countryregion"];n["date"]=r;n["region"]=i;n["blockchainTxid"]=t.tags["txid"];n["verifyUrl"]="https://viewblock.io/arweave/tx/"+t.tags["txid"];if(!e._timeseriesByRegion[i]){e._timeseriesByRegion[i]=[];e.regions.push(i)}e._timeseriesByRegion[i].push(n)}))}));this.timeseriesByRegion$.next(this._timeseriesByRegion)};e.prototype.getRegionalTimeseriesDataset=function(e){if(e===void 0){e=false}return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(r){switch(r.label){case 0:if(!(this._timeseriesByDay.length==0||e))return[3,2];t=this;return[4,this.arweaveService.getCollection("regional.daily")];case 1:t._timeseriesByDay=r.sent();this._timeseriesByDay.sort((function(e,t){return Date.parse(e.tags["DATE"])-Date.parse(t.tags["DATE"])}));this.timeseriesByDay$.next(this._timeseriesByDay);this.generateRegionalTimeseries();r.label=2;case 2:return[2]}}))}))};return e}();var N=e("O",new I)}}}));