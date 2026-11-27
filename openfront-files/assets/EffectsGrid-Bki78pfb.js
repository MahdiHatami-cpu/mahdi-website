const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CosmeticRenderCanvas-BgstfzyT.js","./index-Cv-L6ZYS.js","./vendor-DPAo4oW-.js","./rolldown-runtime-BpQH8Ho1.js","./index-BmW0J2cO.css","./PlayerPalette-C-N6hSjI.js","./RenderSettings-Dz_w-TCX.js","./render-settings-IP7ZhXCl.js","./WebGLFrameBuilder-BrURYB18.js"])))=>i.map(i=>d[i]);
import{$i as e,Bn as t,Ji as n,Ka as r,Qi as i,ea as a,er as o,n as s,oa as c,qa as l,qn as u,ra as d,rr as f,ta as p,to as m,ua as h,va as g,ya as _,yi as v}from"./index-Cv-L6ZYS.js";import{c as y,i as b,n as x,o as S,r as C,s as w,t as T}from"./CosmeticPreview-oCL43AiT.js";import"./CosmeticCard-DWV2L1iG.js";var E=[{name:`Red`,hex:`#eb3333`},{name:`Blue`,hex:`#2962ff`},{name:`Teal`,hex:`#06b6d4`},{name:`Purple`,hex:`#9234ea`},{name:`Yellow`,hex:`#e7b008`},{name:`Orange`,hex:`#ff7f0e`},{name:`Green`,hex:`#41be52`}],D=`default`,O=class extends p{constructor(...e){super(...e),this.resolved=null,this.selectedPrimary=D,this.selectedSecondary=D,this.paletteSecondary=null,this.onKeyDown=e=>{e.key===`Escape`&&this.resolved&&(e.stopImmediatePropagation(),e.preventDefault(),this.close())}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),t(()=>import(`./CosmeticRenderCanvas-BgstfzyT.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url).catch(e=>console.warn(`Failed to load the cosmetic preview:`,e)),window.addEventListener(`keydown`,this.onKeyDown,{capture:!0})}disconnectedCallback(){window.removeEventListener(`keydown`,this.onKeyDown,{capture:!0}),super.disconnectedCallback()}skinPalettes(){if(!this.resolved)return[];if(this.resolved.type===`skin`)return[{name:D,label:n(`territory_patterns.pattern.default`),primaryColor:D,secondaryColor:D}];if(this.resolved.type!==`pattern`)return[];let e=this.resolved.cosmetic,t=u(),r=[],i=new Set;if(this.resolved.colorPalette&&(r.push(this.resolved.colorPalette),i.add(this.resolved.colorPalette.name)),e?.colorPalettes&&t?.colorPalettes)for(let n of e.colorPalettes){if(n.isArchived||i.has(n.name))continue;let e=t.colorPalettes[n.name];e&&(r.push(e),i.add(n.name))}return r.map(e=>({name:e.name,label:f(`territory_patterns.color_palette`,e.name),primaryColor:e.primaryColor,secondaryColor:e.secondaryColor}))}teamPalettes(){if(!this.resolved)return[];let e=this.resolved.type===`pattern`;return!e&&this.resolved.type!==`skin`?[]:E.map(t=>({name:t.name,label:n(`team_colors.${t.name.toLowerCase()}`),primaryColor:t.hex,secondaryColor:e?this.paletteSecondary??s(t.hex).darken(.125).toHex():t.hex}))}updated(e){if(super.updated(e),e.has(`resolved`)&&this.resolved){let e=this.skinPalettes()[0];this.selectedPrimary=e?.primaryColor??D,this.selectedSecondary=e?.secondaryColor??D,this.paletteSecondary=this.resolved.type===`pattern`?e?.secondaryColor??null:null}}selectPalette(e,t){this.selectedPrimary=e.primaryColor,this.selectedSecondary=e.secondaryColor,t&&this.resolved?.type===`pattern`&&(this.paletteSecondary=e.secondaryColor)}get canvasEl(){return this.querySelector(`cosmetic-render-canvas`)}close(){this.resolved=null,this.dispatchEvent(new CustomEvent(`close-preview`,{bubbles:!0}))}customColors(){return this.resolved?this.resolved.type===`skin`?this.selectedPrimary===D?null:[this.selectedPrimary]:this.resolved.type===`pattern`?this.selectedPrimary===D||this.selectedSecondary===D?null:[this.selectedPrimary,this.selectedSecondary]:null:null}renderSwatch(e,t){let n=this.selectedPrimary===e.primaryColor&&this.selectedSecondary===e.secondaryColor,r=n?`ring-2 ring-cyan-400 ring-offset-2 ring-offset-zinc-900 border-white`:``;if(e.primaryColor===D)return c`<button
        type="button"
        title=${e.label}
        aria-label=${e.label}
        aria-pressed=${n?`true`:`false`}
        class="group relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-150 hover:scale-105 active:scale-95 cursor-pointer ${n?`${r} bg-white/25 text-white shadow-sm`:`border-white/30 bg-white/10 text-white/70 hover:bg-white/20 hover:text-white`}"
        @click=${()=>this.selectPalette(e,t)}
      >
        <svg
          class="w-3.5 h-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
        </svg>
      </button>`;let i=e.primaryColor!==e.secondaryColor;return c`<button
      type="button"
      title=${e.label}
      aria-label=${e.label}
      aria-pressed=${n?`true`:`false`}
      class="group relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/40 overflow-hidden transition-all duration-150 hover:scale-105 active:scale-95 cursor-pointer ${r}"
      @click=${()=>this.selectPalette(e,t)}
    >
      <div
        class="w-full h-full"
        style=${i?`background-image: linear-gradient(135deg, ${e.primaryColor} 0 calc(50% - 0.5px), rgba(255,255,255,0.55) calc(50% - 0.5px) calc(50% + 0.5px), ${e.secondaryColor} calc(50% + 0.5px) 100%);`:`background-color: ${e.primaryColor};`}
      ></div>
    </button>`}renderPaletteGroup(e,t,r){return t.length===0?d:c`<div class="flex items-center gap-2.5">
      <span class="font-bold text-white/70 whitespace-nowrap"
        >${n(e)}</span
      >
      <div class="flex items-center gap-2.5 p-1.5">
        ${t.map(e=>this.renderSwatch(e,r))}
      </div>
    </div>`}render(){if(!this.resolved)return d;let e=b(this.resolved),t=w(this.resolved),r=this.skinPalettes(),i=this.teamPalettes(),a=this.resolved.cosmetic,o=a?.artist,s=C(a?.aiDisclosed,o);return c`<div
      data-cosmetic-preview-modal
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
      @click=${e=>{e.target===e.currentTarget&&this.close()}}
    >
      <div
        class="relative flex flex-col w-full max-w-3xl h-[600px] max-h-[85vh] rounded-2xl bg-zinc-900 border border-white/15 shadow-2xl overflow-hidden"
      >
        <!-- Header -->
        <div
          class="flex items-center justify-between gap-4 px-6 py-3 border-b border-white/10 bg-zinc-900/90"
        >
          <div class="flex items-center gap-3 min-w-0">
            <h2 class="text-lg font-bold text-white tracking-wide truncate">
              ${e}
            </h2>
            <span
              class="rounded-full px-2.5 py-0.5 text-xs font-black uppercase tracking-wider border ${S(this.resolved)}"
            >
              ${t}
            </span>
            ${o||s?c`<div class="flex min-w-0 flex-col items-start gap-y-0.5">
                    ${o?c`<span
                            class="truncate text-xs text-white/60 max-w-full"
                          >
                            ${n(`cosmetics.artist_label`)}
                            <span class="text-white/90 font-medium"
                              >${o}</span
                            >
                          </span>`:d}
                    ${s?c`<span
                            class="truncate text-xs text-white/60 max-w-full"
                          >
                            ${n(s)}
                          </span>`:d}
                  </div>`:d}
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <div
              class="flex items-center gap-1 p-1 rounded-lg bg-white/5 border border-white/10"
            >
              <button
                type="button"
                aria-label=${n(`user_setting.zoom_out`)}
                title=${n(`user_setting.zoom_out`)}
                class="flex h-7 w-7 items-center justify-center rounded-md text-white/80 hover:bg-white/15 hover:text-white transition active:scale-90 cursor-pointer text-sm font-bold"
                @click=${()=>this.canvasEl?.zoomOut()}
              >
                −
              </button>
              <button
                type="button"
                aria-label=${n(`user_setting.zoom_in`)}
                title=${n(`user_setting.zoom_in`)}
                class="flex h-7 w-7 items-center justify-center rounded-md text-white/80 hover:bg-white/15 hover:text-white transition active:scale-90 cursor-pointer text-sm font-bold"
                @click=${()=>this.canvasEl?.zoomIn()}
              >
                +
              </button>
            </div>
            <button
              type="button"
              aria-label=${n(`common.close`)}
              title=${n(`common.close`)}
              class="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/70 hover:bg-white/15 hover:text-white transition-colors"
              @click=${()=>this.close()}
            >
              ✕
            </button>
          </div>
        </div>

        <!-- WebGL Canvas Viewport -->
        <div class="flex-1 p-3 bg-zinc-950/60 min-h-0">
          <cosmetic-render-canvas
            .resolved=${this.resolved}
            .customColors=${this.customColors()}
            class="block h-full w-full"
          ></cosmetic-render-canvas>
        </div>

        <!-- Skin colors (catalog palettes) and team colors (team-game look) -->
        ${r.length+i.length>1?c`
                <div
                  class="flex flex-wrap items-center gap-x-6 gap-y-1 px-6 py-2 border-t border-white/10 bg-zinc-900/80 text-xs text-white/80 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  ${this.renderPaletteGroup(`store.preview_skin_colors`,r,!0)}
                  ${this.renderPaletteGroup(`store.preview_team_colors`,i,!1)}
                </div>
              `:d}
      </div>
    </div>`}};v([e({attribute:!1})],O.prototype,`resolved`,void 0),v([i()],O.prototype,`selectedPrimary`,void 0),v([i()],O.prototype,`selectedSecondary`,void 0),v([i()],O.prototype,`paletteSecondary`,void 0),O=v([a(`cosmetic-preview-modal`)],O);var k=24,A=class{constructor(e,t=k){this.host=e,this.pageSize=t,this.lists=new Map,this.watched=new Map,e.addController(this)}page(e,t,n){if(!T())return{items:n,more:d};let r=this.lists.get(e);return(r===void 0||r.key!==t)&&(r={key:t,limit:this.pageSize},this.lists.set(e,r)),n.length<=r.limit?{items:n,more:d}:{items:n.slice(0,r.limit),more:c`<div
        aria-hidden="true"
        data-progressive-sentinel=${e}
        class="col-span-full h-px"
      ></div>`}}hostUpdated(){for(let e of this.lists.keys()){let t=this.host.renderRoot.querySelector(`[data-progressive-sentinel="${e}"]`),n=this.lists.get(e),r=this.watched.get(e);if(r?.element===t&&r.state===n&&r.limit===n.limit||(r?.stop(),this.watched.delete(e),t===null))continue;let i=n.limit;this.watched.set(e,{element:t,state:n,limit:i,stop:x(t,t=>{!t||n!==this.lists.get(e)||n.limit!==i||(n.limit+=this.pageSize,this.host.requestUpdate())})})}}reset(){this.lists.clear(),this.stopWatching()}hostDisconnected(){this.stopWatching()}stopWatching(){for(let e of this.watched.values())e.stop();this.watched.clear()}},j=class extends p{constructor(...e){super(...e),this.cosmetics=null,this.userMeResponse=!1,this.mode=`select`,this.affiliateCode=null,this.search=``,this.effectType=null,this.tabbed=!1,this.focusedKey=null,this.activeType=r[0],this.activeNukeType=l[0],this.userSettings=new _,this.renderedItems=[],this.pages=new A(this),this._onChange=()=>this.requestUpdate()}connectedCallback(){super.connectedCallback(),window.addEventListener(`${g}:${h}`,this._onChange)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`${g}:${h}`,this._onChange)}createRenderRoot(){return this}select(e,t,r){this.userSettings.setSelectedEffectName(e,t??void 0),r!==void 0&&window.dispatchEvent(new CustomEvent(`show-message`,{detail:{message:n(`inventory.selected_cosmetic`,{name:y(r)}),duration:2e3}})),this.requestUpdate()}effectiveEffectType(){return this.tabbed?this.activeType:this.effectType??this.activeType}activeSlot(){let e=this.effectiveEffectType();return e===`nukeExplosion`?this.activeNukeType:e}resolvedItems(){let e=this.resolvedCache;if(e?.cosmetics===this.cosmetics&&e.userMeResponse===this.userMeResponse&&e.affiliateCode===this.affiliateCode)return e.items;let t=o(this.cosmetics,this.userMeResponse,this.affiliateCode);return this.resolvedCache={cosmetics:this.cosmetics,userMeResponse:this.userMeResponse,affiliateCode:this.affiliateCode,items:t},t}emitActiveSlot(e=this.resolvedItems()){let t=this.effectiveEffectType(),n=this.activeSlot(),r=this.userSettings.getSelectedEffectName(n),i=r?e.find(e=>e.type===`effect`&&e.effectType===t&&e.cosmetic?.name===r&&this.slotForTile(t,e)===n)??null:null;this.onActiveSlotChange?.({effectType:t,slot:n,resolved:i})}selectEffectType(e){this.activeType=e;let t=this.resolvedItems();this.emitActiveSlot(t),this.emitVisiblePurchaseItems(t)}selectNukeType(e){this.activeNukeType=e;let t=this.resolvedItems();this.emitActiveSlot(t),this.emitVisiblePurchaseItems(t)}slotForTile(e,t){return e===`nukeExplosion`?this.nukeTypeOf(t)??this.activeNukeType:e}matchesSearch(e){let t=this.search.trim().toLowerCase();if(!t)return!0;let n=e.cosmetic?.name;return n?n.toLowerCase().includes(t)||f(`effects`,n).toLowerCase().includes(t):!1}itemsForType(e,t){let n=e.filter(e=>e.type===`effect`&&e.cosmetic!==null&&e.effectType===t&&this.matchesSearch(e));return this.mode===`purchase`?n.filter(e=>e.relationship===`purchasable`):n.filter(e=>e.relationship===`owned`)}visiblePurchaseItems(e){let t=this.tabbed?this.activeType:this.effectType;return(t?[t]:r).flatMap(t=>{let n=this.itemsForType(e,t);return t===`nukeExplosion`?n.filter(e=>this.nukeTypeOf(e)===this.activeNukeType):n})}emitVisiblePurchaseItems(e){this.mode===`purchase`&&this.onVisiblePurchaseItemsChange?.(this.visiblePurchaseItems(e??this.resolvedItems()))}updated(e){(e.has(`cosmetics`)||e.has(`userMeResponse`)||e.has(`affiliateCode`)||e.has(`mode`)||e.has(`search`)||e.has(`effectType`)||e.has(`tabbed`))&&this.emitVisiblePurchaseItems(this.renderedItems)}renderTile(e,t){if(this.mode===`purchase`)return c`<cosmetic-card
        data-store-product
        class="block h-full min-w-0"
        .resolved=${t}
        state=${t.key===this.focusedKey?`focused`:`idle`}
        .onActivate=${()=>this.onPurchaseFocus?.(t)}
        .actionContent=${this.renderPurchaseAction?.(t)??d}
      ></cosmetic-card>`;let n=t.cosmetic?.name??null,r=this.userSettings.getSelectedEffectName(e);return c`<cosmetic-card
      .resolved=${t}
      state=${n===null&&r===null||n!==null&&r===n?`equipped`:`idle`}
      .onActivate=${()=>this.select(e,n,t)}
    ></cosmetic-card>`}nukeTypeOf(e){let t=e.cosmetic;return t&&m(t)?t.attributes.nukeType:null}renderNukeTypeTabBar(){return c`
      <div class="flex items-center justify-center gap-2 px-4 pt-3">
        ${l.map(e=>c`<button
            class="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider transition-colors ${this.activeNukeType===e?`bg-blue-600 text-white`:`bg-white/5 text-white/50 hover:text-white/80 hover:bg-white/10`}"
            @click=${()=>this.selectNukeType(e)}
          >
            ${n(`effects.nukeType.${e}`)}
          </button>`)}
      </div>
    `}renderTabBar(){return c`
      <div
        class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-b border-white/10 px-4"
      >
        ${r.map(e=>c`<button
            class="-mb-px max-w-full shrink-0 whitespace-normal border-b-2 px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${this.activeType===e?`border-malibu-blue text-aquarius`:`border-transparent text-white/40 hover:text-white/70`}"
            @click=${()=>this.selectEffectType(e)}
          >
            ${n(`effects.type.${e}`)}
          </button>`)}
      </div>
    `}renderUnequip(){if(this.mode!==`select`||!this.tabbed&&this.effectType===null)return d;let e=this.activeSlot();return c`<div class="flex justify-end px-4 pt-3">
      <button
        type="button"
        data-effects-unequip
        ?disabled=${this.userSettings.getSelectedEffectName(e)===null}
        class="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-black uppercase tracking-wider text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
        @click=${()=>this.select(e,null)}
      >
        ${n(`inventory.unequip`)}
      </button>
    </div>`}render(){let e=this.resolvedItems();this.renderedItems=e;let t=this.tabbed?this.activeType:this.effectType,i=t?[t]:r,a=t===`nukeExplosion`,o=i.map(t=>{let n=this.itemsForType(e,t);return t===`nukeExplosion`&&(n=n.filter(e=>this.nukeTypeOf(e)===this.activeNukeType)),{type:t,items:n}}).filter(e=>e.items.length>0),s;s=o.length===0?t&&this.mode===`select`?c`<p
              data-effects-empty=${t}
              class="px-4 pt-4 pb-8 text-center text-sm font-medium text-white/60"
            >
              ${n(`inventory.no_owned_effects_of_type`,{type:n(`effects.type.${t}`)})}
            </p>`:t?c`<div class="p-4"></div>`:c`<div
                class="text-white/40 text-sm font-bold uppercase tracking-wider text-center py-8"
              >
                ${n(`store.no_effects`)}
              </div>`:c`
        <div class="flex flex-col gap-4 p-4">
          ${o.map(e=>{let r=this.pages.page(`effects-${e.type}`,`${this.mode}:${this.activeNukeType}:${this.search}`,e.items);return c`
              <div class="flex flex-col">
                ${t?d:c`<h3
                        class="text-white/70 text-sm font-black uppercase tracking-wider px-2 pb-2 mb-2 border-b border-white/10"
                      >
                        ${n(`effects.type.${e.type}`)}
                      </h3>`}
                ${!t&&e.type===`nukeExplosion`?this.renderNukeTypeTabBar():d}
                <div
                  data-effects-items
                  class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                >
                  ${r.items.map(t=>this.renderTile(this.slotForTile(e.type,t),t))}
                  ${r.more}
                </div>
              </div>
            `})}
        </div>
      `;let l=a?this.renderNukeTypeTabBar():d,u=this.renderUnequip();return this.tabbed?c`${this.renderTabBar()}${l}${u}${s}`:c`${l}${u}${s}`}};v([e({attribute:!1})],j.prototype,`cosmetics`,void 0),v([e({attribute:!1})],j.prototype,`userMeResponse`,void 0),v([e({type:String})],j.prototype,`mode`,void 0),v([e({attribute:!1})],j.prototype,`affiliateCode`,void 0),v([e({type:String})],j.prototype,`search`,void 0),v([e({type:String})],j.prototype,`effectType`,void 0),v([e({type:Boolean})],j.prototype,`tabbed`,void 0),v([e({attribute:!1})],j.prototype,`onActiveSlotChange`,void 0),v([e({attribute:!1})],j.prototype,`onPurchaseFocus`,void 0),v([e({attribute:!1})],j.prototype,`onVisiblePurchaseItemsChange`,void 0),v([e({attribute:!1})],j.prototype,`renderPurchaseAction`,void 0),v([e({type:String})],j.prototype,`focusedKey`,void 0),v([i()],j.prototype,`activeType`,void 0),v([i()],j.prototype,`activeNukeType`,void 0),j=v([a(`effects-grid`)],j);export{A as t};