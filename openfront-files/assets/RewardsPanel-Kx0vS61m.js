import{Ji as e,Nr as t,Pr as n,So as r,Wi as i,Xi as a,Yi as o,Zi as s,gr as c,hi as l,hr as u,ia as d,na as f,pi as p,v as m}from"./index-DDjp_E-y.js";import"./CapIcon-0eHQgjrY.js";import"./PlutoniumIcon-BuTKOJgC.js";var h=class extends s{constructor(...e){super(...e),this.rewards=[],this.signedIn=!1,this.claiming=!1}createRenderRoot(){return this}emitChanged(e){this.dispatchEvent(new CustomEvent(`rewards-changed`,{detail:e,bubbles:!0,composed:!0}))}async handleClaim(e){if(!this.claiming){this.claiming=!0;try{let a=await c(e.id);if(a===!1){await p(i(`account_modal.claim_failed`));return}if(n(),a!==`not_found`&&`held`in a){let n=await t(),i=n===!1?this.rewards:n.player.rewards??[];this.emitChanged({currency:n===!1?null:n.player.currency??null,rewards:i.map(t=>t.id===e.id&&r(t)?{...t,held:a.held}:t)});return}if(a===`not_found`){let n=await t();this.emitChanged({currency:n===!1?null:n.player.currency??null,rewards:n===!1?this.rewards.filter(t=>t.id!==e.id):n.player.rewards??[]});return}this.emitChanged({currency:a.currency,rewards:this.rewards.filter(t=>t.id!==e.id)})}finally{this.claiming=!1}}}async handleClaimAll(){if(!this.claiming){this.claiming=!0;try{let e=await u();if(e===!1){await p(i(`account_modal.claim_failed`));return}n(),this.emitChanged({currency:e.currency,rewards:e.held})}finally{this.claiming=!1}}}formatAmount(e){try{return BigInt(e).toLocaleString()}catch{return e}}rewardLabel(e){let t=m(e.reason);return t===void 0?e.note?e.note:e.reason===`subscription_signup_bonus`?i(`account_modal.reward_signup_bonus`):e.reason===`subscription_monthly_bonus`?i(`account_modal.reward_monthly_bonus`):e.reason===`subscription_daily`?i(`account_modal.reward_daily`):e.reason:i(t)}renderReward(e){let t=e.currencyType===`hard`;return f`
      <div
        class="flex items-center justify-between gap-4 p-3 rounded-lg bg-white/5 border border-white/10"
      >
        <div class="flex items-center gap-3 min-w-0">
          ${t?f`<plutonium-icon .size=${20}></plutonium-icon>`:f`<cap-icon .size=${20}></cap-icon>`}
          <div class="flex flex-col min-w-0">
            <span
              class="text-sm font-bold ${t?`text-green-400`:`text-amber-700`}"
              >+${this.formatAmount(e.amount)}</span
            >
            <span class="text-xs text-white/60 truncate"
              >${this.rewardLabel(e)}</span
            >
          </div>
        </div>
        ${r(e)?f`<o-button
                variant="primary"
                size="xs"
                translationKey="account_modal.claim"
                .disable=${this.claiming}
                @click=${()=>this.handleClaim(e)}
              ></o-button>`:f`<span
                data-reward-held
                class="shrink-0 text-xs font-bold text-white/60 text-right"
                >${e.held===`trust`?i(`account_modal.reward_held_trust`):``}</span
              >`}
      </div>
    `}trustNoteKey(){let e=d.isOnGamePortal();return this.signedIn?e?`account_modal.reward_held_trust_info_crazygames`:`account_modal.reward_held_trust_info`:e?`account_modal.reward_held_trust_info_signed_out_crazygames`:`account_modal.reward_held_trust_info_signed_out`}otherHoldNoteKey(){return`account_modal.reward_held_other_info`}renderHeldNotes(){let e=this.rewards.filter(e=>!r(e)),t=new Set;return e.some(e=>e.held===`trust`)&&t.add(this.trustNoteKey()),e.some(e=>e.held!==`trust`)&&t.add(this.otherHoldNoteKey()),[...t].map(e=>f`<p data-reward-held-note class="mt-3 text-xs text-white/60">
          ${i(e)}
        </p>`)}render(){if(this.rewards.length===0)return f``;let e=this.rewards.filter(r);return f`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <div class="flex items-center justify-between gap-4 mb-4">
          <h3 class="text-lg font-bold text-white flex items-center gap-2">
            <span>🎁</span>
            ${i(`account_modal.unclaimed_rewards`)}
          </h3>
          ${e.length>1?f`<o-button
                  variant="primary"
                  size="xs"
                  translationKey="account_modal.claim_all"
                  .disable=${this.claiming}
                  @click=${this.handleClaimAll}
                ></o-button>`:``}
        </div>
        <div class="flex flex-col gap-2">
          ${this.rewards.map(e=>this.renderReward(e))}
        </div>
        ${this.renderHeldNotes()}
      </div>
    `}};l([o({type:Array})],h.prototype,`rewards`,void 0),l([o({type:Boolean})],h.prototype,`signedIn`,void 0),l([e()],h.prototype,`claiming`,void 0),h=l([a(`rewards-panel`)],h);