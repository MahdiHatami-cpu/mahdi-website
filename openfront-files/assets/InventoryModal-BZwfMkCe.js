import{$i as e,$t as t,Gn as n,Ji as r,Nr as i,Qt as a,Wi as o,Xi as s,Yi as c,Yn as l,Za as u,Zi as d,aa as f,di as p,er as m,fa as h,ha as g,hi as _,ma as v,na as y,oa as b,po as x,sa as S,tr as C}from"./index-rCDaHnQd.js";import{c as w,i as T}from"./CosmeticPreview-CUDLYxXw.js";import{t as E}from"./SignedOutNotice-A7EUe2ks.js";import{t as D}from"./countries-BujGDUYm.js";import"./CosmeticCard-Qw8O0qJO.js";import{t as O}from"./EffectsGrid-CtIAjL2H.js";var k=class extends d{constructor(...e){super(...e),this.entries=[],this.activeCategory=`skins`}createRenderRoot(){return this}renderPreviews(t){let n=t.category===`effects`?t.items.slice(0,3):t.items.slice(0,1),r=t.items.length-n.length;return y`<div
      data-loadout-previews
      class="flex h-10 items-center justify-center ${t.category===`effects`?`-space-x-3`:``}"
    >
      ${n.map((n,r)=>y`<div
            data-loadout-preview
            class="h-10 w-10 overflow-hidden rounded-lg border border-white/20 bg-black/30 p-1 ${t.category===`effects`?`relative`:``}"
            style=${t.category===`effects`?`z-index:${3-r}`:e}
          >
            <cosmetic-preview .resolved=${n}></cosmetic-preview>
          </div>`)}
      ${r>0?y`<span
              data-loadout-more
              class="relative z-10 flex h-7 min-w-7 items-center justify-center rounded-full border border-white/20 bg-slate-800 px-1 text-xs font-black text-white"
              >+${r}</span
            >`:e}
    </div>`}render(){return y`<section
      data-inventory-loadout
      aria-label=${o(`inventory.loadout`)}
    >
      <h2 class="sr-only">${o(`inventory.loadout`)}</h2>
      <div class="overflow-x-auto overflow-y-visible px-3 py-2">
        <div class="mx-auto flex w-max min-w-max gap-3">
          ${this.entries.map(e=>{let t=e.category===this.activeCategory,n=e.category===`effects`?o(`inventory.showing_effects`,{count:e.items.length}):e.summary;return y`<button
              type="button"
              data-loadout-category=${e.category}
              aria-pressed=${t?`true`:`false`}
              aria-label=${o(`inventory.loadout_category_label`,{category:e.label,summary:n})}
              class="flex min-h-24 min-w-36 flex-col items-center justify-center gap-1 rounded-xl border p-3 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${t?`border-blue-400 bg-blue-500/20 text-white`:`border-white/10 bg-white/5 text-white/75 hover:bg-white/10`}"
              @click=${()=>this.onCategorySelect?.(e.category)}
            >
              ${this.renderPreviews(e)}
              <span class="text-sm font-bold">${e.label}</span>
              <span class="text-xs text-white/60">${e.summary}</span>
            </button>`})}
        </div>
      </div>
    </section>`}};_([c({attribute:!1})],k.prototype,`entries`,void 0),_([c({type:String})],k.prototype,`activeCategory`,void 0),_([c({attribute:!1})],k.prototype,`onCategorySelect`,void 0),k=_([s(`inventory-loadout-bar`)],k);var A=class extends d{constructor(...e){super(...e),this.names=[],this.active=``,this.canAdd=!1,this.canUnequip=!1}createRenderRoot(){return this}renderSlot(t){let n=t===this.active;return y`<div
      class="flex items-stretch overflow-hidden rounded-lg border ${n?`border-blue-400 bg-blue-500/20`:`border-white/15 bg-white/5`}"
    >
      <button
        type="button"
        data-loadout-slot=${t}
        aria-pressed=${n?`true`:`false`}
        aria-label=${o(`inventory.loadout_slot`,{name:t})}
        class="px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-colors ${n?`text-white`:`text-white/75 hover:bg-white/10`}"
        @click=${()=>this.onSelect?.(t)}
      >
        ${t}
      </button>
      ${n?y`<button
              type="button"
              data-loadout-delete=${t}
              aria-label=${o(`inventory.loadout_delete_target`,{name:t})}
              class="border-l border-white/15 px-2 text-xs font-black text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              @click=${()=>this.onDelete?.(t)}
            >
              ✕
            </button>`:e}
    </div>`}render(){return y`<section
      data-inventory-loadout-menu
      aria-label=${o(`inventory.loadout_presets`)}
      class="flex flex-wrap items-center gap-2 px-3 pt-3"
    >
      ${this.names.map(e=>this.renderSlot(e))}
      <button
        type="button"
        data-loadout-add
        ?disabled=${!this.canAdd}
        aria-label=${o(`inventory.loadout_add`)}
        class="rounded-lg border border-dashed border-white/25 px-3 py-1.5 text-xs font-black text-white/75 transition-colors hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        @click=${()=>this.onAdd?.()}
      >
        +
      </button>
      <button
        type="button"
        data-inventory-unequip-all
        ?disabled=${!this.canUnequip}
        class="ml-auto rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
        @click=${()=>this.onUnequipAll?.()}
      >
        ${o(`inventory.unequip_all`)}
      </button>
    </section>`}};_([c({attribute:!1})],A.prototype,`names`,void 0),_([c({type:String})],A.prototype,`active`,void 0),_([c({type:Boolean})],A.prototype,`canAdd`,void 0),_([c({type:Boolean})],A.prototype,`canUnequip`,void 0),_([c({attribute:!1})],A.prototype,`onSelect`,void 0),_([c({attribute:!1})],A.prototype,`onAdd`,void 0),_([c({attribute:!1})],A.prototype,`onDelete`,void 0),_([c({attribute:!1})],A.prototype,`onUnequipAll`,void 0),A=_([s(`inventory-loadout-menu`)],A);function j(e,t){return{name:e,url:x(`/flags/${t}.svg`),product:null,rarity:`common`,affiliateCode:null}}var M=class extends t{constructor(...e){super(...e),this.routerName=`inventory`,this.search=``,this.isLoading=!1,this.loadFailed=!1,this.ownershipState=`loading`,this.previewingCosmetic=null,this.cosmetics=null,this.userSettings=new g,this.userMeResponse=!1,this.catalogLoad=null,this.inventoryLoadId=0,this.ownershipLoadId=0,this.countryFlagTiles=D.filter(e=>e.code!==`xx`&&e.restricted!==!0).map(e=>({type:`flag`,cosmetic:j(e.name,e.code),colorPalette:null,relationship:`owned`,key:`country:${e.code}`})),this.pages=new O(this),this._onCosmeticSelected=()=>this.updateFromSettings(),this._onUserMe=e=>{this.onUserMe(e.detail)},this.onOpenCosmeticPreview=e=>{let t=e;this.previewingCosmetic=t.detail}}modalConfig(){return{showScrollToTop:!0,hideTabs:!0,tabs:[{key:`skins`,label:o(`store.patterns`)},{key:`flags`,label:o(`store.flags`)},{key:`crowns`,label:o(`store.crowns`)},{key:`effects`,label:o(`store.effects`)}]}}connectedCallback(){super.connectedCallback(),document.addEventListener(`userMeResponse`,this._onUserMe),this.addEventListener(`open-cosmetic-preview`,this.onOpenCosmeticPreview),window.addEventListener(`${v}:${h}`,this._onCosmeticSelected),window.addEventListener(`${v}:${S}`,this._onCosmeticSelected),window.addEventListener(`${v}:${f}`,this._onCosmeticSelected),window.addEventListener(`${v}:${b}`,this._onCosmeticSelected)}disconnectedCallback(){this.removeEventListener(`open-cosmetic-preview`,this.onOpenCosmeticPreview),super.disconnectedCallback(),document.removeEventListener(`userMeResponse`,this._onUserMe),window.removeEventListener(`${v}:${h}`,this._onCosmeticSelected),window.removeEventListener(`${v}:${S}`,this._onCosmeticSelected),window.removeEventListener(`${v}:${f}`,this._onCosmeticSelected),window.removeEventListener(`${v}:${b}`,this._onCosmeticSelected)}updateFromSettings(){this.requestUpdate()}async loadOwnership(e){let t=++this.ownershipLoadId;if(e!==void 0&&e!==!1){this.userMeResponse=e,this.ownershipState=`loaded`;return}try{let n=await p();if(t!==this.ownershipLoadId)return;if(n===!1){this.userMeResponse=!1,this.ownershipState=`guest`;return}let r=e===!1?!1:await i();if(t!==this.ownershipLoadId)return;if(r===!1){this.userMeResponse=!1,this.ownershipState=`error`;return}this.userMeResponse=r,this.ownershipState=`loaded`}catch{if(t!==this.ownershipLoadId)return;this.userMeResponse=!1,this.ownershipState=`error`}}loadCatalog(){if(this.catalogLoad!==null)return this.catalogLoad;let e=n().finally(()=>{this.catalogLoad===e&&(this.catalogLoad=null)});return this.catalogLoad=e,e}async loadInventory(e){let t=++this.inventoryLoadId;this.isLoading=!0,this.loadFailed=!1,this.ownershipState=`loading`;try{let[n]=await Promise.all([this.loadCatalog(),this.loadOwnership(e)]);if(t!==this.inventoryLoadId)return;this.cosmetics=n,this.loadFailed=n===null}catch{if(t!==this.inventoryLoadId)return;this.cosmetics=null,this.loadFailed=!0,this.ownershipState===`loading`&&(this.ownershipState=`error`)}finally{t===this.inventoryLoadId&&(this.isLoading=!1,this.updateFromSettings())}}async onUserMe(e){await this.loadInventory(e)}includedInSearch(e){return e.replace(/_/g,` `).toLowerCase().includes(this.search.toLowerCase())}handleSearch(e){this.search=e.target.value}hasOwnedCatalogItem(e){return this.resolvedItems().some(t=>e.includes(t.type)&&t.cosmetic!==null&&t.relationship===`owned`)}resolvedItems(){if(this.resolvedCache?.cosmetics===this.cosmetics&&this.resolvedCache.userMeResponse===this.userMeResponse)return this.resolvedCache.items;let e=m(this.cosmetics,this.userMeResponse,null);return this.resolvedCache={cosmetics:this.cosmetics,userMeResponse:this.userMeResponse,items:e},e}equippedSkin(){let e=this.resolvedItems(),t=this.userSettings.getSelectedSkinName();if(t!==null)return e.find(e=>e.type===`skin`&&e.cosmetic?.name===t)??null;let n=this.userSettings.getSelectedPatternName(this.cosmetics);return n===null?null:e.find(e=>e.type===`pattern`&&e.cosmetic?.name===n.name&&(e.colorPalette?.name??null)===(n.colorPalette?.name??null))??null}equippedFlag(){let e=this.userSettings.getFlag();return e===null?null:this.resolvedItems().find(t=>t.type===`flag`&&t.key===e)??this.countryFlagTiles.find(t=>t.key===e)??null}equippedCrown(){let e=this.userSettings.getSelectedCrownName();return e===null?null:this.resolvedItems().find(t=>t.type===`crown`&&t.cosmetic?.name===e)??null}effectSlotFor(e){if(e.type!==`effect`||e.cosmetic===null)return null;let t=e.cosmetic;return u(t)?t.attributes.nukeType:e.effectType??null}equippedEffects(){let e=this.userSettings.getSelectedEffects();return this.resolvedItems().filter(t=>t.type===`effect`&&t.cosmetic!==null&&this.effectSlotFor(t)!==null&&e[this.effectSlotFor(t)]===t.cosmetic.name)}loadoutEntries(){let e=this.equippedEffects();return[...[{category:`skins`,label:o(`store.patterns`),item:this.equippedSkin()},{category:`flags`,label:o(`store.flags`),item:this.equippedFlag()},{category:`crowns`,label:o(`store.crowns`),item:this.equippedCrown()}].map(({category:e,label:t,item:n})=>({category:e,label:t,items:n?[n]:[],summary:n?T(n):``})),{category:`effects`,label:o(`store.effects`),items:e,summary:o(`inventory.showing_effects`,{count:e.length})}]}loadoutNames(){return this.userSettings.getLoadouts().map(e=>e.name).sort()}hasEquippedCosmetic(){let e=this.userSettings.captureLoadout(``);return e.pattern!==null||e.flag!==null||e.crown!==null||Object.keys(e.effects).length>0}renderLoadoutMenu(){let e=this.loadoutNames();return y`<inventory-loadout-menu
      .names=${e}
      .active=${this.userSettings.getActiveLoadout()??``}
      .canAdd=${e.length<10}
      .canUnequip=${this.hasEquippedCosmetic()}
      .onSelect=${e=>this.applyLoadout(e)}
      .onAdd=${()=>this.addLoadout()}
      .onDelete=${e=>this.deleteLoadout(e)}
      .onUnequipAll=${()=>this.unequipAll()}
    ></inventory-loadout-menu>`}applyLoadout(e){this.userSettings.getActiveLoadout()!==e&&this.userSettings.applyLoadout(e)&&(this.showMessage(o(`inventory.loadout_applied`,{name:e})),this.updateFromSettings())}addLoadout(){let e=this.userSettings.addLoadout();if(e===null){this.showMessage(o(`inventory.loadout_limit`,{count:10}));return}this.showMessage(o(`inventory.loadout_saved`,{name:e.name})),this.updateFromSettings()}deleteLoadout(e){this.userSettings.deleteLoadout(e),this.showMessage(o(`inventory.loadout_deleted`,{name:e})),this.updateFromSettings()}unequipAll(){this.userSettings.unequipAll(),this.showMessage(o(`inventory.unequipped_all`)),this.updateFromSettings()}renderEmptyState(e){return y`<p
      data-inventory-empty=${e}
      class="px-4 pt-4 text-center text-sm font-medium text-white/60"
    >
      ${o(`inventory.no_owned_${e}`)}
    </p>`}renderSkinGrid(){let e=this.resolvedItems().filter(e=>(e.type===`pattern`||e.type===`skin`)&&e.relationship===`owned`&&e.cosmetic!==null&&this.includedInSearch(e.cosmetic.name)),t=this.pages.page(`inventory-skins`,this.search,l(e)),n=this.equippedSkin()?.key;return y`
      ${this.hasOwnedCatalogItem([`pattern`,`skin`])?null:this.renderEmptyState(`skins`)}
      <div
        data-inventory-grid="skins"
        class="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        ${t.items.map(e=>{let t=e.find(e=>e.key===n),r=t??e[0];return y`
            <cosmetic-card
              .resolved=${r}
              .variants=${e}
              .activeVariantKey=${r.key}
              state=${t?`equipped`:`idle`}
              .onActivate=${e=>this.selectCosmetic(e)}
              .onVariantActivate=${e=>this.selectCosmetic(e)}
            ></cosmetic-card>
          `})}
        ${t.more}
      </div>
    `}renderCrownGrid(){let e=this.resolvedItems().filter(e=>e.type===`crown`&&e.relationship===`owned`&&e.cosmetic!==null&&this.includedInSearch(e.cosmetic.name)),t=this.pages.page(`inventory-crowns`,this.search,e),n=this.equippedCrown()?.key;return y`
      ${this.hasOwnedCatalogItem([`crown`])?null:this.renderEmptyState(`crowns`)}
      <div
        data-inventory-grid="crowns"
        class="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        ${t.items.map(e=>y`
            <cosmetic-card
              .resolved=${e}
              state=${e.key===n?`equipped`:`idle`}
              .onActivate=${()=>this.selectCrown(e)}
            ></cosmetic-card>
          `)}
        ${t.more}
      </div>
    `}renderFlagGrid(){let e=this.equippedFlag()?.key,t=this.resolvedItems().filter(e=>e.type===`flag`&&e.relationship===`owned`&&e.cosmetic!==null&&this.includedInSearch(e.cosmetic.name)),n=this.countryFlagTiles.filter(e=>this.includedInSearch(e.cosmetic.name)||this.includedInSearch(e.key.slice(8))),r=this.pages.page(`inventory-flags`,this.search,[...t,...n]);return y`
      <div
        data-inventory-grid="flags"
        class="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        ${r.items.map(t=>y`
            <cosmetic-card
              .resolved=${t}
              state=${e===t.key?`equipped`:`idle`}
              .onActivate=${()=>this.selectFlag(t)}
            ></cosmetic-card>
          `)}
        ${r.more}
      </div>
    `}renderUnequip(e){return y`<div class="flex justify-end px-3 pt-3">
      <button
        type="button"
        data-inventory-unequip
        ?disabled=${(e===`skins`?this.equippedSkin():e===`flags`?this.equippedFlag():this.equippedCrown())===null}
        class="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-black uppercase tracking-wider text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
        @click=${()=>{e===`skins`?this.userSettings.setSelectedPatternName(void 0):e===`flags`?this.userSettings.clearFlag(!0):this.userSettings.setSelectedCrownName(void 0)}}
      >
        ${o(`inventory.unequip`)}
      </button>
    </div>`}renderHeaderSlot(){let t=this.userMeResponse!==!1;return y`
      <div
        class="relative flex flex-col border-b border-white/10 pb-4 shrink-0"
      >
        ${a({title:o(`inventory.title`),onBack:()=>this.close(),ariaLabel:o(`common.back`),rightContent:y`<o-button
            data-inventory-header-action
            class="no-game-portal"
            variant=${t?`primary`:`danger`}
            size="sm"
            .translationKey=${t?`main.store`:`common.not_logged_in`}
            @click=${()=>{t?(this.close(),window.location.hash=`modal=store&tab=cosmetics`):window.showPage?.(`page-account`)}}
          ></o-button>`})}

        <div class="md:flex items-center gap-2 justify-center mt-4">
          <input
            class="h-12 w-full max-w-md border border-white/10 bg-black/60
              rounded-xl shadow-inner text-xl text-center focus:outline-none
              focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-white placeholder-white/30 transition-all"
            type="text"
            placeholder=${o(`cosmetics.search`)}
            .value=${this.search}
            @change=${this.handleSearch}
            @keyup=${this.handleSearch}
          />
        </div>
      </div>
      ${this.previewingCosmetic?y`<cosmetic-preview-modal
              .resolved=${this.previewingCosmetic}
              @close-preview=${()=>{this.previewingCosmetic=null}}
            ></cosmetic-preview-modal>`:e}
    `}renderBody(t){if(!this.isModalOpen)return y``;if(this.isLoading||this.ownershipState===`loading`)return y`<div data-inventory-state="loading" aria-busy="true">
        <span class="sr-only">${o(`inventory.loading`)}</span>
        <div
          data-inventory-skeleton="loadout"
          class="mx-3 my-2 h-28 animate-pulse rounded-xl bg-white/5"
        ></div>
        <div
          data-inventory-skeleton="grid"
          class="mx-3 grid grid-cols-2 gap-3 sm:grid-cols-3"
        >
          ${Array.from({length:6},()=>y`<div
                class="aspect-square animate-pulse rounded-xl bg-white/5"
              ></div>`)}
        </div>
      </div>`;if(this.loadFailed||this.ownershipState===`error`)return y`<div
        data-inventory-state="error"
        class="flex flex-col items-center gap-4 p-8 text-center text-red-300"
      >
        <p>${o(`inventory.load_failed`)}</p>
        <button
          type="button"
          data-inventory-retry
          ?disabled=${this.isLoading}
          class="rounded-lg bg-blue-600 px-4 py-2 font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
          @click=${e=>{this.isLoading||(e.currentTarget.disabled=!0,this.loadInventory())}}
        >
          ${o(`inventory.retry`)}
        </button>
      </div>`;let n;n=t===`flags`?y`${this.renderUnequip(`flags`)}${this.renderFlagGrid()}`:t===`crowns`?y`${this.renderUnequip(`crowns`)}${this.renderCrownGrid()}`:t===`effects`?y`<div data-inventory-grid="effects" class="min-w-0">
        <effects-grid
          mode="select"
          tabbed
          .cosmetics=${this.cosmetics}
          .userMeResponse=${this.userMeResponse}
          .search=${this.search}
        ></effects-grid>
      </div>`:y`${this.renderUnequip(`skins`)}${this.renderSkinGrid()}`;let r=t;return y`
      ${this.ownershipState===`guest`?y`<div data-inventory-sign-in>
              ${E(()=>window.showPage?.(`page-account`),o(`inventory.sign_in_for_cosmetics`))}
            </div>`:e}
      ${this.renderLoadoutMenu()}
      <inventory-loadout-bar
        .entries=${this.loadoutEntries()}
        .activeCategory=${r}
        .onCategorySelect=${e=>this.setActiveTab(e)}
      ></inventory-loadout-bar>
      <div class="px-3 pb-3">${n}</div>
    `}open(e){let t=this.modalConfig().tabs??[],n=(typeof e?.tab==`string`&&t.some(t=>t.key===e.tab)?e.tab:null)??(this.activeTab||t[0]?.key);super.open({...e,...n?{tab:n}:{}})}async onOpen(){if(this.ownershipState===`loading`||this.cosmetics===null&&!this.loadFailed){await this.loadInventory();return}this.updateFromSettings()}onClose(){this.search=``,this.previewingCosmetic=null,this.pages.reset()}onTabEnter(e){this.search=``}selectCosmetic(e){e.type===`pattern`?this.selectPattern(C(e),e):e.type===`skin`&&(this.selectSkin(e.cosmetic?.name??null),this.showSelectedPopup(e))}selectSkin(e){this.userSettings.setSelectedPatternName(e===null?void 0:`skin:${e}`)}selectCrown(e){this.userSettings.setSelectedCrownName(e.cosmetic?.name??void 0),this.showSelectedPopup(e)}selectFlag(e){this.userSettings.setFlag(e.key),this.showSelectedPopup(e)}selectPattern(e,t){if(e===null)this.userSettings.setSelectedPatternName(void 0);else{let t=e.colorPalette?.name===void 0?e.name:`${e.name}:${e.colorPalette.name}`;this.userSettings.setSelectedPatternName(`pattern:${t}`)}this.showSelectedPopup(t)}showSelectedPopup(e){this.showMessage(o(`inventory.selected_cosmetic`,{name:w(e)}))}showMessage(e){window.dispatchEvent(new CustomEvent(`show-message`,{detail:{message:e,duration:2e3}}))}async refresh(){this.requestUpdate()}};_([r()],M.prototype,`search`,void 0),_([r()],M.prototype,`isLoading`,void 0),_([r()],M.prototype,`loadFailed`,void 0),_([r()],M.prototype,`ownershipState`,void 0),_([r()],M.prototype,`previewingCosmetic`,void 0),M=_([s(`inventory-modal`)],M);export{M as InventoryModal};