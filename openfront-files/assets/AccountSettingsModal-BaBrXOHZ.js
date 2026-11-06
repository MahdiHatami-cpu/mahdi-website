import{$i as e,Aa as t,Hr as n,Ji as r,Qi as i,Vr as a,Wi as o,Xi as s,Xr as c,Yi as l,Zi as u,ci as d,fi as f,hi as p,ia as m,ii as h,jr as g,na as _,pi as v,vr as y,xa as b,xr as x,yi as S,zr as C}from"./index-rCDaHnQd.js";import{n as w,t as T}from"./LinkResult-B1ATr9tT.js";import{n as E}from"./OwnLevelBadge-CHEQfx3U.js";import{t as D}from"./StyledSelect-ChPlupTm.js";import{t as O}from"./ProfileMenuModal-Jtk16L36.js";var k=class extends u{constructor(...e){super(...e),this.typedWord=``,this.portal=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.portal=document.createElement(`div`),document.body.appendChild(this.portal)}disconnectedCallback(){super.disconnectedCallback(),this.portal&&=(i(_``,this.portal),this.portal.remove(),null)}render(){return this.portal&&i(this.renderOverlay(),this.portal),_``}confirmWord(){return o(`account_modal.delete_account_confirm_word`)}wordMatches(){return this.typedWord.trim().toUpperCase()===this.confirmWord().toUpperCase()}renderOverlay(){let e=this.confirmWord();return _`
      <div
        class="fixed inset-0 z-[10020] flex items-center justify-center bg-black/80"
        @click=${e=>{e.target===e.currentTarget&&this.handleCancel()}}
      >
        <div
          class="relative mx-4 w-full max-w-md p-6 rounded-2xl border border-red-500/50 bg-surface shadow-2xl"
        >
          <h2 class="text-lg font-bold text-white mb-2">
            ${o(`account_modal.delete_account_title`)}
          </h2>
          <p class="text-sm font-medium text-red-300 mb-5">
            ${o(`account_modal.delete_account_warning`)}
          </p>
          <label class="block mb-5">
            <span class="text-white/50 text-xs">
              ${o(`account_modal.delete_account_type_to_confirm`,{word:e})}
            </span>
            <input
              type="text"
              .value=${this.typedWord}
              @input=${e=>this.typedWord=e.target.value}
              placeholder=${e}
              autocomplete="off"
              class="mt-1.5 w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-red-500/50 text-sm"
            />
          </label>
          <div class="flex gap-3">
            <button
              @click=${()=>this.handleCancel()}
              class="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/80 transition-all"
            >
              ${o(`common.cancel`)}
            </button>
            <button
              @click=${()=>this.handleConfirm()}
              ?disabled=${!this.wordMatches()}
              class="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-red-600 text-white hover:bg-red-700 transition-all disabled:opacity-50 disabled:pointer-events-none border-0"
            >
              ${o(`account_modal.delete_account_confirm_button`)}
            </button>
          </div>
        </div>
      </div>
    `}handleConfirm(){this.wordMatches()&&this.dispatchEvent(new CustomEvent(`confirm`))}handleCancel(){this.dispatchEvent(new CustomEvent(`cancel`))}};p([r()],k.prototype,`typedWord`,void 0),k=p([s(`delete-account-dialog`)],k);var A=class extends u{constructor(...e){super(...e),this.audiences=[],this.audience=``,this.token=null,this.busy=!1,this.copied=!1,this.errorKey=null,this.expiryTimer=null,this.handleAudienceChange=e=>{this.audience=e,this.clearToken(),this.errorKey=null},this.handleGenerate=async()=>{if(this.busy)return;this.busy=!0,this.errorKey=null,this.clearToken();let e=this.audience,t=await y(e);if(this.busy=!1,e!==this.audience)return;if(!t.ok){this.errorKey=t.code===`rate_limited`?`account_modal.identity_token_rate_limited`:t.code===`logged_out`?`account_modal.identity_token_logged_out`:`account_modal.identity_token_failed`;return}this.token=t.data.token;let n=Date.parse(t.data.expiresAt)-Date.now();this.expiryTimer=setTimeout(()=>this.clearToken(),Math.max(n,0))},this.handleCopy=async()=>{if(this.token)try{await S(this.token,()=>this.copied=!0,()=>this.copied=!1)}catch{}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.loadAudiences()}disconnectedCallback(){this.clearToken(),super.disconnectedCallback()}async loadAudiences(){let e=await g();this.audiences=e,e.includes(this.audience)||(this.audience=e[0]??``,this.clearToken())}render(){return this.audiences.length===0?e:_`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <div class="text-white font-medium">
          ${o(`account_modal.identity_token_title`)}
        </div>
        <div class="text-white/50 text-sm mt-1">
          ${o(`account_modal.identity_token_desc`)}
        </div>
        <div class="mt-4 flex items-center gap-3">
          ${D({options:this.audiences.map(e=>({value:e,label:e})),value:this.audience,onChange:this.handleAudienceChange,ariaLabel:o(`account_modal.identity_token_site`),className:`flex-1`})}
          <o-button
            variant="primary"
            size="sm"
            translationKey="account_modal.identity_token_generate"
            .disable=${this.busy}
            @click=${this.handleGenerate}
          ></o-button>
        </div>
        ${this.errorKey?_`<div class="text-red-400 text-sm mt-3">
                ${o(this.errorKey)}
              </div>`:e}
        ${this.token?this.renderToken(this.token):e}
      </div>
    `}renderToken(e){return _`
      <div class="mt-4 flex items-center gap-3">
        <input
          type="text"
          readonly
          .value=${e}
          aria-label=${o(`account_modal.identity_token_title`)}
          @focus=${e=>e.target.select()}
          class="flex-1 min-w-0 px-3 py-1.5 bg-black/40 border border-white/20 rounded-lg text-white text-xs font-mono focus:outline-none focus:border-blue-500"
        />
        <o-button
          variant="secondary"
          size="sm"
          translationKey=${this.copied?`account_modal.identity_token_copied`:`account_modal.identity_token_copy`}
          @click=${this.handleCopy}
        ></o-button>
      </div>
      <div class="text-white/50 text-xs mt-2">
        ${o(`account_modal.identity_token_note`,{site:this.audience})}
      </div>
    `}clearToken(){this.expiryTimer!==null&&(clearTimeout(this.expiryTimer),this.expiryTimer=null),this.token=null,this.copied=!1}};p([r()],A.prototype,`audiences`,void 0),p([r()],A.prototype,`audience`,void 0),p([r()],A.prototype,`token`,void 0),p([r()],A.prototype,`busy`,void 0),p([r()],A.prototype,`copied`,void 0),p([r()],A.prototype,`errorKey`,void 0),A=p([s(`identity-token-card`)],A);var j={levelHidden:{save:e=>C(e),failedKey:`account_modal.level_visibility_failed`},searchHidden:{save:e=>n(e),failedKey:`account_modal.search_visibility_failed`}},M=class extends u{constructor(...e){super(...e),this.player=null,this.user=null,this.email=``,this.consentBusy=!1,this.privacyBusy={levelHidden:!1,searchHidden:!1},this.deleteDialogOpen=!1,this.deleteBusy=!1,this.handleDeleteAccount=async()=>{if(this.deleteDialogOpen=!1,this.deleteBusy)return;this.deleteBusy=!0;let e=await x();if(this.deleteBusy=!1,e.ok){c(),await v(o(`account_modal.delete_account_scheduled`)),window.location.replace(`/`);return}if(e.code===`logged_out`){c(),window.location.replace(`/`);return}e.code===`forbidden`&&e.message!==void 0?await v(e.message):e.code===`rate_limited`?await v(o(`account_modal.delete_account_rate_limited`)):await v(o(`account_modal.delete_account_failed`))},this.handleEmailInput=e=>{this.email=e.target.value},this.handleSubmit=async()=>{if(!this.email){await v(o(`account_modal.enter_email_address`));return}await v(await d(this.email)?o(`account_modal.recovery_email_sent`,{email:this.email}):o(`account_modal.failed_to_send_recovery_email`))},this.handleLinkGoogle=async()=>{await h()||await v(o(`account_modal.link_google_failed`))}}createRenderRoot(){return this}closeDialogs(){this.deleteDialogOpen=!1}disconnectedCallback(){this.closeDialogs(),super.disconnectedCallback()}isSteamPrimary(){return t(this.user??void 0)}render(){return _`
      <div class="flex flex-col gap-6">
        ${this.renderMarketingCard()} ${this.renderPrivacyCard()}
        <identity-token-card></identity-token-card>
        ${this.renderDeleteAccountCard()}
      </div>
    `}renderMarketingCard(){let t=this.player?.marketingConsent;if(!t)return e;let n=t.hasEmail,r=t.consented===`approved`,i=!n&&this.isSteamPrimary();return _`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <!-- Centred against the title+description block, like the delete card. -->
        <div class="flex items-center justify-between gap-4">
          <div class="flex-1">
            <div class="text-white font-medium">
              ${o(`account_modal.marketing_title`)}
            </div>
            <div class="text-white/50 text-sm mt-1">
              ${o(n?`account_modal.marketing_desc`:i?`account_modal.marketing_no_email_steam`:`account_modal.marketing_no_email`)}
            </div>
          </div>
          ${n||i?_`<button
                  role="switch"
                  aria-checked=${r?`true`:`false`}
                  aria-label=${o(`account_modal.marketing_title`)}
                  ?disabled=${this.consentBusy||i}
                  @click=${()=>this.setConsent(!r)}
                  class="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 disabled:opacity-60 ${r?`bg-malibu-blue shadow-[var(--shadow-malibu-blue-pill)]`:`bg-white/15`}"
                >
                  <span
                    class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${r?`translate-x-6`:`translate-x-1`}"
                  ></span>
                </button>`:e}
        </div>
        ${n||this.isSteamPrimary()?e:this.renderEmailBinding()}
      </div>
    `}renderPrivacyCard(){let t=this.player?.levelHidden,n=this.player?.searchHidden;return t===void 0&&n===void 0?e:_`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <div
          class="text-xs text-white/40 uppercase tracking-widest font-bold mb-4"
        >
          ${o(`account_modal.privacy_title`)}
        </div>
        ${t===void 0?e:_`${this.renderPrivacySwitchRow(o(`account_modal.level_visibility_title`),o(`account_modal.level_visibility_desc`),!t,this.privacyBusy.levelHidden,e=>this.setPrivacyShown(`levelHidden`,e))}
              ${this.renderLevelPreview(!t)}`}
        ${n===void 0?e:_`<div
                class=${t===void 0?``:`mt-4 pt-4 border-t border-white/10`}
              >
                ${this.renderPrivacySwitchRow(o(`account_modal.search_visibility_title`),o(`account_modal.search_visibility_desc`),!n,this.privacyBusy.searchHidden,e=>this.setPrivacyShown(`searchHidden`,e))}
              </div>`}
      </div>
    `}renderPrivacySwitchRow(e,t,n,r,i){return _`
      <div class="flex items-center justify-between gap-4">
        <div class="flex-1">
          <div class="text-white font-medium">${e}</div>
          <div class="text-white/50 text-sm mt-1">${t}</div>
        </div>
        <button
          role="switch"
          aria-checked=${n?`true`:`false`}
          aria-label=${e}
          ?disabled=${r}
          @click=${()=>i(!n)}
          class="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 disabled:opacity-60 ${n?`bg-malibu-blue shadow-[var(--shadow-malibu-blue-pill)]`:`bg-white/15`}"
        >
          <span
            class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${n?`translate-x-6`:`translate-x-1`}"
          ></span>
        </button>
      </div>
    `}renderLevelPreview(t){let n=this.player?.progress;return n===void 0?e:_`
      <div
        class="level-visibility-preview mt-4 flex items-center gap-3 rounded-lg bg-black/20 border border-white/5 px-4 py-3"
        aria-hidden="true"
      >
        <span
          class="text-[10px] uppercase tracking-widest font-bold text-white/40"
          >${o(`account_modal.level_visibility_others_see`)}</span
        >
        <span class="flex items-center gap-1.5 text-white font-semibold">
          ${t?_`<level-badge
                  class="shrink-0"
                  .level=${n.level}
                  .prestige=${n.prestige}
                  ?legend=${n.legend}
                  size="24"
                ></level-badge>`:e}
          ${this.player?.username??``}
        </span>
        ${t?e:_`<span class="ml-auto text-xs text-white/40"
                >${o(`account_modal.level_visibility_hidden`)}</span
              >`}
      </div>
    `}renderEmailBinding(){return _`
      <div class="mt-4 space-y-3">
        ${this.renderEmailField()}
        <div class="flex items-center gap-4 py-1">
          <div class="h-px bg-white/10 flex-1"></div>
          <span
            class="text-[10px] uppercase tracking-widest text-white/30 font-bold"
          >
            ${o(`account_modal.or`)}
          </span>
          <div class="h-px bg-white/10 flex-1"></div>
        </div>
        ${this.user?.google?e:w(this.handleLinkGoogle,b()?`account_modal.link_google_on_web`:`account_modal.link_google`)}
      </div>
    `}renderEmailField(){return _`
      <input
        type="email"
        .value=${this.email}
        @input=${this.handleEmailInput}
        placeholder=${o(`account_modal.email_placeholder`)}
        class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10"
      />
      <o-button
        variant="primary"
        width="block"
        size="md"
        translationKey="account_modal.get_magic_link"
        @click=${this.handleSubmit}
      ></o-button>
    `}renderDeleteAccountCard(){return m.isOnGamePortal()||f.isOnSteam()?e:_`
      <div class="bg-white/5 rounded-xl border border-red-500/30 p-6">
        <!-- The button is one line against a two-line block, so centre it
             rather than pinning it to the first line. -->
        <div class="flex items-center justify-between gap-4">
          <div class="flex-1">
            <div class="text-white font-medium">
              ${o(`account_modal.delete_account_title`)}
            </div>
            <div class="text-white/50 text-sm mt-1">
              ${o(`account_modal.delete_account_desc`)}
            </div>
          </div>
          <o-button
            variant="danger"
            size="sm"
            translationKey="account_modal.delete_account_title"
            .disable=${this.deleteBusy}
            @click=${()=>{this.deleteDialogOpen=!0}}
          ></o-button>
        </div>
      </div>
      ${this.deleteDialogOpen?_`<delete-account-dialog
              @confirm=${this.handleDeleteAccount}
              @cancel=${()=>{this.deleteDialogOpen=!1}}
            ></delete-account-dialog>`:e}
    `}async setConsent(e){let t=this.player?.marketingConsent;if(!t||!t.hasEmail||this.consentBusy)return;let n=t.consented,r=e?`approved`:`denied`;n!==r&&(this.consentBusy=!0,t.consented=r,this.requestUpdate(),await a(e)||(t.consented=n),this.consentBusy=!1,this.requestUpdate())}async setPrivacyShown(e,t){let n=this.player;if(!n||n[e]===void 0||this.privacyBusy[e])return;let r=n[e],i=!t;if(r===i)return;let a=j[e];this.privacyBusy={...this.privacyBusy,[e]:!0},n[e]=i;let s=await a.save(i);n[e]=s.ok?s.hidden:r,this.privacyBusy={...this.privacyBusy,[e]:!1},s.ok&&e===`levelHidden`&&E(),!s.ok&&s.code===`failed`&&await v(o(a.failedKey))}};p([l({attribute:!1})],M.prototype,`player`,void 0),p([l({attribute:!1})],M.prototype,`user`,void 0),p([r()],M.prototype,`email`,void 0),p([r()],M.prototype,`consentBusy`,void 0),p([r()],M.prototype,`privacyBusy`,void 0),p([r()],M.prototype,`deleteDialogOpen`,void 0),p([r()],M.prototype,`deleteBusy`,void 0),M=p([s(`account-settings-panel`)],M);var N=class extends O{constructor(...e){super(...e),this.routerName=`account-settings`,this.titleKey=`account_settings_modal.title`}renderSignedIn(e){return _`
      <div class="custom-scrollbar mr-1">
        <div class="p-6">
          <account-settings-panel
            .player=${e.player}
            .user=${e.user}
          ></account-settings-panel>
        </div>
      </div>
    `}onOpenExtra(e){T(e)}onClose(){this.querySelector(`account-settings-panel`)?.closeDialogs()}};N=p([s(`account-settings-modal`)],N);export{N as AccountSettingsModal};