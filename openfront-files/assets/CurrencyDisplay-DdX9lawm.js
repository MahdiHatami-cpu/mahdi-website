import{$i as e,Ji as t,ea as n,oa as r,ta as i,yi as a}from"./index-Cv-L6ZYS.js";import"./CapIcon-BjNqGPDJ.js";import"./PlutoniumIcon-GjaZU5e1.js";function o(e){if(e==null)return null;if(typeof e==`number`)return Number.isFinite(e)?e.toLocaleString():null;if(!e)return null;try{return BigInt(e).toLocaleString()}catch{return null}}var s=class extends i{constructor(...e){super(...e),this.hard=null,this.soft=null,this.compact=!1}createRenderRoot(){return this}render(){let e=o(this.hard),n=o(this.soft);if(e===null&&n===null)return r``;let i=this.compact,a=i?`flex items-center gap-3 text-xs`:`flex gap-3 justify-center`,s=i?`text-xs text-green-400/70`:`text-sm font-bold text-green-400`,c=i?`text-xs text-amber-600/80`:`text-sm font-bold text-amber-700`;return r`
      <div class="${a}">
        ${e===null?``:r`<div
                class="flex items-center gap-1.5"
                title=${t(`cosmetics.hard`)}
              >
                <plutonium-icon .size=${i?12:16}></plutonium-icon>
                <span class="${s}">${e}</span>
              </div>`}
        ${n===null?``:r`<div
                class="flex items-center gap-1.5"
                title=${t(`cosmetics.soft`)}
              >
                <cap-icon
                  .size=${i?14:20}
                  style=${i?``:`margin-top:3px`}
                ></cap-icon>
                <span class="${c}">${n}</span>
              </div>`}
      </div>
    `}};a([e({attribute:!1})],s.prototype,`hard`,void 0),a([e({attribute:!1})],s.prototype,`soft`,void 0),a([e({type:Boolean})],s.prototype,`compact`,void 0),s=a([n(`currency-display`)],s);export{o as t};