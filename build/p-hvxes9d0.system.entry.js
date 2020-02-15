var __awaiter=this&&this.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{s(i.next(e))}catch(t){o(t)}}function u(e){try{s(i["throw"](e))}catch(t){o(t)}}function s(e){e.done?n(e.value):r(e.value).then(a,u)}s((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(e){return function(t){return s([e,t])}}function s(a){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(o=a[0]&2?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;if(r=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;r=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=t.call(e,n)}catch(u){a=[6,u];r=0}finally{i=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-1fa942a3.system.js","./p-35047b4c.system.js","./p-2294249a.system.js","./p-9bedbd33.system.js"],(function(e){"use strict";var t,n,i,r,o,a,u,s,l,c,h;return{setters:[function(e){t=e.r;n=e.c;i=e.h;r=e.H;o=e.f;a=e.e},function(e){u=e.f},function(e){s=e.c;l=e.h},function(e){c=e.f;h=e.w}],execute:function(){var d=e("ion_list_header",function(){function e(e){t(this,e)}e.prototype.render=function(){var e;var t=n(this);return i(r,{class:Object.assign(Object.assign({},s(this.color)),(e={},e[t]=true,e))},i("slot",null))};Object.defineProperty(e,"style",{get:function(){return":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:40px;background:var(--background);color:var(--color);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{--background:transparent;--color:var(--ion-text-color,#000);padding-left:calc(var(--ion-safe-area-left, 0px) + 16px);min-height:45px;font-size:14px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;-webkit-padding-start:calc(var(--ion-safe-area-left, 0px) + 16px);padding-inline-start:calc(var(--ion-safe-area-left, 0px) + 16px)}}"},enumerable:true,configurable:true});return e}());var f=e("ion_radio",function(){function e(e){var n=this;t(this,e);this.inputId="ion-rb-"+p++;this.name=this.inputId;this.disabled=false;this.checked=false;this.onFocus=function(){n.ionFocus.emit()};this.onBlur=function(){n.ionBlur.emit()};this.onClick=function(){if(n.checked){n.ionDeselect.emit()}else{n.checked=true}};this.ionStyle=o(this,"ionStyle",7);this.ionSelect=o(this,"ionSelect",7);this.ionDeselect=o(this,"ionDeselect",7);this.ionFocus=o(this,"ionFocus",7);this.ionBlur=o(this,"ionBlur",7)}e.prototype.colorChanged=function(){this.emitStyle()};e.prototype.checkedChanged=function(e){if(e){this.ionSelect.emit({checked:true,value:this.value})}this.emitStyle()};e.prototype.disabledChanged=function(){this.emitStyle()};e.prototype.componentWillLoad=function(){if(this.value===undefined){this.value=this.inputId}this.emitStyle()};e.prototype.emitStyle=function(){this.ionStyle.emit({"radio-checked":this.checked,"interactive-disabled":this.disabled})};e.prototype.render=function(){var e;var t=this,o=t.inputId,a=t.disabled,c=t.checked,h=t.color,d=t.el;var f=n(this);var p=o+"-lbl";var b=u(d);if(b){b.id=p}return i(r,{onClick:this.onClick,role:"radio","aria-disabled":a?"true":null,"aria-checked":""+c,"aria-labelledby":p,class:Object.assign(Object.assign({},s(h)),(e={},e[f]=true,e["in-item"]=l("ion-item",d),e["interactive"]=true,e["radio-checked"]=c,e["radio-disabled"]=a,e))},i("div",{class:"radio-icon"},i("div",{class:"radio-inner"})),i("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:a}))};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{color:["colorChanged"],checked:["checkedChanged"],disabled:["disabledChanged"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:layout size style}.radio-icon,button{width:100%;height:100%}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color:var(--ion-color-step-400,#999);--color-checked:var(--ion-color-primary,#3880ff);--border-width:2px;--border-style:solid;width:20px;height:20px}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:50%;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:50%;width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);-webkit-transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}:host(.radio-disabled){opacity:.3}:host(.ion-focused) .radio-icon:after{border-radius:50%;left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:\"\";opacity:.2}:host-context([dir=rtl]).ion-focused .radio-icon:after,:host-context([dir=rtl]):host(.ion-focused) .radio-icon:after{left:unset;right:unset;right:-12px}:host(.in-item){margin-left:0;margin-right:0;margin-top:9px;margin-bottom:9px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:11px;margin-bottom:10px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}"},enumerable:true,configurable:true});return e}());var p=0;var b=e("ion_radio_group",function(){function e(e){var n=this;t(this,e);this.inputId="ion-rg-"+y++;this.labelId=this.inputId+"-lbl";this.allowEmptySelection=false;this.name=this.inputId;this.onSelect=function(e){var t=e.target;if(t){n.value=t.value}};this.onDeselect=function(e){var t=e.target;if(t){t.checked=false;n.value=undefined}};this.ionChange=o(this,"ionChange",7)}e.prototype.valueChanged=function(e){this.updateRadios();this.ionChange.emit({value:e})};e.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,n,i;var r=this;return __generator(this,(function(o){switch(o.label){case 0:e=this.el;t=e.querySelector("ion-list-header")||e.querySelector("ion-item-divider");if(t){n=t.querySelector("ion-label");if(n){this.labelId=n.id=this.name+"-lbl"}}if(!(this.value===undefined))return[3,2];i=c(e,"ion-radio");if(!(i!==undefined))return[3,2];return[4,i.componentOnReady()];case 1:o.sent();if(this.value===undefined){this.value=i.value}o.label=2;case 2:this.mutationO=h(e,"ion-radio",(function(e){if(e!==undefined){e.componentOnReady().then((function(){r.value=e.value}))}else{r.updateRadios()}}));this.updateRadios();return[2]}}))}))};e.prototype.disconnectedCallback=function(){if(this.mutationO){this.mutationO.disconnect();this.mutationO=undefined}};e.prototype.updateRadios=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,n,i,r,o;return __generator(this,(function(a){switch(a.label){case 0:return[4,this.getRadios()];case 1:e=a.sent();t=this.value;n=false;for(i=0,r=e;i<r.length;i++){o=r[i];if(!n&&o.value===t){n=true;o.checked=true}else{o.checked=false}}if(!n){this.value=undefined}return[2]}}))}))};e.prototype.getRadios=function(){return Promise.all(Array.from(this.el.querySelectorAll("ion-radio")).map((function(e){return e.componentOnReady()})))};e.prototype.render=function(){return i(r,{role:"radiogroup","aria-labelledby":this.labelId,onIonSelect:this.onSelect,onIonDeselect:this.allowEmptySelection?this.onDeselect:undefined,class:n(this)})};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{value:["valueChanged"]}},enumerable:true,configurable:true});return e}());var y=0}}}));