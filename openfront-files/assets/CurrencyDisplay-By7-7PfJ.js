import{$i as e,Qi as t,aa as n,ea as r,qi as i,vi as a}from"./index-DAKbNxz9.js";import"./CapIcon-Cnzk-Rx-.js";import"./PlutoniumIcon-BiZNftrU.js";function o(e){if(e==null)return null;if(typeof e==`number`)return Number.isFinite(e)?e.toLocaleString():null;if(!e)return null;try{return BigInt(e).toLocaleString()}catch{return null}}var s=class extends r{constructor(...e){super(...e),this.hard=null,this.soft=null,this.compact=!1}createRenderRoot(){return this}render(){let e=o(this.hard),t=o(this.soft);if(e===null&&t===null)return n``;let r=this.compact,a=r?`flex items-center gap-3 text-xs`:`flex gap-3 justify-center`,s=r?`text-xs text-green-400/70`:`text-sm font-bold text-green-400`,c=r?`text-xs text-amber-600/80`:`text-sm font-bold text-amber-700`;return n`
      <div class="${a}">
        ${e===null?``:n`<div
                class="flex items-center gap-1.5"
                title=${i(`cosmetics.hard`)}
              >
                <plutonium-icon .size=${r?12:16}></plutonium-icon>
                <span class="${s}">${e}</span>
              </div>`}
        ${t===null?``:n`<div
                class="flex items-center gap-1.5"
                title=${i(`cosmetics.soft`)}
              >
                <cap-icon
                  .size=${r?14:20}
                  style=${r?``:`margin-top:3px`}
                ></cap-icon>
                <span class="${c}">${t}</span>
              </div>`}
      </div>
    `}};a([t({attribute:!1})],s.prototype,`hard`,void 0),a([t({attribute:!1})],s.prototype,`soft`,void 0),a([t({type:Boolean})],s.prototype,`compact`,void 0),s=a([e(`currency-display`)],s);export{o as t};