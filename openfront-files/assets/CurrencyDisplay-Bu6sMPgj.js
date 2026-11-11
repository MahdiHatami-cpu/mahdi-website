import{Wi as e,Xi as t,Yi as n,Zi as r,hi as i,na as a}from"./index-DqhXKrvL.js";import"./CapIcon-DFwkTNeG.js";import"./PlutoniumIcon-CWe4F4vy.js";function o(e){if(e==null)return null;if(typeof e==`number`)return Number.isFinite(e)?e.toLocaleString():null;if(!e)return null;try{return BigInt(e).toLocaleString()}catch{return null}}var s=class extends r{constructor(...e){super(...e),this.hard=null,this.soft=null,this.compact=!1}createRenderRoot(){return this}render(){let t=o(this.hard),n=o(this.soft);if(t===null&&n===null)return a``;let r=this.compact,i=r?`flex items-center gap-3 text-xs`:`flex gap-3 justify-center`,s=r?`text-xs text-green-400/70`:`text-sm font-bold text-green-400`,c=r?`text-xs text-amber-600/80`:`text-sm font-bold text-amber-700`;return a`
      <div class="${i}">
        ${t===null?``:a`<div
                class="flex items-center gap-1.5"
                title=${e(`cosmetics.hard`)}
              >
                <plutonium-icon .size=${r?12:16}></plutonium-icon>
                <span class="${s}">${t}</span>
              </div>`}
        ${n===null?``:a`<div
                class="flex items-center gap-1.5"
                title=${e(`cosmetics.soft`)}
              >
                <cap-icon
                  .size=${r?14:20}
                  style=${r?``:`margin-top:3px`}
                ></cap-icon>
                <span class="${c}">${n}</span>
              </div>`}
      </div>
    `}};i([n({attribute:!1})],s.prototype,`hard`,void 0),i([n({attribute:!1})],s.prototype,`soft`,void 0),i([n({type:Boolean})],s.prototype,`compact`,void 0),s=i([t(`currency-display`)],s);export{o as t};