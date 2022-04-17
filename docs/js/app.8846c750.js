(function(){"use strict";var e={8715:function(e,t,r){var n=r(9242),o=r(3396),i=r(7139),a=r.p+"img/logo.7bb99f5f.png";const u={id:"container"},s=(0,o._)("img",{height:"100",alt:"Converter Logo",src:a},null,-1),l=(0,o.Uk)(" g"),c=(0,o._)("div",null,"to",-1),d={key:0},f={id:"result"},p={style:{"text-transform":"uppercase"}},h=(0,o.Uk)(" filament measures"),g={key:1},m={id:"meters"},v={key:2},w={id:"metersx"},P={key:3},b=(0,o._)("p",{id:"result"},"that corresponds to",-1),y=[b],M={key:4},k={id:"result"},O=(0,o.Uk)(" of "),A={style:{"text-transform":"uppercase"}},U={key:5},_={id:"resultx"};function F(e,t,r,a,b,F){return(0,o.wg)(),(0,o.iD)("div",u,[s,(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.fromValue=t),placeholder:"enter filament weight"},null,512),[[n.nr,e.fromValue]]),l]),(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.fromUnit=t),placeholder:"enter filament material"},null,512),[[n.nr,e.fromUnit]])]),c,(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.toUnit=t),placeholder:"enter target material"},null,512),[[n.nr,e.toUnit]])]),isFinite(F.meters)?((0,o.wg)(),(0,o.iD)("div",d,[(0,o._)("p",f,[(0,o.Uk)((0,i.zw)(e.fromValue)+"g of 1.75mm ",1),(0,o._)("span",p,(0,i.zw)(e.fromUnit),1),h])])):(0,o.kq)("",!0),isFinite(F.meters)?((0,o.wg)(),(0,o.iD)("div",g,[(0,o._)("p",m,[(0,o._)("strong",null,(0,i.zw)(F.meters)+"m",1)])])):(0,o.kq)("",!0),isFinite(F.meters)?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",v,[(0,o._)("p",w,(0,i.zw)(F.meters),1)])),isFinite(F.result)?((0,o.wg)(),(0,o.iD)("div",P,y)):(0,o.kq)("",!0),isFinite(F.result)?((0,o.wg)(),(0,o.iD)("div",M,[(0,o._)("p",k,[(0,o._)("strong",null,(0,i.zw)(F.result)+"g",1),O,(0,o._)("strong",A,(0,i.zw)(e.toUnit),1)])])):(0,o.kq)("",!0),isFinite(F.result)?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",U,[(0,o._)("p",_,(0,i.zw)(F.result),1)]))])}var L={name:"App",props:{physicalQuantity:Object},data:function(){return{fromValue:"",fromUnit:"",toUnit:""}},methods:{},computed:{meters:function(){let e=parseFloat(this.fromValue);if(!isFinite(e))return"Result will show here after entering values";switch(this.fromUnit.toUpperCase()){case"PLA":return Math.round(100*e*.335283)/100;case"ABS":return Math.round(100*e*.399761)/100;case"ASA":return Math.round(100*e*.388552)/100;case"PET":case"PETG":return Math.round(100*e*.327363)/100;case"NYLON":return Math.round(100*e*.384955)/100;case"POLYCARBONATE":case"PC":return Math.round(100*e*.346459)/100;case"HIPS":return Math.round(100*e*.388552)/100;case"PVA":return Math.round(100*e*.349371)/100;case"TPU":return Math.round(100*e*.346459)/100;case"PMMA":return Math.round(100*e*.352331)/100;case"COPPER-FILL":case"COPPERFILL":return Math.round(100*e*.106603)/100;case"":return"Please enter base material";default:return console.log("First Material not Available"),"Selected base material not available yet, check spelling or suggest material"}},result:function(){let e=parseFloat(this.meters);if(!isFinite(e))return"...";switch(this.toUnit.toUpperCase()){case"PLA":return Math.round(100*e/.335283)/100;case"ABS":return Math.round(100*e/.399761)/100;case"ASA":return Math.round(100*e/.388552)/100;case"PET":case"PETG":return Math.round(100*e/.327363)/100;case"NYLON":return Math.round(100*e/.384955)/100;case"POLYCARBONATE":case"PC":return Math.round(100*e/.346459)/100;case"HIPS":return Math.round(100*e/.388552)/100;case"PVA":return Math.round(100*e/.349371)/100;case"TPU":return Math.round(100*e/.346459)/100;case"PMMA":return Math.round(100*e/.352331)/100;case"COPPER-FILL":case"COPPERFILL":return Math.round(100*e/.106603)/100;case"":return"Please enter target material";default:return"Target material not available yet"}}}},C=r(89);const E=(0,C.Z)(L,[["render",F]]);var x=E,T=r(5431);(0,T.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),(0,n.ri)(x).mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,i){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],i=e[c][2];for(var u=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(u=!1,i<a&&(a=i));if(u){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,o,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,a=n[0],u=n[1],s=n[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(s)var c=s(r)}for(t&&t(n);l<a.length;l++)i=a[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},n=self["webpackChunkfivwebsite"]=self["webpackChunkfivwebsite"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(8715)}));n=r.O(n)})();
//# sourceMappingURL=app.8846c750.js.map