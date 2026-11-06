import{$i as e,$n as t,$t as n,Gn as r,Ir as i,Ji as a,Kn as o,Mr as s,Nr as c,Pr as l,Qi as u,Qt as d,Wi as f,Xi as p,Yi as m,Yn as h,Zi as g,Zn as _,cn as v,cr as y,en as b,er as x,hi as S,ja as C,kr as w,lr as T,mi as E,na as D,or as O,pi as ee,pr as k,qi as A,sr as j,xo as M}from"./index-rCDaHnQd.js";import"./PlutoniumIcon-BCsjtlxw.js";import"./CurrencyDisplay-7HVmwG9f.js";import{t as N}from"./LeaderboardTribeTable-DdH13g_y.js";import{c as P,l as F}from"./CosmeticPreview-CUDLYxXw.js";import{r as I,t as L}from"./PurchaseButton-CCoC1ZVB.js";import{t as R}from"./CosmeticCard-Qw8O0qJO.js";import"./InsufficientCurrencyDialog-C2xuOuAf.js";import{t as z}from"./EffectsGrid-CtIAjL2H.js";var B=20,V=2e3,H=class extends g{constructor(...e){super(...e),this.amount=100,this.buy=async()=>{let e=j(await T({kind:`custom_currency`,hardAmount:this.amount}),`store.custom_currency_purchase_success`);e!==null&&await ee(e)}}createRenderRoot(){return this}clamp(e){return Number.isFinite(e)?Math.min(V,Math.max(B,Math.floor(e))):B}get priceDollars(){return(this.amount/20).toFixed(2)}onSlider(e){this.amount=this.clamp(Number(e.target.value))}onInputChange(e){this.amount=this.clamp(Number(e.target.value))}render(){let e=`$${this.priceDollars}`;return D`
      <article
        data-custom-currency-card
        data-cosmetic-shell
        data-cosmetic-rarity="common"
        style="background:linear-gradient(to top, rgba(80,80,80,0.55) 0%, rgba(15,15,20,0.85) 100%);border-color:rgba(255,255,255,0.15)"
        class="relative flex h-full w-full flex-col items-center overflow-visible rounded-xl border border-white/20 transition-all duration-200 ease-out hover:-translate-y-1 hover:z-10 hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]"
      >
        <span
          data-custom-currency-name
          class="w-full whitespace-normal break-words px-3 pt-3 text-center text-sm font-bold leading-tight text-white"
          >${f(`store.custom_amount`)}</span
        >

        <div
          data-cosmetic-main
          class="group relative flex w-full flex-col items-center gap-2 rounded-xl px-3 pb-3 pt-2"
        >
          <div
            data-custom-currency-preview
            class="relative flex w-full aspect-square flex-col items-center justify-center gap-1 overflow-hidden rounded-lg bg-white/5 p-2"
          >
            <plutonium-icon class="block shrink-0" .size=${64}></plutonium-icon>
            <label for="custom-plutonium-amount" class="sr-only"
              >${f(`store.plutonium_amount`)}</label
            >
            <input
              id="custom-plutonium-amount"
              type="number"
              class="custom-plutonium-input w-full min-w-0 max-w-24 text-center bg-black/30 border border-green-500/30 rounded px-1 py-0.5 text-lg font-black leading-none text-green-400 outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/40"
              aria-label=${f(`store.plutonium_amount`)}
              min=${B}
              max=${V}
              step="1"
              .value=${String(this.amount)}
              @change=${this.onInputChange}
            />
            <span
              class="text-[10px] font-bold leading-none text-white/50 uppercase"
              >${f(`cosmetics.hard`)}</span
            >
            <span
              data-custom-currency-price
              class="pt-0.5 text-sm font-bold leading-none text-blue-300"
              >${e}</span
            >
          </div>

          <input
            type="range"
            class="w-full accent-green-500 cursor-pointer"
            aria-label=${f(`store.plutonium_amount`)}
            min=${B}
            max=${V}
            step="1"
            .value=${String(this.amount)}
            @input=${this.onSlider}
          />
        </div>

        <div data-cosmetic-action class="mt-auto w-full px-3 pb-3 pt-2">
          <purchase-button
            class="block w-full"
            .dollarPrice=${e}
            .onPurchaseDollar=${this.buy}
            .inlineCheckout=${{request:{kind:`custom_currency`,hardAmount:this.amount},amountCents:this.amount*5,successMessageKey:`store.custom_currency_purchase_success`}}
          ></purchase-button>
        </div>
      </article>
    `}};S([a()],H.prototype,`amount`,void 0),H=S([p(`custom-currency-card`)],H);var U=class extends g{constructor(...e){super(...e),this.linked=null,this._onUserMe=e=>{this.linked=C(e.detail)}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),document.addEventListener(`userMeResponse`,this._onUserMe);let e=v();e!==null&&(this.linked=C(e.response))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`userMeResponse`,this._onUserMe)}render(){return this.linked===!1?D`<div class="no-game-portal flex items-center">
      <button
        class="px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 cursor-pointer hover:bg-red-500/30"
        data-i18n="common.not_logged_in"
        @click=${()=>{window.showPage?.(`page-account`)}}
      >
        ${f(`common.not_logged_in`)}
      </button>
    </div>`:D``}};S([a()],U.prototype,`linked`,void 0),U=S([p(`not-logged-in-warning`)],U);var W=class extends g{constructor(...t){super(...t),this.pack=null,this.actionContent=e,this.portal=null,this.onKeyDown=e=>{e.key===`Escape`&&this.close()},this.relayPreview=e=>{e.stopPropagation(),this.openPreview(e.detail)}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.portal=document.createElement(`div`),document.body.appendChild(this.portal),window.addEventListener(`keydown`,this.onKeyDown)}disconnectedCallback(){window.removeEventListener(`keydown`,this.onKeyDown),this.portal&&=(u(D``,this.portal),this.portal.remove(),null),super.disconnectedCallback()}close(){this.dispatchEvent(new CustomEvent(`close`))}openPreview(e){R(e)&&this.dispatchEvent(new CustomEvent(`open-cosmetic-preview`,{bubbles:!0,composed:!0,detail:e}))}render(){return this.portal&&u(this.pack?this.renderOverlay(this.pack):D``,this.portal),D``}renderOverlay(t){let n=t.cosmetic,r=t.packItems??[];return D`<div
      class="fixed inset-0 z-[10020] flex items-center justify-center bg-black/80"
      @click=${e=>{e.target===e.currentTarget&&this.close()}}
      @open-cosmetic-preview=${this.relayPreview}
    >
      <div
        data-pack-contents
        role="dialog"
        aria-label=${n.displayName}
        class="relative mx-4 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-surface p-6 shadow-2xl"
      >
        <button
          type="button"
          aria-label=${f(`common.close`)}
          @click=${()=>this.close()}
          class="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg text-xl leading-none text-white/50 transition-all hover:bg-white/10 hover:text-white"
        >
          ×
        </button>
        <h2 class="mb-1 pr-8 text-lg font-bold text-white">
          ${n.displayName}
        </h2>
        ${n.description?D`<p class="mb-4 text-sm text-white/60">
                ${n.description}
              </p>`:D`<div class="mb-4"></div>`}
        ${r.length===0?D`<p class="py-6 text-center text-sm text-white/50">
                ${f(`store.pack_no_items`)}
              </p>`:D`<div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
                ${r.map(e=>D`<div
                      data-pack-contents-item=${e.key}
                      class="flex min-w-0 flex-col items-center gap-1"
                    >
                      <cosmetic-card
                        class="block w-full"
                        .resolved=${e}
                        .onActivate=${e=>this.openPreview(e)}
                      ></cosmetic-card>
                      <span
                        data-pack-contents-type
                        class="text-[10px] font-bold uppercase tracking-wider text-white/50"
                        >${F(e)}</span
                      >
                    </div>`)}
              </div>`}
        ${this.actionContent===e?e:D`<div data-pack-contents-action class="mx-auto mt-4 max-w-xs">
                ${this.actionContent}
              </div>`}
      </div>
    </div>`}};S([m({attribute:!1})],W.prototype,`pack`,void 0),S([m({attribute:!1})],W.prototype,`actionContent`,void 0),W=S([p(`pack-contents-dialog`)],W);var G=class extends g{constructor(...e){super(...e),this.tribeName=``,this.stats=null,this.loadSeq=0}createRenderRoot(){return this}updated(e){e.has(`tribeName`)&&this.tribeName!==``&&this.load(this.tribeName)}async load(e){let t=++this.loadSeq;this.stats=null;let n=await w(e);t===this.loadSeq&&(this.stats=n)}renderFigures(e){return D`<div class="grid grid-cols-2 gap-2">
      <div
        class="bg-surface rounded-lg border border-white/10 px-3 py-2 flex flex-col"
      >
        <span
          class="text-[11px] font-bold uppercase tracking-wider text-white/40"
        >
          ${f(`store.tribe_stats_games`)}
        </span>
        <span class="font-mono text-lg text-white">
          ${e.gamesAppeared.toLocaleString()}
        </span>
      </div>
      <div
        class="bg-surface rounded-lg border border-white/10 px-3 py-2 flex flex-col"
        title=${f(`leaderboard_modal.tribes_reach_value_tooltip`,{count:e.playerReach.toLocaleString()})}
      >
        <span
          class="text-[11px] font-bold uppercase tracking-wider text-white/40"
        >
          ${f(`leaderboard_modal.tribes_reach`)}
        </span>
        <span class="font-mono text-lg text-white">
          ${e.playerReach.toLocaleString()}
        </span>
      </div>
    </div>`}renderStats(e){let t=N(e.window.start),n=N(e.window.end),r=t!==null&&n!==null?f(`store.tribe_stats_window`,{days:e.window.days,start:t,end:n}):f(`store.tribe_stats_window_short`,{days:e.window.days});return D`<div class="flex flex-col gap-4">
      <div class="flex items-center gap-2 text-sm">
        <span class="text-white/40 font-medium">
          ${f(`store.tribe_stats_owner`)}
        </span>
        <player-name
          class="min-w-0"
          .username=${e.ownerUsername}
          .publicId=${e.ownerPublicId}
        ></player-name>
      </div>
      <section class="flex flex-col gap-2">
        <h3 class="text-xs font-bold uppercase tracking-wider text-white/60">
          ${r}
        </h3>
        ${this.renderFigures(e.window)}
      </section>
      <section class="flex flex-col gap-2">
        <h3 class="text-xs font-bold uppercase tracking-wider text-white/60">
          ${f(`store.tribe_stats_lifetime`)}
        </h3>
        ${this.renderFigures(e.lifetime)}
      </section>
    </div>`}renderBody(){return this.stats===null?b():this.stats===!1?D`<p class="text-sm font-medium text-red-400">
        ${f(`store.tribe_stats_failed`)}
      </p>`:this.renderStats(this.stats)}renderBoostedBadge(){if(this.stats===null||this.stats===!1)return e;let t=this.stats.activeBoosts;return t===0?e:D`<span
      class="shrink-0 text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 rounded px-2 py-0.5"
    >
      ${f(`store.tribe_stats_boosted`,{multiplier:t+1})}
    </span>`}render(){return D`<div class="flex flex-col gap-4">
      ${d({titleContent:D`<span
          class="text-white text-xl font-bold tracking-wide break-words hyphens-auto min-w-0 inline-flex items-center gap-2"
        >
          ${this.stats!==null&&this.stats!==!1?this.stats.name:this.tribeName} ${this.renderBoostedBadge()}
        </span>`,onBack:()=>this.dispatchEvent(new CustomEvent(`back`)),ariaLabel:f(`common.back`),padded:!1,showDivider:!1})}
      ${this.renderBody()}
    </div>`}};S([m({attribute:!1})],G.prototype,`tribeName`,void 0),S([a()],G.prototype,`stats`,void 0),G=S([p(`tribe-stats-view`)],G);var K,q=100,J={pending:`active`,live:`active`,rejected:`rejected`,revoked:`rejected`},Y={active:{labelKey:`store.tribe_status_active`,classes:`bg-green-500/20 text-green-300 border-green-500/30`},rejected:{labelKey:`store.tribe_status_rejected`,classes:`bg-red-500/20 text-red-300 border-red-500/30`}},X=K=class extends g{constructor(...e){super(...e),this.userMeResponse=!1,this.data=null,this.purchasing=!1,this.notice=null,this.tribeNamesConfig=null,this.boostingId=null,this.boostNotice=null,this.insufficientInfo=null,this.statsName=null,this.loadStarted=!1,this.submit=async e=>{if(e.preventDefault(),this.purchasing)return;let t=this.input?.value.trim()??``;if(t.length===0){this.notice={kind:`error`,text:f(`store.tribe_name_required`)};return}if(this.hardBalance<0){this.notice={kind:`error`,text:this.debtText(-this.hardBalance)};return}this.purchasing=!0,this.notice=null;let n=await i(t);if(this.purchasing=!1,n.ok){this.input&&(this.input.value=``),this.notice={kind:`success`,text:f(`store.tribe_purchase_live`,{name:n.data.displayName})},await this.refreshAfterPurchase();return}if(n.code===`debt`){this.notice={kind:`error`,text:f(`store.pack_debt`,{debt:n.debt})},await this.refreshAfterPurchase();return}if(n.code===`insufficient_balance`){let e=await this.refreshAfterPurchase(),n=this.price;if(n===null||e===!1){this.notice={kind:`error`,text:f(`store.purchase_failed`)};return}let r=K.hardBalanceOf(e),i=K.balanceOutcome(r,n);if(i!==`shortfall`){this.notice={kind:`error`,text:i===`debt`?this.debtText(-r):f(`store.purchase_failed`)};return}this.showInsufficient(t,n,r);return}if(n.code===`duplicate`){this.notice={kind:`error`,text:f(`store.tribe_duplicate`)};return}if(n.code===`rate_limited`){let e=n.retryAfterSeconds;this.notice={kind:`error`,text:e&&e>0?f(`store.tribe_rate_limited`,{seconds:e}):f(`store.purchase_failed`)};return}this.notice={kind:`error`,text:K.refusalText(n)}},this.boost=async e=>{let t=this.tribeNamesConfig;if(t===null||this.boostingId!==null)return;let n=t.boostPriceHard;if(this.hardBalance<0){this.boostNotice={kind:`error`,text:this.debtText(-this.hardBalance)};return}if(this.hardBalance<n){this.showInsufficient(e.displayName,n,this.hardBalance);return}if(!await E(f(`store.tribe_boost_confirm`,{name:e.displayName,price:n,days:t.boostDurationDays}),{heading:f(`store.tribe_boost_heading`),variant:`warning`}))return;this.boostingId=e.id,this.boostNotice=null;let r=await k(e.id,crypto.randomUUID());if(this.boostingId=null,r.ok){this.boostNotice={kind:`success`,text:f(`store.tribe_boost_success`,{name:e.displayName})},await this.refreshAfterPurchase();return}if(r.code===`debt`){this.boostNotice={kind:`error`,text:f(`store.pack_debt`,{debt:r.debt})},await this.refreshAfterPurchase();return}if(r.code===`insufficient_balance`){let t=await this.refreshAfterPurchase();if(t===!1){this.boostNotice={kind:`error`,text:f(`store.tribe_boost_failed`)};return}let r=K.hardBalanceOf(t),i=K.balanceOutcome(r,n);if(i!==`shortfall`){this.boostNotice={kind:`error`,text:i===`debt`?this.debtText(-r):f(`store.tribe_boost_failed`)};return}this.showInsufficient(e.displayName,n,r);return}if(r.code===`not_found`){this.boostNotice={kind:`error`,text:f(`store.tribe_boost_gone`)},await this.load();return}this.boostNotice={kind:`error`,text:f(`store.tribe_boost_failed`)}}}createRenderRoot(){return this}updated(){!this.loadStarted&&this.userMeResponse!==!1&&(this.loadStarted=!0,this.load())}async load(){let[e,t]=await Promise.all([s(),r()]);this.data=e,this.tribeNamesConfig=t?.tribeNames??null}get price(){return this.tribeNamesConfig?.priceHard??null}get hardBalance(){return this.userMeResponse===!1?0:this.userMeResponse.player.currency?.hard??0}async refreshAfterPurchase(){await this.load(),l();let e=await c();return e===!1?!1:(document.dispatchEvent(new CustomEvent(`userMeResponse`,{detail:e,bubbles:!0,cancelable:!0})),e)}static hardBalanceOf(e){return e===!1?0:e.player.currency?.hard??0}static balanceOutcome(e,t){return e<0?`debt`:t-e<=0?`unexplained`:`shortfall`}static refusalText(e){switch(e.code){case`length`:return f(`store.tribe_name_length`,{min:e.min,max:e.max});case`invalid_charset`:return f(`store.tribe_name_charset`);case`invalid_no_letter`:return f(`store.tribe_name_no_letter`);case`not_allowed`:return f(`store.tribe_name_not_allowed`);default:return f(`store.purchase_failed`)}}debtText(e){return f(`store.pack_debt`,{debt:String(e)})}showInsufficient(e,t,n){this.insufficientInfo={currency:f(`cosmetics.hard`),shortfall:Math.max(1,t-n),item:e,canTopUp:!0}}renderLoginPrompt(){return D`<div
      class="flex flex-col items-center justify-center gap-4 py-16 text-center"
    >
      <p class="text-white/60 font-medium">
        ${f(`store.tribes_login_required`)}
      </p>
      <button
        class="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer"
        @click=${()=>window.showPage?.(`page-account`)}
      >
        ${f(`main.sign_in`)}
      </button>
    </div>`}renderPurchaseCard(){let e=this.price;return D`<section
      class="bg-surface rounded-xl border border-white/10 p-6 flex flex-col gap-3"
    >
      <h3 class="text-lg font-bold text-white">
        ${f(`store.tribes_purchase_heading`)}
      </h3>
      <p class="text-white/60 text-sm leading-relaxed">
        ${f(`store.tribes_purchase_description`)}
      </p>
      <form class="flex flex-col sm:flex-row gap-2" @submit=${this.submit}>
        <label for="tribe-name-input" class="sr-only"
          >${f(`store.tribe_name_placeholder`)}</label
        >
        <input
          id="tribe-name-input"
          type="text"
          maxlength=${q}
          placeholder=${f(`store.tribe_name_placeholder`)}
          class="flex-1 min-w-0 bg-black/30 border border-white/10 rounded px-3 py-2 text-white outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/40"
          ?disabled=${this.purchasing}
        />
        <button
          type="submit"
          class="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded px-4 py-2 whitespace-nowrap transition-colors cursor-pointer"
          ?disabled=${this.purchasing||e===null}
        >
          ${f(`store.purchase_tribe_button`)}
          ${e===null?``:D`<span class="flex items-center gap-1">
                  <plutonium-icon .size=${18}></plutonium-icon>${e}
                </span>`}
        </button>
      </form>
      ${this.notice?D`<p
              class="text-sm font-medium ${this.notice.kind===`success`?`text-green-400`:`text-red-400`}"
            >
              ${this.notice.text}
            </p>`:``}
    </section>`}renderBoostStatus(t){let n=t.activeBoosts??0;if(n===0)return e;let r=n===1?f(`store.tribe_boost_count`):f(`store.tribe_boost_count_plural`,{count:n}),i=t.boostExpiresAt?new Date(t.boostExpiresAt):null,a=i!==null&&!Number.isNaN(i.getTime())?i.toLocaleDateString(void 0,{month:`short`,day:`numeric`}):null;return D`<span class="text-xs text-amber-300 mt-0.5">
      ${r}${a?D` ·
            ${f(`store.tribe_boost_next_expiry`,{date:a})}`:``}
    </span>`}renderBoostButton(t){let n=this.tribeNamesConfig;return n===null||J[t.status]!==`active`?e:D`<button
      class="shrink-0 flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold uppercase tracking-wider rounded px-2.5 py-1.5 transition-colors cursor-pointer"
      ?disabled=${this.boostingId!==null}
      @click=${()=>this.boost(t)}
    >
      ${f(`store.tribe_boost_button`)}
      <span class="flex items-center gap-0.5 normal-case">
        <plutonium-icon .size=${14}></plutonium-icon>${n.boostPriceHard}
      </span>
    </button>`}renderStatsButton(t){return J[t.status]===`active`?D`<button
      class="shrink-0 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white text-xs font-bold uppercase tracking-wider rounded px-2.5 py-1.5 transition-colors cursor-pointer"
      @click=${()=>this.statsName=t.displayName}
    >
      ${f(`store.tribe_stats_button`)}
    </button>`:e}renderTribeRow(e){let t=Y[J[e.status]];return D`<div
      class="flex items-center justify-between gap-3 bg-surface rounded-lg border border-white/10 px-4 py-3"
    >
      <div class="flex flex-col min-w-0">
        <span class="font-bold text-white truncate">${e.displayName}</span>
        ${this.renderBoostStatus(e)}
        ${e.reviewReason?D`<span class="text-xs text-white/50 mt-0.5"
                >${e.reviewReason}</span
              >`:``}
      </div>
      <div class="shrink-0 flex items-center gap-2">
        ${this.renderStatsButton(e)} ${this.renderBoostButton(e)}
        <span
          class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${t.classes}"
        >
          ${f(t.labelKey)}
        </span>
      </div>
    </div>`}renderList(){if(this.data===null)return b();if(this.data===!1)return D`<p
        class="text-white/40 text-sm font-bold uppercase tracking-wider text-center py-8"
      >
        ${f(`store.tribes_load_failed`)}
      </p>`;let e=[...this.data.names].sort((e,t)=>(t.activeBoosts??0)-(e.activeBoosts??0));return e.length===0?D`<p
        class="text-white/40 text-sm font-bold uppercase tracking-wider text-center py-8"
      >
        ${f(`store.no_tribes`)}
      </p>`:D`<div class="flex flex-col gap-2">
      ${e.map(e=>this.renderTribeRow(e))}
    </div>`}render(){return this.userMeResponse===!1?this.renderLoginPrompt():this.statsName===null?D`<div
      class="p-6 lg:p-8 flex flex-col gap-6 max-w-2xl mx-auto w-full"
    >
      ${this.renderPurchaseCard()}
      <section class="flex flex-col gap-3">
        <h3
          class="text-sm font-bold uppercase tracking-wider text-white/60 px-1"
        >
          ${f(`store.your_tribes_heading`)}
        </h3>
        ${this.boostNotice?D`<p
                class="text-sm font-medium px-1 ${this.boostNotice.kind===`success`?`text-green-400`:`text-red-400`}"
              >
                ${this.boostNotice.text}
              </p>`:``}
        ${this.renderList()}
      </section>
      <insufficient-currency-dialog
        .info=${this.insufficientInfo}
        @close=${()=>this.insufficientInfo=null}
      ></insufficient-currency-dialog>
    </div>`:D`<div
        class="p-6 lg:p-8 flex flex-col gap-6 max-w-2xl mx-auto w-full"
      >
        <tribe-stats-view
          .tribeName=${this.statsName}
          @back=${()=>this.statsName=null}
        ></tribe-stats-view>
      </div>`}};S([m({attribute:!1})],X.prototype,`userMeResponse`,void 0),S([a()],X.prototype,`data`,void 0),S([a()],X.prototype,`purchasing`,void 0),S([a()],X.prototype,`notice`,void 0),S([a()],X.prototype,`tribeNamesConfig`,void 0),S([a()],X.prototype,`boostingId`,void 0),S([a()],X.prototype,`boostNotice`,void 0),S([a()],X.prototype,`insufficientInfo`,void 0),S([a()],X.prototype,`statsName`,void 0),S([A(`#tribe-name-input`)],X.prototype,`input`,void 0),X=K=S([p(`tribes-panel`)],X);var Z=new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`});function te(e){return Z.format(e/100)}var ne=[`patterns`,`flags`,`crowns`];function Q(e){return e.startsWith(`crown:`)?`crowns`:e.startsWith(`flag:`)?`flags`:`patterns`}var $=class extends n{constructor(...e){super(...e),this.routerName=`store`,this.cosmetics=null,this.affiliateCode=null,this.userMeResponse=!1,this.authSettled=!1,this.cosmeticsSubTab=`patterns`,this.requestedItem=null,this.inspected=null,this.previewingCosmetic=null,this.visibleGroups=[],this.openedPack=null,this.pages=new z(this),this.onUserMeEvent=e=>{let t=e;this.onUserMe(t.detail)},this.onOpenCosmeticPreview=e=>{let t=e;this.previewingCosmetic=t.detail,this.requestUpdate()},this.rowObserver=null,this.alignFrame=null}modalConfig(){return this.affiliateCode?{showScrollToTop:!0}:{showScrollToTop:!0,tabs:[{key:`packs`,label:f(`store.packs`)},{key:`subscriptions`,label:f(`store.subscriptions`)},{key:`bundles`,label:f(`store.bundles`)},{key:`cosmetics`,label:f(`store.cosmetics`)},{key:`effects`,label:f(`store.effects`)},{key:`tribes`,label:f(`store.tribes`)}]}}connectedCallback(){super.connectedCallback(),document.addEventListener(`userMeResponse`,this.onUserMeEvent);let e=v();e!==null&&this.onUserMe(e.response),this.addEventListener(`open-cosmetic-preview`,this.onOpenCosmeticPreview),typeof ResizeObserver<`u`&&(this.rowObserver??=new ResizeObserver(()=>L(this)),this.rowObserver.observe(this))}disconnectedCallback(){document.removeEventListener(`userMeResponse`,this.onUserMeEvent),this.removeEventListener(`open-cosmetic-preview`,this.onOpenCosmeticPreview),this.rowObserver?.disconnect(),this.alignFrame!==null&&cancelAnimationFrame(this.alignFrame),this.alignFrame=null,super.disconnectedCallback()}updated(e){super.updated(e),L(this),!(typeof requestAnimationFrame>`u`)&&(this.alignFrame??=requestAnimationFrame(()=>{this.alignFrame=null,L(this)}))}async onUserMe(e){this.userMeResponse=e,this.authSettled=!0,this.cosmetics=await r(),this.selectVisible(this.groupsForTab(this.activeTab)),await this.refresh()}renderHeader(){let e=this.userMeResponse===!1?void 0:this.userMeResponse.player.currency;return d({title:f(`store.title`),onBack:()=>this.close(),ariaLabel:f(`common.back`),rightContent:D`<div class="flex items-center gap-4">
        ${e?D`<currency-display
                .hard=${e.hard}
                .soft=${e.soft}
              ></currency-display>`:``}
        <not-logged-in-warning></not-logged-in-warning>
      </div>`})}resolvedPurchasables(){return x(this.cosmetics,this.userMeResponse,this.affiliateCode).filter(e=>e.relationship===`purchasable`)}cosmeticsGroups(e){let t=this.resolvedPurchasables();return e===`flags`?t.filter(e=>e.type===`flag`).map(e=>[e]):e===`crowns`?t.filter(e=>e.type===`crown`).map(e=>[e]):h(t.filter(e=>e.type===`pattern`||e.type===`skin`))}groupsForTab(e){return this.affiliateCode?h(this.resolvedPurchasables().filter(e=>{let t=e.cosmetic;return t!==null&&`affiliateCode`in t&&t.affiliateCode===this.affiliateCode})):e===`cosmetics`?this.cosmeticsGroups(this.cosmeticsSubTab):e===`effects`?this.resolvedPurchasables().filter(e=>e.type===`effect`).map(e=>[e]):e===`packs`?this.resolvedPurchasables().filter(e=>e.type===`pack`).map(e=>[e]):e===`bundles`?x(this.cosmetics,this.userMeResponse,this.affiliateCode).filter(e=>e.type===`cosmeticPack`&&(e.relationship!==`blocked`||this.ownedPackItemNames(e).length>0)).map(e=>[e]):e===`subscriptions`?x(this.cosmetics,this.userMeResponse,this.affiliateCode).filter(e=>e.type===`subscription`&&(e.relationship===`purchasable`||e.relationship===`owned`)).map(e=>[e]):[]}inspect(e){this.inspected=e,this.requestUpdate()}activate(e){e.type===`cosmeticPack`&&(this.openedPack=e),R(e)&&(this.previewingCosmetic=e),this.inspect(e)}closePack(){this.openedPack=null,this.requestUpdate()}reconcileInspection(e){let t=e.flat(),n=this.requestedItem;if(n!==null){let e=t.find(e=>I(e.key,n));if(e!==void 0){this.requestedItem=null,this.inspected=e;return}}let r=t.find(e=>e.key===this.inspected?.key);this.inspected=r??e[0]?.[0]??null}selectVisible(e){this.visibleGroups=e,this.reconcileInspection(e)}onTabEnter(e){this.selectVisible(this.groupsForTab(e)),this.requestUpdate()}setCosmeticsSubTab(e){this.cosmeticsSubTab=e,this.selectVisible(this.cosmeticsGroups(e)),this.requestUpdate()}ownedPackItemNames(e){return _(e.cosmetic,this.userMeResponse).map(t=>{let n=o(t,e.packItems??[]);return n?P(n):t.name})}renderStatus(e,t=!1){return D`<span
      data-store-status
      class="mt-2 flex min-h-11 w-full items-center justify-center rounded-lg border px-2 py-1.5 text-center font-bold ${t?`border-white/15 bg-white/5 text-xs text-white/60`:`border-emerald-500/40 bg-emerald-500/15 text-base text-emerald-300`}"
      >${e}</span
    >`}renderCardAction(e,t){if(e.type===`subscription`&&e.relationship===`owned`)return this.renderStatus(f(`store.subscribed`));if(e.type===`cosmeticPack`){if(e.relationship===`owned`)return this.renderStatus(f(`store.pack_owned`));if(e.relationship===`blocked`)return this.renderStatus(f(`store.pack_partially_owned`,{items:this.ownedPackItemNames(e).join(`, `)}),!0)}return this.renderPurchaseAction(e,t)}renderCosmeticCards(e=this.visibleGroups,t=!1,n=`block h-full min-w-0`,r=`card`){return D`${e.map(e=>{let i=e.find(e=>e.key===this.inspected?.key),a=i??e[0],o=this.renderCardAction(a,t);return D`<cosmetic-card
        data-store-product
        data-cosmetic-key=${e[0].key}
        class=${n}
        previewSize=${r}
        .resolved=${e[0]}
        .variants=${e.length>1||e[0].type===`pattern`||e[0].type===`skin`?e:[]}
        .activeVariantKey=${a.key}
        .actionContent=${o}
        state=${i?`focused`:`idle`}
        .onActivate=${e=>this.activate(e)}
        .onVariantActivate=${e=>this.inspect(e)}
      ></cosmetic-card>`})}`}renderPurchaseAction(e,n){let r=e.cosmetic,i=e.relationship===`purchasable`,a=i&&(e.type===`pack`||e.type===`subscription`)?r?.product??null:null,o=i&&e.type===`subscription`&&a===null?te(e.cosmetic.priceMonthly):``,s=i?r?.priceHard:void 0,c=i?r?.priceSoft:void 0,l=n=>t(e,n),u=e.type===`pack`&&a!==null&&r?.name!==void 0?O(a.price):null;return D`<purchase-button
      .product=${a}
      .dollarPrice=${o}
      .inlineCheckout=${u===null?null:{request:{kind:`currency_pack`,packName:r.name},amountCents:u,successMessageKey:`store.currency_pack_purchase_success`}}
      .priceHard=${s??null}
      .priceSoft=${c??null}
      .rarity=${r?.rarity??`common`}
      .itemName=${P(e)}
      .dollarLabelKey=${e.type===`subscription`&&n?`store.switch_button`:``}
      .priceSuffix=${e.type===`subscription`?f(`store.price_per_month`):``}
      .onPurchaseDollar=${a||o?()=>l(`dollar`):void 0}
      .onPurchaseHard=${s===void 0?void 0:()=>l(`hard`)}
      .onPurchaseSoft=${c===void 0?void 0:()=>l(`soft`)}
    ></purchase-button>`}renderBrowserLayout(e,t=`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`){return D`<div data-store-browser class="grid grid-cols-1 gap-4 p-3">
      <div data-store-grid class=${t}>${e}</div>
    </div>`}renderBrowser(e,t){let n=this.pages.page(`store-grid`,`${this.affiliateCode??``}:${this.activeTab}:${this.cosmeticsSubTab}`,e),r=e.length===0?t.trailingContent?D``:D`<div
              class=${`${t.emptyClass??`col-span-full`} py-8 text-center text-sm font-bold uppercase tracking-wider text-white/40`}
            >
              ${f(t.emptyTranslationKey)}
            </div>`:this.renderCosmeticCards(n.items,t.userHasSubscription,t.cardClass,t.previewSize);return this.renderBrowserLayout(D`${r}${n.more}${t.trailingContent??``}`,t.gridClass)}renderCosmeticsPanel(){let e=this.cosmeticsSubTab===`flags`?`store.no_flags`:this.cosmeticsSubTab===`crowns`?`store.no_crowns`:`store.no_skins`;return D`
      <div
        class="flex items-center justify-center gap-6 border-b border-white/10 px-4"
      >
        ${ne.map(e=>D`<button
            class="-mb-px whitespace-nowrap border-b-2 px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${this.cosmeticsSubTab===e?`border-malibu-blue text-aquarius`:`border-transparent text-white/40 hover:text-white/70`}"
            @click=${()=>this.setCosmeticsSubTab(e)}
          >
            ${f(`store.${e}`)}
          </button>`)}
      </div>
      ${this.renderBrowser(this.visibleGroups,{emptyTranslationKey:e})}
    `}renderEffectGrid(){return D`<effects-grid
      mode="purchase"
      tabbed
      .cosmetics=${this.cosmetics}
      .userMeResponse=${this.userMeResponse}
      .affiliateCode=${this.affiliateCode}
      .focusedKey=${this.inspected?.key??null}
      .onPurchaseFocus=${e=>this.activate(e)}
      .renderPurchaseAction=${e=>this.renderPurchaseAction(e,!1)}
      .onVisiblePurchaseItemsChange=${e=>{this.selectVisible(e.map(e=>[e])),this.requestUpdate()}}
    ></effects-grid>`}renderPackGrid(){return this.renderBrowser(this.visibleGroups,{emptyTranslationKey:`store.no_packs`,trailingContent:D`<custom-currency-card
        class="block w-[calc(50%-0.5rem)] max-w-48 shrink-0 sm:w-48"
      ></custom-currency-card>`,gridClass:`flex flex-wrap items-stretch justify-center content-start gap-4 p-4 sm:p-8`,cardClass:`block w-[calc(50%-0.5rem)] max-w-48 shrink-0 sm:w-48`,emptyClass:`w-full py-8 text-center text-sm font-bold uppercase tracking-wider text-white/40`})}renderBundleGrid(){return D`${this.renderBrowser(this.visibleGroups,{emptyTranslationKey:`store.no_bundles`})}${this.openedPack&&!this.previewingCosmetic?D`<pack-contents-dialog
            .pack=${this.openedPack}
            .actionContent=${this.renderCardAction(this.openedPack,!1)}
            @close=${()=>this.closePack()}
          ></pack-contents-dialog>`:``}`}renderSubscriptionGrid(){let e=this.userMeResponse===!1?null:this.userMeResponse.player.subscription,t=e!==null&&!M(e),n=this.visibleGroups.length===1;return this.renderBrowser(this.visibleGroups,{emptyTranslationKey:`store.no_subscriptions`,userHasSubscription:t,gridClass:`flex flex-wrap items-stretch justify-center content-start gap-4 p-4 sm:p-8`,cardClass:n?`block w-full max-w-xs shrink-0`:`block w-[calc(50%-0.5rem)] max-w-48 shrink-0 sm:w-48`,previewSize:n?`detail`:`card`,emptyClass:`w-full py-8 text-center text-sm font-bold uppercase tracking-wider text-white/40`})}renderHeaderSlot(){return D`${this.renderHeader()}
    ${this.previewingCosmetic?D`<cosmetic-preview-modal
            .resolved=${this.previewingCosmetic}
            @close-preview=${()=>{this.previewingCosmetic=null,this.requestUpdate()}}
          ></cosmetic-preview-modal>`:``}`}renderBody(e){if(this.affiliateCode)return this.renderAffiliateGrid();switch(e){case`cosmetics`:return this.renderCosmeticsPanel();case`bundles`:return this.renderBundleGrid();case`effects`:return this.renderEffectGrid();case`subscriptions`:return this.renderSubscriptionGrid();case`tribes`:return this.renderTribeGrid();default:return this.renderPackGrid()}}renderTribeGrid(){return this.authSettled?D`<tribes-panel
      .userMeResponse=${this.userMeResponse}
    ></tribes-panel>`:D``}renderAffiliateGrid(){return this.renderBrowser(this.visibleGroups,{emptyTranslationKey:`store.no_affiliate_items`})}async onOpen(e){y();let t=typeof e?.affiliateCode==`string`?e.affiliateCode:null;this.affiliateCode=t,this.requestedItem=typeof e?.item==`string`?e.item:null,this.requestedItem!==null&&(this.cosmeticsSubTab=Q(this.requestedItem)),this.cosmetics??=await r(),this.selectVisible(this.groupsForTab(this.activeTab)),await this.refresh()}onClose(){for(let e of this.querySelectorAll(`inline-checkout`))e.closeCardModal();this.affiliateCode=null,this.openedPack=null,this.previewingCosmetic=null,this.pages.reset(),this.requestedItem=null,this.selectVisible(this.groupsForTab(this.activeTab))}async refresh(){this.requestUpdate()}};S([a()],$.prototype,`authSettled`,void 0),$=S([p(`store-modal`)],$);export{$ as StoreModal,Q as subTabForItem};