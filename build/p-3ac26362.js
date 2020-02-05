function t(t){return"function"==typeof t}let s=!1;const e={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t){const t=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+t.stack)}else s&&console.log("RxJS: Back to a better error behavior. Thank you. <3");s=t},get useDeprecatedSynchronousErrorHandling(){return s}};function i(t){setTimeout(()=>{throw t},0)}const r={closed:!0,next(t){},error(t){if(e.useDeprecatedSynchronousErrorHandling)throw t;i(t)},complete(){}},n=(()=>Array.isArray||(t=>t&&"number"==typeof t.length))(),o=(()=>{function t(t){return Error.call(this),this.message=t?`${t.length} errors occurred during unsubscription:\n${t.map((t,s)=>`${s+1}) ${t.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t})();class h{constructor(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}unsubscribe(){let s;if(this.closed)return;let{_parentOrParents:e,_unsubscribe:i,_subscriptions:r}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,e instanceof h)e.remove(this);else if(null!==e)for(let t=0;t<e.length;++t)e[t].remove(this);if(t(i))try{i.call(this)}catch(u){s=u instanceof o?c(u.errors):[u]}if(n(r)){let t=-1,e=r.length;for(;++t<e;){const e=r[t];if(null!==(a=e)&&"object"==typeof a)try{e.unsubscribe()}catch(u){s=s||[],u instanceof o?s=s.concat(c(u.errors)):s.push(u)}}}var a;if(s)throw new o(s)}add(t){let s=t;if(!t)return h.EMPTY;switch(typeof t){case"function":s=new h(t);case"object":if(s===this||s.closed||"function"!=typeof s.unsubscribe)return s;if(this.closed)return s.unsubscribe(),s;if(!(s instanceof h)){const t=s;(s=new h)._subscriptions=[t]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}let{_parentOrParents:e}=s;if(null===e)s._parentOrParents=this;else if(e instanceof h){if(e===this)return s;s._parentOrParents=[e,this]}else{if(-1!==e.indexOf(this))return s;e.push(this)}const i=this._subscriptions;return null===i?this._subscriptions=[s]:i.push(s),s}remove(t){const s=this._subscriptions;if(s){const e=s.indexOf(t);-1!==e&&s.splice(e,1)}}}function c(t){return t.reduce((t,s)=>t.concat(s instanceof o?s.errors:s),[])}h.EMPTY=function(t){return t.closed=!0,t}(new h);const a=(()=>"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random())();class u extends h{constructor(t,s,e){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=r;break;case 1:if(!t){this.destination=r;break}if("object"==typeof t){t instanceof u?(this.syncErrorThrowable=t.syncErrorThrowable,this.destination=t,t.add(this)):(this.syncErrorThrowable=!0,this.destination=new l(this,t));break}default:this.syncErrorThrowable=!0,this.destination=new l(this,t,s,e)}}[a](){return this}static create(t,s,e){const i=new u(t,s,e);return i.syncErrorThrowable=!1,i}next(t){this.isStopped||this._next(t)}error(t){this.isStopped||(this.isStopped=!0,this._error(t))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(t){this.destination.next(t)}_error(t){this.destination.error(t),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:t}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this}}class l extends u{constructor(s,e,i,n){let o;super(),this._parentSubscriber=s;let h=this;t(e)?o=e:e&&(o=e.next,i=e.error,n=e.complete,e!==r&&(t((h=Object.create(e)).unsubscribe)&&this.add(h.unsubscribe.bind(h)),h.unsubscribe=this.unsubscribe.bind(this))),this._context=h,this._next=o,this._error=i,this._complete=n}next(t){if(!this.isStopped&&this._next){const{_parentSubscriber:s}=this;e.useDeprecatedSynchronousErrorHandling&&s.syncErrorThrowable?this.__tryOrSetError(s,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}}error(t){if(!this.isStopped){const{_parentSubscriber:s}=this,{useDeprecatedSynchronousErrorHandling:r}=e;if(this._error)r&&s.syncErrorThrowable?(this.__tryOrSetError(s,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(s.syncErrorThrowable)r?(s.syncErrorValue=t,s.syncErrorThrown=!0):i(t),this.unsubscribe();else{if(this.unsubscribe(),r)throw t;i(t)}}}complete(){if(!this.isStopped){const{_parentSubscriber:t}=this;if(this._complete){const s=()=>this._complete.call(this._context);e.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,s),this.unsubscribe()):(this.__tryOrUnsub(s),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(t,s){try{t.call(this._context,s)}catch(r){if(this.unsubscribe(),e.useDeprecatedSynchronousErrorHandling)throw r;i(r)}}__tryOrSetError(t,s,r){if(!e.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{s.call(this._context,r)}catch(n){return e.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=n,t.syncErrorThrown=!0,!0):(i(n),!0)}return!1}_unsubscribe(){const{_parentSubscriber:t}=this;this._context=null,this._parentSubscriber=null,t.unsubscribe()}}const f=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")();function w(){}class b{constructor(t){this._isScalar=!1,t&&(this._subscribe=t)}lift(t){const s=new b;return s.source=this,s.operator=t,s}subscribe(t,s,i){const{operator:n}=this,o=function(t,s,e){if(t){if(t instanceof u)return t;if(t[a])return t[a]()}return t||s||e?new u(t,s,e):new u(r)}(t,s,i);if(o.add(n?n.call(o,this.source):this.source||e.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),e.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o}_trySubscribe(t){try{return this._subscribe(t)}catch(s){e.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=s),function(t){for(;t;){const{closed:s,destination:e,isStopped:i}=t;if(s||i)return!1;t=e&&e instanceof u?e:null}return!0}(t)?t.error(s):console.warn(s)}}forEach(t,s){return new(s=d(s))((s,e)=>{let i;i=this.subscribe(s=>{try{t(s)}catch(r){e(r),i&&i.unsubscribe()}},e,s)})}_subscribe(t){const{source:s}=this;return s&&s.subscribe(t)}[f](){return this}pipe(...t){return 0===t.length?this:((s=t)?1===s.length?s[0]:function(t){return s.reduce((t,s)=>s(t),t)}:w)(this);var s}toPromise(t){return new(t=d(t))((t,s)=>{let e;this.subscribe(t=>e=t,t=>s(t),()=>t(e))})}}function d(t){if(t||(t=Promise),!t)throw new Error("no Promise impl found");return t}b.create=t=>new b(t);const p=(()=>{function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t})();class g extends h{constructor(t,s){super(),this.subject=t,this.subscriber=s,this.closed=!1}unsubscribe(){if(this.closed)return;this.closed=!0;const t=this.subject,s=t.observers;if(this.subject=null,!s||0===s.length||t.isStopped||t.closed)return;const e=s.indexOf(this.subscriber);-1!==e&&s.splice(e,1)}}class y extends u{constructor(t){super(t),this.destination=t}}class v extends b{constructor(){super(),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}[a](){return new y(this)}lift(t){const s=new S(this,this);return s.operator=t,s}next(t){if(this.closed)throw new p;if(!this.isStopped){const{observers:s}=this,e=s.length,i=s.slice();for(let r=0;r<e;r++)i[r].next(t)}}error(t){if(this.closed)throw new p;this.hasError=!0,this.thrownError=t,this.isStopped=!0;const{observers:s}=this,e=s.length,i=s.slice();for(let r=0;r<e;r++)i[r].error(t);this.observers.length=0}complete(){if(this.closed)throw new p;this.isStopped=!0;const{observers:t}=this,s=t.length,e=t.slice();for(let i=0;i<s;i++)e[i].complete();this.observers.length=0}unsubscribe(){this.isStopped=!0,this.closed=!0,this.observers=null}_trySubscribe(t){if(this.closed)throw new p;return super._trySubscribe(t)}_subscribe(t){if(this.closed)throw new p;return this.hasError?(t.error(this.thrownError),h.EMPTY):this.isStopped?(t.complete(),h.EMPTY):(this.observers.push(t),new g(this,t))}asObservable(){const t=new b;return t.source=this,t}}v.create=(t,s)=>new S(t,s);class S extends v{constructor(t,s){super(),this.destination=t,this.source=s}next(t){const{destination:s}=this;s&&s.next&&s.next(t)}error(t){const{destination:s}=this;s&&s.error&&this.destination.error(t)}complete(){const{destination:t}=this;t&&t.complete&&this.destination.complete()}_subscribe(t){const{source:s}=this;return s?this.source.subscribe(t):h.EMPTY}}class _ extends v{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){const s=super._subscribe(t);return s&&!s.closed&&t.next(this._value),s}getValue(){if(this.hasError)throw this.thrownError;if(this.closed)throw new p;return this._value}next(t){super.next(this._value=t)}}const m={production:!1,AR_APP_ID:"coronavirus.api",API_VERSION:"1.0.2",DEFAULT_COLLECTION_ID:"regional.daily"};function O(t,s){return{op:"equals",expr1:t,expr2:s}}class x{constructor(){this.arweaveSdk=window.Arweave.init({host:"arweave.net",port:443,protocol:"https",timeout:3e5,logging:!1}),this._currentWallet={address:"",balance:0,keystore:null,rawJson:""},this._allChannels=[],this._currentChannel={},console.log("ArweaveServiceService constructor"),this.getNetworkStatus(t=>console.log(t)),this.currentWallet$=new _(this._currentWallet),this.allChannels$=new _(this._allChannels),this.currentChannel$=new _(this._currentChannel)}static get defaultInstance(){return null==x._instance&&(x._instance=new x),x._instance}async loadWallet(t){try{var s=JSON.parse(t);this.arweaveSdk.wallets.jwkToAddress(s).then(t=>{this.arweaveSdk.wallets.getBalance(t).then(e=>{this._currentWallet={address:t,balance:e,keystore:s,rawJson:JSON.stringify(s,null,2)},this.currentWallet$.next(this._currentWallet),e<1e5&&console.log("Balance extremely low, app may not work. Visit tokens.arweave.org and get a new wallet + 1.00000 AR in free tokens")})})}catch(e){console.log(JSON.stringify(e,null,2)),alert("Not an Arweave wallet file! Visit tokens.arweave.org and get a new wallet + 1.00000 AR in free tokens")}}async getItemByTxId(t){var s=await this.arweaveSdk.transactions.get(t),e=JSON.parse(s.get("data",{decode:!0,string:!0})),i={};return s.get("tags").forEach(t=>{let s=t.get("name",{decode:!0,string:!0}),e=t.get("value",{decode:!0,string:!0});console.log(`${s} : ${e}`),i[s]=e}),{data:e,tags:i}}async getCollection(t){var s=[];const e=function t(...s){if(0==s.length)throw new Error("0 arguments pass to and()");return 1==s.length?s[0]:{op:"and",expr1:s.shift(),expr2:s.length>1?t(...s):s[0]}}(O("AR_APP_ID",m.AR_APP_ID),O("AR_COLLECTION_ID",t),O("API_VERSION",m.API_VERSION)),i=await this.arweaveSdk.arql(e);console.log("step 1: get all transaction ids tagged with AR_COLLECTION_ID == "+t),console.log(JSON.stringify(i)),console.log("step 2: each transaction points to an element's contents - retrieve it and insert into our array");for(var r=0;r<i.length;r++){var n=i[r],o=await this.arweaveSdk.transactions.get(n),h=JSON.parse(o.get("data",{decode:!0,string:!0})),c={};o.get("tags").forEach(t=>{let s=t.get("name",{decode:!0,string:!0}),e=t.get("value",{decode:!0,string:!0});console.log(`${s} : ${e}`),c[s]=e,c.txid=n}),s.push({data:h,tags:c})}return console.log("success: the collection has been downloaded from the blockchain"),s}loginWithWalletString(t){try{var s=JSON.parse(t);this.arweaveSdk.wallets.jwkToAddress(s).then(t=>{this.arweaveSdk.wallets.getBalance(t).then(e=>{this._currentWallet={address:t,balance:e,keystore:s,rawJson:JSON.stringify(s,null,2)},this.currentWallet$.next(this._currentWallet),e<1e5&&console.log("Balance extremely low, app may not work. Visit tokens.arweave.org and get a new wallet + 1.00000 AR in free tokens")})})}catch(e){console.log(JSON.stringify(e,null,2)),alert("Not an Arweave wallet file! Visit tokens.arweave.org and get a new wallet + 1.00000 AR in free tokens")}}loginWithWalletFile(t){const s=new FileReader;s.readAsText(t),s.onloadend=()=>{this.loginWithWalletString(s.result)}}getNetworkStatus(t){this.arweaveSdk.network.getInfo().then(s=>t(s))}}x._instance=null;const E=new class{constructor(){this._timeseriesByDay=[],this.timeseriesByDay$=new _([]),this._timeseriesByRegion={},this.timeseriesByRegion$=new _({}),this.regions=[],this.arweaveService=x.defaultInstance}getRegions(){return this.regions}getValidDays(){var t=[];return this._timeseriesByDay.forEach(s=>{t.push(s.tags.DATE)}),t.sort((t,s)=>Date.parse(t)-Date.parse(s.DATE)),t}getRegionalTimeSeries(t){return this._timeseriesByRegion[t]}getRegionByDate(t,s){return this._timeseriesByRegion[t].filter(t=>t.date==s)[0]}getSnapshotByDate(t){return this.regions.map(s=>this._timeseriesByRegion[s].filter(s=>s.date==t)[0])}generateRegionalTimeseries(){this._timeseriesByDay.forEach(t=>{var s=t.tags.DATE;t.data.forEach(e=>{var i=e.provincestate||e.countryregion;e.date=s,e.region=i,e.blockchainTxid=t.tags.txid,e.verifyUrl="https://viewblock.io/arweave/tx/"+t.tags.txid,this._timeseriesByRegion[i]||(this._timeseriesByRegion[i]=[],this.regions.push(i)),this._timeseriesByRegion[i].push(e)})}),this.timeseriesByRegion$.next(this._timeseriesByRegion)}async getRegionalTimeseriesDataset(t=!1){(0==this._timeseriesByDay.length||t)&&(this._timeseriesByDay=await this.arweaveService.getCollection("regional.daily"),this._timeseriesByDay.sort((t,s)=>Date.parse(t.tags.DATE)-Date.parse(s.tags.DATE)),this.timeseriesByDay$.next(this._timeseriesByDay),this.generateRegionalTimeseries())}};export{E as O};